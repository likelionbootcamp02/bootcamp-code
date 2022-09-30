import Navbar from "./components/Navbar";
import ProductCollectionList from "./components/ProductionCollectionList/ProductCollectionList";

const App = () => {
  return (
    <div className="h-[200vh]">
      <Navbar />
      <main>
        <ProductCollectionList />
      </main>
    </div>
  );
};

export default App;
