let te_wave_s = 0;
let alter = 0;
let gds = Math.floor( Math.random() * 2001);
te_wave_s = $.cookie('te_wave_s');
$('#c-power').html('立線エネルギー : ' + te_wave_s);

if (te_wave_s >= 1) {
   $('#mirror').html('<img src="https://m6.hentaiera.com/020/w90al63to2/' + gds + '.jpg"></img>');
   te_wave_s--
   $.cookie('te_wave_s', te_wave_s, { expires: 400, domain:'figseu-technology.github.io'});
   gds = gds * 6547;
   $('#c-power').html('終渡値 : ' + gds + 'LP');
}
