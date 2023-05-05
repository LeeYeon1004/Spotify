import { useState } from "react";
import { LikedIcon, LikeIcon, PicInPic } from "../../../icons/playing.icons";
import BtnControl from "../control/button-control/button.template";
import { useSelector } from "react-redux";
import "./disk.style.scss"

function Disk() {
  const [liked, setLiked] = useState<boolean>(false);
  const song = useSelector((state: any) => state.song.songItem);
  const isPlaying = useSelector((state: any) => state.played.played);

  const handleLiked = () => setLiked(!liked);
  console.log(song);

  return (
    <div className="disk flex items-center px-[16px]">
      <div>
        <img className={isPlaying ? `playing`: `w-[56px] h-[56px]`} src={song.img} alt="" />
      </div>
      <div className="mx-[14px]">
        <h3 className="text-[#fff] text-[14px] cursor-pointer hover:underline">
          {song.title}
        </h3>
        <p className="text-[#b3b3b3] text-[11px] cursor-pointer hover:underline">
          {song.singer}
        </p>
      </div>
      <div className="flex items-center">
        <div onClick={handleLiked} className="text-[#ffffffb3]">
          <BtnControl descriptions="Save to Your library">
            {liked ? <LikedIcon /> : <LikeIcon />}
          </BtnControl>
        </div>
        <div className="text-[#ffffffb3]">
          <BtnControl descriptions="Picture in picture">
            <PicInPic />
          </BtnControl>
        </div>
      </div>
    </div>
  );
}

export default Disk;
