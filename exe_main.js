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
let girls = Math.floor( Math.random() * 2 );
let userAgent = window.navigator.userAgent.toLowerCase();
wave = $.cookie('z_wave');
let gya = Math.floor( Math.random() * 11 );
let url = location.href;
let fgnc = url.substr( 54 );
$('#zero').get(0);
let data;
let reqId;
$.getJSON('12DPzS9T_cYi83_Mzxk89XtfkExgdxr2D8TPYyUUDJWZQiEPa3mYD8DNHaaVryrtFnLMKuaSDLEfsgcekgddJfZwgWVE.rse', d => {
  data = d;
  loadLevel(level);
  $('#play').show();
  $('#PresentCode').hide();
  $('#play').click(start);
  $('#next').hide();
  $('#score').hide();
  $('#level-d').html('終末の試練');
  $('#level').html('The Execution');
  $('#stars').html('☆☆☆☆☆☆☆☆☆☆☆☆');
  $('#Waves').html('☆ × ' + $.cookie('exe_wave'));

  // ブラウザ判定

  if(userAgent.indexOf('msie') != -1 ||
     userAgent.indexOf('trident') != -1) {
     $('#play').hide();
     $('#next').hide();
     $('#score').hide();
     $('#level-d').html('E R R O R !');
     $('#level').html('お使いの ブラウザ または アプリ は対応していません');
     $('#stars').html('ERROR 000');
  } else if (userAgent.indexOf('edge') != -1 || userAgent.indexOf("edga") !== -1 || userAgent.indexOf("edgios") !== -1) {
     $('#level-d').html('⌥⌥データ取得中⌥⌥');
  } else if (userAgent.indexOf("ucbrowser") !== -1) {
     $('#play').hide();
     $('#next').hide();
     $('#score').hide();
     $('#level-d').html('E R R O R !');
     $('#level').html('お使いの ブラウザ または アプリ は対応していません');
     $('#stars').html('ERROR 404');
  } else if(userAgent.indexOf('chrome') != -1) {
     $('#level-d').html('⌥データ取得中⌥');
  } else if(userAgent.indexOf('safari') != -1) {
     $('#level-d').html('⌥データ取得中⌥');
  } else if(userAgent.indexOf('firefox') != -1) {
     $('#play').hide();
     $('#next').hide();
     $('#score').hide();
     $('#level-d').html('E R R O R !');
     $('#level').html('お使いの ブラウザ または アプリ は対応していません');
     $('#stars').html('ERROR 810');
  } else if(userAgent.indexOf('opera') != -1) {
     $('#level-d').html('⌥データ取得中⌥');
  } else {
     $('#play').hide();
     $('#next').hide();
     $('#score').hide();
     $('#level-d').html('E R R O R !');
     $('#level').html('お使いの ブラウザ または アプリ は対応していません');
     $('#stars').html('ERROR 666');
  }

  $('#level-d').html('終末の試練');
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
    $('#play').hide();
    $('#main').fadeOut(300);
    $('#name').hide();
    if (userAgent.indexOf('edge') != -1 || userAgent.indexOf("edga") !== -1 || userAgent.indexOf("edgios") !== -1) {
    $('#jump').get(0).play();
    $('#gem').get(0).play();
    $('#crown').get(0).play();
    } else if (userAgent.indexOf('chrome') != -1) {
    $('#jump').get(0).play();
    $('#gem').get(0).play();
    $('#crown').get(0).play();
    } else if(userAgent.indexOf('safari') != -1) {
       
    } else if(userAgent.indexOf('opera') != -1) {
    $('#jump').get(0).play();
    $('#gem').get(0).play();
    $('#crown').get(0).play();
    }
    $('#jump').each(function(){
       this.pause(); // Stop playing
       this.currentTime = 0; // Reset time
    });
    $('#gem').each(function(){
       this.pause(); // Stop playing
       this.currentTime = 0; // Reset time
    });
    $('#crown').each(function(){
       this.pause(); // Stop playing
       this.currentTime = 0; // Reset time
    });
    if (typeof wave == 'undefined') {
        wave = 0;
        $.cookie('exe_wave', wave, { expires: 40, domain:'figseu-technology.github.io'});
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
      if (v instanceof Downobstacle) {
        v.mesh.position.y = 0.4;
        v.line.position.y = 0.4;
      }
    });
    world.forEach(v => {
      if (v instanceof Upobstacle) {
        v.mesh.position.y = 0;
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
        v.mesh.position.y = 0;
        v.line.position.y = 0;
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
  $('#level-d').html('終末の試練');
  $('#level').html('The Execution');
  $('#stars').html('☆☆☆☆☆☆☆☆☆☆☆☆');
  $('#Waves').html('☆ × ' + $.cookie('exe_wave'));
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
  $('#level').html('？？？');
  $('#stars').html('☆☆☆☆☆☆☆☆☆☆☆');
  $('#Waves').html('☆ × ' + $.cookie('exe_wave'));
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
          break;
        case 3000:
          world.push(new UNObstacle(j - 2, -i, data[index].obstacle));
          break;
        case 4:
          world.push(new Obstacle(j - 2, -i, data[index].obstacle));
          world.push(new Dreamcube(j - 2, -i, data[index].obstacle));
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
        case 60:
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
        case 10:
          world.push(new Speedup(j - 2, -i, data[index].mat));
          break;
        case 11:
          world.push(new Speednormal(j - 2, -i, data[index].mat));
          break;
        case 12:
          world.push(new Speeddown(j - 2, -i, data[index].mat));
          break;
        case 13:
          world.push(new Back(j - 2, -i, data[index].mat));
          break;
        case 14:
          world.push(new Holemat(j - 2, -i, data[index].mat));
          world.push(new Hole(j - 2, -i, data[index].bouncer));
          break;
        case 15:
          world.push(new Fastbouncer(j - 2, -i, data[index].bouncer));
          break;
        case 16:
          world.push(new Highobstacle(j - 2, -i, data[index].obstacle));
          break;
        case 17:
          world.push(new Tower(j - 2, -i, data[index].obstacle));
          break;
        case 18:
          world.push(new Upobstacle(j - 2, -i, data[index].obstacle));
          break;
        case 19:
          world.push(new Downobstacle(j - 2, -i, data[index].mat));
          break;
        case 20:
          world.push(new Deltemat(j - 2, -i, data[index].mat));
          break;
        case 21:
          world.push(new Worpmat(j - 2, -i, data[index].mat));
          break;
        case 31:
          if (girls == 0) {
             world.push(new RandomMat(j - 2, -i, data[index].obstacle));
          } else {
             world.push(new Deltemat(j - 2, -i, data[index].obstacle));
          }
          break;
        case 32:
          if (girls == 1) {
             world.push(new RandomMat(j - 2, -i, data[index].obstacle));
          } else {
             world.push(new Deltemat(j - 2, -i, data[index].obstacle));
          }
          break;
        case 39:
          world.push(new Obstacle(j - 2, -i, data[index].obstacle));
          break;
        case 94:
          world.push(new FellGate(j - 2, -i, data[index].obstacle));
          world.push(new FellGateMat(j - 2, -i, data[index].mat));
          break;
        case 98:
          world.push(new Trskyobstacle(j - 2, -i, data[index].obstacle));
          break;
        case 210:
          world.push(new Dreamtower(j - 2, -i, data[index].obstacle));
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
  $.cookie('exe_wave', wave, { expires: 400, domain:'figseu-technology.github.io'});
  started = false;
  ball.speed.z = 0;
  $('#main').fadeIn(100);
  $('#retry').hide();
  $('#play').show();
  $('#play').click(start);
  $('#level').show();
  $('#stars').show();
  $('#score').show();
  $('#score').html($('#percent').html());
  $('#main').css('pointer-events', 'auto');
  $('#Waves').html('☆ × ' + $.cookie('exe_wave'));
  if (star == 2) {
      $('#level-d').html('少女は希望を見つけ、立線と共に消えた');
      $('#play').show();
      $('#prev').hide();
      $('#end_key').hide();
      $('#PresentCode').hide();
      $('#next').hide();
  }
  $('#zero').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  });
}
