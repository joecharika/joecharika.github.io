import{M as f,Q as v,S as p,b as a,c as r,d,e as t,f as e,w as i,k as x,t as l,x as h,y as m,F as w,j as b}from"./vendor.2301ad53.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";const k={components:{ChevronRightIcon:f,HomeIcon:v,ArrowRightIcon:p},computed:{service(){return this.$store.state.services.find(c=>c.slug===this.$route.params.id)},services(){return this.$store.state.services.filter(c=>c.slug!==this.service.slug).slice(0,3)}}},j={class:"overflow-hidden relative"},I={class:"mx-auto max-w-7xl mt-10 px-4 sm:px-6 lg:px-8 z-20 relative pb-16 pt-32"},C={class:"flex flex-wrap"},S={class:"sm:text-center lg:text-left lg:w-2/3 w-full"},$={class:"text-gray-400 font-medium text-sm flex items-center justify-center lg:justify-start mb-4"},B=x(" DataAge Solutions "),R=x(" Services "),D={class:"text-4xl tracking-tight font-extrabold text-gray-600 sm:text-5xl md:text-6xl"},H=t("span",{class:"block xl:inline text-3xl"},"Premium Service",-1),N=t("br",null,null,-1),V={class:"block text-orange-600 xl:inline"},W={class:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"},A={class:"flex items-center justify-center lg:w-1/3 w-full"},F=t("div",{class:"absolute w-1/2 -right-48 top-0 bottom-0 transform rotate-[10deg] scale-[1.5] bg-orange-50"},null,-1),M=t("div",{class:"absolute w-1/3 right-0 top-0 bottom-0 transform rotate-[10deg] scale-[1.5] bg-orange-100"},null,-1),z={class:"bg-orange-700 text-orange-100"},E={class:"container py-32"},L=t("h1",{class:"text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6"}," What We Offer ",-1),O=t("h2",{class:"text-orange-200 text-3xl mb-12 w-full lg:w-2/3"}," We are the technology partner of choice for your digital transformation project ",-1),P={class:"flex"},Q={class:"grid gap-8 grid-cols-1 lg:grid-cols-3 flex-grow text-center"},T={class:"font-medium text-2xl"},q={class:"pl-4"};function G(c,J,K,U,X,s){const g=a("HomeIcon"),n=a("router-link"),_=a("ChevronRightIcon"),u=a("arrow-right-icon");return r(),d("main",null,[t("section",j,[t("div",I,[t("div",C,[t("div",S,[t("div",$,[e(n,{to:"/",class:"flex items-center justify-center"},{default:i(()=>[e(g,{class:"w-3 h-3 text-gray-400 mx-2"}),B]),_:1}),e(n,{to:"/about/services",class:"flex items-center justify-center"},{default:i(()=>[e(_,{class:"w-3 h-3 text-gray-400 mx-2"}),R]),_:1}),e(_,{class:"w-3 h-3 text-gray-400 mx-2"}),x(" "+l(s.service.title),1)]),t("h1",D,[H,N,t("span",V,l(s.service.title),1)]),t("p",W,l(s.service.text),1)]),t("div",A,[(r(),h(m(s.service.icon),{class:"h-64 w-64 text-orange-700"}))])])]),F,M]),t("section",z,[t("div",E,[L,O,t("div",P,[t("div",Q,[(r(!0),d(w,null,b(s.services,o=>(r(),d("div",{key:o.id,class:"hover:shadow-lg hover:border-white hover:bg-white hover:text-gray-600 shadow-orange-100 rounded-2xl transition-all duration-500 border-4 border-orange-100"},[e(n,{to:`/services/${o.slug}`,class:"flex flex-col p-8 items-center space-y-4"},{default:i(()=>[(r(),h(m(o.icon),{class:"h-16 w-16"})),t("h1",T,l(o.title),1),t("p",null,l(o.text),1)]),_:2},1032,["to"])]))),128))]),t("div",q,[e(n,{title:"More",to:"/about/services",class:"flex flex-col justify-center h-full rounded-lg transition hover:bg-orange-600 p-4 hover:text-white"},{default:i(()=>[e(u,{class:"h-8 w-8"})]),_:1})])])])])])}var tt=y(k,[["render",G]]);export{tt as default};
