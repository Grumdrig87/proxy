jQuery(document).ready(function($) {
  // burger
  $('[data-burger]').click(function() {
    $('html').toggleClass("open");
    $(this).toggleClass("open");
    $('[data-nav]').toggleClass("open");
    $('body').toggleClass('open');
});
// scroll top
  $('[data-scoll]').on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  //adaptive
  if ($(window).width() < 994) {
    $('[data-topmenu] ul li').each(function(){
      $(this).appendTo('[data-nav] ul');
    })
  }
  if ($(window).width() < 769) {
    $('.header__top-contacts').appendTo('[data-nav]');
  }
  //slider
  if (jQuery('[data-mainslider]').length > 0) {
      $('[data-mainslider]').slick({
          dots: false,
          speed: 300,
          arrows: false,
          slidesToShow: 1,
          variableWidth: true
      });
      if ($(window).width() < 994) {
        $('[data-mainslider]').slick('unslick');
        $('[data-mainslider]').slick({
          dots: false,
          speed: 300,
          arrows: false,
          slidesToShow: 1,
          variableWidth: false
      });
      }
  }
  if (jQuery('[data-movie]').length > 0) {
    $('[data-movie]').slick({
        dots: false,
        speed: 300,
        slidesToShow: 4,
        infinite: true,
        prevArrow: '[data-movieprev]',
        nextArrow: '[data-movienext]',
        responsive: [{
            breakpoint: 994,
            settings: {
                slidesToShow: 2
            }
        },{
            breakpoint: 577,
            settings: {
                slidesToShow: 1
            }
        } ]
    });
}
if (jQuery('[data-recomend]').length > 0) {
  $('[data-recomend]').slick({
      dots: false,
      speed: 300,
      slidesToShow: 4,
      infinite: true,
      prevArrow: '[data-recomprev]',
      nextArrow: '[data-recomnext]',
      responsive: [{
          breakpoint: 994,
          settings: {
              slidesToShow: 3
          }
      },{
          breakpoint: 769,
          settings: {
              slidesToShow: 2
          }
      },{
        breakpoint: 577,
        settings: {
            slidesToShow: 1
        }
    } ]
  });
}
if (jQuery('[data-eat]').length > 0) {
  $('[data-eat]').slick({
      dots: false,
      speed: 300,
      slidesToShow: 1,
      infinite: true,
      prevArrow: '[data-eatprev]',
      nextArrow: '[data-eatnext]',
      // responsive: [{
      //     breakpoint: 768,
      //     settings: {
      //         slidesToShow: 1
      //     }
      // }, ]
  });
}
  $('[data-florselect]').select2({
    width: '274',
    placeholder: 'Какой этаж',
    dropdownCssClass: 'select__dropdown',
    minimumResultsForSearch: Infinity,
    dropdownParent: $('[data-florparent]')
  })
  $('[data-shopsselect]').select2({
    width: '274',
    placeholder: 'Все магазины',
    dropdownCssClass: 'select__dropdown',
    minimumResultsForSearch: Infinity,
    dropdownParent: $('[data-shopparent]')
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


  var label = $(".quest__form.active [data-input]").parent().find('label span').each(function() {$(this).text()});
  var labelText = $("[data-text]").parent().find('label span').each(function() {$(this).text()});
     // tabs
     $('[data-contacts]').on('click', function() {
      $(this).addClass('active').siblings().removeClass('active')
        .closest('.quest__wrap').find('.quest__form').removeClass('active').eq($(this).index()).addClass('active');
        $(this).closest('.quest').find('.quest__title').removeClass('active').eq($(this).index()).addClass('active');
        label = $(".quest__form.active [data-input]").parent().find('label span').each(function() {$(this).text()});
      });
  
  $("[data-input]").change(function (){
    $(this).each(function(){
      input = $(this).val();
      var parent = $(this).parent().index();
      if(input) {
        $(this).parent().find('label').html(label[parent]);
        $(this).parent().removeClass('alert');
        $(this).parent().find('label').addClass('checked')
      } else {
        $(this).attr('placeholder','');
        $(this).parent().find('label').removeClass('checked')
      }
    });
  });
  $("[data-text]").change(function (){
    $(this).each(function(){
      input = $(this).val();
      var parent = $(this).parent().index();
      if(input) {
        $(this).parent().find('label').html(labelText[parent]);
        $(this).parent().removeClass('alert');
        $(this).parent().find('label').addClass('checked')
      } else {
        $(this).attr('placeholder','');
        $(this).parent().find('label').html(labelText[parent]);
        $(this).parent().find('label').removeClass('checked')
      }
    });
  });
  function requ(){
    input = $(this).val();
    if(!input) {
      $(this).parent().addClass('alert');
      $(this).parent().find('label').text('Ошибка заполнения');
      $(this).attr('placeholder','Обязательное поле')
    } else {
      $(this).parent().removeClass('alert');
      $(this).attr('placeholder','')
    }
  };
  $("[data-subm]").click(function(){
    $("[data-input]").each(requ);
    $("[data-text]").each(requ);
  });
  //upload
  if ($('[data-att]').length > 0) {
    $('[data-att]').on('change', function() {
      $('[data-fname]').text(this.files[0].name);
    });
  }
});