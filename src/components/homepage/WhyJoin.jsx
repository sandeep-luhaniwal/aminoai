import Image from 'next/image'
import { WHY_JOIN_AMILOAI_CARD, WHY_JOIN_AMINOAI_CARD } from '../common/Helper'

const WhyJoin = () => {
    return (
        <div className='bg-black'>
            <div className="max-w-[1200px] mx-auto w-full px-4 xl:px-0 py-16 md:py-[70px] lg:py-20">
                <h2 className='text-4xl md:text-5xl text-white font-bold'>AMILO AI kyu join karein?</h2>
                <p className='pt-2 text-xl md:text-[22px] font-medium text-white'>AMILO AI ke advanced tools se aapke business me jyada fayeda hoga.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 pt-10 md:pt-12 gap-8 sm:gap-6">
                    {WHY_JOIN_AMILOAI_CARD.map((obj, i) => {
                        return (
                            <div className='w-full h-full '>
                                <div className="overflow-hidden group rounded-md xl:rounded-3xl">
                                    <Image src={obj.image} alt='card' height={400} width={400} className='w-full group-hover:scale-110 duration-300 sm:max-h-[220px] md:max-h-[208px] xl:max-h-[180px] rounded-md object-cover xl:rounded-3xl' />
                                </div>
                                <h3 className='text-white text-2xl pt-3 pb-2.5 lg:py-4 font-bold'>{obj.title}</h3>
                                <p className="text-white text-base !leading-[120%]">{obj.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default WhyJoin
