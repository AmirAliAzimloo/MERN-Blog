import MainPageCategories from "@/components/main-page-categories";
import MainSlider from "@/components/sliders/main-slider";

export default function Home() {
  return (
   <main className=" flex flex-col gap-12 " >
    <MainSlider />
    <MainPageCategories />
   </main>
  )
}
