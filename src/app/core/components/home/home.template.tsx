import Trending from "./trending/trending.template";
import "./home.style.scss";

function MainHome() {
  return (
    <div className="main-box">
      <div>
        <Trending />
      </div>
      <div>
        <Trending />
      </div>
      <div>
        <Trending />
      </div>
      <div>
        <Trending />
      </div>
      <div>
        <Trending />
      </div>
    </div>
  );
}

export default MainHome;
