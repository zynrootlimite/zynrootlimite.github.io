/**
 * Created by hehua on 2016/7/25.
 */
$(document).ready(function() {
    $('ul.sf-menu').sooperfish();
    $('.top').click(function() {$('html, body').animate({scrollTop:0}, 'fast'); return false;});

    $(window,document).scroll(function(){
        if(getScrollTop()>=180){
            $('nav').attr('id','scroll-active');
        }else if(getScrollTop()>=100){
            $('nav').attr('id','');
        }
    });

    function getScrollTop() {
        var scrollPos; if (window.pageYOffset) {
            scrollPos = window.pageYOffset;
        }
        else if (document.compatMode && document.compatMode != 'BackCompat')
        {
            scrollPos = document.documentElement.scrollTop; }
        else if (document.body)
        {
            scrollPos = document.body.scrollTop; }
        return scrollPos;
    }
});
