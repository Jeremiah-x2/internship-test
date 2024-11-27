import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const links: string[] = ["Home", "About Us", "Roadmap", "FAQs", "Contact Us"];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <header className="flex z-50 font-sans justify-between w-full items-center mt-[51px] px-8 lg:px-[84px]">
      <div>
        <img src="/images/logo.png" alt="Logo" className="w-[194px] h-[73px]" />
      </div>

      <div className="flex-1 lg:flex justify-between hidden">
        <ul className="flex flex-1 justify-center gap-[76px] font-extrabold md:font-bold md:text-sm md:gap-8 font-sans text-lg items-center">
          {links.map((item) => (
            <li
              key={item}
              className={`${
                item === "Home" && "text-myprimary"
              } cursor-pointer before:content-[''] relative before:w-[0%] transition duration-1000 before:g-red-500 before:h-full before:absolute hover:before:w-full  before:left-0 before:bottom-0 before:border-b-2`}
            >
              {item}
            </li>
          ))}
        </ul>

        <Button className="px-7 hover:scale-95 py-[18px] text-[#111111] font-extrabold text-sm rounded-full bg-gradient-to-r from-[#E4B40D] to-[#FFE68F]">
          Connect Wallet
        </Button>
      </div>

      <div className="block lg:hidden z-50">
        {openMenu && (
          <div className="fixed top-10 shadow-2xl bg-[#111] py-8 px-12 left-1/2 -translate-x-1/2 gap-10 rounded-lg w-[80%] max-w-[600px] flex flex-col items-center ">
            <ul className="flex flex-col justify-center gap-8 font-extrabold font-sans text-lg items-center">
              {links.map((item) => (
                <li
                  key={item}
                  className={`${
                    item === "Home" && "text-myprimary"
                  } cursor-pointer before:content-[''] relative before:w-[0%] transition duration-1000 before:g-red-500 before:h-full before:absolute hover:before:w-full  before:left-0 before:bottom-0 before:border-b-2`}
                >
                  {item}
                </li>
              ))}
            </ul>

            <Button className="px-7 hover:scale-95 py-[18px] text-[#111111] font-extrabold text-sm rounded-full bg-gradient-to-r from-[#E4B40D] to-[#FFE68F]">
              Connect Wallet
            </Button>
          </div>
        )}
      </div>
      <div
        className="lg:hidden z-30"
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        {!openMenu ? <Menu size={32} /> : <X size={32} />}
      </div>
    </header>
  );
}
