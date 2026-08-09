const select = document.getElementById('select');
const opsiTema = document.getElementById('opsi-tema');
const temaSun = document.getElementById('tema-sun');
const temaMoon = document.getElementById('tema-moon');
const temaSystem = document.getElementById('tema-system');

// menu tarik-turun
select.addEventListener("click", (e) => {
  e.stopPropagation();
  opsiTema.classList.toggle("tampil");
});

// menutup ketika di luar menu tarik-turun
document.addEventListener('click', (e) => {
  if(!opsiTema.contains(e.target) && !select.contains(e.target)) {
    opsiTema.classList.remove('tampil');
  }
})

// mode terang
temaSun.addEventListener('click', () => {
  document.body.classList.remove('dark-theme');
  opsiTema.classList.remove('tampil');
})

// mode gelap
temaMoon.addEventListener('click', () => {
  document.body.classList.add('dark-theme');
  opsiTema.classList.remove('tampil');
})

// mode bawaan
temaSystem.addEventListener('click', () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersDark) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }

  opsiTema.classList.remove('tampil');
})