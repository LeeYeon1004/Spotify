import { useSelector } from "react-redux";
import "./search.style.scss";
import { RootState } from "../../redux-toolkit/store";
import { useEffect, useState } from "react";
import { Song } from "../../api/api";
import Item from "../../core/components/songItem/songItem.template";

function Search() {
  const searchVal = useSelector(
    (state: RootState) => state.searchSlice.searchValue
  );
  const clearText = useSelector((state: RootState) => state.searchSlice.clear);
  const [audios, setAudios] = useState(Song);

  useEffect(() => {
    window.scrollTo(0, 0);
    renderRandom();
  }, []);
  useEffect(() => {
    setAudios(
      Song.filter((item) =>
        item.title.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  }, [searchVal]);
  useEffect(() => {
    if (clearText === true || searchVal === "") {
      setAudios(Song);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearText]);

  const renderRandom = () => {
    let tempArr = [...Song];
    let resultArr = [];
    for (let i = 0; i < Song.length; i++) {
      const randomIndex = Math.floor(Math.random() * tempArr.length);
      resultArr.push(tempArr[randomIndex]);
      tempArr.splice(randomIndex, 1);
    }
    setAudios(resultArr);
  };

  return (
    <div className="suggest">
      <div>
        <h2 className="text-[#fff] text-[24px] font-bold tracking-[-1px]">
          Recommended for today
        </h2>
      </div>
      <div className="audios">
        {audios.map((item, index) => (
          <div key={index}>
            <Item item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
