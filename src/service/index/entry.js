import React from 'react';
import {render} from 'react-dom';
import App from 'svc2Src/components/app';
import common from 'svc2Src/util/js/common';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';


require('svc2Src/util/css/index.scss');

let store = createStore(reducer);

render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
  ,
  document.getElementById('app')
);
