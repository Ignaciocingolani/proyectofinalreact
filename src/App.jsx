import './App.css';
import NavBar from "../src/components/NavBar/NavBar";
import Product from "../src/Product";
import Contador from "../src/Contador";
import ProductChildren from './ProductChildren';
import ItemCount from './ContadorBtn';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import itemListContainer from "./components/itemListContainer"; 
import ProductListCategory1 from "./components/ProductListCategory1";
import ProductListCategory2 from "./components/ProductListCategory2";

function App ()  {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact path="/" component={itemListContainer} />
                    <Route path="/category1" component={ProductListCategory1} />
                    <Route path="/category2" component={ProductListCategory2} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;