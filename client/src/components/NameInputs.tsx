// import React from 'react'

import { useEffect, useState } from "react"
import RealInput from "./RealInput"
import WrapDiv from "./WrapDiv"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../store/store"
import { updateDataResume } from "../store/slice/resume/resume.slice"


const NameInputs = () => {
    const [name,setName] = useState<{[key:string]:string}>({})

    let collectName = (e:React.ChangeEvent<HTMLInputElement>)=>{
         setName((prev)=>({
            ...prev,
            [e.target.name] : e.target.value
         }))
    }

    let dispatch = useDispatch<AppDispatch>()

    console.log(name)
    useEffect(()=>{
        dispatch(updateDataResume({personalInfo:name}))
    },[name])
    
  return (
    <div>
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
