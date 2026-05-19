"use client";
import { useState } from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";


export default function Contact() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const items = [
        { name: "Instagram", href: "https://www.instagram.com/ferdndnt/", logo: <FaInstagram />, usn: "@ferdndnt" },
        { name: "Github", href: "https://github.com/YuriFerdinand", logo: <FaGithub />, usn: "YuriFerdinand" },
        { name: "LinkedIn", href: "https://linkedin.com/in/muhammad-yuri-ferdinand-adinata", logo: <FaLinkedin />, usn: "Muhammad Yuri Ferdinand Adinata" },
        { name: "Email", href: "mailto:muhammadyuri41@gmail.com", logo: <LuMail />, usn: "muhammadyuri41@gmail.com" },
    ];

    return (
        <div className="w-full">
            <div className="mt-8 flex flex-row justify-between">
            {items.map((item, index) => (
                <div key={index}>
                    <a
                        href={item.href}
                        target="_blank"
                        className="relative w-75 h-30 p-4 bg-[#202020] flex flex-col gap-2 justify-center items-center rounded-md overflow-hidden"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <p className="text-[#c9a96e] text-lg flex gap-1 items-center font-semibold">
                            {item.logo}
                            {item.name}
                        </p>
                        <p className="text-md text-[#707070]">{item.usn}</p>

                        <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#c9a96e] rounded-tr-md transition-all duration-500 
                            ${hoveredIndex === index ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-2 -translate-y-2'}`} 
                        />
                        <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#c9a96e] rounded-bl-md transition-all duration-500 
                            ${hoveredIndex === index ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-2 translate-y-2'}`} 
                        />
                    </a>
                </div>
            ))}
            </div>
        </div>
    );
}