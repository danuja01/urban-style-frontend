import Header from "../components/Home/Header";
import Testimonial from "../components/Home/Testimonial";
import Seperator from "../components/common/Seperator";
import Footer from "../components/common/layout/Footer";
import Navbar from "../components/common/layout/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Seperator />
      <section style={{ height: "70vh" }}>
        <div className="services">
          <h1>Our Services</h1>
        </div>
      </section>
      <Seperator />
      <Testimonial />
      <Seperator />
      <Footer />
    </>
  );
};

export default Home;
