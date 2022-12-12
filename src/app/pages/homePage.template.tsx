import { Outlet } from "react-router-dom";
import Header from "../core/components/header/header.template";
import Playing from "../core/components/playing/playing.template";
import Sidebar from "../core/components/sidebar/sidebar.template";
import { Audios } from "../api/api";

function HomePage() {
  return (
    <div className="flex w-full relative">
      <div>
        <Sidebar />
      </div>
      <div className="pl-[241px] relative">
        <div className="sticky top-0 z-[3]">
          <Header />
        </div>
        <div className="modal"></div>
        <Outlet />
      </div>
      <div className="fixed bottom-0 z-[3] w-full">
        <Playing />
      </div>
    </div>
  );
}

export default HomePage;
