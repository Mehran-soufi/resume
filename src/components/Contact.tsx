"use client";
import React, { useState } from "react";
import Title from "./Title";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSkype,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";
import Link from "next/link";
import * as Yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import emailjs from "emailjs-com";
import { idType } from "./Home";

const Contact: React.FC<idType> = ({ id }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
          {
            name: values.name,
            email: values.email,
            message: values.message,
          },
          "hltecrlXRo0x904Xm"
        )
        .then(
          () => {
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
    <div className="w-full lg:py-8 py-4" id={id}>
      <Title
        title={"ارتباط با"}
        description={
          "شما میتوانید با از طریق راه های مختلف با من تماس برقرار کنید."
        }
      />
      <div className="w-full h-auto lg:p-4 flex justify-between items-center flex-col lg:flex-row">
        <div className="lg:w-1/4 w-full h-full">
          {/* شبکه‌های اجتماعی */}
          <div className="w-full h-full flex flex-col">
            {/* لینک‌ها */}
            <div className="w-full flex justify-center items-center my-4">
              <p className="lg:text-lg font-bold">
                شبکه های اجتماعی من جهت ارتباط با شما دوست عزیز:
              </p>
            </div>
            {/* لینک‌های مختلف */}
            <div className="w-full flex justify-start p-4">
              {" "}
              <Link
                href="https://www.linkedin.com/in/mehran-soufi-3a635b275/"
                target="_blank"
                className="w-1/2 rounded-md bg-gray-900 flex text-lg transition-all duration-300 ease-in hover:shadow-md shadow-gray-800"
              >
                {" "}
                <div className="w-1/3 h-full bg-blue-800 rounded-ss-md rounded-es-md Trapezoid-left">
                  {" "}
                  <div className="w-[90%] h-full py-2 bg-blue-600 rounded-ss-md rounded-es-md flex justify-center items-center Trapezoid-left">
                    {" "}
                    <FaLinkedin />{" "}
                  </div>{" "}
                </div>{" "}
                <div className="w-2/3 h-full flex justify-center items-center">
                  {" "}
                  <p>لینکدین</p>{" "}
                </div>{" "}
              </Link>{" "}
            </div>{" "}
            <div className="w-full flex justify-end p-4">
              {" "}
              <Link
                href="https://www.instagram.com/mehran_soufi10"
                target="_blank"
                className="w-1/2 rounded-md bg-gray-900 flex text-lg transition-all duration-300 ease-in hover:shadow-md shadow-gray-800"
              >
                {" "}
                <div className="w-2/3 h-full flex justify-center items-center">
                  {" "}
                  <p>اینستاگرام</p>{" "}
                </div>{" "}
                <div className="w-1/3 h-full bg-rose-800 rounded-ee-md rounded-se-md Trapezoid">
                  {" "}
                  <div className="w-[90%] mr-[10%] h-full py-2 bg-rose-600 rounded-ee-md rounded-se-md flex justify-center items-center Trapezoid">
                    {" "}
                    <FaInstagram />{" "}
                  </div>{" "}
                </div>{" "}
              </Link>{" "}
            </div>{" "}
            <div className="w-full flex justify-start p-4">
              {" "}
              <Link
                href="https://t.me/Mehran_s10"
                target="_blank"
                className="w-1/2 rounded-md bg-gray-900 flex text-lg transition-all duration-300 ease-in hover:shadow-md shadow-gray-800"
              >
                {" "}
                <div className="w-1/3 h-full bg-sky-800 rounded-ss-md rounded-es-md Trapezoid-left">
                  {" "}
                  <div className="w-[90%] h-full py-2 bg-sky-600 rounded-ss-md rounded-es-md flex justify-center items-center Trapezoid-left">
                    {" "}
                    <FaTelegram />{" "}
                  </div>{" "}
                </div>{" "}
                <div className="w-2/3 h-full flex justify-center items-center">
                  {" "}
                  <p>تلگرام</p>{" "}
                </div>{" "}
              </Link>{" "}
            </div>{" "}
            <div className="w-full flex justify-end p-4">
              {" "}
              <Link
                href="https://wa.me/+989213821172"
                target="_blank"
                className="w-1/2 rounded-md bg-gray-900 flex text-lg transition-all duration-300 ease-in hover:shadow-md shadow-gray-800"
              >
                {" "}
                <div className="w-2/3 h-full flex justify-center items-center">
                  {" "}
                  <p>واتساپ</p>{" "}
                </div>{" "}
                <div className="w-1/3 h-full bg-green-800 rounded-ee-md rounded-se-md Trapezoid">
                  {" "}
                  <div className="w-[90%] mr-[10%] h-full py-2 bg-green-600 rounded-ee-md rounded-se-md flex justify-center items-center Trapezoid">
                    {" "}
                    <FaWhatsapp />{" "}
                  </div>{" "}
                </div>{" "}
              </Link>{" "}
            </div>{" "}
            <div className="w-full flex justify-start p-4">
              {" "}
              <Link
                href="https://join.skype.com/invite/jvfQjvTh9H3c"
                target="_blank"
                className="w-1/2 rounded-md bg-gray-900 flex text-lg transition-all duration-300 ease-in hover:shadow-md shadow-gray-800"
              >
                {" "}
                <div className="w-1/3 h-full bg-cyan-800 rounded-ss-md rounded-es-md Trapezoid-left">
                  {" "}
                  <div className="w-[90%] h-full py-2 bg-cyan-600 rounded-ss-md rounded-es-md flex justify-center items-center Trapezoid-left">
                    {" "}
                    <FaSkype />{" "}
                  </div>{" "}
                </div>{" "}
                <div className="w-2/3 h-full flex justify-center items-center">
                  {" "}
                  <p>اسکایپ</p>{" "}
                </div>{" "}
              </Link>{" "}
            </div>{" "}
            <div className="w-full flex justify-end p-4">
              {" "}
              <Link
                href="https://github.com/Mehran-soufi"
                target="_blank"
                className="w-1/2 rounded-md bg-gray-900 flex text-lg transition-all duration-300 ease-in hover:shadow-md shadow-gray-800"
              >
                {" "}
                <div className="w-2/3 h-full flex justify-center items-center">
                  {" "}
                  <p>گیت هاب</p>{" "}
                </div>{" "}
                <div className="w-1/3 h-full bg-slate-800 rounded-ee-md rounded-se-md Trapezoid">
                  {" "}
                  <div className="w-[90%] mr-[10%] h-full py-2 bg-slate-600 rounded-ee-md rounded-se-md flex justify-center items-center Trapezoid">
                    {" "}
                    <FaGithub />{" "}
                  </div>{" "}
                </div>{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        {/* فرم تماس */}
        <div className="lg:w-3/4 w-full h-full flex justify-end">
          <form
            onSubmit={formik.handleSubmit}
            className="relative lg:w-4/5 w-full p-1 rounded-lg bg-gray-800 flex justify-center items-center overflow-hidden"
          >
            <div className="relative w-full h-full rounded-lg bg-gray-900 flex justify-center items-center flex-col z-10 p-6">
              <div className="w-full flex flex-col items-start">
                <label htmlFor="name" className="w-full p-2 my-1 text-white">
                  نام و نام خانوادگی:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="نام"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="bg-gray-800 rounded-md border-none outline-none shadow-md shadow-gray-900 w-full p-2 my-1 text-white"
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="text-red-500">{formik.errors.name}</div>
                )}
              </div>
              <div className="w-full flex flex-col items-start">
                <label htmlFor="email" className="w-full p-2 my-1 text-white">
                  ایمیل:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="ایمیل"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="bg-gray-800 rounded-md border-none outline-none shadow-md shadow-gray-900 w-full p-2 my-1 text-white"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500">{formik.errors.email}</div>
                )}
              </div>
              <div className="w-full flex flex-col items-start">
                <label htmlFor="message" className="w-full p-2 my-1 text-white">
                  پیام:
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="پیام"
                  rows={5}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className="bg-gray-800 rounded-md border-none outline-none shadow-md shadow-gray-900 w-full p-2 my-1 text-white"
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                  <div className="text-red-500">{formik.errors.message}</div>
                )}
              </div>
              <div className="w-full flex items-center justify-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full p-2 my-2 rounded-md transition-all duration-300 outline-none ${
                    isLoading
                      ? "bg-gray-700 cursor-not-allowed"
                      : "bg-emerald-800"
                  }`}
                >
                  {isLoading ? "در حال ارسال..." : "ارسال پیام"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
