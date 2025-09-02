import React from "react";

function Blog() {
  return (
    <div className="min-h-screen">
      <div className="w-full max-w-lg mt-25 lg:mt-5 mx-auto p-6 bg-white/20 backdrop-blur-md rounded-xl shadow-lg flex flex-col gap-10 sm:h-[12rem] md:h-[14rem] lg:h-[10rem]">
        <h2 className="text-xl sm:text-2xl font-semibold text-black">
          Blog thoughts
        </h2>
        <p className="text-black/80 text-sm sm:text-base">
          “The frontend world is evolving very fast. Every project is a new
          experience and opportunity.”
        </p>
      </div>
    </div>
  );
}

export default Blog;
