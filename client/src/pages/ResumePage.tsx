// import React from 'react'
import InputResume from "../pages/inputResume";
import FrontResume from "../pages/frontResume";
import TemplateOne from "../resumeTemplate/TemplateOne";
import TemplateThree from "../resumeTemplate/TemplateThree";
import TemplateTwo from "../resumeTemplate/TemplateTwo";
import TemplateFour from "../resumeTemplate/TemplateFour";
import TemplateFive from "../resumeTemplate/TemplateFive";
import TemplateSix from "../resumeTemplate/TemplateSix";
import TemplateSeven from "../resumeTemplate/TemplateSeven";
import TemplateEight from "../resumeTemplate/TemplateEight";
import TemplateNine from "../resumeTemplate/TemplateNine";
import TemplateTen from "../resumeTemplate/TemplateTen";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

import resume1 from "../assets/pdf1_page-0001.jpg";
import resume2 from "../assets/pdf2_page-0001.jpg";
import resume3 from "../assets/pdf3_page-0001.jpg";
import resume4 from "../assets/pdf4_page-0001.jpg";
import resume5 from "../assets/pdf5_page-0001.jpg";
import resume6 from "../assets/pdf6_page-0001.jpg";
import resume7 from "../assets/pdf7_page-0001.jpg";
import resume8 from "../assets/pdf8_page-0001.jpg";
import resume9 from "../assets/pdf9_page-0001.jpg";
import resume10 from "../assets/pdf10_page-0001.jpg";
import resume11 from "../assets/pdf11_page-0001.jpg";
import { useState } from "react";

const ResumePage = () => {
  const { template } = useSelector((state: RootState) => state.resumeReducer);
  console.log(template);
  console.log("template");
  const [choose, setChoose] = useState<string | undefined>("");

  const resumeImage = [
    { img: resume1, name: "TemplateZero" },
    { img: resume2, name: "TemplateOne" },
    { img: resume3, name: "TemplateTwo" },
    { img: resume4, name: "TemplateThree" },
    { img: resume5, name: "TemplateFour" },
    { img: resume6, name: "TemplateFive" },
    { img: resume7, name: "TemplateSix" },
    { img: resume8, name: "TemplateSeven" },
    { img: resume9, name: "TemplateEight" },
    { img: resume10, name: "TemplateNine" },
    { img: resume11, name: "TemplateTen" },
  ];

  const chooseImage = (templateName: string) => {
    setChoose(templateName);
  };
  const renderTemplate = () => {
    switch (choose) {
      case "TemplateOne":
        return <TemplateOne />;
      case "TemplateTwo":
        return <TemplateThree />;
      case "TemplateThree":
        return <TemplateTwo />;
      case "TemplateFour":
        return <TemplateFour />;
      case "TemplateFive":
        return <TemplateFive />;
      case "TemplateSix":
        return <TemplateSix />;
      case "TemplateSeven":
        return <TemplateSeven />;
      case "TemplateEight":
        return <TemplateEight />;
      case "TemplateNine":
        return <TemplateNine />;
      case "TemplateTen":
        return <TemplateTen />;
      case "TemplateZero":
        return <FrontResume />;
    }
  };

  return (
    <div>
      <div className="md:flex flex-col ">
        <div className="w-full min-h-screen">
          <InputResume />
        </div>
        <div className="flex-col justify-end md:w-[44%] w-full md:absolute relative md:right-0 p-1 rounded-2xl bg-gradient-to-t from-white to-blue-900 ">
          {choose == "" ? (
            <h1 className="text-lg font-bold text-black items-center ">
              Select Resume
            </h1>
          ) : (
            renderTemplate()
          )}
          {/* <FrontResume/>
           <TemplateOne/>
           <TemplateThree/>
           <TemplateTwo/>
           <TemplateFour/>
           <TemplateFive/>
           <TemplateSix/>
           <TemplateSeven/>
           <TemplateEight/>
           <TemplateNine />
           <TemplateTen/> */}
        </div>
      </div>
      <div className="top-4 relative" >
      <h1 className="pl-5 font-bold text-lg ">Choose One ⬇</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 md:mt-15 relative">
        {resumeImage.map((resumeImg, idx: number) => (
          <div
            key={idx}
            onClick={() => chooseImage(resumeImg.name)}
            className={`cursor-pointer  rounded-lg overflow-hidden transition-all 
               ${choose == resumeImg.name && "p-1 bg-gray-400"} `}
          >
            <img src={resumeImg.img} alt="resumeImage" className=" w-100" />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ResumePage;
