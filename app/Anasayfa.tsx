"use client"
import React from 'react'
import Header from './components/Header'
import Image from 'next/image';

const Anasayfa = () => {
  return (
    <div className="min-h-screen bg-white">

      <Header />
      
      {/* Hero Section with Background Image */}
      <div 
        className="relative overflow-hidden pt-16 pb-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/cocuklar3.png')" }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/70 to-blue-800/50"></div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Headline */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Şeker Egitim Kurumlarina
              <br /> 
              Hoş Geldiniz!
            </h1>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a href="#" className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-full transition-colors duration-200 min-w-36 text-center shadow-md">
                İletişim
              </a>
              <a href="#" className="flex items-center justify-center gap-2 text-white font-medium hover:text-indigo-200 transition-colors duration-200">
                <span className="flex items-center justify-center bg-red-600 text-white rounded-full w-8 h-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </span>
                Sanal tur
              </a>
            </div>
          </div>

          {/* Decorative Elements - Floating on top of background */}
          <div className="hidden md:block">
            {/* Left decorative element */}
            <div className="absolute left-8 top-10 md:left-16 md:top-20 z-10">
              <div className="w-12 h-16 md:w-16 md:h-20">
                <div className="w-full h-full bg-red-500 rounded-t-full"></div>
                <div className="w-8 h-4 md:w-10 md:h-6 bg-yellow-400 rounded-b-lg mx-auto -mt-1"></div>
              </div>
            </div>
            
            {/* Right decorative element */}
            <div className="absolute right-16 top-24 md:right-32 md:top-16 z-10">
              <div className="w-8 h-8 md:w-12 md:h-12">
                <div className="w-full h-full bg-yellow-400 rounded-full relative">
                  <div className="absolute top-0 left-1/4 w-1/2 h-full bg-black opacity-20 rounded-l-full"></div>
                  <div className="absolute top-1/4 right-0 w-full h-1/2 flex justify-between">
                    <div className="w-1 h-full bg-black rounded-full opacity-30"></div>
                    <div className="w-1 h-full bg-black rounded-full opacity-30"></div>
                  </div>
                </div>
                <div className="w-6 h-4 md:w-10 md:h-6 border-2 border-dashed border-yellow-400 border-l-transparent border-r-transparent border-b-transparent rounded-full mt-1 ml-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Text Content */}
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
                Minik kalpler burada büyüyor.
              </h2>
              <p className="text-gray-700 mb-6">
                Eğitim anlayışımız, çocukların kendi hızlarında öğrenmelerine olanak tanıyan oyun temelli ve etkileşimli bir yaklaşıma dayanır. Montessori ve Reggio Emilia yaklaşımlarından ilham alarak hazırladığımız programlarımızla çocukların zihinsel, sosyal, duygusal ve motor gelişimlerini bir bütün olarak destekliyoruz. Her gün yeni bir deneyim, yeni bir öğrenme fırsatı.
              </p>
              <a 
                href="#" 
                className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-full transition-colors duration-200 shadow-sm"
              >
                Daha Fazla
              </a>
            </div>
            
            {/* Image Area */}
            <div className="md:w-1/2 relative">
              {/* Decorative Background */}
              <div className="absolute -z-10 right-0 bottom-0 w-3/4 h-3/4 bg-green-400 rounded-full opacity-70"></div>
              
              {/* Decorative Elements */}
              <div className="hidden sm:flex absolute top-8 right-8 flex-col gap-2 z-10">
                <div className="flex gap-2">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="w-10 h-10 bg-indigo-900 rounded-md flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                    <div className="w-2 h-2 bg-white rounded-full ml-1"></div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-10 h-10 bg-yellow-400 rounded-md"></div>
                  <div className="w-10 h-10 bg-green-500 rounded-md rotate-45"></div>
                </div>
              </div>

              {/* Child image */}
              <Image
                src="/asyalicocuk.png" 
                alt="Eğitici oyuncaklarla gülümseyen çocuk" 
                className="relative z-0 w-full max-w-md h-auto rounded-lg object-cover"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mt-16">
            {/* Image Area */}
            <div className="md:w-1/2 relative order-2 md:order-1">
              {/* Decorative Background */}
              <div className="absolute -z-10 left-0 bottom-0 w-3/4 h-3/4 bg-purple-400 rounded-full opacity-70"></div>
              
              {/* Child image */}
              <Image 
                src="/asyalicocuk.png" 
                alt="Eğitici oyuncaklarla gülümseyen çocuk" 
                className="relative z-0 w-full max-w-md h-auto rounded-lg object-cover"
                width={400}
                height={400}
              />
            </div>
            
            {/* Text Content */}
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
                Minik kalpler burada büyüyor.
              </h2>
              <p className="text-gray-700 mb-6">
                Eğitim anlayışımız, çocukların kendi hızlarında öğrenmelerine olanak tanıyan oyun temelli ve etkileşimli bir yaklaşıma dayanır. Montessori ve Reggio Emilia yaklaşımlarından ilham alarak hazırladığımız programlarımızla çocukların zihinsel, sosyal, duygusal ve motor gelişimlerini bir bütün olarak destekliyoruz. Her gün yeni bir deneyim, yeni bir öğrenme fırsatı.
              </p>
              <a 
                href="#" 
                className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-full transition-colors duration-200 shadow-sm"
              >
                Daha Fazla
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <div className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
                Bize Ulaşın
              </h2>
              <p className="text-gray-700">
                Sorularınız mı var? Formu doldurarak bize ulaşabilirsiniz. En kısa sürede size geri dönüş yapacağız.
              </p>
            </div>
            <div className= "text-black">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
              
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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
                    rows= {4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Bizimle paylaşmak istediğiniz mesajınızı buraya yazabilirsiniz..."
                    required
                  ></textarea>
                </div>
                
                {/* Form Button */}
                <div className="mt-8 flex justify-center">
                  <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-full transition-colors duration-200 shadow-md flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                    Gönder
                  </button>
                </div>
              </form>
            </div></div>
            
            {/* Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {/* Phone */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Telefon</h3>
                <p className="text-gray-600">+90 (212) 123 45 67</p>
              </div>
              
              {/* Email */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">E-posta</h3>
                <p className="text-gray-600">iletisim@sekeregitiim.com</p>
              </div>
              
              {/* Location */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Adres</h3>
                <p className="text-gray-600">Atatürk Caddesi, No: 123<br />Şişli, İstanbul</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Anasayfa