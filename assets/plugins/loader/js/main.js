/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function(){var support={animations:Modernizr.cssanimations},container=document.getElementById('ip-container'),header=container.querySelector('.ip-header'),loader=new PathLoader(document.getElementById('ip-loader-circle')),animEndEventNames={'WebkitAnimation':'webkitAnimationEnd','OAnimation':'oAnimationEnd','msAnimation':'MSAnimationEnd','animation':'animationend'},animEndEventName=animEndEventNames[Modernizr.prefixed('animation')];function init(){var onEndInitialAnimation=function(){if(support.animations){this.removeEventListener(animEndEventName,onEndInitialAnimation)}
startLoading()};window.addEventListener('scroll',noscroll);classie.add(container,'loading');if(support.animations){container.addEventListener(animEndEventName,onEndInitialAnimation)}else{onEndInitialAnimation()}}
function startLoading(){var simulationFn=function(instance){var progress=0,interval=setInterval(function(){progress=Math.min(progress+Math.random()*0.1,1);instance.setProgress(progress);if(progress===1&&document.readyState=='complete'){classie.remove(container,'loading');classie.add(container,'loaded');clearInterval(interval);jQuery("html").niceScroll({scrollspeed:60,mousescrollstep:38,cursorwidth:6,cursorborder:0,cursorcolor:'#949089',autohidemode:!1,zindex:9999999,horizrailenabled:!1,cursorborderradius:0,});var onEndHeaderAnimation=function(ev){if(support.animations){if(ev.target!==header)return;this.removeEventListener(animEndEventName,onEndHeaderAnimation)}
classie.add(document.body,'layout-switch');window.removeEventListener('scroll',noscroll);if(location.href.split("#")[1]){jQuery('html, body').stop().animate({scrollTop:(jQuery("#"+location.href.split("#")[1]).offset().top-100)},1500,'easeInOutExpo')}};if(support.animations){header.addEventListener(animEndEventName,onEndHeaderAnimation)}else{onEndHeaderAnimation()}}},80)};loader.setProgressFn(simulationFn)}
function noscroll(){window.scrollTo(0,0)}
init()})()