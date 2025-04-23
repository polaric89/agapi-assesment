import {
    HomeIcon,
    DocumentIcon,
    PolicyIcon,
    UserGroupIcon,
    ChartIcon,
    SettingsIcon,
  } from "../icons";
  import { useLocation, Link } from "react-router-dom";
  
  const BottomNav = () => {
    const { pathname } = useLocation();
  
    const items = [
      { label: "Home", path: "/", icon: <HomeIcon className="w-5 h-5"/> },
      { label: "Quotes", path: "/quotes", icon: <DocumentIcon className="w-5 h-5"/> },
      { label: "Orders", path: "/orders", icon: <PolicyIcon className="w-5 h-5"/> },
      { label: "Customer", path: "/customers", icon: <UserGroupIcon className="w-5 h-5"/> },
      { label: "Reports", path: "/analytics", icon: <ChartIcon className="w-5 h-5"/> },
      { label: "Settings", path: "/settings", icon: <SettingsIcon className="w-5 h-5"/> },
    ];
  
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden">
        <div className="flex justify-around items-center py-2">
          {items.map((item, index) => {
            const active = pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                className="flex flex-col items-center text-xs"
              >
                <div className={active ? "text-[#032A44]" : "text-[#596774]"}>
                  {item.icon}
                </div>
                <span className={active ? "font-bold text-[#032A44]" : "text-[#596774]"}>
                  {item.label}
                </span>
                {active && <div className="mt-1 w-1 h-1 bg-[#032A44] rounded-full" />}
              </Link>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default BottomNav;
  