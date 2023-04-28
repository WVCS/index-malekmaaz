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
