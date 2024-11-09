import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
     
     <div>

        <h1 className="text-4xl font-bold mx-auto text-fuchsia-950 font-serif text-center mt-40">
                     𝗠𝘆 <b className = "text-zinc-500 ">𝗣𝗥𝗢𝗝𝗘𝗖𝗧𝗦</b>
        </h1>
        <section className="bg-gradient-to-b from-purple-900 mt-10 ">
        <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-col">
     
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">       
        </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
        <Image
            alt="Project_img"
            className="object-cover object-center h-full w-full"
            src={require("../../../images/project_01.png")}
        />
        </div>
        <h2 className="text-xl font-bold text-white font-serif mt-5">
                        𝗠𝗶𝗻𝗲 𝗣𝗼𝗿𝘁𝗳𝗼𝗹𝗶𝗼      
        </h2>
        <p className="text-justify font-serif text-white mt-2">
               As a full-time web developer, I specialize in creating responsive, high-performance websites and applications. In this portfolio, I showcase my skills in modern frameworks such as Next.js and Tailwind CSS, as well as my experience in creating intuitive and engaging user interfaces.
        </p>
        <Link href = "https://custom-css-portfolio-lac.vercel.app/" className="text-white inline-flex items-center mt-3 font-bold font-serif" target = "blank">
                  See My Projects
        <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
        >
        <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        </Link>
        </div>



        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
        <Image
            alt="Project_img"
            className="object-cover object-center h-full w-full"
            src={require("../../../images/project_02.png")}
        />
        </div>
        <h2 className="text-xl font-bold text-white font-serif mt-5">
                              𝗕𝗲𝗿𝗿𝘆𝗹𝗶𝗰𝗶𝗼𝘂𝘀
        </h2>
        <p className="text-justify font-serif text-white mt-2">
                      Berryllicious offers the best fresh and exotic fruits in a seamless online shopping experience.Our website is designed for easy browsing and purchasing, and we deliver premium fruits directly to your door. At Berrylicious, we're committed to freshness and customer satisfaction.
        </p>
        <Link href= "https://berrylicious-delta.vercel.app/" className="text-white inline-flex items-center mt-3 font-bold font-serif" target = "blank">
                      See My Projects
        <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
        >
        <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        </Link>
        </div>
       

        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
        <Image
            alt="Project_img"
            className="object-cover object-center h-full w-full"
            src={require("../../../images/project_03.png")}
        />
        </div>
        <h2 className="text-xl font-bold text-white font-serif mt-5">
                              𝗦𝗶𝘇𝘇𝗲𝗹𝘀_𝗦𝗲𝗿𝘃𝗲   
        </h2>
        <p className="text-justify font-serif text-white mt-2">
                     Sizzels_Serve, each dish is made to bring you an explosion of unforgettable flavors. Signing aperitifs to rich and generous dishes and delicious desserts, each bite is a celebration of freshness and quality. Our cook carefully selects the best ingredients not only to satisfy your traction, but also to make more dishes you want.
        </p>
        <Link href = "https://sizzels-serve.vercel.app/" className="text-white inline-flex items-center mt-3 font-bold font-serif" target = "blank">
                     See My Projects
        <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
        >
       <path d="M5 12h14M12 5l7 7-7 7" />
       </svg>
       </Link>
       </div>



       <div className="p-4 md:w-1/3 sm:mb-0 mb-6 mt-10">
       <div className="rounded-lg h-64 overflow-hidden">
       <Image
            alt="Project_img"
            className="object-cover object-center h-full w-full"
            src={require("../../../images/project_04.png")}
       />
       </div>
       <h2 className="text-xl font-bold text-fuchsia-950 font-serif mt-5">
                                   𝗖𝗹𝗲𝘃𝗼𝗿𝗮
       </h2>
       <p className="text-justify font-serif text-fuchsia-950  mt-2">
                      At Clevora, we strive to make our customers’ shopping experience as pleasant and hassle-free as possible, and our platform offers a wide range of high-quality products carefully selected to meet the needs of our customers. Clevora ensures a smooth shopping experience from start to finish with smooth navigation, detailed product descriptions, and secure payments. Whether you're browsing for new things or looking for trusted essentials.
       </p>
       <Link href = "https://clevora-shopping-store.vercel.app/" className="text-fuchsia-950 inline-flex items-center mt-3 font-bold font-serif" target = "blank">
                       See My Projects
       <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
       >
       <path d="M5 12h14M12 5l7 7-7 7" />
       </svg>
       </Link>
       </div>



      <div className="p-4 md:w-1/3 sm:mb-0 mb-6 mt-10">
      <div className="rounded-lg h-64 overflow-hidden">
      <Image
            alt="Project_img"
            className="object-cover object-center h-full w-full"
            src={require("../../../images/project_05.png")}
      />
      </div>
      <h2 className="text-xl font-bold text-fuchsia-950 font-serif mt-5">
                            𝑾𝒂𝒔𝒉𝑾𝒂𝒗𝒆    
      </h2>
      <p className="text-justify font-serif text-fuchsia-950  mt-2">
                   Washwave is your trusted partner for premium dry cleaning services, and our team uses advanced cleaning techniques and high-quality products to thoroughly clean your garments while preserving their fabric and color. From delicate clothes to everyday clothes, we pay close attention, remove dirt, refresh the clothes, and remain as beautiful as new ones. Washwave can rely on professional services that take care of your clothes with the greatest precautions.
      </p>
      <Link href = "https://washwave-website.vercel.app/#home" className="text-fuchsia-950 inline-flex items-center mt-3 font-bold font-serif" target = "blank">
                   See My Projects
      <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
      >
      <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
      </Link>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6 mt-10">
      <div className="rounded-lg h-64 overflow-hidden">
      <Image
            alt="Project_img"
            className="object-cover object-center h-full w-full"
            src={require("../../../images/project_06.png")}
      />
      </div>
      <h2 className="text-xl font-bold text-fuchsia-950 font-serif mt-5">
                      𝗣𝗼𝗿𝘁𝗳𝗼𝗹𝗼
      </h2>
      <p className="text-justify font-serif text-fuchsia-950  mt-2">
                   As an experienced web developer, I specialize in creating dynamic, user-friendly and visually appealing websites that meet business needs. With my expertise in modern technologies like HTML, CSS, JavaScript and frameworks like React and Next.js, I design and develop websites that provide a seamless user experience across devices. Whether you need a personal portfolio, a professional website, or an e-commerce platform.
      </p>
      <Link href = "https://mine-portfolio-tan.vercel.app/" className="text-fuchsia-950 inline-flex items-center mt-3 font-bold font-serif" target = "blank">
                   See My Projects
      <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
      >
      <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
      </Link>
      </div>
      </div>
      </div> 
      </section>

  </div>
    );
}