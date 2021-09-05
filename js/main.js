jQuery(document).ready(function($) {
  // burger
  $('[data-burger]').click(function() {
    $('html').toggleClass("open");
    $(this).toggleClass("open");
    $('[data-nav]').toggleClass("open");
    $('body').toggleClass('open');
});
// scroll top
  // $('[data-scoll]').on("click", function (event) {
  //   event.preventDefault();
  //   var id  = $(this).attr('href'),
  //       top = $(id).offset().top;
  //   $('body,html').animate({scrollTop: top}, 1500);
  // });
  //adaptive
  // if ($(window).width() < 994) {
  //   $('[data-topmenu] ul li').each(function(){
  //     $(this).appendTo('[data-nav] ul');
  //   })
  // }
  // if ($(window).width() < 769) {
  //   $('.header__top-contacts').appendTo('[data-nav]');
  // }
  //slider
  var $slider_new = $('[data-slider-new]');
    if ($($slider_new).length > 0) {
        $($slider_new).slick({
            dots: false,
            slidesToShow: 3,
            variableWidth: true,
            infinite: true,
            arrows: false,
            speed: 300,
            centerMode: false,
            slidesToScroll: 1
        });
    }
  if (jQuery('[data-articles]').length > 0) {
      $('[data-articles]').slick({
          dots: false,
          speed: 300,
          arrows: true,
          prevArrow: '[data-prevarr]',
          nextArrow: '[data-nextarr]',
          slidesToShow: 3
      });
  }
  if (jQuery('[data-rewiew]').length > 0) {
    $('[data-rewiew]').slick({
        dots: false,
        speed: 300,
        arrows: true,
        prevArrow: '[data-prevrew]',
        nextArrow: '[data-nextrew]',
        slidesToShow: 3
    });
}
    if (jQuery('[data-lang]').length > 0) {
    $('[data-lang]').select2({
      width: '106',
      dropdownCssClass: 'select__dropdown',
      minimumResultsForSearch: Infinity,
      templateSelection: formatState
    })
  }
  // стилизация выпадающих селектов
  function formatState (state) {
    if (!state.id) {
      return state.text;
    }
  
    var baseUrl = "img";
    var $state = $(
      '<span class="lang-chose"><span class="img-lang"><img class="main__icon" /></span> <span class="val-lang"></span></span>'
    );
  
    // Use .text() instead of HTML string concatenation to avoid script injection issues
    $state.find(".val-lang").text(state.text);
    $state.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".png");
  
    return $state;
  };
  // $('[data-shopsselect]').select2({
  //   width: '274',
  //   placeholder: 'Все магазины',
  //   dropdownCssClass: 'select__dropdown',
  //   minimumResultsForSearch: Infinity,
  //   dropdownParent: $('[data-shopparent]')
  // })

  $('[data-table]').click(function(){
    $(this).toggleClass('open');
    $(this).closest('.top__table-item').find('[data-tableinfo]').toggleClass('active');
  })

   //miss click burger

    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $("[data-blkscr]"); // тут указываем ID элемента
      if (div.is(e.target)) { // и не по его дочерним элементам
        $('body').removeClass('open');
        $('html').removeClass("open");
        $('[data-burger]').removeClass("open");
        $('[data-nav]').removeClass("open");
      }
    });
    if ($(window).width() > 993) {
        function slide (aside,section) {
            var sidebar = $(aside);
            if (sidebar.length > 0) {
                var offset = sidebar.offset(),
                    topPadding = 100,
                    sidebarHeight = sidebar.height();
                $(window).scroll(function() {
                  sectHeight = $(section).height();
                    if ($(window).scrollTop() > offset.top) {
                        sidebar.stop().animate({
                            marginTop: $(window).scrollTop() - offset.top + topPadding
                        });
                    }
                    if ($(window).scrollTop() < offset.top) {
                        sidebar.stop().animate({
                            marginTop: 0
                        });
                    }
                    if ((offset.top + sectHeight - sidebarHeight-topPadding) <= $(window).scrollTop()) {
                        sidebar.stop().animate({
                            marginTop: sectHeight - sidebarHeight
                        });
                    }
                });
            }
        }
        if ($('[data-teamaside]').length > 0) {
            slide ("[data-teamaside]","[data-team]");
        }
        if ($('[data-howaside]').length > 0) {
            slide ("[data-howaside]","[data-how]");
        }
        if ($('[data-foraside]').length > 0) {
            slide ("[data-foraside]","[data-for]");
        }
        if ($('[data-whataside]').length > 0) {
            slide ("[data-whataside]","[data-what]");
        }
        if ($('[data-idealaside]').length > 0) {
            slide ("[data-idealaside]","[data-ideal]");
        }
    }
});