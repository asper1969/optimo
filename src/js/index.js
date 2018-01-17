require('waypoints/lib/noframework.waypoints.min.js');
require('waypoints/lib/shortcuts/inview.min.js');
import {TimelineMax} from 'gsap';
import {matchHeight} from 'jquery-match-height';
import {slick} from 'slick-carousel';
import openPopup from './modules/openPopup.js';

jQuery.extend(jQuery.easing,{easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a}});
let finish = parseInt($('#block-block-8 p.block-title').text().trim());
let score = {start: 0, finish: finish};

$(document).ready(()=>{

   openPopup.init();

   $('.region-slider #block-views-sliders-block .view-content, ' +
       '.region-slider #block-views-sliders-block-1 .view-content').slick({
      slidesToShow: 1,
      fade: true,
      dots: true,
      arrows: true
   });

   $('.region-new .view-content, ' +
       '.region-hits .view-content, .region-recommendations .view-content').slick({
      slidesToShow: 5,
      variableWidth: true,
      dots: false,
      arrows: true
   });

   $('#block-webform-client-block-2806 .content form input[type="submit"]').attr('disabled', true);

   $('.fieldset-wrapper .webform-component--fieldset--ya-soglasen-s-usloviyami-podpiski ' +
       'input').click(function(){
      let $checkbox = $(this);

      if($checkbox.is(":checked")){
         $checkbox.closest('form').find('input[type="submit"]').attr('disabled', false);
      }else{
         $checkbox.closest('form').find('input[type="submit"]').attr('disabled', true);
      }
   });

   $('.region-shares .view-content').slick({
      slidesToShow: 2,
      variableWidth: true,
      dots: false,
      arrows: true
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