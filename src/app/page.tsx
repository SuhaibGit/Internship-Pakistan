import Feedback from "./components/feedback";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Carousel from "./components/listings";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Carousel/>
      <Feedback/>
      <Footer/>
    </div>
  );
}
