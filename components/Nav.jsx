import { navMotion } from "@/utils/motion";
import { motion } from "framer-motion";
import { Spiral as Hamburger } from "hamburger-react";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={navMotion}
      initial="hidden"
      whileInView="show"
      className="relative z-10 py-[40px]"
    >
      <div className="container">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="logo font-bold text-[24px] py-[24px] pe-12">
              <img src="./GPT-3.svg" alt="gpt" />
            </div>
            <ul className="hidden lg:flex ul text-[17px] font-light list-none justify-between m-0 p-0">
              <li className="cursor-pointer p-5">Home</li>
              <li className="cursor-pointer p-5">What is GPT?</li>
              <li className="cursor-pointer p-5">Open AI</li>
              <li className="cursor-pointer p-5">Case Studies</li>
              <li className="cursor-pointer p-5">Library</li>
            </ul>
          </div>
          <div className="hidden lg:flex flex-center">
            <button
              className="bg-transparent px-[35px] py-[15px] "
              type="button"
            >
              Sign in
            </button>
            <button
              className="bg-orange rounded-[5px] px-[35px] py-[15px] "
              type="button"
            >
              Sign up
            </button>
          </div>
          <div className="flex-center flex lg:hidden">
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              rounded
              direction="left"
            />
          </div>
        </div>
        {isOpen && (
          <div>
            <ul className="lg:hidden flex flex-col ul text-[17px] font-light list-none justify-between m-0 p-0">
              <li className="cursor-pointer p-5">Home</li>
              <li className="cursor-pointer p-5">What is GPT?</li>
              <li className="cursor-pointer p-5">Open AI</li>
              <li className="cursor-pointer p-5">Case Studies</li>
              <li className="cursor-pointer p-5">Library</li>
            </ul>
            <div className="lg:hidden flex flex-center p-8">
              <button
                className="bg-transparent px-[35px] py-[15px] "
                type="button"
              >
                Sign in
              </button>
              <button
                className="bg-orange rounded-[5px] px-[35px] py-[15px] "
                type="button"
              >
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
export default Nav;
