'use strict';

console.log('FullStack Vietnam');
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('.nav-link.btn').addClass('hienthi');
        } else {
            $('.nav-link.btn').removeClass('hienthi');
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('.row.fixed-top.header_tinh').addClass('bg-new');
        } else {
            $('.row.fixed-top.header_tinh').removeClass('bg-new');
        }
    });
});
console.log('FullStack Vietnam');
//# sourceMappingURL=main.js.map
