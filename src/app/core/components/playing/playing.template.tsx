import { useSelector } from "react-redux";
import Control from "./control/control.template";
import Disk from "./disk/disk.template";
import "./playing.style.scss";
import Volume from "./volume/volume.template";
import { selectSong } from "../../../redux-toolkit/song/songSlice";
import { useAppSelector } from "../../../redux-toolkit/hook";

function Playing() {
  const song = useAppSelector((state: any) => state.song.onChangeSong);

  const log = () => {
    console.log(song);
    
  }

  return (
    <div className="box bg-[#181818] flex items-center">
      <button onClick={log}>btn {song}</button>
      <div className="w-[30%]">
        <Disk />
      </div>
      <div className="w-[40%]">
        <Control />
      </div>
      <div className="w-[30%] pr-[16px]">
        <Volume />
      </div>
    </div>
  );
}

export default Playing;
