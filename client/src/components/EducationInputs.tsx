// import React from 'react'

import { useEffect, useState } from "react";
import WrapDiv from "./WrapDiv";
import RealInput from "./RealInput";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { updateDataResume } from "../store/slice/resume/resume.slice";

const EducationInputs = () => {
      const [education,setEducation] = useState<{[key:string]:string}>({})
      const [edudescript, setEdudescript] = useState<string[]>([""]);
    
       let collectEducation = (e:React.ChangeEvent<HTMLInputElement>)=>{
         setEducation((prev)=>({
            ...prev,
            [e.target.name] : e.target.value
         }))
    }

    let educationObj = {
       education : education,
       educationScript:[...edudescript]
    }

    console.log(edudescript)
    let dispatch = useDispatch<AppDispatch>()

    useEffect(()=>{
        dispatch(updateDataResume({educationData:educationObj}))
    },[education,edudescript])

  return (
    <div>
      <WrapDiv id="education">
        <RealInput
          type="text"
          name="college"
          label="college"
          placeholder="College/University Name"
          value={education.college || ""}
          onChange={collectEducation}
        />
        <RealInput
          type="text"
          name="degree"
          label="degree"
          placeholder="Degree (e.g., B.Tech, B.Com)"
          value={education.degree || ""}
          onChange={collectEducation}
        />
        <RealInput
          type="date"
          name="startDate"
          label="start Date"
          placeholder="Start Date"
          value={education.startDate || ""}
          onChange={collectEducation}
        />
        <RealInput
          type="date"
          name="endDate"
          label="end Date"
          placeholder="End Date"
          value={education.endDate || ""}
          onChange={collectEducation}
        />
        <RealInput
          type="text"
          name="locationInstitution"
          label="location Institution"
          placeholder="Location of Institution"
          value={education.locationInstitution || ""}
          onChange={collectEducation}
        />
        <RealInput
          type="text"
          name="educationDescription"
          label="education Description"
          placeholder="Brief Description"
          value={education.educationDescription || ""}
          onChange={collectEducation}
        />
        {edudescript.map((desk, idex) => (
         
          <RealInput
            key={idex}
            type="text"
            name={`educationDescription${idex}`}
            label="Description"
            placeholder="Brief Description"
            value={desk || ""}
            onChange={(e) => {
              const insideArray = [...edudescript];
              insideArray[idex] = e.target.value;
              setEdudescript(insideArray);
            }}
          />
        ))}
        <button
          className="h-10 w-10 bg-blue-700 border-amber-200  rounded-md"
          onClick={() => setEdudescript([...edudescript, ""])}
        >
          +
        </button>
        <button
          className="h-10 w-10 bg-blue-400 border-amber-200 rounded-md"
          onClick={() =>
            setEdudescript(edudescript.slice(0, edudescript.length - 1))
          }
        >
          -
        </button>
      </WrapDiv>
    </div>
  )
}

export default EducationInputs
