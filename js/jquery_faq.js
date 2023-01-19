"use strict";

$(document).ready(() => {
    $("dd").addClass("invisible");

    $("#toggle-answer").click(function (event) {
        event.preventDefault();
        $('dd').toggleClass('invisible');
        $(this).text(
            $(this).text() === 'Display Answers'
                ? 'Hide Answers'
                : 'Display Answers'
        );
    });

    $("dt").click(function () {
        $(this).toggleClass('highlight');
    });

    $("#toggle-last-fact").click(function (event) {
        event.preventDefault();
        $("main ul li:last-child").toggleClass('highlight');
        $(this).text(
            $(this).text() !== 'Highlight Last Fact' ? 'Highlight Last Fact' : 'Unhighlight Last Fact'
        );
    });

    $("h3").click(function () {
        $(this).next().children().css('font-weight', 'bold');
    });

    $("li").click(function () {
        $(this).parent().first().css('color', 'blue');
    });

    const imgSelectorFor = index => `#picture-frame > div:nth-child(${parseInt(index)}) > img`;
    const imgAndSrc = selector => {return {element: $(selector), src: $(selector).attr('src')}};
    // function imgAndSrc(selector) {
    //     return {element: $(selector), src: $(selector).attr('src')};
    // }

    $(".swap").click(function(event) {
        event.preventDefault();

        const LEFT = '1';
        const CENTER = '2';
        const RIGHT = '3';

        let positionClicked = $(this).attr("id");
        let isLeftOrRight = positionClicked === LEFT || positionClicked === RIGHT;
        let clickedImgSelector = imgSelectorFor(positionClicked);

        if (isLeftOrRight) {
            swap(
                imgAndSrc(clickedImgSelector),
                imgAndSrc(imgSelectorFor(CENTER))
            );
        } else {
            swap(
                imgAndSrc(imgSelectorFor(CENTER)),
                imgAndSrc((Math.random() < 0.5) ? imgSelectorFor(LEFT) : imgSelectorFor(RIGHT))
            );
        }
    });


    function swap(clicked, other) {
        $(clicked.element).attr('src', other.src);
        $(other.element).attr('src', clicked.src);
    }

});