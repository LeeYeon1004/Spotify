import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "../item/item.template";
import { Song } from "../../../../api/api";

function Section({title}: {title: string}) {
  const [audios, setAudios] = useState(Song);

  useEffect(() => {
    getAudioRandom()
  }, []);

  const getAudioRandom = () => {
    let tempArr = [...Song]
    let resultArr = []
    for(let i = 0; i < 8; i++){
      const randomIndex = Math.floor(Math.random() * tempArr.length);
      resultArr.push(tempArr[randomIndex]);
      tempArr.splice(randomIndex, 1);
    }
    setAudios(resultArr);
  }

  return (
    <section className="trending mb-[16px] relative">
      <div className="flex items-center justify-between mb-[16px]">
        <h2 className="text-[#fff] text-[24px] font-bold tracking-[-1px] cursor-pointer hover:underline">
          {title}
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
