import { Tab } from "@headlessui/react";
import Container from "../../components/Shared/Container";
import { FaPlateWheat } from "react-icons/fa6";
import { GiHeartInside } from "react-icons/gi";
import { SiGotomeeting } from "react-icons/si";
import { TbSwimming } from "react-icons/tb";


const Services = () => {
    return (
        <Container>
            <div className="pb-20 pt-10">
                <div className="pb-10">
                    <h1 className="md:text-4xl text-3xl font-bold uppercase"> OUR AWESOME SERVICES  </h1>
                    <h6 className="font-medium text-gray-500 text-lg mt-3"> Check out our awesome services
                    </h6>
                </div>
                <Tab.Group>
                    <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-5">
                        <Tab.List className="flex flex-col space-y-4 rounded-lg p-1 flex-1">
                            <Tab>
                                {({ selected }) => (
                                    <div
                                        className={
                                            selected ? 'bg-neutral-800 text-white shadow-md shadow-rose-300' : 'bg-white text-black shadow-md shadow-rose-200'
                                        }
                                    >
                                        <div className="flex gap-5 justify-around items-center flex-row-reverse py-3 px-5">
                                            <div className="text-left">
                                                <h5 className="text-lg font-medium">
                                                    Restaurant
                                                </h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
                                                </p>
                                            </div>
                                            <div>
                                                <FaPlateWheat className="text-4xl text-rose-400" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </Tab>
                            <Tab>
                                {({ selected }) => (
                                    <div
                                        className={
                                            selected ? 'bg-neutral-800 text-white shadow-md shadow-rose-300' : 'bg-white text-black shadow-md shadow-rose-200'
                                        }
                                    >
                                        <div className="flex gap-5 justify-around items-center flex-row-reverse py-3 px-5">
                                            <div className="text-left">
                                                <h5 className="text-lg font-medium">
                                                    Spa - Beauty & Health
                                                </h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
                                                </p>
                                            </div>
                                            <div>
                                                <GiHeartInside className="text-4xl text-rose-400" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </Tab>
                            <Tab>
                                {({ selected }) => (
                                    <div
                                        className={
                                            selected ? 'bg-neutral-800 text-white shadow-md shadow-rose-300' : 'bg-white text-black shadow-md shadow-rose-200'
                                        }
                                    >
                                        <div className="flex gap-5 justify-around items-center flex-row-reverse py-3 px-5">
                                            <div className="text-left">
                                                <h5 className="text-lg font-medium">
                                                    Conference Room
                                                </h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
                                                </p>
                                            </div>
                                            <div>
                                                <SiGotomeeting className="text-4xl text-rose-400" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </Tab>
                            <Tab>
                                {({ selected }) => (
                                    <div
                                        className={
                                            selected ? 'bg-neutral-800 text-white shadow-md shadow-rose-300' : 'bg-white text-black shadow-md shadow-rose-200'
                                        }
                                    >
                                        <div className="flex gap-5 justify-around items-center flex-row-reverse py-3 px-5">
                                            <div className="text-left">
                                                <h5 className="text-lg font-medium">
                                                    Swimming Pool
                                                </h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
                                                </p>
                                            </div>
                                            <div>
                                                <TbSwimming className="text-4xl text-rose-400" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </Tab>

                        </Tab.List>

                        <Tab.Panels className="flex-1 p-5 md:p-0">
                            <Tab.Panel className="w-full">
                                <img className="w-full" src="https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                            </Tab.Panel>
                            <Tab.Panel className="w-full">
                                <img className="w-full" src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            </Tab.Panel>
                            <Tab.Panel className="w-full">
                                <img className="w-full" src="https://images.pexels.com/photos/236730/pexels-photo-236730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                            </Tab.Panel>
                            <Tab.Panel className="w-full">
                                <img className="w-full" src="https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                            </Tab.Panel>
                        </Tab.Panels>
                    </div>

                </Tab.Group>
            </div>
        </Container>
    );
};

export default Services;