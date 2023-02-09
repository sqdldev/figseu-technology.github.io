let url = location.href;
let fgnc = url.substr( 51 );
let f_wave = 0;
let se_wave_fi = 0;
let lock_key_1 = 0;
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
let Pfd_111 = 0;
let Pfd_112 = 0;
let Pfd_113 = 0;
let Pfd_114 = 0;
let Pfd_115 = 0;
let Pfd_116 = 0;
let Pfd_117 = 0;
let Pfd_118 = 0;
let Pfd_119 = 0;
let Pfd_120 = 0;
let Pfd_121 = 0;
let Pfd_122 = 0;
let Pfd_123 = 0;
let Pfd_124 = 0;
let Item_1 = 0;
let Item_2 = 0;
let Item_3 = 0;
let Item_4 = 0;
let Item_5 = 0;
let Item_6 = 0;
let Item_7 = 0;
let Item_8 = 0;

let gds = Math.floor( Math.random() * (10000-99999)+99999 );
f_wave = $.cookie('f_wave');
Item_1 = $.cookie('Item_1');
lock_key_1 = $.cookie('lock_key_1');
if (typeof f_wave == 'undefined') {
        f_wave = 0;
        $.cookie('f_wave', f_wave, { expires: 30, domain:'figseu-technology.github.io'});
}
if (typeof Item_1 == 'undefined') {
        Item_1 = 0;
        $.cookie('Item_1', Item_1, { expires: 30, domain:'figseu-technology.github.io'});
}
if (typeof lock_key_1 == 'undefined') {
        lock_key_1 = 0;
        $.cookie('lock_key_1', lock_key_1, { expires: 1, domain:'figseu-technology.github.io'});
}
se_wave_fi = $.cookie('se_wave_fi');

if (f_wave >= 1) {
Item_1 = Item_1 + f_wave;
f_wave = 0;
$.cookie('f_wave', f_wave, { expires: 400, domain:'figseu-technology.github.io'});
}

if (se_wave_fi >= 5) {
   $('#b-power').html('空虚の鍵 : 解放済');
}

if (fgnc == 'AdsReload') {
   f_wave = 1;
   $.cookie('f_wave', f_wave, { expires: 400, domain:'figseu-technology.github.io'});
   location.href = "https://figseu-technology.github.io/DGDR.html";
}

