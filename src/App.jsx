import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Products from "./components/Products";
import Studio from "./components/Studio";
import TechCards from "./components/TechCards";
import Technology from "./components/Technology";
import "./index.css";

function App() {
  return (
    <div className="w-full min-h-screen">
      <div className="logo">
        <Header />
        <Hero />
      </div>
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
