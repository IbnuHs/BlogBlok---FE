import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function Account() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="text-[16px] border-2 font-semibold py-2 px-3 rounded-md md:px-5"
        >
          Edit Profile
        </AccordionHeader>

        <AccordionBody>
          <form
            action=""
            className="px-3 border-2 rounded-md py-4 flex flex-col gap-4 md:px-5"
          >
            <div className="flex flex-col justify-center border-b-2 border-[#C4C4C4]">
              <label htmlFor="username" className="text-[15px] font-semibold">
                UserName
              </label>
              <input
                type="text"
                name=""
                id="username"
                placeholder="Input New Username...."
                className=" py-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col justify-center border-b-2 border-[#C4C4C4]">
              <label htmlFor="username" className="text-[15px] font-semibold">
                Interest
              </label>
              <input
                type="text"
                name=""
                id="interest"
                placeholder="I am Interest ...."
                className=" py-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col justify-center border-b-2 border-[#C4C4C4]">
              <label htmlFor="username" className="text-[15px] font-semibold">
                Summary
              </label>
              <textarea
                name=""
                id="summary"
                placeholder="Hello I am ...."
                rows={5}
                className=" py-2 focus:outline-none"
              ></textarea>
            </div>
            <div className="flex justify-center mt-5">
              <button className="bg-[#444444] text-[14px] text-white py-1 px-8 border-none rounded-md">
                Save
              </button>
            </div>
          </form>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="text-[16px] border-2 font-semibold py-2 px-3 rounded-md mt-4 md:px-5"
        >
          Change Password
        </AccordionHeader>
        <AccordionBody>
          <form
            action=""
            className="px-3 border-2 rounded-md py-4 flex flex-col gap-4 md:px-5"
          >
            <div className="flex flex-col justify-center border-b-2 border-[#C4C4C4]">
              <label htmlFor="username" className="text-[15px] font-semibold">
                Old Password
              </label>
              <input
                type="password"
                name=""
                id="oldPass"
                placeholder="Input Old Password"
                className=" py-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col justify-center border-b-2 border-[#C4C4C4]">
              <label htmlFor="username" className="text-[15px] font-semibold">
                New Password
              </label>
              <input
                type="password"
                name="newPass"
                id=""
                placeholder="Input New Password"
                className="dpy-2 focus:outline-none"
              />
            </div>

            <div className="flex justify-center mt-5">
              <button className="bg-[#444444] text-[14px] text-white py-1 px-8 border-none rounded-md">
                Save
              </button>
            </div>
          </form>
        </AccordionBody>
      </Accordion>
    </div>
  );
}
