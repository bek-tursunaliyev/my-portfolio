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
    <div className="mt-5 w-full max-w-[570px] min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">Asadbek kim?</h1>

      <p className="mb-2">
        Ismim Asadbek, familyam Tursunaliyev, hozirda 16 yoshdaman.{" "}
        <span className="underline font-[500]">Frontend</span> yo'nalishida 1+
        yil tajribaga egaman. Shu kungacha 1 ta real loyihada qatnashdim!
      </p>

      <p className="mb-2">Sohamga doir mahoratlarim:</p>
      <div className="flex flex-wrap gap-10 mb-4">
        <ul className="list-disc pl-5 font-semibold">
          <li>Ingliz tili</li>
          <li>Matematika</li>
          <li>Kreativlik</li>
          <li>Komunikator</li>
        </ul>
        <ul className="list-disc pl-5 font-semibold">
          <li>Fast Typing</li>
          <li>Sifatli UI/UX</li>
        </ul>
      </div>

      <p className="mb-2">
        Tajribam davomida ushbu texnologiyalarni o'rgandim va loyihalarda
        qo'lladim!
      </p>

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="mb-4 flex items-center gap-2 text-black font-semibold"
      >
        Texnologiyalar
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
