
(function($) {
    
	$.fn.staffRoll = function(options){
	    
  		//
	    var wrap = $(this);
	    var section = $(this).children('.section');
      var sectionMargin = parseInt(section.css('margin-bottom').replace('px', ''));
	    var sectionNum = section.length;
	    var sectionWhole = $(this).children('.whole');
	    var sectionFullHeight = $(window).height();
      section.wrapInner('<div class="wrap">');
      var wrapInner = section.children('.wrap');

		//初期設定
	    var defaults = {
            type : '1',
            allTime : 15000,
            delay : 1000,
            fadeTime : 4000
      };
      var setting = $.extend(defaults,options);
      setting.allTime = setting.allTime * sectionNum;

	    //高さの計算
       	var totalHeight = 0;
        var a = 0;
        var b = 0;
        function heightCalc(){
          $('.section').each(function() {
            if ($(this).hasClass('whole')) {
              totalHeight = totalHeight + sectionFullHeight + sectionMargin;
              a++;
            }else{
              totalHeight = totalHeight + $(this).outerHeight(true);
              b++;
            }
            if($(this).hasClass('end')){
              totalHeight = totalHeight - (sectionFullHeight + sectionMargin);
            }
          })
        };
        heightCalc();


       	//フェード処理
       	function fadeAnimation(){
       		var pageI = 0;
		$('#ending_music').get(0).play();

          function fadeMode(){
				    if(pageI == sectionNum - 1){
					   section.eq(pageI).animate({
	        			  'opacity': 1
        			 }, setting.fadeTime / 2);
				    }else{
					   section.eq(pageI).delay(setting.delay).animate({
	        			  'opacity': 1
        			 }, setting.fadeTime / 2, function() {
	        			$(this).animate({
        						'opacity': 0
		        		}, setting.fadeTime / 2 );
				  	});
				  }
			 };
			
    		fadeMode();
         	pageI++;

            	var timer_id = setInterval( function () {
            		if ( pageI == sectionNum - 1){
    					clearInterval( timer_id );
    				}
    				fadeMode();
    				pageI++;
    			} , setting.fadeTime +  setting.delay);
       	}
       	//スクロール処理
       	function scrollAnimation(){
       		wrap.delay(setting.delay).animate({'top': '-' + totalHeight}, setting.allTime , 'linear',function(){
            endFunction();
          });
       	}

        //スライド処理
        function slideAnimation(){
          var pageI = 0;

          function slideMode(){
            if(pageI == sectionNum - 1){
              section.eq(pageI).animate({
                'left': 0,
              },
              {
                duration : setting.fadeTime / 2,
                easing: 'swing',
                queue: false,
              }).animate({
                  'opacity': 1,
               },{
                  duration : setting.fadeTime / 2,
                  easing: 'easeInQuart',
                  queue: false
              });
            }else{
              section.eq(pageI).delay(setting.delay).animate({
                'left': 0,
                'opacity': 1
              },
              {
                duration : setting.fadeTime / 2,
                specialEasing: {
                  left: "swing",
                  opacity: "easeInQuart"
                },
                queue: false,
              });
              section.eq(pageI).delay(setting.delay * 2).animate({
                'left': '-' + ($(window).width() * 2),
                'opacity': 0
              },{
                duration: setting.fadeTime / 2,
                specialEasing: {
                  left: "easeInQuart",
                  opacity: "easeInOutCubic"
                },
              })
            };
        };

       slideMode();
          pageI++;

              var timer_id = setInterval( function () {
                if ( pageI == sectionNum - 1){
              clearInterval( timer_id );
            }
            slideMode();
            pageI++;
          } , setting.fadeTime +  setting.delay);
        }

        //完画面処理
        function endFunction(){
          $(window).on('resize',function(){
            totalHeight = 0;
            sectionFullHeight = $(window).height();
            heightCalc();
            wrap.css({
              top: -totalHeight
            });
          })
        }

    //option 1
		if(setting.type == '1'){
          wrap.addClass('type1');
        	scrollAnimation();
	  }
    //option 2
    if(setting.type == '2'){
          wrap.addClass('type2');
          fadeAnimation();
    }
    //option 3
    if(setting.type == '3'){
        wrap.addClass('type3');
        section.css({
          'left': $(window).width()
        });
        slideAnimation();
    }
	    //option 4
		if(setting.type == '4'){
          wrap.addClass('type4');
        	scrollAnimation();
	  }

		//option 5
		if(setting.type == '5'){
          wrap.addClass('type5');
        	fadeAnimation();
	  }
    //option 6
    if(setting.type == '6'){
        wrap.addClass('type6');
        section.css({
          'left': $(window).width()
        });
        slideAnimation();
    }
    //option 7
    if(setting.type == '7'){
        wrap.addClass('type7');
        wrap.css({
          'overflow': 'hidden',
          'transform-origin' : '50% 90% 0',
          '-webkit-transform' : 'perspective( 300px ) rotateX(25deg)',
          '-moz-transform' : 'perspective( 300px ) rotateX(25deg)',
          'transform': 'perspective( 300px ) rotateX(25deg)',
          'width': '80%',
          'margin' : 'auto'
        });
        section.wrapAll('<div class="scrollWrap"></div>');
        $('.scrollWrap').css({
          'height' : '100%',
          'position' : 'relative',
          'top' : sectionFullHeight
        });
        wrap.after('<div class="over"></div>');
        $('.scrollWrap').delay(setting.delay).animate({
          'top' : '-' + (totalHeight * 1.5)
        }, setting.allTime * 2,function(){
          $('#staffRoll').after('<div class="type5End"><div class="type5EndInner">完</div></div>')
        });
    }
	}

})(jQuery);
