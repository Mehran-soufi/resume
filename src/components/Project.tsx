"use client";
import React, { useState } from "react";
import Title from "./Title";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { idType } from "./Home";
import Image from "next/image";

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
    title: "سایت خبری veritonews",
    description:
      "یک وب سایت خبری از منابع مختلف و دارای بخش هواشناسی و قیمت های مختلف",
    img: "https://uploadkon.ir/uploads/69a413_2520250313-140841-1058151515.jpg",
    link: "https://veritonews.vercel.app/",
  },
  {
    id: "2",
    title: "سایت فیلم و سریال movienet",
    description:
      "یک وب سایت جامع اطلاعات فیلم و سریال با دسته بندی های متنوع و یک بخش جستجو قدرتمند",
    img: "https://ik.imagekit.io/h9lpdqryj/portfolio/hero.webp",
    link: "https://movienet-nextjs.vercel.app/",
  },
  {
    id: "3",
    title: "کلون X نسخه وب",
    description: "نسخه شبیه سازی شده وب اپلیکیشن X (توئیتر سابق)",
    img: "https://ik.imagekit.io/h9lpdqryj/portfolio/x-clone.webp",
    link: "https://cafe-relax.vercel.app/",
  },
  {
    id: "4",
    title: "قالب سایت رزرو تور",
    description: "یک قالب سایت مسافری رزرو تور که البته هنوز تکمیل نشده",
    img: "https://ik.imagekit.io/h9lpdqryj/portfolio/restnet.webp",
    link: "https://movienet-soufi.vercel.app/",
  },
  {
    id: "5",
    title: "قالب سایت باشگاهی",
    description:
      "یک قالب سایت باشگاهی با تم دارک و جذاب که کاملا ریسپانسیو می باشد.",
    img: "https://ik.imagekit.io/h9lpdqryj/portfolio/gymlife.webp",
    link: "https://gymlife-omega.vercel.app/",
  },
  {
    id: "6",
    title: "قالب سایت کافه",
    description:
      "یک قالب سایت مینیمال و تک صفحه ای مربوط به کافه ها و استفاده از نقشه برای مسیربابی",
    img: "https://ik.imagekit.io/h9lpdqryj/portfolio/cofe.webp",
    link: "https://cafe-relax.vercel.app/",
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
      <div className="w-full lg:h-[35vh] md:h-[30vh] h-[25vh]">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={8}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1.4, spaceBetween: 10 },
            768: { slidesPerView: 1.6, spaceBetween: 15 },
            1024: { slidesPerView: 3.3, spaceBetween: 20 },
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
                <Image
                  width={200}
                  height={200}
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full  rounded-md cursor-pointer transition-all duration-500 ease-in group-hover:object-bottom"
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
