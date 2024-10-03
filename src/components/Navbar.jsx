import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  function onClick() {
    setNav(!nav);
  }
  return (
    <div className="flex justify-between px-6 py-3 items-center z-50 bg-white md:px-10 xl:px-24 xl:py-5 shadow-sm">
      <h1 className="text-[24px] font-semibold lg:text-[26px] xl:text-[28px]">
        BlogBlok
      </h1>
      <div
        className={`absolute flex ${
          nav ? "top-[60px]" : "-top-96"
        }  z-10 bg-white py-8 flex-col justify-center items-center left-0 right-0 font-semibold gap-4 text-[15px] transition-all md:static md:z-0 md:flex-row md:py-0  md:text-[14px] md:gap-7 lg:text-[16px]`}
      >
        <Link to="/">Home</Link>
        <Link to="/article">Articles</Link>
        <a href="">Hot</a>
        <a
          href=""
          className="bg-[#868484] text-white border-none rounded-md py-1 px-4"
        >
          Accounts
        </a>
      </div>
      <button onClick={onClick} className="md:hidden">
        <GiHamburgerMenu className="text-[24px]" />
      </button>
    </div>
  );
};
