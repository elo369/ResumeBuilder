// import React from "react";

const sections = [
  "PersonalInfo",
  "Education",
  "Experience",
  "Projects",
  "TechnicalSkills",
  "Achievements",
];

export default function ResumeSidebar() {
  return (
    <div className="w-40 bg-orange-200 min-h-20 p-3  shadow-md rounded-lg">
      <h2 className="text-sm font-bold mb-2 ">Resume Sections Navigator</h2>
      <ul className="space-y-3">
        {sections.map((section, index) => (
          <li
            key={index}
            // onClick={() => onSelect(section)}
            className={`flex items-center gap-1 p-2 rounded-lg cursor-pointer transition h-3 w-3  bg-amber-400 translate-2`
        }
          >
            <a href={`#${section}`} className="font-medium font-poppins">
            {/* Circle before section name */}
           
            {section}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
