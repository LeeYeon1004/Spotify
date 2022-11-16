import {
  BackIcon,
  ForwardIcon,
  ShowMore,
  UserAccIcon,
} from "../../icons/header.icons";
import "./header.style.scss";

function Header() {
  return (
    <div className="header-box bg-[#121212]">
      <div className="flex items-center gap-[16px]">
        <button className="relative rounded-[50%] p-[4px]">
          <BackIcon />
        </button>
        <button className="relative rounded-[50%] p-[4px]">
          <ForwardIcon />
        </button>
      </div>
      <div className="flex items-center gap-[32px] font-bold leading-[32px]">
        <button className="upgrade-btn">Upgrade</button>
        <button className="user-btn px-[4px] flex items-center gap-[8px]">
          <div className="bg-[#535353] p-[6px] rounded-[50%]">
            <UserAccIcon />
          </div>
          <p>User Account</p>
          <div className="mr-[6px]">
            <ShowMore />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Header;
