// Array berisi nama font yang diinginkan
const fonts = ['Arial', 'Georgia', 'Courier New', 'Times New Roman', 'Verdana', 'Tahoma', 'Lucida Console'];

function changeFontRandomly() {
    const element = document.getElementById('dynamic-font');
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    element.style.fontFamily = randomFont;
}

// Ubah font setiap 500 ms
const intervalId = setInterval(changeFontRandomly, 500);

// Hentikan animasi saat elemen di-hover
document.getElementById('dynamic-font').addEventListener('mouseover', function() {
    clearInterval(intervalId);
});