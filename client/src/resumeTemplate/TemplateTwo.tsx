import { useRef } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useReactToPrint } from "react-to-print";


type Projects = {
  title: string;
  techstack: string;
  projectGithub: string;
  description: string[];
};

const TemplateTwo = () => {

    const { collectData }: any = useSelector(
    (state: RootState) => state.resumeReducer
  );

  const componentRef = useRef<HTMLDivElement | null>(null);

  // @ts-ignore
  const handlePrint = useReactToPrint({
   contentRef: componentRef,   // <-- ✅ new API
    documentTitle: `${collectData?.personalInfo?.firstName}_Resume`,
    onAfterPrint: () => console.log("Print success!"),
    onPrintError: (error:any) => console.error("Print error:", error),
  });
  console.log("collection", collectData);
  if (!collectData) {
    return <p>No Resume Data Yet. Start Typing!</p>;
  }

  
  return (
    <div
  ref={componentRef}
  className="w-full max-w-3xl bg-gradient-to-br from-white via-gray-50 to-gray-100 p-10 rounded-lg shadow-xl"
>
  {/* Header */}
  <header className="text-center mb-6">
    <h1 className="text-4xl font-extrabold text-blue-600">
      {collectData?.personalInfo?.firstName} {collectData?.personalInfo?.lastName}
    </h1>
    <p className="mt-2 text-sm text-gray-700 italic">
      {collectData?.personalInfo?.email} | {collectData?.personalInfo?.phoneNumber} | {collectData?.personalInfo?.portfolio}
    </p>
  </header>

  {/* Projects */}
  <section className="mb-6">
    <h2 className="text-2xl font-bold text-gray-800 border-b-4 border-blue-500 pb-1 mb-3">
      Creative Projects
    </h2>
    {collectData?.projects?.mostProjects?.map((proj:Projects, idx:number) => (
      <div key={idx} className="mb-4">
        <h3 className="font-semibold text-blue-600">{proj.title}</h3>
        <p className="text-sm text-gray-600">{proj.techstack}</p>
        <a href={proj.projectGithub} className="text-sm text-blue-500 underline">View Project</a>
        <ul className="list-disc list-inside text-sm mt-1">
          {proj.description?.map((desc, id) => (
            <li key={id}>{desc}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>

  {/* Skills */}
  <section>
    <h2 className="text-2xl font-bold text-gray-800 border-b-4 border-blue-500 pb-1 mb-3">
      Design Skills
    </h2>
    <p className="text-sm">Tools: {collectData?.technicalSkills?.devTools}</p>
  </section>
</div>

  )
}

export default TemplateTwo
