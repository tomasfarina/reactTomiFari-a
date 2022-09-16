
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Offer from "./components/Offer/Offer";
import Brands from "./components/Brands/Brands";
import Footer from "./components/Footer/Footer";
import Featured from "./components/Featured/Featured";

function App() {
  return (
    
    <div className="App">
<Navbar />
<Featured />
<ItemListContainer
        buttonText='Agregar al carrito'/>
<Offer />
<Brands />
<Footer />
    </div>
  );
}

export default App;
