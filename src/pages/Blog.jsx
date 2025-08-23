import React from "react";

function Blog() {
  return (
    <div className="min-h-screen">
      <div className="w-full max-w-lg mx-auto p-6 bg-white/20 backdrop-blur-md rounded-xl shadow-lg flex flex-col justify-between sm:h-[12rem] md:h-[14rem] lg:h-[16rem]">
        <h2 className="text-xl sm:text-2xl font-semibold text-black">
          Blog fikrlar
        </h2>
        <p className="text-black/80 text-sm sm:text-base">
          “Frontend dunyosi juda tez rivojlanmoqda. Har bir loyiha - bu yangi
          tajriba va imkoniyat.”
        </p>
        <p className="text-black/60 text-xs sm:text-sm italic text-right">
          - Asadbek Tursunaliyev
        </p>
      </div>
    </div>
  );
}

export default Blog;
