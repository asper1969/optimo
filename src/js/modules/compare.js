let compare = {

    settings: {
        compareBtn: $('.node-product-display:not(.in-compare-list) .group__extra .compare form'),
        compareBtnWrapper: $('.node-product-display:not(.in-compare-list) .group__extra .compare'),
        product: $('.node-product-display'),
        listItem: $('#block-commerce-product-comparison-compare-list .item-list li a'),
    },

    init: function(){
        let $handler = this;

        this.checkCompareList();

        this.settings.compareBtn.on('submit', function(e){
            let $form = $(this);

            $.ajax({
                type: 'POST',
                url: $form.attr('action'),
                data: $form.serialize(),
                success: function(response){
                    $form.closest('.compare')
                        .append('<a href="/properties/compare" class="btn btn_to_compare">Перейти к сравнению</a>')
                        .closest('.node-product-display').addClass('in-compare-list').find('form').remove();
                }
            });

            return false;
        });

        this.settings.compareBtnWrapper.on('click', function(e){
            let $this = $(this);

            if($this.closest('.node-product-display').hasClass('in-compare-list')){
                location.href = "/properties/compare";

                return false;
            }else{
                let item = $this.closest('.node-product-display').find('.group__content a').attr('href');
                $('.node-product-display a[href="' + item + '"]')
                    .closest('.node-product-display').addClass('in-compare-list');

                $this.find('form').trigger('submit');
            }
        });
    },

    checkCompareList: function(){

        this.settings.listItem.each(function(){
            let item = $(this).attr('href');
            $('.node-product-display a[href="' + item + '"]')
                .closest('.node-product-display').addClass('in-compare-list');
        });
    }
};

module.exports = compare;