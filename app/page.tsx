import About from "@/components/About";
import Skills from "@/components/Skills";
import Path from "@/components/Path";
export default function HomePage() {
  return (
    <div className="">
      <h1 className="text-4xl">Welcome</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores expedita hic velit neque odio sequi ratione porro, quod praesentium ipsa aliquid? Aperiam, illo ullam harum aliquam consectetur quasi iste mollitia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nam deserunt repudiandae eveniet maxime sunt quas delectus minima odit quasi expedita fugit, magnam aspernatur eaque alias eligendi quae! Facilis, deleniti.</p>
      <section id="about" className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-gray-200 ">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="path" className="overflow-x-hidden w-full">
        <Path />
      </section>
    </div>
  )
}