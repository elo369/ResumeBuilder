// import React from 'react'


interface InputField {
  type: string;
  name: string;
  placeholder: string;
  value:string;
  onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
  label?:string
}

const RealInput = ({ type, name, placeholder,value,onChange,label }: InputField) => {
  

  // const resumeData = {
  //   personalInfo: {
  //     firstName: inputValue.firstName,
  //     lastName: inputValue.lastName,
  //     location: inputValue.location,
  //     email: inputValue.email,
  //     phoneNumber: inputValue.phoneNumber,
  //     portfolio: inputValue.portfolio,
  //     linkedin: inputValue.linkedin,
  //     github: inputValue.github,
  //   },
  //   education: [
  //     {
  //       college: inputValue.college,
  //       degree: inputValue.degree,
  //       startDate: inputValue.startDate,
  //       endDate: inputValue.endDate,
  //       location: inputValue.locationInstitution,
  //       description: inputValue.educationDescription,
  //     },
  //   ],
  //   experience: [
  //     {
  //       title: inputValue.jobTitle,
  //       company: inputValue.company,
  //       startDate: inputValue.experienceStartDate,
  //       endDate: inputValue.experienceEndDate,
  //       // currentlyWorking: inputValue.currentlyWorking,
  //       location: inputValue.jobLocation,
  //       description: inputValue.experienceDescription,
  //     },
  //   ],
  //   projects: [
  //     {
  //       title: inputValue.projectTitle,
  //       techstack: inputValue.techstack,
  //       projectGithub: inputValue.projectGithub,
  //       description: inputValue.projectDescription,
  //     },
  //   ],
  //   technicalSkills: {
  //     language: inputValue.language,
  //     devTools: inputValue.devTools,
  //     techFrameworks: inputValue.techFrameworks,
  //   },
  //   achievements: [
  //     {
  //       title: inputValue.achievementTitle,
  //       description: inputValue.achievementDescription,
  //     },
  //   ],
  // };

  let empty = ""
  return (
    <div className="flex flex-col w-full max-w-md mx-auto md:p-2 px-4 flex-wrap">
      <label
        htmlFor={name}
        className="text-lg sm:text-xl font-semibold font-poppins text-gray-800 mb-2"
      >
        { label?.toUpperCase()}{" "}:
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`
          min-w-[100%]

          flex items-center
          justify-center
          sm:w-full
          px-4 py-3
          text-sm sm:text-base
          border-2 border-gray-300
          rounded-xl
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          transition duration-200
          ${value == empty ? "bg-white":"bg-blue-100"}
        `}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default RealInput;
