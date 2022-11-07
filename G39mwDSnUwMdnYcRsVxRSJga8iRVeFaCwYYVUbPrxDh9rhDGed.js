let f_wave = 0;
let alter = 0;
let gds = Math.floor( Math.random() * 36901 ) + 213000;
f_wave = $.cookie('f_wave');
$('#c-power').html('立線エネルギー : ' + f_wave);

if (f_wave >= 1) {
   $('#mirror').html('<img src="http://www.hentairider.com/media/images/4/top-hentai-anime/top-hentai-anime-' + gds + '.jpg"></img>');
   //f_wave--
   $.cookie('f_wave', f_wave, { expires: 400, domain:'figseu-technology.github.io'});
   $('#c-power').html('終渡値 : ' + gds + 'LP');
}
