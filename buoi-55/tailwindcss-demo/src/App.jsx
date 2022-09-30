import Navbar from "./components/Navbar";
import NavbarSample from "./components/NavbarSample";

const App = () => {
  return (
    <div>
      <NavbarSample />
      <hr className="border border-b-black" />
      <Navbar />
    </div>
  );
};

export default App;
