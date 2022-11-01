import Content from "../core/components/content/content.template";
import Sidebar from "../core/components/sidebar/sidebar.template";

function HomePage() {
  return (
    <div className="flex w-full">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <Content />
      </div>
    </div>
  );
}

export default HomePage;
