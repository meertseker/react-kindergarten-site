"use client"
import React, { useState } from 'react'
import Header from '../components/Header'
import Image from 'next/image';
const Siniflar = () => {
  // Sınıfların verileri (gerçek verileri burada tanımlayın)
  const siniflar = [
    {
      id: 1,
      isim: "Minik Tomurcuklar",
      yaş: "2-3",
      kapasite: 12,
      açıklama: "Çocuklarımızın ilk okul deneyimlerini yaşadıkları, güvenli ve sıcak bir ortamda temel kavramları oyunlarla keşfettikleri sınıfımız.",
      özellikleri: ["Güvenli oyun alanı", "Montessori materyalleri", "Yumuşak oyun köşesi", "Kitap köşesi"],
      fotoğraflar: ["/sinif1-1.jpg", "/sinif1-2.jpg", "/sinif1-3.jpg"]
    },
    {
      id: 2,
      isim: "Meraklı Kâşifler",
      yaş: "3-4",
      kapasite: 15,
      açıklama: "Çocuklarımızın doğal meraklarını destekleyen, keşif ve deneyim odaklı etkinliklerle zenginleştirilmiş sınıfımız.",
      özellikleri: ["Bilim köşesi", "Sanat atölyesi", "Drama alanı", "Bahçe aktiviteleri"],
      fotoğraflar: ["/sinif2-1.jpg", "/sinif2-2.jpg", "/sinif2-3.jpg"]
    },
    {
      id: 3,
      isim: "Küçük Dahiler",
      yaş: "4-5",
      kapasite: 18,
      açıklama: "Okul öncesi becerilerini geliştiren, problem çözme ve sosyal etkileşime odaklanan etkinliklerle zenginleştirilmiş sınıfımız.",
      özellikleri: ["Mini laboratuvar", "Kodlama başlangıç köşesi", "Matematik oyunları", "Grup etkinlik alanı"],
      fotoğraflar: ["/sinif3-1.jpg", "/sinif3-2.jpg", "/sinif3-3.jpg"]
    },
    {
      id: 4,
      isim: "Akıllı Yunuslar",
      yaş: "5-6",
      kapasite: 20,
      açıklama: "İlkokula hazırlık odaklı, yaratıcı düşünmeyi ve öğrenme becerilerini geliştiren etkinliklerle dolu sınıfımız.",
      özellikleri: ["Okuma hazırlık köşesi", "Proje çalışma alanı", "Teknoloji köşesi", "Grup tartışma alanı"],
      fotoğraflar: ["/cocuklar3.png", "/cocuklar3.png", "cocuklar3.png"]
    }
  ];

  // Seçilen sınıf için state
  const [seçiliSınıf, setSeçiliSınıf] = useState(siniflar[0]);
  // Aktif fotoğraf indeksi için state
  const [aktifFotoIndeksi, setAktifFotoIndeksi] = useState(0);
  // Sanal tur modali için state
  const [sanalTurAçık, setSanalTurAçık] = useState(false);

  // Fonksiyonlar
  const sınıfDeğiştir = (sınıf: any) => {
    setSeçiliSınıf(sınıf);
    setAktifFotoIndeksi(0);
  };

  const sonrakiFoto = () => {
    setAktifFotoIndeksi((prev) => (prev === seçiliSınıf.fotoğraflar.length - 1 ? 0 : prev + 1));
  };

  const öncekiFoto = () => {
    setAktifFotoIndeksi((prev) => (prev === 0 ? seçiliSınıf.fotoğraflar.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-orange-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative py-12 bg-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/90 to-purple-700/80"></div>
        
        {/* Dekoratif Şekiller */}
        <div className="absolute top-6 right-8 w-16 h-16 bg-yellow-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-6 left-12 w-20 h-20 bg-red-500 rounded-full opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sınıflarımız
          </h1>
          <p className="text-white text-lg opacity-90 max-w-2xl mx-auto">
            Çocuklarımızın hayallerini gerçekleştirdiği, keşifler yaptığı, öğrendiği ve eğlendiği özel tasarlanmış sınıflarımızı keşfedin.
          </p>
        </div>
      </div>
      
      {/* Sınıf Seçim Bölümü */}
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {siniflar.map((sınıf) => (
              <button
                key={sınıf.id}
                onClick={() => sınıfDeğiştir(sınıf)}
                className={`px-5 py-3 rounded-full transition-all duration-300 ${
                  seçiliSınıf.id === sınıf.id
                    ? "bg-purple-600 text-white shadow-md"
                    : "bg-purple-100 text-purple-800 hover:bg-purple-200"
                }`}
              >
                {sınıf.isim} ({sınıf.yaş} yaş)
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Seçilen Sınıf Detayları */}
      <div className="py-12 bg-orange-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Fotoğraf Slider */}
              <div className="relative h-80 md:h-auto bg-gray-200">
                {/* Aktif Fotoğraf */}
                <Image 
                  src={seçiliSınıf.fotoğraflar[aktifFotoIndeksi] || "/placeholder.jpg"} 
                  alt={`${seçiliSınıf.isim} sınıfı`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Ok Butonları */}
                <button 
                  onClick={öncekiFoto}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-all"
                  aria-label="Önceki fotoğraf"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={sonrakiFoto}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-all"
                  aria-label="Sonraki fotoğraf"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Fotoğraf Sayacı */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
                  {aktifFotoIndeksi + 1} / {seçiliSınıf.fotoğraflar.length}
                </div>
                
                {/* Sanal Tur Butonu */}
                <button 
                  onClick={() => setSanalTurAçık(true)}
                  className="absolute bottom-4 left-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Sanal Tur
                </button>
              </div>
              
              {/* Sınıf Bilgileri */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-indigo-900">{seçiliSınıf.isim}</h2>
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {seçiliSınıf.yaş} yaş
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">{seçiliSınıf.açıklama}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Sınıf Özellikleri</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {seçiliSınıf.özellikleri.map((özellik, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{özellik}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500">Kapasite</span>
                    <p className="text-lg font-medium">{seçiliSınıf.kapasite} öğrenci</p>
                  </div>
                  
                  <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition-colors">
                    Kayıt Bilgisi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Thumbnail Galerisi */}
      <div className="py-8 bg-orange-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex gap-3 overflow-x-auto pb-4 snap-x">
            {seçiliSınıf.fotoğraflar.map((foto, index) => (
              <div 
                key={index}
                onClick={() => setAktifFotoIndeksi(index)}
                className={`flex-shrink-0 w-24 h-24 md:w-32 md:h-32 snap-start cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                  aktifFotoIndeksi === index ? "border-purple-600 ring-2 ring-purple-300" : "border-transparent"
                }`}
              >
                <Image 
                  src={foto} 
                  alt={`${seçiliSınıf.isim} - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Sanal Tur Modal */}
      {sanalTurAçık && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl relative">
            {/* Modal başlık ve kapat butonu */}
            <div className="bg-indigo-900 text-white p-4 flex items-center justify-between">
              <h3 className="text-lg font-medium">{seçiliSınıf.isim} - Sanal Tur</h3>
              <button 
                onClick={() => setSanalTurAçık(false)}
                className="text-white hover:text-red-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* 360 derece sanal tur içeriği (burada bir iframe veya özel 360 derece görüntüleyici eklenmeli) */}
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              {/* Örnek görüntü - Gerçek uygulamada burada sanal tur iframe'i veya komponenti olmalı */}
              <div className="text-center p-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-lg font-medium text-gray-800 mb-2">360° Sanal Tur</h4>
                <p className="text-gray-600">
                  Bu alanda {seçiliSınıf.isim} sınıfımızın 360 derece sanal turu yer alacaktır.
                </p>
              </div>
            </div>
            
            {/* Alt kısım - İpuçları */}
            <div className="p-4 bg-gray-50 border-t">
              <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  Sürükle: Dön
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  Çift Tıkla: Yakınlaştır
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                  </svg>
                  Kaydır: Yakınlaş/Uzaklaş
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Çağrı Kartları */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Randevu Kartı */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Okul Turu Randevusu</h3>
                <p className="mb-4 opacity-90">Eğitim kurumumuzu yakından tanımak için bir okul turu randevusu alabilirsiniz.</p>
                <button className="bg-white text-indigo-800 font-medium px-5 py-2 rounded-full inline-flex items-center gap-2 hover:bg-indigo-50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Randevu Al
                </button>
              </div>
            </div>
            
            {/* İletişim Kartı */}
            <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Bize Ulaşın</h3>
                <p className="mb-4 opacity-90">Sorularınız için bize telefon veya e-posta ile ulaşabilir, ya da formu doldurabilirsiniz.</p>
                <button className="bg-white text-red-600 font-medium px-5 py-2 rounded-full inline-flex items-center gap-2 hover:bg-red-50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  İletişime Geç
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Siniflar