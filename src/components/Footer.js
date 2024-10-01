import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-blue-950 border-t-2 border-dotted mt-4">
      <div className="w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">About</Link>
            </li>
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
            </li>
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">Licensing</Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
