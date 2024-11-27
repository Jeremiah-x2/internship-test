import Faqs from "./components/faqs";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import WhyUs from "./components/why-us";

export default function App() {
  return (
    <main className="w-full z-40">
      <Header />
      <Hero />
      <WhyUs />
      <Features />
      <Faqs />
      <Footer />
    </main>
  );
}
