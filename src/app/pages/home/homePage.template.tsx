import { Outlet, useLocation } from "react-router-dom";
import Header from "../../core/components/header/header.template";
import Playing from "../../core/components/playing/playing.template";
import Sidebar from "../../core/components/sidebar/sidebar.template";
import Loading from "../../core/components/modal/loading.template";
import { useEffect } from "react";
import "./main.style.scss";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    localStorage.setItem("pathName", location.pathname)
  }, [location.pathname])

  return (
    <div className="main-home flex w-full tracking-wide pb-[90px]">
      <Loading />
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-screen bg-[#121212]">
        <div className="bg-[#121212] relative rounded-[8px] mr-[12px]">
          <div className="sticky top-0 z-20">
            <Header />
          </div>
          <Outlet />
        </div>
      </div>
      <div className="fixed bottom-0 z-[3] w-full bg-[#000]">
        <Playing />
      </div>
    </div>
  );
}

export default HomePage;
