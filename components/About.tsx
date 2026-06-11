import Image from "next/image";
import Certificate from "@/components/Certificate";
import { IoLocation } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { FaCode } from "react-icons/fa";

export default function About() {

  const experiences = [
    {
      year: "May 2026",
      period: "Present",
      role: "Informatics Engineering Student",
      organisation: "Politeknik Negeri Batam, Kepulauan Riau, Indonesia.",
      description:
        "Pursuing a bachelor's degree with focus on algorithms, data structures, web programming, and software engineering principles.",
      type: "Education",
    },
    {
      year: "June 2025",
      period: "December 2025",
      role: "Internship Program",
      organisation: "Sekolah Tinggi Teknologi Indonesia Tanjungpinang",
      description:
        "Building website with intern partner and participate to input, sorting, and making sure on any data at data centre.",
      type: "Internship",
    },
    {
      year: "March 2025",
      period: "April 2025",
      role: "Backend Developer & Database Engineer",
      organisation: "School Examination Project",
      description:
        "Building database and processing logic, input, delete, edit, and more features for delivery app.",
      type: "Academic Project",
    },
    {
      year: "2023",
      period: "2024",
      role: "Security Division Member",
      organisation: "Organisasi Anti Perundungan Sekolah",
      description:
        "Served as part of the security division, maintaining order and preventing bullying within the school environment.",
      type: "Organization",
    },
  ];
  
  return (
    <div className="w-full h-auto container mx-auto">
      <div data-aos="fade-right" data-aos-anchor-placement="left-left" className="mb-8">
        <p className="text-xs font-medium tracking-[0.12em] uppercase text-[#c9a96e]">
          Get to know me
        </p>
        <div className="flex items-end gap-4">
          <h2 className="text-4xl md:text-4xl font-bold leading-tight">
            About Me
          </h2>
          <div className="h-[2px] w-16 bg-[#c9a96e] mb-2" />
        </div>
      </div>

      <section className="flex flex-col gap-8 md:flex-row lg:flex-row">
        <div className="flex-shrink-0" data-aos="fade-right">
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

        <div className="flex flex-col justify-between gap-8" data-aos="fade-left">
          <p className="text-md text-[#c9a96e] font-semibold italic">Informatics Student - Indonesia</p>
          <h3 className="text-2xl font-semibold">Muhammad Yuri Ferdinand Adinata</h3>
          <p className="text-[#707070] text-md leading-[1.7rem]">Muhammad Yuri Ferdinand Adinata is a passionate programmer who began his journey in web development. He is currently pursuing a degree in Informatics Engineering at a university in Kepulauan Riau, Indonesia. His deep interest in programming drives him to continuously learn new technologies and never stop innovating, particularly in the field of information technology.</p>
          <div className="flex gap-8 content-end text-sm">
            <p><IoLocation className="inline mr-2 align-center" />Kepulauan Riau, Indonesia.</p>
            <p><PiStudentBold className="inline mr-2" />Informatics Student</p>
            <p><FaCode className="inline mr-2" />Web Developer</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white flex-shrink-0" data-aos="fade-right">
              Life Experience
            </h3>
            <div className="flex-1 h-px bg-white/10" data-aos="fade-left"/>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-white/10 hidden md:block" data-aos="fade-up"/>

            <div className="flex flex-col gap-0">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row gap-4 md:gap-8 py-7 border-b border-white/8 last:border-b-0"
                >
                  {/* Year */}
                  <div className="md:w-24 flex-shrink-0 flex md:flex-col items-center md:items-end gap-2 md:gap-1 relative" data-aos="zoom-out">
                    <div className="flex items-center gap-2 md:flex-col md:items-end">
                      <span className="text-sm font-semibold text-white">
                        {exp.year}
                      </span>
                    -
                    </div>
                    <span className="text-xs text-[#555]">{exp.period}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 md:pl-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div data-aos="zoom-out">
                        <h4 className="text-base font-semibold text-white leading-snug">
                          {exp.role}
                        </h4>
                        <p className="text-sm text-[#c9a96e] mt-0.5">
                          {exp.organisation}
                        </p>
                      </div>
                      <span className="flex-shrink-0 text-[11px] px-3 py-1 rounded border border-white/15 text-[#707070] self-start" data-aos="flip-left">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-sm text-[#707070] leading-relaxed mt-3 max-w-lg" data-aos="fade-left">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-row-reverse items-center gap-4 my-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white flex-shrink-0 textt-end" data-aos="fade-left">
            Certificate
          </h3>
          <div className="flex-1 h-px bg-white/10" data-aos="fade-right"/>
        </div>
        <div className="">
          <Certificate />
        </div>
      </section>

    </div>
  );
}