const scene = new THREE.Scene();const camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight,1,10000);const renderer = new THREE.WebGLRenderer({ antialias: true });renderer.setSize(window.innerWidth, window.innerHeight);renderer.setClearColor(0xaaaaaa, 1);const canvas = $('#canvascontainer').append(renderer.domElement);
let distance = 4;let started = false;let percent = 0;camera.position.set(0, 5, distance);camera.rotation.x -= 0.75;let scoreSubmitted = false;let level = 1;let star = 0;let wave = 0;let wave_t = 0;let wave_th = 0;let wave_f = 0;let wave_fi = 0;let wave_s = 0;let wave_se = 0;let userAgent = window.navigator.userAgent.toLowerCase();wave = $.cookie('te_wave');wave_t = $.cookie('te_wave_t');wave_th = $.cookie('te_wave_th');wave_f = $.cookie('te_wave_f');wave_fi = $.cookie('te_wave_fi');wave_s = $.cookie('te_wave_s');wave_se = $.cookie('te_wave_se');
let gya = Math.floor( Math.random() * 11 );let url = location.href;let fgnc = url.substr( 53 );$('#ruby').get(0);$('#rgw').get(0);$('#dia').get(0);$('#kya').get(0);$('#ef').get(0);$('#eft').get(0);$('#kya_e').get(0);$('#kya_g').get(0);$('#eft_g ').get(0);let data;let reqId;$.getJSON('bLYKUiRJJY7RYQZNbWtdA3ANGJgBnwJxDf5Z6yWiWa9DQ32Rzz.rse', d => {data = d;loadLevel(level);$('#play').show();$('#PresentCode').hide();$('#play').click(start);$('#next').show();$('#score').hide();$('#level-d').html('超難関');$('#level').html('The Ruby');$('#stars').html('☆☆☆☆☆☆☆☆☆☆');$('#Waves').html('☆ × ' + $.cookie('te_wave'));

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
     $('#level-d').html('⌥データ取得中⌥');
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

$('#level-d').html('超難関ステージ');
reqId = requestAnimationFrame(render);console.clear();console.log("超高難度 - The Ruby　血祭りの時間だ");});

