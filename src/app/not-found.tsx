"use client";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function notFound() {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex justify-center items-center flex-col gap-4">
        <p className="text-5xl font-bold text-slate-300">404</p>
        <p className="font-bold lg:text-2xl md:text-xl text-lg">
          به نظر می رسد گم شده اید...
        </p>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 cursor-pointer no-underline rounded-md border-none outline-none px-8 py-2 bg-gray-800 shadow-md shadow-gray-950"
        >
          <FaHome />
          بازگشت به خانه
        </Link>
      </div>
    </div>
  );
}
