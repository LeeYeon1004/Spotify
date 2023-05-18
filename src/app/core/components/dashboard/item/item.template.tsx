import { useDispatch } from "react-redux";
import { PlayIcon } from "../../../icons/home.icons";
import { Audios } from "../../../models/home.interface";
import "./item.style.scss";
import { onChangeSong } from "../../../../redux-toolkit/slices/songSlice";
import { Link } from "react-router-dom";
import { onChangeOption } from "../../../../redux-toolkit/slices/songDetailSlice";

function Item({ item }: { item: Audios }) {
  const dispatch = useDispatch();

  const handlePlay = () => {
    dispatch(onChangeSong(item));
  };
  const changeOption = () => {
    dispatch(onChangeOption(item));
  };

  return (
    <div className="bg-[#181818] hover-bg rounded-[4px] p-[16px] group">
      <div>
        <div className="relative shadow">
          <Link to={`/song-detail/${item.title}`} onClick={changeOption}>
            <img
              src={item?.img}
              className="rounded-[4px] min-h-[148.88px] aspect-square"
              alt=""
            />
          </Link>
          <div
            className="bg-[#1ed760] absolute right-[8px] bottom-[8px] rounded-[50%] p-[12px] cursor-default
            opacity-0 transform translate-y-[8px] group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-200
            "
            onClick={handlePlay}
          >
            <PlayIcon />
          </div>
        </div>
      </div>
      <Link to={`/song-detail/${item.title}`} onClick={changeOption}>
        <div className="min-h-[62px] mt-[16px]">
          <h3 className="title-song text-[16px] text-[#fff] font-bold mb-[4px]">
            {item?.title}
          </h3>
          <p className="descriptions-item text-[14px] text-[#a7a7a7]">
            {item?.description}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Item;
