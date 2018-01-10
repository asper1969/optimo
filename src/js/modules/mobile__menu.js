let mobileMenus = {

    settings: {
        btns: {
            all: $('.mobile__container .btn'),
            menu: $('.mobile__container .btn.menu'),
            help: $('.mobile__container .btn.help'),
            closeBtn: $('.mobile__menu .close__btn'),
            call: $('.mobile__menu #block-multiblock-5 .content a'),
            calc: $('.mobile__menu #block-multiblock-4 .content a')
        },
        menuRegion: $('.mobile__menu'),
        menus: {
            all: $('.region-mobile--menu .block'),
            main: $('.region-mobile--menu #block-system-main-menu'),
            extra: $('.region-mobile--menu #block-multiblock-2')
        },
        overlay: $('.overlay')
    },

    init: function(){
        let handler = this;
        this.settings.btns.all.click((e)=>{
            e.stopPropagation();
            handler.showMenu(e);
        });
        this.settings.overlay.click(()=>{
           handler.closeMenu();
        });
        this.settings.menuRegion.click((e)=>{
            e.stopPropagation();
        });
        this.settings.btns.closeBtn.click(()=>{
            handler.closeMenu();
        });
        this.settings.btns.call.click(()=>{
           handler.closeMenu();
        });
        this.settings.btns.calc.click(()=>{
            handler.closeMenu();
        });
    },

    showMenu: function(e){
        let $target = $(e.currentTarget);
        this.settings.menus.all.removeClass('active');
        this.settings.overlay.addClass('active');

        if($target.hasClass('menu')){
            this.settings.menus.main.addClass('active');
        }else{
            this.settings.menus.extra.addClass('active');
        }

        this.settings.menuRegion.addClass('active');
    },

    closeMenu: function(){
        this.settings.overlay.removeClass('active');
        this.settings.menuRegion.removeClass('active');
    }
};

module.exports = mobileMenus;