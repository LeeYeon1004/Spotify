import {
  PicInPic,
} from "../../../icons/playing.icons";
import Tooltip from "../../tooltip/tooltip.template";
import { useDispatch, useSelector } from "react-redux";
import "./disk.style.scss";
import { Link } from "react-router-dom";
import { onChangeOption } from "../../../../redux-toolkit/slices/songDetailSlice";
import SetLiked from "../../set-like/setLike.template";

function Disk() {
  const audioCurrent = useSelector((state: any) => state.song.songItem);
  const isPlaying = useSelector((state: any) => state.played.played);
  const dispatch = useDispatch();

  const changeOption = () => {
    dispatch(onChangeOption(audioCurrent));
  };

  return (
    <div className="disk flex items-center px-[16px]">
      <div className="rounded-[4px] overflow-hidden">
        <img
          className={isPlaying ? `playing` : `w-[56px] h-[56px]`}
          src={audioCurrent.img}
          alt=""
        />
      </div>
      <Link to={`/song-detail/${audioCurrent.title}`} onClick={changeOption}>
        <div className="mx-[14px]">
          <h3 className="title text-[#fff] whitespace-nowrap text-[13px] cursor-pointer hover:underline">
            {audioCurrent.title}
          </h3>
          <p className="text-[#b3b3b3] text-[10px] cursor-pointer hover:underline">
            {audioCurrent.singer}
          </p>
        </div>
      </Link>
      <div className="flex items-center">
        <div className="text-[#ffffffb3]">
          <div className="group relative w-[32px] h-[32px] flex justify-center items-center">
            <SetLiked itemSong={audioCurrent} />
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
