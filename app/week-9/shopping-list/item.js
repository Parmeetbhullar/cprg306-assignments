"use client";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={() => onSelect(name)}
      className="bg-gray-800 p-3 rounded shadow-md text-white cursor-pointer hover:bg-gray-700 transition"
    >
      <p className="font-bold text-lg">{name}</p>
      <p className="text-white">Buy {quantity} in {category}</p>
    </li>
  );
}
