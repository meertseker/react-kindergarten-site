"use client"
import React from 'react'
import Image from 'next/image'

interface AboutSectionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  imageSrc: string
  imageAlt: string
  imagePosition: 'left' | 'right'
  backgroundColor?: string
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  imagePosition,
  backgroundColor = 'green-400'
}) => {
  const isImageLeft = imagePosition === 'left'
  
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
      {/* Image Area */}
      <div className={`md:w-1/2 relative order-2 md:${isImageLeft ? 'order-1' : 'order-2'} hidden md:block`}>
        {/* Decorative Background */}
        <div className={`absolute -z-10 ${isImageLeft ? 'left-0' : 'right-0'} bottom-0 w-3/4 h-3/4 rounded-full opacity-70`} style={{ backgroundColor }}></div>
        
        {/* Decorative Elements */}
        {!isImageLeft && (
          <div className="hidden sm:flex absolute top-8 right-8 flex-col gap-2 z-10">
            <div className="flex gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e657a2' }}>
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: '#071997' }}>
                <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                <div className="w-2 h-2 bg-white rounded-full ml-1"></div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-10 h-10 rounded-md" style={{ backgroundColor: '#f5da28' }}></div>
              <div className="w-10 h-10 rounded-md rotate-45" style={{ backgroundColor: '#3ba4cc' }}></div>
            </div>
          </div>
        )}

        {/* Child image */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="relative z-0 w-full max-w-md h-auto rounded-lg object-cover"
          width={400}
          height={400}
        />
      </div>
      
      {/* Text Content */}
      <div className={`md:w-1/2 order-1 md:${isImageLeft ? 'order-2' : 'order-1'}`}>
        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#071997' }}>
          {title}
        </h2>
        <p className="text-gray-700 mb-6">
          {description}
        </p>
        <a 
          href={buttonLink}
          className="inline-block text-white font-medium px-6 py-3 rounded-full transition-colors duration-200 shadow-sm hover:opacity-80"
          style={{ backgroundColor: '#ef6700' }}
        >
          {buttonText}
        </a>
      </div>
    </div>
  )
}

export default AboutSection 