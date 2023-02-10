import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isSubmit, setSubmit] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmit(true);
    setLoading(true);

    await fetch("http://localhost:4000/sendEmail", {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setLoading(false);
  };

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
        <form className="mt-5" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="yourname@example.com"
            className="p-3 rounded-md rounded-r-none border"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="bg-blue-500 p-3 border border-blue-600 rounded-r-md text-white">
            Submit
          </button>
        </form>
        {isSubmit && (
          <div className="fixed flex justify-center items-center w-full h-screen">
            <div className="w-96 h-96 flex flex-col justify-center items-center bg-white border rounded-md p-5 z-10">
              {isLoading ? (
                <>
                  <div className="mb-5">
                    Sending your email please wait a minute
                  </div>
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-10 h-10 mr-2 text-gray-200 animate-spin fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-12 h-12 rounded-full bg-green-100 p-2 flex items-center justify-center mx-auto mb-3.5">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Success</span>
                  </div>
                  <p className="mb-4 text-lg text-center font-semibold text-gray-900">
                    Successfully sent your email. Check your email to see the
                    result.
                  </p>
                  <button
                    data-modal-toggle="successModal"
                    type="button"
                    className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300"
                    onClick={() => setSubmit(false)}
                  >
                    Continue
                  </button>
                </>
              )}
            </div>
            <div className="fixed w-full h-screen bg-black/40"></div>
          </div>
        )}
        <div className="flex mt-10">
          <a href="https://github.com/Qu1etboy/anime-girl-to-email">GitHub</a>
        </div>
      </main>
    </>
  );
}
