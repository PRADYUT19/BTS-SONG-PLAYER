const musicContainer = document.querySelector('.music-container')

const playBtn = document.querySelector('#play')

const prevBtn = document.querySelector('#prev')

const nextBtn = document.querySelector('#next')

const audio = document.querySelector('#audio')

const progress = document.querySelector('.progress')

const progressContainer = document.querySelector('.progress-container')

const title = document.querySelector('#title')

const cover = document.querySelector('#cover')
 
//song titles

const songs = ['BTS - Airplane pt.2', 
'BTS - Best Of Me', 
'BTS - Boy In Luv', 
'BTS - Butterfly', 
'BTS - Dionysus', 
'BTS - EPILOGUE Young Forever', 
'BTS – FLY TO MY ROOM', 
'BTS - GOOD DAY', 
'BTS - Lights', 
'BTS - Pied Piper', 
'BTS - The Truth Untold', 
'BTS - 00 00 (Zero O Clock)', 
'BTS - 21st Century Girls', 
'BTS - ANPANMAN', 
'BTS - Boy With Luv', 
'BTS - FIRE', 
'BTS - HOME', 
'BTS - I m Fine', 
'BTS - IDOL', 
'BTS - Inner Child', 
'BTS - Jamais Vu', 
'BTS - LOVE MAZE', 
'BTS - Magic Shop', 
'BTS - Mikrokosmos', 
'BTS - ON', 
'BTS - RUN', 
'BTS - SO WHAT', 
'BTS - Danger',
'BTS - Dimple Illegal', 
'BTS - DNA', 
'BTS - Dynamite', 
'BTS - FAKE LOVE', 
'BTS - Life Goes On', 
'BTS - Make It Right', 
'BTS - MIC Drop', 
'BTS - Not Today', 
'BTS - Savage Love', 
'BTS - Save ME', 
'BTS - Stay Gold', 
'BTS - Spring Day', 
'BTS - Blood Sweat & Tears', 
'BTS - BLACK SWAN', 
'BTS - Blue & Grey', 
'BTS - Dis-ease', 
'BTS - Friends', 
'BTS - Blue Side', 
'BTS - FILTER', 
'BTS - EPIPHANY',  
'BTS - Stay', 
'BTS - Telepathy', 
'BTS - Singularity', 
'BTS - Stigma', 
'BTS - Sweet Night', 
'BTS - We are Bulletproof', 
'BTS - War of Hormone', 
'BTS - Dope', 
'BTS - Euphoria', 
'BTS - Go Go', 
'BTS - SUGA - SUGA s Interlude', 
'BTS - I Need You', 
'BTS - My Time', 
'BTS - Serendipity', 
'BTS - It s Definitely You', 
'BTS - Your eyes tell']

//Keep track of song
let songIndex = 0

//Initially load song info DOM
loadSong(songs[songIndex])

//Update song details
function loadSong(song) {
title.innerText = song 
audio.src = `music/${song}.mp3`
cover.src = `images/${song}.jpg`
}

function playSong() {
musicContainer.classList.add('play')
playBtn.querySelector('i.fas').classList.remove('fa-play')
playBtn.querySelector('i.fas').classList.add('fa-pause')

audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

function prevSong() {
songIndex--

if (songIndex < 0) {
    songIndex = songs.length - 1
}

loadSong(songs[songIndex])

playSong()

}

function updateProgress(e) {
const {duration, currentTime} = e.srcElement
const progressPercent = (currentTime / duration) * 100
progress.style.width = `${progressPercent}%`
}

function nextSong() {
    songIndex++

    if (songIndex > songs.length -1) {
        songIndex = 0
    }
    
    loadSong(songs[songIndex])
    
    playSong()
}

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}
 

//event listeners
playBtn.addEventListener('click', () => {
const isPlaying = musicContainer.classList.contains('play')

if (isPlaying) {
    pauseSong()
} else {
    playSong()
}
})

//change song events 
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)