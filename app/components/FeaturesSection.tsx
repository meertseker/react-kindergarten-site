"use client"
import React from 'react'

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: "Deneyimli Eğitmen Kadrosu",
      description: "Alanında uzman, sertifikalı öğretmenlerimiz çocuklarınızın gelişimine rehberlik eder."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Güvenli Ortam",
      description: "24/7 güvenlik kamerası, güvenli oyuncaklar ve hijyenik ortamla çocuklarınız güvende."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Modern Eğitim Anlayışı",
      description: "Montessori ve oyun temelli öğrenme yöntemleriyle çocukların yaratıcılığını geliştiriyoruz."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Sağlıklı Beslenme",
      description: "Beslenme uzmanı kontrolünde hazırlanan menülerle çocukların sağlıklı büyümesini destekliyoruz."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Kişisel Gelişim",
      description: "Her çocuğun bireysel özelliklerini dikkate alarak kişisel gelişim planları oluşturuyoruz."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Oyun Temelli Öğrenme",
      description: "Eğlenceli aktiviteler ve oyunlarla öğrenmeyi sevdiren bir eğitim programı sunuyoruz."
    }
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#071997' }}>
            Neden Şeker Anaokulu?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Çocuğunuzun mutlu, güvenli ve eğlenceli bir ortamda büyümesi için sunduğumuz avantajlar
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                style={{ backgroundColor: index % 2 === 0 ? '#ef6700' : '#3ba4cc', color: 'white' }}
              >
                {feature.icon}
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#071997' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a 
            href="/iletisim"
            className="inline-block text-white font-medium px-8 py-3 rounded-full transition-colors duration-200 shadow-sm hover:opacity-80"
            style={{ backgroundColor: '#ef6700' }}
          >
            Hemen İletişime Geçin
          </a>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection 