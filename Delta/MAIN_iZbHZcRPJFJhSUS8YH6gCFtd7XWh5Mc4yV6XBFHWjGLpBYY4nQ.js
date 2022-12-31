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
	data.push(0,0,0,0,0);
}

$('#designer').scrollTop($('#designer')[0].scrollHeight);

const colors = ['#191919', '#FFD300', '#E16E00', '#00E4D5', '#00E4D5', '#00E4D5', '#00E4D5', '#00E4D5', '#00E4D5', '#3A4C78', '#8282A3', '#3A4C78', '#8282A3', '#B2E200', '#B2E200', '#B2E200', '#B2E200', '#B2E200', '#B2E200', '#B2E200', '#B2E200', '#7B7B7B', '#7B7B7B', '#7B7B7B', '#7B7B7B'];
var color = 1;

$('#color').on('click', e => {
  $('#chenge_c').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  });
  $('#chenge_c').get(0).play();
  e.preventDefault();
  e.handled = true;
	color = (color + 1) % 24;
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
  data.push(0,0,0,0,0);
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
