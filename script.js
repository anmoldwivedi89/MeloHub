let currentSong = new Audio();
let currentSongIndex = 0;

// Song metadata with images, artists, and file names
const songs = [
  {
    name: "Iraaday",
    artist: "Abdul Hannan",
    file: "Iraaday",
    language: "Hindi",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%231db954;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23191414;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g1)'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='32' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EIraaday%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Ishq Jalakar",
    artist: "Shreya Ghoshal",
    file: "Ishq Jalakar",
    language: "Hindi",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23e91e63;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23880e4f;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g2)'/%3E%3Ctext x='50%25' y='45%25' font-family='Arial' font-size='28' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EIshq%3C/text%3E%3Ctext x='50%25' y='55%25' font-family='Arial' font-size='28' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EJalakar%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Finding Her",
    artist: "Kushagra",
    file: "Finding_Her_(Jana_Mere_Sawalon_Ka_Manzar_Tu)___Kushagra___Vanshika___Bharath___Karan_Maini__UR_Debut_MP3_256kbps_128k.mp3",
    language: "Hindi",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g12' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f44336;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23212121;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g12)'/%3E%3Ctext x='50%25' y='45%25' font-family='Arial' font-size='24' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EFinding%3C/text%3E%3Ctext x='50%25' y='55%25' font-family='Arial' font-size='24' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EHer%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Die With A Smile",
    artist: "Lady Gaga & Bruno Mars",
    file: "Die_With_A_Smile_MP3_256kbps_128k.mp3",
    language: "English",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g8' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff4081;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%233f51b5;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g8)'/%3E%3Ctext x='50%25' y='45%25' font-family='Arial' font-size='24' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EDie With%3C/text%3E%3Ctext x='50%25' y='55%25' font-family='Arial' font-size='24' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EA Smile%3C/text%3E%3C/svg%3E"
  },
  {
    name: "End of Beginning",
    artist: "Djo",
    file: "End_of_Beginning_MP3_256kbps_128k.mp3",
    language: "English",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g9' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2300bcd4;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23009688;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g9)'/%3E%3Ctext x='50%25' y='45%25' font-family='Arial' font-size='24' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EEnd of%3C/text%3E%3Ctext x='50%25' y='55%25' font-family='Arial' font-size='24' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EBeginning%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Espresso",
    artist: "Sabrina Carpenter",
    file: "Espresso_MP3_256kbps_128k.mp3",
    language: "English",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g10' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23795548;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%233e2723;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g10)'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='32' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EEspresso%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Perfect",
    artist: "Ed Sheeran",
    file: "Ed_Sheeran_-_Perfect_MP3_256kbps_128k.mp3",
    language: "English",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g13' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%233f51b5;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%231a237e;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g13)'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='32' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EPerfect%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Heat Waves",
    artist: "Glass Animals",
    file: "Glass_Animals_-_Heat_Waves_(Official_Video)_MP3_256kbps_128k.mp3",
    language: "English",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g14' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff9800;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23e65100;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g14)'/%3E%3Ctext x='50%25' y='45%25' font-family='Arial' font-size='24' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EHeat%3C/text%3E%3Ctext x='50%25' y='55%25' font-family='Arial' font-size='24' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EWaves%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Sunflower",
    artist: "Post Malone & Swae Lee",
    file: "Post_Malone,_Swae_Lee_-_Sunflower_(Spider-Man__Into_the_Spider-Verse)_MP3_256kbps_128k.mp3",
    language: "English",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g15' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ffeb3b;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23f57f17;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g15)'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='32' font-weight='bold' fill='black' text-anchor='middle' dominant-baseline='middle'%3ESunflower%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Blank Space",
    artist: "Taylor Swift",
    file: "Taylor_Swift_-_Blank_Space_MP3_256kbps_128k.mp3",
    language: "English",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g16' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%239c27b0;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%234a148c;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g16)'/%3E%3Ctext x='50%25' y='45%25' font-family='Arial' font-size='24' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EBlank%3C/text%3E%3Ctext x='50%25' y='55%25' font-family='Arial' font-size='24' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3ESpace%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Blinding Lights",
    artist: "The Weeknd",
    file: "The_Weeknd_-_Blinding_Lights_(Official_Video)_MP3_256kbps_128k.mp3",
    language: "English",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g17' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23212121;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23b71c1c;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g17)'/%3E%3Ctext x='50%25' y='45%25' font-family='Arial' font-size='24' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EBlinding%3C/text%3E%3Ctext x='50%25' y='55%25' font-family='Arial' font-size='24' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3ELights%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Ordinary",
    artist: "Alex Warren",
    file: "Ordinary_MP3_256kbps_128k.mp3",
    language: "English",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g11' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23607d8b;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23263238;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g11)'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='32' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EOrdinary%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Pal Pal Dil Ke Paas",
    artist: "Kishore Kumar",
    file: "pal pal",
    language: "Hindi",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%239c27b0;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%234a148c;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g3)'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='26' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EPal Pal%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Millionaire",
    artist: "Yo Yo Honey Singh",
    file: "millional",
    language: "Hindi",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff9800;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23e65100;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g4)'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='32' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EMillionaire%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Raanjhanaa",
    artist: "A. R. Rahman",
    file: "Raanjhanaa",
    language: "Hindi",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%232196f3;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%230d47a1;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g5)'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='32' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3ERaanjhanaa%3C/text%3E%3C/svg%3E"
  }
];

