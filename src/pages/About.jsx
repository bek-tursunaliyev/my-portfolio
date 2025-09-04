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
    <div className="w-full min-h-screen lg:mt-10 mt-6 flex flex-col lg:flex-row lg:justify-between gap-10">
      {/* details */}
      <div className="max-w-[570px] lg:mt-0 mt-20">
        <h1 className="text-3xl font-semibold mb-4">Who is Asadbek?</h1>

        <p className="mb-2">
          My name is Asadbek, my surname is Tursunaliyev, and I am currently 16
          years old. <span className="underline font-[500]">Frontend</span> is
          my field, and I have 1+ years of experience. So far, I have
          participated in 1 real project!
        </p>

        <p className="mb-2">My skills related to my field:</p>
        <ul className="list-disc pl-5 font-semibold grid grid-cols-2 gap-x-4 mb-4">
          <li>English</li>
          <li>Mathematics</li>
          <li>Creativity</li>
          <li>Strong communication</li>
          <li>Fast typing</li>
          <li>Quality UI/UX</li>
        </ul>

        <p>
          During my experience, I have learned these technologies and applied
          them in projects!
        </p>

        {/* toggle */}
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

        {/* collapsible */}
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

      {/* gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
        {/* Image 1 */}
        <div className="relative aspect-square overflow-hidden rounded-2xl shadow group">
          <img src="/me.jpg" alt="me" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
            <p className="text-white text-sm">
              Shot with "Al-Farg'oniy" statue (2025)
            </p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative aspect-square overflow-hidden rounded-2xl shadow group">
          <img src="/me3.jpg" alt="me" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
            <p className="text-white text-sm">Taken by cousin (2024)</p>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative aspect-video overflow-hidden rounded-2xl shadow group sm:col-span-2">
          <img
            src="/me33.jpg"
            alt="me"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
            <p className="text-white text-lg font-semibold">
              Memorable moment with mom (2022/23)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
