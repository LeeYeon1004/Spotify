import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Song } from "../../../api/api";
import "./tableList.style.scss";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import SetLiked from "../set-like/setLike.template";
import { useDispatch, useSelector } from "react-redux";
import { onChangeSong } from "../../../redux-toolkit/slices/songSlice";
import GifPlaying from "../../../assets/gif/playing.gif";
import { RootState } from "../../../redux-toolkit/store";
import { onChangeStatus } from "../../../redux-toolkit/slices/playingSlice";
import { Audios } from "../../models/home.interface";

function TableList() {
  const dispatch = useDispatch();
  const audioCurrent = useSelector((state: RootState) => state.song.songItem);
  const isPlayed = useSelector((state: RootState) => state.played.played);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePlayed = (i: number) => {
    dispatch(onChangeSong(Song[i]));
    dispatch(onChangeStatus(true));
  };
  return (
    <div className="table-list text-[#fff] w-full">
      <h2 className="text-[20px] font-semibold mb-[20px]">
        Maybe you are interested:
      </h2>
      <div>
        {Song.map((item: Audios, index) => (
          <div
            key={index}
            className="music-item flex items-center text-[12px] text-[#ffffff80] w-full group"
          >
            <div
              className="flex item-center flex-1 gap-[16px]"
              onClick={() => handlePlayed(index)}
            >
              <span className="flex items-center">
                <FontAwesomeIcon icon={faMusic} />
              </span>
              <div className="flex items-center gap-[8px]">
                <div className="relative">
                  <img
                    className="w-[40px] h-[40px] rounded-[2px]"
                    src={item.img}
                    alt=""
                  />
                  <div
                    className={`gif-playing ${
                      audioCurrent === item && isPlayed ? "flex" : "hidden"
                    }`}
                  >
                    <img
                      className="w-[16px] h-[16px]"
                      src={GifPlaying}
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[14px] text-[#fff] font-semibold">
                    {item.title}
                  </p>
                  <p>{item.singer}</p>
                </div>
              </div>
            </div>
            <div className="flex item-center flex-1 justify-between">
              <div>{item.description}</div>
              <div className="flex items-center justify-end mr-[32px] relative">
                <span className="opacity-0 group-hover:opacity-100 mr-[32px]">
                  <SetLiked itemSong={item} />
                </span>
                {item.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableList;
