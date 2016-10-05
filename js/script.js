(function() {

  var mainNav = document.querySelector(".main-nav");
  var toggleNav = document.querySelector(".page-header__open-nav");
  var closeNav = document.querySelector(".page-header__close-nav");

 
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



  var toggleSearchForm = document.querySelector(".booking__search-link");

  toggleSearchForm.addEventListener("click", function(e) {
    e.preventDefault();
    var bookSearchForm = document.querySelector(".booking__search");
    
    bookSearchForm.classList.toggle("booking__search--closed");
  });



  //"+" and "-" buttons for adult counter and children counter
  var adultBtnMinus = document.querySelector('.js-adult-btn-minus');
  var adultBtnPlus = document.querySelector('.js-adult-btn-plus');
  var childrenBtnMinus = document.querySelector('.js-children-btn-minus');
  var childrenBtnPlus = document.querySelector('.js-children-btn-plus');

  function manCounter(operation, manType) {

    var input = document.getElementById(manType);

    if(isNaN(input.value) || input.value < 0) 
      input.value = 0;

    if (operation == "plus") {      
      input.value++;     
      return input.setAttribute('value', input.value);      
    } 
    else {      
      if (input.value - 1 >= 0) 
        input.value--;      

      return input.setAttribute('value', input.value);
    }

  }

  /* 
  так как у нас 2 счетчика - для взрослых и для детей,
  то при вызове manCounter, передаем в качестве параметров
  операцию и идентификатор нужного нам инпута.
  */
  adultBtnMinus.addEventListener('click', function(e) {
    e.preventDefault();
    return manCounter('minus', 'adults');
  });

  adultBtnPlus.addEventListener('click', function(e) {
    e.preventDefault();
    return manCounter('plus', 'adults');
  });

  childrenBtnPlus.addEventListener('click', function(e) {
    e.preventDefault();
    return manCounter('plus', 'children');
  });

  childrenBtnMinus.addEventListener('click', function(e) {
    e.preventDefault();
    return manCounter('minus', 'children');
  });



  map.addEventListener('click', function(){
    document.querySelector("#map iframe").classList.remove('scroll-off');
  });

  map.addEventListener('mouseleave', function(){
    document.querySelector("#map iframe").classList.add('scroll-off');
  });

})();