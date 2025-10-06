import { useRef } from "react";
import { useSelector,useDispatch } from "react-redux";
import type { RootState,AppDispatch } from "../store/store";
import { useReactToPrint } from "react-to-print";
import { useTemplate } from "../store/slice/resume/resume.slice";

// type Projects = {
//   title: string;
//   techstack: string;
//   projectGithub: string;
//   description: string[];
// };

// type Achievement = {
//   title: string;
//   explan: string;
// };

const TemplateThree = () => {
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
      dispatch(useTemplate("TemplateThree")); // ✅ Redux me set kar dega
    };

  return (
    <div onClick={handleSelect} className="flex-col items-center md:w-[50%] w-full justify-center p-10 bg-gray-100 mt-5">
  <div
    ref={componentRef}
    className="w-full max-w-3xl bg-white text-gray-900 p-8 rounded-lg shadow-xl"
  >
    {/* Centered Name and Contact Info */}
    <header className="text-center pb-4 mb-4 border-b border-gray-400">
      <h1 className="text-4xl font-extralight text-black tracking-widest uppercase">
        {collectData?.personalInfo?.firstName} {collectData?.personalInfo?.lastName}
      </h1>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700 mt-3 justify-center">
        <p>{collectData?.personalInfo?.phoneNumber}</p>
        <span className="text-gray-400">|</span>
        <p>{collectData?.personalInfo?.email}</p>
        <span className="text-gray-400">|</span>
        <p>LinkedIn: <a href={collectData?.personalInfo?.linkedin} target="_blank" className="text-indigo-600 hover:underline">Profile</a></p>
        <span className="text-gray-400">|</span>
        <p>GitHub: <a href={collectData?.personalInfo?.github} target="_blank" className="text-indigo-600 hover:underline">Repo</a></p>
      </div>
    </header>

    {/* Professional Summary (Optional) */}
    {/* <section className="mb-6">
      <p className="text-sm text-center italic text-gray-600">
        A brief, impactful statement about your professional value.
      </p>
    </section> */}

    {/* Experience */}
    <section className="mb-6">
      <h2 className="text-xl font-bold border-b-2 border-indigo-600 pb-1 mb-3 text-indigo-600 uppercase">
        Professional Experience
      </h2>

      {/* Main Experience */}
      <div className="mb-4">
        <div className="flex justify-between items-end">
          <p className="text-md font-bold text-gray-900">
            {collectData?.experience?.mainExperience?.jobTitle}
          </p>
          <p className="text-sm italic text-gray-600">
            {collectData?.experience?.mainExperience?.experienceStartDate} -{" "}
            {collectData?.experience?.mainExperience?.experienceEndDate == null ? "Present" : collectData?.experience?.mainExperience?.experienceEndDate}
          </p>
        </div>
        <p className="text-sm font-medium mb-1">
          {collectData?.experience?.mainExperience?.company} | {collectData?.experience?.mainExperience?.jobLocation}
        </p>
        <ul className="list-disc list-inside text-sm mt-1 space-y-0.5">
          {collectData?.experience?.mainExperience?.description?.map((expDescription: string, id: number) => (
            <li key={id}>{expDescription}</li>
          ))}
        </ul>
      </div>

      {/* Additional Experiences */}
      {/* ... (Loop through dynamic experience here) ... */}

    </section>

    {/* Projects */}
    <section className="mb-6">
      <h2 className="text-xl font-bold border-b-2 border-indigo-600 pb-1 mb-3 text-indigo-600 uppercase">
        Select Projects
      </h2>
      {/* Main Project */}
      <div className="mb-4">
        <p className="font-bold">
          {collectData?.projects?.mainProject?.projectTitle}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Tech Stack:</span> {collectData?.projects?.mainProject?.techstack}
        </p>
        <ul className="list-disc list-inside text-sm mt-1 space-y-0.5">
          {collectData?.projects?.mainProject?.description?.map((desc: string, id: number) => (
            <li key={id}>{desc}</li>
          ))}
        </ul>
        <a href={collectData?.projects?.mainProject?.projectGithub} target="_blank" className="text-xs text-indigo-600 hover:underline">
          Project Repository
        </a>
      </div>
      {/* Dynamic Projects */}
      {/* ... (Loop through dynamic projects here) ... */}
    </section>

    {/* Technical Skills - Simple List */}
    <section className="mb-6">
      <h2 className="text-xl font-bold border-b-2 border-indigo-600 pb-1 mb-3 text-indigo-600 uppercase">
        Technical Skills
      </h2>
      <div className="text-sm space-y-1">
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

    {/* Education */}
    <section>
      <h2 className="text-xl font-bold border-b-2 border-indigo-600 pb-1 mb-3 text-indigo-600 uppercase">
        Education
      </h2>
      {/* Education block */}
      <div className="text-sm">
        <div className="flex justify-between font-bold text-gray-900">
          <p>{collectData?.educationData?.education?.college}</p>
          <p className="font-medium text-gray-600">
            {collectData?.educationData?.education?.startDate} - {collectData?.educationData?.education?.endDate}
          </p>
        </div>
        <p className="italic text-gray-700">{collectData?.educationData?.education?.degree}</p>
      </div>
    </section>
  </div>
  <div className="justify-center flex py-4">
    <button className="h-10 w-45 bg-blue-400 text-black rounded-2xl hover:bg-blue-600 font-bold shadow shadow-black" onClick={handlePrint}>
      Submit
    </button>
  </div>
</div>
  );
};

export default TemplateThree;
