$(document).ready(function () {

    //оставляем только средний размер у ходдогов
    $('.item-oplabel').on('click', function () {
        switch ($(this).attr('for')) {
            case 't1':
            case 't2':
                $('.label-large').css({'display': 'inline-block'});
                $('.label-small').css({'display': 'inline-block'});
                $('.label-mid').css({'background-position': ''});
                break;
            case 't3':
                $('.label-large').css({'display': 'none'});
                $('.label-small').css({'display': 'none'});
                $('.label-mid').css({'background-position': '50% -56px'});
                break;
        }

    });

});