import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LikePlaylist from "../../assets/img/like-playlist.png";
import { PlayIcon } from "../../core/icons/home.icons";
import {
  PauseIcon,
  PlayIcon as PlayIconQueue,
} from "../../core/icons/playing.icons";
import "./playList.style.scss";
import {
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux-toolkit/store";
import { onChangeSong } from "../../redux-toolkit/slices/songSlice";
import { Audios } from "../../core/models/home.interface";
import { onChangeStatus } from "../../redux-toolkit/slices/playingSlice";
import { onChangeLoading } from "../../redux-toolkit/slices/loadingSlice";
import GifPlaying from "../../assets/gif/playing.gif";
import SetLiked from "../../core/components/set-like/setLike.template";

function PlayList() {
  const dispatch = useDispatch();
  const likedSong = useSelector(
    (state: RootState) => state.likedSlice.LikedPlaylistSong
  );
  const isPlaying = useSelector((state: any) => state.played.played);
  const audioCurrent = useSelector((state: RootState) => state.song.songItem);

  const handlePlay = (item: Audios) => {
    dispatch(onChangeSong(item));
    dispatch(onChangeStatus(true));
    dispatch(onChangeLoading(true));
  };

  return (
    <div className="main-playlist absolute top-0 w-full rounded-[8px]">
      <div className="bg-[#5038a0] w-full min-h-[340px] max-h-[400px] px-[24px] pb-[24px] flex items-end  overflow-hidden rounded-t-[8px]">
        <div className="z-10 relative flex items-end gap-[24px]">
          <img
            className="w-[232px] h-[232px] img-shadow"
            src={LikePlaylist}
            alt=""
          />

          <div className="text-[#fff] text-[14px] font-semibold">
            <p>Playlist</p>
            <h2 className="text-[88px] font-bold">Liked Songs</h2>
            <p>Name playlist . {likedSong.length} song</p>
          </div>
        </div>
        <span className="modal-playlist1"></span>
      </div>
      <span className="modal-playlist2"></span>
      <div className="relative z-10 text-[#fff] px-[24px]">
        <div className="py-[24px]">
          {isPlaying ? (
            <div
              className="bg-[#1ed760] text-[#000] w-[56px] h-[56px] flex items-center justify-center rounded-[100%] p-[12px] hover:scale-[1.05] cursor-pointer
            "
              onClick={() => dispatch(onChangeStatus(false))}
            >
              <PauseIcon />
            </div>
          ) : (
            <div
              className="bg-[#1ed760] text-[#000] w-[56px] h-[56px] flex items-center justify-center rounded-[100%] p-[12px] hover:scale-[1.05] cursor-pointer
            "
              onClick={() => dispatch(onChangeStatus(true))}
            >
              <PlayIcon />
            </div>
          )}
        </div>
        <div className="text-[#b3b3b3] text-[14px]">
          <div className="head-table flex items-center px-[16px] py-[4px]">
            <div className="grid-table">
              <p className="text-center">#</p>
              <p>Title</p>
              <p>Album</p>
            </div>
            <p className="text-center min-w-[120px]">
              <FontAwesomeIcon icon={faClockRotateLeft} />
            </p>
          </div>
          <div>
            {likedSong.map((item, index) => (
              <div
                key={index}
                className="flex items-center body-table group/body hover:bg-[#ffffff1a]"
              >
                <div
                  className="song-item px-[16px] py-[4px]"
                  onClick={() => handlePlay(item)}
                >
                  <p className="flex items-center relative">
                    <span
                      className={`absolute opacity-0 group-hover/body:text-[#fff] group-hover/body:opacity-100 ${
                        isPlaying && audioCurrent === item
                          ? "text-[#fff] opacity-100"
                          : ""
                      }`}
                    >
                      <PlayIconQueue />
                    </span>
                    <span
                      className={`absolute group-hover/body:opacity-0 ${
                        isPlaying && audioCurrent === item
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                    >
                      {index + 1}
                    </span>
                  </p>
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        className="w-[40px] h-[40px] object-cover"
                        src={item.img}
                        alt=""
                      />
                      <div
                        className={`gif-playing ${
                          isPlaying && audioCurrent === item ? "flex" : "hidden"
                        }`}
                      >
                        <img
                          className="w-[16px] h-[16px]"
                          src={GifPlaying}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center ml-[16px]">
                      <h2
                        className={`text-[16px] ${
                          audioCurrent === item
                            ? "text-[#1ed760]"
                            : "text-[#fff]"
                        }`}
                      >
                        {item.title}
                      </h2>
                      <h3 className="hover:underline cursor-pointer">
                        {item.singer}
                      </h3>
                    </div>
                  </div>
                  <h3 className="flex items-center">{item.description}</h3>
                </div>
                <div className="flex items-center justify-self-end gap-[16px] min-w-[120px]">
                  <SetLiked itemSong={item} />
                  03:00
                  {/* <span className="opacity-0 group-hover/body:opacity-100 text-[20px] text-[#fff]">
                    <FontAwesomeIcon icon={faEllipsis} />
                  </span> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayList;
