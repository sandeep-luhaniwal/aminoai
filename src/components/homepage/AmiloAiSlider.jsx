"use client"
import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AMILOAI_SLIDER_DATA_LIST } from '../common/Helper';

const AmiloAiSlider = ({ classname, heading, paragraph }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='bg-opacity-50 relative bg-oyo-list bg-repeat bg-cover'>
            <div className="absolute inset-0 bg-cover bg-center bg-gradient-to-r from-gray-50 via-white/80 to-white"></div>
            <div className='w-full max-w-[1200px] xl:px-0 px-4 mx-auto relative z-30'>
                <div className={`w-full px-0 md:px-4 py-16 md:pt-[72px] lg:pt-20 text-black font-bold ${classname}`}>
                    <h2 className='text-4xl md:text-5xl text-black font-bold'>{heading}</h2>
                    <p className='pt-2 text-xl md:text-[22px] font-medium text-black'>{paragraph}</p>
                    <div className='w-full pt-12'>
                        <Swiper className='!pb-10'
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={3}
                            centeredSlides={true}
                            freeMode={true}
                            watchSlidesProgress={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={{
                                clickable: true,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 15,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },

                            }}
                            modules={[FreeMode, Navigation, Thumbs, Pagination]}
                        >
                            {AMILOAI_SLIDER_DATA_LIST.map((obj, i) => (
                                <SwiperSlide key={i} className='p-4 bg-white shadow-md h-full w-full rounded-md xl:rounded-2xl'>
                                    <div className='w-full h-full'>
                                        <div className="overflow-hidden group rounded-md xl:rounded-2xl">
                                            <Image src={obj.image} alt='card' height={400} width={400} className='w-full group-hover:scale-110 duration-300 sm:max-h-[220px] md:max-h-[208px] lg:max-h-[180px] rounded-md object-cover xl:rounded-2xl' />
                                        </div>
                                        <h3 className='text-black text-2xl pt-3 pb-2.5 lg:py-4 font-bold'>{obj.title}</h3>
                                        <p className="text-black text-base !leading-[120%] min-h-[76px]">{obj.description}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default AmiloAiSlider;