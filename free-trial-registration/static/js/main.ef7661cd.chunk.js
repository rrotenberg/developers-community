(this["webpackJsonpfree-trial-registration"]=this["webpackJsonpfree-trial-registration"]||[]).push([[0],{159:function(e,a,n){"use strict";n.r(a);n(94);var t=n(0),r=n.n(t),l=n(82),i=n.n(l),o=(n(150),n(83)),u=n(7),m=n(6),s=n(1),c=n(91),v=n(86),d=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/,f=function(e){return e.includes("\n")?e.split("\n").map((function(e,a){return r.a.createElement("div",{key:a},e)})):e},z=function(e){var a=document.cookie.match(new RegExp("(^| )".concat(e,"=([^;]+)")));return a&&"null"!==a[2].toLowerCase()?a[2]:void 0},h=function(e){var a=e.item,n=e.carouselWidth;return r.a.createElement(s.a,{px:5,sx:{height:"100%",width:n,backgroundImage:"url(".concat("/free-trial-registration","/img/").concat(a.bgImage,")"),backgroundSize:"cover",paddingTop:104,paddingBottom:84,display:"conversational-ai"===a.id?"flex":"block",alignItems:"center",overflow:"auto"}},a.beforeImage&&r.a.createElement(s.d,{src:"".concat("/free-trial-registration","/img/").concat(a.beforeImage),alt:"LivePerson logo",px:3,py:5,sx:{margin:"0 auto",display:"block",width:"channels"===a.id?["100%","100%","90%","80%","70%"]:["100%","100%","50%","40%"],height:"auto"}}),a.title&&r.a.createElement(s.f,{variant:"carouselTitle",mt:1},f(a.title)),a.text&&r.a.createElement(s.f,{variant:"carouselText",mt:1},f(a.text)),a.subtitle&&r.a.createElement(s.f,{variant:"carouselSubtitle",mt:1},f(a.subtitle)),a.author&&r.a.createElement(r.a.Fragment,null,r.a.createElement(s.f,{variant:"carouselAuthorName",mt:3},f(a.author.name)),r.a.createElement(s.f,{variant:"carouselAuthorRole",mt:1},f(a.author.role))))},p=function(e){var a=e.index,n=e.activeIndex,t=e.setActiveIndex;return r.a.createElement(s.a,{onClick:function(e){e.stopPropagation(),t(a)},"data-testid":"carousel-dot"},r.a.createElement(s.a,{variant:n===a?"activeDot":"inactiveDot",m:1,sx:{width:12,height:12,borderRadius:12,cursor:"pointer"}}))},g=function(e){var a=e.slides,n=Object(t.useState)(0),l=Object(m.a)(n,2),i=l[0],o=l[1],u=Object(t.useState)(null),c=Object(m.a)(u,2),v=c[0],d=c[1],f=Object(t.useState)(null),z=Object(m.a)(f,2),g=z[0],b=z[1],y=Object(t.useRef)(),S=Object(t.useCallback)((function(){o((function(e){return e+1>=a.length?0:e+1}))}),[a.length]),E=Object(t.useCallback)((function(){return clearInterval(v)}),[v]),w=Object(t.useCallback)((function(){return d(setInterval(S,6e3)),E}),[E,S]);return Object(t.useEffect)((function(){w()}),[]),Object(t.useLayoutEffect)((function(){var e=function(){b(y.current.offsetWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),r.a.createElement(s.a,{"data-testid":"carousel",variant:"carousel",onMouseEnter:E,onMouseLeave:w,onClick:S,ref:y,sx:{width:"100%",position:"relative",overflow:"hidden",display:["none","none","block"],cursor:"pointer"}},r.a.createElement(s.c,{sx:{transition:"transform 0.5s",transform:"translate3d(-".concat(g*i,"px, 0, 0)"),position:"absolute",top:0,bottom:0,left:0,width:g*a.length}},a.map((function(e){return r.a.createElement(h,{key:e.id,item:e,carouselWidth:g})}))),r.a.createElement(s.c,{sx:{position:"absolute",left:32,bottom:32,zIndex:1}},a.map((function(e,a){return r.a.createElement(p,{key:a,index:a,activeIndex:i,setActiveIndex:o})}))))},b=n(87),y=n.n(b),S=function(e){var a=e.smallSize,n=e.isStatic;return r.a.createElement(s.d,{src:y.a,alt:"LivePerson logo",px:a?[0,0,2]:4,pt:a?3:6,pb:3,sx:{display:n?"static":a?["block","block","none"]:["none","none","block"],position:n?"static":["static","static","absolute"],top:0,left:0,zIndex:2,width:a?170:215,height:a?66:83}})},E=n(88),w=n(11),C=function(){window.location.href="https://authentication.liveperson.net/login.html"},x=function(){return r.a.createElement(s.c,{p:[0,0,4,6],justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"},r.a.createElement(S,{smallSize:!0}),r.a.createElement(s.c,{justifyContent:"flex-end",flex:1},r.a.createElement(w.a,{handleClick:C,"data-testid":"signInButton",variant:"secondary",label:"Sign In"})))},O=n(59),j=n.n(O),k=n(89),I=n(29),R=n(92),A=function(e){var a=e.handleChange,n=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{"data-testid":"recaptcha",size:"normal",sitekey:"6Ld569AUAAAAAJ8bKdSR4QCf5Z09zOBYLXprOlWa",onChange:function(e){return a("recaptchaResponseToken",e)}}),r.a.createElement(s.a,{mt:2},n.isError&&r.a.createElement(w.b,{error:n,mb:3})))},B={marketingData:{leadSource:z("lp-leadSource")||"",referringUrl:z("lp-lsRef")||"",utmCampaignId:z("lp-lsCampaign")||"",utmCampaignMedium:z("lp-lsMedium")||"",utmCampaignSearchKeywords:z("lp-lsTerms")||"",utmCampaignSource:z("lp-lsSource")||"",utmContent:z("lp-lsContent")||""}},F=function(e){var a=e.setIsVideoActive,n=e.setMessageState,l=e.setAccountDetails,i=e.userDetails,o=e.setUserDetails,f=Object(t.useState)(null),z=Object(m.a)(f,2),h=z[0],p=z[1],g=Object(t.useState)({firstName:{message:"Required field"},lastName:{message:"Required Field"},email:{message:"The business email address entered is not valid."},password:{message:"Your password does not meet all the requirements",requirements:{name:"Your password must consist of:",data:[{name:"- minimum of 8 characters"},{name:"- one or more uppercase letters (A-Z)"},{name:"- one or more lowercase letters (a-z)"},{name:"- one or more numbers (0-9)"},{name:"- one or more of these special characters:"},{name:"& @ ! * $ < > / ( ) % # =",shouldIndent:!0},{name:"- cannot use any other special characters"}]}},region:{message:"Required Field"},recaptchaResponseToken:{message:"Required Field"}}),b=Object(m.a)(g,2),y=b[0],S=b[1],E=function(e,a){S((function(n){return Object(u.a)(Object(u.a)({},n),{},Object(I.a)({},e,Object(u.a)(Object(u.a)({},n[e]),a)))}))},C=function(e,a){S((function(n){var t=Object(u.a)({},n);return t.password.requirements.data[e].isError=a,t}))},x=function(e,a){var n;switch(e){case"email":n=!d.test(a);break;case"password":n=function(e){var a=e.length>=8;C(0,!a);var n=null!==e.match(/[A-Z]+/);C(1,!n);var t=null!==e.match(/[a-z]+/);C(2,!t);var r=null!==e.match(/[0-9]+/);C(3,!r);var l=null!==e.match(/[&@!*$<>/()%#=]+/);C(4,!l),C(5,!l);var i=null!==e.match(/^[(0-9)(a-z)(A-Z)&@!*$<>/()%#=]+$/);return C(6,!i),!a||!n||!t||!r||!l||!i}(a);break;case"firstName":case"lastName":n=a.length<1;break;case"region":n=!("z1"===a||"z2"===a||"z3"===a);break;default:n=""===a}return E(e,{hasInteracted:!0,isError:n}),n},O=function(e,a){o(Object(u.a)(Object(u.a)({},i),{},Object(I.a)({},e,a))),x(e,a)},R=function(){var e=Object(k.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://cawvejl7aa.execute-api.us-east-2.amazonaws.com/Stage/createAccount",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","x-api-key":"RMSJCxJBSk5okpuPwzbBNVRafbad4HD83Z5kiiTi"},body:JSON.stringify(a)}).then((function(e){return"function"===typeof e.json?e.json():e})).then((function(e){p(!1),e.accountId?(n("success"),l(Object(u.a)(Object(u.a)({},e),{},{username:a.email}))):n("error")})).catch((function(){p(!1),n("error")})));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(s.a,{sx:{position:"relative"}},r.a.createElement("form",{"data-testid":"registerForm",autoComplete:"off"},r.a.createElement(s.a,{sx:{display:"grid",gridTemplateColumns:["1fr 1fr","2.5fr 2.5fr 4fr"],gridGap:"16px"}},r.a.createElement(w.c,{name:"firstName",type:"text",value:i.firstName,handleChange:O,handleBlur:E,placeholder:"First name",error:y.firstName,shouldFocusOnLoad:!0,isFullWidth:!0}),r.a.createElement(w.c,{name:"lastName",type:"text",value:i.lastName,handleChange:O,handleBlur:E,placeholder:"Last name",error:y.lastName,isFullWidth:!0})),r.a.createElement(w.c,{name:"email",type:"email",value:i.email,handleChange:O,handleBlur:E,placeholder:"Enter business email address",error:y.email}),r.a.createElement(w.c,{name:"password",type:"password",value:i.password,handleChange:O,handleBlur:E,placeholder:"Create password",error:y.password}),r.a.createElement(w.e,{name:"region",value:i.region,defaultValue:"choose-country",handleChange:O,handleBlur:E,error:y.region,options:[{name:"Select country",value:"choose-country",disabled:!0}].concat(Object(c.a)(v.sort((function(e,a){return e.name<a.name?-1:1}))))}),r.a.createElement(A,{handleChange:O,error:y.recaptchaResponseToken}),r.a.createElement(s.a,{pt:4,sx:{display:"grid",gridTemplateColumns:["auto","5fr 4fr"]}},r.a.createElement(w.a,{"data-testid":"registerButton",handleClick:function(e){e.preventDefault(),Object.keys(i).map((function(e){return x(e,i[e])})).reduce((function(e,a){return a||e}),!1)?"function"===typeof hj&&hj("formSubmitFailed"):("function"===typeof hj&&hj("formSubmitSuccessful"),p(!0),R(Object(u.a)(Object(u.a)({},i),B)),a(!0))},label:"Create Account",isLoading:h,variant:"primary"}))))},M=n(90);function T(){return(T=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function D(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var L=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36ZM38.8284 44.8284C40.3905 46.3905 40.3905 48.9232 38.8284 50.4853C37.2663 52.0474 34.7337 52.0474 33.1716 50.4853C31.6095 48.9232 31.6095 46.3905 33.1716 44.8284C34.7337 43.2663 37.2663 43.2663 38.8284 44.8284ZM36 18C34.3431 18 33 19.3431 33 21V36C33 37.6569 34.3431 39 36 39C37.6569 39 39 37.6569 39 36V21C39 19.3431 37.6569 18 36 18Z",fill:"#EC5252"}),N=function(e){var a=e.svgRef,n=e.title,t=D(e,["svgRef","title"]);return r.a.createElement("svg",T({width:72,height:72,viewBox:"0 0 72 72",fill:"none",ref:a},t),n?r.a.createElement("title",null,n):null,L)},P=r.a.forwardRef((function(e,a){return r.a.createElement(N,T({svgRef:a},e))}));n.p;function G(){return(G=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function H(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var W=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72ZM23.4853 32.8284C21.9232 31.2663 19.3905 31.2663 17.8284 32.8284C16.2663 34.3905 16.2663 36.9232 17.8284 38.4853C19.3905 40.0474 21.9232 40.0474 23.4853 38.4853C25.0474 36.9232 25.0474 34.3905 23.4853 32.8284ZM32.8284 32.8284C34.3905 31.2663 36.9232 31.2663 38.4853 32.8284C40.0474 34.3905 40.0474 36.9232 38.4853 38.4853C36.9232 40.0474 34.3905 40.0474 32.8284 38.4853C31.2663 36.9232 31.2663 34.3905 32.8284 32.8284ZM53.4853 32.8284C51.9232 31.2663 49.3905 31.2663 47.8284 32.8284C46.2663 34.3905 46.2663 36.9232 47.8284 38.4853C49.3905 40.0474 51.9232 40.0474 53.4853 38.4853C55.0474 36.9232 55.0474 34.3905 53.4853 32.8284Z",fill:"#DEAD89"}),q=function(e){var a=e.svgRef,n=e.title,t=H(e,["svgRef","title"]);return r.a.createElement("svg",G({width:72,height:72,viewBox:"0 0 72 72",fill:"none",ref:a},t),n?r.a.createElement("title",null,n):null,W)},U=r.a.forwardRef((function(e,a){return r.a.createElement(q,G({svgRef:a},e))}));n.p;function V(){return(V=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function Z(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var K=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36ZM45.7488 26.1213C46.9204 24.9497 48.8199 24.9497 49.9914 26.1213C51.163 27.2929 51.163 29.1924 49.9914 30.364L34.26 46.0954C34.1445 46.2767 34.0075 46.4483 33.8492 46.6066C33.3323 47.1236 32.6735 47.4124 31.9982 47.4732C31.1084 47.587 30.1773 47.3023 29.4939 46.6189C29.3169 46.4419 29.1667 46.2483 29.0432 46.0432L21.1213 38.1213C19.9497 36.9497 19.9497 35.0503 21.1213 33.8787C22.2929 32.7071 24.1924 32.7071 25.364 33.8787L31.6777 40.1924L45.7488 26.1213Z",fill:"#13CF5E"}),J=function(e){var a=e.svgRef,n=e.title,t=Z(e,["svgRef","title"]);return r.a.createElement("svg",V({width:72,height:72,viewBox:"0 0 72 72",fill:"none",ref:a},t),n?r.a.createElement("title",null,n):null,K)},Y=r.a.forwardRef((function(e,a){return r.a.createElement(J,V({svgRef:a},e))})),$=(n.p,{creating:{icon:r.a.createElement(U,{"data-testid":"creatingIcon",style:{width:44,height:44}}),title:"Setting up your account",description:"Please wait while we configure and set your account. In the meanwhile, please watch our product overview video."},success:{icon:r.a.createElement(Y,{"data-testid":"successIcon",style:{width:44,height:44}}),title:"Congratulations! Your 45 day trial account has been created"},error:{icon:r.a.createElement(P,{"data-testid":"errorIcon",style:{width:44,height:44}}),title:"Oops! Something went wrong",description:"Get ready to explore and build amazing conversational experiences for your business.",retryMessage:"Retry to sign up again"}}),_=function(e){var a=e.isVideoActive,n=e.messageState,l=e.accountDetails,i=e.resetRegistration,o=Object(t.useState)(!1),u=Object(m.a)(o,2),c=u[0],v=u[1],d=Object(t.useState)({}),z=Object(m.a)(d,2),h=z[0],p=z[1],g=Object(t.useRef)(),b=Object(t.useRef)(),y=Object(t.useRef)(),E=Object(t.useRef)(),C="success"===n,x="creating"===n,O=$[n],j=O.icon,k=O.title,I=O.description,R=O.retryMessage;return Object(t.useLayoutEffect)((function(){var e=function(){var e=b.current.offsetHeight,a=b.current.offsetWidth,n=y.current.offsetHeight;p(function(e,a,n){var t=window.innerHeight-e-n-40;return t/.5625>a?{width:a,height:.5625*a}:{width:t/.5625,height:t}}(e,a,n))};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[n]),Object(t.useEffect)((function(){g.current=new M.a("video"),v(!0)}),[]),Object(t.useEffect)((function(){c&&a&&g.current.play()}),[c,a]),r.a.createElement(s.a,{backgroundColor:"navy",sx:{height:"100%",flex:1,overflow:"auto",display:"grid",gridTemplateRows:"auto 1fr"}},r.a.createElement(s.a,{ref:y},r.a.createElement(S,{isStatic:!0})),r.a.createElement(s.c,{flexDirection:"column",alignItems:"center",mx:[4,6,7],pb:6,px:[4,6,7],sx:{textAlign:"center",height:"100%"}},r.a.createElement(s.a,{ref:b,width:"100%"},j,k&&r.a.createElement(s.f,{variant:"videoTitle",my:3},k,x?r.a.createElement(w.d,null):null),I&&r.a.createElement(s.f,{variant:"videoDescription",mb:6,mx:[2,4,6]},f(I),R&&r.a.createElement(s.f,{"data-testid":"retryButton",onClick:i,mt:4,mb:6,ml:1,fontSize:1,sx:{display:"inline",color:"aqua",cursor:"pointer",fontWeight:700,"&:hover":{color:"aquaHover"}}},R)),C&&r.a.createElement(s.c,{mb:7,alignItems:"center",mt:4,justifyContent:"center",flexWrap:"wrap"},r.a.createElement(s.f,{variant:"accountLabel",mr:3},"Account #"),r.a.createElement(s.f,{variant:"accountDetail",mr:6},l.accountId),r.a.createElement(s.f,{variant:"accountLabel",mr:3},"Username"),r.a.createElement(s.f,{variant:"accountDetail",mr:7},l.username),r.a.createElement(s.e,{href:"https://authentication.liveperson.net/login.html",target:"_blank",variant:"primaryLink"},"Login to your account"))),r.a.createElement(s.a,{flex:1,sx:{width:"100%"},ref:E},r.a.createElement(s.a,{sx:{margin:"0 auto",position:"relative",height:h.height,width:h.width,outlineColor:"shadow",outlineWidth:"6px",outlineStyle:"solid"}},r.a.createElement("iframe",{title:"FTUE",ref:g,id:"video","data-testid":"video",src:"https://player.vimeo.com/video/398468660?autoplay=0&app_id=122963",frameBorder:"0",allow:"autoplay; fullscreen",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})))))},Q=function(){return r.a.createElement(s.a,{mb:6},r.a.createElement(s.a,{sx:{backgroundColor:"liveNavy",width:[40,60,80],height:8},mb:3}),r.a.createElement(s.f,{variant:"header",mb:2},"Sign up for a free trial"),r.a.createElement(s.f,{variant:"subheader"},"No credit card required"))},X=function(){var e=Object(t.useState)("creating"),a=Object(m.a)(e,2),n=a[0],l=a[1],i=Object(t.useState)(!1),o=Object(m.a)(i,2),c=o[0],v=o[1],d=Object(t.useState)({}),f=Object(m.a)(d,2),z=f[0],h=f[1],p=Object(t.useState)({firstName:"",lastName:"",email:"",password:"",region:"",recaptchaResponseToken:""}),b=Object(m.a)(p,2),y=b[0],w=b[1];return c?r.a.createElement(_,{isVideoActive:c,messageState:n,accountDetails:z,resetRegistration:function(){l("creating"),v(!1),h(null),w(Object(u.a)(Object(u.a)({},y),{},{password:""}))}}):r.a.createElement(s.a,{sx:{height:"100%",position:"relative",display:["block","block","grid"],gridTemplateColumns:"5fr 2fr 9fr"},mx:[5,6,0]},r.a.createElement(S,null),r.a.createElement(g,{slides:E}),r.a.createElement(s.a,{backgroundColor:"white"}),r.a.createElement(s.a,{sx:{flex:1,overflow:"auto"},"data-testid":"registerContent"},r.a.createElement(x,null),r.a.createElement(Q,null),r.a.createElement(F,{setIsVideoActive:v,setMessageState:l,setAccountDetails:h,userDetails:y,setUserDetails:w}),r.a.createElement(s.f,{variant:"privacyPolicy",mt:6,mb:7},"By creating an account, I agree to LivePerson's\xa0",r.a.createElement(s.e,{sx:{textDecoration:"none",color:"electricBlue","&hover":{color:"electricBlueHover"}},href:"https://www.liveperson.com/policies/license-agreement/"},"End User License Agreement"))))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{theme:{breakpoints:["40em","52em","75em","100em"],fontSizes:[".75rem",".875rem","1rem","1.25rem","1.5rem","2rem","2.5rem"],space:[0,".25rem",".5rem","1rem","1.5rem","2rem","2.5rem","4rem","8rem","11.875rem"],colors:{orange:"#ff6900",electricBlue:"#005EF4",electricBlueHover:"#003FA3",darkBlue:"#1B1E4D",navy:"#090C43",darkNavy:"#04051F",navyGray:"#2D2F52",darkGray:"#675D55",darkerGray:"#463E36",gray:"#847970",lightGray:"#D9D4D0",lighterGray:"#F8F5F3",lightGrey:"#A2A3B8",red:"#DF2A31",lightRed:"#FEECEC",lightBlue:"#5879DA",shadow:"#141358",aqua:"#5ED7FB",aquaHover:"#00a4d6"},variants:{activeDot:{backgroundColor:"orange",borderColor:"orange",borderWidth:1,borderStyle:"solid"},inactiveDot:{backgroundColor:"transparent",borderColor:"white",borderWidth:1,borderStyle:"solid"},carousel:{backgroundColor:"darkBlue"}},text:{dropdownSelected:{fontSize:0,fontFamily:'"Roboto", sans-serif',lineHeight:"20px",color:"navy"},carouselTitle:{color:"white",fontFamily:'"Roboto Slab", sans-serif',fontSize:[2,3,4,6],lineHeight:["24px","32px","40px","56px"]},carouselText:{color:"white",fontSize:[1,1,2,4],fontFamily:'"Roboto", sans-serif',lineHeight:["20px","20px","24px","40px"],textAlign:"center",letterSpacing:"0.008em",WebkitFontSmoothing:"antialiased"},carouselSubtitle:{color:"white",fontSize:[1,1,2,3],fontFamily:'"Roboto", sans-serif',lineHeight:["20px","20px","24px","32px"],letterSpacing:"0.008em",WebkitFontSmoothing:"antialiased"},carouselAuthorName:{color:"white",fontSize:[1,1,2,3],fontWeight:700,fontFamily:'"Roboto", sans-serif',textAlign:"center",lineHeight:["20px","20px","24px","32px"],letterSpacing:"0.008em",WebkitFontSmoothing:"antialiased"},carouselAuthorRole:{color:"white",fontSize:[0,1],fontFamily:'"Roboto", sans-serif',textAlign:"center",lineHeight:["20px","24px"],letterSpacing:"0.01em",WebkitFontSmoothing:"antialiased"},header:{fontSize:[3,4,5],fontWeight:700,fontFamily:'"Roboto", sans-serif',lineHeight:["28px","36px","44px"],color:"navy",letterSpacing:"0.008em",WebkitFontSmoothing:"antialiased"},subheader:{fontSize:2,fontFamily:'"Roboto", sans-serif',fontWeight:300,lineHeight:"24px",color:"navy",letterSpacing:"0.01em",WebkitFontSmoothing:"antialiased"},privacyPolicy:{fontSize:0,fontFamily:'"Roboto", sans-serif',lineHeight:"20px",letterSpacing:"0.01em",color:"gray"},videoTitle:{color:"white",fontSize:3,fontFamily:'"Roboto", sans-serif',fontWeight:700,lineHeight:"32px",letterSpacing:"0.008em",WebkitFontSmoothing:"antialiased"},videoDescription:{color:"white",fontSize:1,fontFamily:'"Roboto", sans-serif',fontWeight:400,lineHeight:"24px",letterSpacing:"0.01em",WebkitFontSmoothing:"antialiased"},accountLabel:{fontFamily:'"Roboto", sans-serif',display:"inline",color:"lightGrey",whiteSpace:"nowrap"},accountDetail:{fontFamily:'"Roboto", sans-serif',display:"inline",color:"white",whiteSpace:"nowrap"}}}},r.a.createElement(X,null))),document.getElementById("root")||document.createElement("div"))},86:function(e){e.exports=JSON.parse('[{"name":"Andorra","value":"z2"},{"name":"United Arab Emirates","value":"z2"},{"name":"Afghanistan","value":"z2"},{"name":"Antigua and Barbuda","value":"z1"},{"name":"Anguilla","value":"z1"},{"name":"Albania","value":"z2"},{"name":"Armenia","value":"z2"},{"name":"Angola","value":"z2"},{"name":"Antarctica","value":"z1"},{"name":"Argentina","value":"z1"},{"name":"American Samoa","value":"z1"},{"name":"Austria","value":"z2"},{"name":"Australia","value":"z3"},{"name":"Aruba","value":"z1"},{"name":"Aland Islands","value":"z2"},{"name":"Azerbaijan","value":"z2"},{"name":"Bosnia and Herzegovina","value":"z2"},{"name":"Barbados","value":"z1"},{"name":"Bangladesh","value":"z3"},{"name":"Belgium","value":"z2"},{"name":"Burkina Faso","value":"z2"},{"name":"Bulgaria","value":"z2"},{"name":"Bahrain","value":"z2"},{"name":"Burundi","value":"z2"},{"name":"Benin","value":"z2"},{"name":"Saint Barth\xe9lemy","value":"z1"},{"name":"Bermuda","value":"z1"},{"name":"Brunei Darussalam","value":"z3"},{"name":"Bolivia","value":"z1"},{"name":"Bonaire","value":"z1"},{"name":"Brazil","value":"z1"},{"name":"Bahamas","value":"z1"},{"name":"Bhutan","value":"z3"},{"name":"Bouvet Island","value":"z2"},{"name":"Botswana","value":"z2"},{"name":"Belarus","value":"z2"},{"name":"Belize","value":"z1"},{"name":"Canada","value":"z1"},{"name":"Cocos (Keeling) Islands","value":"z3"},{"name":"Congo (Kinshasa)","value":"z2"},{"name":"Central African Republic","value":"z2"},{"name":"Congo (Brazzaville)","value":"z2"},{"name":"Switzerland","value":"z2"},{"name":"Cote d\'Ivoire","value":"z2"},{"name":"Cook Islands","value":"z3"},{"name":"Chile","value":"z1"},{"name":"Cameroon","value":"z2"},{"name":"China","value":"z3"},{"name":"Colombia","value":"z1"},{"name":"Costa Rica","value":"z1"},{"name":"Cuba","value":"z1"},{"name":"Cape Verde","value":"z2"},{"name":"Cura\xe7ao","value":"z1"},{"name":"Christmas Island","value":"z3"},{"name":"Cyprus","value":"z2"},{"name":"Czech Republic","value":"z2"},{"name":"Germany","value":"z2"},{"name":"Djibouti","value":"z2"},{"name":"Denmark","value":"z2"},{"name":"Dominica","value":"z1"},{"name":"Dominican Republic","value":"z1"},{"name":"Algeria","value":"z2"},{"name":"Ecuador","value":"z1"},{"name":"Estonia","value":"z2"},{"name":"Egypt","value":"z2"},{"name":"Western Sahara","value":"z2"},{"name":"Eritrea","value":"z2"},{"name":"Spain","value":"z2"},{"name":"Ethiopia","value":"z2"},{"name":"Finland","value":"z2"},{"name":"Fiji","value":"z3"},{"name":"Falkland Islands (Malvinas)","value":"z1"},{"name":"Micronesia","value":"z1"},{"name":"Faroe Islands","value":"z2"},{"name":"France","value":"z2"},{"name":"Gabon","value":"z2"},{"name":"United Kingdom","value":"z2"},{"name":"Grenada","value":"z2"},{"name":"Georgia","value":"z2"},{"name":"French Guiana","value":"z2"},{"name":"Guernsey","value":"z2"},{"name":"Ghana","value":"z2"},{"name":"Gibraltar","value":"z2"},{"name":"Greenland","value":"z2"},{"name":"Gambia","value":"z2"},{"name":"Guinea","value":"z1"},{"name":"Guadeloupe","value":"z1"},{"name":"Equatorial Guinea","value":"z2"},{"name":"Greece","value":"z2"},{"name":"South Georgia and the South Sandwich Islands","value":"z1"},{"name":"Guatemala","value":"z1"},{"name":"Guam","value":"z1"},{"name":"Guinea-Bissau","value":"z2"},{"name":"Guyana","value":"z1"},{"name":"Hong Kong","value":"z3"},{"name":"Heard Island and McDonald Islands","value":"z2"},{"name":"Honduras","value":"z1"},{"name":"Croatia","value":"z2"},{"name":"Haiti","value":"z1"},{"name":"Hungary","value":"z2"},{"name":"Indonesia","value":"z3"},{"name":"Ireland","value":"z2"},{"name":"Israel","value":"z2"},{"name":"Isle of Man","value":"z2"},{"name":"India","value":"z3"},{"name":"British Indian Ocean Territory","value":"z3"},{"name":"Iraq","value":"z2"},{"name":"Iran","value":"z2"},{"name":"Iceland","value":"z2"},{"name":"Italy","value":"z2"},{"name":"Jersey","value":"z2"},{"name":"Jamaica","value":"z1"},{"name":"Jordan","value":"z2"},{"name":"Japan","value":"z3"},{"name":"Kenya","value":"z2"},{"name":"Kyrgyzstan","value":"z2"},{"name":"Cambodia","value":"z3"},{"name":"Kiribati","value":"z3"},{"name":"Comoros","value":"z2"},{"name":"Saint Kitts and Nevis","value":"z1"},{"name":"North Korea","value":"z3"},{"name":"South Korea","value":"z3"},{"name":"Kuwait","value":"z2"},{"name":"Cayman Islands","value":"z1"},{"name":"Kazakhstan","value":"z2"},{"name":"Laos","value":"z3"},{"name":"Lebanon","value":"z2"},{"name":"Saint Lucia","value":"z1"},{"name":"Liechtenstein","value":"z2"},{"name":"Sri Lanka","value":"z3"},{"name":"Liberia","value":"z2"},{"name":"Lesotho","value":"z2"},{"name":"Lithuania","value":"z2"},{"name":"Luxembourg","value":"z2"},{"name":"Latvia","value":"z2"},{"name":"Libya","value":"z2"},{"name":"Morocco","value":"z2"},{"name":"Monaco","value":"z2"},{"name":"Moldova","value":"z2"},{"name":"Montenegro","value":"z2"},{"name":"Saint Martin (French part)","value":"z2"},{"name":"Madagascar","value":"z2"},{"name":"Marshall Islands","value":"z3"},{"name":"Macedonia","value":"z2"},{"name":"Mali","value":"z2"},{"name":"Myanmar","value":"z3"},{"name":"Mongolia","value":"z3"},{"name":"Macao","value":"z3"},{"name":"Northern Mariana Islands","value":"z3"},{"name":"Martinique","value":"z1"},{"name":"Mauritania","value":"z2"},{"name":"Montserrat","value":"z1"},{"name":"Malta","value":"z2"},{"name":"Mauritius","value":"z2"},{"name":"Maldives","value":"z3"},{"name":"Malawi","value":"z2"},{"name":"Mexico","value":"z1"},{"name":"Malaysia","value":"z3"},{"name":"Mozambique","value":"z2"},{"name":"Namibia","value":"z2"},{"name":"New Caledonia","value":"z3"},{"name":"Niger","value":"z2"},{"name":"Norfolk Island","value":"z3"},{"name":"Nigeria","value":"z2"},{"name":"Nicaragua","value":"z1"},{"name":"Netherlands","value":"z2"},{"name":"Norway","value":"z2"},{"name":"Nepal","value":"z3"},{"name":"Nauru","value":"z3"},{"name":"Niue","value":"z3"},{"name":"New Zealand","value":"z3"},{"name":"Oman","value":"z2"},{"name":"Panama","value":"z1"},{"name":"Peru","value":"z1"},{"name":"French Polynesia","value":"z3"},{"name":"Papua New Guinea","value":"z3"},{"name":"Philippines","value":"z3"},{"name":"Pakistan","value":"z2"},{"name":"Poland","value":"z2"},{"name":"Saint Pierre and Miquelon","value":"z3"},{"name":"Pitcairn","value":"z3"},{"name":"Puerto Rico","value":"z1"},{"name":"Palestinian Territory, Occupied","value":"z2"},{"name":"Portugal","value":"z2"},{"name":"Palau","value":"z3"},{"name":"Paraguay","value":"z1"},{"name":"Qatar","value":"z2"},{"name":"Reunion","value":"z2"},{"name":"Romania","value":"z2"},{"name":"Serbia","value":"z2"},{"name":"Russia","value":"z2"},{"name":"Rwanda","value":"z2"},{"name":"Saudi Arabia","value":"z2"},{"name":"Solomon Islands","value":"z3"},{"name":"Seychelles","value":"z2"},{"name":"Sudan","value":"z2"},{"name":"Sweden","value":"z2"},{"name":"Singapore","value":"z3"},{"name":"Saint Helena, Ascension and Tristan da Cunha","value":"z2"},{"name":"Slovenia","value":"z2"},{"name":"Svalbard and Jan Mayen","value":"z2"},{"name":"Slovakia","value":"z2"},{"name":"Sierra Leone","value":"z2"},{"name":"San Marino","value":"z2"},{"name":"Senegal","value":"z2"},{"name":"Somalia","value":"z2"},{"name":"Suriname","value":"z1"},{"name":"South Sudan","value":"z2"},{"name":"Sao Tome and Principe","value":"z2"},{"name":"El Salvador","value":"z1"},{"name":"Sint Maarten (Dutch part)","value":"z1"},{"name":"Syria","value":"z2"},{"name":"Swaziland","value":"z2"},{"name":"Turks and Caicos Islands","value":"z1"},{"name":"Chad","value":"z2"},{"name":"French Southern Territories","value":"z2"},{"name":"Togo","value":"z2"},{"name":"Thailand","value":"z3"},{"name":"Tajikistan","value":"z2"},{"name":"Tokelau","value":"z3"},{"name":"Timor-Leste","value":"z3"},{"name":"Turkmenistan","value":"z2"},{"name":"Tunisia","value":"z2"},{"name":"Tonga","value":"z3"},{"name":"Turkey","value":"z2"},{"name":"Trinidad and Tobago","value":"z1"},{"name":"Tuvalu","value":"z3"},{"name":"Taiwan","value":"z3"},{"name":"Tanzania","value":"z3"},{"name":"Ukraine","value":"z2"},{"name":"Uganda","value":"z2"},{"name":"United States Minor Outlying Islands","value":"z1"},{"name":"United States","value":"z1"},{"name":"Uruguay","value":"z1"},{"name":"Uzbekistan","value":"z2"},{"name":"Holy See (Vatican City State)","value":"z2"},{"name":"Saint Vincent and the Grenadines","value":"z1"},{"name":"Venezuela","value":"z1"},{"name":"Virgin Islands (British)","value":"z1"},{"name":"Virgin Islands (United States)","value":"z1"},{"name":"Vietnam","value":"z3"},{"name":"Vanuatu","value":"z3"},{"name":"Wallis and Futuna","value":"z3"},{"name":"Samoa","value":"z3"},{"name":"Yemen","value":"z2"},{"name":"Mayotte","value":"z2"},{"name":"Yugoslavia","value":"z2"},{"name":"South Africa","value":"z2"},{"name":"zambia","value":"z2"},{"name":"zimbabwe","value":"z2"},{"name":"TBD","value":"z1"}]')},87:function(e,a,n){e.exports=n.p+"static/media/logo.df9acfdb.svg"},88:function(e){e.exports=JSON.parse('[{"id":"conversational-ai","bgImage":"carousel-1.jpg","title":"Unleash the\\ntrue power of\\nConversational AI"},{"id":"channels","beforeImage":"banner-image.png","bgImage":"carousel-2.jpg","minHeight":270,"maxHeight":495,"title":"Connect\\nand converse","subtitle":"Engage with customers directly in their preferred communication channels"},{"id":"tools","bgImage":"carousel-3.jpg","beforeImage":"gett.png","minHeight":200,"maxHeight":270,"text":"We\u2019re researchers at heart, and LivePerson\u2019s tools helped us learn and automate more than we thought was possible.","author":{"name":"Yonina Ben Shimon","role":"Global Head of Customer Experience, Gett"}}]')},93:function(e,a,n){e.exports=n(159)}},[[93,1,2]]]);
//# sourceMappingURL=main.ef7661cd.chunk.js.map