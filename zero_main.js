const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  1,
  10000
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xaaaaaa, 1);

const canvas = $('#canvascontainer').append(renderer.domElement);
let distance = 4;
let started = false;
let percent = 0;
camera.position.set(0, 5, distance);
camera.rotation.x -= 0.75;
let scoreSubmitted = false;
let level = 1;
let star = 0;
let wave = 0;
wave = $.cookie('z_wave');
let gya = Math.floor( Math.random() * 11 );
let url = location.href;
let fgnc = url.substr( 75 );
$('#zero').get(0);
let data;
let reqId;
$.getJSON('RShy8KJ5MpxpiFELfSRSUjeAmLpsGgatFdE2DMkgQMSHyfgtR2rkZJGsr2G7XVYe8nkhjnTQurtXT5ApBMebE.json', d => {
  data = d;
  loadLevel(level);
  $('#play').show();
  $('#PresentCode').hide();
  $('#play').click(start);
  $('#next').hide();
  $('#score').hide();
  $('#level-d').html('最後の試練');
  $('#level').html('Zero');
  $('#stars').html('☆☆☆☆☆☆☆☆☆☆☆');
  $('#Waves').html('☆ × ' + $.cookie('z_wave'));
  reqId = requestAnimationFrame(render);
  console.clear();
  console.log(
    "超高難度 - The Ruby　血祭りの時間だ"
  );
});

