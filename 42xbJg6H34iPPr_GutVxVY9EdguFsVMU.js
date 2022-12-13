let UserName = 0;
let Password = 0;
UserName = $.cookie('UserName');
Password = $.cookie('Password');
if (typeof UserName == 'undefined' && typeof Password == 'undefined') {
   location.href = "https://figseu-technology.github.io/Signup.html";
}

let o_wave = 0;
let o_wave_t = 0;
let o_wave_th = 0;
let o_wave_f = 0;
let o_wave_fi = 0;
let o_wave_s = 0;
let o_wave_se = 0;
let t_wave = 0;
let t_wave_t = 0;
let t_wave_th = 0;
let t_wave_f = 0;
let t_wave_fi = 0;
let th_wave = 0;
let th_wave_t = 0;
let th_wave_th = 0;
let th_wave_f = 0;
let th_wave_fi = 0;
let f_wave = 0;
let f_wave_t = 0;
let f_wave_th = 0;
let f_wave_f = 0;
let f_wave_fi = 0;
let f_wave_s = 0;
let fi_wave = 0;
let fi_wave_t = 0;
let fi_wave_f = 0;
let fi_wave_fi = 0;
let s_wave = 0;
let s_wave_t = 0;
let s_wave_th = 0;
let se_wave = 0;
let se_wave_t = 0;
let se_wave_th = 0;
let se_wave_f = 0;
let se_wave_fi = 0;
let se_wave_s = 0;
let se_wave_se = 0;
let e_wave = 0;
let e_wave_t = 0;
let e_wave_th = 0;
let e_wave_f = 0;
let e_wave_fi = 0;
let e_wave_s = 0;
let e_wave_se = 0;
let n_wave = 0;
let n_wave_t = 0;
let n_wave_th = 0;
let n_wave_f = 0;
let n_wave_fi = 0;
let n_wave_s = 0;
let te_wave = 0;
let te_wave_t = 0;
let te_wave_th = 0;
let te_wave_f = 0;
let te_wave_fi = 0;
let te_wave_s = 0;
let z_wave = 0;
let exe_wave = 0;
let Master_Stars = 0;
let Master_Stars_EX = 0;
let Master_Delta = 0;
let Master_Delta_EX = 0;
let Master_Performance = 0;
let Master_Comments = 0;
function Loading_Data() {
o_wave = $.cookie('o_wave');
o_wave_t = $.cookie('o_wave_t');
o_wave_th = $.cookie('o_wave_th');
o_wave_f = $.cookie('o_wave_f');
o_wave_fi = $.cookie('o_wave_fi');
o_wave_s = $.cookie('o_wave_s');
o_wave_se = $.cookie('o_wave_se');
t_wave = $.cookie('t_wave');
t_wave_t = $.cookie('t_wave_t');
t_wave_th = $.cookie('t_wave_th');
t_wave_f = $.cookie('t_wave_f');
t_wave_fi = $.cookie('t_wave_fi');
th_wave = $.cookie('th_wave');
th_wave_t = $.cookie('th_wave_t');
th_wave_th = $.cookie('th_wave_th');
th_wave_f = $.cookie('th_wave_f');
th_wave_fi = $.cookie('th_wave_fi');
f_wave = $.cookie('f_wave');
f_wave_t = $.cookie('f_wave_t');
f_wave_th = $.cookie('f_wave_th');
f_wave_f = $.cookie('f_wave_f');
fi_wave = $.cookie('fi_wave');
fi_wave_t = $.cookie('fi_wave_t');
fi_wave_f = $.cookie('fi_wave_f');
fi_wave_fi = $.cookie('fi_wave_fi');
s_wave = $.cookie('s_wave');
s_wave_t = $.cookie('s_wave_t');
s_wave_th = $.cookie('s_wave_th');
se_wave = $.cookie('se_wave');
se_wave_t = $.cookie('se_wave_t');
se_wave_th = $.cookie('se_wave_th');
se_wave_f = $.cookie('se_wave_f');
se_wave_fi = $.cookie('se_wave_fi');
se_wave_s = $.cookie('se_wave_s');
se_wave_se = $.cookie('se_wave_se');
e_wave = $.cookie('e_wave');
e_wave_t = $.cookie('e_wave_t');
e_wave_th = $.cookie('e_wave_th');
e_wave_f = $.cookie('e_wave_f');
e_wave_fi = $.cookie('e_wave_fi');
e_wave_s = $.cookie('e_wave_s');
e_wave_se = $.cookie('e_wave_se');
n_wave = $.cookie('n_wave');
n_wave_t = $.cookie('n_wave_t');
n_wave_th = $.cookie('n_wave_th');
n_wave_f = $.cookie('n_wave_f');
n_wave_fi = $.cookie('n_wave_fi');
n_wave_s = $.cookie('n_wave_s');
te_wave = $.cookie('te_wave');
te_wave_t = $.cookie('te_wave_t');
te_wave_th = $.cookie('te_wave_th');
te_wave_f = $.cookie('te_wave_f');
te_wave_fi = $.cookie('te_wave_fi');
te_wave_s = $.cookie('te_wave_s');
z_wave = $.cookie('z_wave');
exe_wave = $.cookie('exe_wave');

$('#AC_Name').html(UserName);

let Stars_Result = [o_wave, o_wave_t, o_wave_th, o_wave_f, o_wave_fi, o_wave_s, o_wave_se, t_wave, t_wave_t, t_wave_th, t_wave_f, t_wave_fi, th_wave, th_wave_t, th_wave_th, th_wave_f, th_wave_fi, f_wave, f_wave_t, f_wave_th, f_wave_f, fi_wave, fi_wave_t, fi_wave_th, fi_wave_f, fi_wave_fi, s_wave, s_wave_t, s_wave_th, se_wave, se_wave_t, se_wave_th, se_wave_f, se_wave_fi, se_wave_s, se_wave_se];
Master_Stars = Stars_Result.reduce(function(sum, element){
  return sum + element;
}, 0);
$.cookie('Master_Stars', Master_Stars, { expires: 400, domain:'figseu-technology.github.io'});
$('#Stars_1').html("<h3>集めた☆の数　　　　　　｜　　　　　☆ × " + Master_Stars + "</h3>");

if (e_wave >= 1) {
   Master_Stars_EX++;
}
if (e_wave_t >= 1) {
   Master_Stars_EX++;
}
if (e_wave_th >= 1) {
   Master_Stars_EX++;
}
if (e_wave_f >= 1) {
   Master_Stars_EX++;
}
if (e_wave_fi >= 1) {
   Master_Stars_EX++;
}
if (e_wave_s >= 1) {
   Master_Stars_EX++;
}
if (e_wave_se >= 1) {
   Master_Stars_EX++;
}
if (n_wave >= 1) {
   Master_Stars_EX++;
}
if (n_wave_t >= 1) {
   Master_Stars_EX++;
}
if (n_wave_th >= 1) {
   Master_Stars_EX++;
}
if (n_wave_f >= 1) {
   Master_Stars_EX++;
}
if (n_wave_fi >= 1) {
   Master_Stars_EX++;
}
if (n_wave_s >= 1) {
   Master_Stars_EX++;
}
if (te_wave >= 1) {
   Master_Stars_EX++;
}
if (te_wave_t >= 1) {
   Master_Stars_EX++;
}
if (te_wave_th >= 1) {
   Master_Stars_EX++;
}
if (te_wave_f >= 1) {
   Master_Stars_EX++;
}
if (te_wave_fi >= 1) {
   Master_Stars_EX++;
}
if (te_wave_s >= 1) {
   Master_Stars_EX++;
}
if (z_wave >= 1) {
   Master_Stars_EX++;
}
if (exe_wave >= 1) {
   Master_Stars_EX++;
}

$.cookie('Master_Stars_EX', Master_Stars_EX, { expires: 400, domain:'figseu-technology.github.io'});

Master_Comments = $.cookie('Master_Comments');
$('#C_Performances').html("　");

if (typeof Master_Stars == 'undefined') {
   Master_Stars = 0;
}
if (typeof Master_Stars_EX == 'undefined') {
   Master_Stars_EX = 0;
}
if (typeof Master_Delta == 'undefined') {
   Master_Delta = 0;
}
if (typeof Master_Delta_EX == 'undefined') {
   Master_Delta_EX = 0;
}
if (typeof Master_Performance == 'undefined') {
   Master_Performance = 0;
}
if (typeof Master_Comments == 'undefined') {
   Master_Comments = "コメントが設定されていません";
}

// Save Data

$.cookie('o_wave', o_wave, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('o_wave_t', o_wave_t, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('o_wave_th', o_wave_th, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('o_wave_f', o_wave_f, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('o_wave_fi', o_wave_fi, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('o_wave_s', o_wave_s, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('o_wave_se', o_wave_se, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('t_wave', t_wave, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('t_wave_t', t_wave_t, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('t_wave_th', t_wave_th, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('t_wave_f', t_wave_f, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('t_wave_fi', t_wave_fi, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('th_wave', th_wave, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('th_wave_t', th_wave_t, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('th_wave_th', th_wave_th, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('th_wave_f', th_wave_f, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('f_wave', f_wave, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('f_wave_t', f_wave_t, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('f_wave_th', f_wave_th, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('f_wave_f', f_wave_f, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('fi_wave', fi_wave, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('fi_wave_t', fi_wave_t, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('fi_wave_f', fi_wave_f, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('fi_wave_fi', fi_wave_fi, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('s_wave', s_wave, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('s_wave_t', s_wave_t, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('s_wave_th', s_wave_th, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('se_wave', se_wave, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('se_wave_t', se_wave_t, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('se_wave_th', se_wave_th, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('se_wave_f', se_wave_f, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('se_wave_fi', se_wave_fi, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('se_wave_s', se_wave_s, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('se_wave_se', se_wave_se, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('e_wave', e_wave, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('e_wave_t', e_wave_t, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('e_wave_th', e_wave_th, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('e_wave_f', e_wave_f, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('e_wave_fi', e_wave_fi, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('e_wave_s', e_wave_s, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('e_wave_se', e_wave_se, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('n_wave', n_wave, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('n_wave_t', n_wave_t, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('n_wave_th', n_wave_th, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('n_wave_f', n_wave_f, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('n_wave_fi', n_wave_fi, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('n_wave_s', n_wave_s, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('te_wave', te_wave, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('te_wave_t', te_wave_t, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('te_wave_th', te_wave_th, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('te_wave_f', te_wave_f, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('te_wave_fi', te_wave_fi, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('te_wave_s', te_wave_s, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('z_wave', z_wave, { expires: 400, domain:'figseu-technology.github.io'});
$.cookie('exe_wave', exe_wave, { expires: 400, domain:'figseu-technology.github.io'});

$('#Stars_8').html("<h3>集めた☆の数 (☆8以降) ｜　　　　 ☆ × " + Master_Stars_EX + "</h3>");
$('#Delta_1').html("<h3>集めたΔの数 　　　　　　｜　　　　 Δ × " + Master_Delta + "</h3>");
$('#Delta_30').html("<h3>集めたΔの数 (Δ36以降) ｜　　　　Δ × " + Master_Delta_EX + "</h3>");
$('#comment').html("<h3>" + Master_Comments + "</h3>");

return false;
}
