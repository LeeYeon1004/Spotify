import { useEffect, useState } from "react";
import { Song } from "../../api/api";
import { PlayIcon } from "../../core/icons/playing.icons";
import { Audios as AudiosInterface } from "../../core/models/home.interface";
import "./queue.style.scss";
import { useDispatch, useSelector } from "react-redux";
import { onChangeSong } from "../../redux-toolkit/slices/songSlice";
import { onChangeLoading } from "../../redux-toolkit/slices/loadingSlice";
import { RootState } from "../../redux-toolkit/store";
import GifPlaying from "../../assets/gif/playing.gif";
import SetLiked from "../../core/components/set-like/setLike.template";
import { onChangeStatus } from "../../redux-toolkit/slices/playingSlice";

function Queue() {
  const audioCurrent = useSelector((state: RootState) => state.song.songItem);
  const shuffle = useSelector((state: RootState) => state.shuffle.shuffle);
  const isPlaying = useSelector((state: any) => state.played.played);
  const [nowplaying, setNowplaying] = useState<AudiosInterface>(audioCurrent);
  const [nextSong, setNextSong] = useState<AudiosInterface>(Song[1]);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (audioCurrent.id + 1 < Song.length) {
      setNextSong(Song[audioCurrent.id + 1]);
    } else {
      setNextSong(Song[0]);
    }
  }, [audioCurrent]);

  const handleGetNowplaying = (index: number) => {
    setNowplaying(Song[index]);
    dispatch(onChangeSong(Song[index]));
    dispatch(onChangeStatus(true));
    dispatch(onChangeLoading(true));
  };

  return (
    <div className="queue-box text-[#fff]">
      <div className="mt-[40px] relative">
        <h2 className="title text-[24px] font-bold mb-[16px]">Queue</h2>
        {/* now playing */}
        <div className="now-playing">
          <h3 className="text-[16px] font-bold text-[#a7a7a7]">Now playing</h3>
          <div className="flex items-center">
            <div className="song-item group flex-1">
              <div className="text-[#fff] flex items-center">
                <PlayIcon />
              </div>
              <div className="flex items-center">
                <div className="relative w-[40px] h-[40px]">
                  <img
                    className="w-[full] h-[40px] object-cover"
                    src={nowplaying?.img}
                    alt=""
                  />
                  {isPlaying}
                  <div
                    className={`gif-playing ${isPlaying ? "flex" : "hidden"}`}
                  >
                    <img
                      className="w-[16px] h-[16px]"
                      src={GifPlaying}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center ml-[16px]">
                  <h2 className="text-[16px]">{nowplaying?.title}</h2>
                  <h3 className="hover:underline cursor-pointer">
                    {nowplaying?.singer}
                  </h3>
                </div>
              </div>
              <h3 className="flex items-center">{nowplaying?.description}</h3>
            </div>
            <div className="flex items-center justify-end mr-[32px]">
              <span className="mr-[32px]">
                <SetLiked />
              </span>
              {nowplaying?.time}
            </div>
          </div>
        </div>
        {/* playlist */}
        <div className="playlist">
          <h3 className="text-[16px] font-bold text-[#a7a7a7] mt-[40px] mb-[8px] flex items-center">
            Next song:
            <p className="hover:underline ml-[4px]">
              {shuffle === true ? "" : nextSong.title}
            </p>
          </h3>
          {Song?.map((item, index) => (
            <div
              key={index}
              className="group flex items-center hover:bg-[#ffffff1a] text-[#fff] rounded-[4px]"
            >
              <div
                onClick={() => handleGetNowplaying(index)}
                className="song-item"
              >
                <span className="text-[#fff] flex items-center">
                  {index + 1}
                </span>
                <div className="flex items-center">
                  <img
                    className="w-[40px] h-[40px] mr-[16px] object-cover"
                    src={item.img}
                    alt=""
                  />
                  <div className="flex flex-col justify-center">
                    <h2 className="text-[16px] text-[#fff]">{item.title}</h2>
                    <h3 className="hover:underline cursor-pointer">
                      {item.singer}
                    </h3>
                  </div>
                </div>
                <h3 className="flex items-center">{item.description}</h3>
              </div>
              <div className="flex items-center justify-end mr-[32px] relative">
                <span className="opacity-0 group-hover:opacity-100 mr-[32px]">
                  <SetLiked />
                </span>
                {item.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Queue;
