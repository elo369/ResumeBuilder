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
const ResumePage = () => {

  const {template} = useSelector(
    (state:RootState)=> state.resumeReducer
  )
  console.log(template)
  console.log("template")

  
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
            <FrontResume/>
           <TemplateOne/>
           <TemplateThree/>
           <TemplateTwo/>
           <TemplateFour/>
           <TemplateFive/>
           <TemplateSix/>
           <TemplateSeven/>
           <TemplateEight/>
           <TemplateNine />
           <TemplateTen/>
      </div>
    </div>
  )
}

export default ResumePage
