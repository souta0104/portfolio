$(() => {
    $('.sns').hide();
    setTimeout(1000);
    $('.top').addClass('fadein');
    let hoge = (t) => {
        $(t).each(() => {
            let elemPos = $(t).offset().top,
                scroll = $(window).scrollTop(),
                windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 600) {
                $(t).addClass('fadein');
            }
        });
    };
    $(window).scroll(() => {
        hoge('.profile');
    });
    $(window).scroll(() => {
        hoge('.works');
        $('.sns').fadeIn(1000);
    });
    $(window).scroll(() => {
        hoge('.center');
    });
    $(window).scroll(() => {
        hoge('.bottom');
    });
});
