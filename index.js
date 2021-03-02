//Rotating the humburger menu on  Click
const humburger = document.getElementById('nav-toggle-checkbox');
const navSpan = document.querySelector('.nav-span');
const fullScreenOverlay = document.querySelector('.full-screen-overlay');
const navigation = document.getElementsByTagName('nav')[0];
const closePlayer = document.querySelector('#close-player');
const audioPlayer = document.querySelector('.audio-player');
const scrollLeftBtn = document.querySelector('.scroll-left');
const scrollRightBtn = document.querySelector('.scroll-right');
const albumsContainer = document.querySelector('.music-audios')
const eachAudioAlbum = document.querySelectorAll('.music-card');
//variables for the Audio player
const audioElement = document.querySelector('#audio-element')
const audioPlayBtn = document.querySelector('.audio-play-btn')
//variables for music albums/cards
const albumPlayBtn = document.querySelectorAll('.play-btn-card');

// NAVIGATION MENU
humburger.addEventListener('click', ()=>{
 if(navSpan.style.transform === 'rotate(8deg)'){
  navSpan.style.transform = 'rotate(0deg)'
 }
 else{
  navSpan.style.transform = 'rotate(8deg)'
 }
 })

// VIDEO PLAYERS 
const playPauseBtn = document.querySelectorAll(".play-btn");

//ENABLING THE VIDEOS TO BE PLAYED AND PAUSED
//getting play-pause btns for each video
playPauseBtn.forEach((btn) => {
  btn.addEventListener("click", VideoPlayerController);
});
function VideoPlayerController(event) {
  const ClickedPlayBtn =
    event.target; /*getting specifically clicked playBtn*/
  const VideoToBePlayedContainer = ClickedPlayBtn.parentElement.parentElement;

  //getting specific video to be played
  const videoToBePlayed = VideoToBePlayedContainer.querySelector(
    "#video-element"
  );

  //playing and pausing the videos
  if (videoToBePlayed.paused) {
    ClickedPlayBtn.classList.add("pause-btn");
    videoToBePlayed.play();
  } else {
    videoToBePlayed.pause();
    ClickedPlayBtn.classList.remove("pause-btn");
  }

  // changing the playBtn from pause back to play after the video has stopped playing
  videoToBePlayed.onended = () => {
    ClickedPlayBtn.classList.remove("pause-btn");
  };
  //WORKING ON THE VIDEO PROGRESS-BAR
  videoToBePlayed.addEventListener("timeupdate", changeVideoProgressBar);
  function changeVideoProgressBar() {
    const specificVideoProgressBar = VideoToBePlayedContainer.querySelector(
      ".video-progress-bar"
    );
    const videoDuration = videoToBePlayed.duration;
    const videoProgressValue = videoToBePlayed.currentTime;

    //   setting the video according to currentTime
    specificVideoProgressBar.style.width =
      (videoProgressValue / videoDuration) * 100 + "%";
  }
}
//AUDIO PLAYER
  //close player
closePlayer.addEventListener('click', ()=>{
  audioPlayer.style.transform = 'scale(1,0)'; 
  setTimeout(()=>{
    audioPlayer.style.display = 'none'
  },500)
  audioElement.pause();
})

//MUSIC ALBUMS
/*** scroll right and left buttons  *** */
const albumSize = eachAudioAlbum[0].clientWidth;
// console.log(albumSize);
scrollLeftBtn.addEventListener('click', (()=>{
  albumsContainer.scrollLeft -= albumSize + 20;
}));

scrollRightBtn.addEventListener('click', (()=>{
  albumsContainer.scrollLeft += albumSize + 20;
  scrollLeftBtn.style.display = 'block';
}))

//AUDIO PLAYER
// console.log(audioPlayBtn)
audioPlayBtn.addEventListener('click', playAudio);
function playAudio(){
 if(audioElement.paused){ 
 audioElement.play();
 audioPlayBtn.classList.replace('fa-play', 'fa-pause') //change playbtn to pausebtn
 }
 else{
   audioElement.pause();
   audioPlayBtn.classList.replace('fa-pause', 'fa-play')
 }
}
//Update Audio player song image, title, and song to currently playing song
//looping through all album playBtns
albumPlayBtn.forEach(playBtn=>{
  playBtn.addEventListener('click',UpdateAudioPlayer)
})
function UpdateAudioPlayer(event){
  let specificClickedPlayBtn = event.target;
  const container = specificClickedPlayBtn.parentElement;
  // console.log(container)
  const songTitle = container.querySelector('.music-title').innerText;
  // console.log(songTitle);
  const songImgUrl = container.querySelector('.album-img').src;
  
  //Changing currently playing Song image to clicked album image
  const AudioThumbnail = document.querySelector('.thumbnail');
  const currentSongTitle = document.querySelector('.song-title');
  AudioThumbnail.src = songImgUrl;
  currentSongTitle.innerText = songTitle;

  //Generating a Src for the AudioElement
   audioElement.setAttribute('src', `./audios/${songTitle}.mp3`)
  // audioElement.src = SongUrl 
  console.log(audioElement.src)
  
  playAudio();

    audioPlayer.style.display = 'block';
  
}
