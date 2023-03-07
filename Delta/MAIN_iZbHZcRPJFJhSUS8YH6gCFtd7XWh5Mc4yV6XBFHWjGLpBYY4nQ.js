const grid = $('#grid');

let gridLength = 2000;
let mouseDown = false;

let UserName = 0;
let Password = 0;
UserName = $.cookie('UserName');
Password = $.cookie('Password');
if (typeof UserName == 'undefined' && typeof Password == 'undefined') {
   location.href = "https://figseu-technology.github.io/Signup.html";
}

const data = [];
for (let i = 0; i < gridLength; i++) {
	grid.append('<tr><td></td><td></td><td></td><td></td><td></td></tr>');
	data.push([0,0,0,0,0]);
}

$('#designer').scrollTop($('#designer')[0].scrollHeight);

let colors = '#000B3F';
var color = 1;

$('#color').on('click', e => {
  $('#chenge_c').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  });
  $('#chenge_c').get(0).play();
  e.preventDefault();
  e.handled = true;
	color = $('#tile-select').val();
        $('#color_type').html('タイル選択');
	if (color == 1) {
                colors = '#FFD300';
	} else if (color == 2) {
                colors = '#E16E00';
	} else if (color == 3) {
                colors = '#00E4D5';
	} else if (color == 4) {
                colors = '#00E4D5';
	} else if (color == 5) {
                colors = '#00E4D5';
	} else if (color == 6) {
                colors = '#00E4D5';
	} else if (color == 7) {
                colors = '#00E4D5';
	} else if (color == 8) {
                colors = '#00E4D5';
	} else if (color == 9) {
                colors = '#3A4C78';
	} else if (color == 10) {
                colors = '#8282A3';
	} else if (color == 11) {
                colors = '#3A4C78';
	} else if (color == 12) {
                colors = '#8282A3';
	} else if (color == 13) {
                colors = '#B2E200';
	} else if (color == 14) {
                colors = '#B2E200';
	} else if (color == 15) {
                colors = '#B2E200';
	} else if (color == 16) {
                colors = '#B2E200';
	} else if (color == 17) {
                colors = '#B2E200';
	} else if (color == 18) {
                colors = '#B2E200';
	} else if (color == 19) {
                colors = '#B2E200';
	} else if (color == 20) {
                colors = '#B2E200';
	} else if (color == 21) {
                colors = '#7B7B7B';
	} else if (color == 22) {
                colors = '#7B7B7B';
	} else if (color == 23) {
                colors = '#7B7B7B';
	} else if (color == 24) {
                colors = '#7B7B7B';
	} else if (color == 25) {
                colors = '#7B7B7B';
	} else if (color == 26) {
                colors = '#7B7B7B';
	} else if (color == 27) {
                colors = '#FFD300';
	} else if (color == 28) {
                colors = '#FFD300';
	} else if (color == 29) {
                colors = '#00B615';
	} else if (color == 30) {
                colors = '#00B615';
	} else if (color == 31) {
                colors = '#00B615';
	} else if (color == 32) {
                colors = '#00B615';
	} else if (color == 33) {
                colors = '#71A32C';
	} else if (color == 34) {
                colors = '#71A32C';
	} else if (color == 35) {
                colors = '#71A32C';
	} else if (color == 36) {
                colors = '#71A32C';
	} else if (color == 37) {
                colors = '#FFD300';
	} else if (color == 38) {
                colors = '#FFD300';
	} else if (color == 39) {
                colors = '#FFD300';
	} else if (color == 40) {
                colors = '#FFD300';
	} else if (color == 41) {
                colors = '#315067';
	} else if (color == 42) {
                colors = '#315067';
	} else if (color == 43) {
                colors = '#315067';
	} else if (color == 44) {
                colors = '#315067';
	} else if (color == 45) {
                colors = '#AFAA00';
	} else if (color == 46) {
                colors = '#AFAA00';
	} else if (color == 47) {
                colors = '#AFAA00';
	} else if (color == 49) {
                colors = '#B249A4';
	} else if (color == 50) {
                colors = '#B249A4';
	} else if (color == 51) {
                colors = '#37F3C3';
	} else if (color == 52) {
                colors = '#37F3C3';
	} else if (color == 53) {
                colors = '#37F3C3';
	} else if (color == 54) {
                colors = '#37F3C3';
	} else if (color == 55) {
                colors = '#FF0019';
	} else if (color == 56) {
                colors = '#FF0019';
	} else if (color == 57) {
                colors = '#005CFF';
	} else if (color == 58) {
                colors = '#005CFF';
	} else if (color == 59) {
                colors = '#FFD300';
	} else if (color == 60) {
                colors = '#FFD300';
	} else if (color == 61) {
                colors = '#E89C18';
	} else if (color == 62) {
                colors = '#E89C18';
	} else if (color == 63) {
                colors = '#E89C18';
	} else if (color == 64) {
                colors = '#E89C18';
	} else if (color == 65) {
                colors = '#00BACB';
	} else if (color == 66) {
                colors = '#00BACB';
	} else if (color == 67) {
                colors = '#00BACB';
	} else if (color == 68) {
                colors = '#00BACB';
	} else if (color == 69) {
                colors = '#00BACB';
	} else if (color == 70) {
                colors = '#00BACB';
	} else if (color == 71) {
                colors = '#00BACB';
	} else if (color == 72) {
                colors = '#00BACB';
	} else if (color == 73) {
                colors = '#00BACB';
	} else if (color == 74) {
                colors = '#00BACB';
	} else if (color == 75) {
                colors = '#00BACB';
	} else if (color == 76) {
                colors = '#00BACB';
	} else if (color == 81) {
                colors = '#00A548';
	} else if (color == 82) {
                colors = '#00A548';
	} else if (color == 83) {
                colors = '#00A548';
	} else if (color == 84) {
                colors = '#00A548';
	} else if (color == 85) {
                colors = '#00A548';
	} else if (color == 86) {
                colors = '#00A548';
	} else if (color == 87) {
                colors = '#00A548';
	} else if (color == 88) {
                colors = '#00A548';
	} else if (color == 149) {
                colors = '#E6E6E6';
	} else if (color == 181) {
                colors = '#5B1E6A';
	} else if (color == 182) {
                colors = '#FFE57C';
	} else if (color == 183) {
                colors = '#2DFBF6';
	} else if (color == 184) {
                colors = '#F8C56D';
	} else if (color == 210) {
                colors = '#962974';
	} else if (color == 247) {
                colors = '#E448E2';
	} else if (color == 261) {
                colors = '#C4B500';
	} else if (color == 262) {
                colors = '#C4B500';
	} else if (color == 267) {
                colors = '#635FAC';
	} else if (color == 301) {
                colors = '#E6985B';
	} else if (color == 307) {
                colors = '#FF000A';
	} else if (color == 308) {
                colors = '#00C5FF';
	} else if (color == 0) {
                colors = '#191919';
	} else {
                colors = '#FFFFFF';
	}
	$('#color').css('background-color', colors);
});

