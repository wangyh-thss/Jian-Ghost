function OtherF(){$(".hljs").css("background","rgb(59, 45, 45)");$(".post-page-comments-title").click(function(){$(".post-page-comments").slideToggle(800)});function backTop(){var GTop=$(document).scrollTop();if(GTop>450){$(".page-retop-btn").css("display","block")}else{$(".page-retop-btn").css("display","none")}setTimeout(backTop)}backTop();$(".page-retop-btn").click(function(){$("html,body").animate({scrollTop:0},400)});$(".page-menu-btn").click(function(){$(".page-main").toggleClass("page-main-open");$(".page-nav").toggleClass("page-main-open");$(".page-menu-btn").toggleClass("page-menu-btn-open");$(".mask").fadeToggle(600);$(".page-retop-btn").toggleClass("page-main-open");$(".page-menu-btn .page-menu-btn-one").toggleClass("page-menu-btn-rotate-left");$(".page-menu-btn .page-menu-btn-two").fadeToggle(100);$(".page-menu-btn .page-menu-btn-three").toggleClass("page-menu-btn-rotate-right")});$(".mask").click(function(){$(".page-main").removeClass("page-main-open");$(".page-nav").removeClass("page-main-open");$(".page-menu-btn").removeClass("page-menu-btn-open");$(".page-retop-btn").removeClass("page-main-open");$(".page-menu-btn .page-menu-btn-one").removeClass("page-menu-btn-rotate-left");$(".page-menu-btn .page-menu-btn-two").fadeIn();$(".page-menu-btn .page-menu-btn-three").removeClass("page-menu-btn-rotate-right");$(".mask").fadeOut(600);setTimeout(function(){$(".mask").css("display","none")},600)});$(".post-page-content a").attr("target","_blank");$(".links-page-content a").attr("target","_blank");$(".post-page-main img").attr("data-action","zoom");$(".post-page-content a").addClass("down-a");$(".tags-page-content a").addClass("down-a");$(".post-page-readmore a").addClass("down-a");$(".post-block>section a").addClass("down-a");$("mark").css("background","none");$(".page-body-color-night").click(function(){bodyColorNight()});$(".page-body-color-light").click(function(){bodyColorLinght()});var myDate=new Date();var syHours=myDate.getHours();if(syHours>19||syHours<6){bodyColorNight()}else{bodyColorLinght()}function bodyColorLinght(){$(".page-body-color-light").css("display","none");$(".page-body-color-night").css("display","inline-block");$("body").css("background","#fff");$(".page-header").css("background-color","#f5f8fa");$(".page-header-title>h1>a").css("color","#255");$(".page-header-title>p").css("color","#255");$(".post-block>section").css("color","#666");$(".post-page-main>section").css("color","#333");$(".post-page-main>section img").css("box-shadow","0 0 4px 5px rgba(232, 232, 232, 0.5)");$("pre code").css("background","#fafafa");$(".waves-button").css("background-color","#fff");$(".links-page-content>ul>li>a").css({"background-color":"#fff","border-color":"#fff"});$(".page-retop-btn>i").css("color","#333");$(".page-nav").css("background","#fafafa");$(".page-nav-icon").css({"background":"#fff","border-top":"#eee"});$(".page-menu-btn>i").css("background","#857171");$(".page-nav-icon-bg").css("background","#eee");$(".page-nav-bar>ul>li>a").css("color","#F55852");$(".page-nav-bar>ul>li>a").hover(function(){$(this).css("background","#eee")},function(){$(this).css("background","rgba(0,0,0,0)")});$(".mask").css("background","rgba(255, 255, 255, 0.85)");$("section blockquote").css("border-color","#e2e2e2");$(".post-page-comments *").css("border-color","#eee");$("#ds-thread #ds-reset .ds-textarea-wrapper").css("background","none");$("#ds-thread #ds-reset .ds-comments").css("border-color","#eee");$("#ds-thread #ds-reset .ds-meta").css("border-color","#eee")}function bodyColorNight(){$(".page-body-color-light").css("display","inline-block");$(".page-body-color-night").css("display","none");$("body").css("background","rgb(48, 36, 36)");$(".page-header").css("background-color","rgb(52, 52, 52)");$(".page-header-title>h1>a").css("color","#eee");$(".page-header-title>p").css("color","#eee");$(".post-block>section").css("color","#9b9b9b");$(".post-page-main>section").css("color","#bcbcbc");$(".post-page-main>section img").css("box-shadow","0 0 0 0 rgba(0, 0, 0, 0)");$("pre code").css("background","rgb(59, 45, 45)");$(".waves-button").css("background-color","#574040");$(".links-page-content>ul>li>a").css({"background-color":"rgb(48, 36, 36)","border-color":"rgb(48, 36, 36)"});$(".page-retop-btn>i").css("color","#fff");$(".page-nav").css("background","rgb(48, 36, 36)");$(".page-nav-icon").css({"background":"rgb(48, 36, 36)","border-top":"rgb(48, 36, 36)"});$(".page-menu-btn>i").css("background","#eee");$(".page-nav-icon-bg").css("background","#493939");$(".page-nav-bar>ul>li>a").css("color","#eee");$(".page-nav-bar>ul>li>a").hover(function(){$(this).css("background","#553939")},function(){$(this).css("background","rgba(0,0,0,0)")});$(".mask").css("background","rgba(0, 0, 0, 0.85)");$("section blockquote").css("border-color","#914343");$(".post-page-comments *").css("border-color","#255");$("#ds-thread #ds-reset .ds-textarea-wrapper").css("background","none");$("#ds-thread #ds-reset .ds-comments").css("border-color","#255");$("#ds-thread #ds-reset .ds-meta").css("border-color","#255")
}};
