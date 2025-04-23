import React from "react";
import { NavLink } from "react-router-dom";
import {
  SearchIcon,
  HomeIcon,
  DocumentIcon,
  PolicyIcon,
  UserGroupIcon,
  ChartIcon,
  SettingsIcon,
} from "../icons";

const menuItems = [
  { label: "Home", icon: HomeIcon, path: "/" },
  { label: "Quotes", icon: DocumentIcon, path: "/quotes" },
  { label: "Orders", icon: PolicyIcon, path: "/orders" },
  { label: "Customer", icon: UserGroupIcon, path: "/customers" },
  { label: "Reports", icon: ChartIcon, path: "/analytics" },
  { label: "Settings", icon: SettingsIcon, path: "/settings" },
];

const Sidebar = () => {
  return (
    <nav
      className="overflow-hidden p-4 text-xs leading-none whitespace-nowrap 
                 rounded-lg border border-[#E5E7EB] bg-white w-[220px] min-h-screen"
      aria-label="Main Navigation"
    >
      {/* Search */}
      <div className="w-full text-gray-400 my-3">
        <div className="flex items-center gap-2 p-4 bg-white rounded-lg border border-[#E5E7EB]">
          <SearchIcon className="w-4 h-4" />
          <span className="text-sm text-gray-500">Search</span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full bg-gray-200 h-px mb-3" />

      {/* Navigation */}
      <ul className="space-y-1 font-medium text-gray-600">
        {menuItems.map(({ label, icon: Icon, path }) => (
          <li key={label}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `flex items-center gap-2 p-4 rounded-lg transition-all ${
            isActive ? "bg-sky-950 text-white" : "bg-white text-gray-600 hover:bg-gray-100"
          }`
        }
      >
        {({ isActive }) => (
          <>
            {/* Pass isActive as prop */}
            <Icon className="w-4 h-4" isActive={isActive} />
            <span className="whitespace-nowrap">{label}</span>
          </>
        )}
      </NavLink>
          </li>
        ))}
      </ul>

    {/* Divider */}
    <div className="w-full bg-gray-200 h-px mt-6" />
    </nav>
  );
};

export default Sidebar;
