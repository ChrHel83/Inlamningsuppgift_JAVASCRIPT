import Hero from "../components/Hero/Hero.jsx";
import Logos from "../components/Logos/Logos";
import AppFeatures from "../components/AppFeatures/AppFeatures";
import Slider from "../components/Slider/Slider";
import Features from "../components/Features/Features";
import Testimonials from "../components/Testimonials/Testimonials";
import Subscribe from "../components/Subscribe/Subscribe";
import Faq from "../components/faq/faq";

const Home = () => {
  return ( 
    <>
    <Hero />
    <Logos />
    <AppFeatures />
    <Slider />
    <Features />
    <Testimonials />
    <Faq />
    <Subscribe />
    </>
   );
}
 
export default Home;