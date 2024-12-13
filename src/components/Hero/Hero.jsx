import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-[#1E3A8A] flex flex-col items-center justify-center text-center px-12">
      <div className="w-3/4 flex flex-col justify-center items-center text-white p-10 gap-5">
        <h1 className="text-5xl font-extrabold">Regular Savings Account</h1>
        <p className="px-10">
          We offer you a variety of Savings Accounts to choose from. Based on
          your needs, you can select an account that helps you save while you
          earn.
        </p>
        <button className="text-sm px-5 py-3 bg-[#FBBF24] text-black rounded-md">
          Apply Now
        </button>
      </div>
      <div className="w-2/3 flex items-center justify-center relative overflow-hidden">
        <img
          src="/images/mobile.png"
          alt=""
          className="z-10 flex items-center justify-center"
        />
        <div className="bg-[#FBBF24] h-[100vh] w-[50vw] absolute top-24 rounded-full "></div>
      </div>
    </section>
  );
};

export default Hero;
