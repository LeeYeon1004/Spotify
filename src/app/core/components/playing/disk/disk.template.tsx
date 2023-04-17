import { useState } from "react";
import { LikedIcon, LikeIcon, PicInPic } from "../../../icons/playing.icons";
import BtnControl from "../control/button-control/button.template";
import { useSelector } from "react-redux";

function Disk() {
  const [liked, setLiked] = useState<boolean>(false);
  const song = useSelector((state: any) => state.song.song);

  const handleLiked = () => setLiked(!liked);
  return (
    <div className="disk flex items-center px-[16px]">
      <img className="w-[56px] h-[56px]" src={song.img} alt="" />
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
