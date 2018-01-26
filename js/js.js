$(document).ready(function() {


    // Масонри

    

    $('.grid').masonry({
        // options
        itemSelector : '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        transitionDuration: 0
    }).masonry('reload');

    var $container = $('.grid');
    $container.imagesLoaded(function(){
      $container.masonry({
            itemSelector : '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true,
            transitionDuration: 0
      });
    });


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

