// import React from 'react'
import InputResume from '../pages/inputResume'
import FrontResume from '../pages/frontResume'
import TemplateOne from '../resumeTemplate/TemplateOne'
import TemplateThree from '../resumeTemplate/TemplateThree'
import TemplateTwo from '../resumeTemplate/TemplateTwo'
const ResumePage = () => {
  return (
    <div>
      <InputResume/>
      <div className='flex-col justify-center'>
            <FrontResume/>
           <TemplateOne/>
           <TemplateThree/>
           <TemplateTwo/>
      </div>
    </div>
  )
}

export default ResumePage
