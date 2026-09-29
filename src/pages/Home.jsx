import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import LatestCollection from "../component/LatestCollection";
import BestSeller from "../component/BestSeller";
import OurPolicy from "../component/OurPolicy";
import NewsLetter from "../component/NewsLetter";
import Footer from "../component/Footer";
function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <LatestCollection/>
    <BestSeller/>
    <OurPolicy/>
    <NewsLetter/>
    <Footer/>
    </>
  );
}

export default Home;