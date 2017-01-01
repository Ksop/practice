(function() {
  'use strict';

  var mainNav = document.querySelector(".main-nav");
  var toggleNav = document.querySelector(".page-header__open-nav");
  var closeNav = document.querySelector(".page-header__close-nav");

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



  (function() {
    var formToggler = document.querySelector(".booking__search-link");
    var formContainer = document.querySelector(".booking__search");

    formToggler.addEventListener("click", function(e) {
      e.preventDefault();
      formContainer.classList.toggle("booking__search--closed");
    });
    

    formContainer.addEventListener('click', setInputVal);

    function setInputVal(e) {
      var target = e.target;
      var operation;
      var input;

      while(target.className !== 'booking__search') {
        if (target.className === 'counter__btn') { break; }
        target = target.parentNode;
      }

      if (target.className === 'booking__search') { return; }

      operation = target.dataset.operation;
      input = target.parentNode.querySelector('input');

      if(isNaN(input.value) || input.value < 0){
        input.value = 0;
      }

      if (operation === 'plus') {
        input.value = +input.value + 1;
      } else {
        if (input.value - 1 >= 0) 
          input.value = +input.value - 1;       
      }
    }
  })();



  var map = document.querySelector("#map");

  map.addEventListener('click', function(){
    document.querySelector("#map iframe").classList.remove('scroll-off');
  });

  map.addEventListener('mouseleave', function(){
    document.querySelector("#map iframe").classList.add('scroll-off');
  });

})();