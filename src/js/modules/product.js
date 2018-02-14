let product = {

    settings: {
        mainSlider: $('.product__announce .slider__main'),
        sliderExtra: $('.product__announce .slider__extra'),
        panelsMenu: $('.panels ul.menu__panels'),
        panelLink: $('.panel__link'),
        panels: $('.panels__wrapper'),
        gimmick: $('.panels ul.menu__panels li.gimmick'),
        teaser: $('.panels .container .node-product-display.node-teaser')
    },

    init: function(){
        let handler = this;

        this.gimmick();

        let waypoint = new Waypoint({
            element:  document.querySelector('.product__announce .info__container h1'),
            handler: function(direction){
                console.log(direction);

                if(direction == 'down'){
                    handler.settings.teaser.addClass('is-active');
                }

                if(direction == 'up'){
                    handler.settings.teaser.removeClass('is-active');
                }
            }
        });

        $(window).load(function(){
            handler.settings.mainSlider.slick({
                slidesToShow: 1,
                fade: true,
                arrows: false,
                dots: false,
                asNavFor: handler.settings.sliderExtra
            });
            handler.settings.sliderExtra.slick({
                slidesToShow: 3,
                arrows: true,
                dots: false,
                asNavFor: handler.settings.mainSlider,
                centerMode: true,
                focusOnSelect: true,
                vertical: true,
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        vertical: false,
                        arrows: false
                    }
                }]
            });
        });

        this.settings.panelLink.click(function(){
            let $this = $(this);
            handler.settings.panelsMenu.find('.is-active').removeClass('is-active');
            $this.addClass('is-active');
            handler.gimmick();
            let target = $(this).attr('data-panel');
            handler.settings.panels.find('.is-active').removeClass('is-active');
            handler.settings.panels.find('.panel[data-panel="' + target + '"]').addClass('is-active');

            return false;
        });
    },

    gimmick: function(){
        let $activeLink = this.settings.panelsMenu.find('.panel__link.is-active');
        let pos = $activeLink.offset().left;
        let width = $activeLink.width();
        let parentPos = this.settings.panelsMenu.offset().left;

        this.settings.gimmick.stop().animate({
            left: pos - parentPos,
            width: width
        },300);
    }
};

module.exports = product;