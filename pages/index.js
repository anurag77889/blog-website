import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-400">
      <Head>
        <title>Blog Website</title>
        <meta
          name="description"
          content="A simple blog website using Next.js"
        />
      </Head>
      <header className="bg-blue-500 text-white p-4 text-center text-2xl font-bold">
        My Blog
      </header>
      <main className="p-4">
        <h1 className="text-3xl font-semibold mb-6">Welcome to my Blog</h1>
        <p>This is a blog website where you can read amazing posts!</p>
      </main>
    </div>
  );
}
