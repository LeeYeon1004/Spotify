import Section from "./sections/sections.template";
import "./home.style.scss";

function MainHome() {
  return (
    <div className="main-box">
      <div>
        <Section title="Trending Now" />
      </div>
      <div>
        <Section title="Your top mixes" />
      </div>
      <div>
        <Section title="Popular radio" />
      </div>
      <div>
        <Section title="Recommended for today" />
      </div>
      <div>
        <Section title="Popular new releases" />
      </div>
    </div>
  );
}

export default MainHome;
