

import { HoverEffect } from "../components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h2 className="text-5xl py-7 flex justify-center font-poppins font-bold bg-gradient-to-b from-black to-blue-900 bg-clip-text text-transparent">
      HOW IT WORKS
    </h2>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "First Step",
    description:
      "Start by selecting your preferred resume template from our collection  Each template is professionally designed and fully customizable to match your style and career goals Whether you want a clean, modern look or a detailed professional format, you’ll find the right fit here",
    link: "",
  },
  {
    title: "Second Step",
    description:
      "Fill in your personal details, education, experience, skills, and projects through our simple and structured input forms. As you type, the content automatically updates in real-time on the resume template, so you can see exactly how your information will appear to recruiters.",
    link: "",
  },
  {
    title: "Third Step",
    description:
      "Once you are happy with the final look, you can instantly export your resume in multiple formats such as PDF or Word. You also get the option to generate a shareable online link that can be directly sent to recruiters or added in your job applications. This ensures your resume is accessible anytime, anywhere, without formatting issues.",
    link: "",
  },
  
];
