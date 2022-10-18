let n_wave_s = 0;
let Pfd_100 = 0;
let Pfd_101 = 0;
let Pfd_102 = 0;
let Pfd_103 = 0;
let Pfd_104 = 0;
let Pfd_105 = 0;
let Pfd_106 = 0;
let Pfd_107 = 0;
let Pfd_108 = 0;
let Pfd_109 = 0;
let Pfd_110 = 0;
let gds = Math.floor( Math.random() * (10000-99999)+99999 );
n_wave_s = $.cookie('n_wave_s');
$('#c-power').html('立線エネルギー : ' + n_wave_s);
if (n_wave_s >= 1) {
   $('#mirror').html('<img src="https://thisanimedoesnotexist.ai/results/psi-1.0/seed' + gds + '.png"></img>');
   n_wave_s--
   Pfd_100 = 999;
   $.cookie('n_wave_s', n_wave_s, { expires: 400, domain:'figseu-technology.github.io'});
   $.cookie('Pfd_100', Pfd_100, { expires: 400, domain:'figseu-technology.github.io'});
   if (gds == 99057) {
      Pfd_101 = 999;
      $.cookie('Pfd_101', Pfd_101, { expires: 400, domain:'figseu-technology.github.io'});
   } else if (gds == 50157) {
      Pfd_102 = 999;
      $.cookie('Pfd_102', Pfd_102, { expires: 400, domain:'figseu-technology.github.io'});
   } else if (gds == 53241) {
      Pfd_103 = 999;
      $.cookie('Pfd_103', Pfd_103, { expires: 400, domain:'figseu-technology.github.io'});
   } else if (gds == 70432) {
      Pfd_104 = 999;
      $.cookie('Pfd_104', Pfd_104, { expires: 400, domain:'figseu-technology.github.io'});
   } else if (gds == 82616) {
      Pfd_105 = 999;
      $.cookie('Pfd_105', Pfd_105, { expires: 400, domain:'figseu-technology.github.io'});
   } else if (gds == 47314) {
      Pfd_106 = 999;
      $.cookie('Pfd_106', Pfd_106, { expires: 400, domain:'figseu-technology.github.io'});
   } else if (gds == 69751) {
      Pfd_107 = 999;
      $.cookie('Pfd_107', Pfd_107, { expires: 400, domain:'figseu-technology.github.io'});
   } else if (gds == 69861) {
      Pfd_108 = 999;
      $.cookie('Pfd_108', Pfd_108, { expires: 400, domain:'figseu-technology.github.io'});
   } else if (gds == 13621) {
      Pfd_109 = 999;
      $.cookie('Pfd_109', Pfd_109, { expires: 400, domain:'figseu-technology.github.io'});
   }
}
