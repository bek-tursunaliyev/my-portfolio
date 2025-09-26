import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiLink } from "react-icons/fi";

const projects = [
  {
    name: "Healthy Recipes",
    desc: "Using ReactJS technology with TailwindCSS. You can add and delete your own healthy foods' recipes.",
    url: "https://healthy-recipes-five.vercel.app",
    source: "https://github.com/bek-tursunaliyev/last-exam",
  },
  {
    name: `Lazzat Cafe`,
    desc: "The aesthetic cafe website design using HTML & CSS and JS.",
    url: "https://mario-resturant.vercel.app/",
    source: "https://github.com/bek-tursunaliyev/MARIO",
  },
  {
    name: `"Grasby" coming soon...`,
    desc: "The largest online market in Uzbekistan.",
    url: "/",
    source: "/",
  },
];

export default function MyProj() {
  return (
    <div className="min-h-screen bg-white flex justify-center mt-25 lg:mt-5 p-4 sm:p-6 md:p-10">
      <div className="w-full max-w-2xl space-y-10">
        {projects.map((item, idx) => (
          <div
            key={idx}
            className="space-y-2 p-4 sm:p-6 bg-white/50 backdrop-blur-md rounded-xl shadow-md"
          >
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
              {item.name}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 line-clamp-2">
              {item.desc}
            </p>
            <div className="flex items-center gap-5">
              <Link
                to={item.url}
                target="_blank"
                className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded bg-[#F1F5F9] hover:bg-[#F4F7FA] text-sm sm:text-base font-medium text-gray-800 shadow-sm transition"
              >
                <FiLink className="h-4 w-4" />
                View
              </Link>
              <Link
                to={item.source}
                target="_blank"
                className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded bg-[#F1F5F9] hover:bg-[#F4F7FA] text-sm sm:text-base font-medium text-gray-800 shadow-sm transition"
              >
                <FiGithub className="h-4 w-4" />
                GH
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
