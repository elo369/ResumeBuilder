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
// import { useState } from 'react'
const ResumePage = () => {
  // const [template,useTemplate] = useState(null)

  const {template} = useSelector(
    (state:RootState)=> state.resumeReducer
  )
  console.log(template)

  let choose:any;
  switch (template) {
    case TemplateOne:
      choose = <TemplateOne/>
      break;
    case TemplateTwo:
      choose =<TemplateTwo/>
      break;
    case TemplateThree:
      choose =<TemplateThree/>
      break;
    case TemplateFour:
      choose =<TemplateFour/>
      break;
    case TemplateFive:
      choose =<TemplateFive/>
      break;
    case TemplateSix:
      choose =<TemplateSix/>
      break;
    case TemplateSeven:
      choose =<TemplateSeven/>
      break;
    case TemplateEight:
      choose=<TemplateEight/>
      break;
    case TemplateNine:
      choose=<TemplateNine/>
      break;
    case TemplateTen:
      choose=<TemplateTen/>
      break;
    default:choose=<FrontResume/>
      break;
  }
  return (
    <div>
      <InputResume/>
      <div className='flex-col justify-center'>
        {/* <template/> */}
        {choose}
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
