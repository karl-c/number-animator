var a = 0;

// Function to add the comma seperators from the original design image
function toCommas(number){
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$(window).scroll(function() {

  // Added offset in px. For example, setting this to 100 means you need to scroll an extra 100px from when the top of the div is in frame to start the animation.
  var optionalOffset = 165;

  // #counter is used to determine the top of the stats container
  var oTop = $('#counter').offset().top - window.innerHeight - -optionalOffset;

  if (a == 0 && $(window).scrollTop() > oTop) {

    // For each of the counter-value class elements:
    var span = $("#counter").find(".counter-value");
    span.each(function() {

      var $this = $(this);
      var countTo = $this.attr('data-count');

      $({countNum: $this.text()}).animate({
        countNum: countTo
      },{

          duration: 1500, // Duration (in ms) of the counter
          easing: 'swing', // Easing
          step: function() {
            var newNum = toCommas(Math.floor(this.countNum));
            $this.text(newNum);
          },
          complete: function() {
            $this.text(toCommas(this.countNum));
          }

        });
    });
    a = 1;
  }
});
