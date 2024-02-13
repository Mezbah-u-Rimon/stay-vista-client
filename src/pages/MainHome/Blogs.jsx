import Container from "../../components/Shared/Container";


const Blogs = () => {
    return (
        <Container>
            <div className="pb-10 pt-10">
                <h1 className="md:text-4xl text-3xl font-bold uppercase"> OUR HOTEL BLOGS  </h1>
                <h6 className="font-medium text-gray-500 text-lg mt-3"> Check out our latest news & events
                </h6>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center mb-20">
                <div className="flex-1 w-full h-[300px] md:h-[335px] lg:h-[400px]">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/H1CIBqDeWQ0?si=Q76DC4EMJHqCAoj5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </div>
                <div className="flex-1 w-full bg-neutral-800 lg:h-[400px] flex flex-col justify-center">
                    <div className=" text-white pt-10 p-5 ">
                        <h1 className="md:text-4xl text-3xl font-bold uppercase">LATEST NEWS & EVENTS </h1>
                        <h6 className="font-medium text-neutral-200 text-lg my-3">
                            Check out our latest news & events
                        </h6>
                        <p>
                            Fantastic location in a historic renovated monastery in the heart of the Castro. Staff were helpful and knowledgeable and everything in easy walking distance.
                        </p>
                        <button className="px-5 py-3 shadow-md shadow-rose-200 bg-rose-500 rounded-lg mt-5 font-medium"> Read More </button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Blogs;