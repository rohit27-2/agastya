import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div>
        <footer class="bg-gray-900 mt-2">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="flex justify-center text-teal-600 sm:justify-start">
        <Image src={'/agastya-logo.png'} height={80} width={150}/>
      </div>

      <p class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
        Copyright &copy; 2024. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer