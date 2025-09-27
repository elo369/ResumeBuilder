// import React from "react";

import { useState } from "react";
import { motion } from "motion/react";
const sections = [
  "PersonalInfo",
  "Education",
  "Experience",
  "Projects",
  "Achievements",
];

export default function ResumeSidebar() {
  const [view, setView] = useState(false);

  return (
    <div>
      <div
        className="  h-7 w-7 rounded-full bg-black flex items-center justify-center absolute right-2 top-2"
        onClick={() => setView(!view)}
      >
        👇🏻
      </div>
      {view && (
        <motion.div
        
          transition={{
            duration: 0.9,
            delay: 2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="w-40 bg-orange-200 min-h-20 p-3  shadow-md rounded-lg transition-all ease-in-out "
        >
          <h2 className="text-sm font-bold mb-2 ">Resume Sections Navigator</h2>
          <ul className="space-y-3">
            {sections.map((section, index) => (
              <li
                key={index}
                // onClick={() => onSelect(section)}
                className={`flex items-center gap-1 p-2 rounded-lg cursor-pointer transition h-3 w-3  bg-amber-400 translate-2`}
              >
                <a href={`#${section}`} className="font-medium font-poppins">
                  {/* Circle before section name */}

                  {section}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}
