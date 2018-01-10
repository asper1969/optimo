let showMore = {

    settings: {
        blocks: {
            //experts: $('.node-company.view-mode-full .team'),
            documents: $('.node-company.view-mode-full .imgs'),
            job: $('.node-company.view-mode-full .job')
        },
        showMoreBtn: '<div class="show-more">Показать</div>'
    },

    init: function(){
        let handler = this;

        $.each(this.settings.blocks, function(i, el){
            let hh = el.find('.item').height();
            console.log(hh);
            el.find('>.label-above').append(handler.settings.showMoreBtn);
            el.css({
                maxHeight: hh + 98,
                overflow: 'hidden'
            });

            if(el.hasClass('imgs')){
                el.css({
                    maxHeight: hh + 126
                });
            }
            el.find('.show-more').click(function(){
                $(this).hide();
                handler.showMore(el);
            });
        });
    },

    showMore: function(el){
        //console.log(el);
        let innerHeight = el[0].scrollHeight;
        console.log(innerHeight);
        el.animate({
            maxHeight: innerHeight
        }, 300);
        el.addClass('expanded');
    }
};

module.exports = showMore;