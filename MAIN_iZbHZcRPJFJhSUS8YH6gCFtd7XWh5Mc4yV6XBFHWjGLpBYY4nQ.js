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

const colors = ['#000B3F', '#FFD300', '#FF7E00', '#7E7E7E', '#FFB9E1', '#002CFF', '#B900A4', '#C4B500', '#00A548', '#FFFFFF', '#FF000A', '#00FFC5', '#00C5FF', '#E77CA9', '#E88CFF', '#9F4800', '#00FFE2', '#FFAFA5', '#4C3D00', '#FAFFA2', '#BABABA', '#285400'];
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
	} else if (color == 2) {
		$('#color_type').html('ジャンプ台');
	} else if (color == 3) {
		$('#color_type').html('ブロック');
	} else if (color == 4) {
		$('#color_type').html('ドリームキューブ');
	} else if (color == 5) {
		$('#color_type').html('トンネル');
	} else if (color == 6) {
		$('#color_type').html('高いトンネル');
	} else if (color == 7) {
		$('#color_type').html('王冠');
	} else if (color == 8) {
		$('#color_type').html('宝石');
	} else if (color == 9) {
		$('#color_type').html('ゴール');
	} else if (color == 10) {
		$('#color_type').html('スピードアップ');
	} else if (color == 11) {
		$('#color_type').html('エフェクトクリア');
	} else if (color == 12) {
		$('#color_type').html('スピードダウン');
	} else if (color == 13) {
		$('#color_type').html('進行方向反転');
	} else if (color == 14) {
		$('#color_type').html('ワープホール');
	} else if (color == 15) {
		$('#color_type').html('ジャンプ床(加速時)');
	} else if (color == 16) {
		$('#color_type').html('高いブロック');
	} else if (color == 17) {
		$('#color_type').html('タワーブロック');
	} else if (color == 18) {
		$('#color_type').html('通行不可の床');
	} else if (color == 19) {
		$('#color_type').html('通行可能ブロック');
	} else if (color == 20) {
		$('#color_type').html('落ちる床');
	} else if (color == 21) {
		$('#color_type').html('Function mat');
	} else if (color == 22) {
		$('#color_type').html('Function Block');
	} else if (color == 23) {
		$('#color_type').html('Delte Obstacle S');
	} else if (color == 50) {
		$('#color_type').html('Sky Obstacle N');
	} else if (color == 0) {
		$('#color_type').html('空白');
	} else {
		$('#color_type').html('オブジェクトエラー');
	}
	$('#color').css('background-color', colors[color]);
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
  	$('#color').css('background-color', colors[color]);
});

mouseDown = false;
$("div#designer").on('click', 'td', down);
$("div#designer").on('click', 'td', move);
$("div#designer").on('click', up)

function down(e){
  const x = $(this).index();
	const y = gridLength - 1 - $(this).parent().index();
	data[y][x] = color;
	$(this).css('background-color', colors[color]);
	mouseDown = true;
}

function move(e){
  if (mouseDown) {
		const x = $(this).index();
		const y = gridLength - 1 - $(this).parent().index();
		data[y][x] = color;
		$(this).css('background-color', colors[color]);
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
