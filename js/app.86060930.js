(function(e){function t(t){for(var r,i,s=t[0],u=t[1],a=t[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/reactiontime/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3c7c":function(e,t,n){"use strict";n("4ae8")},"4ae8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=Object(r["e"])("h1",null,"Reaction timer",-1);function c(e,t,n,c,i,s){var u=Object(r["g"])("Block"),a=Object(r["g"])("Results");return Object(r["f"])(),Object(r["c"])(r["a"],null,[o,Object(r["e"])("button",{onClick:t[1]||(t[1]=function(){return s.start&&s.start.apply(s,arguments)}),disabled:i.isPlaying},"play",8,["disabled"]),i.isPlaying?(Object(r["f"])(),Object(r["c"])(u,{key:0,delay:i.delay,onEnd:s.endTimer},null,8,["delay","onEnd"])):Object(r["d"])("",!0),i.showResults?(Object(r["f"])(),Object(r["c"])(a,{key:1,score:i.score},null,8,["score"])):Object(r["d"])("",!0)],64)}function i(e,t,n,o,c,i){return c.showBlock?(Object(r["f"])(),Object(r["c"])("div",{key:0,class:"block",onClick:t[1]||(t[1]=function(){return i.stopTimer&&i.stopTimer.apply(i,arguments)})}," click me ")):Object(r["d"])("",!0)}var s={props:["delay"],data:function(){return{showBlock:!1,timer:null,reactionTime:0}},mounted:function(){var e=this;setTimeout((function(){e.showBlock=!0,e.startTimer()}),this.delay)},methods:{startTimer:function(){var e=this;this.timer=setInterval((function(){e.reactionTime+=10}),10)},stopTimer:function(){clearInterval(this.timer),this.$emit("end",this.reactionTime)}}};n("d4c2");s.render=i;var u=s,a={class:"rank"};function l(e,t,n,o,c,i){return Object(r["f"])(),Object(r["c"])(r["a"],null,[Object(r["e"])("p",null,"Reaction time - "+Object(r["h"])(n.score)+" ms",1),Object(r["e"])("p",a,Object(r["h"])(c.rank)+" rank",1)],64)}var f={props:["score"],data:function(){return{rank:null}},mounted:function(){this.score<250?this.rank="Gold":this.score<400?this.rank="Silver":this.rank="Bronze"}};n("91cb");f.render=l;var d=f,p={name:"App",components:{Block:u,Results:d},data:function(){return{isPlaying:!1,delay:null,score:null,showResults:!1}},methods:{start:function(){this.delay=2e3+5e3*Math.random(),this.isPlaying=!0,this.showResults=!1},endTimer:function(e){this.score=e,this.isPlaying=!1,this.showResults=!0}}};n("3c7c");p.render=c;var b=p;Object(r["b"])(b).mount("#app")},"8f4c":function(e,t,n){},"91cb":function(e,t,n){"use strict";n("8f4c")},b355:function(e,t,n){},d4c2:function(e,t,n){"use strict";n("b355")}});
//# sourceMappingURL=app.86060930.js.map