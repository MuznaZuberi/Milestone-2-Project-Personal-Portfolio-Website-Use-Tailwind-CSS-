"use client"
import Typewriter from 'typewriter-effect';
import Image from "next/image";

export default function Testimonial() {
	return (
     
     <div>
       
         <h1 className = "font-bold text-center font-serif text-4xl text-fuchsia-950 mt-40 mb-10">𝗧𝗘𝗦𝗧𝗜<b className = "text-zinc-500 ">𝗠𝗢𝗡𝗜𝗔𝗟</b></h1>
         <section className="bg-gradient-to-b from-purple-900 ">
         <div className="container mx-auto">
         <br/><br/>
         <Image
            alt="testimonial_img"
            className="mx-auto border rounded-full"
            src = {require("../../../images/testimonial.jpg")}
         />

         <h2 className="text-white font-bold  tracking-wider text-xl text-center py-7">
         <Typewriter
            options={{
            strings: ["𝗘𝗹𝗹𝗶𝗲 𝗚𝗼𝘂𝗱𝗹𝗶𝗻𝗴"],
            autoStart: true,
            loop: true,
              }}
          />
         </h2>
         <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-justify py-4 px-6">
     
         <p className="leading-relaxed text-md text-fuchsia-950 font-serif font-bold ">
                    I had the pleasure of working with our team on several projects, and I am continually impressed by their expertise and professionalism. Their innovative approach and dedication to delivering high-quality work have consistently exceeded expectations. The ability to seamlessly integrate cutting-edge technologies with a strong foundation in both frontend and backend development truly sets them apart. I highly recommend our team to anyone seeking a reliable and skilled partner in the tech industry.
         </p>
         </div>
         </div>
         </section>

     </div>
	);
}