$('#c-power').html('立線エネルギー : ' + Item_1);
if (Item_1 >= 1 || se_wave_fi >= 5) {
   $('#mirror').html('<img src="https://thisanimedoesnotexist.ai/results/psi-1.0/seed' + gds + '.png"></img>');
   Item_1--
   Pfd_100 = 999;
   $.cookie('Item_1', Item_1, { expires: 400, domain:'figseu-technology.github.io'});
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
   } else if (gds == 97040) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/e591bde381aee5a696e7b2be97040.jpg"></img>');
      Pfd_111 = 999;
      $.cookie('Pfd_111', Pfd_111, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : ' + gds + 'LP -【新たな実績を解除しました。】');
   } else if (gds == 55831) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/e5bb83e5a29fe381aee5a696e7b2be55831.jpg"></img>');
      Pfd_112 = 999;
      $.cookie('Pfd_112', Pfd_112, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : ' + gds + 'LP -【新たな実績を解除しました。】');
   } else if (gds == 28796) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/e5b9bbe8a69ae381aee5a696e7b2be28796.jpg"></img>');
      Pfd_113 = 999;
      $.cookie('Pfd_113', Pfd_113, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : ' + gds + 'LP -【新たな実績を解除しました。】');
   } else if (gds == 58541) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/e69d9fe7b89be381aee5a696e7b2be58541.jpg"></img>');
      Pfd_114 = 999;
      $.cookie('Pfd_114', Pfd_114, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : ' + gds + 'LP -【新たな実績を解除しました。】');
   } else if (gds == 63528) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/wp-1670242413716.jpg"></img>');
      Pfd_115 = 999;
      $.cookie('Pfd_115', Pfd_115, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : ' + gds + 'LP -【新たな実績を解除しました。】');
   } else if (gds == 44100) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/wp-1670242413729.jpg"></img>');
      Pfd_116 = 999;
      $.cookie('Pfd_116', Pfd_116, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : ' + gds + 'LP -【新たな実績を解除しました。】');
   } else if (gds == 55555) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/wp-1670242413704.jpg"></img>');
      Pfd_117 = 999;
      $.cookie('Pfd_117', Pfd_117, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : √-1LP -【新たな実績を解除しました。】');
   } else if (gds == 93953) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/wp-1670242413688.jpg"></img>');
      Pfd_118 = 999;
      $.cookie('Pfd_118', Pfd_118, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : -95LP -【新たな実績を解除しました。】');
   } else if (gds == 34105) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/wp-1670242413670.jpg"></img>');
      Pfd_119 = 999;
      $.cookie('Pfd_119', Pfd_119, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : ' + gds + 'LP -【新たな実績を解除しました。】');
   } else if (gds == 85361) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/wp-1670242413742.jpg"></img>');
      Pfd_120 = 999;
      $.cookie('Pfd_120', Pfd_120, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : ' + gds + 'LP -【新たな実績を解除しました。】');
   } else if (gds == 73733) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/wp-1670242413769.jpg"></img>');
      Pfd_121 = 999;
      $.cookie('Pfd_121', Pfd_121, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : ' + gds + 'LP -【新たな実績を解除しました。】');
   } else if (gds == 54205) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/wp-1670242413756.jpg"></img>');
      Pfd_122 = 999;
      $.cookie('Pfd_122', Pfd_122, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : ' + gds + 'LP -【新たな実績を解除しました。】');
   } else if (gds == 52604) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/e382aae383abe38395e382a3e382b9.jpg"></img>');
      Pfd_124 = 999;
      $.cookie('Pfd_124', Pfd_124, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : 1217LP -【新たな実績を解除しました。】');
   } else if (gds == 52759) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/mt_1p84yq5we3u389pdvyoltiihh.jpg"></img>');
      Pfd_123 = 999;
      $.cookie('Pfd_123', Pfd_123, { expires: 400, domain:'figseu-technology.github.io'});
      $('#c-power').html('侵食値 : -59LP -【新たな実績を解除しました。】');
   } else if (gds == 77365) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde77365.jpg"></img>');
      $('#c-power').html('侵食値 : 65LP -【レア生成 S (©SEON Processor)】');
   } else if (gds == 99736) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde99736.jpg"></img>');
      $('#c-power').html('侵食値 : 9736LP -【レア生成 A (©SEON Processor)】');
   } else if (gds == 81982) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde81982.jpg"></img>');
      $('#c-power').html('侵食値 : 982LP -【レア生成 S (©SEON Processor)】');
   } else if (gds == 18372) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde18372.jpg"></img>');
      $('#c-power').html('侵食値 : 72LP -【レア生成 S (©SEON Processor)】');
   } else if (gds == 13722) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde18372x.jpg"></img>');
      $('#c-power').html('終土値 : -32LP -【レア生成 X (©SEON Processor)】');
   } else if (gds == 43808) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde43808.jpg"></img>');
      $('#c-power').html('侵食値 : 808LP -【レア生成 A (©SEON Processor)】');
   } else if (gds == 78941) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde78941.jpg"></img>');
      $('#c-power').html('侵食値 : 8941LP -【レア生成 A (©SEON Processor)】');
   } else if (gds == 36356) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde36356.jpg"></img>');
      $('#c-power').html('侵食値 : 356LP -【レア生成 S (©SEON Processor)】');
   } else if (gds == 98300) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde98300.jpg"></img>');
      $('#c-power').html('侵食値 : 3LP -【レア生成 SS (©SEON Processor)】');
   } else if (gds == 84539) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde84539.jpg"></img>');
      $('#c-power').html('侵食値 : 4539LP -【レア生成 C (©SEON Processor)】');
   } else if (gds == 50119) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde50119.jpg"></img>');
      $('#c-power').html('侵食値 : 119LP -【レア生成 B (©SEON Processor)】');
   } else if (gds == 67806) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde67806.jpg"></img>');
      $('#c-power').html('侵食値 : 6LP -【レア生成 SS (©SEON Processor)】');
   } else if (gds == 97129) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde97129.jpg"></img>');
      $('#c-power').html('侵食値 : 729LP -【レア生成 A (©SEON Processor)】');
   } else if (gds == 85647) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde85647.jpg"></img>');
      $('#c-power').html('侵食値 : 5647LP -【レア生成 A (©SEON Processor)】');
   } else if (gds == 61785) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde61785.jpg"></img>');
      $('#c-power').html('侵食値 : 9785LP -【レア生成 B (©SEON Processor)】');
   } else if (gds == 30455) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde30455.jpg"></img>');
      $('#c-power').html('侵食値 : 9455LP -【レア生成 B (©SEON Processor)】');
   } else if (gds == 18655) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde18655.jpg"></img>');
      $('#c-power').html('侵食値 : 8655LP -【レア生成 A (©SEON Processor)】');
   } else if (gds == 73469) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde73469.jpg"></img>');
      $('#c-power').html('侵食値 : 3469LP -【レア生成 A (©SEON Processor)】');
   } else if (gds == 48532) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde48532.jpg"></img>');
      $('#c-power').html('侵食値 : 32LP -【レア生成 S (©SEON Processor)】');
   } else if (gds == 56856) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde56856.jpg"></img>');
      $('#c-power').html('侵食値 : 856LP -【レア生成 S (©SEON Processor)】');
   } else if (gds == 35455) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde35455.jpg"></img>');
      $('#c-power').html('侵食値 : 5LP -【レア生成 SS (©SEON Processor)】');
   } else if (gds == 51752) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde51752.jpg"></img>');
      $('#c-power').html('侵食値 : 1752LP -【レア生成 A (©SEON Processor)】');
   } else if (gds == 15300) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde15300.jpg"></img>');
      $('#c-power').html('侵食値 : 300LP -【レア生成 S (©SEON Processor)】');
   } else if (gds == 84191) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde84191.jpg"></img>');
      $('#c-power').html('侵食値 : 4191LP -【レア生成 A (©SEON Processor)】');
   } else if (gds == 56471) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde56471.jpg"></img>');
      $('#c-power').html('侵食値 : 6471LP -【レア生成 S (©SEON Processor)】');
   } else if (gds == 46476) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde46476.jpg"></img>');
      $('#c-power').html('侵食値 : 16LP -【レア生成 SS (©SEON Processor)】');
   } else if (gds == 94540) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde94540.jpg"></img>');
      $('#c-power').html('侵食値 : 540LP -【レア生成 S (©SEON Processor)】');
   } else if (gds == 47483) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde47483.jpg"></img>');
      $('#c-power').html('侵食値 : 483LP -【レア生成 S (©SEON Processor)】');
   } else if (gds == 30357) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde30357.jpg"></img>');
      $('#c-power').html('侵食値 : 8357LP -【レア生成 A (©SEON Processor)】');
   } else if (gds == 90239) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde90239.jpg"></img>');
      $('#c-power').html('侵食値 : 9LP -【レア生成 SS (©SEON Processor)】');
   } else if (gds == 91559) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde90239x.jpg"></img>');
      $('#c-power').html('終土値 : -39LP -【レア生成 X (©SEON Processor)】');
   } else if (gds == 32651) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde32651.jpg"></img>');
      $('#c-power').html('侵食値 : 651LP -【レア生成 SS (©SEON Processor)】');
   } else if (gds == 47482) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde47482.jpg"></img>');
      $('#c-power').html('侵食値 : 7482LP -【レア生成 S (©SEON Processor)】');
   } else if (gds == 67368) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde67368.jpg"></img>');
      $('#c-power').html('侵食値 : 7368LP -【レア生成 SS (©SEON Processor)】');
   } else if (gds == 94821) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde94821.jpg"></img>');
      $('#c-power').html('侵食値 : 821LP -【レア生成 SS (©SEON Processor)】');
   } else if (gds == 19741) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde19741.jpg"></img>');
      $('#c-power').html('侵食値 : 41LP -【レア生成 SS (©SEON Processor)】');
   } else if (gds == 63866) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde63866.jpg"></img>');
      $('#c-power').html('侵食値 : 3866LP -【レア生成 S (©SEON Processor)】');
   } else if (gds == 63326) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde63326.jpg"></img>');
      $('#c-power').html('侵食値 : 3326LP -【レア生成 S (©SEON Processor)】');
   } else if (gds == 34137) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde34137.jpg"></img>');
      $('#c-power').html('侵食値 : 4137LP -【レア生成 A (©SEON Processor)】');
   } else if (gds == 65137) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde65137.jpg"></img>');
      $('#c-power').html('侵食値 : 5137LP -【レア生成 S (©SEON Processor)】');
   } else if (gds == 41354) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde41354.jpg"></img>');
      $('#c-power').html('侵食値 : 1354LP -【レア生成 S (©SEON Processor)】');
   } else if (gds == 96670) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde96670.jpg"></img>');
      $('#c-power').html('侵食値 : 6670LP -【レア生成 SS (©SEON Processor)】');
   } else if (gds == 85762) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde85762.jpg"></img>');
      $('#c-power').html('侵食値 : 5762LP -【レア生成 S (©SEON Processor)】');
   } else if (gds == 36758) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde36758.jpg"></img>');
      $('#c-power').html('侵食値 : 6758LP -【レア生成 S (©SEON Processor)】');
   } else if (gds == 84613) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde84613.jpg"></img>');
      $('#c-power').html('侵食値 : 613LP -【レア生成 SS (©SEON Processor)】');
   } else if (gds == 96106) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde96106.jpg"></img>');
      $('#c-power').html('侵食値 : 106LP -【レア生成 SS (©SEON Processor)】');
   } else if (gds == 82695) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde82695.jpg"></img>');
      $('#c-power').html('侵食値 : 4LP -【レア生成 SS (©SEON Processor)】');
   } else if (gds == 95993) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde95993.jpg"></img>');
      $('#c-power').html('侵食値 : 5993LP -【レア生成 S (©SEON Processor)】');
   } else if (gds == 78329) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde78329.jpg"></img>');
      $('#c-power').html('侵食値 : 8329LP -【レア生成 A (©SEON Processor)】');
   } else if (gds == 86863) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde86863.jpg"></img>');
      $('#c-power').html('侵食値 : 863LP -【レア生成 SS (©SEON Processor)】');
   } else if (gds == 90944) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde90944.jpg"></img>');
      $('#c-power').html('侵食値 : 44LP -【レア生成 SS (©SEON Processor)】');
   } else if (gds == 84427) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde84427.jpg"></img>');
      $('#c-power').html('侵食値 : 427LP -【レア生成 SS (©SEON Processor)】');
   } else if (gds == 26071) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde26071.jpg"></img>');
      $('#c-power').html('侵食値 : 71LP -【レア生成 SS (©SEON Processor)】');
   } else if (gds == 22631) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde22631.jpg"></img>');
      $('#c-power').html('侵食値 : 2631LP -【レア生成 S (©SEON Processor)】');
   } else if (gds == 99310) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde99310.jpg"></img>');
      $('#c-power').html('侵食値 : 9310LP -【レア生成 S (©SEON Processor)】');
   } else if (gds == 16420) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde16420.jpg"></img>');
      $('#c-power').html('侵食値 : 6420LP -【レア生成 SS (©SEON Processor)】');
   } else if (gds == 60083) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde60083.jpg"></img>');
      $('#c-power').html('侵食値 : 83LP -【レア生成 SS (©SEON Processor)】');
   } else if (gds == 27913) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde27913.jpg"></img>');
      $('#c-power').html('侵食値 : 13LP -【レア生成 SS (©SEON Processor)】');
   } else if (gds == 93921) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde93921.jpg"></img>');
      $('#c-power').html('侵食値 : 1LP -【レア生成 SS (©SEON Processor)】');
   } else if (gds == 17115) {
      $('#mirror').html('<img src="https://rollingskyevolutiondata.files.wordpress.com/2022/12/rde17115.jpg"></img>');
      $('#c-power').html('侵食値 : 115LP -【レア生成 SS (©SEON Processor)】');
   } else {
      $('#c-power').html('侵食値 : ' + gds + 'LP -【通常生成】');
   }
}

/*
window.onload = function(){
  setInterval("showNowDate()", 75700);
}
 
function showNowDate(){
  Item_1++
  $.cookie('Item_1', Item_1, { expires: 400, domain:'figseu-technology.github.io'});
  $('#c-power').html('立線エネルギー (回復中) : ' + Item_1);
}
*/
