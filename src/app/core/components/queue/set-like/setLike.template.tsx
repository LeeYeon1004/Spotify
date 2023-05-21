import { useState } from "react";
import { LikeIcon } from "../../../icons/playing.icons";
import { HeartIcon } from "../../../icons/sidebar.icons";

function SetLiked() {
  const [liked, setLiked] = useState<boolean>(false);
  const handleLiked = () => setLiked(!liked);
  
  return (
    <div
      onClick={handleLiked}
      className="text-[#ffffffb3] mr-[32px]"
    >
      {liked ? <HeartIcon /> : <LikeIcon />}
    </div>
  );
}

export default SetLiked;
