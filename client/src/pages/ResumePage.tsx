// import React from 'react'
import InputResume from '../pages/inputResume'
import FrontResume from '../pages/frontResume'
import TemplateOne from '../resumeTemplate/TemplateOne'
import TemplateThree from '../resumeTemplate/TemplateThree'
import TemplateTwo from '../resumeTemplate/TemplateTwo'
import TemplateFour from '../resumeTemplate/TemplateFour'
import TemplateFive from '../resumeTemplate/TemplateFive'
import TemplateSix from '../resumeTemplate/TemplateSix'
import TemplateSeven from '../resumeTemplate/TemplateSeven'
import TemplateEight from '../resumeTemplate/TemplateEight'
import TemplateNine from '../resumeTemplate/TemplateNine'
import TemplateTen from '../resumeTemplate/TemplateTen'
import { useSelector } from 'react-redux'
import type { RootState } from "../store/store";

import resume1 from '../assets/pdf1_page-0001.jpg'
import resume2 from '../assets/pdf2_page-0001.jpg'
import resume3 from '../assets/pdf3_page-0001.jpg'
import resume4 from '../assets/pdf4_page-0001.jpg'
import resume5 from '../assets/pdf5_page-0001.jpg'
import resume6 from '../assets/pdf6_page-0001.jpg'
import resume7 from '../assets/pdf7_page-0001.jpg'
import resume8 from '../assets/pdf8_page-0001.jpg'
import resume9 from '../assets/pdf9_page-0001.jpg'
import resume10 from '../assets/pdf10_page-0001.jpg'
import resume11 from '../assets/pdf11_page-0001.jpg'


const ResumePage = () => {

  const {template} = useSelector(
    (state:RootState)=> state.resumeReducer
  )
  console.log(template)
  console.log("template")

  const resumeImage = [resume1,resume2,resume3,resume4,resume5,resume6,resume7,resume8,resume9,resume10,resume11]

  const renderTemplate = () => {
  switch (template) {
    case "TemplateOne":
      return <TemplateOne/>
    case "TemplateTwo":
      return <TemplateTwo/>
    case "TemplateThree":
      return <TemplateThree/>
    case "TemplateFour":
      return <TemplateFour/>
    case "TemplateFive":
      return <TemplateFive/>
    case "TemplateSix":
      return <TemplateSix/>
    case "TemplateSeven":
      return <TemplateSeven/>
    case "TemplateEight":
      return <TemplateEight/>
    case "TemplateNine":
      return <TemplateNine/>
    case "TemplateTen":
      return <TemplateTen/>
    default:return <FrontResume/>
  }
}
  return (
    <div>
      <InputResume/>
      <div className='flex-col justify-center'>
          {renderTemplate()}
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
           <div className='grid grid-cols-2 md:grid-cols-3'>
           {resumeImage.map((resumeImg,idx:number)=>(
               <div key={idx}>
                <img src={resumeImg} alt="resumeImage" className=' w-100' />
               </div>
           ))}
           </div>
      </div>
    </div>
  )
}

export default ResumePage
