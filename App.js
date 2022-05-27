import React from 'react'
import {Timer} from './Components/Timer'
import './App.css';

function App() {
  const [toggle,setToggle] = React.useState(false)
  const [timings, setTimings] = React.useState({
    start : 0,
    stop : 0
  })

  const updateTimings = (e)=>{
    setTimings({
      ...timings,
      [e.target.name] : [e.target.value]
  })
  }
  // const handleToggle = ()=>{
  //   if(toggle === 'start') return setToggle("stop");
  //   else return setToggle("start")
    
  // }
  return (
    <div className="App">
      <input name = 'start' type = "text" placeholder = "Start Time" onChange={(e)=>updateTimings(e)}/>
      <input name = 'stop' type = 'text' placeholder = "Stop Time" onChange={(e)=>updateTimings(e)}/>
      <button onClick = {()=>setToggle(!toggle)}>Begin</button>
      {toggle?<Timer {...timings}/> :null}
    </div>
  );
}

export default App;
