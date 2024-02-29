import './App.css';
import NavBar from "../src/components/NavBar/NavBar";
import Product from "../src/Product";
import Contador from "../src/Contador";
import ProductChildren from './ProductChildren';
import ItemCount from './ContadorBtn';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ProductListCategory1 from "./components/ProductListCategory1";
import ProductListCategory2 from "./components/ProductListCategory2";

function App ()  {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route exact path="/" element={ItemListContainer} />
                    <Route path="/category1" element={ProductListCategory1} />
                    <Route path="/category2" element={ProductListCategory2} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;