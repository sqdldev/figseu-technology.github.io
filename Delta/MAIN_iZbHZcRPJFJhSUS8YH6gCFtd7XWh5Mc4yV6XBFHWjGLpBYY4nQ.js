const grid = $('#grid');

let gridLength = 20;
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
	data.push([0, 0, 0, 0, 0]);
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
        $('#color_type').html('　');
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
	} else if (color == 181) {
                colors = '#5B1E6A';
	} else if (color == 182) {
                colors = '#FFE57C';
	} else if (color == 183) {
                colors = '#2DFBF6';
	} else if (color == 184) {
                colors = '#F8C56D';
	} else if (color == 0) {
                colors = '#191919';
	} else {
		$('#color_type').html('不明なオブジェクト');
                colors = '#8E2720';
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
  data.push([0, 0, 0, 0, 0]);
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
  let str = `[
  {
    "name": "ステージの名前",
    "author": "作成者名称",
    "background": "背景色",
    "ball": "ボールの色",
    "mat": "床の色",
    "bouncer": "ジャンプ床の色",
    "obstacle": "障害物の色",
    "data":
    [
`;
  data.forEach((r, i) => 
    str += "      [" + r.join(", ") + "]" + (i == data.length - 1? "": ",\n")
  );
  $("#output").val(str + `
    ]
  }
]`);
var anceg = $("#output").val();
var anccg = $("#output").val().length;
$("#DGDR").html("行数 :" + gridLength);
$('#touch_s').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  });
  $('#touch_s').get(0).play();
  
}
