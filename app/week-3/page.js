import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-6 bg-gray-900">
      <h1 className="text-white text-4xl font-bold mb-5">Shopping List</h1>
      <ItemList />
    </main>
  );
}
