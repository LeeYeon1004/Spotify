import { Outlet } from "react-router-dom";
import Header from "../core/components/header/header.template";
import Playing from "../core/components/playing/playing.template";
import Sidebar from "../core/components/sidebar/sidebar.template";
import Loading from "../core/components/modal/loading.template";

function HomePage() {
  return (
    <div className="flex w-full tracking-wide relative pb-[90px]">
      <Loading />
      <div>
        <Sidebar />
      </div>
      <div className="ml-[300px] relative w-full min-h-screen bg-[#000]">
        <div className="bg-[#121212] rounded-[8px] mt-[8px] mr-[16px]">
          <div className="sticky top-0 z-[3]">
            <Header />
          </div>
          <Outlet />
        </div>
      </div>
      <div className="fixed bottom-0 z-[3] w-full">
        <Playing />
      </div>
    </div>
  );
}

export default HomePage;
