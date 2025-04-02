"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect, onDeleteItem }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div className="p-2 bg-gray-900 text-white min-h-screen">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-2xl font-bold">Sort by:</span>
        <button
          onClick={() => setSortBy("name")}
          className={`${sortBy === "name" ? "bg-orange-500" : "bg-orange-800"} text-white px-4 py-2 rounded`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`${sortBy === "category" ? "bg-orange-500" : "bg-orange-800"} text-white px-4 py-2 rounded`}
        >
          Category
        </button>
      </div>
      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            {...item}
            onSelect={onItemSelect}
            onDelete={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}
