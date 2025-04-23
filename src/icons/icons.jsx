import React from "react";

export const SearchIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HomeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.66663 12L9.33329 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.56757 8.80901C1.33223 7.27753 1.21455 6.5118 1.50409 5.83296C1.79363 5.15412 2.436 4.68966 3.72074 3.76075L4.68064 3.06671C6.27884 1.91115 7.07794 1.33337 7.99998 1.33337C8.92202 1.33337 9.72112 1.91115 11.3193 3.06671L12.2792 3.76075C13.564 4.68966 14.2063 5.15412 14.4959 5.83296C14.7854 6.5118 14.6677 7.27753 14.4324 8.80901L14.2317 10.115C13.8981 12.286 13.7313 13.3715 12.9526 14.0191C12.174 14.6667 11.0358 14.6667 8.75919 14.6667H7.24077C4.9642 14.6667 3.82592 14.6667 3.04731 14.0191C2.26871 13.3715 2.10189 12.286 1.76826 10.115L1.56757 8.80901Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

export const DocumentIcon = ({ className, isActive }) => (
  <svg
    className={`${className} ${isActive ? "stroke-white" : "stroke-gray-600"} transition-all`}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 16V3C19 2.44772 18.5523 2 18 2H6C5.44772 2 5 2.44772 5 3V21C5 21.5523 5.44772 22 6 22H13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 8H15M9 12H15M9 16H11"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 22L22 19M22 19L19 16M22 19H16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const PolicyIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.64706 14.6667C3.98501 14.6667 2.65398 14.6667 1.82699 13.8857C1 13.1046 1 11.8475 1 9.33337L1 6.66671C1 4.15255 1 2.89547 1.82699 2.11442C2.65399 1.33337 3.98501 1.33337 6.64706 1.33337L7.35294 1.33337C10.015 1.33337 11.346 1.33337 12.173 2.11442C13 2.89547 13 4.15255 13 6.66671M6.66667 14.6667H7.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4.33331 4.66675H9.66665" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4.33331 8H7.66665" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10.6667 12.3931L10.0652 14.4953C10.0381 14.6008 10.1426 14.6924 10.2439 14.6519L11.5676 14.1233C11.6312 14.0979 11.7021 14.0979 11.7657 14.1233L13.1021 14.657C13.201 14.6965 13.304 14.61 13.2821 14.506L12.7726 12.3275M13.6667 10.6635C13.6667 9.56072 12.7713 8.66675 11.6667 8.66675C10.5621 8.66675 9.66669 9.56072 9.66669 10.6635C9.66669 11.7663 10.5621 12.6602 11.6667 12.6602C12.7713 12.6602 13.6667 11.7663 13.6667 10.6635Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);


export const UserGroupIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.8493 11C14.3488 11 14.7462 10.6856 15.1029 10.2461C15.8332 9.3463 14.6342 8.62723 14.1768 8.27507C13.712 7.91708 13.1929 7.71428 12.6666 7.66667M11.9999 6.33333C12.9204 6.33333 13.6666 5.58714 13.6666 4.66667C13.6666 3.74619 12.9204 3 11.9999 3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"/>
    <path d="M2.1506 11C1.65106 11 1.25374 10.6856 0.89699 10.2461C0.166685 9.3463 1.36574 8.62723 1.82306 8.27507C2.28794 7.91708 2.80701 7.71428 3.33329 7.66667M3.66663 6.33333C2.74615 6.33333 1.99996 5.58714 1.99996 4.66667C1.99996 3.74619 2.74615 3 3.66663 3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"/>
    <path d="M5.38916 9.07404C4.70798 9.49525 2.92195 10.3553 4.00976 11.4315C4.54115 11.9573 5.13297 12.3333 5.87704 12.3333H10.1229C10.8669 12.3333 11.4588 11.9573 11.9902 11.4315C13.078 10.3553 11.2919 9.49525 10.6108 9.07404C9.01339 8.08632 6.98653 8.08632 5.38916 9.07404Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
    <path d="M10.3333 3.99996C10.3333 5.28862 9.28862 6.33329 7.99996 6.33329C6.71129 6.33329 5.66663 5.28862 5.66663 3.99996C5.66663 2.71129 6.71129 1.66663 7.99996 1.66663C9.28862 1.66663 10.3333 2.71129 10.3333 3.99996Z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const ChartIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="5.66663" cy="6" r="1" stroke="#596774" strokeWidth="1.5" />
    <circle cx="9.66663" cy="9.33337" r="1" stroke="#596774" strokeWidth="1.5" />
    <circle cx="12.3333" cy="4" r="1" stroke="#596774" strokeWidth="1.5" />
    <path d="M10.2894 8.53085L12 5M6.38834 6.71229L8.80253 8.53085M2 11.6667L5.05972 6.91946" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
    <path d="M13.3333 13H5.99998C3.80009 13 2.70015 13 2.01673 12.3166C1.33331 11.6332 1.33331 10.5332 1.33331 8.33333V1" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"/>
  </svg>
);

