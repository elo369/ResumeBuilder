// import React from 'react'

import { useEffect, useState } from "react";
import WrapDiv from "./WrapDiv";
import RealInput from "./RealInput";
import type { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { updateDataResume } from "../store/slice/resume/resume.slice";

 type Achievement = {
    title: string;
    explan: string;
  };

type achievementObj = {
  defaultAchieve:object;
  dynamicAchieve:Achievement[];
}

const AchievementsInputs = () => {
     const [mainAchievement,setMainAchievement] = useState<{[key:string]:string}>({})
     const [achievement, setAchievement] = useState<Achievement[]>([
        {
          title: "",
          explan: "",
        },
      ]);

       let collectAchievement = (e:React.ChangeEvent<HTMLInputElement>)=>{
         setMainAchievement((prev)=>({
            ...prev,
            [e.target.name] : e.target.value
         }))
    }

    let achievementObject:achievementObj = {
      defaultAchieve : mainAchievement,
      dynamicAchieve : [...achievement]
    }

    let dispatch = useDispatch<AppDispatch>()

    useEffect(()=>{
        dispatch(updateDataResume({achievements:achievementObject}))
    },[mainAchievement,achievement])

    console.log(mainAchievement,achievement)
    
  return (
    <div>
      <WrapDiv id="Achievements">
        <RealInput
          type="text"
          name="achievementTitle"
          label="achievement Title"
          placeholder="Achievement Title"
          value={mainAchievement.achievementTitle || ""}
          onChange={collectAchievement}
        />
        <RealInput
          type="text"
          name="achievementDescription"
          label="achievement Description"
          placeholder="Description of Achievement"
          value={mainAchievement.achievementDescription || ""}
          onChange={collectAchievement}
        />
        </WrapDiv>
        {achievement.map((desc, index) => {
          return (
            <div key={index} className="flex flex-wrap gap-3 ">
              <RealInput
                type="text"
                name={`achievementTitle${index + 1}`}
                label="achievement Title"
                placeholder="Achievement Title"
                value={desc.title || ""}
                onChange={(e) => {
                  const inputObj = [...achievement];
                  inputObj[index] = {
                    ...inputObj[index],
                    title: e.target.value,
                  };
                  setAchievement(inputObj);
                }}
              />
              <RealInput
                type="text"
                name={`achievementDescription ${index + 1}`}
                label="achievement Description"
                placeholder="Description of Achievement"
                value={desc.explan || ""}
                onChange={(e) => {
                  const inputObj = [...achievement];
                  inputObj[index] = {
                    ...inputObj[index],
                    explan: e.target.value,
                  };
                  setAchievement(inputObj);
                }}
              />
            </div>
          );
        })}
        <button
          className="h-10 w-10 bg-blue-700 border-amber-200  rounded-md "
          onClick={() =>
            setAchievement([
              ...achievement,
              {
                title: "",
                explan: "",
              },
            ])
          }
        >
          +
        </button>
        <button
          className="h-10 w-10 bg-blue-400 border-amber-200 rounded-md ml-2"
          onClick={() =>
            setAchievement(achievement.slice(0, achievement.length - 1))
          }
        >
          -
        </button>
    </div>
  )
}

export default AchievementsInputs
