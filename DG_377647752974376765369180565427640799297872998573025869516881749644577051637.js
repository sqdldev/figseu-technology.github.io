let d_exa = 404;
let d_exb = 404;
let d_exc = 404;
let d_exd = 404;
let d_exe = 404;
let d_exf = 404;
let d_exg = 404;
let url = location.href;
let fgnc = url.substr( 142 );
let fgnci = decodeURI(fgnc);
let s_wave_th = 0;
let e_wave_th = 0;
let n_wave = 0;
let n_wave_t = 0;
let n_wave_th = 0;
let n_wave_f = 0;
let n_wave_fi = 0;
let n_wave_s = 0;
let te_wave = 0;
let te_wave_t = 0;
let te_wave_f = 0;
let te_wave_fi = 0;
let z_wave = 0;
s_wave_th = $.cookie('s_wave_th');
e_wave_th = $.cookie('e_wave_th');
n_wave = $.cookie('n_wave');
n_wave_t = $.cookie('n_wave_t');
n_wave_th = $.cookie('n_wave_th');
n_wave_f = $.cookie('n_wave_f');
n_wave_fi = $.cookie('n_wave_fi');
n_wave_s = $.cookie('n_wave_s');
te_wave = $.cookie('te_wave');
te_wave_t = $.cookie('te_wave_t');
te_wave_f = $.cookie('te_wave_f');
te_wave_fi = $.cookie('te_wave_fi');
z_wave = $.cookie('z_wave');
function BGM() {
   $('#DDDD').html('000000000');
   if (fgnci == 0 || fgnc == 382383) {
      $('#0').get(0).play();
      fgnc = 382383;
      fgnci = 0;
      if (z_wave >= 999) {
         d_exa = 382383;
         d_exb = 382383;
         d_exc = 382383;
         d_exd = 382383;
         d_exe = 382383;
         d_exf = 382383;
         d_exg = 382383;
      }
   } else if (fgnci == 'A' || fgnc == 997585893) {
      $('#A').get(0).play();
      fgnc = 997585893;
      fgnci = 'A';
      if (e_wave_th >= 999) {
         d_exa = 997585893;
         d_exb = 997585893;
         d_exc = 997585893;
         d_exd = 997585893;
         d_exe = 997585893;
         d_exf = 997585893;
         d_exg = 997585893;
      }
   } else if (fgnci == 'B' || fgnc == 382382438) {
      $('#B').get(0).play();
      fgnc = 382382438;
      fgnci = 'B';
      if (te_wave_f >= 999) {
         d_exa = 382382438;
         d_exb = 382382438;
         d_exc = 382382438;
         d_exd = 382382438;
         d_exe = 382382438;
         d_exf = 382382438;
         d_exg = 382382438;
      }
   } else if (fgnci == 'Ǝ' || fgnc == 6975588) {
      $('#Ǝ').get(0).play();
      fgnc = 6975588;
      fgnci = 'Ǝ';
      if (n_wave_th >= 999) {
         d_exa = 6975588;
         d_exb = 6975588;
         d_exc = 6975588;
         d_exd = 6975588;
         d_exe = 6975588;
         d_exf = 6975588;
         d_exg = 6975588;
      }
   } else if (fgnci == 'ʞ' || fgnc == 98149590) {
      $('#ʞ').get(0).play();
      fgnc = 98149590;
      fgnci = 'ʞ';
      if (n_wave_s >= 999) {
         d_exa = 98149590;
         d_exb = 98149590;
         d_exc = 98149590;
         d_exd = 98149590;
         d_exe = 98149590;
         d_exf = 98149590;
         d_exg = 98149590;
      }
   } else if (fgnci == 'Ƨ' || fgnc == 789979507) {
      $('#Ƨ').get(0).play();
      fgnc = 789979507;
      fgnci = 'Ƨ';
      if (n_wave_fi >= 999) {
         d_exa = 789979507;
         d_exb = 789979507;
         d_exc = 789979507;
         d_exd = 789979507;
         d_exe = 789979507;
         d_exf = 789979507;
         d_exg = 789979507;
      }
   } else if (fgnci == 'Г' || fgnc == 599580782) {
      $('#Г').get(0).play();
      fgnc = 599580782;
      fgnci = 'Г';
      if (n_wave_f >= 999) {
         d_exa = 599580782;
         d_exb = 599580782;
         d_exc = 599580782;
         d_exd = 599580782;
         d_exe = 599580782;
         d_exf = 599580782;
         d_exg = 599580782;
      }
   } else if (fgnci == 'И' || fgnc == 489679583) {
      $('#И').get(0).play();
      fgnc = 489679583;
      fgnci = 'И';
      if (n_wave_t >= 999) {
         d_exa = 489679583;
         d_exb = 489679583;
         d_exc = 489679583;
         d_exd = 489679583;
         d_exe = 489679583;
         d_exf = 489679583;
         d_exg = 489679583;
      }
   } else if (fgnci == 'Х' || fgnc == 383963833) {
      $('#Х').get(0).play();
      fgnc = 383963833;
      fgnci = 'Х';
      if (te_wave_fi >= 999) {
         d_exa = 383963833;
         d_exb = 383963833;
         d_exc = 383963833;
         d_exd = 383963833;
         d_exe = 383963833;
         d_exf = 383963833;
         d_exg = 383963833;
      }
   } else if (fgnci == 'Я' || fgnc == 383993833) {
      $('#Я').get(0).play();
      fgnc = 383993833;
      fgnci = 'Я';
      if (te_wave_t >= 999) {
         d_exa = 383993833;
         d_exb = 383993833;
         d_exc = 383993833;
         d_exd = 383993833;
         d_exe = 383993833;
         d_exf = 383993833;
         d_exg = 383993833;
      }
   } else if (fgnci == 'ᐴ' || fgnc == 382863813) {
      $('#ᐴ').get(0).play();
      fgnc = 382863813;
      fgnci = 'ᐴ';
      if (s_wave_th >= 999) {
         d_exa = 382863813;
         d_exb = 382863813;
         d_exc = 382863813;
         d_exd = 382863813;
         d_exe = 382863813;
         d_exf = 382863813;
         d_exg = 382863813;
         s_wave_th = 'ᐴ';
         $.cookie('s_wave_th', s_wave_th, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
      }
   } else if (fgnci == 'ᖷ' || fgnc == 621890381) {
      $('#ᖷ').get(0).play();
      fgnc = 621890381;
      fgnci = 'ᖷ';
      if (n_wave >= 999) {
         d_exa = 621890381;
         d_exb = 621890381;
         d_exc = 621890381;
         d_exd = 621890381;
         d_exe = 621890381;
         d_exf = 621890381;
         d_exg = 621890381;
         n_wave = 'ᖷ';
         $.cookie('n_wave', n_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
      }
   } else if (fgnci == 'ᙠ' || fgnc == 383383933) {
      $('#ᙠ').get(0).play();
      fgnc = 383383933;
      fgnci = 'ᙠ';
      if (te_wave >= 999) {
         d_exa = 383383933;
         d_exb = 383383933;
         d_exc = 383383933;
         d_exd = 383383933;
         d_exe = 383383933;
         d_exf = 383383933;
         d_exg = 383383933;
         te_wave = 'ᙠ';
         $.cookie('te_wave', te_wave, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
      }
   } else {
      $('#bgm').get(0).play();
   }
   setTimeout(function(){
      $('#DDDD').html(fgnci);
   },10);
}
function DGD() {
   if (d_exa == fgnc) {
      d_exa = fgnc;
      $('#exi').html('<font color="#00F266">' + d_exa + '</font>');
   } else {
      d_exa = Math.round( Math.random()* 999999999 );
      $('#exi').html(d_exa);
   }
   if (d_exb == fgnc) {
      d_exb = fgnc;
      $('#exs').html('<font color="#00F266">' + d_exb + '</font>');
   } else {
      d_exb = Math.round( Math.random()* 999999999 );
      $('#exs').html(d_exb);
   }
   if (d_exc == fgnc) {
      d_exc = fgnc;
      $('#ext').html('<font color="#00F266">' + d_exc + '</font>');
   } else {
      d_exc = Math.round( Math.random()* 999999999 );
      $('#ext').html(d_exc);
   }
   if (d_exd == fgnc) {
      d_exd = fgnc;
      $('#exu').html('<font color="#00F266">' + d_exd + '</font>');
   } else {
      d_exd = Math.round( Math.random()* 999999999 );
      $('#exu').html(d_exd);
   }
   if (d_exe == fgnc) {
      d_exe = fgnc;
      $('#exv').html('<font color="#00F266">' + d_exe + '</font>');
   } else {
      d_exe = Math.round( Math.random()* 999999999 );
      $('#exv').html(d_exe);
   }
   if (d_exf == fgnc) {
      d_exf = fgnc;
      $('#exw').html('<font color="#00F266">' + d_exf + '</font>');
   } else {
      d_exf = Math.round( Math.random()* 999999999 );
      $('#exw').html(d_exf);
   }
   if (d_exg == fgnc) {
      d_exg = fgnc;
      $('#exx').html('<font color="#00F266">' + d_exg + '</font>');
   } else {
      d_exg = Math.round( Math.random()* 999999999 );
      $('#exx').html(d_exg);
   }
}
setInterval("DGD()",10);
