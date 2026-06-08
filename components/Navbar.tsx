"use client";
import { useEffect, useState } from "react";
import { IoIosHome } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa";
import { IoMdArrowRoundBack, IoMdMenu, IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { name: "Home",     href: "#home",     id: "home",     logo: <IoIosHome size={24} /> },
        { name: "About",    href: "#about",    id: "about",    logo: <FaAddressCard size={24} /> },
        { name: "Projects", href: "#projects", id: "projects", logo: <FaAddressCard size={24} /> },
        { name: "Contact",  href: "#contact",  id: "contact",  logo: <FaAddressCard size={24} /> },
    ];

    useEffect(() => {
        const hero = document.querySelector("#home");
        if (!hero) return;
        const obs = new IntersectionObserver(
        ([entry]) => setScrolled(!entry.isIntersecting),
        { threshold: 0.1 }
        );
        obs.observe(hero);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        const sections = menuItems
        .map(({ id }) => document.querySelector(`#${id}`))
        .filter(Boolean) as Element[];

        const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(entry.target.id);
            });
        },
        { threshold: 0, rootMargin: "-40% 0px -60% 0px" }
        );
        sections.forEach((s) => obs.observe(s));
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    if (pathname.includes("/detail")) {
        return (
        <div className="h-13">
            <div className="flex h-full items-center justify-between fadeIn">
            <Link
                href="/"
                className="border flex flex-row gap-1 p-0.5 items-center text-sm rounded-lg bg-[#1a1a1a] border-[#333333] hover:scale-125 transition-[scale] duration-300 ease-in-out"
            >
                <IoMdArrowRoundBack size={28} color="#c9a96e" />
            </Link>
            <Link href="/" className="font-bold text-xl">Yuri Ferdinand</Link>
            </div>
            <hr className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] border-t-[#2a2a2a] border-t-2" />
        </div>
        );
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled ? "bg-[#0f0f0f]/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
        >
        <div className="container mx-auto flex justify-between items-center py-3 fadeIn">
            <Link href="/" className="font-bold text-xl">Yuri Ferdinand</Link>

            <div className="hidden lg:flex gap-10">
            {menuItems.map((item) => (
                <a
                key={item.name}
                href={item.href}
                className={`text-base transition-all duration-300 flex items-center gap-1 ${
                    active === item.id
                    ? "text-[#c9a96e] font-semibold border-b border-[#c9a96e]"
                    : "text-gray-400 hover:text-[#c9a96e]"
                }`}
                >
                {item.name}
                </a>
            ))}
            </div>

            <button
            className="lg:hidden text-[#e8e6e0] z-50 cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            >
            {menuOpen ? <IoMdClose size={26} /> : <IoMdMenu size={26} />}
            </button>
        </div>

        {menuOpen && (
            <div className="lg:hidden flex flex-col gap-6 px-6 pb-8 bg-[#0f0f0f]/95 border-t border-white/10">
            {menuItems.map((item) => (
                <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm transition-all duration-300 flex items-center gap-2 ${
                    active === item.id
                    ? "text-[#c9a96e] font-semibold"
                    : "text-gray-400 hover:text-[#c9a96e]"
                }`}
                >
                {item.logo}
                {item.name}
                </a>
            ))}
            </div>
        )}
        </nav>
    );
}