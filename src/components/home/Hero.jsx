import React from "react";
import Mehran from "../../assets/main/Mehran1.png";

import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { motion } from "motion/react";
import { easeInOut } from "motion";

function Hero() {
  return (
    <section className="w-full h-screen flex md:flex-row flex-col  justify-center items-center overflow-hidden">
      <motion.div
       initial={{
        opacity: 0,
        x: 100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
          ease: easeInOut,
        },
      }}
      className="md:w-1/2 w-full md:h-full h-1/2 flex justify-center items-center flex-col">
        <h1 className="lg:text-8xl md:text-6xl text-5xl bg-gradient-to-r from-violet-700 via-zinc-400 to-slate-300 inline-block text-transparent bg-clip-text">
          مهران صوفی
        </h1>
        <p className="text-white lg:text-2xl md:text-lg my-6">
          مهندس کامپیوتر | برنامه نویس وب
        </p>
        <ul className="flex justify-center items-center gap-2 text-slate-100 lg:text-2xl md:text-lg">
          <li>
            <a href="https://github.com/mehran-soufi" target="_blank">
              <IoLogoGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mehran-soufi-3a635b275/" target="_blank">
              <IoLogoLinkedin />
            </a>
          </li>
          <li></li>
        </ul>
      </motion.div>
      <div className="md:w-1/2 w-full md:h-full h-1/2 flex justify-center items-center">
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              ease: easeInOut,
            },
          }}
          className="shape-img lg:w-96 lg:h-96 md:w-80 md:h-80 w-64 h-64 bg-gradient-to-br from-purple-600 to-pink-700 overflow-hidden"
        >
          <img
            src={Mehran}
            alt="Main Img"
            loading="lazy"
            className="w-full h-full object-center object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
