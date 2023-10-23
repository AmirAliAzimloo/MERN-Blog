
import { BsFillBookmarkFill } from "react-icons/bs";
import { BiLike } from "react-icons/bi";


import Image from "next/image";

const SinglePostPage = ({ params }) => {

 


   



   return (
      <div className="flex flex-col gap-12 ">
         <div className=" flex justify-between items-start gap-4">
            <main className=" flex flex-col gap-12 w-full">
               <div className=" flex flex-col gap-12 w-full bg-zinc-100 p-4 rounded-lg">
                  <div className=" flex justify-between items-center w-full">
                    "BreadCrumb"
                     <div className=" bg-white p-2 rounded-xl flex justify-end items-center gap-2">
                        <span>{"data.likes_number"}</span>
                        <BiLike className=" cursor-pointer w-6 h-6 text-zinc-600 transition-all duration-300 hover:text-blue-500" />
                     </div>
                  </div>
                  <section className=" flex justify-between items-center gap-4">
                     "BlogerBox"
                     "PostMeta"
                  </section>
                  <section className=" flex flex-col gap-12  w-full">
                     <h1 className="title_style">عنوان مقاله این هست...</h1>
                     <p className=" text-justify leading-9 text-zinc-700">
                        معرفی: {"data.short_desc"}
                     </p>
                     <div className="  flex justify-center items-center">
                        <div className=" relative w-[700px] h-[400px]">
                           {/* <Image src={"data.image"} fill className=" rounded-lg object-cover" alt={"data.title"} title={"data.title"} /> */}
                        </div>
                     </div>
                     <p className=" text-justify leading-9 text-zinc-700">
                        {"data.details"}
                     </p>
                     <div className=" flex justify-start items-center gap-4 flex-wrap">
                        {/* {
                           "data.categories".map((da, i) => (
                              <div key={i} className=" bg-zinc-200 rounded px-3 py-1 text-base sm:text-sm">
                                 {da}
                              </div>
                           ))
                        } */}
                     </div>
                     <div className=" flex justify-start items-center gap-4 flex-wrap">
                        {/* {
                           "data.tags".map((da, i) => (
                              <div key={i} className=" bg-zinc-200 rounded px-3 py-1 text-base sm:text-sm">
                                 #{da}
                              </div>
                           ))
                        } */}
                     </div>
                  </section>
               </div>
            </main>
            <aside className=" sticky top-[5.8rem]  left-0 w-[360px] min-w-[360px] flex flex-col gap-4">
               <div className="bg-zinc-100 p-4 rounded-lg">
                 "BlogerBox"
               </div>
               <div className="bg-zinc-100 p-4 rounded-lg flex flex-col  gap-6">
               "RandomPostBox"
               </div>
            </aside>
         </div>
         <section className=" flex flex-col gap-12  w-full bg-zinc-100 p-4 rounded-lg">
         "BlogOtherPosts"
         </section>
         <section className=" flex flex-col gap-12  w-full bg-zinc-100 p-4 rounded-lg h-[400px]">
            <h2 className="title_style">دیدگاه های این مقاله</h2>
         </section>
         <div className=" fixed bottom-2 right-0 left-0 flex justify-center items-center ">
            <div className=" flex justify-center items-center gap-6  bg-[#ffffffcc] backdrop-blur-sm py-2 px-4 rounded-full">
               <BiLike className=" cursor-pointer w-6 h-6 text-zinc-600 transition-all duration-300 hover:text-blue-500" />
               <BsFillBookmarkFill className=" cursor-pointer w-[22px] h-[22px] text-zinc-600 transition-all duration-300 hover:text-blue-500" />
            </div>
         </div>
      </div>
   );
}

export default SinglePostPage;