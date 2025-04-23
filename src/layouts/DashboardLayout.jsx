import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-1 w-full max-w-[1440px] mx-auto p-5">
        {/* Sidebar: hidden on mobile, flex on md+ screens */}
        <div className="hidden md:flex">
          <Sidebar />
        </div>

        {/* Page Content */}
        <div className="flex flex-col flex-1 pl-0 md:pl-4 pt-0 w-full">
          <Outlet />
        </div>
      </div>

      {/* Bottom Navigation: visible only on mobile */}
      <BottomNav />
    </div>
  );
};

export default DashboardLayout;
