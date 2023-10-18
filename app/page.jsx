import MainPageCategories from "@/components/main-page-categories";
import MainPagePopularPosts from "@/components/main-page-popular-posts";
import MainSlider from "@/components/sliders/main-slider";
import MainPageAdsSection from "@/components/main-page-ads-section";

export default function Home() {
  return (
   <main className=" flex flex-col gap-12 " >
    <MainSlider />
    <MainPageCategories />
    <MainPagePopularPosts />         
    <MainPageAdsSection/>
   </main>
  )
}
