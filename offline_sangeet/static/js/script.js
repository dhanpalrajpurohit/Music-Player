let playbtn = document.getElementById("play")
let pausebtn = document.getElementById("pause")

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