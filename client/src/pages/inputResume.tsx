// import React from 'react'

import {  useEffect, useState } from "react";
import RealInput from "../components/RealInput.tsx";
import WrapDiv from "../components/WrapDiv.tsx";
import { useDispatch } from "react-redux";
// @ts-ignore
import { resumeThunker } from "../store/slice/resume/resume.thunk.ts";
// import type { AppDispatch, RootState } from "../store/store.ts";
// import { updateDataResume } from "../store/slice/resume/resume.slice.ts";
import NameInputs from "../components/NameInputs.tsx";
import EducationInputs from "../components/EducationInputs.tsx";
import AchievementsInputs from "../components/AchievementsInputs.tsx";
import Experience from "../components/Experience.tsx";
import Project from "../components/Project.tsx";
import type { AppDispatch } from "../store/store.ts";
import { updateDataResume } from "../store/slice/resume/resume.slice.ts";
import ResumeSidebar from "../components/ResumeNavigator.tsx";

const InputResume = () => {
  
  const [inputValue, setInputValue] = useState<{ [key: string]: string }>({});
      let dispatch = useDispatch<AppDispatch>()

  let collectDatas = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setInputValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(()=>{
    dispatch(updateDataResume({technicalSkills:inputValue}))
  },[inputValue])

  return (
    <>
    <button className="w-20 h-7 bg-blue-500 text-white font-bold font-poppins absolute left-5 top-7  rounded-2xl">
      <a href="/">
      Back
      </a>
    </button>
    <div className="sticky top-5 right-5 ">
    <div className="absolute  top-5 right-5 ">
      <ResumeSidebar/>
    </div>
    </div>
    <div className="w-full px-20 z-1">
      <div id="PersonalInfo">
        <NameInputs/>
       
      </div>

      

      <div id="Education">
        <EducationInputs/>
      </div>

      <div id="Achievements">
        <AchievementsInputs/>
      </div>

      <div id="Experience">
        <Experience/>
      </div>

      <div id="Projects">
        <Project/>
      </div>

        <WrapDiv id="TechnicalSkills">
      <div id="mainTechicalSkills " className="w-full justify-start md:flex md:grid-cols-none grid grid-cols-1">
          <RealInput
            type="text"
            name="language"
            label="language"
            placeholder="Programming Languages (e.g., JavaScript, Python)"
            value={inputValue.language || ""}
            onChange={collectDatas}
          />
          <RealInput
            type="text"
            name="devTools"
            label="devTools"
            placeholder="Development Tools (e.g., VS Code, Git)"
            value={inputValue.devTools || ""}
            onChange={collectDatas}
          />
          <RealInput
            type="url"
            name="techFameworks"
            label="tech Fameworks"
            placeholder="Frameworks/Libraries (e.g., React, Express.js)"
            value={inputValue.techFameworks || ""}
            onChange={collectDatas}
          />
      </div>
        </WrapDiv>
        
    </div>
  </>
  );
};

export default InputResume;
