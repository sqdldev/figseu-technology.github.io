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
	if (color == 1) {
		$('#color_type').html('通常床');
                colors = '#FFD300';
	} else if (color == 2) {
		$('#color_type').html('ジャンプ台');
                colors = '#FF7E00';
	} else if (color == 3) {
		$('#color_type').html('ブロック');
                colors = '#7E7E7E';
	} else if (color == 4) {
		$('#color_type').html('ドリームキューブ');
                colors = '#FFB9E1';
	} else if (color == 5) {
		$('#color_type').html('トンネル');
                colors = '#002CFF';
	} else if (color == 6) {
		$('#color_type').html('高いトンネル');
                colors = '#B900A4';
	} else if (color == 7) {
		$('#color_type').html('王冠');
                colors = '#C4B500';
	} else if (color == 8) {
		$('#color_type').html('宝石');
                colors = '#00A548';
	} else if (color == 9) {
		$('#color_type').html('ゴール');
                colors = '#FFFFFF';
	} else if (color == 10) {
		$('#color_type').html('スピードアップ');
                colors = '#FF000A';
	} else if (color == 11) {
		$('#color_type').html('エフェクトクリア');
                colors = '#00FFC5';
	} else if (color == 12) {
		$('#color_type').html('スピードダウン');
                colors = '#00C5FF';
	} else if (color == 13) {
		$('#color_type').html('進行方向反転');
                colors = '#E77CA9';
	} else if (color == 14) {
		$('#color_type').html('ワープホール');
                colors = '#E88CFF';
	} else if (color == 15) {
		$('#color_type').html('ジャンプ床(加速時)');
                colors = '#9F4800';
	} else if (color == 16) {
		$('#color_type').html('高いブロック');
                colors = '#00FFE2';
	} else if (color == 17) {
		$('#color_type').html('タワーブロック');
                colors = '#FFAFA5';
	} else if (color == 18) {
		$('#color_type').html('通行不可の床');
                colors = '#4C3D00';
	} else if (color == 19) {
		$('#color_type').html('通行可能ブロック');
                colors = '#FAFFA2';
	} else if (color == 20) {
		$('#color_type').html('落ちる床');
                colors = '#BABABA';
	} else if (color == 21) {
		$('#color_type').html('Function mat');
                colors = '#285400';
	} else if (color == 22) {
		$('#color_type').html('Function Block');
                colors = '#285400';
	} else if (color == 23) {
		$('#color_type').html('Almandine Crystal');
                colors = '#FFCE37';
	} else if (color == 38) {
		$('#color_type').html('視点を右に傾ける');
                colors = '#FF677F';
	} else if (color == 39) {
		$('#color_type').html('視点を左に傾ける');
                colors = '#5191E7';
	} else if (color == 50) {
		$('#color_type').html('1段階浮いたブロック');
                colors = '#005DFF';
	} else if (color == 76) {
		$('#color_type').html('浮遊するブロック');
                colors = '#95FFB4';
	} else if (color == 210) {
		$('#color_type').html('ドリームタワー');
                colors = '#962974';
	} else if (color == 0) {
		$('#color_type').html('空白');
                colors = '#000B3F';
	} else {
		$('#color_type').html('オブジェクトエラー');
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
