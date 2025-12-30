import { FaReact, FaLaravel } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

export default function Skills() {
    const skillItems = [
        { name: "React", icon: <FaReact size={40} color="#61DAFB" /> },
        { name: "Next.js", icon: <RiNextjsFill size={40} color="#000000" /> },
        { name: "Laravel", icon: <FaLaravel size={40} color="#F05340" /> },
        { name: "MySQL", icon: <SiMysql size={40} color="#4479A1" /> },
        { name: "Javascript", icon: <IoLogoJavascript size={40} color="#F7DF1E" /> },
    ];

    const multipleVariable = [...skillItems, ...skillItems, ...skillItems, ...skillItems];

    return (
        <div className="relative w-full overflow-hidden bg-white py-10">
            <div className="flex w-max animate-scroll-right pause-on-hover">
                {multipleVariable.map((skill, index) => (
                    <div 
                        key={index}
                        className="w-32 h-32 mx-4 flex flex-col items-center justify-center bg-gray-100 rounded-xl hover:scale-110 transition-transform cursor-pointer shadow-sm border border-gray-200"
                    >
                        <div className="mb-2">
                            {skill.icon}
                        </div>
                        <p className="font-semibold text-xs text-gray-700 uppercase tracking-wider">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent"></div>
        </div>
    );
}