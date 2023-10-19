import BlogerBox from "../boxes/bloger-box";

const MainPageBestBlogsAndNewPosts = () => {

   const blogersInfo = [
      {
         img: "/images/ads/5556583.jpg",
         title: "وبلاگ تستی",
         short_desc: "این وبلاگ برای بررسی نکست جی اس هست...",
         link:"link1"
      },
      {
         img: "/images/ads/5556583.jpg",
         title: "وبلاگ تستی",
         short_desc: "این وبلاگ برای بررسی نکست جی اس هست...",
         link:"link1"
      },
      {
         img: "/images/ads/5556583.jpg",
         title: "وبلاگ تستی",
         short_desc: "این وبلاگ برای بررسی نکست جی اس هست...",
         link:"link1"
      },
      {
         img: "/images/ads/5556583.jpg",
         title: "وبلاگ تستی",
         short_desc: "این وبلاگ برای بررسی نکست جی اس هست...",
         link:"link1"
      },
      {
         img: "/images/ads/5556583.jpg",
         title: "وبلاگ تستی",
         short_desc: "این وبلاگ برای بررسی نکست جی اس هست...",
         link:"link1"
      },
      {
         img: "/images/ads/5556583.jpg",
         title: "وبلاگ تستی",
         short_desc: "این وبلاگ برای بررسی نکست جی اس هست...",
         link:"link1"
      },
      {
         img: "/images/ads/5556583.jpg",
         title: "وبلاگ تستی",
         short_desc: "این وبلاگ برای بررسی نکست جی اس هست...",
         link:"link1"
      },
      {
         img: "/images/ads/5556583.jpg",
         title: "وبلاگ تستی",
         short_desc: "این وبلاگ برای بررسی نکست جی اس هست...",
         link:"link1"
      },
      {
         img: "/images/ads/5556583.jpg",
         title: "وبلاگ تستی",
         short_desc: "این وبلاگ برای بررسی نکست جی اس هست...",
         link:"link1"
      },
      {
         img: "/images/ads/5556583.jpg",
         title: "وبلاگ تستی",
         short_desc: "این وبلاگ برای بررسی نکست جی اس هست...",
         link:"link1"
      },
      {
         img: "/images/ads/5556583.jpg",
         title: "وبلاگ تستی",
         short_desc: "این وبلاگ برای بررسی نکست جی اس هست...",
         link:"link1"
      },
      {
         img: "/images/ads/5556583.jpg",
         title: "وبلاگ تستی",
         short_desc: "این وبلاگ برای بررسی نکست جی اس هست...",
         link:"link1"
      },
      {
         img: "/images/ads/5556583.jpg",
         title: "وبلاگ تستی",
         short_desc: "این وبلاگ برای بررسی نکست جی اس هست...",
         link:"link1"
      },
      {
         img: "/images/ads/5556583.jpg",
         title: "وبلاگ تستی",
         short_desc: "این وبلاگ برای بررسی نکست جی اس هست...",
         link:"link1"
      },
   ]



   return (
      <section className="  bg-zinc-100 rounded-lg p-4 flex  justify-between items-start gap-4">
         <div className=" flex flex-col gap-12 w-[280px] min-w-[280px]">
            <h2 className=" title_style">برترین وبلاگ ها</h2>
            <div className=" flex flex-col gap-4">
               {
                  blogersInfo.map((da, i) => (<BlogerBox key={i} data={da} />))
               }
            </div>
         </div>
         
      </section>
   );
}

export default MainPageBestBlogsAndNewPosts;