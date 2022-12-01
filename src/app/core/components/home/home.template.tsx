import Section from "./sections/sections.template";
import "./home.style.scss";

function MainHome() {
  return (
    <div className="main-box">
      <div>
        <Section />
      </div>
      <div>
        <Section />
      </div>
      <div>
        <Section />
      </div>
      <div>
        <Section />
      </div>
      <div>
        <Section />
      </div>
    </div>
  );
}

export default MainHome;
