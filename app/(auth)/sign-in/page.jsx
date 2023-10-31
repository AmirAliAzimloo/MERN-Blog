import SignInComponent from "@/components/auth-components/sign-in-form";
import Link from "next/link";





const SignInPage = async () => {



   return (
      <div className=" flex justify-center items-center">
         <div className=" flex flex-col gap-8 p-4 rounded-lg bg-zinc-100 ">
            <div className=" flex justify-between items-center">
               <h1 className="title_style">ورود به حساب کاربری</h1>
               <Link href={"/sign-up"} className=" bg-zinc-200 px-3 py-1 rounded-md hover:text-blue-500 transition-all duration-500">ثبت نام</Link>
            </div>
            <SignInComponent />
         </div>
      </div>
   );
}

export default SignInPage;