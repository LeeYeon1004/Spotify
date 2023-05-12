import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  HomeIconChecked,
  InstallIcon,
  LibraryIcon,
  SearchIcon,
  SearchIconChecked,
} from "../../icons/sidebar.icons";

import "./sidebar.style.scss";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar max-w-[300px] w-full max-h-screen h-full fixed z-[2] bg-black">
      <div className="relative text-[15px] text-[#b3b3b3] text-left font-semibold w-full h-full flex flex-col">
        {/* -------- */}
        <div className="mt-[8px] px-[8px]">
          <ul className="bg-[#121212] rounded-[8px] px-[12px] py-[12px]">
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
                  <SearchIconChecked />
                ) : (
                  <SearchIcon />
                )}
                <p>Search</p>
              </li>
            </Link>
          </ul>
        </div>
        {/* ---------- */}
        <div className="mt-[8px] text-[#fff] px-[8px] flex-1 flex flex-col">
          <div className="bg-[#121212] rounded-[8px] py-[16px] px-[20px] flex-1">
            <div className="opacity-70 hover:opacity-100 transition-opacity">
              <Link to="/">
                <div className="flex items-center gap-[12px]">
                  <LibraryIcon />
                  <p>Your Library</p>
                </div>
              </Link>
            </div>
            {/* <button className="create-box flex items-center pl-[24px] py-[8px]">
              <div className="create-icon">
                <CreateIcon />
              </div>
              Create Playlist
            </button>
            <button className="liked-box flex items-center pl-[24px] py-[8px]">
              <div className="liked-icon">
                <HeartIcon />
              </div>
              Liked Song
            </button> */}
          </div>
          {/* <div className="separate">
            <p></p>
          </div> */}
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
