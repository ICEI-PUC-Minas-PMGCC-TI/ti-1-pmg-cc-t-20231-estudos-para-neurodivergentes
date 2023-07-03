const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

const chk2 = document.getElementById('chk2')

chk2.addEventListener('change', () => {
  document.body.classList.toggle('colored')
})