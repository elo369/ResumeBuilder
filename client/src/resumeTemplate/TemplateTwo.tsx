import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useSelector ,useDispatch} from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { useTemplate } from "../store/slice/resume/resume.slice";

// type Projects = {
//   title: string;
//   techstack: string;
//   projectGithub: string;
//   description: string[];
// };

const TemplateTwo = () => {
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
    className="w-full max-w-3xl bg-white text-black rounded-lg shadow-xl overflow-hidden"
  >
    {/* Header Section with Color Band */}
    <header className="bg-gray-800 text-white p-6">
      <h1 className="text-4xl font-light tracking-wider uppercase">
        {collectData?.personalInfo?.firstName} {collectData?.personalInfo?.lastName}
      </h1>
      <p className="text-lg font-semibold text-green-300 mt-1">
        {/* {collectData?.experience?.mainExperience?.jobTitle || "Professional Title"} */}
      </p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs mt-3">
        <p>Email: {collectData?.personalInfo?.email}</p>
        <p>Phone: {collectData?.personalInfo?.phoneNumber}</p>
        <p>LinkedIn: <a href={collectData?.personalInfo?.linkedin} target="_blank" className="text-green-300 hover:underline">Link</a></p>
        <p>GitHub: <a href={collectData?.personalInfo?.github} target="_blank" className="text-green-300 hover:underline">Link</a></p>
      </div>
    </header>

    <div className="p-6">
      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-4 border-green-500 pb-1 mb-4 uppercase tracking-wider text-gray-800">
          Experience
        </h2>

        {/* Main Experience */}
        <div className="mb-5">
          <div className="flex justify-between items-start">
            <h3 className="text-md font-extrabold text-gray-900">
              {collectData?.experience?.mainExperience?.jobTitle} - {collectData?.experience?.mainExperience?.company}
            </h3>
            <p className="text-sm font-medium text-gray-600">
              {collectData?.experience?.mainExperience?.experienceStartDate} -{" "}
              {collectData?.experience?.mainExperience?.experienceEndDate == null ? "Present" : collectData?.experience?.mainExperience?.experienceEndDate}
            </p>
          </div>
          <p className="text-xs italic text-gray-500 mb-2">
            {collectData?.experience?.mainExperience?.jobLocation}
          </p>
          <ul className="list-disc list-inside text-sm space-y-1">
            {collectData?.experience?.mainExperience?.description?.map((expDescription: string, id: number) => (
              <li key={id}>{expDescription}</li>
            ))}
          </ul>
        </div>

        {/* Additional Experiences */}
        {/* ... (Loop through dynamic experience here) ... */}
      </section>

      {/* Technical Skills - Grouped horizontally */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-4 border-green-500 pb-1 mb-4 uppercase tracking-wider text-gray-800">
          Technical Skills
        </h2>
        <div className="text-sm space-y-2">
          <p>
            <span className="font-bold text-gray-700 w-24 inline-block">Languages:</span> {collectData?.technicalSkills?.language}
          </p>
          <p>
            <span className="font-bold text-gray-700 w-24 inline-block">Frameworks:</span> {collectData?.technicalSkills?.techFameworks}
          </p>
          <p>
            <span className="font-bold text-gray-700 w-24 inline-block">Dev Tools:</span> {collectData?.technicalSkills?.devTools}
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-4 border-green-500 pb-1 mb-4 uppercase tracking-wider text-gray-800">
          Education
        </h2>
        <div className="text-sm">
          <div className="flex justify-between font-extrabold text-gray-900">
            <p>{collectData?.educationData?.education?.college}</p>
            <p className="font-medium text-gray-600">
              {collectData?.educationData?.education?.startDate} - {collectData?.educationData?.education?.endDate}
            </p>
          </div>
          <div className="flex justify-between text-gray-700">
            <p className="italic">{collectData?.educationData?.education?.degree}</p>
            <p>{collectData?.educationData?.education?.locationInstitution}</p>
          </div>
          <ul className="list-disc list-inside text-sm mt-1">
             <li>{collectData?.educationData?.education?.educationDescription}</li>
             {/* ... (Loop for extra descriptions) ... */}
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-xl font-bold border-b-4 border-green-500 pb-1 mb-4 uppercase tracking-wider text-gray-800">
          Projects
        </h2>
        {/* Main Project (Structure is similar to Experience for consistency) */}
        {/* ... (Loop through projects here) ... */}
      </section>

      {/* Achievements (or Awards/Certifications) */}
      <section className="mt-6">
        <h2 className="text-xl font-bold border-b-4 border-green-500 pb-1 mb-4 uppercase tracking-wider text-gray-800">
          Achievements
        </h2>
        {/* ... (Loop through achievements here) ... */}
      </section>
    </div>
  </div>
  <div className="justify-center flex py-4">
    <button className="h-10 w-45 bg-blue-400 text-black rounded-2xl hover:bg-blue-600 font-bold shadow shadow-black" onClick={handlePrint}>
      Submit
    </button>
  </div>
</div>
  );
};

export default TemplateTwo;
