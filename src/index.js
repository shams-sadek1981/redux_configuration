import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'babel-polyfill'
import { render } from 'react-dom'
import Root from './containers/Root'

render(<Root />, document.getElementById('root'))