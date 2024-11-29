"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[198],{9957:(e,t,r)=>{r.d(t,{m:()=>n});function n(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}},77966:(e,t,r)=>{r.d(t,{N:()=>i});var n=r(96540),o=r(74848),u=r(91071),a=r(33362);function i(e){let t=e+"CollectionProvider",[r,i]=function(e,t=[]){let r=[],u=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return u.scopeName=e,[function(t,u){let a=n.createContext(u),i=r.length;function l(t){let{scope:r,children:u,...l}=t,s=r?.[e][i]||a,c=n.useMemo(()=>l,Object.values(l));return(0,o.jsx)(s.Provider,{value:c,children:u})}return r=[...r,u],l.displayName=t+"Provider",[l,function(r,o){let l=o?.[e][i]||a,s=n.useContext(l);if(s)return s;if(void 0!==u)return u;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(u,...t)]}(t),[l,s]=r(t,{collectionRef:{current:null},itemMap:new Map}),c=e=>{let{scope:t,children:r}=e,u=n.useRef(null),a=n.useRef(new Map).current;return(0,o.jsx)(l,{scope:t,itemMap:a,collectionRef:u,children:r})};c.displayName=t;let f=e+"CollectionSlot",d=n.forwardRef((e,t)=>{let{scope:r,children:n}=e,i=s(f,r),l=(0,u.s)(t,i.collectionRef);return(0,o.jsx)(a.DX,{ref:l,children:n})});d.displayName=f;let m=e+"CollectionItemSlot",p="data-radix-collection-item",v=n.forwardRef((e,t)=>{let{scope:r,children:i,...l}=e,c=n.useRef(null),f=(0,u.s)(t,c),d=s(m,r);return n.useEffect(()=>(d.itemMap.set(c,{ref:c,...l}),()=>void d.itemMap.delete(c))),(0,o.jsx)(a.DX,{[p]:"",ref:f,children:i})});return v.displayName=m,[{Provider:c,Slot:d,ItemSlot:v},function(t){let r=s(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},i]}},62133:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(96540),o=r(74848);function u(e,t=[]){let r=[],a=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return a.scopeName=e,[function(t,u){let a=n.createContext(u),i=r.length;r=[...r,u];let l=t=>{let{scope:r,children:u,...l}=t,s=r?.[e]?.[i]||a,c=n.useMemo(()=>l,Object.values(l));return(0,o.jsx)(s.Provider,{value:c,children:u})};return l.displayName=t+"Provider",[l,function(r,o){let l=o?.[e]?.[i]||a,s=n.useContext(l);if(s)return s;if(void 0!==u)return u;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(a,...t)]}},71427:(e,t,r)=>{r.d(t,{jH:()=>u});var n=r(96540);r(74848);var o=n.createContext(void 0);function u(e){let t=n.useContext(o);return e||t||"ltr"}},18723:(e,t,r)=>{r.d(t,{B:()=>l});var n,o=r(96540),u=r(88200),a=(n||(n=r.t(o,2)))["useId".toString()]||(()=>void 0),i=0;function l(e){let[t,r]=o.useState(a());return(0,u.N)(()=>{e||r(e=>e??String(i++))},[e]),e||(t?`radix-${t}`:"")}},86198:(e,t,r)=>{r.d(t,{UC:()=>Q,B8:()=>X,bL:()=>z,l9:()=>J});var n=r(96540),o=r(9957),u=r(62133),a=r(77966),i=r(91071),l=r(74848),s=r(18723),c=r(12579),f=r(10263),d=r(81351),m=r(71427),p="rovingFocusGroup.onEntryFocus",v={bubbles:!1,cancelable:!0},N="RovingFocusGroup",[b,w,y]=(0,a.N)(N),[g,h]=function(e,t=[]){let r=[],o=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return o.scopeName=e,[function(t,o){let u=n.createContext(o),a=r.length;function i(t){let{scope:r,children:o,...i}=t,s=r?.[e][a]||u,c=n.useMemo(()=>i,Object.values(i));return(0,l.jsx)(s.Provider,{value:c,children:o})}return r=[...r,o],i.displayName=t+"Provider",[i,function(r,i){let l=i?.[e][a]||u,s=n.useContext(l);if(s)return s;if(void 0!==o)return o;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(o,...t)]}(N,[y]),[x,M]=g(N),R=n.forwardRef((e,t)=>(0,l.jsx)(b.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,l.jsx)(b.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,l.jsx)(C,{...e,ref:t})})}));R.displayName=N;var C=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:u,loop:a=!1,dir:s,currentTabStopId:N,defaultCurrentTabStopId:b,onCurrentTabStopIdChange:y,onEntryFocus:g,preventScrollOnEntryFocus:h=!1,...M}=e,R=n.useRef(null),C=(0,i.s)(t,R),E=(0,m.jH)(s),[I=null,T]=(0,d.i)({prop:N,defaultProp:b,onChange:y}),[A,j]=n.useState(!1),D=(0,f.c)(g),S=w(r),F=n.useRef(!1),[O,P]=n.useState(0);return n.useEffect(()=>{let e=R.current;if(e)return e.addEventListener(p,D),()=>e.removeEventListener(p,D)},[D]),(0,l.jsx)(x,{scope:r,orientation:u,dir:E,loop:a,currentTabStopId:I,onItemFocus:n.useCallback(e=>T(e),[T]),onItemShiftTab:n.useCallback(()=>j(!0),[]),onFocusableItemAdd:n.useCallback(()=>P(e=>e+1),[]),onFocusableItemRemove:n.useCallback(()=>P(e=>e-1),[]),children:(0,l.jsx)(c.sG.div,{tabIndex:A||0===O?-1:0,"data-orientation":u,...M,ref:C,style:{outline:"none",...e.style},onMouseDown:(0,o.m)(e.onMouseDown,()=>{F.current=!0}),onFocus:(0,o.m)(e.onFocus,e=>{let t=!F.current;if(e.target===e.currentTarget&&t&&!A){let t=new CustomEvent(p,v);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=S().filter(e=>e.focusable);_([e.find(e=>e.active),e.find(e=>e.id===I),...e].filter(Boolean).map(e=>e.ref.current),h)}}F.current=!1}),onBlur:(0,o.m)(e.onBlur,()=>j(!1))})})}),E="RovingFocusGroupItem",I=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:u=!0,active:a=!1,tabStopId:i,...f}=e,d=(0,s.B)(),m=i||d,p=M(E,r),v=p.currentTabStopId===m,N=w(r),{onFocusableItemAdd:y,onFocusableItemRemove:g}=p;return n.useEffect(()=>{if(u)return y(),()=>g()},[u,y,g]),(0,l.jsx)(b.ItemSlot,{scope:r,id:m,focusable:u,active:a,children:(0,l.jsx)(c.sG.span,{tabIndex:v?0:-1,"data-orientation":p.orientation,...f,ref:t,onMouseDown:(0,o.m)(e.onMouseDown,e=>{u?p.onItemFocus(m):e.preventDefault()}),onFocus:(0,o.m)(e.onFocus,()=>p.onItemFocus(m)),onKeyDown:(0,o.m)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){p.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var n;let o=(n=e.key,"rtl"!==r?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return T[o]}(e,p.orientation,p.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let r=N().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)r.reverse();else if("prev"===t||"next"===t){"prev"===t&&r.reverse();let n=r.indexOf(e.currentTarget);r=p.loop?function(e,t){return e.map((r,n)=>e[(t+n)%e.length])}(r,n+1):r.slice(n+1)}setTimeout(()=>_(r))}})})})});I.displayName=E;var T={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function _(e,t=!1){let r=document.activeElement;for(let n of e)if(n===r||(n.focus({preventScroll:t}),document.activeElement!==r))return}var A=r(88200),j=e=>{let{present:t,children:r}=e,o=function(e){var t,r;let[o,u]=n.useState(),a=n.useRef({}),i=n.useRef(e),l=n.useRef("none"),[s,c]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,t)=>r[e][t]??e,t));return n.useEffect(()=>{let e=D(a.current);l.current="mounted"===s?e:"none"},[s]),(0,A.N)(()=>{let t=a.current,r=i.current;if(r!==e){let n=l.current,o=D(t);e?c("MOUNT"):"none"===o||t?.display==="none"?c("UNMOUNT"):r&&n!==o?c("ANIMATION_OUT"):c("UNMOUNT"),i.current=e}},[e,c]),(0,A.N)(()=>{if(o){let e;let t=o.ownerDocument.defaultView??window,r=r=>{let n=D(a.current).includes(r.animationName);if(r.target===o&&n&&(c("ANIMATION_END"),!i.current)){let r=o.style.animationFillMode;o.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=r)})}},n=e=>{e.target===o&&(l.current=D(a.current))};return o.addEventListener("animationstart",n),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{t.clearTimeout(e),o.removeEventListener("animationstart",n),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}c("ANIMATION_END")},[o,c]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:n.useCallback(e=>{e&&(a.current=getComputedStyle(e)),u(e)},[])}}(t),u="function"==typeof r?r({present:o.isPresent}):n.Children.only(r),a=(0,i.s)(o.ref,function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(u));return"function"==typeof r||o.isPresent?n.cloneElement(u,{ref:a}):null};function D(e){return e?.animationName||"none"}j.displayName="Presence";var S="Tabs",[F,O]=(0,u.A)(S,[h]),P=h(),[$,L]=F(S),U=n.forwardRef((e,t)=>{let{__scopeTabs:r,value:n,onValueChange:o,defaultValue:u,orientation:a="horizontal",dir:i,activationMode:f="automatic",...p}=e,v=(0,m.jH)(i),[N,b]=(0,d.i)({prop:n,onChange:o,defaultProp:u});return(0,l.jsx)($,{scope:r,baseId:(0,s.B)(),value:N,onValueChange:b,orientation:a,dir:v,activationMode:f,children:(0,l.jsx)(c.sG.div,{dir:v,"data-orientation":a,...p,ref:t})})});U.displayName=S;var k="TabsList",G=n.forwardRef((e,t)=>{let{__scopeTabs:r,loop:n=!0,...o}=e,u=L(k,r),a=P(r);return(0,l.jsx)(R,{asChild:!0,...a,orientation:u.orientation,dir:u.dir,loop:n,children:(0,l.jsx)(c.sG.div,{role:"tablist","aria-orientation":u.orientation,...o,ref:t})})});G.displayName=k;var K="TabsTrigger",B=n.forwardRef((e,t)=>{let{__scopeTabs:r,value:n,disabled:u=!1,...a}=e,i=L(K,r),s=P(r),f=W(i.baseId,n),d=q(i.baseId,n),m=n===i.value;return(0,l.jsx)(I,{asChild:!0,...s,focusable:!u,active:m,children:(0,l.jsx)(c.sG.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":d,"data-state":m?"active":"inactive","data-disabled":u?"":void 0,disabled:u,id:f,...a,ref:t,onMouseDown:(0,o.m)(e.onMouseDown,e=>{u||0!==e.button||!1!==e.ctrlKey?e.preventDefault():i.onValueChange(n)}),onKeyDown:(0,o.m)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&i.onValueChange(n)}),onFocus:(0,o.m)(e.onFocus,()=>{let e="manual"!==i.activationMode;m||u||!e||i.onValueChange(n)})})})});B.displayName=K;var V="TabsContent",H=n.forwardRef((e,t)=>{let{__scopeTabs:r,value:o,forceMount:u,children:a,...i}=e,s=L(V,r),f=W(s.baseId,o),d=q(s.baseId,o),m=o===s.value,p=n.useRef(m);return n.useEffect(()=>{let e=requestAnimationFrame(()=>p.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,l.jsx)(j,{present:u||m,children:({present:r})=>(0,l.jsx)(c.sG.div,{"data-state":m?"active":"inactive","data-orientation":s.orientation,role:"tabpanel","aria-labelledby":f,hidden:!r,id:d,tabIndex:0,...i,ref:t,style:{...e.style,animationDuration:p.current?"0s":void 0},children:r&&a})})});function W(e,t){return`${e}-trigger-${t}`}function q(e,t){return`${e}-content-${t}`}H.displayName=V;var z=U,X=G,J=B,Q=H},10263:(e,t,r)=>{r.d(t,{c:()=>o});var n=r(96540);function o(e){let t=n.useRef(e);return n.useEffect(()=>{t.current=e}),n.useMemo(()=>(...e)=>t.current?.(...e),[])}},81351:(e,t,r)=>{r.d(t,{i:()=>u});var n=r(96540),o=r(10263);function u({prop:e,defaultProp:t,onChange:r=()=>{}}){let[u,a]=function({defaultProp:e,onChange:t}){let r=n.useState(e),[u]=r,a=n.useRef(u),i=(0,o.c)(t);return n.useEffect(()=>{a.current!==u&&(i(u),a.current=u)},[u,a,i]),r}({defaultProp:t,onChange:r}),i=void 0!==e,l=i?e:u,s=(0,o.c)(r);return[l,n.useCallback(t=>{if(i){let r="function"==typeof t?t(e):t;r!==e&&s(r)}else a(t)},[i,e,a,s])]}},88200:(e,t,r)=>{r.d(t,{N:()=>o});var n=r(96540),o=globalThis?.document?n.useLayoutEffect:()=>{}}}]);