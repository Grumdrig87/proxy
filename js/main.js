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
  if (jQuery('[data-shortrev]').length > 0) {
    jQuery('[data-shortrev]').readmore({
      collapsedHeight: 80,
      moreLink: '<a href="#">Full text <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" fill="none"><path d="M1.707.293A1 1 0 1 0 .293 1.707L1.707.293zM5 5l-.707.707a1 1 0 0 0 1.414 0L5 5zm4.707-3.293A1 1 0 1 0 8.293.293l1.414 1.414zm-9.414 0l4 4 1.414-1.414-4-4L.293 1.707zm5.414 4l4-4L8.293.293l-4 4 1.414 1.414z" fill="#000"/></svg></a>',
      lessLink: '<a href="#">Close <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" fill="none"><path d="M1.707.293A1 1 0 1 0 .293 1.707L1.707.293zM5 5l-.707.707a1 1 0 0 0 1.414 0L5 5zm4.707-3.293A1 1 0 1 0 8.293.293l1.414 1.414zm-9.414 0l4 4 1.414-1.414-4-4L.293 1.707zm5.414 4l4-4L8.293.293l-4 4 1.414 1.414z" fill="#000"/></svg></a>'
    });
}
if (jQuery('[data-rev]').length > 0) {
  jQuery('[data-rev]').readmore({
    collapsedHeight: 351,
    moreLink: '<a href="#" class="btn btn__char">all characteristics <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" fill="none"><path d="M1.707.293A1 1 0 1 0 .293 1.707L1.707.293zM6 6l-.707.707a1 1 0 0 0 1.414 0L6 6zm5.707-4.293a1 1 0 0 0 0-1.414 1 1 0 0 0-1.414 0l1.414 1.414zm-11.414 0l5 5 1.414-1.414-5-5L.293 1.707zm6.414 5l5-5L10.293.293l-5 5 1.414 1.414z" fill="#000"/></svg></a>',
    lessLink: '<a href="#" class="btn btn__char">Less characteristics <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" fill="none"><path d="M1.707.293A1 1 0 1 0 .293 1.707L1.707.293zM6 6l-.707.707a1 1 0 0 0 1.414 0L6 6zm5.707-4.293a1 1 0 0 0 0-1.414 1 1 0 0 0-1.414 0l1.414 1.414zm-11.414 0l5 5 1.414-1.414-5-5L.293 1.707zm6.414 5l5-5L10.293.293l-5 5 1.414 1.414z" fill="#000"/></svg></a>'
  });
}
  //faq

  jQuery('[data-faq]').click(function(){
    jQuery(this).toggleClass('active');
    jQuery(this).find('p').slideToggle(300);
  })
  // upload

  if ($('[data-file]').length > 0) {
    $('[data-file]').on('change', function() {
      var fileBuffer=[];
      Array.prototype.push.apply( fileBuffer, $('[data-file]').get(0).files );
      var name_file = []; 
        for(var i = 0; i < $(this).get(0).files.length; ++i) {
          name_file.push($(this).get(0).files[i].name);
          name_file[i] =  '<span>' + name_file[i] + '<span class="del"></span></span>';
        } 
        $("[data-upload]").html(name_file); 
        $('span.del').click(function(){
          $(this).parent().hide();
          var spanId = $(this).parent().index();
          for(var i = 0; i < fileBuffer.length; ++i) {
            delete fileBuffer[spanId];
          } 
        })
    });
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
  jQuery('[data-btnhide]').click(function(){
    jQuery('[data-summaryhide]').slideToggle(300);
    jQuery(this).toggleClass('active');
    if (jQuery(this).hasClass('active')) {
      jQuery('[data-btnhide] span').text('Hide');
    } else {
      jQuery('[data-btnhide] span').text('Show details');
    }
  })
  $('[data-table]').click(function(){
    $(this).toggleClass('open');
    $(this).closest('.top__table-item').find('[data-tableinfo]').toggleClass('active');
  })
  // tabs
  $('[data-revtabs]').on('click', function() {
      $(this).addClass('active').siblings().removeClass('active')
        .closest('.review-info__forms').find('.review-info__form').removeClass('active').eq($(this).index()).addClass('active');
      });

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
     //nav
    if ($(window).width() > 993) {
      $('[data-nav] > ul >li').hover(function() {
          $(this).each(function() {
              $('[data-nav] li').toggleClass('transp');
          });
          $(this).removeClass('transp');
          if ($(this).hasClass('menu-item-has-children')) {
            $('body').toggleClass('open');
          }
      });
  }
  if ($(window).width() < 993) {
      $('[data-nav] .menu-item-has-children > a').click(function() {
          return false;
      })
  }

    if ($(window).width() > 993) {
      if ($('[data-cattable]').length > 0) {
        var offsetTable = $('[data-cattable]').offset().top;
        var offsetCont = $('[data-offsetcont]').offset().top;
        var tableHeight = $('[data-cattablein]').height();
        $('[data-cattable]').css({'height': tableHeight});
        $('[data-cattablein]').css({'top': offsetTable - offsetCont});
      }
        function slide (aside,section,padding) {
            var sidebar = $(aside);
            if (sidebar.length > 0) {
                var offset = sidebar.offset(),
                    topPadding = padding,
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
            slide ("[data-teamaside]","[data-team]",100);
        }
        if ($('[data-howaside]').length > 0) {
            slide ("[data-howaside]","[data-how]",100);
        }
        if ($('[data-foraside]').length > 0) {
            slide ("[data-foraside]","[data-for]",100);
        }
        if ($('[data-whataside]').length > 0) {
            slide ("[data-whataside]","[data-what]",100);
        }
        if ($('[data-idealaside]').length > 0) {
            slide ("[data-idealaside]","[data-ideal]",100);
        }
        if ($('[data-textaside]').length > 0) {
          slide ("[data-textaside]","[data-text]",30);
        }
        if ($('[data-inpager]').length > 0) {
          slide ("[data-inpager]","[data-inpagel]",100);
      }
    }
});