import Image from "next/image";
import Hearder from "./_components/Hearder";
import Hero from "./_components/Hero";
import About from "./_components/About";
import WorkWithUs from "./_components/WorkWithUs";
import Project from "./_components/Project";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <WorkWithUs />
    </div>
  );
}
