import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anime Girl To Email</title>
        <meta
          name="description"
          content="A website to sent an anime girl to your email."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center">
        <h1 className="text-6xl font-extrabold mt-10 mb-5">
          Anime Girl To Email
        </h1>
        <p>Enter your email to recieve an anime girl picture</p>
        <form className="mt-5" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="yourname@example.com"
            className="p-3 rounded-md rounded-r-none border"
            required
          />
          <button className="bg-blue-500 p-3 border border-blue-600 rounded-r-md text-white">
            Submit
          </button>
        </form>
        <div className="flex mt-10">
          <a href="https://github.com/Qu1etboy/anime-girl-to-email">GitHub</a>
        </div>
      </main>
    </>
  );
}
