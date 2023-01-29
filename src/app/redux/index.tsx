import {useDispatch} from "react-redux"
import { addAction } from "./actions";

function Redux() {
  const dispatch = useDispatch()
  const handleAdd = () => {
    dispatch(addAction({}))
  }

  return (
    <div>
      <ul>
        <li></li>
      </ul>
      <button onClick={handleAdd}>click</button>
    </div>
  );
}

export default Redux;
