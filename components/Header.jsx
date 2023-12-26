"use client";

import Image from "next/image";
import Icon from "@mdi/react";
import { useEffect, useState } from "react";
import { mdiAccountOutline, mdiPower } from "@mdi/js";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [username, setUsername] = useState("user name");
  useEffect(() => {
    const name = window.localStorage.getItem("fullName");
    setUsername(name);
  }, []);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const logout = () => {
    window.localStorage.clear();
    router.push("/login");
  };
  return (
    <header className="bg-[#F3EEF2] flex items-center justify-between px-20">
      {/* Logo on the left */}
      <div>
        <Image
          priority={true}
          src="/logo.svg"
          alt="Your Logo"
          width={100}
          height={80}
        />
      </div>

      {/* User button with dropdown on the right */}
      <div className="relative">
        <button
          className="main-btn transparent-btn flex gap-2"
          onClick={toggleDropdown}
        >
          <Icon path={mdiAccountOutline} size={1} />
          {username}
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded shadow-md">
            <ul className="w-[273px] bg-[#EFEDF1]">
              <li className="py-2 border-t-[#D8C2BF]">
                <div
                  onClick={logout}
                  className="px-3 py-2 flex gap-2 hover:bg-[#aaaaaa]"
                >
                  <Icon path={mdiPower} size={1} />
                  Logout
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;