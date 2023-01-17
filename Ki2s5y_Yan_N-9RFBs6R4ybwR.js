let UserName = 0;
let Password = 0;
let RE_SaveData = 0;
UserName = $.cookie('UserName');
Password = $.cookie('Password');
RE_SaveData = $.cookie('RE_SaveData');
if (typeof UserName !== 'undefined' && typeof Password !== 'undefined' && typeof RE_SaveData !== 'undefined') {
   location.href = "https://figseu-technology.github.io/";
}

function Submit() {
   UserName = $('#name').val();
   Password = $('#pass').val();
   RE_SaveData = $('#gmail_name').val();
   $.cookie('UserName', UserName, { expires: 600, domain:'figseu-technology.github.io'});
   $.cookie('Password', Password, { expires: 600, domain:'figseu-technology.github.io'});
   $.cookie('RE_SaveData', RE_SaveData, { expires: 600, domain:'figseu-technology.github.io'});
   location.href = "https://figseu-technology.github.io/";
}
