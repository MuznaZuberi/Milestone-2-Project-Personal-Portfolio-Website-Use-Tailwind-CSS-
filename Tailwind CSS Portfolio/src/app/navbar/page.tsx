import Link from "next/link";

export default function Navbar() {
	return (
     
     <div>

     	       {/*Top Header*/}
             <header className="text-white bg-fuchsia-950">
             <div className="container px-5 py-3  flex items-center sm:flex-row flex-col max-auto">
             <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    
             <span className="ml-3 text-medium text-white">𝖒𝖚𝖟𝖓𝖆𝖟𝖚𝖇𝖊𝖗𝖎𝟏𝟐𝟑@𝖌𝖒𝖆𝖎𝖑.𝖈𝖔𝖒</span>
             </a>
   
             <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
 
             <Link href = "https://www.linkedin.com/in/muzna-amir-z-280135264/" target ="blank" className="ml-3 text-white font-bold">
             <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
             >
             <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
             />
             <circle cx={4} cy={4} r={2} stroke="none" />
             </svg>
             </Link>
             </span>
             </div>
             </header>

       

             {/*Navbar*/}
             <header className="bg-gradient-to-r from-purple-900">
             <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
             <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
    
             <span className="ml-10 text-3xl font-bold font-serif">𝗠𝘂𝘇𝗻𝗮.</span>
             </a>
             <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
             <Link href = "/" className="mr-4 text-fuchsia-950 font-bold font-serif">Home</Link>
             <Link href = "/about" className="mr-4 text-fuchsia-950 font-bold font-serif">About</Link>
             <Link href = "/skills" className="mr-4 text-fuchsia-950 font-bold font-serif">Skills</Link>
             <Link href = "/project" className="mr-4 text-fuchsia-950 font-bold font-serif">Projects</Link>
             <Link href = "contact" className="mr-4 text-fuchsia-950 font-bold font-serif">Contact Us</Link>
             </nav>
             <Link href = "https://drive.google.com/file/d/1QyJrVqGLy92FCct6XbzeLNt3GcqePyWA/view?usp=drive_link" target = "blank" className="text-sm ml-4 inline-flex text-white bg-fuchsia-950 font-serif  py-2 px-3 focus:outline-none hover:bg-zinc-500  border rounded-xl text-lg hover:text-white">
                                                     Download_CV
             </Link>
             </div>
             </header>
   </div>

	);
}