import React from 'react'

const AmiloAiList = () => {
  return (
    <div className='bg-opacity-50 relative bg-oyo-list bg-repeat bg-cover'>
      <div className="absolute inset-0 bg-cover bg-center bg-gradient-to-r from-gray-50 via-white/80 to-white"></div>
      <div className="relative z-30 max-w-[1200px] mx-auto w-full xl:px-0">
        <div className="grid md:grid-cols-2">
          <iframe
            className="w-full h-[300px] md:h-[400px] lg:h-[460px] xl:h-[500px]"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            allow="autoplay; encrypted-media"

          ></iframe>
          <div className="px-4 xl:px-20 py-12 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black inline-block py-2">
            AMILO AI me list karein
            </h2>
            <p className="mt-1 text-base md:text-lg text-gray-700">
              Join us. Hum ensure karenge poora support taki apka business badhta rahe.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AmiloAiList
