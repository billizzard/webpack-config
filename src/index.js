import _ from 'lodash';
import './style.css';
import './styles/styles.scss';
//import Icon from './icon.png';
import printMe from './print.js';
import someMath from './esLast.js';

function component() {
  let element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   btn.innerHTML = 'Click me and check the console!';
   btn.onclick = printMe;
   btn.onclick = (e) => {
console.log(e);
   	someMath.sum(2,3)};

   element.appendChild(btn);

  // var myIcon = new Image();
  // myIcon.src = Icon;

 // element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
