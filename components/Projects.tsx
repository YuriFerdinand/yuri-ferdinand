import { GoArrowUpRight } from "react-icons/go";
import { FaReact, FaLaravel } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export const items = [
        {
            image:"/image1.jpg",
            type:"Intern Project",
            title:"STTI Tanjungpinang's Study Program Website",
            link:"/detail/web-prodi",
            year:"2025",
            desc:[
                "A website that built from demand on each study program to show more information and anouncement from lecturer for students about ongoing activites on STTI Tanjungpinang.", 
                "This website is my first work that used by profesional agency and i was studying to be a profesional developer there. I have done many trouble for building this website, like a dissent with partner, a ghost error, a problem to use other library, and more.",
                "Even though this project have a lot of problem, i have learned so many valueable lesson about how to use Next.js, database ecosystem, deploying, etc."
            ],
            icon:[
                { name: "Next.js", icon:<RiNextjsFill size={24} color="#000000" /> },
                { name: "Laravel", icon:<FaLaravel size={24} color="#F05340" /> },
                { name: "MySQL", icon:<SiMysql size={24} color="#4479A1" />},
            ]
        },
        {
            image:"/image1.jpg",
            type:"School Project",
            title:"GusExpress",
            desc:[
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab exercitationem ex ratione veritatis culpa sed sapiente reprehenderit labore soluta, iste, reiciendis enim, beatae quasi aspernatur.",
            ],
            link:"#",
            icon:[
                { name: "PHP", icon: <FaPhp size={24} color="#4F5B93" /> },
                { name: "MySQL", icon: <SiMysql size={24} color="#4479A1" />},
                { name: "Javascript", icon: <IoLogoJavascript size={24} color="#F0DB4F" />},
            ]
        },
    ];

export default function Projects() {

    return (
        <div className="grid grid-cols-3 gap-4" id="projects-grid">
            {items.map((item, i) => (
                <div key={i}  
                    data-aos="fade-up" 
                    data-aos-delay={i * 300}
                    data-aos-duration="900"
                    data-aos-easing="ease-out-cubic"
                    data-aos-anchor="#projects-grid">
                    <div 
                        className="bg-[#202020] w-full h-100 rounded-md group 
                                border border-[#2a2a2a] 
                                hover:border-[#c9a96e]
                                hover:-translate-y-2 transition-[transform, border-color] duration-300 ease-out
                                will-change-transform" 
                        style={{ overflowAnchor: 'none' }}
                    >
                        <div className="bg-gray-900 h-[50%] rounded-t-md p-4">
                            <div className="p-2 bg-[#c9a96e]/20 rounded-lg size-fit">
                                <p className="text-sm text-[#c9a96e] font-semibold">{item.type}</p>
                            </div>
                        </div>
                        <div className="h-[50%] p-4 flex flex-col justify-between">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg truncate">{item.title}</h3>
                                <p className="line-clamp-3 text-gray-400 text-md">{item.desc[0]}</p>
                            </div>
                            <hr className="border-t-[#2a2a2a] border-t-2" />
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row gap-2">
                                    {item.icon.map((icon, index) => (
                                        <div key={index} className="border flex flex-row gap-1 items-center text-xs p-1 rounded-lg bg-[#1a1a1a] border-[#333333]">
                                            <span>{icon.icon}</span>
                                            <p className="text-[#aaaaaa]">{icon.name}</p>
                                        </div>
                                    ))}
                                </div>
                                <Link href={item.link} className="flex flex-row items-center justify-end text-[#c9a96e] font-semibold">
                                    <p>View More</p>
                                    <GoArrowUpRight size={24} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}