import Header from "../components/Home/Header";
import Services from "../components/Home/Services";
import Seperator from "../components/common/Seperator";
import Navbar from "../components/layout/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Seperator />
      <Services />
    </>
  );
};

export default Home;
