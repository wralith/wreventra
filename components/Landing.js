import React from "react";
import Link from "next/link";

function Landing() {
  return (
    <>
      <section className="relative z-10 m-auto mt-10 mb-20 flex h-[80vh] w-[90%] flex-col justify-around overflow-hidden rounded-md bg-gray-800/50 text-white">
        <div className="z-20 flex flex-col gap-12 p-24 text-left">
          <h2 className="text-3xl text-gray-900">
            <span className="text-5xl text-white">Wr</span>eventra
          </h2>
          <p className="rounded-lg bg-gray-900/50 p-24 pl-6 text-5xl shadow-lg backdrop-blur-sm sm:text-center">
            Create, share and join events.
          </p>
          <Link href="/event">
          <a className="btn-primary sm:m-0 m-auto border-2 border-red-900 text-2xl w-48 text-center">Go To Events</a>
          </Link>
          <a
            href="#more-information"
            className="hover:text-red-500 relative sm:top-24 sm:m-0 m-auto w-48 text-center"
          >
            More Information...
          </a>
        </div>
        <div className="pointer-events-none absolute hidden overflow-clip object-cover lg:inline-block">
          <img
            className="relative left-[50%] h-full rounded-full object-fill shadow-lg"
            src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
            alt="concert-img"
            width="100%"
            height="100%"
          />
        </div>

        <div className="pointer-events-none absolute h-[80vh] w-[100%] overflow-hidden rounded-md">
          <svg
            className="relative w-[175rem] opacity-100"
            viewBox="0 0 350 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgb(239 68 68)"
              d="M28.7,-44.4C43,-41.4,64.6,-45.5,69.6,-39.3C74.6,-33.1,63.2,-16.6,58,-3C52.8,10.6,53.8,21.1,52.5,33.7C51.1,46.2,47.3,60.7,38.1,71C29,81.3,14.5,87.4,3.7,80.9C-7,74.4,-14,55.4,-23.5,45.3C-32.9,35.2,-44.9,34,-49.6,27.9C-54.4,21.9,-51.9,10.9,-51.9,0C-51.9,-11,-54.5,-22,-51.9,-31.6C-49.2,-41.2,-41.2,-49.4,-31.7,-55.2C-22.1,-61.1,-11.1,-64.6,-2,-61.2C7.2,-57.8,14.3,-47.5,28.7,-44.4Z"
            />
          </svg>
        </div>
      </section>

      <section
        id="more-information"
        className=" relative z-10 m-auto mb-20 mt-2 flex h-[80vh] w-[90%] flex-col justify-evenly overflow-hidden rounded-md bg-gray-800/50 px-20 text-left text-white"
      >
        <h1 className="text-5xl">Information</h1>
        <p className="w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          aliquam optio accusamus quam fuga maiores, pariatur, quaerat esse
          corrupti libero placeat vitae! Tempora accusamus assumenda nobis error
          quos quod incidunt reprehenderit officia.
        </p>
      </section>
    </>
  );
}

export default Landing;
