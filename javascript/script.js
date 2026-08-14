const select = document.getElementById("select");
const opsiTema = document.getElementById("opsi-tema");
const temaSun = document.getElementById("tema-sun");
const temaMoon = document.getElementById("tema-moon");
const temaSystem = document.getElementById("tema-system");
const navbarA = document.querySelectorAll("#navbarA a");

// menu tarik-turun
select.addEventListener("click", (e) => {
  e.stopPropagation();
  opsiTema.classList.toggle("tampil");
  select.classList.toggle("active");
});
// end menu tarik-turun

// menutup ketika di luar menu tarik-turun
document.addEventListener("click", (e) => {
  if (!opsiTema.contains(e.target) && !select.contains(e.target)) {
    opsiTema.classList.remove("tampil");
  }
});
// end menutup ketika di luar menu tari-turun

// mode terang
temaSun.addEventListener("click", () => {
  document.body.classList.remove("dark-theme");
  opsiTema.classList.remove("tampil");
});
// end mode terang

// mode gelap
temaMoon.addEventListener("click", () => {
  document.body.classList.add("dark-theme");
  opsiTema.classList.remove("tampil");
});
// end mode gelap

// mode bawaan
temaSystem.addEventListener("click", () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (prefersDark) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }

  opsiTema.classList.remove("tampil");
});
// end mode bawaan

// perubahan ketika klik navbar
navbarA.forEach((link) => {
  link.addEventListener("click", function () {
    // hapus class active dari semua menu
    navbarA.forEach((item) => item.classList.remove("active"));
    // end hapus class active dari semua menu

    // tambah class active ke menu yang baru saja di klik
    this.classList.add("active");
    // end tambah class active ke menu yang baru saja di klik
  });
});
// end perubahan ketika klik navbar
