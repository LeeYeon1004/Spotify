import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAudios } from "../../../api/api.axios";
import { Audios } from "../../models/video.interface";
import "./mainHome.style.scss";

function MainHome() {
  const [audios, setAudios] = useState<Audios[]>([]);

  useEffect(() => {
    handleGetDatas();
  }, []);

  const handleGetDatas = async () => {
    const getVid = await getAudios();
    setAudios(getVid.slice(0, 8));
  };

  return (
    <div className="main-box">
      <section className="">
        <div className="flex items-center justify-between mb-[16px]">
          <h2 className="text-[#fff] text-[24px] font-bold tracking-[-1px] cursor-pointer hover:underline">
            Shows to try
          </h2>
          <Link to="">
            <p className="text-[#b3b3b3] font-bold text-[12px] cursor-pointer hover:underline">
              SEE ALL
            </p>
          </Link>
        </div>
        <div className="audios">
          {audios.map((item, index) => (
            <div key={index} className="bg-[#181818] rounded-[4px] p-[16px]">
              <img src={item.img} className="rounded-[4px]" alt="" />
              <div className="min-h-[62px] mt-[16px]">
                <h3 className="text-[16px] text-[#fff] font-bold mb-[4px]">
                  {item.title}
                </h3>
                <p className="descriptions text-[14px] font text-[#a7a7a7]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MainHome;
