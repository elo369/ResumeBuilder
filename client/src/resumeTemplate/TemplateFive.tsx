// import React from 'react'

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import type { RootState ,AppDispatch} from "../store/store";
import { useSelector,useDispatch } from "react-redux";
import { useTemplate } from "../store/slice/resume/resume.slice";
const TemplateFive = () => {

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
      dispatch(useTemplate("TemplateFive")); // ✅ Redux me set kar dega
    };

  return (
   <div onClick={handleSelect} className="flex-col items-center md:w-[50%] w-full justify-center p-10 bg-gray-100 mt-5">
  <div
    ref={componentRef}
    className="w-full max-w-3xl bg-white text-gray-900 p-8 rounded-lg shadow-xl"
  >
    {/* Name and Contact - Simple */}
    <header className="pb-4 mb-6">
      <h1 className="text-4xl font-extrabold text-gray-900 flex justify-center">
        {collectData?.personalInfo?.firstName}{" "}
        <span className="ml-2 font-normal">{collectData?.personalInfo?.lastName}</span>
      </h1>
      <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600 mt-2 justify-center">
        <p>{collectData?.personalInfo?.phoneNumber}</p>
        <p>{collectData?.personalInfo?.email}</p>
        <p><a href={collectData?.personalInfo?.linkedin} target="_blank" className="text-gray-600 hover:text-red-500">LinkedIn</a></p>
        <p><a href={collectData?.personalInfo?.github} target="_blank" className="text-gray-600 hover:text-red-500">GitHub</a></p>
      </div>
    </header>

    {/* Experience */}
    <section className="mb-6">
      <div className="flex items-center mb-3">
        <div className="w-1 h-6 bg-red-500 mr-3"></div>
        <h2 className="text-xl font-extrabold text-gray-800 uppercase tracking-wide">
          Experience
        </h2>
      </div>

      {/* Main Experience */}
      <div className="mb-4 pl-4 border-l-2 border-gray-200">
        <div className="flex justify-between items-start">
          <p className="text-md font-bold text-gray-900">
            {collectData?.experience?.mainExperience?.jobTitle}
          </p>
          <p className="text-sm font-medium text-gray-600">
            {collectData?.experience?.mainExperience?.experienceStartDate} -{" "}
            {collectData?.experience?.mainExperience?.experienceEndDate == null ? "Present" : collectData?.experience?.mainExperience?.experienceEndDate}
          </p>
        </div>
        <p className="text-sm italic text-gray-700 mb-1">
          {collectData?.experience?.mainExperience?.company} | {collectData?.experience?.mainExperience?.jobLocation}
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
      {/* ... */}
    </section>

    {/* Projects */}
    <section className="mb-6">
      <div className="flex items-center mb-3">
        <div className="w-1 h-6 bg-red-500 mr-3"></div>
        <h2 className="text-xl font-extrabold text-gray-800 uppercase tracking-wide">
          Projects
        </h2>
      </div>

      {/* Main Project */}
      <div className="mb-4 pl-4 border-l-2 border-gray-200">
        <p className="font-bold text-gray-900">
          {collectData?.projects?.mainProject?.projectTitle}
          <a href={collectData?.projects?.mainProject?.projectGithub} target="_blank" className="text-xs text-red-500 ml-2 hover:underline">
            (View Code)
          </a>
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Tech Stack:</span> {collectData?.projects?.mainProject?.techstack}
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
      {/* ... */}
    </section>

    {/* Education */}
    <section className="mb-6">
      <div className="flex items-center mb-3">
        <div className="w-1 h-6 bg-red-500 mr-3"></div>
        <h2 className="text-xl font-extrabold text-gray-800 uppercase tracking-wide">
          Education
        </h2>
      </div>
      <div className="pl-4 border-l-2 border-gray-200">
        <div className="flex justify-between font-bold text-sm">
          <p>{collectData?.educationData?.education?.college}</p>
          <p className="font-medium text-gray-600">
            {collectData?.educationData?.education?.startDate} - {collectData?.educationData?.education?.endDate}
          </p>
        </div>
        <p className="text-sm italic text-gray-700">{collectData?.educationData?.education?.degree}</p>
      </div>
    </section>

    {/* Skills */}
    <section>
      <div className="flex items-center mb-3">
        <div className="w-1 h-6 bg-red-500 mr-3"></div>
        <h2 className="text-xl font-extrabold text-gray-800 uppercase tracking-wide">
          Technical Skills
        </h2>
      </div>
      <div className="text-sm pl-4 border-l-2 border-gray-200 space-y-1">
        <p>
          <span className="font-bold">Languages:</span> {collectData?.technicalSkills?.language}
        </p>
        <p>
          <span className="font-bold">Frameworks:</span> {collectData?.technicalSkills?.techFameworks}
        </p>
        <p>
          <span className="font-bold">Dev Tools:</span> {collectData?.technicalSkills?.devTools}
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

export default TemplateFive
