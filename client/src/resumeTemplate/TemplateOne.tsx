import type { RootState } from "../store/store";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";


type Experience = {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  currentlyWorking: string;
  jobLocation: string;
  description: string[];
};

const TemplateOne = () => {
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
  className="w-full max-w-3xl bg-white text-black p-8 rounded-md shadow-md border border-gray-300"
>
  {/* Header */}
  <header className="border-b-2 border-gray-400 pb-3 mb-4">
    <h1 className="text-2xl font-bold text-gray-900 text-center uppercase tracking-wide">
      {collectData?.personalInfo?.firstName} {collectData?.personalInfo?.lastName}
    </h1>
    <p className="text-center text-sm text-gray-700">
      {collectData?.personalInfo?.email} | {collectData?.personalInfo?.phoneNumber} | {collectData?.personalInfo?.linkedin}
    </p>
  </header>

  {/* Education */}
  <section className="mb-5">
    <h2 className="text-lg font-bold border-b pb-1 mb-2 uppercase">Education</h2>
    <div className="flex justify-between text-sm">
      <p>{collectData?.educationData?.education?.college}</p>
      <p>
        {collectData?.educationData?.education?.startDate} - {collectData?.educationData?.education?.endDate}
      </p>
    </div>
    <p className="text-sm italic">{collectData?.educationData?.education?.degree}</p>
  </section>

  {/* Experience */}
  <section className="mb-5">
    <h2 className="text-lg font-bold border-b pb-1 mb-2 uppercase">Work Experience</h2>
    {collectData?.experience?.dynamic?.map((job:Experience, idx:number) => (
      <div key={idx} className="mb-3">
        <div className="flex justify-between font-medium">
          <p>{job.company} – {job.jobTitle}</p>
          <p>{job.startDate} - {job.endDate || "Present"}</p>
        </div>
        <ul className="list-disc list-inside text-sm">
          {job.description?.map((desc, id) => (
            <li key={id}>{desc}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>

  {/* Skills */}
  <section className="mb-5">
    <h2 className="text-lg font-bold border-b pb-1 mb-2 uppercase">Skills</h2>
    <p className="text-sm">{collectData?.technicalSkills?.language}</p>
    <p className="text-sm">{collectData?.technicalSkills?.techFameworks}</p>
  </section>
</div>

  )
}

export default TemplateOne
