import './App.css';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './componentes/navegacion/Navbar';
import Productos from './componentes/paginas/Productos';
import Inicio from './componentes/paginas/Inicio';
import bootstrap from 'bootstrap'



function App() {


  return (
    <div className="App">
       
       <Navbar></Navbar>
       
    </div>
  );
}

export default App;

