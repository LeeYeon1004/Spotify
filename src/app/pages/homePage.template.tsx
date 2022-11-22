import { Outlet } from "react-router-dom";
import Header from "../core/components/header/header.template";
import Sidebar from "../core/components/sidebar/sidebar.template";

function HomePage() {
  return (
    <div className="flex w-full">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1 pl-[241px] relative">
        <div className="sticky top-0 z-[3]">
          <Header />
        </div>
        <div className="modal"></div>
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage;
