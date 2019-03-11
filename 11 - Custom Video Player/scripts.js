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

function changePlayButton() {
    if(video.paused)
        playBtn.textContent = "►"
    else
        playBtn.textContent = "❚ ❚"
    
}

function skip () {
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleTimeUpdate() {
    const progress = (video.currentTime / video.duration) * 100 //this will give the percentage of the video that has been watched
    progressBar.style.flexBasis = `${progress}%`;
}

/* Event listeners */
video.addEventListener('click', togglePlay)
video.addEventListener('play', changePlayButton)
video.addEventListener('pause', changePlayButton)
video.addEventListener('timeupdate', handleTimeupdate)

playBtn.addEventListener('click', togglePlay)

skipBtns.forEach(button => button.addEventListener('click', skip))