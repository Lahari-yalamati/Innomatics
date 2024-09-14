import React from 'react';
import './App.css';
import SearchBar from './ex/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;


// App.js

// App.js

// App.js
/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './ex/Profile';
import Login from './ex/Login';
import Login1 from './ex/Login1';
import Profile1 from './ex/Profile1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path= '/' element= {<Login1 />}/>
        <Route path= '/Profile1' element ={<Profile1 />}/>
      </Routes>
    </Router>
  )}
export default App;
/*import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import One1 from "./ex/One1";
import Two2 from "./ex/Two2";
import Three3 from "./ex/Three3";
function App(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<One1/>}/>
        <Route path='/two2' element={<Two2/>}/>
        <Route path='/three3' element={<Three3/>}/>
      </Routes>
    </Router>
  )
}
export default App;
/*import logo from './logo.svg';
import './App.css';
import StatelessComponent from './ex/StatelessClassComponent';
import FunctionalComponent from './ex/FunctionalComponent';
import ClickButton from './ex/Count';
import ClickCounter from './ex/Counterusestate';*/
/*import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import "./App.css";
import Home from "./Home";
import LoginForm from "./LoginForm";
function App()
{
return(
  <Router>
    <Switch>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/login" element={<LoginForm/>}/>

    </Switch>
  </Router>
);
}
export default App;*/

/*import React from 'react';
import { RouterProvider, createBrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './ex/Profile';
import Login from './ex/Login';

const router = createBrowserRouter([
 {path: '/',element: <Login />},
 { path: '/profile', element: <Profile/> } 
]);
function App() {
 return (
 <RouterProvider router={router} />
 );
}
export default App;

/*function App() {
  return (
    <div className="App">
      <h1>React components example</h1>
      <ClickCounter />
    </div>
  );
}

export default App;*/
