"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Typed from "typed.js";
import { motion } from "framer-motion"; // اضافه کردن framer-motion

import user from "@/assets/hero/mehran.png";

const HeroSection: React.FC = () => {
  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current!, {
      strings: ["مهندس کامپیوتر", "برنامه نویس وب", "طراح سایت", "مدرس"],
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <motion.div
      className="w-full h-screen overflow-x-hidden"
      initial={{ opacity: 0, scale: 0.9 }} // شروع با کوچک‌تر و محو بودن
      animate={{ opacity: 1, scale: 1 }} // بزرگ‌شدن و ظاهر شدن
      exit={{ opacity: 0, scale: 0.9 }} // خروج با کوچک‌شدن و محو شدن
      transition={{ duration: 0.6, ease: "easeOut" }} // کنترل سرعت انیمیشن
    >
      <div className="w-full h-full flex md:flex-row flex-col items-center justify-center">
        {/* بخش اول */}
        <motion.div
          className="md:w-1/2 w-full md:h-full h-1/2 flex items-center justify-start"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="w-4/5 mx-auto h-full flex flex-col items-center justify-center">
            <div className="w-full flex justify-start items-center">
              <p className="lg:text-3xl md:text-2xl text-xl text-slate-300">
                سلام، من
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <h1 className="lg:text-8xl md:text-6xl text-4xl py-4 bg-gradient-to-l from-emerald-600 via-emerald-800 to-emerald-950 inline-block text-transparent bg-clip-text">
                مهران صوفی
              </h1>
            </div>
            <div className="w-full flex justify-end items-center">
              <p className="lg:text-3xl md:text-2xl text-xl text-slate-300">
                هستم
              </p>
            </div>
            <div className="w-full flex items-center justify-center gap-2 my-8">
              <span
                ref={typedElement}
                className="text-slate-100 lg:text-2xl md:text-xl text-lg inline-block min-h-8 "
              ></span>
            </div>
            <div className="w-full flex items-center justify-center">
              <Link
                href={
                  "https://drive.google.com/file/d/1SkAR8Kz1lqqQ4f2PgAjxY9lEKm6TZKKx/view"
                }
                target="_blank"
                className="lg:px-8 md-px-6 px-4 py-2 rounded-md bg-gradient-to-l from-emerald-600 via-emerald-800 to-emerald-950 hover:bg-gradient-to-r"
              >
                دانلود رزومه
              </Link>
            </div>
          </div>
        </motion.div>

        {/* بخش دوم */}
        <motion.div
          className="md:w-1/2 w-full md:h-full h-1/2 flex items-center justify-end"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="w-full h-full flex justify-center items-center">
            <motion.div
              className="relative lg:w-[480px] md:w-[300px] w-[200px] lg:h-[480px] md:h-[300px] h-[200px] rounded-full p-4 overflow-hidden flex justify-center items-center bg-emerald-800/20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="lg:w-[400px] md:w-[250px] w[170px] lg:h-[400px] md:h-[250px] h-[170px] border-4 border-emerald-800/80 rounded-full p-4 overflow-hidden z-50 bg-gray-900">
                <Image
                  src={user}
                  alt="user"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="w-1/2 h-1/2 absolute top-0 left-0 bg-emerald-800/80 hero-img-animat-one"></div>
              <div className="w-1/2 h-1/2 absolute bottom-0 right-0 bg-emerald-800/80 hero-img-animat-two"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
