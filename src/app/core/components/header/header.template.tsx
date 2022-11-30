import { useEffect, useState } from "react";
import {
  BackIcon,
  ForwardIcon,
  ShowMoreIcon,
  UserAccIcon,
} from "../../icons/header.icons";
import "./header.style.scss";

function Header() {
  const [navColor, setNavColor] = useState("bg-[transparent]");
  const listenScroll = () => {
    window.scrollY > 10
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
    <div className={`header-box ${navColor}`}>
      <div className="flex items-center gap-[16px]">
        <button className="relative bg-[#000000b3] rounded-[50%] p-[4px]">
          <BackIcon />
        </button>
        <button className="relative bg-[#000000b3]  rounded-[50%] p-[4px]">
          <ForwardIcon />
        </button>
      </div>
      <div className="flex items-center gap-[32px] font-bold leading-[32px]">
        <button className="upgrade-btn">Upgrade</button>
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
