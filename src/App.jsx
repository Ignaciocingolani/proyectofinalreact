import React from "react";
import NavBar from "../src/components/NavBar/NavBar";
import Footer from "./components/Footer"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ProductList from "./components/ProductList";
import { CartProvider } from "./components/CartWidget/CartContext"; 
import CartWidget from "./components/CartWidget/CartWidget"; 

function App() {
    return (
        <Router>
            <div className="App">
                <CartProvider> 
                    <NavBar />
                    <Routes>
                        <Route exact path="/" element={<ItemListContainer />} />
                        <Route path="/category1" element={<ProductList category={1} />} />
                        <Route path="/category2" element={<ProductList category={2} />} />
                    </Routes>
                    <CartWidget /> {}
                    <Footer />
                </CartProvider>
            </div>
        </Router>
    );
};

export default App;