import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Products />
    </div>
  );
}

export default App;
