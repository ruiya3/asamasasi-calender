(function(e){function t(t){for(var a,l,c=t[0],i=t[1],s=t[2],u=0,v=[];u<c.length;u++)l=c[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&v.push(r[l][0]),r[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(v.length)v.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},o=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"db",(function(){return X}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",[n("calendar")],1)],1)},o=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{on:{click:function(t){e.type="month"}}},[e._v("あさまさし予定表管理画面 ")]),n("v-row",{staticClass:"fill-height"},[n("v-col",[n("v-sheet",{attrs:{height:"64"}},[n("v-toolbar",{attrs:{flat:""}},[n("v-btn",{staticClass:"mr-4",attrs:{color:"primary",dark:""},on:{click:function(t){e.dialog=!0}}},[e._v(" 新規イベント追加 ")]),n("v-btn",{attrs:{outlined:"",clas:"mr-4",color:"grey darken-2"},on:{click:e.setToday}},[e._v(" Today ")]),n("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:e.prev}},[n("v-icon",{attrs:{small:""}},[e._v(" mdi-chevron-left ")])],1),n("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:e.next}},[n("v-icon",{attrs:{small:""}},[e._v(" mdi-chevron-right ")])],1),e.$refs.calendar?n("v-toolbar-title",[e._v(" "+e._s(e.$refs.calendar.title)+" ")]):e._e(),n("v-spacer"),n("v-menu",{attrs:{bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{outlined:"",color:"grey darken-2"}},"v-btn",r,!1),a),[n("span",[e._v(e._s(e.typeToLabel[e.type]))]),n("v-icon",{attrs:{right:""}},[e._v(" mdi-menu-down ")])],1)]}}])},[n("v-list",[n("v-list-item",{on:{click:function(t){e.type="day"}}},[n("v-list-item-title",[e._v("日")])],1),n("v-list-item",{on:{click:function(t){e.type="week"}}},[n("v-list-item-title",[e._v("週")])],1),n("v-list-item",{on:{click:function(t){e.type="month"}}},[n("v-list-item-title",[e._v("月")])],1),n("v-list-item",{on:{click:function(t){e.type="4day"}}},[n("v-list-item-title",[e._v("4日")])],1)],1)],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-container",[n("v-form",{on:{submit:function(t){return t.preventDefault(),e.addEvent.apply(null,arguments)}}},[n("v-text-field",{attrs:{type:"text",label:"イベント名"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("v-text-field",{attrs:{type:"text",label:"詳細"},model:{value:e.details,callback:function(t){e.details=t},expression:"details"}}),n("v-text-field",{attrs:{type:"date",label:"開始日時"},model:{value:e.start,callback:function(t){e.start=t},expression:"start"}}),n("v-text-field",{attrs:{type:"date",label:"終了日時"},model:{value:e.end,callback:function(t){e.end=t},expression:"end"}}),n("v-text-field",{attrs:{type:"color",label:"色"},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}}),n("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"primary"},on:{click:function(t){t.stopPropagation(),e.dialog=e.fale}}},[e._v(" Create Event")])],1)],1)],1)],1),n("v-sheet",{attrs:{height:"600"}},[n("v-calendar",{ref:"calendar",attrs:{color:"primary",events:e.events,"event-color":e.getEventColor,type:e.type},on:{"click:event":e.showEvent,"click:more":e.viewDay,"click:date":e.viewDay},model:{value:e.focus,callback:function(t){e.focus=t},expression:"focus"}}),n("v-menu",{attrs:{"close-on-content-click":!1,activator:e.selectedElement,"offset-x":""},model:{value:e.selectedOpen,callback:function(t){e.selectedOpen=t},expression:"selectedOpen"}},[n("v-card",{attrs:{color:"grey lighten-4","min-width":"350px",flat:""}},[n("v-toolbar",{attrs:{color:e.selectedEvent.color,dark:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.deleteEvent(e.selectedEvent.id)}}},[n("v-icon",[e._v("mdi-delete")])],1),n("v-toolbar-title",{domProps:{innerHTML:e._s(e.selectedEvent.name)}}),n("v-spacer")],1),n("v-card-text",[e.currentlyEditing!=e.selectedEvent.id?n("form",[e._v(" "+e._s(e.selectedEvent.details)+" ")]):n("form",[n("textarea-autosize",{staticStyle:{width:"100%"},attrs:{type:"text","min-height":100,placeholder:"add note"},model:{value:e.selectedEvent.details,callback:function(t){e.$set(e.selectedEvent,"details",t)},expression:"selectedEvent.details"}})],1)]),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(t){e.selectedOpen=!1}}},[e._v(" Close ")]),e.currentlyEditing!=e.selectedEvent.id?n("v-btn",{attrs:{text:""},on:{click:function(t){return t.preventDefault(),e.editEvent(e.selectedEvent)}}},[e._v(" Edit ")]):n("v-btn",{attrs:{text:""},on:{click:function(t){return t.preventDefault(),e.updateEvent(e.selectedEvent)}}},[e._v(" Save ")])],1)],1)],1)],1)],1)],1)],1)},c=[],i=n("1da1"),s=(n("96cf"),n("159b"),n("b0c0"),{data:function(){return{today:(new Date).toISOString().substr(0,10),focus:(new Date).toISOString().substr(0,10),type:"month",typeToLabel:{month:"月",week:"週",day:"日","4day":"４日"},name:null,details:null,start:null,end:null,color:"red",currentlyEditing:null,selectedEvent:{},selectedElement:null,selectedOpen:!1,events:[],dialog:!1}},mounted:function(){this.getEvents()},methods:{getEvents:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,X.collection("calEvent").get();case 2:n=t.sent,a=[],n.forEach((function(e){var t=e.data();t.id=e.id,a.push(t)})),e.events=a,console.log(e.events);case 7:case"end":return t.stop()}}),t)})))()},addEvent:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.name&&e.start&&e.end)){t.next=11;break}return t.next=3,X.collection("calEvent").add({name:e.name,details:e.details,start:e.start,end:e.end,color:e.color});case 3:e.getEvents(),e.name="",e.details="",e.start="",e.end="",e.color="red",t.next=12;break;case 11:alert("名前、開始日時、終了日時は必須です");case 12:case"end":return t.stop()}}),t)})))()},updateEvent:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,X.collection("calEvent").doc(t.currentlyEditing).update({details:e.details});case 2:t.selectedOpen=!1,t.currentlyEditing=null;case 4:case"end":return n.stop()}}),n)})))()},deleteEvent:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,X.collection("calEvent").doc(e).delete();case 2:t.selectedOpen=!1,t.getEvents();case 4:case"end":return n.stop()}}),n)})))()},viewDay:function(e){var t=e.date;this.focus=t,this.type="day"},getEventColor:function(e){return e.color},setToday:function(){this.focus=""},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},editEvent:function(e){this.currentlyEditing=e.id},showEvent:function(e){var t=this,n=e.nativeEvent,a=e.event,r=function(){t.selectedEvent=a,t.selectedElement=n.target,setTimeout((function(){t.selectedOpen=!0}),10)};this.selectedOpen?(this.selectedOpen=!1,setTimeout(r,10)):r(),n.stopPropagation()},rnd:function(e,t){return Math.floor((t-e+1)*Math.random())+e}}}),d=s,u=n("2877"),v=n("6544"),f=n.n(v),p=n("8336"),m=n("a4f6"),b=n("b0af"),h=n("99d9"),y=n("62ad"),g=n("a523"),x=n("169a"),E=n("4bd4"),k=n("132d"),w=n("8860"),_=n("da13"),O=n("5d23"),V=n("e449"),j=n("0fd9"),C=n("8dd9"),T=n("2fa4"),S=n("8654"),P=n("71d9"),D=n("2a7f"),R=Object(u["a"])(d,l,c,!1,null,null,null),I=R.exports;f()(R,{VBtn:p["a"],VCalendar:m["a"],VCard:b["a"],VCardActions:h["a"],VCardText:h["b"],VCol:y["a"],VContainer:g["a"],VDialog:x["a"],VForm:E["a"],VIcon:k["a"],VList:w["a"],VListItem:_["a"],VListItemTitle:O["a"],VMenu:V["a"],VRow:j["a"],VSheet:C["a"],VSpacer:T["a"],VTextField:S["a"],VToolbar:P["a"],VToolbarTitle:D["a"]});var L={name:"App",components:{Calendar:I},data:function(){return{}}},M=L,$=n("7496"),A=n("a75b"),z=Object(u["a"])(M,r,o,!1,null,null,null),F=z.exports;f()(z,{VApp:$["a"],VContent:A["a"]});var J=n("f309"),B=n("dca6"),H=n.n(B);a["a"].use(J["a"]);var K=new J["a"]({lang:{locales:{ja:H.a},current:"ja"}}),N=n("3f9d"),U=n("260b");n("e71f");a["a"].use(N["a"]),a["a"].config.productionTip=!1,U["a"].initializeApp({apiKey:"AIzaSyCmxvYe0MCXxcy4vFoa4nvLJENdddVP2L0",authDomain:"vue-calender-be5cf.firebaseapp.com",databaseURL:"https://vue-calender-be5cf-default-rtdb.firebaseio.com",projectId:"vue-calender-be5cf",storageBucket:"vue-calender-be5cf.appspot.com",messagingSenderId:"930798263736",appId:"1:930798263736:web:734eceedd062d7a9b2434d"});var X=U["a"].firestore();new a["a"]({vuetify:K,render:function(e){return e(F)}}).$mount("#app")}});
//# sourceMappingURL=app.49f2835b.js.map