import { Link } from "react-router-dom"

const Hero = () => (
  <section className="text-center py-30 bg-gradient-to-b from-[#f7f6ef] via-[#f7f6ef] to-blue-900 text-black  w-full"
   style={{
      backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 20% 100%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 100% 80%, rgba(59,130,246,0.3), transparent)
      `,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    }}
  >
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold py-5 text-gray-800 leading-tight flex justify-center">
    Build Your Professional Resume in  Minutes <img src="rocket.png" alt="rocket hai" className="md:w-12 md:h-12 hidden md:block" />
  </h1>
  
  <p className="text-sm md:text-lg  font-poppins  font-medium text-gray-600 max-w-2xl  mx-auto">
    Tired of boring resumes? 🎯 With our <span className="text-blue-600 font-semibold"> Resume Builder</span>, 
    you can create a stunning, ATS-friendly resume that grabs recruiter attention.  
  </p>

  <ul className="flex flex-col md:flex-row justify-center items-center gap-4 py-8 text-gray-700 font-poppins">
    <li className="flex items-center gap-2">
      ✅ Live Preview while you type
    </li>
    <li className="flex items-center gap-2">
      ✅ ATS-friendly templates
    </li>
    <li className="flex items-center gap-2">
      ✅ Export to PDF in one click
    </li>
  </ul>
<div className="py-10">
  <Link 
    to={"/resume"} 
    className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-poppins text-sm md:text-lg font-semibold px-8 py-4 rounded-2xl shadow-lg "
  >
    Get Started Free
  </Link>
</div>
  <p className="text-[12px] md:text-sm text-gray-500 font-poppins">
    No signup required • 100% Free • Instant Download
  </p>
    
  </section>
)

export default Hero

