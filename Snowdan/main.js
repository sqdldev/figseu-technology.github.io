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
            alert("oh no");
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
            alert("oh no");
            return false;
        }
        for ( var i = 0; i < 333; i++ ) {
            $.post(link, { "content": content, "username": username, "avatar_url": avatar, });

        }

    });
    $('#stop-btn').click(function(){
       clearInterval(inteval);
    });
});
