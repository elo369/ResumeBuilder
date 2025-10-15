import type { AppDispatch } from "../store/store";
import type { RootState } from "../store/store";
import {  useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import {  useTemplate } from "../store/slice/resume/resume.slice";

// type Experience = {
//   jobTitle: string;
//   company: string;
//   startDate: string;
//   endDate: string;
//   currentlyWorking: string;
//   jobLocation: string;
//   description: string[];
// };

const TemplateOne = () => {
  // const [template,useTempla] = useState<string>("")
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
    dispatch(useTemplate("TemplateOne")); // ✅ Redux me set kar dega
  };

  return (
    <div onClick={handleSelect} className="flex-col items-center  md:w-[90%] w-full justify-center    bg-gray-100 mt-5 ">
      <div
        ref={componentRef}
        className="w-full max-w-3xl bg-white text-gray-800 p-8 rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Left Column: Contact & Skills (Sidebar) */}
        <div className="md:col-span-1 bg-gray-50 p-4 rounded-lg">
          <header className="pb-4 mb-4 border-b border-gray-200">
            <h1 className="text-2xl font-extrabold text-blue-700">
              {collectData?.personalInfo?.firstName}{" "}
              {collectData?.personalInfo?.lastName}
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              {collectData?.experience?.mainExperience?.jobTitle ||
                "Professional Title"}
            </p>
          </header>

          {/* Contact Info */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-blue-700 mb-2 border-b-2 border-blue-100">
              Contact
            </h2>
            <div className="text-xs space-y-1">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                {collectData?.personalInfo?.email}
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {collectData?.personalInfo?.phoneNumber}
              </p>
              <p className="truncate">
                <span className="font-semibold">LinkedIn:</span>{" "}
                <a
                  href={collectData?.personalInfo?.linkedin}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  {collectData?.personalInfo?.linkedin}
                </a>
              </p>
              <p className="truncate">
                <span className="font-semibold">GitHub:</span>{" "}
                <a
                  href={collectData?.personalInfo?.github}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  {collectData?.personalInfo?.github}
                </a>
              </p>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-blue-700 mb-2 border-b-2 border-blue-100">
              Technical Skills
            </h2>
            <div className="text-sm space-y-2">
              <p>
                <span className="font-bold block">Languages:</span>{" "}
                {collectData?.technicalSkills?.language}
              </p>
              <p>
                <span className="font-bold block">Frameworks:</span>{" "}
                {collectData?.technicalSkills?.techFameworks}
              </p>
              <p>
                <span className="font-bold block">Dev Tools:</span>{" "}
                {collectData?.technicalSkills?.devTools}
              </p>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-lg font-bold text-blue-700 mb-2 border-b-2 border-blue-100">
              Education
            </h2>
            <div className="text-sm">
              <p className="font-semibold">
                {collectData?.educationData?.education?.degree}
              </p>
              <p className="text-gray-700">
                {collectData?.educationData?.education?.college}
              </p>
              <p className="text-xs text-gray-500">
                {collectData?.educationData?.education?.startDate} -{" "}
                {collectData?.educationData?.education?.endDate} |{" "}
                {collectData?.educationData?.education?.locationInstitution}
              </p>
              <ul className="list-disc list-inside text-xs mt-1 space-y-0.5">
                <li>
                  {collectData?.educationData?.education?.educationDescription}
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Right Column: Experience & Projects (Main Content) */}
        <div className="md:col-span-2">
          {/* Professional Summary (Optional but recommended for two-column) */}
          {/* You would need to add a summary data field for this */}
          {/* <section className="mb-6">
        <h2 className="text-xl font-bold border-b pb-1 mb-3 text-gray-900">
          Summary
        </h2>
        <p className="text-sm">
          Highly motivated and results-driven software engineer with 5+ years of experience in full-stack development...
        </p>
      </section> */}

          {/* Experience */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-b pb-1 mb-3 text-gray-900">
              Professional Experience
            </h2>

            {/* Main Experience */}
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <h3 className="text-md font-bold text-blue-700">
                  {collectData?.experience?.mainExperience?.jobTitle}
                </h3>
                <p className="text-sm text-gray-600 font-medium whitespace-nowrap">
                  {collectData?.experience?.mainExperience?.experienceStartDate}{" "}
                  -{" "}
                  {collectData?.experience?.mainExperience?.experienceEndDate ==
                  null
                    ? "Present"
                    : collectData?.experience?.mainExperience
                        ?.experienceEndDate}
                </p>
              </div>
              <p className="text-sm italic text-gray-600 mb-1">
                {collectData?.experience?.mainExperience?.company} |{" "}
                {collectData?.experience?.mainExperience?.jobLocation}
              </p>
              <ul className="list-disc list-outside text-sm ml-5 space-y-1">
                {collectData?.experience?.mainExperience?.description?.map(
                  (expDescription: string, id: number) => (
                    <li key={id}>{expDescription}</li>
                  )
                )}
              </ul>
            </div>

            {/* Additional Experiences (Same structure) */}
            {/* ... (Loop through dynamic experience here) ... */}
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-xl font-bold border-b pb-1 mb-3 text-gray-900">
              Projects
            </h2>
            <div className="mb-4">
              <p className="font-semibold text-blue-700">
                {collectData?.projects?.mainProject?.projectTitle}
                <a
                  href={collectData?.projects?.mainProject?.projectGithub}
                  target="_blank"
                  className="text-xs text-blue-500 ml-2 hover:underline"
                >
                  (GitHub)
                </a>
              </p>
              <p className="text-xs text-gray-600 mb-1">
                <span className="font-semibold">Tech Stack:</span>{" "}
                {collectData?.projects?.mainProject?.techstack}
              </p>
              <ul className="list-disc list-outside text-sm ml-5">
                {collectData?.projects?.mainProject?.description?.map(
                  (desc: string, id: number) => (
                    <li key={id}>{desc}</li>
                  )
                )}
              </ul>
            </div>

            {/* Dynamic Projects (Same structure) */}
            {/* ... (Loop through dynamic projects here) ... */}
          </section>
        </div>
      </div>
      <div className="justify-center flex py-4">
        <button
          className="h-10 w-45 bg-blue-400 text-black rounded-2xl hover:bg-blue-600 font-bold shadow shadow-black"
          onClick={handlePrint}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default TemplateOne;
