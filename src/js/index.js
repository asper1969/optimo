require('waypoints/lib/noframework.waypoints.min.js');
require('waypoints/lib/shortcuts/inview.min.js');
require('./modules/animateNumber.js');
import {TimelineMax} from 'gsap';
import {slick} from 'slick-carousel';
import form from './modules/form.js';
import mobileMenus from './modules/mobile__menu.js';
import showMore from './modules/showMore.js';
import calc from './modules/calc.js';

jQuery.extend(jQuery.easing,{easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a}});
let finish = parseInt($('#block-block-8 p.block-title').text().trim());
let score = {start: 0, finish: finish};

$(document).ready(()=>{
   $('#block-block-8 p.block-title').text('0')
   form.init();
   mobileMenus.init();
   calc.init();

   $('#block-menu-menu-extras .content>ul.menu>li.expanded>a').click(function(e){
      let $li = $(this).parent();
      console.log($li);

      if(!$li.hasClass('active')){
         e.preventDefault();
      }

      $li.toggleClass('active');
      $li.find('ul.menu').slideToggle(300);
   });

   $('a#imgs, a#job').each(function(i, el){
      let href = $(this).attr('href').trim();
      let anchor = $(this).attr('id').trim();
      $(this).attr('href', href + '/#' + anchor);

      if($('.node-company.view-mode-full').length){

         $(this).click(function(){
            scrollTo('.' + anchor);
         });
      }
   });

   let anchor = location.hash;

   if(anchor == '#imgs'){
      scrollTo('.imgs');
   }

   if(anchor == '#job'){
      scrollTo('.job');
   }

   if(anchor.indexOf('views-row') >= 0){
      let index = anchor.substring(1, anchor.length);
      console.log(index);
      scrollTo('.view-services .' + index);
   }

   $('.main__content .container .region-front ' +
       '#block-views-services-block .view-content>div').each(function(i, el){
      let index = i+1;
      $(el).find('.node-services.view-mode-teaser').attr('data-index', 'views-row-' + index);
   });

   $('.main__content .container .region-front ' +
       '#block-views-services-block .view-content>div').click(function(){
      let link = $(this).closest('.block').find('.more-link a').attr('href');
      let index = $(this).find('.node-services.view-mode-teaser').attr('data-index');
      location.href = link + '#' + index;
   });
});

$(window).load(function(){
   $('body').addClass('is-active');

   if($('body.front').length){

      let counter = new Waypoint.Inview({
         element: $('.region-front #block-block-8')[0],
         enter: function(){
            $('#block-block-8 p.block-title').animateNumber({
                   number: score.finish
                },
                1000);
         }
      });
   }

   $('.node-projects.view-mode-full .logos').slick({
      slidesToShow: 6,
      variableWidth: true,
   });

   $('.node-projects.view-mode-full .imgs').slick({
      slidesToShow: 3,
      variableWidth: true
   });

   if($('.node-company.view-mode-full .team').length ){

      showMore.init();
   }
});

function scrollTo(block){
   var $anchor = block;
   $('html, body').stop().animate({
      scrollTop: $($anchor).offset().top - 50
   }, 1500, 'easeInOutExpo');
   event.preventDefault();
}