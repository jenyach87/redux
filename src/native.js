import './styles.css'
import {createStore} from '../src/createStore'
import rootReducer from './redux/rootReducer'

const counter = document.querySelector('#counter')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const asyncBtn = document.querySelector('#async')
const themeBtn = document.querySelector('#theme')

const store = createStore(rootReducer, {
 counter: 0
});

window.Storage = store
addBtn.addEventListener('click', function(){
})

subBtn.addEventListener('click', ()=>{
  
}) 

asyncBtn.addEventListener('click', ()=>{
  
})

themeBtn.addEventListener('click', () =>{
  // document.body.classList.toggle('dark')
})