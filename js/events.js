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
//bind event handler to input field!
function pressIt() {
  $('#typing').keydown(function(g) {
    if(g.which == 70) {
      alert('G was pressed');
    }
  })
}
