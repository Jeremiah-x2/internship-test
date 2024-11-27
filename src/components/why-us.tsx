import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, X } from "lucide-react";

export default function WhyUs() {
  return (
    <div className="px-8 lg:px-[84px] space-y-8">
      <div className="absolute">
        <svg
          width="1512"
          height="1354"
          viewBox="0 0 1512 1354"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.2">
            <g filter="url(#filter0_f_0_746)">
              <ellipse
                cx="337.5"
                cy="157"
                rx="337.5"
                ry="157"
                transform="matrix(-1 0 0 1 907 640)"
                fill="#EDD955"
              />
            </g>
            <g filter="url(#filter1_f_0_746)">
              <ellipse
                cx="219.5"
                cy="102"
                rx="219.5"
                ry="102"
                transform="matrix(-1 0 0 1 1836 400)"
                fill="#EDD955"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_0_746"
              x="-168"
              y="240"
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
                result="effect1_foregroundBlur_0_746"
              />
            </filter>
            <filter
              id="filter1_f_0_746"
              x="997"
              y="0"
              width="1239"
              height="1004"
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
                result="effect1_foregroundBlur_0_746"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <h3 className="font-fira text-[45px] font-extrabold ml-[51px]">
        Why <span className="text-myprimary">MoonEX</span>?
      </h3>
      <div className="bg-white bg-opacity-5 px-4 lg:px-[45px] py-7 rounded-[20px]">
        <Table className="text-center px-[45px]">
          <TableHeader className="text-center  w-full">
            <TableRow className="flex w-full h-[100px]">
              <TableHead className="text-myprimary text-sm text-center flex h-full items-center flex-1 font-semibold text-[28px]">
                <span className="text-sm">Comparison</span>
              </TableHead>
              <TableHead className="flex-1 h-full items-center text-center flex justify-center border-x">
                <img
                  src="/images/logo.png"
                  alt="MoonEX"
                  className="w-[100px]"
                />
              </TableHead>
              <TableHead className="flex-1 text-center items-center h-full flex justify-center">
                <img
                  src="/images/uniswap.png"
                  alt="Uniswap"
                  className="w-[100px]"
                />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="w-full ">
            {points.map((item) => (
              <TableRow key={item.pointNum} className="w-full flex ">
                <TableCell className="flex-1 text-left py-8">
                  <p className="md:pl-4 text-sm md:text-xl text-[#F0F0F0]">
                    {item.pointNum} . {item.point}
                  </p>
                </TableCell>
                <TableCell className="flex-1 border-x text-center flex justify-center items-center">
                  {item.moonex ? (
                    <Check strokeWidth={4} stroke="#B2FFAC" />
                  ) : (
                    <X />
                  )}
                </TableCell>
                <TableCell className="flex-1 text-center flex items-center justify-center">
                  {item.uniswap ? (
                    <Check />
                  ) : (
                    <X stroke="#FF5050" strokeWidth={4} />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

const points = [
  {
    pointNum: "1",
    point: "Ponit no one",
    moonex: true,
    uniswap: false,
  },
  {
    pointNum: "2",
    point: "Ponit no two",
    moonex: true,
    uniswap: false,
  },
  {
    pointNum: "3",
    point: "Ponit no three",
    moonex: true,
    uniswap: false,
  },
  {
    pointNum: "4",
    point: "Ponit no four",
    moonex: true,
    uniswap: false,
  },
  {
    pointNum: "5",
    point: "Ponit no five",
    moonex: true,
    uniswap: false,
  },
];
