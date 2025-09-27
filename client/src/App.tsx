// import { useState } from 'react'

// import { Features } from 'tailwindcss'
import './App.css'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ResumePage from './pages/ResumePage'
// import FrontResume from './pages/frontResume'
// import InputResume from './pages/inputResume'
function App() {
  // const [count, setCount] = useState(0)

  return (
   <div>
    {/* <InputResume/>
    <FrontResume/> */}
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/resume' element={<ResumePage/>}/>
      </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
