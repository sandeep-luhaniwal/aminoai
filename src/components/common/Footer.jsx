import React from 'react'
import { FOOTER_LINK_LIST } from './Helper'

const Footer = () => {
    return (
        <div className='bg-gray-200'>
            <div className="max-w-[1200px] mx-auto w-full px-4 xl:px-0 pt-12 lg:pt-14 pb-28">
                <div className="flex flex-wrap gap-10">
                    {FOOTER_LINK_LIST.map((obj, i) => {
                        return (
                            <div key={i} className='flex flex-col gap-3'>
                                <p className='text-base md:text-lg leading-none font-semibold relative after:absolute after:w-full after:h-0.5 after:bg-red-600 after:left-0 after:-bottom-[3px] max-w-max'>{obj.title}</p>
                                <div className="flex flex-col gap-2">
                                    {obj.links.map((data, index) => (
                                        <a key={index} href="#" className="leading-none text-base relative after:absolute after:w-0 after:h-0.5 after:bg-red-600 after:left-0 after:-bottom-0.5 max-w-max after:duration-300 duration-300 hover:after:w-full">{data}</a>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer
