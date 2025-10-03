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

type Achievement = {
  title: string;
  explan: string;
};

const TemplateThree = () => {

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
  className="w-full max-w-3xl bg-white border border-gray-300 p-8 rounded-lg shadow-md"
>
  {/* Header */}
  <header className="border-b-2 border-gray-400 pb-2 mb-4 text-center">
    <h1 className="text-3xl font-bold text-gray-900">
      {collectData?.personalInfo?.firstName} {collectData?.personalInfo?.lastName}
    </h1>
    <p className="text-sm text-gray-600">
      {collectData?.personalInfo?.email} | {collectData?.personalInfo?.phoneNumber} | {collectData?.personalInfo?.linkedin}
    </p>
  </header>

  {/* Education */}
  <section className="mb-5">
    <h2 className="text-xl font-bold text-gray-800 border-b pb-1 mb-3">
      Education
    </h2>
    <p className="font-medium">{collectData?.educationData?.education?.degree}</p>
    <p className="text-sm italic">{collectData?.educationData?.education?.college}</p>
    <p className="text-sm text-gray-600">{collectData?.educationData?.education?.startDate} – {collectData?.educationData?.education?.endDate}</p>
  </section>

  {/* Research Projects */}
  <section className="mb-5">
    <h2 className="text-xl font-bold text-gray-800 border-b pb-1 mb-3">
      Research Projects
    </h2>
    {collectData?.projects?.mostProjects?.map((proj:Projects, idx:number) => (
      <div key={idx} className="mb-2">
        <p className="font-semibold">{proj.title}</p>
        <p className="text-sm text-gray-600">Tech/Methods: {proj.techstack}</p>
        <ul className="list-disc list-inside text-sm">
          {proj.description?.map((desc, id) => (
            <li key={id}>{desc}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>

  {/* Publications */}
  <section>
    <h2 className="text-xl font-bold text-gray-800 border-b pb-1 mb-3">
      Publications & Achievements
    </h2>
    {collectData?.achievements?.dynamicAchieve?.map((a:Achievement, idx:number) => (
      <p key={idx} className="text-sm mb-1">
        • {a.title} — {a.explan}
      </p>
    ))}
  </section>
</div>

  )
}

export default TemplateThree
