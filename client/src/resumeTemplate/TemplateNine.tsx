// import React from 'react'

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import type { RootState } from "../store/store";
import { useSelector } from "react-redux";

const TemplateNine = () => {

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
    className="w-full max-w-3xl bg-white text-gray-900 p-8 rounded-lg shadow-xl"
  >
    {/* Name and Contact - Left Aligned */}
    <header className="pb-4 mb-6 flex border-b border-gray-300">
      <div className="w-2 bg-green-600 mr-4 rounded-sm"></div> {/* Vertical color stripe */}
      <div>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          {collectData?.personalInfo?.firstName}{" "}
          <span className="font-normal text-green-700">{collectData?.personalInfo?.lastName}</span>
        </h1>
        <p className="text-lg font-semibold text-gray-700 mt-1">
          {collectData?.experience?.mainExperience?.jobTitle || "Innovator & Problem Solver"}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-600 mt-2">
          <p>
            {collectData?.personalInfo?.phoneNumber}
          </p>
          <p>
            {collectData?.personalInfo?.email}
          </p>
          <p>
            <a href={collectData?.personalInfo?.linkedin} target="_blank" className="text-green-600 hover:underline">LinkedIn</a>
          </p>
          <p>
            <a href={collectData?.personalInfo?.github} target="_blank" className="text-green-600 hover:underline">GitHub</a>
          </p>
        </div>
      </div>
    </header>

    {/* Professional Summary (If desired, place here) */}
    {/* <section className="mb-6">
      <p className="text-sm italic text-gray-700">
        Results-oriented software engineer with a passion for developing scalable and user-centric applications...
      </p>
    </section> */}

    {/* Experience */}
    <section className="mb-6">
      <h2 className="text-xl font-bold text-green-700 mb-3 uppercase border-b border-green-200 pb-1">
        Experience
      </h2>

      {/* Main Experience */}
      <div className="mb-4">
        <div className="flex justify-between items-end">
          <p className="text-md font-bold text-gray-900">
            {collectData?.experience?.mainExperience?.jobTitle} at {collectData?.experience?.mainExperience?.company}
          </p>
          <p className="text-sm italic text-gray-600">
            {collectData?.experience?.mainExperience?.experienceStartDate} -{" "}
            {collectData?.experience?.mainExperience?.experienceEndDate == null ? "Present" : collectData?.experience?.mainExperience?.experienceEndDate}
          </p>
        </div>
        <p className="text-sm text-gray-700 mb-1">
          {collectData?.experience?.mainExperience?.jobLocation}
        </p>
        <ul className="list-disc list-inside text-sm mt-1 space-y-0.5">
          {collectData?.experience?.mainExperience?.description?.map(
            (expDescription: string, id: number) => (
              <li key={id}>{expDescription}</li>
            )
          )}
        </ul>
      </div>

      {/* Additional Experiences (Loop through dynamic experience here) */}
    </section>

    {/* Projects */}
    <section className="mb-6">
      <h2 className="text-xl font-bold text-green-700 mb-3 uppercase border-b border-green-200 pb-1">
        Projects
      </h2>
      
      {/* Main Project */}
      <div className="mb-4">
        <p className="font-semibold text-gray-900">
          {collectData?.projects?.mainProject?.projectTitle}
          <a href={collectData?.projects?.mainProject?.projectGithub} target="_blank" className="text-xs text-green-600 ml-2 hover:underline">
            (GitHub)
          </a>
        </p>
        <p className="text-sm text-gray-700 mb-1">
          Tech Stack: {collectData?.projects?.mainProject?.techstack}
        </p>
        <ul className="list-disc list-inside text-sm mt-1 space-y-0.5">
          {collectData?.projects?.mainProject?.description?.map(
            (desc: string, id: number) => (
              <li key={id}>{desc}</li>
            )
          )}
        </ul>
      </div>
      {/* Dynamic Projects (Loop through dynamic projects here) */}
    </section>

    {/* Technical Skills */}
    <section className="mb-6">
      <h2 className="text-xl font-bold text-green-700 mb-3 uppercase border-b border-green-200 pb-1">
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

    {/* Education */}
    <section>
      <h2 className="text-xl font-bold text-green-700 mb-3 uppercase border-b border-green-200 pb-1">
        Education
      </h2>
      <div className="text-sm text-gray-700">
        <div className="flex justify-between font-bold text-gray-900">
          <p>{collectData?.educationData?.education?.college}</p>
          <p>
            {collectData?.educationData?.education?.startDate} - {collectData?.educationData?.education?.endDate}
          </p>
        </div>
        <p className="italic text-gray-600">{collectData?.educationData?.education?.degree}, {collectData?.educationData?.education?.locationInstitution}</p>
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

export default TemplateNine
