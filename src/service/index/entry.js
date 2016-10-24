import React from 'react';
import {render} from 'react-dom';
import App from 'svc2Src/components/app';
import common from 'svc2Src/util/js/common'

require('svc2Src/util/css/index.scss');

render(
  <App />,
  document.getElementById('app')
);
