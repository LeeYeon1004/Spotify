import { Link } from "react-router-dom";
import {
  CreateIcon,
  HomeIcon,
  InstallIcon,
  LibraryIcon,
  LikedIcon,
  Logo,
  SearchIcon,
} from "../../icons/sidebar.icons";

import "./sidebar.style.scss";

function Sidebar() {
  return (
    <div className="sidebar max-w-[280px] w-full max-h-screen h-full fixed z-[2] bg-black">
      <div className="relative text-[14px] text-[#b3b3b3] text-left font-bold w-full">
        <Link to="/home">
          <div className="pt-[24px] pl-[24px] pb-[8px]">
            <Logo />
          </div>
        </Link>
        {/* -------- */}
        <div className="mt-[18px]">
          <ul>
            <Link to="/home">
              <li>
                <HomeIcon />
                <p>Home</p>
              </li>
            </Link>
            <Link to="/search">
              <li>
                <SearchIcon />
                <p>Search</p>
              </li>
            </Link>
            <Link to="/">
              <li>
                <LibraryIcon />
                <p>Your Library</p>
              </li>
            </Link>
          </ul>
        </div>
        {/* ---------- */}
        <div className="mt-[24px] text-[#fff]">
          <button className="create-box flex items-center pl-[24px] py-[8px]">
            <div className="create-icon">
              <CreateIcon />
            </div>
            Create Playlist
          </button>
          <button className="liked-box flex items-center pl-[24px] py-[8px]">
            <div className="liked-icon">
              <LikedIcon />
            </div>
            Liked Song
          </button>
          <div className="separate">
            <p></p>
          </div>
        </div>
        {/* -------- */}
        <div className="install flex items-center fixed bottom-0 px-[24px] py-[8px] text-[#fff]">
          <InstallIcon />
          <p className="ml-[16px]">Install App</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
