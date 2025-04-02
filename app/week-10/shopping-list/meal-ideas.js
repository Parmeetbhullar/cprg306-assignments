"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMealId, setSelectedMealId] = useState(null);
  const [mealDetails, setMealDetails] = useState({});

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas(ingredient);
    }
  }, [ingredient]);

  async function loadMealIdeas(ingredient) {
    const mealList = await fetchMealIdeas(ingredient);
    setMeals(mealList);
    setSelectedMealId(null);
    setMealDetails({});
  }

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      return [];
    }
  }

  async function fetchMealDetails(mealId) {
    if (selectedMealId === mealId) {
      setSelectedMealId(null);
      setMealDetails({});
      return;
    }

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const data = await response.json();

      if (!data.meals || data.meals.length === 0) return;

      const mealInfo = data.meals[0];

      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = mealInfo[`strIngredient${i}`];
        const measure = mealInfo[`strMeasure${i}`];

        if (ingredient && ingredient.trim()) {
          ingredients.push(`${ingredient} (${measure.trim() || " "})`);
        }
      }

      setSelectedMealId(mealId);
      setMealDetails({ ...mealInfo, ingredients });
    } catch (error) {
      console.error("Error fetching meal details:", error);
    }
  }

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Meal Ideas</h2>
      <p className="text-lg mt-2 border-b border-gray-200 pb-2">
        Here are some meal ideas using <span className="font-bold">{ingredient}</span>:
      </p>
      <ul className="mt-4 space-y-2">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className={`p-3 bg-gray-800 rounded-md hover:bg-orange-800 shadow-md cursor-pointer transition 
              ${selectedMealId === meal.idMeal ? "bg-gray-500 text-white" : "hover:bg-orange-800 hover:text-white"}`}
            onClick={() => fetchMealDetails(meal.idMeal)}
          >
            <div className="flex items-center gap-3">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-15 rounded-md" />
              <p className="text-lg font-bold">{meal.strMeal}</p>
            </div>

            {selectedMealId === meal.idMeal && mealDetails.ingredients && (
              <div className="mt-3 p-2 bg-gray-900 rounded-md">
                <p className="font-semibold text-gray-300">Ingredients needed:</p>
                <ul className="list-disc list-inside text-gray-300 text-sm">
                  {mealDetails.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}