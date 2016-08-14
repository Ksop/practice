(function() {

  var mainNav = document.querySelector(".main-nav");
  var toggleNav = document.querySelector(".page-header__open-nav");
  var closeNav = document.querySelector(".page-header__close-nav");

  toggleNav.addEventListener("click", function() {

    if ( mainNav.classList.contains("main-nav--closed") ) {
      mainNav.classList.remove("main-nav--closed");
      mainNav.classList.add("main-nav--opened");
    } else {
      mainNav.classList.remove("main-nav--opened");
      mainNav.classList.add("main-nav--closed");
    }

  });

  closeNav.addEventListener("click", function() {

    if ( mainNav.classList.contains("main-nav--opened") ) {
      mainNav.classList.remove("main-nav--opened");
      mainNav.classList.add("main-nav--closed");
    }

  });

})();