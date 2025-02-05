import Link  from "next/link";
import Item from './item';
export default function Page() {
    return (
      <main>
        <h1 className="text-4xl text-center py-4">Shopping List</h1>
        <Item/>
        <Link href={"/"}>Back to Home</Link>
      </main>
    );
  }