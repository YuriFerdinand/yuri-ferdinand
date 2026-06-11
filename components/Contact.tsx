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
        <div className="flex flex-col gap-2 md:flex-row md:gap-6" id="contact-grid">
            {items.map((item, index) => (
                <div 
                    key={index}
                    className="w-full md:flex-1"
                    data-aos="fade-up" 
                    data-aos-delay={index * 300}
                    data-aos-duration="900"
                    data-aos-easing="ease-out-cubic"
                    data-aos-anchor="#contact-grid"
                >
                <div className="hover:scale-105 transition-scale duration-300 ease-out w-full">
                    <a
                        href={item.href}
                        target="_blank"
                        className="relative w-full h-30 bg-[#202020] flex flex-col gap-2 justify-center items-center rounded-md overflow-hidden"
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
                </div>
            ))}
        </div>
    );
}