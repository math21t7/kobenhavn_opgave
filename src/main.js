import "./style.css";
const btnLight = document.querySelector("#light");
const btnDark = document.querySelector("#dark")

btnDark.addEventListener('click', ()=> {
  document.documentElement.classList.add('dark');
})
btnLight.addEventListener('click', ()=> {
    document.documentElement.classList.remove('dark');
  })