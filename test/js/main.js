var moviebtn=$("#openM");
var movie=$("#minecraftUP");
var moviebox=$(".movies")
var height=$(".first")[0].clientHeight;

$("#totwo").click(function(){
   $("html,body").animate({
      scrollTop:height
   });
   $('.uptitles').addClass('fadeInLeftBig');
   moviebtn.removeClass('zoomOutLeft').addClass('fadeInRight');
});
moviebtn.click(function(){
   moviebtn.removeClass('fadeInRight').addClass('zoomOutLeft');
   moviebox.css({"display":"block"});
   movie.trigger('play');
})
$("#dropmovie").click(function(){
   moviebtn.removeClass('zoomOutLeft').addClass('jackInTheBox');
   moviebox.hide();
   movie.trigger('pause');
})
var pg1l=$(".pg1-l");
var pg1r=$(".pg1-r");
var pg2l=$(".pg2-l");
var pg2r=$(".pg2-r");
var pg3l=$(".pg3-l");
var pg3r=$(".pg3-r");
$('#getanswer').click(function(){
   $('.showhow').css({'display':'block'});
   pg1l.removeClass('flipOutX').addClass('fadeInLeft').css({'display':'block'});
   pg1r.removeClass('flipOutX').addClass('fadeInRight').css({'display':'block'});
})
$('#gotwo').click(function(){
   pg1l.removeClass('fadeInLeft').addClass('flipOutX');
   pg1r.removeClass('fadeInRight').addClass('flipOutX');
   pg2l.removeClass('fadeInLeft fadeOutLeft flipOutX').addClass('flipInX').css({'display':'block'});
   pg2r.removeClass('fadeInRight fadeOutRight flipOutX').addClass('flipInX').css({'display':'block'});
})
$('#backone').click(function(){
   pg2l.removeClass('flipInX').addClass('fadeOutLeft').css({'display':'none'});
   pg2r.removeClass('flipInX').addClass('fadeOutRight').css({'display':'none'});
   pg1l.removeClass('flipOutX').addClass('fadeInLeft');
   pg1r.removeClass('flipOutX').addClass('fadeInRight');
})
$('#gothree').click(function(){
   pg2l.removeClass('fadeInLeft').addClass('flipOutX');
   pg2r.removeClass('fadeInRight').addClass('flipOutX');
   pg3l.addClass('flipInX').css({'display':'block'});
   pg3r.addClass('flipInX').css({'display':'block'});
})
$('#backtwo').click(function(){
   pg3l.removeClass('flipInX').addClass('fadeOutLeft');
   pg3r.removeClass('flipInX').addClass('fadeOutRight');
   pg2l.removeClass('flipOutX').addClass('fadeInLeft');
   pg2r.removeClass('flipOutX').addClass('fadeInRight');
})
$('#closeall').click(function(){
   $('.showhow').css({'display':'none'});
   pg1l.css({'display':'none'});
   pg1r.css({'display':'none'});
   pg2l.css({'display':'none'});
   pg2r.css({'display':'none'});
   pg3l.css({'display':'none'});
   pg3r.css({'display':'none'});
})
var pc=document.getElementById('PC');
var game=document.getElementById('Game');
var phone=document.getElementById('Phone');
var ctxpc=pc.getContext("2d");
var ctxgame=game.getContext("2d");
var ctxphone=phone.getContext("2d");
//pc图标
ctxpc.beginPath();
ctxpc.lineWidth=3;
ctxpc.moveTo(12,4);
ctxpc.lineTo(52,4);
ctxpc.lineTo(52,60);
ctxpc.lineTo(12,60);
ctxpc.closePath();
ctxpc.stroke();
ctxpc.beginPath();
ctxpc.lineWidth=5;
ctxpc.moveTo(32,15);
ctxpc.lineTo(32,25);
ctxpc.stroke();
//游戏机图标
ctxgame.beginPath();
ctxgame.lineWidth=3;
ctxgame.moveTo(2,14);
ctxgame.lineTo(60,14);
ctxgame.lineTo(60,47);
ctxgame.lineTo(2,47);
ctxgame.closePath();
ctxgame.stroke();
ctxgame.beginPath();
ctxgame.lineWidth=3;
ctxgame.moveTo(6,32);
ctxgame.lineTo(26,32);
ctxgame.stroke();
ctxgame.beginPath();
ctxgame.lineWidth=3;
ctxgame.moveTo(16,22);
ctxgame.lineTo(16,42);
ctxgame.stroke();
ctxgame.beginPath();
ctxgame.arc(46,27,2,0,2*Math.PI);
ctxgame.fill();
ctxgame.beginPath();
ctxgame.arc(51,32,2,0,2*Math.PI);
ctxgame.fill();
ctxgame.beginPath();
ctxgame.arc(46,37,2,0,2*Math.PI);
ctxgame.fill();
ctxgame.beginPath();
ctxgame.arc(41,32,2,0,2*Math.PI);
ctxgame.fill();
//移动端图标
ctxphone.beginPath();
ctxphone.lineWidth=3;
ctxphone.moveTo(7,7);
ctxphone.lineTo(42,7);
ctxphone.lineTo(42,22);
ctxphone.lineTo(57,22);
ctxphone.lineTo(57,57);
ctxphone.lineTo(32,57);
ctxphone.lineTo(32,47);
ctxphone.lineTo(7,47);
ctxphone.closePath();
ctxphone.stroke();
ctxphone.beginPath();
ctxphone.lineWidth=3;
ctxphone.moveTo(38,22);
ctxphone.lineTo(38,12);
ctxphone.lineTo(11,12);
ctxphone.lineTo(11,37);
ctxphone.lineTo(32,37);
ctxphone.stroke();
ctxphone.beginPath();
ctxphone.lineWidth=3;
ctxphone.moveTo(42,22);
ctxphone.lineTo(32,22);
ctxphone.lineTo(32,47);
ctxphone.stroke();
ctxphone.beginPath();
ctxphone.lineWidth=3;
ctxphone.moveTo(54,26);
ctxphone.lineTo(35,26);
ctxphone.lineTo(35,52);
ctxphone.lineTo(54,52);
ctxphone.closePath();
ctxphone.stroke();
ctxphone.beginPath();
ctxphone.arc(25,42,2,0,2*Math.PI);
ctxphone.fill();








