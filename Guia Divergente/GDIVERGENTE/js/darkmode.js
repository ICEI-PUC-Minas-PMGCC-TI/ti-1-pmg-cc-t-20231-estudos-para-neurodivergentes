const chk = document.getElementById('chk')
const chk2 = document.getElementById('chk2')
var cores;
chk.addEventListener('change', () => {
  if(chk2.checked == true){
    chk2.checked = false;
  }
  mudancaChk();
})
function iniciarPag(){
  let c = JSON.parse(localStorage.getItem("cores"))
  if(c.darkmode){
    chk.checked = true;
  }
  else{
    chk.checked = false;
  }
  if(c.colored){
    chk2.checked= true;
  }
  else{
    chk2.checked = false;
  }
  mudancaChk();
  
}
function darkmode(){
  document.getElementById('nav').classList.add('dark')
  
  document.body.classList.add('dark')
  document.getElementById('section').classList.add('dark')
}
function nodarkmode(){
  document.getElementById('nav').classList.remove('dark')
  document.body.classList.remove('dark')
  document.getElementById('section').classList.remove('dark')
}
function colored(){
  document.body.classList.add('colored')
  document.getElementById('section').classList.add('colored')
}
function nocolored(){
  document.body.classList.remove('colored')
  document.getElementById('section').classList.remove('colored')
}
function mudancaChk(){
  if(chk.checked){
    cores = {
      "darkmode": true,
      "colored": false
    }
  
  }
  else{
    cores = {
      "darkmode": false,
      "colored": false
    }
    if(chk2.checked){
      cores = {
        "darkmode": false,
        "colored": true
      }
    }
    else{
      cores = {
        "darkmode": false,
        "colored": false
      }
    }
  }
  if(cores.darkmode){
    darkmode();
  }
  else{
    nodarkmode();
  }
  if(cores.colored){
    colored();
  }
  else{
    nocolored();
  }
  let colors = JSON.stringify(cores);
  localStorage.setItem("cores",colors);
} 

chk2.addEventListener('change', () => {
  if(chk.checked == true){
    chk.checked = false;
  }
  mudancaChk();
  
})
$(document).ready(()=>{
  iniciarPag();
})