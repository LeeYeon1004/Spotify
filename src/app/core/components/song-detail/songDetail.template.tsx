import { useSelector } from "react-redux";
import { RootState } from "../../../redux-toolkit/store";
import TableList from "../table-list/tableList.template";
import "./songDetail.style.scss";
import { useState } from "react";
import { HeartIcon } from "../../icons/sidebar.icons";
import { LikeIcon, PlayIcon } from "../../icons/playing.icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import GifPlaying from "../../../assets/gif/playing.gif";

function SongDetail() {
  const optionCurrent = useSelector(
    (state: RootState) => state.songDetail.option
  );
  const isPlaying = useSelector((state: RootState) => state.played.played);
  const [liked, setLiked] = useState<boolean>(false);

  const handleLiked = () => setLiked(!liked);

  return (
    <div className="song-detail flex gap-[28px] px-[32px] mt-[20px]">
      <div className="group">
        <div>
          <img
            className="object-cover aspect-square w-[300px] rounded-[4px] group-hover:scale-img"
            src={optionCurrent.img}
            alt=""
          />
        </div>
        <div className="mt-[12px] text-center">
          <h2 className="text-[#fff] text-[18px] font-semibold">
            {optionCurrent.title}
          </h2>
          <p className="text-[12px] text-[#ffffff80]">{optionCurrent.singer}</p>
          <div className="mt-[16px]">
            <button className="text-[13px] text-[#fff] font-medium bg-[#1dd25e] px-[24px] py-[6px] rounded-[92px]">
              {isPlaying ? "PAUSE" : "PLAY"}
            </button>
            <div className="mt-[16px] flex gap-[12px] justify-center">
              <button
                onClick={handleLiked}
                className="bg-[#ffffff1a] text-[#cdccce] p-[10px] rounded-[100%]"
              >
                {liked ? <HeartIcon /> : <LikeIcon />}
              </button>
              <button className="bg-[#ffffff1a] text-[#cdccce] px-[11px] py-[6px] rounded-[100%]">
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div>
          <div className="now-playing">
            <h3 className="text-[16px] font-bold text-[#a7a7a7] my-[10px]">Song</h3>
            <div className="song-item group">
              <div className="text-[#fff] flex items-center">
                <PlayIcon />
              </div>
              <div className="flex items-center">
                <div className="relative w-[40px] h-[40px]">
                  <img
                    className="w-[full] h-[40px] object-cover"
                    src={optionCurrent?.img}
                    alt=""
                  />
                  {isPlaying}
                  <div
                    className={`gif-playing ${isPlaying ? "flex" : "hidden"}`}
                  >
                    <img
                      className="w-[16px] h-[16px]"
                      src={GifPlaying}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center ml-[16px]">
                  <h2 className="text-[16px]">{optionCurrent?.title}</h2>
                  <h3 className="hover:underline cursor-pointer">
                    {optionCurrent?.singer}
                  </h3>
                </div>
              </div>
              <h3 className="flex items-center">
                {optionCurrent?.description}
              </h3>
              <div className="flex items-center justify-end mr-[32px]">
                <div
                  onClick={handleLiked}
                  className="text-[#ffffffb3] mr-[32px] hidden group-hover:block"
                >
                  {liked ? <HeartIcon /> : <LikeIcon />}
                </div>
                {optionCurrent?.time}
              </div>
            </div>
          </div>
          <div className="mt-[20px]">
            <h3 className="text-[14px] mb-[8px] text-[#fff] leading-[20px] font-semibold">Information</h3>
            <div className="text-[13px] flex items-center gap-[16px]">
              <div className="text-[#ffffff80] flex flex-col gap-[8px]">
                <span>Album</span>
                <span>Singer</span>
              </div>
              <div className="flex flex-col gap-[8px] text-[#fff]">
                <span>{optionCurrent.description}</span>
                <span>{optionCurrent.singer}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <TableList />
        </div>
      </div>
    </div>
  );
}

export default SongDetail;
