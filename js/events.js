//define functions here
function getIt() {
  $('p').on('click', function(e) {
    alert('Hey!');
  })
}

function frameIt() {
  $('img').on('load', function(f) {
    $(this).addClass('tasty');
  });
}

function pressIt() {
  $('#typing').on('keydown', function(g) {
    if(g.which == 70) {
      alert('G was pressed');
    }
  }, false); //false as 3rd param => will not alert ELSE IF another key!
}
pressIt();

$(document).ready(function(){

getIt();
frameIt();
pressIt();

});
