"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import {
  getItems,
  addItem,
  deleteItem
} from "../_services/shopping-list-service";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useRouter } from "next/navigation";

export default function ShoppingListPage() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (!user) {
      router.push("/week-10");
    } else {
      loadItems();
    }
  }, [user]);

  async function loadItems() {
    const fetchedItems = await getItems(user.uid);
    setItems(fetchedItems);
  }

  async function handleAddItem(newItem) {
    const id = await addItem(user.uid, newItem);
    setItems((prev) => [...prev, { ...newItem, id }]);
  }

  async function handleDeleteItem(id) {
    await deleteItem(user.uid, id);
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function handleItemSelect(itemName) {
    const cleanedName = itemName.split(",")[0].trim().replace(/[^a-zA-Z ]/g, "");
    setSelectedItemName(cleanedName);
  }

  if (!user) return null;

  return (
    <main className="p-7 bg-gray-900 min-h-screen text-white flex gap-8">
      <div className="w-1/2">
        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList
          items={items}
          onItemSelect={handleItemSelect}
          onDeleteItem={handleDeleteItem}
        />
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
