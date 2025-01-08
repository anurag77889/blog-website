import { DEV_CLIENT_PAGES_MANIFEST } from "next/dist/shared/lib/constants";
import Head from "next/head";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default function Posts({ posts }) {
  return (
    <div className="min-h-screen bg-yellow-400">
      <Head>
        <title>Blog Posts</title>
      </Head>
      <header className="bg-blue-500 text-white p-4 text-center text-2xl font-bold">
        Blog Posts
      </header>
      <main className="p-4">
        <h1 className="text-3xl font-semibold mb-6">All Posts</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl"
            >
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.body.substring(0, 100)}...</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
