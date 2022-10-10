import { Link } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";

const HomeView = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeView;
