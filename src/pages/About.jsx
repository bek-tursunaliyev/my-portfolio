import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

function About() {
  const [open, setOpen] = useState(false);
  const skills = [
    { name: "HTML", percent: 90 },
    { name: "CSS", percent: 80 },
    { name: "Python", percent: 20 },
    { name: "JavaScript", percent: 70 },
    { name: "TailwindCSS", percent: 95 },
    { name: "ReactJS", percent: 95 },
    { name: "TypeScript", percent: 30 },
  ];

  return (
    <div className="w-full max-w-[570px] min-h-screen lg:mt-10 mt-25">
      <h1 className="text-3xl font-semibold mb-4">Who is Asadbek?</h1>

      <p className="mb-2">
        My name is Asadbek, my surname is Tursunaliyev, and I am currently 16 years old.{" "}
        <span className="underline font-[500]">Frontend</span> is my field, and I have 1+ years of
        experience. So far, I have participated in 1 real project!
      </p>

      <p className="mb-2">My skills related to my field:</p>
      <div className="flex flex-wrap gap-10 mb-4">
        <ul className="list-disc pl-5 font-semibold grid grid-cols-2">
          <li>English</li>
          <li>Mathematics</li>
          <li>Creativity</li>
          <li>Strong communication</li>
          <li>Fast typing</li>
          <li>Quality UI/UX</li>
        </ul>
      </div>

      <p>
        During my experience, I have learned these technologies and applied them in projects!
      </p>

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="mb-4 flex items-center gap-2 text-black font-semibold"
      >
        Technologies
        <BsChevronDown
          className={`ml-1 transition-all duration-500 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Collapsible content */}
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ${
          open ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 w-full md:w-72">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-1 flex items-center justify-between text-sm text-black">
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-300">
                <div
                  className="h-full rounded-full bg-black transition-[width] duration-500"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
