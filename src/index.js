import React from 'react';
import {render} from 'react-dom';
import App from './components/app';
import common from './util/js/common'

require('./util/css/index.scss');

render(
  <App />,
  document.getElementById('app')
);
