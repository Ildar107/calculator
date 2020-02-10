import _ from 'lodash';
import './style.css';
import img from './assets/image/calc.png';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'World!',], ' ');
    element.classList.add('hello');

    const icon = new Image();
    icon.src = './dist/' + img;
    element.appendChild(icon);
    return element;
}

document.body.appendChild(component());