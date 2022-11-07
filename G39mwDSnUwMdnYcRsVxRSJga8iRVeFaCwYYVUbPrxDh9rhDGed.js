let f_wave = 0;
let alter = 0;
let gds = Math.floor( Math.random() * (0-6) );
let anc = Math.floor( Math.random() * (0-100) );
gds * 1;
anc * 1;
f_wave = $.cookie('f_wave');
$('#c-power').html('立線エネルギー : ' + f_wave);

if (gds == 1) {
   alter = "/20210109/686/702110/";
} else if (gds == 2) {
   alter = "/20210116/687/703115/";
} else if (gds == 3) {
   alter = "/20210114/687/702785/";
} else if (gds == 4) {
   alter = "/20201223/683/698764/";
} else if (gds == 5) {
   alter = "/20210221/692/708398/";
} else {
   alter = "/20210222/692/708590/";
}

if (f_wave >= 1) {
   $('#mirror').html('<img src="https://static11.hentai-img.com/upload' + alter + anc + '.png"></img>');
   //f_wave--
   $.cookie('f_wave', f_wave, { expires: 400, domain:'figseu-technology.github.io'});
   anc * 94538;
   $('#c-power').html('終渡値 : ' + anc + 'LP');
}
