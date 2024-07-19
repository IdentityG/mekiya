import React from 'react';
import Link from 'next/link';

const Category = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
        <h2 class="font-bold text-black text-2xl sm:text-4xl dark:text-white">
        Industries
        </h2>
        </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
            <img src="/agri.avif" alt="Atlassian" className="h-full w-full object-cover rounded-t-xl" />
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
            Mekiya Mechanization
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
            Pioneering Agricultural Innovation in Ethiopia
            </h3>
            <p className="mt-3 text-gray-500 dark:text-neutral-500">
            Spearheading mechanized farming techniques to optimize agricultural productivity. With a focus on advanced machinery and equipment, Mekiya Mechanization leads the charge in modernizing various sectors, from agriculture to manufacturing. Experience the power of technology and tradition converging harmoniously to cultivate a brighter future for Ethiopian agriculture.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 dark:border-neutral-700">
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-b-xl bg-white text-gray-800 shadow-sm hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="/agriculture">
              Read more
            </a>
          </div>
        </div>

        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-52 flex flex-col justify-center items-center bg-rose-500 rounded-t-xl">
            <img src="/bale.avif" alt="Asana" className="h-full w-full object-cover rounded-t-xl" />
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-rose-600 dark:text-rose-500">
            Bale and Welega Mechanized Cereal Farm
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
            Excellence in Cereal Farming
            </h3>
            <p className="mt-3 text-gray-500 dark:text-neutral-500">
            Specializing in wheat, corn, and similar crops. Mekiya Enterprise has been at the forefront of revolutionizing farming practices, introducing modern techniques and equipment across Ethiopia, setting new standards of efficiency and productivity.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 dark:border-neutral-700">
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-b-xl bg-white text-gray-800 shadow-sm hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="/bale">
              Read more
            </a>
          </div>
        </div>

        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-52 flex flex-col justify-center items-center bg-amber-500 rounded-t-xl">
            <img src="/ad.jpg" alt="Slack" className="h-full w-full object-cover rounded-t-xl" />
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-amber-500">
            ADA Food Complex Factory S.C.
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
            Transforming Tradition into Innovation
            </h3>
            <p className="mt-3 text-gray-500 dark:text-neutral-500">
            Embracing innovation in food production with cutting-edge technologies, including a revolutionary spaghetti line, state-of-the-art flour factory, precision-engineered macaroni line, and modern biscuits factory. ADA Food Complex Factory S.C. ensures premium-grade food products that meet the highest standards of taste and nutrition.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 dark:border-neutral-700">
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-b-xl bg-white text-gray-800 shadow-sm hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="ada">
              Read more
            </a>
          </div>
        </div>


        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-52 flex flex-col justify-center items-center bg-amber-500 rounded-t-xl">
            <img src="/hos.avif" alt="Slack" className="h-full w-full object-cover rounded-t-xl" />
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-green-500">
            Le Vie Mekiya Hospital
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
            World-Class Healthcare Services
            </h3>
            <p className="mt-3 text-gray-500 dark:text-neutral-500">
            Renowned for its state-of-the-art facilities and compassionate care, Le Vie Mekiya Hospital provides effective treatment with a team of skilled healthcare professionals. The hospital aims to improve healthcare outcomes and enhance the well-being of the community.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 dark:border-neutral-700">
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-b-xl bg-white text-gray-800 shadow-sm hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="hospital">
              Read more
            </a>
          </div>
        </div>


        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-52 flex flex-col justify-center items-center bg-purple-500 rounded-t-xl">
            <img src="/real.avif" alt="Slack" className="h-full w-full object-cover rounded-t-xl" />
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-teal-500">
            Mekiya Real Estate
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
            Premium Real Estate Development
            </h3>
            <p className="mt-3 text-gray-500 dark:text-neutral-500">
            Focusing on the development and management of premium properties. Mekiya Real Estate excels in creating sustainable and aesthetically pleasing environments for modern living and business, setting new standards in the real estate industry.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 dark:border-neutral-700">
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-b-xl bg-white text-gray-800 shadow-sm hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="realestate">
              Read more
            </a>
          </div>
        </div>


        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-52 flex flex-col justify-center items-center bg-amber-500 rounded-t-xl">
            <img src="/rose.avif" alt="Slack" className="h-full w-full object-cover rounded-t-xl" />
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-rose-500">
            Mekiya Rose Exporting
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
            Your Premier Source for Quality Roses
            </h3>
            <p className="mt-3 text-gray-500 dark:text-neutral-500">
            Specializing in the cultivation and distribution of premium quality roses to markets across Europe. Mekiya Enterprise employs cutting-edge techniques and sustainable practices to ensure the highest quality blooms, with a commitment to excellence, sustainability, and customer satisfaction.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 dark:border-neutral-700">
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-b-xl bg-white text-gray-800 shadow-sm hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="rose">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
