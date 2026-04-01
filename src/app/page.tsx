import {
  Header,
  Banner,
  Intro,
  Portfolio,
  Blog,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Banner
          title="欢迎来到我的作品集"
          subtitle="展现设计与开发的完美融合"
        />
        <Intro />
        <Portfolio />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
