let Master_Icon = 0;
let Luncher = 0;

function Submit() {
   Luncher = sample.includes('.jpg');
   if (Luncher = true) {
      Master_Icon = $('#avatar_url').val();
      $.cookie('Master_Icon', Master_Icon, { expires: 500, domain:'figseu-technology.github.io'});
      location.href = "https://figseu-technology.github.io/Profile.html";
   } else {
      location.href = "https://figseu-technology.github.io/AvatarEdit.html";
   }
}
