let cart = {

    settings: {
        quantityContainer: $('.views-field-edit-quantity'),
        quantityInput: $('.views-field-edit-quantity input'),
        val: 1,
        shippings:  $('.commerce_shipping .form-item'),
        shippingTypeActive: $('.commerce_shipping .form-item input[checked="checked"]'),
        shippingType:  $('.commerce_shipping .form-item input[checked="checked"]').attr('id'),
        shippingTypeInput: $('.commerce_shipping .form-item input'),
        payments: $('#edit-commerce-payment .form-item'),
        paymentTypeInput:  $('#edit-commerce-payment  .form-item input'),
        paymentTypeActive: $('#edit-commerce-payment  .form-item input[checked="checked"]'),
        paymentInPerson: $('#edit-commerce-payment-payment-method-in-personcommerce-payment-in-person'),
        paymentCurier: $('#edit-commerce-payment-payment-method-commerce-codcommerce-payment-commerce-cod')
    },

    init: function(){
        let minus = '<div class="btn btn__minus noselect">-</div>';
        let plus = '<div class="btn btn__plus noselect">+</div>';
        let $handler = this;

        this.settings.quantityContainer.each(function(){
            $(this).prepend(minus);
            $(this).append(plus);
        });
        this.settings.btn =  $('.views-field-edit-quantity .btn');

        this.settings.quantityInput.click(function(){
            $handler.saveVal($(this));
        });

        this.settings.quantityInput.blur(function(){
            $handler.setVal($(this));
        });

        this.settings.quantityInput.on('input', function(){
            let val = parseInt($(this).val());
            $handler.checkInput(val, $(this));
        });

        this.settings.btn.click(function(){
            let $this = $(this);
            $handler.saveVal($this.parent().find('input'));
            $handler.calcVal($this);
        });

        this.setShipping();

        this.settings.shippingTypeInput.on('change', function(){
            let shippingType = $(this).attr('id');
            $handler.settings.shippingType = shippingType;
            $handler.settings.shippingTypeActive = $(this);
            $handler.setShipping();
        });

        this.settings.paymentTypeInput.on('change', function(){
            $handler.settings.paymentTypeActive = $(this);
            $handler.setPayment();
        });

        this.settings.payments.click(function(){

            if($(this).hasClass('muted')){
                return false;
            }
        });
    },

    saveVal: function($this){
        let val = parseInt($this.val());
        $this.val('');
        this.settings.val = val;
    },

    setVal: function($this){
        $this.val(this.settings.val);
    },

    checkInput: function(val, $this){

        if(!isNaN(val) && val > 0){
            this.settings.val = val;
            this.setVal($this);
        }else{
            this.setVal($this);
        }
    },

    calcVal: function($this){
        let val = this.settings.val;

        if($this.hasClass('btn__minus')){
            val--;
        }
        if($this.hasClass('btn__plus')){
            val++;
        }

        this.checkInput(val, $this.parent().find('input'));
    },

    setShipping: function($shippingType){
        this.settings.shippings.removeClass('is-active');
        this.settings.shippingTypeActive.closest('.form-item').addClass('is-active');
        let $inPerson = $('#edit-commerce-payment-payment-method-in-personcommerce-payment-in-person');

        if(this.settings.shippingType == 'edit-commerce-shipping-shipping-service-free-shipping'){
            this.settings.paymentCurier.attr('disabled', true);
            this.settings.paymentCurier.closest('.form-item').addClass('is-muted');
            this.settings.paymentTypeActive = this.settings.paymentInPerson;
        }

        if(this.settings.shippingType == 'edit-commerce-shipping-shipping-service-postman'){
            this.settings.paymentInPerson.closest('.form-item').addClass('is-muted');
            this.settings.paymentInPerson.attr('disabled', true);
            this.settings.paymentTypeActive = this.settings.paymentCurier;
        }

        this.setPayment();
    },

    setPayment: function(){
        this.settings.payments.removeClass('is-active');
        this.settings.paymentTypeActive.attr('disabled', false);
        this.settings.paymentTypeActive.closest('.form-item').removeClass('is-muted')
            .addClass('is-active').find('input').click();
    }
};

module.exports = cart;