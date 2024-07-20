import React from 'react'

const Gallery = () => {
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
        <h2 className="font-bold text-black text-2xl sm:text-4xl dark:text-white">
           Gallery
        </h2>
        </div>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
      <div class="space-y-2">
        <img class="w-full h-auto object-cover" src="/adaa.jpg" alt="Image Description" />
        <img class="w-full h-auto object-cover" src="/bale.webp" alt="Image Description" />
        <img class="w-full h-auto object-cover" src="/real.webp" alt="Image Description" />
      </div>
      <div class="space-y-2">
        <img class="w-full h-auto object-cover" src="/rose.webp" alt="Image Description" />
        <img class="w-full h-auto object-cover" src="/tower.jpg" alt="Image Description" />
      </div>
      <div class="space-y-2">
        <img class="w-full h-auto object-cover" src="/agri.webp" alt="Image Description" />
        <img class="w-full h-auto object-cover" src="/hos.webp" alt="Image Description" />
        <img class="w-full h-auto object-cover" src="/real.webp" alt="Image Description" />
      </div>
      <div class="space-y-2">
        <img class="w-full h-auto object-cover" src="/adaa.jpg" alt="Image Description" />
        <img class="w-full h-auto object-cover" src="/hos.webp" alt="Image Description" />
      </div>
    </div>
  </div>
  )
}

export default Gallery