import React from "react";
import { FaBarsProgress } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { LiaChartBarSolid } from "react-icons/lia";
import { LuChartBarStacked } from "react-icons/lu";

const Features = () => {
  return (
    <section className="w-full">
      <div className="py-24 px-28 gap-12 flex flex-col">
        <h4 className="text-5xl font-bold text-[#111827] leading-[60px]">
          Discover the key features
        </h4>
        <div className="flex justify-between items-center gap-8 w-full">
          <div className="flex flex-col justify-center  gap-6">
            <p className="w-8 h-8 text-[#2563EB]">
              <FaBarsProgress />
            </p>
            <div>
              <h6 className="text-3xl font-bold leading-10">Multiple links</h6>
              <p className="text-base font-normal leading-6">
                Add multiple links in Instagram instead of just one.
              </p>
            </div>
            <p className="text-[#2563EB] flex gap-2 items-center text-sm leading-5 font-semibold">
              Know more <FaArrowRight />
            </p>
          </div>
          <div className="flex flex-col justify-center  gap-6">
            <p className="w-8 h-8 text-[#2563EB]">
              <LiaChartBarSolid />
            </p>
            <div>
              <h6 className="text-3xl font-bold leading-10">
                Online messaging
              </h6>
              <p className="text-base font-normal leading-6">
                Easy communication with your clients.
              </p>
            </div>
            <p className="text-[#2563EB] flex gap-2 items-center text-sm leading-5 font-semibold">
              Know more <FaArrowRight />
            </p>
          </div>
          <div className="flex flex-col justify-center  gap-6">
            <p className="w-8 h-8 text-[#2563EB]">
              <LuChartBarStacked />
            </p>
            <div>
              <h6 className="text-3xl font-bold leading-10">
                Application forms
              </h6>
              <p className="text-base font-normal leading-6">
                Capture leads and grow your business with them.
              </p>
            </div>
            <p className="text-[#2563EB] flex gap-2 items-center text-sm leading-5 font-semibold">
              Know more <FaArrowRight />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
