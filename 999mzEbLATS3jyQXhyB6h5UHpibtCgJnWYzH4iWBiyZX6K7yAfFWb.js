const scene = new THREE.Scene();const camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight,1,10000);const renderer = new THREE.WebGLRenderer({ antialias: true });renderer.setSize(window.innerWidth, window.innerHeight);renderer.setClearColor(0xaaaaaa, 1);const canvas = $('#canvascontainer').append(renderer.domElement);let distance = 4;let started = false;let percent = 0;camera.position.set(0, 5, distance);camera.rotation.x -= 0.75;let scoreSubmitted = false;let level = 1;let star = 0;
let wave = 0;let wave_t = 0;let wave_th = 0;let wave_f = 0;let wave_fi = 0;let wave_s = 0;
let o_wave = 0;let o_wave_t = 0;let o_wave_th = 0;let o_wave_f = 0;let o_wave_fi = 0;let o_wave_s = 0;
let t_wave = 0;let t_wave_t = 0;let t_wave_th = 0;let t_wave_f = 0;let t_wave_fi = 0;
let th_wave = 0;let th_wave_t = 0;let th_wave_th = 0;let th_wave_f = 0;
let f_wave = 0;let f_wave_t = 0;let f_wave_th = 0;let f_wave_f = 0;let f_wave_fi = 0;let f_wave_s = 0;
let fi_wave = 0;let fi_wave_t = 0;let fi_wave_f = 0;
let s_wave = 0;let s_wave_t = 0;let s_wave_th = 0;let se_wave = 0;let se_wave_t = 0;let se_wave_th = 0;
let e_wave = 0;let e_wave_t = 0;let e_wave_th = 0;let e_wave_f = 0;let e_wave_fi = 0;let e_wave_s = 0;let e_wave_se = 0;
let n_wave = 0;let n_wave_t = 0;let n_wave_th = 0;let n_wave_f = 0;
let te_wave = 0;let te_wave_t = 0;let te_wave_th = 0;let te_wave_f = 0;let te_wave_fi = 0;let te_wave_s = 0;
let z_wave = 0;
let Pfd_82 = 0;
let userAgent = window.navigator.userAgent.toLowerCase();
wave = $.cookie('n_wave');wave_t = $.cookie('n_wave_t');wave_th = $.cookie('n_wave_th');wave_f = $.cookie('n_wave_f');wave_fi = $.cookie('n_wave_fi');wave_s = $.cookie('n_wave_s');o_wave = $.cookie('o_wave');o_wave_t = $.cookie('o_wave_t');o_wave_th = $.cookie('o_wave_th');o_wave_f = $.cookie('o_wave_f');o_wave_fi = $.cookie('o_wave_fi');o_wave_s = $.cookie('o_wave_s');t_wave = $.cookie('t_wave');t_wave_t = $.cookie('t_wave_t');t_wave_th = $.cookie('t_wave_th');t_wave_f = $.cookie('t_wave_f');t_wave_fi = $.cookie('t_wave_fi');th_wave = $.cookie('th_wave');th_wave_t = $.cookie('th_wave_t');th_wave_th = $.cookie('th_wave_th');th_wave_f = $.cookie('th_wave_f');f_wave = $.cookie('f_wave');f_wave_t = $.cookie('f_wave_t');f_wave_th = $.cookie('f_wave_th');f_wave_f = $.cookie('f_wave_f');fi_wave = $.cookie('fi_wave');fi_wave_t = $.cookie('fi_wave_t');fi_wave_f = $.cookie('fi_wave_f');s_wave = $.cookie('s_wave');s_wave_t = $.cookie('s_wave_t');s_wave_th = $.cookie('s_wave_th');se_wave = $.cookie('se_wave');se_wave_t = $.cookie('se_wave_t');se_wave_th = $.cookie('se_wave_th');e_wave = $.cookie('e_wave');e_wave_t = $.cookie('e_wave_t');e_wave_th = $.cookie('e_wave_th');e_wave_f = $.cookie('e_wave_f');e_wave_fi = $.cookie('e_wave_fi');e_wave_s = $.cookie('e_wave_s');e_wave_se = $.cookie('e_wave_se');n_wave = $.cookie('n_wave');n_wave_t = $.cookie('n_wave_t');n_wave_th = $.cookie('n_wave_th');n_wave_f = $.cookie('n_wave_f');te_wave = $.cookie('te_wave');te_wave_t = $.cookie('te_wave_t');te_wave_th = $.cookie('te_wave_th');te_wave_f = $.cookie('te_wave_f');te_wave_fi = $.cookie('te_wave_fi');te_wave_s = $.cookie('te_wave_s');z_wave = $.cookie('z_wave');
let girls = Math.floor( Math.random() * 2 );
let url = location.href;
let fgnc = url.substr( 97 );
$('#FELL').get(0);
$('#TFE').get(0);
$('#DAYS').get(0);
$('#TDAYS').get(0);
$('#SINGULARITY').get(0);
let data;
let reqId;
$.getJSON('5Unsunzm3QHz6NjH6wZyCitzJdwYTyTEwFERAXSGYeQDzCmzym.rse', d => {
  data = d;
  loadLevel(level);
  $('#play').show();
  $('#PresentCode').hide();
  $('#play').click(start);
  $('#next').show();
  $('#score').hide();
  $('#level').html('Fell Gate');
  $('#stars').html('☆☆☆☆☆☆☆☆☆');
  $('#Waves').html('☆ × ' + $.cookie('n_wave'));

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
     
  } else if (userAgent.indexOf("ucbrowser") !== -1) {
     $('#play').hide();
     $('#next').hide();
     $('#score').hide();
     $('#level-d').html('E R R O R !');
     $('#level').html('お使いの ブラウザ または アプリ は対応していません');
     $('#stars').html('ERROR 404');
  } else if(userAgent.indexOf('chrome') != -1) {
     
  } else if(userAgent.indexOf('safari') != -1) {
     
  } else if(userAgent.indexOf('firefox') != -1) {
     
  } else if(userAgent.indexOf('opera') != -1) {
     
  } else {
     $('#play').hide();
     $('#next').hide();
     $('#score').hide();
     $('#level-d').html('E R R O R !');
     $('#level').html('お使いの ブラウザ または アプリ は対応していません');
     $('#stars').html('ERROR 666');
  }

  // SINGULARITY

if (fgnc == 'nof') {$('#level-d').html('Extra ステージ');} 
else if (fgnc == 'Function_Save_Wave') {$.cookie('o_wave', o_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_t', o_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_th', o_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_f', o_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_fi', o_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_s', o_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave', t_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_t', t_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_th', t_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_f', t_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_fi', t_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave', th_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_t', th_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_th', th_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_f', th_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave', f_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_t', f_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_th', f_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_f', f_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave', fi_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave_t', fi_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave_f', fi_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave', s_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave_t', s_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave_th', s_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave', se_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave_t', se_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave_th', se_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave', e_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_t', e_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_th', e_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_f', e_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_fi', e_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_s', e_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_se', e_wave_se, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave', n_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_t', n_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_th', n_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_f', n_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave', te_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_t', te_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_th', te_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_f', te_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_fi', te_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_s', te_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('z_wave', z_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$('#level-d').html('⌥⌥ Function_Save_Wave ⌥⌥');  } 
else if (fgnc == 'Function_Delte_Wave') {o_wave = 0;o_wave_t = 0;o_wave_th = 0;o_wave_f = 0;o_wave_fi = 0;o_wave_s = 0;t_wave = 0;t_wave_t = 0;t_wave_th = 0;t_wave_f = 0;t_wave_fi = 0;th_wave = 0;th_wave_t = 0;th_wave_th = 0;th_wave_f = 0;f_wave = 0;f_wave_t = 0;f_wave_th = 0;f_wave_f = 0;f_wave_fi = 0;f_wave_s = 0;fi_wave = 0;fi_wave_t = 0;fi_wave_f = 0;s_wave = 0;s_wave_t = 0;s_wave_th = 0;se_wave = 0;se_wave_t = 0;se_wave_th = 0;e_wave = 0;e_wave_t = 0;e_wave_th = 0;e_wave_f = 0;e_wave_fi = 0;e_wave_s = 0;e_wave_se = 0;n_wave = 0;n_wave_t = 0;n_wave_th = 0;n_wave_f = 0;te_wave = 0;te_wave_t = 0;te_wave_th = 0;te_wave_f = 0;te_wave_fi = 0;te_wave_s = 0;z_wave = 0;$.cookie('o_wave', o_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_t', o_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_th', o_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_f', o_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_fi', o_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_s', o_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave', t_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_t', t_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_th', t_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_f', t_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_fi', t_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave', th_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_t', th_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_th', th_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_f', th_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave', f_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_t', f_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_th', f_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_f', f_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave', fi_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave_t', fi_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave_f', fi_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave', s_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave_t', s_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave_th', s_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave', se_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave_t', se_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave_th', se_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave', e_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_t', e_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_th', e_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_f', e_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_fi', e_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_s', e_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_se', e_wave_se, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave', n_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_t', n_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_th', n_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_f', n_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave', te_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_t', te_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_th', te_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_f', te_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_fi', te_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_s', te_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('z_wave', z_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$('#level-d').html('⌥⌥ Function_Delte_Wave ⌥⌥');  } 
else if (fgnc == 'Function_Waves_Complete') {o_wave = 0;o_wave_t = 0;o_wave_th = 0;o_wave_f = 0;o_wave_fi = 0;o_wave_s = 0;t_wave = 0;t_wave_t = 0;t_wave_th = 0;t_wave_f = 0;t_wave_fi = 0;th_wave = 0;th_wave_t = 0;th_wave_th = 0;th_wave_f = 0;f_wave = 0;f_wave_t = 0;f_wave_th = 0;f_wave_f = 0;f_wave_fi = 0;f_wave_s = 0;fi_wave = 0;fi_wave_t = 0;fi_wave_f = 0;s_wave = 0;s_wave_t = 0;s_wave_th = 0;se_wave = 0;se_wave_t = 0;se_wave_th = 0;e_wave = 0;e_wave_t = 0;e_wave_th = 0;e_wave_f = 0;e_wave_fi = 0;e_wave_s = 0;e_wave_se = 0;n_wave = 0;n_wave_t = 0;n_wave_th = 0;n_wave_f = 0;te_wave = 0;te_wave_t = 0;te_wave_th = 0;te_wave_f = 0;te_wave_fi = 0;te_wave_s = 0;z_wave = 0;$.cookie('o_wave', o_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_t', o_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_th', o_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_f', o_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_fi', o_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_s', o_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave', t_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_t', t_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_th', t_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_f', t_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_fi', t_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave', th_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_t', th_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_th', th_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_f', th_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave', f_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_t', f_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_th', f_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_f', f_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave', fi_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave_t', fi_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave_f', fi_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave', s_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave_t', s_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave_th', s_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave', se_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave_t', se_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave_th', se_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave', e_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_t', e_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_th', e_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_f', e_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_fi', e_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_s', e_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_se', e_wave_se, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave', n_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_t', n_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_th', n_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_f', n_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave', te_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_t', te_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_th', te_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_f', te_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_fi', te_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_s', te_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('z_wave', z_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$('#level-d').html('⌥⌥ Function_Complete ⌥⌥');  } else if (fgnc == 'Function_-Eshell-_Waves_Complete') {o_wave = 1;o_wave_t = 1;o_wave_th = 1;o_wave_f = 1;o_wave_fi = 1;o_wave_s = 1;t_wave = 1;t_wave_t = 1;t_wave_th = 1;t_wave_f = 1;t_wave_fi = 1;th_wave = 1;th_wave_t = 1;th_wave_th = 1;th_wave_f = 1;f_wave = 1;f_wave_t = 1;f_wave_th = 1;f_wave_f = 1;f_wave_fi = 1;f_wave_s = 1;fi_wave = 1;fi_wave_t = 1;fi_wave_f = 1;s_wave = 1;s_wave_t = 1;s_wave_th = 1;se_wave = 1;se_wave_t = 1;se_wave_th = 1;e_wave = 1;e_wave_t = 1;e_wave_th = 1;e_wave_f = 1;e_wave_fi = 1;e_wave_s = 1;e_wave_se = 1;n_wave = 1;n_wave_t = 1;n_wave_th = 1;n_wave_f = 1;te_wave = 1;te_wave_t = 1;te_wave_th = 1;te_wave_f = 1;te_wave_fi = 1;te_wave_s = 1;z_wave = 1;$.cookie('o_wave', o_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_t', o_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_th', o_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_f', o_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_fi', o_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_s', o_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave', t_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_t', t_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_th', t_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_f', t_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_fi', t_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave', th_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_t', th_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_th', th_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_f', th_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave', f_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_t', f_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_th', f_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_f', f_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave', fi_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave_t', fi_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave_f', fi_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave', s_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave_t', s_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave_th', s_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave', se_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave_t', se_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave_th', se_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave', e_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_t', e_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_th', e_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_f', e_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_fi', e_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_s', e_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_se', e_wave_se, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave', n_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_t', n_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_th', n_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_f', n_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave', te_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_t', te_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_th', te_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_f', te_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_fi', te_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_s', te_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('z_wave', z_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$('#level-d').html('⌥⌥ Function_Complete ⌥⌥');  } 
else if (fgnc == 'Function_Waves_Write') {  $('#level-d').html('⌥⌥ Function_Waves_Write ⌥⌥');  } else if (fgnc == 'Function_-Eshell-_Waves-All-_Write-50-') {o_wave = 50;o_wave_t = 50;o_wave_th = 50;o_wave_f = 50;o_wave_fi = 50;o_wave_s = 50;t_wave = 50;t_wave_t = 50;t_wave_th = 50;t_wave_f = 50;t_wave_fi = 50;th_wave = 50;th_wave_t = 50;th_wave_th = 50;th_wave_f = 50;f_wave = 50;f_wave_t = 50;f_wave_th = 50;f_wave_f = 50;f_wave_fi = 50;f_wave_s = 50;fi_wave = 50;fi_wave_t = 50;fi_wave_f = 50;s_wave = 50;s_wave_t = 50;s_wave_th = 50;se_wave = 50;se_wave_t = 50;se_wave_th = 50;e_wave = 50;e_wave_t = 50;e_wave_th = 50;e_wave_f = 150;e_wave_fi = 50;e_wave_s = 50;e_wave_se = 50;n_wave = 50;n_wave_t = 50;n_wave_th = 50;n_wave_f = 50;te_wave = 50;te_wave_t = 50;te_wave_th = 50;te_wave_f = 50;te_wave_fi = 50;te_wave_s = 50;z_wave = 50;$.cookie('o_wave', o_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_t', o_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_th', o_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_f', o_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_fi', o_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_s', o_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave', t_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_t', t_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_th', t_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_f', t_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_fi', t_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave', th_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_t', th_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_th', th_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_f', th_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave', f_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_t', f_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_th', f_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_f', f_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave', fi_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave_t', fi_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave_f', fi_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave', s_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave_t', s_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave_th', s_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave', se_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave_t', se_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave_th', se_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave', e_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_t', e_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_th', e_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_f', e_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_fi', e_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_s', e_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_se', e_wave_se, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave', n_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_t', n_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_th', n_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_f', n_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave', te_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_t', te_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_th', te_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_f', te_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_fi', te_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_s', te_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('z_wave', z_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$('#level-d').html('⌥⌥ Function_Waves_Write ⌥⌥');  } else if (fgnc == 'Function_-Eshell-_Waves-All-_Write-100-') {o_wave = 100;o_wave_t = 100;o_wave_th = 100;o_wave_f = 100;o_wave_fi = 100;o_wave_s = 100;t_wave = 100;t_wave_t = 100;t_wave_th = 100;t_wave_f = 100;t_wave_fi = 100;th_wave = 100;th_wave_t = 100;th_wave_th = 100;th_wave_f = 100;f_wave = 100;f_wave_t = 100;f_wave_th = 100;f_wave_f = 100;f_wave_fi = 100;f_wave_s = 100;fi_wave = 100;fi_wave_t = 100;fi_wave_f = 100;s_wave = 100;s_wave_t = 100;s_wave_th = 100;se_wave = 100;se_wave_t = 100;se_wave_th = 100;e_wave = 100;e_wave_t = 100;e_wave_th = 100;e_wave_f = 100;e_wave_fi = 100;e_wave_s = 100;e_wave_se = 100;n_wave = 100;n_wave_t = 100;n_wave_th = 100;n_wave_f = 100;te_wave = 100;te_wave_t = 100;te_wave_th = 100;te_wave_f = 100;te_wave_fi = 100;te_wave_s = 100;z_wave = 100;$.cookie('o_wave', o_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_t', o_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_th', o_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_f', o_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_fi', o_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_s', o_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave', t_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_t', t_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_th', t_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_f', t_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_fi', t_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave', th_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_t', th_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_th', th_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_f', th_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave', f_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_t', f_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_th', f_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_f', f_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave', fi_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave_t', fi_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave_f', fi_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave', s_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave_t', s_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave_th', s_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave', se_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave_t', se_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave_th', se_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave', e_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_t', e_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_th', e_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_f', e_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_fi', e_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_s', e_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_se', e_wave_se, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave', n_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_t', n_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_th', n_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_f', n_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave', te_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_t', te_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_th', te_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_f', te_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_fi', te_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_s', te_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('z_wave', z_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$('#level-d').html('⌥⌥ Function_Waves_Write ⌥⌥');  } else if (fgnc == 'Function_-Eshell-_Waves-All-_Write-500-') {o_wave = 500;o_wave_t = 500;o_wave_th = 500;o_wave_f = 500;o_wave_fi = 500;o_wave_s = 500;t_wave = 500;t_wave_t = 500;t_wave_th = 500;t_wave_f = 500;t_wave_fi = 500;th_wave = 500;th_wave_t = 500;th_wave_th = 500;th_wave_f = 500;f_wave = 500;f_wave_t = 500;f_wave_th = 500;f_wave_f = 500;f_wave_fi = 500;f_wave_s = 500;fi_wave = 500;fi_wave_t = 500;fi_wave_f = 500;s_wave = 500;s_wave_t = 500;s_wave_th = 500;se_wave = 500;se_wave_t = 500;se_wave_th = 500;e_wave = 500;e_wave_t = 500;e_wave_th = 500;e_wave_f = 500;e_wave_fi = 500;e_wave_s = 500;e_wave_se = 500;n_wave = 500;n_wave_t = 500;n_wave_th = 500;n_wave_f = 500;te_wave = 500;te_wave_t = 500;te_wave_th = 500;te_wave_f = 500;te_wave_fi = 500;te_wave_s = 500;z_wave = 500;$.cookie('o_wave', o_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_t', o_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_th', o_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_f', o_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_fi', o_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_s', o_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave', t_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_t', t_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_th', t_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_f', t_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_fi', t_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave', th_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_t', th_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_th', th_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_f', th_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave', f_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_t', f_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_th', f_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_f', f_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave', fi_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave_t', fi_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave_f', fi_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave', s_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave_t', s_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave_th', s_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave', se_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave_t', se_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave_th', se_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave', e_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_t', e_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_th', e_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_f', e_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_fi', e_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_s', e_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_se', e_wave_se, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave', n_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_t', n_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_th', n_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_f', n_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave', te_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_t', te_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_th', te_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_f', te_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_fi', te_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_s', te_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('z_wave', z_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$('#level-d').html('⌥⌥ Function_Waves_Write ⌥⌥');  } else if (fgnc == 'Function_-Eshell-_Waves-All-_Write-1000-') {o_wave = 1000;o_wave_t = 1000;o_wave_th = 1000;o_wave_f = 1000;o_wave_fi = 1000;o_wave_s = 1000;t_wave = 1000;t_wave_t = 1000;t_wave_th = 1000;t_wave_f = 1000;t_wave_fi = 1000;th_wave = 1000;th_wave_t = 1000;th_wave_th = 1000;th_wave_f = 1000;f_wave = 1000;f_wave_t = 1000;f_wave_th = 1000;f_wave_f = 1000;f_wave_fi = 1000;f_wave_s = 1000;fi_wave = 1000;fi_wave_t = 1000;fi_wave_f = 1000;s_wave = 1000;s_wave_t = 1000;s_wave_th = 1000;se_wave = 1000;se_wave_t = 1000;se_wave_th = 1000;e_wave = 1000;e_wave_t = 1000;e_wave_th = 1000;e_wave_f = 1000;e_wave_fi = 1000;e_wave_s = 1000;e_wave_se = 1000;n_wave = 1000;n_wave_t = 1000;n_wave_th = 1000;n_wave_f = 1000;te_wave = 1000;te_wave_t = 1000;te_wave_th = 1000;te_wave_f = 1000;te_wave_fi = 1000;te_wave_s = 1000;z_wave = 1000;$.cookie('o_wave', o_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_t', o_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_th', o_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_f', o_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_fi', o_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('o_wave_s', o_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave', t_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_t', t_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_th', t_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_f', t_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('t_wave_fi', t_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave', th_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_t', th_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_th', th_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('th_wave_f', th_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave', f_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_t', f_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_th', f_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('f_wave_f', f_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave', fi_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave_t', fi_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('fi_wave_f', fi_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave', s_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave_t', s_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('s_wave_th', s_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave', se_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave_t', se_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('se_wave_th', se_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave', e_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_t', e_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_th', e_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_f', e_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_fi', e_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_s', e_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('e_wave_se', e_wave_se, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave', n_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_t', n_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_th', n_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('n_wave_f', n_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave', te_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_t', te_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_th', te_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_f', te_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_fi', te_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('te_wave_s', te_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$.cookie('z_wave', z_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});$('#level-d').html('⌥⌥ Function_Waves_Write ⌥⌥');  } 
else if (fgnc == 'Function_-Deltemat-_Landing-True-') {$('#level-d').html('⌥⌥ Function_Landing ⌥⌥');}else if (fgnc == 'Function_---Eshell---_-Deltemat-_Landing-True-') {$('#level-d').html('⌥⌥ Function_Landing ⌥⌥');}
else if (fgnc == 'Function_Landing-True-') {$('#level-d').html('練習モード 起動中');}
else {
$('#level-d').html('⌥⌥ Unknown Function ⌥⌥');  } 


  reqId = requestAnimationFrame(render);
  console.clear();
  console.log(
    "Extraステージ - Shrine"
  );
});

  // start

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
    $('#speedup').get(0).play();
    } else if (userAgent.indexOf('chrome') != -1) {
    $('#jump').get(0).play();
    $('#gem').get(0).play();
    $('#speedup').get(0).play();
    } else if(userAgent.indexOf('safari') != -1) {
       
    } else if(userAgent.indexOf('firefox') != -1) {
    $('#jump').get(0).play();
    $('#gem').get(0).play();
    $('#speedup').get(0).play();
    } else if(userAgent.indexOf('opera') != -1) {
    $('#jump').get(0).play();
    $('#gem').get(0).play();
    $('#speedup').get(0).play();
    }
    $('#jump').each(function(){
       this.pause(); // Stop playing
       this.currentTime = 0; // Reset time
    });
    $('#gem').each(function(){
       this.pause(); // Stop playing
       this.currentTime = 0; // Reset time
    });
    $('#speedup').each(function(){
       this.pause(); // Stop playing
       this.currentTime = 0; // Reset time
    });
    if (typeof wave == 'undefined') {
        wave = 0;
        $.cookie('n_wave', wave, { expires: 30, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
     }
     if (typeof wave_t == 'undefined') {
        wave_t = 0;
        $.cookie('n_wave_t', wave_t, { expires: 30, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
     }
     if (typeof wave_th == 'undefined') {
        wave_th = 0;
        $.cookie('n_wave_th', wave_th, { expires: 30, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
     }
     if (typeof wave_f == 'undefined') {
        wave_f = 0;
        $.cookie('n_wave_f', wave_f, { expires: 30, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
     }
     if (typeof wave_fi == 'undefined') {
        wave_fi = 0;
        $.cookie('n_wave_fi', wave_fi, { expires: 30, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
     }
     if (typeof wave_s == 'undefined') {
        wave_s = 0;
        $.cookie('n_wave_s', wave_s, { expires: 30, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
     }
    if (level == 1) {
        $('#FELL').get(0).play();
        wave++;
        } else if (level == 2) {
        $('#TFE').get(0).play();
        wave_t++;
        } else if (level == 3) {
        $('#DAYS').get(0).play();
        wave_th++;
        } else if (level == 4) {
        $('#TDAYS').get(0).play();
        wave_f++;
        } else if (level == 5) {
        if (girls == 1) {
           $('#TRUESINGULARITY').get(0).play();
           wave_s++;
        } else {
           $('#SINGULARITY').get(0).play();
           wave_fi++;
        }
        } else {
            $('#FELL').get(0).play();
            }
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
  if (level == 5) {
    $('#next').hide();
  }
  if (level == 1) {
      $('#level-d').html('Extra ステージ');
      $('#level').html('Fell Gate');
      $('#stars').html('☆☆☆☆☆☆☆☆☆');
      $('#Waves').html('☆ × ' + $.cookie('n_wave'));
     } else if (level == 2) {
      $('#level-d').html('創造の地');
      $('#level').html('True Fell Gate');
      $('#stars').html('☆☆☆☆☆☆☆☆☆');
      $('#Waves').html('☆ × ' + $.cookie('n_wave_t'));
     } else if (level == 3) {
      $('#level-d').html('Extra ステージ');
      $('#level').html('Days');
      $('#stars').html('☆☆☆☆☆☆☆☆☆');
      $('#Waves').html('☆ × ' + $.cookie('n_wave_th'));
     } else if (level == 4) {
      $('#level-d').html('真実への道');
      $('#level').html('True Days');
      $('#stars').html('☆☆☆☆☆☆☆☆☆');
      $('#Waves').html('☆ × ' + $.cookie('n_wave_f'));
      } else if (level == 5) {
      if (girls == 1) {
         $('#level-d').html('最終ステージ');
         $('#level').html('True Singularity');
         $('#stars').html('☆☆☆☆☆☆☆☆☆');
         $('#Waves').html('☆ × ' + $.cookie('n_wave_s'));
      } else {
         $('#level-d').html('1周年記念ステージ');
         $('#level').html('Singularity');
         $('#stars').html('☆☆☆☆☆☆☆☆☆');
         $('#Waves').html('☆ × ' + $.cookie('n_wave_fi'));
      }
      } else {
            $('#level-d').html('開発中');
            $('#level').html('？？？');
            $('#stars').html('☆☆☆☆☆☆☆☆☆');
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
      $('#level-d').html('Extra ステージ');
      $('#level').html('Fell Gate');
      $('#stars').html('☆☆☆☆☆☆☆☆☆');
      $('#Waves').html('☆ × ' + $.cookie('n_wave'));
     } else if (level == 2) {
      $('#level-d').html('創造の地');
      $('#level').html('True Fell Gate');
      $('#stars').html('☆☆☆☆☆☆☆☆☆');
      $('#Waves').html('☆ × ' + $.cookie('n_wave_t'));
     } else if (level == 3) {
      $('#level-d').html('Extra ステージ');
      $('#level').html('Days');
      $('#stars').html('☆☆☆☆☆☆☆☆☆');
      $('#Waves').html('☆ × ' + $.cookie('n_wave_th'));
     } else if (level == 4) {
      $('#level-d').html('真実への道');
      $('#level').html('True Days');
      $('#stars').html('☆☆☆☆☆☆☆☆☆');
      $('#Waves').html('☆ × ' + $.cookie('n_wave_f'));
      } else if (level == 5) {
      if (girls == 1) {
         $('#level-d').html('最終ステージ');
         $('#level').html('True Singularity');
         $('#stars').html('☆☆☆☆☆☆☆☆☆');
         $('#Waves').html('☆ × ' + $.cookie('n_wave_s'));
      } else {
         $('#level-d').html('1周年記念ステージ');
         $('#level').html('Singularity');
         $('#stars').html('☆☆☆☆☆☆☆☆☆');
         $('#Waves').html('☆ × ' + $.cookie('n_wave_fi'));
      }
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
          if (fgnc == 'Function_Landing-True-') {
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
          world.push(new Mat(j - 2, -i, data[index].mat));
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
     wave_s = 0;
     } else if (level == 6) {
     wave_s = 0;
     }
  }
  if (fgnc == 'Function_Landing-True-') {
     if (level == 1) {
     wave = $.cookie('n_wave');
     } else if (level == 2) {
     wave_t = $.cookie('n_wave_t');
     } else if (level == 3) {
     wave_th = $.cookie('n_wave_th');
     } else if (level == 4) {
     wave_f = $.cookie('n_wave_f');
     } else if (level == 5) {
     wave_fi = $.cookie('n_wave_fi');
     wave_s = $.cookie('n_wave_s');
     } else if (level == 6) {
     wave_s = $.cookie('n_wave_s');
     }
  }
  $.cookie('n_wave', wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
  $.cookie('n_wave_t', wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
  $.cookie('n_wave_th', wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
  $.cookie('n_wave_f', wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
  $.cookie('n_wave_fi', wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
  $.cookie('n_wave_s', wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
  started = false;
  ball.speed.z = 0;
  $('#main').fadeIn(100);
  $('#retry').hide();
  $('#play').show();
  $('#play').click(start);
  $('#level').show();
  $('#stars').show();
  $('#score').show();
  $('#fell_key').hide();
  $('#days_key').hide();
  $('#singularity_key').hide();
  $('#score').html($('#percent').html());
  $('#main').css('pointer-events', 'auto');
  if (level == 1) { 
      $('#Waves').html('☆ × ' + $.cookie('n_wave'));
     if (star == 2) {
      $('#level-d').html('滅びる世界');
      }
      $('#FELL').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
});
     } else if (level == 2) { 
      $('#Waves').html('☆ × ' + $.cookie('n_wave_t'));
     if (star == 2) {
      $('#level-d').html('世界は新たに創造される');
      }
      $('#TFE').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
});
     } else if (level == 3) { 
      $('#Waves').html('☆ × ' + $.cookie('n_wave_th'));
     if (star == 2) {
      $('#level-d').html('運命が蠢く日');
      }
      $('#DAYS').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
});
     } else if (level == 4) { 
      $('#Waves').html('☆ × ' + $.cookie('n_wave_f'));
      if (star == 2) {
         if (fgnc == 'Function_Landing-True-') {
            $('#level-d').html('破壊された力');
         } else if (fgnc == 'nof') {
            $('#play').hide();
            $('#next').hide();
            $('#prev').hide();
            $('#PresentCode').hide();
            $('#days_key').show();
            $('#level-d').html('私は運命を動かし、あなたは運命に抗う');
         }
      }
      $('#TDAYS').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
});
     } else if (level == 5) { 
      $('#Waves').html('☆ × ' + $.cookie('n_wave_fi'));
      if (star == 2) {
         if (girls == 1) {
            Pfd_82 = 107558856528741996791037612619;
            $.cookie('Pfd_82', Pfd_82, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
            $('#stars').html('☆☆☆☆☆☆☆☆☆☆☆');
            $('#Waves').html('☆ × ' + $.cookie('n_wave_s'));
            if (fgnc == 'Function_Landing-True-') {
               $('#level-d').html('破壊された遺伝子');
            } else if (fgnc == 'nof') {
               $('#play').hide();
               $('#next').hide();
               $('#prev').hide();
               $('#PresentCode').hide();
               $('#singularity_key').show();
               $('#level-d').html('捻れた遺伝子を止める者');
            }
         } else {
            $('#level-d').html('捻れた遺伝子');
         }
      }
      $('#SINGULARITY').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
});
     $('#TRUESINGULARITY').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
});
     } else if (level == 6) { 
      $('#Waves').html('☆ × ' + $.cookie('n_wave_s'));
     if (star == 2) {
      $('#level-d').html('捻れた遺伝子を止める者');
      }
      $('#SINGULARITY').each(function(){
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
