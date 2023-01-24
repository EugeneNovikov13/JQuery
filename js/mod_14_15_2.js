$('.arrow').click(function(){
    $(this).toggleClass('.arrow_left');
    if ($(this).hasClass('.arrow_left')) {
        $('.left_side').animate({width: '0%'}, 1000);
        $('.right_side').animate({width: '100%'}, 1000);
        $(this).html('►');
    }
    else {
        $('.right_side').animate({width: '70%'}, 1000);
        $('.left_side').animate({width: '30%'}, 1000);
        $(this).html('◄');
    }
})
let dragedBlock;
$('.up_down').mousedown(function () {dragedBlock = $(this)});
$('body').mouseup(function () {dragedBlock = 0}).mousemove(slideBlocks)

function slideBlocks(e) {
    e.preventDefault();
    if (dragedBlock && e.pageY > 100 && e.pageY < (window.innerHeight - 100)) {
        dragedBlock.parent().css('height', window.innerHeight - e.pageY);
        dragedBlock.parent().prev().css('height', e.pageY);
    }
}

$('.container:eq(1)').prepend('<p class="text-center"><strong>Photo titles:</strong> '+$('.column img').map(function(ind, elem){
return $(elem).attr('alt');
}).get().join(', ')+'</p>');