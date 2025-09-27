const Feature = () => (
  <>
  <h2 className="text-5xl py-7 flex justify-center font-poppins font-bold bg-gradient-to-b from-black to-blue-900 bg-clip-text text-transparent">FEATURES</h2>
  <section className="py-14 px-20 grid md:grid-cols-3 gap-8 text-center realtive inset-0 z-0" >
    <div className="p-10 md:p-16  rounded-xl shadow-lg bg-gradient-to-b from-blue-400 via-blue-500 to-blue-900 text-white " >
      <h3 className="font-semibold text-2xl mb-3 font-poppins">⚡ Live Preview</h3>
      <p className="text-base leading-relaxed font-poppins">
        Edit your resume and{" "}
        <span className="font-semibold">see changes instantly</span> in a live
        preview. No more guesswork — what you see is exactly what you’ll
        download. 🎯
      </p>
    </div>

    <div className="p-10 md:p-16  rounded-xl shadow-purple-700/10 shadow-lg bg-gradient-to-b from-green-400 via-green-500 to-green-900 text-white ">
      <h3 className="font-semibold text-2xl mb-3 font-poppins">📑 ATS Friendly</h3>
      <p className="text-base leading-relaxed font-poppins">
        Our templates are{" "}
        <span className="font-semibold">
          optimized to pass Applicant Tracking Systems (ATS)
        </span>
        . Recruiters and job portals will never reject your resume for
        formatting issues. ✅
      </p>
    </div>

    <div className="p-10 md:p-16 border rounded-xl shadow-md bg-gradient-to-b from-red-400 via-red-500 to-red-900 text-white">
      <h3 className="font-semibold text-2xl mb-3 font-poppins">📤 Export Options</h3>
      <p className="text-base leading-relaxed font-poppins">
        Download your resume in{" "}
        <span className="font-semibold">PDF or Word format</span>, or share a
        unique online link directly with recruiters. 🚀
      </p>
    </div>
  </section>
  </>
);

export default Feature;

