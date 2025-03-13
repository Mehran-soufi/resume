"use client";
import { TfiReload } from "react-icons/tfi";

export default function Error() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-4">
      <p>به نظر می‌رسد مشکلی پیش آمده...</p>
      <button
        onClick={handleReload}
        className="border-none outline-none px-8 py-2 cursor-pointer bg-gray-800 shadow-md shadow-gray-950 flex items-center gap-2 text-white"
      >
        <TfiReload />
        تلاش مجدد
      </button>
    </div>
  );
}
