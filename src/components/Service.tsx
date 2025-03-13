import React from "react";
import Title from "./Title";
import Image from "next/image";
import { idType } from "./Home";

type serviceType = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

const serviceData: serviceType[] = [
  {
    id: "1",
    title: "برنامه نویسی وب",
    description:
      "طراحی و توسعه وب سایت های موردنیاز شما با بهترین کیفیت و سریعترین زمان",
    icon: "https://uploadkon.ir/uploads/0ea013_25icons8-html-96.png",
  },
  {
    id: "2",
    title: "برنامه نویسی دستکتاپ",
    description:
      "توسعه نرم‌افزارهای کاربردی برای دسکتاپ با قابلیت استفاده آسان و عملکرد بهینه",
    icon: "https://uploadkon.ir/uploads/576113_25icons8-desktop-96.png",
  },
  {
    id: "3",
    title: "برنامه نویسی موبایل",
    description:
      "طراحی و توسعه اپلیکیشن‌های موبایل با امکانات جذاب و تجربه کاربری عالی",
    icon: "https://uploadkon.ir/uploads/dce213_25icons8-mobile-96.png",
  },
  {
    id: "4",
    title: "مشاوره",
    description:
      "ارائه راهنمایی و مشاوره تخصصی در زمینه طراحی، توسعه و بهبود نرم‌افزار",
    icon: "https://uploadkon.ir/uploads/8f4513_25icons8-consulting-96.png",
  },
  {
    id: "5",
    title: "طراحی UI/UX",
    description: "ایجاد طراحی‌های کاربرپسند و جذاب با رعایت اصول تجربه کاربری",
    icon: "https://uploadkon.ir/uploads/98ca13_25icons8-web-96.png",
  },
  {
    id: "6",
    title: "تدریس",
    description:
      "آموزش تخصصی در زمینه برنامه‌نویسی و فناوری‌های مرتبط برای همه سطوح",
    icon: "https://uploadkon.ir/uploads/46eb13_25icons8-teaching-96.png",
  },
];

const Service: React.FC<idType> = ({id}) => {
  return (
    <div className="w-full lg:py-8 py-4" id={id}>
      <Title
        title={"خدمات"}
        description={
          "در این قسمت میتوانید خدمات من را در حوزه های مختلف مشاهده کنید."
        }
      />
      <div className="w-full md:h-[90vh] h-auto flex justify-center items-center">
        <div className="lg:w-2/5 md:w-4/5 w-11/12 h-full grid grid-cols-2 md:grid-rows-3 grid-rows-6">
          {serviceData.map((item) => (
            <div
              key={item.id}
              className="cursor-default md:col-span-1 col-span-2 row-span-1 bg-slate-900/50 transition duration-300 ease-in hover:bg-slate-900 hover:shadow-md hover:shadow-slate-800 border border-slate-800"
            >
              <div className="w-full h-full flex md:flex-col">
                <div className="md:w-full w-1/4 md:h-1/4 h-full flex justify-center items-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="md:w-full w-3/4 md:h-3/4 h-full flex flex-col justify-center items-center">
                  <div className="w-full md:h-1/4 h-1/2 flex justify-center items-center">
                    <p className="md:text-xl font-bold text-emerald-500">
                      {item.title}
                    </p>
                  </div>
                  <div className="w-full md:h-2/4 h-1/2">
                    <div className="w-11/12 mx-auto h-full flex justify-center items-center">
                      <p className="text-justify w-full h-full text-sm md:text-base text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
