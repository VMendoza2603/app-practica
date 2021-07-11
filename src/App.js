import './App.css';
import ListCards from './components/cards/ListCards';
import Navbar from './components/navbar/Navbar';
import Footer from './components/context/Footer';
//import Calculadora from './components/cards/Calculadora';
//import Tarjetas from './components/cards/Tarjetas';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ListCards/>
      <Footer/>
    </div>
  );
}

export default App;

/*function App(){
  return(
    <div className="App">
      <h1 className="p-1 bg-dark bg-gradient text-success">TALLER DE POO - MENDOZA VICTOR</h1>
      <Calculadora/>
      <Tarjetas/>
    </div>
  );
}

export default App;*/