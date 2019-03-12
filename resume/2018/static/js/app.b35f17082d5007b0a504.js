webpackJsonp([1],{"+6hC":function(t,e){t.exports={avatar:"/resume/2018/static/img/logo.png",cnName:"吴怡锋",enName:"Evont Ng",job:"前端开发工程师",experience:[{company:"广州唯彩会网络科技有限公司",period:"17.05 - 至今",post:"前端开发工程师",project:[{name:"红单达人",desc:["独立负责使用Zepto 及Vue.js 开发前端功能，基于Koa.js 进行接口转发以及服务开发","主动提高项目代码的质量，如使用Gulp 及Webpack 进行项目工程化改造，重构及规范代码等，使得代码维护性增强、开发效率提高","主动设计开发网站监控系统，对网站出现的错误进行收集及报警，使得错误及时修复，同时发现并防御了多次恶意攻击"]},{name:"微信小游戏开发",desc:["负责使用Egret 引擎基于TypeScript 进行多个小游戏（投篮对战、篮球神射手）的开发，如使用WebSocket 开发多用户对战功能，广告接入","主动开发小程序管理功能，包括对多个小程序的信息管理、客服功能接入等，为运营提供了便利"]},{name:"H5 专题活动开发",desc:["使用Vue、Zepto等开发多个专题活动，如电子书阅读器、世界杯AI预测等活动","使用Node.js 封装微信公众号服务模块，如权限配置、登录等功能"]}]},{company:"广州智壹网络科技有限公司",period:"16.03 - 17.05",post:"前端开发工程师 / UI设计师",project:[{name:"Uneedbid",desc:["负责PC 站点的前端开发，根据需求进行对整个移动版网站的UI 设计及开发","使用Phantom.Js 开发多个爬虫，从而实现了自动竞拍系统的开发及网站转录系统的丰富度提升；负责浏览器插件（EasyBuy 购物助手）的开发"]},{name:"代购湾",desc:["负责整站的前端开发，同时使用Semantic UI 开发商城管理后台界面","重构项目代码，提高整体代码质量"]}]}],opensource:[{name:"今历",desc:"今历是一个文艺阅读日历，使用了Koa.js进行api 开发，Vue进行网站（SSR）开发，Taro进行小程序端开发，Flutter 进行iOS 及Android端开发，使用Docker + Jenkins 进行持续集成及部署。"},{name:"Koa SSR 中间件",desc:"基于Koa 的SSR 中间件，用于快速接入极速部署SSR 功能，包括Vue 及 React 版本, Vue 版本地址： <a href='https://github.com/evont/koa-vuessr-middleware'>https://github.com/evont/koa-vuessr-middleware</a>， React 版本地址为：<a href='https://github.com/evont/koa-reactssr-middleware'>https://github.com/evont/koa-reactssr-middleware</a>"},{name:"Gulp 单文件组件插件",desc:"Gulp-SFC-loader 是一个使用单文件组件思想，用于方便传统HTML 项目进行模块化，同时完成內联js 及css编译及抽离的gulp 插件。项目地址为：<a href='https://github.com/evont/gulp-sfc-loader'>https://github.com/evont/gulp-sfc-loader</a>"}],contact:{mail:"evontgoh@foxmail.com",phone:"+86 13169620297",link:"https://evont.github.io/",github:"https://github.com/evont"},education:{school:"广东科学技术职业学院",period:"13.09 - 16.07",subject:"软件工程 (Java 网络编程)",comment:"英语能力：CET 6"},skill:["熟练掌握HTML、CSS和JavaScript等前端技术，熟练使用Vue、React、JQuery等前端框架","熟悉Webpack、Gulp等前端工程化工具，熟练使用PostCss、Sass","熟悉使用Koa.js，了解PouchDB的使用，有微信服务开发实践经验","熟练使用Taro 开发小程序，有小程序云开发能力实践经验","熟悉基于Linux 的服务器开发，有独立网站服务器开发经验，有基于Docker和Jenkins的持续集成及部署经验","熟练使用Typescript 基于Egret 引擎进行多个小游戏开发经验，有websocket 对战游戏开发经验，对P2.js 物理引擎熟悉使用并进行过文档翻译"]}},"4xLK":function(t,e){},"8nz/":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},i,!1,function(t){a("a29+")},null,null).exports,c=a("/ocq"),o={name:"Home",data:function(){return{isMounted:!1}},mounted:function(){var t=this;setTimeout(function(){t.isMounted=!0},50)}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("div",{staticClass:"home-logo",attrs:{"data-status":this.isMounted?1:0}}),this._v(" "),e("div",{staticClass:"home-option",attrs:{"data-status":this.isMounted?1:0}},[e("router-link",{staticClass:"home-option-link",attrs:{to:"/Animate"}},[this._v("查看动态简历")]),this._v(" "),e("router-link",{staticClass:"home-option-link",attrs:{to:"/Static"}},[this._v("查看静态简历")])],1)])},staticRenderFns:[]};var r=a("VU/8")(o,l,!1,function(t){a("4xLK")},"data-v-2801d01c",null).exports,d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"u-loading"},[e("span",{staticClass:"item"}),e("span",{staticClass:"item"}),e("span",{staticClass:"item"})])}]},u={name:"Dialog",props:["content","type"],components:{Loading:a("VU/8")({name:"loading"},d,!1,null,null,null).exports},data:function(){return{isLoading:!0}},created:function(){this.isLoading="reply"!==this.type},mounted:function(){var t=this,e=parseInt(200*Math.random(),10);setTimeout(function(){t.isLoading=!1},e)},methods:{scrollView:function(){this.$emit("loadend")}},computed:{htmlContent:function(){var t=this.content,e="100%";if(document.querySelector(".j-screen")){var a=document.querySelector(".j-screen").offsetWidth;t.detail.length>20&&t.detail.length<55&&(e=t.detail.length/55*a*.9+"px")}var s="<"+t.tag+' style="width: '+e+'">'+t.detail+"</"+t.tag+">";return/img/i.test(t.tag)&&(s="<img src="+t.detail+" >"),/a/i.test(t.tag)&&(s="<"+t.tag+' href="'+t.link+'" target="_black" style="width: '+e+'">'+t.detail+"</"+t.tag+">"),s}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"u-dialog",attrs:{"data-isreply":"reply"===t.type?1:0}},[a("transition",{attrs:{name:"tst-dialog",mode:"out-in",tag:"div"},on:{"before-enter":t.scrollView,enter:t.scrollView,"before-leave":t.scrollView}},[t.isLoading?a("div",{key:"loading",staticClass:"detail"},[a("loading")],1):a("div",{key:"detail",staticClass:"detail",attrs:{"data-tag":t.content.tag},domProps:{innerHTML:t._s(t.htmlContent)}})])],1)},staticRenderFns:[]},m=a("VU/8")(u,p,!1,null,null,null).exports,h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-reply"},[a("transition-group",{tag:"div",staticClass:"u-dialog",attrs:{"data-isquestion":"1",name:"reply-dialog"}},t._l(t.replies,function(e,s){return a("div",{key:s,staticClass:"detail",domProps:{innerHTML:t._s(t.htmlContent(e))},on:{click:function(a){t.$emit("reply",e)}}})}))])},staticRenderFns:[]},v=a("VU/8")({name:"Reply",props:["replies"],methods:{htmlContent:function(t){return"<"+t.tag+">"+t.detail+"</"+t.tag+">"}}},h,!1,null,null,null).exports;function g(t){var e="早上";return t>18||t<6?e="晚上":t>12&&(e="下午"),e}var f={getGreet:g,dialogs:[{id:1,content:[{tag:"p",detail:g((new Date).getHours())+"好"},{tag:"p",detail:"我是吴怡锋，是一名前端开发工程师，目前在广州工作"}],response:[{tag:"p",detail:"聊下你的工作吧",next:2},{tag:"p",detail:"聊下你自己吧",next:3}]},{id:2,content:[{tag:"p",detail:"从17年5月至今，在广州唯彩会网络科技有限公司担任前端开发工程师，负责项目的前端维护及功能开发，微信公众号开发及微信小游戏开发"},{tag:"p",detail:"期间优化了Koa 端的架构，封装了微信、接口转发请求等工具类，并设计了错误监控及报警系统，使得代码架构更加高效及安全；"},{tag:"p",detail:"16年3月至17年5月，在广州智壹网络科技有限公司担任前端开发工程师及UI 设计师"},{tag:"p",detail:"负责网站移动端UI设计及前端开发、浏览器插件开发及RN开发，主导完成了旧有代码的工程化及重构，将网站加载速度提升了3倍，优化了界面设计，提升了用户体验"}],response:[{tag:"p",detail:"有什么项目经验吗",next:5},{tag:"p",detail:"有个人项目吗",next:4}]},{id:3,content:[{tag:"p",detail:"我于2013年至2016年就读于广东科学技术职业学院，网络编程专业(Java 开发)，在校期间获得CET6证书"},{tag:"p",detail:"熟悉JavaScript编程，熟练使用Vue、React、Zepto等前端框架及PostCss、Sass等预处理器"},{tag:"p",detail:"熟悉基于Koa.js的Node开发，了解PouchDB的使用，熟练使用Typescript 基于Egret 引擎进行游戏开发"},{tag:"p",detail:"懂产品，会设计，喜欢研究用户体验；对代码有洁癖，对新技术不折腾不快"}],response:[{tag:"p",detail:"有什么项目经验吗",next:5},{tag:"p",detail:"有个人项目吗",next:4}]},{id:4,content:[{tag:"a",link:"https://github.com/evont/totheend-server",detail:"接触快应用时，使用cheerio 和superagent 抓取分析了每日一文网站数据，设计并开发了名为观止的快应用"},{tag:"img",detail:"/resume/2018/static/img/chat-file/709B2210F962E2CA7DA47949E8C540E7.jpg"},{tag:"a",link:"https://github.com/evont/koa-wechat",detail:"由于工作中负责公众号和小游戏开发，所以封装了一个基于Koa.js 的微信工具类"},{tag:"a",link:"https://evont.github.io/p2.js/docs",detail:"使用Egret 引擎开发游戏的时候，p2 物理引擎经常需要用到，但是其没有中文文档，开源精神让我进行了文档翻译工作"},{tag:"a",link:"https://github.com/evont",detail:"更多的项目可以在我的Github上面看到"}],response:[{tag:"p",detail:"有什么工作经历",next:2},{tag:"p",detail:"有负责过什么项目吗",next:5}]},{id:5,content:[{tag:"a",link:"https://daren.vipc.cn/",detail:"在唯彩会时，我独立负责了红单达人项目前端开发，实现前后端分离，完成SEO优化及整站需求开发，技术栈为Koa + Vue + Zepto"},{tag:"p",detail:"此外，还负责了微信小游戏及H5 游戏开发，上线产品包括“投篮达人”，“篮球神射手”等，技术栈为Egret + TypeScript"},{tag:"p",detail:"在智壹网络期间，独立负责Uneedbid 及代购湾两个项目的移动版web 前端开发及UI 设计，使用React Native进行客户端开发，使用Phantom.js 开发项目部分爬虫功能"},{tag:"p",detail:"同时，我也负责EasyBuy 购物助手浏览器插件，主要功能为自动在当前购物网站自动抓取商品图片及价格并提供用户直达本站进行代购"},{tag:"img",detail:"/resume/2018/static/img/chat-file/6D6EFC58BA71A9C4A9FAE26368AB91C8.jpg"}],response:[{tag:"p",detail:"还有什么要补充的吗",next:6}]},{id:6,content:[{tag:"p",detail:"没有了，很高兴与你聊天，如果需要联系我，我的联系方式如下"},{tag:"p",detail:"手机号码：+86 13169620297<br>邮箱地址：evontgoh@foxmail.com"},{tag:"a",link:"https://evont.github.io/",detail:"感兴趣的话，也可以访问我的Github Page: https://evont.github.io/"},{tag:"img",detail:"/resume/2018/static/img/chat-file/200w.gif"}]}]},_={name:"Content",data:function(){return{replies:[],dialogs:[],content:[],info:{}}},created:function(){this.loadDialog(1)},components:{Dialog:m,Reply:v},methods:{scrollEnd:function(){var t=this.$refs.content;t.scrollTop=t.scrollHeight},onReply:function(t){var e=this,a=t.next;this.addMsg(t,!0),this.replies=[],setTimeout(function(){e.loadDialog(a)},800)},loadDialog:function(t){var e=f.dialogs.find(function(e){return e.id===t}),a=e?e.content:[];this.info=e,this.sequence(a)},sequence:function(t){for(var e=this,a=this.info,s=function(t,s){setTimeout(function(){var s=a.content[t];s&&e.addMsg(s),t===a.content.length&&a.response&&(e.replies=a.response)},2e3*t)},i=0,n=t.length+1;i<n;i+=1)s(i)},addMsg:function(t){var e=t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(e.type="reply"),this.dialogs.push(e)}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-content"},[a("div",{ref:"content",staticClass:"j-dialog m-dialog"},[a("transition-group",{attrs:{name:"tst-dialog",mode:"out-in",tag:"div"}},t._l(t.dialogs,function(e,s){return e?a("Dialog",{key:s,attrs:{content:e,type:e.type||"normal"},on:{loadend:t.scrollEnd}}):t._e()}))],1),t._v(" "),a("reply",{attrs:{replies:t.replies},on:{reply:t.onReply}})],1)},staticRenderFns:[]},k={name:"Anim",components:{Content:a("VU/8")(_,C,!1,null,null,null).exports},computed:{time:function(){var t=new Date,e=t.getHours(),a=t.getMinutes();return e+":"+(a=a<10?"0"+a:a)}}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"animate"},[e("div",{staticClass:"animate-main"},[e("div",{staticClass:"animate-phone"},[e("div",{staticClass:"shell",attrs:{"data-pc":""}}),this._v(" "),e("div",{staticClass:"j-screen screen"},[e("Content")],1),this._v(" "),e("div",{staticClass:"header",attrs:{"data-pc":""}},[e("b",{staticClass:"time"},[this._v(this._s(this.time))]),this._v(" "),e("div",{staticClass:"bar"}),this._v(" "),e("span",{staticClass:"status"})])])])])},staticRenderFns:[]};var y=a("VU/8")(k,b,!1,function(t){a("rWh4")},null,null).exports,E=a("2Pnh"),j=a.n(E),x=a("l9mu"),S=a.n(x),w=a("+6hC"),R=a.n(w),P=new S.a("","pt","a4"),T={name:"Static",data:function(){return{resume:R.a,canvas:null,pdfName:""}},mounted:function(){var t=this;this.$nextTick(function(){t.render()})},methods:{render:function(){var t=this,e=this.$refs.resume,a=e.offsetWidth,s=e.offsetHeight,i=this.$refs.cav;i.width=595.28,i.height=841.89,i.getContext("2d").scale(4,4);var n={scale:4,canvas:i,width:a,height:s,useCORS:!0};j()(e,n).then(function(e){t.canvas=e;var a=e.toDataURL("image/png");t.$refs.render2Pic.download=R.a.cnName+"-"+R.a.job+".png",t.$refs.render2Pic.href=a,t.$refs.render2Pic.target="_blank"})},render2Pdf:function(){var t=this.canvas,e=t.width,a=t.height,s=e/595.28*841.89,i=a,n=0,c=595.28/e*a,o=t.toDataURL("image/jpeg",1);if(i<s)P.addImage(o,"JPEG",0,0,595.28,c);else for(;i>0;)P.addImage(o,"JPEG",0,n,595.28,c),n-=841.89,(i-=s)>0&&P.addPage();P.save(this.resume.cnName+"-"+this.resume.job+"-简历.pdf"),this.pdfName=this.resume.cnName+"-"+this.resume.job+"-简历.pdf"}}},V={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"static"},[a("div",{staticClass:"static-option"},[a("router-link",{staticClass:"static-option-item",attrs:{to:"/Animate"}},[t._v("查看动态简历")]),t._v(" "),a("a",{ref:"render2Pic",staticClass:"static-option-item",attrs:{"data-type":"pic"}},[t._v("导出为图片")]),t._v(" "),a("a",{staticClass:"static-option-item",attrs:{"data-type":"pdf"},on:{click:function(e){return e.preventDefault(),t.render2Pdf(e)}}},[t._v("导出为PDF")])],1),t._v(" "),a("div",{staticClass:"static-main"},[a("div",{ref:"resume",staticClass:"static-resume",attrs:{id:"resume"}},[a("div",{staticClass:"static-head"},[a("div",{staticClass:"static-head-left"},[a("img",{staticClass:"avatar",attrs:{src:t.resume.avatar,alt:t.resume.enName+"'s avatar'"}})]),t._v(" "),a("div",{staticClass:"static-head-right"},[a("h1",{staticClass:"nickname"},[t._v("\n            "+t._s(t.resume.cnName)+"\n            "),a("span",{staticClass:"nickname-en"},[t._v(t._s(t.resume.enName))])]),t._v(" "),a("h3",{staticClass:"job"},[t._v(t._s(t.resume.job))])])]),t._v(" "),t._m(0),t._v(" "),a("ul",t._l(t.resume.experience,function(e,s){return a("li",{key:s,staticClass:"static-column static-block-content"},[a("div",{staticClass:"static-column-left static-block-left static-block-left_lead"},[a("h4",{staticClass:"lead"},[a("p",{staticClass:"title"},[t._v("\n                "+t._s(e.company)+" /\n                "),a("span",{staticClass:"title-addition"},[t._v(t._s(e.period))])]),t._v(" "),a("b",{staticClass:"addition"},[t._v(t._s(e.post))])])]),t._v(" "),a("div",{staticClass:"static-column-right static-block-right static-block-right_lead"},[a("ul",t._l(e.project,function(e,s){return a("li",{key:s,staticClass:"desc"},[a("h3",{staticClass:"title"},[t._v(t._s(e.name))]),t._v(" "),a("ul",{staticClass:"content"},t._l(e.desc,function(e,s){return a("li",{key:s},[t._v("\n                    "+t._s(e)+"\n                  ")])}))])}))])])})),t._v(" "),t._m(1),t._v(" "),a("ul",t._l(t.resume.opensource,function(e,s){return a("li",{key:s,staticClass:"static-column static-block-content"},[a("div",{staticClass:"static-column-left static-block-left static-block-left_lead"},[a("h4",{staticClass:"lead"},[a("p",{staticClass:"title"},[t._v("\n                "+t._s(e.name)+"\n              ")])])]),t._v(" "),a("div",{staticClass:"static-column-right static-block-right static-block-right_lead"},[a("p",{staticClass:"desc",domProps:{innerHTML:t._s(e.desc)}})])])})),t._v(" "),a("div",{staticClass:"static-column block"},[a("div",{staticClass:"static-column-left"},[a("h3",{staticClass:"static-block-head"},[t._v("联系方式")]),t._v(" "),a("ul",{staticClass:"static-contact"},t._l(t.resume.contact,function(e,s){return a("li",{key:s,staticClass:"static-contact-item"},[t._v("\n              "+t._s(e)+"\n              "),a("img",{attrs:{src:"/resume/2018/static/img/icon-"+s+".svg"}})])}))]),t._v(" "),a("div",{staticClass:"static-column-right"},[a("h3",{staticClass:"static-block-head"},[t._v("教育背景")]),t._v(" "),a("div",{staticClass:"static-block-content"},[a("h4",{staticClass:"lead"},[a("p",{staticClass:"title"},[t._v("\n                "+t._s(t.resume.education.school)+" /\n                "),a("span",{staticClass:"title-addition"},[t._v(t._s(t.resume.education.period))]),t._v("\n                - "+t._s(t.resume.education.subject)+"\n              ")]),t._v(" "),a("b",{staticClass:"addition"},[t._v(t._s(t.resume.education.comment))])])]),t._v(" "),a("h3",{staticClass:"static-block-head"},[t._v("专业技能")]),t._v(" "),a("ul",{staticClass:"static-skill"},t._l(t.resume.skill,function(e,s){return a("li",{key:s,staticClass:"static-skill-item",attrs:{"data-type":s}},[t._v("\n              "+t._s(e)+"\n            ")])}))])])])]),t._v(" "),a("canvas",{ref:"cav",staticClass:"hide"})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"static-column static-block"},[e("div",{staticClass:"static-column-left"},[e("h3",{staticClass:"static-block-head"},[this._v("工作经历")])]),this._v(" "),e("div",{staticClass:"static-column-right",attrs:{"data-pc":""}},[e("div",{staticClass:"static-block-lead"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"static-column static-block"},[e("div",{staticClass:"static-column-left"},[e("h3",{staticClass:"static-block-head"},[this._v("开源项目")])]),this._v(" "),e("div",{staticClass:"static-column-right",attrs:{"data-pc":""}},[e("div",{staticClass:"static-block-lead"})])])}]};var $=a("VU/8")(T,V,!1,function(t){a("8nz/")},null,null).exports;s.a.use(c.a);var D=new c.a({routes:[{path:"/",name:"Home",component:r},{path:"/animate",name:"Animate",component:y},{path:"/static",name:"Static",component:$}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:D,components:{App:n},template:"<App/>"})},"a29+":function(t,e){},rWh4:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b35f17082d5007b0a504.js.map