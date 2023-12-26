import React, { useState, useEffect, useRef } from "react";

export const Dropdown = ({ actions, buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="dropdown">
      <button onClick={toggleOpen} className="dropbtn">
        {buttonText}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 border border-gray-200 shadow-md z-10">
          <ul className="rounded-md w-[180px] bg-[#EFEDF1]">
            {actions.map((action, index) => (
              <li
                key={index}
                className={`py-0.5 ${
                  action.label === "Archive capacity"
                    ? "border border-t-[#D8C2BF] text-[#EB5757]"
                    : ""
                }${action.label === "Delete" ? "text-[#EB5757]" : ""}`}
              >
                <a
                  key={index}
                  onClick={action.onClick}
                  className="px-3 py-2 flex gap-2 hover:bg-[#aaaaaa]"
                >
                  {action.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
