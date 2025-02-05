export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-gray-800 p-4 rounded-lg shadow-md text-white">
      <p className="font-bold text-lg">{name}</p>
      <p className="text-gray-300">Buy {quantity} in {category}</p>
    </li>
  );
}
