let playbtn = document.getElementById("play")
let pausebtn = document.getElementById("pause")

const request = new XMLHttpRequest();
const url = 'http://localhost:8000/app/22/';
request.open("GET", url);
request.send();

request.onload = (e) => {
    alert(request.response);
}

function PlayTrack(){
    document.getElementById("audio").play();
    pausebtn.style.display = "block"
    playbtn.style.display = "none"

}

function PauseTrack(){
    document.getElementById("audio").pause();
    pausebtn.style.display = "none"
    playbtn.style.display = "block"
}

function LoadTrack(songDetails){
    console.log("songDetails");
}