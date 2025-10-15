// import React from 'react'

import { useEffect, useState } from "react";
import RealInput from "../components/RealInput.tsx";
import WrapDiv from "../components/WrapDiv.tsx";
import { useDispatch, useSelector } from "react-redux";
// @ts-ignore
import { resumeThunker } from "../store/slice/resume/resume.thunk.ts";
// import type { AppDispatch, RootState } from "../store/store.ts";
// import { updateDataResume } from "../store/slice/resume/resume.slice.ts";
import NameInputs from "../components/NameInputs.tsx";
import EducationInputs from "../components/EducationInputs.tsx";
import AchievementsInputs from "../components/AchievementsInputs.tsx";
import Experience from "../components/Experience.tsx";
import Project from "../components/Project.tsx";
import type { AppDispatch, RootState } from "../store/store.ts";
import { updateDataResume } from "../store/slice/resume/resume.slice.ts";
// import ResumeSidebar from "../components/ResumeNavigator.tsx";

const Skill = () => {
  const {collectData} = useSelector(
    (state:RootState)=> (state.resumeReducer)
  )
  const [inputValue, setInputValue] = useState<{ [key: string]: string }>({});
  // const [select, setSelect] = useState<number>(1);
  let dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
    if (collectData?.technicalSkills && Object.keys(inputValue).length === 0) {
      setInputValue(collectData.technicalSkills as { [key: string]: string });
    }
  }, []);

  let collectDatas = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (Object.keys(inputValue).length > 0) {
      dispatch(updateDataResume({ technicalSkills: inputValue }));
    }
  }, [inputValue]);

  return (
    <div className="  min-h-[70vh]">
    <WrapDiv id="Technical Skills">
      <div
        id="TechnicalSkills "
        className="w-full justify-start md:flex flex-wrap grid grid-cols-1 "
      >
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
  );
};

const InputResume = () => {
  // const [inputValue, setInputValue] = useState<{ [key: string]: string }>({});
  const [select, setSelect] = useState<number>(1);
  // let dispatch = useDispatch<AppDispatch>();

  // let collectDatas = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e);
  //   setInputValue((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // useEffect(() => {
  //   dispatch(updateDataResume({ technicalSkills: inputValue }));
  // }, [inputValue]);

  const decrase = () => {
    if (select > 1 && select < 7) {
      setSelect((e) => e - 1);
    } else {
      setSelect(6);
    }
  };

  const increase = () => {
    if (select > 0 && select < 6) {
      setSelect((e) => e + 1);
    } else {
      setSelect(1);
    }
  };

  const selectInput = () => {
    switch (select) {
      case 1:
        return <NameInputs />;               // input
      case 2:
        return <EducationInputs />;          // input
      case 3:
        return <AchievementsInputs />;       // input
      case 4:
        return <Experience />;               // input
      case 5:
        return <Project />;
      case 6:
        return <Skill />;
      default:
        break;
    }
  };
  return (
    <>
      <button className="block w-20 h-7 bg-blue-500 text-white font-bold font-poppins relative left-5 top-2  rounded-2xl">
        <a href="/">Back</a>
      </button>
      {/* <div className="sticky top-5 right-5 ">
        <div className="absolute  top-5 right-5 ">
          <ResumeSidebar />
        </div>
      </div> */}
      {/* <div className="w-full md:px-20 z-1">
        <div id="PersonalInfo">
          <NameInputs />
        </div>

        <div id="Education">
          <EducationInputs />
        </div>

        <div id="Achievements">
          <AchievementsInputs />
        </div>

        <div id="Experience">
          <Experience />
        </div>

        <div id="Projects">
          <Project />
        </div>
        <div id="Technical">
          <WrapDiv id="Technical Skills">
            <div
              id="TechnicalSkills "
              className="w-full justify-start md:flex md:grid-cols-none grid grid-cols-1"
            >
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
      </div> */}
      <div >
      {selectInput()}
      </div>
      <div className="flex gap-2  m-2 relative  ">
        <button
          onClick={decrase}
          className="px-5 py-2 bg-blue-400 text-black font-semibold rounded-3xl"
        >
          Prev
        </button>
        <button
          onClick={increase}
          className="px-5 py-2 bg-blue-400 text-black font-semibold rounded-3xl"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default InputResume;
