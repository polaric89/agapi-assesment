import React from "react";
import PageHeader from "./PageHeader";

const Header = ({ title, breadcrumb }) => {
  return (
    <div className="bg-white rounded-t-lg px-6 pt-0 w-full">
      {/* Mobile Top Row */}
      <div className="md:hidden flex justify-between items-center py-4">
        <img
          src="/avatar.jpeg"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <button className="w-10 h-10 flex justify-center items-center border border-[#E5E7EB] rounded-full">
          <img src="/elements.svg" alt="Notifications" className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden mb-4">
        <div className="flex items-center border border-gray-200 rounded-[12px] px-3 py-2 bg-white">
          <svg
            className="w-5 h-5 text-gray-400 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Title + Breadcrumb (both desktop and mobile) */}
      <div className="flex justify-between items-start">
        <PageHeader title={title} breadcrumb={breadcrumb} />

        {/* Desktop-only Profile Section */}
        <div className="hidden md:flex items-center gap-4">
          <button className="w-12 h-12 py-[6px] px-[9px] flex justify-center items-center border border-[#E5E7EB] rounded-[8px]">
            <img src="/elements.svg" alt="Notifications" className="w-6 h-6" />
          </button>

          <div className="flex items-center py-[12px] px-[16px] border border-[#E5E7EB] rounded-[8px] gap-2">
            <img
              src="/avatar.jpeg"
              alt="User Avatar"
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700">Emily Thompson</span>
            <img
              src="/arrow-down-01-sharp.png"
              alt="Dropdown Arrow"
              className="w-4 h-4 text-gray-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
