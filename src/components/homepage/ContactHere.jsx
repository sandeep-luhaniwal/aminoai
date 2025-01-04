import React from 'react'

const ContactHere = () => {
    return (
        <div className="max-w-[1200px] mx-auto w-full px-4 xl:px-0 py-16 md:py-[70px] lg:py-20">
            <h2 className='text-4xl md:text-5xl text-black font-bold md:text-center'>Humare saath connected rahe!</h2>
            <p className='pt-2 text-xl md:text-[22px] font-medium text-black md:text-center'>Sign up karein aur janiye OYO se judne ke fayede.</p>
            <form className="max-w-[700px] mx-auto pt-10">
                <input type="tel" name="phone" placeholder='Please enter your Number' className='w-full p-2 border-red-500 border-[2px] hover:border-black duration-300 focus:outline-none rounded-md' />
                <button className='text-center bg-red-600 hover:bg-red-800 duration-300 w-full p-2.5 rounded-full mt-6 text-white text-xl leading-none font-bold'>Submit </button>
            </form>
        </div>
    )
}

export default ContactHere
