// require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { App } from './pages/App';

//import common css sstyle
import './css/root.css';
import './css/scrollbar.css';
import './css/common.css';


// const root = document.getElementById('app');
// ReactDOM.render(<App />, root);
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);