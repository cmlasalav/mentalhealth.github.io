(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[956],{92700:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/expertDashboard",function(){return s(19212)}])},51194:(e,t,s)=>{"use strict";s.d(t,{$:()=>d});var a=s(74848),i=s(96540),n=s(33362),r=s(26990),l=s(68985);let o=(0,r.F)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=i.forwardRef((e,t)=>{let{className:s,variant:i,size:r,asChild:d=!1,...c}=e,u=d?n.DX:"button";return(0,a.jsx)(u,{className:(0,l.cn)(o({variant:i,size:r,className:s})),ref:t,...c})});d.displayName="Button"},61544:(e,t,s)=>{"use strict";s.d(t,{BT:()=>d,Wu:()=>c,ZB:()=>o,Zp:()=>r,aR:()=>l,wL:()=>u});var a=s(74848),i=s(96540),n=s(68985);let r=i.forwardRef((e,t)=>{let{className:s,...i}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",s),...i})});r.displayName="Card";let l=i.forwardRef((e,t)=>{let{className:s,...i}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",s),...i})});l.displayName="CardHeader";let o=i.forwardRef((e,t)=>{let{className:s,...i}=e;return(0,a.jsx)("h3",{ref:t,className:(0,n.cn)("text-2xl font-semibold leading-none tracking-tight",s),...i})});o.displayName="CardTitle";let d=i.forwardRef((e,t)=>{let{className:s,...i}=e;return(0,a.jsx)("p",{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",s),...i})});d.displayName="CardDescription";let c=i.forwardRef((e,t)=>{let{className:s,...i}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("p-6 pt-0",s),...i})});c.displayName="CardContent";let u=i.forwardRef((e,t)=>{let{className:s,...i}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",s),...i})});u.displayName="CardFooter"},38218:(e,t,s)=>{"use strict";s.d(t,{Xi:()=>d,av:()=>c,j7:()=>o,tU:()=>l});var a=s(74848),i=s(96540),n=s(86198),r=s(68985);let l=n.bL,o=i.forwardRef((e,t)=>{let{className:s,...i}=e;return(0,a.jsx)(n.B8,{ref:t,className:(0,r.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",s),...i})});o.displayName=n.B8.displayName;let d=i.forwardRef((e,t)=>{let{className:s,...i}=e;return(0,a.jsx)(n.l9,{ref:t,className:(0,r.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",s),...i})});d.displayName=n.l9.displayName;let c=i.forwardRef((e,t)=>{let{className:s,...i}=e;return(0,a.jsx)(n.UC,{ref:t,className:(0,r.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",s),...i})});c.displayName=n.UC.displayName},68985:(e,t,s)=>{"use strict";s.d(t,{cn:()=>n});var a=s(34164),i=s(50856);function n(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,i.QP)((0,a.$)(t))}},19212:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>L});var a=s(74848),i=s(96540),n=s(56486),r=s(86719),l=s(28601),o=s(35446);class d extends i.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c({children:e,isPresent:t}){let s=(0,i.useId)(),n=(0,i.useRef)(null),r=(0,i.useRef)({width:0,height:0,top:0,left:0}),{nonce:l}=(0,i.useContext)(o.Q);return(0,i.useInsertionEffect)(()=>{let{width:e,height:a,top:i,left:o}=r.current;if(t||!n.current||!e||!a)return;n.current.dataset.motionPopId=s;let d=document.createElement("style");return l&&(d.nonce=l),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${a}px !important;
            top: ${i}px !important;
            left: ${o}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),(0,a.jsx)(d,{isPresent:t,childRef:n,sizeRef:r,children:i.cloneElement(e,{ref:n})})}let u=({children:e,initial:t,isPresent:s,onExitComplete:n,custom:o,presenceAffectsLayout:d,mode:u})=>{let h=(0,l.M)(m),p=(0,i.useId)(),x=(0,i.useCallback)(e=>{for(let t of(h.set(e,!0),h.values()))if(!t)return;n&&n()},[h,n]),f=(0,i.useMemo)(()=>({id:p,initial:t,isPresent:s,custom:o,onExitComplete:x,register:e=>(h.set(e,!1),()=>h.delete(e))}),d?[Math.random(),x]:[s,x]);return(0,i.useMemo)(()=>{h.forEach((e,t)=>h.set(t,!1))},[s]),i.useEffect(()=>{s||h.size||!n||n()},[s]),"popLayout"===u&&(e=(0,a.jsx)(c,{isPresent:s,children:e})),(0,a.jsx)(r.t.Provider,{value:f,children:e})};function m(){return new Map}var h=s(29473),p=s(85238);let x=e=>e.key||"";function f(e){let t=[];return i.Children.forEach(e,e=>{(0,i.isValidElement)(e)&&t.push(e)}),t}var g=s(25128);let j=({children:e,exitBeforeEnter:t,custom:s,initial:n=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:d="sync"})=>{(0,p.V)(!t,"Replace exitBeforeEnter with mode='wait'");let c=(0,i.useMemo)(()=>f(e),[e]),m=c.map(x),j=(0,i.useRef)(!0),v=(0,i.useRef)(c),b=(0,l.M)(()=>new Map),[y,N]=(0,i.useState)(c),[w,k]=(0,i.useState)(c);(0,g.E)(()=>{j.current=!1,v.current=c;for(let e=0;e<w.length;e++){let t=x(w[e]);m.includes(t)?b.delete(t):!0!==b.get(t)&&b.set(t,!1)}},[w,m.length,m.join("-")]);let C=[];if(c!==y){let e=[...c];for(let t=0;t<w.length;t++){let s=w[t],a=x(s);m.includes(a)||(e.splice(t,0,s),C.push(s))}"wait"===d&&C.length&&(e=C),k(f(e)),N(c);return}let{forceRender:R}=(0,i.useContext)(h.L);return(0,a.jsx)(a.Fragment,{children:w.map(e=>{let t=x(e),i=c===w||m.includes(t);return(0,a.jsx)(u,{isPresent:i,initial:(!j.current||!!n)&&void 0,custom:i?void 0:s,presenceAffectsLayout:o,mode:d,onExitComplete:i?void 0:()=>{if(!b.has(t))return;b.set(t,!0);let e=!0;b.forEach(t=>{t||(e=!1)}),e&&(null==R||R(),k(v.current),r&&r())},children:e},t)})})};var v=s(38218),b=s(61544),y=s(51194),N=s(46471);let w=(0,N.A)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]),k=(0,N.A)("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]),C=(0,N.A)("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]),R=(0,N.A)("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);var E=s(89982),P=s(17522),M=s(99440),T=s(27143),S=s(81632),B=s(42831),W=s(1194),z=s(31647),A=s(25046),H=s(661),$=(0,z.gu)({chartName:"BarChart",GraphicalChild:A.y,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:T.W},{axisType:"yAxis",AxisComp:S.h}],formatAxisMap:H.pr});let _=[{date:"2023-01",score:6},{date:"2023-02",score:7},{date:"2023-03",score:5},{date:"2023-04",score:8},{date:"2023-05",score:7},{date:"2023-06",score:9}],Z=[{month:"Ene",earnings:3e3},{month:"Feb",earnings:3500},{month:"Mar",earnings:2800},{month:"Abr",earnings:4200},{month:"May",earnings:3800},{month:"Jun",earnings:4500}];function L(){let[e,t]=(0,i.useState)("appointments");return(0,a.jsxs)(n.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},className:"container mx-auto p-4 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen",children:[(0,a.jsx)(n.P.h1,{className:"text-4xl font-bold mb-6 text-blue-800 text-center",initial:{y:-50},animate:{y:0},transition:{type:"spring",stiffness:100},children:"Dashboard de Experto en Salud"}),(0,a.jsxs)(v.tU,{value:e,onValueChange:t,className:"space-y-4",children:[(0,a.jsxs)(v.j7,{className:"grid w-full grid-cols-4 rounded-xl bg-blue-100 p-1",children:[(0,a.jsx)(D,{value:"appointments",icon:(0,a.jsx)(w,{}),children:"Citas"}),(0,a.jsx)(D,{value:"evaluations",icon:(0,a.jsx)(k,{}),children:"Evaluaciones"}),(0,a.jsx)(D,{value:"patients",icon:(0,a.jsx)(C,{}),children:"Pacientes"}),(0,a.jsx)(D,{value:"earnings",icon:(0,a.jsx)(R,{}),children:"Ganancias"})]}),(0,a.jsx)(j,{mode:"wait",children:(0,a.jsxs)(n.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.2},children:[(0,a.jsx)(v.av,{value:"appointments",children:(0,a.jsx)(U,{})}),(0,a.jsx)(v.av,{value:"evaluations",children:(0,a.jsx)(G,{})}),(0,a.jsx)(v.av,{value:"patients",children:(0,a.jsx)(K,{})}),(0,a.jsx)(v.av,{value:"earnings",children:(0,a.jsx)(I,{})})]},e)})]})]})}function D(e){let{value:t,icon:s,children:i}=e;return(0,a.jsx)(v.Xi,{value:t,className:"data-[state=active]:bg-white data-[state=active]:text-blue-700 transition-all duration-200",children:(0,a.jsxs)(n.P.div,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"flex items-center space-x-2",children:[s,(0,a.jsx)("span",{children:i})]})})}function U(){return(0,a.jsxs)(b.Zp,{className:"w-full overflow-hidden shadow-lg",children:[(0,a.jsxs)(b.aR,{className:"bg-gradient-to-r from-blue-500 to-purple-500 text-white",children:[(0,a.jsx)(b.ZB,{children:"Citas Pendientes"}),(0,a.jsx)(b.BT,{className:"text-blue-100",children:"Gestiona tus pr\xf3ximas citas con pacientes"})]}),(0,a.jsx)(b.Wu,{className:"p-6",children:(0,a.jsx)("ul",{className:"space-y-4",children:[{id:1,patient:"Juan P\xe9rez",date:"2023-07-05",time:"14:00",note:"Primera consulta"},{id:2,patient:"Mar\xeda Garc\xeda",date:"2023-07-06",time:"10:30",note:"Seguimiento mensual"},{id:3,patient:"Carlos Rodr\xedguez",date:"2023-07-07",time:"16:00",note:"Evaluaci\xf3n de progreso"}].map(e=>(0,a.jsxs)(n.P.li,{className:"flex justify-between items-center p-4 bg-white rounded-lg shadow transition-shadow hover:shadow-md",whileHover:{scale:1.02},transition:{type:"spring",stiffness:400,damping:10},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"font-semibold text-blue-700",children:e.patient}),(0,a.jsxs)("p",{className:"text-sm text-gray-600",children:[e.date," - ",e.time]}),(0,a.jsx)("p",{className:"text-sm text-gray-500",children:e.note})]}),(0,a.jsxs)("div",{className:"space-x-2",children:[(0,a.jsx)(y.$,{variant:"outline",className:"bg-green-50 text-green-700 hover:bg-green-100",children:"Confirmar"}),(0,a.jsx)(y.$,{variant:"outline",className:"bg-red-50 text-red-700 hover:bg-red-100",children:"Cancelar"})]})]},e.id))})})]})}function G(){return(0,a.jsxs)(b.Zp,{className:"w-full overflow-hidden shadow-lg",children:[(0,a.jsxs)(b.aR,{className:"bg-gradient-to-r from-yellow-400 to-orange-500 text-white",children:[(0,a.jsx)(b.ZB,{children:"Evaluaciones de Usuarios"}),(0,a.jsx)(b.BT,{className:"text-yellow-100",children:"Resumen de tus evaluaciones y comentarios de pacientes"})]}),(0,a.jsxs)(b.Wu,{className:"p-6",children:[(0,a.jsxs)(n.P.div,{className:"mb-6 bg-yellow-50 p-4 rounded-lg",initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5},children:[(0,a.jsx)("h3",{className:"text-2xl font-semibold mb-2 text-yellow-700",children:"Calificaci\xf3n Promedio: 4.7 ⭐"}),(0,a.jsx)("p",{className:"text-yellow-600",children:"Total de evaluaciones: 128"})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)("h4",{className:"text-lg font-semibold mb-2 text-orange-700",children:"Comentarios Recientes"}),(0,a.jsxs)("ul",{className:"space-y-2",children:[(0,a.jsx)(n.P.li,{className:"p-3 bg-orange-50 rounded-lg shadow",whileHover:{scale:1.03},transition:{type:"spring",stiffness:400,damping:10},children:(0,a.jsx)("p",{className:"text-orange-800",children:'"Excelente atenci\xf3n, muy profesional y emp\xe1tico."'})}),(0,a.jsx)(n.P.li,{className:"p-3 bg-orange-50 rounded-lg shadow",whileHover:{scale:1.03},transition:{type:"spring",stiffness:400,damping:10},children:(0,a.jsx)("p",{className:"text-orange-800",children:'"Me ha ayudado mucho en mi proceso de recuperaci\xf3n."'})})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"text-lg font-semibold mb-2 text-orange-700",children:"Evoluci\xf3n de Calificaciones"}),(0,a.jsx)(E.u,{width:"100%",height:200,children:(0,a.jsxs)(P.b,{data:_,children:[(0,a.jsx)(M.d,{strokeDasharray:"3 3",stroke:"#fbd38d"}),(0,a.jsx)(T.W,{dataKey:"date",stroke:"#ed8936"}),(0,a.jsx)(S.h,{domain:[0,10],stroke:"#ed8936"}),(0,a.jsx)(B.m,{contentStyle:{backgroundColor:"#fffaf0",border:"1px solid #ed8936"}}),(0,a.jsx)(W.N,{type:"monotone",dataKey:"score",stroke:"#ed8936",strokeWidth:2,dot:{fill:"#ed8936",strokeWidth:2}})]})})]})]})]})}function K(){return(0,a.jsxs)(b.Zp,{className:"w-full overflow-hidden shadow-lg",children:[(0,a.jsxs)(b.aR,{className:"bg-gradient-to-r from-green-500 to-teal-500 text-white",children:[(0,a.jsx)(b.ZB,{children:"Evaluaci\xf3n Emocional de Pacientes"}),(0,a.jsx)(b.BT,{className:"text-green-100",children:"Seguimiento del estado emocional de tus pacientes"})]}),(0,a.jsxs)(b.Wu,{className:"p-6",children:[(0,a.jsx)("p",{className:"text-sm text-teal-600 mb-4 bg-teal-50 p-2 rounded",children:"Nota: Esta informaci\xf3n es confidencial y solo visible para ti como experto autorizado."}),(0,a.jsx)("ul",{className:"space-y-6",children:[{id:1,name:"Ana Mart\xednez",lastScore:7},{id:2,name:"Luis S\xe1nchez",lastScore:5},{id:3,name:"Elena Torres",lastScore:8}].map(e=>(0,a.jsxs)(n.P.li,{className:"bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow",whileHover:{scale:1.02},transition:{type:"spring",stiffness:400,damping:10},children:[(0,a.jsx)("h4",{className:"text-lg font-semibold mb-2 text-teal-700",children:e.name}),(0,a.jsxs)("p",{className:"mb-2 text-teal-600",children:["\xdaltimo estado emocional reportado: ",(0,a.jsxs)("span",{className:"font-bold",children:[e.lastScore,"/10"]})]}),(0,a.jsx)(E.u,{width:"100%",height:100,children:(0,a.jsxs)(P.b,{data:_,children:[(0,a.jsx)(T.W,{dataKey:"date",hide:!0}),(0,a.jsx)(S.h,{hide:!0,domain:[0,10]}),(0,a.jsx)(W.N,{type:"monotone",dataKey:"score",stroke:"#2c7a7b",strokeWidth:2,dot:{fill:"#2c7a7b",strokeWidth:2}})]})})]},e.id))})]})]})}function I(){return(0,a.jsxs)(b.Zp,{className:"w-full overflow-hidden shadow-lg",children:[(0,a.jsxs)(b.aR,{className:"bg-gradient-to-r from-indigo-500 to-purple-500 text-white",children:[(0,a.jsx)(b.ZB,{children:"Ganancias por Citas"}),(0,a.jsx)(b.BT,{className:"text-indigo-100",children:"Resumen de tus ingresos y transacciones"})]}),(0,a.jsxs)(b.Wu,{className:"p-6",children:[(0,a.jsxs)(n.P.div,{className:"mb-6 bg-indigo-50 p-4 rounded-lg",initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5},children:[(0,a.jsx)("h3",{className:"text-2xl font-semibold mb-2 text-indigo-700",children:"Ganancias Totales: $22,800"}),(0,a.jsx)(y.$,{className:"bg-indigo-600 hover:bg-indigo-700 text-white",children:"Solicitar Retiro"})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)("h4",{className:"text-lg font-semibold mb-2 text-purple-700",children:"Historial de Ingresos"}),(0,a.jsx)(E.u,{width:"100%",height:200,children:(0,a.jsxs)($,{data:Z,children:[(0,a.jsx)(M.d,{strokeDasharray:"3 3",stroke:"#a78bfa"}),(0,a.jsx)(T.W,{dataKey:"month",stroke:"#7c3aed"}),(0,a.jsx)(S.h,{stroke:"#7c3aed"}),(0,a.jsx)(B.m,{contentStyle:{backgroundColor:"#ede9fe",border:"1px solid #7c3aed"}}),(0,a.jsx)(A.y,{dataKey:"earnings",fill:"#7c3aed"})]})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"text-lg font-semibold mb-2 text-purple-700",children:"\xdaltimas Transacciones"}),(0,a.jsx)("ul",{className:"space-y-2",children:[{id:1,patient:"Juan P\xe9rez",date:"2023-06-30",amount:150},{id:2,patient:"Mar\xeda Garc\xeda",date:"2023-06-28",amount:120},{id:3,patient:"Carlos Rodr\xedguez",date:"2023-06-25",amount:180}].map(e=>(0,a.jsxs)(n.P.li,{className:"flex justify-between items-center p-3 bg-purple-50 rounded-lg shadow",whileHover:{scale:1.02},transition:{type:"spring",stiffness:400,damping:10},children:[(0,a.jsx)("span",{className:"font-medium text-purple-700",children:e.patient}),(0,a.jsx)("span",{className:"text-purple-600",children:e.date}),(0,a.jsxs)("span",{className:"font-semibold text-green-600",children:["$",e.amount]})]},e.id))})]})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[801,486,643,198,636,593,792],()=>t(92700)),_N_E=e.O()}]);