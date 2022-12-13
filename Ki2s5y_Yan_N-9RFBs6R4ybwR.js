let UserName = 0;
let Password = 0;
UserName = $.cookie('UserName');
Password = $.cookie('Password');
if (typeof UserName !== 'undefined' || typeof Password !== 'undefined') {
   location.href = "https://figseu-technology.github.io/";
}

function Submit() {
   UserName = $('#name').val();
   Password = $('#pass').val();
   $.cookie('UserName', UserName, { expires: 600, domain:'figseu-technology.github.io'});
   $.cookie('Password', Password, { expires: 600, domain:'figseu-technology.github.io'});
   location.href = "https://figseu-technology.github.io/";
}
