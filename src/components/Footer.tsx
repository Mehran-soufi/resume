import React from "react";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full p-2 border-t border-slate-600 flex justify-center items-center">
      <p className="flex items-center gp-2">
        <FaRegCopyright className="mx-1 text-sm" />
        1403 - تمامی حقوق محفوظ است.
      </p>
    </footer>
  );
}

export default Footer;
