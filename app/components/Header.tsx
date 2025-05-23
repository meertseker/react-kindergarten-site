"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative z-9999">
      <header className="bg-white px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center font-bold text-lg md:text-xl text-indigo-900">
            <div className="w-18 h-18">
            <Image src="/logo.png" alt=""                 width={400}
                height={400}/></div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm lg:text-base text-indigo-800 font-medium">

          <Link href="/" className="hover:text-indigo-700 transition-colors duration-200">Anasayfa</Link>
          <Link href="/bultenler" className="hover:text-indigo-700 transition-colors duration-200">Bultenler</Link>
          <Link href="/aktiviteler" className="hover:text-indigo-700 transition-colors duration-200">Aktiviteler</Link>
          <Link href="/sss" className="hover:text-indigo-700 transition-colors duration-200">Sikca Sorulan Sorular</Link>
        </nav>

        {/* Contact Button - Desktop */}
        <a
          href="#"
          className="hidden md:block bg-red-600 text-white text-sm px-5 py-2 rounded-full hover:bg-red-800 transition-colors duration-200 shadow-sm"
        >
          İletişim
        </a>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-slate-800 p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-10 py-4 px-6 flex flex-col space-y-4 text-slate-800 font-medium">
          <Link href="/" className="hover:text-indigo-700 transition-colors duration-200">Anasayfa</Link>
          <Link href="/bultenler" className="hover:text-indigo-700 transition-colors duration-200">Bultenler</Link>
          <Link href="/aktiviteler" className="hover:text-indigo-700 transition-colors duration-200">Aktiviteler</Link>
          <Link href="/sss" className="hover:text-indigo-700 transition-colors duration-200">Sikca Sorulan Sorular</Link>
          <Link
            href="#"
            className="bg-indigo-700 text-white text-center py-2 rounded-full hover:bg-indigo-800 transition-colors duration-200 mt-2 shadow-sm"
          >
            İletişim
          </Link>
        </div>
      )}
    </div>
  )
}

export default Header