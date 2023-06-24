const playButton = document.querySelector("#playButton")
const playButtonIcon = document.querySelector("#playButtonIcon")
const waveform = document.querySelector("#waveform")
// const volumeIcon = document.querySelector("#volumeIcon")
// const volumeSlider = document.querySelector("#volumeSlider")
// const currentTime = document.querySelector("#currentTime")
// const totalDuration = document.querySelector("#totalDuration")
// --------------------------------------------------------- //

/**
 * Initialize Wavesurfer
 * @returns a new Wavesurfer instance
 */
const initializeWavesurfer = (id) => {
  return WaveSurfer.create({
    container: "#" + id,
    responsive: true,
    height: 50,
    waveColor: "#ff5501",
    progressColor: "#d44700",
  })
}

// --------------------------------------------------------- //
// Functions
/*
 * Toggle play button
 */
const togglePlay = () => {
  wavesurfer.playPause()
  const isPlaying = wavesurfer.isPlaying()
  if (isPlaying) {
    playButtonIcon.src = "assets/icons/pause.svg"
  } else {
    playButtonIcon.src = "assets/icons/play.svg"
  }
}

// --------------------------------------------------------- //
// Create a new instance and load the wavesurfer
const wavesurfer = initializeWavesurfer('waveform')
wavesurfer.load("audios/guitar.mp3")
// --------------------------------------------------------- //
// Javascript Event listeners
playButton.addEventListener("click", togglePlay)
// --------------------------------------------------------- //
// Wavesurfer event listeners
wavesurfer.on("ready", () => { })

// Resets the play button icon after audio ends
wavesurfer.on("finish", () => {
  playButtonIcon.src = "assets/icons/play.svg"
})


const togglePlay2 = () => {
  wavesurfer2.playPause()
  const isPlaying = wavesurfer2.isPlaying()
  if (isPlaying) {
    playButtonIcon2.src = "assets/icons/pause.svg"
  } else {
    playButtonIcon2.src = "assets/icons/play.svg"
  }
}

// Create a new instance and load the wavesurfer2
const wavesurfer2 = initializeWavesurfer('waveform2')
wavesurfer2.load("audios/piano.mp3")
// --------------------------------------------------------- //
// Javascript Event listeners
playButton2.addEventListener("click", togglePlay2)
// --------------------------------------------------------- //
// Wavesurfer event listeners
wavesurfer2.on("ready", () => { })

// Resets the play button icon after audio ends
wavesurfer2.on("finish", () => {
  playButtonIcon.src = "assets/icons/play.svg"
})

const togglePlay3 = () => {
  wavesurfer3.playPause()
  const isPlaying = wavesurfer3.isPlaying()
  if (isPlaying) {
    playButtonIcon3.src = "assets/icons/pause.svg"
  } else {
    playButtonIcon3.src = "assets/icons/play.svg"
  }
}

// Create a new instance and load the wavesurfer3
const wavesurfer3 = initializeWavesurfer('waveform3')
wavesurfer3.load("audios/drum.mp3")
// --------------------------------------------------------- //
// Javascript Event listeners
playButton3.addEventListener("click", togglePlay3)
// --------------------------------------------------------- //
// Wavesurfer event listeners
wavesurfer3.on("ready", () => { })

// Resets the play button icon after audio ends
wavesurfer3.on("finish", () => {
  playButtonIcon.src = "assets/icons/play.svg"
})


const togglePlay4 = () => {
  wavesurfer4.playPause()
  const isPlaying = wavesurfer4.isPlaying()
  if (isPlaying) {
    playButtonIcon4.src = "assets/icons/pause.svg"
  } else {
    playButtonIcon4.src = "assets/icons/play.svg"
  }
}

// Create a new instance and load the wavesurfer4
const wavesurfer4 = initializeWavesurfer('waveform4')
wavesurfer4.load("audios/percussion.mp3")
// --------------------------------------------------------- //
// Javascript Event listeners
playButton4.addEventListener("click", togglePlay4)
// --------------------------------------------------------- //
// Wavesurfer event listeners
wavesurfer4.on("ready", () => { })

// Resets the play button icon after audio ends
wavesurfer4.on("finish", () => {
  playButtonIcon.src = "assets/icons/play.svg"
})


const togglePlay5 = () => {
  wavesurfer5.playPause()
  const isPlaying = wavesurfer5.isPlaying()
  if (isPlaying) {
    playButtonIcon5.src = "assets/icons/pause.svg"
  } else {
    playButtonIcon5.src = "assets/icons/play.svg"
  }
}

// Create a new instance and load the wavesurfer5
const wavesurfer5 = initializeWavesurfer('waveform5')
wavesurfer5.load("audios/flute.mp3")
// --------------------------------------------------------- //
// Javascript Event listeners
playButton5.addEventListener("click", togglePlay5)
// --------------------------------------------------------- //
// Wavesurfer event listeners
wavesurfer5.on("ready", () => { })

// Resets the play button icon after audio ends
wavesurfer5.on("finish", () => {
  playButtonIcon.src = "assets/icons/play.svg"
})

const togglePlay6 = () => {
  wavesurfer6.playPause()
  const isPlaying = wavesurfer6.isPlaying()
  if (isPlaying) {
    playButtonIcon6.src = "assets/icons/pause.svg"
  } else {
    playButtonIcon6.src = "assets/icons/play.svg"
  }
}

// Create a new instance and load the wavesurfer6
const wavesurfer6 = initializeWavesurfer('waveform6')
wavesurfer6.load("audios/trumpet.mp3")
// --------------------------------------------------------- //
// Javascript Event listeners
playButton6.addEventListener("click", togglePlay6)
// --------------------------------------------------------- //
// Wavesurfer event listeners
wavesurfer6.on("ready", () => { })

// Resets the play button icon after audio ends
wavesurfer6.on("finish", () => {
  playButtonIcon.src = "assets/icons/play.svg"
})

