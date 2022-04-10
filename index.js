import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from '../src/component/Navbar';
import Profile from '../src/component/Profile';
import Skills from '../src/component/Skills';
import Project from '../src/component/Project';
import Contact from '../src/component/Contact';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Profile />
    <Skills />
    <Project />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
