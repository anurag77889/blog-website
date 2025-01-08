import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Blog Website</title>
        <meta
          name="description"
          content="A simple blog website using Next.js"
        />
      </Head>
      <header>My Blog</header>
      <main>
        <h1>Welcome to my Blog</h1>
        <p>This is a blog website where you can read amazing posts!</p>
      </main>
    </div>
  );
}
