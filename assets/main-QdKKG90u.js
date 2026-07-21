import{r as F,j as c,M as go,V as j,S as co,B as _o,U as Gs,v as Os,a as Ie,b as si,L as ri,c as to,F as ao,d as xe,e as je,C as Z,f as _l,P as $l,D as ec,g as ae,I as tc,Q as Ut,h as oc,O as $o,T as nc,i as ic,k as re,l as sc,m as zs,N as rc,n as ac,o as lc,p as de,q as le,R as nt,s as cc,t as st,u as uc,w as dn,x as dc,y as Me,z as en,A as et,E as fc,G as Ee,H as pc,J as Ti,K as hc,W as Ac,X as mc,Y as gc,Z as oo,_ as ai,$ as Et,a0 as xc,a1 as yc,a2 as bc,a3 as Cc,a4 as vc,a5 as Ls,a6 as Bc,a7 as wi,a8 as Di,a9 as Ki,aa as Ei,ab as Wo,ac as Fc,ad as ue,ae as Ns,af as Sc,ag as Rc,ah as Mc,ai as uo,aj as Tc,ak as li,al as fo,am as Ln,an as Le,ao as Zt,ap as no,aq as Te,ar as fn,as as he,at as Nn,au as wc,av as Ii,aw as Dc,ax as ce,ay as Jn,az as Js,aA as Kc,aB as Qs,aC as jt,aD as Ec,aE as kt,aF as Ic,aG as jc,aH as ci,aI as zo,aJ as Pt,aK as me,aL as kc,aM as Pc,aN as Ws,aO as Vs,aP as $e,aQ as Uc,aR as Hc,aS as Gc,aT as Oc,aU as Xs,aV as ji,aW as fe,aX as zc,aY as Lc,aZ as Vo,a_ as Ys,a$ as tn,b0 as ui,b1 as Zs,b2 as on,b3 as nn,b4 as di,b5 as Nc,b6 as Jc,b7 as pn,b8 as hn,b9 as Qc,ba as fi,bb as Wc,bc as Vc,bd as Xc,be as Yc,bf as Zc,bg as qc,bh as _c,bi as $c,bj as eu}from"./index-Bf8r83tu.js";const tu={mark:{label:"Mark",badge:"L1"},collection1:{label:"Collection",badge:"L2"},collection2:{label:"Collection",badge:"L3"},scene:{label:"Scene",badge:"Env"}},ou={1:["mark","scene"],2:["mark","collection1","scene"],3:["mark","collection1","collection2","scene"]},An={padding:"8px 12px",borderRadius:"10px",fontSize:"12px",fontWeight:"500",cursor:"pointer",fontFamily:"inherit",transition:"border-color 0.15s, color 0.15s",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",width:"100%"};function nu({level:o,activeElement:e,onSelectElement:t,onAdvanceLevel:n,onDowngradeLevel:i,decorations:a,activeDecorationId:s,onSelectDecoration:r,onAddDecoration:l,onRemoveDecoration:d,onRenameDecoration:p}){const u=ou[o],[f,A]=F.useState(null),[b,m]=F.useState(""),g=F.useRef(null);function x(C,v){A(C.id),m(C.name??`Decoration ${v+1}`),setTimeout(()=>{var B;return(B=g.current)==null?void 0:B.select()},0)}function h(){f&&p(f,b.trim()||f),A(null)}function y(){A(null)}return c.jsxs("div",{style:{padding:"14px 14px 14px",display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsx("div",{style:{paddingTop:"12px"},children:c.jsx("div",{style:{fontSize:"16px",color:"#1D1D1F",fontWeight:"700"},children:"Visualization Hierarchy"})}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:u.map(C=>{const v=tu[C],B=C===e&&s===null;return c.jsxs("button",{onClick:()=>t(C),style:{display:"flex",alignItems:"center",gap:"10px",padding:"9px 12px",width:"100%",textAlign:"left",background:B?"#F2F2F7":"#FAFAFA",border:`1.5px solid ${B?"#1D1D1F":"#E5E5EA"}`,borderRadius:"10px",cursor:"pointer",transition:"border-color 0.15s, background 0.15s",fontFamily:"inherit"},children:[c.jsx("div",{style:{flex:1,minWidth:0},children:c.jsx("div",{style:{fontSize:"12px",color:"#1D1D1F",fontWeight:B?"600":"500",lineHeight:1.2},children:v.label})}),c.jsx("span",{style:{fontSize:"9px",letterSpacing:"0.06em",fontWeight:"500",color:B?"#1D1D1F":"#8E8E93",border:`1px solid ${B?"#1D1D1F":"#D1D1D6"}`,borderRadius:"4px",padding:"1px 5px",flexShrink:0,transition:"color 0.15s, border-color 0.15s"},children:v.badge})]},C)})}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px",paddingTop:"2px"},children:[o<3&&c.jsx("button",{onClick:n,style:{...An,background:"transparent",border:"1.5px dashed #C7C7CC",color:"#8E8E93"},children:"+ Add Collection"}),o>1&&c.jsx("button",{onClick:i,style:{...An,background:"transparent",border:"1.5px dashed #C7C7CC",color:"#8E8E93"},children:"− Remove Collection"})]}),c.jsxs("div",{style:{borderTop:"1px solid #E5E5EA",paddingTop:"8px",display:"flex",flexDirection:"column",gap:"5px"},children:[c.jsx("div",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600",marginBottom:"2px"},children:"Decorations"}),a.map((C,v)=>{const B=C.id===s,T=C.id===f,S=C.name??`Decoration ${v+1}`;return c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[c.jsxs("div",{onClick:()=>{T||r(C.id)},onDoubleClick:()=>x(C,v),style:{flex:1,display:"flex",alignItems:"center",gap:"8px",padding:"7px 10px",background:B?"#F2F2F7":"#FAFAFA",border:`1.5px solid ${B?"#1D1D1F":"#E5E5EA"}`,borderRadius:"8px",cursor:T?"default":"pointer",transition:"border-color 0.15s, background 0.15s",minWidth:0},children:[T?c.jsx("input",{ref:g,value:b,onChange:R=>m(R.target.value),onBlur:h,onKeyDown:R=>{R.key==="Enter"&&h(),R.key==="Escape"&&y()},style:{flex:1,border:"none",outline:"none",background:"transparent",fontSize:"12px",color:"#1D1D1F",fontFamily:"inherit",fontWeight:"600",minWidth:0},onClick:R=>R.stopPropagation(),autoFocus:!0}):c.jsx("span",{style:{fontSize:"12px",color:"#1D1D1F",fontWeight:B?"600":"400",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:S}),!T&&c.jsx("span",{style:{fontSize:"9px",color:B?"#1D1D1F":"#8E8E93",border:`1px solid ${B?"#1D1D1F":"#D1D1D6"}`,borderRadius:"4px",padding:"1px 5px",flexShrink:0},children:"Dec"})]}),c.jsx("button",{onClick:()=>d(C.id),title:"Remove decoration",style:{background:"none",border:"none",cursor:"pointer",color:"#AEAEB2",fontSize:"16px",lineHeight:1,padding:"4px 6px",flexShrink:0,fontFamily:"inherit"},children:"×"})]},C.id)}),c.jsx("button",{onClick:l,style:{...An,background:"transparent",border:"1.5px dashed #C7C7CC",color:"#8E8E93"},children:"+ Add Decoration"})]})]})}const ki={weight:{label:"Weight",type:"numerical"},garbageType:{label:"Garbage Type",type:"categorical"},count:{label:"Count",type:"numerical"}};function iu(o){return 2*Math.atan(12/o)*180/Math.PI}const xt="/phys_tool/",De={spatial:`${xt}assets/icons/spatial.png`,shape:`${xt}assets/icons/shape.png`,material:`${xt}assets/icons/material.png`,populations:`${xt}assets/icons/populations.png`,framing:`${xt}assets/icons/framing.png`,labels:`${xt}assets/icons/labels.png`};function su({children:o}){return c.jsx("span",{style:{fontSize:"10px",color:"#8E8E93",textTransform:"uppercase",letterSpacing:"0.07em",fontWeight:"600"},children:o})}function J({label:o,children:e,right:t}){return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsx(su,{children:o}),t]}),e]})}function io({options:o,value:e,onChange:t}){return c.jsx("div",{style:{display:"flex",background:"#EFEFEF",borderRadius:"8px",padding:"2px",gap:"2px"},children:o.map(n=>{const i=e===n.value;return c.jsx("button",{onClick:()=>t(n.value),style:{flex:1,padding:"5px 4px",background:i?"#FFFFFF":"transparent",border:"none",borderRadius:"6px",boxShadow:i?"0 1px 3px rgba(0,0,0,0.12)":"none",color:i?"#1D1D1F":"#6C6C70",cursor:"pointer",fontSize:"12px",fontWeight:i?"600":"400",transition:"all 0.15s",whiteSpace:"nowrap",fontFamily:"inherit"},children:n.label},n.value)})})}const pi={numerical:{label:"Numerical",type:"numerical"},categorical:{label:"Categorical",type:"categorical"},weight:{label:"Weight",type:"numerical"},garbageType:{label:"Garbage Type",type:"categorical"},count:{label:"Count",type:"numerical"},section:{label:"Section",type:"categorical"}};function Xo({children:o,accepts:e,onDrop:t}){const[n,i]=F.useState(!1),a=e==="any"?["phys-var/numerical","phys-var/categorical"]:[`phys-var/${e}`],s=l=>a.some(d=>l.includes(d)),r=e==="categorical"?"#5E5CE6":"#007AFF";return c.jsx("div",{onDragOver:l=>{s(l.dataTransfer.types)&&(l.preventDefault(),i(!0))},onDragLeave:()=>i(!1),onDrop:l=>{s(l.dataTransfer.types)&&(l.preventDefault(),i(!1),t(l.dataTransfer.getData("phys-var/name")))},style:{borderRadius:"8px",outline:n?`2px dashed ${r}`:"2px dashed transparent",outlineOffset:"2px",transition:"outline 0.1s"},children:o})}function lo({label:o,type:e,onClear:t}){return c.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"#EBF3FF",border:"1px solid #A8CAFF",borderRadius:"7px",padding:"6px 10px",fontSize:"12px",color:"#007AFF",fontWeight:"500"},children:[c.jsxs("span",{children:[e==="numerical"?"#":"◈"," ",o]}),c.jsx("button",{onClick:t,style:{background:"none",border:"none",cursor:"pointer",color:"#60A0EE",padding:"0 0 0 2px",fontSize:"14px",lineHeight:1,fontFamily:"inherit"},children:"×"})]})}const ru={top:"↑",bottom:"↓",left:"←",right:"→"};function xo({position:o,slot:e,onBind:t,onClear:n}){const[i,a]=F.useState(!1);if(e!==null){const s=pi[e];return c.jsx(lo,{label:s.label,type:s.type,onClear:n})}return c.jsxs("div",{onDragOver:s=>{s.dataTransfer.types.some(l=>l==="phys-var/numerical"||l==="phys-var/categorical")&&(s.preventDefault(),a(!0))},onDragLeave:()=>a(!1),onDrop:s=>{s.dataTransfer.types.some(l=>l==="phys-var/numerical"||l==="phys-var/categorical")&&(s.preventDefault(),a(!1),t(s.dataTransfer.getData("phys-var/name")))},title:`Drag a variable to the ${o} label`,style:{border:`1.5px dashed ${i?"#007AFF":"#D1D1D6"}`,borderRadius:"7px",padding:"4px 8px",fontSize:"10px",color:i?"#007AFF":"#AEAEB2",textAlign:"center",whiteSpace:"nowrap",background:i?"#EBF3FF":"transparent",transition:"all 0.1s",cursor:"default",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px"},children:[c.jsx("span",{children:ru[o]}),c.jsx("span",{style:{textTransform:"capitalize"},children:o})]})}function qs({config:o,onChange:e}){function t(n,i){e({...o,slots:{...o.slots,[n]:i}})}return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsx("button",{onClick:()=>e({...o,show:!o.show}),style:{alignSelf:"flex-start",background:o.show?"#EBF3FF":"#F2F2F7",border:`1px solid ${o.show?"#A8CAFF":"#D1D1D6"}`,color:o.show?"#007AFF":"#6C6C70",borderRadius:"6px",padding:"6px 14px",fontSize:"12px",fontWeight:o.show?"600":"400",cursor:"pointer",fontFamily:"inherit",transition:"all 0.15s"},children:o.show?"● Visible":"○ Hidden"}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto 1fr",gridTemplateRows:"auto auto auto",gap:"4px",alignItems:"center",justifyItems:"center"},children:[c.jsx("div",{}),c.jsx(xo,{position:"top",slot:o.slots.top,onBind:n=>t("top",n),onClear:()=>t("top",null)}),c.jsx("div",{}),c.jsx(xo,{position:"left",slot:o.slots.left,onBind:n=>t("left",n),onClear:()=>t("left",null)}),c.jsx("div",{style:{width:"18px",height:"18px",background:"#E5E5EA",borderRadius:"4px",flexShrink:0}}),c.jsx(xo,{position:"right",slot:o.slots.right,onBind:n=>t("right",n),onClear:()=>t("right",null)}),c.jsx("div",{}),c.jsx(xo,{position:"bottom",slot:o.slots.bottom,onBind:n=>t("bottom",n),onClear:()=>t("bottom",null)}),c.jsx("div",{})]})]})}function Ke({icon:o,title:e,open:t=!1,onToggle:n,children:i,empty:a=!1}){return c.jsxs("div",{style:{border:"1px solid #E5E5EA",borderRadius:"10px",overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},children:[c.jsxs("button",{onClick:n,style:{display:"flex",alignItems:"center",gap:"9px",padding:"9px 12px",width:"100%",textAlign:"left",background:"#F8F8FA",border:"none",borderBottom:t&&!a?"1px solid #E5E5EA":"none",cursor:"pointer",fontFamily:"inherit",transition:"background 0.1s"},children:[c.jsx("img",{src:o,alt:e,style:{width:"24px",height:"24px",borderRadius:"6px",flexShrink:0,objectFit:"cover"}}),c.jsx("span",{style:{flex:1,fontSize:"12px",fontWeight:"600",color:"#1D1D1F",lineHeight:1},children:e}),c.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",transition:"transform 0.15s",display:"inline-block",transform:t?"rotate(0deg)":"rotate(-90deg)"},children:"▾"})]}),t&&c.jsx("div",{style:{padding:"12px",background:"#FFFFFF",display:"flex",flexDirection:"column",gap:"12px"},children:a?c.jsx("div",{style:{fontSize:"11px",color:"#C7C7CC",textAlign:"center",padding:"8px 0",fontStyle:"italic"},children:"Coming soon"}):i})]})}function hi(o,e){const[t,n]=F.useState(o);return F.useEffect(()=>{e!==void 0&&n(e)},[e]),{isOpen:i=>t===i,toggle:i=>n(a=>a===i?"":i)}}function ht({label:o,value:e,onChange:t,min:n,max:i,step:a=.1,lockable:s=!1,axisBindings:r,onAxisBind:l}){const[d,p]=F.useState(!1),[u,f]=F.useState(null),A=["x","y","z"];function b(g,x){if(d&&e[g]!==0){const h=x/e[g];t({x:g==="x"?x:parseFloat((e.x*h).toFixed(3)),y:g==="y"?x:parseFloat((e.y*h).toFixed(3)),z:g==="z"?x:parseFloat((e.z*h).toFixed(3))})}else t({...e,[g]:x})}const m=s?c.jsx("button",{onClick:g=>{g.stopPropagation(),p(!d)},title:d?"Unlock proportions":"Lock proportions (scale all axes together)",style:{background:d?"#007AFF":"transparent",border:`1px solid ${d?"#007AFF":"#D1D1D6"}`,borderRadius:"4px",padding:"1px 7px",lineHeight:"16px",cursor:"pointer",fontSize:"10px",color:d?"#fff":"#AEAEB2",fontFamily:"inherit",transition:"all 0.12s"},children:"⛓"}):void 0;return c.jsx(J,{label:o,right:m,children:c.jsx("div",{style:{display:"flex",gap:"5px"},children:A.map(g=>{const x=(r==null?void 0:r[g])??null,h=u===g;if(x!==null&&l){const y=pi[x];return c.jsx("div",{style:{flex:1},children:c.jsxs("div",{style:{display:"flex",alignItems:"stretch",border:`1px solid ${y.type==="numerical"?"#A8CAFF":"#C8A8FF"}`,borderRadius:"6px",overflow:"hidden",background:y.type==="numerical"?"#EBF3FF":"#F3EBFF"},children:[c.jsx("span",{style:{padding:"4px 5px",background:y.type==="numerical"?"#C5DFFF":"#DFC5FF",color:y.type==="numerical"?"#0055CC":"#5500CC",fontSize:"9px",fontWeight:"700",letterSpacing:"0.03em",display:"flex",alignItems:"center",flexShrink:0},children:g.toUpperCase()}),c.jsxs("span",{style:{flex:1,padding:"4px 4px",fontSize:"10px",color:y.type==="numerical"?"#007AFF":"#5E5CE6",fontWeight:"600",display:"flex",alignItems:"center",overflow:"hidden",whiteSpace:"nowrap"},children:[y.type==="numerical"?"#":"◈"," ",y.label]}),c.jsx("button",{onClick:()=>l(g,null),style:{background:"none",border:"none",cursor:"pointer",color:"#AEAEB2",padding:"0 4px",fontSize:"13px",lineHeight:1,fontFamily:"inherit"},children:"×"})]})},g)}return c.jsx("div",{style:{flex:1},onDragOver:y=>{r&&y.dataTransfer.types.includes("phys-var/numerical")&&(y.preventDefault(),f(g))},onDragLeave:()=>f(null),onDrop:y=>{!r||!y.dataTransfer.types.includes("phys-var/numerical")||(y.preventDefault(),f(null),l==null||l(g,y.dataTransfer.getData("phys-var/name")))},children:c.jsxs("div",{style:{display:"flex",alignItems:"stretch",border:`1px solid ${h?"#007AFF":"#D1D1D6"}`,borderRadius:"6px",overflow:"hidden",outline:h?"1px dashed #007AFF":"none",outlineOffset:"1px"},children:[c.jsx("span",{style:{padding:"4px 5px",background:"#E5E5EA",color:"#6C6C70",fontSize:"9px",fontWeight:"700",letterSpacing:"0.03em",display:"flex",alignItems:"center",flexShrink:0},children:g.toUpperCase()}),c.jsx("input",{type:"number",value:e[g],min:n,max:i,step:a,onChange:y=>b(g,Number(y.target.value)),style:{flex:1,minWidth:0,background:"#F2F2F7",border:"none",padding:"4px 5px",fontSize:"11px",color:"#1D1D1F",outline:"none",fontFamily:"monospace",width:"100%"}})]})},g)})})})}const _s={plastic:"Matte diffuse surface",fluid:"Glass-like, clearcoat + iridescence",metal:"Polished — mirrors the HDRI",emissive:"Self-illuminated, glows with color",original:"Use the model's built-in materials"},$s=["plastic","fluid","metal","emissive"],au=[{value:"alignment",label:"Alignment"},{value:"scattering",label:"Scattering"},{value:"stacking",label:"Stacking"},{value:"piling",label:"Piling"},{value:"surface",label:"Surface Placement"}],lu=[{value:"city",label:"City"},{value:"warehouse",label:"Warehouse"},{value:"sunset",label:"Sunset"},{value:"dawn",label:"Dawn"},{value:"forest",label:"Forest"},{value:"night",label:"Night"},{value:"studio",label:"Studio"},{value:"apartment",label:"Apartment"}];function sn({title:o}){return c.jsx("div",{style:{fontSize:"16px",color:"#1D1D1F",fontWeight:"700"},children:o})}function Qn({config:o,onChange:e}){const t=F.useRef(null),n=F.useRef(null),i=o.shape==="custom"&&go.some(p=>p.name===o.customModelName),a=o.shape==="custom"&&!i,s=o.shape!=="custom"?o.shape:i?`preset:${o.customModelName}`:o.customModelUrl?"__blob__":"box";function r(p){var A;const u=p.target.value;if(u==="__import__"){(A=t.current)==null||A.click();return}if(u==="__blob__")return;if(u.startsWith("preset:")){const b=u.slice(7),m=go.find(g=>g.name===b);m&&e({shape:"custom",customModelUrl:m.url,customModelHasMat:!0,customModelName:m.name,material:"original"});return}const f=o.material==="original"?"plastic":o.material;e({shape:u,customModelUrl:void 0,customModelHasMat:void 0,customModelName:void 0,material:f})}function l(p){var b;const u=(b=p.target.files)==null?void 0:b[0];if(!u)return;n.current&&URL.revokeObjectURL(n.current);const f=URL.createObjectURL(u);n.current=f;const A=u.name.replace(/\.(glb|gltf)$/i,"");e({shape:"custom",customModelUrl:f,customModelHasMat:!0,customModelName:A,material:"original"}),p.target.value=""}const d={width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"};return c.jsxs(c.Fragment,{children:[c.jsxs("select",{value:s,onChange:r,style:d,children:[c.jsxs("optgroup",{label:"Primitives",children:[c.jsx("option",{value:"box",children:"■  Box"}),c.jsx("option",{value:"sphere",children:"●  Sphere"}),c.jsx("option",{value:"star",children:"★  Star"})]}),go.length>0&&c.jsx("optgroup",{label:"3D Models",children:go.map(p=>c.jsx("option",{value:`preset:${p.name}`,children:p.name},p.name))}),c.jsxs("optgroup",{label:"Custom",children:[a&&c.jsxs("option",{value:"__blob__",children:["✎  ",o.customModelName??"Imported file"]}),c.jsx("option",{value:"__import__",children:"↑  Import .glb / .gltf…"})]})]}),c.jsx("input",{ref:t,type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:l})]})}function cu({config:o,onChange:e,bindings:t,onBind:n,labelConfig:i,onLabelChange:a,colorMode:s,colorGradient:r,onColorGradientChange:l,colorTint:d,onColorTintChange:p,openSection:u,layers:f,compositionLevel:A}){var g,x;const b=o.shape==="custom"&&o.customModelHasMat?["original","plastic","fluid","metal","emissive"]:$s,m=hi("Spatial",u);return c.jsxs(c.Fragment,{children:[c.jsx(sn,{title:"Mark"}),c.jsxs(Ke,{icon:De.spatial,title:"Spatial",open:m.isOpen("Spatial"),onToggle:()=>m.toggle("Spatial"),children:[c.jsx(ht,{label:"Position",value:o.position,onChange:h=>e({...o,position:h}),min:-10,max:10,step:.1}),c.jsx(J,{label:"Scale",children:t.markScale!==null?c.jsx(lo,{label:pi[t.markScale].label,type:"numerical",onClear:()=>n("markScale",null)}):c.jsx(Xo,{accepts:"numerical",onDrop:h=>n("markScale",h),children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:.1,max:10,step:.1,value:o.scale??1,onChange:h=>e({...o,scale:Number(h.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:[(o.scale??1).toFixed(1),"×"]})]})})}),c.jsx(ht,{label:"Size",value:o.size,onChange:h=>e({...o,size:h}),min:.1,max:10,step:.1,lockable:!0,axisBindings:{x:t.markSizeX,y:t.markSizeY,z:t.markSizeZ},onAxisBind:(h,y)=>n(h==="x"?"markSizeX":h==="y"?"markSizeY":"markSizeZ",y)}),c.jsx(ht,{label:"Orientation",value:o.orientation,onChange:h=>e({...o,orientation:h}),min:-180,max:180,step:1})]}),c.jsx(Ke,{icon:De.shape,title:"Geometry",open:m.isOpen("Geometry"),onToggle:()=>m.toggle("Geometry"),children:t.markGeometry!==null&&f.length>1?f.map(h=>{var v;const y=(v=o.categoryShapes)==null?void 0:v[h.name],C={shape:(y==null?void 0:y.shape)??o.shape,material:o.material,customModelUrl:y==null?void 0:y.customModelUrl,customModelHasMat:y==null?void 0:y.customModelHasMat,customModelName:y==null?void 0:y.customModelName};return c.jsx(J,{label:h.name,children:c.jsx(Qn,{config:C,onChange:B=>e({...o,categoryShapes:{...o.categoryShapes??{},[h.name]:{shape:B.shape??(y==null?void 0:y.shape)??o.shape,customModelUrl:B.customModelUrl,customModelHasMat:B.customModelHasMat,customModelName:B.customModelName}}})})},h.id)}):c.jsx(J,{label:"Shape",children:c.jsx(Qn,{config:o,onChange:h=>e({...o,...h})})})}),c.jsxs(Ke,{icon:De.material,title:"Material",open:m.isOpen("Material"),onToggle:()=>m.toggle("Material"),children:[c.jsxs(J,{label:"Type",children:[c.jsx("select",{value:o.material,onChange:h=>e({...o,material:h.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:b.map(h=>c.jsx("option",{value:h,children:h.charAt(0).toUpperCase()+h.slice(1)},h))}),c.jsx("div",{style:{fontSize:"11px",color:"#AEAEB2",lineHeight:1.5},children:_s[o.material]})]}),c.jsx(J,{label:"Color",children:t.markColor!==null?c.jsxs(c.Fragment,{children:[c.jsx(lo,{label:((g=ki[t.markColor])==null?void 0:g.label)??t.markColor,type:((x=ki[t.markColor])==null?void 0:x.type)??"categorical",onClear:()=>n("markColor",null)}),s==="continuous"&&r&&l&&c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginTop:"8px"},children:[c.jsx("input",{type:"color",value:r.from,onChange:h=>l({...r,from:h.target.value}),style:{width:"32px",height:"28px",border:"1px solid #D1D1D6",borderRadius:"5px",background:"none",cursor:"pointer",padding:"1px"}}),c.jsx("span",{style:{fontSize:"12px",color:"#AEAEB2",fontWeight:"500"},children:"→"}),c.jsx("input",{type:"color",value:r.to,onChange:h=>l({...r,to:h.target.value}),style:{width:"32px",height:"28px",border:"1px solid #D1D1D6",borderRadius:"5px",background:"none",cursor:"pointer",padding:"1px"}}),c.jsx("span",{style:{fontSize:"11px",color:"#8E8E93"},children:"Gradient"})]}),o.shape==="custom"&&p&&c.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"8px",fontSize:"12px",color:"#1D1D1F",cursor:"pointer"},children:[c.jsx("input",{type:"checkbox",checked:d??!1,onChange:h=>p(h.target.checked),style:{accentColor:"#5E5CE6",width:"14px",height:"14px",cursor:"pointer"}}),c.jsx("span",{children:"Tint model (keep its material)"})]})]}):c.jsx(Xo,{accepts:"categorical",onDrop:()=>n("markColor","garbageType"),children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"2px"},children:[c.jsx("input",{type:"color",value:o.color,onChange:h=>e({...o,color:h.target.value}),style:{width:"36px",height:"32px",border:"1px solid #D1D1D6",borderRadius:"6px",background:"none",cursor:"pointer",padding:"2px"}}),c.jsx("span",{style:{fontSize:"12px",color:"#8E8E93",fontFamily:"monospace"},children:o.color})]})})})]}),c.jsx(Ke,{icon:De.labels,title:"Labels",open:m.isOpen("Labels"),onToggle:()=>m.toggle("Labels"),children:c.jsx(qs,{config:i,onChange:a})})]})}function Pi({config:o,onChange:e,collectionLevel:t,bindings:n,onBind:i,labelConfig:a,onLabelChange:s,onReseed:r,decorations:l}){const d=t===2,p=hi("Groups & Populations");return c.jsxs(c.Fragment,{children:[c.jsx(sn,{title:"Collection"}),c.jsxs(Ke,{icon:De.populations,title:"Groups & Populations",open:p.isOpen("Groups & Populations"),onToggle:()=>p.toggle("Groups & Populations"),children:[c.jsx(J,{label:"Arrangement",children:c.jsx("select",{value:o.arrangement,onChange:u=>e({...o,arrangement:u.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:au.map(u=>c.jsxs("option",{value:u.value,disabled:u.value==="stacking",children:[u.label,u.value==="stacking"?" (coming soon)":""]},u.value))})}),o.arrangement==="alignment"&&c.jsxs(c.Fragment,{children:[c.jsx(J,{label:"Elements",children:(()=>{const u=t===1?"c1AlignCount":"c2AlignCount",f=n[u],A=t===1?Object.values(n).some(m=>m!==null):n.scatterSize!==null,b={weight:{label:"Weight",type:"numerical"},garbageType:{label:"Garbage Type",type:"categorical"},count:{label:"Count",type:"numerical"}};if(f!==null){const m=b[f]??{label:f,type:"numerical"};return c.jsx(lo,{label:m.label,type:m.type,onClear:()=>i(u,null)})}return A?c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",background:"#F2F2F7",border:"1px solid #E5E5EA",borderRadius:"7px",padding:"5px 10px"},children:[c.jsx("span",{style:{fontSize:"12px",color:"#1D1D1F",fontWeight:"600",flex:1},children:o.alignCount}),c.jsx("span",{style:{fontSize:"9px",color:"#AEAEB2",letterSpacing:"0.06em",fontWeight:"600"},children:"DATA"})]}):c.jsx(Xo,{accepts:"numerical",onDrop:()=>i(u,"count"),children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:2,max:20,step:1,value:o.alignCount,onChange:m=>e({...o,alignCount:Number(m.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:o.alignCount})]})})})()}),c.jsx(J,{label:"Axis",children:c.jsx(io,{options:[{value:"X",label:"→ X axis"},{value:"Y",label:"↑ Y axis"}],value:o.alignAxis,onChange:u=>e({...o,alignAxis:u})})}),c.jsx(J,{label:"Anchor",children:c.jsx(io,{options:o.alignAxis==="X"?[{value:"start",label:"↑ Top"},{value:"center",label:"◆ Ctr"},{value:"end",label:"↓ Bottom"}]:[{value:"start",label:"← Left"},{value:"center",label:"◆ Ctr"},{value:"end",label:"→ Right"}],value:o.alignAnchor,onChange:u=>e({...o,alignAnchor:u})})}),c.jsxs(J,{label:"Spacing",children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:.5,max:d?12:6,step:.1,value:o.alignSpacing,onChange:u=>e({...o,alignSpacing:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:o.alignSpacing.toFixed(1)})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#C7C7CC"},children:[c.jsx("span",{children:"Tight"}),c.jsx("span",{children:"Spread"})]})]})]}),o.arrangement==="scattering"&&c.jsxs(c.Fragment,{children:[c.jsx(J,{label:"Quantity",children:c.jsx("div",{style:{display:"flex",gap:"4px"},children:["count","density"].map(u=>c.jsx("button",{onClick:()=>e({...o,scatterMode:u}),style:{flex:1,padding:"5px 0",background:(o.scatterMode??"count")===u?"#5E5CE6":"#F2F2F7",color:(o.scatterMode??"count")===u?"#fff":"#6C6C70",border:"1px solid",borderColor:(o.scatterMode??"count")===u?"#5E5CE6":"#E5E5EA",borderRadius:"6px",cursor:"pointer",fontSize:"11px",fontWeight:"600",fontFamily:"inherit"},children:u==="count"?"Population":"Density"},u))})}),(o.scatterMode??"count")==="count"?c.jsx(J,{label:"Mark Count",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:5,max:600,step:5,value:o.scatterCount,onChange:u=>e({...o,scatterCount:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:o.scatterCount})]})}):c.jsx(J,{label:"Density",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:.05,max:5,step:.05,value:o.scatterDensity,onChange:u=>e({...o,scatterDensity:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"36px",textAlign:"right"},children:[o.scatterDensity.toFixed(2),"/u³"]})]})}),c.jsx(J,{label:"Volume",children:c.jsx("div",{style:{display:"flex",width:"100%"},children:["box","sphere"].map((u,f)=>c.jsx("button",{onClick:()=>e({...o,scatterBoundingVolume:u}),style:{flex:1,padding:"5px 0",background:(o.scatterBoundingVolume??"box")===u?"#5E5CE6":"#F2F2F7",color:(o.scatterBoundingVolume??"box")===u?"#fff":"#6C6C70",border:"1px solid",borderColor:(o.scatterBoundingVolume??"box")===u?"#5E5CE6":"#E5E5EA",borderRadius:f===0?"6px 0 0 6px":"0 6px 6px 0",cursor:"pointer",fontFamily:"inherit",fontSize:"11px",fontWeight:"600"},children:u==="box"?"□ Box":"○ Sphere"},u))})}),n.scatterSize!==null?c.jsxs(c.Fragment,{children:[c.jsx(J,{label:"Dimensions",children:c.jsx(lo,{label:"Number of Instruments",type:"numerical",onClear:()=>i("scatterSize",null)})}),c.jsx(J,{label:"Size axes",children:c.jsx("div",{style:{display:"flex",gap:"4px"},children:["x","y","z"].map(u=>{const f=o.scatterSizeAxes??{x:!1,y:!0,z:!1},A=f[u];return c.jsx("button",{onClick:()=>e({...o,scatterSizeAxes:{...f,[u]:!A}}),style:{flex:1,padding:"6px 0",borderRadius:"7px",border:`1px solid ${A?"#A8CAFF":"#E5E5EA"}`,background:A?"#EBF3FF":"#F2F2F7",color:A?"#007AFF":"#6C6C70",fontWeight:A?"700":"500",fontSize:"12px",cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"},children:u},u)})})})]}):c.jsx(Xo,{accepts:"numerical",onDrop:()=>i("scatterSize","numerical"),children:c.jsx(ht,{label:"Dimensions",value:o.scatterDimensions,onChange:u=>e({...o,scatterDimensions:u}),min:.5,max:20,step:.5})}),c.jsx(J,{label:"Orientation",children:c.jsx("div",{style:{display:"flex",width:"100%"},children:["random","static"].map((u,f)=>c.jsx("button",{onClick:()=>e({...o,scatterOrientation:u}),style:{flex:1,padding:"5px 0",background:(o.scatterOrientation??"random")===u?"#5E5CE6":"#F2F2F7",color:(o.scatterOrientation??"random")===u?"#fff":"#6C6C70",border:"1px solid",borderColor:(o.scatterOrientation??"random")===u?"#5E5CE6":"#E5E5EA",borderRadius:f===0?"6px 0 0 6px":"0 6px 6px 0",cursor:"pointer",fontFamily:"inherit",fontSize:"11px",fontWeight:"600"},children:u==="random"?"Random":"Static"},u))})}),c.jsx(J,{label:"Show Bounds",children:c.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"7px",cursor:"pointer"},children:[c.jsx("input",{type:"checkbox",checked:o.scatterShowBounds??!0,onChange:u=>e({...o,scatterShowBounds:u.target.checked}),style:{accentColor:"#5E5CE6",width:"14px",height:"14px",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"11px",color:"#6C6C70"},children:"Visible"})]})}),l&&l.length>0&&c.jsx(J,{label:"Exclusion Zone",children:c.jsxs("select",{value:o.scatterExclusionId??"",onChange:u=>e({...o,scatterExclusionId:u.target.value||null}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:[c.jsx("option",{value:"",children:"None"}),l.map((u,f)=>c.jsxs("option",{value:u.id,children:[u.name??`Decoration ${f+1}`," (",u.shape,")"]},u.id))]})}),r&&c.jsx(J,{label:"Placement",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"6px",cursor:"pointer",flex:1},children:[c.jsx("input",{type:"checkbox",checked:o.scatterEven??!1,onChange:u=>e({...o,scatterEven:u.target.checked}),style:{accentColor:"#5E5CE6",width:"14px",height:"14px",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"11px",color:"#6C6C70"},children:"Even spread"})]}),c.jsx("button",{onClick:r,style:{padding:"6px 12px",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:"#1D1D1F",fontFamily:"inherit",flexShrink:0},onMouseEnter:u=>u.currentTarget.style.background="#E5E5EA",onMouseLeave:u=>u.currentTarget.style.background="#F2F2F7",children:"Randomise"})]})})]}),o.arrangement==="piling"&&c.jsx(J,{label:"Mark Count",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:2,max:60,step:1,value:o.pilingCount,onChange:u=>e({...o,pilingCount:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:o.pilingCount})]})}),o.arrangement==="surface"&&c.jsxs(c.Fragment,{children:[c.jsx(J,{label:"Surface",children:l&&l.length>0?c.jsxs("select",{value:o.surfaceTargetId??"",onChange:u=>e({...o,surfaceTargetId:u.target.value||null}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:[c.jsx("option",{value:"",children:"Select a decoration…"}),l.map((u,f)=>c.jsxs("option",{value:u.id,children:[u.name??`Decoration ${f+1}`," (",u.shape,")"]},u.id))]}):c.jsx("span",{style:{fontSize:"11px",color:"#AEAEB2"},children:"Add a decoration to use as the surface."})}),c.jsx(J,{label:"Mark Count",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:1,max:200,step:1,value:o.surfaceCount??24,onChange:u=>e({...o,surfaceCount:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:o.surfaceCount??24})]})}),c.jsx(J,{label:"Mark Size",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:.1,max:4,step:.1,value:o.surfaceScale??1,onChange:u=>e({...o,surfaceScale:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:[(o.surfaceScale??1).toFixed(1),"×"]})]})}),r&&c.jsx(J,{label:"Placement",children:c.jsx("button",{onClick:r,style:{padding:"6px 12px",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:"#1D1D1F",fontFamily:"inherit"},onMouseEnter:u=>u.currentTarget.style.background="#E5E5EA",onMouseLeave:u=>u.currentTarget.style.background="#F2F2F7",children:"Randomise"})})]})]}),t===1&&a&&s&&c.jsx(Ke,{icon:De.labels,title:"Labels",open:p.isOpen("Labels"),onToggle:()=>p.toggle("Labels"),children:c.jsx(qs,{config:a,onChange:s})})]})}function uu({config:o,onChange:e}){const t=o.shape==="custom"&&o.customModelHasMat?["original","plastic","fluid","metal","emissive"]:$s,n=hi("Spatial");return c.jsxs(c.Fragment,{children:[c.jsx(sn,{title:"Decoration"}),c.jsxs(Ke,{icon:De.spatial,title:"Spatial",open:n.isOpen("Spatial"),onToggle:()=>n.toggle("Spatial"),children:[c.jsx(ht,{label:"Position",value:o.position,onChange:i=>e({...o,position:i}),min:-20,max:20,step:.1}),c.jsx(ht,{label:"Size",value:o.size,onChange:i=>e({...o,size:i}),min:.1,max:10,step:.1,lockable:!0}),c.jsx(ht,{label:"Orientation",value:o.orientation,onChange:i=>e({...o,orientation:i}),min:-180,max:180,step:1})]}),c.jsx(Ke,{icon:De.shape,title:"Geometry",open:n.isOpen("Geometry"),onToggle:()=>n.toggle("Geometry"),children:c.jsx(J,{label:"Shape",children:c.jsx(Qn,{config:o,onChange:i=>e({...o,...i})})})}),c.jsxs(Ke,{icon:De.material,title:"Material",open:n.isOpen("Material"),onToggle:()=>n.toggle("Material"),children:[c.jsxs(J,{label:"Type",children:[c.jsx("select",{value:o.material,onChange:i=>e({...o,material:i.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:t.map(i=>c.jsx("option",{value:i,children:i.charAt(0).toUpperCase()+i.slice(1)},i))}),c.jsx("div",{style:{fontSize:"11px",color:"#AEAEB2",lineHeight:1.5},children:_s[o.material]})]}),c.jsx(J,{label:"Color",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"2px"},children:[c.jsx("input",{type:"color",value:o.color,onChange:i=>e({...o,color:i.target.value}),style:{width:"36px",height:"32px",border:"1px solid #D1D1D6",borderRadius:"6px",background:"none",cursor:"pointer",padding:"2px"}}),c.jsx("span",{style:{fontSize:"12px",color:"#8E8E93",fontFamily:"monospace"},children:o.color})]})})]})]})}function Ve({label:o,value:e,min:t,max:n,step:i,decimals:a=0,suffix:s="",onChange:r}){return c.jsx(J,{label:o,children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:t,max:n,step:i,value:e,onChange:l=>r(Number(l.target.value)),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"38px",textAlign:"right"},children:[e.toFixed(a),s]})]})})}function yo({label:o,value:e,onChange:t}){return c.jsx(J,{label:o,children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[c.jsx("input",{type:"color",value:e,onChange:n=>t(n.target.value),style:{width:"36px",height:"30px",border:"1px solid #D1D1D6",borderRadius:"6px",background:"none",cursor:"pointer",padding:"2px"}}),c.jsx("span",{style:{fontSize:"12px",color:"#8E8E93",fontFamily:"monospace"},children:e})]})})}function mn({label:o,checked:e,onChange:t}){return c.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"12px",color:"#1D1D1F",cursor:"pointer",padding:"2px 0"},children:[c.jsx("input",{type:"checkbox",checked:e,onChange:n=>t(n.target.checked),style:{accentColor:"#5E5CE6",width:"14px",height:"14px",cursor:"pointer"}}),c.jsx("span",{children:o})]})}function du({config:o,onChange:e}){const[t,n]=F.useState(!0),[i,a]=F.useState(!1),s=o.sceneTitleShow??!0,r=o.sceneTitleOffset??2.5,l=o.sceneTitleBelow??!1;return c.jsxs(c.Fragment,{children:[c.jsx(sn,{title:"Scene"}),c.jsxs(Ke,{icon:De.framing,title:"Framing",open:t,onToggle:()=>n(d=>!d),children:[c.jsx(J,{label:"Background",children:c.jsxs("select",{value:o.background,onChange:d=>e({...o,background:d.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:[c.jsx("option",{value:"dark",children:"Dark"}),c.jsx("option",{value:"color",children:"Solid colour"}),c.jsx("option",{value:"gradient",children:"Gradient"}),c.jsx("option",{value:"hdri",children:"HDRI"}),c.jsx("option",{value:"sky",children:"Sky"}),c.jsx("option",{value:"ocean",children:"Ocean"})]})}),o.background==="color"&&c.jsx(yo,{label:"Colour",value:o.bgColor??"#202024",onChange:d=>e({...o,bgColor:d})}),o.background==="gradient"&&c.jsxs(c.Fragment,{children:[c.jsx(yo,{label:"Top",value:o.bgGradientTop??"#3a5f8a",onChange:d=>e({...o,bgGradientTop:d})}),c.jsx(yo,{label:"Bottom",value:o.bgGradientBottom??"#0a0a12",onChange:d=>e({...o,bgGradientBottom:d})})]}),o.background==="hdri"&&c.jsxs(c.Fragment,{children:[c.jsx(Ve,{label:"Blur",value:o.hdriBlur??0,min:0,max:1,step:.02,decimals:2,onChange:d=>e({...o,hdriBlur:d})}),c.jsx(Ve,{label:"Brightness",value:o.hdriIntensity??1,min:0,max:2,step:.05,decimals:2,onChange:d=>e({...o,hdriIntensity:d})})]}),o.background==="sky"&&c.jsxs(c.Fragment,{children:[c.jsx(Ve,{label:"Sun elevation",value:o.skyElevation??20,min:-5,max:90,step:1,suffix:"°",onChange:d=>e({...o,skyElevation:d})}),c.jsx(Ve,{label:"Sun azimuth",value:o.skyAzimuth??140,min:0,max:360,step:1,suffix:"°",onChange:d=>e({...o,skyAzimuth:d})})]}),c.jsx(J,{label:"Lighting (HDRI)",children:c.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px"},children:lu.map(d=>{const p=o.hdriPreset===d.value;return c.jsx("button",{onClick:()=>e({...o,hdriPreset:d.value}),style:{padding:"5px 6px",background:p?"#EBF3FF":"#F2F2F7",border:`1px solid ${p?"#A8CAFF":"#E5E5EA"}`,borderRadius:"7px",color:p?"#007AFF":"#6C6C70",cursor:"pointer",fontSize:"11px",fontFamily:"inherit",fontWeight:p?"600":"400",transition:"all 0.1s",textAlign:"center"},children:d.label},d.value)})})}),c.jsx(Ve,{label:"Exposure",value:o.exposure??(o.background==="ocean"?.95:o.background==="dark"?1.35:1.2),min:.2,max:3,step:.05,decimals:2,onChange:d=>e({...o,exposure:d})}),c.jsx(Ve,{label:"Env. rotation",value:o.envRotation??0,min:0,max:360,step:1,suffix:"°",onChange:d=>e({...o,envRotation:d})}),c.jsx(J,{label:"Atmosphere",children:c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[c.jsx(mn,{label:"Stars",checked:o.stars??!1,onChange:d=>e({...o,stars:d})}),c.jsx(mn,{label:"Grid",checked:o.grid??!1,onChange:d=>e({...o,grid:d})}),c.jsx(mn,{label:"Fog",checked:o.fog??!1,onChange:d=>e({...o,fog:d})})]})}),o.fog&&c.jsxs(c.Fragment,{children:[c.jsx(yo,{label:"Fog colour",value:o.fogColor??"#8090a0",onChange:d=>e({...o,fogColor:d})}),c.jsx(Ve,{label:"Fog near",value:o.fogNear??20,min:0,max:100,step:1,onChange:d=>e({...o,fogNear:d})}),c.jsx(Ve,{label:"Fog far",value:o.fogFar??150,min:10,max:400,step:5,onChange:d=>e({...o,fogFar:d})})]}),c.jsxs(J,{label:"Camera",children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"2px"},children:[c.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",fontWeight:"500"},children:[o.focalLength,"mm"]}),c.jsxs("span",{style:{fontSize:"11px",color:"#AEAEB2"},children:[iu(o.focalLength).toFixed(0),"° fov"]})]}),c.jsx("input",{type:"range",min:14,max:180,step:1,value:o.focalLength,onChange:d=>e({...o,focalLength:Number(d.target.value)}),style:{width:"100%",accentColor:"#34C759",cursor:"pointer"}}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#AEAEB2",marginTop:"2px"},children:[c.jsx("span",{children:"14mm wide"}),c.jsx("span",{children:"180mm tele"})]})]})]}),c.jsxs(Ke,{icon:De.labels,title:"Label",open:i,onToggle:()=>a(d=>!d),children:[c.jsx(J,{label:"Show title",children:c.jsx(io,{options:[{value:"on",label:"On"},{value:"off",label:"Off"}],value:s?"on":"off",onChange:d=>e({...o,sceneTitleShow:d==="on"})})}),s&&c.jsxs(c.Fragment,{children:[c.jsx(J,{label:"Side",children:c.jsx(io,{options:[{value:"above",label:"↑ Above"},{value:"below",label:"↓ Below"}],value:l?"below":"above",onChange:d=>e({...o,sceneTitleBelow:d==="below"})})}),c.jsx(J,{label:"Distance",children:c.jsx("input",{type:"number",min:0,max:15,step:.1,value:r,onChange:d=>e({...o,sceneTitleOffset:Math.max(0,Number(d.target.value)||0)}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"6px",padding:"6px 8px",fontSize:"12px",color:"#1D1D1F",fontFamily:"inherit",outline:"none",boxSizing:"border-box"}})})]}),c.jsxs(J,{label:"Hide behind objects",children:[c.jsx(io,{options:[{value:"off",label:"Off"},{value:"full",label:"Full"},{value:"optimized",label:"Optimized"}],value:o.sceneLabelOcclude??"off",onChange:d=>e({...o,sceneLabelOcclude:d})}),c.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",marginTop:"4px",display:"block"},children:"Optimized checks only decorations."})]})]})]})}function fu({activeElement:o,compositionLevel:e,layers:t,markConfig:n,onMarkChange:i,collection1Config:a,onCollection1Change:s,collection2Config:r,onCollection2Change:l,sceneConfig:d,onSceneChange:p,bindings:u,onBind:f,markLabelConfig:A,onMarkLabelChange:b,colLabelConfig:m,onColLabelChange:g,activeDecorationId:x,decorations:h,onDecorationChange:y,colorMode:C,colorGradient:v,onColorGradientChange:B,colorTint:T,onColorTintChange:S,markOpenSection:R,onReseed:D}){const w=x!==null?h.find(M=>M.id===x)??null:null;return c.jsx("div",{style:{padding:"18px 14px",color:"#1D1D1F",fontSize:"13px",display:"flex",flexDirection:"column",gap:"10px",boxSizing:"border-box"},children:w!==null?c.jsx(uu,{config:w,onChange:y}):o==="mark"?c.jsx(cu,{config:n,onChange:i,bindings:u,onBind:f,labelConfig:A,onLabelChange:b,colorMode:C,colorGradient:v,onColorGradientChange:B,colorTint:T,onColorTintChange:S,openSection:R,layers:t,compositionLevel:e}):o==="collection1"?c.jsx(Pi,{config:a,onChange:s,collectionLevel:1,bindings:u,onBind:f,labelConfig:m,onLabelChange:g,onReseed:D,decorations:h}):o==="collection2"?c.jsx(Pi,{config:r,onChange:l,collectionLevel:2,bindings:u,onBind:f,onReseed:D,decorations:h}):o==="scene"?c.jsx(du,{config:d,onChange:p}):null})}var pu=Object.defineProperty,hu=(o,e,t)=>e in o?pu(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,Ui=(o,e,t)=>(hu(o,typeof e!="symbol"?e+"":e,t),t);const Au=(()=>{const o={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new j},up:{value:new j(0,1,0)}},vertexShader:`
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
      #include <${Os>=154?"colorspace_fragment":"encodings_fragment"}>

      }
    `},e=new co({name:"SkyShader",fragmentShader:o.fragmentShader,vertexShader:o.vertexShader,uniforms:Gs.clone(o.uniforms),side:_o,depthWrite:!1});class t extends Ie{constructor(){super(new si(1,1,1),e)}}return Ui(t,"SkyShader",o),Ui(t,"material",e),t})();function Yo(o){if(typeof TextDecoder<"u")return new TextDecoder().decode(o);let e="";for(let t=0,n=o.length;t<n;t++)e+=String.fromCharCode(o[t]);try{return decodeURIComponent(escape(e))}catch{return e}}const pt="srgb",Ne="srgb-linear",Hi=3001,mu=3e3;class Ai extends ri{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Cu(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new ku(t)})}load(e,t,n,i){const a=this;let s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){const d=to.extractUrlBase(e);s=to.resolveURL(d,this.path)}else s=to.extractUrlBase(e);this.manager.itemStart(e);const r=function(d){i?i(d):console.error(d),a.manager.itemError(e),a.manager.itemEnd(e)},l=new ao(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(d){try{a.parse(d,s,function(p){t(p),a.manager.itemEnd(e)},r)}catch(p){r(p)}},n,r)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let a;const s={},r={};if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Yo(new Uint8Array(e.slice(0,4)))===er){try{s[Q.KHR_BINARY_GLTF]=new Pu(e)}catch(p){i&&i(p);return}a=JSON.parse(s[Q.KHR_BINARY_GLTF].content)}else a=JSON.parse(Yo(new Uint8Array(e)));else a=e;if(a.asset===void 0||a.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Yu(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const p=this.pluginCallbacks[d](l);p.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),r[p.name]=p,s[p.name]=!0}if(a.extensionsUsed)for(let d=0;d<a.extensionsUsed.length;++d){const p=a.extensionsUsed[d],u=a.extensionsRequired||[];switch(p){case Q.KHR_MATERIALS_UNLIT:s[p]=new yu;break;case Q.KHR_DRACO_MESH_COMPRESSION:s[p]=new Uu(a,this.dracoLoader);break;case Q.KHR_TEXTURE_TRANSFORM:s[p]=new Hu;break;case Q.KHR_MESH_QUANTIZATION:s[p]=new Gu;break;default:u.indexOf(p)>=0&&r[p]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}l.setExtensions(s),l.setPlugins(r),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,a){n.parse(e,t,i,a)})}}function gu(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const Q={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class xu{constructor(e){this.parser=e,this.name=Q.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const a=t.json,l=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let d;const p=new Z(16777215);l.color!==void 0&&p.setRGB(l.color[0],l.color[1],l.color[2],Ne);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":d=new ec(p),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new $l(p),d.distance=u;break;case"spot":d=new _l(p),d.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,d.angle=l.spot.outerConeAngle,d.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return d.position.set(0,0,0),d.decay=2,ze(d,l),l.intensity!==void 0&&(d.intensity=l.intensity),d.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(d),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,a=n.json.nodes[e],r=(a.extensions&&a.extensions[this.name]||{}).light;return r===void 0?null:this._loadLight(r).then(function(l){return n._getNodeRef(t.cache,r,l)})}}class yu{constructor(){this.name=Q.KHR_MATERIALS_UNLIT}getMaterialType(){return et}extendParams(e,t,n){const i=[];e.color=new Z(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const s=a.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],Ne),e.opacity=s[3]}a.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",a.baseColorTexture,pt))}return Promise.all(i)}}class bu{constructor(e){this.parser=e,this.name=Q.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class Cu{constructor(e){this.parser=e,this.name=Q.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xe}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const r=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new je(r,r)}return Promise.all(a)}}class vu{constructor(e){this.parser=e,this.name=Q.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xe}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class Bu{constructor(e){this.parser=e,this.name=Q.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xe}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(a)}}class Fu{constructor(e){this.parser=e,this.name=Q.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xe}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new Z(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];if(s.sheenColorFactor!==void 0){const r=s.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Ne)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&a.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,pt)),s.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(a)}}class Su{constructor(e){this.parser=e,this.name=Q.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xe}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&a.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(a)}}class Ru{constructor(e){this.parser=e,this.name=Q.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xe}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&a.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const r=s.attenuationColor||[1,1,1];return t.attenuationColor=new Z().setRGB(r[0],r[1],r[2],Ne),Promise.all(a)}}class Mu{constructor(e){this.parser=e,this.name=Q.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xe}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class Tu{constructor(e){this.parser=e,this.name=Q.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xe}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&a.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const r=s.specularColorFactor||[1,1,1];return t.specularColor=new Z().setRGB(r[0],r[1],r[2],Ne),s.specularColorTexture!==void 0&&a.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,pt)),Promise.all(a)}}class wu{constructor(e){this.parser=e,this.name=Q.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xe}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],s=i.extensions[this.name];return t.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&a.push(n.assignTexture(t,"bumpMap",s.bumpTexture)),Promise.all(a)}}class Du{constructor(e){this.parser=e,this.name=Q.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xe}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],s=i.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&a.push(n.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(a)}}class Ku{constructor(e){this.parser=e,this.name=Q.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const a=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,s)}}class Eu{constructor(e){this.parser=e,this.name=Q.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;const s=a.extensions[t],r=i.images[s.source];let l=n.textureLoader;if(r.uri){const d=n.options.manager.getHandler(r.uri);d!==null&&(l=d)}return this.detectSupport().then(function(d){if(d)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Iu{constructor(e){this.parser=e,this.name=Q.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;const s=a.extensions[t],r=i.images[s.source];let l=n.textureLoader;if(r.uri){const d=n.options.manager.getHandler(r.uri);d!==null&&(l=d)}return this.detectSupport().then(function(d){if(d)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ju{constructor(e){this.name=Q.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],a=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(r){const l=i.byteOffset||0,d=i.byteLength||0,p=i.count,u=i.byteStride,f=new Uint8Array(r,l,d);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(p,u,f,i.mode,i.filter).then(function(A){return A.buffer}):s.ready.then(function(){const A=new ArrayBuffer(p*u);return s.decodeGltfBuffer(new Uint8Array(A),p,u,f,i.mode,i.filter),A})})}else return null}}class ku{constructor(e){this.name=Q.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const d of i.primitives)if(d.mode!==Be.TRIANGLES&&d.mode!==Be.TRIANGLE_STRIP&&d.mode!==Be.TRIANGLE_FAN&&d.mode!==void 0)return null;const s=n.extensions[this.name].attributes,r=[],l={};for(const d in s)r.push(this.parser.getDependency("accessor",s[d]).then(p=>(l[d]=p,l[d])));return r.length<1?null:(r.push(this.parser.createNodeMesh(e)),Promise.all(r).then(d=>{const p=d.pop(),u=p.isGroup?p.children:[p],f=d[0].count,A=[];for(const b of u){const m=new ae,g=new j,x=new Ut,h=new j(1,1,1),y=new tc(b.geometry,b.material,f);for(let C=0;C<f;C++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,C),l.ROTATION&&x.fromBufferAttribute(l.ROTATION,C),l.SCALE&&h.fromBufferAttribute(l.SCALE,C),y.setMatrixAt(C,m.compose(g,x,h));for(const C in l)if(C==="_COLOR_0"){const v=l[C];y.instanceColor=new oc(v.array,v.itemSize,v.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&b.geometry.setAttribute(C,l[C]);$o.prototype.copy.call(y,b),this.parser.assignFinalMaterial(y),A.push(y)}return p.isGroup?(p.clear(),p.add(...A),p):A[0]}))}}const er="glTF",zt=12,Gi={JSON:1313821514,BIN:5130562};class Pu{constructor(e){this.name=Q.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,zt);if(this.header={magic:Yo(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==er)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-zt,i=new DataView(e,zt);let a=0;for(;a<n;){const s=i.getUint32(a,!0);a+=4;const r=i.getUint32(a,!0);if(a+=4,r===Gi.JSON){const l=new Uint8Array(e,zt+a,s);this.content=Yo(l)}else if(r===Gi.BIN){const l=zt+a;this.body=e.slice(l,l+s)}a+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Uu{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Q.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,a=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,r={},l={},d={};for(const p in s){const u=Wn[p]||p.toLowerCase();r[u]=s[p]}for(const p in e.attributes){const u=Wn[p]||p.toLowerCase();if(s[p]!==void 0){const f=n.accessors[e.attributes[p]],A=It[f.componentType];d[u]=A.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",a).then(function(p){return new Promise(function(u,f){i.decodeDracoFile(p,function(A){for(const b in A.attributes){const m=A.attributes[b],g=l[b];g!==void 0&&(m.normalized=g)}u(A)},r,d,Ne,f)})})}}class Hu{constructor(){this.name=Q.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Gu{constructor(){this.name=Q.KHR_MESH_QUANTIZATION}}class tr extends Fc{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,a=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[a+s];return t}interpolate_(e,t,n,i){const a=this.resultBuffer,s=this.sampleValues,r=this.valueSize,l=r*2,d=r*3,p=i-t,u=(n-t)/p,f=u*u,A=f*u,b=e*d,m=b-d,g=-2*A+3*f,x=A-f,h=1-g,y=x-f+u;for(let C=0;C!==r;C++){const v=s[m+C+r],B=s[m+C+l]*p,T=s[b+C+r],S=s[b+C]*p;a[C]=h*v+y*B+g*T+x*S}return a}}const Ou=new Ut;class zu extends tr{interpolate_(e,t,n,i){const a=super.interpolate_(e,t,n,i);return Ou.fromArray(a).normalize().toArray(a),a}}const Be={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},It={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Oi={9728:le,9729:de,9984:lc,9985:ac,9986:rc,9987:zs},zi={33071:st,33648:cc,10497:nt},gn={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wn={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...Os>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xe={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Lu={CUBICSPLINE:void 0,LINEAR:Ls,STEP:vc},xn={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Nu(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Me({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Wo})),o.DefaultMaterial}function ct(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ze(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ju(o,e,t){let n=!1,i=!1,a=!1;for(let d=0,p=e.length;d<p;d++){const u=e[d];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(a=!0),n&&i&&a)break}if(!n&&!i&&!a)return Promise.resolve(o);const s=[],r=[],l=[];for(let d=0,p=e.length;d<p;d++){const u=e[d];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):o.attributes.position;s.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):o.attributes.normal;r.push(f)}if(a){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):o.attributes.color;l.push(f)}}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(l)]).then(function(d){const p=d[0],u=d[1],f=d[2];return n&&(o.morphAttributes.position=p),i&&(o.morphAttributes.normal=u),a&&(o.morphAttributes.color=f),o.morphTargetsRelative=!0,o})}function Qu(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Wu(o){let e;const t=o.extensions&&o.extensions[Q.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+yn(t.attributes):e=o.indices+":"+yn(o.attributes)+":"+o.mode,o.targets!==void 0)for(let n=0,i=o.targets.length;n<i;n++)e+=":"+yn(o.targets[n]);return e}function yn(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function Vn(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Vu(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Xu=new ae;class Yu{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gu,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,a=-1;typeof navigator<"u"&&typeof navigator.userAgent<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,a=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&a<98?this.textureLoader=new nc(this.options.manager):this.textureLoader=new ic(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ao(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const r={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};return ct(a,r,i),ze(r,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(r)})).then(function(){for(const l of r.scenes)l.updateMatrixWorld();e(r)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,a=t.length;i<a;i++){const s=t[i].joints;for(let r=0,l=s.length;r<l;r++)e[s[r]].isBone=!0}for(let i=0,a=e.length;i<a;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),a=(s,r)=>{const l=this.associations.get(s);l!=null&&this.associations.set(r,l);for(const[d,p]of s.children.entries())a(p,r.children[d])};return a(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const a=e(t[i]);a&&n.push(a)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":i=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(a,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Q.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(a,s){n.load(to.resolveURL(t.uri,i.path),a,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const s=gn[i.type],r=It[i.componentType],l=i.normalized===!0,d=new r(i.count*s);return Promise.resolve(new re(d,s,l))}const a=[];return i.bufferView!==void 0?a.push(this.getDependency("bufferView",i.bufferView)):a.push(null),i.sparse!==void 0&&(a.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(a).then(function(s){const r=s[0],l=gn[i.type],d=It[i.componentType],p=d.BYTES_PER_ELEMENT,u=p*l,f=i.byteOffset||0,A=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,b=i.normalized===!0;let m,g;if(A&&A!==u){const x=Math.floor(f/A),h="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+x+":"+i.count;let y=t.cache.get(h);y||(m=new d(r,x*A,i.count*A/p),y=new sc(m,A/p),t.cache.add(h,y)),g=new Bc(y,l,f%A/p,b)}else r===null?m=new d(i.count*l):m=new d(r,f,i.count*l),g=new re(m,l,b);if(i.sparse!==void 0){const x=gn.SCALAR,h=It[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,C=i.sparse.values.byteOffset||0,v=new h(s[1],y,i.sparse.count*x),B=new d(s[2],C,i.sparse.count*l);r!==null&&(g=new re(g.array.slice(),g.itemSize,g.normalized));for(let T=0,S=v.length;T<S;T++){const R=v[T];if(g.setX(R,B[T*l]),l>=2&&g.setY(R,B[T*l+1]),l>=3&&g.setZ(R,B[T*l+2]),l>=4&&g.setW(R,B[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,a=t.textures[e].source,s=t.images[a];let r=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(r=l)}return this.loadTextureImage(e,a,r)}loadTextureImage(e,t,n){const i=this,a=this.json,s=a.textures[e],r=a.images[t],l=(r.uri||r.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const d=this.loadImageSource(t,n).then(function(p){p.flipY=!1,p.name=s.name||r.name||"",p.name===""&&typeof r.uri=="string"&&r.uri.startsWith("data:image/")===!1&&(p.name=r.uri);const f=(a.samplers||{})[s.sampler]||{};return p.magFilter=Oi[f.magFilter]||de,p.minFilter=Oi[f.minFilter]||zs,p.wrapS=zi[f.wrapS]||nt,p.wrapT=zi[f.wrapT]||nt,i.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[l]=d,d}loadImageSource(e,t){const n=this,i=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const s=i.images[e],r=self.URL||self.webkitURL;let l=s.uri||"",d=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(u){d=!0;const f=new Blob([u],{type:s.mimeType});return l=r.createObjectURL(f),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(l).then(function(u){return new Promise(function(f,A){let b=f;t.isImageBitmapLoader===!0&&(b=function(m){const g=new wi(m);g.needsUpdate=!0,f(g)}),t.load(to.resolveURL(u,a.path),b,void 0,A)})}).then(function(u){return d===!0&&r.revokeObjectURL(l),ze(u,s),u.userData.mimeType=s.mimeType||Vu(s.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=p,p}assignTexture(e,t,n,i){const a=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(s=s.clone(),s.channel=n.texCoord),a.extensions[Q.KHR_TEXTURE_TRANSFORM]){const r=n.extensions!==void 0?n.extensions[Q.KHR_TEXTURE_TRANSFORM]:void 0;if(r){const l=a.associations.get(s);s=a.extensions[Q.KHR_TEXTURE_TRANSFORM].extendTexture(s,r),a.associations.set(s,l)}}return i!==void 0&&(typeof i=="number"&&(i=i===Hi?pt:Ne),"colorSpace"in s?s.colorSpace=i:s.encoding=i===pt?Hi:mu),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const r="PointsMaterial:"+n.uuid;let l=this.cache.get(r);l||(l=new uc,dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(r,l)),n=l}else if(e.isLine){const r="LineBasicMaterial:"+n.uuid;let l=this.cache.get(r);l||(l=new dc,dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(r,l)),n=l}if(i||a||s){let r="ClonedMaterial:"+n.uuid+":";i&&(r+="derivative-tangents:"),a&&(r+="vertex-colors:"),s&&(r+="flat-shading:");let l=this.cache.get(r);l||(l=n.clone(),a&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(r,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Me}loadMaterial(e){const t=this,n=this.json,i=this.extensions,a=n.materials[e];let s;const r={},l=a.extensions||{},d=[];if(l[Q.KHR_MATERIALS_UNLIT]){const u=i[Q.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),d.push(u.extendParams(r,a,t))}else{const u=a.pbrMetallicRoughness||{};if(r.color=new Z(1,1,1),r.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;r.color.setRGB(f[0],f[1],f[2],Ne),r.opacity=f[3]}u.baseColorTexture!==void 0&&d.push(t.assignTexture(r,"map",u.baseColorTexture,pt)),r.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,r.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(r,"metalnessMap",u.metallicRoughnessTexture)),d.push(t.assignTexture(r,"roughnessMap",u.metallicRoughnessTexture))),s=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,r)})))}a.doubleSided===!0&&(r.side=en);const p=a.alphaMode||xn.OPAQUE;if(p===xn.BLEND?(r.transparent=!0,r.depthWrite=!1):(r.transparent=!1,p===xn.MASK&&(r.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&s!==et&&(d.push(t.assignTexture(r,"normalMap",a.normalTexture)),r.normalScale=new je(1,1),a.normalTexture.scale!==void 0)){const u=a.normalTexture.scale;r.normalScale.set(u,u)}if(a.occlusionTexture!==void 0&&s!==et&&(d.push(t.assignTexture(r,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(r.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&s!==et){const u=a.emissiveFactor;r.emissive=new Z().setRGB(u[0],u[1],u[2],Ne)}return a.emissiveTexture!==void 0&&s!==et&&d.push(t.assignTexture(r,"emissiveMap",a.emissiveTexture,pt)),Promise.all(d).then(function(){const u=new s(r);return a.name&&(u.name=a.name),ze(u,a),t.associations.set(u,{materials:e}),a.extensions&&ct(i,u,a),u})}createUniqueName(e){const t=fc.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function a(r){return n[Q.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(r,t).then(function(l){return Li(l,r,t)})}const s=[];for(let r=0,l=e.length;r<l;r++){const d=e[r],p=Wu(d),u=i[p];if(u)s.push(u.promise);else{let f;d.extensions&&d.extensions[Q.KHR_DRACO_MESH_COMPRESSION]?f=a(d):f=Li(new Ee,d,t),i[p]={primitive:d,promise:f},s.push(f)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,a=n.meshes[e],s=a.primitives,r=[];for(let l=0,d=s.length;l<d;l++){const p=s[l].material===void 0?Nu(this.cache):this.getDependency("material",s[l].material);r.push(p)}return r.push(t.loadGeometries(s)),Promise.all(r).then(function(l){const d=l.slice(0,l.length-1),p=l[l.length-1],u=[];for(let A=0,b=p.length;A<b;A++){const m=p[A],g=s[A];let x;const h=d[A];if(g.mode===Be.TRIANGLES||g.mode===Be.TRIANGLE_STRIP||g.mode===Be.TRIANGLE_FAN||g.mode===void 0)x=a.isSkinnedMesh===!0?new pc(m,h):new Ie(m,h),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),g.mode===Be.TRIANGLE_STRIP?x.geometry=Ti(x.geometry,Sc):g.mode===Be.TRIANGLE_FAN&&(x.geometry=Ti(x.geometry,Rc));else if(g.mode===Be.LINES)x=new hc(m,h);else if(g.mode===Be.LINE_STRIP)x=new Ac(m,h);else if(g.mode===Be.LINE_LOOP)x=new mc(m,h);else if(g.mode===Be.POINTS)x=new gc(m,h);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(x.geometry.morphAttributes).length>0&&Qu(x,a),x.name=t.createUniqueName(a.name||"mesh_"+e),ze(x,a),g.extensions&&ct(i,x,g),t.assignFinalMaterial(x),u.push(x)}for(let A=0,b=u.length;A<b;A++)t.associations.set(u[A],{meshes:e,primitives:A});if(u.length===1)return a.extensions&&ct(i,u[0],a),u[0];const f=new oo;a.extensions&&ct(i,f,a),t.associations.set(f,{meshes:e});for(let A=0,b=u.length;A<b;A++)f.add(u[A]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new ai(Et.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new xc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ze(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,a=t.joints.length;i<a;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const a=i.pop(),s=i,r=[],l=[];for(let d=0,p=s.length;d<p;d++){const u=s[d];if(u){r.push(u);const f=new ae;a!==null&&f.fromArray(a.array,d*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new yc(r,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],a=i.name?i.name:"animation_"+e,s=[],r=[],l=[],d=[],p=[];for(let u=0,f=i.channels.length;u<f;u++){const A=i.channels[u],b=i.samplers[A.sampler],m=A.target,g=m.node,x=i.parameters!==void 0?i.parameters[b.input]:b.input,h=i.parameters!==void 0?i.parameters[b.output]:b.output;m.node!==void 0&&(s.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",x)),l.push(this.getDependency("accessor",h)),d.push(b),p.push(m))}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(l),Promise.all(d),Promise.all(p)]).then(function(u){const f=u[0],A=u[1],b=u[2],m=u[3],g=u[4],x=[];for(let h=0,y=f.length;h<y;h++){const C=f[h],v=A[h],B=b[h],T=m[h],S=g[h];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const R=n._createAnimationTracks(C,v,B,T,S);if(R)for(let D=0;D<R.length;D++)x.push(R[D])}return new bc(a,void 0,x)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(a){const s=n._getNodeRef(n.meshCache,i.mesh,a);return i.weights!==void 0&&s.traverse(function(r){if(r.isMesh)for(let l=0,d=i.weights.length;l<d;l++)r.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],a=n._loadNodeShallow(e),s=[],r=i.children||[];for(let d=0,p=r.length;d<p;d++)s.push(n.getDependency("node",r[d]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([a,Promise.all(s),l]).then(function(d){const p=d[0],u=d[1],f=d[2];f!==null&&p.traverse(function(A){A.isSkinnedMesh&&A.bind(f,Xu)});for(let A=0,b=u.length;A<b;A++)p.add(u[A]);return p})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],s=a.name?i.createUniqueName(a.name):"",r=[],l=i._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return l&&r.push(l),a.camera!==void 0&&r.push(i.getDependency("camera",a.camera).then(function(d){return i._getNodeRef(i.cameraCache,a.camera,d)})),i._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){r.push(d)}),this.nodeCache[e]=Promise.all(r).then(function(d){let p;if(a.isBone===!0?p=new Cc:d.length>1?p=new oo:d.length===1?p=d[0]:p=new $o,p!==d[0])for(let u=0,f=d.length;u<f;u++)p.add(d[u]);if(a.name&&(p.userData.name=a.name,p.name=s),ze(p,a),a.extensions&&ct(n,p,a),a.matrix!==void 0){const u=new ae;u.fromArray(a.matrix),p.applyMatrix4(u)}else a.translation!==void 0&&p.position.fromArray(a.translation),a.rotation!==void 0&&p.quaternion.fromArray(a.rotation),a.scale!==void 0&&p.scale.fromArray(a.scale);return i.associations.has(p)||i.associations.set(p,{}),i.associations.get(p).nodes=e,p}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,a=new oo;n.name&&(a.name=i.createUniqueName(n.name)),ze(a,n),n.extensions&&ct(t,a,n);const s=n.nodes||[],r=[];for(let l=0,d=s.length;l<d;l++)r.push(i.getDependency("node",s[l]));return Promise.all(r).then(function(l){for(let p=0,u=l.length;p<u;p++)a.add(l[p]);const d=p=>{const u=new Map;for(const[f,A]of i.associations)(f instanceof dn||f instanceof wi)&&u.set(f,A);return p.traverse(f=>{const A=i.associations.get(f);A!=null&&u.set(f,A)}),u};return i.associations=d(a),a})}_createAnimationTracks(e,t,n,i,a){const s=[],r=e.name?e.name:e.uuid,l=[];Xe[a.path]===Xe.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(r);let d;switch(Xe[a.path]){case Xe.weights:d=Ki;break;case Xe.rotation:d=Ei;break;case Xe.position:case Xe.scale:d=Di;break;default:switch(n.itemSize){case 1:d=Ki;break;case 2:case 3:default:d=Di;break}break}const p=i.interpolation!==void 0?Lu[i.interpolation]:Ls,u=this._getArrayFromAccessor(n);for(let f=0,A=l.length;f<A;f++){const b=new d(l[f]+"."+Xe[a.path],t.array,u,p);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),s.push(b)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Vn(t.constructor),i=new Float32Array(t.length);for(let a=0,s=t.length;a<s;a++)i[a]=t[a]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ei?zu:tr;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Zu(o,e,t){const n=e.attributes,i=new ue;if(n.POSITION!==void 0){const r=t.json.accessors[n.POSITION],l=r.min,d=r.max;if(l!==void 0&&d!==void 0){if(i.set(new j(l[0],l[1],l[2]),new j(d[0],d[1],d[2])),r.normalized){const p=Vn(It[r.componentType]);i.min.multiplyScalar(p),i.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const r=new j,l=new j;for(let d=0,p=a.length;d<p;d++){const u=a[d];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],A=f.min,b=f.max;if(A!==void 0&&b!==void 0){if(l.setX(Math.max(Math.abs(A[0]),Math.abs(b[0]))),l.setY(Math.max(Math.abs(A[1]),Math.abs(b[1]))),l.setZ(Math.max(Math.abs(A[2]),Math.abs(b[2]))),f.normalized){const m=Vn(It[f.componentType]);l.multiplyScalar(m)}r.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(r)}o.boundingBox=i;const s=new Ns;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=s}function Li(o,e,t){const n=e.attributes,i=[];function a(s,r){return t.getDependency("accessor",s).then(function(l){o.setAttribute(r,l)})}for(const s in n){const r=Wn[s]||s.toLowerCase();r in o.attributes||i.push(a(n[s],r))}if(e.indices!==void 0&&!o.index){const s=t.getDependency("accessor",e.indices).then(function(r){o.setIndex(r)});i.push(s)}return ze(o,e),Zu(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ju(o,e.targets,t):o})}const bn=new WeakMap;class qu extends ri{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const a=new ao(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,s=>{const r={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(s,r).then(t).catch(i)},n,i)}decodeDracoFile(e,t,n,i){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n};this.decodeGeometry(e,a).then(t)}decodeGeometry(e,t){for(const l in t.attributeTypes){const d=t.attributeTypes[l];d.BYTES_PER_ELEMENT!==void 0&&(t.attributeTypes[l]=d.name)}const n=JSON.stringify(t);if(bn.has(e)){const l=bn.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const a=this.workerNextTaskID++,s=e.byteLength,r=this._getWorker(a,s).then(l=>(i=l,new Promise((d,p)=>{i._callbacks[a]={resolve:d,reject:p},i.postMessage({type:"decode",id:a,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return r.catch(()=>!0).then(()=>{i&&a&&this._releaseTask(i,a)}),bn.set(e,{key:n,promise:r}),r}_createGeometry(e){const t=new Ee;e.index&&t.setIndex(new re(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],a=i.name,s=i.array,r=i.itemSize;t.setAttribute(a,new re(s,r))}return t}_loadLibrary(e,t){const n=new ao(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,a)=>{n.load(e,i,void 0,a)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const a=_u.toString(),s=["/* draco decoder */",i,"","/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([s]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(a){const s=a.data;switch(s.type){case"decode":i._callbacks[s.id].resolve(s);break;case"error":i._callbacks[s.id].reject(s);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+s.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,a){return i._taskLoad>a._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function _u(){let o,e;onmessage=function(s){const r=s.data;switch(r.type){case"init":o=r.decoderConfig,e=new Promise(function(p){o.onModuleLoaded=function(u){p({draco:u})},DracoDecoderModule(o)});break;case"decode":const l=r.buffer,d=r.taskConfig;e.then(p=>{const u=p.draco,f=new u.Decoder,A=new u.DecoderBuffer;A.Init(new Int8Array(l),l.byteLength);try{const b=t(u,f,A,d),m=b.attributes.map(g=>g.array.buffer);b.index&&m.push(b.index.array.buffer),self.postMessage({type:"decode",id:r.id,geometry:b},m)}catch(b){console.error(b),self.postMessage({type:"error",id:r.id,error:b.message})}finally{u.destroy(A),u.destroy(f)}});break}};function t(s,r,l,d){const p=d.attributeIDs,u=d.attributeTypes;let f,A;const b=r.GetEncodedGeometryType(l);if(b===s.TRIANGULAR_MESH)f=new s.Mesh,A=r.DecodeBufferToMesh(l,f);else if(b===s.POINT_CLOUD)f=new s.PointCloud,A=r.DecodeBufferToPointCloud(l,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!A.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+A.error_msg());const m={index:null,attributes:[]};for(const g in p){const x=self[u[g]];let h,y;if(d.useUniqueIDs)y=p[g],h=r.GetAttributeByUniqueId(f,y);else{if(y=r.GetAttributeId(f,s[p[g]]),y===-1)continue;h=r.GetAttribute(f,y)}m.attributes.push(i(s,r,f,g,x,h))}return b===s.TRIANGULAR_MESH&&(m.index=n(s,r,f)),s.destroy(f),m}function n(s,r,l){const p=l.num_faces()*3,u=p*4,f=s._malloc(u);r.GetTrianglesUInt32Array(l,u,f);const A=new Uint32Array(s.HEAPF32.buffer,f,p).slice();return s._free(f),{array:A,itemSize:1}}function i(s,r,l,d,p,u){const f=u.num_components(),b=l.num_points()*f,m=b*p.BYTES_PER_ELEMENT,g=a(s,p),x=s._malloc(m);r.GetAttributeDataArrayForAllPoints(l,u,g,m,x);const h=new p(s.HEAPF32.buffer,x,b).slice();return s._free(x),{name:d,array:h,itemSize:f}}function a(s,r){switch(r){case Float32Array:return s.DT_FLOAT32;case Int8Array:return s.DT_INT8;case Int16Array:return s.DT_INT16;case Int32Array:return s.DT_INT32;case Uint8Array:return s.DT_UINT8;case Uint16Array:return s.DT_UINT16;case Uint32Array:return s.DT_UINT32}}}let bo;const Cn=()=>{if(bo)return bo;const o="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",e="B9h9z9tFBBBFiI9gBB9gLaaaaaFa9gEaaaB9gFaFaEMcBBFBFFGGGEILF9wFFFLEFBFKNFaFCx/aFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBG8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBIy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBKi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBOn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBNI9z9iqlBVc+N9IcIBTEM9+FLa8jUUUUBCTlRBCBRFEXCBRGCBREEXABCNJAGJAECUaAFAGrCFZHIy86BBAEAIJREAGCFJHGCN9HQBMAFCx+YUUBJAE86BBAFCEWCxkUUBJAB8pEN83EBAFCFJHFCUG9HQBMMk8lLbaE97F9+FaL978jUUUUBCU/KBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAG/8cBBCUoBAG9uC/wgBZHKCUGAKCUG9JyRNAECFJRKCBRVGXEXAVAF9PQFANAFAVlAVANJAF9JyRcGXGXAG9FQBAcCbJHIC9wZHMCE9sRSAMCFWRQAICIrCEJCGrRfCBRbEXAKRTCBRtGXEXGXAOATlAf9PQBCBRKSLMALCU/CBJAtAM9sJRmATAfJRKCBREGXAMCoB9JQBAOAKlC/gB9JQBCBRIEXAmAIJREGXGXGXGXGXATAICKrJ2BBHYCEZfIBFGEBMAECBDtDMIBSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIBAKCTJRKMGXGXGXGXGXAYCGrCEZfIBFGEBMAECBDtDMITSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMITAKCTJRKMGXGXGXGXGXAYCIrCEZfIBFGEBMAECBDtDMIASEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIAAKCTJRKMGXGXGXGXGXAYCKrfIBFGEBMAECBDtDMI8wSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCIJAeDeBJAYCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCNJAeDeBJAYCx+YUUBJ2BBJRKSFMAEAKDBBBDMI8wAKCTJRKMAICoBJREAICUFJAM9LQFAERIAOAKlC/fB9LQBMMGXAEAM9PQBAECErRIEXGXAOAKlCi9PQBCBRKSOMAmAEJRYGXGXGXGXGXATAECKrJ2BBAICKZrCEZfIBFGEBMAYCBDtDMIBSEMAYAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAYAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAYAKDBBBDMIBAKCTJRKMAICGJRIAECTJHEAM9JQBMMGXAK9FQBAKRTAtCFJHtCI6QGSFMMCBRKSEMGXAM9FQBALCUGJAbJREALAbJDBGBReCBRYEXAEALCU/CBJAYJHIDBIBHdCFD9tAdCFDbHPD9OD9hD9RHdAIAMJDBIBH8ZCFD9tA8ZAPD9OD9hD9RH8ZDQBTFtGmEYIPLdKeOnHpAIAQJDBIBHyCFD9tAyAPD9OD9hD9RHyAIASJDBIBH8cCFD9tA8cAPD9OD9hD9RH8cDQBTFtGmEYIPLdKeOnH8dDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGEAeD9uHeDyBjGBAEAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeApA8dDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNiV8ZcpMyS8cQ8df8eb8fHdAyA8cDQNiV8ZcpMyS8cQ8df8eb8fH8ZDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJREAYCTJHYAM9JQBMMAbCIJHbAG9JQBMMABAVAG9sJALCUGJAcAG9s/8cBBALALCUGJAcCaJAG9sJAG/8cBBMAcCBAKyAVJRVAKQBMC9+RKSFMCBC99AOAKlAGCAAGCA9Ly6yRKMALCU/KBJ8kUUUUBAKMNBT+BUUUBM+KmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUF/8MBALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM/dLEK97FaF97GXGXAGCI9HQBAF9FQFCBRGEXABABDBBBHECiD+rFCiD+sFD/6FHIAECND+rFCiD+sFD/6FAID/gFAECTD+rFCiD+sFD/6FHLD/gFD/kFD/lFHKCBDtD+2FHOAICUUUU94DtHND9OD9RD/kFHI9DBB/+hDYAIAID/mFAKAKD/mFALAOALAND9OD9RD/kFHIAID/mFD/kFD/kFD/jFD/nFHLD/mF9DBBX9LDYHOD/kFCgFDtD9OAECUUU94DtD9OD9QAIALD/mFAOD/kFCND+rFCU/+EDtD9OD9QAKALD/mFAOD/kFCTD+rFCUU/8ODtD9OD9QDMBBABCTJRBAGCIJHGAF9JQBSGMMAF9FQBCBRGEXABCTJHVAVDBBBHECBDtHOCUU98D8cFCUU98D8cEHND9OABDBBBHKAEDQILKOSQfbPden8c8d8e8fCggFDtD9OD/6FAKAEDQBFGENVcMTtmYi8ZpyHECTD+sFD/6FHID/gFAECTD+rFCTD+sFD/6FHLD/gFD/kFD/lFHE9DB/+g6DYALAEAOD+2FHOALCUUUU94DtHcD9OD9RD/kFHLALD/mFAEAED/mFAIAOAIAcD9OD9RD/kFHEAED/mFD/kFD/kFD/jFD/nFHID/mF9DBBX9LDYHOD/kFCTD+rFALAID/mFAOD/kFCggEDtD9OD9QHLAEAID/mFAOD/kFCaDbCBDnGCBDnECBDnKCBDnOCBDncCBDnMCBDnfCBDnbD9OHEDQNVi8ZcMpySQ8c8dfb8e8fD9QDMBBABAKAND9OALAEDQBFTtGEmYILPdKOenD9QDMBBABCAJRBAGCIJHGAF9JQBMMM/hEIGaF97FaL978jUUUUBCTlREGXAF9FQBCBRIEXAEABDBBBHLABCTJHKDBBBHODQILKOSQfbPden8c8d8e8fHNCTD+sFHVCID+rFDMIBAB9DBBU8/DY9D/zI818/DYAVCEDtD9QD/6FD/nFHVALAODQBFGENVcMTtmYi8ZpyHLCTD+rFCTD+sFD/6FD/mFHOAOD/mFAVALCTD+sFD/6FD/mFHcAcD/mFAVANCTD+rFCTD+sFD/6FD/mFHNAND/mFD/kFD/kFD/lFCBDtD+4FD/jF9DB/+g6DYHVD/mF9DBBX9LDYHLD/kFCggEDtHMD9OAcAVD/mFALD/kFCTD+rFD9QHcANAVD/mFALD/kFCTD+rFAOAVD/mFALD/kFAMD9OD9QHVDQBFTtGEmYILPdKOenHLD8dBAEDBIBDyB+t+J83EBABCNJALD8dFAEDBIBDyF+t+J83EBAKAcAVDQNVi8ZcMpySQ8c8dfb8e8fHVD8dBAEDBIBDyG+t+J83EBABCiJAVD8dFAEDBIBDyE+t+J83EBABCAJRBAICIJHIAF9JQBMMM9jFF97GXAGCGrAF9sHG9FQBCBRFEXABABDBBBHECND+rFCND+sFD/6FAECiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMBBABCTJRBAFCIJHFAG9JQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEMMMFBCUNMIT9tBB",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,253,3,1,2,34,4,106,6,5,11,8,7,20,13,33,12,16,128,9,116,64,19,113,127,15,10,21,22,14,255,66,24,54,136,107,18,23,192,26,114,118,132,17,77,101,130,144,27,87,131,44,45,74,156,154,70,167]);if(typeof WebAssembly!="object")return{supported:!1};let i=o;WebAssembly.validate(t)&&(i=e);let a;const s=WebAssembly.instantiate(r(i),{}).then(u=>{a=u.instance,a.exports.__wasm_call_ctors()});function r(u){const f=new Uint8Array(u.length);for(let b=0;b<u.length;++b){const m=u.charCodeAt(b);f[b]=m>96?m-71:m>64?m-65:m>47?m+4:m>46?63:62}let A=0;for(let b=0;b<u.length;++b)f[A++]=f[b]<60?n[f[b]]:(f[b]-60)*64+f[++b];return f.buffer.slice(0,A)}function l(u,f,A,b,m,g){const x=a.exports.sbrk,h=A+3&-4,y=x(h*b),C=x(m.length),v=new Uint8Array(a.exports.memory.buffer);v.set(m,C);const B=u(y,A,b,C,m.length);if(B===0&&g&&g(y,h,b),f.set(v.subarray(y,y+A*b)),x(y-x(0)),B!==0)throw new Error(`Malformed buffer data: ${B}`)}const d={0:"",1:"meshopt_decodeFilterOct",2:"meshopt_decodeFilterQuat",3:"meshopt_decodeFilterExp",NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},p={0:"meshopt_decodeVertexBuffer",1:"meshopt_decodeIndexBuffer",2:"meshopt_decodeIndexSequence",ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"};return bo={ready:s,supported:!0,decodeVertexBuffer(u,f,A,b,m){l(a.exports.meshopt_decodeVertexBuffer,u,f,A,b,a.exports[d[m]])},decodeIndexBuffer(u,f,A,b){l(a.exports.meshopt_decodeIndexBuffer,u,f,A,b)},decodeIndexSequence(u,f,A,b){l(a.exports.meshopt_decodeIndexSequence,u,f,A,b)},decodeGltfBuffer(u,f,A,b,m,g){l(a.exports[p[m]],u,f,A,b,a.exports[d[g]])}},bo};function $u(o,e,t,n){const i=class extends co{constructor(s={}){const r=Object.entries(o);super({uniforms:r.reduce((l,[d,p])=>{const u=Gs.clone({[d]:{value:p}});return{...l,...u}},{}),vertexShader:e,fragmentShader:t}),this.key="",r.forEach(([l])=>Object.defineProperty(this,l,{get:()=>this.uniforms[l].value,set:d=>this.uniforms[l].value=d})),Object.assign(this,s)}};return i.key=Et.generateUUID(),i}const ed=()=>parseInt(Mc.replace(/\D+/g,"")),or=ed();let Co=null,nr="https://www.gstatic.com/draco/versioned/decoders/1.5.5/";function ir(o=!0,e=!0,t){return n=>{t&&t(n),o&&(Co||(Co=new qu),Co.setDecoderPath(typeof o=="string"?o:nr),n.setDRACOLoader(Co)),e&&n.setMeshoptDecoder(typeof Cn=="function"?Cn():Cn)}}const at=(o,e,t,n)=>uo(Ai,o,ir(e,t,n));at.preload=(o,e,t,n)=>uo.preload(Ai,o,ir(e,t,n));at.clear=o=>uo.clear(Ai,o);at.setDecoderPath=o=>{nr=o};const td=$u({cellSize:.5,sectionSize:1,fadeDistance:100,fadeStrength:1,fadeFrom:1,cellThickness:.5,sectionThickness:1,cellColor:new Z,sectionColor:new Z,infiniteGrid:!1,followCamera:!1,worldCamProjPosition:new j,worldPlanePosition:new j},`
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
      #include <${or>=154?"colorspace_fragment":"encodings_fragment"}>
    }
  `),od=F.forwardRef(({args:o,cellColor:e="#000000",sectionColor:t="#2080ff",cellSize:n=.5,sectionSize:i=1,followCamera:a=!1,infiniteGrid:s=!1,fadeDistance:r=100,fadeStrength:l=1,fadeFrom:d=1,cellThickness:p=.5,sectionThickness:u=1,side:f=_o,...A},b)=>{Tc({GridMaterial:td});const m=F.useRef(null);F.useImperativeHandle(b,()=>m.current,[]);const g=new li,x=new j(0,1,0),h=new j(0,0,0);fo(v=>{g.setFromNormalAndCoplanarPoint(x,h).applyMatrix4(m.current.matrixWorld);const B=m.current.material,T=B.uniforms.worldCamProjPosition,S=B.uniforms.worldPlanePosition;g.projectPoint(v.camera.position,T.value),S.value.set(0,0,0).applyMatrix4(m.current.matrixWorld)});const y={cellSize:n,sectionSize:i,cellColor:e,sectionColor:t,cellThickness:p,sectionThickness:u},C={fadeDistance:r,fadeStrength:l,fadeFrom:d,infiniteGrid:s,followCamera:a};return F.createElement("mesh",Ln({ref:m,frustumCulled:!1},A),F.createElement("gridMaterial",Ln({transparent:!0,"extensions-derivatives":!0,side:f},y,C)),F.createElement("planeGeometry",{args:o}))}),sr=0,nd=1,rr=2,Ni=2,vn=1.25,Ji=1,it=6*4+4+4,rn=65535,id=Math.pow(2,-24),Bn=Symbol("SKIP_GENERATION");function ar(o){return o.index?o.index.count:o.attributes.position.count}function Ht(o){return ar(o)/3}function lr(o,e=ArrayBuffer){return o>65535?new Uint32Array(new e(4*o)):new Uint16Array(new e(2*o))}function sd(o,e){if(!o.index){const t=o.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=lr(t,n);o.setIndex(new re(i,1));for(let a=0;a<t;a++)i[a]=a}}function cr(o,e){const t=Ht(o),n=e||o.drawRange,i=n.start/3,a=(n.start+n.count)/3,s=Math.max(0,i),r=Math.min(t,a)-s;return[{offset:Math.floor(s),count:Math.floor(r)}]}function ur(o,e){if(!o.groups||!o.groups.length)return cr(o,e);const t=[],n=new Set,i=e||o.drawRange,a=i.start/3,s=(i.start+i.count)/3;for(const l of o.groups){const d=l.start/3,p=(l.start+l.count)/3;n.add(Math.max(a,d)),n.add(Math.min(s,p))}const r=Array.from(n.values()).sort((l,d)=>l-d);for(let l=0;l<r.length-1;l++){const d=r[l],p=r[l+1];t.push({offset:Math.floor(d),count:Math.floor(p-d)})}return t}function rd(o,e){const t=Ht(o),n=ur(o,e).sort((s,r)=>s.offset-r.offset),i=n[n.length-1];i.count=Math.min(t-i.offset,i.count);let a=0;return n.forEach(({count:s})=>a+=s),t!==a}function Fn(o,e,t,n,i){let a=1/0,s=1/0,r=1/0,l=-1/0,d=-1/0,p=-1/0,u=1/0,f=1/0,A=1/0,b=-1/0,m=-1/0,g=-1/0;for(let x=e*6,h=(e+t)*6;x<h;x+=6){const y=o[x+0],C=o[x+1],v=y-C,B=y+C;v<a&&(a=v),B>l&&(l=B),y<u&&(u=y),y>b&&(b=y);const T=o[x+2],S=o[x+3],R=T-S,D=T+S;R<s&&(s=R),D>d&&(d=D),T<f&&(f=T),T>m&&(m=T);const w=o[x+4],M=o[x+5],E=w-M,K=w+M;E<r&&(r=E),K>p&&(p=K),w<A&&(A=w),w>g&&(g=w)}n[0]=a,n[1]=s,n[2]=r,n[3]=l,n[4]=d,n[5]=p,i[0]=u,i[1]=f,i[2]=A,i[3]=b,i[4]=m,i[5]=g}function ad(o,e=null,t=null,n=null){const i=o.attributes.position,a=o.index?o.index.array:null,s=Ht(o),r=i.normalized;let l;e===null?(l=new Float32Array(s*6*4),t=0,n=s):(l=e,t=t||0,n=n||s);const d=i.array,p=i.offset||0;let u=3;i.isInterleavedBufferAttribute&&(u=i.data.stride);const f=["getX","getY","getZ"];for(let A=t;A<t+n;A++){const b=A*3,m=A*6;let g=b+0,x=b+1,h=b+2;a&&(g=a[g],x=a[x],h=a[h]),r||(g=g*u+p,x=x*u+p,h=h*u+p);for(let y=0;y<3;y++){let C,v,B;r?(C=i[f[y]](g),v=i[f[y]](x),B=i[f[y]](h)):(C=d[g+y],v=d[x+y],B=d[h+y]);let T=C;v<T&&(T=v),B<T&&(T=B);let S=C;v>S&&(S=v),B>S&&(S=B);const R=(S-T)/2,D=y*2;l[m+D+0]=T+R,l[m+D+1]=R+(Math.abs(T)+R)*id}}return l}function $(o,e,t){return t.min.x=e[o],t.min.y=e[o+1],t.min.z=e[o+2],t.max.x=e[o+3],t.max.y=e[o+4],t.max.z=e[o+5],t}function Qi(o){let e=-1,t=-1/0;for(let n=0;n<3;n++){const i=o[n+3]-o[n];i>t&&(t=i,e=n)}return e}function Wi(o,e){e.set(o)}function Vi(o,e,t){let n,i;for(let a=0;a<3;a++){const s=a+3;n=o[a],i=e[a],t[a]=n<i?n:i,n=o[s],i=e[s],t[s]=n>i?n:i}}function vo(o,e,t){for(let n=0;n<3;n++){const i=e[o+2*n],a=e[o+2*n+1],s=i-a,r=i+a;s<t[n]&&(t[n]=s),r>t[n+3]&&(t[n+3]=r)}}function Lt(o){const e=o[3]-o[0],t=o[4]-o[1],n=o[5]-o[2];return 2*(e*t+t*n+n*e)}const Oe=32,ld=(o,e)=>o.candidate-e.candidate,Ye=new Array(Oe).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Bo=new Float32Array(6);function cd(o,e,t,n,i,a){let s=-1,r=0;if(a===sr)s=Qi(e),s!==-1&&(r=(e[s]+e[s+3])/2);else if(a===nd)s=Qi(o),s!==-1&&(r=ud(t,n,i,s));else if(a===rr){const l=Lt(o);let d=vn*i;const p=n*6,u=(n+i)*6;for(let f=0;f<3;f++){const A=e[f],g=(e[f+3]-A)/Oe;if(i<Oe/4){const x=[...Ye];x.length=i;let h=0;for(let C=p;C<u;C+=6,h++){const v=x[h];v.candidate=t[C+2*f],v.count=0;const{bounds:B,leftCacheBounds:T,rightCacheBounds:S}=v;for(let R=0;R<3;R++)S[R]=1/0,S[R+3]=-1/0,T[R]=1/0,T[R+3]=-1/0,B[R]=1/0,B[R+3]=-1/0;vo(C,t,B)}x.sort(ld);let y=i;for(let C=0;C<y;C++){const v=x[C];for(;C+1<y&&x[C+1].candidate===v.candidate;)x.splice(C+1,1),y--}for(let C=p;C<u;C+=6){const v=t[C+2*f];for(let B=0;B<y;B++){const T=x[B];v>=T.candidate?vo(C,t,T.rightCacheBounds):(vo(C,t,T.leftCacheBounds),T.count++)}}for(let C=0;C<y;C++){const v=x[C],B=v.count,T=i-v.count,S=v.leftCacheBounds,R=v.rightCacheBounds;let D=0;B!==0&&(D=Lt(S)/l);let w=0;T!==0&&(w=Lt(R)/l);const M=Ji+vn*(D*B+w*T);M<d&&(s=f,d=M,r=v.candidate)}}else{for(let y=0;y<Oe;y++){const C=Ye[y];C.count=0,C.candidate=A+g+y*g;const v=C.bounds;for(let B=0;B<3;B++)v[B]=1/0,v[B+3]=-1/0}for(let y=p;y<u;y+=6){let B=~~((t[y+2*f]-A)/g);B>=Oe&&(B=Oe-1);const T=Ye[B];T.count++,vo(y,t,T.bounds)}const x=Ye[Oe-1];Wi(x.bounds,x.rightCacheBounds);for(let y=Oe-2;y>=0;y--){const C=Ye[y],v=Ye[y+1];Vi(C.bounds,v.rightCacheBounds,C.rightCacheBounds)}let h=0;for(let y=0;y<Oe-1;y++){const C=Ye[y],v=C.count,B=C.bounds,S=Ye[y+1].rightCacheBounds;v!==0&&(h===0?Wi(B,Bo):Vi(B,Bo,Bo)),h+=v;let R=0,D=0;h!==0&&(R=Lt(Bo)/l);const w=i-h;w!==0&&(D=Lt(S)/l);const M=Ji+vn*(R*h+D*w);M<d&&(s=f,d=M,r=C.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${a} used.`);return{axis:s,pos:r}}function ud(o,e,t,n){let i=0;for(let a=e,s=e+t;a<s;a++)i+=o[a*6+n*2];return i/t}class Sn{constructor(){this.boundingData=new Float32Array(6)}}function dd(o,e,t,n,i,a){let s=n,r=n+i-1;const l=a.pos,d=a.axis*2;for(;;){for(;s<=r&&t[s*6+d]<l;)s++;for(;s<=r&&t[r*6+d]>=l;)r--;if(s<r){for(let p=0;p<3;p++){let u=e[s*3+p];e[s*3+p]=e[r*3+p],e[r*3+p]=u}for(let p=0;p<6;p++){let u=t[s*6+p];t[s*6+p]=t[r*6+p],t[r*6+p]=u}s++,r--}else return s}}function fd(o,e,t,n,i,a){let s=n,r=n+i-1;const l=a.pos,d=a.axis*2;for(;;){for(;s<=r&&t[s*6+d]<l;)s++;for(;s<=r&&t[r*6+d]>=l;)r--;if(s<r){let p=o[s];o[s]=o[r],o[r]=p;for(let u=0;u<6;u++){let f=t[s*6+u];t[s*6+u]=t[r*6+u],t[r*6+u]=f}s++,r--}else return s}}function pe(o,e){return e[o+15]===65535}function ge(o,e){return e[o+6]}function be(o,e){return e[o+14]}function Fe(o){return o+8}function Ce(o,e){return e[o+6]}function mi(o,e){return e[o+7]}let dr,qt,Lo,fr;const pd=Math.pow(2,32);function Xn(o){return"count"in o?1:1+Xn(o.left)+Xn(o.right)}function hd(o,e,t){return dr=new Float32Array(t),qt=new Uint32Array(t),Lo=new Uint16Array(t),fr=new Uint8Array(t),Yn(o,e)}function Yn(o,e){const t=o/4,n=o/2,i="count"in e,a=e.boundingData;for(let s=0;s<6;s++)dr[t+s]=a[s];if(i)if(e.buffer){const s=e.buffer;fr.set(new Uint8Array(s),o);for(let r=o,l=o+s.byteLength;r<l;r+=it){const d=r/2;pe(d,Lo)||(qt[r/4+6]+=t)}return o+s.byteLength}else{const s=e.offset,r=e.count;return qt[t+6]=s,Lo[n+14]=r,Lo[n+15]=rn,o+it}else{const s=e.left,r=e.right,l=e.splitAxis;let d;if(d=Yn(o+it,s),d/4>pd)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return qt[t+6]=d/4,d=Yn(d,r),qt[t+7]=l,d}}function Ad(o,e){const t=(o.index?o.index.count:o.attributes.position.count)/3,n=t>2**16,i=n?4:2,a=e?new SharedArrayBuffer(t*i):new ArrayBuffer(t*i),s=n?new Uint32Array(a):new Uint16Array(a);for(let r=0,l=s.length;r<l;r++)s[r]=r;return s}function md(o,e,t,n,i){const{maxDepth:a,verbose:s,maxLeafTris:r,strategy:l,onProgress:d,indirect:p}=i,u=o._indirectBuffer,f=o.geometry,A=f.index?f.index.array:null,b=p?fd:dd,m=Ht(f),g=new Float32Array(6);let x=!1;const h=new Sn;return Fn(e,t,n,h.boundingData,g),C(h,t,n,g),h;function y(v){d&&d(v/m)}function C(v,B,T,S=null,R=0){if(!x&&R>=a&&(x=!0,s&&(console.warn(`MeshBVH: Max depth of ${a} reached when generating BVH. Consider increasing maxDepth.`),console.warn(f))),T<=r||R>=a)return y(B+T),v.offset=B,v.count=T,v;const D=cd(v.boundingData,S,e,B,T,l);if(D.axis===-1)return y(B+T),v.offset=B,v.count=T,v;const w=b(u,A,e,B,T,D);if(w===B||w===B+T)y(B+T),v.offset=B,v.count=T;else{v.splitAxis=D.axis;const M=new Sn,E=B,K=w-B;v.left=M,Fn(e,E,K,M.boundingData,g),C(M,E,K,g,R+1);const I=new Sn,k=w,P=T-K;v.right=I,Fn(e,k,P,I.boundingData,g),C(I,k,P,g,R+1)}return v}}function gd(o,e){const t=o.geometry;e.indirect&&(o._indirectBuffer=Ad(t,e.useSharedArrayBuffer),rd(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),o._indirectBuffer||sd(t,e);const n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=ad(t),a=e.indirect?cr(t,e.range):ur(t,e.range);o._roots=a.map(s=>{const r=md(o,i,s.offset,s.count,e),l=Xn(r),d=new n(it*l);return hd(0,r,d),d})}class Je{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let a=0,s=e.length;a<s;a++){const l=e[a][t];n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let a=0,s=t.length;a<s;a++){const r=t[a],l=e.dot(r);n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}Je.prototype.setFromBox=function(){const o=new j;return function(t,n){const i=n.min,a=n.max;let s=1/0,r=-1/0;for(let l=0;l<=1;l++)for(let d=0;d<=1;d++)for(let p=0;p<=1;p++){o.x=i.x*l+a.x*(1-l),o.y=i.y*d+a.y*(1-d),o.z=i.z*p+a.z*(1-p);const u=t.dot(o);s=Math.min(u,s),r=Math.max(u,r)}this.min=s,this.max=r}}();const xd=function(){const o=new j,e=new j,t=new j;return function(i,a,s){const r=i.start,l=o,d=a.start,p=e;t.subVectors(r,d),o.subVectors(i.end,i.start),e.subVectors(a.end,a.start);const u=t.dot(p),f=p.dot(l),A=p.dot(p),b=t.dot(l),g=l.dot(l)*A-f*f;let x,h;g!==0?x=(u*f-b*A)/g:x=0,h=(u+x*f)/A,s.x=x,s.y=h}}(),gi=function(){const o=new je,e=new j,t=new j;return function(i,a,s,r){xd(i,a,o);let l=o.x,d=o.y;if(l>=0&&l<=1&&d>=0&&d<=1){i.at(l,s),a.at(d,r);return}else if(l>=0&&l<=1){d<0?a.at(0,r):a.at(1,r),i.closestPointToPoint(r,!0,s);return}else if(d>=0&&d<=1){l<0?i.at(0,s):i.at(1,s),a.closestPointToPoint(s,!0,r);return}else{let p;l<0?p=i.start:p=i.end;let u;d<0?u=a.start:u=a.end;const f=e,A=t;if(i.closestPointToPoint(u,!0,e),a.closestPointToPoint(p,!0,t),f.distanceToSquared(u)<=A.distanceToSquared(p)){s.copy(f),r.copy(u);return}else{s.copy(p),r.copy(A);return}}}}(),yd=function(){const o=new j,e=new j,t=new li,n=new Le;return function(a,s){const{radius:r,center:l}=a,{a:d,b:p,c:u}=s;if(n.start=d,n.end=p,n.closestPointToPoint(l,!0,o).distanceTo(l)<=r||(n.start=d,n.end=u,n.closestPointToPoint(l,!0,o).distanceTo(l)<=r)||(n.start=p,n.end=u,n.closestPointToPoint(l,!0,o).distanceTo(l)<=r))return!0;const m=s.getPlane(t);if(Math.abs(m.distanceToPoint(l))<=r){const x=m.projectPoint(l,e);if(s.containsPoint(x))return!0}return!1}}(),bd=1e-15;function Rn(o){return Math.abs(o)<bd}class ke extends Zt{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new j),this.satBounds=new Array(4).fill().map(()=>new Je),this.points=[this.a,this.b,this.c],this.sphere=new Ns,this.plane=new li,this.needsUpdate=!0}intersectsSphere(e){return yd(e,this)}update(){const e=this.a,t=this.b,n=this.c,i=this.points,a=this.satAxes,s=this.satBounds,r=a[0],l=s[0];this.getNormal(r),l.setFromPoints(r,i);const d=a[1],p=s[1];d.subVectors(e,t),p.setFromPoints(d,i);const u=a[2],f=s[2];u.subVectors(t,n),f.setFromPoints(u,i);const A=a[3],b=s[3];A.subVectors(n,e),b.setFromPoints(A,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(r,e),this.needsUpdate=!1}}ke.prototype.closestPointToSegment=function(){const o=new j,e=new j,t=new Le;return function(i,a=null,s=null){const{start:r,end:l}=i,d=this.points;let p,u=1/0;for(let f=0;f<3;f++){const A=(f+1)%3;t.start.copy(d[f]),t.end.copy(d[A]),gi(t,i,o,e),p=o.distanceToSquared(e),p<u&&(u=p,a&&a.copy(o),s&&s.copy(e))}return this.closestPointToPoint(r,o),p=r.distanceToSquared(o),p<u&&(u=p,a&&a.copy(o),s&&s.copy(r)),this.closestPointToPoint(l,o),p=l.distanceToSquared(o),p<u&&(u=p,a&&a.copy(o),s&&s.copy(l)),Math.sqrt(u)}}();ke.prototype.intersectsTriangle=function(){const o=new ke,e=new Array(3),t=new Array(3),n=new Je,i=new Je,a=new j,s=new j,r=new j,l=new j,d=new j,p=new Le,u=new Le,f=new Le,A=new j;function b(m,g,x){const h=m.points;let y=0,C=-1;for(let v=0;v<3;v++){const{start:B,end:T}=p;B.copy(h[v]),T.copy(h[(v+1)%3]),p.delta(s);const S=Rn(g.distanceToPoint(B));if(Rn(g.normal.dot(s))&&S){x.copy(p),y=2;break}const R=g.intersectLine(p,A);if(!R&&S&&A.copy(B),(R||S)&&!Rn(A.distanceTo(T))){if(y<=1)(y===1?x.start:x.end).copy(A),S&&(C=y);else if(y>=2){(C===1?x.start:x.end).copy(A),y=2;break}if(y++,y===2&&C===-1)break}}return y}return function(g,x=null,h=!1){this.needsUpdate&&this.update(),g.isExtendedTriangle?g.needsUpdate&&g.update():(o.copy(g),o.update(),g=o);const y=this.plane,C=g.plane;if(Math.abs(y.normal.dot(C.normal))>1-1e-10){const v=this.satBounds,B=this.satAxes;t[0]=g.a,t[1]=g.b,t[2]=g.c;for(let R=0;R<4;R++){const D=v[R],w=B[R];if(n.setFromPoints(w,t),D.isSeparated(n))return!1}const T=g.satBounds,S=g.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let R=0;R<4;R++){const D=T[R],w=S[R];if(n.setFromPoints(w,e),D.isSeparated(n))return!1}for(let R=0;R<4;R++){const D=B[R];for(let w=0;w<4;w++){const M=S[w];if(a.crossVectors(D,M),n.setFromPoints(a,e),i.setFromPoints(a,t),n.isSeparated(i))return!1}}return x&&(h||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),x.start.set(0,0,0),x.end.set(0,0,0)),!0}else{const v=b(this,C,u);if(v===1&&g.containsPoint(u.end))return x&&(x.start.copy(u.end),x.end.copy(u.end)),!0;if(v!==2)return!1;const B=b(g,y,f);if(B===1&&this.containsPoint(f.end))return x&&(x.start.copy(f.end),x.end.copy(f.end)),!0;if(B!==2)return!1;if(u.delta(r),f.delta(l),r.dot(l)<0){let E=f.start;f.start=f.end,f.end=E}const T=u.start.dot(r),S=u.end.dot(r),R=f.start.dot(r),D=f.end.dot(r),w=S<R,M=T<D;return T!==D&&R!==S&&w===M?!1:(x&&(d.subVectors(u.start,f.start),d.dot(r)>0?x.start.copy(u.start):x.start.copy(f.start),d.subVectors(u.end,f.end),d.dot(r)<0?x.end.copy(u.end):x.end.copy(f.end)),!0)}}}();ke.prototype.distanceToPoint=function(){const o=new j;return function(t){return this.closestPointToPoint(t,o),t.distanceTo(o)}}();ke.prototype.distanceToTriangle=function(){const o=new j,e=new j,t=["a","b","c"],n=new Le,i=new Le;return function(s,r=null,l=null){const d=r||l?n:null;if(this.intersectsTriangle(s,d))return(r||l)&&(r&&d.getCenter(r),l&&d.getCenter(l)),0;let p=1/0;for(let u=0;u<3;u++){let f;const A=t[u],b=s[A];this.closestPointToPoint(b,o),f=b.distanceToSquared(o),f<p&&(p=f,r&&r.copy(o),l&&l.copy(b));const m=this[A];s.closestPointToPoint(m,o),f=m.distanceToSquared(o),f<p&&(p=f,r&&r.copy(m),l&&l.copy(o))}for(let u=0;u<3;u++){const f=t[u],A=t[(u+1)%3];n.set(this[f],this[A]);for(let b=0;b<3;b++){const m=t[b],g=t[(b+1)%3];i.set(s[m],s[g]),gi(n,i,o,e);const x=o.distanceToSquared(e);x<p&&(p=x,r&&r.copy(o),l&&l.copy(e))}}return Math.sqrt(p)}}();class Ae{constructor(e,t,n){this.isOrientedBox=!0,this.min=new j,this.max=new j,this.matrix=new ae,this.invMatrix=new ae,this.points=new Array(8).fill().map(()=>new j),this.satAxes=new Array(3).fill().map(()=>new j),this.satBounds=new Array(3).fill().map(()=>new Je),this.alignedSatBounds=new Array(3).fill().map(()=>new Je),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}Ae.prototype.update=function(){return function(){const e=this.matrix,t=this.min,n=this.max,i=this.points;for(let d=0;d<=1;d++)for(let p=0;p<=1;p++)for(let u=0;u<=1;u++){const f=1*d|2*p|4*u,A=i[f];A.x=d?n.x:t.x,A.y=p?n.y:t.y,A.z=u?n.z:t.z,A.applyMatrix4(e)}const a=this.satBounds,s=this.satAxes,r=i[0];for(let d=0;d<3;d++){const p=s[d],u=a[d],f=1<<d,A=i[f];p.subVectors(r,A),u.setFromPoints(p,i)}const l=this.alignedSatBounds;l[0].setFromPointsField(i,"x"),l[1].setFromPointsField(i,"y"),l[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();Ae.prototype.intersectsBox=function(){const o=new Je;return function(t){this.needsUpdate&&this.update();const n=t.min,i=t.max,a=this.satBounds,s=this.satAxes,r=this.alignedSatBounds;if(o.min=n.x,o.max=i.x,r[0].isSeparated(o)||(o.min=n.y,o.max=i.y,r[1].isSeparated(o))||(o.min=n.z,o.max=i.z,r[2].isSeparated(o)))return!1;for(let l=0;l<3;l++){const d=s[l],p=a[l];if(o.setFromBox(d,t),p.isSeparated(o))return!1}return!0}}();Ae.prototype.intersectsTriangle=function(){const o=new ke,e=new Array(3),t=new Je,n=new Je,i=new j;return function(s){this.needsUpdate&&this.update(),s.isExtendedTriangle?s.needsUpdate&&s.update():(o.copy(s),o.update(),s=o);const r=this.satBounds,l=this.satAxes;e[0]=s.a,e[1]=s.b,e[2]=s.c;for(let f=0;f<3;f++){const A=r[f],b=l[f];if(t.setFromPoints(b,e),A.isSeparated(t))return!1}const d=s.satBounds,p=s.satAxes,u=this.points;for(let f=0;f<3;f++){const A=d[f],b=p[f];if(t.setFromPoints(b,u),A.isSeparated(t))return!1}for(let f=0;f<3;f++){const A=l[f];for(let b=0;b<4;b++){const m=p[b];if(i.crossVectors(A,m),t.setFromPoints(i,e),n.setFromPoints(i,u),t.isSeparated(n))return!1}}return!0}}();Ae.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();Ae.prototype.distanceToPoint=function(){const o=new j;return function(t){return this.closestPointToPoint(t,o),t.distanceTo(o)}}();Ae.prototype.distanceToBox=function(){const o=["x","y","z"],e=new Array(12).fill().map(()=>new Le),t=new Array(12).fill().map(()=>new Le),n=new j,i=new j;return function(s,r=0,l=null,d=null){if(this.needsUpdate&&this.update(),this.intersectsBox(s))return(l||d)&&(s.getCenter(i),this.closestPointToPoint(i,n),s.closestPointToPoint(n,i),l&&l.copy(n),d&&d.copy(i)),0;const p=r*r,u=s.min,f=s.max,A=this.points;let b=1/0;for(let g=0;g<8;g++){const x=A[g];i.copy(x).clamp(u,f);const h=x.distanceToSquared(i);if(h<b&&(b=h,l&&l.copy(x),d&&d.copy(i),h<p))return Math.sqrt(h)}let m=0;for(let g=0;g<3;g++)for(let x=0;x<=1;x++)for(let h=0;h<=1;h++){const y=(g+1)%3,C=(g+2)%3,v=x<<y|h<<C,B=1<<g|x<<y|h<<C,T=A[v],S=A[B];e[m].set(T,S);const D=o[g],w=o[y],M=o[C],E=t[m],K=E.start,I=E.end;K[D]=u[D],K[w]=x?u[w]:f[w],K[M]=h?u[M]:f[w],I[D]=f[D],I[w]=x?u[w]:f[w],I[M]=h?u[M]:f[w],m++}for(let g=0;g<=1;g++)for(let x=0;x<=1;x++)for(let h=0;h<=1;h++){i.x=g?f.x:u.x,i.y=x?f.y:u.y,i.z=h?f.z:u.z,this.closestPointToPoint(i,n);const y=i.distanceToSquared(n);if(y<b&&(b=y,l&&l.copy(n),d&&d.copy(i),y<p))return Math.sqrt(y)}for(let g=0;g<12;g++){const x=e[g];for(let h=0;h<12;h++){const y=t[h];gi(x,y,n,i);const C=n.distanceToSquared(i);if(C<b&&(b=C,l&&l.copy(n),d&&d.copy(i),C<p))return Math.sqrt(C)}}return Math.sqrt(b)}}();class xi{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class Cd extends xi{constructor(){super(()=>new ke)}}const Se=new Cd;class vd{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const q=new vd;let tt,Kt;const yt=[],Fo=new xi(()=>new ue);function Bd(o,e,t,n,i,a){tt=Fo.getPrimitive(),Kt=Fo.getPrimitive(),yt.push(tt,Kt),q.setBuffer(o._roots[e]);const s=Zn(0,o.geometry,t,n,i,a);q.clearBuffer(),Fo.releasePrimitive(tt),Fo.releasePrimitive(Kt),yt.pop(),yt.pop();const r=yt.length;return r>0&&(Kt=yt[r-1],tt=yt[r-2]),s}function Zn(o,e,t,n,i=null,a=0,s=0){const{float32Array:r,uint16Array:l,uint32Array:d}=q;let p=o*2;if(pe(p,l)){const f=ge(o,d),A=be(p,l);return $(o,r,tt),n(f,A,!1,s,a+o,tt)}else{let D=function(M){const{uint16Array:E,uint32Array:K}=q;let I=M*2;for(;!pe(I,E);)M=Fe(M),I=M*2;return ge(M,K)},w=function(M){const{uint16Array:E,uint32Array:K}=q;let I=M*2;for(;!pe(I,E);)M=Ce(M,K),I=M*2;return ge(M,K)+be(I,E)};const f=Fe(o),A=Ce(o,d);let b=f,m=A,g,x,h,y;if(i&&(h=tt,y=Kt,$(b,r,h),$(m,r,y),g=i(h),x=i(y),x<g)){b=A,m=f;const M=g;g=x,x=M,h=y}h||(h=tt,$(b,r,h));const C=pe(b*2,l),v=t(h,C,g,s+1,a+b);let B;if(v===Ni){const M=D(b),K=w(b)-M;B=n(M,K,!0,s+1,a+b,h)}else B=v&&Zn(b,e,t,n,i,a,s+1);if(B)return!0;y=Kt,$(m,r,y);const T=pe(m*2,l),S=t(y,T,x,s+1,a+m);let R;if(S===Ni){const M=D(m),K=w(m)-M;R=n(M,K,!0,s+1,a+m,y)}else R=S&&Zn(m,e,t,n,i,a,s+1);return!!R}}const Nt=new j,Mn=new j;function Fd(o,e,t={},n=0,i=1/0){const a=n*n,s=i*i;let r=1/0,l=null;if(o.shapecast({boundsTraverseOrder:p=>(Nt.copy(e).clamp(p.min,p.max),Nt.distanceToSquared(e)),intersectsBounds:(p,u,f)=>f<r&&f<s,intersectsTriangle:(p,u)=>{p.closestPointToPoint(e,Nt);const f=e.distanceToSquared(Nt);return f<r&&(Mn.copy(Nt),r=f,l=u),f<a}}),r===1/0)return null;const d=Math.sqrt(r);return t.point?t.point.copy(Mn):t.point=Mn.clone(),t.distance=d,t.faceIndex=l,t}const bt=new j,Ct=new j,vt=new j,So=new je,Ro=new je,Mo=new je,Xi=new j,Yi=new j,Zi=new j,To=new j;function Sd(o,e,t,n,i,a,s,r){let l;if(a===_o?l=o.intersectTriangle(n,t,e,!0,i):l=o.intersectTriangle(e,t,n,a!==en,i),l===null)return null;const d=o.origin.distanceTo(i);return d<s||d>r?null:{distance:d,point:i.clone()}}function Rd(o,e,t,n,i,a,s,r,l,d,p){bt.fromBufferAttribute(e,a),Ct.fromBufferAttribute(e,s),vt.fromBufferAttribute(e,r);const u=Sd(o,bt,Ct,vt,To,l,d,p);if(u){n&&(So.fromBufferAttribute(n,a),Ro.fromBufferAttribute(n,s),Mo.fromBufferAttribute(n,r),u.uv=Zt.getInterpolation(To,bt,Ct,vt,So,Ro,Mo,new je)),i&&(So.fromBufferAttribute(i,a),Ro.fromBufferAttribute(i,s),Mo.fromBufferAttribute(i,r),u.uv1=Zt.getInterpolation(To,bt,Ct,vt,So,Ro,Mo,new je)),t&&(Xi.fromBufferAttribute(t,a),Yi.fromBufferAttribute(t,s),Zi.fromBufferAttribute(t,r),u.normal=Zt.getInterpolation(To,bt,Ct,vt,Xi,Yi,Zi,new j),u.normal.dot(o.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:s,c:r,normal:new j,materialIndex:0};Zt.getNormal(bt,Ct,vt,f.normal),u.face=f,u.faceIndex=a}return u}function an(o,e,t,n,i,a,s){const r=n*3;let l=r+0,d=r+1,p=r+2;const u=o.index;o.index&&(l=u.getX(l),d=u.getX(d),p=u.getX(p));const{position:f,normal:A,uv:b,uv1:m}=o.attributes,g=Rd(t,f,A,b,m,l,d,p,e,a,s);return g?(g.faceIndex=n,i&&i.push(g),g):null}function ie(o,e,t,n){const i=o.a,a=o.b,s=o.c;let r=e,l=e+1,d=e+2;t&&(r=t.getX(r),l=t.getX(l),d=t.getX(d)),i.x=n.getX(r),i.y=n.getY(r),i.z=n.getZ(r),a.x=n.getX(l),a.y=n.getY(l),a.z=n.getZ(l),s.x=n.getX(d),s.y=n.getY(d),s.z=n.getZ(d)}function Md(o,e,t,n,i,a,s,r){const{geometry:l,_indirectBuffer:d}=o;for(let p=n,u=n+i;p<u;p++)an(l,e,t,p,a,s,r)}function Td(o,e,t,n,i,a,s){const{geometry:r,_indirectBuffer:l}=o;let d=1/0,p=null;for(let u=n,f=n+i;u<f;u++){let A;A=an(r,e,t,u,null,a,s),A&&A.distance<d&&(p=A,d=A.distance)}return p}function wd(o,e,t,n,i,a,s){const{geometry:r}=t,{index:l}=r,d=r.attributes.position;for(let p=o,u=e+o;p<u;p++){let f;if(f=p,ie(s,f*3,l,d),s.needsUpdate=!0,n(s,f,i,a))return!0}return!1}function Dd(o,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=o.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let a,s,r,l,d=0;const p=o._roots;for(let f=0,A=p.length;f<A;f++)a=p[f],s=new Uint32Array(a),r=new Uint16Array(a),l=new Float32Array(a),u(0,d),d+=a.byteLength;function u(f,A,b=!1){const m=f*2;if(r[m+15]===rn){const x=s[f+6],h=r[m+14];let y=1/0,C=1/0,v=1/0,B=-1/0,T=-1/0,S=-1/0;for(let R=3*x,D=3*(x+h);R<D;R++){let w=n[R];const M=i.getX(w),E=i.getY(w),K=i.getZ(w);M<y&&(y=M),M>B&&(B=M),E<C&&(C=E),E>T&&(T=E),K<v&&(v=K),K>S&&(S=K)}return l[f+0]!==y||l[f+1]!==C||l[f+2]!==v||l[f+3]!==B||l[f+4]!==T||l[f+5]!==S?(l[f+0]=y,l[f+1]=C,l[f+2]=v,l[f+3]=B,l[f+4]=T,l[f+5]=S,!0):!1}else{const x=f+8,h=s[f+6],y=x+A,C=h+A;let v=b,B=!1,T=!1;e?v||(B=e.has(y),T=e.has(C),v=!B&&!T):(B=!0,T=!0);const S=v||B,R=v||T;let D=!1;S&&(D=u(x,A,v));let w=!1;R&&(w=u(h,A,v));const M=D||w;if(M)for(let E=0;E<3;E++){const K=x+E,I=h+E,k=l[K],P=l[K+3],G=l[I],z=l[I+3];l[f+E]=k<G?k:G,l[f+E+3]=P>z?P:z}return M}}}function rt(o,e,t,n,i){let a,s,r,l,d,p;const u=1/t.direction.x,f=1/t.direction.y,A=1/t.direction.z,b=t.origin.x,m=t.origin.y,g=t.origin.z;let x=e[o],h=e[o+3],y=e[o+1],C=e[o+3+1],v=e[o+2],B=e[o+3+2];return u>=0?(a=(x-b)*u,s=(h-b)*u):(a=(h-b)*u,s=(x-b)*u),f>=0?(r=(y-m)*f,l=(C-m)*f):(r=(C-m)*f,l=(y-m)*f),a>l||r>s||((r>a||isNaN(a))&&(a=r),(l<s||isNaN(s))&&(s=l),A>=0?(d=(v-g)*A,p=(B-g)*A):(d=(B-g)*A,p=(v-g)*A),a>p||d>s)?!1:((d>a||a!==a)&&(a=d),(p<s||s!==s)&&(s=p),a<=i&&s>=n)}function Kd(o,e,t,n,i,a,s,r){const{geometry:l,_indirectBuffer:d}=o;for(let p=n,u=n+i;p<u;p++){let f=d?d[p]:p;an(l,e,t,f,a,s,r)}}function Ed(o,e,t,n,i,a,s){const{geometry:r,_indirectBuffer:l}=o;let d=1/0,p=null;for(let u=n,f=n+i;u<f;u++){let A;A=an(r,e,t,l?l[u]:u,null,a,s),A&&A.distance<d&&(p=A,d=A.distance)}return p}function Id(o,e,t,n,i,a,s){const{geometry:r}=t,{index:l}=r,d=r.attributes.position;for(let p=o,u=e+o;p<u;p++){let f;if(f=t.resolveTriangleIndex(p),ie(s,f*3,l,d),s.needsUpdate=!0,n(s,f,i,a))return!0}return!1}function jd(o,e,t,n,i,a,s){q.setBuffer(o._roots[e]),qn(0,o,t,n,i,a,s),q.clearBuffer()}function qn(o,e,t,n,i,a,s){const{float32Array:r,uint16Array:l,uint32Array:d}=q,p=o*2;if(pe(p,l)){const f=ge(o,d),A=be(p,l);Md(e,t,n,f,A,i,a,s)}else{const f=Fe(o);rt(f,r,n,a,s)&&qn(f,e,t,n,i,a,s);const A=Ce(o,d);rt(A,r,n,a,s)&&qn(A,e,t,n,i,a,s)}}const kd=["x","y","z"];function Pd(o,e,t,n,i,a){q.setBuffer(o._roots[e]);const s=_n(0,o,t,n,i,a);return q.clearBuffer(),s}function _n(o,e,t,n,i,a){const{float32Array:s,uint16Array:r,uint32Array:l}=q;let d=o*2;if(pe(d,r)){const u=ge(o,l),f=be(d,r);return Td(e,t,n,u,f,i,a)}else{const u=mi(o,l),f=kd[u],b=n.direction[f]>=0;let m,g;b?(m=Fe(o),g=Ce(o,l)):(m=Ce(o,l),g=Fe(o));const h=rt(m,s,n,i,a)?_n(m,e,t,n,i,a):null;if(h){const v=h.point[f];if(b?v<=s[g+u]:v>=s[g+u+3])return h}const C=rt(g,s,n,i,a)?_n(g,e,t,n,i,a):null;return h&&C?h.distance<=C.distance?h:C:h||C||null}}const wo=new ue,Bt=new ke,Ft=new ke,Jt=new ae,qi=new Ae,Do=new Ae;function Ud(o,e,t,n){q.setBuffer(o._roots[e]);const i=$n(0,o,t,n);return q.clearBuffer(),i}function $n(o,e,t,n,i=null){const{float32Array:a,uint16Array:s,uint32Array:r}=q;let l=o*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),qi.set(t.boundingBox.min,t.boundingBox.max,n),i=qi),pe(l,s)){const p=e.geometry,u=p.index,f=p.attributes.position,A=t.index,b=t.attributes.position,m=ge(o,r),g=be(l,s);if(Jt.copy(n).invert(),t.boundsTree)return $(o,a,Do),Do.matrix.copy(Jt),Do.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:h=>Do.intersectsBox(h),intersectsTriangle:h=>{h.a.applyMatrix4(n),h.b.applyMatrix4(n),h.c.applyMatrix4(n),h.needsUpdate=!0;for(let y=m*3,C=(g+m)*3;y<C;y+=3)if(ie(Ft,y,u,f),Ft.needsUpdate=!0,h.intersectsTriangle(Ft))return!0;return!1}});for(let x=m*3,h=(g+m)*3;x<h;x+=3){ie(Bt,x,u,f),Bt.a.applyMatrix4(Jt),Bt.b.applyMatrix4(Jt),Bt.c.applyMatrix4(Jt),Bt.needsUpdate=!0;for(let y=0,C=A.count;y<C;y+=3)if(ie(Ft,y,A,b),Ft.needsUpdate=!0,Bt.intersectsTriangle(Ft))return!0}}else{const p=o+8,u=r[o+6];return $(p,a,wo),!!(i.intersectsBox(wo)&&$n(p,e,t,n,i)||($(u,a,wo),i.intersectsBox(wo)&&$n(u,e,t,n,i)))}}const Ko=new ae,Tn=new Ae,Qt=new Ae,Hd=new j,Gd=new j,Od=new j,zd=new j;function Ld(o,e,t,n={},i={},a=0,s=1/0){e.boundingBox||e.computeBoundingBox(),Tn.set(e.boundingBox.min,e.boundingBox.max,t),Tn.needsUpdate=!0;const r=o.geometry,l=r.attributes.position,d=r.index,p=e.attributes.position,u=e.index,f=Se.getPrimitive(),A=Se.getPrimitive();let b=Hd,m=Gd,g=null,x=null;i&&(g=Od,x=zd);let h=1/0,y=null,C=null;return Ko.copy(t).invert(),Qt.matrix.copy(Ko),o.shapecast({boundsTraverseOrder:v=>Tn.distanceToBox(v),intersectsBounds:(v,B,T)=>T<h&&T<s?(B&&(Qt.min.copy(v.min),Qt.max.copy(v.max),Qt.needsUpdate=!0),!0):!1,intersectsRange:(v,B)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:S=>Qt.distanceToBox(S),intersectsBounds:(S,R,D)=>D<h&&D<s,intersectsRange:(S,R)=>{for(let D=S,w=S+R;D<w;D++){ie(A,3*D,u,p),A.a.applyMatrix4(t),A.b.applyMatrix4(t),A.c.applyMatrix4(t),A.needsUpdate=!0;for(let M=v,E=v+B;M<E;M++){ie(f,3*M,d,l),f.needsUpdate=!0;const K=f.distanceToTriangle(A,b,g);if(K<h&&(m.copy(b),x&&x.copy(g),h=K,y=M,C=D),K<a)return!0}}}});{const T=Ht(e);for(let S=0,R=T;S<R;S++){ie(A,3*S,u,p),A.a.applyMatrix4(t),A.b.applyMatrix4(t),A.c.applyMatrix4(t),A.needsUpdate=!0;for(let D=v,w=v+B;D<w;D++){ie(f,3*D,d,l),f.needsUpdate=!0;const M=f.distanceToTriangle(A,b,g);if(M<h&&(m.copy(b),x&&x.copy(g),h=M,y=D,C=S),M<a)return!0}}}}}),Se.releasePrimitive(f),Se.releasePrimitive(A),h===1/0?null:(n.point?n.point.copy(m):n.point=m.clone(),n.distance=h,n.faceIndex=y,i&&(i.point?i.point.copy(x):i.point=x.clone(),i.point.applyMatrix4(Ko),m.applyMatrix4(Ko),i.distance=m.sub(i.point).length(),i.faceIndex=C),n)}function Nd(o,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=o.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let a,s,r,l,d=0;const p=o._roots;for(let f=0,A=p.length;f<A;f++)a=p[f],s=new Uint32Array(a),r=new Uint16Array(a),l=new Float32Array(a),u(0,d),d+=a.byteLength;function u(f,A,b=!1){const m=f*2;if(r[m+15]===rn){const x=s[f+6],h=r[m+14];let y=1/0,C=1/0,v=1/0,B=-1/0,T=-1/0,S=-1/0;for(let R=x,D=x+h;R<D;R++){const w=3*o.resolveTriangleIndex(R);for(let M=0;M<3;M++){let E=w+M;E=n?n[E]:E;const K=i.getX(E),I=i.getY(E),k=i.getZ(E);K<y&&(y=K),K>B&&(B=K),I<C&&(C=I),I>T&&(T=I),k<v&&(v=k),k>S&&(S=k)}}return l[f+0]!==y||l[f+1]!==C||l[f+2]!==v||l[f+3]!==B||l[f+4]!==T||l[f+5]!==S?(l[f+0]=y,l[f+1]=C,l[f+2]=v,l[f+3]=B,l[f+4]=T,l[f+5]=S,!0):!1}else{const x=f+8,h=s[f+6],y=x+A,C=h+A;let v=b,B=!1,T=!1;e?v||(B=e.has(y),T=e.has(C),v=!B&&!T):(B=!0,T=!0);const S=v||B,R=v||T;let D=!1;S&&(D=u(x,A,v));let w=!1;R&&(w=u(h,A,v));const M=D||w;if(M)for(let E=0;E<3;E++){const K=x+E,I=h+E,k=l[K],P=l[K+3],G=l[I],z=l[I+3];l[f+E]=k<G?k:G,l[f+E+3]=P>z?P:z}return M}}}function Jd(o,e,t,n,i,a,s){q.setBuffer(o._roots[e]),ei(0,o,t,n,i,a,s),q.clearBuffer()}function ei(o,e,t,n,i,a,s){const{float32Array:r,uint16Array:l,uint32Array:d}=q,p=o*2;if(pe(p,l)){const f=ge(o,d),A=be(p,l);Kd(e,t,n,f,A,i,a,s)}else{const f=Fe(o);rt(f,r,n,a,s)&&ei(f,e,t,n,i,a,s);const A=Ce(o,d);rt(A,r,n,a,s)&&ei(A,e,t,n,i,a,s)}}const Qd=["x","y","z"];function Wd(o,e,t,n,i,a){q.setBuffer(o._roots[e]);const s=ti(0,o,t,n,i,a);return q.clearBuffer(),s}function ti(o,e,t,n,i,a){const{float32Array:s,uint16Array:r,uint32Array:l}=q;let d=o*2;if(pe(d,r)){const u=ge(o,l),f=be(d,r);return Ed(e,t,n,u,f,i,a)}else{const u=mi(o,l),f=Qd[u],b=n.direction[f]>=0;let m,g;b?(m=Fe(o),g=Ce(o,l)):(m=Ce(o,l),g=Fe(o));const h=rt(m,s,n,i,a)?ti(m,e,t,n,i,a):null;if(h){const v=h.point[f];if(b?v<=s[g+u]:v>=s[g+u+3])return h}const C=rt(g,s,n,i,a)?ti(g,e,t,n,i,a):null;return h&&C?h.distance<=C.distance?h:C:h||C||null}}const Eo=new ue,St=new ke,Rt=new ke,Wt=new ae,_i=new Ae,Io=new Ae;function Vd(o,e,t,n){q.setBuffer(o._roots[e]);const i=oi(0,o,t,n);return q.clearBuffer(),i}function oi(o,e,t,n,i=null){const{float32Array:a,uint16Array:s,uint32Array:r}=q;let l=o*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),_i.set(t.boundingBox.min,t.boundingBox.max,n),i=_i),pe(l,s)){const p=e.geometry,u=p.index,f=p.attributes.position,A=t.index,b=t.attributes.position,m=ge(o,r),g=be(l,s);if(Wt.copy(n).invert(),t.boundsTree)return $(o,a,Io),Io.matrix.copy(Wt),Io.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:h=>Io.intersectsBox(h),intersectsTriangle:h=>{h.a.applyMatrix4(n),h.b.applyMatrix4(n),h.c.applyMatrix4(n),h.needsUpdate=!0;for(let y=m,C=g+m;y<C;y++)if(ie(Rt,3*e.resolveTriangleIndex(y),u,f),Rt.needsUpdate=!0,h.intersectsTriangle(Rt))return!0;return!1}});for(let x=m,h=g+m;x<h;x++){const y=e.resolveTriangleIndex(x);ie(St,3*y,u,f),St.a.applyMatrix4(Wt),St.b.applyMatrix4(Wt),St.c.applyMatrix4(Wt),St.needsUpdate=!0;for(let C=0,v=A.count;C<v;C+=3)if(ie(Rt,C,A,b),Rt.needsUpdate=!0,St.intersectsTriangle(Rt))return!0}}else{const p=o+8,u=r[o+6];return $(p,a,Eo),!!(i.intersectsBox(Eo)&&oi(p,e,t,n,i)||($(u,a,Eo),i.intersectsBox(Eo)&&oi(u,e,t,n,i)))}}const jo=new ae,wn=new Ae,Vt=new Ae,Xd=new j,Yd=new j,Zd=new j,qd=new j;function _d(o,e,t,n={},i={},a=0,s=1/0){e.boundingBox||e.computeBoundingBox(),wn.set(e.boundingBox.min,e.boundingBox.max,t),wn.needsUpdate=!0;const r=o.geometry,l=r.attributes.position,d=r.index,p=e.attributes.position,u=e.index,f=Se.getPrimitive(),A=Se.getPrimitive();let b=Xd,m=Yd,g=null,x=null;i&&(g=Zd,x=qd);let h=1/0,y=null,C=null;return jo.copy(t).invert(),Vt.matrix.copy(jo),o.shapecast({boundsTraverseOrder:v=>wn.distanceToBox(v),intersectsBounds:(v,B,T)=>T<h&&T<s?(B&&(Vt.min.copy(v.min),Vt.max.copy(v.max),Vt.needsUpdate=!0),!0):!1,intersectsRange:(v,B)=>{if(e.boundsTree){const T=e.boundsTree;return T.shapecast({boundsTraverseOrder:S=>Vt.distanceToBox(S),intersectsBounds:(S,R,D)=>D<h&&D<s,intersectsRange:(S,R)=>{for(let D=S,w=S+R;D<w;D++){const M=T.resolveTriangleIndex(D);ie(A,3*M,u,p),A.a.applyMatrix4(t),A.b.applyMatrix4(t),A.c.applyMatrix4(t),A.needsUpdate=!0;for(let E=v,K=v+B;E<K;E++){const I=o.resolveTriangleIndex(E);ie(f,3*I,d,l),f.needsUpdate=!0;const k=f.distanceToTriangle(A,b,g);if(k<h&&(m.copy(b),x&&x.copy(g),h=k,y=E,C=D),k<a)return!0}}}})}else{const T=Ht(e);for(let S=0,R=T;S<R;S++){ie(A,3*S,u,p),A.a.applyMatrix4(t),A.b.applyMatrix4(t),A.c.applyMatrix4(t),A.needsUpdate=!0;for(let D=v,w=v+B;D<w;D++){const M=o.resolveTriangleIndex(D);ie(f,3*M,d,l),f.needsUpdate=!0;const E=f.distanceToTriangle(A,b,g);if(E<h&&(m.copy(b),x&&x.copy(g),h=E,y=D,C=S),E<a)return!0}}}}}),Se.releasePrimitive(f),Se.releasePrimitive(A),h===1/0?null:(n.point?n.point.copy(m):n.point=m.clone(),n.distance=h,n.faceIndex=y,i&&(i.point?i.point.copy(x):i.point=x.clone(),i.point.applyMatrix4(jo),m.applyMatrix4(jo),i.distance=m.sub(i.point).length(),i.faceIndex=C),n)}function $d(){return typeof SharedArrayBuffer<"u"}const so=new q.constructor,Zo=new q.constructor,qe=new xi(()=>new ue),Mt=new ue,Tt=new ue,Dn=new ue,Kn=new ue;let En=!1;function ef(o,e,t,n){if(En)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");En=!0;const i=o._roots,a=e._roots;let s,r=0,l=0;const d=new ae().copy(t).invert();for(let p=0,u=i.length;p<u;p++){so.setBuffer(i[p]),l=0;const f=qe.getPrimitive();$(0,so.float32Array,f),f.applyMatrix4(d);for(let A=0,b=a.length;A<b&&(Zo.setBuffer(a[A]),s=we(0,0,t,d,n,r,l,0,0,f),Zo.clearBuffer(),l+=a[A].length,!s);A++);if(qe.releasePrimitive(f),so.clearBuffer(),r+=i[p].length,s)break}return En=!1,s}function we(o,e,t,n,i,a=0,s=0,r=0,l=0,d=null,p=!1){let u,f;p?(u=Zo,f=so):(u=so,f=Zo);const A=u.float32Array,b=u.uint32Array,m=u.uint16Array,g=f.float32Array,x=f.uint32Array,h=f.uint16Array,y=o*2,C=e*2,v=pe(y,m),B=pe(C,h);let T=!1;if(B&&v)p?T=i(ge(e,x),be(e*2,h),ge(o,b),be(o*2,m),l,s+e,r,a+o):T=i(ge(o,b),be(o*2,m),ge(e,x),be(e*2,h),r,a+o,l,s+e);else if(B){const S=qe.getPrimitive();$(e,g,S),S.applyMatrix4(t);const R=Fe(o),D=Ce(o,b);$(R,A,Mt),$(D,A,Tt);const w=S.intersectsBox(Mt),M=S.intersectsBox(Tt);T=w&&we(e,R,n,t,i,s,a,l,r+1,S,!p)||M&&we(e,D,n,t,i,s,a,l,r+1,S,!p),qe.releasePrimitive(S)}else{const S=Fe(e),R=Ce(e,x);$(S,g,Dn),$(R,g,Kn);const D=d.intersectsBox(Dn),w=d.intersectsBox(Kn);if(D&&w)T=we(o,S,t,n,i,a,s,r,l+1,d,p)||we(o,R,t,n,i,a,s,r,l+1,d,p);else if(D)if(v)T=we(o,S,t,n,i,a,s,r,l+1,d,p);else{const M=qe.getPrimitive();M.copy(Dn).applyMatrix4(t);const E=Fe(o),K=Ce(o,b);$(E,A,Mt),$(K,A,Tt);const I=M.intersectsBox(Mt),k=M.intersectsBox(Tt);T=I&&we(S,E,n,t,i,s,a,l,r+1,M,!p)||k&&we(S,K,n,t,i,s,a,l,r+1,M,!p),qe.releasePrimitive(M)}else if(w)if(v)T=we(o,R,t,n,i,a,s,r,l+1,d,p);else{const M=qe.getPrimitive();M.copy(Kn).applyMatrix4(t);const E=Fe(o),K=Ce(o,b);$(E,A,Mt),$(K,A,Tt);const I=M.intersectsBox(Mt),k=M.intersectsBox(Tt);T=I&&we(R,E,n,t,i,s,a,l,r+1,M,!p)||k&&we(R,K,n,t,i,s,a,l,r+1,M,!p),qe.releasePrimitive(M)}}return T}const ko=new Ae,$i=new ue,tf={strategy:sr,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class yi{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,i=e._roots,a=e._indirectBuffer,s=n.getIndex();let r;return t.cloneBuffers?r={roots:i.map(l=>l.slice()),index:s?s.array.slice():null,indirectBuffer:a?a.slice():null}:r={roots:i,index:s?s.array:null,indirectBuffer:a},r}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:i,roots:a,indirectBuffer:s}=e,r=new yi(t,{...n,[Bn]:!0});if(r._roots=a,r._indirectBuffer=s||null,n.setIndex){const l=t.getIndex();if(l===null){const d=new re(e.index,1,!1);t.setIndex(d)}else l.array!==i&&(l.array.set(i),l.needsUpdate=!0)}return r}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...tf,[Bn]:!1},t),t.useSharedArrayBuffer&&!$d())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[Bn]||(gd(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new ue))),this.resolveTriangleIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n}refit(e=null){return(this.indirect?Nd:Dd)(this,e)}traverse(e,t=0){const n=this._roots[t],i=new Uint32Array(n),a=new Uint16Array(n);s(0);function s(r,l=0){const d=r*2,p=a[d+15]===rn;if(p){const u=i[r+6],f=a[d+14];e(l,p,new Float32Array(n,r*4,6),u,f)}else{const u=r+it/4,f=i[r+6],A=i[r+7];e(l,p,new Float32Array(n,r*4,6),A)||(s(u,l+1),s(f,l+1))}}}raycast(e,t=Wo,n=0,i=1/0){const a=this._roots,s=this.geometry,r=[],l=t.isMaterial,d=Array.isArray(t),p=s.groups,u=l?t.side:t,f=this.indirect?Jd:jd;for(let A=0,b=a.length;A<b;A++){const m=d?t[p[A].materialIndex].side:u,g=r.length;if(f(this,A,m,e,r,n,i),d){const x=p[A].materialIndex;for(let h=g,y=r.length;h<y;h++)r[h].face.materialIndex=x}}return r}raycastFirst(e,t=Wo,n=0,i=1/0){const a=this._roots,s=this.geometry,r=t.isMaterial,l=Array.isArray(t);let d=null;const p=s.groups,u=r?t.side:t,f=this.indirect?Wd:Pd;for(let A=0,b=a.length;A<b;A++){const m=l?t[p[A].materialIndex].side:u,g=f(this,A,m,e,n,i);g!=null&&(d==null||g.distance<d.distance)&&(d=g,l&&(g.face.materialIndex=p[A].materialIndex))}return d}intersectsGeometry(e,t){let n=!1;const i=this._roots,a=this.indirect?Vd:Ud;for(let s=0,r=i.length;s<r&&(n=a(this,s,e,t),!n);s++);return n}shapecast(e){const t=Se.getPrimitive(),n=this.indirect?Id:wd;let{boundsTraverseOrder:i,intersectsBounds:a,intersectsRange:s,intersectsTriangle:r}=e;if(s&&r){const u=s;s=(f,A,b,m,g)=>u(f,A,b,m,g)?!0:n(f,A,this,r,b,m,t)}else s||(r?s=(u,f,A,b)=>n(u,f,this,r,A,b,t):s=(u,f,A)=>A);let l=!1,d=0;const p=this._roots;for(let u=0,f=p.length;u<f;u++){const A=p[u];if(l=Bd(this,u,a,s,i,d),l)break;d+=A.byteLength}return Se.releasePrimitive(t),l}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:a}=n;const s=Se.getPrimitive(),r=this.geometry.index,l=this.geometry.attributes.position,d=this.indirect?b=>{const m=this.resolveTriangleIndex(b);ie(s,m*3,r,l)}:b=>{ie(s,b*3,r,l)},p=Se.getPrimitive(),u=e.geometry.index,f=e.geometry.attributes.position,A=e.indirect?b=>{const m=e.resolveTriangleIndex(b);ie(p,m*3,u,f)}:b=>{ie(p,b*3,u,f)};if(a){const b=(m,g,x,h,y,C,v,B)=>{for(let T=x,S=x+h;T<S;T++){A(T),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let R=m,D=m+g;R<D;R++)if(d(R),s.needsUpdate=!0,a(s,p,R,T,y,C,v,B))return!0}return!1};if(i){const m=i;i=function(g,x,h,y,C,v,B,T){return m(g,x,h,y,C,v,B,T)?!0:b(g,x,h,y,C,v,B,T)}}else i=b}return ef(this,e,t,i)}intersectsBox(e,t){return ko.set(e.min,e.max,t),ko.needsUpdate=!0,this.shapecast({intersectsBounds:n=>ko.intersectsBox(n),intersectsTriangle:n=>ko.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},a=0,s=1/0){return(this.indirect?_d:Ld)(this,e,t,n,i,a,s)}closestPointToPoint(e,t={},n=0,i=1/0){return Fd(this,e,t,n,i)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{$(0,new Float32Array(n),$i),e.union($i)}),e}}function of(o){switch(o){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function nf(o){switch(o){case 1:return jt;case 2:return Qs;case 3:return ce;case 4:return ce}}function es(o){switch(o){case 1:return Kc;case 2:return Js;case 3:return Jn;case 4:return Jn}}class pr extends Te{constructor(){super(),this.minFilter=le,this.magFilter=le,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){const t=this.overrideItemSize,n=e.itemSize,i=e.count;if(t!==null){if(n*i%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=i*n/t}const a=e.itemSize,s=e.count,r=e.normalized,l=e.array.constructor,d=l.BYTES_PER_ELEMENT;let p=this._forcedType,u=a;if(p===null)switch(l){case Float32Array:p=he;break;case Uint8Array:case Uint16Array:case Uint32Array:p=no;break;case Int8Array:case Int16Array:case Int32Array:p=fn;break}let f,A,b,m,g=of(a);switch(p){case he:b=1,A=nf(a),r&&d===1?(m=l,g+="8",l===Uint8Array?f=Nn:(f=Ii,g+="_SNORM")):(m=Float32Array,g+="32F",f=he);break;case fn:g+=d*8+"I",b=r?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,A=es(a),d===1?(m=Int8Array,f=Ii):d===2?(m=Int16Array,f=Dc):(m=Int32Array,f=fn);break;case no:g+=d*8+"UI",b=r?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,A=es(a),d===1?(m=Uint8Array,f=Nn):d===2?(m=Uint16Array,f=wc):(m=Uint32Array,f=no);break}u===3&&(A===ce||A===Jn)&&(u=4);const x=Math.ceil(Math.sqrt(s))||1,h=u*x*x,y=new m(h),C=e.normalized;e.normalized=!1;for(let v=0;v<s;v++){const B=u*v;y[B]=e.getX(v)/b,a>=2&&(y[B+1]=e.getY(v)/b),a>=3&&(y[B+2]=e.getZ(v)/b,u===4&&(y[B+3]=1)),a>=4&&(y[B+3]=e.getW(v)/b)}e.normalized=C,this.internalFormat=g,this.format=A,this.type=f,this.image.width=x,this.image.height=x,this.image.data=y,this.needsUpdate=!0,this.dispose(),e.itemSize=n,e.count=i}}class hr extends pr{constructor(){super(),this._forcedType=no}}class Ar extends pr{constructor(){super(),this._forcedType=he}}class sf{constructor(){this.index=new hr,this.position=new Ar,this.bvhBounds=new Te,this.bvhContents=new Te,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){const{geometry:t}=e;if(af(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){const n=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{const i=lr(ar(t));this._cachedIndexAttr=new re(i,1,!1)}rf(t,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){const{index:e,position:t,bvhBounds:n,bvhContents:i}=this;e&&e.dispose(),t&&t.dispose(),n&&n.dispose(),i&&i.dispose()}}function rf(o,e,t){const n=t.array,i=o.index?o.index.array:null;for(let a=0,s=e.length;a<s;a++){const r=3*a,l=3*e[a];for(let d=0;d<3;d++)n[r+d]=i?i[l+d]:l+d}}function af(o,e,t){const n=o._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const i=n[0],a=new Uint16Array(i),s=new Uint32Array(i),r=new Float32Array(i),l=i.byteLength/it,d=2*Math.ceil(Math.sqrt(l/2)),p=new Float32Array(4*d*d),u=Math.ceil(Math.sqrt(l)),f=new Uint32Array(2*u*u);for(let A=0;A<l;A++){const b=A*it/4,m=b*2,g=b;for(let x=0;x<3;x++)p[8*A+0+x]=r[g+0+x],p[8*A+4+x]=r[g+3+x];if(pe(m,a)){const x=be(m,a),h=ge(b,s),y=4294901760|x;f[A*2+0]=y,f[A*2+1]=h}else{const x=4*Ce(b,s)/it,h=mi(b,s);f[A*2+0]=h,f[A*2+1]=x}}e.image.data=p,e.image.width=d,e.image.height=d,e.format=ce,e.type=he,e.internalFormat="RGBA32F",e.minFilter=le,e.magFilter=le,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=f,t.image.width=u,t.image.height=u,t.format=Js,t.type=no,t.internalFormat="RG32UI",t.minFilter=le,t.magFilter=le,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}const ut=new j,dt=new j,ft=new j,ts=new kt,Po=new j,In=new j,os=new kt,ns=new kt,Uo=new ae,is=new ae;function Xt(o,e){if(!o&&!e)return;const t=o.count===e.count,n=o.normalized===e.normalized,i=o.array.constructor===e.array.constructor,a=o.itemSize===e.itemSize;if(!t||!n||!i||!a)throw new Error}function _t(o,e=null){const t=o.array.constructor,n=o.normalized,i=o.itemSize,a=e===null?o.count:e;return new re(new t(i*a),i,n)}function mr(o,e,t=0){if(o.isInterleavedBufferAttribute){const n=o.itemSize;for(let i=0,a=o.count;i<a;i++){const s=i+t;e.setX(s,o.getX(i)),n>=2&&e.setY(s,o.getY(i)),n>=3&&e.setZ(s,o.getZ(i)),n>=4&&e.setW(s,o.getW(i))}}else{const n=e.array,i=n.constructor,a=n.BYTES_PER_ELEMENT*o.itemSize*t;new i(n.buffer,a,o.array.length).set(o.array)}}function lf(o,e,t){const n=o.elements,i=e.elements;for(let a=0,s=i.length;a<s;a++)n[a]+=i[a]*t}function ss(o,e,t){const n=o.skeleton,i=o.geometry,a=n.bones,s=n.boneInverses;os.fromBufferAttribute(i.attributes.skinIndex,e),ns.fromBufferAttribute(i.attributes.skinWeight,e),Uo.elements.fill(0);for(let r=0;r<4;r++){const l=ns.getComponent(r);if(l!==0){const d=os.getComponent(r);is.multiplyMatrices(a[d].matrixWorld,s[d]),lf(Uo,is,l)}}return Uo.multiply(o.bindMatrix).premultiply(o.bindMatrixInverse),t.transformDirection(Uo),t}function jn(o,e,t,n,i){Po.set(0,0,0);for(let a=0,s=o.length;a<s;a++){const r=e[a],l=o[a];r!==0&&(In.fromBufferAttribute(l,n),t?Po.addScaledVector(In,r):Po.addScaledVector(In.sub(i),r))}i.add(Po)}function cf(o,e={useGroups:!1,updateIndex:!1,skipAttributes:[]},t=new Ee){const n=o[0].index!==null,{useGroups:i=!1,updateIndex:a=!1,skipAttributes:s=[]}=e,r=new Set(Object.keys(o[0].attributes)),l={};let d=0;t.clearGroups();for(let p=0;p<o.length;++p){const u=o[p];let f=0;if(n!==(u.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const A in u.attributes){if(!r.has(A))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+A+'" attribute exists among all geometries, or in none of them.');l[A]===void 0&&(l[A]=[]),l[A].push(u.attributes[A]),f++}if(f!==r.size)throw new Error("StaticGeometryGenerator: Make sure all geometries have the same number of attributes.");if(i){let A;if(n)A=u.index.count;else if(u.attributes.position!==void 0)A=u.attributes.position.count;else throw new Error("StaticGeometryGenerator: The geometry must have either an index or a position attribute");t.addGroup(d,A,p),d+=A}}if(n){let p=!1;if(!t.index){let u=0;for(let f=0;f<o.length;++f)u+=o[f].index.count;t.setIndex(new re(new Uint32Array(u),1,!1)),p=!0}if(a||p){const u=t.index;let f=0,A=0;for(let b=0;b<o.length;++b){const m=o[b],g=m.index;if(s[b]!==!0)for(let x=0;x<g.count;++x)u.setX(f,g.getX(x)+A),f++;A+=m.attributes.position.count}}}for(const p in l){const u=l[p];if(!(p in t.attributes)){let b=0;for(const m in u)b+=u[m].count;t.setAttribute(p,_t(l[p][0],b))}const f=t.attributes[p];let A=0;for(let b=0,m=u.length;b<m;b++){const g=u[b];s[b]!==!0&&mr(g,f,A),A+=g.count}}return t}function uf(o,e){if(o===null||e===null)return o===e;if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function df(o){const{index:e,attributes:t}=o;if(e)for(let n=0,i=e.count;n<i;n+=3){const a=e.getX(n),s=e.getX(n+2);e.setX(n,s),e.setX(n+2,a)}else for(const n in t){const i=t[n],a=i.itemSize;for(let s=0,r=i.count;s<r;s+=3)for(let l=0;l<a;l++){const d=i.getComponent(s,l),p=i.getComponent(s+2,l);i.setComponent(s,l,p),i.setComponent(s+2,l,d)}}return o}class ff{constructor(e){this.matrixWorld=new ae,this.geometryHash=null,this.boneMatrices=null,this.primitiveCount=-1,this.mesh=e,this.update()}update(){const e=this.mesh,t=e.geometry,n=e.skeleton,i=(t.index?t.index.count:t.attributes.position.count)/3;if(this.matrixWorld.copy(e.matrixWorld),this.geometryHash=t.attributes.position.version,this.primitiveCount=i,n){n.boneTexture||n.computeBoneTexture(),n.update();const a=n.boneMatrices;!this.boneMatrices||this.boneMatrices.length!==a.length?this.boneMatrices=a.slice():this.boneMatrices.set(a)}else this.boneMatrices=null}didChange(){const e=this.mesh,t=e.geometry,n=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===t.attributes.position.version&&uf(e.skeleton&&e.skeleton.boneMatrices||null,this.boneMatrices)&&this.primitiveCount===n)}}class rs{constructor(e){Array.isArray(e)||(e=[e]);const t=[];e.forEach(n=>{n.traverseVisible(i=>{i.isMesh&&t.push(i)})}),this.meshes=t,this.useGroups=!0,this.applyWorldTransforms=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Array(t.length).fill().map(()=>new Ee),this._diffMap=new WeakMap}getMaterials(){const e=[];return this.meshes.forEach(t=>{Array.isArray(t.material)?e.push(...t.material):e.push(t.material)}),e}generate(e=new Ee){let t=[];const{meshes:n,useGroups:i,_intermediateGeometry:a,_diffMap:s}=this;for(let r=0,l=n.length;r<l;r++){const d=n[r],p=a[r],u=s.get(d);!u||u.didChange(d)?(this._convertToStaticGeometry(d,p),t.push(!1),u?u.update():s.set(d,new ff(d))):t.push(!0)}if(a.length===0){e.setIndex(null);const r=e.attributes;for(const l in r)e.deleteAttribute(l);for(const l in this.attributes)e.setAttribute(this.attributes[l],new re(new Float32Array(0),4,!1))}else cf(a,{useGroups:i,skipAttributes:t},e);for(const r in e.attributes)e.attributes[r].needsUpdate=!0;return e}_convertToStaticGeometry(e,t=new Ee){const n=e.geometry,i=this.applyWorldTransforms,a=this.attributes.includes("normal"),s=this.attributes.includes("tangent"),r=n.attributes,l=t.attributes;!t.index&&n.index&&(t.index=n.index.clone()),l.position||t.setAttribute("position",_t(r.position)),a&&!l.normal&&r.normal&&t.setAttribute("normal",_t(r.normal)),s&&!l.tangent&&r.tangent&&t.setAttribute("tangent",_t(r.tangent)),Xt(n.index,t.index),Xt(r.position,l.position),a&&Xt(r.normal,l.normal),s&&Xt(r.tangent,l.tangent);const d=r.position,p=a?r.normal:null,u=s?r.tangent:null,f=n.morphAttributes.position,A=n.morphAttributes.normal,b=n.morphAttributes.tangent,m=n.morphTargetsRelative,g=e.morphTargetInfluences,x=new Ec;x.getNormalMatrix(e.matrixWorld),n.index&&t.index.array.set(n.index.array);for(let h=0,y=r.position.count;h<y;h++)ut.fromBufferAttribute(d,h),p&&dt.fromBufferAttribute(p,h),u&&(ts.fromBufferAttribute(u,h),ft.fromBufferAttribute(u,h)),g&&(f&&jn(f,g,m,h,ut),A&&jn(A,g,m,h,dt),b&&jn(b,g,m,h,ft)),e.isSkinnedMesh&&(e.applyBoneTransform(h,ut),p&&ss(e,h,dt),u&&ss(e,h,ft)),i&&ut.applyMatrix4(e.matrixWorld),l.position.setXYZ(h,ut.x,ut.y,ut.z),p&&(i&&dt.applyNormalMatrix(x),l.normal.setXYZ(h,dt.x,dt.y,dt.z)),u&&(i&&ft.transformDirection(e.matrixWorld),l.tangent.setXYZW(h,ft.x,ft.y,ft.z,ts.w));for(const h in this.attributes){const y=this.attributes[h];y==="position"||y==="tangent"||y==="normal"||!(y in r)||(l[y]||t.setAttribute(y,_t(r[y])),Xt(r[y],l[y]),mr(r[y],l[y]))}return e.matrixWorld.determinant()<0&&df(t),t}}const pf=`

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
`,hf=`

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
`,Af=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`;function mf(o,e,t=new j){const n=Math.PI*(o-.5),i=2*Math.PI*(e-.5);return t.x=Math.cos(i),t.y=Math.sin(n),t.z=Math.sin(i),t}const as=F.forwardRef(({inclination:o=.6,azimuth:e=.1,distance:t=1e3,mieCoefficient:n=.005,mieDirectionalG:i=.8,rayleigh:a=.5,turbidity:s=10,sunPosition:r=mf(o,e),...l},d)=>{const p=F.useMemo(()=>new j().setScalar(t),[t]),[u]=F.useState(()=>new Au);return F.createElement("primitive",Ln({object:u,ref:d,"material-uniforms-mieCoefficient-value":n,"material-uniforms-mieDirectionalG-value":i,"material-uniforms-rayleigh-value":a,"material-uniforms-sunPosition-value":r,"material-uniforms-turbidity-value":s,scale:p},l))});class gf extends co{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:`
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
	      #include <${or>=154?"colorspace_fragment":"encodings_fragment"}>
      }`})}}const xf=o=>new j().setFromSpherical(new jc(o,Math.acos(1-Math.random()*2),Math.random()*2*Math.PI)),yf=F.forwardRef(({radius:o=100,depth:e=50,count:t=5e3,saturation:n=0,factor:i=4,fade:a=!1,speed:s=1},r)=>{const l=F.useRef(),[d,p,u]=F.useMemo(()=>{const A=[],b=[],m=Array.from({length:t},()=>(.5+.5*Math.random())*i),g=new Z;let x=o+e;const h=e/t;for(let y=0;y<t;y++)x-=h*Math.random(),A.push(...xf(x).toArray()),g.setHSL(y/t,n,.9),b.push(g.r,g.g,g.b);return[new Float32Array(A),new Float32Array(b),new Float32Array(m)]},[t,e,i,o,n]);fo(A=>l.current&&(l.current.uniforms.time.value=A.clock.elapsedTime*s));const[f]=F.useState(()=>new gf);return F.createElement("points",{ref:r},F.createElement("bufferGeometry",null,F.createElement("bufferAttribute",{attach:"attributes-position",args:[d,3]}),F.createElement("bufferAttribute",{attach:"attributes-color",args:[p,3]}),F.createElement("bufferAttribute",{attach:"attributes-size",args:[u,1]})),F.createElement("primitive",{ref:l,object:f,attach:"material",blending:Ic,"uniforms-fade-value":a,depthWrite:!1,transparent:!0,vertexColors:!0}))});class bi extends co{constructor(e){super(e);for(const t in this.uniforms)Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(n){this.uniforms[t].value=n}})}setDefine(e,t=void 0){t==null?e in this.defines&&(delete this.defines[e],this.needsUpdate=!0):this.defines[e]!==t&&(this.defines[e]=t,this.needsUpdate=!0)}}class bf extends bi{constructor(e){super({blending:ci,uniforms:{target1:{value:null},target2:{value:null},opacity:{value:1}},vertexShader:`

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

				}`}),this.setValues(e)}}function Ho(o=1){let e="uint";return o>1&&(e="uvec"+o),`
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
	`}function Go(o=1){let e="uint",t="float",n="",i=".r",a="1u";return o>1&&(e="uvec"+o,t="vec"+o,n=o+"",o===2?(i=".rg",a="uvec2( 1u, 2u )"):o===3?(i=".rgb",a="uvec3( 1u, 2u, 3u )"):(i="",a="uvec4( 1u, 2u, 3u, 4u )")),`

		${t} sobol${n}( int effect ) {

			uint seed = sobolGetSeed( sobolBounceIndex, uint( effect ) );
			uint index = sobolPathIndex;

			uint shuffle_seed = sobolHashCombine( seed, 0u );
			uint shuffled_index = nestedUniformScrambleBase2( sobolReverseBits( index ), shuffle_seed );
			${t} sobol_pt = sobolGetTexturePoint( shuffled_index )${i};
			${e} result = ${e}( sobol_pt * 16777216.0 );

			${e} seed2 = sobolHashCombine( seed, ${a} );
			result = nestedUniformScrambleBase2( result, seed2 );

			return SOBOL_FACTOR * ${t}( result >> 8 );

		}
	`}const gr=`

	// Utils
	const float SOBOL_FACTOR = 1.0 / 16777216.0;
	const uint SOBOL_MAX_POINTS = 256u * 256u;

	${Ho(1)}
	${Ho(2)}
	${Ho(3)}
	${Ho(4)}

	uint sobolHash( uint x ) {

		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}

`,Cf=`

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

`,vf=`

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

	${Go(1)}
	${Go(2)}
	${Go(3)}
	${Go(4)}

`;class Bf extends bi{constructor(){super({blending:ci,uniforms:{resolution:{value:new je}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`

				${gr}
				${Cf}

				varying vec2 vUv;
				uniform vec2 resolution;
				void main() {

					uint index = uint( gl_FragCoord.y ) * uint( resolution.x ) + uint( gl_FragCoord.x );
					gl_FragColor = generateSobolPoint( index );

				}
			`})}}class Ff{generate(e,t=256){const n=new zo(t,t,{type:he,format:ce,minFilter:le,magFilter:le,generateMipmaps:!1}),i=e.getRenderTarget();e.setRenderTarget(n);const a=new Pt(new Bf);return a.material.resolution.set(t,t),a.render(e),e.setRenderTarget(i),a.dispose(),n}}function*Sf(){const{_renderer:o,_fsQuad:e,_blendQuad:t,_primaryTarget:n,_blendTargets:i,_sobolTarget:a,_subframe:s,alpha:r,camera:l,material:d}=this,p=new kt,u=new kt,f=t.material;let[A,b]=i;for(;;){r?(f.opacity=this._opacityFactor/(this._samples+1),d.blending=ci,d.opacity=1):(d.opacity=this._opacityFactor/(this._samples+1),d.blending=kc);const[m,g,x,h]=s,y=n.width,C=n.height;d.resolution.set(y*x,C*h),d.sobolTexture=a.texture,d.stratifiedTexture.init(20,d.bounces+d.transmissiveBounces+5),d.stratifiedTexture.next(),d.seed++;const v=this.tiles.x||1,B=this.tiles.y||1,T=v*B,S=Math.ceil(y*x),R=Math.ceil(C*h),D=Math.floor(m*y),w=Math.floor(g*C),M=Math.ceil(S/v),E=Math.ceil(R/B);for(let K=0;K<B;K++)for(let I=0;I<v;I++){d.cameraWorldMatrix.copy(l.matrixWorld),d.invProjectionMatrix.copy(l.projectionMatrixInverse);let k=0;l.projectionMatrix.elements[15]>0&&(k=1),l.isEquirectCamera&&(k=2),d.setDefine("CAMERA_TYPE",k);const P=o.getRenderTarget(),G=o.autoClear,z=o.getScissorTest();o.getScissor(p),o.getViewport(u);let _=I,V=K;if(!this.stableTiles){const L=this._currentTile%(v*B);_=L%v,V=~~(L/v),this._currentTile=L+1}const ne=B-V-1;n.scissor.set(D+_*M,w+ne*E,Math.min(M,S-_*M),Math.min(E,R-ne*E)),n.viewport.set(D,w,S,R),o.setRenderTarget(n),o.setScissorTest(!0),o.autoClear=!1,e.render(o),o.setViewport(u),o.setScissor(p),o.setScissorTest(z),o.setRenderTarget(P),o.autoClear=G,r&&(f.target1=A.texture,f.target2=n.texture,o.setRenderTarget(b),t.render(o),o.setRenderTarget(P)),this._samples+=1/T,I===v-1&&K===B-1&&(this._samples=Math.round(this._samples)),yield}[A,b]=[b,A]}}const ls=new Z;class Rf{get material(){return this._fsQuad.material}set material(e){this._fsQuad.material=e}get target(){return this._alpha?this._blendTargets[1]:this._primaryTarget}set alpha(e){this._alpha!==e&&(e||(this._blendTargets[0].dispose(),this._blendTargets[1].dispose()),this._alpha=e,this.reset())}get alpha(){return this._alpha}get samples(){return this._samples}constructor(e){this.camera=null,this.tiles=new je(1,1),this.stableNoise=!1,this.stableTiles=!0,this._samples=0,this._subframe=new kt(0,0,1,1),this._opacityFactor=1,this._renderer=e,this._alpha=!1,this._fsQuad=new Pt(null),this._blendQuad=new Pt(new bf),this._task=null,this._currentTile=0,this._sobolTarget=new Ff().generate(e);const t=e.extensions.get("OES_texture_float_linear");this._primaryTarget=new zo(1,1,{format:ce,type:t?he:me}),this._blendTargets=[new zo(1,1,{format:ce,type:t?he:me}),new zo(1,1,{format:ce,type:t?he:me})]}setSize(e,t){e=Math.ceil(e),t=Math.ceil(t),!(this._primaryTarget.width===e&&this._primaryTarget.height===t)&&(this._primaryTarget.setSize(e,t),this._blendTargets[0].setSize(e,t),this._blendTargets[1].setSize(e,t),this.reset())}dispose(){this._primaryTarget.dispose(),this._blendTargets[0].dispose(),this._blendTargets[1].dispose(),this._sobolTarget.dispose(),this._fsQuad.dispose(),this._blendQuad.dispose(),this._task=null}reset(){const{_renderer:e,_primaryTarget:t,_blendTargets:n}=this,i=e.getRenderTarget(),a=e.getClearAlpha();e.getClearColor(ls),e.setRenderTarget(t),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(n[0]),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(n[1]),e.setClearColor(0,0),e.clearColor(),e.setClearColor(ls,a),e.setRenderTarget(i),this._samples=0,this._task=null,this.stableNoise&&(this.material.seed=0)}update(){this._task||(this._task=Sf.call(this)),this._task.next()}}function Mf(o,e,t){const n=o.index,a=o.attributes.position.count,s=n?n.count:a;let r=o.groups;r.length===0&&(r=[{count:s,start:0,materialIndex:0}]);let l;t.length<=255?l=new Uint8Array(a):l=new Uint16Array(a);for(let d=0;d<r.length;d++){const p=r[d],u=p.start,f=p.count,A=Math.min(f,s-u),b=Array.isArray(e)?e[p.materialIndex]:e,m=t.indexOf(b);for(let g=0;g<A;g++){let x=u+g;n&&(x=n.getX(x)),l[x]=m}}return new re(l,1,!1)}function Tf(o,e){const{attributes:t=[],normalMapRequired:n=!1}=e;if(!o.attributes.normal&&t&&t.includes("normal")&&o.computeVertexNormals(),!o.attributes.uv&&t&&t.includes("uv")){const i=o.attributes.position.count;o.setAttribute("uv",new re(new Float32Array(i*2),2,!1))}if(!o.attributes.uv2&&t&&t.includes("uv2")){const i=o.attributes.position.count;o.setAttribute("uv2",new re(new Float32Array(i*2),2,!1))}if(!o.attributes.tangent&&t&&t.includes("tangent"))if(n)o.index===null&&(o=Pc(o)),o.computeTangents();else{const i=o.attributes.position.count;o.setAttribute("tangent",new re(new Float32Array(i*4),4,!1))}if(!o.attributes.color&&t&&t.includes("color")){const i=o.attributes.position.count,a=new Float32Array(i*4);a.fill(1),o.setAttribute("color",new re(a,4))}if(!o.index){const i=o.attributes.position.count,a=new Array(i);for(let s=0;s<i;s++)a[s]=s;o.setIndex(a)}}const wf=new et;function Df(){const o=new Ee;return o.setAttribute("position",new re(new Float32Array(9),3)),new Ie(o,wf)}class Kf{get initialized(){return!!this.bvh}constructor(e){Array.isArray(e)||(e=[e]);const t=[...e];t.length===0&&t.push(Df()),this.bvhOptions={},this.attributes=["position","normal","tangent","color","uv","uv2"],this.objects=t,this.bvh=null,this.geometry=new Ee,this.materials=null,this.textures=null,this.lights=[],this.staticGeometryGenerator=new rs(this.objects)}reset(){this.bvh=null,this.geometry.dispose(),this.geometry=new Ee,this.materials=null,this.textures=null,this.lights=[],this.staticGeometryGenerator=new rs(this.objects)}dispose(){}prepScene(){if(this.bvh!==null)return;const{objects:e,staticGeometryGenerator:t,geometry:n,lights:i,attributes:a}=this;for(let d=0,p=e.length;d<p;d++)e[d].traverse(u=>{if(u.isMesh){const f=!!u.material.normalMap;Tf(u.geometry,{attributes:a,normalMapRequired:f})}else(u.isRectAreaLight||u.isSpotLight||u.isPointLight||u.isDirectionalLight)&&i.push(u)});const s=new Set,r=t.getMaterials();r.forEach(d=>{for(const p in d){const u=d[p];u&&u.isTexture&&s.add(u)}}),t.attributes=a,t.generate(n);const l=Mf(n,r,r);n.setAttribute("materialIndex",l),n.clearGroups(),this.materials=r,this.textures=Array.from(s)}generate(){const{objects:e,staticGeometryGenerator:t,geometry:n,bvhOptions:i}=this;if(this.bvh===null)return this.prepScene(),this.bvh=new yi(n,{strategy:rr,maxLeafTris:1,...i}),{lights:this.lights,bvh:this.bvh,materials:this.materials,textures:this.textures,objects:e};{const{bvh:a}=this;return t.generate(n),a.refit(),{lights:this.lights,bvh:this.bvh,materials:this.materials,textures:this.textures,objects:e}}}}class Ef extends ai{set bokehSize(e){this.fStop=this.getFocalLength()/e}get bokehSize(){return this.getFocalLength()/this.fStop}constructor(...e){super(...e),this.fStop=1.4,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=25,this.anamorphicRatio=1}copy(e,t){return super.copy(e,t),this.fStop=e.fStop,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio,this}}function ni(o){return`${o.source.uuid}:${o.colorSpace}`}function xr(o){const e=new Set,t=[];for(let n=0,i=o.length;n<i;n++){const a=o[n],s=ni(a);e.has(s)||(e.add(s),t.push(a))}return t}const yr=45,wt=yr*4,cs=14*4+0,us=14*4+1;class If{constructor(){this._features={}}isUsed(e){return e in this._features}setUsed(e,t=!0){t===!1?delete this._features[e]:this._features[e]=!0}reset(){this._features={}}}class jf extends Te{constructor(){super(new Float32Array(4),1,1),this.format=ce,this.type=he,this.wrapS=st,this.wrapT=st,this.minFilter=le,this.magFilter=le,this.generateMipmaps=!1,this.threeCompatibilityTransforms=!1,this.features=new If}setCastShadow(e,t){const n=this.image.data,i=e*wt+us;n[i]=t?0:1}getCastShadow(e){const t=this.image.data,n=e*wt+us;return!t[n]}setMatte(e,t){const n=this.image.data,i=e*wt+cs;n[i]=t?1:0}getMatte(e){const t=this.image.data,n=e*wt+cs;return!!t[n]}updateFrom(e,t){function n(g,x,h=-1){if(x in g&&g[x]){const y=ni(g[x]);return b[y]}else return h}function i(g,x,h){return x in g?g[x]:h}function a(g){return g.map||g.specularMap||g.displacementMap||g.normalMap||g.bumpMap||g.roughnessMap||g.metalnessMap||g.alphaMap||g.emissiveMap||g.clearcoatMap||g.clearcoatNormalMap||g.clearcoatRoughnessMap||g.iridescenceMap||g.iridescenceThicknessMap||g.specularIntensityMap||g.specularColorMap||g.transmissionMap||g.thicknessMap||g.sheenColorMap||g.sheenRoughnessMap||null}function s(g,x,h,y){let C;if(p?C=a(g):C=g[x]&&g[x].isTexture?g[x]:null,C){const v=C.matrix.elements;let B=0;h[y+B++]=v[0],h[y+B++]=v[3],h[y+B++]=v[6],B++,h[y+B++]=v[1],h[y+B++]=v[4],h[y+B++]=v[7],B++}return 8}let r=0;const l=e.length*yr,d=Math.ceil(Math.sqrt(l))||1,{threeCompatibilityTransforms:p,image:u,features:f}=this,A=xr(t),b={};for(let g=0,x=A.length;g<x;g++)b[ni(A[g])]=g;u.width!==d&&(this.dispose(),u.data=new Float32Array(d*d*4),u.width=d,u.height=d);const m=u.data;f.reset();for(let g=0,x=e.length;g<x;g++){const h=e[g];if(h.isFogVolumeMaterial){f.setUsed("FOG");for(let v=0;v<wt;v++)m[r+v]=0;m[r+0*4+0]=h.color.r,m[r+0*4+1]=h.color.g,m[r+0*4+2]=h.color.b,m[r+2*4+3]=i(h,"emissiveIntensity",0),m[r+3*4+0]=h.emissive.r,m[r+3*4+1]=h.emissive.g,m[r+3*4+2]=h.emissive.b,m[r+13*4+1]=h.density,m[r+13*4+3]=0,m[r+14*4+2]=4,r+=wt;continue}m[r++]=h.color.r,m[r++]=h.color.g,m[r++]=h.color.b,m[r++]=n(h,"map"),m[r++]=i(h,"metalness",0),m[r++]=n(h,"metalnessMap"),m[r++]=i(h,"roughness",0),m[r++]=n(h,"roughnessMap"),m[r++]=i(h,"ior",1.5),m[r++]=i(h,"transmission",0),m[r++]=n(h,"transmissionMap"),m[r++]=i(h,"emissiveIntensity",0),"emissive"in h?(m[r++]=h.emissive.r,m[r++]=h.emissive.g,m[r++]=h.emissive.b):(m[r++]=0,m[r++]=0,m[r++]=0),m[r++]=n(h,"emissiveMap"),m[r++]=n(h,"normalMap"),"normalScale"in h?(m[r++]=h.normalScale.x,m[r++]=h.normalScale.y):(m[r++]=1,m[r++]=1),m[r++]=i(h,"clearcoat",0),m[r++]=n(h,"clearcoatMap"),m[r++]=i(h,"clearcoatRoughness",0),m[r++]=n(h,"clearcoatRoughnessMap"),m[r++]=n(h,"clearcoatNormalMap"),"clearcoatNormalScale"in h?(m[r++]=h.clearcoatNormalScale.x,m[r++]=h.clearcoatNormalScale.y):(m[r++]=1,m[r++]=1),r++,m[r++]=i(h,"sheen",0),"sheenColor"in h?(m[r++]=h.sheenColor.r,m[r++]=h.sheenColor.g,m[r++]=h.sheenColor.b):(m[r++]=0,m[r++]=0,m[r++]=0),m[r++]=n(h,"sheenColorMap"),m[r++]=i(h,"sheenRoughness",0),m[r++]=n(h,"sheenRoughnessMap"),m[r++]=n(h,"iridescenceMap"),m[r++]=n(h,"iridescenceThicknessMap"),m[r++]=i(h,"iridescence",0),m[r++]=i(h,"iridescenceIOR",1.3);const y=i(h,"iridescenceThicknessRange",[100,400]);m[r++]=y[0],m[r++]=y[1],"specularColor"in h?(m[r++]=h.specularColor.r,m[r++]=h.specularColor.g,m[r++]=h.specularColor.b):(m[r++]=1,m[r++]=1,m[r++]=1),m[r++]=n(h,"specularColorMap"),m[r++]=i(h,"specularIntensity",1),m[r++]=n(h,"specularIntensityMap");const C=i(h,"thickness",0)===0&&i(h,"attenuationDistance",1/0)===1/0;if(m[r++]=Number(C),r++,"attenuationColor"in h?(m[r++]=h.attenuationColor.r,m[r++]=h.attenuationColor.g,m[r++]=h.attenuationColor.b):(m[r++]=1,m[r++]=1,m[r++]=1),m[r++]=i(h,"attenuationDistance",1/0),m[r++]=n(h,"alphaMap"),m[r++]=h.opacity,m[r++]=h.alphaTest,!C&&h.transmission>0)m[r++]=0;else switch(h.side){case Wo:m[r++]=1;break;case _o:m[r++]=-1;break;case en:m[r++]=0;break}r++,r++,m[r++]=Number(h.vertexColors)|Number(h.flatShading)<<1,m[r++]=Number(h.transparent),r+=s(h,"map",m,r),r+=s(h,"metalnessMap",m,r),r+=s(h,"roughnessMap",m,r),r+=s(h,"transmissionMap",m,r),r+=s(h,"emissiveMap",m,r),r+=s(h,"normalMap",m,r),r+=s(h,"clearcoatMap",m,r),r+=s(h,"clearcoatNormalMap",m,r),r+=s(h,"clearcoatRoughnessMap",m,r),r+=s(h,"sheenColorMap",m,r),r+=s(h,"sheenRoughnessMap",m,r),r+=s(h,"iridescenceMap",m,r),r+=s(h,"iridescenceThicknessMap",m,r),r+=s(h,"specularColorMap",m,r),r+=s(h,"specularIntensityMap",m,r)}this.needsUpdate=!0}}const ds=new Z;class kf extends Ws{constructor(...e){super(...e);const t=this.texture;t.format=ce,t.type=Nn,t.minFilter=de,t.magFilter=de,t.wrapS=nt,t.wrapT=nt,t.setTextures=(...i)=>{this.setTextures(...i)};const n=new Pt(new Pf);this.fsQuad=n}setTextures(e,t,n,i){const a=xr(i),s=e.getRenderTarget(),r=e.toneMapping,l=e.getClearAlpha();e.getClearColor(ds);const d=a.length||1;this.setSize(t,n,d),e.setClearColor(0,0),e.toneMapping=Vs;const p=this.fsQuad;for(let u=0,f=d;u<f;u++){const A=a[u];A&&(A.matrixAutoUpdate=!1,A.matrix.identity(),p.material.map=A,e.setRenderTarget(this,u),p.render(e),A.updateMatrix(),A.matrixAutoUpdate=!0)}p.material.map=null,e.setClearColor(ds,l),e.setRenderTarget(s),e.toneMapping=r}dispose(){super.dispose(),this.fsQuad.dispose()}}class Pf extends co{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}constructor(){super({uniforms:{map:{value:null}},vertexShader:`
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
			`})}}function ro(o){const e=new Uint16Array(o.length);for(let t=0,n=o.length;t<n;++t)e[t]=$e.toHalfFloat(o[t]);return e}function fs(o,e,t=0,n=o.length){let i=t,a=t+n-1;for(;i<a;){const s=i+a>>1;o[s]<e?i=s+1:a=s}return i-t}function Uf(o,e,t){return .2126*o+.7152*e+.0722*t}function Hf(o,e=me){const t=o.clone();t.source=new Uc({...t.image});const{width:n,height:i,data:a}=t.image;let s=a;if(t.type!==e){e===me?s=new Uint16Array(a.length):s=new Float32Array(a.length);let r;a instanceof Int8Array||a instanceof Int16Array||a instanceof Int32Array?r=2**(8*a.BYTES_PER_ELEMENT-1)-1:r=2**(8*a.BYTES_PER_ELEMENT)-1;for(let l=0,d=a.length;l<d;l++){let p=a[l];t.type===me&&(p=$e.fromHalfFloat(a[l])),t.type!==he&&t.type!==me&&(p/=r),e===me&&(s[l]=$e.toHalfFloat(p))}t.image.data=s,t.type=e}if(t.flipY){const r=s;s=s.slice();for(let l=0;l<i;l++)for(let d=0;d<n;d++){const p=i-l-1,u=4*(l*n+d),f=4*(p*n+d);s[f+0]=r[u+0],s[f+1]=r[u+1],s[f+2]=r[u+2],s[f+3]=r[u+3]}t.flipY=!1,t.image.data=s}return t}class Gf{constructor(){const e=new Te(ro(new Float32Array([1,1,1,1])),1,1);e.type=me,e.format=ce,e.minFilter=de,e.magFilter=de,e.wrapS=nt,e.wrapT=nt,e.generateMipmaps=!1,e.needsUpdate=!0;const t=new Te(ro(new Float32Array([0,1])),1,2);t.type=me,t.format=jt,t.minFilter=de,t.magFilter=de,t.generateMipmaps=!1,t.needsUpdate=!0;const n=new Te(ro(new Float32Array([0,0,1,1])),2,2);n.type=me,n.format=jt,n.minFilter=de,n.magFilter=de,n.generateMipmaps=!1,n.needsUpdate=!0,this.map=e,this.marginalWeights=t,this.conditionalWeights=n,this.totalSum=1}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(e){const t=Hf(e);t.wrapS=nt,t.wrapT=st;const{width:n,height:i,data:a}=t.image,s=new Float32Array(n*i),r=new Float32Array(n*i),l=new Float32Array(i),d=new Float32Array(i);let p=0,u=0;for(let g=0;g<i;g++){let x=0;for(let h=0;h<n;h++){const y=g*n+h,C=$e.fromHalfFloat(a[4*y+0]),v=$e.fromHalfFloat(a[4*y+1]),B=$e.fromHalfFloat(a[4*y+2]),T=Uf(C,v,B);x+=T,p+=T,s[y]=T,r[y]=x}if(x!==0)for(let h=g*n,y=g*n+n;h<y;h++)s[h]/=x,r[h]/=x;u+=x,l[g]=x,d[g]=u}if(u!==0)for(let g=0,x=l.length;g<x;g++)l[g]/=u,d[g]/=u;const f=new Uint16Array(i),A=new Uint16Array(n*i);for(let g=0;g<i;g++){const x=(g+1)/i,h=fs(d,x);f[g]=$e.toHalfFloat((h+.5)/i)}for(let g=0;g<i;g++)for(let x=0;x<n;x++){const h=g*n+x,y=(x+1)/n,C=fs(r,y,g*n,n);A[h]=$e.toHalfFloat((C+.5)/n)}this.dispose();const{marginalWeights:b,conditionalWeights:m}=this;b.image={width:i,height:1,data:f},b.needsUpdate=!0,m.image={width:n,height:i,data:A},m.needsUpdate=!0,this.totalSum=p,this.map=t}}class Of{constructor(){this.bokehSize=0,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=10,this.anamorphicRatio=1}updateFrom(e){e instanceof Ef?(this.bokehSize=e.bokehSize,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio):(this.bokehSize=0,this.apertureRotation=0,this.apertureBlades=0,this.focusDistance=10,this.anamorphicRatio=1)}}const kn=6,zf=0,Lf=1,Nf=2,Jf=3,Qf=4;class Wf{constructor(){const e=new Te(new Float32Array(4),1,1);e.format=ce,e.type=he,e.wrapS=st,e.wrapT=st,e.generateMipmaps=!1,e.minFilter=le,e.magFilter=le,this.tex=e,this.count=0}updateFrom(e,t=[]){const n=this.tex,i=Math.max(e.length*kn,1),a=Math.ceil(Math.sqrt(i));n.image.width!==a&&(n.dispose(),n.image.data=new Float32Array(a*a*4),n.image.width=a,n.image.height=a);const s=n.image.data,r=new j,l=new j,d=new ae,p=new Ut,u=new j,f=new j,A=new j(0,1,0);for(let b=0,m=e.length;b<m;b++){const g=e[b],x=b*kn*4;let h=0;for(let C=0;C<kn*4;C++)s[x+C]=0;g.getWorldPosition(l),s[x+h++]=l.x,s[x+h++]=l.y,s[x+h++]=l.z;let y=zf;if(g.isRectAreaLight&&g.isCircular?y=Lf:g.isSpotLight?y=Nf:g.isDirectionalLight?y=Jf:g.isPointLight&&(y=Qf),s[x+h++]=y,s[x+h++]=g.color.r,s[x+h++]=g.color.g,s[x+h++]=g.color.b,s[x+h++]=g.intensity,g.getWorldQuaternion(p),g.isRectAreaLight)r.set(g.width,0,0).applyQuaternion(p),s[x+h++]=r.x,s[x+h++]=r.y,s[x+h++]=r.z,h++,l.set(0,g.height,0).applyQuaternion(p),s[x+h++]=l.x,s[x+h++]=l.y,s[x+h++]=l.z,s[x+h++]=r.cross(l).length()*(g.isCircular?Math.PI/4:1);else if(g.isSpotLight){const C=g.radius||0;u.setFromMatrixPosition(g.matrixWorld),f.setFromMatrixPosition(g.target.matrixWorld),d.lookAt(u,f,A),p.setFromRotationMatrix(d),r.set(1,0,0).applyQuaternion(p),s[x+h++]=r.x,s[x+h++]=r.y,s[x+h++]=r.z,h++,l.set(0,1,0).applyQuaternion(p),s[x+h++]=l.x,s[x+h++]=l.y,s[x+h++]=l.z,s[x+h++]=Math.PI*C*C,s[x+h++]=C,s[x+h++]=g.decay,s[x+h++]=g.distance,s[x+h++]=Math.cos(g.angle),s[x+h++]=Math.cos(g.angle*(1-g.penumbra)),s[x+h++]=g.iesTexture?t.indexOf(g.iesTexture):-1}else if(g.isPointLight){const C=r.setFromMatrixPosition(g.matrixWorld);s[x+h++]=C.x,s[x+h++]=C.y,s[x+h++]=C.z,h++,h+=4,h+=1,s[x+h++]=g.decay,s[x+h++]=g.distance}else if(g.isDirectionalLight){const C=r.setFromMatrixPosition(g.matrixWorld),v=l.setFromMatrixPosition(g.target.matrixWorld);f.subVectors(C,v).normalize(),s[x+h++]=f.x,s[x+h++]=f.y,s[x+h++]=f.z}}n.needsUpdate=!0,this.count=e.length}}function ps(o){const e=this,t=o.split(`
`);let n=0,i;e.verAngles=[],e.horAngles=[],e.candelaValues=[],e.tiltData={},e.tiltData.angles=[],e.tiltData.mulFactors=[];function a(u){return u=u.trim(),u=u.replace(/,/g," "),u=u.replace(/\s\s+/g," "),u.split(" ")}function s(u,f){for(;;){const A=t[n++],b=a(A);for(let m=0;m<b.length;++m)f.push(Number(b[m]));if(f.length===u)break}}function r(){let u=t[n++],f=a(u);e.tiltData.lampToLumGeometry=Number(f[0]),u=t[n++],f=a(u),e.tiltData.numAngles=Number(f[0]),s(e.tiltData.numAngles,e.tiltData.angles),s(e.tiltData.numAngles,e.tiltData.mulFactors)}function l(){const u=[];s(10,u),e.count=Number(u[0]),e.lumens=Number(u[1]),e.multiplier=Number(u[2]),e.numVerAngles=Number(u[3]),e.numHorAngles=Number(u[4]),e.gonioType=Number(u[5]),e.units=Number(u[6]),e.width=Number(u[7]),e.length=Number(u[8]),e.height=Number(u[9])}function d(){const u=[];s(3,u),e.ballFactor=Number(u[0]),e.blpFactor=Number(u[1]),e.inputWatts=Number(u[2])}for(;i=t[n++],!i.includes("TILT"););i.includes("NONE")||i.includes("INCLUDE")&&r(),l(),d();for(let u=0;u<e.numHorAngles;++u)e.candelaValues.push([]);s(e.numVerAngles,e.verAngles),s(e.numHorAngles,e.horAngles);for(let u=0;u<e.numHorAngles;++u)s(e.numVerAngles,e.candelaValues[u]);for(let u=0;u<e.numHorAngles;++u)for(let f=0;f<e.numVerAngles;++f)e.candelaValues[u][f]*=e.candelaValues[u][f]*e.multiplier*e.ballFactor*e.blpFactor;let p=-1;for(let u=0;u<e.numHorAngles;++u)for(let f=0;f<e.numVerAngles;++f){const A=e.candelaValues[u][f];p=p<A?A:p}if(p>0)for(let u=0;u<e.numHorAngles;++u)for(let f=0;f<e.numVerAngles;++f)e.candelaValues[u][f]/=p}class Vf extends ri{_getIESValues(e){const a=new Float32Array(64800);function s(d,p){let u=0,f=0,A=0,b=0,m=0,g=0;for(let R=0;R<e.numHorAngles-1;++R)if(p<e.horAngles[R+1]||R==e.numHorAngles-2){f=R,A=e.horAngles[R],b=e.horAngles[R+1];break}for(let R=0;R<e.numVerAngles-1;++R)if(d<e.verAngles[R+1]||R==e.numVerAngles-2){u=R,m=e.verAngles[R],g=e.verAngles[R+1];break}const x=b-A,h=g-m;if(h===0)return 0;const y=x===0?0:(p-A)/x,C=(d-m)/h,v=x===0?f:f+1,B=Et.lerp(e.candelaValues[f][u],e.candelaValues[v][u],y),T=Et.lerp(e.candelaValues[f][u+1],e.candelaValues[v][u+1],y);return Et.lerp(B,T,C)}const r=e.horAngles[0],l=e.horAngles[e.numHorAngles-1];for(let d=0;d<64800;++d){let p=d%360;const u=Math.floor(d/360);l-r!==0&&(p<r||p>=l)&&(p%=l*2,p>l&&(p=l*2-p)),a[d]=s(u,p)}return a}load(e,t,n,i){const a=new ao(this.manager);a.setResponseType("text"),a.setCrossOrigin(this.crossOrigin),a.setWithCredentials(this.withCredentials),a.setPath(this.path),a.setRequestHeader(this.requestHeader);const s=new Te(null,360,180,jt,me);return s.minFilter=de,s.magFilter=de,a.load(e,r=>{const l=new ps(r);s.image.data=ro(this._getIESValues(l)),s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}parse(e){const t=new ps(e),n=new Te(null,360,180,jt,me);return n.minFilter=de,n.magFilter=de,n.image.data=ro(this._getIESValues(t)),n.needsUpdate=!0,n}}const hs=new Z;class Xf extends Ws{constructor(...e){super(...e);const t=this.texture;t.format=ce,t.type=me,t.minFilter=de,t.magFilter=de,t.wrapS=st,t.wrapT=st,t.generateMipmaps=!1,t.updateFrom=(...i)=>{this.updateFrom(...i)};const n=new Pt(new et);this.fsQuad=n,this.iesLoader=new Vf}async updateFrom(e,t){const n=e.getRenderTarget(),i=e.toneMapping,a=e.getClearAlpha();e.getClearColor(hs);const s=t.length||1;this.setSize(360,180,s),e.setClearColor(0,0),e.toneMapping=Vs;const r=this.fsQuad;for(let l=0,d=s;l<d;l++){const p=t[l];p&&(p.matrixAutoUpdate=!1,p.matrix.identity(),r.material.map=p,r.material.transparent=!0,e.setRenderTarget(this,l),r.render(e),p.updateMatrix(),p.matrixAutoUpdate=!0)}r.material.map=null,e.setClearColor(hs,a),e.setRenderTarget(n),e.toneMapping=i,r.dispose()}dispose(){super.dispose(),this.fsQuad.dispose()}}const Yf=`

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
`;function As(o,e,t,n,i){if(e>n)throw new Error;const a=o.length/e,s=o.constructor.BYTES_PER_ELEMENT*8;let r=1;switch(o.constructor){case Uint8Array:case Uint16Array:case Uint32Array:r=2**s-1;break;case Int8Array:case Int16Array:case Int32Array:r=2**(s-1)-1;break}for(let l=0;l<a;l++){const d=4*l,p=e*l;for(let u=0;u<n;u++)t[i+d+u]=e>=u+1?o[p+u]/r:0}}class Zf extends Hc{constructor(){super(),this._textures=[],this.type=he,this.format=ce,this.internalFormat="RGBA32F"}updateAttribute(e,t){const n=this._textures[e];n.updateFrom(t);const i=n.image,a=this.image;if(i.width!==a.width||i.height!==a.height)throw new Error("FloatAttributeTextureArray: Attribute must be the same dimensions when updating single layer.");const{width:s,height:r,data:l}=a,p=s*r*4*e;let u=t.itemSize;u===3&&(u=4),As(n.image.data,u,l,4,p),this.dispose(),this.needsUpdate=!0}setAttributes(e){const t=e[0].count,n=e.length;for(let u=0,f=n;u<f;u++)if(e[u].count!==t)throw new Error("FloatAttributeTextureArray: All attributes must have the same item count.");const i=this._textures;for(;i.length<n;){const u=new Ar;i.push(u)}for(;i.length>n;)i.pop();for(let u=0,f=n;u<f;u++)i[u].updateFrom(e[u]);const s=i[0].image,r=this.image;(s.width!==r.width||s.height!==r.height||s.depth!==n)&&(r.width=s.width,r.height=s.height,r.depth=n,r.data=new Float32Array(r.width*r.height*r.depth*4));const{data:l,width:d,height:p}=r;for(let u=0,f=n;u<f;u++){const A=i[u],m=d*p*4*u;let g=e[u].itemSize;g===3&&(g=4),As(A.image.data,g,l,4,m)}this.dispose(),this.needsUpdate=!0}}class qf extends Zf{updateNormalAttribute(e){this.updateAttribute(0,e)}updateTangentAttribute(e){this.updateAttribute(1,e)}updateUvAttribute(e){this.updateAttribute(2,e)}updateColorAttribute(e){this.updateAttribute(3,e)}updateFrom(e,t,n,i){this.setAttributes([e,t,n,i])}}const _f=`

	struct PhysicalCamera {

		float focusDistance;
		float anamorphicRatio;
		float bokehSize;
		int apertureBlades;
		float apertureRotation;

	};

`,$f=`

	struct EquirectHdrInfo {

		sampler2D marginalWeights;
		sampler2D conditionalWeights;
		sampler2D map;

		float totalSum;

	};

`,ep=`

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

`,tp=`

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

`,op=`

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

`,np=`

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

`,ip=`

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

`,sp=`

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

`,rp=`

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

	${np}
	${ip}
	${sp}

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

`,ap=`

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

`,lp=`

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

`,cp=`

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

`,up=`

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


`,dp=`

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

`,fp=`

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

`,pp=`

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

`,hp=`

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

`,ms=`

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
`,Ap=`

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

`,mp=`

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

`,gp=`

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

`,xp=`

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

`,yp=`

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
`,bp=`

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

`,Cp=`

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

`;function vp(o){for(let e=o.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1)),n=o[e];o[e]=o[t],o[t]=n}return o}class Bp{constructor(e,t){const n=e**t,i=new Uint16Array(n);let a=n;for(let s=0;s<n;s++)i[s]=s;this.samples=new Float32Array(t),this.strataCount=e,this.restart=function(){a=0},this.next=function(){const{samples:s}=this;a>=i.length&&(vp(i),this.restart());let r=i[a++];for(let l=0;l<t;l++)s[l]=(r%e+Math.random())/e,r=Math.floor(r/e);return s}}}class Fp{constructor(e,t){let n=0;for(const r of t)n+=r;const i=new Float32Array(n),a=[];let s=0;for(const r of t){const l=new Bp(e,r);l.samples=new Float32Array(i.buffer,s,l.samples.length),s+=l.samples.length*4,a.push(l)}this.samples=i,this.strataCount=e,this.next=function(){for(const r of a)r.next();return i},this.restart=function(){for(const r of a)r.restart()}}}class Sp extends Te{constructor(e=1,t=1,n=8){super(new Float32Array(1),1,1,ce,he),this.minFilter=le,this.magFilter=le,this.strata=n,this.sampler=null,this.init(e,t,n)}init(e,t,n=this.strata){const{image:i}=this;if(i.width===t&&i.height===e)return;const a=new Array(e*t).fill(4),s=new Fp(n,a);i.width=t,i.height=e,i.data=s.samples,this.sampler=s,this.dispose(),this.next()}next(){this.sampler.next(),this.needsUpdate=!0}}function Rp(o,e=Math.random){for(let t=o.length-1;t>0;t--){const n=~~((e()-1e-6)*t),i=o[t];o[t]=o[n],o[n]=i}}function Mp(o,e){o.fill(0);for(let t=0;t<e;t++)o[t]=1}class gs{constructor(e){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(e),this.setSigma(1.5)}findVoid(){const{score:e,binaryPattern:t}=this;let n=1/0,i=-1;for(let a=0,s=t.length;a<s;a++){if(t[a]!==0)continue;const r=e[a];r<n&&(n=r,i=a)}return i}findCluster(){const{score:e,binaryPattern:t}=this;let n=-1/0,i=-1;for(let a=0,s=t.length;a<s;a++){if(t[a]!==1)continue;const r=e[a];r>n&&(n=r,i=a)}return i}setSigma(e){if(e===this.sigma)return;const t=~~(Math.sqrt(10*2*e**2)+1),n=2*t+1,i=new Float32Array(n*n),a=e*e;for(let s=-t;s<=t;s++)for(let r=-t;r<=t;r++){const l=(t+r)*n+s+t,d=s*s+r*r;i[l]=Math.E**(-d/(2*a))}this.lookupTable=i,this.sigma=e,this.radius=t}resize(e){this.size!==e&&(this.size=e,this.score=new Float32Array(e*e),this.binaryPattern=new Uint8Array(e*e))}invert(){const{binaryPattern:e,score:t,size:n}=this;t.fill(0);for(let i=0,a=e.length;i<a;i++)if(e[i]===0){const s=~~(i/n),r=i-s*n;this.updateScore(r,s,1),e[i]=1}else e[i]=0}updateScore(e,t,n){const{size:i,score:a,lookupTable:s}=this,r=this.radius,l=2*r+1;for(let d=-r;d<=r;d++)for(let p=-r;p<=r;p++){const u=(r+p)*l+d+r,f=s[u];let A=e+d;A=A<0?i+A:A%i;let b=t+p;b=b<0?i+b:b%i;const m=b*i+A;a[m]+=n*f}}addPointIndex(e){this.binaryPattern[e]=1;const t=this.size,n=~~(e/t),i=e-n*t;this.updateScore(i,n,1),this.count++}removePointIndex(e){this.binaryPattern[e]=0;const t=this.size,n=~~(e/t),i=e-n*t;this.updateScore(i,n,-1),this.count--}copy(e){this.resize(e.size),this.score.set(e.score),this.binaryPattern.set(e.binaryPattern),this.setSigma(e.sigma),this.count=e.count}}class Tp{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new gs(1),this.savedSamples=new gs(1)}generate(){const{samples:e,savedSamples:t,sigma:n,majorityPointsRatio:i,size:a}=this;e.resize(a),e.setSigma(n);const s=Math.floor(a*a*i),r=e.binaryPattern;Mp(r,s),Rp(r,this.random);for(let u=0,f=r.length;u<f;u++)r[u]===1&&e.addPointIndex(u);for(;;){const u=e.findCluster();e.removePointIndex(u);const f=e.findVoid();if(u===f){e.addPointIndex(u);break}e.addPointIndex(f)}const l=new Uint32Array(a*a);t.copy(e);let d;for(d=e.count-1;d>=0;){const u=e.findCluster();e.removePointIndex(u),l[u]=d,d--}const p=a*a;for(d=t.count;d<p/2;){const u=t.findVoid();t.addPointIndex(u),l[u]=d,d++}for(t.invert();d<p;){const u=t.findCluster();t.removePointIndex(u),l[u]=d,d++}return{data:l,maxValue:p}}}function wp(o){return o>=3?4:o}function Dp(o){switch(o){case 1:return jt;case 2:return Qs;default:return ce}}class Kp extends Te{constructor(e=64,t=1){super(new Float32Array(4),1,1,ce,he),this.minFilter=le,this.magFilter=le,this.size=e,this.channels=t,this.update()}update(){const e=this.channels,t=this.size,n=new Tp;n.channels=e,n.size=t;const i=wp(e),a=Dp(i);(this.image.width!==t||a!==this.format)&&(this.image.width=t,this.image.height=t,this.image.data=new Float32Array(t**2*i),this.format=a,this.dispose());const s=this.image.data;for(let r=0,l=e;r<l;r++){const d=n.generate(),p=d.data,u=d.maxValue;for(let f=0,A=p.length;f<A;f++){const b=p[f]/u;s[f*i+r]=b}}this.needsUpdate=!0}}class Ep extends bi{onBeforeRender(){this.setDefine("FEATURE_DOF",this.physicalCamera.bokehSize===0?0:1),this.setDefine("FEATURE_BACKGROUND_MAP",this.backgroundMap?1:0),this.setDefine("FEATURE_FOG",this.materials.features.isUsed("FOG")?1:0)}constructor(e){super({transparent:!0,depthWrite:!1,defines:{FEATURE_MIS:1,FEATURE_RUSSIAN_ROULETTE:1,FEATURE_DOF:1,FEATURE_BACKGROUND_MAP:0,FEATURE_FOG:1,RANDOM_TYPE:2,CAMERA_TYPE:0,DEBUG_MODE:0,ATTR_NORMAL:0,ATTR_TANGENT:1,ATTR_UV:2,ATTR_COLOR:3},uniforms:{resolution:{value:new je},bounces:{value:10},transmissiveBounces:{value:10},physicalCamera:{value:new Of},bvh:{value:new sf},attributesArray:{value:new qf},materialIndexAttribute:{value:new hr},materials:{value:new jf},textures:{value:new kf().texture},lights:{value:new Wf},iesProfiles:{value:new Xf().texture},cameraWorldMatrix:{value:new ae},invProjectionMatrix:{value:new ae},backgroundBlur:{value:0},environmentIntensity:{value:1},environmentRotation:{value:new ae},envMapInfo:{value:new Gf},backgroundMap:{value:null},seed:{value:0},opacity:{value:1},filterGlossyFactor:{value:0},backgroundAlpha:{value:1},sobolTexture:{value:null},stratifiedTexture:{value:new Sp},stratifiedOffsetTexture:{value:new Kp(64,1)}},vertexShader:`

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
				${pf}
				${Af}
				${hf}

				// uniform structs
				${_f}
				${ep}
				${$f}
				${tp}

				// random
				#if RANDOM_TYPE == 2 	// Stratified List

					${Cp}

				#elif RANDOM_TYPE == 1 	// Sobol

					${ms}
					${gr}
					${vf}

					#define rand(v) sobol(v)
					#define rand2(v) sobol2(v)
					#define rand3(v) sobol3(v)
					#define rand4(v) sobol4(v)

				#else 					// PCG

					${ms}

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
				${hp}
				${pp}
				${Yf}
				${fp}
				${dp}

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
				${op}
				${up}
				${rp}
				${lp}
				${cp}
				${ap}

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

				${Ap}
				${mp}
				${xp}
				${gp}
				${bp}
				${yp}

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

			`}),this.setValues(e)}}const X=.072;function At(o){switch(o){case"sphere":return new Xs(X*.52,8,6);case"star":{const e=X*.64,t=X*.25,n=X*.42,i=new Gc;for(let s=0;s<10;s++){const r=s*Math.PI*2/10-Math.PI/2,l=s%2===0?e:t;s===0?i.moveTo(Math.cos(r)*l,Math.sin(r)*l):i.lineTo(Math.cos(r)*l,Math.sin(r)*l)}i.closePath();const a=new Oc(i,{depth:n,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelSegments:1});return a.translate(0,0,-n/2),a}default:return new si(X,X,X)}}function Gt({material:o,color:e}){return o==="original"?c.jsx("meshStandardMaterial",{color:e,roughness:.65,metalness:.05}):o==="fluid"?c.jsx("meshPhysicalMaterial",{color:e,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5,envMapIntensity:1}):o==="metal"?c.jsx("meshStandardMaterial",{color:e,roughness:.06,metalness:.95,envMapIntensity:2}):o==="emissive"?c.jsx("meshStandardMaterial",{color:e,emissive:e,emissiveIntensity:2.2,roughness:.55,metalness:0}):c.jsx("meshStandardMaterial",{color:e,roughness:.65,metalness:.05})}const ln=F.createContext({mode:"off",occluders:[]});function cn(o){if(o.mode!=="off")return o.mode==="full"?!0:o.occluders.length?o.occluders:void 0}const Ip={x:1,y:1,z:1},jp={deformation:"none",fluidDistort:.35,fluidSpeed:1.5},$t="0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)",xs={display:"block",fontSize:"11px",color:"#e8e8e8",fontFamily:"Courier New, monospace",textShadow:$t,whiteSpace:"nowrap",userSelect:"none"};function kp(o){return o==="sphere"?X*.52:o==="star"?X*.64:X*.5}function br({pos:o,halfY:e,above:t,below:n}){const i=cn(F.useContext(ln));return c.jsxs("group",{position:o,children:[t&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[0,e,0],userData:{isLabel:!0,labelText:t,labelPos:"top"}}),c.jsx(fe,{position:[0,e,0],center:!0,occlude:i,style:{pointerEvents:"none"},children:c.jsx("span",{"data-phys-label":"",style:{...xs,transform:"translateY(-100%)"},children:t})})]}),n&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[0,-e,0],userData:{isLabel:!0,labelText:n,labelPos:"bottom"}}),c.jsx(fe,{position:[0,-e,0],center:!0,occlude:i,style:{pointerEvents:"none"},children:c.jsx("span",{"data-phys-label":"",style:{...xs,transform:"translateY(0)"},children:n})})]})]})}function ys(o,e){const t=new Z(e);switch(o){case"fluid":return new xe({color:t,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5,envMapIntensity:1});case"metal":return new Me({color:t,roughness:.06,metalness:.95,envMapIntensity:2});case"emissive":return new Me({color:t,emissive:t,emissiveIntensity:2.2,roughness:.55});default:return new Me({color:t,roughness:.65,metalness:.05})}}function Cr(o,e){const t=o.clone();return t.color&&(t.color=new Z(e)),t}const Pe=5,No=.47;function bs(o,e,t,n){if(n==="sphere"){const i=(o+e+t)/3,a=Math.acos(2*Math.random()-1),s=2*Math.PI*Math.random(),r=i*Math.cbrt(Math.random());return[r*Math.sin(a)*Math.cos(s),r*Math.sin(a)*Math.sin(s),r*Math.cos(a)]}return[(Math.random()-.5)*2*o,(Math.random()-.5)*2*e,(Math.random()-.5)*2*t]}function vr(o,e){const t=o[0]-e.center[0],n=o[1]-e.center[1],i=o[2]-e.center[2];return e.kind==="sphere"?t*t+n*n+i*i<e.radius*e.radius:Math.abs(t)<e.half[0]&&Math.abs(n)<e.half[1]&&Math.abs(i)<e.half[2]}function Cs(o,e,t,n,i){let a=bs(o,e,t,n);if(!i)return a;for(let s=0;s<80;s++){if(!vr(a,i))return a;a=bs(o,e,t,n)}return a}function Pp(o,e,t,n,i){const a=Math.cbrt(e*t*n),s=Math.ceil(Math.cbrt(o*2)),r=Math.max(1,Math.round(s*e/a)),l=Math.max(1,Math.round(s*t/a)),d=Math.max(1,Math.round(s*n/a)),p=2*e/r,u=2*t/l,f=2*n/d,A=(e+t+n)/3,b=A*A,m=[];for(let x=0;x<d;x++)for(let h=0;h<l;h++)for(let y=0;y<r;y++){if(i==="sphere"){const C=-e+(y+.5)*p,v=-t+(h+.5)*u,B=-n+(x+.5)*f;if(C*C+v*v+B*B>b)continue}m.push(y+h*r+x*r*l)}for(let x=m.length-1;x>0;x--){const h=Math.floor(Math.random()*(x+1));[m[x],m[h]]=[m[h],m[x]]}const g=[];for(let x=0;x<o;x++){const h=m[x%Math.max(1,m.length)],y=h%r,C=Math.floor(h/r)%l,v=Math.floor(h/(r*l)),B=-e+(y+.5)*p,T=-t+(C+.5)*u,S=-n+(v+.5)*f;let R=Math.max(-e,Math.min(e,B+(Math.random()-.5)*p*.7)),D=Math.max(-t,Math.min(t,T+(Math.random()-.5)*u*.7)),w=Math.max(-n,Math.min(n,S+(Math.random()-.5)*f*.7));if(i==="sphere"){const M=Math.sqrt(R*R+D*D+w*w);M>A&&(R=R*A/M*.97,D=D*A/M*.97,w=w*A/M*.97)}g.push([R,D,w])}return g}function vs(o,e,t,n,i,a,s,r=!1){const l=e*No,d=t*No,p=n*No,u=r?Pp(o,l,d,p,i):null,f=[];for(let A=0;A<o;A++){let b;u?(b=u[A],s&&vr(b,s)&&(b=Cs(l,d,p,i,s))):b=Cs(l,d,p,i,s);const m=a==="random"?[Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2]:[0,0,0];f.push({pos:b,rot:m})}return f}function Bs(o,e){let t=0;for(let n=0;n<o.length;n++){const i=o[n].pos;for(let a=n+1;a<o.length;a++){const s=o[a].pos,r=i[0]-s[0],l=i[1]-s[1],d=i[2]-s[2],p=e[n]+e[a];r*r+l*l+d*d<p*p&&t++}}return t}const Up=100;function Hp(o){const e=Math.max(1,o*o/2);return Math.max(8,Math.min(Up,Math.floor(2e6/e)))}function Gp(o,e,t,n,i,a,s,r,l=!1){const d=Hp(o);let p=vs(o,e,t,n,i,a,r,l),u=Bs(p,s);for(let f=1;f<d&&u>0;f++){const A=vs(o,e,t,n,i,a,r,l),b=Bs(A,s);b<u&&(p=A,u=b)}return p}function Op(o,e,t,n,i){const a=new $o,s=new Z;for(let r=0;r<e.length;r++){a.position.set(...e[r].pos),a.rotation.set(...e[r].rot);const l=n?n[r%n.length]:t;a.scale.set(l.x*Pe,l.y*Pe,l.z*Pe),a.updateMatrix(),o.setMatrixAt(r,a.matrix),i&&o.setColorAt(r,s.set(i[r%i.length]))}i&&o.instanceColor&&(o.instanceColor.needsUpdate=!0),o.instanceMatrix.needsUpdate=!0}function zp({url:o,layout:e,markSize:t,markMaterial:n,color:i,instanceSizes:a,instanceColors:s,colorTint:r,markLabels:l}){const{scene:d}=at(o),{normScale:p,center:u,halfYUnit:f}=F.useMemo(()=>{d.updateMatrixWorld(!0);const x=new ue().setFromObject(d),h=new j,y=new j;x.getSize(h),x.getCenter(y);const C=Math.max(h.x,h.y,h.z,.001),v=o.includes("drum")?.63:o.includes("clarinet")?1.2:o.includes("harp")?.825:1,B=X/C*v;return{normScale:B,center:y,halfYUnit:h.y*B/2}},[d,o]),A=F.useMemo(()=>e.map(()=>d.clone(!0)),[d,e]);F.useEffect(()=>()=>{A.forEach(x=>x.traverse(h=>{h instanceof Ie&&h.geometry.dispose()}))},[A]);const b=F.useMemo(()=>n!=="original"?ys(n,i):null,[n,i]);F.useEffect(()=>()=>{b==null||b.dispose()},[b]);const m=F.useMemo(()=>s&&!r?s.map(x=>ys(n==="original"?"plastic":n,x)):null,[s,r,n]);F.useEffect(()=>()=>{m==null||m.forEach(x=>x.dispose())},[m]);const g=F.useRef([]);return F.useEffect(()=>(A.forEach((x,h)=>{x.traverse(y=>{if(!(y instanceof Ie))return;y.userData.__origMat||(y.userData.__origMat=y.material);const C=y.userData.__origMat;if(s&&r){const v=s[h%s.length],B=T=>{const S=Cr(T,v);return g.current.push(S),S};y.material=Array.isArray(C)?C.map(B):B(C)}else m?y.material=m[h%m.length]:b?y.material=b:y.material=C})}),()=>{g.current.forEach(x=>x.dispose()),g.current=[]}),[b,m,A,s,r]),c.jsx(c.Fragment,{children:A.map((x,h)=>{const y=a?a[h%a.length]:t,C=p*y.x*Pe,v=p*y.y*Pe,B=p*y.z*Pe,T=-u.x*C,S=-u.y*v,R=-u.z*B,D=l==null?void 0:l[h];return c.jsxs("group",{children:[c.jsx("group",{position:e[h].pos,rotation:e[h].rot,children:c.jsx("primitive",{object:x,position:[T,S,R],scale:[C,v,B]})}),D&&(D.above||D.below)&&c.jsx(br,{pos:e[h].pos,halfY:f*Pe*y.y,above:D.above,below:D.below})]},h)})})}function Lp({width:o,depth:e,height:t,color:n,position:i,particleCount:a,markShape:s,markMaterial:r,markSize:l=Ip,structural:d=jp,customModelUrl:p,labelShow:u,labelData:f,seed:A=0,boundingVolume:b="box",showBounds:m=!0,orientation:g="random",exclusionZone:x,evenDistribution:h=!1,instanceSizes:y,instanceColors:C,colorTint:v,markLabels:B}){const T=F.useRef(null),S=cn(F.useContext(ln)),R=s==="custom"&&!!p,w=R&&!(!!y||!!C)?Math.max(5,a):a,M=F.useMemo(()=>{const I=Array.from({length:w},(k,P)=>{const G=y?y[P%y.length]:l;return .5*X*Pe*Math.max(G.x,G.y,G.z)});return Gp(w,o,t,e,b,g,I,x,h)},[w,o,t,e,A,b,g,x,h,y,l.x,l.y,l.z]),E=F.useMemo(()=>At(s),[s]),K=F.useMemo(()=>{if(b==="sphere"){const P=(o+t+e)/3*No,G=new Xs(P,12,8),z=new ji(G);return G.dispose(),z}const I=new si(o,t,e),k=new ji(I);return I.dispose(),k},[o,t,e,b]);return F.useEffect(()=>{const I=T.current;I&&Op(I,M,l,y,C)},[M,s,l.x,l.y,l.z,y,C]),F.useEffect(()=>()=>{E.dispose()},[E]),F.useEffect(()=>()=>{K.dispose()},[K]),c.jsxs("group",{position:i,children:[m&&c.jsx("lineSegments",{geometry:K,children:c.jsx("lineBasicMaterial",{color:"#666666",transparent:!0,opacity:.7})}),R?c.jsx(F.Suspense,{fallback:null,children:c.jsx(zp,{url:p,layout:M,markSize:l,markMaterial:r,color:n,instanceSizes:y,instanceColors:C,colorTint:v,markLabels:B})}):c.jsx("instancedMesh",{ref:T,args:[E,void 0,a],children:c.jsx(Gt,{material:r,structural:d,color:C?"#ffffff":n})},`${a}-${s}-${C?"col":"plain"}`),!R&&B&&M.map((I,k)=>{const P=B[k];if(!P||!P.above&&!P.below)return null;const G=y?y[k%y.length]:l,z=kp(s)*Pe*G.y;return c.jsx(br,{pos:I.pos,halfY:z,above:P.above,below:P.below},`lbl-${k}`)}),u&&c.jsxs(c.Fragment,{children:[f.top&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[0,t/2+.8,0],userData:{isLabel:!0,labelText:f.top,labelPos:"top"}}),c.jsx(fe,{position:[0,t/2+.8,0],center:!0,occlude:S,style:{pointerEvents:"none"},children:c.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:$t,whiteSpace:"nowrap",userSelect:"none"},children:f.top})})]}),f.bottom&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[0,-(t/2+.8),0],userData:{isLabel:!0,labelText:f.bottom,labelPos:"bottom"}}),c.jsx(fe,{position:[0,-(t/2+.8),0],center:!0,occlude:S,style:{pointerEvents:"none"},children:c.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:$t,whiteSpace:"nowrap",userSelect:"none"},children:f.bottom})})]}),f.left&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[-(o/2+.2),0,0],userData:{isLabel:!0,labelText:f.left,labelPos:"left"}}),c.jsx(fe,{position:[-(o/2+.2),0,0],occlude:S,style:{pointerEvents:"none"},children:c.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:$t,whiteSpace:"nowrap",userSelect:"none",display:"block",textAlign:"right",transform:"translate(-100%, -50%)"},children:f.left})})]}),f.right&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[o/2+.2,0,0],userData:{isLabel:!0,labelText:f.right,labelPos:"right"}}),c.jsx(fe,{position:[o/2+.2,0,0],occlude:S,style:{pointerEvents:"none"},children:c.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:$t,whiteSpace:"nowrap",userSelect:"none",display:"block",transform:"translateY(-50%)"},children:f.right})})]})]})]})}const Np=14,Br=5,Fr=new j(0,1,0);function Sr(o){return o.includes("drum")?.63:o.includes("clarinet")?1.2:o.includes("harp")?.825:1}function Jp(o){return o==="sphere"?X*.52:o==="star"?X*.64:X*.5}function Fs(o,e){const t=new Z(e);switch(o){case"fluid":return new xe({color:t,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5,envMapIntensity:1});case"metal":return new Me({color:t,roughness:.06,metalness:.95,envMapIntensity:2});case"emissive":return new Me({color:t,emissive:t,emissiveIntensity:2.2,roughness:.55});default:return new Me({color:t,roughness:.65,metalness:.05})}}function Rr(o,e,t){const n=Math.PI/180,i=Np,a=o.clone(!0);a.position.set(0,0,0),a.rotation.set(0,0,0),a.scale.set(1,1,1),a.updateMatrixWorld(!0);const s=new ue().setFromObject(a);if(!s.isEmpty()){const p=new j;s.getSize(p);const u=Math.max(p.x,p.y,p.z,.001),f=X/u*(e?Sr(e):1),A=new j;s.getCenter(A),a.scale.setScalar(f),a.position.set(-A.x*f,-A.y*f,-A.z*f)}const r=new oo;r.scale.set(i*t.size.x,i*t.size.y,i*t.size.z),r.add(a);const l=new oo;l.position.set(t.position.x,t.position.y,t.position.z),l.rotation.set(t.orientation.x*n,t.orientation.y*n,t.orientation.z*n),l.add(r),l.updateMatrixWorld(!0);const d=[];return l.traverse(p=>{const u=p;if(!u.isMesh||!u.geometry)return;const f=u.geometry,A=new Ee;A.setAttribute("position",f.getAttribute("position").clone());const b=f.getAttribute("normal");b&&A.setAttribute("normal",b.clone()),f.index&&A.setIndex(f.index.clone()),A.applyMatrix4(u.matrixWorld);const m=A.toNonIndexed();m.getAttribute("normal")||m.computeVertexNormals(),d.push(m)}),d.length===0?null:d.length===1?d[0]:zc(d,!1)??d[0]}function Qp(o,e){const t=new Lc(new Ie(o)).build(),n=[];for(let i=0;i<e;i++){const a=new j,s=new j;t.sample(a,s),s.lengthSq()<1e-8&&s.set(0,1,0),s.normalize(),n.push({pos:a,normal:s})}return n}const Wp={display:"block",fontSize:"11px",color:"#e8e8e8",fontFamily:"Courier New, monospace",textShadow:"0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)",whiteSpace:"nowrap",userSelect:"none",transform:"translateY(-100%)"};function Mr({samples:o,halfHeights:e,markLabels:t}){const n=cn(F.useContext(ln));return t?c.jsx(c.Fragment,{children:o.map((i,a)=>{const s=t[a];if(!s)return null;const r=e[a],l=r*2+r*.08,d=i.pos.clone().addScaledVector(i.normal,l);return c.jsxs("group",{position:[d.x,d.y,d.z],children:[c.jsx("group",{userData:{isLabel:!0,labelText:s,labelPos:"top"}}),c.jsx(fe,{center:!0,occlude:n,style:{pointerEvents:"none"},children:c.jsx("span",{"data-phys-label":"",style:Wp,children:s})})]},`lbl-${a}`)})}):null}function Vp({samples:o,markShape:e,markMaterial:t,markSize:n,color:i,structural:a,surfaceScale:s,instanceSizes:r,instanceColors:l,markLabels:d}){const p=F.useRef(null),u=F.useMemo(()=>At(e),[e]);F.useEffect(()=>()=>{u.dispose()},[u]);const f=Br*s,A=Jp(e)*f,b=o.map((m,g)=>A*(r?r[g%r.length].y:n.y));return F.useEffect(()=>{const m=p.current;if(!m)return;const g=new $o,x=new Ut,h=new Z;o.forEach((y,C)=>{const v=r?r[C%r.length]:n;x.setFromUnitVectors(Fr,y.normal),g.position.copy(y.pos).addScaledVector(y.normal,A*v.y),g.quaternion.copy(x),g.scale.set(f*v.x,f*v.y,f*v.z),g.updateMatrix(),m.setMatrixAt(C,g.matrix),l&&m.setColorAt(C,h.set(l[C%l.length]))}),m.instanceMatrix.needsUpdate=!0,l&&m.instanceColor&&(m.instanceColor.needsUpdate=!0)},[o,e,n.x,n.y,n.z,f,A,r,l]),c.jsxs(c.Fragment,{children:[c.jsx("instancedMesh",{ref:p,args:[u,void 0,o.length],children:c.jsx(Gt,{material:t,structural:a,color:l?"#ffffff":i})},`${o.length}-${e}-${l?"col":"plain"}`),c.jsx(Mr,{samples:o,halfHeights:b,markLabels:d})]})}function Xp({url:o,samples:e,markMaterial:t,markSize:n,color:i,surfaceScale:a,instanceSizes:s,instanceColors:r,colorTint:l,markLabels:d}){const{scene:p}=at(o),{normScale:u,center:f,halfYUnit:A}=F.useMemo(()=>{p.updateMatrixWorld(!0);const v=new ue().setFromObject(p),B=new j,T=new j;v.getSize(B),v.getCenter(T);const S=Math.max(B.x,B.y,B.z,.001),R=X/S*Sr(o);return{normScale:R,center:T,halfYUnit:B.y*R/2}},[p,o]),b=F.useMemo(()=>e.map(()=>p.clone(!0)),[p,e]);F.useEffect(()=>()=>{b.forEach(v=>v.traverse(B=>{B instanceof Ie&&B.geometry.dispose()}))},[b]);const m=F.useMemo(()=>t!=="original"?Fs(t,i):null,[t,i]);F.useEffect(()=>()=>{m==null||m.dispose()},[m]);const g=F.useMemo(()=>r&&!l?r.map(v=>Fs(t==="original"?"plastic":t,v)):null,[r,l,t]);F.useEffect(()=>()=>{g==null||g.forEach(v=>v.dispose())},[g]);const x=F.useRef([]);F.useEffect(()=>(b.forEach((v,B)=>{v.traverse(T=>{if(!(T instanceof Ie))return;T.userData.__origMat||(T.userData.__origMat=T.material);const S=T.userData.__origMat;if(r&&l){const R=r[B%r.length],D=w=>{const M=Cr(w,R);return x.current.push(M),M};T.material=Array.isArray(S)?S.map(D):D(S)}else g?T.material=g[B%g.length]:m?T.material=m:T.material=S})}),()=>{x.current.forEach(v=>v.dispose()),x.current=[]}),[m,g,b,r,l]);const h=Br*a,y=b.map((v,B)=>A*h*(s?s[B%s.length].y:n.y)),C=new Ut;return c.jsxs(c.Fragment,{children:[b.map((v,B)=>{const T=e[B],S=s?s[B%s.length]:n,R=u*S.x*h,D=u*S.y*h,w=u*S.z*h,M=A*h*S.y,E=-f.x*R,K=-f.y*D,I=-f.z*w;C.setFromUnitVectors(Fr,T.normal);const k=T.pos.clone().addScaledVector(T.normal,M);return c.jsx("group",{position:[k.x,k.y,k.z],quaternion:[C.x,C.y,C.z,C.w],children:c.jsx("primitive",{object:v,position:[E,K,I],scale:[R,D,w]})},B)}),c.jsx(Mr,{samples:e,halfHeights:y,markLabels:d})]})}function Tr({worldGeo:o,count:e,seed:t,markShape:n,markUrl:i,structural:a,...s}){const r=F.useMemo(()=>Qp(o,Math.max(1,e)),[o,e,t]);return n==="custom"&&i?c.jsx(F.Suspense,{fallback:null,children:c.jsx(Xp,{url:i,samples:r,...s})}):c.jsx(Vp,{samples:r,markShape:n,structural:a,...s})}function Yp(o){const{dec:e,url:t,...n}=o,{scene:i}=at(t),a=F.useMemo(()=>Rr(i,t,e),[i,t,e.position.x,e.position.y,e.position.z,e.orientation.x,e.orientation.y,e.orientation.z,e.size.x,e.size.y,e.size.z]);return F.useEffect(()=>()=>{a==null||a.dispose()},[a]),a?c.jsx(Tr,{worldGeo:a,...n}):null}function Zp(o){const{dec:e,...t}=o,n=F.useMemo(()=>{const i=At(e.shape),a=Rr(new Ie(i),null,e);return i.dispose(),a},[e.shape,e.position.x,e.position.y,e.position.z,e.orientation.x,e.orientation.y,e.orientation.z,e.size.x,e.size.y,e.size.z]);return F.useEffect(()=>()=>{n==null||n.dispose()},[n]),n?c.jsx(Tr,{worldGeo:n,...t}):null}function qp({dec:o,...e}){return o.shape==="custom"&&o.customModelUrl?c.jsx(F.Suspense,{fallback:null,children:c.jsx(Yp,{dec:o,url:o.customModelUrl,...e})}):c.jsx(Zp,{dec:o,...e})}function _p(o,e){const t=new Z(e);switch(o){case"fluid":return new xe({color:t,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5});case"metal":return new Me({color:t,roughness:.06,metalness:.95});case"emissive":return new Me({color:t,emissive:t,emissiveIntensity:2.2,roughness:.55});default:return new Me({color:t,roughness:.65,metalness:.05})}}function $p({url:o,markMaterial:e,markSize:t,color:n}){const{scene:i}=at(o),{clone:a,sx:s,sy:r,sz:l,ox:d,oy:p,oz:u}=F.useMemo(()=>{i.updateMatrixWorld(!0);const A=new ue().setFromObject(i),b=new j,m=new j;A.getSize(b),A.getCenter(m);const g=Math.max(b.x,b.y,b.z,.001),x=X/g,h=x*t.x,y=x*t.y,C=x*t.z;return{clone:i.clone(!0),sx:h,sy:y,sz:C,ox:-m.x*h,oy:-m.y*y,oz:-m.z*C}},[i,t.x,t.y,t.z]),f=F.useMemo(()=>e!=="original"?_p(e,n):null,[e,n]);return F.useEffect(()=>()=>{f==null||f.dispose()},[f]),F.useEffect(()=>{f&&a.traverse(A=>{A instanceof Ie&&(A.material=f)})},[f,a]),c.jsx("primitive",{object:a,position:[d,p,u],scale:[s,r,l]})}function eh({position:o,count:e,markShape:t,markMaterial:n,markSize:i,color:a,structural:s,customModelUrl:r}){const l=F.useMemo(()=>At(t),[t]);F.useEffect(()=>()=>{l.dispose()},[l]);const d=Math.sqrt(e)*X*Math.max(i.x,i.y,i.z)*2.2,p=F.useMemo(()=>Array.from({length:e},(f,A)=>({x:(Math.random()-.5)*d,y:X*2+A*X*1.2+Math.random()*X*.5,z:(Math.random()-.5)*d,rx:Math.random()*Math.PI*2,ry:Math.random()*Math.PI*2,rz:Math.random()*Math.PI*2})),[e,d]),u=-X*.7;return c.jsxs("group",{position:o,children:[c.jsx(Vo,{type:"fixed",children:c.jsx(Ys,{args:[3,.05,3],position:[0,u,0]})}),p.map((f,A)=>c.jsx(Vo,{position:[f.x,f.y,f.z],rotation:[f.rx,f.ry,f.rz],colliders:"hull",restitution:.1,friction:.8,linearDamping:.4,angularDamping:.5,children:t==="custom"&&r?c.jsx(F.Suspense,{fallback:null,children:c.jsx($p,{url:r,markMaterial:n,markSize:i,color:a})}):c.jsx("mesh",{geometry:l,scale:[i.x,i.y,i.z],children:c.jsx(Gt,{material:n,structural:s,color:a})})},A))]})}const un=F.createContext({colorMode:"distinct",colorGradient:{from:"#EE6655",to:"#4488EE"},colorTint:!1});function th(o,e,t){return"#"+new Z(o).lerp(new Z(e),Math.max(0,Math.min(1,t))).getHexString()}function Ci(o,e,t,n,i,a){var s,r;if(e.markColor===null)return n;if(i==="continuous"){const l=t.map(A=>A.percentage),d=Math.min(...l),p=Math.max(...l),u=((s=t[o%Math.max(1,t.length)])==null?void 0:s.percentage)??0,f=p>d?(u-d)/(p-d):.5;return th(a.from,a.to,f)}return((r=t[o%Math.max(1,t.length)])==null?void 0:r.color)??n}function oh(o){return 2*Math.atan(12/o)*180/Math.PI}const wr={1:[0,.5,18],2:[0,2,26],3:[0,4,64]};function nh({level:o,fov:e,focalLength:t}){const{camera:n,controls:i}=nn(),a=F.useRef(o),s=F.useRef(t);return F.useEffect(()=>{var r,l,d;if(n instanceof ai){if(a.current!==o){const[p,u,f]=wr[o];n.position.set(p,u,f),n.lookAt(0,0,0);const A=i;(r=A==null?void 0:A.target)==null||r.set(0,0,0),(l=A==null?void 0:A.update)==null||l.call(A),a.current=o}if(s.current!==t&&s.current>0){const p=t/s.current,u=i;u!=null&&u.spherical?(u.spherical.radius*=p,(d=u.update)==null||d.call(u)):n.position.multiplyScalar(p)}s.current=t,n.fov=e,n.updateProjectionMatrix()}},[n,i,o,e,t]),null}const po=14,ii=new Map,vi=F.createContext({aspects:{},report:()=>{}});function Bi({url:o,material:e,color:t,sz:n}){const{scene:i}=at(o),a=F.useMemo(()=>{const r=i.clone(!0);r.position.set(0,0,0),r.rotation.set(0,0,0),r.scale.set(1,1,1),r.updateMatrixWorld(!0);const l=o.includes("drum")?.63:o.includes("clarinet")?1.2:o.includes("harp")?.825:1,d=new ue().setFromObject(r);if(!d.isEmpty()){const p=new j;d.getSize(p);const u=Math.max(p.x,p.y,p.z,.001);ii.set(o,{x:p.x/u*l,y:p.y/u*l,z:p.z/u*l});const f=X/u*l,A=new j;d.getCenter(A),r.scale.setScalar(f),r.position.set(-A.x*f,-A.y*f,-A.z*f)}if(e!=="original"){const p=e==="fluid"?new xe({color:new Z(t),transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5}):new Me({color:new Z(t),roughness:e==="metal"?.06:e==="emissive"?.55:.65,metalness:e==="metal"?.95:0,emissive:e==="emissive"?new Z(t):new Z(0,0,0),emissiveIntensity:e==="emissive"?2.2:0});r.traverse(u=>{u instanceof Ie&&(u.material=p)})}return r},[i,o,e,t]),{report:s}=F.useContext(vi);return F.useEffect(()=>{const r=ii.get(o);r&&s(o,r)},[o,s,a]),c.jsx("group",{scale:n,children:c.jsx("primitive",{object:a})})}const Dt=po*X;function ho(o,e,t){const n=e[t%Math.max(1,e.length)],i={},a=Object.entries(o);for(const[s,r]of a)r&&((r==="numerical"||r==="weight"||r==="count")&&(i[s]=`${(n==null?void 0:n.percentage)??"?"}`),(r==="categorical"||r==="garbageType"||r==="section")&&(i[s]=(n==null?void 0:n.name)??"?"));return i}function ih(o,e,t){return Array.from({length:t},(n,i)=>{const a=ho(o,e,i),s=[a.top,a.left].filter(Boolean).join("  ·  "),r=[a.bottom,a.right].filter(Boolean).join("  ·  ");return{above:s||null,below:r||null}})}function sh(o,e,t){return Array.from({length:t},(n,i)=>{const a=ho(o,e,i),s=[a.top,a.left,a.right,a.bottom].filter(Boolean);return s.length?s.join("  ·  "):null})}const rh="0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)";function ot({pos:o,text:e}){const t=o==="top"?"translate(-50%, -100%)":o==="bottom"?"translate(-50%, 0)":o==="left"?"translate(-100%, -50%)":"translateY(-50%)";return c.jsx("span",{"data-phys-label":"",style:{display:"block",fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:rh,whiteSpace:"nowrap",userSelect:"none",transform:t},children:e})}function Jo(o){return o==="numerical"||o==="weight"||o==="count"}function Re(o,e,t){var a;const n=Math.max(...t.map(s=>s.percentage),1);return .2+1.8*((((a=t[e%Math.max(1,t.length)])==null?void 0:a.percentage)??n)/n)}function Dr(o,e,t){return o==="center"?[0,0,0]:e==="X"?[0,o==="start"?-t:t,0]:[o==="start"?t:-t,0,0]}function ah({config:o,layers:e,bindings:t,markLabelConfig:n}){const i=F.useMemo(()=>At(o.shape),[o.shape]);F.useEffect(()=>()=>{i.dispose()},[i]);const{colorMode:a,colorGradient:s}=F.useContext(un),r=Math.PI/180,l=po,d=Ci(0,t,e,o.color,a,s),p=(o.scale??1)*(t.markScale?Re(t.markScale,0,e):1),u={x:o.size.x*p*(t.markSizeX?Re(t.markSizeX,0,e):1),y:o.size.y*p*(t.markSizeY?Re(t.markSizeY,0,e):1),z:o.size.z*p*(t.markSizeZ?Re(t.markSizeZ,0,e):1)},f=l*u.y*.036+.8,A=l*u.x*.036+.8,b=ho(n.slots,e,0),m=[o.orientation.x*r,o.orientation.y*r,o.orientation.z*r];return c.jsxs("group",{position:[o.position.x,o.position.y,o.position.z],rotation:m,children:[o.shape==="custom"&&o.customModelUrl?c.jsx(F.Suspense,{fallback:null,children:c.jsx(Bi,{url:o.customModelUrl,material:o.material,color:d,sz:[l*u.x,l*u.y,l*u.z]})}):c.jsx("mesh",{geometry:i,scale:[l*u.x,l*u.y,l*u.z],children:c.jsx(Gt,{material:o.material,structural:o.structural,color:d})}),n.show&&c.jsxs(c.Fragment,{children:[b.top&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[0,f,0],userData:{isLabel:!0,labelText:b.top,labelPos:"top"}}),c.jsx(fe,{zIndexRange:[1,0],position:[0,f,0],style:{pointerEvents:"none"},children:c.jsx(ot,{pos:"top",text:b.top})})]}),b.bottom&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[0,-f,0],userData:{isLabel:!0,labelText:b.bottom,labelPos:"bottom"}}),c.jsx(fe,{zIndexRange:[1,0],position:[0,-f,0],style:{pointerEvents:"none"},children:c.jsx(ot,{pos:"bottom",text:b.bottom})})]}),b.left&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[-A,0,0],userData:{isLabel:!0,labelText:b.left,labelPos:"left"}}),c.jsx(fe,{zIndexRange:[1,0],position:[-A,0,0],style:{pointerEvents:"none"},children:c.jsx(ot,{pos:"left",text:b.left})})]}),b.right&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[A,0,0],userData:{isLabel:!0,labelText:b.right,labelPos:"right"}}),c.jsx(fe,{zIndexRange:[1,0],position:[A,0,0],style:{pointerEvents:"none"},children:c.jsx(ot,{pos:"right",text:b.right})})]})]})]})}function lh({shape:o,customModelUrl:e,customModelHasMat:t,material:n,structural:i,color:a,scale:s}){const r=F.useMemo(()=>At(o),[o]);return F.useEffect(()=>()=>{r.dispose()},[r]),o==="custom"&&e?c.jsx(F.Suspense,{fallback:null,children:c.jsx(Bi,{url:e,material:n,color:a,sz:s})}):c.jsx("mesh",{geometry:r,scale:s,children:c.jsx(Gt,{material:n,structural:i,color:a})})}function ch({markConfig:o,collection1Config:e,color:t,layers:n,bindings:i,markLabelConfig:a}){const s=n.length||e.alignCount,{alignAxis:r,alignSpacing:l,alignAnchor:d}=e,p=po,u=Math.PI/180,f=(s-1)/2,A=[o.orientation.x*u,o.orientation.y*u,o.orientation.z*u],{colorMode:b,colorGradient:m}=F.useContext(un);function g(y){return Ci(y,i,n,t,b,m)}const x=o.scale??1;function h(y){const C=x*(i.markScale?Re(i.markScale,y,n):1),v={x:o.size.x*C*(i.markSizeX?Re(i.markSizeX,y,n):1),y:o.size.y*C*(i.markSizeY?Re(i.markSizeY,y,n):1),z:o.size.z*C*(i.markSizeZ?Re(i.markSizeZ,y,n):1)};return[p*v.x,p*v.y,p*v.z]}return c.jsx("group",{children:Array.from({length:s},(y,C)=>{var z,_;const v=(C-f)*l,B=h(C),T=r==="X"?B[1]*.036:B[0]*.036,S=Dr(d,r,T),R=r==="X"?[v+S[0],S[1],S[2]]:[S[0],v+S[1],S[2]],D=B[1]*.036+.8,w=B[0]*.036+.8,M=ho(a.slots,n,C),E=(z=n[C%Math.max(1,n.length)])==null?void 0:z.name,K=(_=o.categoryShapes)==null?void 0:_[E??""],I=(K==null?void 0:K.shape)??o.shape,k=K?K.customModelUrl:o.customModelUrl,P=K?K.customModelHasMat:o.customModelHasMat,G=K!=null&&K.customModelHasMat?"original":o.material;return c.jsxs("group",{position:R,rotation:A,children:[c.jsx(lh,{shape:I,customModelUrl:k,customModelHasMat:P,material:G,structural:o.structural,color:g(C),scale:B}),a.show&&c.jsxs(c.Fragment,{children:[M.top&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[0,D,0],userData:{isLabel:!0,labelText:M.top,labelPos:"top"}}),c.jsx(fe,{zIndexRange:[1,0],position:[0,D,0],style:{pointerEvents:"none"},children:c.jsx(ot,{pos:"top",text:M.top})})]}),M.bottom&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[0,-D,0],userData:{isLabel:!0,labelText:M.bottom,labelPos:"bottom"}}),c.jsx(fe,{zIndexRange:[1,0],position:[0,-D,0],style:{pointerEvents:"none"},children:c.jsx(ot,{pos:"bottom",text:M.bottom})})]}),M.left&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[-w,0,0],userData:{isLabel:!0,labelText:M.left,labelPos:"left"}}),c.jsx(fe,{zIndexRange:[1,0],position:[-w,0,0],style:{pointerEvents:"none"},children:c.jsx(ot,{pos:"left",text:M.left})})]}),M.right&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[w,0,0],userData:{isLabel:!0,labelText:M.right,labelPos:"right"}}),c.jsx(fe,{zIndexRange:[1,0],position:[w,0,0],style:{pointerEvents:"none"},children:c.jsx(ot,{pos:"right",text:M.right})})]})]})]},C)})})}function Kr({markConfig:o,collection1Config:e,color:t,position:n,layers:i,bindings:a,heightOverride:s,markLabelConfig:r,colLabelConfig:l,layerIndex:d,scatterSeed:p,decorations:u}){var V;const{colorMode:f,colorGradient:A,colorTint:b}=F.useContext(un),{aspects:m}=F.useContext(vi),g=o.scale??1,x={x:o.size.x*g,y:o.size.y*g,z:o.size.z*g},h=e.arrangement==="scattering"||e.arrangement==="surface",y=h&&(a.markScale!==null||a.markSizeX!==null||a.markSizeY!==null||a.markSizeZ!==null),C=h&&a.markColor!==null,v=y||C,B=F.useMemo(()=>{if(y)return i.map((ne,L)=>{const ee=a.markScale?Re(a.markScale,L,i):1;return{x:x.x*ee*(a.markSizeX?Re(a.markSizeX,L,i):1),y:x.y*ee*(a.markSizeY?Re(a.markSizeY,L,i):1),z:x.z*ee*(a.markSizeZ?Re(a.markSizeZ,L,i):1)}})},[y,i,a.markScale,a.markSizeX,a.markSizeY,a.markSizeZ,x.x,x.y,x.z]),T=F.useMemo(()=>{if(C)return i.map((ne,L)=>Ci(L,a,i,t,f,A))},[C,i,a,t,f,A]),S=F.useMemo(()=>{const ne=e.scatterExclusionId;if(!ne)return;const L=u==null?void 0:u.find(Ue=>Ue.id===ne);if(!L)return;const ee=po*X,ye=B?B.reduce((Ue,mt)=>Math.max(Ue,mt.x,mt.y,mt.z),0):Math.max(x.x,x.y,x.z),Qe=X*Pe/2*ye,Ot=[L.position.x-n[0],L.position.y-n[1],L.position.z-n[2]];if(L.shape==="sphere"){const Ue=ee*.52*Math.max(L.size.x,L.size.y,L.size.z)*1.05+Qe;return{kind:"sphere",center:Ot,radius:Ue}}const ve=L.shape==="custom"&&L.customModelUrl?m[L.customModelUrl]??ii.get(L.customModelUrl)??{x:1,y:1,z:1}:{x:1,y:1,z:1};return{kind:"box",center:Ot,half:[ee/2*L.size.x*ve.x*1.05+Qe,ee/2*L.size.y*ve.y*1.05+Qe,ee/2*L.size.z*ve.z*1.05+Qe]}},[e.scatterExclusionId,u,n[0],n[1],n[2],x.x,x.y,x.z,B,m]);if(e.arrangement==="alignment")return c.jsx("group",{position:n,children:c.jsx(ch,{markConfig:o,collection1Config:e,color:t,layers:i,bindings:a,markLabelConfig:r})});if(e.arrangement==="piling")return c.jsx(eh,{position:n,count:e.pilingCount,markShape:o.shape,markMaterial:o.material,markSize:x,color:t,structural:o.structural,customModelUrl:o.shape==="custom"?o.customModelUrl:void 0},e.pilingCount);if(e.arrangement==="surface"){const ne=u==null?void 0:u.find(ye=>ye.id===e.surfaceTargetId);if(!ne)return null;const L=v?i.length:e.surfaceCount??24,ee=r.show?sh(r.slots,i,L):void 0;return c.jsx(qp,{dec:ne,markShape:o.shape,markMaterial:o.material,markSize:x,color:t,count:L,surfaceScale:e.surfaceScale??1,seed:p,structural:o.structural,markUrl:o.shape==="custom"?o.customModelUrl:void 0,instanceSizes:B,instanceColors:T,colorTint:b,markLabels:ee})}const{scatterDimensions:R,scatterCount:D,scatterDensity:w,scatterMode:M}=e,E=e.scatterSizeAxes??{x:!1,y:!0,z:!1},K=s!=null&&E.x?s:R.x,I=s!=null&&E.y?s:R.y,k=s!=null&&E.z?s:R.z,P=a.scatterCount!==null?Math.max(1,Math.round(((V=i[d%Math.max(1,i.length)])==null?void 0:V.percentage)??D)):null,G=P!==null?P:v?i.length:(M??"count")==="density"?Math.max(5,Math.round(w*K*I*k)):D,z=ho(l.slots,i,d),_=r.show?ih(r.slots,i,G):void 0;return c.jsx(Lp,{width:K,depth:k,height:I,color:t,position:n,particleCount:G,markShape:o.shape,markMaterial:o.material,markSize:x,structural:o.structural,customModelUrl:o.shape==="custom"?o.customModelUrl:void 0,labelShow:l.show,labelData:z,seed:p,boundingVolume:e.scatterBoundingVolume??"box",showBounds:e.scatterShowBounds??!0,orientation:e.scatterOrientation??"random",exclusionZone:S,evenDistribution:e.scatterEven??!1,instanceSizes:B,instanceColors:T,colorTint:b,markLabels:_})}const Qo=8;function uh({markConfig:o,collection1Config:e,layers:t,bindings:n,markLabelConfig:i,colLabelConfig:a,scatterSeed:s,decorations:r}){var u,f;const l=((u=t[0])==null?void 0:u.color)??e.color,d=Math.max(...t.map(A=>A.percentage),1),p=Jo(n.scatterSize)&&e.arrangement==="scattering"?Math.max(.5,(((f=t[0])==null?void 0:f.percentage)??50)/d*Qo):void 0;return c.jsx(Kr,{markConfig:o,collection1Config:e,color:l,position:[0,0,0],layers:t,bindings:n,heightOverride:p,markLabelConfig:i,colLabelConfig:a,layerIndex:0,scatterSeed:s,decorations:r})}function dh({markConfig:o,collection1Config:e,collection2Config:t,layers:n,bindings:i,markLabelConfig:a,colLabelConfig:s,scatterSeed:r,decorations:l}){const{arrangement:d,alignCount:p,alignAxis:u,alignSpacing:f,alignAnchor:A,scatterCount:b,scatterDimensions:m,color:g}=t,x=n.length||p,h=F.useMemo(()=>{if(d==="alignment"){const C=Array.from({length:x},(D,w)=>{const M=n[w%Math.max(1,n.length)];return{color:(M==null?void 0:M.color)??g,name:(M==null?void 0:M.name)??`Group ${w+1}`,pct:(M==null?void 0:M.percentage)??0}}),v=Math.max(...n.map(D=>D.percentage),1),B=C.map(D=>{if(e.arrangement==="scattering"){const I=e.scatterDimensions;return u==="X"?I.x:Jo(i.scatterSize)?Math.max(.5,D.pct/v*Qo):I.y}const w=e,M=o.scale??1,E=o.size.x*M*Dt,K=o.size.y*M*Dt;return u==="X"?w.alignAxis==="X"?(w.alignCount-1)*w.alignSpacing+E:E:w.alignAxis==="Y"?(w.alignCount-1)*w.alignSpacing+K:K}),T=C.map(D=>{if(e.arrangement==="scattering"){const E=e.scatterDimensions;return u==="X"?Jo(i.scatterSize)?Math.max(.5,D.pct/v*Qo):E.y:E.x}const w=e,M=o.scale??1;return u==="X"?w.alignAxis==="Y"?(w.alignCount-1)*w.alignSpacing+o.size.y*M*Dt:o.size.y*M*Dt:w.alignAxis==="X"?(w.alignCount-1)*w.alignSpacing+o.size.x*M*Dt:o.size.x*M*Dt});let R=-(B.reduce((D,w)=>D+w,0)+(x-1)*f)/2;return C.map((D,w)=>{const M=B[w],E=T[w],K=R+M/2;R+=M+f;const I=Dr(A,u,E/2),k=u==="X"?[K+I[0],I[1],I[2]]:[I[0],K+I[1],I[2]];return{...D,position:k,perpExt:E}})}return Array.from({length:b},(C,v)=>{const B=n[v%Math.max(1,n.length)];return{position:[(Math.random()-.5)*m.x*.8,(Math.random()-.5)*m.y*.8,(Math.random()-.5)*m.z*.8],color:(B==null?void 0:B.color)??g,name:(B==null?void 0:B.name)??`Group ${v+1}`,pct:(B==null?void 0:B.percentage)??0,perpExt:0}})},[d,x,u,f,A,b,m.x,m.y,m.z,n,g,i.scatterSize,e.arrangement,e.alignAxis,e.alignCount,e.alignSpacing,e.scatterDimensions.x,e.scatterDimensions.y,o.size.x,o.size.y,r]),y=Math.max(...n.map(C=>C.percentage),1);return c.jsx("group",{children:h.map(({position:C,color:v,name:B,pct:T},S)=>{var M;const R=Jo(i.scatterSize)&&e.arrangement==="scattering"?Math.max(.5,T/y*Qo):void 0,D=(M=o.categoryShapes)==null?void 0:M[B],w=D?{...o,shape:D.shape,customModelUrl:D.customModelUrl,customModelHasMat:D.customModelHasMat,customModelName:D.customModelName,material:D.customModelHasMat?"original":o.material}:o;return c.jsx(Kr,{markConfig:w,collection1Config:e,color:v,position:C,layers:n,bindings:i,heightOverride:R,markLabelConfig:a,colLabelConfig:s,layerIndex:S%Math.max(1,n.length),scatterSeed:r,decorations:l},S)})})}function fh({config:o,onRegister:e,onUnregister:t}){const n=F.useMemo(()=>At(o.shape),[o.shape]);F.useEffect(()=>()=>{n.dispose()},[n]);const i=F.useRef(null);F.useEffect(()=>(i.current&&(e==null||e(o.id,i.current)),()=>t==null?void 0:t(o.id)),[o.id,e,t]);const a=Math.PI/180,s=po,r=[o.orientation.x*a,o.orientation.y*a,o.orientation.z*a];return c.jsx("group",{ref:i,position:[o.position.x,o.position.y,o.position.z],rotation:r,children:o.shape==="custom"&&o.customModelUrl?c.jsx(F.Suspense,{fallback:null,children:c.jsx(Bi,{url:o.customModelUrl,material:o.material,color:o.color,sz:[s*o.size.x,s*o.size.y,s*o.size.z]})}):c.jsx("mesh",{geometry:n,scale:[s*o.size.x,s*o.size.y,s*o.size.z],children:c.jsx(Gt,{material:o.material,structural:o.structural,color:o.color})})})}function ph({onSamplesUpdate:o,downloadRenderRef:e}){const{gl:t,scene:n,camera:i}=nn(),a=F.useRef(o);return a.current=o,F.useEffect(()=>{let s=!1,r=null,l=null,d=null;async function p(){if(await new Promise(y=>setTimeout(y,0)),s)return;const u=new Ep;l=new Rf(t),l.setSize(t.domElement.width,t.domElement.height),l.camera=i,l.material=u,n.updateMatrixWorld(!0);const f=new Kf(n),{bvh:A,textures:b,materials:m,lights:g}=f.generate();if(s){l.dispose();return}const{geometry:x}=f;if(u.bvh.updateFrom(A),u.attributesArray.updateFrom(x.attributes.normal,x.attributes.tangent,x.attributes.uv,x.attributes.color),u.materialIndexAttribute.updateFrom(x.attributes.materialIndex),u.textures.setTextures(t,2048,2048,b),u.materials.updateFrom(m,b),u.lights.updateFrom(g),n.environment)try{u.envMapInfo.updateFrom(n.environment)}catch{}u.uniforms.backgroundAlpha.value=0,d=new Pt(new et({map:l.target.texture})),e.current=()=>{const y=l.samples;t.domElement.toBlob(async C=>{if(!C)return;const v=document.createElement("canvas");v.width=t.domElement.width,v.height=t.domElement.height;const B=v.getContext("2d"),T=await createImageBitmap(C);B.drawImage(T,0,0),n.updateMatrixWorld();const S=[];if(n.traverse(R=>{if(R.userData.isLabel){const D=new j;R.getWorldPosition(D),S.push({worldPos:D,text:R.userData.labelText,pos:R.userData.labelPos??"top"})}}),S.length>0){const R=window.devicePixelRatio||1,D=Math.round(12*R);B.save(),B.font=`${D}px 'Courier New', monospace`,B.shadowColor="rgba(0,0,0,1)",B.shadowBlur=6*R,B.shadowOffsetX=0,B.shadowOffsetY=R,B.fillStyle="#e0e0e0";for(const{worldPos:w,text:M,pos:E}of S){const K=w.clone().project(i);if(K.z>1)continue;const I=(K.x*.5+.5)*v.width,k=(K.y*-.5+.5)*v.height;E==="top"?(B.textAlign="center",B.textBaseline="bottom"):E==="bottom"?(B.textAlign="center",B.textBaseline="top"):E==="left"?(B.textAlign="right",B.textBaseline="middle"):(B.textAlign="left",B.textBaseline="middle"),B.fillText(M,I,k)}B.restore()}v.toBlob(R=>{if(!R)return;const D=URL.createObjectURL(R),w=document.createElement("a");w.download=`render_${y}spp.png`,w.href=D,w.click(),URL.revokeObjectURL(D)},"image/png")},"image/png")},i.updateMatrixWorld();function h(){s||!l||!d||(i.updateMatrixWorld(),l.update(),d.material.map=l.target.texture,t.setRenderTarget(null),d.render(t),a.current(l.samples),r=requestAnimationFrame(h))}r=requestAnimationFrame(h)}return p().catch(console.error),()=>{s=!0,r!==null&&cancelAnimationFrame(r),l==null||l.dispose(),d==null||d.dispose(),e.current=null}},[t,n,i,e]),null}function hh(o,e){const t=o*Math.PI/180,n=e*Math.PI/180,i=100;return[i*Math.cos(t)*Math.sin(n),i*Math.sin(t),i*Math.cos(t)*Math.cos(n)]}function Ah({top:o,bottom:e}){const t=nn(i=>i.scene),n=F.useMemo(()=>{const i=document.createElement("canvas");i.width=2,i.height=512;const a=i.getContext("2d"),s=a.createLinearGradient(0,0,0,512);s.addColorStop(0,o),s.addColorStop(1,e),a.fillStyle=s,a.fillRect(0,0,2,512);const r=new Nc(i);return r.colorSpace=Jc,r},[o,e]);return F.useEffect(()=>{const i=t.background;return t.background=n,()=>{t.background===n&&(t.background=i),n.dispose()}},[t,n]),null}function mh({value:o}){const e=nn(t=>t.gl);return F.useEffect(()=>{e.toneMappingExposure=o},[e,o]),null}function Er(o){return o.exposure!=null?o.exposure:o.background==="ocean"?.95:o.background==="dark"?1.35:1.2}function gh({config:o}){const e=o.background,t=e==="ocean",i=[0,(o.envRotation??0)*Math.PI/180,0];return c.jsxs(c.Fragment,{children:[e==="dark"&&c.jsx("color",{attach:"background",args:["#050505"]}),e==="ocean"&&c.jsx("color",{attach:"background",args:["#7ab8d4"]}),e==="color"&&c.jsx("color",{attach:"background",args:[o.bgColor??"#202024"]}),e==="gradient"&&c.jsx(Ah,{top:o.bgGradientTop??"#3a5f8a",bottom:o.bgGradientBottom??"#0a0a12"}),c.jsx(di,{preset:o.hdriPreset,background:e==="hdri",backgroundBlurriness:o.hdriBlur??0,backgroundIntensity:o.hdriIntensity??1,environmentRotation:i,backgroundRotation:i}),c.jsx(mh,{value:Er(o)}),e==="sky"&&c.jsx(as,{distance:45e4,sunPosition:hh(o.skyElevation??20,o.skyAzimuth??140),turbidity:8,rayleigh:2,mieCoefficient:.005,mieDirectionalG:.8}),t&&c.jsxs(c.Fragment,{children:[c.jsx(as,{distance:45e4,sunPosition:[5,1.2,8],turbidity:9,rayleigh:3,mieCoefficient:.005,mieDirectionalG:.7}),c.jsx("fog",{attach:"fog",args:["#a8d4ea",25,140]}),c.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-7.2,0],children:[c.jsx("planeGeometry",{args:[400,400,1,1]}),c.jsx("meshPhysicalMaterial",{color:"#0c3a58",roughness:.06,metalness:.65,reflectivity:.9})]})]}),o.stars&&c.jsx(yf,{radius:120,depth:50,count:4e3,factor:4,saturation:0,fade:!0,speed:.4}),o.fog&&!t&&c.jsx("fog",{attach:"fog",args:[o.fogColor??"#8090a0",o.fogNear??20,o.fogFar??150]}),o.grid&&c.jsx(od,{position:[0,0,0],args:[60,60],infiniteGrid:!0,cellSize:1,cellThickness:.6,cellColor:"#6b6b6b",sectionSize:5,sectionThickness:1,sectionColor:"#9a9a9a",fadeDistance:70,fadeStrength:1}),c.jsx("ambientLight",{intensity:t?.5:.18}),c.jsx("directionalLight",{position:[8,18,6],intensity:t?1.4:1.8,color:t?"#fff8e0":"#fffaf0"}),c.jsx("directionalLight",{position:[-6,4,-8],intensity:t?.6:.4,color:t?"#c0e8ff":"#c0ccff"})]})}function xh({level:o,markConfig:e,collection1Config:t,collection2Config:n,sceneConfig:i,layers:a,bindings:s,markLabelConfig:r,colLabelConfig:l,decorations:d,colorMode:p,colorGradient:u,colorTint:f,scatterSeed:A,datasetTitle:b,pathTracingActive:m,onSamplesUpdate:g,downloadRenderRef:x}){const h=oh(i.focalLength),y=wr[o];i.background;const[C,v]=F.useState({}),B=F.useCallback((M,E)=>{v(K=>{const I=K[M];return I&&I.x===E.x&&I.y===E.y&&I.z===E.z?K:{...K,[M]:E}})},[]),[T,S]=F.useState({}),R=F.useCallback((M,E)=>{S(K=>K[M]===E?K:{...K,[M]:E})},[]),D=F.useCallback(M=>{S(E=>{const K={...E};return delete K[M],K})},[]),w=F.useMemo(()=>({mode:i.sceneLabelOcclude??"off",occluders:Object.values(T).map(M=>({current:M}))}),[i.sceneLabelOcclude,T]);return c.jsxs(tn,{camera:{position:y,fov:h,near:.1,far:500},style:{width:"100%",height:"100%"},frameloop:m?"never":"always",gl:{antialias:!0,toneMapping:ui,toneMappingExposure:Er(i),preserveDrawingBuffer:!0},children:[c.jsx(nh,{level:o,fov:h,focalLength:i.focalLength}),c.jsx(gh,{config:i}),c.jsx(vi.Provider,{value:{aspects:C,report:B},children:c.jsx(un.Provider,{value:{colorMode:p,colorGradient:u,colorTint:f},children:c.jsx(ln.Provider,{value:w,children:c.jsxs(Zs,{gravity:[0,-9.81,0],timeStep:"vary",children:[o===1&&c.jsx(ah,{config:e,layers:a,bindings:s,markLabelConfig:r}),o===2&&c.jsx(uh,{markConfig:e,collection1Config:t,layers:a,bindings:s,markLabelConfig:r,colLabelConfig:l,scatterSeed:A,decorations:d}),o===3&&c.jsx(dh,{markConfig:e,collection1Config:t,collection2Config:n,layers:a,bindings:s,markLabelConfig:r,colLabelConfig:l,scatterSeed:A,decorations:d}),d.map(M=>c.jsx(fh,{config:M,onRegister:R,onUnregister:D},M.id)),b&&(i.sceneTitleShow??!0)&&c.jsx(fe,{zIndexRange:[1,0],position:[0,(i.sceneTitleBelow?-1:1)*(i.sceneTitleOffset??2.5),0],center:!0,occlude:cn(w),style:{pointerEvents:"none",whiteSpace:"nowrap"},children:c.jsx("span",{style:{fontSize:"16px",fontWeight:"600",color:"#ffffff"},children:b})})]})})})}),c.jsx(on,{makeDefault:!0,dampingFactor:.08,minDistance:1,maxDistance:400,target:[0,0,0]}),m&&g&&x&&c.jsx(ph,{onSamplesUpdate:g,downloadRenderRef:x})]})}const Ir=3,jr="collection2",kr={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},size:{x:10,y:10,z:10},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/apple.glb",customModelHasMat:!0,customModelName:"apple"},Pr={arrangement:"scattering",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},Ur={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"end",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Hr={background:"dark",hdriPreset:"city",focalLength:130},Gr={markColor:"categorical",markGeometry:null,scatterSize:"numerical",scatterCount:null,c1AlignCount:"numerical",c2AlignCount:"numerical",markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null},Or={show:!0,slots:{top:"categorical",bottom:null,left:null,right:null}},zr={show:!0,slots:{top:null,bottom:"categorical",left:null,right:null}},Lr=[],Nr=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],Jr="co2Emissions",Qr="distinct",Wr={from:"#EE6655",to:"#4488EE"},Vr=!1,Xr="data:image/jpeg;base64,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fhxuziuVjnx3qyl3VqUWTzNbnqvgG4Itrq4bb8zCNT1IwMn8DkflXWLeZ5zxXmngy926XKobkTkn/vlf8K6JNTOf61+cZ3OUsdU9f0PToL92jrFuQe9SC5965mK/B/iqwt9kcGvJ5ma2Nu5MN3bS2tygeGZGjkQn7ykYI/I18x6laNp+o3VlIwd7eZ4mZehKkjI/KvoL7cPWvA9enS51zUbiJg0ct1K6sOhBYkGvVyyTbkjOoijRRRXrGYUUUUAFFFFABVzTtUutPJFu42E5KMMgn/PpVOilKKkrMadtjc/4Sm/xjZBj6N/jVa417UplZftBjRv4Y/lx+PX9azKKzVGmndIbk2BJJyaKKK1JHwTSW8qSxHa6EFTgHB/Gr09xFdnzUAikPLx9s+q+3t2zWdRWlOrKm7xE1fctZYUb39TVYMw6Ej8aCxPUk12fXnbYj2aJzPtPHzH36V0vhbU59Rv7PSUtYPMlcIshk2KBjkn9ScdewJ4PJUAlTlSQfUVwYmTxCtM0h7mx6Hf+MNOnkeGKd/s0JEcO9D86qMBgB0zjODzzWDeeI4ZmWOOF9mfmdjjH0HNc1RXJHB0ou5rGtKLTXQ6bzejK2QRwQetPW6ZevNc9bXckHyj5k/un+lXU1CFvvbl+ozSlRaPbo4+nNauzN+PUkRGAV8kYyWyOv0rS0u+E0bjnKnNcZJqES52BnPbsKrx6ldRXInik2OBgAdMemKzlhnOLWxli8ZTdNwTvc9JW6ZDlTit7SdfjRDFfBWiIwVK5DV5rb+KYjH/pUDh/+meCD+Z4p8nii1Cny4ZmbsCAAfxzXE8HUvax5vNHud94h1u2v7S4tVAjtnjYMWUYXj73PTHWvJY44pZ2/fbYQSfMK84+nr7evenalrNzfgxsRHCT/q17/U96z1YqeK9rLL4RNS1TOaqlLY21kslsXjEIMh6OeSPx/CswnB4qMSjuD+FBlHYE17k8ZSkk1oYKnJbliNmf5etMOQajiuHikDDp0I9RVzEcy716GlTrqrs9QceXcrbjSh29al8lc9TT0jUMMLuJ6A1suchuJ0nhRLiGCaaQbY5NuMg5PXBz6dfr/Pd8+srw5rlvYt9hnmXzTweOGz/Dk9euCOh461clZd52/dzxmvmsxwrq15Svqd1FrkRbFywHDU9dQkXjOay5Z44kLySKijqzHArA1XxEAvl6cx3Z5lK8D6A/1rzFgajNXKKN3xJ4ia0sXijkxcyrhADyoPBb2749689p0kjyuXldnc9WY5JptelQoRoxsjCUrsKKKK3JCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKcjtGcoSDTaKabTugLC3bfxKD9OKRrtz90BfcdagorX6xVtbmJ5I9gJycnrUiXE0a7Y5pFX0ViBUdFYlASSck5JooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z",yh={level:Ir,activeElement:jr,markConfig:kr,col1Config:Pr,col2Config:Ur,sceneConfig:Hr,bindings:Gr,markLabelConfig:Or,colLabelConfig:zr,decorations:Lr,layers:Nr,activeDataset:Jr,colorMode:Qr,colorGradient:Wr,colorTint:Vr,thumbnail:Xr},bh=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:Jr,activeElement:jr,bindings:Gr,col1Config:Pr,col2Config:Ur,colLabelConfig:zr,colorGradient:Wr,colorMode:Qr,colorTint:Vr,decorations:Lr,default:yh,layers:Nr,level:Ir,markConfig:kr,markLabelConfig:Or,sceneConfig:Hr,thumbnail:Xr},Symbol.toStringTag,{value:"Module"})),Yr=2,Zr="scene",qr={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:1.8,y:1.8,z:1.8},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/stylized_cloud.glb",customModelHasMat:!0,customModelName:"stylized_cloud"},_r={arrangement:"scattering",color:"#5E5CE6",alignCount:12,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:6.5,z:3},scatterDensity:1,pilingCount:10,scatterOrientation:"static",scatterExclusionId:"dec_1784648799961",scatterBoundingVolume:"sphere",scatterEven:!0,scatterShowBounds:!1},$r={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},ea={background:"dark",hdriPreset:"sunset",focalLength:130,sceneLabelOcclude:"optimized",sceneTitleOffset:2,bgColor:"#00001e",exposure:1,envRotation:335,fog:!1,grid:!1,stars:!1,bgGradientTop:"#a6d2ff"},ta={markColor:"numerical",markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:"numerical"},oa={show:!0,slots:{top:"numerical",bottom:null,left:"categorical",right:null}},na={show:!0,slots:{top:null,bottom:null,left:null,right:null}},ia=[{id:"dec_1784648799961",shape:"custom",material:"original",color:"#888888",position:{x:0,y:-.6,z:0},size:{x:3.4,y:3.4,z:3.4},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/building_05.glb",customModelHasMat:!0,customModelName:"building_05",name:"Skyscraper"}],sa=[{id:"1",name:"Germany",percentage:572.32,color:"#E63946"},{id:"2",name:"Canada",percentage:533.34,color:"#F4A261"},{id:"3",name:"Turkey",percentage:513.03,color:"#E9C46A"},{id:"4",name:"Brazil",percentage:483.01,color:"#2A9D8F"},{id:"5",name:"South Africa",percentage:439.83,color:"#264653"},{id:"6",name:"Australia",percentage:386.73,color:"#E76F51"},{id:"7",name:"Vietnam",percentage:370.93,color:"#8AB17D"},{id:"8",name:"United Kingdom",percentage:312.91,color:"#457B9D"},{id:"9",name:"France",percentage:264.16,color:"#6A4C93"},{id:"10",name:"Qatar",percentage:125.81,color:"#B5838D"},{id:"11",name:"Greece",percentage:53.36,color:"#1D3557"},{id:"12",name:"Denmark",percentage:24.4,color:"#A8DADC"}],ra="co2Emissions",aa="continuous",la={from:"#ffffff",to:"#000000"},ca=!1,ua="data:image/jpeg;base64,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",Ch={level:Yr,activeElement:Zr,markConfig:qr,col1Config:_r,col2Config:$r,sceneConfig:ea,bindings:ta,markLabelConfig:oa,colLabelConfig:na,decorations:ia,layers:sa,activeDataset:ra,colorMode:aa,colorGradient:la,colorTint:ca,thumbnail:ua},vh=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:ra,activeElement:Zr,bindings:ta,col1Config:_r,col2Config:$r,colLabelConfig:na,colorGradient:la,colorMode:aa,colorTint:ca,decorations:ia,default:Ch,layers:sa,level:Yr,markConfig:qr,markLabelConfig:oa,sceneConfig:ea,thumbnail:ua},Symbol.toStringTag,{value:"Module"})),da=3,fa="mark",pa={shape:"box",material:"metal",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},ha={arrangement:"scattering",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"density",scatterCount:300,scatterDimensions:{x:10.5,y:4,z:10.5},scatterDensity:1,pilingCount:10},Aa={arrangement:"alignment",color:"#9D9BF4",alignCount:5,alignAxis:"Y",alignSpacing:.5,alignAnchor:"end",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},ma={background:"dark",hdriPreset:"city",focalLength:130,sceneTitleOffset:9.5,sceneTitleShow:!1},ga={markColor:null,markGeometry:null,scatterSize:"numerical",scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null},xa={show:!1,slots:{top:null,bottom:null,left:null,right:null}},ya={show:!0,slots:{top:null,bottom:null,left:"categorical",right:"numerical"}},ba=[],Ca=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],va="garbageInOcean",Ba="distinct",Fa={from:"#EE6655",to:"#4488EE"},Sa=!1,Ra="data:image/jpeg;base64,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",Bh={level:da,activeElement:fa,markConfig:pa,col1Config:ha,col2Config:Aa,sceneConfig:ma,bindings:ga,markLabelConfig:xa,colLabelConfig:ya,decorations:ba,layers:Ca,activeDataset:va,colorMode:Ba,colorGradient:Fa,colorTint:Sa,thumbnail:Ra},Fh=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:va,activeElement:fa,bindings:ga,col1Config:ha,col2Config:Aa,colLabelConfig:ya,colorGradient:Fa,colorMode:Ba,colorTint:Sa,decorations:ba,default:Bh,layers:Ca,level:da,markConfig:pa,markLabelConfig:xa,sceneConfig:ma,thumbnail:Ra},Symbol.toStringTag,{value:"Module"})),Ma=2,Ta="scene",wa={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:.5,y:.5,z:.5},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/fly_agaric_mushroom.glb",customModelHasMat:!0,customModelName:"fly_agaric_mushroom"},Da={arrangement:"surface",color:"#5E5CE6",alignCount:12,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10,surfaceTargetId:"dec_1784657033022"},Ka={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Ea={background:"dark",hdriPreset:"city",focalLength:130,sceneLabelOcclude:"optimized",sceneTitleBelow:!1,sceneTitleShow:!0,sceneTitleOffset:.6},Ia={markColor:"numerical",markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:"numerical"},ja={show:!0,slots:{top:"numerical",bottom:null,left:"categorical",right:null}},ka={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Pa=[{id:"dec_1784657033022",shape:"custom",material:"original",color:"#888888",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/log.glb",customModelHasMat:!0,customModelName:"log"}],Ua=[{id:"1",name:"Death cap (Amanita phalloides)",percentage:10,color:"#7C8C4E"},{id:"2",name:"Destroying angel (Amanita virosa)",percentage:10,color:"#F0ECE0"},{id:"3",name:"Funeral bell (Galerina marginata)",percentage:9,color:"#6B4E31"},{id:"4",name:"Deadly webcap (Cortinarius rubellus)",percentage:8,color:"#A0522D"},{id:"5",name:"False morel (Gyromitra esculenta)",percentage:6,color:"#8B4A2F"},{id:"6",name:"Panther cap (Amanita pantherina)",percentage:5,color:"#C2A878"},{id:"7",name:"Fly agaric (Amanita muscaria)",percentage:3,color:"#D62828"},{id:"8",name:"Satan's bolete (Rubroboletus satanas)",percentage:4,color:"#C77B7B"},{id:"9",name:"Jack-o'-lantern (Omphalotus olearius)",percentage:4,color:"#E68A00"},{id:"10",name:"Ivory funnel (Clitocybe dealbata)",percentage:7,color:"#E4DAC4"},{id:"11",name:"Fool's funnel (Clitocybe rivulosa)",percentage:7,color:"#CFC8B8"},{id:"12",name:"The sickener (Russula emetica)",percentage:2,color:"#E0455E"}],Ha="mushroomToxicity",Ga="continuous",Oa={from:"#ffffff",to:"#400080"},za=!0,La="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCADnAUADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxKiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACpbe2nuWK20MkrAZIjQsQPwrf8F6Rb6heGe9G+GJhiPIwzYzz7dPrXocaRQRxokMaJs+VY8KB+AHH0oN6dByV2eTNo2qKcNpt4MjPMDf4VBdWV3abftdrPBu+75sZXP517OjEks6sQBgsOQCenNAdHfazIEHJK55+nGaDT6su54jRXq2o+HNJv4mVrRIGPzLLHiNsevof1rhNZ8M32m3kcCD7SkpIjkjUjJHUEHp6/T8cBjOjKJiUV1Fn4SJVWvbnaT1SNf/AGY/4VJL4RhY/ubxkz0DqGz+WKrkZPJI5Oita/8ADuoWY3bFnTGd0J3Y/DrWTSaa3JaaCiiikIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDS0TVJNNn3I2ASCD6Gu7svEttKCzuu5+HI4BHXp6H9K8yqW1nMEyOdzIGBdA5XcAc4yKVjenXcVZnrkd9byguhjJGNobrj0xyP1p5mjBCg7ir8LFtI/76BzXB2z289t59hdXts0ahdkyhwW6/K6kEDGO3emXd7c2UW1tRtmcrnYqyFmHTqVwOnqOtFmdKrQ3PQPMijLh54Y9h439SSehyvPHtWXcXK3FyFjOY0XO0HJBJ7nAz0FcHJrc7R7QXHAGAQBx7Yq9oGqN5recSxbAxntVx3IlVjLRHVK+COcH6nAoDnsQecU0nIySMAcZ4phPcHoO9bbkFgPt5PJHTisfXdEi1FWuIQsVwB1HR/r/AI1fyBjacevHSlWQnAQnn06n8KN9CWrnnDo0bsjqVZTgg9QaSui8W2qboryJcbv3cn1xx+OAR+ArnawaszBqzsFFFFIQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFOjjaWRY4xl3IVR6k0AdLpaLDpMQKlWfLsD3yeD+QFYWpSeZePySF+UZ7Y6/rmusmiWNUjjJ2qAi+wH/6q4yaTzZpJMY3sWx9TVy0RpPRWGU+GRopA69RU1jp99qMjR6fZ3F06jcywRM5A9SAK1l8F+IRZNez6a9tbJ997l1iKj3ViG+nHPbNQQr9C1pet5VFnJOBgcDkj/PetgToyhghfJ7EDH1FcXcLHCixR/6xTkuOpP8AhWmbTXdL0+31G5sblLKdd8UxX5cE4BPpntnGeorZ3hozZS7nRZbaGC4GfvZNQvIobaSSe6hT0+uMVhRaxE22ScMXHBK4GfwzzUr62m07Ylctxy2MfgKd4juSa/Kg054nJEhZdq+gHc+9cvXodz8PtXu/C7amBtu1O9NPVPnMfcn/AG+c7fT3OK88rKTTehlPcKKKKkgKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAvaNpk2rXy2sLKgwWkkf7sajqxrtY9F0HToYR5H2q4BXLSkkyZAyQudqjnjIYgHnkVqeBPB2p/2UDJaNbSTuzSfagYydpwqEZ3Y75x6jvXa2vgOxhk82/aS6bceuVGMYAwD2ye9ZttnVFQhFdWzye98MwX6bdLtZYrn5mEaK77+/P9MAfxZ6VBZ+DdZ0xINV1Wx8m23AIkjjezMpI+UHIIxnBwa+hbPTbezQraW8cUZ52xxhAT68daoeIvD0PiHTJLK4mMJz5iSKcmNwCAcdxgnj36g8iotpmcrN3PFLdBeXkFrAZfNmkWNVdcck4GT+NewaV4Q8NaYB9i0e0DrJvDyr5rg+xfJHTsay/DHgdtDvBfXt6b24RSIRswkecjPJOSR68DJ69R1kb84IG8dj/+unOVx7k0oghRnkaKNI1LMznaoAGSSe3fmvEviT42GtT/AGOwGywibcpxgyHpuP64Hvz7enfEW1vdQ8G3tvpsZkuRscRKu5pFDAkLz14z3JxgDJr5+0fSNR1+/Wy0u2e4lIJIHAQdyzHgD3NbUeWPvPclM2/hv4dHiLxEpuULWVoPOnJGQ391DwRyex6gNX0PGikMCTnGRxmsfwf4Wg8J6ELGKZZpZH3zTbdvmMenrwBx19T3NbHmwr0kBI9+DWdR80rgnoZs3hXw+WLtoWlsxbLMbOM5PXPSiHRtFsSs9no1jbyIpXzILeNHAPH3sZ6VpSXS5wM7cbT6cVVnuI1ZgMgHqSf/AK9Q2CTGxRAy5ReTwc9cfjXjHxf8KppeoLrNmMW95IVnQEYjlxnjvhgCfqDzyBXsIuNpHHcc4wKwfH0MWoeEdVSR2wLcyqV4yyfOP1WpTKkro+d6KKK0MAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAOg8G6JDq+oPJqBK6farvnIcKX/uoCfU/5yRXb3t89wn2K2SG1sfnVbaD5UCnJIKjrnPfqT+FZ3ggL/YaRRFlDbpZdufmbcVHOeOAOv5evcJd6fB4bt4/EVrBHZKfLWdThomJwG5HU5ySM988VzyblI7FanFKO/U8L1SBLbUbmCIjZHKyrjsM9Kq16H4q+GeppLJqPh6QavYzbpT5e0SpyTjaPvcf3epz8o4rC8MaCs091JqtrIRbEx/ZpNyFpB94NghhtHbjkj3B3T0OWzctDma3tI8GeItYVXstKuDEyhlllAiRlPQgtgN+Ga9M8OXltpRRrfS7FZc7BIlsFfb3G4c+3JNd3pV3DqFuZosh14eMnkf/AFuvP/6qnn7F+yaV2eZ6H8HVJ3a7qvqDFZL+R3sPrxt/GvR9B8LaDobn+zNOhjlySJSpZxkcjexLAcdM4rRBDAbuvvU0TqMjACnnjt+dF2x8qWxKylcAHKnjGOMUMiH5oyu/uM9ahM/zABQAByP8KjR2UphuvtTFZkyuVcnAJ+n9KSeVWz5R4brxxVd5RtGQCAT0Jz1//XUKyqp3Andx0pXHYsbwuAqgjrg0by6855x19e1UJrhBvYsUC9Mjqe4/Q1DHeRyhiu4qOD25/wAKlSV7GjpytzWL63ZVSxXjqVbtTRcEgSAAjpgDtVD7TCjkyPuU/jn8M1XnusR7lkwGIGAeDge34U7iSNY3BJ3btygcHtVaa5xGc7lySCQw5rKXUUXfuyWcY4TOP0qubvhTuyB3HbHNJspRNVb1i7KpLEH+IdseuelMGoAO6SHDtHlSSB/h7VzzaharjdCc56lmH9aiS709W8xbSMkHjzMnI9OT0pJjcUad5rkMLNudQQpB6nv3rkvFviyCTR7u3WTe00ZQBSSORjv371py3VkHZRbWxPTKxrjH5VwPjXUkfy9MtkjjhjfzGREAAbBwOAOxP50LVik1GJy1FFFbHIFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBraFr1zo0haJFkUjG1j05B49ORSa7r97rkoa6ZUjU5SGPIVff61lUUuVXuW5yasz1X4YJq1hYwTW11JL9rkPk2Qb5VA6k5GQT14xxzzn5djWbmTVNXmMwMTjCsrAgqQAPqOe3Fcp4J8ZWtnbQ2V7b3EtwrBLcQBfmJAUDkjB6c+1dKsjSXM0kybGmdiFLbiRu9cnPXnv64rCV03c6YqP2SP7LG+AvysR973FSabfTaZfrJGT8vBXOA6ntU0qPlTkHPX0B9fTp/KqswLNsGN3TFTdo0ST0PRLe9jubdJYzujI6HqPrTxuPI4xz04rj/DGoCErDK21CDwVOQfw9P5E+ldcxIJ2urZGSwNaJ3MnGzHuzMMj5h1/WmXUyuQ6EEbcnnjP+RULS7iFGDx0I7VnvdNECIzyKdxcpeMjPsRRycDbux2/zzTL6O6gtJJWKqI1LcuD9OlY9zcGYYJKkDtwfXtWZOj+XsE00j/7chIJ7cZ5+lS2+hSjZq5qXd1tjdZSw4HGMgkHGCOxGGHbheOtVbu48p23HzCHKvtbeF6End3Y+ue3oRWVFqSXSLH5YNyuUeLbuKsAd33OSfunJ9x2JqK5u3nmO/yi5YlgoIBbn73fPDDBxzg9yTjqer7ttdjRnughP8RPfk/59KhnulQHy5A3ByBnjFYGo6zb2Z/0iZFOM4Jyx56461z934siywhWSTAwP4Qf6/pW9mzyXJLqdi9/hgxAwO2eKptfgvlu2OcZB9R1zXDXHiS7kyIkjjU9M/MR+P8A9aqE2p3sxBkuZOP7p2/yqlBkOqj2fwdFpOpNNDfxmWYn5fnKgL7Yweefyqr4n8Oy6VJ+5LtA/wDqpWPf+63v/n2ryTStVu9L1GO/tZSJlPJJzuHcGve/DetWXjPQDFKR5hG1lP3o3HQj/PP51pC0X7yuiVO7ueaaTqmlSasLLWLq4tYdrb5EUKQ3YZYYHrkg9Md6g8Q/D3UIXlvNAmGtWTNuBgO6dQSMbkHLHnquehJAq34n8GX93qGbWJVmV/LmLsFXA6Nk9fwycY4pPD3hvVdA1y0mOsWUcSTRtcRxXDjemQWGNo5xketKaVOTSZXsqk/sjvC/w/t7rTTd65JPHK+SlvEQrRrjOXyOpyCB24znOBw2qWg0/U7yyEglFvO8XmAYD7WIzjtnFe8+I9bbS7Ke6u79JUVQbbcFLEdxkDnnpwOv0x4Fd3D3d1Ncy48yaRpGx0yTk1nTk5N9hVIKMF3IqKKK1MAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKALekSrBqtlM7BVjuEYk9gGBr1i3dHiYhgu7glT3/AJfn6DivHK7nw3rXm2+HZmkRQsy9yOm4evbNZVI31OihJXaZ26MM4ZtyHHbv2/zxTZ4g8G9QFYHDA8Z96oRyMyhgQ5A6gcf5/wDr1MJFL7wcrIMcn/I6fy+lc7Z1xjqQy74ZlniLKcjoDweMGux028F1aq4kGQMtGwBIPOeh6cHGfSuXYeZBJu5ABwM/nT9IuHhcgsfLA+bHQHHBz6cdz3471UGTOJ1NxcogZUBKMM5Yj/PGayri4XzGwwK54J7iop7xRHt52sQCw6gVn3F7bWdvLLc3CKVwNzN0PHr+Va7mexoeeFhErZIBB2r6c9fy/WqN1LI7M6Ryu23eQqljj147VxWteOC/7rTlLKoAEkgwPy6nv1xW78P/ABXJJbJbXMu51Y+a5UZxnjGPwH4VSiZ86b0OX1fxJZPOJbOEySjH7zG1T7kHr0HBFdT8L9SGrXF4NSto55EK4dl3cNnqCcHkE9Ccsal+I/hD+0oG1nSYR9qRczxIAPNXklhgcvz+I98A8r8K7sW/ilYmdlE8LIo7FhhufwBpuKS0IdSb91vQy/HFimneLNStosBPN8xVCgBQ4D4AHYbsfhWHXTfEpt3jbUT6+V/6KSuZqlsZPcKKKKYgrsvh+Z9OuDqRuJYYX+RY4xkyn6exrja6ySeIweUFYxou1fmA+UHCkA9Txzjnj65io3ayOrCwi5Xl0OjvfEc12pcPD5pflWkdW54xkYHqSc/j1rKN5J8hF5K4jO6FmfaYicHdjJ4znIHOQM+lUGM0rvHLGzOqhMDAJ7g4OfQdOwA4zV1BFBEpuJBJtyVVVGFz1Occn3+npWcYN7HfOsluYHiC5nvdQ+zx+cwQACLk4PUgD2yR+frWZNZ3UCb5raaNem54yB+tdHLrkUf7q2AjUnk7QFHr0z/Kqza3OsmQwKg8MAcfrXSoJLc82oueTk2c/RV3UTBIfNhUK2cMFGAfQgdqpUmrGLVgooopCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAqS3nltpVlgco69CKjooA6fSvEyIgj1BWyvSVBnP1HGPwrYt/EFrcSIkdx5e4/LvwOfQ88VwKqWYKoJJOAB3r3zwboUPhLQlDxxnUZV33DkAEk87AeeB09D171nKCZ0QrTWhzkFzJIiSBkdQRhgwII7HP5intOsFymSNzKWUYwAOmcdu/61xPiLXRF4kv30sIts0nAAKc4G7O0gnnPXj04rGvdWvLxDHJJiMkkqufmPuTyfxNQqTTNJYhNbHYa54vt7dfJsMTyAfeB+Qfj369q4u/1C61CXzLqUt6L0C/QVVorZJI5pTctwqW1uZbSdZoGKuv6+xqKimQezeBvFaanCsErASrwynqKiuvCNvpHi63161eODTwxM0O12IZgVOwKpAXkdSAO3YV5hoGoR6bfG4kDZ8shGUkbW4weOv0Pr+NexeGNettb05g8wGxfnbft24568Y9aT1VjZWaTZynjnw22t3s2saLDfTvKq5iW3XYcAAnfvz0GMbTyPSuGvdC1ewg+0Xul3kEPeSSBlUc45JGBz/SvWINdv5PMjtQp+Z1ErySFfZtzHOPbH61T1rUre4ha31eUXEbN8+SVVivI+71GQOOf61mpS2aOhYRSTakeR0V0HiaCxZVnsbZYDkFxG+5SCOOOx46cdea5+tE7nJODg7MKu2N3Mn7lArKe7DoOnf8Az6VSqWNtkZxjLHrTtcINp6Gy+oJAP9HCl+c8YH6YrPmvJZ+DMRkcjoKpkk855pSc89D39KtOxo5Njg2fvfNxxk9KUHg4x070zFPLY+ZsUriuJKcKF9TmoqCcnJopN3Mm7sKKKKQgooooAKKKKACiiigAooooAKKKKACiiigAoopURpHVEUszEBQOpNACUVf1DRNT00M17ZTRopwXxuUH03DjPtUEdlcy2puo4i8QkEZKkE7j0GOv40robi07NHafCbw+NQ1V9WuVzbWJHlhhw8p6dRztHPqCVroPiV4o+xxmztnBuZAR1+4vr/n+la+lwxeCfAsYvdqThDJMAACZDzjg8kcLnPOBXi+q6hNqmoTXlwSXlbOM/dHYfgKNyvhRUooopkBRRRQAUUUUAFdX4ViWO0MssrxwSt+8wfvYPGOePc/SuZtYfPnVCcL1Y+grduLoHdBFHiJU2RK8nAAPJBzg859evepk+iOnDwi3zS2N2/8AEH7l7aw2xiNccHdn1wMenft69KxZrxm2Ayzsozujc469effn+VVDKzS7lBIZdrKfm9vz/kelVp7tYVKRcswwc8496lI6J1dNRmpXAYLAhyE6/wCfxqjQTk5PWitEcEpOTuwpR0xSUUEp2HYJA6U4DHPSo6KC+YeXAGBzTCSTkmiigltsKKKKBBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVPY3LWl1HOvVc/qMf1qCigabTujudL8U3FnCgZnnRmyy/L0784z3/AAx37b2mDRJZJjawxWtxJt3qrbVzjGRgkd+w5615dbXLQsufmQHO2tG2uCCslvKY2U7tyEhh6AelYuFtj0IV41FaaudN41nvpNN+z3l5NIhk3xvIRhsZyuc+4P4DgVwVdjHrW+JraeJJYHUBlnw7E9cce/I4Hoc1gazYQ27+fZSB7Z2wBnlT/PHBx39fe4vozCvRSXNDYzaKKKs5QooooAKKKKAHwymJiR3GD9KtrdxLGVw3OOAO4z/jVGilYuM3FWRPNdySE4JXPvmoKKKZLbe4UUUUCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAChSVOVJB9RRRQBYjvZUxznBzwcf56CkuLqScYY/Lndyc5P+c/nUFFKyK55NWuFFFFMkKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==",Sh={level:Ma,activeElement:Ta,markConfig:wa,col1Config:Da,col2Config:Ka,sceneConfig:Ea,bindings:Ia,markLabelConfig:ja,colLabelConfig:ka,decorations:Pa,layers:Ua,activeDataset:Ha,colorMode:Ga,colorGradient:Oa,colorTint:za,thumbnail:La},Rh=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:Ha,activeElement:Ta,bindings:Ia,col1Config:Da,col2Config:Ka,colLabelConfig:ka,colorGradient:Oa,colorMode:Ga,colorTint:za,decorations:Pa,default:Sh,layers:Ua,level:Ma,markConfig:wa,markLabelConfig:ja,sceneConfig:Ea,thumbnail:La},Symbol.toStringTag,{value:"Module"})),Na=3,Ja="scene",Qa={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},scale:6,size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},categoryShapes:{Strings:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/stradivari_violin.glb",customModelHasMat:!0,customModelName:"stradivari_violin"},Brass:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/trumpet.glb",customModelHasMat:!0,customModelName:"trumpet"},Woodwinds:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/clarinet_model_with_annotations.glb",customModelHasMat:!0,customModelName:"clarinet_model_with_annotations"},Percussion:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/drum.glb",customModelHasMat:!0,customModelName:"drum"},"Piano & Harp":{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/harp.glb",customModelHasMat:!0,customModelName:"harp"}}},Wa={arrangement:"scattering",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10,scatterEven:!0},Va={arrangement:"alignment",color:"#9D9BF4",alignCount:5,alignAxis:"X",alignSpacing:.5,alignAnchor:"end",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Xa={background:"dark",hdriPreset:"city",focalLength:130,sceneTitleOffset:9.5},Ya={markColor:null,markGeometry:"categorical",scatterSize:"numerical",scatterCount:"numerical",c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null},Za={show:!1,slots:{top:null,bottom:null,left:null,right:null}},qa={show:!0,slots:{top:"numerical",bottom:"categorical",left:null,right:null}},_a=[],$a=[{id:"1",name:"Strings",percentage:80,color:"#C8A882"},{id:"2",name:"Brass",percentage:28,color:"#D4A017"},{id:"3",name:"Woodwinds",percentage:20,color:"#4A7C59"},{id:"4",name:"Percussion",percentage:10,color:"#5C6B7A"},{id:"5",name:"Piano & Harp",percentage:4,color:"#8B7BAB"}],el="mahler",tl="distinct",ol={from:"#EE6655",to:"#4488EE"},nl=!1,il="data:image/jpeg;base64,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",Mh={level:Na,activeElement:Ja,markConfig:Qa,col1Config:Wa,col2Config:Va,sceneConfig:Xa,bindings:Ya,markLabelConfig:Za,colLabelConfig:qa,decorations:_a,layers:$a,activeDataset:el,colorMode:tl,colorGradient:ol,colorTint:nl,thumbnail:il},Th=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:el,activeElement:Ja,bindings:Ya,col1Config:Wa,col2Config:Va,colLabelConfig:qa,colorGradient:ol,colorMode:tl,colorTint:nl,decorations:_a,default:Mh,layers:$a,level:Na,markConfig:Qa,markLabelConfig:Za,sceneConfig:Xa,thumbnail:il},Symbol.toStringTag,{value:"Module"})),sl=2,rl="scene",al={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/flowers.glb",customModelHasMat:!0,customModelName:"flowers"},ll={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:.9,alignAnchor:"end",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1},cl={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1},ul={background:"dark",hdriPreset:"dawn",focalLength:130},dl={markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:"numerical",markSizeZ:null,markScale:null},fl={show:!0,slots:{top:"numerical",bottom:"categorical",left:null,right:null}},pl={show:!1,slots:{top:null,bottom:null,left:null,right:null}},hl=[{id:"dec_1781047628256",shape:"box",material:"metal",color:"#24271d",position:{x:0,y:-.05,z:0},size:{x:8,y:.1,z:6.6},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}}],Al=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],ml="co2Emissions",gl="distinct",xl={from:"#EE6655",to:"#4488EE"},yl=!1,bl="data:image/jpeg;base64,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FopKKAHIzIwZSQR0IpzzSyY81gwHTAxUdLUuKbuMWikopiFzS02loAWpDPKTkyMeMDJ/P+lRUtTKKluO4tFJRVCFopM0UgHUjFyoCtge4z/ntRRSlFSVmMXNFJS09gFopKKBC02VDJDJGDt3qRn0PY06jNJq6sxiIGGdxB54wCAPzJp1JRSUVFWQDqKSimIWmuiyAh1BBUqcjOQeo+lLS0NXApx6bElw8+9yznLDPH5f59OnFXFUKMKMUUVEacYfChi0tJRVgLRSUUALS02loEU80Vwn/C1NC/59NR/79x//ABdH/C1NC/59NS/79x//ABdHPHuB3dLXB/8AC1NC/wCfTUv+/cf/AMXS/wDC1NC/59NS/wC/cf8A8XRzx7gd3RXCf8LU0L/n01L/AL9x/wDxdH/C1dC/59NS/wC/cf8A8XRzx7gd5RXB/wDC1dC/59NS/wC/cf8A8XR/wtXQv+fTUv8Av3H/APF0c8e4HeUVwf8AwtXQv+fTUv8Av3H/APF0v/C1dC/59NS/79x//F0c8e4HeUVwf/C1dC/59NS/79x//F0f8LV0L/n01L/v3H/8XRzx7gd7RXBf8LW0L/n01L/v3H/8XS/8LW0L/n01L/v3H/8AF0c8e4HeUVwf/C1tC/59NS/79R//ABdH/C1tC/59NS/79x//ABdLnj3A72iuC/4WtoX/AD6al/37j/8Ai6P+FraF/wA+mpf9+o//AIujnj3A72jNcF/wtbQv+fTUv+/Uf/xdH/C19C/59NS/79R//F0c8e4HfUVwX/C19B/59NS/79R//F0f8LX0L/n01L/v1H/8XRzx7gd7S1wP/C19B/59NS/79R//ABdH/C19B/59NS/79R//ABdHPHuB31FcD/wtfQf+fTUv+/Uf/wAXR/wtfQf+fTUv+/Uf/wAXRzx7gd9miuC/4WxoP/PpqX/fqP8A+Lo/4WxoP/PpqX/fqP8A+Lo549wO+orgf+FsaD/z6al/36j/APi6P+FsaD/z6al/36j/APi6XPHuB31FcD/wtjQf+fTUv+/Uf/xdH/C2NB/59NS/79R//F0c8e4Hf0VwH/C2NB/59NS/79R//F0v/C2dB/59NS/79R//ABdHPHuB39FcB/wtnQf+fTU/+/Uf/wAXR/wtnQf+fTUv+/Uf/wAXRzx7gd/RXAf8LZ0H/n01P/v1H/8AF0f8LZ0H/n01P/v1H/8AF0c8e4HoFFcB/wALZ0H/AJ9NT/79R/8AxdH/AAtnQP8An01P/v1H/wDF0c8e4HjG2jbTqK5yRu2jbTqKAG7aNtOooAbto206igBu2jbTqKAG7aNtOooAbto206igBu2jbTqKAG7aNtOooAbto206igBu2jbTqKAG7aNtOooAbto206igBu2jbTqKAG7aNtOooAbto206igBu2jbTqKAG7aNtOooAbto206igBu2jbTqKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==",wh={level:sl,activeElement:rl,markConfig:al,col1Config:ll,col2Config:cl,sceneConfig:ul,bindings:dl,markLabelConfig:fl,colLabelConfig:pl,decorations:hl,layers:Al,activeDataset:ml,colorMode:gl,colorGradient:xl,colorTint:yl,thumbnail:bl},Dh=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:ml,activeElement:rl,bindings:dl,col1Config:ll,col2Config:cl,colLabelConfig:pl,colorGradient:xl,colorMode:gl,colorTint:yl,decorations:hl,default:wh,layers:Al,level:sl,markConfig:al,markLabelConfig:fl,sceneConfig:ul,thumbnail:bl},Symbol.toStringTag,{value:"Module"})),Cl=2,vl="mark",Bl={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/cigarette.glb",customModelHasMat:!0,customModelName:"cigarette"},Fl={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:.5,alignAnchor:"end",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1},Sl={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1},Rl={background:"dark",hdriPreset:"city",focalLength:130},Ml={markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:"numerical",c2AlignCount:null,markSizeX:null,markSizeY:"numerical",markSizeZ:null,markScale:null},Tl={show:!0,slots:{top:"numerical",bottom:"categorical",left:null,right:null}},wl={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Dl=[],Kl=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],El="garbageInOcean",Il="distinct",jl={from:"#EE6655",to:"#4488EE"},kl=!1,Pl="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCADnAUADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxKiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACitq18L6pcwCSOOMMyhljZ8FgenPQZ54JB4NZd5azWVzJbXMZjmjOGUkHH4jrQNpohooooEFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAddbazbSLMtzNMFL/L1bjk5wRgnrz1x+VY3iO++33cMm8PshCEhcfxMfQevv8AlgDpLHSXW0mAgj84kngfNg8YyPqa5jX7SazvVjnXaxTcBnPG4/4UramkptxsZtFFFMzCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPUrVQJ3OMqxwCuAf05rkPHRLapbsSTm2B5z/ff1rtLdWkOGHHHAOffpXGePY/K1a3UHP+jL2xj5mpsZzdFFFIQV0vhh7SOBRNaQzTST8M7YOABgZ6qOpyPx7VzVb2j6cJxbO0kqK0ZbcpAwdzADn6UMqDs7l3xNFYnTUZbSOC4Uja0UQjBUnocE5PU888fWuUrotcsngjuOJWROCzE4BDAHNc7SQ52voFFFFMgKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA9XsJF3HLMCQck5wOCO/Fcd8QM/21Dlgx+zLyCP7zeldbYJIgJUKfm6dOM+oNcn8QcjWLcHH/HqvQ5/iamxnMUUUUhBXe+G0ZtFsSvP38jJHR2964Ku+8Lljo1ooU4AYZ/4G3saaAm8WBhoF2AOAEJOB/fHHSvO69G8VKP8AhG7tgzcrHwSD/Gvoa85pAFFFFABRV7RtO/tO88gzpAoUszsM46AfqR1wK25fCcC28zJqsfnRrkRFBhuCeWzgdO2frSuUoSexy1FFFMkKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPU9OUOHEoyw67QDz+HNcl8QFC6xBgnBtlIznj5m9a7KzJMTA5AJx15/IiuP+ICbNStgAQPIAGf8AeNNjOXooopCCu68KSqml2wYD+L0/vH/GuFrufCaB9NtucEb+5/vH3poDV8Y4bwzdsGOAE45/vqK8xr0nxSu3wvehs5BQDjH8a+1ebUgCiiigC5pqyu8whkKHy+QByw3LwP0/Kukube/t7RRJdB93zKqwqcjjI6e/T/Gs3waM6jOO/wBnOP8Avpa7m2QqkQlVN4IXHGOvuDQ0XGTR5RRRRQQFFFAGTigAorr08PaEVRvt12wGBJgDOe/GDt9uW+vc87q9lFYXflQXSXMZUMHVSv4EevHqfzyAropwkldlKiiimSFFFFABRRRQAUUUUAFFFFAB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",Kh={level:Cl,activeElement:vl,markConfig:Bl,col1Config:Fl,col2Config:Sl,sceneConfig:Rl,bindings:Ml,markLabelConfig:Tl,colLabelConfig:wl,decorations:Dl,layers:Kl,activeDataset:El,colorMode:Il,colorGradient:jl,colorTint:kl,thumbnail:Pl},Eh=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:El,activeElement:vl,bindings:Ml,col1Config:Fl,col2Config:Sl,colLabelConfig:wl,colorGradient:jl,colorMode:Il,colorTint:kl,decorations:Dl,default:Kh,layers:Kl,level:Cl,markConfig:Bl,markLabelConfig:Tl,sceneConfig:Rl,thumbnail:Pl},Symbol.toStringTag,{value:"Module"})),Ih=Object.assign({"./presets/Apple_Scene.json":bh,"./presets/C02_Emissions.json":vh,"./presets/Garbage in the Ocean.json":Fh,"./presets/Mushroom_Danger_Score.json":Rh,"./presets/Orchestra.json":Th,"./presets/flowers.json":Dh,"./presets/smoking.json":Eh}),Pn=Object.entries(Ih).map(([o,e])=>{const t=o.replace(/^.*\//,"").replace(/\.json$/,""),n=t.replace(/_/g," ").replace(/\b\w/g,i=>i.toUpperCase());return{id:`preset_${t}`,name:n,createdAt:"",data:e.default}});function Ul(o=320){const e=document.querySelector("canvas");if(e)try{const t=e.width||o,n=e.height||o,i=Math.min(1,o/t),a=Math.max(1,Math.round(t*i)),s=Math.max(1,Math.round(n*i)),r=document.createElement("canvas");r.width=a,r.height=s;const l=r.getContext("2d");return l?(l.drawImage(e,0,0,a,s),r.toDataURL("image/jpeg",.72)):void 0}catch{return}}function jh(o,e){const t={...e,thumbnail:Ul()??e.thumbnail},n=JSON.stringify(t,null,2),i=new Blob([n],{type:"application/json"}),a=URL.createObjectURL(i),s=document.createElement("a");s.href=a,s.download=o.trim().replace(/\s+/g,"_")+".json",s.click(),URL.revokeObjectURL(a)}const qo={padding:"8px 16px",borderRadius:"8px",fontSize:"13px",fontWeight:"500",cursor:"pointer",fontFamily:"inherit",border:"none",transition:"opacity 0.1s"};function Hl({onClose:o,children:e}){return c.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999},onClick:o,children:c.jsx("div",{style:{background:"#fff",borderRadius:"14px",width:"340px",maxWidth:"90vw",boxShadow:"0 16px 48px rgba(0,0,0,0.28)",overflow:"hidden",fontFamily:"inherit"},onClick:t=>t.stopPropagation(),children:e})})}function kh({initialName:o,onSave:e,onClose:t}){const[n,i]=F.useState(o);function a(){const s=n.trim();s&&e(s)}return c.jsx(Hl,{onClose:t,children:c.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"14px"},children:[c.jsx("div",{style:{fontSize:"15px",fontWeight:"700",color:"#1D1D1F"},children:"Save Scene"}),c.jsx("input",{type:"text",value:n,onChange:s=>i(s.target.value),onKeyDown:s=>{s.key==="Enter"&&a(),s.key==="Escape"&&t()},placeholder:"Scene name…",autoFocus:!0,style:{background:"#F2F2F7",border:"1.5px solid #D1D1D6",borderRadius:"8px",padding:"9px 12px",fontSize:"13px",color:"#1D1D1F",outline:"none",fontFamily:"inherit",width:"100%",boxSizing:"border-box"}}),c.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[c.jsx("button",{onClick:t,style:{...qo,background:"#F2F2F7",color:"#6C6C70"},children:"Cancel"}),c.jsx("button",{onClick:a,disabled:!n.trim(),style:{...qo,background:"#007AFF",color:"#fff",opacity:n.trim()?1:.4},children:"Save"})]})]})})}function Ph({children:o}){return c.jsx("div",{style:{padding:"8px 20px 4px",fontSize:"10px",fontWeight:"700",letterSpacing:"0.08em",textTransform:"uppercase",color:"#AEAEB2"},children:o})}function Uh({onLoad:o,onClose:e,currentName:t,currentData:n}){const[i,a]=F.useState(null);function s(r,l){var p;const d=(p=r.data)==null?void 0:p.thumbnail;return c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"11px",padding:"10px 20px",cursor:"pointer",background:i===r.id?"#F8F8FA":"transparent",borderBottom:l?"none":"1px solid #F2F2F7",transition:"background 0.08s"},onClick:()=>o(r),onMouseEnter:()=>a(r.id),onMouseLeave:()=>a(null),children:[c.jsx("div",{style:{width:"62px",height:"44px",flexShrink:0,borderRadius:"6px",overflow:"hidden",background:"#F2F2F7",border:"1px solid #E5E5EA",display:"flex",alignItems:"center",justifyContent:"center"},children:d?c.jsx("img",{src:d,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):c.jsx("span",{style:{fontSize:"15px",color:"#C7C7CC"},children:"▦"})}),c.jsxs("div",{style:{flex:1,minWidth:0},children:[c.jsx("div",{style:{fontSize:"13px",fontWeight:"600",color:"#1D1D1F",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.name}),r.createdAt&&c.jsx("div",{style:{fontSize:"10px",color:"#8E8E93",marginTop:"2px"},children:new Date(r.createdAt).toLocaleString()})]})]},r.id)}return c.jsx(Hl,{onClose:e,children:c.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[c.jsx("div",{style:{padding:"16px 20px",borderBottom:"1px solid #E5E5EA",fontSize:"15px",fontWeight:"700",color:"#1D1D1F"},children:"Load Scene"}),c.jsx("div",{style:{maxHeight:"380px",overflowY:"auto"},children:Pn.length>0?c.jsxs(c.Fragment,{children:[c.jsx(Ph,{children:"Presets"}),Pn.map((r,l)=>s(r,l===Pn.length-1))]}):c.jsx("div",{style:{padding:"36px 20px",textAlign:"center",color:"#8E8E93",fontSize:"13px"},children:"No scenes yet"})}),c.jsxs("div",{style:{padding:"12px 20px",borderTop:"1px solid #E5E5EA",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsx("button",{onClick:()=>jh(t,n),title:"Export current scene as JSON",style:{...qo,background:"#F2F2F7",color:"#007AFF",padding:"7px 12px"},children:"Export scene"}),c.jsx("button",{onClick:e,style:{...qo,background:"#F2F2F7",color:"#6C6C70"},children:"Close"})]})]})})}const Gl="phys_tool_saves";function Hh(){try{return JSON.parse(localStorage.getItem(Gl)??"[]")}catch{return[]}}function Ss(o){localStorage.setItem(Gl,JSON.stringify(o))}const Gh="/phys_tool/assets/references/";function Oh(o){return/^(https?:)?\/\//.test(o)||o.startsWith("/")?o:Gh+o}const eo={garbageInOcean:{label:"Garbage in the Ocean",categoricalCol:"Garbage Type",numericalCol:"Weight",layers:[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}]},mahler:{label:"Mahler's Symphony No. 8 Orchestra",categoricalCol:"Orchestra Section",numericalCol:"Number of Instruments",layers:[{id:"1",name:"Strings",percentage:80,color:"#C8A882"},{id:"2",name:"Brass",percentage:28,color:"#D4A017"},{id:"3",name:"Woodwinds",percentage:20,color:"#4A7C59"},{id:"4",name:"Percussion",percentage:10,color:"#5C6B7A"},{id:"5",name:"Piano & Harp",percentage:4,color:"#8B7BAB"}],reference:{title:"Mahler's Symphony No. 8 Orchestra",image:"malher.png",link:"https://www.mahlerfoundation.org/mahler/compositions/symphony-no-8/symphony-no-8-orchestration/"}},co2Emissions:{label:"CO₂ Emissions by Country",categoricalCol:"Country",numericalCol:"CO₂ Emissions (Mt)",layers:[{id:"1",name:"Germany",percentage:572.32,color:"#E63946"},{id:"2",name:"Canada",percentage:533.34,color:"#F4A261"},{id:"3",name:"Turkey",percentage:513.03,color:"#E9C46A"},{id:"4",name:"Brazil",percentage:483.01,color:"#2A9D8F"},{id:"5",name:"South Africa",percentage:439.83,color:"#264653"},{id:"6",name:"Australia",percentage:386.73,color:"#E76F51"},{id:"7",name:"Vietnam",percentage:370.93,color:"#8AB17D"},{id:"8",name:"United Kingdom",percentage:312.91,color:"#457B9D"},{id:"9",name:"France",percentage:264.16,color:"#6A4C93"},{id:"10",name:"Qatar",percentage:125.81,color:"#B5838D"},{id:"11",name:"Greece",percentage:53.36,color:"#1D3557"},{id:"12",name:"Denmark",percentage:24.4,color:"#A8DADC"}],reference:{title:"Annual CO₂ emissions 2024",image:"co2-emissions.png",link:"https://ourworldindata.org/grapher/annual-co2-emissions-per-country?country=~OWID_WRL&tab=map&time=latest"}},mushroomToxicity:{label:"Mushroom danger score",categoricalCol:"Name",numericalCol:"Danger Score",layers:[{id:"1",name:"Death cap (Amanita phalloides)",percentage:10,color:"#7C8C4E"},{id:"2",name:"Destroying angel (Amanita virosa)",percentage:10,color:"#F0ECE0"},{id:"3",name:"Funeral bell (Galerina marginata)",percentage:9,color:"#6B4E31"},{id:"4",name:"Deadly webcap (Cortinarius rubellus)",percentage:8,color:"#A0522D"},{id:"5",name:"False morel (Gyromitra esculenta)",percentage:6,color:"#8B4A2F"},{id:"6",name:"Panther cap (Amanita pantherina)",percentage:5,color:"#C2A878"},{id:"7",name:"Fly agaric (Amanita muscaria)",percentage:3,color:"#D62828"},{id:"8",name:"Satan's bolete (Rubroboletus satanas)",percentage:4,color:"#C77B7B"},{id:"9",name:"Jack-o'-lantern (Omphalotus olearius)",percentage:4,color:"#E68A00"},{id:"10",name:"Ivory funnel (Clitocybe dealbata)",percentage:7,color:"#E4DAC4"},{id:"11",name:"Fool's funnel (Clitocybe rivulosa)",percentage:7,color:"#CFC8B8"},{id:"12",name:"The sickener (Russula emetica)",percentage:2,color:"#E0455E"}],reference:{title:"Mushroom Danger Score",image:"mushroom-danger.png",link:"https://namyco.org/interests/toxicology/mushroom-poisoning-syndromes/"}}};function zh({src:o,alt:e}){const[t,n]=F.useState(!0);return F.useEffect(()=>{n(!0)},[o]),t?c.jsx("img",{src:o,alt:e,onError:()=>n(!1),style:{width:"100%",borderRadius:"8px",display:"block",background:"#F2F2F7",border:"1px solid #E5E5EA"}}):null}function Lh({datasetKey:o}){var t;const e=(t=eo[o])==null?void 0:t.reference;return e?c.jsxs("div",{style:{borderTop:"1px solid #E5E5EA",padding:"14px",flexShrink:0,maxHeight:"46%",overflowY:"auto",display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600"},children:"About this dataset"}),c.jsx("div",{style:{fontSize:"13px",fontWeight:"600",color:"#1D1D1F",lineHeight:1.3},children:e.title}),e.image&&c.jsx(zh,{src:Oh(e.image),alt:e.title}),e.link&&c.jsxs("a",{href:e.link,target:"_blank",rel:"noreferrer",style:{fontSize:"11px",color:"#007AFF",textDecoration:"none",wordBreak:"break-all",lineHeight:1.5},children:[e.link," ↗"]})]}):null}function Nh({label:o,type:e,varName:t}){const n=`phys-var/${e}`;return c.jsxs("div",{draggable:!0,onDragStart:i=>{i.dataTransfer.setData("phys-var/name",t),i.dataTransfer.setData(n,"1"),i.dataTransfer.effectAllowed="copy"},title:`Drag to bind ${o}`,style:{display:"inline-flex",alignItems:"center",gap:"5px",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"6px 10px",fontSize:"11px",color:"#1D1D1F",fontWeight:"600",cursor:"grab",userSelect:"none",whiteSpace:"nowrap"},children:[c.jsx("span",{style:{fontSize:"10px",color:"#8E8E93",fontWeight:"700"},children:e==="numerical"?"#":"Aa"}),o]})}function Jh({layers:o,onChange:e,onDatasetChange:t,selectedDataset:n="garbageInOcean"}){function i(r){e(eo[r].layers),t==null||t(r)}const a=eo[n]??eo.garbageInOcean,s={padding:"6px 8px",verticalAlign:"middle",fontSize:"12px",color:"#1D1D1F"};return c.jsxs("div",{style:{padding:"14px 14px 16px",display:"flex",flexDirection:"column",gap:"12px"},children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[c.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600"},children:"Dataset"}),c.jsx("select",{value:n,onChange:r=>i(r.target.value),style:{background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",fontFamily:"inherit",cursor:"pointer",outline:"none",width:"100%"},children:Object.entries(eo).map(([r,l])=>c.jsx("option",{value:r,children:l.label},r))})]}),c.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[c.jsx("thead",{children:c.jsxs("tr",{style:{borderBottom:"1px solid #E5E5EA"},children:[c.jsx("th",{style:{...s,textAlign:"left",color:"#8E8E93",fontWeight:"500",fontSize:"11px"},children:a.categoricalCol}),c.jsx("th",{style:{...s,textAlign:"right",color:"#8E8E93",fontWeight:"500",fontSize:"11px",width:"60px"},children:a.numericalCol})]})}),c.jsx("tbody",{children:o.map((r,l)=>c.jsxs("tr",{style:{borderBottom:"1px solid #F2F2F7",background:l%2===0?"transparent":"#FAFAFA"},children:[c.jsx("td",{style:s,children:r.name}),c.jsx("td",{style:{...s,textAlign:"right",color:"#6C6C70"},children:r.percentage})]},r.id))})]})]})}const Un=110,Rs=46;function Ms(o,e,t,n){return Array.from({length:o},(i,a)=>{const r=(o===1?e:e-t/2+t/(o-1)*a)*Math.PI/180;return{x:Math.cos(r)*n,y:Math.sin(r)*n}})}const Ts={position:"fixed",background:"#fff",borderRadius:"14px",boxShadow:"0 6px 28px rgba(0,0,0,0.22)",padding:"12px 14px",zIndex:1002,pointerEvents:"all",minWidth:"150px"},Hn={display:"flex",alignItems:"center",gap:"8px",width:"100%",textAlign:"left",background:"#F2F2F7",border:"1px solid #E5E5EA",borderRadius:"8px",padding:"8px 12px",fontSize:"12px",fontWeight:"500",color:"#1D1D1F",cursor:"pointer",fontFamily:"inherit",transition:"background 0.12s"};function ws({children:o}){return c.jsx("div",{style:{fontSize:"10px",color:"#AEAEB2",fontWeight:"700",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"8px"},children:o})}function Qh({x:o,y:e,varName:t,varType:n,level:i,col1Arrangement:a,onBind:s,onColorBind:r,onBindLabel:l,onClose:d}){const[p,u]=F.useState("radial"),[f,A]=F.useState("mark");F.useEffect(()=>{function S(R){R.key==="Escape"&&(p!=="radial"?u("radial"):d())}return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[p,d]);const b=[{action:"bind",bindKey:"markColor",label:"Color",icon:"●",section:"mark",varTypes:["numerical","categorical"]},{action:"bind",bindKey:"markGeometry",label:"Geometry",icon:"◆",section:"mark",varTypes:["categorical"]},{action:"bind",bindKey:"markSizeX",label:"Width",icon:"↔",section:"mark",varTypes:["numerical"]},{action:"bind",bindKey:"markSizeY",label:"Height",icon:"↕",section:"mark",varTypes:["numerical"]},{action:"bind",bindKey:"markSizeZ",label:"Depth",icon:"⊙",section:"mark",varTypes:["numerical"]},{action:"bind",bindKey:"markScale",label:"Scale",icon:"⤢",section:"mark",varTypes:["numerical"]},{action:"label",label:"Label",icon:"Aa",section:"mark",varTypes:["numerical","categorical"]},{action:"bind",bindKey:"scatterSize",label:"Scatter - Size",icon:"⊞",section:"collection",varTypes:["numerical"],arrangements:["scattering"],minLevel:2},{action:"bind",bindKey:"scatterCount",label:"Scatter - Population",icon:"#",section:"collection",varTypes:["numerical"],arrangements:["scattering"],minLevel:2},{action:"label",label:"Label",icon:"Aa",section:"collection",varTypes:["numerical","categorical"],minLevel:2}];function m(S){var R;return!(!S.varTypes.includes(n)||S.minLevel!==void 0&&i<S.minLevel||"arrangements"in S&&S.arrangements!==void 0&&!S.arrangements.includes(a)||"excludeArrangements"in S&&((R=S.excludeArrangements)!=null&&R.includes(a)))}const g=b.filter(S=>S.section==="mark"&&m(S)),x=b.filter(S=>S.section==="collection"&&m(S)),h=g.length>3?150:90,y=Ms(g.length,180,h,Un),C=Ms(x.length,0,70,Un),v=[...g.map((S,R)=>({opt:S,pos:y[R]})),...x.map((S,R)=>({opt:S,pos:C[R]}))];function B(S){if(S.action==="bind"&&S.bindKey==="markColor"){A("mark"),u("colorMode");return}if(S.action==="label"){A(S.section),u("labelPos");return}S.action==="bind"&&s(S.bindKey,t),d()}const T=x.length>0;if(p==="colorMode")return c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3},onClick:()=>u("radial")}),c.jsxs("div",{style:{...Ts,left:o-75,top:e-70},children:[c.jsx(ws,{children:"Color mode"}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[c.jsxs("button",{style:Hn,onClick:()=>{r(t,"distinct"),d()},onMouseEnter:S=>S.currentTarget.style.background="#E5E5EA",onMouseLeave:S=>S.currentTarget.style.background="#F2F2F7",children:[c.jsx("span",{style:{fontSize:"14px"},children:"◈"})," Distinct"]}),c.jsxs("button",{style:Hn,onClick:()=>{r(t,"continuous"),d()},onMouseEnter:S=>S.currentTarget.style.background="#E5E5EA",onMouseLeave:S=>S.currentTarget.style.background="#F2F2F7",children:[c.jsx("span",{style:{fontSize:"14px"},children:"▬"})," Continuous"]})]})]})]});if(p==="labelPos"){const S={...Hn,justifyContent:"center",width:"88px",height:"34px",padding:"0 8px",whiteSpace:"nowrap",flexShrink:0},R=(M,E,K)=>c.jsxs("button",{style:S,onClick:()=>{l(f,t,M),d()},onMouseEnter:I=>I.currentTarget.style.background="#E5E5EA",onMouseLeave:I=>I.currentTarget.style.background="#F2F2F7",children:[E," ",K]},M),D=f==="mark"&&a==="scattering",w=f==="mark"&&a==="surface";return c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3},onClick:()=>u("radial")}),c.jsxs("div",{style:{...Ts,left:o-100,top:e-110},children:[c.jsx(ws,{children:"Label position"}),c.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:w?R("top","↑","Above"):D?c.jsxs(c.Fragment,{children:[R("top","↑","Top"),R("bottom","↓","Below")]}):c.jsxs(c.Fragment,{children:[R("top","↑","Top"),c.jsxs("div",{style:{display:"flex",gap:"4px"},children:[R("left","←","Left"),R("right","→","Right")]}),R("bottom","↓","Bottom")]})})]})]})}return c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3},onClick:d}),c.jsxs("div",{style:{position:"fixed",left:o,top:e,transform:"translate(-50%, -50%)",width:0,height:0,zIndex:1001,pointerEvents:"none"},children:[T&&c.jsx("div",{style:{position:"absolute",left:0,top:-130,width:"1px",height:(Un+20)*2,background:"#E5E5EA",transform:"translateX(-50%)"}}),c.jsx("div",{style:{position:"absolute",left:-8,top:-10,fontSize:"9px",fontWeight:"700",letterSpacing:"0.12em",textTransform:"uppercase",color:"#007AFF",whiteSpace:"nowrap",textAlign:"right",transform:"translateX(-100%)"},children:"Mark"}),T&&c.jsx("div",{style:{position:"absolute",left:8,top:-10,fontSize:"9px",fontWeight:"700",letterSpacing:"0.12em",textTransform:"uppercase",color:"#5E5CE6",whiteSpace:"nowrap"},children:"Collection"}),c.jsx("div",{style:{position:"absolute",width:10,height:10,background:"#1D1D1F",borderRadius:"50%",transform:"translate(-50%, -50%)"}}),v.map(({opt:S,pos:R},D)=>{const w=S.section==="collection",M=w?"#5E5CE6":"#007AFF";return c.jsxs("button",{onClick:()=>B(S),style:{position:"absolute",left:R.x,top:R.y,transform:"translate(-50%, -50%)",width:Rs,height:Rs,background:"#fff",border:`2px solid ${M}`,borderRadius:"50%",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1px",boxShadow:"0 4px 16px rgba(0,0,0,0.16)",pointerEvents:"all",fontFamily:"inherit"},onMouseEnter:E=>{const K=E.currentTarget;K.style.transform="translate(-50%, -50%) scale(1.13)",K.style.boxShadow="0 6px 20px rgba(0,0,0,0.22)",K.style.background=w?"#F3EBFF":"#EBF3FF"},onMouseLeave:E=>{const K=E.currentTarget;K.style.transform="translate(-50%, -50%)",K.style.boxShadow="0 4px 16px rgba(0,0,0,0.16)",K.style.background="#fff"},children:[c.jsx("span",{style:{fontSize:"14px",color:M,lineHeight:1},children:S.icon}),c.jsx("span",{style:{fontSize:"8px",color:"#6C6C70",fontWeight:"600",lineHeight:1.2,textAlign:"center"},children:S.label})]},D)})]})]})}const Wh={markColor:"Color",markGeometry:"Geometry",scatterSize:"Scatter - Size",scatterCount:"Scatter - Population",c1AlignCount:"Count",c2AlignCount:"Count",markSizeX:"Width",markSizeY:"Height",markSizeZ:"Depth",markScale:"Scale"},Ds={markColor:"",markGeometry:"",markSizeX:"",markSizeY:"",markSizeZ:"",markScale:"",scatterSize:"",scatterCount:"",c1AlignCount:"Lv2",c2AlignCount:"Lv3"},Ks={garbageInOcean:{numerical:"Weight",categorical:"Garbage Type"},mahler:{numerical:"Number of Instruments",categorical:"Orchestra Section"},co2Emissions:{numerical:"CO₂ Emissions (Mt)",categorical:"Country"},mushroomToxicity:{numerical:"Danger Score",categorical:"Name"}},Vh={garbageInOcean:"Garbage in the Ocean",mahler:"Mahler's Symphony No. 8 Orchestra",co2Emissions:"CO₂ Emissions by Country",mushroomToxicity:"Mushroom danger score"},Es=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],Is={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},js={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},ks={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Ps={background:"dark",hdriPreset:"city",focalLength:130},Oo={show:!1,slots:{top:null,bottom:null,left:null,right:null}};function Xh(){const[o,e]=F.useState(1),[t,n]=F.useState("mark"),[i,a]=F.useState(Es),[s,r]=F.useState(Is),[l,d]=F.useState(js),[p,u]=F.useState(ks),[f,A]=F.useState(Ps),[b,m]=F.useState("garbageInOcean"),g=Ks[b]??Ks.garbageInOcean,x=[{label:g.numerical,type:"numerical",varName:"numerical"},{label:g.categorical,type:"categorical",varName:"categorical"}],[h,y]=F.useState({markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null}),[C,v]=F.useState(Oo),[B,T]=F.useState(Oo),[S,R]=F.useState("distinct"),[D,w]=F.useState({from:"#EE6655",to:"#4488EE"}),[M,E]=F.useState(!1),[K,I]=F.useState(void 0),[k,P]=F.useState(0),[G,z]=F.useState([]),[_,V]=F.useState(null),[ne,L]=F.useState(!1),[ee,ye]=F.useState(null),[Qe,Ot]=F.useState(null),[ve,Ue]=F.useState(null),[mt,lt]=F.useState("none"),[gt,Fi]=F.useState(!1),[We,Si]=F.useState(0),Ao=F.useRef(null);function mo(U,H){y(W=>{const se={...W,[U]:H};return H!==null&&(U==="markSizeX"||U==="markSizeY"||U==="markSizeZ")&&(U!=="markSizeX"&&(se.markSizeX=null),U!=="markSizeY"&&(se.markSizeY=null),U!=="markSizeZ"&&(se.markSizeZ=null)),se}),U==="markGeometry"&&H!==null&&(n("mark"),I("Geometry")),U==="markGeometry"&&H===null&&r(W=>({...W,categoryShapes:void 0})),H!==null&&d(W=>({...W,alignCount:i.length})),U==="scatterSize"&&H!==null&&u(W=>({...W,alignCount:i.length}))}function Ol(U,H){R(H),mo("markColor",U),H==="continuous"&&(n("mark"),I("Material"))}function zl(U,H,W){const se=U==="mark"&&l.arrangement==="scattering",He=U==="mark"&&l.arrangement==="surface",Y=te=>te.top==null?"top":te.left==null?"left":te.right==null?"right":te.bottom==null?"bottom":"top",O=te=>{let oe=W;return He?oe=Y(te.slots):se&&W==="top"?oe=te.slots.top==null?"top":te.slots.left==null?"left":"top":se&&W==="bottom"&&(oe=te.slots.bottom==null?"bottom":te.slots.right==null?"right":"bottom"),{...te,show:!0,slots:{...te.slots,[oe]:H}}};U==="mark"?v(O):T(O)}function Ll(){const U=`dec_${Date.now()}`,H={id:U,shape:"sphere",material:"plastic",color:"#888888",position:{x:0,y:-1.5,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}};z(W=>[...W,H]),V(U)}function Nl(U){z(H=>H.filter(W=>W.id!==U)),V(H=>H===U?null:H)}function Jl(U){z(H=>H.map(W=>W.id===U.id?U:W))}function Ql(U,H){z(W=>W.map(se=>se.id===U?{...se,name:H}:se))}function Ri(){return{level:o,activeElement:t,markConfig:s,col1Config:l,col2Config:p,sceneConfig:f,bindings:h,markLabelConfig:C,colLabelConfig:B,decorations:G,layers:i,activeDataset:b,colorMode:S,colorGradient:D,colorTint:M}}function Mi(U){const H=Hh(),W={...Ri(),thumbnail:Ul()};if(Qe){const Y=H.findIndex(O=>O.id===Qe);if(Y>=0){H[Y]={...H[Y],name:U,data:W},Ss(H),Ue(U),lt("none");return}}const se=`save_${Date.now()}`,He={id:se,name:U,createdAt:new Date().toISOString(),data:W};Ss([...H,He]),Ot(se),Ue(U),lt("none")}function Wl(){Qe&&ve?Mi(ve):lt("save")}function Vl(U){const H=U.data;H.level!=null&&e(H.level),H.activeElement!=null&&n(H.activeElement);const W=pn(H.markConfig??Is);if(W.categoryShapes){const oe={};for(const[Zl,ql]of Object.entries(W.categoryShapes))oe[Zl]=pn(ql);r({...W,categoryShapes:oe})}else r(W);d(H.col1Config??js),u(H.col2Config??ks);const se=H.sceneConfig??Ps,He=se.sceneLabelOcclude;A({...se,sceneLabelOcclude:typeof He=="boolean"?He?"optimized":"off":He});const Y=oe=>oe==="garbageType"||oe==="section"?"categorical":oe==="weight"||oe==="count"?"numerical":oe,O=H.bindings??{};y({markColor:Y(O.markColor??null),markGeometry:Y(O.markGeometry??null),scatterSize:Y(O.scatterSize??null),scatterCount:Y(O.scatterCount??null),c1AlignCount:Y(O.c1AlignCount??null),c2AlignCount:Y(O.c2AlignCount??null),markSizeX:Y(O.markSizeX??null),markSizeY:Y(O.markSizeY??null),markSizeZ:Y(O.markSizeZ??null),markScale:Y(O.markScale??null)});const te=oe=>({...oe,slots:{top:Y(oe.slots.top),bottom:Y(oe.slots.bottom),left:Y(oe.slots.left),right:Y(oe.slots.right)}});v(H.markLabelConfig?te(H.markLabelConfig):Oo),T(H.colLabelConfig?te(H.colLabelConfig):Oo),z((H.decorations??[]).map(oe=>pn(oe))),a(H.layers??Es),H.activeDataset!=null&&m(H.activeDataset),R(H.colorMode??"distinct"),w(H.colorGradient??{from:"#EE6655",to:"#4488EE"}),E(H.colorTint??!1),Ot(U.id),Ue(U.name),V(null),lt("none")}function Xl(){o===1&&(e(2),n("collection1")),o===2&&(e(3),n("collection2"))}function Yl(){o===3&&(e(2),n("collection1")),o===2&&(e(1),n("mark"))}return c.jsxs("div",{style:{display:"flex",width:"100vw",height:"100vh",background:"#F2F2F7",overflow:"hidden"},children:[c.jsxs("div",{style:{width:"260px",flexShrink:0,borderRight:"1px solid #E5E5EA",background:"#FFFFFF",display:"flex",flexDirection:"column",overflow:"hidden"},children:[c.jsxs("div",{style:{display:"flex",gap:"6px",padding:"8px 10px",borderBottom:"1px solid #E5E5EA",flexShrink:0,flexDirection:"column"},children:[c.jsxs("div",{style:{display:"flex",gap:"6px"},children:[c.jsx("button",{onClick:Wl,title:ve?`Save to "${ve}"`:"Save scene",style:{flex:1,background:"#F2F2F7",color:"#1D1D1F",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"6px 8px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:ve||"Save"}),c.jsx("button",{onClick:()=>lt("load"),style:{flex:1,background:"#F2F2F7",color:"#1D1D1F",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"6px 8px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit"},children:"Load"})]}),c.jsx("button",{onClick:()=>{Fi(!0),Si(0)},disabled:gt,style:{background:"#F2F2F7",color:gt?"#AEAEB2":"#1D1D1F",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"7px 8px",fontSize:"12px",fontWeight:"600",cursor:gt?"default":"pointer",fontFamily:"inherit",width:"100%"},children:gt?"Rendering...":"Render"})]}),c.jsx("div",{style:{flex:1,overflowY:"auto",minHeight:0},children:c.jsx(nu,{level:o,activeElement:t,onSelectElement:U=>{n(U),V(null)},onAdvanceLevel:Xl,onDowngradeLevel:Yl,decorations:G,activeDecorationId:_,onSelectDecoration:V,onAddDecoration:Ll,onRemoveDecoration:Nl,onRenameDecoration:Ql})}),c.jsx(Lh,{datasetKey:b})]}),c.jsxs("div",{style:{flex:1,position:"relative",zIndex:0},onDragOver:U=>U.preventDefault(),onDrop:U=>{U.preventDefault();const H=U.dataTransfer.getData("phys-var/name");if(!H)return;const W=U.dataTransfer.types.includes("phys-var/numerical")?"numerical":"categorical";ye({x:U.clientX,y:U.clientY,varName:H,varType:W})},children:[c.jsx(xh,{level:o,markConfig:s,collection1Config:l,collection2Config:p,sceneConfig:f,layers:i,bindings:h,markLabelConfig:C,colLabelConfig:B,decorations:G,colorMode:S,colorGradient:D,colorTint:M,scatterSeed:k,datasetTitle:Vh[b],pathTracingActive:gt,onSamplesUpdate:Si,downloadRenderRef:Ao}),gt&&c.jsxs("div",{style:{position:"absolute",top:"16px",right:"16px",background:"rgba(10,10,10,0.82)",backdropFilter:"blur(14px)",borderRadius:"14px",padding:"18px 20px",color:"#fff",display:"flex",flexDirection:"column",gap:"14px",width:"200px",fontFamily:"inherit",zIndex:10,boxShadow:"0 8px 32px rgba(0,0,0,0.4)"},children:[c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:"10px",fontWeight:"700",letterSpacing:"0.1em",textTransform:"uppercase",opacity:.45,marginBottom:"8px"},children:"Path Tracing"}),c.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"5px"},children:[c.jsx("span",{style:{fontSize:"32px",fontWeight:"700",letterSpacing:"-0.02em",lineHeight:1},children:We}),c.jsx("span",{style:{fontSize:"11px",opacity:.35},children:"spp"})]})]}),c.jsx("div",{style:{background:"rgba(255,255,255,0.1)",borderRadius:"3px",height:"3px"},children:c.jsx("div",{style:{width:`${Math.min(100,We/256*100)}%`,height:"100%",background:"#4FC3F7",borderRadius:"3px",transition:"width 0.4s"}})}),c.jsx("div",{style:{fontSize:"11px",opacity:.4,marginTop:"-8px"},children:We===0?"Building scene BVH…":We>=256?"Converged":`${256-We} samples to 256`}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsx("button",{onClick:()=>{var U;return(U=Ao.current)==null?void 0:U.call(Ao)},disabled:We===0,style:{background:We>0?"#4FC3F7":"rgba(255,255,255,0.08)",color:"#fff",border:"none",borderRadius:"8px",padding:"9px",fontSize:"12px",fontWeight:"600",cursor:We>0?"pointer":"default",fontFamily:"inherit"},children:"Download PNG"}),c.jsx("button",{onClick:()=>Fi(!1),style:{background:"rgba(255,255,255,0.08)",color:"#fff",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"9px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit"},children:"Stop"})]})]})]}),c.jsxs("div",{style:{width:"260px",flexShrink:0,borderLeft:"1px solid #E5E5EA",background:"#FFFFFF",display:"flex",flexDirection:"column"},children:[c.jsx("div",{style:{flex:1,overflowY:"auto",minHeight:0},children:c.jsx(fu,{activeElement:t,compositionLevel:o,layers:i,markConfig:s,onMarkChange:r,collection1Config:l,onCollection1Change:d,collection2Config:p,onCollection2Change:u,sceneConfig:f,onSceneChange:A,bindings:h,onBind:mo,markLabelConfig:C,onMarkLabelChange:v,colLabelConfig:B,onColLabelChange:T,activeDecorationId:_,decorations:G,onDecorationChange:Jl,colorMode:S,colorGradient:D,onColorGradientChange:w,colorTint:M,onColorTintChange:E,markOpenSection:K,onReseed:()=>P(U=>U+1)})}),c.jsxs("div",{style:{borderTop:"1px solid #E5E5EA",padding:"14px 14px 16px",flexShrink:0,maxHeight:"42%",overflowY:"auto"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[c.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600"},children:"Data"}),c.jsx("button",{onClick:()=>L(!0),style:{background:"none",border:"1px solid #D1D1D6",borderRadius:"6px",padding:"3px 8px",fontSize:"11px",color:"#6C6C70",cursor:"pointer",fontFamily:"inherit"},children:"Open Data"})]}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:x.map(U=>{const H=Object.keys(h).filter(O=>h[O]===U.varName),W=l.arrangement==="scattering",se=l.arrangement==="surface",He=O=>se?"Above":W?O==="top"||O==="left"?"Top":"Below":O[0].toUpperCase()+O.slice(1),Y=[];return["top","bottom","left","right"].forEach(O=>{C.slots[O]===U.varName&&Y.push({key:`mark-${O}`,label:`Label ${He(O)}`,onRemove:()=>v(te=>({...te,slots:{...te.slots,[O]:null}}))}),B.slots[O]===U.varName&&Y.push({key:`col-${O}`,label:`Label ${O[0].toUpperCase()+O.slice(1)}`,onRemove:()=>T(te=>({...te,slots:{...te.slots,[O]:null}}))})}),c.jsxs("div",{children:[c.jsx(Nh,{label:U.label,type:U.type,varName:U.varName}),(H.length>0||Y.length>0)&&c.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"6px"},children:[H.map(O=>c.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"3px",background:"#EBF3FF",border:"1px solid #A8CAFF",borderRadius:"5px",padding:"3px 5px 3px 8px",fontSize:"10px",color:"#007AFF",fontWeight:"600"},children:[Ds[O]&&c.jsx("span",{style:{color:"#60A0EE",marginRight:"2px",fontWeight:"500"},children:Ds[O]}),Wh[O],c.jsx("button",{onClick:()=>mo(O,null),style:{background:"none",border:"none",cursor:"pointer",color:"#60A0EE",padding:"0 1px",fontSize:"13px",lineHeight:1,fontFamily:"inherit"},children:"×"})]},O)),Y.map(O=>c.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"3px",background:"#EBF3FF",border:"1px solid #A8CAFF",borderRadius:"5px",padding:"3px 5px 3px 8px",fontSize:"10px",color:"#007AFF",fontWeight:"600"},children:[O.label,c.jsx("button",{onClick:O.onRemove,style:{background:"none",border:"none",cursor:"pointer",color:"#60A0EE",padding:"0 1px",fontSize:"13px",lineHeight:1,fontFamily:"inherit"},children:"×"})]},O.key))]})]},U.varName)})})]})]}),mt==="save"&&c.jsx(kh,{initialName:ve??"",onSave:Mi,onClose:()=>lt("none")}),ne&&c.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999},onClick:()=>L(!1),children:c.jsxs("div",{style:{background:"#fff",borderRadius:"14px",width:"340px",maxWidth:"90vw",maxHeight:"80vh",display:"flex",flexDirection:"column",boxShadow:"0 16px 48px rgba(0,0,0,0.28)",overflow:"hidden",fontFamily:"inherit"},onClick:U=>U.stopPropagation(),children:[c.jsxs("div",{style:{padding:"14px 20px",borderBottom:"1px solid #E5E5EA",fontSize:"15px",fontWeight:"700",color:"#1D1D1F",flexShrink:0,display:"flex",justifyContent:"space-between",alignItems:"center"},children:["Data Panel",c.jsx("button",{onClick:()=>L(!1),style:{background:"none",border:"none",fontSize:"18px",color:"#AEAEB2",cursor:"pointer",lineHeight:1,padding:"0 2px"},children:"×"})]}),c.jsx("div",{style:{overflowY:"auto",flex:1},children:c.jsx(Jh,{layers:i,onChange:a,onDatasetChange:m,selectedDataset:b})})]})}),mt==="load"&&c.jsx(Uh,{onLoad:Vl,onClose:()=>lt("none"),currentName:ve??"scene",currentData:Ri()}),ee&&c.jsx(Qh,{x:ee.x,y:ee.y,varName:ee.varName,varType:ee.varType,level:o,col1Arrangement:l.arrangement,onBind:mo,onColorBind:Ol,onBindLabel:zl,onClose:()=>ye(null)})]})}const Gn="https://massager-unshaved-chasing.ngrok-free.dev";function Yh(){const o=Wc();return F.useEffect(()=>{o.refresh().fit()},[o]),null}function Zh({url:o}){const e=uo(fi,o),t=F.useRef([]),n=F.useRef(0);return F.useEffect(()=>{const i=[];if(e.scene.updateWorldMatrix(!0,!0),e.scene.traverse(s=>{s.isMesh&&i.push(s)}),!i.length)return;const a=new j;i.forEach(s=>{const r=new j;s.getWorldPosition(r),a.add(r)}),a.divideScalar(i.length),t.current=i.map(s=>{const r=new j;s.getWorldPosition(r);const l=r.clone().sub(a);return l.length()<.001&&l.set(Math.random()-.5,Math.random()-.5,Math.random()-.5),l.normalize(),{mesh:s,origPos:r.clone(),direction:l}}),n.current=0},[e]),fo((i,a)=>{n.current+=a;const s=(Math.sin(n.current*1-Math.PI/2)+1)/2;t.current.forEach(({mesh:r,origPos:l,direction:d})=>{r.position.copy(l).addScaledVector(d,s*1.5)})}),c.jsxs(Qc,{fit:!0,clip:!0,observe:!0,margin:1.4,children:[c.jsx(Yh,{}),c.jsx("primitive",{object:e.scene})]})}function qh({data:o,center:e,impulse:t}){const n=F.useRef(null);return F.useEffect(()=>{if(!n.current)return;const i=o.position.clone().sub(e);i.length()<.001&&i.set(Math.random()-.5,.5,Math.random()-.5),i.normalize().multiplyScalar(t),n.current.applyImpulse({x:i.x,y:i.y+t*.3,z:i.z},!0),n.current.applyTorqueImpulse({x:(Math.random()-.5)*t*.3,y:(Math.random()-.5)*t*.3,z:(Math.random()-.5)*t*.3},!0)},[]),c.jsx(Vo,{ref:n,position:o.position.toArray(),quaternion:[o.quaternion.x,o.quaternion.y,o.quaternion.z,o.quaternion.w],colliders:"hull",restitution:.3,friction:.8,linearDamping:.1,angularDamping:.15,children:c.jsx("mesh",{geometry:o.geometry,material:o.material})})}function _h({url:o,impulse:e}){const t=uo(fi,o),{fragments:n,center:i}=F.useMemo(()=>{const a=[];t.scene.updateWorldMatrix(!0,!0),t.scene.traverse(r=>{if(!r.isMesh)return;const l=r,d=new j,p=new Ut;l.getWorldPosition(d),l.getWorldQuaternion(p),a.push({geometry:l.geometry,material:l.material,position:d,quaternion:p})});const s=new j;return a.forEach(r=>s.add(r.position)),a.length&&s.divideScalar(a.length),{fragments:a,center:s}},[t]);return c.jsxs(c.Fragment,{children:[c.jsx(Vo,{type:"fixed",position:[0,-3,0],children:c.jsx(Ys,{args:[15,.1,15]})}),c.jsxs("mesh",{position:[0,-3,0],rotation:[-Math.PI/2,0,0],children:[c.jsx("planeGeometry",{args:[30,30]}),c.jsx("meshStandardMaterial",{color:"#1a1a1a",roughness:.9})]}),n.map((a,s)=>c.jsx(qh,{data:a,center:i,impulse:e},s))]})}function Ge({label:o,children:e}){return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[c.jsx("div",{style:{fontSize:11,color:"#888"},children:o}),e]})}function Us({active:o,onClick:e,children:t}){return c.jsx("button",{onClick:e,style:{flex:1,padding:"8px 0",fontSize:12,fontWeight:600,background:o?"#5E5CE6":"#1a1a1a",color:o?"#fff":"#666",border:o?"none":"1px solid #333",borderRadius:6,cursor:"pointer"},children:t})}function $h(){const[o,e]=F.useState(null),[t,n]=F.useState("idle"),[i,a]=F.useState(""),[s,r]=F.useState("exploded"),[l,d]=F.useState(0),[p,u]=F.useState(""),[f,A]=F.useState(8),[b,m]=F.useState(.5),[g,x]=F.useState("random"),[h,y]=F.useState("bisect"),[C,v]=F.useState(30),[B,T]=F.useState(0),[S,R]=F.useState(1.5),D=F.useRef(null),w=F.useCallback(P=>{if(!P.name.endsWith(".glb")&&!P.name.endsWith(".gltf")){a("Please upload a .glb or .gltf file");return}D.current=P,u(P.name),e(null),n("idle"),a("")},[]),M=F.useCallback(P=>{P.preventDefault();const G=P.dataTransfer.files[0];G&&w(G)},[w]),E=F.useCallback(P=>{var z;const G=(z=P.target.files)==null?void 0:z[0];G&&w(G)},[w]),K=F.useCallback(async P=>{if(P==="model"&&!D.current){a("Drop a GLB first");return}n("loading"),a("Blender is running…"),o&&URL.revokeObjectURL(o),e(null);try{let G;const z=`pieces=${f}&cutSpread=${b}&cutStrategy=${g}&adaptivity=${B}&fractureMethod=${h}`;if(P==="sphere")G=await hn(`${Gn}/shatter/sphere?${z}`);else if(P==="cube")G=await hn(`${Gn}/shatter/cube?${z}`);else{const V=new FormData;V.append("model",D.current),V.append("pieces",f.toString()),V.append("cutSpread",b.toString()),V.append("cutStrategy",g),V.append("fractureMethod",h),V.append("voxelDiv",C.toString()),V.append("adaptivity",B.toString()),G=await hn(`${Gn}/shatter`,{method:"POST",body:V})}if(!G.ok){const V=await G.json().catch(()=>({error:G.statusText}));throw new Error(V.error??G.statusText)}const _=await G.blob();e(URL.createObjectURL(_)),n("done"),a("")}catch(G){n("error"),a(G instanceof Error?G.message:"Unknown error")}},[f,b,C,o]);F.useEffect(()=>()=>{o&&URL.revokeObjectURL(o)},[o]);const I={width:"100%",accentColor:"#5E5CE6"},k=t==="loading";return c.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0f0f0f",color:"#e0e0e0"},children:[c.jsxs("div",{style:{width:260,padding:20,display:"flex",flexDirection:"column",gap:16,borderRight:"1px solid #222",overflowY:"auto"},children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[c.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Shatter Lab"}),c.jsxs("div",{style:{display:"flex",gap:12},children:[c.jsx("a",{href:"/deform",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Deform"}),c.jsx("a",{href:"/particles",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Particles"}),c.jsx("a",{href:"/fluid",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Fluid"})]})]}),c.jsx(Ge,{label:"View Mode",children:c.jsxs("div",{style:{display:"flex",gap:6},children:[c.jsx(Us,{active:s==="exploded",onClick:()=>r("exploded"),children:"Exploded"}),c.jsx(Us,{active:s==="physics",onClick:()=>r("physics"),children:"Physics"})]})}),c.jsxs(Ge,{label:"Model (GLB)",children:[c.jsx("div",{onDrop:M,onDragOver:P=>P.preventDefault(),onClick:()=>document.getElementById("glb-input").click(),style:{border:"2px dashed #333",borderRadius:8,padding:"14px 10px",textAlign:"center",cursor:"pointer",fontSize:12,color:"#555"},children:p||"Drop GLB or click to browse"}),c.jsx("input",{id:"glb-input",type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:E})]}),c.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[c.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Fragment"}),c.jsxs(Ge,{label:"Fracture Method",children:[c.jsx("div",{style:{display:"flex",gap:6},children:["bisect","voronoi"].map(P=>c.jsx("button",{onClick:()=>y(P),style:{flex:1,padding:"6px 0",fontSize:11,borderRadius:5,background:h===P?"#2a2a4a":"#1a1a1a",color:h===P?"#9999ff":"#555",border:h===P?"1px solid #5E5CE6":"1px solid #2a2a2a",cursor:"pointer",textTransform:"capitalize"},children:P},P))}),c.jsx("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:h==="voronoi"?"Natural crack patterns. Slower — best ≤ 50 pieces.":"Sequential plane cuts. Fast. Good for large counts."})]}),c.jsx(Ge,{label:`Pieces: ${f}`,children:c.jsx("input",{type:"range",min:2,max:500,step:1,value:f,onChange:P=>A(Number(P.target.value)),style:I})}),c.jsxs(Ge,{label:`Size Variation: ${b.toFixed(2)}`,children:[c.jsx("input",{type:"range",min:.05,max:1,step:.05,value:b,onChange:P=>m(Number(P.target.value)),style:I}),c.jsxs("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:["0 = equal-sized pieces (cuts through centre)",c.jsx("br",{}),"1 = uneven pieces (cuts placed randomly)"]})]}),c.jsxs(Ge,{label:"Cut Strategy",children:[c.jsx("div",{style:{display:"flex",gap:6},children:["random","largest"].map(P=>c.jsx("button",{onClick:()=>x(P),style:{flex:1,padding:"6px 0",fontSize:11,borderRadius:5,background:g===P?"#2a2a4a":"#1a1a1a",color:g===P?"#9999ff":"#555",border:g===P?"1px solid #5E5CE6":"1px solid #2a2a2a",cursor:"pointer"},children:P==="random"?"Random":"Largest First"},P))}),c.jsx("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:"Largest First → more uniform sizes"})]})]}),c.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[c.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Remesh — file uploads only"}),c.jsxs(Ge,{label:`Voxel Detail: ${C}`,children:[c.jsx("input",{type:"range",min:10,max:60,step:5,value:C,onChange:P=>v(Number(P.target.value)),style:I}),c.jsx("div",{style:{fontSize:10,color:"#444"},children:"Higher = sharper cuts, slower"})]}),c.jsxs(Ge,{label:`Adaptivity: ${B.toFixed(2)}`,children:[c.jsx("input",{type:"range",min:0,max:1,step:.05,value:B,onChange:P=>T(Number(P.target.value)),style:I}),c.jsx("div",{style:{fontSize:10,color:"#444"},children:"Reduces polygons in flat areas"})]})]}),s==="physics"&&c.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[c.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Physics"}),c.jsxs(Ge,{label:`Impulse: ${S.toFixed(1)}`,children:[c.jsx("input",{type:"range",min:0,max:5,step:.1,value:S,onChange:P=>R(Number(P.target.value)),style:I}),c.jsx("div",{style:{fontSize:10,color:"#444"},children:"How hard pieces fly apart on start"})]})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[c.jsx("button",{onClick:()=>K("model"),disabled:k,style:{background:k?"#222":"#5E5CE6",color:k?"#555":"#fff",border:"none",borderRadius:8,padding:"11px 0",fontSize:13,fontWeight:600,cursor:k?"wait":"pointer"},children:k?"Running…":"⚡ Shatter Model"}),c.jsxs("div",{style:{display:"flex",gap:8},children:[c.jsx("button",{onClick:()=>K("sphere"),disabled:k,style:{flex:1,background:"#1a1a1a",color:k?"#444":"#aaa",border:"1px solid #2a2a2a",borderRadius:8,padding:"9px 0",fontSize:12,cursor:k?"wait":"pointer"},children:"🔵 Sphere"}),c.jsx("button",{onClick:()=>K("cube"),disabled:k,style:{flex:1,background:"#1a1a1a",color:k?"#444":"#aaa",border:"1px solid #2a2a2a",borderRadius:8,padding:"9px 0",fontSize:12,cursor:k?"wait":"pointer"},children:"◻ Cube"})]}),s==="physics"&&o&&c.jsx("button",{onClick:()=>d(P=>P+1),style:{background:"#1a1a2e",color:"#5E5CE6",border:"1px solid #5E5CE6",borderRadius:8,padding:"9px 0",fontSize:12,cursor:"pointer"},children:"↺ Restart Simulation"})]}),(i||k)&&c.jsx("div",{style:{fontSize:12,padding:10,borderRadius:6,lineHeight:1.5,background:t==="error"?"#2a0f0f":"#111",color:t==="error"?"#ff6b6b":"#666"},children:k?"Blender is running… (10–30 s)":i})]}),c.jsx("div",{style:{flex:1},children:o?c.jsxs(tn,{camera:{position:[0,1,5],fov:50},style:{background:"#111"},children:[c.jsx("ambientLight",{intensity:.5}),c.jsx("directionalLight",{position:[5,8,5],intensity:1.2,castShadow:!0}),c.jsx(di,{preset:"city"}),s==="exploded"&&c.jsx(F.Suspense,{fallback:null,children:c.jsx(Zh,{url:o})}),s==="physics"&&c.jsx(Zs,{gravity:[0,-9.81,0],timeStep:"vary",children:c.jsx(F.Suspense,{fallback:null,children:c.jsx(_h,{url:o,impulse:S})})},l),c.jsx(on,{})]}):c.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#2a2a2a",fontSize:13},children:k?c.jsxs("div",{style:{textAlign:"center",color:"#444"},children:[c.jsx("div",{style:{fontSize:28,marginBottom:10},children:"⏳"}),"Blender is fracturing…"]}):c.jsxs("div",{style:{textAlign:"center"},children:[c.jsx("div",{style:{fontSize:28,marginBottom:10},children:"💥"}),"Choose a shape and hit Shatter"]})})})]})}const On={Flag:{pinMode:"flag",gravity:2,windX:.5,windZ:5,windTurb:3,damping:.99,constraintIters:8},Curtain:{pinMode:"curtain",gravity:3,windX:0,windZ:2,windTurb:2,damping:.99,constraintIters:8},Sheet:{pinMode:"sheet",gravity:2.5,windX:.5,windZ:2.5,windTurb:2.5,damping:.99,constraintIters:8},Still:{pinMode:"curtain",gravity:4,windX:0,windZ:0,windTurb:0,damping:.995,constraintIters:12},Hammock:{pinMode:"hammock",gravity:6,windX:0,windZ:.5,windTurb:.5,damping:.995,constraintIters:12}};function eA(o,e,t,n,i){const a=i==="hammock",s=new Float32Array(o*e*3),r=new Float32Array(o*e*2);for(let p=0;p<e;p++)for(let u=0;u<o;u++){const f=p*o+u,A=u/(o-1),b=p/(e-1);a?(s[f*3]=(A-.5)*t,s[f*3+1]=0,s[f*3+2]=(b-.5)*n):(s[f*3]=(A-.5)*t,s[f*3+1]=(.5-b)*n,s[f*3+2]=0),r[f*2]=A,r[f*2+1]=1-b}const l=[];for(let p=0;p<e-1;p++)for(let u=0;u<o-1;u++){const f=p*o+u,A=f+1,b=f+o,m=b+1;l.push(f,b,A,A,b,m)}const d=new Ee;return d.setAttribute("position",new re(s,3)),d.setAttribute("uv",new re(r,2)),d.setIndex(l),d.computeVertexNormals(),d}function tA(o,e,t,n,i){const a=i==="hammock",s=o*e,r=new Float32Array(s*3),l=new Float32Array(s*3),d=new Uint8Array(s),p=new Float32Array(s*3);for(let m=0;m<e;m++)for(let g=0;g<o;g++){const x=m*o+g,h=g/(o-1),y=m/(e-1);a?(r[x*3]=(h-.5)*t,r[x*3+1]=0,r[x*3+2]=(y-.5)*n):(r[x*3]=(h-.5)*t,r[x*3+1]=(.5-y)*n,r[x*3+2]=0),l[x*3]=r[x*3],l[x*3+1]=r[x*3+1],l[x*3+2]=r[x*3+2]}switch(i){case"flag":for(let m=0;m<e;m++)d[m*o]=1;break;case"curtain":for(let m=0;m<o;m++)d[m]=1;break;case"sheet":d[0]=1,d[o-1]=1;break;case"hammock":d[0]=1,d[o-1]=1,d[(e-1)*o]=1,d[(e-1)*o+o-1]=1;break}for(let m=0;m<s;m++)p[m*3]=r[m*3],p[m*3+1]=r[m*3+1],p[m*3+2]=r[m*3+2];const u=t/(o-1),f=n/(e-1),A=Math.hypot(u,f),b=[];for(let m=0;m<e;m++)for(let g=0;g<o;g++){const x=m*o+g;g<o-1&&b.push({a:x,b:x+1,r:u}),m<e-1&&b.push({a:x,b:x+o,r:f}),g<o-1&&m<e-1&&(b.push({a:x,b:x+o+1,r:A}),b.push({a:x+1,b:x+o,r:A})),g<o-2&&b.push({a:x,b:x+2,r:u*2}),m<e-2&&b.push({a:x,b:x+o*2,r:f*2})}return{pos:r,prev:l,pinned:d,init:p,springs:b,N:o,M:e}}function oA({cols:o,rows:e,cW:t,cH:n,pinMode:i,paramsRef:a,color:s,wireframe:r}){const l=F.useMemo(()=>eA(o,e,t,n,i),[]),d=F.useMemo(()=>tA(o,e,t,n,i),[]),p=F.useRef(null);return fo(({clock:u},f)=>{if(!p.current)return;const{gravity:A,windZ:b,windX:m,windTurb:g,damping:x,constraintIters:h}=a.current,{pos:y,prev:C,pinned:v,init:B,springs:T,N:S,M:R}=d,D=u.getElapsedTime(),w=5,M=Math.min(f,.033)/w;for(let K=0;K<w;K++){for(let I=0;I<S*R;I++){if(v[I])continue;const k=I*3,P=y[k],G=y[k+1],z=y[k+2];let _=(P-C[k])*x,V=(G-C[k+1])*x,ne=(z-C[k+2])*x;V-=A*M*M;const L=Math.sin(P*.8+D*.9)*Math.cos(z*.5+D*.6)*g,ee=Math.sin(z*.7+D*.7)*Math.cos(G*.4+D*.5)*g;_+=(m+L)*M*M,ne+=(b+ee)*M*M,C[k]=P,C[k+1]=G,C[k+2]=z,y[k]=P+_,y[k+1]=G+V,y[k+2]=z+ne,y[k+1]<-3.5&&(y[k+1]=-3.5,C[k+1]=-3.5)}for(let I=0;I<h;I++)for(const{a:k,b:P,r:G}of T){const z=k*3,_=P*3,V=y[_]-y[z],ne=y[_+1]-y[z+1],L=y[_+2]-y[z+2],ee=Math.sqrt(V*V+ne*ne+L*L)||1e-6,ye=(ee-G)/ee*.5;v[k]||(y[z]+=V*ye,y[z+1]+=ne*ye,y[z+2]+=L*ye),v[P]||(y[_]-=V*ye,y[_+1]-=ne*ye,y[_+2]-=L*ye)}for(let I=0;I<S*R;I++)v[I]&&(y[I*3]=B[I*3],y[I*3+1]=B[I*3+1],y[I*3+2]=B[I*3+2])}const E=l.attributes.position;for(let K=0;K<S*R;K++)E.array[K*3]=y[K*3],E.array[K*3+1]=y[K*3+1],E.array[K*3+2]=y[K*3+2];E.needsUpdate=!0,l.computeVertexNormals()}),c.jsx("mesh",{ref:p,geometry:l,castShadow:!0,receiveShadow:!0,children:c.jsx("meshStandardMaterial",{color:s,side:en,roughness:.8,metalness:0,wireframe:r})})}function nA({cols:o,rows:e,cW:t,cH:n,pinMode:i}){const a=F.useMemo(()=>{const s=o,r=e,l=i==="hammock",d=(p,u)=>{const f=p/(s-1),A=u/(r-1);return l?[(f-.5)*t,0,(A-.5)*n]:[(f-.5)*t,(.5-A)*n,0]};switch(i){case"flag":return Array.from({length:r},(p,u)=>d(0,u));case"curtain":return Array.from({length:s},(p,u)=>d(u,0));case"sheet":return[d(0,0),d(s-1,0)];case"hammock":return[d(0,0),d(s-1,0),d(0,r-1),d(s-1,r-1)]}},[o,e,t,n,i]);return c.jsx(c.Fragment,{children:a.map((s,r)=>c.jsxs("mesh",{position:s,children:[c.jsx("sphereGeometry",{args:[.06,8,8]}),c.jsx("meshStandardMaterial",{color:"#ff4455",emissive:"#ff2233",emissiveIntensity:.6})]},r))})}function Yt({label:o,children:e}){return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[c.jsx("div",{style:{fontSize:10,color:"#555",letterSpacing:.4},children:o}),e]})}function iA({active:o,onClick:e,children:t,small:n}){return c.jsx("button",{onClick:e,style:{flex:1,padding:n?"5px 0":"7px 0",fontSize:n?10:11,borderRadius:5,cursor:"pointer",background:o?"#2a2a4a":"#151520",color:o?"#9999ff":"#555",border:o?"1px solid #5E5CE6":"1px solid #222"},children:t})}function Hs({on:o,onClick:e,label:t}){return c.jsxs("div",{onClick:e,style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer",userSelect:"none"},children:[c.jsx("div",{style:{width:28,height:16,borderRadius:8,position:"relative",background:o?"#5E5CE6":"#1e1e2a",border:"1px solid #333",transition:"background .2s"},children:c.jsx("div",{style:{position:"absolute",top:2,left:o?11:2,width:10,height:10,borderRadius:"50%",background:o?"#fff":"#444",transition:"left .2s"}})}),c.jsx("span",{style:{fontSize:11,color:o?"#9999ff":"#555"},children:t})]})}const sA=[["Gravity","gravity",0,10,.1],["Wind forward","windZ",-3,10,.1],["Wind sideways","windX",-5,5,.1],["Turbulence","windTurb",0,8,.1],["Damping","damping",.95,1,.001],["Stiffness","constraintIters",1,20,1]];function rA(){const[o,e]=F.useState(22),[t,n]=F.useState(22),[i,a]=F.useState(3),[s,r]=F.useState(3),[l,d]=F.useState("curtain"),[p,u]=F.useState(0),[f,A]=F.useState("#5588cc"),[b,m]=F.useState(!1),[g,x]=F.useState(!0),[h,y]=F.useState(On.Curtain),C=F.useRef(h);F.useEffect(()=>{C.current=h},[h]);const v=w=>M=>y(E=>({...E,[w]:Number(M.target.value)})),B=w=>{const M=On[w];d(M.pinMode),y({gravity:M.gravity,windX:M.windX,windZ:M.windZ,windTurb:M.windTurb,damping:M.damping,constraintIters:M.constraintIters}),u(E=>E+1)},T={width:"100%",accentColor:"#5E5CE6"},S={borderTop:"1px solid #1a1a2a",paddingTop:12,display:"flex",flexDirection:"column",gap:8},R={fontSize:10,color:"#444",textTransform:"uppercase",letterSpacing:1},D=`${o}-${t}-${i}-${s}-${l}-${p}`;return c.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0a0a12",color:"#ddd"},children:[c.jsxs("div",{style:{width:268,padding:20,display:"flex",flexDirection:"column",gap:14,borderRight:"1px solid #1a1a2a",overflowY:"auto"},children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[c.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Soft Lab"}),c.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[c.jsx("a",{href:"/shatter",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Shatter"}),c.jsx("a",{href:"/deform",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Deform"}),c.jsx("a",{href:"/particles",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Particles"}),c.jsx("a",{href:"/ripple",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Ripple"}),c.jsx("a",{href:"/jelly",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Jelly"})]})]}),c.jsxs("div",{style:S,children:[c.jsx("div",{style:R,children:"Presets"}),c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:Object.keys(On).map(w=>c.jsx("button",{onClick:()=>B(w),style:{padding:"5px 10px",fontSize:10,borderRadius:5,cursor:"pointer",background:"#151520",color:"#777",border:"1px solid #222"},children:w},w))}),c.jsx("button",{onClick:()=>u(w=>w+1),style:{padding:"7px",fontSize:11,borderRadius:5,cursor:"pointer",background:"#151520",color:"#555",border:"1px solid #222"},children:"↺ Reset cloth"})]}),c.jsxs("div",{style:S,children:[c.jsx("div",{style:R,children:"Cloth"}),c.jsx(Yt,{label:`Resolution: ${o}×${t}`,children:c.jsx("input",{type:"range",min:8,max:40,step:1,value:o,onChange:w=>{const M=Number(w.target.value);e(M),n(M)},style:T})}),c.jsx(Yt,{label:`Width: ${i.toFixed(1)}`,children:c.jsx("input",{type:"range",min:1,max:6,step:.1,value:i,onChange:w=>a(Number(w.target.value)),style:T})}),c.jsx(Yt,{label:`Height: ${s.toFixed(1)}`,children:c.jsx("input",{type:"range",min:1,max:6,step:.1,value:s,onChange:w=>r(Number(w.target.value)),style:T})})]}),c.jsxs("div",{style:S,children:[c.jsx("div",{style:R,children:"Pin mode"}),c.jsx("div",{style:{display:"flex",gap:5},children:["flag","curtain","sheet","hammock"].map(w=>c.jsx(iA,{small:!0,active:l===w,onClick:()=>{d(w),u(M=>M+1)},children:w[0].toUpperCase()+w.slice(1)},w))})]}),c.jsxs("div",{style:S,children:[c.jsx("div",{style:R,children:"Simulation"}),sA.map(([w,M,E,K,I])=>c.jsx(Yt,{label:`${w}: ${M==="constraintIters"?h[M].toFixed(0):M==="damping"?h[M].toFixed(3):h[M].toFixed(2)}`,children:c.jsx("input",{type:"range",min:E,max:K,step:I,value:h[M],onChange:v(M),style:T})},M))]}),c.jsxs("div",{style:S,children:[c.jsx("div",{style:R,children:"Rendering"}),c.jsx(Yt,{label:"Color",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[c.jsx("input",{type:"color",value:f,onChange:w=>A(w.target.value),style:{width:32,height:22,border:"none",background:"none",cursor:"pointer",padding:0}}),c.jsx("span",{style:{fontSize:10,color:"#555"},children:f})]})}),c.jsx(Hs,{on:b,onClick:()=>m(w=>!w),label:"Wireframe"}),c.jsx(Hs,{on:g,onClick:()=>x(w=>!w),label:"Show pins"})]})]}),c.jsxs(tn,{shadows:!0,camera:{position:[0,.5,5.5],fov:45},gl:{antialias:!0,toneMapping:ui,toneMappingExposure:1},style:{flex:1,background:"#04040c"},children:[c.jsx("ambientLight",{intensity:.35}),c.jsx("directionalLight",{position:[4,8,4],intensity:1.8,castShadow:!0,"shadow-mapSize":[1024,1024]}),c.jsx("pointLight",{position:[-4,1,-2],intensity:.6,color:"#4466ff"}),c.jsx("pointLight",{position:[3,-1,3],intensity:.3,color:"#ff8844"}),c.jsx(on,{makeDefault:!0,target:[0,0,0]}),c.jsx(oA,{cols:o,rows:t,cW:i,cH:s,pinMode:l,paramsRef:C,color:f,wireframe:b},D),g&&c.jsx(nA,{cols:o,rows:t,cW:i,cH:s,pinMode:l},`pins-${D}`),c.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-3,0],receiveShadow:!0,children:[c.jsx("planeGeometry",{args:[14,14]}),c.jsx("meshStandardMaterial",{color:"#09090f",roughness:.95})]})]})]})}const N=90,_e=10;function aA({waveSpeed:o,damping:e,disturbAmp:t,modelUrl:n,resetKey:i}){const a=F.useRef(new Float32Array(N*N)),s=F.useRef(new Float32Array(N*N)),r=F.useRef(null),[l,d]=F.useState(null),p=F.useMemo(()=>{const f=new Vc(_e,_e,N-1,N-1);return f.rotateX(-Math.PI/2),f},[]);F.useEffect(()=>{a.current.fill(0),s.current.fill(0)},[i]),F.useEffect(()=>{if(!n){d(null);return}new fi().load(n,A=>{const b=A.scene,m=new ue().setFromObject(b),g=m.getSize(new j);b.scale.setScalar(.9/Math.max(g.x,g.y,g.z)),m.setFromObject(b),b.position.sub(m.getCenter(new j)),b.position.y=.5;const x=Math.floor(N/2),h=Math.floor(N/2),y=8;for(let C=-y;C<=y;C++)for(let v=-y;v<=y;v++){const B=x+v,T=h+C;if(B>=0&&B<N&&T>=0&&T<N){const S=Math.sqrt(v*v+C*C);S<=y&&(a.current[T*N+B]-=.4*(1-S/y))}}d(b)})},[n]);const u=F.useCallback((f,A,b)=>{const m=Math.round((f/_e+.5)*(N-1)),g=Math.round((A/_e+.5)*(N-1)),x=4;for(let h=-x;h<=x;h++)for(let y=-x;y<=x;y++){const C=m+y,v=g+h;if(C>=0&&C<N&&v>=0&&v<N){const B=Math.sqrt(y*y+h*h);B<=x&&(a.current[v*N+C]-=b*(1-B/x))}}},[]);return fo(()=>{const f=a.current,A=s.current,b=Math.min(o,.49),m=7;for(let h=1;h<N-1;h++)for(let y=1;y<N-1;y++){const C=h*N+y,v=f[(h-1)*N+y]+f[(h+1)*N+y]+f[h*N+y-1]+f[h*N+y+1]-4*f[C];A[C]=(A[C]+b*v)*e}for(let h=0;h<N*N;h++)f[h]+=A[h];for(let h=0;h<N;h++)for(let y=0;y<N;y++){const C=Math.min(y,h,N-1-y,N-1-h);if(C<m){const v=(C/m)**2,B=Et.lerp(.75,1,v),T=h*N+y;f[T]*=B,A[T]*=B}}const g=p.attributes.position;for(let h=0;h<N;h++)for(let y=0;y<N;y++)g.setY(h*N+y,f[h*N+y]);g.needsUpdate=!0,p.computeVertexNormals();const x=r.current;if(x){const h=Math.round((x.position.x/_e+.5)*(N-1)),y=Math.round((x.position.z/_e+.5)*(N-1));if(h>=0&&h<N&&y>=0&&y<N){const C=f[y*N+h];x.position.y=C+.45,x.rotation.x=C*.25,x.rotation.z=C*.15}}}),c.jsxs(c.Fragment,{children:[c.jsx("mesh",{geometry:p,onPointerDown:f=>{f.stopPropagation(),u(f.point.x,f.point.z,t)},onPointerMove:f=>{f.buttons>0&&u(f.point.x,f.point.z,t*.35)},children:c.jsx("meshStandardMaterial",{color:"#0a3060",roughness:.03,metalness:.45,envMapIntensity:3})}),l&&c.jsx("primitive",{ref:r,object:l})]})}function zn({label:o,children:e}){return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[c.jsx("div",{style:{fontSize:10,color:"#555",letterSpacing:.4},children:o}),e]})}function lA(){const[o,e]=F.useState(.32),[t,n]=F.useState(.995),[i,a]=F.useState(.4),[s,r]=F.useState(null),[l,d]=F.useState(""),[p,u]=F.useState(0),f=F.useCallback(g=>{!g.name.endsWith(".glb")&&!g.name.endsWith(".gltf")||(s&&URL.revokeObjectURL(s),r(URL.createObjectURL(g)),d(g.name))},[s]),A={width:"100%",accentColor:"#5E5CE6"},b={borderTop:"1px solid #1a1a2a",paddingTop:12,display:"flex",flexDirection:"column",gap:8},m={fontSize:10,color:"#444",textTransform:"uppercase",letterSpacing:1};return c.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0a0a12",color:"#ddd"},children:[c.jsxs("div",{style:{width:268,padding:20,display:"flex",flexDirection:"column",gap:14,borderRight:"1px solid #1a1a2a",overflowY:"auto"},children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[c.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Ripple Lab"}),c.jsx("div",{style:{fontSize:11,color:"#444",lineHeight:1.5},children:"Click or drag on the water to create waves."}),c.jsxs("div",{style:{display:"flex",gap:10,marginTop:4},children:[c.jsx("a",{href:"/soft",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Cloth"}),c.jsx("a",{href:"/jelly",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Jelly"}),c.jsx("a",{href:"/particles",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Particles"})]})]}),c.jsxs("div",{style:b,children:[c.jsx("div",{style:m,children:"Object on water"}),c.jsx("div",{onDrop:g=>{g.preventDefault();const x=g.dataTransfer.files[0];x&&f(x)},onDragOver:g=>g.preventDefault(),onClick:()=>document.getElementById("glb-ripple").click(),style:{border:`2px dashed ${s?"#5E5CE6":"#222"}`,borderRadius:8,padding:"10px 8px",textAlign:"center",cursor:"pointer",fontSize:11,color:s?"#9999ff":"#444"},children:l||"Drop a GLB — it will float"}),c.jsx("input",{id:"glb-ripple",type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:g=>{var h;const x=(h=g.target.files)==null?void 0:h[0];x&&f(x)}}),s&&c.jsx("button",{onClick:()=>{r(null),d("")},style:{padding:"5px",fontSize:10,borderRadius:5,cursor:"pointer",background:"#151520",color:"#666",border:"1px solid #222"},children:"Remove object"})]}),c.jsxs("div",{style:b,children:[c.jsx("div",{style:m,children:"Simulation"}),c.jsx(zn,{label:`Wave speed: ${o.toFixed(2)}`,children:c.jsx("input",{type:"range",min:.05,max:.48,step:.01,value:o,onChange:g=>e(Number(g.target.value)),style:A})}),c.jsx(zn,{label:`Damping: ${t.toFixed(3)}`,children:c.jsx("input",{type:"range",min:.96,max:.999,step:.001,value:t,onChange:g=>n(Number(g.target.value)),style:A})}),c.jsx(zn,{label:`Disturbance: ${i.toFixed(2)}`,children:c.jsx("input",{type:"range",min:.05,max:1.5,step:.05,value:i,onChange:g=>a(Number(g.target.value)),style:A})})]}),c.jsx("div",{style:b,children:c.jsx("button",{onClick:()=>u(g=>g+1),style:{padding:"8px",fontSize:11,borderRadius:5,cursor:"pointer",background:"#151520",color:"#666",border:"1px solid #222"},children:"↺ Clear water"})})]}),c.jsxs(tn,{camera:{position:[0,6,8],fov:45},gl:{antialias:!0,toneMapping:ui,toneMappingExposure:1.2},style:{flex:1,background:"#04040c"},children:[c.jsx("ambientLight",{intensity:.3}),c.jsx("directionalLight",{position:[5,8,3],intensity:1.5}),c.jsx(di,{preset:"sunset"}),c.jsx(on,{makeDefault:!0,target:[0,0,0],maxPolarAngle:Math.PI/2.1}),c.jsx(aA,{waveSpeed:o,damping:t,disturbAmp:i,modelUrl:s,resetKey:p}),c.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-.5,0],children:[c.jsx("planeGeometry",{args:[_e,_e]}),c.jsx("meshStandardMaterial",{color:"#071830",roughness:.9})]})]})]})}const cA="/phys_tool/".replace(/\/$/,""),Ze=window.location.pathname.slice(cA.length)||"/",uA=Ze==="/lab"?c.jsx(Zc,{}):Ze==="/sim"?c.jsx($h,{}):Ze==="/shatter"?c.jsx(qc,{}):Ze==="/deform"?c.jsx(_c,{}):Ze==="/particles"?c.jsx($c,{}):Ze==="/soft"?c.jsx(rA,{}):Ze==="/ripple"?c.jsx(lA,{}):Ze==="/fluid"?c.jsx(eu,{}):c.jsx(Xh,{});Xc.createRoot(document.getElementById("root")).render(c.jsx(Yc.StrictMode,{children:uA}));
