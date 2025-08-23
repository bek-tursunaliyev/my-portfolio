import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiTelegram2Fill, RiTwitterXFill } from "react-icons/ri";

function Home() {
  return (
    <div className="flex justify-between my-28 items-center">
      <div className="flex flex-col gap-5 items-start ">
        {/* Header section */}
        <div className="flex items-center gap-4">
          <div className="border w-30 h-30 flex items-center justify-center rounded-full">
            <img src="/logo.svg" width={50} alt="header_photo" />
          </div>
          <div className="flex flex-col gap-0.5">
            <h1 className="text-3xl text-gray-700">
              <span className="font-semibold text-black">Asadbek</span>{" "}
              Tursunaliyev
            </h1>
            <h3 className="text-[21px] text-[#64748B]">Frontend dasturchi</h3>
            <div className="flex gap-2 items-center text-white *:bg-[#0F172A] *:p-1 *:rounded *:text-[14px]">
              <Link to="https://t.me/tursunaliyev_hd" target="_blank">
                <RiTelegram2Fill />
              </Link>
              <Link
                to="https://www.linkedin.com/mypreferences/d/categories/account"
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
              <Link to="https://x.com" target="_blank">
                <RiTwitterXFill />
              </Link>
              <Link to="https://github.com/bek-tursunaliyev" target="_blank">
                <FaGithub />
              </Link>
              <Link to="https://gmail.com/" target="_blank">
                <MdEmail />
              </Link>
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="max-w-110">
            <span className="underline font-[500]">Minimalizm</span> — men
            tanlagan yo'l. Bezak emas, foydalanuvchi uchun{" "}
            <span className="underline font-[500]">qulay ta'minot</span> ustun!
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-5">
          <Link
            to="/projects"
            className="py-2 px-3 bg-[#0F172A] rounded flex items-center text-[14px] text-white"
          >
            Yechimlar
          </Link>
          <Link
            to="https://t.me/me_and_everyone"
            target="_blank"
            className="py-2 px-3 border border-[#E2E8F0] rounded flex items-center text-[14px] text-[#0F172A] shadow"
          >
            Haqimda
          </Link>
        </div>
      </div>
      {/* right panel
      <div className="relative overflow-hidden">
        <img src="/bg.png" className="rounded-md" width={400} alt="my image" />
        <img src="/me.png" className="absolute top-0 rounded-md" width={400} alt="my image2" />
      </div> */}
    </div>
  );
}

export default Home;
