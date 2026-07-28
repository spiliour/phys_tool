import{r as R,j as c,M as ho,V as I,S as Ro,B as xi,U as Ar,v as dr,a as W,b as Ve,O as bt,R as YA,E as ZA,c as ce,Q as re,C as oe,d as Xe,D as _t,L as fr,e as ze,f as Be,F as Mi,g as ee,P as ct,h as Bt,i as Rn,T as Io,k as vn,l as mo,m as Bo,n as Se,o as Le,p as qA,q as _A,s as $A,I as ed,t as td,u as od,w as id,x as ue,y as nd,z as pr,N as sd,A as rd,G as ad,H as fe,J as Ae,K as mt,W as ld,X as Ct,Y as cd,Z as wi,_ as Ye,$ as ud,a0 as Ad,a1 as es,a2 as dd,a3 as fd,a4 as pd,a5 as go,a6 as Sn,a7 as Wt,a8 as hd,a9 as md,aa as gd,ab as xd,ac as yd,ad as hr,ae as bd,af as ts,ag as os,ah as is,ai as ns,aj as ci,ak as Cd,al as pe,am as mr,an as Fd,ao as Kd,ap as Bd,aq as vo,ar as Oe,as as ui,at as Rd,au as Mn,av as So,aw as et,ax as Ao,ay as xo,az as Ee,aA as Di,aB as ye,aC as ln,aD as vd,aE as ss,aF as Sd,aG as de,aH as cn,aI as gr,aJ as Md,aK as xr,aL as Xt,aM as wd,aN as Yt,aO as Dd,aP as Ud,aQ as wn,aR as si,aS as Zt,aT as Fe,aU as Ed,aV as Td,aW as yr,aX as br,aY as ft,aZ as Id,a_ as kd,a$ as jd,b0 as Pd,b1 as xe,b2 as rs,b3 as zd,b4 as Hd,b5 as Ai,b6 as Cr,b7 as yi,b8 as Dn,b9 as Fr,ba as bi,bb as Un,bc as Od,bd as Gd,be as Ui,bf as yo,bg as Nd,bh as Ld,bi as Ei,bj as Ti,bk as Qd,bl as En,bm as Jd,bn as Wd,bo as Vd,bp as Xd,bq as Yd,br as Zd,bs as qd,bt as _d}from"./index-6smRdadL.js";const $d={mark:{label:"Mark",badge:"L1"},collection1:{label:"Collection",badge:"L2"},collection2:{label:"Collection",badge:"L3"},scene:{label:"Scene",badge:"Env"}},ef={1:["mark","scene"],2:["mark","collection1","scene"],3:["mark","collection1","collection2","scene"]},Ii={padding:"8px 12px",borderRadius:"10px",fontSize:"12px",fontWeight:"500",cursor:"pointer",fontFamily:"inherit",transition:"border-color 0.15s, color 0.15s",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",width:"100%"};function tf({level:o,activeElement:e,onSelectElement:t,onAdvanceLevel:n,onDowngradeLevel:i,decorations:r,activeDecorationId:s,onSelectDecoration:a,onAddDecoration:l,onRemoveDecoration:A,onRenameDecoration:u}){const d=ef[o],[f,h]=R.useState(null),[y,g]=R.useState(""),x=R.useRef(null);function m(C,F){h(C.id),g(C.name??`Decoration ${F+1}`),setTimeout(()=>{var K;return(K=x.current)==null?void 0:K.select()},0)}function p(){f&&u(f,y.trim()||f),h(null)}function b(){h(null)}return c.jsxs("div",{style:{padding:"14px 14px 14px",display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsx("div",{style:{paddingTop:"12px"},children:c.jsx("div",{style:{fontSize:"16px",color:"#1D1D1F",fontWeight:"700"},children:"Visualization Hierarchy"})}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:d.map(C=>{const F=$d[C],K=C===e&&s===null;return c.jsxs("button",{onClick:()=>t(C),style:{display:"flex",alignItems:"center",gap:"10px",padding:"9px 12px",width:"100%",textAlign:"left",background:K?"#F2F2F7":"#FAFAFA",border:`1.5px solid ${K?"#1D1D1F":"#E5E5EA"}`,borderRadius:"10px",cursor:"pointer",transition:"border-color 0.15s, background 0.15s",fontFamily:"inherit"},children:[c.jsx("div",{style:{flex:1,minWidth:0},children:c.jsx("div",{style:{fontSize:"12px",color:"#1D1D1F",fontWeight:K?"600":"500",lineHeight:1.2},children:F.label})}),c.jsx("span",{style:{fontSize:"9px",letterSpacing:"0.06em",fontWeight:"500",color:K?"#1D1D1F":"#8E8E93",border:`1px solid ${K?"#1D1D1F":"#D1D1D6"}`,borderRadius:"4px",padding:"1px 5px",flexShrink:0,transition:"color 0.15s, border-color 0.15s"},children:F.badge})]},C)})}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px",paddingTop:"2px"},children:[o<3&&c.jsx("button",{onClick:n,style:{...Ii,background:"transparent",border:"1.5px dashed #C7C7CC",color:"#8E8E93"},children:"+ Add Collection"}),o>1&&c.jsx("button",{onClick:i,style:{...Ii,background:"transparent",border:"1.5px dashed #C7C7CC",color:"#8E8E93"},children:"− Remove Collection"})]}),c.jsxs("div",{style:{borderTop:"1px solid #E5E5EA",paddingTop:"8px",display:"flex",flexDirection:"column",gap:"5px"},children:[c.jsx("div",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600",marginBottom:"2px"},children:"Decorations"}),r.map((C,F)=>{const K=C.id===s,B=C.id===f,S=C.name??`Decoration ${F+1}`;return c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[c.jsxs("div",{onClick:()=>{B||a(C.id)},onDoubleClick:()=>m(C,F),style:{flex:1,display:"flex",alignItems:"center",gap:"8px",padding:"7px 10px",background:K?"#F2F2F7":"#FAFAFA",border:`1.5px solid ${K?"#1D1D1F":"#E5E5EA"}`,borderRadius:"8px",cursor:B?"default":"pointer",transition:"border-color 0.15s, background 0.15s",minWidth:0},children:[B?c.jsx("input",{ref:x,value:y,onChange:v=>g(v.target.value),onBlur:p,onKeyDown:v=>{v.key==="Enter"&&p(),v.key==="Escape"&&b()},style:{flex:1,border:"none",outline:"none",background:"transparent",fontSize:"12px",color:"#1D1D1F",fontFamily:"inherit",fontWeight:"600",minWidth:0},onClick:v=>v.stopPropagation(),autoFocus:!0}):c.jsx("span",{style:{fontSize:"12px",color:"#1D1D1F",fontWeight:K?"600":"400",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:S}),!B&&c.jsx("span",{style:{fontSize:"9px",color:K?"#1D1D1F":"#8E8E93",border:`1px solid ${K?"#1D1D1F":"#D1D1D6"}`,borderRadius:"4px",padding:"1px 5px",flexShrink:0},children:"Dec"})]}),c.jsx("button",{onClick:()=>A(C.id),title:"Remove decoration",style:{background:"none",border:"none",cursor:"pointer",color:"#AEAEB2",fontSize:"16px",lineHeight:1,padding:"4px 6px",flexShrink:0,fontFamily:"inherit"},children:"×"})]},C.id)}),c.jsx("button",{onClick:l,style:{...Ii,background:"transparent",border:"1.5px dashed #C7C7CC",color:"#8E8E93"},children:"+ Add Decoration"})]})]})}const as={weight:{label:"Weight",type:"numerical"},garbageType:{label:"Garbage Type",type:"categorical"},count:{label:"Count",type:"numerical"}},Kr=R.createContext(ho);function of(o){return 2*Math.atan(12/o)*180/Math.PI}const Tt="/phys_tool/",Ge={spatial:`${Tt}assets/icons/spatial.png`,shape:`${Tt}assets/icons/shape.png`,material:`${Tt}assets/icons/material.png`,populations:`${Tt}assets/icons/populations.png`,framing:`${Tt}assets/icons/framing.png`,labels:`${Tt}assets/icons/labels.png`};function nf({children:o}){return c.jsx("span",{style:{fontSize:"10px",color:"#8E8E93",textTransform:"uppercase",letterSpacing:"0.07em",fontWeight:"600"},children:o})}function X({label:o,children:e,right:t}){return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsx(nf,{children:o}),t]}),e]})}function bo({options:o,value:e,onChange:t}){return c.jsx("div",{style:{display:"flex",background:"#EFEFEF",borderRadius:"8px",padding:"2px",gap:"2px"},children:o.map(n=>{const i=e===n.value;return c.jsx("button",{onClick:()=>t(n.value),style:{flex:1,padding:"5px 4px",background:i?"#FFFFFF":"transparent",border:"none",borderRadius:"6px",boxShadow:i?"0 1px 3px rgba(0,0,0,0.12)":"none",color:i?"#1D1D1F":"#6C6C70",cursor:"pointer",fontSize:"12px",fontWeight:i?"600":"400",transition:"all 0.15s",whiteSpace:"nowrap",fontFamily:"inherit"},children:n.label},n.value)})})}const Tn={numerical:{label:"Numerical",type:"numerical"},categorical:{label:"Categorical",type:"categorical"},weight:{label:"Weight",type:"numerical"},garbageType:{label:"Garbage Type",type:"categorical"},count:{label:"Count",type:"numerical"},section:{label:"Section",type:"categorical"}};function di({children:o,accepts:e,onDrop:t}){const[n,i]=R.useState(!1),r=e==="any"?["phys-var/numerical","phys-var/categorical"]:[`phys-var/${e}`],s=l=>r.some(A=>l.includes(A)),a=e==="categorical"?"#5E5CE6":"#007AFF";return c.jsx("div",{onDragOver:l=>{s(l.dataTransfer.types)&&(l.preventDefault(),i(!0))},onDragLeave:()=>i(!1),onDrop:l=>{s(l.dataTransfer.types)&&(l.preventDefault(),i(!1),t(l.dataTransfer.getData("phys-var/name")))},style:{borderRadius:"8px",outline:n?`2px dashed ${a}`:"2px dashed transparent",outlineOffset:"2px",transition:"outline 0.1s"},children:o})}function fi({label:o,type:e,onClear:t}){return c.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"#EBF3FF",border:"1px solid #A8CAFF",borderRadius:"7px",padding:"6px 10px",fontSize:"12px",color:"#007AFF",fontWeight:"500"},children:[c.jsxs("span",{children:[e==="numerical"?"#":"◈"," ",o]}),c.jsx("button",{onClick:t,style:{background:"none",border:"none",cursor:"pointer",color:"#60A0EE",padding:"0 0 0 2px",fontSize:"14px",lineHeight:1,fontFamily:"inherit"},children:"×"})]})}const sf={top:"↑",bottom:"↓",left:"←",right:"→"};function ko({position:o,slot:e,onAdd:t,onRemove:n}){const[i,r]=R.useState(!1),s=u=>u.dataTransfer.types.some(d=>d==="phys-var/numerical"||d==="phys-var/categorical"),a=u=>{s(u)&&(u.preventDefault(),r(!0))},l=()=>r(!1),A=u=>{s(u)&&(u.preventDefault(),r(!1),t(u.dataTransfer.getData("phys-var/name")))};return e.length>0?c.jsx("div",{onDragOver:a,onDragLeave:l,onDrop:A,title:`Drop another variable to add it to the ${o} label`,style:{display:"flex",flexDirection:"column",gap:"3px",borderRadius:"6px",outline:i?"1px dashed #007AFF":"none",outlineOffset:"2px"},children:e.map(u=>{const d=Tn[u];return c.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"3px",background:d.type==="numerical"?"#EBF3FF":"#F3EBFF",border:`1px solid ${d.type==="numerical"?"#A8CAFF":"#C8A8FF"}`,borderRadius:"6px",padding:"2px 3px 2px 6px",fontSize:"10px",fontWeight:"600",color:d.type==="numerical"?"#007AFF":"#5E5CE6",whiteSpace:"nowrap"},children:[d.type==="numerical"?"#":"◈"," ",d.label,c.jsx("button",{onClick:()=>n(u),style:{background:"none",border:"none",cursor:"pointer",color:"#AEAEB2",padding:"0 2px",fontSize:"12px",lineHeight:1,fontFamily:"inherit"},children:"×"})]},u)})}):c.jsxs("div",{onDragOver:a,onDragLeave:l,onDrop:A,title:`Drag a variable to the ${o} label`,style:{border:`1.5px dashed ${i?"#007AFF":"#D1D1D6"}`,borderRadius:"7px",padding:"4px 8px",fontSize:"10px",color:i?"#007AFF":"#AEAEB2",textAlign:"center",whiteSpace:"nowrap",background:i?"#EBF3FF":"transparent",transition:"all 0.1s",cursor:"default",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px"},children:[c.jsx("span",{children:sf[o]}),c.jsx("span",{style:{textTransform:"capitalize"},children:o})]})}function Br({config:o,onChange:e}){function t(i,r){const s=o.slots[i];s.includes(r)||e({...o,slots:{...o.slots,[i]:[...s,r]}})}function n(i,r){e({...o,slots:{...o.slots,[i]:o.slots[i].filter(s=>s!==r)}})}return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsx("button",{onClick:()=>e({...o,show:!o.show}),style:{alignSelf:"flex-start",background:o.show?"#EBF3FF":"#F2F2F7",border:`1px solid ${o.show?"#A8CAFF":"#D1D1D6"}`,color:o.show?"#007AFF":"#6C6C70",borderRadius:"6px",padding:"6px 14px",fontSize:"12px",fontWeight:o.show?"600":"400",cursor:"pointer",fontFamily:"inherit",transition:"all 0.15s"},children:o.show?"● Visible":"○ Hidden"}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto 1fr",gridTemplateRows:"auto auto auto",gap:"4px",alignItems:"center",justifyItems:"center"},children:[c.jsx("div",{}),c.jsx(ko,{position:"top",slot:o.slots.top,onAdd:i=>t("top",i),onRemove:i=>n("top",i)}),c.jsx("div",{}),c.jsx(ko,{position:"left",slot:o.slots.left,onAdd:i=>t("left",i),onRemove:i=>n("left",i)}),c.jsx("div",{style:{width:"18px",height:"18px",background:"#E5E5EA",borderRadius:"4px",flexShrink:0}}),c.jsx(ko,{position:"right",slot:o.slots.right,onAdd:i=>t("right",i),onRemove:i=>n("right",i)}),c.jsx("div",{}),c.jsx(ko,{position:"bottom",slot:o.slots.bottom,onAdd:i=>t("bottom",i),onRemove:i=>n("bottom",i)}),c.jsx("div",{})]})]})}function Ne({icon:o,title:e,open:t=!1,onToggle:n,children:i,empty:r=!1}){return c.jsxs("div",{style:{border:"1px solid #E5E5EA",borderRadius:"10px",overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},children:[c.jsxs("button",{onClick:n,style:{display:"flex",alignItems:"center",gap:"9px",padding:"9px 12px",width:"100%",textAlign:"left",background:"#F8F8FA",border:"none",borderBottom:t&&!r?"1px solid #E5E5EA":"none",cursor:"pointer",fontFamily:"inherit",transition:"background 0.1s"},children:[c.jsx("img",{src:o,alt:e,style:{width:"24px",height:"24px",borderRadius:"6px",flexShrink:0,objectFit:"cover"}}),c.jsx("span",{style:{flex:1,fontSize:"12px",fontWeight:"600",color:"#1D1D1F",lineHeight:1},children:e}),c.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",transition:"transform 0.15s",display:"inline-block",transform:t?"rotate(0deg)":"rotate(-90deg)"},children:"▾"})]}),t&&c.jsx("div",{style:{padding:"12px",background:"#FFFFFF",display:"flex",flexDirection:"column",gap:"12px"},children:r?c.jsx("div",{style:{fontSize:"11px",color:"#C7C7CC",textAlign:"center",padding:"8px 0",fontStyle:"italic"},children:"Coming soon"}):i})]})}function In(o,e){const[t,n]=R.useState(o);return R.useEffect(()=>{e!==void 0&&n(e)},[e]),{isOpen:i=>t===i,toggle:i=>n(r=>r===i?"":i)}}function gt({label:o,value:e,onChange:t,min:n,max:i,step:r=.1,lockable:s=!1,axisBindings:a,onAxisBind:l,axes:A}){const[u,d]=R.useState(!1),[f,h]=R.useState(null),y=A??["x","y","z"];function g(m,p){if(u&&e[m]!==0){const b=p/e[m];t({x:m==="x"?p:parseFloat((e.x*b).toFixed(3)),y:m==="y"?p:parseFloat((e.y*b).toFixed(3)),z:m==="z"?p:parseFloat((e.z*b).toFixed(3))})}else t({...e,[m]:p})}const x=s?c.jsx("button",{onClick:m=>{m.stopPropagation(),d(!u)},title:u?"Unlock proportions":"Lock proportions (scale all axes together)",style:{background:u?"#007AFF":"transparent",border:`1px solid ${u?"#007AFF":"#D1D1D6"}`,borderRadius:"4px",padding:"1px 7px",lineHeight:"16px",cursor:"pointer",fontSize:"10px",color:u?"#fff":"#AEAEB2",fontFamily:"inherit",transition:"all 0.12s"},children:"⛓"}):void 0;return c.jsx(X,{label:o,right:x,children:c.jsx("div",{style:{display:"flex",gap:"5px"},children:y.map(m=>{const p=(a==null?void 0:a[m])??null,b=f===m;if(p!==null&&l){const C=Tn[p];return c.jsx("div",{style:{flex:1},children:c.jsxs("div",{style:{display:"flex",alignItems:"stretch",border:`1px solid ${C.type==="numerical"?"#A8CAFF":"#C8A8FF"}`,borderRadius:"6px",overflow:"hidden",background:C.type==="numerical"?"#EBF3FF":"#F3EBFF"},children:[c.jsx("span",{style:{padding:"4px 5px",background:C.type==="numerical"?"#C5DFFF":"#DFC5FF",color:C.type==="numerical"?"#0055CC":"#5500CC",fontSize:"9px",fontWeight:"700",letterSpacing:"0.03em",display:"flex",alignItems:"center",flexShrink:0},children:m.toUpperCase()}),c.jsxs("span",{style:{flex:1,padding:"4px 4px",fontSize:"10px",color:C.type==="numerical"?"#007AFF":"#5E5CE6",fontWeight:"600",display:"flex",alignItems:"center",overflow:"hidden",whiteSpace:"nowrap"},children:[C.type==="numerical"?"#":"◈"," ",C.label]}),c.jsx("button",{onClick:()=>l(m,null),style:{background:"none",border:"none",cursor:"pointer",color:"#AEAEB2",padding:"0 4px",fontSize:"13px",lineHeight:1,fontFamily:"inherit"},children:"×"})]})},m)}return c.jsx("div",{style:{flex:1},onDragOver:C=>{a&&C.dataTransfer.types.includes("phys-var/numerical")&&(C.preventDefault(),h(m))},onDragLeave:()=>h(null),onDrop:C=>{!a||!C.dataTransfer.types.includes("phys-var/numerical")||(C.preventDefault(),h(null),l==null||l(m,C.dataTransfer.getData("phys-var/name")))},children:c.jsxs("div",{style:{display:"flex",alignItems:"stretch",border:`1px solid ${b?"#007AFF":"#D1D1D6"}`,borderRadius:"6px",overflow:"hidden",outline:b?"1px dashed #007AFF":"none",outlineOffset:"1px"},children:[c.jsx("span",{style:{padding:"4px 5px",background:"#E5E5EA",color:"#6C6C70",fontSize:"9px",fontWeight:"700",letterSpacing:"0.03em",display:"flex",alignItems:"center",flexShrink:0},children:m.toUpperCase()}),c.jsx("input",{type:"number",value:e[m],min:n,max:i,step:r,onChange:C=>g(m,Number(C.target.value)),style:{flex:1,minWidth:0,background:"#F2F2F7",border:"none",padding:"4px 5px",fontSize:"11px",color:"#1D1D1F",outline:"none",fontFamily:"monospace",width:"100%"}})]})},m)})})})}const Rr={plastic:"Matte diffuse surface",fluid:"Glass-like, clearcoat + iridescence",metal:"Polished — mirrors the HDRI",emissive:"Self-illuminated, glows with color",original:"Use the model's built-in materials"},vr=["plastic","fluid","metal","emissive"],rf=[{value:"alignment",label:"Alignment"},{value:"scattering",label:"Scattering"},{value:"stacking",label:"Stacking"},{value:"surface",label:"Surface Placement"},{value:"adjacent",label:"Adjacent Placement"}],af=[{value:"city",label:"City"},{value:"warehouse",label:"Warehouse"},{value:"sunset",label:"Sunset"},{value:"dawn",label:"Dawn"},{value:"forest",label:"Forest"},{value:"night",label:"Night"},{value:"studio",label:"Studio"},{value:"apartment",label:"Apartment"}];function Ci({title:o}){return c.jsx("div",{style:{fontSize:"16px",color:"#1D1D1F",fontWeight:"700"},children:o})}function un({config:o,onChange:e}){const t=R.useRef(null),n=R.useRef(null),i=R.useContext(Kr),r=o.shape==="custom"?o.customModelName:void 0,s=!!r&&(i.some(y=>y.name===r)||ho.some(y=>y.name===r)),a=o.shape==="custom"&&!s,l=s&&r&&!i.some(y=>y.name===r)?ho.find(y=>y.name===r):void 0,A=l?[l,...i]:i,u=o.shape!=="custom"?o.shape:s?`preset:${o.customModelName}`:o.customModelUrl?"__blob__":"box";function d(y){var m;const g=y.target.value;if(g==="__import__"){(m=t.current)==null||m.click();return}if(g==="__blob__")return;if(g.startsWith("preset:")){const p=g.slice(7),b=i.find(C=>C.name===p)??ho.find(C=>C.name===p);b&&e({shape:"custom",customModelUrl:b.url,customModelHasMat:!0,customModelName:b.name,material:"original"});return}const x=o.material==="original"?"plastic":o.material;e({shape:g,customModelUrl:void 0,customModelHasMat:void 0,customModelName:void 0,material:x})}function f(y){var p;const g=(p=y.target.files)==null?void 0:p[0];if(!g)return;n.current&&URL.revokeObjectURL(n.current);const x=URL.createObjectURL(g);n.current=x;const m=g.name.replace(/\.(glb|gltf)$/i,"");e({shape:"custom",customModelUrl:x,customModelHasMat:!0,customModelName:m,material:"original"}),y.target.value=""}const h={width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"};return c.jsxs(c.Fragment,{children:[c.jsxs("select",{value:u,onChange:d,style:h,children:[A.length>0&&c.jsx("optgroup",{label:"3D Models",children:A.map(y=>c.jsx("option",{value:`preset:${y.name}`,children:y.name},y.name))}),c.jsxs("optgroup",{label:"Primitives",children:[c.jsx("option",{value:"box",children:"■  Box"}),c.jsx("option",{value:"sphere",children:"●  Sphere"}),c.jsx("option",{value:"star",children:"★  Star"})]}),c.jsxs("optgroup",{label:"Custom",children:[a&&c.jsxs("option",{value:"__blob__",children:["✎  ",o.customModelName??"Imported file"]}),c.jsx("option",{value:"__import__",children:"↑  Import .glb / .gltf…"})]})]}),c.jsx("input",{ref:t,type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:f})]})}function lf({config:o,onChange:e,bindings:t,onBind:n,labelConfig:i,onLabelChange:r,colorMode:s,colorGradient:a,onColorGradientChange:l,colorTint:A,onColorTintChange:u,openSection:d,layers:f,compositionLevel:h}){var x,m;const y=o.shape==="custom"&&o.customModelHasMat?["original","plastic","fluid","metal","emissive"]:vr,g=In("Spatial",d);return c.jsxs(c.Fragment,{children:[c.jsx(Ci,{title:"Mark"}),c.jsxs(Ne,{icon:Ge.spatial,title:"Spatial",open:g.isOpen("Spatial"),onToggle:()=>g.toggle("Spatial"),children:[c.jsx(gt,{label:"Position",value:o.position,onChange:p=>e({...o,position:p}),min:-10,max:10,step:.1}),c.jsx(X,{label:"Scale",children:t.markScale!==null?c.jsx(fi,{label:Tn[t.markScale].label,type:"numerical",onClear:()=>n("markScale",null)}):c.jsx(di,{accepts:"numerical",onDrop:p=>n("markScale",p),children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:.1,max:10,step:.1,value:o.scale??1,onChange:p=>e({...o,scale:Number(p.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:[(o.scale??1).toFixed(1),"×"]})]})})}),c.jsx(gt,{label:"Size",value:o.size,onChange:p=>e({...o,size:p}),min:.1,max:10,step:.1,lockable:!0,axisBindings:{x:t.markSizeX,y:t.markSizeY,z:t.markSizeZ},onAxisBind:(p,b)=>n(p==="x"?"markSizeX":p==="y"?"markSizeY":"markSizeZ",b)}),c.jsx(gt,{label:"Orientation",value:o.orientation,onChange:p=>e({...o,orientation:p}),min:-180,max:180,step:1})]}),c.jsx(Ne,{icon:Ge.shape,title:"Geometry",open:g.isOpen("Geometry"),onToggle:()=>g.toggle("Geometry"),children:t.markGeometry!==null&&f.length>1?f.map(p=>{var F;const b=(F=o.categoryShapes)==null?void 0:F[p.name],C={shape:(b==null?void 0:b.shape)??o.shape,material:o.material,customModelUrl:b==null?void 0:b.customModelUrl,customModelHasMat:b==null?void 0:b.customModelHasMat,customModelName:b==null?void 0:b.customModelName};return c.jsx(X,{label:p.name,children:c.jsx(un,{config:C,onChange:K=>e({...o,categoryShapes:{...o.categoryShapes??{},[p.name]:{shape:K.shape??(b==null?void 0:b.shape)??o.shape,customModelUrl:K.customModelUrl,customModelHasMat:K.customModelHasMat,customModelName:K.customModelName}}})})},p.id)}):c.jsx(X,{label:"Shape",children:c.jsx(un,{config:o,onChange:p=>e({...o,...p})})})}),c.jsxs(Ne,{icon:Ge.material,title:"Material",open:g.isOpen("Material"),onToggle:()=>g.toggle("Material"),children:[c.jsxs(X,{label:"Type",children:[c.jsx("select",{value:o.material,onChange:p=>e({...o,material:p.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:y.map(p=>c.jsx("option",{value:p,children:p.charAt(0).toUpperCase()+p.slice(1)},p))}),c.jsx("div",{style:{fontSize:"11px",color:"#AEAEB2",lineHeight:1.5},children:Rr[o.material]})]}),c.jsx(X,{label:"Color",children:t.markColor!==null?c.jsxs(c.Fragment,{children:[c.jsx(fi,{label:((x=as[t.markColor])==null?void 0:x.label)??t.markColor,type:((m=as[t.markColor])==null?void 0:m.type)??"categorical",onClear:()=>n("markColor",null)}),s==="continuous"&&a&&l&&c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginTop:"8px"},children:[c.jsx("input",{type:"color",value:a.from,onChange:p=>l({...a,from:p.target.value}),style:{width:"32px",height:"28px",border:"1px solid #D1D1D6",borderRadius:"5px",background:"none",cursor:"pointer",padding:"1px"}}),c.jsx("span",{style:{fontSize:"12px",color:"#AEAEB2",fontWeight:"500"},children:"→"}),c.jsx("input",{type:"color",value:a.to,onChange:p=>l({...a,to:p.target.value}),style:{width:"32px",height:"28px",border:"1px solid #D1D1D6",borderRadius:"5px",background:"none",cursor:"pointer",padding:"1px"}}),c.jsx("span",{style:{fontSize:"11px",color:"#8E8E93"},children:"Gradient"})]}),o.shape==="custom"&&u&&c.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"8px",fontSize:"12px",color:"#1D1D1F",cursor:"pointer"},children:[c.jsx("input",{type:"checkbox",checked:A??!1,onChange:p=>u(p.target.checked),style:{accentColor:"#5E5CE6",width:"14px",height:"14px",cursor:"pointer"}}),c.jsx("span",{children:"Tint model (keep its material)"})]})]}):c.jsx(di,{accepts:"categorical",onDrop:()=>n("markColor","garbageType"),children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"2px"},children:[c.jsx("input",{type:"color",value:o.color,onChange:p=>e({...o,color:p.target.value}),style:{width:"36px",height:"32px",border:"1px solid #D1D1D6",borderRadius:"6px",background:"none",cursor:"pointer",padding:"2px"}}),c.jsx("span",{style:{fontSize:"12px",color:"#8E8E93",fontFamily:"monospace"},children:o.color})]})})})]}),c.jsx(Ne,{icon:Ge.labels,title:"Labels",open:g.isOpen("Labels"),onToggle:()=>g.toggle("Labels"),children:c.jsx(Br,{config:i,onChange:r})})]})}function ls({config:o,onChange:e,collectionLevel:t,bindings:n,onBind:i,labelConfig:r,onLabelChange:s,onReseed:a}){const l=t===2,A=In("Groups & Populations");return c.jsxs(c.Fragment,{children:[c.jsx(Ci,{title:"Collection"}),c.jsxs(Ne,{icon:Ge.populations,title:"Groups & Populations",open:A.isOpen("Groups & Populations"),onToggle:()=>A.toggle("Groups & Populations"),children:[c.jsx(X,{label:"Arrangement",children:c.jsx("select",{value:o.arrangement,onChange:u=>e({...o,arrangement:u.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:rf.map(u=>c.jsx("option",{value:u.value,children:u.label},u.value))})}),o.arrangement==="alignment"&&c.jsxs(c.Fragment,{children:[c.jsx(X,{label:"Elements",children:(()=>{const u=t===1?"c1AlignCount":"c2AlignCount",d=n[u],f=t===1?Object.values(n).some(y=>y!==null):n.scatterSize!==null,h={weight:{label:"Weight",type:"numerical"},garbageType:{label:"Garbage Type",type:"categorical"},count:{label:"Count",type:"numerical"}};if(d!==null){const y=h[d]??{label:d,type:"numerical"};return c.jsx(fi,{label:y.label,type:y.type,onClear:()=>i(u,null)})}return f?c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",background:"#F2F2F7",border:"1px solid #E5E5EA",borderRadius:"7px",padding:"5px 10px"},children:[c.jsx("span",{style:{fontSize:"12px",color:"#1D1D1F",fontWeight:"600",flex:1},children:o.alignCount}),c.jsx("span",{style:{fontSize:"9px",color:"#AEAEB2",letterSpacing:"0.06em",fontWeight:"600"},children:"DATA"})]}):c.jsx(di,{accepts:"numerical",onDrop:()=>i(u,"count"),children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:2,max:20,step:1,value:o.alignCount,onChange:y=>e({...o,alignCount:Number(y.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:o.alignCount})]})})})()}),c.jsx(X,{label:"Axis",children:c.jsx(bo,{options:[{value:"X",label:"→ X axis"},{value:"Y",label:"↑ Y axis"}],value:o.alignAxis,onChange:u=>e({...o,alignAxis:u})})}),c.jsx(X,{label:"Anchor",children:c.jsx(bo,{options:o.alignAxis==="X"?[{value:"start",label:"↑ Top"},{value:"center",label:"◆ Ctr"},{value:"end",label:"↓ Bottom"}]:[{value:"start",label:"← Left"},{value:"center",label:"◆ Ctr"},{value:"end",label:"→ Right"}],value:o.alignAnchor,onChange:u=>e({...o,alignAnchor:u})})}),c.jsxs(X,{label:"Spacing",children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:0,max:l?12:6,step:.1,value:o.alignSpacing,onChange:u=>e({...o,alignSpacing:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:o.alignSpacing.toFixed(1)})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#C7C7CC"},children:[c.jsx("span",{children:"Tight"}),c.jsx("span",{children:"Spread"})]})]})]}),o.arrangement==="scattering"&&c.jsxs(c.Fragment,{children:[c.jsx(X,{label:"Quantity",children:c.jsx("div",{style:{display:"flex",gap:"4px"},children:["count","density"].map(u=>c.jsx("button",{onClick:()=>e({...o,scatterMode:u}),style:{flex:1,padding:"5px 0",background:(o.scatterMode??"count")===u?"#5E5CE6":"#F2F2F7",color:(o.scatterMode??"count")===u?"#fff":"#6C6C70",border:"1px solid",borderColor:(o.scatterMode??"count")===u?"#5E5CE6":"#E5E5EA",borderRadius:"6px",cursor:"pointer",fontSize:"11px",fontWeight:"600",fontFamily:"inherit"},children:u==="count"?"Population":"Density"},u))})}),(o.scatterMode??"count")==="count"?c.jsx(X,{label:"Mark Count",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:5,max:600,step:5,value:o.scatterCount,onChange:u=>e({...o,scatterCount:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:o.scatterCount})]})}):c.jsx(X,{label:"Density",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:.05,max:5,step:.05,value:o.scatterDensity,onChange:u=>e({...o,scatterDensity:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"36px",textAlign:"right"},children:[o.scatterDensity.toFixed(2),"/u³"]})]})}),c.jsx(X,{label:"Volume",children:c.jsx("div",{style:{display:"flex",width:"100%"},children:["box","sphere"].map((u,d)=>c.jsx("button",{onClick:()=>e({...o,scatterBoundingVolume:u}),style:{flex:1,padding:"5px 0",background:(o.scatterBoundingVolume??"box")===u?"#5E5CE6":"#F2F2F7",color:(o.scatterBoundingVolume??"box")===u?"#fff":"#6C6C70",border:"1px solid",borderColor:(o.scatterBoundingVolume??"box")===u?"#5E5CE6":"#E5E5EA",borderRadius:d===0?"6px 0 0 6px":"0 6px 6px 0",cursor:"pointer",fontFamily:"inherit",fontSize:"11px",fontWeight:"600"},children:u==="box"?"□ Box":"○ Sphere"},u))})}),n.scatterSize!==null?c.jsxs(c.Fragment,{children:[c.jsx(X,{label:"Dimensions",children:c.jsx(fi,{label:"Number of Instruments",type:"numerical",onClear:()=>i("scatterSize",null)})}),c.jsx(X,{label:"Size axes",children:c.jsx("div",{style:{display:"flex",gap:"4px"},children:["x","y","z"].map(u=>{const d=o.scatterSizeAxes??{x:!1,y:!0,z:!1},f=d[u];return c.jsx("button",{onClick:()=>e({...o,scatterSizeAxes:{...d,[u]:!f}}),style:{flex:1,padding:"6px 0",borderRadius:"7px",border:`1px solid ${f?"#A8CAFF":"#E5E5EA"}`,background:f?"#EBF3FF":"#F2F2F7",color:f?"#007AFF":"#6C6C70",fontWeight:f?"700":"500",fontSize:"12px",cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"},children:u},u)})})})]}):c.jsx(di,{accepts:"numerical",onDrop:()=>i("scatterSize","numerical"),children:c.jsx(gt,{label:"Dimensions",value:o.scatterDimensions,onChange:u=>e({...o,scatterDimensions:u}),min:.5,max:20,step:.5})}),c.jsx(X,{label:"Orientation",children:c.jsx("div",{style:{display:"flex",width:"100%"},children:["random","static"].map((u,d)=>c.jsx("button",{onClick:()=>e({...o,scatterOrientation:u}),style:{flex:1,padding:"5px 0",background:(o.scatterOrientation??"random")===u?"#5E5CE6":"#F2F2F7",color:(o.scatterOrientation??"random")===u?"#fff":"#6C6C70",border:"1px solid",borderColor:(o.scatterOrientation??"random")===u?"#5E5CE6":"#E5E5EA",borderRadius:d===0?"6px 0 0 6px":"0 6px 6px 0",cursor:"pointer",fontFamily:"inherit",fontSize:"11px",fontWeight:"600"},children:u==="random"?"Random":"Static"},u))})}),c.jsx(X,{label:"Show Bounds",children:c.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"7px",cursor:"pointer"},children:[c.jsx("input",{type:"checkbox",checked:o.scatterShowBounds??!0,onChange:u=>e({...o,scatterShowBounds:u.target.checked}),style:{accentColor:"#5E5CE6",width:"14px",height:"14px",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"11px",color:"#6C6C70"},children:"Visible"})]})}),o.object&&c.jsx(X,{label:"Exclusion Zone",children:c.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"7px",cursor:"pointer"},children:[c.jsx("input",{type:"checkbox",checked:o.scatterExcludeObject??!1,onChange:u=>e({...o,scatterExcludeObject:u.target.checked}),style:{accentColor:"#5E5CE6",width:"14px",height:"14px",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"11px",color:"#6C6C70"},children:"Keep marks out of the object"})]})}),a&&c.jsx(X,{label:"Placement",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"6px",cursor:"pointer",flex:1},children:[c.jsx("input",{type:"checkbox",checked:o.scatterEven??!1,onChange:u=>e({...o,scatterEven:u.target.checked}),style:{accentColor:"#5E5CE6",width:"14px",height:"14px",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"11px",color:"#6C6C70"},children:"Even spread"})]}),c.jsx("button",{onClick:a,style:{padding:"6px 12px",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:"#1D1D1F",fontFamily:"inherit",flexShrink:0},onMouseEnter:u=>u.currentTarget.style.background="#E5E5EA",onMouseLeave:u=>u.currentTarget.style.background="#F2F2F7",children:"Randomise"})]})})]}),o.arrangement==="piling"&&c.jsx(X,{label:"Mark Count",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:2,max:60,step:1,value:o.pilingCount,onChange:u=>e({...o,pilingCount:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:o.pilingCount})]})}),o.arrangement==="surface"&&c.jsxs(c.Fragment,{children:[c.jsx(X,{label:"Surface",children:c.jsx("span",{style:{fontSize:"11px",color:"#AEAEB2",lineHeight:1.4},children:o.object?"Marks are placed on the collection object (below).":"Add an object below (Geometry) to use as the surface."})}),c.jsx(X,{label:"Mark Count",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:1,max:200,step:1,value:o.surfaceCount??24,onChange:u=>e({...o,surfaceCount:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:o.surfaceCount??24})]})}),c.jsx(X,{label:"Mark Size",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:.1,max:4,step:.1,value:o.surfaceScale??1,onChange:u=>e({...o,surfaceScale:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:[(o.surfaceScale??1).toFixed(1),"×"]})]})}),a&&c.jsx(X,{label:"Placement",children:c.jsx("button",{onClick:a,style:{padding:"6px 12px",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:"#1D1D1F",fontFamily:"inherit"},onMouseEnter:u=>u.currentTarget.style.background="#E5E5EA",onMouseLeave:u=>u.currentTarget.style.background="#F2F2F7",children:"Randomise"})})]}),o.arrangement==="adjacent"&&c.jsxs(c.Fragment,{children:[c.jsx(We,{label:"Mark Count",value:o.scatterCount,min:1,max:200,step:1,onChange:u=>e({...o,scatterCount:u})}),c.jsx(gt,{label:"Surface size",value:o.scatterDimensions,onChange:u=>e({...o,scatterDimensions:u}),min:.1,max:30,step:.1,axes:["x","z"]}),c.jsx(Co,{label:"Show grid",checked:o.adjacentShowGrid??!1,onChange:u=>e({...o,adjacentShowGrid:u})}),a&&c.jsx(X,{label:"Placement",children:c.jsx("button",{onClick:a,style:{padding:"6px 12px",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:"#1D1D1F",fontFamily:"inherit"},onMouseEnter:u=>u.currentTarget.style.background="#E5E5EA",onMouseLeave:u=>u.currentTarget.style.background="#F2F2F7",children:"Randomise"})})]}),o.arrangement==="stacking"&&c.jsxs(c.Fragment,{children:[c.jsx(We,{label:"Mark Count",value:o.scatterCount,min:1,max:100,step:1,onChange:u=>e({...o,scatterCount:u})}),c.jsx(Co,{label:"Random orientation",checked:o.stackingRandomOrient??!1,onChange:u=>e({...o,stackingRandomOrient:u})})]})]}),o.object?c.jsxs(c.Fragment,{children:[c.jsx(Sr,{config:o.object,onChange:u=>e({...o,object:u}),acc:A}),c.jsx("button",{onClick:()=>e({...o,object:null,scatterExcludeObject:!1}),style:{width:"100%",padding:"9px",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"9px",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:"#3A3A3C",fontFamily:"inherit"},onMouseEnter:u=>u.currentTarget.style.background="#E9E9EE",onMouseLeave:u=>u.currentTarget.style.background="#F2F2F7",children:"Remove object"})]}):c.jsx("button",{onClick:()=>e({...o,object:uf(`col${t}-object`)}),style:{width:"100%",padding:"9px",background:"#F2F2F7",border:"1px dashed #C7C7CC",borderRadius:"9px",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:"#3A3A3C",fontFamily:"inherit"},onMouseEnter:u=>u.currentTarget.style.background="#E9E9EE",onMouseLeave:u=>u.currentTarget.style.background="#F2F2F7",children:"+ Add object"}),t===1&&r&&s&&c.jsx(Ne,{icon:Ge.labels,title:"Labels",open:A.isOpen("Labels"),onToggle:()=>A.toggle("Labels"),children:c.jsx(Br,{config:r,onChange:s})})]})}function Sr({config:o,onChange:e,acc:t}){const n=o.shape==="custom"&&o.customModelHasMat?["original","plastic","fluid","metal","emissive"]:vr;return c.jsxs(c.Fragment,{children:[c.jsxs(Ne,{icon:Ge.spatial,title:"Spatial",open:t.isOpen("Spatial"),onToggle:()=>t.toggle("Spatial"),children:[c.jsx(gt,{label:"Position",value:o.position,onChange:i=>e({...o,position:i}),min:-20,max:20,step:.1}),c.jsx(gt,{label:"Size",value:o.size,onChange:i=>e({...o,size:i}),min:.1,max:10,step:.1,lockable:!0}),c.jsx(gt,{label:"Orientation",value:o.orientation,onChange:i=>e({...o,orientation:i}),min:-180,max:180,step:1})]}),c.jsx(Ne,{icon:Ge.shape,title:"Geometry",open:t.isOpen("Geometry"),onToggle:()=>t.toggle("Geometry"),children:c.jsx(X,{label:"Shape",children:c.jsx(un,{config:o,onChange:i=>e({...o,...i})})})}),c.jsxs(Ne,{icon:Ge.material,title:"Material",open:t.isOpen("Material"),onToggle:()=>t.toggle("Material"),children:[c.jsxs(X,{label:"Type",children:[c.jsx("select",{value:o.material,onChange:i=>e({...o,material:i.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:n.map(i=>c.jsx("option",{value:i,children:i.charAt(0).toUpperCase()+i.slice(1)},i))}),c.jsx("div",{style:{fontSize:"11px",color:"#AEAEB2",lineHeight:1.5},children:Rr[o.material]})]}),c.jsx(X,{label:"Color",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"2px"},children:[c.jsx("input",{type:"color",value:o.color,onChange:i=>e({...o,color:i.target.value}),style:{width:"36px",height:"32px",border:"1px solid #D1D1D6",borderRadius:"6px",background:"none",cursor:"pointer",padding:"2px"}}),c.jsx("span",{style:{fontSize:"12px",color:"#8E8E93",fontFamily:"monospace"},children:o.color})]})})]})]})}function cf({config:o,onChange:e}){const t=In("Spatial");return c.jsxs(c.Fragment,{children:[c.jsx(Ci,{title:"Decoration"}),c.jsx(Sr,{config:o,onChange:e,acc:t})]})}function uf(o){return{id:o,name:"Object",shape:"box",material:"plastic",color:"#9AA0A6",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}}}function We({label:o,value:e,min:t,max:n,step:i,decimals:r=0,suffix:s="",onChange:a}){return c.jsx(X,{label:o,children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:t,max:n,step:i,value:e,onChange:l=>a(Number(l.target.value)),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"38px",textAlign:"right"},children:[e.toFixed(r),s]})]})})}function jo({label:o,value:e,onChange:t}){return c.jsx(X,{label:o,children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[c.jsx("input",{type:"color",value:e,onChange:n=>t(n.target.value),style:{width:"36px",height:"30px",border:"1px solid #D1D1D6",borderRadius:"6px",background:"none",cursor:"pointer",padding:"2px"}}),c.jsx("span",{style:{fontSize:"12px",color:"#8E8E93",fontFamily:"monospace"},children:e})]})})}function Co({label:o,checked:e,onChange:t}){return c.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"12px",color:"#1D1D1F",cursor:"pointer",padding:"2px 0"},children:[c.jsx("input",{type:"checkbox",checked:e,onChange:n=>t(n.target.checked),style:{accentColor:"#5E5CE6",width:"14px",height:"14px",cursor:"pointer"}}),c.jsx("span",{children:o})]})}function Af({config:o,onChange:e}){const[t,n]=R.useState(!0),[i,r]=R.useState(!1),s=o.sceneTitleShow??!0,a=o.sceneTitleOffset??2.5,l=o.sceneTitleBelow??!1;return c.jsxs(c.Fragment,{children:[c.jsx(Ci,{title:"Scene"}),c.jsxs(Ne,{icon:Ge.framing,title:"Framing",open:t,onToggle:()=>n(A=>!A),children:[c.jsx(X,{label:"Background",children:c.jsxs("select",{value:o.background,onChange:A=>e({...o,background:A.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:[c.jsx("option",{value:"dark",children:"Dark"}),c.jsx("option",{value:"color",children:"Solid colour"}),c.jsx("option",{value:"gradient",children:"Gradient"}),c.jsx("option",{value:"hdri",children:"HDRI"}),c.jsx("option",{value:"sky",children:"Sky"}),c.jsx("option",{value:"ocean",children:"Ocean"})]})}),o.background==="color"&&c.jsx(jo,{label:"Colour",value:o.bgColor??"#202024",onChange:A=>e({...o,bgColor:A})}),o.background==="gradient"&&c.jsxs(c.Fragment,{children:[c.jsx(jo,{label:"Top",value:o.bgGradientTop??"#3a5f8a",onChange:A=>e({...o,bgGradientTop:A})}),c.jsx(jo,{label:"Bottom",value:o.bgGradientBottom??"#0a0a12",onChange:A=>e({...o,bgGradientBottom:A})})]}),o.background==="hdri"&&c.jsxs(c.Fragment,{children:[c.jsx(We,{label:"Blur",value:o.hdriBlur??0,min:0,max:1,step:.02,decimals:2,onChange:A=>e({...o,hdriBlur:A})}),c.jsx(We,{label:"Brightness",value:o.hdriIntensity??1,min:0,max:2,step:.05,decimals:2,onChange:A=>e({...o,hdriIntensity:A})})]}),o.background==="sky"&&c.jsxs(c.Fragment,{children:[c.jsx(We,{label:"Sun elevation",value:o.skyElevation??20,min:-5,max:90,step:1,suffix:"°",onChange:A=>e({...o,skyElevation:A})}),c.jsx(We,{label:"Sun azimuth",value:o.skyAzimuth??140,min:0,max:360,step:1,suffix:"°",onChange:A=>e({...o,skyAzimuth:A})})]}),c.jsx(X,{label:"Lighting (HDRI)",children:c.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px"},children:af.map(A=>{const u=o.hdriPreset===A.value;return c.jsx("button",{onClick:()=>e({...o,hdriPreset:A.value}),style:{padding:"5px 6px",background:u?"#EBF3FF":"#F2F2F7",border:`1px solid ${u?"#A8CAFF":"#E5E5EA"}`,borderRadius:"7px",color:u?"#007AFF":"#6C6C70",cursor:"pointer",fontSize:"11px",fontFamily:"inherit",fontWeight:u?"600":"400",transition:"all 0.1s",textAlign:"center"},children:A.label},A.value)})})}),c.jsx(We,{label:"Exposure",value:o.exposure??(o.background==="ocean"?.95:o.background==="dark"?1.35:1.2),min:.2,max:3,step:.05,decimals:2,onChange:A=>e({...o,exposure:A})}),c.jsx(We,{label:"Env. rotation",value:o.envRotation??0,min:0,max:360,step:1,suffix:"°",onChange:A=>e({...o,envRotation:A})}),c.jsx(X,{label:"Atmosphere",children:c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[c.jsx(Co,{label:"Stars",checked:o.stars??!1,onChange:A=>e({...o,stars:A})}),c.jsx(Co,{label:"Grid",checked:o.grid??!1,onChange:A=>e({...o,grid:A})}),c.jsx(Co,{label:"Fog",checked:o.fog??!1,onChange:A=>e({...o,fog:A})})]})}),o.fog&&c.jsxs(c.Fragment,{children:[c.jsx(jo,{label:"Fog colour",value:o.fogColor??"#8090a0",onChange:A=>e({...o,fogColor:A})}),c.jsx(We,{label:"Fog near",value:o.fogNear??20,min:0,max:100,step:1,onChange:A=>e({...o,fogNear:A})}),c.jsx(We,{label:"Fog far",value:o.fogFar??150,min:10,max:400,step:5,onChange:A=>e({...o,fogFar:A})})]}),c.jsxs(X,{label:"Camera",children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"2px"},children:[c.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",fontWeight:"500"},children:[o.focalLength,"mm"]}),c.jsxs("span",{style:{fontSize:"11px",color:"#AEAEB2"},children:[of(o.focalLength).toFixed(0),"° fov"]})]}),c.jsx("input",{type:"range",min:14,max:180,step:1,value:o.focalLength,onChange:A=>e({...o,focalLength:Number(A.target.value)}),style:{width:"100%",accentColor:"#34C759",cursor:"pointer"}}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#AEAEB2",marginTop:"2px"},children:[c.jsx("span",{children:"14mm wide"}),c.jsx("span",{children:"180mm tele"})]})]})]}),c.jsxs(Ne,{icon:Ge.labels,title:"Label",open:i,onToggle:()=>r(A=>!A),children:[c.jsx(X,{label:"Show title",children:c.jsx(bo,{options:[{value:"on",label:"On"},{value:"off",label:"Off"}],value:s?"on":"off",onChange:A=>e({...o,sceneTitleShow:A==="on"})})}),s&&c.jsxs(c.Fragment,{children:[c.jsx(X,{label:"Side",children:c.jsx(bo,{options:[{value:"above",label:"↑ Above"},{value:"below",label:"↓ Below"}],value:l?"below":"above",onChange:A=>e({...o,sceneTitleBelow:A==="below"})})}),c.jsx(X,{label:"Distance",children:c.jsx("input",{type:"number",min:0,max:15,step:.1,value:a,onChange:A=>e({...o,sceneTitleOffset:Math.max(0,Number(A.target.value)||0)}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"6px",padding:"6px 8px",fontSize:"12px",color:"#1D1D1F",fontFamily:"inherit",outline:"none",boxSizing:"border-box"}})})]}),c.jsxs(X,{label:"Hide behind objects",children:[c.jsx(bo,{options:[{value:"off",label:"Off"},{value:"full",label:"Full"},{value:"optimized",label:"Optimized"}],value:o.sceneLabelOcclude??"off",onChange:A=>e({...o,sceneLabelOcclude:A})}),c.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",marginTop:"4px",display:"block"},children:"Optimized checks only decorations."})]})]})]})}function df({activeElement:o,compositionLevel:e,layers:t,markConfig:n,onMarkChange:i,collection1Config:r,onCollection1Change:s,collection2Config:a,onCollection2Change:l,sceneConfig:A,onSceneChange:u,bindings:d,onBind:f,markLabelConfig:h,onMarkLabelChange:y,colLabelConfig:g,onColLabelChange:x,activeDecorationId:m,decorations:p,onDecorationChange:b,colorMode:C,colorGradient:F,onColorGradientChange:K,colorTint:B,onColorTintChange:S,markOpenSection:v,onReseed:w,models:D}){const M=m!==null?p.find(T=>T.id===m)??null:null;return c.jsx(Kr.Provider,{value:D??ho,children:c.jsx("div",{style:{padding:"18px 14px",color:"#1D1D1F",fontSize:"13px",display:"flex",flexDirection:"column",gap:"10px",boxSizing:"border-box"},children:M!==null?c.jsx(cf,{config:M,onChange:b}):o==="mark"?c.jsx(lf,{config:n,onChange:i,bindings:d,onBind:f,labelConfig:h,onLabelChange:y,colorMode:C,colorGradient:F,onColorGradientChange:K,colorTint:B,onColorTintChange:S,openSection:v,layers:t,compositionLevel:e}):o==="collection1"?c.jsx(ls,{config:r,onChange:s,collectionLevel:1,bindings:d,onBind:f,labelConfig:g,onLabelChange:x,onReseed:w}):o==="collection2"?c.jsx(ls,{config:a,onChange:l,collectionLevel:2,bindings:d,onBind:f,onReseed:w}):o==="scene"?c.jsx(Af,{config:A,onChange:u}):null})})}var ff=Object.defineProperty,pf=(o,e,t)=>e in o?ff(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,cs=(o,e,t)=>(pf(o,typeof e!="symbol"?e+"":e,t),t);const hf=(()=>{const o={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new I},up:{value:new I(0,1,0)}},vertexShader:`
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
      #include <${dr>=154?"colorspace_fragment":"encodings_fragment"}>

      }
    `},e=new Ro({name:"SkyShader",fragmentShader:o.fragmentShader,vertexShader:o.vertexShader,uniforms:Ar.clone(o.uniforms),side:xi,depthWrite:!1});class t extends W{constructor(){super(new Ve(1,1,1),e)}}return cs(t,"SkyShader",o),cs(t,"material",e),t})();var mf=Object.defineProperty,gf=(o,e,t)=>e in o?mf(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,k=(o,e,t)=>(gf(o,typeof e!="symbol"?e+"":e,t),t);let xf=class extends bt{constructor(e,t){super(),k(this,"isTransformControls",!0),k(this,"visible",!1),k(this,"domElement"),k(this,"raycaster",new YA),k(this,"gizmo"),k(this,"plane"),k(this,"tempVector",new I),k(this,"tempVector2",new I),k(this,"tempQuaternion",new re),k(this,"unit",{X:new I(1,0,0),Y:new I(0,1,0),Z:new I(0,0,1)}),k(this,"pointStart",new I),k(this,"pointEnd",new I),k(this,"offset",new I),k(this,"rotationAxis",new I),k(this,"startNorm",new I),k(this,"endNorm",new I),k(this,"rotationAngle",0),k(this,"cameraPosition",new I),k(this,"cameraQuaternion",new re),k(this,"cameraScale",new I),k(this,"parentPosition",new I),k(this,"parentQuaternion",new re),k(this,"parentQuaternionInv",new re),k(this,"parentScale",new I),k(this,"worldPositionStart",new I),k(this,"worldQuaternionStart",new re),k(this,"worldScaleStart",new I),k(this,"worldPosition",new I),k(this,"worldQuaternion",new re),k(this,"worldQuaternionInv",new re),k(this,"worldScale",new I),k(this,"eye",new I),k(this,"positionStart",new I),k(this,"quaternionStart",new re),k(this,"scaleStart",new I),k(this,"camera"),k(this,"object"),k(this,"enabled",!0),k(this,"axis",null),k(this,"mode","translate"),k(this,"translationSnap",null),k(this,"rotationSnap",null),k(this,"scaleSnap",null),k(this,"space","world"),k(this,"size",1),k(this,"dragging",!1),k(this,"showX",!0),k(this,"showY",!0),k(this,"showZ",!0),k(this,"changeEvent",{type:"change"}),k(this,"mouseDownEvent",{type:"mouseDown",mode:this.mode}),k(this,"mouseUpEvent",{type:"mouseUp",mode:this.mode}),k(this,"objectChangeEvent",{type:"objectChange"}),k(this,"intersectObjectWithRay",(i,r,s)=>{const a=r.intersectObject(i,!0);for(let l=0;l<a.length;l++)if(a[l].object.visible||s)return a[l];return!1}),k(this,"attach",i=>(this.object=i,this.visible=!0,this)),k(this,"detach",()=>(this.object=void 0,this.visible=!1,this.axis=null,this)),k(this,"reset",()=>this.enabled?(this.dragging&&this.object!==void 0&&(this.object.position.copy(this.positionStart),this.object.quaternion.copy(this.quaternionStart),this.object.scale.copy(this.scaleStart),this.dispatchEvent(this.changeEvent),this.dispatchEvent(this.objectChangeEvent),this.pointStart.copy(this.pointEnd)),this):this),k(this,"updateMatrixWorld",()=>{this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this.parentPosition,this.parentQuaternion,this.parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this.worldScale),this.parentQuaternionInv.copy(this.parentQuaternion).invert(),this.worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this.cameraScale),this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld()}),k(this,"pointerHover",i=>{if(this.object===void 0||this.dragging===!0)return;this.raycaster.setFromCamera(i,this.camera);const r=this.intersectObjectWithRay(this.gizmo.picker[this.mode],this.raycaster);r?this.axis=r.object.name:this.axis=null}),k(this,"pointerDown",i=>{if(!(this.object===void 0||this.dragging===!0||i.button!==0)&&this.axis!==null){this.raycaster.setFromCamera(i,this.camera);const r=this.intersectObjectWithRay(this.plane,this.raycaster,!0);if(r){let s=this.space;if(this.mode==="scale"?s="local":(this.axis==="E"||this.axis==="XYZE"||this.axis==="XYZ")&&(s="world"),s==="local"&&this.mode==="rotate"){const a=this.rotationSnap;this.axis==="X"&&a&&(this.object.rotation.x=Math.round(this.object.rotation.x/a)*a),this.axis==="Y"&&a&&(this.object.rotation.y=Math.round(this.object.rotation.y/a)*a),this.axis==="Z"&&a&&(this.object.rotation.z=Math.round(this.object.rotation.z/a)*a)}this.object.updateMatrixWorld(),this.object.parent&&this.object.parent.updateMatrixWorld(),this.positionStart.copy(this.object.position),this.quaternionStart.copy(this.object.quaternion),this.scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this.worldScaleStart),this.pointStart.copy(r.point).sub(this.worldPositionStart)}this.dragging=!0,this.mouseDownEvent.mode=this.mode,this.dispatchEvent(this.mouseDownEvent)}}),k(this,"pointerMove",i=>{const r=this.axis,s=this.mode,a=this.object;let l=this.space;if(s==="scale"?l="local":(r==="E"||r==="XYZE"||r==="XYZ")&&(l="world"),a===void 0||r===null||this.dragging===!1||i.button!==-1)return;this.raycaster.setFromCamera(i,this.camera);const A=this.intersectObjectWithRay(this.plane,this.raycaster,!0);if(A){if(this.pointEnd.copy(A.point).sub(this.worldPositionStart),s==="translate")this.offset.copy(this.pointEnd).sub(this.pointStart),l==="local"&&r!=="XYZ"&&this.offset.applyQuaternion(this.worldQuaternionInv),r.indexOf("X")===-1&&(this.offset.x=0),r.indexOf("Y")===-1&&(this.offset.y=0),r.indexOf("Z")===-1&&(this.offset.z=0),l==="local"&&r!=="XYZ"?this.offset.applyQuaternion(this.quaternionStart).divide(this.parentScale):this.offset.applyQuaternion(this.parentQuaternionInv).divide(this.parentScale),a.position.copy(this.offset).add(this.positionStart),this.translationSnap&&(l==="local"&&(a.position.applyQuaternion(this.tempQuaternion.copy(this.quaternionStart).invert()),r.search("X")!==-1&&(a.position.x=Math.round(a.position.x/this.translationSnap)*this.translationSnap),r.search("Y")!==-1&&(a.position.y=Math.round(a.position.y/this.translationSnap)*this.translationSnap),r.search("Z")!==-1&&(a.position.z=Math.round(a.position.z/this.translationSnap)*this.translationSnap),a.position.applyQuaternion(this.quaternionStart)),l==="world"&&(a.parent&&a.position.add(this.tempVector.setFromMatrixPosition(a.parent.matrixWorld)),r.search("X")!==-1&&(a.position.x=Math.round(a.position.x/this.translationSnap)*this.translationSnap),r.search("Y")!==-1&&(a.position.y=Math.round(a.position.y/this.translationSnap)*this.translationSnap),r.search("Z")!==-1&&(a.position.z=Math.round(a.position.z/this.translationSnap)*this.translationSnap),a.parent&&a.position.sub(this.tempVector.setFromMatrixPosition(a.parent.matrixWorld))));else if(s==="scale"){if(r.search("XYZ")!==-1){let u=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(u*=-1),this.tempVector2.set(u,u,u)}else this.tempVector.copy(this.pointStart),this.tempVector2.copy(this.pointEnd),this.tempVector.applyQuaternion(this.worldQuaternionInv),this.tempVector2.applyQuaternion(this.worldQuaternionInv),this.tempVector2.divide(this.tempVector),r.search("X")===-1&&(this.tempVector2.x=1),r.search("Y")===-1&&(this.tempVector2.y=1),r.search("Z")===-1&&(this.tempVector2.z=1);a.scale.copy(this.scaleStart).multiply(this.tempVector2),this.scaleSnap&&this.object&&(r.search("X")!==-1&&(this.object.scale.x=Math.round(a.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),r.search("Y")!==-1&&(a.scale.y=Math.round(a.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),r.search("Z")!==-1&&(a.scale.z=Math.round(a.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(s==="rotate"){this.offset.copy(this.pointEnd).sub(this.pointStart);const u=20/this.worldPosition.distanceTo(this.tempVector.setFromMatrixPosition(this.camera.matrixWorld));r==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this.startNorm.copy(this.pointStart).normalize(),this.endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this.endNorm.cross(this.startNorm).dot(this.eye)<0?1:-1):r==="XYZE"?(this.rotationAxis.copy(this.offset).cross(this.eye).normalize(),this.rotationAngle=this.offset.dot(this.tempVector.copy(this.rotationAxis).cross(this.eye))*u):(r==="X"||r==="Y"||r==="Z")&&(this.rotationAxis.copy(this.unit[r]),this.tempVector.copy(this.unit[r]),l==="local"&&this.tempVector.applyQuaternion(this.worldQuaternion),this.rotationAngle=this.offset.dot(this.tempVector.cross(this.eye).normalize())*u),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),l==="local"&&r!=="E"&&r!=="XYZE"?(a.quaternion.copy(this.quaternionStart),a.quaternion.multiply(this.tempQuaternion.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this.parentQuaternionInv),a.quaternion.copy(this.tempQuaternion.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),a.quaternion.multiply(this.quaternionStart).normalize())}this.dispatchEvent(this.changeEvent),this.dispatchEvent(this.objectChangeEvent)}}),k(this,"pointerUp",i=>{i.button===0&&(this.dragging&&this.axis!==null&&(this.mouseUpEvent.mode=this.mode,this.dispatchEvent(this.mouseUpEvent)),this.dragging=!1,this.axis=null)}),k(this,"getPointer",i=>{var r;if(this.domElement&&((r=this.domElement.ownerDocument)!=null&&r.pointerLockElement))return{x:0,y:0,button:i.button};{const s=i.changedTouches?i.changedTouches[0]:i,a=this.domElement.getBoundingClientRect();return{x:(s.clientX-a.left)/a.width*2-1,y:-(s.clientY-a.top)/a.height*2+1,button:i.button}}}),k(this,"onPointerHover",i=>{if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this.getPointer(i));break}}),k(this,"onPointerDown",i=>{!this.enabled||!this.domElement||(this.domElement.style.touchAction="none",this.domElement.ownerDocument.addEventListener("pointermove",this.onPointerMove),this.pointerHover(this.getPointer(i)),this.pointerDown(this.getPointer(i)))}),k(this,"onPointerMove",i=>{this.enabled&&this.pointerMove(this.getPointer(i))}),k(this,"onPointerUp",i=>{!this.enabled||!this.domElement||(this.domElement.style.touchAction="",this.domElement.ownerDocument.removeEventListener("pointermove",this.onPointerMove),this.pointerUp(this.getPointer(i)))}),k(this,"getMode",()=>this.mode),k(this,"setMode",i=>{this.mode=i}),k(this,"setTranslationSnap",i=>{this.translationSnap=i}),k(this,"setRotationSnap",i=>{this.rotationSnap=i}),k(this,"setScaleSnap",i=>{this.scaleSnap=i}),k(this,"setSize",i=>{this.size=i}),k(this,"setSpace",i=>{this.space=i}),k(this,"update",()=>{console.warn("THREE.TransformControls: update function has no more functionality and therefore has been deprecated.")}),k(this,"connect",i=>{i===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.domElement=i,this.domElement.addEventListener("pointerdown",this.onPointerDown),this.domElement.addEventListener("pointermove",this.onPointerHover),this.domElement.ownerDocument.addEventListener("pointerup",this.onPointerUp)}),k(this,"dispose",()=>{var i,r,s,a,l,A;(i=this.domElement)==null||i.removeEventListener("pointerdown",this.onPointerDown),(r=this.domElement)==null||r.removeEventListener("pointermove",this.onPointerHover),(a=(s=this.domElement)==null?void 0:s.ownerDocument)==null||a.removeEventListener("pointermove",this.onPointerMove),(A=(l=this.domElement)==null?void 0:l.ownerDocument)==null||A.removeEventListener("pointerup",this.onPointerUp),this.traverse(u=>{const d=u;d.geometry&&d.geometry.dispose(),d.material&&d.material.dispose()})}),this.domElement=t,this.camera=e,this.gizmo=new yf,this.add(this.gizmo),this.plane=new bf,this.add(this.plane);const n=(i,r)=>{let s=r;Object.defineProperty(this,i,{get:function(){return s!==void 0?s:r},set:function(a){s!==a&&(s=a,this.plane[i]=a,this.gizmo[i]=a,this.dispatchEvent({type:i+"-changed",value:a}),this.dispatchEvent(this.changeEvent))}}),this[i]=r,this.plane[i]=r,this.gizmo[i]=r};n("camera",this.camera),n("object",this.object),n("enabled",this.enabled),n("axis",this.axis),n("mode",this.mode),n("translationSnap",this.translationSnap),n("rotationSnap",this.rotationSnap),n("scaleSnap",this.scaleSnap),n("space",this.space),n("size",this.size),n("dragging",this.dragging),n("showX",this.showX),n("showY",this.showY),n("showZ",this.showZ),n("worldPosition",this.worldPosition),n("worldPositionStart",this.worldPositionStart),n("worldQuaternion",this.worldQuaternion),n("worldQuaternionStart",this.worldQuaternionStart),n("cameraPosition",this.cameraPosition),n("cameraQuaternion",this.cameraQuaternion),n("pointStart",this.pointStart),n("pointEnd",this.pointEnd),n("rotationAxis",this.rotationAxis),n("rotationAngle",this.rotationAngle),n("eye",this.eye),t!==void 0&&this.connect(t)}};class yf extends bt{constructor(){super(),k(this,"isTransformControlsGizmo",!0),k(this,"type","TransformControlsGizmo"),k(this,"tempVector",new I(0,0,0)),k(this,"tempEuler",new ZA),k(this,"alignVector",new I(0,1,0)),k(this,"zeroVector",new I(0,0,0)),k(this,"lookAtMatrix",new ce),k(this,"tempQuaternion",new re),k(this,"tempQuaternion2",new re),k(this,"identityQuaternion",new re),k(this,"unitX",new I(1,0,0)),k(this,"unitY",new I(0,1,0)),k(this,"unitZ",new I(0,0,1)),k(this,"gizmo"),k(this,"picker"),k(this,"helper"),k(this,"rotationAxis",new I),k(this,"cameraPosition",new I),k(this,"worldPositionStart",new I),k(this,"worldQuaternionStart",new re),k(this,"worldPosition",new I),k(this,"worldQuaternion",new re),k(this,"eye",new I),k(this,"camera",null),k(this,"enabled",!0),k(this,"axis",null),k(this,"mode","translate"),k(this,"space","world"),k(this,"size",1),k(this,"dragging",!1),k(this,"showX",!0),k(this,"showY",!0),k(this,"showZ",!0),k(this,"updateMatrixWorld",()=>{let O=this.space;this.mode==="scale"&&(O="local");const P=O==="local"?this.worldQuaternion:this.identityQuaternion;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let N=[];N=N.concat(this.picker[this.mode].children),N=N.concat(this.gizmo[this.mode].children),N=N.concat(this.helper[this.mode].children);for(let V=0;V<N.length;V++){const U=N[V];U.visible=!0,U.rotation.set(0,0,0),U.position.copy(this.worldPosition);let te;if(this.camera.isOrthographicCamera?te=(this.camera.top-this.camera.bottom)/this.camera.zoom:te=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),U.scale.set(1,1,1).multiplyScalar(te*this.size/7),U.tag==="helper"){U.visible=!1,U.name==="AXIS"?(U.position.copy(this.worldPositionStart),U.visible=!!this.axis,this.axis==="X"&&(this.tempQuaternion.setFromEuler(this.tempEuler.set(0,0,0)),U.quaternion.copy(P).multiply(this.tempQuaternion),Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(P).dot(this.eye))>.9&&(U.visible=!1)),this.axis==="Y"&&(this.tempQuaternion.setFromEuler(this.tempEuler.set(0,0,Math.PI/2)),U.quaternion.copy(P).multiply(this.tempQuaternion),Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(P).dot(this.eye))>.9&&(U.visible=!1)),this.axis==="Z"&&(this.tempQuaternion.setFromEuler(this.tempEuler.set(0,Math.PI/2,0)),U.quaternion.copy(P).multiply(this.tempQuaternion),Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(P).dot(this.eye))>.9&&(U.visible=!1)),this.axis==="XYZE"&&(this.tempQuaternion.setFromEuler(this.tempEuler.set(0,Math.PI/2,0)),this.alignVector.copy(this.rotationAxis),U.quaternion.setFromRotationMatrix(this.lookAtMatrix.lookAt(this.zeroVector,this.alignVector,this.unitY)),U.quaternion.multiply(this.tempQuaternion),U.visible=this.dragging),this.axis==="E"&&(U.visible=!1)):U.name==="START"?(U.position.copy(this.worldPositionStart),U.visible=this.dragging):U.name==="END"?(U.position.copy(this.worldPosition),U.visible=this.dragging):U.name==="DELTA"?(U.position.copy(this.worldPositionStart),U.quaternion.copy(this.worldQuaternionStart),this.tempVector.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),this.tempVector.applyQuaternion(this.worldQuaternionStart.clone().invert()),U.scale.copy(this.tempVector),U.visible=this.dragging):(U.quaternion.copy(P),this.dragging?U.position.copy(this.worldPositionStart):U.position.copy(this.worldPosition),this.axis&&(U.visible=this.axis.search(U.name)!==-1));continue}U.quaternion.copy(P),this.mode==="translate"||this.mode==="scale"?((U.name==="X"||U.name==="XYZX")&&Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(P).dot(this.eye))>.99&&(U.scale.set(1e-10,1e-10,1e-10),U.visible=!1),(U.name==="Y"||U.name==="XYZY")&&Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(P).dot(this.eye))>.99&&(U.scale.set(1e-10,1e-10,1e-10),U.visible=!1),(U.name==="Z"||U.name==="XYZZ")&&Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(P).dot(this.eye))>.99&&(U.scale.set(1e-10,1e-10,1e-10),U.visible=!1),U.name==="XY"&&Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(P).dot(this.eye))<.2&&(U.scale.set(1e-10,1e-10,1e-10),U.visible=!1),U.name==="YZ"&&Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(P).dot(this.eye))<.2&&(U.scale.set(1e-10,1e-10,1e-10),U.visible=!1),U.name==="XZ"&&Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(P).dot(this.eye))<.2&&(U.scale.set(1e-10,1e-10,1e-10),U.visible=!1),U.name.search("X")!==-1&&(this.alignVector.copy(this.unitX).applyQuaternion(P).dot(this.eye)<0?U.tag==="fwd"?U.visible=!1:U.scale.x*=-1:U.tag==="bwd"&&(U.visible=!1)),U.name.search("Y")!==-1&&(this.alignVector.copy(this.unitY).applyQuaternion(P).dot(this.eye)<0?U.tag==="fwd"?U.visible=!1:U.scale.y*=-1:U.tag==="bwd"&&(U.visible=!1)),U.name.search("Z")!==-1&&(this.alignVector.copy(this.unitZ).applyQuaternion(P).dot(this.eye)<0?U.tag==="fwd"?U.visible=!1:U.scale.z*=-1:U.tag==="bwd"&&(U.visible=!1))):this.mode==="rotate"&&(this.tempQuaternion2.copy(P),this.alignVector.copy(this.eye).applyQuaternion(this.tempQuaternion.copy(P).invert()),U.name.search("E")!==-1&&U.quaternion.setFromRotationMatrix(this.lookAtMatrix.lookAt(this.eye,this.zeroVector,this.unitY)),U.name==="X"&&(this.tempQuaternion.setFromAxisAngle(this.unitX,Math.atan2(-this.alignVector.y,this.alignVector.z)),this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2,this.tempQuaternion),U.quaternion.copy(this.tempQuaternion)),U.name==="Y"&&(this.tempQuaternion.setFromAxisAngle(this.unitY,Math.atan2(this.alignVector.x,this.alignVector.z)),this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2,this.tempQuaternion),U.quaternion.copy(this.tempQuaternion)),U.name==="Z"&&(this.tempQuaternion.setFromAxisAngle(this.unitZ,Math.atan2(this.alignVector.y,this.alignVector.x)),this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2,this.tempQuaternion),U.quaternion.copy(this.tempQuaternion))),U.visible=U.visible&&(U.name.indexOf("X")===-1||this.showX),U.visible=U.visible&&(U.name.indexOf("Y")===-1||this.showY),U.visible=U.visible&&(U.name.indexOf("Z")===-1||this.showZ),U.visible=U.visible&&(U.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),U.material.tempOpacity=U.material.tempOpacity||U.material.opacity,U.material.tempColor=U.material.tempColor||U.material.color.clone(),U.material.color.copy(U.material.tempColor),U.material.opacity=U.material.tempOpacity,this.enabled?this.axis&&(U.name===this.axis?(U.material.opacity=1,U.material.color.lerp(new oe(1,1,1),.5)):this.axis.split("").some(function(he){return U.name===he})?(U.material.opacity=1,U.material.color.lerp(new oe(1,1,1),.5)):(U.material.opacity*=.25,U.material.color.lerp(new oe(1,1,1),.5))):(U.material.opacity*=.5,U.material.color.lerp(new oe(1,1,1),.5))}super.updateMatrixWorld()});const e=new Xe({depthTest:!1,depthWrite:!1,transparent:!0,side:_t,fog:!1,toneMapped:!1}),t=new fr({depthTest:!1,depthWrite:!1,transparent:!0,linewidth:1,fog:!1,toneMapped:!1}),n=e.clone();n.opacity=.15;const i=e.clone();i.opacity=.33;const r=e.clone();r.color.set(16711680);const s=e.clone();s.color.set(65280);const a=e.clone();a.color.set(255);const l=e.clone();l.opacity=.25;const A=l.clone();A.color.set(16776960);const u=l.clone();u.color.set(65535);const d=l.clone();d.color.set(16711935),e.clone().color.set(16776960);const h=t.clone();h.color.set(16711680);const y=t.clone();y.color.set(65280);const g=t.clone();g.color.set(255);const x=t.clone();x.color.set(65535);const m=t.clone();m.color.set(16711935);const p=t.clone();p.color.set(16776960);const b=t.clone();b.color.set(7895160);const C=p.clone();C.opacity=.25;const F=new ze(0,.05,.2,12,1,!1),K=new Ve(.125,.125,.125),B=new Be;B.setAttribute("position",new Mi([0,0,0,1,0,0],3));const S=(O,P)=>{const N=new Be,V=[];for(let U=0;U<=64*P;++U)V.push(0,Math.cos(U/32*Math.PI)*O,Math.sin(U/32*Math.PI)*O);return N.setAttribute("position",new Mi(V,3)),N},v=()=>{const O=new Be;return O.setAttribute("position",new Mi([0,0,0,1,1,1],3)),O},w={X:[[new W(F,r),[1,0,0],[0,0,-Math.PI/2],null,"fwd"],[new W(F,r),[1,0,0],[0,0,Math.PI/2],null,"bwd"],[new ee(B,h)]],Y:[[new W(F,s),[0,1,0],null,null,"fwd"],[new W(F,s),[0,1,0],[Math.PI,0,0],null,"bwd"],[new ee(B,y),null,[0,0,Math.PI/2]]],Z:[[new W(F,a),[0,0,1],[Math.PI/2,0,0],null,"fwd"],[new W(F,a),[0,0,1],[-Math.PI/2,0,0],null,"bwd"],[new ee(B,g),null,[0,-Math.PI/2,0]]],XYZ:[[new W(new Bt(.1,0),l.clone()),[0,0,0],[0,0,0]]],XY:[[new W(new ct(.295,.295),A.clone()),[.15,.15,0]],[new ee(B,p),[.18,.3,0],null,[.125,1,1]],[new ee(B,p),[.3,.18,0],[0,0,Math.PI/2],[.125,1,1]]],YZ:[[new W(new ct(.295,.295),u.clone()),[0,.15,.15],[0,Math.PI/2,0]],[new ee(B,x),[0,.18,.3],[0,0,Math.PI/2],[.125,1,1]],[new ee(B,x),[0,.3,.18],[0,-Math.PI/2,0],[.125,1,1]]],XZ:[[new W(new ct(.295,.295),d.clone()),[.15,0,.15],[-Math.PI/2,0,0]],[new ee(B,m),[.18,0,.3],null,[.125,1,1]],[new ee(B,m),[.3,0,.18],[0,-Math.PI/2,0],[.125,1,1]]]},D={X:[[new W(new ze(.2,0,1,4,1,!1),n),[.6,0,0],[0,0,-Math.PI/2]]],Y:[[new W(new ze(.2,0,1,4,1,!1),n),[0,.6,0]]],Z:[[new W(new ze(.2,0,1,4,1,!1),n),[0,0,.6],[Math.PI/2,0,0]]],XYZ:[[new W(new Bt(.2,0),n)]],XY:[[new W(new ct(.4,.4),n),[.2,.2,0]]],YZ:[[new W(new ct(.4,.4),n),[0,.2,.2],[0,Math.PI/2,0]]],XZ:[[new W(new ct(.4,.4),n),[.2,0,.2],[-Math.PI/2,0,0]]]},M={START:[[new W(new Bt(.01,2),i),null,null,null,"helper"]],END:[[new W(new Bt(.01,2),i),null,null,null,"helper"]],DELTA:[[new ee(v(),i),null,null,null,"helper"]],X:[[new ee(B,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new ee(B,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new ee(B,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},T={X:[[new ee(S(1,.5),h)],[new W(new Bt(.04,0),r),[0,0,.99],null,[1,3,1]]],Y:[[new ee(S(1,.5),y),null,[0,0,-Math.PI/2]],[new W(new Bt(.04,0),s),[0,0,.99],null,[3,1,1]]],Z:[[new ee(S(1,.5),g),null,[0,Math.PI/2,0]],[new W(new Bt(.04,0),a),[.99,0,0],null,[1,3,1]]],E:[[new ee(S(1.25,1),C),null,[0,Math.PI/2,0]],[new W(new ze(.03,0,.15,4,1,!1),C),[1.17,0,0],[0,0,-Math.PI/2],[1,1,.001]],[new W(new ze(.03,0,.15,4,1,!1),C),[-1.17,0,0],[0,0,Math.PI/2],[1,1,.001]],[new W(new ze(.03,0,.15,4,1,!1),C),[0,-1.17,0],[Math.PI,0,0],[1,1,.001]],[new W(new ze(.03,0,.15,4,1,!1),C),[0,1.17,0],[0,0,0],[1,1,.001]]],XYZE:[[new ee(S(1,1),b),null,[0,Math.PI/2,0]]]},E={AXIS:[[new ee(B,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},j={X:[[new W(new Io(1,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new W(new Io(1,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new W(new Io(1,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new W(new Io(1.25,.1,2,24),n)]],XYZE:[[new W(new Rn(.7,10,8),n)]]},z={X:[[new W(K,r),[.8,0,0],[0,0,-Math.PI/2]],[new ee(B,h),null,null,[.8,1,1]]],Y:[[new W(K,s),[0,.8,0]],[new ee(B,y),null,[0,0,Math.PI/2],[.8,1,1]]],Z:[[new W(K,a),[0,0,.8],[Math.PI/2,0,0]],[new ee(B,g),null,[0,-Math.PI/2,0],[.8,1,1]]],XY:[[new W(K,A),[.85,.85,0],null,[2,2,.2]],[new ee(B,p),[.855,.98,0],null,[.125,1,1]],[new ee(B,p),[.98,.855,0],[0,0,Math.PI/2],[.125,1,1]]],YZ:[[new W(K,u),[0,.85,.85],null,[.2,2,2]],[new ee(B,x),[0,.855,.98],[0,0,Math.PI/2],[.125,1,1]],[new ee(B,x),[0,.98,.855],[0,-Math.PI/2,0],[.125,1,1]]],XZ:[[new W(K,d),[.85,0,.85],null,[2,.2,2]],[new ee(B,m),[.855,0,.98],null,[.125,1,1]],[new ee(B,m),[.98,0,.855],[0,-Math.PI/2,0],[.125,1,1]]],XYZX:[[new W(new Ve(.125,.125,.125),l.clone()),[1.1,0,0]]],XYZY:[[new W(new Ve(.125,.125,.125),l.clone()),[0,1.1,0]]],XYZZ:[[new W(new Ve(.125,.125,.125),l.clone()),[0,0,1.1]]]},H={X:[[new W(new ze(.2,0,.8,4,1,!1),n),[.5,0,0],[0,0,-Math.PI/2]]],Y:[[new W(new ze(.2,0,.8,4,1,!1),n),[0,.5,0]]],Z:[[new W(new ze(.2,0,.8,4,1,!1),n),[0,0,.5],[Math.PI/2,0,0]]],XY:[[new W(K,n),[.85,.85,0],null,[3,3,.2]]],YZ:[[new W(K,n),[0,.85,.85],null,[.2,3,3]]],XZ:[[new W(K,n),[.85,0,.85],null,[3,.2,3]]],XYZX:[[new W(new Ve(.2,.2,.2),n),[1.1,0,0]]],XYZY:[[new W(new Ve(.2,.2,.2),n),[0,1.1,0]]],XYZZ:[[new W(new Ve(.2,.2,.2),n),[0,0,1.1]]]},J={X:[[new ee(B,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new ee(B,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new ee(B,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},G=O=>{const P=new bt;for(let N in O)for(let V=O[N].length;V--;){const U=O[N][V][0].clone(),te=O[N][V][1],he=O[N][V][2],Te=O[N][V][3],Ze=O[N][V][4];U.name=N,U.tag=Ze,te&&U.position.set(te[0],te[1],te[2]),he&&U.rotation.set(he[0],he[1],he[2]),Te&&U.scale.set(Te[0],Te[1],Te[2]),U.updateMatrix();const it=U.geometry.clone();it.applyMatrix4(U.matrix),U.geometry=it,U.renderOrder=1/0,U.position.set(0,0,0),U.rotation.set(0,0,0),U.scale.set(1,1,1),P.add(U)}return P};this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=G(w)),this.add(this.gizmo.rotate=G(T)),this.add(this.gizmo.scale=G(z)),this.add(this.picker.translate=G(D)),this.add(this.picker.rotate=G(j)),this.add(this.picker.scale=G(H)),this.add(this.helper.translate=G(M)),this.add(this.helper.rotate=G(E)),this.add(this.helper.scale=G(J)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}}class bf extends W{constructor(){super(new ct(1e5,1e5,2,2),new Xe({visible:!1,wireframe:!0,side:_t,transparent:!0,opacity:.1,toneMapped:!1})),k(this,"isTransformControlsPlane",!0),k(this,"type","TransformControlsPlane"),k(this,"unitX",new I(1,0,0)),k(this,"unitY",new I(0,1,0)),k(this,"unitZ",new I(0,0,1)),k(this,"tempVector",new I),k(this,"dirVector",new I),k(this,"alignVector",new I),k(this,"tempMatrix",new ce),k(this,"identityQuaternion",new re),k(this,"cameraQuaternion",new re),k(this,"worldPosition",new I),k(this,"worldQuaternion",new re),k(this,"eye",new I),k(this,"axis",null),k(this,"mode","translate"),k(this,"space","world"),k(this,"updateMatrixWorld",()=>{let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),this.unitX.set(1,0,0).applyQuaternion(e==="local"?this.worldQuaternion:this.identityQuaternion),this.unitY.set(0,1,0).applyQuaternion(e==="local"?this.worldQuaternion:this.identityQuaternion),this.unitZ.set(0,0,1).applyQuaternion(e==="local"?this.worldQuaternion:this.identityQuaternion),this.alignVector.copy(this.unitY),this.mode){case"translate":case"scale":switch(this.axis){case"X":this.alignVector.copy(this.eye).cross(this.unitX),this.dirVector.copy(this.unitX).cross(this.alignVector);break;case"Y":this.alignVector.copy(this.eye).cross(this.unitY),this.dirVector.copy(this.unitY).cross(this.alignVector);break;case"Z":this.alignVector.copy(this.eye).cross(this.unitZ),this.dirVector.copy(this.unitZ).cross(this.alignVector);break;case"XY":this.dirVector.copy(this.unitZ);break;case"YZ":this.dirVector.copy(this.unitX);break;case"XZ":this.alignVector.copy(this.unitZ),this.dirVector.copy(this.unitY);break;case"XYZ":case"E":this.dirVector.set(0,0,0);break}break;case"rotate":default:this.dirVector.set(0,0,0)}this.dirVector.length()===0?this.quaternion.copy(this.cameraQuaternion):(this.tempMatrix.lookAt(this.tempVector.set(0,0,0),this.dirVector,this.alignVector),this.quaternion.setFromRotationMatrix(this.tempMatrix)),super.updateMatrixWorld()})}}function pi(o){if(typeof TextDecoder<"u")return new TextDecoder().decode(o);let e="";for(let t=0,n=o.length;t<n;t++)e+=String.fromCharCode(o[t]);try{return decodeURIComponent(escape(e))}catch{return e}}const Dt="srgb",tt="srgb-linear",us=3001,Cf=3e3;class kn extends vn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vf(t)}),this.register(function(t){return new Sf(t)}),this.register(function(t){return new jf(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new zf(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new Ef(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new Mf(t)}),this.register(function(t){return new kf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new Kf(t)}),this.register(function(t){return new Hf(t)}),this.register(function(t){return new Of(t)})}load(e,t,n,i){const r=this;let s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){const A=mo.extractUrlBase(e);s=mo.resolveURL(A,this.path)}else s=mo.extractUrlBase(e);this.manager.itemStart(e);const a=function(A){i?i(A):console.error(A),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Bo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(A){try{r.parse(A,s,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const s={},a={};if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(pi(new Uint8Array(e.slice(0,4)))===Mr){try{s[Z.KHR_BINARY_GLTF]=new Gf(e)}catch(u){i&&i(u);return}r=JSON.parse(s[Z.KHR_BINARY_GLTF].content)}else r=JSON.parse(pi(new Uint8Array(e)));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new ep(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let A=0;A<this.pluginCallbacks.length;A++){const u=this.pluginCallbacks[A](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,s[u.name]=!0}if(r.extensionsUsed)for(let A=0;A<r.extensionsUsed.length;++A){const u=r.extensionsUsed[A],d=r.extensionsRequired||[];switch(u){case Z.KHR_MATERIALS_UNLIT:s[u]=new Bf;break;case Z.KHR_DRACO_MESH_COMPRESSION:s[u]=new Nf(r,this.dracoLoader);break;case Z.KHR_TEXTURE_TRANSFORM:s[u]=new Lf;break;case Z.KHR_MESH_QUANTIZATION:s[u]=new Qf;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(s),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Ff(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const Z={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Kf{constructor(e){this.parser=e,this.name=Z.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let A;const u=new oe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],tt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":A=new $A(u),A.target.position.set(0,0,-1),A.add(A.target);break;case"point":A=new _A(u),A.distance=d;break;case"spot":A=new qA(u),A.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,A.angle=l.spot.outerConeAngle,A.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,A.target.position.set(0,0,-1),A.add(A.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return A.position.set(0,0,0),A.decay=2,$e(A,l),l.intensity!==void 0&&(A.intensity=l.intensity),A.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(A),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Bf{constructor(){this.name=Z.KHR_MATERIALS_UNLIT}getMaterialType(){return Xe}extendParams(e,t,n){const i=[];e.color=new oe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],tt),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Dt))}return Promise.all(i)}}class Rf{constructor(e){this.parser=e,this.name=Z.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class vf{constructor(e){this.parser=e,this.name=Z.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Se}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const a=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Le(a,a)}return Promise.all(r)}}class Sf{constructor(e){this.parser=e,this.name=Z.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Se}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Mf{constructor(e){this.parser=e,this.name=Z.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Se}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class wf{constructor(e){this.parser=e,this.name=Z.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Se}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];if(s.sheenColorFactor!==void 0){const a=s.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],tt)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,Dt)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class Df{constructor(e){this.parser=e,this.name=Z.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Se}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class Uf{constructor(e){this.parser=e,this.name=Z.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Se}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const a=s.attenuationColor||[1,1,1];return t.attenuationColor=new oe().setRGB(a[0],a[1],a[2],tt),Promise.all(r)}}class Ef{constructor(e){this.parser=e,this.name=Z.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Se}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Tf{constructor(e){this.parser=e,this.name=Z.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Se}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const a=s.specularColorFactor||[1,1,1];return t.specularColor=new oe().setRGB(a[0],a[1],a[2],tt),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,Dt)),Promise.all(r)}}class If{constructor(e){this.parser=e,this.name=Z.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Se}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return t.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",s.bumpTexture)),Promise.all(r)}}class kf{constructor(e){this.parser=e,this.name=Z.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Se}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(r)}}class jf{constructor(e){this.parser=e,this.name=Z.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class Pf{constructor(e){this.parser=e,this.name=Z.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],a=i.images[s.source];let l=n.textureLoader;if(a.uri){const A=n.options.manager.getHandler(a.uri);A!==null&&(l=A)}return this.detectSupport().then(function(A){if(A)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class zf{constructor(e){this.parser=e,this.name=Z.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],a=i.images[s.source];let l=n.textureLoader;if(a.uri){const A=n.options.manager.getHandler(a.uri);A!==null&&(l=A)}return this.detectSupport().then(function(A){if(A)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Hf{constructor(e){this.name=Z.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,A=i.byteLength||0,u=i.count,d=i.byteStride,f=new Uint8Array(a,l,A);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,d,f,i.mode,i.filter).then(function(h){return h.buffer}):s.ready.then(function(){const h=new ArrayBuffer(u*d);return s.decodeGltfBuffer(new Uint8Array(h),u,d,f,i.mode,i.filter),h})})}else return null}}class Of{constructor(e){this.name=Z.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const A of i.primitives)if(A.mode!==Me.TRIANGLES&&A.mode!==Me.TRIANGLE_STRIP&&A.mode!==Me.TRIANGLE_FAN&&A.mode!==void 0)return null;const s=n.extensions[this.name].attributes,a=[],l={};for(const A in s)a.push(this.parser.getDependency("accessor",s[A]).then(u=>(l[A]=u,l[A])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(A=>{const u=A.pop(),d=u.isGroup?u.children:[u],f=A[0].count,h=[];for(const y of d){const g=new ce,x=new I,m=new re,p=new I(1,1,1),b=new ed(y.geometry,y.material,f);for(let C=0;C<f;C++)l.TRANSLATION&&x.fromBufferAttribute(l.TRANSLATION,C),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,C),l.SCALE&&p.fromBufferAttribute(l.SCALE,C),b.setMatrixAt(C,g.compose(x,m,p));for(const C in l)if(C==="_COLOR_0"){const F=l[C];b.instanceColor=new td(F.array,F.itemSize,F.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&y.geometry.setAttribute(C,l[C]);bt.prototype.copy.call(b,y),this.parser.assignFinalMaterial(b),h.push(b)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}}const Mr="glTF",oo=12,As={JSON:1313821514,BIN:5130562};class Gf{constructor(e){this.name=Z.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,oo);if(this.header={magic:pi(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Mr)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-oo,i=new DataView(e,oo);let r=0;for(;r<n;){const s=i.getUint32(r,!0);r+=4;const a=i.getUint32(r,!0);if(r+=4,a===As.JSON){const l=new Uint8Array(e,oo+r,s);this.content=pi(l)}else if(a===As.BIN){const l=oo+r;this.body=e.slice(l,l+s)}r+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Nf{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Z.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,a={},l={},A={};for(const u in s){const d=An[u]||u.toLowerCase();a[d]=s[u]}for(const u in e.attributes){const d=An[u]||u.toLowerCase();if(s[u]!==void 0){const f=n.accessors[e.attributes[u]],h=Vt[f.componentType];A[d]=h.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,f){i.decodeDracoFile(u,function(h){for(const y in h.attributes){const g=h.attributes[y],x=l[y];x!==void 0&&(g.normalized=x)}d(h)},a,A,tt,f)})})}}class Lf{constructor(){this.name=Z.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Qf{constructor(){this.name=Z.KHR_MESH_QUANTIZATION}}class wr extends Cd{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=a*2,A=a*3,u=i-t,d=(n-t)/u,f=d*d,h=f*d,y=e*A,g=y-A,x=-2*h+3*f,m=h-f,p=1-x,b=m-f+d;for(let C=0;C!==a;C++){const F=s[g+C+a],K=s[g+C+l]*u,B=s[y+C+a],S=s[y+C]*u;r[C]=p*F+b*K+x*B+m*S}return r}}const Jf=new re;class Wf extends wr{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Jf.fromArray(r).normalize().toArray(r),r}}const Me={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Vt={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ds={9728:Ae,9729:fe,9984:ad,9985:rd,9986:sd,9987:pr},fs={33071:Ct,33648:ld,10497:mt},ki={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},An={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...dr>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},rt={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Vf={CUBICSPLINE:void 0,LINEAR:hr,STEP:yd},ji={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Xf(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Ye({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ci})),o.DefaultMaterial}function Rt(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function $e(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Yf(o,e,t){let n=!1,i=!1,r=!1;for(let A=0,u=e.length;A<u;A++){const d=e[A];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(o);const s=[],a=[],l=[];for(let A=0,u=e.length;A<u;A++){const d=e[A];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):o.attributes.position;s.push(f)}if(i){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):o.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):o.attributes.color;l.push(f)}}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(l)]).then(function(A){const u=A[0],d=A[1],f=A[2];return n&&(o.morphAttributes.position=u),i&&(o.morphAttributes.normal=d),r&&(o.morphAttributes.color=f),o.morphTargetsRelative=!0,o})}function Zf(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qf(o){let e;const t=o.extensions&&o.extensions[Z.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Pi(t.attributes):e=o.indices+":"+Pi(o.attributes)+":"+o.mode,o.targets!==void 0)for(let n=0,i=o.targets.length;n<i;n++)e+=":"+Pi(o.targets[n]);return e}function Pi(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function dn(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _f(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const $f=new ce;class ep{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ff,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&typeof navigator.userAgent<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new od(this.options.manager):this.textureLoader=new id(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Bo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const a={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};return Rt(r,a,i),$e(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i].joints;for(let a=0,l=s.length;a<l;a++)e[s[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(s,a)=>{const l=this.associations.get(s);l!=null&&this.associations.set(a,l);for(const[A,u]of s.children.entries())r(u,a.children[A])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Z.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(mo.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const s=ki[i.type],a=Vt[i.componentType],l=i.normalized===!0,A=new a(i.count*s);return Promise.resolve(new ue(A,s,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const a=s[0],l=ki[i.type],A=Vt[i.componentType],u=A.BYTES_PER_ELEMENT,d=u*l,f=i.byteOffset||0,h=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,y=i.normalized===!0;let g,x;if(h&&h!==d){const m=Math.floor(f/h),p="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let b=t.cache.get(p);b||(g=new A(a,m*h,i.count*h/u),b=new nd(g,h/u),t.cache.add(p,b)),x=new bd(b,l,f%h/u,y)}else a===null?g=new A(i.count*l):g=new A(a,f,i.count*l),x=new ue(g,l,y);if(i.sparse!==void 0){const m=ki.SCALAR,p=Vt[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,C=i.sparse.values.byteOffset||0,F=new p(s[1],b,i.sparse.count*m),K=new A(s[2],C,i.sparse.count*l);a!==null&&(x=new ue(x.array.slice(),x.itemSize,x.normalized));for(let B=0,S=F.length;B<S;B++){const v=F[B];if(x.setX(v,K[B*l]),l>=2&&x.setY(v,K[B*l+1]),l>=3&&x.setZ(v,K[B*l+2]),l>=4&&x.setW(v,K[B*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,s=t.images[r];let a=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,s=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const A=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=s.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[s.sampler]||{};return u.magFilter=ds[f.magFilter]||fe,u.minFilter=ds[f.minFilter]||pr,u.wrapS=fs[f.wrapS]||mt,u.wrapT=fs[f.wrapT]||mt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=A,A}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const s=i.images[e],a=self.URL||self.webkitURL;let l=s.uri||"",A=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(d){A=!0;const f=new Blob([d],{type:s.mimeType});return l=a.createObjectURL(f),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(f,h){let y=f;t.isImageBitmapLoader===!0&&(y=function(g){const x=new ts(g);x.needsUpdate=!0,f(x)}),t.load(mo.resolveURL(d,r.path),y,void 0,h)})}).then(function(d){return A===!0&&a.revokeObjectURL(l),$e(d,s),d.userData.mimeType=s.mimeType||_f(s.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(s=s.clone(),s.channel=n.texCoord),r.extensions[Z.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Z.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(s);s=r.extensions[Z.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),r.associations.set(s,l)}}return i!==void 0&&(typeof i=="number"&&(i=i===us?Dt:tt),"colorSpace"in s?s.colorSpace=i:s.encoding=i===Dt?us:Cf),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new cd,wi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new fr,wi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||s){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),s&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ye}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let s;const a={},l=r.extensions||{},A=[];if(l[Z.KHR_MATERIALS_UNLIT]){const d=i[Z.KHR_MATERIALS_UNLIT];s=d.getMaterialType(),A.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new oe(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],tt),a.opacity=f[3]}d.baseColorTexture!==void 0&&A.push(t.assignTexture(a,"map",d.baseColorTexture,Dt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(A.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),A.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),s=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),A.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=_t);const u=r.alphaMode||ji.OPAQUE;if(u===ji.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ji.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==Xe&&(A.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Le(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&s!==Xe&&(A.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==Xe){const d=r.emissiveFactor;a.emissive=new oe().setRGB(d[0],d[1],d[2],tt)}return r.emissiveTexture!==void 0&&s!==Xe&&A.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Dt)),Promise.all(A).then(function(){const d=new s(a);return r.name&&(d.name=r.name),$e(d,r),t.associations.set(d,{materials:e}),r.extensions&&Rt(i,d,r),d})}createUniqueName(e){const t=ud.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Z.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return ps(l,a,t)})}const s=[];for(let a=0,l=e.length;a<l;a++){const A=e[a],u=qf(A),d=i[u];if(d)s.push(d.promise);else{let f;A.extensions&&A.extensions[Z.KHR_DRACO_MESH_COMPRESSION]?f=r(A):f=ps(new Be,A,t),i[u]={primitive:A,promise:f},s.push(f)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,a=[];for(let l=0,A=s.length;l<A;l++){const u=s[l].material===void 0?Xf(this.cache):this.getDependency("material",s[l].material);a.push(u)}return a.push(t.loadGeometries(s)),Promise.all(a).then(function(l){const A=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let h=0,y=u.length;h<y;h++){const g=u[h],x=s[h];let m;const p=A[h];if(x.mode===Me.TRIANGLES||x.mode===Me.TRIANGLE_STRIP||x.mode===Me.TRIANGLE_FAN||x.mode===void 0)m=r.isSkinnedMesh===!0?new Ad(g,p):new W(g,p),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),x.mode===Me.TRIANGLE_STRIP?m.geometry=es(m.geometry,Fd):x.mode===Me.TRIANGLE_FAN&&(m.geometry=es(m.geometry,Kd));else if(x.mode===Me.LINES)m=new dd(g,p);else if(x.mode===Me.LINE_STRIP)m=new ee(g,p);else if(x.mode===Me.LINE_LOOP)m=new fd(g,p);else if(x.mode===Me.POINTS)m=new pd(g,p);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(m.geometry.morphAttributes).length>0&&Zf(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),$e(m,r),x.extensions&&Rt(i,m,x),t.assignFinalMaterial(m),d.push(m)}for(let h=0,y=d.length;h<y;h++)t.associations.set(d[h],{meshes:e,primitives:h});if(d.length===1)return r.extensions&&Rt(i,d[0],r),d[0];const f=new go;r.extensions&&Rt(i,f,r),t.associations.set(f,{meshes:e});for(let h=0,y=d.length;h<y;h++)f.add(d[h]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Sn(Wt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new hd(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),$e(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),s=i,a=[],l=[];for(let A=0,u=s.length;A<u;A++){const d=s[A];if(d){a.push(d);const f=new ce;r!==null&&f.fromArray(r.array,A*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[A])}return new md(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,s=[],a=[],l=[],A=[],u=[];for(let d=0,f=i.channels.length;d<f;d++){const h=i.channels[d],y=i.samplers[h.sampler],g=h.target,x=g.node,m=i.parameters!==void 0?i.parameters[y.input]:y.input,p=i.parameters!==void 0?i.parameters[y.output]:y.output;g.node!==void 0&&(s.push(this.getDependency("node",x)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",p)),A.push(y),u.push(g))}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(l),Promise.all(A),Promise.all(u)]).then(function(d){const f=d[0],h=d[1],y=d[2],g=d[3],x=d[4],m=[];for(let p=0,b=f.length;p<b;p++){const C=f[p],F=h[p],K=y[p],B=g[p],S=x[p];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const v=n._createAnimationTracks(C,F,K,B,S);if(v)for(let w=0;w<v.length;w++)m.push(v[w])}return new gd(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(a){if(a.isMesh)for(let l=0,A=i.weights.length;l<A;l++)a.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),s=[],a=i.children||[];for(let A=0,u=a.length;A<u;A++)s.push(n.getDependency("node",a[A]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(s),l]).then(function(A){const u=A[0],d=A[1],f=A[2];f!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(f,$f)});for(let h=0,y=d.length;h<y;h++)u.add(d[h]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(A){return A.createNodeMesh&&A.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(A){return i._getNodeRef(i.cameraCache,r.camera,A)})),i._invokeAll(function(A){return A.createNodeAttachment&&A.createNodeAttachment(e)}).forEach(function(A){a.push(A)}),this.nodeCache[e]=Promise.all(a).then(function(A){let u;if(r.isBone===!0?u=new xd:A.length>1?u=new go:A.length===1?u=A[0]:u=new bt,u!==A[0])for(let d=0,f=A.length;d<f;d++)u.add(A[d]);if(r.name&&(u.userData.name=r.name,u.name=s),$e(u,r),r.extensions&&Rt(n,u,r),r.matrix!==void 0){const d=new ce;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new go;n.name&&(r.name=i.createUniqueName(n.name)),$e(r,n),n.extensions&&Rt(t,r,n);const s=n.nodes||[],a=[];for(let l=0,A=s.length;l<A;l++)a.push(i.getDependency("node",s[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);const A=u=>{const d=new Map;for(const[f,h]of i.associations)(f instanceof wi||f instanceof ts)&&d.set(f,h);return u.traverse(f=>{const h=i.associations.get(f);h!=null&&d.set(f,h)}),d};return i.associations=A(r),r})}_createAnimationTracks(e,t,n,i,r){const s=[],a=e.name?e.name:e.uuid,l=[];rt[r.path]===rt.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let A;switch(rt[r.path]){case rt.weights:A=is;break;case rt.rotation:A=ns;break;case rt.position:case rt.scale:A=os;break;default:switch(n.itemSize){case 1:A=is;break;case 2:case 3:default:A=os;break}break}const u=i.interpolation!==void 0?Vf[i.interpolation]:hr,d=this._getArrayFromAccessor(n);for(let f=0,h=l.length;f<h;f++){const y=new A(l[f]+"."+rt[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),s.push(y)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=dn(t.constructor),i=new Float32Array(t.length);for(let r=0,s=t.length;r<s;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ns?Wf:wr;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function tp(o,e,t){const n=e.attributes,i=new pe;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,A=a.max;if(l!==void 0&&A!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(A[0],A[1],A[2])),a.normalized){const u=dn(Vt[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new I,l=new I;for(let A=0,u=r.length;A<u;A++){const d=r[A];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],h=f.min,y=f.max;if(h!==void 0&&y!==void 0){if(l.setX(Math.max(Math.abs(h[0]),Math.abs(y[0]))),l.setY(Math.max(Math.abs(h[1]),Math.abs(y[1]))),l.setZ(Math.max(Math.abs(h[2]),Math.abs(y[2]))),f.normalized){const g=dn(Vt[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const s=new mr;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=s}function ps(o,e,t){const n=e.attributes,i=[];function r(s,a){return t.getDependency("accessor",s).then(function(l){o.setAttribute(a,l)})}for(const s in n){const a=An[s]||s.toLowerCase();a in o.attributes||i.push(r(n[s],a))}if(e.indices!==void 0&&!o.index){const s=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(s)}return $e(o,e),tp(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Yf(o,e.targets,t):o})}const zi=new WeakMap;class op extends vn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Bo(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,s=>{const a={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(s,a).then(t).catch(i)},n,i)}decodeDracoFile(e,t,n,i){const r={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n};this.decodeGeometry(e,r).then(t)}decodeGeometry(e,t){for(const l in t.attributeTypes){const A=t.attributeTypes[l];A.BYTES_PER_ELEMENT!==void 0&&(t.attributeTypes[l]=A.name)}const n=JSON.stringify(t);if(zi.has(e)){const l=zi.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,s=e.byteLength,a=this._getWorker(r,s).then(l=>(i=l,new Promise((A,u)=>{i._callbacks[r]={resolve:A,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),zi.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Be;e.index&&t.setIndex(new ue(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,s=i.array,a=i.itemSize;t.setAttribute(r,new ue(s,a))}return t}_loadLibrary(e,t){const n=new Bo(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=ip.toString(),s=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([s]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const s=r.data;switch(s.type){case"decode":i._callbacks[s.id].resolve(s);break;case"error":i._callbacks[s.id].reject(s);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+s.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function ip(){let o,e;onmessage=function(s){const a=s.data;switch(a.type){case"init":o=a.decoderConfig,e=new Promise(function(u){o.onModuleLoaded=function(d){u({draco:d})},DracoDecoderModule(o)});break;case"decode":const l=a.buffer,A=a.taskConfig;e.then(u=>{const d=u.draco,f=new d.Decoder,h=new d.DecoderBuffer;h.Init(new Int8Array(l),l.byteLength);try{const y=t(d,f,h,A),g=y.attributes.map(x=>x.array.buffer);y.index&&g.push(y.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:y},g)}catch(y){console.error(y),self.postMessage({type:"error",id:a.id,error:y.message})}finally{d.destroy(h),d.destroy(f)}});break}};function t(s,a,l,A){const u=A.attributeIDs,d=A.attributeTypes;let f,h;const y=a.GetEncodedGeometryType(l);if(y===s.TRIANGULAR_MESH)f=new s.Mesh,h=a.DecodeBufferToMesh(l,f);else if(y===s.POINT_CLOUD)f=new s.PointCloud,h=a.DecodeBufferToPointCloud(l,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!h.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+h.error_msg());const g={index:null,attributes:[]};for(const x in u){const m=self[d[x]];let p,b;if(A.useUniqueIDs)b=u[x],p=a.GetAttributeByUniqueId(f,b);else{if(b=a.GetAttributeId(f,s[u[x]]),b===-1)continue;p=a.GetAttribute(f,b)}g.attributes.push(i(s,a,f,x,m,p))}return y===s.TRIANGULAR_MESH&&(g.index=n(s,a,f)),s.destroy(f),g}function n(s,a,l){const u=l.num_faces()*3,d=u*4,f=s._malloc(d);a.GetTrianglesUInt32Array(l,d,f);const h=new Uint32Array(s.HEAPF32.buffer,f,u).slice();return s._free(f),{array:h,itemSize:1}}function i(s,a,l,A,u,d){const f=d.num_components(),y=l.num_points()*f,g=y*u.BYTES_PER_ELEMENT,x=r(s,u),m=s._malloc(g);a.GetAttributeDataArrayForAllPoints(l,d,x,g,m);const p=new u(s.HEAPF32.buffer,m,y).slice();return s._free(m),{name:A,array:p,itemSize:f}}function r(s,a){switch(a){case Float32Array:return s.DT_FLOAT32;case Int8Array:return s.DT_INT8;case Int16Array:return s.DT_INT16;case Int32Array:return s.DT_INT32;case Uint8Array:return s.DT_UINT8;case Uint16Array:return s.DT_UINT16;case Uint32Array:return s.DT_UINT32}}}let Po;const Hi=()=>{if(Po)return Po;const o="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",e="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",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,253,3,1,2,34,4,106,6,5,11,8,7,20,13,33,12,16,128,9,116,64,19,113,127,15,10,21,22,14,255,66,24,54,136,107,18,23,192,26,114,118,132,17,77,101,130,144,27,87,131,44,45,74,156,154,70,167]);if(typeof WebAssembly!="object")return{supported:!1};let i=o;WebAssembly.validate(t)&&(i=e);let r;const s=WebAssembly.instantiate(a(i),{}).then(d=>{r=d.instance,r.exports.__wasm_call_ctors()});function a(d){const f=new Uint8Array(d.length);for(let y=0;y<d.length;++y){const g=d.charCodeAt(y);f[y]=g>96?g-71:g>64?g-65:g>47?g+4:g>46?63:62}let h=0;for(let y=0;y<d.length;++y)f[h++]=f[y]<60?n[f[y]]:(f[y]-60)*64+f[++y];return f.buffer.slice(0,h)}function l(d,f,h,y,g,x){const m=r.exports.sbrk,p=h+3&-4,b=m(p*y),C=m(g.length),F=new Uint8Array(r.exports.memory.buffer);F.set(g,C);const K=d(b,h,y,C,g.length);if(K===0&&x&&x(b,p,y),f.set(F.subarray(b,b+h*y)),m(b-m(0)),K!==0)throw new Error(`Malformed buffer data: ${K}`)}const A={0:"",1:"meshopt_decodeFilterOct",2:"meshopt_decodeFilterQuat",3:"meshopt_decodeFilterExp",NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={0:"meshopt_decodeVertexBuffer",1:"meshopt_decodeIndexBuffer",2:"meshopt_decodeIndexSequence",ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"};return Po={ready:s,supported:!0,decodeVertexBuffer(d,f,h,y,g){l(r.exports.meshopt_decodeVertexBuffer,d,f,h,y,r.exports[A[g]])},decodeIndexBuffer(d,f,h,y){l(r.exports.meshopt_decodeIndexBuffer,d,f,h,y)},decodeIndexSequence(d,f,h,y){l(r.exports.meshopt_decodeIndexSequence,d,f,h,y)},decodeGltfBuffer(d,f,h,y,g,x){l(r.exports[u[g]],d,f,h,y,r.exports[A[x]])}},Po};function np(o,e,t,n){const i=class extends Ro{constructor(s={}){const a=Object.entries(o);super({uniforms:a.reduce((l,[A,u])=>{const d=Ar.clone({[A]:{value:u}});return{...l,...d}},{}),vertexShader:e,fragmentShader:t}),this.key="",a.forEach(([l])=>Object.defineProperty(this,l,{get:()=>this.uniforms[l].value,set:A=>this.uniforms[l].value=A})),Object.assign(this,s)}};return i.key=Wt.generateUUID(),i}const sp=()=>parseInt(Bd.replace(/\D+/g,"")),Dr=sp();let zo=null,Ur="https://www.gstatic.com/draco/versioned/decoders/1.5.5/";function Er(o=!0,e=!0,t){return n=>{t&&t(n),o&&(zo||(zo=new op),zo.setDecoderPath(typeof o=="string"?o:Ur),n.setDRACOLoader(zo)),e&&n.setMeshoptDecoder(typeof Hi=="function"?Hi():Hi)}}const Ut=(o,e,t,n)=>vo(kn,o,Er(e,t,n));Ut.preload=(o,e,t,n)=>vo.preload(kn,o,Er(e,t,n));Ut.clear=o=>vo.clear(kn,o);Ut.setDecoderPath=o=>{Ur=o};const rp=R.forwardRef(({children:o,domElement:e,onChange:t,onMouseDown:n,onMouseUp:i,onObjectChange:r,object:s,makeDefault:a,camera:l,enabled:A,axis:u,mode:d,translationSnap:f,rotationSnap:h,scaleSnap:y,space:g,size:x,showX:m,showY:p,showZ:b,...C},F)=>{const K=Oe(P=>P.controls),B=Oe(P=>P.gl),S=Oe(P=>P.events),v=Oe(P=>P.camera),w=Oe(P=>P.invalidate),D=Oe(P=>P.get),M=Oe(P=>P.set),T=l||v,E=e||S.connected||B.domElement,j=R.useMemo(()=>new xf(T,E),[T,E]),z=R.useRef(null);R.useLayoutEffect(()=>(s?j.attach(s instanceof bt?s:s.current):z.current instanceof bt&&j.attach(z.current),()=>void j.detach()),[s,o,j]),R.useEffect(()=>{if(K){const P=N=>K.enabled=!N.value;return j.addEventListener("dragging-changed",P),()=>j.removeEventListener("dragging-changed",P)}},[j,K]);const H=R.useRef(),J=R.useRef(),G=R.useRef(),O=R.useRef();return R.useLayoutEffect(()=>void(H.current=t),[t]),R.useLayoutEffect(()=>void(J.current=n),[n]),R.useLayoutEffect(()=>void(G.current=i),[i]),R.useLayoutEffect(()=>void(O.current=r),[r]),R.useEffect(()=>{const P=te=>{w(),H.current==null||H.current(te)},N=te=>J.current==null?void 0:J.current(te),V=te=>G.current==null?void 0:G.current(te),U=te=>O.current==null?void 0:O.current(te);return j.addEventListener("change",P),j.addEventListener("mouseDown",N),j.addEventListener("mouseUp",V),j.addEventListener("objectChange",U),()=>{j.removeEventListener("change",P),j.removeEventListener("mouseDown",N),j.removeEventListener("mouseUp",V),j.removeEventListener("objectChange",U)}},[w,j]),R.useEffect(()=>{if(a){const P=D().controls;return M({controls:j}),()=>M({controls:P})}},[a,j]),R.createElement(R.Fragment,null,R.createElement("primitive",{ref:F,object:j,enabled:A,axis:u,mode:d,translationSnap:f,rotationSnap:h,scaleSnap:y,space:g,size:x,showX:m,showY:p,showZ:b}),R.createElement("group",ui({ref:z},C),o))}),ap=np({cellSize:.5,sectionSize:1,fadeDistance:100,fadeStrength:1,fadeFrom:1,cellThickness:.5,sectionThickness:1,cellColor:new oe,sectionColor:new oe,infiniteGrid:!1,followCamera:!1,worldCamProjPosition:new I,worldPlanePosition:new I},`
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
      #include <${Dr>=154?"colorspace_fragment":"encodings_fragment"}>
    }
  `),lp=R.forwardRef(({args:o,cellColor:e="#000000",sectionColor:t="#2080ff",cellSize:n=.5,sectionSize:i=1,followCamera:r=!1,infiniteGrid:s=!1,fadeDistance:a=100,fadeStrength:l=1,fadeFrom:A=1,cellThickness:u=.5,sectionThickness:d=1,side:f=xi,...h},y)=>{Rd({GridMaterial:ap});const g=R.useRef(null);R.useImperativeHandle(y,()=>g.current,[]);const x=new Mn,m=new I(0,1,0),p=new I(0,0,0);So(F=>{x.setFromNormalAndCoplanarPoint(m,p).applyMatrix4(g.current.matrixWorld);const K=g.current.material,B=K.uniforms.worldCamProjPosition,S=K.uniforms.worldPlanePosition;x.projectPoint(F.camera.position,B.value),S.value.set(0,0,0).applyMatrix4(g.current.matrixWorld)});const b={cellSize:n,sectionSize:i,cellColor:e,sectionColor:t,cellThickness:u,sectionThickness:d},C={fadeDistance:a,fadeStrength:l,fadeFrom:A,infiniteGrid:s,followCamera:r};return R.createElement("mesh",ui({ref:g,frustumCulled:!1},h),R.createElement("gridMaterial",ui({transparent:!0,"extensions-derivatives":!0,side:f},b,C)),R.createElement("planeGeometry",{args:o}))}),Tr=0,cp=1,Ir=2,hs=2,Oi=1.25,ms=1,xt=6*4+4+4,Fi=65535,up=Math.pow(2,-24),Gi=Symbol("SKIP_GENERATION");function kr(o){return o.index?o.index.count:o.attributes.position.count}function $t(o){return kr(o)/3}function jr(o,e=ArrayBuffer){return o>65535?new Uint32Array(new e(4*o)):new Uint16Array(new e(2*o))}function Ap(o,e){if(!o.index){const t=o.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=jr(t,n);o.setIndex(new ue(i,1));for(let r=0;r<t;r++)i[r]=r}}function Pr(o,e){const t=$t(o),n=e||o.drawRange,i=n.start/3,r=(n.start+n.count)/3,s=Math.max(0,i),a=Math.min(t,r)-s;return[{offset:Math.floor(s),count:Math.floor(a)}]}function zr(o,e){if(!o.groups||!o.groups.length)return Pr(o,e);const t=[],n=new Set,i=e||o.drawRange,r=i.start/3,s=(i.start+i.count)/3;for(const l of o.groups){const A=l.start/3,u=(l.start+l.count)/3;n.add(Math.max(r,A)),n.add(Math.min(s,u))}const a=Array.from(n.values()).sort((l,A)=>l-A);for(let l=0;l<a.length-1;l++){const A=a[l],u=a[l+1];t.push({offset:Math.floor(A),count:Math.floor(u-A)})}return t}function dp(o,e){const t=$t(o),n=zr(o,e).sort((s,a)=>s.offset-a.offset),i=n[n.length-1];i.count=Math.min(t-i.offset,i.count);let r=0;return n.forEach(({count:s})=>r+=s),t!==r}function Ni(o,e,t,n,i){let r=1/0,s=1/0,a=1/0,l=-1/0,A=-1/0,u=-1/0,d=1/0,f=1/0,h=1/0,y=-1/0,g=-1/0,x=-1/0;for(let m=e*6,p=(e+t)*6;m<p;m+=6){const b=o[m+0],C=o[m+1],F=b-C,K=b+C;F<r&&(r=F),K>l&&(l=K),b<d&&(d=b),b>y&&(y=b);const B=o[m+2],S=o[m+3],v=B-S,w=B+S;v<s&&(s=v),w>A&&(A=w),B<f&&(f=B),B>g&&(g=B);const D=o[m+4],M=o[m+5],T=D-M,E=D+M;T<a&&(a=T),E>u&&(u=E),D<h&&(h=D),D>x&&(x=D)}n[0]=r,n[1]=s,n[2]=a,n[3]=l,n[4]=A,n[5]=u,i[0]=d,i[1]=f,i[2]=h,i[3]=y,i[4]=g,i[5]=x}function fp(o,e=null,t=null,n=null){const i=o.attributes.position,r=o.index?o.index.array:null,s=$t(o),a=i.normalized;let l;e===null?(l=new Float32Array(s*6*4),t=0,n=s):(l=e,t=t||0,n=n||s);const A=i.array,u=i.offset||0;let d=3;i.isInterleavedBufferAttribute&&(d=i.data.stride);const f=["getX","getY","getZ"];for(let h=t;h<t+n;h++){const y=h*3,g=h*6;let x=y+0,m=y+1,p=y+2;r&&(x=r[x],m=r[m],p=r[p]),a||(x=x*d+u,m=m*d+u,p=p*d+u);for(let b=0;b<3;b++){let C,F,K;a?(C=i[f[b]](x),F=i[f[b]](m),K=i[f[b]](p)):(C=A[x+b],F=A[m+b],K=A[p+b]);let B=C;F<B&&(B=F),K<B&&(B=K);let S=C;F>S&&(S=F),K>S&&(S=K);const v=(S-B)/2,w=b*2;l[g+w+0]=B+v,l[g+w+1]=v+(Math.abs(B)+v)*up}}return l}function se(o,e,t){return t.min.x=e[o],t.min.y=e[o+1],t.min.z=e[o+2],t.max.x=e[o+3],t.max.y=e[o+4],t.max.z=e[o+5],t}function gs(o){let e=-1,t=-1/0;for(let n=0;n<3;n++){const i=o[n+3]-o[n];i>t&&(t=i,e=n)}return e}function xs(o,e){e.set(o)}function ys(o,e,t){let n,i;for(let r=0;r<3;r++){const s=r+3;n=o[r],i=e[r],t[r]=n<i?n:i,n=o[s],i=e[s],t[s]=n>i?n:i}}function Ho(o,e,t){for(let n=0;n<3;n++){const i=e[o+2*n],r=e[o+2*n+1],s=i-r,a=i+r;s<t[n]&&(t[n]=s),a>t[n+3]&&(t[n+3]=a)}}function io(o){const e=o[3]-o[0],t=o[4]-o[1],n=o[5]-o[2];return 2*(e*t+t*n+n*e)}const _e=32,pp=(o,e)=>o.candidate-e.candidate,at=new Array(_e).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Oo=new Float32Array(6);function hp(o,e,t,n,i,r){let s=-1,a=0;if(r===Tr)s=gs(e),s!==-1&&(a=(e[s]+e[s+3])/2);else if(r===cp)s=gs(o),s!==-1&&(a=mp(t,n,i,s));else if(r===Ir){const l=io(o);let A=Oi*i;const u=n*6,d=(n+i)*6;for(let f=0;f<3;f++){const h=e[f],x=(e[f+3]-h)/_e;if(i<_e/4){const m=[...at];m.length=i;let p=0;for(let C=u;C<d;C+=6,p++){const F=m[p];F.candidate=t[C+2*f],F.count=0;const{bounds:K,leftCacheBounds:B,rightCacheBounds:S}=F;for(let v=0;v<3;v++)S[v]=1/0,S[v+3]=-1/0,B[v]=1/0,B[v+3]=-1/0,K[v]=1/0,K[v+3]=-1/0;Ho(C,t,K)}m.sort(pp);let b=i;for(let C=0;C<b;C++){const F=m[C];for(;C+1<b&&m[C+1].candidate===F.candidate;)m.splice(C+1,1),b--}for(let C=u;C<d;C+=6){const F=t[C+2*f];for(let K=0;K<b;K++){const B=m[K];F>=B.candidate?Ho(C,t,B.rightCacheBounds):(Ho(C,t,B.leftCacheBounds),B.count++)}}for(let C=0;C<b;C++){const F=m[C],K=F.count,B=i-F.count,S=F.leftCacheBounds,v=F.rightCacheBounds;let w=0;K!==0&&(w=io(S)/l);let D=0;B!==0&&(D=io(v)/l);const M=ms+Oi*(w*K+D*B);M<A&&(s=f,A=M,a=F.candidate)}}else{for(let b=0;b<_e;b++){const C=at[b];C.count=0,C.candidate=h+x+b*x;const F=C.bounds;for(let K=0;K<3;K++)F[K]=1/0,F[K+3]=-1/0}for(let b=u;b<d;b+=6){let K=~~((t[b+2*f]-h)/x);K>=_e&&(K=_e-1);const B=at[K];B.count++,Ho(b,t,B.bounds)}const m=at[_e-1];xs(m.bounds,m.rightCacheBounds);for(let b=_e-2;b>=0;b--){const C=at[b],F=at[b+1];ys(C.bounds,F.rightCacheBounds,C.rightCacheBounds)}let p=0;for(let b=0;b<_e-1;b++){const C=at[b],F=C.count,K=C.bounds,S=at[b+1].rightCacheBounds;F!==0&&(p===0?xs(K,Oo):ys(K,Oo,Oo)),p+=F;let v=0,w=0;p!==0&&(v=io(Oo)/l);const D=i-p;D!==0&&(w=io(S)/l);const M=ms+Oi*(v*p+w*D);M<A&&(s=f,A=M,a=C.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:s,pos:a}}function mp(o,e,t,n){let i=0;for(let r=e,s=e+t;r<s;r++)i+=o[r*6+n*2];return i/t}class Li{constructor(){this.boundingData=new Float32Array(6)}}function gp(o,e,t,n,i,r){let s=n,a=n+i-1;const l=r.pos,A=r.axis*2;for(;;){for(;s<=a&&t[s*6+A]<l;)s++;for(;s<=a&&t[a*6+A]>=l;)a--;if(s<a){for(let u=0;u<3;u++){let d=e[s*3+u];e[s*3+u]=e[a*3+u],e[a*3+u]=d}for(let u=0;u<6;u++){let d=t[s*6+u];t[s*6+u]=t[a*6+u],t[a*6+u]=d}s++,a--}else return s}}function xp(o,e,t,n,i,r){let s=n,a=n+i-1;const l=r.pos,A=r.axis*2;for(;;){for(;s<=a&&t[s*6+A]<l;)s++;for(;s<=a&&t[a*6+A]>=l;)a--;if(s<a){let u=o[s];o[s]=o[a],o[a]=u;for(let d=0;d<6;d++){let f=t[s*6+d];t[s*6+d]=t[a*6+d],t[a*6+d]=f}s++,a--}else return s}}function ge(o,e){return e[o+15]===65535}function Ke(o,e){return e[o+6]}function Re(o,e){return e[o+14]}function we(o){return o+8}function ve(o,e){return e[o+6]}function jn(o,e){return e[o+7]}let Hr,fo,ri,Or;const yp=Math.pow(2,32);function fn(o){return"count"in o?1:1+fn(o.left)+fn(o.right)}function bp(o,e,t){return Hr=new Float32Array(t),fo=new Uint32Array(t),ri=new Uint16Array(t),Or=new Uint8Array(t),pn(o,e)}function pn(o,e){const t=o/4,n=o/2,i="count"in e,r=e.boundingData;for(let s=0;s<6;s++)Hr[t+s]=r[s];if(i)if(e.buffer){const s=e.buffer;Or.set(new Uint8Array(s),o);for(let a=o,l=o+s.byteLength;a<l;a+=xt){const A=a/2;ge(A,ri)||(fo[a/4+6]+=t)}return o+s.byteLength}else{const s=e.offset,a=e.count;return fo[t+6]=s,ri[n+14]=a,ri[n+15]=Fi,o+xt}else{const s=e.left,a=e.right,l=e.splitAxis;let A;if(A=pn(o+xt,s),A/4>yp)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return fo[t+6]=A/4,A=pn(A,a),fo[t+7]=l,A}}function Cp(o,e){const t=(o.index?o.index.count:o.attributes.position.count)/3,n=t>2**16,i=n?4:2,r=e?new SharedArrayBuffer(t*i):new ArrayBuffer(t*i),s=n?new Uint32Array(r):new Uint16Array(r);for(let a=0,l=s.length;a<l;a++)s[a]=a;return s}function Fp(o,e,t,n,i){const{maxDepth:r,verbose:s,maxLeafTris:a,strategy:l,onProgress:A,indirect:u}=i,d=o._indirectBuffer,f=o.geometry,h=f.index?f.index.array:null,y=u?xp:gp,g=$t(f),x=new Float32Array(6);let m=!1;const p=new Li;return Ni(e,t,n,p.boundingData,x),C(p,t,n,x),p;function b(F){A&&A(F/g)}function C(F,K,B,S=null,v=0){if(!m&&v>=r&&(m=!0,s&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(f))),B<=a||v>=r)return b(K+B),F.offset=K,F.count=B,F;const w=hp(F.boundingData,S,e,K,B,l);if(w.axis===-1)return b(K+B),F.offset=K,F.count=B,F;const D=y(d,h,e,K,B,w);if(D===K||D===K+B)b(K+B),F.offset=K,F.count=B;else{F.splitAxis=w.axis;const M=new Li,T=K,E=D-K;F.left=M,Ni(e,T,E,M.boundingData,x),C(M,T,E,x,v+1);const j=new Li,z=D,H=B-E;F.right=j,Ni(e,z,H,j.boundingData,x),C(j,z,H,x,v+1)}return F}}function Kp(o,e){const t=o.geometry;e.indirect&&(o._indirectBuffer=Cp(t,e.useSharedArrayBuffer),dp(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),o._indirectBuffer||Ap(t,e);const n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=fp(t),r=e.indirect?Pr(t,e.range):zr(t,e.range);o._roots=r.map(s=>{const a=Fp(o,i,s.offset,s.count,e),l=fn(a),A=new n(xt*l);return bp(0,a,A),A})}class ot{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let r=0,s=e.length;r<s;r++){const l=e[r][t];n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let r=0,s=t.length;r<s;r++){const a=t[r],l=e.dot(a);n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}ot.prototype.setFromBox=function(){const o=new I;return function(t,n){const i=n.min,r=n.max;let s=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let A=0;A<=1;A++)for(let u=0;u<=1;u++){o.x=i.x*l+r.x*(1-l),o.y=i.y*A+r.y*(1-A),o.z=i.z*u+r.z*(1-u);const d=t.dot(o);s=Math.min(d,s),a=Math.max(d,a)}this.min=s,this.max=a}}();const Bp=function(){const o=new I,e=new I,t=new I;return function(i,r,s){const a=i.start,l=o,A=r.start,u=e;t.subVectors(a,A),o.subVectors(i.end,i.start),e.subVectors(r.end,r.start);const d=t.dot(u),f=u.dot(l),h=u.dot(u),y=t.dot(l),x=l.dot(l)*h-f*f;let m,p;x!==0?m=(d*f-y*h)/x:m=0,p=(d+m*f)/h,s.x=m,s.y=p}}(),Pn=function(){const o=new Le,e=new I,t=new I;return function(i,r,s,a){Bp(i,r,o);let l=o.x,A=o.y;if(l>=0&&l<=1&&A>=0&&A<=1){i.at(l,s),r.at(A,a);return}else if(l>=0&&l<=1){A<0?r.at(0,a):r.at(1,a),i.closestPointToPoint(a,!0,s);return}else if(A>=0&&A<=1){l<0?i.at(0,s):i.at(1,s),r.closestPointToPoint(s,!0,a);return}else{let u;l<0?u=i.start:u=i.end;let d;A<0?d=r.start:d=r.end;const f=e,h=t;if(i.closestPointToPoint(d,!0,e),r.closestPointToPoint(u,!0,t),f.distanceToSquared(d)<=h.distanceToSquared(u)){s.copy(f),a.copy(d);return}else{s.copy(u),a.copy(h);return}}}}(),Rp=function(){const o=new I,e=new I,t=new Mn,n=new et;return function(r,s){const{radius:a,center:l}=r,{a:A,b:u,c:d}=s;if(n.start=A,n.end=u,n.closestPointToPoint(l,!0,o).distanceTo(l)<=a||(n.start=A,n.end=d,n.closestPointToPoint(l,!0,o).distanceTo(l)<=a)||(n.start=u,n.end=d,n.closestPointToPoint(l,!0,o).distanceTo(l)<=a))return!0;const g=s.getPlane(t);if(Math.abs(g.distanceToPoint(l))<=a){const m=g.projectPoint(l,e);if(s.containsPoint(m))return!0}return!1}}(),vp=1e-15;function Qi(o){return Math.abs(o)<vp}class Qe extends Ao{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new I),this.satBounds=new Array(4).fill().map(()=>new ot),this.points=[this.a,this.b,this.c],this.sphere=new mr,this.plane=new Mn,this.needsUpdate=!0}intersectsSphere(e){return Rp(e,this)}update(){const e=this.a,t=this.b,n=this.c,i=this.points,r=this.satAxes,s=this.satBounds,a=r[0],l=s[0];this.getNormal(a),l.setFromPoints(a,i);const A=r[1],u=s[1];A.subVectors(e,t),u.setFromPoints(A,i);const d=r[2],f=s[2];d.subVectors(t,n),f.setFromPoints(d,i);const h=r[3],y=s[3];h.subVectors(n,e),y.setFromPoints(h,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}}Qe.prototype.closestPointToSegment=function(){const o=new I,e=new I,t=new et;return function(i,r=null,s=null){const{start:a,end:l}=i,A=this.points;let u,d=1/0;for(let f=0;f<3;f++){const h=(f+1)%3;t.start.copy(A[f]),t.end.copy(A[h]),Pn(t,i,o,e),u=o.distanceToSquared(e),u<d&&(d=u,r&&r.copy(o),s&&s.copy(e))}return this.closestPointToPoint(a,o),u=a.distanceToSquared(o),u<d&&(d=u,r&&r.copy(o),s&&s.copy(a)),this.closestPointToPoint(l,o),u=l.distanceToSquared(o),u<d&&(d=u,r&&r.copy(o),s&&s.copy(l)),Math.sqrt(d)}}();Qe.prototype.intersectsTriangle=function(){const o=new Qe,e=new Array(3),t=new Array(3),n=new ot,i=new ot,r=new I,s=new I,a=new I,l=new I,A=new I,u=new et,d=new et,f=new et,h=new I;function y(g,x,m){const p=g.points;let b=0,C=-1;for(let F=0;F<3;F++){const{start:K,end:B}=u;K.copy(p[F]),B.copy(p[(F+1)%3]),u.delta(s);const S=Qi(x.distanceToPoint(K));if(Qi(x.normal.dot(s))&&S){m.copy(u),b=2;break}const v=x.intersectLine(u,h);if(!v&&S&&h.copy(K),(v||S)&&!Qi(h.distanceTo(B))){if(b<=1)(b===1?m.start:m.end).copy(h),S&&(C=b);else if(b>=2){(C===1?m.start:m.end).copy(h),b=2;break}if(b++,b===2&&C===-1)break}}return b}return function(x,m=null,p=!1){this.needsUpdate&&this.update(),x.isExtendedTriangle?x.needsUpdate&&x.update():(o.copy(x),o.update(),x=o);const b=this.plane,C=x.plane;if(Math.abs(b.normal.dot(C.normal))>1-1e-10){const F=this.satBounds,K=this.satAxes;t[0]=x.a,t[1]=x.b,t[2]=x.c;for(let v=0;v<4;v++){const w=F[v],D=K[v];if(n.setFromPoints(D,t),w.isSeparated(n))return!1}const B=x.satBounds,S=x.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let v=0;v<4;v++){const w=B[v],D=S[v];if(n.setFromPoints(D,e),w.isSeparated(n))return!1}for(let v=0;v<4;v++){const w=K[v];for(let D=0;D<4;D++){const M=S[D];if(r.crossVectors(w,M),n.setFromPoints(r,e),i.setFromPoints(r,t),n.isSeparated(i))return!1}}return m&&(p||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),m.start.set(0,0,0),m.end.set(0,0,0)),!0}else{const F=y(this,C,d);if(F===1&&x.containsPoint(d.end))return m&&(m.start.copy(d.end),m.end.copy(d.end)),!0;if(F!==2)return!1;const K=y(x,b,f);if(K===1&&this.containsPoint(f.end))return m&&(m.start.copy(f.end),m.end.copy(f.end)),!0;if(K!==2)return!1;if(d.delta(a),f.delta(l),a.dot(l)<0){let T=f.start;f.start=f.end,f.end=T}const B=d.start.dot(a),S=d.end.dot(a),v=f.start.dot(a),w=f.end.dot(a),D=S<v,M=B<w;return B!==w&&v!==S&&D===M?!1:(m&&(A.subVectors(d.start,f.start),A.dot(a)>0?m.start.copy(d.start):m.start.copy(f.start),A.subVectors(d.end,f.end),A.dot(a)<0?m.end.copy(d.end):m.end.copy(f.end)),!0)}}}();Qe.prototype.distanceToPoint=function(){const o=new I;return function(t){return this.closestPointToPoint(t,o),t.distanceTo(o)}}();Qe.prototype.distanceToTriangle=function(){const o=new I,e=new I,t=["a","b","c"],n=new et,i=new et;return function(s,a=null,l=null){const A=a||l?n:null;if(this.intersectsTriangle(s,A))return(a||l)&&(a&&A.getCenter(a),l&&A.getCenter(l)),0;let u=1/0;for(let d=0;d<3;d++){let f;const h=t[d],y=s[h];this.closestPointToPoint(y,o),f=y.distanceToSquared(o),f<u&&(u=f,a&&a.copy(o),l&&l.copy(y));const g=this[h];s.closestPointToPoint(g,o),f=g.distanceToSquared(o),f<u&&(u=f,a&&a.copy(g),l&&l.copy(o))}for(let d=0;d<3;d++){const f=t[d],h=t[(d+1)%3];n.set(this[f],this[h]);for(let y=0;y<3;y++){const g=t[y],x=t[(y+1)%3];i.set(s[g],s[x]),Pn(n,i,o,e);const m=o.distanceToSquared(e);m<u&&(u=m,a&&a.copy(o),l&&l.copy(e))}}return Math.sqrt(u)}}();class be{constructor(e,t,n){this.isOrientedBox=!0,this.min=new I,this.max=new I,this.matrix=new ce,this.invMatrix=new ce,this.points=new Array(8).fill().map(()=>new I),this.satAxes=new Array(3).fill().map(()=>new I),this.satBounds=new Array(3).fill().map(()=>new ot),this.alignedSatBounds=new Array(3).fill().map(()=>new ot),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}be.prototype.update=function(){return function(){const e=this.matrix,t=this.min,n=this.max,i=this.points;for(let A=0;A<=1;A++)for(let u=0;u<=1;u++)for(let d=0;d<=1;d++){const f=1*A|2*u|4*d,h=i[f];h.x=A?n.x:t.x,h.y=u?n.y:t.y,h.z=d?n.z:t.z,h.applyMatrix4(e)}const r=this.satBounds,s=this.satAxes,a=i[0];for(let A=0;A<3;A++){const u=s[A],d=r[A],f=1<<A,h=i[f];u.subVectors(a,h),d.setFromPoints(u,i)}const l=this.alignedSatBounds;l[0].setFromPointsField(i,"x"),l[1].setFromPointsField(i,"y"),l[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();be.prototype.intersectsBox=function(){const o=new ot;return function(t){this.needsUpdate&&this.update();const n=t.min,i=t.max,r=this.satBounds,s=this.satAxes,a=this.alignedSatBounds;if(o.min=n.x,o.max=i.x,a[0].isSeparated(o)||(o.min=n.y,o.max=i.y,a[1].isSeparated(o))||(o.min=n.z,o.max=i.z,a[2].isSeparated(o)))return!1;for(let l=0;l<3;l++){const A=s[l],u=r[l];if(o.setFromBox(A,t),u.isSeparated(o))return!1}return!0}}();be.prototype.intersectsTriangle=function(){const o=new Qe,e=new Array(3),t=new ot,n=new ot,i=new I;return function(s){this.needsUpdate&&this.update(),s.isExtendedTriangle?s.needsUpdate&&s.update():(o.copy(s),o.update(),s=o);const a=this.satBounds,l=this.satAxes;e[0]=s.a,e[1]=s.b,e[2]=s.c;for(let f=0;f<3;f++){const h=a[f],y=l[f];if(t.setFromPoints(y,e),h.isSeparated(t))return!1}const A=s.satBounds,u=s.satAxes,d=this.points;for(let f=0;f<3;f++){const h=A[f],y=u[f];if(t.setFromPoints(y,d),h.isSeparated(t))return!1}for(let f=0;f<3;f++){const h=l[f];for(let y=0;y<4;y++){const g=u[y];if(i.crossVectors(h,g),t.setFromPoints(i,e),n.setFromPoints(i,d),t.isSeparated(n))return!1}}return!0}}();be.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();be.prototype.distanceToPoint=function(){const o=new I;return function(t){return this.closestPointToPoint(t,o),t.distanceTo(o)}}();be.prototype.distanceToBox=function(){const o=["x","y","z"],e=new Array(12).fill().map(()=>new et),t=new Array(12).fill().map(()=>new et),n=new I,i=new I;return function(s,a=0,l=null,A=null){if(this.needsUpdate&&this.update(),this.intersectsBox(s))return(l||A)&&(s.getCenter(i),this.closestPointToPoint(i,n),s.closestPointToPoint(n,i),l&&l.copy(n),A&&A.copy(i)),0;const u=a*a,d=s.min,f=s.max,h=this.points;let y=1/0;for(let x=0;x<8;x++){const m=h[x];i.copy(m).clamp(d,f);const p=m.distanceToSquared(i);if(p<y&&(y=p,l&&l.copy(m),A&&A.copy(i),p<u))return Math.sqrt(p)}let g=0;for(let x=0;x<3;x++)for(let m=0;m<=1;m++)for(let p=0;p<=1;p++){const b=(x+1)%3,C=(x+2)%3,F=m<<b|p<<C,K=1<<x|m<<b|p<<C,B=h[F],S=h[K];e[g].set(B,S);const w=o[x],D=o[b],M=o[C],T=t[g],E=T.start,j=T.end;E[w]=d[w],E[D]=m?d[D]:f[D],E[M]=p?d[M]:f[D],j[w]=f[w],j[D]=m?d[D]:f[D],j[M]=p?d[M]:f[D],g++}for(let x=0;x<=1;x++)for(let m=0;m<=1;m++)for(let p=0;p<=1;p++){i.x=x?f.x:d.x,i.y=m?f.y:d.y,i.z=p?f.z:d.z,this.closestPointToPoint(i,n);const b=i.distanceToSquared(n);if(b<y&&(y=b,l&&l.copy(n),A&&A.copy(i),b<u))return Math.sqrt(b)}for(let x=0;x<12;x++){const m=e[x];for(let p=0;p<12;p++){const b=t[p];Pn(m,b,n,i);const C=n.distanceToSquared(i);if(C<y&&(y=C,l&&l.copy(n),A&&A.copy(i),C<u))return Math.sqrt(C)}}return Math.sqrt(y)}}();class zn{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class Sp extends zn{constructor(){super(()=>new Qe)}}const De=new Sp;class Mp{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const ne=new Mp;let pt,Jt;const It=[],Go=new zn(()=>new pe);function wp(o,e,t,n,i,r){pt=Go.getPrimitive(),Jt=Go.getPrimitive(),It.push(pt,Jt),ne.setBuffer(o._roots[e]);const s=hn(0,o.geometry,t,n,i,r);ne.clearBuffer(),Go.releasePrimitive(pt),Go.releasePrimitive(Jt),It.pop(),It.pop();const a=It.length;return a>0&&(Jt=It[a-1],pt=It[a-2]),s}function hn(o,e,t,n,i=null,r=0,s=0){const{float32Array:a,uint16Array:l,uint32Array:A}=ne;let u=o*2;if(ge(u,l)){const f=Ke(o,A),h=Re(u,l);return se(o,a,pt),n(f,h,!1,s,r+o,pt)}else{let w=function(M){const{uint16Array:T,uint32Array:E}=ne;let j=M*2;for(;!ge(j,T);)M=we(M),j=M*2;return Ke(M,E)},D=function(M){const{uint16Array:T,uint32Array:E}=ne;let j=M*2;for(;!ge(j,T);)M=ve(M,E),j=M*2;return Ke(M,E)+Re(j,T)};const f=we(o),h=ve(o,A);let y=f,g=h,x,m,p,b;if(i&&(p=pt,b=Jt,se(y,a,p),se(g,a,b),x=i(p),m=i(b),m<x)){y=h,g=f;const M=x;x=m,m=M,p=b}p||(p=pt,se(y,a,p));const C=ge(y*2,l),F=t(p,C,x,s+1,r+y);let K;if(F===hs){const M=w(y),E=D(y)-M;K=n(M,E,!0,s+1,r+y,p)}else K=F&&hn(y,e,t,n,i,r,s+1);if(K)return!0;b=Jt,se(g,a,b);const B=ge(g*2,l),S=t(b,B,m,s+1,r+g);let v;if(S===hs){const M=w(g),E=D(g)-M;v=n(M,E,!0,s+1,r+g,b)}else v=S&&hn(g,e,t,n,i,r,s+1);return!!v}}const no=new I,Ji=new I;function Dp(o,e,t={},n=0,i=1/0){const r=n*n,s=i*i;let a=1/0,l=null;if(o.shapecast({boundsTraverseOrder:u=>(no.copy(e).clamp(u.min,u.max),no.distanceToSquared(e)),intersectsBounds:(u,d,f)=>f<a&&f<s,intersectsTriangle:(u,d)=>{u.closestPointToPoint(e,no);const f=e.distanceToSquared(no);return f<a&&(Ji.copy(no),a=f,l=d),f<r}}),a===1/0)return null;const A=Math.sqrt(a);return t.point?t.point.copy(Ji):t.point=Ji.clone(),t.distance=A,t.faceIndex=l,t}const kt=new I,jt=new I,Pt=new I,No=new Le,Lo=new Le,Qo=new Le,bs=new I,Cs=new I,Fs=new I,Jo=new I;function Up(o,e,t,n,i,r,s,a){let l;if(r===xi?l=o.intersectTriangle(n,t,e,!0,i):l=o.intersectTriangle(e,t,n,r!==_t,i),l===null)return null;const A=o.origin.distanceTo(i);return A<s||A>a?null:{distance:A,point:i.clone()}}function Ep(o,e,t,n,i,r,s,a,l,A,u){kt.fromBufferAttribute(e,r),jt.fromBufferAttribute(e,s),Pt.fromBufferAttribute(e,a);const d=Up(o,kt,jt,Pt,Jo,l,A,u);if(d){n&&(No.fromBufferAttribute(n,r),Lo.fromBufferAttribute(n,s),Qo.fromBufferAttribute(n,a),d.uv=Ao.getInterpolation(Jo,kt,jt,Pt,No,Lo,Qo,new Le)),i&&(No.fromBufferAttribute(i,r),Lo.fromBufferAttribute(i,s),Qo.fromBufferAttribute(i,a),d.uv1=Ao.getInterpolation(Jo,kt,jt,Pt,No,Lo,Qo,new Le)),t&&(bs.fromBufferAttribute(t,r),Cs.fromBufferAttribute(t,s),Fs.fromBufferAttribute(t,a),d.normal=Ao.getInterpolation(Jo,kt,jt,Pt,bs,Cs,Fs,new I),d.normal.dot(o.direction)>0&&d.normal.multiplyScalar(-1));const f={a:r,b:s,c:a,normal:new I,materialIndex:0};Ao.getNormal(kt,jt,Pt,f.normal),d.face=f,d.faceIndex=r}return d}function Ki(o,e,t,n,i,r,s){const a=n*3;let l=a+0,A=a+1,u=a+2;const d=o.index;o.index&&(l=d.getX(l),A=d.getX(A),u=d.getX(u));const{position:f,normal:h,uv:y,uv1:g}=o.attributes,x=Ep(t,f,h,y,g,l,A,u,e,r,s);return x?(x.faceIndex=n,i&&i.push(x),x):null}function le(o,e,t,n){const i=o.a,r=o.b,s=o.c;let a=e,l=e+1,A=e+2;t&&(a=t.getX(a),l=t.getX(l),A=t.getX(A)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),r.x=n.getX(l),r.y=n.getY(l),r.z=n.getZ(l),s.x=n.getX(A),s.y=n.getY(A),s.z=n.getZ(A)}function Tp(o,e,t,n,i,r,s,a){const{geometry:l,_indirectBuffer:A}=o;for(let u=n,d=n+i;u<d;u++)Ki(l,e,t,u,r,s,a)}function Ip(o,e,t,n,i,r,s){const{geometry:a,_indirectBuffer:l}=o;let A=1/0,u=null;for(let d=n,f=n+i;d<f;d++){let h;h=Ki(a,e,t,d,null,r,s),h&&h.distance<A&&(u=h,A=h.distance)}return u}function kp(o,e,t,n,i,r,s){const{geometry:a}=t,{index:l}=a,A=a.attributes.position;for(let u=o,d=e+o;u<d;u++){let f;if(f=u,le(s,f*3,l,A),s.needsUpdate=!0,n(s,f,i,r))return!0}return!1}function jp(o,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=o.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let r,s,a,l,A=0;const u=o._roots;for(let f=0,h=u.length;f<h;f++)r=u[f],s=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),d(0,A),A+=r.byteLength;function d(f,h,y=!1){const g=f*2;if(a[g+15]===Fi){const m=s[f+6],p=a[g+14];let b=1/0,C=1/0,F=1/0,K=-1/0,B=-1/0,S=-1/0;for(let v=3*m,w=3*(m+p);v<w;v++){let D=n[v];const M=i.getX(D),T=i.getY(D),E=i.getZ(D);M<b&&(b=M),M>K&&(K=M),T<C&&(C=T),T>B&&(B=T),E<F&&(F=E),E>S&&(S=E)}return l[f+0]!==b||l[f+1]!==C||l[f+2]!==F||l[f+3]!==K||l[f+4]!==B||l[f+5]!==S?(l[f+0]=b,l[f+1]=C,l[f+2]=F,l[f+3]=K,l[f+4]=B,l[f+5]=S,!0):!1}else{const m=f+8,p=s[f+6],b=m+h,C=p+h;let F=y,K=!1,B=!1;e?F||(K=e.has(b),B=e.has(C),F=!K&&!B):(K=!0,B=!0);const S=F||K,v=F||B;let w=!1;S&&(w=d(m,h,F));let D=!1;v&&(D=d(p,h,F));const M=w||D;if(M)for(let T=0;T<3;T++){const E=m+T,j=p+T,z=l[E],H=l[E+3],J=l[j],G=l[j+3];l[f+T]=z<J?z:J,l[f+T+3]=H>G?H:G}return M}}}function Ft(o,e,t,n,i){let r,s,a,l,A,u;const d=1/t.direction.x,f=1/t.direction.y,h=1/t.direction.z,y=t.origin.x,g=t.origin.y,x=t.origin.z;let m=e[o],p=e[o+3],b=e[o+1],C=e[o+3+1],F=e[o+2],K=e[o+3+2];return d>=0?(r=(m-y)*d,s=(p-y)*d):(r=(p-y)*d,s=(m-y)*d),f>=0?(a=(b-g)*f,l=(C-g)*f):(a=(C-g)*f,l=(b-g)*f),r>l||a>s||((a>r||isNaN(r))&&(r=a),(l<s||isNaN(s))&&(s=l),h>=0?(A=(F-x)*h,u=(K-x)*h):(A=(K-x)*h,u=(F-x)*h),r>u||A>s)?!1:((A>r||r!==r)&&(r=A),(u<s||s!==s)&&(s=u),r<=i&&s>=n)}function Pp(o,e,t,n,i,r,s,a){const{geometry:l,_indirectBuffer:A}=o;for(let u=n,d=n+i;u<d;u++){let f=A?A[u]:u;Ki(l,e,t,f,r,s,a)}}function zp(o,e,t,n,i,r,s){const{geometry:a,_indirectBuffer:l}=o;let A=1/0,u=null;for(let d=n,f=n+i;d<f;d++){let h;h=Ki(a,e,t,l?l[d]:d,null,r,s),h&&h.distance<A&&(u=h,A=h.distance)}return u}function Hp(o,e,t,n,i,r,s){const{geometry:a}=t,{index:l}=a,A=a.attributes.position;for(let u=o,d=e+o;u<d;u++){let f;if(f=t.resolveTriangleIndex(u),le(s,f*3,l,A),s.needsUpdate=!0,n(s,f,i,r))return!0}return!1}function Op(o,e,t,n,i,r,s){ne.setBuffer(o._roots[e]),mn(0,o,t,n,i,r,s),ne.clearBuffer()}function mn(o,e,t,n,i,r,s){const{float32Array:a,uint16Array:l,uint32Array:A}=ne,u=o*2;if(ge(u,l)){const f=Ke(o,A),h=Re(u,l);Tp(e,t,n,f,h,i,r,s)}else{const f=we(o);Ft(f,a,n,r,s)&&mn(f,e,t,n,i,r,s);const h=ve(o,A);Ft(h,a,n,r,s)&&mn(h,e,t,n,i,r,s)}}const Gp=["x","y","z"];function Np(o,e,t,n,i,r){ne.setBuffer(o._roots[e]);const s=gn(0,o,t,n,i,r);return ne.clearBuffer(),s}function gn(o,e,t,n,i,r){const{float32Array:s,uint16Array:a,uint32Array:l}=ne;let A=o*2;if(ge(A,a)){const d=Ke(o,l),f=Re(A,a);return Ip(e,t,n,d,f,i,r)}else{const d=jn(o,l),f=Gp[d],y=n.direction[f]>=0;let g,x;y?(g=we(o),x=ve(o,l)):(g=ve(o,l),x=we(o));const p=Ft(g,s,n,i,r)?gn(g,e,t,n,i,r):null;if(p){const F=p.point[f];if(y?F<=s[x+d]:F>=s[x+d+3])return p}const C=Ft(x,s,n,i,r)?gn(x,e,t,n,i,r):null;return p&&C?p.distance<=C.distance?p:C:p||C||null}}const Wo=new pe,zt=new Qe,Ht=new Qe,so=new ce,Ks=new be,Vo=new be;function Lp(o,e,t,n){ne.setBuffer(o._roots[e]);const i=xn(0,o,t,n);return ne.clearBuffer(),i}function xn(o,e,t,n,i=null){const{float32Array:r,uint16Array:s,uint32Array:a}=ne;let l=o*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),Ks.set(t.boundingBox.min,t.boundingBox.max,n),i=Ks),ge(l,s)){const u=e.geometry,d=u.index,f=u.attributes.position,h=t.index,y=t.attributes.position,g=Ke(o,a),x=Re(l,s);if(so.copy(n).invert(),t.boundsTree)return se(o,r,Vo),Vo.matrix.copy(so),Vo.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:p=>Vo.intersectsBox(p),intersectsTriangle:p=>{p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let b=g*3,C=(x+g)*3;b<C;b+=3)if(le(Ht,b,d,f),Ht.needsUpdate=!0,p.intersectsTriangle(Ht))return!0;return!1}});for(let m=g*3,p=(x+g)*3;m<p;m+=3){le(zt,m,d,f),zt.a.applyMatrix4(so),zt.b.applyMatrix4(so),zt.c.applyMatrix4(so),zt.needsUpdate=!0;for(let b=0,C=h.count;b<C;b+=3)if(le(Ht,b,h,y),Ht.needsUpdate=!0,zt.intersectsTriangle(Ht))return!0}}else{const u=o+8,d=a[o+6];return se(u,r,Wo),!!(i.intersectsBox(Wo)&&xn(u,e,t,n,i)||(se(d,r,Wo),i.intersectsBox(Wo)&&xn(d,e,t,n,i)))}}const Xo=new ce,Wi=new be,ro=new be,Qp=new I,Jp=new I,Wp=new I,Vp=new I;function Xp(o,e,t,n={},i={},r=0,s=1/0){e.boundingBox||e.computeBoundingBox(),Wi.set(e.boundingBox.min,e.boundingBox.max,t),Wi.needsUpdate=!0;const a=o.geometry,l=a.attributes.position,A=a.index,u=e.attributes.position,d=e.index,f=De.getPrimitive(),h=De.getPrimitive();let y=Qp,g=Jp,x=null,m=null;i&&(x=Wp,m=Vp);let p=1/0,b=null,C=null;return Xo.copy(t).invert(),ro.matrix.copy(Xo),o.shapecast({boundsTraverseOrder:F=>Wi.distanceToBox(F),intersectsBounds:(F,K,B)=>B<p&&B<s?(K&&(ro.min.copy(F.min),ro.max.copy(F.max),ro.needsUpdate=!0),!0):!1,intersectsRange:(F,K)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:S=>ro.distanceToBox(S),intersectsBounds:(S,v,w)=>w<p&&w<s,intersectsRange:(S,v)=>{for(let w=S,D=S+v;w<D;w++){le(h,3*w,d,u),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let M=F,T=F+K;M<T;M++){le(f,3*M,A,l),f.needsUpdate=!0;const E=f.distanceToTriangle(h,y,x);if(E<p&&(g.copy(y),m&&m.copy(x),p=E,b=M,C=w),E<r)return!0}}}});{const B=$t(e);for(let S=0,v=B;S<v;S++){le(h,3*S,d,u),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let w=F,D=F+K;w<D;w++){le(f,3*w,A,l),f.needsUpdate=!0;const M=f.distanceToTriangle(h,y,x);if(M<p&&(g.copy(y),m&&m.copy(x),p=M,b=w,C=S),M<r)return!0}}}}}),De.releasePrimitive(f),De.releasePrimitive(h),p===1/0?null:(n.point?n.point.copy(g):n.point=g.clone(),n.distance=p,n.faceIndex=b,i&&(i.point?i.point.copy(m):i.point=m.clone(),i.point.applyMatrix4(Xo),g.applyMatrix4(Xo),i.distance=g.sub(i.point).length(),i.faceIndex=C),n)}function Yp(o,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=o.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let r,s,a,l,A=0;const u=o._roots;for(let f=0,h=u.length;f<h;f++)r=u[f],s=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),d(0,A),A+=r.byteLength;function d(f,h,y=!1){const g=f*2;if(a[g+15]===Fi){const m=s[f+6],p=a[g+14];let b=1/0,C=1/0,F=1/0,K=-1/0,B=-1/0,S=-1/0;for(let v=m,w=m+p;v<w;v++){const D=3*o.resolveTriangleIndex(v);for(let M=0;M<3;M++){let T=D+M;T=n?n[T]:T;const E=i.getX(T),j=i.getY(T),z=i.getZ(T);E<b&&(b=E),E>K&&(K=E),j<C&&(C=j),j>B&&(B=j),z<F&&(F=z),z>S&&(S=z)}}return l[f+0]!==b||l[f+1]!==C||l[f+2]!==F||l[f+3]!==K||l[f+4]!==B||l[f+5]!==S?(l[f+0]=b,l[f+1]=C,l[f+2]=F,l[f+3]=K,l[f+4]=B,l[f+5]=S,!0):!1}else{const m=f+8,p=s[f+6],b=m+h,C=p+h;let F=y,K=!1,B=!1;e?F||(K=e.has(b),B=e.has(C),F=!K&&!B):(K=!0,B=!0);const S=F||K,v=F||B;let w=!1;S&&(w=d(m,h,F));let D=!1;v&&(D=d(p,h,F));const M=w||D;if(M)for(let T=0;T<3;T++){const E=m+T,j=p+T,z=l[E],H=l[E+3],J=l[j],G=l[j+3];l[f+T]=z<J?z:J,l[f+T+3]=H>G?H:G}return M}}}function Zp(o,e,t,n,i,r,s){ne.setBuffer(o._roots[e]),yn(0,o,t,n,i,r,s),ne.clearBuffer()}function yn(o,e,t,n,i,r,s){const{float32Array:a,uint16Array:l,uint32Array:A}=ne,u=o*2;if(ge(u,l)){const f=Ke(o,A),h=Re(u,l);Pp(e,t,n,f,h,i,r,s)}else{const f=we(o);Ft(f,a,n,r,s)&&yn(f,e,t,n,i,r,s);const h=ve(o,A);Ft(h,a,n,r,s)&&yn(h,e,t,n,i,r,s)}}const qp=["x","y","z"];function _p(o,e,t,n,i,r){ne.setBuffer(o._roots[e]);const s=bn(0,o,t,n,i,r);return ne.clearBuffer(),s}function bn(o,e,t,n,i,r){const{float32Array:s,uint16Array:a,uint32Array:l}=ne;let A=o*2;if(ge(A,a)){const d=Ke(o,l),f=Re(A,a);return zp(e,t,n,d,f,i,r)}else{const d=jn(o,l),f=qp[d],y=n.direction[f]>=0;let g,x;y?(g=we(o),x=ve(o,l)):(g=ve(o,l),x=we(o));const p=Ft(g,s,n,i,r)?bn(g,e,t,n,i,r):null;if(p){const F=p.point[f];if(y?F<=s[x+d]:F>=s[x+d+3])return p}const C=Ft(x,s,n,i,r)?bn(x,e,t,n,i,r):null;return p&&C?p.distance<=C.distance?p:C:p||C||null}}const Yo=new pe,Ot=new Qe,Gt=new Qe,ao=new ce,Bs=new be,Zo=new be;function $p(o,e,t,n){ne.setBuffer(o._roots[e]);const i=Cn(0,o,t,n);return ne.clearBuffer(),i}function Cn(o,e,t,n,i=null){const{float32Array:r,uint16Array:s,uint32Array:a}=ne;let l=o*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),Bs.set(t.boundingBox.min,t.boundingBox.max,n),i=Bs),ge(l,s)){const u=e.geometry,d=u.index,f=u.attributes.position,h=t.index,y=t.attributes.position,g=Ke(o,a),x=Re(l,s);if(ao.copy(n).invert(),t.boundsTree)return se(o,r,Zo),Zo.matrix.copy(ao),Zo.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:p=>Zo.intersectsBox(p),intersectsTriangle:p=>{p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let b=g,C=x+g;b<C;b++)if(le(Gt,3*e.resolveTriangleIndex(b),d,f),Gt.needsUpdate=!0,p.intersectsTriangle(Gt))return!0;return!1}});for(let m=g,p=x+g;m<p;m++){const b=e.resolveTriangleIndex(m);le(Ot,3*b,d,f),Ot.a.applyMatrix4(ao),Ot.b.applyMatrix4(ao),Ot.c.applyMatrix4(ao),Ot.needsUpdate=!0;for(let C=0,F=h.count;C<F;C+=3)if(le(Gt,C,h,y),Gt.needsUpdate=!0,Ot.intersectsTriangle(Gt))return!0}}else{const u=o+8,d=a[o+6];return se(u,r,Yo),!!(i.intersectsBox(Yo)&&Cn(u,e,t,n,i)||(se(d,r,Yo),i.intersectsBox(Yo)&&Cn(d,e,t,n,i)))}}const qo=new ce,Vi=new be,lo=new be,eh=new I,th=new I,oh=new I,ih=new I;function nh(o,e,t,n={},i={},r=0,s=1/0){e.boundingBox||e.computeBoundingBox(),Vi.set(e.boundingBox.min,e.boundingBox.max,t),Vi.needsUpdate=!0;const a=o.geometry,l=a.attributes.position,A=a.index,u=e.attributes.position,d=e.index,f=De.getPrimitive(),h=De.getPrimitive();let y=eh,g=th,x=null,m=null;i&&(x=oh,m=ih);let p=1/0,b=null,C=null;return qo.copy(t).invert(),lo.matrix.copy(qo),o.shapecast({boundsTraverseOrder:F=>Vi.distanceToBox(F),intersectsBounds:(F,K,B)=>B<p&&B<s?(K&&(lo.min.copy(F.min),lo.max.copy(F.max),lo.needsUpdate=!0),!0):!1,intersectsRange:(F,K)=>{if(e.boundsTree){const B=e.boundsTree;return B.shapecast({boundsTraverseOrder:S=>lo.distanceToBox(S),intersectsBounds:(S,v,w)=>w<p&&w<s,intersectsRange:(S,v)=>{for(let w=S,D=S+v;w<D;w++){const M=B.resolveTriangleIndex(w);le(h,3*M,d,u),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let T=F,E=F+K;T<E;T++){const j=o.resolveTriangleIndex(T);le(f,3*j,A,l),f.needsUpdate=!0;const z=f.distanceToTriangle(h,y,x);if(z<p&&(g.copy(y),m&&m.copy(x),p=z,b=T,C=w),z<r)return!0}}}})}else{const B=$t(e);for(let S=0,v=B;S<v;S++){le(h,3*S,d,u),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let w=F,D=F+K;w<D;w++){const M=o.resolveTriangleIndex(w);le(f,3*M,A,l),f.needsUpdate=!0;const T=f.distanceToTriangle(h,y,x);if(T<p&&(g.copy(y),m&&m.copy(x),p=T,b=w,C=S),T<r)return!0}}}}}),De.releasePrimitive(f),De.releasePrimitive(h),p===1/0?null:(n.point?n.point.copy(g):n.point=g.clone(),n.distance=p,n.faceIndex=b,i&&(i.point?i.point.copy(m):i.point=m.clone(),i.point.applyMatrix4(qo),g.applyMatrix4(qo),i.distance=g.sub(i.point).length(),i.faceIndex=C),n)}function sh(){return typeof SharedArrayBuffer<"u"}const Fo=new ne.constructor,hi=new ne.constructor,ut=new zn(()=>new pe),Nt=new pe,Lt=new pe,Xi=new pe,Yi=new pe;let Zi=!1;function rh(o,e,t,n){if(Zi)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Zi=!0;const i=o._roots,r=e._roots;let s,a=0,l=0;const A=new ce().copy(t).invert();for(let u=0,d=i.length;u<d;u++){Fo.setBuffer(i[u]),l=0;const f=ut.getPrimitive();se(0,Fo.float32Array,f),f.applyMatrix4(A);for(let h=0,y=r.length;h<y&&(hi.setBuffer(r[h]),s=He(0,0,t,A,n,a,l,0,0,f),hi.clearBuffer(),l+=r[h].length,!s);h++);if(ut.releasePrimitive(f),Fo.clearBuffer(),a+=i[u].length,s)break}return Zi=!1,s}function He(o,e,t,n,i,r=0,s=0,a=0,l=0,A=null,u=!1){let d,f;u?(d=hi,f=Fo):(d=Fo,f=hi);const h=d.float32Array,y=d.uint32Array,g=d.uint16Array,x=f.float32Array,m=f.uint32Array,p=f.uint16Array,b=o*2,C=e*2,F=ge(b,g),K=ge(C,p);let B=!1;if(K&&F)u?B=i(Ke(e,m),Re(e*2,p),Ke(o,y),Re(o*2,g),l,s+e,a,r+o):B=i(Ke(o,y),Re(o*2,g),Ke(e,m),Re(e*2,p),a,r+o,l,s+e);else if(K){const S=ut.getPrimitive();se(e,x,S),S.applyMatrix4(t);const v=we(o),w=ve(o,y);se(v,h,Nt),se(w,h,Lt);const D=S.intersectsBox(Nt),M=S.intersectsBox(Lt);B=D&&He(e,v,n,t,i,s,r,l,a+1,S,!u)||M&&He(e,w,n,t,i,s,r,l,a+1,S,!u),ut.releasePrimitive(S)}else{const S=we(e),v=ve(e,m);se(S,x,Xi),se(v,x,Yi);const w=A.intersectsBox(Xi),D=A.intersectsBox(Yi);if(w&&D)B=He(o,S,t,n,i,r,s,a,l+1,A,u)||He(o,v,t,n,i,r,s,a,l+1,A,u);else if(w)if(F)B=He(o,S,t,n,i,r,s,a,l+1,A,u);else{const M=ut.getPrimitive();M.copy(Xi).applyMatrix4(t);const T=we(o),E=ve(o,y);se(T,h,Nt),se(E,h,Lt);const j=M.intersectsBox(Nt),z=M.intersectsBox(Lt);B=j&&He(S,T,n,t,i,s,r,l,a+1,M,!u)||z&&He(S,E,n,t,i,s,r,l,a+1,M,!u),ut.releasePrimitive(M)}else if(D)if(F)B=He(o,v,t,n,i,r,s,a,l+1,A,u);else{const M=ut.getPrimitive();M.copy(Yi).applyMatrix4(t);const T=we(o),E=ve(o,y);se(T,h,Nt),se(E,h,Lt);const j=M.intersectsBox(Nt),z=M.intersectsBox(Lt);B=j&&He(v,T,n,t,i,s,r,l,a+1,M,!u)||z&&He(v,E,n,t,i,s,r,l,a+1,M,!u),ut.releasePrimitive(M)}}return B}const _o=new be,Rs=new pe,ah={strategy:Tr,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class Hn{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,i=e._roots,r=e._indirectBuffer,s=n.getIndex();let a;return t.cloneBuffers?a={roots:i.map(l=>l.slice()),index:s?s.array.slice():null,indirectBuffer:r?r.slice():null}:a={roots:i,index:s?s.array:null,indirectBuffer:r},a}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:i,roots:r,indirectBuffer:s}=e,a=new Hn(t,{...n,[Gi]:!0});if(a._roots=r,a._indirectBuffer=s||null,n.setIndex){const l=t.getIndex();if(l===null){const A=new ue(e.index,1,!1);t.setIndex(A)}else l.array!==i&&(l.array.set(i),l.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...ah,[Gi]:!1},t),t.useSharedArrayBuffer&&!sh())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[Gi]||(Kp(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new pe))),this.resolveTriangleIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n}refit(e=null){return(this.indirect?Yp:jp)(this,e)}traverse(e,t=0){const n=this._roots[t],i=new Uint32Array(n),r=new Uint16Array(n);s(0);function s(a,l=0){const A=a*2,u=r[A+15]===Fi;if(u){const d=i[a+6],f=r[A+14];e(l,u,new Float32Array(n,a*4,6),d,f)}else{const d=a+xt/4,f=i[a+6],h=i[a+7];e(l,u,new Float32Array(n,a*4,6),h)||(s(d,l+1),s(f,l+1))}}}raycast(e,t=ci,n=0,i=1/0){const r=this._roots,s=this.geometry,a=[],l=t.isMaterial,A=Array.isArray(t),u=s.groups,d=l?t.side:t,f=this.indirect?Zp:Op;for(let h=0,y=r.length;h<y;h++){const g=A?t[u[h].materialIndex].side:d,x=a.length;if(f(this,h,g,e,a,n,i),A){const m=u[h].materialIndex;for(let p=x,b=a.length;p<b;p++)a[p].face.materialIndex=m}}return a}raycastFirst(e,t=ci,n=0,i=1/0){const r=this._roots,s=this.geometry,a=t.isMaterial,l=Array.isArray(t);let A=null;const u=s.groups,d=a?t.side:t,f=this.indirect?_p:Np;for(let h=0,y=r.length;h<y;h++){const g=l?t[u[h].materialIndex].side:d,x=f(this,h,g,e,n,i);x!=null&&(A==null||x.distance<A.distance)&&(A=x,l&&(x.face.materialIndex=u[h].materialIndex))}return A}intersectsGeometry(e,t){let n=!1;const i=this._roots,r=this.indirect?$p:Lp;for(let s=0,a=i.length;s<a&&(n=r(this,s,e,t),!n);s++);return n}shapecast(e){const t=De.getPrimitive(),n=this.indirect?Hp:kp;let{boundsTraverseOrder:i,intersectsBounds:r,intersectsRange:s,intersectsTriangle:a}=e;if(s&&a){const d=s;s=(f,h,y,g,x)=>d(f,h,y,g,x)?!0:n(f,h,this,a,y,g,t)}else s||(a?s=(d,f,h,y)=>n(d,f,this,a,h,y,t):s=(d,f,h)=>h);let l=!1,A=0;const u=this._roots;for(let d=0,f=u.length;d<f;d++){const h=u[d];if(l=wp(this,d,r,s,i,A),l)break;A+=h.byteLength}return De.releasePrimitive(t),l}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:r}=n;const s=De.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,A=this.indirect?y=>{const g=this.resolveTriangleIndex(y);le(s,g*3,a,l)}:y=>{le(s,y*3,a,l)},u=De.getPrimitive(),d=e.geometry.index,f=e.geometry.attributes.position,h=e.indirect?y=>{const g=e.resolveTriangleIndex(y);le(u,g*3,d,f)}:y=>{le(u,y*3,d,f)};if(r){const y=(g,x,m,p,b,C,F,K)=>{for(let B=m,S=m+p;B<S;B++){h(B),u.a.applyMatrix4(t),u.b.applyMatrix4(t),u.c.applyMatrix4(t),u.needsUpdate=!0;for(let v=g,w=g+x;v<w;v++)if(A(v),s.needsUpdate=!0,r(s,u,v,B,b,C,F,K))return!0}return!1};if(i){const g=i;i=function(x,m,p,b,C,F,K,B){return g(x,m,p,b,C,F,K,B)?!0:y(x,m,p,b,C,F,K,B)}}else i=y}return rh(this,e,t,i)}intersectsBox(e,t){return _o.set(e.min,e.max,t),_o.needsUpdate=!0,this.shapecast({intersectsBounds:n=>_o.intersectsBox(n),intersectsTriangle:n=>_o.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},r=0,s=1/0){return(this.indirect?nh:Xp)(this,e,t,n,i,r,s)}closestPointToPoint(e,t={},n=0,i=1/0){return Dp(this,e,t,n,i)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{se(0,new Float32Array(n),Rs),e.union(Rs)}),e}}function lh(o){switch(o){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function ch(o){switch(o){case 1:return Xt;case 2:return xr;case 3:return de;case 4:return de}}function vs(o){switch(o){case 1:return Md;case 2:return gr;case 3:return cn;case 4:return cn}}class Gr extends Ee{constructor(){super(),this.minFilter=Ae,this.magFilter=Ae,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){const t=this.overrideItemSize,n=e.itemSize,i=e.count;if(t!==null){if(n*i%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=i*n/t}const r=e.itemSize,s=e.count,a=e.normalized,l=e.array.constructor,A=l.BYTES_PER_ELEMENT;let u=this._forcedType,d=r;if(u===null)switch(l){case Float32Array:u=ye;break;case Uint8Array:case Uint16Array:case Uint32Array:u=xo;break;case Int8Array:case Int16Array:case Int32Array:u=Di;break}let f,h,y,g,x=lh(r);switch(u){case ye:y=1,h=ch(r),a&&A===1?(g=l,x+="8",l===Uint8Array?f=ln:(f=ss,x+="_SNORM")):(g=Float32Array,x+="32F",f=ye);break;case Di:x+=A*8+"I",y=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,h=vs(r),A===1?(g=Int8Array,f=ss):A===2?(g=Int16Array,f=Sd):(g=Int32Array,f=Di);break;case xo:x+=A*8+"UI",y=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,h=vs(r),A===1?(g=Uint8Array,f=ln):A===2?(g=Uint16Array,f=vd):(g=Uint32Array,f=xo);break}d===3&&(h===de||h===cn)&&(d=4);const m=Math.ceil(Math.sqrt(s))||1,p=d*m*m,b=new g(p),C=e.normalized;e.normalized=!1;for(let F=0;F<s;F++){const K=d*F;b[K]=e.getX(F)/y,r>=2&&(b[K+1]=e.getY(F)/y),r>=3&&(b[K+2]=e.getZ(F)/y,d===4&&(b[K+3]=1)),r>=4&&(b[K+3]=e.getW(F)/y)}e.normalized=C,this.internalFormat=x,this.format=h,this.type=f,this.image.width=m,this.image.height=m,this.image.data=b,this.needsUpdate=!0,this.dispose(),e.itemSize=n,e.count=i}}class Nr extends Gr{constructor(){super(),this._forcedType=xo}}class Lr extends Gr{constructor(){super(),this._forcedType=ye}}class uh{constructor(){this.index=new Nr,this.position=new Lr,this.bvhBounds=new Ee,this.bvhContents=new Ee,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){const{geometry:t}=e;if(dh(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){const n=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{const i=jr(kr(t));this._cachedIndexAttr=new ue(i,1,!1)}Ah(t,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){const{index:e,position:t,bvhBounds:n,bvhContents:i}=this;e&&e.dispose(),t&&t.dispose(),n&&n.dispose(),i&&i.dispose()}}function Ah(o,e,t){const n=t.array,i=o.index?o.index.array:null;for(let r=0,s=e.length;r<s;r++){const a=3*r,l=3*e[r];for(let A=0;A<3;A++)n[a+A]=i?i[l+A]:l+A}}function dh(o,e,t){const n=o._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const i=n[0],r=new Uint16Array(i),s=new Uint32Array(i),a=new Float32Array(i),l=i.byteLength/xt,A=2*Math.ceil(Math.sqrt(l/2)),u=new Float32Array(4*A*A),d=Math.ceil(Math.sqrt(l)),f=new Uint32Array(2*d*d);for(let h=0;h<l;h++){const y=h*xt/4,g=y*2,x=y;for(let m=0;m<3;m++)u[8*h+0+m]=a[x+0+m],u[8*h+4+m]=a[x+3+m];if(ge(g,r)){const m=Re(g,r),p=Ke(y,s),b=4294901760|m;f[h*2+0]=b,f[h*2+1]=p}else{const m=4*ve(y,s)/xt,p=jn(y,s);f[h*2+0]=p,f[h*2+1]=m}}e.image.data=u,e.image.width=A,e.image.height=A,e.format=de,e.type=ye,e.internalFormat="RGBA32F",e.minFilter=Ae,e.magFilter=Ae,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=f,t.image.width=d,t.image.height=d,t.format=gr,t.type=xo,t.internalFormat="RG32UI",t.minFilter=Ae,t.magFilter=Ae,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}const vt=new I,St=new I,Mt=new I,Ss=new Yt,$o=new I,qi=new I,Ms=new Yt,ws=new Yt,ei=new ce,Ds=new ce;function co(o,e){if(!o&&!e)return;const t=o.count===e.count,n=o.normalized===e.normalized,i=o.array.constructor===e.array.constructor,r=o.itemSize===e.itemSize;if(!t||!n||!i||!r)throw new Error}function po(o,e=null){const t=o.array.constructor,n=o.normalized,i=o.itemSize,r=e===null?o.count:e;return new ue(new t(i*r),i,n)}function Qr(o,e,t=0){if(o.isInterleavedBufferAttribute){const n=o.itemSize;for(let i=0,r=o.count;i<r;i++){const s=i+t;e.setX(s,o.getX(i)),n>=2&&e.setY(s,o.getY(i)),n>=3&&e.setZ(s,o.getZ(i)),n>=4&&e.setW(s,o.getW(i))}}else{const n=e.array,i=n.constructor,r=n.BYTES_PER_ELEMENT*o.itemSize*t;new i(n.buffer,r,o.array.length).set(o.array)}}function fh(o,e,t){const n=o.elements,i=e.elements;for(let r=0,s=i.length;r<s;r++)n[r]+=i[r]*t}function Us(o,e,t){const n=o.skeleton,i=o.geometry,r=n.bones,s=n.boneInverses;Ms.fromBufferAttribute(i.attributes.skinIndex,e),ws.fromBufferAttribute(i.attributes.skinWeight,e),ei.elements.fill(0);for(let a=0;a<4;a++){const l=ws.getComponent(a);if(l!==0){const A=Ms.getComponent(a);Ds.multiplyMatrices(r[A].matrixWorld,s[A]),fh(ei,Ds,l)}}return ei.multiply(o.bindMatrix).premultiply(o.bindMatrixInverse),t.transformDirection(ei),t}function _i(o,e,t,n,i){$o.set(0,0,0);for(let r=0,s=o.length;r<s;r++){const a=e[r],l=o[r];a!==0&&(qi.fromBufferAttribute(l,n),t?$o.addScaledVector(qi,a):$o.addScaledVector(qi.sub(i),a))}i.add($o)}function ph(o,e={useGroups:!1,updateIndex:!1,skipAttributes:[]},t=new Be){const n=o[0].index!==null,{useGroups:i=!1,updateIndex:r=!1,skipAttributes:s=[]}=e,a=new Set(Object.keys(o[0].attributes)),l={};let A=0;t.clearGroups();for(let u=0;u<o.length;++u){const d=o[u];let f=0;if(n!==(d.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const h in d.attributes){if(!a.has(h))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.');l[h]===void 0&&(l[h]=[]),l[h].push(d.attributes[h]),f++}if(f!==a.size)throw new Error("StaticGeometryGenerator: Make sure all geometries have the same number of attributes.");if(i){let h;if(n)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else throw new Error("StaticGeometryGenerator: The geometry must have either an index or a position attribute");t.addGroup(A,h,u),A+=h}}if(n){let u=!1;if(!t.index){let d=0;for(let f=0;f<o.length;++f)d+=o[f].index.count;t.setIndex(new ue(new Uint32Array(d),1,!1)),u=!0}if(r||u){const d=t.index;let f=0,h=0;for(let y=0;y<o.length;++y){const g=o[y],x=g.index;if(s[y]!==!0)for(let m=0;m<x.count;++m)d.setX(f,x.getX(m)+h),f++;h+=g.attributes.position.count}}}for(const u in l){const d=l[u];if(!(u in t.attributes)){let y=0;for(const g in d)y+=d[g].count;t.setAttribute(u,po(l[u][0],y))}const f=t.attributes[u];let h=0;for(let y=0,g=d.length;y<g;y++){const x=d[y];s[y]!==!0&&Qr(x,f,h),h+=x.count}}return t}function hh(o,e){if(o===null||e===null)return o===e;if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function mh(o){const{index:e,attributes:t}=o;if(e)for(let n=0,i=e.count;n<i;n+=3){const r=e.getX(n),s=e.getX(n+2);e.setX(n,s),e.setX(n+2,r)}else for(const n in t){const i=t[n],r=i.itemSize;for(let s=0,a=i.count;s<a;s+=3)for(let l=0;l<r;l++){const A=i.getComponent(s,l),u=i.getComponent(s+2,l);i.setComponent(s,l,u),i.setComponent(s+2,l,A)}}return o}class gh{constructor(e){this.matrixWorld=new ce,this.geometryHash=null,this.boneMatrices=null,this.primitiveCount=-1,this.mesh=e,this.update()}update(){const e=this.mesh,t=e.geometry,n=e.skeleton,i=(t.index?t.index.count:t.attributes.position.count)/3;if(this.matrixWorld.copy(e.matrixWorld),this.geometryHash=t.attributes.position.version,this.primitiveCount=i,n){n.boneTexture||n.computeBoneTexture(),n.update();const r=n.boneMatrices;!this.boneMatrices||this.boneMatrices.length!==r.length?this.boneMatrices=r.slice():this.boneMatrices.set(r)}else this.boneMatrices=null}didChange(){const e=this.mesh,t=e.geometry,n=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===t.attributes.position.version&&hh(e.skeleton&&e.skeleton.boneMatrices||null,this.boneMatrices)&&this.primitiveCount===n)}}class Es{constructor(e){Array.isArray(e)||(e=[e]);const t=[];e.forEach(n=>{n.traverseVisible(i=>{i.isMesh&&t.push(i)})}),this.meshes=t,this.useGroups=!0,this.applyWorldTransforms=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Array(t.length).fill().map(()=>new Be),this._diffMap=new WeakMap}getMaterials(){const e=[];return this.meshes.forEach(t=>{Array.isArray(t.material)?e.push(...t.material):e.push(t.material)}),e}generate(e=new Be){let t=[];const{meshes:n,useGroups:i,_intermediateGeometry:r,_diffMap:s}=this;for(let a=0,l=n.length;a<l;a++){const A=n[a],u=r[a],d=s.get(A);!d||d.didChange(A)?(this._convertToStaticGeometry(A,u),t.push(!1),d?d.update():s.set(A,new gh(A))):t.push(!0)}if(r.length===0){e.setIndex(null);const a=e.attributes;for(const l in a)e.deleteAttribute(l);for(const l in this.attributes)e.setAttribute(this.attributes[l],new ue(new Float32Array(0),4,!1))}else ph(r,{useGroups:i,skipAttributes:t},e);for(const a in e.attributes)e.attributes[a].needsUpdate=!0;return e}_convertToStaticGeometry(e,t=new Be){const n=e.geometry,i=this.applyWorldTransforms,r=this.attributes.includes("normal"),s=this.attributes.includes("tangent"),a=n.attributes,l=t.attributes;!t.index&&n.index&&(t.index=n.index.clone()),l.position||t.setAttribute("position",po(a.position)),r&&!l.normal&&a.normal&&t.setAttribute("normal",po(a.normal)),s&&!l.tangent&&a.tangent&&t.setAttribute("tangent",po(a.tangent)),co(n.index,t.index),co(a.position,l.position),r&&co(a.normal,l.normal),s&&co(a.tangent,l.tangent);const A=a.position,u=r?a.normal:null,d=s?a.tangent:null,f=n.morphAttributes.position,h=n.morphAttributes.normal,y=n.morphAttributes.tangent,g=n.morphTargetsRelative,x=e.morphTargetInfluences,m=new wd;m.getNormalMatrix(e.matrixWorld),n.index&&t.index.array.set(n.index.array);for(let p=0,b=a.position.count;p<b;p++)vt.fromBufferAttribute(A,p),u&&St.fromBufferAttribute(u,p),d&&(Ss.fromBufferAttribute(d,p),Mt.fromBufferAttribute(d,p)),x&&(f&&_i(f,x,g,p,vt),h&&_i(h,x,g,p,St),y&&_i(y,x,g,p,Mt)),e.isSkinnedMesh&&(e.applyBoneTransform(p,vt),u&&Us(e,p,St),d&&Us(e,p,Mt)),i&&vt.applyMatrix4(e.matrixWorld),l.position.setXYZ(p,vt.x,vt.y,vt.z),u&&(i&&St.applyNormalMatrix(m),l.normal.setXYZ(p,St.x,St.y,St.z)),d&&(i&&Mt.transformDirection(e.matrixWorld),l.tangent.setXYZW(p,Mt.x,Mt.y,Mt.z,Ss.w));for(const p in this.attributes){const b=this.attributes[p];b==="position"||b==="tangent"||b==="normal"||!(b in a)||(l[b]||t.setAttribute(b,po(a[b])),co(a[b],l[b]),Qr(a[b],l[b]))}return e.matrixWorld.determinant()<0&&mh(t),t}}const xh=`

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
`,yh=`

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
`,bh=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`;function Ch(o,e,t=new I){const n=Math.PI*(o-.5),i=2*Math.PI*(e-.5);return t.x=Math.cos(i),t.y=Math.sin(n),t.z=Math.sin(i),t}const Ts=R.forwardRef(({inclination:o=.6,azimuth:e=.1,distance:t=1e3,mieCoefficient:n=.005,mieDirectionalG:i=.8,rayleigh:r=.5,turbidity:s=10,sunPosition:a=Ch(o,e),...l},A)=>{const u=R.useMemo(()=>new I().setScalar(t),[t]),[d]=R.useState(()=>new hf);return R.createElement("primitive",ui({object:d,ref:A,"material-uniforms-mieCoefficient-value":n,"material-uniforms-mieDirectionalG-value":i,"material-uniforms-rayleigh-value":r,"material-uniforms-sunPosition-value":a,"material-uniforms-turbidity-value":s,scale:u},l))});class Fh extends Ro{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:`
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
	      #include <${Dr>=154?"colorspace_fragment":"encodings_fragment"}>
      }`})}}const Kh=o=>new I().setFromSpherical(new Ud(o,Math.acos(1-Math.random()*2),Math.random()*2*Math.PI)),Bh=R.forwardRef(({radius:o=100,depth:e=50,count:t=5e3,saturation:n=0,factor:i=4,fade:r=!1,speed:s=1},a)=>{const l=R.useRef(),[A,u,d]=R.useMemo(()=>{const h=[],y=[],g=Array.from({length:t},()=>(.5+.5*Math.random())*i),x=new oe;let m=o+e;const p=e/t;for(let b=0;b<t;b++)m-=p*Math.random(),h.push(...Kh(m).toArray()),x.setHSL(b/t,n,.9),y.push(x.r,x.g,x.b);return[new Float32Array(h),new Float32Array(y),new Float32Array(g)]},[t,e,i,o,n]);So(h=>l.current&&(l.current.uniforms.time.value=h.clock.elapsedTime*s));const[f]=R.useState(()=>new Fh);return R.createElement("points",{ref:a},R.createElement("bufferGeometry",null,R.createElement("bufferAttribute",{attach:"attributes-position",args:[A,3]}),R.createElement("bufferAttribute",{attach:"attributes-color",args:[u,3]}),R.createElement("bufferAttribute",{attach:"attributes-size",args:[d,1]})),R.createElement("primitive",{ref:l,object:f,attach:"material",blending:Dd,"uniforms-fade-value":r,depthWrite:!1,transparent:!0,vertexColors:!0}))});class On extends Ro{constructor(e){super(e);for(const t in this.uniforms)Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(n){this.uniforms[t].value=n}})}setDefine(e,t=void 0){t==null?e in this.defines&&(delete this.defines[e],this.needsUpdate=!0):this.defines[e]!==t&&(this.defines[e]=t,this.needsUpdate=!0)}}class Rh extends On{constructor(e){super({blending:wn,uniforms:{target1:{value:null},target2:{value:null},opacity:{value:1}},vertexShader:`

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

				}`}),this.setValues(e)}}function ti(o=1){let e="uint";return o>1&&(e="uvec"+o),`
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
	`}function oi(o=1){let e="uint",t="float",n="",i=".r",r="1u";return o>1&&(e="uvec"+o,t="vec"+o,n=o+"",o===2?(i=".rg",r="uvec2( 1u, 2u )"):o===3?(i=".rgb",r="uvec3( 1u, 2u, 3u )"):(i="",r="uvec4( 1u, 2u, 3u, 4u )")),`

		${t} sobol${n}( int effect ) {

			uint seed = sobolGetSeed( sobolBounceIndex, uint( effect ) );
			uint index = sobolPathIndex;

			uint shuffle_seed = sobolHashCombine( seed, 0u );
			uint shuffled_index = nestedUniformScrambleBase2( sobolReverseBits( index ), shuffle_seed );
			${t} sobol_pt = sobolGetTexturePoint( shuffled_index )${i};
			${e} result = ${e}( sobol_pt * 16777216.0 );

			${e} seed2 = sobolHashCombine( seed, ${r} );
			result = nestedUniformScrambleBase2( result, seed2 );

			return SOBOL_FACTOR * ${t}( result >> 8 );

		}
	`}const Jr=`

	// Utils
	const float SOBOL_FACTOR = 1.0 / 16777216.0;
	const uint SOBOL_MAX_POINTS = 256u * 256u;

	${ti(1)}
	${ti(2)}
	${ti(3)}
	${ti(4)}

	uint sobolHash( uint x ) {

		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}

`,vh=`

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

`,Sh=`

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

	${oi(1)}
	${oi(2)}
	${oi(3)}
	${oi(4)}

`;class Mh extends On{constructor(){super({blending:wn,uniforms:{resolution:{value:new Le}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`

				${Jr}
				${vh}

				varying vec2 vUv;
				uniform vec2 resolution;
				void main() {

					uint index = uint( gl_FragCoord.y ) * uint( resolution.x ) + uint( gl_FragCoord.x );
					gl_FragColor = generateSobolPoint( index );

				}
			`})}}class wh{generate(e,t=256){const n=new si(t,t,{type:ye,format:de,minFilter:Ae,magFilter:Ae,generateMipmaps:!1}),i=e.getRenderTarget();e.setRenderTarget(n);const r=new Zt(new Mh);return r.material.resolution.set(t,t),r.render(e),e.setRenderTarget(i),r.dispose(),n}}function*Dh(){const{_renderer:o,_fsQuad:e,_blendQuad:t,_primaryTarget:n,_blendTargets:i,_sobolTarget:r,_subframe:s,alpha:a,camera:l,material:A}=this,u=new Yt,d=new Yt,f=t.material;let[h,y]=i;for(;;){a?(f.opacity=this._opacityFactor/(this._samples+1),A.blending=wn,A.opacity=1):(A.opacity=this._opacityFactor/(this._samples+1),A.blending=Ed);const[g,x,m,p]=s,b=n.width,C=n.height;A.resolution.set(b*m,C*p),A.sobolTexture=r.texture,A.stratifiedTexture.init(20,A.bounces+A.transmissiveBounces+5),A.stratifiedTexture.next(),A.seed++;const F=this.tiles.x||1,K=this.tiles.y||1,B=F*K,S=Math.ceil(b*m),v=Math.ceil(C*p),w=Math.floor(g*b),D=Math.floor(x*C),M=Math.ceil(S/F),T=Math.ceil(v/K);for(let E=0;E<K;E++)for(let j=0;j<F;j++){A.cameraWorldMatrix.copy(l.matrixWorld),A.invProjectionMatrix.copy(l.projectionMatrixInverse);let z=0;l.projectionMatrix.elements[15]>0&&(z=1),l.isEquirectCamera&&(z=2),A.setDefine("CAMERA_TYPE",z);const H=o.getRenderTarget(),J=o.autoClear,G=o.getScissorTest();o.getScissor(u),o.getViewport(d);let O=j,P=E;if(!this.stableTiles){const V=this._currentTile%(F*K);O=V%F,P=~~(V/F),this._currentTile=V+1}const N=K-P-1;n.scissor.set(w+O*M,D+N*T,Math.min(M,S-O*M),Math.min(T,v-N*T)),n.viewport.set(w,D,S,v),o.setRenderTarget(n),o.setScissorTest(!0),o.autoClear=!1,e.render(o),o.setViewport(d),o.setScissor(u),o.setScissorTest(G),o.setRenderTarget(H),o.autoClear=J,a&&(f.target1=h.texture,f.target2=n.texture,o.setRenderTarget(y),t.render(o),o.setRenderTarget(H)),this._samples+=1/B,j===F-1&&E===K-1&&(this._samples=Math.round(this._samples)),yield}[h,y]=[y,h]}}const Is=new oe;class Uh{get material(){return this._fsQuad.material}set material(e){this._fsQuad.material=e}get target(){return this._alpha?this._blendTargets[1]:this._primaryTarget}set alpha(e){this._alpha!==e&&(e||(this._blendTargets[0].dispose(),this._blendTargets[1].dispose()),this._alpha=e,this.reset())}get alpha(){return this._alpha}get samples(){return this._samples}constructor(e){this.camera=null,this.tiles=new Le(1,1),this.stableNoise=!1,this.stableTiles=!0,this._samples=0,this._subframe=new Yt(0,0,1,1),this._opacityFactor=1,this._renderer=e,this._alpha=!1,this._fsQuad=new Zt(null),this._blendQuad=new Zt(new Rh),this._task=null,this._currentTile=0,this._sobolTarget=new wh().generate(e);const t=e.extensions.get("OES_texture_float_linear");this._primaryTarget=new si(1,1,{format:de,type:t?ye:Fe}),this._blendTargets=[new si(1,1,{format:de,type:t?ye:Fe}),new si(1,1,{format:de,type:t?ye:Fe})]}setSize(e,t){e=Math.ceil(e),t=Math.ceil(t),!(this._primaryTarget.width===e&&this._primaryTarget.height===t)&&(this._primaryTarget.setSize(e,t),this._blendTargets[0].setSize(e,t),this._blendTargets[1].setSize(e,t),this.reset())}dispose(){this._primaryTarget.dispose(),this._blendTargets[0].dispose(),this._blendTargets[1].dispose(),this._sobolTarget.dispose(),this._fsQuad.dispose(),this._blendQuad.dispose(),this._task=null}reset(){const{_renderer:e,_primaryTarget:t,_blendTargets:n}=this,i=e.getRenderTarget(),r=e.getClearAlpha();e.getClearColor(Is),e.setRenderTarget(t),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(n[0]),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(n[1]),e.setClearColor(0,0),e.clearColor(),e.setClearColor(Is,r),e.setRenderTarget(i),this._samples=0,this._task=null,this.stableNoise&&(this.material.seed=0)}update(){this._task||(this._task=Dh.call(this)),this._task.next()}}function Eh(o,e,t){const n=o.index,r=o.attributes.position.count,s=n?n.count:r;let a=o.groups;a.length===0&&(a=[{count:s,start:0,materialIndex:0}]);let l;t.length<=255?l=new Uint8Array(r):l=new Uint16Array(r);for(let A=0;A<a.length;A++){const u=a[A],d=u.start,f=u.count,h=Math.min(f,s-d),y=Array.isArray(e)?e[u.materialIndex]:e,g=t.indexOf(y);for(let x=0;x<h;x++){let m=d+x;n&&(m=n.getX(m)),l[m]=g}}return new ue(l,1,!1)}function Th(o,e){const{attributes:t=[],normalMapRequired:n=!1}=e;if(!o.attributes.normal&&t&&t.includes("normal")&&o.computeVertexNormals(),!o.attributes.uv&&t&&t.includes("uv")){const i=o.attributes.position.count;o.setAttribute("uv",new ue(new Float32Array(i*2),2,!1))}if(!o.attributes.uv2&&t&&t.includes("uv2")){const i=o.attributes.position.count;o.setAttribute("uv2",new ue(new Float32Array(i*2),2,!1))}if(!o.attributes.tangent&&t&&t.includes("tangent"))if(n)o.index===null&&(o=Td(o)),o.computeTangents();else{const i=o.attributes.position.count;o.setAttribute("tangent",new ue(new Float32Array(i*4),4,!1))}if(!o.attributes.color&&t&&t.includes("color")){const i=o.attributes.position.count,r=new Float32Array(i*4);r.fill(1),o.setAttribute("color",new ue(r,4))}if(!o.index){const i=o.attributes.position.count,r=new Array(i);for(let s=0;s<i;s++)r[s]=s;o.setIndex(r)}}const Ih=new Xe;function kh(){const o=new Be;return o.setAttribute("position",new ue(new Float32Array(9),3)),new W(o,Ih)}class jh{get initialized(){return!!this.bvh}constructor(e){Array.isArray(e)||(e=[e]);const t=[...e];t.length===0&&t.push(kh()),this.bvhOptions={},this.attributes=["position","normal","tangent","color","uv","uv2"],this.objects=t,this.bvh=null,this.geometry=new Be,this.materials=null,this.textures=null,this.lights=[],this.staticGeometryGenerator=new Es(this.objects)}reset(){this.bvh=null,this.geometry.dispose(),this.geometry=new Be,this.materials=null,this.textures=null,this.lights=[],this.staticGeometryGenerator=new Es(this.objects)}dispose(){}prepScene(){if(this.bvh!==null)return;const{objects:e,staticGeometryGenerator:t,geometry:n,lights:i,attributes:r}=this;for(let A=0,u=e.length;A<u;A++)e[A].traverse(d=>{if(d.isMesh){const f=!!d.material.normalMap;Th(d.geometry,{attributes:r,normalMapRequired:f})}else(d.isRectAreaLight||d.isSpotLight||d.isPointLight||d.isDirectionalLight)&&i.push(d)});const s=new Set,a=t.getMaterials();a.forEach(A=>{for(const u in A){const d=A[u];d&&d.isTexture&&s.add(d)}}),t.attributes=r,t.generate(n);const l=Eh(n,a,a);n.setAttribute("materialIndex",l),n.clearGroups(),this.materials=a,this.textures=Array.from(s)}generate(){const{objects:e,staticGeometryGenerator:t,geometry:n,bvhOptions:i}=this;if(this.bvh===null)return this.prepScene(),this.bvh=new Hn(n,{strategy:Ir,maxLeafTris:1,...i}),{lights:this.lights,bvh:this.bvh,materials:this.materials,textures:this.textures,objects:e};{const{bvh:r}=this;return t.generate(n),r.refit(),{lights:this.lights,bvh:this.bvh,materials:this.materials,textures:this.textures,objects:e}}}}class Ph extends Sn{set bokehSize(e){this.fStop=this.getFocalLength()/e}get bokehSize(){return this.getFocalLength()/this.fStop}constructor(...e){super(...e),this.fStop=1.4,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=25,this.anamorphicRatio=1}copy(e,t){return super.copy(e,t),this.fStop=e.fStop,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio,this}}function Fn(o){return`${o.source.uuid}:${o.colorSpace}`}function Wr(o){const e=new Set,t=[];for(let n=0,i=o.length;n<i;n++){const r=o[n],s=Fn(r);e.has(s)||(e.add(s),t.push(r))}return t}const Vr=45,Qt=Vr*4,ks=14*4+0,js=14*4+1;class zh{constructor(){this._features={}}isUsed(e){return e in this._features}setUsed(e,t=!0){t===!1?delete this._features[e]:this._features[e]=!0}reset(){this._features={}}}class Hh extends Ee{constructor(){super(new Float32Array(4),1,1),this.format=de,this.type=ye,this.wrapS=Ct,this.wrapT=Ct,this.minFilter=Ae,this.magFilter=Ae,this.generateMipmaps=!1,this.threeCompatibilityTransforms=!1,this.features=new zh}setCastShadow(e,t){const n=this.image.data,i=e*Qt+js;n[i]=t?0:1}getCastShadow(e){const t=this.image.data,n=e*Qt+js;return!t[n]}setMatte(e,t){const n=this.image.data,i=e*Qt+ks;n[i]=t?1:0}getMatte(e){const t=this.image.data,n=e*Qt+ks;return!!t[n]}updateFrom(e,t){function n(x,m,p=-1){if(m in x&&x[m]){const b=Fn(x[m]);return y[b]}else return p}function i(x,m,p){return m in x?x[m]:p}function r(x){return x.map||x.specularMap||x.displacementMap||x.normalMap||x.bumpMap||x.roughnessMap||x.metalnessMap||x.alphaMap||x.emissiveMap||x.clearcoatMap||x.clearcoatNormalMap||x.clearcoatRoughnessMap||x.iridescenceMap||x.iridescenceThicknessMap||x.specularIntensityMap||x.specularColorMap||x.transmissionMap||x.thicknessMap||x.sheenColorMap||x.sheenRoughnessMap||null}function s(x,m,p,b){let C;if(u?C=r(x):C=x[m]&&x[m].isTexture?x[m]:null,C){const F=C.matrix.elements;let K=0;p[b+K++]=F[0],p[b+K++]=F[3],p[b+K++]=F[6],K++,p[b+K++]=F[1],p[b+K++]=F[4],p[b+K++]=F[7],K++}return 8}let a=0;const l=e.length*Vr,A=Math.ceil(Math.sqrt(l))||1,{threeCompatibilityTransforms:u,image:d,features:f}=this,h=Wr(t),y={};for(let x=0,m=h.length;x<m;x++)y[Fn(h[x])]=x;d.width!==A&&(this.dispose(),d.data=new Float32Array(A*A*4),d.width=A,d.height=A);const g=d.data;f.reset();for(let x=0,m=e.length;x<m;x++){const p=e[x];if(p.isFogVolumeMaterial){f.setUsed("FOG");for(let F=0;F<Qt;F++)g[a+F]=0;g[a+0*4+0]=p.color.r,g[a+0*4+1]=p.color.g,g[a+0*4+2]=p.color.b,g[a+2*4+3]=i(p,"emissiveIntensity",0),g[a+3*4+0]=p.emissive.r,g[a+3*4+1]=p.emissive.g,g[a+3*4+2]=p.emissive.b,g[a+13*4+1]=p.density,g[a+13*4+3]=0,g[a+14*4+2]=4,a+=Qt;continue}g[a++]=p.color.r,g[a++]=p.color.g,g[a++]=p.color.b,g[a++]=n(p,"map"),g[a++]=i(p,"metalness",0),g[a++]=n(p,"metalnessMap"),g[a++]=i(p,"roughness",0),g[a++]=n(p,"roughnessMap"),g[a++]=i(p,"ior",1.5),g[a++]=i(p,"transmission",0),g[a++]=n(p,"transmissionMap"),g[a++]=i(p,"emissiveIntensity",0),"emissive"in p?(g[a++]=p.emissive.r,g[a++]=p.emissive.g,g[a++]=p.emissive.b):(g[a++]=0,g[a++]=0,g[a++]=0),g[a++]=n(p,"emissiveMap"),g[a++]=n(p,"normalMap"),"normalScale"in p?(g[a++]=p.normalScale.x,g[a++]=p.normalScale.y):(g[a++]=1,g[a++]=1),g[a++]=i(p,"clearcoat",0),g[a++]=n(p,"clearcoatMap"),g[a++]=i(p,"clearcoatRoughness",0),g[a++]=n(p,"clearcoatRoughnessMap"),g[a++]=n(p,"clearcoatNormalMap"),"clearcoatNormalScale"in p?(g[a++]=p.clearcoatNormalScale.x,g[a++]=p.clearcoatNormalScale.y):(g[a++]=1,g[a++]=1),a++,g[a++]=i(p,"sheen",0),"sheenColor"in p?(g[a++]=p.sheenColor.r,g[a++]=p.sheenColor.g,g[a++]=p.sheenColor.b):(g[a++]=0,g[a++]=0,g[a++]=0),g[a++]=n(p,"sheenColorMap"),g[a++]=i(p,"sheenRoughness",0),g[a++]=n(p,"sheenRoughnessMap"),g[a++]=n(p,"iridescenceMap"),g[a++]=n(p,"iridescenceThicknessMap"),g[a++]=i(p,"iridescence",0),g[a++]=i(p,"iridescenceIOR",1.3);const b=i(p,"iridescenceThicknessRange",[100,400]);g[a++]=b[0],g[a++]=b[1],"specularColor"in p?(g[a++]=p.specularColor.r,g[a++]=p.specularColor.g,g[a++]=p.specularColor.b):(g[a++]=1,g[a++]=1,g[a++]=1),g[a++]=n(p,"specularColorMap"),g[a++]=i(p,"specularIntensity",1),g[a++]=n(p,"specularIntensityMap");const C=i(p,"thickness",0)===0&&i(p,"attenuationDistance",1/0)===1/0;if(g[a++]=Number(C),a++,"attenuationColor"in p?(g[a++]=p.attenuationColor.r,g[a++]=p.attenuationColor.g,g[a++]=p.attenuationColor.b):(g[a++]=1,g[a++]=1,g[a++]=1),g[a++]=i(p,"attenuationDistance",1/0),g[a++]=n(p,"alphaMap"),g[a++]=p.opacity,g[a++]=p.alphaTest,!C&&p.transmission>0)g[a++]=0;else switch(p.side){case ci:g[a++]=1;break;case xi:g[a++]=-1;break;case _t:g[a++]=0;break}a++,a++,g[a++]=Number(p.vertexColors)|Number(p.flatShading)<<1,g[a++]=Number(p.transparent),a+=s(p,"map",g,a),a+=s(p,"metalnessMap",g,a),a+=s(p,"roughnessMap",g,a),a+=s(p,"transmissionMap",g,a),a+=s(p,"emissiveMap",g,a),a+=s(p,"normalMap",g,a),a+=s(p,"clearcoatMap",g,a),a+=s(p,"clearcoatNormalMap",g,a),a+=s(p,"clearcoatRoughnessMap",g,a),a+=s(p,"sheenColorMap",g,a),a+=s(p,"sheenRoughnessMap",g,a),a+=s(p,"iridescenceMap",g,a),a+=s(p,"iridescenceThicknessMap",g,a),a+=s(p,"specularColorMap",g,a),a+=s(p,"specularIntensityMap",g,a)}this.needsUpdate=!0}}const Ps=new oe;class Oh extends yr{constructor(...e){super(...e);const t=this.texture;t.format=de,t.type=ln,t.minFilter=fe,t.magFilter=fe,t.wrapS=mt,t.wrapT=mt,t.setTextures=(...i)=>{this.setTextures(...i)};const n=new Zt(new Gh);this.fsQuad=n}setTextures(e,t,n,i){const r=Wr(i),s=e.getRenderTarget(),a=e.toneMapping,l=e.getClearAlpha();e.getClearColor(Ps);const A=r.length||1;this.setSize(t,n,A),e.setClearColor(0,0),e.toneMapping=br;const u=this.fsQuad;for(let d=0,f=A;d<f;d++){const h=r[d];h&&(h.matrixAutoUpdate=!1,h.matrix.identity(),u.material.map=h,e.setRenderTarget(this,d),u.render(e),h.updateMatrix(),h.matrixAutoUpdate=!0)}u.material.map=null,e.setClearColor(Ps,l),e.setRenderTarget(s),e.toneMapping=a}dispose(){super.dispose(),this.fsQuad.dispose()}}class Gh extends Ro{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}constructor(){super({uniforms:{map:{value:null}},vertexShader:`
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
			`})}}function Ko(o){const e=new Uint16Array(o.length);for(let t=0,n=o.length;t<n;++t)e[t]=ft.toHalfFloat(o[t]);return e}function zs(o,e,t=0,n=o.length){let i=t,r=t+n-1;for(;i<r;){const s=i+r>>1;o[s]<e?i=s+1:r=s}return i-t}function Nh(o,e,t){return .2126*o+.7152*e+.0722*t}function Lh(o,e=Fe){const t=o.clone();t.source=new Id({...t.image});const{width:n,height:i,data:r}=t.image;let s=r;if(t.type!==e){e===Fe?s=new Uint16Array(r.length):s=new Float32Array(r.length);let a;r instanceof Int8Array||r instanceof Int16Array||r instanceof Int32Array?a=2**(8*r.BYTES_PER_ELEMENT-1)-1:a=2**(8*r.BYTES_PER_ELEMENT)-1;for(let l=0,A=r.length;l<A;l++){let u=r[l];t.type===Fe&&(u=ft.fromHalfFloat(r[l])),t.type!==ye&&t.type!==Fe&&(u/=a),e===Fe&&(s[l]=ft.toHalfFloat(u))}t.image.data=s,t.type=e}if(t.flipY){const a=s;s=s.slice();for(let l=0;l<i;l++)for(let A=0;A<n;A++){const u=i-l-1,d=4*(l*n+A),f=4*(u*n+A);s[f+0]=a[d+0],s[f+1]=a[d+1],s[f+2]=a[d+2],s[f+3]=a[d+3]}t.flipY=!1,t.image.data=s}return t}class Qh{constructor(){const e=new Ee(Ko(new Float32Array([1,1,1,1])),1,1);e.type=Fe,e.format=de,e.minFilter=fe,e.magFilter=fe,e.wrapS=mt,e.wrapT=mt,e.generateMipmaps=!1,e.needsUpdate=!0;const t=new Ee(Ko(new Float32Array([0,1])),1,2);t.type=Fe,t.format=Xt,t.minFilter=fe,t.magFilter=fe,t.generateMipmaps=!1,t.needsUpdate=!0;const n=new Ee(Ko(new Float32Array([0,0,1,1])),2,2);n.type=Fe,n.format=Xt,n.minFilter=fe,n.magFilter=fe,n.generateMipmaps=!1,n.needsUpdate=!0,this.map=e,this.marginalWeights=t,this.conditionalWeights=n,this.totalSum=1}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(e){const t=Lh(e);t.wrapS=mt,t.wrapT=Ct;const{width:n,height:i,data:r}=t.image,s=new Float32Array(n*i),a=new Float32Array(n*i),l=new Float32Array(i),A=new Float32Array(i);let u=0,d=0;for(let x=0;x<i;x++){let m=0;for(let p=0;p<n;p++){const b=x*n+p,C=ft.fromHalfFloat(r[4*b+0]),F=ft.fromHalfFloat(r[4*b+1]),K=ft.fromHalfFloat(r[4*b+2]),B=Nh(C,F,K);m+=B,u+=B,s[b]=B,a[b]=m}if(m!==0)for(let p=x*n,b=x*n+n;p<b;p++)s[p]/=m,a[p]/=m;d+=m,l[x]=m,A[x]=d}if(d!==0)for(let x=0,m=l.length;x<m;x++)l[x]/=d,A[x]/=d;const f=new Uint16Array(i),h=new Uint16Array(n*i);for(let x=0;x<i;x++){const m=(x+1)/i,p=zs(A,m);f[x]=ft.toHalfFloat((p+.5)/i)}for(let x=0;x<i;x++)for(let m=0;m<n;m++){const p=x*n+m,b=(m+1)/n,C=zs(a,b,x*n,n);h[p]=ft.toHalfFloat((C+.5)/n)}this.dispose();const{marginalWeights:y,conditionalWeights:g}=this;y.image={width:i,height:1,data:f},y.needsUpdate=!0,g.image={width:n,height:i,data:h},g.needsUpdate=!0,this.totalSum=u,this.map=t}}class Jh{constructor(){this.bokehSize=0,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=10,this.anamorphicRatio=1}updateFrom(e){e instanceof Ph?(this.bokehSize=e.bokehSize,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio):(this.bokehSize=0,this.apertureRotation=0,this.apertureBlades=0,this.focusDistance=10,this.anamorphicRatio=1)}}const $i=6,Wh=0,Vh=1,Xh=2,Yh=3,Zh=4;class qh{constructor(){const e=new Ee(new Float32Array(4),1,1);e.format=de,e.type=ye,e.wrapS=Ct,e.wrapT=Ct,e.generateMipmaps=!1,e.minFilter=Ae,e.magFilter=Ae,this.tex=e,this.count=0}updateFrom(e,t=[]){const n=this.tex,i=Math.max(e.length*$i,1),r=Math.ceil(Math.sqrt(i));n.image.width!==r&&(n.dispose(),n.image.data=new Float32Array(r*r*4),n.image.width=r,n.image.height=r);const s=n.image.data,a=new I,l=new I,A=new ce,u=new re,d=new I,f=new I,h=new I(0,1,0);for(let y=0,g=e.length;y<g;y++){const x=e[y],m=y*$i*4;let p=0;for(let C=0;C<$i*4;C++)s[m+C]=0;x.getWorldPosition(l),s[m+p++]=l.x,s[m+p++]=l.y,s[m+p++]=l.z;let b=Wh;if(x.isRectAreaLight&&x.isCircular?b=Vh:x.isSpotLight?b=Xh:x.isDirectionalLight?b=Yh:x.isPointLight&&(b=Zh),s[m+p++]=b,s[m+p++]=x.color.r,s[m+p++]=x.color.g,s[m+p++]=x.color.b,s[m+p++]=x.intensity,x.getWorldQuaternion(u),x.isRectAreaLight)a.set(x.width,0,0).applyQuaternion(u),s[m+p++]=a.x,s[m+p++]=a.y,s[m+p++]=a.z,p++,l.set(0,x.height,0).applyQuaternion(u),s[m+p++]=l.x,s[m+p++]=l.y,s[m+p++]=l.z,s[m+p++]=a.cross(l).length()*(x.isCircular?Math.PI/4:1);else if(x.isSpotLight){const C=x.radius||0;d.setFromMatrixPosition(x.matrixWorld),f.setFromMatrixPosition(x.target.matrixWorld),A.lookAt(d,f,h),u.setFromRotationMatrix(A),a.set(1,0,0).applyQuaternion(u),s[m+p++]=a.x,s[m+p++]=a.y,s[m+p++]=a.z,p++,l.set(0,1,0).applyQuaternion(u),s[m+p++]=l.x,s[m+p++]=l.y,s[m+p++]=l.z,s[m+p++]=Math.PI*C*C,s[m+p++]=C,s[m+p++]=x.decay,s[m+p++]=x.distance,s[m+p++]=Math.cos(x.angle),s[m+p++]=Math.cos(x.angle*(1-x.penumbra)),s[m+p++]=x.iesTexture?t.indexOf(x.iesTexture):-1}else if(x.isPointLight){const C=a.setFromMatrixPosition(x.matrixWorld);s[m+p++]=C.x,s[m+p++]=C.y,s[m+p++]=C.z,p++,p+=4,p+=1,s[m+p++]=x.decay,s[m+p++]=x.distance}else if(x.isDirectionalLight){const C=a.setFromMatrixPosition(x.matrixWorld),F=l.setFromMatrixPosition(x.target.matrixWorld);f.subVectors(C,F).normalize(),s[m+p++]=f.x,s[m+p++]=f.y,s[m+p++]=f.z}}n.needsUpdate=!0,this.count=e.length}}function Hs(o){const e=this,t=o.split(`
`);let n=0,i;e.verAngles=[],e.horAngles=[],e.candelaValues=[],e.tiltData={},e.tiltData.angles=[],e.tiltData.mulFactors=[];function r(d){return d=d.trim(),d=d.replace(/,/g," "),d=d.replace(/\s\s+/g," "),d.split(" ")}function s(d,f){for(;;){const h=t[n++],y=r(h);for(let g=0;g<y.length;++g)f.push(Number(y[g]));if(f.length===d)break}}function a(){let d=t[n++],f=r(d);e.tiltData.lampToLumGeometry=Number(f[0]),d=t[n++],f=r(d),e.tiltData.numAngles=Number(f[0]),s(e.tiltData.numAngles,e.tiltData.angles),s(e.tiltData.numAngles,e.tiltData.mulFactors)}function l(){const d=[];s(10,d),e.count=Number(d[0]),e.lumens=Number(d[1]),e.multiplier=Number(d[2]),e.numVerAngles=Number(d[3]),e.numHorAngles=Number(d[4]),e.gonioType=Number(d[5]),e.units=Number(d[6]),e.width=Number(d[7]),e.length=Number(d[8]),e.height=Number(d[9])}function A(){const d=[];s(3,d),e.ballFactor=Number(d[0]),e.blpFactor=Number(d[1]),e.inputWatts=Number(d[2])}for(;i=t[n++],!i.includes("TILT"););i.includes("NONE")||i.includes("INCLUDE")&&a(),l(),A();for(let d=0;d<e.numHorAngles;++d)e.candelaValues.push([]);s(e.numVerAngles,e.verAngles),s(e.numHorAngles,e.horAngles);for(let d=0;d<e.numHorAngles;++d)s(e.numVerAngles,e.candelaValues[d]);for(let d=0;d<e.numHorAngles;++d)for(let f=0;f<e.numVerAngles;++f)e.candelaValues[d][f]*=e.candelaValues[d][f]*e.multiplier*e.ballFactor*e.blpFactor;let u=-1;for(let d=0;d<e.numHorAngles;++d)for(let f=0;f<e.numVerAngles;++f){const h=e.candelaValues[d][f];u=u<h?h:u}if(u>0)for(let d=0;d<e.numHorAngles;++d)for(let f=0;f<e.numVerAngles;++f)e.candelaValues[d][f]/=u}class _h extends vn{_getIESValues(e){const r=new Float32Array(64800);function s(A,u){let d=0,f=0,h=0,y=0,g=0,x=0;for(let v=0;v<e.numHorAngles-1;++v)if(u<e.horAngles[v+1]||v==e.numHorAngles-2){f=v,h=e.horAngles[v],y=e.horAngles[v+1];break}for(let v=0;v<e.numVerAngles-1;++v)if(A<e.verAngles[v+1]||v==e.numVerAngles-2){d=v,g=e.verAngles[v],x=e.verAngles[v+1];break}const m=y-h,p=x-g;if(p===0)return 0;const b=m===0?0:(u-h)/m,C=(A-g)/p,F=m===0?f:f+1,K=Wt.lerp(e.candelaValues[f][d],e.candelaValues[F][d],b),B=Wt.lerp(e.candelaValues[f][d+1],e.candelaValues[F][d+1],b);return Wt.lerp(K,B,C)}const a=e.horAngles[0],l=e.horAngles[e.numHorAngles-1];for(let A=0;A<64800;++A){let u=A%360;const d=Math.floor(A/360);l-a!==0&&(u<a||u>=l)&&(u%=l*2,u>l&&(u=l*2-u)),r[A]=s(d,u)}return r}load(e,t,n,i){const r=new Bo(this.manager);r.setResponseType("text"),r.setCrossOrigin(this.crossOrigin),r.setWithCredentials(this.withCredentials),r.setPath(this.path),r.setRequestHeader(this.requestHeader);const s=new Ee(null,360,180,Xt,Fe);return s.minFilter=fe,s.magFilter=fe,r.load(e,a=>{const l=new Hs(a);s.image.data=Ko(this._getIESValues(l)),s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}parse(e){const t=new Hs(e),n=new Ee(null,360,180,Xt,Fe);return n.minFilter=fe,n.magFilter=fe,n.image.data=Ko(this._getIESValues(t)),n.needsUpdate=!0,n}}const Os=new oe;class $h extends yr{constructor(...e){super(...e);const t=this.texture;t.format=de,t.type=Fe,t.minFilter=fe,t.magFilter=fe,t.wrapS=Ct,t.wrapT=Ct,t.generateMipmaps=!1,t.updateFrom=(...i)=>{this.updateFrom(...i)};const n=new Zt(new Xe);this.fsQuad=n,this.iesLoader=new _h}async updateFrom(e,t){const n=e.getRenderTarget(),i=e.toneMapping,r=e.getClearAlpha();e.getClearColor(Os);const s=t.length||1;this.setSize(360,180,s),e.setClearColor(0,0),e.toneMapping=br;const a=this.fsQuad;for(let l=0,A=s;l<A;l++){const u=t[l];u&&(u.matrixAutoUpdate=!1,u.matrix.identity(),a.material.map=u,a.material.transparent=!0,e.setRenderTarget(this,l),a.render(e),u.updateMatrix(),u.matrixAutoUpdate=!0)}a.material.map=null,e.setClearColor(Os,r),e.setRenderTarget(n),e.toneMapping=i,a.dispose()}dispose(){super.dispose(),this.fsQuad.dispose()}}const em=`

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
`;function Gs(o,e,t,n,i){if(e>n)throw new Error;const r=o.length/e,s=o.constructor.BYTES_PER_ELEMENT*8;let a=1;switch(o.constructor){case Uint8Array:case Uint16Array:case Uint32Array:a=2**s-1;break;case Int8Array:case Int16Array:case Int32Array:a=2**(s-1)-1;break}for(let l=0;l<r;l++){const A=4*l,u=e*l;for(let d=0;d<n;d++)t[i+A+d]=e>=d+1?o[u+d]/a:0}}class tm extends kd{constructor(){super(),this._textures=[],this.type=ye,this.format=de,this.internalFormat="RGBA32F"}updateAttribute(e,t){const n=this._textures[e];n.updateFrom(t);const i=n.image,r=this.image;if(i.width!==r.width||i.height!==r.height)throw new Error("FloatAttributeTextureArray: Attribute must be the same dimensions when updating single layer.");const{width:s,height:a,data:l}=r,u=s*a*4*e;let d=t.itemSize;d===3&&(d=4),Gs(n.image.data,d,l,4,u),this.dispose(),this.needsUpdate=!0}setAttributes(e){const t=e[0].count,n=e.length;for(let d=0,f=n;d<f;d++)if(e[d].count!==t)throw new Error("FloatAttributeTextureArray: All attributes must have the same item count.");const i=this._textures;for(;i.length<n;){const d=new Lr;i.push(d)}for(;i.length>n;)i.pop();for(let d=0,f=n;d<f;d++)i[d].updateFrom(e[d]);const s=i[0].image,a=this.image;(s.width!==a.width||s.height!==a.height||s.depth!==n)&&(a.width=s.width,a.height=s.height,a.depth=n,a.data=new Float32Array(a.width*a.height*a.depth*4));const{data:l,width:A,height:u}=a;for(let d=0,f=n;d<f;d++){const h=i[d],g=A*u*4*d;let x=e[d].itemSize;x===3&&(x=4),Gs(h.image.data,x,l,4,g)}this.dispose(),this.needsUpdate=!0}}class om extends tm{updateNormalAttribute(e){this.updateAttribute(0,e)}updateTangentAttribute(e){this.updateAttribute(1,e)}updateUvAttribute(e){this.updateAttribute(2,e)}updateColorAttribute(e){this.updateAttribute(3,e)}updateFrom(e,t,n,i){this.setAttributes([e,t,n,i])}}const im=`

	struct PhysicalCamera {

		float focusDistance;
		float anamorphicRatio;
		float bokehSize;
		int apertureBlades;
		float apertureRotation;

	};

`,nm=`

	struct EquirectHdrInfo {

		sampler2D marginalWeights;
		sampler2D conditionalWeights;
		sampler2D map;

		float totalSum;

	};

`,sm=`

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

`,rm=`

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

`,am=`

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

`,lm=`

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

`,cm=`

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

`,um=`

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

`,Am=`

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

	${lm}
	${cm}
	${um}

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

`,dm=`

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

`,fm=`

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

`,pm=`

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

`,hm=`

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


`,mm=`

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

`,gm=`

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

`,xm=`

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

`,ym=`

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

`,Ns=`

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
`,bm=`

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

`,Cm=`

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

`,Fm=`

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

`,Km=`

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

`,Bm=`

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
`,Rm=`

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

`,vm=`

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

`;function Sm(o){for(let e=o.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1)),n=o[e];o[e]=o[t],o[t]=n}return o}class Mm{constructor(e,t){const n=e**t,i=new Uint16Array(n);let r=n;for(let s=0;s<n;s++)i[s]=s;this.samples=new Float32Array(t),this.strataCount=e,this.restart=function(){r=0},this.next=function(){const{samples:s}=this;r>=i.length&&(Sm(i),this.restart());let a=i[r++];for(let l=0;l<t;l++)s[l]=(a%e+Math.random())/e,a=Math.floor(a/e);return s}}}class wm{constructor(e,t){let n=0;for(const a of t)n+=a;const i=new Float32Array(n),r=[];let s=0;for(const a of t){const l=new Mm(e,a);l.samples=new Float32Array(i.buffer,s,l.samples.length),s+=l.samples.length*4,r.push(l)}this.samples=i,this.strataCount=e,this.next=function(){for(const a of r)a.next();return i},this.restart=function(){for(const a of r)a.restart()}}}class Dm extends Ee{constructor(e=1,t=1,n=8){super(new Float32Array(1),1,1,de,ye),this.minFilter=Ae,this.magFilter=Ae,this.strata=n,this.sampler=null,this.init(e,t,n)}init(e,t,n=this.strata){const{image:i}=this;if(i.width===t&&i.height===e)return;const r=new Array(e*t).fill(4),s=new wm(n,r);i.width=t,i.height=e,i.data=s.samples,this.sampler=s,this.dispose(),this.next()}next(){this.sampler.next(),this.needsUpdate=!0}}function Um(o,e=Math.random){for(let t=o.length-1;t>0;t--){const n=~~((e()-1e-6)*t),i=o[t];o[t]=o[n],o[n]=i}}function Em(o,e){o.fill(0);for(let t=0;t<e;t++)o[t]=1}class Ls{constructor(e){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(e),this.setSigma(1.5)}findVoid(){const{score:e,binaryPattern:t}=this;let n=1/0,i=-1;for(let r=0,s=t.length;r<s;r++){if(t[r]!==0)continue;const a=e[r];a<n&&(n=a,i=r)}return i}findCluster(){const{score:e,binaryPattern:t}=this;let n=-1/0,i=-1;for(let r=0,s=t.length;r<s;r++){if(t[r]!==1)continue;const a=e[r];a>n&&(n=a,i=r)}return i}setSigma(e){if(e===this.sigma)return;const t=~~(Math.sqrt(10*2*e**2)+1),n=2*t+1,i=new Float32Array(n*n),r=e*e;for(let s=-t;s<=t;s++)for(let a=-t;a<=t;a++){const l=(t+a)*n+s+t,A=s*s+a*a;i[l]=Math.E**(-A/(2*r))}this.lookupTable=i,this.sigma=e,this.radius=t}resize(e){this.size!==e&&(this.size=e,this.score=new Float32Array(e*e),this.binaryPattern=new Uint8Array(e*e))}invert(){const{binaryPattern:e,score:t,size:n}=this;t.fill(0);for(let i=0,r=e.length;i<r;i++)if(e[i]===0){const s=~~(i/n),a=i-s*n;this.updateScore(a,s,1),e[i]=1}else e[i]=0}updateScore(e,t,n){const{size:i,score:r,lookupTable:s}=this,a=this.radius,l=2*a+1;for(let A=-a;A<=a;A++)for(let u=-a;u<=a;u++){const d=(a+u)*l+A+a,f=s[d];let h=e+A;h=h<0?i+h:h%i;let y=t+u;y=y<0?i+y:y%i;const g=y*i+h;r[g]+=n*f}}addPointIndex(e){this.binaryPattern[e]=1;const t=this.size,n=~~(e/t),i=e-n*t;this.updateScore(i,n,1),this.count++}removePointIndex(e){this.binaryPattern[e]=0;const t=this.size,n=~~(e/t),i=e-n*t;this.updateScore(i,n,-1),this.count--}copy(e){this.resize(e.size),this.score.set(e.score),this.binaryPattern.set(e.binaryPattern),this.setSigma(e.sigma),this.count=e.count}}class Tm{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new Ls(1),this.savedSamples=new Ls(1)}generate(){const{samples:e,savedSamples:t,sigma:n,majorityPointsRatio:i,size:r}=this;e.resize(r),e.setSigma(n);const s=Math.floor(r*r*i),a=e.binaryPattern;Em(a,s),Um(a,this.random);for(let d=0,f=a.length;d<f;d++)a[d]===1&&e.addPointIndex(d);for(;;){const d=e.findCluster();e.removePointIndex(d);const f=e.findVoid();if(d===f){e.addPointIndex(d);break}e.addPointIndex(f)}const l=new Uint32Array(r*r);t.copy(e);let A;for(A=e.count-1;A>=0;){const d=e.findCluster();e.removePointIndex(d),l[d]=A,A--}const u=r*r;for(A=t.count;A<u/2;){const d=t.findVoid();t.addPointIndex(d),l[d]=A,A++}for(t.invert();A<u;){const d=t.findCluster();t.removePointIndex(d),l[d]=A,A++}return{data:l,maxValue:u}}}function Im(o){return o>=3?4:o}function km(o){switch(o){case 1:return Xt;case 2:return xr;default:return de}}class jm extends Ee{constructor(e=64,t=1){super(new Float32Array(4),1,1,de,ye),this.minFilter=Ae,this.magFilter=Ae,this.size=e,this.channels=t,this.update()}update(){const e=this.channels,t=this.size,n=new Tm;n.channels=e,n.size=t;const i=Im(e),r=km(i);(this.image.width!==t||r!==this.format)&&(this.image.width=t,this.image.height=t,this.image.data=new Float32Array(t**2*i),this.format=r,this.dispose());const s=this.image.data;for(let a=0,l=e;a<l;a++){const A=n.generate(),u=A.data,d=A.maxValue;for(let f=0,h=u.length;f<h;f++){const y=u[f]/d;s[f*i+a]=y}}this.needsUpdate=!0}}class Pm extends On{onBeforeRender(){this.setDefine("FEATURE_DOF",this.physicalCamera.bokehSize===0?0:1),this.setDefine("FEATURE_BACKGROUND_MAP",this.backgroundMap?1:0),this.setDefine("FEATURE_FOG",this.materials.features.isUsed("FOG")?1:0)}constructor(e){super({transparent:!0,depthWrite:!1,defines:{FEATURE_MIS:1,FEATURE_RUSSIAN_ROULETTE:1,FEATURE_DOF:1,FEATURE_BACKGROUND_MAP:0,FEATURE_FOG:1,RANDOM_TYPE:2,CAMERA_TYPE:0,DEBUG_MODE:0,ATTR_NORMAL:0,ATTR_TANGENT:1,ATTR_UV:2,ATTR_COLOR:3},uniforms:{resolution:{value:new Le},bounces:{value:10},transmissiveBounces:{value:10},physicalCamera:{value:new Jh},bvh:{value:new uh},attributesArray:{value:new om},materialIndexAttribute:{value:new Nr},materials:{value:new Hh},textures:{value:new Oh().texture},lights:{value:new qh},iesProfiles:{value:new $h().texture},cameraWorldMatrix:{value:new ce},invProjectionMatrix:{value:new ce},backgroundBlur:{value:0},environmentIntensity:{value:1},environmentRotation:{value:new ce},envMapInfo:{value:new Qh},backgroundMap:{value:null},seed:{value:0},opacity:{value:1},filterGlossyFactor:{value:0},backgroundAlpha:{value:1},sobolTexture:{value:null},stratifiedTexture:{value:new Dm},stratifiedOffsetTexture:{value:new jm(64,1)}},vertexShader:`

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
				${xh}
				${bh}
				${yh}

				// uniform structs
				${im}
				${sm}
				${nm}
				${rm}

				// random
				#if RANDOM_TYPE == 2 	// Stratified List

					${vm}

				#elif RANDOM_TYPE == 1 	// Sobol

					${Ns}
					${Jr}
					${Sh}

					#define rand(v) sobol(v)
					#define rand2(v) sobol2(v)
					#define rand3(v) sobol3(v)
					#define rand4(v) sobol4(v)

				#else 					// PCG

					${Ns}

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
				${ym}
				${xm}
				${em}
				${gm}
				${mm}

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
				${am}
				${hm}
				${Am}
				${fm}
				${pm}
				${dm}

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

				${bm}
				${Cm}
				${Km}
				${Fm}
				${Rm}
				${Bm}

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

			`}),this.setValues(e)}}const ie=.072;function eo(o){switch(o){case"sphere":return new Rn(ie*.52,8,6);case"star":{const e=ie*.64,t=ie*.25,n=ie*.42,i=new jd;for(let s=0;s<10;s++){const a=s*Math.PI*2/10-Math.PI/2,l=s%2===0?e:t;s===0?i.moveTo(Math.cos(a)*l,Math.sin(a)*l):i.lineTo(Math.cos(a)*l,Math.sin(a)*l)}i.closePath();const r=new Pd(i,{depth:n,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelSegments:1});return r.translate(0,0,-n/2),r}default:return new Ve(ie,ie,ie)}}function Mo({material:o,color:e}){return o==="original"?c.jsx("meshStandardMaterial",{color:e,roughness:.65,metalness:.05}):o==="fluid"?c.jsx("meshPhysicalMaterial",{color:e,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5,envMapIntensity:1}):o==="metal"?c.jsx("meshStandardMaterial",{color:e,roughness:.06,metalness:.95,envMapIntensity:2}):o==="emissive"?c.jsx("meshStandardMaterial",{color:e,emissive:e,emissiveIntensity:2.2,roughness:.55,metalness:0}):c.jsx("meshStandardMaterial",{color:e,roughness:.65,metalness:.05})}const qt=5,Xr=new I(0,1,0),Gn=R.createContext({mode:"off",occluders:[]});function Nn(o){if(o.mode!=="off")return o.mode==="full"?!0:o.occluders.length?o.occluders:void 0}function zm(o){return o==="sphere"?ie*.52:o==="star"?ie*.64:ie*.5}function Hm(o){return o.includes("drum")?.63:o.includes("clarinet")?1.2:o.includes("harp")?.825:1}function Qs(o,e){const t=new oe(e);switch(o){case"fluid":return new Se({color:t,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5,envMapIntensity:1});case"metal":return new Ye({color:t,roughness:.06,metalness:.95,envMapIntensity:2});case"emissive":return new Ye({color:t,emissive:t,emissiveIntensity:2.2,roughness:.55});default:return new Ye({color:t,roughness:.65,metalness:.05})}}function Om(o,e){const t=o.clone();return t.color&&(t.color=new oe(e)),t}const Gm="0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)",Js={display:"block",fontSize:"11px",color:"#e8e8e8",fontFamily:"Courier New, monospace",textShadow:Gm,whiteSpace:"nowrap",userSelect:"none"};function Yr({center:o,dir:e,halfY:t,gapFactor:n,above:i,below:r}){const s=Nn(R.useContext(Gn)),a=t*(1+n),l=[o[0]+e[0]*a,o[1]+e[1]*a,o[2]+e[2]*a],A=[o[0]-e[0]*a,o[1]-e[1]*a,o[2]-e[2]*a];return c.jsxs(c.Fragment,{children:[i&&c.jsxs("group",{position:l,children:[c.jsx("group",{userData:{isLabel:!0,labelText:i,labelPos:"top"}}),c.jsx(xe,{center:!0,occlude:s,style:{pointerEvents:"none"},children:c.jsx("span",{"data-phys-label":"",style:{...Js,transform:"translateY(-100%)"},children:i})})]}),r&&c.jsxs("group",{position:A,children:[c.jsx("group",{userData:{isLabel:!0,labelText:r,labelPos:"bottom"}}),c.jsx(xe,{center:!0,occlude:s,style:{pointerEvents:"none"},children:c.jsx("span",{"data-phys-label":"",style:{...Js,transform:"translateY(0)"},children:r})})]})]})}const mi=(o,e,t)=>o?o[t%o.length]:e;function Zr(o,e,t){return!t||!o.normal?o.pos:[o.pos[0]+o.normal[0]*e,o.pos[1]+o.normal[1]*e,o.pos[2]+o.normal[2]*e]}function qr(o){const e=[];let t=0;for(const n of o)e.push(t+n),t+=2*n;return e}function Nm({placements:o,markShape:e,markMaterial:t,markSize:n,color:i,structural:r,scaleBoost:s,standOnAnchor:a,stack:l,labelGapFactor:A,instanceSizes:u,instanceColors:d,markLabels:f}){const h=R.useRef(null),y=R.useMemo(()=>eo(e),[e]);R.useEffect(()=>()=>{y.dispose()},[y]);const g=zm(e)*s,x=R.useMemo(()=>o.map((b,C)=>g*mi(u,n,C).y),[o,g,u,n.y]),m=R.useMemo(()=>l?qr(x):null,[l,x]),p=(b,C)=>m?[b.pos[0],b.pos[1]+m[C],b.pos[2]]:Zr(b,x[C],a);return R.useEffect(()=>{const b=h.current;if(!b)return;const C=new bt,F=new re,K=new I,B=new oe;o.forEach((S,v)=>{const w=mi(u,n,v);C.position.set(...p(S,v)),S.normal&&!l?(F.setFromUnitVectors(Xr,K.set(...S.normal)),C.quaternion.copy(F)):C.rotation.set(...S.rot??[0,0,0]),C.scale.set(w.x*s,w.y*s,w.z*s),C.updateMatrix(),b.setMatrixAt(v,C.matrix),d&&b.setColorAt(v,B.set(d[v%d.length]))}),b.instanceMatrix.needsUpdate=!0,d&&b.instanceColor&&(b.instanceColor.needsUpdate=!0)},[o,e,n.x,n.y,n.z,s,a,l,u,d]),c.jsxs(c.Fragment,{children:[c.jsx("instancedMesh",{ref:h,args:[y,void 0,o.length],children:c.jsx(Mo,{material:t,structural:r,color:d?"#ffffff":i})},`${o.length}-${e}-${d?"col":"plain"}`),f&&o.map((b,C)=>{const F=f[C];if(!F||!F.above&&!F.below)return null;const K=x[C];return c.jsx(Yr,{center:p(b,C),dir:l?[0,1,0]:b.normal??[0,1,0],halfY:K,gapFactor:A,above:F.above,below:F.below},`lbl-${C}`)})]})}function Lm({placements:o,markMaterial:e,markSize:t,color:n,scaleBoost:i,standOnAnchor:r,stack:s,labelGapFactor:a,instanceSizes:l,instanceColors:A,colorTint:u,markLabels:d,url:f}){const{scene:h}=Ut(f),{normScale:y,center:g,halfYUnit:x}=R.useMemo(()=>{h.updateMatrixWorld(!0);const v=new pe().setFromObject(h),w=new I,D=new I;v.getSize(w),v.getCenter(D);const M=Math.max(w.x,w.y,w.z,.001),T=ie/M*Hm(f);return{normScale:T,center:D,halfYUnit:w.y*T/2}},[h,f]),m=R.useMemo(()=>o.map(()=>h.clone(!0)),[h,o]);R.useEffect(()=>()=>{m.forEach(v=>v.traverse(w=>{w instanceof W&&w.geometry.dispose()}))},[m]);const p=R.useMemo(()=>e!=="original"?Qs(e,n):null,[e,n]);R.useEffect(()=>()=>{p==null||p.dispose()},[p]);const b=R.useMemo(()=>A&&!u?A.map(v=>Qs(e==="original"?"plastic":e,v)):null,[A,u,e]);R.useEffect(()=>()=>{b==null||b.forEach(v=>v.dispose())},[b]);const C=R.useRef([]);R.useEffect(()=>(m.forEach((v,w)=>{v.traverse(D=>{if(!(D instanceof W))return;D.userData.__origMat||(D.userData.__origMat=D.material);const M=D.userData.__origMat;if(A&&u){const T=A[w%A.length],E=j=>{const z=Om(j,T);return C.current.push(z),z};D.material=Array.isArray(M)?M.map(E):E(M)}else b?D.material=b[w%b.length]:p?D.material=p:D.material=M})}),()=>{C.current.forEach(v=>v.dispose()),C.current=[]}),[p,b,m,A,u]);const F=R.useMemo(()=>o.map((v,w)=>x*i*mi(l,t,w).y),[o,x,i,l,t.y]),K=R.useMemo(()=>s?qr(F):null,[s,F]),B=new re,S=new I;return c.jsx(c.Fragment,{children:m.map((v,w)=>{const D=o[w],M=mi(l,t,w),T=y*M.x*i,E=y*M.y*i,j=y*M.z*i,z=F[w],H=K?[D.pos[0],D.pos[1]+K[w],D.pos[2]]:Zr(D,z,r),J=-g.x*T,G=-g.y*E,O=-g.z*j;let P;D.normal&&!s&&(B.setFromUnitVectors(Xr,S.set(...D.normal)),P=[B.x,B.y,B.z,B.w]);const N=d==null?void 0:d[w];return c.jsxs("group",{children:[P?c.jsx("group",{position:H,quaternion:P,children:c.jsx("primitive",{object:v,position:[J,G,O],scale:[T,E,j]})}):c.jsx("group",{position:H,rotation:D.rot??[0,0,0],children:c.jsx("primitive",{object:v,position:[J,G,O],scale:[T,E,j]})}),N&&(N.above||N.below)&&c.jsx(Yr,{center:H,dir:D.normal??[0,1,0],halfY:z,gapFactor:a,above:N.above,below:N.below})]},w)})})}function _r(o){const{markShape:e,customModelUrl:t,scaleBoost:n=qt,standOnAnchor:i=!1,stack:r=!1,labelGapFactor:s=0}=o,a={...o,scaleBoost:n,standOnAnchor:i,stack:r,labelGapFactor:s};return e==="custom"&&t?c.jsx(R.Suspense,{fallback:null,children:c.jsx(Lm,{...a,url:t})}):c.jsx(Nm,{...a})}const Qm={x:1,y:1,z:1},Jm={deformation:"none",fluidDistort:.35,fluidSpeed:1.5},ii="0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)",yt=.47;function Ws(o,e,t,n){if(n==="sphere"){const i=(o+e+t)/3,r=Math.acos(2*Math.random()-1),s=2*Math.PI*Math.random(),a=i*Math.cbrt(Math.random());return[a*Math.sin(r)*Math.cos(s),a*Math.sin(r)*Math.sin(s),a*Math.cos(r)]}return[(Math.random()-.5)*2*o,(Math.random()-.5)*2*e,(Math.random()-.5)*2*t]}function $r(o,e){const t=o[0]-e.center[0],n=o[1]-e.center[1],i=o[2]-e.center[2];return e.kind==="sphere"?t*t+n*n+i*i<e.radius*e.radius:Math.abs(t)<e.half[0]&&Math.abs(n)<e.half[1]&&Math.abs(i)<e.half[2]}function Vs(o,e,t,n,i){let r=Ws(o,e,t,n);if(!i)return r;for(let s=0;s<80;s++){if(!$r(r,i))return r;r=Ws(o,e,t,n)}return r}function Wm(o,e,t,n,i){const r=Math.cbrt(e*t*n),s=Math.ceil(Math.cbrt(o*2)),a=Math.max(1,Math.round(s*e/r)),l=Math.max(1,Math.round(s*t/r)),A=Math.max(1,Math.round(s*n/r)),u=2*e/a,d=2*t/l,f=2*n/A,h=(e+t+n)/3,y=h*h,g=[];for(let m=0;m<A;m++)for(let p=0;p<l;p++)for(let b=0;b<a;b++){if(i==="sphere"){const C=-e+(b+.5)*u,F=-t+(p+.5)*d,K=-n+(m+.5)*f;if(C*C+F*F+K*K>y)continue}g.push(b+p*a+m*a*l)}for(let m=g.length-1;m>0;m--){const p=Math.floor(Math.random()*(m+1));[g[m],g[p]]=[g[p],g[m]]}const x=[];for(let m=0;m<o;m++){const p=g[m%Math.max(1,g.length)],b=p%a,C=Math.floor(p/a)%l,F=Math.floor(p/(a*l)),K=-e+(b+.5)*u,B=-t+(C+.5)*d,S=-n+(F+.5)*f;let v=Math.max(-e,Math.min(e,K+(Math.random()-.5)*u*.7)),w=Math.max(-t,Math.min(t,B+(Math.random()-.5)*d*.7)),D=Math.max(-n,Math.min(n,S+(Math.random()-.5)*f*.7));if(i==="sphere"){const M=Math.sqrt(v*v+w*w+D*D);M>h&&(v=v*h/M*.97,w=w*h/M*.97,D=D*h/M*.97)}x.push([v,w,D])}return x}function Xs(o,e,t,n,i,r,s,a=!1){const l=e*yt,A=t*yt,u=n*yt,d=a?Wm(o,l,A,u,i):null,f=[];for(let h=0;h<o;h++){let y;d?(y=d[h],s&&$r(y,s)&&(y=Vs(l,A,u,i,s))):y=Vs(l,A,u,i,s);const g=r==="random"?[Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2]:[0,0,0];f.push({pos:y,rot:g})}return f}function gi(o,e){let t=0;for(let n=0;n<o.length;n++){const i=o[n].pos;for(let r=n+1;r<o.length;r++){const s=o[r].pos,a=i[0]-s[0],l=i[1]-s[1],A=i[2]-s[2],u=e[n]+e[r];a*a+l*l+A*A<u*u&&t++}}return t}const Vm=100;function ea(o){const e=Math.max(1,o*o/2);return Math.max(8,Math.min(Vm,Math.floor(2e6/e)))}function Xm(o,e,t,n,i,r,s,a,l=!1){const A=ea(o);let u=Xs(o,e,t,n,i,r,a,l),d=gi(u,s);for(let f=1;f<A&&d>0;f++){const h=Xs(o,e,t,n,i,r,a,l),y=gi(h,s);y<d&&(u=h,d=y)}return u}function Ym(o,e,t,n){const i=e*yt,r=t*yt,s=()=>Array.from({length:o},()=>({pos:[(Math.random()-.5)*2*i,0,(Math.random()-.5)*2*r],normal:[0,1,0]})),a=ea(o);let l=s(),A=gi(l,n);for(let u=1;u<a&&A>0;u++){const d=s(),f=gi(d,n);f<A&&(l=d,A=f)}return l}function Zm(o,e){const t=Math.PI*2;return Array.from({length:o},()=>e?{pos:[0,0,0],rot:[0,Math.random()*t,0]}:{pos:[0,0,0]})}function qm({width:o,depth:e,height:t,color:n,position:i,particleCount:r,markShape:s,markMaterial:a,markSize:l=Qm,structural:A=Jm,customModelUrl:u,labelShow:d,labelData:f,seed:h=0,boundingVolume:y="box",showBounds:g=!0,orientation:x="random",exclusionZone:m,evenDistribution:p=!1,adjacent:b=!1,showGrid:C=!1,stacking:F=!1,stackRandomOrient:K=!1,instanceSizes:B,instanceColors:S,colorTint:v,markLabels:w}){const D=Nn(R.useContext(Gn)),M=s==="custom"&&!!u,E=M&&!(!!B||!!S)?Math.max(5,r):r,j=R.useMemo(()=>{if(F)return Zm(E,K);const H=Array.from({length:E},(J,G)=>{const O=B?B[G%B.length]:l,P=b?Math.max(O.x,O.z):Math.max(O.x,O.y,O.z);return .5*ie*qt*P});return b?Ym(E,o,e,H):Xm(E,o,t,e,y,x,H,m,p)},[b,F,K,E,o,t,e,h,y,x,m,p,B,l.x,l.y,l.z]),z=R.useMemo(()=>{if(y==="sphere"){const G=(o+t+e)/3*yt,O=new Rn(G,12,8),P=new rs(O);return O.dispose(),P}const H=new Ve(o,t,e),J=new rs(H);return H.dispose(),J},[o,t,e,y]);return R.useEffect(()=>()=>{z.dispose()},[z]),c.jsxs("group",{position:i,children:[F?null:b?C&&c.jsx("gridHelper",{args:[2,12,"#777777","#4a4a4a"],scale:[o*yt,1,e*yt]}):g&&c.jsx("lineSegments",{geometry:z,children:c.jsx("lineBasicMaterial",{color:"#666666",transparent:!0,opacity:.7})}),c.jsx(_r,{placements:j,markShape:s,markMaterial:a,markSize:l,color:n,structural:A,customModelUrl:M?u:void 0,standOnAnchor:b,stack:F,instanceSizes:B,instanceColors:S,colorTint:v,markLabels:w}),d&&c.jsxs(c.Fragment,{children:[f.top&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[0,t/2+.8,0],userData:{isLabel:!0,labelText:f.top,labelPos:"top"}}),c.jsx(xe,{position:[0,t/2+.8,0],center:!0,occlude:D,style:{pointerEvents:"none"},children:c.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:ii,whiteSpace:"nowrap",userSelect:"none"},children:f.top})})]}),f.bottom&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[0,-(t/2+.8),0],userData:{isLabel:!0,labelText:f.bottom,labelPos:"bottom"}}),c.jsx(xe,{position:[0,-(t/2+.8),0],center:!0,occlude:D,style:{pointerEvents:"none"},children:c.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:ii,whiteSpace:"nowrap",userSelect:"none"},children:f.bottom})})]}),f.left&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[-(o/2+.2),0,0],userData:{isLabel:!0,labelText:f.left,labelPos:"left"}}),c.jsx(xe,{position:[-(o/2+.2),0,0],occlude:D,style:{pointerEvents:"none"},children:c.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:ii,whiteSpace:"nowrap",userSelect:"none",display:"block",textAlign:"right",transform:"translate(-100%, -50%)"},children:f.left})})]}),f.right&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[o/2+.2,0,0],userData:{isLabel:!0,labelText:f.right,labelPos:"right"}}),c.jsx(xe,{position:[o/2+.2,0,0],occlude:D,style:{pointerEvents:"none"},children:c.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:ii,whiteSpace:"nowrap",userSelect:"none",display:"block",transform:"translateY(-50%)"},children:f.right})})]})]})]})}const _m=14;function $m(o){return o.includes("drum")?.63:o.includes("clarinet")?1.2:o.includes("harp")?.825:1}function ta(o,e,t){const n=Math.PI/180,i=_m,r=o.clone(!0);r.position.set(0,0,0),r.rotation.set(0,0,0),r.scale.set(1,1,1),r.updateMatrixWorld(!0);const s=new pe().setFromObject(r);if(!s.isEmpty()){const u=new I;s.getSize(u);const d=Math.max(u.x,u.y,u.z,.001),f=ie/d*(e?$m(e):1),h=new I;s.getCenter(h),r.scale.setScalar(f),r.position.set(-h.x*f,-h.y*f,-h.z*f)}const a=new go;a.scale.set(i*t.size.x,i*t.size.y,i*t.size.z),a.add(r);const l=new go;l.position.set(t.position.x,t.position.y,t.position.z),l.rotation.set(t.orientation.x*n,t.orientation.y*n,t.orientation.z*n),l.add(a),l.updateMatrixWorld(!0);const A=[];return l.traverse(u=>{const d=u;if(!d.isMesh||!d.geometry)return;const f=d.geometry,h=new Be;h.setAttribute("position",f.getAttribute("position").clone());const y=f.getAttribute("normal");y&&h.setAttribute("normal",y.clone()),f.index&&h.setIndex(f.index.clone()),h.applyMatrix4(d.matrixWorld);const g=h.toNonIndexed();g.getAttribute("normal")||g.computeVertexNormals(),A.push(g)}),A.length===0?null:A.length===1?A[0]:zd(A,!1)??A[0]}function eg(o,e){const t=new Hd(new W(o)).build(),n=[],i=new I,r=new I;for(let s=0;s<e;s++)t.sample(i,r),r.lengthSq()<1e-8&&r.set(0,1,0),r.normalize(),n.push({pos:[i.x,i.y,i.z],normal:[r.x,r.y,r.z]});return n}function oa({worldGeo:o,count:e,seed:t,markShape:n,markUrl:i,surfaceScale:r,...s}){const a=R.useMemo(()=>eg(o,Math.max(1,e)),[o,e,t]);return c.jsx(_r,{placements:a,markShape:n,customModelUrl:n==="custom"?i:void 0,scaleBoost:qt*r,standOnAnchor:!0,labelGapFactor:.08,...s})}function tg(o){const{dec:e,url:t,...n}=o,{scene:i}=Ut(t),r=R.useMemo(()=>ta(i,t,e),[i,t,e.position.x,e.position.y,e.position.z,e.orientation.x,e.orientation.y,e.orientation.z,e.size.x,e.size.y,e.size.z]);return R.useEffect(()=>()=>{r==null||r.dispose()},[r]),r?c.jsx(oa,{worldGeo:r,...n}):null}function og(o){const{dec:e,...t}=o,n=R.useMemo(()=>{const i=eo(e.shape),r=ta(new W(i),null,e);return i.dispose(),r},[e.shape,e.position.x,e.position.y,e.position.z,e.orientation.x,e.orientation.y,e.orientation.z,e.size.x,e.size.y,e.size.z]);return R.useEffect(()=>()=>{n==null||n.dispose()},[n]),n?c.jsx(oa,{worldGeo:n,...t}):null}function ig({dec:o,...e}){return o.shape==="custom"&&o.customModelUrl?c.jsx(R.Suspense,{fallback:null,children:c.jsx(tg,{dec:o,url:o.customModelUrl,...e})}):c.jsx(og,{dec:o,...e})}function ng(o,e){const t=new oe(e);switch(o){case"fluid":return new Se({color:t,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5});case"metal":return new Ye({color:t,roughness:.06,metalness:.95});case"emissive":return new Ye({color:t,emissive:t,emissiveIntensity:2.2,roughness:.55});default:return new Ye({color:t,roughness:.65,metalness:.05})}}function sg({url:o,markMaterial:e,markSize:t,color:n}){const{scene:i}=Ut(o),{clone:r,sx:s,sy:a,sz:l,ox:A,oy:u,oz:d}=R.useMemo(()=>{i.updateMatrixWorld(!0);const h=new pe().setFromObject(i),y=new I,g=new I;h.getSize(y),h.getCenter(g);const x=Math.max(y.x,y.y,y.z,.001),m=ie/x,p=m*t.x,b=m*t.y,C=m*t.z;return{clone:i.clone(!0),sx:p,sy:b,sz:C,ox:-g.x*p,oy:-g.y*b,oz:-g.z*C}},[i,t.x,t.y,t.z]),f=R.useMemo(()=>e!=="original"?ng(e,n):null,[e,n]);return R.useEffect(()=>()=>{f==null||f.dispose()},[f]),R.useEffect(()=>{f&&r.traverse(h=>{h instanceof W&&(h.material=f)})},[f,r]),c.jsx("primitive",{object:r,position:[A,u,d],scale:[s,a,l]})}function rg({position:o,count:e,markShape:t,markMaterial:n,markSize:i,color:r,structural:s,customModelUrl:a}){const l=R.useMemo(()=>eo(t),[t]);R.useEffect(()=>()=>{l.dispose()},[l]);const A=Math.sqrt(e)*ie*Math.max(i.x,i.y,i.z)*2.2,u=R.useMemo(()=>Array.from({length:e},(f,h)=>({x:(Math.random()-.5)*A,y:ie*2+h*ie*1.2+Math.random()*ie*.5,z:(Math.random()-.5)*A,rx:Math.random()*Math.PI*2,ry:Math.random()*Math.PI*2,rz:Math.random()*Math.PI*2})),[e,A]),d=-ie*.7;return c.jsxs("group",{position:o,children:[c.jsx(Ai,{type:"fixed",children:c.jsx(Cr,{args:[3,.05,3],position:[0,d,0]})}),u.map((f,h)=>c.jsx(Ai,{position:[f.x,f.y,f.z],rotation:[f.rx,f.ry,f.rz],colliders:"hull",restitution:.1,friction:.8,linearDamping:.4,angularDamping:.5,children:t==="custom"&&a?c.jsx(R.Suspense,{fallback:null,children:c.jsx(sg,{url:a,markMaterial:n,markSize:i,color:r})}):c.jsx("mesh",{geometry:l,scale:[i.x,i.y,i.z],children:c.jsx(Mo,{material:n,structural:s,color:r})})},h))]})}const Bi=R.createContext({colorMode:"distinct",colorGradient:{from:"#EE6655",to:"#4488EE"},colorTint:!1});function ag(o,e,t){return"#"+new oe(o).lerp(new oe(e),Math.max(0,Math.min(1,t))).getHexString()}function Ln(o,e,t,n,i,r){var s,a;if(e.markColor===null)return n;if(i==="continuous"){const l=t.map(h=>h.percentage),A=Math.min(...l),u=Math.max(...l),d=((s=t[o%Math.max(1,t.length)])==null?void 0:s.percentage)??0,f=u>A?(d-A)/(u-A):.5;return ag(r.from,r.to,f)}return((a=t[o%Math.max(1,t.length)])==null?void 0:a.color)??n}function lg(o){return 2*Math.atan(12/o)*180/Math.PI}const ia={1:[0,.5,18],2:[0,2,26],3:[0,4,64]};function cg({level:o,fov:e,focalLength:t}){const{camera:n,controls:i}=Oe(),r=R.useRef(o),s=R.useRef(t);return R.useEffect(()=>{var a,l,A;if(n instanceof Sn){if(r.current!==o){const[u,d,f]=ia[o];n.position.set(u,d,f),n.lookAt(0,0,0);const h=i;(a=h==null?void 0:h.target)==null||a.set(0,0,0),(l=h==null?void 0:h.update)==null||l.call(h),r.current=o}if(s.current!==t&&s.current>0){const u=t/s.current,d=i;d!=null&&d.spherical?(d.spherical.radius*=u,(A=d.update)==null||A.call(d)):n.position.multiplyScalar(u)}s.current=t,n.fov=e,n.updateProjectionMatrix()}},[n,i,o,e,t]),null}const wo=14,Kn=new Map,Qn=R.createContext({aspects:{},report:()=>{}}),Ys=o=>o.kind==="decoration"?`decoration:${o.id}`:o.kind==="object"?`object:${o.owner}`:"mark",na=R.createContext({enabled:!1,isSelected:()=>!1,select:()=>{},commit:()=>{}});function sa(o){const e=R.useContext(na),[t,n]=R.useState(null),i=!!o&&e.enabled,r=i&&e.isSelected(o),s=i?l=>{l.stopPropagation(),e.select(o)}:void 0;return{setGrp:n,gizmo:r&&t?c.jsx(rp,{object:t,mode:"translate",onMouseUp:()=>{const l=t.position;e.commit(o,{x:l.x,y:l.y,z:l.z})}}):null,onClick:s}}function Jn({url:o,material:e,color:t,sz:n,recolor:i=!1,tint:r=!1}){const{scene:s}=Ut(o),a=R.useMemo(()=>{const A=s.clone(!0);A.position.set(0,0,0),A.rotation.set(0,0,0),A.scale.set(1,1,1),A.updateMatrixWorld(!0);const u=o.includes("drum")?.63:o.includes("clarinet")?1.2:o.includes("harp")?.825:1,d=new pe().setFromObject(A);if(!d.isEmpty()){const f=new I;d.getSize(f);const h=Math.max(f.x,f.y,f.z,.001);Kn.set(o,{x:f.x/h*u,y:f.y/h*u,z:f.z/h*u});const y=ie/h*u,g=new I;d.getCenter(g),A.scale.setScalar(y),A.position.set(-g.x*y,-g.y*y,-g.z*y)}if(e!=="original"){const f=e==="fluid"?new Se({color:new oe(t),transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5}):new Ye({color:new oe(t),roughness:e==="metal"?.06:e==="emissive"?.55:.65,metalness:e==="metal"?.95:0,emissive:e==="emissive"?new oe(t):new oe(0,0,0),emissiveIntensity:e==="emissive"?2.2:0});A.traverse(h=>{h instanceof W&&(h.material=f)})}else if(i){const f=new oe(t);A.traverse(h=>{if(h instanceof W)if(r){const y=g=>{const x=g.clone();return x.color&&(x.color=f),x};h.material=Array.isArray(h.material)?h.material.map(y):y(h.material)}else h.material=new Ye({color:f,roughness:.65,metalness:.05})})}return A},[s,o,e,t,i,r]),{report:l}=R.useContext(Qn);return R.useEffect(()=>{const A=Kn.get(o);A&&l(o,A)},[o,l,a]),c.jsx("group",{scale:n,children:c.jsx("primitive",{object:a})})}const Zs=wo*ie;function ug(o,e){return o==="numerical"||o==="weight"||o==="count"?`${(e==null?void 0:e.percentage)??"?"}`:(e==null?void 0:e.name)??"?"}function Do(o,e,t){const n=e[t%Math.max(1,e.length)],i={};return["top","bottom","left","right"].forEach(r=>{const s=o[r];s.length&&(i[r]=s.map(a=>ug(a,n)).join(" · "))}),i}function Ag(o,e,t){return Array.from({length:t},(n,i)=>{const r=Do(o,e,i),s=[r.top,r.left].filter(Boolean).join("  ·  "),a=[r.bottom,r.right].filter(Boolean).join("  ·  ");return{above:s||null,below:a||null}})}function dg(o,e,t){return Array.from({length:t},(n,i)=>{const r=Do(o,e,i),s=[r.top,r.left,r.right,r.bottom].filter(Boolean);return{above:s.length?s.join("  ·  "):null,below:null}})}const fg="0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)";function ht({pos:o,text:e}){const t=o==="top"?"translate(-50%, -100%)":o==="bottom"?"translate(-50%, 0)":o==="left"?"translate(-100%, -50%)":"translateY(-50%)";return c.jsx("span",{"data-phys-label":"",style:{display:"block",fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:fg,whiteSpace:"nowrap",userSelect:"none",transform:t},children:e})}function ai(o){return o==="numerical"||o==="weight"||o==="count"}function Ue(o,e,t){var r;const n=Math.max(...t.map(s=>s.percentage),1);return .2+1.8*((((r=t[e%Math.max(1,t.length)])==null?void 0:r.percentage)??n)/n)}function ra(o,e,t){return o==="center"?[0,0,0]:e==="X"?[0,o==="start"?-t:t,0]:[o==="start"?t:-t,0,0]}function pg({config:o,layers:e,bindings:t,markLabelConfig:n}){const i=R.useMemo(()=>eo(o.shape),[o.shape]);R.useEffect(()=>()=>{i.dispose()},[i]);const{colorMode:r,colorGradient:s,colorTint:a}=R.useContext(Bi),{setGrp:l,gizmo:A,onClick:u}=sa({kind:"mark"}),d=Math.PI/180,f=wo,h=Ln(0,t,e,o.color,r,s),y=(o.scale??1)*(t.markScale?Ue(t.markScale,0,e):1),g={x:o.size.x*y*(t.markSizeX?Ue(t.markSizeX,0,e):1),y:o.size.y*y*(t.markSizeY?Ue(t.markSizeY,0,e):1),z:o.size.z*y*(t.markSizeZ?Ue(t.markSizeZ,0,e):1)},x=f*g.y*.036+.8,m=f*g.x*.036+.8,p=Do(n.slots,e,0),b=[o.orientation.x*d,o.orientation.y*d,o.orientation.z*d];return c.jsxs(c.Fragment,{children:[c.jsxs("group",{ref:l,position:[o.position.x,o.position.y,o.position.z],rotation:b,onClick:u,children:[o.shape==="custom"&&o.customModelUrl?c.jsx(R.Suspense,{fallback:null,children:c.jsx(Jn,{url:o.customModelUrl,material:o.material,color:h,sz:[f*g.x,f*g.y,f*g.z],recolor:t.markColor!==null,tint:a})}):c.jsx("mesh",{geometry:i,scale:[f*g.x,f*g.y,f*g.z],children:c.jsx(Mo,{material:o.material,structural:o.structural,color:h})}),n.show&&c.jsxs(c.Fragment,{children:[p.top&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[0,x,0],userData:{isLabel:!0,labelText:p.top,labelPos:"top"}}),c.jsx(xe,{zIndexRange:[1,0],position:[0,x,0],style:{pointerEvents:"none"},children:c.jsx(ht,{pos:"top",text:p.top})})]}),p.bottom&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[0,-x,0],userData:{isLabel:!0,labelText:p.bottom,labelPos:"bottom"}}),c.jsx(xe,{zIndexRange:[1,0],position:[0,-x,0],style:{pointerEvents:"none"},children:c.jsx(ht,{pos:"bottom",text:p.bottom})})]}),p.left&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[-m,0,0],userData:{isLabel:!0,labelText:p.left,labelPos:"left"}}),c.jsx(xe,{zIndexRange:[1,0],position:[-m,0,0],style:{pointerEvents:"none"},children:c.jsx(ht,{pos:"left",text:p.left})})]}),p.right&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[m,0,0],userData:{isLabel:!0,labelText:p.right,labelPos:"right"}}),c.jsx(xe,{zIndexRange:[1,0],position:[m,0,0],style:{pointerEvents:"none"},children:c.jsx(ht,{pos:"right",text:p.right})})]})]})]}),A]})}function hg({shape:o,customModelUrl:e,material:t,structural:n,color:i,scale:r,recolor:s,tint:a}){const l=R.useMemo(()=>eo(o),[o]);return R.useEffect(()=>()=>{l.dispose()},[l]),o==="custom"&&e?c.jsx(R.Suspense,{fallback:null,children:c.jsx(Jn,{url:e,material:t,color:i,sz:r,recolor:s,tint:a})}):c.jsx("mesh",{geometry:l,scale:r,children:c.jsx(Mo,{material:t,structural:n,color:i})})}function mg({markConfig:o,collection1Config:e,color:t,layers:n,bindings:i,markLabelConfig:r}){const s=n.length||e.alignCount,{alignAxis:a,alignSpacing:l,alignAnchor:A}=e,u=wo,d=Math.PI/180,f=(s-1)/2,h=[o.orientation.x*d,o.orientation.y*d,o.orientation.z*d],{colorMode:y,colorGradient:g,colorTint:x}=R.useContext(Bi),m=i.markColor!==null;function p(F){return Ln(F,i,n,t,y,g)}const b=o.scale??1;function C(F){const K=b*(i.markScale?Ue(i.markScale,F,n):1),B={x:o.size.x*K*(i.markSizeX?Ue(i.markSizeX,F,n):1),y:o.size.y*K*(i.markSizeY?Ue(i.markSizeY,F,n):1),z:o.size.z*K*(i.markSizeZ?Ue(i.markSizeZ,F,n):1)};return[u*B.x,u*B.y,u*B.z]}return c.jsx("group",{children:Array.from({length:s},(F,K)=>{var P,N;const B=(K-f)*l,S=C(K),v=a==="X"?S[1]*.036:S[0]*.036,w=ra(A,a,v),D=a==="X"?[B+w[0],w[1],w[2]]:[w[0],B+w[1],w[2]],M=S[1]*.036+.8,T=S[0]*.036+.8,E=Do(r.slots,n,K),j=(P=n[K%Math.max(1,n.length)])==null?void 0:P.name,z=(N=o.categoryShapes)==null?void 0:N[j??""],H=(z==null?void 0:z.shape)??o.shape,J=z?z.customModelUrl:o.customModelUrl,G=z?z.customModelHasMat:o.customModelHasMat,O=z!=null&&z.customModelHasMat?"original":o.material;return c.jsxs("group",{position:D,rotation:h,children:[c.jsx(hg,{shape:H,customModelUrl:J,customModelHasMat:G,material:O,structural:o.structural,color:p(K),scale:S,recolor:m,tint:x}),r.show&&c.jsxs(c.Fragment,{children:[E.top&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[0,M,0],userData:{isLabel:!0,labelText:E.top,labelPos:"top"}}),c.jsx(xe,{zIndexRange:[1,0],position:[0,M,0],style:{pointerEvents:"none"},children:c.jsx(ht,{pos:"top",text:E.top})})]}),E.bottom&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[0,-M,0],userData:{isLabel:!0,labelText:E.bottom,labelPos:"bottom"}}),c.jsx(xe,{zIndexRange:[1,0],position:[0,-M,0],style:{pointerEvents:"none"},children:c.jsx(ht,{pos:"bottom",text:E.bottom})})]}),E.left&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[-T,0,0],userData:{isLabel:!0,labelText:E.left,labelPos:"left"}}),c.jsx(xe,{zIndexRange:[1,0],position:[-T,0,0],style:{pointerEvents:"none"},children:c.jsx(ht,{pos:"left",text:E.left})})]}),E.right&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[T,0,0],userData:{isLabel:!0,labelText:E.right,labelPos:"right"}}),c.jsx(xe,{zIndexRange:[1,0],position:[T,0,0],style:{pointerEvents:"none"},children:c.jsx(ht,{pos:"right",text:E.right})})]})]})]},K)})})}function aa({markConfig:o,collection1Config:e,color:t,position:n,layers:i,bindings:r,heightOverride:s,markLabelConfig:a,colLabelConfig:l,layerIndex:A,scatterSeed:u,objectHandle:d}){const{colorMode:f,colorGradient:h,colorTint:y}=R.useContext(Bi),{aspects:g}=R.useContext(Qn),x=o.scale??1,m={x:o.size.x*x,y:o.size.y*x,z:o.size.z*x},p=e.arrangement==="scattering"||e.arrangement==="surface"||e.arrangement==="adjacent"||e.arrangement==="stacking",b=p&&(r.markScale!==null||r.markSizeX!==null||r.markSizeY!==null||r.markSizeZ!==null),C=p&&r.markColor!==null,F=b||C,K=R.useMemo(()=>{if(b)return i.map((M,T)=>{const E=r.markScale?Ue(r.markScale,T,i):1;return{x:m.x*E*(r.markSizeX?Ue(r.markSizeX,T,i):1),y:m.y*E*(r.markSizeY?Ue(r.markSizeY,T,i):1),z:m.z*E*(r.markSizeZ?Ue(r.markSizeZ,T,i):1)}})},[b,i,r.markScale,r.markSizeX,r.markSizeY,r.markSizeZ,m.x,m.y,m.z]),B=R.useMemo(()=>{if(C)return i.map((M,T)=>Ln(T,r,i,t,f,h))},[C,i,r,t,f,h]),S=e.object??null,v=R.useMemo(()=>{const M=S;if(!M||!e.scatterExcludeObject)return;const T=wo*ie,E=K?K.reduce((J,G)=>Math.max(J,G.x,G.y,G.z),0):Math.max(m.x,m.y,m.z),j=ie*qt/2*E,z=[M.position.x,M.position.y,M.position.z];if(M.shape==="sphere"){const J=T*.52*Math.max(M.size.x,M.size.y,M.size.z)*1.05+j;return{kind:"sphere",center:z,radius:J}}const H=M.shape==="custom"&&M.customModelUrl?g[M.customModelUrl]??Kn.get(M.customModelUrl)??{x:1,y:1,z:1}:{x:1,y:1,z:1};return{kind:"box",center:z,half:[T/2*M.size.x*H.x*1.05+j,T/2*M.size.y*H.y*1.05+j,T/2*M.size.z*H.z*1.05+j]}},[S,e.scatterExcludeObject,m.x,m.y,m.z,K,g]),w=S?c.jsx("group",{position:n,children:c.jsx(Wn,{config:S,handleTarget:d})}):null,D=(()=>{var Te;if(e.arrangement==="alignment")return c.jsx("group",{position:n,children:c.jsx(mg,{markConfig:o,collection1Config:e,color:t,layers:i,bindings:r,markLabelConfig:a})});if(e.arrangement==="piling")return c.jsx(rg,{position:n,count:e.pilingCount,markShape:o.shape,markMaterial:o.material,markSize:m,color:t,structural:o.structural,customModelUrl:o.shape==="custom"?o.customModelUrl:void 0},e.pilingCount);if(e.arrangement==="surface"){const Ze=S;if(!Ze)return null;const it=F?i.length:e.surfaceCount??24,Ie=a.show?dg(a.slots,i,it):void 0;return c.jsx(ig,{dec:Ze,markShape:o.shape,markMaterial:o.material,markSize:m,color:t,count:it,surfaceScale:e.surfaceScale??1,seed:u,structural:o.structural,markUrl:o.shape==="custom"?o.customModelUrl:void 0,instanceSizes:K,instanceColors:B,colorTint:y,markLabels:Ie})}const M=e.arrangement==="adjacent",T=e.arrangement==="stacking",E=M||T,{scatterDimensions:j,scatterCount:z,scatterDensity:H,scatterMode:J}=e,G=e.scatterSizeAxes??{x:!1,y:!0,z:!1},O=s!=null&&G.x?s:j.x,P=s!=null&&G.y?s:j.y,N=s!=null&&G.z?s:j.z,V=r.scatterCount!==null?Math.max(1,Math.round(((Te=i[A%Math.max(1,i.length)])==null?void 0:Te.percentage)??z)):null,U=V!==null?V:F?i.length:(J??"count")==="density"&&!E?Math.max(5,Math.round(H*O*P*N)):z,te=Do(l.slots,i,A),he=a.show?Ag(a.slots,i,U):void 0;return c.jsx(qm,{width:O,depth:N,height:P,color:t,position:n,particleCount:U,markShape:o.shape,markMaterial:o.material,markSize:m,structural:o.structural,customModelUrl:o.shape==="custom"?o.customModelUrl:void 0,labelShow:l.show,labelData:te,seed:u,boundingVolume:e.scatterBoundingVolume??"box",showBounds:e.scatterShowBounds??!0,orientation:E?"static":e.scatterOrientation??"random",exclusionZone:E?void 0:v,evenDistribution:e.scatterEven??!1,adjacent:M,showGrid:e.adjacentShowGrid??!1,stacking:T,stackRandomOrient:e.stackingRandomOrient??!1,instanceSizes:K,instanceColors:B,colorTint:y,markLabels:he})})();return c.jsxs(c.Fragment,{children:[D,w]})}const li=8;function gg({markConfig:o,collection1Config:e,layers:t,bindings:n,markLabelConfig:i,colLabelConfig:r,scatterSeed:s}){var u,d;const a=((u=t[0])==null?void 0:u.color)??e.color,l=Math.max(...t.map(f=>f.percentage),1),A=ai(n.scatterSize)&&e.arrangement==="scattering"?Math.max(.5,(((d=t[0])==null?void 0:d.percentage)??50)/l*li):void 0;return c.jsx(aa,{markConfig:o,collection1Config:e,color:a,position:[0,0,0],layers:t,bindings:n,heightOverride:A,markLabelConfig:i,colLabelConfig:r,layerIndex:0,scatterSeed:s,objectHandle:{kind:"object",owner:"col1"}})}function xg({markConfig:o,collection1Config:e,collection2Config:t,layers:n,bindings:i,markLabelConfig:r,colLabelConfig:s,scatterSeed:a}){const{arrangement:l,alignCount:A,alignAxis:u,alignSpacing:d,alignAnchor:f,scatterCount:h,scatterDimensions:y,color:g}=t,x=n.length||A,m=R.useMemo(()=>{if(l==="alignment"){const b=Array.from({length:x},(j,z)=>{const H=n[z%Math.max(1,n.length)];return{color:(H==null?void 0:H.color)??g,name:(H==null?void 0:H.name)??`Group ${z+1}`,pct:(H==null?void 0:H.percentage)??0}}),C=Math.max(...n.map(j=>j.percentage),1),F=e,K=o.scale??1,B=ie*qt*o.size.x*K,S=ie*qt*o.size.y*K,v=o.size.x*K*Zs,w=o.size.y*K*Zs,D=b.map(j=>{if(F.arrangement==="scattering"){const z=F.scatterDimensions;return u==="X"?z.x:ai(i.scatterSize)?Math.max(.5,j.pct/C*li):z.y}return F.arrangement==="alignment"?u==="X"?F.alignAxis==="X"?(F.alignCount-1)*F.alignSpacing+v:v:F.alignAxis==="Y"?(F.alignCount-1)*F.alignSpacing+w:w:F.arrangement==="adjacent"?u==="X"?F.scatterDimensions.x:S:u==="X"?B:S}),M=b.map(j=>{if(F.arrangement==="scattering"){const z=F.scatterDimensions;return u==="X"?ai(i.scatterSize)?Math.max(.5,j.pct/C*li):z.y:z.x}return F.arrangement==="alignment"?u==="X"?F.alignAxis==="Y"?(F.alignCount-1)*F.alignSpacing+w:w:F.alignAxis==="X"?(F.alignCount-1)*F.alignSpacing+v:v:F.arrangement==="adjacent"?u==="X"?S:F.scatterDimensions.x:u==="X"?S:B});let E=-(D.reduce((j,z)=>j+z,0)+(x-1)*d)/2;return b.map((j,z)=>{const H=D[z],J=M[z],G=E+H/2;E+=H+d;const O=ra(f,u,J/2),P=u==="X"?[G+O[0],O[1],O[2]]:[O[0],G+O[1],O[2]];return{...j,position:P,perpExt:J}})}return Array.from({length:h},(b,C)=>{const F=n[C%Math.max(1,n.length)];return{position:[(Math.random()-.5)*y.x*.8,(Math.random()-.5)*y.y*.8,(Math.random()-.5)*y.z*.8],color:(F==null?void 0:F.color)??g,name:(F==null?void 0:F.name)??`Group ${C+1}`,pct:(F==null?void 0:F.percentage)??0,perpExt:0}})},[l,x,u,d,f,h,y.x,y.y,y.z,n,g,i.scatterSize,e.arrangement,e.alignAxis,e.alignCount,e.alignSpacing,e.scatterDimensions.x,e.scatterDimensions.y,o.size.x,o.size.y,o.scale,a]),p=Math.max(...n.map(b=>b.percentage),1);return c.jsxs("group",{children:[m.map(({position:b,color:C,name:F,pct:K},B)=>{var D;const S=ai(i.scatterSize)&&e.arrangement==="scattering"?Math.max(.5,K/p*li):void 0,v=(D=o.categoryShapes)==null?void 0:D[F],w=v?{...o,shape:v.shape,customModelUrl:v.customModelUrl,customModelHasMat:v.customModelHasMat,customModelName:v.customModelName,material:v.customModelHasMat?"original":o.material}:o;return c.jsx(aa,{markConfig:w,collection1Config:e,color:C,position:b,layers:n,bindings:i,heightOverride:S,markLabelConfig:r,colLabelConfig:s,layerIndex:B%Math.max(1,n.length),scatterSeed:a},B)}),t.object&&c.jsx(Wn,{config:t.object,handleTarget:{kind:"object",owner:"col2"}})]})}function Wn({config:o,onRegister:e,onUnregister:t,handleTarget:n}){const i=R.useMemo(()=>eo(o.shape),[o.shape]);R.useEffect(()=>()=>{i.dispose()},[i]);const r=R.useRef(null);R.useEffect(()=>(r.current&&(e==null||e(o.id,r.current)),()=>t==null?void 0:t(o.id)),[o.id,e,t]);const{setGrp:s,gizmo:a,onClick:l}=sa(n),A=R.useCallback(h=>{r.current=h,s(h)},[s]),u=Math.PI/180,d=wo,f=[o.orientation.x*u,o.orientation.y*u,o.orientation.z*u];return c.jsxs(c.Fragment,{children:[c.jsx("group",{ref:A,position:[o.position.x,o.position.y,o.position.z],rotation:f,onClick:l,children:o.shape==="custom"&&o.customModelUrl?c.jsx(R.Suspense,{fallback:null,children:c.jsx(Jn,{url:o.customModelUrl,material:o.material,color:o.color,sz:[d*o.size.x,d*o.size.y,d*o.size.z]})}):c.jsx("mesh",{geometry:i,scale:[d*o.size.x,d*o.size.y,d*o.size.z],children:c.jsx(Mo,{material:o.material,structural:o.structural,color:o.color})})}),a]})}function yg({onSamplesUpdate:o,downloadRenderRef:e}){const{gl:t,scene:n,camera:i}=Oe(),r=R.useRef(o);return r.current=o,R.useEffect(()=>{let s=!1,a=null,l=null,A=null;async function u(){if(await new Promise(b=>setTimeout(b,0)),s)return;const d=new Pm;l=new Uh(t),l.setSize(t.domElement.width,t.domElement.height),l.camera=i,l.material=d,n.updateMatrixWorld(!0);const f=new jh(n),{bvh:h,textures:y,materials:g,lights:x}=f.generate();if(s){l.dispose();return}const{geometry:m}=f;if(d.bvh.updateFrom(h),d.attributesArray.updateFrom(m.attributes.normal,m.attributes.tangent,m.attributes.uv,m.attributes.color),d.materialIndexAttribute.updateFrom(m.attributes.materialIndex),d.textures.setTextures(t,2048,2048,y),d.materials.updateFrom(g,y),d.lights.updateFrom(x),n.environment)try{d.envMapInfo.updateFrom(n.environment)}catch{}d.uniforms.backgroundAlpha.value=0,A=new Zt(new Xe({map:l.target.texture})),e.current=()=>{const b=l.samples;t.domElement.toBlob(async C=>{if(!C)return;const F=document.createElement("canvas");F.width=t.domElement.width,F.height=t.domElement.height;const K=F.getContext("2d"),B=await createImageBitmap(C);K.drawImage(B,0,0),n.updateMatrixWorld();const S=[];if(n.traverse(v=>{if(v.userData.isLabel){const w=new I;v.getWorldPosition(w),S.push({worldPos:w,text:v.userData.labelText,pos:v.userData.labelPos??"top"})}}),S.length>0){const v=window.devicePixelRatio||1,w=Math.round(12*v);K.save(),K.font=`${w}px 'Courier New', monospace`,K.shadowColor="rgba(0,0,0,1)",K.shadowBlur=6*v,K.shadowOffsetX=0,K.shadowOffsetY=v,K.fillStyle="#e0e0e0";for(const{worldPos:D,text:M,pos:T}of S){const E=D.clone().project(i);if(E.z>1)continue;const j=(E.x*.5+.5)*F.width,z=(E.y*-.5+.5)*F.height;T==="top"?(K.textAlign="center",K.textBaseline="bottom"):T==="bottom"?(K.textAlign="center",K.textBaseline="top"):T==="left"?(K.textAlign="right",K.textBaseline="middle"):(K.textAlign="left",K.textBaseline="middle"),K.fillText(M,j,z)}K.restore()}F.toBlob(v=>{if(!v)return;const w=URL.createObjectURL(v),D=document.createElement("a");D.download=`render_${b}spp.png`,D.href=w,D.click(),URL.revokeObjectURL(w)},"image/png")},"image/png")},i.updateMatrixWorld();function p(){s||!l||!A||(i.updateMatrixWorld(),l.update(),A.material.map=l.target.texture,t.setRenderTarget(null),A.render(t),r.current(l.samples),a=requestAnimationFrame(p))}a=requestAnimationFrame(p)}return u().catch(console.error),()=>{s=!0,a!==null&&cancelAnimationFrame(a),l==null||l.dispose(),A==null||A.dispose(),e.current=null}},[t,n,i,e]),null}function bg(o,e){const t=o*Math.PI/180,n=e*Math.PI/180,i=100;return[i*Math.cos(t)*Math.sin(n),i*Math.sin(t),i*Math.cos(t)*Math.cos(n)]}function Cg({top:o,bottom:e}){const t=Oe(i=>i.scene),n=R.useMemo(()=>{const i=document.createElement("canvas");i.width=2,i.height=512;const r=i.getContext("2d"),s=r.createLinearGradient(0,0,0,512);s.addColorStop(0,o),s.addColorStop(1,e),r.fillStyle=s,r.fillRect(0,0,2,512);const a=new Od(i);return a.colorSpace=Gd,a},[o,e]);return R.useEffect(()=>{const i=t.background;return t.background=n,()=>{t.background===n&&(t.background=i),n.dispose()}},[t,n]),null}function Fg({value:o}){const e=Oe(t=>t.gl);return R.useEffect(()=>{e.toneMappingExposure=o},[e,o]),null}function la(o){return o.exposure!=null?o.exposure:o.background==="ocean"?.95:o.background==="dark"?1.35:1.2}function Kg({config:o}){const e=o.background,t=e==="ocean",i=[0,(o.envRotation??0)*Math.PI/180,0];return c.jsxs(c.Fragment,{children:[e==="dark"&&c.jsx("color",{attach:"background",args:["#050505"]}),e==="ocean"&&c.jsx("color",{attach:"background",args:["#7ab8d4"]}),e==="color"&&c.jsx("color",{attach:"background",args:[o.bgColor??"#202024"]}),e==="gradient"&&c.jsx(Cg,{top:o.bgGradientTop??"#3a5f8a",bottom:o.bgGradientBottom??"#0a0a12"}),c.jsx(Un,{preset:o.hdriPreset,background:e==="hdri",backgroundBlurriness:o.hdriBlur??0,backgroundIntensity:o.hdriIntensity??1,environmentRotation:i,backgroundRotation:i}),c.jsx(Fg,{value:la(o)}),e==="sky"&&c.jsx(Ts,{distance:45e4,sunPosition:bg(o.skyElevation??20,o.skyAzimuth??140),turbidity:8,rayleigh:2,mieCoefficient:.005,mieDirectionalG:.8}),t&&c.jsxs(c.Fragment,{children:[c.jsx(Ts,{distance:45e4,sunPosition:[5,1.2,8],turbidity:9,rayleigh:3,mieCoefficient:.005,mieDirectionalG:.7}),c.jsx("fog",{attach:"fog",args:["#a8d4ea",25,140]}),c.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-7.2,0],children:[c.jsx("planeGeometry",{args:[400,400,1,1]}),c.jsx("meshPhysicalMaterial",{color:"#0c3a58",roughness:.06,metalness:.65,reflectivity:.9})]})]}),o.stars&&c.jsx(Bh,{radius:120,depth:50,count:4e3,factor:4,saturation:0,fade:!0,speed:.4}),o.fog&&!t&&c.jsx("fog",{attach:"fog",args:[o.fogColor??"#8090a0",o.fogNear??20,o.fogFar??150]}),o.grid&&c.jsx(lp,{position:[0,0,0],args:[60,60],infiniteGrid:!0,cellSize:1,cellThickness:.6,cellColor:"#6b6b6b",sectionSize:5,sectionThickness:1,sectionColor:"#9a9a9a",fadeDistance:70,fadeStrength:1}),c.jsx("ambientLight",{intensity:t?.5:.18}),c.jsx("directionalLight",{position:[8,18,6],intensity:t?1.4:1.8,color:t?"#fff8e0":"#fffaf0"}),c.jsx("directionalLight",{position:[-6,4,-8],intensity:t?.6:.4,color:t?"#c0e8ff":"#c0ccff"})]})}function Bg({level:o,markConfig:e,collection1Config:t,collection2Config:n,sceneConfig:i,layers:r,bindings:s,markLabelConfig:a,colLabelConfig:l,decorations:A,colorMode:u,colorGradient:d,colorTint:f,scatterSeed:h,datasetTitle:y,onSelectElement:g,onSelectDecoration:x,onMarkChange:m,onDecorationChange:p,onCollection1Change:b,onCollection2Change:C,pathTracingActive:F,onSamplesUpdate:K,downloadRenderRef:B}){const S=lg(i.focalLength),v=ia[o];i.background;const[w,D]=R.useState({}),M=R.useCallback((P,N)=>{D(V=>{const U=V[P];return U&&U.x===N.x&&U.y===N.y&&U.z===N.z?V:{...V,[P]:N}})},[]),[T,E]=R.useState({}),j=R.useCallback((P,N)=>{E(V=>V[P]===N?V:{...V,[P]:N})},[]),z=R.useCallback(P=>{E(N=>{const V={...N};return delete V[P],V})},[]),H=R.useMemo(()=>({mode:i.sceneLabelOcclude??"off",occluders:Object.values(T).map(P=>({current:P}))}),[i.sceneLabelOcclude,T]),[J,G]=R.useState(null);R.useEffect(()=>{G(null)},[o]);const O=R.useMemo(()=>({enabled:!F,isSelected:P=>Ys(P)===J,select:P=>{G(Ys(P)),P.kind==="decoration"?x(P.id):P.kind==="mark"?g("mark"):g(P.owner==="col1"?"collection1":"collection2")},commit:(P,N)=>{if(P.kind==="mark")m({...e,position:N});else if(P.kind==="decoration"){const V=A.find(U=>U.id===P.id);V&&p({...V,position:N})}else P.owner==="col1"&&t.object?b({...t,object:{...t.object,position:N}}):P.owner==="col2"&&n.object&&C({...n,object:{...n.object,position:N}})}}),[F,J,e,A,t,n,g,x,m,p,b,C]);return c.jsxs(yi,{camera:{position:v,fov:S,near:.1,far:500},style:{width:"100%",height:"100%"},onPointerMissed:()=>G(null),frameloop:F?"never":"always",gl:{antialias:!0,toneMapping:Dn,toneMappingExposure:la(i),preserveDrawingBuffer:!0},children:[c.jsx(cg,{level:o,fov:S,focalLength:i.focalLength}),c.jsx(Kg,{config:i}),c.jsx(Qn.Provider,{value:{aspects:w,report:M},children:c.jsx(Bi.Provider,{value:{colorMode:u,colorGradient:d,colorTint:f},children:c.jsx(Gn.Provider,{value:H,children:c.jsx(Fr,{gravity:[0,-9.81,0],timeStep:"vary",children:c.jsxs(na.Provider,{value:O,children:[o===1&&c.jsx(pg,{config:e,layers:r,bindings:s,markLabelConfig:a}),o===2&&c.jsx(gg,{markConfig:e,collection1Config:t,layers:r,bindings:s,markLabelConfig:a,colLabelConfig:l,scatterSeed:h}),o===3&&c.jsx(xg,{markConfig:e,collection1Config:t,collection2Config:n,layers:r,bindings:s,markLabelConfig:a,colLabelConfig:l,scatterSeed:h}),A.map(P=>c.jsx(Wn,{config:P,onRegister:j,onUnregister:z,handleTarget:{kind:"decoration",id:P.id}},P.id)),y&&(i.sceneTitleShow??!0)&&c.jsx(xe,{zIndexRange:[1,0],position:[0,(i.sceneTitleBelow?-1:1)*(i.sceneTitleOffset??2.5),0],center:!0,occlude:Nn(H),style:{pointerEvents:"none",whiteSpace:"nowrap"},children:c.jsx("span",{style:{fontSize:"16px",fontWeight:"600",color:"#ffffff"},children:y})})]})})})})}),c.jsx(bi,{makeDefault:!0,dampingFactor:.08,minDistance:1,maxDistance:400,target:[0,0,0]}),F&&K&&B&&c.jsx(yg,{onSamplesUpdate:K,downloadRenderRef:B})]})}const ca=3,ua="collection2",Aa={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},size:{x:10,y:10,z:10},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/apple.glb",customModelHasMat:!0,customModelName:"apple"},da={arrangement:"scattering",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},fa={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"end",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},pa={background:"dark",hdriPreset:"city",focalLength:130},ha={markColor:"categorical",markGeometry:null,scatterSize:"numerical",scatterCount:null,c1AlignCount:"numerical",c2AlignCount:"numerical",markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null},ma={show:!0,slots:{top:"categorical",bottom:null,left:null,right:null}},ga={show:!0,slots:{top:null,bottom:"categorical",left:null,right:null}},xa=[],ya=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],ba="co2Emissions",Ca="distinct",Fa={from:"#EE6655",to:"#4488EE"},Ka=!1,Ba="data:image/jpeg;base64,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fhxuziuVjnx3qyl3VqUWTzNbnqvgG4Itrq4bb8zCNT1IwMn8DkflXWLeZ5zxXmngy926XKobkTkn/vlf8K6JNTOf61+cZ3OUsdU9f0PToL92jrFuQe9SC5965mK/B/iqwt9kcGvJ5ma2Nu5MN3bS2tygeGZGjkQn7ykYI/I18x6laNp+o3VlIwd7eZ4mZehKkjI/KvoL7cPWvA9enS51zUbiJg0ct1K6sOhBYkGvVyyTbkjOoijRRRXrGYUUUUAFFFFABVzTtUutPJFu42E5KMMgn/PpVOilKKkrMadtjc/4Sm/xjZBj6N/jVa417UplZftBjRv4Y/lx+PX9azKKzVGmndIbk2BJJyaKKK1JHwTSW8qSxHa6EFTgHB/Gr09xFdnzUAikPLx9s+q+3t2zWdRWlOrKm7xE1fctZYUb39TVYMw6Ej8aCxPUk12fXnbYj2aJzPtPHzH36V0vhbU59Rv7PSUtYPMlcIshk2KBjkn9ScdewJ4PJUAlTlSQfUVwYmTxCtM0h7mx6Hf+MNOnkeGKd/s0JEcO9D86qMBgB0zjODzzWDeeI4ZmWOOF9mfmdjjH0HNc1RXJHB0ou5rGtKLTXQ6bzejK2QRwQetPW6ZevNc9bXckHyj5k/un+lXU1CFvvbl+ozSlRaPbo4+nNauzN+PUkRGAV8kYyWyOv0rS0u+E0bjnKnNcZJqES52BnPbsKrx6ldRXInik2OBgAdMemKzlhnOLWxli8ZTdNwTvc9JW6ZDlTit7SdfjRDFfBWiIwVK5DV5rb+KYjH/pUDh/+meCD+Z4p8nii1Cny4ZmbsCAAfxzXE8HUvax5vNHud94h1u2v7S4tVAjtnjYMWUYXj73PTHWvJY44pZ2/fbYQSfMK84+nr7evenalrNzfgxsRHCT/q17/U96z1YqeK9rLL4RNS1TOaqlLY21kslsXjEIMh6OeSPx/CswnB4qMSjuD+FBlHYE17k8ZSkk1oYKnJbliNmf5etMOQajiuHikDDp0I9RVzEcy716GlTrqrs9QceXcrbjSh29al8lc9TT0jUMMLuJ6A1suchuJ0nhRLiGCaaQbY5NuMg5PXBz6dfr/Pd8+srw5rlvYt9hnmXzTweOGz/Dk9euCOh461clZd52/dzxmvmsxwrq15Svqd1FrkRbFywHDU9dQkXjOay5Z44kLySKijqzHArA1XxEAvl6cx3Z5lK8D6A/1rzFgajNXKKN3xJ4ia0sXijkxcyrhADyoPBb2749689p0kjyuXldnc9WY5JptelQoRoxsjCUrsKKKK3JCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKcjtGcoSDTaKabTugLC3bfxKD9OKRrtz90BfcdagorX6xVtbmJ5I9gJycnrUiXE0a7Y5pFX0ViBUdFYlASSck5JooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z",Rg={level:ca,activeElement:ua,markConfig:Aa,col1Config:da,col2Config:fa,sceneConfig:pa,bindings:ha,markLabelConfig:ma,colLabelConfig:ga,decorations:xa,layers:ya,activeDataset:ba,colorMode:Ca,colorGradient:Fa,colorTint:Ka,thumbnail:Ba},vg=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:ba,activeElement:ua,bindings:ha,col1Config:da,col2Config:fa,colLabelConfig:ga,colorGradient:Fa,colorMode:Ca,colorTint:Ka,decorations:xa,default:Rg,layers:ya,level:ca,markConfig:Aa,markLabelConfig:ma,sceneConfig:pa,thumbnail:Ba},Symbol.toStringTag,{value:"Module"})),Ra=2,va="scene",Sa={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:1.8,y:1.8,z:1.8},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/stylized_cloud.glb",customModelHasMat:!0,customModelName:"stylized_cloud"},Ma={arrangement:"scattering",color:"#5E5CE6",alignCount:12,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:6.5,z:3},scatterDensity:1,pilingCount:10,scatterOrientation:"static",scatterExclusionId:"dec_1784648799961",scatterBoundingVolume:"sphere",scatterEven:!0,scatterShowBounds:!1},wa={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Da={background:"dark",hdriPreset:"sunset",focalLength:130,sceneLabelOcclude:"optimized",sceneTitleOffset:2,bgColor:"#00001e",exposure:1,envRotation:335,fog:!1,grid:!1,stars:!1,bgGradientTop:"#a6d2ff"},Ua={markColor:"numerical",markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:"numerical"},Ea={show:!0,slots:{top:"numerical",bottom:null,left:"categorical",right:null}},Ta={show:!0,slots:{top:null,bottom:null,left:null,right:null}},Ia=[{id:"dec_1784648799961",shape:"custom",material:"original",color:"#888888",position:{x:0,y:-.6,z:0},size:{x:3.4,y:3.4,z:3.4},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/building_05.glb",customModelHasMat:!0,customModelName:"building_05",name:"Skyscraper"}],ka=[{id:"1",name:"Germany",percentage:572.32,color:"#E63946"},{id:"2",name:"Canada",percentage:533.34,color:"#F4A261"},{id:"3",name:"Turkey",percentage:513.03,color:"#E9C46A"},{id:"4",name:"Brazil",percentage:483.01,color:"#2A9D8F"},{id:"5",name:"South Africa",percentage:439.83,color:"#264653"},{id:"6",name:"Australia",percentage:386.73,color:"#E76F51"},{id:"7",name:"Vietnam",percentage:370.93,color:"#8AB17D"},{id:"8",name:"United Kingdom",percentage:312.91,color:"#457B9D"},{id:"9",name:"France",percentage:264.16,color:"#6A4C93"},{id:"10",name:"Qatar",percentage:125.81,color:"#B5838D"},{id:"11",name:"Greece",percentage:53.36,color:"#1D3557"},{id:"12",name:"Denmark",percentage:24.4,color:"#A8DADC"}],ja="co2Emissions",Pa="continuous",za={from:"#ffffff",to:"#000000"},Ha=!1,Oa="data:image/jpeg;base64,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",Sg={level:Ra,activeElement:va,markConfig:Sa,col1Config:Ma,col2Config:wa,sceneConfig:Da,bindings:Ua,markLabelConfig:Ea,colLabelConfig:Ta,decorations:Ia,layers:ka,activeDataset:ja,colorMode:Pa,colorGradient:za,colorTint:Ha,thumbnail:Oa},Mg=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:ja,activeElement:va,bindings:Ua,col1Config:Ma,col2Config:wa,colLabelConfig:Ta,colorGradient:za,colorMode:Pa,colorTint:Ha,decorations:Ia,default:Sg,layers:ka,level:Ra,markConfig:Sa,markLabelConfig:Ea,sceneConfig:Da,thumbnail:Oa},Symbol.toStringTag,{value:"Module"})),Ga=1,Na="scene",La={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},scale:.1,size:{x:0,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},Qa={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},Ja={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Wa={background:"dark",hdriPreset:"city",focalLength:130,sceneTitleShow:!1},Va={markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null},Xa={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Ya={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Za=[{id:"dec_1784808573016",shape:"custom",material:"original",color:"#888888",position:{x:0,y:1.7,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/airplane_crj-900_cityjet.glb",customModelHasMat:!0,customModelName:"airplane_crj-900_cityjet"},{id:"dec_1784808573841",shape:"custom",material:"original",color:"#888888",position:{x:1.2,y:.9,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/building_05.glb",customModelHasMat:!0,customModelName:"building_05"},{id:"dec_1784808574368",shape:"custom",material:"original",color:"#888888",position:{x:-1.4,y:.9,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/carbon_dioxide_co2.glb",customModelHasMat:!0,customModelName:"carbon_dioxide_co2"},{id:"dec_1784808574984",shape:"custom",material:"original",color:"#888888",position:{x:0,y:.6,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/earth%20(2).glb",customModelHasMat:!0,customModelName:"earth (2)"},{id:"dec_1784808575505",shape:"custom",material:"original",color:"#888888",position:{x:1.3,y:-.7,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/flowers.glb",customModelHasMat:!0,customModelName:"flowers"},{id:"dec_1784808576024",shape:"custom",material:"original",color:"#888888",position:{x:-1.2,y:-.5,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/low_poly_factory.glb",customModelHasMat:!0,customModelName:"low_poly_factory"},{id:"dec_1784808576593",shape:"custom",material:"original",color:"#888888",position:{x:1.3,y:1.9,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/low_poly_small_car.glb",customModelHasMat:!0,customModelName:"low_poly_small_car"},{id:"dec_1784808662185",shape:"custom",material:"original",color:"#888888",position:{x:0,y:-.9,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/pine_tree.glb",customModelHasMat:!0,customModelName:"pine_tree"},{id:"dec_1784808680241",shape:"custom",material:"original",color:"#888888",position:{x:-1.6,y:1.8,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/stylized_cloud.glb",customModelHasMat:!0,customModelName:"stylized_cloud"}],qa=[{id:"1",name:"Death cap (Amanita phalloides)",percentage:10,color:"#7C8C4E"},{id:"2",name:"Destroying angel (Amanita virosa)",percentage:10,color:"#F0ECE0"},{id:"3",name:"Funeral bell (Galerina marginata)",percentage:9,color:"#6B4E31"},{id:"4",name:"Deadly webcap (Cortinarius rubellus)",percentage:8,color:"#A0522D"},{id:"5",name:"False morel (Gyromitra esculenta)",percentage:6,color:"#8B4A2F"},{id:"6",name:"Panther cap (Amanita pantherina)",percentage:5,color:"#C2A878"}],_a="mushroomToxicity",$a="distinct",el={from:"#EE6655",to:"#4488EE"},tl=!1,ol="data:image/jpeg;base64,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03/j7X6H+VdJpUgiuSzW0dwCuNsjqoHI5yfpj8a5WCVoZBIoBI7Gte3uba5x5lwltzg+aGIHXnKqc9AOnU/jSZcWrWOtXULyJ53t4dPTzm3YN/F8vygdmHpmtiy8RaXZafb20lyHnggjWRIlL4OAOo46n1rn/E2seGruz8rS2to5PPD7o7VkOzbgjO315x0qrF4wtLbRF0pIJZNjAiYHAYb933T+XWhtonRo7I+IQJFj/snVi7Asq/ZuSB1IGfcfnWT4j1Wz1XRLiG40zU0j5KztajbG6nGck8YPB/EViT/EGdrpJ47KI7EaNVbIGCVPY9flFU7jxtPcabcWL2UXlzs7O4c7ss5c/qfyptsVkcrRRRQAV2/hm4nuNHRFv9iwyIjojM02GcKOvCgZXGAeenJriKKmUeZAd7repaRYreWssKT3YiAjBtgm0sgGOACMAA+vOOwxwbMXYsxySck1qeJ1C6w6jdxBADuOSD5SZ/WsqiMbILWYUUUVQBRRRQB0Xhi8tmL2t/LIsH3giuQN3PYAkj2A646jIrdnkCDyYlbeDtKbAwLBRhVABxhiRgYGCK4S2uJrWdJ7eRo5UOVZTyK6K68TWxs5I7Ox2SyqVbe3yjIGeBgHkdxjpxWM6d3oZyp3dypr97bXH7pGuZGQlhLLKW8xjt3Oc9iFAHAJABJ6CsVmLHLHJodmd2d2LMxySTkk0lapWRaVgooopjCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA2/GieX4lu1xtwI/lxjH7teKxKmvbue+uXubpw8r43MFC5wMdBx0FQ0lsNu7CiiimIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/9k=",wg={level:Ga,activeElement:Na,markConfig:La,col1Config:Qa,col2Config:Ja,sceneConfig:Wa,bindings:Va,markLabelConfig:Xa,colLabelConfig:Ya,decorations:Za,layers:qa,activeDataset:_a,colorMode:$a,colorGradient:el,colorTint:tl,thumbnail:ol},Dg=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:_a,activeElement:Na,bindings:Va,col1Config:Qa,col2Config:Ja,colLabelConfig:Ya,colorGradient:el,colorMode:$a,colorTint:tl,decorations:Za,default:wg,layers:qa,level:Ga,markConfig:La,markLabelConfig:Xa,sceneConfig:Wa,thumbnail:ol},Symbol.toStringTag,{value:"Module"})),il=3,nl="mark",sl={shape:"box",material:"metal",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},rl={arrangement:"scattering",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"density",scatterCount:300,scatterDimensions:{x:10.5,y:4,z:10.5},scatterDensity:1,pilingCount:10},al={arrangement:"alignment",color:"#9D9BF4",alignCount:5,alignAxis:"Y",alignSpacing:.5,alignAnchor:"end",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},ll={background:"dark",hdriPreset:"city",focalLength:130,sceneTitleOffset:9.5,sceneTitleShow:!1},cl={markColor:null,markGeometry:null,scatterSize:"numerical",scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null},ul={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Al={show:!0,slots:{top:null,bottom:null,left:"categorical",right:"numerical"}},dl=[],fl=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],pl="garbageInOcean",hl="distinct",ml={from:"#EE6655",to:"#4488EE"},gl=!1,xl="data:image/jpeg;base64,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",Ug={level:il,activeElement:nl,markConfig:sl,col1Config:rl,col2Config:al,sceneConfig:ll,bindings:cl,markLabelConfig:ul,colLabelConfig:Al,decorations:dl,layers:fl,activeDataset:pl,colorMode:hl,colorGradient:ml,colorTint:gl,thumbnail:xl},Eg=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:pl,activeElement:nl,bindings:cl,col1Config:rl,col2Config:al,colLabelConfig:Al,colorGradient:ml,colorMode:hl,colorTint:gl,decorations:dl,default:Ug,layers:fl,level:il,markConfig:sl,markLabelConfig:ul,sceneConfig:ll,thumbnail:xl},Symbol.toStringTag,{value:"Module"})),yl=2,bl="scene",Cl={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:.5,y:.5,z:.5},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/fly_agaric_mushroom.glb",customModelHasMat:!0,customModelName:"fly_agaric_mushroom"},Fl={arrangement:"surface",color:"#5E5CE6",alignCount:12,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10,surfaceTargetId:"dec_1784657033022"},Kl={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Bl={background:"dark",hdriPreset:"city",focalLength:130,sceneLabelOcclude:"optimized",sceneTitleBelow:!1,sceneTitleShow:!0,sceneTitleOffset:.6},Rl={markColor:"numerical",markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:"numerical"},vl={show:!0,slots:{top:"numerical",bottom:null,left:"categorical",right:null}},Sl={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Ml=[{id:"dec_1784657033022",shape:"custom",material:"original",color:"#888888",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/log.glb",customModelHasMat:!0,customModelName:"log"}],wl=[{id:"1",name:"Death cap (Amanita phalloides)",percentage:10,color:"#7C8C4E"},{id:"2",name:"Destroying angel (Amanita virosa)",percentage:10,color:"#F0ECE0"},{id:"3",name:"Funeral bell (Galerina marginata)",percentage:9,color:"#6B4E31"},{id:"4",name:"Deadly webcap (Cortinarius rubellus)",percentage:8,color:"#A0522D"},{id:"5",name:"False morel (Gyromitra esculenta)",percentage:6,color:"#8B4A2F"},{id:"6",name:"Panther cap (Amanita pantherina)",percentage:5,color:"#C2A878"},{id:"7",name:"Fly agaric (Amanita muscaria)",percentage:3,color:"#D62828"},{id:"8",name:"Satan's bolete (Rubroboletus satanas)",percentage:4,color:"#C77B7B"},{id:"9",name:"Jack-o'-lantern (Omphalotus olearius)",percentage:4,color:"#E68A00"},{id:"10",name:"Ivory funnel (Clitocybe dealbata)",percentage:7,color:"#E4DAC4"},{id:"11",name:"Fool's funnel (Clitocybe rivulosa)",percentage:7,color:"#CFC8B8"},{id:"12",name:"The sickener (Russula emetica)",percentage:2,color:"#E0455E"}],Dl="mushroomToxicity",Ul="continuous",El={from:"#ffffff",to:"#400080"},Tl=!0,Il="data:image/jpeg;base64,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+Qfj369q4u/1C61CXzLqUt6L0C/QVVorZJI5pTctwqW1uZbSdZoGKuv6+xqKimQezeBvFaanCsErASrwynqKiuvCNvpHi63161eODTwxM0O12IZgVOwKpAXkdSAO3YV5hoGoR6bfG4kDZ8shGUkbW4weOv0Pr+NexeGNettb05g8wGxfnbft24568Y9aT1VjZWaTZynjnw22t3s2saLDfTvKq5iW3XYcAAnfvz0GMbTyPSuGvdC1ewg+0Xul3kEPeSSBlUc45JGBz/SvWINdv5PMjtQp+Z1ErySFfZtzHOPbH61T1rUre4ha31eUXEbN8+SVVivI+71GQOOf61mpS2aOhYRSTakeR0V0HiaCxZVnsbZYDkFxG+5SCOOOx46cdea5+tE7nJODg7MKu2N3Mn7lArKe7DoOnf8Az6VSqWNtkZxjLHrTtcINp6Gy+oJAP9HCl+c8YH6YrPmvJZ+DMRkcjoKpkk855pSc89D39KtOxo5Njg2fvfNxxk9KUHg4x070zFPLY+ZsUriuJKcKF9TmoqCcnJopN3Mm7sKKKKQgooooAKKKKACiiigAooooAKKKKACiiigAoopURpHVEUszEBQOpNACUVf1DRNT00M17ZTRopwXxuUH03DjPtUEdlcy2puo4i8QkEZKkE7j0GOv40robi07NHafCbw+NQ1V9WuVzbWJHlhhw8p6dRztHPqCVroPiV4o+xxmztnBuZAR1+4vr/n+la+lwxeCfAsYvdqThDJMAACZDzjg8kcLnPOBXi+q6hNqmoTXlwSXlbOM/dHYfgKNyvhRUooopkBRRRQAUUUUAFdX4ViWO0MssrxwSt+8wfvYPGOePc/SuZtYfPnVCcL1Y+grduLoHdBFHiJU2RK8nAAPJBzg859evepk+iOnDwi3zS2N2/8AEH7l7aw2xiNccHdn1wMenft69KxZrxm2Ayzsozujc469effn+VVDKzS7lBIZdrKfm9vz/kelVp7tYVKRcswwc8496lI6J1dNRmpXAYLAhyE6/wCfxqjQTk5PWitEcEpOTuwpR0xSUUEp2HYJA6U4DHPSo6KC+YeXAGBzTCSTkmiigltsKKKKBBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVPY3LWl1HOvVc/qMf1qCigabTujudL8U3FnCgZnnRmyy/L0784z3/AAx37b2mDRJZJjawxWtxJt3qrbVzjGRgkd+w5615dbXLQsufmQHO2tG2uCCslvKY2U7tyEhh6AelYuFtj0IV41FaaudN41nvpNN+z3l5NIhk3xvIRhsZyuc+4P4DgVwVdjHrW+JraeJJYHUBlnw7E9cce/I4Hoc1gazYQ27+fZSB7Z2wBnlT/PHBx39fe4vozCvRSXNDYzaKKKs5QooooAKKKKAHwymJiR3GD9KtrdxLGVw3OOAO4z/jVGilYuM3FWRPNdySE4JXPvmoKKKZLbe4UUUUCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAChSVOVJB9RRRQBYjvZUxznBzwcf56CkuLqScYY/Lndyc5P+c/nUFFKyK55NWuFFFFMkKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==",Tg={level:yl,activeElement:bl,markConfig:Cl,col1Config:Fl,col2Config:Kl,sceneConfig:Bl,bindings:Rl,markLabelConfig:vl,colLabelConfig:Sl,decorations:Ml,layers:wl,activeDataset:Dl,colorMode:Ul,colorGradient:El,colorTint:Tl,thumbnail:Il},Ig=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:Dl,activeElement:bl,bindings:Rl,col1Config:Fl,col2Config:Kl,colLabelConfig:Sl,colorGradient:El,colorMode:Ul,colorTint:Tl,decorations:Ml,default:Tg,layers:wl,level:yl,markConfig:Cl,markLabelConfig:vl,sceneConfig:Bl,thumbnail:Il},Symbol.toStringTag,{value:"Module"})),kl=1,jl="scene",Pl={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:1.4,z:0},scale:.1,size:{x:0,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},zl={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},Hl={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Ol={background:"dark",hdriPreset:"city",focalLength:130,sceneTitleShow:!1},Gl={markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null},Nl={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Ll={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Ql=[{id:"dec_1784808839024",shape:"custom",material:"original",color:"#888888",position:{x:0,y:-1.5,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/earth%20(2).glb",customModelHasMat:!0,customModelName:"earth (2)"},{id:"dec_1784808839731",shape:"custom",material:"original",color:"#888888",position:{x:0,y:1.1,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/flowers.glb",customModelHasMat:!0,customModelName:"flowers"},{id:"dec_1784808859944",shape:"custom",material:"original",color:"#888888",position:{x:0,y:-.1,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/fly_agaric_mushroom.glb",customModelHasMat:!0,customModelName:"fly_agaric_mushroom"},{id:"dec_1784808860472",shape:"custom",material:"original",color:"#888888",position:{x:1.3,y:-1.5,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/forest_diorama.glb",customModelHasMat:!0,customModelName:"forest_diorama"},{id:"dec_1784808860984",shape:"custom",material:"original",color:"#888888",position:{x:-1.6,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/log.glb",customModelHasMat:!0,customModelName:"log"},{id:"dec_1784808887656",shape:"custom",material:"original",color:"#888888",position:{x:1.5,y:.1,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/pine_tree.glb",customModelHasMat:!0,customModelName:"pine_tree"},{id:"dec_1784808888104",shape:"custom",material:"original",color:"#888888",position:{x:-1.7,y:1.3,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/poison_bomb_2019.glb",customModelHasMat:!0,customModelName:"poison_bomb_2019"},{id:"dec_1784808911064",shape:"custom",material:"original",color:"#888888",position:{x:-1.6,y:-1.3,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/wednesday_addams_signature_poison_bottle.glb",customModelHasMat:!0,customModelName:"wednesday_addams_signature_poison_bottle"},{id:"dec_1784808977776",shape:"custom",material:"fluid",color:"#8000ff",position:{x:1.5,y:1.3,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/liquid_landscape_1.glb",customModelHasMat:!0,customModelName:"liquid_landscape_1"},{id:"dec_1784809036160",shape:"custom",material:"original",color:"#888888",position:{x:-.1,y:2.3,z:0},size:{x:1,y:1,z:1},orientation:{x:60,y:30,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/leaf_test.glb",customModelHasMat:!0,customModelName:"leaf_test"}],Jl=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],Wl="garbageInOcean",Vl="distinct",Xl={from:"#EE6655",to:"#4488EE"},Yl=!1,Zl="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCADfAUADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxKiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiirdlpd/fKGs7K4mQts3pGSoPoT0HUUm0twKlFa+peGNZ0yz+2Xti0cGQC4dW256ZAJI9Oe/HWsiiMlJXTuAUUUUwCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoorQ8P6euq6zaWLsypK+GK9cAZOPfApNqKuwKsboYWheNSxYFJM4KnuD6g+/TAII5B9jsIo4IkitvISCIFY04AjOep/ySSTUVrYWum28qafZQw5BUbBl3PU5Y/MQD6n2q5OrIIzbsAqoGdW+Zew6fjzj/GvKr1lVtZHNOfMT208e7MV2XIOWMUTMM+mcfyxXBfEHwzDaxrrOmBFgdgs9vHCUEJPRsYwAeh6YOOueOyimd8EW8Eqhsl7SXaQSRnKnr3PSr7yR3tpPaysstrcxtE5QFWAIx0PQ/nWFOo6M+ZbFwdjwSijp1or3TYKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACp9PuPsl/bXJXd5MqybfXBBx+lQUUmrqwHstrew30Ed9byZikQIr55Ax83HrxipoZUkwrMR8jI27g5/8Ar4/OvLfDviC40WUrjzbV874j2JGNy+/8/wAiO5tvEek3nzRXaRbsO4mcIUb056/hXj1aE6T0V0c7ptPQu3drbibzY7eMIfm3FtjDABPPf8c9DzxUV7qcemaZNcHawjiJRipBL4AUMOvoM+lLda5owKpc6la4fI3RNvAP8J4zg89elcf481N7ma0tFctDHH5gcHiQt0PHBwM8+5qaVOVWai1oVGDucpRRRXtmwUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFa2qeHr7TdMstTfyp7G8UeXcW771V8ZMbf3XHPHfBwTg1k12fwzu0n1G48O3ytJp2rQvHIoP8Aq3Clg65BGRt9OoB7UAcZRUt3bS2d1Na3C7JoZGjkXPRgcEfmKioAKKKKACiiigAooooAKKktxE0mJywTB+7jOccdffH4VNqMNtBPstJZXUcESoFYEcHIBP5dvfrRcCrRRRQAUUU6NGlkVEGWY4AoAbRXX2i6PoNxZyESz3sbFnkU5CHaCCB0IGeD1789Bn6zeaZLdfbrO13SFVBR1VIw4z82xeDkbfT5g2Qc4rZ0JJXYGatvaRwxvcyXIkYfOiwgBQRlTuJ5zweg471UkQo2DW/Y6dM0cuoXd/cwTLH5u6JAzAEZGSXXkgg4GTg5OKw7lCjKS6OHUMCrZ/PuDnPB+vQg0TglG9hkVFFFYiCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKANzw/4R13xDPbJp2m3DQ3D7Vu3iZYFx1JfGMDB9+wBPFe8+G/AkHhuygt44tNvLmLcftstqElOSe+CRwcfe6D3rS8H3qxeDNCj27j/Z8AAHXPlrVx7x1bjA5/vk/wBcUwOP+IfgQ6zoFxLptjp0GoQubkm3tgJLkgNuTcBuJOc85yQPXI8Aubea1neC6hkhmQ4aORSrL9Qa+rTqUysArJn0IFcJ8bR/aXg6C48mLzrO7VmfA3LGwZSB3wW2ZHsPSgDwmiiikAUUUUAFbt54p1C70l9NH2S2tWIDxW1skYk+5knA65jUkjBOcdAAMKrFiJPMd4oEmaNC+HGQuP4sfxY64OR6jGaTEz1D/hK9FbwOPD76dDqs0FjKkM9tBuWFggzIRIAyEFnO4DGRx1wvl11aXFsIzPGFVxlGBBDD6jr1qxZWjT2V00aJvULmSWVEUDqQu7q5wMAHOA3BzxDPdzNE1t5geENwcZzjoRkZ9fTrSW4IrUUUVQwqW1lME6yKASM8EAjkY6HrUVFNOzuBvaAI7u+ZZt811IcoXOQeu7OeSTwPpnmqjxXGmSuk0cTfMy7ZIwwyrYyMj1GPwIPBOa9lCbl2XcqkLku7hQnI5Pr16DmrE013c287S5cFkaRwBxgEAn8/88V2qacbvcon1bTblLtY0aS8mkiSY+WpLKCoOCO2OR+FVbmxMEc8UpT7RAw3lbhWUccqAPvHPcHAwfrQstxcLJEuWdnQlUXliMqAAB1+al1BLa3ISGYyShULFWBAbGWGRwecYx6GlNRtcRnUUUVxCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPpLw6D/AMIpoeO1hbH8Ni1fAIJkLbgMkbecj0xXB+HPiBo66NpNpNMIbiC0SCVHyACg2g7iMcgZ/Gugg8YaA+WGqWak9mnUf1p3HY3MhgsgJw2Dtxzkdv0rk/iuWPgq5xwPOjzj03CtVfFWhMBu1fTwQf8An6T/ABrjfih4t0280M6Xpt1DcvNIpkaNtwVQc8EcZyB+dAHk9FFFIQUUUUAFaOmWjSzou4gOwGQCMgj5l3dsqT65x05rOrqPCl1CLa7hmdFlKjywGKNwQQcAYIH3iO+MnOBUzdkTLYW/0MWtpC0LlpIYy8yh8AScY2+20qw9enXiuYCfKWwSoOCwHGecfnj9K728eR3ulhikQMqjqQyFQCD0JBGF564B5ri9Skja5dYZZJY1Y4d+rHu3U9Tk9TUU5N7k023uVKKKK1NAp0TKsqM6B1DAlSSAw9OOabRQBs6xfnVIvPjjWJYsL5asAFXgKAOMgc9Bxn8BWW+kaGIRQpE8Y2rJFHtZiMHJPcjA9+fzpQzSwSCSCRo3U5DocEfQ0+e8ubmQSXFxLK44DSOWI/E1v7a7uO41ZnQkxsUJBUlSQSDwR+VR0+aaSd98zs74A3McnAGBz9OKZWLd2IKKKKQBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVJbzPbzpNHjchzhhkH2I7g9xWv4W8K6p4pupINLjTbEAZZZGwkec4zjJ5wRwD+Veg2fwdtYijanrUj5UEx28IX8mJOR9QKlyS3LhTlPZHnWoa7JdWwhgi+zhgRMVfPmDjtjjv8AnWRXtFz8ItBMbi21HUEkxlWkaNwPTICj+dYeo/B7UI7fzNL1SC7kAJMcsRhJ9ApywJJ45x9amMo7Ip0KiV7HmdFWtT0290m8ez1G3e3uE6o47eoPQj0I4NVa0MgooooAK6nw94Xtb7RrjVtTvzawwShBEEJMnCt94BiOD/dOK5eMKzgMwQH+IjIFdbos0ywfYrXXmWzSJmn3WxeIDIyMEZI4ztIwRu6Zapk7IDlbiCW2l8ueNkfarbWGDggEH8QQajrW8QrM1yJ7mVpriQAySMsgJOMdXAPQYHXOCc9hk007oAooopgFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUVc0YIdXsRKqOhuI9yuAVI3DIIPagEU6VVLEKoJJ6AV9H28thpgxYW1naowyfJjWNT+VJc60mAIpUG1sk7uMepqeYtQPALbQtYu13Wuk38y9cxWzsP0FTf8Iv4h/6AOqf+Acn+Fe8wa5AqtvuI8dThsYHqAc1D/wkNyxISK28vokn2ghse67MZ69z060cw+Q8Jl8Oa7DE8s2i6lHGilnd7SQBQBkknHArMr6On1N590SeY2U4K4wc59wf/wBdfONNO5Mo8oUUUUyTofDniy+0G1e1t/8AUvIZSV4YNgDr+Art/DfjXV9du4tPsbeSeTYWaJM4AH8RycD65HJwOSK8nq5pmq3+kySy6Zdy2sssZieSJtrbcg4B6jlR0rOVOMtTpp4upTXKtj3eGfxKru39hTsqkGJDeRenU4Yd8dK5LWPiNcWrzWtzZ3EF0jZ8mWIoy55yd3PTHXsa6Hx3qOrad4XvryzvZ4pQVQsshyqswXI9Dz168+teHXd3c3tw9ze3EtxO+N8szl2bAwMk8ngCs4UlI2ljaieiRo+Jtdl1++S4lTHlpsUnrtyTg/mayKKK3SSVkcU5ucnJ7sKKKKZI+CV4Z45Y2CujBlYjOCDkHFd61ndtBLAt7FcAKVNukKRbiVPzMSwODznB9T0zXn9dHZ67dXI8qCG3tpY7aTMlugQvsQkEgdTwfYdgO8TTewdRnieGXT4bSzN5LIrJvMe0IgA4XgE5PB5JPX3rn6nvb25v5hLdymWQKF3HGcVBVRVlqCCiiimAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABSqxRgynBByDSUUAbL68xTYLdNh6jgZ+vFQnW7kcRrGq9AMdKzKKnlRftJGn/bt7z8y8jB6/40qa/fopVXAB6gZ5/WsuinyoXPLuaz+Ib9oWj81xuUrkOehGD/ADrJoooSSE5N7hRRRTEFKiNI6ogJZiAAO5pK0vDRUeI9KLDKi8hyPUbxQB6/8Q5PM8C6oTkf6rj/ALarXh1e969HBceE9YjlR3X7HI4Dx42sqlgfwIH5V4JWdLYue4UUUVoQFFFFABWt4diEp1LIyy6fKy+2MZ/TNZNT2t3Paed9ncL50TRP8oOUPUc9PrQxogooooEFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUVuyeF500r+0Tf2Jj8kS+WDJvwRnH3MZ/GsKkmnsNxa3CiiimIKKKKACiiigDpLnxnqVxpT2LBA0qlJZQB8ynrxjgn/wDViuboopKKWw229wooopiCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAp0as8irGpZyQFUDOTTa3/C+o2emedNPB5k7cKxGdo9vc5oAsSW+usGhwjI6ldoiTbj24wPwxXMujRuySKVdThlYYIPoa7iPxPayOTKpWP8Au45NYHii9ttRuo7qBdshXZJxgNjofr2/AUhsxaKKKYgooooAltLW4vblLazgknnkOEjiUszfQCvVPDXwcM6RzeItTMAPL2tooZwCvAMh4DA9QFYccHni38LNMi0fSRfPj7ffgYbaMpGegB56/ePTt3ArvYZ45JURZZC4DAvkYPORgY6nGevb8tvYtQ5mYOsnPlRzMnwb8JIEJ1DWPnOB++i5Pp/q64jxT8KNS0tGudEuF1W2A3FFXbMo5/hyQ2MAcHJJ4WvZpGjzGMgZbdjGeR3qlq888En2zeqxqCoLMBnjBAGcmppRjUdkFSo4as+YqK7/AOJOkQTBdd0+IIzttvUQHG49JMYwMngnjJI6kmuApTg4S5WaQmpxUkFFFFQWFFFOMcgjEpRhGxID44JHbNADaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqxblFQM3PzHj8qr1JGCQAPWgCy7R5yF4IIz71DOuIwfenBSCNwwAehouzuUEetAFaiiigAqWzh+03cEG7b5sipu9MnFRU6N2jkWRDhlIIPoRTW+oM9cmvL2w8q4kQrHIN0bAggrn9Ovf1p3/CQzCQvtRehTByF+mD9R/9euOuZGaFbiMkwOflPdcjIz6ZB/HB9KYt/LjDMzL0wSTxXupwa1PClGaemh6Lqeto80cLXSieL5XaMkoTj3689/Y9c1QnuZr6Jnjjdtn3yvOPWub0+6DyxpI6oCmATCr/AKH6muqsdRtLWNo54GeFgQHA2jcOgwPu568HP655Kk44WK5Fc1jGVdvndjL1iOOXRNUBcPaiFtoZtpLAFl9MkEKTj2z6V5XXoPiy8hi06SUoPtEylATxwRg8D2P6V59XJXqqs1NdjuwlN04OL7hSqu5goxknHNJXZ+AZvBqQXEXivzknaRZI5TG7Rqq9gYyHDHc2f4eB3Fczdlc6i1rFvpdj4D0/ztG2y3MYaO8RQr+Zwfmfnggk7c469CBVY3Fn4jsmsmuLi0itoC1s0zpsBjCqPMCqCw2cBs5Xn7wwK9Js9W0nUYLeSLxJp2n2wUgrBfiFyR2KOFIBwPm9OMc7qpzt4VsWnvNS17SZDMV5sJju3AAEkRZz35K9+c1zJtK1nczSaXmeHUVv+L4vDkVzb/8ACM3E0ymPNxuDeWrdBsLAN6k5H0PYYFdKd1c0CiiimAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAU5HK4xTaKAJPN+tI0m5dvvmmUUAFFFFABRRRQBsaLqnkRtaT+WYWHyiQfKT6HGCO+D2z6E1cuArXR8uEwIf4Mliv51zdWLa+uLbiKT5f7pAIx6c/Wt6ddx0ZlOkpGzC7idd5d8dlPNaNvf+RBL5snDD5Vc4wvOMntya52TV55fvxQdMDEeMe/1qnNcTTnMsjN9adWspqxNOjyu5d1jU5b51QzPJFGSVLd2PU/y/L3rOoorBu5slYKKKKQwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k=",kg={level:kl,activeElement:jl,markConfig:Pl,col1Config:zl,col2Config:Hl,sceneConfig:Ol,bindings:Gl,markLabelConfig:Nl,colLabelConfig:Ll,decorations:Ql,layers:Jl,activeDataset:Wl,colorMode:Vl,colorGradient:Xl,colorTint:Yl,thumbnail:Zl},jg=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:Wl,activeElement:jl,bindings:Gl,col1Config:zl,col2Config:Hl,colLabelConfig:Ll,colorGradient:Xl,colorMode:Vl,colorTint:Yl,decorations:Ql,default:kg,layers:Jl,level:kl,markConfig:Pl,markLabelConfig:Nl,sceneConfig:Ol,thumbnail:Zl},Symbol.toStringTag,{value:"Module"})),ql=3,_l="scene",$l={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},scale:6,size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},categoryShapes:{Strings:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/stradivari_violin.glb",customModelHasMat:!0,customModelName:"stradivari_violin"},Brass:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/trumpet.glb",customModelHasMat:!0,customModelName:"trumpet"},Woodwinds:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/clarinet_model_with_annotations.glb",customModelHasMat:!0,customModelName:"clarinet_model_with_annotations"},Percussion:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/drum.glb",customModelHasMat:!0,customModelName:"drum"},"Piano & Harp":{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/harp.glb",customModelHasMat:!0,customModelName:"harp"}}},ec={arrangement:"scattering",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10,scatterEven:!0},tc={arrangement:"alignment",color:"#9D9BF4",alignCount:5,alignAxis:"X",alignSpacing:.5,alignAnchor:"end",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},oc={background:"dark",hdriPreset:"city",focalLength:130,sceneTitleOffset:9.5},ic={markColor:null,markGeometry:"categorical",scatterSize:"numerical",scatterCount:"numerical",c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null},nc={show:!1,slots:{top:null,bottom:null,left:null,right:null}},sc={show:!0,slots:{top:"numerical",bottom:"categorical",left:null,right:null}},rc=[],ac=[{id:"1",name:"Strings",percentage:80,color:"#C8A882"},{id:"2",name:"Brass",percentage:28,color:"#D4A017"},{id:"3",name:"Woodwinds",percentage:20,color:"#4A7C59"},{id:"4",name:"Percussion",percentage:10,color:"#5C6B7A"},{id:"5",name:"Piano & Harp",percentage:4,color:"#8B7BAB"}],lc="mahler",cc="distinct",uc={from:"#EE6655",to:"#4488EE"},Ac=!1,dc="data:image/jpeg;base64,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",Pg={level:ql,activeElement:_l,markConfig:$l,col1Config:ec,col2Config:tc,sceneConfig:oc,bindings:ic,markLabelConfig:nc,colLabelConfig:sc,decorations:rc,layers:ac,activeDataset:lc,colorMode:cc,colorGradient:uc,colorTint:Ac,thumbnail:dc},zg=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:lc,activeElement:_l,bindings:ic,col1Config:ec,col2Config:tc,colLabelConfig:sc,colorGradient:uc,colorMode:cc,colorTint:Ac,decorations:rc,default:Pg,layers:ac,level:ql,markConfig:$l,markLabelConfig:nc,sceneConfig:oc,thumbnail:dc},Symbol.toStringTag,{value:"Module"})),fc=3,pc="collection2",hc={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},scale:6,size:{x:.3,y:.3,z:.3},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/apple.glb",customModelHasMat:!0,customModelName:"apple"},mc={arrangement:"scattering",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"density",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:3.65,pilingCount:10,scatterEven:!0,scatterBoundingVolume:"box",scatterShowBounds:!1},gc={arrangement:"alignment",color:"#9D9BF4",alignCount:5,alignAxis:"X",alignSpacing:1,alignAnchor:"end",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},xc={background:"dark",hdriPreset:"city",focalLength:130,sceneTitleOffset:9.5,sceneTitleShow:!1},yc={markColor:null,markGeometry:null,scatterSize:"numerical",scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null},bc={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Cc={show:!0,slots:{top:"numerical",bottom:"categorical",left:null,right:null}},Fc=[],Kc=[{id:"1",name:"Strings",percentage:80,color:"#C8A882"},{id:"2",name:"Brass",percentage:28,color:"#D4A017"},{id:"3",name:"Woodwinds",percentage:20,color:"#4A7C59"},{id:"4",name:"Percussion",percentage:10,color:"#5C6B7A"},{id:"5",name:"Piano & Harp",percentage:4,color:"#8B7BAB"}],Bc="mahler",Rc="distinct",vc={from:"#EE6655",to:"#4488EE"},Sc=!1,Mc="data:image/jpeg;base64,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YcG+Fv5TOMjOPUHqO2B34zLtcbXLLsZ/xOgvBorDVb5FkEkUscAXJkfBVhnvhSDn2Ix0I8qr0P4kxz6npmn6paRzSWFsGhkkI4VyQN3rgnjOMAjHU4rzyvSwqtTPNxH8QKKKK6DAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA9b8NeGYPDGiLrTXgl1VtjJGshVYtwwVwCQ5wxGTx6dOdSUSXv+kaxd3ti6yKHSIbiikA/NkcE9c9B35PHnXgW91ibV4bHTy8gZCCAqny1HOcsQByAOSOw9BXost3ebxp19MkJc+XJ9oAUoCxB4GQwIHGDznr3ry6ynGfv6np4eUeXQntbvS4bttHMd3dgyAidyXUqW4YnG0YBx0xxyM1Sg0DR9Gk1GaWOG+vJ5w8cV7DGWjQ4IU5yAcE9l7Z6DFgX9hpbDSbq1huMDZG6JtHzc8HORzxuzknnrVd7XUNPliurmW1vgNsdu4XzH3lui/LkY7deSMdTjJSavy9S2ot9y/Bp+m27Ry6RbRi/hIdICNys7cnDknkY4wcDk8ZyIta02bX4vsetai9grTKJraNRIzKMH72cDPHY42984qFbXU7q6RI449LumJkjlEu9CucPgKxXIOMjgj8adb2F/qksY1LTbdzGXR7hrrG75gONrA4GDwR1PbpQnK6Y5K61OH8a6brmkaXGk+rQ3umXEowYnIYnGV3qemcNjBI+X6VxFdB4tOu2VydI11mBhbzFAOUk4wHU9xjP6g8jA5+vUopqOtvkeZVlzSvcKKKK1MwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDuPh3Do/lzzX93c21zuwrxyqqhRggcqeSf6V1sWj3V7DHf61Mr2cxXaVdh8u4EFiv3QwA755Axk4HEeC4fDjWsj62FknMpURl5FIjwORsI6knOc9B0r0XT7maxsYbOKeG705V2qucySKeqsmOW65I46k8nFebiJJTb/r5HpUXJU12LoufJa4srPTYokRHIkILh48k8nBLZ4wM59gBUekraW2izjw/cySqqlpyz/ORj+HAPzdcDpz9clvd61eTF9AgggtVOCkqhCzhmyOnBAxnOD36VQjs4dQn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",Hg={level:fc,activeElement:pc,markConfig:hc,col1Config:mc,col2Config:gc,sceneConfig:xc,bindings:yc,markLabelConfig:bc,colLabelConfig:Cc,decorations:Fc,layers:Kc,activeDataset:Bc,colorMode:Rc,colorGradient:vc,colorTint:Sc,thumbnail:Mc},Og=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:Bc,activeElement:pc,bindings:yc,col1Config:mc,col2Config:gc,colLabelConfig:Cc,colorGradient:vc,colorMode:Rc,colorTint:Sc,decorations:Fc,default:Hg,layers:Kc,level:fc,markConfig:hc,markLabelConfig:bc,sceneConfig:xc,thumbnail:Mc},Symbol.toStringTag,{value:"Module"})),wc=2,Dc="collection1",Uc={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/pine_tree.glb",customModelHasMat:!0,customModelName:"pine_tree"},Ec={arrangement:"surface",color:"#5E5CE6",alignCount:12,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10,surfaceTargetId:"dec_1784657033022"},Tc={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Ic={background:"dark",hdriPreset:"city",focalLength:130,sceneLabelOcclude:"optimized",sceneTitleBelow:!1,sceneTitleShow:!1,sceneTitleOffset:1.3},kc={markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:"numerical"},jc={show:!0,slots:{top:"numerical",bottom:null,left:"categorical",right:null}},Pc={show:!1,slots:{top:null,bottom:null,left:null,right:null}},zc=[{id:"dec_1784657033022",shape:"custom",material:"original",color:"#888888",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/earth%20(2).glb",customModelHasMat:!0,customModelName:"earth (2)",name:"Earth"}],Hc=[{id:"1",name:"Death cap (Amanita phalloides)",percentage:10,color:"#7C8C4E"},{id:"2",name:"Destroying angel (Amanita virosa)",percentage:10,color:"#F0ECE0"},{id:"3",name:"Funeral bell (Galerina marginata)",percentage:9,color:"#6B4E31"},{id:"4",name:"Deadly webcap (Cortinarius rubellus)",percentage:8,color:"#A0522D"},{id:"5",name:"False morel (Gyromitra esculenta)",percentage:6,color:"#8B4A2F"},{id:"6",name:"Panther cap (Amanita pantherina)",percentage:5,color:"#C2A878"},{id:"7",name:"Fly agaric (Amanita muscaria)",percentage:3,color:"#D62828"},{id:"8",name:"Satan's bolete (Rubroboletus satanas)",percentage:4,color:"#C77B7B"},{id:"9",name:"Jack-o'-lantern (Omphalotus olearius)",percentage:4,color:"#E68A00"},{id:"10",name:"Ivory funnel (Clitocybe dealbata)",percentage:7,color:"#E4DAC4"},{id:"11",name:"Fool's funnel (Clitocybe rivulosa)",percentage:7,color:"#CFC8B8"},{id:"12",name:"The sickener (Russula emetica)",percentage:2,color:"#E0455E"}],Oc="mushroomToxicity",Gc="continuous",Nc={from:"#ffffff",to:"#400080"},Lc=!0,Qc="data:image/jpeg;base64,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",Gg={level:wc,activeElement:Dc,markConfig:Uc,col1Config:Ec,col2Config:Tc,sceneConfig:Ic,bindings:kc,markLabelConfig:jc,colLabelConfig:Pc,decorations:zc,layers:Hc,activeDataset:Oc,colorMode:Gc,colorGradient:Nc,colorTint:Lc,thumbnail:Qc},Ng=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:Oc,activeElement:Dc,bindings:kc,col1Config:Ec,col2Config:Tc,colLabelConfig:Pc,colorGradient:Nc,colorMode:Gc,colorTint:Lc,decorations:zc,default:Gg,layers:Hc,level:wc,markConfig:Uc,markLabelConfig:jc,sceneConfig:Ic,thumbnail:Qc},Symbol.toStringTag,{value:"Module"})),Jc=2,Wc="scene",Vc={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/flowers.glb",customModelHasMat:!0,customModelName:"flowers"},Xc={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:.9,alignAnchor:"end",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1},Yc={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1},Zc={background:"dark",hdriPreset:"dawn",focalLength:130},qc={markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:"numerical",markSizeZ:null,markScale:null},_c={show:!0,slots:{top:"numerical",bottom:"categorical",left:null,right:null}},$c={show:!1,slots:{top:null,bottom:null,left:null,right:null}},eu=[{id:"dec_1781047628256",shape:"box",material:"metal",color:"#24271d",position:{x:0,y:-.05,z:0},size:{x:8,y:.1,z:6.6},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}}],tu=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],ou="co2Emissions",iu="distinct",nu={from:"#EE6655",to:"#4488EE"},su=!1,ru="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCADnAUADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxKiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKn0+0l1C/trK32ma4lWKPccDcxAGT25NAEFFdZongLU9Y1WXT7eWFmigeVnTJAZU3FMEA7gzRow6qXBwRVfxt4Ov/CN6kN23mwy8wzqhCvwCfUAgkjGc/LnABBIBp23gJL3SjPb6paR3eQ5Sa4Xy0jCneS6bgfmIAIOMDJOTheIrrNH8Svb28YDRQ3MlxtRvLAjhQL8vQ5wGYZ65AOc9DzurXrajqVzeuFDTyFyAoGM/QAZ9Tjk81MW3uF79CrRRRVAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABXUeFfEQ0WzuYoLa2a+lU/ZbgxJ5kbnC8OQSBgk4OB8n+0a5epLYQm5iFyzLCXHmMg+YLnkj3xSewM9u+CviRL1tW/tHy4b2eSP/SWuNomOw/KEJ5b5XbI9ccAKKxvjxqtvcz6bYo5kdYluY3REMbo+4ZDfeH3VOAcEHnkCuY8NSaHaa1cWc2oXtnNHJcR2GoLcK1vGzKUV2AUEcY+cHsDwBmuZ1e+u7+9eS9neZkyibpN4RQThVOT8ozxg4pJ9hJ9B/wBnddNie7lWGFi8lum3LykkKSB2UFcZOOQcZIOKFSTiMOBEzsoRc7xghsDcPpnNR00MKKKt6ZaxXlyI7i5FvHgkv5Zcj8B2HUnsATycAsCpRXeNZeG7m80vwyk6xSRXiW95fMjRGYbnJxgMMjdsBYcHbyVGV9l8T+HtDfQp4202DCYKLwMNsWIKOQPuqigZHKqQVYBwIFqeJeCNYh0+KOFoIXYyGVt5L4UEMWx0QAxpz14BIIC4oeO7TT4NShuNLFvFFcxCRraEP+5f+IHPHXOAMYHYDBOHDFdRSzom+KaNSkicq/JClcdc84I+tNuxco4ju1kRlAwkilcDAA4+gH5VKWu4XexBRRRVAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBLdQfZ5VQOr5jR8r/ALShsfUZx+FWYobS91W0t0lFrbymGOSaUjEZIUO56cZ3Hr0qoxHlKoClskluc+gH6Z49a1dQstPsprPaZ3hmsPMYswOZtrr8uAPlEi475AznmkI6fw9pmn6tbava3MaXVxc3EhstRcGISOFcK2M5C5O7GOpwc4AHBSxyQyvFMjRyIxV0cYKkdQR2NaegX8Wmyz3EvzZj8sIpIY7iMkduAD165x34f4tuYLvW5p4FKyMB9oG0BfNHDbcAZBwCSR1J69Sk3ezBPoY9AOM9OfaiiqGbFlaGOXSr66ks4oZ3cq9zudGZDnMgCscEkDGOR1wDmuz8aeK9di0//hH/ABDdR3sV5aCV7u32kSkO5iaIrgFCQgbIycHHPJ82LuYxGWYopLBc8AnGT+g/Kpw+/TWR5pD5cymKIt8o3A7yB6/Kn5VNn1FYSF5Le2eVFlRpSY1mU4Xbj516dSGXOD0JBzuqvXSaDo9hd3+nwXl6fKntWmkES+Z5bFyu0j+AlQCCc8lTyCKz/EmjnQ9T+x+ck6+VG4kQghsqCfoN2QM4OAD3pqwzLoop0QRpEWR9iFgGYDO0euO9MBtFdvbp4Z8NR3UsrvrM08LwJFPaJH9nfCtllLEg5IGQQR8w5Ocd78IPDGg3vhv+0p7W2uZZZpAY2lErxghk2vwNvyMflxzncScqEAWp43ogsRcu+prvt1Tld+3JJHpye/TocE5GQd7xVo+kpY/b9JLoyiNZITkqoACkghMEkkZLMuCDwSwAm+KGj2Wn+MfsWkxiPfHGHjLRKokIAyAuNgI2khgOSSPlxXMaj9sLyy3jKHklZpE8xdwcnLZXORyO47VL33C5SoooqgCiiigAoqS2i8+5ihzt8xwucE4ycdgT+QJ9jXVXPgaYWRnsr5biVFYvb+Q+/OeFXZuDN644HqR81K6Q0rnI0UUUxBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAWLhpJLa1YxFY0Volk24DkMWPPcjeP0rpbbTk1TR7SJ2WN4tMZoJHwqmQ3UmEJPUsFbaOe+AawxfRPplnp7riOK6eZ22jJDLGMevG0/Xita9tWvfDWjLCZJbsqEt7SJSxcNNcbyAOv3YxUSJexhy3Trp0ViCDFvM7K8Chkc8fK/3ipUKccDPbgGqrMWYsxJJOST3qS6kWW4kePeI84jDtuKqOFBPsMD8KiqygooooAs288cdpPHIgZmZWTK5GQGHqMfez35AyMU6KGJ9PubiUyGcSIsYUjbg53Fv0AHGck9iKdplhJqC3ggjeSSC2afC4wFUgsSSeAF3fjgd6l0C2lvdRjsoI/Na6xGU5wRuBOcEcDGevapYh/nXdnrvlahNKrW8qwXAjfadkWEK8eiritHxHrttq2i2cLwSLdxytIjblKqjFgy8Ackqp6evSs2dv7Nu5ri0u45vMAEb7X/eI2d+MqMjhkOQNwY8YJxl0Ja3Bdwoooqhlmxigl+0C4kZCIWaPahYs45A6jHGeea6jRfEv9neGri30/WdTsr9IGSO3DfuZC0ikuhXG19u8ZYE4xhhgCuPRmU5QkEgjj0IwasWAZNStgLc3DiZP3AUkyHI+XHUk9MVLQmizf38+s6jdaldpAZ2QNL5e2Lc2Am8KMZYsQxA6nJwBnGc6Mhw6lSQDgjHBGQfyOa0YHk0+zfz7OEmS5Ch3yJoGiwWC+md4B3AjjpkV2WsOfFuhIGyuoWsRuojJ96VCMFcDqW2jB5PygcZovZjVjzuiiiqA6Dw7oVnfCK6v9SiWAFy9pCrm4kCAsVUbduSB13cZHBPB6Hw74c8PeKPHMOn6KtwdNithLJ5rY8xlxnOSGxyMheSQQNgO5fP1JDA5Iweo7Vs6NfWuk63NNBfXcMSpJHBd28CPIuRgMFYjHGeQQwzxilcR6N8Qvhlo+j6BLfaK12k1sAWVw0nmAKAxOBwON24DAJYHgjZ5ct9dW9tAIHmRAhXkYXdv3cevBXr646Yrd8X+LNR8R3d1p7XMVzYtfCS1cgptwpjGC5yqsMMQeM5PGTnAu7O8+ypqT29wLKVzFDNJznaMBc+w49PlOOhwbj3KVFFFMAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKAMnFWdP8r7QDcKxjCtwvc4O0HkcbsAnPQ0AX7DTTqGmtJZW0kl2rrAsaZJckSOzgeyIBj3zWvqtvHpum6ObmOVZRZXluwK4x8zlGHsfMrR8O6LatD9i1D/SQqNeJDAx+YbHikUE4+cuq+w2kg4B3aOuCWa4t7C9jhtre4Yhp5gSohDCVwRnKnESHHGdx5ABzjKV3Ylnl+CQWPAz6df8/wBaSrU6GS42K65dgMtJ1zg5YnHqOeOlQMjRxqWUjzOVzkZAOM+4yD+RrYoZRRSgAg8gYHQ96ANbw3dy2U9y8cgRLi2mtHHGW8yNwv4bgvP0qvp1neu6y2e5CFldXBx/qk8xvxAAP5U6x0x7u8ktihEhysewjZv54J9MK3TPSuq02xN7o98slzHbQ2w8yIxPv+a5jjVYyT6CPYc/3m54qJSUdRPQ5DUYpbQx2UrSBohveNj8qO2Ccf8AAQmfcfSqdb/iuKaW+a/lOWmdg2QFKkE7AQOM7Nh4yORzmsFRuYDOM9z2qo3tqC21EooJBPHA7UUxklvKYLiKYKrGNwwVxkHBzgj0pYZJbO6WRQySxOCM5UqQfbBB+mDUagE/M20YPOPatuZ5dZ19JrqFIZb+4iwqrgYYjkZ9eOe/PvSYmQX2kCGy0+9geT7LdrhppUYKkm45UHHzADGSAec1UvLlHuHNn58cDBcJLJvIwuMZwMgZIHtWjqLMwub6NJWhZI7VZVk2hZVjUPxj7u0OAvAAYemKxKUdQQUUUVQwqe4dJnVkhVMxogRD/EFALH3JBP1NQVqX2lyQaPpGouYVhvBKilGJfKPyWGOOGGMZ4FJiJLZ5rVba8t4LZzbWbs4lVJBhpHjyyHIJBccEdgcYrV8O60semyWOoSOtlcAwBI2LHGMuQGzg/NkY/iPQjIqpDaaZNpNm+pXpglkQLG0SiSQjzHUhgXACgBeuPvcE7cVjXjsjLbD7tuzAFolR855DYyTg56k1O4lqO1aC2ttRnhsbj7RbK37uX+8P/rdM+1VKKKsoKKKKACiiigAooooAKKKKACiiigAooooAKKKKACr2nzJ/aEckoXaxG7dllyMHc45yMjJ4PfjtVGp7WZonwrOuSCCjEEMOhHPXqM9smgD1HwhM0N9BFDc+ZGLSbT3YN+6kmQtMMDr8oYgMeuSBgdevnYPcz3FxbyMZrZFRlAJiwXDZONuf33TnOD6Vz3hxra+0m1uHmnmME4Z4kRoxuMLK+QT87glgZOpLZ579Jq0c40WdYDAk8sYVTKzBcDLfNtII6YyORkdK45v3rGbPCrxWe4lZ0lLJgSCVQJIXVQCGHQL5jY59Ox4rMlGGyM7D9wldu4dM4/CtrU3NwomuJEPzlegVo+rSKFBCkb5WxySQB0FYsjb3LYxnt6V1osbUkRVGR2bI3YZFJB29+ffJFR0qFQw3/dPB4zj360xnZ6JNb6bpK3a7JzDdRsSA6NjDLuJxgrklQDkkb/lGK72XQ7bT9O1GazsbWKaGYSNGiNho1lEvRhnOzaoGOCOMduS8HWcmqW5tpL0ASo0MpMzlnCDeqjIIwGycoSMEA43c+i6S8MmnCaAvGk22V/NYnYD87AsTnjJGc+lctWVmQ9zyX4gwyf8ACQSh0Cxxom/ABMbMm4qeBngED2A5rlJVKBQzKTtH3SDgHnt9fqOR2ruPiHAo1xwiho7wrOjwKCEZ1QOP9rhUOcr989Qc1xd3MJ2LkYP8IBwoHOeMnBJycDgZOOvG8NkUtivRjjPaigY71Yy9YQ75fMWNStsjSOzDcrEAlcj0OAPeu08O6I1xqMd9c7jHavbpbTPlUIzEIsZAJyGJ/LgVz+gKo8ry2HmqzROHj3IC+VLAq4J4Kjpt59cZ9I8M2MdxpVjF9nnKQsyJO7EeaEfKNtz/AA4xyB93oO2VSVkTJnBeL9NuLOeeAT4sTL9qIX7odwQcjjnKfKACME8jBrk25JOAPYV6x4r0sW3hu0mmZvOYwi53uBvQRSbmYkA7vnOep4HHavMXVYll3HdMxKbVbcAc8nOCGHXof7pBNOm9BrYrSqEfYMHbwSDnJ79CQfqKbSsNpIPUdaStBiqpY4UEnBPHoK0DFLJaTQFpmjtiZiTH8qlgFYk54yyoo9fboa9vH5hdZA3mBAVy4T5fXJ68cAd8+2D32kWRke/tZXia33RmSe5thMpjcvmQdAqgtJIDwduDyOkydhMwf7DltJLW1v7SZJIpJm8woMSjKLGMEEYLkcsMHeO1cvg5IPGOtev6/ZNqEJkllDSQ22yL7K0nmOiu3mqgzyQixDJGCzfTHlMvm3Fw3m43u25wqjKAZ/IAdsjt6VNOV9WJFbB2luMA460lOZsgKM7RzgnPPc/pTa0KCirFjJaRTq97BJPGrA+UkmzeM8gnBIyO4/8ArjQ1a/0/UESLT9EttPHmARutw7NjHzByxwckgg4GBxz2AMersGk6jcoHtrG4mQgENFGXHPTp39q9Kn0H4XWenxfa9ZuPOkQHMNwJpFPzHB8tWUH5gD2+QY6nPCXOmXH2q5tdLtbz9xOZI0ldDKEIBQbV53gfe2n0yBtpNgYjKyMVYFWBwQRgg0lPmWVZGScOJE+Uq+cjHGOfSmUwCiiigAooooA+if8AhHNC/wCgLpv/AICR/wCFH/COaF/0BdN/8BI/8K06K7LIozP+Ec0L/oC6b/4CR/4Uv/COaF/0BdN/8BI/8K0qKLIDN/4RzQv+gLpv/gJH/hR/wjmhf9AXTvwtU/wrSpaLIChJpdktvFHb28UUtuGW1CwqFTJDNjA4Bwc9BzVqJEljzPGjujNGpdQflPLAE9jtFTxxrIWQ5AkAD4GcqOoI78E/nToonis1WRcED+Zz/jXn1af71WFyX1Mn/hHtFZUV9JsWCDage2Q7RknA445JP4mj/hHNC/6Aum/+Akf+FaVLXeopKw7GZ/wjmhf9AXTf/ASP/Cj/AIRzQf8AoC6b/wCAkf8AhWnS0WQFBNJ0yAkw6daROqBkeO2UMdv8OccZ6fiaisIlVzbqiGJQyujnIcg4IPHcYz+NagwGVu6nII6j6UltDtkZo90m4ljJIeW7H/0HNcGKh7yYuS7uZraDo8rYk0iwPzFubdG5PXqP88Uf8I3oP/QE03/wEj/wrSHHanV2U4WjqCVjL/4RvQf+gJpv/gJH/hS/8I3oP/QE03/wEj/wrToq7IZnxaDo8L7odLsYWI27o7aMH26j1xSW3nQXcMQGQuSTuyAQrrjPYblLf8CrQYBlKnOCMHBIP5iq07SCdDHkynAbKkKWxgbeSBwCccferixcNLolxvsElpbNDtmtoSOmGQNuGcgc9ecH8BVYeHdEYLu0fTiqjCg2qHA6+nua0cPvw5ztGDnv/n+tPrahC0ENKxmf8I3oP/QE03/wEj/wo/4RvQf+gJpv/gJH/hWnS1vZDM1dA0SIEpo2ngkYIW1j5B6jp3qC9itNPV1hsrVUwFZIlAMsZU5yMHAAUDPc5IwK2ap6hB5yHeOMFd6g5CnGe/P3QOg4OBk1y4mHu3RMo32K6adBex+bdW0U0bQ7CskasOcHAz67V4xj5fpT30bSZZC76VYyP93c1uhOMbTk49Bj6YqxbJJAjICWViCMjjBJPH4GrCgKMfrUYWL5NQUWjNHhrQcc6JphP/XpH/hS/wDCNaD/ANATTP8AwEj/AMK06WuyyKMv/hG9B/6Ammf+Akf+FB8M6DkH+xNN6f8APpH/AIVpkE9Dz2qveyPDEu2NpFJ4Cpuwc5HfjJ4HB5IrOo1FXE9EULjw/orS4GiaeZZFZtzWaEdRy3Gf155qS20PQGAmttK0wg5AeO2jwe3UComv0muYmKZBYlGzhmPYL6ZG0k9PmrUhc7UBKkkY+XgZx2/WsadVTkyU7srT6FpFywe50uymYDaDLArkD0GRwPaov+Ea0D/oCaZ/4CR/4VpjpS102RoZf/CNaB/0A9M/8BI/8KX/AIRrQP8AoB6Z/wCAkf8AhWpRRZAZf/CNaB/0A9M/8BI/8KP+Ea0D/oB6Z/4CR/4VqUtFkIp5opKK0AWikpaAFopKKAHIzIwZSQR0IpzzSyY81gwHTAxUdLUuKbuMWikopiFzS02loAWpDPKTkyMeMDJ/P+lRUtTKKluO4tFJRVCFopM0UgHUjFyoCtge4z/ntRRSlFSVmMXNFJS09gFopKKBC02VDJDJGDt3qRn0PY06jNJq6sxiIGGdxB54wCAPzJp1JRSUVFWQDqKSimIWmuiyAh1BBUqcjOQeo+lLS0NXApx6bElw8+9yznLDPH5f59OnFXFUKMKMUUVEacYfChi0tJRVgLRSUUALS02loEU80Vwn/C1NC/59NR/79x//ABdH/C1NC/59NS/79x//ABdHPHuB3dLXB/8AC1NC/wCfTUv+/cf/AMXS/wDC1NC/59NS/wC/cf8A8XRzx7gd3RXCf8LU0L/n01L/AL9x/wDxdH/C1dC/59NS/wC/cf8A8XRzx7gd5RXB/wDC1dC/59NS/wC/cf8A8XR/wtXQv+fTUv8Av3H/APF0c8e4HeUVwf8AwtXQv+fTUv8Av3H/APF0v/C1dC/59NS/79x//F0c8e4HeUVwf/C1dC/59NS/79x//F0f8LV0L/n01L/v3H/8XRzx7gd7RXBf8LW0L/n01L/v3H/8XS/8LW0L/n01L/v3H/8AF0c8e4HeUVwf/C1tC/59NS/79R//ABdH/C1tC/59NS/79x//ABdLnj3A72iuC/4WtoX/AD6al/37j/8Ai6P+FraF/wA+mpf9+o//AIujnj3A72jNcF/wtbQv+fTUv+/Uf/xdH/C19C/59NS/79R//F0c8e4HfUVwX/C19B/59NS/79R//F0f8LX0L/n01L/v1H/8XRzx7gd7S1wP/C19B/59NS/79R//ABdH/C19B/59NS/79R//ABdHPHuB31FcD/wtfQf+fTUv+/Uf/wAXR/wtfQf+fTUv+/Uf/wAXRzx7gd9miuC/4WxoP/PpqX/fqP8A+Lo/4WxoP/PpqX/fqP8A+Lo549wO+orgf+FsaD/z6al/36j/APi6P+FsaD/z6al/36j/APi6XPHuB31FcD/wtjQf+fTUv+/Uf/xdH/C2NB/59NS/79R//F0c8e4Hf0VwH/C2NB/59NS/79R//F0v/C2dB/59NS/79R//ABdHPHuB39FcB/wtnQf+fTU/+/Uf/wAXR/wtnQf+fTUv+/Uf/wAXRzx7gd/RXAf8LZ0H/n01P/v1H/8AF0f8LZ0H/n01P/v1H/8AF0c8e4HoFFcB/wALZ0H/AJ9NT/79R/8AxdH/AAtnQP8An01P/v1H/wDF0c8e4HjG2jbTqK5yRu2jbTqKAG7aNtOooAbto206igBu2jbTqKAG7aNtOooAbto206igBu2jbTqKAG7aNtOooAbto206igBu2jbTqKAG7aNtOooAbto206igBu2jbTqKAG7aNtOooAbto206igBu2jbTqKAG7aNtOooAbto206igBu2jbTqKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==",Lg={level:Jc,activeElement:Wc,markConfig:Vc,col1Config:Xc,col2Config:Yc,sceneConfig:Zc,bindings:qc,markLabelConfig:_c,colLabelConfig:$c,decorations:eu,layers:tu,activeDataset:ou,colorMode:iu,colorGradient:nu,colorTint:su,thumbnail:ru},Qg=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:ou,activeElement:Wc,bindings:qc,col1Config:Xc,col2Config:Yc,colLabelConfig:$c,colorGradient:nu,colorMode:iu,colorTint:su,decorations:eu,default:Lg,layers:tu,level:Jc,markConfig:Vc,markLabelConfig:_c,sceneConfig:Zc,thumbnail:ru},Symbol.toStringTag,{value:"Module"})),au=2,lu="scene",cu={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:2.3,y:2.415,z:2.415},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/low_poly_factory.glb",customModelHasMat:!0,customModelName:"low_poly_factory"},uu={arrangement:"surface",color:"#5E5CE6",alignCount:12,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10,surfaceTargetId:"dec_1784810582055"},Au={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},du={background:"dark",hdriPreset:"night",focalLength:41,envRotation:130},fu={markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:"numerical"},pu={show:!0,slots:{top:"categorical",bottom:"numerical",left:null,right:null}},hu={show:!0,slots:{top:null,bottom:null,left:null,right:null}},mu=[{id:"dec_1784810582055",shape:"custom",material:"original",color:"#888888",position:{x:0,y:-1.5,z:0},size:{x:4.4,y:4.4,z:4.4},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/earth%20(2).glb",customModelHasMat:!0,customModelName:"earth (2)"}],gu=[{id:"1",name:"Germany",percentage:572.32,color:"#E63946"},{id:"2",name:"Canada",percentage:533.34,color:"#F4A261"},{id:"3",name:"Turkey",percentage:513.03,color:"#E9C46A"},{id:"4",name:"Brazil",percentage:483.01,color:"#2A9D8F"},{id:"5",name:"South Africa",percentage:439.83,color:"#264653"},{id:"6",name:"Australia",percentage:386.73,color:"#E76F51"},{id:"7",name:"Vietnam",percentage:370.93,color:"#8AB17D"},{id:"8",name:"United Kingdom",percentage:312.91,color:"#457B9D"},{id:"9",name:"France",percentage:264.16,color:"#6A4C93"},{id:"10",name:"Qatar",percentage:125.81,color:"#B5838D"},{id:"11",name:"Greece",percentage:53.36,color:"#1D3557"},{id:"12",name:"Denmark",percentage:24.4,color:"#A8DADC"}],xu="co2Emissions",yu="distinct",bu={from:"#EE6655",to:"#4488EE"},Cu=!1,Fu="data:image/jpeg;base64,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CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAClVipypINJRQBZhusECYEr3K9RXb2sNhf2ELzIl3fCPa+LhVJJfCfNgruK8YY5+XgV5/WzoWo2dnE63Gn/aJg/mrJ55TAA5UgDofXINU6kupKhG+xuTaLZl5t0N9brGCR5YEx6tguDtKAjHJHOCcenNasILS/mgsbtLyBCAlwqFQ4I/unken4Vc8Q6pa3ieRa209vGHWSOI3BeOIFfmUAjJySDnIx0wetYdCnK243CN9hWYsck5NJRRUjCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK3/DGgyapbX90FkkEMflxxQMPMaZ/lTIPRMnJJxwDjvjAqS3nmtplmt5XilQ5V42Ksv0IoAv+JbOHT9ans7eXzVhWNGbcD84Rd/T0bcMdR35rMpXdpHZ3YszHLMTkk+tJQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf//Z",Jg={level:au,activeElement:lu,markConfig:cu,col1Config:uu,col2Config:Au,sceneConfig:du,bindings:fu,markLabelConfig:pu,colLabelConfig:hu,decorations:mu,layers:gu,activeDataset:xu,colorMode:yu,colorGradient:bu,colorTint:Cu,thumbnail:Fu},Wg=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:xu,activeElement:lu,bindings:fu,col1Config:uu,col2Config:Au,colLabelConfig:hu,colorGradient:bu,colorMode:yu,colorTint:Cu,decorations:mu,default:Jg,layers:gu,level:au,markConfig:cu,markLabelConfig:pu,sceneConfig:du,thumbnail:Fu},Symbol.toStringTag,{value:"Module"})),Ku=2,Bu="mark",Ru={shape:"custom",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},scale:5.9,size:{x:.5,y:.5,z:.5},orientation:{x:19,y:93,z:19},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/carbon_dioxide_co2.glb",customModelHasMat:!0,customModelName:"carbon_dioxide_co2"},vu={arrangement:"surface",color:"#5E5CE6",alignCount:12,alignAxis:"X",alignSpacing:6,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10,surfaceTargetId:"dec_1784811104543",surfaceScale:.6,surfaceCount:12},Su={arrangement:"scattering",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"density",scatterCount:6,scatterDimensions:{x:20,y:6,z:8},scatterDensity:.55,pilingCount:10,scatterBoundingVolume:"sphere",scatterEven:!0},Mu={background:"dark",hdriPreset:"city",focalLength:130},wu={markColor:"numerical",markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:"numerical"},Du={show:!0,slots:{top:"numerical",bottom:null,left:"categorical",right:null}},Uu={show:!0,slots:{top:null,bottom:null,left:null,right:null}},Eu=[{id:"dec_1784811104543",shape:"custom",material:"original",color:"#888888",position:{x:0,y:-1.5,z:0},size:{x:8,y:8,z:8},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/airplane_crj-900_cityjet.glb",customModelHasMat:!0,customModelName:"airplane_crj-900_cityjet"}],Tu=[{id:"1",name:"Germany",percentage:572.32,color:"#E63946"},{id:"2",name:"Canada",percentage:533.34,color:"#F4A261"},{id:"3",name:"Turkey",percentage:513.03,color:"#E9C46A"},{id:"4",name:"Brazil",percentage:483.01,color:"#2A9D8F"},{id:"5",name:"South Africa",percentage:439.83,color:"#264653"},{id:"6",name:"Australia",percentage:386.73,color:"#E76F51"},{id:"7",name:"Vietnam",percentage:370.93,color:"#8AB17D"},{id:"8",name:"United Kingdom",percentage:312.91,color:"#457B9D"},{id:"9",name:"France",percentage:264.16,color:"#6A4C93"},{id:"10",name:"Qatar",percentage:125.81,color:"#B5838D"},{id:"11",name:"Greece",percentage:53.36,color:"#1D3557"},{id:"12",name:"Denmark",percentage:24.4,color:"#A8DADC"}],Iu="co2Emissions",ku="continuous",ju={from:"#ffd5d5",to:"#ae0000"},Pu=!1,zu="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCADfAUADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxKiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAop8DrFNHI8STKrBjG5IVwD0OCDg+xB969y8PeAPCXjPwtBqFvo17ok0jEgx3TSFsZGRvLAoT7KePTkgHhVFepat8EtZtUnksNRtLpUGY1kBieTjOMcgHPA5x6kVwmk+H7nUbi6geWGze1yJRdZUhuRtxjOcg59KTdldlQhKcuWKuzIop0iNFI8b43ISpwc8j3ptMlqwUUV1XgHwgnjKfULKK/+y38Fv51ujRlkkAODuI+7yUHQ9ScHFAHK0VtW/hnUh4mh0K+s5oLsybZImKq20ZLFSx2ngEg5we2aZ4ps9NsNVa20lrkwog3G4ILbuehAAIxgg989aLlcr5eboZFFFSW1vNdTpBawyTTOcLHGpZm+gFBJHRTpY5IZXimRo5EYq6OMFSOoI7Gm0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAFrS7e2utQggvr1LG2dsS3Lxs4jXudqgkn0HrjJA5HtifEfwb4O0K10vwisl7yQztE6hScZkkLBS7HrgemMqMV4TRQB9M6brcniBf7T06/SWyWXaYtuSQAM8gkg85xtyePXNUvEXhbTdYupNWtrWKTVooSpjdtqzjHAcdNwAwCeOx6Ar5v8MPFWi+HQ0V/NdRG4P79j80YK7tpUAEjOQDXsNh4m8OX83+hXdpNKBnCThjj6ZosmrGsajU1JdDw64+Gfik3Ujf2VHbW5YsC93EyxJnvhyTgfU12Wn/AtZLaGW819g7xqzJFZ8KxHIDFuR+A+gr0S61DTo/NdorllEe/93I5ViM8YB6/h3rRs9UsXs4ZAxQPGrbXY5XIzg5NOxDs9TwTWvhH4mtNUmttJtH1G1QLsuiY4Q+QCflZ+xyPwqbw54F+Ivh3V7fVNM0gJcQno9zCVcHgqw38gj/6xBwa9nkubTUJ5gGdo45tjYuZFwNgPGD6kfrSEyC3WKC4e24QsYpdxJz83LqTgDp696LMPd7lx7Aa3Y2N/qWlfZNUtwXjjd0d4HIwyh1OCrDj3BBwCOPH/G/wp8S3Wqy6npkdveC8cyPAjLE0JOeDubDcY+YHJOeO9eqLdaksmFvIfJVsAFSzsuOpY8ZJ4wBgZz7VFPrus28bM9lbTE8ItvLznIxnfj36Zo5dQu+WyZ4b/wAKo8b/APQE/wDJuD/4urmkfD3xVomoR6lqljJZWMAYz3EU8TsiEEHAViQecZ7Zz0Fezx+K2F4sE9jcIpjBaQIxRG6kFsBcY7g1VPja2ns5GgurTzVUqzKXZUcn5eqjIwCfrgUmlYulGSqRsup5Bqnw98V65qEup6bYS3dlckPBcTTRRs6YABKswPTvjnqODVeb4S+NY5XRNJSVVYgSJdw7XHqMsDg+4Br3jTfEUV9Ckts8Bh3lcB+QoGPz3D8qmGr3PlAkWwk8tsgSHG/+HnHTrn+tOMdETVbc5NrW58//APCqPG//AEBP/JuD/wCLqS3+EnjSWUJJpaQKQfne6iIHH+yxPt0r3qTVLh2cBoUUNGUZXOSMjfnIx0zj+nWoHv7rzGkSSIsVkUZnYDGSU4xjPPJxkADrT5TO54UPhL41PXSUH1uof/iqTWfAlzpOhO1xYaoNYt/nuUjj82BY8thtyjgbRnO4jKkfT35dVcBlLxA71wSxOVwM+nOc9OOh9qxNQ1m4n1IwwyPZxyxoGvAy7doBIHXruJHGDyD0qWtjWmrqWnQ+a/stx9k+2fZ5fsvmeV5+w7N+M7d3TOOcVFX0T4l8LaN4g00abLqN1blD58dwFUpvy2SwAAYneSejE8565+fLyD7LeT2/nRTeTIyebC25HwcblPcHqDQQ1YhooooEFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBpaVr+raTJG9hfSxiPO2NsPHyMH5Gyp69x71rr4/10W0kTyW7yuci4MQDp7ADC4/4DXLUUBc6UePfEw/5ibH6xJ/hWpb/FPX4ERfI0+RlXaXkiYl/c/NjP0Arhq1fDNjYalqf2PUZpoRNGywyRlcLL/Duz1HXgck4FA9Tt9M+KGqXIMc1pb+cCW3wgKAgHoc5Offv0r2DwDeza34ahvtQih3SSOFwvO0HHzcdcg9O2O+a8t0zQNK8KeE9Q1CYw6leyuIrjzE2i3ty2FKg9WLBMsMldwAxjcYNQ+L9za6Fb6X4asYLGSNcPcKi7V+Yn5ExjJGCWPctx0NRd852yUVg1or83z2/I9e8U+J/D/hW287VpokkK5jt0UNLJ16L6cYycD3rxPxX8V77WZJobLTbK3sSCqLNEJJCPUnpnvjGB71wN9e3OoXct3fTyT3ErbnlkbLMfrUFWcKdjYj8T6vEpWKeJFPULaxAH/wAdqNvEOqE5+0ID6rBGP5LWXRRYfM+5p/8ACQat/wA/sh+oB/pSjxDqYH+ujJz1aBCf5Vl0UrIfNLua58TasU2G4jK+ht48f+g10b+Po/Ptzb2P2aKOJlZISFAY7cNj+LADDBxndng81wtFFhqpJJrubfiTxRqPiKdXu2SKNUVPIgBSM4JOducZ56/SsSiimS3cKKKKBBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//2Q==",Vg={level:Ku,activeElement:Bu,markConfig:Ru,col1Config:vu,col2Config:Su,sceneConfig:Mu,bindings:wu,markLabelConfig:Du,colLabelConfig:Uu,decorations:Eu,layers:Tu,activeDataset:Iu,colorMode:ku,colorGradient:ju,colorTint:Pu,thumbnail:zu},Xg=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:Iu,activeElement:Bu,bindings:wu,col1Config:vu,col2Config:Su,colLabelConfig:Uu,colorGradient:ju,colorMode:ku,colorTint:Pu,decorations:Eu,default:Vg,layers:Tu,level:Ku,markConfig:Ru,markLabelConfig:Du,sceneConfig:Mu,thumbnail:zu},Symbol.toStringTag,{value:"Module"})),Hu=2,Ou="mark",Gu={shape:"custom",material:"original",color:"#8000ff",position:{x:0,y:0,z:0},scale:1,size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/liquid_landscape_1.glb",customModelHasMat:!0,customModelName:"liquid_landscape_1"},Nu={arrangement:"adjacent",color:"#5E5CE6",alignCount:6,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:.5,y:1,z:1},scatterDensity:1,pilingCount:10,surfaceTargetId:"dec_1784811548358",adjacentShowGrid:!0},Lu={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Qu={background:"dark",hdriPreset:"city",focalLength:130},Ju={markColor:"numerical",markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:"numerical",markSizeZ:null,markScale:null},Wu={show:!0,slots:{top:"numerical",bottom:null,left:null,right:"categorical"}},Vu={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Xu=[{id:"dec_1784811548358",shape:"custom",material:"original",color:"#888888",position:{x:0,y:-.4,z:0},size:{x:1.1,y:1.1,z:1.1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/fly_agaric_mushroom.glb",customModelHasMat:!0,customModelName:"fly_agaric_mushroom"}],Yu=[{id:"1",name:"Death cap (Amanita phalloides)",percentage:10,color:"#7C8C4E"},{id:"2",name:"Destroying angel (Amanita virosa)",percentage:10,color:"#F0ECE0"},{id:"3",name:"Funeral bell (Galerina marginata)",percentage:9,color:"#6B4E31"},{id:"4",name:"Deadly webcap (Cortinarius rubellus)",percentage:8,color:"#A0522D"},{id:"5",name:"False morel (Gyromitra esculenta)",percentage:6,color:"#8B4A2F"},{id:"6",name:"Panther cap (Amanita pantherina)",percentage:5,color:"#C2A878"}],Zu="mushroomToxicity",qu="continuous",_u={from:"#dab9ff",to:"#66009d"},$u=!1,eA="data:image/jpeg;base64,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NYald2TkM1vM8RI7lWI/pX08n3QQOuK+c/G9rJaeLtXjmADNdPKMHPyud6/owp0hTMSiiitjMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDp/htE8njGxKY/diRjn02MP6ive1RmQsq5PtXgXw4d08Y2AjbBYSA+48tjj9K96tr1o0IljyucArxisKvxGsNhzNL5iqkH/At3Arwf4oKV8c6kCcn91n/AL9JXvMl/kHyEJfHyjtXgnxL83/hNtR8/wD1h8osPT90lFLcU9jmKKKK3MwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKALWlXh0/UrW7UuPJlVjsOCRnkZ9xkfjXvel65Bd2kc0QSaMgOsmcEj+n/wCuvnqr+l6ze6U2bSXCE5KNyCf6fhWdSHNsXCVtz6Dm1ZbWB5RHHEBnLsRivBPFurf234hvL8MWSRgqEk8qoCg89M4zj3pNT8RalqSGOecrEeqJkBvrk5/DpWTRCDjuEpJ7BRRRWhAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf//Z",Yg={level:Hu,activeElement:Ou,markConfig:Gu,col1Config:Nu,col2Config:Lu,sceneConfig:Qu,bindings:Ju,markLabelConfig:Wu,colLabelConfig:Vu,decorations:Xu,layers:Yu,activeDataset:Zu,colorMode:qu,colorGradient:_u,colorTint:$u,thumbnail:eA},Zg=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:Zu,activeElement:Ou,bindings:Ju,col1Config:Nu,col2Config:Lu,colLabelConfig:Vu,colorGradient:_u,colorMode:qu,colorTint:$u,decorations:Xu,default:Yg,layers:Yu,level:Hu,markConfig:Gu,markLabelConfig:Wu,sceneConfig:Qu,thumbnail:eA},Symbol.toStringTag,{value:"Module"})),tA=2,oA="mark",iA={shape:"custom",material:"original",color:"#F06951",position:{x:.9,y:0,z:0},scale:1,size:{x:1,y:1,z:1},orientation:{x:67,y:3,z:23},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/fly_agaric_mushroom.glb",customModelHasMat:!0,customModelName:"fly_agaric_mushroom"},nA={arrangement:"alignment",color:"#5E5CE6",alignCount:6,alignAxis:"X",alignSpacing:2.7,alignAnchor:"center",scatterMode:"count",scatterCount:12,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10,stackingRandomOrient:!0},sA={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},rA={background:"dark",hdriPreset:"city",focalLength:130,sceneTitleShow:!1},aA={markColor:"numerical",markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:"numerical"},lA={show:!0,slots:{top:"numerical",bottom:"categorical",left:null,right:null}},cA={show:!1,slots:{top:null,bottom:null,left:null,right:null}},uA=[],AA=[{id:"1",name:"Death cap (Amanita phalloides)",percentage:10,color:"#7C8C4E"},{id:"2",name:"Destroying angel (Amanita virosa)",percentage:10,color:"#F0ECE0"},{id:"3",name:"Funeral bell (Galerina marginata)",percentage:9,color:"#6B4E31"},{id:"4",name:"Deadly webcap (Cortinarius rubellus)",percentage:8,color:"#A0522D"},{id:"5",name:"False morel (Gyromitra esculenta)",percentage:6,color:"#8B4A2F"},{id:"6",name:"Panther cap (Amanita pantherina)",percentage:5,color:"#C2A878"}],dA="mushroomToxicity",fA="continuous",pA={from:"#f3e1ff",to:"#83318e"},hA=!0,mA="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCADfAUADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxKiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACirmm6bNqEhCMkUScvNJnav5ZJPHQfyzXQWlpo1i4VLSXU5+WSSUlY+DnIjXkjAxgkj9RUuSRrToTqapaHJ0V2l9exoyzT2GmafG+WjjFsm4jJ7bS3YjJAFc3rd/BqF0ktvaxW6pGEIiiWMMeTkqvGecfgKIyv0HUpKC3VzPoooqjEKKv6bouo6oGaxtHkRc7pDhUBGONxwM8jjOa1f+EVitm/4mWsW0SFcoYI3lLfmFH60nJLcuFKc/hRzdFbOtaLbWNqlzZakt1GWCMrwtE4JBPAOQRx1zWNQmnsKUXF2YUUUUyQooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKALltqMttatbpHEQWLBmBJUnHTnHbuDWxoniAiZk1CVysjKiKqqkSZPzOwAHIGOcetc3RScUy/aS0V9jrPGs90qW0TGM2rqQqlFLKykZwSNyjBXoecVydd5qCHWfDrFX3yui3KiP7vmKPmXGD2LgD1xXB1NN6WHUXvXCr+iizN2xvtpVYy0auSFZuODjtjJ9yAPaqFFWyIuzudgdUj1W6htTcysJAEjjt4cpEvpj5QoAHUA8ZqzqVjaWOnSzSXQgnSQNG7x+dvO0kJjoM46n0561w6OyHKMVOCMg44IwR+VdrZRf2z4XSDKyXHlFE2x5Kuh+RR0wSAoz6NWMoqLTOlV5zTWxx09zPcFfPmkk2Dau9ido9B6CoqKK2OUK29N8P+bAt1qVx9kt3XdEFTfJLz2XPAxnk+2Ac1iVfudYu7hizeWrMm12EYy3Od3PQ/TFJ36GlPkTvM3/L0S2h32umecYZMeddyMwP+9tITHYeveqGr6xY3tkYhp1ik3JSS1g8oocjg4xngHqD17GtzSNR/tLT51tFf7VGnlAzybtxKYViTxyc5ByOPSuIuJmuJmlkCBm6iONUX8FUAD8BWcU29TapVXLaMVZkdFFFanKFT2ljd3u/7Haz3GzlvKjL7frjpVzRRZRtJdXojk8kgrDI2A3uR1bHoD9fQ9Na3dzqySC3naCxjO1BDGUiGeSqjjkenuOvUxKdjenRUtZSsc3ceG9YtrP7XNYyCEKGbDKWUYJyyg7gMA9RWVWrq0ktneS20V1HKFyrMiMpByQVO4ZBHfGR7msqqjfqZ1FBP3QooopkBRV2w0m+1CN5baDMKHDSuwRAeONzEDPI461dl8PGPcF1XTpGUE7UaTnA6ZKY/EnHqRScki1TnJXSMWiiimQFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB2Xg+/3WawCQLPbyZjHAO08gjuec5444rmNWWBNSuBaOrQ7yV2DAGedo9h0z3xVSipUbNspyukgoooqiQrqvBlyTDc2pcDawlRcc88Mc/gv51ytT2N5NYXCz27YYcEHkMPQj0qZK6sVCXLK5oeKbGOz1RmgwIZ181VAA2E/eXAAA5BwB2K1kVe1XVJtTkRpVVFQHaq9Oep/l+VUacb21FK19AooopiN/wdceXqEluzuFmj+VR0Lqcgn6Dd+dQ+KrNrfVHuAGMV3mVWPPzH7wzgDOecDoCKztPu3sb2G5TdmNskK20sO4z7jI/GtfxHqllqFtCtuHaRW3bmXG0YIIPuePXpUNNTuaXThYwKKKKszCtXwzdNBrFshaXy5GMZRG4YtwMj0ztP4D0rKpUZkdXRirKcgg8g0mrqw07O5seK7M22pmZVAjuR5gxuPzdGBJ7554/vD6VjV2HiSS0v8ARBdxsAAyvDkgsM8FPy5P+7XH1MHdFTVpaBRRRVkG0Neee5Q3qE2yAhY4jjaNpAVecBc4/D9XeLYhBfpGsMSLs3K0ZbLDpyCcDp/CB155rDrqL1E1HwrbXAwJLVAAqtu6YVgeeCQA3rwPXNQ0otM155Ti02cvRRRVmQVo6ZY20yG41C4MVurbdsYBdzwcc8AY78/Q1nUUmVFpO7VzqdSt9P0y2hd9FiIJK5nuXaRyOeQrrx7heP58tXQPG+peF1mCF57WZy7lizMD8zH/AMeBOf7p5rn6UCqkrtaWCiiiqMwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApyyyLG0auwR8blB4bHTIptFABRRRQAUUUUAW7HUJ7KOeOHYUmXa4dc+vP6n2qpRRRYLhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB/9k=",qg={level:tA,activeElement:oA,markConfig:iA,col1Config:nA,col2Config:sA,sceneConfig:rA,bindings:aA,markLabelConfig:lA,colLabelConfig:cA,decorations:uA,layers:AA,activeDataset:dA,colorMode:fA,colorGradient:pA,colorTint:hA,thumbnail:mA},_g=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:dA,activeElement:oA,bindings:aA,col1Config:nA,col2Config:sA,colLabelConfig:cA,colorGradient:pA,colorMode:fA,colorTint:hA,decorations:uA,default:qg,layers:AA,level:tA,markConfig:iA,markLabelConfig:lA,sceneConfig:rA,thumbnail:mA},Symbol.toStringTag,{value:"Module"})),gA=2,xA="mark",yA={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/cigarette.glb",customModelHasMat:!0,customModelName:"cigarette"},bA={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:.5,alignAnchor:"end",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1},CA={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1},FA={background:"dark",hdriPreset:"city",focalLength:130},KA={markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:"numerical",c2AlignCount:null,markSizeX:null,markSizeY:"numerical",markSizeZ:null,markScale:null},BA={show:!0,slots:{top:"numerical",bottom:"categorical",left:null,right:null}},RA={show:!1,slots:{top:null,bottom:null,left:null,right:null}},vA=[],SA=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],MA="garbageInOcean",wA="distinct",DA={from:"#EE6655",to:"#4488EE"},UA=!1,EA="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCADnAUADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxKiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACitq18L6pcwCSOOMMyhljZ8FgenPQZ54JB4NZd5azWVzJbXMZjmjOGUkHH4jrQNpohooooEFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAddbazbSLMtzNMFL/L1bjk5wRgnrz1x+VY3iO++33cMm8PshCEhcfxMfQevv8AlgDpLHSXW0mAgj84kngfNg8YyPqa5jX7SazvVjnXaxTcBnPG4/4UramkptxsZtFFFMzCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPUrVQJ3OMqxwCuAf05rkPHRLapbsSTm2B5z/ff1rtLdWkOGHHHAOffpXGePY/K1a3UHP+jL2xj5mpsZzdFFFIQV0vhh7SOBRNaQzTST8M7YOABgZ6qOpyPx7VzVb2j6cJxbO0kqK0ZbcpAwdzADn6UMqDs7l3xNFYnTUZbSOC4Uja0UQjBUnocE5PU888fWuUrotcsngjuOJWROCzE4BDAHNc7SQ52voFFFFMgKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA9XsJF3HLMCQck5wOCO/Fcd8QM/21Dlgx+zLyCP7zeldbYJIgJUKfm6dOM+oNcn8QcjWLcHH/HqvQ5/iamxnMUUUUhBXe+G0ZtFsSvP38jJHR2964Ku+8Lljo1ooU4AYZ/4G3saaAm8WBhoF2AOAEJOB/fHHSvO69G8VKP8AhG7tgzcrHwSD/Gvoa85pAFFFFABRV7RtO/tO88gzpAoUszsM46AfqR1wK25fCcC28zJqsfnRrkRFBhuCeWzgdO2frSuUoSexy1FFFMkKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPU9OUOHEoyw67QDz+HNcl8QFC6xBgnBtlIznj5m9a7KzJMTA5AJx15/IiuP+ICbNStgAQPIAGf8AeNNjOXooopCCu68KSqml2wYD+L0/vH/GuFrufCaB9NtucEb+5/vH3poDV8Y4bwzdsGOAE45/vqK8xr0nxSu3wvehs5BQDjH8a+1ebUgCiiigC5pqyu8whkKHy+QByw3LwP0/Kukube/t7RRJdB93zKqwqcjjI6e/T/Gs3waM6jOO/wBnOP8Avpa7m2QqkQlVN4IXHGOvuDQ0XGTR5RRRRQQFFFAGTigAorr08PaEVRvt12wGBJgDOe/GDt9uW+vc87q9lFYXflQXSXMZUMHVSv4EevHqfzyAropwkldlKiiimSFFFFABRRRQAUUUUAFFFFAB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",$g={level:gA,activeElement:xA,markConfig:yA,col1Config:bA,col2Config:CA,sceneConfig:FA,bindings:KA,markLabelConfig:BA,colLabelConfig:RA,decorations:vA,layers:SA,activeDataset:MA,colorMode:wA,colorGradient:DA,colorTint:UA,thumbnail:EA},e0=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:MA,activeElement:xA,bindings:KA,col1Config:bA,col2Config:CA,colLabelConfig:RA,colorGradient:DA,colorMode:wA,colorTint:UA,decorations:vA,default:$g,layers:SA,level:gA,markConfig:yA,markLabelConfig:BA,sceneConfig:FA,thumbnail:EA},Symbol.toStringTag,{value:"Module"})),t0=Object.assign({"./presets/Apple_Scene.json":vg,"./presets/C02_Emissions.json":Mg,"./presets/CO2.json":Dg,"./presets/Garbage in the Ocean.json":Eg,"./presets/Mushroom_Danger_Score.json":Ig,"./presets/Mushrooms.json":jg,"./presets/Orchestra.json":zg,"./presets/apple.json":Og,"./presets/earth_concept.json":Ng,"./presets/flowers.json":Qg,"./presets/scene(2).json":Wg,"./presets/scene(3).json":Xg,"./presets/scene(4).json":Zg,"./presets/scene(5).json":_g,"./presets/smoking.json":e0}),en=Object.entries(t0).map(([o,e])=>{const t=o.replace(/^.*\//,"").replace(/\.json$/,""),n=t.replace(/_/g," ").replace(/\b\w/g,i=>i.toUpperCase());return{id:`preset_${t}`,name:n,createdAt:"",data:e.default}});function TA(o=320){const e=document.querySelector("canvas");if(e)try{const t=e.width||o,n=e.height||o,i=Math.min(1,o/t),r=Math.max(1,Math.round(t*i)),s=Math.max(1,Math.round(n*i)),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");return l?(l.drawImage(e,0,0,r,s),a.toDataURL("image/jpeg",.72)):void 0}catch{return}}function o0(o,e){const t={...e,thumbnail:TA()??e.thumbnail},n=JSON.stringify(t,null,2),i=new Blob([n],{type:"application/json"}),r=URL.createObjectURL(i),s=document.createElement("a");s.href=r,s.download=o.trim().replace(/\s+/g,"_")+".json",s.click(),URL.revokeObjectURL(r)}const wt={padding:"8px 16px",borderRadius:"8px",fontSize:"13px",fontWeight:"500",cursor:"pointer",fontFamily:"inherit",border:"none",transition:"opacity 0.1s"};function IA({onClose:o,children:e}){return c.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999},onClick:o,children:c.jsx("div",{style:{background:"#fff",borderRadius:"14px",width:"340px",maxWidth:"90vw",boxShadow:"0 16px 48px rgba(0,0,0,0.28)",overflow:"hidden",fontFamily:"inherit"},onClick:t=>t.stopPropagation(),children:e})})}function i0({initialName:o,onSave:e,onClose:t}){const[n,i]=R.useState(o);function r(){const s=n.trim();s&&e(s)}return c.jsx(IA,{onClose:t,children:c.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"14px"},children:[c.jsx("div",{style:{fontSize:"15px",fontWeight:"700",color:"#1D1D1F"},children:"Save Scene"}),c.jsx("input",{type:"text",value:n,onChange:s=>i(s.target.value),onKeyDown:s=>{s.key==="Enter"&&r(),s.key==="Escape"&&t()},placeholder:"Scene name…",autoFocus:!0,style:{background:"#F2F2F7",border:"1.5px solid #D1D1D6",borderRadius:"8px",padding:"9px 12px",fontSize:"13px",color:"#1D1D1F",outline:"none",fontFamily:"inherit",width:"100%",boxSizing:"border-box"}}),c.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[c.jsx("button",{onClick:t,style:{...wt,background:"#F2F2F7",color:"#6C6C70"},children:"Cancel"}),c.jsx("button",{onClick:r,disabled:!n.trim(),style:{...wt,background:"#007AFF",color:"#fff",opacity:n.trim()?1:.4},children:"Save"})]})]})})}function n0({children:o}){return c.jsx("div",{style:{padding:"8px 20px 4px",fontSize:"10px",fontWeight:"700",letterSpacing:"0.08em",textTransform:"uppercase",color:"#AEAEB2"},children:o})}function s0({onLoad:o,onClose:e,currentName:t,currentData:n}){const[i,r]=R.useState(null),[s,a]=R.useState(null),[l,A]=R.useState("");function u(f,h){let y;try{y=JSON.parse(f)}catch{A("That is not valid JSON.");return}const g=C=>C&&typeof C=="object"?C:null,x=C=>!!C&&("markConfig"in C||"col1Config"in C||"sceneConfig"in C),m=g(y),p=g(m==null?void 0:m.data),b=x(m)?m:x(p)?p:null;if(!b){A("This JSON doesn’t look like a saved scene.");return}o({id:"import",name:h,createdAt:"",data:b})}function d(f,h){var g;const y=(g=f.data)==null?void 0:g.thumbnail;return c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"11px",padding:"10px 20px",cursor:"pointer",background:i===f.id?"#F8F8FA":"transparent",borderBottom:h?"none":"1px solid #F2F2F7",transition:"background 0.08s"},onClick:()=>o(f),onMouseEnter:()=>r(f.id),onMouseLeave:()=>r(null),children:[c.jsx("div",{style:{width:"62px",height:"44px",flexShrink:0,borderRadius:"6px",overflow:"hidden",background:"#F2F2F7",border:"1px solid #E5E5EA",display:"flex",alignItems:"center",justifyContent:"center"},children:y?c.jsx("img",{src:y,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):c.jsx("span",{style:{fontSize:"15px",color:"#C7C7CC"},children:"▦"})}),c.jsxs("div",{style:{flex:1,minWidth:0},children:[c.jsx("div",{style:{fontSize:"13px",fontWeight:"600",color:"#1D1D1F",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:f.name}),f.createdAt&&c.jsx("div",{style:{fontSize:"10px",color:"#8E8E93",marginTop:"2px"},children:new Date(f.createdAt).toLocaleString()})]})]},f.id)}return c.jsx(IA,{onClose:e,children:c.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[c.jsx("div",{style:{padding:"16px 20px",borderBottom:"1px solid #E5E5EA",fontSize:"15px",fontWeight:"700",color:"#1D1D1F"},children:"Load Scene"}),s===null?c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{maxHeight:"380px",overflowY:"auto"},children:en.length>0?c.jsxs(c.Fragment,{children:[c.jsx(n0,{children:"Presets"}),en.map((f,h)=>d(f,h===en.length-1))]}):c.jsx("div",{style:{padding:"36px 20px",textAlign:"center",color:"#8E8E93",fontSize:"13px"},children:"No scenes yet"})}),c.jsxs("div",{style:{padding:"12px 20px",borderTop:"1px solid #E5E5EA",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px"},children:[c.jsxs("div",{style:{display:"flex",gap:"8px"},children:[c.jsx("button",{onClick:()=>o0(t,n),title:"Export current scene as JSON",style:{...wt,background:"#F2F2F7",color:"#007AFF",padding:"7px 12px"},children:"Export"}),c.jsx("button",{onClick:()=>{A(""),a("")},title:"Load a scene from JSON (paste or file) — e.g. a session from Supabase",style:{...wt,background:"#F2F2F7",color:"#007AFF",padding:"7px 12px"},children:"Import"})]}),c.jsx("button",{onClick:e,style:{...wt,background:"#F2F2F7",color:"#6C6C70"},children:"Close"})]})]}):c.jsxs("div",{style:{padding:"16px 20px",display:"flex",flexDirection:"column",gap:"10px"},children:[c.jsx("div",{style:{fontSize:"12px",color:"#6C6C70",lineHeight:1.4},children:"Paste a session’s JSON."}),c.jsx("textarea",{value:s,onChange:f=>{a(f.target.value),A("")},placeholder:'{ "level": 2, "markConfig": { … }, … }',spellCheck:!1,style:{width:"100%",height:"150px",resize:"vertical",boxSizing:"border-box",border:"1px solid #D1D1D6",borderRadius:"8px",padding:"8px",fontSize:"11px",fontFamily:"monospace",color:"#1D1D1F",outline:"none"}}),l&&c.jsx("div",{style:{fontSize:"11px",color:"#FF3B30"},children:l}),c.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px"},children:[c.jsx("button",{onClick:()=>{a(null),A("")},style:{...wt,background:"#F2F2F7",color:"#6C6C70"},children:"Cancel"}),c.jsx("button",{onClick:()=>u(s,"Imported"),disabled:!s.trim(),style:{...wt,background:s.trim()?"#007AFF":"#C7C7CC",color:"#fff",cursor:s.trim()?"pointer":"default"},children:"Load"})]})]})]})})}const kA="phys_tool_saves";function r0(){try{return JSON.parse(localStorage.getItem(kA)??"[]")}catch{return[]}}function qs(o){localStorage.setItem(kA,JSON.stringify(o))}const a0={VITE_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJycmljbnNocGJkYnd1dm16anpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUxNjE2NjIsImV4cCI6MjEwMDczNzY2Mn0.tB7M_DxnNc1wUJPByjrPMZj7DheCJylAHULZ9JTvWeg",VITE_SUPABASE_URL:"https://brricnshpbdbwuvmzjzc.supabase.co"},Vn=a0,jA=Vn.VITE_SUPABASE_URL,Bn=Vn.VITE_SUPABASE_ANON_KEY,l0=Vn.VITE_STUDY_TABLE||"study_sessions";function PA(){return!jA.includes("YOUR-PROJECT")&&!Bn.includes("YOUR-ANON")}function c0(){const o=new URLSearchParams(window.location.search),e=o.get("pid")||o.get("p");if(e){try{localStorage.setItem("study_pid",e)}catch{}return e}let t=null;try{t=localStorage.getItem("study_pid")}catch{}if(!t){t="P-"+Math.random().toString(36).slice(2,8);try{localStorage.setItem("study_pid",t)}catch{}}return t}function tn(o,e){const t=new Date().toISOString().replace(/[:.]/g,"-"),n={participant:o,savedAt:new Date().toISOString(),data:e},i=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),r=URL.createObjectURL(i),s=document.createElement("a");s.href=r,s.download=`phys-study-${o||"anon"}-${t}.json`,document.body.appendChild(s),s.click(),s.remove(),URL.revokeObjectURL(r)}async function u0(o,e,t=""){if(PA())try{const n=await fetch(`${jA.replace(/\/+$/,"")}/rest/v1/${l0}`,{method:"POST",headers:{"Content-Type":"application/json",apikey:Bn,Authorization:`Bearer ${Bn}`,Prefer:"return=minimal"},body:JSON.stringify({participant:o,label:t,data:e})});if(n.ok)return{ok:!0};const i=await n.text().catch(()=>"");return tn(o,e),{ok:!1,downloaded:!0,error:`HTTP ${n.status} ${i}`.trim()}}catch(n){return tn(o,e),{ok:!1,downloaded:!0,error:n.message}}return tn(o,e),{ok:!1,downloaded:!0,error:"Study backend not configured."}}const A0="/phys_tool/assets/references/";function d0(o){return/^(https?:)?\/\//.test(o)||o.startsWith("/")?o:A0+o}const At={garbageInOcean:{label:"Garbage in the Ocean",categoricalCol:"Garbage Type",numericalCol:"Weight",layers:[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}]},mahler:{label:"Mahler's Symphony No. 8 Orchestra",categoricalCol:"Orchestra Section",numericalCol:"Number of Instruments",layers:[{id:"1",name:"Strings",percentage:80,color:"#C8A882"},{id:"2",name:"Brass",percentage:28,color:"#D4A017"},{id:"3",name:"Woodwinds",percentage:20,color:"#4A7C59"},{id:"4",name:"Percussion",percentage:10,color:"#5C6B7A"},{id:"5",name:"Piano & Harp",percentage:4,color:"#8B7BAB"}],reference:{title:"Mahler's Symphony No. 8 Orchestra",image:"malher.png",link:"https://www.mahlerfoundation.org/mahler/compositions/symphony-no-8/symphony-no-8-orchestration/"}},co2Emissions:{label:"CO₂ Emissions by Country",categoricalCol:"Country",numericalCol:"CO₂ Emissions (Mt)",modelCollection:"CO2",layers:[{id:"1",name:"Germany",percentage:572.32,color:"#E63946"},{id:"2",name:"Canada",percentage:533.34,color:"#F4A261"},{id:"3",name:"Turkey",percentage:513.03,color:"#E9C46A"},{id:"4",name:"Brazil",percentage:483.01,color:"#2A9D8F"},{id:"5",name:"South Africa",percentage:439.83,color:"#264653"},{id:"6",name:"Australia",percentage:386.73,color:"#E76F51"},{id:"7",name:"Vietnam",percentage:370.93,color:"#8AB17D"},{id:"8",name:"United Kingdom",percentage:312.91,color:"#457B9D"},{id:"9",name:"France",percentage:264.16,color:"#6A4C93"},{id:"10",name:"Qatar",percentage:125.81,color:"#B5838D"},{id:"11",name:"Greece",percentage:53.36,color:"#1D3557"},{id:"12",name:"Denmark",percentage:24.4,color:"#A8DADC"}],reference:{title:"Annual CO₂ emissions 2024",image:"co2-emissions.png",link:"https://ourworldindata.org/grapher/annual-co2-emissions-per-country?country=~OWID_WRL&tab=map&time=latest"}},mushroomToxicity:{label:"Mushroom danger score",categoricalCol:"Name",numericalCol:"Danger Score",modelCollection:"mushrooms",layers:[{id:"1",name:"Death cap (Amanita phalloides)",percentage:10,color:"#7C8C4E"},{id:"2",name:"Destroying angel (Amanita virosa)",percentage:10,color:"#F0ECE0"},{id:"3",name:"Funeral bell (Galerina marginata)",percentage:9,color:"#6B4E31"},{id:"4",name:"Deadly webcap (Cortinarius rubellus)",percentage:8,color:"#A0522D"},{id:"5",name:"False morel (Gyromitra esculenta)",percentage:6,color:"#8B4A2F"},{id:"6",name:"Panther cap (Amanita pantherina)",percentage:5,color:"#C2A878"},{id:"7",name:"Fly agaric (Amanita muscaria)",percentage:3,color:"#D62828"},{id:"8",name:"Satan's bolete (Rubroboletus satanas)",percentage:4,color:"#C77B7B"},{id:"9",name:"Jack-o'-lantern (Omphalotus olearius)",percentage:4,color:"#E68A00"},{id:"10",name:"Ivory funnel (Clitocybe dealbata)",percentage:7,color:"#E4DAC4"},{id:"11",name:"Fool's funnel (Clitocybe rivulosa)",percentage:7,color:"#CFC8B8"},{id:"12",name:"The sickener (Russula emetica)",percentage:2,color:"#E0455E"}],reference:{title:"Mushroom Danger Score",image:"mushroom-danger.png",link:"https://namyco.org/interests/toxicology/mushroom-poisoning-syndromes/"}}};function f0({src:o,alt:e}){const[t,n]=R.useState(!0);return R.useEffect(()=>{n(!0)},[o]),t?c.jsx("img",{src:o,alt:e,onError:()=>n(!1),style:{width:"100%",borderRadius:"8px",display:"block",background:"#F2F2F7",border:"1px solid #E5E5EA"}}):null}function p0({datasetKey:o}){var t;const e=(t=At[o])==null?void 0:t.reference;return e?c.jsxs("div",{style:{borderTop:"1px solid #E5E5EA",padding:"14px",flexShrink:0,maxHeight:"46%",overflowY:"auto",display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600"},children:"About this dataset"}),c.jsx("div",{style:{fontSize:"13px",fontWeight:"600",color:"#1D1D1F",lineHeight:1.3},children:e.title}),e.image&&c.jsx(f0,{src:d0(e.image),alt:e.title}),e.link&&c.jsxs("a",{href:e.link,target:"_blank",rel:"noreferrer",style:{fontSize:"11px",color:"#007AFF",textDecoration:"none",wordBreak:"break-all",lineHeight:1.5},children:[e.link," ↗"]})]}):null}function h0({label:o,type:e,varName:t}){const n=`phys-var/${e}`;return c.jsxs("div",{draggable:!0,onDragStart:i=>{i.dataTransfer.setData("phys-var/name",t),i.dataTransfer.setData(n,"1"),i.dataTransfer.effectAllowed="copy"},title:`Drag to bind ${o}`,style:{display:"inline-flex",alignItems:"center",gap:"5px",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"6px 10px",fontSize:"11px",color:"#1D1D1F",fontWeight:"600",cursor:"grab",userSelect:"none",whiteSpace:"nowrap"},children:[c.jsx("span",{style:{fontSize:"10px",color:"#8E8E93",fontWeight:"700"},children:e==="numerical"?"#":"Aa"}),o]})}function m0(o){var e;return((e=At[o])==null?void 0:e.modelCollection)??yo}function g0({layers:o,onChange:e,onDatasetChange:t,selectedDataset:n="garbageInOcean",modelCollection:i=yo,onModelCollectionChange:r}){const s=At[n]??At.garbageInOcean,a=R.useMemo(()=>{var v;const B=((v=At[n])==null?void 0:v.layers)??[],S=o.filter(w=>!B.some(D=>D.id===w.id));return B.length?[...B,...S]:o},[n,o]),l=a.length,A=R.useMemo(()=>new Set(o.map(B=>B.id)),[o]),u=R.useRef(null),[d,f]=R.useState(null),[h,y]=R.useState(null),g=B=>{B.size!==0&&e(a.filter(S=>B.has(S.id)))};function x(B){e(At[B].layers),t==null||t(B),r==null||r(At[B].modelCollection??yo)}const m=B=>g(new Set(a.slice(0,B).map(S=>S.id))),p=(B,S)=>{var M;const v=Math.min(B,S),w=Math.max(B,S),D=new Set;return(M=u.current)==null||M.querySelectorAll("[data-rowid]").forEach(T=>{const E=T.getBoundingClientRect();E.bottom>=v&&E.top<=w&&D.add(T.dataset.rowid)}),D},b=B=>{const S=B.clientY;let v=!1;f(p(S,S));const w=M=>{Math.abs(M.clientY-S)>4&&(v=!0),f(p(S,M.clientY));const T=u.current;if(T){const E=T.getBoundingClientRect();y({top:Math.min(S,M.clientY)-E.top,height:Math.abs(M.clientY-S)})}},D=M=>{if(window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",D),v)g(p(S,M.clientY));else{const T=new Set(A);p(M.clientY,M.clientY).forEach(E=>T.has(E)?T.delete(E):T.add(E)),g(T)}f(null),y(null)};window.addEventListener("mousemove",w),window.addEventListener("mouseup",D),B.preventDefault()},C=d??A,F={padding:"6px 8px",verticalAlign:"middle",fontSize:"12px",color:"#1D1D1F"},K={fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600"};return c.jsxs("div",{style:{padding:"14px 14px 16px",display:"flex",flexDirection:"column",gap:"12px"},children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[c.jsx("span",{style:K,children:"Dataset"}),c.jsx("select",{value:n,onChange:B=>x(B.target.value),style:{background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",fontFamily:"inherit",cursor:"pointer",outline:"none",width:"100%"},children:Object.entries(At).map(([B,S])=>c.jsx("option",{value:B,children:S.label},B))})]}),Ui.length>1&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[c.jsx("span",{style:K,children:"Models"}),c.jsx("select",{value:Ui.includes(i)?i:yo,onChange:B=>r==null?void 0:r(B.target.value),style:{background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",fontFamily:"inherit",cursor:"pointer",outline:"none",width:"100%"},children:Ui.map(B=>c.jsx("option",{value:B,children:Nd(B)},B))})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},children:[c.jsx("span",{style:K,children:"Rows used"}),c.jsxs("span",{style:{fontSize:"12px",color:"#6C6C70",fontWeight:"600"},children:[A.size," / ",l]})]}),c.jsx("input",{type:"range",min:1,max:Math.max(1,l),value:Math.min(A.size||1,l),onChange:B=>m(Number(B.target.value)),style:{width:"100%",accentColor:"#007AFF",cursor:"pointer"}})]}),c.jsxs("div",{ref:u,onMouseDown:b,style:{position:"relative",userSelect:"none",cursor:"crosshair"},children:[h&&c.jsx("div",{style:{position:"absolute",left:0,right:0,top:h.top,height:h.height,background:"rgba(0,122,255,0.12)",border:"1px solid rgba(0,122,255,0.5)",borderRadius:"4px",pointerEvents:"none",zIndex:2}}),c.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[c.jsx("thead",{children:c.jsxs("tr",{style:{borderBottom:"1px solid #E5E5EA"},children:[c.jsx("th",{style:{...F,textAlign:"left",color:"#8E8E93",fontWeight:"500",fontSize:"11px"},children:s.categoricalCol}),c.jsx("th",{style:{...F,textAlign:"right",color:"#8E8E93",fontWeight:"500",fontSize:"11px",width:"60px"},children:s.numericalCol})]})}),c.jsx("tbody",{children:a.map((B,S)=>{const v=C.has(B.id);return c.jsxs("tr",{"data-rowid":B.id,style:{borderBottom:"1px solid #F2F2F7",background:S%2===0?"transparent":"#FAFAFA",opacity:v?1:.32,transition:"opacity 0.1s"},children:[c.jsx("td",{style:F,children:B.name}),c.jsx("td",{style:{...F,textAlign:"right",color:"#6C6C70"},children:B.percentage})]},B.id)})})]})]})]})}const on=110,_s=46;function $s(o,e,t,n){return Array.from({length:o},(i,r)=>{const a=(o===1?e:e-t/2+t/(o-1)*r)*Math.PI/180;return{x:Math.cos(a)*n,y:Math.sin(a)*n}})}const er={position:"fixed",background:"#fff",borderRadius:"14px",boxShadow:"0 6px 28px rgba(0,0,0,0.22)",padding:"12px 14px",zIndex:1002,pointerEvents:"all",minWidth:"150px"},nn={display:"flex",alignItems:"center",gap:"8px",width:"100%",textAlign:"left",background:"#F2F2F7",border:"1px solid #E5E5EA",borderRadius:"8px",padding:"8px 12px",fontSize:"12px",fontWeight:"500",color:"#1D1D1F",cursor:"pointer",fontFamily:"inherit",transition:"background 0.12s"};function tr({children:o}){return c.jsx("div",{style:{fontSize:"10px",color:"#AEAEB2",fontWeight:"700",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"8px"},children:o})}function x0({x:o,y:e,varName:t,varType:n,level:i,col1Arrangement:r,onBind:s,onColorBind:a,onBindLabel:l,onClose:A}){const[u,d]=R.useState("radial"),[f,h]=R.useState("mark");R.useEffect(()=>{function S(v){v.key==="Escape"&&(u!=="radial"?d("radial"):A())}return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[u,A]);const y=[{action:"bind",bindKey:"markColor",label:"Color",icon:"●",section:"mark",varTypes:["numerical","categorical"]},{action:"bind",bindKey:"markGeometry",label:"Geometry",icon:"◆",section:"mark",varTypes:["categorical"]},{action:"bind",bindKey:"markSizeX",label:"Width",icon:"↔",section:"mark",varTypes:["numerical"]},{action:"bind",bindKey:"markSizeY",label:"Height",icon:"↕",section:"mark",varTypes:["numerical"]},{action:"bind",bindKey:"markSizeZ",label:"Depth",icon:"⊙",section:"mark",varTypes:["numerical"]},{action:"bind",bindKey:"markScale",label:"Scale",icon:"⤢",section:"mark",varTypes:["numerical"]},{action:"label",label:"Label",icon:"Aa",section:"mark",varTypes:["numerical","categorical"]},{action:"bind",bindKey:"scatterSize",label:"Scatter - Size",icon:"⊞",section:"collection",varTypes:["numerical"],arrangements:["scattering"],minLevel:2},{action:"bind",bindKey:"scatterCount",label:"Population",icon:"#",section:"collection",varTypes:["numerical"],arrangements:["scattering","stacking","adjacent"],minLevel:2},{action:"label",label:"Label",icon:"Aa",section:"collection",varTypes:["numerical","categorical"],minLevel:2}];function g(S){var v;return!(!S.varTypes.includes(n)||S.minLevel!==void 0&&i<S.minLevel||"arrangements"in S&&S.arrangements!==void 0&&!S.arrangements.includes(r)||"excludeArrangements"in S&&((v=S.excludeArrangements)!=null&&v.includes(r)))}const x=y.filter(S=>S.section==="mark"&&g(S)),m=y.filter(S=>S.section==="collection"&&g(S)),p=x.length>3?150:90,b=$s(x.length,180,p,on),C=$s(m.length,0,70,on),F=[...x.map((S,v)=>({opt:S,pos:b[v]})),...m.map((S,v)=>({opt:S,pos:C[v]}))];function K(S){if(S.action==="bind"&&S.bindKey==="markColor"){h("mark"),d("colorMode");return}if(S.action==="label"){h(S.section),d("labelPos");return}S.action==="bind"&&s(S.bindKey,t),A()}const B=m.length>0;if(u==="colorMode")return c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3},onClick:()=>d("radial")}),c.jsxs("div",{style:{...er,left:o-75,top:e-70},children:[c.jsx(tr,{children:"Color mode"}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[c.jsxs("button",{style:nn,onClick:()=>{a(t,"distinct"),A()},onMouseEnter:S=>S.currentTarget.style.background="#E5E5EA",onMouseLeave:S=>S.currentTarget.style.background="#F2F2F7",children:[c.jsx("span",{style:{fontSize:"14px"},children:"◈"})," Distinct"]}),c.jsxs("button",{style:nn,onClick:()=>{a(t,"continuous"),A()},onMouseEnter:S=>S.currentTarget.style.background="#E5E5EA",onMouseLeave:S=>S.currentTarget.style.background="#F2F2F7",children:[c.jsx("span",{style:{fontSize:"14px"},children:"▬"})," Continuous"]})]})]})]});if(u==="labelPos"){const S={...nn,justifyContent:"center",width:"88px",height:"34px",padding:"0 8px",whiteSpace:"nowrap",flexShrink:0},v=(M,T,E)=>c.jsxs("button",{style:S,onClick:()=>{l(f,t,M),A()},onMouseEnter:j=>j.currentTarget.style.background="#E5E5EA",onMouseLeave:j=>j.currentTarget.style.background="#F2F2F7",children:[T," ",E]},M),w=f==="mark"&&r==="scattering",D=f==="mark"&&r==="surface";return c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3},onClick:()=>d("radial")}),c.jsxs("div",{style:{...er,left:o-100,top:e-110},children:[c.jsx(tr,{children:"Label position"}),c.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:D?v("top","↑","Above"):w?c.jsxs(c.Fragment,{children:[v("top","↑","Top"),v("bottom","↓","Below")]}):c.jsxs(c.Fragment,{children:[v("top","↑","Top"),c.jsxs("div",{style:{display:"flex",gap:"4px"},children:[v("left","←","Left"),v("right","→","Right")]}),v("bottom","↓","Bottom")]})})]})]})}return c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3},onClick:A}),c.jsxs("div",{style:{position:"fixed",left:o,top:e,transform:"translate(-50%, -50%)",width:0,height:0,zIndex:1001,pointerEvents:"none"},children:[B&&c.jsx("div",{style:{position:"absolute",left:0,top:-130,width:"1px",height:(on+20)*2,background:"#E5E5EA",transform:"translateX(-50%)"}}),c.jsx("div",{style:{position:"absolute",left:-8,top:-10,fontSize:"9px",fontWeight:"700",letterSpacing:"0.12em",textTransform:"uppercase",color:"#007AFF",whiteSpace:"nowrap",textAlign:"right",transform:"translateX(-100%)"},children:"Mark"}),B&&c.jsx("div",{style:{position:"absolute",left:8,top:-10,fontSize:"9px",fontWeight:"700",letterSpacing:"0.12em",textTransform:"uppercase",color:"#5E5CE6",whiteSpace:"nowrap"},children:"Collection"}),c.jsx("div",{style:{position:"absolute",width:10,height:10,background:"#1D1D1F",borderRadius:"50%",transform:"translate(-50%, -50%)"}}),F.map(({opt:S,pos:v},w)=>{const D=S.section==="collection",M=D?"#5E5CE6":"#007AFF";return c.jsxs("button",{onClick:()=>K(S),style:{position:"absolute",left:v.x,top:v.y,transform:"translate(-50%, -50%)",width:_s,height:_s,background:"#fff",border:`2px solid ${M}`,borderRadius:"50%",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1px",boxShadow:"0 4px 16px rgba(0,0,0,0.16)",pointerEvents:"all",fontFamily:"inherit"},onMouseEnter:T=>{const E=T.currentTarget;E.style.transform="translate(-50%, -50%) scale(1.13)",E.style.boxShadow="0 6px 20px rgba(0,0,0,0.22)",E.style.background=D?"#F3EBFF":"#EBF3FF"},onMouseLeave:T=>{const E=T.currentTarget;E.style.transform="translate(-50%, -50%)",E.style.boxShadow="0 4px 16px rgba(0,0,0,0.16)",E.style.background="#fff"},children:[c.jsx("span",{style:{fontSize:"14px",color:M,lineHeight:1},children:S.icon}),c.jsx("span",{style:{fontSize:"8px",color:"#6C6C70",fontWeight:"600",lineHeight:1.2,textAlign:"center"},children:S.label})]},w)})]})]})}const y0={markColor:"Color",markGeometry:"Geometry",scatterSize:"Scatter - Size",scatterCount:"Population",c1AlignCount:"Count",c2AlignCount:"Count",markSizeX:"Width",markSizeY:"Height",markSizeZ:"Depth",markScale:"Scale"},or={markColor:"",markGeometry:"",markSizeX:"",markSizeY:"",markSizeZ:"",markScale:"",scatterSize:"",scatterCount:"",c1AlignCount:"Lv2",c2AlignCount:"Lv3"},ir={garbageInOcean:{numerical:"Weight",categorical:"Garbage Type"},mahler:{numerical:"Number of Instruments",categorical:"Orchestra Section"},co2Emissions:{numerical:"CO₂ Emissions (Mt)",categorical:"Country"},mushroomToxicity:{numerical:"Danger Score",categorical:"Name"}},b0={garbageInOcean:"Garbage in the Ocean",mahler:"Mahler's Symphony No. 8 Orchestra",co2Emissions:"CO₂ Emissions by Country",mushroomToxicity:"Mushroom danger score"},nr=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],sr={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},rr={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},ar={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},lr={background:"dark",hdriPreset:"city",focalLength:130},ni={show:!1,slots:{top:[],bottom:[],left:[],right:[]}};function C0(){const[o,e]=R.useState(1),[t,n]=R.useState("mark"),[i,r]=R.useState(nr),[s,a]=R.useState(sr),[l,A]=R.useState(rr),[u,d]=R.useState(ar),[f,h]=R.useState(lr),[y,g]=R.useState("garbageInOcean"),[x,m]=R.useState(yo),p=ir[y]??ir.garbageInOcean,b=[{label:p.numerical,type:"numerical",varName:"numerical"},{label:p.categorical,type:"categorical",varName:"categorical"}],[C,F]=R.useState({markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null}),[K,B]=R.useState(ni),[S,v]=R.useState(ni),[w,D]=R.useState("distinct"),[M,T]=R.useState({from:"#EE6655",to:"#4488EE"}),[E,j]=R.useState(!1),[z,H]=R.useState(void 0),[J,G]=R.useState(0),[O,P]=R.useState([]),[N,V]=R.useState(null),[U,te]=R.useState(!1),[he,Te]=R.useState(null),[Ze,it]=R.useState(null),[Ie,Ri]=R.useState(null),[Xn,Kt]=R.useState("none"),[ke,vi]=R.useState("idle"),[Et,Yn]=R.useState(!1),[nt,Zn]=R.useState(0),Uo=R.useRef(null);function Eo(L,Q){F(q=>{const ae={...q,[L]:Q};return Q!==null&&(L==="markSizeX"||L==="markSizeY"||L==="markSizeZ")&&(L!=="markSizeX"&&(ae.markSizeX=null),L!=="markSizeY"&&(ae.markSizeY=null),L!=="markSizeZ"&&(ae.markSizeZ=null)),ae}),L==="markGeometry"&&Q!==null&&(n("mark"),H("Geometry")),L==="markGeometry"&&Q===null&&a(q=>({...q,categoryShapes:void 0})),Q!==null&&A(q=>({...q,alignCount:i.length})),L==="scatterSize"&&Q!==null&&d(q=>({...q,alignCount:i.length}))}function zA(L,Q){D(Q),Eo("markColor",L),Q==="continuous"&&(n("mark"),H("Material"))}function HA(L,Q,q){const ae=je=>{const Ce=je.slots[q];return Ce.includes(Q)?je:{...je,show:!0,slots:{...je.slots,[q]:[...Ce,Q]}}};L==="mark"?B(ae):v(ae)}function OA(){const L=`dec_${Date.now()}`,Q={id:L,shape:"sphere",material:"plastic",color:"#888888",position:{x:0,y:-1.5,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}};P(q=>[...q,Q]),V(L)}function GA(L){P(Q=>Q.filter(q=>q.id!==L)),V(Q=>Q===L?null:Q)}function qn(L){P(Q=>Q.map(q=>q.id===L.id?L:q))}function NA(L,Q){P(q=>q.map(ae=>ae.id===L?{...ae,name:Q}:ae))}function Si(){return{level:o,activeElement:t,markConfig:s,col1Config:l,col2Config:u,sceneConfig:f,bindings:C,markLabelConfig:K,colLabelConfig:S,decorations:O,layers:i,activeDataset:y,activeModelCollection:x,colorMode:w,colorGradient:M,colorTint:E}}async function LA(){if(ke==="saving")return;vi("saving");const L=c0(),Q=Ie??(y||""),q=await u0(L,Si(),Q),ae=q.ok?"sent":q.downloaded?"downloaded":"error";vi(ae),q.ok||console.warn("[study] submit fell back:",q.error),setTimeout(()=>vi("idle"),3500)}function _n(L){const Q=r0(),q={...Si(),thumbnail:TA()};if(Ze){const Ce=Q.findIndex(_=>_.id===Ze);if(Ce>=0){Q[Ce]={...Q[Ce],name:L,data:q},qs(Q),Ri(L),Kt("none");return}}const ae=`save_${Date.now()}`,je={id:ae,name:L,createdAt:new Date().toISOString(),data:q};qs([...Q,je]),it(ae),Ri(L),Kt("none")}function QA(){Ze&&Ie?_n(Ie):Kt("save")}function JA(L){const Q=L.data;Q.level!=null&&e(Q.level),Q.activeElement!=null&&n(Q.activeElement);const q=Ei(Q.markConfig??sr);if(q.categoryShapes){const $={};for(const[st,to]of Object.entries(q.categoryShapes))$[st]=Ei(to);a({...q,categoryShapes:$})}else a(q);const ae=(Q.decorations??[]).map($=>Ei($)),je=new Set,Ce=$=>{if(!$||$.object)return $;const st=$.surfaceTargetId||$.scatterExclusionId;if(!st)return $;const to=ae.find(XA=>XA.id===st);return to?(je.add(to.id),{...$,object:to,scatterExcludeObject:!!$.scatterExclusionId,surfaceTargetId:null,scatterExclusionId:null}):$};A(Ce(Q.col1Config??rr)),d(Ce(Q.col2Config??ar));const _=Q.sceneConfig??lr,Pe=_.sceneLabelOcclude;h({..._,sceneLabelOcclude:typeof Pe=="boolean"?Pe?"optimized":"off":Pe});const me=$=>$==="garbageType"||$==="section"?"categorical":$==="weight"||$==="count"?"numerical":$,Je=Q.bindings??{};F({markColor:me(Je.markColor??null),markGeometry:me(Je.markGeometry??null),scatterSize:me(Je.scatterSize??null),scatterCount:me(Je.scatterCount??null),c1AlignCount:me(Je.c1AlignCount??null),c2AlignCount:me(Je.c2AlignCount??null),markSizeX:me(Je.markSizeX??null),markSizeY:me(Je.markSizeY??null),markSizeZ:me(Je.markSizeZ??null),markScale:me(Je.markScale??null)});const To=$=>(Array.isArray($)?$:[$]).map(st=>me(st)).filter(st=>st!=null),$n=$=>({...$,slots:{top:To($.slots.top),bottom:To($.slots.bottom),left:To($.slots.left),right:To($.slots.right)}});B(Q.markLabelConfig?$n(Q.markLabelConfig):ni),v(Q.colLabelConfig?$n(Q.colLabelConfig):ni),P(ae.filter($=>!je.has($.id))),r(Q.layers??nr),Q.activeDataset!=null?(g(Q.activeDataset),m(Q.activeModelCollection??m0(Q.activeDataset))):Q.activeModelCollection!=null&&m(Q.activeModelCollection),D(Q.colorMode??"distinct"),T(Q.colorGradient??{from:"#EE6655",to:"#4488EE"}),j(Q.colorTint??!1),it(L.id),Ri(L.name),V(null),Kt("none")}function WA(){o===1&&(e(2),n("collection1")),o===2&&(e(3),n("collection2"))}function VA(){o===3&&(e(2),n("collection1")),o===2&&(e(1),n("mark"))}return c.jsxs("div",{style:{display:"flex",width:"100vw",height:"100vh",background:"#F2F2F7",overflow:"hidden"},children:[c.jsxs("div",{style:{width:"260px",flexShrink:0,borderRight:"1px solid #E5E5EA",background:"#FFFFFF",display:"flex",flexDirection:"column",overflow:"hidden"},children:[c.jsxs("div",{style:{display:"flex",gap:"6px",padding:"8px 10px",borderBottom:"1px solid #E5E5EA",flexShrink:0,flexDirection:"column"},children:[c.jsxs("div",{style:{display:"flex",gap:"6px"},children:[c.jsx("button",{onClick:QA,title:Ie?`Save to "${Ie}"`:"Save scene",style:{flex:1,background:"#F2F2F7",color:"#1D1D1F",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"6px 8px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Ie||"Save"}),c.jsx("button",{onClick:()=>Kt("load"),style:{flex:1,background:"#F2F2F7",color:"#1D1D1F",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"6px 8px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit"},children:"Load"})]}),c.jsx("button",{onClick:()=>{Yn(!0),Zn(0)},disabled:Et,style:{background:"#F2F2F7",color:Et?"#AEAEB2":"#1D1D1F",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"7px 8px",fontSize:"12px",fontWeight:"600",cursor:Et?"default":"pointer",fontFamily:"inherit",width:"100%"},children:Et?"Rendering...":"Render"}),c.jsx("button",{onClick:LA,disabled:ke==="saving",title:PA()?"Submit your work to the study":"Study backend not configured — this will download a JSON file instead",style:{background:ke==="sent"?"#34C759":ke==="error"?"#FF3B30":ke==="downloaded"?"#FF9500":"#007AFF",color:"#fff",border:"none",borderRadius:"7px",padding:"7px 8px",fontSize:"12px",fontWeight:"700",width:"100%",fontFamily:"inherit",cursor:ke==="saving"?"default":"pointer",opacity:ke==="saving"?.75:1,transition:"background 0.15s"},children:ke==="saving"?"Submitting…":ke==="sent"?"✓ Submitted":ke==="downloaded"?"✓ Saved (backup file)":ke==="error"?"Submit failed — retry":"Submit my work"})]}),c.jsx("div",{style:{flex:1,overflowY:"auto",minHeight:0},children:c.jsx(tf,{level:o,activeElement:t,onSelectElement:L=>{n(L),V(null)},onAdvanceLevel:WA,onDowngradeLevel:VA,decorations:O,activeDecorationId:N,onSelectDecoration:V,onAddDecoration:OA,onRemoveDecoration:GA,onRenameDecoration:NA})}),c.jsx(p0,{datasetKey:y})]}),c.jsxs("div",{style:{flex:1,position:"relative",zIndex:0},onDragOver:L=>L.preventDefault(),onDrop:L=>{L.preventDefault();const Q=L.dataTransfer.getData("phys-var/name");if(!Q)return;const q=L.dataTransfer.types.includes("phys-var/numerical")?"numerical":"categorical";Te({x:L.clientX,y:L.clientY,varName:Q,varType:q})},children:[c.jsx(Bg,{level:o,markConfig:s,collection1Config:l,collection2Config:u,sceneConfig:f,layers:i,bindings:C,markLabelConfig:K,colLabelConfig:S,decorations:O,colorMode:w,colorGradient:M,colorTint:E,scatterSeed:J,datasetTitle:b0[y],onSelectElement:L=>{n(L),V(null)},onSelectDecoration:V,onMarkChange:a,onDecorationChange:qn,onCollection1Change:A,onCollection2Change:d,pathTracingActive:Et,onSamplesUpdate:Zn,downloadRenderRef:Uo}),Et&&c.jsxs("div",{style:{position:"absolute",top:"16px",right:"16px",background:"rgba(10,10,10,0.82)",backdropFilter:"blur(14px)",borderRadius:"14px",padding:"18px 20px",color:"#fff",display:"flex",flexDirection:"column",gap:"14px",width:"200px",fontFamily:"inherit",zIndex:10,boxShadow:"0 8px 32px rgba(0,0,0,0.4)"},children:[c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:"10px",fontWeight:"700",letterSpacing:"0.1em",textTransform:"uppercase",opacity:.45,marginBottom:"8px"},children:"Path Tracing"}),c.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"5px"},children:[c.jsx("span",{style:{fontSize:"32px",fontWeight:"700",letterSpacing:"-0.02em",lineHeight:1},children:nt}),c.jsx("span",{style:{fontSize:"11px",opacity:.35},children:"spp"})]})]}),c.jsx("div",{style:{background:"rgba(255,255,255,0.1)",borderRadius:"3px",height:"3px"},children:c.jsx("div",{style:{width:`${Math.min(100,nt/256*100)}%`,height:"100%",background:"#4FC3F7",borderRadius:"3px",transition:"width 0.4s"}})}),c.jsx("div",{style:{fontSize:"11px",opacity:.4,marginTop:"-8px"},children:nt===0?"Building scene BVH…":nt>=256?"Converged":`${256-nt} samples to 256`}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsx("button",{onClick:()=>{var L;return(L=Uo.current)==null?void 0:L.call(Uo)},disabled:nt===0,style:{background:nt>0?"#4FC3F7":"rgba(255,255,255,0.08)",color:"#fff",border:"none",borderRadius:"8px",padding:"9px",fontSize:"12px",fontWeight:"600",cursor:nt>0?"pointer":"default",fontFamily:"inherit"},children:"Download PNG"}),c.jsx("button",{onClick:()=>Yn(!1),style:{background:"rgba(255,255,255,0.08)",color:"#fff",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"9px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit"},children:"Stop"})]})]})]}),c.jsxs("div",{style:{width:"260px",flexShrink:0,borderLeft:"1px solid #E5E5EA",background:"#FFFFFF",display:"flex",flexDirection:"column"},children:[c.jsx("div",{style:{flex:1,overflowY:"auto",minHeight:0},children:c.jsx(df,{activeElement:t,compositionLevel:o,layers:i,markConfig:s,onMarkChange:a,collection1Config:l,onCollection1Change:A,collection2Config:u,onCollection2Change:d,sceneConfig:f,onSceneChange:h,bindings:C,onBind:Eo,markLabelConfig:K,onMarkLabelChange:B,colLabelConfig:S,onColLabelChange:v,activeDecorationId:N,decorations:O,onDecorationChange:qn,colorMode:w,colorGradient:M,onColorGradientChange:T,colorTint:E,onColorTintChange:j,markOpenSection:z,onReseed:()=>G(L=>L+1),models:Ld(x)})}),c.jsxs("div",{style:{borderTop:"1px solid #E5E5EA",padding:"14px 14px 16px",flexShrink:0,maxHeight:"42%",overflowY:"auto"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[c.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600"},children:"Data"}),c.jsx("button",{onClick:()=>te(!0),style:{background:"none",border:"1px solid #D1D1D6",borderRadius:"6px",padding:"3px 8px",fontSize:"11px",color:"#6C6C70",cursor:"pointer",fontFamily:"inherit"},children:"Open Data"})]}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:b.map(L=>{const Q=Object.keys(C).filter(_=>C[_]===L.varName),q=l.arrangement==="scattering",ae=l.arrangement==="surface",je=_=>ae?"Above":q?_==="top"||_==="left"?"Top":"Below":_[0].toUpperCase()+_.slice(1),Ce=[];return["top","bottom","left","right"].forEach(_=>{K.slots[_].includes(L.varName)&&Ce.push({key:`mark-${_}`,label:`Label ${je(_)}`,onRemove:()=>B(Pe=>({...Pe,slots:{...Pe.slots,[_]:Pe.slots[_].filter(me=>me!==L.varName)}}))}),S.slots[_].includes(L.varName)&&Ce.push({key:`col-${_}`,label:`Label ${_[0].toUpperCase()+_.slice(1)}`,onRemove:()=>v(Pe=>({...Pe,slots:{...Pe.slots,[_]:Pe.slots[_].filter(me=>me!==L.varName)}}))})}),c.jsxs("div",{children:[c.jsx(h0,{label:L.label,type:L.type,varName:L.varName}),(Q.length>0||Ce.length>0)&&c.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"6px"},children:[Q.map(_=>c.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"3px",background:"#EBF3FF",border:"1px solid #A8CAFF",borderRadius:"5px",padding:"3px 5px 3px 8px",fontSize:"10px",color:"#007AFF",fontWeight:"600"},children:[or[_]&&c.jsx("span",{style:{color:"#60A0EE",marginRight:"2px",fontWeight:"500"},children:or[_]}),y0[_],c.jsx("button",{onClick:()=>Eo(_,null),style:{background:"none",border:"none",cursor:"pointer",color:"#60A0EE",padding:"0 1px",fontSize:"13px",lineHeight:1,fontFamily:"inherit"},children:"×"})]},_)),Ce.map(_=>c.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"3px",background:"#EBF3FF",border:"1px solid #A8CAFF",borderRadius:"5px",padding:"3px 5px 3px 8px",fontSize:"10px",color:"#007AFF",fontWeight:"600"},children:[_.label,c.jsx("button",{onClick:_.onRemove,style:{background:"none",border:"none",cursor:"pointer",color:"#60A0EE",padding:"0 1px",fontSize:"13px",lineHeight:1,fontFamily:"inherit"},children:"×"})]},_.key))]})]},L.varName)})})]})]}),Xn==="save"&&c.jsx(i0,{initialName:Ie??"",onSave:_n,onClose:()=>Kt("none")}),U&&c.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999},onClick:()=>te(!1),children:c.jsxs("div",{style:{background:"#fff",borderRadius:"14px",width:"340px",maxWidth:"90vw",maxHeight:"80vh",display:"flex",flexDirection:"column",boxShadow:"0 16px 48px rgba(0,0,0,0.28)",overflow:"hidden",fontFamily:"inherit"},onClick:L=>L.stopPropagation(),children:[c.jsxs("div",{style:{padding:"14px 20px",borderBottom:"1px solid #E5E5EA",fontSize:"15px",fontWeight:"700",color:"#1D1D1F",flexShrink:0,display:"flex",justifyContent:"space-between",alignItems:"center"},children:["Data Panel",c.jsx("button",{onClick:()=>te(!1),style:{background:"none",border:"none",fontSize:"18px",color:"#AEAEB2",cursor:"pointer",lineHeight:1,padding:"0 2px"},children:"×"})]}),c.jsx("div",{style:{overflowY:"auto",flex:1},children:c.jsx(g0,{layers:i,onChange:r,onDatasetChange:g,selectedDataset:y,modelCollection:x,onModelCollectionChange:m})})]})}),Xn==="load"&&c.jsx(s0,{onLoad:JA,onClose:()=>Kt("none"),currentName:Ie??"scene",currentData:Si()}),he&&c.jsx(x0,{x:he.x,y:he.y,varName:he.varName,varType:he.varType,level:o,col1Arrangement:l.arrangement,onBind:Eo,onColorBind:zA,onBindLabel:HA,onClose:()=>Te(null)})]})}const sn="https://massager-unshaved-chasing.ngrok-free.dev";function F0(){const o=Jd();return R.useEffect(()=>{o.refresh().fit()},[o]),null}function K0({url:o}){const e=vo(En,o),t=R.useRef([]),n=R.useRef(0);return R.useEffect(()=>{const i=[];if(e.scene.updateWorldMatrix(!0,!0),e.scene.traverse(s=>{s.isMesh&&i.push(s)}),!i.length)return;const r=new I;i.forEach(s=>{const a=new I;s.getWorldPosition(a),r.add(a)}),r.divideScalar(i.length),t.current=i.map(s=>{const a=new I;s.getWorldPosition(a);const l=a.clone().sub(r);return l.length()<.001&&l.set(Math.random()-.5,Math.random()-.5,Math.random()-.5),l.normalize(),{mesh:s,origPos:a.clone(),direction:l}}),n.current=0},[e]),So((i,r)=>{n.current+=r;const s=(Math.sin(n.current*1-Math.PI/2)+1)/2;t.current.forEach(({mesh:a,origPos:l,direction:A})=>{a.position.copy(l).addScaledVector(A,s*1.5)})}),c.jsxs(Qd,{fit:!0,clip:!0,observe:!0,margin:1.4,children:[c.jsx(F0,{}),c.jsx("primitive",{object:e.scene})]})}function B0({data:o,center:e,impulse:t}){const n=R.useRef(null);return R.useEffect(()=>{if(!n.current)return;const i=o.position.clone().sub(e);i.length()<.001&&i.set(Math.random()-.5,.5,Math.random()-.5),i.normalize().multiplyScalar(t),n.current.applyImpulse({x:i.x,y:i.y+t*.3,z:i.z},!0),n.current.applyTorqueImpulse({x:(Math.random()-.5)*t*.3,y:(Math.random()-.5)*t*.3,z:(Math.random()-.5)*t*.3},!0)},[]),c.jsx(Ai,{ref:n,position:o.position.toArray(),quaternion:[o.quaternion.x,o.quaternion.y,o.quaternion.z,o.quaternion.w],colliders:"hull",restitution:.3,friction:.8,linearDamping:.1,angularDamping:.15,children:c.jsx("mesh",{geometry:o.geometry,material:o.material})})}function R0({url:o,impulse:e}){const t=vo(En,o),{fragments:n,center:i}=R.useMemo(()=>{const r=[];t.scene.updateWorldMatrix(!0,!0),t.scene.traverse(a=>{if(!a.isMesh)return;const l=a,A=new I,u=new re;l.getWorldPosition(A),l.getWorldQuaternion(u),r.push({geometry:l.geometry,material:l.material,position:A,quaternion:u})});const s=new I;return r.forEach(a=>s.add(a.position)),r.length&&s.divideScalar(r.length),{fragments:r,center:s}},[t]);return c.jsxs(c.Fragment,{children:[c.jsx(Ai,{type:"fixed",position:[0,-3,0],children:c.jsx(Cr,{args:[15,.1,15]})}),c.jsxs("mesh",{position:[0,-3,0],rotation:[-Math.PI/2,0,0],children:[c.jsx("planeGeometry",{args:[30,30]}),c.jsx("meshStandardMaterial",{color:"#1a1a1a",roughness:.9})]}),n.map((r,s)=>c.jsx(B0,{data:r,center:i,impulse:e},s))]})}function qe({label:o,children:e}){return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[c.jsx("div",{style:{fontSize:11,color:"#888"},children:o}),e]})}function cr({active:o,onClick:e,children:t}){return c.jsx("button",{onClick:e,style:{flex:1,padding:"8px 0",fontSize:12,fontWeight:600,background:o?"#5E5CE6":"#1a1a1a",color:o?"#fff":"#666",border:o?"none":"1px solid #333",borderRadius:6,cursor:"pointer"},children:t})}function v0(){const[o,e]=R.useState(null),[t,n]=R.useState("idle"),[i,r]=R.useState(""),[s,a]=R.useState("exploded"),[l,A]=R.useState(0),[u,d]=R.useState(""),[f,h]=R.useState(8),[y,g]=R.useState(.5),[x,m]=R.useState("random"),[p,b]=R.useState("bisect"),[C,F]=R.useState(30),[K,B]=R.useState(0),[S,v]=R.useState(1.5),w=R.useRef(null),D=R.useCallback(H=>{if(!H.name.endsWith(".glb")&&!H.name.endsWith(".gltf")){r("Please upload a .glb or .gltf file");return}w.current=H,d(H.name),e(null),n("idle"),r("")},[]),M=R.useCallback(H=>{H.preventDefault();const J=H.dataTransfer.files[0];J&&D(J)},[D]),T=R.useCallback(H=>{var G;const J=(G=H.target.files)==null?void 0:G[0];J&&D(J)},[D]),E=R.useCallback(async H=>{if(H==="model"&&!w.current){r("Drop a GLB first");return}n("loading"),r("Blender is running…"),o&&URL.revokeObjectURL(o),e(null);try{let J;const G=`pieces=${f}&cutSpread=${y}&cutStrategy=${x}&adaptivity=${K}&fractureMethod=${p}`;if(H==="sphere")J=await Ti(`${sn}/shatter/sphere?${G}`);else if(H==="cube")J=await Ti(`${sn}/shatter/cube?${G}`);else{const P=new FormData;P.append("model",w.current),P.append("pieces",f.toString()),P.append("cutSpread",y.toString()),P.append("cutStrategy",x),P.append("fractureMethod",p),P.append("voxelDiv",C.toString()),P.append("adaptivity",K.toString()),J=await Ti(`${sn}/shatter`,{method:"POST",body:P})}if(!J.ok){const P=await J.json().catch(()=>({error:J.statusText}));throw new Error(P.error??J.statusText)}const O=await J.blob();e(URL.createObjectURL(O)),n("done"),r("")}catch(J){n("error"),r(J instanceof Error?J.message:"Unknown error")}},[f,y,C,o]);R.useEffect(()=>()=>{o&&URL.revokeObjectURL(o)},[o]);const j={width:"100%",accentColor:"#5E5CE6"},z=t==="loading";return c.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0f0f0f",color:"#e0e0e0"},children:[c.jsxs("div",{style:{width:260,padding:20,display:"flex",flexDirection:"column",gap:16,borderRight:"1px solid #222",overflowY:"auto"},children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[c.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Shatter Lab"}),c.jsxs("div",{style:{display:"flex",gap:12},children:[c.jsx("a",{href:"/deform",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Deform"}),c.jsx("a",{href:"/particles",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Particles"}),c.jsx("a",{href:"/fluid",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Fluid"})]})]}),c.jsx(qe,{label:"View Mode",children:c.jsxs("div",{style:{display:"flex",gap:6},children:[c.jsx(cr,{active:s==="exploded",onClick:()=>a("exploded"),children:"Exploded"}),c.jsx(cr,{active:s==="physics",onClick:()=>a("physics"),children:"Physics"})]})}),c.jsxs(qe,{label:"Model (GLB)",children:[c.jsx("div",{onDrop:M,onDragOver:H=>H.preventDefault(),onClick:()=>document.getElementById("glb-input").click(),style:{border:"2px dashed #333",borderRadius:8,padding:"14px 10px",textAlign:"center",cursor:"pointer",fontSize:12,color:"#555"},children:u||"Drop GLB or click to browse"}),c.jsx("input",{id:"glb-input",type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:T})]}),c.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[c.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Fragment"}),c.jsxs(qe,{label:"Fracture Method",children:[c.jsx("div",{style:{display:"flex",gap:6},children:["bisect","voronoi"].map(H=>c.jsx("button",{onClick:()=>b(H),style:{flex:1,padding:"6px 0",fontSize:11,borderRadius:5,background:p===H?"#2a2a4a":"#1a1a1a",color:p===H?"#9999ff":"#555",border:p===H?"1px solid #5E5CE6":"1px solid #2a2a2a",cursor:"pointer",textTransform:"capitalize"},children:H},H))}),c.jsx("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:p==="voronoi"?"Natural crack patterns. Slower — best ≤ 50 pieces.":"Sequential plane cuts. Fast. Good for large counts."})]}),c.jsx(qe,{label:`Pieces: ${f}`,children:c.jsx("input",{type:"range",min:2,max:500,step:1,value:f,onChange:H=>h(Number(H.target.value)),style:j})}),c.jsxs(qe,{label:`Size Variation: ${y.toFixed(2)}`,children:[c.jsx("input",{type:"range",min:.05,max:1,step:.05,value:y,onChange:H=>g(Number(H.target.value)),style:j}),c.jsxs("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:["0 = equal-sized pieces (cuts through centre)",c.jsx("br",{}),"1 = uneven pieces (cuts placed randomly)"]})]}),c.jsxs(qe,{label:"Cut Strategy",children:[c.jsx("div",{style:{display:"flex",gap:6},children:["random","largest"].map(H=>c.jsx("button",{onClick:()=>m(H),style:{flex:1,padding:"6px 0",fontSize:11,borderRadius:5,background:x===H?"#2a2a4a":"#1a1a1a",color:x===H?"#9999ff":"#555",border:x===H?"1px solid #5E5CE6":"1px solid #2a2a2a",cursor:"pointer"},children:H==="random"?"Random":"Largest First"},H))}),c.jsx("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:"Largest First → more uniform sizes"})]})]}),c.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[c.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Remesh — file uploads only"}),c.jsxs(qe,{label:`Voxel Detail: ${C}`,children:[c.jsx("input",{type:"range",min:10,max:60,step:5,value:C,onChange:H=>F(Number(H.target.value)),style:j}),c.jsx("div",{style:{fontSize:10,color:"#444"},children:"Higher = sharper cuts, slower"})]}),c.jsxs(qe,{label:`Adaptivity: ${K.toFixed(2)}`,children:[c.jsx("input",{type:"range",min:0,max:1,step:.05,value:K,onChange:H=>B(Number(H.target.value)),style:j}),c.jsx("div",{style:{fontSize:10,color:"#444"},children:"Reduces polygons in flat areas"})]})]}),s==="physics"&&c.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[c.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Physics"}),c.jsxs(qe,{label:`Impulse: ${S.toFixed(1)}`,children:[c.jsx("input",{type:"range",min:0,max:5,step:.1,value:S,onChange:H=>v(Number(H.target.value)),style:j}),c.jsx("div",{style:{fontSize:10,color:"#444"},children:"How hard pieces fly apart on start"})]})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[c.jsx("button",{onClick:()=>E("model"),disabled:z,style:{background:z?"#222":"#5E5CE6",color:z?"#555":"#fff",border:"none",borderRadius:8,padding:"11px 0",fontSize:13,fontWeight:600,cursor:z?"wait":"pointer"},children:z?"Running…":"⚡ Shatter Model"}),c.jsxs("div",{style:{display:"flex",gap:8},children:[c.jsx("button",{onClick:()=>E("sphere"),disabled:z,style:{flex:1,background:"#1a1a1a",color:z?"#444":"#aaa",border:"1px solid #2a2a2a",borderRadius:8,padding:"9px 0",fontSize:12,cursor:z?"wait":"pointer"},children:"🔵 Sphere"}),c.jsx("button",{onClick:()=>E("cube"),disabled:z,style:{flex:1,background:"#1a1a1a",color:z?"#444":"#aaa",border:"1px solid #2a2a2a",borderRadius:8,padding:"9px 0",fontSize:12,cursor:z?"wait":"pointer"},children:"◻ Cube"})]}),s==="physics"&&o&&c.jsx("button",{onClick:()=>A(H=>H+1),style:{background:"#1a1a2e",color:"#5E5CE6",border:"1px solid #5E5CE6",borderRadius:8,padding:"9px 0",fontSize:12,cursor:"pointer"},children:"↺ Restart Simulation"})]}),(i||z)&&c.jsx("div",{style:{fontSize:12,padding:10,borderRadius:6,lineHeight:1.5,background:t==="error"?"#2a0f0f":"#111",color:t==="error"?"#ff6b6b":"#666"},children:z?"Blender is running… (10–30 s)":i})]}),c.jsx("div",{style:{flex:1},children:o?c.jsxs(yi,{camera:{position:[0,1,5],fov:50},style:{background:"#111"},children:[c.jsx("ambientLight",{intensity:.5}),c.jsx("directionalLight",{position:[5,8,5],intensity:1.2,castShadow:!0}),c.jsx(Un,{preset:"city"}),s==="exploded"&&c.jsx(R.Suspense,{fallback:null,children:c.jsx(K0,{url:o})}),s==="physics"&&c.jsx(Fr,{gravity:[0,-9.81,0],timeStep:"vary",children:c.jsx(R.Suspense,{fallback:null,children:c.jsx(R0,{url:o,impulse:S})})},l),c.jsx(bi,{})]}):c.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#2a2a2a",fontSize:13},children:z?c.jsxs("div",{style:{textAlign:"center",color:"#444"},children:[c.jsx("div",{style:{fontSize:28,marginBottom:10},children:"⏳"}),"Blender is fracturing…"]}):c.jsxs("div",{style:{textAlign:"center"},children:[c.jsx("div",{style:{fontSize:28,marginBottom:10},children:"💥"}),"Choose a shape and hit Shatter"]})})})]})}const rn={Flag:{pinMode:"flag",gravity:2,windX:.5,windZ:5,windTurb:3,damping:.99,constraintIters:8},Curtain:{pinMode:"curtain",gravity:3,windX:0,windZ:2,windTurb:2,damping:.99,constraintIters:8},Sheet:{pinMode:"sheet",gravity:2.5,windX:.5,windZ:2.5,windTurb:2.5,damping:.99,constraintIters:8},Still:{pinMode:"curtain",gravity:4,windX:0,windZ:0,windTurb:0,damping:.995,constraintIters:12},Hammock:{pinMode:"hammock",gravity:6,windX:0,windZ:.5,windTurb:.5,damping:.995,constraintIters:12}};function S0(o,e,t,n,i){const r=i==="hammock",s=new Float32Array(o*e*3),a=new Float32Array(o*e*2);for(let u=0;u<e;u++)for(let d=0;d<o;d++){const f=u*o+d,h=d/(o-1),y=u/(e-1);r?(s[f*3]=(h-.5)*t,s[f*3+1]=0,s[f*3+2]=(y-.5)*n):(s[f*3]=(h-.5)*t,s[f*3+1]=(.5-y)*n,s[f*3+2]=0),a[f*2]=h,a[f*2+1]=1-y}const l=[];for(let u=0;u<e-1;u++)for(let d=0;d<o-1;d++){const f=u*o+d,h=f+1,y=f+o,g=y+1;l.push(f,y,h,h,y,g)}const A=new Be;return A.setAttribute("position",new ue(s,3)),A.setAttribute("uv",new ue(a,2)),A.setIndex(l),A.computeVertexNormals(),A}function M0(o,e,t,n,i){const r=i==="hammock",s=o*e,a=new Float32Array(s*3),l=new Float32Array(s*3),A=new Uint8Array(s),u=new Float32Array(s*3);for(let g=0;g<e;g++)for(let x=0;x<o;x++){const m=g*o+x,p=x/(o-1),b=g/(e-1);r?(a[m*3]=(p-.5)*t,a[m*3+1]=0,a[m*3+2]=(b-.5)*n):(a[m*3]=(p-.5)*t,a[m*3+1]=(.5-b)*n,a[m*3+2]=0),l[m*3]=a[m*3],l[m*3+1]=a[m*3+1],l[m*3+2]=a[m*3+2]}switch(i){case"flag":for(let g=0;g<e;g++)A[g*o]=1;break;case"curtain":for(let g=0;g<o;g++)A[g]=1;break;case"sheet":A[0]=1,A[o-1]=1;break;case"hammock":A[0]=1,A[o-1]=1,A[(e-1)*o]=1,A[(e-1)*o+o-1]=1;break}for(let g=0;g<s;g++)u[g*3]=a[g*3],u[g*3+1]=a[g*3+1],u[g*3+2]=a[g*3+2];const d=t/(o-1),f=n/(e-1),h=Math.hypot(d,f),y=[];for(let g=0;g<e;g++)for(let x=0;x<o;x++){const m=g*o+x;x<o-1&&y.push({a:m,b:m+1,r:d}),g<e-1&&y.push({a:m,b:m+o,r:f}),x<o-1&&g<e-1&&(y.push({a:m,b:m+o+1,r:h}),y.push({a:m+1,b:m+o,r:h})),x<o-2&&y.push({a:m,b:m+2,r:d*2}),g<e-2&&y.push({a:m,b:m+o*2,r:f*2})}return{pos:a,prev:l,pinned:A,init:u,springs:y,N:o,M:e}}function w0({cols:o,rows:e,cW:t,cH:n,pinMode:i,paramsRef:r,color:s,wireframe:a}){const l=R.useMemo(()=>S0(o,e,t,n,i),[]),A=R.useMemo(()=>M0(o,e,t,n,i),[]),u=R.useRef(null);return So(({clock:d},f)=>{if(!u.current)return;const{gravity:h,windZ:y,windX:g,windTurb:x,damping:m,constraintIters:p}=r.current,{pos:b,prev:C,pinned:F,init:K,springs:B,N:S,M:v}=A,w=d.getElapsedTime(),D=5,M=Math.min(f,.033)/D;for(let E=0;E<D;E++){for(let j=0;j<S*v;j++){if(F[j])continue;const z=j*3,H=b[z],J=b[z+1],G=b[z+2];let O=(H-C[z])*m,P=(J-C[z+1])*m,N=(G-C[z+2])*m;P-=h*M*M;const V=Math.sin(H*.8+w*.9)*Math.cos(G*.5+w*.6)*x,U=Math.sin(G*.7+w*.7)*Math.cos(J*.4+w*.5)*x;O+=(g+V)*M*M,N+=(y+U)*M*M,C[z]=H,C[z+1]=J,C[z+2]=G,b[z]=H+O,b[z+1]=J+P,b[z+2]=G+N,b[z+1]<-3.5&&(b[z+1]=-3.5,C[z+1]=-3.5)}for(let j=0;j<p;j++)for(const{a:z,b:H,r:J}of B){const G=z*3,O=H*3,P=b[O]-b[G],N=b[O+1]-b[G+1],V=b[O+2]-b[G+2],U=Math.sqrt(P*P+N*N+V*V)||1e-6,te=(U-J)/U*.5;F[z]||(b[G]+=P*te,b[G+1]+=N*te,b[G+2]+=V*te),F[H]||(b[O]-=P*te,b[O+1]-=N*te,b[O+2]-=V*te)}for(let j=0;j<S*v;j++)F[j]&&(b[j*3]=K[j*3],b[j*3+1]=K[j*3+1],b[j*3+2]=K[j*3+2])}const T=l.attributes.position;for(let E=0;E<S*v;E++)T.array[E*3]=b[E*3],T.array[E*3+1]=b[E*3+1],T.array[E*3+2]=b[E*3+2];T.needsUpdate=!0,l.computeVertexNormals()}),c.jsx("mesh",{ref:u,geometry:l,castShadow:!0,receiveShadow:!0,children:c.jsx("meshStandardMaterial",{color:s,side:_t,roughness:.8,metalness:0,wireframe:a})})}function D0({cols:o,rows:e,cW:t,cH:n,pinMode:i}){const r=R.useMemo(()=>{const s=o,a=e,l=i==="hammock",A=(u,d)=>{const f=u/(s-1),h=d/(a-1);return l?[(f-.5)*t,0,(h-.5)*n]:[(f-.5)*t,(.5-h)*n,0]};switch(i){case"flag":return Array.from({length:a},(u,d)=>A(0,d));case"curtain":return Array.from({length:s},(u,d)=>A(d,0));case"sheet":return[A(0,0),A(s-1,0)];case"hammock":return[A(0,0),A(s-1,0),A(0,a-1),A(s-1,a-1)]}},[o,e,t,n,i]);return c.jsx(c.Fragment,{children:r.map((s,a)=>c.jsxs("mesh",{position:s,children:[c.jsx("sphereGeometry",{args:[.06,8,8]}),c.jsx("meshStandardMaterial",{color:"#ff4455",emissive:"#ff2233",emissiveIntensity:.6})]},a))})}function uo({label:o,children:e}){return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[c.jsx("div",{style:{fontSize:10,color:"#555",letterSpacing:.4},children:o}),e]})}function U0({active:o,onClick:e,children:t,small:n}){return c.jsx("button",{onClick:e,style:{flex:1,padding:n?"5px 0":"7px 0",fontSize:n?10:11,borderRadius:5,cursor:"pointer",background:o?"#2a2a4a":"#151520",color:o?"#9999ff":"#555",border:o?"1px solid #5E5CE6":"1px solid #222"},children:t})}function ur({on:o,onClick:e,label:t}){return c.jsxs("div",{onClick:e,style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer",userSelect:"none"},children:[c.jsx("div",{style:{width:28,height:16,borderRadius:8,position:"relative",background:o?"#5E5CE6":"#1e1e2a",border:"1px solid #333",transition:"background .2s"},children:c.jsx("div",{style:{position:"absolute",top:2,left:o?11:2,width:10,height:10,borderRadius:"50%",background:o?"#fff":"#444",transition:"left .2s"}})}),c.jsx("span",{style:{fontSize:11,color:o?"#9999ff":"#555"},children:t})]})}const E0=[["Gravity","gravity",0,10,.1],["Wind forward","windZ",-3,10,.1],["Wind sideways","windX",-5,5,.1],["Turbulence","windTurb",0,8,.1],["Damping","damping",.95,1,.001],["Stiffness","constraintIters",1,20,1]];function T0(){const[o,e]=R.useState(22),[t,n]=R.useState(22),[i,r]=R.useState(3),[s,a]=R.useState(3),[l,A]=R.useState("curtain"),[u,d]=R.useState(0),[f,h]=R.useState("#5588cc"),[y,g]=R.useState(!1),[x,m]=R.useState(!0),[p,b]=R.useState(rn.Curtain),C=R.useRef(p);R.useEffect(()=>{C.current=p},[p]);const F=D=>M=>b(T=>({...T,[D]:Number(M.target.value)})),K=D=>{const M=rn[D];A(M.pinMode),b({gravity:M.gravity,windX:M.windX,windZ:M.windZ,windTurb:M.windTurb,damping:M.damping,constraintIters:M.constraintIters}),d(T=>T+1)},B={width:"100%",accentColor:"#5E5CE6"},S={borderTop:"1px solid #1a1a2a",paddingTop:12,display:"flex",flexDirection:"column",gap:8},v={fontSize:10,color:"#444",textTransform:"uppercase",letterSpacing:1},w=`${o}-${t}-${i}-${s}-${l}-${u}`;return c.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0a0a12",color:"#ddd"},children:[c.jsxs("div",{style:{width:268,padding:20,display:"flex",flexDirection:"column",gap:14,borderRight:"1px solid #1a1a2a",overflowY:"auto"},children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[c.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Soft Lab"}),c.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[c.jsx("a",{href:"/shatter",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Shatter"}),c.jsx("a",{href:"/deform",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Deform"}),c.jsx("a",{href:"/particles",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Particles"}),c.jsx("a",{href:"/ripple",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Ripple"}),c.jsx("a",{href:"/jelly",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Jelly"})]})]}),c.jsxs("div",{style:S,children:[c.jsx("div",{style:v,children:"Presets"}),c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:Object.keys(rn).map(D=>c.jsx("button",{onClick:()=>K(D),style:{padding:"5px 10px",fontSize:10,borderRadius:5,cursor:"pointer",background:"#151520",color:"#777",border:"1px solid #222"},children:D},D))}),c.jsx("button",{onClick:()=>d(D=>D+1),style:{padding:"7px",fontSize:11,borderRadius:5,cursor:"pointer",background:"#151520",color:"#555",border:"1px solid #222"},children:"↺ Reset cloth"})]}),c.jsxs("div",{style:S,children:[c.jsx("div",{style:v,children:"Cloth"}),c.jsx(uo,{label:`Resolution: ${o}×${t}`,children:c.jsx("input",{type:"range",min:8,max:40,step:1,value:o,onChange:D=>{const M=Number(D.target.value);e(M),n(M)},style:B})}),c.jsx(uo,{label:`Width: ${i.toFixed(1)}`,children:c.jsx("input",{type:"range",min:1,max:6,step:.1,value:i,onChange:D=>r(Number(D.target.value)),style:B})}),c.jsx(uo,{label:`Height: ${s.toFixed(1)}`,children:c.jsx("input",{type:"range",min:1,max:6,step:.1,value:s,onChange:D=>a(Number(D.target.value)),style:B})})]}),c.jsxs("div",{style:S,children:[c.jsx("div",{style:v,children:"Pin mode"}),c.jsx("div",{style:{display:"flex",gap:5},children:["flag","curtain","sheet","hammock"].map(D=>c.jsx(U0,{small:!0,active:l===D,onClick:()=>{A(D),d(M=>M+1)},children:D[0].toUpperCase()+D.slice(1)},D))})]}),c.jsxs("div",{style:S,children:[c.jsx("div",{style:v,children:"Simulation"}),E0.map(([D,M,T,E,j])=>c.jsx(uo,{label:`${D}: ${M==="constraintIters"?p[M].toFixed(0):M==="damping"?p[M].toFixed(3):p[M].toFixed(2)}`,children:c.jsx("input",{type:"range",min:T,max:E,step:j,value:p[M],onChange:F(M),style:B})},M))]}),c.jsxs("div",{style:S,children:[c.jsx("div",{style:v,children:"Rendering"}),c.jsx(uo,{label:"Color",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[c.jsx("input",{type:"color",value:f,onChange:D=>h(D.target.value),style:{width:32,height:22,border:"none",background:"none",cursor:"pointer",padding:0}}),c.jsx("span",{style:{fontSize:10,color:"#555"},children:f})]})}),c.jsx(ur,{on:y,onClick:()=>g(D=>!D),label:"Wireframe"}),c.jsx(ur,{on:x,onClick:()=>m(D=>!D),label:"Show pins"})]})]}),c.jsxs(yi,{shadows:!0,camera:{position:[0,.5,5.5],fov:45},gl:{antialias:!0,toneMapping:Dn,toneMappingExposure:1},style:{flex:1,background:"#04040c"},children:[c.jsx("ambientLight",{intensity:.35}),c.jsx("directionalLight",{position:[4,8,4],intensity:1.8,castShadow:!0,"shadow-mapSize":[1024,1024]}),c.jsx("pointLight",{position:[-4,1,-2],intensity:.6,color:"#4466ff"}),c.jsx("pointLight",{position:[3,-1,3],intensity:.3,color:"#ff8844"}),c.jsx(bi,{makeDefault:!0,target:[0,0,0]}),c.jsx(w0,{cols:o,rows:t,cW:i,cH:s,pinMode:l,paramsRef:C,color:f,wireframe:y},w),x&&c.jsx(D0,{cols:o,rows:t,cW:i,cH:s,pinMode:l},`pins-${w}`),c.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-3,0],receiveShadow:!0,children:[c.jsx("planeGeometry",{args:[14,14]}),c.jsx("meshStandardMaterial",{color:"#09090f",roughness:.95})]})]})]})}const Y=90,dt=10;function I0({waveSpeed:o,damping:e,disturbAmp:t,modelUrl:n,resetKey:i}){const r=R.useRef(new Float32Array(Y*Y)),s=R.useRef(new Float32Array(Y*Y)),a=R.useRef(null),[l,A]=R.useState(null),u=R.useMemo(()=>{const f=new ct(dt,dt,Y-1,Y-1);return f.rotateX(-Math.PI/2),f},[]);R.useEffect(()=>{r.current.fill(0),s.current.fill(0)},[i]),R.useEffect(()=>{if(!n){A(null);return}new En().load(n,h=>{const y=h.scene,g=new pe().setFromObject(y),x=g.getSize(new I);y.scale.setScalar(.9/Math.max(x.x,x.y,x.z)),g.setFromObject(y),y.position.sub(g.getCenter(new I)),y.position.y=.5;const m=Math.floor(Y/2),p=Math.floor(Y/2),b=8;for(let C=-b;C<=b;C++)for(let F=-b;F<=b;F++){const K=m+F,B=p+C;if(K>=0&&K<Y&&B>=0&&B<Y){const S=Math.sqrt(F*F+C*C);S<=b&&(r.current[B*Y+K]-=.4*(1-S/b))}}A(y)})},[n]);const d=R.useCallback((f,h,y)=>{const g=Math.round((f/dt+.5)*(Y-1)),x=Math.round((h/dt+.5)*(Y-1)),m=4;for(let p=-m;p<=m;p++)for(let b=-m;b<=m;b++){const C=g+b,F=x+p;if(C>=0&&C<Y&&F>=0&&F<Y){const K=Math.sqrt(b*b+p*p);K<=m&&(r.current[F*Y+C]-=y*(1-K/m))}}},[]);return So(()=>{const f=r.current,h=s.current,y=Math.min(o,.49),g=7;for(let p=1;p<Y-1;p++)for(let b=1;b<Y-1;b++){const C=p*Y+b,F=f[(p-1)*Y+b]+f[(p+1)*Y+b]+f[p*Y+b-1]+f[p*Y+b+1]-4*f[C];h[C]=(h[C]+y*F)*e}for(let p=0;p<Y*Y;p++)f[p]+=h[p];for(let p=0;p<Y;p++)for(let b=0;b<Y;b++){const C=Math.min(b,p,Y-1-b,Y-1-p);if(C<g){const F=(C/g)**2,K=Wt.lerp(.75,1,F),B=p*Y+b;f[B]*=K,h[B]*=K}}const x=u.attributes.position;for(let p=0;p<Y;p++)for(let b=0;b<Y;b++)x.setY(p*Y+b,f[p*Y+b]);x.needsUpdate=!0,u.computeVertexNormals();const m=a.current;if(m){const p=Math.round((m.position.x/dt+.5)*(Y-1)),b=Math.round((m.position.z/dt+.5)*(Y-1));if(p>=0&&p<Y&&b>=0&&b<Y){const C=f[b*Y+p];m.position.y=C+.45,m.rotation.x=C*.25,m.rotation.z=C*.15}}}),c.jsxs(c.Fragment,{children:[c.jsx("mesh",{geometry:u,onPointerDown:f=>{f.stopPropagation(),d(f.point.x,f.point.z,t)},onPointerMove:f=>{f.buttons>0&&d(f.point.x,f.point.z,t*.35)},children:c.jsx("meshStandardMaterial",{color:"#0a3060",roughness:.03,metalness:.45,envMapIntensity:3})}),l&&c.jsx("primitive",{ref:a,object:l})]})}function an({label:o,children:e}){return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[c.jsx("div",{style:{fontSize:10,color:"#555",letterSpacing:.4},children:o}),e]})}function k0(){const[o,e]=R.useState(.32),[t,n]=R.useState(.995),[i,r]=R.useState(.4),[s,a]=R.useState(null),[l,A]=R.useState(""),[u,d]=R.useState(0),f=R.useCallback(x=>{!x.name.endsWith(".glb")&&!x.name.endsWith(".gltf")||(s&&URL.revokeObjectURL(s),a(URL.createObjectURL(x)),A(x.name))},[s]),h={width:"100%",accentColor:"#5E5CE6"},y={borderTop:"1px solid #1a1a2a",paddingTop:12,display:"flex",flexDirection:"column",gap:8},g={fontSize:10,color:"#444",textTransform:"uppercase",letterSpacing:1};return c.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0a0a12",color:"#ddd"},children:[c.jsxs("div",{style:{width:268,padding:20,display:"flex",flexDirection:"column",gap:14,borderRight:"1px solid #1a1a2a",overflowY:"auto"},children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[c.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Ripple Lab"}),c.jsx("div",{style:{fontSize:11,color:"#444",lineHeight:1.5},children:"Click or drag on the water to create waves."}),c.jsxs("div",{style:{display:"flex",gap:10,marginTop:4},children:[c.jsx("a",{href:"/soft",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Cloth"}),c.jsx("a",{href:"/jelly",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Jelly"}),c.jsx("a",{href:"/particles",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Particles"})]})]}),c.jsxs("div",{style:y,children:[c.jsx("div",{style:g,children:"Object on water"}),c.jsx("div",{onDrop:x=>{x.preventDefault();const m=x.dataTransfer.files[0];m&&f(m)},onDragOver:x=>x.preventDefault(),onClick:()=>document.getElementById("glb-ripple").click(),style:{border:`2px dashed ${s?"#5E5CE6":"#222"}`,borderRadius:8,padding:"10px 8px",textAlign:"center",cursor:"pointer",fontSize:11,color:s?"#9999ff":"#444"},children:l||"Drop a GLB — it will float"}),c.jsx("input",{id:"glb-ripple",type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:x=>{var p;const m=(p=x.target.files)==null?void 0:p[0];m&&f(m)}}),s&&c.jsx("button",{onClick:()=>{a(null),A("")},style:{padding:"5px",fontSize:10,borderRadius:5,cursor:"pointer",background:"#151520",color:"#666",border:"1px solid #222"},children:"Remove object"})]}),c.jsxs("div",{style:y,children:[c.jsx("div",{style:g,children:"Simulation"}),c.jsx(an,{label:`Wave speed: ${o.toFixed(2)}`,children:c.jsx("input",{type:"range",min:.05,max:.48,step:.01,value:o,onChange:x=>e(Number(x.target.value)),style:h})}),c.jsx(an,{label:`Damping: ${t.toFixed(3)}`,children:c.jsx("input",{type:"range",min:.96,max:.999,step:.001,value:t,onChange:x=>n(Number(x.target.value)),style:h})}),c.jsx(an,{label:`Disturbance: ${i.toFixed(2)}`,children:c.jsx("input",{type:"range",min:.05,max:1.5,step:.05,value:i,onChange:x=>r(Number(x.target.value)),style:h})})]}),c.jsx("div",{style:y,children:c.jsx("button",{onClick:()=>d(x=>x+1),style:{padding:"8px",fontSize:11,borderRadius:5,cursor:"pointer",background:"#151520",color:"#666",border:"1px solid #222"},children:"↺ Clear water"})})]}),c.jsxs(yi,{camera:{position:[0,6,8],fov:45},gl:{antialias:!0,toneMapping:Dn,toneMappingExposure:1.2},style:{flex:1,background:"#04040c"},children:[c.jsx("ambientLight",{intensity:.3}),c.jsx("directionalLight",{position:[5,8,3],intensity:1.5}),c.jsx(Un,{preset:"sunset"}),c.jsx(bi,{makeDefault:!0,target:[0,0,0],maxPolarAngle:Math.PI/2.1}),c.jsx(I0,{waveSpeed:o,damping:t,disturbAmp:i,modelUrl:s,resetKey:u}),c.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-.5,0],children:[c.jsx("planeGeometry",{args:[dt,dt]}),c.jsx("meshStandardMaterial",{color:"#071830",roughness:.9})]})]})]})}const j0="/phys_tool/".replace(/\/$/,""),lt=window.location.pathname.slice(j0.length)||"/",P0=lt==="/lab"?c.jsx(Xd,{}):lt==="/sim"?c.jsx(v0,{}):lt==="/shatter"?c.jsx(Yd,{}):lt==="/deform"?c.jsx(Zd,{}):lt==="/particles"?c.jsx(qd,{}):lt==="/soft"?c.jsx(T0,{}):lt==="/ripple"?c.jsx(k0,{}):lt==="/fluid"?c.jsx(_d,{}):c.jsx(C0,{});Wd.createRoot(document.getElementById("root")).render(c.jsx(Vd.StrictMode,{children:P0}));
