import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { TbFidgetSpinner } from 'react-icons/tb';
import useAuth from '../../hooks/useAuth';

const Banner = () => {
    const { loading } = useAuth()
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper relative"
            >
                <SwiperSlide>
                    <div
                        style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2017/06/15/17/17/italy-2406057_1280.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
                        className='w-full h-screen'>

                        <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }} className='w-full h-full flex flex-col gap-5 items-center md:justify-center'>

                            <div className='px-10 text-center pt-16 md:pt-0'>
                                <h1 className='text-4xl md:text-6xl font-bold text-white pt-3 pb-7'
                                    data-aos="zoom-in-right">
                                    Exploring Hidden Paradises
                                </h1>
                                <small className='text-xl text-white font-medium'
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom">
                                    Enjoy Your Holiday at the Hotel Luxury
                                </small>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2017/06/05/14/38/london-2374247_1280.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                        className='w-full h-screen'>

                        <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }} className='w-full h-full flex flex-col gap-5 items-center md:justify-center'>

                            <div className='px-10 text-center pt-16 md:pt-0'>
                                <h1 className='text-4xl md:text-6xl font-bold text-white pt-3 pb-7'
                                    data-aos="zoom-in-right">
                                    Discovering the Essence of Tradition
                                </h1>
                                <small className='text-xl text-white font-medium'
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom">
                                    Enjoy Your Holiday at the Hotel Luxury
                                </small>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2018/07/18/20/25/channel-3547224_1280.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
                        className='w-full h-screen'>

                        <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }} className='w-full h-full flex flex-col gap-5 items-center md:justify-center'>

                            <div className='px-10 text-center pt-16 md:pt-0'>
                                <h1 className='text-4xl md:text-6xl font-bold text-white pt-3 pb-7'
                                    data-aos="zoom-in-right">
                                    Tropical Paradise Getaway
                                </h1>
                                <small className='text-xl text-white font-medium'
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom">
                                    Enjoy Your Holiday at the Hotel Luxury
                                </small>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2022/05/04/09/13/bordeaux-7173548_1280.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
                        className='w-full h-screen'>

                        <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }} className='w-full h-full flex flex-col gap-5 items-center md:justify-center'>

                            <div className='px-10 text-center pt-16 md:pt-0'>
                                <h1 className='text-4xl md:text-6xl font-bold text-white pt-3 pb-7'
                                    data-aos="zoom-in-right">
                                    A High-altitude Adventure
                                </h1>
                                <small className='text-xl text-white font-medium'
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom">
                                    Enjoy Your Holiday at the Hotel Luxury
                                </small>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
                        className='w-full h-screen'>

                        <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }} className='w-full h-full flex flex-col gap-5 items-center md:justify-center'>

                            <div className='px-10 text-center pt-16 md:pt-0'>
                                <h1 className='text-4xl md:text-6xl font-bold text-white pt-3 pb-7'
                                    data-aos="zoom-in-right">
                                    Escaping to Nature's Embrace
                                </h1>
                                <small className='text-xl text-white font-medium'
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom">
                                    Enjoy Your Holiday at the Hotel Luxury
                                </small>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
                        className='w-full h-screen'>

                        <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }} className='w-full h-full flex flex-col gap-5 items-center md:justify-center'>

                            <div className='px-10 text-center pt-16 md:pt-0'>
                                <h1 className='text-4xl md:text-6xl font-bold text-white pt-3 pb-7'
                                    data-aos="zoom-in-right">
                                    A Relaxing Retreat
                                </h1>
                                <small className='text-xl text-white font-medium'
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom">
                                    Enjoy Your Holiday at the Hotel Luxury
                                </small>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <div className='absolute z-10 md:bottom-16 bottom-3 w-full'>
                    <div className='md:max-w-[90%] max-w-[70%] mx-auto min-h-[100px] bg-[#ffffff] rounded-lg p-7 shadow-md shadow-pink-200'>
                        <form
                            noValidate=''
                            action=''
                            className='ng-untouched ng-pristine ng-valid grid grid-cols-1 md:grid-cols-3 gap-3'
                        >
                            <div>
                                <div>
                                    <input
                                        type='text'
                                        name='text'
                                        id='email'
                                        placeholder='Enter Your Name'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                        data-temp-mail-org='0'
                                    />
                                </div>
                            </div>
                            <div>
                                <div>

                                    <input
                                        type='datetime-local'
                                        name='date'
                                        id='email'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                        data-temp-mail-org='0'
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    className='bg-rose-500 w-full rounded-md py-3 text-white'
                                >
                                    {loading ? <TbFidgetSpinner className='animate-spin m-auto' /> : 'Continue'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;