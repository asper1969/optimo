let openPopup = {

    settings: {
        targets: $('a.popup-target')
    },

    init: function(){

        this.settings.targets.each(function(i, el){
            let $target = $('.' + $(this).attr('data-target'));
            $target.addClass('popup-element');
            $target.append('<div class="close">+</div>');
        });

        this.settings.targets.click(function(){
            let $target = $('.' + $(this).attr('data-target'));
            $target.addClass('is-active');

            return false;
        });

        $('.popup-element .close').click(function(){
            $(this).closest('.popup-element').removeClass('is-active');
        });

        $('.popup-element').click(function(){

            return false;
        });

        $('body').click(function(){
            $('.popup-element.is-active').removeClass('is-active');
        });
    }
};

module.exports = openPopup;