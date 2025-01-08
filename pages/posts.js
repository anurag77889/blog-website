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
    <div>
      <Head>
        <title>Blog Posts</title>
      </Head>
      <header>Blog Posts</header>
      <main>
        <h1>All Posts</h1>
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body.substring(0, 100)}...</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
