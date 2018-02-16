let openPopup = {

    settings: {
        targets: $('a.popup-target'),
        overlay: $('.overlay')
    },

    init: function(){
        let handler = this;

        this.settings.targets.each(function(i, el){
            let $target = $('.' + $(this).attr('data-target') + ', ' +
                '#' + $(this).attr('data-target'));
            $target.addClass('popup-element');

            //if(!$target.find('.close')){
            //    $target.append('<div class="close">+</div>');
            //}

            $target.append('<div class="close">+</div>');

        });

        this.settings.targets.click(function(e){
            let $target = $('.' + $(this).attr('data-target') + ', ' +
                '#' + $(this).attr('data-target'));
            $target.addClass('is-active');
            handler.settings.overlay.addClass('is-active');

            return false;
        });

        $('.popup-element .close').click(function(){
            $(this).closest('.popup-element').removeClass('is-active');
            handler.settings.overlay.removeClass('is-active');
        });

        $('.popup-element').click(function(e){
            e.stopPropagation();
        });

        this.settings.overlay.click(function(){
            $('.popup-element.is-active').removeClass('is-active');
            $(this).removeClass('is-active');
        });
    }
};

module.exports = openPopup;