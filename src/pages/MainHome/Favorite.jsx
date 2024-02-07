import { FaBath } from "react-icons/fa";
import Container from "../../components/Shared/Container";
import { TbAirConditioning, TbToolsKitchen2 } from "react-icons/tb";
import { GiCoffeeCup } from "react-icons/gi";
import { AiFillEyeInvisible, AiOutlineDesktop } from "react-icons/ai";
import "./style.css"
import { useState } from "react";


const Favorite = () => {
    const [hover, setHover] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)

    return (
        <Container>
            <div className="pb-20 pt-20 md:pt-10">
                <div className="pt-10 md:pt-0 pb-16">
                    <h1 className="md:text-4xl text-3xl font-bold uppercase"> OUR FAVORITE ROOMS  </h1>
                    <h6 className="font-medium text-gray-500 text-lg mt-3"> Check out now our best rooms
                    </h6>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 main-card gap-5">

                    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='flex flex-col gap-2 w-full shadow-md rounded-md'>
                        <div className='aspect-square relative overflow-hidden h-[250px] rounded-t-md img-card'
                        >
                            <img className='object-cover h-full w-full hover:scale-110 transition' src="https://cdn.pixabay.com/photo/2015/01/10/11/39/hotel-595121_1280.jpg" alt="" />
                            <div className='absolute top-3 right-3 bg-white px-2 py-1 rounded-sm'>
                                $ 150 / night
                            </div>
                        </div>

                        {
                            hover === false ? (<div className='font-semibold text-lg text-gray-500 text-center mb-5'>
                                King Room
                            </div>) : (
                                <div className='flex flex-row items-center justify-evenly gap-1 text-xl text-gray-600 mb-5 mt-3'>
                                    <div className='font-semibold'>
                                        <FaBath />
                                    </div>
                                    <div className='font-light'>
                                        <TbToolsKitchen2 />
                                    </div>
                                    <div className='font-light'>
                                        <GiCoffeeCup />
                                    </div>
                                    <div className='font-light'>
                                        <AiOutlineDesktop />
                                    </div>
                                    <div className='font-light'>
                                        <TbAirConditioning />
                                    </div>
                                    <div className='font-light'>
                                        <AiFillEyeInvisible />
                                    </div>
                                </div>
                            )
                        }



                    </div>

                    {/* card-2 */}
                    <div onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)} className='flex flex-col gap-2 w-full shadow-md rounded-md'>
                        <div className='aspect-square relative overflow-hidden h-[250px] rounded-t-md img-card'
                        >
                            <img className='object-cover h-full w-full hover:scale-110 transition' src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                            <div className='absolute top-3 right-3 bg-white px-2 py-1 rounded-sm'>
                                $ 180 / night
                            </div>
                        </div>

                        {
                            hover2 === false ? (<div className='font-semibold text-lg text-gray-500 text-center mb-5'>
                                Honeymoon Room
                            </div>) : (
                                <div className='flex flex-row items-center justify-evenly gap-1 text-xl text-gray-600 mb-5 mt-3'>
                                    <div className='font-semibold'>
                                        <FaBath />
                                    </div>
                                    <div className='font-light'>
                                        <TbToolsKitchen2 />
                                    </div>
                                    <div className='font-light'>
                                        <GiCoffeeCup />
                                    </div>
                                    <div className='font-light'>
                                        <AiOutlineDesktop />
                                    </div>
                                    <div className='font-light'>
                                        <TbAirConditioning />
                                    </div>
                                    <div className='font-light'>
                                        <AiFillEyeInvisible />
                                    </div>
                                </div>
                            )
                        }



                    </div>
                    <div onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)} className='flex flex-col gap-2 w-full shadow-md rounded-md'>
                        <div className='aspect-square relative overflow-hidden h-[250px] rounded-t-md img-card'
                        >
                            <img className='object-cover h-full w-full hover:scale-110 transition' src="https://watermark.lovepik.com/photo/20211120/large/lovepik-hotel-double-room-design-picture_500481105.jpg" alt="" />
                            <div className='absolute top-3 right-3 bg-white px-2 py-1 rounded-sm'>
                                $ 130 / night
                            </div>
                        </div>

                        {
                            hover3 === false ? (<div className='font-semibold text-lg text-gray-500 text-center mb-5'>
                                Double Room
                            </div>) : (
                                <div className='flex flex-row items-center justify-evenly gap-1 text-xl text-gray-600 mb-5 mt-3'>
                                    <div className='font-semibold'>
                                        <FaBath />
                                    </div>
                                    <div className='font-light'>
                                        <TbToolsKitchen2 />
                                    </div>
                                    <div className='font-light'>
                                        <GiCoffeeCup />
                                    </div>
                                    <div className='font-light'>
                                        <AiOutlineDesktop />
                                    </div>
                                    <div className='font-light'>
                                        <TbAirConditioning />
                                    </div>
                                    <div className='font-light'>
                                        <AiFillEyeInvisible />
                                    </div>
                                </div>
                            )
                        }



                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Favorite;