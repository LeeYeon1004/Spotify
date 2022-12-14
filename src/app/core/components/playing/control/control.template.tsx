import { useEffect, useState } from "react";
import {
  NextIcon,
  PauseIcon,
  PlayIcon,
  PrevIcon,
  RandomIcon,
  RepeatIcon,
} from "../../../icons/playing.icons";
import BtnControl from "../button-control/button.template";

function Control() {
  const [range, setRange] = useState("0");
  const [play, setPlay] = useState<boolean>(false);
  useEffect(() => {
    console.log(range);
  }, [range]);

  const handlePlayed = () => {
    setPlay(!play);
  };

  return (
    <div className="control">
      <div className="text-[#ffffffb3] flex gap-[12px]">
        <div>
          <BtnControl descriptions="Shuffle">
            <RandomIcon />
          </BtnControl>
        </div>
        <div>
          <BtnControl descriptions="Previous">
            <PrevIcon />
          </BtnControl>
        </div>
        <button onClick={handlePlayed} className="play-btn">
          {play ? <PauseIcon /> : <PlayIcon />}
        </button>
        <div>
          <BtnControl descriptions="Next">
            <NextIcon />
          </BtnControl>
        </div>
        <div>
          <BtnControl descriptions="Repeat">
            <RepeatIcon />
          </BtnControl>
        </div>
      </div>
      <div className="progress px-[12px]">
        <h3 className="time-left">00:00</h3>
        <div className="flex items-center w-full px-[12px]">
          <input
            className="w-full h-[3px]"
            type="range"
            value={range}
            onChange={(e) => setRange(e.target.value)}
            step="1"
            min="0"
            max="1000"
            readOnly
          />
        </div>
        <h3 className="time-right">00:00</h3>
      </div>
    </div>
  );
}

export default Control;
