import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Products from "./components/Products";
import Studio from "./components/Studio";
import TechCards from "./components/TechCards";
import Technology from "./components/Technology";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <Hero />
      <Logos />
      <Technology />
      <TechCards />
      <Studio />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
