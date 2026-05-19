"use client";
import { useEffect, useState } from "react";
import { IoIosHome } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa";

export default function Navbar() {
  const [Scroll, setScroll] = useState(false);
  const [Active, setActive] = useState("Home");
  const menuItems = [
    { name: "Home", href: "#home", id: "home", logo: <IoIosHome size={24} /> },
    { name: "About", href: "#about", id: "about", logo: <FaAddressCard size={24} /> },
    { name: "Projects", href: "#projects", id: "projects", logo: <FaAddressCard size={24} /> },
    { name: "Contact", href: "#contact", id: "contact", logo: <FaAddressCard size={24} /> },
  ];

  useEffect(() => {
    const hero = document.querySelector("#home");
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
      setScroll(!entry.isIntersecting);
    }, {threshold: 0.1});
    obs.observe(hero);
    return () => obs.disconnect();
    },[]);

  useEffect(() => {
    const sectionId = menuItems.map((item) => item.id);
    const sections = sectionId
      .map((id) => document.querySelector(`#${id}`))
      .filter(Boolean) as Element[];

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { 
        threshold: 0,
        rootMargin: "-40% 0px -60% 0px"
      }
    );
    sections.forEach((section) => obs.observe(section));
    return () => obs.disconnect();
  })

  return (
  <nav
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      Scroll
        ? "bg-[#0f0f0f]/90 backdrop-blur-md shadow-lg"
        : "bg-transparent"
    }`}
  >
    <div className="container mx-auto flex justify-between py-3">
      <h1 className="font-bold text-xl">Yuri Ferdinand</h1>
      <div className="flex gap-10">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`text-base transition-all duration-300 flex items-center gap-1 ${
              Active === item.id
                ? "text-[#c9a96e] font-semibold border-b border-[#c9a96e]"
                : "text-gray-400 hover:text-[#c9a96e]"
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>

    </div>
  </nav>
);

}

/* 
<nav className="fixed top-5 left-0 w-full flex justify-center z-50 px-4">
      <div
        className="py-4 px-6 flex items-center gap-2 bg-[#c9a96e] rounded-full transition-all duration-700 ease-in-out"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <h2 className="text-balck font-bold text-xl mr-8">Yuri Ferdinand</h2>

        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-2 text-black px-4 py-2 rounded-full hover:bg-white/10 transition-colors duration-300"
          >
            <span className="flex-shrink-0">{item.logo}</span>

            <span
              className={`
                whitespace-nowrap text-sm overflow-hidden font-bold
                transition-all duration-300 ease-in-out
                ${Hover ? "max-w-[100px] opacity-100" : "max-w-0 opacity-0"}`}>
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
*/