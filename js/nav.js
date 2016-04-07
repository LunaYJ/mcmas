/**
 * Created by Lu on 2015/9/1.
 */
$(function(){
    $("#caseNavIcon").on('click', function () {
        $(this).parent().next().find('ul').toggle();
    });
    $('#navIcon').on('click', function(e){
        e.stopPropagation();
        if($('#header .nav').is('.nav-open')){
            $('#header .nav').removeClass('nav-open').stop().animate({'height':0}, 200);
        }else{
            $('#header .nav').addClass('nav-open').stop().animate({'height':60}, 200);
        }
    });
    $(window).on('click', function () {
        $('.nav-open').removeAttr('style').removeClass('nav-open');
    });
    $('#footer .wrapper .contact .a2').on('touchend', function(){
        $('b', this).toggle();
    })

})