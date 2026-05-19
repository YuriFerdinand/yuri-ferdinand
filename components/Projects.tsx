import { GoArrowUpRight } from "react-icons/go"; 

export default function Projects() {
    return (
        <div className="bg-[#202020] w-auto h-100 rounded-md group">
            <div className="bg-[#2a2a2a] rounded-lg h-50 w-auto m-4 group-hover:h-44 transition-[height] duration-300 ease-in-out relative overflow-hidden border border-white/10 flex justify-center items-center">
                Image
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#c9a96e] rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#c9a96e] rounded-bl-lg" />
            </div>
            <div className="mx-4 ">
                <h3 className="text-xl font-bold truncate my-1">Project Name</h3>
                <h3 className="text-md text-[#c9a96e] font-light my-1">Company Name</h3>
                <p className="text-sm text-[#707070] leading-relaxed line-clamp-3 my-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, pariatur!
                </p>
                <div className="my-2 opacity-0 group-hover:opacity-100 ease-in-out transition-all duration-300">
                    <a href="#">
                        <span className="text-md font-semibold hover:text-[#c9a96e]">
                          View More
                          <GoArrowUpRight className="inline-block ml-1" />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}



