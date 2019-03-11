/* get all the necessary elements */
const videoPlayer = document.querySelector(".player")
//console.log(videoPlayer)
const video = videoPlayer.querySelector(".viewer")
//console.log(video)
const progressBar = videoPlayer.querySelector('.progress');
const actualProgress = videoPlayer.querySelector('.progress__filled');
const playBtn = videoPlayer.querySelector('.toggle');
const skipBtns = videoPlayer.querySelectorAll('[data-skip]');
const sliders = videoPlayer.querySelectorAll('.player__slider');

/* Make the elements do things */
function togglePlay () {
    if (video.paused)
        video.play()
    else
        video.pause()
}

/* Event listeners */
video.addEventListener('click', togglePlay)
playBtn.addEventListener('click', togglePlay)