import "./control.style.scss";
import { useEffect, useRef, useState } from "react";
import {
  NextIcon,
  PauseIcon,
  PlayIcon,
  PrevIcon,
  RandomIcon,
  RepeatIcon,
} from "../../../icons/playing.icons";
import BtnControl from "./button-control/button.template";
import { useSelector } from "react-redux";
import crAudio from "../../../../assets/songs/1.mp3"

function Control() {
  const [range, setRange] = useState<any>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const [shuffle, setShuffle] = useState<boolean>(true);
  const [repeat, setRepeat] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState("00:00");
  const [timeRight, setTimeRight] = useState("00:00");
  const audio = useSelector((state: any) => state.song.song);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    if (playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  const handlePlayed = () => {
    setPlaying(!playing);
  };
  const handleShuffle = () => {
    setShuffle(!shuffle);
  };
  const handleRepeat = () => {
    setRepeat(!repeat);
  };
  const convertTime = (string: number, pad: string, length: number) => {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  };
  const handleProgress = () => {
    const duration = audioRef.current.duration;
    const currentTime = audioRef.current.currentTime;
    let minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime - minutes * 60);
    const progress = (currentTime / duration) * 1000;
    let finalTime =
      convertTime(minutes, "0", 2) + ":" + convertTime(seconds, "0", 2);
    setTimeLeft(finalTime);
    setTimeRight(
      convertTime(Math.floor(duration / 60), "0", 2) +
        ":" +
        convertTime(
          Math.floor(duration) - Math.floor(duration / 60) * 60,
          "0",
          2
        )
    );
    setRange(progress);
  };

  return (
    <div className="control">
      <audio
        id="audio"
        ref={audioRef}
        src={crAudio}
        onTimeUpdate={handleProgress}
      ></audio>
      <div className="text-[#ffffffb3] flex gap-[12px]">
        <div
          onClick={handleShuffle}
          className={`${shuffle === true ? "text-[#1DD25E] after-icon" : ""}`}
        >
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
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
        <div>
          <BtnControl descriptions="Next">
            <NextIcon />
          </BtnControl>
        </div>
        <div
          onClick={handleRepeat}
          className={`${repeat === true ? "text-[#1DD25E] after-icon" : ""}`}
        >
          <BtnControl descriptions="Repeat">
            <RepeatIcon />
          </BtnControl>
        </div>
      </div>
      <div className="progress px-[12px]">
        <h3 className="time-left">{timeLeft}</h3>
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
        <h3 className="time-right">{timeRight}</h3>
      </div>
    </div>
  );
}

export default Control;
