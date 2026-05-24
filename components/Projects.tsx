import { GoArrowUpRight } from "react-icons/go"; 
import Image from "next/image";

export default function Projects() {
    const items = [
        {
            image:"/image1.jpg",
            pName:"Website Program Studi STTI Tanjungpinang",
            cName:"Sekolah Tinggi Teknologi Indonesia Tanjungpinang",
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum reiciendis tempora quos sint adipisci dolorem ducimus deserunt quam ratione atque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit consequatur corrupti totam voluptatibus itaque numquam molestiae incidunt ipsam natus inventore!",
            link:"#",
        },
        {
            image:"/image1.jpg",
            pName:"Website Program Studi STTI Tanjungpinang",
            cName:"Sekolah Tinggi Teknologi Indonesia Tanjungpinang",
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum reiciendis tempora quos sint adipisci dolorem ducimus deserunt quam ratione atque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit consequatur corrupti totam voluptatibus itaque numquam molestiae incidunt ipsam natus inventore!",
            link:"#",
        },
        {
            image:"/image1.jpg",
            pName:"Website Program Studi STTI Tanjungpinang",
            cName:"Sekolah Tinggi Teknologi Indonesia Tanjungpinang",
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum reiciendis tempora quos sint adipisci dolorem ducimus deserunt quam ratione atque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit consequatur corrupti totam voluptatibus itaque numquam molestiae incidunt ipsam natus inventore!",
            link:"#",
        },
    ]
    return (
        <div className="flex flex col gap-4">
            {items.map((item, i) => (
                <div className="bg-[#202020] w-full h-100 rounded-md group" key={i}>
                    <div className="bg-[#2a2a2a] rounded-lg h-50 w-auto m-4 group-hover:h-44 transition-[height] duration-300 ease-in-out relative overflow-hidden border border-white/10 flex justify-center items-center">
                        <Image src={item.image} alt="" fill className="object-cover"/>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#c9a96e] rounded-tr-lg" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#c9a96e] rounded-bl-lg" />
                    </div>
                    <div className="mx-4 flex flex-col gap-2">
                        <h3 className="text-xl font-bold truncate">{item.pName}</h3>
                        <h3 className="text-md text-[#c9a96e] font-light">{item.cName}</h3>
                        <p className="text-sm text-[#707070] leading-relaxed line-clamp-3">{item.desc}</p>
                        <div className="opacity-0 group-hover:opacity-100 ease-in-out transition-all duration-300">
                            <a href={`${item.link}`}>
                                <span className="text-md font-semibold hover:text-[#c9a96e]">
                                    View More
                                    <GoArrowUpRight className="inline-block ml-1" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}



