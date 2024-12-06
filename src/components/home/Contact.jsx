import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { MdContactPhone } from "react-icons/md";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoSkype,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("نام الزامی است"),
      email: Yup.string()
        .email("ایمیل نامعتبر است")
        .required("ایمیل الزامی است"),
      message: Yup.string().required("پیام الزامی است"),
    }),
    onSubmit: (values, { resetForm }) => {
      setIsLoading(true);
      emailjs
        .send(
          "service_ba2rlar",
          "template_3l0bu9d",
          values,
          "hltecrlXRo0x904Xm"
        )
        .then(
          (response) => {
            toast.success("ایمیل با موفقیت ارسال شد!");
            resetForm();
            setIsLoading(false);
          },
          (error) => {
            toast.error("خطا در ارسال ایمیل: " + error.text);
            setIsLoading(false);
          }
        );
    },
  });

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="lg:w-3/5 sm:w-4/5 w-11/12 h-auto rounded-lg bg-white/5 backdrop-blur-lg shadow-md shadow-purple-700/40 p-8">
        <p className="w-full flex justify-center items-center gap-1 text-slate-400 lg:text-2xl sm:text-xl text-lg mb-5">
          <MdContactPhone />
          با ما در ارتباط باشید
        </p>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="نام"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="p-2 text-white rounded bg-transparent shadow-sm shadow-purple-700 outline-none"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500">{formik.errors.name}</div>
          ) : null}
          <input
            type="email"
            name="email"
            placeholder="ایمیل"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="p-2 text-white rounded bg-transparent shadow-sm shadow-purple-700 outline-none"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
          <textarea
            name="message"
            placeholder="پیام"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="p-2 text-white min-h-36 rounded bg-transparent shadow-sm shadow-purple-700 outline-none"
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500">{formik.errors.message}</div>
          ) : null}
          <button
            type="submit"
            className={`p-2 bg-purple-700 text-white rounded hover:bg-purple-800 outline-none border-none ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "در حال ارسال..." : "ارسال"}
          </button>
        </form>
        <ToastContainer />
        <ul className="flex justify-center items-center gap-2 mt-5">
          <li className="transition duration-75 hover:scale-90">
            <a
              href="https://github.com/mehran-soufi"
              target="_blank"
              className="no-underline outline-none lg:text-3xl sm:text-xl text-lg text-slate-200"
            >
              <IoLogoGithub />
            </a>
          </li>
          <li className="transition duration-75 hover:scale-90">
            <a
              href="https://www.linkedin.com/in/mehran-soufi-3a635b275/"
              target="_blank"
              className="no-underline outline-none lg:text-3xl sm:text-xl text-lg text-slate-200"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="transition duration-75 hover:scale-90">
            <a
              href="https://join.skype.com/invite/jvfQjvTh9H3c"
              target="_blank"
              className="no-underline outline-none lg:text-3xl sm:text-xl text-lg text-slate-200"
            >
              <IoLogoSkype />
            </a>
          </li>
          <li className="transition duration-75 hover:scale-90">
            <a
              href="https://www.instagram.com/username"
              target="_blank"
              className="no-underline outline-none lg:text-3xl sm:text-xl text-lg text-slate-200"
            >
              <IoLogoInstagram />
            </a>
          </li>
          <li className="transition duration-75 hover:scale-90">
            <a
              href="https://t.me/Mehran_s10"
              target="_blank"
              className="no-underline outline-none lg:text-3xl sm:text-xl text-lg text-slate-200"
            >
              <SiTelegram />
            </a>
          </li>
          <li className="transition duration-75 hover:scale-90">
            <a
              href="https://wa.me/989213821172"
              target="_blank"
              className="no-underline outline-none lg:text-3xl sm:text-xl text-lg text-slate-200"
            >
              <IoLogoWhatsapp />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
