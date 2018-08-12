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
