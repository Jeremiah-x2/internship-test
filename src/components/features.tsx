import {
  DollarSign,
  PhoneOff,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import { motion, Variants } from "motion/react";

const features = [
  {
    icon: <DollarSign size={40} />,
    feature: "Cheapest TXs",
    description:
      "Exchange popular digital currencies at the cheapest possible transaction price",
  },
  {
    icon: <ShieldCheck size={40} />,
    feature: "CerTIK",
    description:
      "We are Audited by Certik. CertiK is the leading security-focused ranking platform to",
  },
  {
    icon: <PhoneOff size={38} />,
    feature: "No Contract Sells",
    description: "No contract sells to fund the marketing wallets",
  },
  {
    icon: <SlidersHorizontal size={36} />,
    feature: "CrossDex Support",
    description:
      "Exchange popular digital currencies at the cheapest possible transaction price",
  },
];

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <div className="px-8 md:px-[84px] mt-[60px]  space-y-[45px]">
      <h3 className="font-extrabold font-fira text-[45px] text-center">
        Our <span className="text-myprimary">Features</span>
      </h3>

      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        className="flex justify-center lg:justify-between flex-wrap z-50"
        viewport={{ once: true, amount: 0.5 }}
      >
        {features.map((item, i) => (
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 0.95 }}
            key={i}
            className="space-y-[36px] hover:scale-95 mb-8 w-[296px] h-[281px] px-7 pb-14 pt-7 bg-white bg-opacity-5 border-opacity-5 rounded-2xl border border-white"
          >
            <div className="w-[68px] h-[68px] flex items-center justify-center rounded-full bg-[#D9D9D9] bg-opacity-10">
              {item.icon}
            </div>
            <div className="space-y-3">
              <p className="text-lg font-sans text-[#ECF1F0] font-semibold">
                {item.feature}
              </p>
              <p className="text-[#B6B6B6] font-fira">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
