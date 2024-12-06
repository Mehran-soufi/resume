import React from "react";
import { motion } from "motion/react";
import Mehran from "../../assets/main/about.jpg";
import { easeInOut } from "motion";
import { FaAddressCard } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

function AboutMe() {
  return (
    <section className="w-full lg:h-screen h-[150vh] flex flex-col lg:flex-row justify-center items-center">
      <div className="lg:w-1/3 lg:h-full w-full h-1/3 flex justify-center items-center">
        <div className="lg:w-4/5 lg:h-3/5 w-11/12 h-[90%] bg-transparent relative p-2 about-img">
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1,
                ease: easeInOut,
              },
            }}
            className="w-full h-full z-50 bg-transparent flex justify-center items-center"
          >
            <span className="w-24 h-24 bg-gradient-to-bl from-cyan-500 to-violet-800 absolute top-0 left-0 -z-10 rounded-se-md"></span>
            <span className="w-24 h-24 bg-gradient-to-tr from-cyan-500 to-violet-80 absolute bottom-0 right-0 -z-10 rounded-es-md"></span>
            <img
              src={Mehran}
              alt=""
              className="w-full h-full object-cover object-center rounded "
            />
          </motion.div>
        </div>
      </div>
      <div className="lg:w-2/3 lg:h-full w-full h-2/3 flex justify-center items-center">
        <div className="w-full lg:h-3/5 h-full flex  flex-col">
          <h2 className="lg:text-4xl sm:text-3xl text-2xl text-slate-400 flex items-center gap-1 pr-1">
            <FaAddressCard />
            درباره من
          </h2>
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1,
                ease: easeInOut,
              },
            }}
            className="text-white text-justify mx-auto lg:text-lg sm:text-base text-sm w-11/12 lg:my-10 sm:my-5 my-1"
          >
            سلام! من مهران صوفی هستم، مهندس کامپیوتر، طراح و برنامه نویس وب. از
            کودکی علاقه زیادی به یادگیری علوم مختلف داشتم و این علاقه من را به
            دنیای برنامه نویسی کشاند. برنامه نویسی برای من نه تنها یک شغل، بلکه
            یک هنر و یک راه برای حل مسائل پیچیده است. من عاشق یادگیری هستم و
            همیشه به دنبال کشف چیزهای جدید در دنیای تکنولوژی و علوم مختلف
            میباشم. از سرگرمیهای من میتوان به خواندن کتاب، گوش دادن به پادکست،
            دیدن فیلم و سریال و گاهی بازیهای ویدئویی اشاره کرد. این فعالیتها به
            من کمک میکنند تا ذهنم را تازه نگه دارم و همیشه آماده برای چالشهای
            جدید باشم. یکی از بزرگترین لذتهای من، کار کردن در تیم های پویا و حل
            چالش های پیچیده است. هر بار که یک مشکل را حل میکنم، حس فوقالعادهای
            از رضایت و پیشرفت به من دست میدهد. در زمینه برنامهنویسی، تخصص من در
            استفاده از React است و همیشه به دنبال بهبود و پیشرفت مهارتهایم هستم.
            هدف من ایجاد تجربه های کاربری بینظیر و بهبود مستمر در زمینه توسعه وب
            است. اگر دوست دارید بیشتر با من آشنا شوید یا همکاری کنیم، خوشحال
            میشوم با شما در ارتباط باشم!
          </motion.p>
          <motion.a
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
                ease: easeInOut,
                type: "spring",
                speed: 200,
              },
            }}
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.5,
                ease: easeInOut,
              },
            }}
            href="https://drive.google.com/file/d/1_gf5uLcH4l5U2PPVzrZddMhU-WSkz3Dg/view?usp=sharing"
            className="bg-transparent flex items-center gap-1 w-32 text-amber-500"
            target="_blank"
          >
            <FaArrowLeftLong />
            دانلود رزومه
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
