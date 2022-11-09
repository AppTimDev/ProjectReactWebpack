// require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './js/App';

//import common css sstyle
import './css/common/root.css';
import './css/common/scrollbar.css';
import './css/common/common.css';

import './css/App.scss';

const root = document.getElementById('app');
ReactDOM.render(<App />, root);