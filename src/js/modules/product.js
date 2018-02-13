let product = {

    settings: {
        mainSlider: $('.product__announce .slider__main'),
        sliderExtra: $('.product__announce .slider__extra'),
        panelLink: $('.panel__link'),
        panels: $('.panels__wrapper')
    },

    init: function(){
        let handler = this;
        this.settings.mainSlider.slick({
            slidesToShow: 1,
            fade: true,
            arrows: false,
            dots: false,
            asNavFor: handler.settings.sliderExtra
        });
        this.settings.sliderExtra.slick({
            slidesToShow: 3,
            arrows: true,
            dots: false,
            asNavFor: handler.settings.mainSlider,
            centerMode: true,
            focusOnSelect: true,
            vertical: true
        });
        this.settings.panelLink.click(function(){
            let $this = $(this);
            $this.parent('.menu__panels').find('.is-active').removeClass('is-actvie');
            $this.addClass('is-active');
            let target = $(this).attr('data-panel');
            handler.settings.panels.find('.is-active').removeClass('is-active');
            handler.settings.panels.find('.panel[data-panel="' + target + '"]').addClass('is-active');

            return false;
        });
    },
};

module.exports = product;