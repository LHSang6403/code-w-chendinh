import Header from "@components/Layout/Header/Header";
import Footer from "@components/Layout/Footer/Footer";
import HomeSlider from "@components/Sliders/HomeSlider";
import Template from "@app/(main)/template";

export default async function Home() {
  return (
    <>
      <Header />
      <Template>
        <main className="min-h-screen w-screen px-3 animate-in">
          Home, code & chill here.
          <div className="mx-auto w-[80%]">
            <HomeSlider />
          </div>
        </main>
      </Template>
      <Footer />
    </>
  );
}


