// deklarasi elemen dom

// menu tarik-turun
const select = document.getElementById("select");
// end menu tarik-turun

// menutup ketika di luar menu tarik-turun
const opsiTema = document.getElementById("opsi-tema");
// end menutup ketika di luar menu tari-turun

// mode terang
const temaSun = document.getElementById("tema-sun");
// end mode terang

// mode gelap
const temaMoon = document.getElementById("tema-moon");
// end mode gelap

// mode bawaan
const temaSystem = document.getElementById("tema-system");
// end mode bawaan

// perubahan ketika klik navbar
const navbarA = document.querySelectorAll("#navbarA a");
// end perubahan ketika klik navbar

// scroll
const profilImg = document.querySelector("#profilImg");
const aboutMe = document.querySelector("#aboutMe");
const aboutI = document.querySelector("#aboutI");
// end scroll

// animasi ketikan
const tentang = document.getElementById("aboutI");
// end animasi ketikan

// end deklarasi elemen dom

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

// scroll
const scrollImg = {
  root: null,
  rootMargin: "-80px 0px -80px 0px",
  threshold: 0.4,
};

const penjagaScroll = new IntersectionObserver((item) => {
  item.forEach((subjek) => {
    if (subjek.isIntersecting) {
      subjek.target.classList.remove("hilang-scroll");
      subjek.target.classList.add("tampil-scroll");
    } else {
      subjek.target.classList.add("hilang-scroll");
      subjek.target.classList.remove("tampil-scroll");
    }
  });
}, scrollImg);

document.querySelectorAll("#profilImg, #aboutMe, #aboutI").forEach((elemen) => {
  penjagaScroll.observe(elemen);
});

// end scroll

// animasi ketikan
const halo = "Halo";
const sapaanHtml = ` <img src="./img/waving-hand.gif" alt="emoji melambai-lambai" class="emoji-melambai-lambai"/>`;
const deskripsiSaya =
  " Saya Naya, seorang siswa PPLG dari SMKN 2 Magelang yang memiliki ketertarikan besar dalam dunia pengembangan perangkat lunak. Saat ini saya menguasai beberapa teknologi web dasar dan terus menantang diri untuk mempelajari bahasa pemrograman baru guna memperluas keahlian saya.";

let indeksHalo = 0;
let indeksDeskripsiSaya = 0;

const kecepatanHalo = 120;
const kecepatanDeskripsi = 35;
const ketikanPerHuruf = 100;

function ketikHalo() {
  if (indeksHalo < halo.length) {
    tentang.innerHTML = `<span class="besar-kata kursor-teks">${halo.substring(0, indeksHalo + 1)}</span>`;
    indeksHalo++;
    setTimeout(ketikHalo, kecepatanHalo);
  } else {
    tentang.innerHTML = `<span class="besar-kata" id="besar-kata">Halo ${sapaanHtml}</span><span id="teksDeskripsi" class="kursor-teks"></span>`;
    setTimeout(ketikDeskripsiSaya, kecepatanDeskripsi);
  }
}

function ketikDeskripsiSaya() {
  const teksDeskripsi = document.getElementById("teksDeskripsi");
  if (indeksDeskripsiSaya < deskripsiSaya.length) {
    teksDeskripsi.append(deskripsiSaya.charAt(indeksDeskripsiSaya));
    indeksDeskripsiSaya++;
    setTimeout(ketikDeskripsiSaya, kecepatanDeskripsi);
  }
}

// Jalankan saat halaman web selesai dimuat
window.addEventListener("DOMContentLoaded", ketikHalo);
// end Jalankan saat halaman web selesai dimuat

// end animasi ketikan
