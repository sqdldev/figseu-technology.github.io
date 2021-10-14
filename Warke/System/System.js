client.on("message", async message => {
 if (message.author.id == client.user.id || message.author.bot) return;
  if (message.content.includes('おはよう')) {
        message.channel.send('おはよう!!');
    }
  else if (message.content.includes('こんにちは')) {
        message.channel.send('やっほー！');
  }
  else if (message.content.includes('草')) {
        message.channel.send('lol');
    }
  else if (message.content.includes('難しい')) {
    message.channel.startTyping()
        message.channel.send('がんばれ！');
    setTimeout(() => {
    message.channel.stopTyping()
         }, 10000)
    }
  else if (message.content.includes('sus')) {
        message.channel.send('ඞ');
  }
  else if (message.content.includes('飽きた')) {
        message.channel.send('ええ... (困惑)');
    }
  else if (message.content.includes('よっしゃ')) {
        message.channel.send('おめ');
  }
  else if (message.content.includes('は？')) {
        message.channel.send('お疲れ様');
    }
  else if (message.content.includes('出禁')) {
        message.channel.send('出目金');
  }
  else if (message.content.includes('わーけちゃん')) {
        message.channel.send('なにー？');
  }
  else if (message.content.includes('よろしく')) {
        message.channel.send('よろしくね！');
  }
  else if (message.content.includes('君すごいね！')) {
        message.channel.send('ありがとう！');
  }
  else if (message.content.includes('そんなことしかできないの？')) {
        message.channel.send('||一応モデレート機能を搭載していますよ♨️||');
  }
  else if (message.content.includes('暇')) {
    message.channel.startTyping()
        message.channel.send('Rolling Sky play NOW!!');
    setTimeout(() => {
    message.channel.stopTyping()
         }, 20000)
  }
  else if (message.content.includes('寒')) {
    message.channel.startTyping()
    message.react('❄️')
        var array = ["こたつに入って暖まろう。\n||あ～いきかえるぅうぅぅぅぅ||", "寒", "私が暖めてあげよう (意味深)", "そんなことよりおそば食べたい", "ん～～～～～"];
    message.channel.send(array[Math.floor(Math.random() * array.length)]);
    console.log(array[Math.floor(Math.random() * array.length)]);
    setTimeout(() => {
    message.channel.stopTyping()
         }, 30000)
  }
  if (message.content.includes('ボケて')) {
    message.react('😳')
        var array = ["ζ*'ヮ')ζ", "ふとんがふっとんだ", "このカレーはかれぇー", "そんなことよりおうどん食べたい", "ざぁこ♡ざぁこ♡"];
    message.channel.send(array[Math.floor(Math.random() * array.length)]);
    console.log(array[Math.floor(Math.random() * array.length)]);
  }
  
  //モデレート用
  
  if (message.content.includes('消えろ')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : Bad Word**",
       }
     });
  }
  else if (message.content.includes('死ね')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : Bad Word**",
       }
     });
  }
  if (message.content.includes('YONAYONAダンスを100000時間流す')) {
        message.delete();
  }
  else if (message.content.includes('クズ')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : Bad Word**",
       }
     });
  }
  else if (message.content.includes('ぴえん')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : ぴえん**",
       }
     });
  }
  else if (message.content.includes('🥺')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : ぴえん**",
       }
     });
  }
  if (message.content.includes('夜な夜なダンス')) {
        message.delete();
  }
  if (message.content.includes('https://media.discordapp.net/attachments/865702269637885952/865706970211418152/makesweet-bfxl39.gif')) {
        message.delete();
  }
  else if (message.content.includes('fuck')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : Bad Word**",
       }
     });
  }
  else if (message.content.includes('Fuck')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : Bad Word**",
       }
     });
  }
  else if (message.content.includes('FUCK')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : Bad Word**",
       }
     });
  }
  else if (message.content.includes('しねよ')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : Bad Word**",
       }
     });
  }
  else if (message.content.includes('きっしょ')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : Bad Word**",
       }
     });
  }
  else if (message.content.includes('💩')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : Bad Word**",
       }
     });
  }
  else if (message.content.includes('disocrd.com')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : Blacklist URL**",
       }
     });
  }
  else if (message.content.includes('tenor.com')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : Blacklist URL**",
       }
     });
  }
  else if (message.content.includes('disord.com')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : Blacklist URL**",
       }
     });
  }
  else if (message.content.includes('discocrd.com')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : Blacklist URL**",
       }
     });
  }
  else if (message.content.includes('https://discord.gg')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : Blacklist URL**",
       }
     });
  }
  else if (message.content.includes('bit.ly')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : Blacklist URL**",
       }
     });
    }
  else if (message.content.includes('😷')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : ???**",
       }
     });
  }
  else if (message.content.includes('🐮')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : ???**",
       }
     });
  }
  if (message.content.includes('荒らし連合軍')) {
        message.delete();
  }
  if (message.content.includes('荒らし共栄圏')) {
        message.delete();
  }
  else if (message.content.includes('南無阿弥陀仏南無阿弥陀仏南無阿弥陀仏南無阿弥陀仏南無阿弥陀仏南無阿弥陀仏南無阿弥陀仏南無阿弥陀仏')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : spam message**",
       }
     });
  }
  else if (message.content.includes('あああああああああああああああああああああああああ')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : spam message**",
       }
     });
  }
  else if (message.content.includes('だまれよ')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : Bad Word**",
       }
     });
  }
  else if (message.content.includes('いやんいやんいやんいやんいやん')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : spam message**",
       }
     });
  }
  else if (message.content.includes('ｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞｱﾞ')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : spam message**",
       }
     });
  }
  else if (message.content.includes('、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : spam message**",
       }
     });
  }
  else if (message.content.includes('。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : spam message**",
       }
     });
      }
  else if (message.content.includes('みょんみょんみょんみょんみょんみょんみょんみょんみょんみょんみょんみょんみょんみょんみょんみょんみょんみょんみょんみょんみょんみょん')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : spam message**",
       }
     });
  }
  else if (message.content.includes('Союз нерушимый республик свободных')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : spam message**",
       }
     });
  }
  else if (message.content.includes('Славься, Отечество наше свободное,')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : spam message**",
       }
     });
  }
  else if (message.content.includes('Сквозь грозы сияло нам солнце свободы,')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : spam message**",
       }
     });
  }
  else if (message.content.includes('Славься, Отечество наше свободное,')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : spam message**",
       }
     });
  }
  else if (message.content.includes('Мы армию нашу растили в сраженьях')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : spam message**",
       }
     });
  }
  else if (message.content.includes('Славься, Отечество наше свободное,')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : spam message**",
       }
     });
  }
  else if (message.content.includes('ねぇねぇ')) {
        message.delete();
    message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : なんとなく**",
       }
     });
  }
  
  //コマンド
  
 if (!message.content.startsWith(prefix)) return; //ボットのプレフィックスからメッセージが始まっているか確認
 const args = message.content.slice(prefix.length).trim().split(/ +/g);
 const command = args.shift().toLowerCase();
 if (command === "help") { //コマンド名
   message.channel.send({
       embed: {
         title: "HELP",
         color: "#EDA300",
         description: "コマンドは`" + prefix + "`で実行できます\n\n**__コマンド一覧__**\n\n`>>[絵文字の名前]` - 指定した絵文字を投稿します\n\n`>>emojis` - 指定できる絵文字の一覧を表示します\n\n`>>810` - ヤツが現れます。\n\n`>>omikuji` - おみくじが引けます\n\n`>>play [曲名]` - ボイスチャンネルで音楽を流せます\n\n`>>playlist` - 再生できる音楽の一覧を表示します",
       }
     });
 }
  if (command === "810") { //コマンド名
   message.channel.send({
       embed: {
         title: "8　1　0",
         color: "#975C00",
         description: "!　　　　　　▃▆█▇▄▖\n　　　　　▟◤▖　　　◥█▎\n　　　◢◤　　▐　　　　▐▉\n　▗◤　　　▂　▗▖　　▕█▎\n　◤　▗▅▖◥▄　▀◣　　█▊\n▐　▕▎◥▖◣◤　　　　◢██\n█◣　◥▅█▀　　　　▐██◤\n▐█▙▂　　　　　　◢██◤\n　◥██◣　　　　◢▄◤\n　　　▀██▅▇▀",
       }
     });
 }
  if (command === "omikuji") { //コマンド名
    message.react('👍')
   var array = ["凶🔻", "小吉👍", "中吉👏", "吉👌", "大吉🎉"];
    message.channel.send(array[Math.floor(Math.random() * array.length)]);
    console.log(array[Math.floor(Math.random() * array.length)]);
  }
  if (command === "servers") { //コマンド名
   message.channel.send(client.guilds.cache.size + 'つのサーバーに所属しています');
  }
  if (command === "playlist") { //コマンド名
   message.channel.send({
       embed: {
         title: "Play List",
         color: "#00DBFF",
         description: "`6th Anniversary` - Rolling Sky 6th Anniversary\n`わかさぎ姫の命を懸けた寿司ネタ100本勝負` - わかさぎ姫の命を懸けた寿司ネタ100本勝負\n`不老不死` - 不老不死\n`Cave` - Cave (Rolling Sky)\n`Ice_Sheet` - Ice Sheet (Rolling Sky)\n`トイマチックパレード` - トイマチック☆パレード!!\n`CTTT` - Cartoon x Time To Talk\n`YONA_YONA_DANCE` - YONA_YONA_DANCE\n`Earth_Core_Adventure` - Earth Core Adventure (Rolling Sky)",
       }
     });
  }
  if (command === "help-secret") { //コマンド名
   message.channel.send({
       embed: {
         title: "Help Secret",
         color: "#FF0006",
         description: "__**管理者専用コマンド**__\n\n`>>ban [メンション]` - メンションで指定したユーザーをBANします (使用者は メンバーをBAN 権限が必要)\n\n`>>kick [メンション]` - メンションで指定したユーザーをキックします (使用者は メンバーをキック 権限が必要)\n\n`>>purge [メッセージの数] [メンション]` - メンションしたユーザーの指定した数のメッセージを削除します (使用者は メッセージの管理 権限が必要)\n",
         footer: {
      text: "これらのコマンドを使用してユーザー間でのトラブルが起きた際、当方は一切の責任を負いませんのでご注意ください"
    },
       }
     });
  }
  if (command === "emojis") { //コマンド名
   message.channel.send({
       embed: {
         title: "emoji List",
         color: "#00DBFF",
         description: ">>> rhythm_join\nrolling_sky_evolution\nyuyuko_dab\ncirno\nhmmm\nmiku_meme",
       }
     });
  }
  else if (message.content.match('>>nof')) {
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.react('❎')
    // slow
    let say = message.content;
    say = say.replace(">>nof", "");
    message.channel.setRateLimitPerUser(say)
    message.delete();
    message.channel.send(say)
    }

  //絵文字

  if (message.content.startsWith('>>rhythm') && message.guild) { //コマンド名
    message.delete();
   message.channel.send('<:rhythm_join:896830795711389726>');
  }
  if (message.content.startsWith('>>rolling_sky_evolution') && message.guild) { //コマンド名
    message.delete();
   message.channel.send('<:Rolling_Sky_Evolution:859306826717986827>');
  }
  if (message.content.startsWith('>>hmmm') && message.guild) { //コマンド名
    message.delete();
   message.channel.send('<:Hmmmmm:852171652410507294>');
  }
  if (message.content.startsWith('>>yuyuko_dab') && message.guild) { //コマンド名
    message.delete();
   message.channel.send('<a:yuyuko_dab:875449447646101545>');
  }
  if (message.content.startsWith('>>cirno') && message.guild) { //コマンド名
    message.delete();
   message.channel.send('<a:cirno:875450045762261012>');
  }
  if (message.content.startsWith('>>miku_meme') && message.guild) { //コマンド名
    message.delete();
   message.channel.send('<a:miku_meme:869599977591156787>');
  }

  // BANコマンド

  if (message.content.startsWith('>>ban') && message.guild) {
   	if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send({
       embed: {
         title: "ERROR",
         color: "#FF0006",
         description: "You are not authorized to execute this command.",
       }
     });
     if (message.mentions.members.size !== 1) return message.channel.send({
       embed: {
         title: "ERROR",
         color: "#FF0006",
         description: "No member is selected.",
       }
     });
     const member = message.mentions.members.first();
     if (!member.bannable) return message.channel.send({
       embed: {
         title: "ERROR",
         color: "#FF0006",
         description: "Cannot ban because the rank is lower than the selected member",
       }
     });
          
     await member.ban();
          
     await message.channel.send({
       embed: {
         title: "Success",
         color: "#FF0006",
         description: "Select member has been Baned",
       }
     });
   }

  //Kickコマンド

  if (message.content.startsWith('>>kick') && message.guild) {
   	if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send({
       embed: {
         title: "ERROR",
         color: "#FF0006",
         description: "You are not authorized to execute this command.",
       }
     });
     if (message.mentions.members.size !== 1) return message.channel.send({
       embed: {
         title: "ERROR",
         color: "#FF0006",
         description: "No member is selected.",
       }
     });
     const member = message.mentions.members.first();
     if (!member.kickable) return message.channel.send({
       embed: {
         title: "ERROR",
         color: "#FF0006",
         description: "Cannot kick because the rank is lower than the selected member",
       }
     });
          
     await member.kick();
          
     await message.channel.send({
       embed: {
         title: "Success",
         color: "#FF0006",
         description: "Select member has been Kicked",
       }
     });
  }

  //PURGEコマンド

       if (message.content.startsWith('>>purge') && message.guild) {
         // 指定されたメッセージの数を取得
         if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send({
       embed: {
         title: "ERROR",
         color: "#FF0006",
         description: "You are not authorized to execute this command.",
       }
     });
         message.delete();
         const how = message.content.split(' ')[1];
         // メンションでユーザーが指定されていなかったら処理を止める
         if (!how || message.mentions.members.size == 0) return;
         // 指定された数のメッセージを取得
         const messages = await message.channel.messages.fetch({ limit: how }) 
         // メンションで指定されたユーザーのIDのみを配列に入れる
         const mentionMembers = await message.mentions.members.map(m => m.user.id)
         // 指定されたユーザーが発言したメッセージのみを抽出
         const mentionFilter =  await messages.filter(msg => mentionMembers.some(userID => userID == msg.author.id))
         // それらのメッセージを一括削除
         message.channel.bulkDelete(mentionFilter)
       }

  //スパム対策

  client.on('message', async(message) => {
    if(message.author.bot) return;
    
    if(usersMap.has(message.author.id)) {
        const userData = usersMap.get(message.author.id);
        const { lastMessage, timer } = userData;
        const difference = message.createdTimestamp - lastMessage.createdTimestamp;
        let msgCount = userData.msgCount;
        console.log(difference);

        if(difference > DIFF) {
            clearTimeout(timer);
            console.log('Cleared Timeout');
            userData.msgCount = 1;
            userData.lastMessage = message;
            userData.timer = setTimeout(() => {
                usersMap.delete(message.author.id);
                console.log('Removed from map.')
            }, TIME);
            usersMap.set(message.author.id, userData)
        }
        else {
            ++msgCount;
            if(parseInt(msgCount) === LIMIT) {

               message.channel.send({
       embed: {
         title: "You has been Warned",
         color: "#FF0006",
         description: "**Reason : Automatic action carried out for hitting the message rate limit**",
       }
     });
              message.channel.bulkDelete(LIMIT);
               
            } else {
                userData.msgCount = msgCount;
                usersMap.set(message.author.id, userData);
            }
        }
    }
    else {
        let fn = setTimeout(() => {
            usersMap.delete(message.author.id);
            console.log('Removed from map.')
        }, TIME);
        usersMap.set(message.author.id, {
            msgCount: 1,
            lastMessage : message,
            timer : fn
        });
    }
})

  //音楽専用

