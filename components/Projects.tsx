import { MagicCard } from "./ui/magic-card";
export default function Projects() {
    return (
        <MagicCard mode="orb" className="h-100 w-100 flex flex-col p-4 shadow-xl rounded-2xl border-2 border-[#3d3d3d05]" glowTo="#627263" glowFrom="#94A695">
            <div className="mb-4">
                <h1 className="text-3xl font-bold text-[#4A443F]">Projects</h1>
                <p className="text-lg opacity-80">Company Name</p>
            </div>

            <div className="w-full h-48 flex justify-center items-center bg-[#E8EDE9] text-[#7C8E7D] rounded-xl mb-4">
                Image
            </div>

            <p className="text-sm leading-relaxed text-[#4A443F]/80">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, nemo!
            </p>

            <div className="mt-auto pt-4">
                <a href="#" className="text-[#7C8E7D] font-semibold hover:underline flex items-center gap-1">
                    More Details <span>→</span>
                </a>
            </div>
        </MagicCard>
    );
}