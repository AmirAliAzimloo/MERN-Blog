import Image from "next/image";
import Link from "next/link";



const BlogMainBox = ({ data }) => {
   return (
      <article className="sliderItem w-[17rem] min-w-[17rem] h-[22.6rem] flex flex-col gap-2 bg-white shadow-[0px_10px_10px_rgba(0,0,0,0.25)]  rounded-lg transition-all duration-500 hover:shadow-[0px_10px_5px_rgba(0,0,0,0.35)]">
         <div className=" flex justify-center items-center  mt-[.5rem]">
            <Link href={data.slug} className=" relative w-[16rem]  rounded-lg  h-[150px]">
               <Image src={data.image} alt={data.title} fill className="object-cover rounded-md" />
            </Link>
         </div>
        
      </article>
   );
}

export default BlogMainBox;