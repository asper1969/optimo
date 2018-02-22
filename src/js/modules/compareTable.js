let compareTable = {

    settings: {
        category: $('#properties-compare-table .categories_toggler .category'),
        products: $('#properties-compare-table .container .product'),
        categoryActive: $('#properties-compare-table .categories_toggler .category:first-of-type'),
        productsActive: ''
    },

    init: function(){
        let $handler = this;
        let $activeCategory = this.settings.categoryActive;
        let tid = $activeCategory.attr('data-tid');

        this.setActive(tid);

        this.settings.category.click(function(){
            $activeCategory = $(this);
            tid = $activeCategory.attr('data-tid');

            $handler.setActive(tid);
        });

        Drupal.ajax.prototype.success = function (xmlhttprequest, options) {


            $handler.init();
        };
    },

    setActive(tid){
        this.settings.category.removeClass('is-active');
        this.settings.products.removeClass('is-active');
        this.settings.productsActive = $('#properties-compare-table .container .product.term_' + tid);
        this.settings.categoryActive = $('#properties-compare-table .categories_toggler .category[data-tid="' + tid + '"]');
        console.log(tid);

        this.settings.categoryActive.addClass('is-active');
        this.settings.productsActive.addClass('is-active');
    }
};

module.exports = compareTable;

