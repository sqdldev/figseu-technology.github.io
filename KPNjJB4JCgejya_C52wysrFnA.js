let Master_Comments = 0;

function Submit() {
   Master_Comments = $('#comments').val();
   $.cookie('Master_Comments', Master_Comments, { expires: 500, domain:'figseu-technology.github.io'});
   location.href = "https://figseu-technology.github.io/Profile.html";
}
