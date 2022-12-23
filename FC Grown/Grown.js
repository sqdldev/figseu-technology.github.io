let image_pin = 0;
let video_pin = 0;
let youtube_pin = 0;
let fgnc = 0;

function R() {
image_pin = $('#image_url').val();
var agreat = document.getElementById("agreat")
agreat.innerHTML = "<a href='" + image_pin + "'><img class='ip' alt='' src='C'></img></a>"
}
function U() {
video_pin = $('#video_url').val();
var wender = document.getElementById("wender")
wender.innerHTML = "<video src='" + video_pin + "' controls loop poster='https://figseu-technology.github.io/img/45470902252844274267090914130269011921726211338300.cmr'></video>"
}
function Y() {
youtube_pin = $('#youtube_url').val();
fgnc = youtube_pin.substr( 30 );
var youigreat = document.getElementById("youigreat")
youigreat.innerHTML = "<iframe id='downloder' src='https://www.youtube.com/embed/" + fgnc +"' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
}
