import {
  Header,
  Banner,
  Intro,
  Portfolio,
  Blog,
  Footer,
} from "@/app/(my_app)/components";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <div id="banner" className="scroll-mt-20">
          <Banner
            title="Hello,here is Byron Zhang"
            subtitle="This is a simple page to showcase my portfolio"
          />
        </div>
        <div id="intro" className="scroll-mt-20">
          <Intro />
        </div>
        <div id="portfolio" className="scroll-mt-15">
          <Portfolio />
        </div>
        <div id="blog" className="scroll-mt-30">
          <Blog />
        </div>
      </main>
      <div id="footer" className="scroll-mt-20">
        <Footer />
      </div>
    </div>
  );
}