export const SettingsIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.3333 6.99996C10.3333 8.28862 9.28862 9.33329 7.99996 9.33329C6.71129 9.33329 5.66663 8.28862 5.66663 6.99996C5.66663 5.71129 6.71129 4.66663 7.99996 4.66663C9.28862 4.66663 10.3333 5.71129 10.3333 6.99996Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M13.6923 8.50593C14.2306 8.2791 14.4998 8.16569 14.5832 8.04001C14.6666 7.91434 14.6666 7.71329 14.6666 7.3112V6.68878C14.6666 6.28665 14.6666 6.08559 14.5832 5.9599C14.4998 5.83422 14.2306 5.72084 13.6923 5.49409C12.6831 5.069 12.048 4.00938 12.1675 2.93286C12.2335 2.33876 12.2664 2.04172 12.1983 1.90822C12.1302 1.77472 11.9553 1.67546 11.6057 1.47695L11.0357 1.15332C10.6896 0.956801 10.5165 0.858538 10.3666 0.868682C10.2166 0.878826 9.98805 1.05314 9.53087 1.40176C8.63581 2.08428 7.36519 2.08425 6.47013 1.4017C6.01297 1.05307 5.78439 0.878761 5.63445 0.868616C5.48451 0.85847 5.31144 0.956734 4.9653 1.15326L4.3953 1.47689C4.04571 1.67538 3.87092 1.77462 3.80278 1.90809C3.73464 2.04156 3.76756 2.33865 3.8334 2.93282C3.95268 4.00939 3.31713 5.06906 2.30768 5.49413C1.76937 5.7208 1.50022 5.83414 1.41677 5.95983C1.33331 6.08553 1.33331 6.28661 1.33331 6.68878V7.3112C1.33331 7.71333 1.33331 7.9144 1.41675 8.04008C1.50019 8.16577 1.76935 8.27914 2.30767 8.50589C3.31686 8.93098 3.95191 9.99061 3.83243 11.0671C3.76649 11.6612 3.73352 11.9583 3.80166 12.0918C3.8698 12.2253 4.04461 12.3245 4.39425 12.523L4.96425 12.8467C5.31043 13.0432 5.48352 13.1415 5.63348 13.1313C5.78345 13.1212 6.01197 12.9468 6.46901 12.5982C7.36465 11.9149 8.63635 11.9149 9.53199 12.5981C9.98905 12.9468 10.2176 13.1211 10.3675 13.1313C10.5175 13.1414 10.6906 13.0431 11.0368 12.8466L11.6068 12.523C11.9564 12.3244 12.1313 12.2252 12.1994 12.0916C12.2676 11.9581 12.2345 11.6611 12.1685 11.0671C12.0488 9.99062 12.6834 8.93104 13.6923 8.50593Z" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"/>
  </svg>
);

export const NotificationIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"
      fill="currentColor"
    />
  </svg>
);

export const ArrowDownIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5V19M12 19L19 12M12 19L5 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowUpIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 19V5M12 5L5 12M12 5L19 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowLeftIcon = ({ className }) => (
  <img src="/back.svg" alt="Back" className="flex w-4 h-4 px-0 py-1 justify-center items-center" />

);

export const ArrowRightIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FilterIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 5H21M9 5C9 6.65685 7.65685 8 6 8M9 5C9 3.34315 7.65685 2 6 2C4.34315 2 3 3.34315 3 5C3 6.65685 4.34315 8 6 8M6 8C4.34315 8 3 9.34315 3 11C3 12.6569 4.34315 14 6 14M3 11H21M15 19H3M15 19C15 17.3431 16.3431 16 18 16C19.6569 16 21 17.3431 21 19C21 20.6569 19.6569 22 18 22C16.3431 22 15 20.6569 15 19ZM6 14C7.65685 14 9 12.6569 9 11C9 9.34315 7.65685 8 6 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MailIcon = ({ className }) => (
<img src="/mail.svg" alt="Mail Icon" className="w-4 h-4" />
);

export const EditIcon = ({ className }) => (
  <img src="/pending_app.svg" alt="Edits Icon" className={className} />
);

