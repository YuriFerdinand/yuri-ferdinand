"use client";

import { useState } from "react";
import { IoIosHome } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [Hover, setHover] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home", logo: <IoIosHome size={24} /> },
    { name: "About", href: "#about", logo: <FaAddressCard size={24} /> },
    { name: "Projects", href: "#projects", logo: <FaAddressCard size={24} /> },
    { name: "Contact", href: "#contact", logo: <FaAddressCard size={24} /> },
  ];

  return (
    <nav className="absolute top-5 left-0 w-full flex justify-center z-50 px-4">
      <div
        className="py-4 px-6 flex items-center gap-2 bg-[#1A1A1A] rounded-full transition-all duration-700 ease-in-out"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <h2 className="text-white font-bold text-xl mr-8">Yuri Ferdinand</h2>

        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-2 text-white px-4 py-2 rounded-full hover:bg-white/10 transition-colors duration-300"
          >
            <span className="flex-shrink-0">{item.logo}</span>

            <span
              className={`
                whitespace-nowrap text-sm overflow-hidden
                transition-all duration-300 ease-in-out
                ${Hover ? "max-w-[100px] opacity-100" : "max-w-0 opacity-0"}`}>
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}