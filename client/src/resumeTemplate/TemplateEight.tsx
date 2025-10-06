// import React from 'react'

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import type { RootState,AppDispatch } from "../store/store";
import { useSelector,useDispatch } from "react-redux";
import { useTemplate } from "../store/slice/resume/resume.slice";
const TemplateEight = () => {
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
      dispatch(useTemplate("TemplateEight")); // ✅ Redux me set kar dega
    };
  return (
   <div onClick={handleSelect} className="flex-col items-center md:w-[50%] w-full justify-center p-10 bg-gray-100 mt-5">
  <div
    ref={componentRef}
    className="w-full max-w-3xl bg-white text-gray-800 p-8 rounded-lg shadow-xl"
  >
    {/* Name and Contact */}
    <header className="pb-4 mb-6 border-b border-gray-400">
      <h1 className="text-4xl font-light text-gray-900 flex justify-center uppercase tracking-widest">
        {collectData?.personalInfo?.firstName}{" "}
        <span className="font-semibold text-amber-600">{collectData?.personalInfo?.lastName}</span>
      </h1>
      <p className="text-center text-lg font-serif italic text-gray-600 mt-2">
        {collectData?.experience?.mainExperience?.jobTitle || "Executive Professional"}
      </p>
      <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600 mt-3 justify-center">
        <p className="flex items-center">
          <span className="text-amber-600 mr-2">&#9993;</span> {collectData?.personalInfo?.email}
        </p>
        <p className="flex items-center">
          <span className="text-amber-600 mr-2">&#9990;</span> {collectData?.personalInfo?.phoneNumber}
        </p>
        <p className="flex items-center">
          <a href={collectData?.personalInfo?.linkedin} target="_blank" className="text-amber-600 hover:underline">
            <span className="mr-2">&#x1F517;</span> LinkedIn
          </a>
        </p>
      </div>
    </header>

    {/* Professional Summary (Highly recommended for this style) */}
    {/* Add a summary data field */}
    {/* <section className="mb-6 border-b border-gray-200 pb-4">
      <p className="text-md text-center text-gray-700 leading-relaxed">
        Seasoned executive with a proven track record of driving significant revenue growth and market share expansion in competitive global markets. Expert in strategic planning, team leadership, and complex project management.
      </p>
    </section> */}

    {/* Experience */}
    <section className="mb-6">
      <h2 className="text-2xl font-bold text-amber-700 mb-3 border-b-2 border-amber-200 pb-1 uppercase tracking-wider">
        Professional Experience
      </h2>

      {/* Main Experience */}
      <div className="mb-4">
        <div className="flex justify-between items-start">
          <p className="text-lg font-semibold text-gray-900">
            {collectData?.experience?.mainExperience?.jobTitle}
          </p>
          <p className="text-sm font-medium text-gray-600">
            {collectData?.experience?.mainExperience?.experienceStartDate} -{" "}
            {collectData?.experience?.mainExperience?.experienceEndDate == null ? "Present" : collectData?.experience?.mainExperience?.experienceEndDate}
          </p>
        </div>
        <p className="text-md italic text-gray-700 mb-1">
          {collectData?.experience?.mainExperience?.company}, {collectData?.experience?.mainExperience?.jobLocation}
        </p>
        <ul className="list-disc list-inside text-sm mt-1 space-y-0.5 text-gray-700">
          {collectData?.experience?.mainExperience?.description?.map(
            (expDescription: string, id: number) => (
              <li key={id}>{expDescription}</li>
            )
          )}
        </ul>
      </div>
      {/* Additional Experiences (Loop through dynamic experience here) */}
    </section>

    {/* Education */}
    <section className="mb-6">
      <h2 className="text-2xl font-bold text-amber-700 mb-3 border-b-2 border-amber-200 pb-1 uppercase tracking-wider">
        Education
      </h2>
      <div className="text-sm text-gray-700">
        <div className="flex justify-between font-bold text-gray-900">
          <p>{collectData?.educationData?.education?.college}</p>
          <p>
            {collectData?.educationData?.education?.startDate} - {collectData?.educationData?.education?.endDate}
          </p>
        </div>
        <div className="flex justify-between italic text-gray-600">
          <p>{collectData?.educationData?.education?.degree}</p>
          <p>{collectData?.educationData?.education?.locationInstitution}</p>
        </div>
        <p className="mt-1">{collectData?.educationData?.education?.educationDescription}</p>
      </div>
    </section>

    {/* Skills & Expertise (Renamed for more executive feel) */}
    <section>
      <h2 className="text-2xl font-bold text-amber-700 mb-3 border-b-2 border-amber-200 pb-1 uppercase tracking-wider">
        Skills & Expertise
      </h2>
      <div className="text-sm space-y-1 text-gray-700">
        <p>
          <span className="font-bold text-gray-900">Core Skills:</span> Strategic Planning, Global Operations, Team Leadership, Budget Management, Market Analysis
        </p>
        <p>
          <span className="font-bold text-gray-900">Technical Competencies:</span> CRM Systems, Project Management Software, Data Analytics Tools
        </p>
      </div>
    </section>

    {/* Achievements (Can be renamed "Awards & Recognition" for more emphasis) */}
    <section className="mt-6">
      <h2 className="text-2xl font-bold text-amber-700 mb-3 border-b-2 border-amber-200 pb-1 uppercase tracking-wider">
        Achievements
      </h2>
      {/* ... (Loop through achievements here) ... */}
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

export default TemplateEight
