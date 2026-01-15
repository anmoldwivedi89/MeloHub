let currentSong = new Audio();
let currentSongIndex = 0;

// Song metadata with images, artists, and file names
const songs = [
  {
    name: "Iraaday",
    artist: "Arijit Singh",
    file: "Iraaday",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%231db954;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23191414;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g1)'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='32' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EIraaday%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Ishq Jalakar",
    artist: "Shreya Ghoshal",
    file: "Ishq Jalakar",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23e91e63;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23880e4f;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g2)'/%3E%3Ctext x='50%25' y='45%25' font-family='Arial' font-size='28' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EIshq%3C/text%3E%3Ctext x='50%25' y='55%25' font-family='Arial' font-size='28' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EJalakar%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Pal Pal Dil Ke Paas",
    artist: "Kishore Kumar",
    file: "pal pal",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%239c27b0;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%234a148c;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g3)'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='26' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EPal Pal%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Millionaire",
    artist: "Yo Yo Honey Singh",
    file: "millional",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff9800;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23e65100;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g4)'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='32' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EMillionaire%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Raanjhanaa",
    artist: "A.R. Rahman",
    file: "Raanjhanaa",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%232196f3;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%230d47a1;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g5)'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='32' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3ERaanjhanaa%3C/text%3E%3C/svg%3E"
  }
];

const playMusic = (index, pause = false) => {
  if (index < 0 || index >= songs.length) return;

  currentSongIndex = index;
  const song = songs[index];
  let audioPath = "songs/" + song.file;

  console.log("Playing:", song.name);

  currentSong.src = audioPath;

  if (!pause) {
    currentSong.play().catch(error => {
      console.error("Playback failed:", error);
    });
    document.getElementById("play").src = "pause.svg";
  }

  // Update song info in playbar
  document.querySelector(".songinfo").innerHTML = `${song.name} - ${song.artist}`;
  document.querySelector(".songtime").innerHTML = "00:00 / 00:00";

  // Update active card styling
  updateActiveCard();
};

// Update active card visual feedback
function updateActiveCard() {
  document.querySelectorAll(".card").forEach((card, idx) => {
    if (idx === currentSongIndex) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
}

// Listen for errors
currentSong.addEventListener("error", (e) => {
  console.error("Error loading audio file:", currentSong.src);
  alert("Error: Song not found! Check the console (F12) for details.");
});

// Auto play next song when current ends
currentSong.addEventListener("ended", () => {
  if (currentSongIndex < songs.length - 1) {
    playMusic(currentSongIndex + 1);
  }
});

async function main() {
  // Generate song cards
  let cardContainer = document.querySelector(".cardContainer");
  cardContainer.innerHTML = ""; // Clear existing cards

  songs.forEach((song, index) => {
    cardContainer.innerHTML += `
      <div class="card" data-index="${index}">
        <div class="play">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="green">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.5 8v8l6-4-6-4z" fill="white" />
          </svg>
        </div>
        <img src="${song.image}" alt="${song.name}">
        <h2>${song.name}</h2>
        <p>${song.artist}</p>
      </div>`;
  });

  // Add click listeners to cards
  Array.from(document.querySelectorAll(".card")).forEach((card, index) => {
    card.addEventListener("click", () => {
      playMusic(index);
    });
  });

  // Populate library songlist
  let songUL = document.querySelector(".songList ul");
  songUL.innerHTML = "";

  songs.forEach((song, index) => {
    songUL.innerHTML += `
      <li data-index="${index}">
        <img class="invert" src="music.svg" alt="">
        <div class="info">
          <div style="width:91px">${song.name}</div>
          <div style="width:91px">${song.artist}</div>
        </div>
        <div class="playnow">
          <span>Play now</span>
          <img class="invert" src="play.svg" alt="">
        </div>
      </li>`;
  });

  // Add click listeners to library songs
  Array.from(document.querySelectorAll(".songList li")).forEach((li, index) => {
    li.addEventListener("click", () => {
      playMusic(index);
    });
  });

  // Load first song but don't play
  playMusic(0, true);

  // Play/Pause button
  document.getElementById("play").addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      document.getElementById("play").src = "pause.svg";
    } else {
      currentSong.pause();
      document.getElementById("play").src = "play.svg";
    }
  });

  // Previous button
  document.getElementById("previous").addEventListener("click", () => {
    if (currentSongIndex > 0) {
      playMusic(currentSongIndex - 1);
    }
  });

  // Next button
  document.getElementById("next").addEventListener("click", () => {
    if (currentSongIndex < songs.length - 1) {
      playMusic(currentSongIndex + 1);
    }
  });

  // Time update
  currentSong.addEventListener("timeupdate", () => {
    document.querySelector(".songtime").innerHTML =
      `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
    document.querySelector(".circle").style.left =
      (currentSong.currentTime / currentSong.duration) * 100 + "%";
  });

  // Seekbar
  document.querySelector(".seekbar").addEventListener("click", e => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    currentSong.currentTime = (currentSong.duration * percent) / 100;
  });
}

function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) return "00:00";
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

// Menu listeners
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".left").style.left = "0"
})
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".left").style.left = "-120%"
})

main();