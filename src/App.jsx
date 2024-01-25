
import './App.css'
import NavBar from "../src/components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/itemListContainer"

function App() {
  

  return (
    
      <div className="App">
        <NavBar/>
        <ItemListContainer greeting= "Vapea con estilo y libre de humo." />
       

       
      </div>
  
  )
}

export default App;
