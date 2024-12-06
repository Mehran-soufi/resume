import React from "react";
import { motion } from "motion/react";
import { SiHyperskill } from "react-icons/si";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// logo import
import html from "../../assets/skill/HTML.svg";
import css from "../../assets/skill/CSS.svg";
import JavaScript from "../../assets/skill/JavaScript.svg";
import TypeScript from "../../assets/skill/TypeScript.svg";
import Jest from "../../assets/skill/Jest.svg";
import TailwindCSS from "../../assets/skill/TailwindCSS-Dark.svg";
import Bootstrap from "../../assets/skill/Bootstrap.svg";
import Github from "../../assets/skill/Github-Dark.svg";
import { easeInOut } from "motion";

// skill data
const skillData = [
  {
    id: 1,
    name: "HTML",
    icon: html,
    number: "90",
    color: "#e14e1d",
  },
  {
    id: 2,
    name: "CSS",
    icon: css,
    number: "90",
    color: "#0277bd",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: JavaScript,
    number: "70",
    color: "#f0db4f",
  },
  {
    id: 4,
    name: "TypeScript",
    icon: TypeScript,
    number: "50",
    color: "#007acc",
  },
  {
    id: 5,
    name: "Jest",
    icon: Jest,
    number: "60",
    color: "#99424f",
  },
  {
    id: 6,
    name: "Tailwind CSS",
    icon: TailwindCSS,
    number: "70",
    color: "#242938",
  },
  {
    id: 7,
    name: "Bootstrap",
    icon: Bootstrap,
    number: "70",
    color: "#7112f6",
  },
  {
    id: 8,
    name: "Github",
    icon: Github,
    number: "70",
    color: "#242938",
  },
];

function Skill() {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="w-11/12 h-4/5 flex justify-center items-center m-auto flex-col">
        <div className="w-full h-1/6 flex justify-start items-center">
          <h2 className="lg:text-4xl sm:text-3xl text-2xl text-slate-400 flex items-center gap-1 pr-1">
            <SiHyperskill />
            مهارت های من
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
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper w-full h-4/5 bg-transparent"
          >
            {skillData.map((item) => (
              <SwiperSlide  key={item.id}>
                <div className="relative w-full h-4/5 bg-white/5 backdrop-blur-lg shadow-md shadow-purple-700/40 flex flex-col justify-center items-center rounded-md">
                  <span
                    className="absolute -bottom-4 -right-2 text-white text-lg w-12 h-12 flex justify-center items-center rounded-full"
                    style={{ background: item.color }}
                  >
                    {`${item.number}%`}
                  </span>
                  <div className="w-full h-[80%] p-5">
                    <img src={item.icon} alt="" className="w-full h-full" />
                  </div>
                  <div className="w-full h-[20%]">
                    <p className="w-full flex justify-center items-center lg:text-3xl text-lg sm:text-2xl text-white">
                      {item.name}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

export default Skill;
