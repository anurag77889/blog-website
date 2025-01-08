import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Blog Website</h1>
      <div className="space-x-6">
        <Link href="/" className="hover:text-yellow-400">
          Home
        </Link>
        <Link href="/posts" className="hover:text-yellow-400">
          Posts
        </Link>
      </div>
    </nav>
  );
}
