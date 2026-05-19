"use client"
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Threads from "@/components/ui/background-threads";

export default function HomePage() {

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative -mt-24 flex h-screen" id="home" style={{isolation: 'isolate'}}>
        <div className="absolute inset-0 z-0 overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="absolute inset-0">
            <div className="h-full">
              <Threads
                color={[0.788235294117647,0.6627450980392157,0.43137254901960786]}
                amplitude={1.2}
                distance={0.1}
                enableMouseInteraction
              />
            </div>
          </div>
        </div>
        <div className="content-end mb-10 z-10 relative">
          <div></div>
          <span className="text-7xl italic font-extrabold font-heading text-[#e8e6e0]">Make a Minimalist Solution <br /> For a Complex Problem.</span>
          <p className="text-xl font-base mt-2 text-[#c9a96e]">Start to make every ideas become real.</p>
        </div>

      </section>

      {/* About */}
      <section id="about" className="z-10 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#202020]">
        <About />
      </section>

      {/* Projects */}
      <section id="projects" className="h-full relative z-10">
        <div className="py-8 flex flex-col gap-2">
          <h2 className="text-4xl font-bold text-center">Projects</h2>
          <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#c9a96e] text-center">Something that i made</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          <Projects />
          <Projects />
          <Projects />
          <Projects />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="">
        <div className="relative bg-[#202020] h-0.5 my-16 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen"></div>
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold text-center">Contact</h2>
          <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#c9a96e] text-center">Get In Touch</p>
          <p className="text-center text-lg">Open collaboration, freelance projects, and new ideas.</p>
        </div>
        <Contact />
        <div className="relative bg-[#202020] h-0.5 mt-8 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen"></div>
      </section>
    </main>
  )
}