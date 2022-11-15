import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Heropage from "./Components/Heropage";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import FAQ from "./Components/FAQ";
import Cards from "./Components/Card";
import About from "./Components/About";
import Client from "./Components/Clients";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Heropage />
      <Client />
      <About />
      <Services />
      <FAQ />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
