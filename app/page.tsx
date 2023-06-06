import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
export default function HomePage() {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <a
          href="https://vercel.fyi/roomGPT"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out"
        >
          Read the announcement {" "}
          <span className="text-blue-600">here</span>
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-6xl">
          Unleash the Power of the
          <span className="relative whitespace-nowrap text-blue-600">

            <SquigglyLines />
            <span className="relative">{" "}Comment Section</span>
          </span>{" "}
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-xl sm:text-gray-400  text-gray-500 leading-7">
          Your audience is talking.
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-500">
            {" "} We help you listen
          </span>        </h2>
        <Link
          className="bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
          href="#cta"
        >
          Learn how
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col bg-white rounded-2xl p-10 shadow-2xl">
              <Image
                alt="Generated photo of a room with roomGPT.io"
                width={400}
                height={400}
                src="/flywheel.svg"
                className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
              />

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
