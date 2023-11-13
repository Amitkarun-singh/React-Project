import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import NotFound from './Component/NotFound';
import About from './Component/About';
import Support from './Component/Support';
import Lab from './Component/Lab';
import MainHeader from './Component/MainHeader';

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/Lab">Lab</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<MainHeader/>}>
          <Route index element={<Home />} />
          <Route path='/About' element={<About/>}/>
          <Route path='/Support' element={<Support/>}/>
          <Route path='/Lab' element={<Lab/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
