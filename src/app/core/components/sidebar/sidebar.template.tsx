import { Link, useLocation } from "react-router-dom";
import {
  Enlarge,
  HeartIcon,
  HomeIcon,
  HomeIconChecked,
  InstallIcon,
  LibraryIcon,
  SearchIcon,
  SearchIconChecked,
} from "../../icons/sidebar.icons";

import "./sidebar.style.scss";
import { CreateIcon } from "../../icons/sidebar.icons";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar max-w-[300px] w-full max-h-screen h-full fixed z-[2] bg-black">
      <div className="relative text-[15px] text-[#b3b3b3] text-left font-semibold w-full h-full flex flex-col">
        {/* -------- */}
        <div className="mt-[8px] px-[8px]">
          <ul className="bg-[#121212] rounded-[8px] px-[16px] py-[8px]">
            <Link to="/home">
              <li>
                {location.pathname === "/home" ? (
                  <HomeIconChecked />
                ) : (
                  <HomeIcon />
                )}
                <p>Home</p>
              </li>
            </Link>
            <Link to="/search">
              <li>
                {location.pathname === "/search" ? (
                  <SearchIconChecked height={24} width={24} />
                ) : (
                  <SearchIcon height={24} width={24} />
                )}
                <p>Search</p>
              </li>
            </Link>
          </ul>
        </div>
        {/* ---------- */}
        <div className="mt-[8px] text-[#fff] px-[8px] flex-1 flex">
          <div className="bg-[#121212] rounded-[8px] px-[16px] py-[12px] flex-1">
            <div className="flex justify-between items-center">
              <div className="opacity-70 hover:opacity-100 transition-opacity pl-[8px]">
                <Link to="/">
                  <div className="flex items-center gap-[12px]">
                    <LibraryIcon />
                    <p>Your Library</p>
                  </div>
                </Link>
              </div>
              <div className="flex items-center gap-[8px]">
                <div className="opacity-70 rounded-[50%] p-[8px] cursor-pointer hover:opacity-100 hover:bg-[#1a1a1a] transition-all">
                  <CreateIcon />
                </div>
                <div className="opacity-70 rounded-[50%] p-[8px] cursor-pointer hover:opacity-100 hover:bg-[#1a1a1a] transition-all">
                  <Enlarge />
                </div>
              </div>
            </div>

            <div className="text-[#fff] text-[13px] font-medium rounded-[32px] pt-[20px] pb-[12px]">
              <p className="bg-[#ffffff12] rounded-[32px] w-fit py-[6px] px-[14px]">
                Playlists
              </p>
            </div>
            <div className="mb-[12px] ">
              <div className="w-fit opacity-70 hover:bg-[#ffffff12] cursor-pointer px-[8px] py-[8px] rounded-[50%]">
                <SearchIcon height={17} width={17} />
              </div>
            </div>

            <div className="liked-box flex items-center py-[8px]">
              <div className="liked-icon">
                <HeartIcon />
              </div>
              <div>
                <p className="text-[14px] font-semibold">Liked Songs</p>
                <p className="text-[12px] text-[#a7a7a7]">Playlist: 1 songs</p>
              </div>
            </div>
          </div>
          {/* -------- */}
          <div className="install flex items-center fixed bottom-0 px-[24px] py-[8px] text-[#fff]">
            <InstallIcon />
            <p className="ml-[16px]">Install App</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
