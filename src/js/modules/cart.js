let cart = {

    settings: {
        quantityContainer: $('.views-field-edit-quantity')
    },

    init: function(){
        let minus = '<div class="btn btn__minus">-</div>';
        let plus = '<div class="btn btn__plus">-</div>';

        this.settings.quantityContainer.each(function(){

            $(this).prepend(minus);
            $(this).append(minus);
        });
    }
};

module.exports = cart;