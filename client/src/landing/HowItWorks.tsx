 const HowItWorks = () => (
  <section className="py-16 bg-gray-50 px-6 text-center">
  <h2 className="text-4xl font-bold mb-10 font-poppins bg-gradient-to-b from-black to-blue-900 bg-clip-text text-transparent">HOW IT WORKS</h2>
  <div className="grid md:grid-cols-3 gap-8">

    {/* Step 1 */}
    <div className="bg-[#ced2d8] p-5 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-blue-600">1</h3>
      <p className="text-black mt-2 font-poppins">
        Start by selecting your preferred resume template from our collection. 
        Each template is professionally designed and fully customizable to 
        match your style and career goals. Whether you want a clean, modern look 
        or a detailed professional format, you’ll find the right fit here.
      </p>
    </div>

    {/* Step 2 */}
    <div className="bg-[#ced2d8] p-5 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-blue-600">2</h3>
      <p className="text-black font-poppins mt-2">
        Fill in your personal details, education, experience, skills, and projects 
        through our simple and structured input forms. As you type, the content 
        automatically updates in real-time on the resume template, so you can see 
        exactly how your information will appear to recruiters.
      </p>
    </div>

    {/* Step 3 */}
    <div className="bg-[#ced2d8] p-5 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-blue-600">3</h3>
      <p className="text-black font-poppins mt-2">
        Once you are happy with the final look, you can instantly export your resume 
        in multiple formats such as <span className="font-semibold">PDF</span> or 
        <span className="font-semibold"> Word</span>. You also get the option to generate 
        a shareable online link that can be directly sent to recruiters or added in 
        your job applications. This ensures your resume is accessible anytime, 
        anywhere, without formatting issues.
      </p>
    </div>

  </div>
</section>

)

export default HowItWorks