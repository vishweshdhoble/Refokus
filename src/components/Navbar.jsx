import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl py-6 flex items-center justify-between mx-auto border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center ">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="ml-20 links flex gap-14">
          {["Home", "Work", "Culture", "", "News"].map((elem, i) =>
            elem.length === 0 ? (
              <span className="w-[2px] h-7 bg-zinc-600"></span>
            ) : (
              <a
                className="font-regular flex items-center gap-1 text-sm"
                href="#"
              >
                {i === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block w-[0.35em] h-[0.35em] rounded-full bg-green-400"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button/>
    </div>
  );
};

export default Navbar;
