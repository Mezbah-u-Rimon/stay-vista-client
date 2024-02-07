import Container from "../../components/Shared/Container";
import Tilt from 'react-parallax-tilt';

const About = () => {
    return (
        <div className="pb-20 pt-32">
            <Container>
                <div className="flex flex-col md:flex-row justify-center gap-10">
                    <div className="space-y-5 flex-1">
                        <h1 className="md:text-4xl text-3xl font-bold uppercase">ABOUT Our Resort  </h1>
                        <h6 className="font-medium text-gray-500 text-lg mt-3">High quality accommodation services
                        </h6>
                        <div className="text-gray-500 space-y-5">
                            <p>
                                Welcome to Our Resort, where luxury meets tranquility in the heart of world wide. Nestled amidst breathtaking landscapes, our resort is a haven of opulence, offering an unparalleled escape from the ordinary.
                            </p>
                            <p>
                                As you step into our world, be prepared to immerse yourself in a symphony of comfort and sophistication. Our meticulously designed accommodations redefine the meaning of relaxation, providing a seamless blend of modern amenities and traditional charm. Whether you choose a spacious suite with panoramic views or a cozy, intimate villa, each space is crafted to cater to your every need.

                            </p>
                            <p>
                                Indulge your senses with our world-class dining options, where culinary mastery meets the freshest local ingredients. From innovative gastronomic creations to time-honored classics, our chefs are dedicated to delivering an exquisite culinary journey that will tantalize your taste buds.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 w-full relative ">
                        <Tilt tiltReverse={true}>
                            <img className="w-[80%] shadow-lg shadow-gray-500" src="https://i.pinimg.com/originals/a8/64/74/a86474919230fead67e6704203aa5fb7.jpg" alt="" />
                            <img className="w-[80%] absolute top-20 right-0 -z-10 shadow-lg shadow-gray-500" src="https://media.cntraveler.com/photos/5e5e9a3617b1dc0008f2fbfe/4:3/w_2664,h_1998,c_limit/EauPalmBeachResort&Spa-PalmBeachFlorida-2020-5.jpg" alt="" />
                        </Tilt>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;