import { useEffect, useState } from "react";
import {
  DeviceIcon,
  QueueIcon,
  SpickerIcon,
} from "../../../icons/playing.icons";
import BtnControl from "../button-control/button.template";

function Volume() {
  const [volume, setVolume] = useState("0");
  useEffect(() => {
    console.log(volume);
  }, [volume]);
  return (
    <div className="flex items-center justify-end text-[#a7a7a7]">
      <BtnControl descriptions="Queue">
        <QueueIcon />
      </BtnControl>
      <BtnControl descriptions="Connect to Device">
        <DeviceIcon />
      </BtnControl>
      <BtnControl descriptions="Mute">
        <SpickerIcon />
      </BtnControl>
      <input
        className="w-[93px] h-[3px]"
        type="range"
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
        step="1"
        min="0"
        max="100"
        readOnly
      />
    </div>
  );
}

export default Volume;
