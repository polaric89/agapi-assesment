import React from "react";
import {
    StatusIcon,
  } from "../icons";

const statusStyles = {
  Pending: "bg-[#033B5F] text-white",
  Approved: "bg-[#16A34A] text-white",
  Rejected: "bg-[#DC2626] text-white",
  Expired: "bg-[#DE944A] text-white",
};

const QuoteStatusBadge = ({ status, children }) => {
  return (
    <span
      className={`inline-flex min-w-[80px] px-[7px] py-[2px] items-center gap-[4px] rounded-[99px] font-['DM_Sans'] text-[10px] font-bold leading-[16px] ${statusStyles[status]}`}
    >
       <StatusIcon className="w-3 h-3" />
      {status}{children}
    </span>
  );
};

export default QuoteStatusBadge;
