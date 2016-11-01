import common from 'svc2Src/util/js/common'
import React from 'react';
import {render} from 'react-dom';
import 'svc2Src/util/css/a.scss';

render(
  <div>
    <h1>page A</h1>
    <img src={require('svc2Src/util/img/page-a-img.jpg')} />
  </div>
  ,
  document.getElementById('app')
);
