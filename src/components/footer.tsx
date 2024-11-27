import { RedditIcon, Telegram } from "./vectors";
import { Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row px-8 lg:px-[84px] z-50 items-center pt-[80px] pb-[156px] bg-[#051422]  justify-between">
      <div className="">
        <img src="/images/footer-logo.png" alt="Logo" />
      </div>

      <div className="flex flex-col items-center gap-4 lg:gap-0 lg:flex-row lg:items-end flex-1 justify-between">
        <ul className="flex flex-col lg:flex-row gap-8 lg:gap-[76px] font-extrabold text-lg flex-1 justify-center items-center">
          {links.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="flex items-end flex-col gap-[54px]">
          <h3 className="font-extrabold text-3xl">
            Contact <span className="text-myprimary">Us</span>
          </h3>
          <ul className="flex gap-[54px]">
            <li>
              <Telegram />
            </li>
            <li>
              <RedditIcon />
            </li>
            <li>
              <Twitter />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

const links: string[] = ["Home", "About Us", "Roadmap", "FAQs", "Contact Us"];
