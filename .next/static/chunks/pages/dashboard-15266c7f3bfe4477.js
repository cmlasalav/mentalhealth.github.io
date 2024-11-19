(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[724],{87100:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return a(99809)}])},51194:(e,t,a)=>{"use strict";a.d(t,{$:()=>o});var r=a(74848),i=a(96540),s=a(33362),n=a(26990),l=a(68985);let d=(0,n.F)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),o=i.forwardRef((e,t)=>{let{className:a,variant:i,size:n,asChild:o=!1,...c}=e,u=o?s.DX:"button";return(0,r.jsx)(u,{className:(0,l.cn)(d({variant:i,size:n,className:a})),ref:t,...c})});o.displayName="Button"},61544:(e,t,a)=>{"use strict";a.d(t,{BT:()=>o,Wu:()=>c,ZB:()=>d,Zp:()=>n,aR:()=>l,wL:()=>u});var r=a(74848),i=a(96540),s=a(68985);let n=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",a),...i})});n.displayName="Card";let l=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",a),...i})});l.displayName="CardHeader";let d=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,r.jsx)("h3",{ref:t,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",a),...i})});d.displayName="CardTitle";let o=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,r.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",a),...i})});o.displayName="CardDescription";let c=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",a),...i})});c.displayName="CardContent";let u=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",a),...i})});u.displayName="CardFooter"},68985:(e,t,a)=>{"use strict";a.d(t,{cn:()=>s});var r=a(34164),i=a(50856);function s(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,i.QP)((0,r.$)(t))}},99809:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var r=a(74848),i=a(96540),s=a(58421),n=a(51194),l=a(61544),d=a(91106),o=a.n(d);function c(){let[e,t]=(0,i.useState)(7);return(0,r.jsxs)(s.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},className:"container mx-auto py-8 px-4 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen",children:[(0,r.jsx)(s.P.h1,{className:"text-4xl font-bold text-center mb-8 text-blue-800",initial:{y:-50},animate:{y:0},transition:{type:"spring",stiffness:100},children:"Bienvenido a tu Dashboard"}),(0,r.jsxs)("div",{className:"grid md:grid-cols-2 gap-8",children:[(0,r.jsxs)(u,{title:"Estado Emocional",children:[(0,r.jsx)(l.Wu,{children:(0,r.jsxs)(s.P.p,{className:"text-6xl font-bold text-center text-blue-600",initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:200,delay:.2},children:[e,"/10"]})}),(0,r.jsx)(l.wL,{children:(0,r.jsx)(n.$,{className:"w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-200",children:"Actualizar Mi Estado"})})]}),(0,r.jsxs)(u,{title:"Pr\xf3ximas Citas",children:[(0,r.jsx)(l.Wu,{children:[{id:1,date:"2023-07-05",time:"14:00",expert:"Dra. Ana Garc\xeda"},{id:2,date:"2023-07-12",time:"10:30",expert:"Dr. Carlos Rodr\xedguez"}].map((e,t)=>(0,r.jsxs)(s.P.div,{className:"mb-4 p-3 bg-white rounded-lg shadow",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1*t},children:[(0,r.jsxs)("p",{className:"font-semibold text-blue-700",children:[e.date," - ",e.time]}),(0,r.jsx)("p",{className:"text-sm text-gray-600",children:e.expert})]},e.id))}),(0,r.jsx)(l.wL,{children:(0,r.jsx)(o(),{href:"/appointment-request",className:"w-full",children:(0,r.jsx)(n.$,{className:"w-full bg-green-500 hover:bg-green-600 transition-colors duration-200",children:"Solicitar Nueva Cita"})})})]}),(0,r.jsxs)(u,{title:"Historial de Citas",children:[(0,r.jsx)(l.Wu,{children:[{id:1,date:"2023-06-28",expert:"Lic. Mar\xeda L\xf3pez"},{id:2,date:"2023-06-21",expert:"Dra. Ana Garc\xeda"}].map((e,t)=>(0,r.jsxs)(s.P.div,{className:"mb-4 p-3 bg-white rounded-lg shadow",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1*t},children:[(0,r.jsx)("p",{className:"font-semibold text-purple-700",children:e.date}),(0,r.jsx)("p",{className:"text-sm text-gray-600",children:e.expert})]},e.id))}),(0,r.jsx)(l.wL,{children:(0,r.jsx)(o(),{href:"/appointment-history",className:"w-full",children:(0,r.jsx)(n.$,{className:"w-full bg-purple-500 hover:bg-purple-600 transition-colors duration-200",children:"Ver Historial Completo"})})})]}),(0,r.jsxs)(u,{title:"Evaluaci\xf3n de Expertos",children:[(0,r.jsx)(l.Wu,{children:(0,r.jsx)("p",{className:"text-lg text-center text-indigo-700",children:"Tienes 2 expertos pendientes de evaluar."})}),(0,r.jsx)(l.wL,{children:(0,r.jsx)(o(),{href:"/expert-evaluation",className:"w-full",children:(0,r.jsx)(n.$,{className:"w-full bg-indigo-500 hover:bg-indigo-600 transition-colors duration-200",children:"Evaluar Expertos"})})})]})]}),(0,r.jsx)(u,{title:"Acceso para Expertos en Salud",className:"mt-8",children:(0,r.jsx)(l.Wu,{children:(0,r.jsx)(o(),{href:"/expert-dashboard",children:(0,r.jsx)(n.$,{className:"w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1",children:"Vista de Experto en Salud"})})})}),(0,r.jsx)(u,{title:"Ac\xe1 puedes ver los seguros m\xe9dicos disponibles",className:"mt-8",children:(0,r.jsx)(l.Wu,{children:(0,r.jsx)("ul",{className:"list-disc list-inside",children:(0,r.jsx)(o(),{href:"/insurance",className:"w-full",children:(0,r.jsx)(n.$,{className:"w-full",children:"Ver seguros m\xe9dicos"})})})})}),(0,r.jsx)(u,{title:"Notificaciones Importantes",className:"mt-8",children:(0,r.jsx)(l.Wu,{children:(0,r.jsxs)("ul",{className:"list-disc list-inside space-y-2",children:[(0,r.jsx)(s.P.li,{className:"text-blue-700",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.2},children:"Recuerda tu pr\xf3xima cita el 5 de julio a las 14:00 con la Dra. Ana Garc\xeda."}),(0,r.jsx)(s.P.li,{className:"text-green-700",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.3},children:'Nuevo art\xedculo disponible: "T\xe9cnicas de relajaci\xf3n para el manejo del estr\xe9s".'})]})})})]})}function u(e){let{title:t,children:a,className:i=""}=e;return(0,r.jsx)(s.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:(0,r.jsxs)(l.Zp,{className:"overflow-hidden shadow-lg ".concat(i),children:[(0,r.jsx)(l.aR,{className:"bg-gradient-to-r from-blue-500 to-purple-500 text-white",children:(0,r.jsx)(l.ZB,{children:t})}),a]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[801,894,636,593,792],()=>t(87100)),_N_E=e.O()}]);