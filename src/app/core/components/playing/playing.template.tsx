import Control from "./control/control.template";
import Disk from "./disk/disk.template";
import "./playing.style.scss";

function Playing() {
  return (
    <div className="box bg-[#181818] flex items-center">
      <div className="w-[30%]">
        <Disk />
      </div>
      <div className="w-[40%]">
        <Control />
      </div>
    </div>
  );
}

export default Playing;
