
import { useState } from 'react';
import './App.css';

function App() {

  const [formData, setFormData] = useState( {firstName:"", lastName:"", email:"", country:"India", street:"", City:"", state:"", ZIPCode:"", comment:false, candidates:false, offers:false, SMS:""} );

  function changeHandler (event) {
    const {name, value, checked, type} = event.target;

    setFormData( prevFormData => {
      return {
        ...prevFormData,
        [name]:type === "checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing the entire form ka data .......");
    console.log(formData);
  }
  return (
    <div className="flex flex-col items-center mt-28">
      <form onSubmit={submitHandler}>
        <label htmlFor='firstName' >First name</label>
        <br></br>
        <input type='text' name='firstName' id='firstName' placeholder='Amit' onChange={changeHandler} value={formData.firstName} />
        <br></br>

        <label htmlFor='lastName'>Last name</label>
        <br></br>
        <input type='text' name='lastName' id='lastName' placeholder='Singh' onChange={changeHandler} value={formData.lastName}/>
        <br></br>

        <label htmlFor='email'>Email address</label>
        <br></br>
        <input type='email' name='email' id='email' placeholder='asingh@king.com' onChange={changeHandler} value={formData.email}/>
        <br></br>

        <label htmlFor='country'>Country</label>
        <select name='country' id='country' value={formData.country} onChange={changeHandler}>
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
        </select>
        <br></br>

        <label htmlFor='street'>Street address</label>
        <br></br>
        <input type='text' name='street' id='street' placeholder='1234 main St' onChange={changeHandler} value={formData.street}/>
        <br></br>

        <label htmlFor='City'>City</label>
        <br></br>
        <input type='text' name='City' id='City' placeholder='Mumbai' onChange={changeHandler} value={formData.City}/>
        <br></br>

        <label htmlFor='state'>State / Province</label>
        <br></br>
        <input type='text' name='state' id='state' placeholder='Maharashtra' onChange={changeHandler} value={formData.state}/>
        <br></br>

        <label htmlFor='ZIPCode'>ZIP / Postal code</label>
        <br></br>
        <input type='number' name='ZIPCode' id='ZIPCode' placeholder='451265' onChange={changeHandler} value={formData.ZIPCode}/>
        <br></br>

        <div>
          <h3>By Email</h3>
          <div>
            <input type='checkbox' name='comment' id='comment' onChange={changeHandler} checked={formData.comment} />
            <div>
              <label htmlFor='comment'>Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div>
            <input type='checkbox' name='candidates' id='candidates' onChange={changeHandler} checked={formData.candidates} />
            <div>
              <label htmlFor='candidates'>Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div>
            <input type='checkbox' name='offers' id='offers' onChange={changeHandler} checked={formData.offers} />
            <div>
              <label htmlFor='offers'>Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </div>

        <div>
          <h3>Push Notifications</h3>
          <p>These are delivered via SMS to your mobile phone.</p>

          <div>
            <div>
              <input type='radio' name='SMS' id='everything' onChange={changeHandler} value="Everything" checked={formData.SMS === "Everything"} />
              <label htmlFor='everything'>Everything</label>
            </div>

            <div>
              <input type='radio' name='SMS' id='Same-email' onChange={changeHandler} value="Same-email" checked={formData.SMS === "Same-email"} />
              <label htmlFor='Same-email'>Same as email</label>
            </div>

            <div>
              <input type='radio' name='SMS' id='Push-notifications' onChange={changeHandler} value="Push-notifications" checked={formData.SMS === "Push-notifications"} />
              <label htmlFor='Push-notifications'>No push notifications</label>
              <br></br>
            </div>
          </div>
        </div>
        
        <button>Save</button>
      </form>
    </div>
  );
}

export default App;
