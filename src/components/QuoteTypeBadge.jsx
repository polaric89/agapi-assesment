import React from "react";
import {
  LifeIcon,
  HouseIcon,
  VehicleIcon,
  TravelIcon,
  BusinessIcon,
} from "../icons";

const typeBadgeStyles = {
  Life: {
    bg: "bg-[#E0EDFF]",
    text: "text-[#1A94DB]",
    Icon: LifeIcon,
  },
  House: {
    bg: "bg-[#E0EDFF]",
    text: "text-[#1A94DB]",
    Icon: HouseIcon,
  },
  Vehicle: {
    bg: "bg-[#E8E5FF]",
    text: "text-[#8E80FF]",
    Icon: VehicleIcon,
  },
  Travel: {
    bg: "bg-[#FEE6EF]",
    text: "text-[#FC45AA]",
    Icon: TravelIcon,
  },
  Business: {
    bg: "bg-[#E6FFFB]",
    text: "text-[#26A195]",
    Icon: BusinessIcon,
  },
};

const QuoteTypeBadge = ({ type }) => {
  const { bg, text, Icon } = typeBadgeStyles[type] || {};
  return (
    <span
      className={`inline-flex min-w-[74px] px-[7px] py-[2px] items-center gap-[4px] rounded-full text-[10px] leading-4 font-bold font-['DM_Sans'] ${bg} ${text}`}
    >
        {Icon && <Icon className="w-3.5 h-3.5" />}
      {type}
      
    </span>
  );
};

export default QuoteTypeBadge;
