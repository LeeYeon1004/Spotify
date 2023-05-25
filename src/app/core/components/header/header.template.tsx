import { useEffect, useState } from "react";
import {
  BackIcon,
  NextIcon,
  ShowMoreIcon,
  UserAccIcon,
} from "../../icons/header.icons";
import "./header.style.scss";
import { InstallIcon } from "../../icons/sidebar.icons";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [navColor, setNavColor] = useState("bg-[#121212]");
  const listenScroll = () => {
    window.scrollY > 1
      ? setNavColor("bg-[#121212]")
      : setNavColor("transparent");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
    return () => {
      window.removeEventListener("scroll", listenScroll);
    };
  }, []);

  return (
    <div
      className={`header-box ${
        location.pathname === "/playlist" ? "" : navColor
      }`}
    >
      <div className="flex items-center gap-[16px]">
        <button className="relative bg-[#000000b3] rounded-[50%] p-[4px] opacity-70">
          <BackIcon />
        </button>
        <button className="relative bg-[#000000b3]  rounded-[50%] p-[4px] opacity-70">
          <NextIcon />
        </button>
      </div>
      <div className="flex items-center gap-[32px] font-bold leading-[32px]">
        <div className="install flex items-center px-[24px] py-[8px] text-[#fff]">
          <InstallIcon />
          <p className="ml-[16px]">Install App</p>
        </div>
        <button className="user-btn px-[4px] bg-[#000000b3] flex items-center gap-[8px] hover:bg-[#282828]">
          <div className="bg-[#535353] p-[6px] rounded-[50%]">
            <UserAccIcon />
          </div>
          <p>User Account</p>
          <div className="mr-[6px]">
            <ShowMoreIcon />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Header;
