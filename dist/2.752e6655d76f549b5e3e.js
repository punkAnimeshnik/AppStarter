(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{15:function(t,s,e){},16:function(t,s,e){"use strict";var a=e(15);e.n(a).a},17:function(t,s,e){"use strict";e.r(s);var a={props:["massive"],data(){return{time_cls:"time",fa:"fa fa-pause",one:1,date:new Date,sec:0,props:["second"],timePassed:0,timerInterval:null,forever:!1,Play:!0,counter:this.massive}},computed:{timeLeft(){return Math.floor(this.sec/1)+this.timePassed},formattedTimeLeft(){const t=this.timeLeft,s=Math.floor(t/60);let e=t%60,a=s%60,i=Math.floor(s/60)%60;return e<10&&(e="0"+e),a<10&&(a="0"+a),i<10&&(i="0"+i),`${i}:${a}:${e}`}},mounted(){this.newTime(),this.startTimer(),this.pls()},methods:{newTime(){this.data=(new Date).getTime(),this.sec=(this.data-this.counter.start)/1e3,console.log(this.sec)},startTimer(){this.timerInterval=setInterval(()=>this.timePassed+=this.one,1e3)},pls(){!0!==this.counter.pauseplay&&(this.pauseplay(),this.Play=!1)},pauseplay(){!0===this.Play?(console.log("play->pause "+this.one),this.fa="fa fa-play",this.time_cls="time-ps",this.startTimer(),this.one=0,this.Play=!1):(console.log("pause->play "+this.one),this.Play=!0,this.time_cls="time",this.fa="fa fa-pause",this.one=1,clearInterval(this.timerInterval))}}},i=(e(16),e(5)),n=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"timers",on:{native:function(t){}}},[e("div",{staticClass:"timer"},[e("div",{staticClass:"name"},[e("h3",[t._v(t._s(t.massive.name))])]),t._v(" "),e("div",{class:t.time_cls},[e("time",{attrs:{datatype:"hh:mm:ss"}},[t._v(t._s(this.formattedTimeLeft))])]),t._v(" "),e("div",{staticClass:"button"},[e("button",{on:{click:function(s){return t.$emit("Del",t.massive.id)}}},[e("i",{staticClass:"fa fa-trash"})]),t._v(" "),e("button",{on:{click:t.pauseplay}},[e("i",{class:t.fa})])])])])}),[],!1,null,"6e839999",null);s.default=n.exports}}]);