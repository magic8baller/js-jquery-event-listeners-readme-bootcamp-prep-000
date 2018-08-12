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
      return;
    }
  })
}
