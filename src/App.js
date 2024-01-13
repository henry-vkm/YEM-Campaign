import Hero from "./components/hero.component";
import JoinCampaign from "./components/joinCampaign.component";
import Navbar from "./components/navbar.component";
import Quote from "./components/quote.component";
import Contact from "./components/contact.component";
import Footer from "./components/footer.component";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Quote />
      <JoinCampaign />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
