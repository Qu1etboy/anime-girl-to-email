import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isSubmit, setSubmit] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmit(true);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/sendEmail", {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    } catch (err) {
      setSuccess(false);
      console.error(err);
    }

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
        <h1 className="text-6xl font-extrabold mt-10 mb-5 bg-clip-text bg-center text-black/20 bg-[url('https://e1.pxfuel.com/desktop-wallpaper/265/998/desktop-wallpaper-girls-minimalism-pink-background-anime-mugs-school-group-anime-dp.jpg')]">
          Anime Girl To Email
        </h1>
        <Image
          src="/images/anya.jpeg"
          width={500}
          height={300}
          alt="anya"
          className="mb-5"
        />
        <p>Enter your email to recieve an anime girl picture</p>
        <form className="mt-5 flex w-full max-w-lg" onSubmit={handleSubmit}>
          <input
            type="email"
            id="input-email"
            placeholder="yourname@example.com"
            className="p-3 rounded-md rounded-r-none border w-full"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            id="btn-submit"
            className="bg-blue-500 p-3 border border-blue-600 rounded-r-md text-white"
          >
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
                  {isSuccess ? (
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
                  ) : (
                    <svg
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-red-500 mb-3.5 w-12 h-12"
                    >
                      <g>
                        <g id="Error_1_">
                          <g id="Error">
                            <circle cx="16" cy="16" id="BG" r="16" />
                            <path
                              d="M14.5,25h3v-3h-3V25z M14.5,6v13h3V6H14.5z"
                              id="Exclamatory_x5F_Sign"
                              className="fill-white"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  )}
                  <p
                    id="output-msg"
                    className="mb-4 text-lg text-center font-semibold text-gray-900"
                  >
                    {isSuccess
                      ? "Successfully sent your email. Check your email to see the result."
                      : "There was an error sending your email please try again."}
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
          <a
            href="https://github.com/Qu1etboy/anime-girl-to-email"
            className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="fill-black"
              >
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
              </svg>
            </span>
            Source
          </a>
        </div>
      </main>
    </>
  );
}
