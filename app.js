const tombolTidak = document.getElementById("tombolTidak");
const tombolYa = document.getElementById("tombolYa");

const listKalimat = [
  "Coba Lagi 😅",
  "Udah jangan dipencet terus 😂",
  "Bilang Iya Aja 😎",
  "Mending Nyerah 🤣",
  "KLIK YA!!! 😤",
  "Tombolnya kabur 😜",
  "Yakin mau pilih Tidak? 🤔",
  "Hayooo ketipu 😆"
];

const kalimat = document.getElementById("kalimat");
const gambar = document.getElementById("gambar");

function yaDitekan() {
  kalimat.innerHTML = "🎉 Selamat Anda Warga PSHT 🎉";

  gambar.src =
    "https://media.tenor.com/sFQQHMkjxMQAAAAM/xiix4r-psht.gif";

  tombolYa.style.display = "none";
  tombolTidak.style.display = "none";
}

function tidakDitekan() {
  const randomKalimat = Math.floor(Math.random() * listKalimat.length);
  kalimat.innerHTML = listKalimat[randomKalimat];

  tombolTidak.style.position = "absolute";

  const maxX = window.innerWidth - tombolTidak.offsetWidth;
  const maxY = window.innerHeight - tombolTidak.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  tombolTidak.style.left = randomX + "px";
  tombolTidak.style.top = randomY + "px";
}
