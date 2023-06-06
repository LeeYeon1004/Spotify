import { useEffect, useState } from "react";
import { DisLikedIcon } from "../../icons/playing.icons";
import { LikedIcon } from "../../icons/sidebar.icons";
import { Audios } from "../../models/home.interface";
import { useDispatch, useSelector } from "react-redux";
import {
  addSongLiked,
  removeSongLiked,
} from "../../../redux-toolkit/slices/likedPlaylistSlice";
import { RootState } from "../../../redux-toolkit/store";

function SetLiked({ itemSong }: { itemSong: Audios }) {
  const dispatch = useDispatch();
  const likedSong = useSelector(
    (state: RootState) => state.likedSlice.LikedPlaylistSong
  );
  const [liked, setLiked] = useState<boolean>(false);
  const handleLiked = () => setLiked(!liked);

  useEffect(() => {
    checkLiked();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const checkLiked = () => {
    if (likedSong.find((item) => item === itemSong)) {
      setLiked(true);
    }
  };
  const handleAddLikedSong = () => {
    dispatch(addSongLiked(itemSong));
  };
  const handleRemoveLikedSong = () => {
    dispatch(removeSongLiked(itemSong));
  };

  return (
    <div onClick={handleLiked} className="text-[#ffffffb3]">
      {liked ? (
        <p onClick={handleRemoveLikedSong}>
          <LikedIcon />
        </p>
      ) : (
        <p onClick={handleAddLikedSong}>
          <DisLikedIcon />
        </p>
      )}
    </div>
  );
}

export default SetLiked;
