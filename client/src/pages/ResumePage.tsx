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
const ResumePage = () => {
  return (
    <div>
      <InputResume/>
      <div className='flex-col justify-center'>
            <FrontResume/>
           <TemplateOne/>
           <TemplateThree/>
           <TemplateTwo/>
           <TemplateFour/>
           <TemplateFive/>
           <TemplateSix/>
           <TemplateSeven/>
           <TemplateEight/>
           <TemplateNine/>
           <TemplateTen/>
      </div>
    </div>
  )
}

export default ResumePage
