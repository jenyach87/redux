import './styles.css'
 
let state = 0;
const counter = document.querySelector('#counter')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const asyncBtn = document.querySelector('#async')
const themeBtn = document.querySelector('#theme')

function render(){
  counter.textContent = state;
}
render();

addBtn.addEventListener('click', function(){
  state++;
  render();
})

subBtn.addEventListener('click', ()=>{
  state--;
  render();
}) 

asyncBtn.addEventListener('click', ()=>{
  setTimeout(() =>{
    state++;
    render();
  }, 2000)
})

themeBtn.addEventListener('click', () =>{
  document.body.classList.toggle('dark')
})