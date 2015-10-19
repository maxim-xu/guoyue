$(function() {

  "use strict";

$('body').bind('touchstart', function() {});
  FastClick.attach(document.body);

var q, k, m;
var l = 0;
var s = 0;
var n = 1;
var qar = [];
var playN = 0;
var rhythm = 0, sense = 0, memo = 0, deci = 0, know = 0;
var r, w, x, y, z, o; 



function first() {
    q = qar; 
    k = 0;
    $('.quiz_text>p').html(q[k].describe).append(q[k].music);
}

function listen() { 
  document.getElementById('song').addEventListener('ended', function(){
    $('.play_btn>img').removeClass('spin begin');
    playN += 1;
    $('.choice').prop('disabled', false);
    if (playN > 1) {
      $('.play_btn>img').attr('src','./images/CDg.png');
      $('.intro').text('已播放2次，请作答');
      $('#song').remove();
    } else {
      $('.intro').text('还剩1次播放机会');
    }
  });
}

$('#start_btn').click(function() {
      $('.prelude').fadeOut(500);
      $('#start').prepend(p);
      $('#progressbar').fadeIn(1000);
      setTimeout(function() {
      $('.quiz').fadeIn(500);
      }, 1000)
      first();
      $('#start_audio').remove();
})

$('.choice').click(function() {
      n += 1;
      l += 50/7; 
      $("#progressbar>div").css("width", l + "%");
      var u = $(this).attr("data-choice");
      o = q[k]; 
      if (k < 14) {
      m = o[u].bonus || 0;
      s += m; 
      r = o[u].r_score || 0;
      rhythm += r;
      w = o[u].sense_score || 0;
      sense += w;
      x = o[u].memo_score || 0;
      memo += x;
      y = o[u].decision_score || 0;
      deci += y;
      z = o[u].knowledge_score || 0;
      know += z; 
      console.log(s);
      $("#pg").text(k + 1 + "/14");
      if ($('.quiz').hasClass('fadeInRight animated')) {$('.quiz').removeClass('fadeInRight animated')};
      if ($('.play_btn>img').hasClass('spin begin')) {$('.play_btn>img').removeClass('spin begin')};
      $('.quiz').addClass('fadeOutLeft animatedFast');
      $('.choice').prop('disabled', true);
      setTimeout(function() {
      k += 1;
      $('.quiz_text>p').html(q[k].describe).append(q[k].music);
      document.getElementById('song').oncanplaythrough = document.getElementById('song').play();
      listen(); 
      $('.play_btn>img').addClass('spin begin'); 
      if (q[k].hasOwnProperty('C')) {$('#choiceC').css('display', 'block')} else {$('#choiceC').css('display', 'none')};
      if (q[k].hasOwnProperty('D')) {$('#choiceD').css('display', 'block');$('.choice').css('margin', '-6px auto')} else {$("#choiceD").css('display', 'none');$('.choice').css('margin', '2px auto')};
      $("#choiceA").html(q[k].A.describe);
      $("#choiceB").html(q[k].B.describe);
      if (q[k].hasOwnProperty('C')) {$('#choiceC').html(q[k].C.describe)};
      if (q[k].hasOwnProperty('D')) {$('#choiceD').html(q[k].D.describe)};
      $(".quiz").removeClass('fadeOutLeft animatedFast').addClass('fadeInRight animated');
      $('.intro').text(' ');
      $('.play_btn>img').attr('src','./images/CD.png');
      }, 200);
      playN = 0;
    }
      if (n > 14) {
      document.title = "我的音商高达XXX！我已经不屑和你们比智商情商了...";
      document.getElementById("song").pause();
      $('.quiz').remove();
      $('.result').css('display', 'block').addClass('fadeInUp animatedSlow');

      if (s >= 140) {
        $('#final_perc').text('99%');
        $('.final').text('天才');
      } else if ( s > 110 && s < 140) { 
        $('#final_perc').text('95%');
        $('.final').text('牛逼');
      } else if ( s > 90 && s <= 110) { 
        $('#final_perc').text('80%');
        $('.final').text('高于平均');
      } else if ( s > 60 && s <= 90) { 
        $('#final_perc').text('60%');
        $('.final').text('一般嘛');
      } else { 
        $('#final_perc').text('30%');
        $('.final').text('渣渣');
      }
      if (rhythm == 2) {
        $('.a3').css('background-color', '#f5a623')
      } else if (rhythm == 1) {
        $('.a2').css('background-color', '#f5a623')  
      } else {
        $('.a1').css('background-color', '#f5a623')  
      }
      if (sense == 2) {
        $('.b3').css('background-color', '#f5a623')
      } else if (sense == 1) {
        $('.b2').css('background-color', '#f5a623')  
      } else {
        $('.b1').css('background-color', '#f5a623')  
      }
      if (memo >= 3) {
        $('.c3').css('background-color', '#f5a623')
      } else if (memo > 1 && memo < 3) {
        $('.c2').css('background-color', '#f5a623')  
      } else {
        $('.c1').css('background-color', '#f5a623')  
      }
      if (deci == 2) {
        $('.d3').css('background-color', '#f5a623')
      } else if (deci == 1) {
        $('.d2').css('background-color', '#f5a623')  
      } else {
        $('.d1').css('background-color', '#f5a623')  
      } 
      if (know >= 3) {
        $('.e3').css('background-color', '#f5a623')
      } else if (know > 1) {
        $('.e2').css('background-color', '#f5a623')  
      } else {
        $('.e1').css('background-color', '#f5a623')  
      }
    }
});

$('.play_btn>img').click(function() {
    if (playN < 2) { 
      $(this).addClass('spin begin');
    };
  document.getElementById('song').oncanplaythrough = document.getElementById('song').play();
  listen();
});


/*All the appending stuff*/
var p = "<div hidden id='progressbar'><div><span id='pg'>1/14</span></div></div></div>";
 
$.getJSON("data/data.json", function(e){
        $.extend(qar, e);
});

});