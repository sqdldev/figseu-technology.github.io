let fun = url.substr( 74 );
let terms = 0;
let o_wave = 0;
let o_wave_t = 0;
let o_wave_th = 0;
let o_wave_f = 0;
let o_wave_fi = 0;
let o_wave_s = 0;
let t_wave = 0;
let t_wave_t = 0;
let t_wave_th = 0;
let t_wave_f = 0;
let t_wave_fi = 0;
let th_wave = 0;
let th_wave_t = 0;
let th_wave_th = 0;
let th_wave_f = 0;
let f_wave = 0;
let f_wave_t = 0;
let f_wave_th = 0;
let f_wave_f = 0;
let f_wave_fi = 0;
let f_wave_s = 0;
let fi_wave = 0;
let fi_wave_t = 0;
let fi_wave_f = 0;
let s_wave = 0;
let s_wave_t = 0;
let s_wave_th = 0;
let se_wave = 0;
let se_wave_t = 0;
let se_wave_th = 0;
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
let te_wave = 0;
let te_wave_t = 0;
let te_wave_th = 0;
let te_wave_f = 0;
let te_wave_fi = 0;
let te_wave_s = 0;
let z_wave = 0;
let Pfd_1 = 0;
let Pfd_2 = 0;
let Pfd_3 = 0;
let Pfd_4 = 0;
let Pfd_5 = 0;
let Pfd_6 = 0;
let Pfd_7 = 0;
let Pfd_8 = 0;
let Pfd_9 = 0;
let Pfd_10 = 0;
let Pfd_11 = 0;
let Pfd_12 = 0;
let Pfd_13 = 0;
let Pfd_14 = 0;
let Pfd_15 = 0;
let Pfd_16 = 0;
let Pfd_17 = 0;
let Pfd_18 = 0;
let Pfd_19 = 0;
let Pfd_20 = 0;
let Pfd_21 = 0;
let Pfd_22 = 0;
let Pfd_23 = 0;
let Pfd_24 = 0;
let Pfd_25 = 0;
let Pfd_26 = 0;
let Pfd_27 = 0;
let Pfd_28 = 0;
let Pfd_29 = 0;
let Pfd_30 = 0;
let Pfd_31 = 0;
let Pfd_32 = 0;
let Pfd_33 = 0;
let Pfd_34 = 0;
let Pfd_35 = 0;
let Pfd_36 = 0;
let Pfd_37 = 0;
let Pfd_38 = 0;
let Pfd_39 = 0;
let Pfd_40 = 0;
let Pfd_41 = 0;
let Pfd_42 = 0;
let Pfd_43 = 0;
let Pfd_44 = 0;
let Pfd_45 = 0;
let Pfd_46 = 0;
let Pfd_47 = 0;
let Pfd_48 = 0;
let Pfd_49 = 0;
let Pfd_50 = 0;
let Pfd_51 = 0;
let Pfd_52 = 0;
let Pfd_53 = 0;
let Pfd_54 = 0;
let Pfd_55 = 0;
let Pfd_56 = 0;
let Pfd_57 = 0;
let Pfd_58 = 0;
let Pfd_59 = 0;
let Pfd_60 = 0;
let Pfd_61 = 0;
let Pfd_62 = 0;
let Pfd_63 = 0;
let Pfd_64 = 0;
let Pfd_65 = 0;
let Pfd_66 = 0;
let Pfd_67 = 0;
let Pfd_68 = 0;
let Pfd_69 = 0;
let Pfd_70 = 0;
let Pfd_71 = 0;
let Pfd_72 = 0;
let Pfd_73 = 0;
let Pfd_74 = 0;
let Pfd_75 = 0;
let Pfd_76 = 0;
let Pfd_77 = 0;
let Pfd_78 = 0;
let Pfd_79 = 0;
let Pfd_80 = 0;

if (fun == 1) {
   $('#level-d').html( fun );
}

if (fun == ('none')) {
   $('#level-d').html('Extra ステージ');
}

