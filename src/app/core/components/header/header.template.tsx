import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  BackIcon,
  NextIcon,
  ShowMoreIcon,
  UserAccIcon,
} from "../../icons/header.icons";
import "./header.style.scss";
import { InstallIcon, SearchIcon } from "../../icons/sidebar.icons";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  clearValue,
  valueSearch,
} from "../../../redux-toolkit/slices/searchSlice";

function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeSearchIcon, setActiveSearchIcon] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [navColor, setNavColor] = useState("bg-[#121212]");
  const listenScroll = () => {
    window.scrollY > 1
      ? setNavColor("bg-[#121212]")
      : setNavColor("transparent");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
    document.addEventListener("click", (e) => handleClickOutside(e), true);
    return () => {
      window.removeEventListener("scroll", listenScroll);
    };
  }, []);
  useEffect(() => {
    if (searchVal === "") {
      setActiveSearchIcon(false);
      dispatch(valueSearch(""));
    } else {
      setActiveSearchIcon(true);
      dispatch(valueSearch(searchVal));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchVal]);

  const handleClickOutside = (e: MouseEvent) => {
    if (!searchRef.current?.contains(e.target as Node)) {
      setActiveSearch(false);
      setActiveSearchIcon(false);
    }
  };
  const handleClickSearch = () => {
    setActiveSearch(true);
    inputRef.current?.focus();
  };
  const getValueSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (!inputValue.startsWith(" ")) {
      setSearchVal(e.target.value);
    }
  };
  const clearText = () => {
    setSearchVal("");
    inputRef.current?.focus();
    dispatch(clearValue(true));
    // setTimeout(() => {
    //   dispatch(clearValue(false));
    // }, 300);
  };

  return (
    <div
      className={`header-box ${
        location.pathname === "/playlist" ? "" : navColor
      }`}
    >
      <div className="flex items-center gap-[16px]">
        <button className="cursor-not-allowed relative bg-[#000000b3] rounded-[50%] p-[4px] opacity-70">
          <BackIcon />
        </button>
        <button className="cursor-not-allowed relative bg-[#000000b3]  rounded-[50%] p-[4px] opacity-70">
          <NextIcon />
        </button>
      </div>
      <div
        className={`flex-1 ml-[16px] ${
          location.pathname === "/search" ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClickSearch}
      >
        <div
          ref={searchRef}
          className={`bg-[#242424] w-full max-w-[364px] flex items-center px-[12px] py-[9px] rounded-[92px] border-[1px] border-solid ${
            activeSearch ? "border-[#fff]" : "border-transparent"
          }`}
        >
          <span
            className={`${
              activeSearchIcon === true ? "opacity-100" : "opacity-60"
            }`}
          >
            <SearchIcon height={16} width={16} />
          </span>
          <input
            ref={inputRef}
            value={searchVal}
            onChange={(e) => {
              getValueSearch(e);
            }}
            className="bg-transparent outline-none bg-[#242424] text-[14px] w-full px-[8px]"
            type="text"
            placeholder="What do you want to listen to?"
          />
          <span
            className={`${
              activeSearchIcon === true ? "opacity-100" : "opacity-60"
            } text-[18px] mr-[4px]`}
            onClick={clearText}
          >
            <FontAwesomeIcon icon={faXmark} />
          </span>
        </div>
      </div>
      <div className="flex items-center gap-[16px] font-bold leading-[32px]">
        <div className="install flex items-center px-[16px] text-[#fff] bg-[#000000b3] rounded-[92px]">
          <InstallIcon />
          <p className="ml-[8px]">Install App</p>
        </div>
        <button className="cursor-not-allowed user-btn px-[4px] bg-[#000000b3] flex items-center gap-[8px] hover:bg-[#282828]">
          <div className="bg-[#535353] p-[6px] rounded-[50%]">
            <UserAccIcon />
          </div>
          <div className="mr-[6px]">
            <ShowMoreIcon />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Header;
