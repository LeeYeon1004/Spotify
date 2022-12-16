import { useState } from "react";
import { LikedIcon, LikeIcon, PicInPic } from "../../../icons/playing.icons";
import BtnControl from "../button-control/button.template";

function Disk() {
  const [liked, setLiked] = useState<boolean>(false);

  const handleLiked = () => setLiked(!liked);
  return (
    <div className="disk flex items-center px-[16px]">
      <img className="w-[56px] h-[56px]" src="" alt="" />
      <div className="mx-[14px]">
        <h3 className="text-[#fff] text-[14px] cursor-pointer hover:underline">
          Title
        </h3>
        <p className="text-[#b3b3b3] text-[11px] cursor-pointer hover:underline">
          Singer
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
