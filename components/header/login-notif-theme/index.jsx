import { IoNotificationsOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";


const LoginNotifTheme = () => {

   return (
      <div className=" flex justify-end items-center gap-4">
         <div className=" relative flex justify-center items-center gap-1 border-2 border-blue-500 w-[54px] h-[28px] bg-white  rounded-full">
            <FiMoon className="  "/>
            <BsSun className=" w-4 h-4"/>
            <span className=" w-[26px] h-[26px] bg-blue-500 rounded-full absolute -top-[1px] -right-[1px]"></span>
         </div>
         <div className=" relative w-8 h-8 flex justify-center items-center ">
            <IoNotificationsOutline className="w-6 h-6" />
            <span className=" absolute top-0 right-0">4</span>
         </div>
         <button className=" bg-blue-500 px-3 py-1 rounded-md text-white text-base sm:text-sm">ورود/ثبت نام</button>
      </div>
   );
}

export default LoginNotifTheme;