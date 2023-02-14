//캡슐화해서 외부에서 호출을 제한함.

import increase2 from './counter.js';
import { increase as increase1, getCount } from './counter.js';
import * as counter from './counter.js';

increase2();
increase2();
getCount();
