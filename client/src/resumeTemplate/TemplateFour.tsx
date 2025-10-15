// import React from 'react'

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import type { RootState,AppDispatch } from "../store/store";
import { useSelector,useDispatch } from "react-redux";
import { useTemplate } from "../store/slice/resume/resume.slice";
const TemplateFour = () => {

    const { collectData }: any = useSelector(
    (state: RootState) => state.resumeReducer
  );

  const componentRef = useRef<HTMLDivElement | null>(null);

  // @ts-ignore
  const handlePrint = useReactToPrint({
    contentRef: componentRef, // <-- ✅ new API
    documentTitle: `${collectData?.personalInfo?.firstName}_Resume`,
    onAfterPrint: () => console.log("Print success!"),
    onPrintError: (error: any) => console.error("Print error:", error),
  });
  console.log("collection", collectData);
  if (!collectData) {
    return <p>No Resume Data Yet. Start Typing!</p>;
  }

   const dispatch = useDispatch<AppDispatch>()
  
   const handleSelect = () => {
      dispatch(useTemplate("TemplateFour")); // ✅ Redux me set kar dega
    };
  return (
    <div onClick={handleSelect} className="flex-col items-center  md:w-[90%] w-full justify-center    bg-gray-100 mt-5">
  <div
    ref={componentRef}
    className="w-full max-w-3xl bg-white text-gray-800 p-8 rounded-lg shadow-lg"
  >
    {/* Name and Contact */}
    <header className="pb-4 mb-4 border-b-2 border-gray-900">
      <h1 className="text-3xl font-serif font-bold text-gray-900 flex justify-center uppercase tracking-wider">
        {collectData?.personalInfo?.firstName} {collectData?.personalInfo?.lastName}
      </h1>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700 mt-2 justify-center">
        <p>
          Email: <span className="text-blue-700">{collectData?.personalInfo?.email}</span>
        </p>
        <p>
          Phone: {collectData?.personalInfo?.phoneNumber}
        </p>
        <p>
          LinkedIn: <a href={collectData?.personalInfo?.linkedin} target="_blank" className="text-blue-700 hover:underline">Profile</a>
        </p>
        <p>
          GitHub: <a href={collectData?.personalInfo?.github} target="_blank" className="text-blue-700 hover:underline">Code</a>
        </p>
      </div>
    </header>

    {/* Professional Summary/Objective (Great for formal templates) */}
    {/* Assuming you add a new data field for summary/objective */}
    {/* <section className="mb-6">
      <p className="text-sm italic text-gray-600 border-b border-gray-300 pb-2">
         Driven professional with 8 years of experience in regulatory compliance and risk management...
      </p>
    </section> */}

    {/* Experience */}
    <section className="mb-6">
      <h2 className="text-xl font-bold border-b border-gray-900 pb-1 mb-3 uppercase tracking-wider">
        Professional Experience
      </h2>

      {/* Main Experience */}
      <div className="mb-4">
        <div className="flex justify-between items-start">
          <p className="text-md font-extrabold text-gray-900">
            {collectData?.experience?.mainExperience?.jobTitle}
          </p>
          <p className="text-sm font-medium text-gray-600 whitespace-nowrap">
            {collectData?.experience?.mainExperience?.experienceStartDate} -{" "}
            {collectData?.experience?.mainExperience?.experienceEndDate == null ? "Present" : collectData?.experience?.mainExperience?.experienceEndDate}
          </p>
        </div>
        <div className="flex justify-between text-sm italic text-gray-700 mb-1">
          <p>{collectData?.experience?.mainExperience?.company}</p>
          <p>{collectData?.experience?.mainExperience?.jobLocation}</p>
        </div>
        <ul className="list-disc list-outside text-sm ml-5 space-y-1">
          {collectData?.experience?.mainExperience?.description?.map(
            (expDescription: string, id: number) => (
              <li key={id}>{expDescription}</li>
            )
          )}
        </ul>
      </div>

      {/* Additional Experiences (Loop through dynamic experience here) */}
      {/* ... */}
    </section>

    {/* Education */}
    <section className="mb-6">
      <h2 className="text-xl font-bold border-b border-gray-900 pb-1 mb-3 uppercase tracking-wider">
        Education
      </h2>
      <div className="text-sm">
        <div className="flex justify-between font-bold">
          <p>{collectData?.educationData?.education?.college}</p>
          <p>
            {collectData?.educationData?.education?.startDate} - {collectData?.educationData?.education?.endDate}
          </p>
        </div>
        <div className="flex justify-between text-gray-700">
          <p className="italic">{collectData?.educationData?.education?.degree}</p>
          <p>{collectData?.educationData?.education?.locationInstitution}</p>
        </div>
        <p className="text-xs mt-1">Relevant Coursework: {collectData?.educationData?.education?.educationDescription}</p>
      </div>
    </section>

    {/* Technical Skills */}
    <section className="mb-6">
      <h2 className="text-xl font-bold border-b border-gray-900 pb-1 mb-3 uppercase tracking-wider">
        Technical Skills
      </h2>
      <div className="text-sm grid grid-cols-1 sm:grid-cols-3 gap-y-1">
        <p>
          <span className="font-bold">Languages:</span> {collectData?.technicalSkills?.language}
        </p>
        <p className="sm:col-span-2">
          <span className="font-bold">Frameworks:</span> {collectData?.technicalSkills?.techFameworks}
        </p>
        <p className="sm:col-span-3">
          <span className="font-bold">Dev Tools:</span> {collectData?.technicalSkills?.devTools}
        </p>
      </div>
    </section>

    {/* Projects / Achievements */}
    <section>
      <h2 className="text-xl font-bold border-b border-gray-900 pb-1 mb-3 uppercase tracking-wider">
        Projects & Achievements
      </h2>
      {/* ... (Loop through projects here) ... */}
    </section>
  </div>
  <div className="justify-center flex py-4">
    <button className="h-10 w-45 bg-blue-400 text-black rounded-2xl hover:bg-blue-600 font-bold shadow shadow-black" onClick={handlePrint}>
      Submit
    </button>
  </div>
</div>
  )
}

export default TemplateFour
