$(document).ready(function() {


    // Масонри

    var $container = $('.grid');
    $container.imagesLoaded(function(){
      $container.masonry({
            itemSelector : '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
      });
    });

    $('.grid').masonry({
        // options
        itemSelector : '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    }).masonry('reload');


    // Фильтрация

    // $('.grid').isotope({
    //   // options
    //   itemSelector: '.grid-item',
    //   layoutMode: 'fitRows'
    // });
    
    // var $grid = $('.grid').isotope({
    //   // options
    // });
    // // filter items on button click
    // $('.filter__group').on( 'click', 'button', function() {
    //     var filterValue = $(this).attr('data-filter');
    //     $grid.isotope({ filter: filterValue }).masonry('reload');
    // });

    
    // // Кнопки фильтрации

    // $('button').click(function() {
    //     $('button').removeClass('filter__button_checked'),
    //     $(this).addClass('filter__button_checked')
    // });


});

