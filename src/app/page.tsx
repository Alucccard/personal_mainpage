import { Header, Banner, Intro, Portfolio, Blog, Footer } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Banner
          title="Hello,here is Byron Zhang"
          subtitle="This is a page to showcase my portfolio"
        />
        <Intro />
        <Portfolio />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
