document.addEventListener("DOMContentLoaded", () => {
  const inputNama = document.getElementById("inputNama");
  const submitNama = document.getElementById("submitNama");
  const alertWrapper = document.getElementById("alertWrapper");
  const mainContent = document.getElementById("mainContent");
  const sapaan = document.getElementById("sapaan");
  const amplop = document.getElementById("amplop");
  const backsound = document.getElementById("backsound");
  const loveContainer = document.getElementById("love-container");

  let terbuka = false;
  let nama = "";

  submitNama.addEventListener("click", () => {
    nama = inputNama.value.trim();
    if (nama !== "") {
      sapaan.textContent = `Hai ${nama}, aku mau bilang sesuatu... Klik amplopnya ya!`;
      alertWrapper.remove();
      mainContent.classList.remove("d-none");
    }
  });

  amplop.addEventListener("click", () => {
    terbuka = !terbuka;

    if (terbuka) {
      amplop.src = "buka.png";
      amplop.classList.add("amplop-buka");
      sapaan.style.display = "none";
      backsound.currentTime = 0;
      backsound.play();
      buatLove(20);
    } else {
      amplop.src = "amplop.png";
      amplop.classList.remove("amplop-buka");
      sapaan.style.display = "block";
      backsound.pause();
      backsound.currentTime = 0;
    }
  });

  function buatLove(jumlah) {
    for (let i = 0; i < jumlah; i++) {
      const love = document.createElement("div");
      love.className = "love";
      love.textContent = "❤️";
      love.style.left = Math.random() * 100 + "vw";
      love.style.top = "100vh";
      loveContainer.appendChild(love);
      setTimeout(() => love.remove(), 2000);
    }
  }
});