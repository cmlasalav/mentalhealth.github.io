(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[724],{7100:(e,s,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return r(6132)}])},6977:(e,s,r)=>{"use strict";r.d(s,{$:()=>c});var a=r(4848),l=r(6540),i=r(3362),n=r(6990),t=r(6094);let d=(0,n.F)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=l.forwardRef((e,s)=>{let{className:r,variant:l,size:n,asChild:c=!1,...o}=e,x=c?i.DX:"button";return(0,a.jsx)(x,{className:(0,t.cn)(d({variant:l,size:n,className:r})),ref:s,...o})});c.displayName="Button"},355:(e,s,r)=>{"use strict";r.d(s,{BT:()=>c,Wu:()=>o,ZB:()=>d,Zp:()=>n,aR:()=>t,wL:()=>x});var a=r(4848),l=r(6540),i=r(6094);let n=l.forwardRef((e,s)=>{let{className:r,...l}=e;return(0,a.jsx)("div",{ref:s,className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...l})});n.displayName="Card";let t=l.forwardRef((e,s)=>{let{className:r,...l}=e;return(0,a.jsx)("div",{ref:s,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",r),...l})});t.displayName="CardHeader";let d=l.forwardRef((e,s)=>{let{className:r,...l}=e;return(0,a.jsx)("h3",{ref:s,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",r),...l})});d.displayName="CardTitle";let c=l.forwardRef((e,s)=>{let{className:r,...l}=e;return(0,a.jsx)("p",{ref:s,className:(0,i.cn)("text-sm text-muted-foreground",r),...l})});c.displayName="CardDescription";let o=l.forwardRef((e,s)=>{let{className:r,...l}=e;return(0,a.jsx)("div",{ref:s,className:(0,i.cn)("p-6 pt-0",r),...l})});o.displayName="CardContent";let x=l.forwardRef((e,s)=>{let{className:r,...l}=e;return(0,a.jsx)("div",{ref:s,className:(0,i.cn)("flex items-center p-6 pt-0",r),...l})});x.displayName="CardFooter"},6094:(e,s,r)=>{"use strict";r.d(s,{cn:()=>i});var a=r(4164),l=r(856);function i(){for(var e=arguments.length,s=Array(e),r=0;r<e;r++)s[r]=arguments[r];return(0,l.QP)((0,a.$)(s))}},6132:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>c});var a=r(4848),l=r(6540),i=r(6977),n=r(355),t=r(1106),d=r.n(t);function c(){let[e,s]=(0,l.useState)(7);return(0,a.jsxs)("div",{className:"container mx-auto py-8",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold text-center mb-8 text-blue-600",children:"Bienvenido a tu Dashboard"}),(0,a.jsxs)("div",{className:"grid md:grid-cols-2 gap-8",children:[(0,a.jsxs)(n.Zp,{children:[(0,a.jsx)(n.aR,{children:(0,a.jsx)(n.ZB,{children:"Estado Emocional"})}),(0,a.jsx)(n.Wu,{children:(0,a.jsxs)("p",{className:"text-4xl font-bold text-center",children:[e,"/10"]})}),(0,a.jsx)(n.wL,{children:(0,a.jsx)(i.$,{className:"w-full",children:"Actualizar Mi Estado"})})]}),(0,a.jsxs)(n.Zp,{children:[(0,a.jsx)(n.aR,{children:(0,a.jsx)(n.ZB,{children:"Pr\xf3ximas Citas"})}),(0,a.jsx)(n.Wu,{children:[{id:1,date:"2023-07-05",time:"14:00",expert:"Dra. Ana Garc\xeda"},{id:2,date:"2023-07-12",time:"10:30",expert:"Dr. Carlos Rodr\xedguez"}].map(e=>(0,a.jsxs)("div",{className:"mb-2",children:[(0,a.jsxs)("p",{children:[e.date," - ",e.time]}),(0,a.jsx)("p",{className:"text-sm text-gray-600",children:e.expert})]},e.id))}),(0,a.jsx)(n.wL,{children:(0,a.jsx)(d(),{href:"/appointment",className:"w-full",children:(0,a.jsx)(i.$,{className:"w-full",children:"Solicitar Nueva Cita"})})})]}),(0,a.jsxs)(n.Zp,{children:[(0,a.jsx)(n.aR,{children:(0,a.jsx)(n.ZB,{children:"Historial de Citas"})}),(0,a.jsx)(n.Wu,{children:[{id:1,date:"2023-06-28",expert:"Lic. Mar\xeda L\xf3pez"},{id:2,date:"2023-06-21",expert:"Dra. Ana Garc\xeda"}].map(e=>(0,a.jsxs)("div",{className:"mb-2",children:[(0,a.jsx)("p",{children:e.date}),(0,a.jsx)("p",{className:"text-sm text-gray-600",children:e.expert})]},e.id))}),(0,a.jsx)(n.wL,{children:(0,a.jsx)(d(),{href:"/appointmentHistory",className:"w-full",children:(0,a.jsx)(i.$,{className:"w-full",children:"Ver Historial Completo"})})})]}),(0,a.jsxs)(n.Zp,{children:[(0,a.jsx)(n.aR,{children:(0,a.jsx)(n.ZB,{children:"Evaluaci\xf3n de Expertos"})}),(0,a.jsx)(n.Wu,{children:(0,a.jsx)("p",{children:"Tienes 2 expertos pendientes de evaluar."})}),(0,a.jsx)(n.wL,{children:(0,a.jsx)(d(),{href:"/evaluation",className:"w-full",children:(0,a.jsx)(i.$,{className:"w-full",children:"Evaluar Expertos"})})})]})]}),(0,a.jsxs)(n.Zp,{className:"mt-8",children:[(0,a.jsx)(n.aR,{children:(0,a.jsx)(n.ZB,{children:"Notificaciones Importantes"})}),(0,a.jsx)(n.Wu,{children:(0,a.jsxs)("ul",{className:"list-disc list-inside",children:[(0,a.jsx)("li",{children:"Recuerda tu pr\xf3xima cita el 5 de julio a las 14:00 con la Dra. Ana Garc\xeda."}),(0,a.jsx)("li",{children:'Nuevo art\xedculo disponible: "T\xe9cnicas de relajaci\xf3n para el manejo del estr\xe9s".'})]})})]}),(0,a.jsxs)(n.Zp,{className:"mt-8",children:[(0,a.jsx)(n.aR,{children:(0,a.jsx)(n.ZB,{children:"Planes de Pago"})}),(0,a.jsx)(n.Wu,{children:(0,a.jsxs)("ul",{className:"list-disc list-inside",children:[(0,a.jsx)("li",{children:"Ac\xe1 puedes ver los planes disponibles"}),(0,a.jsx)(d(),{href:"/plan",className:"w-full",children:(0,a.jsx)(i.$,{className:"w-full",children:"Ver planes"})})]})})]}),(0,a.jsxs)(n.Zp,{className:"mt-8",children:[(0,a.jsx)(n.aR,{children:(0,a.jsx)(n.ZB,{children:"Seguros disponibles"})}),(0,a.jsx)(n.Wu,{children:(0,a.jsxs)("ul",{className:"list-disc list-inside",children:[(0,a.jsx)("li",{children:"Ac\xe1 puedes ver los segiros m\xe9dicos disponibles"}),(0,a.jsx)(d(),{href:"/insurance",className:"w-full",children:(0,a.jsx)(i.$,{className:"w-full",children:"Ver seguros m\xe9dicos"})})]})})]})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[801,106,636,593,792],()=>s(7100)),_N_E=e.O()}]);