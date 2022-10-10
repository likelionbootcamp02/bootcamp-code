import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default BaseLayout;
