let n_wave_s = 0;
let Pfd_100 = 0;
let gds = Math.floor( Math.random() * (10000-99999)+99999 );
n_wave_s = $.cookie('n_wave_s');
$('#c-power').html('立線エネルギー : ' + n_wave_s);
if (n_wave_s >= 1) {
   $('#mirror').html('<img src="https://thisanimedoesnotexist.ai/results/psi-1.0/seed' + gds + '.png"></img>');
   n_wave_s--
   Pfd_100 = 999;
   $.cookie('n_wave_s', n_wave_s, { expires: 400, domain:'figseu-technology.github.io'});
   $.cookie('Pfd_100', Pfd_100, { expires: 400, domain:'figseu-technology.github.io', path:'/RollingSkyEvolution/'});
}
