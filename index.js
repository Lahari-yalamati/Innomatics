import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import StudentList from './ex/StudentList';
import PropsValid from './ex/PropsValid';
import Student from './ex/stuClass';
import Stu from './ex/stuClassp';
import Stud from './ex/funcStusestate';
import RegistrationForm from './ex/Regis';
import Reg from './ex/Registration';
import StudentList from './ex/StudentList';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
