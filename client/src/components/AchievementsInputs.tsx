// import React from 'react'

import { useEffect, useState } from "react";
import WrapDiv from "./WrapDiv";
import RealInput from "./RealInput";
import type { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
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

  const {collectData} = useSelector(
    (state:RootState)=> (state.resumeReducer)
  )

     const [mainAchievement,setMainAchievement] = useState<{[key:string]:string}>({})
     const [achievement, setAchievement] = useState<Achievement[]>([
        // {
        //   title: "",
        //   explan: "",
        // },
      ]);

      useEffect(()=>{
        if (collectData.achievements.defaultAchieve && Object.keys(mainAchievement).length == 0 || collectData.achievements.dynamicAchieve || Object.keys(achievement).length == 0) {
          setMainAchievement(collectData.achievements.defaultAchieve as {[key:string]:string} )
          setAchievement(collectData.achievements.dynamicAchieve as Achievement[] )
        }
      },[])

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
      if (Object.keys(mainAchievement).length > 0 || Object.keys(achievement).length > 0) {    
        dispatch(updateDataResume({achievements:achievementObject}))
      }
    },[mainAchievement,achievement])

    console.log(mainAchievement,achievement)
    
  return (
    <div className=" min-h-[70vh]">
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
        <div className="flex gap-2 pl-5">
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
    </div>
  )
}

export default AchievementsInputs
