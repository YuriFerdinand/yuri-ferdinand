import { TbCertificate } from "react-icons/tb";
import { GoArrowUpRight } from "react-icons/go"; 
import { MdOutlineVerified } from "react-icons/md";

export default function Certificate() {

    const items = [
        {
            name:"Dasar Pemrograman Website",
            from:"Dicoding",
            year:"2024",
            link:"certificate/dasar-pemrograman-web.pdf"
        },
        {
            name:"Dasar Pemrograman Javascript",
            from:"Dicoding",
            year:"2024",
            link:"certificate/dasar-pemrograman-javascript.pdf"
        },
        {
            name:"Logika Pemrograman",
            from:"Dicoding",
            year:"2023",
            link:"certificate/logika-pemrograman.pdf"
        },
        {
            name:"Belajar Membuat Front-End Web untuk Pemula",
            from:"Dicoding",
            year:"2024",
            link:"certificate/frontend-pemula.pdf"
        },
    ];

    return (
        <div id="certificate-grid" className="grid grid-cols-3 md:grid-cols-3 gap-4">
            {items.map((item, i) => (
            <div 
                className="w-full h-fit bg-[#1e1e1e] p-4 rounded-lg border border-white/10 relative overflow-hidden" 
                key={i} 
                data-aos="fade-up" 
                data-aos-delay={i * 300}
                data-aos-duration="900"
                data-aos-easing="ease-out-cubic"
                data-aos-anchor="#certificate-grid"
            >
                <div className="flex justify-between">
                    <div className="w-fit p-2 rounded-lg bg-[#1e1e1e] border border-white/30 my-2">
                        <TbCertificate size={36} className="text-[#c9a96e]"/>
                    </div>
                    <span className="border h-fit p-2 text-sm rounded-full shrink-0 ml-2">{item.year}</span>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-lg truncate">{item.name}</h3>
                    <h3 className="text-[#c9a96e]">{item.from}</h3>
                </div>
                <div className="flex-1 h-px bg-white/10 my-2"></div>
                <div className="flex justify-between">
                    <span className="flex flex-row gap-1 items-center">
                        <div className="w-fit h-fit bg-green-800 rounded-full">
                            <MdOutlineVerified />
                        </div>
                        Verified
                    </span>
                    <a href={`${item.link}`} target="_blank" rel="noreferrer">
                        <span className="font-semibold hover:text-[#c9a96e]">
                        View More
                        <GoArrowUpRight className="inline-block ml-1" />
                        </span>
                    </a>
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#c9a96e] rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#c9a96e] rounded-bl-lg" />
            </div>
            ))}
        </div>
    );
}