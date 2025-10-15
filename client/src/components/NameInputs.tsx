// import React from 'react'

import { useEffect, useState } from "react"
import RealInput from "./RealInput"
import WrapDiv from "./WrapDiv"
import { useDispatch, useSelector,  } from "react-redux"
import type { AppDispatch, RootState,  } from "../store/store"
import { updateDataResume } from "../store/slice/resume/resume.slice"


const NameInputs = () => {
   const {collectData} = useSelector(
    (state:RootState)=>(state.resumeReducer)
   )
   let dispatch = useDispatch<AppDispatch>()
    const [name,setName] = useState<{[key:string]:string}>({})

   // ✅ 1. Load existing data only once on mount
  useEffect(() => {
    if (collectData?.personalInfo && Object.keys(name).length === 0) {
      setName(collectData.personalInfo as { [key: string]: string });
    }
  }, []); // run once only

  // ✅ 2. Update Redux when local name changes
  useEffect(() => {
    if (Object.keys(name).length > 0) {
      dispatch(updateDataResume({ personalInfo: name }));
    }
  }, [name]);

  // ✅ 3. Input handler
  const collectName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
    
  return (
    <div className="  min-h-[70vh]">
      <WrapDiv id="PersonalInfo" class="Personal Information">
        <RealInput
          type="text"
          name="firstName"
          placeholder="First Name"
          label="First Name"
          value={name.firstName || ""}
          onChange={collectName}
        />
        <RealInput
          type="text"
          name="lastName"
          placeholder="Last Name"
          label="Last Name"
          value={name.lastName || ""}
          onChange={collectName}
        />
      </WrapDiv>
      <WrapDiv id="contact Info">
        {/* <RealInput
          type="text"
          name="location"
          label="location"
          placeholder="Your Location (City, Country)"
          value={name.location || ""}
          onChange={collectName}
        /> */}
        <RealInput
          type="email"
          name="email"
          label="email"
          placeholder="Email Address"
          value={name.email || ""}
          onChange={collectName}
        />
        <RealInput
          type="number"
          name="phoneNumber"
          placeholder="Phone Number"
          label="Phone Number"
          value={name.phoneNumber || ""}
          onChange={collectName}
        />
        {/* <RealInput
          type="url"
          name="portfolio"
          placeholder="Portfolio URL"
          label="Portfolio URL"
          value={name.portfolio || ""}
          onChange={collectName}
        /> */}
        <RealInput
          type="url"
          name="linkedin"
          label="linkedin url"
          placeholder="LinkedIn Profile URL"
          value={name.linkedin || ""}
          onChange={collectName}
        />
        <RealInput
          type="url"
          name="github"
          label="github"
          placeholder="GitHub Profile URL"
          value={name.github || ""}
          onChange={collectName}
        />
      </WrapDiv>
    </div>
  )
}

export default NameInputs
