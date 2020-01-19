/**
 * pathLoader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function(window){'use strict';function PathLoader(el){this.el=el;this.el.style.strokeDasharray=this.el.style.strokeDashoffset=this.el.getTotalLength()}
PathLoader.prototype._draw=function(val){this.el.style.strokeDashoffset=this.el.getTotalLength()*(1-val)}
PathLoader.prototype.setProgress=function(val,callback){this._draw(val);if(callback&&typeof callback==='function'){setTimeout(callback,200)}}
PathLoader.prototype.setProgressFn=function(fn){if(typeof fn==='function'){fn(this)}}
window.PathLoader=PathLoader})(window)