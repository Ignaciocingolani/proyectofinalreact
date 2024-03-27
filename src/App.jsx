import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar";
import Footer from "./components/Footer"; 
import ItemListContainer from "./components/ItemListContainer";
import ProductList from "./components/ProductList";
import { CartProvider } from "./components/CartWidget/CartContext"; 

import ShoppingCartPage from "./components/CartWidget/ShoppingCartPage";

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
                        <Route path="/cart" element={<ShoppingCartPage />} />
                    </Routes>
                    
                    <Footer />
                </CartProvider>
            </div>
        </Router>
    );
}

export default App;