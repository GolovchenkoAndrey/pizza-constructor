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

    //стиль табов
    function cssFootTab(type) {

        var cssTab;

        switch (type) {
            case '#tab-1' :
                cssTab = {'background-position': '-100px -42px'};
                break;
            case '#tab-2' :
                cssTab = {'background-position': '-50px -42px'};
                break;
            case '#tab-3' :
                cssTab = {'background-position': '-248px -42px'};
                break;
            case '#tab-4' :
                cssTab = {'background-position': '-198px -42px'};
                break;
            case '#tab-5' :
                cssTab = {'background-position': '-346px -42px'};
                break;
        }

        return cssTab;
    }

    function listFootTab(type) {

        var listTab;

        switch (type) {
            case '#tab-1' :
                listTab = 'seafood';
                break;
            case '#tab-2' :
                listTab = 'meat';
                break;
            case '#tab-3' :
                listTab = 'vegetables';
                break;
            case '#tab-4' :
                listTab = 'cheese';
                break;
            case '#tab-5' :
                listTab = 'sauce-ingridient';
                break;
        }

        return listTab;
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

        $(this).css(cssSize(sizePizza));

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


    //футер - отображение по табам
    $('.js-tab-item').on('click', function () {

        //обнуляем цвет
        $('.js-tab-item').css({'background-position': ''});

        //закрашиваем выбранный
        var footerTab = $(this).attr('href');
        $(this).css(cssFootTab(footerTab));

        // отображаем вложенность по табам
        $('.list').children().css({'display': 'none'});
        $('.' + listFootTab(footerTab)).css({
            'display': 'flex',
            'flex-direction': 'row'
        });

    });


    //перебросы в заказ
    $('.size-img-ingridient').on('click', function () {
        test = $(this)
        var className = $(this).attr("class");
        parName = $(this).parent();
        $(this).parent().children().each(function (index) {
            if ($(this).attr("class") == className) {
                positionElem = index
            }
        });

        $(this).appendTo('.filling')
    })

    //
    $('.js-composition-item-dec').on('click', function () {
        console.log('parName ', parName)
        console.log('positionElem ', positionElem)
        console.log('test ', test)
        console.log($(parName).eq(positionElem))


        $(test).appendTo($(parName).eq(positionElem))
    })


});