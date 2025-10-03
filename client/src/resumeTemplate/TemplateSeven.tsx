// import React from 'react'

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import type { RootState } from "../store/store";
import { useSelector } from "react-redux";

const TemplateSeven = () => {
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
    {/* Name and Contact */}
    <header className="pb-4 mb-6 border-b-2 border-blue-700">
      <h1 className="text-4xl font-extrabold text-blue-800 flex justify-center tracking-wide">
        {collectData?.personalInfo?.firstName}{" "}
        <span className="font-light">{collectData?.personalInfo?.lastName}</span>
      </h1>
      <p className="text-center text-md font-semibold text-gray-700 mt-2">
        {collectData?.experience?.mainExperience?.jobTitle || "Professional Title"}
      </p>
      <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600 mt-3 justify-center">
        <p>
          <span className="text-blue-600 mr-1">&#9990;</span> {collectData?.personalInfo?.phoneNumber}
        </p>
        <p>
          <span className="text-blue-600 mr-1">&#9993;</span> {collectData?.personalInfo?.email}
        </p>
        <p>
          <a href={collectData?.personalInfo?.linkedin} target="_blank" className="text-blue-600 hover:underline">
            <span className="mr-1">&#x1F517;</span> LinkedIn
          </a>
        </p>
        <p>
          <a href={collectData?.personalInfo?.github} target="_blank" className="text-blue-600 hover:underline">
            <span className="mr-1">&#x1F4BB;</span> GitHub
          </a>
        </p>
      </div>
    </header>

    {/* Experience */}
    <section className="mb-6">
      <h2 className="text-xl font-bold text-blue-700 mb-3 uppercase border-b-2 border-blue-200 pb-1">
        Experience
      </h2>

      {/* Main Experience */}
      <div className="mb-4">
        <div className="flex justify-between items-start">
          <p className="text-lg font-semibold text-gray-900">
            {collectData?.experience?.mainExperience?.jobTitle} at {collectData?.experience?.mainExperience?.company}
          </p>
          <p className="text-sm font-medium text-gray-600">
            {collectData?.experience?.mainExperience?.experienceStartDate} -{" "}
            {collectData?.experience?.mainExperience?.experienceEndDate == null ? "Present" : collectData?.experience?.mainExperience?.experienceEndDate}
          </p>
        </div>
        <p className="text-sm italic text-gray-600 mb-1">
          {collectData?.experience?.mainExperience?.jobLocation}
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
      {/* {collectData?.experience?.dynamic?.map(...) } */}
    </section>

    {/* Projects */}
    <section className="mb-6">
      <h2 className="text-xl font-bold text-blue-700 mb-3 uppercase border-b-2 border-blue-200 pb-1">
        Projects
      </h2>
      
      {/* Main Project */}
      <div className="mb-4">
        <div className="flex justify-between items-start">
          <p className="font-semibold text-gray-900">
            {collectData?.projects?.mainProject?.projectTitle}
          </p>
          <a href={collectData?.projects?.mainProject?.projectGithub} target="_blank" className="text-sm text-blue-600 hover:underline">
            View Project
          </a>
        </div>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Tech Stack:</span> {collectData?.projects?.mainProject?.techstack}
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
      {/* {collectData?.projects?.mostProjects?.map(...) } */}
    </section>

    {/* Education */}
    <section className="mb-6">
      <h2 className="text-xl font-bold text-blue-700 mb-3 uppercase border-b-2 border-blue-200 pb-1">
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
        <p className="mt-1">Relevant Coursework: {collectData?.educationData?.education?.educationDescription}</p>
      </div>
    </section>

    {/* Technical Skills */}
    <section>
      <h2 className="text-xl font-bold text-blue-700 mb-3 uppercase border-b-2 border-blue-200 pb-1">
        Technical Skills
      </h2>
      <div className="text-sm space-y-1 text-gray-700">
        <p>
          <span className="font-bold text-gray-900">Languages:</span> {collectData?.technicalSkills?.language}
        </p>
        <p>
          <span className="font-bold text-gray-900">Frameworks:</span> {collectData?.technicalSkills?.techFameworks}
        </p>
        <p>
          <span className="font-bold text-gray-900">Dev Tools:</span> {collectData?.technicalSkills?.devTools}
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

export default TemplateSeven
