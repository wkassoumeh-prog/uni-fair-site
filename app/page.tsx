import UtilityBar from './components/UtilityBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import JoinBanner from './components/JoinBanner';
import BottomBanner from './components/BottomBanner';

export default function Home() {
  return (
    <main className="min-h-screen">
      <UtilityBar />
      <Header />
      <Hero />
      <Intro />
      <JoinBanner />
      <BottomBanner />
    </main>
  );
}
