import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as themes from './theme/schema.json';
import { setToLS } from './utils/storage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter} from "react-router-dom";
import Dashboard from './pages/dashboard';
const Index = () => {
  console.log(themes.default);
  setToLS('all-themes', themes.default);

  return(
    <App />
  )
}

ReactDOM.render(
  <BrowserRouter>
   <Index />
  </BrowserRouter>,
   
  document.getElementById('root')
);

