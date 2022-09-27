
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Offer from "./components/Offer/Offer";
import Brands from "./components/Brands/Brands";
import Footer from "./components/Footer/Footer";
import Featured from "./components/Featured/Featured";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
<Navbar />
<Featured />
<BrowserRouter>
<Routes>
            <Route path="/" element={<ItemListContainer buttonText='Agregar al carrito' />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/categoria/:cat" element={<ItemListContainer/>}/>
</Routes>
</BrowserRouter>
<Offer />
<Brands />
<Footer />
    </div>
  );
}

export default App;
