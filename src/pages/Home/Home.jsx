import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import LetUs from "../../components/LetUs";
import OurServices from "../../components/OurServices";
import Testimonials from "../../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <OurServices />
      <LetUs />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
