import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import inputCheck from './modules/input';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

timer('25 jule 2022');
menu();
modal();
inputCheck();
tabs();
slider('.portfolio-content', '.portfolio-item', '.portfolio-dots');
calc(100);
sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});
sendForm({ formId: 'form2' });
sendForm({ formId: 'form3' });
