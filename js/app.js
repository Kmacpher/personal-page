
$(document).ready(function() {
  $('.scrollspy').scrollSpy();

  $( "#contact-form" ).submit(function( event ) {
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var content = $("#content").val();
  });

})