export const EyeIcon = ({ className }) => (
  <img src="/view.svg" alt="Eye Icon" className={className} />
);

export const DownLoadIcon = ({ className }) => (
  <img src="/dapp.svg" alt="Downlaod Icon" className={className} />
);

export const FollowUpIcon = ({ className }) => (
  <img src="/follow.svg" alt="FollowUp Icon" className={className} />
);

export const ReminderIcon = ({ className }) => (
  <img src="/reminder.svg" alt="Reminder Icon" className={className} />
);
export const ViewIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const StatusIcon = ({ className }) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
  className={className}
>
  <circle cx="6" cy="6" r="6" fill="white" />
</svg>
);

export const ActiveIcon = ({ className }) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
  className={className}
>
  <circle cx="6" cy="6" r="6" fill="green" />
</svg>

);

export const ExpiredIcon = ({ className }) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
  className={className}
>
  <circle cx="6" cy="6" r="6" fill="red" />
</svg>
);
export const LifeIcon = ({ className }) => (
  <img src="/life.svg" alt="Life" className={className} />
);

export const BusinessIcon = ({ className }) => (
  <img src="/business.svg" alt="Business" className={className} />
);

export const HouseIcon = ({ className }) => (
<img src="/house.svg" alt="House" className={className} />
);

export const TravelIcon = ({ className }) => (
<img src="/travel.svg" alt="Travel" className={className} />
);

export const VehicleIcon = ({ className }) => (
<img src="/vehicle.svg" alt="Business" className={className} />
);

export const ActionIcons = () => (
    <div className="flex gap-2 justify-center">
      <button className="p-1 hover:bg-gray-100 rounded">
        <img src="/mail.svg" alt="Mail Icon" className="w-4 h-4" />
      </button>
      <button className="p-1 hover:bg-gray-100 rounded">
      <img src="/edit.svg" alt="Edit Icon" className="w-4 h-4" />
    </button>
    <button className="p-1 hover:bg-gray-100 rounded">
      <img src="/view.svg" alt="View Icon" className="w-4 h-4" />
    </button>

    </div>
  );

  export const ArrowUpCircleIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none" className={className}>
      <path opacity="0.4" d="M8.57144 14.6667C12.2533 14.6667 15.2381 11.6819 15.2381 8.00004C15.2381 4.31814 12.2533 1.33337 8.57144 1.33337C4.88954 1.33337 1.90477 4.31814 1.90477 8.00004C1.90477 11.6819 4.88954 14.6667 8.57144 14.6667Z" fill="#16A34A"/>
      <path d="M10.9248 7.31334L8.92477 5.31333C8.73144 5.12 8.41144 5.12 8.2181 5.31333L6.2181 7.31334C6.02477 7.50667 6.02477 7.82667 6.2181 8.02C6.41144 8.21333 6.73144 8.21333 6.92477 8.02L8.07144 6.87334V10.3333C8.07144 10.6067 8.2981 10.8333 8.57144 10.8333C8.84477 10.8333 9.07144 10.6067 9.07144 10.3333V6.87334L10.2181 8.02C10.3181 8.12 10.4448 8.16667 10.5714 8.16667C10.6981 8.16667 10.8248 8.12 10.9248 8.02C11.1181 7.82667 11.1181 7.50667 10.9248 7.31334Z" fill="#16A34A"/>
    </svg>
  );
  
  export const ArrowDownCircleIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" className={className}>
      <path opacity="0.4" d="M8.57144 15.5467C12.2533 15.5467 15.2381 12.5619 15.2381 8.88005C15.2381 5.19815 12.2533 2.21338 8.57144 2.21338C4.88954 2.21338 1.90477 5.19815 1.90477 8.88005C1.90477 12.5619 4.88954 15.5467 8.57144 15.5467Z" fill="#DC2626"/>
      <path d="M10.9248 8.19334L8.92477 6.19334C8.73144 6.00001 8.41144 6.00001 8.2181 6.19334L6.2181 8.19334C6.02477 8.38667 6.02477 8.70667 6.2181 8.90001C6.41144 9.09334 6.73144 9.09334 6.92477 8.90001L8.07144 7.75334V11.2133C8.07144 11.4867 8.2981 11.7133 8.57144 11.7133C8.84477 11.7133 9.07144 11.4867 9.07144 11.2133V7.75334L10.2181 8.90001C10.3181 9.00001 10.4448 9.04667 10.5714 9.04667C10.6981 9.04667 10.8248 9.00001 10.9248 8.90001C11.1181 8.70667 11.1181 8.38667 10.9248 8.19334Z" fill="#DC2626"/>
    </svg>
  );