(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)r=o[u],n[r]&&p.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,o=1;o<i.length;o++){var l=i[o];0!==n[l]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},n={app:0},s=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"051c":function(t,e,i){"use strict";var a=i("c0bd"),n=i.n(a);n.a},2107:function(t,e,i){"use strict";i.d(e,"b",function(){return a}),i.d(e,"d",function(){return n}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return r});var a="CHANGE_PEDIGREE",n="OPEN_SNACKBAR",s="CLOSE_SNACKBAR",r="CHANGE_AJAX_STATE"},2778:function(t,e,i){"use strict";i.r(e);var a=i("bd86"),n=i("2107"),s={pedigree:{}},r=Object(a["a"])({},n["b"],function(t,e){t.pedigree=e});e["default"]={state:s,mutations:r}},"56d7":function(t,e,i){"use strict";i.r(e);var a={};i.r(a),i.d(a,"changePedigree",function(){return m}),i.d(a,"openSnackbar",function(){return v}),i.d(a,"closeSnackbar",function(){return f}),i.d(a,"changeAjaxState",function(){return h});var n={};i.r(n),i.d(n,"getPedigree",function(){return _}),i.d(n,"getSnackbar",function(){return g}),i.d(n,"getAjaxState",function(){return b});i("cadf"),i("551c"),i("f751"),i("097d");var s=i("2b0e"),r=i("bb71");i("da64");s["a"].use(r["a"],{iconfont:"md"});var o=i("795b"),l=i.n(o),c=i("bc3a"),d=i.n(c),u=(i("72bf"),i("2f62")),p=i("2107"),m=function(t,e){t.commit(p["b"],e)},v=function(t,e){t.commit(p["d"],e)},f=function(t,e){t.commit(p["c"],e)},h=function(t,e){t.commit(p["a"],e)},_=function(t){return t.pedigree},g=function(t){return t.snackbar},b=function(t){return t.ajaxState},x=i("81ea");s["a"].use(u["a"]);var k=new u["a"].Store({actions:a,getters:n,modules:x["default"],strict:!0}),y=0;s["a"].prototype.$http=d.a.create({baseURL:"http://ec2-18-220-151-89.us-east-2.compute.amazonaws.com:8090/",timeout:3e4,headers:{"Content-Type":"application/json;charset=UTF-8"}}),s["a"].prototype.$http.interceptors.request.use(function(t){return y++,!1!==t.data.ajaxAnimation&&1==y&&k.dispatch("changeAjaxState",{isShow:!0}),console.log("-------------보낸 데이터--------------"),console.log(t.url),console.log(t.data),console.log(t.data),console.log("------------------------------------"),t},function(t){return k.dispatch("changeAjaxState",{isShow:!1}),l.a.reject(t)}),s["a"].prototype.$http.interceptors.response.use(function(t){return y--,0==y&&k.dispatch("changeAjaxState",{isShow:!1}),console.log("-------------받은 데이터--------------"),console.log(t),console.log("------------------------------------"),t.data},function(t){return y--,k.dispatch("changeAjaxState",{isShow:!1}),l.a.reject(t)});var I=i("f499"),C=i.n(I),w=(i("a481"),i("6b54"),i("c5f6"),i("d225")),S=i("b0b4"),P=function(){function t(e){Object(w["a"])(this,t),t.instance||function(){String.prototype.zf=function(t){return"0".slice(0,t-this.length)+this},Number.prototype.zf=function(t){return this.toString().zf(t)},Date.prototype.format=function(t){var e,i,a;return this.valueOf()?(e=["일","월","화","수","목","금","토"],i=this,a=-1,t.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi,function(t){switch(t){case"yyyy":return i.getFullYear();case"yy":return i.getFullYear().toString().substring(2,4);case"MM":return(i.getMonth()+1).zf(2);case"dd":return i.getDate().zf(2);case"E":return e[i.getDay()];case"HH":return i.getHours().zf(2);case"hh":return((a=i.getHours()%12)?a:12).zf(2);case"mm":return i.getMinutes().zf(2);case"ss":return i.getSeconds().zf(2);case"a/p":return i.getHours()<12?"오전":"오후";default:return t}})):""},t.instance=!0}(),this.date=e?new Date(e):new Date}return Object(S["a"])(t,[{key:"lastMonth",value:function(){var t=new Date(this.date.getFullYear(),this.date.getMonth(),0).getDate();return this.date.getDate()>t&&this.date.setDate(t),this.date.setMonth(this.date.getMonth()-1),this}},{key:"lastWeek",value:function(){var t=this.date.getDate();return this.date.setDate(t-7),this}},{key:"start",value:function(){return this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),this}},{key:"end",value:function(){return this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),this.date.setTime(this.date.getTime()+864e5-1),this}},{key:"done",value:function(){return this.date}},{key:"format",value:function(t){return this.date.format(t)}}]),t}();s["a"].prototype.$util={copy:function(t){return JSON.parse(C()(t))},getNumber:function(t){return t.replace(/[^0-9]/g,"")},setComma:function(t){return t.replace(/[^0-9]/g,"").toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},_Date:P};var j=i("8c4f"),V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"fill-height":""}},[i("v-layout",{attrs:{"align-center":"","justify-center":"","text-xs-center":"",row:"","fill-height":""}},[i("v-flex",{staticClass:"mb-5",attrs:{xs12:""}},[i("object",{attrs:{height:"340",data:"/image/logo.svg",type:"image/svg+xml"}}),i("v-card",{staticClass:"list",attrs:{flat:""}},[i("v-list",{staticClass:"pa-0 mt-4"},t._l(t.pedigreeList,function(e){return i("div",{key:e._id},[e.header?i("v-subheader",{key:e._id},[t._v(t._s(e.header))]):e.divider?i("v-divider",{key:e._id,attrs:{inset:e.inset}}):i("v-list-tile",{key:e._id,attrs:{avatar:""},on:{click:function(i){return t.onClickList(e.obj)}}},[i("v-list-tile-avatar",[i("img",{attrs:{src:e.avatar}})]),i("v-list-tile-content",[i("v-list-tile-title",{staticClass:"font-weight-medium",domProps:{innerHTML:t._s(e.title)}}),i("v-list-tile-sub-title",{domProps:{innerHTML:t._s(e.subtitle)}})],1),i("v-btn",{attrs:{flat:"",icon:"",color:"pink"},on:{click:function(i){return i.stopPropagation(),t.onClickDeleteBtn(e.obj)}}},[i("v-icon",[t._v("close")])],1)],1)],1)}),0),1==t.pedigreeList.length?i("v-alert",{attrs:{value:!0,color:"#37aa66"}},[t._v("여러분의 족보를 생성하세요.")]):t._e()],1),i("v-card",{staticClass:"mb-5",attrs:{flat:""}},[i("v-btn",{attrs:{flat:"",large:"",icon:"",color:"blue"},on:{click:t.openPopup}},[i("v-icon",[t._v("group_add")])],1)],1),i("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"title mt-3"},[t._v("새로운 족보를 생성합니다.")])]),i("v-card-text",{staticClass:"py-0"},[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-container",{staticClass:"pt-0 pb-3",attrs:{"grid-list-md":""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[i("v-text-field",{attrs:{label:"성씨 *",required:"",rules:t.rule.require},model:{value:t.editedItem.surname,callback:function(e){t.$set(t.editedItem,"surname",e)},expression:"editedItem.surname"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[i("v-text-field",{attrs:{label:"성씨 한문"},model:{value:t.editedItem.surname_chinese,callback:function(e){t.$set(t.editedItem,"surname_chinese",e)},expression:"editedItem.surname_chinese"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[i("v-text-field",{attrs:{label:"시조 *",required:"",rules:t.rule.require},model:{value:t.editedItem.root_father,callback:function(e){t.$set(t.editedItem,"root_father",e)},expression:"editedItem.root_father"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[i("v-text-field",{attrs:{label:"시조 한문"},model:{value:t.editedItem.root_father_chinese,callback:function(e){t.$set(t.editedItem,"root_father_chinese",e)},expression:"editedItem.root_father_chinese"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[i("v-text-field",{attrs:{label:"본관 *",required:"",rules:t.rule.require},model:{value:t.editedItem.family_origin,callback:function(e){t.$set(t.editedItem,"family_origin",e)},expression:"editedItem.family_origin"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[i("v-text-field",{attrs:{label:"본관 한문"},model:{value:t.editedItem.family_origin_chinese,callback:function(e){t.$set(t.editedItem,"family_origin_chinese",e)},expression:"editedItem.family_origin_chinese"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[i("v-text-field",{attrs:{label:"중시조 *",required:"",rules:t.rule.require},model:{value:t.editedItem.middle_tier_name,callback:function(e){t.$set(t.editedItem,"middle_tier_name",e)},expression:"editedItem.middle_tier_name"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[i("v-text-field",{attrs:{label:"중시조 한문"},model:{value:t.editedItem.middle_tier_name_Chinese,callback:function(e){t.$set(t.editedItem,"middle_tier_name_Chinese",e)},expression:"editedItem.middle_tier_name_Chinese"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[i("v-text-field",{attrs:{type:"number",label:"세대입력"},model:{value:t.editedItem.middle_tier_generation,callback:function(e){t.$set(t.editedItem,"middle_tier_generation",e)},expression:"editedItem.middle_tier_generation"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[i("v-text-field",{attrs:{label:"파명입력"},model:{value:t.editedItem.middle_tier_faction,callback:function(e){t.$set(t.editedItem,"middle_tier_faction",e)},expression:"editedItem.middle_tier_faction"}})],1)],1)],1)],1),i("small",{staticClass:"ml-4"},[t._v("* 필수 항목")])],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"red",flat:""},on:{click:t.close}},[t._v("닫기")]),i("v-btn",{attrs:{color:"blue",flat:""},on:{click:t.create}},[t._v("생성")])],1)],1)],1)],1)],1)],1)},$=[],L={require:[function(t){return!!t||"필수 입력값 입니다."}]},T={data:function(){return{rule:L,pedigreeList:[],dialog:!1,valid:!0,editedItem:{surname:"",surname_chinese:"",root_father:"",root_father_chinese:"",family_origin:"",family_origin_chinese:"",middle_tier_name:"",middle_tier_name_Chinese:"",middle_tier_generation:"",middle_tier_faction:""}}},created:function(){this.init()},methods:{init:function(){this.loadPedigreeList()},loadPedigreeList:function(){var t=this,e=[{header:"조회할 족보를 선택하세요."}];this.$http.post("/api/load_pedigree_list",{}).then(function(i){for(var a in console.log(i.pedigreeList),i.pedigreeList)0!=a&&e.push({divider:!0,inset:!0}),e.push(t.makeViewObject(i.pedigreeList[a]));t.pedigreeList=e}).catch(function(t){})},makeViewObject:function(t){return{avatar:t.img?"":"/image/person.png",title:t.surname,subtitle:"<span class='text--primary'>"+t.surname_chinese+"</span> "+t.middle_tier_faction+" "+t.middle_tier_generation+"세 세보",obj:t}},openPopup:function(){console.log("create"),this.dialog=!this.dialog},onClickList:function(t){this.$store.dispatch("changePedigree",t),Lt.push("main")},onClickDeleteBtn:function(t){var e=this;if(confirm("정말 삭제하시겠습니까?")){var i={_id:t._id};this.$http.post("/api/delete_pedigree",i).then(function(i){var a=e.pedigreeList.indexOf(t);e.pedigreeList.splice(a,1),e.$store.dispatch("openSnackbar",{msg:"삭제되었습니다."}),e.dialog=!1})}},create:function(){var t=this;this.$refs.form.validate()&&(this.$http.post("/api/save_pedigree",this.editedItem).then(function(e){t.editedItem.id=e.id,t.pedigreeList.push(t.makeViewObject(t.$util.copy(t.editedItem)))}),this.$store.dispatch("openSnackbar",{msg:"등록되었습니다."}),this.dialog=!1)},close:function(){this.dialog=!1,this.$refs.form.reset()}}},D=T,O=(i("b564"),i("2877")),M=i("6544"),A=i.n(M),q=i("0798"),E=i("8336"),z=i("b0af"),F=i("99d9"),B=i("12b2"),N=i("a523"),H=i("169a"),G=i("ce7e"),R=i("0e8f"),U=i("4bd4"),J=i("132d"),K=i("a722"),Y=i("8860"),W=i("ba95"),X=i("c954"),Q=i("5d23"),Z=i("9910"),tt=i("e0c7"),et=i("2677"),it=Object(O["a"])(D,V,$,!1,null,"48f88471",null),at=it.exports;A()(it,{VAlert:q["a"],VBtn:E["a"],VCard:z["a"],VCardActions:F["a"],VCardText:F["b"],VCardTitle:B["a"],VContainer:N["a"],VDialog:H["a"],VDivider:G["a"],VFlex:R["a"],VForm:U["a"],VIcon:J["a"],VLayout:K["a"],VList:Y["a"],VListTile:W["a"],VListTileAvatar:X["a"],VListTileContent:Q["a"],VListTileSubTitle:Q["b"],VListTileTitle:Q["c"],VSpacer:Z["a"],VSubheader:tt["a"],VTextField:et["a"]});var nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-navigation-drawer",{staticStyle:{"margin-top":"58px"},attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-layout",{attrs:{row:"","align-center":""}},[i("v-flex",[i("v-subheader",[t._v(t._s(t.pedigreeTitle))])],1)],1),i("v-list",{attrs:{dense:""}},[t._l(t.items,function(e){return[e.children?i("v-list-group",{key:e.text,attrs:{"prepend-icon":e.model?e.icon:e["icon-alt"],"append-icon":""},model:{value:e.model,callback:function(i){t.$set(e,"model",i)},expression:"item.model"}},[i("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.text))])],1)],1),t._l(e.children,function(e,a){return i("v-list-tile",{key:a,on:{click:function(t){}}},[e.icon?i("v-list-tile-action",[i("v-icon",[t._v(t._s(e.icon))])],1):t._e(),i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.text))])],1)],1)})],2):i("v-list-tile",{key:e.text,on:{click:function(i){return t.onClick_Menu(e)}}},[i("v-list-tile-action",[i("v-icon",[t._v(t._s(e.icon))])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.text))])],1)],1)]})],2)],1),i("v-toolbar",{staticStyle:{height:"58px"},attrs:{color:"teal darken-2",dark:"",app:"","clipped-left":t.$vuetify.breakpoint.mdAndUp,fixed:""}},[i("v-toolbar-title",{staticClass:"pa-0 ma-0"},[i("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1),i("v-spacer"),i("v-text-field",{staticClass:"mt-2",attrs:{flat:"","solo-inverted":"",label:"Search"}}),i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("search")])],1),i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("apps")])],1)],1),i("v-content",{staticClass:"pa-0"},[i("v-container",{attrs:{fluid:"","fill-height":""}},[i("v-layout",{attrs:{"justify-center":"","align-center":""}},[i("div",{staticStyle:{width:"100%"}},[i("v-btn",{attrs:{color:"pink"},on:{click:t.onClick_upPageLoad}},[i("v-icon",[t._v("위로 불러오기")])],1),t._l(t.personlist,function(e,a){return i("div",{key:a},[i("div",{staticClass:"person-list-wrap"},[i("div",{staticClass:"generation-list-box"},[t._v(t._s(t.startGeneration+a)+" 세대")]),i("div",{staticClass:"person-list-box"},t._l(e,function(e,a){return i("div",{key:a,staticClass:"person-item-wrap text-xs-center",staticStyle:{position:"relative"}},[e.id_parent&&e.firstChild?i("div",{staticClass:"vertical-line"}):e.id_parent?i("div",{staticClass:"horizon-line"}):t._e(),i("v-avatar",{attrs:{size:"36px"}},[(e.img_profile,i("img",{attrs:{src:"/image/person.png",alt:"프로필 사진"}}))]),i("div",{staticClass:"text-overflow"},[i("span",{staticClass:"body-2"},[t._v(t._s(e.name))]),i("span",{staticClass:"ml-1"},[t._v(t._s(e.name_chinese))])]),i("div",{staticClass:"text-overflow"},[i("span",{staticClass:"ml-1"},[t._v(t._s(e.age)+"세")]),i("span",{staticClass:"mx-1"},[t._v("-")]),i("span",[t._v(t._s(e.is_male?"남자":"여자"))])]),i("div",[t._v(t._s(e.birth_date))]),i("v-menu",{attrs:{"offset-y":"",transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-btn",t._g({staticClass:"ma-0",staticStyle:{position:"absolute",top:"0px",right:"0px"},attrs:{color:"primary",dark:"",flat:"",icon:""}},a),[i("v-icon",[t._v("more_vert")])],1)]}}],null,!0)},[i("v-list",[i("v-list-tile",{on:{click:function(i){return t.onClick_addRelationPerson(e)}}},[i("v-list-tile-title",[t._v("가족추가")])],1),i("v-list-tile",{on:{click:function(i){return t.onClick_personDetailView(e)}}},[i("v-list-tile-title",[t._v("상세보기")])],1),i("v-list-tile",{on:{click:function(i){return t.onClick_personDelete(e)}}},[i("v-list-tile-title",[t._v("삭제하기")])],1)],1)],1)],1)}),0)])])}),i("v-btn",{attrs:{color:"pink"},on:{click:t.onClick_downPageLoad}},[i("v-icon",[t._v("아래로 불러오기")])],1)],2)])],1)],1),i("v-btn",{staticClass:"mb-5 mr-2",attrs:{fab:"",bottom:"",right:"",small:"",color:"pink",dark:"",fixed:""},on:{click:function(e){e.stopPropagation(),t.dialog=!t.dialog}}},[i("v-icon",[t._v("add")])],1),i("v-dialog",{attrs:{width:"800px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[t._v("xxx")])],1),i("v-dialog",{attrs:{persistent:"","max-width":"600px"},on:{scroll:function(t){return t.stopPropagation(),(!0)(t)},click:function(t){return t.stopPropagation(),(!0)(t)}},model:{value:t.personDialog,callback:function(e){t.personDialog=e},expression:"personDialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("가족 추가")])]),i("v-card-text",[i("v-container",{staticClass:"pb-0",attrs:{"grid-list-md":""}},[i("v-form",{ref:"form"},[i("v-layout",{attrs:{wrap:""}},[t.relationPersonItem?i("v-flex",{attrs:{xs12:""}},[i("div",{attrs:{role:"listitem"}},[i("a",{staticClass:"v-list__tile v-list__tile--link v-list__tile--avatar theme--light"},[i("div",{staticClass:"v-list__tile__avatar"},[i("div",{staticClass:"v-avatar",staticStyle:{height:"40px",width:"40px"}},[(t.relationPersonItem.img_profile,i("img",{attrs:{src:"/image/person.png"}}))])]),i("div",{staticClass:"v-list__tile__content"},[i("div",{staticClass:"v-list__tile__title"},[t._v(t._s(t.relationPersonItem.generation)+"세대 "+t._s(t.relationPersonItem.name)+" "+t._s(t.relationPersonItem.name_chinese)+" "+t._s(t.relationPersonItem.age)+"세 "+t._s(t.relationPersonItem.is_male?"남자":"여자"))]),i("div",{staticClass:"v-list__tile__sub-title"},[i("span",{staticClass:"text--primary"},[t._v(t._s(t.relationPersonItem.birth_date)+" / "+t._s(t.relationPersonItem.death_date))]),t._v("\n                        "+t._s(t.relationPersonItem.job)+"\n                      ")])]),i("div",{staticClass:"v-list__tile__content subheading font-weight-medium",staticStyle:{display:"flex",padding:"0 10px"}},[t._v("의")]),i("div",{staticClass:"v-list__tile__content",staticStyle:{"max-width":"200px"}},[i("v-select",{staticClass:"ma-0",attrs:{items:[{text:"배우자",value:0},{text:"자녀",value:1},{text:"형제",value:2},{text:"부모",value:3}],"hide-details":!0,"persistent-hint":!1,"single-line":!0,label:"관계"},on:{change:function(e){return t.onChange_relationTypeSelect()}},model:{value:t.relationType,callback:function(e){t.relationType=e},expression:"relationType"}})],1)])])]):t._e(),i("v-flex",{attrs:{xs6:""}},[i("v-text-field",{attrs:{required:"",mask:"###",rules:t.rules.require,disabled:Boolean(t.relationPersonItem),label:"세대 입력 *",suffix:"세대"},model:{value:t.personItem.generation,callback:function(e){t.$set(t.personItem,"generation",e)},expression:"personItem.generation"}})],1),i("v-flex",{attrs:{xs6:""}},[i("v-select",{attrs:{items:[{text:"남성",value:!0},{text:"여성",value:!1}],"item-value":"value",label:"성별"},model:{value:t.personItem.is_male,callback:function(e){t.$set(t.personItem,"is_male",e)},expression:"personItem.is_male"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[i("v-text-field",{attrs:{required:"",rules:t.rules.require,label:"이름 *"},model:{value:t.personItem.name,callback:function(e){t.$set(t.personItem,"name",e)},expression:"personItem.name"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[i("v-text-field",{attrs:{label:"이름 - 한문"},model:{value:t.personItem.name_chinese,callback:function(e){t.$set(t.personItem,"name_chinese",e)},expression:"personItem.name_chinese"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[i("v-text-field",{attrs:{mask:"###",label:"나이"},model:{value:t.personItem.age,callback:function(e){t.$set(t.personItem,"age",e)},expression:"personItem.age"}})],1),i("v-flex",{attrs:{xs12:"",sm6:""}},[i("v-text-field",{attrs:{label:"직업"},model:{value:t.personItem.job,callback:function(e){t.$set(t.personItem,"job",e)},expression:"personItem.job"}})],1),i("v-flex",{attrs:{xs12:""}},[i("date-picker",{attrs:{value:t.personItem.birth_date,obj:t.personItem,"obj-key":"birth_date",label:"태어난 일자"}})],1),i("v-flex",{attrs:{xs12:""}},[i("date-picker",{attrs:{value:t.personItem.death_date,obj:t.personItem,"obj-key":"death_date",label:"사망 일자"}})],1)],1)],1),i("div",{staticClass:"text-xs-right"},[i("small",[t._v("*필수 입력 항목 입니다")])])],1),i("v-divider",{staticClass:"mt-4"}),i("v-container",{staticClass:"pb-0",staticStyle:{"max-height":"150px",overflow:"auto"},attrs:{"grid-list-md":""}},t._l(t.personItem.tag_list,function(e,a){return i("v-layout",{key:a,attrs:{wrap:""}},[i("v-flex",{attrs:{xs3:""}},[i("v-text-field",{attrs:{label:"태그명"},model:{value:e.key,callback:function(i){t.$set(e,"key",i)},expression:"item.key"}})],1),i("v-flex",{attrs:{xs8:""}},[i("v-text-field",{attrs:{label:"태그값"},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}})],1),i("v-flex",{attrs:{xs1:"","align-self-center":""}},[i("v-btn",{staticClass:"ma-0 pa-0",attrs:{flat:"",icon:"",color:"red"}},[i("v-icon",[t._v("close")])],1)],1)],1)}),1),i("v-container",{staticClass:"ma-0 pa-0"},[i("v-layout",[i("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[i("v-btn",{staticClass:"ma-0 pa-0 mr-3",attrs:{flat:"",block:"",dark:"",color:"green"},on:{click:t.onClick_addTagBtn}},[i("v-icon",[t._v("add")])],1)],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.onClick_close}},[t._v("취소")]),i("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.onClick_save}},[t._v("저장")])],1)],1)],1)],1)},st=[],rt=i("cebc"),ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[i("v-text-field",{attrs:{slot:"activator",label:t.label,"prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),i("v-date-picker",{attrs:{locale:"kr","no-title":"",scrollable:""},on:{input:function(e){t.menu=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)},lt=[],ct={props:["obj","objKey","label","value"],data:function(){return{menu:!1,date:""}},watch:{date:function(t){this.obj[this.objKey]=t},value:function(t){t&&10==t.length?this.date=t:this.date=(new Date).toISOString().substr(0,10)}},created:function(){console.log("xx")},mounted:function(){},methods:{}},dt=ct,ut=i("2e4b"),pt=i("e449"),mt=Object(O["a"])(dt,ot,lt,!1,null,null,null),vt=mt.exports;A()(mt,{VDatePicker:ut["a"],VMenu:pt["a"],VTextField:et["a"]});var ft={components:{datePicker:vt},data:function(){return{rules:L,dialog:!1,personDialog:!1,drawer:null,pedigreeObject:null,generation:null,startGeneration:1,pedigreeTitle:"",items:[{icon:"person_add",text:"구성원추가",menu:"add_person"},{icon:"link",text:"직계 가족만 보기"},{icon:"get_app",text:"족보 다운로드"}],personItem:{id:null,generation:null,name:null,name_chinese:null,is_male:null,age:null,birth_timestamp:null,death_timestamp:null,job:null,img_profile:null,id_parent:null,id_mate_list:[],id_child_list:[],tag_list:[],birth_date:"",death_date:""},relationPersonItem:null,relationType:null,personlist:[],personMap:{}}},props:{source:String},created:function(){this.init()},methods:{init:function(){this.pedigreeObject=this.$store.getters.getPedigree.pedigree,this.generation=+this.pedigreeObject.middle_tier_generation,this.pedigreeTitle=this.pedigreeObject.surname+" "+this.pedigreeObject.surname_chinese+" "+this.pedigreeObject.middle_tier_faction,this.loadPersonData()},closePersonPopup:function(){this.$refs.form.reset(),this.personDialog=!1,this.relationPersonItem=null,this.relationType=null,this.personItem.tag_list=[]},onClick_Menu:function(t){"add_person"==t.menu&&(this.personDialog=!0)},onClick_upPageLoad:function(){},onClick_downPageLoad:function(){},onClick_close:function(){this.closePersonPopup()},onClick_save:function(){this.$refs.form.validate()?(this.personItem.birth_date&&(this.personItem.birth_timestamp=new Date(this.personItem.birth_date).getTime()),this.personItem.death_date&&(this.personItem.death_timestamp=new Date(this.personItem.death_date).getTime()),this.relationPersonItem?this.createPerson(this.relationType):this.createPerson(-1)):alert("필수값을 입력하세요.")},createPerson:function(t){var e=this;-1===t?this.$http.post("/api/create_person",{rq:this.personItem}).then(function(t){e.$store.dispatch("openSnackbar",{msg:"저장되었습니다."}),e.closePersonPopup(),e.loadPersonData()}):0===t?this.$http.post("/api/create_person",{rq:this.personItem}).then(function(t){e.$store.dispatch("openSnackbar",{msg:"저장되었습니다."}),e.closePersonPopup(),e.loadPersonData()}):1===t?this.$http.post("/api/create_person_child",{rq:Object(rt["a"])({},this.personItem,{relationPersonItem:this.relationPersonItem})}).then(function(t){e.$store.dispatch("openSnackbar",{msg:"저장되었습니다."}),e.closePersonPopup(),e.loadPersonData()}):2===t?this.$http.post("/api/create_person",{rq:this.personItem}).then(function(t){e.$store.dispatch("openSnackbar",{msg:"저장되었습니다."}),e.closePersonPopup(),e.loadPersonData()}):3===t&&this.$http.post("/api/create_person",{rq:this.personItem}).then(function(t){e.$store.dispatch("openSnackbar",{msg:"저장되었습니다."}),e.closePersonPopup(),e.loadPersonData()})},onClick_addTagBtn:function(){this.personItem.tag_list.push({key:"",value:""})},loadPersonData:function(){var t=this;this.$http.post("/api/loadPersons",{rq:{startGeneration:this.startGeneration}}).then(function(e){var i;t.personlist=[],console.log(e.personList);for(var a=0;a<10;a++)t.personlist[a]=[];if(e.personList){for(var a in e.personList)e.personList[a].birth_timestamp&&(e.personList[a].birth_date=new t.$util._Date(e.personList[a].birth_timestamp).format("yyyy-MM-dd")),e.personList[a].death_timestamp&&(e.personList[a].death_date=new t.$util._Date(e.personList[a].death_timestamp).format("yyyy-MM-dd")),t.personMap[e.personList[a]._id]=e.personList[a],t.personlist[e.personList[a].generation-t.startGeneration].push(e.personList[a]);for(var a in e.personList)if(i=e.personList[a].id_child_list,i&&i.length)for(var n in e.personList[a].childItemList=[],i)e.personList[a].childItemList[n]=t.personMap[i[n]],0==n&&(e.personList[a].childItemList[n].firstChild=!0);console.log(t.personlist)}})},onClick_addRelationPerson:function(t){this.relationPersonItem=t,this.personDialog=!0},onClick_personDetailView:function(t){this.personItem=this.$util.copy(t),this.personDialog=!0},onClick_personDelete:function(){confirm("정말 삭제하시겠습니까?")&&console.log("삭제")},onChange_relationTypeSelect:function(){0==this.relationType?this.personItem.generation=this.relationPersonItem.generation:1==this.relationType?this.personItem.generation=this.relationPersonItem.generation+1:2==this.relationType?this.personItem.generation=this.relationPersonItem.generation:3==this.relationType&&(this.personItem.generation=this.relationPersonItem.generation-1)}}},ht=ft,_t=(i("d969"),i("8212")),gt=i("549c"),bt=i("56b0"),xt=i("40fe"),kt=i("f774"),yt=i("b56d"),It=i("71d9"),Ct=i("706c"),wt=i("2a7f"),St=Object(O["a"])(ht,nt,st,!1,null,null,null),Pt=St.exports;A()(St,{VAvatar:_t["a"],VBtn:E["a"],VCard:z["a"],VCardActions:F["a"],VCardText:F["b"],VCardTitle:B["a"],VContainer:N["a"],VContent:gt["a"],VDialog:H["a"],VDivider:G["a"],VFlex:R["a"],VForm:U["a"],VIcon:J["a"],VLayout:K["a"],VList:Y["a"],VListGroup:bt["a"],VListTile:W["a"],VListTileAction:xt["a"],VListTileContent:Q["a"],VListTileTitle:Q["c"],VMenu:pt["a"],VNavigationDrawer:kt["a"],VSelect:yt["a"],VSpacer:Z["a"],VSubheader:tt["a"],VTextField:et["a"],VToolbar:It["a"],VToolbarSideIcon:Ct["a"],VToolbarTitle:wt["a"]});var jt=function(t,e,i){return k.getters.getPedigree.pedigree._id?i():i("/")},Vt=[{path:"/",component:at},{path:"/main",component:Pt,beforeEnter:jt},{path:"*",redirect:"/"}];s["a"].use(j["a"]);var $t=new j["a"]({mode:"history",scrollBehavior:function(){return{y:0}},routes:Vt}),Lt=$t,Tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-content",[i("router-view")],1),i("Snackbar"),i("Ajax-animation"),i("v-footer",{staticClass:"pa-3"},[i("v-spacer"),i("div",[t._v("족보 관리 v0.1 © 가안")])],1)],1)},Dt=[],Ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-snackbar",{attrs:{color:t.snackbar.color,timeout:t.snackbar.timeout},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._v("\n    "+t._s(t.snackbar.msg)+"\n    "),i("v-btn",{attrs:{dark:"",flat:""},on:{click:function(e){t.snackbar.isShow=!1}}},[t._v("Close")])],1)],1)},Mt=[],At={data:function(){return{show:!1}},watch:{isShow:function(t,e){t&&(this.show=t)},show:function(t,e){t||this.$store.dispatch("closeSnackbar")}},computed:{snackbar:function(){return this.$store.getters.getSnackbar.snackbar},isShow:function(){return this.$store.getters.getSnackbar.snackbar.isShow}}},qt=At,Et=i("2db4"),zt=Object(O["a"])(qt,Ot,Mt,!1,null,null,null),Ft=zt.exports;A()(zt,{VBtn:E["a"],VSnackbar:Et["a"]});var Bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"wrap"},[i("div",{staticClass:"box"},[i("v-progress-circular",{attrs:{size:60,width:3,color:"green",indeterminate:""}})],1)])},Nt=[],Ht={data:function(){return{show:!1}},computed:{isShow:function(){return this.$store.getters.getAjaxState.ajaxState.isShow}}},Gt=Ht,Rt=(i("051c"),i("490a")),Ut=Object(O["a"])(Gt,Bt,Nt,!1,null,"592595c4",null),Jt=Ut.exports;A()(Ut,{VProgressCircular:Rt["a"]});var Kt={name:"App",components:{Login:at,Snackbar:Ft,"Ajax-animation":Jt},data:function(){return{}}},Yt=Kt,Wt=i("7496"),Xt=i("553a"),Qt=Object(O["a"])(Yt,Tt,Dt,!1,null,null,null),Zt=Qt.exports;A()(Qt,{VApp:Wt["a"],VContent:gt["a"],VFooter:Xt["a"],VSpacer:Z["a"]}),s["a"].config.productionTip=!1,new s["a"]({store:k,router:Lt,render:function(t){return t(Zt)}}).$mount("#app")},"6ecb":function(t,e,i){var a={"./ajaxState.js":"d4a3","./index.js":"81ea","./pedigree.js":"2778","./snackbar.js":"8145"};function n(t){var e=s(t);return i(e)}function s(t){var e=a[t];if(!(e+1)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return e}n.keys=function(){return Object.keys(a)},n.resolve=s,t.exports=n,n.id="6ecb"},8145:function(t,e,i){"use strict";i.r(e);var a,n=i("bd86"),s=i("5176"),r=i.n(s),o=i("2107"),l={snackbar:{isShow:!1,color:"success",timeout:3e3}},c=(a={},Object(n["a"])(a,o["d"],function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.log(e),r()(t.snackbar,e),t.snackbar.color=e.color?e.color:"success",t.snackbar.msg=e.msg?e.msg:"등록되었습니다",t.snackbar.isShow=!0}),Object(n["a"])(a,o["c"],function(t){t.snackbar.isShow=!1}),a);e["default"]={state:l,mutations:c}},"81ea":function(t,e,i){"use strict";i.r(e);i("a481"),i("ac6a");var a=i("6ecb"),n={};a.keys().forEach(function(t){"./index.js"!==t&&(n[t.replace(/(\.\/|\.js)/g,"")]=a(t).default)}),e["default"]=n},"9d20":function(t,e,i){},b564:function(t,e,i){"use strict";var a=i("9d20"),n=i.n(a);n.a},c0bd:function(t,e,i){},c5c1:function(t,e,i){},d4a3:function(t,e,i){"use strict";i.r(e);var a=i("bd86"),n=i("2107"),s={ajaxState:{isShow:!1}},r=Object(a["a"])({},n["a"],function(t,e){t.ajaxState.isShow=e.isShow});e["default"]={state:s,mutations:r}},d969:function(t,e,i){"use strict";var a=i("c5c1"),n=i.n(a);n.a}});
//# sourceMappingURL=app.e0eae1eb.js.map