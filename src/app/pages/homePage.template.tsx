import { Outlet } from "react-router-dom";
import Header from "../core/components/header/header.template";
import Sidebar from "../core/components/sidebar/sidebar.template";

function HomePage() {
  return (
    <div className="flex w-full">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1 pl-[241px]">
        <div className="sticky top-0">
          <Header />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage;
