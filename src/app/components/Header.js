"use client";

import { useState } from "react";
import { navLinks } from "../constants";
import OutsideClickHandler from "react-outside-click-handler";
import ThemeButton from "./ThemeButton";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="my-4">
      <nav className="flex w-full justify-between items-center font-bold text-[20px] text-[#0A5356] dark:text-[#E3F5F8]">
        <div className="pr-4">
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            onClick={() => setToggle(!toggle)}
            xmlns="http://www.w3.org/2000/svg"
            className="fill-[#0A5356] dark:fill-[#E3F5F8] cursor-pointer"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 2C0 0.89543 0.89543 0 2 0H22C23.1046 0 24 0.89543 24 2C24 3.10457 23.1046 4 22 4H2C0.89543 4 0 3.10457 0 2ZM0 11C0 9.89543 0.89543 9 2 9H18C19.1046 9 20 9.89543 20 11C20 12.1046 19.1046 13 18 13H2C0.89543 13 0 12.1046 0 11ZM2 18C0.89543 18 0 18.8954 0 20C0 21.1046 0.89543 22 2 22H18C19.1046 22 20 21.1046 20 20C20 18.8954 19.1046 18 18 18H2Z"
            />
          </svg>

          <OutsideClickHandler onOutsideClick={() => setToggle(false)}>
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-6 bg-[#0A5356] absolute top-0 left-0 h-full min-w-[240px] z-50  sidebar`}
            >
              <ul className="list-none flex flex-col flex-1">
                {navLinks.map((nav, index) => (
                  <li
                    key={index}
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-[#E3F5F8] ${
                      index === navLinks.length - 1 ? "mr-0" : "mb-4"
                    }`}
                  >
                    <a href={`${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </OutsideClickHandler>
        </div>
        <h1>Daily Muslims</h1>
        <ThemeButton />
      </nav>
    </header>
  );
}
