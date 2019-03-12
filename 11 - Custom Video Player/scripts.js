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
    actualProgress.style.flexBasis = `${progress}%`
}

function handleSliderChange () {
    video[this.name] = this.value 
}

function scrub(e) {
    const scrubbingTime = (e.offsetX / progressBar.offsetWidth) * video.duration
    console.log(scrubbingTime)
    video.currentTime = scrubbingTime
}
/* Event listeners */
video.addEventListener('click', togglePlay)
video.addEventListener('play', changePlayButton)
video.addEventListener('pause', changePlayButton)
video.addEventListener('timeupdate', handleTimeUpdate)

playBtn.addEventListener('click', togglePlay)

skipBtns.forEach(button => button.addEventListener('click', skip))

sliders.forEach(slider => slider.addEventListener('change', handleSliderChange))

let mouseDown = false
progressBar.addEventListener('click', scrub)
progressBar.addEventListener('mousemove', (e) => mouseDown && scrub(e)) //if the mouseDown variable is true it will run the scrub function; if the variable is false it will not run the function
progressBar.addEventListener('mousedown', () => mouseDown = true )
progressBar.addEventListener('mouseup', () => mouseDown = false)
