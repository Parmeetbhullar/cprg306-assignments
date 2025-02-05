export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-gray-800 p-3 shadow-md text-white">
      <p className="font-bold text-lg">{name}</p>
      <p className="text-white">Buy {quantity} in {category}</p>
    </li>
  );
}