//start function
function start(e) {
  e.preventDefault();
  if (!started) {
    started = true;
    ball.speed.z = -0.15;
    $('#main').fadeOut(300);
    $('#name').hide();
    $('#jump').get(0).play();
    $('#gem').get(0).play();
    $('#crown').get(0).play();
    if (typeof wave == 'undefined') {
        wave = 0;
        $.cookie('z_wave', wave, { expires: 40, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
    }
    $('#zero').get(0).play();
    wave++;
    reset();
    world.forEach(v => {
      if (v instanceof Bouncer) {
        v.line.position.y = 0;
      }
    });
    world.forEach(v => {
      if (v instanceof Mysterybox) {
        v.mesh.position.y = 1.1;
      }
    });
    world.forEach(v => {
      if (v instanceof Gem) {
        v.mesh.position.y = 1.1;
      }
    });
    world.forEach(v => {
      if (v instanceof Deltemat) {
        v.line.position.y = 0;
      }
    });
    world.forEach(v => {
      if (v instanceof Delteobstacle) {
        v.line.position.y = 0.4;
      }
    });
    $('#main').css('pointer-events', 'none');
  }
}
function reset() {
  ball.landed = true;
  ball.tmpZ = 0;
  camera.position.set(0, 5, distance);
  ball.mesh.position.set(0, 0.6, 0);
  ball.speed.y = 0;
  ball.count2Lose = 0;
}
function cl() {
  if (fgnc == 999) {
    $('#cd_1').get(0).play();
  } else {
    $('#cd_1').get(0).play();
  }
}

function nextLevel() {
  percent = 0;
  star = 0;
  while (
    (selectedObject = scene.getObjectByName('level component')) !== undefined
  ) {
    scene.remove(selectedObject);
  }
  world.length = 0;
  level++;
  loadLevel(level);
  reset();
  $('#score').hide();
  $('#level').show();
  $('#stars').show();
  $('#prev').show();
  $('#retry').hide();
  $('#play').show();
  $('#PresentCode').hide();
  if (level == 2) {
    $('#next').hide();
  }
  $('#level-d').html('最後の試練');
  $('#level').html('Zero');
  $('#stars').html('☆☆☆☆☆☆☆☆☆☆☆');
  $('#Waves').html('☆ × ' + $.cookie('z_wave'));
}

function prevLevel() {
  percent = 0;
  star = 0;
  while (
    (selectedObject = scene.getObjectByName('level component')) != undefined
  ) {
    scene.remove(selectedObject);
  }
  world.length = 0;
  level--;
  loadLevel(level);
  reset();
  $('#score').hide();
  $('#level').show();
  $('#stars').show();
  $('#next').show();
  $('#retry').hide();
  $('#play').show();
  $('#PresentCode').hide();
  if (level == 1) {
    $('#prev').hide();
  }
  $('#level-d').html('最後の試練');
  $('#level').html('Zero');
  $('#stars').html('☆☆☆☆☆☆☆☆☆☆☆');
  $('#Waves').html('☆ × ' + $.cookie('z_wave'));
}

const light = new THREE.HemisphereLight(0xeeeeee, 0x777777);
scene.add(light);
const world = [];
function loadLevel(level) {
  const index = level - 1;
  renderer.setClearColor(parseInt(data[index].background));
  ball.mesh.material.color.setHex(parseInt(data[index].ball));
  scene.fog = new THREE.Fog(parseInt(data[index].background), 10, 30);
  for (var i in data[index].data) {
    for (var j in data[index].data[i]) {
      switch (data[index].data[i][j]) {
        case 1:
          world.push(new Mat(j - 2, -i, data[index].mat));
          break;
        case 2:
          world.push(new Bouncer(j - 2, -i, data[index].bouncer));
          break;
        case 3:
          world.push(new Obstacle(j - 2, -i, data[index].obstacle));
          world.push(new Points(j - 2, -i, data[index].obstacle));
          break;
        case 4:
          world.push(new Obstacle(j - 2, -i, data[index].obstacle));
          world.push(new Dreamcube(j - 2, -i, data[index].obstacle));
          world.push(new Crystal(j - 2, -i, data[index].obstacle));
          break;
        case 5:
          world.push(new Mat(j - 2, -i, data[index].mat));
          world.push(new Skyobstacle(j - 2, -i, data[index].obstacle));
          break;
        case 50:
          world.push(new Skyobstacle(j - 2, -i, data[index].obstacle));
          break;
        case 6:
          world.push(new Trskyobstacle(j - 2, -i, data[index].obstacle));
          break;
        case 7:
          world.push(new Mat(j - 2, -i, data[index].mat));
          world.push(new Mysterybox(j - 2, -i, data[index].bouncer));
          break;
        case 8:
          world.push(new Mat(j - 2, -i, data[index].mat));
          world.push(new Gem(j - 2, -i, data[index].bouncer));
          break;
        case 9:
          world.push(new Goal(j - 2, -i, data[index].obstacle));
          break;
        case 20:
          world.push(new Deltemat(j - 2, -i, data[index].mat));
          break;
        case 21:
          world.push(new Flootmat(j - 2, -i, data[index].mat));
          break;
        case 23:
          world.push(new Delteobstacle(j - 2, -i, data[index].obstacle));
          break;
        case 33:
          world.push(new Mat(j - 2, -i, data[index].mat));
          world.push(new Delteobstacle(j - 2, -i, data[index].obstacle));
          break;
      }
    }
  }
}

var ball = new Ball();

keystate = [];
//Loop function
function render() {
  renderer.render(scene, camera);
  ball.update();
  percent = Math.ceil(
    Math.abs(ball.mesh.position.z) / data[level - 1].data.length * 100
  );
  percent = percent > 100 ? 100 : percent;
  $('#percent').html(percent + '%');
  if (keystate[37]) ball.mesh.position.x -= 0.15;
  if (keystate[39]) ball.mesh.position.x += 0.15;
  reqId = requestAnimationFrame(render);
};

//controls

function gameover() {
  if (star == 1) {
     wave = 0;
  }
  $.cookie('z_wave', wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
  started = false;
  ball.speed.z = 0;
  $('#main').fadeIn(500);
  $('#retry').hide();
  $('#play').show();
  $('#play').click(start);
  $('#level').show();
  $('#stars').show();
  $('#score').show();
  $('#score').html($('#percent').html());
  $('#main').css('pointer-events', 'auto');
  $('#Waves').html('☆ × ' + $.cookie('z_wave'));
  if (star == 2) {
      $('#level-d').html('あの日、あの場所で交わした約束');
      $('#play').hide();
      $('#prev').hide();
      $('#end_key').show();
      $('#PresentCode').hide();
      $('#next').hide();
  }
  $('#zero').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  });
}
