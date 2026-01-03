let currentSong = new Audio();

async function getSongs() {
  // Make sure these match your file names EXACTLY
  return ["Aaj Ki Raat - Copy.mp3", "Out of Time - Copy.mp3","pakistan.mp3","Ishq Jalakar.mp3","Aaj Ki Raat.mp3"];
}

const playMusic = (track, pause = false) => {
  let audioPath = "songs/" + track;
  console.log("Trying to play:", audioPath); // DEBUG 1

  currentSong.src = audioPath;
  
  if (!pause) {
    currentSong.play().catch(error => {
        console.error("Playback failed:", error); // DEBUG 2
    });
    play.src = "pause.svg";
  }

  document.querySelector(".songinfo").innerHTML = decodeURI(track);
  document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
};

// Listen for errors (If file is not found)
currentSong.addEventListener("error", (e) => {
    console.error("Error loading audio file:", currentSong.src);
    alert("Error: Song not found! Check the console (F12) for details.");
});

async function main() {
  let songs = await getSongs();
  
  // Load first song but don't play
  playMusic(songs[0], true);

  let songUL = document.querySelector(".songList ul");
  for (const song of songs) {
    songUL.innerHTML += `
      <li>
        <img class="invert" src="music.svg" alt="">
        <div class="info">
          <div style="width:91px">${song.replaceAll("%20", " ")}</div>
          <div style="width:91px">Anmol</div>
        </div>
        <div class="playnow">
          <span>Play now</span>
          <img class="invert" src="play.svg" alt="">
        </div>
      </li>`;
  }

  // Add click listeners
  Array.from(document.querySelectorAll(".songList li")).forEach(e => {
    e.addEventListener("click", () => {
      const songName = e.querySelector(".info div").innerHTML.trim();
      playMusic(songName);
    });
  });

  // Play/Pause button
  play.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      play.src = "pause.svg";
    } else {
      currentSong.pause();
      play.src = "play.svg";
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
document.querySelector(".hamburger").addEventListener("click",()=>{
  document.querySelector(".left").style.left = "0"
})
document.querySelector(".close").addEventListener("click",()=>{
  document.querySelector(".left").style.left = "-120%"
})

main();