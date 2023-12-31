// do 0
// re 1
// mi 2
// fa 3
// sol 4
// la 5
// si 6
// do+ 7

var notes = $('.sound');

var newnote = [];
var newtempo = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,];

var note1 = [0, 0, 0, 3, 5, 0, 0, 0, 3, 5, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0, 2, 4, 0, 0, 0, 2, 4, 7, 7, 6, 5, 4, 3, 1, 0];
var tempo1 = [1,1,1,2,3,  1,1,1,2,3,  1,1,1,1,1,1,3,  1,1,1,2,3,  1,1,1,2,3,  2,1,1,1,1,1,1,1];

var note2 = [2,2,2,  2,2,2,  2,4,0,1,2,  3,3,3,  3,2,2,  2,1,1,2,1,4,  2,2,2,  2,2,2,  2,4,0,1,2,  3,3,3,  3,2,2,  4,4,3,1,0];
var tempo2 = [1,1,2,  1,1,2,  1,1,1,1,4,  1,1,2,  1,1,2,  1,1,1,1,2,2,  1,1,2,  1,1,2,  1,1,1,1,4,  1,1,2,  1,1,2,  1,1,1,1,4];

var note3 = [0,0,1,0,3,2,  0,0,1,0,4,3,  0,0,7,5,3,3,2,1,  6,6,5,3,4,3];
var tempo3 = [2,1,2,2,2,3,  2,1,2,2,2,3,  2,1,2,2,2,2,2,3,  2,1,2,2,2,3];

var note4 = [0,0,4,4,5,5,4,5,5,2,2,1,1,0,  4,4,3,3,2,2,1,4,4,3,3,2,2,1,  0,0,4,4,5,5,4,3,3,2,2,1,1,0];
var tempo4 = [2,2,2,2,2,2,4,2,2,2,2,2,2,3,  2,2,2,2,2,2,4,2,2,2,2,2,2,3,  2,2,2,2,2,2,4,2,2,2,2,2,2,3];

var note5 = [7,7,5,6,4,7,7,5,6,4,7,7,6,5,4,3,1,  6,6,5,4,3,1,1,2,3,4,4,3,2,1,0];
var tempo5 =[1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,  1,2,1,1,1,1,2,1,1,1,2,1,1,1,2];

$('.note').click(function() {
  var num = parseInt(this.id);
  play(num);
  newnote.push(num);
  newtempo.push();
});

document.querySelector('html').addEventListener("keyup",function(e) {
  if(e.key == " "){
    var count = 0;
    for (var i = 0; i < newnote.length; i++) {
      setTimeout(function (sound) {
        play(newnote[sound]);
      }, newrhythm(i) * 350, i);
    }
  }
});

$('#btn1').click(function() {
  var count = 0;
  for(var i= 0; i < note1.length; i++) {
    setTimeout(function(sound) {
      play(note1[sound]);
    }, rhythm1(i) * 350, i);
  }
});

$('#btn2').click(function() {
  var count = 0;
  for(var i= 0; i < note2.length; i++) {
    setTimeout(function(sound) {
      play(note2[sound]);
    }, rhythm2(i) * 350, i);
  }
});

$('#btn3').click(function() {
  var count = 0;
  for(var i= 0; i < note3.length; i++) {
    setTimeout(function(sound) {
      play(note3[sound]);
    }, rhythm3(i) * 350, i);
  }
});

$('#btn4').click(function() {
  var count = 0;
  for(var i= 0; i < note4.length; i++) {
    setTimeout(function(sound) {
      play(note4[sound]);
    }, rhythm4(i) * 350, i);
  }
});

$('#btn5').click(function() {
  var count = 0;
  for(var i= 0; i < note5.length; i++) {
    setTimeout(function(sound) {
      play(note5[sound]);
    }, rhythm5(i) * 350, i);
  }
});

function play(num) {
  notes[num].pause();
  notes[num].currentTime = 0;
  notes[num].play();
  $("#" + num).css({
    "font-weight": "bold",
    "color": "#FCFBE3"
  });
  setTimeout(function() {
    $("#" + num).css({
      "font-weight": "normal",
      "color": "#3a2f21"
    });
  }, 300);
}

function newrhythm(num) {
  var count = 0;
  for (var i = 0; i < num ; i++) {
    count = count + newtempo[i];
  }
  return count;
}

function rhythm1(num) {
  var count = 0;
  for (var i = 0; i < num ; i++) {
    count = count + tempo1[i];
  }
  return count;
}

function rhythm2(num) {
  var count = 0;
  for (var i = 0; i < num ; i++) {
    count = count + tempo2[i];
  }
  return count;
}

function rhythm3(num) {
  var count = 0;
  for (var i = 0; i < num ; i++) {
    count = count + tempo3[i];
  }
  return count;
}

function rhythm4(num) {
  var count = 0;
  for (var i = 0; i < num ; i++) {
    count = count + tempo4[i];
  }
  return count;
}

function rhythm5(num) {
  var count = 0;
  for (var i = 0; i < num ; i++) {
    count = count + tempo5[i];
  }
  return count;
}