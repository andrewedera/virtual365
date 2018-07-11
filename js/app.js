$(document).ready(function() {
    Pace.on("done", function(){
      $(".cover").fadeOut(2000);
    });
    $(".navbar-burger ").click(function() {
      $(".navbar-burger ").toggleClass("is-active ");
      $(".navbar-menu ").toggleClass("is-active ");
    });
    var typed2 = new Typed('#typed', {
      strings: ['<span class="subtitle is-block is-size-3 has-text-weight-semibold">LOREM IPSUM</span><h1 class="title">DOLOR SIT AMET...</h1>'],
      fadeOut: true,
      typeSpeed: 120,
      showCursor: false
    });
});