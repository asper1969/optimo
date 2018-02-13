let mobileMenu = {

    settings: {
        menuBtn: $('.navigation .btns .btn.btn__menu'),
        catalogBtn: $('.navigation .btns .btn.btn__catalog'),
        menu: $('.navigation .container'),
        catalog: $('.main-categories'),
        menuClose: $('.navigation .container .close'),
        catalogClose: $('.main-categories .close'),
        overlay: $('.overlay'),
        body: $('body'),
        catalogCategories: $('.main-categories>ul.menu-catalog>li>a'),
        subCatalog: $('.main-categories>ul.menu-catalog>li>ul.sub-catalog'),
        categoryIsOpen: false
    },

    init: function(){
        let handler = this;
        this.settings.menuBtn.click(function(){
            handler.menuOpen();
        });
        this.settings.catalogBtn.click(function(){
            handler.catalogOpen();
        });
        this.settings.menuClose.click(function(){
            handler.menuClose();
        });
        this.settings.catalogClose.click(function(){
            handler.catalogClose();
        });
        this.settings.overlay.click(function(){
            handler.settings.categoryIsOpen = false;
            handler.menuClose();
            handler.catalogClose();
        });
        this.settings.subCatalog.click(function(e){
            let ww = (window.innerWidth > 0) ? window.innerWidth : screen.width;

            if(ww < 960){
                return false;
            }
        });
        this.settings.catalogCategories.click(function(){

            if(!handler.settings.categoryIsOpen){
                handler.settings.categoryIsOpen = true;
            }

            return false;
        });
    },

    menuOpen: function(){
        this.settings.menu.addClass('is-active');
        this.settings.overlay.addClass('is-active');
        this.settings.body.addClass('is-fixed');
    },

    menuClose: function(){
        this.settings.menu.removeClass('is-active');
        this.settings.overlay.removeClass('is-active');
        this.settings.body.removeClass('is-fixed');

        return false;
    },

    catalogOpen: function(){
        this.settings.catalog.addClass('is-active');
        this.settings.overlay.addClass('is-active');
        this.settings.body.addClass('is-fixed');
    },

    catalogClose: function(){

        if(!this.settings.categoryIsOpen){
            this.settings.catalog.removeClass('is-active');
            this.settings.overlay.removeClass('is-active');
            this.settings.body.removeClass('is-fixed');
        }else{
            this.settings.categoryIsOpen = false;
        }

        return false;
    }
};

module.exports = mobileMenu;