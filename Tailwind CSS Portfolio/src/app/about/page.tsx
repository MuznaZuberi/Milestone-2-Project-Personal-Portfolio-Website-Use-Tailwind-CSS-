"use client"
import Typewriter from 'typewriter-effect';
import Image from "next/image";
import Link from "next/link";

export default function About() {
	return (

    <div>
    	  <section className="bg-zinc-100">
        <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-fuchsia-950 font-serif">
           <Typewriter
              options={{
              strings: ["𝐇𝐞𝐥𝐥𝐨! 𝐌𝐲𝐬𝐞𝐥𝐟 𝐌𝐮𝐳𝐧𝐚 𝐀𝐦𝐢𝐫..."],
              autoStart: true,
              loop: true,
              }}
          />
        </h1>
        <h2 className = "font-bold text-2xl pb-7 font-serif">𝗔𝗜 & 𝗪𝗲𝗯 𝟯.𝟬 𝗘𝗻𝘁𝗵𝘂𝘀𝗶𝗮𝘀𝘁 | 𝗙𝘂𝗹𝗹-𝗦𝘁𝗮𝗰𝗸 𝗪𝗲𝗯 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿</h2>
        <p className="mb-8 leading-relaxed font-serif text-justify text-black">
                 I am a passionate AI and Web 3.0 enthusiast, currently pursuing advanced studies in Generative AI, Web 3.0, and the Metaverse. With a strong foundation in both frontend and backend development, I have honed my skills to create dynamic, responsive, and innovative web solutions. My experience spans across building robust, scalable applications that integrate cutting-edge technologies to deliver exceptional user experiences. As I continue to explore the realms of AI and Web 3.0, I am committed to leveraging these emerging technologies to shape the future of the web.
        </p>
        <div className="flex justify-center">
        <Link href = "https://www.linkedin.com/in/muzna-amir-z-280135264/" target ="blank"  className="inline-flex text-white bg-fuchsia-950 border rounded-xl py-2 px-6 focus:outline-none hover:bg-zinc-500  text-lg font-serif">
                                                       Hïrê_Mê
        </Link>
       
        </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pl-20">
        <Image
             className="object-cover object-center rounded"
             alt="gif_img"
             src={require("../../../images/about.jpg")}
        />
       </div>
       </div>
       </section>

  </div>


	);
}