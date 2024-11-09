import About from "./about/page";
import Skills from "./skills/page";
import Project from "./project/page";
import Testimonial from "./testimonial/page";
import Contact from "./contact/page";


export default function Home() {
  return (
  <div>
  <About/>
  <Skills/>
  <Project/>
  <Testimonial/>
  <Contact/>
  </div>
  );
}
