let f_wave = 0;
let se_wave_fi = 0;
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
f_wave = $.cookie('f_wave');
se_wave_fi = $.cookie('se_wave_fi');
$('#c-power').html('立線エネルギー : ' + f_wave);
if (f_wave >= 1 || se_wave_fi >= 5) {
   $('#mirror').html('<img src="https://thisanimedoesnotexist.ai/results/psi-1.0/seed' + gds + '.png"></img>');
   f_wave--
   Pfd_100 = 999;
   $.cookie('f_wave', f_wave, { expires: 400, domain:'figseu-technology.github.io'});
   $.cookie('Pfd_100', Pfd_100, { expires: 400, domain:'figseu-technology.github.io'});
   $('#c-power').html('侵食値 : ' + gds + 'LP');
   if (gds == 99057) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/zero.jpg"></img>');
      Pfd_101 = 999;
      $.cookie('Pfd_101', Pfd_101, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : ERROR LP -【新たな実績を解除しました。】');
   } else if (gds == 50157) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/e382aae383abe38395e382a3e38389e383bce383ab.jpg"></img>');
      Pfd_102 = 999;
      $.cookie('Pfd_102', Pfd_102, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : 7809LP -【新たな実績を解除しました。】');
   } else if (gds == 53241) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/e6b0b7e381aee5a696e7b2be53241.jpg"></img>');
      Pfd_103 = 999;
      $.cookie('Pfd_103', Pfd_103, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : ' + gds + 'LP -【新たな実績を解除しました。】');
   } else if (gds == 70432) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/mt_6gtczolwfhc4wnk16wztppi7k.jpg"></img>');
      Pfd_104 = 999;
      $.cookie('Pfd_104', Pfd_104, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : ' + gds + 'LP -【新たな実績を解除しました。】');
   } else if (gds == 10254) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/e6b1bae688a6e381aee5a696e7b2be10254.jpg"></img>');
      Pfd_105 = 999;
      $.cookie('Pfd_105', Pfd_105, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : ' + gds + 'LP -【新たな実績を解除しました。】');
   } else if (gds == 47314) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/e8999ae695b0e381aee5a696e7b2be47314.jpg"></img>');
      Pfd_106 = 999;
      $.cookie('Pfd_106', Pfd_106, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : ' + gds + 'LP -【新たな実績を解除しました。】');
   } else if (gds == 69751) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/e5b1b1e7a59e28e88ab1e381aee5a696e7b2be2969861.jpg"></img>');
      Pfd_107 = 999;
      $.cookie('Pfd_107', Pfd_107, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : ' + gds + 'LP -【新たな実績を解除しました。】');
   } else if (gds == 69861) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/e382bbe383abe38387e382a3e3838be382a2.jpg"></img>');
      Pfd_108 = 999;
      $.cookie('Pfd_108', Pfd_108, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : 311LP -【新たな実績を解除しました。】');
   } else if (gds == 13621) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/e6849be381aee5a696e7b2be13621.jpg"></img>');
      Pfd_109 = 999;
      $.cookie('Pfd_109', Pfd_109, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : ' + gds + 'LP -【新たな実績を解除しました。】');
   } else if (gds == 38363) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/greenfairy.jpg"></img>');
      Pfd_110 = 999;
      $.cookie('Pfd_110', Pfd_110, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : ' + gds + 'LP -【新たな実績を解除しました。】');
   }
}
