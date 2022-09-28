import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import TechProducts from "./components/TechProducts/TechProducts";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Products /> */}
      <Banner />
      <div className="container mx-auto grid grid-cols-4 py-48 gap-x-6">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-3">
          <TechProducts />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
