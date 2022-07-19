import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import inputCheck from './modules/input';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';

timer('25 jule 2022');
menu();
modal();
inputCheck();
tabs();
slider('.portfolio-content', '.portfolio-item', '.portfolio-dots');
calc(100);
