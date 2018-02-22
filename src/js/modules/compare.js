let compare = {

    settings: {
        compareBtn: $('.node-product-display:not(.in-compare-list) .group__extra .compare form'),
        compareBtnWrapper: $('.node-product-display:not(.in-compare-list) .group__extra .compare'),
        product: $('.node-product-display'),
        listItem: $('#block-commerce-product-comparison-compare-list .item-list li a'),
        compareList: $('#block-commerce-product-comparison-compare-list .content'),
    },

    init: function(){
        let $handler = this;

        this.checkCompareList();

        //this.settings.compareBtn.on('submit', function(e){
        //    let $form = $(this);
        //
        //    $.ajax({
        //        type: 'POST',
        //        url: $form.attr('action'),
        //        data: $form.serialize(),
        //        success: function(response){
        //            $form.closest('.compare')
        //                .append('<a href="/properties/compare" class="btn btn_to_compare">Перейти к сравнению</a>')
        //                .closest('.node-product-display').addClass('in-compare-list').find('form').remove();
        //        }
        //    });
        //
        //    return false;
        //});

        this.settings.compareBtnWrapper.on('click', function(e){
            let $this = $(this);

            if($this.closest('.node-product-display').hasClass('in-compare-list')){
                location.href = "/properties/compare";

                return false;
            }
        });

        Drupal.ajax.prototype.success = function (xmlhttprequest, options) {
            let list = '';

            xmlhttprequest.forEach(function(e, i, arr){

                if(e.selector == '#commerce-product-comparison-list-form'){
                    list = e.data;
                }
            });

            $handler.settings.listItem = $('#block-commerce-product-comparison-compare-list .item-list li a');
            $handler.settings.compareList.html(list);
            $handler.settings.listItem = $('#block-commerce-product-comparison-compare-list .item-list li a');

            //console.log(list);
            //console.log(xmlhttprequest);

            $handler.checkCompareList();
        };
    },

    checkCompareList: function(){

        this.settings.listItem.each(function(){
            let item = $(this).attr('href');
            $('.node-product-display a[href="' + item + '"]')
                .closest('.node-product-display').addClass('in-compare-list')
                .find('.compare input[type="submit"]').attr('value', 'Перейти к сравнению');
        });
    }
};

module.exports = compare;