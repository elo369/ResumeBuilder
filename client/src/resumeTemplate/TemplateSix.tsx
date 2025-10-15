// import React from 'react'

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import type { RootState,AppDispatch } from "../store/store";
import { useSelector ,useDispatch} from "react-redux";
import { useTemplate } from "../store/slice/resume/resume.slice";
const TemplateSix = () => {

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
      dispatch(useTemplate("TemplateTwo")); // ✅ Redux me set kar dega
    };
  return (
   <div onClick={handleSelect} className="flex-col items-center  md:w-[90%] w-full justify-center    bg-gray-100 mt-5">
  <div
    ref={componentRef}
    className="w-full max-w-3xl bg-white text-black p-8 rounded-lg shadow-xl"
  >
    {/* Name and Contact */}
    <header className="pb-4 mb-6">
      <h1 className="text-4xl font-bold text-gray-900 flex justify-center tracking-tight">
        {collectData?.personalInfo?.firstName} {collectData?.personalInfo?.lastName}
      </h1>
      <p className="text-center text-sm font-medium text-gray-700 mt-1">{collectData?.experience?.mainExperience?.jobTitle || "Professional Title"}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600 mt-2 justify-center border-t border-gray-300 pt-2">
        <p>Email: {collectData?.personalInfo?.email}</p>
        <p>Phone: {collectData?.personalInfo?.phoneNumber}</p>
        <p>LinkedIn: <a href={collectData?.personalInfo?.linkedin} target="_blank" className="text-gray-600 hover:text-black">Link</a></p>
        <p>GitHub: <a href={collectData?.personalInfo?.github} target="_blank" className="text-gray-600 hover:text-black">Link</a></p>
      </div>
    </header>

    {/* Experience */}
    <section className="mb-6">
      <h2 className="text-2xl font-black mb-1 text-gray-800">EXPERIENCE</h2>
      <div className="border-b-4 border-gray-900 pb-3 mb-3"></div>

      {/* Main Experience */}
      <div className="mb-4">
        <div className="flex justify-between items-end">
          <p className="text-lg font-bold text-gray-900">
            {collectData?.experience?.mainExperience?.jobTitle}
          </p>
          <p className="text-sm font-medium text-gray-700">
            {collectData?.experience?.mainExperience?.experienceStartDate} -{" "}
            {collectData?.experience?.mainExperience?.experienceEndDate == null ? "Present" : collectData?.experience?.mainExperience?.experienceEndDate}
          </p>
        </div>
        <p className="text-md italic text-gray-700 mb-1">
          {collectData?.experience?.mainExperience?.company}, {collectData?.experience?.mainExperience?.jobLocation}
        </p>
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

    {/* Projects */}
    <section className="mb-6">
      <h2 className="text-2xl font-black mb-1 text-gray-800">PROJECTS</h2>
      <div className="border-b-4 border-gray-900 pb-3 mb-3"></div>
      
      {/* Main Project */}
      <div className="mb-4">
        <div className="flex justify-between items-end">
          <p className="font-bold text-gray-900">
            {collectData?.projects?.mainProject?.projectTitle}
          </p>
          <a href={collectData?.projects?.mainProject?.projectGithub} target="_blank" className="text-sm text-blue-700 hover:underline">
             GitHub
          </a>
        </div>
        <p className="text-sm italic text-gray-700 mb-1">
          Tech Stack: {collectData?.projects?.mainProject?.techstack}
        </p>
        <ul className="list-disc list-outside text-sm ml-5 space-y-1">
          {collectData?.projects?.mainProject?.description?.map(
            (desc: string, id: number) => (
              <li key={id}>{desc}</li>
            )
          )}
        </ul>
      </div>
      {/* Dynamic Projects (Loop through dynamic projects here) */}
      {/* ... */}
    </section>

    {/* Education */}
    <section className="mb-6">
      <h2 className="text-2xl font-black mb-1 text-gray-800">EDUCATION</h2>
      <div className="border-b-4 border-gray-900 pb-3 mb-3"></div>
      
      <div className="text-sm">
        <div className="flex justify-between font-bold">
          <p>{collectData?.educationData?.education?.college}</p>
          <p className="font-medium text-gray-700">
            {collectData?.educationData?.education?.startDate} - {collectData?.educationData?.education?.endDate}
          </p>
        </div>
        <div className="flex justify-between text-gray-700 italic">
          <p>{collectData?.educationData?.education?.degree}</p>
          <p>{collectData?.educationData?.education?.locationInstitution}</p>
        </div>
      </div>
    </section>

    {/* Technical Skills */}
    <section>
      <h2 className="text-2xl font-black mb-1 text-gray-800">SKILLS</h2>
      <div className="border-b-4 border-gray-900 pb-3 mb-3"></div>
      
      <div className="text-sm space-y-1">
        <p>
          <span className="font-extrabold">LANGUAGES:</span> {collectData?.technicalSkills?.language}
        </p>
        <p>
          <span className="font-extrabold">FRAMEWORKS:</span> {collectData?.technicalSkills?.techFameworks}
        </p>
        <p>
          <span className="font-extrabold">DEV TOOLS:</span> {collectData?.technicalSkills?.devTools}
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

export default TemplateSix
