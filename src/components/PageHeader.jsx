import React from "react";

const PageHeader = ({ title, breadcrumb }) => {
  return (
<div className="mb-4">
  <h1 className="text-[48px] leading-[56px] tracking-[-1px] font-bold text-[#032A44] font-['DM_Sans']">
    {title}
  </h1>
  <p className="text-[16px] leading-[24px] font-normal text-[#596774] font-['DM_Sans'] mt-1">
    {breadcrumb}
 </p>

</div>

  );
};

export default PageHeader;
