import { useEffect, useState } from "react";
import {
  NextIcon,
  PlayIcon,
  PrevIcon,
  RandomIcon,
  RepeatIcon,
} from "../../../icons/playing.icons";

function Control() {
  const [range, setRange] = useState("0");
  useEffect(() => {
    console.log(range);
  }, [range]);
  return (
    <div className="control">
      <div className="text-[#ffffffb3] flex gap-[12px]">
        <button>
          <RandomIcon />
        </button>
        <button>
          <PrevIcon />
        </button>
        <button className="play-btn">
          <PlayIcon />
        </button>
        <button>
          <NextIcon />
        </button>
        <button>
          <RepeatIcon />
        </button>
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
