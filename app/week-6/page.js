import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-5 bg-gray-900">
      <h1 className="text-white text-3xl font-bold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
}
