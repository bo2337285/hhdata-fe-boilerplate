import common from 'svc2Src/util/js/common'
import React from 'react';
import {render} from 'react-dom';
import 'svc2Src/util/css/b.scss';
import img from 'svc2Src/util/img/page-b-img.png';

render(
  <div>
    <h1>page B</h1>
    <img src={img} />
  </div>
  ,
  document.getElementById('app')
);
