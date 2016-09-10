(function() {

  var mainNav = document.querySelector(".main-nav");
  var toggleNav = document.querySelector(".page-header__open-nav");
  var closeNav = document.querySelector(".page-header__close-nav");

  var toggleSearchForm = document.querySelector(".book__search-link");
  var bookSearchForm = document.querySelector(".book__search");

  var map = document.querySelector("#map");

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

      bookSearchForm.classList.toggle("book__search--closed");
  });

  map.addEventListener('click', function(){
    document.querySelector("#map iframe").classList.remove('scroll-off');
  });

  map.addEventListener('mouseleave', function(){
    document.querySelector("#map iframe").classList.add('scroll-off');
  });  

  // var map = $('#map');

  // map.on('click', function() {
  //   $('#map iframe').removeClass('scroll-off');
  // });

  // $('#map').mouseleave(function () {
  //   $('#map iframe').addClass('scroll-off');
  // });

})();