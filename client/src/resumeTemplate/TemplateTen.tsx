// import React from 'react'

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import type { RootState } from "../store/store";
import { useSelector } from "react-redux";

const TemplateTen = () => {
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
  return (
   <div className="flex-col items-center md:w-[50%] w-full justify-center p-10 bg-gray-100 mt-5">
  <div
    ref={componentRef}
    className="w-full max-w-3xl bg-white text-gray-800 p-8 rounded-lg shadow-xl"
  >
    {/* Name and Contact - Bold Centered */}
    <header className="pb-4 mb-6 border-b-4 border-rose-700">
      <h1 className="text-5xl font-extrabold text-rose-800 flex justify-center tracking-tight leading-none">
        {collectData?.personalInfo?.firstName} {collectData?.personalInfo?.lastName}
      </h1>
      <p className="text-center text-lg font-serif text-gray-700 mt-2">
        {collectData?.experience?.mainExperience?.jobTitle || "Creative Communications Specialist"}
      </p>
      <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600 mt-4 justify-center">
        <p>
          <span className="text-rose-700 mr-1">&#x260E;</span> {collectData?.personalInfo?.phoneNumber}
        </p>
        <p>
          <span className="text-rose-700 mr-1">&#x1F4E7;</span> {collectData?.personalInfo?.email}
        </p>
        <p>
          <a href={collectData?.personalInfo?.linkedin} target="_blank" className="text-rose-700 hover:underline">
            LinkedIn Profile
          </a>
        </p>
      </div>
    </header>

    {/* Professional Summary (Emphasized for this style) */}
    {/* Add a summary data field */}
    {/* <section className="mb-6">
      <p className="text-md text-center italic text-gray-700 leading-relaxed bg-rose-50 p-3 rounded-lg">
        A passionate and results-driven professional adept at developing engaging content and fostering strong client relationships. Proven ability to exceed targets and lead impactful initiatives.
      </p>
    </section> */}

    {/* Experience */}
    <section className="mb-6">
      <h2 className="text-2xl font-black text-rose-800 mb-3 pb-1 border-b-2 border-rose-400 uppercase tracking-wide">
        Experience
      </h2>

      {/* Main Experience */}
      <div className="mb-4">
        <div className="flex justify-between items-start">
          <p className="text-lg font-bold text-gray-900">
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

    {/* Projects (Can be "Portfolio" or "Key Initiatives") */}
    <section className="mb-6">
      <h2 className="text-2xl font-black text-rose-800 mb-3 pb-1 border-b-2 border-rose-400 uppercase tracking-wide">
        Projects & Portfolio
      </h2>
      
      {/* Main Project */}
      <div className="mb-4">
        <p className="font-bold text-gray-900">
          {collectData?.projects?.mainProject?.projectTitle}
          {collectData?.projects?.mainProject?.projectGithub && (
            <a href={collectData?.projects?.mainProject?.projectGithub} target="_blank" className="text-sm text-rose-600 ml-2 hover:underline">
              (View Details)
            </a>
          )}
        </p>
        <p className="text-sm text-gray-700 mb-1">
          Key Tools: {collectData?.projects?.mainProject?.techstack}
        </p>
        <ul className="list-disc list-inside text-sm mt-1 space-y-0.5 text-gray-700">
          {collectData?.projects?.mainProject?.description?.map(
            (desc: string, id: number) => (
              <li key={id}>{desc}</li>
            )
          )}
        </ul>
      </div>
      {/* Dynamic Projects (Loop through dynamic projects here) */}
    </section>

    {/* Education */}
    <section className="mb-6">
      <h2 className="text-2xl font-black text-rose-800 mb-3 pb-1 border-b-2 border-rose-400 uppercase tracking-wide">
        Education
      </h2>
      <div className="text-sm text-gray-700">
        <div className="flex justify-between font-bold text-gray-900">
          <p>{collectData?.educationData?.education?.college}</p>
          <p className="font-medium text-gray-700">
            {collectData?.educationData?.education?.startDate} - {collectData?.educationData?.education?.endDate}
          </p>
        </div>
        <p className="italic text-gray-600">{collectData?.educationData?.education?.degree}, {collectData?.educationData?.education?.locationInstitution}</p>
      </div>
    </section>

    {/* Skills */}
    <section>
      <h2 className="text-2xl font-black text-rose-800 mb-3 pb-1 border-b-2 border-rose-400 uppercase tracking-wide">
        Key Skills
      </h2>
      <div className="text-sm space-y-1 text-gray-700">
        <p>
          <span className="font-bold text-gray-900">Communication:</span> Public Speaking, Technical Writing, Content Strategy, Social Media Management
        </p>
        <p>
          <span className="font-bold text-gray-900">Software:</span> Adobe Creative Suite, HubSpot, CRM Systems, Microsoft Office
        </p>
      </div>
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

export default TemplateTen
