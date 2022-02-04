console.log("Welcome to Gaana ");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif');
let masterSongName =document.getElementById('masterSongName')
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Namaster Trip", filepath: "songs/1.mp3", coverPath: "covers/cover1.jpg" },
    { songName: "Pee Loon ", filepath: "songs/2.mp3", coverPath: "covers/cover2.jpeg" },
    { songName: "2-Numbari", filepath: "songs/3.mp3", coverPath: "covers/cover3.jpg" },
    { songName: "Baarish Ban Jana", filepath: "songs/4.mp3", coverPath: "covers/cover4.jpg" },
    { songName: "Brown Munde", filepath: "songs/5.mp3", coverPath: "covers/cover5.jpg" },
    { songName: "Kohinoor", filepath: "songs/6.mp3", coverPath: "covers/cover6.jpg" },
    { songName: "Mirchi Mirchi", filepath: "songs/7.mp3", coverPath: "covers/cover7.jpg" },
    { songName: "Left Right", filepath: "songs/8.mp3", coverPath: "covers/cover8.jpg" },
    { songName: "Raatan Lambiyan", filepath: "songs/9.mp3", coverPath: "covers/cover9.jpg" },
    { songName: "Snehithane", filepath: "songs/10.mp3", coverPath: "covers/cover10.jpg" },

]

songItems.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {   //to pause the song
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate')

    //Update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity= 1;
        masterPlay.classList.play('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        //    audioElement.currentTime = play(); 
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.play('fa-pause-circle');
    masterPlay.classList.remove('fa-play-circle');

})


document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.play('fa-pause-circle');
    masterPlay.classList.remove('fa-play-circle');
})