$('#add').on('click', e => {
  $('#up_s').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  });
  $('#up_s').get(0).play();
  e.preventDefault();
  e.handled = true;
  $('#grid').prepend('<tr><td></td><td></td><td></td><td></td><td></td></tr>');
  data.push([0,0,0,0,0]);
  gridLength++;
});

$('#remove').on('click', e => {
  $('#down_s').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  });
  $('#down_s').get(0).play();
  e.preventDefault();
  e.handled = true;
  if(gridLength > 0){
    $('#grid tr:first').remove();
    data.pop();
    gridLength--;
  }
});

$('#dg_color1').on('click', e => {
  $('#chenge_c').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  });
  $('#chenge_c').get(0).play();
  color = 0;
  	$('#color_type').html('Clear');
  	$('#color').css('background-color', colors);
});

mouseDown = false;
$("div#designer").on('click', 'td', down);
$("div#designer").on('click', 'td', move);
$("div#designer").on('click', up)

function down(e){
  const x = $(this).index();
	const y = gridLength - 1 - $(this).parent().index();
	data[y][x] = color;
	$(this).css('background-color', colors);
	mouseDown = true;
}

function move(e){
  if (mouseDown) {
		const x = $(this).index();
		const y = gridLength - 1 - $(this).parent().index();
		data[y][x] = color;
		$(this).css('background-color', colors);
	}
}
function up(e){
  e.preventDefault();
  mouseDown = false;
  let str = `[header]
levelname=ステージ名
auther=ステージ作者名
width=5
height=2000
tilewidth=64
tileheight=64
orientation=orthogonal
delta=587
[tilesets]
tileset=../tileset/tileset01.png,64,64,0,0
[layer]
type=Level
data=
`;
  data.forEach((r, i) => 
    str += "" + r.join(",") + "" + (i == data.length - 1? "": ",\n")
  );
filer = $('#filer-select').val();
if (filer == 'Dec') {
  $("#output").val(str + `

`);
} else if (filer == 'Enc') {
  $("#output").val(window.btoa(unescape(encodeURIComponent(str + `

`))));
}
var anceg = $("#output").val();
var anccg = $("#output").val().length;
$("#DGDR").html("行数 :" + gridLength);
$('#touch_s').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  });
  $('#touch_s').get(0).play();
  
}