// Initialize favorites from localStorage
let userFavorites = JSON.parse(localStorage.getItem('userFavorites')) || [];

// Safety check: Reset favorites if no user is logged in (prevents phantom favorites)
if (!localStorage.getItem('spotifyUser')) {
  userFavorites = [];
  localStorage.setItem('userFavorites', JSON.stringify([]));
}

function updateFavoritesStorage() {
  localStorage.setItem('userFavorites', JSON.stringify(userFavorites));
}

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
  document.querySelectorAll(".card").forEach((card) => {
    let idx = parseInt(card.getAttribute("data-index"));
    if (idx === currentSongIndex) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
}

// Function to render cards to a specific container
function renderCards(songsArray, containerId) {
  let container = document.querySelector(`#${containerId}`);
  if (!container) return;
  container.innerHTML = "";

  songsArray.forEach((song) => {
    // Find original index in global songs array
    const globalIndex = songs.findIndex(s => s.file === song.file);
    const isFav = userFavorites.includes(song.file);

    const cardHTML = `
      <div class="card" data-index="${globalIndex}">
        <div class="fav-heart ${isFav ? 'active' : ''}" data-file="${song.file}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
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
    container.innerHTML += cardHTML;
  });

  // Update favorite counters
  if (containerId === "favoriteContainer") {
    document.getElementById("favCount").textContent = `${songsArray.length} ${songsArray.length === 1 ? 'song' : 'songs'}`;
  }
  document.getElementById("sidebarFavCount").textContent = songsArray.length;
  // Re-add click listeners to cards
  container.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", (e) => {
      // Don't play if heart was clicked
      if (e.target.closest('.fav-heart')) return;

      let index = parseInt(card.getAttribute("data-index"));
      playMusic(index);
    });
  });

  // Add listeners to heart icons
  container.querySelectorAll(".fav-heart").forEach(heart => {
    heart.addEventListener("click", (e) => {
      e.stopPropagation();
      const fileName = heart.getAttribute("data-file");
      toggleFavorite(fileName, heart);
    });
  });
}

function toggleFavorite(fileName, heartElement) {
  const user = localStorage.getItem('spotifyUser');
  if (!user) {
    alert("Please log in to add songs to your Favorites!");
    window.location.href = 'login.html';
    return;
  }

  const index = userFavorites.indexOf(fileName);
  if (index === -1) {
    userFavorites.push(fileName);
    heartElement.classList.add('active');
    heartElement.querySelector('svg').setAttribute('fill', 'currentColor');
  } else {
    userFavorites.splice(index, 1);
    heartElement.classList.remove('active');
    heartElement.querySelector('svg').setAttribute('fill', 'none');

    // If we are in favorites section, re-render it
    if (document.getElementById('favSection').style.display === 'block') {
      const favSongs = songs.filter(s => userFavorites.includes(s.file));
      renderCards(favSongs, "favoriteContainer");
    }
  }
  updateFavoritesStorage();

  // Update sidebar count whenever a favorite is toggled
  document.getElementById("sidebarFavCount").textContent = userFavorites.length;
}

function switchSection(sectionId) {
  document.getElementById('homeSection').style.display = sectionId === 'home' ? 'block' : 'none';
  document.getElementById('favSection').style.display = sectionId === 'fav' ? 'block' : 'none';

  if (sectionId === 'fav') {
    const favSongs = songs.filter(s => userFavorites.includes(s.file));
    renderCards(favSongs, "favoriteContainer");
  }
}

// Listen for errors
currentSong.addEventListener("error", (e) => {
  console.error("Error loading audio file:", currentSong.src);
});

// Auto play next song when current ends
currentSong.addEventListener("ended", () => {
  if (currentSongIndex < songs.length - 1) {
    playMusic(currentSongIndex + 1);
  }
});

async function main() {
  // Generate song cards in sections initially
  renderCards(songs.filter(s => s.language === "Hindi"), "hindiContainer");
  renderCards(songs.filter(s => s.language === "English"), "englishContainer");

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
  Array.from(document.querySelectorAll(".songList li")).forEach((li) => {
    li.addEventListener("click", () => {
      let index = parseInt(li.getAttribute("data-index"));
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

  // Sidebar navigation listeners
  document.getElementById("homeBtn").addEventListener("click", () => switchSection('home'));
  document.getElementById("favBtn").addEventListener("click", () => switchSection('fav'));
  document.getElementById("favSidebarBtn").addEventListener("click", () => switchSection('fav'));

  // Initialize sidebar count
  document.getElementById("sidebarFavCount").textContent = userFavorites.length;

  // Menu listeners
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0"
  })
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-120%"
  })
}

function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) return "00:00";
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

main();