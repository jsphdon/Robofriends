import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 //import Card from './Card'; Card component
import CardList from './CardList' // CardList component
import 'tachyons'; // package
import {robots} from './robots'; // robots js file

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>

    <CardList robots ={robots}/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
