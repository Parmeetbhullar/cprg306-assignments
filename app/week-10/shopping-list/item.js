"use client";

export default function Item({ id, name, quantity, category, onSelect, onDelete }) {
  return (
    <li
      className="bg-gray-800 p-3 rounded shadow-md text-white cursor-pointer hover:bg-gray-700 transition flex justify-between items-center"
      onClick={() => onSelect(name)}
    >
      <div>
        <p className="font-bold text-lg">{name}</p>
        <p>Buy {quantity} in {category}</p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(id);
        }}
        className="ml-4 bg-red-900 px-2 py-1 rounded hover:bg-red-600 text-sm"
      >
        🗑️
      </button>
    </li>
  );
}
