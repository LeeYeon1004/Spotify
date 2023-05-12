import { useEffect, useState } from "react";
import { Song } from "../../../api/api";
import { LikeIcon, PlayIcon } from "../../icons/playing.icons";
import { HeartIcon } from "../../icons/sidebar.icons";
import { Audios as AudiosInterface } from "../../models/home.interface";
import "./queue.style.scss";
import { useDispatch, useSelector } from "react-redux";
import { onChangeSong } from "../../../redux-toolkit/slices/songSlice";
import { onChangeLoading } from "../../../redux-toolkit/slices/loadingSlice";
import { RootState } from "../../../redux-toolkit/store";

function Queue() {
  const audioCurrent = useSelector((state: RootState) => state.song.songItem);
  const shuffle = useSelector((state: RootState) => state.shuffle.shuffle);
  const [nowplaying, setNowplaying] = useState<AudiosInterface>(Song[0]);
  const [nextSong, setNextSong] = useState<AudiosInterface>(Song[1]);
  const [liked, setLiked] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onChangeSong(Song[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    dispatch(onChangeLoading(true));
  };

  const handleLiked = () => setLiked(!liked);

  return (
    <div className="queue-box text-[#fff]">
      <div className="max-w-[1955px] mt-[40px] relative">
        <h2 className="title text-[24px] font-bold mb-[16px]">Queue</h2>
        {/* now playing */}
        <div className="now-playing">
          <h3 className="text-[16px] font-bold text-[#a7a7a7]">Now playing</h3>
          <div className="song-item group">
            <div className="text-[#fff] flex items-center">
              <PlayIcon />
            </div>
            <div className="flex items-center">
              <img
                className="w-[40px] h-[40px] mr-[16px] object-cover"
                src={nowplaying?.img}
                alt=""
              />
              <div className="flex flex-col justify-center">
                <h2 className="text-[16px]">{nowplaying?.title}</h2>
                <h3 className="hover:underline cursor-pointer">
                  {nowplaying?.singer}
                </h3>
              </div>
            </div>
            <h3 className="flex items-center">{nowplaying?.description}</h3>
            <div className="flex items-center justify-end mr-[32px]">
              <div
                onClick={handleLiked}
                className="text-[#ffffffb3] mr-[32px] hidden group-hover:block"
              >
                {liked ? <HeartIcon /> : <LikeIcon />}
              </div>
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
              onClick={() => handleGetNowplaying(index)}
              className="song-item group"
            >
              <div className="text-[#fff] flex items-center">{index + 1}</div>
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
              <div className="flex items-center justify-end mr-[32px]">
                <div
                  onClick={handleLiked}
                  className="text-[#ffffffb3] mr-[32px] hidden group-hover:block"
                >
                  {liked ? <HeartIcon /> : <LikeIcon />}
                </div>
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
