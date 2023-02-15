//캡슐화해서 외부에서 호출을 제한함.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

import increase2 from './counter.js';
//import { increase as increase1, getCount } from './counter.js';
import * as counter from './counter.js';

//increase1();
increase2();
//getCount();
counter.getCount();
counter.increase();
