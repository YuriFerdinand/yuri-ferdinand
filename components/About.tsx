import Image from "next/image";
import { IoLocation } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { FaCode } from "react-icons/fa";

export default function About() {

  const experiences = [
    {
      year: "2024",
      period: "Present",
      role: "Frontend Developer",
      organisation: "Freelance · Self-employed",
      description:
        "Designing and developing responsive landing pages and web applications for local clients using React and Tailwind CSS.",
      type: "Freelance",
    },
    {
      year: "2023",
      period: "2024",
      role: "Security Division Member",
      organisation: "Organisasi Anti Perundungan Sekolah",
      description:
        "Served as part of the security division, maintaining order and preventing bullying within the school environment.",
      type: "Organisation",
    },
    {
      year: "2023",
      period: "Present",
      role: "Informatics Engineering Student",
      organisation: "University · Kepulauan Riau, Indonesia",
      description:
        "Pursuing a bachelor's degree with focus on algorithms, data structures, web programming, and software engineering principles.",
      type: "Education",
    },
  ];
  
  return (
    <div className="w-full h-auto container mx-auto py-8">
      <div className="mb-8">
        <p className="text-xs font-medium tracking-[0.12em] uppercase text-[#c9a96e]">
          Get to know me
        </p>
        <div className="flex items-end gap-4">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            About Me
          </h2>
        <div className="h-[2px] w-16 bg-[#c9a96e] mb-2" />
        </div>
      </div>

      <section className="flex gap-8">
        <div className="flex-shrink-0">
            <div className="relative w-48 h-64 rounded-xl overflow-hidden border border-white/10">
              <div className="w-full h-full bg-[#2a2a2a] flex items-end p-3">
                <p className="text-[10px] text-white/30 tracking-widest uppercase">
                  Portrait
                </p>
              </div>
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#c9a96e] rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#c9a96e] rounded-bl-xl" />
            </div>
        </div>

        <div className="m-4 flex flex-col justify-between">
          <h3 className="text-xl text-[#c9a96e] font-semibold italic">Informatics Student - Indonesia</h3>
          <h3 className="text-2xl mb-6 font-semibold">Muhammad Yuri Ferdinand Adinata</h3>
          <p className="text-[#707070] text-md">Muhammad Yuri Ferdinand Adinata is a passionate programmer who began his journey in web development. He is currently pursuing a degree in Informatics Engineering at a university in Kepulauan Riau, Indonesia. His deep interest in programming drives him to continuously learn new technologies and never stop innovating, particularly in the field of information technology.</p>
          <div className="flex gap-8 mt-4 content-end">
            <p><IoLocation className="inline mr-4 align-center" />Kepulauan Riau, Indonesia.</p>
            <p><PiStudentBold className="inline mr-4" />Informatics Student</p>
            <p><FaCode className="inline mr-4" />Web Developer</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
       <div>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white flex-shrink-0">
              Life Experience
            </h3>
            <div className="flex-1 h-px bg-white/10" />
          </div>
 
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-white/10 hidden md:block" />
 
            <div className="flex flex-col gap-0">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row gap-4 md:gap-8 py-7 border-b border-white/8 last:border-b-0"
                >
                  {/* Year */}
                  <div className="md:w-24 flex-shrink-0 flex md:flex-col items-center md:items-end gap-2 md:gap-1 relative">
                    <div className="flex items-center gap-2 md:flex-col md:items-end">
                      <span className="text-sm font-semibold text-white">
                        {exp.year}
                      </span>
                    </div>
                    <span className="text-xs text-[#555]">{exp.period}</span>
                    
                    
                  </div>
 
                  {/* Content */}
                  <div className="flex-1 md:pl-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h4 className="text-base font-semibold text-white leading-snug">
                          {exp.role}
                        </h4>
                        <p className="text-sm text-[#c9a96e] mt-0.5">
                          {exp.organisation}
                        </p>
                      </div>
                      <span className="flex-shrink-0 text-[11px] px-3 py-1 rounded border border-white/15 text-[#707070] self-start">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-sm text-[#707070] leading-relaxed mt-3 max-w-lg">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}