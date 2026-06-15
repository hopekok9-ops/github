import './App.css';
import {useState} from 'react';


const App = () => {

  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => {
    setCount(count + multiplier);
  };



  return (
    <div className="App">
      <h1>"Samosa Slammin'"</h1>  
      <h2>"Count: {count}"</h2>
      <img className="samosa" onClick={updateCount} src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9GdT2EnUZDUWbPl--dvuYaNNvNq9qh3dXtM0RHMBMcfnOKX11UsTqRuo6-xeYAc91ifAB6pNMecDD1fFYO3hzVueQgm80YoBbKblmH8wgFQ&s=10" alt="samosa" />

      <div className="container">
        <div className="upgrade">
          <h3>Double Stuff</h3>
          <p>2x per click</p> 
          <button label="10 samosas" >Buy</button>
        </div>

        <div className="upgrade">
          <h3>Party Pack</h3>
          <p>5x per click</p> 
          <button label="100 samosas" >Buy</button>
        </div>

        <div className="upgrade">
          <h3>Full feast</h3>
          <p>10x per click</p> 
          <button label="1000 samosas" >Buy</button>
          
        </div>
      </div>

    </div>


  )
}

export default App;