const grid = $('#grid');

let gridLength = 3000;
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

const colors = ['#191919', '#FFD300', '#E16E00', '#00E4D5', '#00E4D5', '#00E4D5', '#00E4D5', '#00E4D5', '#00E4D5', '#3A4C78', '#8282A3', '#3A4C78', '#8282A3', '#B2E200', '#B2E200', '#B2E200', '#B2E200', '#B2E200', '#B2E200', '#B2E200', '#B2E200', '#7B7B7B', '#7B7B7B', '#7B7B7B', '#7B7B7B', '#7B7B7B', '#FFD300', '#FFD300', '#00D225', '#00D225', '#00D225', '#00D225', '#C5BE00', '#C5BE00', '#C5BE00', '#C5BE00', '#005367', '#005367', '#005367', '#005367', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#FFBD00', '#FFBD00', '#FFBD00', '#000000', '#003A9A', '#003A9A', '#00DB92', '#00DB92', '#00DB92', '#00DB92', '#FF3545', '#FF3545', '#3A75FF', '#3A75FF', '#00738E', '#00738E', '#D1A869', '#D1A869', '#D1A869', '#D1A869', '#DB0059', '#DB0059', '#DB0059', '#DB0059', '#DB0059', '#DB0059', '#DB0059', '#DB0059', '#DB0059', '#DB0059', '#DB0059', '#DB0059', '#FF1A3A', '#2C6AFF', '#845262', '#7E7E7E', '#00D085', '#00D085', '#00D085', '#00D085', '#00D085', '#00D085', '#00D085', '#00D085', '#72838B', '#72838B', '#72838B', '#72838B'];
var color = 1;

$('#color').on('click', e => {
  $('#chenge_c').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  });
  $('#chenge_c').get(0).play();
  e.preventDefault();
  e.handled = true;
	color = (color + 1) % 93;
	if (color == 1) {
		$('#color_type').html('通常床');
	} else if (color == 2) {
		$('#color_type').html('ジャンプ台');
	} else if (color == 3) {
		$('#color_type').html('落ちる床 (連結1)');
	} else if (color == 4) {
		$('#color_type').html('落ちる床 (連結2)');
	} else if (color == 5) {
		$('#color_type').html('落ちる床 (連結3)');
	} else if (color == 6) {
		$('#color_type').html('落ちる床');
	} else if (color == 7) {
		$('#color_type').html('落ちる床 (横連結)');
	} else if (color == 8) {
		$('#color_type').html('落ちる床 (縦連結)');
	} else if (color == 9) {
		$('#color_type').html('落ちるハンマー');
	} else if (color == 10) {
		$('#color_type').html('浮かぶハンマー');
	} else if (color == 11) {
		$('#color_type').html('落ちるハンマー1');
	} else if (color == 12) {
		$('#color_type').html('浮かぶハンマー2');
	} else if (color == 13) {
		$('#color_type').html('稼働床 (上と連結しない)');
	} else if (color == 14) {
		$('#color_type').html('稼働床 (下と連結しない)');
	} else if (color == 15) {
		$('#color_type').html('稼働床 (左と連結しない)');
	} else if (color == 16) {
		$('#color_type').html('稼働床 (右と連結しない)');
	} else if (color == 17) {
		$('#color_type').html('稼働床 (左&上と連結しない)');
	} else if (color == 18) {
		$('#color_type').html('稼働床 (左&下と連結しない)');
	} else if (color == 19) {
		$('#color_type').html('稼働床 (右&上と連結しない)');
	} else if (color == 20) {
		$('#color_type').html('稼働床 (右&下と連結しない)');
	} else if (color == 21) {
		$('#color_type').html('せり出すブロック');
	} else if (color == 22) {
		$('#color_type').html('せり出すブロック2');
	} else if (color == 23) {
		$('#color_type').html('せり出すブロック3');
	} else if (color == 24) {
		$('#color_type').html('せり出すブロック3 (横連結)');
	} else if (color == 25) {
		$('#color_type').html('せり出すブロック1 (左移動)');
	} else if (color == 26) {
		$('#color_type').html('せり出すブロック1 (右移動)');
	} else if (color == 27) {
		$('#color_type').html('左へ移動する床');
	} else if (color == 28) {
		$('#color_type').html('右へ移動する床');
	} else if (color == 29) {
		$('#color_type').html('高い木');
	} else if (color == 30) {
		$('#color_type').html('高い木2');
	} else if (color == 31) {
		$('#color_type').html('高い木 (左移動)');
	} else if (color == 32) {
		$('#color_type').html('高い木 (右移動)');
	} else if (color == 33) {
		$('#color_type').html('ヤシの木');
	} else if (color == 34) {
		$('#color_type').html('ヤシの木2');
	} else if (color == 35) {
		$('#color_type').html('ヤシの木 (左移動)');
	} else if (color == 36) {
		$('#color_type').html('ヤシの木 (右移動)');
	} else if (color == 37) {
		$('#color_type').html('上方向接続禁止');
	} else if (color == 38) {
		$('#color_type').html('下方向接続禁止');
	} else if (color == 39) {
		$('#color_type').html('左方向接続禁止');
	} else if (color == 40) {
		$('#color_type').html('右方向接続禁止');
	} else if (color == 41) {
		$('#color_type').html('左に転がる玉');
	} else if (color == 42) {
		$('#color_type').html('右に転がる玉');
	} else if (color == 43) {
		$('#color_type').html('左に転がる玉2');
	} else if (color == 44) {
		$('#color_type').html('右に転がる玉2');
	} else if (color == 45) {
		$('#color_type').html('浮かぶ星');
	} else if (color == 46) {
		$('#color_type').html('浮かぶ星2');
	} else if (color == 47) {
		$('#color_type').html('浮かぶ星 (空中)');
	} else if (color == 48) {
		$('#color_type').html('不明');
	} else if (color == 49) {
		$('#color_type').html('大型の電波塔');
	} else if (color == 50) {
		$('#color_type').html('大型の電波塔2');
	} else if (color == 51) {
		$('#color_type').html('ゲート');
	} else if (color == 52) {
		$('#color_type').html('ゲート2');
	} else if (color == 53) {
		$('#color_type').html('ゲート (閉)');
	} else if (color == 54) {
		$('#color_type').html('ゲート2 (閉)');
	} else if (color == 55) {
		$('#color_type').html('レーザー (縦｜赤)');
	} else if (color == 56) {
		$('#color_type').html('レーザー (横｜赤)');
	} else if (color == 57) {
		$('#color_type').html('レーザー (縦｜青)');
	} else if (color == 58) {
		$('#color_type').html('レーザー (横｜青)');
	} else if (color == 59) {
		$('#color_type').html('上下方向接続禁止');
	} else if (color == 60) {
		$('#color_type').html('左右方向接続禁止');
	} else if (color == 61) {
		$('#color_type').html('稼働床 (上)');
	} else if (color == 62) {
		$('#color_type').html('稼働床 (下)');
	} else if (color == 63) {
		$('#color_type').html('稼働床 (左)');
	} else if (color == 64) {
		$('#color_type').html('稼働床 (右)');
	} else if (color == 65) {
		$('#color_type').html('連動稼働床 (上)');
	} else if (color == 66) {
		$('#color_type').html('連動稼働床 (下)');
	} else if (color == 67) {
		$('#color_type').html('連動稼働床 (左)');
	} else if (color == 68) {
		$('#color_type').html('連動稼働床 (右)');
	} else if (color == 69) {
		$('#color_type').html('連動稼働床 (上｜連結なし)');
	} else if (color == 70) {
		$('#color_type').html('連動稼働床 (下｜連結なし)');
	} else if (color == 71) {
		$('#color_type').html('連動稼働床 (左｜連結なし)');
	} else if (color == 72) {
		$('#color_type').html('連動稼働床 (右｜連結なし)');
	} else if (color == 73) {
		$('#color_type').html('連動稼働床 (上｜左連結)');
	} else if (color == 74) {
		$('#color_type').html('連動稼働床 (下｜右連結)');
	} else if (color == 75) {
		$('#color_type').html('連動稼働床 (左｜右連結)');
	} else if (color == 76) {
		$('#color_type').html('連動稼働床 (右｜左連結)');
	} else if (color == 77) {
		$('#color_type').html('スイッチ (赤)');
	} else if (color == 78) {
		$('#color_type').html('スイッチ (青)');
	} else if (color == 79) {
		$('#color_type').html('レーザー発射装置');
	} else if (color == 80) {
		$('#color_type').html('下がるブロック');
	} else if (color == 81) {
		$('#color_type').html('宝石');
	} else if (color == 82) {
		$('#color_type').html('宝石2');
	} else if (color == 83) {
		$('#color_type').html('宝石3');
	} else if (color == 84) {
		$('#color_type').html('宝石4');
	} else if (color == 85) {
		$('#color_type').html('宝石5');
	} else if (color == 86) {
		$('#color_type').html('宝石 (ジャンプ床)');
	} else if (color == 87) {
		$('#color_type').html('宝石 (左移動)');
	} else if (color == 88) {
		$('#color_type').html('宝石 (右移動)');
	} else if (color == 89) {
		$('#color_type').html('左に動くブロック');
	} else if (color == 90) {
		$('#color_type').html('右に動くブロック');
	} else if (color == 91) {
		$('#color_type').html('左に動くブロック2');
	} else if (color == 92) {
		$('#color_type').html('右に動くブロック2');
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
  	$('#color_type').html('空白');
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
  let str = `[header]
width=5
height=1200
tilewidth=40
tileheight=40
orientation=orthogonal

[tilesets]
tileset=../tileset/tileset01.png,64,64,0,0

[layer]
type=Level
data=
`;
  data.forEach((r, i) => 
    str += "" + r.join(",") + "" + (i == data.length - 1? "": ",\n")
  );
  $("#output").val(str + ``);
var anceg = $("#output").val();
var anccg = $("#output").val().length;
$("#DGDR").html("行数 :" + gridLength);
$('#touch_s').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  });
  $('#touch_s').get(0).play();
  
}
