
import './App.css';

import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import About from './About';
import CounterApp from './app-components/CounterApp';
import BillSplit from './app-components/Bill-Split';
import Collaborations from './Collaborations';

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <h2 className="logo">risabhReacts</h2>
        <div className="nav-links">
          <Link to='/' className='link'>Home</Link>
          <Link to='/about' className='link'>About</Link>
          <Link to='/counter' className='link'>Counter App</Link>
          <Link to='/bill-split' className='link'>Bill-Split App</Link>
          <Link to='/collabs' className='link link-btn'>Collaborations</Link>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/counter' element={<CounterApp/>}></Route>
        <Route path='/bill-split' element={<BillSplit/>}></Route>
        <Route path='/collabs' element={<Collaborations/>}></Route>
      </Routes>

      
    </div>
  );
}

export default App;
