import React from 'react'
import Icons from '../common/Icon'

const Hero = () => {
    return (
        <div className='min-h-screen bg-main-hero bg-cover bg-no-repeat'>
            <div className="max-w-[1200px] mx-auto w-full px-4 xl:px-0 flex flex-col justify-center min-h-screen">
                <div className="flex justify-between py-4 w-full">
                    <a className='text-white text-2xl md:text-3xl font-bold leading-none' href="#">AmiloAI</a>
                    <div className="flex flex-col">
                        <p className='flex gap-4 items-center text-xl md:text-2xl justify-end mb-3 text-white cursor-pointer'>English <span><Icons icon={"circleCross"} /></span></p>
                        <a className='text-white text-2xl md:text-3xl text-end font-bold leading-none' href="phoneto:8307964004">8307964004</a>
                        <p className='font-medium text-base pt-0.5 md:text-lg text-end leading-none text-white'>Call us to List your Property now</p>
                    </div>
                </div>
                <div className="flex flex-grow-[1] items-center">
                    <h1 className='text-white max-w-[450px] text-3xl md:text-4xl font-semibold mb-12'>Business grow karna hua aur bhi easy
                        <span className='text-5xl md:text-6xl font-bold my-4 block leading-[140%]'>
                            <span className='relative after:absolute after:w-full after:h-0.5 after:bg-red-600 after:left-0 after:bottom-0'>Sirf</span> aapke liye.
                        </span>
                        {" "}<span className='font-medium'>AMILO AI baniye sirf 30 minutes mein.</span>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Hero
