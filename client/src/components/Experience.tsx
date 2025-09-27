// import React from 'react'

import { useEffect, useState } from "react";
import RealInput from "./RealInput";
import WrapDiv from "./WrapDiv";
import type { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { updateDataResume } from "../store/slice/resume/resume.slice";

type Experience = {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  // currentlyWorking: string;
  jobLocation: string;
  description: string[];
};

type mainExperience = {
  jobTitle: string;
  company: string;
  experienceStartDate: string;
  experienceEndDate: string;
  // currentlyWorking: string;
  jobLocation: string;
  description: string[];
};

const Experience = () => {
  // const [experienceDescripe, setExperienceDescripe] = useState<string[]>([""]);
  const [mainExperience, setMainExperience] = useState<mainExperience>({
    jobTitle: "",
    company: "",
    experienceStartDate: "",
    experienceEndDate: "Present",
    // currentlyWorking: "false",
    jobLocation: "",
    description: [],
  });
  const [reputableExperienceDescripe, setReputableExperienceDescripe] =
    useState<string[]>([""]);

  const [mostexperience, setMostExperience] = useState<Experience[]>([
    {
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      // currentlyWorking: "false",
      jobLocation: "",
      description: [...reputableExperienceDescripe],
    },
  ]);

  let collectExperience = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMainExperience((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  // let check = (e: React.ChangeEvent<HTMLInputElement>) =>
  //   setMainExperience((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.checked ? "true" : "false",
  //   }));

  let collectExperienceFull = {
    mainExperience: mainExperience,
    dynamic: [...mostexperience],
  };

  let dispatch = useDispatch<AppDispatch>();

  console.log(mainExperience.description)
  useEffect(() => {
    dispatch(updateDataResume({ experience: collectExperienceFull }));
  }, [mainExperience, mostexperience]);

  console.log(mainExperience.description)
  return (
    <div>
      <WrapDiv id="experience">
        <RealInput
          type="text"
          name="company"
          label="company"
          placeholder="Company Name"
          value={mainExperience.company || ""}
          onChange={collectExperience}
        />
        <RealInput
          type="text"
          name="jobTitle"
          label="job Title"
          placeholder="Job Title"
          value={mainExperience.jobTitle || ""}
          onChange={collectExperience}
        />
        <RealInput
          type="date"
          name="experienceStartDate"
          label="Start Date"
          placeholder="Start Date"
          value={mainExperience.experienceStartDate || ""}
          onChange={collectExperience}
        />
        <RealInput
          type="date"
          name="experienceEndDate"
          label="End Date (Default Select: Present)"
          placeholder="End Date"
          value={mainExperience.experienceEndDate || ""}
          onChange={collectExperience}
        />

        {/* <input
          type="checkbox"
          name="currentlyWorking"
          id="123"
          onChange={check}
        /> */}
        {/* <label htmlFor="123" className="m-auto">
          Currently Working Here
        </label> */}

        <RealInput
          type="text"
          name="jobLocation"
          label="job Location"
          placeholder="Job Location"
          value={mainExperience.jobLocation || ""}
          onChange={collectExperience}
        />
        {[1, 2, 3].map((_, index) => (
          <RealInput
            key={index}
            type="text"
            name={`experienceDescription ${index + 1}`}
            label={`experience Description`}
            placeholder="Brief Description of Role/Responsibilities"
            value={mainExperience.description[index]}
            onChange={(e) => {
              const inputDescribe = [...mainExperience.description];
              inputDescribe[index] =e.target.value
              setMainExperience((prev)=>({
                ...prev,
                description:inputDescribe
              }));
            }}
          />
        ))}
      </WrapDiv>
      { mostexperience.map((exp, index) => (
        <div key={index} className="grid md:grid-cols-2  p-4 my-2">
          <RealInput
            type="text"
            name={`company${index}`}
            label="company"
            placeholder="Company Name"
            value={exp.company}
            onChange={(e) => {
              const updated = [...mostexperience];
              updated[index] = {
                ...updated[index],
                company: e.target.value,
              };
              setMostExperience(updated);
            }}
          />
           <RealInput
            type="text"
            name={`jobTitle${index}`}
                      label="job Title"
            placeholder="Job Title"
            value={exp.jobTitle}
            onChange={(e) => {
              const updated = [...mostexperience];
              updated[index] = {
                ...updated[index],
                jobTitle: e.target.value,
              };
              setMostExperience(updated);
            }}
          />
          <RealInput
            type="date"
            name={`startDate${index}`}
            placeholder="Start Date"
            label="Start Date"
            value={exp.startDate}
            onChange={(e) => {
              const updated = [...mostexperience];
              updated[index] = {
                ...updated[index],
                startDate: e.target.value,
              };
              setMostExperience(updated);
            }}
          />
          <RealInput
            type="date"
            name={`endDate${index}`}
            placeholder="End Date"
            label="End Date (Default Select: Present)"
            value={exp.endDate}
            onChange={(e) => {
              const updated = [...mostexperience];
              updated[index] = {
                ...updated[index],
                endDate: e.target.value,
              };
              setMostExperience(updated);
            }}
          />
          {/* <input
            type="checkbox"
            checked={exp.currentlyWorking === "true"}
            onChange={(e) => {
              const updated = [...mostexperience];
              updated[index] = {
                ...updated[index],
                currentlyWorking: e.target.checked ? "true" : "false",
              };
              setMostExperience(updated);
            }}
          />
          <label>Currently Working Here</label> */}
          <RealInput
            type="text"
            name={`jobLocation${index}`}
            placeholder="Job Location"
            label="Job Location"
            value={exp.jobLocation}
            onChange={(e) => {
              const updated = [...mostexperience];
              updated[index] = {
                ...updated[index],
                jobLocation: e.target.value,
              };
              setMostExperience(updated);
            }}
          />
          {[1, 2, 3].map((_, ind) => (
            <RealInput
              key={ind}
              type="text"
              name={`description ${ind + 1}`}
              placeholder="Description"
              label="Description"
              value={exp.description[ind] || ""}
              onChange={(e) => {
                const updated = [...mostexperience];
                const descArr = [...(updated[index].description || [])];
                descArr[ind] = e.target.value;
                setReputableExperienceDescripe(descArr);
                updated[index] = {
                  ...updated[index],
                  description: descArr,
                };
                setMostExperience(updated);
              }}
            />
          ))}
        </div>
      ))}

      <button
        className="h-10 w-10 bg-blue-700 border-amber-200 m-2 rounded-md"
        onClick={() =>
          setMostExperience([
            ...mostexperience,
            {
              jobTitle: "",
              company: "",
              startDate: "",
              endDate: "",
              // currentlyWorking: "false",
              jobLocation: "",
              description: [],
            },
          ])
        }
      >
        +
      </button>

      <button
        className="h-10 w-10 bg-blue-400 border-amber-200 rounded-md"
        onClick={() => setMostExperience(mostexperience.slice(0, -1))}
      >
        -
      </button>
    </div>
  );
};

export default Experience;
