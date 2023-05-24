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
import Tooltip from "../../tooltip/tooltip.template";
import { useDispatch, useSelector } from "react-redux";
import { onChangeStatus } from "../../../../redux-toolkit/slices/playingSlice";
import { RootState } from "../../../../redux-toolkit/store";
import { onChangeSong } from "../../../../redux-toolkit/slices/songSlice";
import { Song } from "../../../../api/api";
import { onChangeShuffle } from "../../../../redux-toolkit/slices/shuffleSlice";

function Control() {
  const audioRef = useRef(new Audio());
  const volume = useSelector((state: RootState) => state.song.volume);
  const audioCurrent = useSelector((state: RootState) => state.song.songItem);
  const shuffleState = useSelector((state: RootState) => state.shuffle.shuffle);
  const played = useSelector((state: RootState) => state.played.played)

  const [range, setRange] = useState<number>(0);
  const [repeat, setRepeat] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState("00:00");
  const [timeRight, setTimeRight] = useState("00:00");
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      handleProgress();
    }, 200);
    if (played) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioCurrent, played]);

  useEffect(() => {
    audioRef.current.volume = volume / 100;
  }, [volume]);

  const handlePlayed = () => {
    dispatch(onChangeStatus(!played))
  };
  const handleShuffle = () => {
    dispatch(onChangeShuffle(!shuffleState));
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

    if (isNaN(duration) || isNaN(currentTime)) return;

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
  const handleSeek = (value: string) => {
    const duration = audioRef.current.duration;
    audioRef.current.currentTime = (duration / 1000) * +value;
  };
  const handleEnded = () => {
    if (repeat) {
      audioRef.current.play();
    } else {
      handleNext();
    }
  };
  const handleNext = () => {
    let indexSong = Math.floor(Math.random() * Song.length);
    if (shuffleState === true) {
      dispatch(onChangeSong(Song[indexSong]));
    } else {
      if (audioCurrent.id + 1 < Song.length) {
        dispatch(onChangeSong(Song[audioCurrent.id + 1]));
      } else {
        dispatch(onChangeSong(Song[0]));
      }
    }
  };
  const handlePrevious = () => {
    if (audioCurrent.id - 1 > 0) {
      dispatch(onChangeSong(Song[audioCurrent.id - 1]));
    } else {
      dispatch(onChangeSong(Song[Song.length - 1]));
    }
  };

  return (
    <div className="control">
      <audio
        ref={audioRef}
        src={audioCurrent.link}
        onTimeUpdate={() => {
          handleProgress();
        }}
        onEnded={handleEnded}
      />
      <div className="text-[#ffffffb3] flex gap-[12px]">
        <div
          onClick={handleShuffle}
          className={`${
            shuffleState === true ? "text-[#1DD25E] after-icon" : ""
          }`}
        >
          <div className="group relative w-[32px] h-[32px] flex justify-center items-center">
            <RandomIcon />
            <div className="hidden group-hover:flex">
              <Tooltip descriptions="Shuffle" />
            </div>
          </div>
        </div>
        <button onClick={handlePrevious}>
          <div className="group relative w-[32px] h-[32px] flex justify-center items-center">
            <PrevIcon />
            <div className="hidden group-hover:flex">
              <Tooltip descriptions="Previous" />
            </div>
          </div>
        </button>
        <button onClick={handlePlayed} className="play-btn">
          {played ? <PauseIcon /> : <PlayIcon />}
        </button>
        <button onClick={handleNext}>
          <div className="group relative w-[32px] h-[32px] flex justify-center items-center">
            <NextIcon />
            <div className="hidden group-hover:flex">
              <Tooltip descriptions="Next" />
            </div>
          </div>
        </button>
        <div
          onClick={handleRepeat}
          className={`${repeat === true ? "text-[#1DD25E] after-icon" : ""}`}
        >
          <div className="group relative w-[32px] h-[32px] flex justify-center items-center">
            <RepeatIcon />
            <div className="hidden group-hover:flex">
              <Tooltip descriptions="Repeat" />
            </div>
          </div>
        </div>
      </div>
      <div className="progress px-[12px]">
        <h3 className="time-left">{timeLeft}</h3>
        <div className="flex items-center w-full px-[12px]">
          <input
            className="w-full h-[3px]"
            type="range"
            value={range}
            onChange={(e) => handleSeek(e.target.value)}
            step="1"
            min="0"
            max="1000"
          />
        </div>
        <h3 className="time-right">{timeRight}</h3>
      </div>
    </div>
  );
}

export default Control;
