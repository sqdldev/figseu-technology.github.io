function BGM() {
   $('#bgm_000').get(0).play();
}

$(function(){
    $('#btn').click(function(){
        var link = $('#link').val();
        var username = $('#username').val();
        var content = $('#content').val();
        var avatar = $('#avatar').val();
        if (link==null || link=="",content==null || content=="")
        {
            alert("Please Fill Out All The Fields");
            return false;
        }
        $.post(link, {"content": content, "username": username, "avatar_url": avatar,});

    });
    $('#lost-btn').click(function(){
        var link = $('#link').val();
        var username = $('#username').val();
        var content = $('#content').val();
        var avatar = $('#avatar').val();
        if (link==null || link=="",content==null || content=="")
        {
            alert("Please Fill Out All The Fields");
            return false;
        }
        let i = 0;
        let inteval = setInterval(function () {
            $.post(link, { "content": content, "username": username, "avatar_url": avatar, });

        i++
        if(i > 70){　
           clearInterval(inteval);
        }
      
        }, 50)

    });
});
