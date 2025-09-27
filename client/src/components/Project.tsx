// import React from 'react'

import { useEffect, useState,  } from "react";
import RealInput from "./RealInput";
import WrapDiv from "./WrapDiv";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { updateDataResume } from "../store/slice/resume/resume.slice";

type minProject = {
    projectTitle: string;
    techstack: string;
    projectGithub: string;
    description: string[];
  };

type Projects = {
    title: string;
    techstack: string;
    projectGithub: string;
    description: string[];
  };

type AllProjects = {
   mainProject:object,
   mostProjects:Projects[]
}

const Project = () => {
  // const [projectDecripe,setProjectDescripe] = useState<string[]>([""]) 

    const [mainProject,setMainProject] = useState<minProject>({
      projectTitle: "",
      techstack: "",
      projectGithub: "",
      description: [],
    })

    const [reputableProjectDescripe, setReputableProjectDescripe] = useState<string[]>([""]);

    const [mostProjects, setMostProjects] = useState<Projects[]>([
    {
      title: "",
      techstack: "",
      projectGithub: "",
      description: [...reputableProjectDescripe],
    },
  ]);
// setMostProjects(mostProjects[0].description)
    let collectProject = (e:React.ChangeEvent<HTMLInputElement>)=>{
          setMainProject((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
          }))
        }

    let allProjects:AllProjects = {
      mainProject:mainProject,
      mostProjects:[...mostProjects]
    }

    const dispatch = useDispatch<AppDispatch>()

    useEffect(()=>{
      dispatch(updateDataResume({projects:allProjects}))
    },[mainProject,mostProjects])
        
  return (
    <div>
      <WrapDiv id="project">
        <RealInput
          type="text"
          name="projectTitle"
          placeholder="Project Title"
          label="Project Title"
          value={mainProject.projectTitle || ""}
          onChange={collectProject}
        />
        <RealInput
          type="text"
          name="techstack"
          label="tech stack"
          placeholder="Tech Stack Used (e.g., React, Node.js)"
          value={mainProject.techstack || ""}
          onChange={collectProject}
        />
        <RealInput
          type="url"
          name="projectGithub"
          label="project Github"
          placeholder="Project GitHub URL"
          value={mainProject.projectGithub || ""}
          onChange={collectProject}
        />
        {[1,2,3].map((_,index)=>(
        <RealInput
          key={index}
          type="text"
          name={`projectDescription ${index+1}`}
          label={`project Description`}
          placeholder="Project Description or Highlights"
          value={mainProject.description[index] || ""}
          onChange={(e)=>{
              const descripe = [...mainProject.description]
              descripe[index] = e.target.value
              setMainProject((prev)=>({
                ...prev,
                description:descripe
              }))
          }}
        />
        ))}
      </WrapDiv>

        {mostProjects.map((proj, index) => (
          <div key={index} className="grid md:grid-cols-2">
            <RealInput
              type="text"
              name={`projectTitle${index}`}
              placeholder="Project Title"
              label="Project Title"
              value={proj.title}
              onChange={(e) => {
                const updated = [...mostProjects];
                updated[index] = {
                  ...updated[index],
                  title:e.target.value
                }
                setMostProjects(updated);
              }}
            />
            <RealInput
              type="text"
              name={`techstack${index}`}
              label={`tech stack`}
              placeholder="Tech Stack Used (e.g., React, Node.js)"
              value={proj.techstack}
              onChange={(e) => {
                const updated = [...mostProjects];
                updated[index] = {
                  ...updated[index],
                  techstack :e.target.value
                }
                setMostProjects(updated);
              }}
            />
            <RealInput
              type="url"
              name={`projectGithub${index}`}
              label={`project Github`}
              placeholder="Project GitHub URL"
              value={proj.projectGithub}
              onChange={(e) => {
                const updated = [...mostProjects];
                updated[index] = {
                  ...updated[index],
                  projectGithub : e.target.value
                }
                setMostProjects(updated);
              }}
            />
            {[1, 2, 3].map((_, dIndex) => (
              <RealInput
                key={dIndex}
                type="text"
                name={`Description ${dIndex + 1}`}
                placeholder={`Description`}
                label={`project Description`}
                value={mostProjects[index].description[dIndex]}
                onChange={(e) => {
                  const updatedProjects = [...mostProjects];
                  const updatedDescriptions = [
                    ...(updatedProjects[index].description || [])
                  ];
                  updatedDescriptions[dIndex] = e.target.value;
                  setReputableProjectDescripe(updatedDescriptions)
                  // updatedProjects[index].description = updatedDescriptions;
                  // setMostProjects((prev)=>({
                  //   ...prev,
                  //   updatedProjects
                  // }));
                  updatedProjects[index] ={
                    ...updatedProjects[index],
                    description:updatedDescriptions
                  }
                  setMostProjects(updatedProjects)
                }}
              />
            ))}
          </div>
        ))}

        <button
          className="h-10 w-10 bg-blue-700 border-amber-200 ml-2 rounded-md"
          onClick={() =>
            setMostProjects([
              ...mostProjects,
              {
                title: "",
                techstack: "",
                projectGithub: "",
                description: [],
              },
            ])
          }
        >
          +
        </button>

        <button
          className="h-10 w-10 bg-blue-400 border-amber-200 rounded-md ml-2"
          onClick={() => setMostProjects(mostProjects.slice(0, -1))}
        >
          -
        </button>
    </div>
  )
}

export default Project
