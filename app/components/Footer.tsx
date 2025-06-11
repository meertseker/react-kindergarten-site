"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SocialMediaLinks from './SocialMediaLinks'

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden" style={{ background: `linear-gradient(to bottom right, #071997, #071997, #071997)` }}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating decorative shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full opacity-20 animate-pulse" style={{ backgroundColor: '#ef6700' }}></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-red-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full opacity-20 animate-pulse" style={{ backgroundColor: '#ef6700', animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-1/3 w-14 h-14 rounded-full opacity-20 animate-pulse" style={{ backgroundColor: '#071997', animationDelay: '0.5s' }}></div>
        
        {/* Decorative triangles */}
        <div className="absolute top-1/4 left-1/3 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent opacity-30" style={{ borderBottomColor: '#ef6700' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-0 h-0 border-l-6 border-r-6 border-b-12 border-l-transparent border-r-transparent opacity-30" style={{ borderBottomColor: '#071997' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 relative mr-3">
                <Image
                  src="/logo.png"
                  alt="Şeker Akademi Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold" style={{ color: '#ef6700' }}>
                Şeker Akademi
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Çocukların mutlu ve güvenli bir ortamda büyüdüğü, öğrendiği ve geliştiği eğitim kurumumuz.
            </p>
            
            {/* Social Media Links */}
            <SocialMediaLinks />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#ef6700' }}>Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Ana Sayfa</Link></li>
              <li><Link href="/hakkimizda" className="text-gray-300 hover:text-white transition-colors duration-200">Hakkımızda</Link></li>
              <li><Link href="/aktiviteler" className="text-gray-300 hover:text-white transition-colors duration-200">Aktiviteler</Link></li>
              <li><Link href="/bultenler" className="text-gray-300 hover:text-white transition-colors duration-200">Bültenler</Link></li>
              <li><Link href="/sss" className="text-gray-300 hover:text-white transition-colors duration-200">Sıkça Sorulan Sorular</Link></li>
              <li><Link href="/iletisim" className="text-gray-300 hover:text-white transition-colors duration-200">İletişim</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#071997' }}>Hizmetlerimiz</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Montessori Eğitimi</span></li>
              <li><span className="text-gray-300">Yaratıcı Drama</span></li>
              <li><span className="text-gray-300">Müzik Eğitimi</span></li>
              <li><span className="text-gray-300">Sanat Atölyesi</span></li>
              <li><span className="text-gray-300">Yabancı Dil</span></li>
              <li><span className="text-gray-300">Spor Aktiviteleri</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#ef6700' }}>İletişim</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#ef6700' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300 text-sm leading-relaxed">
                  Cumhuriyet, Uludağ Sk. No:6<br />
                  34000 Büyükçekmece/İstanbul
                </span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" style={{ color: '#071997' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300 text-sm">0530 101 88 75</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" style={{ color: '#ef6700' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300 text-sm">sekerakademi@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Şeker Akademi. Tüm hakları saklıdır.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/gizlilik" className="text-gray-400 hover:text-white transition-colors duration-200">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim" className="text-gray-400 hover:text-white transition-colors duration-200">
                Kullanım Şartları
              </Link>
              <Link href="/cerez" className="text-gray-400 hover:text-white transition-colors duration-200">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 