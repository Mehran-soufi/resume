"use client";

import Image from "next/image";
import React, { ReactElement, useState, useEffect } from "react";
import { GrContact } from "react-icons/gr";
import { SiHyperskill } from "react-icons/si";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaProjectDiagram } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

import logo from "@/assets/logo.png";

type btnsType = {
  id: string;
  title: string;
  icon: ReactElement;
};

const btns: btnsType[] = [
  { id: "about", title: "درباره", icon: <GrContact /> },
  { id: "skills", title: "مهارت", icon: <SiHyperskill /> },
  { id: "services", title: "خدمات", icon: <MdMiscellaneousServices /> },
  { id: "projects", title: "پروژه", icon: <FaProjectDiagram /> },
  { id: "contact", title: "ارتباط", icon: <RiCustomerService2Fill /> },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Lock or unlock scrolling when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Clean up on unmount
    };
  }, [isMenuOpen]);

  // Detect which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // بخش باید حداقل 50٪ در دید باشد.
      }
    );

    btns.forEach((btn) => {
      const section = document.getElementById(btn.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveSection(""); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full p-4 bg-gray-950 sticky top-0 z-[1000] shadow shadow-emerald-800">
      <nav className="flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <button onClick={handleTop} className="outline-none border-none">
            <Image
              src={logo}
              alt="logo website"
              width={100}
              height={70}
              className="cursor-pointer"
            />
          </button>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-teal-300 text-2xl"
          aria-label="Toggle Menu"
        >
          <RxHamburgerMenu />
        </button>

        {/* Navigation Menu */}
        <menu
          className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 rounded-es-full shadow-md shadow-emerald-800 text-slate-200 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:translate-x-0 md:flex md:items-center md:w-auto md:h-auto md:bg-transparent md:rounded-none md:shadow-none`}
        >
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-teal-300 text-lg absolute top-4 right-4 flex items-center gap-2"
            aria-label="Close Menu"
          >
            <AiOutlineClose />
            بستن
          </button>
          <div className="flex flex-col md:flex-row md:gap-2 gap-4 md:p-0 px-2 mt-16 md:mt-0 md:ml-auto">
            {btns.map((btn, index) => (
              <a
                href={`#${btn.id}`}
                key={index}
                title={btn.title}
                onClick={() => setIsMenuOpen(false)}
                className={`cursor-pointer no-underline px-4 py-2 flex items-center gap-2 rounded-md md:shadow-none shadow shadow-emerald-800 transition duration-300 ${
                  activeSection === btn.id
                    ? "bg-emerald-800"
                    : "hover:bg-emerald-800"
                }`}
              >
                {btn.icon}
                <span>{btn.title}</span>
              </a>
            ))}
          </div>
        </menu>
      </nav>
    </header>
  );
}

export default Header;
