let form = {

    settings: {
        region: $('.region-hidden'),
        forms: {
            all: $('.block-webform, #block-views-calc-block'),
            call: $('#block-webform-client-block-23'),
            resume: $('#block-webform-client-block-25'),
            calc: $('#block-views-calc-block')
        },
        btn: $('.region-header--right #block-block-3 .content a, ' +
            '.mobile__menu #block-multiblock-5 .content a'),
        closeBtn: $('.webform-component--close a'),
        resumeBtn: $('.node-job.view-mode-default .group-footer .more-link a'),
        calcBtn: $('#block-block-4 .content a, ' +
            '#block-multiblock-4 .content a')
    },

    init: function(){
        let handler = this;
        this.settings.btn.click(()=>{
            handler.openModal();
            this.settings.forms.call.addClass('active');

        });
        this.settings.calcBtn.click(()=>{
            handler.openModal();
            this.settings.forms.calc.addClass('active');
        });
        this.settings.region.click(()=>{
            handler.closeModal();
        });
        this.settings.forms.all.click((e)=>{
            e.stopPropagation();
        });
        this.settings.closeBtn.click(()=>{
            handler.closeModal();

            return false;
        });
        this.settings.resumeBtn.click(function(){
            let position = $(this).closest('.node-job').find('.title').text().trim();
            handler.settings.forms.resume.find('input#edit-submitted-vakansiya').val(position);
            handler.openModal();
            handler.settings.forms.resume.addClass('active');

            return false;
        });
    },

    openModal: function(){
        this.settings.region.addClass('active');
    },

    closeModal: function(){
        this.settings.forms.all.removeClass('active');
        this.settings.region.removeClass('active');
    }
};

module.exports = form;