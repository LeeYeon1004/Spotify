import { PlayIcon } from "../../../icons/home.icons";
import { Audios } from "../../../models/home.interface";
import "./item.style.scss";

function Item({ item }: { item: Audios }) {
  return (
    <div className="bg-[#181818] hover-bg rounded-[4px] p-[16px] group">
      <div>
        <div className="relative shadow">
          <img src={item.img} className="rounded-[4px]" alt="" />
          <div
            className="
        bg-[#1ed760] absolute right-[8px] bottom-[8px] rounded-[50%] p-[12px] cursor-default
        opacity-0 transform translate-y-[8px] group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-200
        "
          >
            <PlayIcon />
          </div>
        </div>
      </div>
      <div className="min-h-[62px] mt-[16px]">
        <h3 className="text-[16px] text-[#fff] font-bold mb-[4px]">
          {item.title}
        </h3>
        <p className="descriptions text-[14px] font text-[#a7a7a7]">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default Item;
