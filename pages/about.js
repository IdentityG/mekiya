import React from 'react'

const about = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-200 px-6 pt-24 sm:py-32 lg:overflow-visible lg:px-0">
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
    </svg>
  </div>
  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
        <div className="lg:max-w-lg">
          <p className="text-base font-semibold leading-7 text-blue-600">CEO Mekiya Mamiyo</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Business Profile</h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">Mrs. Mekiya Mamiyo is a distinguished professional with over 40 years of extensive experience in social civic work, women's empowerment, and diverse business sectors. She has significantly contributed to the promotion of peace in Ethiopia, serving as a key reconciliatory figure. Her efforts in mediating peace and stability discussions between the Ethiopian government and various political parties on numerous socioeconomic issues have been instrumental.</p>
        </div>
      </div>
    </div>
    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
      <img className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/mekiya.webp" alt="" />
    </div>
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
        <p className="mt-6 text-xl leading-8 text-gray-700">Currently, Mrs. Mamiyo is at the helm of several successful ventures, including Agricultural Mechanization, Farming, Agro-Industry, Food Complex Manufacturing, Real Estate, and Hospital Development. Her leadership and vision drive these major socioeconomic developmental activities, fostering growth and innovation.</p>
          
         
          <p className="mt-6 text-xl leading-8 text-gray-700">A notable founding member of Awash Bank, Oromiya Bank, Enat Bank, ODA Bank, and the International Share Company of Elmo Qiltu, Mrs. Mamiyo's contributions to the financial sector are significant. She remains dedicated to creating job opportunities for the Ethiopian people and is committed to empowering women in business. Her future endeavors focus on promoting equality, diversity, and inclusion, ensuring a bias-free and discrimination-free environment in all her initiatives.</p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default about