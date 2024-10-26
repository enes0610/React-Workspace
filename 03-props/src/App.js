import './App.css';
import Product from './Product';

function App() {
  return (
    <div className="App">
      <Product name= "Telefon" money={2000}/>
      <Product name= "Telefon Kılıf" money={200}/>
      <Product name= "Araba" money={50000}/>
    </div>
  );
}

export default App;