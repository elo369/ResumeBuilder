import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

type Achievement = {
  title: string;
  explan: string;
};

type Experience = {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  currentlyWorking: string;
  jobLocation: string;
  description: string[];
};

type Projects = {
  title: string;
  techstack: string;
  projectGithub: string;
  description: string[];
};


const FrontResume = () => {
  const { collectData }: any = useSelector(
    (state: RootState) => state.resumeReducer
  );

  const componentRef = useRef<HTMLDivElement | null>(null);

  // @ts-ignore
  const handlePrint = useReactToPrint({
   contentRef: componentRef,   // <-- ✅ new API
    documentTitle: `${collectData?.personalInfo?.firstName}_Resume`,
    onAfterPrint: () => console.log("Print success!"),
    onPrintError: (error) => console.error("Print error:", error),
  });
  console.log("collection", collectData);
  if (!collectData) {
    return <p>No Resume Data Yet. Start Typing!</p>;
  }

  

  return (
    <div className="flex-col items-center  md:w-[90%] w-full justify-center  bg-gray-100 mt-5 ">
      <div
        ref={componentRef}
        className="w-full  max-w-3xl bg-white text-black p-8 rounded-lg shadow-xl"
      >
        {/* Name + Contact */}
        <header className=" pb-3 mb-1">
          <h1 className="text-3xl font-bold text-gray-900 flex justify-center">
            {collectData?.personalInfo?.firstName}{" "}
            {collectData?.personalInfo?.lastName}
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-700 mt-2 justify-center">
            <p>
              <b>Email:</b> {collectData?.personalInfo?.email}
            </p>
            <p>
              <b>Phone:</b> {collectData?.personalInfo?.phoneNumber}
            </p>
            {/* <p><b>Location:</b> {collectData?.personalInfo?.location}</p> */}
            {/* <p><b>Portfolio:</b> {collectData?.personalInfo?.portfolio}</p> */}
            <p>
              <b>LinkedIn:</b> {collectData?.personalInfo?.linkedin}
            </p>
            <p>
              <b>GitHub:</b> {collectData?.personalInfo?.github}
            </p>
          </div>
        </header>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">
            Education
          </h2>
          <div>
            <div className="font-medium flex justify-between">
              <p>{collectData?.educationData?.education?.college} </p>
              <p>
                {collectData?.educationData?.education?.startDate} -{" "}
                {collectData?.educationData?.education?.endDate}
              </p>
            </div>
            <div className="text-sm text-gray-600 justify-between flex">
              <p>{collectData?.educationData?.education?.degree}</p>
              <p>
                {collectData?.educationData?.education?.locationInstitution}
              </p>
            </div>
            <h2 className="text-md font-semibold ">Relevant Coursework:</h2>
            <ul className="list-disc list-inside text-sm mt-1">
            { collectData?.educationData?.education?.educationDescription != null &&
             <li>
                {collectData?.educationData?.education?.educationDescription}
              </li>
            }
              {collectData?.educationData?.educationScript != null && collectData?.educationData?.educationScript?.map(
                (extraDescrition: string, idx: number) => (
                  <li key={idx}>{extraDescrition}</li>
                )
              )}
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">
            Experience
          </h2>

          {/* Main Experience */}
          <div className="mb-4">
            <div className="font-medium flex justify-between">
              <p> {collectData?.experience?.mainExperience?.company} </p>
              <p>
                {" "}
                {
                  collectData?.experience?.mainExperience?.experienceStartDate
                } -{" "}
                {collectData?.experience?.mainExperience?.experienceEndDate ==
                null
                  ? "Present"
                  : collectData?.experience?.mainExperience
                      ?.experienceEndDate}{" "}
              </p>
            </div>
            <div className="text-sm text-gray-600 flex justify-between">
              <p> {collectData?.experience?.mainExperience?.jobTitle} </p>
              <p> {collectData?.experience?.mainExperience?.jobLocation} </p>
            </div>
            <ul className="list-disc list-inside text-sm mt-1">
              {collectData?.experience?.mainExperience?.description?.map(
                (expDescription: string, id: number) => (
                  <li key={id}>{expDescription}</li>
                )
              )}
            </ul>
          </div>

          {/* Additional Experiences */}
          {collectData?.experience?.dynamic?.length !== null &&
            collectData?.experience?.dynamic?.map(
              (info: Experience, id: number) => (
                <div key={id} className="mb-4">
                  <div className="font-medium flex justify-between">
                    <p> {info.company} </p>
                    <p>
                      {info.startDate} - {info.endDate || "Present"}
                    </p>
                  </div>
                  <div className="text-sm text-gray-600 flex justify-between">
                    <p> {info.jobTitle} </p>
                    <p> {info.jobLocation} </p>
                  </div>
                  <ul className="list-disc list-inside text-sm mt-1">
                    {info.description?.map(
                      (expDescription: string, idx: number) => (
                        <li key={idx}>{expDescription}</li>
                      )
                    )}
                  </ul>
                </div>
              )
            )}
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">Projects</h2>
          <div className="mb-4">
            <p className="font-medium">
              {collectData?.projects?.mainProject?.projectTitle}
            </p>
            <p className="text-sm text-gray-600">
              Tech Stack: {collectData?.projects?.mainProject?.techstack}
            </p>
            <p className="text-sm text-blue-600 underline">
              <a
                href={collectData?.projects?.mainProject?.projectGithub}
                target="_blank"
              >
                Github Link
              </a>
              {/* <a href="https://google.com" target="_blank">google Link</a> */}
            </p>
            <ul className="list-disc list-inside text-sm mt-1">
              {collectData?.projects?.mainProject?.description?.map(
                (desc: string, id: number) => (
                  <li key={id}>{desc}</li>
                )
              )}
            </ul>
          </div>

          {collectData?.projects?.mostProjects?.map(
            (dynamicProjects: Projects, idx: number) => (
              <div key={idx} className="mb-4">
                <p className="font-medium">{dynamicProjects?.title}</p>
                <p className="text-sm text-gray-600">
                  Tech Stack: {dynamicProjects?.techstack}
                </p>
                <p className="text-sm text-blue-600 underline">
                  <a href={dynamicProjects?.projectGithub} target="_blank">
                    Github Link
                  </a>
                </p>
                <ul className="list-disc list-inside text-sm mt-1">
                  {dynamicProjects?.description?.map(
                    (desc: string, id: number) => (
                      <li key={id}>{desc}</li>
                    )
                  )}
                </ul>
              </div>
            )
          )}
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">
            Technical Skills
          </h2>
          <p>
            <b>Languages:</b> {collectData?.technicalSkills?.language}
          </p>
          <p>
            <b>Frameworks:</b> {collectData?.technicalSkills?.techFameworks}
          </p>
          <p>
            <b>Dev Tools:</b> {collectData?.technicalSkills?.devTools}
          </p>
        </section>

        {/* Achievements */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">
            Achievements
          </h2>
          <div>
            <p className="font-medium">
              {collectData?.achievements?.defaultAchieve?.achievementTitle}
            </p>
            <p className="text-sm">
              {
                collectData?.achievements?.defaultAchieve
                  ?.achievementDescription
              }
            </p>
            {collectData?.achievements?.dynamicAchieve?.map(
              (dynamicObj: Achievement, idx: number) => (
                <div key={idx} className="mt-2">
                  <p className="font-medium">{dynamicObj?.title}</p>
                  <p className="text-sm">{dynamicObj?.explan}</p>
                </div>
              )
            )}
          </div>
        </section>
      </div>
      <div className="justify-center flex py-4">
        <button
          className="h-10 w-45 bg-blue-400 text-black rounded-2xl hover:bg-blue-600 font-bold shadow shadow-black "
          onClick={handlePrint}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FrontResume;
