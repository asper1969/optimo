require('waypoints/lib/noframework.waypoints.min.js');
require('waypoints/lib/shortcuts/inview.min.js');
require('./modules/animateNumber.js');
import {TimelineMax} from 'gsap';
import {matchHeight} from 'jquery-match-height';
import {slick} from 'slick-carousel';
import form from './modules/form.js';
import mobileMenus from './modules/mobile__menu.js';
import showMore from './modules/showMore.js';
import calc from './modules/calc.js';

jQuery.extend(jQuery.easing,{easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a}});
let finish = parseInt($('#block-block-8 p.block-title').text().trim());
let score = {start: 0, finish: finish};

$(document).ready(()=>{

   $('.region-slider #block-views-sliders-block .view-content, ' +
       '.region-slider #block-views-sliders-block-1 .view-content').slick({
      slidesToShow: 1,
      fade: true,
      dots: true,
      arrows: true
   });

   $('.node-product-display.node-teaser .group__content h4').matchHeight();

   $('.region-new .view-content').slick({
      slidesToShow: 5,
      variableWidth: true,
      dote: false
   });
});

$(window).load(function(){
   $('body').addClass('is-active');

});

function scrollTo(block){
   var $anchor = block;
   $('html, body').stop().animate({
      scrollTop: $($anchor).offset().top - 50
   }, 1500, 'easeInOutExpo');
   event.preventDefault();
}