import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "../item/item.template";
import { Audios } from "../../../../api/api";

function Section() {
  const [audios, setAudios] = useState(Audios);

  useEffect(() => {
    setAudios(Audios.slice(0, 8));
  }, []);

  // const handleGetData = async () => {
  //   const getVid = await getAudios();
  //   setAudios(getVid.slice(0, 8));
  // };

  return (
    <section className="trending mb-[16px] relative">
      <div className="flex items-center justify-between mb-[16px]">
        <h2 className="text-[#fff] text-[24px] font-bold tracking-[-1px] cursor-pointer hover:underline">
          Trending Now
        </h2>
        <Link to="">
          <p className="text-[#b3b3b3] font-bold text-[12px] cursor-pointer hover:underline">
            SEE ALL
          </p>
        </Link>
      </div>
      <div className="audios">
        {audios.map((item, index) => (
          <div key={index} className="">
            <Item item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section;
