console.log('FullStack Vietnam')
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop()>100) {
            $('.nav-link.btn').addClass('hienthi');
        }
        else {
            $('.nav-link.btn').removeClass('hienthi');
        }
    })
    $(window).scroll(function () {
        if ($(window).scrollTop()>100) {
            $('.navbar.fixed-top.header_tinh').addClass('bg-new');
        }
        else {
            $('.navbar.fixed-top.header_tinh').removeClass('bg-new');
        }
    })
})