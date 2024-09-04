import Achievements from "./components/Achievements/Achievements";
import Banner from "./components/Banner/Banner";
import Events from "./components/Events/Events";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Founder from "./components/Founder/Founder";
import Header from "./components/Header/Header";


function App() {
  return (
    <div>
      <Header />
      <Banner/>
      <Founder />
      <Achievements />
      <Events />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
