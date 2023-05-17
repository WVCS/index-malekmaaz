const imageContainers = document.querySelectorAll('.image-container');
const cartLink = document.querySelector('#cart-link');
const cartWindow = document.querySelector('#cart-window');
const cartCloseBtn = document.querySelector('#cart-close-btn');

imageContainers.forEach(imageContainer => {
  const originalImage = imageContainer.querySelector('.original-image');
  const hoverImage = imageContainer.querySelector('.hover-image');

  imageContainer.addEventListener('mouseover', () => {
    originalImage.style.opacity = 0;
    hoverImage.style.opacity = 1;
  });

  imageContainer.addEventListener('mouseout', () => {
    originalImage.style.opacity = 1;
    hoverImage.style.opacity = 0;
  });

  imageContainer.addEventListener('click', () => {
    openCartWindow();
  });
});



cartLink.addEventListener('click', () => {
  openCartWindow();
});

cartCloseBtn.addEventListener('click', () => {
  closeCartWindow();
});

document.addEventListener('click', (event) => {
  if (!cartWindow.contains(event.target) && !cartLink.contains(event.target)) {
    closeCartWindow();
  }
});

function openCartWindow() {
  cartWindow.style.display = 'block';
  cartWindow.classList.remove('fade-out');
  cartWindow.style.opacity = '0';
  setTimeout(() => {
    cartWindow.style.opacity = '1';
  }, 10);
}

function closeCartWindow() {
  cartWindow.style.opacity = '0';
  cartWindow.classList.add('fade-out');
  setTimeout(() => {
    cartWindow.style.display = 'none';
  }, 300);
}



function autocomplete(inp, arr) {

  var currentFocus;

  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;

      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;

      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");

      this.parentNode.appendChild(a);

      for (i = 0; i < arr.length; i++) {

        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {

          b = document.createElement("DIV");

          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);

          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

          b.addEventListener("click", function(e) {

              inp.value = this.getElementsByTagName("input")[0].value;

              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });

  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) { //up
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {

    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

var autoAnswers = ["Hydration Line", "Energy Line"];

autocomplete(document.getElementById("myInput"), autoAnswers);
