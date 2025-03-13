"use client";
import React, { useState } from "react";
import Title from "./Title";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import gymlife from "@/assets/project/gymlife.png";
import { idType } from "./Home";

type projectType = {
  id: string;
  title: string;
  description: string;
  img: string;
  link: string;
};
const projectData: projectType[] = [
  {
    id: "1",
    title: "وب اپلیکیشن آب و هوا",
    description:
      "این وب اپلیکیشن با استفاده از react و api ساخته شده و اطلاعات آن بروز میباشد.",
    img: "https://uploadkon.ir/uploads/69a413_2520250313-140841-1058151515.jpg",
    link: "https://weatherapp-soufi.vercel.app/",
  },
  {
    id: "2",
    title: "وب سایت جیم لایف",
    description:
      "یک وب سایت تک صفحه ای ساخته شده با react که جهت قالب اینگونه پروژه ها کاربرد دارد.",
    img: "https://uploadkon.ir/uploads/061a13_2520250313-140231-1370392453.jpg",
    link: "https://gymlife-omega.vercel.app/",
  },
  {
    id: "3",
    title: "وب سایت کافه ریلکس",
    description:
      "یک وب سایت تک صفحه ای ساخته شده با react که جهت قالب اینگونه پروژه ها کاربرد دارد.",
    img: "https://uploadkon.ir/uploads/100613_2520250313-140549-793117738.jpg",
    link: "https://cafe-relax.vercel.app/",
  },
  {
    id: "4",
    title: "وب سایت مووی نت",
    description:
      "یک وب سایت که از api برای دریافت اطلاعات فیلم و سریال استفاده میشه و با استفاده از next ساخته شده است.",
    img: "https://uploadkon.ir/uploads/977813_2520250313-142005-1297402057.jpg",
    link: "https://movienet-soufi.vercel.app/",
  },
  {
    id: "5",
    title: "وب سایت دربست",
    description:
      "یک وب سایت شکیل و بروز برای رزرو اقامتگاه و با next js ایجاد شده است.",
    img: "https://uploadkon.ir/uploads/b95c12_25gymlife.png",
    link: "https://gymlife-omega.vercel.app/",
  },
];

const Project: React.FC<idType> = ({ id }) => {
  const [activeSlide, setActiveSlide] = useState<number | null>(null);

  const handleToggleInfo = (index: number) => {
    setActiveSlide(activeSlide === index ? null : index);
  };

  return (
    <div className="w-full lg:py-8 py-4" id={id}>
      <Title
        title={"پروژه"}
        description={
          "در این قسمت پروژه های مختلف در حوزه های مختلف را مشاهده میکنید."
        }
      />
      <div className="w-full lg:h-[50vh] md:h-[45vh] h-[40vh]">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }}
          modules={[Navigation]}
          className="mySwiper w-full h-full"
        >
          {projectData.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div
                className="w-full h-full rounded-md relative group transition-all duration-300 ease-in overflow-hidden"
                onClick={() => handleToggleInfo(index)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover object-top rounded-md cursor-pointer transition-all duration-500 ease-in group-hover:object-bottom"
                />
                <div
                  className={`info w-full h-full absolute left-0 rounded-md bg-black/70 transition-all duration-500 ease-in ${
                    activeSlide === index ? "bottom-0" : "-bottom-3/4"
                  } group-hover:bottom-0`}
                >
                  <div className="w-full h-full p-4 flex justify-center items-center flex-col">
                    <div className="w-full h-1/4">
                      <h2 className="w-full flex justify-center items-center lg:text-2xl md:text-xl text-lg font-bold">
                        {item.title}
                      </h2>
                    </div>
                    <div className="w-full h-3/4 flex justify-start items-center flex-col gap-8">
                      <p className="w-full text-justify flex justify-center items-center">
                        {item.description}
                      </p>
                      <Link
                        href={item.link}
                        target="_blank"
                        className="lg:px-8 md:px-6 px-4 lg:py-2 py-1 rounded-md bg-emerald-800 border-2 border-emerald-800 transition duration-300 ease-in hover:bg-transparent"
                      >
                        مشاهده پروژه
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Project;
