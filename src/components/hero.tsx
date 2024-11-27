import { Button } from "./ui/button";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="flex items-center px-8 lg:px-[84px] justify-between mt-[78px] mb-16 lg:mb-[261px]">
      <div className="w-[906px] md:text-center lg:text-left">
        <div className="px-14 lg:mb-[90px]">
          <svg
            width="61"
            height="60"
            viewBox="0 0 61 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.5 0L32.8344 24.4567L52.0668 8.7868L36.1357 27.7039L61 30L36.1357 32.2961L52.0668 51.2132L32.8344 35.5433L30.5 60L28.1656 35.5433L8.93324 51.2132L24.8643 32.2961L0 30L24.8643 27.7039L8.93324 8.7868L28.1656 24.4567L30.5 0Z"
              fill="white"
            />
          </svg>
        </div>
        <motion.div
          initial={{ x: -20, y: -20 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 0.4, type: "spring", damping: 300 }}
          className=""
        >
          <p className="font-fira font-bold lg:text-[80px] md:text-[50px] md:w-[800px] text-[40px]">
            Trusted Multi-Chain <span className="text-lightprimary ">DEX</span>{" "}
            platform
          </p>
          <p>Trade, earn, and own crypto all-in-one multi-chain DEX</p>
        </motion.div>

        <div className="font-extrabold mt-[48px] space-x-7">
          <Button className="hover:scale-95 hover:bg-none hover:border-myprimary hover:text-myprimary px-7 py-[18px] font-extrabold text-[#111111] rounded-full bg-gradient-to-br from-myprimary to-[#FBD966]">
            Connect Wallet
          </Button>
          <Button
            variant={"outline"}
            className="hover:scale-95 hover:bg-myprimary hover:text-[#111111] border-myprimary px-7 py-[18px] bg-transparent font-extrabold text-myprimary rounded-full"
          >
            Trade Crypto
          </Button>
        </div>
      </div>

      <div className="lg:flex flex-col hidden relative items-center">
        <div className="absolute">
          <svg
            width="959"
            height="1114"
            viewBox="0 0 959 1114"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_0_689)">
              <ellipse cx="737.5" cy="557" rx="337.5" ry="157" fill="#EDD955" />
            </g>
            <defs>
              <filter
                id="filter0_f_0_689"
                x="0"
                y="0"
                width="1475"
                height="1114"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="200"
                  result="effect1_foregroundBlur_0_689"
                />
              </filter>
            </defs>
          </svg>
        </div>

        <div>
          <svg
            width="54"
            height="46"
            viewBox="0 0 54 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.4708 0C34.0714 10.8962 30.5357 16.33 26.9708 16.33C23.4058 16.33 19.8701 10.8962 13.5 0C19.8701 10.8962 22.9091 16.6462 21.1266 19.665C19.3442 22.6838 12.7695 23 0 23C13.237 23 19.8117 23.3162 21.3019 26.6512C22.7045 29.7562 19.6656 35.4775 13.5 46C19.8993 35.1037 23.4351 29.67 27 29.67C30.5649 29.67 34.1007 35.1037 40.5 46C33.7208 34.4137 30.7403 28.6637 33.2532 25.7887C35.474 23.2587 42.0195 23 54 23C40.5 23 33.9253 22.655 32.6104 19.1187C31.4123 15.9562 34.4513 10.2638 40.4708 0Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="w-[259px] h-[259px] mt-[68px] mb-[172px] rounded-full bg-gradient-to-br from-[#FFF6D7] to-myprimary"></div>

        <div>
          <svg
            width="61"
            height="60"
            viewBox="0 0 61 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.5 0L32.8344 24.4567L52.0668 8.7868L36.1357 27.7039L61 30L36.1357 32.2961L52.0668 51.2132L32.8344 35.5433L30.5 60L28.1656 35.5433L8.93324 51.2132L24.8643 32.2961L0 30L24.8643 27.7039L8.93324 8.7868L28.1656 24.4567L30.5 0Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
