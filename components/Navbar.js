import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h1>Blog Website</h1>
      <div>
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
      </div>
    </nav>
  );
}
