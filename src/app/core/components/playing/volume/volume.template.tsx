import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  DeviceIcon,
  MuteIcon,
  QueueIcon,
  SpickerIcon,
} from "../../../icons/playing.icons";
import BtnControl from "../control/button-control/button.template";
import { useDispatch } from "react-redux";
import { onChangeVolume } from "../../../../redux-toolkit/slices/songSlice";
import { useLocation } from "react-router-dom";

function Volume() {
  const [volume, setVolume] = useState("25");
  const [mute, setMute] = useState<boolean>(false);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (volume === "0") {
      setMute(true);
    } else {
      setMute(false);
    }
    dispatch(onChangeVolume(+volume));
  }, [dispatch, volume]);
  useEffect(() => {
    if (mute === true) {
      setVolume("0");
    } else {
      setVolume("25");
    }
  }, [mute]);

  const handleMute = () => {
    setMute(!mute);
  };

  return (
    <div className="flex items-center justify-end text-[#a7a7a7]">
      <div className={`${location.pathname === "/queue" ? "text-[#1DD25E] after-icon" : ""}`}>
        <Link to="/queue">
          <BtnControl descriptions="Queue">
            <QueueIcon />
          </BtnControl>
        </Link>
      </div>
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
