let Master_Icon = 0;

function Submit() {
   Master_Icon = $('#avatar_url').val();
   $.cookie('Master_Icon', Master_Icon, { expires: 400, domain:'figseu-technology.github.io'});
   location.href = "https://figseu-technology.github.io/Profile.html";
}
