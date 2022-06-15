import _ from 'lodash';
import './style.css';
// import './x.scss'  引入 scss 
import './x.less'
import './y.styl'
import png from'./img.png'

const app = document.querySelector('#app')
app.innerHTML=`
    <img src= "${png}">
`
const button = document.createElement('button')
button.innerHTML="懒加载"
app.appendChild(button)
button.onclick = ()=>{
  const promise = import('./lazy.js')
  promise.then((module)=>{
    const fn = module.default
    fn()
  },()=>{
    console.log("模块加载失败");
  }
  )
}


function component() {
  const element = document.createElement('div');
  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  return element;
}

document.body.appendChild(component());