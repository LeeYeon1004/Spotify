import { useEffect, useState } from "react";
import { Song } from "../../../api/api";
import { LikeIcon, PlayIcon } from "../../icons/playing.icons";
import { LikedIcon } from "../../icons/sidebar.icons";
import { Audios as AudiosInterface } from "../../models/home.interface";
import "./queue.style.scss";
import { useDispatch } from "react-redux";
import { onChangeSong } from "../../../redux-toolkit/slices/songSlice";

function Queue() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [songs, setSongs] = useState<AudiosInterface[]>(Song);
  const [nowplaying, setNowplaying] = useState<AudiosInterface>(Song[0]);
  const [liked, setLiked] = useState<boolean>(false);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(onChangeSong(Song[0]));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetNowplaying = (index: number) => {
    setNowplaying(Song[index]);
    dispatch(onChangeSong(Song[index]));
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
            <h3 className="flex items-center">{nowplaying?.title}</h3>
            <div className="flex items-center justify-end mr-[32px]">
              <div
                onClick={handleLiked}
                className="text-[#ffffffb3] mr-[32px] hidden group-hover:block"
              >
                {liked ? <LikedIcon /> : <LikeIcon />}
              </div>
              {nowplaying?.time}
            </div>
          </div>
        </div>
        {/* playlist */}
        <div className="playlist">
          <h3 className="text-[16px] font-bold text-[#a7a7a7] mt-[40px] mb-[8px]">
            Next song:
          </h3>
          {songs?.map((item, index) => (
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
              <h3 className="flex items-center">{item.title}</h3>
              <div className="flex items-center justify-end mr-[32px]">
                <div
                  onClick={handleLiked}
                  className="text-[#ffffffb3] mr-[32px] hidden group-hover:block"
                >
                  {liked ? <LikedIcon /> : <LikeIcon />}
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
