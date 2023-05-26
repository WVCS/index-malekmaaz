window.onscroll = function () {
  hideFunction();
};

function hideFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
    document.getElementById("topBtn").classList.add("show");
  else document.getElementById("topBtn").classList.remove("show");
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
    var target = $($(this).attr('href'));
    if (target.length) {
      event.preventDefault();
      if ($(this).attr('href') === '#topBtn') {
        $('html, body').animate({
          scrollTop: 0 // Scroll to the top of the page
        }, 1); // Adjust the scrolling duration as desired
      } else {
        $('html, body').animate({
          scrollTop: target.offset().top - 82 // Adjust the offset as needed
        }, 1); // Adjust the scrolling duration as desired
      }
    }
  });
});

