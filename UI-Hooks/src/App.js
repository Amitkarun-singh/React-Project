import logo from './logo.svg';
import './App.css';
import { window } from 'global';
import { useEffect, useState } from 'react';

function App() {

  const [text, setText] = useState(window.innerWidth);

  // variation 1 -> every render
  // useEffect(() => {
  //   console.log("UI RENDERING DONE");
  // });

  // variation 2 -> first time only
  // useEffect(() => {
  //   console.log("UI RENDERING DONE");
  // },[]);

  // variation 3 -> first render + whenever dependancy changes
  useEffect(() => {
    console.log("CHANGE OBSERVED");
  },[text]);

  // variation 4 -> to handle unmounting of a component
  // useEffect(() => {
  //   // Add event listener
  //   console.log("Listener added");

  //   // remove event listener
  //   return () =>{
  //     console.log("listener removed");
  //   }
  // },[text]);

  function changeHandler(event) {
    console.log(text);
    setText(event.target.value);
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler} value={text}/>
    </div>
  );
}

export default App;
