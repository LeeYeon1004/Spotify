import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./loading.style.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux-toolkit/store";

function Loading() {
  const stateLoading = useSelector((state: RootState) => state.loading.loading);
  const audioItem = useSelector((state: RootState) => state.song.songItem)
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (stateLoading !== loading) {
      setLoading(stateLoading);
    }
    setTimeout(() => {
      setLoading(false);
    }, 150);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioItem]);

  return (
    <div
      className={`absolute top-0 left-0 z-[5] w-full h-screen ${
        loading ? "block" : "hidden"
      }`}
    >
      <div className="relative">
        <div className="modal-loading"></div>
        <div className="loading text-[#fff]">
          <FontAwesomeIcon icon={faSpinner} />
        </div>
      </div>
    </div>
  );
}

export default Loading;
