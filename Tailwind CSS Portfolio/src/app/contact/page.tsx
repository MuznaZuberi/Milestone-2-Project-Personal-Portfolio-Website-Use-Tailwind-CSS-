export default function ContactUs() {
	return (
 
      <div>

     <h1 className = "font-bold text-center font-serif text-4xl text-fuchsia-950 mt-40 mb-10 pt-30">𝗚𝗲𝘁 𝗜𝗻<b className = "text-zinc-500 "> 𝗧𝗼𝘂𝗰𝗵</b></h1>
     <section className="text-gray-600  relative">
     <div className="absolute inset-0 bg-gray-300">
     <iframe
      width="100%"
      height="100%"
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      title="map"
      scrolling="no"
      src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
      style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
     />
    </div>
    <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
    <h2 className=" text-lg mb-1 font-bold font-serif text-fuchsia-950">
                                 𝗟𝗲𝘁'𝘀 𝗖𝗼𝗻𝗻𝗲𝗰𝘁 𝗪𝗶𝘁𝗵 𝗠𝗲
    </h2>
    <p className="leading-relaxed mb-5 font-serif text-justify">
                       Contact me for any inquiries, collaborations or to discuss your projects. I will help you bring your ideas to life with innovative web solutions.      </p>
    <div className="relative mb-4">
    <label htmlFor="email" className="leading-7 text-md font-bold font-serif text-fuchsia-950">
           Email
    </label>
    <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
    </div>
    <div className="relative mb-4">
    <label htmlFor="message" className="leading-7 font-bold font-serif text-fuchsia-950">
          Message
    </label>
    <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
     />
    </div>
    <button className="text-white bg-fuchsia-950 border-0 py-2 px-6 font-serif focus:outline-none hover:bg-zinc-500  rounded-xl text-lg">
        𝗦𝗲𝗻𝗱 𝗠𝗲𝘀𝘀𝗮𝗴𝗲
    </button>
    <p className="text-xs font-bold font-serif mt-3 text-fuchsia-950 text-center pt-3">
                       muznazuberi123@gmail.com
    </p>
    </div>
    </div>
    </section>

</div>
  );
}