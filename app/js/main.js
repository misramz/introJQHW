
var paras = $('.container').children('p');


//Register a Click in the sections
$('section').click(function(event) {
// how to figure out what area was clicked
  var section = $(this);

  paras.addClass('hidden').removeClass('shown');

  var myPara = section.next('p');

  myPara.addClass('shown').removeClass('hidden');




  //
  //
  //
  // var container = $(section).parent();
  // var para = $(container).children('p')
  //
  // var shown = para[0].className.includes('shown');
  // //How to Hide 2 out of 3 of them but must locate first
  //
  // function hideEverything () {
  //   $(para).next().siblings().children().addClass('hidden').removeClass('shown');}
  //
  //   if (shown) {
  //     // if it is shown, hide it
  //
  //     $(para).addClass('hidden');
  //     $(para ).removeClass('shown');
  //   } else {
  //     // if it's hidden, show it
  //
  //     hideEverything();
  //
  //     $(para).addClass('shown');
  //     $(para).removeClass('hidden');
  //   }
});






//code to cause movement
