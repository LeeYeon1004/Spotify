import { LikeIcon, PicInPic } from "../../../icons/playing.icons";

function Disk() {
  return (
    <div className="disk flex items-center px-[16px]">
      <img className="w-[56px] h-[56px]" src="" alt="music img" />
      <div className="mx-[14px]">
        <h3 className="text-[#fff] text-[14px] font-medium cursor-pointer hover:underline">
          Title
        </h3>
        <p className="text-[#b3b3b3] text-[11px] cursor-pointer hover:underline">
          Singer
        </p>
      </div>
      <div className="actions flex">
        <button className="text-[#ffffffb3] w-[32px] h-[32px]">
          <LikeIcon />
        </button>
        <button className="text-[#ffffffb3] w-[32px] h-[32px]">
          <PicInPic />
        </button>
      </div>
    </div>
  );
}

export default Disk;
