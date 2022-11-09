// require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './pages/App';

//import common css sstyle
import './css/root.css';
import './css/scrollbar.css';
import './css/common.css';

// import './css/App.scss';

const root = document.getElementById('app');
ReactDOM.render(<App />, root);