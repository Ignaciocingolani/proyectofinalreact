import React from "react";
import NavBar from "../src/components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ProductList from "./components/ProductList";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route exact path="/" element={ItemListContainer} />
                    <Route path="/category1" element={<ProductList category={1} />} />
                    <Route path="/category2" element={<ProductList category={2} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;