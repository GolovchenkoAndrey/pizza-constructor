//что то должно быть
$(document).ready(function () {

    //стиль для кжадого размера
    function cssSize(type) {

        var cssSize;

        if (type == 'sX') {
            cssSize = {'background-position': '50% -47px'};
        } else if (type == 'sXL') {
            cssSize = {'background-position': '50% -56px'};
        } else if (type == 'sXXL') {
            cssSize = {'background-position': '50% -66px'};
        }
        return cssSize
    }

    //запоминаем выбор для отоюражения (по умолчанию первый)
    var doughPizzaCss = 't1',
        sizePizza = 'sXXL',
        souchPizza = 'souch1';

    //оставляем только средний размер у ход-догов + выделяем нажатие
    $('.type-dough').on('click', function () {

        doughPizzaCss = $(this).attr('id');

        //отображаем названия выбранного елемента
        $('.js-label-dough').text($(this).attr('data-value'));

        //1 - americano / 2 - italiano
        if (doughPizzaCss == 't1' || doughPizzaCss == 't2') {

            //отображаем названия выбранного елемента
            $('.js-label-cake').text($('#' + sizePizza).attr('data-value'));

            //окрашиваем вбыранный елемент
            $('.type-dough').css({'opacity': '.5'});
            $(this).css({'opacity': '1'});

            //возвращаем размеры и окраску
            $('.size').css({
                'display': 'inline-block',
                'background-position': ''
            });
            $('#' + sizePizza).css(cssSize(sizePizza));

            //3 - hot-dog
        } else {

            //отображаем названия выбранного елемента
            $('.js-label-cake').text($('#sXL').attr('data-value'));

            //окрашиваем вбыранный елемент
            $('.type-dough').css({'opacity': '.5'});
            $(this).css({'opacity': '1'});

            //оставляем только средний размер + красим его
            $('.size').css({'display': 'none'});
            $('.label-mid').css({
                'display': 'inline-block',
                'background-position': '50% -56px'
            });
        }
    });

    //ставим окраску выбора размера пиццы
    $('.size').on('click', function () {

        sizePizza = $(this).attr('id');

        //отображаем названия выбранного елемента
        $('.js-label-cake').text($(this).attr('data-value'));

        //окрашиваем
        $('.size').css({'background-position': ''});

        switch ($(this).attr('id')) {
            case 'sX':
                $(this).css(cssSize(sizePizza));
                break;
            case 'sXL':
                $(this).css(cssSize(sizePizza));
                break;
            case 'sXXL':
                $(this).css(cssSize(sizePizza));
                break;
        }
    });

    //ставим окраску выбора соуса
    $('.sauce').on('click', function () {

        souchPizza = $(this).attr('id');

        //отображаем названия выбранного елемента
        $('.js-label-souch').text($(this).attr('data-value'));

        //окрашиваем вбыранный елемент
        $('.sauce').css({'opacity': '.5'});
        $(this).css({'opacity': '1'});

    });

});

