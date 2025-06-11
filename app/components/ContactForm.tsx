"use client"
import React from 'react'

const ContactForm = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20" style={{ backgroundColor: '#e657a2' }}></div>
      <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-20" style={{ backgroundColor: '#f5da28' }}></div>
      
      <form className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Adınız Soyadınız
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:outline-none"
              style={{ 
                '--tw-ring-color': '#3ba4cc'
              } as React.CSSProperties}
              placeholder="Adınız Soyadınız"
              required
            />
          </div>
          
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-posta Adresiniz
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:outline-none"
              style={{ 
                '--tw-ring-color': '#3ba4cc'
              } as React.CSSProperties}
              placeholder="ornek@mail.com"
              required
            />
          </div>
        </div>
        
        {/* Phone Field */}
        <div className="mt-6">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefon Numaranız
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:outline-none"
            style={{ 
              '--tw-ring-color': '#3ba4cc'
            } as React.CSSProperties}
            placeholder="05XX XXX XX XX"
          />
        </div>
        
        {/* Subject Field */}
        <div className="mt-6">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Konu
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:outline-none"
            style={{ 
              '--tw-ring-color': '#3ba4cc'
            } as React.CSSProperties}
            required
          >
            <option value="" disabled selected>Lütfen bir konu seçin</option>
            <option value="kayit">Kayıt Bilgileri</option>
            <option value="program">Eğitim Programları</option>
            <option value="fiyat">Fiyat Bilgisi</option>
            <option value="ziyaret">Ziyaret Talebi</option>
            <option value="diger">Diğer</option>
          </select>
        </div>
        
        {/* Message Field */}
        <div className="mt-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Mesajınız
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:outline-none"
            style={{ 
              '--tw-ring-color': '#3ba4cc'
            } as React.CSSProperties}
            placeholder="Bizimle paylaşmak istediğiniz mesajınızı buraya yazabilirsiniz..."
            required
          ></textarea>
        </div>
        
        {/* Form Button */}
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="text-white font-medium px-8 py-3 rounded-full transition-colors duration-200 shadow-md flex items-center hover:opacity-80"
            style={{ backgroundColor: '#ef6700' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            Gönder
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm 