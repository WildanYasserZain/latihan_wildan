// JAM DIGITAL
function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// VALIDASI FORM REGISTRASI
function validateRegistration(e) {
  e.preventDefault();
  let name = document.getElementById("reg-name").value;
  let team = document.getElementById("reg-team").value;
  let email = document.getElementById("reg-email").value;

  if (name === "" || team === "" || email === "") {
    alert("Semua kolom wajib diisi!");
  } else {
    alert("Registrasi berhasil! Selamat bergabung " + name + " dari tim " + team + "!");
    document.getElementById("regForm").reset();
  }
}

// VALIDASI FORM KONTAK
function validateContact(e) {
  e.preventDefault();
  let nama = document.getElementById("contact-name").value;
  let pesan = document.getElementById("contact-message").value;

  if (nama === "" || pesan === "") {
    alert("Harap isi nama dan pesan!");
  } else {
    alert("Pesan terkirim, terima kasih " + nama + "!");
    document.getElementById("contactForm").reset();
  }
}

let tickerIndex = 0;
setInterval(() => {
  const ticker = document.getElementById("ticker-text");

  function changeTicker() {
    tickerElement.textContent =
tickerTexts[currentTicker];
    currentTicker = (currentTicker + 1 ) %
tickerTexts.length;
  }
  if (ticker) {
    ticker.textContent = tickerMessages[tickerIndex];
    tickerIndex = (tickerIndex + 1) % tickerMessages.length;
  }
}, 10000);

const bgm = document.getElementById('bgmusic');
const btn = document.getElementById('playbtn');

// Fungsi play / pause
btn.addEventListener('click', () => {
  if (bgm.paused) {
    bgm.play();
    btn.textContent = '⏸ Pause Music';
  } else {
    bgm.pause();
    btn.textContent = '▶ Play Music';
  }
});

// Auto play setelah halaman dimuat
window.addEventListener('load', () => {
  // beberapa browser butuh interaksi dulu, jadi amanin pakai try-catch
  try {
    bgm.volume = 0.5; // volume setengah biar halus
    bgm.play().catch(() => {
      // kalau browser blokir autoplay, tombol tetap aktif
      btn.textContent = '▶ Play Music';
    });
  } catch (e) {
    console.log('Autoplay tidak diizinkan oleh browser:', e);
  }
});