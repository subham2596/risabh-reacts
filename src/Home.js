import React from 'react'
import {Routes, Route, Link} from 'react-router-dom';

import logo from './logo.svg';

import Hello from './Hello';
import World from './World';

const Home = () => {
  return (
    <React.Fragment>

      <div>Home</div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>


    
    <div className="navg">
      <Link to='/home/hello'>link1</Link>
      <Link to= '/home/world'>link2</Link>
    </div>

    <Routes>
      <Route path='/home/hello' element={<Hello/>}></Route>
      <Route path='/home/world' element={<World/>}></Route>
    </Routes>


    </React.Fragment>
  )
}

export default Home;