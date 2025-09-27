// import React from 'react'

const WrapDiv = ({children,id}:any) => {
  return (
    <div className="flex w-full flex-wrap gap-4 m-5 md:px-3 px-1">
  {/* Section Heading */}
  <div className="w-[80vw] md:w-full bg-gradient-to-r from-blue-600 via-gray-100 to-white  text-gray-800 font-semibold text-lg sm:text-xl md:text-2xl rounded-lg px-4 py-2 font-poppins tracking-wide">
    {id.toUpperCase()}
  </div>

  {/* Children (Inputs) */}
  <div className="flex flex-wrap gap-2 w-full font-poppins">
    {children}
  </div>
</div>

  )
}

export default WrapDiv
