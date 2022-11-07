let f_wave = 0;
let alter = 0;
let gds = Math.floor( Math.random() * 2001);
f_wave = $.cookie('f_wave');
$('#c-power').html('立線エネルギー : ' + f_wave);

if (f_wave >= 1) {
   $('#mirror').html('<img src="https://m6.hentaiera.com/020/w90al63to2/' + gds + '.jpg"></img>');
   //f_wave--
   $.cookie('f_wave', f_wave, { expires: 400, domain:'figseu-technology.github.io'});
   $('#c-power').html('終渡値 : ' + gds + 'LP');
}
