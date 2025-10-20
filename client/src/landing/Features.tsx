import { File, FileDown, Zap } from "lucide-react";

const Feature = () => (
  <>
    <h2 className="text-5xl py-7 flex justify-center font-poppins font-bold bg-gradient-to-b from-black to-blue-900 bg-clip-text text-transparent">
      FEATURES
    </h2>
    <section className="py-14 sm:px-20 px-2 grid md:grid-cols-3 gap-8 text-center realtive inset-0 z-0">
      
      <div className="w-80 sm:w-full py-4 px-3 sm:p-10 md:p-16  rounded-xl shadow-2xl bg-gradient-to-b from-[#fbfaff] via-[#fbfaff] to-blue-300 text-black justify-center items-center flex-col shadow-blue-300/100 ">
        <div className="flex justify-center"><Zap size={30}/><h3 className="font-semibold text-2xl mb-3 playwrite-de-sas-ro">
         Live Preview
        </h3>
        </div>
        <p className="text-base leading-relaxed font-poppins">
          Edit your resume and{" "}
          <span className="font-semibold ">see changes instantly</span> in a
          live preview. No more guesswork — what you see is exactly what you’ll
          download. 
        </p>
      </div>

      <div className="w-full py-4 px-2 sm:p-10 md:p-16 flex-col justify-center  rounded-xl shadow-2xl bg-gradient-to-b from-[#fbfaff] via-[#fbfaff] to-blue-300 text-black shadow-blue-300/100">
        <div className="flex justify-center"><File size={30}/><h3 className="font-semibold text-2xl mb-3 playwrite-de-sas-ro">
           ATS Friendly
        </h3>
        </div>
        <p className="text-base leading-relaxed font-poppins">
          Our templates are{" "}
          <span className="font-semibold">
            optimized to pass Applicant Tracking Systems (ATS)
          </span>
          . Recruiters and job portals will never reject your resume for
          formatting issues. 
        </p>
      </div>

      <div className="w-full py-4 px-2 sm:p-10 md:p-16 flex-col justify-center  rounded-xl shadow-2xl bg-gradient-to-b from-[#fbfaff] via-[#fbfaff] to-blue-300 text-black shadow-blue-300/100">
       <div className="flex justify-center"><FileDown size={30}/> <h3 className="font-semibold text-2xl mb-3 playwrite-de-sas-ro">
           Export Options
        </h3>
        </div>
        <p className="text-base leading-relaxed font-poppins">
          Download your resume in{" "}
          <span className="font-semibold">PDF or Word format</span>, or share a
          unique online link directly with recruiters. 
        </p>
      </div>
    </section>
  </>
);

export default Feature;
