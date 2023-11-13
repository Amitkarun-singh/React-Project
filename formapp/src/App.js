import { useState } from 'react';
import './App.css';

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // function changeFirstNameHandler(event) {
  //   // console.log("Printing first name");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event) {
  //   // console.log("Printing last name");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState( {firstName:"", lastName:"", email:"", comments:"", isVisible:true, mode:"", favCar:""} );

  // console.log(formData);

  function changeHandler (event) {
    const {name, value, checked, type} = event.target;

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value 
      }
    });
  }

  function submitHandler (event) {
    event.preventDefault();
    console.log("Finally printing the entire form ka data .......");
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='First Name' onChange={changeHandler} name='firstName' value={formData.firstName}/>

        <br></br>
        <br></br>
        <input type='text' placeholder='Last Name' onChange={changeHandler} 
        name='lastName' value={formData.lastName}/>

        <br></br>
        <br></br>
        <input type='email' placeholder='Enter your email' onChange={changeHandler} 
        name='email' value={formData.email}/>

        <br></br>
        <br></br>
        <textarea placeholder='Enter yours comments' onChange={changeHandler} name='comments' value={formData.comments}/>

        <br></br>
        <br></br>
        <input type='checkbox' onChange={changeHandler} 
        name='isVisible' id="isVisible" checked={formData.isVisible} />
        <label htmlFor='isVisible'>I am a visible person</label>

        <br></br>
        <br></br>
        <input type='radio' onChange={changeHandler} 
        name='mode' id="Online-mode" value='Online-mode' checked={formData.mode === "Online-mode"} />
        <label htmlFor='Online-mode'>Online Mode</label>

        <br></br>
        <br></br>
        <input type='radio' onChange={changeHandler} 
        name='mode' id="Offline-mode" value='Offline-mode' checked={formData.mode === "Offline-mode"} />
        <label htmlFor='Offline-mode'>Offline Mode</label>

        <br></br>
        <br></br>
        <label htmlFor='favCar'>Tell me your Favourite Car</label>
        <select name='favCar' onChange={changeHandler} id='favCar' value={formData.favCar}>
          <option value="Scarpio">Scarpio</option>
          <option value="Fartuner">Fartuner</option>
          <option value="Tharrr">Tharrr</option>
          <option value="Legender">Legender</option>
          <option value="Defender">Defender</option>
        </select>

        <br></br>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
