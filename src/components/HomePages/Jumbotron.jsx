import React from "react";
import jumbotron from "../../assets/jumbotron.jpg";

export default function Jumbotron() {
  return (
    <div className="flex items-center flex-col justify-center py-6 px-5 md:flex-row-reverse md:py-10 lg:px-10 xl:py-32 xl:px-24 ">
      <img
        src={jumbotron}
        alt="people images"
        className="md:max-w-[45%] m-auto lg:max-w-[45%]"
      />
      <div className="px-4 md:max-w-[50%] md:px-0 lg:max-w-none xl:max-w-[50%]">
        <h1 className="font-semibold text-[26px] md:text-[20px] lg:text-[30px] xl:text-[40px]">
          Read and Write Blogs to Connect and Share with Others
        </h1>
        <p className="mt-7 md:text-[12px] lg:text-[14px] lg:mt-5 xl:max-w-[80%] xl:text-[16px]">
          Write your own blogs and share them with the world. Express your
          thoughts, passions, and experiences, and let others connect with your
          story. Share your journey and let people know who you are
        </p>
      </div>
    </div>
  );
}
