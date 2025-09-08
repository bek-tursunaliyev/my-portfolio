import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiTelegram2Fill, RiTwitterXFill } from "react-icons/ri";
import { motion } from "framer-motion";

function Home() {
  return (
    <div
      className="
        flex flex-col lg:flex-row justify-between 
        my-30 lg:my-28 items-start
        px-4 lg:px-10 gap-10 lg:gap-20
        text-center lg:text-left
      "
    >
      {/* Left panel */}
      <div className="flex flex-col gap-5 items-center lg:items-start w-full lg:w-1/2">
        {/* Header section */}
        <div className="flex flex-col items-center gap-4 w-full lg:flex-row lg:items-center">
          <div className="border w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full">
            <img src="/logo.svg" className="w-12 sm:w-14" alt="header_photo" />
          </div>
          <div className="flex flex-col gap-0.5 items-center lg:items-start">
            <h1 className="text-2xl sm:text-3xl text-gray-700">
              <span className="font-semibold text-black">Asadbek</span>{" "}
              Tursunaliyev
            </h1>
            <h3 className="text-[18px] sm:text-[21px] text-[#64748B]">
              Frontend developer
            </h3>
            <div className="flex flex-wrap gap-2 items-center mt-2 text-white text-[14px] justify-center lg:justify-start">
              <Link to="https://t.me/tursunaliyev_hd" target="_blank">
                <div className="p-1 bg-[#0F172A] rounded">
                  <RiTelegram2Fill />
                </div>
              </Link>
              <Link to="https://linkedin.com/in/bek-tursunaliyev" target="_blank">
                <div className="p-1 bg-[#0F172A] rounded">
                  <FaLinkedinIn />
                </div>
              </Link>
              <Link to="https://x.com/AsadbekTur56636" target="_blank">
                <div className="p-1 bg-[#0F172A] rounded">
                  <RiTwitterXFill />
                </div>
              </Link>
              <Link to="https://github.com/bek-tursunaliyev" target="_blank">
                <div className="p-1 bg-[#0F172A] rounded">
                  <FaGithub />
                </div>
              </Link>
              <a
                href="mailto:kelajakasadbek@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-1 bg-[#0F172A] rounded">
                  <MdEmail />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-xl">
          <p className="text-sm sm:text-base">
            <span className="underline font-[500]">Minimalism</span> — that’s
            the path I’ve chosen. Not decoration, but{" "}
            <span className="underline font-[500]">user comfort</span> matters
            most!
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-2 justify-center lg:justify-start">
          <Link
            to="https://t.me/me_and_everyone"
            target="_blank"
            className="py-2 px-3 border border-[#E2E8F0] rounded flex items-center text-[14px] sm:text-sm text-[#0F172A] shadow"
          >
            About Me
          </Link>
          <a
            href="/cv.pdf"
            download
            className="py-2 px-5 bg-[#0F172A] rounded flex items-center text-[14px] sm:text-sm text-white"
          >
            CV
          </a>
        </div>
      </div>

      {/* Right panel: Image with animation */}
      {/* Right panel: Image with animation */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative flex items-center justify-center overflow-hidden rounded-full h-[500px] -mt-20 w-[500px]">
          <div className="relative rounded-full w-64 sm:w-80 lg:w-[420px] h-64 sm:h-80 lg:h-[420px] overflow-hidden">
            <div className="absolute h-100 w-100 bg-[#0F172A] rounded-full -bottom-2 left-1/2 -translate-x-1/2"></div>

            {/* Animate only image */}
            <motion.img
              src="/rme.png"
              alt="Asadbek"
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-0 left-1/2 rounded-full -translate-x-1/2 w-full max-w-[550px] object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
