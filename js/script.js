(function() {

  var mainNav = document.querySelector(".main-nav");
  var toggleNav = document.querySelector(".page-header__open-nav");
  var closeNav = document.querySelector(".page-header__close-nav");

  var toggleSearchForm = document.querySelector(".book__search-link");
  var bookSearchForm = document.querySelector(".book__search");

  toggleNav.addEventListener("click", function(e) {

    e.preventDefault();

    if ( mainNav.classList.contains("main-nav--closed") ) {
      mainNav.classList.remove("main-nav--closed");
      mainNav.classList.add("main-nav--opened");
    } else {
      mainNav.classList.remove("main-nav--opened");
      mainNav.classList.add("main-nav--closed");
    }

  });

  closeNav.addEventListener("click", function(e) {

    e.preventDefault();

    if ( mainNav.classList.contains("main-nav--opened") ) {
      mainNav.classList.remove("main-nav--opened");
      mainNav.classList.add("main-nav--closed");
    }

  });

  toggleSearchForm.addEventListener("click", function(e) {

    e.preventDefault();

    // if ( bookSearchForm.classList.contains("book__search--closed") ) {
      bookSearchForm.classList.toggle("book__search--closed");
    // }

  });

})();