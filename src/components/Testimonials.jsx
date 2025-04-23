import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../assets/assets/images/Ellipse 90.png";
import img2 from "../assets/assets/images/Ellipse 91.png";
import img3 from "../assets/assets/images/Ellipse 92.png";

const Testimonials = () => {
  return (
    <div className="my-10">
      <h1 className="text-2xl font-bold mb-8 text-center">Testimonials</h1>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true, dynamicBullets: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {[img1, img2, img3, img1].map((img, index) => (
          <SwiperSlide key={index} className="text-center p-8">
            <img
              src={img}
              alt={`testimonial-${index}`}
              className="mx-auto mb-4 rounded-full w-24 h-24"
            />
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Purus commodo ipsum duis laoreet maecenas. Feugiat
            </p>
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                aria-label="2 star"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                aria-label="5 star"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
