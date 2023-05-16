import Control from "./control/control.template";
import Disk from "./disk/disk.template";
import "./playing.style.scss";
import Volume from "./volume/volume.template";

function Playing() {

  return (
    <div className="box flex items-center">
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
