import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-2 bg-gray-900">
      <h1 className="text-white text-3xl font-bold mb-5">Shopping List</h1>
      <ItemList />
    </main>
  );
}
