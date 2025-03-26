"use client";

import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ShoppingListPage() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  if (!user) {
    router.push("/week-9"); // redirect to login
    return null;
  }

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  function handleItemSelect(name) {
    const cleaned = name.split(",")[0].trim().replace(/[^a-zA-Z ]/g, "");
    setSelectedItemName(cleaned);
  }

  return (
    <main className="p-7 bg-gray-900 min-h-screen text-white flex gap-8">
      <div className="w-1/2">
        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
        <button
          onClick={firebaseSignOut}
          className="mt-4 bg-red-600 px-4 py-2 rounded hover:bg-red-800"
        >
          Logout
        </button>
      </div>
      <div className="w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
