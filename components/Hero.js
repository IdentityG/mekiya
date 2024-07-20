import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="w-full px-0 py-0 relative">
      <div
        data-hs-carousel='{
          "loadingClasses": "opacity-0",
          "isAutoPlay": true,
          "autoPlayInterval": 3000
        }'
        className="relative w-full"
      >
        <div className="hs-carousel relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)] bg-gray-100 rounded-2xl dark:bg-neutral-800">
          <div className="hs-carousel-body absolute top-0 bottom-0 left-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            <div className="hs-carousel-slide w-full relative">
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-col items-center justify-center pb-72">
                <h1 className="text-white lg:text-6xl text-4xl md:text-5xl font-bold">
                  MEKIYA ENTERPRISE
                </h1>
                <span className="text-white text-lg md:text-2xl mt-4 sm:mb-15">
                  Building Trust, Driving Excellence!
                </span>
              </div>
              <div className="relative h-[30rem] md:h-[calc(100vh-106px)] flex flex-col w-full">
                <Image
                  src="/real.webp"
                  layout="fill"
                  objectFit="cover"
                  alt="Mekiya Real Estate"
                  className="z-0"
                />
                <div className="absolute inset-0 flex flex-col justify-end mt-auto w-2/3 ml-10 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10 z-20">
                  <span className="block text-white">Mekiya Real Estate</span>
                  <span className="block text-white text-xs md:text-3xl">
                    Mekiya Real Estate rounds out Mekiya Enterprise's diverse portfolio, focusing on the development and management of premium properties.
                  </span>
                  <div className="mt-5">
                    <a
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                      href="realestate"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hs-carousel-slide w-full relative">
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-col items-center justify-center pb-72">
                <h1 className="text-white lg:text-6xl text-4xl md:text-5xl font-bold">
                  MEKIYA ENTERPRISE
                </h1>
                <span className="text-white text-lg md:text-2xl mt-4 sm:mb-15">
                  Building Trust, Driving Excellence!
                </span>
              </div>
              <div className="relative h-[30rem] md:h-[calc(100vh-106px)] flex flex-col w-full">
                <Image
                  src="/hos.webp"
                  layout="fill"
                  objectFit="cover"
                  alt="Le Vie Mekiya Hospital"
                  className="z-0"
                />
                <div className="absolute inset-0 flex flex-col justify-end mt-auto ml-10 w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10 z-20">
                  <span className="block text-white">LE VIE MEKIYA HOSPITAL</span>
                  <span className="block text-white text-xs md:text-3xl">
                    Represents Mekiya Enterprise's foray into the healthcare sector. Renowned for its state-of-the-art facilities and world-class medical services.
                  </span>
                  <div className="mt-5">
                    <Link href="/hospital">
                      <a
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Read More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="hs-carousel-slide w-full relative">
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-col items-center justify-center pb-72">
                <h1 className="text-white lg:text-6xl text-4xl md:text-5xl font-bold">
                  MEKIYA ENTERPRISE
                </h1>
                <span className="text-white text-lg md:text-2xl mt-4 sm:hidden">
                  Building Trust, Driving Excellence!
                </span>
              </div>
              <div className="relative h-[30rem] md:h-[calc(100vh-106px)] flex flex-col w-full">
                <Image
                  src="/ada.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="ADA Food Complex Factory S.C."
                  className="z-0"
                />
                <div className="absolute inset-0 flex flex-col justify-end mt-auto ml-10 w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10 z-20">
                  <span className="block text-white">ADA Food Complex Factory S.C.</span>
                  <span className="block text-white text-xs md:text-3xl">
                    Located in beautiful Bishoftu City within a short distance of Addis Ababa is one of the most renowned companies in Ethiopia is ADA Food Complex Factory S.C.
                  </span>
                  <div className="mt-5">
                    <a
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                      href="ada"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 left-0 flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-l-2xl focus:outline-none focus:bg-white/20"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="flex-shrink-0 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              ></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>

        <button
          type="button"
          className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 right-0 flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-r-2xl focus:outline-none focus:bg-white/20"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="flex-shrink-0 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </span>
        </button>

        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 left-0 right-0 space-x-2">
          <span className="hs-carousel-pagination-item block w-3 h-3 bg-gray-400 rounded-full cursor-pointer"></span>
          <span className="hs-carousel-pagination-item block w-3 h-3 bg-gray-400 rounded-full cursor-pointer"></span>
          <span className="hs-carousel-pagination-item block w-3 h-3 bg-gray-400 rounded-full cursor-pointer"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
