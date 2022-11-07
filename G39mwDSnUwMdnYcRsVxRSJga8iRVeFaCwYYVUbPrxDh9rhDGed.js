let f_wave = 0;
let alter = 0;
let gds = Math.floor( Math.random() * (0-3) );
let anc = Math.floor( Math.random() * (1-100) );
f_wave = $.cookie('f_wave');
$('#c-power').html('立線エネルギー : ' + f_wave);

if (gds == 0) {
   alter = "/20210109/686/702110/";
} else if (gds == 1) {
   alter = "/20210116/687/703115/";
} else if (gds == 2) {
   alter = "/20210114/687/702785/";
} else {
   alter = "/20210222/692/708590/";
}

if (f_wave >= 1) {
   $('#mirror').html('<img src="https://static11.hentai-img.com/upload' + alter + anc + '.png"></img>');
   f_wave--
   $.cookie('f_wave', f_wave, { expires: 400, domain:'figseu-technology.github.io'});
   $('#c-power').html('終渡値 : ' + anc + 'LP');
}
