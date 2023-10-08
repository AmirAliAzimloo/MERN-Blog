import Image from "next/image";
import HeaderSearch from "./header-search";
import LoginNotifTheme from "./login-notif-theme";

const Header = () => {
  return (
    <header
    className="flex justify-between items-center py-2 px-8 shadow-[0px_4px_5px_rgba(0,0,0,0.25)] z-50 backdrop-blur-md bg-[#ffffffdd] sticky top-0 left-0 right-0"
    >
      <div>
        <Image src={"/logo-70.png"} width={60} height={60} alt="logo" />
      </div>
      <HeaderSearch/>
      <LoginNotifTheme/>
    </header>
  );
};

export default Header;
