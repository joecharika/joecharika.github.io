var ae=Object.defineProperty,re=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var B=(t,o,s)=>o in t?ae(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,V=(t,o)=>{for(var s in o||(o={}))ie.call(o,s)&&B(t,s,o[s]);if($)for(var s of $(o))le.call(o,s)&&B(t,s,o[s]);return t},N=(t,o)=>re(t,ne(o));import{d as k,r as j,c as ce,o as de,a as me,b as L,e as pe,f as m,g as u,h as e,i as r,u as i,j as G,k as J,w as n,l as w,m as ue,n as _e,p as f,M as H,q as z,T as O,s as X,F as b,t as x,v as Q,x as p,y as P,z as Y,A as ge,B as he,C as fe,D as ve,E as Pe,G as Ce,H as Se,N as we,I as be,J as xe,K,L as De,O as ye,P as q,Q as Ae,R as Ee,S as Ie,U as Oe,V as Re,W as ke,X as je}from"./vendor.92068acc.js";const oe={},Le=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))d(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function d(a){if(a.ep)return;a.ep=!0;const l=s(a);fetch(a.href,l)}};Le();const Me="modulepreload",Z={},Te="/",_=function(o,s){return!s||s.length===0?o():Promise.all(s.map(d=>{if(d=`${Te}${d}`,d in Z)return;Z[d]=!0;const a=d.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${l}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":Me,a||(c.as="script",c.crossOrigin=""),c.href=d,document.head.appendChild(c),a)return new Promise((v,E)=>{c.addEventListener("load",v),c.addEventListener("error",E)})})).then(()=>o())};var ee="/assets/logo.d19c7f64.svg";var Fe=(t,o)=>{const s=t.__vccOpts||t;for(const[d,a]of o)s[d]=a;return s};const g=t=>(fe("data-v-ed9b7de8"),t=t(),ve(),t),Ue={class:"relative z-50"},We=g(()=>e("a",{href:"#main-content",class:"fixed text-center p-1 text-sm uppercase shadow bg-orange-600 text-white font-medium w-screen transform -translate-y-28 focus:translate-y-0 transition-transform"}," skip navigation ",-1)),$e={class:"max-w-7xl mx-auto p-norm pt-2"},Be={class:"pb-2 flex items-center text-xs"},Ve={href:"tel:",class:"flex mr-4"},Ne=g(()=>e("span",null,"+263 86 7700 0609",-1)),Ge=g(()=>e("span",{title:"Harare, Zimbabwe"},"32 Waller Avenue Mt Pleasant",-1)),Je=g(()=>e("span",{class:"hidden lg:inline"},", Harare, Zimbabwe",-1)),He=g(()=>e("div",{class:"pt-1 bg-orange-100 w-1/2"},null,-1)),ze={class:"max-w-7xl mx-auto relative"},Xe={class:"z-10 lg:w-full"},Qe={class:"flex items-center justify-between sm:h-10 lg:justify-start lg:pt-6 p-norm pb-2","aria-label":"Global"},Ye={class:"flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"},Ke={class:"flex items-center justify-between w-full lg:w-auto"},qe=g(()=>e("span",{class:"sr-only"},"DataAge Solutions",-1)),Ze=g(()=>e("img",{class:"h-8 w-auto sm:h-10",src:ee,alt:""},null,-1)),et={class:"-mr-2 flex items-center lg:hidden"},tt=g(()=>e("span",{class:"sr-only"},"Open main menu",-1)),st={key:0,class:"menu flex-grow lg:ml-10 lg:pr-4 lg:space-x-4 text-sm"},ot=p(" Home "),at=p(" Services "),rt={class:"grid grid-cols-3 gap-8 px-8 py-4"},nt=g(()=>e("div",null,[e("h5",{class:"font-medium text-lg"},"Services"),e("p",{class:"mb-4"}," We have experienced personnel to handle various technology challenges. ")],-1)),it={class:"col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8"},lt={class:"font-medium text-lg mb-3"},ct=p(" About Us "),dt={class:"px-4 py-2"},mt=g(()=>e("h5",{class:"font-medium text-lg"},"About Us",-1)),pt=g(()=>e("p",{class:"mb-4"}," We are passionate to deliver innovative technology solutions that make our clients the benchmark of their industries ",-1)),ut={class:"-mx-2"},_t=p(" Company Overview "),gt=p(" Industries we serve "),ht=p("Hire Us "),ft={setup(t){const o=k(()=>_(()=>import("./ListItem.c025e46d.js"),["assets/ListItem.c025e46d.js","assets/vendor.92068acc.js"])),s=[{name:"Careers",href:"/careers"},{name:"Contact Us",href:"/contact-us"}],d="relative pb-8",a=j(d);let l=j(!1);const c=j(window.innerWidth),v=ce(()=>c.value<1024?l.value:!0),E=()=>a.value=window.scrollY>=80?"fixed top-0 shadow-md bg-white right-0 left-0 lg:h-16 pt-2":d,F=()=>{l.value=!1,c.value=window.innerWidth};return de(()=>{window.addEventListener("scroll",E),window.addEventListener("resize",F)}),me(()=>{window.removeEventListener("scroll",E),window.removeEventListener("resize",F)}),(U,W)=>{const C=L("router-link"),S=pe("wave");return m(),u("header",Ue,[We,e("div",$e,[e("div",Be,[e("a",Ve,[r(i(G),{class:"h-4 w-4 mr-2","aria-hidden":"true"}),Ne]),r(i(J),{class:"h-4 w-4 mr-2","aria-hidden":"true"}),Ge,Je]),He]),e("div",{class:he(a.value)},[e("div",ze,[e("div",Xe,[e("nav",Qe,[e("div",Ye,[e("div",Ke,[r(C,{to:"/",class:"router-skip"},{default:n(()=>[qe,Ze]),_:1}),e("div",et,[w((m(),u("button",{onClick:W[0]||(W[0]=h=>ue(l)?l.value=!i(l):l=!i(l)),class:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"},[tt,r(i(_e),{class:"h-6 w-6","aria-hidden":"true"})])),[[S]])])])]),r(O,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:n(()=>[i(v)?(m(),u("div",st,[w((m(),f(C,{to:"/",class:"nav-link"},{default:n(()=>[ot]),_:1})),[[S]]),r(i(H),{as:"div",class:"relative inline-block text-left nav-item"},{default:n(()=>[e("div",null,[r(i(z),{class:"nav-link"},{default:n(()=>[at]),_:1})]),r(O,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:n(()=>[r(i(X),{class:"lg:w-[50rem] menu-left menu-items"},{default:n(()=>[e("div",rt,[nt,e("div",it,[(m(!0),u(b,null,x(U.$store.state.categories,h=>(m(),u("div",{key:h.slug},[e("h5",lt,[(m(),f(Q(h.icon),{class:"w-4 h-4 inline-block"})),p(" "+P(h.title),1)]),(m(!0),u(b,null,x(U.$store.state.services.filter(I=>I.category===h),I=>(m(),f(i(o),{key:I.slug},{default:n(()=>[p(P(I.title),1)]),_:2},1024))),128))]))),128))])])]),_:1})]),_:1})]),_:1}),r(i(H),{as:"div",class:"relative inline-block text-left nav-item"},{default:n(()=>[e("div",null,[r(i(z),{class:"nav-link"},{default:n(()=>[ct]),_:1})]),r(O,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:n(()=>[r(i(X),{class:"z-10 bg-gray-50 lg:w-64 menu-left menu-items"},{default:n(()=>[e("div",dt,[mt,pt,e("div",ut,[w((m(),f(C,{to:"/about/",class:"nav-link w-full"},{default:n(()=>[r(i(Y),{class:"w-4 h-4 inline-block"}),_t]),_:1})),[[S]]),w((m(),f(C,{to:"/about/industries",class:"nav-link w-full"},{default:n(()=>[r(i(Y),{class:"w-4 h-4 inline-block"}),gt]),_:1})),[[S]])])])]),_:1})]),_:1})]),_:1}),(m(),u(b,null,x(s,h=>w(r(C,{key:h.name,to:h.href,class:"nav-link"},{default:n(()=>[p(P(h.name),1)]),_:2},1032,["to"]),[[S]])),64)),w((m(),f(C,{to:"/hire-us",class:"nav-item ml-auto font-medium text-orange-600 hover:text-orange-500 bg-orange-100 rounded px-2 py-1"},{default:n(()=>[ht]),_:1})),[[S]])])):ge("",!0)]),_:1})])])])],2)])}}};var vt=Fe(ft,[["__scopeId","data-v-ed9b7de8"]]);const Pt={class:"text-gray-100 body-font bg-cover bg-[url(/src/assets/img/footer.jpg)] relative"},Ct=e("div",{class:"bg-black opacity-90 absolute w-full h-full"},null,-1),St={class:"container relative px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"},wt=e("div",{class:"w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left"},[e("a",{class:"flex title-font font-medium items-center md:justify-start justify-center text-orange-300"},[e("img",{src:ee,class:"h-12",alt:""})]),e("p",{class:"mt-2 text-sm text-orange-100"}," Data Age Solutions is a Software Development Company started in 2015 because of a passion to provide digital innovative solutions to our market. We have used the principles of Value and Growth Transformation by Garth Bell to evolve from a one man business to a Group of companies within 5 years. ")],-1),bt={class:"flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"},xt={class:"lg:w-1/3 md:w-1/2 w-full px-4"},Dt=e("h2",{class:"title-font font-medium text-orange-300 tracking-widest text-sm mb-3"}," Contact Us ",-1),yt={class:"list-none mb-10"},At={href:"tel:2638677000609",class:"text-orange-100 hover:text-orange-500"},Et=p(" +263 86 7700 0609 "),It={href:"tel:263772902572",class:"text-orange-100 hover:text-orange-500"},Ot=p(" +263 77 290 2572 "),Rt={href:"mailto:sales@dataage.co.zw",class:"text-orange-100 hover:text-orange-500"},kt=p(" sales@dataage.co.zw "),jt={href:"https://maps.google.com/maps?ll=-17.81796,31.080569&z=17&t=m&hl=en-US&gl=US&mapclient=embed&q=Mass%20Media%20House%2C%2019%20Selous%20Avenue%2C%20Harare",class:"text-orange-100 hover:text-orange-500"},Lt=p(" 32 Waller Avenue "),Mt=p(" Mt Pleasant, Harare, Zimbabwe "),Tt={class:"lg:w-1/3 md:w-1/2 w-full px-4"},Ft=e("h2",{class:"title-font font-medium text-orange-300 tracking-widest text-sm mb-3"}," What we offer ",-1),Ut={class:"mb-10"},Wt={class:""},$t={class:"lg:w-1/3 md:w-1/2 w-full px-4"},Bt=e("h2",{class:"title-font font-medium text-orange-300 tracking-widest text-sm mb-3"}," Our Services ",-1),Vt={class:"mb-10"},Nt={class:""},Gt={class:"border-t relative border-orange-200 border-opacity-10"},Jt={class:"container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"},Ht={class:"text-orange-300 text-sm text-center sm:text-left"},zt=e("a",{href:"https://joecharika.github.io/",rel:"noopener noreferrer",class:"text-orange-100 hover:text-orange-500 ml-1",target:"_blank"},"@joecharika",-1),Xt=Se('<span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"><a class="text-orange-200"><svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a><a class="ml-3 text-orange-200"><svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg></a><a class="ml-3 text-orange-200"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg></a><a class="ml-3 text-orange-200"><svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24"><path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2" stroke="none"></circle></svg></a></span>',1),Qt={computed:{offers(){return this.$store.state.offers},categories(){return this.$store.state.categories},services(){return this.$store.state.services}}},Yt=Object.assign(Qt,{setup(t){const o=k(()=>_(()=>import("./OurPartners.d8be883c.js"),["assets/OurPartners.d8be883c.js","assets/OurPartners.4e646ad5.css","assets/carousel.es.c9fcbb0f.js","assets/vendor.92068acc.js"])),s=k(()=>_(()=>import("./ListItem.c025e46d.js"),["assets/ListItem.c025e46d.js","assets/vendor.92068acc.js"]));return(d,a)=>{const l=L("router-link");return m(),u("footer",null,[r(i(o)),e("section",Pt,[Ct,e("div",St,[wt,e("div",bt,[e("div",xt,[Dt,e("nav",yt,[e("a",At,[r(i(s),{dense:"",icon:i(G)},{default:n(()=>[Et]),_:1},8,["icon"])]),e("a",It,[r(i(s),{dense:"",icon:i(Pe)},{default:n(()=>[Ot]),_:1},8,["icon"])]),e("a",Rt,[r(i(s),{dense:"",icon:i(Ce)},{default:n(()=>[kt]),_:1},8,["icon"])]),e("a",jt,[r(i(s),{dense:"",icon:i(J)},{subtitle:n(()=>[Mt]),default:n(()=>[Lt]),_:1},8,["icon"])])])]),e("div",Tt,[Ft,e("nav",Ut,[e("ul",Wt,[(m(!0),u(b,null,x(d.offers.slice(0,7),c=>(m(),u("li",{key:c.slug},[r(l,{class:"text-orange-100 hover:text-orange-500",to:"/offers/"+c.slug},{default:n(()=>[p(P(c.title),1)]),_:2},1032,["to"])]))),128))])])]),e("div",$t,[Bt,e("nav",Vt,[e("ul",Nt,[(m(!0),u(b,null,x(d.categories.slice(0,7),c=>(m(),u("li",{key:c.slug},[r(i(s),{dense:"",icon:c.icon,class:"mb-3"},{subtitle:n(()=>[(m(!0),u(b,null,x(c.services,v=>(m(),f(l,{key:v.slug,class:"text-orange-100 hover:text-orange-500 text-sm",to:"/services/"+v.slug},{default:n(()=>[p(" - "+P(v.title),1)]),_:2},1032,["to"]))),128))]),default:n(()=>[p(P(c.title)+" ",1)]),_:2},1032,["icon"])]))),128))])])])])]),e("div",Gt,[e("div",Jt,[e("p",Ht,[p(" \xA9 "+P(new Date().getFullYear())+" Data Age Solutions \u2014 ",1),zt]),Xt])])])])}}}),Kt={class:"relative overflow-hidden font-sans bg-white"},qt={setup(t){return(o,s)=>{const d=L("router-view");return m(),u("section",Kt,[r(vt),r(d,null,{default:n(({Component:a})=>[r(O,{"enter-active-class":"fadeInUp"},{default:n(()=>[(m(),f(Q(a),{appear:"",class:"-mt-28 min-h-screen",id:"main-content"}))]),_:2},1024)]),_:1}),r(Yt)])}}};var Zt=[{name:"careers",path:"/careers",props:!0,component:()=>_(()=>import("./careers.1ba6d111.js"),["assets/careers.1ba6d111.js","assets/services.19f4a0d6.js","assets/vendor.92068acc.js"])},{name:"contact-us",path:"/contact-us",props:!0,component:()=>_(()=>import("./contact-us.aca99c02.js"),["assets/contact-us.aca99c02.js","assets/vendor.92068acc.js"])},{name:"hire-us",path:"/hire-us",props:!0,component:()=>_(()=>import("./hire-us.70c9b496.js"),["assets/hire-us.70c9b496.js","assets/hire-us.ce7a7837.js","assets/home.91a5eb3a.js","assets/vendor.92068acc.js"])},{name:"index",path:"/",props:!0,component:()=>_(()=>import("./index.ebd0a374.js"),["assets/index.ebd0a374.js","assets/home.91a5eb3a.js","assets/vendor.92068acc.js"])},{name:"all",path:"/:all(.*)",props:!0,component:()=>_(()=>import("./_...all_.e374e0e0.js"),["assets/_...all_.e374e0e0.js","assets/_...all_.efe872b9.css","assets/vendor.92068acc.js"])},{name:"about",path:"/about",props:!0,component:()=>_(()=>import("./index.93b4292d.js"),["assets/index.93b4292d.js","assets/hire-us.ce7a7837.js","assets/vendor.92068acc.js"])},{name:"about-our-work",path:"/about/our-work",props:!0,component:()=>_(()=>import("./our-work.099adcec.js"),["assets/our-work.099adcec.js","assets/vendor.92068acc.js"])},{name:"services",path:"/services",props:!0,component:()=>_(()=>import("./index.becead94.js"),["assets/index.becead94.js","assets/services.19f4a0d6.js","assets/vendor.92068acc.js"])},{name:"services-id",path:"/services/:id?",props:!0,component:()=>_(()=>import("./_id_.f14bc662.js"),["assets/_id_.f14bc662.js","assets/vendor.92068acc.js"])},{name:"offers",path:"/offers",props:!0,component:()=>_(()=>import("./index.fc492550.js"),["assets/index.fc492550.js","assets/services.19f4a0d6.js","assets/vendor.92068acc.js"])},{name:"offers-id",path:"/offers/:id?",props:!0,component:()=>_(()=>import("./_id_.73769e1c.js"),["assets/_id_.73769e1c.js","assets/vendor.92068acc.js"])}];const te=new we,M=be({history:xe({ALLUSERSPROFILE:"C:\\ProgramData",APPDATA:"C:\\Users\\joe\\AppData\\Roaming",ChocolateyInstall:"C:\\ProgramData\\chocolatey",ChocolateyLastPathUpdate:"132849787766980998",COLOR:"1",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"PROGRAMMERPC",ComSpec:"C:\\WINDOWS\\system32\\cmd.exe",DART_SDK:"C:\\Program Files\\Dart\\dart-sdk",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",EDITOR:"notepad.exe",GDAL_DATA:"C:\\Program Files\\PostgreSQL\\12\\gdal-data",HOME:"C:\\Users\\joe",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\joe",IDEA_INITIAL_DIRECTORY:"C:\\Users\\joe\\AppData\\Local\\JetBrains\\Toolbox\\apps\\WebStorm\\ch-0\\212.5080.54\\bin",INIT_CWD:"C:\\Development\\Projects\\Personal\\dataage-web","IntelliJ IDEA":"C:\\Program Files\\JetBrains\\IntelliJ IDEA 2019.2.3\\bin;","IntelliJ IDEA Community Edition":"C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2019.1.3\\bin;",JAVA_HOME:"C:\\Program Files\\AdoptOpenJDK\\jdk-11.0.4.11-hotspot\\","JetBrains Rider":"C:\\Program Files\\JetBrains\\JetBrains Rider 2019.2.3\\bin;",LOCALAPPDATA:"C:\\Users\\joe\\AppData\\Local",LOGONSERVER:"\\\\PROGRAMMERPC",NODE:"C:\\Program Files\\nodejs\\node.exe",NODE_ENV:"production",npm_command:"run-script",npm_config_cache:"C:\\Users\\joe\\AppData\\Local\\npm-cache",npm_config_globalconfig:"C:\\Users\\joe\\AppData\\Roaming\\npm\\etc\\npmrc",npm_config_global_prefix:"C:\\Users\\joe\\AppData\\Roaming\\npm",npm_config_init_module:"C:\\Users\\joe\\.npm-init.js",npm_config_local_prefix:"C:\\Development\\Projects\\Personal\\dataage-web",npm_config_metrics_registry:"https://registry.npmjs.org/",npm_config_node_gyp:"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js",npm_config_noproxy:"",npm_config_prefix:"C:\\Users\\joe\\AppData\\Roaming\\npm",npm_config_scripts_prepend_node_path:"auto",npm_config_userconfig:"C:\\Users\\joe\\.npmrc",npm_config_user_agent:"npm/8.1.2 node/v16.13.1 win32 x64 workspaces/false",npm_execpath:"C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js",npm_lifecycle_event:"build",npm_lifecycle_script:"vite build",npm_node_execpath:"C:\\Program Files\\nodejs\\node.exe",npm_package_json:"C:\\Development\\Projects\\Personal\\dataage-web\\package.json",npm_package_name:"dataage-web",npm_package_version:"1.0.0",NUMBER_OF_PROCESSORS:"4",OneDrive:"C:\\Users\\joe\\OneDrive",OS:"Windows_NT",Path:"C:\\Development\\Projects\\Personal\\dataage-web\\node_modules\\.bin;C:\\Development\\Projects\\Personal\\node_modules\\.bin;C:\\Development\\Projects\\node_modules\\.bin;C:\\Development\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\ProgramData\\Oracle\\Java\\javapath;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Development\\flutter\\bin;C:\\Program Files\\dotnet\\;C:\\Development\\xampp\\php;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn\\;C:\\Program Files (x86)\\Microsoft SQL Server\\140\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\140\\Tools\\Binn\\;C:\\Program Files (x86)\\Microsoft SQL Server\\140\\DTS\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\140\\DTS\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\130\\Tools\\Binn\\;C:\\Program Files (x86)\\Microsoft SQL Server\\150\\DTS\\Binn\\;C:\\Program Files\\Dart\\dart-sdk\\bin;C:\\Users\\joe\\AppData\\Local\\Android\\Sdk\\platform-tools\\;C:\\ProgramData\\ComposerSetup\\bin;C:\\Users\\joe\\AppData\\Local\\bin\\NASM;c:\\Users\\joe\\AppData\\Local\\Android\\Sdk\\tools\\bin;C:\\Development\\xampp;C:\\Program Files\\PuTTY\\;C:\\Development\\ps-tools\\;C:\\Program Files\\Java\\jdk1.8.0_201\\bin;C:\\Program Files\\AdoptOpenJDK\\jdk-11.0.4.11-hotspot\\bin;C:\\Program Files\\Git\\cmd;C:\\Program Files (x86)\\GnuWin32\\bin;C:\\Users\\joe\\.dotnet\\tools;C:\\Program Files (x86)\\dotnet\\;C:\\Development;C:\\Program Files (x86)\\Yarn\\bin\\;C:\\Program Files\\nodejs\\;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\PowerShell\\7\\;C:\\Development\\Ruby26-x64\\bin;C:\\Users\\joe\\AppData\\Local\\Programs\\Python\\Python37\\Scripts\\;C:\\Users\\joe\\AppData\\Local\\Programs\\Python\\Python37\\;C:\\Users\\joe\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\joe\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\JetBrains\\PhpStorm 2019.1.2\\bin;C:\\Program Files\\JetBrains\\JetBrains Rider 2019.1.2\\bin;C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2019.1.3\\bin;C:\\Users\\joe\\AppData\\Roaming\\Composer\\vendor\\bin;C:\\Program Files\\JetBrains\\IntelliJ IDEA 2019.2.3\\bin;C:\\Program Files (x86)\\Manymo/bin;C:\\Program Files (x86)\\Manymo;C:\\Program Files\\JetBrains\\JetBrains Rider 2019.2.3\\bin;C:\\Users\\joe\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\joe\\AppData\\Local\\Yarn\\bin;C:\\Users\\joe\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\joe\\AppData\\Roaming\\npm",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;php;nasm;xampp-control;psexec;.RB;.RBW",PhpStorm:"C:\\Program Files\\JetBrains\\PhpStorm 2019.1.2\\bin;",PHP_FCGI_MAX_REQUESTS:"0",POSTGIS_ENABLE_OUTDB_RASTERS:"1",POSTGIS_GDAL_ENABLED_DRIVERS:"GTiff PNG JPEG GIF XYZ DTED USGSDEM AAIGrid",POWERSHELL_DISTRIBUTION_CHANNEL:"MSI:Windows 10 Pro",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"Intel64 Family 6 Model 60 Stepping 3, GenuineIntel",PROCESSOR_LEVEL:"6",PROCESSOR_REVISION:"3c03",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROJ_LIB:"C:\\Program Files\\PostgreSQL\\12\\share\\contrib\\postgis-3.1\\proj",PROMPT:"$P$G",PSModulePath:"%ProgramFiles%\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files (x86)\\Microsoft SQL Server\\140\\Tools\\PowerShell\\Modules\\",PUBLIC:"C:\\Users\\Public",RUBYOPT:"-Eutf-8",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\WINDOWS",TEMP:"C:\\Users\\joe\\AppData\\Local\\Temp",TMP:"C:\\Users\\joe\\AppData\\Local\\Temp",TOOLBOX_VERSION:"1.22.10970",USERDOMAIN:"PROGRAMMERPC",USERDOMAIN_ROAMINGPROFILE:"PROGRAMMERPC",USERNAME:"Joseph Charika",USERPROFILE:"C:\\Users\\joe",windir:"C:\\WINDOWS"}.BASE_URL),routes:Zt.map(t=>N(V({},t),{path:t.path.replace(/\?/g,"")}))});M.beforeResolve((t,o,s)=>{t.name&&te.start(),s()});M.afterEach(()=>{window.scrollTo(0,0),te.done()});const y=t=>t.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036F]/g,"").replace(/\s+/g,"-").replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),es=(t,o,s,d,a)=>({title:t,text:s,category:o,image:new URL(d,oe.url),slug:y(t),children:a}),T=(t,o,s)=>({title:t,text:o,icon:s,slug:y(t)}),se=[es("Mobile Application Development","Data Age Solutions","We are a software development company in Harare offering custom software dev, web desktop and mobile application development.","../../assets/img/work/mobile-app.jpg",[T("Cross Platform Apps","We build cross-platform / hybrid mobile applications."),T("iOS Apps","Would you need a mobile app native to iOS?"),T("Android Apps","Applications native to Android.")])],R=(t,o)=>({title:t,icon:o,slug:y(t),services:se.filter(s=>s.category===t)}),ts=[R("Data Age Solutions",q),R("Data Age Hub",K),R("Data Age Ideas",De),R("Data Age Platforms",ye)],ss=se,D=(t,o,s)=>({title:t,text:o,icon:s,slug:y(t)});var os=[D("Software Development","We are a software development company in Harare offering custom software dev, web desktop and mobile application development.",q),D("UX/UI Design","We design UI/UX and wireframing for mobile and web with prototyping for user centric design",Ae),D("Enterprise Telephony","Communication through Freepbx installation & support, CRM systems, ERP , Accounting & POS Solutions, VoIP setup, IVR etc.",Ee),D("Website Design","We design, develop and manage corporate websites, implementation of e-commerce stores.",Ie),D("Social Media Consulting","We have managed companies grow their social media and integrated their digital customer touch points.",K),D("Graphic Media Design","We design all types of corporate media, annual reports, brochures, flyers, billboards, website graphics.",Oe)];const A=(t,o,s)=>({title:t,text:o,icon:new URL(s,oe.url),slug:y(t)});var as=[A("Call center","Business Challenge Set up servers and implement a VoIP call centre solution integrated with GSM sim cards Solution Provided Data Age Solutions set up the VoIP call centre main server and integrated with GSM gateway. The tasks accomplished in the setup include: SetUp of server and virtual PBX Integration of GSM gateway to VoIP Set up of sip extensions Training","../../assets/img/work/call-center.jpg"),A("Cross Platform Desktop Apps","Business Challenge Set up servers and implement a VoIP call centre solution integrated with GSM sim cards Solution Provided Data Age Solutions set up the VoIP call centre main server and integrated with GSM gateway. The tasks accomplished in the setup include: SetUp of server and virtual PBX Integration of GSM gateway to VoIP Set up of sip extensions Training","../../assets/img/work/desktop-app.jpg"),A("iOS & Android Apps","Business Challenge Set up servers and implement a VoIP call centre solution integrated with GSM sim cards Solution Provided Data Age Solutions set up the VoIP call centre main server and integrated with GSM gateway. The tasks accomplished in the setup include: SetUp of server and virtual PBX Integration of GSM gateway to VoIP Set up of sip extensions Training","../../assets/img/work/mobile-app.jpg"),A("Web App & Websites","Business Challenge Set up servers and implement a VoIP call centre solution integrated with GSM sim cards Solution Provided Data Age Solutions set up the VoIP call centre main server and integrated with GSM gateway. The tasks accomplished in the setup include: SetUp of server and virtual PBX Integration of GSM gateway to VoIP Set up of sip extensions Training","../../assets/img/work/web-app.jpg"),A("UI / UX","Business Challenge Set up servers and implement a VoIP call centre solution integrated with GSM sim cards Solution Provided Data Age Solutions set up the VoIP call centre main server and integrated with GSM gateway. The tasks accomplished in the setup include: SetUp of server and virtual PBX Integration of GSM gateway to VoIP Set up of sip extensions Training","../../assets/img/work/ui-ux.jpg")],rs={services:ss,categories:ts,offers:os,apps:as},ns=Re({state:rs,mutations:{},actions:{},modules:{}});ke(qt).use(ns).use(M).use(je).mount("#app");export{Fe as _,_ as a};