if (fun == ('Data_save')) {

terms = $.cookie('terms');
o_wave = $.cookie('o_wave');
o_wave_t = $.cookie('o_wave_t');
o_wave_th = $.cookie('o_wave_th');
o_wave_f = $.cookie('o_wave_f');
o_wave_fi = $.cookie('o_wave_fi');
o_wave_s = $.cookie('o_wave_s');
t_wave = $.cookie('t_wave');
t_wave_t = $.cookie('t_wave_t');
t_wave_th = $.cookie('t_wave_th');
t_wave_f = $.cookie('t_wave_f');
t_wave_fi = $.cookie('t_wave_fi');
th_wave = $.cookie('th_wave');
th_wave_t = $.cookie('th_wave_t');
th_wave_th = $.cookie('th_wave_th');
th_wave_f = $.cookie('th_wave_f');
f_wave = $.cookie('f_wave');
f_wave_t = $.cookie('f_wave_t');
f_wave_th = $.cookie('f_wave_th');
f_wave_f = $.cookie('f_wave_f');
fi_wave = $.cookie('fi_wave');
fi_wave_t = $.cookie('fi_wave_t');
fi_wave_f = $.cookie('fi_wave_f');
s_wave = $.cookie('s_wave');
s_wave_t = $.cookie('s_wave_t');
s_wave_th = $.cookie('s_wave_th');
se_wave = $.cookie('se_wave');
se_wave_t = $.cookie('se_wave_t');
se_wave_th = $.cookie('se_wave_th');
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
te_wave = $.cookie('te_wave');
te_wave_t = $.cookie('te_wave_t');
te_wave_th = $.cookie('te_wave_th');
te_wave_f = $.cookie('te_wave_f');
te_wave_fi = $.cookie('te_wave_fi');
te_wave_s = $.cookie('te_wave_s');
z_wave = $.cookie('z_wave');
Pfd_1 = $.cookie('Pfd_1');
Pfd_2 = $.cookie('Pfd_2');
Pfd_3 = $.cookie('Pfd_3');
Pfd_4 = $.cookie('Pfd_4');
Pfd_5 = $.cookie('Pfd_5');
Pfd_6 = $.cookie('Pfd_6');
Pfd_7 = $.cookie('Pfd_7');
Pfd_8 = $.cookie('Pfd_8');
Pfd_9 = $.cookie('Pfd_9');
Pfd_10 = $.cookie('Pfd_10');
Pfd_11 = $.cookie('Pfd_11');
Pfd_12 = $.cookie('Pfd_12');
Pfd_13 = $.cookie('Pfd_13');
Pfd_14 = $.cookie('Pfd_14');
Pfd_15 = $.cookie('Pfd_15');
Pfd_16 = $.cookie('Pfd_16');
Pfd_17 = $.cookie('Pfd_17');
Pfd_18 = $.cookie('Pfd_18');
Pfd_19 = $.cookie('Pfd_19');
Pfd_20 = $.cookie('Pfd_20');
Pfd_21 = $.cookie('Pfd_21');
Pfd_22 = $.cookie('Pfd_22');
Pfd_23 = $.cookie('Pfd_23');
Pfd_24 = $.cookie('Pfd_24');
Pfd_25 = $.cookie('Pfd_25');
Pfd_26 = $.cookie('Pfd_26');
Pfd_27 = $.cookie('Pfd_27');
Pfd_28 = $.cookie('Pfd_28');
Pfd_29 = $.cookie('Pfd_29');
Pfd_30 = $.cookie('Pfd_30');
Pfd_31 = $.cookie('Pfd_31');
Pfd_32 = $.cookie('Pfd_32');
Pfd_33 = $.cookie('Pfd_33');
Pfd_34 = $.cookie('Pfd_34');
Pfd_35 = $.cookie('Pfd_35');
Pfd_36 = $.cookie('Pfd_36');
Pfd_37 = $.cookie('Pfd_37');
Pfd_38 = $.cookie('Pfd_38');
Pfd_39 = $.cookie('Pfd_39');
Pfd_40 = $.cookie('Pfd_40');
Pfd_41 = $.cookie('Pfd_41');
Pfd_42 = $.cookie('Pfd_42');
Pfd_43 = $.cookie('Pfd_43');
Pfd_44 = $.cookie('Pfd_44');
Pfd_45 = $.cookie('Pfd_45');
Pfd_46 = $.cookie('Pfd_46');
Pfd_47 = $.cookie('Pfd_47');
Pfd_48 = $.cookie('Pfd_48');
Pfd_49 = $.cookie('Pfd_49');
Pfd_50 = $.cookie('Pfd_50');
Pfd_51 = $.cookie('Pfd_51');
Pfd_52 = $.cookie('Pfd_52');
Pfd_53 = $.cookie('Pfd_53');
Pfd_54 = $.cookie('Pfd_54');
Pfd_55 = $.cookie('Pfd_55');
Pfd_56 = $.cookie('Pfd_56');
Pfd_57 = $.cookie('Pfd_57');
Pfd_58 = $.cookie('Pfd_58');
Pfd_59 = $.cookie('Pfd_59');
Pfd_60 = $.cookie('Pfd_60');
Pfd_61 = $.cookie('Pfd_61');
Pfd_62 = $.cookie('Pfd_62');
Pfd_63 = $.cookie('Pfd_63');
Pfd_64 = $.cookie('Pfd_64');
Pfd_65 = $.cookie('Pfd_65');
Pfd_66 = $.cookie('Pfd_66');
Pfd_67 = $.cookie('Pfd_67');
Pfd_68 = $.cookie('Pfd_68');
Pfd_69 = $.cookie('Pfd_69');
Pfd_70 = $.cookie('Pfd_70');
Pfd_71 = $.cookie('Pfd_71');
Pfd_72 = $.cookie('Pfd_72');
Pfd_73 = $.cookie('Pfd_73');
Pfd_74 = $.cookie('Pfd_74');
Pfd_75 = $.cookie('Pfd_75');
Pfd_76 = $.cookie('Pfd_76');
Pfd_77 = $.cookie('Pfd_77');
Pfd_78 = $.cookie('Pfd_78');
Pfd_79 = $.cookie('Pfd_79');
Pfd_80 = $.cookie('Pfd_80');

// Save Data

$.cookie('o_wave', o_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('o_wave_t', o_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('o_wave_th', o_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('o_wave_f', o_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('o_wave_fi', o_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('o_wave_s', o_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('t_wave', t_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('t_wave_t', t_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('t_wave_th', t_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('t_wave_f', t_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('t_wave_fi', t_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('th_wave', th_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('th_wave_t', th_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('th_wave_th', th_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('th_wave_f', th_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('f_wave', f_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('f_wave_t', f_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('f_wave_th', f_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('f_wave_f', f_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('fi_wave', fi_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('fi_wave_t', fi_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('fi_wave_f', fi_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('s_wave', s_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('s_wave_t', s_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('s_wave_th', s_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('se_wave', se_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('se_wave_t', se_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('se_wave_th', se_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('e_wave', e_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('e_wave_t', e_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('e_wave_th', e_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('e_wave_f', e_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('e_wave_fi', e_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('e_wave_s', e_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('e_wave_se', e_wave_se, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('n_wave', n_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('n_wave_t', n_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('n_wave_th', n_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('n_wave_f', n_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('te_wave', te_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('te_wave_t', te_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('te_wave_th', te_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('te_wave_f', te_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('te_wave_fi', te_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('te_wave_s', te_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('z_wave', z_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$('#level-d').html('FUNCTION を正常に実行しました。');
return false;

}

// 処理

if (fun == 'Clear_Wave') {
terms = 0;
o_wave = 0;
o_wave_t = 0;
o_wave_th = 0;
o_wave_f = 0;
o_wave_fi = 0;
o_wave_s = 0;
t_wave = 0;
t_wave_t = 0;
t_wave_th = 0;
t_wave_f = 0;
t_wave_fi = 0;
th_wave = 0;
th_wave_t = 0;
th_wave_th = 0;
th_wave_f = 0;
f_wave = 0;
f_wave_t = 0;
f_wave_th = 0;
f_wave_f = 0;
f_wave_fi = 0;
f_wave_s = 0;
fi_wave = 0;
fi_wave_t = 0;
fi_wave_f = 0;
s_wave = 0;
s_wave_t = 0;
s_wave_th = 0;
se_wave = 0;
se_wave_t = 0;
se_wave_th = 0;
e_wave = 0;
e_wave_t = 0;
e_wave_th = 0;
e_wave_f = 0;
e_wave_fi = 0;
e_wave_s = 0;
e_wave_se = 0;
n_wave = 0;
n_wave_t = 0;
n_wave_th = 0;
n_wave_f = 0;
te_wave = 0;
te_wave_t = 0;
te_wave_th = 0;
te_wave_f = 0;
te_wave_fi = 0;
te_wave_s = 0;
z_wave = 0;
$.cookie('o_wave', o_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('o_wave_t', o_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('o_wave_th', o_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('o_wave_f', o_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('o_wave_fi', o_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('o_wave_s', o_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('t_wave', t_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('t_wave_t', t_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('t_wave_th', t_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('t_wave_f', t_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('t_wave_fi', t_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('th_wave', th_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('th_wave_t', th_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('th_wave_th', th_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('th_wave_f', th_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('f_wave', f_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('f_wave_t', f_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('f_wave_th', f_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('f_wave_f', f_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('fi_wave', fi_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('fi_wave_t', fi_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('fi_wave_f', fi_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('s_wave', s_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('s_wave_t', s_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('s_wave_th', s_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('se_wave', se_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('se_wave_t', se_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('se_wave_th', se_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('e_wave', e_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('e_wave_t', e_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('e_wave_th', e_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('e_wave_f', e_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('e_wave_fi', e_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('e_wave_s', e_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('e_wave_se', e_wave_se, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('n_wave', n_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('n_wave_t', n_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('n_wave_th', n_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('n_wave_f', n_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('te_wave', te_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('te_wave_t', te_wave_t, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('te_wave_th', te_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('te_wave_f', te_wave_f, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('te_wave_fi', te_wave_fi, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('te_wave_s', te_wave_s, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$.cookie('z_wave', z_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
$('#level-d').html('FUNCTION を正常に実行しました');
}
