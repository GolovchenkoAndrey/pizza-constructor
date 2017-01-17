//что то должно быть
$(document).ready(function () {

    //оставляем только средний размер у ход-догов + выделяем нажатие
    $('.item-oplabel').on('click', function () {
        switch ($(this).attr('for')) {
            //1 - americano / 2 - italiano
            case 't1':
            case 't2':
                $('.item-oplabel').css({'opacity': '.5'});
                $(this).css({'opacity': '1'});
                $('.item-grlabel').css({
                    'display': 'inline-block'
                });
                break;
            //3 - hot-dog
            case 't3':
                $('.item-grlabel').css({'display': 'none'});
                $(this).css({'opacity': '1'});
                $('.label-mid').css({
                    'display': 'inline-block',
                    'background-position': '50% -56px'
                });
                break;
        }
    });

    //ставим окраску у выбра размера


});