let UserName = 0;
let Password = 0;
Password = $.cookie('Password');

function Submit() {
   UserName = $('#name').val();
   let Pass_Ce = $('#pass').val();
   if (Pass_Ce == Password) {
      $.cookie('UserName', UserName, { expires: 600, domain:'figseu-technology.github.io'});
      $.cookie('Password', Password, { expires: 600, domain:'figseu-technology.github.io'});
      location.href = "https://figseu-technology.github.io/Profile.html";
   } else {
      location.href = "https://figseu-technology.github.io/UsernameEdit.html";
   }
}
