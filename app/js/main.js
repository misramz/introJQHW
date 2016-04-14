
//Register a Click in the sections
$('section').click(function(event) {
// how to figure out what area was clicked
  var area = $(event.target);
console.log(area[0].innerHTML);
  console.log(area);
});

//How to Hide 2 out of 3 of them but must locate first
var section = $(area).parent();
var para = $(section).children('p')

var shown = body[0].className.includes('shown')

function hideEverything () {
    $(section).siblings().children('p').addClass('hidden').removeClass('shown');}

    if (shown) {
// if it is shown, hide it
  console.log('it was already shown, so we hid it');
  $(para).addClass('hidden');
  $(para ).removeClass('shown');
} else {
// if it's hidden, show it
  console.log('it was hidden, so we showed it');
  console.log('call the hideEverything function');
  hideEverything();
  console.log('now add shown back to the one I want');
  $(body).addClass('shown');
  $(body).removeClass('hidden');
}
​





//code to cause movement
