import Link from "next/link";

export default function Footer() {
	return (
       
       <div>
  
       	  <footer className="bg-gradient-to-b from-purple-900 mt-60">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-fuchsia-950">
          <span className="ml-2 text-3xl text-fuchsia-950 font-bold font-serif">𝗠𝘂𝘇𝗻𝗮.</span>    </a>
          <p className="font-bold font-serif text-md text-fuchsia-950 sm:ml-4 sm:pl-4 sm:border-l-2 s sm:py-2 sm:mt-0 mt-4">
                                © 𝟮𝟬𝟮𝟰 𝗠𝘂𝘇𝗻𝗮 𝗔𝗺𝗶𝗿 𝗭𝘂𝗯𝗮𝗶𝗿𝗶 —
      
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
     
          <Link href = "https://www.linkedin.com/in/muzna-amir-z-280135264/" target ="blank" className="ml-3 text-fuchsia-950">
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
          </footer>
      </div>
	);
}