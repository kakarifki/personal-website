// Array berisi nama font yang diinginkan
const fonts = ['Arial', 'Georgia', 'Courier New', 'Times New Roman', 'Verdana', 'Tahoma', 'Lucida Console'];

let intervalId;

function changeFontRandomly() {
    const element = document.getElementById('dynamic-font');
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    element.style.fontFamily = randomFont;
}

// Fungsi untuk memulai animasi
function startAnimation() {
    intervalId = setInterval(changeFontRandomly, 300);
}

// Fungsi untuk menghentikan animasi
function stopAnimation() {
    clearInterval(intervalId);
}

// Mulai animasi saat halaman dimuat
startAnimation();

// Hentikan animasi saat di-hover
document.getElementById('dynamic-font').addEventListener('mouseover', function() {
    stopAnimation();
});

// Lanjutkan animasi saat hover selesai
document.getElementById('dynamic-font').addEventListener('mouseout', function() {
    startAnimation();
});