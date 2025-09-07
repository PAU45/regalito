// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos con las letras y sus tiempos de aparición en segundos
// NOTA: He ajustado los tiempos para que haya más espacio entre cada línea.
var lyricsData = [
  { text: "Amo despertar", time: 10 },
  { text: "Y hundirme en tu corazón", time: 14 },
  { text: "Estando a tu lado, fuego intramuscular", time: 23 },
  { text: "Se trata de química mayor", time: 32 },
  { text: "Amo caminar", time: 42 },
  { text: "De tu mano en cualquier lugar", time: 51 },
  { text: "Poesía interestelar", time: 59 },
  { text: "Así es nuestro amor", time: 69 },
  { text: "Estamos tan enamorados", time: 78 },
  { text: "Solos en el mundo, como un par de adolescentes", time: 85 },
  { text: "Que se aman locamente", time: 89 },
  { text: "Somos dos enamorados", time: 91 },
  { text: "Explotando la ciudad", time: 96 },
  { text: "Amor de un millón de años luz", time: 100 },
  { text: "Te quiero dibujar", time: 102 },
  { text: "Posa un poquito para mí", time: 106 },
  { text: "Nos deberíamos de nacionalizar", time: 113 },
  { text: "Nuestro país, una revolución", time: 121 },
  { text: "Estamos tan enamorados", time: 127 },
  { text: "Solos en el mundo, como un par de adolescentes", time: 131 },
  { text: "Que se aman locamente", time: 137 },
  { text: "Somos dos enamorados", time: 142 },
  { text: "Explotando la ciudad", time: 146 },
  { text: "Amor de un millón de años luz", time: 150 },
  { text: "Te quiero dibujar", time: 155 },
  { text: "Posa un poquito para mí", time: 159 },
  { text: "Nos deberíamos de nacionalizar", time: 167 }
];

let currentLineIndex = 0;

function updateLyrics() {
  const currentTime = audio.currentTime;

  if (currentLineIndex >= lyricsData.length) {
    lyrics.innerHTML = "";
    return;
  }

  const currentLine = lyricsData[currentLineIndex];
  const nextLine = lyricsData[currentLineIndex + 1];

  if (currentTime >= currentLine.time) {
    if (nextLine && currentTime >= nextLine.time) {
      currentLineIndex++;
    }
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.innerHTML = "";
  }
  
  requestAnimationFrame(updateLyrics);
}

audio.addEventListener('play', () => {
  requestAnimationFrame(updateLyrics);
});

function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(function () {
      titulo.style.display = "none";
    }, 3000);
  }
}

setTimeout(ocultarTitulo, 216000);