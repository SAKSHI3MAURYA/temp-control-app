import React,{useState} from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0);

    const [tempColor, setTempColor] = useState("cold");

    function increment(){
        const newCount = count+1;

        if(newCount >= 15){
            setTempColor('hot')
        }
        setCount(newCount)
    }

    function decrement(){
        const newCount = count-1;

        if(newCount <15){
            setTempColor('cold');
        }
        setCount(newCount)
    }

    
        
  return (
<div className='app-container'>
<p>BACKGROUND COLOR CHAN  GER ON TEMPERATURE CHANGE</p>
    <div className={`container ${tempColor}`}>
    
    <h1>{count}°C</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
    </div>
  )
}

export default App;
