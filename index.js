//Rotating the humburger menu on  Click
const humburger = document.getElementById('nav-toggle-checkbox');
const navSpan = document.querySelector('.nav-span');
const fullScreenOverlay = document.querySelector('.full-screen-overlay');
const navigation = document.getElementsByTagName('nav')[0];
const closePlayer = document.querySelector('#close-player');
const audioPlayer = document.querySelector('.audio-player');

humburger.addEventListener('click', ()=>{
 if(navSpan.style.transform === 'rotate(15deg)'){
  navSpan.style.transform = 'rotate(0deg)'
 }
 else{
  navSpan.style.transform = 'rotate(15deg)'
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
    event.target; /*getting 
                                specific playBtn*/
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
})