let catalogView = {

    settings: {
        products: $('.view-products-catalog.view-display-id-default .view-content'),
        btn: $('.main__content .actions .btns .btn'),
        productText: $('.view-products-catalog.view-display-id-default ' +
            '.node-product-display.node-teaser .text')
    },

    init: function(){
        let $handler = this;

        if(!localStorage['view']){
            localStorage.setItem('view', 'grid');
        }

        let view = localStorage['view'];

        this.changeView(view);

        this.settings.btn.click(function(){
            view = $(this).attr('data-view');

            $handler.changeView(view);
        });
    },

    changeView(view){
        this.settings.btn.removeClass('is-active');

        if(view == 'grid'){
            localStorage['view'] = 'grid';
            $('.main__content .actions .btns .btn__grid').addClass('is-active');

            this.settings.products.removeClass('rows').addClass('grid');
        }

        if(view == 'rows'){
            localStorage['view'] = 'rows';
            $('.main__content .actions .btns .btn__rows').addClass('is-active');

            this.settings.products.removeClass('grid').addClass('rows');
        }

        this.settings.productText.matchHeight();
    }
};

module.exports = catalogView;