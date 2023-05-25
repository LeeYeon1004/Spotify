import LikePlaylist from "../../assets/img/like-playlist.png";
import { PlayIcon } from "../../core/icons/home.icons";
import "./playList.style.scss";

function PlayList() {
  return (
    <div className="main-playlist absolute top-0 w-full rounded-[8px]">
      <div className="bg-[#5038a0] w-full min-h-[340px] max-h-[400px] px-[24px] pb-[24px] flex items-end  overflow-hidden rounded-t-[8px]">
        <div className="z-10 relative flex items-end gap-[24px]">
          <img
            className="w-[192px] h-[192px] img-shadow"
            src={LikePlaylist}
            alt=""
          />
          <div className="text-[#fff] text-[14px] font-semibold">
            <p>Playlist</p>
            <h2 className="text-[88px] font-bold">Liked Songs</h2>
            <p>Name playlist . 1 song</p>
          </div>
        </div>
        <span className="modal-playlist1"></span>
      </div>
      <span className="modal-playlist2"></span>
      <div className="relative z-10 text-[#fff]">
        <div className="p-[24px]">
          <div
            className="bg-[#1ed760] text-[#000] w-[56px] h-[56px] flex items-center justify-center rounded-[100%] p-[12px] cursor-default
            "
          >
            <PlayIcon />
          </div>
        </div>
        <div>
          <table>
            
          </table>
        </div>
      </div>
    </div>
  );
}

export default PlayList;
