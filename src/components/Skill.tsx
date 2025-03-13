import React from "react";
import Title from "./Title";
import Image from "next/image";
import { idType } from "./Home";

type sub_skill_type = {
  id: string;
  title: string;
  img: string;
};
const sub_skill: sub_skill_type[] = [
  {
    id: "1",
    title: "github",
    img: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Github-Dark.svg",
  },
  {
    id: "2",
    title: "git",
    img: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Git.svg",
  },
  {
    id: "3",
    title: "jest",
    img: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Jest.svg",
  },
  {
    id: "4",
    title: "electron js",
    img: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Electron.svg",
  },
  {
    id: "5",
    title: "react native",
    img: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/React-Dark.svg",
  },
  {
    id: "6",
    title: "mongo db",
    img: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/MongoDB.svg",
  },
  {
    id: "7",
    title: "bootstrap",
    img: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Bootstrap.svg",
  },
  {
    id: "8",
    title: "sass",
    img: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Sass.svg",
  },
  {
    id: "9",
    title: "figma",
    img: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Figma-Dark.svg",
  },
];

type main_skill_type = {
  id: string;
  title: string;
  img: string;
  rating: number;
};
const main_skill: main_skill_type[] = [
  {
    id: "1",
    title: "HTML",
    img: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/HTML.svg",
    rating: 97,
  },
  {
    id: "2",
    title: "CSS",
    img: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/CSS.svg",
    rating: 92,
  },
  {
    id: "3",
    title: "Java Script",
    img: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/JavaScript.svg",
    rating: 80,
  },
  {
    id: "4",
    title: "Type Script",
    img: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/TypeScript.svg",
    rating: 70,
  },
  {
    id: "5",
    title: "React",
    img: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/React-Dark.svg",
    rating: 85,
  },
  {
    id: "6",
    title: "Next JS",
    img: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/NextJS-Dark.svg",
    rating: 80,
  },
  {
    id: "7",
    title: "Node JS",
    img: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/NodeJS-Dark.svg",
    rating: 70,
  },
  {
    id: "8",
    title: "Tailwind CSS",
    img: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/TailwindCSS-Dark.svg",
    rating: 85,
  },
];

const Skill: React.FC<idType> =({id})=> {
  return (
    <div className="w-full lg:py-8 py-4" id={id}>
      <Title
        title={"مهارت"}
        description={
          "در این قسمت میتوانید مهارت های من را در حوزه های مختلف مشاهده کنید."
        }
      />
      <div className="md:w-11/12 w-full h-full p-4 mx-auto flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-gray-900/80 via-gray-950/80 to-gray-900/80">
        <div className="lg:w-1/4 w-full h-full relative">
          <div className="w-full h-full flex justify-center items-center p-4">
            <div className="w-2/3 mx-auto h-full flex justify-center items-center flex-wrap gap-2 ">
              {sub_skill.map((item) => (
                <Image
                  key={item.id}
                  src={item.img}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="opacity-30 w-10 h-10 sm:w-14 sm:h-14"
                />
              ))}
            </div>
          </div>
          <div className="w-full h-full absolute top-0 left-0">
            <div className="w-11/12 mx-auto h-full flex justify-center items-center ">
              <div className="w-full h-full select-none flex justify-center items-center">
                <p className="text-slate-300">
                  از دیگر مهارت های من میتوان به
                  {sub_skill.map((item) => (
                    <span className="px-1 text-white text-lg" key={item.id}>
                      {item.title} -{" "}
                    </span>
                  ))}
                  اشاره کرد.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-3/4 w-full h-full flex flex-col lg:flex-row justify-center items-center">
          <div className="lg:w-1/2 w-full p-1 flex flex-col gap-4">
            {main_skill.slice(4, 8).map((item) => (
              <div
                className="w-full flex items-center justify-end cursor-default"
                key={item.id}
              >
                <div className="w-5/6 flex flex-col items-end justify-center">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-sm text-sky-500">{item.rating}%</p>
                    <p className="p-1 lg:text-lg font-bold ">{item.title}</p>
                  </div>
                  <div className="w-full p-1 relative bg-emerald-800/60 rounded-md">
                    <div
                      style={{ width: `${item.rating}%` }}
                      className="h-full absolute top-0 left-0 bg-emerald-800 z-50 rounded-md"
                    ></div>
                  </div>
                </div>
                <div className="w-1/6 h-full flex justify-center items-center">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={45}
                    height={45}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="lg:w-1/2 w-full p-1 flex flex-col gap-4">
            {main_skill.slice(0, 4).map((item) => (
              <div
                className="w-full flex items-center justify-end cursor-default"
                key={item.id}
              >
                <div className="w-5/6 flex flex-col items-end justify-center">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-sm text-sky-500">{item.rating}%</p>
                    <p className="p-1 lg:text-lg font-bold ">{item.title}</p>
                  </div>
                  <div className="w-full p-1 relative bg-emerald-800/60 rounded-md">
                    <div
                      style={{ width: `${item.rating}%` }}
                      className="h-full absolute top-0 left-0 bg-emerald-800 z-50 rounded-md"
                    ></div>
                  </div>
                </div>
                <div className="w-1/6 h-full flex justify-center items-center">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={45}
                    height={45}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
