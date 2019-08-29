!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).COBI=e()}}(function(){return function s(u,o,c){function a(t,e){if(!o[t]){if(!u[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(b)return b(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var i=o[t]={exports:{}};u[t][0].call(i.exports,function(e){return a(u[t][1][e]||e)},i,i.exports,s,u,o,c)}return o[t].exports}for(var b="function"==typeof require&&require,e=0;e<c.length;e++)a(c[e]);return a}({1:[function(e,t,n){var c=Object.create||function(e){var t=function(){};return t.prototype=e,new t},u=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return n},s=Function.prototype.bind||function(e){var t=this;return function(){return t.apply(e,arguments)}};function r(){this._events&&Object.prototype.hasOwnProperty.call(this,"_events")||(this._events=c(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0}((t.exports=r).EventEmitter=r).prototype._events=void 0,r.prototype._maxListeners=void 0;var i,o=10;try{var a={};Object.defineProperty&&Object.defineProperty(a,"x",{value:0}),i=0===a.x}catch(e){i=!1}function b(e){return void 0===e._maxListeners?r.defaultMaxListeners:e._maxListeners}function f(e,t,n,r){var i,s,u;if("function"!=typeof n)throw new TypeError('"listener" argument must be a function');if((s=e._events)?(s.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),s=e._events),u=s[t]):(s=e._events=c(null),e._eventsCount=0),u){if("function"==typeof u?u=s[t]=r?[n,u]:[u,n]:r?u.unshift(n):u.push(n),!u.warned&&(i=b(e))&&0<i&&u.length>i){u.warned=!0;var o=new Error("Possible EventEmitter memory leak detected. "+u.length+' "'+String(t)+'" listeners added. Use emitter.setMaxListeners() to increase limit.');o.name="MaxListenersExceededWarning",o.emitter=e,o.type=t,o.count=u.length,"object"==typeof console&&console.warn&&console.warn("%s: %s",o.name,o.message)}}else u=s[t]=n,++e._eventsCount;return e}function l(){if(!this.fired)switch(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length){case 0:return this.listener.call(this.target);case 1:return this.listener.call(this.target,arguments[0]);case 2:return this.listener.call(this.target,arguments[0],arguments[1]);case 3:return this.listener.call(this.target,arguments[0],arguments[1],arguments[2]);default:for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];this.listener.apply(this.target,e)}}function d(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=s.call(l,r);return i.listener=n,r.wrapFn=i}function p(e,t,n){var r=e._events;if(!r)return[];var i=r[t];return i?"function"==typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):v(i,i.length):[]}function h(e){var t=this._events;if(t){var n=t[e];if("function"==typeof n)return 1;if(n)return n.length}return 0}function v(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}i?Object.defineProperty(r,"defaultMaxListeners",{enumerable:!0,get:function(){return o},set:function(e){if("number"!=typeof e||e<0||e!=e)throw new TypeError('"defaultMaxListeners" must be a positive number');o=e}}):r.defaultMaxListeners=o,r.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},r.prototype.getMaxListeners=function(){return b(this)},r.prototype.emit=function(e){var t,n,r,i,s,u,o="error"===e;if(u=this._events)o=o&&null==u.error;else if(!o)return!1;if(o){if(1<arguments.length&&(t=arguments[1]),t instanceof Error)throw t;var c=new Error('Unhandled "error" event. ('+t+")");throw c.context=t,c}if(!(n=u[e]))return!1;var a="function"==typeof n;switch(r=arguments.length){case 1:!function(e,t,n){if(t)e.call(n);else for(var r=e.length,i=v(e,r),s=0;s<r;++s)i[s].call(n)}(n,a,this);break;case 2:!function(e,t,n,r){if(t)e.call(n,r);else for(var i=e.length,s=v(e,i),u=0;u<i;++u)s[u].call(n,r)}(n,a,this,arguments[1]);break;case 3:!function(e,t,n,r,i){if(t)e.call(n,r,i);else for(var s=e.length,u=v(e,s),o=0;o<s;++o)u[o].call(n,r,i)}(n,a,this,arguments[1],arguments[2]);break;case 4:!function(e,t,n,r,i,s){if(t)e.call(n,r,i,s);else for(var u=e.length,o=v(e,u),c=0;c<u;++c)o[c].call(n,r,i,s)}(n,a,this,arguments[1],arguments[2],arguments[3]);break;default:for(i=new Array(r-1),s=1;s<r;s++)i[s-1]=arguments[s];!function(e,t,n,r){if(t)e.apply(n,r);else for(var i=e.length,s=v(e,i),u=0;u<i;++u)s[u].apply(n,r)}(n,a,this,i)}return!0},r.prototype.on=r.prototype.addListener=function(e,t){return f(this,e,t,!1)},r.prototype.prependListener=function(e,t){return f(this,e,t,!0)},r.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,d(this,e,t)),this},r.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,d(this,e,t)),this},r.prototype.removeListener=function(e,t){var n,r,i,s,u;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(r=this._events))return this;if(!(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=c(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,s=n.length-1;0<=s;s--)if(n[s]===t||n[s].listener===t){u=n[s].listener,i=s;break}if(i<0)return this;0===i?n.shift():function(e,t){for(var n=t,r=n+1,i=e.length;r<i;n+=1,r+=1)e[n]=e[r];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),r.removeListener&&this.emit("removeListener",e,u||t)}return this},r.prototype.removeAllListeners=function(e){var t,n,r;if(!(n=this._events))return this;if(!n.removeListener)return 0===arguments.length?(this._events=c(null),this._eventsCount=0):n[e]&&(0==--this._eventsCount?this._events=c(null):delete n[e]),this;if(0===arguments.length){var i,s=u(n);for(r=0;r<s.length;++r)"removeListener"!==(i=s[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=c(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(t)for(r=t.length-1;0<=r;r--)this.removeListener(e,t[r]);return this},r.prototype.listeners=function(e){return p(this,e,!0)},r.prototype.rawListeners=function(e){return p(this,e,!1)},r.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},r.prototype.listenerCount=h,r.prototype.eventNames=function(){return 0<this._eventsCount?Reflect.ownKeys(this._events):[]}},{}],2:[function(e,t,n){var r,i,s=t.exports={};function u(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(t){if(r===setTimeout)return setTimeout(t,0);if((r===u||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:u}catch(e){r=u}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var a,b=[],f=!1,l=-1;function d(){f&&a&&(f=!1,a.length?b=a.concat(b):l=-1,b.length&&p())}function p(){if(!f){var e=c(d);f=!0;for(var t=b.length;t;){for(a=b,b=[];++l<t;)a&&a[l].run();l=-1,t=b.length}a=null,f=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];b.push(new h(e,t)),1!==b.length||f||c(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=v,s.addListener=v,s.once=v,s.off=v,s.removeListener=v,s.removeAllListeners=v,s.emit=v,s.prependListener=v,s.prependOnceListener=v,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},{}],3:[function(e,t,n){"use strict";var r=e("./core");t.exports.read=function(e,t){void 0!==t&&r.emitter.once(e,t),r.sendMessage({action:"READ",path:e})},t.exports.write=function(e,t,n){void 0!==n&&r.emitter.once(e,n),r.sendMessage({action:"WRITE",path:e,payload:t})},t.exports.subscribe=function(e,t){null!==r.getAuthentication()&&console.log("attempt to subscribe a listener without initializing the COBI.js library"),r.emitter.addListener(e,t)},t.exports.unsubscribe=function(e,t){void 0!==t?r.emitter.removeListener(e,t):r.emitter.removeAllListeners(e)}},{"./core":5}],4:[function(e,t,n){"use strict";var r=e("./core"),i=e("./action"),COBI={specVersion:"0.44.0",__emitter:r.emitter,__authentication:r.getAuthentication,init:function(e){return r.init(e,COBI.specVersion)},__authenticated:r.receiveAuthentication,__receiveMessage:r.receiveMessage,parameters:{language:function(){return r.getUrlParameter("language")||"en-US"},state:function(){return console.warn("COBI.parameters.state() is deprecated !! ... please use COBI.parameters.context() instead"),r.getUrlParameter("state")||COBI.state.experience},context:function(){var e=r.getUrlParameter("context"),t=r.getUrlParameter("state");if(null!=e)return e;if(null!=t)switch(t){case COBI.state.experience:return COBI.context.onRide;case COBI.state.edit:return COBI.context.offRideSettings}return COBI.context.offRide},nativeSdkVersion:function(){return r.getUrlParameter("version")||COBI.specVersion}},state:{experience:"experience",edit:"edit",overview:"overview"},context:{onRide:"onRide",offRide:"offRide",onRideSettings:"onRideSettings",offRideSettings:"offRideSettings"},app:{theme:{subscribe:function(e){return i.subscribe("app/theme",e)},unsubscribe:function(e){return i.unsubscribe("app/theme",e)}},textToSpeech:{write:function(e,t){return i.write("app/textToSpeech",e,t)}},readLater:{write:function(e,t){return i.write("app/readLater",e,t)}},language:{subscribe:function(e){return i.subscribe("app/language",e)},unsubscribe:function(e){return i.unsubscribe("app/language",e)}},contact:{read:function(e){return i.read("app/contact",e)}},touchInteractionEnabled:{subscribe:function(e){return i.subscribe("app/touchInteractionEnabled",e)},unsubscribe:function(e){return i.unsubscribe("app/touchInteractionEnabled",e)}},hubLocation:{read:function(e){return i.read("app/hubLocation",e)},subscribe:function(e){return i.subscribe("app/hubLocation",e)},unsubscribe:function(e){return i.unsubscribe("app/hubLocation",e)}},clockVisible:{write:function(e,t){return i.write("app/clockVisible",e,t)}},isDark:{read:function(e){return i.read("app/isDark",e)},subscribe:function(e){return i.subscribe("app/isDark",e)},unsubscribe:function(e){return i.unsubscribe("app/isDark",e)}},isHubConnected:{read:function(e){return i.read("app/isHubConnected",e)},subscribe:function(e){return i.subscribe("app/isHubConnected",e)},unsubscribe:function(e){return i.unsubscribe("app/isHubConnected",e)}}},hub:{motorInterfaceReady:{read:function(e){return i.read("hub/motorInterfaceReady",e)},subscribe:function(e){return i.subscribe("hub/motorInterfaceReady",e)},unsubscribe:function(e){return i.unsubscribe("hub/motorInterfaceReady",e)}},bellRinging:{subscribe:function(e){return i.subscribe("hub/bellRinging",e)},unsubscribe:function(e){return i.unsubscribe("hub/bellRinging",e)}},externalInterfaceAction:{subscribe:function(e){return i.subscribe("hub/externalInterfaceAction",e)},unsubscribe:function(e){return i.unsubscribe("hub/externalInterfaceAction",e)}},ambientLightState:{read:function(e){return i.read("hub/ambientLightState",e)},subscribe:function(e){return i.subscribe("hub/ambientLightState",e)},unsubscribe:function(e){return i.unsubscribe("hub/ambientLightState",e)}}},battery:{state:{read:function(e){return i.read("battery/state",e)},subscribe:function(e){return i.subscribe("battery/state",e)},unsubscribe:function(e){return i.unsubscribe("battery/state",e)}}},motor:{distance:{read:function(e){return i.read("motor/distance",e)},subscribe:function(e){return i.subscribe("motor/distance",e)},unsubscribe:function(e){return i.unsubscribe("motor/distance",e)}},assistanceIndicator:{read:function(e){return i.read("motor/assistanceIndicator",e)},subscribe:function(e){return i.subscribe("motor/assistanceIndicator",e)},unsubscribe:function(e){return i.unsubscribe("motor/assistanceIndicator",e)}},range:{read:function(e){return i.read("motor/range",e)},subscribe:function(e){return i.subscribe("motor/range",e)},unsubscribe:function(e){return i.unsubscribe("motor/range",e)}},supportedDriveModes:{read:function(e){return i.read("motor/supportedDriveModes",e)},subscribe:function(e){return i.subscribe("motor/supportedDriveModes",e)},unsubscribe:function(e){return i.unsubscribe("motor/supportedDriveModes",e)}},driveMode:{read:function(e){return i.read("motor/driveMode",e)},subscribe:function(e){return i.subscribe("motor/driveMode",e)},unsubscribe:function(e){return i.unsubscribe("motor/driveMode",e)}},nextService:{read:function(e){return i.read("motor/nextService",e)},subscribe:function(e){return i.subscribe("motor/nextService",e)},unsubscribe:function(e){return i.unsubscribe("motor/nextService",e)}}},mobile:{location:{read:function(e){return i.read("mobile/location",e)},subscribe:function(e){return i.subscribe("mobile/location",e)},unsubscribe:function(e){return i.unsubscribe("mobile/location",e)}},heading:{subscribe:function(e){return i.subscribe("mobile/heading",e)},unsubscribe:function(e){return i.unsubscribe("mobile/heading",e)}},locationAvailability:{subscribe:function(e){return i.subscribe("mobile/locationAvailability",e)},unsubscribe:function(e){return i.unsubscribe("mobile/locationAvailability",e)}}},navigationService:{route:{subscribe:function(e){return i.subscribe("navigationService/route",e)},unsubscribe:function(e){return i.unsubscribe("navigationService/route",e)}},eta:{subscribe:function(e){return i.subscribe("navigationService/eta",e)},unsubscribe:function(e){return i.unsubscribe("navigationService/eta",e)}},distanceToDestination:{subscribe:function(e){return i.subscribe("navigationService/distanceToDestination",e)},unsubscribe:function(e){return i.unsubscribe("navigationService/distanceToDestination",e)}},status:{subscribe:function(e){return i.subscribe("navigationService/status",e)},unsubscribe:function(e){return i.unsubscribe("navigationService/status",e)}},control:{write:function(e,t){return i.write("navigationService/control",e,t)}}},user:{temperatureUnit:{subscribe:function(e){return i.subscribe("user/temperatureUnit",e)},unsubscribe:function(e){return i.unsubscribe("user/temperatureUnit",e)}},lengthUnit:{subscribe:function(e){return i.subscribe("user/lengthUnit",e)},unsubscribe:function(e){return i.unsubscribe("user/lengthUnit",e)}}},bike:{type:{read:function(e){return i.read("bike/type",e)},subscribe:function(e){return i.subscribe("bike/type",e)},unsubscribe:function(e){return i.unsubscribe("bike/type",e)}}},rideService:{speed:{subscribe:function(e){return i.subscribe("rideService/speed",e)},unsubscribe:function(e){return i.unsubscribe("rideService/speed",e)}},userPower:{subscribe:function(e){return i.subscribe("rideService/userPower",e)},unsubscribe:function(e){return i.unsubscribe("rideService/userPower",e)}},userPowerAvailability:{subscribe:function(e){return i.subscribe("rideService/userPowerAvailability",e)},unsubscribe:function(e){return i.unsubscribe("rideService/userPowerAvailability",e)}},heartRate:{subscribe:function(e){return i.subscribe("rideService/heartRate",e)},unsubscribe:function(e){return i.unsubscribe("rideService/heartRate",e)}},heartRateAvailability:{subscribe:function(e){return i.subscribe("rideService/heartRateAvailability",e)},unsubscribe:function(e){return i.unsubscribe("rideService/heartRateAvailability",e)}},cadence:{subscribe:function(e){return i.subscribe("rideService/cadence",e)},unsubscribe:function(e){return i.unsubscribe("rideService/cadence",e)}},cadenceAvailability:{subscribe:function(e){return i.subscribe("rideService/cadenceAvailability",e)},unsubscribe:function(e){return i.unsubscribe("rideService/cadenceAvailability",e)}}},tourService:{calories:{subscribe:function(e){return i.subscribe("tourService/calories",e)},unsubscribe:function(e){return i.unsubscribe("tourService/calories",e)}},ascent:{subscribe:function(e){return i.subscribe("tourService/ascent",e)},unsubscribe:function(e){return i.unsubscribe("tourService/ascent",e)}},ridingDistance:{subscribe:function(e){return i.subscribe("tourService/ridingDistance",e)},unsubscribe:function(e){return i.unsubscribe("tourService/ridingDistance",e)}},ridingDuration:{subscribe:function(e){return i.subscribe("tourService/ridingDuration",e)},unsubscribe:function(e){return i.unsubscribe("tourService/ridingDuration",e)}},averageSpeed:{subscribe:function(e){return i.subscribe("tourService/averageSpeed",e)},unsubscribe:function(e){return i.unsubscribe("tourService/averageSpeed",e)}}},devkit:{close:{write:function(e,t){return i.write("devkit/close",e,t)}},overrideThumbControllerMapping:{write:function(e,t){return i.write("devkit/overrideThumbControllerMapping",e,t)}}}};t.exports=COBI},{"./action":3,"./core":5}],5:[function(u,o,e){(function(e,n){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=new(u("events")),i=null;function s(){return n.webkit&&n.webkit.messageHandlers&&n.webkit.messageHandlers.cobiAuth&&n.webkit.messageHandlers.cobiAuth.postMessage?"ios":n.cobijsAndroidImpl&&n.cobijsAndroidImpl.messageFromJs?"android":"object"===(void 0===e?"undefined":t(e))&&"[object process]"===e.toString()?"node":void 0}o.exports.emitter=r,o.exports.getAuthentication=function(){return i},o.exports.init=function(e,t){if(null!=s())r.emit("auth",{token:e,version:t});else{console.log("COBI.init failed. Retrying in 500 milliseconds"),setTimeout(function(){return o.exports.init(e,t)},500)}},o.exports.receiveAuthentication=function(e){e&&e.confirmed&&e.apiKey?(console.log("COBI.js authenticated"),i=e):console.error("Invalid COBI.js authentication: "+JSON.stringify(e))},o.exports.receiveMessage=function(e){var t=new Date(e.timestamp||Date.now());r.emit(e.path,e.payload,t)},o.exports.sendMessage=function(e){var t=s();return i&&null===i.apiKey?(console.log("COBI.js message couldn't not be sent: missing authentication key. Retrying in 500 milliseconds"),setTimeout(function(){return o.exports.sendMessage(e)},500)):null==t?(console.log("COBI.js could not send your message. Retrying in 500 milliseconds"),setTimeout(function(){return o.exports.sendMessage(e)},500)):void r.emit("shell",e)},o.exports.getUrlParameter=function(e){var t=new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(n.location.search);return null!==t?t[1].replace(/\+/g,"%20"):null},r.on("auth",function(e){return n.webkit&&n.webkit.messageHandlers&&n.webkit.messageHandlers.cobiAuth&&n.webkit.messageHandlers.cobiAuth.postMessage?n.webkit.messageHandlers.cobiAuth.postMessage(e):n.cobijsAndroidImpl&&n.cobijsAndroidImpl.messageFromJs?n.cobijsAndroidImpl.messageFromJs("cobiAuth",JSON.stringify(e)):void 0}),r.on("shell",function(e){return n.webkit&&n.webkit.messageHandlers&&n.webkit.messageHandlers.cobiAuth&&n.webkit.messageHandlers.cobiAuth.postMessage?n.webkit.messageHandlers.cobiShell.postMessage(e):n.cobijsAndroidImpl&&n.cobijsAndroidImpl.messageFromJs?n.cobijsAndroidImpl.messageFromJs("cobiShell",JSON.stringify(e)):void 0})}).call(this,u("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:2,events:1}]},{},[4])(4)});
//# sourceMappingURL=cobi.js.map
