import { useEffect, useState } from "react";
import { Audios } from "../../../api/api";
import { PlayIcon } from "../../icons/playing.icons";
import { Audios as AudiosInterface } from "../../models/home.interface";
import "./queue.style.scss";

function Queue() {
  const [songs, setSongs] = useState<AudiosInterface[]>();
  const [nowplaying, setNowplaying] = useState<AudiosInterface>(Audios[0]);

  useEffect(() => {
    setSongs(Audios);
  }, []);

  const handleGetNowplaying = (index: number) => {
    setNowplaying(Audios[index]);
  };

  return (
    <div className="queue-box text-[#fff]">
      <div className="max-w-[1955px] mt-[40px] relative">
        <h2 className="title text-[24px] font-bold mb-[16px]">Queue</h2>
        {/* now playing */}
        <div className="now-playing">
          <h3 className="text-[16px] font-bold text-[#a7a7a7]">Now playing</h3>
          <div className="song-item ">
            <div className="text-[#fff] flex items-center">
              <PlayIcon />
            </div>
            <div className="flex items-center">
              <img
                className="w-[40px] h-[40px] mr-[16px]"
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
            <p className="flex items-center">{nowplaying?.time}</p>
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
              className="song-item"
            >
              <div className="text-[#fff] flex items-center">{index + 1}</div>
              <div className="flex items-center">
                <img
                  className="w-[40px] h-[40px] mr-[16px]"
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
              <p className="flex items-center">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Queue;