if (message.content.startsWith('>>play') && message.content.includes('6th Anniversary')) { //コマンド名
   if (message.member.voice.channel) {
     // ボイチャに参加 
     message.member.voice.channel
       .join()
       .then(conn => {
         // メンションメッセージを削除
         message.react('🔷')
         message.channel.send({
       embed: {
         title: "Success!",
         color: "#00D0FF",
       }
     });
         // assetsに追加したmp3ファイルの再生インスタンス
         const dispatcher = conn.play("6TH.mp3");
         // 音量調節
         dispatcher.setVolume(0.5);
         // 再生終了時にボイチャを抜ける
         dispatcher.on("finish", reason => {
           conn.disconnect();
         });
       })
       .catch(console.log);
     return;
   }
  }
  if (message.content.startsWith('>>play') && message.content.includes('わかさぎ姫の命を懸けた寿司ネタ100本勝負')) { //コマンド名
   if (message.member.voice.channel) {
     // ボイチャに参加 
     message.member.voice.channel
       .join()
       .then(conn => {
         // メンションメッセージを削除
         message.react('🍣')
         message.channel.send({
       embed: {
         title: "Success!",
         color: "#00D0FF",
       }
     });
         // assetsに追加したmp3ファイルの再生インスタンス
         const dispatcher = conn.play("わかさぎ姫の命を懸けた寿司ネタ100本勝負.mp3");
         // 音量調節
         dispatcher.setVolume(0.5);
         // 再生終了時にボイチャを抜ける
         dispatcher.on("finish", reason => {
           conn.disconnect();
         });
       })
       .catch(console.log);
     return;
   }
  }
  if (message.content.startsWith('>>play') && message.content.includes('不老不死')) { //コマンド名
   if (message.member.voice.channel) {
     // ボイチャに参加 
     message.member.voice.channel
       .join()
       .then(conn => {
         // メンションメッセージを削除
         message.react('🌱')
         message.channel.send({
       embed: {
         title: "Success!",
         color: "#00D0FF",
       }
     });
         // assetsに追加したmp3ファイルの再生インスタンス
         const dispatcher = conn.play("不老不死.mp3");
         // 音量調節
         dispatcher.setVolume(0.5);
         // 再生終了時にボイチャを抜ける
         dispatcher.on("finish", reason => {
           conn.disconnect();
         });
       })
       .catch(console.log);
     return;
   }
  }
  if (message.content.startsWith('>>play') && message.content.includes('Cave')) { //コマンド名
   if (message.member.voice.channel) {
     // ボイチャに参加 
     message.member.voice.channel
       .join()
       .then(conn => {
         // メンションメッセージを削除
         message.react('🌀')
         message.channel.send({
       embed: {
         title: "Success!",
         color: "#00D0FF",
       }
     });
         // assetsに追加したmp3ファイルの再生インスタンス
         const dispatcher = conn.play("Cave.mp3");
         // 音量調節
         dispatcher.setVolume(0.5);
         // 再生終了時にボイチャを抜ける
         dispatcher.on("finish", reason => {
           conn.disconnect();
         });
       })
       .catch(console.log);
     return;
   }
  }
  if (message.content.startsWith('>>play') && message.content.includes('Ice_Sheet')) { //コマンド名
   if (message.member.voice.channel) {
     // ボイチャに参加 
     message.member.voice.channel
       .join()
       .then(conn => {
         // メンションメッセージを削除
         message.react('❄️')
         message.channel.send({
       embed: {
         title: "Success!",
         color: "#00D0FF",
       }
     });
         // assetsに追加したmp3ファイルの再生インスタンス
         const dispatcher = conn.play("Ice_Sheet.mp3");
         // 音量調節
         dispatcher.setVolume(0.5);
         // 再生終了時にボイチャを抜ける
         dispatcher.on("finish", reason => {
           conn.disconnect();
         });
       })
       .catch(console.log);
     return;
   }
  }
  if (message.content.startsWith('>>play') && message.content.includes('トイマチックパレード')) { //コマンド名
   if (message.member.voice.channel) {
     // ボイチャに参加 
     message.member.voice.channel
       .join()
       .then(conn => {
         // メンションメッセージを削除
         message.react('🎉')
         message.channel.send({
       embed: {
         title: "Success!",
         color: "#00D0FF",
       }
     });
         // assetsに追加したmp3ファイルの再生インスタンス
         const dispatcher = conn.play("トイマチックパレード.mp3");
         // 音量調節
         dispatcher.setVolume(0.5);
         // 再生終了時にボイチャを抜ける
         dispatcher.on("finish", reason => {
           conn.disconnect();
         });
       })
       .catch(console.log);
     return;
   }
  }
  if (message.content.startsWith('>>play') && message.content.includes('CTTT')) { //コマンド名
   if (message.member.voice.channel) {
     // ボイチャに参加 
     message.member.voice.channel
       .join()
       .then(conn => {
         // メンションメッセージを削除
         message.react('🎵')
         message.channel.send({
       embed: {
         title: "Success!",
         color: "#00D0FF",
       }
     });
         // assetsに追加したmp3ファイルの再生インスタンス
         const dispatcher = conn.play("Cartoon_Time_To_Talk.mp3");
         // 音量調節
         dispatcher.setVolume(0.5);
         // 再生終了時にボイチャを抜ける
         dispatcher.on("finish", reason => {
           conn.disconnect();
         });
       })
       .catch(console.log);
     return;
   }
  }
  if (message.content.startsWith('>>play') && message.content.includes('YONA_YONA_DANCE')) { //コマンド名
   if (message.member.voice.channel) {
     // ボイチャに参加 
     message.member.voice.channel
       .join()
       .then(conn => {
         // メンションメッセージを削除
         message.react('🌊')
         message.channel.send({
       embed: {
         title: "Success!",
         color: "#00D0FF",
       }
     });
         // assetsに追加したmp3ファイルの再生インスタンス
         const dispatcher = conn.play("YONA_YONA_DANCE.mp3");
         // 音量調節
         dispatcher.setVolume(0.5);
         // 再生終了時にボイチャを抜ける
         dispatcher.on("finish", reason => {
           conn.disconnect();
         });
       })
       .catch(console.log);
     return;
   }
  }
  if (message.content.startsWith('>>play') && message.content.includes('Earth_Core_Adventure')) { //コマンド名
   if (message.member.voice.channel) {
     // ボイチャに参加 
     message.member.voice.channel
       .join()
       .then(conn => {
         // メンションメッセージを削除
         message.react('🌊')
         message.channel.send({
       embed: {
         title: "Success!",
         color: "#00D0FF",
       }
     });
         // assetsに追加したmp3ファイルの再生インスタンス
         const dispatcher = conn.play("Earth_Core_Adventure.mp3");
         // 音量調節
         dispatcher.setVolume(0.5);
         // 再生終了時にボイチャを抜ける
         dispatcher.on("finish", reason => {
           conn.disconnect();
         });
       })
       .catch(console.log);
     return;
   }
  }

  if (command === "dc") { //コマンド名
   conn.disconnect();
  }
  
});
