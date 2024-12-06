import React from "react";
import { motion, easeInOut } from "motion/react";
import { SiHyperskill } from "react-icons/si";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// project image import
import watchshop from "../../assets/project/watchshop.png";
import gymlife from "../../assets/project/gymlife.png";
import weatherapp from "../../assets/project/weatherapp.png";

// skill data
const skillData = [
  {
    id: 1,
    name: "وب سایت واچ شاپ",
    image: watchshop,
    link: "https://watchshop-soufi.vercel.app/",
  },
  {
    id: 2,
    name: "وب سایت جیم لایف",
    image: gymlife,
    link: "https://gymlife-omega.vercel.app/",
  },
  {
    id: 3,
    name: "وب اپلیکیشن آب و هوا",
    image: weatherapp,
    link: "https://weatherapp-soufi.vercel.app/",
  },
  {
    id: 4,
    name: "وب سایت واچ شاپ",
    image: watchshop,
    link: "https://watchshop-soufi.vercel.app/",
  },
  {
    id: 5,
    name: "وب سایت جیم لایف",
    image: gymlife,
    link: "https://gymlife-omega.vercel.app/",
  },
  {
    id: 6,
    name: "وب اپلیکیشن آب و هوا",
    image: weatherapp,
    link: "https://weatherapp-soufi.vercel.app/",
  },
];

function Project() {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="w-11/12 h-4/5 flex justify-center items-center m-auto flex-col">
        <div className="w-full h-1/6 flex justify-start items-center">
          <h2 className="lg:text-4xl sm:text-3xl text-2xl text-slate-400 flex items-center gap-1 pr-1">
            <SiHyperskill />
            پروژه های من
          </h2>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: easeInOut,
            },
          }}
          className="w-full h-5/6 flex justify-center items-center"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper w-full h-4/5 bg-transparent"
          >
            {skillData.map((item) => (
              <SwiperSlide key={item.id}>
                <a
                  href={item.link}
                  target="_blank"
                  className="no-underline outline-none"
                >
                  <div className="relative w-full h-[90%] bg-white/5 backdrop-blur-lg shadow-md shadow-purple-700/40 flex flex-col justify-center items-center rounded-md">
                    <div className="w-full h-[80%] p-3">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-full rounded-s-sm rounded-se-sm"
                      />
                    </div>
                    <div className="w-full h-[20%]">
                      <p className="w-full flex justify-center items-center lg:text-3xl text-lg sm:text-2xl text-white">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

export default Project;