//start function
function start(e) {
  e.preventDefault();
  if (!started) {
    started = true;
    ball.speed.z = -0.15;
    $('#main').fadeOut(300);
    $('#name').hide();
    $('#play').hide();
    if (userAgent.indexOf('edge') != -1 || userAgent.indexOf("edga") !== -1 || userAgent.indexOf("edgios") !== -1) {
    $('#jump').get(0).play();
    $('#gem').get(0).play();
    } else if (userAgent.indexOf('chrome') != -1) {
    $('#jump').get(0).play();
    $('#gem').get(0).play();
    } else if(userAgent.indexOf('safari') != -1) {
       
    } else if(userAgent.indexOf('firefox') != -1) {
    $('#jump').get(0).play();
    $('#gem').get(0).play();
    } else if(userAgent.indexOf('opera') != -1) {
    $('#jump').get(0).play();
    $('#gem').get(0).play();
    }
    $('#jump').each(function(){
       this.pause(); // Stop playing
       this.currentTime = 0; // Reset time
    });
    $('#gem').each(function(){
       this.pause(); // Stop playing
       this.currentTime = 0; // Reset time
    });
    if (typeof wave == 'undefined') {
        wave = 0;
        $.cookie('te_wave', wave, { expires: 40, domain:'figseu-technology.github.io'});
     }
     if (typeof wave_t == 'undefined') {
        wave_t = 0;
        $.cookie('te_wave_t', wave_t, { expires: 40, domain:'figseu-technology.github.io'});
     }
     if (typeof wave_th == 'undefined') {
        wave_th = 0;
        $.cookie('te_wave_th', wave_th, { expires: 40, domain:'figseu-technology.github.io'});
     }
     if (typeof wave_f == 'undefined') {
        wave_f = 0;
        $.cookie('te_wave_f', wave_f, { expires: 40, domain:'figseu-technology.github.io'});
     }
     if (typeof wave_fi == 'undefined') {
        wave_fi = 0;
        $.cookie('te_wave_fi', wave_fi, { expires: 40, domain:'figseu-technology.github.io'});
     }
     if (typeof wave_s == 'undefined') {
        wave_s = 0;
        $.cookie('te_wave_s', wave_s, { expires: 40, domain:'figseu-technology.github.io'});
     }
     if (typeof wave_se == 'undefined') {
        wave_se = 0;
        $.cookie('te_wave_se', wave_se, { expires: 40, domain:'figseu-technology.github.io'});
     }
    if (level == 1) {
        $('#ruby').get(0).play();
        wave++;
        } else if (level == 2) {
        $('#rgw').get(0).play();
        wave_t++;
        } else if (level == 3) {
        $('#dia').get(0).play();
        wave_th++;
        } else if (level == 4) {
        $('#kya').get(0).play();
        wave_f++;
        } else if (level == 5) {
        $('#ef').get(0).play();
        wave_fi++;
        } else if (level == 6) {
          if (fgnc == 210) {
            $('#eft_g').get(0).play();
            wave_s++;
          } else {
            $('#eft').get(0).play();
            wave_s++;
          }
        } else if (level == 7) {
        $('#d23_ssd').get(0).play();
        wave_se++;
        } else {
            $('#cloud').get(0).play();
            }
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
  if (fgnc == 66) {
    $('#cd_2').get(0).play();
  } else if (fgnc == 210) {
    $('#cd_3').get(0).play();
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
  if (level == 6) {
    $('#next').hide();
  }
  if (level == 1) {
      $('#level-d').html('超難関 ステージ');
      $('#level').html('The Ruby');
      $('#stars').html('☆☆☆☆☆☆☆☆☆☆');
      $('#Waves').html('☆ × ' + $.cookie('te_wave'));
      $('#play').show();
      $('#PresentCode').hide();
     } else if (level == 2) {
      $('#level-d').html('超難関 ステージ');
      $('#level').html('The Beryl');
      $('#stars').html('☆☆☆☆☆☆☆☆☆☆');
      $('#Waves').html('☆ × ' + $.cookie('te_wave_t'));
     } else if (level == 3) {
      $('#level-d').html('超難関 ステージ');
      $('#level').html('The Dia');
      $('#stars').html('☆☆☆☆☆☆☆☆☆☆');
      $('#Waves').html('☆ × ' + $.cookie('te_wave_th'));
     } else if (level == 4) {
      if (fgnc == 113) {
                $('#level-d').html('特殊 ステージ');
                $('#level').html('The Kyanite');
          } else if (fgnc == 320) {
                $('#level-d').html('特殊 ステージ');
                $('#level').html('The Kyanite');
          } else {
                $('#level-d').html('ラストステージ');
                $('#level').html('The Kyanite');
          }
      $('#stars').html('☆☆☆☆☆☆☆☆☆☆');
      $('#Waves').html('☆ × ' + $.cookie('te_wave_f'));
     } else if (level == 5) {
         $('#level-d').html('Extra ステージ');
         $('#level').html('EF66');
         $('#stars').html('☆☆☆☆☆☆☆☆☆☆');
         $('#Waves').html('☆ × ' + $.cookie('te_wave_fi'));
     } else if (level == 6) {
         if (fgnc == 210) {
                $('#level-d').html('特殊 ステージ');
                $('#level').html('Happy Synthesizer');
          } else {
                $('#level-d').html('Extra ステージ');
                $('#level').html('EF210');
          }
         $('#stars').html('☆☆☆☆☆☆☆☆☆☆');
         $('#Waves').html('☆ × ' + $.cookie('te_wave_s'));
     } else if (level == 7) {
         $('#level-d').html('Designed by はぐれメタル');
         $('#level').html('D.23');
         $('#stars').html('☆☆☆☆☆☆☆☆☆☆');
         $('#Waves').html('☆ × ' + $.cookie('te_wave_se'));
        } else {
            $('#level-d').html('開発中');
            $('#level').html('Level ' + level);
            $('#stars').html('');
           }
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
  if (level == 1) {
    $('#prev').hide();
  }
  if (level == 1) {
      $('#level-d').html('超難関 ステージ');
      $('#level').html('The Ruby');
      $('#stars').html('☆☆☆☆☆☆☆☆☆☆');
      $('#Waves').html('☆ × ' + $.cookie('te_wave'));
      $('#play').show();
      $('#PresentCode').hide();
     } else if (level == 2) {
      $('#level-d').html('超難関 ステージ');
      $('#level').html('The Beryl');
      $('#stars').html('☆☆☆☆☆☆☆☆☆☆');
      $('#Waves').html('☆ × ' + $.cookie('te_wave_t'));
     } else if (level == 3) {
      $('#level-d').html('超難関 ステージ');
      $('#level').html('The Dia');
      $('#stars').html('☆☆☆☆☆☆☆☆☆☆');
      $('#Waves').html('☆ × ' + $.cookie('te_wave_th'));
     } else if (level == 4) {
      $('#level-d').html('ラストステージ');
      $('#level').html('The Kyanite');
      $('#stars').html('☆☆☆☆☆☆☆☆☆☆');
      $('#Waves').html('☆ × ' + $.cookie('te_wave_f'));
     } else if (level == 5) {
         $('#level-d').html('Extra ステージ');
         $('#level').html('EF66');
         $('#stars').html('☆☆☆☆☆☆☆☆☆☆');
         $('#Waves').html('☆ × ' + $.cookie('te_wave_fi'));
     } else if (level == 6) {
         if (fgnc == 210) {
                $('#level-d').html('特殊 ステージ');
                $('#level').html('Happy Synthesizer');
          } else {
                $('#level-d').html('Extra ステージ');
                $('#level').html('EF210');
          }
         $('#stars').html('☆☆☆☆☆☆☆☆☆☆');
         $('#Waves').html('☆ × ' + $.cookie('te_wave_s'));
     } else if (level == 7) {
         $('#level-d').html('Designed by はぐれメタル');
         $('#level').html('D.23');
         $('#stars').html('☆☆☆☆☆☆☆☆☆☆');
         $('#Waves').html('☆ × ' + $.cookie('te_wave_se'));
        } else {
            $('#level-d').html('開発中');
            $('#level').html('Level ' + level);
            $('#stars').html('');
           }
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
          if (fgnc == 'Function_Landing-True-' || fgnc == 'BLYK10_AgKeBiptdNeeWjr3MTmMhuDHYwjUEfNGmB47UuXs3bR55cXYPWDY6WtBnhUywY5GZXf9kDWVCh4pNAXiHNUjiZgLn8npS8Mg4cFh') {
             world.push(new DebugMat(j - 2, -i, data[index].mat));
          } else {
             world.push(new Mat(j - 2, -i, data[index].mat));
          }
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
        case 210:
          world.push(new Dreamtower(j - 2, -i, data[index].obstacle));
          world.push(new Crystal(j - 2, -i, data[index].obstacle));
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
     if (level == 1) {
     wave = 0;
     } else if (level == 2) {
     wave_t = 0;
     } else if (level == 3) {
     wave_th = 0;
     } else if (level == 4) {
     wave_f = 0;
     } else if (level == 5) {
     wave_fi = 0;
     } else if (level == 6) {
     wave_s = 0;
     } else if (level == 7) {
     wave_se = 0;
     }
  }
  if (fgnc == 'Function_Landing-True-') {
     if (level == 1) {
     wave = $.cookie('te_wave');
     } else if (level == 2) {
     wave_t = $.cookie('te_wave_t');
     } else if (level == 3) {
     wave_th = $.cookie('te_wave_th');
     } else if (level == 4) {
     wave_f = $.cookie('te_wave_f');
     } else if (level == 5) {
     wave_fi = $.cookie('te_wave_fi');
     } else if (level == 6) {
     wave_s = $.cookie('te_wave_s');
     } else if (level == 7) {
     wave_se = $.cookie('te_wave_se');
     }
  }
  $.cookie('te_wave', wave, { expires: 400, domain:'figseu-technology.github.io'});
  $.cookie('te_wave_t', wave_t, { expires: 400, domain:'figseu-technology.github.io'});
  $.cookie('te_wave_th', wave_th, { expires: 400, domain:'figseu-technology.github.io'});
  $.cookie('te_wave_f', wave_f, { expires: 400, domain:'figseu-technology.github.io'});
  $.cookie('te_wave_fi', wave_fi, { expires: 400, domain:'figseu-technology.github.io'});
  $.cookie('te_wave_s', wave_s, { expires: 400, domain:'figseu-technology.github.io'});
  $.cookie('te_wave_se', wave_se, { expires: 400, domain:'figseu-technology.github.io'});
  started = false;
  ball.speed.z = 0;
  $('#main').fadeIn(100);
  $('#retry').hide();
  $('#play').show();
  $('#play').click(start);
  $('#level').show();
  $('#stars').show();
  $('#score').show();
  $('#end_key').hide();
  $('#score').html($('#percent').html());
  $('#main').css('pointer-events', 'auto');
  if (level == 1) {
      $('#Waves').html('☆ × ' + $.cookie('te_wave'));
    if (star == 2) {
      $('#level-d').html('情熱を抱く紅の光');
      }
      $('#ruby').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
});
     } else if (level == 2) {
      $('#Waves').html('☆ × ' + $.cookie('te_wave_t'));
       if (star == 2) {
      $('#level-d').html('未来を貫く緑の光');
      }
      $('#rgw').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
});
     } else if (level == 3) {
      $('#Waves').html('☆ × ' + $.cookie('te_wave_th'));
       if (star == 2) {
      $('#level-d').html('決意は砕けない');
      }
      $('#dia').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
});
     } else if (level == 4) {
      $('#Waves').html('☆ × ' + $.cookie('te_wave_f'));
         if (star == 2) {
            if (fgnc == 'Function_Landing-True-') {
               $('#level-d').html('破壊された光');
            } else if (fgnc == 'nof' || fgnc == 'BLYK10_AgKeBiptdNeeWjr3MTmMhuDHYwjUEfNGmB47UuXs3bR55cXYPWDY6WtBnhUywY5GZXf9kDWVCh4pNAXiHNUjiZgLn8npS8Mg4cFh') {
               $('#play').hide();
               $('#next').hide();
               $('#prev').hide();
               $('#PresentCode').hide();
               $('#end_key').show();
               $('#level-d').html('天から差し込む光をただ、眺めていた');
            } else {
               $('#level-d').html('天から差し込む光');
            }
         }
      if (fgnc == 113) {
        $('#kya_e').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
});
      } else if (fgnc == 320) {
        $('#kya_g').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
});
      } else {
        $('#kya').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
});
     }
     } else if (level == 5) {
      $('#Waves').html('☆ × ' + $.cookie('te_wave_fi'));
      if (star == 2) {
      $('#level-d').html('夢を運ぶ　ブルートレイン');
      }
      $('#ef').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
});
     } else if (level == 6) {
      $('#Waves').html('☆ × ' + $.cookie('te_wave_s'));
      if (star == 2) {
      $('#level-d').html('天を　貫く');
      }
      if (fgnc == 210) {
      $('#eft_g').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
});
     } else {
      $('#eft').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
});
     }
     } else if (level == 7) {
      $('#Waves').html('☆ × ' + $.cookie('te_wave_se'));
      if (star == 2) {
      $('#level-d').html('テスト');
      }
      $('#d23_ssd').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
});
     } else {
      $('#cloud').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
});
     }
}
