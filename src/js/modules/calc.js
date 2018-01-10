let calc = {

    settings: {
        block: $('#block-views-calc-block'),
        form: $('#block-views-calc-block form.webform-client-form'),
        input: $('#block-views-calc-block input.user-input'),
        output: $('#block-views-calc-block input.output-without-nds'),
        outputNds: $('#block-views-calc-block input.output-with-nds'),
        values: {
            psod: parseFloat($('#block-views-calc-block .group-right .psd .value').text().trim()),
            nds: parseFloat($('#block-views-calc-block .group-right .nds .value').text().trim()),
            min: parseFloat($('#block-views-calc-block .group-right .min .value').text().trim()),
            x0: parseFloat($('#block-views-calc-block .group-right .x-0 .value').text().trim()),
            x1: parseFloat($('#block-views-calc-block .group-right .x-1 .value').text().trim()),
            y0: parseFloat($('#block-views-calc-block .group-right .y-0 .value').text().trim()),
            y1: parseFloat($('#block-views-calc-block .group-right .y-1 .value').text().trim()),
            mrpp: parseFloat($('#block-views-calc-block .group-right .mrpp .value').text().trim()),
            mrpr: parseFloat($('#block-views-calc-block .group-right .mrpr .value').text().trim())
        }
    },

    init: function(){
        this.settings.form.on('submit', function(){return false;});
        let handler = this;
        let min = this.settings.values.min;
        let minToStr = min.toString().replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ');
        let nds = this.settings.values.nds;
        let withNds = parseInt(min + ((parseFloat(min) * nds) / 100));
        let withNdsToStr = withNds.toString().replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ');
        this.settings.output.val(minToStr);
        this.settings.outputNds.val(withNdsToStr);
        this.settings.input.on('change keyup paste', function(e){
            handler.calc(e);
        });

        //console.log(this.settings.values);
    },

    calc: function(e){
        let val = parseFloat(this.settings.input.val());
        //console.log(val);

        if(!isNaN(val)){
            let input = parseFloat(this.settings.input.val());
            let min = this.settings.values.min;
            let x0 = this.settings.values.x0;
            let x1 = this.settings.values.x1;
            let y0 = this.settings.values.y0;
            let y1 = this.settings.values.y1;
            let nds = this.settings.values.nds;
            let psod = this.settings.values.psod;
            let nt = 0;
            let mrpp = this.settings.values.mrpp;
            let mrpr = this.settings.values.mrpr;
            let pirPriv = input * mrpp/mrpr;

            if(input <= x1){
                nt = Math.ceil(((val - x0)*(y1 - y0)/(x1 - x0)) + y0);
            }else{
                nt = (1.1431 * Math.pow(pirPriv, 0.39906)).toFixed(2);
            }

            let price = psod * nt;

            //console.log(nt);

            if(price <= min){
                price = min;
            }

            let priceNds = price + price*12/100;
            let priceToStr = price.toFixed(0).toString().replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ');
            let priceNdsToStr = priceNds.toFixed(0).toString().replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ');

            this.settings.output.val(priceToStr);
            this.settings.outputNds.val(priceNdsToStr);
        }
    }
};

module.exports = calc;