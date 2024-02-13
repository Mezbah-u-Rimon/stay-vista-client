import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import Container from "../../components/Shared/Container";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Reviews = () => {
    const [reviews, setReviews] = useState();
    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    console.log(reviews);

    return (
        <Container>
            <div className="pb-20 pt-20 md:pt-10">
                <div className="pt-10 md:pt-0 pb-16">
                    <h1 className="md:text-4xl text-3xl font-bold uppercase"> OUR GUESTS LOVE US  </h1>
                    <h6 className="font-medium text-gray-500 text-lg mt-3"> What our guests are saying about us
                    </h6>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    {
                        reviews?.map((review, idx) => <SwiperSlide key={idx}>
                            <div>
                                <div className="rounded-md border p-5 flex justify-center items-center flex-col shadow-sm shadow-gray-300 space-y-3 h-[250px] text-center hover:shadow-rose-200 hover:shadow-lg cursor-pointer">
                                    <h1 className="text-xl font-medium text-gray-600">{review.title}
                                    </h1>
                                    <Rating
                                        style={{ maxWidth: 150 }}
                                        value={review.value}
                                        readOnly
                                    />
                                    <p className="text-gray-500">
                                        {review.review}
                                    </p>
                                </div>
                                <div className="mt-5 mb-10 flex gap-5 justify-center items-center">
                                    <div className="w-[84px] h-[84px]">
                                        <img className="w-full h-full rounded-full" src={review.image} alt="" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">{review.name}</h3>
                                        <p className="text-gray-500">{review.country_name}</p>
                                    </div>
                                </div>

                            </div>

                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </Container>
    );
};

export default Reviews;