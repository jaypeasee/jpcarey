import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App/App';
import { BrowserRouter } from 'react-router-dom'

const router = <BrowserRouter><App /></BrowserRouter>

ReactDOM.render(router,
  document.getElementById('root')
)
