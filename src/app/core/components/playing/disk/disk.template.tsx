import { useState } from "react";
import { LikedIcon, LikeIcon, PicInPic } from "../../../icons/playing.icons";
import Tooltip from "../../tooltip/tooltip.template";
import { useSelector } from "react-redux";
import "./disk.style.scss";

function Disk() {
  const [liked, setLiked] = useState<boolean>(false);
  const song = useSelector((state: any) => state.song.songItem);
  const isPlaying = useSelector((state: any) => state.played.played);

  const handleLiked = () => setLiked(!liked);

  return (
    <div className="disk flex items-center px-[16px]">
      <div className="rounded-[4px] overflow-hidden">
        <img
          className={isPlaying ? `playing` : `w-[56px] h-[56px]`}
          src={song.img}
          alt=""
        />
      </div>
      <div className="mx-[14px]">
        <h3 className="title text-[#fff] whitespace-nowrap text-[13px] cursor-pointer hover:underline">
          {song.title}
        </h3>
        <p className="text-[#b3b3b3] text-[10px] cursor-pointer hover:underline">
          {song.singer}
        </p>
      </div>
      <div className="flex items-center">
        <div onClick={handleLiked} className="text-[#ffffffb3]">
          <div className="group relative w-[32px] h-[32px] flex justify-center items-center">
            {liked ? <LikedIcon /> : <LikeIcon />}
            <div className="hidden group-hover:flex">
              <Tooltip descriptions="Save to Your library" />
            </div>
          </div>
        </div>
        <div className="text-[#ffffffb3]">
          <div className="group relative w-[32px] h-[32px] flex justify-center items-center">
            <PicInPic />
            <div className="hidden group-hover:flex">
              <Tooltip descriptions="Picture in picture" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Disk;
