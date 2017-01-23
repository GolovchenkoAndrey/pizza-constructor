//что то должно быть
$(document).ready(function () {

        // получаем ингридиенты с сервера
        $.ajax({
            type: "GET",
            url: './DB/data-base.json',
            dataType: "json",
            success: function (msg) {

                //запускаем процесс
                startProc(msg);
            }
        });


        //запускаем расчеты при отработке аякса
        function startProc(ajax_msg) {

            //обьект с сервака с ингридиентами
            var objIngridient = [];
            objIngridient.push(ajax_msg);

            //добавляем данные
            var elemList = $('.list');

            for (var i = 0; i < ajax_msg.length; i++) {

                if (elemList.find('.' + ajax_msg[i].type).length === 0) {
                    elemList.append('<div class=' + ajax_msg[i].type + '></div>');
                }

                elemList.find('.' + ajax_msg[i].type).append('<span><div data-px=' + ajax_msg[i].p_x + ' data-wx=' + ajax_msg[i].w_x + ' data-pxl=' + ajax_msg[i].p_xl + ' data-wxl=' + ajax_msg[i].w_xl + ' data-pxxl=' + ajax_msg[i].p_xxl + ' data-wxxl=' + ajax_msg[i].w_xxl + ' data-name=' + ajax_msg[i].id_name + ' id= ' + ajax_msg[i].type + ' class="' + ajax_msg[i].id_name + ' size-img-ingridient TEST_TEST_TEST" data-pos=' + ajax_msg[i].pos + '>' +
                    '<img src="./upload/' + ajax_msg[i].id_name + '.jpg" class="js-cnstr-itmphoto" alt="">' +
                    '<div class="js-cnstr-itmname">' + ajax_msg[i].name + '</div>' +
                    '<div class="js-cnstr-itmprice">' +
                    '<span class="addit-item-weight data-' + ajax_msg[i].id_name + '-weight">' +
                    '<span class="val">' + ajax_msg[i].w_xxl + '</span> гр. ' +
                    '</span>' +
                    '<span class="addit-item-price data-' + ajax_msg[i].id_name + '-price">' +
                    '<span class="val">' + ajax_msg[i].p_xxl + '</span> грн. ' +
                    '</span>' +
                    '</div>' +
                    '</div>' +
                    '</span>')
            }


            //смена цены и грамов
            function sizePrice(type, typeSize) {
                $('.size-img-ingridient').find('.addit-item-' + type + '> .val').each(function () {
                    $(this).html($(this).closest($('.TEST_TEST_TEST')).attr(typeSize));
                });
            }

            function resultSize(type) {

                if (type == 'sX') {

                    resultPrice = 30;
                    resultWeight = 340;
                    $('.item-price').html(resultPrice);
                    $('.item-weight').html(resultWeight);

                    if (result) {
                        for (var i = 0; i < result.length; i++) {

                            resultPrice += +$('.' + result[i].id).attr('data-px');
                            resultWeight += +$('.' + result[i].id).attr('data-wx');
                        }
                    }

                    $('.item-price').html(resultPrice);
                    $('.item-weight').html(resultWeight);
                }
            }

            //стиль для кжадого размера
            function cssSize(type) {

                var cssSize;


                if (type == 'sX') {
                    cssSize = {'background-position': '50% -47px'};

                    sizePrice('weight', 'data-wx');
                    sizePrice('price', 'data-px');

                    resultSize(type);

                } else if (type == 'sXL') {
                    cssSize = {'background-position': '50% -56px'};

                    sizePrice('weight', 'data-wxl');
                    sizePrice('price', 'data-pxl');

                } else if (type == 'sXXL') {
                    cssSize = {'background-position': '50% -66px'};

                    sizePrice('weight', 'data-wxxl');
                    sizePrice('price', 'data-pxxl');
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
                        listTab = 'sauces';
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

            var result = [],
                resultPrice = 60,
                resultWeight = 630;


            //перебросы в заказ
            $('.size-img-ingridient').on('click', function () {
                var nameElem = $(this).attr('data-name');

                //обьект выбранных ингридиентов
                objIngridientResult = {
                    id: $(this).attr('data-name'),
                    price: $(this).find('.addit-item-price > .val').html(),
                    weight: $(this).find('.addit-item-weight > .val').html()
                };

                //сумма грамм и суммы
                resultPrice += +$(this).find('.addit-item-price > .val').html();
                $('.itemPrice-value').html(resultPrice);

                resultWeight += +$(this).find('.addit-item-weight > .val').html();
                $('.itemWeight-value').html(resultWeight);

                //добавляем в массив
                result.push(objIngridientResult);

                //накладываем картинки
                $('.up-img').css({'z-index': ''});
                $('.pizza').append('<img class="up-img" style="z-index: 1;" src=./upload/z-index/' + nameElem + '.jpg >');

                $(this).appendTo('.filling');
            });

            //перекидываем обратно
            $('.filling').on('click', '.size-img-ingridient', function () {

                var elem = $(this),
                    pos = Number(elem.attr("data-pos")),
                    type = elem.attr("id");

                // на своё место
                $('.' + type).children("span").eq(pos).append(elem);

            })

        }


    }
);

