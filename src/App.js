import Navigation from "./components/navigation";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Tours from "./components/Tours";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </div>
  );
}

export default App;
