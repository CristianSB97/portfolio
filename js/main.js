$(document).ready(function(){
    let $btns = $('.project-area .button-group button');

    $btns.click(function(e){
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .flex-container').isotope({
            filter : selector
        });

        return false;

    })
});