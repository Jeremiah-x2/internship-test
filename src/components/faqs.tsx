import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "How do I get a Referral Code?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam eligendi voluptas quibusdam.",
  },
  {
    question: "Do I get rewarded in tokens or ETH when I refer buyers?",
    answer:
      "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
  },
  {
    question: "How do I get a Referral Code?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam eligendi voluptas quibusdam.",
  },
];

export default function Faqs() {
  return (
    <div className="pb-[160px] px-8 pt-[160px] w-full borde relative overflow-hiden">
      <div className="absolute -top-[400px] -right-[100px] -z-10">
        <svg
          width="749"
          height="1004"
          viewBox="0 0 749 1004"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_0_814)">
            <ellipse
              cx="219.5"
              cy="102"
              rx="219.5"
              ry="102"
              transform="matrix(-1 0 0 1 839 400)"
              fill="#EDD955"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_0_814"
              x="0"
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
                result="effect1_foregroundBlur_0_814"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute -bottom-[400px] -left-[100px] -z-10">
        <svg
          width="615"
          height="1114"
          viewBox="0 0 615 1114"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_0_813)">
            <ellipse
              cx="337.5"
              cy="157"
              rx="337.5"
              ry="157"
              transform="matrix(-1 0 0 1 215 400)"
              fill="#EDD955"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_0_813"
              x="-860"
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
                result="effect1_foregroundBlur_0_813"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="max-w-[998px] rounded-[10px] mx-auto py-7 pb-[42px] bg-[#F7F9FF] bg-opacity-5">
        <h3 className="font-extrabold font-fira text-[45px] border-b border-opacity-10 pb-4 border-white text-myprimary text-center">
          FAQs
        </h3>
        <div>
          <Accordion type="single" collapsible>
            {faqs.map((item, i) => (
              <AccordionItem
                value={`item-${i}`}
                className="px-4 md:pl-[84px] lg:pr-14 border-opacity-10 border-white"
              >
                <AccordionTrigger className="bg-transparent">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
