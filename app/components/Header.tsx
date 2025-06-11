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
        <div className="flex items-center font-bold text-lg md:text-xl" style={{ color: '#071997' }}>
            <div className="w-18 h-18">
            <Image src="/logo.png" alt=""                 width={400}
                height={400}/></div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm lg:text-base font-medium" style={{ color: '#071997' }}>

          <Link href="/" className="transition-colors duration-200 hover:opacity-70" style={{ color: '#071997' }}>Anasayfa</Link>
          <Link href="/hakkimizda" className="transition-colors duration-200 hover:opacity-70" style={{ color: '#071997' }}>Hakkımızda</Link>
          <Link href="/bultenler" className="transition-colors duration-200 hover:opacity-70" style={{ color: '#071997' }}>Bultenler</Link>
          <Link href="/aktiviteler" className="transition-colors duration-200 hover:opacity-70" style={{ color: '#071997' }}>Aktiviteler</Link>
          <Link href="/sss" className="transition-colors duration-200 hover:opacity-70" style={{ color: '#071997' }}>Sikca Sorulan Sorular</Link>
        </nav>

        {/* Contact Button - Desktop */}
        <a
          href="/iletisim"
          className="hidden md:block text-white text-sm px-5 py-2 rounded-full transition-colors duration-200 shadow-sm hover:opacity-80"
          style={{ backgroundColor: '#ef6700' }}
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-10 py-4 px-6 flex flex-col space-y-4 font-medium" style={{ color: '#071997' }}>
          <Link href="/" className="transition-colors duration-200 hover:opacity-70" style={{ color: '#071997' }}>Anasayfa</Link>
          <Link href="/hakkimizda" className="transition-colors duration-200 hover:opacity-70" style={{ color: '#071997' }}>Hakkımızda</Link>
          <Link href="/bultenler" className="transition-colors duration-200 hover:opacity-70" style={{ color: '#071997' }}>Bultenler</Link>
          <Link href="/aktiviteler" className="transition-colors duration-200 hover:opacity-70" style={{ color: '#071997' }}>Aktiviteler</Link>
          <Link href="/sss" className="transition-colors duration-200 hover:opacity-70" style={{ color: '#071997' }}>Sikca Sorulan Sorular</Link>
          <Link
            href="/iletisim"
            className="text-white text-center py-2 rounded-full transition-colors duration-200 mt-2 shadow-sm hover:opacity-80"
            style={{ backgroundColor: '#071997' }}
          >
            İletişim
          </Link>
        </div>
      )}
    </div>
  )
}

export default Header