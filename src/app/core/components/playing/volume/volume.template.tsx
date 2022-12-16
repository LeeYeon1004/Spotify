import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  DeviceIcon,
  MuteIcon,
  QueueIcon,
  SpickerIcon,
} from "../../../icons/playing.icons";
import BtnControl from "../button-control/button.template";

function Volume() {
  const [volume, setVolume] = useState("0");
  const [mute, setMute] = useState<boolean>(false);

  useEffect(() => {
    if (volume === "0") {
      setMute(true);
    } else {
      setMute(false);
    }
  }, [volume]);

  const handleMute = () => {
    setMute(!mute);
    if (mute === false) {
      setVolume("0");
    } else {
      setVolume("25");
    }
  };

  return (
    <div className="flex items-center justify-end text-[#a7a7a7]">
      <button>
        <Link to="/queue">
          <BtnControl descriptions="Queue">
            <QueueIcon />
          </BtnControl>
        </Link>
      </button>
      <BtnControl descriptions="Connect to Device">
        <DeviceIcon />
      </BtnControl>
      <div onClick={handleMute}>
        <BtnControl descriptions="Mute">
          {mute === false ? <SpickerIcon /> : <MuteIcon />}
        </BtnControl>
      </div>
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
