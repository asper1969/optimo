require('waypoints/lib/noframework.waypoints.min.js');
require('waypoints/lib/shortcuts/inview.min.js');
import {TimelineMax} from 'gsap';
import {matchHeight} from 'jquery-match-height';
import {slick} from 'slick-carousel';
import openPopup from './modules/openPopup.js';
import mobileMenu from './modules/mobileMenu.js';
import product from './modules/product.js';
import cart from './modules/cart.js';
import compare from './modules/compare.js';
import compareTable from './modules/compareTable.js';
import catalogView from './modules/catalogView.js';

jQuery.extend(jQuery.easing,{easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a}});

(function($, Drupal){

   $(document).ready(()=>{

      mobileMenu.init();
      openPopup.init();
      compare.init();

      if($('.view-products-catalog.view-display-id-default').length){
         catalogView.init();
      }

      if($('.main__content .container.product_display').length){
         product.init();
      }

      if($('#properties-compare-table').length){
         compareTable.init();
      }

      if($('.view-products-catalog.view-display-id-default ').length){
         $('.view-products-catalog.view-display-id-default ' +
             '.node-product-display.node-teaser .text').matchHeight();
      }

      if($('#block-bainet-cartblock-cartblock').length){
         cart.init();
      }

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

         if(!$checkbox.closest('.block').hasClass('is-active')){
            $checkbox.closest('.block').addClass('is-active');
         }
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
})(jQuery, Drupal);
