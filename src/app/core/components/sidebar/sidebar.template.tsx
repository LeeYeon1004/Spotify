import { Link, useLocation } from "react-router-dom";
import {
  Enlarge,
  HomeIcon,
  HomeIconChecked,
  LibraryIcon,
  SearchIcon,
  SearchIconChecked,
} from "../../icons/sidebar.icons";

import "./sidebar.style.scss";
import { CreateIcon } from "../../icons/sidebar.icons";
import { DisLikedIcon } from "../../icons/playing.icons";
import { RootState } from "../../../redux-toolkit/store";
import { useSelector } from "react-redux";

function Sidebar() {
  const location = useLocation();
  const likedSong = useSelector(
    (state: RootState) => state.likedSlice.LikedPlaylistSong
  );

  return (
    <div className="sidebar max-w-[300px] w-full max-h-screen h-full fixed z-[2] bg-black">
      <div className="relative text-[15px] text-[#b3b3b3] text-left font-semibold w-full h-full flex flex-col">
        {/* -------- */}
        <div className="mt-[8px] px-[8px]">
          <ul className="bg-[#ffffff1a] rounded-[8px] px-[16px] py-[8px]">
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
          <div className="bg-[#ffffff1a] rounded-[8px] px-[14px] py-[12px] flex-1">
            <div className="flex justify-between items-center">
              <div className="opacity-70 hover:opacity-100 transition-opacity pl-[8px]">
                <div className="flex items-center gap-[12px]">
                  <LibraryIcon />
                  <p>Your Library</p>
                </div>
              </div>
              <div className="flex items-center gap-[8px]">
                <div className="cursor-not-allowed opacity-70 rounded-[50%] p-[8px] hover:opacity-100 hover:bg-[#1a1a1a] transition-all">
                  <CreateIcon />
                </div>
                <div className="cursor-not-allowed opacity-70 rounded-[50%] p-[8px] hover:opacity-100 hover:bg-[#1a1a1a] transition-all">
                  <Enlarge />
                </div>
              </div>
            </div>
            <Link to={`/playlist`}>
              <div className="cursor-default text-[#fff] text-[13px] font-medium rounded-[32px] pt-[20px] pb-[12px]">
                <p className="bg-[#ffffff12] rounded-[32px] w-fit py-[6px] px-[14px]">
                  Playlists
                </p>
              </div>
            </Link>
            <div className="mb-[12px] ">
              <div className="cursor-not-allowed w-fit opacity-70 hover:bg-[#ffffff12] px-[8px] py-[8px] rounded-[50%]">
                <SearchIcon height={17} width={17} />
              </div>
            </div>

            <Link to={`/playlist`}>
              <div
                className={`liked-box flex items-center py-[8px] px-[8px] hover:bg-[#ffffff12] rounded-[4px] ${
                  location.pathname === "/playlist" ? "bg-[#ffffff12]" : ""
                }`}
              >
                <div className="liked-icon">
                  <DisLikedIcon />
                </div>
                <div>
                  <p
                    className={`text-[16px] font-medium ${
                      location.pathname === "/playlist" ? "text-[#1ed760]" : ""
                    }`}
                  >
                    Liked Songs
                  </p>
                  <p className="text-[12px] text-[#a7a7a7]">
                    Playlist: {likedSong.length} songs
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* -------- */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
