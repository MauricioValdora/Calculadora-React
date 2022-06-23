
import './App.css';
import logo from './img/logo.webp'
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/botonClear';
import{useState}from 'react';
import{evaluate} from 'mathjs';

function App() {

  const[input,setInput]= useState('');

  const agregarInput = val=>{
    setInput(input + val)
  }

  const calcularResultado = () =>{
    if (input){
      setInput(evaluate(input))
    }
  }
  
  return (
    <div className="App">
        <div className='logo-contenedor'>
          <img
            src={logo}
            className="logo"
            alt='logo de react' />
        </div>
        <div className='contenedor-calculadora'>
          <Pantalla input={input}/>
           <div className='fila'>
            <Boton manejarClicks={agregarInput}>1</Boton>
            <Boton manejarClicks={agregarInput}>2</Boton>
            <Boton manejarClicks={agregarInput}>3</Boton>
            <Boton manejarClicks={agregarInput}>+</Boton></div>
           <div className='fila'>
           <Boton manejarClicks={agregarInput}>4</Boton>
           <Boton manejarClicks={agregarInput}>5</Boton>
           <Boton manejarClicks={agregarInput}>6</Boton>
           <Boton manejarClicks={agregarInput}>-</Boton>
           </div>
           <div className='fila'>
           <Boton manejarClicks={agregarInput}>7</Boton>
           <Boton manejarClicks={agregarInput}>8</Boton>
           <Boton manejarClicks={agregarInput}>9</Boton>
           <Boton manejarClicks={agregarInput}>*</Boton>
           </div>
           <div className='fila'>
           <Boton manejarClicks={calcularResultado}>=</Boton>
           <Boton manejarClicks={agregarInput}>0</Boton>
           <Boton manejarClicks={agregarInput}>.</Boton>
           <Boton manejarClicks={agregarInput}>/</Boton>
           </div>
           <div className='fila'>
            <BotonClear manejarClear ={()=>setInput('')}>clear</BotonClear>
           </div>
        </div>
    </div>


  );
}

export default App;
