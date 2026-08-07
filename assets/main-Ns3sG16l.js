import{r as C,j as l,M as Oo,v as oi,V as U,S as go,B as ni,U as Qn,a as je,b as Ms,L as Ks,c as Go,F as Zo,d as De,e as Ie,C as ue,f as eA,P as tA,D as oA,g as Y,I as nA,Q as ke,h as iA,O as ws,T as sA,i as rA,k as me,l as aA,m as La,N as lA,n as cA,o as uA,p as Fe,q as he,R as Bt,s as dA,t as Mt,u as fA,w as hi,x as AA,y as tt,z as Lt,A as lt,E as pA,G as Xe,H as mA,J as dr,K as hA,W as gA,X as xA,Y as yA,Z as No,_ as Ds,$ as vt,a0 as bA,a1 as CA,a2 as FA,a3 as BA,a4 as vA,a5 as Ja,a6 as Pt,a7 as fr,a8 as Ar,a9 as pr,aa as mr,ab as Wn,ac as RA,ad as de,ae as ii,af as SA,ag as MA,ah as KA,ai as hr,aj as ls,ak as wA,al as gr,am as Ne,an as ot,ao as Le,ap as fo,aq as DA,ar as $o,as as EA,at as en,au as Jt,av as ko,aw as Lo,ax as Te,ay as gi,az as Re,aA as cs,aB as UA,aC as xr,aD as TA,aE as Ce,aF as us,aG as Qa,aH as jA,aI as Wa,aJ as Gt,aK as IA,aL as kA,aM as zA,aN as Ae,aO as Va,aP as Es,aQ as Gn,aR as Ao,aS as Ke,aT as PA,aU as HA,aV as Xa,aW as Ya,aX as Ct,aY as OA,aZ as GA,a_ as NA,a$ as LA,b0 as Za,b1 as JA,b2 as Vn,b3 as yr,b4 as QA,b5 as WA,b6 as Xn,b7 as qa,b8 as si,b9 as Us,ba as _a,bb as ri,bc as Ts,bd as VA,be as XA,bf as xi,bg as Jo,bh as YA,bi as ZA,bj as yi,bk as bi,bl as qA,bm as js,bn as _A,bo as $A,bp as ep,bq as tp,br as op,bs as np,bt as ip,bu as sp,bv as rp}from"./index-Bb4HTiAC.js";const ap={mark:{label:"Mark",badge:"L1"},collection1:{label:"Collection",badge:"L2"},collection2:{label:"Collection",badge:"L3"},scene:{label:"Scene",badge:"Env"}},lp={1:["mark","scene"],2:["mark","collection1","scene"],3:["mark","collection1","collection2","scene"]},Ci={padding:"8px 12px",borderRadius:"10px",fontSize:"12px",fontWeight:"500",cursor:"pointer",fontFamily:"inherit",transition:"border-color 0.15s, color 0.15s",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",width:"100%"};function cp({level:o,activeElement:e,onSelectElement:t,onAdvanceLevel:i,onDowngradeLevel:n,decorations:r,activeDecorationId:s,onSelectDecoration:a,onAddDecoration:c,onRemoveDecoration:d,onRenameDecoration:A}){const u=lp[o],[f,m]=C.useState(null),[y,g]=C.useState(""),x=C.useRef(null);function h(F,B){m(F.id),g(F.name??`Decoration ${B+1}`),setTimeout(()=>{var v;return(v=x.current)==null?void 0:v.select()},0)}function p(){f&&A(f,y.trim()||f),m(null)}function b(){m(null)}return l.jsxs("div",{style:{padding:"14px 14px 14px",display:"flex",flexDirection:"column",gap:"8px"},children:[l.jsx("div",{style:{paddingTop:"12px"},children:l.jsx("div",{style:{fontSize:"16px",color:"#1D1D1F",fontWeight:"700"},children:"Visualization Hierarchy"})}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:u.map(F=>{const B=ap[F],v=F===e&&s===null;return l.jsxs("button",{onClick:()=>t(F),style:{display:"flex",alignItems:"center",gap:"10px",padding:"9px 12px",width:"100%",textAlign:"left",background:v?"#F2F2F7":"#FAFAFA",border:`1.5px solid ${v?"#1D1D1F":"#E5E5EA"}`,borderRadius:"10px",cursor:"pointer",transition:"border-color 0.15s, background 0.15s",fontFamily:"inherit"},children:[l.jsx("div",{style:{flex:1,minWidth:0},children:l.jsx("div",{style:{fontSize:"12px",color:"#1D1D1F",fontWeight:v?"600":"500",lineHeight:1.2},children:B.label})}),l.jsx("span",{style:{fontSize:"9px",letterSpacing:"0.06em",fontWeight:"500",color:v?"#1D1D1F":"#8E8E93",border:`1px solid ${v?"#1D1D1F":"#D1D1D6"}`,borderRadius:"4px",padding:"1px 5px",flexShrink:0,transition:"color 0.15s, border-color 0.15s"},children:B.badge})]},F)})}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px",paddingTop:"2px"},children:[o<3&&l.jsx("button",{onClick:i,style:{...Ci,background:"transparent",border:"1.5px dashed #C7C7CC",color:"#8E8E93"},children:"+ Add Collection"}),o>1&&l.jsx("button",{onClick:n,style:{...Ci,background:"transparent",border:"1.5px dashed #C7C7CC",color:"#8E8E93"},children:"− Remove Collection"})]}),l.jsxs("div",{style:{borderTop:"1px solid #E5E5EA",paddingTop:"8px",display:"flex",flexDirection:"column",gap:"5px"},children:[l.jsx("div",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600",marginBottom:"2px"},children:"Decorations"}),r.map((F,B)=>{const v=F.id===s,R=F.id===f,K=F.name??`Decoration ${B+1}`;return l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[l.jsxs("div",{onClick:()=>{R||a(F.id)},onDoubleClick:()=>h(F,B),style:{flex:1,display:"flex",alignItems:"center",gap:"8px",padding:"7px 10px",background:v?"#F2F2F7":"#FAFAFA",border:`1.5px solid ${v?"#1D1D1F":"#E5E5EA"}`,borderRadius:"8px",cursor:R?"default":"pointer",transition:"border-color 0.15s, background 0.15s",minWidth:0},children:[R?l.jsx("input",{ref:x,value:y,onChange:S=>g(S.target.value),onBlur:p,onKeyDown:S=>{S.key==="Enter"&&p(),S.key==="Escape"&&b()},style:{flex:1,border:"none",outline:"none",background:"transparent",fontSize:"12px",color:"#1D1D1F",fontFamily:"inherit",fontWeight:"600",minWidth:0},onClick:S=>S.stopPropagation(),autoFocus:!0}):l.jsx("span",{style:{fontSize:"12px",color:"#1D1D1F",fontWeight:v?"600":"400",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:K}),!R&&l.jsx("span",{style:{fontSize:"9px",color:v?"#1D1D1F":"#8E8E93",border:`1px solid ${v?"#1D1D1F":"#D1D1D6"}`,borderRadius:"4px",padding:"1px 5px",flexShrink:0},children:"Dec"})]}),l.jsx("button",{onClick:()=>d(F.id),title:"Remove decoration",style:{background:"none",border:"none",cursor:"pointer",color:"#AEAEB2",fontSize:"16px",lineHeight:1,padding:"4px 6px",flexShrink:0,fontFamily:"inherit"},children:"×"})]},F.id)}),l.jsx("button",{onClick:c,style:{...Ci,background:"transparent",border:"1.5px dashed #C7C7CC",color:"#8E8E93"},children:"+ Add Decoration"})]})]})}const $a=C.createContext(Oo);function up(o){return 2*Math.atan(12/o)*180/Math.PI}const Wt="/phys_tool/",We={spatial:`${Wt}assets/icons/spatial.png`,shape:`${Wt}assets/icons/shape.png`,material:`${Wt}assets/icons/material.png`,populations:`${Wt}assets/icons/populations.png`,framing:`${Wt}assets/icons/framing.png`,labels:`${Wt}assets/icons/labels.png`};function dp({children:o}){return l.jsx("span",{style:{fontSize:"10px",color:"#8E8E93",textTransform:"uppercase",letterSpacing:"0.07em",fontWeight:"600"},children:o})}function q({label:o,children:e,right:t}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(dp,{children:o}),t]}),e]})}function Qo({options:o,value:e,onChange:t}){return l.jsx("div",{style:{display:"flex",background:"#EFEFEF",borderRadius:"8px",padding:"2px",gap:"2px"},children:o.map(i=>{const n=e===i.value;return l.jsx("button",{onClick:()=>t(i.value),style:{flex:1,padding:"5px 4px",background:n?"#FFFFFF":"transparent",border:"none",borderRadius:"6px",boxShadow:n?"0 1px 3px rgba(0,0,0,0.12)":"none",color:n?"#1D1D1F":"#6C6C70",cursor:"pointer",fontSize:"12px",fontWeight:n?"600":"400",transition:"all 0.15s",whiteSpace:"nowrap",fontFamily:"inherit"},children:i.label},i.value)})})}const tn={numerical:{label:"Numerical",type:"numerical"},categorical:{label:"Categorical",type:"categorical"},weight:{label:"Weight",type:"numerical"},garbageType:{label:"Garbage Type",type:"categorical"},count:{label:"Count",type:"numerical"},section:{label:"Section",type:"categorical"}},ai=C.createContext(o=>{var e;return((e=tn[o])==null?void 0:e.label)??o});function Yn({children:o,accepts:e,onDrop:t}){const[i,n]=C.useState(!1),r=e==="any"?["phys-var/numerical","phys-var/categorical"]:[`phys-var/${e}`],s=c=>r.some(d=>c.includes(d)),a=e==="categorical"?"#5E5CE6":"#007AFF";return l.jsx("div",{onDragOver:c=>{s(c.dataTransfer.types)&&(c.preventDefault(),n(!0))},onDragLeave:()=>n(!1),onDrop:c=>{s(c.dataTransfer.types)&&(c.preventDefault(),n(!1),t(c.dataTransfer.getData("phys-var/name")))},style:{borderRadius:"8px",outline:i?`2px dashed ${a}`:"2px dashed transparent",outlineOffset:"2px",transition:"outline 0.1s"},children:o})}function Zn({variable:o,onClear:e}){var n;const t=C.useContext(ai),i=((n=tn[o])==null?void 0:n.type)??"numerical";return l.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",maxWidth:"100%",background:"#EBF3FF",border:"1px solid #A8CAFF",borderRadius:"7px",padding:"6px 10px",fontSize:"12px",color:"#007AFF",fontWeight:"500"},children:[l.jsxs("span",{style:{minWidth:0,wordBreak:"break-word"},children:[l.jsx("span",{style:{color:"#8FB6EE",fontWeight:"700"},children:i==="numerical"?"#":"Aa"})," ",t(o)]}),l.jsx("button",{onClick:e,style:{background:"none",border:"none",cursor:"pointer",color:"#60A0EE",padding:"0 0 0 2px",fontSize:"14px",lineHeight:1,fontFamily:"inherit"},children:"×"})]})}const fp={top:"↑",bottom:"↓",left:"←",right:"→"};function Ap({position:o,slot:e,onAdd:t,onRemove:i}){const[n,r]=C.useState(!1),s=C.useContext(ai),a=u=>u.dataTransfer.types.some(f=>f==="phys-var/numerical"||f==="phys-var/categorical"),c=u=>{a(u)&&(u.preventDefault(),r(!0))},d=()=>r(!1),A=u=>{a(u)&&(u.preventDefault(),r(!1),t(u.dataTransfer.getData("phys-var/name")))};return e.length>0?l.jsx("div",{onDragOver:c,onDragLeave:d,onDrop:A,title:`Drop another variable to add it to the ${o} label`,style:{display:"flex",flexDirection:"column",gap:"3px",borderRadius:"6px",outline:n?"1px dashed #007AFF":"none",outlineOffset:"2px"},children:e.map(u=>{const f=tn[u];return l.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"3px",maxWidth:"100%",background:"#EBF3FF",border:"1px solid #A8CAFF",borderRadius:"6px",padding:"2px 3px 2px 6px",fontSize:"10px",fontWeight:"600",color:"#007AFF"},children:[l.jsxs("span",{style:{minWidth:0,wordBreak:"break-word",lineHeight:1.25},children:[l.jsx("span",{style:{color:"#8FB6EE",fontWeight:"700"},children:f.type==="numerical"?"#":"Aa"})," ",s(u)]}),l.jsx("button",{onClick:()=>i(u),style:{background:"none",border:"none",cursor:"pointer",color:"#AEAEB2",flexShrink:0,padding:"0 2px",fontSize:"12px",lineHeight:1,fontFamily:"inherit"},children:"×"})]},u)})}):l.jsx("div",{onDragOver:c,onDragLeave:d,onDrop:A,title:`Drag a variable to the ${o} label`,style:{border:`1.5px dashed ${n?"#007AFF":"#D1D1D6"}`,borderRadius:"7px",padding:"4px 8px",fontSize:"10px",color:n?"#007AFF":"#AEAEB2",textAlign:"center",whiteSpace:"nowrap",background:n?"#EBF3FF":"transparent",transition:"all 0.1s",cursor:"default",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px"},children:l.jsx("span",{style:{opacity:.9},children:"＋ variable"})})}function el({config:o,onChange:e,styleControls:t}){function i(r,s){const a=o.slots[r];a.includes(s)||e({...o,slots:{...o.slots,[r]:[...a,s]}})}function n(r,s){e({...o,slots:{...o.slots,[r]:o.slots[r].filter(a=>a!==s)}})}return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:["top","bottom","left","right"].map(r=>l.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"8px"},children:[l.jsxs("span",{style:{fontSize:"11px",color:"#8E8E93",fontWeight:"600",width:"56px",flexShrink:0,paddingTop:"5px"},children:[fp[r]," ",r[0].toUpperCase()+r.slice(1)]}),l.jsx("div",{style:{flex:1,minWidth:0},children:l.jsx(Ap,{position:r,slot:o.slots[r],onAdd:s=>i(r,s),onRemove:s=>n(r,s)})})]},r))}),t&&l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",borderTop:"1px solid #E5E5EA",paddingTop:"10px"},children:[l.jsx(Be,{label:"Font size",value:o.fontSize??11,min:8,max:28,step:1,onChange:r=>e({...o,fontSize:r})}),l.jsx(Be,{label:"Distance",value:o.distance??0,min:-3,max:6,step:.5,decimals:1,onChange:r=>e({...o,distance:r})}),l.jsx(q,{label:"Style",children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[l.jsx("button",{title:"Bold",onClick:()=>e({...o,bold:!o.bold}),style:{padding:"4px 12px",borderRadius:"6px",cursor:"pointer",fontFamily:"inherit",fontWeight:"700",fontSize:"13px",transition:"all 0.12s",background:o.bold?"#EBF3FF":"#F2F2F7",border:`1px solid ${o.bold?"#A8CAFF":"#D1D1D6"}`,color:o.bold?"#007AFF":"#6C6C70"},children:"B"}),l.jsx("button",{title:"Italic",onClick:()=>e({...o,italic:!o.italic}),style:{padding:"4px 12px",borderRadius:"6px",cursor:"pointer",fontFamily:"inherit",fontStyle:"italic",fontSize:"13px",transition:"all 0.12s",background:o.italic?"#EBF3FF":"#F2F2F7",border:`1px solid ${o.italic?"#A8CAFF":"#D1D1D6"}`,color:o.italic?"#007AFF":"#6C6C70"},children:"I"}),l.jsx("input",{type:"color",title:"Font color",value:o.color??"#e8e8e8",onChange:r=>e({...o,color:r.target.value}),style:{width:"30px",height:"28px",padding:"2px",borderRadius:"6px",border:"1px solid #D1D1D6",background:"#F2F2F7",cursor:"pointer"}})]})})]})]})}function Ve({icon:o,title:e,open:t=!1,onToggle:i,children:n,empty:r=!1}){return l.jsxs("div",{style:{border:"1px solid #E5E5EA",borderRadius:"10px",overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},children:[l.jsxs("button",{onClick:i,style:{display:"flex",alignItems:"center",gap:"9px",padding:"9px 12px",width:"100%",textAlign:"left",background:"#F8F8FA",border:"none",borderBottom:t&&!r?"1px solid #E5E5EA":"none",cursor:"pointer",fontFamily:"inherit",transition:"background 0.1s"},children:[l.jsx("img",{src:o,alt:e,style:{width:"24px",height:"24px",borderRadius:"6px",flexShrink:0,objectFit:"cover"}}),l.jsx("span",{style:{flex:1,fontSize:"12px",fontWeight:"600",color:"#1D1D1F",lineHeight:1},children:e}),l.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",transition:"transform 0.15s",display:"inline-block",transform:t?"rotate(0deg)":"rotate(-90deg)"},children:"▾"})]}),t&&l.jsx("div",{style:{padding:"12px",background:"#FFFFFF",display:"flex",flexDirection:"column",gap:"12px"},children:r?l.jsx("div",{style:{fontSize:"11px",color:"#C7C7CC",textAlign:"center",padding:"8px 0",fontStyle:"italic"},children:"Coming soon"}):n})]})}function li(o,e){const[t,i]=C.useState(o);return C.useEffect(()=>{e!==void 0&&i(e)},[e]),{isOpen:n=>t===n,toggle:n=>i(r=>r===n?"":n)}}function pp({value:o,min:e,max:t,step:i,onCommit:n,style:r}){const[s,a]=C.useState(String(o)),[c,d]=C.useState(!1);C.useEffect(()=>{c||a(String(o))},[o,c]);const A=u=>(e!==void 0&&(u=Math.max(e,u)),t!==void 0&&(u=Math.min(t,u)),u);return l.jsx("input",{type:"number",value:s,min:e,max:t,step:i,onFocus:()=>d(!0),onChange:u=>{const f=u.target.value;if(a(f),f.trim()==="")return;const m=Number(f);Number.isFinite(m)&&n(A(m))},onBlur:()=>{d(!1);const u=Number(s);a(String(s.trim()!==""&&Number.isFinite(u)?A(u):o))},style:r})}function Ye({label:o,value:e,onChange:t,min:i,max:n,step:r=.1,lockable:s=!1,axisBindings:a,onAxisBind:c,axes:d}){const[A,u]=C.useState(!1),[f,m]=C.useState(null),y=C.useContext(ai),g=d??["x","y","z"];function x(p,b){if(A&&e[p]!==0){const F=b/e[p];t({x:p==="x"?b:parseFloat((e.x*F).toFixed(3)),y:p==="y"?b:parseFloat((e.y*F).toFixed(3)),z:p==="z"?b:parseFloat((e.z*F).toFixed(3))})}else t({...e,[p]:b})}const h=s?l.jsx("button",{onClick:p=>{p.stopPropagation(),u(!A)},title:A?"Unlock proportions":"Lock proportions (scale all axes together)",style:{background:A?"#007AFF":"transparent",border:`1px solid ${A?"#007AFF":"#D1D1D6"}`,borderRadius:"4px",padding:"1px 7px",lineHeight:"16px",cursor:"pointer",fontSize:"10px",color:A?"#fff":"#AEAEB2",fontFamily:"inherit",transition:"all 0.12s"},children:"⛓"}):void 0;return l.jsx(q,{label:o,right:h,children:l.jsx("div",{style:{display:"flex",gap:"5px"},children:g.map(p=>{const b=(a==null?void 0:a[p])??null,F=f===p;if(b!==null&&c){const B=tn[b];return l.jsx("div",{style:{flex:1},children:l.jsxs("div",{style:{display:"flex",alignItems:"stretch",border:`1px solid ${B.type==="numerical"?"#A8CAFF":"#C8A8FF"}`,borderRadius:"6px",overflow:"hidden",background:B.type==="numerical"?"#EBF3FF":"#F3EBFF"},children:[l.jsx("span",{style:{padding:"4px 5px",background:B.type==="numerical"?"#C5DFFF":"#DFC5FF",color:B.type==="numerical"?"#0055CC":"#5500CC",fontSize:"9px",fontWeight:"700",letterSpacing:"0.03em",display:"flex",alignItems:"center",flexShrink:0},children:p.toUpperCase()}),l.jsxs("span",{style:{flex:1,padding:"4px 4px",fontSize:"10px",color:B.type==="numerical"?"#007AFF":"#5E5CE6",fontWeight:"600",display:"flex",alignItems:"center",overflow:"hidden",whiteSpace:"nowrap"},children:[B.type==="numerical"?"#":"Aa"," ",y(b)]}),l.jsx("button",{onClick:()=>c(p,null),style:{background:"none",border:"none",cursor:"pointer",color:"#AEAEB2",padding:"0 4px",fontSize:"13px",lineHeight:1,fontFamily:"inherit"},children:"×"})]})},p)}return l.jsx("div",{style:{flex:1},onDragOver:B=>{a&&B.dataTransfer.types.includes("phys-var/numerical")&&(B.preventDefault(),m(p))},onDragLeave:()=>m(null),onDrop:B=>{!a||!B.dataTransfer.types.includes("phys-var/numerical")||(B.preventDefault(),m(null),c==null||c(p,B.dataTransfer.getData("phys-var/name")))},children:l.jsxs("div",{style:{display:"flex",alignItems:"stretch",border:`1px solid ${F?"#007AFF":"#D1D1D6"}`,borderRadius:"6px",overflow:"hidden",outline:F?"1px dashed #007AFF":"none",outlineOffset:"1px"},children:[l.jsx("span",{style:{padding:"4px 5px",background:"#E5E5EA",color:"#6C6C70",fontSize:"9px",fontWeight:"700",letterSpacing:"0.03em",display:"flex",alignItems:"center",flexShrink:0},children:p.toUpperCase()}),l.jsx(pp,{value:e[p],min:i,max:n,step:r,onCommit:B=>x(p,B),style:{flex:1,minWidth:0,background:"#F2F2F7",border:"none",padding:"4px 5px",fontSize:"11px",color:"#1D1D1F",outline:"none",fontFamily:"monospace",width:"100%"}})]})},p)})})})}const Is=["plastic","fluid","glass","metal","iridescent","emissive","toon","wireframe","custom"];function tl({material:o,opacity:e,roughness:t,metalness:i,onPatch:n}){return l.jsxs(l.Fragment,{children:[l.jsx(Be,{label:"Opacity",value:e??1,min:0,max:1,step:.05,decimals:2,onChange:r=>n({opacity:r})}),o==="custom"&&l.jsxs(l.Fragment,{children:[l.jsx(Be,{label:"Roughness",value:t??.5,min:0,max:1,step:.05,decimals:2,onChange:r=>n({roughness:r})}),l.jsx(Be,{label:"Metalness",value:i??0,min:0,max:1,step:.05,decimals:2,onChange:r=>n({metalness:r})})]})]})}const mp=[{value:"alignment",label:"Alignment"},{value:"scattering",label:"Scattering"},{value:"stacking",label:"Stacking"},{value:"surface",label:"Surface Placement"},{value:"adjacent",label:"Adjacent Placement"}],hp=[{value:"city",label:"City"},{value:"warehouse",label:"Warehouse"},{value:"sunset",label:"Sunset"},{value:"dawn",label:"Dawn"},{value:"forest",label:"Forest"},{value:"night",label:"Night"},{value:"studio",label:"Studio"},{value:"apartment",label:"Apartment"}];function ci({title:o}){return l.jsx("div",{style:{fontSize:"16px",color:"#1D1D1F",fontWeight:"700"},children:o})}function qn({config:o,onChange:e}){const t=C.useRef(null),i=C.useRef(null),n=C.useContext($a),r=o.shape==="custom"?o.customModelName:void 0,s=!!r&&(n.some(y=>y.name===r)||Oo.some(y=>y.name===r)),a=o.shape==="custom"&&!s,c=s&&r&&!n.some(y=>y.name===r)?Oo.find(y=>y.name===r):void 0,d=c?[c,...n]:n,A=o.shape!=="custom"?o.shape:s?`preset:${o.customModelName}`:o.customModelUrl?"__blob__":"box";function u(y){var h;const g=y.target.value;if(g==="__import__"){(h=t.current)==null||h.click();return}if(g==="__blob__")return;if(g.startsWith("preset:")){const p=g.slice(7),b=n.find(F=>F.name===p)??Oo.find(F=>F.name===p);b&&e({shape:"custom",customModelUrl:b.url,customModelHasMat:!0,customModelName:b.name,material:"original"});return}const x=o.material==="original"?"plastic":o.material;e({shape:g,customModelUrl:void 0,customModelHasMat:void 0,customModelName:void 0,material:x})}function f(y){var p;const g=(p=y.target.files)==null?void 0:p[0];if(!g)return;i.current&&URL.revokeObjectURL(i.current);const x=URL.createObjectURL(g);i.current=x;const h=g.name.replace(/\.(glb|gltf)$/i,"");e({shape:"custom",customModelUrl:x,customModelHasMat:!0,customModelName:h,material:"original"}),y.target.value=""}const m={width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"};return l.jsxs(l.Fragment,{children:[l.jsxs("select",{value:A,onChange:u,style:m,children:[d.length>0&&l.jsx("optgroup",{label:"3D Models",children:d.map(y=>l.jsx("option",{value:`preset:${y.name}`,children:y.name},y.name))}),l.jsxs("optgroup",{label:"Primitives",children:[l.jsx("option",{value:"box",children:"Box"}),l.jsx("option",{value:"sphere",children:"Sphere"}),l.jsx("option",{value:"star",children:"Star"})]}),l.jsxs("optgroup",{label:"Custom",children:[a&&l.jsxs("option",{value:"__blob__",children:["✎  ",o.customModelName??"Imported file"]}),l.jsx("option",{value:"__import__",children:"↑  Import .glb / .gltf…"})]})]}),l.jsx("input",{ref:t,type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:f})]})}function gp({config:o,activePartId:e,onAddPart:t,onRemovePart:i,onUpdatePart:n,onSelectPart:r}){const s=o.parts??[],a=s.find(d=>d.id===e)??null,c=d=>d.shape==="custom"?d.customModelName??"model":d.shape;return l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:s.map((d,A)=>{const u=d.id===e;return l.jsxs("div",{onClick:()=>r==null?void 0:r(u?null:d.id),style:{display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",background:u?"#EBF3FF":"#F2F2F7",border:`1px solid ${u?"#A8CAFF":"#E5E5EA"}`,borderRadius:"8px",padding:"7px 10px"},children:[l.jsxs("span",{style:{fontSize:"12.5px",fontWeight:"600",color:u?"#007AFF":"#1D1D1F"},children:["Part ",A+1," ",l.jsxs("span",{style:{color:"#8E8E93",fontWeight:"500",textTransform:"capitalize"},children:["· ",c(d)]})]}),l.jsx("button",{onClick:f=>{f.stopPropagation(),i==null||i(d.id)},title:"Remove part",style:{background:"none",border:"none",cursor:"pointer",color:"#AEAEB2",fontSize:"16px",lineHeight:1,padding:"0 2px",fontFamily:"inherit"},children:"×"})]},d.id)})}),l.jsx("button",{onClick:t,style:{width:"100%",padding:"8px",background:"#F2F2F7",border:"1px dashed #C7C7CC",borderRadius:"8px",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:"#3A3A3C",fontFamily:"inherit"},onMouseEnter:d=>d.currentTarget.style.background="#E9E9EE",onMouseLeave:d=>d.currentTarget.style.background="#F2F2F7",children:"+ Add geometry"}),a&&l.jsxs("div",{style:{marginTop:"6px",paddingTop:"10px",borderTop:"1px solid #E5E5EA",display:"flex",flexDirection:"column",gap:"10px"},children:[l.jsx(q,{label:"Shape",children:l.jsx(qn,{config:{shape:a.shape,material:a.material??o.material,customModelUrl:a.customModelUrl,customModelHasMat:a.customModelHasMat,customModelName:a.customModelName},onChange:d=>n==null?void 0:n(a.id,{shape:d.shape??a.shape,customModelUrl:d.customModelUrl,customModelHasMat:d.customModelHasMat,customModelName:d.customModelName,...d.material?{material:d.material}:{}})})}),l.jsx(q,{label:"Material",children:l.jsx("select",{value:a.material??o.material,onChange:d=>n==null?void 0:n(a.id,{material:d.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:Is.map(d=>l.jsx("option",{value:d,children:d.charAt(0).toUpperCase()+d.slice(1)},d))})}),l.jsx(q,{label:"Color",children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"2px"},children:[l.jsx("input",{type:"color",value:a.color??o.color,onChange:d=>n==null?void 0:n(a.id,{color:d.target.value}),style:{width:"36px",height:"32px",border:"1px solid #D1D1D6",borderRadius:"6px",background:"none",cursor:"pointer",padding:"2px"}}),l.jsx("span",{style:{fontSize:"12px",color:"#8E8E93",fontFamily:"monospace"},children:a.color??o.color})]})}),l.jsx(Ye,{label:"Offset",value:a.offset,onChange:d=>n==null?void 0:n(a.id,{offset:d}),min:-1,max:1,step:.01}),l.jsx(Ye,{label:"Size",value:a.size,onChange:d=>n==null?void 0:n(a.id,{size:d}),min:.05,max:3,step:.05,lockable:!0}),l.jsx(Ye,{label:"Rotation",value:a.orientation,onChange:d=>n==null?void 0:n(a.id,{orientation:d}),min:-180,max:180,step:1})]})]})}function xp({config:o,onChange:e,bindings:t,onBind:i,labelConfig:n,onLabelChange:r,colorMode:s,colorGradient:a,onColorGradientChange:c,colorTint:d,onColorTintChange:A,openSection:u,layers:f,compositionLevel:m,activePartId:y,onAddPart:g,onRemovePart:x,onUpdatePart:h,onSelectPart:p}){const b=!!o.parts&&o.parts.length>0,F=o.shape==="custom"&&o.customModelHasMat?["original","plastic","fluid","glass","metal","iridescent","emissive","toon","wireframe"]:Is,B=li("Spatial",u);return l.jsxs(l.Fragment,{children:[l.jsx(ci,{title:"Mark"}),l.jsxs(Ve,{icon:We.spatial,title:"Spatial",open:B.isOpen("Spatial"),onToggle:()=>B.toggle("Spatial"),children:[l.jsx(Ye,{label:"Position",value:o.position,onChange:v=>e({...o,position:v}),min:-10,max:10,step:.1}),l.jsx(q,{label:"Scale",children:t.markScale!==null?l.jsx(Zn,{variable:t.markScale,onClear:()=>i("markScale",null)}):l.jsx(Yn,{accepts:"numerical",onDrop:v=>i("markScale",v),children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx("input",{type:"range",min:.1,max:10,step:.1,value:o.scale??1,onChange:v=>e({...o,scale:Number(v.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),l.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:[(o.scale??1).toFixed(1),"×"]})]})})}),l.jsx(Ye,{label:"Size",value:o.size,onChange:v=>e({...o,size:v}),min:.1,max:10,step:.1,lockable:!0,axisBindings:{x:t.markSizeX,y:t.markSizeY,z:t.markSizeZ},onAxisBind:(v,R)=>i(v==="x"?"markSizeX":v==="y"?"markSizeY":"markSizeZ",R)}),l.jsx(Ye,{label:"Orientation",value:o.orientation,onChange:v=>e({...o,orientation:v}),min:-180,max:180,step:1})]}),l.jsx(Ve,{icon:We.shape,title:"Geometry",open:B.isOpen("Geometry"),onToggle:()=>B.toggle("Geometry"),children:b?l.jsx(gp,{config:o,activePartId:y,onAddPart:g,onRemovePart:x,onUpdatePart:h,onSelectPart:p}):t.markGeometry!==null&&f.length>1?f.map(v=>{var S;const R=(S=o.categoryShapes)==null?void 0:S[v.name],K={shape:(R==null?void 0:R.shape)??o.shape,material:o.material,customModelUrl:R==null?void 0:R.customModelUrl,customModelHasMat:R==null?void 0:R.customModelHasMat,customModelName:R==null?void 0:R.customModelName};return l.jsx(q,{label:v.name,children:l.jsx(qn,{config:K,onChange:w=>e({...o,categoryShapes:{...o.categoryShapes??{},[v.name]:{shape:w.shape??(R==null?void 0:R.shape)??o.shape,customModelUrl:w.customModelUrl,customModelHasMat:w.customModelHasMat,customModelName:w.customModelName}}})})},v.id)}):l.jsxs(l.Fragment,{children:[l.jsx(q,{label:"Shape",children:l.jsx(qn,{config:o,onChange:v=>e({...o,...v})})}),g&&t.markGeometry===null&&l.jsx("button",{onClick:g,title:"Add another geometry to this mark (e.g. a sphere on a leaf)",style:{width:"100%",padding:"8px",background:"#F2F2F7",border:"1px dashed #C7C7CC",borderRadius:"8px",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:"#3A3A3C",fontFamily:"inherit"},onMouseEnter:v=>v.currentTarget.style.background="#E9E9EE",onMouseLeave:v=>v.currentTarget.style.background="#F2F2F7",children:"+ Add geometry"})]})}),l.jsxs(Ve,{icon:We.material,title:"Material",open:B.isOpen("Material"),onToggle:()=>B.toggle("Material"),children:[l.jsx(q,{label:"Type",children:l.jsx("select",{value:o.material,onChange:v=>e({...o,material:v.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:F.map(v=>l.jsx("option",{value:v,children:v.charAt(0).toUpperCase()+v.slice(1)},v))})}),l.jsx(q,{label:"Color",children:t.markColor!==null?l.jsxs(l.Fragment,{children:[l.jsx(Zn,{variable:t.markColor,onClear:()=>i("markColor",null)}),s==="continuous"&&a&&c&&l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginTop:"8px"},children:[l.jsx("input",{type:"color",value:a.from,onChange:v=>c({...a,from:v.target.value}),style:{width:"32px",height:"28px",border:"1px solid #D1D1D6",borderRadius:"5px",background:"none",cursor:"pointer",padding:"1px"}}),l.jsx("span",{style:{fontSize:"12px",color:"#AEAEB2",fontWeight:"500"},children:"→"}),l.jsx("input",{type:"color",value:a.to,onChange:v=>c({...a,to:v.target.value}),style:{width:"32px",height:"28px",border:"1px solid #D1D1D6",borderRadius:"5px",background:"none",cursor:"pointer",padding:"1px"}}),l.jsx("span",{style:{fontSize:"11px",color:"#8E8E93"},children:"Gradient"})]}),o.shape==="custom"&&A&&l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"8px",fontSize:"12px",color:"#1D1D1F",cursor:"pointer"},children:[l.jsx("input",{type:"checkbox",checked:d??!1,onChange:v=>A(v.target.checked),style:{accentColor:"#5E5CE6",width:"14px",height:"14px",cursor:"pointer"}}),l.jsx("span",{children:"Tint model (keep its material)"})]})]}):l.jsx(Yn,{accepts:"categorical",onDrop:()=>i("markColor","garbageType"),children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"2px"},children:[l.jsx("input",{type:"color",value:o.color,onChange:v=>e({...o,color:v.target.value}),style:{width:"36px",height:"32px",border:"1px solid #D1D1D6",borderRadius:"6px",background:"none",cursor:"pointer",padding:"2px"}}),l.jsx("span",{style:{fontSize:"12px",color:"#8E8E93",fontFamily:"monospace"},children:o.color})]})})}),l.jsx(tl,{material:o.material,opacity:o.opacity,roughness:o.roughness,metalness:o.metalness,onPatch:v=>e({...o,...v})})]}),l.jsx(Ve,{icon:We.labels,title:"Labels",open:B.isOpen("Labels"),onToggle:()=>B.toggle("Labels"),children:l.jsx(el,{config:n,onChange:r,styleControls:!0})})]})}function br({config:o,onChange:e,collectionLevel:t,bindings:i,onBind:n,labelConfig:r,onLabelChange:s,onReseed:a,compositionLevel:c}){const d=t===2,A=li("Groups & Populations");return l.jsxs(l.Fragment,{children:[l.jsx(ci,{title:"Collection"}),l.jsxs(Ve,{icon:We.populations,title:"Groups & Populations",open:A.isOpen("Groups & Populations"),onToggle:()=>A.toggle("Groups & Populations"),children:[l.jsx(q,{label:"Arrangement",children:l.jsx("select",{value:o.arrangement,onChange:u=>e({...o,arrangement:u.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:mp.map(u=>l.jsx("option",{value:u.value,children:u.label},u.value))})}),o.arrangement==="alignment"&&l.jsxs(l.Fragment,{children:[l.jsx(q,{label:"Elements",children:(()=>{const u=t===1?"c1AlignCount":"c2AlignCount",f=i[u],m=t===1?Object.values(i).some(y=>y!==null):i.scatterSize!==null;return f!==null?l.jsx(Zn,{variable:f,onClear:()=>n(u,null)}):m?l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",background:"#F2F2F7",border:"1px solid #E5E5EA",borderRadius:"7px",padding:"5px 10px"},children:[l.jsx("span",{style:{fontSize:"12px",color:"#1D1D1F",fontWeight:"600",flex:1},children:o.alignCount}),l.jsx("span",{style:{fontSize:"9px",color:"#AEAEB2",letterSpacing:"0.06em",fontWeight:"600"},children:"DATA"})]}):l.jsx(Yn,{accepts:"numerical",onDrop:()=>n(u,"count"),children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx("input",{type:"range",min:2,max:20,step:1,value:o.alignCount,onChange:y=>e({...o,alignCount:Number(y.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),l.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:o.alignCount})]})})})()}),l.jsx(q,{label:"Axis",children:l.jsx(Qo,{options:[{value:"X",label:"X axis"},{value:"Y",label:"Y axis"}],value:o.alignAxis,onChange:u=>e({...o,alignAxis:u})})}),l.jsx(q,{label:"Anchor",children:l.jsx(Qo,{options:o.alignAxis==="X"?[{value:"start",label:"Top"},{value:"center",label:"Center"},{value:"end",label:"Bottom"}]:[{value:"start",label:"Left"},{value:"center",label:"Center"},{value:"end",label:"Right"}],value:o.alignAnchor,onChange:u=>e({...o,alignAnchor:u})})}),l.jsxs(q,{label:"Spacing",children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx("input",{type:"range",min:0,max:d?12:6,step:.1,value:o.alignSpacing,onChange:u=>e({...o,alignSpacing:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),l.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:o.alignSpacing.toFixed(1)})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#C7C7CC"},children:[l.jsx("span",{children:"Tight"}),l.jsx("span",{children:"Spread"})]})]})]}),o.arrangement==="scattering"&&l.jsxs(l.Fragment,{children:[l.jsx(q,{label:"Quantity",children:l.jsx("div",{style:{display:"flex",gap:"4px"},children:["count","density"].map(u=>l.jsx("button",{onClick:()=>e({...o,scatterMode:u}),style:{flex:1,padding:"5px 0",background:(o.scatterMode??"count")===u?"#5E5CE6":"#F2F2F7",color:(o.scatterMode??"count")===u?"#fff":"#6C6C70",border:"1px solid",borderColor:(o.scatterMode??"count")===u?"#5E5CE6":"#E5E5EA",borderRadius:"6px",cursor:"pointer",fontSize:"11px",fontWeight:"600",fontFamily:"inherit"},children:u==="count"?"Population":"Density"},u))})}),(o.scatterMode??"count")==="count"?l.jsx(q,{label:"Population",children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx("input",{type:"range",min:5,max:600,step:5,value:o.scatterCount,onChange:u=>e({...o,scatterCount:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),l.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:o.scatterCount})]})}):l.jsx(q,{label:"Density",children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx("input",{type:"range",min:.05,max:5,step:.05,value:o.scatterDensity,onChange:u=>e({...o,scatterDensity:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),l.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"36px",textAlign:"right"},children:[o.scatterDensity.toFixed(2),"/u³"]})]})}),l.jsx(q,{label:"Volume",children:l.jsx("div",{style:{display:"flex",width:"100%"},children:["box","sphere"].map((u,f)=>l.jsx("button",{onClick:()=>e({...o,scatterBoundingVolume:u}),style:{flex:1,padding:"5px 0",background:(o.scatterBoundingVolume??"box")===u?"#5E5CE6":"#F2F2F7",color:(o.scatterBoundingVolume??"box")===u?"#fff":"#6C6C70",border:"1px solid",borderColor:(o.scatterBoundingVolume??"box")===u?"#5E5CE6":"#E5E5EA",borderRadius:f===0?"6px 0 0 6px":"0 6px 6px 0",cursor:"pointer",fontFamily:"inherit",fontSize:"11px",fontWeight:"600"},children:u==="box"?"Box":"Sphere"},u))})}),i.scatterSize!==null?l.jsxs(l.Fragment,{children:[l.jsx(q,{label:"Dimensions",children:l.jsx(Zn,{variable:i.scatterSize,onClear:()=>n("scatterSize",null)})}),l.jsx(q,{label:"Size axes",children:l.jsx("div",{style:{display:"flex",gap:"4px"},children:["x","y","z"].map(u=>{const f=o.scatterSizeAxes??{x:!1,y:!0,z:!1},m=f[u];return l.jsx("button",{onClick:()=>e({...o,scatterSizeAxes:{...f,[u]:!m}}),style:{flex:1,padding:"6px 0",borderRadius:"7px",border:`1px solid ${m?"#A8CAFF":"#E5E5EA"}`,background:m?"#EBF3FF":"#F2F2F7",color:m?"#007AFF":"#6C6C70",fontWeight:m?"700":"500",fontSize:"12px",cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"},children:u},u)})})})]}):l.jsx(Yn,{accepts:"numerical",onDrop:()=>n("scatterSize","numerical"),children:l.jsx(Ye,{label:"Dimensions",value:o.scatterDimensions,onChange:u=>e({...o,scatterDimensions:u}),min:.5,max:20,step:.5})}),l.jsx(q,{label:"Orientation",children:l.jsx("div",{style:{display:"flex",width:"100%"},children:["random","static"].map((u,f)=>l.jsx("button",{onClick:()=>e({...o,scatterOrientation:u}),style:{flex:1,padding:"5px 0",background:(o.scatterOrientation??"random")===u?"#5E5CE6":"#F2F2F7",color:(o.scatterOrientation??"random")===u?"#fff":"#6C6C70",border:"1px solid",borderColor:(o.scatterOrientation??"random")===u?"#5E5CE6":"#E5E5EA",borderRadius:f===0?"6px 0 0 6px":"0 6px 6px 0",cursor:"pointer",fontFamily:"inherit",fontSize:"11px",fontWeight:"600"},children:u==="random"?"Random":"Static"},u))})}),l.jsx(q,{label:"Show Bounds",children:l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"7px",cursor:"pointer"},children:[l.jsx("input",{type:"checkbox",checked:o.scatterShowBounds??!0,onChange:u=>e({...o,scatterShowBounds:u.target.checked}),style:{accentColor:"#5E5CE6",width:"14px",height:"14px",cursor:"pointer"}}),l.jsx("span",{style:{fontSize:"11px",color:"#6C6C70"},children:"Visible"})]})}),o.object&&l.jsx(q,{label:"Exclusion Zone",children:l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"7px",cursor:"pointer"},children:[l.jsx("input",{type:"checkbox",checked:o.scatterExcludeObject??!1,onChange:u=>e({...o,scatterExcludeObject:u.target.checked}),style:{accentColor:"#5E5CE6",width:"14px",height:"14px",cursor:"pointer"}}),l.jsx("span",{style:{fontSize:"11px",color:"#6C6C70"},children:"Keep marks out of the object"})]})}),a&&l.jsx(q,{label:"Placement",children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"6px",cursor:"pointer",flex:1},children:[l.jsx("input",{type:"checkbox",checked:o.scatterEven??!1,onChange:u=>e({...o,scatterEven:u.target.checked}),style:{accentColor:"#5E5CE6",width:"14px",height:"14px",cursor:"pointer"}}),l.jsx("span",{style:{fontSize:"11px",color:"#6C6C70"},children:"Even spread"})]}),l.jsx("button",{onClick:a,style:{padding:"6px 12px",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:"#1D1D1F",fontFamily:"inherit",flexShrink:0},onMouseEnter:u=>u.currentTarget.style.background="#E5E5EA",onMouseLeave:u=>u.currentTarget.style.background="#F2F2F7",children:"Randomise"})]})})]}),o.arrangement==="piling"&&l.jsx(q,{label:"Population",children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx("input",{type:"range",min:2,max:60,step:1,value:o.pilingCount,onChange:u=>e({...o,pilingCount:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),l.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:o.pilingCount})]})}),o.arrangement==="surface"&&l.jsxs(l.Fragment,{children:[l.jsx(q,{label:"Surface",children:l.jsx("span",{style:{fontSize:"11px",color:"#AEAEB2",lineHeight:1.4},children:o.object?"Marks are placed on the collection object (below).":"Add an object below to use as the surface."})}),l.jsx(q,{label:"Population",children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx("input",{type:"range",min:1,max:200,step:1,value:o.surfaceCount??24,onChange:u=>e({...o,surfaceCount:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),l.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:o.surfaceCount??24})]})}),l.jsx(q,{label:"Mark Size",children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx("input",{type:"range",min:.1,max:4,step:.1,value:o.surfaceScale??1,onChange:u=>e({...o,surfaceScale:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),l.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:[(o.surfaceScale??1).toFixed(1),"×"]})]})}),a&&l.jsx(q,{label:"Placement",children:l.jsx("button",{onClick:a,style:{padding:"6px 12px",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:"#1D1D1F",fontFamily:"inherit"},onMouseEnter:u=>u.currentTarget.style.background="#E5E5EA",onMouseLeave:u=>u.currentTarget.style.background="#F2F2F7",children:"Randomise"})})]}),o.arrangement==="adjacent"&&l.jsxs(l.Fragment,{children:[l.jsx(Be,{label:"Population",value:o.scatterCount,min:1,max:200,step:1,onChange:u=>e({...o,scatterCount:u})}),l.jsx(Ye,{label:"Surface size",value:o.scatterDimensions,onChange:u=>e({...o,scatterDimensions:u}),min:.1,max:30,step:.1,axes:["x","z"]}),l.jsx(Wo,{label:"Show grid",checked:o.adjacentShowGrid??!1,onChange:u=>e({...o,adjacentShowGrid:u})}),a&&l.jsx(q,{label:"Placement",children:l.jsx("button",{onClick:a,style:{padding:"6px 12px",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:"#1D1D1F",fontFamily:"inherit"},onMouseEnter:u=>u.currentTarget.style.background="#E5E5EA",onMouseLeave:u=>u.currentTarget.style.background="#F2F2F7",children:"Randomise"})})]}),o.arrangement==="stacking"&&l.jsxs(l.Fragment,{children:[c>=3&&l.jsx(Be,{label:"Population",value:o.scatterCount,min:1,max:100,step:1,onChange:u=>e({...o,scatterCount:u})}),l.jsx(Wo,{label:"Random orientation",checked:o.stackingRandomOrient??!1,onChange:u=>e({...o,stackingRandomOrient:u})})]})]}),o.object?l.jsxs(l.Fragment,{children:[l.jsx(ol,{config:o.object,onChange:u=>e({...o,object:u}),acc:A}),l.jsx("button",{onClick:()=>e({...o,object:null,scatterExcludeObject:!1}),style:{width:"100%",padding:"9px",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"9px",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:"#3A3A3C",fontFamily:"inherit"},onMouseEnter:u=>u.currentTarget.style.background="#E9E9EE",onMouseLeave:u=>u.currentTarget.style.background="#F2F2F7",children:"Remove object"})]}):l.jsx("button",{onClick:()=>e({...o,object:bp(`col${t}-object`)}),style:{width:"100%",padding:"9px",background:"#F2F2F7",border:"1px dashed #C7C7CC",borderRadius:"9px",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:"#3A3A3C",fontFamily:"inherit"},onMouseEnter:u=>u.currentTarget.style.background="#E9E9EE",onMouseLeave:u=>u.currentTarget.style.background="#F2F2F7",children:"+ Add object"}),t===1&&c>=3&&r&&s&&l.jsx(Ve,{icon:We.labels,title:"Labels",open:A.isOpen("Labels"),onToggle:()=>A.toggle("Labels"),children:l.jsx(el,{config:r,onChange:s,styleControls:!0})})]})}function ol({config:o,onChange:e,acc:t}){const i=o.shape==="custom"&&o.customModelHasMat?["original","plastic","fluid","glass","metal","iridescent","emissive","toon","wireframe"]:Is;return l.jsxs(l.Fragment,{children:[l.jsxs(Ve,{icon:We.spatial,title:"Spatial",open:t.isOpen("Spatial"),onToggle:()=>t.toggle("Spatial"),children:[l.jsx(Ye,{label:"Position",value:o.position,onChange:n=>e({...o,position:n}),min:-20,max:20,step:.1}),l.jsx(Ye,{label:"Size",value:o.size,onChange:n=>e({...o,size:n}),min:.1,max:10,step:.1,lockable:!0}),l.jsx(Ye,{label:"Orientation",value:o.orientation,onChange:n=>e({...o,orientation:n}),min:-180,max:180,step:1})]}),l.jsx(Ve,{icon:We.shape,title:"Geometry",open:t.isOpen("Geometry"),onToggle:()=>t.toggle("Geometry"),children:l.jsx(q,{label:"Shape",children:l.jsx(qn,{config:o,onChange:n=>e({...o,...n})})})}),l.jsxs(Ve,{icon:We.material,title:"Material",open:t.isOpen("Material"),onToggle:()=>t.toggle("Material"),children:[l.jsx(q,{label:"Type",children:l.jsx("select",{value:o.material,onChange:n=>e({...o,material:n.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:i.map(n=>l.jsx("option",{value:n,children:n.charAt(0).toUpperCase()+n.slice(1)},n))})}),l.jsx(q,{label:"Color",children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"2px"},children:[l.jsx("input",{type:"color",value:o.color,onChange:n=>e({...o,color:n.target.value}),style:{width:"36px",height:"32px",border:"1px solid #D1D1D6",borderRadius:"6px",background:"none",cursor:"pointer",padding:"2px"}}),l.jsx("span",{style:{fontSize:"12px",color:"#8E8E93",fontFamily:"monospace"},children:o.color})]})}),l.jsx(tl,{material:o.material,opacity:o.opacity,roughness:o.roughness,metalness:o.metalness,onPatch:n=>e({...o,...n})})]})]})}function yp({config:o,onChange:e}){const t=li("Spatial");return l.jsxs(l.Fragment,{children:[l.jsx(ci,{title:"Decoration"}),l.jsx(ol,{config:o,onChange:e,acc:t})]})}function bp(o){return{id:o,name:"Object",shape:"box",material:"plastic",color:"#9AA0A6",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}}}function Be({label:o,value:e,min:t,max:i,step:n,decimals:r=0,suffix:s="",onChange:a}){return l.jsx(q,{label:o,children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx("input",{type:"range",min:t,max:i,step:n,value:e,onChange:c=>a(Number(c.target.value)),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),l.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"38px",textAlign:"right"},children:[e.toFixed(r),s]})]})})}function ln({label:o,value:e,onChange:t}){return l.jsx(q,{label:o,children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[l.jsx("input",{type:"color",value:e,onChange:i=>t(i.target.value),style:{width:"36px",height:"30px",border:"1px solid #D1D1D6",borderRadius:"6px",background:"none",cursor:"pointer",padding:"2px"}}),l.jsx("span",{style:{fontSize:"12px",color:"#8E8E93",fontFamily:"monospace"},children:e})]})})}function Wo({label:o,checked:e,onChange:t}){return l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"12px",color:"#1D1D1F",cursor:"pointer",padding:"2px 0"},children:[l.jsx("input",{type:"checkbox",checked:e,onChange:i=>t(i.target.checked),style:{accentColor:"#5E5CE6",width:"14px",height:"14px",cursor:"pointer"}}),l.jsx("span",{children:o})]})}function Cp({config:o,onChange:e}){const t=li("Framing"),i=o.sceneTitleShow??!1,n=o.sceneTitleOffset??2.5,r=o.sceneTitleBelow??!1;return l.jsxs(l.Fragment,{children:[l.jsx(ci,{title:"Scene"}),l.jsxs(Ve,{icon:We.framing,title:"Framing",open:t.isOpen("Framing"),onToggle:()=>t.toggle("Framing"),children:[l.jsx(q,{label:"Background",children:l.jsxs("select",{value:o.background,onChange:s=>e({...o,background:s.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:[l.jsx("option",{value:"dark",children:"Dark"}),l.jsx("option",{value:"color",children:"Solid colour"}),l.jsx("option",{value:"gradient",children:"Gradient"}),l.jsx("option",{value:"hdri",children:"HDRI"}),l.jsx("option",{value:"sky",children:"Sky"}),l.jsx("option",{value:"ocean",children:"Ocean"})]})}),o.background==="color"&&l.jsx(ln,{label:"Colour",value:o.bgColor??"#202024",onChange:s=>e({...o,bgColor:s})}),o.background==="gradient"&&l.jsxs(l.Fragment,{children:[l.jsx(ln,{label:"Top",value:o.bgGradientTop??"#3a5f8a",onChange:s=>e({...o,bgGradientTop:s})}),l.jsx(ln,{label:"Bottom",value:o.bgGradientBottom??"#0a0a12",onChange:s=>e({...o,bgGradientBottom:s})})]}),o.background==="hdri"&&l.jsxs(l.Fragment,{children:[l.jsx(Be,{label:"Blur",value:o.hdriBlur??0,min:0,max:1,step:.02,decimals:2,onChange:s=>e({...o,hdriBlur:s})}),l.jsx(Be,{label:"Brightness",value:o.hdriIntensity??1,min:0,max:2,step:.05,decimals:2,onChange:s=>e({...o,hdriIntensity:s})})]}),o.background==="sky"&&l.jsxs(l.Fragment,{children:[l.jsx(Be,{label:"Sun elevation",value:o.skyElevation??20,min:-5,max:90,step:1,suffix:"°",onChange:s=>e({...o,skyElevation:s})}),l.jsx(Be,{label:"Sun azimuth",value:o.skyAzimuth??140,min:0,max:360,step:1,suffix:"°",onChange:s=>e({...o,skyAzimuth:s})})]}),l.jsx(q,{label:"Lighting (HDRI)",children:l.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px"},children:hp.map(s=>{const a=o.hdriPreset===s.value;return l.jsx("button",{onClick:()=>e({...o,hdriPreset:s.value}),style:{padding:"5px 6px",background:a?"#EBF3FF":"#F2F2F7",border:`1px solid ${a?"#A8CAFF":"#E5E5EA"}`,borderRadius:"7px",color:a?"#007AFF":"#6C6C70",cursor:"pointer",fontSize:"11px",fontFamily:"inherit",fontWeight:a?"600":"400",transition:"all 0.1s",textAlign:"center"},children:s.label},s.value)})})}),l.jsx(Be,{label:"Exposure",value:o.exposure??(o.background==="ocean"?.95:o.background==="dark"?1.35:1.2),min:.2,max:3,step:.05,decimals:2,onChange:s=>e({...o,exposure:s})}),l.jsx(Be,{label:"Env. rotation",value:o.envRotation??0,min:0,max:360,step:1,suffix:"°",onChange:s=>e({...o,envRotation:s})}),l.jsx(q,{label:"Atmosphere",children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[l.jsx(Wo,{label:"Stars",checked:o.stars??!1,onChange:s=>e({...o,stars:s})}),l.jsx(Wo,{label:"Grid",checked:o.grid??!1,onChange:s=>e({...o,grid:s})}),l.jsx(Wo,{label:"Fog",checked:o.fog??!1,onChange:s=>e({...o,fog:s})})]})}),o.fog&&l.jsxs(l.Fragment,{children:[l.jsx(ln,{label:"Fog colour",value:o.fogColor??"#8090a0",onChange:s=>e({...o,fogColor:s})}),l.jsx(Be,{label:"Fog near",value:o.fogNear??20,min:0,max:100,step:1,onChange:s=>e({...o,fogNear:s})}),l.jsx(Be,{label:"Fog far",value:o.fogFar??150,min:10,max:400,step:5,onChange:s=>e({...o,fogFar:s})})]}),l.jsxs(q,{label:"Camera",children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"2px"},children:[l.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",fontWeight:"500"},children:[o.focalLength,"mm"]}),l.jsxs("span",{style:{fontSize:"11px",color:"#AEAEB2"},children:[up(o.focalLength).toFixed(0),"° fov"]})]}),l.jsx("input",{type:"range",min:14,max:180,step:1,value:o.focalLength,onChange:s=>e({...o,focalLength:Number(s.target.value)}),style:{width:"100%",accentColor:"#34C759",cursor:"pointer"}}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#AEAEB2",marginTop:"2px"},children:[l.jsx("span",{children:"14mm wide"}),l.jsx("span",{children:"180mm tele"})]})]})]}),l.jsxs(Ve,{icon:We.labels,title:"Label",open:t.isOpen("Label"),onToggle:()=>t.toggle("Label"),children:[l.jsx(q,{label:"Show title",children:l.jsx(Qo,{options:[{value:"on",label:"On"},{value:"off",label:"Off"}],value:i?"on":"off",onChange:s=>e({...o,sceneTitleShow:s==="on"})})}),i&&l.jsxs(l.Fragment,{children:[l.jsx(q,{label:"Side",children:l.jsx(Qo,{options:[{value:"above",label:"↑ Above"},{value:"below",label:"↓ Below"}],value:r?"below":"above",onChange:s=>e({...o,sceneTitleBelow:s==="below"})})}),l.jsx(q,{label:"Distance",children:l.jsx("input",{type:"number",min:0,max:15,step:.1,value:n,onChange:s=>e({...o,sceneTitleOffset:Math.max(0,Number(s.target.value)||0)}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"6px",padding:"6px 8px",fontSize:"12px",color:"#1D1D1F",fontFamily:"inherit",outline:"none",boxSizing:"border-box"}})})]}),l.jsxs(q,{label:"Hide behind objects",children:[l.jsx(Qo,{options:[{value:"off",label:"Off"},{value:"full",label:"Full"},{value:"optimized",label:"Optimized"}],value:o.sceneLabelOcclude??"optimized",onChange:s=>e({...o,sceneLabelOcclude:s})}),l.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",marginTop:"4px",display:"block"},children:"Optimized checks only decorations."})]})]})]})}function Fp({activeElement:o,compositionLevel:e,layers:t,markConfig:i,onMarkChange:n,collection1Config:r,onCollection1Change:s,collection2Config:a,onCollection2Change:c,sceneConfig:d,onSceneChange:A,bindings:u,onBind:f,markLabelConfig:m,onMarkLabelChange:y,colLabelConfig:g,onColLabelChange:x,activeDecorationId:h,decorations:p,onDecorationChange:b,colorMode:F,colorGradient:B,onColorGradientChange:v,colorTint:R,onColorTintChange:K,markOpenSection:S,onReseed:w,models:D,varLabels:M,activePartId:j,onAddPart:I,onRemovePart:H,onUpdatePart:z,onSelectPart:k}){const T=h!==null?p.find(P=>P.id===h)??null:null,E=P=>{var G;return P==="numerical"?(M==null?void 0:M.numerical)??"Numerical":P==="categorical"?(M==null?void 0:M.categorical)??"Categorical":((G=tn[P])==null?void 0:G.label)??P};return l.jsx(ai.Provider,{value:E,children:l.jsx($a.Provider,{value:D??Oo,children:l.jsx("div",{style:{padding:"18px 14px",color:"#1D1D1F",fontSize:"13px",display:"flex",flexDirection:"column",gap:"10px",boxSizing:"border-box"},children:T!==null?l.jsx(yp,{config:T,onChange:b}):o==="mark"?l.jsx(xp,{config:i,onChange:n,bindings:u,onBind:f,labelConfig:m,onLabelChange:y,colorMode:F,colorGradient:B,onColorGradientChange:v,colorTint:R,onColorTintChange:K,openSection:S,layers:t,compositionLevel:e,activePartId:j,onAddPart:I,onRemovePart:H,onUpdatePart:z,onSelectPart:k}):o==="collection1"?l.jsx(br,{config:r,onChange:s,collectionLevel:1,bindings:u,onBind:f,labelConfig:g,onLabelChange:x,onReseed:w,compositionLevel:e}):o==="collection2"?l.jsx(br,{config:a,onChange:c,collectionLevel:2,bindings:u,onBind:f,onReseed:w,compositionLevel:e}):o==="scene"?l.jsx(Cp,{config:d,onChange:A}):null})})})}const nl=oi>=125?"uv1":"uv2";var Bp=Object.defineProperty,vp=(o,e,t)=>e in o?Bp(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,Cr=(o,e,t)=>(vp(o,typeof e!="symbol"?e+"":e,t),t);const Rp=(()=>{const o={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new U},up:{value:new U(0,1,0)}},vertexShader:`
      uniform vec3 sunPosition;
      uniform float rayleigh;
      uniform float turbidity;
      uniform float mieCoefficient;
      uniform vec3 up;

      varying vec3 vWorldPosition;
      varying vec3 vSunDirection;
      varying float vSunfade;
      varying vec3 vBetaR;
      varying vec3 vBetaM;
      varying float vSunE;

      // constants for atmospheric scattering
      const float e = 2.71828182845904523536028747135266249775724709369995957;
      const float pi = 3.141592653589793238462643383279502884197169;

      // wavelength of used primaries, according to preetham
      const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
      // this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
      // (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
      const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

      // mie stuff
      // K coefficient for the primaries
      const float v = 4.0;
      const vec3 K = vec3( 0.686, 0.678, 0.666 );
      // MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
      const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

      // earth shadow hack
      // cutoffAngle = pi / 1.95;
      const float cutoffAngle = 1.6110731556870734;
      const float steepness = 1.5;
      const float EE = 1000.0;

      float sunIntensity( float zenithAngleCos ) {
        zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
        return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
      }

      vec3 totalMie( float T ) {
        float c = ( 0.2 * T ) * 10E-18;
        return 0.434 * c * MieConst;
      }

      void main() {

        vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
        vWorldPosition = worldPosition.xyz;

        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        gl_Position.z = gl_Position.w; // set z to camera.far

        vSunDirection = normalize( sunPosition );

        vSunE = sunIntensity( dot( vSunDirection, up ) );

        vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

        float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

      // extinction (absorbtion + out scattering)
      // rayleigh coefficients
        vBetaR = totalRayleigh * rayleighCoefficient;

      // mie coefficients
        vBetaM = totalMie( turbidity ) * mieCoefficient;

      }
    `,fragmentShader:`
      varying vec3 vWorldPosition;
      varying vec3 vSunDirection;
      varying float vSunfade;
      varying vec3 vBetaR;
      varying vec3 vBetaM;
      varying float vSunE;

      uniform float mieDirectionalG;
      uniform vec3 up;

      const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );

      // constants for atmospheric scattering
      const float pi = 3.141592653589793238462643383279502884197169;

      const float n = 1.0003; // refractive index of air
      const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

      // optical length at zenith for molecules
      const float rayleighZenithLength = 8.4E3;
      const float mieZenithLength = 1.25E3;
      // 66 arc seconds -> degrees, and the cosine of that
      const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

      // 3.0 / ( 16.0 * pi )
      const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
      // 1.0 / ( 4.0 * pi )
      const float ONE_OVER_FOURPI = 0.07957747154594767;

      float rayleighPhase( float cosTheta ) {
        return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
      }

      float hgPhase( float cosTheta, float g ) {
        float g2 = pow( g, 2.0 );
        float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
        return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
      }

      void main() {

        vec3 direction = normalize( vWorldPosition - cameraPos );

      // optical length
      // cutoff angle at 90 to avoid singularity in next formula.
        float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
        float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
        float sR = rayleighZenithLength * inverse;
        float sM = mieZenithLength * inverse;

      // combined extinction factor
        vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

      // in scattering
        float cosTheta = dot( direction, vSunDirection );

        float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
        vec3 betaRTheta = vBetaR * rPhase;

        float mPhase = hgPhase( cosTheta, mieDirectionalG );
        vec3 betaMTheta = vBetaM * mPhase;

        vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
        Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

      // nightsky
        float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
        float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
        vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
        vec3 L0 = vec3( 0.1 ) * Fex;

      // composition + solar disc
        float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
        L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

        vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

        vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

        gl_FragColor = vec4( retColor, 1.0 );

      #include <tonemapping_fragment>
      #include <${oi>=154?"colorspace_fragment":"encodings_fragment"}>

      }
    `},e=new go({name:"SkyShader",fragmentShader:o.fragmentShader,vertexShader:o.vertexShader,uniforms:Qn.clone(o.uniforms),side:ni,depthWrite:!1});class t extends je{constructor(){super(new Ms(1,1,1),e)}}return Cr(t,"SkyShader",o),Cr(t,"material",e),t})();function _n(o){if(typeof TextDecoder<"u")return new TextDecoder().decode(o);let e="";for(let t=0,i=o.length;t<i;t++)e+=String.fromCharCode(o[t]);try{return decodeURIComponent(escape(e))}catch{return e}}const Ht="srgb",ut="srgb-linear",Fr=3001,Sp=3e3;class ks extends Ks{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ep(t)}),this.register(function(t){return new Up(t)}),this.register(function(t){return new Gp(t)}),this.register(function(t){return new Np(t)}),this.register(function(t){return new Lp(t)}),this.register(function(t){return new jp(t)}),this.register(function(t){return new Ip(t)}),this.register(function(t){return new kp(t)}),this.register(function(t){return new zp(t)}),this.register(function(t){return new Dp(t)}),this.register(function(t){return new Pp(t)}),this.register(function(t){return new Tp(t)}),this.register(function(t){return new Op(t)}),this.register(function(t){return new Hp(t)}),this.register(function(t){return new Kp(t)}),this.register(function(t){return new Jp(t)}),this.register(function(t){return new Qp(t)})}load(e,t,i,n){const r=this;let s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){const d=Go.extractUrlBase(e);s=Go.resolveURL(d,this.path)}else s=Go.extractUrlBase(e);this.manager.itemStart(e);const a=function(d){n?n(d):console.error(d),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Zo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(d){try{r.parse(d,s,function(A){t(A),r.manager.itemEnd(e)},a)}catch(A){a(A)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r;const s={},a={};if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(_n(new Uint8Array(e.slice(0,4)))===il){try{s[te.KHR_BINARY_GLTF]=new Wp(e)}catch(A){n&&n(A);return}r=JSON.parse(s[te.KHR_BINARY_GLTF].content)}else r=JSON.parse(_n(new Uint8Array(e)));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new sm(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const A=this.pluginCallbacks[d](c);A.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[A.name]=A,s[A.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const A=r.extensionsUsed[d],u=r.extensionsRequired||[];switch(A){case te.KHR_MATERIALS_UNLIT:s[A]=new wp;break;case te.KHR_DRACO_MESH_COMPRESSION:s[A]=new Vp(r,this.dracoLoader);break;case te.KHR_TEXTURE_TRANSFORM:s[A]=new Xp;break;case te.KHR_MESH_QUANTIZATION:s[A]=new Yp;break;default:u.indexOf(A)>=0&&a[A]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+A+'".')}}c.setExtensions(s),c.setPlugins(a),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}}function Mp(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const te={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Kp{constructor(e){this.parser=e,this.name=te.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let d;const A=new ue(16777215);c.color!==void 0&&A.setRGB(c.color[0],c.color[1],c.color[2],ut);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":d=new oA(A),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new tA(A),d.distance=u;break;case"spot":d=new eA(A),d.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,d.angle=c.spot.outerConeAngle,d.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return d.position.set(0,0,0),d.decay=2,rt(d,c),c.intensity!==void 0&&(d.intensity=c.intensity),d.name=t.createUniqueName(c.name||"light_"+e),n=Promise.resolve(d),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}}class wp{constructor(){this.name=te.KHR_MATERIALS_UNLIT}getMaterialType(){return lt}extendParams(e,t,i){const n=[];e.color=new ue(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],ut),e.opacity=s[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,Ht))}return Promise.all(n)}}class Dp{constructor(e){this.parser=e,this.name=te.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Ep{constructor(e){this.parser=e,this.name=te.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:De}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const a=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(a,a)}return Promise.all(r)}}class Up{constructor(e){this.parser=e,this.name=te.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:De}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Tp{constructor(e){this.parser=e,this.name=te.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:De}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class jp{constructor(e){this.parser=e,this.name=te.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:De}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ue(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=n.extensions[this.name];if(s.sheenColorFactor!==void 0){const a=s.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],ut)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",s.sheenColorTexture,Ht)),s.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class Ip{constructor(e){this.parser=e,this.name=te.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:De}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class kp{constructor(e){this.parser=e,this.name=te.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:De}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const a=s.attenuationColor||[1,1,1];return t.attenuationColor=new ue().setRGB(a[0],a[1],a[2],ut),Promise.all(r)}}class zp{constructor(e){this.parser=e,this.name=te.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:De}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Pp{constructor(e){this.parser=e,this.name=te.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:De}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",s.specularTexture));const a=s.specularColorFactor||[1,1,1];return t.specularColor=new ue().setRGB(a[0],a[1],a[2],ut),s.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",s.specularColorTexture,Ht)),Promise.all(r)}}class Hp{constructor(e){this.parser=e,this.name=te.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:De}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];return t.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",s.bumpTexture)),Promise.all(r)}}class Op{constructor(e){this.parser=e,this.name=te.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:De}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(r)}}class Gp{constructor(e){this.parser=e,this.name=te.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const r=n.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class Np{constructor(e){this.parser=e,this.name=te.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],a=n.images[s.source];let c=i.textureLoader;if(a.uri){const d=i.options.manager.getHandler(a.uri);d!==null&&(c=d)}return this.detectSupport().then(function(d){if(d)return i.loadTextureImage(e,s.source,c);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Lp{constructor(e){this.parser=e,this.name=te.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],a=n.images[s.source];let c=i.textureLoader;if(a.uri){const d=i.options.manager.getHandler(a.uri);d!==null&&(c=d)}return this.detectSupport().then(function(d){if(d)return i.loadTextureImage(e,s.source,c);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Jp{constructor(e){this.name=te.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=n.byteOffset||0,d=n.byteLength||0,A=n.count,u=n.byteStride,f=new Uint8Array(a,c,d);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(A,u,f,n.mode,n.filter).then(function(m){return m.buffer}):s.ready.then(function(){const m=new ArrayBuffer(A*u);return s.decodeGltfBuffer(new Uint8Array(m),A,u,f,n.mode,n.filter),m})})}else return null}}class Qp{constructor(e){this.name=te.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const d of n.primitives)if(d.mode!==Pe.TRIANGLES&&d.mode!==Pe.TRIANGLE_STRIP&&d.mode!==Pe.TRIANGLE_FAN&&d.mode!==void 0)return null;const s=i.extensions[this.name].attributes,a=[],c={};for(const d in s)a.push(this.parser.getDependency("accessor",s[d]).then(A=>(c[d]=A,c[d])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(d=>{const A=d.pop(),u=A.isGroup?A.children:[A],f=d[0].count,m=[];for(const y of u){const g=new Y,x=new U,h=new ke,p=new U(1,1,1),b=new nA(y.geometry,y.material,f);for(let F=0;F<f;F++)c.TRANSLATION&&x.fromBufferAttribute(c.TRANSLATION,F),c.ROTATION&&h.fromBufferAttribute(c.ROTATION,F),c.SCALE&&p.fromBufferAttribute(c.SCALE,F),b.setMatrixAt(F,g.compose(x,h,p));for(const F in c)if(F==="_COLOR_0"){const B=c[F];b.instanceColor=new iA(B.array,B.itemSize,B.normalized)}else F!=="TRANSLATION"&&F!=="ROTATION"&&F!=="SCALE"&&y.geometry.setAttribute(F,c[F]);ws.prototype.copy.call(b,y),this.parser.assignFinalMaterial(b),m.push(b)}return A.isGroup?(A.clear(),A.add(...m),A):m[0]}))}}const il="glTF",Ro=12,Br={JSON:1313821514,BIN:5130562};class Wp{constructor(e){this.name=te.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ro);if(this.header={magic:_n(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==il)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ro,n=new DataView(e,Ro);let r=0;for(;r<i;){const s=n.getUint32(r,!0);r+=4;const a=n.getUint32(r,!0);if(r+=4,a===Br.JSON){const c=new Uint8Array(e,Ro+r,s);this.content=_n(c)}else if(a===Br.BIN){const c=Ro+r;this.body=e.slice(c,c+s)}r+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Vp{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=te.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,a={},c={},d={};for(const A in s){const u=ds[A]||A.toLowerCase();a[u]=s[A]}for(const A in e.attributes){const u=ds[A]||A.toLowerCase();if(s[A]!==void 0){const f=i.accessors[e.attributes[A]],m=uo[f.componentType];d[u]=m.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(A){return new Promise(function(u,f){n.decodeDracoFile(A,function(m){for(const y in m.attributes){const g=m.attributes[y],x=c[y];x!==void 0&&(g.normalized=x)}u(m)},a,d,ut,f)})})}}class Xp{constructor(){this.name=te.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Yp{constructor(){this.name=te.KHR_MESH_QUANTIZATION}}class sl extends RA{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let s=0;s!==n;s++)t[s]=i[r+s];return t}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=a*2,d=a*3,A=n-t,u=(i-t)/A,f=u*u,m=f*u,y=e*d,g=y-d,x=-2*m+3*f,h=m-f,p=1-x,b=h-f+u;for(let F=0;F!==a;F++){const B=s[g+F+a],v=s[g+F+c]*A,R=s[y+F+a],K=s[y+F]*A;r[F]=p*B+b*v+x*R+h*K}return r}}const Zp=new ke;class qp extends sl{interpolate_(e,t,i,n){const r=super.interpolate_(e,t,i,n);return Zp.fromArray(r).normalize().toArray(r),r}}const Pe={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},uo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},vr={9728:he,9729:Fe,9984:uA,9985:cA,9986:lA,9987:La},Rr={33071:Mt,33648:dA,10497:Bt},Fi={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ds={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...oi>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mt={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_p={CUBICSPLINE:void 0,LINEAR:Ja,STEP:vA},Bi={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $p(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new tt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Wn})),o.DefaultMaterial}function Tt(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function rt(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function em(o,e,t){let i=!1,n=!1,r=!1;for(let d=0,A=e.length;d<A;d++){const u=e[d];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(o);const s=[],a=[],c=[];for(let d=0,A=e.length;d<A;d++){const u=e[d];if(i){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):o.attributes.position;s.push(f)}if(n){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):o.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):o.attributes.color;c.push(f)}}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(c)]).then(function(d){const A=d[0],u=d[1],f=d[2];return i&&(o.morphAttributes.position=A),n&&(o.morphAttributes.normal=u),r&&(o.morphAttributes.color=f),o.morphTargetsRelative=!0,o})}function tm(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function om(o){let e;const t=o.extensions&&o.extensions[te.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+vi(t.attributes):e=o.indices+":"+vi(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,n=o.targets.length;i<n;i++)e+=":"+vi(o.targets[i]);return e}function vi(o){let e="";const t=Object.keys(o).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+o[t[i]]+";";return e}function fs(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nm(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const im=new Y;class sm{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Mp,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,r=-1;typeof navigator<"u"&&typeof navigator.userAgent<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,r=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&r<98?this.textureLoader=new sA(this.options.manager):this.textureLoader=new rA(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Zo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(s){const a={scene:s[0][n.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:n.asset,parser:i,userData:{}};return Tt(r,a,n),rt(a,n),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n].joints;for(let a=0,c=s.length;a<c;a++)e[s[a]].isBone=!0}for(let n=0,r=e.length;n<r;n++){const s=e[n];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(i[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),r=(s,a)=>{const c=this.associations.get(s);c!=null&&this.associations.set(a,c);for(const[d,A]of s.children.entries())r(A,a.children[d])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,s){return i.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[te.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(r,s){i.load(Go.resolveURL(t.uri,n.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const s=Fi[n.type],a=uo[n.componentType],c=n.normalized===!0,d=new a(n.count*s);return Promise.resolve(new me(d,s,c))}const r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(s){const a=s[0],c=Fi[n.type],d=uo[n.componentType],A=d.BYTES_PER_ELEMENT,u=A*c,f=n.byteOffset||0,m=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,y=n.normalized===!0;let g,x;if(m&&m!==u){const h=Math.floor(f/m),p="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+h+":"+n.count;let b=t.cache.get(p);b||(g=new d(a,h*m,n.count*m/A),b=new aA(g,m/A),t.cache.add(p,b)),x=new Pt(b,c,f%m/A,y)}else a===null?g=new d(n.count*c):g=new d(a,f,n.count*c),x=new me(g,c,y);if(n.sparse!==void 0){const h=Fi.SCALAR,p=uo[n.sparse.indices.componentType],b=n.sparse.indices.byteOffset||0,F=n.sparse.values.byteOffset||0,B=new p(s[1],b,n.sparse.count*h),v=new d(s[2],F,n.sparse.count*c);a!==null&&(x=new me(x.array.slice(),x.itemSize,x.normalized));for(let R=0,K=B.length;R<K;R++){const S=B[R];if(x.setX(S,v[R*c]),c>=2&&x.setY(S,v[R*c+1]),c>=3&&x.setZ(S,v[R*c+2]),c>=4&&x.setW(S,v[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,s=t.images[r];let a=this.textureLoader;if(s.uri){const c=i.manager.getHandler(s.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const n=this,r=this.json,s=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[c])return this.textureCache[c];const d=this.loadImageSource(t,i).then(function(A){A.flipY=!1,A.name=s.name||a.name||"",A.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(A.name=a.uri);const f=(r.samplers||{})[s.sampler]||{};return A.magFilter=vr[f.magFilter]||Fe,A.minFilter=vr[f.minFilter]||La,A.wrapS=Rr[f.wrapS]||Bt,A.wrapT=Rr[f.wrapT]||Bt,n.associations.set(A,{textures:e}),A}).catch(function(){return null});return this.textureCache[c]=d,d}loadImageSource(e,t){const i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const s=n.images[e],a=self.URL||self.webkitURL;let c=s.uri||"",d=!1;if(s.bufferView!==void 0)c=i.getDependency("bufferView",s.bufferView).then(function(u){d=!0;const f=new Blob([u],{type:s.mimeType});return c=a.createObjectURL(f),c});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const A=Promise.resolve(c).then(function(u){return new Promise(function(f,m){let y=f;t.isImageBitmapLoader===!0&&(y=function(g){const x=new fr(g);x.needsUpdate=!0,f(x)}),t.load(Go.resolveURL(u,r.path),y,void 0,m)})}).then(function(u){return d===!0&&a.revokeObjectURL(c),rt(u,s),u.userData.mimeType=s.mimeType||nm(s.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=A,A}assignTexture(e,t,i,n){const r=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(s=s.clone(),s.channel=i.texCoord),r.extensions[te.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[te.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(s);s=r.extensions[te.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),r.associations.set(s,c)}}return n!==void 0&&(typeof n=="number"&&(n=n===Fr?Ht:ut),"colorSpace"in s?s.colorSpace=n:s.encoding=n===Ht?Fr:Sp),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new fA,hi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new AA,hi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(n||r||s){let a="ClonedMaterial:"+i.uuid+":";n&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),s&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),s&&(c.flatShading=!0),n&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return tt}loadMaterial(e){const t=this,i=this.json,n=this.extensions,r=i.materials[e];let s;const a={},c=r.extensions||{},d=[];if(c[te.KHR_MATERIALS_UNLIT]){const u=n[te.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),d.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new ue(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],ut),a.opacity=f[3]}u.baseColorTexture!==void 0&&d.push(t.assignTexture(a,"map",u.baseColorTexture,Ht)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),d.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),s=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Lt);const A=r.alphaMode||Bi.OPAQUE;if(A===Bi.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,A===Bi.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==lt&&(d.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ie(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&s!==lt&&(d.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==lt){const u=r.emissiveFactor;a.emissive=new ue().setRGB(u[0],u[1],u[2],ut)}return r.emissiveTexture!==void 0&&s!==lt&&d.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ht)),Promise.all(d).then(function(){const u=new s(a);return r.name&&(u.name=r.name),rt(u,r),t.associations.set(u,{materials:e}),r.extensions&&Tt(n,u,r),u})}createUniqueName(e){const t=pA.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function r(a){return i[te.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Sr(c,a,t)})}const s=[];for(let a=0,c=e.length;a<c;a++){const d=e[a],A=om(d),u=n[A];if(u)s.push(u.promise);else{let f;d.extensions&&d.extensions[te.KHR_DRACO_MESH_COMPRESSION]?f=r(d):f=Sr(new Xe,d,t),n[A]={primitive:d,promise:f},s.push(f)}}return Promise.all(s)}loadMesh(e){const t=this,i=this.json,n=this.extensions,r=i.meshes[e],s=r.primitives,a=[];for(let c=0,d=s.length;c<d;c++){const A=s[c].material===void 0?$p(this.cache):this.getDependency("material",s[c].material);a.push(A)}return a.push(t.loadGeometries(s)),Promise.all(a).then(function(c){const d=c.slice(0,c.length-1),A=c[c.length-1],u=[];for(let m=0,y=A.length;m<y;m++){const g=A[m],x=s[m];let h;const p=d[m];if(x.mode===Pe.TRIANGLES||x.mode===Pe.TRIANGLE_STRIP||x.mode===Pe.TRIANGLE_FAN||x.mode===void 0)h=r.isSkinnedMesh===!0?new mA(g,p):new je(g,p),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),x.mode===Pe.TRIANGLE_STRIP?h.geometry=dr(h.geometry,SA):x.mode===Pe.TRIANGLE_FAN&&(h.geometry=dr(h.geometry,MA));else if(x.mode===Pe.LINES)h=new hA(g,p);else if(x.mode===Pe.LINE_STRIP)h=new gA(g,p);else if(x.mode===Pe.LINE_LOOP)h=new xA(g,p);else if(x.mode===Pe.POINTS)h=new yA(g,p);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(h.geometry.morphAttributes).length>0&&tm(h,r),h.name=t.createUniqueName(r.name||"mesh_"+e),rt(h,r),x.extensions&&Tt(n,h,x),t.assignFinalMaterial(h),u.push(h)}for(let m=0,y=u.length;m<y;m++)t.associations.set(u[m],{meshes:e,primitives:m});if(u.length===1)return r.extensions&&Tt(n,u[0],r),u[0];const f=new No;r.extensions&&Tt(n,f,r),t.associations.set(f,{meshes:e});for(let m=0,y=u.length;m<y;m++)f.add(u[m]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ds(vt.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new bA(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),rt(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const r=n.pop(),s=n,a=[],c=[];for(let d=0,A=s.length;d<A;d++){const u=s[d];if(u){a.push(u);const f=new Y;r!==null&&f.fromArray(r.array,d*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new CA(a,c)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,s=[],a=[],c=[],d=[],A=[];for(let u=0,f=n.channels.length;u<f;u++){const m=n.channels[u],y=n.samplers[m.sampler],g=m.target,x=g.node,h=n.parameters!==void 0?n.parameters[y.input]:y.input,p=n.parameters!==void 0?n.parameters[y.output]:y.output;g.node!==void 0&&(s.push(this.getDependency("node",x)),a.push(this.getDependency("accessor",h)),c.push(this.getDependency("accessor",p)),d.push(y),A.push(g))}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(c),Promise.all(d),Promise.all(A)]).then(function(u){const f=u[0],m=u[1],y=u[2],g=u[3],x=u[4],h=[];for(let p=0,b=f.length;p<b;p++){const F=f[p],B=m[p],v=y[p],R=g[p],K=x[p];if(F===void 0)continue;F.updateMatrix&&F.updateMatrix();const S=i._createAnimationTracks(F,B,v,R,K);if(S)for(let w=0;w<S.length;w++)h.push(S[w])}return new FA(r,void 0,h)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){const s=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&s.traverse(function(a){if(a.isMesh)for(let c=0,d=n.weights.length;c<d;c++)a.morphTargetInfluences[c]=n.weights[c]}),s})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),s=[],a=n.children||[];for(let d=0,A=a.length;d<A;d++)s.push(i.getDependency("node",a[d]));const c=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(s),c]).then(function(d){const A=d[0],u=d[1],f=d[2];f!==null&&A.traverse(function(m){m.isSkinnedMesh&&m.bind(f,im)});for(let m=0,y=u.length;m<y;m++)A.add(u[m]);return A})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],s=r.name?n.createUniqueName(r.name):"",a=[],c=n._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(n.getDependency("camera",r.camera).then(function(d){return n._getNodeRef(n.cameraCache,r.camera,d)})),n._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){a.push(d)}),this.nodeCache[e]=Promise.all(a).then(function(d){let A;if(r.isBone===!0?A=new BA:d.length>1?A=new No:d.length===1?A=d[0]:A=new ws,A!==d[0])for(let u=0,f=d.length;u<f;u++)A.add(d[u]);if(r.name&&(A.userData.name=r.name,A.name=s),rt(A,r),r.extensions&&Tt(i,A,r),r.matrix!==void 0){const u=new Y;u.fromArray(r.matrix),A.applyMatrix4(u)}else r.translation!==void 0&&A.position.fromArray(r.translation),r.rotation!==void 0&&A.quaternion.fromArray(r.rotation),r.scale!==void 0&&A.scale.fromArray(r.scale);return n.associations.has(A)||n.associations.set(A,{}),n.associations.get(A).nodes=e,A}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,r=new No;i.name&&(r.name=n.createUniqueName(i.name)),rt(r,i),i.extensions&&Tt(t,r,i);const s=i.nodes||[],a=[];for(let c=0,d=s.length;c<d;c++)a.push(n.getDependency("node",s[c]));return Promise.all(a).then(function(c){for(let A=0,u=c.length;A<u;A++)r.add(c[A]);const d=A=>{const u=new Map;for(const[f,m]of n.associations)(f instanceof hi||f instanceof fr)&&u.set(f,m);return A.traverse(f=>{const m=n.associations.get(f);m!=null&&u.set(f,m)}),u};return n.associations=d(r),r})}_createAnimationTracks(e,t,i,n,r){const s=[],a=e.name?e.name:e.uuid,c=[];mt[r.path]===mt.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let d;switch(mt[r.path]){case mt.weights:d=pr;break;case mt.rotation:d=mr;break;case mt.position:case mt.scale:d=Ar;break;default:switch(i.itemSize){case 1:d=pr;break;case 2:case 3:default:d=Ar;break}break}const A=n.interpolation!==void 0?_p[n.interpolation]:Ja,u=this._getArrayFromAccessor(i);for(let f=0,m=c.length;f<m;f++){const y=new d(c[f]+"."+mt[r.path],t.array,u,A);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),s.push(y)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=fs(t.constructor),n=new Float32Array(t.length);for(let r=0,s=t.length;r<s;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const n=this instanceof mr?qp:sl;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function rm(o,e,t){const i=e.attributes,n=new de;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],c=a.min,d=a.max;if(c!==void 0&&d!==void 0){if(n.set(new U(c[0],c[1],c[2]),new U(d[0],d[1],d[2])),a.normalized){const A=fs(uo[a.componentType]);n.min.multiplyScalar(A),n.max.multiplyScalar(A)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new U,c=new U;for(let d=0,A=r.length;d<A;d++){const u=r[d];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],m=f.min,y=f.max;if(m!==void 0&&y!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(y[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(y[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(y[2]))),f.normalized){const g=fs(uo[f.componentType]);c.multiplyScalar(g)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(a)}o.boundingBox=n;const s=new ii;n.getCenter(s.center),s.radius=n.min.distanceTo(n.max)/2,o.boundingSphere=s}function Sr(o,e,t){const i=e.attributes,n=[];function r(s,a){return t.getDependency("accessor",s).then(function(c){o.setAttribute(a,c)})}for(const s in i){const a=ds[s]||s.toLowerCase();a in o.attributes||n.push(r(i[s],a))}if(e.indices!==void 0&&!o.index){const s=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});n.push(s)}return rt(o,e),rm(o,e,t),Promise.all(n).then(function(){return e.targets!==void 0?em(o,e.targets,t):o})}const Ri=new WeakMap;class am extends Ks{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,n){const r=new Zo(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,s=>{const a={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(s,a).then(t).catch(n)},i,n)}decodeDracoFile(e,t,i,n){const r={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!i};this.decodeGeometry(e,r).then(t)}decodeGeometry(e,t){for(const c in t.attributeTypes){const d=t.attributeTypes[c];d.BYTES_PER_ELEMENT!==void 0&&(t.attributeTypes[c]=d.name)}const i=JSON.stringify(t);if(Ri.has(e)){const c=Ri.get(e);if(c.key===i)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const r=this.workerNextTaskID++,s=e.byteLength,a=this._getWorker(r,s).then(c=>(n=c,new Promise((d,A)=>{n._callbacks[r]={resolve:d,reject:A},n.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{n&&r&&this._releaseTask(n,r)}),Ri.set(e,{key:i,promise:a}),a}_createGeometry(e){const t=new Xe;e.index&&t.setIndex(new me(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const n=e.attributes[i],r=n.name,s=n.array,a=n.itemSize;t.setAttribute(r,new me(s,a))}return t}_loadLibrary(e,t){const i=new Zo(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((n,r)=>{i.load(e,n,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const n=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const r=lm.toString(),s=["/* draco decoder */",n,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([s]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(r){const s=r.data;switch(s.type){case"decode":n._callbacks[s.id].resolve(s);break;case"error":n._callbacks[s.id].reject(s);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+s.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,r){return n._taskLoad>r._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function lm(){let o,e;onmessage=function(s){const a=s.data;switch(a.type){case"init":o=a.decoderConfig,e=new Promise(function(A){o.onModuleLoaded=function(u){A({draco:u})},DracoDecoderModule(o)});break;case"decode":const c=a.buffer,d=a.taskConfig;e.then(A=>{const u=A.draco,f=new u.Decoder,m=new u.DecoderBuffer;m.Init(new Int8Array(c),c.byteLength);try{const y=t(u,f,m,d),g=y.attributes.map(x=>x.array.buffer);y.index&&g.push(y.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:y},g)}catch(y){console.error(y),self.postMessage({type:"error",id:a.id,error:y.message})}finally{u.destroy(m),u.destroy(f)}});break}};function t(s,a,c,d){const A=d.attributeIDs,u=d.attributeTypes;let f,m;const y=a.GetEncodedGeometryType(c);if(y===s.TRIANGULAR_MESH)f=new s.Mesh,m=a.DecodeBufferToMesh(c,f);else if(y===s.POINT_CLOUD)f=new s.PointCloud,m=a.DecodeBufferToPointCloud(c,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!m.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+m.error_msg());const g={index:null,attributes:[]};for(const x in A){const h=self[u[x]];let p,b;if(d.useUniqueIDs)b=A[x],p=a.GetAttributeByUniqueId(f,b);else{if(b=a.GetAttributeId(f,s[A[x]]),b===-1)continue;p=a.GetAttribute(f,b)}g.attributes.push(n(s,a,f,x,h,p))}return y===s.TRIANGULAR_MESH&&(g.index=i(s,a,f)),s.destroy(f),g}function i(s,a,c){const A=c.num_faces()*3,u=A*4,f=s._malloc(u);a.GetTrianglesUInt32Array(c,u,f);const m=new Uint32Array(s.HEAPF32.buffer,f,A).slice();return s._free(f),{array:m,itemSize:1}}function n(s,a,c,d,A,u){const f=u.num_components(),y=c.num_points()*f,g=y*A.BYTES_PER_ELEMENT,x=r(s,A),h=s._malloc(g);a.GetAttributeDataArrayForAllPoints(c,u,x,g,h);const p=new A(s.HEAPF32.buffer,h,y).slice();return s._free(h),{name:d,array:p,itemSize:f}}function r(s,a){switch(a){case Float32Array:return s.DT_FLOAT32;case Int8Array:return s.DT_INT8;case Int16Array:return s.DT_INT16;case Int32Array:return s.DT_INT32;case Uint8Array:return s.DT_UINT8;case Uint16Array:return s.DT_UINT16;case Uint32Array:return s.DT_UINT32}}}const Mr=new de,cn=new U;class zs extends KA{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new hr(e,3)),this.setAttribute("uv",new hr(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new ls(t,6,1);return this.setAttribute("instanceStart",new Pt(i,3,0)),this.setAttribute("instanceEnd",new Pt(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));const n=new ls(i,t*2,1);return this.setAttribute("instanceColorStart",new Pt(n,t,0)),this.setAttribute("instanceColorEnd",new Pt(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new wA(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new de);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Mr.setFromBufferAttribute(t),this.boundingBox.union(Mr))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let n=0;for(let r=0,s=e.count;r<s;r++)cn.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(cn)),cn.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(cn));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class rl extends zs{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let n=0;n<t;n+=3)i[2*n]=e[n],i[2*n+1]=e[n+1],i[2*n+2]=e[n+2],i[2*n+3]=e[n+3],i[2*n+4]=e[n+4],i[2*n+5]=e[n+5];return super.setPositions(i),this}setColors(e,t=3){const i=e.length-t,n=new Float32Array(2*i);if(t===3)for(let r=0;r<i;r+=t)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];else for(let r=0;r<i;r+=t)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5],n[2*r+6]=e[r+6],n[2*r+7]=e[r+7];return super.setColors(n,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class Ps extends go{constructor(e){super({type:"LineMaterial",uniforms:Qn.clone(Qn.merge([gr.common,gr.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ie(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${oi>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const Si=new Ne,Kr=new U,wr=new U,xe=new Ne,ye=new Ne,_e=new Ne,Mi=new U,Ki=new Y,be=new ot,Dr=new U,un=new de,dn=new ii,$e=new Ne;let et,Ot;function Er(o,e,t){return $e.set(0,0,-e,1).applyMatrix4(o.projectionMatrix),$e.multiplyScalar(1/$e.w),$e.x=Ot/t.width,$e.y=Ot/t.height,$e.applyMatrix4(o.projectionMatrixInverse),$e.multiplyScalar(1/$e.w),Math.abs(Math.max($e.x,$e.y))}function cm(o,e){const t=o.matrixWorld,i=o.geometry,n=i.attributes.instanceStart,r=i.attributes.instanceEnd,s=Math.min(i.instanceCount,n.count);for(let a=0,c=s;a<c;a++){be.start.fromBufferAttribute(n,a),be.end.fromBufferAttribute(r,a),be.applyMatrix4(t);const d=new U,A=new U;et.distanceSqToSegment(be.start,be.end,A,d),A.distanceTo(d)<Ot*.5&&e.push({point:A,pointOnLine:d,distance:et.origin.distanceTo(A),object:o,face:null,faceIndex:a,uv:null,[nl]:null})}}function um(o,e,t){const i=e.projectionMatrix,r=o.material.resolution,s=o.matrixWorld,a=o.geometry,c=a.attributes.instanceStart,d=a.attributes.instanceEnd,A=Math.min(a.instanceCount,c.count),u=-e.near;et.at(1,_e),_e.w=1,_e.applyMatrix4(e.matrixWorldInverse),_e.applyMatrix4(i),_e.multiplyScalar(1/_e.w),_e.x*=r.x/2,_e.y*=r.y/2,_e.z=0,Mi.copy(_e),Ki.multiplyMatrices(e.matrixWorldInverse,s);for(let f=0,m=A;f<m;f++){if(xe.fromBufferAttribute(c,f),ye.fromBufferAttribute(d,f),xe.w=1,ye.w=1,xe.applyMatrix4(Ki),ye.applyMatrix4(Ki),xe.z>u&&ye.z>u)continue;if(xe.z>u){const b=xe.z-ye.z,F=(xe.z-u)/b;xe.lerp(ye,F)}else if(ye.z>u){const b=ye.z-xe.z,F=(ye.z-u)/b;ye.lerp(xe,F)}xe.applyMatrix4(i),ye.applyMatrix4(i),xe.multiplyScalar(1/xe.w),ye.multiplyScalar(1/ye.w),xe.x*=r.x/2,xe.y*=r.y/2,ye.x*=r.x/2,ye.y*=r.y/2,be.start.copy(xe),be.start.z=0,be.end.copy(ye),be.end.z=0;const g=be.closestPointToPointParameter(Mi,!0);be.at(g,Dr);const x=vt.lerp(xe.z,ye.z,g),h=x>=-1&&x<=1,p=Mi.distanceTo(Dr)<Ot*.5;if(h&&p){be.start.fromBufferAttribute(c,f),be.end.fromBufferAttribute(d,f),be.start.applyMatrix4(s),be.end.applyMatrix4(s);const b=new U,F=new U;et.distanceSqToSegment(be.start,be.end,F,b),t.push({point:F,pointOnLine:b,distance:et.origin.distanceTo(F),object:o,face:null,faceIndex:f,uv:null,[nl]:null})}}}class al extends je{constructor(e=new zs,t=new Ps({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let s=0,a=0,c=t.count;s<c;s++,a+=2)Kr.fromBufferAttribute(t,s),wr.fromBufferAttribute(i,s),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+Kr.distanceTo(wr);const r=new ls(n,2,1);return e.setAttribute("instanceDistanceStart",new Pt(r,1,0)),e.setAttribute("instanceDistanceEnd",new Pt(r,1,1)),this}raycast(e,t){const i=this.material.worldUnits,n=e.camera;n===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;et=e.ray;const s=this.matrixWorld,a=this.geometry,c=this.material;Ot=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),dn.copy(a.boundingSphere).applyMatrix4(s);let d;if(i)d=Ot*.5;else{const u=Math.max(n.near,dn.distanceToPoint(et.origin));d=Er(n,u,c.resolution)}if(dn.radius+=d,et.intersectsSphere(dn)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),un.copy(a.boundingBox).applyMatrix4(s);let A;if(i)A=Ot*.5;else{const u=Math.max(n.near,un.distanceToPoint(et.origin));A=Er(n,u,c.resolution)}un.expandByScalar(A),et.intersectsBox(un)!==!1&&(i?cm(this,t):um(this,n,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Si),this.material.uniforms.resolution.value.set(Si.z,Si.w))}}class dm extends al{constructor(e=new rl,t=new Ps({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}let fn;const wi=()=>{if(fn)return fn;const o="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",e="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",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,253,3,1,2,34,4,106,6,5,11,8,7,20,13,33,12,16,128,9,116,64,19,113,127,15,10,21,22,14,255,66,24,54,136,107,18,23,192,26,114,118,132,17,77,101,130,144,27,87,131,44,45,74,156,154,70,167]);if(typeof WebAssembly!="object")return{supported:!1};let n=o;WebAssembly.validate(t)&&(n=e);let r;const s=WebAssembly.instantiate(a(n),{}).then(u=>{r=u.instance,r.exports.__wasm_call_ctors()});function a(u){const f=new Uint8Array(u.length);for(let y=0;y<u.length;++y){const g=u.charCodeAt(y);f[y]=g>96?g-71:g>64?g-65:g>47?g+4:g>46?63:62}let m=0;for(let y=0;y<u.length;++y)f[m++]=f[y]<60?i[f[y]]:(f[y]-60)*64+f[++y];return f.buffer.slice(0,m)}function c(u,f,m,y,g,x){const h=r.exports.sbrk,p=m+3&-4,b=h(p*y),F=h(g.length),B=new Uint8Array(r.exports.memory.buffer);B.set(g,F);const v=u(b,m,y,F,g.length);if(v===0&&x&&x(b,p,y),f.set(B.subarray(b,b+m*y)),h(b-h(0)),v!==0)throw new Error(`Malformed buffer data: ${v}`)}const d={0:"",1:"meshopt_decodeFilterOct",2:"meshopt_decodeFilterQuat",3:"meshopt_decodeFilterExp",NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},A={0:"meshopt_decodeVertexBuffer",1:"meshopt_decodeIndexBuffer",2:"meshopt_decodeIndexSequence",ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"};return fn={ready:s,supported:!0,decodeVertexBuffer(u,f,m,y,g){c(r.exports.meshopt_decodeVertexBuffer,u,f,m,y,r.exports[d[g]])},decodeIndexBuffer(u,f,m,y){c(r.exports.meshopt_decodeIndexBuffer,u,f,m,y)},decodeIndexSequence(u,f,m,y){c(r.exports.meshopt_decodeIndexSequence,u,f,m,y)},decodeGltfBuffer(u,f,m,y,g,x){c(r.exports[A[g]],u,f,m,y,r.exports[d[x]])}},fn},fm=new U,Am=new U,pm=new U,mm=(o,e,t)=>{const i=t.width/2,n=t.height/2;e.updateMatrixWorld(!1);const r=o.project(e);return r.x=r.x*i+i,r.y=-(r.y*n)+n,r},hm=(o,e,t,i=1)=>{const n=fm.set(o.x/t.width*2-1,-(o.y/t.height)*2+1,i);return n.unproject(e),n},ll=(o,e,t,i)=>{const n=mm(pm.copy(o),t,i);let r=0;for(let s=0;s<2;++s){const a=Am.copy(n).setComponent(s,n.getComponent(s)+e),c=hm(a,t,i,a.z);r=Math.max(r,o.distanceTo(c))}return r},$n=C.forwardRef(function({points:e,color:t=16777215,vertexColors:i,linewidth:n,lineWidth:r,segments:s,dashed:a,...c},d){var A,u;const f=Le(h=>h.size),m=C.useMemo(()=>s?new al:new dm,[s]),[y]=C.useState(()=>new Ps),g=(i==null||(A=i[0])==null?void 0:A.length)===4?4:3,x=C.useMemo(()=>{const h=s?new zs:new rl,p=e.map(b=>{const F=Array.isArray(b);return b instanceof U||b instanceof Ne?[b.x,b.y,b.z]:b instanceof Ie?[b.x,b.y,0]:F&&b.length===3?[b[0],b[1],b[2]]:F&&b.length===2?[b[0],b[1],0]:b});if(h.setPositions(p.flat()),i){t=16777215;const b=i.map(F=>F instanceof ue?F.toArray():F);h.setColors(b.flat(),g)}return h},[e,s,i,g]);return C.useLayoutEffect(()=>{m.computeLineDistances()},[e,m]),C.useLayoutEffect(()=>{a?y.defines.USE_DASH="":delete y.defines.USE_DASH,y.needsUpdate=!0},[a,y]),C.useEffect(()=>()=>{x.dispose(),y.dispose()},[x]),C.createElement("primitive",fo({object:m,ref:d},c),C.createElement("primitive",{object:x,attach:"geometry"}),C.createElement("primitive",fo({object:y,attach:"material",color:t,vertexColors:!!i,resolution:[f.width,f.height],linewidth:(u=n??r)!==null&&u!==void 0?u:1,dashed:a,transparent:g===4},c)))});function gm(o,e,t,i){const n=class extends go{constructor(s={}){const a=Object.entries(o);super({uniforms:a.reduce((c,[d,A])=>{const u=Qn.clone({[d]:{value:A}});return{...c,...u}},{}),vertexShader:e,fragmentShader:t}),this.key="",a.forEach(([c])=>Object.defineProperty(this,c,{get:()=>this.uniforms[c].value,set:d=>this.uniforms[c].value=d})),Object.assign(this,s)}};return n.key=vt.generateUUID(),n}const xm=()=>parseInt(DA.replace(/\D+/g,"")),cl=xm();let An=null,ul="https://www.gstatic.com/draco/versioned/decoders/1.5.5/";function dl(o=!0,e=!0,t){return i=>{t&&t(i),o&&(An||(An=new am),An.setDecoderPath(typeof o=="string"?o:ul),i.setDRACOLoader(An)),e&&i.setMeshoptDecoder(typeof wi=="function"?wi():wi)}}const wt=(o,e,t,i)=>$o(ks,o,dl(e,t,i));wt.preload=(o,e,t,i)=>$o.preload(ks,o,dl(e,t,i));wt.clear=o=>$o.clear(ks,o);wt.setDecoderPath=o=>{ul=o};const ym=gm({cellSize:.5,sectionSize:1,fadeDistance:100,fadeStrength:1,fadeFrom:1,cellThickness:.5,sectionThickness:1,cellColor:new ue,sectionColor:new ue,infiniteGrid:!1,followCamera:!1,worldCamProjPosition:new U,worldPlanePosition:new U},`
    varying vec3 localPosition;
    varying vec4 worldPosition;

    uniform vec3 worldCamProjPosition;
    uniform vec3 worldPlanePosition;
    uniform float fadeDistance;
    uniform bool infiniteGrid;
    uniform bool followCamera;

    void main() {
      localPosition = position.xzy;
      if (infiniteGrid) localPosition *= 1.0 + fadeDistance;
      
      worldPosition = modelMatrix * vec4(localPosition, 1.0);
      if (followCamera) {
        worldPosition.xyz += (worldCamProjPosition - worldPlanePosition);
        localPosition = (inverse(modelMatrix) * worldPosition).xyz;
      }

      gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
  `,`
    varying vec3 localPosition;
    varying vec4 worldPosition;

    uniform vec3 worldCamProjPosition;
    uniform float cellSize;
    uniform float sectionSize;
    uniform vec3 cellColor;
    uniform vec3 sectionColor;
    uniform float fadeDistance;
    uniform float fadeStrength;
    uniform float fadeFrom;
    uniform float cellThickness;
    uniform float sectionThickness;

    float getGrid(float size, float thickness) {
      vec2 r = localPosition.xz / size;
      vec2 grid = abs(fract(r - 0.5) - 0.5) / fwidth(r);
      float line = min(grid.x, grid.y) + 1.0 - thickness;
      return 1.0 - min(line, 1.0);
    }

    void main() {
      float g1 = getGrid(cellSize, cellThickness);
      float g2 = getGrid(sectionSize, sectionThickness);

      vec3 from = worldCamProjPosition*vec3(fadeFrom);
      float dist = distance(from, worldPosition.xyz);
      float d = 1.0 - min(dist / fadeDistance, 1.0);
      vec3 color = mix(cellColor, sectionColor, min(1.0, sectionThickness * g2));

      gl_FragColor = vec4(color, (g1 + g2) * pow(d, fadeStrength));
      gl_FragColor.a = mix(0.75 * gl_FragColor.a, gl_FragColor.a, g2);
      if (gl_FragColor.a <= 0.0) discard;

      #include <tonemapping_fragment>
      #include <${cl>=154?"colorspace_fragment":"encodings_fragment"}>
    }
  `),bm=C.forwardRef(({args:o,cellColor:e="#000000",sectionColor:t="#2080ff",cellSize:i=.5,sectionSize:n=1,followCamera:r=!1,infiniteGrid:s=!1,fadeDistance:a=100,fadeStrength:c=1,fadeFrom:d=1,cellThickness:A=.5,sectionThickness:u=1,side:f=ni,...m},y)=>{EA({GridMaterial:ym});const g=C.useRef(null);C.useImperativeHandle(y,()=>g.current,[]);const x=new en,h=new U(0,1,0),p=new U(0,0,0);Jt(B=>{x.setFromNormalAndCoplanarPoint(h,p).applyMatrix4(g.current.matrixWorld);const v=g.current.material,R=v.uniforms.worldCamProjPosition,K=v.uniforms.worldPlanePosition;x.projectPoint(B.camera.position,R.value),K.value.set(0,0,0).applyMatrix4(g.current.matrixWorld)});const b={cellSize:i,sectionSize:n,cellColor:e,sectionColor:t,cellThickness:A,sectionThickness:u},F={fadeDistance:a,fadeStrength:c,fadeFrom:d,infiniteGrid:s,followCamera:r};return C.createElement("mesh",fo({ref:g,frustumCulled:!1},m),C.createElement("gridMaterial",fo({transparent:!0,"extensions-derivatives":!0,side:f},b,F)),C.createElement("planeGeometry",{args:o}))}),fl=0,Cm=1,Al=2,Ur=2,Di=1.25,Tr=1,Rt=6*4+4+4,ui=65535,Fm=Math.pow(2,-24),Ei=Symbol("SKIP_GENERATION");function pl(o){return o.index?o.index.count:o.attributes.position.count}function xo(o){return pl(o)/3}function ml(o,e=ArrayBuffer){return o>65535?new Uint32Array(new e(4*o)):new Uint16Array(new e(2*o))}function Bm(o,e){if(!o.index){const t=o.attributes.position.count,i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=ml(t,i);o.setIndex(new me(n,1));for(let r=0;r<t;r++)n[r]=r}}function hl(o,e){const t=xo(o),i=e||o.drawRange,n=i.start/3,r=(i.start+i.count)/3,s=Math.max(0,n),a=Math.min(t,r)-s;return[{offset:Math.floor(s),count:Math.floor(a)}]}function gl(o,e){if(!o.groups||!o.groups.length)return hl(o,e);const t=[],i=new Set,n=e||o.drawRange,r=n.start/3,s=(n.start+n.count)/3;for(const c of o.groups){const d=c.start/3,A=(c.start+c.count)/3;i.add(Math.max(r,d)),i.add(Math.min(s,A))}const a=Array.from(i.values()).sort((c,d)=>c-d);for(let c=0;c<a.length-1;c++){const d=a[c],A=a[c+1];t.push({offset:Math.floor(d),count:Math.floor(A-d)})}return t}function vm(o,e){const t=xo(o),i=gl(o,e).sort((s,a)=>s.offset-a.offset),n=i[i.length-1];n.count=Math.min(t-n.offset,n.count);let r=0;return i.forEach(({count:s})=>r+=s),t!==r}function Ui(o,e,t,i,n){let r=1/0,s=1/0,a=1/0,c=-1/0,d=-1/0,A=-1/0,u=1/0,f=1/0,m=1/0,y=-1/0,g=-1/0,x=-1/0;for(let h=e*6,p=(e+t)*6;h<p;h+=6){const b=o[h+0],F=o[h+1],B=b-F,v=b+F;B<r&&(r=B),v>c&&(c=v),b<u&&(u=b),b>y&&(y=b);const R=o[h+2],K=o[h+3],S=R-K,w=R+K;S<s&&(s=S),w>d&&(d=w),R<f&&(f=R),R>g&&(g=R);const D=o[h+4],M=o[h+5],j=D-M,I=D+M;j<a&&(a=j),I>A&&(A=I),D<m&&(m=D),D>x&&(x=D)}i[0]=r,i[1]=s,i[2]=a,i[3]=c,i[4]=d,i[5]=A,n[0]=u,n[1]=f,n[2]=m,n[3]=y,n[4]=g,n[5]=x}function Rm(o,e=null,t=null,i=null){const n=o.attributes.position,r=o.index?o.index.array:null,s=xo(o),a=n.normalized;let c;e===null?(c=new Float32Array(s*6*4),t=0,i=s):(c=e,t=t||0,i=i||s);const d=n.array,A=n.offset||0;let u=3;n.isInterleavedBufferAttribute&&(u=n.data.stride);const f=["getX","getY","getZ"];for(let m=t;m<t+i;m++){const y=m*3,g=m*6;let x=y+0,h=y+1,p=y+2;r&&(x=r[x],h=r[h],p=r[p]),a||(x=x*u+A,h=h*u+A,p=p*u+A);for(let b=0;b<3;b++){let F,B,v;a?(F=n[f[b]](x),B=n[f[b]](h),v=n[f[b]](p)):(F=d[x+b],B=d[h+b],v=d[p+b]);let R=F;B<R&&(R=B),v<R&&(R=v);let K=F;B>K&&(K=B),v>K&&(K=v);const S=(K-R)/2,w=b*2;c[g+w+0]=R+S,c[g+w+1]=S+(Math.abs(R)+S)*Fm}}return c}function ce(o,e,t){return t.min.x=e[o],t.min.y=e[o+1],t.min.z=e[o+2],t.max.x=e[o+3],t.max.y=e[o+4],t.max.z=e[o+5],t}function jr(o){let e=-1,t=-1/0;for(let i=0;i<3;i++){const n=o[i+3]-o[i];n>t&&(t=n,e=i)}return e}function Ir(o,e){e.set(o)}function kr(o,e,t){let i,n;for(let r=0;r<3;r++){const s=r+3;i=o[r],n=e[r],t[r]=i<n?i:n,i=o[s],n=e[s],t[s]=i>n?i:n}}function pn(o,e,t){for(let i=0;i<3;i++){const n=e[o+2*i],r=e[o+2*i+1],s=n-r,a=n+r;s<t[i]&&(t[i]=s),a>t[i+3]&&(t[i+3]=a)}}function So(o){const e=o[3]-o[0],t=o[4]-o[1],i=o[5]-o[2];return 2*(e*t+t*i+i*e)}const st=32,Sm=(o,e)=>o.candidate-e.candidate,ht=new Array(st).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),mn=new Float32Array(6);function Mm(o,e,t,i,n,r){let s=-1,a=0;if(r===fl)s=jr(e),s!==-1&&(a=(e[s]+e[s+3])/2);else if(r===Cm)s=jr(o),s!==-1&&(a=Km(t,i,n,s));else if(r===Al){const c=So(o);let d=Di*n;const A=i*6,u=(i+n)*6;for(let f=0;f<3;f++){const m=e[f],x=(e[f+3]-m)/st;if(n<st/4){const h=[...ht];h.length=n;let p=0;for(let F=A;F<u;F+=6,p++){const B=h[p];B.candidate=t[F+2*f],B.count=0;const{bounds:v,leftCacheBounds:R,rightCacheBounds:K}=B;for(let S=0;S<3;S++)K[S]=1/0,K[S+3]=-1/0,R[S]=1/0,R[S+3]=-1/0,v[S]=1/0,v[S+3]=-1/0;pn(F,t,v)}h.sort(Sm);let b=n;for(let F=0;F<b;F++){const B=h[F];for(;F+1<b&&h[F+1].candidate===B.candidate;)h.splice(F+1,1),b--}for(let F=A;F<u;F+=6){const B=t[F+2*f];for(let v=0;v<b;v++){const R=h[v];B>=R.candidate?pn(F,t,R.rightCacheBounds):(pn(F,t,R.leftCacheBounds),R.count++)}}for(let F=0;F<b;F++){const B=h[F],v=B.count,R=n-B.count,K=B.leftCacheBounds,S=B.rightCacheBounds;let w=0;v!==0&&(w=So(K)/c);let D=0;R!==0&&(D=So(S)/c);const M=Tr+Di*(w*v+D*R);M<d&&(s=f,d=M,a=B.candidate)}}else{for(let b=0;b<st;b++){const F=ht[b];F.count=0,F.candidate=m+x+b*x;const B=F.bounds;for(let v=0;v<3;v++)B[v]=1/0,B[v+3]=-1/0}for(let b=A;b<u;b+=6){let v=~~((t[b+2*f]-m)/x);v>=st&&(v=st-1);const R=ht[v];R.count++,pn(b,t,R.bounds)}const h=ht[st-1];Ir(h.bounds,h.rightCacheBounds);for(let b=st-2;b>=0;b--){const F=ht[b],B=ht[b+1];kr(F.bounds,B.rightCacheBounds,F.rightCacheBounds)}let p=0;for(let b=0;b<st-1;b++){const F=ht[b],B=F.count,v=F.bounds,K=ht[b+1].rightCacheBounds;B!==0&&(p===0?Ir(v,mn):kr(v,mn,mn)),p+=B;let S=0,w=0;p!==0&&(S=So(mn)/c);const D=n-p;D!==0&&(w=So(K)/c);const M=Tr+Di*(S*p+w*D);M<d&&(s=f,d=M,a=F.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:s,pos:a}}function Km(o,e,t,i){let n=0;for(let r=e,s=e+t;r<s;r++)n+=o[r*6+i*2];return n/t}class Ti{constructor(){this.boundingData=new Float32Array(6)}}function wm(o,e,t,i,n,r){let s=i,a=i+n-1;const c=r.pos,d=r.axis*2;for(;;){for(;s<=a&&t[s*6+d]<c;)s++;for(;s<=a&&t[a*6+d]>=c;)a--;if(s<a){for(let A=0;A<3;A++){let u=e[s*3+A];e[s*3+A]=e[a*3+A],e[a*3+A]=u}for(let A=0;A<6;A++){let u=t[s*6+A];t[s*6+A]=t[a*6+A],t[a*6+A]=u}s++,a--}else return s}}function Dm(o,e,t,i,n,r){let s=i,a=i+n-1;const c=r.pos,d=r.axis*2;for(;;){for(;s<=a&&t[s*6+d]<c;)s++;for(;s<=a&&t[a*6+d]>=c;)a--;if(s<a){let A=o[s];o[s]=o[a],o[a]=A;for(let u=0;u<6;u++){let f=t[s*6+u];t[s*6+u]=t[a*6+u],t[a*6+u]=f}s++,a--}else return s}}function ve(o,e){return e[o+15]===65535}function we(o,e){return e[o+6]}function Ee(o,e){return e[o+14]}function He(o){return o+8}function Ue(o,e){return e[o+6]}function Hs(o,e){return e[o+7]}let xl,zo,Nn,yl;const Em=Math.pow(2,32);function As(o){return"count"in o?1:1+As(o.left)+As(o.right)}function Um(o,e,t){return xl=new Float32Array(t),zo=new Uint32Array(t),Nn=new Uint16Array(t),yl=new Uint8Array(t),ps(o,e)}function ps(o,e){const t=o/4,i=o/2,n="count"in e,r=e.boundingData;for(let s=0;s<6;s++)xl[t+s]=r[s];if(n)if(e.buffer){const s=e.buffer;yl.set(new Uint8Array(s),o);for(let a=o,c=o+s.byteLength;a<c;a+=Rt){const d=a/2;ve(d,Nn)||(zo[a/4+6]+=t)}return o+s.byteLength}else{const s=e.offset,a=e.count;return zo[t+6]=s,Nn[i+14]=a,Nn[i+15]=ui,o+Rt}else{const s=e.left,a=e.right,c=e.splitAxis;let d;if(d=ps(o+Rt,s),d/4>Em)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return zo[t+6]=d/4,d=ps(d,a),zo[t+7]=c,d}}function Tm(o,e){const t=(o.index?o.index.count:o.attributes.position.count)/3,i=t>2**16,n=i?4:2,r=e?new SharedArrayBuffer(t*n):new ArrayBuffer(t*n),s=i?new Uint32Array(r):new Uint16Array(r);for(let a=0,c=s.length;a<c;a++)s[a]=a;return s}function jm(o,e,t,i,n){const{maxDepth:r,verbose:s,maxLeafTris:a,strategy:c,onProgress:d,indirect:A}=n,u=o._indirectBuffer,f=o.geometry,m=f.index?f.index.array:null,y=A?Dm:wm,g=xo(f),x=new Float32Array(6);let h=!1;const p=new Ti;return Ui(e,t,i,p.boundingData,x),F(p,t,i,x),p;function b(B){d&&d(B/g)}function F(B,v,R,K=null,S=0){if(!h&&S>=r&&(h=!0,s&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(f))),R<=a||S>=r)return b(v+R),B.offset=v,B.count=R,B;const w=Mm(B.boundingData,K,e,v,R,c);if(w.axis===-1)return b(v+R),B.offset=v,B.count=R,B;const D=y(u,m,e,v,R,w);if(D===v||D===v+R)b(v+R),B.offset=v,B.count=R;else{B.splitAxis=w.axis;const M=new Ti,j=v,I=D-v;B.left=M,Ui(e,j,I,M.boundingData,x),F(M,j,I,x,S+1);const H=new Ti,z=D,k=R-I;B.right=H,Ui(e,z,k,H.boundingData,x),F(H,z,k,x,S+1)}return B}}function Im(o,e){const t=o.geometry;e.indirect&&(o._indirectBuffer=Tm(t,e.useSharedArrayBuffer),vm(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),o._indirectBuffer||Bm(t,e);const i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=Rm(t),r=e.indirect?hl(t,e.range):gl(t,e.range);o._roots=r.map(s=>{const a=jm(o,n,s.offset,s.count,e),c=As(a),d=new i(Rt*c);return Um(0,a,d),d})}class dt{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let i=1/0,n=-1/0;for(let r=0,s=e.length;r<s;r++){const c=e[r][t];i=c<i?c:i,n=c>n?c:n}this.min=i,this.max=n}setFromPoints(e,t){let i=1/0,n=-1/0;for(let r=0,s=t.length;r<s;r++){const a=t[r],c=e.dot(a);i=c<i?c:i,n=c>n?c:n}this.min=i,this.max=n}isSeparated(e){return this.min>e.max||e.min>this.max}}dt.prototype.setFromBox=function(){const o=new U;return function(t,i){const n=i.min,r=i.max;let s=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let d=0;d<=1;d++)for(let A=0;A<=1;A++){o.x=n.x*c+r.x*(1-c),o.y=n.y*d+r.y*(1-d),o.z=n.z*A+r.z*(1-A);const u=t.dot(o);s=Math.min(u,s),a=Math.max(u,a)}this.min=s,this.max=a}}();const km=function(){const o=new U,e=new U,t=new U;return function(n,r,s){const a=n.start,c=o,d=r.start,A=e;t.subVectors(a,d),o.subVectors(n.end,n.start),e.subVectors(r.end,r.start);const u=t.dot(A),f=A.dot(c),m=A.dot(A),y=t.dot(c),x=c.dot(c)*m-f*f;let h,p;x!==0?h=(u*f-y*m)/x:h=0,p=(u+h*f)/m,s.x=h,s.y=p}}(),Os=function(){const o=new Ie,e=new U,t=new U;return function(n,r,s,a){km(n,r,o);let c=o.x,d=o.y;if(c>=0&&c<=1&&d>=0&&d<=1){n.at(c,s),r.at(d,a);return}else if(c>=0&&c<=1){d<0?r.at(0,a):r.at(1,a),n.closestPointToPoint(a,!0,s);return}else if(d>=0&&d<=1){c<0?n.at(0,s):n.at(1,s),r.closestPointToPoint(s,!0,a);return}else{let A;c<0?A=n.start:A=n.end;let u;d<0?u=r.start:u=r.end;const f=e,m=t;if(n.closestPointToPoint(u,!0,e),r.closestPointToPoint(A,!0,t),f.distanceToSquared(u)<=m.distanceToSquared(A)){s.copy(f),a.copy(u);return}else{s.copy(A),a.copy(m);return}}}}(),zm=function(){const o=new U,e=new U,t=new en,i=new ot;return function(r,s){const{radius:a,center:c}=r,{a:d,b:A,c:u}=s;if(i.start=d,i.end=A,i.closestPointToPoint(c,!0,o).distanceTo(c)<=a||(i.start=d,i.end=u,i.closestPointToPoint(c,!0,o).distanceTo(c)<=a)||(i.start=A,i.end=u,i.closestPointToPoint(c,!0,o).distanceTo(c)<=a))return!0;const g=s.getPlane(t);if(Math.abs(g.distanceToPoint(c))<=a){const h=g.projectPoint(c,e);if(s.containsPoint(h))return!0}return!1}}(),Pm=1e-15;function ji(o){return Math.abs(o)<Pm}class Ze extends ko{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new U),this.satBounds=new Array(4).fill().map(()=>new dt),this.points=[this.a,this.b,this.c],this.sphere=new ii,this.plane=new en,this.needsUpdate=!0}intersectsSphere(e){return zm(e,this)}update(){const e=this.a,t=this.b,i=this.c,n=this.points,r=this.satAxes,s=this.satBounds,a=r[0],c=s[0];this.getNormal(a),c.setFromPoints(a,n);const d=r[1],A=s[1];d.subVectors(e,t),A.setFromPoints(d,n);const u=r[2],f=s[2];u.subVectors(t,i),f.setFromPoints(u,n);const m=r[3],y=s[3];m.subVectors(i,e),y.setFromPoints(m,n),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}}Ze.prototype.closestPointToSegment=function(){const o=new U,e=new U,t=new ot;return function(n,r=null,s=null){const{start:a,end:c}=n,d=this.points;let A,u=1/0;for(let f=0;f<3;f++){const m=(f+1)%3;t.start.copy(d[f]),t.end.copy(d[m]),Os(t,n,o,e),A=o.distanceToSquared(e),A<u&&(u=A,r&&r.copy(o),s&&s.copy(e))}return this.closestPointToPoint(a,o),A=a.distanceToSquared(o),A<u&&(u=A,r&&r.copy(o),s&&s.copy(a)),this.closestPointToPoint(c,o),A=c.distanceToSquared(o),A<u&&(u=A,r&&r.copy(o),s&&s.copy(c)),Math.sqrt(u)}}();Ze.prototype.intersectsTriangle=function(){const o=new Ze,e=new Array(3),t=new Array(3),i=new dt,n=new dt,r=new U,s=new U,a=new U,c=new U,d=new U,A=new ot,u=new ot,f=new ot,m=new U;function y(g,x,h){const p=g.points;let b=0,F=-1;for(let B=0;B<3;B++){const{start:v,end:R}=A;v.copy(p[B]),R.copy(p[(B+1)%3]),A.delta(s);const K=ji(x.distanceToPoint(v));if(ji(x.normal.dot(s))&&K){h.copy(A),b=2;break}const S=x.intersectLine(A,m);if(!S&&K&&m.copy(v),(S||K)&&!ji(m.distanceTo(R))){if(b<=1)(b===1?h.start:h.end).copy(m),K&&(F=b);else if(b>=2){(F===1?h.start:h.end).copy(m),b=2;break}if(b++,b===2&&F===-1)break}}return b}return function(x,h=null,p=!1){this.needsUpdate&&this.update(),x.isExtendedTriangle?x.needsUpdate&&x.update():(o.copy(x),o.update(),x=o);const b=this.plane,F=x.plane;if(Math.abs(b.normal.dot(F.normal))>1-1e-10){const B=this.satBounds,v=this.satAxes;t[0]=x.a,t[1]=x.b,t[2]=x.c;for(let S=0;S<4;S++){const w=B[S],D=v[S];if(i.setFromPoints(D,t),w.isSeparated(i))return!1}const R=x.satBounds,K=x.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let S=0;S<4;S++){const w=R[S],D=K[S];if(i.setFromPoints(D,e),w.isSeparated(i))return!1}for(let S=0;S<4;S++){const w=v[S];for(let D=0;D<4;D++){const M=K[D];if(r.crossVectors(w,M),i.setFromPoints(r,e),n.setFromPoints(r,t),i.isSeparated(n))return!1}}return h&&(p||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),h.start.set(0,0,0),h.end.set(0,0,0)),!0}else{const B=y(this,F,u);if(B===1&&x.containsPoint(u.end))return h&&(h.start.copy(u.end),h.end.copy(u.end)),!0;if(B!==2)return!1;const v=y(x,b,f);if(v===1&&this.containsPoint(f.end))return h&&(h.start.copy(f.end),h.end.copy(f.end)),!0;if(v!==2)return!1;if(u.delta(a),f.delta(c),a.dot(c)<0){let j=f.start;f.start=f.end,f.end=j}const R=u.start.dot(a),K=u.end.dot(a),S=f.start.dot(a),w=f.end.dot(a),D=K<S,M=R<w;return R!==w&&S!==K&&D===M?!1:(h&&(d.subVectors(u.start,f.start),d.dot(a)>0?h.start.copy(u.start):h.start.copy(f.start),d.subVectors(u.end,f.end),d.dot(a)<0?h.end.copy(u.end):h.end.copy(f.end)),!0)}}}();Ze.prototype.distanceToPoint=function(){const o=new U;return function(t){return this.closestPointToPoint(t,o),t.distanceTo(o)}}();Ze.prototype.distanceToTriangle=function(){const o=new U,e=new U,t=["a","b","c"],i=new ot,n=new ot;return function(s,a=null,c=null){const d=a||c?i:null;if(this.intersectsTriangle(s,d))return(a||c)&&(a&&d.getCenter(a),c&&d.getCenter(c)),0;let A=1/0;for(let u=0;u<3;u++){let f;const m=t[u],y=s[m];this.closestPointToPoint(y,o),f=y.distanceToSquared(o),f<A&&(A=f,a&&a.copy(o),c&&c.copy(y));const g=this[m];s.closestPointToPoint(g,o),f=g.distanceToSquared(o),f<A&&(A=f,a&&a.copy(g),c&&c.copy(o))}for(let u=0;u<3;u++){const f=t[u],m=t[(u+1)%3];i.set(this[f],this[m]);for(let y=0;y<3;y++){const g=t[y],x=t[(y+1)%3];n.set(s[g],s[x]),Os(i,n,o,e);const h=o.distanceToSquared(e);h<A&&(A=h,a&&a.copy(o),c&&c.copy(e))}}return Math.sqrt(A)}}();class Se{constructor(e,t,i){this.isOrientedBox=!0,this.min=new U,this.max=new U,this.matrix=new Y,this.invMatrix=new Y,this.points=new Array(8).fill().map(()=>new U),this.satAxes=new Array(3).fill().map(()=>new U),this.satBounds=new Array(3).fill().map(()=>new dt),this.alignedSatBounds=new Array(3).fill().map(()=>new dt),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),i&&this.matrix.copy(i)}set(e,t,i){this.min.copy(e),this.max.copy(t),this.matrix.copy(i),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}Se.prototype.update=function(){return function(){const e=this.matrix,t=this.min,i=this.max,n=this.points;for(let d=0;d<=1;d++)for(let A=0;A<=1;A++)for(let u=0;u<=1;u++){const f=1*d|2*A|4*u,m=n[f];m.x=d?i.x:t.x,m.y=A?i.y:t.y,m.z=u?i.z:t.z,m.applyMatrix4(e)}const r=this.satBounds,s=this.satAxes,a=n[0];for(let d=0;d<3;d++){const A=s[d],u=r[d],f=1<<d,m=n[f];A.subVectors(a,m),u.setFromPoints(A,n)}const c=this.alignedSatBounds;c[0].setFromPointsField(n,"x"),c[1].setFromPointsField(n,"y"),c[2].setFromPointsField(n,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();Se.prototype.intersectsBox=function(){const o=new dt;return function(t){this.needsUpdate&&this.update();const i=t.min,n=t.max,r=this.satBounds,s=this.satAxes,a=this.alignedSatBounds;if(o.min=i.x,o.max=n.x,a[0].isSeparated(o)||(o.min=i.y,o.max=n.y,a[1].isSeparated(o))||(o.min=i.z,o.max=n.z,a[2].isSeparated(o)))return!1;for(let c=0;c<3;c++){const d=s[c],A=r[c];if(o.setFromBox(d,t),A.isSeparated(o))return!1}return!0}}();Se.prototype.intersectsTriangle=function(){const o=new Ze,e=new Array(3),t=new dt,i=new dt,n=new U;return function(s){this.needsUpdate&&this.update(),s.isExtendedTriangle?s.needsUpdate&&s.update():(o.copy(s),o.update(),s=o);const a=this.satBounds,c=this.satAxes;e[0]=s.a,e[1]=s.b,e[2]=s.c;for(let f=0;f<3;f++){const m=a[f],y=c[f];if(t.setFromPoints(y,e),m.isSeparated(t))return!1}const d=s.satBounds,A=s.satAxes,u=this.points;for(let f=0;f<3;f++){const m=d[f],y=A[f];if(t.setFromPoints(y,u),m.isSeparated(t))return!1}for(let f=0;f<3;f++){const m=c[f];for(let y=0;y<4;y++){const g=A[y];if(n.crossVectors(m,g),t.setFromPoints(n,e),i.setFromPoints(n,u),t.isSeparated(i))return!1}}return!0}}();Se.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();Se.prototype.distanceToPoint=function(){const o=new U;return function(t){return this.closestPointToPoint(t,o),t.distanceTo(o)}}();Se.prototype.distanceToBox=function(){const o=["x","y","z"],e=new Array(12).fill().map(()=>new ot),t=new Array(12).fill().map(()=>new ot),i=new U,n=new U;return function(s,a=0,c=null,d=null){if(this.needsUpdate&&this.update(),this.intersectsBox(s))return(c||d)&&(s.getCenter(n),this.closestPointToPoint(n,i),s.closestPointToPoint(i,n),c&&c.copy(i),d&&d.copy(n)),0;const A=a*a,u=s.min,f=s.max,m=this.points;let y=1/0;for(let x=0;x<8;x++){const h=m[x];n.copy(h).clamp(u,f);const p=h.distanceToSquared(n);if(p<y&&(y=p,c&&c.copy(h),d&&d.copy(n),p<A))return Math.sqrt(p)}let g=0;for(let x=0;x<3;x++)for(let h=0;h<=1;h++)for(let p=0;p<=1;p++){const b=(x+1)%3,F=(x+2)%3,B=h<<b|p<<F,v=1<<x|h<<b|p<<F,R=m[B],K=m[v];e[g].set(R,K);const w=o[x],D=o[b],M=o[F],j=t[g],I=j.start,H=j.end;I[w]=u[w],I[D]=h?u[D]:f[D],I[M]=p?u[M]:f[D],H[w]=f[w],H[D]=h?u[D]:f[D],H[M]=p?u[M]:f[D],g++}for(let x=0;x<=1;x++)for(let h=0;h<=1;h++)for(let p=0;p<=1;p++){n.x=x?f.x:u.x,n.y=h?f.y:u.y,n.z=p?f.z:u.z,this.closestPointToPoint(n,i);const b=n.distanceToSquared(i);if(b<y&&(y=b,c&&c.copy(i),d&&d.copy(n),b<A))return Math.sqrt(b)}for(let x=0;x<12;x++){const h=e[x];for(let p=0;p<12;p++){const b=t[p];Os(h,b,i,n);const F=i.distanceToSquared(n);if(F<y&&(y=F,c&&c.copy(i),d&&d.copy(n),F<A))return Math.sqrt(F)}}return Math.sqrt(y)}}();class Gs{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class Hm extends Gs{constructor(){super(()=>new Ze)}}const Oe=new Hm;class Om{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=i=>{t&&e.push(t),t=i,this.float32Array=new Float32Array(i),this.uint16Array=new Uint16Array(i),this.uint32Array=new Uint32Array(i)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const ae=new Om;let Ft,co;const Vt=[],hn=new Gs(()=>new de);function Gm(o,e,t,i,n,r){Ft=hn.getPrimitive(),co=hn.getPrimitive(),Vt.push(Ft,co),ae.setBuffer(o._roots[e]);const s=ms(0,o.geometry,t,i,n,r);ae.clearBuffer(),hn.releasePrimitive(Ft),hn.releasePrimitive(co),Vt.pop(),Vt.pop();const a=Vt.length;return a>0&&(co=Vt[a-1],Ft=Vt[a-2]),s}function ms(o,e,t,i,n=null,r=0,s=0){const{float32Array:a,uint16Array:c,uint32Array:d}=ae;let A=o*2;if(ve(A,c)){const f=we(o,d),m=Ee(A,c);return ce(o,a,Ft),i(f,m,!1,s,r+o,Ft)}else{let w=function(M){const{uint16Array:j,uint32Array:I}=ae;let H=M*2;for(;!ve(H,j);)M=He(M),H=M*2;return we(M,I)},D=function(M){const{uint16Array:j,uint32Array:I}=ae;let H=M*2;for(;!ve(H,j);)M=Ue(M,I),H=M*2;return we(M,I)+Ee(H,j)};const f=He(o),m=Ue(o,d);let y=f,g=m,x,h,p,b;if(n&&(p=Ft,b=co,ce(y,a,p),ce(g,a,b),x=n(p),h=n(b),h<x)){y=m,g=f;const M=x;x=h,h=M,p=b}p||(p=Ft,ce(y,a,p));const F=ve(y*2,c),B=t(p,F,x,s+1,r+y);let v;if(B===Ur){const M=w(y),I=D(y)-M;v=i(M,I,!0,s+1,r+y,p)}else v=B&&ms(y,e,t,i,n,r,s+1);if(v)return!0;b=co,ce(g,a,b);const R=ve(g*2,c),K=t(b,R,h,s+1,r+g);let S;if(K===Ur){const M=w(g),I=D(g)-M;S=i(M,I,!0,s+1,r+g,b)}else S=K&&ms(g,e,t,i,n,r,s+1);return!!S}}const Mo=new U,Ii=new U;function Nm(o,e,t={},i=0,n=1/0){const r=i*i,s=n*n;let a=1/0,c=null;if(o.shapecast({boundsTraverseOrder:A=>(Mo.copy(e).clamp(A.min,A.max),Mo.distanceToSquared(e)),intersectsBounds:(A,u,f)=>f<a&&f<s,intersectsTriangle:(A,u)=>{A.closestPointToPoint(e,Mo);const f=e.distanceToSquared(Mo);return f<a&&(Ii.copy(Mo),a=f,c=u),f<r}}),a===1/0)return null;const d=Math.sqrt(a);return t.point?t.point.copy(Ii):t.point=Ii.clone(),t.distance=d,t.faceIndex=c,t}const Xt=new U,Yt=new U,Zt=new U,gn=new Ie,xn=new Ie,yn=new Ie,zr=new U,Pr=new U,Hr=new U,bn=new U;function Lm(o,e,t,i,n,r,s,a){let c;if(r===ni?c=o.intersectTriangle(i,t,e,!0,n):c=o.intersectTriangle(e,t,i,r!==Lt,n),c===null)return null;const d=o.origin.distanceTo(n);return d<s||d>a?null:{distance:d,point:n.clone()}}function Jm(o,e,t,i,n,r,s,a,c,d,A){Xt.fromBufferAttribute(e,r),Yt.fromBufferAttribute(e,s),Zt.fromBufferAttribute(e,a);const u=Lm(o,Xt,Yt,Zt,bn,c,d,A);if(u){i&&(gn.fromBufferAttribute(i,r),xn.fromBufferAttribute(i,s),yn.fromBufferAttribute(i,a),u.uv=ko.getInterpolation(bn,Xt,Yt,Zt,gn,xn,yn,new Ie)),n&&(gn.fromBufferAttribute(n,r),xn.fromBufferAttribute(n,s),yn.fromBufferAttribute(n,a),u.uv1=ko.getInterpolation(bn,Xt,Yt,Zt,gn,xn,yn,new Ie)),t&&(zr.fromBufferAttribute(t,r),Pr.fromBufferAttribute(t,s),Hr.fromBufferAttribute(t,a),u.normal=ko.getInterpolation(bn,Xt,Yt,Zt,zr,Pr,Hr,new U),u.normal.dot(o.direction)>0&&u.normal.multiplyScalar(-1));const f={a:r,b:s,c:a,normal:new U,materialIndex:0};ko.getNormal(Xt,Yt,Zt,f.normal),u.face=f,u.faceIndex=r}return u}function di(o,e,t,i,n,r,s){const a=i*3;let c=a+0,d=a+1,A=a+2;const u=o.index;o.index&&(c=u.getX(c),d=u.getX(d),A=u.getX(A));const{position:f,normal:m,uv:y,uv1:g}=o.attributes,x=Jm(t,f,m,y,g,c,d,A,e,r,s);return x?(x.faceIndex=i,n&&n.push(x),x):null}function pe(o,e,t,i){const n=o.a,r=o.b,s=o.c;let a=e,c=e+1,d=e+2;t&&(a=t.getX(a),c=t.getX(c),d=t.getX(d)),n.x=i.getX(a),n.y=i.getY(a),n.z=i.getZ(a),r.x=i.getX(c),r.y=i.getY(c),r.z=i.getZ(c),s.x=i.getX(d),s.y=i.getY(d),s.z=i.getZ(d)}function Qm(o,e,t,i,n,r,s,a){const{geometry:c,_indirectBuffer:d}=o;for(let A=i,u=i+n;A<u;A++)di(c,e,t,A,r,s,a)}function Wm(o,e,t,i,n,r,s){const{geometry:a,_indirectBuffer:c}=o;let d=1/0,A=null;for(let u=i,f=i+n;u<f;u++){let m;m=di(a,e,t,u,null,r,s),m&&m.distance<d&&(A=m,d=m.distance)}return A}function Vm(o,e,t,i,n,r,s){const{geometry:a}=t,{index:c}=a,d=a.attributes.position;for(let A=o,u=e+o;A<u;A++){let f;if(f=A,pe(s,f*3,c,d),s.needsUpdate=!0,i(s,f,n,r))return!0}return!1}function Xm(o,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=o.geometry,i=t.index?t.index.array:null,n=t.attributes.position;let r,s,a,c,d=0;const A=o._roots;for(let f=0,m=A.length;f<m;f++)r=A[f],s=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),u(0,d),d+=r.byteLength;function u(f,m,y=!1){const g=f*2;if(a[g+15]===ui){const h=s[f+6],p=a[g+14];let b=1/0,F=1/0,B=1/0,v=-1/0,R=-1/0,K=-1/0;for(let S=3*h,w=3*(h+p);S<w;S++){let D=i[S];const M=n.getX(D),j=n.getY(D),I=n.getZ(D);M<b&&(b=M),M>v&&(v=M),j<F&&(F=j),j>R&&(R=j),I<B&&(B=I),I>K&&(K=I)}return c[f+0]!==b||c[f+1]!==F||c[f+2]!==B||c[f+3]!==v||c[f+4]!==R||c[f+5]!==K?(c[f+0]=b,c[f+1]=F,c[f+2]=B,c[f+3]=v,c[f+4]=R,c[f+5]=K,!0):!1}else{const h=f+8,p=s[f+6],b=h+m,F=p+m;let B=y,v=!1,R=!1;e?B||(v=e.has(b),R=e.has(F),B=!v&&!R):(v=!0,R=!0);const K=B||v,S=B||R;let w=!1;K&&(w=u(h,m,B));let D=!1;S&&(D=u(p,m,B));const M=w||D;if(M)for(let j=0;j<3;j++){const I=h+j,H=p+j,z=c[I],k=c[I+3],T=c[H],E=c[H+3];c[f+j]=z<T?z:T,c[f+j+3]=k>E?k:E}return M}}}function Kt(o,e,t,i,n){let r,s,a,c,d,A;const u=1/t.direction.x,f=1/t.direction.y,m=1/t.direction.z,y=t.origin.x,g=t.origin.y,x=t.origin.z;let h=e[o],p=e[o+3],b=e[o+1],F=e[o+3+1],B=e[o+2],v=e[o+3+2];return u>=0?(r=(h-y)*u,s=(p-y)*u):(r=(p-y)*u,s=(h-y)*u),f>=0?(a=(b-g)*f,c=(F-g)*f):(a=(F-g)*f,c=(b-g)*f),r>c||a>s||((a>r||isNaN(r))&&(r=a),(c<s||isNaN(s))&&(s=c),m>=0?(d=(B-x)*m,A=(v-x)*m):(d=(v-x)*m,A=(B-x)*m),r>A||d>s)?!1:((d>r||r!==r)&&(r=d),(A<s||s!==s)&&(s=A),r<=n&&s>=i)}function Ym(o,e,t,i,n,r,s,a){const{geometry:c,_indirectBuffer:d}=o;for(let A=i,u=i+n;A<u;A++){let f=d?d[A]:A;di(c,e,t,f,r,s,a)}}function Zm(o,e,t,i,n,r,s){const{geometry:a,_indirectBuffer:c}=o;let d=1/0,A=null;for(let u=i,f=i+n;u<f;u++){let m;m=di(a,e,t,c?c[u]:u,null,r,s),m&&m.distance<d&&(A=m,d=m.distance)}return A}function qm(o,e,t,i,n,r,s){const{geometry:a}=t,{index:c}=a,d=a.attributes.position;for(let A=o,u=e+o;A<u;A++){let f;if(f=t.resolveTriangleIndex(A),pe(s,f*3,c,d),s.needsUpdate=!0,i(s,f,n,r))return!0}return!1}function _m(o,e,t,i,n,r,s){ae.setBuffer(o._roots[e]),hs(0,o,t,i,n,r,s),ae.clearBuffer()}function hs(o,e,t,i,n,r,s){const{float32Array:a,uint16Array:c,uint32Array:d}=ae,A=o*2;if(ve(A,c)){const f=we(o,d),m=Ee(A,c);Qm(e,t,i,f,m,n,r,s)}else{const f=He(o);Kt(f,a,i,r,s)&&hs(f,e,t,i,n,r,s);const m=Ue(o,d);Kt(m,a,i,r,s)&&hs(m,e,t,i,n,r,s)}}const $m=["x","y","z"];function eh(o,e,t,i,n,r){ae.setBuffer(o._roots[e]);const s=gs(0,o,t,i,n,r);return ae.clearBuffer(),s}function gs(o,e,t,i,n,r){const{float32Array:s,uint16Array:a,uint32Array:c}=ae;let d=o*2;if(ve(d,a)){const u=we(o,c),f=Ee(d,a);return Wm(e,t,i,u,f,n,r)}else{const u=Hs(o,c),f=$m[u],y=i.direction[f]>=0;let g,x;y?(g=He(o),x=Ue(o,c)):(g=Ue(o,c),x=He(o));const p=Kt(g,s,i,n,r)?gs(g,e,t,i,n,r):null;if(p){const B=p.point[f];if(y?B<=s[x+u]:B>=s[x+u+3])return p}const F=Kt(x,s,i,n,r)?gs(x,e,t,i,n,r):null;return p&&F?p.distance<=F.distance?p:F:p||F||null}}const Cn=new de,qt=new Ze,_t=new Ze,Ko=new Y,Or=new Se,Fn=new Se;function th(o,e,t,i){ae.setBuffer(o._roots[e]);const n=xs(0,o,t,i);return ae.clearBuffer(),n}function xs(o,e,t,i,n=null){const{float32Array:r,uint16Array:s,uint32Array:a}=ae;let c=o*2;if(n===null&&(t.boundingBox||t.computeBoundingBox(),Or.set(t.boundingBox.min,t.boundingBox.max,i),n=Or),ve(c,s)){const A=e.geometry,u=A.index,f=A.attributes.position,m=t.index,y=t.attributes.position,g=we(o,a),x=Ee(c,s);if(Ko.copy(i).invert(),t.boundsTree)return ce(o,r,Fn),Fn.matrix.copy(Ko),Fn.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:p=>Fn.intersectsBox(p),intersectsTriangle:p=>{p.a.applyMatrix4(i),p.b.applyMatrix4(i),p.c.applyMatrix4(i),p.needsUpdate=!0;for(let b=g*3,F=(x+g)*3;b<F;b+=3)if(pe(_t,b,u,f),_t.needsUpdate=!0,p.intersectsTriangle(_t))return!0;return!1}});for(let h=g*3,p=(x+g)*3;h<p;h+=3){pe(qt,h,u,f),qt.a.applyMatrix4(Ko),qt.b.applyMatrix4(Ko),qt.c.applyMatrix4(Ko),qt.needsUpdate=!0;for(let b=0,F=m.count;b<F;b+=3)if(pe(_t,b,m,y),_t.needsUpdate=!0,qt.intersectsTriangle(_t))return!0}}else{const A=o+8,u=a[o+6];return ce(A,r,Cn),!!(n.intersectsBox(Cn)&&xs(A,e,t,i,n)||(ce(u,r,Cn),n.intersectsBox(Cn)&&xs(u,e,t,i,n)))}}const Bn=new Y,ki=new Se,wo=new Se,oh=new U,nh=new U,ih=new U,sh=new U;function rh(o,e,t,i={},n={},r=0,s=1/0){e.boundingBox||e.computeBoundingBox(),ki.set(e.boundingBox.min,e.boundingBox.max,t),ki.needsUpdate=!0;const a=o.geometry,c=a.attributes.position,d=a.index,A=e.attributes.position,u=e.index,f=Oe.getPrimitive(),m=Oe.getPrimitive();let y=oh,g=nh,x=null,h=null;n&&(x=ih,h=sh);let p=1/0,b=null,F=null;return Bn.copy(t).invert(),wo.matrix.copy(Bn),o.shapecast({boundsTraverseOrder:B=>ki.distanceToBox(B),intersectsBounds:(B,v,R)=>R<p&&R<s?(v&&(wo.min.copy(B.min),wo.max.copy(B.max),wo.needsUpdate=!0),!0):!1,intersectsRange:(B,v)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:K=>wo.distanceToBox(K),intersectsBounds:(K,S,w)=>w<p&&w<s,intersectsRange:(K,S)=>{for(let w=K,D=K+S;w<D;w++){pe(m,3*w,u,A),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let M=B,j=B+v;M<j;M++){pe(f,3*M,d,c),f.needsUpdate=!0;const I=f.distanceToTriangle(m,y,x);if(I<p&&(g.copy(y),h&&h.copy(x),p=I,b=M,F=w),I<r)return!0}}}});{const R=xo(e);for(let K=0,S=R;K<S;K++){pe(m,3*K,u,A),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let w=B,D=B+v;w<D;w++){pe(f,3*w,d,c),f.needsUpdate=!0;const M=f.distanceToTriangle(m,y,x);if(M<p&&(g.copy(y),h&&h.copy(x),p=M,b=w,F=K),M<r)return!0}}}}}),Oe.releasePrimitive(f),Oe.releasePrimitive(m),p===1/0?null:(i.point?i.point.copy(g):i.point=g.clone(),i.distance=p,i.faceIndex=b,n&&(n.point?n.point.copy(h):n.point=h.clone(),n.point.applyMatrix4(Bn),g.applyMatrix4(Bn),n.distance=g.sub(n.point).length(),n.faceIndex=F),i)}function ah(o,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=o.geometry,i=t.index?t.index.array:null,n=t.attributes.position;let r,s,a,c,d=0;const A=o._roots;for(let f=0,m=A.length;f<m;f++)r=A[f],s=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),u(0,d),d+=r.byteLength;function u(f,m,y=!1){const g=f*2;if(a[g+15]===ui){const h=s[f+6],p=a[g+14];let b=1/0,F=1/0,B=1/0,v=-1/0,R=-1/0,K=-1/0;for(let S=h,w=h+p;S<w;S++){const D=3*o.resolveTriangleIndex(S);for(let M=0;M<3;M++){let j=D+M;j=i?i[j]:j;const I=n.getX(j),H=n.getY(j),z=n.getZ(j);I<b&&(b=I),I>v&&(v=I),H<F&&(F=H),H>R&&(R=H),z<B&&(B=z),z>K&&(K=z)}}return c[f+0]!==b||c[f+1]!==F||c[f+2]!==B||c[f+3]!==v||c[f+4]!==R||c[f+5]!==K?(c[f+0]=b,c[f+1]=F,c[f+2]=B,c[f+3]=v,c[f+4]=R,c[f+5]=K,!0):!1}else{const h=f+8,p=s[f+6],b=h+m,F=p+m;let B=y,v=!1,R=!1;e?B||(v=e.has(b),R=e.has(F),B=!v&&!R):(v=!0,R=!0);const K=B||v,S=B||R;let w=!1;K&&(w=u(h,m,B));let D=!1;S&&(D=u(p,m,B));const M=w||D;if(M)for(let j=0;j<3;j++){const I=h+j,H=p+j,z=c[I],k=c[I+3],T=c[H],E=c[H+3];c[f+j]=z<T?z:T,c[f+j+3]=k>E?k:E}return M}}}function lh(o,e,t,i,n,r,s){ae.setBuffer(o._roots[e]),ys(0,o,t,i,n,r,s),ae.clearBuffer()}function ys(o,e,t,i,n,r,s){const{float32Array:a,uint16Array:c,uint32Array:d}=ae,A=o*2;if(ve(A,c)){const f=we(o,d),m=Ee(A,c);Ym(e,t,i,f,m,n,r,s)}else{const f=He(o);Kt(f,a,i,r,s)&&ys(f,e,t,i,n,r,s);const m=Ue(o,d);Kt(m,a,i,r,s)&&ys(m,e,t,i,n,r,s)}}const ch=["x","y","z"];function uh(o,e,t,i,n,r){ae.setBuffer(o._roots[e]);const s=bs(0,o,t,i,n,r);return ae.clearBuffer(),s}function bs(o,e,t,i,n,r){const{float32Array:s,uint16Array:a,uint32Array:c}=ae;let d=o*2;if(ve(d,a)){const u=we(o,c),f=Ee(d,a);return Zm(e,t,i,u,f,n,r)}else{const u=Hs(o,c),f=ch[u],y=i.direction[f]>=0;let g,x;y?(g=He(o),x=Ue(o,c)):(g=Ue(o,c),x=He(o));const p=Kt(g,s,i,n,r)?bs(g,e,t,i,n,r):null;if(p){const B=p.point[f];if(y?B<=s[x+u]:B>=s[x+u+3])return p}const F=Kt(x,s,i,n,r)?bs(x,e,t,i,n,r):null;return p&&F?p.distance<=F.distance?p:F:p||F||null}}const vn=new de,$t=new Ze,eo=new Ze,Do=new Y,Gr=new Se,Rn=new Se;function dh(o,e,t,i){ae.setBuffer(o._roots[e]);const n=Cs(0,o,t,i);return ae.clearBuffer(),n}function Cs(o,e,t,i,n=null){const{float32Array:r,uint16Array:s,uint32Array:a}=ae;let c=o*2;if(n===null&&(t.boundingBox||t.computeBoundingBox(),Gr.set(t.boundingBox.min,t.boundingBox.max,i),n=Gr),ve(c,s)){const A=e.geometry,u=A.index,f=A.attributes.position,m=t.index,y=t.attributes.position,g=we(o,a),x=Ee(c,s);if(Do.copy(i).invert(),t.boundsTree)return ce(o,r,Rn),Rn.matrix.copy(Do),Rn.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:p=>Rn.intersectsBox(p),intersectsTriangle:p=>{p.a.applyMatrix4(i),p.b.applyMatrix4(i),p.c.applyMatrix4(i),p.needsUpdate=!0;for(let b=g,F=x+g;b<F;b++)if(pe(eo,3*e.resolveTriangleIndex(b),u,f),eo.needsUpdate=!0,p.intersectsTriangle(eo))return!0;return!1}});for(let h=g,p=x+g;h<p;h++){const b=e.resolveTriangleIndex(h);pe($t,3*b,u,f),$t.a.applyMatrix4(Do),$t.b.applyMatrix4(Do),$t.c.applyMatrix4(Do),$t.needsUpdate=!0;for(let F=0,B=m.count;F<B;F+=3)if(pe(eo,F,m,y),eo.needsUpdate=!0,$t.intersectsTriangle(eo))return!0}}else{const A=o+8,u=a[o+6];return ce(A,r,vn),!!(n.intersectsBox(vn)&&Cs(A,e,t,i,n)||(ce(u,r,vn),n.intersectsBox(vn)&&Cs(u,e,t,i,n)))}}const Sn=new Y,zi=new Se,Eo=new Se,fh=new U,Ah=new U,ph=new U,mh=new U;function hh(o,e,t,i={},n={},r=0,s=1/0){e.boundingBox||e.computeBoundingBox(),zi.set(e.boundingBox.min,e.boundingBox.max,t),zi.needsUpdate=!0;const a=o.geometry,c=a.attributes.position,d=a.index,A=e.attributes.position,u=e.index,f=Oe.getPrimitive(),m=Oe.getPrimitive();let y=fh,g=Ah,x=null,h=null;n&&(x=ph,h=mh);let p=1/0,b=null,F=null;return Sn.copy(t).invert(),Eo.matrix.copy(Sn),o.shapecast({boundsTraverseOrder:B=>zi.distanceToBox(B),intersectsBounds:(B,v,R)=>R<p&&R<s?(v&&(Eo.min.copy(B.min),Eo.max.copy(B.max),Eo.needsUpdate=!0),!0):!1,intersectsRange:(B,v)=>{if(e.boundsTree){const R=e.boundsTree;return R.shapecast({boundsTraverseOrder:K=>Eo.distanceToBox(K),intersectsBounds:(K,S,w)=>w<p&&w<s,intersectsRange:(K,S)=>{for(let w=K,D=K+S;w<D;w++){const M=R.resolveTriangleIndex(w);pe(m,3*M,u,A),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let j=B,I=B+v;j<I;j++){const H=o.resolveTriangleIndex(j);pe(f,3*H,d,c),f.needsUpdate=!0;const z=f.distanceToTriangle(m,y,x);if(z<p&&(g.copy(y),h&&h.copy(x),p=z,b=j,F=w),z<r)return!0}}}})}else{const R=xo(e);for(let K=0,S=R;K<S;K++){pe(m,3*K,u,A),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let w=B,D=B+v;w<D;w++){const M=o.resolveTriangleIndex(w);pe(f,3*M,d,c),f.needsUpdate=!0;const j=f.distanceToTriangle(m,y,x);if(j<p&&(g.copy(y),h&&h.copy(x),p=j,b=w,F=K),j<r)return!0}}}}}),Oe.releasePrimitive(f),Oe.releasePrimitive(m),p===1/0?null:(i.point?i.point.copy(g):i.point=g.clone(),i.distance=p,i.faceIndex=b,n&&(n.point?n.point.copy(h):n.point=h.clone(),n.point.applyMatrix4(Sn),g.applyMatrix4(Sn),n.distance=g.sub(n.point).length(),n.faceIndex=F),i)}function gh(){return typeof SharedArrayBuffer<"u"}const Vo=new ae.constructor,ei=new ae.constructor,xt=new Gs(()=>new de),to=new de,oo=new de,Pi=new de,Hi=new de;let Oi=!1;function xh(o,e,t,i){if(Oi)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Oi=!0;const n=o._roots,r=e._roots;let s,a=0,c=0;const d=new Y().copy(t).invert();for(let A=0,u=n.length;A<u;A++){Vo.setBuffer(n[A]),c=0;const f=xt.getPrimitive();ce(0,Vo.float32Array,f),f.applyMatrix4(d);for(let m=0,y=r.length;m<y&&(ei.setBuffer(r[m]),s=Qe(0,0,t,d,i,a,c,0,0,f),ei.clearBuffer(),c+=r[m].length,!s);m++);if(xt.releasePrimitive(f),Vo.clearBuffer(),a+=n[A].length,s)break}return Oi=!1,s}function Qe(o,e,t,i,n,r=0,s=0,a=0,c=0,d=null,A=!1){let u,f;A?(u=ei,f=Vo):(u=Vo,f=ei);const m=u.float32Array,y=u.uint32Array,g=u.uint16Array,x=f.float32Array,h=f.uint32Array,p=f.uint16Array,b=o*2,F=e*2,B=ve(b,g),v=ve(F,p);let R=!1;if(v&&B)A?R=n(we(e,h),Ee(e*2,p),we(o,y),Ee(o*2,g),c,s+e,a,r+o):R=n(we(o,y),Ee(o*2,g),we(e,h),Ee(e*2,p),a,r+o,c,s+e);else if(v){const K=xt.getPrimitive();ce(e,x,K),K.applyMatrix4(t);const S=He(o),w=Ue(o,y);ce(S,m,to),ce(w,m,oo);const D=K.intersectsBox(to),M=K.intersectsBox(oo);R=D&&Qe(e,S,i,t,n,s,r,c,a+1,K,!A)||M&&Qe(e,w,i,t,n,s,r,c,a+1,K,!A),xt.releasePrimitive(K)}else{const K=He(e),S=Ue(e,h);ce(K,x,Pi),ce(S,x,Hi);const w=d.intersectsBox(Pi),D=d.intersectsBox(Hi);if(w&&D)R=Qe(o,K,t,i,n,r,s,a,c+1,d,A)||Qe(o,S,t,i,n,r,s,a,c+1,d,A);else if(w)if(B)R=Qe(o,K,t,i,n,r,s,a,c+1,d,A);else{const M=xt.getPrimitive();M.copy(Pi).applyMatrix4(t);const j=He(o),I=Ue(o,y);ce(j,m,to),ce(I,m,oo);const H=M.intersectsBox(to),z=M.intersectsBox(oo);R=H&&Qe(K,j,i,t,n,s,r,c,a+1,M,!A)||z&&Qe(K,I,i,t,n,s,r,c,a+1,M,!A),xt.releasePrimitive(M)}else if(D)if(B)R=Qe(o,S,t,i,n,r,s,a,c+1,d,A);else{const M=xt.getPrimitive();M.copy(Hi).applyMatrix4(t);const j=He(o),I=Ue(o,y);ce(j,m,to),ce(I,m,oo);const H=M.intersectsBox(to),z=M.intersectsBox(oo);R=H&&Qe(S,j,i,t,n,s,r,c,a+1,M,!A)||z&&Qe(S,I,i,t,n,s,r,c,a+1,M,!A),xt.releasePrimitive(M)}}return R}const Mn=new Se,Nr=new de,yh={strategy:fl,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class Ns{static serialize(e,t={}){t={cloneBuffers:!0,...t};const i=e.geometry,n=e._roots,r=e._indirectBuffer,s=i.getIndex();let a;return t.cloneBuffers?a={roots:n.map(c=>c.slice()),index:s?s.array.slice():null,indirectBuffer:r?r.slice():null}:a={roots:n,index:s?s.array:null,indirectBuffer:r},a}static deserialize(e,t,i={}){i={setIndex:!0,indirect:!!e.indirectBuffer,...i};const{index:n,roots:r,indirectBuffer:s}=e,a=new Ns(t,{...i,[Ei]:!0});if(a._roots=r,a._indirectBuffer=s||null,i.setIndex){const c=t.getIndex();if(c===null){const d=new me(e.index,1,!1);t.setIndex(d)}else c.array!==n&&(c.array.set(n),c.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...yh,[Ei]:!1},t),t.useSharedArrayBuffer&&!gh())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[Ei]||(Im(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new de))),this.resolveTriangleIndex=t.indirect?i=>this._indirectBuffer[i]:i=>i}refit(e=null){return(this.indirect?ah:Xm)(this,e)}traverse(e,t=0){const i=this._roots[t],n=new Uint32Array(i),r=new Uint16Array(i);s(0);function s(a,c=0){const d=a*2,A=r[d+15]===ui;if(A){const u=n[a+6],f=r[d+14];e(c,A,new Float32Array(i,a*4,6),u,f)}else{const u=a+Rt/4,f=n[a+6],m=n[a+7];e(c,A,new Float32Array(i,a*4,6),m)||(s(u,c+1),s(f,c+1))}}}raycast(e,t=Wn,i=0,n=1/0){const r=this._roots,s=this.geometry,a=[],c=t.isMaterial,d=Array.isArray(t),A=s.groups,u=c?t.side:t,f=this.indirect?lh:_m;for(let m=0,y=r.length;m<y;m++){const g=d?t[A[m].materialIndex].side:u,x=a.length;if(f(this,m,g,e,a,i,n),d){const h=A[m].materialIndex;for(let p=x,b=a.length;p<b;p++)a[p].face.materialIndex=h}}return a}raycastFirst(e,t=Wn,i=0,n=1/0){const r=this._roots,s=this.geometry,a=t.isMaterial,c=Array.isArray(t);let d=null;const A=s.groups,u=a?t.side:t,f=this.indirect?uh:eh;for(let m=0,y=r.length;m<y;m++){const g=c?t[A[m].materialIndex].side:u,x=f(this,m,g,e,i,n);x!=null&&(d==null||x.distance<d.distance)&&(d=x,c&&(x.face.materialIndex=A[m].materialIndex))}return d}intersectsGeometry(e,t){let i=!1;const n=this._roots,r=this.indirect?dh:th;for(let s=0,a=n.length;s<a&&(i=r(this,s,e,t),!i);s++);return i}shapecast(e){const t=Oe.getPrimitive(),i=this.indirect?qm:Vm;let{boundsTraverseOrder:n,intersectsBounds:r,intersectsRange:s,intersectsTriangle:a}=e;if(s&&a){const u=s;s=(f,m,y,g,x)=>u(f,m,y,g,x)?!0:i(f,m,this,a,y,g,t)}else s||(a?s=(u,f,m,y)=>i(u,f,this,a,m,y,t):s=(u,f,m)=>m);let c=!1,d=0;const A=this._roots;for(let u=0,f=A.length;u<f;u++){const m=A[u];if(c=Gm(this,u,r,s,n,d),c)break;d+=m.byteLength}return Oe.releasePrimitive(t),c}bvhcast(e,t,i){let{intersectsRanges:n,intersectsTriangles:r}=i;const s=Oe.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,d=this.indirect?y=>{const g=this.resolveTriangleIndex(y);pe(s,g*3,a,c)}:y=>{pe(s,y*3,a,c)},A=Oe.getPrimitive(),u=e.geometry.index,f=e.geometry.attributes.position,m=e.indirect?y=>{const g=e.resolveTriangleIndex(y);pe(A,g*3,u,f)}:y=>{pe(A,y*3,u,f)};if(r){const y=(g,x,h,p,b,F,B,v)=>{for(let R=h,K=h+p;R<K;R++){m(R),A.a.applyMatrix4(t),A.b.applyMatrix4(t),A.c.applyMatrix4(t),A.needsUpdate=!0;for(let S=g,w=g+x;S<w;S++)if(d(S),s.needsUpdate=!0,r(s,A,S,R,b,F,B,v))return!0}return!1};if(n){const g=n;n=function(x,h,p,b,F,B,v,R){return g(x,h,p,b,F,B,v,R)?!0:y(x,h,p,b,F,B,v,R)}}else n=y}return xh(this,e,t,n)}intersectsBox(e,t){return Mn.set(e.min,e.max,t),Mn.needsUpdate=!0,this.shapecast({intersectsBounds:i=>Mn.intersectsBox(i),intersectsTriangle:i=>Mn.intersectsTriangle(i)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,i={},n={},r=0,s=1/0){return(this.indirect?hh:rh)(this,e,t,i,n,r,s)}closestPointToPoint(e,t={},i=0,n=1/0){return Nm(this,e,t,i,n)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(i=>{ce(0,new Float32Array(i),Nr),e.union(Nr)}),e}}function bh(o){switch(o){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function Ch(o){switch(o){case 1:return Gt;case 2:return Wa;case 3:return Ce;case 4:return Ce}}function Lr(o){switch(o){case 1:return jA;case 2:return Qa;case 3:return us;case 4:return us}}class bl extends Te{constructor(){super(),this.minFilter=he,this.magFilter=he,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){const t=this.overrideItemSize,i=e.itemSize,n=e.count;if(t!==null){if(i*n%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=n*i/t}const r=e.itemSize,s=e.count,a=e.normalized,c=e.array.constructor,d=c.BYTES_PER_ELEMENT;let A=this._forcedType,u=r;if(A===null)switch(c){case Float32Array:A=Re;break;case Uint8Array:case Uint16Array:case Uint32Array:A=Lo;break;case Int8Array:case Int16Array:case Int32Array:A=gi;break}let f,m,y,g,x=bh(r);switch(A){case Re:y=1,m=Ch(r),a&&d===1?(g=c,x+="8",c===Uint8Array?f=cs:(f=xr,x+="_SNORM")):(g=Float32Array,x+="32F",f=Re);break;case gi:x+=d*8+"I",y=a?Math.pow(2,c.BYTES_PER_ELEMENT*8-1):1,m=Lr(r),d===1?(g=Int8Array,f=xr):d===2?(g=Int16Array,f=TA):(g=Int32Array,f=gi);break;case Lo:x+=d*8+"UI",y=a?Math.pow(2,c.BYTES_PER_ELEMENT*8-1):1,m=Lr(r),d===1?(g=Uint8Array,f=cs):d===2?(g=Uint16Array,f=UA):(g=Uint32Array,f=Lo);break}u===3&&(m===Ce||m===us)&&(u=4);const h=Math.ceil(Math.sqrt(s))||1,p=u*h*h,b=new g(p),F=e.normalized;e.normalized=!1;for(let B=0;B<s;B++){const v=u*B;b[v]=e.getX(B)/y,r>=2&&(b[v+1]=e.getY(B)/y),r>=3&&(b[v+2]=e.getZ(B)/y,u===4&&(b[v+3]=1)),r>=4&&(b[v+3]=e.getW(B)/y)}e.normalized=F,this.internalFormat=x,this.format=m,this.type=f,this.image.width=h,this.image.height=h,this.image.data=b,this.needsUpdate=!0,this.dispose(),e.itemSize=i,e.count=n}}class Cl extends bl{constructor(){super(),this._forcedType=Lo}}class Fl extends bl{constructor(){super(),this._forcedType=Re}}class Fh{constructor(){this.index=new Cl,this.position=new Fl,this.bvhBounds=new Te,this.bvhContents=new Te,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){const{geometry:t}=e;if(vh(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){const i=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==i.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{const n=ml(pl(t));this._cachedIndexAttr=new me(n,1,!1)}Bh(t,i,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){const{index:e,position:t,bvhBounds:i,bvhContents:n}=this;e&&e.dispose(),t&&t.dispose(),i&&i.dispose(),n&&n.dispose()}}function Bh(o,e,t){const i=t.array,n=o.index?o.index.array:null;for(let r=0,s=e.length;r<s;r++){const a=3*r,c=3*e[r];for(let d=0;d<3;d++)i[a+d]=n?n[c+d]:c+d}}function vh(o,e,t){const i=o._roots;if(i.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const n=i[0],r=new Uint16Array(n),s=new Uint32Array(n),a=new Float32Array(n),c=n.byteLength/Rt,d=2*Math.ceil(Math.sqrt(c/2)),A=new Float32Array(4*d*d),u=Math.ceil(Math.sqrt(c)),f=new Uint32Array(2*u*u);for(let m=0;m<c;m++){const y=m*Rt/4,g=y*2,x=y;for(let h=0;h<3;h++)A[8*m+0+h]=a[x+0+h],A[8*m+4+h]=a[x+3+h];if(ve(g,r)){const h=Ee(g,r),p=we(y,s),b=4294901760|h;f[m*2+0]=b,f[m*2+1]=p}else{const h=4*Ue(y,s)/Rt,p=Hs(y,s);f[m*2+0]=p,f[m*2+1]=h}}e.image.data=A,e.image.width=d,e.image.height=d,e.format=Ce,e.type=Re,e.internalFormat="RGBA32F",e.minFilter=he,e.magFilter=he,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=f,t.image.width=u,t.image.height=u,t.format=Qa,t.type=Lo,t.internalFormat="RG32UI",t.minFilter=he,t.magFilter=he,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}const jt=new U,It=new U,kt=new U,Jr=new Ne,Kn=new U,Gi=new U,Qr=new Ne,Wr=new Ne,wn=new Y,Vr=new Y;function Uo(o,e){if(!o&&!e)return;const t=o.count===e.count,i=o.normalized===e.normalized,n=o.array.constructor===e.array.constructor,r=o.itemSize===e.itemSize;if(!t||!i||!n||!r)throw new Error}function Po(o,e=null){const t=o.array.constructor,i=o.normalized,n=o.itemSize,r=e===null?o.count:e;return new me(new t(n*r),n,i)}function Bl(o,e,t=0){if(o.isInterleavedBufferAttribute){const i=o.itemSize;for(let n=0,r=o.count;n<r;n++){const s=n+t;e.setX(s,o.getX(n)),i>=2&&e.setY(s,o.getY(n)),i>=3&&e.setZ(s,o.getZ(n)),i>=4&&e.setW(s,o.getW(n))}}else{const i=e.array,n=i.constructor,r=i.BYTES_PER_ELEMENT*o.itemSize*t;new n(i.buffer,r,o.array.length).set(o.array)}}function Rh(o,e,t){const i=o.elements,n=e.elements;for(let r=0,s=n.length;r<s;r++)i[r]+=n[r]*t}function Xr(o,e,t){const i=o.skeleton,n=o.geometry,r=i.bones,s=i.boneInverses;Qr.fromBufferAttribute(n.attributes.skinIndex,e),Wr.fromBufferAttribute(n.attributes.skinWeight,e),wn.elements.fill(0);for(let a=0;a<4;a++){const c=Wr.getComponent(a);if(c!==0){const d=Qr.getComponent(a);Vr.multiplyMatrices(r[d].matrixWorld,s[d]),Rh(wn,Vr,c)}}return wn.multiply(o.bindMatrix).premultiply(o.bindMatrixInverse),t.transformDirection(wn),t}function Ni(o,e,t,i,n){Kn.set(0,0,0);for(let r=0,s=o.length;r<s;r++){const a=e[r],c=o[r];a!==0&&(Gi.fromBufferAttribute(c,i),t?Kn.addScaledVector(Gi,a):Kn.addScaledVector(Gi.sub(n),a))}n.add(Kn)}function Sh(o,e={useGroups:!1,updateIndex:!1,skipAttributes:[]},t=new Xe){const i=o[0].index!==null,{useGroups:n=!1,updateIndex:r=!1,skipAttributes:s=[]}=e,a=new Set(Object.keys(o[0].attributes)),c={};let d=0;t.clearGroups();for(let A=0;A<o.length;++A){const u=o[A];let f=0;if(i!==(u.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const m in u.attributes){if(!a.has(m))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.');c[m]===void 0&&(c[m]=[]),c[m].push(u.attributes[m]),f++}if(f!==a.size)throw new Error("StaticGeometryGenerator: Make sure all geometries have the same number of attributes.");if(n){let m;if(i)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else throw new Error("StaticGeometryGenerator: The geometry must have either an index or a position attribute");t.addGroup(d,m,A),d+=m}}if(i){let A=!1;if(!t.index){let u=0;for(let f=0;f<o.length;++f)u+=o[f].index.count;t.setIndex(new me(new Uint32Array(u),1,!1)),A=!0}if(r||A){const u=t.index;let f=0,m=0;for(let y=0;y<o.length;++y){const g=o[y],x=g.index;if(s[y]!==!0)for(let h=0;h<x.count;++h)u.setX(f,x.getX(h)+m),f++;m+=g.attributes.position.count}}}for(const A in c){const u=c[A];if(!(A in t.attributes)){let y=0;for(const g in u)y+=u[g].count;t.setAttribute(A,Po(c[A][0],y))}const f=t.attributes[A];let m=0;for(let y=0,g=u.length;y<g;y++){const x=u[y];s[y]!==!0&&Bl(x,f,m),m+=x.count}}return t}function Mh(o,e){if(o===null||e===null)return o===e;if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function Kh(o){const{index:e,attributes:t}=o;if(e)for(let i=0,n=e.count;i<n;i+=3){const r=e.getX(i),s=e.getX(i+2);e.setX(i,s),e.setX(i+2,r)}else for(const i in t){const n=t[i],r=n.itemSize;for(let s=0,a=n.count;s<a;s+=3)for(let c=0;c<r;c++){const d=n.getComponent(s,c),A=n.getComponent(s+2,c);n.setComponent(s,c,A),n.setComponent(s+2,c,d)}}return o}class wh{constructor(e){this.matrixWorld=new Y,this.geometryHash=null,this.boneMatrices=null,this.primitiveCount=-1,this.mesh=e,this.update()}update(){const e=this.mesh,t=e.geometry,i=e.skeleton,n=(t.index?t.index.count:t.attributes.position.count)/3;if(this.matrixWorld.copy(e.matrixWorld),this.geometryHash=t.attributes.position.version,this.primitiveCount=n,i){i.boneTexture||i.computeBoneTexture(),i.update();const r=i.boneMatrices;!this.boneMatrices||this.boneMatrices.length!==r.length?this.boneMatrices=r.slice():this.boneMatrices.set(r)}else this.boneMatrices=null}didChange(){const e=this.mesh,t=e.geometry,i=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===t.attributes.position.version&&Mh(e.skeleton&&e.skeleton.boneMatrices||null,this.boneMatrices)&&this.primitiveCount===i)}}class Yr{constructor(e){Array.isArray(e)||(e=[e]);const t=[];e.forEach(i=>{i.traverseVisible(n=>{n.isMesh&&t.push(n)})}),this.meshes=t,this.useGroups=!0,this.applyWorldTransforms=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Array(t.length).fill().map(()=>new Xe),this._diffMap=new WeakMap}getMaterials(){const e=[];return this.meshes.forEach(t=>{Array.isArray(t.material)?e.push(...t.material):e.push(t.material)}),e}generate(e=new Xe){let t=[];const{meshes:i,useGroups:n,_intermediateGeometry:r,_diffMap:s}=this;for(let a=0,c=i.length;a<c;a++){const d=i[a],A=r[a],u=s.get(d);!u||u.didChange(d)?(this._convertToStaticGeometry(d,A),t.push(!1),u?u.update():s.set(d,new wh(d))):t.push(!0)}if(r.length===0){e.setIndex(null);const a=e.attributes;for(const c in a)e.deleteAttribute(c);for(const c in this.attributes)e.setAttribute(this.attributes[c],new me(new Float32Array(0),4,!1))}else Sh(r,{useGroups:n,skipAttributes:t},e);for(const a in e.attributes)e.attributes[a].needsUpdate=!0;return e}_convertToStaticGeometry(e,t=new Xe){const i=e.geometry,n=this.applyWorldTransforms,r=this.attributes.includes("normal"),s=this.attributes.includes("tangent"),a=i.attributes,c=t.attributes;!t.index&&i.index&&(t.index=i.index.clone()),c.position||t.setAttribute("position",Po(a.position)),r&&!c.normal&&a.normal&&t.setAttribute("normal",Po(a.normal)),s&&!c.tangent&&a.tangent&&t.setAttribute("tangent",Po(a.tangent)),Uo(i.index,t.index),Uo(a.position,c.position),r&&Uo(a.normal,c.normal),s&&Uo(a.tangent,c.tangent);const d=a.position,A=r?a.normal:null,u=s?a.tangent:null,f=i.morphAttributes.position,m=i.morphAttributes.normal,y=i.morphAttributes.tangent,g=i.morphTargetsRelative,x=e.morphTargetInfluences,h=new IA;h.getNormalMatrix(e.matrixWorld),i.index&&t.index.array.set(i.index.array);for(let p=0,b=a.position.count;p<b;p++)jt.fromBufferAttribute(d,p),A&&It.fromBufferAttribute(A,p),u&&(Jr.fromBufferAttribute(u,p),kt.fromBufferAttribute(u,p)),x&&(f&&Ni(f,x,g,p,jt),m&&Ni(m,x,g,p,It),y&&Ni(y,x,g,p,kt)),e.isSkinnedMesh&&(e.applyBoneTransform(p,jt),A&&Xr(e,p,It),u&&Xr(e,p,kt)),n&&jt.applyMatrix4(e.matrixWorld),c.position.setXYZ(p,jt.x,jt.y,jt.z),A&&(n&&It.applyNormalMatrix(h),c.normal.setXYZ(p,It.x,It.y,It.z)),u&&(n&&kt.transformDirection(e.matrixWorld),c.tangent.setXYZW(p,kt.x,kt.y,kt.z,Jr.w));for(const p in this.attributes){const b=this.attributes[p];b==="position"||b==="tangent"||b==="normal"||!(b in a)||(c[b]||t.setAttribute(b,Po(a[b])),Uo(a[b],c[b]),Bl(a[b],c[b]))}return e.matrixWorld.determinant()<0&&Kh(t),t}}const Dh=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,Eh=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,Uh=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`;function Th(o,e,t=new U){const i=Math.PI*(o-.5),n=2*Math.PI*(e-.5);return t.x=Math.cos(n),t.y=Math.sin(i),t.z=Math.sin(n),t}const Zr=C.forwardRef(({inclination:o=.6,azimuth:e=.1,distance:t=1e3,mieCoefficient:i=.005,mieDirectionalG:n=.8,rayleigh:r=.5,turbidity:s=10,sunPosition:a=Th(o,e),...c},d)=>{const A=C.useMemo(()=>new U().setScalar(t),[t]),[u]=C.useState(()=>new Rp);return C.createElement("primitive",fo({object:u,ref:d,"material-uniforms-mieCoefficient-value":i,"material-uniforms-mieDirectionalG-value":n,"material-uniforms-rayleigh-value":r,"material-uniforms-sunPosition-value":a,"material-uniforms-turbidity-value":s,scale:A},c))});class jh extends go{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:`
      uniform float time;
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(time + 100.0));
        gl_Position = projectionMatrix * mvPosition;
      }`,fragmentShader:`
      uniform sampler2D pointTexture;
      uniform float fade;
      varying vec3 vColor;
      void main() {
        float opacity = 1.0;
        if (fade == 1.0) {
          float d = distance(gl_PointCoord, vec2(0.5, 0.5));
          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
        }
        gl_FragColor = vec4(vColor, opacity);

        #include <tonemapping_fragment>
	      #include <${cl>=154?"colorspace_fragment":"encodings_fragment"}>
      }`})}}const Ih=o=>new U().setFromSpherical(new zA(o,Math.acos(1-Math.random()*2),Math.random()*2*Math.PI)),kh=C.forwardRef(({radius:o=100,depth:e=50,count:t=5e3,saturation:i=0,factor:n=4,fade:r=!1,speed:s=1},a)=>{const c=C.useRef(),[d,A,u]=C.useMemo(()=>{const m=[],y=[],g=Array.from({length:t},()=>(.5+.5*Math.random())*n),x=new ue;let h=o+e;const p=e/t;for(let b=0;b<t;b++)h-=p*Math.random(),m.push(...Ih(h).toArray()),x.setHSL(b/t,i,.9),y.push(x.r,x.g,x.b);return[new Float32Array(m),new Float32Array(y),new Float32Array(g)]},[t,e,n,o,i]);Jt(m=>c.current&&(c.current.uniforms.time.value=m.clock.elapsedTime*s));const[f]=C.useState(()=>new jh);return C.createElement("points",{ref:a},C.createElement("bufferGeometry",null,C.createElement("bufferAttribute",{attach:"attributes-position",args:[d,3]}),C.createElement("bufferAttribute",{attach:"attributes-color",args:[A,3]}),C.createElement("bufferAttribute",{attach:"attributes-size",args:[u,1]})),C.createElement("primitive",{ref:c,object:f,attach:"material",blending:kA,"uniforms-fade-value":r,depthWrite:!1,transparent:!0,vertexColors:!0}))}),on=C.createContext(null),Dn=new U,qr=new U,zh=(o,e,t,i)=>{const n=e.dot(e),r=e.dot(o)-e.dot(t),s=e.dot(i);return s===0?-r/n:(Dn.copy(i).multiplyScalar(n/s).sub(e),qr.copy(i).multiplyScalar(r/s).add(t).sub(o),-Dn.dot(qr)/Dn.dot(Dn))},Ph=new U(0,1,0),_r=new Y,Li=({direction:o,axis:e})=>{const{translation:t,translationLimits:i,annotations:n,annotationsClass:r,depthTest:s,scale:a,lineWidth:c,fixed:d,axisColors:A,hoveredColor:u,opacity:f,onDragStart:m,onDrag:y,onDragEnd:g,userData:x}=C.useContext(on),h=Le(k=>k.controls),p=C.useRef(null),b=C.useRef(null),F=C.useRef(null),B=C.useRef(0),[v,R]=C.useState(!1),K=C.useCallback(k=>{n&&(p.current.innerText=`${t.current[e].toFixed(2)}`,p.current.style.display="block"),k.stopPropagation();const T=new Y().extractRotation(b.current.matrixWorld),E=k.point.clone(),P=new U().setFromMatrixPosition(b.current.matrixWorld),G=o.clone().applyMatrix4(T).normalize();F.current={clickPoint:E,dir:G},B.current=t.current[e],m({component:"Arrow",axis:e,origin:P,directions:[G]}),h&&(h.enabled=!1),k.target.setPointerCapture(k.pointerId)},[n,o,h,m,t,e]),S=C.useCallback(k=>{if(k.stopPropagation(),v||R(!0),F.current){const{clickPoint:T,dir:E}=F.current,[P,G]=(i==null?void 0:i[e])||[void 0,void 0];let J=zh(T,E,k.ray.origin,k.ray.direction);P!==void 0&&(J=Math.max(J,P-B.current)),G!==void 0&&(J=Math.min(J,G-B.current)),t.current[e]=B.current+J,n&&(p.current.innerText=`${t.current[e].toFixed(2)}`),_r.makeTranslation(E.x*J,E.y*J,E.z*J),y(_r)}},[n,y,v,t,i,e]),w=C.useCallback(k=>{n&&(p.current.style.display="none"),k.stopPropagation(),F.current=null,g(),h&&(h.enabled=!0),k.target.releasePointerCapture(k.pointerId)},[n,h,g]),D=C.useCallback(k=>{k.stopPropagation(),R(!1)},[]),{cylinderLength:M,coneWidth:j,coneLength:I,matrixL:H}=C.useMemo(()=>{const k=d?c/a*1.6:a/20,T=d?.2:a/5,E=d?1-T:a-T,P=new ke().setFromUnitVectors(Ph,o.clone().normalize()),G=new Y().makeRotationFromQuaternion(P);return{cylinderLength:E,coneWidth:k,coneLength:T,matrixL:G}},[o,a,c,d]),z=v?u:A[e];return C.createElement("group",{ref:b},C.createElement("group",{matrix:H,matrixAutoUpdate:!1,onPointerDown:K,onPointerMove:S,onPointerUp:w,onPointerOut:D},n&&C.createElement(Ae,{position:[0,-I,0]},C.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:r,ref:p})),C.createElement("mesh",{visible:!1,position:[0,(M+I)/2,0],userData:x},C.createElement("cylinderGeometry",{args:[j*1.4,j*1.4,M+I,8,1]})),C.createElement($n,{transparent:!0,raycast:()=>null,depthTest:s,points:[0,0,0,0,M,0],lineWidth:c,side:Lt,color:z,opacity:f,polygonOffset:!0,renderOrder:1,polygonOffsetFactor:-10,fog:!1}),C.createElement("mesh",{raycast:()=>null,position:[0,M+I/2,0],renderOrder:500},C.createElement("coneGeometry",{args:[j,I,24,1]}),C.createElement("meshBasicMaterial",{transparent:!0,depthTest:s,color:z,opacity:f,polygonOffset:!0,polygonOffsetFactor:-10,fog:!1}))))},Ji=new U,Qi=new U,Wi=o=>o*180/Math.PI,Hh=o=>o*Math.PI/180,Oh=(o,e,t,i,n)=>{Ji.copy(o).sub(t),Qi.copy(e).sub(t);const r=i.dot(i),s=n.dot(n),a=Ji.dot(i)/r,c=Ji.dot(n)/s,d=Qi.dot(i)/r,A=Qi.dot(n)/s,u=Math.atan2(c,a);return Math.atan2(A,d)-u},Gh=(o,e)=>{let t=Math.floor(o/e);return t=t<0?t+1:t,o-t*e},$r=o=>{let e=Gh(o,2*Math.PI);return Math.abs(e)<1e-6?0:(e<0&&(e+=2*Math.PI),e)},En=new Y,ea=new U,Un=new Va,Vi=new U,Xi=({dir1:o,dir2:e,axis:t})=>{const{rotationLimits:i,annotations:n,annotationsClass:r,depthTest:s,scale:a,lineWidth:c,fixed:d,axisColors:A,hoveredColor:u,opacity:f,onDragStart:m,onDrag:y,onDragEnd:g,userData:x}=C.useContext(on),h=Le(z=>z.controls),p=C.useRef(null),b=C.useRef(null),F=C.useRef(0),B=C.useRef(0),v=C.useRef(null),[R,K]=C.useState(!1),S=C.useCallback(z=>{n&&(p.current.innerText=`${Wi(B.current).toFixed(0)}º`,p.current.style.display="block"),z.stopPropagation();const k=z.point.clone(),T=new U().setFromMatrixPosition(b.current.matrixWorld),E=new U().setFromMatrixColumn(b.current.matrixWorld,0).normalize(),P=new U().setFromMatrixColumn(b.current.matrixWorld,1).normalize(),G=new U().setFromMatrixColumn(b.current.matrixWorld,2).normalize(),J=new en().setFromNormalAndCoplanarPoint(G,T);v.current={clickPoint:k,origin:T,e1:E,e2:P,normal:G,plane:J},m({component:"Rotator",axis:t,origin:T,directions:[E,P,G]}),h&&(h.enabled=!1),z.target.setPointerCapture(z.pointerId)},[n,h,m,t]),w=C.useCallback(z=>{if(z.stopPropagation(),R||K(!0),v.current){const{clickPoint:k,origin:T,e1:E,e2:P,normal:G,plane:J}=v.current,[W,Q]=(i==null?void 0:i[t])||[void 0,void 0];Un.copy(z.ray),Un.intersectPlane(J,Vi),Un.direction.negate(),Un.intersectPlane(J,Vi);let L=Oh(k,Vi,T,E,P),Z=Wi(L);z.shiftKey&&(Z=Math.round(Z/10)*10,L=Hh(Z)),W!==void 0&&Q!==void 0&&Q-W<2*Math.PI?(L=$r(L),L=L>Math.PI?L-2*Math.PI:L,L=vt.clamp(L,W-F.current,Q-F.current),B.current=F.current+L):(B.current=$r(F.current+L),B.current=B.current>Math.PI?B.current-2*Math.PI:B.current),n&&(Z=Wi(B.current),p.current.innerText=`${Z.toFixed(0)}º`),En.makeRotationAxis(G,L),ea.copy(T).applyMatrix4(En).sub(T).negate(),En.setPosition(ea),y(En)}},[n,y,R,i,t]),D=C.useCallback(z=>{n&&(p.current.style.display="none"),z.stopPropagation(),F.current=B.current,v.current=null,g(),h&&(h.enabled=!0),z.target.releasePointerCapture(z.pointerId)},[n,h,g]),M=C.useCallback(z=>{z.stopPropagation(),K(!1)},[]),j=C.useMemo(()=>{const z=o.clone().normalize(),k=e.clone().normalize();return new Y().makeBasis(z,k,z.clone().cross(k))},[o,e]),I=d?.65:a*.65,H=C.useMemo(()=>{const k=[];for(let T=0;T<=32;T++){const E=T*(Math.PI/2)/32;k.push(new U(Math.cos(E)*I,Math.sin(E)*I,0))}return k},[I]);return C.createElement("group",{ref:b,onPointerDown:S,onPointerMove:w,onPointerUp:D,onPointerOut:M,matrix:j,matrixAutoUpdate:!1},n&&C.createElement(Ae,{position:[I,I,0]},C.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:r,ref:p})),C.createElement($n,{points:H,lineWidth:c*4,visible:!1,userData:x}),C.createElement($n,{transparent:!0,raycast:()=>null,depthTest:s,points:H,lineWidth:c,side:Lt,color:R?u:A[t],opacity:f,polygonOffset:!0,polygonOffsetFactor:-10,fog:!1}))},Nh=(o,e,t)=>{const i=Math.abs(o.x)>=Math.abs(o.y)&&Math.abs(o.x)>=Math.abs(o.z)?0:Math.abs(o.y)>=Math.abs(o.x)&&Math.abs(o.y)>=Math.abs(o.z)?1:2,n=[0,1,2].sort((y,g)=>Math.abs(e.getComponent(g))-Math.abs(e.getComponent(y))),r=i===n[0]?n[1]:n[0],s=o.getComponent(i),a=o.getComponent(r),c=e.getComponent(i),d=e.getComponent(r),A=t.getComponent(i),f=(t.getComponent(r)-A*(a/s))/(d-c*(a/s));return[(A-f*c)/s,f]},Tn=new Va,jn=new U,ta=new Y,Yi=({dir1:o,dir2:e,axis:t})=>{const{translation:i,translationLimits:n,annotations:r,annotationsClass:s,depthTest:a,scale:c,lineWidth:d,fixed:A,axisColors:u,hoveredColor:f,opacity:m,onDragStart:y,onDrag:g,onDragEnd:x,userData:h}=C.useContext(on),p=Le(E=>E.controls),b=C.useRef(null),F=C.useRef(null),B=C.useRef(null),v=C.useRef(0),R=C.useRef(0),[K,S]=C.useState(!1),w=C.useCallback(E=>{r&&(b.current.innerText=`${i.current[(t+1)%3].toFixed(2)}, ${i.current[(t+2)%3].toFixed(2)}`,b.current.style.display="block"),E.stopPropagation();const P=E.point.clone(),G=new U().setFromMatrixPosition(F.current.matrixWorld),J=new U().setFromMatrixColumn(F.current.matrixWorld,0).normalize(),W=new U().setFromMatrixColumn(F.current.matrixWorld,1).normalize(),Q=new U().setFromMatrixColumn(F.current.matrixWorld,2).normalize(),L=new en().setFromNormalAndCoplanarPoint(Q,G);B.current={clickPoint:P,e1:J,e2:W,plane:L},v.current=i.current[(t+1)%3],R.current=i.current[(t+2)%3],y({component:"Slider",axis:t,origin:G,directions:[J,W,Q]}),p&&(p.enabled=!1),E.target.setPointerCapture(E.pointerId)},[r,p,y,t]),D=C.useCallback(E=>{if(E.stopPropagation(),K||S(!0),B.current){const{clickPoint:P,e1:G,e2:J,plane:W}=B.current,[Q,L]=(n==null?void 0:n[(t+1)%3])||[void 0,void 0],[Z,oe]=(n==null?void 0:n[(t+2)%3])||[void 0,void 0];Tn.copy(E.ray),Tn.intersectPlane(W,jn),Tn.direction.negate(),Tn.intersectPlane(W,jn),jn.sub(P);let[se,X]=Nh(G,J,jn);Q!==void 0&&(se=Math.max(se,Q-v.current)),L!==void 0&&(se=Math.min(se,L-v.current)),Z!==void 0&&(X=Math.max(X,Z-R.current)),oe!==void 0&&(X=Math.min(X,oe-R.current)),i.current[(t+1)%3]=v.current+se,i.current[(t+2)%3]=R.current+X,r&&(b.current.innerText=`${i.current[(t+1)%3].toFixed(2)}, ${i.current[(t+2)%3].toFixed(2)}`),ta.makeTranslation(se*G.x+X*J.x,se*G.y+X*J.y,se*G.z+X*J.z),g(ta)}},[r,g,K,i,n,t]),M=C.useCallback(E=>{r&&(b.current.style.display="none"),E.stopPropagation(),B.current=null,x(),p&&(p.enabled=!0),E.target.releasePointerCapture(E.pointerId)},[r,p,x]),j=C.useCallback(E=>{E.stopPropagation(),S(!1)},[]),I=C.useMemo(()=>{const E=o.clone().normalize(),P=e.clone().normalize();return new Y().makeBasis(E,P,E.clone().cross(P))},[o,e]),H=A?1/7:c/7,z=A?.225:c*.225,k=K?f:u[t],T=C.useMemo(()=>[new U(0,0,0),new U(0,z,0),new U(z,z,0),new U(z,0,0),new U(0,0,0)],[z]);return C.createElement("group",{ref:F,matrix:I,matrixAutoUpdate:!1},r&&C.createElement(Ae,{position:[0,0,0]},C.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:s,ref:b})),C.createElement("group",{position:[H*1.7,H*1.7,0]},C.createElement("mesh",{visible:!0,onPointerDown:w,onPointerMove:D,onPointerUp:M,onPointerOut:j,scale:z,userData:h},C.createElement("planeGeometry",null),C.createElement("meshBasicMaterial",{transparent:!0,depthTest:a,color:k,polygonOffset:!0,polygonOffsetFactor:-10,side:Lt,fog:!1})),C.createElement($n,{position:[-z/2,-z/2,0],transparent:!0,depthTest:a,points:T,lineWidth:d,color:k,opacity:m,polygonOffset:!0,polygonOffsetFactor:-10,userData:h,fog:!1})))},Ho=new U,oa=new U,Lh=(o,e,t,i)=>{const n=e.dot(e),r=e.dot(o)-e.dot(t),s=e.dot(i);return s===0?-r/n:(Ho.copy(i).multiplyScalar(n/s).sub(e),oa.copy(i).multiplyScalar(r/s).add(t).sub(o),-Ho.dot(oa)/Ho.dot(Ho))},Jh=new U(0,1,0),To=new U,na=new Y,Zi=({direction:o,axis:e})=>{const{scaleLimits:t,annotations:i,annotationsClass:n,depthTest:r,scale:s,lineWidth:a,fixed:c,axisColors:d,hoveredColor:A,opacity:u,onDragStart:f,onDrag:m,onDragEnd:y,userData:g}=C.useContext(on),x=Le(T=>T.size),h=Le(T=>T.controls),p=C.useRef(null),b=C.useRef(null),F=C.useRef(null),B=C.useRef(1),v=C.useRef(1),R=C.useRef(null),[K,S]=C.useState(!1),w=c?1.2:1.2*s,D=C.useCallback(T=>{i&&(p.current.innerText=`${v.current.toFixed(2)}`,p.current.style.display="block"),T.stopPropagation();const E=new Y().extractRotation(b.current.matrixWorld),P=T.point.clone(),G=new U().setFromMatrixPosition(b.current.matrixWorld),J=o.clone().applyMatrix4(E).normalize(),W=b.current.matrixWorld.clone(),Q=W.clone().invert(),L=c?1/ll(b.current.getWorldPosition(Ho),s,T.camera,x):1;R.current={clickPoint:P,dir:J,mPLG:W,mPLGInv:Q,offsetMultiplier:L},f({component:"Sphere",axis:e,origin:G,directions:[J]}),h&&(h.enabled=!1),T.target.setPointerCapture(T.pointerId)},[i,h,o,f,e,c,s,x]),M=C.useCallback(T=>{if(T.stopPropagation(),K||S(!0),R.current){const{clickPoint:E,dir:P,mPLG:G,mPLGInv:J,offsetMultiplier:W}=R.current,[Q,L]=(t==null?void 0:t[e])||[1e-5,void 0],oe=Lh(E,P,T.ray.origin,T.ray.direction)*W,se=c?oe:oe/s;let X=Math.pow(2,se*.2);T.shiftKey&&(X=Math.round(X*10)/10),X=Math.max(X,Q/B.current),L!==void 0&&(X=Math.min(X,L/B.current)),v.current=B.current*X,F.current.position.set(0,w+oe,0),i&&(p.current.innerText=`${v.current.toFixed(2)}`),To.set(1,1,1),To.setComponent(e,X),na.makeScale(To.x,To.y,To.z).premultiply(G).multiply(J),m(na)}},[i,w,m,K,t,e]),j=C.useCallback(T=>{i&&(p.current.style.display="none"),T.stopPropagation(),B.current=v.current,R.current=null,F.current.position.set(0,w,0),y(),h&&(h.enabled=!0),T.target.releasePointerCapture(T.pointerId)},[i,h,y,w]),I=C.useCallback(T=>{T.stopPropagation(),S(!1)},[]),{radius:H,matrixL:z}=C.useMemo(()=>{const T=c?a/s*1.8:s/22.5,E=new ke().setFromUnitVectors(Jh,o.clone().normalize()),P=new Y().makeRotationFromQuaternion(E);return{radius:T,matrixL:P}},[o,s,a,c]),k=K?A:d[e];return C.createElement("group",{ref:b},C.createElement("group",{matrix:z,matrixAutoUpdate:!1,onPointerDown:D,onPointerMove:M,onPointerUp:j,onPointerOut:I},i&&C.createElement(Ae,{position:[0,w/2,0]},C.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:n,ref:p})),C.createElement("mesh",{ref:F,position:[0,w,0],renderOrder:500,userData:g},C.createElement("sphereGeometry",{args:[H,12,12]}),C.createElement("meshBasicMaterial",{transparent:!0,depthTest:r,color:k,opacity:u,polygonOffset:!0,polygonOffsetFactor:-10}))))},ia=new Y,sa=new Y,ra=new Y,In=new Y,qi=new Y,no=new Y,aa=new Y,la=new Y,ca=new Y,io=new de,_i=new de,ua=new U,da=new U,fa=new U,Aa=new U,jo=new U,so=new U(1,0,0),ro=new U(0,1,0),ao=new U(0,0,1),Qh=C.forwardRef(({enabled:o=!0,matrix:e,onDragStart:t,onDrag:i,onDragEnd:n,autoTransform:r=!0,anchor:s,disableAxes:a=!1,disableSliders:c=!1,disableRotations:d=!1,disableScaling:A=!1,activeAxes:u=[!0,!0,!0],offset:f=[0,0,0],rotation:m=[0,0,0],scale:y=1,lineWidth:g=4,fixed:x=!1,translationLimits:h,rotationLimits:p,scaleLimits:b,depthTest:F=!0,axisColors:B=["#ff2060","#20df80","#2080ff"],hoveredColor:v="#ffff40",annotations:R=!1,annotationsClass:K,opacity:S=1,visible:w=!0,userData:D,children:M,...j},I)=>{const H=Le(L=>L.invalidate),z=C.useRef(null),k=C.useRef(null),T=C.useRef(null),E=C.useRef(null),P=C.useRef([0,0,0]),G=C.useRef(new U(1,1,1)),J=C.useRef(new U(1,1,1));C.useLayoutEffect(()=>{s&&(E.current.updateWorldMatrix(!0,!0),In.copy(E.current.matrixWorld).invert(),io.makeEmpty(),E.current.traverse(L=>{L.geometry&&(L.geometry.boundingBox||L.geometry.computeBoundingBox(),no.copy(L.matrixWorld).premultiply(In),_i.copy(L.geometry.boundingBox),_i.applyMatrix4(no),io.union(_i))}),ua.copy(io.max).add(io.min).multiplyScalar(.5),da.copy(io.max).sub(io.min).multiplyScalar(.5),fa.copy(da).multiply(new U(...s)).add(ua),Aa.set(...f).add(fa),T.current.position.copy(Aa),H())});const W=C.useMemo(()=>({onDragStart:L=>{ia.copy(k.current.matrix),sa.copy(k.current.matrixWorld),t&&t(L),H()},onDrag:L=>{ra.copy(z.current.matrixWorld),In.copy(ra).invert(),qi.copy(sa).premultiply(L),no.copy(qi).premultiply(In),aa.copy(ia).invert(),la.copy(no).multiply(aa),r&&k.current.matrix.copy(no),i&&i(no,la,qi,L),H()},onDragEnd:()=>{n&&n(),H()},translation:P,translationLimits:h,rotationLimits:p,axisColors:B,hoveredColor:v,opacity:S,scale:y,lineWidth:g,fixed:x,depthTest:F,userData:D,annotations:R,annotationsClass:K}),[t,i,n,P,h,p,b,F,y,g,x,...B,v,S,D,r,R,K]),Q=new U;return Jt(L=>{if(x){const Z=ll(T.current.getWorldPosition(Q),y,L.camera,L.size);G.current.setScalar(Z)}e&&e instanceof Y&&(k.current.matrix=e),k.current.updateWorldMatrix(!0,!0),ca.makeRotationFromEuler(T.current.rotation).setPosition(T.current.position).premultiply(k.current.matrixWorld),J.current.setFromMatrixScale(ca),jo.copy(G.current).divide(J.current),(Math.abs(T.current.scale.x-jo.x)>1e-4||Math.abs(T.current.scale.y-jo.y)>1e-4||Math.abs(T.current.scale.z-jo.z)>1e-4)&&(T.current.scale.copy(jo),L.invalidate())}),C.useImperativeHandle(I,()=>k.current,[]),C.createElement(on.Provider,{value:W},C.createElement("group",{ref:z},C.createElement("group",fo({ref:k,matrix:e,matrixAutoUpdate:!1},j),C.createElement("group",{visible:w,ref:T,position:f,rotation:m},o&&C.createElement(C.Fragment,null,!a&&u[0]&&C.createElement(Li,{axis:0,direction:so}),!a&&u[1]&&C.createElement(Li,{axis:1,direction:ro}),!a&&u[2]&&C.createElement(Li,{axis:2,direction:ao}),!c&&u[0]&&u[1]&&C.createElement(Yi,{axis:2,dir1:so,dir2:ro}),!c&&u[0]&&u[2]&&C.createElement(Yi,{axis:1,dir1:ao,dir2:so}),!c&&u[2]&&u[1]&&C.createElement(Yi,{axis:0,dir1:ro,dir2:ao}),!d&&u[0]&&u[1]&&C.createElement(Xi,{axis:2,dir1:so,dir2:ro}),!d&&u[0]&&u[2]&&C.createElement(Xi,{axis:1,dir1:ao,dir2:so}),!d&&u[2]&&u[1]&&C.createElement(Xi,{axis:0,dir1:ro,dir2:ao}),!A&&u[0]&&C.createElement(Zi,{axis:0,direction:so}),!A&&u[1]&&C.createElement(Zi,{axis:1,direction:ro}),!A&&u[2]&&C.createElement(Zi,{axis:2,direction:ao}))),C.createElement("group",{ref:E},M))))});class Ls extends go{constructor(e){super(e);for(const t in this.uniforms)Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(i){this.uniforms[t].value=i}})}setDefine(e,t=void 0){t==null?e in this.defines&&(delete this.defines[e],this.needsUpdate=!0):this.defines[e]!==t&&(this.defines[e]=t,this.needsUpdate=!0)}}class Wh extends Ls{constructor(e){super({blending:Es,uniforms:{target1:{value:null},target2:{value:null},opacity:{value:1}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				uniform float opacity;

				uniform sampler2D target1;
				uniform sampler2D target2;

				varying vec2 vUv;

				void main() {

					vec4 color1 = texture2D( target1, vUv );
					vec4 color2 = texture2D( target2, vUv );

					float invOpacity = 1.0 - opacity;
					float totalAlpha = color1.a * invOpacity + color2.a * opacity;

					if ( color1.a != 0.0 || color2.a != 0.0 ) {

						gl_FragColor.rgb = color1.rgb * ( invOpacity * color1.a / totalAlpha ) + color2.rgb * ( opacity * color2.a / totalAlpha );
						gl_FragColor.a = totalAlpha;

					} else {

						gl_FragColor = vec4( 0.0 );

					}

				}`}),this.setValues(e)}}function kn(o=1){let e="uint";return o>1&&(e="uvec"+o),`
		${e} sobolReverseBits( ${e} x ) {

			x = ( ( ( x & 0xaaaaaaaau ) >> 1 ) | ( ( x & 0x55555555u ) << 1 ) );
			x = ( ( ( x & 0xccccccccu ) >> 2 ) | ( ( x & 0x33333333u ) << 2 ) );
			x = ( ( ( x & 0xf0f0f0f0u ) >> 4 ) | ( ( x & 0x0f0f0f0fu ) << 4 ) );
			x = ( ( ( x & 0xff00ff00u ) >> 8 ) | ( ( x & 0x00ff00ffu ) << 8 ) );
			return ( ( x >> 16 ) | ( x << 16 ) );

		}

		${e} sobolHashCombine( uint seed, ${e} v ) {

			return seed ^ ( v + ${e}( ( seed << 6 ) + ( seed >> 2 ) ) );

		}

		${e} sobolLaineKarrasPermutation( ${e} x, ${e} seed ) {

			x += seed;
			x ^= x * 0x6c50b47cu;
			x ^= x * 0xb82f1e52u;
			x ^= x * 0xc7afe638u;
			x ^= x * 0x8d22f6e6u;
			return x;

		}

		${e} nestedUniformScrambleBase2( ${e} x, ${e} seed ) {

			x = sobolLaineKarrasPermutation( x, seed );
			x = sobolReverseBits( x );
			return x;

		}
	`}function zn(o=1){let e="uint",t="float",i="",n=".r",r="1u";return o>1&&(e="uvec"+o,t="vec"+o,i=o+"",o===2?(n=".rg",r="uvec2( 1u, 2u )"):o===3?(n=".rgb",r="uvec3( 1u, 2u, 3u )"):(n="",r="uvec4( 1u, 2u, 3u, 4u )")),`

		${t} sobol${i}( int effect ) {

			uint seed = sobolGetSeed( sobolBounceIndex, uint( effect ) );
			uint index = sobolPathIndex;

			uint shuffle_seed = sobolHashCombine( seed, 0u );
			uint shuffled_index = nestedUniformScrambleBase2( sobolReverseBits( index ), shuffle_seed );
			${t} sobol_pt = sobolGetTexturePoint( shuffled_index )${n};
			${e} result = ${e}( sobol_pt * 16777216.0 );

			${e} seed2 = sobolHashCombine( seed, ${r} );
			result = nestedUniformScrambleBase2( result, seed2 );

			return SOBOL_FACTOR * ${t}( result >> 8 );

		}
	`}const vl=`

	// Utils
	const float SOBOL_FACTOR = 1.0 / 16777216.0;
	const uint SOBOL_MAX_POINTS = 256u * 256u;

	${kn(1)}
	${kn(2)}
	${kn(3)}
	${kn(4)}

	uint sobolHash( uint x ) {

		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}

`,Vh=`

	const uint SOBOL_DIRECTIONS_1[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0xa0000000u, 0xf0000000u,
		0x88000000u, 0xcc000000u, 0xaa000000u, 0xff000000u,
		0x80800000u, 0xc0c00000u, 0xa0a00000u, 0xf0f00000u,
		0x88880000u, 0xcccc0000u, 0xaaaa0000u, 0xffff0000u,
		0x80008000u, 0xc000c000u, 0xa000a000u, 0xf000f000u,
		0x88008800u, 0xcc00cc00u, 0xaa00aa00u, 0xff00ff00u,
		0x80808080u, 0xc0c0c0c0u, 0xa0a0a0a0u, 0xf0f0f0f0u,
		0x88888888u, 0xccccccccu, 0xaaaaaaaau, 0xffffffffu
	);

	const uint SOBOL_DIRECTIONS_2[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x60000000u, 0x90000000u,
		0xe8000000u, 0x5c000000u, 0x8e000000u, 0xc5000000u,
		0x68800000u, 0x9cc00000u, 0xee600000u, 0x55900000u,
		0x80680000u, 0xc09c0000u, 0x60ee0000u, 0x90550000u,
		0xe8808000u, 0x5cc0c000u, 0x8e606000u, 0xc5909000u,
		0x6868e800u, 0x9c9c5c00u, 0xeeee8e00u, 0x5555c500u,
		0x8000e880u, 0xc0005cc0u, 0x60008e60u, 0x9000c590u,
		0xe8006868u, 0x5c009c9cu, 0x8e00eeeeu, 0xc5005555u
	);

	const uint SOBOL_DIRECTIONS_3[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x20000000u, 0x50000000u,
		0xf8000000u, 0x74000000u, 0xa2000000u, 0x93000000u,
		0xd8800000u, 0x25400000u, 0x59e00000u, 0xe6d00000u,
		0x78080000u, 0xb40c0000u, 0x82020000u, 0xc3050000u,
		0x208f8000u, 0x51474000u, 0xfbea2000u, 0x75d93000u,
		0xa0858800u, 0x914e5400u, 0xdbe79e00u, 0x25db6d00u,
		0x58800080u, 0xe54000c0u, 0x79e00020u, 0xb6d00050u,
		0x800800f8u, 0xc00c0074u, 0x200200a2u, 0x50050093u
	);

	const uint SOBOL_DIRECTIONS_4[ 32 ] = uint[ 32 ](
		0x80000000u, 0x40000000u, 0x20000000u, 0xb0000000u,
		0xf8000000u, 0xdc000000u, 0x7a000000u, 0x9d000000u,
		0x5a800000u, 0x2fc00000u, 0xa1600000u, 0xf0b00000u,
		0xda880000u, 0x6fc40000u, 0x81620000u, 0x40bb0000u,
		0x22878000u, 0xb3c9c000u, 0xfb65a000u, 0xddb2d000u,
		0x78022800u, 0x9c0b3c00u, 0x5a0fb600u, 0x2d0ddb00u,
		0xa2878080u, 0xf3c9c040u, 0xdb65a020u, 0x6db2d0b0u,
		0x800228f8u, 0x400b3cdcu, 0x200fb67au, 0xb00ddb9du
	);

	uint getMaskedSobol( uint index, uint directions[ 32 ] ) {

		uint X = 0u;
		for ( int bit = 0; bit < 32; bit ++ ) {

			uint mask = ( index >> bit ) & 1u;
			X ^= mask * directions[ bit ];

		}
		return X;

	}

	vec4 generateSobolPoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			return vec4( 0.0 );

		}

		// NOTEL this sobol "direction" is also available but we can't write out 5 components
		// uint x = index & 0x00ffffffu;
		uint x = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_1 ) ) & 0x00ffffffu;
		uint y = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_2 ) ) & 0x00ffffffu;
		uint z = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_3 ) ) & 0x00ffffffu;
		uint w = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_4 ) ) & 0x00ffffffu;

		return vec4( x, y, z, w ) * SOBOL_FACTOR;

	}

`,Xh=`

	// Seeds
	uniform sampler2D sobolTexture;
	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;

	uint sobolGetSeed( uint bounce, uint effect ) {

		return sobolHash(
			sobolHashCombine(
				sobolHashCombine(
					sobolHash( bounce ),
					sobolPixelIndex
				),
				effect
			)
		);

	}

	vec4 sobolGetTexturePoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			index = index % SOBOL_MAX_POINTS;

		}

		uvec2 dim = uvec2( textureSize( sobolTexture, 0 ).xy );
		uint y = index / dim.x;
		uint x = index - y * dim.x;
		vec2 uv = vec2( x, y ) / vec2( dim );
		return texture( sobolTexture, uv );

	}

	${zn(1)}
	${zn(2)}
	${zn(3)}
	${zn(4)}

`;class Yh extends Ls{constructor(){super({blending:Es,uniforms:{resolution:{value:new Ie}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`

				${vl}
				${Vh}

				varying vec2 vUv;
				uniform vec2 resolution;
				void main() {

					uint index = uint( gl_FragCoord.y ) * uint( resolution.x ) + uint( gl_FragCoord.x );
					gl_FragColor = generateSobolPoint( index );

				}
			`})}}class Zh{generate(e,t=256){const i=new Gn(t,t,{type:Re,format:Ce,minFilter:he,magFilter:he,generateMipmaps:!1}),n=e.getRenderTarget();e.setRenderTarget(i);const r=new Ao(new Yh);return r.material.resolution.set(t,t),r.render(e),e.setRenderTarget(n),r.dispose(),i}}function*qh(){const{_renderer:o,_fsQuad:e,_blendQuad:t,_primaryTarget:i,_blendTargets:n,_sobolTarget:r,_subframe:s,alpha:a,camera:c,material:d}=this,A=new Ne,u=new Ne,f=t.material;let[m,y]=n;for(;;){a?(f.opacity=this._opacityFactor/(this._samples+1),d.blending=Es,d.opacity=1):(d.opacity=this._opacityFactor/(this._samples+1),d.blending=PA);const[g,x,h,p]=s,b=i.width,F=i.height;d.resolution.set(b*h,F*p),d.sobolTexture=r.texture,d.stratifiedTexture.init(20,d.bounces+d.transmissiveBounces+5),d.stratifiedTexture.next(),d.seed++;const B=this.tiles.x||1,v=this.tiles.y||1,R=B*v,K=Math.ceil(b*h),S=Math.ceil(F*p),w=Math.floor(g*b),D=Math.floor(x*F),M=Math.ceil(K/B),j=Math.ceil(S/v);for(let I=0;I<v;I++)for(let H=0;H<B;H++){d.cameraWorldMatrix.copy(c.matrixWorld),d.invProjectionMatrix.copy(c.projectionMatrixInverse);let z=0;c.projectionMatrix.elements[15]>0&&(z=1),c.isEquirectCamera&&(z=2),d.setDefine("CAMERA_TYPE",z);const k=o.getRenderTarget(),T=o.autoClear,E=o.getScissorTest();o.getScissor(A),o.getViewport(u);let P=H,G=I;if(!this.stableTiles){const W=this._currentTile%(B*v);P=W%B,G=~~(W/B),this._currentTile=W+1}const J=v-G-1;i.scissor.set(w+P*M,D+J*j,Math.min(M,K-P*M),Math.min(j,S-J*j)),i.viewport.set(w,D,K,S),o.setRenderTarget(i),o.setScissorTest(!0),o.autoClear=!1,e.render(o),o.setViewport(u),o.setScissor(A),o.setScissorTest(E),o.setRenderTarget(k),o.autoClear=T,a&&(f.target1=m.texture,f.target2=i.texture,o.setRenderTarget(y),t.render(o),o.setRenderTarget(k)),this._samples+=1/R,H===B-1&&I===v-1&&(this._samples=Math.round(this._samples)),yield}[m,y]=[y,m]}}const pa=new ue;class _h{get material(){return this._fsQuad.material}set material(e){this._fsQuad.material=e}get target(){return this._alpha?this._blendTargets[1]:this._primaryTarget}set alpha(e){this._alpha!==e&&(e||(this._blendTargets[0].dispose(),this._blendTargets[1].dispose()),this._alpha=e,this.reset())}get alpha(){return this._alpha}get samples(){return this._samples}constructor(e){this.camera=null,this.tiles=new Ie(1,1),this.stableNoise=!1,this.stableTiles=!0,this._samples=0,this._subframe=new Ne(0,0,1,1),this._opacityFactor=1,this._renderer=e,this._alpha=!1,this._fsQuad=new Ao(null),this._blendQuad=new Ao(new Wh),this._task=null,this._currentTile=0,this._sobolTarget=new Zh().generate(e);const t=e.extensions.get("OES_texture_float_linear");this._primaryTarget=new Gn(1,1,{format:Ce,type:t?Re:Ke}),this._blendTargets=[new Gn(1,1,{format:Ce,type:t?Re:Ke}),new Gn(1,1,{format:Ce,type:t?Re:Ke})]}setSize(e,t){e=Math.ceil(e),t=Math.ceil(t),!(this._primaryTarget.width===e&&this._primaryTarget.height===t)&&(this._primaryTarget.setSize(e,t),this._blendTargets[0].setSize(e,t),this._blendTargets[1].setSize(e,t),this.reset())}dispose(){this._primaryTarget.dispose(),this._blendTargets[0].dispose(),this._blendTargets[1].dispose(),this._sobolTarget.dispose(),this._fsQuad.dispose(),this._blendQuad.dispose(),this._task=null}reset(){const{_renderer:e,_primaryTarget:t,_blendTargets:i}=this,n=e.getRenderTarget(),r=e.getClearAlpha();e.getClearColor(pa),e.setRenderTarget(t),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(i[0]),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(i[1]),e.setClearColor(0,0),e.clearColor(),e.setClearColor(pa,r),e.setRenderTarget(n),this._samples=0,this._task=null,this.stableNoise&&(this.material.seed=0)}update(){this._task||(this._task=qh.call(this)),this._task.next()}}function $h(o,e,t){const i=o.index,r=o.attributes.position.count,s=i?i.count:r;let a=o.groups;a.length===0&&(a=[{count:s,start:0,materialIndex:0}]);let c;t.length<=255?c=new Uint8Array(r):c=new Uint16Array(r);for(let d=0;d<a.length;d++){const A=a[d],u=A.start,f=A.count,m=Math.min(f,s-u),y=Array.isArray(e)?e[A.materialIndex]:e,g=t.indexOf(y);for(let x=0;x<m;x++){let h=u+x;i&&(h=i.getX(h)),c[h]=g}}return new me(c,1,!1)}function eg(o,e){const{attributes:t=[],normalMapRequired:i=!1}=e;if(!o.attributes.normal&&t&&t.includes("normal")&&o.computeVertexNormals(),!o.attributes.uv&&t&&t.includes("uv")){const n=o.attributes.position.count;o.setAttribute("uv",new me(new Float32Array(n*2),2,!1))}if(!o.attributes.uv2&&t&&t.includes("uv2")){const n=o.attributes.position.count;o.setAttribute("uv2",new me(new Float32Array(n*2),2,!1))}if(!o.attributes.tangent&&t&&t.includes("tangent"))if(i)o.index===null&&(o=HA(o)),o.computeTangents();else{const n=o.attributes.position.count;o.setAttribute("tangent",new me(new Float32Array(n*4),4,!1))}if(!o.attributes.color&&t&&t.includes("color")){const n=o.attributes.position.count,r=new Float32Array(n*4);r.fill(1),o.setAttribute("color",new me(r,4))}if(!o.index){const n=o.attributes.position.count,r=new Array(n);for(let s=0;s<n;s++)r[s]=s;o.setIndex(r)}}const tg=new lt;function og(){const o=new Xe;return o.setAttribute("position",new me(new Float32Array(9),3)),new je(o,tg)}class ng{get initialized(){return!!this.bvh}constructor(e){Array.isArray(e)||(e=[e]);const t=[...e];t.length===0&&t.push(og()),this.bvhOptions={},this.attributes=["position","normal","tangent","color","uv","uv2"],this.objects=t,this.bvh=null,this.geometry=new Xe,this.materials=null,this.textures=null,this.lights=[],this.staticGeometryGenerator=new Yr(this.objects)}reset(){this.bvh=null,this.geometry.dispose(),this.geometry=new Xe,this.materials=null,this.textures=null,this.lights=[],this.staticGeometryGenerator=new Yr(this.objects)}dispose(){}prepScene(){if(this.bvh!==null)return;const{objects:e,staticGeometryGenerator:t,geometry:i,lights:n,attributes:r}=this;for(let d=0,A=e.length;d<A;d++)e[d].traverse(u=>{if(u.isMesh){const f=!!u.material.normalMap;eg(u.geometry,{attributes:r,normalMapRequired:f})}else(u.isRectAreaLight||u.isSpotLight||u.isPointLight||u.isDirectionalLight)&&n.push(u)});const s=new Set,a=t.getMaterials();a.forEach(d=>{for(const A in d){const u=d[A];u&&u.isTexture&&s.add(u)}}),t.attributes=r,t.generate(i);const c=$h(i,a,a);i.setAttribute("materialIndex",c),i.clearGroups(),this.materials=a,this.textures=Array.from(s)}generate(){const{objects:e,staticGeometryGenerator:t,geometry:i,bvhOptions:n}=this;if(this.bvh===null)return this.prepScene(),this.bvh=new Ns(i,{strategy:Al,maxLeafTris:1,...n}),{lights:this.lights,bvh:this.bvh,materials:this.materials,textures:this.textures,objects:e};{const{bvh:r}=this;return t.generate(i),r.refit(),{lights:this.lights,bvh:this.bvh,materials:this.materials,textures:this.textures,objects:e}}}}class ig extends Ds{set bokehSize(e){this.fStop=this.getFocalLength()/e}get bokehSize(){return this.getFocalLength()/this.fStop}constructor(...e){super(...e),this.fStop=1.4,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=25,this.anamorphicRatio=1}copy(e,t){return super.copy(e,t),this.fStop=e.fStop,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio,this}}function Fs(o){return`${o.source.uuid}:${o.colorSpace}`}function Rl(o){const e=new Set,t=[];for(let i=0,n=o.length;i<n;i++){const r=o[i],s=Fs(r);e.has(s)||(e.add(s),t.push(r))}return t}const Sl=45,lo=Sl*4,ma=14*4+0,ha=14*4+1;class sg{constructor(){this._features={}}isUsed(e){return e in this._features}setUsed(e,t=!0){t===!1?delete this._features[e]:this._features[e]=!0}reset(){this._features={}}}class rg extends Te{constructor(){super(new Float32Array(4),1,1),this.format=Ce,this.type=Re,this.wrapS=Mt,this.wrapT=Mt,this.minFilter=he,this.magFilter=he,this.generateMipmaps=!1,this.threeCompatibilityTransforms=!1,this.features=new sg}setCastShadow(e,t){const i=this.image.data,n=e*lo+ha;i[n]=t?0:1}getCastShadow(e){const t=this.image.data,i=e*lo+ha;return!t[i]}setMatte(e,t){const i=this.image.data,n=e*lo+ma;i[n]=t?1:0}getMatte(e){const t=this.image.data,i=e*lo+ma;return!!t[i]}updateFrom(e,t){function i(x,h,p=-1){if(h in x&&x[h]){const b=Fs(x[h]);return y[b]}else return p}function n(x,h,p){return h in x?x[h]:p}function r(x){return x.map||x.specularMap||x.displacementMap||x.normalMap||x.bumpMap||x.roughnessMap||x.metalnessMap||x.alphaMap||x.emissiveMap||x.clearcoatMap||x.clearcoatNormalMap||x.clearcoatRoughnessMap||x.iridescenceMap||x.iridescenceThicknessMap||x.specularIntensityMap||x.specularColorMap||x.transmissionMap||x.thicknessMap||x.sheenColorMap||x.sheenRoughnessMap||null}function s(x,h,p,b){let F;if(A?F=r(x):F=x[h]&&x[h].isTexture?x[h]:null,F){const B=F.matrix.elements;let v=0;p[b+v++]=B[0],p[b+v++]=B[3],p[b+v++]=B[6],v++,p[b+v++]=B[1],p[b+v++]=B[4],p[b+v++]=B[7],v++}return 8}let a=0;const c=e.length*Sl,d=Math.ceil(Math.sqrt(c))||1,{threeCompatibilityTransforms:A,image:u,features:f}=this,m=Rl(t),y={};for(let x=0,h=m.length;x<h;x++)y[Fs(m[x])]=x;u.width!==d&&(this.dispose(),u.data=new Float32Array(d*d*4),u.width=d,u.height=d);const g=u.data;f.reset();for(let x=0,h=e.length;x<h;x++){const p=e[x];if(p.isFogVolumeMaterial){f.setUsed("FOG");for(let B=0;B<lo;B++)g[a+B]=0;g[a+0*4+0]=p.color.r,g[a+0*4+1]=p.color.g,g[a+0*4+2]=p.color.b,g[a+2*4+3]=n(p,"emissiveIntensity",0),g[a+3*4+0]=p.emissive.r,g[a+3*4+1]=p.emissive.g,g[a+3*4+2]=p.emissive.b,g[a+13*4+1]=p.density,g[a+13*4+3]=0,g[a+14*4+2]=4,a+=lo;continue}g[a++]=p.color.r,g[a++]=p.color.g,g[a++]=p.color.b,g[a++]=i(p,"map"),g[a++]=n(p,"metalness",0),g[a++]=i(p,"metalnessMap"),g[a++]=n(p,"roughness",0),g[a++]=i(p,"roughnessMap"),g[a++]=n(p,"ior",1.5),g[a++]=n(p,"transmission",0),g[a++]=i(p,"transmissionMap"),g[a++]=n(p,"emissiveIntensity",0),"emissive"in p?(g[a++]=p.emissive.r,g[a++]=p.emissive.g,g[a++]=p.emissive.b):(g[a++]=0,g[a++]=0,g[a++]=0),g[a++]=i(p,"emissiveMap"),g[a++]=i(p,"normalMap"),"normalScale"in p?(g[a++]=p.normalScale.x,g[a++]=p.normalScale.y):(g[a++]=1,g[a++]=1),g[a++]=n(p,"clearcoat",0),g[a++]=i(p,"clearcoatMap"),g[a++]=n(p,"clearcoatRoughness",0),g[a++]=i(p,"clearcoatRoughnessMap"),g[a++]=i(p,"clearcoatNormalMap"),"clearcoatNormalScale"in p?(g[a++]=p.clearcoatNormalScale.x,g[a++]=p.clearcoatNormalScale.y):(g[a++]=1,g[a++]=1),a++,g[a++]=n(p,"sheen",0),"sheenColor"in p?(g[a++]=p.sheenColor.r,g[a++]=p.sheenColor.g,g[a++]=p.sheenColor.b):(g[a++]=0,g[a++]=0,g[a++]=0),g[a++]=i(p,"sheenColorMap"),g[a++]=n(p,"sheenRoughness",0),g[a++]=i(p,"sheenRoughnessMap"),g[a++]=i(p,"iridescenceMap"),g[a++]=i(p,"iridescenceThicknessMap"),g[a++]=n(p,"iridescence",0),g[a++]=n(p,"iridescenceIOR",1.3);const b=n(p,"iridescenceThicknessRange",[100,400]);g[a++]=b[0],g[a++]=b[1],"specularColor"in p?(g[a++]=p.specularColor.r,g[a++]=p.specularColor.g,g[a++]=p.specularColor.b):(g[a++]=1,g[a++]=1,g[a++]=1),g[a++]=i(p,"specularColorMap"),g[a++]=n(p,"specularIntensity",1),g[a++]=i(p,"specularIntensityMap");const F=n(p,"thickness",0)===0&&n(p,"attenuationDistance",1/0)===1/0;if(g[a++]=Number(F),a++,"attenuationColor"in p?(g[a++]=p.attenuationColor.r,g[a++]=p.attenuationColor.g,g[a++]=p.attenuationColor.b):(g[a++]=1,g[a++]=1,g[a++]=1),g[a++]=n(p,"attenuationDistance",1/0),g[a++]=i(p,"alphaMap"),g[a++]=p.opacity,g[a++]=p.alphaTest,!F&&p.transmission>0)g[a++]=0;else switch(p.side){case Wn:g[a++]=1;break;case ni:g[a++]=-1;break;case Lt:g[a++]=0;break}a++,a++,g[a++]=Number(p.vertexColors)|Number(p.flatShading)<<1,g[a++]=Number(p.transparent),a+=s(p,"map",g,a),a+=s(p,"metalnessMap",g,a),a+=s(p,"roughnessMap",g,a),a+=s(p,"transmissionMap",g,a),a+=s(p,"emissiveMap",g,a),a+=s(p,"normalMap",g,a),a+=s(p,"clearcoatMap",g,a),a+=s(p,"clearcoatNormalMap",g,a),a+=s(p,"clearcoatRoughnessMap",g,a),a+=s(p,"sheenColorMap",g,a),a+=s(p,"sheenRoughnessMap",g,a),a+=s(p,"iridescenceMap",g,a),a+=s(p,"iridescenceThicknessMap",g,a),a+=s(p,"specularColorMap",g,a),a+=s(p,"specularIntensityMap",g,a)}this.needsUpdate=!0}}const ga=new ue;class ag extends Xa{constructor(...e){super(...e);const t=this.texture;t.format=Ce,t.type=cs,t.minFilter=Fe,t.magFilter=Fe,t.wrapS=Bt,t.wrapT=Bt,t.setTextures=(...n)=>{this.setTextures(...n)};const i=new Ao(new lg);this.fsQuad=i}setTextures(e,t,i,n){const r=Rl(n),s=e.getRenderTarget(),a=e.toneMapping,c=e.getClearAlpha();e.getClearColor(ga);const d=r.length||1;this.setSize(t,i,d),e.setClearColor(0,0),e.toneMapping=Ya;const A=this.fsQuad;for(let u=0,f=d;u<f;u++){const m=r[u];m&&(m.matrixAutoUpdate=!1,m.matrix.identity(),A.material.map=m,e.setRenderTarget(this,u),A.render(e),m.updateMatrix(),m.matrixAutoUpdate=!0)}A.material.map=null,e.setClearColor(ga,c),e.setRenderTarget(s),e.toneMapping=a}dispose(){super.dispose(),this.fsQuad.dispose()}}class lg extends go{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}constructor(){super({uniforms:{map:{value:null}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				varying vec2 vUv;
				void main() {

					gl_FragColor = texture2D( map, vUv );

				}
			`})}}function Xo(o){const e=new Uint16Array(o.length);for(let t=0,i=o.length;t<i;++t)e[t]=Ct.toHalfFloat(o[t]);return e}function xa(o,e,t=0,i=o.length){let n=t,r=t+i-1;for(;n<r;){const s=n+r>>1;o[s]<e?n=s+1:r=s}return n-t}function cg(o,e,t){return .2126*o+.7152*e+.0722*t}function ug(o,e=Ke){const t=o.clone();t.source=new OA({...t.image});const{width:i,height:n,data:r}=t.image;let s=r;if(t.type!==e){e===Ke?s=new Uint16Array(r.length):s=new Float32Array(r.length);let a;r instanceof Int8Array||r instanceof Int16Array||r instanceof Int32Array?a=2**(8*r.BYTES_PER_ELEMENT-1)-1:a=2**(8*r.BYTES_PER_ELEMENT)-1;for(let c=0,d=r.length;c<d;c++){let A=r[c];t.type===Ke&&(A=Ct.fromHalfFloat(r[c])),t.type!==Re&&t.type!==Ke&&(A/=a),e===Ke&&(s[c]=Ct.toHalfFloat(A))}t.image.data=s,t.type=e}if(t.flipY){const a=s;s=s.slice();for(let c=0;c<n;c++)for(let d=0;d<i;d++){const A=n-c-1,u=4*(c*i+d),f=4*(A*i+d);s[f+0]=a[u+0],s[f+1]=a[u+1],s[f+2]=a[u+2],s[f+3]=a[u+3]}t.flipY=!1,t.image.data=s}return t}class dg{constructor(){const e=new Te(Xo(new Float32Array([1,1,1,1])),1,1);e.type=Ke,e.format=Ce,e.minFilter=Fe,e.magFilter=Fe,e.wrapS=Bt,e.wrapT=Bt,e.generateMipmaps=!1,e.needsUpdate=!0;const t=new Te(Xo(new Float32Array([0,1])),1,2);t.type=Ke,t.format=Gt,t.minFilter=Fe,t.magFilter=Fe,t.generateMipmaps=!1,t.needsUpdate=!0;const i=new Te(Xo(new Float32Array([0,0,1,1])),2,2);i.type=Ke,i.format=Gt,i.minFilter=Fe,i.magFilter=Fe,i.generateMipmaps=!1,i.needsUpdate=!0,this.map=e,this.marginalWeights=t,this.conditionalWeights=i,this.totalSum=1}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(e){const t=ug(e);t.wrapS=Bt,t.wrapT=Mt;const{width:i,height:n,data:r}=t.image,s=new Float32Array(i*n),a=new Float32Array(i*n),c=new Float32Array(n),d=new Float32Array(n);let A=0,u=0;for(let x=0;x<n;x++){let h=0;for(let p=0;p<i;p++){const b=x*i+p,F=Ct.fromHalfFloat(r[4*b+0]),B=Ct.fromHalfFloat(r[4*b+1]),v=Ct.fromHalfFloat(r[4*b+2]),R=cg(F,B,v);h+=R,A+=R,s[b]=R,a[b]=h}if(h!==0)for(let p=x*i,b=x*i+i;p<b;p++)s[p]/=h,a[p]/=h;u+=h,c[x]=h,d[x]=u}if(u!==0)for(let x=0,h=c.length;x<h;x++)c[x]/=u,d[x]/=u;const f=new Uint16Array(n),m=new Uint16Array(i*n);for(let x=0;x<n;x++){const h=(x+1)/n,p=xa(d,h);f[x]=Ct.toHalfFloat((p+.5)/n)}for(let x=0;x<n;x++)for(let h=0;h<i;h++){const p=x*i+h,b=(h+1)/i,F=xa(a,b,x*i,i);m[p]=Ct.toHalfFloat((F+.5)/i)}this.dispose();const{marginalWeights:y,conditionalWeights:g}=this;y.image={width:n,height:1,data:f},y.needsUpdate=!0,g.image={width:i,height:n,data:m},g.needsUpdate=!0,this.totalSum=A,this.map=t}}class fg{constructor(){this.bokehSize=0,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=10,this.anamorphicRatio=1}updateFrom(e){e instanceof ig?(this.bokehSize=e.bokehSize,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio):(this.bokehSize=0,this.apertureRotation=0,this.apertureBlades=0,this.focusDistance=10,this.anamorphicRatio=1)}}const $i=6,Ag=0,pg=1,mg=2,hg=3,gg=4;class xg{constructor(){const e=new Te(new Float32Array(4),1,1);e.format=Ce,e.type=Re,e.wrapS=Mt,e.wrapT=Mt,e.generateMipmaps=!1,e.minFilter=he,e.magFilter=he,this.tex=e,this.count=0}updateFrom(e,t=[]){const i=this.tex,n=Math.max(e.length*$i,1),r=Math.ceil(Math.sqrt(n));i.image.width!==r&&(i.dispose(),i.image.data=new Float32Array(r*r*4),i.image.width=r,i.image.height=r);const s=i.image.data,a=new U,c=new U,d=new Y,A=new ke,u=new U,f=new U,m=new U(0,1,0);for(let y=0,g=e.length;y<g;y++){const x=e[y],h=y*$i*4;let p=0;for(let F=0;F<$i*4;F++)s[h+F]=0;x.getWorldPosition(c),s[h+p++]=c.x,s[h+p++]=c.y,s[h+p++]=c.z;let b=Ag;if(x.isRectAreaLight&&x.isCircular?b=pg:x.isSpotLight?b=mg:x.isDirectionalLight?b=hg:x.isPointLight&&(b=gg),s[h+p++]=b,s[h+p++]=x.color.r,s[h+p++]=x.color.g,s[h+p++]=x.color.b,s[h+p++]=x.intensity,x.getWorldQuaternion(A),x.isRectAreaLight)a.set(x.width,0,0).applyQuaternion(A),s[h+p++]=a.x,s[h+p++]=a.y,s[h+p++]=a.z,p++,c.set(0,x.height,0).applyQuaternion(A),s[h+p++]=c.x,s[h+p++]=c.y,s[h+p++]=c.z,s[h+p++]=a.cross(c).length()*(x.isCircular?Math.PI/4:1);else if(x.isSpotLight){const F=x.radius||0;u.setFromMatrixPosition(x.matrixWorld),f.setFromMatrixPosition(x.target.matrixWorld),d.lookAt(u,f,m),A.setFromRotationMatrix(d),a.set(1,0,0).applyQuaternion(A),s[h+p++]=a.x,s[h+p++]=a.y,s[h+p++]=a.z,p++,c.set(0,1,0).applyQuaternion(A),s[h+p++]=c.x,s[h+p++]=c.y,s[h+p++]=c.z,s[h+p++]=Math.PI*F*F,s[h+p++]=F,s[h+p++]=x.decay,s[h+p++]=x.distance,s[h+p++]=Math.cos(x.angle),s[h+p++]=Math.cos(x.angle*(1-x.penumbra)),s[h+p++]=x.iesTexture?t.indexOf(x.iesTexture):-1}else if(x.isPointLight){const F=a.setFromMatrixPosition(x.matrixWorld);s[h+p++]=F.x,s[h+p++]=F.y,s[h+p++]=F.z,p++,p+=4,p+=1,s[h+p++]=x.decay,s[h+p++]=x.distance}else if(x.isDirectionalLight){const F=a.setFromMatrixPosition(x.matrixWorld),B=c.setFromMatrixPosition(x.target.matrixWorld);f.subVectors(F,B).normalize(),s[h+p++]=f.x,s[h+p++]=f.y,s[h+p++]=f.z}}i.needsUpdate=!0,this.count=e.length}}function ya(o){const e=this,t=o.split(`
`);let i=0,n;e.verAngles=[],e.horAngles=[],e.candelaValues=[],e.tiltData={},e.tiltData.angles=[],e.tiltData.mulFactors=[];function r(u){return u=u.trim(),u=u.replace(/,/g," "),u=u.replace(/\s\s+/g," "),u.split(" ")}function s(u,f){for(;;){const m=t[i++],y=r(m);for(let g=0;g<y.length;++g)f.push(Number(y[g]));if(f.length===u)break}}function a(){let u=t[i++],f=r(u);e.tiltData.lampToLumGeometry=Number(f[0]),u=t[i++],f=r(u),e.tiltData.numAngles=Number(f[0]),s(e.tiltData.numAngles,e.tiltData.angles),s(e.tiltData.numAngles,e.tiltData.mulFactors)}function c(){const u=[];s(10,u),e.count=Number(u[0]),e.lumens=Number(u[1]),e.multiplier=Number(u[2]),e.numVerAngles=Number(u[3]),e.numHorAngles=Number(u[4]),e.gonioType=Number(u[5]),e.units=Number(u[6]),e.width=Number(u[7]),e.length=Number(u[8]),e.height=Number(u[9])}function d(){const u=[];s(3,u),e.ballFactor=Number(u[0]),e.blpFactor=Number(u[1]),e.inputWatts=Number(u[2])}for(;n=t[i++],!n.includes("TILT"););n.includes("NONE")||n.includes("INCLUDE")&&a(),c(),d();for(let u=0;u<e.numHorAngles;++u)e.candelaValues.push([]);s(e.numVerAngles,e.verAngles),s(e.numHorAngles,e.horAngles);for(let u=0;u<e.numHorAngles;++u)s(e.numVerAngles,e.candelaValues[u]);for(let u=0;u<e.numHorAngles;++u)for(let f=0;f<e.numVerAngles;++f)e.candelaValues[u][f]*=e.candelaValues[u][f]*e.multiplier*e.ballFactor*e.blpFactor;let A=-1;for(let u=0;u<e.numHorAngles;++u)for(let f=0;f<e.numVerAngles;++f){const m=e.candelaValues[u][f];A=A<m?m:A}if(A>0)for(let u=0;u<e.numHorAngles;++u)for(let f=0;f<e.numVerAngles;++f)e.candelaValues[u][f]/=A}class yg extends Ks{_getIESValues(e){const r=new Float32Array(64800);function s(d,A){let u=0,f=0,m=0,y=0,g=0,x=0;for(let S=0;S<e.numHorAngles-1;++S)if(A<e.horAngles[S+1]||S==e.numHorAngles-2){f=S,m=e.horAngles[S],y=e.horAngles[S+1];break}for(let S=0;S<e.numVerAngles-1;++S)if(d<e.verAngles[S+1]||S==e.numVerAngles-2){u=S,g=e.verAngles[S],x=e.verAngles[S+1];break}const h=y-m,p=x-g;if(p===0)return 0;const b=h===0?0:(A-m)/h,F=(d-g)/p,B=h===0?f:f+1,v=vt.lerp(e.candelaValues[f][u],e.candelaValues[B][u],b),R=vt.lerp(e.candelaValues[f][u+1],e.candelaValues[B][u+1],b);return vt.lerp(v,R,F)}const a=e.horAngles[0],c=e.horAngles[e.numHorAngles-1];for(let d=0;d<64800;++d){let A=d%360;const u=Math.floor(d/360);c-a!==0&&(A<a||A>=c)&&(A%=c*2,A>c&&(A=c*2-A)),r[d]=s(u,A)}return r}load(e,t,i,n){const r=new Zo(this.manager);r.setResponseType("text"),r.setCrossOrigin(this.crossOrigin),r.setWithCredentials(this.withCredentials),r.setPath(this.path),r.setRequestHeader(this.requestHeader);const s=new Te(null,360,180,Gt,Ke);return s.minFilter=Fe,s.magFilter=Fe,r.load(e,a=>{const c=new ya(a);s.image.data=Xo(this._getIESValues(c)),s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}parse(e){const t=new ya(e),i=new Te(null,360,180,Gt,Ke);return i.minFilter=Fe,i.magFilter=Fe,i.image.data=Xo(this._getIESValues(t)),i.needsUpdate=!0,i}}const ba=new ue;class bg extends Xa{constructor(...e){super(...e);const t=this.texture;t.format=Ce,t.type=Ke,t.minFilter=Fe,t.magFilter=Fe,t.wrapS=Mt,t.wrapT=Mt,t.generateMipmaps=!1,t.updateFrom=(...n)=>{this.updateFrom(...n)};const i=new Ao(new lt);this.fsQuad=i,this.iesLoader=new yg}async updateFrom(e,t){const i=e.getRenderTarget(),n=e.toneMapping,r=e.getClearAlpha();e.getClearColor(ba);const s=t.length||1;this.setSize(360,180,s),e.setClearColor(0,0),e.toneMapping=Ya;const a=this.fsQuad;for(let c=0,d=s;c<d;c++){const A=t[c];A&&(A.matrixAutoUpdate=!1,A.matrix.identity(),a.material.map=A,a.material.transparent=!0,e.setRenderTarget(this,c),a.render(e),A.updateMatrix(),A.matrixAutoUpdate=!0)}a.material.map=null,e.setClearColor(ba,r),e.setRenderTarget(i),e.toneMapping=n,a.dispose()}dispose(){super.dispose(),this.fsQuad.dispose()}}const Cg=`

	// TODO: possibly this should be renamed something related to material or path tracing logic

	#ifndef RAY_OFFSET
	#define RAY_OFFSET 1e-4
	#endif

	// adjust the hit point by the surface normal by a factor of some offset and the
	// maximum component-wise value of the current point to accommodate floating point
	// error as values increase.
	vec3 stepRayOrigin( vec3 rayOrigin, vec3 rayDirection, vec3 offset, float dist ) {

		vec3 point = rayOrigin + rayDirection * dist;
		vec3 absPoint = abs( point );
		float maxPoint = max( absPoint.x, max( absPoint.y, absPoint.z ) );
		return point + offset * ( maxPoint + 1.0 ) * RAY_OFFSET;

	}

	// https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md#attenuation
	vec3 transmissionAttenuation( float dist, vec3 attColor, float attDist ) {

		vec3 ot = - log( attColor ) / attDist;
		return exp( - ot * dist );

	}

	vec3 getHalfVector( vec3 wi, vec3 wo, float eta ) {

		// get the half vector - assuming if the light incident vector is on the other side
		// of the that it's transmissive.
		vec3 h;
		if ( wi.z > 0.0 ) {

			h = normalize( wi + wo );

		} else {

			// Scale by the ior ratio to retrieve the appropriate half vector
			// From Section 2.2 on computing the transmission half vector:
			// https://blog.selfshadow.com/publications/s2015-shading-course/burley/s2015_pbs_disney_bsdf_notes.pdf
			h = normalize( wi + wo * eta );

		}

		h *= sign( h.z );
		return h;

	}

	vec3 getHalfVector( vec3 a, vec3 b ) {

		return normalize( a + b );

	}

	// The discrepancy between interpolated surface normal and geometry normal can cause issues when a ray
	// is cast that is on the top side of the geometry normal plane but below the surface normal plane. If
	// we find a ray like that we ignore it to avoid artifacts.
	// This function returns if the direction is on the same side of both planes.
	bool isDirectionValid( vec3 direction, vec3 surfaceNormal, vec3 geometryNormal ) {

		bool aboveSurfaceNormal = dot( direction, surfaceNormal ) > 0.0;
		bool aboveGeometryNormal = dot( direction, geometryNormal ) > 0.0;
		return aboveSurfaceNormal == aboveGeometryNormal;

	}

	// ray sampling x and z are swapped to align with expected background view
	vec2 equirectDirectionToUv( vec3 direction ) {

		// from Spherical.setFromCartesianCoords
		vec2 uv = vec2( atan( direction.z, direction.x ), acos( direction.y ) );
		uv /= vec2( 2.0 * PI, PI );

		// apply adjustments to get values in range [0, 1] and y right side up
		uv.x += 0.5;
		uv.y = 1.0 - uv.y;
		return uv;

	}

	vec3 equirectUvToDirection( vec2 uv ) {

		// undo above adjustments
		uv.x -= 0.5;
		uv.y = 1.0 - uv.y;

		// from Vector3.setFromSphericalCoords
		float theta = uv.x * 2.0 * PI;
		float phi = uv.y * PI;

		float sinPhi = sin( phi );

		return vec3( sinPhi * cos( theta ), cos( phi ), sinPhi * sin( theta ) );

	}

	// power heuristic for multiple importance sampling
	float misHeuristic( float a, float b ) {

		float aa = a * a;
		float bb = b * b;
		return aa / ( aa + bb );

	}

	// tentFilter from Peter Shirley's 'Realistic Ray Tracing (2nd Edition)' book, pg. 60
	// erichlof/THREE.js-PathTracing-Renderer/
	float tentFilter( float x ) {

		return x < 0.5 ? sqrt( 2.0 * x ) - 1.0 : 1.0 - sqrt( 2.0 - ( 2.0 * x ) );

	}
`;function Ca(o,e,t,i,n){if(e>i)throw new Error;const r=o.length/e,s=o.constructor.BYTES_PER_ELEMENT*8;let a=1;switch(o.constructor){case Uint8Array:case Uint16Array:case Uint32Array:a=2**s-1;break;case Int8Array:case Int16Array:case Int32Array:a=2**(s-1)-1;break}for(let c=0;c<r;c++){const d=4*c,A=e*c;for(let u=0;u<i;u++)t[n+d+u]=e>=u+1?o[A+u]/a:0}}class Fg extends GA{constructor(){super(),this._textures=[],this.type=Re,this.format=Ce,this.internalFormat="RGBA32F"}updateAttribute(e,t){const i=this._textures[e];i.updateFrom(t);const n=i.image,r=this.image;if(n.width!==r.width||n.height!==r.height)throw new Error("FloatAttributeTextureArray: Attribute must be the same dimensions when updating single layer.");const{width:s,height:a,data:c}=r,A=s*a*4*e;let u=t.itemSize;u===3&&(u=4),Ca(i.image.data,u,c,4,A),this.dispose(),this.needsUpdate=!0}setAttributes(e){const t=e[0].count,i=e.length;for(let u=0,f=i;u<f;u++)if(e[u].count!==t)throw new Error("FloatAttributeTextureArray: All attributes must have the same item count.");const n=this._textures;for(;n.length<i;){const u=new Fl;n.push(u)}for(;n.length>i;)n.pop();for(let u=0,f=i;u<f;u++)n[u].updateFrom(e[u]);const s=n[0].image,a=this.image;(s.width!==a.width||s.height!==a.height||s.depth!==i)&&(a.width=s.width,a.height=s.height,a.depth=i,a.data=new Float32Array(a.width*a.height*a.depth*4));const{data:c,width:d,height:A}=a;for(let u=0,f=i;u<f;u++){const m=n[u],g=d*A*4*u;let x=e[u].itemSize;x===3&&(x=4),Ca(m.image.data,x,c,4,g)}this.dispose(),this.needsUpdate=!0}}class Bg extends Fg{updateNormalAttribute(e){this.updateAttribute(0,e)}updateTangentAttribute(e){this.updateAttribute(1,e)}updateUvAttribute(e){this.updateAttribute(2,e)}updateColorAttribute(e){this.updateAttribute(3,e)}updateFrom(e,t,i,n){this.setAttributes([e,t,i,n])}}const vg=`

	struct PhysicalCamera {

		float focusDistance;
		float anamorphicRatio;
		float bokehSize;
		int apertureBlades;
		float apertureRotation;

	};

`,Rg=`

	struct EquirectHdrInfo {

		sampler2D marginalWeights;
		sampler2D conditionalWeights;
		sampler2D map;

		float totalSum;

	};

`,Sg=`

	#define RECT_AREA_LIGHT_TYPE 0
	#define CIRC_AREA_LIGHT_TYPE 1
	#define SPOT_LIGHT_TYPE 2
	#define DIR_LIGHT_TYPE 3
	#define POINT_LIGHT_TYPE 4

	struct LightsInfo {

		sampler2D tex;
		uint count;

	};

	struct Light {

		vec3 position;
		int type;

		vec3 color;
		float intensity;

		vec3 u;
		vec3 v;
		float area;

		// spot light fields
		float radius;
		float near;
		float decay;
		float distance;
		float coneCos;
		float penumbraCos;
		int iesProfile;

	};

	Light readLightInfo( sampler2D tex, uint index ) {

		uint i = index * 6u;

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );

		Light l;
		l.position = s0.rgb;
		l.type = int( round( s0.a ) );

		l.color = s1.rgb;
		l.intensity = s1.a;

		l.u = s2.rgb;
		l.v = s3.rgb;
		l.area = s3.a;

		if ( l.type == SPOT_LIGHT_TYPE || l.type == POINT_LIGHT_TYPE ) {

			vec4 s4 = texelFetch1D( tex, i + 4u );
			vec4 s5 = texelFetch1D( tex, i + 5u );
			l.radius = s4.r;
			l.decay = s4.g;
			l.distance = s4.b;
			l.coneCos = s4.a;

			l.penumbraCos = s5.r;
			l.iesProfile = int( round( s5.g ) );

		} else {

			l.radius = 0.0;
			l.decay = 0.0;
			l.distance = 0.0;

			l.coneCos = 0.0;
			l.penumbraCos = 0.0;
			l.iesProfile = - 1;

		}

		return l;

	}

`,Mg=`

	struct Material {

		vec3 color;
		int map;

		float metalness;
		int metalnessMap;

		float roughness;
		int roughnessMap;

		float ior;
		float transmission;
		int transmissionMap;

		float emissiveIntensity;
		vec3 emissive;
		int emissiveMap;

		int normalMap;
		vec2 normalScale;

		float clearcoat;
		int clearcoatMap;
		int clearcoatNormalMap;
		vec2 clearcoatNormalScale;
		float clearcoatRoughness;
		int clearcoatRoughnessMap;

		int iridescenceMap;
		int iridescenceThicknessMap;
		float iridescence;
		float iridescenceIor;
		float iridescenceThicknessMinimum;
		float iridescenceThicknessMaximum;

		vec3 specularColor;
		int specularColorMap;

		float specularIntensity;
		int specularIntensityMap;
		bool thinFilm;

		vec3 attenuationColor;
		float attenuationDistance;

		int alphaMap;

		bool castShadow;
		float opacity;
		float alphaTest;

		float side;
		bool matte;

		float sheen;
		vec3 sheenColor;
		int sheenColorMap;
		float sheenRoughness;
		int sheenRoughnessMap;

		bool vertexColors;
		bool flatShading;
		bool transparent;
		bool fogVolume;

		mat3 mapTransform;
		mat3 metalnessMapTransform;
		mat3 roughnessMapTransform;
		mat3 transmissionMapTransform;
		mat3 emissiveMapTransform;
		mat3 normalMapTransform;
		mat3 clearcoatMapTransform;
		mat3 clearcoatNormalMapTransform;
		mat3 clearcoatRoughnessMapTransform;
		mat3 sheenColorMapTransform;
		mat3 sheenRoughnessMapTransform;
		mat3 iridescenceMapTransform;
		mat3 iridescenceThicknessMapTransform;
		mat3 specularColorMapTransform;
		mat3 specularIntensityMapTransform;

	};

	mat3 readTextureTransform( sampler2D tex, uint index ) {

		mat3 textureTransform;

		vec4 row1 = texelFetch1D( tex, index );
		vec4 row2 = texelFetch1D( tex, index + 1u );

		textureTransform[0] = vec3(row1.r, row2.r, 0.0);
		textureTransform[1] = vec3(row1.g, row2.g, 0.0);
		textureTransform[2] = vec3(row1.b, row2.b, 1.0);

		return textureTransform;

	}

	Material readMaterialInfo( sampler2D tex, uint index ) {

		uint i = index * 45u;

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );
		vec4 s4 = texelFetch1D( tex, i + 4u );
		vec4 s5 = texelFetch1D( tex, i + 5u );
		vec4 s6 = texelFetch1D( tex, i + 6u );
		vec4 s7 = texelFetch1D( tex, i + 7u );
		vec4 s8 = texelFetch1D( tex, i + 8u );
		vec4 s9 = texelFetch1D( tex, i + 9u );
		vec4 s10 = texelFetch1D( tex, i + 10u );
		vec4 s11 = texelFetch1D( tex, i + 11u );
		vec4 s12 = texelFetch1D( tex, i + 12u );
		vec4 s13 = texelFetch1D( tex, i + 13u );
		vec4 s14 = texelFetch1D( tex, i + 14u );

		Material m;
		m.color = s0.rgb;
		m.map = int( round( s0.a ) );

		m.metalness = s1.r;
		m.metalnessMap = int( round( s1.g ) );
		m.roughness = s1.b;
		m.roughnessMap = int( round( s1.a ) );

		m.ior = s2.r;
		m.transmission = s2.g;
		m.transmissionMap = int( round( s2.b ) );
		m.emissiveIntensity = s2.a;

		m.emissive = s3.rgb;
		m.emissiveMap = int( round( s3.a ) );

		m.normalMap = int( round( s4.r ) );
		m.normalScale = s4.gb;

		m.clearcoat = s4.a;
		m.clearcoatMap = int( round( s5.r ) );
		m.clearcoatRoughness = s5.g;
		m.clearcoatRoughnessMap = int( round( s5.b ) );
		m.clearcoatNormalMap = int( round( s5.a ) );
		m.clearcoatNormalScale = s6.rg;

		m.sheen = s6.a;
		m.sheenColor = s7.rgb;
		m.sheenColorMap = int( round( s7.a ) );
		m.sheenRoughness = s8.r;
		m.sheenRoughnessMap = int( round( s8.g ) );

		m.iridescenceMap = int( round( s8.b ) );
		m.iridescenceThicknessMap = int( round( s8.a ) );
		m.iridescence = s9.r;
		m.iridescenceIor = s9.g;
		m.iridescenceThicknessMinimum = s9.b;
		m.iridescenceThicknessMaximum = s9.a;

		m.specularColor = s10.rgb;
		m.specularColorMap = int( round( s10.a ) );

		m.specularIntensity = s11.r;
		m.specularIntensityMap = int( round( s11.g ) );
		m.thinFilm = bool( s11.b );

		m.attenuationColor = s12.rgb;
		m.attenuationDistance = s12.a;

		m.alphaMap = int( round( s13.r ) );

		m.opacity = s13.g;
		m.alphaTest = s13.b;
		m.side = s13.a;

		m.matte = bool( s14.r );
		m.castShadow = ! bool( s14.g );
		m.vertexColors = bool( int( s14.b ) & 1 );
		m.flatShading = bool( int( s14.b ) & 2 );
		m.fogVolume = bool( int( s14.b ) & 4 );
		m.transparent = bool( s14.a );

		uint firstTextureTransformIdx = i + 15u;

		// mat3( 1.0 ) is an identity matrix
		m.mapTransform = m.map == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx );
		m.metalnessMapTransform = m.metalnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 2u );
		m.roughnessMapTransform = m.roughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 4u );
		m.transmissionMapTransform = m.transmissionMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 6u );
		m.emissiveMapTransform = m.emissiveMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 8u );
		m.normalMapTransform = m.normalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 10u );
		m.clearcoatMapTransform = m.clearcoatMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 12u );
		m.clearcoatNormalMapTransform = m.clearcoatNormalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 14u );
		m.clearcoatRoughnessMapTransform = m.clearcoatRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 16u );
		m.sheenColorMapTransform = m.sheenColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 18u );
		m.sheenRoughnessMapTransform = m.sheenRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 20u );
		m.iridescenceMapTransform = m.iridescenceMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 22u );
		m.iridescenceThicknessMapTransform = m.iridescenceThicknessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 24u );
		m.specularColorMapTransform = m.specularColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 26u );
		m.specularIntensityMapTransform = m.specularIntensityMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 28u );

		return m;

	}

`,Kg=`

#ifndef FOG_CHECK_ITERATIONS
#define FOG_CHECK_ITERATIONS 30
#endif

// returns whether the given material is a fog material or not
bool isMaterialFogVolume( sampler2D materials, uint materialIndex ) {

	uint i = materialIndex * 45u;
	vec4 s14 = texelFetch1D( materials, i + 14u );
	return bool( int( s14.b ) & 4 );

}

// returns true if we're within the first fog volume we hit
bool bvhIntersectFogVolumeHit(
	vec3 rayOrigin, vec3 rayDirection,
	usampler2D materialIndexAttribute, sampler2D materials,
	inout Material material
) {

	material.fogVolume = false;

	for ( int i = 0; i < FOG_CHECK_ITERATIONS; i ++ ) {

		// find nearest hit
		uvec4 faceIndices = uvec4( 0u );
		vec3 faceNormal = vec3( 0.0, 0.0, 1.0 );
		vec3 barycoord = vec3( 0.0 );
		float side = 1.0;
		float dist = 0.0;
		bool hit = bvhIntersectFirstHit( bvh, rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist );
		if ( hit ) {

			// if it's a fog volume return whether we hit the front or back face
			uint materialIndex = uTexelFetch1D( materialIndexAttribute, faceIndices.x ).r;
			if ( isMaterialFogVolume( materials, materialIndex ) ) {

				material = readMaterialInfo( materials, materialIndex );
				return side == - 1.0;

			} else {

				// move the ray forward
				rayOrigin = stepRayOrigin( rayOrigin, rayDirection, - faceNormal, dist );

			}

		} else {

			return false;

		}

	}

	return false;

}

`,wg=`

	// The GGX functions provide sampling and distribution information for normals as output so
	// in order to get probability of scatter direction the half vector must be computed and provided.
	// [0] https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf
	// [1] https://hal.archives-ouvertes.fr/hal-01509746/document
	// [2] http://jcgt.org/published/0007/04/01/
	// [4] http://jcgt.org/published/0003/02/03/

	// trowbridge-reitz === GGX === GTR

	vec3 ggxDirection( vec3 incidentDir, vec2 roughness, vec2 uv ) {

		// TODO: try GGXVNDF implementation from reference [2], here. Needs to update ggxDistribution
		// function below, as well

		// Implementation from reference [1]
		// stretch view
		vec3 V = normalize( vec3( roughness * incidentDir.xy, incidentDir.z ) );

		// orthonormal basis
		vec3 T1 = ( V.z < 0.9999 ) ? normalize( cross( V, vec3( 0.0, 0.0, 1.0 ) ) ) : vec3( 1.0, 0.0, 0.0 );
		vec3 T2 = cross( T1, V );

		// sample point with polar coordinates (r, phi)
		float a = 1.0 / ( 1.0 + V.z );
		float r = sqrt( uv.x );
		float phi = ( uv.y < a ) ? uv.y / a * PI : PI + ( uv.y - a ) / ( 1.0 - a ) * PI;
		float P1 = r * cos( phi );
		float P2 = r * sin( phi ) * ( ( uv.y < a ) ? 1.0 : V.z );

		// compute normal
		vec3 N = P1 * T1 + P2 * T2 + V * sqrt( max( 0.0, 1.0 - P1 * P1 - P2 * P2 ) );

		// unstretch
		N = normalize( vec3( roughness * N.xy, max( 0.0, N.z ) ) );

		return N;

	}

	// Below are PDF and related functions for use in a Monte Carlo path tracer
	// as specified in Appendix B of the following paper
	// See equation (34) from reference [0]
	float ggxLamda( float theta, float roughness ) {

		float tanTheta = tan( theta );
		float tanTheta2 = tanTheta * tanTheta;
		float alpha2 = roughness * roughness;

		float numerator = - 1.0 + sqrt( 1.0 + alpha2 * tanTheta2 );
		return numerator / 2.0;

	}

	// See equation (34) from reference [0]
	float ggxShadowMaskG1( float theta, float roughness ) {

		return 1.0 / ( 1.0 + ggxLamda( theta, roughness ) );

	}

	// See equation (125) from reference [4]
	float ggxShadowMaskG2( vec3 wi, vec3 wo, float roughness ) {

		float incidentTheta = acos( wi.z );
		float scatterTheta = acos( wo.z );
		return 1.0 / ( 1.0 + ggxLamda( incidentTheta, roughness ) + ggxLamda( scatterTheta, roughness ) );

	}

	// See equation (33) from reference [0]
	float ggxDistribution( vec3 halfVector, float roughness ) {

		float a2 = roughness * roughness;
		a2 = max( EPSILON, a2 );
		float cosTheta = halfVector.z;
		float cosTheta4 = pow( cosTheta, 4.0 );

		if ( cosTheta == 0.0 ) return 0.0;

		float theta = acosSafe( halfVector.z );
		float tanTheta = tan( theta );
		float tanTheta2 = pow( tanTheta, 2.0 );

		float denom = PI * cosTheta4 * pow( a2 + tanTheta2, 2.0 );
		return ( a2 / denom );

	}

	// See equation (3) from reference [2]
	float ggxPDF( vec3 wi, vec3 halfVector, float roughness ) {

		float incidentTheta = acos( wi.z );
		float D = ggxDistribution( halfVector, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );

		return D * G1 * max( 0.0, dot( wi, halfVector ) ) / wi.z;

	}

`,Dg=`

	// See equation (2) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetD( float cosThetaH, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		float invAlpha = 1.0 / alpha;

		float sqrCosThetaH = cosThetaH * cosThetaH;
		float sinThetaH = max( 1.0 - sqrCosThetaH, 0.001 );

		return ( 2.0 + invAlpha ) * pow( sinThetaH, 0.5 * invAlpha ) / ( 2.0 * PI );

	}

	float velvetParamsInterpolate( int i, float oneMinusAlphaSquared ) {

		const float p0[5] = float[5]( 25.3245, 3.32435, 0.16801, -1.27393, -4.85967 );
		const float p1[5] = float[5]( 21.5473, 3.82987, 0.19823, -1.97760, -4.32054 );

		return mix( p1[i], p0[i], oneMinusAlphaSquared );

	}

	float velvetL( float x, float alpha ) {

		float oneMinusAlpha = 1.0 - alpha;
		float oneMinusAlphaSquared = oneMinusAlpha * oneMinusAlpha;

		float a = velvetParamsInterpolate( 0, oneMinusAlphaSquared );
		float b = velvetParamsInterpolate( 1, oneMinusAlphaSquared );
		float c = velvetParamsInterpolate( 2, oneMinusAlphaSquared );
		float d = velvetParamsInterpolate( 3, oneMinusAlphaSquared );
		float e = velvetParamsInterpolate( 4, oneMinusAlphaSquared );

		return a / ( 1.0 + b * pow( abs( x ), c ) ) + d * x + e;

	}

	// See equation (3) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetLambda( float cosTheta, float alpha ) {

		return abs( cosTheta ) < 0.5 ? exp( velvetL( cosTheta, alpha ) ) : exp( 2.0 * velvetL( 0.5, alpha ) - velvetL( 1.0 - cosTheta, alpha ) );

	}

	// See Section 3, Shadowing Term, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetG( float cosThetaO, float cosThetaI, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		return 1.0 / ( 1.0 + velvetLambda( cosThetaO, alpha ) + velvetLambda( cosThetaI, alpha ) );

	}

	float directionalAlbedoSheen( float cosTheta, float alpha ) {

		cosTheta = saturate( cosTheta );

		float c = 1.0 - cosTheta;
		float c3 = c * c * c;

		return 0.65584461 * c3 + 1.0 / ( 4.16526551 + exp( -7.97291361 * sqrt( alpha ) + 6.33516894 ) );

	}

	float sheenAlbedoScaling( vec3 wo, vec3 wi, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );
		float eWi = directionalAlbedoSheen( saturateCos( wi.z ), alpha );

		return min( 1.0 - maxSheenColor * eWo, 1.0 - maxSheenColor * eWi );

	}

	// See Section 5, Layering, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float sheenAlbedoScaling( vec3 wo, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );

		return 1.0 - maxSheenColor * eWo;

	}

`,Eg=`

	// XYZ to sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	vec3 fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 iorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float iorToFresnel0( float transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ) );

	}

	// Fresnel equations for dielectric/dielectric interfaces. See https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;

		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - square( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * square( phase ) );
		xyz /= 1.0685e-7;

		vec3 srgb = XYZ_TO_REC709 * xyz;
		return srgb;

	}

	// See Section 4. Analytic Spectral Integration, A Practical Extension to Microfacet Theory for the Modeling of Varying Iridescence, https://hal.archives-ouvertes.fr/hal-01518344/document
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIor -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIor = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );

		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = square( outsideIOR / iridescenceIor ) * ( 1.0 - square( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = iorToFresnel0( iridescenceIor, outsideIOR );
		float R12 = schlickFresnel( cosTheta1, R0 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIor < outsideIOR ) {

			phi12 = PI;

		}

		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = iorToFresnel0( baseIOR, iridescenceIor );
		vec3 R23 = schlickFresnel( cosTheta2, R1 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[0] < iridescenceIor ) {

			phi23[ 0 ] = PI;

		}

		if ( baseIOR[1] < iridescenceIor ) {

			phi23[ 1 ] = PI;

		}

		if ( baseIOR[2] < iridescenceIor ) {

			phi23[ 2 ] = PI;

		}

		// Phase shift
		float OPD = 2.0 * iridescenceIor * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = square( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

`,Ug=`

	struct SurfaceRecord {

		// surface type
		bool volumeParticle;

		// geometry
		vec3 faceNormal;
		bool frontFace;
		vec3 normal;
		mat3 normalBasis;
		mat3 normalInvBasis;

		// cached properties
		float eta;
		float f0;

		// material
		float roughness;
		float filteredRoughness;
		float metalness;
		vec3 color;
		vec3 emission;

		// transmission
		float ior;
		float transmission;
		bool thinFilm;
		vec3 attenuationColor;
		float attenuationDistance;

		// clearcoat
		vec3 clearcoatNormal;
		mat3 clearcoatBasis;
		mat3 clearcoatInvBasis;
		float clearcoat;
		float clearcoatRoughness;
		float filteredClearcoatRoughness;

		// sheen
		float sheen;
		vec3 sheenColor;
		float sheenRoughness;

		// iridescence
		float iridescence;
		float iridescenceIor;
		float iridescenceThickness;

		// specular
		vec3 specularColor;
		float specularIntensity;
	};

	struct ScatterRecord {
		float specularPdf;
		float pdf;
		vec3 direction;
		vec3 color;
	};

	${wg}
	${Dg}
	${Eg}

	// diffuse
	float diffuseEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float fl = schlickFresnel( wi.z, 0.0 );
		float fv = schlickFresnel( wo.z, 0.0 );

		float metalFactor = ( 1.0 - surf.metalness );
		float transFactor = ( 1.0 - surf.transmission );
		float rr = 0.5 + 2.0 * surf.roughness * fl * fl;
		float retro = rr * ( fl + fv + fl * fv * ( rr - 1.0f ) );
		float lambert = ( 1.0f - 0.5f * fl ) * ( 1.0f - 0.5f * fv );

		// TODO: subsurface approx?

		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		color = ( 1.0 - F ) * transFactor * metalFactor * wi.z * surf.color * ( retro + lambert ) / PI;

		return wi.z / PI;

	}

	vec3 diffuseDirection( vec3 wo, SurfaceRecord surf ) {

		vec3 lightDirection = sampleSphere( rand2( 11 ) );
		lightDirection.z += 1.0;
		lightDirection = normalize( lightDirection );

		return lightDirection;

	}

	// specular
	float specularEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// if roughness is set to 0 then D === NaN which results in black pixels
		float metalness = surf.metalness;
		float roughness = surf.filteredRoughness;

		float eta = surf.eta;
		float f0 = surf.f0;

		vec3 f0Color = mix( f0 * surf.specularColor * surf.specularIntensity, surf.color, surf.metalness );
		vec3 f90Color = vec3( mix( surf.specularIntensity, 1.0, surf.metalness ) );
		vec3 F = evaluateFresnel( dot( wo, wh ), eta, f0Color, f90Color );

		vec3 iridescenceF = evalIridescence( 1.0, surf.iridescenceIor, dot( wi, wh ), surf.iridescenceThickness, f0Color );
		F = mix( F, iridescenceF,  surf.iridescence );

		// PDF
		// See 14.1.1 Microfacet BxDFs in https://www.pbr-book.org/
		float incidentTheta = acos( wo.z );
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );
		float ggxPdf = D * G1 * max( 0.0, abs( dot( wo, wh ) ) ) / abs ( wo.z );

		color = wi.z * F * G * D / ( 4.0 * abs( wi.z * wo.z ) );
		return ggxPdf / ( 4.0 * dot( wo, wh ) );

	}

	vec3 specularDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 12 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}


	// transmission
	/*
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// See section 4.2 in https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;
		bool thinFilm = surf.thinFilm;

		color = surf.transmission * surf.color;

		float denom = pow( eta * dot( wi, wh ) + dot( wo, wh ), 2.0 );
		return ggxPDF( wo, wh, filteredRoughness ) / denom;

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;

		// sample ggx vndf distribution which gives a new normal
		vec3 halfVector = ggxDirection(
			wo,
			vec2( filteredRoughness ),
			rand2( 13 )
		);

		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );
		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}

		return normalize( lightDirection );

	}
	*/

	// TODO: This is just using a basic cosine-weighted specular distribution with an
	// incorrect PDF value at the moment. Update it to correctly use a GGX distribution
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		color = surf.transmission * surf.color;

		// PDF
		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		if ( F >= 1.0 ) {

			return 0.0;

		}

		return 1.0 / ( 1.0 - F );

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float roughness = surf.filteredRoughness;
		float eta = surf.eta;
		vec3 halfVector = normalize( vec3( 0.0, 0.0, 1.0 ) + sampleSphere( rand2( 13 ) ) * roughness );
		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );

		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}
		return normalize( lightDirection );

	}

	// clearcoat
	float clearcoatEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		float ior = 1.5;
		float f0 = iorRatioToF0( ior );
		bool frontFace = surf.frontFace;
		float roughness = surf.filteredClearcoatRoughness;

		float eta = frontFace ? 1.0 / ior : ior;
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float F = schlickFresnel( dot( wi, wh ), f0 );

		float fClearcoat = F * D * G / ( 4.0 * abs( wi.z * wo.z ) );
		color = color * ( 1.0 - surf.clearcoat * F ) + fClearcoat * surf.clearcoat * wi.z;

		// PDF
		// See equation (27) in http://jcgt.org/published/0003/02/03/
		return ggxPDF( wo, wh, roughness ) / ( 4.0 * dot( wi, wh ) );

	}

	vec3 clearcoatDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredClearcoatRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 14 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}

	// sheen
	vec3 sheenColor( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf ) {

		float cosThetaO = saturateCos( wo.z );
		float cosThetaI = saturateCos( wi.z );
		float cosThetaH = wh.z;

		float D = velvetD( cosThetaH, surf.sheenRoughness );
		float G = velvetG( cosThetaO, cosThetaI, surf.sheenRoughness );

		// See equation (1) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
		vec3 color = surf.sheenColor;
		color *= D * G / ( 4.0 * abs( cosThetaO * cosThetaI ) );
		color *= wi.z;

		return color;

	}

	// bsdf
	void getLobeWeights(
		vec3 wo, vec3 wi, vec3 wh, vec3 clearcoatWo, SurfaceRecord surf,
		inout float diffuseWeight, inout float specularWeight, inout float transmissionWeight, inout float clearcoatWeight
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;
		// float fEstimate = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float fEstimate = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );

		float transSpecularProb = mix( max( 0.25, fEstimate ), 1.0, metalness );
		float diffSpecularProb = 0.5 + 0.5 * metalness;

		diffuseWeight = ( 1.0 - transmission ) * ( 1.0 - diffSpecularProb );
		specularWeight = transmission * transSpecularProb + ( 1.0 - transmission ) * diffSpecularProb;
		transmissionWeight = transmission * ( 1.0 - transSpecularProb );
		clearcoatWeight = surf.clearcoat * schlickFresnel( clearcoatWo.z, 0.04 );

		float totalWeight = diffuseWeight + specularWeight + transmissionWeight + clearcoatWeight;
		diffuseWeight /= totalWeight;
		specularWeight /= totalWeight;
		transmissionWeight /= totalWeight;
		clearcoatWeight /= totalWeight;
	}

	float bsdfEval(
		vec3 wo, vec3 clearcoatWo, vec3 wi, vec3 clearcoatWi, SurfaceRecord surf,
		float diffuseWeight, float specularWeight, float transmissionWeight, float clearcoatWeight, inout float specularPdf, inout vec3 color
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;

		float spdf = 0.0;
		float dpdf = 0.0;
		float tpdf = 0.0;
		float cpdf = 0.0;
		color = vec3( 0.0 );

		vec3 halfVector = getHalfVector( wi, wo, surf.eta );

		// diffuse
		if ( diffuseWeight > 0.0 && wi.z > 0.0 ) {

			dpdf = diffuseEval( wo, wi, halfVector, surf, color );
			color *= 1.0 - surf.transmission;

		}

		// ggx specular
		if ( specularWeight > 0.0 && wi.z > 0.0 ) {

			vec3 outColor;
			spdf = specularEval( wo, wi, getHalfVector( wi, wo ), surf, outColor );
			color += outColor;

		}

		// transmission
		if ( transmissionWeight > 0.0 && wi.z < 0.0 ) {

			tpdf = transmissionEval( wo, wi, halfVector, surf, color );

		}

		// sheen
		color *= mix( 1.0, sheenAlbedoScaling( wo, wi, surf ), surf.sheen );
		color += sheenColor( wo, wi, halfVector, surf ) * surf.sheen;

		// clearcoat
		if ( clearcoatWi.z >= 0.0 && clearcoatWeight > 0.0 ) {

			vec3 clearcoatHalfVector = getHalfVector( clearcoatWo, clearcoatWi );
			cpdf = clearcoatEval( clearcoatWo, clearcoatWi, clearcoatHalfVector, surf, color );

		}

		float pdf =
			dpdf * diffuseWeight
			+ spdf * specularWeight
			+ tpdf * transmissionWeight
			+ cpdf * clearcoatWeight;

		// retrieve specular rays for the shadows flag
		specularPdf = spdf * specularWeight + cpdf * clearcoatWeight;

		return pdf;

	}

	float bsdfResult( vec3 worldWo, vec3 worldWi, SurfaceRecord surf, inout vec3 color ) {

		if ( surf.volumeParticle ) {

			color = surf.color / ( 4.0 * PI );
			return 1.0 / ( 4.0 * PI );

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 wi = normalize( surf.normalInvBasis * worldWi );

		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		vec3 clearcoatWi = normalize( surf.clearcoatInvBasis * worldWi );

		vec3 wh = getHalfVector( wo, wi, surf.eta );
		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		getLobeWeights( wo, wi, wh, clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float specularPdf;
		return bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, specularPdf, color );

	}

	ScatterRecord bsdfSample( vec3 worldWo, SurfaceRecord surf ) {

		if ( surf.volumeParticle ) {

			ScatterRecord sampleRec;
			sampleRec.specularPdf = 0.0;
			sampleRec.pdf = 1.0 / ( 4.0 * PI );
			sampleRec.direction = sampleSphere( rand2( 16 ) );
			sampleRec.color = surf.color / ( 4.0 * PI );
			return sampleRec;

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		mat3 normalBasis = surf.normalBasis;
		mat3 invBasis = surf.normalInvBasis;
		mat3 clearcoatNormalBasis = surf.clearcoatBasis;
		mat3 clearcoatInvBasis = surf.clearcoatInvBasis;

		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		// using normal and basically-reflected ray since we don't have proper half vector here
		getLobeWeights( wo, wo, vec3( 0, 0, 1 ), clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float pdf[4];
		pdf[0] = diffuseWeight;
		pdf[1] = specularWeight;
		pdf[2] = transmissionWeight;
		pdf[3] = clearcoatWeight;

		float cdf[4];
		cdf[0] = pdf[0];
		cdf[1] = pdf[1] + cdf[0];
		cdf[2] = pdf[2] + cdf[1];
		cdf[3] = pdf[3] + cdf[2];

		if( cdf[3] != 0.0 ) {

			float invMaxCdf = 1.0 / cdf[3];
			cdf[0] *= invMaxCdf;
			cdf[1] *= invMaxCdf;
			cdf[2] *= invMaxCdf;
			cdf[3] *= invMaxCdf;

		} else {

			cdf[0] = 1.0;
			cdf[1] = 0.0;
			cdf[2] = 0.0;
			cdf[3] = 0.0;

		}

		vec3 wi;
		vec3 clearcoatWi;

		float r = rand( 15 );
		if ( r <= cdf[0] ) { // diffuse

			wi = diffuseDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[1] ) { // specular

			wi = specularDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[2] ) { // transmission / refraction

			wi = transmissionDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[3] ) { // clearcoat

			clearcoatWi = clearcoatDirection( clearcoatWo, surf );
			wi = normalize( invBasis * normalize( clearcoatNormalBasis * clearcoatWi ) );

		}

		ScatterRecord result;
		result.pdf = bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, result.specularPdf, result.color );
		result.direction = normalize( surf.normalBasis * wi );

		return result;

	}

`,Tg=`

	// returns the hit distance given the material density
	float intersectFogVolume( Material material, float u ) {

		// https://raytracing.github.io/books/RayTracingTheNextWeek.html#volumes/constantdensitymediums
		return material.opacity == 0.0 ? INFINITY : ( - 1.0 / material.opacity ) * log( u );

	}

	ScatterRecord sampleFogVolume( SurfaceRecord surf, vec2 uv ) {

		ScatterRecord sampleRec;
		sampleRec.specularPdf = 0.0;
		sampleRec.pdf = 1.0 / ( 2.0 * PI );
		sampleRec.direction = sampleSphere( uv );
		sampleRec.color = surf.color;
		return sampleRec;

	}

`,jg=`

	// samples the the given environment map in the given direction
	vec3 sampleEquirectColor( sampler2D envMap, vec3 direction ) {

		return texture2D( envMap, equirectDirectionToUv( direction ) ).rgb;

	}

	// gets the pdf of the given direction to sample
	float equirectDirectionPdf( vec3 direction ) {

		vec2 uv = equirectDirectionToUv( direction );
		float theta = uv.y * PI;
		float sinTheta = sin( theta );
		if ( sinTheta == 0.0 ) {

			return 0.0;

		}

		return 1.0 / ( 2.0 * PI * PI * sinTheta );

	}

	// samples the color given env map with CDF and returns the pdf of the direction
	float sampleEquirect( vec3 direction, inout vec3 color ) {

		float totalSum = envMapInfo.totalSum;
		if ( totalSum == 0.0 ) {

			color = vec3( 0.0 );
			return 1.0;

		}

		vec2 uv = equirectDirectionToUv( direction );
		color = texture2D( envMapInfo.map, uv ).rgb;

		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}

	// samples a direction of the envmap with color and retrieves pdf
	float sampleEquirectProbability( vec2 r, inout vec3 color, inout vec3 direction ) {

		// sample env map cdf
		float v = texture2D( envMapInfo.marginalWeights, vec2( r.x, 0.0 ) ).x;
		float u = texture2D( envMapInfo.conditionalWeights, vec2( r.y, v ) ).x;
		vec2 uv = vec2( u, v );

		vec3 derivedDirection = equirectUvToDirection( uv );
		direction = derivedDirection;
		color = texture2D( envMapInfo.map, uv ).rgb;

		float totalSum = envMapInfo.totalSum;
		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}

`,Ig=`

	float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

		return smoothstep( coneCosine, penumbraCosine, angleCosine );

	}

	float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), EPSILON );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	}

	float getPhotometricAttenuation( sampler2DArray iesProfiles, int iesProfile, vec3 posToLight, vec3 lightDir, vec3 u, vec3 v ) {

		float cosTheta = dot( posToLight, lightDir );
		float angle = acos( cosTheta ) * ( 1.0 / PI );

		return texture2D( iesProfiles, vec3( 0.0, angle, iesProfile ) ).r;

	}

	struct LightRecord {

		float dist;
		vec3 direction;
		float pdf;
		vec3 emission;
		int type;

	};

	bool intersectLightAtIndex( sampler2D lights, vec3 rayOrigin, vec3 rayDirection, uint l, inout LightRecord lightRec ) {

		bool didHit = false;
		Light light = readLightInfo( lights, l );

		vec3 u = light.u;
		vec3 v = light.v;

		// check for backface
		vec3 normal = normalize( cross( u, v ) );
		if ( dot( normal, rayDirection ) > 0.0 ) {

			u *= 1.0 / dot( u, u );
			v *= 1.0 / dot( v, v );

			float dist;

			// MIS / light intersection is not supported for punctual lights.
			if(
				( light.type == RECT_AREA_LIGHT_TYPE && intersectsRectangle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) ) ||
				( light.type == CIRC_AREA_LIGHT_TYPE && intersectsCircle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) )
			) {

				float cosTheta = dot( rayDirection, normal );
				didHit = true;
				lightRec.dist = dist;
				lightRec.pdf = ( dist * dist ) / ( light.area * cosTheta );
				lightRec.emission = light.color * light.intensity;
				lightRec.direction = rayDirection;
				lightRec.type = light.type;

			}

		}

		return didHit;

	}

	LightRecord randomAreaLightSample( Light light, vec3 rayOrigin, vec2 ruv ) {

		vec3 randomPos;
		if( light.type == RECT_AREA_LIGHT_TYPE ) {

			// rectangular area light
			randomPos = light.position + light.u * ( ruv.x - 0.5 ) + light.v * ( ruv.y - 0.5 );

		} else if( light.type == CIRC_AREA_LIGHT_TYPE ) {

			// circular area light
			float r = 0.5 * sqrt( ruv.x );
			float theta = ruv.y * 2.0 * PI;
			float x = r * cos( theta );
			float y = r * sin( theta );

			randomPos = light.position + light.u * x + light.v * y;

		}

		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );
		vec3 direction = toLight / dist;
		vec3 lightNormal = normalize( cross( light.u, light.v ) );

		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.emission = light.color * light.intensity;
		lightRec.dist = dist;
		lightRec.direction = direction;

		// TODO: the denominator is potentially zero
		lightRec.pdf = lightDistSq / ( light.area * dot( direction, lightNormal ) );

		return lightRec;

	}

	LightRecord randomSpotLightSample( Light light, sampler2DArray iesProfiles, vec3 rayOrigin, vec2 ruv ) {

		float radius = light.radius * sqrt( ruv.x );
		float theta = ruv.y * 2.0 * PI;
		float x = radius * cos( theta );
		float y = radius * sin( theta );

		vec3 u = light.u;
		vec3 v = light.v;
		vec3 normal = normalize( cross( u, v ) );

		float angle = acos( light.coneCos );
		float angleTan = tan( angle );
		float startDistance = light.radius / max( angleTan, EPSILON );

		vec3 randomPos = light.position - normal * startDistance + u * x + v * y;
		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );

		vec3 direction = toLight / max( dist, EPSILON );
		float cosTheta = dot( direction, normal );

		float spotAttenuation = light.iesProfile != - 1 ?
			getPhotometricAttenuation( iesProfiles, light.iesProfile, direction, normal, u, v ) :
			getSpotAttenuation( light.coneCos, light.penumbraCos, cosTheta );

		float distanceAttenuation = getDistanceAttenuation( dist, light.distance, light.decay );
		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.dist = dist;
		lightRec.direction = direction;
		lightRec.emission = light.color * light.intensity * distanceAttenuation * spotAttenuation;
		lightRec.pdf = 1.0;

		return lightRec;

	}

	LightRecord randomLightSample( sampler2D lights, sampler2DArray iesProfiles, uint lightCount, vec3 rayOrigin, vec3 ruv ) {

		LightRecord result;

		// pick a random light
		uint l = uint( ruv.x * float( lightCount ) );
		Light light = readLightInfo( lights, l );

		if ( light.type == SPOT_LIGHT_TYPE ) {

			result = randomSpotLightSample( light, iesProfiles, rayOrigin, ruv.yz );

		} else if ( light.type == POINT_LIGHT_TYPE ) {

			vec3 lightRay = light.u - rayOrigin;
			float lightDist = length( lightRay );
			float cutoffDistance = light.distance;
			float distanceFalloff = 1.0 / max( pow( lightDist, light.decay ), 0.01 );
			if ( cutoffDistance > 0.0 ) {

				distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDist / cutoffDistance ) ) );

			}

			LightRecord rec;
			rec.direction = normalize( lightRay );
			rec.dist = length( lightRay );
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity * distanceFalloff;
			rec.type = light.type;
			result = rec;

		} else if ( light.type == DIR_LIGHT_TYPE ) {

			LightRecord rec;
			rec.dist = 1e10;
			rec.direction = light.u;
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity;
			rec.type = light.type;

			result = rec;

		} else {

			// sample the light
			result = randomAreaLightSample( light, rayOrigin, ruv.yz );

		}

		return result;

	}

`,kg=`

	vec3 sampleHemisphere( vec3 n, vec2 uv ) {

		// https://www.rorydriscoll.com/2009/01/07/better-sampling/
		// https://graphics.pixar.com/library/OrthonormalB/paper.pdf
		float sign = n.z == 0.0 ? 1.0 : sign( n.z );
		float a = - 1.0 / ( sign + n.z );
		float b = n.x * n.y * a;
		vec3 b1 = vec3( 1.0 + sign * n.x * n.x * a, sign * b, - sign * n.x );
		vec3 b2 = vec3( b, sign + n.y * n.y * a, - n.y );

		float r = sqrt( uv.x );
		float theta = 2.0 * PI * uv.y;
		float x = r * cos( theta );
		float y = r * sin( theta );
		return x * b1 + y * b2 + sqrt( 1.0 - uv.x ) * n;

	}

	vec2 sampleTriangle( vec2 a, vec2 b, vec2 c, vec2 r ) {

		// get the edges of the triangle and the diagonal across the
		// center of the parallelogram
		vec2 e1 = a - b;
		vec2 e2 = c - b;
		vec2 diag = normalize( e1 + e2 );

		// pick the point in the parallelogram
		if ( r.x + r.y > 1.0 ) {

			r = vec2( 1.0 ) - r;

		}

		return e1 * r.x + e2 * r.y;

	}

	vec2 sampleCircle( vec2 uv ) {

		float angle = 2.0 * PI * uv.x;
		float radius = sqrt( uv.y );
		return vec2( cos( angle ), sin( angle ) ) * radius;

	}

	vec3 sampleSphere( vec2 uv ) {

		float u = ( uv.x - 0.5 ) * 2.0;
		float t = uv.y * PI * 2.0;
		float f = sqrt( 1.0 - u * u );

		return vec3( f * cos( t ), f * sin( t ), u );

	}

	vec2 sampleRegularPolygon( int sides, vec3 uvw ) {

		sides = max( sides, 3 );

		vec3 r = uvw;
		float anglePerSegment = 2.0 * PI / float( sides );
		float segment = floor( float( sides ) * r.x );

		float angle1 = anglePerSegment * segment;
		float angle2 = angle1 + anglePerSegment;
		vec2 a = vec2( sin( angle1 ), cos( angle1 ) );
		vec2 b = vec2( 0.0, 0.0 );
		vec2 c = vec2( sin( angle2 ), cos( angle2 ) );

		return sampleTriangle( a, b, c, r.yz );

	}

	// samples an aperture shape with the given number of sides. 0 means circle
	vec2 sampleAperture( int blades, vec3 uvw ) {

		return blades == 0 ?
			sampleCircle( uvw.xy ) :
			sampleRegularPolygon( blades, uvw );

	}


`,zg=`

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the rectangle on that same plane.
	// Plane intersection: https://lousodrome.net/blog/light/2020/07/03/intersection-of-a-ray-and-a-plane/
	bool intersectsRectangle( vec3 center, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( center - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 p = rayOrigin + rayDirection * t;
			vec3 vi = p - center;

			// check if p falls inside the rectangle
			float a1 = dot( u, vi );
			if ( abs( a1 ) <= 0.5 ) {

				float a2 = dot( v, vi );
				if ( abs( a2 ) <= 0.5 ) {

					dist = t;
					return true;

				}

			}

		}

		return false;

	}

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the circle on that same plane. See above URL for a description of the plane intersection algorithm.
	bool intersectsCircle( vec3 position, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( position - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 hit = rayOrigin + rayDirection * t;
			vec3 vi = hit - position;

			float a1 = dot( u, vi );
			float a2 = dot( v, vi );

			if( length( vec2( a1, a2 ) ) <= 0.5 ) {

				dist = t;
				return true;

			}

		}

		return false;

	}

`,Pg=`

	// Fast arccos approximation used to remove banding artifacts caused by numerical errors in acos.
	// This is a cubic Lagrange interpolating polynomial for x = [-1, -1/2, 0, 1/2, 1].
	// For more information see: https://github.com/gkjohnson/three-gpu-pathtracer/pull/171#issuecomment-1152275248
	float acosApprox( float x ) {

		x = clamp( x, -1.0, 1.0 );
		return ( - 0.69813170079773212 * x * x - 0.87266462599716477 ) * x + 1.5707963267948966;

	}

	// An acos with input values bound to the range [-1, 1].
	float acosSafe( float x ) {

		return acos( clamp( x, -1.0, 1.0 ) );

	}

	float saturateCos( float val ) {

		return clamp( val, 0.001, 1.0 );

	}

	float square( float t ) {

		return t * t;

	}

	vec2 square( vec2 t ) {

		return t * t;

	}

	vec3 square( vec3 t ) {

		return t * t;

	}

	vec4 square( vec4 t ) {

		return t * t;

	}

	vec2 rotateVector( vec2 v, float t ) {

		float ac = cos( t );
		float as = sin( t );
		return vec2(
			v.x * ac - v.y * as,
			v.x * as + v.y * ac
		);

	}

	// forms a basis with the normal vector as Z
	mat3 getBasisFromNormal( vec3 normal ) {

		vec3 other;
		if ( abs( normal.x ) > 0.5 ) {

			other = vec3( 0.0, 1.0, 0.0 );

		} else {

			other = vec3( 1.0, 0.0, 0.0 );

		}

		vec3 ortho = normalize( cross( normal, other ) );
		vec3 ortho2 = normalize( cross( normal, ortho ) );
		return mat3( ortho2, ortho, normal );

	}

`,Hg=`

	bool totalInternalReflection( float cosTheta, float eta ) {

		float sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		return eta * sinTheta > 1.0;

	}

	// https://google.github.io/filament/Filament.md.html#materialsystem/diffusebrdf
	float schlickFresnel( float cosine, float f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0, vec3 f90 ) {

		return f0 + ( f90 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	float dielectricFresnel( float cosThetaI, float eta ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float ni = eta;
		float nt = 1.0;

		// Check for total internal reflection
		float sinThetaISq = 1.0f - cosThetaI * cosThetaI;
		float sinThetaTSq = eta * eta * sinThetaISq;
		if( sinThetaTSq >= 1.0 ) {

			return 1.0;

		}

		float sinThetaT = sqrt( sinThetaTSq );

		float cosThetaT = sqrt( max( 0.0, 1.0f - sinThetaT * sinThetaT ) );
		float rParallel = ( ( nt * cosThetaI ) - ( ni * cosThetaT ) ) / ( ( nt * cosThetaI ) + ( ni * cosThetaT ) );
		float rPerpendicular = ( ( ni * cosThetaI ) - ( nt * cosThetaT ) ) / ( ( ni * cosThetaI ) + ( nt * cosThetaT ) );
		return ( rParallel * rParallel + rPerpendicular * rPerpendicular ) / 2.0;

	}

	// https://raytracing.github.io/books/RayTracingInOneWeekend.html#dielectrics/schlickapproximation
	float iorRatioToF0( float eta ) {

		return pow( ( 1.0 - eta ) / ( 1.0 + eta ), 2.0 );

	}

	vec3 evaluateFresnel( float cosTheta, float eta, vec3 f0, vec3 f90 ) {

		if ( totalInternalReflection( cosTheta, eta ) ) {

			return f90;

		}

		return schlickFresnel( cosTheta, f0, f90 );

	}

	// TODO: disney fresnel was removed and replaced with this fresnel function to better align with
	// the glTF but is causing blown out pixels. Should be revisited
	// float evaluateFresnelWeight( float cosTheta, float eta, float f0 ) {

	// 	if ( totalInternalReflection( cosTheta, eta ) ) {

	// 		return 1.0;

	// 	}

	// 	return schlickFresnel( cosTheta, f0 );

	// }

	// https://schuttejoe.github.io/post/disneybsdf/
	float disneyFresnel( vec3 wo, vec3 wi, vec3 wh, float f0, float eta, float metalness ) {

		float dotHV = dot( wo, wh );
		if ( totalInternalReflection( dotHV, eta ) ) {

			return 1.0;

		}

		float dotHL = dot( wi, wh );
		float dielectricFresnel = dielectricFresnel( abs( dotHV ), eta );
		float metallicFresnel = schlickFresnel( dotHL, f0 );

		return mix( dielectricFresnel, metallicFresnel, metalness );

	}

`,Og=`

	// add texel fetch functions for texture arrays
	vec4 texelFetch1D( sampler2DArray tex, int layer, uint index ) {

		uint width = uint( textureSize( tex, 0 ).x );
		uvec2 uv;
		uv.x = index % width;
		uv.y = index / width;

		return texelFetch( tex, ivec3( uv, layer ), 0 );

	}

	vec4 textureSampleBarycoord( sampler2DArray tex, int layer, vec3 barycoord, uvec3 faceIndices ) {

		return
			barycoord.x * texelFetch1D( tex, layer, faceIndices.x ) +
			barycoord.y * texelFetch1D( tex, layer, faceIndices.y ) +
			barycoord.z * texelFetch1D( tex, layer, faceIndices.z );

	}

`,Fa=`

	// https://www.shadertoy.com/view/wltcRS
	uvec4 WHITE_NOISE_SEED;

	void rng_initialize( vec2 p, int frame ) {

		// white noise seed
		WHITE_NOISE_SEED = uvec4( p, uint( frame ), uint( p.x ) + uint( p.y ) );

	}

	// https://www.pcg-random.org/
	void pcg4d( inout uvec4 v ) {

		v = v * 1664525u + 1013904223u;
		v.x += v.y * v.w;
		v.y += v.z * v.x;
		v.z += v.x * v.y;
		v.w += v.y * v.z;
		v = v ^ ( v >> 16u );
		v.x += v.y*v.w;
		v.y += v.z*v.x;
		v.z += v.x*v.y;
		v.w += v.y*v.z;

	}

	// returns [ 0, 1 ]
	float pcgRand() {

		pcg4d( WHITE_NOISE_SEED );
		return float( WHITE_NOISE_SEED.x ) / float( 0xffffffffu );

	}

	vec2 pcgRand2() {

		pcg4d( WHITE_NOISE_SEED );
		return vec2( WHITE_NOISE_SEED.xy ) / float(0xffffffffu);

	}

	vec3 pcgRand3() {

		pcg4d( WHITE_NOISE_SEED );
		return vec3( WHITE_NOISE_SEED.xyz ) / float( 0xffffffffu );

	}

	vec4 pcgRand4() {

		pcg4d( WHITE_NOISE_SEED );
		return vec4( WHITE_NOISE_SEED ) / float( 0xffffffffu );

	}
`,Gg=`

	struct Ray {

		vec3 origin;
		vec3 direction;

	};

	struct SurfaceHit {

		uvec4 faceIndices;
		vec3 barycoord;
		vec3 faceNormal;
		float side;
		float dist;

	};

	struct RenderState {

		bool firstRay;
		bool transmissiveRay;
		bool isShadowRay;
		float accumulatedRoughness;
		int transmissiveTraversals;
		int traversals;
		uint depth;
		vec3 throughputColor;
		Material fogMaterial;

	};

	RenderState initRenderState() {

		RenderState result;
		result.firstRay = true;
		result.transmissiveRay = true;
		result.isShadowRay = false;
		result.accumulatedRoughness = 0.0;
		result.transmissiveTraversals = 0;
		result.traversals = 0;
		result.throughputColor = vec3( 1.0 );
		result.depth = 0u;
		result.fogMaterial.fogVolume = false;
		return result;

	}

`,Ng=`

	vec3 ndcToRayOrigin( vec2 coord ) {

		vec4 rayOrigin4 = cameraWorldMatrix * invProjectionMatrix * vec4( coord, - 1.0, 1.0 );
		return rayOrigin4.xyz / rayOrigin4.w;
	}

	Ray getCameraRay() {

		vec2 ssd = vec2( 1.0 ) / resolution;

		// Jitter the camera ray by finding a uv coordinate at a random sample
		// around this pixel's UV coordinate for AA
		vec2 ruv = rand2( 0 );
		vec2 jitteredUv = vUv + vec2( tentFilter( ruv.x ) * ssd.x, tentFilter( ruv.y ) * ssd.y );
		Ray ray;

		#if CAMERA_TYPE == 2

			// Equirectangular projection
			vec4 rayDirection4 = vec4( equirectUvToDirection( jitteredUv ), 0.0 );
			vec4 rayOrigin4 = vec4( 0.0, 0.0, 0.0, 1.0 );

			rayDirection4 = cameraWorldMatrix * rayDirection4;
			rayOrigin4 = cameraWorldMatrix * rayOrigin4;

			ray.direction = normalize( rayDirection4.xyz );
			ray.origin = rayOrigin4.xyz / rayOrigin4.w;

		#else

			// get [- 1, 1] normalized device coordinates
			vec2 ndc = 2.0 * jitteredUv - vec2( 1.0 );
			ray.origin = ndcToRayOrigin( ndc );

			#if CAMERA_TYPE == 1

				// Orthographic projection
				ray.direction = ( cameraWorldMatrix * vec4( 0.0, 0.0, - 1.0, 0.0 ) ).xyz;
				ray.direction = normalize( ray.direction );

			#else

				// Perspective projection
				ray.direction = normalize( mat3( cameraWorldMatrix ) * ( invProjectionMatrix * vec4( ndc, 0.0, 1.0 ) ).xyz );

			#endif

		#endif

		#if FEATURE_DOF
		{

			// depth of field
			vec3 focalPoint = ray.origin + normalize( ray.direction ) * physicalCamera.focusDistance;

			// get the aperture sample
			// if blades === 0 then we assume a circle
			vec3 shapeUVW= rand3( 1 );
			int blades = physicalCamera.apertureBlades;
			float anamorphicRatio = physicalCamera.anamorphicRatio;
			vec2 apertureSample = blades == 0 ? sampleCircle( shapeUVW.xy ) : sampleRegularPolygon( blades, shapeUVW );
			apertureSample *= physicalCamera.bokehSize * 0.5 * 1e-3;

			// rotate the aperture shape
			apertureSample =
				rotateVector( apertureSample, physicalCamera.apertureRotation ) *
				saturate( vec2( anamorphicRatio, 1.0 / anamorphicRatio ) );

			// create the new ray
			ray.origin += ( cameraWorldMatrix * vec4( apertureSample, 0.0, 0.0 ) ).xyz;
			ray.direction = focalPoint - ray.origin;

		}
		#endif

		ray.direction = normalize( ray.direction );

		return ray;

	}

`,Lg=`

	// step through multiple surface hits and accumulate color attenuation based on transmissive surfaces
	// returns true if a solid surface was hit
	bool attenuateHit(
		RenderState state,
		Ray ray, float rayDist,
		out vec3 color
	) {

		// store the original bounce index so we can reset it after
		uint originalBounceIndex = sobolBounceIndex;

		int traversals = state.traversals;
		int transmissiveTraversals = state.transmissiveTraversals;
		bool isShadowRay = state.isShadowRay;
		Material fogMaterial = state.fogMaterial;

		vec3 startPoint = ray.origin;

		// hit results
		SurfaceHit surfaceHit;

		color = vec3( 1.0 );

		bool result = true;
		for ( int i = 0; i < traversals; i ++ ) {

			sobolBounceIndex ++;

			int hitType = traceScene( ray, fogMaterial, surfaceHit );

			if ( hitType == FOG_HIT ) {

				result = true;
				break;

			} else if ( hitType == SURFACE_HIT ) {

				float totalDist = distance( startPoint, ray.origin + ray.direction * surfaceHit.dist );
				if ( totalDist > rayDist ) {

					result = false;
					break;

				}

				// TODO: attenuate the contribution based on the PDF of the resulting ray including refraction values
				// Should be able to work using the material BSDF functions which will take into account specularity, etc.
				// TODO: should we account for emissive surfaces here?

				uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
				Material material = readMaterialInfo( materials, materialIndex );

				// adjust the ray to the new surface
				bool isEntering = surfaceHit.side == 1.0;
				ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

				#if FEATURE_FOG

				if ( material.fogVolume ) {

					fogMaterial = material;
					fogMaterial.fogVolume = surfaceHit.side == 1.0;
					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;
					continue;

				}

				#endif

				if ( ! material.castShadow && isShadowRay ) {

					continue;

				}

				vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
				vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

				// albedo
				vec4 albedo = vec4( material.color, material.opacity );
				if ( material.map != - 1 ) {

					vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
					albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

				}

				if ( material.vertexColors ) {

					albedo *= vertexColor;

				}

				// alphaMap
				if ( material.alphaMap != - 1 ) {

					albedo.a *= texture2D( textures, vec3( uv, material.alphaMap ) ).x;

				}

				// transmission
				float transmission = material.transmission;
				if ( material.transmissionMap != - 1 ) {

					vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
					transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

				}

				// metalness
				float metalness = material.metalness;
				if ( material.metalnessMap != - 1 ) {

					vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
					metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

				}

				float alphaTest = material.alphaTest;
				bool useAlphaTest = alphaTest != 0.0;
				float transmissionFactor = ( 1.0 - metalness ) * transmission;
				if (
					transmissionFactor < rand( 9 ) && ! (
						// material sidedness
						material.side != 0.0 && surfaceHit.side == material.side

						// alpha test
						|| useAlphaTest && albedo.a < alphaTest

						// opacity
						|| material.transparent && ! useAlphaTest && albedo.a < rand( 10 )
					)
				) {

					result = true;
					break;

				}

				if ( surfaceHit.side == 1.0 && isEntering ) {

					// only attenuate by surface color on the way in
					color *= mix( vec3( 1.0 ), albedo.rgb, transmissionFactor );

				} else if ( surfaceHit.side == - 1.0 ) {

					// attenuate by medium once we hit the opposite side of the model
					color *= transmissionAttenuation( surfaceHit.dist, material.attenuationColor, material.attenuationDistance );

				}

				bool isTransmissiveRay = dot( ray.direction, surfaceHit.faceNormal * surfaceHit.side ) < 0.0;
				if ( ( isTransmissiveRay || isEntering ) && transmissiveTraversals > 0 ) {

					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;

				}

			} else {

				result = false;
				break;

			}

		}

		// reset the bounce index
		sobolBounceIndex = originalBounceIndex;
		return result;

	}

`,Jg=`

	#define NO_HIT 0
	#define SURFACE_HIT 1
	#define LIGHT_HIT 2
	#define FOG_HIT 3

	// Passing the global variable 'lights' into this function caused shader program errors.
	// So global variables like 'lights' and 'bvh' were moved out of the function parameters.
	// For more information, refer to: https://github.com/gkjohnson/three-gpu-pathtracer/pull/457
	int traceScene(

		Ray ray, Material fogMaterial, inout SurfaceHit surfaceHit

	) {

		int result = NO_HIT;
		bool hit = bvhIntersectFirstHit( bvh, ray.origin, ray.direction, surfaceHit.faceIndices, surfaceHit.faceNormal, surfaceHit.barycoord, surfaceHit.side, surfaceHit.dist );

		#if FEATURE_FOG

		if ( fogMaterial.fogVolume ) {

			// offset the distance so we don't run into issues with particles on the same surface
			// as other objects
			float particleDist = intersectFogVolume( fogMaterial, rand( 1 ) );
			if ( particleDist + RAY_OFFSET < surfaceHit.dist ) {

				surfaceHit.side = 1.0;
				surfaceHit.faceNormal = normalize( - ray.direction );
				surfaceHit.dist = particleDist;
				return FOG_HIT;

			}

		}

		#endif

		if ( hit ) {

			result = SURFACE_HIT;

		}

		return result;

	}

`,Qg=`

	#define SKIP_SURFACE 0
	#define HIT_SURFACE 1
	int getSurfaceRecord(
		Material material, SurfaceHit surfaceHit, sampler2DArray attributesArray,
		float accumulatedRoughness,
		inout SurfaceRecord surf
	) {

		if ( material.fogVolume ) {

			vec3 normal = vec3( 0, 0, 1 );

			SurfaceRecord fogSurface;
			fogSurface.volumeParticle = true;
			fogSurface.color = material.color;
			fogSurface.emission = material.emissiveIntensity * material.emissive;
			fogSurface.normal = normal;
			fogSurface.faceNormal = normal;
			fogSurface.clearcoatNormal = normal;

			surf = fogSurface;
			return HIT_SURFACE;

		}

		// uv coord for textures
		vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
		vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

		// albedo
		vec4 albedo = vec4( material.color, material.opacity );
		if ( material.map != - 1 ) {

			vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
			albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

		}

		if ( material.vertexColors ) {

			albedo *= vertexColor;

		}

		// alphaMap
		if ( material.alphaMap != - 1 ) {

			albedo.a *= texture2D( textures, vec3( uv, material.alphaMap ) ).x;

		}

		// possibly skip this sample if it's transparent, alpha test is enabled, or we hit the wrong material side
		// and it's single sided.
		// - alpha test is disabled when it === 0
		// - the material sidedness test is complicated because we want light to pass through the back side but still
		// be able to see the front side. This boolean checks if the side we hit is the front side on the first ray
		// and we're rendering the other then we skip it. Do the opposite on subsequent bounces to get incoming light.
		float alphaTest = material.alphaTest;
		bool useAlphaTest = alphaTest != 0.0;
		if (
			// material sidedness
			material.side != 0.0 && surfaceHit.side != material.side

			// alpha test
			|| useAlphaTest && albedo.a < alphaTest

			// opacity
			|| material.transparent && ! useAlphaTest && albedo.a < rand( 3 )
		) {

			return SKIP_SURFACE;

		}

		// fetch the interpolated smooth normal
		vec3 normal = normalize( textureSampleBarycoord(
			attributesArray,
			ATTR_NORMAL,
			surfaceHit.barycoord,
			surfaceHit.faceIndices.xyz
		).xyz );

		// roughness
		float roughness = material.roughness;
		if ( material.roughnessMap != - 1 ) {

			vec3 uvPrime = material.roughnessMapTransform * vec3( uv, 1 );
			roughness *= texture2D( textures, vec3( uvPrime.xy, material.roughnessMap ) ).g;

		}

		// metalness
		float metalness = material.metalness;
		if ( material.metalnessMap != - 1 ) {

			vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
			metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

		}

		// emission
		vec3 emission = material.emissiveIntensity * material.emissive;
		if ( material.emissiveMap != - 1 ) {

			vec3 uvPrime = material.emissiveMapTransform * vec3( uv, 1 );
			emission *= texture2D( textures, vec3( uvPrime.xy, material.emissiveMap ) ).xyz;

		}

		// transmission
		float transmission = material.transmission;
		if ( material.transmissionMap != - 1 ) {

			vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
			transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

		}

		// normal
		if ( material.flatShading ) {

			// if we're rendering a flat shaded object then use the face normals - the face normal
			// is provided based on the side the ray hits the mesh so flip it to align with the
			// interpolated vertex normals.
			normal = surfaceHit.faceNormal * surfaceHit.side;

		}

		vec3 baseNormal = normal;
		if ( material.normalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( normal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, normal );

				vec3 uvPrime = material.normalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.normalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.normalScale;
				normal = vTBN * texNormal;

			}

		}

		normal *= surfaceHit.side;

		// clearcoat
		float clearcoat = material.clearcoat;
		if ( material.clearcoatMap != - 1 ) {

			vec3 uvPrime = material.clearcoatMapTransform * vec3( uv, 1 );
			clearcoat *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatMap ) ).r;

		}

		// clearcoatRoughness
		float clearcoatRoughness = material.clearcoatRoughness;
		if ( material.clearcoatRoughnessMap != - 1 ) {

			vec3 uvPrime = material.clearcoatRoughnessMapTransform * vec3( uv, 1 );
			clearcoatRoughness *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatRoughnessMap ) ).g;

		}

		// clearcoatNormal
		vec3 clearcoatNormal = baseNormal;
		if ( material.clearcoatNormalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( clearcoatNormal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, clearcoatNormal );

				vec3 uvPrime = material.clearcoatNormalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.clearcoatNormalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.clearcoatNormalScale;
				clearcoatNormal = vTBN * texNormal;

			}

		}

		clearcoatNormal *= surfaceHit.side;

		// sheenColor
		vec3 sheenColor = material.sheenColor;
		if ( material.sheenColorMap != - 1 ) {

			vec3 uvPrime = material.sheenColorMapTransform * vec3( uv, 1 );
			sheenColor *= texture2D( textures, vec3( uvPrime.xy, material.sheenColorMap ) ).rgb;

		}

		// sheenRoughness
		float sheenRoughness = material.sheenRoughness;
		if ( material.sheenRoughnessMap != - 1 ) {

			vec3 uvPrime = material.sheenRoughnessMapTransform * vec3( uv, 1 );
			sheenRoughness *= texture2D( textures, vec3( uvPrime.xy, material.sheenRoughnessMap ) ).a;

		}

		// iridescence
		float iridescence = material.iridescence;
		if ( material.iridescenceMap != - 1 ) {

			vec3 uvPrime = material.iridescenceMapTransform * vec3( uv, 1 );
			iridescence *= texture2D( textures, vec3( uvPrime.xy, material.iridescenceMap ) ).r;

		}

		// iridescence thickness
		float iridescenceThickness = material.iridescenceThicknessMaximum;
		if ( material.iridescenceThicknessMap != - 1 ) {

			vec3 uvPrime = material.iridescenceThicknessMapTransform * vec3( uv, 1 );
			float iridescenceThicknessSampled = texture2D( textures, vec3( uvPrime.xy, material.iridescenceThicknessMap ) ).g;
			iridescenceThickness = mix( material.iridescenceThicknessMinimum, material.iridescenceThicknessMaximum, iridescenceThicknessSampled );

		}

		iridescence = iridescenceThickness == 0.0 ? 0.0 : iridescence;

		// specular color
		vec3 specularColor = material.specularColor;
		if ( material.specularColorMap != - 1 ) {

			vec3 uvPrime = material.specularColorMapTransform * vec3( uv, 1 );
			specularColor *= texture2D( textures, vec3( uvPrime.xy, material.specularColorMap ) ).rgb;

		}

		// specular intensity
		float specularIntensity = material.specularIntensity;
		if ( material.specularIntensityMap != - 1 ) {

			vec3 uvPrime = material.specularIntensityMapTransform * vec3( uv, 1 );
			specularIntensity *= texture2D( textures, vec3( uvPrime.xy, material.specularIntensityMap ) ).a;

		}

		surf.volumeParticle = false;

		surf.faceNormal = surfaceHit.faceNormal;
		surf.normal = normal;

		surf.metalness = metalness;
		surf.color = albedo.rgb;
		surf.emission = emission;

		surf.ior = material.ior;
		surf.transmission = transmission;
		surf.thinFilm = material.thinFilm;
		surf.attenuationColor = material.attenuationColor;
		surf.attenuationDistance = material.attenuationDistance;

		surf.clearcoatNormal = clearcoatNormal;
		surf.clearcoat = clearcoat;

		surf.sheen = material.sheen;
		surf.sheenColor = sheenColor;

		surf.iridescence = iridescence;
		surf.iridescenceIor = material.iridescenceIor;
		surf.iridescenceThickness = iridescenceThickness;

		surf.specularColor = specularColor;
		surf.specularIntensity = specularIntensity;

		// apply perceptual roughness factor from gltf. sheen perceptual roughness is
		// applied by its brdf function
		// https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#microfacet-surfaces
		surf.roughness = roughness * roughness;
		surf.clearcoatRoughness = clearcoatRoughness * clearcoatRoughness;
		surf.sheenRoughness = sheenRoughness;

		// frontFace is used to determine transmissive properties and PDF. If no transmission is used
		// then we can just always assume this is a front face.
		surf.frontFace = surfaceHit.side == 1.0 || transmission == 0.0;
		surf.eta = material.thinFilm || surf.frontFace ? 1.0 / material.ior : material.ior;
		surf.f0 = iorRatioToF0( surf.eta );

		// Compute the filtered roughness value to use during specular reflection computations.
		// The accumulated roughness value is scaled by a user setting and a "magic value" of 5.0.
		// If we're exiting something transmissive then scale the factor down significantly so we can retain
		// sharp internal reflections
		surf.filteredRoughness = applyFilteredGlossy( surf.roughness, accumulatedRoughness );
		surf.filteredClearcoatRoughness = applyFilteredGlossy( surf.clearcoatRoughness, accumulatedRoughness );

		// get the normal frames
		surf.normalBasis = getBasisFromNormal( surf.normal );
		surf.normalInvBasis = inverse( surf.normalBasis );

		surf.clearcoatBasis = getBasisFromNormal( surf.clearcoatNormal );
		surf.clearcoatInvBasis = inverse( surf.clearcoatBasis );

		return HIT_SURFACE;

	}
`,Wg=`

	vec3 directLightContribution( vec3 worldWo, SurfaceRecord surf, RenderState state, vec3 rayOrigin ) {

		vec3 result = vec3( 0.0 );

		// uniformly pick a light or environment map
		if( lightsDenom != 0.0 && rand( 5 ) < float( lights.count ) / lightsDenom ) {

			// sample a light or environment
			LightRecord lightRec = randomLightSample( lights.tex, iesProfiles, lights.count, rayOrigin, rand3( 6 ) );

			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, lightRec.direction ) < 0.0;
			if ( isSampleBelowSurface ) {

				lightRec.pdf = 0.0;

			}

			// check if a ray could even reach the light area
			Ray lightRay;
			lightRay.origin = rayOrigin;
			lightRay.direction = lightRec.direction;
			vec3 attenuatedColor;
			if (
				lightRec.pdf > 0.0 &&
				isDirectionValid( lightRec.direction, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, lightRay, lightRec.dist, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float lightMaterialPdf = bsdfResult( worldWo, lightRec.direction, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( lightMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					float lightPdf = lightRec.pdf / lightsDenom;
					float misWeight = lightRec.type == SPOT_LIGHT_TYPE || lightRec.type == DIR_LIGHT_TYPE || lightRec.type == POINT_LIGHT_TYPE ? 1.0 : misHeuristic( lightPdf, lightMaterialPdf );
					result = attenuatedColor * lightRec.emission * state.throughputColor * sampleColor * misWeight / lightPdf;

				}

			}

		} else if ( envMapInfo.totalSum != 0.0 && environmentIntensity != 0.0 ) {

			// find a sample in the environment map to include in the contribution
			vec3 envColor, envDirection;
			float envPdf = sampleEquirectProbability( rand2( 7 ), envColor, envDirection );
			envDirection = invEnvRotation3x3 * envDirection;

			// this env sampling is not set up for transmissive sampling and yields overly bright
			// results so we ignore the sample in this case.
			// TODO: this should be improved but how? The env samples could traverse a few layers?
			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, envDirection ) < 0.0;
			if ( isSampleBelowSurface ) {

				envPdf = 0.0;

			}

			// check if a ray could even reach the surface
			Ray envRay;
			envRay.origin = rayOrigin;
			envRay.direction = envDirection;
			vec3 attenuatedColor;
			if (
				envPdf > 0.0 &&
				isDirectionValid( envDirection, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, envRay, INFINITY, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float envMaterialPdf = bsdfResult( worldWo, envDirection, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( envMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					envPdf /= lightsDenom;
					float misWeight = misHeuristic( envPdf, envMaterialPdf );
					result = attenuatedColor * environmentIntensity * envColor * state.throughputColor * sampleColor * misWeight / envPdf;

				}

			}

		}

		// Function changed to have a single return statement to potentially help with crashes on Mac OS.
		// See issue #470
		return result;

	}

`,Vg=`

	uniform sampler2D stratifiedTexture;
	uniform sampler2D stratifiedOffsetTexture;

	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;
	vec4 pixelSeed = vec4( 0 );

	vec4 rand4( int v ) {

		ivec2 uv = ivec2( v, sobolBounceIndex );
		vec4 stratifiedSample = texelFetch( stratifiedTexture, uv, 0 );
		return fract( stratifiedSample + pixelSeed.r ); // blue noise + stratified samples

	}

	vec3 rand3( int v ) {

		return rand4( v ).xyz;

	}

	vec2 rand2( int v ) {

		return rand4( v ).xy;

	}

	float rand( int v ) {

		return rand4( v ).x;

	}

	void rng_initialize( vec2 screenCoord, int frame ) {

		// tile the small noise texture across the entire screen
		ivec2 noiseSize = ivec2( textureSize( stratifiedOffsetTexture, 0 ) );
		pixelSeed = texelFetch( stratifiedOffsetTexture, ivec2( screenCoord.xy ) % noiseSize, 0 );

	}

`;function Xg(o){for(let e=o.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1)),i=o[e];o[e]=o[t],o[t]=i}return o}class Yg{constructor(e,t){const i=e**t,n=new Uint16Array(i);let r=i;for(let s=0;s<i;s++)n[s]=s;this.samples=new Float32Array(t),this.strataCount=e,this.restart=function(){r=0},this.next=function(){const{samples:s}=this;r>=n.length&&(Xg(n),this.restart());let a=n[r++];for(let c=0;c<t;c++)s[c]=(a%e+Math.random())/e,a=Math.floor(a/e);return s}}}class Zg{constructor(e,t){let i=0;for(const a of t)i+=a;const n=new Float32Array(i),r=[];let s=0;for(const a of t){const c=new Yg(e,a);c.samples=new Float32Array(n.buffer,s,c.samples.length),s+=c.samples.length*4,r.push(c)}this.samples=n,this.strataCount=e,this.next=function(){for(const a of r)a.next();return n},this.restart=function(){for(const a of r)a.restart()}}}class qg extends Te{constructor(e=1,t=1,i=8){super(new Float32Array(1),1,1,Ce,Re),this.minFilter=he,this.magFilter=he,this.strata=i,this.sampler=null,this.init(e,t,i)}init(e,t,i=this.strata){const{image:n}=this;if(n.width===t&&n.height===e)return;const r=new Array(e*t).fill(4),s=new Zg(i,r);n.width=t,n.height=e,n.data=s.samples,this.sampler=s,this.dispose(),this.next()}next(){this.sampler.next(),this.needsUpdate=!0}}function _g(o,e=Math.random){for(let t=o.length-1;t>0;t--){const i=~~((e()-1e-6)*t),n=o[t];o[t]=o[i],o[i]=n}}function $g(o,e){o.fill(0);for(let t=0;t<e;t++)o[t]=1}class Ba{constructor(e){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(e),this.setSigma(1.5)}findVoid(){const{score:e,binaryPattern:t}=this;let i=1/0,n=-1;for(let r=0,s=t.length;r<s;r++){if(t[r]!==0)continue;const a=e[r];a<i&&(i=a,n=r)}return n}findCluster(){const{score:e,binaryPattern:t}=this;let i=-1/0,n=-1;for(let r=0,s=t.length;r<s;r++){if(t[r]!==1)continue;const a=e[r];a>i&&(i=a,n=r)}return n}setSigma(e){if(e===this.sigma)return;const t=~~(Math.sqrt(10*2*e**2)+1),i=2*t+1,n=new Float32Array(i*i),r=e*e;for(let s=-t;s<=t;s++)for(let a=-t;a<=t;a++){const c=(t+a)*i+s+t,d=s*s+a*a;n[c]=Math.E**(-d/(2*r))}this.lookupTable=n,this.sigma=e,this.radius=t}resize(e){this.size!==e&&(this.size=e,this.score=new Float32Array(e*e),this.binaryPattern=new Uint8Array(e*e))}invert(){const{binaryPattern:e,score:t,size:i}=this;t.fill(0);for(let n=0,r=e.length;n<r;n++)if(e[n]===0){const s=~~(n/i),a=n-s*i;this.updateScore(a,s,1),e[n]=1}else e[n]=0}updateScore(e,t,i){const{size:n,score:r,lookupTable:s}=this,a=this.radius,c=2*a+1;for(let d=-a;d<=a;d++)for(let A=-a;A<=a;A++){const u=(a+A)*c+d+a,f=s[u];let m=e+d;m=m<0?n+m:m%n;let y=t+A;y=y<0?n+y:y%n;const g=y*n+m;r[g]+=i*f}}addPointIndex(e){this.binaryPattern[e]=1;const t=this.size,i=~~(e/t),n=e-i*t;this.updateScore(n,i,1),this.count++}removePointIndex(e){this.binaryPattern[e]=0;const t=this.size,i=~~(e/t),n=e-i*t;this.updateScore(n,i,-1),this.count--}copy(e){this.resize(e.size),this.score.set(e.score),this.binaryPattern.set(e.binaryPattern),this.setSigma(e.sigma),this.count=e.count}}class e0{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new Ba(1),this.savedSamples=new Ba(1)}generate(){const{samples:e,savedSamples:t,sigma:i,majorityPointsRatio:n,size:r}=this;e.resize(r),e.setSigma(i);const s=Math.floor(r*r*n),a=e.binaryPattern;$g(a,s),_g(a,this.random);for(let u=0,f=a.length;u<f;u++)a[u]===1&&e.addPointIndex(u);for(;;){const u=e.findCluster();e.removePointIndex(u);const f=e.findVoid();if(u===f){e.addPointIndex(u);break}e.addPointIndex(f)}const c=new Uint32Array(r*r);t.copy(e);let d;for(d=e.count-1;d>=0;){const u=e.findCluster();e.removePointIndex(u),c[u]=d,d--}const A=r*r;for(d=t.count;d<A/2;){const u=t.findVoid();t.addPointIndex(u),c[u]=d,d++}for(t.invert();d<A;){const u=t.findCluster();t.removePointIndex(u),c[u]=d,d++}return{data:c,maxValue:A}}}function t0(o){return o>=3?4:o}function o0(o){switch(o){case 1:return Gt;case 2:return Wa;default:return Ce}}class n0 extends Te{constructor(e=64,t=1){super(new Float32Array(4),1,1,Ce,Re),this.minFilter=he,this.magFilter=he,this.size=e,this.channels=t,this.update()}update(){const e=this.channels,t=this.size,i=new e0;i.channels=e,i.size=t;const n=t0(e),r=o0(n);(this.image.width!==t||r!==this.format)&&(this.image.width=t,this.image.height=t,this.image.data=new Float32Array(t**2*n),this.format=r,this.dispose());const s=this.image.data;for(let a=0,c=e;a<c;a++){const d=i.generate(),A=d.data,u=d.maxValue;for(let f=0,m=A.length;f<m;f++){const y=A[f]/u;s[f*n+a]=y}}this.needsUpdate=!0}}class i0 extends Ls{onBeforeRender(){this.setDefine("FEATURE_DOF",this.physicalCamera.bokehSize===0?0:1),this.setDefine("FEATURE_BACKGROUND_MAP",this.backgroundMap?1:0),this.setDefine("FEATURE_FOG",this.materials.features.isUsed("FOG")?1:0)}constructor(e){super({transparent:!0,depthWrite:!1,defines:{FEATURE_MIS:1,FEATURE_RUSSIAN_ROULETTE:1,FEATURE_DOF:1,FEATURE_BACKGROUND_MAP:0,FEATURE_FOG:1,RANDOM_TYPE:2,CAMERA_TYPE:0,DEBUG_MODE:0,ATTR_NORMAL:0,ATTR_TANGENT:1,ATTR_UV:2,ATTR_COLOR:3},uniforms:{resolution:{value:new Ie},bounces:{value:10},transmissiveBounces:{value:10},physicalCamera:{value:new fg},bvh:{value:new Fh},attributesArray:{value:new Bg},materialIndexAttribute:{value:new Cl},materials:{value:new rg},textures:{value:new ag().texture},lights:{value:new xg},iesProfiles:{value:new bg().texture},cameraWorldMatrix:{value:new Y},invProjectionMatrix:{value:new Y},backgroundBlur:{value:0},environmentIntensity:{value:1},environmentRotation:{value:new Y},envMapInfo:{value:new dg},backgroundMap:{value:null},seed:{value:0},opacity:{value:1},filterGlossyFactor:{value:0},backgroundAlpha:{value:1},sobolTexture:{value:null},stratifiedTexture:{value:new qg},stratifiedOffsetTexture:{value:new n0(64,1)}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vec4 mvPosition = vec4( position, 1.0 );
					mvPosition = modelViewMatrix * mvPosition;
					gl_Position = projectionMatrix * mvPosition;

					vUv = uv;

				}

			`,fragmentShader:`
				#define RAY_OFFSET 1e-4
				#define INFINITY 1e20

				precision highp isampler2D;
				precision highp usampler2D;
				precision highp sampler2DArray;
				vec4 envMapTexelToLinear( vec4 a ) { return a; }
				#include <common>

				// bvh intersection
				${Dh}
				${Uh}
				${Eh}

				// uniform structs
				${vg}
				${Sg}
				${Rg}
				${Mg}

				// random
				#if RANDOM_TYPE == 2 	// Stratified List

					${Vg}

				#elif RANDOM_TYPE == 1 	// Sobol

					${Fa}
					${vl}
					${Xh}

					#define rand(v) sobol(v)
					#define rand2(v) sobol2(v)
					#define rand3(v) sobol3(v)
					#define rand4(v) sobol4(v)

				#else 					// PCG

					${Fa}

					// Using the sobol functions seems to break the the compiler on MacOS
					// - specifically the "sobolReverseBits" function.
					uint sobolPixelIndex = 0u;
					uint sobolPathIndex = 0u;
					uint sobolBounceIndex = 0u;

					#define rand(v) pcgRand()
					#define rand2(v) pcgRand2()
					#define rand3(v) pcgRand3()
					#define rand4(v) pcgRand4()

				#endif

				// common
				${Og}
				${Hg}
				${Cg}
				${Pg}
				${zg}

				// environment
				uniform EquirectHdrInfo envMapInfo;
				uniform mat4 environmentRotation;
				uniform float environmentIntensity;

				// lighting
				uniform sampler2DArray iesProfiles;
				uniform LightsInfo lights;

				// background
				uniform float backgroundBlur;
				uniform float backgroundAlpha;
				#if FEATURE_BACKGROUND_MAP

				uniform sampler2D backgroundMap;

				#endif

				// camera
				uniform mat4 cameraWorldMatrix;
				uniform mat4 invProjectionMatrix;
				#if FEATURE_DOF

				uniform PhysicalCamera physicalCamera;

				#endif

				// geometry
				uniform sampler2DArray attributesArray;
				uniform usampler2D materialIndexAttribute;
				uniform sampler2D materials;
				uniform sampler2DArray textures;
				uniform BVH bvh;

				// path tracer
				uniform int bounces;
				uniform int transmissiveBounces;
				uniform float filterGlossyFactor;
				uniform int seed;

				// image
				uniform vec2 resolution;
				uniform float opacity;

				varying vec2 vUv;

				// globals
				mat3 envRotation3x3;
				mat3 invEnvRotation3x3;
				float lightsDenom;

				// sampling
				${Kg}
				${kg}
				${Ug}
				${jg}
				${Ig}
				${Tg}

				float applyFilteredGlossy( float roughness, float accumulatedRoughness ) {

					return clamp(
						max(
							roughness,
							accumulatedRoughness * filterGlossyFactor * 5.0 ),
						0.0,
						1.0
					);

				}

				vec3 sampleBackground( vec3 direction, vec2 uv ) {

					vec3 sampleDir = normalize( direction + sampleHemisphere( direction, uv ) * 0.5 * backgroundBlur );

					#if FEATURE_BACKGROUND_MAP

					return sampleEquirectColor( backgroundMap, sampleDir );

					#else

					return environmentIntensity * sampleEquirectColor( envMapInfo.map, sampleDir );

					#endif

				}

				${Gg}
				${Ng}
				${Jg}
				${Lg}
				${Wg}
				${Qg}

				void main() {

					// init
					rng_initialize( gl_FragCoord.xy, seed );
					sobolPixelIndex = ( uint( gl_FragCoord.x ) << 16 ) | uint( gl_FragCoord.y );
					sobolPathIndex = uint( seed );

					// get camera ray
					Ray ray = getCameraRay();

					// inverse environment rotation
					envRotation3x3 = mat3( environmentRotation );
					invEnvRotation3x3 = inverse( envRotation3x3 );
					lightsDenom =
						( environmentIntensity == 0.0 || envMapInfo.totalSum == 0.0 ) && lights.count != 0u ?
							float( lights.count ) :
							float( lights.count + 1u );

					// final color
					gl_FragColor = vec4( 0, 0, 0, 1 );

					// surface results
					SurfaceHit surfaceHit;
					ScatterRecord scatterRec;

					// path tracing state
					RenderState state = initRenderState();
					state.transmissiveTraversals = transmissiveBounces;
					#if FEATURE_FOG

					state.fogMaterial.fogVolume = bvhIntersectFogVolumeHit(
						ray.origin, - ray.direction,
						materialIndexAttribute, materials,
						state.fogMaterial
					);

					#endif

					for ( int i = 0; i < bounces; i ++ ) {

						sobolBounceIndex ++;

						state.depth ++;
						state.traversals = bounces - i;
						state.firstRay = i == 0 && state.transmissiveTraversals == transmissiveBounces;

						int hitType = traceScene( ray, state.fogMaterial, surfaceHit );

						// check if we intersect any lights and accumulate the light contribution
						// TODO: we can add support for light surface rendering in the else condition if we
						// add the ability to toggle visibility of the the light
						if ( ! state.firstRay && ! state.transmissiveRay ) {

							LightRecord lightRec;
							float lightDist = hitType == NO_HIT ? INFINITY : surfaceHit.dist;
							for ( uint i = 0u; i < lights.count; i ++ ) {

								if (
									intersectLightAtIndex( lights.tex, ray.origin, ray.direction, i, lightRec ) &&
									lightRec.dist < lightDist
								) {

									#if FEATURE_MIS

									// weight the contribution
									// NOTE: Only area lights are supported for forward sampling and can be hit
									float misWeight = misHeuristic( scatterRec.pdf, lightRec.pdf / lightsDenom );
									gl_FragColor.rgb += lightRec.emission * state.throughputColor * misWeight;

									#else

									gl_FragColor.rgb += lightRec.emission * state.throughputColor;

									#endif

								}

							}

						}

						if ( hitType == NO_HIT ) {

							if ( state.firstRay || state.transmissiveRay ) {

								gl_FragColor.rgb += sampleBackground( envRotation3x3 * ray.direction, rand2( 2 ) ) * state.throughputColor;
								gl_FragColor.a = backgroundAlpha;

							} else {

								#if FEATURE_MIS

								// get the PDF of the hit envmap point
								vec3 envColor;
								float envPdf = sampleEquirect( envRotation3x3 * ray.direction, envColor );
								envPdf /= lightsDenom;

								// and weight the contribution
								float misWeight = misHeuristic( scatterRec.pdf, envPdf );
								gl_FragColor.rgb += environmentIntensity * envColor * state.throughputColor * misWeight;

								#else

								gl_FragColor.rgb +=
									environmentIntensity *
									sampleEquirectColor( envMapInfo.map, envRotation3x3 * ray.direction ) *
									state.throughputColor;

								#endif

							}
							break;

						}

						uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
						Material material = readMaterialInfo( materials, materialIndex );

						#if FEATURE_FOG

						if ( hitType == FOG_HIT ) {

							material = state.fogMaterial;
							state.accumulatedRoughness += 0.2;

						} else if ( material.fogVolume ) {

							state.fogMaterial = material;
							state.fogMaterial.fogVolume = surfaceHit.side == 1.0;

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );
							continue;

						}

						#endif

						// early out if this is a matte material
						if ( material.matte && state.firstRay ) {

							gl_FragColor = vec4( 0.0 );
							break;

						}

						// if we've determined that this is a shadow ray and we've hit an item with no shadow casting
						// then skip it
						if ( ! material.castShadow && state.isShadowRay ) {

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						SurfaceRecord surf;
						if (
							getSurfaceRecord(
								material, surfaceHit, attributesArray, state.accumulatedRoughness,
								surf
							) == SKIP_SURFACE
						) {

							// only allow a limited number of transparency discards otherwise we could
							// crash the context with too long a loop.
							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						scatterRec = bsdfSample( - ray.direction, surf );
						state.isShadowRay = scatterRec.specularPdf < rand( 4 );

						bool isBelowSurface = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal ) < 0.0;
						vec3 hitPoint = stepRayOrigin( ray.origin, ray.direction, isBelowSurface ? - surf.faceNormal : surf.faceNormal, surfaceHit.dist );

						// next event estimation
						#if FEATURE_MIS

						gl_FragColor.rgb += directLightContribution( - ray.direction, surf, state, hitPoint );

						#endif

						// accumulate a roughness value to offset diffuse, specular, diffuse rays that have high contribution
						// to a single pixel resulting in fireflies
						// TODO: handle transmissive surfaces
						if ( ! surf.volumeParticle && ! isBelowSurface ) {

							// determine if this is a rough normal or not by checking how far off straight up it is
							vec3 halfVector = normalize( - ray.direction + scatterRec.direction );
							state.accumulatedRoughness += max(
								sin( acosApprox( dot( halfVector, surf.normal ) ) ),
								sin( acosApprox( dot( halfVector, surf.clearcoatNormal ) ) )
							);

							state.transmissiveRay = false;

						}

						// accumulate emissive color
						gl_FragColor.rgb += ( surf.emission * state.throughputColor );

						// skip the sample if our PDF or ray is impossible
						if ( scatterRec.pdf <= 0.0 || ! isDirectionValid( scatterRec.direction, surf.normal, surf.faceNormal ) ) {

							break;

						}

						// if we're bouncing around the inside a transmissive material then decrement
						// perform this separate from a bounce
						bool isTransmissiveRay = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal * surfaceHit.side ) < 0.0;
						if ( ( isTransmissiveRay || isBelowSurface ) && state.transmissiveTraversals > 0 ) {

							state.transmissiveTraversals --;
							i --;

						}

						//

						// handle throughput color transformation
						// attenuate the throughput color by the medium color
						if ( ! surf.frontFace ) {

							state.throughputColor *= transmissionAttenuation( surfaceHit.dist, surf.attenuationColor, surf.attenuationDistance );

						}

						#if FEATURE_RUSSIAN_ROULETTE

						// russian roulette path termination
						// https://www.arnoldrenderer.com/research/physically_based_shader_design_in_arnold.pdf
						uint minBounces = 3u;
						float depthProb = float( state.depth < minBounces );

						float rrProb = luminance( state.throughputColor * scatterRec.color / scatterRec.pdf );
						rrProb /= luminance( state.throughputColor );
						rrProb = sqrt( rrProb );
						rrProb = max( rrProb, depthProb );
						rrProb = min( rrProb, 1.0 );
						if ( rand( 8 ) > rrProb ) {

							break;

						}

						// perform sample clamping here to avoid bright pixels
						state.throughputColor *= min( 1.0 / rrProb, 20.0 );

						#endif

						// adjust the throughput and discard and exit if we find discard the sample if there are any NaNs
						state.throughputColor *= scatterRec.color / scatterRec.pdf;
						if ( any( isnan( state.throughputColor ) ) || any( isinf( state.throughputColor ) ) ) {

							break;

						}

						//

						// prepare for next ray
						ray.direction = scatterRec.direction;
						ray.origin = hitPoint;

					}

					gl_FragColor.a *= opacity;

					#if DEBUG_MODE == 1

					// output the number of rays checked in the path and number of
					// transmissive rays encountered.
					gl_FragColor.rgb = vec3(
						float( state.depth ),
						transmissiveBounces - state.transmissiveTraversals,
						0.0
					);
					gl_FragColor.a = 1.0;

					#endif

				}

			`}),this.setValues(e)}}const ie=.072;function ft(o){switch(o){case"sphere":return new Za(ie*.52,8,6);case"star":{const e=ie*.64,t=ie*.25,i=ie*.42,n=new NA;for(let s=0;s<10;s++){const a=s*Math.PI*2/10-Math.PI/2,c=s%2===0?e:t;s===0?n.moveTo(Math.cos(a)*c,Math.sin(a)*c):n.lineTo(Math.cos(a)*c,Math.sin(a)*c)}n.closePath();const r=new LA(n,{depth:i,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelSegments:1});return r.translate(0,0,-i/2),r}default:return new Ms(ie,ie,ie)}}const Ml=(()=>{const e=new Uint8Array(4);for(let i=0;i<4;i++)e[i]=Math.round(i/3*255);const t=new Te(e,4,1,Gt);return t.minFilter=he,t.magFilter=he,t.generateMipmaps=!1,t.needsUpdate=!0,t})(),Yo={opacity:1,roughness:.5,metalness:0},yo=C.createContext(Yo);function Kl(o){return{opacity:o.opacity??Yo.opacity,roughness:o.roughness??Yo.roughness,metalness:o.metalness??Yo.metalness}}function Dt({material:o,color:e}){const{opacity:t,roughness:i,metalness:n}=C.useContext(yo),r=t<1,s={transparent:r,opacity:t},a=`${o}-${r?"t":"o"}`;return o==="custom"?l.jsx("meshStandardMaterial",{color:e,roughness:i,metalness:n,...s},a):o==="original"?l.jsx("meshStandardMaterial",{color:e,roughness:.65,metalness:.05,...s},a):o==="fluid"?l.jsx("meshPhysicalMaterial",{color:e,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5,envMapIntensity:1,...s},a):o==="glass"?l.jsx("meshPhysicalMaterial",{color:e,transmission:1,roughness:0,metalness:0,ior:1.52,thickness:.6,specularIntensity:1,envMapIntensity:1,...s},a):o==="metal"?l.jsx("meshStandardMaterial",{color:e,roughness:.06,metalness:.95,envMapIntensity:2,...s},a):o==="iridescent"?l.jsx("meshPhysicalMaterial",{color:e,metalness:0,roughness:.2,iridescence:1,iridescenceIOR:1.3,iridescenceThicknessRange:[100,400],envMapIntensity:1.2,...s},a):o==="emissive"?l.jsx("meshStandardMaterial",{color:e,emissive:e,emissiveIntensity:2.2,roughness:.55,metalness:0,...s},a):o==="toon"?l.jsx("meshToonMaterial",{color:e,gradientMap:Ml,...s},a):o==="wireframe"?l.jsx("meshBasicMaterial",{color:e,wireframe:!0,...s},a):l.jsx("meshStandardMaterial",{color:e,roughness:.65,metalness:.05,...s},a)}const Nt=5,Js=new U(0,1,0),Qs=C.createContext({mode:"off",occluders:[]}),wl={fontSize:11,distance:0,bold:!1,italic:!1,color:"#e8e8e8"},fi=C.createContext(wl),Ws=C.createContext(wl);function Vs(o){if(o.mode!=="off")return o.mode==="full"?!0:o.occluders.length?o.occluders:void 0}function Dl(o){return o==="sphere"?ie*.52:o==="star"?ie*.64:ie*.5}function El(o){return o.includes("drum")?.63:o.includes("clarinet")?1.2:o.includes("harp")?.825:1}function qo(o,e,t=Yo){const i=new ue(e),n={transparent:t.opacity<1,opacity:t.opacity};switch(o){case"custom":return new tt({color:i,roughness:t.roughness,metalness:t.metalness,...n});case"fluid":return new De({color:i,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5,envMapIntensity:1,...n});case"glass":return new De({color:i,transmission:1,roughness:0,metalness:0,ior:1.52,thickness:.6,specularIntensity:1,envMapIntensity:1,...n});case"metal":return new tt({color:i,roughness:.06,metalness:.95,envMapIntensity:2,...n});case"iridescent":return new De({color:i,metalness:0,roughness:.2,iridescence:1,iridescenceIOR:1.3,iridescenceThicknessRange:[100,400],envMapIntensity:1.2,...n});case"emissive":return new tt({color:i,emissive:i,emissiveIntensity:2.2,roughness:.55,...n});case"toon":return new JA({color:i,gradientMap:Ml,...n});case"wireframe":return new lt({color:i,wireframe:!0,...n});default:return new tt({color:i,roughness:.65,metalness:.05,...n})}}function Ul(o,e){const t=o.clone();return t.color&&(t.color=new ue(e)),t}const s0="0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)",va={display:"block",fontSize:"11px",color:"#e8e8e8",fontFamily:"Courier New, monospace",textShadow:s0,whiteSpace:"nowrap",userSelect:"none"};function Xs({center:o,dir:e,halfY:t,gapFactor:i,above:n,below:r}){const s=Vs(C.useContext(Qs)),{fontSize:a,distance:c,bold:d,italic:A,color:u}=C.useContext(fi),f=t*(1+i)+c,m=d?700:400,y=A?"italic":"normal",g=[o[0]+e[0]*f,o[1]+e[1]*f,o[2]+e[2]*f],x=[o[0]-e[0]*f,o[1]-e[1]*f,o[2]-e[2]*f];return l.jsxs(l.Fragment,{children:[n&&l.jsxs("group",{position:g,children:[l.jsx("group",{userData:{isLabel:!0,labelText:n,labelPos:"top"}}),l.jsx(Ae,{center:!0,occlude:s,style:{pointerEvents:"none"},children:l.jsx("span",{"data-phys-label":"",style:{...va,fontSize:`${a}px`,fontWeight:m,fontStyle:y,color:u,transform:"translateY(-100%)"},children:n})})]}),r&&l.jsxs("group",{position:x,children:[l.jsx("group",{userData:{isLabel:!0,labelText:r,labelPos:"bottom"}}),l.jsx(Ae,{center:!0,occlude:s,style:{pointerEvents:"none"},children:l.jsx("span",{"data-phys-label":"",style:{...va,fontSize:`${a}px`,fontWeight:m,fontStyle:y,color:u,transform:"translateY(0)"},children:r})})]})]})}const po=(o,e,t)=>o?o[t%o.length]:e;function Ys(o,e,t){return!t||!o.normal?o.pos:[o.pos[0]+o.normal[0]*e,o.pos[1]+o.normal[1]*e,o.pos[2]+o.normal[2]*e]}function Zs(o){const e=[];let t=0;for(const i of o)e.push(t+i),t+=2*i;return e}function r0({placements:o,markShape:e,markMaterial:t,markSize:i,color:n,structural:r,scaleBoost:s,standOnAnchor:a,stack:c,labelGapFactor:d,instanceSizes:A,instanceColors:u,markLabels:f}){const m=C.useRef(null),y=C.useMemo(()=>ft(e),[e]);C.useEffect(()=>()=>{y.dispose()},[y]);const g=Dl(e)*s,x=C.useMemo(()=>o.map((b,F)=>g*po(A,i,F).y),[o,g,A,i.y]),h=C.useMemo(()=>c?Zs(x):null,[c,x]),p=(b,F)=>h?[b.pos[0],b.pos[1]+h[F],b.pos[2]]:Ys(b,x[F],a);return C.useEffect(()=>{const b=m.current;if(!b)return;const F=new ws,B=new ke,v=new U,R=new ue;o.forEach((K,S)=>{const w=po(A,i,S);F.position.set(...p(K,S)),K.normal&&!c?(B.setFromUnitVectors(Js,v.set(...K.normal)),F.quaternion.copy(B)):F.rotation.set(...K.rot??[0,0,0]),F.scale.set(w.x*s,w.y*s,w.z*s),F.updateMatrix(),b.setMatrixAt(S,F.matrix),u&&b.setColorAt(S,R.set(u[S%u.length]))}),b.instanceMatrix.needsUpdate=!0,u&&b.instanceColor&&(b.instanceColor.needsUpdate=!0)},[o,e,i.x,i.y,i.z,s,a,c,A,u]),l.jsxs(l.Fragment,{children:[l.jsx("instancedMesh",{ref:m,args:[y,void 0,o.length],children:l.jsx(Dt,{material:t,structural:r,color:u?"#ffffff":n})},`${o.length}-${e}-${u?"col":"plain"}`),f&&o.map((b,F)=>{const B=f[F];if(!B||!B.above&&!B.below)return null;const v=x[F];return l.jsx(Xs,{center:p(b,F),dir:c?[0,1,0]:b.normal??[0,1,0],halfY:v,gapFactor:d,above:B.above,below:B.below},`lbl-${F}`)})]})}function a0({placements:o,markMaterial:e,markSize:t,color:i,scaleBoost:n,standOnAnchor:r,stack:s,labelGapFactor:a,instanceSizes:c,instanceColors:d,colorTint:A,markLabels:u,url:f}){const{scene:m}=wt(f),y=C.useContext(yo),{normScale:g,center:x,halfYUnit:h}=C.useMemo(()=>{m.updateMatrixWorld(!0);const w=new de().setFromObject(m),D=new U,M=new U;w.getSize(D),w.getCenter(M);const j=Math.max(D.x,D.y,D.z,.001),I=ie/j*El(f);return{normScale:I,center:M,halfYUnit:D.y*I/2}},[m,f]),p=C.useMemo(()=>o.map(()=>m.clone(!0)),[m,o]);C.useEffect(()=>()=>{p.forEach(w=>w.traverse(D=>{D instanceof je&&D.geometry.dispose()}))},[p]);const b=C.useMemo(()=>e!=="original"?qo(e,i,y):null,[e,i,y]);C.useEffect(()=>()=>{b==null||b.dispose()},[b]);const F=C.useMemo(()=>d&&!A?d.map(w=>qo(e==="original"?"plastic":e,w,y)):null,[d,A,e,y]);C.useEffect(()=>()=>{F==null||F.forEach(w=>w.dispose())},[F]);const B=C.useRef([]);C.useEffect(()=>(p.forEach((w,D)=>{w.traverse(M=>{if(!(M instanceof je))return;M.userData.__origMat||(M.userData.__origMat=M.material);const j=M.userData.__origMat;if(d&&A){const I=d[D%d.length],H=z=>{const k=Ul(z,I);return B.current.push(k),k};M.material=Array.isArray(j)?j.map(H):H(j)}else F?M.material=F[D%F.length]:b?M.material=b:M.material=j})}),()=>{B.current.forEach(w=>w.dispose()),B.current=[]}),[b,F,p,d,A]);const v=C.useMemo(()=>o.map((w,D)=>h*n*po(c,t,D).y),[o,h,n,c,t.y]),R=C.useMemo(()=>s?Zs(v):null,[s,v]),K=new ke,S=new U;return l.jsx(l.Fragment,{children:p.map((w,D)=>{const M=o[D],j=po(c,t,D),I=g*j.x*n,H=g*j.y*n,z=g*j.z*n,k=v[D],T=R?[M.pos[0],M.pos[1]+R[D],M.pos[2]]:Ys(M,k,r),E=-x.x*I,P=-x.y*H,G=-x.z*z;let J;M.normal&&!s&&(K.setFromUnitVectors(Js,S.set(...M.normal)),J=[K.x,K.y,K.z,K.w]);const W=u==null?void 0:u[D];return l.jsxs("group",{children:[J?l.jsx("group",{position:T,quaternion:J,children:l.jsx("primitive",{object:w,position:[E,P,G],scale:[I,H,z]})}):l.jsx("group",{position:T,rotation:M.rot??[0,0,0],children:l.jsx("primitive",{object:w,position:[E,P,G],scale:[I,H,z]})}),W&&(W.above||W.below)&&l.jsx(Xs,{center:T,dir:M.normal??[0,1,0],halfY:k,gapFactor:a,above:W.above,below:W.below})]},D)})})}const es=Math.PI/180;function Tl(o,e){const t=new ke().setFromEuler(new Vn(o.orientation.x*es,o.orientation.y*es,o.orientation.z*es));return new Y().compose(new U(o.offset.x-e.x,o.offset.y-e.y,o.offset.z-e.z),t,new U(o.size.x,o.size.y,o.size.z))}const Bs=new Map,vs=new Set;function jl(o,e){const t=Bs.get(o);t&&t.x===e.x&&t.y===e.y&&t.z===e.z||(Bs.set(o,e),vs.forEach(i=>i()))}function qs(){const[o,e]=C.useReducer(t=>t+1,0);return C.useEffect(()=>(vs.add(e),()=>{vs.delete(e)}),[]),o}function l0(o){const e=o.shape==="custom"&&o.customModelUrl?Bs.get(o.customModelUrl):void 0;if(e)return{x:e.x*o.size.x,y:e.y*o.size.y,z:e.z*o.size.z};const t=Dl(o.shape);return{x:t*o.size.x,y:t*o.size.y,z:t*o.size.z}}function _s(o){let e=1/0,t=1/0,i=1/0,n=-1/0,r=-1/0,s=-1/0;for(const a of o){const c=l0(a);e=Math.min(e,a.offset.x-c.x),n=Math.max(n,a.offset.x+c.x),t=Math.min(t,a.offset.y-c.y),r=Math.max(r,a.offset.y+c.y),i=Math.min(i,a.offset.z-c.z),s=Math.max(s,a.offset.z+c.z)}return isFinite(e)||(e=n=t=r=i=s=0),{center:{x:(e+n)/2,y:(t+r)/2,z:(i+s)/2},half:{x:Math.max(.001,(n-e)/2),y:Math.max(.001,(r-t)/2),z:Math.max(.001,(s-i)/2)}}}function c0({part:o,center:e,transforms:t,markMaterial:i,markColor:n,structural:r,instanceColors:s}){const a=C.useRef(null),c=C.useMemo(()=>ft(o.shape),[o.shape]);C.useEffect(()=>()=>{c.dispose()},[c]);const d=C.useMemo(()=>Tl(o,e),[o.offset.x,o.offset.y,o.offset.z,o.orientation.x,o.orientation.y,o.orientation.z,o.size.x,o.size.y,o.size.z,e.x,e.y,e.z]);return C.useEffect(()=>{const A=a.current;if(!A)return;const u=new Y,f=new ue;t.forEach((m,y)=>{u.multiplyMatrices(m.matrix,d),A.setMatrixAt(y,u),s&&A.setColorAt(y,f.set(s[y%s.length]))}),A.instanceMatrix.needsUpdate=!0,s&&A.instanceColor&&(A.instanceColor.needsUpdate=!0)},[t,d,s]),l.jsx("instancedMesh",{ref:a,args:[c,void 0,t.length],children:l.jsx(Dt,{material:o.material??i,structural:r,color:s?"#ffffff":o.color??n})},`${t.length}-${o.shape}-${s?"col":"plain"}`)}function u0({part:o,center:e,transforms:t,markMaterial:i,markColor:n,instanceColors:r,colorTint:s}){const a=o.customModelUrl,{scene:c}=wt(a),d=C.useContext(yo),A=o.material??i,u=o.color??n,{normScale:f,glbCenter:m,modelHalf:y}=C.useMemo(()=>{c.updateMatrixWorld(!0);const B=new de().setFromObject(c),v=new U,R=new U;B.getSize(v),B.getCenter(R);const K=Math.max(v.x,v.y,v.z,.001),S=ie/K*El(a);return{normScale:S,glbCenter:R,modelHalf:{x:v.x*S/2,y:v.y*S/2,z:v.z*S/2}}},[c,a]);C.useEffect(()=>{jl(a,y)},[a,y]);const g=C.useMemo(()=>Tl(o,e),[o.offset.x,o.offset.y,o.offset.z,o.orientation.x,o.orientation.y,o.orientation.z,o.size.x,o.size.y,o.size.z,e.x,e.y,e.z]),x=C.useMemo(()=>t.map(()=>c.clone(!0)),[c,t.length]);C.useEffect(()=>()=>{x.forEach(B=>B.traverse(v=>{v instanceof je&&v.geometry.dispose()}))},[x]);const h=C.useMemo(()=>A!=="original"?qo(A,u,d):null,[A,u,d]);C.useEffect(()=>()=>{h==null||h.dispose()},[h]);const p=C.useMemo(()=>r&&!s?r.map(B=>qo(A==="original"?"plastic":A,B,d)):null,[r,s,A,d]);C.useEffect(()=>()=>{p==null||p.forEach(B=>B.dispose())},[p]);const b=C.useRef([]);C.useEffect(()=>(x.forEach((B,v)=>B.traverse(R=>{if(!(R instanceof je))return;R.userData.__origMat||(R.userData.__origMat=R.material);const K=R.userData.__origMat;if(r&&s){const S=r[v%r.length],w=D=>{const M=Ul(D,S);return b.current.push(M),M};R.material=Array.isArray(K)?K.map(w):w(K)}else p?R.material=p[v%p.length]:h?R.material=h:R.material=K})),()=>{b.current.forEach(B=>B.dispose()),b.current=[]}),[x,h,p,r,s]);const F=C.useMemo(()=>new Y,[]);return l.jsx(l.Fragment,{children:x.map((B,v)=>{F.multiplyMatrices(t[v].matrix,g);const R=new U,K=new ke,S=new U;return F.decompose(R,K,S),l.jsx("group",{position:R,quaternion:K,scale:S,children:l.jsx("primitive",{object:B,position:[-m.x*f,-m.y*f,-m.z*f],scale:f})},v)})})}function d0({placements:o,parts:e,markMaterial:t,markSize:i,color:n,structural:r,scaleBoost:s,standOnAnchor:a,stack:c,labelGapFactor:d,instanceSizes:A,instanceColors:u,colorTint:f,markLabels:m}){const y=qs(),g=C.useMemo(()=>_s(e),[e,y]),x=C.useMemo(()=>{const h=g.half.y,p=o.map((v,R)=>h*s*po(A,i,R).y),b=c?Zs(p):null,F=new ke,B=new U;return o.map((v,R)=>{const K=po(A,i,R),S=b?[v.pos[0],v.pos[1]+b[R],v.pos[2]]:Ys(v,p[R],a);return v.normal&&!c?F.setFromUnitVectors(Js,B.set(...v.normal)):F.setFromEuler(new Vn(...v.rot??[0,0,0])),{matrix:new Y().compose(new U(...S),F,new U(K.x*s,K.y*s,K.z*s)),center:S,halfY:p[R],normal:v.normal}})},[o,g,s,a,c,A,i.x,i.y,i.z]);return l.jsxs(l.Fragment,{children:[e.map(h=>h.shape==="custom"&&h.customModelUrl?l.jsx(u0,{part:h,center:g.center,transforms:x,markMaterial:t,markColor:n,instanceColors:u,colorTint:f},h.id):l.jsx(c0,{part:h,center:g.center,transforms:x,markMaterial:t,markColor:n,structural:r,instanceColors:u},h.id)),m&&x.map((h,p)=>{const b=m[p];return!b||!b.above&&!b.below?null:l.jsx(Xs,{center:h.center,dir:c?[0,1,0]:h.normal??[0,1,0],halfY:h.halfY,gapFactor:d,above:b.above,below:b.below},`lbl-${p}`)})]})}function Il(o){const{markShape:e,customModelUrl:t,parts:i,scaleBoost:n=Nt,standOnAnchor:r=!1,stack:s=!1,labelGapFactor:a=0}=o,c={...o,scaleBoost:n,standOnAnchor:r,stack:s,labelGapFactor:a};return i&&i.length>0?l.jsx(C.Suspense,{fallback:null,children:l.jsx(d0,{...c,parts:i})}):e==="custom"&&t?l.jsx(C.Suspense,{fallback:null,children:l.jsx(a0,{...c,url:t})}):l.jsx(r0,{...c})}const f0={x:1,y:1,z:1},A0={deformation:"none",fluidDistort:.35,fluidSpeed:1.5},Pn="0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)",St=.47;function Ra(o,e,t,i){if(i==="sphere"){const n=(o+e+t)/3,r=Math.acos(2*Math.random()-1),s=2*Math.PI*Math.random(),a=n*Math.cbrt(Math.random());return[a*Math.sin(r)*Math.cos(s),a*Math.sin(r)*Math.sin(s),a*Math.cos(r)]}return[(Math.random()-.5)*2*o,(Math.random()-.5)*2*e,(Math.random()-.5)*2*t]}function kl(o,e){const t=o[0]-e.center[0],i=o[1]-e.center[1],n=o[2]-e.center[2];return e.kind==="sphere"?t*t+i*i+n*n<e.radius*e.radius:Math.abs(t)<e.half[0]&&Math.abs(i)<e.half[1]&&Math.abs(n)<e.half[2]}function Sa(o,e,t,i,n){let r=Ra(o,e,t,i);if(!n)return r;for(let s=0;s<80;s++){if(!kl(r,n))return r;r=Ra(o,e,t,i)}return r}function p0(o,e,t,i,n){const r=Math.cbrt(e*t*i),s=Math.ceil(Math.cbrt(o*2)),a=Math.max(1,Math.round(s*e/r)),c=Math.max(1,Math.round(s*t/r)),d=Math.max(1,Math.round(s*i/r)),A=2*e/a,u=2*t/c,f=2*i/d,m=(e+t+i)/3,y=m*m,g=[];for(let h=0;h<d;h++)for(let p=0;p<c;p++)for(let b=0;b<a;b++){if(n==="sphere"){const F=-e+(b+.5)*A,B=-t+(p+.5)*u,v=-i+(h+.5)*f;if(F*F+B*B+v*v>y)continue}g.push(b+p*a+h*a*c)}for(let h=g.length-1;h>0;h--){const p=Math.floor(Math.random()*(h+1));[g[h],g[p]]=[g[p],g[h]]}const x=[];for(let h=0;h<o;h++){const p=g[h%Math.max(1,g.length)],b=p%a,F=Math.floor(p/a)%c,B=Math.floor(p/(a*c)),v=-e+(b+.5)*A,R=-t+(F+.5)*u,K=-i+(B+.5)*f;let S=Math.max(-e,Math.min(e,v+(Math.random()-.5)*A*.7)),w=Math.max(-t,Math.min(t,R+(Math.random()-.5)*u*.7)),D=Math.max(-i,Math.min(i,K+(Math.random()-.5)*f*.7));if(n==="sphere"){const M=Math.sqrt(S*S+w*w+D*D);M>m&&(S=S*m/M*.97,w=w*m/M*.97,D=D*m/M*.97)}x.push([S,w,D])}return x}function Ma(o,e,t,i,n,r,s,a=!1){const c=e*St,d=t*St,A=i*St,u=a?p0(o,c,d,A,n):null,f=[];for(let m=0;m<o;m++){let y;u?(y=u[m],s&&kl(y,s)&&(y=Sa(c,d,A,n,s))):y=Sa(c,d,A,n,s);const g=r==="random"?[Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2]:[0,0,0];f.push({pos:y,rot:g})}return f}function ti(o,e){let t=0;for(let i=0;i<o.length;i++){const n=o[i].pos;for(let r=i+1;r<o.length;r++){const s=o[r].pos,a=n[0]-s[0],c=n[1]-s[1],d=n[2]-s[2],A=e[i]+e[r];a*a+c*c+d*d<A*A&&t++}}return t}const m0=100;function zl(o){const e=Math.max(1,o*o/2);return Math.max(8,Math.min(m0,Math.floor(2e6/e)))}function h0(o,e,t,i,n,r,s,a,c=!1){const d=zl(o);let A=Ma(o,e,t,i,n,r,a,c),u=ti(A,s);for(let f=1;f<d&&u>0;f++){const m=Ma(o,e,t,i,n,r,a,c),y=ti(m,s);y<u&&(A=m,u=y)}return A}function g0(o,e,t,i){const n=e*St,r=t*St,s=()=>Array.from({length:o},()=>({pos:[(Math.random()-.5)*2*n,0,(Math.random()-.5)*2*r],normal:[0,1,0]})),a=zl(o);let c=s(),d=ti(c,i);for(let A=1;A<a&&d>0;A++){const u=s(),f=ti(u,i);f<d&&(c=u,d=f)}return c}function x0(o,e){const t=Math.PI*2;return Array.from({length:o},()=>e?{pos:[0,0,0],rot:[0,Math.random()*t,0]}:{pos:[0,0,0]})}function y0({width:o,depth:e,height:t,color:i,position:n,particleCount:r,markShape:s,markMaterial:a,markSize:c=f0,structural:d=A0,customModelUrl:A,parts:u,labelShow:f,labelData:m,seed:y=0,boundingVolume:g="box",showBounds:x=!0,orientation:h="random",exclusionZone:p,evenDistribution:b=!1,adjacent:F=!1,showGrid:B=!1,stacking:v=!1,stackRandomOrient:R=!1,instanceSizes:K,instanceColors:S,colorTint:w,markLabels:D}){const M=Vs(C.useContext(Qs)),{fontSize:j,distance:I,bold:H,italic:z,color:k}=C.useContext(Ws),T=H?700:400,E=z?"italic":"normal",P=t/2+.8+I,G=o/2+.2+I,J=s==="custom"&&!!A,Q=J&&!(!!K||!!S)?Math.max(5,r):r,L=C.useMemo(()=>{if(v)return x0(Q,R);const oe=Array.from({length:Q},(se,X)=>{const fe=K?K[X%K.length]:c,nt=F?Math.max(fe.x,fe.z):Math.max(fe.x,fe.y,fe.z);return .5*ie*Nt*nt});return F?g0(Q,o,e,oe):h0(Q,o,t,e,g,h,oe,p,b)},[F,v,R,Q,o,t,e,y,g,h,p,b,K,c.x,c.y,c.z]),Z=C.useMemo(()=>{if(g==="sphere"){const X=(o+t+e)/3*St,fe=new Za(X,12,8),nt=new yr(fe);return fe.dispose(),nt}const oe=new Ms(o,t,e),se=new yr(oe);return oe.dispose(),se},[o,t,e,g]);return C.useEffect(()=>()=>{Z.dispose()},[Z]),l.jsxs("group",{position:n,children:[v?null:F?B&&l.jsx("gridHelper",{args:[2,12,"#777777","#4a4a4a"],scale:[o*St,1,e*St]}):x&&l.jsx("lineSegments",{geometry:Z,children:l.jsx("lineBasicMaterial",{color:"#666666",transparent:!0,opacity:.7})}),l.jsx(Il,{placements:L,markShape:s,markMaterial:a,markSize:c,color:i,structural:d,customModelUrl:J?A:void 0,parts:u,standOnAnchor:F,stack:v,instanceSizes:K,instanceColors:S,colorTint:w,markLabels:D}),f&&l.jsxs(l.Fragment,{children:[m.top&&l.jsxs(l.Fragment,{children:[l.jsx("group",{position:[0,P,0],userData:{isLabel:!0,labelText:m.top,labelPos:"top"}}),l.jsx(Ae,{position:[0,P,0],center:!0,occlude:M,style:{pointerEvents:"none"},children:l.jsx("span",{style:{fontSize:`${j}px`,fontWeight:T,fontStyle:E,color:k,fontFamily:"Courier New, monospace",textShadow:Pn,whiteSpace:"nowrap",userSelect:"none"},children:m.top})})]}),m.bottom&&l.jsxs(l.Fragment,{children:[l.jsx("group",{position:[0,-P,0],userData:{isLabel:!0,labelText:m.bottom,labelPos:"bottom"}}),l.jsx(Ae,{position:[0,-P,0],center:!0,occlude:M,style:{pointerEvents:"none"},children:l.jsx("span",{style:{fontSize:`${j}px`,fontWeight:T,fontStyle:E,color:k,fontFamily:"Courier New, monospace",textShadow:Pn,whiteSpace:"nowrap",userSelect:"none"},children:m.bottom})})]}),m.left&&l.jsxs(l.Fragment,{children:[l.jsx("group",{position:[-G,0,0],userData:{isLabel:!0,labelText:m.left,labelPos:"left"}}),l.jsx(Ae,{position:[-G,0,0],occlude:M,style:{pointerEvents:"none"},children:l.jsx("span",{style:{fontSize:`${j}px`,fontWeight:T,fontStyle:E,color:k,fontFamily:"Courier New, monospace",textShadow:Pn,whiteSpace:"nowrap",userSelect:"none",display:"block",textAlign:"right",transform:"translate(-100%, -50%)"},children:m.left})})]}),m.right&&l.jsxs(l.Fragment,{children:[l.jsx("group",{position:[G,0,0],userData:{isLabel:!0,labelText:m.right,labelPos:"right"}}),l.jsx(Ae,{position:[G,0,0],occlude:M,style:{pointerEvents:"none"},children:l.jsx("span",{style:{fontSize:`${j}px`,fontWeight:T,fontStyle:E,color:k,fontFamily:"Courier New, monospace",textShadow:Pn,whiteSpace:"nowrap",userSelect:"none",display:"block",transform:"translateY(-50%)"},children:m.right})})]})]})]})}const b0=14;function C0(o){return o.includes("drum")?.63:o.includes("clarinet")?1.2:o.includes("harp")?.825:1}function Pl(o,e,t){const i=Math.PI/180,n=b0,r=o.clone(!0);r.position.set(0,0,0),r.rotation.set(0,0,0),r.scale.set(1,1,1),r.updateMatrixWorld(!0);const s=new de().setFromObject(r);if(!s.isEmpty()){const A=new U;s.getSize(A);const u=Math.max(A.x,A.y,A.z,.001),f=ie/u*(e?C0(e):1),m=new U;s.getCenter(m),r.scale.setScalar(f),r.position.set(-m.x*f,-m.y*f,-m.z*f)}const a=new No;a.scale.set(n*t.size.x,n*t.size.y,n*t.size.z),a.add(r);const c=new No;c.position.set(t.position.x,t.position.y,t.position.z),c.rotation.set(t.orientation.x*i,t.orientation.y*i,t.orientation.z*i),c.add(a),c.updateMatrixWorld(!0);const d=[];return c.traverse(A=>{const u=A;if(!u.isMesh||!u.geometry)return;const f=u.geometry,m=new Xe;m.setAttribute("position",f.getAttribute("position").clone());const y=f.getAttribute("normal");y&&m.setAttribute("normal",y.clone()),f.index&&m.setIndex(f.index.clone()),m.applyMatrix4(u.matrixWorld);const g=m.toNonIndexed();g.getAttribute("normal")||g.computeVertexNormals(),d.push(g)}),d.length===0?null:d.length===1?d[0]:QA(d,!1)??d[0]}function F0(o,e){const t=new WA(new je(o)).build(),i=[],n=new U,r=new U;for(let s=0;s<e;s++)t.sample(n,r),r.lengthSq()<1e-8&&r.set(0,1,0),r.normalize(),i.push({pos:[n.x,n.y,n.z],normal:[r.x,r.y,r.z]});return i}function Hl({worldGeo:o,count:e,seed:t,markShape:i,markUrl:n,surfaceScale:r,...s}){const a=C.useMemo(()=>F0(o,Math.max(1,e)),[o,e,t]);return l.jsx(Il,{placements:a,markShape:i,customModelUrl:i==="custom"?n:void 0,scaleBoost:Nt*r,standOnAnchor:!0,labelGapFactor:.08,...s})}function B0(o){const{dec:e,url:t,...i}=o,{scene:n}=wt(t),r=C.useMemo(()=>Pl(n,t,e),[n,t,e.position.x,e.position.y,e.position.z,e.orientation.x,e.orientation.y,e.orientation.z,e.size.x,e.size.y,e.size.z]);return C.useEffect(()=>()=>{r==null||r.dispose()},[r]),r?l.jsx(Hl,{worldGeo:r,...i}):null}function v0(o){const{dec:e,...t}=o,i=C.useMemo(()=>{const n=ft(e.shape),r=Pl(new je(n),null,e);return n.dispose(),r},[e.shape,e.position.x,e.position.y,e.position.z,e.orientation.x,e.orientation.y,e.orientation.z,e.size.x,e.size.y,e.size.z]);return C.useEffect(()=>()=>{i==null||i.dispose()},[i]),i?l.jsx(Hl,{worldGeo:i,...t}):null}function R0({dec:o,...e}){return o.shape==="custom"&&o.customModelUrl?l.jsx(C.Suspense,{fallback:null,children:l.jsx(B0,{dec:o,url:o.customModelUrl,...e})}):l.jsx(v0,{dec:o,...e})}function S0(o,e){const t=new ue(e);switch(o){case"fluid":return new De({color:t,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5});case"metal":return new tt({color:t,roughness:.06,metalness:.95});case"emissive":return new tt({color:t,emissive:t,emissiveIntensity:2.2,roughness:.55});default:return new tt({color:t,roughness:.65,metalness:.05})}}function M0({url:o,markMaterial:e,markSize:t,color:i}){const{scene:n}=wt(o),{clone:r,sx:s,sy:a,sz:c,ox:d,oy:A,oz:u}=C.useMemo(()=>{n.updateMatrixWorld(!0);const m=new de().setFromObject(n),y=new U,g=new U;m.getSize(y),m.getCenter(g);const x=Math.max(y.x,y.y,y.z,.001),h=ie/x,p=h*t.x,b=h*t.y,F=h*t.z;return{clone:n.clone(!0),sx:p,sy:b,sz:F,ox:-g.x*p,oy:-g.y*b,oz:-g.z*F}},[n,t.x,t.y,t.z]),f=C.useMemo(()=>e!=="original"?S0(e,i):null,[e,i]);return C.useEffect(()=>()=>{f==null||f.dispose()},[f]),C.useEffect(()=>{f&&r.traverse(m=>{m instanceof je&&(m.material=f)})},[f,r]),l.jsx("primitive",{object:r,position:[d,A,u],scale:[s,a,c]})}function K0({position:o,count:e,markShape:t,markMaterial:i,markSize:n,color:r,structural:s,customModelUrl:a}){const c=C.useMemo(()=>ft(t),[t]);C.useEffect(()=>()=>{c.dispose()},[c]);const d=Math.sqrt(e)*ie*Math.max(n.x,n.y,n.z)*2.2,A=C.useMemo(()=>Array.from({length:e},(f,m)=>({x:(Math.random()-.5)*d,y:ie*2+m*ie*1.2+Math.random()*ie*.5,z:(Math.random()-.5)*d,rx:Math.random()*Math.PI*2,ry:Math.random()*Math.PI*2,rz:Math.random()*Math.PI*2})),[e,d]),u=-ie*.7;return l.jsxs("group",{position:o,children:[l.jsx(Xn,{type:"fixed",children:l.jsx(qa,{args:[3,.05,3],position:[0,u,0]})}),A.map((f,m)=>l.jsx(Xn,{position:[f.x,f.y,f.z],rotation:[f.rx,f.ry,f.rz],colliders:"hull",restitution:.1,friction:.8,linearDamping:.4,angularDamping:.5,children:t==="custom"&&a?l.jsx(C.Suspense,{fallback:null,children:l.jsx(M0,{url:a,markMaterial:i,markSize:n,color:r})}):l.jsx("mesh",{geometry:c,scale:[n.x,n.y,n.z],children:l.jsx(Dt,{material:i,structural:s,color:r})})},m))]})}const Ai=C.createContext({colorMode:"distinct",colorGradient:{from:"#EE6655",to:"#4488EE"},colorTint:!1}),bo=C.createContext({}),_o=(o,e)=>o[e]??1;function w0(o,e,t){return"#"+new ue(o).lerp(new ue(e),Math.max(0,Math.min(1,t))).getHexString()}function $s(o,e,t,i,n,r){var s,a;if(e.markColor===null)return i;if(n==="continuous"){const c=t.map(m=>m.percentage),d=Math.min(...c),A=Math.max(...c),u=((s=t[o%Math.max(1,t.length)])==null?void 0:s.percentage)??0,f=A>d?(u-d)/(A-d):.5;return w0(r.from,r.to,f)}return((a=t[o%Math.max(1,t.length)])==null?void 0:a.color)??i}function D0(o){return 2*Math.atan(12/o)*180/Math.PI}const Ol={1:[0,.5,18],2:[0,2,26],3:[0,4,64]};function E0({level:o,fov:e,focalLength:t}){const{camera:i,controls:n}=Le(),r=C.useRef(o),s=C.useRef(t);return C.useEffect(()=>{var a,c,d;if(i instanceof Ds){if(r.current!==o){const[A,u,f]=Ol[o];i.position.set(A,u,f),i.lookAt(0,0,0);const m=n;(a=m==null?void 0:m.target)==null||a.set(0,0,0),(c=m==null?void 0:m.update)==null||c.call(m),r.current=o}if(s.current!==t&&s.current>0){const A=t/s.current,u=n;u!=null&&u.spherical?(u.spherical.radius*=A,(d=u.update)==null||d.call(u)):i.position.multiplyScalar(A)}s.current=t,i.fov=e,i.updateProjectionMatrix()}},[i,n,o,e,t]),null}const mo=14,Rs=new Map,er=C.createContext({aspects:{},report:()=>{}}),Ka=o=>o.kind==="decoration"?`decoration:${o.id}`:o.kind==="markPart"?`markPart:${o.id}`:o.kind==="object"?`object:${o.owner}`:"mark",Gl=C.createContext({enabled:!1,isSelected:()=>!1,select:()=>{},commit:()=>{}}),at=Math.PI/180,U0=new U(1,1,1);function T0({onScale:o,onScaleEnd:e}){const t=Le(s=>s.controls),i=C.useRef(null),[n,r]=C.useState(!1);return Jt(({camera:s})=>{const a=i.current;if(!a||!a.parent)return;const c=new U;a.parent.getWorldPosition(c);const d=s.position.distanceTo(c),A=new U().setFromMatrixScale(a.parent.matrixWorld),u=(A.x+A.y+A.z)/3||1,f=a.parent.worldToLocal(s.position.clone()).normalize();a.position.copy(f.multiplyScalar(d*.16/u)),a.scale.setScalar(d*.0021/u)}),l.jsxs("mesh",{ref:i,renderOrder:1e3,onPointerOver:s=>{s.stopPropagation(),r(!0)},onPointerOut:()=>r(!1),onPointerDown:s=>{s.stopPropagation();const a=s.nativeEvent.clientY;t&&(t.enabled=!1);let c=1;const d=u=>{c=Math.max(.05,1+(a-u.clientY)/160),o(c)},A=()=>{window.removeEventListener("pointermove",d),window.removeEventListener("pointerup",A),t&&(t.enabled=!0),e(c)};window.addEventListener("pointermove",d),window.addEventListener("pointerup",A)},children:[l.jsx("sphereGeometry",{args:[1,20,20]}),l.jsx("meshBasicMaterial",{color:n?"#ffe066":"#ffcc33",depthTest:!1,transparent:!0,opacity:.95})]})}function tr({target:o,position:e,orientation:t,groupRef:i,children:n}){const r=C.useContext(Gl),s=!!o&&r.enabled,a=s&&r.isSelected(o),c=s?y=>{y.stopPropagation(),r.select(o)}:void 0,d=[t.x*at,t.y*at,t.z*at],A=C.useMemo(()=>{const y=new ke().setFromEuler(new Vn(d[0],d[1],d[2]));return new Y().compose(new U(e.x,e.y,e.z),y,U0)},[e.x,e.y,e.z,t.x,t.y,t.z]),u=C.useRef(new Y),f=C.useRef(null),m=y=>{const g=new U,x=new ke,h=new U;y.decompose(g,x,h);const p=new Vn().setFromQuaternion(x);return{pos:{x:g.x,y:g.y,z:g.z},orient:{x:p.x/at,y:p.y/at,z:p.z/at},scale:{x:h.x,y:h.y,z:h.z}}};return a?l.jsxs(Qh,{matrix:A,autoTransform:!0,fixed:!0,scale:95,lineWidth:2.5,disableSliders:!0,disableScaling:!0,depthTest:!1,onDragStart:()=>u.current.copy(A),onDrag:y=>u.current.copy(y),onDragEnd:()=>{const y=m(u.current);r.commit(o,y.pos,y.orient,y.scale)},children:[l.jsx("group",{ref:f,children:l.jsx("group",{ref:i,onClick:c,children:n})}),l.jsx(T0,{onScale:y=>{var g;(g=f.current)==null||g.scale.setScalar(y)},onScaleEnd:y=>{var x;(x=f.current)==null||x.scale.setScalar(1);const g=m(A);r.commit(o,g.pos,g.orient,{x:y,y,z:y})}})]}):l.jsx("group",{ref:i,position:[e.x,e.y,e.z],rotation:d,onClick:c,children:n})}function nn({url:o,material:e,color:t,sz:i,recolor:n=!1,tint:r=!1}){const{scene:s}=wt(o),a=C.useContext(yo),c=C.useMemo(()=>{const A=s.clone(!0);A.position.set(0,0,0),A.rotation.set(0,0,0),A.scale.set(1,1,1),A.updateMatrixWorld(!0);const u=o.includes("drum")?.63:o.includes("clarinet")?1.2:o.includes("harp")?.825:1,f=new de().setFromObject(A);if(!f.isEmpty()){const m=new U;f.getSize(m);const y=Math.max(m.x,m.y,m.z,.001);Rs.set(o,{x:m.x/y*u,y:m.y/y*u,z:m.z/y*u});const g=ie/y*u,x=new U;f.getCenter(x),A.scale.setScalar(g),A.position.set(-x.x*g,-x.y*g,-x.z*g)}if(e!=="original"){const m=qo(e,t,a);A.traverse(y=>{y instanceof je&&(y.material=m)})}else if(n){const m=new ue(t);A.traverse(y=>{if(y instanceof je)if(r){const g=x=>{const h=x.clone();return h.color&&(h.color=m),h};y.material=Array.isArray(y.material)?y.material.map(g):g(y.material)}else y.material=new tt({color:m,roughness:.65,metalness:.05})})}return A},[s,o,e,t,n,r,a]),{report:d}=C.useContext(er);return C.useEffect(()=>{const A=Rs.get(o);A&&(d(o,A),jl(o,{x:A.x*ie/2,y:A.y*ie/2,z:A.z*ie/2}))},[o,d,c]),l.jsx("group",{scale:i,children:l.jsx("primitive",{object:c})})}const wa=mo*ie;function j0(o,e){return o==="numerical"||o==="weight"||o==="count"?`${(e==null?void 0:e.percentage)??"?"}`:(e==null?void 0:e.name)??"?"}function ho(o,e,t){const i=e[t%Math.max(1,e.length)],n={};return["top","bottom","left","right"].forEach(r=>{const s=o[r];s.length&&(n[r]=s.map(a=>j0(a,i)).join(" · "))}),n}function I0(o,e,t){return Array.from({length:t},(i,n)=>{const r=ho(o,e,n),s=[r.top,r.left].filter(Boolean).join("  ·  "),a=[r.bottom,r.right].filter(Boolean).join("  ·  ");return{above:s||null,below:a||null}})}function k0(o,e,t){return Array.from({length:t},(i,n)=>{const r=ho(o,e,n),s=[r.top,r.left,r.right,r.bottom].filter(Boolean);return{above:s.length?s.join("  ·  "):null,below:null}})}const z0="0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)";function ct({pos:o,text:e,fontSize:t,bold:i,italic:n,color:r}){const s=o==="top"?"translate(-50%, -100%)":o==="bottom"?"translate(-50%, 0)":o==="left"?"translate(-100%, -50%)":"translateY(-50%)";return l.jsx("span",{"data-phys-label":"",style:{display:"block",fontSize:`${t}px`,fontWeight:i?700:400,fontStyle:n?"italic":"normal",color:r??"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:z0,whiteSpace:"nowrap",userSelect:"none",transform:s},children:e})}function P0({data:o,halfW:e,halfH:t}){const{fontSize:i,distance:n,bold:r,italic:s,color:a}=C.useContext(Ws),c=t+n,d=e+n,A=(u,f,m)=>l.jsxs(l.Fragment,{children:[l.jsx("group",{position:f,userData:{isLabel:!0,labelText:m,labelPos:u}}),l.jsx(Ae,{zIndexRange:[1,0],position:f,style:{pointerEvents:"none"},children:l.jsx(ct,{pos:u,text:m,fontSize:i,bold:r,italic:s,color:a})})]});return l.jsxs(l.Fragment,{children:[o.top&&A("top",[0,c,0],o.top),o.bottom&&A("bottom",[0,-c,0],o.bottom),o.left&&A("left",[-d,0,0],o.left),o.right&&A("right",[d,0,0],o.right)]})}function Ln(o){return o==="numerical"||o==="weight"||o==="count"}function H0(o,e,t){var r;const i=Math.max(...t.map(s=>s.percentage),1);return .2+1.8*((((r=t[e%Math.max(1,t.length)])==null?void 0:r.percentage)??i)/i)}function Ge(o,e,t,i,n){const r=t[o];return r?H0(r,e,i)*_o(n,o):1}function Nl(o,e,t){return o==="center"?[0,0,0]:e==="X"?[0,o==="start"?-t:t,0]:[o==="start"?t:-t,0,0]}function O0({part:o,markMaterial:e,markColor:t,structural:i}){const n=C.useMemo(()=>o.shape==="custom"?null:ft(o.shape),[o.shape]);return C.useEffect(()=>()=>{n==null||n.dispose()},[n]),l.jsx(tr,{target:{kind:"markPart",id:o.id},position:o.offset,orientation:o.orientation,children:o.shape==="custom"&&o.customModelUrl?l.jsx(C.Suspense,{fallback:null,children:l.jsx(nn,{url:o.customModelUrl,material:o.material??e,color:o.color??t,sz:[o.size.x,o.size.y,o.size.z]})}):l.jsx("mesh",{geometry:n,scale:[o.size.x,o.size.y,o.size.z],children:l.jsx(Dt,{material:o.material??e,structural:i,color:o.color??t})})})}function G0({part:o,markMaterial:e,markColor:t,structural:i}){const n=C.useMemo(()=>o.shape==="custom"?null:ft(o.shape),[o.shape]);C.useEffect(()=>()=>{n==null||n.dispose()},[n]);const r=[o.orientation.x*at,o.orientation.y*at,o.orientation.z*at];return l.jsx("group",{position:[o.offset.x,o.offset.y,o.offset.z],rotation:r,children:o.shape==="custom"&&o.customModelUrl?l.jsx(C.Suspense,{fallback:null,children:l.jsx(nn,{url:o.customModelUrl,material:o.material??e,color:o.color??t,sz:[o.size.x,o.size.y,o.size.z]})}):l.jsx("mesh",{geometry:n,scale:[o.size.x,o.size.y,o.size.z],children:l.jsx(Dt,{material:o.material??e,structural:i,color:o.color??t})})})}function N0({parts:o,scale:e,markMaterial:t,markColor:i,structural:n}){qs();const r=_s(o).center;return l.jsx("group",{scale:e,children:l.jsx("group",{position:[-r.x,-r.y,-r.z],children:o.map(s=>l.jsx(G0,{part:s,markMaterial:t,markColor:i,structural:n},s.id))})})}function L0({config:o,layers:e,bindings:t,markLabelConfig:i}){const n=C.useMemo(()=>ft(o.shape),[o.shape]);C.useEffect(()=>()=>{n.dispose()},[n]);const{colorMode:r,colorGradient:s,colorTint:a}=C.useContext(Ai),c=C.useContext(bo),{fontSize:d,distance:A,bold:u,italic:f,color:m}=C.useContext(fi),y=mo,g=$s(0,t,e,o.color,r,s),x=(o.scale??1)*Ge("markScale",0,t,e,c),h={x:o.size.x*x*Ge("markSizeX",0,t,e,c),y:o.size.y*x*Ge("markSizeY",0,t,e,c),z:o.size.z*x*Ge("markSizeZ",0,t,e,c)},p=y*h.y*.036+.8+A,b=y*h.x*.036+.8+A,F=ho(i.slots,e,0);qs();const B=o.parts&&o.parts.length>0?_s(o.parts).center:null;return l.jsxs(tr,{target:{kind:"mark"},position:o.position,orientation:o.orientation,children:[o.parts&&o.parts.length>0&&B?l.jsx("group",{scale:[y*h.x,y*h.y,y*h.z],children:l.jsx("group",{position:[-B.x,-B.y,-B.z],children:o.parts.map(v=>l.jsx(O0,{part:v,markMaterial:o.material,markColor:g,structural:o.structural},v.id))})}):o.shape==="custom"&&o.customModelUrl?l.jsx(C.Suspense,{fallback:null,children:l.jsx(nn,{url:o.customModelUrl,material:o.material,color:g,sz:[y*h.x,y*h.y,y*h.z],recolor:t.markColor!==null,tint:a})}):l.jsx("mesh",{geometry:n,scale:[y*h.x,y*h.y,y*h.z],children:l.jsx(Dt,{material:o.material,structural:o.structural,color:g})}),i.show&&l.jsxs(l.Fragment,{children:[F.top&&l.jsxs(l.Fragment,{children:[l.jsx("group",{position:[0,p,0],userData:{isLabel:!0,labelText:F.top,labelPos:"top"}}),l.jsx(Ae,{zIndexRange:[1,0],position:[0,p,0],style:{pointerEvents:"none"},children:l.jsx(ct,{pos:"top",text:F.top,fontSize:d,bold:u,italic:f,color:m})})]}),F.bottom&&l.jsxs(l.Fragment,{children:[l.jsx("group",{position:[0,-p,0],userData:{isLabel:!0,labelText:F.bottom,labelPos:"bottom"}}),l.jsx(Ae,{zIndexRange:[1,0],position:[0,-p,0],style:{pointerEvents:"none"},children:l.jsx(ct,{pos:"bottom",text:F.bottom,fontSize:d,bold:u,italic:f,color:m})})]}),F.left&&l.jsxs(l.Fragment,{children:[l.jsx("group",{position:[-b,0,0],userData:{isLabel:!0,labelText:F.left,labelPos:"left"}}),l.jsx(Ae,{zIndexRange:[1,0],position:[-b,0,0],style:{pointerEvents:"none"},children:l.jsx(ct,{pos:"left",text:F.left,fontSize:d,bold:u,italic:f,color:m})})]}),F.right&&l.jsxs(l.Fragment,{children:[l.jsx("group",{position:[b,0,0],userData:{isLabel:!0,labelText:F.right,labelPos:"right"}}),l.jsx(Ae,{zIndexRange:[1,0],position:[b,0,0],style:{pointerEvents:"none"},children:l.jsx(ct,{pos:"right",text:F.right,fontSize:d,bold:u,italic:f,color:m})})]})]})]})}function J0({shape:o,customModelUrl:e,material:t,structural:i,color:n,scale:r,recolor:s,tint:a}){const c=C.useMemo(()=>ft(o),[o]);return C.useEffect(()=>()=>{c.dispose()},[c]),o==="custom"&&e?l.jsx(C.Suspense,{fallback:null,children:l.jsx(nn,{url:e,material:t,color:n,sz:r,recolor:s,tint:a})}):l.jsx("mesh",{geometry:c,scale:r,children:l.jsx(Dt,{material:t,structural:i,color:n})})}function Q0({markConfig:o,collection1Config:e,color:t,layers:i,bindings:n,markLabelConfig:r}){const s=i.length||e.alignCount,{alignAxis:a,alignSpacing:c,alignAnchor:d}=e,A=mo,u=Math.PI/180,f=(s-1)/2,m=[o.orientation.x*u,o.orientation.y*u,o.orientation.z*u],{colorMode:y,colorGradient:g,colorTint:x}=C.useContext(Ai),h=C.useContext(bo),{fontSize:p,distance:b,bold:F,italic:B,color:v}=C.useContext(fi),R=n.markColor!==null;function K(D){return $s(D,n,i,t,y,g)}const S=o.scale??1;function w(D){const M=S*Ge("markScale",D,n,i,h),j={x:o.size.x*M*Ge("markSizeX",D,n,i,h),y:o.size.y*M*Ge("markSizeY",D,n,i,h),z:o.size.z*M*Ge("markSizeZ",D,n,i,h)};return[A*j.x,A*j.y,A*j.z]}return l.jsx("group",{children:Array.from({length:s},(D,M)=>{var se,X;const j=(M-f)*c,I=w(M),H=a==="X"?I[1]*.036:I[0]*.036,z=Nl(d,a,H),k=a==="X"?[j+z[0],z[1],z[2]]:[z[0],j+z[1],z[2]],T=I[1]*.036+.8+b,E=I[0]*.036+.8+b,P=ho(r.slots,i,M),G=(se=i[M%Math.max(1,i.length)])==null?void 0:se.name,J=(X=o.categoryShapes)==null?void 0:X[G??""],W=(J==null?void 0:J.shape)??o.shape,Q=J?J.customModelUrl:o.customModelUrl,L=J?J.customModelHasMat:o.customModelHasMat,Z=J!=null&&J.customModelHasMat?"original":o.material,oe=!!o.parts&&o.parts.length>0;return l.jsxs("group",{position:k,rotation:m,children:[oe?l.jsx(N0,{parts:o.parts,scale:I,markMaterial:o.material,markColor:K(M),structural:o.structural}):l.jsx(J0,{shape:W,customModelUrl:Q,customModelHasMat:L,material:Z,structural:o.structural,color:K(M),scale:I,recolor:R,tint:x}),r.show&&l.jsxs(l.Fragment,{children:[P.top&&l.jsxs(l.Fragment,{children:[l.jsx("group",{position:[0,T,0],userData:{isLabel:!0,labelText:P.top,labelPos:"top"}}),l.jsx(Ae,{zIndexRange:[1,0],position:[0,T,0],style:{pointerEvents:"none"},children:l.jsx(ct,{pos:"top",text:P.top,fontSize:p,bold:F,italic:B,color:v})})]}),P.bottom&&l.jsxs(l.Fragment,{children:[l.jsx("group",{position:[0,-T,0],userData:{isLabel:!0,labelText:P.bottom,labelPos:"bottom"}}),l.jsx(Ae,{zIndexRange:[1,0],position:[0,-T,0],style:{pointerEvents:"none"},children:l.jsx(ct,{pos:"bottom",text:P.bottom,fontSize:p,bold:F,italic:B,color:v})})]}),P.left&&l.jsxs(l.Fragment,{children:[l.jsx("group",{position:[-E,0,0],userData:{isLabel:!0,labelText:P.left,labelPos:"left"}}),l.jsx(Ae,{zIndexRange:[1,0],position:[-E,0,0],style:{pointerEvents:"none"},children:l.jsx(ct,{pos:"left",text:P.left,fontSize:p,bold:F,italic:B,color:v})})]}),P.right&&l.jsxs(l.Fragment,{children:[l.jsx("group",{position:[E,0,0],userData:{isLabel:!0,labelText:P.right,labelPos:"right"}}),l.jsx(Ae,{zIndexRange:[1,0],position:[E,0,0],style:{pointerEvents:"none"},children:l.jsx(ct,{pos:"right",text:P.right,fontSize:p,bold:F,italic:B,color:v})})]})]})]},M)})})}function Ll({markConfig:o,collection1Config:e,color:t,position:i,layers:n,bindings:r,heightOverride:s,markLabelConfig:a,colLabelConfig:c,layerIndex:d,scatterSeed:A,objectHandle:u,singleCollection:f=!1}){const{colorMode:m,colorGradient:y,colorTint:g}=C.useContext(Ai),{aspects:x}=C.useContext(er),h=C.useContext(bo),p=o.scale??1,b={x:o.size.x*p,y:o.size.y*p,z:o.size.z*p},F=e.arrangement==="scattering"||e.arrangement==="surface"||e.arrangement==="adjacent"||e.arrangement==="stacking",B=F&&(r.markScale!==null||r.markSizeX!==null||r.markSizeY!==null||r.markSizeZ!==null),v=F&&r.markColor!==null,R=B||v,K=C.useMemo(()=>{if(B)return n.map((T,E)=>{const P=Ge("markScale",E,r,n,h);return{x:b.x*P*Ge("markSizeX",E,r,n,h),y:b.y*P*Ge("markSizeY",E,r,n,h),z:b.z*P*Ge("markSizeZ",E,r,n,h)}})},[B,n,h,r.markScale,r.markSizeX,r.markSizeY,r.markSizeZ,b.x,b.y,b.z]),S=C.useMemo(()=>{if(v)return n.map((T,E)=>$s(E,r,n,t,m,y))},[v,n,r,t,m,y]),w=e.object??null,D=C.useMemo(()=>{const T=w;if(!T||!e.scatterExcludeObject)return;const E=mo*ie,P=K?K.reduce((Q,L)=>Math.max(Q,L.x,L.y,L.z),0):Math.max(b.x,b.y,b.z),G=ie*Nt/2*P,J=[T.position.x,T.position.y,T.position.z];if(T.shape==="sphere"){const Q=E*.52*Math.max(T.size.x,T.size.y,T.size.z)*1.05+G;return{kind:"sphere",center:J,radius:Q}}const W=T.shape==="custom"&&T.customModelUrl?x[T.customModelUrl]??Rs.get(T.customModelUrl)??{x:1,y:1,z:1}:{x:1,y:1,z:1};return{kind:"box",center:J,half:[E/2*T.size.x*W.x*1.05+G,E/2*T.size.y*W.y*1.05+G,E/2*T.size.z*W.z*1.05+G]}},[w,e.scatterExcludeObject,b.x,b.y,b.z,K,x]),M=w?l.jsx("group",{position:i,children:l.jsx(or,{config:w,handleTarget:u})}):null,j=(()=>{var Co,Qt;if(e.arrangement==="alignment")return l.jsx("group",{position:i,children:l.jsx(Q0,{markConfig:o,collection1Config:e,color:t,layers:n,bindings:r,markLabelConfig:a})});if(e.arrangement==="piling")return l.jsx(K0,{position:i,count:e.pilingCount,markShape:o.shape,markMaterial:o.material,markSize:b,color:t,structural:o.structural,customModelUrl:o.shape==="custom"?o.customModelUrl:void 0},e.pilingCount);if(e.arrangement==="surface"){const Fo=w;if(!Fo)return null;const ze=r.scatterCount!==null?Math.max(1,Math.round((((Co=n[d%Math.max(1,n.length)])==null?void 0:Co.percentage)??e.surfaceCount??24)*_o(h,"scatterCount"))):R?n.length:e.surfaceCount??24,Bo=a.show?k0(a.slots,n,ze):void 0;return l.jsx("group",{position:i,children:l.jsx(R0,{dec:Fo,markShape:o.shape,markMaterial:o.material,markSize:b,color:t,count:ze,surfaceScale:e.surfaceScale??1,seed:A,structural:o.structural,markUrl:o.shape==="custom"?o.customModelUrl:void 0,parts:o.parts,instanceSizes:K,instanceColors:S,colorTint:g,markLabels:Bo})})}const T=e.arrangement==="adjacent",E=e.arrangement==="stacking",P=T||E,{scatterDimensions:G,scatterCount:J,scatterDensity:W,scatterMode:Q}=e,L=e.scatterSizeAxes??{x:!1,y:!0,z:!1},Z=s!=null&&L.x?s:G.x,oe=s!=null&&L.y?s:G.y,se=s!=null&&L.z?s:G.z,X=r.scatterCount!==null?Math.max(1,Math.round((((Qt=n[d%Math.max(1,n.length)])==null?void 0:Qt.percentage)??J)*_o(h,"scatterCount"))):null,fe=X!==null?X:R||E&&f?Math.max(1,n.length):(Q??"count")==="density"&&!P?Math.max(5,Math.round(W*Z*oe*se)):J,nt=ho(c.slots,n,d),Et=a.show?I0(a.slots,n,fe):void 0;return l.jsx(y0,{width:Z,depth:se,height:oe,color:t,position:i,particleCount:fe,markShape:o.shape,markMaterial:o.material,markSize:b,structural:o.structural,customModelUrl:o.shape==="custom"?o.customModelUrl:void 0,parts:o.parts,labelShow:c.show,labelData:nt,seed:A,boundingVolume:e.scatterBoundingVolume??"box",showBounds:e.scatterShowBounds??!0,orientation:P?"static":e.scatterOrientation??"random",exclusionZone:P?void 0:D,evenDistribution:e.scatterEven??!1,adjacent:T,showGrid:e.adjacentShowGrid??!1,stacking:E,stackRandomOrient:e.stackingRandomOrient??!1,instanceSizes:K,instanceColors:S,colorTint:g,markLabels:Et})})(),I=e.arrangement,H=ho(c.slots,n,d),k=c.show&&(H.top||H.bottom||H.left||H.right)&&I!=="scattering"?(()=>{const T=mo*ie,E=ie*Nt;let P=1.5,G=1.5;if(I==="surface"){const J=w,W=e.surfaceScale??1;P=(J?T*J.size.y*.5:.5)+E*W+.7,G=(J?T*J.size.x*.5:.5)+E*W+.5}else if(I==="adjacent")P=E*b.y+.8,G=e.scatterDimensions.x*.5+.5;else if(I==="stacking")P=E*b.y*Math.max(1,n.length)+.7,G=E*b.x+.5;else if(I==="piling")P=E*b.y*3+.7,G=E*b.x*2+.5;else if(I==="alignment"){const J=n.length||e.alignCount,W=e.alignAxis==="X"?(J-1)*e.alignSpacing+T*b.x:T*b.x;P=(e.alignAxis==="Y"?(J-1)*e.alignSpacing+T*b.y:T*b.y)*.5+.9,G=W*.5+.5}return l.jsx("group",{position:i,children:l.jsx(P0,{data:H,halfW:G,halfH:P})})})():null;return l.jsxs(l.Fragment,{children:[j,M,k]})}const Jn=8;function W0({markConfig:o,collection1Config:e,layers:t,bindings:i,markLabelConfig:n,colLabelConfig:r,scatterSeed:s}){var u;const a=o.color??e.color,c=C.useContext(bo),d=Math.max(...t.map(f=>f.percentage),1),A=Ln(i.scatterSize)&&e.arrangement==="scattering"?Math.max(.5,(((u=t[0])==null?void 0:u.percentage)??50)/d*Jn*_o(c,"scatterSize")):void 0;return l.jsx(Ll,{markConfig:o,collection1Config:e,color:a,position:[0,0,0],layers:t,bindings:i,heightOverride:A,markLabelConfig:n,colLabelConfig:r,layerIndex:0,scatterSeed:s,objectHandle:{kind:"object",owner:"col1"},singleCollection:!0})}function V0({markConfig:o,collection1Config:e,collection2Config:t,layers:i,bindings:n,markLabelConfig:r,colLabelConfig:s,scatterSeed:a}){const{arrangement:c,alignCount:d,alignAxis:A,alignSpacing:u,alignAnchor:f,scatterCount:m,scatterDimensions:y,color:g}=t,x=C.useContext(bo),h=_o(x,"scatterSize"),p=i.length||d,b=C.useMemo(()=>{if(c==="alignment"){const B=Array.from({length:p},(k,T)=>{const E=i[T%Math.max(1,i.length)];return{color:(E==null?void 0:E.color)??g,name:(E==null?void 0:E.name)??`Group ${T+1}`,pct:(E==null?void 0:E.percentage)??0}}),v=Math.max(...i.map(k=>k.percentage),1),R=e,K=o.scale??1,S=ie*Nt*o.size.x*K,w=ie*Nt*o.size.y*K,D=o.size.x*K*wa,M=o.size.y*K*wa,j=B.map(k=>{if(R.arrangement==="scattering"){const T=R.scatterDimensions;return A==="X"?T.x:Ln(n.scatterSize)?Math.max(.5,k.pct/v*Jn*h):T.y}return R.arrangement==="alignment"?A==="X"?R.alignAxis==="X"?(R.alignCount-1)*R.alignSpacing+D:D:R.alignAxis==="Y"?(R.alignCount-1)*R.alignSpacing+M:M:R.arrangement==="adjacent"?A==="X"?R.scatterDimensions.x:w:A==="X"?S:w}),I=B.map(k=>{if(R.arrangement==="scattering"){const T=R.scatterDimensions;return A==="X"?Ln(n.scatterSize)?Math.max(.5,k.pct/v*Jn*h):T.y:T.x}return R.arrangement==="alignment"?A==="X"?R.alignAxis==="Y"?(R.alignCount-1)*R.alignSpacing+M:M:R.alignAxis==="X"?(R.alignCount-1)*R.alignSpacing+D:D:R.arrangement==="adjacent"?A==="X"?w:R.scatterDimensions.x:A==="X"?w:S});let z=-(j.reduce((k,T)=>k+T,0)+(p-1)*u)/2;return B.map((k,T)=>{const E=j[T],P=I[T],G=z+E/2;z+=E+u;const J=Nl(f,A,P/2),W=A==="X"?[G+J[0],J[1],J[2]]:[J[0],G+J[1],J[2]];return{...k,position:W,perpExt:P}})}return Array.from({length:m},(B,v)=>{const R=i[v%Math.max(1,i.length)];return{position:[(Math.random()-.5)*y.x*.8,(Math.random()-.5)*y.y*.8,(Math.random()-.5)*y.z*.8],color:(R==null?void 0:R.color)??g,name:(R==null?void 0:R.name)??`Group ${v+1}`,pct:(R==null?void 0:R.percentage)??0,perpExt:0}})},[c,p,A,u,f,m,y.x,y.y,y.z,i,g,n.scatterSize,h,e.arrangement,e.alignAxis,e.alignCount,e.alignSpacing,e.scatterDimensions.x,e.scatterDimensions.y,o.size.x,o.size.y,o.scale,a]),F=Math.max(...i.map(B=>B.percentage),1);return l.jsxs("group",{children:[b.map(({position:B,color:v,name:R,pct:K},S)=>{var j;const w=Ln(n.scatterSize)&&e.arrangement==="scattering"?Math.max(.5,K/F*Jn*h):void 0,D=(j=o.categoryShapes)==null?void 0:j[R],M=D?{...o,shape:D.shape,customModelUrl:D.customModelUrl,customModelHasMat:D.customModelHasMat,customModelName:D.customModelName,material:D.customModelHasMat?"original":o.material}:o;return l.jsx(Ll,{markConfig:M,collection1Config:e,color:v,position:B,layers:i,bindings:n,heightOverride:w,markLabelConfig:r,colLabelConfig:s,layerIndex:S%Math.max(1,i.length),scatterSeed:a},S)}),t.object&&l.jsx(or,{config:t.object,handleTarget:{kind:"object",owner:"col2"}})]})}function or({config:o,onRegister:e,onUnregister:t,handleTarget:i}){const n=C.useMemo(()=>ft(o.shape),[o.shape]);C.useEffect(()=>()=>{n.dispose()},[n]);const r=C.useRef(null),s=C.useCallback(d=>{r.current=d,d?e==null||e(o.id,d):t==null||t(o.id)},[o.id,e,t]),a=mo,c=C.useMemo(()=>Kl(o),[o.opacity,o.roughness,o.metalness]);return l.jsx(yo.Provider,{value:c,children:l.jsx(tr,{target:i,position:o.position,orientation:o.orientation,groupRef:s,children:o.shape==="custom"&&o.customModelUrl?l.jsx(C.Suspense,{fallback:null,children:l.jsx(nn,{url:o.customModelUrl,material:o.material,color:o.color,sz:[a*o.size.x,a*o.size.y,a*o.size.z]})}):l.jsx("mesh",{geometry:n,scale:[a*o.size.x,a*o.size.y,a*o.size.z],children:l.jsx(Dt,{material:o.material,structural:o.structural,color:o.color})})})})}function X0({onSamplesUpdate:o,downloadRenderRef:e}){const{gl:t,scene:i,camera:n}=Le(),r=C.useRef(o);return r.current=o,C.useEffect(()=>{let s=!1,a=null,c=null,d=null;async function A(){if(await new Promise(b=>setTimeout(b,0)),s)return;const u=new i0;c=new _h(t),c.setSize(t.domElement.width,t.domElement.height),c.camera=n,c.material=u,i.updateMatrixWorld(!0);const f=new ng(i),{bvh:m,textures:y,materials:g,lights:x}=f.generate();if(s){c.dispose();return}const{geometry:h}=f;if(u.bvh.updateFrom(m),u.attributesArray.updateFrom(h.attributes.normal,h.attributes.tangent,h.attributes.uv,h.attributes.color),u.materialIndexAttribute.updateFrom(h.attributes.materialIndex),u.textures.setTextures(t,2048,2048,y),u.materials.updateFrom(g,y),u.lights.updateFrom(x),i.environment)try{u.envMapInfo.updateFrom(i.environment)}catch{}u.uniforms.backgroundAlpha.value=0,d=new Ao(new lt({map:c.target.texture})),e.current=()=>{const b=c.samples;t.domElement.toBlob(async F=>{if(!F)return;const B=document.createElement("canvas");B.width=t.domElement.width,B.height=t.domElement.height;const v=B.getContext("2d"),R=await createImageBitmap(F);v.drawImage(R,0,0),i.updateMatrixWorld();const K=[];if(i.traverse(S=>{if(S.userData.isLabel){const w=new U;S.getWorldPosition(w),K.push({worldPos:w,text:S.userData.labelText,pos:S.userData.labelPos??"top"})}}),K.length>0){const S=window.devicePixelRatio||1,w=Math.round(12*S);v.save(),v.font=`${w}px 'Courier New', monospace`,v.shadowColor="rgba(0,0,0,1)",v.shadowBlur=6*S,v.shadowOffsetX=0,v.shadowOffsetY=S,v.fillStyle="#e0e0e0";for(const{worldPos:D,text:M,pos:j}of K){const I=D.clone().project(n);if(I.z>1)continue;const H=(I.x*.5+.5)*B.width,z=(I.y*-.5+.5)*B.height;j==="top"?(v.textAlign="center",v.textBaseline="bottom"):j==="bottom"?(v.textAlign="center",v.textBaseline="top"):j==="left"?(v.textAlign="right",v.textBaseline="middle"):(v.textAlign="left",v.textBaseline="middle"),v.fillText(M,H,z)}v.restore()}B.toBlob(S=>{if(!S)return;const w=URL.createObjectURL(S),D=document.createElement("a");D.download=`render_${b}spp.png`,D.href=w,D.click(),URL.revokeObjectURL(w)},"image/png")},"image/png")},n.updateMatrixWorld();function p(){s||!c||!d||(n.updateMatrixWorld(),c.update(),d.material.map=c.target.texture,t.setRenderTarget(null),d.render(t),r.current(c.samples),a=requestAnimationFrame(p))}a=requestAnimationFrame(p)}return A().catch(console.error),()=>{s=!0,a!==null&&cancelAnimationFrame(a),c==null||c.dispose(),d==null||d.dispose(),e.current=null}},[t,i,n,e]),null}function Y0(o,e){const t=o*Math.PI/180,i=e*Math.PI/180,n=100;return[n*Math.cos(t)*Math.sin(i),n*Math.sin(t),n*Math.cos(t)*Math.cos(i)]}function Z0({top:o,bottom:e}){const t=Le(n=>n.scene),i=C.useMemo(()=>{const n=document.createElement("canvas");n.width=2,n.height=512;const r=n.getContext("2d"),s=r.createLinearGradient(0,0,0,512);s.addColorStop(0,o),s.addColorStop(1,e),r.fillStyle=s,r.fillRect(0,0,2,512);const a=new VA(n);return a.colorSpace=XA,a},[o,e]);return C.useEffect(()=>{const n=t.background;return t.background=i,()=>{t.background===i&&(t.background=n),i.dispose()}},[t,i]),null}function q0({value:o}){const e=Le(t=>t.gl);return C.useEffect(()=>{e.toneMappingExposure=o},[e,o]),null}function Jl(o){return o.exposure!=null?o.exposure:o.background==="ocean"?.95:o.background==="dark"?1.35:1.2}function _0({config:o}){const e=o.background,t=e==="ocean",n=[0,(o.envRotation??0)*Math.PI/180,0];return l.jsxs(l.Fragment,{children:[e==="dark"&&l.jsx("color",{attach:"background",args:["#050505"]}),e==="ocean"&&l.jsx("color",{attach:"background",args:["#7ab8d4"]}),e==="color"&&l.jsx("color",{attach:"background",args:[o.bgColor??"#202024"]}),e==="gradient"&&l.jsx(Z0,{top:o.bgGradientTop??"#3a5f8a",bottom:o.bgGradientBottom??"#0a0a12"}),l.jsx(Ts,{preset:o.hdriPreset,background:e==="hdri",backgroundBlurriness:o.hdriBlur??0,backgroundIntensity:o.hdriIntensity??1,environmentRotation:n,backgroundRotation:n}),l.jsx(q0,{value:Jl(o)}),e==="sky"&&l.jsx(Zr,{distance:45e4,sunPosition:Y0(o.skyElevation??20,o.skyAzimuth??140),turbidity:8,rayleigh:2,mieCoefficient:.005,mieDirectionalG:.8}),t&&l.jsxs(l.Fragment,{children:[l.jsx(Zr,{distance:45e4,sunPosition:[5,1.2,8],turbidity:9,rayleigh:3,mieCoefficient:.005,mieDirectionalG:.7}),l.jsx("fog",{attach:"fog",args:["#a8d4ea",25,140]}),l.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-7.2,0],children:[l.jsx("planeGeometry",{args:[400,400,1,1]}),l.jsx("meshPhysicalMaterial",{color:"#0c3a58",roughness:.06,metalness:.65,reflectivity:.9})]})]}),o.stars&&l.jsx(kh,{radius:120,depth:50,count:4e3,factor:4,saturation:0,fade:!0,speed:.4}),o.fog&&!t&&l.jsx("fog",{attach:"fog",args:[o.fogColor??"#8090a0",o.fogNear??20,o.fogFar??150]}),o.grid&&l.jsx(bm,{position:[0,0,0],args:[60,60],infiniteGrid:!0,cellSize:1,cellThickness:.6,cellColor:"#6b6b6b",sectionSize:5,sectionThickness:1,sectionColor:"#9a9a9a",fadeDistance:70,fadeStrength:1}),l.jsx("ambientLight",{intensity:t?.5:.18}),l.jsx("directionalLight",{position:[8,18,6],intensity:t?1.4:1.8,color:t?"#fff8e0":"#fffaf0"}),l.jsx("directionalLight",{position:[-6,4,-8],intensity:t?.6:.4,color:t?"#c0e8ff":"#c0ccff"})]})}function $0({level:o,markConfig:e,collection1Config:t,collection2Config:i,sceneConfig:n,layers:r,bindings:s,bindingScale:a,markLabelConfig:c,colLabelConfig:d,decorations:A,colorMode:u,colorGradient:f,colorTint:m,scatterSeed:y,datasetTitle:g,onSelectElement:x,onSelectDecoration:h,onSelectPart:p,onMarkChange:b,onDecorationChange:F,onCollection1Change:B,onCollection2Change:v,pathTracingActive:R,onSamplesUpdate:K,downloadRenderRef:S}){const w=D0(n.focalLength),D=Ol[o];n.background;const[M,j]=C.useState({}),I=C.useCallback((Q,L)=>{j(Z=>{const oe=Z[Q];return oe&&oe.x===L.x&&oe.y===L.y&&oe.z===L.z?Z:{...Z,[Q]:L}})},[]),[H,z]=C.useState({}),k=C.useCallback((Q,L)=>{z(Z=>Z[Q]===L?Z:{...Z,[Q]:L})},[]),T=C.useCallback(Q=>{z(L=>{const Z={...L};return delete Z[Q],Z})},[]),E=C.useMemo(()=>({mode:n.sceneLabelOcclude??"optimized",occluders:Object.values(H).map(Q=>({current:Q}))}),[n.sceneLabelOcclude,H]),[P,G]=C.useState(null);C.useEffect(()=>{G(null)},[o]);const J=C.useMemo(()=>({enabled:!R,isSelected:Q=>Ka(Q)===P,select:Q=>{G(Ka(Q)),Q.kind==="decoration"?h(Q.id):Q.kind==="markPart"?p==null||p(Q.id):Q.kind==="mark"?x("mark"):x(Q.owner==="col1"?"collection1":"collection2")},commit:(Q,L,Z,oe)=>{const se=X=>({x:X.x*oe.x,y:X.y*oe.y,z:X.z*oe.z});if(Q.kind==="mark")b({...e,position:L,orientation:Z,size:se(e.size)});else if(Q.kind==="markPart"){const X=e.parts??[];b({...e,parts:X.map(fe=>fe.id===Q.id?{...fe,offset:L,orientation:Z,size:se(fe.size)}:fe)})}else if(Q.kind==="decoration"){const X=A.find(fe=>fe.id===Q.id);X&&F({...X,position:L,orientation:Z,size:se(X.size)})}else Q.owner==="col1"&&t.object?B({...t,object:{...t.object,position:L,orientation:Z,size:se(t.object.size)}}):Q.owner==="col2"&&i.object&&v({...i,object:{...i.object,position:L,orientation:Z,size:se(i.object.size)}})}}),[R,P,e,A,t,i,x,h,p,b,F,B,v]),W=C.useMemo(()=>Kl(e),[e.opacity,e.roughness,e.metalness]);return l.jsxs(si,{camera:{position:D,fov:w,near:.1,far:500},style:{width:"100%",height:"100%"},onPointerMissed:()=>G(null),frameloop:R?"never":"always",gl:{antialias:!0,toneMapping:Us,toneMappingExposure:Jl(n),preserveDrawingBuffer:!0},children:[l.jsx(E0,{level:o,fov:w,focalLength:n.focalLength}),l.jsx(_0,{config:n}),l.jsx(er.Provider,{value:{aspects:M,report:I},children:l.jsx(Ai.Provider,{value:{colorMode:u,colorGradient:f,colorTint:m},children:l.jsx(Qs.Provider,{value:E,children:l.jsx(fi.Provider,{value:{fontSize:c.fontSize??11,distance:c.distance??0,bold:c.bold??!1,italic:c.italic??!1,color:c.color??"#e8e8e8"},children:l.jsx(Ws.Provider,{value:{fontSize:d.fontSize??11,distance:d.distance??0,bold:d.bold??!1,italic:d.italic??!1,color:d.color??"#e8e8e8"},children:l.jsx(_a,{gravity:[0,-9.81,0],timeStep:"vary",children:l.jsxs(Gl.Provider,{value:J,children:[l.jsx(yo.Provider,{value:W,children:l.jsxs(bo.Provider,{value:a,children:[o===1&&l.jsx(L0,{config:e,layers:r,bindings:s,markLabelConfig:c}),o===2&&l.jsx(W0,{markConfig:e,collection1Config:t,layers:r,bindings:s,markLabelConfig:c,colLabelConfig:d,scatterSeed:y}),o===3&&l.jsx(V0,{markConfig:e,collection1Config:t,collection2Config:i,layers:r,bindings:s,markLabelConfig:c,colLabelConfig:d,scatterSeed:y})]})}),A.map(Q=>l.jsx(or,{config:Q,onRegister:k,onUnregister:T,handleTarget:{kind:"decoration",id:Q.id}},Q.id)),g&&(n.sceneTitleShow??!1)&&l.jsx(Ae,{zIndexRange:[1,0],position:[0,(n.sceneTitleBelow?-1:1)*(n.sceneTitleOffset??2.5),0],center:!0,occlude:Vs(E),style:{pointerEvents:"none",whiteSpace:"nowrap"},children:l.jsx("span",{style:{fontSize:"16px",fontWeight:"600",color:"#ffffff"},children:g})})]})})})})})})}),l.jsx(ri,{makeDefault:!0,dampingFactor:.08,minDistance:1,maxDistance:400,target:[0,0,0]}),R&&K&&S&&l.jsx(X0,{onSamplesUpdate:K,downloadRenderRef:S})]})}const Ql=1,Wl="scene",Vl={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:0,y:0,z:0},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},Xl={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},Yl={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Zl={background:"dark",hdriPreset:"city",focalLength:130,sceneTitleShow:!1},ql={markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null},_l={show:!1,slots:{top:[],bottom:[],left:[],right:[]}},$l={show:!1,slots:{top:[],bottom:[],left:[],right:[]}},ec=[{id:"dec_1785240706704",shape:"custom",material:"original",color:"#888888",position:{x:2.8035369620307464,y:-.3586983957822668,z:0},size:{x:2.3,y:2.3,z:2.3},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/airplane.glb",customModelHasMat:!0,customModelName:"airplane"},{id:"dec_1785240707456",shape:"custom",material:"original",color:"#888888",position:{x:1.3496490893090274,y:1.2625819359473542,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/barrel.glb",customModelHasMat:!0,customModelName:"barrel"},{id:"dec_1785240708049",shape:"custom",material:"original",color:"#888888",position:{x:0,y:-.0850471406610076,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/building.glb",customModelHasMat:!0,customModelName:"building"},{id:"dec_1785240709849",shape:"custom",material:"original",color:"#888888",position:{x:1.4006800195240812,y:-1.5,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/car.glb",customModelHasMat:!0,customModelName:"car"},{id:"dec_1785240712712",shape:"custom",material:"original",color:"#888888",position:{x:2.9913702220676273,y:-1.5,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/cloud.glb",customModelHasMat:!0,customModelName:"cloud"},{id:"dec_1785240713320",shape:"custom",material:"original",color:"#888888",position:{x:-1.467947805690725,y:-1.5,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/colba5_chemistry.glb",customModelHasMat:!0,customModelName:"colba5_chemistry"},{id:"dec_1785240714472",shape:"custom",material:"original",color:"#888888",position:{x:-1.3509122404206049,y:-.10693087303762083,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:60,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/dioxyde_de_carbone_d.glb",customModelHasMat:!0,customModelName:"dioxyde_de_carbone_d"},{id:"dec_1785240715376",shape:"custom",material:"original",color:"#888888",position:{x:0,y:1.207012573107595,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},name:"Decoration 9",customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/earth.glb",customModelHasMat:!0,customModelName:"earth"},{id:"dec_1785240716984",shape:"custom",material:"original",color:"#888888",position:{x:0,y:-1.349798284618449,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/factory.glb",customModelHasMat:!0,customModelName:"factory"},{id:"dec_1785240749865",shape:"custom",material:"original",color:"#888888",position:{x:-1.3187062297769987,y:1.250564983649693,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/flowers.glb",customModelHasMat:!0,customModelName:"flowers"},{id:"dec_1785240753712",shape:"custom",material:"original",color:"#888888",position:{x:1.3564883835683643,y:-.12486317236137345,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/hourglass.glb",customModelHasMat:!0,customModelName:"hourglass"},{id:"dec_1785240757400",shape:"custom",material:"original",color:"#888888",position:{x:2.902917723291602,y:1.2792547342509355,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/pine_tree.glb",customModelHasMat:!0,customModelName:"pine_tree"}],tc=[{id:"1",name:"Germany",percentage:572.32,color:"#E63946"},{id:"2",name:"Canada",percentage:533.34,color:"#F4A261"},{id:"3",name:"Turkey",percentage:513.03,color:"#E9C46A"},{id:"4",name:"Brazil",percentage:483.01,color:"#2A9D8F"},{id:"5",name:"South Africa",percentage:439.83,color:"#264653"},{id:"6",name:"Australia",percentage:386.73,color:"#E76F51"},{id:"7",name:"Vietnam",percentage:370.93,color:"#8AB17D"},{id:"8",name:"United Kingdom",percentage:312.91,color:"#457B9D"},{id:"9",name:"France",percentage:264.16,color:"#6A4C93"},{id:"10",name:"Qatar",percentage:125.81,color:"#B5838D"},{id:"11",name:"Greece",percentage:53.36,color:"#1D3557"},{id:"12",name:"Denmark",percentage:24.4,color:"#A8DADC"}],oc="co2Emissions",nc="CO2",ic="distinct",sc={from:"#EE6655",to:"#4488EE"},rc=!1,ac="data:image/jpeg;base64,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",ex={level:Ql,activeElement:Wl,markConfig:Vl,col1Config:Xl,col2Config:Yl,sceneConfig:Zl,bindings:ql,markLabelConfig:_l,colLabelConfig:$l,decorations:ec,layers:tc,activeDataset:oc,activeModelCollection:nc,colorMode:ic,colorGradient:sc,colorTint:rc,thumbnail:ac},tx=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:oc,activeElement:Wl,activeModelCollection:nc,bindings:ql,col1Config:Xl,col2Config:Yl,colLabelConfig:$l,colorGradient:sc,colorMode:ic,colorTint:rc,decorations:ec,default:ex,layers:tc,level:Ql,markConfig:Vl,markLabelConfig:_l,sceneConfig:Zl,thumbnail:ac},Symbol.toStringTag,{value:"Module"})),lc=1,cc="scene",uc={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:0,y:0,z:0},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},dc={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},fc={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Ac={background:"dark",hdriPreset:"city",focalLength:130,sceneTitleShow:!1},pc={markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null},mc={show:!1,slots:{top:[],bottom:[],left:[],right:[]}},hc={show:!1,slots:{top:[],bottom:[],left:[],right:[]}},gc=[{id:"dec_1785240398912",shape:"custom",material:"original",color:"#888888",position:{x:0,y:.07597511353412223,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/toxic_barrel.glb",customModelHasMat:!0,customModelName:"toxic_barrel"},{id:"dec_1785240404225",shape:"custom",material:"original",color:"#888888",position:{x:3.142274607608607,y:1.536828273316611,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/realistic_mushroom.glb",customModelHasMat:!0,customModelName:"realistic_mushroom"},{id:"dec_1785240407354",shape:"custom",material:"original",color:"#888888",position:{x:3.0278357053545273,y:-1.5,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/poison_bottle.glb",customModelHasMat:!0,customModelName:"poison_bottle"},{id:"dec_1785240413168",shape:"custom",material:"original",color:"#888888",position:{x:-1.4814160853488367,y:.06324202238396426,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/pine_tree.glb",customModelHasMat:!0,customModelName:"pine_tree"},{id:"dec_1785240416907",shape:"custom",material:"original",color:"#888888",position:{x:1.544065453841783,y:-1.5,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/mushroom.glb",customModelHasMat:!0,customModelName:"mushroom"},{id:"dec_1785240420088",shape:"custom",material:"original",color:"#888888",position:{x:3.10334803347824,y:.050559734480474905,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/log.glb",customModelHasMat:!0,customModelName:"log"},{id:"dec_1785240423521",shape:"custom",material:"fluid",color:"#ab50e9",position:{x:1.4965956348298275,y:1.593260010625818,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/liquid_landscape.glb",customModelHasMat:!0,customModelName:"liquid_landscape"},{id:"dec_1785240426792",shape:"custom",material:"original",color:"#888888",position:{x:-1.4836777259185083,y:-1.5,z:0},size:{x:1,y:1,z:1},orientation:{x:48,y:9,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/leaf.glb",customModelHasMat:!0,customModelName:"leaf"},{id:"dec_1785240430185",shape:"custom",material:"original",color:"#888888",position:{x:0,y:-1.5,z:0},size:{x:2.1,y:2.1,z:2.1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/forest_diorama.glb",customModelHasMat:!0,customModelName:"forest_diorama"},{id:"dec_1785240433888",shape:"custom",material:"original",color:"#888888",position:{x:-1.470564980941981,y:1.4730720426587034,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/fly_agaric_mushroom.glb",customModelHasMat:!0,customModelName:"fly_agaric_mushroom"},{id:"dec_1785240436953",shape:"custom",material:"original",color:"#888888",position:{x:1.4600916768314587,y:.08050266038047105,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/flowers.glb",customModelHasMat:!0,customModelName:"flowers"},{id:"dec_1785240441241",shape:"custom",material:"original",color:"#888888",position:{x:0,y:1.4820969273194309,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/earth.glb",customModelHasMat:!0,customModelName:"earth"}],xc=[{id:"1",name:"Death cap (Amanita phalloides)",percentage:10,color:"#7C8C4E"},{id:"2",name:"Destroying angel (Amanita virosa)",percentage:10,color:"#F0ECE0"},{id:"3",name:"Funeral bell (Galerina marginata)",percentage:9,color:"#6B4E31"},{id:"4",name:"Deadly webcap (Cortinarius rubellus)",percentage:8,color:"#A0522D"},{id:"5",name:"False morel (Gyromitra esculenta)",percentage:6,color:"#8B4A2F"},{id:"6",name:"Panther cap (Amanita pantherina)",percentage:5,color:"#C2A878"},{id:"7",name:"Fly agaric (Amanita muscaria)",percentage:3,color:"#D62828"},{id:"8",name:"Satan's bolete (Rubroboletus satanas)",percentage:4,color:"#C77B7B"},{id:"9",name:"Jack-o'-lantern (Omphalotus olearius)",percentage:4,color:"#E68A00"},{id:"10",name:"Ivory funnel (Clitocybe dealbata)",percentage:7,color:"#E4DAC4"},{id:"11",name:"Fool's funnel (Clitocybe rivulosa)",percentage:7,color:"#CFC8B8"},{id:"12",name:"The sickener (Russula emetica)",percentage:2,color:"#E0455E"}],yc="mushroomToxicity",bc="mushrooms",Cc="distinct",Fc={from:"#EE6655",to:"#4488EE"},Bc=!1,vc="data:image/jpeg;base64,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",ox={level:lc,activeElement:cc,markConfig:uc,col1Config:dc,col2Config:fc,sceneConfig:Ac,bindings:pc,markLabelConfig:mc,colLabelConfig:hc,decorations:gc,layers:xc,activeDataset:yc,activeModelCollection:bc,colorMode:Cc,colorGradient:Fc,colorTint:Bc,thumbnail:vc},nx=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:yc,activeElement:cc,activeModelCollection:bc,bindings:pc,col1Config:dc,col2Config:fc,colLabelConfig:hc,colorGradient:Fc,colorMode:Cc,colorTint:Bc,decorations:gc,default:ox,layers:xc,level:lc,markConfig:uc,markLabelConfig:mc,sceneConfig:Ac,thumbnail:vc},Symbol.toStringTag,{value:"Module"})),Rc=1,Sc="mark",Mc={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:0,y:0,z:0},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},Kc={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},wc={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Dc={background:"dark",hdriPreset:"city",focalLength:130},Ec={markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null},Uc={show:!1,slots:{top:[],bottom:[],left:[],right:[]}},Tc={show:!1,slots:{top:[],bottom:[],left:[],right:[]}},jc=[{id:"dec_1785239776800",shape:"custom",material:"original",color:"#888888",position:{x:.06702975226950691,y:-2.9209068999245345,z:0},size:{x:1.2,y:1.2,z:1.2},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20sea%20pollution/corals%201.glb",customModelHasMat:!0,customModelName:"corals 1"},{id:"dec_1785239796688",shape:"custom",material:"fluid",color:"#2fd3e1",position:{x:1.9910985760209705,y:.8565123344000618,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20sea%20pollution/drop_of_water.glb",customModelHasMat:!0,customModelName:"drop_of_water"},{id:"dec_1785239818521",shape:"custom",material:"original",color:"#888888",position:{x:2.077946559836162,y:-2.0480313187032,z:0},size:{x:1.5,y:1.5,z:1.5},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20sea%20pollution/water_waves.glb",customModelHasMat:!0,customModelName:"water_waves"},{id:"dec_1785239824257",shape:"custom",material:"original",color:"#888888",position:{x:0,y:.8092072794486445,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20sea%20pollution/trash_bag.glb",customModelHasMat:!0,customModelName:"trash_bag"},{id:"dec_1785239850993",shape:"custom",material:"original",color:"#888888",position:{x:-1.6671060148258432,y:.7874136355249424,z:0},size:{x:1.3,y:1.3,z:1.3},orientation:{x:25,y:142,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20sea%20pollution/sea_turtle.glb",customModelHasMat:!0,customModelName:"sea_turtle"},{id:"dec_1785239918201",shape:"custom",material:"original",color:"#888888",position:{x:-1.530037701275162,y:-.7247997625560911,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:-80,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20sea%20pollution/sea_shell.glb",customModelHasMat:!0,customModelName:"sea_shell"},{id:"dec_1785239924312",shape:"custom",material:"original",color:"#888888",position:{x:.08067082731122155,y:-.7811536453889287,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:-71,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/plastic_water_bottle.glb",customModelHasMat:!0,customModelName:"plastic_water_bottle"},{id:"dec_1785239955417",shape:"custom",material:"original",color:"#888888",position:{x:-1.652898597920611,y:-1.8655315101074894,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20sea%20pollution/garbage%20bag.glb",customModelHasMat:!0,customModelName:"garbage bag"},{id:"dec_1785239968993",shape:"custom",material:"original",color:"#888888",position:{x:.09053427897427183,y:-1.9189669517084416,z:0},size:{x:1.2,y:1.2,z:1.2},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20sea%20pollution/fish.glb",customModelHasMat:!0,customModelName:"fish"},{id:"dec_1785239986329",shape:"custom",material:"original",color:"#888888",position:{x:2.0508671017933784,y:-.5648406628700835,z:0},size:{x:1.3,y:1.3,z:1.3},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20sea%20pollution/corals%202.glb",customModelHasMat:!0,customModelName:"corals 2"}],Ic=[{id:"1",name:"North Pacific",percentage:1990,color:"#023E8A"},{id:"2",name:"Indian Ocean",percentage:1300,color:"#0077B6"},{id:"3",name:"North Atlantic",percentage:930,color:"#0096C7"},{id:"4",name:"South Pacific",percentage:491,color:"#00B4D8"},{id:"5",name:"Mediterranean Sea",percentage:247,color:"#48CAE4"},{id:"6",name:"South Atlantic",percentage:297,color:"#90E0EF"}],kc="oceanPlastic",zc="sea pollution",Pc="distinct",Hc={from:"#EE6655",to:"#4488EE"},Oc=!1,Gc="data:image/jpeg;base64,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KKKACiiigAooooAWN2jdXQ4ZSCD6EVbS4RnLNGDuwGQHH1we3/6+tU6KALEjxNNKywbEOdkZYnbn374p0htRzGHJGBgjAbjqeeOf8ioHmldQryOwHQFicUjyM+M7eBjhQP5UDJHCrLtDDCHG9R1560ksoeNUUMMdcng8en5/nUZYnrSUCCiiigAooooAdFFJKxWJGdgpYhRk4AJJ+gAJPsKls7SS7mSNCEDuE8xwdqk5xkgH0P5VueCTjUStywjsZgyTyCFXcAKxwoIPHY9hkZ52muh1LSIreSy+y2001sY/NjJb96rFTwXIHJPP3c54xwKiUrOyOqhh41WruxwN7aT2Ny9tdIEmTG5QwbHGeo4qGuh8SwIkMc1zZXlvdSYWJ2h2QyIuckE8seVGefqciueqottamVamqdRxTuFFFFMyCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqxYWjXt0sCOkZKs2584AVSx6ewqvWh4fuoLPVoJroOYQGDBJCh5Ugcj3IP4Une2hUHFSXNt1O48O6jZaW9v5yGWKFRGhkjDQs2RkkcdcEgdc85JNaWvXTX2pxSDTltY2TiOVXCEqF5ReB26e3J5qJdLtXN1frd6fOkqNttlRUMeQDt2nuMcgdeh4pum2E6LBJJJby2XLR28ZIFuW5YEA5HQY6gE88nlU6MmrNXPTeLo+1UoO2llcryQapfWSrbHzoE3pJHwVB3HlgeDwGwcdiO+K881GFrfULmF4hE0crKYwchME8dT/M/U16PobOltcWk8mwpIUQxmNcqRhlc4JH1wCN3oeMgy2VjLdi6w9pOu8x3ClTMr4JK9fmHHPXvWLl7OTia1aSxUFJu2+pw9FBxk44HbNFdB4oUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFdd4NGmGFVnijlmeX96kjxguijIUB+AMgZJ/DBANcjSxu0bq8bFXUgqR1BFJq9i4T5b6bpr7z0+XRo453V7H53c+XaxSJtUH7pyDgBsgZGeSRmqcmnW+n6pbT6lLcRWcxdWa2mMmSDwOOnIORzj9a5T/AISK6m8oXrNKE4+UhPl4GOAOw6e59TTrrXI5fK8m3ZNjk5kkLnbxgZJ+v4muyVZSiknaxzqLvZq53040a4srq2067j3bAUcgRqSuDkycN1wACRya4HxTdrcXEMTJH58CGN5FOTgcBTyQSMHnJyGGemBR1PUDeyDagSNeFHf/AOt+FUiSxJYkk8knvXK9L2OiVSU0lLoFFFFIgKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/2Q==",ix={level:Rc,activeElement:Sc,markConfig:Mc,col1Config:Kc,col2Config:wc,sceneConfig:Dc,bindings:Ec,markLabelConfig:Uc,colLabelConfig:Tc,decorations:jc,layers:Ic,activeDataset:kc,activeModelCollection:zc,colorMode:Pc,colorGradient:Hc,colorTint:Oc,thumbnail:Gc},sx=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:kc,activeElement:Sc,activeModelCollection:zc,bindings:Ec,col1Config:Kc,col2Config:wc,colLabelConfig:Tc,colorGradient:Hc,colorMode:Pc,colorTint:Oc,decorations:jc,default:ix,layers:Ic,level:Rc,markConfig:Mc,markLabelConfig:Uc,sceneConfig:Dc,thumbnail:Gc},Symbol.toStringTag,{value:"Module"})),Nc=2,Lc="scene",Jc={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:1.8,y:1.8,z:1.8},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/stylized_cloud.glb",customModelHasMat:!0,customModelName:"stylized_cloud"},Qc={arrangement:"scattering",color:"#5E5CE6",alignCount:12,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:6.5,z:3},scatterDensity:1,pilingCount:10,scatterOrientation:"static",scatterExclusionId:"dec_1784648799961",scatterBoundingVolume:"sphere",scatterEven:!0,scatterShowBounds:!1},Wc={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Vc={background:"dark",hdriPreset:"sunset",focalLength:130,sceneLabelOcclude:"optimized",sceneTitleOffset:2,bgColor:"#00001e",exposure:1,envRotation:335,fog:!1,grid:!1,stars:!1,bgGradientTop:"#a6d2ff"},Xc={markColor:"numerical",markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:"numerical"},Yc={show:!0,slots:{top:"numerical",bottom:null,left:"categorical",right:null}},Zc={show:!0,slots:{top:null,bottom:null,left:null,right:null}},qc=[{id:"dec_1784648799961",shape:"custom",material:"original",color:"#888888",position:{x:0,y:-.6,z:0},size:{x:3.4,y:3.4,z:3.4},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/building_05.glb",customModelHasMat:!0,customModelName:"building_05",name:"Skyscraper"}],_c=[{id:"1",name:"Germany",percentage:572.32,color:"#E63946"},{id:"2",name:"Canada",percentage:533.34,color:"#F4A261"},{id:"3",name:"Turkey",percentage:513.03,color:"#E9C46A"},{id:"4",name:"Brazil",percentage:483.01,color:"#2A9D8F"},{id:"5",name:"South Africa",percentage:439.83,color:"#264653"},{id:"6",name:"Australia",percentage:386.73,color:"#E76F51"},{id:"7",name:"Vietnam",percentage:370.93,color:"#8AB17D"},{id:"8",name:"United Kingdom",percentage:312.91,color:"#457B9D"},{id:"9",name:"France",percentage:264.16,color:"#6A4C93"},{id:"10",name:"Qatar",percentage:125.81,color:"#B5838D"},{id:"11",name:"Greece",percentage:53.36,color:"#1D3557"},{id:"12",name:"Denmark",percentage:24.4,color:"#A8DADC"}],$c="co2Emissions",eu="continuous",tu={from:"#ffffff",to:"#000000"},ou=!1,nu="data:image/jpeg;base64,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",rx={level:Nc,activeElement:Lc,markConfig:Jc,col1Config:Qc,col2Config:Wc,sceneConfig:Vc,bindings:Xc,markLabelConfig:Yc,colLabelConfig:Zc,decorations:qc,layers:_c,activeDataset:$c,colorMode:eu,colorGradient:tu,colorTint:ou,thumbnail:nu},ax=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:$c,activeElement:Lc,bindings:Xc,col1Config:Qc,col2Config:Wc,colLabelConfig:Zc,colorGradient:tu,colorMode:eu,colorTint:ou,decorations:qc,default:rx,layers:_c,level:Nc,markConfig:Jc,markLabelConfig:Yc,sceneConfig:Vc,thumbnail:nu},Symbol.toStringTag,{value:"Module"})),iu=1,su="scene",ru={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},scale:.1,size:{x:0,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},au={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},lu={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},cu={background:"dark",hdriPreset:"city",focalLength:130,sceneTitleShow:!1},uu={markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null},du={show:!1,slots:{top:null,bottom:null,left:null,right:null}},fu={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Au=[{id:"dec_1784808573016",shape:"custom",material:"original",color:"#888888",position:{x:0,y:1.7,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/airplane_crj-900_cityjet.glb",customModelHasMat:!0,customModelName:"airplane_crj-900_cityjet"},{id:"dec_1784808573841",shape:"custom",material:"original",color:"#888888",position:{x:1.2,y:.9,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/building_05.glb",customModelHasMat:!0,customModelName:"building_05"},{id:"dec_1784808574368",shape:"custom",material:"original",color:"#888888",position:{x:-1.4,y:.9,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/carbon_dioxide_co2.glb",customModelHasMat:!0,customModelName:"carbon_dioxide_co2"},{id:"dec_1784808574984",shape:"custom",material:"original",color:"#888888",position:{x:0,y:.6,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/earth%20(2).glb",customModelHasMat:!0,customModelName:"earth (2)"},{id:"dec_1784808575505",shape:"custom",material:"original",color:"#888888",position:{x:1.3,y:-.7,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/flowers.glb",customModelHasMat:!0,customModelName:"flowers"},{id:"dec_1784808576024",shape:"custom",material:"original",color:"#888888",position:{x:-1.2,y:-.5,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/low_poly_factory.glb",customModelHasMat:!0,customModelName:"low_poly_factory"},{id:"dec_1784808576593",shape:"custom",material:"original",color:"#888888",position:{x:1.3,y:1.9,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/low_poly_small_car.glb",customModelHasMat:!0,customModelName:"low_poly_small_car"},{id:"dec_1784808662185",shape:"custom",material:"original",color:"#888888",position:{x:0,y:-.9,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/pine_tree.glb",customModelHasMat:!0,customModelName:"pine_tree"},{id:"dec_1784808680241",shape:"custom",material:"original",color:"#888888",position:{x:-1.6,y:1.8,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/stylized_cloud.glb",customModelHasMat:!0,customModelName:"stylized_cloud"}],pu=[{id:"1",name:"Death cap (Amanita phalloides)",percentage:10,color:"#7C8C4E"},{id:"2",name:"Destroying angel (Amanita virosa)",percentage:10,color:"#F0ECE0"},{id:"3",name:"Funeral bell (Galerina marginata)",percentage:9,color:"#6B4E31"},{id:"4",name:"Deadly webcap (Cortinarius rubellus)",percentage:8,color:"#A0522D"},{id:"5",name:"False morel (Gyromitra esculenta)",percentage:6,color:"#8B4A2F"},{id:"6",name:"Panther cap (Amanita pantherina)",percentage:5,color:"#C2A878"}],mu="mushroomToxicity",hu="distinct",gu={from:"#EE6655",to:"#4488EE"},xu=!1,yu="data:image/jpeg;base64,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03/j7X6H+VdJpUgiuSzW0dwCuNsjqoHI5yfpj8a5WCVoZBIoBI7Gte3uba5x5lwltzg+aGIHXnKqc9AOnU/jSZcWrWOtXULyJ53t4dPTzm3YN/F8vygdmHpmtiy8RaXZafb20lyHnggjWRIlL4OAOo46n1rn/E2seGruz8rS2to5PPD7o7VkOzbgjO315x0qrF4wtLbRF0pIJZNjAiYHAYb933T+XWhtonRo7I+IQJFj/snVi7Asq/ZuSB1IGfcfnWT4j1Wz1XRLiG40zU0j5KztajbG6nGck8YPB/EViT/EGdrpJ47KI7EaNVbIGCVPY9flFU7jxtPcabcWL2UXlzs7O4c7ss5c/qfyptsVkcrRRRQAV2/hm4nuNHRFv9iwyIjojM02GcKOvCgZXGAeenJriKKmUeZAd7repaRYreWssKT3YiAjBtgm0sgGOACMAA+vOOwxwbMXYsxySck1qeJ1C6w6jdxBADuOSD5SZ/WsqiMbILWYUUUVQBRRRQB0Xhi8tmL2t/LIsH3giuQN3PYAkj2A646jIrdnkCDyYlbeDtKbAwLBRhVABxhiRgYGCK4S2uJrWdJ7eRo5UOVZTyK6K68TWxs5I7Ox2SyqVbe3yjIGeBgHkdxjpxWM6d3oZyp3dypr97bXH7pGuZGQlhLLKW8xjt3Oc9iFAHAJABJ6CsVmLHLHJodmd2d2LMxySTkk0lapWRaVgooopjCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA2/GieX4lu1xtwI/lxjH7teKxKmvbue+uXubpw8r43MFC5wMdBx0FQ0lsNu7CiiimIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/9k=",lx={level:iu,activeElement:su,markConfig:ru,col1Config:au,col2Config:lu,sceneConfig:cu,bindings:uu,markLabelConfig:du,colLabelConfig:fu,decorations:Au,layers:pu,activeDataset:mu,colorMode:hu,colorGradient:gu,colorTint:xu,thumbnail:yu},cx=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:mu,activeElement:su,bindings:uu,col1Config:au,col2Config:lu,colLabelConfig:fu,colorGradient:gu,colorMode:hu,colorTint:xu,decorations:Au,default:lx,layers:pu,level:iu,markConfig:ru,markLabelConfig:du,sceneConfig:cu,thumbnail:yu},Symbol.toStringTag,{value:"Module"})),bu=3,Cu="mark",Fu={shape:"box",material:"metal",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},Bu={arrangement:"scattering",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"density",scatterCount:300,scatterDimensions:{x:10.5,y:4,z:10.5},scatterDensity:1,pilingCount:10},vu={arrangement:"alignment",color:"#9D9BF4",alignCount:5,alignAxis:"Y",alignSpacing:.5,alignAnchor:"end",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Ru={background:"dark",hdriPreset:"city",focalLength:130,sceneTitleOffset:9.5,sceneTitleShow:!1},Su={markColor:null,markGeometry:null,scatterSize:"numerical",scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null},Mu={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Ku={show:!0,slots:{top:null,bottom:null,left:"categorical",right:"numerical"}},wu=[],Du=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],Eu="garbageInOcean",Uu="distinct",Tu={from:"#EE6655",to:"#4488EE"},ju=!1,Iu="data:image/jpeg;base64,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",ux={level:bu,activeElement:Cu,markConfig:Fu,col1Config:Bu,col2Config:vu,sceneConfig:Ru,bindings:Su,markLabelConfig:Mu,colLabelConfig:Ku,decorations:wu,layers:Du,activeDataset:Eu,colorMode:Uu,colorGradient:Tu,colorTint:ju,thumbnail:Iu},dx=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:Eu,activeElement:Cu,bindings:Su,col1Config:Bu,col2Config:vu,colLabelConfig:Ku,colorGradient:Tu,colorMode:Uu,colorTint:ju,decorations:wu,default:ux,layers:Du,level:bu,markConfig:Fu,markLabelConfig:Mu,sceneConfig:Ru,thumbnail:Iu},Symbol.toStringTag,{value:"Module"})),ku=2,zu="scene",Pu={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:.5,y:.5,z:.5},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/fly_agaric_mushroom.glb",customModelHasMat:!0,customModelName:"fly_agaric_mushroom"},Hu={arrangement:"surface",color:"#5E5CE6",alignCount:12,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10,surfaceTargetId:"dec_1784657033022"},Ou={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Gu={background:"dark",hdriPreset:"city",focalLength:130,sceneLabelOcclude:"optimized",sceneTitleBelow:!1,sceneTitleShow:!0,sceneTitleOffset:.6},Nu={markColor:"numerical",markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:"numerical"},Lu={show:!0,slots:{top:"numerical",bottom:null,left:"categorical",right:null}},Ju={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Qu=[{id:"dec_1784657033022",shape:"custom",material:"original",color:"#888888",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/log.glb",customModelHasMat:!0,customModelName:"log"}],Wu=[{id:"1",name:"Death cap (Amanita phalloides)",percentage:10,color:"#7C8C4E"},{id:"2",name:"Destroying angel (Amanita virosa)",percentage:10,color:"#F0ECE0"},{id:"3",name:"Funeral bell (Galerina marginata)",percentage:9,color:"#6B4E31"},{id:"4",name:"Deadly webcap (Cortinarius rubellus)",percentage:8,color:"#A0522D"},{id:"5",name:"False morel (Gyromitra esculenta)",percentage:6,color:"#8B4A2F"},{id:"6",name:"Panther cap (Amanita pantherina)",percentage:5,color:"#C2A878"},{id:"7",name:"Fly agaric (Amanita muscaria)",percentage:3,color:"#D62828"},{id:"8",name:"Satan's bolete (Rubroboletus satanas)",percentage:4,color:"#C77B7B"},{id:"9",name:"Jack-o'-lantern (Omphalotus olearius)",percentage:4,color:"#E68A00"},{id:"10",name:"Ivory funnel (Clitocybe dealbata)",percentage:7,color:"#E4DAC4"},{id:"11",name:"Fool's funnel (Clitocybe rivulosa)",percentage:7,color:"#CFC8B8"},{id:"12",name:"The sickener (Russula emetica)",percentage:2,color:"#E0455E"}],Vu="mushroomToxicity",Xu="continuous",Yu={from:"#ffffff",to:"#400080"},Zu=!0,qu="data:image/jpeg;base64,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+Qfj369q4u/1C61CXzLqUt6L0C/QVVorZJI5pTctwqW1uZbSdZoGKuv6+xqKimQezeBvFaanCsErASrwynqKiuvCNvpHi63161eODTwxM0O12IZgVOwKpAXkdSAO3YV5hoGoR6bfG4kDZ8shGUkbW4weOv0Pr+NexeGNettb05g8wGxfnbft24568Y9aT1VjZWaTZynjnw22t3s2saLDfTvKq5iW3XYcAAnfvz0GMbTyPSuGvdC1ewg+0Xul3kEPeSSBlUc45JGBz/SvWINdv5PMjtQp+Z1ErySFfZtzHOPbH61T1rUre4ha31eUXEbN8+SVVivI+71GQOOf61mpS2aOhYRSTakeR0V0HiaCxZVnsbZYDkFxG+5SCOOOx46cdea5+tE7nJODg7MKu2N3Mn7lArKe7DoOnf8Az6VSqWNtkZxjLHrTtcINp6Gy+oJAP9HCl+c8YH6YrPmvJZ+DMRkcjoKpkk855pSc89D39KtOxo5Njg2fvfNxxk9KUHg4x070zFPLY+ZsUriuJKcKF9TmoqCcnJopN3Mm7sKKKKQgooooAKKKKACiiigAooooAKKKKACiiigAoopURpHVEUszEBQOpNACUVf1DRNT00M17ZTRopwXxuUH03DjPtUEdlcy2puo4i8QkEZKkE7j0GOv40robi07NHafCbw+NQ1V9WuVzbWJHlhhw8p6dRztHPqCVroPiV4o+xxmztnBuZAR1+4vr/n+la+lwxeCfAsYvdqThDJMAACZDzjg8kcLnPOBXi+q6hNqmoTXlwSXlbOM/dHYfgKNyvhRUooopkBRRRQAUUUUAFdX4ViWO0MssrxwSt+8wfvYPGOePc/SuZtYfPnVCcL1Y+grduLoHdBFHiJU2RK8nAAPJBzg859evepk+iOnDwi3zS2N2/8AEH7l7aw2xiNccHdn1wMenft69KxZrxm2Ayzsozujc469effn+VVDKzS7lBIZdrKfm9vz/kelVp7tYVKRcswwc8496lI6J1dNRmpXAYLAhyE6/wCfxqjQTk5PWitEcEpOTuwpR0xSUUEp2HYJA6U4DHPSo6KC+YeXAGBzTCSTkmiigltsKKKKBBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVPY3LWl1HOvVc/qMf1qCigabTujudL8U3FnCgZnnRmyy/L0784z3/AAx37b2mDRJZJjawxWtxJt3qrbVzjGRgkd+w5615dbXLQsufmQHO2tG2uCCslvKY2U7tyEhh6AelYuFtj0IV41FaaudN41nvpNN+z3l5NIhk3xvIRhsZyuc+4P4DgVwVdjHrW+JraeJJYHUBlnw7E9cce/I4Hoc1gazYQ27+fZSB7Z2wBnlT/PHBx39fe4vozCvRSXNDYzaKKKs5QooooAKKKKAHwymJiR3GD9KtrdxLGVw3OOAO4z/jVGilYuM3FWRPNdySE4JXPvmoKKKZLbe4UUUUCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAChSVOVJB9RRRQBYjvZUxznBzwcf56CkuLqScYY/Lndyc5P+c/nUFFKyK55NWuFFFFMkKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==",fx={level:ku,activeElement:zu,markConfig:Pu,col1Config:Hu,col2Config:Ou,sceneConfig:Gu,bindings:Nu,markLabelConfig:Lu,colLabelConfig:Ju,decorations:Qu,layers:Wu,activeDataset:Vu,colorMode:Xu,colorGradient:Yu,colorTint:Zu,thumbnail:qu},Ax=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:Vu,activeElement:zu,bindings:Nu,col1Config:Hu,col2Config:Ou,colLabelConfig:Ju,colorGradient:Yu,colorMode:Xu,colorTint:Zu,decorations:Qu,default:fx,layers:Wu,level:ku,markConfig:Pu,markLabelConfig:Lu,sceneConfig:Gu,thumbnail:qu},Symbol.toStringTag,{value:"Module"})),_u=3,$u="scene",ed={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},scale:6,size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},categoryShapes:{Strings:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/stradivari_violin.glb",customModelHasMat:!0,customModelName:"stradivari_violin"},Brass:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/trumpet.glb",customModelHasMat:!0,customModelName:"trumpet"},Woodwinds:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/clarinet_model_with_annotations.glb",customModelHasMat:!0,customModelName:"clarinet_model_with_annotations"},Percussion:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/drum.glb",customModelHasMat:!0,customModelName:"drum"},"Piano & Harp":{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/harp.glb",customModelHasMat:!0,customModelName:"harp"}}},td={arrangement:"scattering",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10,scatterEven:!0},od={arrangement:"alignment",color:"#9D9BF4",alignCount:5,alignAxis:"X",alignSpacing:.5,alignAnchor:"end",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},nd={background:"dark",hdriPreset:"city",focalLength:130,sceneTitleOffset:9.5},id={markColor:null,markGeometry:"categorical",scatterSize:"numerical",scatterCount:"numerical",c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null},sd={show:!1,slots:{top:null,bottom:null,left:null,right:null}},rd={show:!0,slots:{top:"numerical",bottom:"categorical",left:null,right:null}},ad=[],ld=[{id:"1",name:"Strings",percentage:80,color:"#C8A882"},{id:"2",name:"Brass",percentage:28,color:"#D4A017"},{id:"3",name:"Woodwinds",percentage:20,color:"#4A7C59"},{id:"4",name:"Percussion",percentage:10,color:"#5C6B7A"},{id:"5",name:"Piano & Harp",percentage:4,color:"#8B7BAB"}],cd="mahler",ud="distinct",dd={from:"#EE6655",to:"#4488EE"},fd=!1,Ad="data:image/jpeg;base64,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",px={level:_u,activeElement:$u,markConfig:ed,col1Config:td,col2Config:od,sceneConfig:nd,bindings:id,markLabelConfig:sd,colLabelConfig:rd,decorations:ad,layers:ld,activeDataset:cd,colorMode:ud,colorGradient:dd,colorTint:fd,thumbnail:Ad},mx=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:cd,activeElement:$u,bindings:id,col1Config:td,col2Config:od,colLabelConfig:rd,colorGradient:dd,colorMode:ud,colorTint:fd,decorations:ad,default:px,layers:ld,level:_u,markConfig:ed,markLabelConfig:sd,sceneConfig:nd,thumbnail:Ad},Symbol.toStringTag,{value:"Module"})),pd=2,md="collection1",hd={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/pine_tree.glb",customModelHasMat:!0,customModelName:"pine_tree"},gd={arrangement:"surface",color:"#5E5CE6",alignCount:12,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10,surfaceTargetId:"dec_1784657033022"},xd={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},yd={background:"dark",hdriPreset:"city",focalLength:130,sceneLabelOcclude:"optimized",sceneTitleBelow:!1,sceneTitleShow:!1,sceneTitleOffset:1.3},bd={markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:"numerical"},Cd={show:!0,slots:{top:"numerical",bottom:null,left:"categorical",right:null}},Fd={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Bd=[{id:"dec_1784657033022",shape:"custom",material:"original",color:"#888888",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/earth%20(2).glb",customModelHasMat:!0,customModelName:"earth (2)",name:"Earth"}],vd=[{id:"1",name:"Death cap (Amanita phalloides)",percentage:10,color:"#7C8C4E"},{id:"2",name:"Destroying angel (Amanita virosa)",percentage:10,color:"#F0ECE0"},{id:"3",name:"Funeral bell (Galerina marginata)",percentage:9,color:"#6B4E31"},{id:"4",name:"Deadly webcap (Cortinarius rubellus)",percentage:8,color:"#A0522D"},{id:"5",name:"False morel (Gyromitra esculenta)",percentage:6,color:"#8B4A2F"},{id:"6",name:"Panther cap (Amanita pantherina)",percentage:5,color:"#C2A878"},{id:"7",name:"Fly agaric (Amanita muscaria)",percentage:3,color:"#D62828"},{id:"8",name:"Satan's bolete (Rubroboletus satanas)",percentage:4,color:"#C77B7B"},{id:"9",name:"Jack-o'-lantern (Omphalotus olearius)",percentage:4,color:"#E68A00"},{id:"10",name:"Ivory funnel (Clitocybe dealbata)",percentage:7,color:"#E4DAC4"},{id:"11",name:"Fool's funnel (Clitocybe rivulosa)",percentage:7,color:"#CFC8B8"},{id:"12",name:"The sickener (Russula emetica)",percentage:2,color:"#E0455E"}],Rd="mushroomToxicity",Sd="continuous",Md={from:"#ffffff",to:"#400080"},Kd=!0,wd="data:image/jpeg;base64,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",hx={level:pd,activeElement:md,markConfig:hd,col1Config:gd,col2Config:xd,sceneConfig:yd,bindings:bd,markLabelConfig:Cd,colLabelConfig:Fd,decorations:Bd,layers:vd,activeDataset:Rd,colorMode:Sd,colorGradient:Md,colorTint:Kd,thumbnail:wd},gx=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:Rd,activeElement:md,bindings:bd,col1Config:gd,col2Config:xd,colLabelConfig:Fd,colorGradient:Md,colorMode:Sd,colorTint:Kd,decorations:Bd,default:hx,layers:vd,level:pd,markConfig:hd,markLabelConfig:Cd,sceneConfig:yd,thumbnail:wd},Symbol.toStringTag,{value:"Module"})),Dd=2,Ed="scene",Ud={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/flowers.glb",customModelHasMat:!0,customModelName:"flowers"},Td={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:.9,alignAnchor:"end",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1},jd={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1},Id={background:"dark",hdriPreset:"dawn",focalLength:130},kd={markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:"numerical",markSizeZ:null,markScale:null},zd={show:!0,slots:{top:"numerical",bottom:"categorical",left:null,right:null}},Pd={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Hd=[{id:"dec_1781047628256",shape:"box",material:"metal",color:"#24271d",position:{x:0,y:-.05,z:0},size:{x:8,y:.1,z:6.6},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}}],Od=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],Gd="co2Emissions",Nd="distinct",Ld={from:"#EE6655",to:"#4488EE"},Jd=!1,Qd="data:image/jpeg;base64,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FopKKAHIzIwZSQR0IpzzSyY81gwHTAxUdLUuKbuMWikopiFzS02loAWpDPKTkyMeMDJ/P+lRUtTKKluO4tFJRVCFopM0UgHUjFyoCtge4z/ntRRSlFSVmMXNFJS09gFopKKBC02VDJDJGDt3qRn0PY06jNJq6sxiIGGdxB54wCAPzJp1JRSUVFWQDqKSimIWmuiyAh1BBUqcjOQeo+lLS0NXApx6bElw8+9yznLDPH5f59OnFXFUKMKMUUVEacYfChi0tJRVgLRSUUALS02loEU80Vwn/C1NC/59NR/79x//ABdH/C1NC/59NS/79x//ABdHPHuB3dLXB/8AC1NC/wCfTUv+/cf/AMXS/wDC1NC/59NS/wC/cf8A8XRzx7gd3RXCf8LU0L/n01L/AL9x/wDxdH/C1dC/59NS/wC/cf8A8XRzx7gd5RXB/wDC1dC/59NS/wC/cf8A8XR/wtXQv+fTUv8Av3H/APF0c8e4HeUVwf8AwtXQv+fTUv8Av3H/APF0v/C1dC/59NS/79x//F0c8e4HeUVwf/C1dC/59NS/79x//F0f8LV0L/n01L/v3H/8XRzx7gd7RXBf8LW0L/n01L/v3H/8XS/8LW0L/n01L/v3H/8AF0c8e4HeUVwf/C1tC/59NS/79R//ABdH/C1tC/59NS/79x//ABdLnj3A72iuC/4WtoX/AD6al/37j/8Ai6P+FraF/wA+mpf9+o//AIujnj3A72jNcF/wtbQv+fTUv+/Uf/xdH/C19C/59NS/79R//F0c8e4HfUVwX/C19B/59NS/79R//F0f8LX0L/n01L/v1H/8XRzx7gd7S1wP/C19B/59NS/79R//ABdH/C19B/59NS/79R//ABdHPHuB31FcD/wtfQf+fTUv+/Uf/wAXR/wtfQf+fTUv+/Uf/wAXRzx7gd9miuC/4WxoP/PpqX/fqP8A+Lo/4WxoP/PpqX/fqP8A+Lo549wO+orgf+FsaD/z6al/36j/APi6P+FsaD/z6al/36j/APi6XPHuB31FcD/wtjQf+fTUv+/Uf/xdH/C2NB/59NS/79R//F0c8e4Hf0VwH/C2NB/59NS/79R//F0v/C2dB/59NS/79R//ABdHPHuB39FcB/wtnQf+fTU/+/Uf/wAXR/wtnQf+fTUv+/Uf/wAXRzx7gd/RXAf8LZ0H/n01P/v1H/8AF0f8LZ0H/n01P/v1H/8AF0c8e4HoFFcB/wALZ0H/AJ9NT/79R/8AxdH/AAtnQP8An01P/v1H/wDF0c8e4HjG2jbTqK5yRu2jbTqKAG7aNtOooAbto206igBu2jbTqKAG7aNtOooAbto206igBu2jbTqKAG7aNtOooAbto206igBu2jbTqKAG7aNtOooAbto206igBu2jbTqKAG7aNtOooAbto206igBu2jbTqKAG7aNtOooAbto206igBu2jbTqKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==",xx={level:Dd,activeElement:Ed,markConfig:Ud,col1Config:Td,col2Config:jd,sceneConfig:Id,bindings:kd,markLabelConfig:zd,colLabelConfig:Pd,decorations:Hd,layers:Od,activeDataset:Gd,colorMode:Nd,colorGradient:Ld,colorTint:Jd,thumbnail:Qd},yx=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:Gd,activeElement:Ed,bindings:kd,col1Config:Td,col2Config:jd,colLabelConfig:Pd,colorGradient:Ld,colorMode:Nd,colorTint:Jd,decorations:Hd,default:xx,layers:Od,level:Dd,markConfig:Ud,markLabelConfig:zd,sceneConfig:Id,thumbnail:Qd},Symbol.toStringTag,{value:"Module"})),Wd=2,Vd="mark",Xd={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/cigarette.glb",customModelHasMat:!0,customModelName:"cigarette"},Yd={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:.5,alignAnchor:"end",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1},Zd={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1},qd={background:"dark",hdriPreset:"city",focalLength:130},_d={markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:"numerical",c2AlignCount:null,markSizeX:null,markSizeY:"numerical",markSizeZ:null,markScale:null},$d={show:!0,slots:{top:"numerical",bottom:"categorical",left:null,right:null}},ef={show:!1,slots:{top:null,bottom:null,left:null,right:null}},tf=[],of=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],nf="garbageInOcean",sf="distinct",rf={from:"#EE6655",to:"#4488EE"},af=!1,lf="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCADnAUADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxKiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACitq18L6pcwCSOOMMyhljZ8FgenPQZ54JB4NZd5azWVzJbXMZjmjOGUkHH4jrQNpohooooEFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAddbazbSLMtzNMFL/L1bjk5wRgnrz1x+VY3iO++33cMm8PshCEhcfxMfQevv8AlgDpLHSXW0mAgj84kngfNg8YyPqa5jX7SazvVjnXaxTcBnPG4/4UramkptxsZtFFFMzCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPUrVQJ3OMqxwCuAf05rkPHRLapbsSTm2B5z/ff1rtLdWkOGHHHAOffpXGePY/K1a3UHP+jL2xj5mpsZzdFFFIQV0vhh7SOBRNaQzTST8M7YOABgZ6qOpyPx7VzVb2j6cJxbO0kqK0ZbcpAwdzADn6UMqDs7l3xNFYnTUZbSOC4Uja0UQjBUnocE5PU888fWuUrotcsngjuOJWROCzE4BDAHNc7SQ52voFFFFMgKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA9XsJF3HLMCQck5wOCO/Fcd8QM/21Dlgx+zLyCP7zeldbYJIgJUKfm6dOM+oNcn8QcjWLcHH/HqvQ5/iamxnMUUUUhBXe+G0ZtFsSvP38jJHR2964Ku+8Lljo1ooU4AYZ/4G3saaAm8WBhoF2AOAEJOB/fHHSvO69G8VKP8AhG7tgzcrHwSD/Gvoa85pAFFFFABRV7RtO/tO88gzpAoUszsM46AfqR1wK25fCcC28zJqsfnRrkRFBhuCeWzgdO2frSuUoSexy1FFFMkKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPU9OUOHEoyw67QDz+HNcl8QFC6xBgnBtlIznj5m9a7KzJMTA5AJx15/IiuP+ICbNStgAQPIAGf8AeNNjOXooopCCu68KSqml2wYD+L0/vH/GuFrufCaB9NtucEb+5/vH3poDV8Y4bwzdsGOAE45/vqK8xr0nxSu3wvehs5BQDjH8a+1ebUgCiiigC5pqyu8whkKHy+QByw3LwP0/Kukube/t7RRJdB93zKqwqcjjI6e/T/Gs3waM6jOO/wBnOP8Avpa7m2QqkQlVN4IXHGOvuDQ0XGTR5RRRRQQFFFAGTigAorr08PaEVRvt12wGBJgDOe/GDt9uW+vc87q9lFYXflQXSXMZUMHVSv4EevHqfzyAropwkldlKiiimSFFFFABRRRQAUUUUAFFFFAB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",bx={level:Wd,activeElement:Vd,markConfig:Xd,col1Config:Yd,col2Config:Zd,sceneConfig:qd,bindings:_d,markLabelConfig:$d,colLabelConfig:ef,decorations:tf,layers:of,activeDataset:nf,colorMode:sf,colorGradient:rf,colorTint:af,thumbnail:lf},Cx=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:nf,activeElement:Vd,bindings:_d,col1Config:Yd,col2Config:Zd,colLabelConfig:ef,colorGradient:rf,colorMode:sf,colorTint:af,decorations:tf,default:bx,layers:of,level:Wd,markConfig:Xd,markLabelConfig:$d,sceneConfig:qd,thumbnail:lf},Symbol.toStringTag,{value:"Module"})),cf=3,uf="mark",df={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:1.5,y:1.5,z:1.5},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/plastic_water_bottle.glb",customModelHasMat:!0,customModelName:"plastic_water_bottle",parts:[{id:"part_msavcbur_0",shape:"custom",customModelUrl:"/phys_tool/src/assets/models/plastic_water_bottle.glb",customModelHasMat:!0,customModelName:"plastic_water_bottle",offset:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0}},{id:"part_msavcbur_1",shape:"custom",offset:{x:0,y:.01,z:.04},size:{x:.35,y:.35,z:.35},orientation:{x:0,y:0,z:0},customModelUrl:"/phys_tool/src/assets/models/cigarette.glb",customModelHasMat:!0,customModelName:"cigarette",material:"original"}]},ff={arrangement:"scattering",color:"#5E5CE6",alignCount:3,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:5,y:5,z:5},scatterDensity:1,pilingCount:10,object:{id:"col1-object",name:"Object",shape:"custom",material:"original",color:"#9AA0A6",position:{x:0,y:0,z:0},size:{x:3.7,y:3.7,z:3.7},orientation:{x:18,y:29,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/game-ready_humpback_whale.glb",customModelHasMat:!0,customModelName:"game-ready_humpback_whale"},scatterExcludeObject:!0,scatterShowBounds:!1,scatterEven:!1,scatterOrientation:"random",scatterBoundingVolume:"sphere"},Af={arrangement:"alignment",color:"#9D9BF4",alignCount:5,alignAxis:"X",alignSpacing:.2,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10,object:null,scatterExcludeObject:!1},pf={background:"dark",hdriPreset:"city",focalLength:130},mf={markColor:null,markGeometry:null,scatterSize:null,scatterCount:"numerical",c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null},hf={},gf={scatterCount:8},xf={show:!1,slots:{top:[],bottom:[],left:[],right:[]}},yf={show:!0,slots:{top:["numerical"],bottom:["categorical"],left:[],right:[]}},bf=[],Cf=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],Ff="garbageInOcean",Bf="master",vf="continuous",Rf={from:"#ffffff",to:"#4488ee"},Sf=!0,Mf="data:image/jpeg;base64,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",Fx={level:cf,activeElement:uf,markConfig:df,col1Config:ff,col2Config:Af,sceneConfig:pf,bindings:mf,bindingDisabled:hf,bindingScale:gf,markLabelConfig:xf,colLabelConfig:yf,decorations:bf,layers:Cf,activeDataset:Ff,activeModelCollection:Bf,colorMode:vf,colorGradient:Rf,colorTint:Sf,thumbnail:Mf},Bx=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:Ff,activeElement:uf,activeModelCollection:Bf,bindingDisabled:hf,bindingScale:gf,bindings:mf,col1Config:ff,col2Config:Af,colLabelConfig:yf,colorGradient:Rf,colorMode:vf,colorTint:Sf,decorations:bf,default:Fx,layers:Cf,level:cf,markConfig:df,markLabelConfig:xf,sceneConfig:pf,thumbnail:Mf},Symbol.toStringTag,{value:"Module"})),vx=Object.assign({"./presets/A. CO2 Objects.json":tx,"./presets/B. Mushrooms Objects.json":nx,"./presets/C. Water Pollution Objects.json":sx,"./presets/C02_Emissions.json":ax,"./presets/CO2.json":cx,"./presets/Garbage in the Ocean.json":dx,"./presets/Mushroom_Danger_Score.json":Ax,"./presets/Orchestra.json":mx,"./presets/earth_concept.json":gx,"./presets/flowers.json":yx,"./presets/smoking.json":Cx,"./presets/whales.json":Bx}),ts=Object.entries(vx).map(([o,e])=>{const t=o.replace(/^.*\//,"").replace(/\.json$/,""),i=t.replace(/_/g," ").replace(/\b\w/g,n=>n.toUpperCase());return{id:`preset_${t}`,name:i,createdAt:"",data:e.default}});function Kf(o=320){const e=document.querySelector("canvas");if(e)try{const t=e.width||o,i=e.height||o,n=Math.min(1,o/t),r=Math.max(1,Math.round(t*n)),s=Math.max(1,Math.round(i*n)),a=document.createElement("canvas");a.width=r,a.height=s;const c=a.getContext("2d");return c?(c.drawImage(e,0,0,r,s),a.toDataURL("image/jpeg",.72)):void 0}catch{return}}function Rx(o,e){const t={...e,thumbnail:Kf()??e.thumbnail},i=JSON.stringify(t,null,2),n=new Blob([i],{type:"application/json"}),r=URL.createObjectURL(n),s=document.createElement("a");s.href=r,s.download=o.trim().replace(/\s+/g,"_")+".json",s.click(),URL.revokeObjectURL(r)}const zt={padding:"8px 16px",borderRadius:"8px",fontSize:"13px",fontWeight:"500",cursor:"pointer",fontFamily:"inherit",border:"none",transition:"opacity 0.1s"};function wf({onClose:o,children:e}){return l.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999},onClick:o,children:l.jsx("div",{style:{background:"#fff",borderRadius:"14px",width:"340px",maxWidth:"90vw",boxShadow:"0 16px 48px rgba(0,0,0,0.28)",overflow:"hidden",fontFamily:"inherit"},onClick:t=>t.stopPropagation(),children:e})})}function Sx({initialName:o,onSave:e,onClose:t}){const[i,n]=C.useState(o);function r(){const s=i.trim();s&&e(s)}return l.jsx(wf,{onClose:t,children:l.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"14px"},children:[l.jsx("div",{style:{fontSize:"15px",fontWeight:"700",color:"#1D1D1F"},children:"Save Scene"}),l.jsx("input",{type:"text",value:i,onChange:s=>n(s.target.value),onKeyDown:s=>{s.key==="Enter"&&r(),s.key==="Escape"&&t()},placeholder:"Scene name…",autoFocus:!0,style:{background:"#F2F2F7",border:"1.5px solid #D1D1D6",borderRadius:"8px",padding:"9px 12px",fontSize:"13px",color:"#1D1D1F",outline:"none",fontFamily:"inherit",width:"100%",boxSizing:"border-box"}}),l.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[l.jsx("button",{onClick:t,style:{...zt,background:"#F2F2F7",color:"#6C6C70"},children:"Cancel"}),l.jsx("button",{onClick:r,disabled:!i.trim(),style:{...zt,background:"#007AFF",color:"#fff",opacity:i.trim()?1:.4},children:"Save"})]})]})})}function Mx({children:o}){return l.jsx("div",{style:{padding:"8px 20px 4px",fontSize:"10px",fontWeight:"700",letterSpacing:"0.08em",textTransform:"uppercase",color:"#AEAEB2"},children:o})}function Kx({onLoad:o,onClose:e,currentName:t,currentData:i}){const[n,r]=C.useState(null),[s,a]=C.useState(null),[c,d]=C.useState("");function A(f,m){let y;try{y=JSON.parse(f)}catch{d("That is not valid JSON.");return}const g=F=>F&&typeof F=="object"?F:null,x=F=>!!F&&("markConfig"in F||"col1Config"in F||"sceneConfig"in F),h=g(y),p=g(h==null?void 0:h.data),b=x(h)?h:x(p)?p:null;if(!b){d("This JSON doesn’t look like a saved scene.");return}o({id:"import",name:m,createdAt:"",data:b})}function u(f,m){var g;const y=(g=f.data)==null?void 0:g.thumbnail;return l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"11px",padding:"10px 20px",cursor:"pointer",background:n===f.id?"#F8F8FA":"transparent",borderBottom:m?"none":"1px solid #F2F2F7",transition:"background 0.08s"},onClick:()=>o(f),onMouseEnter:()=>r(f.id),onMouseLeave:()=>r(null),children:[l.jsx("div",{style:{width:"62px",height:"44px",flexShrink:0,borderRadius:"6px",overflow:"hidden",background:"#F2F2F7",border:"1px solid #E5E5EA",display:"flex",alignItems:"center",justifyContent:"center"},children:y?l.jsx("img",{src:y,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):l.jsx("span",{style:{fontSize:"15px",color:"#C7C7CC"},children:"▦"})}),l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsx("div",{style:{fontSize:"13px",fontWeight:"600",color:"#1D1D1F",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:f.name}),f.createdAt&&l.jsx("div",{style:{fontSize:"10px",color:"#8E8E93",marginTop:"2px"},children:new Date(f.createdAt).toLocaleString()})]})]},f.id)}return l.jsx(wf,{onClose:e,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"16px 20px",borderBottom:"1px solid #E5E5EA",fontSize:"15px",fontWeight:"700",color:"#1D1D1F"},children:"Load Scene"}),s===null?l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{maxHeight:"380px",overflowY:"auto"},children:ts.length>0?l.jsxs(l.Fragment,{children:[l.jsx(Mx,{children:"Presets"}),ts.map((f,m)=>u(f,m===ts.length-1))]}):l.jsx("div",{style:{padding:"36px 20px",textAlign:"center",color:"#8E8E93",fontSize:"13px"},children:"No scenes yet"})}),l.jsxs("div",{style:{padding:"12px 20px",borderTop:"1px solid #E5E5EA",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px"},children:[l.jsxs("div",{style:{display:"flex",gap:"8px"},children:[l.jsx("button",{onClick:()=>Rx(t,i),title:"Export current scene as JSON",style:{...zt,background:"#F2F2F7",color:"#007AFF",padding:"7px 12px"},children:"Export"}),l.jsx("button",{onClick:()=>{d(""),a("")},title:"Load a scene from JSON (paste or file) — e.g. a session from Supabase",style:{...zt,background:"#F2F2F7",color:"#007AFF",padding:"7px 12px"},children:"Import"})]}),l.jsx("button",{onClick:e,style:{...zt,background:"#F2F2F7",color:"#6C6C70"},children:"Close"})]})]}):l.jsxs("div",{style:{padding:"16px 20px",display:"flex",flexDirection:"column",gap:"10px"},children:[l.jsx("div",{style:{fontSize:"12px",color:"#6C6C70",lineHeight:1.4},children:"Paste a session’s JSON."}),l.jsx("textarea",{value:s,onChange:f=>{a(f.target.value),d("")},placeholder:'{ "level": 2, "markConfig": { … }, … }',spellCheck:!1,style:{width:"100%",height:"150px",resize:"vertical",boxSizing:"border-box",border:"1px solid #D1D1D6",borderRadius:"8px",padding:"8px",fontSize:"11px",fontFamily:"monospace",color:"#1D1D1F",outline:"none"}}),c&&l.jsx("div",{style:{fontSize:"11px",color:"#FF3B30"},children:c}),l.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px"},children:[l.jsx("button",{onClick:()=>{a(null),d("")},style:{...zt,background:"#F2F2F7",color:"#6C6C70"},children:"Cancel"}),l.jsx("button",{onClick:()=>A(s,"Imported"),disabled:!s.trim(),style:{...zt,background:s.trim()?"#007AFF":"#C7C7CC",color:"#fff",cursor:s.trim()?"pointer":"default"},children:"Load"})]})]})]})})}const Df="phys_tool_saves";function wx(){try{return JSON.parse(localStorage.getItem(Df)??"[]")}catch{return[]}}function Da(o){localStorage.setItem(Df,JSON.stringify(o))}const Dx={VITE_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJycmljbnNocGJkYnd1dm16anpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUxNjE2NjIsImV4cCI6MjEwMDczNzY2Mn0.tB7M_DxnNc1wUJPByjrPMZj7DheCJylAHULZ9JTvWeg",VITE_SUPABASE_URL:"https://brricnshpbdbwuvmzjzc.supabase.co"},nr=Dx,Ef=nr.VITE_SUPABASE_URL,Ss=nr.VITE_SUPABASE_ANON_KEY,Ex=nr.VITE_STUDY_TABLE||"study_sessions";function Uf(){return!Ef.includes("YOUR-PROJECT")&&!Ss.includes("YOUR-ANON")}function Ux(){const o=new URLSearchParams(window.location.search),e=o.get("pid")||o.get("p");if(e){try{localStorage.setItem("study_pid",e)}catch{}return e}let t=null;try{t=localStorage.getItem("study_pid")}catch{}if(!t){t="P-"+Math.random().toString(36).slice(2,8);try{localStorage.setItem("study_pid",t)}catch{}}return t}function os(o,e){const t=new Date().toISOString().replace(/[:.]/g,"-"),i={participant:o,savedAt:new Date().toISOString(),data:e},n=new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),r=URL.createObjectURL(n),s=document.createElement("a");s.href=r,s.download=`phys-study-${o||"anon"}-${t}.json`,document.body.appendChild(s),s.click(),s.remove(),URL.revokeObjectURL(r)}async function Tx(o,e,t=""){if(Uf())try{const i=await fetch(`${Ef.replace(/\/+$/,"")}/rest/v1/${Ex}`,{method:"POST",headers:{"Content-Type":"application/json",apikey:Ss,Authorization:`Bearer ${Ss}`,Prefer:"return=minimal"},body:JSON.stringify({participant:o,label:t,data:e})});if(i.ok)return{ok:!0};const n=await i.text().catch(()=>"");return os(o,e),{ok:!1,downloaded:!0,error:`HTTP ${i.status} ${n}`.trim()}}catch(i){return os(o,e),{ok:!1,downloaded:!0,error:i.message}}return os(o,e),{ok:!1,downloaded:!0,error:"Study backend not configured."}}const jx="/phys_tool/assets/references/";function Ix(o){return/^(https?:)?\/\//.test(o)||o.startsWith("/")?o:jx+o}const yt={garbageInOcean:{label:"Garbage in the Ocean",categoricalCol:"Garbage Type",numericalCol:"Weight",layers:[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}]},mahler:{label:"Mahler's Symphony No. 8 Orchestra",categoricalCol:"Orchestra Section",numericalCol:"Number of Instruments",modelCollection:"malhers orchestra",layers:[{id:"1",name:"Strings",percentage:80,color:"#C8A882"},{id:"2",name:"Brass",percentage:28,color:"#D4A017"},{id:"3",name:"Woodwinds",percentage:20,color:"#4A7C59"},{id:"4",name:"Percussion",percentage:10,color:"#5C6B7A"},{id:"5",name:"Piano & Harp",percentage:4,color:"#8B7BAB"}],reference:{title:"Mahler's Symphony No. 8 Orchestra",image:"malher.png",link:"https://www.mahlerfoundation.org/mahler/compositions/symphony-no-8/symphony-no-8-orchestration/"}},co2Emissions:{label:"CO₂ Emissions by Country",categoricalCol:"Country",numericalCol:"CO₂ Emissions (Mt)",modelCollection:"CO2",layers:[{id:"1",name:"Germany",percentage:572.32,color:"#E63946"},{id:"2",name:"Canada",percentage:533.34,color:"#F4A261"},{id:"3",name:"Turkey",percentage:513.03,color:"#E9C46A"},{id:"4",name:"Brazil",percentage:483.01,color:"#2A9D8F"},{id:"5",name:"South Africa",percentage:439.83,color:"#264653"},{id:"6",name:"Australia",percentage:386.73,color:"#E76F51"},{id:"7",name:"Vietnam",percentage:370.93,color:"#8AB17D"},{id:"8",name:"United Kingdom",percentage:312.91,color:"#457B9D"},{id:"9",name:"France",percentage:264.16,color:"#6A4C93"},{id:"10",name:"Qatar",percentage:125.81,color:"#B5838D"},{id:"11",name:"Greece",percentage:53.36,color:"#1D3557"},{id:"12",name:"Denmark",percentage:24.4,color:"#A8DADC"}],reference:{title:"Annual CO₂ emissions 2024",image:"co2-emissions.png",link:"https://ourworldindata.org/grapher/annual-co2-emissions-per-country?country=~OWID_WRL&tab=map&time=latest"}},mushroomToxicity:{label:"Mushroom danger score",categoricalCol:"Name",numericalCol:"Danger Score",modelCollection:"mushrooms",layers:[{id:"1",name:"Death cap (Amanita phalloides)",percentage:10,color:"#7C8C4E"},{id:"2",name:"Destroying angel (Amanita virosa)",percentage:10,color:"#F0ECE0"},{id:"3",name:"Funeral bell (Galerina marginata)",percentage:9,color:"#6B4E31"},{id:"4",name:"Deadly webcap (Cortinarius rubellus)",percentage:8,color:"#A0522D"},{id:"5",name:"False morel (Gyromitra esculenta)",percentage:6,color:"#8B4A2F"},{id:"6",name:"Panther cap (Amanita pantherina)",percentage:5,color:"#C2A878"},{id:"7",name:"Fly agaric (Amanita muscaria)",percentage:3,color:"#D62828"},{id:"8",name:"Satan's bolete (Rubroboletus satanas)",percentage:4,color:"#C77B7B"},{id:"9",name:"Jack-o'-lantern (Omphalotus olearius)",percentage:4,color:"#E68A00"},{id:"10",name:"Ivory funnel (Clitocybe dealbata)",percentage:7,color:"#E4DAC4"},{id:"11",name:"Fool's funnel (Clitocybe rivulosa)",percentage:7,color:"#CFC8B8"},{id:"12",name:"The sickener (Russula emetica)",percentage:2,color:"#E0455E"}],reference:{title:"Mushroom Danger Score",image:"mushroom-danger.png",link:"https://namyco.org/interests/toxicology/mushroom-poisoning-syndromes/"}},oceanPlastic:{label:"Surface Plastic Mass across the world's Oceans",categoricalCol:"Ocean",numericalCol:"Plastic Pieces (billions)",modelCollection:"sea pollution",layers:[{id:"1",name:"North Pacific",percentage:1990,color:"#023E8A"},{id:"2",name:"Indian Ocean",percentage:1300,color:"#0077B6"},{id:"3",name:"North Atlantic",percentage:930,color:"#0096C7"},{id:"4",name:"South Pacific",percentage:491,color:"#00B4D8"},{id:"5",name:"Mediterranean Sea",percentage:247,color:"#48CAE4"},{id:"6",name:"South Atlantic",percentage:297,color:"#90E0EF"}],reference:{title:"Surface Plastic Mass across the world's Oceans",image:"plastic-oceans.png",link:"https://ourworldindata.org/grapher/surface-plastic-mass-by-ocean"}},nantesHousing:{label:"Nantes Metropolitan Area Housing",categoricalCol:"Tenure Type",numericalCol:"Share (%)",modelCollection:"nantes logements",layers:[{id:"1",name:"Homeowners",percentage:52.2,color:"#E76F51"},{id:"2",name:"Private-sector tenants",percentage:28,color:"#2A9D8F"},{id:"3",name:"Social housing tenants (SRU law)",percentage:17.5,color:"#457B9D"}],reference:{title:"Nantes Metropolitan Area — 298,700 housing units",image:"nantes-housing.png",link:"http://rokovoko.fr/realisations/la-cantine"}},whoAirQuality:{label:"WHO Ambient Air Quality Database",categoricalCol:"City",numericalCol:"Pollution concentration (PM2.5)",modelCollection:"Air Pollution",layers:[{id:"1",name:"Copenhagen",percentage:9,color:"#43A047"},{id:"2",name:"Stockholm",percentage:8,color:"#2E7D32"},{id:"3",name:"Paris",percentage:14,color:"#C0CA33"},{id:"4",name:"London",percentage:13,color:"#9CCC3C"},{id:"5",name:"Berlin",percentage:12,color:"#7CB342"},{id:"6",name:"Athens",percentage:22,color:"#FBC02D"},{id:"7",name:"Istanbul",percentage:41,color:"#F4511E"},{id:"8",name:"Mexico City",percentage:24,color:"#FB8C00"},{id:"9",name:"São Paulo",percentage:19,color:"#FDD835"},{id:"10",name:"Beijing",percentage:55,color:"#E53935"},{id:"11",name:"Delhi",percentage:92,color:"#8E0000"},{id:"12",name:"Cairo",percentage:67,color:"#C62828"}],reference:{title:"WHO Ambient Air Quality Database — annual mean PM2.5 (µg/m³)",image:"",link:"https://www.who.int/data/gho/data/themes/air-pollution/who-air-quality-database"}}};function kx({src:o,alt:e}){const[t,i]=C.useState(!0);return C.useEffect(()=>{i(!0)},[o]),t?l.jsx("img",{src:o,alt:e,onError:()=>i(!1),style:{width:"100%",borderRadius:"8px",display:"block",background:"#F2F2F7",border:"1px solid #E5E5EA"}}):null}function zx({datasetKey:o}){var t;const e=(t=yt[o])==null?void 0:t.reference;return e?l.jsxs("div",{style:{borderTop:"1px solid #E5E5EA",padding:"14px",flexShrink:0,maxHeight:"46%",overflowY:"auto",display:"flex",flexDirection:"column",gap:"8px"},children:[l.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600"},children:"About this dataset"}),l.jsx("div",{style:{fontSize:"13px",fontWeight:"600",color:"#1D1D1F",lineHeight:1.3},children:e.title}),e.image&&l.jsx(kx,{src:Ix(e.image),alt:e.title}),e.link&&l.jsxs("a",{href:e.link,target:"_blank",rel:"noreferrer",style:{fontSize:"11px",color:"#007AFF",textDecoration:"none",wordBreak:"break-all",lineHeight:1.5},children:[e.link," ↗"]})]}):null}function Px({label:o,type:e,varName:t}){const i=`phys-var/${e}`;return l.jsxs("div",{draggable:!0,onDragStart:n=>{n.dataTransfer.setData("phys-var/name",t),n.dataTransfer.setData(i,"1"),n.dataTransfer.effectAllowed="copy"},title:`Drag to bind ${o}`,style:{display:"inline-flex",alignItems:"center",gap:"5px",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"6px 11px",fontSize:"12.5px",color:"#1D1D1F",fontWeight:"600",cursor:"grab",userSelect:"none",whiteSpace:"nowrap"},children:[l.jsx("span",{style:{fontSize:"10px",color:"#8E8E93",fontWeight:"700"},children:e==="numerical"?"#":"Aa"}),o]})}function Hx(o){var e;return((e=yt[o])==null?void 0:e.modelCollection)??Jo}function Ox({layers:o,onChange:e,onDatasetChange:t,selectedDataset:i="garbageInOcean",modelCollection:n=Jo,onModelCollectionChange:r}){const s=yt[i]??yt.garbageInOcean,a=C.useMemo(()=>{var S;const R=((S=yt[i])==null?void 0:S.layers)??[],K=o.filter(w=>!R.some(D=>D.id===w.id));return R.length?[...R,...K]:o},[i,o]),c=a.length,d=C.useMemo(()=>new Set(o.map(R=>R.id)),[o]),A=C.useRef(null),[u,f]=C.useState(null),[m,y]=C.useState(null),g=R=>{R.size!==0&&e(a.filter(K=>R.has(K.id)))};function x(R){e(yt[R].layers),t==null||t(R),r==null||r(yt[R].modelCollection??Jo)}const h=R=>g(new Set(a.slice(0,R).map(K=>K.id))),p=(R,K)=>{var M;const S=Math.min(R,K),w=Math.max(R,K),D=new Set;return(M=A.current)==null||M.querySelectorAll("[data-rowid]").forEach(j=>{const I=j.getBoundingClientRect();I.bottom>=S&&I.top<=w&&D.add(j.dataset.rowid)}),D},b=R=>{const K=R.clientY;let S=!1;f(p(K,K));const w=M=>{Math.abs(M.clientY-K)>4&&(S=!0),f(p(K,M.clientY));const j=A.current;if(j){const I=j.getBoundingClientRect();y({top:Math.min(K,M.clientY)-I.top,height:Math.abs(M.clientY-K)})}},D=M=>{if(window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",D),S)g(p(K,M.clientY));else{const j=new Set(d);p(M.clientY,M.clientY).forEach(I=>j.has(I)?j.delete(I):j.add(I)),g(j)}f(null),y(null)};window.addEventListener("mousemove",w),window.addEventListener("mouseup",D),R.preventDefault()},F=u??d,B={padding:"6px 8px",verticalAlign:"middle",fontSize:"12px",color:"#1D1D1F"},v={fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600"};return l.jsxs("div",{style:{padding:"14px 14px 16px",display:"flex",flexDirection:"column",gap:"12px"},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[l.jsx("span",{style:v,children:"Dataset"}),l.jsx("select",{value:i,onChange:R=>x(R.target.value),style:{background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",fontFamily:"inherit",cursor:"pointer",outline:"none",width:"100%"},children:Object.entries(yt).map(([R,K])=>l.jsx("option",{value:R,children:K.label},R))})]}),xi.length>1&&l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[l.jsx("span",{style:v,children:"Models"}),l.jsx("select",{value:xi.includes(n)?n:Jo,onChange:R=>r==null?void 0:r(R.target.value),style:{background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",fontFamily:"inherit",cursor:"pointer",outline:"none",width:"100%"},children:xi.map(R=>l.jsx("option",{value:R,children:YA(R)},R))})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},children:[l.jsx("span",{style:v,children:"Rows used"}),l.jsxs("span",{style:{fontSize:"12px",color:"#6C6C70",fontWeight:"600"},children:[d.size," / ",c]})]}),l.jsx("input",{type:"range",min:1,max:Math.max(1,c),value:Math.min(d.size||1,c),onChange:R=>h(Number(R.target.value)),style:{width:"100%",accentColor:"#007AFF",cursor:"pointer"}})]}),l.jsxs("div",{ref:A,onMouseDown:b,style:{position:"relative",userSelect:"none",cursor:"crosshair"},children:[m&&l.jsx("div",{style:{position:"absolute",left:0,right:0,top:m.top,height:m.height,background:"rgba(0,122,255,0.12)",border:"1px solid rgba(0,122,255,0.5)",borderRadius:"4px",pointerEvents:"none",zIndex:2}}),l.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[l.jsx("thead",{children:l.jsxs("tr",{style:{borderBottom:"1px solid #E5E5EA"},children:[l.jsx("th",{style:{...B,textAlign:"left",color:"#8E8E93",fontWeight:"500",fontSize:"11px"},children:s.categoricalCol}),l.jsx("th",{style:{...B,textAlign:"right",color:"#8E8E93",fontWeight:"500",fontSize:"11px",width:"60px"},children:s.numericalCol})]})}),l.jsx("tbody",{children:a.map((R,K)=>{const S=F.has(R.id);return l.jsxs("tr",{"data-rowid":R.id,style:{borderBottom:"1px solid #F2F2F7",background:K%2===0?"transparent":"#FAFAFA",opacity:S?1:.32,transition:"opacity 0.1s"},children:[l.jsx("td",{style:B,children:R.name}),l.jsx("td",{style:{...B,textAlign:"right",color:"#6C6C70"},children:R.percentage})]},R.id)})})]})]})]})}const Hn=110,ns=46;function Ea(o,e,t,i){return Array.from({length:o},(n,r)=>{const a=(o===1?e:e-t/2+t/(o-1)*r)*Math.PI/180;return{x:Math.cos(a)*i,y:Math.sin(a)*i}})}const Ua={position:"fixed",background:"#fff",borderRadius:"14px",boxShadow:"0 6px 28px rgba(0,0,0,0.22)",padding:"12px 14px",zIndex:1002,pointerEvents:"all",minWidth:"150px"},is={display:"flex",alignItems:"center",gap:"8px",width:"100%",textAlign:"left",background:"#F2F2F7",border:"1px solid #E5E5EA",borderRadius:"8px",padding:"8px 12px",fontSize:"12px",fontWeight:"500",color:"#1D1D1F",cursor:"pointer",fontFamily:"inherit",transition:"background 0.12s"};function Ta({children:o}){return l.jsx("div",{style:{fontSize:"10px",color:"#AEAEB2",fontWeight:"700",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"8px"},children:o})}function Gx({x:o,y:e,varName:t,varType:i,level:n,col1Arrangement:r,markIsCompound:s,onBind:a,onColorBind:c,onBindLabel:d,onClose:A}){const[u,f]=C.useState("radial"),[m,y]=C.useState("mark");C.useEffect(()=>{function E(P){P.key==="Escape"&&(u!=="radial"?f("radial"):A())}return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[u,A]);const g=[{action:"bind",bindKey:"markColor",label:"Color",icon:"●",section:"mark",varTypes:["numerical","categorical"]},{action:"bind",bindKey:"markGeometry",label:"Geometry",icon:"◆",section:"mark",varTypes:["categorical"]},{action:"bind",bindKey:"markSizeX",label:"Width",icon:"X",section:"mark",varTypes:["numerical"]},{action:"bind",bindKey:"markSizeY",label:"Height",icon:"Y",section:"mark",varTypes:["numerical"]},{action:"bind",bindKey:"markSizeZ",label:"Depth",icon:"Z",section:"mark",varTypes:["numerical"]},{action:"bind",bindKey:"markScale",label:"Scale",icon:"⤢",section:"mark",varTypes:["numerical"]},{action:"label",label:"Label",icon:"Aa",section:"mark",varTypes:["numerical","categorical"]},{action:"bind",bindKey:"scatterSize",label:"Scatter Size",icon:"⊞",section:"collection",varTypes:["numerical"],arrangements:["scattering"],minLevel:2},{action:"bind",bindKey:"scatterCount",label:"Population",icon:"#",section:"collection",varTypes:["numerical"],arrangements:["scattering","stacking","adjacent","surface"],minLevel:2},{action:"label",label:"Label",icon:"Aa",section:"collection",varTypes:["numerical","categorical"],minLevel:3}];function x(E){var P;return!(!E.varTypes.includes(i)||s&&E.action==="bind"&&E.bindKey==="markGeometry"||E.minLevel!==void 0&&n<E.minLevel||"arrangements"in E&&E.arrangements!==void 0&&!E.arrangements.includes(r)||"excludeArrangements"in E&&((P=E.excludeArrangements)!=null&&P.includes(r)))}const h=["Scale","Width","Height","Depth","Color","Geometry","Label"],p=E=>{const P=h.indexOf(E.label);return P===-1?h.length:P},F=g.filter(E=>E.section==="mark"&&x(E)).sort((E,P)=>p(E)-p(P)),B=g.filter(E=>E.section==="collection"&&x(E)),v=270,R=90,K=F.length>3?150:90,S=Ea(F.length,v,K,Hn),w=Ea(B.length,R,70,Hn),D=[...F.map((E,P)=>({opt:E,pos:S[P]})),...B.map((E,P)=>({opt:E,pos:w[P]}))],M=Hn*.3,j={position:"absolute",fontSize:"13px",fontWeight:"700",letterSpacing:"0.1em",textTransform:"uppercase",whiteSpace:"nowrap",transform:"translate(-50%, -50%)"},I={left:0,top:-M},H={left:0,top:M},z={top:0,left:-130,height:"1px",width:(Hn+20)*2,transform:"translateY(-50%)"};function k(E){if(E.action==="bind"&&E.bindKey==="markColor"){y("mark"),f("colorMode");return}if(E.action==="label"){y(E.section),f("labelPos");return}E.action==="bind"&&a(E.bindKey,t),A()}const T=B.length>0;if(u==="colorMode")return l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3},onClick:()=>f("radial")}),l.jsxs("div",{style:{...Ua,left:o-75,top:e-70},children:[l.jsx(Ta,{children:"Color mode"}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[l.jsxs("button",{style:is,onClick:()=>{c(t,"distinct"),A()},onMouseEnter:E=>E.currentTarget.style.background="#E5E5EA",onMouseLeave:E=>E.currentTarget.style.background="#F2F2F7",children:[l.jsx("span",{style:{fontSize:"14px"},children:"◈"})," Distinct"]}),l.jsxs("button",{style:is,onClick:()=>{c(t,"continuous"),A()},onMouseEnter:E=>E.currentTarget.style.background="#E5E5EA",onMouseLeave:E=>E.currentTarget.style.background="#F2F2F7",children:[l.jsx("span",{style:{fontSize:"14px"},children:"▬"})," Continuous"]})]})]})]});if(u==="labelPos"){const E={...is,justifyContent:"center",width:"88px",height:"34px",padding:"0 8px",whiteSpace:"nowrap",flexShrink:0},P=(W,Q,L)=>l.jsxs("button",{style:E,onClick:()=>{d(m,t,W),A()},onMouseEnter:Z=>Z.currentTarget.style.background="#E5E5EA",onMouseLeave:Z=>Z.currentTarget.style.background="#F2F2F7",children:[Q," ",L]},W),G=m==="mark"&&r==="scattering",J=m==="mark"&&r==="surface";return l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3},onClick:()=>f("radial")}),l.jsxs("div",{style:{...Ua,left:o-100,top:e-110},children:[l.jsx(Ta,{children:"Label position"}),l.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:J?P("top","↑","Above"):G?l.jsxs(l.Fragment,{children:[P("top","↑","Top"),P("bottom","↓","Below")]}):l.jsxs(l.Fragment,{children:[P("top","↑","Top"),l.jsxs("div",{style:{display:"flex",gap:"4px"},children:[P("left","←","Left"),P("right","→","Right")]}),P("bottom","↓","Bottom")]})})]})]})}return l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3},onClick:A}),l.jsxs("div",{style:{position:"fixed",left:o,top:e,transform:"translate(-50%, -50%)",width:0,height:0,zIndex:1001,pointerEvents:"none"},children:[T&&l.jsx("div",{style:{position:"absolute",background:"#E5E5EA",...z}}),l.jsx("div",{style:{...j,color:"#007AFF",...I},children:"Mark"}),T&&l.jsx("div",{style:{...j,color:"#0D9488",...H},children:"Collection"}),l.jsx("div",{style:{position:"absolute",width:10,height:10,background:"#fff",borderRadius:"50%",transform:"translate(-50%, -50%)"}}),D.map(({opt:E,pos:P},G)=>{const W=E.section==="collection"?"#0D9488":"#007AFF";return l.jsxs("button",{onClick:()=>k(E),style:{position:"absolute",left:P.x,top:P.y,transform:"translate(-50%, -50%)",width:ns,height:ns,background:"#fff",border:`2px solid ${W}`,borderRadius:"50%",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1px",boxShadow:"0 4px 16px rgba(0,0,0,0.16)",pointerEvents:"all",fontFamily:"inherit"},onMouseEnter:Q=>{const L=Q.currentTarget;L.style.transform="translate(-50%, -50%) scale(1.13)",L.style.boxShadow="0 6px 20px rgba(0,0,0,0.22)"},onMouseLeave:Q=>{const L=Q.currentTarget;L.style.transform="translate(-50%, -50%)",L.style.boxShadow="0 4px 16px rgba(0,0,0,0.16)"},children:[l.jsx("span",{style:{fontSize:E.label==="Scale"?"19px":"14px",color:W,lineHeight:1},children:E.icon}),l.jsx("span",{style:{fontSize:E.label.length>8&&!E.label.includes(" ")?"7px":"8px",color:"#6C6C70",fontWeight:"600",lineHeight:1.15,textAlign:"center",maxWidth:E.label.length>8&&E.label.includes(" ")?ns-4:void 0},children:E.label})]},G)})]})]})}const Nx={markColor:"Color",markGeometry:"Geometry",scatterSize:"Scatter Size",scatterCount:"Population",c1AlignCount:"Count",c2AlignCount:"Count",markSizeX:"Width",markSizeY:"Height",markSizeZ:"Depth",markScale:"Scale"},Lx=new Set(["markScale","markSizeX","markSizeY","markSizeZ","scatterSize","scatterCount"]);function Jx({value:o,disabled:e,onCommit:t}){const[i,n]=C.useState(String(o)),[r,s]=C.useState(!1),a=C.useRef(null);return C.useEffect(()=>{r||n(String(o))},[o,r]),C.useEffect(()=>{var c,d;r&&((c=a.current)==null||c.focus(),(d=a.current)==null||d.select())},[r]),!r&&o===1?l.jsx("button",{onClick:c=>{c.stopPropagation(),s(!0)},title:"Set a multiplier ( ƒ2 = ×2, ƒ0.5 = ÷2 )",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"16px",height:"16px",borderRadius:"50%",flexShrink:0,background:"none",border:"none",cursor:"pointer",padding:0,color:e?"#CFCFD6":"#AEC8F2",fontSize:"14px",fontWeight:"700",fontStyle:"italic",lineHeight:1,fontFamily:"inherit"},onMouseEnter:c=>{e||(c.currentTarget.style.color="#4A90E2",c.currentTarget.style.background="#DCEBFF")},onMouseLeave:c=>{c.currentTarget.style.color=e?"#CFCFD6":"#AEC8F2",c.currentTarget.style.background="none"},children:"ƒ"}):l.jsxs("span",{onClick:c=>c.stopPropagation(),title:"Multiplier ( ƒ2 = ×2, ƒ0.5 = ÷2 )",style:{display:"inline-flex",alignItems:"center",gap:"2px",background:e?"#E7E7EC":"#FFFFFF",border:`1px solid ${e?"#D8D8DE":"#C4DBFF"}`,borderRadius:"999px",padding:"1px 7px 1px 7px"},children:[l.jsx("span",{style:{color:e?"#B4B4BC":"#7FAEF0",fontWeight:"700",fontStyle:"italic",fontSize:"13px",lineHeight:1},children:"ƒ"}),l.jsx("input",{ref:a,type:"text",inputMode:"decimal",value:i,onFocus:c=>{s(!0),c.currentTarget.select()},onChange:c=>{const d=c.target.value;n(d);const A=Number(d);d.trim()!==""&&Number.isFinite(A)&&A>0&&t(A)},onBlur:()=>{s(!1);const c=Number(i),d=i.trim()!==""&&Number.isFinite(c)&&c>0?c:o;n(String(d)),d!==o&&t(d)},style:{width:"24px",border:"none",background:"transparent",color:e?"#AEAEB2":"#0A66DA",fontSize:"12px",fontWeight:"700",textAlign:"center",padding:"0",fontFamily:"inherit",outline:"none"}})]})}const ja={markColor:"",markGeometry:"",markSizeX:"",markSizeY:"",markSizeZ:"",markScale:"",scatterSize:"",scatterCount:"",c1AlignCount:"Lv2",c2AlignCount:"Lv3"},Ia={garbageInOcean:{numerical:"Weight",categorical:"Garbage Type"},mahler:{numerical:"Number of Instruments",categorical:"Orchestra Section"},co2Emissions:{numerical:"CO₂ Emissions (Mt)",categorical:"Country"},mushroomToxicity:{numerical:"Danger Score",categorical:"Name"},oceanPlastic:{numerical:"Plastic Pieces (billions)",categorical:"Ocean"},nantesHousing:{numerical:"Share (%)",categorical:"Tenure Type"},whoAirQuality:{numerical:"Pollution concentration (PM2.5)",categorical:"City"}},Qx={garbageInOcean:"Garbage in the Ocean",mahler:"Mahler's Symphony No. 8 Orchestra",co2Emissions:"CO₂ Emissions by Country",mushroomToxicity:"Mushroom danger score",oceanPlastic:"Surface Plastic Mass across the world's Oceans",nantesHousing:"Nantes Metropolitan Area Housing",whoAirQuality:"WHO Ambient Air Quality Database"},ka=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],za={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},Pa={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},Ha={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Oa={background:"dark",hdriPreset:"city",focalLength:130},On={show:!1,slots:{top:[],bottom:[],left:[],right:[]}};function Wx(){const[o,e]=C.useState(1),[t,i]=C.useState("mark"),[n,r]=C.useState(ka),[s,a]=C.useState(za),[c,d]=C.useState(Pa),[A,u]=C.useState(Ha),[f,m]=C.useState(Oa),[y,g]=C.useState("garbageInOcean"),[x,h]=C.useState(Jo),p=Ia[y]??Ia.garbageInOcean,b=[{label:p.numerical,type:"numerical",varName:"numerical"},{label:p.categorical,type:"categorical",varName:"categorical"}],[F,B]=C.useState({markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null}),[v,R]=C.useState({}),[K,S]=C.useState({}),[w,D]=C.useState(On),[M,j]=C.useState(On),[I,H]=C.useState("distinct"),[z,k]=C.useState({from:"#EE6655",to:"#4488EE"}),[T,E]=C.useState(!1),[P,G]=C.useState(void 0),[J,W]=C.useState(0),[Q,L]=C.useState([]),[Z,oe]=C.useState(null),[se,X]=C.useState(null),[fe,nt]=C.useState(!1),[Et,Co]=C.useState(null),[Qt,Fo]=C.useState(null),[ze,Bo]=C.useState(null),[ir,Ut]=C.useState("none"),[Je,pi]=C.useState("idle"),[sr,Tf]=C.useState(!1),[At,jf]=C.useState(0),sn=C.useRef(null);function rn(O,N){B(V=>{const _={...V,[O]:N};return N!==null&&(O==="markSizeX"||O==="markSizeY"||O==="markSizeZ")&&(O!=="markSizeX"&&(_.markSizeX=null),O!=="markSizeY"&&(_.markSizeY=null),O!=="markSizeZ"&&(_.markSizeZ=null)),_}),R(V=>{if(!(O in V))return V;const _={...V};return delete _[O],_}),N===null&&S(V=>{if(!(O in V))return V;const _={...V};return delete _[O],_}),O==="markGeometry"&&N!==null&&(i("mark"),G("Geometry")),O==="markGeometry"&&N===null&&a(V=>({...V,categoryShapes:void 0})),N!==null&&d(V=>({...V,alignCount:n.length})),O==="scatterSize"&&N!==null&&u(V=>({...V,alignCount:n.length}))}const rr=C.useMemo(()=>{const O={...F};return Object.keys(O).forEach(N=>{v[N]&&(O[N]=null)}),O},[F,v]);function If(O){F[O]!==null&&R(N=>({...N,[O]:!N[O]}))}function kf(O,N){S(V=>({...V,[O]:N}))}function zf(O,N){H(N),rn("markColor",O),N==="continuous"&&(i("mark"),G("Material"))}function Pf(O,N,V){const _=ge=>{const Me=ge.slots[V];return Me.includes(N)?ge:{...ge,show:!0,slots:{...ge.slots,[V]:[...Me,N]}}};O==="mark"?D(_):j(_)}function Hf(){const O=`dec_${Date.now()}`,N={id:O,shape:"sphere",material:"plastic",color:"#888888",position:{x:0,y:-1.5,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}};L(V=>[...V,N]),oe(O)}function Of(O){L(N=>N.filter(V=>V.id!==O)),oe(N=>N===O?null:N)}function ar(O){L(N=>N.map(V=>V.id===O.id?O:V))}const Gf=C.useRef(0),lr=()=>`part_${Date.now().toString(36)}_${Gf.current++}`;function Nf(O,N){return{id:lr(),shape:O,offset:{x:0,y:N,z:0},size:{x:.6,y:.6,z:.6},orientation:{x:0,y:0,z:0}}}function Lf(O){return{id:lr(),shape:O.shape,customModelUrl:O.customModelUrl,customModelHasMat:O.customModelHasMat,customModelName:O.customModelName,offset:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0}}}function Jf(){let O="";a(N=>{const V=N.parts&&N.parts.length?N.parts:[Lf(N)],_=Nf("sphere",.06);return O=_.id,{...N,parts:[...V,_]}}),i("mark"),X(O)}function Qf(O){a(N=>{if(!N.parts)return N;const V=N.parts.filter(_=>_.id!==O);if(V.length<=1){const _=V[0],ge={...N,parts:void 0};return _&&(ge.shape=_.shape,ge.customModelUrl=_.customModelUrl,ge.customModelHasMat=_.customModelHasMat,ge.customModelName=_.customModelName),ge}return{...N,parts:V}}),X(N=>N===O?null:N)}function Wf(O,N){a(V=>V.parts?{...V,parts:V.parts.map(_=>_.id===O?{..._,...N}:_)}:V)}function Vf(O,N){L(V=>V.map(_=>_.id===O?{..._,name:N}:_))}function mi(){return{level:o,activeElement:t,markConfig:s,col1Config:c,col2Config:A,sceneConfig:f,bindings:F,bindingDisabled:v,bindingScale:K,markLabelConfig:w,colLabelConfig:M,decorations:Q,layers:n,activeDataset:y,activeModelCollection:x,colorMode:I,colorGradient:z,colorTint:T}}async function Xf(){if(Je==="saving")return;pi("saving");const O=Ux(),N=ze??(y||""),V=await Tx(O,mi(),N),_=V.ok?"sent":V.downloaded?"downloaded":"error";pi(_),V.ok||console.warn("[study] submit fell back:",V.error),setTimeout(()=>pi("idle"),3500)}function cr(O){const N=wx(),V={...mi(),thumbnail:Kf()};if(Qt){const Me=N.findIndex(ee=>ee.id===Qt);if(Me>=0){N[Me]={...N[Me],name:O,data:V},Da(N),Bo(O),Ut("none");return}}const _=`save_${Date.now()}`,ge={id:_,name:O,createdAt:new Date().toISOString(),data:V};Da([...N,ge]),Fo(_),Bo(O),Ut("none")}function Yf(){Qt&&ze?cr(ze):Ut("save")}function Zf(O){const N=O.data;N.level!=null&&e(N.level),N.activeElement!=null&&i(N.activeElement);const V=yi(N.markConfig??za);if(V.categoryShapes){const ne={};for(const[pt,vo]of Object.entries(V.categoryShapes))ne[pt]=yi(vo);a({...V,categoryShapes:ne})}else a(V);const _=(N.decorations??[]).map(ne=>yi(ne)),ge=new Set,Me=ne=>{if(!ne||ne.object)return ne;const pt=ne.surfaceTargetId||ne.scatterExclusionId;if(!pt)return ne;const vo=_.find($f=>$f.id===pt);return vo?(ge.add(vo.id),{...ne,object:vo,scatterExcludeObject:!!ne.scatterExclusionId,surfaceTargetId:null,scatterExclusionId:null}):ne};d(Me(N.col1Config??Pa)),u(Me(N.col2Config??Ha));const ee=N.sceneConfig??Oa,re=ee.sceneLabelOcclude;m({...ee,sceneLabelOcclude:typeof re=="boolean"?re?"optimized":"off":re});const le=ne=>ne==="garbageType"||ne==="section"?"categorical":ne==="weight"||ne==="count"?"numerical":ne,qe=N.bindings??{};B({markColor:le(qe.markColor??null),markGeometry:le(qe.markGeometry??null),scatterSize:le(qe.scatterSize??null),scatterCount:le(qe.scatterCount??null),c1AlignCount:le(qe.c1AlignCount??null),c2AlignCount:le(qe.c2AlignCount??null),markSizeX:le(qe.markSizeX??null),markSizeY:le(qe.markSizeY??null),markSizeZ:le(qe.markSizeZ??null),markScale:le(qe.markScale??null)}),R(N.bindingDisabled??{}),S(N.bindingScale??{});const an=ne=>(Array.isArray(ne)?ne:[ne]).map(pt=>le(pt)).filter(pt=>pt!=null),ur=ne=>({...ne,slots:{top:an(ne.slots.top),bottom:an(ne.slots.bottom),left:an(ne.slots.left),right:an(ne.slots.right)}});D(N.markLabelConfig?ur(N.markLabelConfig):On),j(N.colLabelConfig?ur(N.colLabelConfig):On),L(_.filter(ne=>!ge.has(ne.id))),r(N.layers??ka),N.activeDataset!=null?(g(N.activeDataset),h(N.activeModelCollection??Hx(N.activeDataset))):N.activeModelCollection!=null&&h(N.activeModelCollection),H(N.colorMode??"distinct"),k(N.colorGradient??{from:"#EE6655",to:"#4488EE"}),E(N.colorTint??!1),Fo(O.id),Bo(O.name),oe(null),X(null),Ut("none")}function qf(){o===1&&(e(2),i("collection1")),o===2&&(e(3),i("collection2"))}function _f(){o===3&&(e(2),i("collection1")),o===2&&(e(1),i("mark"))}return l.jsxs("div",{style:{display:"flex",width:"100vw",height:"100vh",background:"#F2F2F7",overflow:"hidden"},children:[l.jsxs("div",{style:{width:"260px",flexShrink:0,borderRight:"1px solid #E5E5EA",background:"#FFFFFF",display:"flex",flexDirection:"column",overflow:"hidden"},children:[l.jsxs("div",{style:{display:"flex",gap:"6px",padding:"8px 10px",borderBottom:"1px solid #E5E5EA",flexShrink:0,flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",gap:"6px"},children:[l.jsx("button",{onClick:Yf,title:ze?`Save to "${ze}"`:"Save scene",style:{flex:1,background:"#F2F2F7",color:"#1D1D1F",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"6px 8px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:ze||"Save"}),l.jsx("button",{onClick:()=>Ut("load"),style:{flex:1,background:"#F2F2F7",color:"#1D1D1F",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"6px 8px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit"},children:"Load"})]}),l.jsx("button",{onClick:Xf,disabled:Je==="saving",title:Uf()?"Submit your work to the study":"Study backend not configured — this will download a JSON file instead",style:{background:Je==="sent"?"#34C759":Je==="error"?"#FF3B30":Je==="downloaded"?"#FF9500":"#007AFF",color:"#fff",border:"none",borderRadius:"7px",padding:"7px 8px",fontSize:"12px",fontWeight:"700",width:"100%",fontFamily:"inherit",cursor:Je==="saving"?"default":"pointer",opacity:Je==="saving"?.75:1,transition:"background 0.15s"},children:Je==="saving"?"Submitting…":Je==="sent"?"✓ Submitted":Je==="downloaded"?"✓ Saved (backup file)":Je==="error"?"Submit failed — retry":"Submit my work"})]}),l.jsx("div",{style:{flex:1,overflowY:"auto",minHeight:0},children:l.jsx(cp,{level:o,activeElement:t,onSelectElement:O=>{i(O),oe(null),X(null)},onAdvanceLevel:qf,onDowngradeLevel:_f,decorations:Q,activeDecorationId:Z,onSelectDecoration:oe,onAddDecoration:Hf,onRemoveDecoration:Of,onRenameDecoration:Vf})}),l.jsx(zx,{datasetKey:y})]}),l.jsxs("div",{style:{flex:1,position:"relative",zIndex:0},onDragOver:O=>O.preventDefault(),onDrop:O=>{O.preventDefault();const N=O.dataTransfer.getData("phys-var/name");if(!N)return;const V=O.dataTransfer.types.includes("phys-var/numerical")?"numerical":"categorical";Co({x:O.clientX,y:O.clientY,varName:N,varType:V})},children:[l.jsx($0,{level:o,markConfig:s,collection1Config:c,collection2Config:A,sceneConfig:f,layers:n,bindings:rr,bindingScale:K,markLabelConfig:w,colLabelConfig:M,decorations:Q,colorMode:I,colorGradient:z,colorTint:T,scatterSeed:J,datasetTitle:Qx[y],onSelectElement:O=>{i(O),oe(null),X(null)},onSelectDecoration:oe,onSelectPart:O=>{i("mark"),oe(null),X(O)},onMarkChange:a,onDecorationChange:ar,onCollection1Change:d,onCollection2Change:u,pathTracingActive:sr,onSamplesUpdate:jf,downloadRenderRef:sn}),sr&&l.jsxs("div",{style:{position:"absolute",top:"16px",right:"16px",background:"rgba(10,10,10,0.82)",backdropFilter:"blur(14px)",borderRadius:"14px",padding:"18px 20px",color:"#fff",display:"flex",flexDirection:"column",gap:"14px",width:"200px",fontFamily:"inherit",zIndex:10,boxShadow:"0 8px 32px rgba(0,0,0,0.4)"},children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"10px",fontWeight:"700",letterSpacing:"0.1em",textTransform:"uppercase",opacity:.45,marginBottom:"8px"},children:"Path Tracing"}),l.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"5px"},children:[l.jsx("span",{style:{fontSize:"32px",fontWeight:"700",letterSpacing:"-0.02em",lineHeight:1},children:At}),l.jsx("span",{style:{fontSize:"11px",opacity:.35},children:"spp"})]})]}),l.jsx("div",{style:{background:"rgba(255,255,255,0.1)",borderRadius:"3px",height:"3px"},children:l.jsx("div",{style:{width:`${Math.min(100,At/256*100)}%`,height:"100%",background:"#4FC3F7",borderRadius:"3px",transition:"width 0.4s"}})}),l.jsx("div",{style:{fontSize:"11px",opacity:.4,marginTop:"-8px"},children:At===0?"Building scene BVH…":At>=256?"Converged":`${256-At} samples to 256`}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[l.jsx("button",{onClick:()=>{var O;return(O=sn.current)==null?void 0:O.call(sn)},disabled:At===0,style:{background:At>0?"#4FC3F7":"rgba(255,255,255,0.08)",color:"#fff",border:"none",borderRadius:"8px",padding:"9px",fontSize:"12px",fontWeight:"600",cursor:At>0?"pointer":"default",fontFamily:"inherit"},children:"Download PNG"}),l.jsx("button",{onClick:()=>Tf(!1),style:{background:"rgba(255,255,255,0.08)",color:"#fff",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"9px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit"},children:"Stop"})]})]})]}),l.jsxs("div",{style:{width:"260px",flexShrink:0,borderLeft:"1px solid #E5E5EA",background:"#FFFFFF",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{flex:1,overflowY:"auto",minHeight:0},children:l.jsx(Fp,{activeElement:t,compositionLevel:o,layers:n,markConfig:s,onMarkChange:a,collection1Config:c,onCollection1Change:d,collection2Config:A,onCollection2Change:u,sceneConfig:f,onSceneChange:m,bindings:rr,onBind:rn,markLabelConfig:w,onMarkLabelChange:D,colLabelConfig:M,onColLabelChange:j,activeDecorationId:Z,decorations:Q,onDecorationChange:ar,colorMode:I,colorGradient:z,onColorGradientChange:k,colorTint:T,onColorTintChange:E,markOpenSection:P,onReseed:()=>W(O=>O+1),models:ZA(x),varLabels:p,activePartId:se,onAddPart:Jf,onRemovePart:Qf,onUpdatePart:Wf,onSelectPart:X})}),l.jsxs("div",{style:{borderTop:"1px solid #E5E5EA",padding:"14px 14px 16px",flexShrink:0,maxHeight:"50%",overflowY:"auto"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[l.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600"},children:"Data"}),l.jsx("button",{onClick:()=>nt(!0),style:{background:"none",border:"1px solid #D1D1D6",borderRadius:"6px",padding:"3px 8px",fontSize:"11px",color:"#6C6C70",cursor:"pointer",fontFamily:"inherit"},children:"Open Data"})]}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:b.map(O=>{const N=Object.keys(F).filter(ee=>F[ee]===O.varName),V=c.arrangement==="scattering",_=c.arrangement==="surface",ge=ee=>_?"Above":V?ee==="top"||ee==="left"?"Top":"Below":ee[0].toUpperCase()+ee.slice(1),Me=[];return["top","bottom","left","right"].forEach(ee=>{w.slots[ee].includes(O.varName)&&Me.push({key:`mark-${ee}`,label:`Label ${ge(ee)}`,onRemove:()=>D(re=>({...re,slots:{...re.slots,[ee]:re.slots[ee].filter(le=>le!==O.varName)}}))}),M.slots[ee].includes(O.varName)&&Me.push({key:`col-${ee}`,label:`Label ${ee[0].toUpperCase()+ee.slice(1)}`,onRemove:()=>j(re=>({...re,slots:{...re.slots,[ee]:re.slots[ee].filter(le=>le!==O.varName)}}))})}),l.jsxs("div",{children:[l.jsx(Px,{label:O.label,type:O.type,varName:O.varName}),(N.length>0||Me.length>0)&&l.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginTop:"8px"},children:[N.map(ee=>{const re=!!v[ee];return l.jsxs("div",{onClick:()=>If(ee),title:re?"Disabled — click to re-enable":"Click to disable (keeps the binding)",style:{display:"inline-flex",alignItems:"center",gap:"5px",cursor:"pointer",background:re?"#F1F1F5":"#E8F1FF",border:`1px solid ${re?"#DADAE0":"#BBD6FF"}`,borderRadius:"10px",padding:"4px 6px 4px 11px",fontSize:"12.5px",color:re?"#A0A0A8":"#0A66DA",fontWeight:"600",lineHeight:1.2},children:[l.jsxs("span",{style:{textDecoration:re?"line-through":"none",whiteSpace:"nowrap"},children:[ja[ee]&&l.jsx("span",{style:{color:re?"#C7C7CC":"#8FB6EE",marginRight:"3px",fontWeight:"500"},children:ja[ee]}),Nx[ee]]}),Lx.has(ee)&&l.jsx(Jx,{value:K[ee]??1,disabled:re,onCommit:le=>kf(ee,le)}),l.jsx("button",{onClick:le=>{le.stopPropagation(),rn(ee,null)},title:"Remove",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"17px",height:"17px",borderRadius:"50%",flexShrink:0,background:"none",border:"none",cursor:"pointer",color:re?"#B4B4BC":"#7FAEF0",fontSize:"14px",lineHeight:1,fontFamily:"inherit",padding:0},onMouseEnter:le=>{le.currentTarget.style.background=re?"#E4E4EA":"#D3E4FF"},onMouseLeave:le=>{le.currentTarget.style.background="none"},children:"×"})]},ee)}),Me.map(ee=>l.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"5px",background:"#E8F1FF",border:"1px solid #BBD6FF",borderRadius:"10px",padding:"4px 6px 4px 11px",fontSize:"12.5px",color:"#0A66DA",fontWeight:"600",lineHeight:1.2},children:[l.jsx("span",{style:{whiteSpace:"nowrap"},children:ee.label}),l.jsx("button",{onClick:ee.onRemove,title:"Remove",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"17px",height:"17px",borderRadius:"50%",flexShrink:0,background:"none",border:"none",cursor:"pointer",color:"#7FAEF0",fontSize:"14px",lineHeight:1,fontFamily:"inherit",padding:0},onMouseEnter:re=>{re.currentTarget.style.background="#D3E4FF"},onMouseLeave:re=>{re.currentTarget.style.background="none"},children:"×"})]},ee.key))]})]},O.varName)})})]})]}),ir==="save"&&l.jsx(Sx,{initialName:ze??"",onSave:cr,onClose:()=>Ut("none")}),fe&&l.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999},onClick:()=>nt(!1),children:l.jsxs("div",{style:{background:"#fff",borderRadius:"14px",width:"340px",maxWidth:"90vw",maxHeight:"80vh",display:"flex",flexDirection:"column",boxShadow:"0 16px 48px rgba(0,0,0,0.28)",overflow:"hidden",fontFamily:"inherit"},onClick:O=>O.stopPropagation(),children:[l.jsxs("div",{style:{padding:"14px 20px",borderBottom:"1px solid #E5E5EA",fontSize:"15px",fontWeight:"700",color:"#1D1D1F",flexShrink:0,display:"flex",justifyContent:"space-between",alignItems:"center"},children:["Data Panel",l.jsx("button",{onClick:()=>nt(!1),style:{background:"none",border:"none",fontSize:"18px",color:"#AEAEB2",cursor:"pointer",lineHeight:1,padding:"0 2px"},children:"×"})]}),l.jsx("div",{style:{overflowY:"auto",flex:1},children:l.jsx(Ox,{layers:n,onChange:r,onDatasetChange:g,selectedDataset:y,modelCollection:x,onModelCollectionChange:h})})]})}),ir==="load"&&l.jsx(Kx,{onLoad:Zf,onClose:()=>Ut("none"),currentName:ze??"scene",currentData:mi()}),Et&&l.jsx(Gx,{x:Et.x,y:Et.y,varName:Et.varName,varType:Et.varType,level:o,col1Arrangement:c.arrangement,markIsCompound:!!s.parts&&s.parts.length>0,onBind:rn,onColorBind:zf,onBindLabel:Pf,onClose:()=>Co(null)})]})}const ss="https://massager-unshaved-chasing.ngrok-free.dev";function Vx(){const o=_A();return C.useEffect(()=>{o.refresh().fit()},[o]),null}function Xx({url:o}){const e=$o(js,o),t=C.useRef([]),i=C.useRef(0);return C.useEffect(()=>{const n=[];if(e.scene.updateWorldMatrix(!0,!0),e.scene.traverse(s=>{s.isMesh&&n.push(s)}),!n.length)return;const r=new U;n.forEach(s=>{const a=new U;s.getWorldPosition(a),r.add(a)}),r.divideScalar(n.length),t.current=n.map(s=>{const a=new U;s.getWorldPosition(a);const c=a.clone().sub(r);return c.length()<.001&&c.set(Math.random()-.5,Math.random()-.5,Math.random()-.5),c.normalize(),{mesh:s,origPos:a.clone(),direction:c}}),i.current=0},[e]),Jt((n,r)=>{i.current+=r;const s=(Math.sin(i.current*1-Math.PI/2)+1)/2;t.current.forEach(({mesh:a,origPos:c,direction:d})=>{a.position.copy(c).addScaledVector(d,s*1.5)})}),l.jsxs(qA,{fit:!0,clip:!0,observe:!0,margin:1.4,children:[l.jsx(Vx,{}),l.jsx("primitive",{object:e.scene})]})}function Yx({data:o,center:e,impulse:t}){const i=C.useRef(null);return C.useEffect(()=>{if(!i.current)return;const n=o.position.clone().sub(e);n.length()<.001&&n.set(Math.random()-.5,.5,Math.random()-.5),n.normalize().multiplyScalar(t),i.current.applyImpulse({x:n.x,y:n.y+t*.3,z:n.z},!0),i.current.applyTorqueImpulse({x:(Math.random()-.5)*t*.3,y:(Math.random()-.5)*t*.3,z:(Math.random()-.5)*t*.3},!0)},[]),l.jsx(Xn,{ref:i,position:o.position.toArray(),quaternion:[o.quaternion.x,o.quaternion.y,o.quaternion.z,o.quaternion.w],colliders:"hull",restitution:.3,friction:.8,linearDamping:.1,angularDamping:.15,children:l.jsx("mesh",{geometry:o.geometry,material:o.material})})}function Zx({url:o,impulse:e}){const t=$o(js,o),{fragments:i,center:n}=C.useMemo(()=>{const r=[];t.scene.updateWorldMatrix(!0,!0),t.scene.traverse(a=>{if(!a.isMesh)return;const c=a,d=new U,A=new ke;c.getWorldPosition(d),c.getWorldQuaternion(A),r.push({geometry:c.geometry,material:c.material,position:d,quaternion:A})});const s=new U;return r.forEach(a=>s.add(a.position)),r.length&&s.divideScalar(r.length),{fragments:r,center:s}},[t]);return l.jsxs(l.Fragment,{children:[l.jsx(Xn,{type:"fixed",position:[0,-3,0],children:l.jsx(qa,{args:[15,.1,15]})}),l.jsxs("mesh",{position:[0,-3,0],rotation:[-Math.PI/2,0,0],children:[l.jsx("planeGeometry",{args:[30,30]}),l.jsx("meshStandardMaterial",{color:"#1a1a1a",roughness:.9})]}),i.map((r,s)=>l.jsx(Yx,{data:r,center:n,impulse:e},s))]})}function it({label:o,children:e}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx("div",{style:{fontSize:11,color:"#888"},children:o}),e]})}function Ga({active:o,onClick:e,children:t}){return l.jsx("button",{onClick:e,style:{flex:1,padding:"8px 0",fontSize:12,fontWeight:600,background:o?"#5E5CE6":"#1a1a1a",color:o?"#fff":"#666",border:o?"none":"1px solid #333",borderRadius:6,cursor:"pointer"},children:t})}function qx(){const[o,e]=C.useState(null),[t,i]=C.useState("idle"),[n,r]=C.useState(""),[s,a]=C.useState("exploded"),[c,d]=C.useState(0),[A,u]=C.useState(""),[f,m]=C.useState(8),[y,g]=C.useState(.5),[x,h]=C.useState("random"),[p,b]=C.useState("bisect"),[F,B]=C.useState(30),[v,R]=C.useState(0),[K,S]=C.useState(1.5),w=C.useRef(null),D=C.useCallback(k=>{if(!k.name.endsWith(".glb")&&!k.name.endsWith(".gltf")){r("Please upload a .glb or .gltf file");return}w.current=k,u(k.name),e(null),i("idle"),r("")},[]),M=C.useCallback(k=>{k.preventDefault();const T=k.dataTransfer.files[0];T&&D(T)},[D]),j=C.useCallback(k=>{var E;const T=(E=k.target.files)==null?void 0:E[0];T&&D(T)},[D]),I=C.useCallback(async k=>{if(k==="model"&&!w.current){r("Drop a GLB first");return}i("loading"),r("Blender is running…"),o&&URL.revokeObjectURL(o),e(null);try{let T;const E=`pieces=${f}&cutSpread=${y}&cutStrategy=${x}&adaptivity=${v}&fractureMethod=${p}`;if(k==="sphere")T=await bi(`${ss}/shatter/sphere?${E}`);else if(k==="cube")T=await bi(`${ss}/shatter/cube?${E}`);else{const G=new FormData;G.append("model",w.current),G.append("pieces",f.toString()),G.append("cutSpread",y.toString()),G.append("cutStrategy",x),G.append("fractureMethod",p),G.append("voxelDiv",F.toString()),G.append("adaptivity",v.toString()),T=await bi(`${ss}/shatter`,{method:"POST",body:G})}if(!T.ok){const G=await T.json().catch(()=>({error:T.statusText}));throw new Error(G.error??T.statusText)}const P=await T.blob();e(URL.createObjectURL(P)),i("done"),r("")}catch(T){i("error"),r(T instanceof Error?T.message:"Unknown error")}},[f,y,F,o]);C.useEffect(()=>()=>{o&&URL.revokeObjectURL(o)},[o]);const H={width:"100%",accentColor:"#5E5CE6"},z=t==="loading";return l.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0f0f0f",color:"#e0e0e0"},children:[l.jsxs("div",{style:{width:260,padding:20,display:"flex",flexDirection:"column",gap:16,borderRight:"1px solid #222",overflowY:"auto"},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Shatter Lab"}),l.jsxs("div",{style:{display:"flex",gap:12},children:[l.jsx("a",{href:"/deform",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Deform"}),l.jsx("a",{href:"/particles",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Particles"}),l.jsx("a",{href:"/fluid",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Fluid"})]})]}),l.jsx(it,{label:"View Mode",children:l.jsxs("div",{style:{display:"flex",gap:6},children:[l.jsx(Ga,{active:s==="exploded",onClick:()=>a("exploded"),children:"Exploded"}),l.jsx(Ga,{active:s==="physics",onClick:()=>a("physics"),children:"Physics"})]})}),l.jsxs(it,{label:"Model (GLB)",children:[l.jsx("div",{onDrop:M,onDragOver:k=>k.preventDefault(),onClick:()=>document.getElementById("glb-input").click(),style:{border:"2px dashed #333",borderRadius:8,padding:"14px 10px",textAlign:"center",cursor:"pointer",fontSize:12,color:"#555"},children:A||"Drop GLB or click to browse"}),l.jsx("input",{id:"glb-input",type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:j})]}),l.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[l.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Fragment"}),l.jsxs(it,{label:"Fracture Method",children:[l.jsx("div",{style:{display:"flex",gap:6},children:["bisect","voronoi"].map(k=>l.jsx("button",{onClick:()=>b(k),style:{flex:1,padding:"6px 0",fontSize:11,borderRadius:5,background:p===k?"#2a2a4a":"#1a1a1a",color:p===k?"#9999ff":"#555",border:p===k?"1px solid #5E5CE6":"1px solid #2a2a2a",cursor:"pointer",textTransform:"capitalize"},children:k},k))}),l.jsx("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:p==="voronoi"?"Natural crack patterns. Slower — best ≤ 50 pieces.":"Sequential plane cuts. Fast. Good for large counts."})]}),l.jsx(it,{label:`Pieces: ${f}`,children:l.jsx("input",{type:"range",min:2,max:500,step:1,value:f,onChange:k=>m(Number(k.target.value)),style:H})}),l.jsxs(it,{label:`Size Variation: ${y.toFixed(2)}`,children:[l.jsx("input",{type:"range",min:.05,max:1,step:.05,value:y,onChange:k=>g(Number(k.target.value)),style:H}),l.jsxs("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:["0 = equal-sized pieces (cuts through centre)",l.jsx("br",{}),"1 = uneven pieces (cuts placed randomly)"]})]}),l.jsxs(it,{label:"Cut Strategy",children:[l.jsx("div",{style:{display:"flex",gap:6},children:["random","largest"].map(k=>l.jsx("button",{onClick:()=>h(k),style:{flex:1,padding:"6px 0",fontSize:11,borderRadius:5,background:x===k?"#2a2a4a":"#1a1a1a",color:x===k?"#9999ff":"#555",border:x===k?"1px solid #5E5CE6":"1px solid #2a2a2a",cursor:"pointer"},children:k==="random"?"Random":"Largest First"},k))}),l.jsx("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:"Largest First → more uniform sizes"})]})]}),l.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[l.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Remesh — file uploads only"}),l.jsxs(it,{label:`Voxel Detail: ${F}`,children:[l.jsx("input",{type:"range",min:10,max:60,step:5,value:F,onChange:k=>B(Number(k.target.value)),style:H}),l.jsx("div",{style:{fontSize:10,color:"#444"},children:"Higher = sharper cuts, slower"})]}),l.jsxs(it,{label:`Adaptivity: ${v.toFixed(2)}`,children:[l.jsx("input",{type:"range",min:0,max:1,step:.05,value:v,onChange:k=>R(Number(k.target.value)),style:H}),l.jsx("div",{style:{fontSize:10,color:"#444"},children:"Reduces polygons in flat areas"})]})]}),s==="physics"&&l.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[l.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Physics"}),l.jsxs(it,{label:`Impulse: ${K.toFixed(1)}`,children:[l.jsx("input",{type:"range",min:0,max:5,step:.1,value:K,onChange:k=>S(Number(k.target.value)),style:H}),l.jsx("div",{style:{fontSize:10,color:"#444"},children:"How hard pieces fly apart on start"})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[l.jsx("button",{onClick:()=>I("model"),disabled:z,style:{background:z?"#222":"#5E5CE6",color:z?"#555":"#fff",border:"none",borderRadius:8,padding:"11px 0",fontSize:13,fontWeight:600,cursor:z?"wait":"pointer"},children:z?"Running…":"⚡ Shatter Model"}),l.jsxs("div",{style:{display:"flex",gap:8},children:[l.jsx("button",{onClick:()=>I("sphere"),disabled:z,style:{flex:1,background:"#1a1a1a",color:z?"#444":"#aaa",border:"1px solid #2a2a2a",borderRadius:8,padding:"9px 0",fontSize:12,cursor:z?"wait":"pointer"},children:"🔵 Sphere"}),l.jsx("button",{onClick:()=>I("cube"),disabled:z,style:{flex:1,background:"#1a1a1a",color:z?"#444":"#aaa",border:"1px solid #2a2a2a",borderRadius:8,padding:"9px 0",fontSize:12,cursor:z?"wait":"pointer"},children:"◻ Cube"})]}),s==="physics"&&o&&l.jsx("button",{onClick:()=>d(k=>k+1),style:{background:"#1a1a2e",color:"#5E5CE6",border:"1px solid #5E5CE6",borderRadius:8,padding:"9px 0",fontSize:12,cursor:"pointer"},children:"↺ Restart Simulation"})]}),(n||z)&&l.jsx("div",{style:{fontSize:12,padding:10,borderRadius:6,lineHeight:1.5,background:t==="error"?"#2a0f0f":"#111",color:t==="error"?"#ff6b6b":"#666"},children:z?"Blender is running… (10–30 s)":n})]}),l.jsx("div",{style:{flex:1},children:o?l.jsxs(si,{camera:{position:[0,1,5],fov:50},style:{background:"#111"},children:[l.jsx("ambientLight",{intensity:.5}),l.jsx("directionalLight",{position:[5,8,5],intensity:1.2,castShadow:!0}),l.jsx(Ts,{preset:"city"}),s==="exploded"&&l.jsx(C.Suspense,{fallback:null,children:l.jsx(Xx,{url:o})}),s==="physics"&&l.jsx(_a,{gravity:[0,-9.81,0],timeStep:"vary",children:l.jsx(C.Suspense,{fallback:null,children:l.jsx(Zx,{url:o,impulse:K})})},c),l.jsx(ri,{})]}):l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#2a2a2a",fontSize:13},children:z?l.jsxs("div",{style:{textAlign:"center",color:"#444"},children:[l.jsx("div",{style:{fontSize:28,marginBottom:10},children:"⏳"}),"Blender is fracturing…"]}):l.jsxs("div",{style:{textAlign:"center"},children:[l.jsx("div",{style:{fontSize:28,marginBottom:10},children:"💥"}),"Choose a shape and hit Shatter"]})})})]})}const rs={Flag:{pinMode:"flag",gravity:2,windX:.5,windZ:5,windTurb:3,damping:.99,constraintIters:8},Curtain:{pinMode:"curtain",gravity:3,windX:0,windZ:2,windTurb:2,damping:.99,constraintIters:8},Sheet:{pinMode:"sheet",gravity:2.5,windX:.5,windZ:2.5,windTurb:2.5,damping:.99,constraintIters:8},Still:{pinMode:"curtain",gravity:4,windX:0,windZ:0,windTurb:0,damping:.995,constraintIters:12},Hammock:{pinMode:"hammock",gravity:6,windX:0,windZ:.5,windTurb:.5,damping:.995,constraintIters:12}};function _x(o,e,t,i,n){const r=n==="hammock",s=new Float32Array(o*e*3),a=new Float32Array(o*e*2);for(let A=0;A<e;A++)for(let u=0;u<o;u++){const f=A*o+u,m=u/(o-1),y=A/(e-1);r?(s[f*3]=(m-.5)*t,s[f*3+1]=0,s[f*3+2]=(y-.5)*i):(s[f*3]=(m-.5)*t,s[f*3+1]=(.5-y)*i,s[f*3+2]=0),a[f*2]=m,a[f*2+1]=1-y}const c=[];for(let A=0;A<e-1;A++)for(let u=0;u<o-1;u++){const f=A*o+u,m=f+1,y=f+o,g=y+1;c.push(f,y,m,m,y,g)}const d=new Xe;return d.setAttribute("position",new me(s,3)),d.setAttribute("uv",new me(a,2)),d.setIndex(c),d.computeVertexNormals(),d}function $x(o,e,t,i,n){const r=n==="hammock",s=o*e,a=new Float32Array(s*3),c=new Float32Array(s*3),d=new Uint8Array(s),A=new Float32Array(s*3);for(let g=0;g<e;g++)for(let x=0;x<o;x++){const h=g*o+x,p=x/(o-1),b=g/(e-1);r?(a[h*3]=(p-.5)*t,a[h*3+1]=0,a[h*3+2]=(b-.5)*i):(a[h*3]=(p-.5)*t,a[h*3+1]=(.5-b)*i,a[h*3+2]=0),c[h*3]=a[h*3],c[h*3+1]=a[h*3+1],c[h*3+2]=a[h*3+2]}switch(n){case"flag":for(let g=0;g<e;g++)d[g*o]=1;break;case"curtain":for(let g=0;g<o;g++)d[g]=1;break;case"sheet":d[0]=1,d[o-1]=1;break;case"hammock":d[0]=1,d[o-1]=1,d[(e-1)*o]=1,d[(e-1)*o+o-1]=1;break}for(let g=0;g<s;g++)A[g*3]=a[g*3],A[g*3+1]=a[g*3+1],A[g*3+2]=a[g*3+2];const u=t/(o-1),f=i/(e-1),m=Math.hypot(u,f),y=[];for(let g=0;g<e;g++)for(let x=0;x<o;x++){const h=g*o+x;x<o-1&&y.push({a:h,b:h+1,r:u}),g<e-1&&y.push({a:h,b:h+o,r:f}),x<o-1&&g<e-1&&(y.push({a:h,b:h+o+1,r:m}),y.push({a:h+1,b:h+o,r:m})),x<o-2&&y.push({a:h,b:h+2,r:u*2}),g<e-2&&y.push({a:h,b:h+o*2,r:f*2})}return{pos:a,prev:c,pinned:d,init:A,springs:y,N:o,M:e}}function ey({cols:o,rows:e,cW:t,cH:i,pinMode:n,paramsRef:r,color:s,wireframe:a}){const c=C.useMemo(()=>_x(o,e,t,i,n),[]),d=C.useMemo(()=>$x(o,e,t,i,n),[]),A=C.useRef(null);return Jt(({clock:u},f)=>{if(!A.current)return;const{gravity:m,windZ:y,windX:g,windTurb:x,damping:h,constraintIters:p}=r.current,{pos:b,prev:F,pinned:B,init:v,springs:R,N:K,M:S}=d,w=u.getElapsedTime(),D=5,M=Math.min(f,.033)/D;for(let I=0;I<D;I++){for(let H=0;H<K*S;H++){if(B[H])continue;const z=H*3,k=b[z],T=b[z+1],E=b[z+2];let P=(k-F[z])*h,G=(T-F[z+1])*h,J=(E-F[z+2])*h;G-=m*M*M;const W=Math.sin(k*.8+w*.9)*Math.cos(E*.5+w*.6)*x,Q=Math.sin(E*.7+w*.7)*Math.cos(T*.4+w*.5)*x;P+=(g+W)*M*M,J+=(y+Q)*M*M,F[z]=k,F[z+1]=T,F[z+2]=E,b[z]=k+P,b[z+1]=T+G,b[z+2]=E+J,b[z+1]<-3.5&&(b[z+1]=-3.5,F[z+1]=-3.5)}for(let H=0;H<p;H++)for(const{a:z,b:k,r:T}of R){const E=z*3,P=k*3,G=b[P]-b[E],J=b[P+1]-b[E+1],W=b[P+2]-b[E+2],Q=Math.sqrt(G*G+J*J+W*W)||1e-6,L=(Q-T)/Q*.5;B[z]||(b[E]+=G*L,b[E+1]+=J*L,b[E+2]+=W*L),B[k]||(b[P]-=G*L,b[P+1]-=J*L,b[P+2]-=W*L)}for(let H=0;H<K*S;H++)B[H]&&(b[H*3]=v[H*3],b[H*3+1]=v[H*3+1],b[H*3+2]=v[H*3+2])}const j=c.attributes.position;for(let I=0;I<K*S;I++)j.array[I*3]=b[I*3],j.array[I*3+1]=b[I*3+1],j.array[I*3+2]=b[I*3+2];j.needsUpdate=!0,c.computeVertexNormals()}),l.jsx("mesh",{ref:A,geometry:c,castShadow:!0,receiveShadow:!0,children:l.jsx("meshStandardMaterial",{color:s,side:Lt,roughness:.8,metalness:0,wireframe:a})})}function ty({cols:o,rows:e,cW:t,cH:i,pinMode:n}){const r=C.useMemo(()=>{const s=o,a=e,c=n==="hammock",d=(A,u)=>{const f=A/(s-1),m=u/(a-1);return c?[(f-.5)*t,0,(m-.5)*i]:[(f-.5)*t,(.5-m)*i,0]};switch(n){case"flag":return Array.from({length:a},(A,u)=>d(0,u));case"curtain":return Array.from({length:s},(A,u)=>d(u,0));case"sheet":return[d(0,0),d(s-1,0)];case"hammock":return[d(0,0),d(s-1,0),d(0,a-1),d(s-1,a-1)]}},[o,e,t,i,n]);return l.jsx(l.Fragment,{children:r.map((s,a)=>l.jsxs("mesh",{position:s,children:[l.jsx("sphereGeometry",{args:[.06,8,8]}),l.jsx("meshStandardMaterial",{color:"#ff4455",emissive:"#ff2233",emissiveIntensity:.6})]},a))})}function Io({label:o,children:e}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[l.jsx("div",{style:{fontSize:10,color:"#555",letterSpacing:.4},children:o}),e]})}function oy({active:o,onClick:e,children:t,small:i}){return l.jsx("button",{onClick:e,style:{flex:1,padding:i?"5px 0":"7px 0",fontSize:i?10:11,borderRadius:5,cursor:"pointer",background:o?"#2a2a4a":"#151520",color:o?"#9999ff":"#555",border:o?"1px solid #5E5CE6":"1px solid #222"},children:t})}function Na({on:o,onClick:e,label:t}){return l.jsxs("div",{onClick:e,style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer",userSelect:"none"},children:[l.jsx("div",{style:{width:28,height:16,borderRadius:8,position:"relative",background:o?"#5E5CE6":"#1e1e2a",border:"1px solid #333",transition:"background .2s"},children:l.jsx("div",{style:{position:"absolute",top:2,left:o?11:2,width:10,height:10,borderRadius:"50%",background:o?"#fff":"#444",transition:"left .2s"}})}),l.jsx("span",{style:{fontSize:11,color:o?"#9999ff":"#555"},children:t})]})}const ny=[["Gravity","gravity",0,10,.1],["Wind forward","windZ",-3,10,.1],["Wind sideways","windX",-5,5,.1],["Turbulence","windTurb",0,8,.1],["Damping","damping",.95,1,.001],["Stiffness","constraintIters",1,20,1]];function iy(){const[o,e]=C.useState(22),[t,i]=C.useState(22),[n,r]=C.useState(3),[s,a]=C.useState(3),[c,d]=C.useState("curtain"),[A,u]=C.useState(0),[f,m]=C.useState("#5588cc"),[y,g]=C.useState(!1),[x,h]=C.useState(!0),[p,b]=C.useState(rs.Curtain),F=C.useRef(p);C.useEffect(()=>{F.current=p},[p]);const B=D=>M=>b(j=>({...j,[D]:Number(M.target.value)})),v=D=>{const M=rs[D];d(M.pinMode),b({gravity:M.gravity,windX:M.windX,windZ:M.windZ,windTurb:M.windTurb,damping:M.damping,constraintIters:M.constraintIters}),u(j=>j+1)},R={width:"100%",accentColor:"#5E5CE6"},K={borderTop:"1px solid #1a1a2a",paddingTop:12,display:"flex",flexDirection:"column",gap:8},S={fontSize:10,color:"#444",textTransform:"uppercase",letterSpacing:1},w=`${o}-${t}-${n}-${s}-${c}-${A}`;return l.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0a0a12",color:"#ddd"},children:[l.jsxs("div",{style:{width:268,padding:20,display:"flex",flexDirection:"column",gap:14,borderRight:"1px solid #1a1a2a",overflowY:"auto"},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Soft Lab"}),l.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[l.jsx("a",{href:"/shatter",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Shatter"}),l.jsx("a",{href:"/deform",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Deform"}),l.jsx("a",{href:"/particles",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Particles"}),l.jsx("a",{href:"/ripple",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Ripple"}),l.jsx("a",{href:"/jelly",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Jelly"})]})]}),l.jsxs("div",{style:K,children:[l.jsx("div",{style:S,children:"Presets"}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:Object.keys(rs).map(D=>l.jsx("button",{onClick:()=>v(D),style:{padding:"5px 10px",fontSize:10,borderRadius:5,cursor:"pointer",background:"#151520",color:"#777",border:"1px solid #222"},children:D},D))}),l.jsx("button",{onClick:()=>u(D=>D+1),style:{padding:"7px",fontSize:11,borderRadius:5,cursor:"pointer",background:"#151520",color:"#555",border:"1px solid #222"},children:"↺ Reset cloth"})]}),l.jsxs("div",{style:K,children:[l.jsx("div",{style:S,children:"Cloth"}),l.jsx(Io,{label:`Resolution: ${o}×${t}`,children:l.jsx("input",{type:"range",min:8,max:40,step:1,value:o,onChange:D=>{const M=Number(D.target.value);e(M),i(M)},style:R})}),l.jsx(Io,{label:`Width: ${n.toFixed(1)}`,children:l.jsx("input",{type:"range",min:1,max:6,step:.1,value:n,onChange:D=>r(Number(D.target.value)),style:R})}),l.jsx(Io,{label:`Height: ${s.toFixed(1)}`,children:l.jsx("input",{type:"range",min:1,max:6,step:.1,value:s,onChange:D=>a(Number(D.target.value)),style:R})})]}),l.jsxs("div",{style:K,children:[l.jsx("div",{style:S,children:"Pin mode"}),l.jsx("div",{style:{display:"flex",gap:5},children:["flag","curtain","sheet","hammock"].map(D=>l.jsx(oy,{small:!0,active:c===D,onClick:()=>{d(D),u(M=>M+1)},children:D[0].toUpperCase()+D.slice(1)},D))})]}),l.jsxs("div",{style:K,children:[l.jsx("div",{style:S,children:"Simulation"}),ny.map(([D,M,j,I,H])=>l.jsx(Io,{label:`${D}: ${M==="constraintIters"?p[M].toFixed(0):M==="damping"?p[M].toFixed(3):p[M].toFixed(2)}`,children:l.jsx("input",{type:"range",min:j,max:I,step:H,value:p[M],onChange:B(M),style:R})},M))]}),l.jsxs("div",{style:K,children:[l.jsx("div",{style:S,children:"Rendering"}),l.jsx(Io,{label:"Color",children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx("input",{type:"color",value:f,onChange:D=>m(D.target.value),style:{width:32,height:22,border:"none",background:"none",cursor:"pointer",padding:0}}),l.jsx("span",{style:{fontSize:10,color:"#555"},children:f})]})}),l.jsx(Na,{on:y,onClick:()=>g(D=>!D),label:"Wireframe"}),l.jsx(Na,{on:x,onClick:()=>h(D=>!D),label:"Show pins"})]})]}),l.jsxs(si,{shadows:!0,camera:{position:[0,.5,5.5],fov:45},gl:{antialias:!0,toneMapping:Us,toneMappingExposure:1},style:{flex:1,background:"#04040c"},children:[l.jsx("ambientLight",{intensity:.35}),l.jsx("directionalLight",{position:[4,8,4],intensity:1.8,castShadow:!0,"shadow-mapSize":[1024,1024]}),l.jsx("pointLight",{position:[-4,1,-2],intensity:.6,color:"#4466ff"}),l.jsx("pointLight",{position:[3,-1,3],intensity:.3,color:"#ff8844"}),l.jsx(ri,{makeDefault:!0,target:[0,0,0]}),l.jsx(ey,{cols:o,rows:t,cW:n,cH:s,pinMode:c,paramsRef:F,color:f,wireframe:y},w),x&&l.jsx(ty,{cols:o,rows:t,cW:n,cH:s,pinMode:c},`pins-${w}`),l.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-3,0],receiveShadow:!0,children:[l.jsx("planeGeometry",{args:[14,14]}),l.jsx("meshStandardMaterial",{color:"#09090f",roughness:.95})]})]})]})}const $=90,bt=10;function sy({waveSpeed:o,damping:e,disturbAmp:t,modelUrl:i,resetKey:n}){const r=C.useRef(new Float32Array($*$)),s=C.useRef(new Float32Array($*$)),a=C.useRef(null),[c,d]=C.useState(null),A=C.useMemo(()=>{const f=new $A(bt,bt,$-1,$-1);return f.rotateX(-Math.PI/2),f},[]);C.useEffect(()=>{r.current.fill(0),s.current.fill(0)},[n]),C.useEffect(()=>{if(!i){d(null);return}new js().load(i,m=>{const y=m.scene,g=new de().setFromObject(y),x=g.getSize(new U);y.scale.setScalar(.9/Math.max(x.x,x.y,x.z)),g.setFromObject(y),y.position.sub(g.getCenter(new U)),y.position.y=.5;const h=Math.floor($/2),p=Math.floor($/2),b=8;for(let F=-b;F<=b;F++)for(let B=-b;B<=b;B++){const v=h+B,R=p+F;if(v>=0&&v<$&&R>=0&&R<$){const K=Math.sqrt(B*B+F*F);K<=b&&(r.current[R*$+v]-=.4*(1-K/b))}}d(y)})},[i]);const u=C.useCallback((f,m,y)=>{const g=Math.round((f/bt+.5)*($-1)),x=Math.round((m/bt+.5)*($-1)),h=4;for(let p=-h;p<=h;p++)for(let b=-h;b<=h;b++){const F=g+b,B=x+p;if(F>=0&&F<$&&B>=0&&B<$){const v=Math.sqrt(b*b+p*p);v<=h&&(r.current[B*$+F]-=y*(1-v/h))}}},[]);return Jt(()=>{const f=r.current,m=s.current,y=Math.min(o,.49),g=7;for(let p=1;p<$-1;p++)for(let b=1;b<$-1;b++){const F=p*$+b,B=f[(p-1)*$+b]+f[(p+1)*$+b]+f[p*$+b-1]+f[p*$+b+1]-4*f[F];m[F]=(m[F]+y*B)*e}for(let p=0;p<$*$;p++)f[p]+=m[p];for(let p=0;p<$;p++)for(let b=0;b<$;b++){const F=Math.min(b,p,$-1-b,$-1-p);if(F<g){const B=(F/g)**2,v=vt.lerp(.75,1,B),R=p*$+b;f[R]*=v,m[R]*=v}}const x=A.attributes.position;for(let p=0;p<$;p++)for(let b=0;b<$;b++)x.setY(p*$+b,f[p*$+b]);x.needsUpdate=!0,A.computeVertexNormals();const h=a.current;if(h){const p=Math.round((h.position.x/bt+.5)*($-1)),b=Math.round((h.position.z/bt+.5)*($-1));if(p>=0&&p<$&&b>=0&&b<$){const F=f[b*$+p];h.position.y=F+.45,h.rotation.x=F*.25,h.rotation.z=F*.15}}}),l.jsxs(l.Fragment,{children:[l.jsx("mesh",{geometry:A,onPointerDown:f=>{f.stopPropagation(),u(f.point.x,f.point.z,t)},onPointerMove:f=>{f.buttons>0&&u(f.point.x,f.point.z,t*.35)},children:l.jsx("meshStandardMaterial",{color:"#0a3060",roughness:.03,metalness:.45,envMapIntensity:3})}),c&&l.jsx("primitive",{ref:a,object:c})]})}function as({label:o,children:e}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[l.jsx("div",{style:{fontSize:10,color:"#555",letterSpacing:.4},children:o}),e]})}function ry(){const[o,e]=C.useState(.32),[t,i]=C.useState(.995),[n,r]=C.useState(.4),[s,a]=C.useState(null),[c,d]=C.useState(""),[A,u]=C.useState(0),f=C.useCallback(x=>{!x.name.endsWith(".glb")&&!x.name.endsWith(".gltf")||(s&&URL.revokeObjectURL(s),a(URL.createObjectURL(x)),d(x.name))},[s]),m={width:"100%",accentColor:"#5E5CE6"},y={borderTop:"1px solid #1a1a2a",paddingTop:12,display:"flex",flexDirection:"column",gap:8},g={fontSize:10,color:"#444",textTransform:"uppercase",letterSpacing:1};return l.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0a0a12",color:"#ddd"},children:[l.jsxs("div",{style:{width:268,padding:20,display:"flex",flexDirection:"column",gap:14,borderRight:"1px solid #1a1a2a",overflowY:"auto"},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Ripple Lab"}),l.jsx("div",{style:{fontSize:11,color:"#444",lineHeight:1.5},children:"Click or drag on the water to create waves."}),l.jsxs("div",{style:{display:"flex",gap:10,marginTop:4},children:[l.jsx("a",{href:"/soft",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Cloth"}),l.jsx("a",{href:"/jelly",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Jelly"}),l.jsx("a",{href:"/particles",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Particles"})]})]}),l.jsxs("div",{style:y,children:[l.jsx("div",{style:g,children:"Object on water"}),l.jsx("div",{onDrop:x=>{x.preventDefault();const h=x.dataTransfer.files[0];h&&f(h)},onDragOver:x=>x.preventDefault(),onClick:()=>document.getElementById("glb-ripple").click(),style:{border:`2px dashed ${s?"#5E5CE6":"#222"}`,borderRadius:8,padding:"10px 8px",textAlign:"center",cursor:"pointer",fontSize:11,color:s?"#9999ff":"#444"},children:c||"Drop a GLB — it will float"}),l.jsx("input",{id:"glb-ripple",type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:x=>{var p;const h=(p=x.target.files)==null?void 0:p[0];h&&f(h)}}),s&&l.jsx("button",{onClick:()=>{a(null),d("")},style:{padding:"5px",fontSize:10,borderRadius:5,cursor:"pointer",background:"#151520",color:"#666",border:"1px solid #222"},children:"Remove object"})]}),l.jsxs("div",{style:y,children:[l.jsx("div",{style:g,children:"Simulation"}),l.jsx(as,{label:`Wave speed: ${o.toFixed(2)}`,children:l.jsx("input",{type:"range",min:.05,max:.48,step:.01,value:o,onChange:x=>e(Number(x.target.value)),style:m})}),l.jsx(as,{label:`Damping: ${t.toFixed(3)}`,children:l.jsx("input",{type:"range",min:.96,max:.999,step:.001,value:t,onChange:x=>i(Number(x.target.value)),style:m})}),l.jsx(as,{label:`Disturbance: ${n.toFixed(2)}`,children:l.jsx("input",{type:"range",min:.05,max:1.5,step:.05,value:n,onChange:x=>r(Number(x.target.value)),style:m})})]}),l.jsx("div",{style:y,children:l.jsx("button",{onClick:()=>u(x=>x+1),style:{padding:"8px",fontSize:11,borderRadius:5,cursor:"pointer",background:"#151520",color:"#666",border:"1px solid #222"},children:"↺ Clear water"})})]}),l.jsxs(si,{camera:{position:[0,6,8],fov:45},gl:{antialias:!0,toneMapping:Us,toneMappingExposure:1.2},style:{flex:1,background:"#04040c"},children:[l.jsx("ambientLight",{intensity:.3}),l.jsx("directionalLight",{position:[5,8,3],intensity:1.5}),l.jsx(Ts,{preset:"sunset"}),l.jsx(ri,{makeDefault:!0,target:[0,0,0],maxPolarAngle:Math.PI/2.1}),l.jsx(sy,{waveSpeed:o,damping:t,disturbAmp:n,modelUrl:s,resetKey:A}),l.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-.5,0],children:[l.jsx("planeGeometry",{args:[bt,bt]}),l.jsx("meshStandardMaterial",{color:"#071830",roughness:.9})]})]})]})}const ay="/phys_tool/".replace(/\/$/,""),gt=window.location.pathname.slice(ay.length)||"/",ly=gt==="/lab"?l.jsx(op,{}):gt==="/sim"?l.jsx(qx,{}):gt==="/shatter"?l.jsx(np,{}):gt==="/deform"?l.jsx(ip,{}):gt==="/particles"?l.jsx(sp,{}):gt==="/soft"?l.jsx(iy,{}):gt==="/ripple"?l.jsx(ry,{}):gt==="/fluid"?l.jsx(rp,{}):l.jsx(Wx,{});ep.createRoot(document.getElementById("root")).render(l.jsx(tp.StrictMode,{children:ly}));
