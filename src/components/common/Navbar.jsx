import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-white fixed bottom-0 left-0 z-50 w-full border-black border-t border-opacity-10'>
            <div className="px-4 max-w-[732px] mx-auto w-full xl:px-0">
                <button className='text-center bg-red-600 hover:bg-red-800 duration-300 w-full p-2.5 rounded-full my-4 text-white text-xl leading-none font-bold'>Join AMILO AI</button>
            </div>
        </div>
    )
}

export default Navbar
