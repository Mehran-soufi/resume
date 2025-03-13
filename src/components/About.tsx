"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Title from "./Title";

import user from "@/assets/hero/mehran.png";
import { idType } from "./Home";

const About: React.FC<idType> = ({ id }) => {
  const [text, setText] = useState<string>("");
  const aboutText =
    "من مهران صوفی هستم، متولد دی ماه ۱۳۷۸ و فارغ‌التحصیل مهندسی کامپیوتر. به‌عنوان برنامه‌نویس و طراح رابط کاربری (UI) با بیش از ۳ سال تجربه، در حوزه طراحی و توسعه وب، موبایل، و دسکتاپ تخصص دارم. رسالت من خلق تجربه‌های کاربری جذاب و کاربردی است که نیازها و انتظارات کاربران را به بهترین شکل برآورده کند. یادگیری مداوم و گسترش دانش در تکنولوژی‌های روز، مسیر زندگی حرفه‌ای من را شکل داده است. من معتقدم که پیشرفت مرزی ندارد و هر چالش فرصتی برای رشد است. صبر، پشتکار، و علاقه به حل مسائل، از ویژگی‌های من هستند که به من کمک کرده‌اند پروژه‌های پیچیده را با موفقیت مدیریت کنم. علاوه بر تمرکز حرفه‌ای، علاقه من به کتاب‌خوانی، تماشای فیلم و سریال، و کاوش در تکنولوژی‌های نوین، چشم‌انداز خلاقانه‌تری به من می‌بخشد. این فعالیت‌ها نه تنها سرگرم‌کننده هستند، بلکه باعث تقویت مهارت‌هایم در کار تیمی و تفکر انتقادی نیز شده‌اند. اگر به دنبال همکاری با فردی هستید که اشتیاق، نوآوری، و دقت را در کار خود دارد، خوشحال می‌شوم بخشی از داستان موفقیت شما باشم.";

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      let index = 0;
      const interval = setInterval(() => {
        if (index <= aboutText.length) {
          setText(aboutText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [inView, controls, aboutText]);

  return (
    <div
      ref={ref}
      className="w-full lg:py-8 py-4 flex justify-center items-start flex-col"
      id={id}
    >
      <Title
        title={"درباره"}
        description={"در این قسمت درباره من میتوانید مطالعه کنید."}
      />

      <div className="lg:w-11/12 relative w-full lg:h-[70vh] h-auto rounded-ee-xl rounded-es-xl lg:rounded-se-2xl lg:rounded-ee-2xl lg:shadow-lg shadow-md shadow-gray-800 p-8 bg-gray-900 flex justify-center items-center lg:flex-row flex-col gap-4">
        <div className="lg:w-1/3 w-full mx-auto lg:h-full h-1/3 flex justify-center items-center">
          <div className="lg:w-96 h-full md:w-64 w-52 relative z-50">
            <Image
              src={user.src}
              alt={"Mehran Soufi picture"}
              width={100}
              height={100}
              className="w-full h-full p-4 bg-gray-900 z-50 object-cover"
            />
            <div className="w-1/2 h-1/2 absolute -top-1 -right-1 bg-emerald-800 -z-10 rounded-ss-md"></div>
            <div className="w-1/2 h-1/2 absolute -bottom-1 -left-1 bg-emerald-800 -z-10 rounded-ee-md"></div>
          </div>
        </div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } },
          }}
          className="lg:w-2/3 w-full mx-auto lg:h-[90%] h-2/3 lg:p-8"
        >
          <div className="w-full h-full flex justify-center items-center">
            <p className="text-justify lg:text-xl md:text-lg text-base">
              {text}
            </p>
          </div>
          <div className="w-full flex justify-center items-center my-4">
            <a
              href="#contact"
              className="px-8 py-2 no-underline rounded-md bg-gray-800 shadow-md shadow-gray-950 border-none outline-none cursor-pointer"
            >
              ارتباط با من
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
