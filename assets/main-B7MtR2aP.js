import{r as F,j as c,M as Eo,v as Wn,V as U,S as co,B as Vn,U as kn,a as We,b as ms,L as hs,c as Uo,F as Lo,d as Fe,e as Ee,C as se,f as Af,P as mf,D as hf,g as X,I as gf,Q as $e,h as xf,O as gs,T as yf,i as bf,k as pe,l as Cf,m as Da,N as Ff,n as Bf,o as vf,p as be,q as Ae,R as yt,s as Rf,t as vt,u as Sf,w as ri,x as Mf,y as Le,z as kt,A as it,E as Kf,G as Qe,H as wf,J as Xs,K as Df,W as Tf,X as Ef,Y as Uf,Z as Io,_ as xs,$ as bt,a0 as If,a1 as jf,a2 as kf,a3 as Pf,a4 as zf,a5 as Ta,a6 as Et,a7 as Ys,a8 as Zs,a9 as qs,aa as _s,ab as Pn,ac as Hf,ad as de,ae as Xn,af as Of,ag as Gf,ah as Lf,ai as $s,aj as qi,ak as Nf,al as er,am as Pe,an as _e,ao as ze,ap as ro,aq as Jf,ar as No,as as Qf,at as Jo,au as Pt,av as Ko,aw as jo,ax as Te,ay as ai,az as Be,aA as _i,aB as Wf,aC as tr,aD as Vf,aE as ye,aF as $i,aG as Ea,aH as Xf,aI as Ua,aJ as jt,aK as Yf,aL as Zf,aM as qf,aN as me,aO as Ia,aP as ys,aQ as En,aR as ao,aS as Se,aT as _f,aU as $f,aV as ja,aW as ka,aX as ht,aY as ep,aZ as tp,a_ as op,a$ as np,b0 as Pa,b1 as ip,b2 as or,b3 as sp,b4 as rp,b5 as zn,b6 as za,b7 as Yn,b8 as bs,b9 as Ha,ba as Zn,bb as Cs,bc as ap,bd as lp,be as nr,bf as li,bg as ko,bh as cp,bi as up,bj as ci,bk as ui,bl as dp,bm as Fs,bn as fp,bo as pp,bp as Ap,bq as mp,br as hp,bs as gp,bt as xp,bu as yp,bv as bp}from"./index-JkyKl9pz.js";const Cp={mark:{label:"Mark",badge:"L1"},collection1:{label:"Collection",badge:"L2"},collection2:{label:"Collection",badge:"L3"},scene:{label:"Scene",badge:"Env"}},Fp={1:["mark","scene"],2:["mark","collection1","scene"],3:["mark","collection1","collection2","scene"]},di={padding:"8px 12px",borderRadius:"10px",fontSize:"12px",fontWeight:"500",cursor:"pointer",fontFamily:"inherit",transition:"border-color 0.15s, color 0.15s",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",width:"100%"};function Bp({level:o,activeElement:e,onSelectElement:t,onAdvanceLevel:i,onDowngradeLevel:n,decorations:r,activeDecorationId:s,onSelectDecoration:a,onAddDecoration:l,onRemoveDecoration:d,onRenameDecoration:p}){const u=Fp[o],[f,m]=F.useState(null),[y,h]=F.useState(""),x=F.useRef(null);function g(C,B){m(C.id),h(C.name??`Decoration ${B+1}`),setTimeout(()=>{var R;return(R=x.current)==null?void 0:R.select()},0)}function A(){f&&p(f,y.trim()||f),m(null)}function b(){m(null)}return c.jsxs("div",{style:{padding:"14px 14px 14px",display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsx("div",{style:{paddingTop:"12px"},children:c.jsx("div",{style:{fontSize:"16px",color:"#1D1D1F",fontWeight:"700"},children:"Visualization Hierarchy"})}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:u.map(C=>{const B=Cp[C],R=C===e&&s===null;return c.jsxs("button",{onClick:()=>t(C),style:{display:"flex",alignItems:"center",gap:"10px",padding:"9px 12px",width:"100%",textAlign:"left",background:R?"#F2F2F7":"#FAFAFA",border:`1.5px solid ${R?"#1D1D1F":"#E5E5EA"}`,borderRadius:"10px",cursor:"pointer",transition:"border-color 0.15s, background 0.15s",fontFamily:"inherit"},children:[c.jsx("div",{style:{flex:1,minWidth:0},children:c.jsx("div",{style:{fontSize:"12px",color:"#1D1D1F",fontWeight:R?"600":"500",lineHeight:1.2},children:B.label})}),c.jsx("span",{style:{fontSize:"9px",letterSpacing:"0.06em",fontWeight:"500",color:R?"#1D1D1F":"#8E8E93",border:`1px solid ${R?"#1D1D1F":"#D1D1D6"}`,borderRadius:"4px",padding:"1px 5px",flexShrink:0,transition:"color 0.15s, border-color 0.15s"},children:B.badge})]},C)})}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px",paddingTop:"2px"},children:[o<3&&c.jsx("button",{onClick:i,style:{...di,background:"transparent",border:"1.5px dashed #C7C7CC",color:"#8E8E93"},children:"+ Add Collection"}),o>1&&c.jsx("button",{onClick:n,style:{...di,background:"transparent",border:"1.5px dashed #C7C7CC",color:"#8E8E93"},children:"− Remove Collection"})]}),c.jsxs("div",{style:{borderTop:"1px solid #E5E5EA",paddingTop:"8px",display:"flex",flexDirection:"column",gap:"5px"},children:[c.jsx("div",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600",marginBottom:"2px"},children:"Decorations"}),r.map((C,B)=>{const R=C.id===s,v=C.id===f,S=C.name??`Decoration ${B+1}`;return c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[c.jsxs("div",{onClick:()=>{v||a(C.id)},onDoubleClick:()=>g(C,B),style:{flex:1,display:"flex",alignItems:"center",gap:"8px",padding:"7px 10px",background:R?"#F2F2F7":"#FAFAFA",border:`1.5px solid ${R?"#1D1D1F":"#E5E5EA"}`,borderRadius:"8px",cursor:v?"default":"pointer",transition:"border-color 0.15s, background 0.15s",minWidth:0},children:[v?c.jsx("input",{ref:x,value:y,onChange:M=>h(M.target.value),onBlur:A,onKeyDown:M=>{M.key==="Enter"&&A(),M.key==="Escape"&&b()},style:{flex:1,border:"none",outline:"none",background:"transparent",fontSize:"12px",color:"#1D1D1F",fontFamily:"inherit",fontWeight:"600",minWidth:0},onClick:M=>M.stopPropagation(),autoFocus:!0}):c.jsx("span",{style:{fontSize:"12px",color:"#1D1D1F",fontWeight:R?"600":"400",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:S}),!v&&c.jsx("span",{style:{fontSize:"9px",color:R?"#1D1D1F":"#8E8E93",border:`1px solid ${R?"#1D1D1F":"#D1D1D6"}`,borderRadius:"4px",padding:"1px 5px",flexShrink:0},children:"Dec"})]}),c.jsx("button",{onClick:()=>d(C.id),title:"Remove decoration",style:{background:"none",border:"none",cursor:"pointer",color:"#AEAEB2",fontSize:"16px",lineHeight:1,padding:"4px 6px",flexShrink:0,fontFamily:"inherit"},children:"×"})]},C.id)}),c.jsx("button",{onClick:l,style:{...di,background:"transparent",border:"1.5px dashed #C7C7CC",color:"#8E8E93"},children:"+ Add Decoration"})]})]})}const ir={weight:{label:"Weight",type:"numerical"},garbageType:{label:"Garbage Type",type:"categorical"},count:{label:"Count",type:"numerical"}},Oa=F.createContext(Eo);function vp(o){return 2*Math.atan(12/o)*180/Math.PI}const Ot="/phys_tool/",Ne={spatial:`${Ot}assets/icons/spatial.png`,shape:`${Ot}assets/icons/shape.png`,material:`${Ot}assets/icons/material.png`,populations:`${Ot}assets/icons/populations.png`,framing:`${Ot}assets/icons/framing.png`,labels:`${Ot}assets/icons/labels.png`};function Rp({children:o}){return c.jsx("span",{style:{fontSize:"10px",color:"#8E8E93",textTransform:"uppercase",letterSpacing:"0.07em",fontWeight:"600"},children:o})}function Y({label:o,children:e,right:t}){return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsx(Rp,{children:o}),t]}),e]})}function Po({options:o,value:e,onChange:t}){return c.jsx("div",{style:{display:"flex",background:"#EFEFEF",borderRadius:"8px",padding:"2px",gap:"2px"},children:o.map(i=>{const n=e===i.value;return c.jsx("button",{onClick:()=>t(i.value),style:{flex:1,padding:"5px 4px",background:n?"#FFFFFF":"transparent",border:"none",borderRadius:"6px",boxShadow:n?"0 1px 3px rgba(0,0,0,0.12)":"none",color:n?"#1D1D1F":"#6C6C70",cursor:"pointer",fontSize:"12px",fontWeight:n?"600":"400",transition:"all 0.15s",whiteSpace:"nowrap",fontFamily:"inherit"},children:i.label},i.value)})})}const Bs={numerical:{label:"Numerical",type:"numerical"},categorical:{label:"Categorical",type:"categorical"},weight:{label:"Weight",type:"numerical"},garbageType:{label:"Garbage Type",type:"categorical"},count:{label:"Count",type:"numerical"},section:{label:"Section",type:"categorical"}};function Hn({children:o,accepts:e,onDrop:t}){const[i,n]=F.useState(!1),r=e==="any"?["phys-var/numerical","phys-var/categorical"]:[`phys-var/${e}`],s=l=>r.some(d=>l.includes(d)),a=e==="categorical"?"#5E5CE6":"#007AFF";return c.jsx("div",{onDragOver:l=>{s(l.dataTransfer.types)&&(l.preventDefault(),n(!0))},onDragLeave:()=>n(!1),onDrop:l=>{s(l.dataTransfer.types)&&(l.preventDefault(),n(!1),t(l.dataTransfer.getData("phys-var/name")))},style:{borderRadius:"8px",outline:i?`2px dashed ${a}`:"2px dashed transparent",outlineOffset:"2px",transition:"outline 0.1s"},children:o})}function On({label:o,type:e,onClear:t}){return c.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"#EBF3FF",border:"1px solid #A8CAFF",borderRadius:"7px",padding:"6px 10px",fontSize:"12px",color:"#007AFF",fontWeight:"500"},children:[c.jsxs("span",{children:[e==="numerical"?"#":"◈"," ",o]}),c.jsx("button",{onClick:t,style:{background:"none",border:"none",cursor:"pointer",color:"#60A0EE",padding:"0 0 0 2px",fontSize:"14px",lineHeight:1,fontFamily:"inherit"},children:"×"})]})}const Sp={top:"↑",bottom:"↓",left:"←",right:"→"};function _o({position:o,slot:e,onAdd:t,onRemove:i}){const[n,r]=F.useState(!1),s=p=>p.dataTransfer.types.some(u=>u==="phys-var/numerical"||u==="phys-var/categorical"),a=p=>{s(p)&&(p.preventDefault(),r(!0))},l=()=>r(!1),d=p=>{s(p)&&(p.preventDefault(),r(!1),t(p.dataTransfer.getData("phys-var/name")))};return e.length>0?c.jsx("div",{onDragOver:a,onDragLeave:l,onDrop:d,title:`Drop another variable to add it to the ${o} label`,style:{display:"flex",flexDirection:"column",gap:"3px",borderRadius:"6px",outline:n?"1px dashed #007AFF":"none",outlineOffset:"2px"},children:e.map(p=>{const u=Bs[p];return c.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"3px",background:u.type==="numerical"?"#EBF3FF":"#F3EBFF",border:`1px solid ${u.type==="numerical"?"#A8CAFF":"#C8A8FF"}`,borderRadius:"6px",padding:"2px 3px 2px 6px",fontSize:"10px",fontWeight:"600",color:u.type==="numerical"?"#007AFF":"#5E5CE6",whiteSpace:"nowrap"},children:[u.type==="numerical"?"#":"◈"," ",u.label,c.jsx("button",{onClick:()=>i(p),style:{background:"none",border:"none",cursor:"pointer",color:"#AEAEB2",padding:"0 2px",fontSize:"12px",lineHeight:1,fontFamily:"inherit"},children:"×"})]},p)})}):c.jsxs("div",{onDragOver:a,onDragLeave:l,onDrop:d,title:`Drag a variable to the ${o} label`,style:{border:`1.5px dashed ${n?"#007AFF":"#D1D1D6"}`,borderRadius:"7px",padding:"4px 8px",fontSize:"10px",color:n?"#007AFF":"#AEAEB2",textAlign:"center",whiteSpace:"nowrap",background:n?"#EBF3FF":"transparent",transition:"all 0.1s",cursor:"default",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px"},children:[c.jsx("span",{children:Sp[o]}),c.jsx("span",{style:{textTransform:"capitalize"},children:o})]})}function Ga({config:o,onChange:e}){function t(n,r){const s=o.slots[n];s.includes(r)||e({...o,slots:{...o.slots,[n]:[...s,r]}})}function i(n,r){e({...o,slots:{...o.slots,[n]:o.slots[n].filter(s=>s!==r)}})}return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsx("button",{onClick:()=>e({...o,show:!o.show}),style:{alignSelf:"flex-start",background:o.show?"#EBF3FF":"#F2F2F7",border:`1px solid ${o.show?"#A8CAFF":"#D1D1D6"}`,color:o.show?"#007AFF":"#6C6C70",borderRadius:"6px",padding:"6px 14px",fontSize:"12px",fontWeight:o.show?"600":"400",cursor:"pointer",fontFamily:"inherit",transition:"all 0.15s"},children:o.show?"● Visible":"○ Hidden"}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto 1fr",gridTemplateRows:"auto auto auto",gap:"4px",alignItems:"center",justifyItems:"center"},children:[c.jsx("div",{}),c.jsx(_o,{position:"top",slot:o.slots.top,onAdd:n=>t("top",n),onRemove:n=>i("top",n)}),c.jsx("div",{}),c.jsx(_o,{position:"left",slot:o.slots.left,onAdd:n=>t("left",n),onRemove:n=>i("left",n)}),c.jsx("div",{style:{width:"18px",height:"18px",background:"#E5E5EA",borderRadius:"4px",flexShrink:0}}),c.jsx(_o,{position:"right",slot:o.slots.right,onAdd:n=>t("right",n),onRemove:n=>i("right",n)}),c.jsx("div",{}),c.jsx(_o,{position:"bottom",slot:o.slots.bottom,onAdd:n=>t("bottom",n),onRemove:n=>i("bottom",n)}),c.jsx("div",{})]})]})}function Je({icon:o,title:e,open:t=!1,onToggle:i,children:n,empty:r=!1}){return c.jsxs("div",{style:{border:"1px solid #E5E5EA",borderRadius:"10px",overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},children:[c.jsxs("button",{onClick:i,style:{display:"flex",alignItems:"center",gap:"9px",padding:"9px 12px",width:"100%",textAlign:"left",background:"#F8F8FA",border:"none",borderBottom:t&&!r?"1px solid #E5E5EA":"none",cursor:"pointer",fontFamily:"inherit",transition:"background 0.1s"},children:[c.jsx("img",{src:o,alt:e,style:{width:"24px",height:"24px",borderRadius:"6px",flexShrink:0,objectFit:"cover"}}),c.jsx("span",{style:{flex:1,fontSize:"12px",fontWeight:"600",color:"#1D1D1F",lineHeight:1},children:e}),c.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",transition:"transform 0.15s",display:"inline-block",transform:t?"rotate(0deg)":"rotate(-90deg)"},children:"▾"})]}),t&&c.jsx("div",{style:{padding:"12px",background:"#FFFFFF",display:"flex",flexDirection:"column",gap:"12px"},children:r?c.jsx("div",{style:{fontSize:"11px",color:"#C7C7CC",textAlign:"center",padding:"8px 0",fontStyle:"italic"},children:"Coming soon"}):n})]})}function vs(o,e){const[t,i]=F.useState(o);return F.useEffect(()=>{e!==void 0&&i(e)},[e]),{isOpen:n=>t===n,toggle:n=>i(r=>r===n?"":n)}}function Mp({value:o,min:e,max:t,step:i,onCommit:n,style:r}){const[s,a]=F.useState(String(o)),[l,d]=F.useState(!1);F.useEffect(()=>{l||a(String(o))},[o,l]);const p=u=>(e!==void 0&&(u=Math.max(e,u)),t!==void 0&&(u=Math.min(t,u)),u);return c.jsx("input",{type:"number",value:s,min:e,max:t,step:i,onFocus:()=>d(!0),onChange:u=>{const f=u.target.value;if(a(f),f.trim()==="")return;const m=Number(f);Number.isFinite(m)&&n(p(m))},onBlur:()=>{d(!1);const u=Number(s);a(String(s.trim()!==""&&Number.isFinite(u)?p(u):o))},style:r})}function Ct({label:o,value:e,onChange:t,min:i,max:n,step:r=.1,lockable:s=!1,axisBindings:a,onAxisBind:l,axes:d}){const[p,u]=F.useState(!1),[f,m]=F.useState(null),y=d??["x","y","z"];function h(g,A){if(p&&e[g]!==0){const b=A/e[g];t({x:g==="x"?A:parseFloat((e.x*b).toFixed(3)),y:g==="y"?A:parseFloat((e.y*b).toFixed(3)),z:g==="z"?A:parseFloat((e.z*b).toFixed(3))})}else t({...e,[g]:A})}const x=s?c.jsx("button",{onClick:g=>{g.stopPropagation(),u(!p)},title:p?"Unlock proportions":"Lock proportions (scale all axes together)",style:{background:p?"#007AFF":"transparent",border:`1px solid ${p?"#007AFF":"#D1D1D6"}`,borderRadius:"4px",padding:"1px 7px",lineHeight:"16px",cursor:"pointer",fontSize:"10px",color:p?"#fff":"#AEAEB2",fontFamily:"inherit",transition:"all 0.12s"},children:"⛓"}):void 0;return c.jsx(Y,{label:o,right:x,children:c.jsx("div",{style:{display:"flex",gap:"5px"},children:y.map(g=>{const A=(a==null?void 0:a[g])??null,b=f===g;if(A!==null&&l){const C=Bs[A];return c.jsx("div",{style:{flex:1},children:c.jsxs("div",{style:{display:"flex",alignItems:"stretch",border:`1px solid ${C.type==="numerical"?"#A8CAFF":"#C8A8FF"}`,borderRadius:"6px",overflow:"hidden",background:C.type==="numerical"?"#EBF3FF":"#F3EBFF"},children:[c.jsx("span",{style:{padding:"4px 5px",background:C.type==="numerical"?"#C5DFFF":"#DFC5FF",color:C.type==="numerical"?"#0055CC":"#5500CC",fontSize:"9px",fontWeight:"700",letterSpacing:"0.03em",display:"flex",alignItems:"center",flexShrink:0},children:g.toUpperCase()}),c.jsxs("span",{style:{flex:1,padding:"4px 4px",fontSize:"10px",color:C.type==="numerical"?"#007AFF":"#5E5CE6",fontWeight:"600",display:"flex",alignItems:"center",overflow:"hidden",whiteSpace:"nowrap"},children:[C.type==="numerical"?"#":"◈"," ",C.label]}),c.jsx("button",{onClick:()=>l(g,null),style:{background:"none",border:"none",cursor:"pointer",color:"#AEAEB2",padding:"0 4px",fontSize:"13px",lineHeight:1,fontFamily:"inherit"},children:"×"})]})},g)}return c.jsx("div",{style:{flex:1},onDragOver:C=>{a&&C.dataTransfer.types.includes("phys-var/numerical")&&(C.preventDefault(),m(g))},onDragLeave:()=>m(null),onDrop:C=>{!a||!C.dataTransfer.types.includes("phys-var/numerical")||(C.preventDefault(),m(null),l==null||l(g,C.dataTransfer.getData("phys-var/name")))},children:c.jsxs("div",{style:{display:"flex",alignItems:"stretch",border:`1px solid ${b?"#007AFF":"#D1D1D6"}`,borderRadius:"6px",overflow:"hidden",outline:b?"1px dashed #007AFF":"none",outlineOffset:"1px"},children:[c.jsx("span",{style:{padding:"4px 5px",background:"#E5E5EA",color:"#6C6C70",fontSize:"9px",fontWeight:"700",letterSpacing:"0.03em",display:"flex",alignItems:"center",flexShrink:0},children:g.toUpperCase()}),c.jsx(Mp,{value:e[g],min:i,max:n,step:r,onCommit:C=>h(g,C),style:{flex:1,minWidth:0,background:"#F2F2F7",border:"none",padding:"4px 5px",fontSize:"11px",color:"#1D1D1F",outline:"none",fontFamily:"monospace",width:"100%"}})]})},g)})})})}const La=["plastic","fluid","glass","metal","iridescent","emissive","toon","wireframe","custom"];function Na({material:o,opacity:e,roughness:t,metalness:i,onPatch:n}){return c.jsxs(c.Fragment,{children:[c.jsx(Ke,{label:"Opacity",value:e??1,min:0,max:1,step:.05,decimals:2,onChange:r=>n({opacity:r})}),o==="custom"&&c.jsxs(c.Fragment,{children:[c.jsx(Ke,{label:"Roughness",value:t??.5,min:0,max:1,step:.05,decimals:2,onChange:r=>n({roughness:r})}),c.jsx(Ke,{label:"Metalness",value:i??0,min:0,max:1,step:.05,decimals:2,onChange:r=>n({metalness:r})})]})]})}const Kp=[{value:"alignment",label:"Alignment"},{value:"scattering",label:"Scattering"},{value:"stacking",label:"Stacking"},{value:"surface",label:"Surface Placement"},{value:"adjacent",label:"Adjacent Placement"}],wp=[{value:"city",label:"City"},{value:"warehouse",label:"Warehouse"},{value:"sunset",label:"Sunset"},{value:"dawn",label:"Dawn"},{value:"forest",label:"Forest"},{value:"night",label:"Night"},{value:"studio",label:"Studio"},{value:"apartment",label:"Apartment"}];function qn({title:o}){return c.jsx("div",{style:{fontSize:"16px",color:"#1D1D1F",fontWeight:"700"},children:o})}function es({config:o,onChange:e}){const t=F.useRef(null),i=F.useRef(null),n=F.useContext(Oa),r=o.shape==="custom"?o.customModelName:void 0,s=!!r&&(n.some(y=>y.name===r)||Eo.some(y=>y.name===r)),a=o.shape==="custom"&&!s,l=s&&r&&!n.some(y=>y.name===r)?Eo.find(y=>y.name===r):void 0,d=l?[l,...n]:n,p=o.shape!=="custom"?o.shape:s?`preset:${o.customModelName}`:o.customModelUrl?"__blob__":"box";function u(y){var g;const h=y.target.value;if(h==="__import__"){(g=t.current)==null||g.click();return}if(h==="__blob__")return;if(h.startsWith("preset:")){const A=h.slice(7),b=n.find(C=>C.name===A)??Eo.find(C=>C.name===A);b&&e({shape:"custom",customModelUrl:b.url,customModelHasMat:!0,customModelName:b.name,material:"original"});return}const x=o.material==="original"?"plastic":o.material;e({shape:h,customModelUrl:void 0,customModelHasMat:void 0,customModelName:void 0,material:x})}function f(y){var A;const h=(A=y.target.files)==null?void 0:A[0];if(!h)return;i.current&&URL.revokeObjectURL(i.current);const x=URL.createObjectURL(h);i.current=x;const g=h.name.replace(/\.(glb|gltf)$/i,"");e({shape:"custom",customModelUrl:x,customModelHasMat:!0,customModelName:g,material:"original"}),y.target.value=""}const m={width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"};return c.jsxs(c.Fragment,{children:[c.jsxs("select",{value:p,onChange:u,style:m,children:[d.length>0&&c.jsx("optgroup",{label:"3D Models",children:d.map(y=>c.jsx("option",{value:`preset:${y.name}`,children:y.name},y.name))}),c.jsxs("optgroup",{label:"Primitives",children:[c.jsx("option",{value:"box",children:"■  Box"}),c.jsx("option",{value:"sphere",children:"●  Sphere"}),c.jsx("option",{value:"star",children:"★  Star"})]}),c.jsxs("optgroup",{label:"Custom",children:[a&&c.jsxs("option",{value:"__blob__",children:["✎  ",o.customModelName??"Imported file"]}),c.jsx("option",{value:"__import__",children:"↑  Import .glb / .gltf…"})]})]}),c.jsx("input",{ref:t,type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:f})]})}function Dp({config:o,onChange:e,bindings:t,onBind:i,labelConfig:n,onLabelChange:r,colorMode:s,colorGradient:a,onColorGradientChange:l,colorTint:d,onColorTintChange:p,openSection:u,layers:f,compositionLevel:m}){var x,g;const y=o.shape==="custom"&&o.customModelHasMat?["original","plastic","fluid","glass","metal","iridescent","emissive","toon","wireframe"]:La,h=vs("Spatial",u);return c.jsxs(c.Fragment,{children:[c.jsx(qn,{title:"Mark"}),c.jsxs(Je,{icon:Ne.spatial,title:"Spatial",open:h.isOpen("Spatial"),onToggle:()=>h.toggle("Spatial"),children:[c.jsx(Ct,{label:"Position",value:o.position,onChange:A=>e({...o,position:A}),min:-10,max:10,step:.1}),c.jsx(Y,{label:"Scale",children:t.markScale!==null?c.jsx(On,{label:Bs[t.markScale].label,type:"numerical",onClear:()=>i("markScale",null)}):c.jsx(Hn,{accepts:"numerical",onDrop:A=>i("markScale",A),children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:.1,max:10,step:.1,value:o.scale??1,onChange:A=>e({...o,scale:Number(A.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:[(o.scale??1).toFixed(1),"×"]})]})})}),c.jsx(Ct,{label:"Size",value:o.size,onChange:A=>e({...o,size:A}),min:.1,max:10,step:.1,lockable:!0,axisBindings:{x:t.markSizeX,y:t.markSizeY,z:t.markSizeZ},onAxisBind:(A,b)=>i(A==="x"?"markSizeX":A==="y"?"markSizeY":"markSizeZ",b)}),c.jsx(Ct,{label:"Orientation",value:o.orientation,onChange:A=>e({...o,orientation:A}),min:-180,max:180,step:1})]}),c.jsx(Je,{icon:Ne.shape,title:"Geometry",open:h.isOpen("Geometry"),onToggle:()=>h.toggle("Geometry"),children:t.markGeometry!==null&&f.length>1?f.map(A=>{var B;const b=(B=o.categoryShapes)==null?void 0:B[A.name],C={shape:(b==null?void 0:b.shape)??o.shape,material:o.material,customModelUrl:b==null?void 0:b.customModelUrl,customModelHasMat:b==null?void 0:b.customModelHasMat,customModelName:b==null?void 0:b.customModelName};return c.jsx(Y,{label:A.name,children:c.jsx(es,{config:C,onChange:R=>e({...o,categoryShapes:{...o.categoryShapes??{},[A.name]:{shape:R.shape??(b==null?void 0:b.shape)??o.shape,customModelUrl:R.customModelUrl,customModelHasMat:R.customModelHasMat,customModelName:R.customModelName}}})})},A.id)}):c.jsx(Y,{label:"Shape",children:c.jsx(es,{config:o,onChange:A=>e({...o,...A})})})}),c.jsxs(Je,{icon:Ne.material,title:"Material",open:h.isOpen("Material"),onToggle:()=>h.toggle("Material"),children:[c.jsx(Y,{label:"Type",children:c.jsx("select",{value:o.material,onChange:A=>e({...o,material:A.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:y.map(A=>c.jsx("option",{value:A,children:A.charAt(0).toUpperCase()+A.slice(1)},A))})}),c.jsx(Y,{label:"Color",children:t.markColor!==null?c.jsxs(c.Fragment,{children:[c.jsx(On,{label:((x=ir[t.markColor])==null?void 0:x.label)??t.markColor,type:((g=ir[t.markColor])==null?void 0:g.type)??"categorical",onClear:()=>i("markColor",null)}),s==="continuous"&&a&&l&&c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginTop:"8px"},children:[c.jsx("input",{type:"color",value:a.from,onChange:A=>l({...a,from:A.target.value}),style:{width:"32px",height:"28px",border:"1px solid #D1D1D6",borderRadius:"5px",background:"none",cursor:"pointer",padding:"1px"}}),c.jsx("span",{style:{fontSize:"12px",color:"#AEAEB2",fontWeight:"500"},children:"→"}),c.jsx("input",{type:"color",value:a.to,onChange:A=>l({...a,to:A.target.value}),style:{width:"32px",height:"28px",border:"1px solid #D1D1D6",borderRadius:"5px",background:"none",cursor:"pointer",padding:"1px"}}),c.jsx("span",{style:{fontSize:"11px",color:"#8E8E93"},children:"Gradient"})]}),o.shape==="custom"&&p&&c.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"8px",fontSize:"12px",color:"#1D1D1F",cursor:"pointer"},children:[c.jsx("input",{type:"checkbox",checked:d??!1,onChange:A=>p(A.target.checked),style:{accentColor:"#5E5CE6",width:"14px",height:"14px",cursor:"pointer"}}),c.jsx("span",{children:"Tint model (keep its material)"})]})]}):c.jsx(Hn,{accepts:"categorical",onDrop:()=>i("markColor","garbageType"),children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"2px"},children:[c.jsx("input",{type:"color",value:o.color,onChange:A=>e({...o,color:A.target.value}),style:{width:"36px",height:"32px",border:"1px solid #D1D1D6",borderRadius:"6px",background:"none",cursor:"pointer",padding:"2px"}}),c.jsx("span",{style:{fontSize:"12px",color:"#8E8E93",fontFamily:"monospace"},children:o.color})]})})}),c.jsx(Na,{material:o.material,opacity:o.opacity,roughness:o.roughness,metalness:o.metalness,onPatch:A=>e({...o,...A})})]}),c.jsx(Je,{icon:Ne.labels,title:"Labels",open:h.isOpen("Labels"),onToggle:()=>h.toggle("Labels"),children:c.jsx(Ga,{config:n,onChange:r})})]})}function sr({config:o,onChange:e,collectionLevel:t,bindings:i,onBind:n,labelConfig:r,onLabelChange:s,onReseed:a,compositionLevel:l}){const d=t===2,p=vs("Groups & Populations");return c.jsxs(c.Fragment,{children:[c.jsx(qn,{title:"Collection"}),c.jsxs(Je,{icon:Ne.populations,title:"Groups & Populations",open:p.isOpen("Groups & Populations"),onToggle:()=>p.toggle("Groups & Populations"),children:[c.jsx(Y,{label:"Arrangement",children:c.jsx("select",{value:o.arrangement,onChange:u=>e({...o,arrangement:u.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:Kp.map(u=>c.jsx("option",{value:u.value,children:u.label},u.value))})}),o.arrangement==="alignment"&&c.jsxs(c.Fragment,{children:[c.jsx(Y,{label:"Elements",children:(()=>{const u=t===1?"c1AlignCount":"c2AlignCount",f=i[u],m=t===1?Object.values(i).some(h=>h!==null):i.scatterSize!==null,y={weight:{label:"Weight",type:"numerical"},garbageType:{label:"Garbage Type",type:"categorical"},count:{label:"Count",type:"numerical"}};if(f!==null){const h=y[f]??{label:f,type:"numerical"};return c.jsx(On,{label:h.label,type:h.type,onClear:()=>n(u,null)})}return m?c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",background:"#F2F2F7",border:"1px solid #E5E5EA",borderRadius:"7px",padding:"5px 10px"},children:[c.jsx("span",{style:{fontSize:"12px",color:"#1D1D1F",fontWeight:"600",flex:1},children:o.alignCount}),c.jsx("span",{style:{fontSize:"9px",color:"#AEAEB2",letterSpacing:"0.06em",fontWeight:"600"},children:"DATA"})]}):c.jsx(Hn,{accepts:"numerical",onDrop:()=>n(u,"count"),children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:2,max:20,step:1,value:o.alignCount,onChange:h=>e({...o,alignCount:Number(h.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:o.alignCount})]})})})()}),c.jsx(Y,{label:"Axis",children:c.jsx(Po,{options:[{value:"X",label:"→ X axis"},{value:"Y",label:"↑ Y axis"}],value:o.alignAxis,onChange:u=>e({...o,alignAxis:u})})}),c.jsx(Y,{label:"Anchor",children:c.jsx(Po,{options:o.alignAxis==="X"?[{value:"start",label:"↑ Top"},{value:"center",label:"◆ Ctr"},{value:"end",label:"↓ Bottom"}]:[{value:"start",label:"← Left"},{value:"center",label:"◆ Ctr"},{value:"end",label:"→ Right"}],value:o.alignAnchor,onChange:u=>e({...o,alignAnchor:u})})}),c.jsxs(Y,{label:"Spacing",children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:0,max:d?12:6,step:.1,value:o.alignSpacing,onChange:u=>e({...o,alignSpacing:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:o.alignSpacing.toFixed(1)})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#C7C7CC"},children:[c.jsx("span",{children:"Tight"}),c.jsx("span",{children:"Spread"})]})]})]}),o.arrangement==="scattering"&&c.jsxs(c.Fragment,{children:[c.jsx(Y,{label:"Quantity",children:c.jsx("div",{style:{display:"flex",gap:"4px"},children:["count","density"].map(u=>c.jsx("button",{onClick:()=>e({...o,scatterMode:u}),style:{flex:1,padding:"5px 0",background:(o.scatterMode??"count")===u?"#5E5CE6":"#F2F2F7",color:(o.scatterMode??"count")===u?"#fff":"#6C6C70",border:"1px solid",borderColor:(o.scatterMode??"count")===u?"#5E5CE6":"#E5E5EA",borderRadius:"6px",cursor:"pointer",fontSize:"11px",fontWeight:"600",fontFamily:"inherit"},children:u==="count"?"Population":"Density"},u))})}),(o.scatterMode??"count")==="count"?c.jsx(Y,{label:"Population",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:5,max:600,step:5,value:o.scatterCount,onChange:u=>e({...o,scatterCount:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:o.scatterCount})]})}):c.jsx(Y,{label:"Density",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:.05,max:5,step:.05,value:o.scatterDensity,onChange:u=>e({...o,scatterDensity:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"36px",textAlign:"right"},children:[o.scatterDensity.toFixed(2),"/u³"]})]})}),c.jsx(Y,{label:"Volume",children:c.jsx("div",{style:{display:"flex",width:"100%"},children:["box","sphere"].map((u,f)=>c.jsx("button",{onClick:()=>e({...o,scatterBoundingVolume:u}),style:{flex:1,padding:"5px 0",background:(o.scatterBoundingVolume??"box")===u?"#5E5CE6":"#F2F2F7",color:(o.scatterBoundingVolume??"box")===u?"#fff":"#6C6C70",border:"1px solid",borderColor:(o.scatterBoundingVolume??"box")===u?"#5E5CE6":"#E5E5EA",borderRadius:f===0?"6px 0 0 6px":"0 6px 6px 0",cursor:"pointer",fontFamily:"inherit",fontSize:"11px",fontWeight:"600"},children:u==="box"?"□ Box":"○ Sphere"},u))})}),i.scatterSize!==null?c.jsxs(c.Fragment,{children:[c.jsx(Y,{label:"Dimensions",children:c.jsx(On,{label:"Number of Instruments",type:"numerical",onClear:()=>n("scatterSize",null)})}),c.jsx(Y,{label:"Size axes",children:c.jsx("div",{style:{display:"flex",gap:"4px"},children:["x","y","z"].map(u=>{const f=o.scatterSizeAxes??{x:!1,y:!0,z:!1},m=f[u];return c.jsx("button",{onClick:()=>e({...o,scatterSizeAxes:{...f,[u]:!m}}),style:{flex:1,padding:"6px 0",borderRadius:"7px",border:`1px solid ${m?"#A8CAFF":"#E5E5EA"}`,background:m?"#EBF3FF":"#F2F2F7",color:m?"#007AFF":"#6C6C70",fontWeight:m?"700":"500",fontSize:"12px",cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"},children:u},u)})})})]}):c.jsx(Hn,{accepts:"numerical",onDrop:()=>n("scatterSize","numerical"),children:c.jsx(Ct,{label:"Dimensions",value:o.scatterDimensions,onChange:u=>e({...o,scatterDimensions:u}),min:.5,max:20,step:.5})}),c.jsx(Y,{label:"Orientation",children:c.jsx("div",{style:{display:"flex",width:"100%"},children:["random","static"].map((u,f)=>c.jsx("button",{onClick:()=>e({...o,scatterOrientation:u}),style:{flex:1,padding:"5px 0",background:(o.scatterOrientation??"random")===u?"#5E5CE6":"#F2F2F7",color:(o.scatterOrientation??"random")===u?"#fff":"#6C6C70",border:"1px solid",borderColor:(o.scatterOrientation??"random")===u?"#5E5CE6":"#E5E5EA",borderRadius:f===0?"6px 0 0 6px":"0 6px 6px 0",cursor:"pointer",fontFamily:"inherit",fontSize:"11px",fontWeight:"600"},children:u==="random"?"Random":"Static"},u))})}),c.jsx(Y,{label:"Show Bounds",children:c.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"7px",cursor:"pointer"},children:[c.jsx("input",{type:"checkbox",checked:o.scatterShowBounds??!0,onChange:u=>e({...o,scatterShowBounds:u.target.checked}),style:{accentColor:"#5E5CE6",width:"14px",height:"14px",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"11px",color:"#6C6C70"},children:"Visible"})]})}),o.object&&c.jsx(Y,{label:"Exclusion Zone",children:c.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"7px",cursor:"pointer"},children:[c.jsx("input",{type:"checkbox",checked:o.scatterExcludeObject??!1,onChange:u=>e({...o,scatterExcludeObject:u.target.checked}),style:{accentColor:"#5E5CE6",width:"14px",height:"14px",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"11px",color:"#6C6C70"},children:"Keep marks out of the object"})]})}),a&&c.jsx(Y,{label:"Placement",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"6px",cursor:"pointer",flex:1},children:[c.jsx("input",{type:"checkbox",checked:o.scatterEven??!1,onChange:u=>e({...o,scatterEven:u.target.checked}),style:{accentColor:"#5E5CE6",width:"14px",height:"14px",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"11px",color:"#6C6C70"},children:"Even spread"})]}),c.jsx("button",{onClick:a,style:{padding:"6px 12px",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:"#1D1D1F",fontFamily:"inherit",flexShrink:0},onMouseEnter:u=>u.currentTarget.style.background="#E5E5EA",onMouseLeave:u=>u.currentTarget.style.background="#F2F2F7",children:"Randomise"})]})})]}),o.arrangement==="piling"&&c.jsx(Y,{label:"Population",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:2,max:60,step:1,value:o.pilingCount,onChange:u=>e({...o,pilingCount:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:o.pilingCount})]})}),o.arrangement==="surface"&&c.jsxs(c.Fragment,{children:[c.jsx(Y,{label:"Surface",children:c.jsx("span",{style:{fontSize:"11px",color:"#AEAEB2",lineHeight:1.4},children:o.object?"Marks are placed on the collection object (below).":"Add an object below (Geometry) to use as the surface."})}),c.jsx(Y,{label:"Population",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:1,max:200,step:1,value:o.surfaceCount??24,onChange:u=>e({...o,surfaceCount:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:o.surfaceCount??24})]})}),c.jsx(Y,{label:"Mark Size",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:.1,max:4,step:.1,value:o.surfaceScale??1,onChange:u=>e({...o,surfaceScale:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:[(o.surfaceScale??1).toFixed(1),"×"]})]})}),a&&c.jsx(Y,{label:"Placement",children:c.jsx("button",{onClick:a,style:{padding:"6px 12px",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:"#1D1D1F",fontFamily:"inherit"},onMouseEnter:u=>u.currentTarget.style.background="#E5E5EA",onMouseLeave:u=>u.currentTarget.style.background="#F2F2F7",children:"Randomise"})})]}),o.arrangement==="adjacent"&&c.jsxs(c.Fragment,{children:[c.jsx(Ke,{label:"Population",value:o.scatterCount,min:1,max:200,step:1,onChange:u=>e({...o,scatterCount:u})}),c.jsx(Ct,{label:"Surface size",value:o.scatterDimensions,onChange:u=>e({...o,scatterDimensions:u}),min:.1,max:30,step:.1,axes:["x","z"]}),c.jsx(zo,{label:"Show grid",checked:o.adjacentShowGrid??!1,onChange:u=>e({...o,adjacentShowGrid:u})}),a&&c.jsx(Y,{label:"Placement",children:c.jsx("button",{onClick:a,style:{padding:"6px 12px",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:"#1D1D1F",fontFamily:"inherit"},onMouseEnter:u=>u.currentTarget.style.background="#E5E5EA",onMouseLeave:u=>u.currentTarget.style.background="#F2F2F7",children:"Randomise"})})]}),o.arrangement==="stacking"&&c.jsxs(c.Fragment,{children:[l>=3&&c.jsx(Ke,{label:"Population",value:o.scatterCount,min:1,max:100,step:1,onChange:u=>e({...o,scatterCount:u})}),c.jsx(zo,{label:"Random orientation",checked:o.stackingRandomOrient??!1,onChange:u=>e({...o,stackingRandomOrient:u})})]})]}),o.object?c.jsxs(c.Fragment,{children:[c.jsx(Ja,{config:o.object,onChange:u=>e({...o,object:u}),acc:p}),c.jsx("button",{onClick:()=>e({...o,object:null,scatterExcludeObject:!1}),style:{width:"100%",padding:"9px",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"9px",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:"#3A3A3C",fontFamily:"inherit"},onMouseEnter:u=>u.currentTarget.style.background="#E9E9EE",onMouseLeave:u=>u.currentTarget.style.background="#F2F2F7",children:"Remove object"})]}):c.jsx("button",{onClick:()=>e({...o,object:Ep(`col${t}-object`)}),style:{width:"100%",padding:"9px",background:"#F2F2F7",border:"1px dashed #C7C7CC",borderRadius:"9px",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:"#3A3A3C",fontFamily:"inherit"},onMouseEnter:u=>u.currentTarget.style.background="#E9E9EE",onMouseLeave:u=>u.currentTarget.style.background="#F2F2F7",children:"+ Add object"}),t===1&&l>=3&&r&&s&&c.jsx(Je,{icon:Ne.labels,title:"Labels",open:p.isOpen("Labels"),onToggle:()=>p.toggle("Labels"),children:c.jsx(Ga,{config:r,onChange:s})})]})}function Ja({config:o,onChange:e,acc:t}){const i=o.shape==="custom"&&o.customModelHasMat?["original","plastic","fluid","glass","metal","iridescent","emissive","toon","wireframe"]:La;return c.jsxs(c.Fragment,{children:[c.jsxs(Je,{icon:Ne.spatial,title:"Spatial",open:t.isOpen("Spatial"),onToggle:()=>t.toggle("Spatial"),children:[c.jsx(Ct,{label:"Position",value:o.position,onChange:n=>e({...o,position:n}),min:-20,max:20,step:.1}),c.jsx(Ct,{label:"Size",value:o.size,onChange:n=>e({...o,size:n}),min:.1,max:10,step:.1,lockable:!0}),c.jsx(Ct,{label:"Orientation",value:o.orientation,onChange:n=>e({...o,orientation:n}),min:-180,max:180,step:1})]}),c.jsx(Je,{icon:Ne.shape,title:"Geometry",open:t.isOpen("Geometry"),onToggle:()=>t.toggle("Geometry"),children:c.jsx(Y,{label:"Shape",children:c.jsx(es,{config:o,onChange:n=>e({...o,...n})})})}),c.jsxs(Je,{icon:Ne.material,title:"Material",open:t.isOpen("Material"),onToggle:()=>t.toggle("Material"),children:[c.jsx(Y,{label:"Type",children:c.jsx("select",{value:o.material,onChange:n=>e({...o,material:n.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:i.map(n=>c.jsx("option",{value:n,children:n.charAt(0).toUpperCase()+n.slice(1)},n))})}),c.jsx(Y,{label:"Color",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"2px"},children:[c.jsx("input",{type:"color",value:o.color,onChange:n=>e({...o,color:n.target.value}),style:{width:"36px",height:"32px",border:"1px solid #D1D1D6",borderRadius:"6px",background:"none",cursor:"pointer",padding:"2px"}}),c.jsx("span",{style:{fontSize:"12px",color:"#8E8E93",fontFamily:"monospace"},children:o.color})]})}),c.jsx(Na,{material:o.material,opacity:o.opacity,roughness:o.roughness,metalness:o.metalness,onPatch:n=>e({...o,...n})})]})]})}function Tp({config:o,onChange:e}){const t=vs("Spatial");return c.jsxs(c.Fragment,{children:[c.jsx(qn,{title:"Decoration"}),c.jsx(Ja,{config:o,onChange:e,acc:t})]})}function Ep(o){return{id:o,name:"Object",shape:"box",material:"plastic",color:"#9AA0A6",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}}}function Ke({label:o,value:e,min:t,max:i,step:n,decimals:r=0,suffix:s="",onChange:a}){return c.jsx(Y,{label:o,children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("input",{type:"range",min:t,max:i,step:n,value:e,onChange:l=>a(Number(l.target.value)),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),c.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"38px",textAlign:"right"},children:[e.toFixed(r),s]})]})})}function $o({label:o,value:e,onChange:t}){return c.jsx(Y,{label:o,children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[c.jsx("input",{type:"color",value:e,onChange:i=>t(i.target.value),style:{width:"36px",height:"30px",border:"1px solid #D1D1D6",borderRadius:"6px",background:"none",cursor:"pointer",padding:"2px"}}),c.jsx("span",{style:{fontSize:"12px",color:"#8E8E93",fontFamily:"monospace"},children:e})]})})}function zo({label:o,checked:e,onChange:t}){return c.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"12px",color:"#1D1D1F",cursor:"pointer",padding:"2px 0"},children:[c.jsx("input",{type:"checkbox",checked:e,onChange:i=>t(i.target.checked),style:{accentColor:"#5E5CE6",width:"14px",height:"14px",cursor:"pointer"}}),c.jsx("span",{children:o})]})}function Up({config:o,onChange:e}){const[t,i]=F.useState(!0),[n,r]=F.useState(!1),s=o.sceneTitleShow??!0,a=o.sceneTitleOffset??2.5,l=o.sceneTitleBelow??!1;return c.jsxs(c.Fragment,{children:[c.jsx(qn,{title:"Scene"}),c.jsxs(Je,{icon:Ne.framing,title:"Framing",open:t,onToggle:()=>i(d=>!d),children:[c.jsx(Y,{label:"Background",children:c.jsxs("select",{value:o.background,onChange:d=>e({...o,background:d.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:[c.jsx("option",{value:"dark",children:"Dark"}),c.jsx("option",{value:"color",children:"Solid colour"}),c.jsx("option",{value:"gradient",children:"Gradient"}),c.jsx("option",{value:"hdri",children:"HDRI"}),c.jsx("option",{value:"sky",children:"Sky"}),c.jsx("option",{value:"ocean",children:"Ocean"})]})}),o.background==="color"&&c.jsx($o,{label:"Colour",value:o.bgColor??"#202024",onChange:d=>e({...o,bgColor:d})}),o.background==="gradient"&&c.jsxs(c.Fragment,{children:[c.jsx($o,{label:"Top",value:o.bgGradientTop??"#3a5f8a",onChange:d=>e({...o,bgGradientTop:d})}),c.jsx($o,{label:"Bottom",value:o.bgGradientBottom??"#0a0a12",onChange:d=>e({...o,bgGradientBottom:d})})]}),o.background==="hdri"&&c.jsxs(c.Fragment,{children:[c.jsx(Ke,{label:"Blur",value:o.hdriBlur??0,min:0,max:1,step:.02,decimals:2,onChange:d=>e({...o,hdriBlur:d})}),c.jsx(Ke,{label:"Brightness",value:o.hdriIntensity??1,min:0,max:2,step:.05,decimals:2,onChange:d=>e({...o,hdriIntensity:d})})]}),o.background==="sky"&&c.jsxs(c.Fragment,{children:[c.jsx(Ke,{label:"Sun elevation",value:o.skyElevation??20,min:-5,max:90,step:1,suffix:"°",onChange:d=>e({...o,skyElevation:d})}),c.jsx(Ke,{label:"Sun azimuth",value:o.skyAzimuth??140,min:0,max:360,step:1,suffix:"°",onChange:d=>e({...o,skyAzimuth:d})})]}),c.jsx(Y,{label:"Lighting (HDRI)",children:c.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px"},children:wp.map(d=>{const p=o.hdriPreset===d.value;return c.jsx("button",{onClick:()=>e({...o,hdriPreset:d.value}),style:{padding:"5px 6px",background:p?"#EBF3FF":"#F2F2F7",border:`1px solid ${p?"#A8CAFF":"#E5E5EA"}`,borderRadius:"7px",color:p?"#007AFF":"#6C6C70",cursor:"pointer",fontSize:"11px",fontFamily:"inherit",fontWeight:p?"600":"400",transition:"all 0.1s",textAlign:"center"},children:d.label},d.value)})})}),c.jsx(Ke,{label:"Exposure",value:o.exposure??(o.background==="ocean"?.95:o.background==="dark"?1.35:1.2),min:.2,max:3,step:.05,decimals:2,onChange:d=>e({...o,exposure:d})}),c.jsx(Ke,{label:"Env. rotation",value:o.envRotation??0,min:0,max:360,step:1,suffix:"°",onChange:d=>e({...o,envRotation:d})}),c.jsx(Y,{label:"Atmosphere",children:c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[c.jsx(zo,{label:"Stars",checked:o.stars??!1,onChange:d=>e({...o,stars:d})}),c.jsx(zo,{label:"Grid",checked:o.grid??!1,onChange:d=>e({...o,grid:d})}),c.jsx(zo,{label:"Fog",checked:o.fog??!1,onChange:d=>e({...o,fog:d})})]})}),o.fog&&c.jsxs(c.Fragment,{children:[c.jsx($o,{label:"Fog colour",value:o.fogColor??"#8090a0",onChange:d=>e({...o,fogColor:d})}),c.jsx(Ke,{label:"Fog near",value:o.fogNear??20,min:0,max:100,step:1,onChange:d=>e({...o,fogNear:d})}),c.jsx(Ke,{label:"Fog far",value:o.fogFar??150,min:10,max:400,step:5,onChange:d=>e({...o,fogFar:d})})]}),c.jsxs(Y,{label:"Camera",children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"2px"},children:[c.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",fontWeight:"500"},children:[o.focalLength,"mm"]}),c.jsxs("span",{style:{fontSize:"11px",color:"#AEAEB2"},children:[vp(o.focalLength).toFixed(0),"° fov"]})]}),c.jsx("input",{type:"range",min:14,max:180,step:1,value:o.focalLength,onChange:d=>e({...o,focalLength:Number(d.target.value)}),style:{width:"100%",accentColor:"#34C759",cursor:"pointer"}}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#AEAEB2",marginTop:"2px"},children:[c.jsx("span",{children:"14mm wide"}),c.jsx("span",{children:"180mm tele"})]})]})]}),c.jsxs(Je,{icon:Ne.labels,title:"Label",open:n,onToggle:()=>r(d=>!d),children:[c.jsx(Y,{label:"Show title",children:c.jsx(Po,{options:[{value:"on",label:"On"},{value:"off",label:"Off"}],value:s?"on":"off",onChange:d=>e({...o,sceneTitleShow:d==="on"})})}),s&&c.jsxs(c.Fragment,{children:[c.jsx(Y,{label:"Side",children:c.jsx(Po,{options:[{value:"above",label:"↑ Above"},{value:"below",label:"↓ Below"}],value:l?"below":"above",onChange:d=>e({...o,sceneTitleBelow:d==="below"})})}),c.jsx(Y,{label:"Distance",children:c.jsx("input",{type:"number",min:0,max:15,step:.1,value:a,onChange:d=>e({...o,sceneTitleOffset:Math.max(0,Number(d.target.value)||0)}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"6px",padding:"6px 8px",fontSize:"12px",color:"#1D1D1F",fontFamily:"inherit",outline:"none",boxSizing:"border-box"}})})]}),c.jsxs(Y,{label:"Hide behind objects",children:[c.jsx(Po,{options:[{value:"off",label:"Off"},{value:"full",label:"Full"},{value:"optimized",label:"Optimized"}],value:o.sceneLabelOcclude??"off",onChange:d=>e({...o,sceneLabelOcclude:d})}),c.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",marginTop:"4px",display:"block"},children:"Optimized checks only decorations."})]})]})]})}function Ip({activeElement:o,compositionLevel:e,layers:t,markConfig:i,onMarkChange:n,collection1Config:r,onCollection1Change:s,collection2Config:a,onCollection2Change:l,sceneConfig:d,onSceneChange:p,bindings:u,onBind:f,markLabelConfig:m,onMarkLabelChange:y,colLabelConfig:h,onColLabelChange:x,activeDecorationId:g,decorations:A,onDecorationChange:b,colorMode:C,colorGradient:B,onColorGradientChange:R,colorTint:v,onColorTintChange:S,markOpenSection:M,onReseed:D,models:w}){const K=g!==null?A.find(I=>I.id===g)??null:null;return c.jsx(Oa.Provider,{value:w??Eo,children:c.jsx("div",{style:{padding:"18px 14px",color:"#1D1D1F",fontSize:"13px",display:"flex",flexDirection:"column",gap:"10px",boxSizing:"border-box"},children:K!==null?c.jsx(Tp,{config:K,onChange:b}):o==="mark"?c.jsx(Dp,{config:i,onChange:n,bindings:u,onBind:f,labelConfig:m,onLabelChange:y,colorMode:C,colorGradient:B,onColorGradientChange:R,colorTint:v,onColorTintChange:S,openSection:M,layers:t,compositionLevel:e}):o==="collection1"?c.jsx(sr,{config:r,onChange:s,collectionLevel:1,bindings:u,onBind:f,labelConfig:h,onLabelChange:x,onReseed:D,compositionLevel:e}):o==="collection2"?c.jsx(sr,{config:a,onChange:l,collectionLevel:2,bindings:u,onBind:f,onReseed:D,compositionLevel:e}):o==="scene"?c.jsx(Up,{config:d,onChange:p}):null})})}const Qa=Wn>=125?"uv1":"uv2";var jp=Object.defineProperty,kp=(o,e,t)=>e in o?jp(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,rr=(o,e,t)=>(kp(o,typeof e!="symbol"?e+"":e,t),t);const Pp=(()=>{const o={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new U},up:{value:new U(0,1,0)}},vertexShader:`
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
      #include <${Wn>=154?"colorspace_fragment":"encodings_fragment"}>

      }
    `},e=new co({name:"SkyShader",fragmentShader:o.fragmentShader,vertexShader:o.vertexShader,uniforms:kn.clone(o.uniforms),side:Vn,depthWrite:!1});class t extends We{constructor(){super(new ms(1,1,1),e)}}return rr(t,"SkyShader",o),rr(t,"material",e),t})();function Gn(o){if(typeof TextDecoder<"u")return new TextDecoder().decode(o);let e="";for(let t=0,i=o.length;t<i;t++)e+=String.fromCharCode(o[t]);try{return decodeURIComponent(escape(e))}catch{return e}}const Ut="srgb",st="srgb-linear",ar=3001,zp=3e3;class Rs extends hs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Np(t)}),this.register(function(t){return new Jp(t)}),this.register(function(t){return new $p(t)}),this.register(function(t){return new eA(t)}),this.register(function(t){return new tA(t)}),this.register(function(t){return new Wp(t)}),this.register(function(t){return new Vp(t)}),this.register(function(t){return new Xp(t)}),this.register(function(t){return new Yp(t)}),this.register(function(t){return new Lp(t)}),this.register(function(t){return new Zp(t)}),this.register(function(t){return new Qp(t)}),this.register(function(t){return new _p(t)}),this.register(function(t){return new qp(t)}),this.register(function(t){return new Op(t)}),this.register(function(t){return new oA(t)}),this.register(function(t){return new nA(t)})}load(e,t,i,n){const r=this;let s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){const d=Uo.extractUrlBase(e);s=Uo.resolveURL(d,this.path)}else s=Uo.extractUrlBase(e);this.manager.itemStart(e);const a=function(d){n?n(d):console.error(d),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Lo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(d){try{r.parse(d,s,function(p){t(p),r.manager.itemEnd(e)},a)}catch(p){a(p)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r;const s={},a={};if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Gn(new Uint8Array(e.slice(0,4)))===Wa){try{s[_.KHR_BINARY_GLTF]=new iA(e)}catch(p){n&&n(p);return}r=JSON.parse(s[_.KHR_BINARY_GLTF].content)}else r=JSON.parse(Gn(new Uint8Array(e)));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new gA(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const p=this.pluginCallbacks[d](l);p.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[p.name]=p,s[p.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const p=r.extensionsUsed[d],u=r.extensionsRequired||[];switch(p){case _.KHR_MATERIALS_UNLIT:s[p]=new Gp;break;case _.KHR_DRACO_MESH_COMPRESSION:s[p]=new sA(r,this.dracoLoader);break;case _.KHR_TEXTURE_TRANSFORM:s[p]=new rA;break;case _.KHR_MESH_QUANTIZATION:s[p]=new aA;break;default:u.indexOf(p)>=0&&a[p]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}l.setExtensions(s),l.setPlugins(a),l.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}}function Hp(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const _={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Op{constructor(e){this.parser=e,this.name=_.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let d;const p=new se(16777215);l.color!==void 0&&p.setRGB(l.color[0],l.color[1],l.color[2],st);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":d=new hf(p),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new mf(p),d.distance=u;break;case"spot":d=new Af(p),d.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,d.angle=l.spot.outerConeAngle,d.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return d.position.set(0,0,0),d.decay=2,nt(d,l),l.intensity!==void 0&&(d.intensity=l.intensity),d.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(d),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class Gp{constructor(){this.name=_.KHR_MATERIALS_UNLIT}getMaterialType(){return it}extendParams(e,t,i){const n=[];e.color=new se(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],st),e.opacity=s[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,Ut))}return Promise.all(n)}}class Lp{constructor(e){this.parser=e,this.name=_.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Np{constructor(e){this.parser=e,this.name=_.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fe}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const a=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ee(a,a)}return Promise.all(r)}}class Jp{constructor(e){this.parser=e,this.name=_.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fe}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Qp{constructor(e){this.parser=e,this.name=_.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fe}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class Wp{constructor(e){this.parser=e,this.name=_.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fe}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new se(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=n.extensions[this.name];if(s.sheenColorFactor!==void 0){const a=s.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],st)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",s.sheenColorTexture,Ut)),s.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class Vp{constructor(e){this.parser=e,this.name=_.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fe}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class Xp{constructor(e){this.parser=e,this.name=_.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fe}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const a=s.attenuationColor||[1,1,1];return t.attenuationColor=new se().setRGB(a[0],a[1],a[2],st),Promise.all(r)}}class Yp{constructor(e){this.parser=e,this.name=_.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fe}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Zp{constructor(e){this.parser=e,this.name=_.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fe}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",s.specularTexture));const a=s.specularColorFactor||[1,1,1];return t.specularColor=new se().setRGB(a[0],a[1],a[2],st),s.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",s.specularColorTexture,Ut)),Promise.all(r)}}class qp{constructor(e){this.parser=e,this.name=_.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fe}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];return t.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",s.bumpTexture)),Promise.all(r)}}class _p{constructor(e){this.parser=e,this.name=_.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fe}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(r)}}class $p{constructor(e){this.parser=e,this.name=_.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const r=n.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class eA{constructor(e){this.parser=e,this.name=_.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],a=n.images[s.source];let l=i.textureLoader;if(a.uri){const d=i.options.manager.getHandler(a.uri);d!==null&&(l=d)}return this.detectSupport().then(function(d){if(d)return i.loadTextureImage(e,s.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class tA{constructor(e){this.parser=e,this.name=_.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],a=n.images[s.source];let l=i.textureLoader;if(a.uri){const d=i.options.manager.getHandler(a.uri);d!==null&&(l=d)}return this.detectSupport().then(function(d){if(d)return i.loadTextureImage(e,s.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class oA{constructor(e){this.name=_.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=n.byteOffset||0,d=n.byteLength||0,p=n.count,u=n.byteStride,f=new Uint8Array(a,l,d);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(p,u,f,n.mode,n.filter).then(function(m){return m.buffer}):s.ready.then(function(){const m=new ArrayBuffer(p*u);return s.decodeGltfBuffer(new Uint8Array(m),p,u,f,n.mode,n.filter),m})})}else return null}}class nA{constructor(e){this.name=_.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const d of n.primitives)if(d.mode!==Ue.TRIANGLES&&d.mode!==Ue.TRIANGLE_STRIP&&d.mode!==Ue.TRIANGLE_FAN&&d.mode!==void 0)return null;const s=i.extensions[this.name].attributes,a=[],l={};for(const d in s)a.push(this.parser.getDependency("accessor",s[d]).then(p=>(l[d]=p,l[d])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(d=>{const p=d.pop(),u=p.isGroup?p.children:[p],f=d[0].count,m=[];for(const y of u){const h=new X,x=new U,g=new $e,A=new U(1,1,1),b=new gf(y.geometry,y.material,f);for(let C=0;C<f;C++)l.TRANSLATION&&x.fromBufferAttribute(l.TRANSLATION,C),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,C),l.SCALE&&A.fromBufferAttribute(l.SCALE,C),b.setMatrixAt(C,h.compose(x,g,A));for(const C in l)if(C==="_COLOR_0"){const B=l[C];b.instanceColor=new xf(B.array,B.itemSize,B.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&y.geometry.setAttribute(C,l[C]);gs.prototype.copy.call(b,y),this.parser.assignFinalMaterial(b),m.push(b)}return p.isGroup?(p.clear(),p.add(...m),p):m[0]}))}}const Wa="glTF",go=12,lr={JSON:1313821514,BIN:5130562};class iA{constructor(e){this.name=_.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,go);if(this.header={magic:Gn(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Wa)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-go,n=new DataView(e,go);let r=0;for(;r<i;){const s=n.getUint32(r,!0);r+=4;const a=n.getUint32(r,!0);if(r+=4,a===lr.JSON){const l=new Uint8Array(e,go+r,s);this.content=Gn(l)}else if(a===lr.BIN){const l=go+r;this.body=e.slice(l,l+s)}r+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class sA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,a={},l={},d={};for(const p in s){const u=ts[p]||p.toLowerCase();a[u]=s[p]}for(const p in e.attributes){const u=ts[p]||p.toLowerCase();if(s[p]!==void 0){const f=i.accessors[e.attributes[p]],m=so[f.componentType];d[u]=m.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(p){return new Promise(function(u,f){n.decodeDracoFile(p,function(m){for(const y in m.attributes){const h=m.attributes[y],x=l[y];x!==void 0&&(h.normalized=x)}u(m)},a,d,st,f)})})}}class rA{constructor(){this.name=_.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class aA{constructor(){this.name=_.KHR_MESH_QUANTIZATION}}class Va extends Hf{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let s=0;s!==n;s++)t[s]=i[r+s];return t}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=a*2,d=a*3,p=n-t,u=(i-t)/p,f=u*u,m=f*u,y=e*d,h=y-d,x=-2*m+3*f,g=m-f,A=1-x,b=g-f+u;for(let C=0;C!==a;C++){const B=s[h+C+a],R=s[h+C+l]*p,v=s[y+C+a],S=s[y+C]*p;r[C]=A*B+b*R+x*v+g*S}return r}}const lA=new $e;class cA extends Va{interpolate_(e,t,i,n){const r=super.interpolate_(e,t,i,n);return lA.fromArray(r).normalize().toArray(r),r}}const Ue={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},so={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},cr={9728:Ae,9729:be,9984:vf,9985:Bf,9986:Ff,9987:Da},ur={33071:vt,33648:Rf,10497:yt},fi={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ts={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...Wn>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ut={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uA={CUBICSPLINE:void 0,LINEAR:Ta,STEP:zf},pi={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dA(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Le({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Pn})),o.DefaultMaterial}function Mt(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function nt(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fA(o,e,t){let i=!1,n=!1,r=!1;for(let d=0,p=e.length;d<p;d++){const u=e[d];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(o);const s=[],a=[],l=[];for(let d=0,p=e.length;d<p;d++){const u=e[d];if(i){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):o.attributes.position;s.push(f)}if(n){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):o.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):o.attributes.color;l.push(f)}}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(l)]).then(function(d){const p=d[0],u=d[1],f=d[2];return i&&(o.morphAttributes.position=p),n&&(o.morphAttributes.normal=u),r&&(o.morphAttributes.color=f),o.morphTargetsRelative=!0,o})}function pA(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function AA(o){let e;const t=o.extensions&&o.extensions[_.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ai(t.attributes):e=o.indices+":"+Ai(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,n=o.targets.length;i<n;i++)e+=":"+Ai(o.targets[i]);return e}function Ai(o){let e="";const t=Object.keys(o).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+o[t[i]]+";";return e}function os(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mA(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const hA=new X;class gA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Hp,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,r=-1;typeof navigator<"u"&&typeof navigator.userAgent<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,r=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&r<98?this.textureLoader=new yf(this.options.manager):this.textureLoader=new bf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Lo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(s){const a={scene:s[0][n.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:n.asset,parser:i,userData:{}};return Mt(r,a,n),nt(a,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n].joints;for(let a=0,l=s.length;a<l;a++)e[s[a]].isBone=!0}for(let n=0,r=e.length;n<r;n++){const s=e[n];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(i[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),r=(s,a)=>{const l=this.associations.get(s);l!=null&&this.associations.set(a,l);for(const[d,p]of s.children.entries())r(p,a.children[d])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,s){return i.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[_.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(r,s){i.load(Uo.resolveURL(t.uri,n.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const s=fi[n.type],a=so[n.componentType],l=n.normalized===!0,d=new a(n.count*s);return Promise.resolve(new pe(d,s,l))}const r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(s){const a=s[0],l=fi[n.type],d=so[n.componentType],p=d.BYTES_PER_ELEMENT,u=p*l,f=n.byteOffset||0,m=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,y=n.normalized===!0;let h,x;if(m&&m!==u){const g=Math.floor(f/m),A="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+g+":"+n.count;let b=t.cache.get(A);b||(h=new d(a,g*m,n.count*m/p),b=new Cf(h,m/p),t.cache.add(A,b)),x=new Et(b,l,f%m/p,y)}else a===null?h=new d(n.count*l):h=new d(a,f,n.count*l),x=new pe(h,l,y);if(n.sparse!==void 0){const g=fi.SCALAR,A=so[n.sparse.indices.componentType],b=n.sparse.indices.byteOffset||0,C=n.sparse.values.byteOffset||0,B=new A(s[1],b,n.sparse.count*g),R=new d(s[2],C,n.sparse.count*l);a!==null&&(x=new pe(x.array.slice(),x.itemSize,x.normalized));for(let v=0,S=B.length;v<S;v++){const M=B[v];if(x.setX(M,R[v*l]),l>=2&&x.setY(M,R[v*l+1]),l>=3&&x.setZ(M,R[v*l+2]),l>=4&&x.setW(M,R[v*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,s=t.images[r];let a=this.textureLoader;if(s.uri){const l=i.manager.getHandler(s.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const n=this,r=this.json,s=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const d=this.loadImageSource(t,i).then(function(p){p.flipY=!1,p.name=s.name||a.name||"",p.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(p.name=a.uri);const f=(r.samplers||{})[s.sampler]||{};return p.magFilter=cr[f.magFilter]||be,p.minFilter=cr[f.minFilter]||Da,p.wrapS=ur[f.wrapS]||yt,p.wrapT=ur[f.wrapT]||yt,n.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[l]=d,d}loadImageSource(e,t){const i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const s=n.images[e],a=self.URL||self.webkitURL;let l=s.uri||"",d=!1;if(s.bufferView!==void 0)l=i.getDependency("bufferView",s.bufferView).then(function(u){d=!0;const f=new Blob([u],{type:s.mimeType});return l=a.createObjectURL(f),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(l).then(function(u){return new Promise(function(f,m){let y=f;t.isImageBitmapLoader===!0&&(y=function(h){const x=new Ys(h);x.needsUpdate=!0,f(x)}),t.load(Uo.resolveURL(u,r.path),y,void 0,m)})}).then(function(u){return d===!0&&a.revokeObjectURL(l),nt(u,s),u.userData.mimeType=s.mimeType||mA(s.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=p,p}assignTexture(e,t,i,n){const r=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(s=s.clone(),s.channel=i.texCoord),r.extensions[_.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[_.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(s);s=r.extensions[_.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),r.associations.set(s,l)}}return n!==void 0&&(typeof n=="number"&&(n=n===ar?Ut:st),"colorSpace"in s?s.colorSpace=n:s.encoding=n===Ut?ar:zp),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Sf,ri.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Mf,ri.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(n||r||s){let a="ClonedMaterial:"+i.uuid+":";n&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),s&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Le}loadMaterial(e){const t=this,i=this.json,n=this.extensions,r=i.materials[e];let s;const a={},l=r.extensions||{},d=[];if(l[_.KHR_MATERIALS_UNLIT]){const u=n[_.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),d.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new se(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],st),a.opacity=f[3]}u.baseColorTexture!==void 0&&d.push(t.assignTexture(a,"map",u.baseColorTexture,Ut)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),d.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),s=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=kt);const p=r.alphaMode||pi.OPAQUE;if(p===pi.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,p===pi.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==it&&(d.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ee(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&s!==it&&(d.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==it){const u=r.emissiveFactor;a.emissive=new se().setRGB(u[0],u[1],u[2],st)}return r.emissiveTexture!==void 0&&s!==it&&d.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ut)),Promise.all(d).then(function(){const u=new s(a);return r.name&&(u.name=r.name),nt(u,r),t.associations.set(u,{materials:e}),r.extensions&&Mt(n,u,r),u})}createUniqueName(e){const t=Kf.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function r(a){return i[_.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return dr(l,a,t)})}const s=[];for(let a=0,l=e.length;a<l;a++){const d=e[a],p=AA(d),u=n[p];if(u)s.push(u.promise);else{let f;d.extensions&&d.extensions[_.KHR_DRACO_MESH_COMPRESSION]?f=r(d):f=dr(new Qe,d,t),n[p]={primitive:d,promise:f},s.push(f)}}return Promise.all(s)}loadMesh(e){const t=this,i=this.json,n=this.extensions,r=i.meshes[e],s=r.primitives,a=[];for(let l=0,d=s.length;l<d;l++){const p=s[l].material===void 0?dA(this.cache):this.getDependency("material",s[l].material);a.push(p)}return a.push(t.loadGeometries(s)),Promise.all(a).then(function(l){const d=l.slice(0,l.length-1),p=l[l.length-1],u=[];for(let m=0,y=p.length;m<y;m++){const h=p[m],x=s[m];let g;const A=d[m];if(x.mode===Ue.TRIANGLES||x.mode===Ue.TRIANGLE_STRIP||x.mode===Ue.TRIANGLE_FAN||x.mode===void 0)g=r.isSkinnedMesh===!0?new wf(h,A):new We(h,A),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),x.mode===Ue.TRIANGLE_STRIP?g.geometry=Xs(g.geometry,Of):x.mode===Ue.TRIANGLE_FAN&&(g.geometry=Xs(g.geometry,Gf));else if(x.mode===Ue.LINES)g=new Df(h,A);else if(x.mode===Ue.LINE_STRIP)g=new Tf(h,A);else if(x.mode===Ue.LINE_LOOP)g=new Ef(h,A);else if(x.mode===Ue.POINTS)g=new Uf(h,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(g.geometry.morphAttributes).length>0&&pA(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),nt(g,r),x.extensions&&Mt(n,g,x),t.assignFinalMaterial(g),u.push(g)}for(let m=0,y=u.length;m<y;m++)t.associations.set(u[m],{meshes:e,primitives:m});if(u.length===1)return r.extensions&&Mt(n,u[0],r),u[0];const f=new Io;r.extensions&&Mt(n,f,r),t.associations.set(f,{meshes:e});for(let m=0,y=u.length;m<y;m++)f.add(u[m]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new xs(bt.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new If(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),nt(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const r=n.pop(),s=n,a=[],l=[];for(let d=0,p=s.length;d<p;d++){const u=s[d];if(u){a.push(u);const f=new X;r!==null&&f.fromArray(r.array,d*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new jf(a,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,s=[],a=[],l=[],d=[],p=[];for(let u=0,f=n.channels.length;u<f;u++){const m=n.channels[u],y=n.samplers[m.sampler],h=m.target,x=h.node,g=n.parameters!==void 0?n.parameters[y.input]:y.input,A=n.parameters!==void 0?n.parameters[y.output]:y.output;h.node!==void 0&&(s.push(this.getDependency("node",x)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",A)),d.push(y),p.push(h))}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(l),Promise.all(d),Promise.all(p)]).then(function(u){const f=u[0],m=u[1],y=u[2],h=u[3],x=u[4],g=[];for(let A=0,b=f.length;A<b;A++){const C=f[A],B=m[A],R=y[A],v=h[A],S=x[A];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const M=i._createAnimationTracks(C,B,R,v,S);if(M)for(let D=0;D<M.length;D++)g.push(M[D])}return new kf(r,void 0,g)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){const s=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&s.traverse(function(a){if(a.isMesh)for(let l=0,d=n.weights.length;l<d;l++)a.morphTargetInfluences[l]=n.weights[l]}),s})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),s=[],a=n.children||[];for(let d=0,p=a.length;d<p;d++)s.push(i.getDependency("node",a[d]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(s),l]).then(function(d){const p=d[0],u=d[1],f=d[2];f!==null&&p.traverse(function(m){m.isSkinnedMesh&&m.bind(f,hA)});for(let m=0,y=u.length;m<y;m++)p.add(u[m]);return p})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],s=r.name?n.createUniqueName(r.name):"",a=[],l=n._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(n.getDependency("camera",r.camera).then(function(d){return n._getNodeRef(n.cameraCache,r.camera,d)})),n._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){a.push(d)}),this.nodeCache[e]=Promise.all(a).then(function(d){let p;if(r.isBone===!0?p=new Pf:d.length>1?p=new Io:d.length===1?p=d[0]:p=new gs,p!==d[0])for(let u=0,f=d.length;u<f;u++)p.add(d[u]);if(r.name&&(p.userData.name=r.name,p.name=s),nt(p,r),r.extensions&&Mt(i,p,r),r.matrix!==void 0){const u=new X;u.fromArray(r.matrix),p.applyMatrix4(u)}else r.translation!==void 0&&p.position.fromArray(r.translation),r.rotation!==void 0&&p.quaternion.fromArray(r.rotation),r.scale!==void 0&&p.scale.fromArray(r.scale);return n.associations.has(p)||n.associations.set(p,{}),n.associations.get(p).nodes=e,p}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,r=new Io;i.name&&(r.name=n.createUniqueName(i.name)),nt(r,i),i.extensions&&Mt(t,r,i);const s=i.nodes||[],a=[];for(let l=0,d=s.length;l<d;l++)a.push(n.getDependency("node",s[l]));return Promise.all(a).then(function(l){for(let p=0,u=l.length;p<u;p++)r.add(l[p]);const d=p=>{const u=new Map;for(const[f,m]of n.associations)(f instanceof ri||f instanceof Ys)&&u.set(f,m);return p.traverse(f=>{const m=n.associations.get(f);m!=null&&u.set(f,m)}),u};return n.associations=d(r),r})}_createAnimationTracks(e,t,i,n,r){const s=[],a=e.name?e.name:e.uuid,l=[];ut[r.path]===ut.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let d;switch(ut[r.path]){case ut.weights:d=qs;break;case ut.rotation:d=_s;break;case ut.position:case ut.scale:d=Zs;break;default:switch(i.itemSize){case 1:d=qs;break;case 2:case 3:default:d=Zs;break}break}const p=n.interpolation!==void 0?uA[n.interpolation]:Ta,u=this._getArrayFromAccessor(i);for(let f=0,m=l.length;f<m;f++){const y=new d(l[f]+"."+ut[r.path],t.array,u,p);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),s.push(y)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=os(t.constructor),n=new Float32Array(t.length);for(let r=0,s=t.length;r<s;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const n=this instanceof _s?cA:Va;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function xA(o,e,t){const i=e.attributes,n=new de;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,d=a.max;if(l!==void 0&&d!==void 0){if(n.set(new U(l[0],l[1],l[2]),new U(d[0],d[1],d[2])),a.normalized){const p=os(so[a.componentType]);n.min.multiplyScalar(p),n.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new U,l=new U;for(let d=0,p=r.length;d<p;d++){const u=r[d];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],m=f.min,y=f.max;if(m!==void 0&&y!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(y[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(y[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(y[2]))),f.normalized){const h=os(so[f.componentType]);l.multiplyScalar(h)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(a)}o.boundingBox=n;const s=new Xn;n.getCenter(s.center),s.radius=n.min.distanceTo(n.max)/2,o.boundingSphere=s}function dr(o,e,t){const i=e.attributes,n=[];function r(s,a){return t.getDependency("accessor",s).then(function(l){o.setAttribute(a,l)})}for(const s in i){const a=ts[s]||s.toLowerCase();a in o.attributes||n.push(r(i[s],a))}if(e.indices!==void 0&&!o.index){const s=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});n.push(s)}return nt(o,e),xA(o,e,t),Promise.all(n).then(function(){return e.targets!==void 0?fA(o,e.targets,t):o})}const mi=new WeakMap;class yA extends hs{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,n){const r=new Lo(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,s=>{const a={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(s,a).then(t).catch(n)},i,n)}decodeDracoFile(e,t,i,n){const r={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!i};this.decodeGeometry(e,r).then(t)}decodeGeometry(e,t){for(const l in t.attributeTypes){const d=t.attributeTypes[l];d.BYTES_PER_ELEMENT!==void 0&&(t.attributeTypes[l]=d.name)}const i=JSON.stringify(t);if(mi.has(e)){const l=mi.get(e);if(l.key===i)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const r=this.workerNextTaskID++,s=e.byteLength,a=this._getWorker(r,s).then(l=>(n=l,new Promise((d,p)=>{n._callbacks[r]={resolve:d,reject:p},n.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{n&&r&&this._releaseTask(n,r)}),mi.set(e,{key:i,promise:a}),a}_createGeometry(e){const t=new Qe;e.index&&t.setIndex(new pe(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const n=e.attributes[i],r=n.name,s=n.array,a=n.itemSize;t.setAttribute(r,new pe(s,a))}return t}_loadLibrary(e,t){const i=new Lo(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((n,r)=>{i.load(e,n,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const n=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const r=bA.toString(),s=["/* draco decoder */",n,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([s]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(r){const s=r.data;switch(s.type){case"decode":n._callbacks[s.id].resolve(s);break;case"error":n._callbacks[s.id].reject(s);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+s.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,r){return n._taskLoad>r._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function bA(){let o,e;onmessage=function(s){const a=s.data;switch(a.type){case"init":o=a.decoderConfig,e=new Promise(function(p){o.onModuleLoaded=function(u){p({draco:u})},DracoDecoderModule(o)});break;case"decode":const l=a.buffer,d=a.taskConfig;e.then(p=>{const u=p.draco,f=new u.Decoder,m=new u.DecoderBuffer;m.Init(new Int8Array(l),l.byteLength);try{const y=t(u,f,m,d),h=y.attributes.map(x=>x.array.buffer);y.index&&h.push(y.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:y},h)}catch(y){console.error(y),self.postMessage({type:"error",id:a.id,error:y.message})}finally{u.destroy(m),u.destroy(f)}});break}};function t(s,a,l,d){const p=d.attributeIDs,u=d.attributeTypes;let f,m;const y=a.GetEncodedGeometryType(l);if(y===s.TRIANGULAR_MESH)f=new s.Mesh,m=a.DecodeBufferToMesh(l,f);else if(y===s.POINT_CLOUD)f=new s.PointCloud,m=a.DecodeBufferToPointCloud(l,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!m.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+m.error_msg());const h={index:null,attributes:[]};for(const x in p){const g=self[u[x]];let A,b;if(d.useUniqueIDs)b=p[x],A=a.GetAttributeByUniqueId(f,b);else{if(b=a.GetAttributeId(f,s[p[x]]),b===-1)continue;A=a.GetAttribute(f,b)}h.attributes.push(n(s,a,f,x,g,A))}return y===s.TRIANGULAR_MESH&&(h.index=i(s,a,f)),s.destroy(f),h}function i(s,a,l){const p=l.num_faces()*3,u=p*4,f=s._malloc(u);a.GetTrianglesUInt32Array(l,u,f);const m=new Uint32Array(s.HEAPF32.buffer,f,p).slice();return s._free(f),{array:m,itemSize:1}}function n(s,a,l,d,p,u){const f=u.num_components(),y=l.num_points()*f,h=y*p.BYTES_PER_ELEMENT,x=r(s,p),g=s._malloc(h);a.GetAttributeDataArrayForAllPoints(l,u,x,h,g);const A=new p(s.HEAPF32.buffer,g,y).slice();return s._free(g),{name:d,array:A,itemSize:f}}function r(s,a){switch(a){case Float32Array:return s.DT_FLOAT32;case Int8Array:return s.DT_INT8;case Int16Array:return s.DT_INT16;case Int32Array:return s.DT_INT32;case Uint8Array:return s.DT_UINT8;case Uint16Array:return s.DT_UINT16;case Uint32Array:return s.DT_UINT32}}}const fr=new de,en=new U;class Ss extends Lf{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new $s(e,3)),this.setAttribute("uv",new $s(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new qi(t,6,1);return this.setAttribute("instanceStart",new Et(i,3,0)),this.setAttribute("instanceEnd",new Et(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));const n=new qi(i,t*2,1);return this.setAttribute("instanceColorStart",new Et(n,t,0)),this.setAttribute("instanceColorEnd",new Et(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Nf(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new de);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),fr.setFromBufferAttribute(t),this.boundingBox.union(fr))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let n=0;for(let r=0,s=e.count;r<s;r++)en.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(en)),en.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(en));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class Xa extends Ss{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let n=0;n<t;n+=3)i[2*n]=e[n],i[2*n+1]=e[n+1],i[2*n+2]=e[n+2],i[2*n+3]=e[n+3],i[2*n+4]=e[n+4],i[2*n+5]=e[n+5];return super.setPositions(i),this}setColors(e,t=3){const i=e.length-t,n=new Float32Array(2*i);if(t===3)for(let r=0;r<i;r+=t)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];else for(let r=0;r<i;r+=t)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5],n[2*r+6]=e[r+6],n[2*r+7]=e[r+7];return super.setColors(n,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class Ms extends co{constructor(e){super({type:"LineMaterial",uniforms:kn.clone(kn.merge([er.common,er.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ee(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
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
					#include <${Wn>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const hi=new Pe,pr=new U,Ar=new U,he=new Pe,ge=new Pe,Ye=new Pe,gi=new U,xi=new X,xe=new _e,mr=new U,tn=new de,on=new Xn,Ze=new Pe;let qe,It;function hr(o,e,t){return Ze.set(0,0,-e,1).applyMatrix4(o.projectionMatrix),Ze.multiplyScalar(1/Ze.w),Ze.x=It/t.width,Ze.y=It/t.height,Ze.applyMatrix4(o.projectionMatrixInverse),Ze.multiplyScalar(1/Ze.w),Math.abs(Math.max(Ze.x,Ze.y))}function CA(o,e){const t=o.matrixWorld,i=o.geometry,n=i.attributes.instanceStart,r=i.attributes.instanceEnd,s=Math.min(i.instanceCount,n.count);for(let a=0,l=s;a<l;a++){xe.start.fromBufferAttribute(n,a),xe.end.fromBufferAttribute(r,a),xe.applyMatrix4(t);const d=new U,p=new U;qe.distanceSqToSegment(xe.start,xe.end,p,d),p.distanceTo(d)<It*.5&&e.push({point:p,pointOnLine:d,distance:qe.origin.distanceTo(p),object:o,face:null,faceIndex:a,uv:null,[Qa]:null})}}function FA(o,e,t){const i=e.projectionMatrix,r=o.material.resolution,s=o.matrixWorld,a=o.geometry,l=a.attributes.instanceStart,d=a.attributes.instanceEnd,p=Math.min(a.instanceCount,l.count),u=-e.near;qe.at(1,Ye),Ye.w=1,Ye.applyMatrix4(e.matrixWorldInverse),Ye.applyMatrix4(i),Ye.multiplyScalar(1/Ye.w),Ye.x*=r.x/2,Ye.y*=r.y/2,Ye.z=0,gi.copy(Ye),xi.multiplyMatrices(e.matrixWorldInverse,s);for(let f=0,m=p;f<m;f++){if(he.fromBufferAttribute(l,f),ge.fromBufferAttribute(d,f),he.w=1,ge.w=1,he.applyMatrix4(xi),ge.applyMatrix4(xi),he.z>u&&ge.z>u)continue;if(he.z>u){const b=he.z-ge.z,C=(he.z-u)/b;he.lerp(ge,C)}else if(ge.z>u){const b=ge.z-he.z,C=(ge.z-u)/b;ge.lerp(he,C)}he.applyMatrix4(i),ge.applyMatrix4(i),he.multiplyScalar(1/he.w),ge.multiplyScalar(1/ge.w),he.x*=r.x/2,he.y*=r.y/2,ge.x*=r.x/2,ge.y*=r.y/2,xe.start.copy(he),xe.start.z=0,xe.end.copy(ge),xe.end.z=0;const h=xe.closestPointToPointParameter(gi,!0);xe.at(h,mr);const x=bt.lerp(he.z,ge.z,h),g=x>=-1&&x<=1,A=gi.distanceTo(mr)<It*.5;if(g&&A){xe.start.fromBufferAttribute(l,f),xe.end.fromBufferAttribute(d,f),xe.start.applyMatrix4(s),xe.end.applyMatrix4(s);const b=new U,C=new U;qe.distanceSqToSegment(xe.start,xe.end,C,b),t.push({point:C,pointOnLine:b,distance:qe.origin.distanceTo(C),object:o,face:null,faceIndex:f,uv:null,[Qa]:null})}}}class Ya extends We{constructor(e=new Ss,t=new Ms({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let s=0,a=0,l=t.count;s<l;s++,a+=2)pr.fromBufferAttribute(t,s),Ar.fromBufferAttribute(i,s),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+pr.distanceTo(Ar);const r=new qi(n,2,1);return e.setAttribute("instanceDistanceStart",new Et(r,1,0)),e.setAttribute("instanceDistanceEnd",new Et(r,1,1)),this}raycast(e,t){const i=this.material.worldUnits,n=e.camera;n===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;qe=e.ray;const s=this.matrixWorld,a=this.geometry,l=this.material;It=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),on.copy(a.boundingSphere).applyMatrix4(s);let d;if(i)d=It*.5;else{const u=Math.max(n.near,on.distanceToPoint(qe.origin));d=hr(n,u,l.resolution)}if(on.radius+=d,qe.intersectsSphere(on)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),tn.copy(a.boundingBox).applyMatrix4(s);let p;if(i)p=It*.5;else{const u=Math.max(n.near,tn.distanceToPoint(qe.origin));p=hr(n,u,l.resolution)}tn.expandByScalar(p),qe.intersectsBox(tn)!==!1&&(i?CA(this,t):FA(this,n,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(hi),this.material.uniforms.resolution.value.set(hi.z,hi.w))}}class BA extends Ya{constructor(e=new Xa,t=new Ms({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}let nn;const yi=()=>{if(nn)return nn;const o="B9h9z9tFBBBF8fL9gBB9gLaaaaaFa9gEaaaB9gFaFa9gEaaaFaEMcBFFFGGGEIIILF9wFFFLEFBFKNFaFCx/IFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBF8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBGy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBEn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBIi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBKI9z9iqlBOc+x8ycGBM/qQFTa8jUUUUBCU/EBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAGTkUUUBRNCUoBAG9uC/wgBZHKCUGAKCUG9JyRVAECFJRICBRcGXEXAcAF9PQFAVAFAclAcAVJAF9JyRMGXGXAG9FQBAMCbJHKC9wZRSAKCIrCEJCGrRQANCUGJRfCBRbAIRTEXGXAOATlAQ9PQBCBRISEMATAQJRIGXAS9FQBCBRtCBREEXGXAOAIlCi9PQBCBRISLMANCU/CBJAEJRKGXGXGXGXGXATAECKrJ2BBAtCKZrCEZfIBFGEBMAKhB83EBAKCNJhB83EBSEMAKAI2BIAI2BBHmCKrHYAYCE6HYy86BBAKCFJAICIJAYJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCGJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCEJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCIJAYAmJHY2BBAI2BFHmCKrHPAPCE6HPy86BBAKCLJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCKJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCOJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCNJAYAmJHY2BBAI2BGHmCKrHPAPCE6HPy86BBAKCVJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCcJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCMJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCSJAYAmJHm2BBAI2BEHICKrHYAYCE6HYy86BBAKCQJAmAYJHm2BBAICIrCEZHYAYCE6HYy86BBAKCfJAmAYJHm2BBAICGrCEZHYAYCE6HYy86BBAKCbJAmAYJHK2BBAICEZHIAICE6HIy86BBAKAIJRISGMAKAI2BNAI2BBHmCIrHYAYCb6HYy86BBAKCFJAICNJAYJHY2BBAmCbZHmAmCb6Hmy86BBAKCGJAYAmJHm2BBAI2BFHYCIrHPAPCb6HPy86BBAKCEJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCIJAmAYJHm2BBAI2BGHYCIrHPAPCb6HPy86BBAKCLJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCKJAmAYJHm2BBAI2BEHYCIrHPAPCb6HPy86BBAKCOJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCNJAmAYJHm2BBAI2BIHYCIrHPAPCb6HPy86BBAKCVJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCcJAmAYJHm2BBAI2BLHYCIrHPAPCb6HPy86BBAKCMJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCSJAmAYJHm2BBAI2BKHYCIrHPAPCb6HPy86BBAKCQJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCfJAmAYJHm2BBAI2BOHICIrHYAYCb6HYy86BBAKCbJAmAYJHK2BBAICbZHIAICb6HIy86BBAKAIJRISFMAKAI8pBB83BBAKCNJAICNJ8pBB83BBAICTJRIMAtCGJRtAECTJHEAS9JQBMMGXAIQBCBRISEMGXAM9FQBANAbJ2BBRtCBRKAfREEXAEANCU/CBJAKJ2BBHTCFrCBATCFZl9zAtJHt86BBAEAGJREAKCFJHKAM9HQBMMAfCFJRfAIRTAbCFJHbAG9HQBMMABAcAG9sJANCUGJAMAG9sTkUUUBpANANCUGJAMCaJAG9sJAGTkUUUBpMAMCBAIyAcJRcAIQBMC9+RKSFMCBC99AOAIlAGCAAGCA9Ly6yRKMALCU/EBJ8kUUUUBAKM+OmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUFT+JUUUBpALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM+lLKFaF99GaG99FaG99GXGXAGCI9HQBAF9FQFEXGXGX9DBBB8/9DBBB+/ABCGJHG1BB+yAB1BBHE+yHI+L+TABCFJHL1BBHK+yHO+L+THN9DBBBB9gHVyAN9DBB/+hANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE86BBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG86BBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG86BBABCIJRBAFCaJHFQBSGMMAF9FQBEXGXGX9DBBB8/9DBBB+/ABCIJHG8uFB+yAB8uFBHE+yHI+L+TABCGJHL8uFBHK+yHO+L+THN9DBBBB9gHVyAN9DB/+g6ANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE87FBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG87FBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG87FBABCNJRBAFCaJHFQBMMM/SEIEaE99EaF99GXAF9FQBCBREABRIEXGXGX9D/zI818/AICKJ8uFBHLCEq+y+VHKAI8uFB+y+UHO9DB/+g6+U9DBBB8/9DBBB+/AO9DBBBB9gy+SHN+L9DBBB9P9d9FQBAN+oRVSFMCUUUU94RVMAICIJ8uFBRcAICGJ8uFBRMABALCFJCEZAEqCFWJAV87FBGXGXAKAM+y+UHN9DB/+g6+U9DBBB8/9DBBB+/AN9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRMSFMCUUUU94RMMABALCGJCEZAEqCFWJAM87FBGXGXAKAc+y+UHK9DB/+g6+U9DBBB8/9DBBB+/AK9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRcSFMCUUUU94RcMABALCaJCEZAEqCFWJAc87FBGXGX9DBBU8/AOAO+U+TANAN+U+TAKAK+U+THO9DBBBBAO9DBBBB9gy+R9DB/+g6+U9DBBB8/+SHO+L9DBBB9P9d9FQBAO+oRcSFMCUUUU94RcMABALCEZAEqCFWJAc87FBAICNJRIAECIJREAFCaJHFQBMMM9JBGXAGCGrAF9sHF9FQBEXABAB8oGBHGCNWCN91+yAGCi91CnWCUUU/8EJ+++U84GBABCIJRBAFCaJHFQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEM/lFFFaGXGXAFABqCEZ9FQBABRESFMGXGXAGCT9PQBABRESFMABREEXAEAF8oGBjGBAECIJAFCIJ8oGBjGBAECNJAFCNJ8oGBjGBAECSJAFCSJ8oGBjGBAECTJREAFCTJRFAGC9wJHGCb9LQBMMAGCI9JQBEXAEAF8oGBjGBAFCIJRFAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF2BB86BBAECFJREAFCFJRFAGCaJHGQBMMABMoFFGaGXGXABCEZ9FQBABRESFMAFCgFZC+BwsN9sRIGXGXAGCT9PQBABRESFMABREEXAEAIjGBAECSJAIjGBAECNJAIjGBAECIJAIjGBAECTJREAGC9wJHGCb9LQBMMAGCI9JQBEXAEAIjGBAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF86BBAECFJREAGCaJHGQBMMABMMMFBCUNMIT9kBB",e="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",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,253,3,1,2,34,4,106,6,5,11,8,7,20,13,33,12,16,128,9,116,64,19,113,127,15,10,21,22,14,255,66,24,54,136,107,18,23,192,26,114,118,132,17,77,101,130,144,27,87,131,44,45,74,156,154,70,167]);if(typeof WebAssembly!="object")return{supported:!1};let n=o;WebAssembly.validate(t)&&(n=e);let r;const s=WebAssembly.instantiate(a(n),{}).then(u=>{r=u.instance,r.exports.__wasm_call_ctors()});function a(u){const f=new Uint8Array(u.length);for(let y=0;y<u.length;++y){const h=u.charCodeAt(y);f[y]=h>96?h-71:h>64?h-65:h>47?h+4:h>46?63:62}let m=0;for(let y=0;y<u.length;++y)f[m++]=f[y]<60?i[f[y]]:(f[y]-60)*64+f[++y];return f.buffer.slice(0,m)}function l(u,f,m,y,h,x){const g=r.exports.sbrk,A=m+3&-4,b=g(A*y),C=g(h.length),B=new Uint8Array(r.exports.memory.buffer);B.set(h,C);const R=u(b,m,y,C,h.length);if(R===0&&x&&x(b,A,y),f.set(B.subarray(b,b+m*y)),g(b-g(0)),R!==0)throw new Error(`Malformed buffer data: ${R}`)}const d={0:"",1:"meshopt_decodeFilterOct",2:"meshopt_decodeFilterQuat",3:"meshopt_decodeFilterExp",NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},p={0:"meshopt_decodeVertexBuffer",1:"meshopt_decodeIndexBuffer",2:"meshopt_decodeIndexSequence",ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"};return nn={ready:s,supported:!0,decodeVertexBuffer(u,f,m,y,h){l(r.exports.meshopt_decodeVertexBuffer,u,f,m,y,r.exports[d[h]])},decodeIndexBuffer(u,f,m,y){l(r.exports.meshopt_decodeIndexBuffer,u,f,m,y)},decodeIndexSequence(u,f,m,y){l(r.exports.meshopt_decodeIndexSequence,u,f,m,y)},decodeGltfBuffer(u,f,m,y,h,x){l(r.exports[p[h]],u,f,m,y,r.exports[d[x]])}},nn},vA=new U,RA=new U,SA=new U,MA=(o,e,t)=>{const i=t.width/2,n=t.height/2;e.updateMatrixWorld(!1);const r=o.project(e);return r.x=r.x*i+i,r.y=-(r.y*n)+n,r},KA=(o,e,t,i=1)=>{const n=vA.set(o.x/t.width*2-1,-(o.y/t.height)*2+1,i);return n.unproject(e),n},Za=(o,e,t,i)=>{const n=MA(SA.copy(o),t,i);let r=0;for(let s=0;s<2;++s){const a=RA.copy(n).setComponent(s,n.getComponent(s)+e),l=KA(a,t,i,a.z);r=Math.max(r,o.distanceTo(l))}return r},Ln=F.forwardRef(function({points:e,color:t=16777215,vertexColors:i,linewidth:n,lineWidth:r,segments:s,dashed:a,...l},d){var p,u;const f=ze(g=>g.size),m=F.useMemo(()=>s?new Ya:new BA,[s]),[y]=F.useState(()=>new Ms),h=(i==null||(p=i[0])==null?void 0:p.length)===4?4:3,x=F.useMemo(()=>{const g=s?new Ss:new Xa,A=e.map(b=>{const C=Array.isArray(b);return b instanceof U||b instanceof Pe?[b.x,b.y,b.z]:b instanceof Ee?[b.x,b.y,0]:C&&b.length===3?[b[0],b[1],b[2]]:C&&b.length===2?[b[0],b[1],0]:b});if(g.setPositions(A.flat()),i){t=16777215;const b=i.map(C=>C instanceof se?C.toArray():C);g.setColors(b.flat(),h)}return g},[e,s,i,h]);return F.useLayoutEffect(()=>{m.computeLineDistances()},[e,m]),F.useLayoutEffect(()=>{a?y.defines.USE_DASH="":delete y.defines.USE_DASH,y.needsUpdate=!0},[a,y]),F.useEffect(()=>()=>{x.dispose(),y.dispose()},[x]),F.createElement("primitive",ro({object:m,ref:d},l),F.createElement("primitive",{object:x,attach:"geometry"}),F.createElement("primitive",ro({object:y,attach:"material",color:t,vertexColors:!!i,resolution:[f.width,f.height],linewidth:(u=n??r)!==null&&u!==void 0?u:1,dashed:a,transparent:h===4},l)))});function wA(o,e,t,i){const n=class extends co{constructor(s={}){const a=Object.entries(o);super({uniforms:a.reduce((l,[d,p])=>{const u=kn.clone({[d]:{value:p}});return{...l,...u}},{}),vertexShader:e,fragmentShader:t}),this.key="",a.forEach(([l])=>Object.defineProperty(this,l,{get:()=>this.uniforms[l].value,set:d=>this.uniforms[l].value=d})),Object.assign(this,s)}};return n.key=bt.generateUUID(),n}const DA=()=>parseInt(Jf.replace(/\D+/g,"")),qa=DA();let sn=null,_a="https://www.gstatic.com/draco/versioned/decoders/1.5.5/";function $a(o=!0,e=!0,t){return i=>{t&&t(i),o&&(sn||(sn=new yA),sn.setDecoderPath(typeof o=="string"?o:_a),i.setDRACOLoader(sn)),e&&i.setMeshoptDecoder(typeof yi=="function"?yi():yi)}}const zt=(o,e,t,i)=>No(Rs,o,$a(e,t,i));zt.preload=(o,e,t,i)=>No.preload(Rs,o,$a(e,t,i));zt.clear=o=>No.clear(Rs,o);zt.setDecoderPath=o=>{_a=o};const TA=wA({cellSize:.5,sectionSize:1,fadeDistance:100,fadeStrength:1,fadeFrom:1,cellThickness:.5,sectionThickness:1,cellColor:new se,sectionColor:new se,infiniteGrid:!1,followCamera:!1,worldCamProjPosition:new U,worldPlanePosition:new U},`
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
      #include <${qa>=154?"colorspace_fragment":"encodings_fragment"}>
    }
  `),EA=F.forwardRef(({args:o,cellColor:e="#000000",sectionColor:t="#2080ff",cellSize:i=.5,sectionSize:n=1,followCamera:r=!1,infiniteGrid:s=!1,fadeDistance:a=100,fadeStrength:l=1,fadeFrom:d=1,cellThickness:p=.5,sectionThickness:u=1,side:f=Vn,...m},y)=>{Qf({GridMaterial:TA});const h=F.useRef(null);F.useImperativeHandle(y,()=>h.current,[]);const x=new Jo,g=new U(0,1,0),A=new U(0,0,0);Pt(B=>{x.setFromNormalAndCoplanarPoint(g,A).applyMatrix4(h.current.matrixWorld);const R=h.current.material,v=R.uniforms.worldCamProjPosition,S=R.uniforms.worldPlanePosition;x.projectPoint(B.camera.position,v.value),S.value.set(0,0,0).applyMatrix4(h.current.matrixWorld)});const b={cellSize:i,sectionSize:n,cellColor:e,sectionColor:t,cellThickness:p,sectionThickness:u},C={fadeDistance:a,fadeStrength:l,fadeFrom:d,infiniteGrid:s,followCamera:r};return F.createElement("mesh",ro({ref:h,frustumCulled:!1},m),F.createElement("gridMaterial",ro({transparent:!0,"extensions-derivatives":!0,side:f},b,C)),F.createElement("planeGeometry",{args:o}))}),el=0,UA=1,tl=2,gr=2,bi=1.25,xr=1,Ft=6*4+4+4,_n=65535,IA=Math.pow(2,-24),Ci=Symbol("SKIP_GENERATION");function ol(o){return o.index?o.index.count:o.attributes.position.count}function uo(o){return ol(o)/3}function nl(o,e=ArrayBuffer){return o>65535?new Uint32Array(new e(4*o)):new Uint16Array(new e(2*o))}function jA(o,e){if(!o.index){const t=o.attributes.position.count,i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=nl(t,i);o.setIndex(new pe(n,1));for(let r=0;r<t;r++)n[r]=r}}function il(o,e){const t=uo(o),i=e||o.drawRange,n=i.start/3,r=(i.start+i.count)/3,s=Math.max(0,n),a=Math.min(t,r)-s;return[{offset:Math.floor(s),count:Math.floor(a)}]}function sl(o,e){if(!o.groups||!o.groups.length)return il(o,e);const t=[],i=new Set,n=e||o.drawRange,r=n.start/3,s=(n.start+n.count)/3;for(const l of o.groups){const d=l.start/3,p=(l.start+l.count)/3;i.add(Math.max(r,d)),i.add(Math.min(s,p))}const a=Array.from(i.values()).sort((l,d)=>l-d);for(let l=0;l<a.length-1;l++){const d=a[l],p=a[l+1];t.push({offset:Math.floor(d),count:Math.floor(p-d)})}return t}function kA(o,e){const t=uo(o),i=sl(o,e).sort((s,a)=>s.offset-a.offset),n=i[i.length-1];n.count=Math.min(t-n.offset,n.count);let r=0;return i.forEach(({count:s})=>r+=s),t!==r}function Fi(o,e,t,i,n){let r=1/0,s=1/0,a=1/0,l=-1/0,d=-1/0,p=-1/0,u=1/0,f=1/0,m=1/0,y=-1/0,h=-1/0,x=-1/0;for(let g=e*6,A=(e+t)*6;g<A;g+=6){const b=o[g+0],C=o[g+1],B=b-C,R=b+C;B<r&&(r=B),R>l&&(l=R),b<u&&(u=b),b>y&&(y=b);const v=o[g+2],S=o[g+3],M=v-S,D=v+S;M<s&&(s=M),D>d&&(d=D),v<f&&(f=v),v>h&&(h=v);const w=o[g+4],K=o[g+5],I=w-K,T=w+K;I<a&&(a=I),T>p&&(p=T),w<m&&(m=w),w>x&&(x=w)}i[0]=r,i[1]=s,i[2]=a,i[3]=l,i[4]=d,i[5]=p,n[0]=u,n[1]=f,n[2]=m,n[3]=y,n[4]=h,n[5]=x}function PA(o,e=null,t=null,i=null){const n=o.attributes.position,r=o.index?o.index.array:null,s=uo(o),a=n.normalized;let l;e===null?(l=new Float32Array(s*6*4),t=0,i=s):(l=e,t=t||0,i=i||s);const d=n.array,p=n.offset||0;let u=3;n.isInterleavedBufferAttribute&&(u=n.data.stride);const f=["getX","getY","getZ"];for(let m=t;m<t+i;m++){const y=m*3,h=m*6;let x=y+0,g=y+1,A=y+2;r&&(x=r[x],g=r[g],A=r[A]),a||(x=x*u+p,g=g*u+p,A=A*u+p);for(let b=0;b<3;b++){let C,B,R;a?(C=n[f[b]](x),B=n[f[b]](g),R=n[f[b]](A)):(C=d[x+b],B=d[g+b],R=d[A+b]);let v=C;B<v&&(v=B),R<v&&(v=R);let S=C;B>S&&(S=B),R>S&&(S=R);const M=(S-v)/2,D=b*2;l[h+D+0]=v+M,l[h+D+1]=M+(Math.abs(v)+M)*IA}}return l}function ce(o,e,t){return t.min.x=e[o],t.min.y=e[o+1],t.min.z=e[o+2],t.max.x=e[o+3],t.max.y=e[o+4],t.max.z=e[o+5],t}function yr(o){let e=-1,t=-1/0;for(let i=0;i<3;i++){const n=o[i+3]-o[i];n>t&&(t=n,e=i)}return e}function br(o,e){e.set(o)}function Cr(o,e,t){let i,n;for(let r=0;r<3;r++){const s=r+3;i=o[r],n=e[r],t[r]=i<n?i:n,i=o[s],n=e[s],t[s]=i>n?i:n}}function rn(o,e,t){for(let i=0;i<3;i++){const n=e[o+2*i],r=e[o+2*i+1],s=n-r,a=n+r;s<t[i]&&(t[i]=s),a>t[i+3]&&(t[i+3]=a)}}function xo(o){const e=o[3]-o[0],t=o[4]-o[1],i=o[5]-o[2];return 2*(e*t+t*i+i*e)}const ot=32,zA=(o,e)=>o.candidate-e.candidate,dt=new Array(ot).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),an=new Float32Array(6);function HA(o,e,t,i,n,r){let s=-1,a=0;if(r===el)s=yr(e),s!==-1&&(a=(e[s]+e[s+3])/2);else if(r===UA)s=yr(o),s!==-1&&(a=OA(t,i,n,s));else if(r===tl){const l=xo(o);let d=bi*n;const p=i*6,u=(i+n)*6;for(let f=0;f<3;f++){const m=e[f],x=(e[f+3]-m)/ot;if(n<ot/4){const g=[...dt];g.length=n;let A=0;for(let C=p;C<u;C+=6,A++){const B=g[A];B.candidate=t[C+2*f],B.count=0;const{bounds:R,leftCacheBounds:v,rightCacheBounds:S}=B;for(let M=0;M<3;M++)S[M]=1/0,S[M+3]=-1/0,v[M]=1/0,v[M+3]=-1/0,R[M]=1/0,R[M+3]=-1/0;rn(C,t,R)}g.sort(zA);let b=n;for(let C=0;C<b;C++){const B=g[C];for(;C+1<b&&g[C+1].candidate===B.candidate;)g.splice(C+1,1),b--}for(let C=p;C<u;C+=6){const B=t[C+2*f];for(let R=0;R<b;R++){const v=g[R];B>=v.candidate?rn(C,t,v.rightCacheBounds):(rn(C,t,v.leftCacheBounds),v.count++)}}for(let C=0;C<b;C++){const B=g[C],R=B.count,v=n-B.count,S=B.leftCacheBounds,M=B.rightCacheBounds;let D=0;R!==0&&(D=xo(S)/l);let w=0;v!==0&&(w=xo(M)/l);const K=xr+bi*(D*R+w*v);K<d&&(s=f,d=K,a=B.candidate)}}else{for(let b=0;b<ot;b++){const C=dt[b];C.count=0,C.candidate=m+x+b*x;const B=C.bounds;for(let R=0;R<3;R++)B[R]=1/0,B[R+3]=-1/0}for(let b=p;b<u;b+=6){let R=~~((t[b+2*f]-m)/x);R>=ot&&(R=ot-1);const v=dt[R];v.count++,rn(b,t,v.bounds)}const g=dt[ot-1];br(g.bounds,g.rightCacheBounds);for(let b=ot-2;b>=0;b--){const C=dt[b],B=dt[b+1];Cr(C.bounds,B.rightCacheBounds,C.rightCacheBounds)}let A=0;for(let b=0;b<ot-1;b++){const C=dt[b],B=C.count,R=C.bounds,S=dt[b+1].rightCacheBounds;B!==0&&(A===0?br(R,an):Cr(R,an,an)),A+=B;let M=0,D=0;A!==0&&(M=xo(an)/l);const w=n-A;w!==0&&(D=xo(S)/l);const K=xr+bi*(M*A+D*w);K<d&&(s=f,d=K,a=C.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:s,pos:a}}function OA(o,e,t,i){let n=0;for(let r=e,s=e+t;r<s;r++)n+=o[r*6+i*2];return n/t}class Bi{constructor(){this.boundingData=new Float32Array(6)}}function GA(o,e,t,i,n,r){let s=i,a=i+n-1;const l=r.pos,d=r.axis*2;for(;;){for(;s<=a&&t[s*6+d]<l;)s++;for(;s<=a&&t[a*6+d]>=l;)a--;if(s<a){for(let p=0;p<3;p++){let u=e[s*3+p];e[s*3+p]=e[a*3+p],e[a*3+p]=u}for(let p=0;p<6;p++){let u=t[s*6+p];t[s*6+p]=t[a*6+p],t[a*6+p]=u}s++,a--}else return s}}function LA(o,e,t,i,n,r){let s=i,a=i+n-1;const l=r.pos,d=r.axis*2;for(;;){for(;s<=a&&t[s*6+d]<l;)s++;for(;s<=a&&t[a*6+d]>=l;)a--;if(s<a){let p=o[s];o[s]=o[a],o[a]=p;for(let u=0;u<6;u++){let f=t[s*6+u];t[s*6+u]=t[a*6+u],t[a*6+u]=f}s++,a--}else return s}}function Ce(o,e){return e[o+15]===65535}function Me(o,e){return e[o+6]}function we(o,e){return e[o+14]}function Ie(o){return o+8}function De(o,e){return e[o+6]}function Ks(o,e){return e[o+7]}let rl,wo,Un,al;const NA=Math.pow(2,32);function ns(o){return"count"in o?1:1+ns(o.left)+ns(o.right)}function JA(o,e,t){return rl=new Float32Array(t),wo=new Uint32Array(t),Un=new Uint16Array(t),al=new Uint8Array(t),is(o,e)}function is(o,e){const t=o/4,i=o/2,n="count"in e,r=e.boundingData;for(let s=0;s<6;s++)rl[t+s]=r[s];if(n)if(e.buffer){const s=e.buffer;al.set(new Uint8Array(s),o);for(let a=o,l=o+s.byteLength;a<l;a+=Ft){const d=a/2;Ce(d,Un)||(wo[a/4+6]+=t)}return o+s.byteLength}else{const s=e.offset,a=e.count;return wo[t+6]=s,Un[i+14]=a,Un[i+15]=_n,o+Ft}else{const s=e.left,a=e.right,l=e.splitAxis;let d;if(d=is(o+Ft,s),d/4>NA)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return wo[t+6]=d/4,d=is(d,a),wo[t+7]=l,d}}function QA(o,e){const t=(o.index?o.index.count:o.attributes.position.count)/3,i=t>2**16,n=i?4:2,r=e?new SharedArrayBuffer(t*n):new ArrayBuffer(t*n),s=i?new Uint32Array(r):new Uint16Array(r);for(let a=0,l=s.length;a<l;a++)s[a]=a;return s}function WA(o,e,t,i,n){const{maxDepth:r,verbose:s,maxLeafTris:a,strategy:l,onProgress:d,indirect:p}=n,u=o._indirectBuffer,f=o.geometry,m=f.index?f.index.array:null,y=p?LA:GA,h=uo(f),x=new Float32Array(6);let g=!1;const A=new Bi;return Fi(e,t,i,A.boundingData,x),C(A,t,i,x),A;function b(B){d&&d(B/h)}function C(B,R,v,S=null,M=0){if(!g&&M>=r&&(g=!0,s&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(f))),v<=a||M>=r)return b(R+v),B.offset=R,B.count=v,B;const D=HA(B.boundingData,S,e,R,v,l);if(D.axis===-1)return b(R+v),B.offset=R,B.count=v,B;const w=y(u,m,e,R,v,D);if(w===R||w===R+v)b(R+v),B.offset=R,B.count=v;else{B.splitAxis=D.axis;const K=new Bi,I=R,T=w-R;B.left=K,Fi(e,I,T,K.boundingData,x),C(K,I,T,x,M+1);const k=new Bi,j=w,E=v-T;B.right=k,Fi(e,j,E,k.boundingData,x),C(k,j,E,x,M+1)}return B}}function VA(o,e){const t=o.geometry;e.indirect&&(o._indirectBuffer=QA(t,e.useSharedArrayBuffer),kA(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),o._indirectBuffer||jA(t,e);const i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=PA(t),r=e.indirect?il(t,e.range):sl(t,e.range);o._roots=r.map(s=>{const a=WA(o,n,s.offset,s.count,e),l=ns(a),d=new i(Ft*l);return JA(0,a,d),d})}class rt{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let i=1/0,n=-1/0;for(let r=0,s=e.length;r<s;r++){const l=e[r][t];i=l<i?l:i,n=l>n?l:n}this.min=i,this.max=n}setFromPoints(e,t){let i=1/0,n=-1/0;for(let r=0,s=t.length;r<s;r++){const a=t[r],l=e.dot(a);i=l<i?l:i,n=l>n?l:n}this.min=i,this.max=n}isSeparated(e){return this.min>e.max||e.min>this.max}}rt.prototype.setFromBox=function(){const o=new U;return function(t,i){const n=i.min,r=i.max;let s=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let d=0;d<=1;d++)for(let p=0;p<=1;p++){o.x=n.x*l+r.x*(1-l),o.y=n.y*d+r.y*(1-d),o.z=n.z*p+r.z*(1-p);const u=t.dot(o);s=Math.min(u,s),a=Math.max(u,a)}this.min=s,this.max=a}}();const XA=function(){const o=new U,e=new U,t=new U;return function(n,r,s){const a=n.start,l=o,d=r.start,p=e;t.subVectors(a,d),o.subVectors(n.end,n.start),e.subVectors(r.end,r.start);const u=t.dot(p),f=p.dot(l),m=p.dot(p),y=t.dot(l),x=l.dot(l)*m-f*f;let g,A;x!==0?g=(u*f-y*m)/x:g=0,A=(u+g*f)/m,s.x=g,s.y=A}}(),ws=function(){const o=new Ee,e=new U,t=new U;return function(n,r,s,a){XA(n,r,o);let l=o.x,d=o.y;if(l>=0&&l<=1&&d>=0&&d<=1){n.at(l,s),r.at(d,a);return}else if(l>=0&&l<=1){d<0?r.at(0,a):r.at(1,a),n.closestPointToPoint(a,!0,s);return}else if(d>=0&&d<=1){l<0?n.at(0,s):n.at(1,s),r.closestPointToPoint(s,!0,a);return}else{let p;l<0?p=n.start:p=n.end;let u;d<0?u=r.start:u=r.end;const f=e,m=t;if(n.closestPointToPoint(u,!0,e),r.closestPointToPoint(p,!0,t),f.distanceToSquared(u)<=m.distanceToSquared(p)){s.copy(f),a.copy(u);return}else{s.copy(p),a.copy(m);return}}}}(),YA=function(){const o=new U,e=new U,t=new Jo,i=new _e;return function(r,s){const{radius:a,center:l}=r,{a:d,b:p,c:u}=s;if(i.start=d,i.end=p,i.closestPointToPoint(l,!0,o).distanceTo(l)<=a||(i.start=d,i.end=u,i.closestPointToPoint(l,!0,o).distanceTo(l)<=a)||(i.start=p,i.end=u,i.closestPointToPoint(l,!0,o).distanceTo(l)<=a))return!0;const h=s.getPlane(t);if(Math.abs(h.distanceToPoint(l))<=a){const g=h.projectPoint(l,e);if(s.containsPoint(g))return!0}return!1}}(),ZA=1e-15;function vi(o){return Math.abs(o)<ZA}class Ve extends Ko{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new U),this.satBounds=new Array(4).fill().map(()=>new rt),this.points=[this.a,this.b,this.c],this.sphere=new Xn,this.plane=new Jo,this.needsUpdate=!0}intersectsSphere(e){return YA(e,this)}update(){const e=this.a,t=this.b,i=this.c,n=this.points,r=this.satAxes,s=this.satBounds,a=r[0],l=s[0];this.getNormal(a),l.setFromPoints(a,n);const d=r[1],p=s[1];d.subVectors(e,t),p.setFromPoints(d,n);const u=r[2],f=s[2];u.subVectors(t,i),f.setFromPoints(u,n);const m=r[3],y=s[3];m.subVectors(i,e),y.setFromPoints(m,n),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}}Ve.prototype.closestPointToSegment=function(){const o=new U,e=new U,t=new _e;return function(n,r=null,s=null){const{start:a,end:l}=n,d=this.points;let p,u=1/0;for(let f=0;f<3;f++){const m=(f+1)%3;t.start.copy(d[f]),t.end.copy(d[m]),ws(t,n,o,e),p=o.distanceToSquared(e),p<u&&(u=p,r&&r.copy(o),s&&s.copy(e))}return this.closestPointToPoint(a,o),p=a.distanceToSquared(o),p<u&&(u=p,r&&r.copy(o),s&&s.copy(a)),this.closestPointToPoint(l,o),p=l.distanceToSquared(o),p<u&&(u=p,r&&r.copy(o),s&&s.copy(l)),Math.sqrt(u)}}();Ve.prototype.intersectsTriangle=function(){const o=new Ve,e=new Array(3),t=new Array(3),i=new rt,n=new rt,r=new U,s=new U,a=new U,l=new U,d=new U,p=new _e,u=new _e,f=new _e,m=new U;function y(h,x,g){const A=h.points;let b=0,C=-1;for(let B=0;B<3;B++){const{start:R,end:v}=p;R.copy(A[B]),v.copy(A[(B+1)%3]),p.delta(s);const S=vi(x.distanceToPoint(R));if(vi(x.normal.dot(s))&&S){g.copy(p),b=2;break}const M=x.intersectLine(p,m);if(!M&&S&&m.copy(R),(M||S)&&!vi(m.distanceTo(v))){if(b<=1)(b===1?g.start:g.end).copy(m),S&&(C=b);else if(b>=2){(C===1?g.start:g.end).copy(m),b=2;break}if(b++,b===2&&C===-1)break}}return b}return function(x,g=null,A=!1){this.needsUpdate&&this.update(),x.isExtendedTriangle?x.needsUpdate&&x.update():(o.copy(x),o.update(),x=o);const b=this.plane,C=x.plane;if(Math.abs(b.normal.dot(C.normal))>1-1e-10){const B=this.satBounds,R=this.satAxes;t[0]=x.a,t[1]=x.b,t[2]=x.c;for(let M=0;M<4;M++){const D=B[M],w=R[M];if(i.setFromPoints(w,t),D.isSeparated(i))return!1}const v=x.satBounds,S=x.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let M=0;M<4;M++){const D=v[M],w=S[M];if(i.setFromPoints(w,e),D.isSeparated(i))return!1}for(let M=0;M<4;M++){const D=R[M];for(let w=0;w<4;w++){const K=S[w];if(r.crossVectors(D,K),i.setFromPoints(r,e),n.setFromPoints(r,t),i.isSeparated(n))return!1}}return g&&(A||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),g.start.set(0,0,0),g.end.set(0,0,0)),!0}else{const B=y(this,C,u);if(B===1&&x.containsPoint(u.end))return g&&(g.start.copy(u.end),g.end.copy(u.end)),!0;if(B!==2)return!1;const R=y(x,b,f);if(R===1&&this.containsPoint(f.end))return g&&(g.start.copy(f.end),g.end.copy(f.end)),!0;if(R!==2)return!1;if(u.delta(a),f.delta(l),a.dot(l)<0){let I=f.start;f.start=f.end,f.end=I}const v=u.start.dot(a),S=u.end.dot(a),M=f.start.dot(a),D=f.end.dot(a),w=S<M,K=v<D;return v!==D&&M!==S&&w===K?!1:(g&&(d.subVectors(u.start,f.start),d.dot(a)>0?g.start.copy(u.start):g.start.copy(f.start),d.subVectors(u.end,f.end),d.dot(a)<0?g.end.copy(u.end):g.end.copy(f.end)),!0)}}}();Ve.prototype.distanceToPoint=function(){const o=new U;return function(t){return this.closestPointToPoint(t,o),t.distanceTo(o)}}();Ve.prototype.distanceToTriangle=function(){const o=new U,e=new U,t=["a","b","c"],i=new _e,n=new _e;return function(s,a=null,l=null){const d=a||l?i:null;if(this.intersectsTriangle(s,d))return(a||l)&&(a&&d.getCenter(a),l&&d.getCenter(l)),0;let p=1/0;for(let u=0;u<3;u++){let f;const m=t[u],y=s[m];this.closestPointToPoint(y,o),f=y.distanceToSquared(o),f<p&&(p=f,a&&a.copy(o),l&&l.copy(y));const h=this[m];s.closestPointToPoint(h,o),f=h.distanceToSquared(o),f<p&&(p=f,a&&a.copy(h),l&&l.copy(o))}for(let u=0;u<3;u++){const f=t[u],m=t[(u+1)%3];i.set(this[f],this[m]);for(let y=0;y<3;y++){const h=t[y],x=t[(y+1)%3];n.set(s[h],s[x]),ws(i,n,o,e);const g=o.distanceToSquared(e);g<p&&(p=g,a&&a.copy(o),l&&l.copy(e))}}return Math.sqrt(p)}}();class ve{constructor(e,t,i){this.isOrientedBox=!0,this.min=new U,this.max=new U,this.matrix=new X,this.invMatrix=new X,this.points=new Array(8).fill().map(()=>new U),this.satAxes=new Array(3).fill().map(()=>new U),this.satBounds=new Array(3).fill().map(()=>new rt),this.alignedSatBounds=new Array(3).fill().map(()=>new rt),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),i&&this.matrix.copy(i)}set(e,t,i){this.min.copy(e),this.max.copy(t),this.matrix.copy(i),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}ve.prototype.update=function(){return function(){const e=this.matrix,t=this.min,i=this.max,n=this.points;for(let d=0;d<=1;d++)for(let p=0;p<=1;p++)for(let u=0;u<=1;u++){const f=1*d|2*p|4*u,m=n[f];m.x=d?i.x:t.x,m.y=p?i.y:t.y,m.z=u?i.z:t.z,m.applyMatrix4(e)}const r=this.satBounds,s=this.satAxes,a=n[0];for(let d=0;d<3;d++){const p=s[d],u=r[d],f=1<<d,m=n[f];p.subVectors(a,m),u.setFromPoints(p,n)}const l=this.alignedSatBounds;l[0].setFromPointsField(n,"x"),l[1].setFromPointsField(n,"y"),l[2].setFromPointsField(n,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();ve.prototype.intersectsBox=function(){const o=new rt;return function(t){this.needsUpdate&&this.update();const i=t.min,n=t.max,r=this.satBounds,s=this.satAxes,a=this.alignedSatBounds;if(o.min=i.x,o.max=n.x,a[0].isSeparated(o)||(o.min=i.y,o.max=n.y,a[1].isSeparated(o))||(o.min=i.z,o.max=n.z,a[2].isSeparated(o)))return!1;for(let l=0;l<3;l++){const d=s[l],p=r[l];if(o.setFromBox(d,t),p.isSeparated(o))return!1}return!0}}();ve.prototype.intersectsTriangle=function(){const o=new Ve,e=new Array(3),t=new rt,i=new rt,n=new U;return function(s){this.needsUpdate&&this.update(),s.isExtendedTriangle?s.needsUpdate&&s.update():(o.copy(s),o.update(),s=o);const a=this.satBounds,l=this.satAxes;e[0]=s.a,e[1]=s.b,e[2]=s.c;for(let f=0;f<3;f++){const m=a[f],y=l[f];if(t.setFromPoints(y,e),m.isSeparated(t))return!1}const d=s.satBounds,p=s.satAxes,u=this.points;for(let f=0;f<3;f++){const m=d[f],y=p[f];if(t.setFromPoints(y,u),m.isSeparated(t))return!1}for(let f=0;f<3;f++){const m=l[f];for(let y=0;y<4;y++){const h=p[y];if(n.crossVectors(m,h),t.setFromPoints(n,e),i.setFromPoints(n,u),t.isSeparated(i))return!1}}return!0}}();ve.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();ve.prototype.distanceToPoint=function(){const o=new U;return function(t){return this.closestPointToPoint(t,o),t.distanceTo(o)}}();ve.prototype.distanceToBox=function(){const o=["x","y","z"],e=new Array(12).fill().map(()=>new _e),t=new Array(12).fill().map(()=>new _e),i=new U,n=new U;return function(s,a=0,l=null,d=null){if(this.needsUpdate&&this.update(),this.intersectsBox(s))return(l||d)&&(s.getCenter(n),this.closestPointToPoint(n,i),s.closestPointToPoint(i,n),l&&l.copy(i),d&&d.copy(n)),0;const p=a*a,u=s.min,f=s.max,m=this.points;let y=1/0;for(let x=0;x<8;x++){const g=m[x];n.copy(g).clamp(u,f);const A=g.distanceToSquared(n);if(A<y&&(y=A,l&&l.copy(g),d&&d.copy(n),A<p))return Math.sqrt(A)}let h=0;for(let x=0;x<3;x++)for(let g=0;g<=1;g++)for(let A=0;A<=1;A++){const b=(x+1)%3,C=(x+2)%3,B=g<<b|A<<C,R=1<<x|g<<b|A<<C,v=m[B],S=m[R];e[h].set(v,S);const D=o[x],w=o[b],K=o[C],I=t[h],T=I.start,k=I.end;T[D]=u[D],T[w]=g?u[w]:f[w],T[K]=A?u[K]:f[w],k[D]=f[D],k[w]=g?u[w]:f[w],k[K]=A?u[K]:f[w],h++}for(let x=0;x<=1;x++)for(let g=0;g<=1;g++)for(let A=0;A<=1;A++){n.x=x?f.x:u.x,n.y=g?f.y:u.y,n.z=A?f.z:u.z,this.closestPointToPoint(n,i);const b=n.distanceToSquared(i);if(b<y&&(y=b,l&&l.copy(i),d&&d.copy(n),b<p))return Math.sqrt(b)}for(let x=0;x<12;x++){const g=e[x];for(let A=0;A<12;A++){const b=t[A];ws(g,b,i,n);const C=i.distanceToSquared(n);if(C<y&&(y=C,l&&l.copy(i),d&&d.copy(n),C<p))return Math.sqrt(C)}}return Math.sqrt(y)}}();class Ds{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class qA extends Ds{constructor(){super(()=>new Ve)}}const je=new qA;class _A{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=i=>{t&&e.push(t),t=i,this.float32Array=new Float32Array(i),this.uint16Array=new Uint16Array(i),this.uint32Array=new Uint32Array(i)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const re=new _A;let gt,io;const Gt=[],ln=new Ds(()=>new de);function $A(o,e,t,i,n,r){gt=ln.getPrimitive(),io=ln.getPrimitive(),Gt.push(gt,io),re.setBuffer(o._roots[e]);const s=ss(0,o.geometry,t,i,n,r);re.clearBuffer(),ln.releasePrimitive(gt),ln.releasePrimitive(io),Gt.pop(),Gt.pop();const a=Gt.length;return a>0&&(io=Gt[a-1],gt=Gt[a-2]),s}function ss(o,e,t,i,n=null,r=0,s=0){const{float32Array:a,uint16Array:l,uint32Array:d}=re;let p=o*2;if(Ce(p,l)){const f=Me(o,d),m=we(p,l);return ce(o,a,gt),i(f,m,!1,s,r+o,gt)}else{let D=function(K){const{uint16Array:I,uint32Array:T}=re;let k=K*2;for(;!Ce(k,I);)K=Ie(K),k=K*2;return Me(K,T)},w=function(K){const{uint16Array:I,uint32Array:T}=re;let k=K*2;for(;!Ce(k,I);)K=De(K,T),k=K*2;return Me(K,T)+we(k,I)};const f=Ie(o),m=De(o,d);let y=f,h=m,x,g,A,b;if(n&&(A=gt,b=io,ce(y,a,A),ce(h,a,b),x=n(A),g=n(b),g<x)){y=m,h=f;const K=x;x=g,g=K,A=b}A||(A=gt,ce(y,a,A));const C=Ce(y*2,l),B=t(A,C,x,s+1,r+y);let R;if(B===gr){const K=D(y),T=w(y)-K;R=i(K,T,!0,s+1,r+y,A)}else R=B&&ss(y,e,t,i,n,r,s+1);if(R)return!0;b=io,ce(h,a,b);const v=Ce(h*2,l),S=t(b,v,g,s+1,r+h);let M;if(S===gr){const K=D(h),T=w(h)-K;M=i(K,T,!0,s+1,r+h,b)}else M=S&&ss(h,e,t,i,n,r,s+1);return!!M}}const yo=new U,Ri=new U;function em(o,e,t={},i=0,n=1/0){const r=i*i,s=n*n;let a=1/0,l=null;if(o.shapecast({boundsTraverseOrder:p=>(yo.copy(e).clamp(p.min,p.max),yo.distanceToSquared(e)),intersectsBounds:(p,u,f)=>f<a&&f<s,intersectsTriangle:(p,u)=>{p.closestPointToPoint(e,yo);const f=e.distanceToSquared(yo);return f<a&&(Ri.copy(yo),a=f,l=u),f<r}}),a===1/0)return null;const d=Math.sqrt(a);return t.point?t.point.copy(Ri):t.point=Ri.clone(),t.distance=d,t.faceIndex=l,t}const Lt=new U,Nt=new U,Jt=new U,cn=new Ee,un=new Ee,dn=new Ee,Fr=new U,Br=new U,vr=new U,fn=new U;function tm(o,e,t,i,n,r,s,a){let l;if(r===Vn?l=o.intersectTriangle(i,t,e,!0,n):l=o.intersectTriangle(e,t,i,r!==kt,n),l===null)return null;const d=o.origin.distanceTo(n);return d<s||d>a?null:{distance:d,point:n.clone()}}function om(o,e,t,i,n,r,s,a,l,d,p){Lt.fromBufferAttribute(e,r),Nt.fromBufferAttribute(e,s),Jt.fromBufferAttribute(e,a);const u=tm(o,Lt,Nt,Jt,fn,l,d,p);if(u){i&&(cn.fromBufferAttribute(i,r),un.fromBufferAttribute(i,s),dn.fromBufferAttribute(i,a),u.uv=Ko.getInterpolation(fn,Lt,Nt,Jt,cn,un,dn,new Ee)),n&&(cn.fromBufferAttribute(n,r),un.fromBufferAttribute(n,s),dn.fromBufferAttribute(n,a),u.uv1=Ko.getInterpolation(fn,Lt,Nt,Jt,cn,un,dn,new Ee)),t&&(Fr.fromBufferAttribute(t,r),Br.fromBufferAttribute(t,s),vr.fromBufferAttribute(t,a),u.normal=Ko.getInterpolation(fn,Lt,Nt,Jt,Fr,Br,vr,new U),u.normal.dot(o.direction)>0&&u.normal.multiplyScalar(-1));const f={a:r,b:s,c:a,normal:new U,materialIndex:0};Ko.getNormal(Lt,Nt,Jt,f.normal),u.face=f,u.faceIndex=r}return u}function $n(o,e,t,i,n,r,s){const a=i*3;let l=a+0,d=a+1,p=a+2;const u=o.index;o.index&&(l=u.getX(l),d=u.getX(d),p=u.getX(p));const{position:f,normal:m,uv:y,uv1:h}=o.attributes,x=om(t,f,m,y,h,l,d,p,e,r,s);return x?(x.faceIndex=i,n&&n.push(x),x):null}function fe(o,e,t,i){const n=o.a,r=o.b,s=o.c;let a=e,l=e+1,d=e+2;t&&(a=t.getX(a),l=t.getX(l),d=t.getX(d)),n.x=i.getX(a),n.y=i.getY(a),n.z=i.getZ(a),r.x=i.getX(l),r.y=i.getY(l),r.z=i.getZ(l),s.x=i.getX(d),s.y=i.getY(d),s.z=i.getZ(d)}function nm(o,e,t,i,n,r,s,a){const{geometry:l,_indirectBuffer:d}=o;for(let p=i,u=i+n;p<u;p++)$n(l,e,t,p,r,s,a)}function im(o,e,t,i,n,r,s){const{geometry:a,_indirectBuffer:l}=o;let d=1/0,p=null;for(let u=i,f=i+n;u<f;u++){let m;m=$n(a,e,t,u,null,r,s),m&&m.distance<d&&(p=m,d=m.distance)}return p}function sm(o,e,t,i,n,r,s){const{geometry:a}=t,{index:l}=a,d=a.attributes.position;for(let p=o,u=e+o;p<u;p++){let f;if(f=p,fe(s,f*3,l,d),s.needsUpdate=!0,i(s,f,n,r))return!0}return!1}function rm(o,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=o.geometry,i=t.index?t.index.array:null,n=t.attributes.position;let r,s,a,l,d=0;const p=o._roots;for(let f=0,m=p.length;f<m;f++)r=p[f],s=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),u(0,d),d+=r.byteLength;function u(f,m,y=!1){const h=f*2;if(a[h+15]===_n){const g=s[f+6],A=a[h+14];let b=1/0,C=1/0,B=1/0,R=-1/0,v=-1/0,S=-1/0;for(let M=3*g,D=3*(g+A);M<D;M++){let w=i[M];const K=n.getX(w),I=n.getY(w),T=n.getZ(w);K<b&&(b=K),K>R&&(R=K),I<C&&(C=I),I>v&&(v=I),T<B&&(B=T),T>S&&(S=T)}return l[f+0]!==b||l[f+1]!==C||l[f+2]!==B||l[f+3]!==R||l[f+4]!==v||l[f+5]!==S?(l[f+0]=b,l[f+1]=C,l[f+2]=B,l[f+3]=R,l[f+4]=v,l[f+5]=S,!0):!1}else{const g=f+8,A=s[f+6],b=g+m,C=A+m;let B=y,R=!1,v=!1;e?B||(R=e.has(b),v=e.has(C),B=!R&&!v):(R=!0,v=!0);const S=B||R,M=B||v;let D=!1;S&&(D=u(g,m,B));let w=!1;M&&(w=u(A,m,B));const K=D||w;if(K)for(let I=0;I<3;I++){const T=g+I,k=A+I,j=l[T],E=l[T+3],P=l[k],z=l[k+3];l[f+I]=j<P?j:P,l[f+I+3]=E>z?E:z}return K}}}function Rt(o,e,t,i,n){let r,s,a,l,d,p;const u=1/t.direction.x,f=1/t.direction.y,m=1/t.direction.z,y=t.origin.x,h=t.origin.y,x=t.origin.z;let g=e[o],A=e[o+3],b=e[o+1],C=e[o+3+1],B=e[o+2],R=e[o+3+2];return u>=0?(r=(g-y)*u,s=(A-y)*u):(r=(A-y)*u,s=(g-y)*u),f>=0?(a=(b-h)*f,l=(C-h)*f):(a=(C-h)*f,l=(b-h)*f),r>l||a>s||((a>r||isNaN(r))&&(r=a),(l<s||isNaN(s))&&(s=l),m>=0?(d=(B-x)*m,p=(R-x)*m):(d=(R-x)*m,p=(B-x)*m),r>p||d>s)?!1:((d>r||r!==r)&&(r=d),(p<s||s!==s)&&(s=p),r<=n&&s>=i)}function am(o,e,t,i,n,r,s,a){const{geometry:l,_indirectBuffer:d}=o;for(let p=i,u=i+n;p<u;p++){let f=d?d[p]:p;$n(l,e,t,f,r,s,a)}}function lm(o,e,t,i,n,r,s){const{geometry:a,_indirectBuffer:l}=o;let d=1/0,p=null;for(let u=i,f=i+n;u<f;u++){let m;m=$n(a,e,t,l?l[u]:u,null,r,s),m&&m.distance<d&&(p=m,d=m.distance)}return p}function cm(o,e,t,i,n,r,s){const{geometry:a}=t,{index:l}=a,d=a.attributes.position;for(let p=o,u=e+o;p<u;p++){let f;if(f=t.resolveTriangleIndex(p),fe(s,f*3,l,d),s.needsUpdate=!0,i(s,f,n,r))return!0}return!1}function um(o,e,t,i,n,r,s){re.setBuffer(o._roots[e]),rs(0,o,t,i,n,r,s),re.clearBuffer()}function rs(o,e,t,i,n,r,s){const{float32Array:a,uint16Array:l,uint32Array:d}=re,p=o*2;if(Ce(p,l)){const f=Me(o,d),m=we(p,l);nm(e,t,i,f,m,n,r,s)}else{const f=Ie(o);Rt(f,a,i,r,s)&&rs(f,e,t,i,n,r,s);const m=De(o,d);Rt(m,a,i,r,s)&&rs(m,e,t,i,n,r,s)}}const dm=["x","y","z"];function fm(o,e,t,i,n,r){re.setBuffer(o._roots[e]);const s=as(0,o,t,i,n,r);return re.clearBuffer(),s}function as(o,e,t,i,n,r){const{float32Array:s,uint16Array:a,uint32Array:l}=re;let d=o*2;if(Ce(d,a)){const u=Me(o,l),f=we(d,a);return im(e,t,i,u,f,n,r)}else{const u=Ks(o,l),f=dm[u],y=i.direction[f]>=0;let h,x;y?(h=Ie(o),x=De(o,l)):(h=De(o,l),x=Ie(o));const A=Rt(h,s,i,n,r)?as(h,e,t,i,n,r):null;if(A){const B=A.point[f];if(y?B<=s[x+u]:B>=s[x+u+3])return A}const C=Rt(x,s,i,n,r)?as(x,e,t,i,n,r):null;return A&&C?A.distance<=C.distance?A:C:A||C||null}}const pn=new de,Qt=new Ve,Wt=new Ve,bo=new X,Rr=new ve,An=new ve;function pm(o,e,t,i){re.setBuffer(o._roots[e]);const n=ls(0,o,t,i);return re.clearBuffer(),n}function ls(o,e,t,i,n=null){const{float32Array:r,uint16Array:s,uint32Array:a}=re;let l=o*2;if(n===null&&(t.boundingBox||t.computeBoundingBox(),Rr.set(t.boundingBox.min,t.boundingBox.max,i),n=Rr),Ce(l,s)){const p=e.geometry,u=p.index,f=p.attributes.position,m=t.index,y=t.attributes.position,h=Me(o,a),x=we(l,s);if(bo.copy(i).invert(),t.boundsTree)return ce(o,r,An),An.matrix.copy(bo),An.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:A=>An.intersectsBox(A),intersectsTriangle:A=>{A.a.applyMatrix4(i),A.b.applyMatrix4(i),A.c.applyMatrix4(i),A.needsUpdate=!0;for(let b=h*3,C=(x+h)*3;b<C;b+=3)if(fe(Wt,b,u,f),Wt.needsUpdate=!0,A.intersectsTriangle(Wt))return!0;return!1}});for(let g=h*3,A=(x+h)*3;g<A;g+=3){fe(Qt,g,u,f),Qt.a.applyMatrix4(bo),Qt.b.applyMatrix4(bo),Qt.c.applyMatrix4(bo),Qt.needsUpdate=!0;for(let b=0,C=m.count;b<C;b+=3)if(fe(Wt,b,m,y),Wt.needsUpdate=!0,Qt.intersectsTriangle(Wt))return!0}}else{const p=o+8,u=a[o+6];return ce(p,r,pn),!!(n.intersectsBox(pn)&&ls(p,e,t,i,n)||(ce(u,r,pn),n.intersectsBox(pn)&&ls(u,e,t,i,n)))}}const mn=new X,Si=new ve,Co=new ve,Am=new U,mm=new U,hm=new U,gm=new U;function xm(o,e,t,i={},n={},r=0,s=1/0){e.boundingBox||e.computeBoundingBox(),Si.set(e.boundingBox.min,e.boundingBox.max,t),Si.needsUpdate=!0;const a=o.geometry,l=a.attributes.position,d=a.index,p=e.attributes.position,u=e.index,f=je.getPrimitive(),m=je.getPrimitive();let y=Am,h=mm,x=null,g=null;n&&(x=hm,g=gm);let A=1/0,b=null,C=null;return mn.copy(t).invert(),Co.matrix.copy(mn),o.shapecast({boundsTraverseOrder:B=>Si.distanceToBox(B),intersectsBounds:(B,R,v)=>v<A&&v<s?(R&&(Co.min.copy(B.min),Co.max.copy(B.max),Co.needsUpdate=!0),!0):!1,intersectsRange:(B,R)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:S=>Co.distanceToBox(S),intersectsBounds:(S,M,D)=>D<A&&D<s,intersectsRange:(S,M)=>{for(let D=S,w=S+M;D<w;D++){fe(m,3*D,u,p),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let K=B,I=B+R;K<I;K++){fe(f,3*K,d,l),f.needsUpdate=!0;const T=f.distanceToTriangle(m,y,x);if(T<A&&(h.copy(y),g&&g.copy(x),A=T,b=K,C=D),T<r)return!0}}}});{const v=uo(e);for(let S=0,M=v;S<M;S++){fe(m,3*S,u,p),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let D=B,w=B+R;D<w;D++){fe(f,3*D,d,l),f.needsUpdate=!0;const K=f.distanceToTriangle(m,y,x);if(K<A&&(h.copy(y),g&&g.copy(x),A=K,b=D,C=S),K<r)return!0}}}}}),je.releasePrimitive(f),je.releasePrimitive(m),A===1/0?null:(i.point?i.point.copy(h):i.point=h.clone(),i.distance=A,i.faceIndex=b,n&&(n.point?n.point.copy(g):n.point=g.clone(),n.point.applyMatrix4(mn),h.applyMatrix4(mn),n.distance=h.sub(n.point).length(),n.faceIndex=C),i)}function ym(o,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=o.geometry,i=t.index?t.index.array:null,n=t.attributes.position;let r,s,a,l,d=0;const p=o._roots;for(let f=0,m=p.length;f<m;f++)r=p[f],s=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),u(0,d),d+=r.byteLength;function u(f,m,y=!1){const h=f*2;if(a[h+15]===_n){const g=s[f+6],A=a[h+14];let b=1/0,C=1/0,B=1/0,R=-1/0,v=-1/0,S=-1/0;for(let M=g,D=g+A;M<D;M++){const w=3*o.resolveTriangleIndex(M);for(let K=0;K<3;K++){let I=w+K;I=i?i[I]:I;const T=n.getX(I),k=n.getY(I),j=n.getZ(I);T<b&&(b=T),T>R&&(R=T),k<C&&(C=k),k>v&&(v=k),j<B&&(B=j),j>S&&(S=j)}}return l[f+0]!==b||l[f+1]!==C||l[f+2]!==B||l[f+3]!==R||l[f+4]!==v||l[f+5]!==S?(l[f+0]=b,l[f+1]=C,l[f+2]=B,l[f+3]=R,l[f+4]=v,l[f+5]=S,!0):!1}else{const g=f+8,A=s[f+6],b=g+m,C=A+m;let B=y,R=!1,v=!1;e?B||(R=e.has(b),v=e.has(C),B=!R&&!v):(R=!0,v=!0);const S=B||R,M=B||v;let D=!1;S&&(D=u(g,m,B));let w=!1;M&&(w=u(A,m,B));const K=D||w;if(K)for(let I=0;I<3;I++){const T=g+I,k=A+I,j=l[T],E=l[T+3],P=l[k],z=l[k+3];l[f+I]=j<P?j:P,l[f+I+3]=E>z?E:z}return K}}}function bm(o,e,t,i,n,r,s){re.setBuffer(o._roots[e]),cs(0,o,t,i,n,r,s),re.clearBuffer()}function cs(o,e,t,i,n,r,s){const{float32Array:a,uint16Array:l,uint32Array:d}=re,p=o*2;if(Ce(p,l)){const f=Me(o,d),m=we(p,l);am(e,t,i,f,m,n,r,s)}else{const f=Ie(o);Rt(f,a,i,r,s)&&cs(f,e,t,i,n,r,s);const m=De(o,d);Rt(m,a,i,r,s)&&cs(m,e,t,i,n,r,s)}}const Cm=["x","y","z"];function Fm(o,e,t,i,n,r){re.setBuffer(o._roots[e]);const s=us(0,o,t,i,n,r);return re.clearBuffer(),s}function us(o,e,t,i,n,r){const{float32Array:s,uint16Array:a,uint32Array:l}=re;let d=o*2;if(Ce(d,a)){const u=Me(o,l),f=we(d,a);return lm(e,t,i,u,f,n,r)}else{const u=Ks(o,l),f=Cm[u],y=i.direction[f]>=0;let h,x;y?(h=Ie(o),x=De(o,l)):(h=De(o,l),x=Ie(o));const A=Rt(h,s,i,n,r)?us(h,e,t,i,n,r):null;if(A){const B=A.point[f];if(y?B<=s[x+u]:B>=s[x+u+3])return A}const C=Rt(x,s,i,n,r)?us(x,e,t,i,n,r):null;return A&&C?A.distance<=C.distance?A:C:A||C||null}}const hn=new de,Vt=new Ve,Xt=new Ve,Fo=new X,Sr=new ve,gn=new ve;function Bm(o,e,t,i){re.setBuffer(o._roots[e]);const n=ds(0,o,t,i);return re.clearBuffer(),n}function ds(o,e,t,i,n=null){const{float32Array:r,uint16Array:s,uint32Array:a}=re;let l=o*2;if(n===null&&(t.boundingBox||t.computeBoundingBox(),Sr.set(t.boundingBox.min,t.boundingBox.max,i),n=Sr),Ce(l,s)){const p=e.geometry,u=p.index,f=p.attributes.position,m=t.index,y=t.attributes.position,h=Me(o,a),x=we(l,s);if(Fo.copy(i).invert(),t.boundsTree)return ce(o,r,gn),gn.matrix.copy(Fo),gn.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:A=>gn.intersectsBox(A),intersectsTriangle:A=>{A.a.applyMatrix4(i),A.b.applyMatrix4(i),A.c.applyMatrix4(i),A.needsUpdate=!0;for(let b=h,C=x+h;b<C;b++)if(fe(Xt,3*e.resolveTriangleIndex(b),u,f),Xt.needsUpdate=!0,A.intersectsTriangle(Xt))return!0;return!1}});for(let g=h,A=x+h;g<A;g++){const b=e.resolveTriangleIndex(g);fe(Vt,3*b,u,f),Vt.a.applyMatrix4(Fo),Vt.b.applyMatrix4(Fo),Vt.c.applyMatrix4(Fo),Vt.needsUpdate=!0;for(let C=0,B=m.count;C<B;C+=3)if(fe(Xt,C,m,y),Xt.needsUpdate=!0,Vt.intersectsTriangle(Xt))return!0}}else{const p=o+8,u=a[o+6];return ce(p,r,hn),!!(n.intersectsBox(hn)&&ds(p,e,t,i,n)||(ce(u,r,hn),n.intersectsBox(hn)&&ds(u,e,t,i,n)))}}const xn=new X,Mi=new ve,Bo=new ve,vm=new U,Rm=new U,Sm=new U,Mm=new U;function Km(o,e,t,i={},n={},r=0,s=1/0){e.boundingBox||e.computeBoundingBox(),Mi.set(e.boundingBox.min,e.boundingBox.max,t),Mi.needsUpdate=!0;const a=o.geometry,l=a.attributes.position,d=a.index,p=e.attributes.position,u=e.index,f=je.getPrimitive(),m=je.getPrimitive();let y=vm,h=Rm,x=null,g=null;n&&(x=Sm,g=Mm);let A=1/0,b=null,C=null;return xn.copy(t).invert(),Bo.matrix.copy(xn),o.shapecast({boundsTraverseOrder:B=>Mi.distanceToBox(B),intersectsBounds:(B,R,v)=>v<A&&v<s?(R&&(Bo.min.copy(B.min),Bo.max.copy(B.max),Bo.needsUpdate=!0),!0):!1,intersectsRange:(B,R)=>{if(e.boundsTree){const v=e.boundsTree;return v.shapecast({boundsTraverseOrder:S=>Bo.distanceToBox(S),intersectsBounds:(S,M,D)=>D<A&&D<s,intersectsRange:(S,M)=>{for(let D=S,w=S+M;D<w;D++){const K=v.resolveTriangleIndex(D);fe(m,3*K,u,p),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let I=B,T=B+R;I<T;I++){const k=o.resolveTriangleIndex(I);fe(f,3*k,d,l),f.needsUpdate=!0;const j=f.distanceToTriangle(m,y,x);if(j<A&&(h.copy(y),g&&g.copy(x),A=j,b=I,C=D),j<r)return!0}}}})}else{const v=uo(e);for(let S=0,M=v;S<M;S++){fe(m,3*S,u,p),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let D=B,w=B+R;D<w;D++){const K=o.resolveTriangleIndex(D);fe(f,3*K,d,l),f.needsUpdate=!0;const I=f.distanceToTriangle(m,y,x);if(I<A&&(h.copy(y),g&&g.copy(x),A=I,b=D,C=S),I<r)return!0}}}}}),je.releasePrimitive(f),je.releasePrimitive(m),A===1/0?null:(i.point?i.point.copy(h):i.point=h.clone(),i.distance=A,i.faceIndex=b,n&&(n.point?n.point.copy(g):n.point=g.clone(),n.point.applyMatrix4(xn),h.applyMatrix4(xn),n.distance=h.sub(n.point).length(),n.faceIndex=C),i)}function wm(){return typeof SharedArrayBuffer<"u"}const Ho=new re.constructor,Nn=new re.constructor,pt=new Ds(()=>new de),Yt=new de,Zt=new de,Ki=new de,wi=new de;let Di=!1;function Dm(o,e,t,i){if(Di)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Di=!0;const n=o._roots,r=e._roots;let s,a=0,l=0;const d=new X().copy(t).invert();for(let p=0,u=n.length;p<u;p++){Ho.setBuffer(n[p]),l=0;const f=pt.getPrimitive();ce(0,Ho.float32Array,f),f.applyMatrix4(d);for(let m=0,y=r.length;m<y&&(Nn.setBuffer(r[m]),s=Ge(0,0,t,d,i,a,l,0,0,f),Nn.clearBuffer(),l+=r[m].length,!s);m++);if(pt.releasePrimitive(f),Ho.clearBuffer(),a+=n[p].length,s)break}return Di=!1,s}function Ge(o,e,t,i,n,r=0,s=0,a=0,l=0,d=null,p=!1){let u,f;p?(u=Nn,f=Ho):(u=Ho,f=Nn);const m=u.float32Array,y=u.uint32Array,h=u.uint16Array,x=f.float32Array,g=f.uint32Array,A=f.uint16Array,b=o*2,C=e*2,B=Ce(b,h),R=Ce(C,A);let v=!1;if(R&&B)p?v=n(Me(e,g),we(e*2,A),Me(o,y),we(o*2,h),l,s+e,a,r+o):v=n(Me(o,y),we(o*2,h),Me(e,g),we(e*2,A),a,r+o,l,s+e);else if(R){const S=pt.getPrimitive();ce(e,x,S),S.applyMatrix4(t);const M=Ie(o),D=De(o,y);ce(M,m,Yt),ce(D,m,Zt);const w=S.intersectsBox(Yt),K=S.intersectsBox(Zt);v=w&&Ge(e,M,i,t,n,s,r,l,a+1,S,!p)||K&&Ge(e,D,i,t,n,s,r,l,a+1,S,!p),pt.releasePrimitive(S)}else{const S=Ie(e),M=De(e,g);ce(S,x,Ki),ce(M,x,wi);const D=d.intersectsBox(Ki),w=d.intersectsBox(wi);if(D&&w)v=Ge(o,S,t,i,n,r,s,a,l+1,d,p)||Ge(o,M,t,i,n,r,s,a,l+1,d,p);else if(D)if(B)v=Ge(o,S,t,i,n,r,s,a,l+1,d,p);else{const K=pt.getPrimitive();K.copy(Ki).applyMatrix4(t);const I=Ie(o),T=De(o,y);ce(I,m,Yt),ce(T,m,Zt);const k=K.intersectsBox(Yt),j=K.intersectsBox(Zt);v=k&&Ge(S,I,i,t,n,s,r,l,a+1,K,!p)||j&&Ge(S,T,i,t,n,s,r,l,a+1,K,!p),pt.releasePrimitive(K)}else if(w)if(B)v=Ge(o,M,t,i,n,r,s,a,l+1,d,p);else{const K=pt.getPrimitive();K.copy(wi).applyMatrix4(t);const I=Ie(o),T=De(o,y);ce(I,m,Yt),ce(T,m,Zt);const k=K.intersectsBox(Yt),j=K.intersectsBox(Zt);v=k&&Ge(M,I,i,t,n,s,r,l,a+1,K,!p)||j&&Ge(M,T,i,t,n,s,r,l,a+1,K,!p),pt.releasePrimitive(K)}}return v}const yn=new ve,Mr=new de,Tm={strategy:el,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class Ts{static serialize(e,t={}){t={cloneBuffers:!0,...t};const i=e.geometry,n=e._roots,r=e._indirectBuffer,s=i.getIndex();let a;return t.cloneBuffers?a={roots:n.map(l=>l.slice()),index:s?s.array.slice():null,indirectBuffer:r?r.slice():null}:a={roots:n,index:s?s.array:null,indirectBuffer:r},a}static deserialize(e,t,i={}){i={setIndex:!0,indirect:!!e.indirectBuffer,...i};const{index:n,roots:r,indirectBuffer:s}=e,a=new Ts(t,{...i,[Ci]:!0});if(a._roots=r,a._indirectBuffer=s||null,i.setIndex){const l=t.getIndex();if(l===null){const d=new pe(e.index,1,!1);t.setIndex(d)}else l.array!==n&&(l.array.set(n),l.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...Tm,[Ci]:!1},t),t.useSharedArrayBuffer&&!wm())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[Ci]||(VA(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new de))),this.resolveTriangleIndex=t.indirect?i=>this._indirectBuffer[i]:i=>i}refit(e=null){return(this.indirect?ym:rm)(this,e)}traverse(e,t=0){const i=this._roots[t],n=new Uint32Array(i),r=new Uint16Array(i);s(0);function s(a,l=0){const d=a*2,p=r[d+15]===_n;if(p){const u=n[a+6],f=r[d+14];e(l,p,new Float32Array(i,a*4,6),u,f)}else{const u=a+Ft/4,f=n[a+6],m=n[a+7];e(l,p,new Float32Array(i,a*4,6),m)||(s(u,l+1),s(f,l+1))}}}raycast(e,t=Pn,i=0,n=1/0){const r=this._roots,s=this.geometry,a=[],l=t.isMaterial,d=Array.isArray(t),p=s.groups,u=l?t.side:t,f=this.indirect?bm:um;for(let m=0,y=r.length;m<y;m++){const h=d?t[p[m].materialIndex].side:u,x=a.length;if(f(this,m,h,e,a,i,n),d){const g=p[m].materialIndex;for(let A=x,b=a.length;A<b;A++)a[A].face.materialIndex=g}}return a}raycastFirst(e,t=Pn,i=0,n=1/0){const r=this._roots,s=this.geometry,a=t.isMaterial,l=Array.isArray(t);let d=null;const p=s.groups,u=a?t.side:t,f=this.indirect?Fm:fm;for(let m=0,y=r.length;m<y;m++){const h=l?t[p[m].materialIndex].side:u,x=f(this,m,h,e,i,n);x!=null&&(d==null||x.distance<d.distance)&&(d=x,l&&(x.face.materialIndex=p[m].materialIndex))}return d}intersectsGeometry(e,t){let i=!1;const n=this._roots,r=this.indirect?Bm:pm;for(let s=0,a=n.length;s<a&&(i=r(this,s,e,t),!i);s++);return i}shapecast(e){const t=je.getPrimitive(),i=this.indirect?cm:sm;let{boundsTraverseOrder:n,intersectsBounds:r,intersectsRange:s,intersectsTriangle:a}=e;if(s&&a){const u=s;s=(f,m,y,h,x)=>u(f,m,y,h,x)?!0:i(f,m,this,a,y,h,t)}else s||(a?s=(u,f,m,y)=>i(u,f,this,a,m,y,t):s=(u,f,m)=>m);let l=!1,d=0;const p=this._roots;for(let u=0,f=p.length;u<f;u++){const m=p[u];if(l=$A(this,u,r,s,n,d),l)break;d+=m.byteLength}return je.releasePrimitive(t),l}bvhcast(e,t,i){let{intersectsRanges:n,intersectsTriangles:r}=i;const s=je.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,d=this.indirect?y=>{const h=this.resolveTriangleIndex(y);fe(s,h*3,a,l)}:y=>{fe(s,y*3,a,l)},p=je.getPrimitive(),u=e.geometry.index,f=e.geometry.attributes.position,m=e.indirect?y=>{const h=e.resolveTriangleIndex(y);fe(p,h*3,u,f)}:y=>{fe(p,y*3,u,f)};if(r){const y=(h,x,g,A,b,C,B,R)=>{for(let v=g,S=g+A;v<S;v++){m(v),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let M=h,D=h+x;M<D;M++)if(d(M),s.needsUpdate=!0,r(s,p,M,v,b,C,B,R))return!0}return!1};if(n){const h=n;n=function(x,g,A,b,C,B,R,v){return h(x,g,A,b,C,B,R,v)?!0:y(x,g,A,b,C,B,R,v)}}else n=y}return Dm(this,e,t,n)}intersectsBox(e,t){return yn.set(e.min,e.max,t),yn.needsUpdate=!0,this.shapecast({intersectsBounds:i=>yn.intersectsBox(i),intersectsTriangle:i=>yn.intersectsTriangle(i)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,i={},n={},r=0,s=1/0){return(this.indirect?Km:xm)(this,e,t,i,n,r,s)}closestPointToPoint(e,t={},i=0,n=1/0){return em(this,e,t,i,n)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(i=>{ce(0,new Float32Array(i),Mr),e.union(Mr)}),e}}function Em(o){switch(o){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function Um(o){switch(o){case 1:return jt;case 2:return Ua;case 3:return ye;case 4:return ye}}function Kr(o){switch(o){case 1:return Xf;case 2:return Ea;case 3:return $i;case 4:return $i}}class ll extends Te{constructor(){super(),this.minFilter=Ae,this.magFilter=Ae,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){const t=this.overrideItemSize,i=e.itemSize,n=e.count;if(t!==null){if(i*n%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=n*i/t}const r=e.itemSize,s=e.count,a=e.normalized,l=e.array.constructor,d=l.BYTES_PER_ELEMENT;let p=this._forcedType,u=r;if(p===null)switch(l){case Float32Array:p=Be;break;case Uint8Array:case Uint16Array:case Uint32Array:p=jo;break;case Int8Array:case Int16Array:case Int32Array:p=ai;break}let f,m,y,h,x=Em(r);switch(p){case Be:y=1,m=Um(r),a&&d===1?(h=l,x+="8",l===Uint8Array?f=_i:(f=tr,x+="_SNORM")):(h=Float32Array,x+="32F",f=Be);break;case ai:x+=d*8+"I",y=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,m=Kr(r),d===1?(h=Int8Array,f=tr):d===2?(h=Int16Array,f=Vf):(h=Int32Array,f=ai);break;case jo:x+=d*8+"UI",y=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,m=Kr(r),d===1?(h=Uint8Array,f=_i):d===2?(h=Uint16Array,f=Wf):(h=Uint32Array,f=jo);break}u===3&&(m===ye||m===$i)&&(u=4);const g=Math.ceil(Math.sqrt(s))||1,A=u*g*g,b=new h(A),C=e.normalized;e.normalized=!1;for(let B=0;B<s;B++){const R=u*B;b[R]=e.getX(B)/y,r>=2&&(b[R+1]=e.getY(B)/y),r>=3&&(b[R+2]=e.getZ(B)/y,u===4&&(b[R+3]=1)),r>=4&&(b[R+3]=e.getW(B)/y)}e.normalized=C,this.internalFormat=x,this.format=m,this.type=f,this.image.width=g,this.image.height=g,this.image.data=b,this.needsUpdate=!0,this.dispose(),e.itemSize=i,e.count=n}}class cl extends ll{constructor(){super(),this._forcedType=jo}}class ul extends ll{constructor(){super(),this._forcedType=Be}}class Im{constructor(){this.index=new cl,this.position=new ul,this.bvhBounds=new Te,this.bvhContents=new Te,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){const{geometry:t}=e;if(km(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){const i=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==i.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{const n=nl(ol(t));this._cachedIndexAttr=new pe(n,1,!1)}jm(t,i,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){const{index:e,position:t,bvhBounds:i,bvhContents:n}=this;e&&e.dispose(),t&&t.dispose(),i&&i.dispose(),n&&n.dispose()}}function jm(o,e,t){const i=t.array,n=o.index?o.index.array:null;for(let r=0,s=e.length;r<s;r++){const a=3*r,l=3*e[r];for(let d=0;d<3;d++)i[a+d]=n?n[l+d]:l+d}}function km(o,e,t){const i=o._roots;if(i.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const n=i[0],r=new Uint16Array(n),s=new Uint32Array(n),a=new Float32Array(n),l=n.byteLength/Ft,d=2*Math.ceil(Math.sqrt(l/2)),p=new Float32Array(4*d*d),u=Math.ceil(Math.sqrt(l)),f=new Uint32Array(2*u*u);for(let m=0;m<l;m++){const y=m*Ft/4,h=y*2,x=y;for(let g=0;g<3;g++)p[8*m+0+g]=a[x+0+g],p[8*m+4+g]=a[x+3+g];if(Ce(h,r)){const g=we(h,r),A=Me(y,s),b=4294901760|g;f[m*2+0]=b,f[m*2+1]=A}else{const g=4*De(y,s)/Ft,A=Ks(y,s);f[m*2+0]=A,f[m*2+1]=g}}e.image.data=p,e.image.width=d,e.image.height=d,e.format=ye,e.type=Be,e.internalFormat="RGBA32F",e.minFilter=Ae,e.magFilter=Ae,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=f,t.image.width=u,t.image.height=u,t.format=Ea,t.type=jo,t.internalFormat="RG32UI",t.minFilter=Ae,t.magFilter=Ae,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}const Kt=new U,wt=new U,Dt=new U,wr=new Pe,bn=new U,Ti=new U,Dr=new Pe,Tr=new Pe,Cn=new X,Er=new X;function vo(o,e){if(!o&&!e)return;const t=o.count===e.count,i=o.normalized===e.normalized,n=o.array.constructor===e.array.constructor,r=o.itemSize===e.itemSize;if(!t||!i||!n||!r)throw new Error}function Do(o,e=null){const t=o.array.constructor,i=o.normalized,n=o.itemSize,r=e===null?o.count:e;return new pe(new t(n*r),n,i)}function dl(o,e,t=0){if(o.isInterleavedBufferAttribute){const i=o.itemSize;for(let n=0,r=o.count;n<r;n++){const s=n+t;e.setX(s,o.getX(n)),i>=2&&e.setY(s,o.getY(n)),i>=3&&e.setZ(s,o.getZ(n)),i>=4&&e.setW(s,o.getW(n))}}else{const i=e.array,n=i.constructor,r=i.BYTES_PER_ELEMENT*o.itemSize*t;new n(i.buffer,r,o.array.length).set(o.array)}}function Pm(o,e,t){const i=o.elements,n=e.elements;for(let r=0,s=n.length;r<s;r++)i[r]+=n[r]*t}function Ur(o,e,t){const i=o.skeleton,n=o.geometry,r=i.bones,s=i.boneInverses;Dr.fromBufferAttribute(n.attributes.skinIndex,e),Tr.fromBufferAttribute(n.attributes.skinWeight,e),Cn.elements.fill(0);for(let a=0;a<4;a++){const l=Tr.getComponent(a);if(l!==0){const d=Dr.getComponent(a);Er.multiplyMatrices(r[d].matrixWorld,s[d]),Pm(Cn,Er,l)}}return Cn.multiply(o.bindMatrix).premultiply(o.bindMatrixInverse),t.transformDirection(Cn),t}function Ei(o,e,t,i,n){bn.set(0,0,0);for(let r=0,s=o.length;r<s;r++){const a=e[r],l=o[r];a!==0&&(Ti.fromBufferAttribute(l,i),t?bn.addScaledVector(Ti,a):bn.addScaledVector(Ti.sub(n),a))}n.add(bn)}function zm(o,e={useGroups:!1,updateIndex:!1,skipAttributes:[]},t=new Qe){const i=o[0].index!==null,{useGroups:n=!1,updateIndex:r=!1,skipAttributes:s=[]}=e,a=new Set(Object.keys(o[0].attributes)),l={};let d=0;t.clearGroups();for(let p=0;p<o.length;++p){const u=o[p];let f=0;if(i!==(u.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const m in u.attributes){if(!a.has(m))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.');l[m]===void 0&&(l[m]=[]),l[m].push(u.attributes[m]),f++}if(f!==a.size)throw new Error("StaticGeometryGenerator: Make sure all geometries have the same number of attributes.");if(n){let m;if(i)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else throw new Error("StaticGeometryGenerator: The geometry must have either an index or a position attribute");t.addGroup(d,m,p),d+=m}}if(i){let p=!1;if(!t.index){let u=0;for(let f=0;f<o.length;++f)u+=o[f].index.count;t.setIndex(new pe(new Uint32Array(u),1,!1)),p=!0}if(r||p){const u=t.index;let f=0,m=0;for(let y=0;y<o.length;++y){const h=o[y],x=h.index;if(s[y]!==!0)for(let g=0;g<x.count;++g)u.setX(f,x.getX(g)+m),f++;m+=h.attributes.position.count}}}for(const p in l){const u=l[p];if(!(p in t.attributes)){let y=0;for(const h in u)y+=u[h].count;t.setAttribute(p,Do(l[p][0],y))}const f=t.attributes[p];let m=0;for(let y=0,h=u.length;y<h;y++){const x=u[y];s[y]!==!0&&dl(x,f,m),m+=x.count}}return t}function Hm(o,e){if(o===null||e===null)return o===e;if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function Om(o){const{index:e,attributes:t}=o;if(e)for(let i=0,n=e.count;i<n;i+=3){const r=e.getX(i),s=e.getX(i+2);e.setX(i,s),e.setX(i+2,r)}else for(const i in t){const n=t[i],r=n.itemSize;for(let s=0,a=n.count;s<a;s+=3)for(let l=0;l<r;l++){const d=n.getComponent(s,l),p=n.getComponent(s+2,l);n.setComponent(s,l,p),n.setComponent(s+2,l,d)}}return o}class Gm{constructor(e){this.matrixWorld=new X,this.geometryHash=null,this.boneMatrices=null,this.primitiveCount=-1,this.mesh=e,this.update()}update(){const e=this.mesh,t=e.geometry,i=e.skeleton,n=(t.index?t.index.count:t.attributes.position.count)/3;if(this.matrixWorld.copy(e.matrixWorld),this.geometryHash=t.attributes.position.version,this.primitiveCount=n,i){i.boneTexture||i.computeBoneTexture(),i.update();const r=i.boneMatrices;!this.boneMatrices||this.boneMatrices.length!==r.length?this.boneMatrices=r.slice():this.boneMatrices.set(r)}else this.boneMatrices=null}didChange(){const e=this.mesh,t=e.geometry,i=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===t.attributes.position.version&&Hm(e.skeleton&&e.skeleton.boneMatrices||null,this.boneMatrices)&&this.primitiveCount===i)}}class Ir{constructor(e){Array.isArray(e)||(e=[e]);const t=[];e.forEach(i=>{i.traverseVisible(n=>{n.isMesh&&t.push(n)})}),this.meshes=t,this.useGroups=!0,this.applyWorldTransforms=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Array(t.length).fill().map(()=>new Qe),this._diffMap=new WeakMap}getMaterials(){const e=[];return this.meshes.forEach(t=>{Array.isArray(t.material)?e.push(...t.material):e.push(t.material)}),e}generate(e=new Qe){let t=[];const{meshes:i,useGroups:n,_intermediateGeometry:r,_diffMap:s}=this;for(let a=0,l=i.length;a<l;a++){const d=i[a],p=r[a],u=s.get(d);!u||u.didChange(d)?(this._convertToStaticGeometry(d,p),t.push(!1),u?u.update():s.set(d,new Gm(d))):t.push(!0)}if(r.length===0){e.setIndex(null);const a=e.attributes;for(const l in a)e.deleteAttribute(l);for(const l in this.attributes)e.setAttribute(this.attributes[l],new pe(new Float32Array(0),4,!1))}else zm(r,{useGroups:n,skipAttributes:t},e);for(const a in e.attributes)e.attributes[a].needsUpdate=!0;return e}_convertToStaticGeometry(e,t=new Qe){const i=e.geometry,n=this.applyWorldTransforms,r=this.attributes.includes("normal"),s=this.attributes.includes("tangent"),a=i.attributes,l=t.attributes;!t.index&&i.index&&(t.index=i.index.clone()),l.position||t.setAttribute("position",Do(a.position)),r&&!l.normal&&a.normal&&t.setAttribute("normal",Do(a.normal)),s&&!l.tangent&&a.tangent&&t.setAttribute("tangent",Do(a.tangent)),vo(i.index,t.index),vo(a.position,l.position),r&&vo(a.normal,l.normal),s&&vo(a.tangent,l.tangent);const d=a.position,p=r?a.normal:null,u=s?a.tangent:null,f=i.morphAttributes.position,m=i.morphAttributes.normal,y=i.morphAttributes.tangent,h=i.morphTargetsRelative,x=e.morphTargetInfluences,g=new Yf;g.getNormalMatrix(e.matrixWorld),i.index&&t.index.array.set(i.index.array);for(let A=0,b=a.position.count;A<b;A++)Kt.fromBufferAttribute(d,A),p&&wt.fromBufferAttribute(p,A),u&&(wr.fromBufferAttribute(u,A),Dt.fromBufferAttribute(u,A)),x&&(f&&Ei(f,x,h,A,Kt),m&&Ei(m,x,h,A,wt),y&&Ei(y,x,h,A,Dt)),e.isSkinnedMesh&&(e.applyBoneTransform(A,Kt),p&&Ur(e,A,wt),u&&Ur(e,A,Dt)),n&&Kt.applyMatrix4(e.matrixWorld),l.position.setXYZ(A,Kt.x,Kt.y,Kt.z),p&&(n&&wt.applyNormalMatrix(g),l.normal.setXYZ(A,wt.x,wt.y,wt.z)),u&&(n&&Dt.transformDirection(e.matrixWorld),l.tangent.setXYZW(A,Dt.x,Dt.y,Dt.z,wr.w));for(const A in this.attributes){const b=this.attributes[A];b==="position"||b==="tangent"||b==="normal"||!(b in a)||(l[b]||t.setAttribute(b,Do(a[b])),vo(a[b],l[b]),dl(a[b],l[b]))}return e.matrixWorld.determinant()<0&&Om(t),t}}const Lm=`

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
`,Nm=`

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
`,Jm=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`;function Qm(o,e,t=new U){const i=Math.PI*(o-.5),n=2*Math.PI*(e-.5);return t.x=Math.cos(n),t.y=Math.sin(i),t.z=Math.sin(n),t}const jr=F.forwardRef(({inclination:o=.6,azimuth:e=.1,distance:t=1e3,mieCoefficient:i=.005,mieDirectionalG:n=.8,rayleigh:r=.5,turbidity:s=10,sunPosition:a=Qm(o,e),...l},d)=>{const p=F.useMemo(()=>new U().setScalar(t),[t]),[u]=F.useState(()=>new Pp);return F.createElement("primitive",ro({object:u,ref:d,"material-uniforms-mieCoefficient-value":i,"material-uniforms-mieDirectionalG-value":n,"material-uniforms-rayleigh-value":r,"material-uniforms-sunPosition-value":a,"material-uniforms-turbidity-value":s,scale:p},l))});class Wm extends co{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:`
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
	      #include <${qa>=154?"colorspace_fragment":"encodings_fragment"}>
      }`})}}const Vm=o=>new U().setFromSpherical(new qf(o,Math.acos(1-Math.random()*2),Math.random()*2*Math.PI)),Xm=F.forwardRef(({radius:o=100,depth:e=50,count:t=5e3,saturation:i=0,factor:n=4,fade:r=!1,speed:s=1},a)=>{const l=F.useRef(),[d,p,u]=F.useMemo(()=>{const m=[],y=[],h=Array.from({length:t},()=>(.5+.5*Math.random())*n),x=new se;let g=o+e;const A=e/t;for(let b=0;b<t;b++)g-=A*Math.random(),m.push(...Vm(g).toArray()),x.setHSL(b/t,i,.9),y.push(x.r,x.g,x.b);return[new Float32Array(m),new Float32Array(y),new Float32Array(h)]},[t,e,n,o,i]);Pt(m=>l.current&&(l.current.uniforms.time.value=m.clock.elapsedTime*s));const[f]=F.useState(()=>new Wm);return F.createElement("points",{ref:a},F.createElement("bufferGeometry",null,F.createElement("bufferAttribute",{attach:"attributes-position",args:[d,3]}),F.createElement("bufferAttribute",{attach:"attributes-color",args:[p,3]}),F.createElement("bufferAttribute",{attach:"attributes-size",args:[u,1]})),F.createElement("primitive",{ref:l,object:f,attach:"material",blending:Zf,"uniforms-fade-value":r,depthWrite:!1,transparent:!0,vertexColors:!0}))}),Qo=F.createContext(null),Fn=new U,kr=new U,Ym=(o,e,t,i)=>{const n=e.dot(e),r=e.dot(o)-e.dot(t),s=e.dot(i);return s===0?-r/n:(Fn.copy(i).multiplyScalar(n/s).sub(e),kr.copy(i).multiplyScalar(r/s).add(t).sub(o),-Fn.dot(kr)/Fn.dot(Fn))},Zm=new U(0,1,0),Pr=new X,Ui=({direction:o,axis:e})=>{const{translation:t,translationLimits:i,annotations:n,annotationsClass:r,depthTest:s,scale:a,lineWidth:l,fixed:d,axisColors:p,hoveredColor:u,opacity:f,onDragStart:m,onDrag:y,onDragEnd:h,userData:x}=F.useContext(Qo),g=ze(E=>E.controls),A=F.useRef(null),b=F.useRef(null),C=F.useRef(null),B=F.useRef(0),[R,v]=F.useState(!1),S=F.useCallback(E=>{n&&(A.current.innerText=`${t.current[e].toFixed(2)}`,A.current.style.display="block"),E.stopPropagation();const P=new X().extractRotation(b.current.matrixWorld),z=E.point.clone(),L=new U().setFromMatrixPosition(b.current.matrixWorld),O=o.clone().applyMatrix4(P).normalize();C.current={clickPoint:z,dir:O},B.current=t.current[e],m({component:"Arrow",axis:e,origin:L,directions:[O]}),g&&(g.enabled=!1),E.target.setPointerCapture(E.pointerId)},[n,o,g,m,t,e]),M=F.useCallback(E=>{if(E.stopPropagation(),R||v(!0),C.current){const{clickPoint:P,dir:z}=C.current,[L,O]=(i==null?void 0:i[e])||[void 0,void 0];let Q=Ym(P,z,E.ray.origin,E.ray.direction);L!==void 0&&(Q=Math.max(Q,L-B.current)),O!==void 0&&(Q=Math.min(Q,O-B.current)),t.current[e]=B.current+Q,n&&(A.current.innerText=`${t.current[e].toFixed(2)}`),Pr.makeTranslation(z.x*Q,z.y*Q,z.z*Q),y(Pr)}},[n,y,R,t,i,e]),D=F.useCallback(E=>{n&&(A.current.style.display="none"),E.stopPropagation(),C.current=null,h(),g&&(g.enabled=!0),E.target.releasePointerCapture(E.pointerId)},[n,g,h]),w=F.useCallback(E=>{E.stopPropagation(),v(!1)},[]),{cylinderLength:K,coneWidth:I,coneLength:T,matrixL:k}=F.useMemo(()=>{const E=d?l/a*1.6:a/20,P=d?.2:a/5,z=d?1-P:a-P,L=new $e().setFromUnitVectors(Zm,o.clone().normalize()),O=new X().makeRotationFromQuaternion(L);return{cylinderLength:z,coneWidth:E,coneLength:P,matrixL:O}},[o,a,l,d]),j=R?u:p[e];return F.createElement("group",{ref:b},F.createElement("group",{matrix:k,matrixAutoUpdate:!1,onPointerDown:S,onPointerMove:M,onPointerUp:D,onPointerOut:w},n&&F.createElement(me,{position:[0,-T,0]},F.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:r,ref:A})),F.createElement("mesh",{visible:!1,position:[0,(K+T)/2,0],userData:x},F.createElement("cylinderGeometry",{args:[I*1.4,I*1.4,K+T,8,1]})),F.createElement(Ln,{transparent:!0,raycast:()=>null,depthTest:s,points:[0,0,0,0,K,0],lineWidth:l,side:kt,color:j,opacity:f,polygonOffset:!0,renderOrder:1,polygonOffsetFactor:-10,fog:!1}),F.createElement("mesh",{raycast:()=>null,position:[0,K+T/2,0],renderOrder:500},F.createElement("coneGeometry",{args:[I,T,24,1]}),F.createElement("meshBasicMaterial",{transparent:!0,depthTest:s,color:j,opacity:f,polygonOffset:!0,polygonOffsetFactor:-10,fog:!1}))))},Ii=new U,ji=new U,ki=o=>o*180/Math.PI,qm=o=>o*Math.PI/180,_m=(o,e,t,i,n)=>{Ii.copy(o).sub(t),ji.copy(e).sub(t);const r=i.dot(i),s=n.dot(n),a=Ii.dot(i)/r,l=Ii.dot(n)/s,d=ji.dot(i)/r,p=ji.dot(n)/s,u=Math.atan2(l,a);return Math.atan2(p,d)-u},$m=(o,e)=>{let t=Math.floor(o/e);return t=t<0?t+1:t,o-t*e},zr=o=>{let e=$m(o,2*Math.PI);return Math.abs(e)<1e-6?0:(e<0&&(e+=2*Math.PI),e)},Bn=new X,Hr=new U,vn=new Ia,Pi=new U,zi=({dir1:o,dir2:e,axis:t})=>{const{rotationLimits:i,annotations:n,annotationsClass:r,depthTest:s,scale:a,lineWidth:l,fixed:d,axisColors:p,hoveredColor:u,opacity:f,onDragStart:m,onDrag:y,onDragEnd:h,userData:x}=F.useContext(Qo),g=ze(j=>j.controls),A=F.useRef(null),b=F.useRef(null),C=F.useRef(0),B=F.useRef(0),R=F.useRef(null),[v,S]=F.useState(!1),M=F.useCallback(j=>{n&&(A.current.innerText=`${ki(B.current).toFixed(0)}º`,A.current.style.display="block"),j.stopPropagation();const E=j.point.clone(),P=new U().setFromMatrixPosition(b.current.matrixWorld),z=new U().setFromMatrixColumn(b.current.matrixWorld,0).normalize(),L=new U().setFromMatrixColumn(b.current.matrixWorld,1).normalize(),O=new U().setFromMatrixColumn(b.current.matrixWorld,2).normalize(),Q=new Jo().setFromNormalAndCoplanarPoint(O,P);R.current={clickPoint:E,origin:P,e1:z,e2:L,normal:O,plane:Q},m({component:"Rotator",axis:t,origin:P,directions:[z,L,O]}),g&&(g.enabled=!1),j.target.setPointerCapture(j.pointerId)},[n,g,m,t]),D=F.useCallback(j=>{if(j.stopPropagation(),v||S(!0),R.current){const{clickPoint:E,origin:P,e1:z,e2:L,normal:O,plane:Q}=R.current,[J,V]=(i==null?void 0:i[t])||[void 0,void 0];vn.copy(j.ray),vn.intersectPlane(Q,Pi),vn.direction.negate(),vn.intersectPlane(Q,Pi);let N=_m(E,Pi,P,z,L),te=ki(N);j.shiftKey&&(te=Math.round(te/10)*10,N=qm(te)),J!==void 0&&V!==void 0&&V-J<2*Math.PI?(N=zr(N),N=N>Math.PI?N-2*Math.PI:N,N=bt.clamp(N,J-C.current,V-C.current),B.current=C.current+N):(B.current=zr(C.current+N),B.current=B.current>Math.PI?B.current-2*Math.PI:B.current),n&&(te=ki(B.current),A.current.innerText=`${te.toFixed(0)}º`),Bn.makeRotationAxis(O,N),Hr.copy(P).applyMatrix4(Bn).sub(P).negate(),Bn.setPosition(Hr),y(Bn)}},[n,y,v,i,t]),w=F.useCallback(j=>{n&&(A.current.style.display="none"),j.stopPropagation(),C.current=B.current,R.current=null,h(),g&&(g.enabled=!0),j.target.releasePointerCapture(j.pointerId)},[n,g,h]),K=F.useCallback(j=>{j.stopPropagation(),S(!1)},[]),I=F.useMemo(()=>{const j=o.clone().normalize(),E=e.clone().normalize();return new X().makeBasis(j,E,j.clone().cross(E))},[o,e]),T=d?.65:a*.65,k=F.useMemo(()=>{const E=[];for(let P=0;P<=32;P++){const z=P*(Math.PI/2)/32;E.push(new U(Math.cos(z)*T,Math.sin(z)*T,0))}return E},[T]);return F.createElement("group",{ref:b,onPointerDown:M,onPointerMove:D,onPointerUp:w,onPointerOut:K,matrix:I,matrixAutoUpdate:!1},n&&F.createElement(me,{position:[T,T,0]},F.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:r,ref:A})),F.createElement(Ln,{points:k,lineWidth:l*4,visible:!1,userData:x}),F.createElement(Ln,{transparent:!0,raycast:()=>null,depthTest:s,points:k,lineWidth:l,side:kt,color:v?u:p[t],opacity:f,polygonOffset:!0,polygonOffsetFactor:-10,fog:!1}))},eh=(o,e,t)=>{const i=Math.abs(o.x)>=Math.abs(o.y)&&Math.abs(o.x)>=Math.abs(o.z)?0:Math.abs(o.y)>=Math.abs(o.x)&&Math.abs(o.y)>=Math.abs(o.z)?1:2,n=[0,1,2].sort((y,h)=>Math.abs(e.getComponent(h))-Math.abs(e.getComponent(y))),r=i===n[0]?n[1]:n[0],s=o.getComponent(i),a=o.getComponent(r),l=e.getComponent(i),d=e.getComponent(r),p=t.getComponent(i),f=(t.getComponent(r)-p*(a/s))/(d-l*(a/s));return[(p-f*l)/s,f]},Rn=new Ia,Sn=new U,Or=new X,Hi=({dir1:o,dir2:e,axis:t})=>{const{translation:i,translationLimits:n,annotations:r,annotationsClass:s,depthTest:a,scale:l,lineWidth:d,fixed:p,axisColors:u,hoveredColor:f,opacity:m,onDragStart:y,onDrag:h,onDragEnd:x,userData:g}=F.useContext(Qo),A=ze(z=>z.controls),b=F.useRef(null),C=F.useRef(null),B=F.useRef(null),R=F.useRef(0),v=F.useRef(0),[S,M]=F.useState(!1),D=F.useCallback(z=>{r&&(b.current.innerText=`${i.current[(t+1)%3].toFixed(2)}, ${i.current[(t+2)%3].toFixed(2)}`,b.current.style.display="block"),z.stopPropagation();const L=z.point.clone(),O=new U().setFromMatrixPosition(C.current.matrixWorld),Q=new U().setFromMatrixColumn(C.current.matrixWorld,0).normalize(),J=new U().setFromMatrixColumn(C.current.matrixWorld,1).normalize(),V=new U().setFromMatrixColumn(C.current.matrixWorld,2).normalize(),N=new Jo().setFromNormalAndCoplanarPoint(V,O);B.current={clickPoint:L,e1:Q,e2:J,plane:N},R.current=i.current[(t+1)%3],v.current=i.current[(t+2)%3],y({component:"Slider",axis:t,origin:O,directions:[Q,J,V]}),A&&(A.enabled=!1),z.target.setPointerCapture(z.pointerId)},[r,A,y,t]),w=F.useCallback(z=>{if(z.stopPropagation(),S||M(!0),B.current){const{clickPoint:L,e1:O,e2:Q,plane:J}=B.current,[V,N]=(n==null?void 0:n[(t+1)%3])||[void 0,void 0],[te,ue]=(n==null?void 0:n[(t+2)%3])||[void 0,void 0];Rn.copy(z.ray),Rn.intersectPlane(J,Sn),Rn.direction.negate(),Rn.intersectPlane(J,Sn),Sn.sub(L);let[le,oe]=eh(O,Q,Sn);V!==void 0&&(le=Math.max(le,V-R.current)),N!==void 0&&(le=Math.min(le,N-R.current)),te!==void 0&&(oe=Math.max(oe,te-v.current)),ue!==void 0&&(oe=Math.min(oe,ue-v.current)),i.current[(t+1)%3]=R.current+le,i.current[(t+2)%3]=v.current+oe,r&&(b.current.innerText=`${i.current[(t+1)%3].toFixed(2)}, ${i.current[(t+2)%3].toFixed(2)}`),Or.makeTranslation(le*O.x+oe*Q.x,le*O.y+oe*Q.y,le*O.z+oe*Q.z),h(Or)}},[r,h,S,i,n,t]),K=F.useCallback(z=>{r&&(b.current.style.display="none"),z.stopPropagation(),B.current=null,x(),A&&(A.enabled=!0),z.target.releasePointerCapture(z.pointerId)},[r,A,x]),I=F.useCallback(z=>{z.stopPropagation(),M(!1)},[]),T=F.useMemo(()=>{const z=o.clone().normalize(),L=e.clone().normalize();return new X().makeBasis(z,L,z.clone().cross(L))},[o,e]),k=p?1/7:l/7,j=p?.225:l*.225,E=S?f:u[t],P=F.useMemo(()=>[new U(0,0,0),new U(0,j,0),new U(j,j,0),new U(j,0,0),new U(0,0,0)],[j]);return F.createElement("group",{ref:C,matrix:T,matrixAutoUpdate:!1},r&&F.createElement(me,{position:[0,0,0]},F.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:s,ref:b})),F.createElement("group",{position:[k*1.7,k*1.7,0]},F.createElement("mesh",{visible:!0,onPointerDown:D,onPointerMove:w,onPointerUp:K,onPointerOut:I,scale:j,userData:g},F.createElement("planeGeometry",null),F.createElement("meshBasicMaterial",{transparent:!0,depthTest:a,color:E,polygonOffset:!0,polygonOffsetFactor:-10,side:kt,fog:!1})),F.createElement(Ln,{position:[-j/2,-j/2,0],transparent:!0,depthTest:a,points:P,lineWidth:d,color:E,opacity:m,polygonOffset:!0,polygonOffsetFactor:-10,userData:g,fog:!1})))},To=new U,Gr=new U,th=(o,e,t,i)=>{const n=e.dot(e),r=e.dot(o)-e.dot(t),s=e.dot(i);return s===0?-r/n:(To.copy(i).multiplyScalar(n/s).sub(e),Gr.copy(i).multiplyScalar(r/s).add(t).sub(o),-To.dot(Gr)/To.dot(To))},oh=new U(0,1,0),Ro=new U,Lr=new X,Oi=({direction:o,axis:e})=>{const{scaleLimits:t,annotations:i,annotationsClass:n,depthTest:r,scale:s,lineWidth:a,fixed:l,axisColors:d,hoveredColor:p,opacity:u,onDragStart:f,onDrag:m,onDragEnd:y,userData:h}=F.useContext(Qo),x=ze(P=>P.size),g=ze(P=>P.controls),A=F.useRef(null),b=F.useRef(null),C=F.useRef(null),B=F.useRef(1),R=F.useRef(1),v=F.useRef(null),[S,M]=F.useState(!1),D=l?1.2:1.2*s,w=F.useCallback(P=>{i&&(A.current.innerText=`${R.current.toFixed(2)}`,A.current.style.display="block"),P.stopPropagation();const z=new X().extractRotation(b.current.matrixWorld),L=P.point.clone(),O=new U().setFromMatrixPosition(b.current.matrixWorld),Q=o.clone().applyMatrix4(z).normalize(),J=b.current.matrixWorld.clone(),V=J.clone().invert(),N=l?1/Za(b.current.getWorldPosition(To),s,P.camera,x):1;v.current={clickPoint:L,dir:Q,mPLG:J,mPLGInv:V,offsetMultiplier:N},f({component:"Sphere",axis:e,origin:O,directions:[Q]}),g&&(g.enabled=!1),P.target.setPointerCapture(P.pointerId)},[i,g,o,f,e,l,s,x]),K=F.useCallback(P=>{if(P.stopPropagation(),S||M(!0),v.current){const{clickPoint:z,dir:L,mPLG:O,mPLGInv:Q,offsetMultiplier:J}=v.current,[V,N]=(t==null?void 0:t[e])||[1e-5,void 0],ue=th(z,L,P.ray.origin,P.ray.direction)*J,le=l?ue:ue/s;let oe=Math.pow(2,le*.2);P.shiftKey&&(oe=Math.round(oe*10)/10),oe=Math.max(oe,V/B.current),N!==void 0&&(oe=Math.min(oe,N/B.current)),R.current=B.current*oe,C.current.position.set(0,D+ue,0),i&&(A.current.innerText=`${R.current.toFixed(2)}`),Ro.set(1,1,1),Ro.setComponent(e,oe),Lr.makeScale(Ro.x,Ro.y,Ro.z).premultiply(O).multiply(Q),m(Lr)}},[i,D,m,S,t,e]),I=F.useCallback(P=>{i&&(A.current.style.display="none"),P.stopPropagation(),B.current=R.current,v.current=null,C.current.position.set(0,D,0),y(),g&&(g.enabled=!0),P.target.releasePointerCapture(P.pointerId)},[i,g,y,D]),T=F.useCallback(P=>{P.stopPropagation(),M(!1)},[]),{radius:k,matrixL:j}=F.useMemo(()=>{const P=l?a/s*1.8:s/22.5,z=new $e().setFromUnitVectors(oh,o.clone().normalize()),L=new X().makeRotationFromQuaternion(z);return{radius:P,matrixL:L}},[o,s,a,l]),E=S?p:d[e];return F.createElement("group",{ref:b},F.createElement("group",{matrix:j,matrixAutoUpdate:!1,onPointerDown:w,onPointerMove:K,onPointerUp:I,onPointerOut:T},i&&F.createElement(me,{position:[0,D/2,0]},F.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:n,ref:A})),F.createElement("mesh",{ref:C,position:[0,D,0],renderOrder:500,userData:h},F.createElement("sphereGeometry",{args:[k,12,12]}),F.createElement("meshBasicMaterial",{transparent:!0,depthTest:r,color:E,opacity:u,polygonOffset:!0,polygonOffsetFactor:-10}))))},Nr=new X,Jr=new X,Qr=new X,Mn=new X,Gi=new X,qt=new X,Wr=new X,Vr=new X,Xr=new X,_t=new de,Li=new de,Yr=new U,Zr=new U,qr=new U,_r=new U,So=new U,$t=new U(1,0,0),eo=new U(0,1,0),to=new U(0,0,1),nh=F.forwardRef(({enabled:o=!0,matrix:e,onDragStart:t,onDrag:i,onDragEnd:n,autoTransform:r=!0,anchor:s,disableAxes:a=!1,disableSliders:l=!1,disableRotations:d=!1,disableScaling:p=!1,activeAxes:u=[!0,!0,!0],offset:f=[0,0,0],rotation:m=[0,0,0],scale:y=1,lineWidth:h=4,fixed:x=!1,translationLimits:g,rotationLimits:A,scaleLimits:b,depthTest:C=!0,axisColors:B=["#ff2060","#20df80","#2080ff"],hoveredColor:R="#ffff40",annotations:v=!1,annotationsClass:S,opacity:M=1,visible:D=!0,userData:w,children:K,...I},T)=>{const k=ze(N=>N.invalidate),j=F.useRef(null),E=F.useRef(null),P=F.useRef(null),z=F.useRef(null),L=F.useRef([0,0,0]),O=F.useRef(new U(1,1,1)),Q=F.useRef(new U(1,1,1));F.useLayoutEffect(()=>{s&&(z.current.updateWorldMatrix(!0,!0),Mn.copy(z.current.matrixWorld).invert(),_t.makeEmpty(),z.current.traverse(N=>{N.geometry&&(N.geometry.boundingBox||N.geometry.computeBoundingBox(),qt.copy(N.matrixWorld).premultiply(Mn),Li.copy(N.geometry.boundingBox),Li.applyMatrix4(qt),_t.union(Li))}),Yr.copy(_t.max).add(_t.min).multiplyScalar(.5),Zr.copy(_t.max).sub(_t.min).multiplyScalar(.5),qr.copy(Zr).multiply(new U(...s)).add(Yr),_r.set(...f).add(qr),P.current.position.copy(_r),k())});const J=F.useMemo(()=>({onDragStart:N=>{Nr.copy(E.current.matrix),Jr.copy(E.current.matrixWorld),t&&t(N),k()},onDrag:N=>{Qr.copy(j.current.matrixWorld),Mn.copy(Qr).invert(),Gi.copy(Jr).premultiply(N),qt.copy(Gi).premultiply(Mn),Wr.copy(Nr).invert(),Vr.copy(qt).multiply(Wr),r&&E.current.matrix.copy(qt),i&&i(qt,Vr,Gi,N),k()},onDragEnd:()=>{n&&n(),k()},translation:L,translationLimits:g,rotationLimits:A,axisColors:B,hoveredColor:R,opacity:M,scale:y,lineWidth:h,fixed:x,depthTest:C,userData:w,annotations:v,annotationsClass:S}),[t,i,n,L,g,A,b,C,y,h,x,...B,R,M,w,r,v,S]),V=new U;return Pt(N=>{if(x){const te=Za(P.current.getWorldPosition(V),y,N.camera,N.size);O.current.setScalar(te)}e&&e instanceof X&&(E.current.matrix=e),E.current.updateWorldMatrix(!0,!0),Xr.makeRotationFromEuler(P.current.rotation).setPosition(P.current.position).premultiply(E.current.matrixWorld),Q.current.setFromMatrixScale(Xr),So.copy(O.current).divide(Q.current),(Math.abs(P.current.scale.x-So.x)>1e-4||Math.abs(P.current.scale.y-So.y)>1e-4||Math.abs(P.current.scale.z-So.z)>1e-4)&&(P.current.scale.copy(So),N.invalidate())}),F.useImperativeHandle(T,()=>E.current,[]),F.createElement(Qo.Provider,{value:J},F.createElement("group",{ref:j},F.createElement("group",ro({ref:E,matrix:e,matrixAutoUpdate:!1},I),F.createElement("group",{visible:D,ref:P,position:f,rotation:m},o&&F.createElement(F.Fragment,null,!a&&u[0]&&F.createElement(Ui,{axis:0,direction:$t}),!a&&u[1]&&F.createElement(Ui,{axis:1,direction:eo}),!a&&u[2]&&F.createElement(Ui,{axis:2,direction:to}),!l&&u[0]&&u[1]&&F.createElement(Hi,{axis:2,dir1:$t,dir2:eo}),!l&&u[0]&&u[2]&&F.createElement(Hi,{axis:1,dir1:to,dir2:$t}),!l&&u[2]&&u[1]&&F.createElement(Hi,{axis:0,dir1:eo,dir2:to}),!d&&u[0]&&u[1]&&F.createElement(zi,{axis:2,dir1:$t,dir2:eo}),!d&&u[0]&&u[2]&&F.createElement(zi,{axis:1,dir1:to,dir2:$t}),!d&&u[2]&&u[1]&&F.createElement(zi,{axis:0,dir1:eo,dir2:to}),!p&&u[0]&&F.createElement(Oi,{axis:0,direction:$t}),!p&&u[1]&&F.createElement(Oi,{axis:1,direction:eo}),!p&&u[2]&&F.createElement(Oi,{axis:2,direction:to}))),F.createElement("group",{ref:z},K))))});class Es extends co{constructor(e){super(e);for(const t in this.uniforms)Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(i){this.uniforms[t].value=i}})}setDefine(e,t=void 0){t==null?e in this.defines&&(delete this.defines[e],this.needsUpdate=!0):this.defines[e]!==t&&(this.defines[e]=t,this.needsUpdate=!0)}}class ih extends Es{constructor(e){super({blending:ys,uniforms:{target1:{value:null},target2:{value:null},opacity:{value:1}},vertexShader:`

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

				}`}),this.setValues(e)}}function Kn(o=1){let e="uint";return o>1&&(e="uvec"+o),`
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
	`}function wn(o=1){let e="uint",t="float",i="",n=".r",r="1u";return o>1&&(e="uvec"+o,t="vec"+o,i=o+"",o===2?(n=".rg",r="uvec2( 1u, 2u )"):o===3?(n=".rgb",r="uvec3( 1u, 2u, 3u )"):(n="",r="uvec4( 1u, 2u, 3u, 4u )")),`

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
	`}const fl=`

	// Utils
	const float SOBOL_FACTOR = 1.0 / 16777216.0;
	const uint SOBOL_MAX_POINTS = 256u * 256u;

	${Kn(1)}
	${Kn(2)}
	${Kn(3)}
	${Kn(4)}

	uint sobolHash( uint x ) {

		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}

`,sh=`

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

`,rh=`

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

	${wn(1)}
	${wn(2)}
	${wn(3)}
	${wn(4)}

`;class ah extends Es{constructor(){super({blending:ys,uniforms:{resolution:{value:new Ee}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`

				${fl}
				${sh}

				varying vec2 vUv;
				uniform vec2 resolution;
				void main() {

					uint index = uint( gl_FragCoord.y ) * uint( resolution.x ) + uint( gl_FragCoord.x );
					gl_FragColor = generateSobolPoint( index );

				}
			`})}}class lh{generate(e,t=256){const i=new En(t,t,{type:Be,format:ye,minFilter:Ae,magFilter:Ae,generateMipmaps:!1}),n=e.getRenderTarget();e.setRenderTarget(i);const r=new ao(new ah);return r.material.resolution.set(t,t),r.render(e),e.setRenderTarget(n),r.dispose(),i}}function*ch(){const{_renderer:o,_fsQuad:e,_blendQuad:t,_primaryTarget:i,_blendTargets:n,_sobolTarget:r,_subframe:s,alpha:a,camera:l,material:d}=this,p=new Pe,u=new Pe,f=t.material;let[m,y]=n;for(;;){a?(f.opacity=this._opacityFactor/(this._samples+1),d.blending=ys,d.opacity=1):(d.opacity=this._opacityFactor/(this._samples+1),d.blending=_f);const[h,x,g,A]=s,b=i.width,C=i.height;d.resolution.set(b*g,C*A),d.sobolTexture=r.texture,d.stratifiedTexture.init(20,d.bounces+d.transmissiveBounces+5),d.stratifiedTexture.next(),d.seed++;const B=this.tiles.x||1,R=this.tiles.y||1,v=B*R,S=Math.ceil(b*g),M=Math.ceil(C*A),D=Math.floor(h*b),w=Math.floor(x*C),K=Math.ceil(S/B),I=Math.ceil(M/R);for(let T=0;T<R;T++)for(let k=0;k<B;k++){d.cameraWorldMatrix.copy(l.matrixWorld),d.invProjectionMatrix.copy(l.projectionMatrixInverse);let j=0;l.projectionMatrix.elements[15]>0&&(j=1),l.isEquirectCamera&&(j=2),d.setDefine("CAMERA_TYPE",j);const E=o.getRenderTarget(),P=o.autoClear,z=o.getScissorTest();o.getScissor(p),o.getViewport(u);let L=k,O=T;if(!this.stableTiles){const J=this._currentTile%(B*R);L=J%B,O=~~(J/B),this._currentTile=J+1}const Q=R-O-1;i.scissor.set(D+L*K,w+Q*I,Math.min(K,S-L*K),Math.min(I,M-Q*I)),i.viewport.set(D,w,S,M),o.setRenderTarget(i),o.setScissorTest(!0),o.autoClear=!1,e.render(o),o.setViewport(u),o.setScissor(p),o.setScissorTest(z),o.setRenderTarget(E),o.autoClear=P,a&&(f.target1=m.texture,f.target2=i.texture,o.setRenderTarget(y),t.render(o),o.setRenderTarget(E)),this._samples+=1/v,k===B-1&&T===R-1&&(this._samples=Math.round(this._samples)),yield}[m,y]=[y,m]}}const $r=new se;class uh{get material(){return this._fsQuad.material}set material(e){this._fsQuad.material=e}get target(){return this._alpha?this._blendTargets[1]:this._primaryTarget}set alpha(e){this._alpha!==e&&(e||(this._blendTargets[0].dispose(),this._blendTargets[1].dispose()),this._alpha=e,this.reset())}get alpha(){return this._alpha}get samples(){return this._samples}constructor(e){this.camera=null,this.tiles=new Ee(1,1),this.stableNoise=!1,this.stableTiles=!0,this._samples=0,this._subframe=new Pe(0,0,1,1),this._opacityFactor=1,this._renderer=e,this._alpha=!1,this._fsQuad=new ao(null),this._blendQuad=new ao(new ih),this._task=null,this._currentTile=0,this._sobolTarget=new lh().generate(e);const t=e.extensions.get("OES_texture_float_linear");this._primaryTarget=new En(1,1,{format:ye,type:t?Be:Se}),this._blendTargets=[new En(1,1,{format:ye,type:t?Be:Se}),new En(1,1,{format:ye,type:t?Be:Se})]}setSize(e,t){e=Math.ceil(e),t=Math.ceil(t),!(this._primaryTarget.width===e&&this._primaryTarget.height===t)&&(this._primaryTarget.setSize(e,t),this._blendTargets[0].setSize(e,t),this._blendTargets[1].setSize(e,t),this.reset())}dispose(){this._primaryTarget.dispose(),this._blendTargets[0].dispose(),this._blendTargets[1].dispose(),this._sobolTarget.dispose(),this._fsQuad.dispose(),this._blendQuad.dispose(),this._task=null}reset(){const{_renderer:e,_primaryTarget:t,_blendTargets:i}=this,n=e.getRenderTarget(),r=e.getClearAlpha();e.getClearColor($r),e.setRenderTarget(t),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(i[0]),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(i[1]),e.setClearColor(0,0),e.clearColor(),e.setClearColor($r,r),e.setRenderTarget(n),this._samples=0,this._task=null,this.stableNoise&&(this.material.seed=0)}update(){this._task||(this._task=ch.call(this)),this._task.next()}}function dh(o,e,t){const i=o.index,r=o.attributes.position.count,s=i?i.count:r;let a=o.groups;a.length===0&&(a=[{count:s,start:0,materialIndex:0}]);let l;t.length<=255?l=new Uint8Array(r):l=new Uint16Array(r);for(let d=0;d<a.length;d++){const p=a[d],u=p.start,f=p.count,m=Math.min(f,s-u),y=Array.isArray(e)?e[p.materialIndex]:e,h=t.indexOf(y);for(let x=0;x<m;x++){let g=u+x;i&&(g=i.getX(g)),l[g]=h}}return new pe(l,1,!1)}function fh(o,e){const{attributes:t=[],normalMapRequired:i=!1}=e;if(!o.attributes.normal&&t&&t.includes("normal")&&o.computeVertexNormals(),!o.attributes.uv&&t&&t.includes("uv")){const n=o.attributes.position.count;o.setAttribute("uv",new pe(new Float32Array(n*2),2,!1))}if(!o.attributes.uv2&&t&&t.includes("uv2")){const n=o.attributes.position.count;o.setAttribute("uv2",new pe(new Float32Array(n*2),2,!1))}if(!o.attributes.tangent&&t&&t.includes("tangent"))if(i)o.index===null&&(o=$f(o)),o.computeTangents();else{const n=o.attributes.position.count;o.setAttribute("tangent",new pe(new Float32Array(n*4),4,!1))}if(!o.attributes.color&&t&&t.includes("color")){const n=o.attributes.position.count,r=new Float32Array(n*4);r.fill(1),o.setAttribute("color",new pe(r,4))}if(!o.index){const n=o.attributes.position.count,r=new Array(n);for(let s=0;s<n;s++)r[s]=s;o.setIndex(r)}}const ph=new it;function Ah(){const o=new Qe;return o.setAttribute("position",new pe(new Float32Array(9),3)),new We(o,ph)}class mh{get initialized(){return!!this.bvh}constructor(e){Array.isArray(e)||(e=[e]);const t=[...e];t.length===0&&t.push(Ah()),this.bvhOptions={},this.attributes=["position","normal","tangent","color","uv","uv2"],this.objects=t,this.bvh=null,this.geometry=new Qe,this.materials=null,this.textures=null,this.lights=[],this.staticGeometryGenerator=new Ir(this.objects)}reset(){this.bvh=null,this.geometry.dispose(),this.geometry=new Qe,this.materials=null,this.textures=null,this.lights=[],this.staticGeometryGenerator=new Ir(this.objects)}dispose(){}prepScene(){if(this.bvh!==null)return;const{objects:e,staticGeometryGenerator:t,geometry:i,lights:n,attributes:r}=this;for(let d=0,p=e.length;d<p;d++)e[d].traverse(u=>{if(u.isMesh){const f=!!u.material.normalMap;fh(u.geometry,{attributes:r,normalMapRequired:f})}else(u.isRectAreaLight||u.isSpotLight||u.isPointLight||u.isDirectionalLight)&&n.push(u)});const s=new Set,a=t.getMaterials();a.forEach(d=>{for(const p in d){const u=d[p];u&&u.isTexture&&s.add(u)}}),t.attributes=r,t.generate(i);const l=dh(i,a,a);i.setAttribute("materialIndex",l),i.clearGroups(),this.materials=a,this.textures=Array.from(s)}generate(){const{objects:e,staticGeometryGenerator:t,geometry:i,bvhOptions:n}=this;if(this.bvh===null)return this.prepScene(),this.bvh=new Ts(i,{strategy:tl,maxLeafTris:1,...n}),{lights:this.lights,bvh:this.bvh,materials:this.materials,textures:this.textures,objects:e};{const{bvh:r}=this;return t.generate(i),r.refit(),{lights:this.lights,bvh:this.bvh,materials:this.materials,textures:this.textures,objects:e}}}}class hh extends xs{set bokehSize(e){this.fStop=this.getFocalLength()/e}get bokehSize(){return this.getFocalLength()/this.fStop}constructor(...e){super(...e),this.fStop=1.4,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=25,this.anamorphicRatio=1}copy(e,t){return super.copy(e,t),this.fStop=e.fStop,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio,this}}function fs(o){return`${o.source.uuid}:${o.colorSpace}`}function pl(o){const e=new Set,t=[];for(let i=0,n=o.length;i<n;i++){const r=o[i],s=fs(r);e.has(s)||(e.add(s),t.push(r))}return t}const Al=45,oo=Al*4,ea=14*4+0,ta=14*4+1;class gh{constructor(){this._features={}}isUsed(e){return e in this._features}setUsed(e,t=!0){t===!1?delete this._features[e]:this._features[e]=!0}reset(){this._features={}}}class xh extends Te{constructor(){super(new Float32Array(4),1,1),this.format=ye,this.type=Be,this.wrapS=vt,this.wrapT=vt,this.minFilter=Ae,this.magFilter=Ae,this.generateMipmaps=!1,this.threeCompatibilityTransforms=!1,this.features=new gh}setCastShadow(e,t){const i=this.image.data,n=e*oo+ta;i[n]=t?0:1}getCastShadow(e){const t=this.image.data,i=e*oo+ta;return!t[i]}setMatte(e,t){const i=this.image.data,n=e*oo+ea;i[n]=t?1:0}getMatte(e){const t=this.image.data,i=e*oo+ea;return!!t[i]}updateFrom(e,t){function i(x,g,A=-1){if(g in x&&x[g]){const b=fs(x[g]);return y[b]}else return A}function n(x,g,A){return g in x?x[g]:A}function r(x){return x.map||x.specularMap||x.displacementMap||x.normalMap||x.bumpMap||x.roughnessMap||x.metalnessMap||x.alphaMap||x.emissiveMap||x.clearcoatMap||x.clearcoatNormalMap||x.clearcoatRoughnessMap||x.iridescenceMap||x.iridescenceThicknessMap||x.specularIntensityMap||x.specularColorMap||x.transmissionMap||x.thicknessMap||x.sheenColorMap||x.sheenRoughnessMap||null}function s(x,g,A,b){let C;if(p?C=r(x):C=x[g]&&x[g].isTexture?x[g]:null,C){const B=C.matrix.elements;let R=0;A[b+R++]=B[0],A[b+R++]=B[3],A[b+R++]=B[6],R++,A[b+R++]=B[1],A[b+R++]=B[4],A[b+R++]=B[7],R++}return 8}let a=0;const l=e.length*Al,d=Math.ceil(Math.sqrt(l))||1,{threeCompatibilityTransforms:p,image:u,features:f}=this,m=pl(t),y={};for(let x=0,g=m.length;x<g;x++)y[fs(m[x])]=x;u.width!==d&&(this.dispose(),u.data=new Float32Array(d*d*4),u.width=d,u.height=d);const h=u.data;f.reset();for(let x=0,g=e.length;x<g;x++){const A=e[x];if(A.isFogVolumeMaterial){f.setUsed("FOG");for(let B=0;B<oo;B++)h[a+B]=0;h[a+0*4+0]=A.color.r,h[a+0*4+1]=A.color.g,h[a+0*4+2]=A.color.b,h[a+2*4+3]=n(A,"emissiveIntensity",0),h[a+3*4+0]=A.emissive.r,h[a+3*4+1]=A.emissive.g,h[a+3*4+2]=A.emissive.b,h[a+13*4+1]=A.density,h[a+13*4+3]=0,h[a+14*4+2]=4,a+=oo;continue}h[a++]=A.color.r,h[a++]=A.color.g,h[a++]=A.color.b,h[a++]=i(A,"map"),h[a++]=n(A,"metalness",0),h[a++]=i(A,"metalnessMap"),h[a++]=n(A,"roughness",0),h[a++]=i(A,"roughnessMap"),h[a++]=n(A,"ior",1.5),h[a++]=n(A,"transmission",0),h[a++]=i(A,"transmissionMap"),h[a++]=n(A,"emissiveIntensity",0),"emissive"in A?(h[a++]=A.emissive.r,h[a++]=A.emissive.g,h[a++]=A.emissive.b):(h[a++]=0,h[a++]=0,h[a++]=0),h[a++]=i(A,"emissiveMap"),h[a++]=i(A,"normalMap"),"normalScale"in A?(h[a++]=A.normalScale.x,h[a++]=A.normalScale.y):(h[a++]=1,h[a++]=1),h[a++]=n(A,"clearcoat",0),h[a++]=i(A,"clearcoatMap"),h[a++]=n(A,"clearcoatRoughness",0),h[a++]=i(A,"clearcoatRoughnessMap"),h[a++]=i(A,"clearcoatNormalMap"),"clearcoatNormalScale"in A?(h[a++]=A.clearcoatNormalScale.x,h[a++]=A.clearcoatNormalScale.y):(h[a++]=1,h[a++]=1),a++,h[a++]=n(A,"sheen",0),"sheenColor"in A?(h[a++]=A.sheenColor.r,h[a++]=A.sheenColor.g,h[a++]=A.sheenColor.b):(h[a++]=0,h[a++]=0,h[a++]=0),h[a++]=i(A,"sheenColorMap"),h[a++]=n(A,"sheenRoughness",0),h[a++]=i(A,"sheenRoughnessMap"),h[a++]=i(A,"iridescenceMap"),h[a++]=i(A,"iridescenceThicknessMap"),h[a++]=n(A,"iridescence",0),h[a++]=n(A,"iridescenceIOR",1.3);const b=n(A,"iridescenceThicknessRange",[100,400]);h[a++]=b[0],h[a++]=b[1],"specularColor"in A?(h[a++]=A.specularColor.r,h[a++]=A.specularColor.g,h[a++]=A.specularColor.b):(h[a++]=1,h[a++]=1,h[a++]=1),h[a++]=i(A,"specularColorMap"),h[a++]=n(A,"specularIntensity",1),h[a++]=i(A,"specularIntensityMap");const C=n(A,"thickness",0)===0&&n(A,"attenuationDistance",1/0)===1/0;if(h[a++]=Number(C),a++,"attenuationColor"in A?(h[a++]=A.attenuationColor.r,h[a++]=A.attenuationColor.g,h[a++]=A.attenuationColor.b):(h[a++]=1,h[a++]=1,h[a++]=1),h[a++]=n(A,"attenuationDistance",1/0),h[a++]=i(A,"alphaMap"),h[a++]=A.opacity,h[a++]=A.alphaTest,!C&&A.transmission>0)h[a++]=0;else switch(A.side){case Pn:h[a++]=1;break;case Vn:h[a++]=-1;break;case kt:h[a++]=0;break}a++,a++,h[a++]=Number(A.vertexColors)|Number(A.flatShading)<<1,h[a++]=Number(A.transparent),a+=s(A,"map",h,a),a+=s(A,"metalnessMap",h,a),a+=s(A,"roughnessMap",h,a),a+=s(A,"transmissionMap",h,a),a+=s(A,"emissiveMap",h,a),a+=s(A,"normalMap",h,a),a+=s(A,"clearcoatMap",h,a),a+=s(A,"clearcoatNormalMap",h,a),a+=s(A,"clearcoatRoughnessMap",h,a),a+=s(A,"sheenColorMap",h,a),a+=s(A,"sheenRoughnessMap",h,a),a+=s(A,"iridescenceMap",h,a),a+=s(A,"iridescenceThicknessMap",h,a),a+=s(A,"specularColorMap",h,a),a+=s(A,"specularIntensityMap",h,a)}this.needsUpdate=!0}}const oa=new se;class yh extends ja{constructor(...e){super(...e);const t=this.texture;t.format=ye,t.type=_i,t.minFilter=be,t.magFilter=be,t.wrapS=yt,t.wrapT=yt,t.setTextures=(...n)=>{this.setTextures(...n)};const i=new ao(new bh);this.fsQuad=i}setTextures(e,t,i,n){const r=pl(n),s=e.getRenderTarget(),a=e.toneMapping,l=e.getClearAlpha();e.getClearColor(oa);const d=r.length||1;this.setSize(t,i,d),e.setClearColor(0,0),e.toneMapping=ka;const p=this.fsQuad;for(let u=0,f=d;u<f;u++){const m=r[u];m&&(m.matrixAutoUpdate=!1,m.matrix.identity(),p.material.map=m,e.setRenderTarget(this,u),p.render(e),m.updateMatrix(),m.matrixAutoUpdate=!0)}p.material.map=null,e.setClearColor(oa,l),e.setRenderTarget(s),e.toneMapping=a}dispose(){super.dispose(),this.fsQuad.dispose()}}class bh extends co{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}constructor(){super({uniforms:{map:{value:null}},vertexShader:`
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
			`})}}function Oo(o){const e=new Uint16Array(o.length);for(let t=0,i=o.length;t<i;++t)e[t]=ht.toHalfFloat(o[t]);return e}function na(o,e,t=0,i=o.length){let n=t,r=t+i-1;for(;n<r;){const s=n+r>>1;o[s]<e?n=s+1:r=s}return n-t}function Ch(o,e,t){return .2126*o+.7152*e+.0722*t}function Fh(o,e=Se){const t=o.clone();t.source=new ep({...t.image});const{width:i,height:n,data:r}=t.image;let s=r;if(t.type!==e){e===Se?s=new Uint16Array(r.length):s=new Float32Array(r.length);let a;r instanceof Int8Array||r instanceof Int16Array||r instanceof Int32Array?a=2**(8*r.BYTES_PER_ELEMENT-1)-1:a=2**(8*r.BYTES_PER_ELEMENT)-1;for(let l=0,d=r.length;l<d;l++){let p=r[l];t.type===Se&&(p=ht.fromHalfFloat(r[l])),t.type!==Be&&t.type!==Se&&(p/=a),e===Se&&(s[l]=ht.toHalfFloat(p))}t.image.data=s,t.type=e}if(t.flipY){const a=s;s=s.slice();for(let l=0;l<n;l++)for(let d=0;d<i;d++){const p=n-l-1,u=4*(l*i+d),f=4*(p*i+d);s[f+0]=a[u+0],s[f+1]=a[u+1],s[f+2]=a[u+2],s[f+3]=a[u+3]}t.flipY=!1,t.image.data=s}return t}class Bh{constructor(){const e=new Te(Oo(new Float32Array([1,1,1,1])),1,1);e.type=Se,e.format=ye,e.minFilter=be,e.magFilter=be,e.wrapS=yt,e.wrapT=yt,e.generateMipmaps=!1,e.needsUpdate=!0;const t=new Te(Oo(new Float32Array([0,1])),1,2);t.type=Se,t.format=jt,t.minFilter=be,t.magFilter=be,t.generateMipmaps=!1,t.needsUpdate=!0;const i=new Te(Oo(new Float32Array([0,0,1,1])),2,2);i.type=Se,i.format=jt,i.minFilter=be,i.magFilter=be,i.generateMipmaps=!1,i.needsUpdate=!0,this.map=e,this.marginalWeights=t,this.conditionalWeights=i,this.totalSum=1}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(e){const t=Fh(e);t.wrapS=yt,t.wrapT=vt;const{width:i,height:n,data:r}=t.image,s=new Float32Array(i*n),a=new Float32Array(i*n),l=new Float32Array(n),d=new Float32Array(n);let p=0,u=0;for(let x=0;x<n;x++){let g=0;for(let A=0;A<i;A++){const b=x*i+A,C=ht.fromHalfFloat(r[4*b+0]),B=ht.fromHalfFloat(r[4*b+1]),R=ht.fromHalfFloat(r[4*b+2]),v=Ch(C,B,R);g+=v,p+=v,s[b]=v,a[b]=g}if(g!==0)for(let A=x*i,b=x*i+i;A<b;A++)s[A]/=g,a[A]/=g;u+=g,l[x]=g,d[x]=u}if(u!==0)for(let x=0,g=l.length;x<g;x++)l[x]/=u,d[x]/=u;const f=new Uint16Array(n),m=new Uint16Array(i*n);for(let x=0;x<n;x++){const g=(x+1)/n,A=na(d,g);f[x]=ht.toHalfFloat((A+.5)/n)}for(let x=0;x<n;x++)for(let g=0;g<i;g++){const A=x*i+g,b=(g+1)/i,C=na(a,b,x*i,i);m[A]=ht.toHalfFloat((C+.5)/i)}this.dispose();const{marginalWeights:y,conditionalWeights:h}=this;y.image={width:n,height:1,data:f},y.needsUpdate=!0,h.image={width:i,height:n,data:m},h.needsUpdate=!0,this.totalSum=p,this.map=t}}class vh{constructor(){this.bokehSize=0,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=10,this.anamorphicRatio=1}updateFrom(e){e instanceof hh?(this.bokehSize=e.bokehSize,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio):(this.bokehSize=0,this.apertureRotation=0,this.apertureBlades=0,this.focusDistance=10,this.anamorphicRatio=1)}}const Ni=6,Rh=0,Sh=1,Mh=2,Kh=3,wh=4;class Dh{constructor(){const e=new Te(new Float32Array(4),1,1);e.format=ye,e.type=Be,e.wrapS=vt,e.wrapT=vt,e.generateMipmaps=!1,e.minFilter=Ae,e.magFilter=Ae,this.tex=e,this.count=0}updateFrom(e,t=[]){const i=this.tex,n=Math.max(e.length*Ni,1),r=Math.ceil(Math.sqrt(n));i.image.width!==r&&(i.dispose(),i.image.data=new Float32Array(r*r*4),i.image.width=r,i.image.height=r);const s=i.image.data,a=new U,l=new U,d=new X,p=new $e,u=new U,f=new U,m=new U(0,1,0);for(let y=0,h=e.length;y<h;y++){const x=e[y],g=y*Ni*4;let A=0;for(let C=0;C<Ni*4;C++)s[g+C]=0;x.getWorldPosition(l),s[g+A++]=l.x,s[g+A++]=l.y,s[g+A++]=l.z;let b=Rh;if(x.isRectAreaLight&&x.isCircular?b=Sh:x.isSpotLight?b=Mh:x.isDirectionalLight?b=Kh:x.isPointLight&&(b=wh),s[g+A++]=b,s[g+A++]=x.color.r,s[g+A++]=x.color.g,s[g+A++]=x.color.b,s[g+A++]=x.intensity,x.getWorldQuaternion(p),x.isRectAreaLight)a.set(x.width,0,0).applyQuaternion(p),s[g+A++]=a.x,s[g+A++]=a.y,s[g+A++]=a.z,A++,l.set(0,x.height,0).applyQuaternion(p),s[g+A++]=l.x,s[g+A++]=l.y,s[g+A++]=l.z,s[g+A++]=a.cross(l).length()*(x.isCircular?Math.PI/4:1);else if(x.isSpotLight){const C=x.radius||0;u.setFromMatrixPosition(x.matrixWorld),f.setFromMatrixPosition(x.target.matrixWorld),d.lookAt(u,f,m),p.setFromRotationMatrix(d),a.set(1,0,0).applyQuaternion(p),s[g+A++]=a.x,s[g+A++]=a.y,s[g+A++]=a.z,A++,l.set(0,1,0).applyQuaternion(p),s[g+A++]=l.x,s[g+A++]=l.y,s[g+A++]=l.z,s[g+A++]=Math.PI*C*C,s[g+A++]=C,s[g+A++]=x.decay,s[g+A++]=x.distance,s[g+A++]=Math.cos(x.angle),s[g+A++]=Math.cos(x.angle*(1-x.penumbra)),s[g+A++]=x.iesTexture?t.indexOf(x.iesTexture):-1}else if(x.isPointLight){const C=a.setFromMatrixPosition(x.matrixWorld);s[g+A++]=C.x,s[g+A++]=C.y,s[g+A++]=C.z,A++,A+=4,A+=1,s[g+A++]=x.decay,s[g+A++]=x.distance}else if(x.isDirectionalLight){const C=a.setFromMatrixPosition(x.matrixWorld),B=l.setFromMatrixPosition(x.target.matrixWorld);f.subVectors(C,B).normalize(),s[g+A++]=f.x,s[g+A++]=f.y,s[g+A++]=f.z}}i.needsUpdate=!0,this.count=e.length}}function ia(o){const e=this,t=o.split(`
`);let i=0,n;e.verAngles=[],e.horAngles=[],e.candelaValues=[],e.tiltData={},e.tiltData.angles=[],e.tiltData.mulFactors=[];function r(u){return u=u.trim(),u=u.replace(/,/g," "),u=u.replace(/\s\s+/g," "),u.split(" ")}function s(u,f){for(;;){const m=t[i++],y=r(m);for(let h=0;h<y.length;++h)f.push(Number(y[h]));if(f.length===u)break}}function a(){let u=t[i++],f=r(u);e.tiltData.lampToLumGeometry=Number(f[0]),u=t[i++],f=r(u),e.tiltData.numAngles=Number(f[0]),s(e.tiltData.numAngles,e.tiltData.angles),s(e.tiltData.numAngles,e.tiltData.mulFactors)}function l(){const u=[];s(10,u),e.count=Number(u[0]),e.lumens=Number(u[1]),e.multiplier=Number(u[2]),e.numVerAngles=Number(u[3]),e.numHorAngles=Number(u[4]),e.gonioType=Number(u[5]),e.units=Number(u[6]),e.width=Number(u[7]),e.length=Number(u[8]),e.height=Number(u[9])}function d(){const u=[];s(3,u),e.ballFactor=Number(u[0]),e.blpFactor=Number(u[1]),e.inputWatts=Number(u[2])}for(;n=t[i++],!n.includes("TILT"););n.includes("NONE")||n.includes("INCLUDE")&&a(),l(),d();for(let u=0;u<e.numHorAngles;++u)e.candelaValues.push([]);s(e.numVerAngles,e.verAngles),s(e.numHorAngles,e.horAngles);for(let u=0;u<e.numHorAngles;++u)s(e.numVerAngles,e.candelaValues[u]);for(let u=0;u<e.numHorAngles;++u)for(let f=0;f<e.numVerAngles;++f)e.candelaValues[u][f]*=e.candelaValues[u][f]*e.multiplier*e.ballFactor*e.blpFactor;let p=-1;for(let u=0;u<e.numHorAngles;++u)for(let f=0;f<e.numVerAngles;++f){const m=e.candelaValues[u][f];p=p<m?m:p}if(p>0)for(let u=0;u<e.numHorAngles;++u)for(let f=0;f<e.numVerAngles;++f)e.candelaValues[u][f]/=p}class Th extends hs{_getIESValues(e){const r=new Float32Array(64800);function s(d,p){let u=0,f=0,m=0,y=0,h=0,x=0;for(let M=0;M<e.numHorAngles-1;++M)if(p<e.horAngles[M+1]||M==e.numHorAngles-2){f=M,m=e.horAngles[M],y=e.horAngles[M+1];break}for(let M=0;M<e.numVerAngles-1;++M)if(d<e.verAngles[M+1]||M==e.numVerAngles-2){u=M,h=e.verAngles[M],x=e.verAngles[M+1];break}const g=y-m,A=x-h;if(A===0)return 0;const b=g===0?0:(p-m)/g,C=(d-h)/A,B=g===0?f:f+1,R=bt.lerp(e.candelaValues[f][u],e.candelaValues[B][u],b),v=bt.lerp(e.candelaValues[f][u+1],e.candelaValues[B][u+1],b);return bt.lerp(R,v,C)}const a=e.horAngles[0],l=e.horAngles[e.numHorAngles-1];for(let d=0;d<64800;++d){let p=d%360;const u=Math.floor(d/360);l-a!==0&&(p<a||p>=l)&&(p%=l*2,p>l&&(p=l*2-p)),r[d]=s(u,p)}return r}load(e,t,i,n){const r=new Lo(this.manager);r.setResponseType("text"),r.setCrossOrigin(this.crossOrigin),r.setWithCredentials(this.withCredentials),r.setPath(this.path),r.setRequestHeader(this.requestHeader);const s=new Te(null,360,180,jt,Se);return s.minFilter=be,s.magFilter=be,r.load(e,a=>{const l=new ia(a);s.image.data=Oo(this._getIESValues(l)),s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}parse(e){const t=new ia(e),i=new Te(null,360,180,jt,Se);return i.minFilter=be,i.magFilter=be,i.image.data=Oo(this._getIESValues(t)),i.needsUpdate=!0,i}}const sa=new se;class Eh extends ja{constructor(...e){super(...e);const t=this.texture;t.format=ye,t.type=Se,t.minFilter=be,t.magFilter=be,t.wrapS=vt,t.wrapT=vt,t.generateMipmaps=!1,t.updateFrom=(...n)=>{this.updateFrom(...n)};const i=new ao(new it);this.fsQuad=i,this.iesLoader=new Th}async updateFrom(e,t){const i=e.getRenderTarget(),n=e.toneMapping,r=e.getClearAlpha();e.getClearColor(sa);const s=t.length||1;this.setSize(360,180,s),e.setClearColor(0,0),e.toneMapping=ka;const a=this.fsQuad;for(let l=0,d=s;l<d;l++){const p=t[l];p&&(p.matrixAutoUpdate=!1,p.matrix.identity(),a.material.map=p,a.material.transparent=!0,e.setRenderTarget(this,l),a.render(e),p.updateMatrix(),p.matrixAutoUpdate=!0)}a.material.map=null,e.setClearColor(sa,r),e.setRenderTarget(i),e.toneMapping=n,a.dispose()}dispose(){super.dispose(),this.fsQuad.dispose()}}const Uh=`

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
`;function ra(o,e,t,i,n){if(e>i)throw new Error;const r=o.length/e,s=o.constructor.BYTES_PER_ELEMENT*8;let a=1;switch(o.constructor){case Uint8Array:case Uint16Array:case Uint32Array:a=2**s-1;break;case Int8Array:case Int16Array:case Int32Array:a=2**(s-1)-1;break}for(let l=0;l<r;l++){const d=4*l,p=e*l;for(let u=0;u<i;u++)t[n+d+u]=e>=u+1?o[p+u]/a:0}}class Ih extends tp{constructor(){super(),this._textures=[],this.type=Be,this.format=ye,this.internalFormat="RGBA32F"}updateAttribute(e,t){const i=this._textures[e];i.updateFrom(t);const n=i.image,r=this.image;if(n.width!==r.width||n.height!==r.height)throw new Error("FloatAttributeTextureArray: Attribute must be the same dimensions when updating single layer.");const{width:s,height:a,data:l}=r,p=s*a*4*e;let u=t.itemSize;u===3&&(u=4),ra(i.image.data,u,l,4,p),this.dispose(),this.needsUpdate=!0}setAttributes(e){const t=e[0].count,i=e.length;for(let u=0,f=i;u<f;u++)if(e[u].count!==t)throw new Error("FloatAttributeTextureArray: All attributes must have the same item count.");const n=this._textures;for(;n.length<i;){const u=new ul;n.push(u)}for(;n.length>i;)n.pop();for(let u=0,f=i;u<f;u++)n[u].updateFrom(e[u]);const s=n[0].image,a=this.image;(s.width!==a.width||s.height!==a.height||s.depth!==i)&&(a.width=s.width,a.height=s.height,a.depth=i,a.data=new Float32Array(a.width*a.height*a.depth*4));const{data:l,width:d,height:p}=a;for(let u=0,f=i;u<f;u++){const m=n[u],h=d*p*4*u;let x=e[u].itemSize;x===3&&(x=4),ra(m.image.data,x,l,4,h)}this.dispose(),this.needsUpdate=!0}}class jh extends Ih{updateNormalAttribute(e){this.updateAttribute(0,e)}updateTangentAttribute(e){this.updateAttribute(1,e)}updateUvAttribute(e){this.updateAttribute(2,e)}updateColorAttribute(e){this.updateAttribute(3,e)}updateFrom(e,t,i,n){this.setAttributes([e,t,i,n])}}const kh=`

	struct PhysicalCamera {

		float focusDistance;
		float anamorphicRatio;
		float bokehSize;
		int apertureBlades;
		float apertureRotation;

	};

`,Ph=`

	struct EquirectHdrInfo {

		sampler2D marginalWeights;
		sampler2D conditionalWeights;
		sampler2D map;

		float totalSum;

	};

`,zh=`

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

`,Hh=`

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

`,Oh=`

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

`,Gh=`

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

`,Lh=`

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

`,Nh=`

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

`,Jh=`

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

	${Gh}
	${Lh}
	${Nh}

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

`,Qh=`

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

`,Wh=`

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

`,Vh=`

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

`,Xh=`

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


`,Yh=`

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

`,Zh=`

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

`,qh=`

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

`,_h=`

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

`,aa=`

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
`,$h=`

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

`,eg=`

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

`,tg=`

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

`,og=`

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

`,ng=`

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
`,ig=`

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

`,sg=`

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

`;function rg(o){for(let e=o.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1)),i=o[e];o[e]=o[t],o[t]=i}return o}class ag{constructor(e,t){const i=e**t,n=new Uint16Array(i);let r=i;for(let s=0;s<i;s++)n[s]=s;this.samples=new Float32Array(t),this.strataCount=e,this.restart=function(){r=0},this.next=function(){const{samples:s}=this;r>=n.length&&(rg(n),this.restart());let a=n[r++];for(let l=0;l<t;l++)s[l]=(a%e+Math.random())/e,a=Math.floor(a/e);return s}}}class lg{constructor(e,t){let i=0;for(const a of t)i+=a;const n=new Float32Array(i),r=[];let s=0;for(const a of t){const l=new ag(e,a);l.samples=new Float32Array(n.buffer,s,l.samples.length),s+=l.samples.length*4,r.push(l)}this.samples=n,this.strataCount=e,this.next=function(){for(const a of r)a.next();return n},this.restart=function(){for(const a of r)a.restart()}}}class cg extends Te{constructor(e=1,t=1,i=8){super(new Float32Array(1),1,1,ye,Be),this.minFilter=Ae,this.magFilter=Ae,this.strata=i,this.sampler=null,this.init(e,t,i)}init(e,t,i=this.strata){const{image:n}=this;if(n.width===t&&n.height===e)return;const r=new Array(e*t).fill(4),s=new lg(i,r);n.width=t,n.height=e,n.data=s.samples,this.sampler=s,this.dispose(),this.next()}next(){this.sampler.next(),this.needsUpdate=!0}}function ug(o,e=Math.random){for(let t=o.length-1;t>0;t--){const i=~~((e()-1e-6)*t),n=o[t];o[t]=o[i],o[i]=n}}function dg(o,e){o.fill(0);for(let t=0;t<e;t++)o[t]=1}class la{constructor(e){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(e),this.setSigma(1.5)}findVoid(){const{score:e,binaryPattern:t}=this;let i=1/0,n=-1;for(let r=0,s=t.length;r<s;r++){if(t[r]!==0)continue;const a=e[r];a<i&&(i=a,n=r)}return n}findCluster(){const{score:e,binaryPattern:t}=this;let i=-1/0,n=-1;for(let r=0,s=t.length;r<s;r++){if(t[r]!==1)continue;const a=e[r];a>i&&(i=a,n=r)}return n}setSigma(e){if(e===this.sigma)return;const t=~~(Math.sqrt(10*2*e**2)+1),i=2*t+1,n=new Float32Array(i*i),r=e*e;for(let s=-t;s<=t;s++)for(let a=-t;a<=t;a++){const l=(t+a)*i+s+t,d=s*s+a*a;n[l]=Math.E**(-d/(2*r))}this.lookupTable=n,this.sigma=e,this.radius=t}resize(e){this.size!==e&&(this.size=e,this.score=new Float32Array(e*e),this.binaryPattern=new Uint8Array(e*e))}invert(){const{binaryPattern:e,score:t,size:i}=this;t.fill(0);for(let n=0,r=e.length;n<r;n++)if(e[n]===0){const s=~~(n/i),a=n-s*i;this.updateScore(a,s,1),e[n]=1}else e[n]=0}updateScore(e,t,i){const{size:n,score:r,lookupTable:s}=this,a=this.radius,l=2*a+1;for(let d=-a;d<=a;d++)for(let p=-a;p<=a;p++){const u=(a+p)*l+d+a,f=s[u];let m=e+d;m=m<0?n+m:m%n;let y=t+p;y=y<0?n+y:y%n;const h=y*n+m;r[h]+=i*f}}addPointIndex(e){this.binaryPattern[e]=1;const t=this.size,i=~~(e/t),n=e-i*t;this.updateScore(n,i,1),this.count++}removePointIndex(e){this.binaryPattern[e]=0;const t=this.size,i=~~(e/t),n=e-i*t;this.updateScore(n,i,-1),this.count--}copy(e){this.resize(e.size),this.score.set(e.score),this.binaryPattern.set(e.binaryPattern),this.setSigma(e.sigma),this.count=e.count}}class fg{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new la(1),this.savedSamples=new la(1)}generate(){const{samples:e,savedSamples:t,sigma:i,majorityPointsRatio:n,size:r}=this;e.resize(r),e.setSigma(i);const s=Math.floor(r*r*n),a=e.binaryPattern;dg(a,s),ug(a,this.random);for(let u=0,f=a.length;u<f;u++)a[u]===1&&e.addPointIndex(u);for(;;){const u=e.findCluster();e.removePointIndex(u);const f=e.findVoid();if(u===f){e.addPointIndex(u);break}e.addPointIndex(f)}const l=new Uint32Array(r*r);t.copy(e);let d;for(d=e.count-1;d>=0;){const u=e.findCluster();e.removePointIndex(u),l[u]=d,d--}const p=r*r;for(d=t.count;d<p/2;){const u=t.findVoid();t.addPointIndex(u),l[u]=d,d++}for(t.invert();d<p;){const u=t.findCluster();t.removePointIndex(u),l[u]=d,d++}return{data:l,maxValue:p}}}function pg(o){return o>=3?4:o}function Ag(o){switch(o){case 1:return jt;case 2:return Ua;default:return ye}}class mg extends Te{constructor(e=64,t=1){super(new Float32Array(4),1,1,ye,Be),this.minFilter=Ae,this.magFilter=Ae,this.size=e,this.channels=t,this.update()}update(){const e=this.channels,t=this.size,i=new fg;i.channels=e,i.size=t;const n=pg(e),r=Ag(n);(this.image.width!==t||r!==this.format)&&(this.image.width=t,this.image.height=t,this.image.data=new Float32Array(t**2*n),this.format=r,this.dispose());const s=this.image.data;for(let a=0,l=e;a<l;a++){const d=i.generate(),p=d.data,u=d.maxValue;for(let f=0,m=p.length;f<m;f++){const y=p[f]/u;s[f*n+a]=y}}this.needsUpdate=!0}}class hg extends Es{onBeforeRender(){this.setDefine("FEATURE_DOF",this.physicalCamera.bokehSize===0?0:1),this.setDefine("FEATURE_BACKGROUND_MAP",this.backgroundMap?1:0),this.setDefine("FEATURE_FOG",this.materials.features.isUsed("FOG")?1:0)}constructor(e){super({transparent:!0,depthWrite:!1,defines:{FEATURE_MIS:1,FEATURE_RUSSIAN_ROULETTE:1,FEATURE_DOF:1,FEATURE_BACKGROUND_MAP:0,FEATURE_FOG:1,RANDOM_TYPE:2,CAMERA_TYPE:0,DEBUG_MODE:0,ATTR_NORMAL:0,ATTR_TANGENT:1,ATTR_UV:2,ATTR_COLOR:3},uniforms:{resolution:{value:new Ee},bounces:{value:10},transmissiveBounces:{value:10},physicalCamera:{value:new vh},bvh:{value:new Im},attributesArray:{value:new jh},materialIndexAttribute:{value:new cl},materials:{value:new xh},textures:{value:new yh().texture},lights:{value:new Dh},iesProfiles:{value:new Eh().texture},cameraWorldMatrix:{value:new X},invProjectionMatrix:{value:new X},backgroundBlur:{value:0},environmentIntensity:{value:1},environmentRotation:{value:new X},envMapInfo:{value:new Bh},backgroundMap:{value:null},seed:{value:0},opacity:{value:1},filterGlossyFactor:{value:0},backgroundAlpha:{value:1},sobolTexture:{value:null},stratifiedTexture:{value:new cg},stratifiedOffsetTexture:{value:new mg(64,1)}},vertexShader:`

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
				${Lm}
				${Jm}
				${Nm}

				// uniform structs
				${kh}
				${zh}
				${Ph}
				${Hh}

				// random
				#if RANDOM_TYPE == 2 	// Stratified List

					${sg}

				#elif RANDOM_TYPE == 1 	// Sobol

					${aa}
					${fl}
					${rh}

					#define rand(v) sobol(v)
					#define rand2(v) sobol2(v)
					#define rand3(v) sobol3(v)
					#define rand4(v) sobol4(v)

				#else 					// PCG

					${aa}

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
				${_h}
				${qh}
				${Uh}
				${Zh}
				${Yh}

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
				${Oh}
				${Xh}
				${Jh}
				${Wh}
				${Vh}
				${Qh}

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

				${$h}
				${eg}
				${og}
				${tg}
				${ig}
				${ng}

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

			`}),this.setValues(e)}}const ie=.072;function fo(o){switch(o){case"sphere":return new Pa(ie*.52,8,6);case"star":{const e=ie*.64,t=ie*.25,i=ie*.42,n=new op;for(let s=0;s<10;s++){const a=s*Math.PI*2/10-Math.PI/2,l=s%2===0?e:t;s===0?n.moveTo(Math.cos(a)*l,Math.sin(a)*l):n.lineTo(Math.cos(a)*l,Math.sin(a)*l)}n.closePath();const r=new np(n,{depth:i,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelSegments:1});return r.translate(0,0,-i/2),r}default:return new ms(ie,ie,ie)}}const ml=(()=>{const e=new Uint8Array(4);for(let i=0;i<4;i++)e[i]=Math.round(i/3*255);const t=new Te(e,4,1,jt);return t.minFilter=Ae,t.magFilter=Ae,t.generateMipmaps=!1,t.needsUpdate=!0,t})(),Go={opacity:1,roughness:.5,metalness:0},ei=F.createContext(Go);function hl(o){return{opacity:o.opacity??Go.opacity,roughness:o.roughness??Go.roughness,metalness:o.metalness??Go.metalness}}function Wo({material:o,color:e}){const{opacity:t,roughness:i,metalness:n}=F.useContext(ei),r=t<1,s={transparent:r,opacity:t},a=`${o}-${r?"t":"o"}`;return o==="custom"?c.jsx("meshStandardMaterial",{color:e,roughness:i,metalness:n,...s},a):o==="original"?c.jsx("meshStandardMaterial",{color:e,roughness:.65,metalness:.05,...s},a):o==="fluid"?c.jsx("meshPhysicalMaterial",{color:e,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5,envMapIntensity:1,...s},a):o==="glass"?c.jsx("meshPhysicalMaterial",{color:e,transmission:1,roughness:0,metalness:0,ior:1.52,thickness:.6,specularIntensity:1,envMapIntensity:1,...s},a):o==="metal"?c.jsx("meshStandardMaterial",{color:e,roughness:.06,metalness:.95,envMapIntensity:2,...s},a):o==="iridescent"?c.jsx("meshPhysicalMaterial",{color:e,metalness:0,roughness:.2,iridescence:1,iridescenceIOR:1.3,iridescenceThicknessRange:[100,400],envMapIntensity:1.2,...s},a):o==="emissive"?c.jsx("meshStandardMaterial",{color:e,emissive:e,emissiveIntensity:2.2,roughness:.55,metalness:0,...s},a):o==="toon"?c.jsx("meshToonMaterial",{color:e,gradientMap:ml,...s},a):o==="wireframe"?c.jsx("meshBasicMaterial",{color:e,wireframe:!0,...s},a):c.jsx("meshStandardMaterial",{color:e,roughness:.65,metalness:.05,...s},a)}const lo=5,gl=new U(0,1,0),Us=F.createContext({mode:"off",occluders:[]});function Is(o){if(o.mode!=="off")return o.mode==="full"?!0:o.occluders.length?o.occluders:void 0}function gg(o){return o==="sphere"?ie*.52:o==="star"?ie*.64:ie*.5}function xg(o){return o.includes("drum")?.63:o.includes("clarinet")?1.2:o.includes("harp")?.825:1}function ca(o,e,t=Go){const i=new se(e),n={transparent:t.opacity<1,opacity:t.opacity};switch(o){case"custom":return new Le({color:i,roughness:t.roughness,metalness:t.metalness,...n});case"fluid":return new Fe({color:i,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5,envMapIntensity:1,...n});case"glass":return new Fe({color:i,transmission:1,roughness:0,metalness:0,ior:1.52,thickness:.6,specularIntensity:1,envMapIntensity:1,...n});case"metal":return new Le({color:i,roughness:.06,metalness:.95,envMapIntensity:2,...n});case"iridescent":return new Fe({color:i,metalness:0,roughness:.2,iridescence:1,iridescenceIOR:1.3,iridescenceThicknessRange:[100,400],envMapIntensity:1.2,...n});case"emissive":return new Le({color:i,emissive:i,emissiveIntensity:2.2,roughness:.55,...n});case"toon":return new ip({color:i,gradientMap:ml,...n});case"wireframe":return new it({color:i,wireframe:!0,...n});default:return new Le({color:i,roughness:.65,metalness:.05,...n})}}function yg(o,e){const t=o.clone();return t.color&&(t.color=new se(e)),t}const bg="0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)",ua={display:"block",fontSize:"11px",color:"#e8e8e8",fontFamily:"Courier New, monospace",textShadow:bg,whiteSpace:"nowrap",userSelect:"none"};function xl({center:o,dir:e,halfY:t,gapFactor:i,above:n,below:r}){const s=Is(F.useContext(Us)),a=t*(1+i),l=[o[0]+e[0]*a,o[1]+e[1]*a,o[2]+e[2]*a],d=[o[0]-e[0]*a,o[1]-e[1]*a,o[2]-e[2]*a];return c.jsxs(c.Fragment,{children:[n&&c.jsxs("group",{position:l,children:[c.jsx("group",{userData:{isLabel:!0,labelText:n,labelPos:"top"}}),c.jsx(me,{center:!0,occlude:s,style:{pointerEvents:"none"},children:c.jsx("span",{"data-phys-label":"",style:{...ua,transform:"translateY(-100%)"},children:n})})]}),r&&c.jsxs("group",{position:d,children:[c.jsx("group",{userData:{isLabel:!0,labelText:r,labelPos:"bottom"}}),c.jsx(me,{center:!0,occlude:s,style:{pointerEvents:"none"},children:c.jsx("span",{"data-phys-label":"",style:{...ua,transform:"translateY(0)"},children:r})})]})]})}const Jn=(o,e,t)=>o?o[t%o.length]:e;function yl(o,e,t){return!t||!o.normal?o.pos:[o.pos[0]+o.normal[0]*e,o.pos[1]+o.normal[1]*e,o.pos[2]+o.normal[2]*e]}function bl(o){const e=[];let t=0;for(const i of o)e.push(t+i),t+=2*i;return e}function Cg({placements:o,markShape:e,markMaterial:t,markSize:i,color:n,structural:r,scaleBoost:s,standOnAnchor:a,stack:l,labelGapFactor:d,instanceSizes:p,instanceColors:u,markLabels:f}){const m=F.useRef(null),y=F.useMemo(()=>fo(e),[e]);F.useEffect(()=>()=>{y.dispose()},[y]);const h=gg(e)*s,x=F.useMemo(()=>o.map((b,C)=>h*Jn(p,i,C).y),[o,h,p,i.y]),g=F.useMemo(()=>l?bl(x):null,[l,x]),A=(b,C)=>g?[b.pos[0],b.pos[1]+g[C],b.pos[2]]:yl(b,x[C],a);return F.useEffect(()=>{const b=m.current;if(!b)return;const C=new gs,B=new $e,R=new U,v=new se;o.forEach((S,M)=>{const D=Jn(p,i,M);C.position.set(...A(S,M)),S.normal&&!l?(B.setFromUnitVectors(gl,R.set(...S.normal)),C.quaternion.copy(B)):C.rotation.set(...S.rot??[0,0,0]),C.scale.set(D.x*s,D.y*s,D.z*s),C.updateMatrix(),b.setMatrixAt(M,C.matrix),u&&b.setColorAt(M,v.set(u[M%u.length]))}),b.instanceMatrix.needsUpdate=!0,u&&b.instanceColor&&(b.instanceColor.needsUpdate=!0)},[o,e,i.x,i.y,i.z,s,a,l,p,u]),c.jsxs(c.Fragment,{children:[c.jsx("instancedMesh",{ref:m,args:[y,void 0,o.length],children:c.jsx(Wo,{material:t,structural:r,color:u?"#ffffff":n})},`${o.length}-${e}-${u?"col":"plain"}`),f&&o.map((b,C)=>{const B=f[C];if(!B||!B.above&&!B.below)return null;const R=x[C];return c.jsx(xl,{center:A(b,C),dir:l?[0,1,0]:b.normal??[0,1,0],halfY:R,gapFactor:d,above:B.above,below:B.below},`lbl-${C}`)})]})}function Fg({placements:o,markMaterial:e,markSize:t,color:i,scaleBoost:n,standOnAnchor:r,stack:s,labelGapFactor:a,instanceSizes:l,instanceColors:d,colorTint:p,markLabels:u,url:f}){const{scene:m}=zt(f),y=F.useContext(ei),{normScale:h,center:x,halfYUnit:g}=F.useMemo(()=>{m.updateMatrixWorld(!0);const D=new de().setFromObject(m),w=new U,K=new U;D.getSize(w),D.getCenter(K);const I=Math.max(w.x,w.y,w.z,.001),T=ie/I*xg(f);return{normScale:T,center:K,halfYUnit:w.y*T/2}},[m,f]),A=F.useMemo(()=>o.map(()=>m.clone(!0)),[m,o]);F.useEffect(()=>()=>{A.forEach(D=>D.traverse(w=>{w instanceof We&&w.geometry.dispose()}))},[A]);const b=F.useMemo(()=>e!=="original"?ca(e,i,y):null,[e,i,y]);F.useEffect(()=>()=>{b==null||b.dispose()},[b]);const C=F.useMemo(()=>d&&!p?d.map(D=>ca(e==="original"?"plastic":e,D,y)):null,[d,p,e,y]);F.useEffect(()=>()=>{C==null||C.forEach(D=>D.dispose())},[C]);const B=F.useRef([]);F.useEffect(()=>(A.forEach((D,w)=>{D.traverse(K=>{if(!(K instanceof We))return;K.userData.__origMat||(K.userData.__origMat=K.material);const I=K.userData.__origMat;if(d&&p){const T=d[w%d.length],k=j=>{const E=yg(j,T);return B.current.push(E),E};K.material=Array.isArray(I)?I.map(k):k(I)}else C?K.material=C[w%C.length]:b?K.material=b:K.material=I})}),()=>{B.current.forEach(D=>D.dispose()),B.current=[]}),[b,C,A,d,p]);const R=F.useMemo(()=>o.map((D,w)=>g*n*Jn(l,t,w).y),[o,g,n,l,t.y]),v=F.useMemo(()=>s?bl(R):null,[s,R]),S=new $e,M=new U;return c.jsx(c.Fragment,{children:A.map((D,w)=>{const K=o[w],I=Jn(l,t,w),T=h*I.x*n,k=h*I.y*n,j=h*I.z*n,E=R[w],P=v?[K.pos[0],K.pos[1]+v[w],K.pos[2]]:yl(K,E,r),z=-x.x*T,L=-x.y*k,O=-x.z*j;let Q;K.normal&&!s&&(S.setFromUnitVectors(gl,M.set(...K.normal)),Q=[S.x,S.y,S.z,S.w]);const J=u==null?void 0:u[w];return c.jsxs("group",{children:[Q?c.jsx("group",{position:P,quaternion:Q,children:c.jsx("primitive",{object:D,position:[z,L,O],scale:[T,k,j]})}):c.jsx("group",{position:P,rotation:K.rot??[0,0,0],children:c.jsx("primitive",{object:D,position:[z,L,O],scale:[T,k,j]})}),J&&(J.above||J.below)&&c.jsx(xl,{center:P,dir:K.normal??[0,1,0],halfY:E,gapFactor:a,above:J.above,below:J.below})]},w)})})}function Cl(o){const{markShape:e,customModelUrl:t,scaleBoost:i=lo,standOnAnchor:n=!1,stack:r=!1,labelGapFactor:s=0}=o,a={...o,scaleBoost:i,standOnAnchor:n,stack:r,labelGapFactor:s};return e==="custom"&&t?c.jsx(F.Suspense,{fallback:null,children:c.jsx(Fg,{...a,url:t})}):c.jsx(Cg,{...a})}const Bg={x:1,y:1,z:1},vg={deformation:"none",fluidDistort:.35,fluidSpeed:1.5},Dn="0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)",Bt=.47;function da(o,e,t,i){if(i==="sphere"){const n=(o+e+t)/3,r=Math.acos(2*Math.random()-1),s=2*Math.PI*Math.random(),a=n*Math.cbrt(Math.random());return[a*Math.sin(r)*Math.cos(s),a*Math.sin(r)*Math.sin(s),a*Math.cos(r)]}return[(Math.random()-.5)*2*o,(Math.random()-.5)*2*e,(Math.random()-.5)*2*t]}function Fl(o,e){const t=o[0]-e.center[0],i=o[1]-e.center[1],n=o[2]-e.center[2];return e.kind==="sphere"?t*t+i*i+n*n<e.radius*e.radius:Math.abs(t)<e.half[0]&&Math.abs(i)<e.half[1]&&Math.abs(n)<e.half[2]}function fa(o,e,t,i,n){let r=da(o,e,t,i);if(!n)return r;for(let s=0;s<80;s++){if(!Fl(r,n))return r;r=da(o,e,t,i)}return r}function Rg(o,e,t,i,n){const r=Math.cbrt(e*t*i),s=Math.ceil(Math.cbrt(o*2)),a=Math.max(1,Math.round(s*e/r)),l=Math.max(1,Math.round(s*t/r)),d=Math.max(1,Math.round(s*i/r)),p=2*e/a,u=2*t/l,f=2*i/d,m=(e+t+i)/3,y=m*m,h=[];for(let g=0;g<d;g++)for(let A=0;A<l;A++)for(let b=0;b<a;b++){if(n==="sphere"){const C=-e+(b+.5)*p,B=-t+(A+.5)*u,R=-i+(g+.5)*f;if(C*C+B*B+R*R>y)continue}h.push(b+A*a+g*a*l)}for(let g=h.length-1;g>0;g--){const A=Math.floor(Math.random()*(g+1));[h[g],h[A]]=[h[A],h[g]]}const x=[];for(let g=0;g<o;g++){const A=h[g%Math.max(1,h.length)],b=A%a,C=Math.floor(A/a)%l,B=Math.floor(A/(a*l)),R=-e+(b+.5)*p,v=-t+(C+.5)*u,S=-i+(B+.5)*f;let M=Math.max(-e,Math.min(e,R+(Math.random()-.5)*p*.7)),D=Math.max(-t,Math.min(t,v+(Math.random()-.5)*u*.7)),w=Math.max(-i,Math.min(i,S+(Math.random()-.5)*f*.7));if(n==="sphere"){const K=Math.sqrt(M*M+D*D+w*w);K>m&&(M=M*m/K*.97,D=D*m/K*.97,w=w*m/K*.97)}x.push([M,D,w])}return x}function pa(o,e,t,i,n,r,s,a=!1){const l=e*Bt,d=t*Bt,p=i*Bt,u=a?Rg(o,l,d,p,n):null,f=[];for(let m=0;m<o;m++){let y;u?(y=u[m],s&&Fl(y,s)&&(y=fa(l,d,p,n,s))):y=fa(l,d,p,n,s);const h=r==="random"?[Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2]:[0,0,0];f.push({pos:y,rot:h})}return f}function Qn(o,e){let t=0;for(let i=0;i<o.length;i++){const n=o[i].pos;for(let r=i+1;r<o.length;r++){const s=o[r].pos,a=n[0]-s[0],l=n[1]-s[1],d=n[2]-s[2],p=e[i]+e[r];a*a+l*l+d*d<p*p&&t++}}return t}const Sg=100;function Bl(o){const e=Math.max(1,o*o/2);return Math.max(8,Math.min(Sg,Math.floor(2e6/e)))}function Mg(o,e,t,i,n,r,s,a,l=!1){const d=Bl(o);let p=pa(o,e,t,i,n,r,a,l),u=Qn(p,s);for(let f=1;f<d&&u>0;f++){const m=pa(o,e,t,i,n,r,a,l),y=Qn(m,s);y<u&&(p=m,u=y)}return p}function Kg(o,e,t,i){const n=e*Bt,r=t*Bt,s=()=>Array.from({length:o},()=>({pos:[(Math.random()-.5)*2*n,0,(Math.random()-.5)*2*r],normal:[0,1,0]})),a=Bl(o);let l=s(),d=Qn(l,i);for(let p=1;p<a&&d>0;p++){const u=s(),f=Qn(u,i);f<d&&(l=u,d=f)}return l}function wg(o,e){const t=Math.PI*2;return Array.from({length:o},()=>e?{pos:[0,0,0],rot:[0,Math.random()*t,0]}:{pos:[0,0,0]})}function Dg({width:o,depth:e,height:t,color:i,position:n,particleCount:r,markShape:s,markMaterial:a,markSize:l=Bg,structural:d=vg,customModelUrl:p,labelShow:u,labelData:f,seed:m=0,boundingVolume:y="box",showBounds:h=!0,orientation:x="random",exclusionZone:g,evenDistribution:A=!1,adjacent:b=!1,showGrid:C=!1,stacking:B=!1,stackRandomOrient:R=!1,instanceSizes:v,instanceColors:S,colorTint:M,markLabels:D}){const w=Is(F.useContext(Us)),K=s==="custom"&&!!p,T=K&&!(!!v||!!S)?Math.max(5,r):r,k=F.useMemo(()=>{if(B)return wg(T,R);const E=Array.from({length:T},(P,z)=>{const L=v?v[z%v.length]:l,O=b?Math.max(L.x,L.z):Math.max(L.x,L.y,L.z);return .5*ie*lo*O});return b?Kg(T,o,e,E):Mg(T,o,t,e,y,x,E,g,A)},[b,B,R,T,o,t,e,m,y,x,g,A,v,l.x,l.y,l.z]),j=F.useMemo(()=>{if(y==="sphere"){const z=(o+t+e)/3*Bt,L=new Pa(z,12,8),O=new or(L);return L.dispose(),O}const E=new ms(o,t,e),P=new or(E);return E.dispose(),P},[o,t,e,y]);return F.useEffect(()=>()=>{j.dispose()},[j]),c.jsxs("group",{position:n,children:[B?null:b?C&&c.jsx("gridHelper",{args:[2,12,"#777777","#4a4a4a"],scale:[o*Bt,1,e*Bt]}):h&&c.jsx("lineSegments",{geometry:j,children:c.jsx("lineBasicMaterial",{color:"#666666",transparent:!0,opacity:.7})}),c.jsx(Cl,{placements:k,markShape:s,markMaterial:a,markSize:l,color:i,structural:d,customModelUrl:K?p:void 0,standOnAnchor:b,stack:B,instanceSizes:v,instanceColors:S,colorTint:M,markLabels:D}),u&&c.jsxs(c.Fragment,{children:[f.top&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[0,t/2+.8,0],userData:{isLabel:!0,labelText:f.top,labelPos:"top"}}),c.jsx(me,{position:[0,t/2+.8,0],center:!0,occlude:w,style:{pointerEvents:"none"},children:c.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:Dn,whiteSpace:"nowrap",userSelect:"none"},children:f.top})})]}),f.bottom&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[0,-(t/2+.8),0],userData:{isLabel:!0,labelText:f.bottom,labelPos:"bottom"}}),c.jsx(me,{position:[0,-(t/2+.8),0],center:!0,occlude:w,style:{pointerEvents:"none"},children:c.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:Dn,whiteSpace:"nowrap",userSelect:"none"},children:f.bottom})})]}),f.left&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[-(o/2+.2),0,0],userData:{isLabel:!0,labelText:f.left,labelPos:"left"}}),c.jsx(me,{position:[-(o/2+.2),0,0],occlude:w,style:{pointerEvents:"none"},children:c.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:Dn,whiteSpace:"nowrap",userSelect:"none",display:"block",textAlign:"right",transform:"translate(-100%, -50%)"},children:f.left})})]}),f.right&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[o/2+.2,0,0],userData:{isLabel:!0,labelText:f.right,labelPos:"right"}}),c.jsx(me,{position:[o/2+.2,0,0],occlude:w,style:{pointerEvents:"none"},children:c.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:Dn,whiteSpace:"nowrap",userSelect:"none",display:"block",transform:"translateY(-50%)"},children:f.right})})]})]})]})}const Tg=14;function Eg(o){return o.includes("drum")?.63:o.includes("clarinet")?1.2:o.includes("harp")?.825:1}function vl(o,e,t){const i=Math.PI/180,n=Tg,r=o.clone(!0);r.position.set(0,0,0),r.rotation.set(0,0,0),r.scale.set(1,1,1),r.updateMatrixWorld(!0);const s=new de().setFromObject(r);if(!s.isEmpty()){const p=new U;s.getSize(p);const u=Math.max(p.x,p.y,p.z,.001),f=ie/u*(e?Eg(e):1),m=new U;s.getCenter(m),r.scale.setScalar(f),r.position.set(-m.x*f,-m.y*f,-m.z*f)}const a=new Io;a.scale.set(n*t.size.x,n*t.size.y,n*t.size.z),a.add(r);const l=new Io;l.position.set(t.position.x,t.position.y,t.position.z),l.rotation.set(t.orientation.x*i,t.orientation.y*i,t.orientation.z*i),l.add(a),l.updateMatrixWorld(!0);const d=[];return l.traverse(p=>{const u=p;if(!u.isMesh||!u.geometry)return;const f=u.geometry,m=new Qe;m.setAttribute("position",f.getAttribute("position").clone());const y=f.getAttribute("normal");y&&m.setAttribute("normal",y.clone()),f.index&&m.setIndex(f.index.clone()),m.applyMatrix4(u.matrixWorld);const h=m.toNonIndexed();h.getAttribute("normal")||h.computeVertexNormals(),d.push(h)}),d.length===0?null:d.length===1?d[0]:sp(d,!1)??d[0]}function Ug(o,e){const t=new rp(new We(o)).build(),i=[],n=new U,r=new U;for(let s=0;s<e;s++)t.sample(n,r),r.lengthSq()<1e-8&&r.set(0,1,0),r.normalize(),i.push({pos:[n.x,n.y,n.z],normal:[r.x,r.y,r.z]});return i}function Rl({worldGeo:o,count:e,seed:t,markShape:i,markUrl:n,surfaceScale:r,...s}){const a=F.useMemo(()=>Ug(o,Math.max(1,e)),[o,e,t]);return c.jsx(Cl,{placements:a,markShape:i,customModelUrl:i==="custom"?n:void 0,scaleBoost:lo*r,standOnAnchor:!0,labelGapFactor:.08,...s})}function Ig(o){const{dec:e,url:t,...i}=o,{scene:n}=zt(t),r=F.useMemo(()=>vl(n,t,e),[n,t,e.position.x,e.position.y,e.position.z,e.orientation.x,e.orientation.y,e.orientation.z,e.size.x,e.size.y,e.size.z]);return F.useEffect(()=>()=>{r==null||r.dispose()},[r]),r?c.jsx(Rl,{worldGeo:r,...i}):null}function jg(o){const{dec:e,...t}=o,i=F.useMemo(()=>{const n=fo(e.shape),r=vl(new We(n),null,e);return n.dispose(),r},[e.shape,e.position.x,e.position.y,e.position.z,e.orientation.x,e.orientation.y,e.orientation.z,e.size.x,e.size.y,e.size.z]);return F.useEffect(()=>()=>{i==null||i.dispose()},[i]),i?c.jsx(Rl,{worldGeo:i,...t}):null}function kg({dec:o,...e}){return o.shape==="custom"&&o.customModelUrl?c.jsx(F.Suspense,{fallback:null,children:c.jsx(Ig,{dec:o,url:o.customModelUrl,...e})}):c.jsx(jg,{dec:o,...e})}function Pg(o,e){const t=new se(e);switch(o){case"fluid":return new Fe({color:t,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5});case"metal":return new Le({color:t,roughness:.06,metalness:.95});case"emissive":return new Le({color:t,emissive:t,emissiveIntensity:2.2,roughness:.55});default:return new Le({color:t,roughness:.65,metalness:.05})}}function zg({url:o,markMaterial:e,markSize:t,color:i}){const{scene:n}=zt(o),{clone:r,sx:s,sy:a,sz:l,ox:d,oy:p,oz:u}=F.useMemo(()=>{n.updateMatrixWorld(!0);const m=new de().setFromObject(n),y=new U,h=new U;m.getSize(y),m.getCenter(h);const x=Math.max(y.x,y.y,y.z,.001),g=ie/x,A=g*t.x,b=g*t.y,C=g*t.z;return{clone:n.clone(!0),sx:A,sy:b,sz:C,ox:-h.x*A,oy:-h.y*b,oz:-h.z*C}},[n,t.x,t.y,t.z]),f=F.useMemo(()=>e!=="original"?Pg(e,i):null,[e,i]);return F.useEffect(()=>()=>{f==null||f.dispose()},[f]),F.useEffect(()=>{f&&r.traverse(m=>{m instanceof We&&(m.material=f)})},[f,r]),c.jsx("primitive",{object:r,position:[d,p,u],scale:[s,a,l]})}function Hg({position:o,count:e,markShape:t,markMaterial:i,markSize:n,color:r,structural:s,customModelUrl:a}){const l=F.useMemo(()=>fo(t),[t]);F.useEffect(()=>()=>{l.dispose()},[l]);const d=Math.sqrt(e)*ie*Math.max(n.x,n.y,n.z)*2.2,p=F.useMemo(()=>Array.from({length:e},(f,m)=>({x:(Math.random()-.5)*d,y:ie*2+m*ie*1.2+Math.random()*ie*.5,z:(Math.random()-.5)*d,rx:Math.random()*Math.PI*2,ry:Math.random()*Math.PI*2,rz:Math.random()*Math.PI*2})),[e,d]),u=-ie*.7;return c.jsxs("group",{position:o,children:[c.jsx(zn,{type:"fixed",children:c.jsx(za,{args:[3,.05,3],position:[0,u,0]})}),p.map((f,m)=>c.jsx(zn,{position:[f.x,f.y,f.z],rotation:[f.rx,f.ry,f.rz],colliders:"hull",restitution:.1,friction:.8,linearDamping:.4,angularDamping:.5,children:t==="custom"&&a?c.jsx(F.Suspense,{fallback:null,children:c.jsx(zg,{url:a,markMaterial:i,markSize:n,color:r})}):c.jsx("mesh",{geometry:l,scale:[n.x,n.y,n.z],children:c.jsx(Wo,{material:i,structural:s,color:r})})},m))]})}const ti=F.createContext({colorMode:"distinct",colorGradient:{from:"#EE6655",to:"#4488EE"},colorTint:!1}),po=F.createContext({}),oi=(o,e)=>o[e]??1;function Og(o,e,t){return"#"+new se(o).lerp(new se(e),Math.max(0,Math.min(1,t))).getHexString()}function js(o,e,t,i,n,r){var s,a;if(e.markColor===null)return i;if(n==="continuous"){const l=t.map(m=>m.percentage),d=Math.min(...l),p=Math.max(...l),u=((s=t[o%Math.max(1,t.length)])==null?void 0:s.percentage)??0,f=p>d?(u-d)/(p-d):.5;return Og(r.from,r.to,f)}return((a=t[o%Math.max(1,t.length)])==null?void 0:a.color)??i}function Gg(o){return 2*Math.atan(12/o)*180/Math.PI}const Sl={1:[0,.5,18],2:[0,2,26],3:[0,4,64]};function Lg({level:o,fov:e,focalLength:t}){const{camera:i,controls:n}=ze(),r=F.useRef(o),s=F.useRef(t);return F.useEffect(()=>{var a,l,d;if(i instanceof xs){if(r.current!==o){const[p,u,f]=Sl[o];i.position.set(p,u,f),i.lookAt(0,0,0);const m=n;(a=m==null?void 0:m.target)==null||a.set(0,0,0),(l=m==null?void 0:m.update)==null||l.call(m),r.current=o}if(s.current!==t&&s.current>0){const p=t/s.current,u=n;u!=null&&u.spherical?(u.spherical.radius*=p,(d=u.update)==null||d.call(u)):i.position.multiplyScalar(p)}s.current=t,i.fov=e,i.updateProjectionMatrix()}},[i,n,o,e,t]),null}const Vo=14,ps=new Map,ks=F.createContext({aspects:{},report:()=>{}}),Aa=o=>o.kind==="decoration"?`decoration:${o.id}`:o.kind==="object"?`object:${o.owner}`:"mark",Ml=F.createContext({enabled:!1,isSelected:()=>!1,select:()=>{},commit:()=>{}}),no=Math.PI/180,Ng=new U(1,1,1);function Jg({onScale:o,onScaleEnd:e}){const t=ze(s=>s.controls),i=F.useRef(null),[n,r]=F.useState(!1);return Pt(({camera:s})=>{const a=i.current;if(!a||!a.parent)return;const l=new U;a.parent.getWorldPosition(l);const d=s.position.distanceTo(l),p=a.parent.worldToLocal(s.position.clone()).normalize();a.position.copy(p.multiplyScalar(d*.16)),a.scale.setScalar(d*.0021)}),c.jsxs("mesh",{ref:i,renderOrder:1e3,onPointerOver:s=>{s.stopPropagation(),r(!0)},onPointerOut:()=>r(!1),onPointerDown:s=>{s.stopPropagation();const a=s.nativeEvent.clientY;t&&(t.enabled=!1);let l=1;const d=u=>{l=Math.max(.05,1+(a-u.clientY)/160),o(l)},p=()=>{window.removeEventListener("pointermove",d),window.removeEventListener("pointerup",p),t&&(t.enabled=!0),e(l)};window.addEventListener("pointermove",d),window.addEventListener("pointerup",p)},children:[c.jsx("sphereGeometry",{args:[1,20,20]}),c.jsx("meshBasicMaterial",{color:n?"#ffe066":"#ffcc33",depthTest:!1,transparent:!0,opacity:.95})]})}function Kl({target:o,position:e,orientation:t,groupRef:i,children:n}){const r=F.useContext(Ml),s=!!o&&r.enabled,a=s&&r.isSelected(o),l=s?y=>{y.stopPropagation(),r.select(o)}:void 0,d=[t.x*no,t.y*no,t.z*no],p=F.useMemo(()=>{const y=new $e().setFromEuler(new nr(d[0],d[1],d[2]));return new X().compose(new U(e.x,e.y,e.z),y,Ng)},[e.x,e.y,e.z,t.x,t.y,t.z]),u=F.useRef(new X),f=F.useRef(null),m=y=>{const h=new U,x=new $e,g=new U;y.decompose(h,x,g);const A=new nr().setFromQuaternion(x);return{pos:{x:h.x,y:h.y,z:h.z},orient:{x:A.x/no,y:A.y/no,z:A.z/no},scale:{x:g.x,y:g.y,z:g.z}}};return a?c.jsxs(nh,{matrix:p,autoTransform:!0,fixed:!0,scale:95,lineWidth:2.5,disableSliders:!0,disableScaling:!0,depthTest:!1,onDragStart:()=>u.current.copy(p),onDrag:y=>u.current.copy(y),onDragEnd:()=>{const y=m(u.current);r.commit(o,y.pos,y.orient,y.scale)},children:[c.jsx("group",{ref:f,children:c.jsx("group",{ref:i,onClick:l,children:n})}),c.jsx(Jg,{onScale:y=>{var h;(h=f.current)==null||h.scale.setScalar(y)},onScaleEnd:y=>{var x;(x=f.current)==null||x.scale.setScalar(1);const h=m(p);r.commit(o,h.pos,h.orient,{x:y,y,z:y})}})]}):c.jsx("group",{ref:i,position:[e.x,e.y,e.z],rotation:d,onClick:l,children:n})}function Ps({url:o,material:e,color:t,sz:i,recolor:n=!1,tint:r=!1}){const{scene:s}=zt(o),a=F.useMemo(()=>{const d=s.clone(!0);d.position.set(0,0,0),d.rotation.set(0,0,0),d.scale.set(1,1,1),d.updateMatrixWorld(!0);const p=o.includes("drum")?.63:o.includes("clarinet")?1.2:o.includes("harp")?.825:1,u=new de().setFromObject(d);if(!u.isEmpty()){const f=new U;u.getSize(f);const m=Math.max(f.x,f.y,f.z,.001);ps.set(o,{x:f.x/m*p,y:f.y/m*p,z:f.z/m*p});const y=ie/m*p,h=new U;u.getCenter(h),d.scale.setScalar(y),d.position.set(-h.x*y,-h.y*y,-h.z*y)}if(e!=="original"){const f=e==="fluid"?new Fe({color:new se(t),transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5}):new Le({color:new se(t),roughness:e==="metal"?.06:e==="emissive"?.55:.65,metalness:e==="metal"?.95:0,emissive:e==="emissive"?new se(t):new se(0,0,0),emissiveIntensity:e==="emissive"?2.2:0});d.traverse(m=>{m instanceof We&&(m.material=f)})}else if(n){const f=new se(t);d.traverse(m=>{if(m instanceof We)if(r){const y=h=>{const x=h.clone();return x.color&&(x.color=f),x};m.material=Array.isArray(m.material)?m.material.map(y):y(m.material)}else m.material=new Le({color:f,roughness:.65,metalness:.05})})}return d},[s,o,e,t,n,r]),{report:l}=F.useContext(ks);return F.useEffect(()=>{const d=ps.get(o);d&&l(o,d)},[o,l,a]),c.jsx("group",{scale:i,children:c.jsx("primitive",{object:a})})}const ma=Vo*ie;function Qg(o,e){return o==="numerical"||o==="weight"||o==="count"?`${(e==null?void 0:e.percentage)??"?"}`:(e==null?void 0:e.name)??"?"}function Xo(o,e,t){const i=e[t%Math.max(1,e.length)],n={};return["top","bottom","left","right"].forEach(r=>{const s=o[r];s.length&&(n[r]=s.map(a=>Qg(a,i)).join(" · "))}),n}function Wg(o,e,t){return Array.from({length:t},(i,n)=>{const r=Xo(o,e,n),s=[r.top,r.left].filter(Boolean).join("  ·  "),a=[r.bottom,r.right].filter(Boolean).join("  ·  ");return{above:s||null,below:a||null}})}function Vg(o,e,t){return Array.from({length:t},(i,n)=>{const r=Xo(o,e,n),s=[r.top,r.left,r.right,r.bottom].filter(Boolean);return{above:s.length?s.join("  ·  "):null,below:null}})}const Xg="0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)";function xt({pos:o,text:e}){const t=o==="top"?"translate(-50%, -100%)":o==="bottom"?"translate(-50%, 0)":o==="left"?"translate(-100%, -50%)":"translateY(-50%)";return c.jsx("span",{"data-phys-label":"",style:{display:"block",fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:Xg,whiteSpace:"nowrap",userSelect:"none",transform:t},children:e})}function In(o){return o==="numerical"||o==="weight"||o==="count"}function Yg(o,e,t){var r;const i=Math.max(...t.map(s=>s.percentage),1);return .2+1.8*((((r=t[e%Math.max(1,t.length)])==null?void 0:r.percentage)??i)/i)}function ke(o,e,t,i,n){const r=t[o];return r?Yg(r,e,i)*oi(n,o):1}function wl(o,e,t){return o==="center"?[0,0,0]:e==="X"?[0,o==="start"?-t:t,0]:[o==="start"?t:-t,0,0]}function Zg({config:o,layers:e,bindings:t,markLabelConfig:i}){const n=F.useMemo(()=>fo(o.shape),[o.shape]);F.useEffect(()=>()=>{n.dispose()},[n]);const{colorMode:r,colorGradient:s,colorTint:a}=F.useContext(ti),l=F.useContext(po),d=Vo,p=js(0,t,e,o.color,r,s),u=(o.scale??1)*ke("markScale",0,t,e,l),f={x:o.size.x*u*ke("markSizeX",0,t,e,l),y:o.size.y*u*ke("markSizeY",0,t,e,l),z:o.size.z*u*ke("markSizeZ",0,t,e,l)},m=d*f.y*.036+.8,y=d*f.x*.036+.8,h=Xo(i.slots,e,0);return c.jsxs(Kl,{target:{kind:"mark"},position:o.position,orientation:o.orientation,children:[o.shape==="custom"&&o.customModelUrl?c.jsx(F.Suspense,{fallback:null,children:c.jsx(Ps,{url:o.customModelUrl,material:o.material,color:p,sz:[d*f.x,d*f.y,d*f.z],recolor:t.markColor!==null,tint:a})}):c.jsx("mesh",{geometry:n,scale:[d*f.x,d*f.y,d*f.z],children:c.jsx(Wo,{material:o.material,structural:o.structural,color:p})}),i.show&&c.jsxs(c.Fragment,{children:[h.top&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[0,m,0],userData:{isLabel:!0,labelText:h.top,labelPos:"top"}}),c.jsx(me,{zIndexRange:[1,0],position:[0,m,0],style:{pointerEvents:"none"},children:c.jsx(xt,{pos:"top",text:h.top})})]}),h.bottom&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[0,-m,0],userData:{isLabel:!0,labelText:h.bottom,labelPos:"bottom"}}),c.jsx(me,{zIndexRange:[1,0],position:[0,-m,0],style:{pointerEvents:"none"},children:c.jsx(xt,{pos:"bottom",text:h.bottom})})]}),h.left&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[-y,0,0],userData:{isLabel:!0,labelText:h.left,labelPos:"left"}}),c.jsx(me,{zIndexRange:[1,0],position:[-y,0,0],style:{pointerEvents:"none"},children:c.jsx(xt,{pos:"left",text:h.left})})]}),h.right&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[y,0,0],userData:{isLabel:!0,labelText:h.right,labelPos:"right"}}),c.jsx(me,{zIndexRange:[1,0],position:[y,0,0],style:{pointerEvents:"none"},children:c.jsx(xt,{pos:"right",text:h.right})})]})]})]})}function qg({shape:o,customModelUrl:e,material:t,structural:i,color:n,scale:r,recolor:s,tint:a}){const l=F.useMemo(()=>fo(o),[o]);return F.useEffect(()=>()=>{l.dispose()},[l]),o==="custom"&&e?c.jsx(F.Suspense,{fallback:null,children:c.jsx(Ps,{url:e,material:t,color:n,sz:r,recolor:s,tint:a})}):c.jsx("mesh",{geometry:l,scale:r,children:c.jsx(Wo,{material:t,structural:i,color:n})})}function _g({markConfig:o,collection1Config:e,color:t,layers:i,bindings:n,markLabelConfig:r}){const s=i.length||e.alignCount,{alignAxis:a,alignSpacing:l,alignAnchor:d}=e,p=Vo,u=Math.PI/180,f=(s-1)/2,m=[o.orientation.x*u,o.orientation.y*u,o.orientation.z*u],{colorMode:y,colorGradient:h,colorTint:x}=F.useContext(ti),g=F.useContext(po),A=n.markColor!==null;function b(R){return js(R,n,i,t,y,h)}const C=o.scale??1;function B(R){const v=C*ke("markScale",R,n,i,g),S={x:o.size.x*v*ke("markSizeX",R,n,i,g),y:o.size.y*v*ke("markSizeY",R,n,i,g),z:o.size.z*v*ke("markSizeZ",R,n,i,g)};return[p*S.x,p*S.y,p*S.z]}return c.jsx("group",{children:Array.from({length:s},(R,v)=>{var Q,J;const S=(v-f)*l,M=B(v),D=a==="X"?M[1]*.036:M[0]*.036,w=wl(d,a,D),K=a==="X"?[S+w[0],w[1],w[2]]:[w[0],S+w[1],w[2]],I=M[1]*.036+.8,T=M[0]*.036+.8,k=Xo(r.slots,i,v),j=(Q=i[v%Math.max(1,i.length)])==null?void 0:Q.name,E=(J=o.categoryShapes)==null?void 0:J[j??""],P=(E==null?void 0:E.shape)??o.shape,z=E?E.customModelUrl:o.customModelUrl,L=E?E.customModelHasMat:o.customModelHasMat,O=E!=null&&E.customModelHasMat?"original":o.material;return c.jsxs("group",{position:K,rotation:m,children:[c.jsx(qg,{shape:P,customModelUrl:z,customModelHasMat:L,material:O,structural:o.structural,color:b(v),scale:M,recolor:A,tint:x}),r.show&&c.jsxs(c.Fragment,{children:[k.top&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[0,I,0],userData:{isLabel:!0,labelText:k.top,labelPos:"top"}}),c.jsx(me,{zIndexRange:[1,0],position:[0,I,0],style:{pointerEvents:"none"},children:c.jsx(xt,{pos:"top",text:k.top})})]}),k.bottom&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[0,-I,0],userData:{isLabel:!0,labelText:k.bottom,labelPos:"bottom"}}),c.jsx(me,{zIndexRange:[1,0],position:[0,-I,0],style:{pointerEvents:"none"},children:c.jsx(xt,{pos:"bottom",text:k.bottom})})]}),k.left&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[-T,0,0],userData:{isLabel:!0,labelText:k.left,labelPos:"left"}}),c.jsx(me,{zIndexRange:[1,0],position:[-T,0,0],style:{pointerEvents:"none"},children:c.jsx(xt,{pos:"left",text:k.left})})]}),k.right&&c.jsxs(c.Fragment,{children:[c.jsx("group",{position:[T,0,0],userData:{isLabel:!0,labelText:k.right,labelPos:"right"}}),c.jsx(me,{zIndexRange:[1,0],position:[T,0,0],style:{pointerEvents:"none"},children:c.jsx(xt,{pos:"right",text:k.right})})]})]})]},v)})})}function Dl({markConfig:o,collection1Config:e,color:t,position:i,layers:n,bindings:r,heightOverride:s,markLabelConfig:a,colLabelConfig:l,layerIndex:d,scatterSeed:p,objectHandle:u,singleCollection:f=!1}){const{colorMode:m,colorGradient:y,colorTint:h}=F.useContext(ti),{aspects:x}=F.useContext(ks),g=F.useContext(po),A=o.scale??1,b={x:o.size.x*A,y:o.size.y*A,z:o.size.z*A},C=e.arrangement==="scattering"||e.arrangement==="surface"||e.arrangement==="adjacent"||e.arrangement==="stacking",B=C&&(r.markScale!==null||r.markSizeX!==null||r.markSizeY!==null||r.markSizeZ!==null),R=C&&r.markColor!==null,v=B||R,S=F.useMemo(()=>{if(B)return n.map((T,k)=>{const j=ke("markScale",k,r,n,g);return{x:b.x*j*ke("markSizeX",k,r,n,g),y:b.y*j*ke("markSizeY",k,r,n,g),z:b.z*j*ke("markSizeZ",k,r,n,g)}})},[B,n,g,r.markScale,r.markSizeX,r.markSizeY,r.markSizeZ,b.x,b.y,b.z]),M=F.useMemo(()=>{if(R)return n.map((T,k)=>js(k,r,n,t,m,y))},[R,n,r,t,m,y]),D=e.object??null,w=F.useMemo(()=>{const T=D;if(!T||!e.scatterExcludeObject)return;const k=Vo*ie,j=S?S.reduce((L,O)=>Math.max(L,O.x,O.y,O.z),0):Math.max(b.x,b.y,b.z),E=ie*lo/2*j,P=[T.position.x,T.position.y,T.position.z];if(T.shape==="sphere"){const L=k*.52*Math.max(T.size.x,T.size.y,T.size.z)*1.05+E;return{kind:"sphere",center:P,radius:L}}const z=T.shape==="custom"&&T.customModelUrl?x[T.customModelUrl]??ps.get(T.customModelUrl)??{x:1,y:1,z:1}:{x:1,y:1,z:1};return{kind:"box",center:P,half:[k/2*T.size.x*z.x*1.05+E,k/2*T.size.y*z.y*1.05+E,k/2*T.size.z*z.z*1.05+E]}},[D,e.scatterExcludeObject,b.x,b.y,b.z,S,x]),K=D?c.jsx("group",{position:i,children:c.jsx(zs,{config:D,handleTarget:u})}):null,I=(()=>{var oe;if(e.arrangement==="alignment")return c.jsx("group",{position:i,children:c.jsx(_g,{markConfig:o,collection1Config:e,color:t,layers:n,bindings:r,markLabelConfig:a})});if(e.arrangement==="piling")return c.jsx(Hg,{position:i,count:e.pilingCount,markShape:o.shape,markMaterial:o.material,markSize:b,color:t,structural:o.structural,customModelUrl:o.shape==="custom"?o.customModelUrl:void 0},e.pilingCount);if(e.arrangement==="surface"){const at=D;if(!at)return null;const Ao=v?n.length:e.surfaceCount??24,mo=a.show?Vg(a.slots,n,Ao):void 0;return c.jsx(kg,{dec:at,markShape:o.shape,markMaterial:o.material,markSize:b,color:t,count:Ao,surfaceScale:e.surfaceScale??1,seed:p,structural:o.structural,markUrl:o.shape==="custom"?o.customModelUrl:void 0,instanceSizes:S,instanceColors:M,colorTint:h,markLabels:mo})}const T=e.arrangement==="adjacent",k=e.arrangement==="stacking",j=T||k,{scatterDimensions:E,scatterCount:P,scatterDensity:z,scatterMode:L}=e,O=e.scatterSizeAxes??{x:!1,y:!0,z:!1},Q=s!=null&&O.x?s:E.x,J=s!=null&&O.y?s:E.y,V=s!=null&&O.z?s:E.z,N=r.scatterCount!==null?Math.max(1,Math.round((((oe=n[d%Math.max(1,n.length)])==null?void 0:oe.percentage)??P)*oi(g,"scatterCount"))):null,te=N!==null?N:v||k&&f?Math.max(1,n.length):(L??"count")==="density"&&!j?Math.max(5,Math.round(z*Q*J*V)):P,ue=Xo(l.slots,n,d),le=a.show?Wg(a.slots,n,te):void 0;return c.jsx(Dg,{width:Q,depth:V,height:J,color:t,position:i,particleCount:te,markShape:o.shape,markMaterial:o.material,markSize:b,structural:o.structural,customModelUrl:o.shape==="custom"?o.customModelUrl:void 0,labelShow:l.show,labelData:ue,seed:p,boundingVolume:e.scatterBoundingVolume??"box",showBounds:e.scatterShowBounds??!0,orientation:j?"static":e.scatterOrientation??"random",exclusionZone:j?void 0:w,evenDistribution:e.scatterEven??!1,adjacent:T,showGrid:e.adjacentShowGrid??!1,stacking:k,stackRandomOrient:e.stackingRandomOrient??!1,instanceSizes:S,instanceColors:M,colorTint:h,markLabels:le})})();return c.jsxs(c.Fragment,{children:[I,K]})}const jn=8;function $g({markConfig:o,collection1Config:e,layers:t,bindings:i,markLabelConfig:n,colLabelConfig:r,scatterSeed:s}){var u;const a=o.color??e.color,l=F.useContext(po),d=Math.max(...t.map(f=>f.percentage),1),p=In(i.scatterSize)&&e.arrangement==="scattering"?Math.max(.5,(((u=t[0])==null?void 0:u.percentage)??50)/d*jn*oi(l,"scatterSize")):void 0;return c.jsx(Dl,{markConfig:o,collection1Config:e,color:a,position:[0,0,0],layers:t,bindings:i,heightOverride:p,markLabelConfig:n,colLabelConfig:r,layerIndex:0,scatterSeed:s,objectHandle:{kind:"object",owner:"col1"},singleCollection:!0})}function e0({markConfig:o,collection1Config:e,collection2Config:t,layers:i,bindings:n,markLabelConfig:r,colLabelConfig:s,scatterSeed:a}){const{arrangement:l,alignCount:d,alignAxis:p,alignSpacing:u,alignAnchor:f,scatterCount:m,scatterDimensions:y,color:h}=t,x=F.useContext(po),g=oi(x,"scatterSize"),A=i.length||d,b=F.useMemo(()=>{if(l==="alignment"){const B=Array.from({length:A},(E,P)=>{const z=i[P%Math.max(1,i.length)];return{color:(z==null?void 0:z.color)??h,name:(z==null?void 0:z.name)??`Group ${P+1}`,pct:(z==null?void 0:z.percentage)??0}}),R=Math.max(...i.map(E=>E.percentage),1),v=e,S=o.scale??1,M=ie*lo*o.size.x*S,D=ie*lo*o.size.y*S,w=o.size.x*S*ma,K=o.size.y*S*ma,I=B.map(E=>{if(v.arrangement==="scattering"){const P=v.scatterDimensions;return p==="X"?P.x:In(n.scatterSize)?Math.max(.5,E.pct/R*jn*g):P.y}return v.arrangement==="alignment"?p==="X"?v.alignAxis==="X"?(v.alignCount-1)*v.alignSpacing+w:w:v.alignAxis==="Y"?(v.alignCount-1)*v.alignSpacing+K:K:v.arrangement==="adjacent"?p==="X"?v.scatterDimensions.x:D:p==="X"?M:D}),T=B.map(E=>{if(v.arrangement==="scattering"){const P=v.scatterDimensions;return p==="X"?In(n.scatterSize)?Math.max(.5,E.pct/R*jn*g):P.y:P.x}return v.arrangement==="alignment"?p==="X"?v.alignAxis==="Y"?(v.alignCount-1)*v.alignSpacing+K:K:v.alignAxis==="X"?(v.alignCount-1)*v.alignSpacing+w:w:v.arrangement==="adjacent"?p==="X"?D:v.scatterDimensions.x:p==="X"?D:M});let j=-(I.reduce((E,P)=>E+P,0)+(A-1)*u)/2;return B.map((E,P)=>{const z=I[P],L=T[P],O=j+z/2;j+=z+u;const Q=wl(f,p,L/2),J=p==="X"?[O+Q[0],Q[1],Q[2]]:[Q[0],O+Q[1],Q[2]];return{...E,position:J,perpExt:L}})}return Array.from({length:m},(B,R)=>{const v=i[R%Math.max(1,i.length)];return{position:[(Math.random()-.5)*y.x*.8,(Math.random()-.5)*y.y*.8,(Math.random()-.5)*y.z*.8],color:(v==null?void 0:v.color)??h,name:(v==null?void 0:v.name)??`Group ${R+1}`,pct:(v==null?void 0:v.percentage)??0,perpExt:0}})},[l,A,p,u,f,m,y.x,y.y,y.z,i,h,n.scatterSize,g,e.arrangement,e.alignAxis,e.alignCount,e.alignSpacing,e.scatterDimensions.x,e.scatterDimensions.y,o.size.x,o.size.y,o.scale,a]),C=Math.max(...i.map(B=>B.percentage),1);return c.jsxs("group",{children:[b.map(({position:B,color:R,name:v,pct:S},M)=>{var I;const D=In(n.scatterSize)&&e.arrangement==="scattering"?Math.max(.5,S/C*jn*g):void 0,w=(I=o.categoryShapes)==null?void 0:I[v],K=w?{...o,shape:w.shape,customModelUrl:w.customModelUrl,customModelHasMat:w.customModelHasMat,customModelName:w.customModelName,material:w.customModelHasMat?"original":o.material}:o;return c.jsx(Dl,{markConfig:K,collection1Config:e,color:R,position:B,layers:i,bindings:n,heightOverride:D,markLabelConfig:r,colLabelConfig:s,layerIndex:M%Math.max(1,i.length),scatterSeed:a},M)}),t.object&&c.jsx(zs,{config:t.object,handleTarget:{kind:"object",owner:"col2"}})]})}function zs({config:o,onRegister:e,onUnregister:t,handleTarget:i}){const n=F.useMemo(()=>fo(o.shape),[o.shape]);F.useEffect(()=>()=>{n.dispose()},[n]);const r=F.useRef(null),s=F.useCallback(d=>{r.current=d,d?e==null||e(o.id,d):t==null||t(o.id)},[o.id,e,t]),a=Vo,l=F.useMemo(()=>hl(o),[o.opacity,o.roughness,o.metalness]);return c.jsx(ei.Provider,{value:l,children:c.jsx(Kl,{target:i,position:o.position,orientation:o.orientation,groupRef:s,children:o.shape==="custom"&&o.customModelUrl?c.jsx(F.Suspense,{fallback:null,children:c.jsx(Ps,{url:o.customModelUrl,material:o.material,color:o.color,sz:[a*o.size.x,a*o.size.y,a*o.size.z]})}):c.jsx("mesh",{geometry:n,scale:[a*o.size.x,a*o.size.y,a*o.size.z],children:c.jsx(Wo,{material:o.material,structural:o.structural,color:o.color})})})})}function t0({onSamplesUpdate:o,downloadRenderRef:e}){const{gl:t,scene:i,camera:n}=ze(),r=F.useRef(o);return r.current=o,F.useEffect(()=>{let s=!1,a=null,l=null,d=null;async function p(){if(await new Promise(b=>setTimeout(b,0)),s)return;const u=new hg;l=new uh(t),l.setSize(t.domElement.width,t.domElement.height),l.camera=n,l.material=u,i.updateMatrixWorld(!0);const f=new mh(i),{bvh:m,textures:y,materials:h,lights:x}=f.generate();if(s){l.dispose();return}const{geometry:g}=f;if(u.bvh.updateFrom(m),u.attributesArray.updateFrom(g.attributes.normal,g.attributes.tangent,g.attributes.uv,g.attributes.color),u.materialIndexAttribute.updateFrom(g.attributes.materialIndex),u.textures.setTextures(t,2048,2048,y),u.materials.updateFrom(h,y),u.lights.updateFrom(x),i.environment)try{u.envMapInfo.updateFrom(i.environment)}catch{}u.uniforms.backgroundAlpha.value=0,d=new ao(new it({map:l.target.texture})),e.current=()=>{const b=l.samples;t.domElement.toBlob(async C=>{if(!C)return;const B=document.createElement("canvas");B.width=t.domElement.width,B.height=t.domElement.height;const R=B.getContext("2d"),v=await createImageBitmap(C);R.drawImage(v,0,0),i.updateMatrixWorld();const S=[];if(i.traverse(M=>{if(M.userData.isLabel){const D=new U;M.getWorldPosition(D),S.push({worldPos:D,text:M.userData.labelText,pos:M.userData.labelPos??"top"})}}),S.length>0){const M=window.devicePixelRatio||1,D=Math.round(12*M);R.save(),R.font=`${D}px 'Courier New', monospace`,R.shadowColor="rgba(0,0,0,1)",R.shadowBlur=6*M,R.shadowOffsetX=0,R.shadowOffsetY=M,R.fillStyle="#e0e0e0";for(const{worldPos:w,text:K,pos:I}of S){const T=w.clone().project(n);if(T.z>1)continue;const k=(T.x*.5+.5)*B.width,j=(T.y*-.5+.5)*B.height;I==="top"?(R.textAlign="center",R.textBaseline="bottom"):I==="bottom"?(R.textAlign="center",R.textBaseline="top"):I==="left"?(R.textAlign="right",R.textBaseline="middle"):(R.textAlign="left",R.textBaseline="middle"),R.fillText(K,k,j)}R.restore()}B.toBlob(M=>{if(!M)return;const D=URL.createObjectURL(M),w=document.createElement("a");w.download=`render_${b}spp.png`,w.href=D,w.click(),URL.revokeObjectURL(D)},"image/png")},"image/png")},n.updateMatrixWorld();function A(){s||!l||!d||(n.updateMatrixWorld(),l.update(),d.material.map=l.target.texture,t.setRenderTarget(null),d.render(t),r.current(l.samples),a=requestAnimationFrame(A))}a=requestAnimationFrame(A)}return p().catch(console.error),()=>{s=!0,a!==null&&cancelAnimationFrame(a),l==null||l.dispose(),d==null||d.dispose(),e.current=null}},[t,i,n,e]),null}function o0(o,e){const t=o*Math.PI/180,i=e*Math.PI/180,n=100;return[n*Math.cos(t)*Math.sin(i),n*Math.sin(t),n*Math.cos(t)*Math.cos(i)]}function n0({top:o,bottom:e}){const t=ze(n=>n.scene),i=F.useMemo(()=>{const n=document.createElement("canvas");n.width=2,n.height=512;const r=n.getContext("2d"),s=r.createLinearGradient(0,0,0,512);s.addColorStop(0,o),s.addColorStop(1,e),r.fillStyle=s,r.fillRect(0,0,2,512);const a=new ap(n);return a.colorSpace=lp,a},[o,e]);return F.useEffect(()=>{const n=t.background;return t.background=i,()=>{t.background===i&&(t.background=n),i.dispose()}},[t,i]),null}function i0({value:o}){const e=ze(t=>t.gl);return F.useEffect(()=>{e.toneMappingExposure=o},[e,o]),null}function Tl(o){return o.exposure!=null?o.exposure:o.background==="ocean"?.95:o.background==="dark"?1.35:1.2}function s0({config:o}){const e=o.background,t=e==="ocean",n=[0,(o.envRotation??0)*Math.PI/180,0];return c.jsxs(c.Fragment,{children:[e==="dark"&&c.jsx("color",{attach:"background",args:["#050505"]}),e==="ocean"&&c.jsx("color",{attach:"background",args:["#7ab8d4"]}),e==="color"&&c.jsx("color",{attach:"background",args:[o.bgColor??"#202024"]}),e==="gradient"&&c.jsx(n0,{top:o.bgGradientTop??"#3a5f8a",bottom:o.bgGradientBottom??"#0a0a12"}),c.jsx(Cs,{preset:o.hdriPreset,background:e==="hdri",backgroundBlurriness:o.hdriBlur??0,backgroundIntensity:o.hdriIntensity??1,environmentRotation:n,backgroundRotation:n}),c.jsx(i0,{value:Tl(o)}),e==="sky"&&c.jsx(jr,{distance:45e4,sunPosition:o0(o.skyElevation??20,o.skyAzimuth??140),turbidity:8,rayleigh:2,mieCoefficient:.005,mieDirectionalG:.8}),t&&c.jsxs(c.Fragment,{children:[c.jsx(jr,{distance:45e4,sunPosition:[5,1.2,8],turbidity:9,rayleigh:3,mieCoefficient:.005,mieDirectionalG:.7}),c.jsx("fog",{attach:"fog",args:["#a8d4ea",25,140]}),c.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-7.2,0],children:[c.jsx("planeGeometry",{args:[400,400,1,1]}),c.jsx("meshPhysicalMaterial",{color:"#0c3a58",roughness:.06,metalness:.65,reflectivity:.9})]})]}),o.stars&&c.jsx(Xm,{radius:120,depth:50,count:4e3,factor:4,saturation:0,fade:!0,speed:.4}),o.fog&&!t&&c.jsx("fog",{attach:"fog",args:[o.fogColor??"#8090a0",o.fogNear??20,o.fogFar??150]}),o.grid&&c.jsx(EA,{position:[0,0,0],args:[60,60],infiniteGrid:!0,cellSize:1,cellThickness:.6,cellColor:"#6b6b6b",sectionSize:5,sectionThickness:1,sectionColor:"#9a9a9a",fadeDistance:70,fadeStrength:1}),c.jsx("ambientLight",{intensity:t?.5:.18}),c.jsx("directionalLight",{position:[8,18,6],intensity:t?1.4:1.8,color:t?"#fff8e0":"#fffaf0"}),c.jsx("directionalLight",{position:[-6,4,-8],intensity:t?.6:.4,color:t?"#c0e8ff":"#c0ccff"})]})}function r0({level:o,markConfig:e,collection1Config:t,collection2Config:i,sceneConfig:n,layers:r,bindings:s,bindingScale:a,markLabelConfig:l,colLabelConfig:d,decorations:p,colorMode:u,colorGradient:f,colorTint:m,scatterSeed:y,datasetTitle:h,onSelectElement:x,onSelectDecoration:g,onMarkChange:A,onDecorationChange:b,onCollection1Change:C,onCollection2Change:B,pathTracingActive:R,onSamplesUpdate:v,downloadRenderRef:S}){const M=Gg(n.focalLength),D=Sl[o];n.background;const[w,K]=F.useState({}),I=F.useCallback((J,V)=>{K(N=>{const te=N[J];return te&&te.x===V.x&&te.y===V.y&&te.z===V.z?N:{...N,[J]:V}})},[]),[T,k]=F.useState({}),j=F.useCallback((J,V)=>{k(N=>N[J]===V?N:{...N,[J]:V})},[]),E=F.useCallback(J=>{k(V=>{const N={...V};return delete N[J],N})},[]),P=F.useMemo(()=>({mode:n.sceneLabelOcclude??"off",occluders:Object.values(T).map(J=>({current:J}))}),[n.sceneLabelOcclude,T]),[z,L]=F.useState(null);F.useEffect(()=>{L(null)},[o]);const O=F.useMemo(()=>({enabled:!R,isSelected:J=>Aa(J)===z,select:J=>{L(Aa(J)),J.kind==="decoration"?g(J.id):J.kind==="mark"?x("mark"):x(J.owner==="col1"?"collection1":"collection2")},commit:(J,V,N,te)=>{const ue=le=>({x:le.x*te.x,y:le.y*te.y,z:le.z*te.z});if(J.kind==="mark")A({...e,position:V,orientation:N,size:ue(e.size)});else if(J.kind==="decoration"){const le=p.find(oe=>oe.id===J.id);le&&b({...le,position:V,orientation:N,size:ue(le.size)})}else J.owner==="col1"&&t.object?C({...t,object:{...t.object,position:V,orientation:N,size:ue(t.object.size)}}):J.owner==="col2"&&i.object&&B({...i,object:{...i.object,position:V,orientation:N,size:ue(i.object.size)}})}}),[R,z,e,p,t,i,x,g,A,b,C,B]),Q=F.useMemo(()=>hl(e),[e.opacity,e.roughness,e.metalness]);return c.jsxs(Yn,{camera:{position:D,fov:M,near:.1,far:500},style:{width:"100%",height:"100%"},onPointerMissed:()=>L(null),frameloop:R?"never":"always",gl:{antialias:!0,toneMapping:bs,toneMappingExposure:Tl(n),preserveDrawingBuffer:!0},children:[c.jsx(Lg,{level:o,fov:M,focalLength:n.focalLength}),c.jsx(s0,{config:n}),c.jsx(ks.Provider,{value:{aspects:w,report:I},children:c.jsx(ti.Provider,{value:{colorMode:u,colorGradient:f,colorTint:m},children:c.jsx(Us.Provider,{value:P,children:c.jsx(Ha,{gravity:[0,-9.81,0],timeStep:"vary",children:c.jsxs(Ml.Provider,{value:O,children:[c.jsx(ei.Provider,{value:Q,children:c.jsxs(po.Provider,{value:a,children:[o===1&&c.jsx(Zg,{config:e,layers:r,bindings:s,markLabelConfig:l}),o===2&&c.jsx($g,{markConfig:e,collection1Config:t,layers:r,bindings:s,markLabelConfig:l,colLabelConfig:d,scatterSeed:y}),o===3&&c.jsx(e0,{markConfig:e,collection1Config:t,collection2Config:i,layers:r,bindings:s,markLabelConfig:l,colLabelConfig:d,scatterSeed:y})]})}),p.map(J=>c.jsx(zs,{config:J,onRegister:j,onUnregister:E,handleTarget:{kind:"decoration",id:J.id}},J.id)),h&&(n.sceneTitleShow??!0)&&c.jsx(me,{zIndexRange:[1,0],position:[0,(n.sceneTitleBelow?-1:1)*(n.sceneTitleOffset??2.5),0],center:!0,occlude:Is(P),style:{pointerEvents:"none",whiteSpace:"nowrap"},children:c.jsx("span",{style:{fontSize:"16px",fontWeight:"600",color:"#ffffff"},children:h})})]})})})})}),c.jsx(Zn,{makeDefault:!0,dampingFactor:.08,minDistance:1,maxDistance:400,target:[0,0,0]}),R&&v&&S&&c.jsx(t0,{onSamplesUpdate:v,downloadRenderRef:S})]})}const El=1,Ul="scene",Il={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:0,y:0,z:0},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},jl={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},kl={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Pl={background:"dark",hdriPreset:"city",focalLength:130,sceneTitleShow:!1},zl={markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null},Hl={show:!1,slots:{top:[],bottom:[],left:[],right:[]}},Ol={show:!1,slots:{top:[],bottom:[],left:[],right:[]}},Gl=[{id:"dec_1785240706704",shape:"custom",material:"original",color:"#888888",position:{x:2.8035369620307464,y:-.3586983957822668,z:0},size:{x:2.3,y:2.3,z:2.3},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/airplane.glb",customModelHasMat:!0,customModelName:"airplane"},{id:"dec_1785240707456",shape:"custom",material:"original",color:"#888888",position:{x:1.3496490893090274,y:1.2625819359473542,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/barrel.glb",customModelHasMat:!0,customModelName:"barrel"},{id:"dec_1785240708049",shape:"custom",material:"original",color:"#888888",position:{x:0,y:-.0850471406610076,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/building.glb",customModelHasMat:!0,customModelName:"building"},{id:"dec_1785240709849",shape:"custom",material:"original",color:"#888888",position:{x:1.4006800195240812,y:-1.5,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/car.glb",customModelHasMat:!0,customModelName:"car"},{id:"dec_1785240712712",shape:"custom",material:"original",color:"#888888",position:{x:2.9913702220676273,y:-1.5,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/cloud.glb",customModelHasMat:!0,customModelName:"cloud"},{id:"dec_1785240713320",shape:"custom",material:"original",color:"#888888",position:{x:-1.467947805690725,y:-1.5,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/colba5_chemistry.glb",customModelHasMat:!0,customModelName:"colba5_chemistry"},{id:"dec_1785240714472",shape:"custom",material:"original",color:"#888888",position:{x:-1.3509122404206049,y:-.10693087303762083,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:60,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/dioxyde_de_carbone_d.glb",customModelHasMat:!0,customModelName:"dioxyde_de_carbone_d"},{id:"dec_1785240715376",shape:"custom",material:"original",color:"#888888",position:{x:0,y:1.207012573107595,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},name:"Decoration 9",customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/earth.glb",customModelHasMat:!0,customModelName:"earth"},{id:"dec_1785240716984",shape:"custom",material:"original",color:"#888888",position:{x:0,y:-1.349798284618449,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/factory.glb",customModelHasMat:!0,customModelName:"factory"},{id:"dec_1785240749865",shape:"custom",material:"original",color:"#888888",position:{x:-1.3187062297769987,y:1.250564983649693,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/flowers.glb",customModelHasMat:!0,customModelName:"flowers"},{id:"dec_1785240753712",shape:"custom",material:"original",color:"#888888",position:{x:1.3564883835683643,y:-.12486317236137345,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/hourglass.glb",customModelHasMat:!0,customModelName:"hourglass"},{id:"dec_1785240757400",shape:"custom",material:"original",color:"#888888",position:{x:2.902917723291602,y:1.2792547342509355,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20CO2/pine_tree.glb",customModelHasMat:!0,customModelName:"pine_tree"}],Ll=[{id:"1",name:"Germany",percentage:572.32,color:"#E63946"},{id:"2",name:"Canada",percentage:533.34,color:"#F4A261"},{id:"3",name:"Turkey",percentage:513.03,color:"#E9C46A"},{id:"4",name:"Brazil",percentage:483.01,color:"#2A9D8F"},{id:"5",name:"South Africa",percentage:439.83,color:"#264653"},{id:"6",name:"Australia",percentage:386.73,color:"#E76F51"},{id:"7",name:"Vietnam",percentage:370.93,color:"#8AB17D"},{id:"8",name:"United Kingdom",percentage:312.91,color:"#457B9D"},{id:"9",name:"France",percentage:264.16,color:"#6A4C93"},{id:"10",name:"Qatar",percentage:125.81,color:"#B5838D"},{id:"11",name:"Greece",percentage:53.36,color:"#1D3557"},{id:"12",name:"Denmark",percentage:24.4,color:"#A8DADC"}],Nl="co2Emissions",Jl="CO2",Ql="distinct",Wl={from:"#EE6655",to:"#4488EE"},Vl=!1,Xl="data:image/jpeg;base64,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",a0={level:El,activeElement:Ul,markConfig:Il,col1Config:jl,col2Config:kl,sceneConfig:Pl,bindings:zl,markLabelConfig:Hl,colLabelConfig:Ol,decorations:Gl,layers:Ll,activeDataset:Nl,activeModelCollection:Jl,colorMode:Ql,colorGradient:Wl,colorTint:Vl,thumbnail:Xl},l0=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:Nl,activeElement:Ul,activeModelCollection:Jl,bindings:zl,col1Config:jl,col2Config:kl,colLabelConfig:Ol,colorGradient:Wl,colorMode:Ql,colorTint:Vl,decorations:Gl,default:a0,layers:Ll,level:El,markConfig:Il,markLabelConfig:Hl,sceneConfig:Pl,thumbnail:Xl},Symbol.toStringTag,{value:"Module"})),Yl=1,Zl="scene",ql={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:0,y:0,z:0},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},_l={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},$l={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},ec={background:"dark",hdriPreset:"city",focalLength:130,sceneTitleShow:!1},tc={markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null},oc={show:!1,slots:{top:[],bottom:[],left:[],right:[]}},nc={show:!1,slots:{top:[],bottom:[],left:[],right:[]}},ic=[{id:"dec_1785240398912",shape:"custom",material:"original",color:"#888888",position:{x:0,y:.07597511353412223,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/toxic_barrel.glb",customModelHasMat:!0,customModelName:"toxic_barrel"},{id:"dec_1785240404225",shape:"custom",material:"original",color:"#888888",position:{x:3.142274607608607,y:1.536828273316611,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/realistic_mushroom.glb",customModelHasMat:!0,customModelName:"realistic_mushroom"},{id:"dec_1785240407354",shape:"custom",material:"original",color:"#888888",position:{x:3.0278357053545273,y:-1.5,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/poison_bottle.glb",customModelHasMat:!0,customModelName:"poison_bottle"},{id:"dec_1785240413168",shape:"custom",material:"original",color:"#888888",position:{x:-1.4814160853488367,y:.06324202238396426,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/pine_tree.glb",customModelHasMat:!0,customModelName:"pine_tree"},{id:"dec_1785240416907",shape:"custom",material:"original",color:"#888888",position:{x:1.544065453841783,y:-1.5,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/mushroom.glb",customModelHasMat:!0,customModelName:"mushroom"},{id:"dec_1785240420088",shape:"custom",material:"original",color:"#888888",position:{x:3.10334803347824,y:.050559734480474905,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/log.glb",customModelHasMat:!0,customModelName:"log"},{id:"dec_1785240423521",shape:"custom",material:"fluid",color:"#ab50e9",position:{x:1.4965956348298275,y:1.593260010625818,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/liquid_landscape.glb",customModelHasMat:!0,customModelName:"liquid_landscape"},{id:"dec_1785240426792",shape:"custom",material:"original",color:"#888888",position:{x:-1.4836777259185083,y:-1.5,z:0},size:{x:1,y:1,z:1},orientation:{x:48,y:9,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/leaf.glb",customModelHasMat:!0,customModelName:"leaf"},{id:"dec_1785240430185",shape:"custom",material:"original",color:"#888888",position:{x:0,y:-1.5,z:0},size:{x:2.1,y:2.1,z:2.1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/forest_diorama.glb",customModelHasMat:!0,customModelName:"forest_diorama"},{id:"dec_1785240433888",shape:"custom",material:"original",color:"#888888",position:{x:-1.470564980941981,y:1.4730720426587034,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/fly_agaric_mushroom.glb",customModelHasMat:!0,customModelName:"fly_agaric_mushroom"},{id:"dec_1785240436953",shape:"custom",material:"original",color:"#888888",position:{x:1.4600916768314587,y:.08050266038047105,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/flowers.glb",customModelHasMat:!0,customModelName:"flowers"},{id:"dec_1785240441241",shape:"custom",material:"original",color:"#888888",position:{x:0,y:1.4820969273194309,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20mushrooms/earth.glb",customModelHasMat:!0,customModelName:"earth"}],sc=[{id:"1",name:"Death cap (Amanita phalloides)",percentage:10,color:"#7C8C4E"},{id:"2",name:"Destroying angel (Amanita virosa)",percentage:10,color:"#F0ECE0"},{id:"3",name:"Funeral bell (Galerina marginata)",percentage:9,color:"#6B4E31"},{id:"4",name:"Deadly webcap (Cortinarius rubellus)",percentage:8,color:"#A0522D"},{id:"5",name:"False morel (Gyromitra esculenta)",percentage:6,color:"#8B4A2F"},{id:"6",name:"Panther cap (Amanita pantherina)",percentage:5,color:"#C2A878"},{id:"7",name:"Fly agaric (Amanita muscaria)",percentage:3,color:"#D62828"},{id:"8",name:"Satan's bolete (Rubroboletus satanas)",percentage:4,color:"#C77B7B"},{id:"9",name:"Jack-o'-lantern (Omphalotus olearius)",percentage:4,color:"#E68A00"},{id:"10",name:"Ivory funnel (Clitocybe dealbata)",percentage:7,color:"#E4DAC4"},{id:"11",name:"Fool's funnel (Clitocybe rivulosa)",percentage:7,color:"#CFC8B8"},{id:"12",name:"The sickener (Russula emetica)",percentage:2,color:"#E0455E"}],rc="mushroomToxicity",ac="mushrooms",lc="distinct",cc={from:"#EE6655",to:"#4488EE"},uc=!1,dc="data:image/jpeg;base64,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",c0={level:Yl,activeElement:Zl,markConfig:ql,col1Config:_l,col2Config:$l,sceneConfig:ec,bindings:tc,markLabelConfig:oc,colLabelConfig:nc,decorations:ic,layers:sc,activeDataset:rc,activeModelCollection:ac,colorMode:lc,colorGradient:cc,colorTint:uc,thumbnail:dc},u0=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:rc,activeElement:Zl,activeModelCollection:ac,bindings:tc,col1Config:_l,col2Config:$l,colLabelConfig:nc,colorGradient:cc,colorMode:lc,colorTint:uc,decorations:ic,default:c0,layers:sc,level:Yl,markConfig:ql,markLabelConfig:oc,sceneConfig:ec,thumbnail:dc},Symbol.toStringTag,{value:"Module"})),fc=1,pc="mark",Ac={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:0,y:0,z:0},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},mc={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},hc={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},gc={background:"dark",hdriPreset:"city",focalLength:130},xc={markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null},yc={show:!1,slots:{top:[],bottom:[],left:[],right:[]}},bc={show:!1,slots:{top:[],bottom:[],left:[],right:[]}},Cc=[{id:"dec_1785239776800",shape:"custom",material:"original",color:"#888888",position:{x:.06702975226950691,y:-2.9209068999245345,z:0},size:{x:1.2,y:1.2,z:1.2},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20sea%20pollution/corals%201.glb",customModelHasMat:!0,customModelName:"corals 1"},{id:"dec_1785239796688",shape:"custom",material:"fluid",color:"#2fd3e1",position:{x:1.9910985760209705,y:.8565123344000618,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20sea%20pollution/drop_of_water.glb",customModelHasMat:!0,customModelName:"drop_of_water"},{id:"dec_1785239818521",shape:"custom",material:"original",color:"#888888",position:{x:2.077946559836162,y:-2.0480313187032,z:0},size:{x:1.5,y:1.5,z:1.5},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20sea%20pollution/water_waves.glb",customModelHasMat:!0,customModelName:"water_waves"},{id:"dec_1785239824257",shape:"custom",material:"original",color:"#888888",position:{x:0,y:.8092072794486445,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20sea%20pollution/trash_bag.glb",customModelHasMat:!0,customModelName:"trash_bag"},{id:"dec_1785239850993",shape:"custom",material:"original",color:"#888888",position:{x:-1.6671060148258432,y:.7874136355249424,z:0},size:{x:1.3,y:1.3,z:1.3},orientation:{x:25,y:142,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20sea%20pollution/sea_turtle.glb",customModelHasMat:!0,customModelName:"sea_turtle"},{id:"dec_1785239918201",shape:"custom",material:"original",color:"#888888",position:{x:-1.530037701275162,y:-.7247997625560911,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:-80,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20sea%20pollution/sea_shell.glb",customModelHasMat:!0,customModelName:"sea_shell"},{id:"dec_1785239924312",shape:"custom",material:"original",color:"#888888",position:{x:.08067082731122155,y:-.7811536453889287,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:-71,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/plastic_water_bottle.glb",customModelHasMat:!0,customModelName:"plastic_water_bottle"},{id:"dec_1785239955417",shape:"custom",material:"original",color:"#888888",position:{x:-1.652898597920611,y:-1.8655315101074894,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20sea%20pollution/garbage%20bag.glb",customModelHasMat:!0,customModelName:"garbage bag"},{id:"dec_1785239968993",shape:"custom",material:"original",color:"#888888",position:{x:.09053427897427183,y:-1.9189669517084416,z:0},size:{x:1.2,y:1.2,z:1.2},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20sea%20pollution/fish.glb",customModelHasMat:!0,customModelName:"fish"},{id:"dec_1785239986329",shape:"custom",material:"original",color:"#888888",position:{x:2.0508671017933784,y:-.5648406628700835,z:0},size:{x:1.3,y:1.3,z:1.3},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models%20-%20sea%20pollution/corals%202.glb",customModelHasMat:!0,customModelName:"corals 2"}],Fc=[{id:"1",name:"North Pacific",percentage:1990,color:"#023E8A"},{id:"2",name:"Indian Ocean",percentage:1300,color:"#0077B6"},{id:"3",name:"North Atlantic",percentage:930,color:"#0096C7"},{id:"4",name:"South Pacific",percentage:491,color:"#00B4D8"},{id:"5",name:"Mediterranean Sea",percentage:247,color:"#48CAE4"},{id:"6",name:"South Atlantic",percentage:297,color:"#90E0EF"}],Bc="oceanPlastic",vc="sea pollution",Rc="distinct",Sc={from:"#EE6655",to:"#4488EE"},Mc=!1,Kc="data:image/jpeg;base64,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KKKACiiigAooooAWN2jdXQ4ZSCD6EVbS4RnLNGDuwGQHH1we3/6+tU6KALEjxNNKywbEOdkZYnbn374p0htRzGHJGBgjAbjqeeOf8ioHmldQryOwHQFicUjyM+M7eBjhQP5UDJHCrLtDDCHG9R1560ksoeNUUMMdcng8en5/nUZYnrSUCCiiigAooooAdFFJKxWJGdgpYhRk4AJJ+gAJPsKls7SS7mSNCEDuE8xwdqk5xkgH0P5VueCTjUStywjsZgyTyCFXcAKxwoIPHY9hkZ52muh1LSIreSy+y2001sY/NjJb96rFTwXIHJPP3c54xwKiUrOyOqhh41WruxwN7aT2Ny9tdIEmTG5QwbHGeo4qGuh8SwIkMc1zZXlvdSYWJ2h2QyIuckE8seVGefqciueqottamVamqdRxTuFFFFMyCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqxYWjXt0sCOkZKs2584AVSx6ewqvWh4fuoLPVoJroOYQGDBJCh5Ugcj3IP4Une2hUHFSXNt1O48O6jZaW9v5yGWKFRGhkjDQs2RkkcdcEgdc85JNaWvXTX2pxSDTltY2TiOVXCEqF5ReB26e3J5qJdLtXN1frd6fOkqNttlRUMeQDt2nuMcgdeh4pum2E6LBJJJby2XLR28ZIFuW5YEA5HQY6gE88nlU6MmrNXPTeLo+1UoO2llcryQapfWSrbHzoE3pJHwVB3HlgeDwGwcdiO+K881GFrfULmF4hE0crKYwchME8dT/M/U16PobOltcWk8mwpIUQxmNcqRhlc4JH1wCN3oeMgy2VjLdi6w9pOu8x3ClTMr4JK9fmHHPXvWLl7OTia1aSxUFJu2+pw9FBxk44HbNFdB4oUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFdd4NGmGFVnijlmeX96kjxguijIUB+AMgZJ/DBANcjSxu0bq8bFXUgqR1BFJq9i4T5b6bpr7z0+XRo453V7H53c+XaxSJtUH7pyDgBsgZGeSRmqcmnW+n6pbT6lLcRWcxdWa2mMmSDwOOnIORzj9a5T/AISK6m8oXrNKE4+UhPl4GOAOw6e59TTrrXI5fK8m3ZNjk5kkLnbxgZJ+v4muyVZSiknaxzqLvZq53040a4srq2067j3bAUcgRqSuDkycN1wACRya4HxTdrcXEMTJH58CGN5FOTgcBTyQSMHnJyGGemBR1PUDeyDagSNeFHf/AOt+FUiSxJYkk8knvXK9L2OiVSU0lLoFFFFIgKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/2Q==",d0={level:fc,activeElement:pc,markConfig:Ac,col1Config:mc,col2Config:hc,sceneConfig:gc,bindings:xc,markLabelConfig:yc,colLabelConfig:bc,decorations:Cc,layers:Fc,activeDataset:Bc,activeModelCollection:vc,colorMode:Rc,colorGradient:Sc,colorTint:Mc,thumbnail:Kc},f0=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:Bc,activeElement:pc,activeModelCollection:vc,bindings:xc,col1Config:mc,col2Config:hc,colLabelConfig:bc,colorGradient:Sc,colorMode:Rc,colorTint:Mc,decorations:Cc,default:d0,layers:Fc,level:fc,markConfig:Ac,markLabelConfig:yc,sceneConfig:gc,thumbnail:Kc},Symbol.toStringTag,{value:"Module"})),wc=2,Dc="scene",Tc={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:1.8,y:1.8,z:1.8},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/stylized_cloud.glb",customModelHasMat:!0,customModelName:"stylized_cloud"},Ec={arrangement:"scattering",color:"#5E5CE6",alignCount:12,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:6.5,z:3},scatterDensity:1,pilingCount:10,scatterOrientation:"static",scatterExclusionId:"dec_1784648799961",scatterBoundingVolume:"sphere",scatterEven:!0,scatterShowBounds:!1},Uc={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Ic={background:"dark",hdriPreset:"sunset",focalLength:130,sceneLabelOcclude:"optimized",sceneTitleOffset:2,bgColor:"#00001e",exposure:1,envRotation:335,fog:!1,grid:!1,stars:!1,bgGradientTop:"#a6d2ff"},jc={markColor:"numerical",markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:"numerical"},kc={show:!0,slots:{top:"numerical",bottom:null,left:"categorical",right:null}},Pc={show:!0,slots:{top:null,bottom:null,left:null,right:null}},zc=[{id:"dec_1784648799961",shape:"custom",material:"original",color:"#888888",position:{x:0,y:-.6,z:0},size:{x:3.4,y:3.4,z:3.4},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/building_05.glb",customModelHasMat:!0,customModelName:"building_05",name:"Skyscraper"}],Hc=[{id:"1",name:"Germany",percentage:572.32,color:"#E63946"},{id:"2",name:"Canada",percentage:533.34,color:"#F4A261"},{id:"3",name:"Turkey",percentage:513.03,color:"#E9C46A"},{id:"4",name:"Brazil",percentage:483.01,color:"#2A9D8F"},{id:"5",name:"South Africa",percentage:439.83,color:"#264653"},{id:"6",name:"Australia",percentage:386.73,color:"#E76F51"},{id:"7",name:"Vietnam",percentage:370.93,color:"#8AB17D"},{id:"8",name:"United Kingdom",percentage:312.91,color:"#457B9D"},{id:"9",name:"France",percentage:264.16,color:"#6A4C93"},{id:"10",name:"Qatar",percentage:125.81,color:"#B5838D"},{id:"11",name:"Greece",percentage:53.36,color:"#1D3557"},{id:"12",name:"Denmark",percentage:24.4,color:"#A8DADC"}],Oc="co2Emissions",Gc="continuous",Lc={from:"#ffffff",to:"#000000"},Nc=!1,Jc="data:image/jpeg;base64,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",p0={level:wc,activeElement:Dc,markConfig:Tc,col1Config:Ec,col2Config:Uc,sceneConfig:Ic,bindings:jc,markLabelConfig:kc,colLabelConfig:Pc,decorations:zc,layers:Hc,activeDataset:Oc,colorMode:Gc,colorGradient:Lc,colorTint:Nc,thumbnail:Jc},A0=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:Oc,activeElement:Dc,bindings:jc,col1Config:Ec,col2Config:Uc,colLabelConfig:Pc,colorGradient:Lc,colorMode:Gc,colorTint:Nc,decorations:zc,default:p0,layers:Hc,level:wc,markConfig:Tc,markLabelConfig:kc,sceneConfig:Ic,thumbnail:Jc},Symbol.toStringTag,{value:"Module"})),Qc=1,Wc="scene",Vc={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},scale:.1,size:{x:0,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},Xc={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},Yc={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Zc={background:"dark",hdriPreset:"city",focalLength:130,sceneTitleShow:!1},qc={markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null},_c={show:!1,slots:{top:null,bottom:null,left:null,right:null}},$c={show:!1,slots:{top:null,bottom:null,left:null,right:null}},eu=[{id:"dec_1784808573016",shape:"custom",material:"original",color:"#888888",position:{x:0,y:1.7,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/airplane_crj-900_cityjet.glb",customModelHasMat:!0,customModelName:"airplane_crj-900_cityjet"},{id:"dec_1784808573841",shape:"custom",material:"original",color:"#888888",position:{x:1.2,y:.9,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/building_05.glb",customModelHasMat:!0,customModelName:"building_05"},{id:"dec_1784808574368",shape:"custom",material:"original",color:"#888888",position:{x:-1.4,y:.9,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/carbon_dioxide_co2.glb",customModelHasMat:!0,customModelName:"carbon_dioxide_co2"},{id:"dec_1784808574984",shape:"custom",material:"original",color:"#888888",position:{x:0,y:.6,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/earth%20(2).glb",customModelHasMat:!0,customModelName:"earth (2)"},{id:"dec_1784808575505",shape:"custom",material:"original",color:"#888888",position:{x:1.3,y:-.7,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/flowers.glb",customModelHasMat:!0,customModelName:"flowers"},{id:"dec_1784808576024",shape:"custom",material:"original",color:"#888888",position:{x:-1.2,y:-.5,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/low_poly_factory.glb",customModelHasMat:!0,customModelName:"low_poly_factory"},{id:"dec_1784808576593",shape:"custom",material:"original",color:"#888888",position:{x:1.3,y:1.9,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/low_poly_small_car.glb",customModelHasMat:!0,customModelName:"low_poly_small_car"},{id:"dec_1784808662185",shape:"custom",material:"original",color:"#888888",position:{x:0,y:-.9,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/pine_tree.glb",customModelHasMat:!0,customModelName:"pine_tree"},{id:"dec_1784808680241",shape:"custom",material:"original",color:"#888888",position:{x:-1.6,y:1.8,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/stylized_cloud.glb",customModelHasMat:!0,customModelName:"stylized_cloud"}],tu=[{id:"1",name:"Death cap (Amanita phalloides)",percentage:10,color:"#7C8C4E"},{id:"2",name:"Destroying angel (Amanita virosa)",percentage:10,color:"#F0ECE0"},{id:"3",name:"Funeral bell (Galerina marginata)",percentage:9,color:"#6B4E31"},{id:"4",name:"Deadly webcap (Cortinarius rubellus)",percentage:8,color:"#A0522D"},{id:"5",name:"False morel (Gyromitra esculenta)",percentage:6,color:"#8B4A2F"},{id:"6",name:"Panther cap (Amanita pantherina)",percentage:5,color:"#C2A878"}],ou="mushroomToxicity",nu="distinct",iu={from:"#EE6655",to:"#4488EE"},su=!1,ru="data:image/jpeg;base64,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03/j7X6H+VdJpUgiuSzW0dwCuNsjqoHI5yfpj8a5WCVoZBIoBI7Gte3uba5x5lwltzg+aGIHXnKqc9AOnU/jSZcWrWOtXULyJ53t4dPTzm3YN/F8vygdmHpmtiy8RaXZafb20lyHnggjWRIlL4OAOo46n1rn/E2seGruz8rS2to5PPD7o7VkOzbgjO315x0qrF4wtLbRF0pIJZNjAiYHAYb933T+XWhtonRo7I+IQJFj/snVi7Asq/ZuSB1IGfcfnWT4j1Wz1XRLiG40zU0j5KztajbG6nGck8YPB/EViT/EGdrpJ47KI7EaNVbIGCVPY9flFU7jxtPcabcWL2UXlzs7O4c7ss5c/qfyptsVkcrRRRQAV2/hm4nuNHRFv9iwyIjojM02GcKOvCgZXGAeenJriKKmUeZAd7repaRYreWssKT3YiAjBtgm0sgGOACMAA+vOOwxwbMXYsxySck1qeJ1C6w6jdxBADuOSD5SZ/WsqiMbILWYUUUVQBRRRQB0Xhi8tmL2t/LIsH3giuQN3PYAkj2A646jIrdnkCDyYlbeDtKbAwLBRhVABxhiRgYGCK4S2uJrWdJ7eRo5UOVZTyK6K68TWxs5I7Ox2SyqVbe3yjIGeBgHkdxjpxWM6d3oZyp3dypr97bXH7pGuZGQlhLLKW8xjt3Oc9iFAHAJABJ6CsVmLHLHJodmd2d2LMxySTkk0lapWRaVgooopjCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA2/GieX4lu1xtwI/lxjH7teKxKmvbue+uXubpw8r43MFC5wMdBx0FQ0lsNu7CiiimIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/9k=",m0={level:Qc,activeElement:Wc,markConfig:Vc,col1Config:Xc,col2Config:Yc,sceneConfig:Zc,bindings:qc,markLabelConfig:_c,colLabelConfig:$c,decorations:eu,layers:tu,activeDataset:ou,colorMode:nu,colorGradient:iu,colorTint:su,thumbnail:ru},h0=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:ou,activeElement:Wc,bindings:qc,col1Config:Xc,col2Config:Yc,colLabelConfig:$c,colorGradient:iu,colorMode:nu,colorTint:su,decorations:eu,default:m0,layers:tu,level:Qc,markConfig:Vc,markLabelConfig:_c,sceneConfig:Zc,thumbnail:ru},Symbol.toStringTag,{value:"Module"})),au=3,lu="mark",cu={shape:"box",material:"metal",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},uu={arrangement:"scattering",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"density",scatterCount:300,scatterDimensions:{x:10.5,y:4,z:10.5},scatterDensity:1,pilingCount:10},du={arrangement:"alignment",color:"#9D9BF4",alignCount:5,alignAxis:"Y",alignSpacing:.5,alignAnchor:"end",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},fu={background:"dark",hdriPreset:"city",focalLength:130,sceneTitleOffset:9.5,sceneTitleShow:!1},pu={markColor:null,markGeometry:null,scatterSize:"numerical",scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null},Au={show:!1,slots:{top:null,bottom:null,left:null,right:null}},mu={show:!0,slots:{top:null,bottom:null,left:"categorical",right:"numerical"}},hu=[],gu=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],xu="garbageInOcean",yu="distinct",bu={from:"#EE6655",to:"#4488EE"},Cu=!1,Fu="data:image/jpeg;base64,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",g0={level:au,activeElement:lu,markConfig:cu,col1Config:uu,col2Config:du,sceneConfig:fu,bindings:pu,markLabelConfig:Au,colLabelConfig:mu,decorations:hu,layers:gu,activeDataset:xu,colorMode:yu,colorGradient:bu,colorTint:Cu,thumbnail:Fu},x0=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:xu,activeElement:lu,bindings:pu,col1Config:uu,col2Config:du,colLabelConfig:mu,colorGradient:bu,colorMode:yu,colorTint:Cu,decorations:hu,default:g0,layers:gu,level:au,markConfig:cu,markLabelConfig:Au,sceneConfig:fu,thumbnail:Fu},Symbol.toStringTag,{value:"Module"})),Bu=2,vu="scene",Ru={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:.5,y:.5,z:.5},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/fly_agaric_mushroom.glb",customModelHasMat:!0,customModelName:"fly_agaric_mushroom"},Su={arrangement:"surface",color:"#5E5CE6",alignCount:12,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10,surfaceTargetId:"dec_1784657033022"},Mu={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Ku={background:"dark",hdriPreset:"city",focalLength:130,sceneLabelOcclude:"optimized",sceneTitleBelow:!1,sceneTitleShow:!0,sceneTitleOffset:.6},wu={markColor:"numerical",markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:"numerical"},Du={show:!0,slots:{top:"numerical",bottom:null,left:"categorical",right:null}},Tu={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Eu=[{id:"dec_1784657033022",shape:"custom",material:"original",color:"#888888",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/log.glb",customModelHasMat:!0,customModelName:"log"}],Uu=[{id:"1",name:"Death cap (Amanita phalloides)",percentage:10,color:"#7C8C4E"},{id:"2",name:"Destroying angel (Amanita virosa)",percentage:10,color:"#F0ECE0"},{id:"3",name:"Funeral bell (Galerina marginata)",percentage:9,color:"#6B4E31"},{id:"4",name:"Deadly webcap (Cortinarius rubellus)",percentage:8,color:"#A0522D"},{id:"5",name:"False morel (Gyromitra esculenta)",percentage:6,color:"#8B4A2F"},{id:"6",name:"Panther cap (Amanita pantherina)",percentage:5,color:"#C2A878"},{id:"7",name:"Fly agaric (Amanita muscaria)",percentage:3,color:"#D62828"},{id:"8",name:"Satan's bolete (Rubroboletus satanas)",percentage:4,color:"#C77B7B"},{id:"9",name:"Jack-o'-lantern (Omphalotus olearius)",percentage:4,color:"#E68A00"},{id:"10",name:"Ivory funnel (Clitocybe dealbata)",percentage:7,color:"#E4DAC4"},{id:"11",name:"Fool's funnel (Clitocybe rivulosa)",percentage:7,color:"#CFC8B8"},{id:"12",name:"The sickener (Russula emetica)",percentage:2,color:"#E0455E"}],Iu="mushroomToxicity",ju="continuous",ku={from:"#ffffff",to:"#400080"},Pu=!0,zu="data:image/jpeg;base64,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+Qfj369q4u/1C61CXzLqUt6L0C/QVVorZJI5pTctwqW1uZbSdZoGKuv6+xqKimQezeBvFaanCsErASrwynqKiuvCNvpHi63161eODTwxM0O12IZgVOwKpAXkdSAO3YV5hoGoR6bfG4kDZ8shGUkbW4weOv0Pr+NexeGNettb05g8wGxfnbft24568Y9aT1VjZWaTZynjnw22t3s2saLDfTvKq5iW3XYcAAnfvz0GMbTyPSuGvdC1ewg+0Xul3kEPeSSBlUc45JGBz/SvWINdv5PMjtQp+Z1ErySFfZtzHOPbH61T1rUre4ha31eUXEbN8+SVVivI+71GQOOf61mpS2aOhYRSTakeR0V0HiaCxZVnsbZYDkFxG+5SCOOOx46cdea5+tE7nJODg7MKu2N3Mn7lArKe7DoOnf8Az6VSqWNtkZxjLHrTtcINp6Gy+oJAP9HCl+c8YH6YrPmvJZ+DMRkcjoKpkk855pSc89D39KtOxo5Njg2fvfNxxk9KUHg4x070zFPLY+ZsUriuJKcKF9TmoqCcnJopN3Mm7sKKKKQgooooAKKKKACiiigAooooAKKKKACiiigAoopURpHVEUszEBQOpNACUVf1DRNT00M17ZTRopwXxuUH03DjPtUEdlcy2puo4i8QkEZKkE7j0GOv40robi07NHafCbw+NQ1V9WuVzbWJHlhhw8p6dRztHPqCVroPiV4o+xxmztnBuZAR1+4vr/n+la+lwxeCfAsYvdqThDJMAACZDzjg8kcLnPOBXi+q6hNqmoTXlwSXlbOM/dHYfgKNyvhRUooopkBRRRQAUUUUAFdX4ViWO0MssrxwSt+8wfvYPGOePc/SuZtYfPnVCcL1Y+grduLoHdBFHiJU2RK8nAAPJBzg859evepk+iOnDwi3zS2N2/8AEH7l7aw2xiNccHdn1wMenft69KxZrxm2Ayzsozujc469effn+VVDKzS7lBIZdrKfm9vz/kelVp7tYVKRcswwc8496lI6J1dNRmpXAYLAhyE6/wCfxqjQTk5PWitEcEpOTuwpR0xSUUEp2HYJA6U4DHPSo6KC+YeXAGBzTCSTkmiigltsKKKKBBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVPY3LWl1HOvVc/qMf1qCigabTujudL8U3FnCgZnnRmyy/L0784z3/AAx37b2mDRJZJjawxWtxJt3qrbVzjGRgkd+w5615dbXLQsufmQHO2tG2uCCslvKY2U7tyEhh6AelYuFtj0IV41FaaudN41nvpNN+z3l5NIhk3xvIRhsZyuc+4P4DgVwVdjHrW+JraeJJYHUBlnw7E9cce/I4Hoc1gazYQ27+fZSB7Z2wBnlT/PHBx39fe4vozCvRSXNDYzaKKKs5QooooAKKKKAHwymJiR3GD9KtrdxLGVw3OOAO4z/jVGilYuM3FWRPNdySE4JXPvmoKKKZLbe4UUUUCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAChSVOVJB9RRRQBYjvZUxznBzwcf56CkuLqScYY/Lndyc5P+c/nUFFKyK55NWuFFFFMkKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==",y0={level:Bu,activeElement:vu,markConfig:Ru,col1Config:Su,col2Config:Mu,sceneConfig:Ku,bindings:wu,markLabelConfig:Du,colLabelConfig:Tu,decorations:Eu,layers:Uu,activeDataset:Iu,colorMode:ju,colorGradient:ku,colorTint:Pu,thumbnail:zu},b0=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:Iu,activeElement:vu,bindings:wu,col1Config:Su,col2Config:Mu,colLabelConfig:Tu,colorGradient:ku,colorMode:ju,colorTint:Pu,decorations:Eu,default:y0,layers:Uu,level:Bu,markConfig:Ru,markLabelConfig:Du,sceneConfig:Ku,thumbnail:zu},Symbol.toStringTag,{value:"Module"})),Hu=3,Ou="scene",Gu={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},scale:6,size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},categoryShapes:{Strings:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/stradivari_violin.glb",customModelHasMat:!0,customModelName:"stradivari_violin"},Brass:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/trumpet.glb",customModelHasMat:!0,customModelName:"trumpet"},Woodwinds:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/clarinet_model_with_annotations.glb",customModelHasMat:!0,customModelName:"clarinet_model_with_annotations"},Percussion:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/drum.glb",customModelHasMat:!0,customModelName:"drum"},"Piano & Harp":{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/harp.glb",customModelHasMat:!0,customModelName:"harp"}}},Lu={arrangement:"scattering",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10,scatterEven:!0},Nu={arrangement:"alignment",color:"#9D9BF4",alignCount:5,alignAxis:"X",alignSpacing:.5,alignAnchor:"end",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Ju={background:"dark",hdriPreset:"city",focalLength:130,sceneTitleOffset:9.5},Qu={markColor:null,markGeometry:"categorical",scatterSize:"numerical",scatterCount:"numerical",c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null},Wu={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Vu={show:!0,slots:{top:"numerical",bottom:"categorical",left:null,right:null}},Xu=[],Yu=[{id:"1",name:"Strings",percentage:80,color:"#C8A882"},{id:"2",name:"Brass",percentage:28,color:"#D4A017"},{id:"3",name:"Woodwinds",percentage:20,color:"#4A7C59"},{id:"4",name:"Percussion",percentage:10,color:"#5C6B7A"},{id:"5",name:"Piano & Harp",percentage:4,color:"#8B7BAB"}],Zu="mahler",qu="distinct",_u={from:"#EE6655",to:"#4488EE"},$u=!1,ed="data:image/jpeg;base64,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",C0={level:Hu,activeElement:Ou,markConfig:Gu,col1Config:Lu,col2Config:Nu,sceneConfig:Ju,bindings:Qu,markLabelConfig:Wu,colLabelConfig:Vu,decorations:Xu,layers:Yu,activeDataset:Zu,colorMode:qu,colorGradient:_u,colorTint:$u,thumbnail:ed},F0=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:Zu,activeElement:Ou,bindings:Qu,col1Config:Lu,col2Config:Nu,colLabelConfig:Vu,colorGradient:_u,colorMode:qu,colorTint:$u,decorations:Xu,default:C0,layers:Yu,level:Hu,markConfig:Gu,markLabelConfig:Wu,sceneConfig:Ju,thumbnail:ed},Symbol.toStringTag,{value:"Module"})),td=2,od="collection1",nd={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/pine_tree.glb",customModelHasMat:!0,customModelName:"pine_tree"},id={arrangement:"surface",color:"#5E5CE6",alignCount:12,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10,surfaceTargetId:"dec_1784657033022"},sd={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},rd={background:"dark",hdriPreset:"city",focalLength:130,sceneLabelOcclude:"optimized",sceneTitleBelow:!1,sceneTitleShow:!1,sceneTitleOffset:1.3},ad={markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:"numerical"},ld={show:!0,slots:{top:"numerical",bottom:null,left:"categorical",right:null}},cd={show:!1,slots:{top:null,bottom:null,left:null,right:null}},ud=[{id:"dec_1784657033022",shape:"custom",material:"original",color:"#888888",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/earth%20(2).glb",customModelHasMat:!0,customModelName:"earth (2)",name:"Earth"}],dd=[{id:"1",name:"Death cap (Amanita phalloides)",percentage:10,color:"#7C8C4E"},{id:"2",name:"Destroying angel (Amanita virosa)",percentage:10,color:"#F0ECE0"},{id:"3",name:"Funeral bell (Galerina marginata)",percentage:9,color:"#6B4E31"},{id:"4",name:"Deadly webcap (Cortinarius rubellus)",percentage:8,color:"#A0522D"},{id:"5",name:"False morel (Gyromitra esculenta)",percentage:6,color:"#8B4A2F"},{id:"6",name:"Panther cap (Amanita pantherina)",percentage:5,color:"#C2A878"},{id:"7",name:"Fly agaric (Amanita muscaria)",percentage:3,color:"#D62828"},{id:"8",name:"Satan's bolete (Rubroboletus satanas)",percentage:4,color:"#C77B7B"},{id:"9",name:"Jack-o'-lantern (Omphalotus olearius)",percentage:4,color:"#E68A00"},{id:"10",name:"Ivory funnel (Clitocybe dealbata)",percentage:7,color:"#E4DAC4"},{id:"11",name:"Fool's funnel (Clitocybe rivulosa)",percentage:7,color:"#CFC8B8"},{id:"12",name:"The sickener (Russula emetica)",percentage:2,color:"#E0455E"}],fd="mushroomToxicity",pd="continuous",Ad={from:"#ffffff",to:"#400080"},md=!0,hd="data:image/jpeg;base64,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",B0={level:td,activeElement:od,markConfig:nd,col1Config:id,col2Config:sd,sceneConfig:rd,bindings:ad,markLabelConfig:ld,colLabelConfig:cd,decorations:ud,layers:dd,activeDataset:fd,colorMode:pd,colorGradient:Ad,colorTint:md,thumbnail:hd},v0=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:fd,activeElement:od,bindings:ad,col1Config:id,col2Config:sd,colLabelConfig:cd,colorGradient:Ad,colorMode:pd,colorTint:md,decorations:ud,default:B0,layers:dd,level:td,markConfig:nd,markLabelConfig:ld,sceneConfig:rd,thumbnail:hd},Symbol.toStringTag,{value:"Module"})),gd=2,xd="scene",yd={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/flowers.glb",customModelHasMat:!0,customModelName:"flowers"},bd={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:.9,alignAnchor:"end",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1},Cd={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1},Fd={background:"dark",hdriPreset:"dawn",focalLength:130},Bd={markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:"numerical",markSizeZ:null,markScale:null},vd={show:!0,slots:{top:"numerical",bottom:"categorical",left:null,right:null}},Rd={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Sd=[{id:"dec_1781047628256",shape:"box",material:"metal",color:"#24271d",position:{x:0,y:-.05,z:0},size:{x:8,y:.1,z:6.6},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}}],Md=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],Kd="co2Emissions",wd="distinct",Dd={from:"#EE6655",to:"#4488EE"},Td=!1,Ed="data:image/jpeg;base64,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FopKKAHIzIwZSQR0IpzzSyY81gwHTAxUdLUuKbuMWikopiFzS02loAWpDPKTkyMeMDJ/P+lRUtTKKluO4tFJRVCFopM0UgHUjFyoCtge4z/ntRRSlFSVmMXNFJS09gFopKKBC02VDJDJGDt3qRn0PY06jNJq6sxiIGGdxB54wCAPzJp1JRSUVFWQDqKSimIWmuiyAh1BBUqcjOQeo+lLS0NXApx6bElw8+9yznLDPH5f59OnFXFUKMKMUUVEacYfChi0tJRVgLRSUUALS02loEU80Vwn/C1NC/59NR/79x//ABdH/C1NC/59NS/79x//ABdHPHuB3dLXB/8AC1NC/wCfTUv+/cf/AMXS/wDC1NC/59NS/wC/cf8A8XRzx7gd3RXCf8LU0L/n01L/AL9x/wDxdH/C1dC/59NS/wC/cf8A8XRzx7gd5RXB/wDC1dC/59NS/wC/cf8A8XR/wtXQv+fTUv8Av3H/APF0c8e4HeUVwf8AwtXQv+fTUv8Av3H/APF0v/C1dC/59NS/79x//F0c8e4HeUVwf/C1dC/59NS/79x//F0f8LV0L/n01L/v3H/8XRzx7gd7RXBf8LW0L/n01L/v3H/8XS/8LW0L/n01L/v3H/8AF0c8e4HeUVwf/C1tC/59NS/79R//ABdH/C1tC/59NS/79x//ABdLnj3A72iuC/4WtoX/AD6al/37j/8Ai6P+FraF/wA+mpf9+o//AIujnj3A72jNcF/wtbQv+fTUv+/Uf/xdH/C19C/59NS/79R//F0c8e4HfUVwX/C19B/59NS/79R//F0f8LX0L/n01L/v1H/8XRzx7gd7S1wP/C19B/59NS/79R//ABdH/C19B/59NS/79R//ABdHPHuB31FcD/wtfQf+fTUv+/Uf/wAXR/wtfQf+fTUv+/Uf/wAXRzx7gd9miuC/4WxoP/PpqX/fqP8A+Lo/4WxoP/PpqX/fqP8A+Lo549wO+orgf+FsaD/z6al/36j/APi6P+FsaD/z6al/36j/APi6XPHuB31FcD/wtjQf+fTUv+/Uf/xdH/C2NB/59NS/79R//F0c8e4Hf0VwH/C2NB/59NS/79R//F0v/C2dB/59NS/79R//ABdHPHuB39FcB/wtnQf+fTU/+/Uf/wAXR/wtnQf+fTUv+/Uf/wAXRzx7gd/RXAf8LZ0H/n01P/v1H/8AF0f8LZ0H/n01P/v1H/8AF0c8e4HoFFcB/wALZ0H/AJ9NT/79R/8AxdH/AAtnQP8An01P/v1H/wDF0c8e4HjG2jbTqK5yRu2jbTqKAG7aNtOooAbto206igBu2jbTqKAG7aNtOooAbto206igBu2jbTqKAG7aNtOooAbto206igBu2jbTqKAG7aNtOooAbto206igBu2jbTqKAG7aNtOooAbto206igBu2jbTqKAG7aNtOooAbto206igBu2jbTqKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==",R0={level:gd,activeElement:xd,markConfig:yd,col1Config:bd,col2Config:Cd,sceneConfig:Fd,bindings:Bd,markLabelConfig:vd,colLabelConfig:Rd,decorations:Sd,layers:Md,activeDataset:Kd,colorMode:wd,colorGradient:Dd,colorTint:Td,thumbnail:Ed},S0=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:Kd,activeElement:xd,bindings:Bd,col1Config:bd,col2Config:Cd,colLabelConfig:Rd,colorGradient:Dd,colorMode:wd,colorTint:Td,decorations:Sd,default:R0,layers:Md,level:gd,markConfig:yd,markLabelConfig:vd,sceneConfig:Fd,thumbnail:Ed},Symbol.toStringTag,{value:"Module"})),Ud=2,Id="mark",jd={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/cigarette.glb",customModelHasMat:!0,customModelName:"cigarette"},kd={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:.5,alignAnchor:"end",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1},Pd={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1},zd={background:"dark",hdriPreset:"city",focalLength:130},Hd={markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:"numerical",c2AlignCount:null,markSizeX:null,markSizeY:"numerical",markSizeZ:null,markScale:null},Od={show:!0,slots:{top:"numerical",bottom:"categorical",left:null,right:null}},Gd={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Ld=[],Nd=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],Jd="garbageInOcean",Qd="distinct",Wd={from:"#EE6655",to:"#4488EE"},Vd=!1,Xd="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCADnAUADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxKiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACitq18L6pcwCSOOMMyhljZ8FgenPQZ54JB4NZd5azWVzJbXMZjmjOGUkHH4jrQNpohooooEFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAddbazbSLMtzNMFL/L1bjk5wRgnrz1x+VY3iO++33cMm8PshCEhcfxMfQevv8AlgDpLHSXW0mAgj84kngfNg8YyPqa5jX7SazvVjnXaxTcBnPG4/4UramkptxsZtFFFMzCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPUrVQJ3OMqxwCuAf05rkPHRLapbsSTm2B5z/ff1rtLdWkOGHHHAOffpXGePY/K1a3UHP+jL2xj5mpsZzdFFFIQV0vhh7SOBRNaQzTST8M7YOABgZ6qOpyPx7VzVb2j6cJxbO0kqK0ZbcpAwdzADn6UMqDs7l3xNFYnTUZbSOC4Uja0UQjBUnocE5PU888fWuUrotcsngjuOJWROCzE4BDAHNc7SQ52voFFFFMgKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA9XsJF3HLMCQck5wOCO/Fcd8QM/21Dlgx+zLyCP7zeldbYJIgJUKfm6dOM+oNcn8QcjWLcHH/HqvQ5/iamxnMUUUUhBXe+G0ZtFsSvP38jJHR2964Ku+8Lljo1ooU4AYZ/4G3saaAm8WBhoF2AOAEJOB/fHHSvO69G8VKP8AhG7tgzcrHwSD/Gvoa85pAFFFFABRV7RtO/tO88gzpAoUszsM46AfqR1wK25fCcC28zJqsfnRrkRFBhuCeWzgdO2frSuUoSexy1FFFMkKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPU9OUOHEoyw67QDz+HNcl8QFC6xBgnBtlIznj5m9a7KzJMTA5AJx15/IiuP+ICbNStgAQPIAGf8AeNNjOXooopCCu68KSqml2wYD+L0/vH/GuFrufCaB9NtucEb+5/vH3poDV8Y4bwzdsGOAE45/vqK8xr0nxSu3wvehs5BQDjH8a+1ebUgCiiigC5pqyu8whkKHy+QByw3LwP0/Kukube/t7RRJdB93zKqwqcjjI6e/T/Gs3waM6jOO/wBnOP8Avpa7m2QqkQlVN4IXHGOvuDQ0XGTR5RRRRQQFFFAGTigAorr08PaEVRvt12wGBJgDOe/GDt9uW+vc87q9lFYXflQXSXMZUMHVSv4EevHqfzyAropwkldlKiiimSFFFFABRRRQAUUUUAFFFFAB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",M0={level:Ud,activeElement:Id,markConfig:jd,col1Config:kd,col2Config:Pd,sceneConfig:zd,bindings:Hd,markLabelConfig:Od,colLabelConfig:Gd,decorations:Ld,layers:Nd,activeDataset:Jd,colorMode:Qd,colorGradient:Wd,colorTint:Vd,thumbnail:Xd},K0=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:Jd,activeElement:Id,bindings:Hd,col1Config:kd,col2Config:Pd,colLabelConfig:Gd,colorGradient:Wd,colorMode:Qd,colorTint:Vd,decorations:Ld,default:M0,layers:Nd,level:Ud,markConfig:jd,markLabelConfig:Od,sceneConfig:zd,thumbnail:Xd},Symbol.toStringTag,{value:"Module"})),w0=Object.assign({"./presets/A. CO2 Objects.json":l0,"./presets/B. Mushrooms Objects.json":u0,"./presets/C. Water Pollution Objects.json":f0,"./presets/C02_Emissions.json":A0,"./presets/CO2.json":h0,"./presets/Garbage in the Ocean.json":x0,"./presets/Mushroom_Danger_Score.json":b0,"./presets/Orchestra.json":F0,"./presets/earth_concept.json":v0,"./presets/flowers.json":S0,"./presets/smoking.json":K0}),Ji=Object.entries(w0).map(([o,e])=>{const t=o.replace(/^.*\//,"").replace(/\.json$/,""),i=t.replace(/_/g," ").replace(/\b\w/g,n=>n.toUpperCase());return{id:`preset_${t}`,name:i,createdAt:"",data:e.default}});function Yd(o=320){const e=document.querySelector("canvas");if(e)try{const t=e.width||o,i=e.height||o,n=Math.min(1,o/t),r=Math.max(1,Math.round(t*n)),s=Math.max(1,Math.round(i*n)),a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");return l?(l.drawImage(e,0,0,r,s),a.toDataURL("image/jpeg",.72)):void 0}catch{return}}function D0(o,e){const t={...e,thumbnail:Yd()??e.thumbnail},i=JSON.stringify(t,null,2),n=new Blob([i],{type:"application/json"}),r=URL.createObjectURL(n),s=document.createElement("a");s.href=r,s.download=o.trim().replace(/\s+/g,"_")+".json",s.click(),URL.revokeObjectURL(r)}const Tt={padding:"8px 16px",borderRadius:"8px",fontSize:"13px",fontWeight:"500",cursor:"pointer",fontFamily:"inherit",border:"none",transition:"opacity 0.1s"};function Zd({onClose:o,children:e}){return c.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999},onClick:o,children:c.jsx("div",{style:{background:"#fff",borderRadius:"14px",width:"340px",maxWidth:"90vw",boxShadow:"0 16px 48px rgba(0,0,0,0.28)",overflow:"hidden",fontFamily:"inherit"},onClick:t=>t.stopPropagation(),children:e})})}function T0({initialName:o,onSave:e,onClose:t}){const[i,n]=F.useState(o);function r(){const s=i.trim();s&&e(s)}return c.jsx(Zd,{onClose:t,children:c.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"14px"},children:[c.jsx("div",{style:{fontSize:"15px",fontWeight:"700",color:"#1D1D1F"},children:"Save Scene"}),c.jsx("input",{type:"text",value:i,onChange:s=>n(s.target.value),onKeyDown:s=>{s.key==="Enter"&&r(),s.key==="Escape"&&t()},placeholder:"Scene name…",autoFocus:!0,style:{background:"#F2F2F7",border:"1.5px solid #D1D1D6",borderRadius:"8px",padding:"9px 12px",fontSize:"13px",color:"#1D1D1F",outline:"none",fontFamily:"inherit",width:"100%",boxSizing:"border-box"}}),c.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[c.jsx("button",{onClick:t,style:{...Tt,background:"#F2F2F7",color:"#6C6C70"},children:"Cancel"}),c.jsx("button",{onClick:r,disabled:!i.trim(),style:{...Tt,background:"#007AFF",color:"#fff",opacity:i.trim()?1:.4},children:"Save"})]})]})})}function E0({children:o}){return c.jsx("div",{style:{padding:"8px 20px 4px",fontSize:"10px",fontWeight:"700",letterSpacing:"0.08em",textTransform:"uppercase",color:"#AEAEB2"},children:o})}function U0({onLoad:o,onClose:e,currentName:t,currentData:i}){const[n,r]=F.useState(null),[s,a]=F.useState(null),[l,d]=F.useState("");function p(f,m){let y;try{y=JSON.parse(f)}catch{d("That is not valid JSON.");return}const h=C=>C&&typeof C=="object"?C:null,x=C=>!!C&&("markConfig"in C||"col1Config"in C||"sceneConfig"in C),g=h(y),A=h(g==null?void 0:g.data),b=x(g)?g:x(A)?A:null;if(!b){d("This JSON doesn’t look like a saved scene.");return}o({id:"import",name:m,createdAt:"",data:b})}function u(f,m){var h;const y=(h=f.data)==null?void 0:h.thumbnail;return c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"11px",padding:"10px 20px",cursor:"pointer",background:n===f.id?"#F8F8FA":"transparent",borderBottom:m?"none":"1px solid #F2F2F7",transition:"background 0.08s"},onClick:()=>o(f),onMouseEnter:()=>r(f.id),onMouseLeave:()=>r(null),children:[c.jsx("div",{style:{width:"62px",height:"44px",flexShrink:0,borderRadius:"6px",overflow:"hidden",background:"#F2F2F7",border:"1px solid #E5E5EA",display:"flex",alignItems:"center",justifyContent:"center"},children:y?c.jsx("img",{src:y,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):c.jsx("span",{style:{fontSize:"15px",color:"#C7C7CC"},children:"▦"})}),c.jsxs("div",{style:{flex:1,minWidth:0},children:[c.jsx("div",{style:{fontSize:"13px",fontWeight:"600",color:"#1D1D1F",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:f.name}),f.createdAt&&c.jsx("div",{style:{fontSize:"10px",color:"#8E8E93",marginTop:"2px"},children:new Date(f.createdAt).toLocaleString()})]})]},f.id)}return c.jsx(Zd,{onClose:e,children:c.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[c.jsx("div",{style:{padding:"16px 20px",borderBottom:"1px solid #E5E5EA",fontSize:"15px",fontWeight:"700",color:"#1D1D1F"},children:"Load Scene"}),s===null?c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{maxHeight:"380px",overflowY:"auto"},children:Ji.length>0?c.jsxs(c.Fragment,{children:[c.jsx(E0,{children:"Presets"}),Ji.map((f,m)=>u(f,m===Ji.length-1))]}):c.jsx("div",{style:{padding:"36px 20px",textAlign:"center",color:"#8E8E93",fontSize:"13px"},children:"No scenes yet"})}),c.jsxs("div",{style:{padding:"12px 20px",borderTop:"1px solid #E5E5EA",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px"},children:[c.jsxs("div",{style:{display:"flex",gap:"8px"},children:[c.jsx("button",{onClick:()=>D0(t,i),title:"Export current scene as JSON",style:{...Tt,background:"#F2F2F7",color:"#007AFF",padding:"7px 12px"},children:"Export"}),c.jsx("button",{onClick:()=>{d(""),a("")},title:"Load a scene from JSON (paste or file) — e.g. a session from Supabase",style:{...Tt,background:"#F2F2F7",color:"#007AFF",padding:"7px 12px"},children:"Import"})]}),c.jsx("button",{onClick:e,style:{...Tt,background:"#F2F2F7",color:"#6C6C70"},children:"Close"})]})]}):c.jsxs("div",{style:{padding:"16px 20px",display:"flex",flexDirection:"column",gap:"10px"},children:[c.jsx("div",{style:{fontSize:"12px",color:"#6C6C70",lineHeight:1.4},children:"Paste a session’s JSON."}),c.jsx("textarea",{value:s,onChange:f=>{a(f.target.value),d("")},placeholder:'{ "level": 2, "markConfig": { … }, … }',spellCheck:!1,style:{width:"100%",height:"150px",resize:"vertical",boxSizing:"border-box",border:"1px solid #D1D1D6",borderRadius:"8px",padding:"8px",fontSize:"11px",fontFamily:"monospace",color:"#1D1D1F",outline:"none"}}),l&&c.jsx("div",{style:{fontSize:"11px",color:"#FF3B30"},children:l}),c.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px"},children:[c.jsx("button",{onClick:()=>{a(null),d("")},style:{...Tt,background:"#F2F2F7",color:"#6C6C70"},children:"Cancel"}),c.jsx("button",{onClick:()=>p(s,"Imported"),disabled:!s.trim(),style:{...Tt,background:s.trim()?"#007AFF":"#C7C7CC",color:"#fff",cursor:s.trim()?"pointer":"default"},children:"Load"})]})]})]})})}const qd="phys_tool_saves";function I0(){try{return JSON.parse(localStorage.getItem(qd)??"[]")}catch{return[]}}function ha(o){localStorage.setItem(qd,JSON.stringify(o))}const j0={VITE_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJycmljbnNocGJkYnd1dm16anpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUxNjE2NjIsImV4cCI6MjEwMDczNzY2Mn0.tB7M_DxnNc1wUJPByjrPMZj7DheCJylAHULZ9JTvWeg",VITE_SUPABASE_URL:"https://brricnshpbdbwuvmzjzc.supabase.co"},Hs=j0,_d=Hs.VITE_SUPABASE_URL,As=Hs.VITE_SUPABASE_ANON_KEY,k0=Hs.VITE_STUDY_TABLE||"study_sessions";function $d(){return!_d.includes("YOUR-PROJECT")&&!As.includes("YOUR-ANON")}function P0(){const o=new URLSearchParams(window.location.search),e=o.get("pid")||o.get("p");if(e){try{localStorage.setItem("study_pid",e)}catch{}return e}let t=null;try{t=localStorage.getItem("study_pid")}catch{}if(!t){t="P-"+Math.random().toString(36).slice(2,8);try{localStorage.setItem("study_pid",t)}catch{}}return t}function Qi(o,e){const t=new Date().toISOString().replace(/[:.]/g,"-"),i={participant:o,savedAt:new Date().toISOString(),data:e},n=new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),r=URL.createObjectURL(n),s=document.createElement("a");s.href=r,s.download=`phys-study-${o||"anon"}-${t}.json`,document.body.appendChild(s),s.click(),s.remove(),URL.revokeObjectURL(r)}async function z0(o,e,t=""){if($d())try{const i=await fetch(`${_d.replace(/\/+$/,"")}/rest/v1/${k0}`,{method:"POST",headers:{"Content-Type":"application/json",apikey:As,Authorization:`Bearer ${As}`,Prefer:"return=minimal"},body:JSON.stringify({participant:o,label:t,data:e})});if(i.ok)return{ok:!0};const n=await i.text().catch(()=>"");return Qi(o,e),{ok:!1,downloaded:!0,error:`HTTP ${i.status} ${n}`.trim()}}catch(i){return Qi(o,e),{ok:!1,downloaded:!0,error:i.message}}return Qi(o,e),{ok:!1,downloaded:!0,error:"Study backend not configured."}}const H0="/phys_tool/assets/references/";function O0(o){return/^(https?:)?\/\//.test(o)||o.startsWith("/")?o:H0+o}const At={garbageInOcean:{label:"Garbage in the Ocean",categoricalCol:"Garbage Type",numericalCol:"Weight",layers:[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}]},mahler:{label:"Mahler's Symphony No. 8 Orchestra",categoricalCol:"Orchestra Section",numericalCol:"Number of Instruments",modelCollection:"malhers orchestra",layers:[{id:"1",name:"Strings",percentage:80,color:"#C8A882"},{id:"2",name:"Brass",percentage:28,color:"#D4A017"},{id:"3",name:"Woodwinds",percentage:20,color:"#4A7C59"},{id:"4",name:"Percussion",percentage:10,color:"#5C6B7A"},{id:"5",name:"Piano & Harp",percentage:4,color:"#8B7BAB"}],reference:{title:"Mahler's Symphony No. 8 Orchestra",image:"malher.png",link:"https://www.mahlerfoundation.org/mahler/compositions/symphony-no-8/symphony-no-8-orchestration/"}},co2Emissions:{label:"CO₂ Emissions by Country",categoricalCol:"Country",numericalCol:"CO₂ Emissions (Mt)",modelCollection:"CO2",layers:[{id:"1",name:"Germany",percentage:572.32,color:"#E63946"},{id:"2",name:"Canada",percentage:533.34,color:"#F4A261"},{id:"3",name:"Turkey",percentage:513.03,color:"#E9C46A"},{id:"4",name:"Brazil",percentage:483.01,color:"#2A9D8F"},{id:"5",name:"South Africa",percentage:439.83,color:"#264653"},{id:"6",name:"Australia",percentage:386.73,color:"#E76F51"},{id:"7",name:"Vietnam",percentage:370.93,color:"#8AB17D"},{id:"8",name:"United Kingdom",percentage:312.91,color:"#457B9D"},{id:"9",name:"France",percentage:264.16,color:"#6A4C93"},{id:"10",name:"Qatar",percentage:125.81,color:"#B5838D"},{id:"11",name:"Greece",percentage:53.36,color:"#1D3557"},{id:"12",name:"Denmark",percentage:24.4,color:"#A8DADC"}],reference:{title:"Annual CO₂ emissions 2024",image:"co2-emissions.png",link:"https://ourworldindata.org/grapher/annual-co2-emissions-per-country?country=~OWID_WRL&tab=map&time=latest"}},mushroomToxicity:{label:"Mushroom danger score",categoricalCol:"Name",numericalCol:"Danger Score",modelCollection:"mushrooms",layers:[{id:"1",name:"Death cap (Amanita phalloides)",percentage:10,color:"#7C8C4E"},{id:"2",name:"Destroying angel (Amanita virosa)",percentage:10,color:"#F0ECE0"},{id:"3",name:"Funeral bell (Galerina marginata)",percentage:9,color:"#6B4E31"},{id:"4",name:"Deadly webcap (Cortinarius rubellus)",percentage:8,color:"#A0522D"},{id:"5",name:"False morel (Gyromitra esculenta)",percentage:6,color:"#8B4A2F"},{id:"6",name:"Panther cap (Amanita pantherina)",percentage:5,color:"#C2A878"},{id:"7",name:"Fly agaric (Amanita muscaria)",percentage:3,color:"#D62828"},{id:"8",name:"Satan's bolete (Rubroboletus satanas)",percentage:4,color:"#C77B7B"},{id:"9",name:"Jack-o'-lantern (Omphalotus olearius)",percentage:4,color:"#E68A00"},{id:"10",name:"Ivory funnel (Clitocybe dealbata)",percentage:7,color:"#E4DAC4"},{id:"11",name:"Fool's funnel (Clitocybe rivulosa)",percentage:7,color:"#CFC8B8"},{id:"12",name:"The sickener (Russula emetica)",percentage:2,color:"#E0455E"}],reference:{title:"Mushroom Danger Score",image:"mushroom-danger.png",link:"https://namyco.org/interests/toxicology/mushroom-poisoning-syndromes/"}},oceanPlastic:{label:"Surface Plastic Mass across the world's Oceans",categoricalCol:"Ocean",numericalCol:"Plastic Pieces (billions)",modelCollection:"sea pollution",layers:[{id:"1",name:"North Pacific",percentage:1990,color:"#023E8A"},{id:"2",name:"Indian Ocean",percentage:1300,color:"#0077B6"},{id:"3",name:"North Atlantic",percentage:930,color:"#0096C7"},{id:"4",name:"South Pacific",percentage:491,color:"#00B4D8"},{id:"5",name:"Mediterranean Sea",percentage:247,color:"#48CAE4"},{id:"6",name:"South Atlantic",percentage:297,color:"#90E0EF"}],reference:{title:"Surface Plastic Mass across the world's Oceans",image:"plastic-oceans.png",link:"https://ourworldindata.org/grapher/surface-plastic-mass-by-ocean"}},nantesHousing:{label:"Nantes Metropolitan Area Housing",categoricalCol:"Tenure Type",numericalCol:"Share (%)",modelCollection:"nantes logements",layers:[{id:"1",name:"Homeowners",percentage:52.2,color:"#E76F51"},{id:"2",name:"Private-sector tenants",percentage:28,color:"#2A9D8F"},{id:"3",name:"Social housing tenants (SRU law)",percentage:17.5,color:"#457B9D"}],reference:{title:"Nantes Metropolitan Area — 298,700 housing units",image:"nantes-housing.png",link:"http://rokovoko.fr/realisations/la-cantine"}}};function G0({src:o,alt:e}){const[t,i]=F.useState(!0);return F.useEffect(()=>{i(!0)},[o]),t?c.jsx("img",{src:o,alt:e,onError:()=>i(!1),style:{width:"100%",borderRadius:"8px",display:"block",background:"#F2F2F7",border:"1px solid #E5E5EA"}}):null}function L0({datasetKey:o}){var t;const e=(t=At[o])==null?void 0:t.reference;return e?c.jsxs("div",{style:{borderTop:"1px solid #E5E5EA",padding:"14px",flexShrink:0,maxHeight:"46%",overflowY:"auto",display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600"},children:"About this dataset"}),c.jsx("div",{style:{fontSize:"13px",fontWeight:"600",color:"#1D1D1F",lineHeight:1.3},children:e.title}),e.image&&c.jsx(G0,{src:O0(e.image),alt:e.title}),e.link&&c.jsxs("a",{href:e.link,target:"_blank",rel:"noreferrer",style:{fontSize:"11px",color:"#007AFF",textDecoration:"none",wordBreak:"break-all",lineHeight:1.5},children:[e.link," ↗"]})]}):null}function N0({label:o,type:e,varName:t}){const i=`phys-var/${e}`;return c.jsxs("div",{draggable:!0,onDragStart:n=>{n.dataTransfer.setData("phys-var/name",t),n.dataTransfer.setData(i,"1"),n.dataTransfer.effectAllowed="copy"},title:`Drag to bind ${o}`,style:{display:"inline-flex",alignItems:"center",gap:"5px",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"6px 11px",fontSize:"12.5px",color:"#1D1D1F",fontWeight:"600",cursor:"grab",userSelect:"none",whiteSpace:"nowrap"},children:[c.jsx("span",{style:{fontSize:"10px",color:"#8E8E93",fontWeight:"700"},children:e==="numerical"?"#":"Aa"}),o]})}function J0(o){var e;return((e=At[o])==null?void 0:e.modelCollection)??ko}function Q0({layers:o,onChange:e,onDatasetChange:t,selectedDataset:i="garbageInOcean",modelCollection:n=ko,onModelCollectionChange:r}){const s=At[i]??At.garbageInOcean,a=F.useMemo(()=>{var M;const v=((M=At[i])==null?void 0:M.layers)??[],S=o.filter(D=>!v.some(w=>w.id===D.id));return v.length?[...v,...S]:o},[i,o]),l=a.length,d=F.useMemo(()=>new Set(o.map(v=>v.id)),[o]),p=F.useRef(null),[u,f]=F.useState(null),[m,y]=F.useState(null),h=v=>{v.size!==0&&e(a.filter(S=>v.has(S.id)))};function x(v){e(At[v].layers),t==null||t(v),r==null||r(At[v].modelCollection??ko)}const g=v=>h(new Set(a.slice(0,v).map(S=>S.id))),A=(v,S)=>{var K;const M=Math.min(v,S),D=Math.max(v,S),w=new Set;return(K=p.current)==null||K.querySelectorAll("[data-rowid]").forEach(I=>{const T=I.getBoundingClientRect();T.bottom>=M&&T.top<=D&&w.add(I.dataset.rowid)}),w},b=v=>{const S=v.clientY;let M=!1;f(A(S,S));const D=K=>{Math.abs(K.clientY-S)>4&&(M=!0),f(A(S,K.clientY));const I=p.current;if(I){const T=I.getBoundingClientRect();y({top:Math.min(S,K.clientY)-T.top,height:Math.abs(K.clientY-S)})}},w=K=>{if(window.removeEventListener("mousemove",D),window.removeEventListener("mouseup",w),M)h(A(S,K.clientY));else{const I=new Set(d);A(K.clientY,K.clientY).forEach(T=>I.has(T)?I.delete(T):I.add(T)),h(I)}f(null),y(null)};window.addEventListener("mousemove",D),window.addEventListener("mouseup",w),v.preventDefault()},C=u??d,B={padding:"6px 8px",verticalAlign:"middle",fontSize:"12px",color:"#1D1D1F"},R={fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600"};return c.jsxs("div",{style:{padding:"14px 14px 16px",display:"flex",flexDirection:"column",gap:"12px"},children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[c.jsx("span",{style:R,children:"Dataset"}),c.jsx("select",{value:i,onChange:v=>x(v.target.value),style:{background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",fontFamily:"inherit",cursor:"pointer",outline:"none",width:"100%"},children:Object.entries(At).map(([v,S])=>c.jsx("option",{value:v,children:S.label},v))})]}),li.length>1&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[c.jsx("span",{style:R,children:"Models"}),c.jsx("select",{value:li.includes(n)?n:ko,onChange:v=>r==null?void 0:r(v.target.value),style:{background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",fontFamily:"inherit",cursor:"pointer",outline:"none",width:"100%"},children:li.map(v=>c.jsx("option",{value:v,children:cp(v)},v))})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},children:[c.jsx("span",{style:R,children:"Rows used"}),c.jsxs("span",{style:{fontSize:"12px",color:"#6C6C70",fontWeight:"600"},children:[d.size," / ",l]})]}),c.jsx("input",{type:"range",min:1,max:Math.max(1,l),value:Math.min(d.size||1,l),onChange:v=>g(Number(v.target.value)),style:{width:"100%",accentColor:"#007AFF",cursor:"pointer"}})]}),c.jsxs("div",{ref:p,onMouseDown:b,style:{position:"relative",userSelect:"none",cursor:"crosshair"},children:[m&&c.jsx("div",{style:{position:"absolute",left:0,right:0,top:m.top,height:m.height,background:"rgba(0,122,255,0.12)",border:"1px solid rgba(0,122,255,0.5)",borderRadius:"4px",pointerEvents:"none",zIndex:2}}),c.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[c.jsx("thead",{children:c.jsxs("tr",{style:{borderBottom:"1px solid #E5E5EA"},children:[c.jsx("th",{style:{...B,textAlign:"left",color:"#8E8E93",fontWeight:"500",fontSize:"11px"},children:s.categoricalCol}),c.jsx("th",{style:{...B,textAlign:"right",color:"#8E8E93",fontWeight:"500",fontSize:"11px",width:"60px"},children:s.numericalCol})]})}),c.jsx("tbody",{children:a.map((v,S)=>{const M=C.has(v.id);return c.jsxs("tr",{"data-rowid":v.id,style:{borderBottom:"1px solid #F2F2F7",background:S%2===0?"transparent":"#FAFAFA",opacity:M?1:.32,transition:"opacity 0.1s"},children:[c.jsx("td",{style:B,children:v.name}),c.jsx("td",{style:{...B,textAlign:"right",color:"#6C6C70"},children:v.percentage})]},v.id)})})]})]})]})}const Wi=110,ga=46;function xa(o,e,t,i){return Array.from({length:o},(n,r)=>{const a=(o===1?e:e-t/2+t/(o-1)*r)*Math.PI/180;return{x:Math.cos(a)*i,y:Math.sin(a)*i}})}const ya={position:"fixed",background:"#fff",borderRadius:"14px",boxShadow:"0 6px 28px rgba(0,0,0,0.22)",padding:"12px 14px",zIndex:1002,pointerEvents:"all",minWidth:"150px"},Vi={display:"flex",alignItems:"center",gap:"8px",width:"100%",textAlign:"left",background:"#F2F2F7",border:"1px solid #E5E5EA",borderRadius:"8px",padding:"8px 12px",fontSize:"12px",fontWeight:"500",color:"#1D1D1F",cursor:"pointer",fontFamily:"inherit",transition:"background 0.12s"};function ba({children:o}){return c.jsx("div",{style:{fontSize:"10px",color:"#AEAEB2",fontWeight:"700",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"8px"},children:o})}function W0({x:o,y:e,varName:t,varType:i,level:n,col1Arrangement:r,onBind:s,onColorBind:a,onBindLabel:l,onClose:d}){const[p,u]=F.useState("radial"),[f,m]=F.useState("mark");F.useEffect(()=>{function S(M){M.key==="Escape"&&(p!=="radial"?u("radial"):d())}return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[p,d]);const y=[{action:"bind",bindKey:"markColor",label:"Color",icon:"●",section:"mark",varTypes:["numerical","categorical"]},{action:"bind",bindKey:"markGeometry",label:"Geometry",icon:"◆",section:"mark",varTypes:["categorical"]},{action:"bind",bindKey:"markSizeX",label:"Width",icon:"↔",section:"mark",varTypes:["numerical"]},{action:"bind",bindKey:"markSizeY",label:"Height",icon:"↕",section:"mark",varTypes:["numerical"]},{action:"bind",bindKey:"markSizeZ",label:"Depth",icon:"⊙",section:"mark",varTypes:["numerical"]},{action:"bind",bindKey:"markScale",label:"Scale",icon:"⤢",section:"mark",varTypes:["numerical"]},{action:"label",label:"Label",icon:"Aa",section:"mark",varTypes:["numerical","categorical"]},{action:"bind",bindKey:"scatterSize",label:"Scatter - Size",icon:"⊞",section:"collection",varTypes:["numerical"],arrangements:["scattering"],minLevel:2},{action:"bind",bindKey:"scatterCount",label:"Population",icon:"#",section:"collection",varTypes:["numerical"],arrangements:["scattering","stacking","adjacent"],minLevel:2},{action:"label",label:"Label",icon:"Aa",section:"collection",varTypes:["numerical","categorical"],minLevel:3}];function h(S){var M;return!(!S.varTypes.includes(i)||S.minLevel!==void 0&&n<S.minLevel||"arrangements"in S&&S.arrangements!==void 0&&!S.arrangements.includes(r)||"excludeArrangements"in S&&((M=S.excludeArrangements)!=null&&M.includes(r)))}const x=y.filter(S=>S.section==="mark"&&h(S)),g=y.filter(S=>S.section==="collection"&&h(S)),A=x.length>3?150:90,b=xa(x.length,180,A,Wi),C=xa(g.length,0,70,Wi),B=[...x.map((S,M)=>({opt:S,pos:b[M]})),...g.map((S,M)=>({opt:S,pos:C[M]}))];function R(S){if(S.action==="bind"&&S.bindKey==="markColor"){m("mark"),u("colorMode");return}if(S.action==="label"){m(S.section),u("labelPos");return}S.action==="bind"&&s(S.bindKey,t),d()}const v=g.length>0;if(p==="colorMode")return c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3},onClick:()=>u("radial")}),c.jsxs("div",{style:{...ya,left:o-75,top:e-70},children:[c.jsx(ba,{children:"Color mode"}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[c.jsxs("button",{style:Vi,onClick:()=>{a(t,"distinct"),d()},onMouseEnter:S=>S.currentTarget.style.background="#E5E5EA",onMouseLeave:S=>S.currentTarget.style.background="#F2F2F7",children:[c.jsx("span",{style:{fontSize:"14px"},children:"◈"})," Distinct"]}),c.jsxs("button",{style:Vi,onClick:()=>{a(t,"continuous"),d()},onMouseEnter:S=>S.currentTarget.style.background="#E5E5EA",onMouseLeave:S=>S.currentTarget.style.background="#F2F2F7",children:[c.jsx("span",{style:{fontSize:"14px"},children:"▬"})," Continuous"]})]})]})]});if(p==="labelPos"){const S={...Vi,justifyContent:"center",width:"88px",height:"34px",padding:"0 8px",whiteSpace:"nowrap",flexShrink:0},M=(K,I,T)=>c.jsxs("button",{style:S,onClick:()=>{l(f,t,K),d()},onMouseEnter:k=>k.currentTarget.style.background="#E5E5EA",onMouseLeave:k=>k.currentTarget.style.background="#F2F2F7",children:[I," ",T]},K),D=f==="mark"&&r==="scattering",w=f==="mark"&&r==="surface";return c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3},onClick:()=>u("radial")}),c.jsxs("div",{style:{...ya,left:o-100,top:e-110},children:[c.jsx(ba,{children:"Label position"}),c.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:w?M("top","↑","Above"):D?c.jsxs(c.Fragment,{children:[M("top","↑","Top"),M("bottom","↓","Below")]}):c.jsxs(c.Fragment,{children:[M("top","↑","Top"),c.jsxs("div",{style:{display:"flex",gap:"4px"},children:[M("left","←","Left"),M("right","→","Right")]}),M("bottom","↓","Bottom")]})})]})]})}return c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3},onClick:d}),c.jsxs("div",{style:{position:"fixed",left:o,top:e,transform:"translate(-50%, -50%)",width:0,height:0,zIndex:1001,pointerEvents:"none"},children:[v&&c.jsx("div",{style:{position:"absolute",left:0,top:-130,width:"1px",height:(Wi+20)*2,background:"#E5E5EA",transform:"translateX(-50%)"}}),c.jsx("div",{style:{position:"absolute",left:-8,top:-10,fontSize:"9px",fontWeight:"700",letterSpacing:"0.12em",textTransform:"uppercase",color:"#007AFF",whiteSpace:"nowrap",textAlign:"right",transform:"translateX(-100%)"},children:"Mark"}),v&&c.jsx("div",{style:{position:"absolute",left:8,top:-10,fontSize:"9px",fontWeight:"700",letterSpacing:"0.12em",textTransform:"uppercase",color:"#5E5CE6",whiteSpace:"nowrap"},children:"Collection"}),c.jsx("div",{style:{position:"absolute",width:10,height:10,background:"#1D1D1F",borderRadius:"50%",transform:"translate(-50%, -50%)"}}),B.map(({opt:S,pos:M},D)=>{const w=S.section==="collection",K=w?"#5E5CE6":"#007AFF";return c.jsxs("button",{onClick:()=>R(S),style:{position:"absolute",left:M.x,top:M.y,transform:"translate(-50%, -50%)",width:ga,height:ga,background:"#fff",border:`2px solid ${K}`,borderRadius:"50%",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1px",boxShadow:"0 4px 16px rgba(0,0,0,0.16)",pointerEvents:"all",fontFamily:"inherit"},onMouseEnter:I=>{const T=I.currentTarget;T.style.transform="translate(-50%, -50%) scale(1.13)",T.style.boxShadow="0 6px 20px rgba(0,0,0,0.22)",T.style.background=w?"#F3EBFF":"#EBF3FF"},onMouseLeave:I=>{const T=I.currentTarget;T.style.transform="translate(-50%, -50%)",T.style.boxShadow="0 4px 16px rgba(0,0,0,0.16)",T.style.background="#fff"},children:[c.jsx("span",{style:{fontSize:"14px",color:K,lineHeight:1},children:S.icon}),c.jsx("span",{style:{fontSize:"8px",color:"#6C6C70",fontWeight:"600",lineHeight:1.2,textAlign:"center"},children:S.label})]},D)})]})]})}const V0={markColor:"Color",markGeometry:"Geometry",scatterSize:"Scatter - Size",scatterCount:"Population",c1AlignCount:"Count",c2AlignCount:"Count",markSizeX:"Width",markSizeY:"Height",markSizeZ:"Depth",markScale:"Scale"},X0=new Set(["markScale","markSizeX","markSizeY","markSizeZ","scatterSize","scatterCount"]);function Y0({value:o,disabled:e,onCommit:t}){const[i,n]=F.useState(String(o)),[r,s]=F.useState(!1),a=F.useRef(null);return F.useEffect(()=>{r||n(String(o))},[o,r]),F.useEffect(()=>{var l,d;r&&((l=a.current)==null||l.focus(),(d=a.current)==null||d.select())},[r]),!r&&o===1?c.jsx("button",{onClick:l=>{l.stopPropagation(),s(!0)},title:"Set a multiplier ( ƒ2 = ×2, ƒ0.5 = ÷2 )",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"16px",height:"16px",borderRadius:"50%",flexShrink:0,background:"none",border:"none",cursor:"pointer",padding:0,color:e?"#CFCFD6":"#AEC8F2",fontSize:"14px",fontWeight:"700",fontStyle:"italic",lineHeight:1,fontFamily:"inherit"},onMouseEnter:l=>{e||(l.currentTarget.style.color="#4A90E2",l.currentTarget.style.background="#DCEBFF")},onMouseLeave:l=>{l.currentTarget.style.color=e?"#CFCFD6":"#AEC8F2",l.currentTarget.style.background="none"},children:"ƒ"}):c.jsxs("span",{onClick:l=>l.stopPropagation(),title:"Multiplier ( ƒ2 = ×2, ƒ0.5 = ÷2 )",style:{display:"inline-flex",alignItems:"center",gap:"2px",background:e?"#E7E7EC":"#FFFFFF",border:`1px solid ${e?"#D8D8DE":"#C4DBFF"}`,borderRadius:"999px",padding:"1px 7px 1px 7px"},children:[c.jsx("span",{style:{color:e?"#B4B4BC":"#7FAEF0",fontWeight:"700",fontStyle:"italic",fontSize:"13px",lineHeight:1},children:"ƒ"}),c.jsx("input",{ref:a,type:"text",inputMode:"decimal",value:i,onFocus:l=>{s(!0),l.currentTarget.select()},onChange:l=>{const d=l.target.value;n(d);const p=Number(d);d.trim()!==""&&Number.isFinite(p)&&p>0&&t(p)},onBlur:()=>{s(!1);const l=Number(i),d=i.trim()!==""&&Number.isFinite(l)&&l>0?l:o;n(String(d)),d!==o&&t(d)},style:{width:"24px",border:"none",background:"transparent",color:e?"#AEAEB2":"#0A66DA",fontSize:"12px",fontWeight:"700",textAlign:"center",padding:"0",fontFamily:"inherit",outline:"none"}})]})}const Ca={markColor:"",markGeometry:"",markSizeX:"",markSizeY:"",markSizeZ:"",markScale:"",scatterSize:"",scatterCount:"",c1AlignCount:"Lv2",c2AlignCount:"Lv3"},Fa={garbageInOcean:{numerical:"Weight",categorical:"Garbage Type"},mahler:{numerical:"Number of Instruments",categorical:"Orchestra Section"},co2Emissions:{numerical:"CO₂ Emissions (Mt)",categorical:"Country"},mushroomToxicity:{numerical:"Danger Score",categorical:"Name"},oceanPlastic:{numerical:"Plastic Pieces (billions)",categorical:"Ocean"},nantesHousing:{numerical:"Share (%)",categorical:"Tenure Type"}},Z0={garbageInOcean:"Garbage in the Ocean",mahler:"Mahler's Symphony No. 8 Orchestra",co2Emissions:"CO₂ Emissions by Country",mushroomToxicity:"Mushroom danger score",oceanPlastic:"Surface Plastic Mass across the world's Oceans",nantesHousing:"Nantes Metropolitan Area Housing"},Ba=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],va={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},Ra={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},Sa={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Ma={background:"dark",hdriPreset:"city",focalLength:130},Tn={show:!1,slots:{top:[],bottom:[],left:[],right:[]}};function q0(){const[o,e]=F.useState(1),[t,i]=F.useState("mark"),[n,r]=F.useState(Ba),[s,a]=F.useState(va),[l,d]=F.useState(Ra),[p,u]=F.useState(Sa),[f,m]=F.useState(Ma),[y,h]=F.useState("garbageInOcean"),[x,g]=F.useState(ko),A=Fa[y]??Fa.garbageInOcean,b=[{label:A.numerical,type:"numerical",varName:"numerical"},{label:A.categorical,type:"categorical",varName:"categorical"}],[C,B]=F.useState({markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null,markScale:null}),[R,v]=F.useState({}),[S,M]=F.useState({}),[D,w]=F.useState(Tn),[K,I]=F.useState(Tn),[T,k]=F.useState("distinct"),[j,E]=F.useState({from:"#EE6655",to:"#4488EE"}),[P,z]=F.useState(!1),[L,O]=F.useState(void 0),[Q,J]=F.useState(0),[V,N]=F.useState([]),[te,ue]=F.useState(null),[le,oe]=F.useState(!1),[at,Ao]=F.useState(null),[mo,Os]=F.useState(null),[et,ni]=F.useState(null),[Gs,St]=F.useState("none"),[He,ii]=F.useState("idle"),[Ht,Ls]=F.useState(!1),[lt,Ns]=F.useState(0),Yo=F.useRef(null);function Zo(H,G){B(W=>{const ee={...W,[H]:G};return G!==null&&(H==="markSizeX"||H==="markSizeY"||H==="markSizeZ")&&(H!=="markSizeX"&&(ee.markSizeX=null),H!=="markSizeY"&&(ee.markSizeY=null),H!=="markSizeZ"&&(ee.markSizeZ=null)),ee}),v(W=>{if(!(H in W))return W;const ee={...W};return delete ee[H],ee}),G===null&&M(W=>{if(!(H in W))return W;const ee={...W};return delete ee[H],ee}),H==="markGeometry"&&G!==null&&(i("mark"),O("Geometry")),H==="markGeometry"&&G===null&&a(W=>({...W,categoryShapes:void 0})),G!==null&&d(W=>({...W,alignCount:n.length})),H==="scatterSize"&&G!==null&&u(W=>({...W,alignCount:n.length}))}const Js=F.useMemo(()=>{const H={...C};return Object.keys(H).forEach(G=>{R[G]&&(H[G]=null)}),H},[C,R]);function ef(H){C[H]!==null&&v(G=>({...G,[H]:!G[H]}))}function tf(H,G){M(W=>({...W,[H]:G}))}function of(H,G){k(G),Zo("markColor",H),G==="continuous"&&(i("mark"),O("Material"))}function nf(H,G,W){const ee=Oe=>{const Re=Oe.slots[W];return Re.includes(G)?Oe:{...Oe,show:!0,slots:{...Oe.slots,[W]:[...Re,G]}}};H==="mark"?w(ee):I(ee)}function sf(){const H=`dec_${Date.now()}`,G={id:H,shape:"sphere",material:"plastic",color:"#888888",position:{x:0,y:-1.5,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}};N(W=>[...W,G]),ue(H)}function rf(H){N(G=>G.filter(W=>W.id!==H)),ue(G=>G===H?null:G)}function Qs(H){N(G=>G.map(W=>W.id===H.id?H:W))}function af(H,G){N(W=>W.map(ee=>ee.id===H?{...ee,name:G}:ee))}function si(){return{level:o,activeElement:t,markConfig:s,col1Config:l,col2Config:p,sceneConfig:f,bindings:C,bindingDisabled:R,bindingScale:S,markLabelConfig:D,colLabelConfig:K,decorations:V,layers:n,activeDataset:y,activeModelCollection:x,colorMode:T,colorGradient:j,colorTint:P}}async function lf(){if(He==="saving")return;ii("saving");const H=P0(),G=et??(y||""),W=await z0(H,si(),G),ee=W.ok?"sent":W.downloaded?"downloaded":"error";ii(ee),W.ok||console.warn("[study] submit fell back:",W.error),setTimeout(()=>ii("idle"),3500)}function Ws(H){const G=I0(),W={...si(),thumbnail:Yd()};if(mo){const Re=G.findIndex(q=>q.id===mo);if(Re>=0){G[Re]={...G[Re],name:H,data:W},ha(G),ni(H),St("none");return}}const ee=`save_${Date.now()}`,Oe={id:ee,name:H,createdAt:new Date().toISOString(),data:W};ha([...G,Oe]),Os(ee),ni(H),St("none")}function cf(){mo&&et?Ws(et):St("save")}function uf(H){const G=H.data;G.level!=null&&e(G.level),G.activeElement!=null&&i(G.activeElement);const W=ci(G.markConfig??va);if(W.categoryShapes){const $={};for(const[ct,ho]of Object.entries(W.categoryShapes))$[ct]=ci(ho);a({...W,categoryShapes:$})}else a(W);const ee=(G.decorations??[]).map($=>ci($)),Oe=new Set,Re=$=>{if(!$||$.object)return $;const ct=$.surfaceTargetId||$.scatterExclusionId;if(!ct)return $;const ho=ee.find(pf=>pf.id===ct);return ho?(Oe.add(ho.id),{...$,object:ho,scatterExcludeObject:!!$.scatterExclusionId,surfaceTargetId:null,scatterExclusionId:null}):$};d(Re(G.col1Config??Ra)),u(Re(G.col2Config??Sa));const q=G.sceneConfig??Ma,ne=q.sceneLabelOcclude;m({...q,sceneLabelOcclude:typeof ne=="boolean"?ne?"optimized":"off":ne});const ae=$=>$==="garbageType"||$==="section"?"categorical":$==="weight"||$==="count"?"numerical":$,Xe=G.bindings??{};B({markColor:ae(Xe.markColor??null),markGeometry:ae(Xe.markGeometry??null),scatterSize:ae(Xe.scatterSize??null),scatterCount:ae(Xe.scatterCount??null),c1AlignCount:ae(Xe.c1AlignCount??null),c2AlignCount:ae(Xe.c2AlignCount??null),markSizeX:ae(Xe.markSizeX??null),markSizeY:ae(Xe.markSizeY??null),markSizeZ:ae(Xe.markSizeZ??null),markScale:ae(Xe.markScale??null)}),v(G.bindingDisabled??{}),M(G.bindingScale??{});const qo=$=>(Array.isArray($)?$:[$]).map(ct=>ae(ct)).filter(ct=>ct!=null),Vs=$=>({...$,slots:{top:qo($.slots.top),bottom:qo($.slots.bottom),left:qo($.slots.left),right:qo($.slots.right)}});w(G.markLabelConfig?Vs(G.markLabelConfig):Tn),I(G.colLabelConfig?Vs(G.colLabelConfig):Tn),N(ee.filter($=>!Oe.has($.id))),r(G.layers??Ba),G.activeDataset!=null?(h(G.activeDataset),g(G.activeModelCollection??J0(G.activeDataset))):G.activeModelCollection!=null&&g(G.activeModelCollection),k(G.colorMode??"distinct"),E(G.colorGradient??{from:"#EE6655",to:"#4488EE"}),z(G.colorTint??!1),Os(H.id),ni(H.name),ue(null),St("none")}function df(){o===1&&(e(2),i("collection1")),o===2&&(e(3),i("collection2"))}function ff(){o===3&&(e(2),i("collection1")),o===2&&(e(1),i("mark"))}return c.jsxs("div",{style:{display:"flex",width:"100vw",height:"100vh",background:"#F2F2F7",overflow:"hidden"},children:[c.jsxs("div",{style:{width:"260px",flexShrink:0,borderRight:"1px solid #E5E5EA",background:"#FFFFFF",display:"flex",flexDirection:"column",overflow:"hidden"},children:[c.jsxs("div",{style:{display:"flex",gap:"6px",padding:"8px 10px",borderBottom:"1px solid #E5E5EA",flexShrink:0,flexDirection:"column"},children:[c.jsxs("div",{style:{display:"flex",gap:"6px"},children:[c.jsx("button",{onClick:cf,title:et?`Save to "${et}"`:"Save scene",style:{flex:1,background:"#F2F2F7",color:"#1D1D1F",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"6px 8px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:et||"Save"}),c.jsx("button",{onClick:()=>St("load"),style:{flex:1,background:"#F2F2F7",color:"#1D1D1F",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"6px 8px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit"},children:"Load"})]}),c.jsx("button",{onClick:()=>{Ls(!0),Ns(0)},disabled:Ht,style:{background:"#F2F2F7",color:Ht?"#AEAEB2":"#1D1D1F",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"7px 8px",fontSize:"12px",fontWeight:"600",cursor:Ht?"default":"pointer",fontFamily:"inherit",width:"100%"},children:Ht?"Rendering...":"Render"}),c.jsx("button",{onClick:lf,disabled:He==="saving",title:$d()?"Submit your work to the study":"Study backend not configured — this will download a JSON file instead",style:{background:He==="sent"?"#34C759":He==="error"?"#FF3B30":He==="downloaded"?"#FF9500":"#007AFF",color:"#fff",border:"none",borderRadius:"7px",padding:"7px 8px",fontSize:"12px",fontWeight:"700",width:"100%",fontFamily:"inherit",cursor:He==="saving"?"default":"pointer",opacity:He==="saving"?.75:1,transition:"background 0.15s"},children:He==="saving"?"Submitting…":He==="sent"?"✓ Submitted":He==="downloaded"?"✓ Saved (backup file)":He==="error"?"Submit failed — retry":"Submit my work"})]}),c.jsx("div",{style:{flex:1,overflowY:"auto",minHeight:0},children:c.jsx(Bp,{level:o,activeElement:t,onSelectElement:H=>{i(H),ue(null)},onAdvanceLevel:df,onDowngradeLevel:ff,decorations:V,activeDecorationId:te,onSelectDecoration:ue,onAddDecoration:sf,onRemoveDecoration:rf,onRenameDecoration:af})}),c.jsx(L0,{datasetKey:y})]}),c.jsxs("div",{style:{flex:1,position:"relative",zIndex:0},onDragOver:H=>H.preventDefault(),onDrop:H=>{H.preventDefault();const G=H.dataTransfer.getData("phys-var/name");if(!G)return;const W=H.dataTransfer.types.includes("phys-var/numerical")?"numerical":"categorical";Ao({x:H.clientX,y:H.clientY,varName:G,varType:W})},children:[c.jsx(r0,{level:o,markConfig:s,collection1Config:l,collection2Config:p,sceneConfig:f,layers:n,bindings:Js,bindingScale:S,markLabelConfig:D,colLabelConfig:K,decorations:V,colorMode:T,colorGradient:j,colorTint:P,scatterSeed:Q,datasetTitle:Z0[y],onSelectElement:H=>{i(H),ue(null)},onSelectDecoration:ue,onMarkChange:a,onDecorationChange:Qs,onCollection1Change:d,onCollection2Change:u,pathTracingActive:Ht,onSamplesUpdate:Ns,downloadRenderRef:Yo}),Ht&&c.jsxs("div",{style:{position:"absolute",top:"16px",right:"16px",background:"rgba(10,10,10,0.82)",backdropFilter:"blur(14px)",borderRadius:"14px",padding:"18px 20px",color:"#fff",display:"flex",flexDirection:"column",gap:"14px",width:"200px",fontFamily:"inherit",zIndex:10,boxShadow:"0 8px 32px rgba(0,0,0,0.4)"},children:[c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:"10px",fontWeight:"700",letterSpacing:"0.1em",textTransform:"uppercase",opacity:.45,marginBottom:"8px"},children:"Path Tracing"}),c.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"5px"},children:[c.jsx("span",{style:{fontSize:"32px",fontWeight:"700",letterSpacing:"-0.02em",lineHeight:1},children:lt}),c.jsx("span",{style:{fontSize:"11px",opacity:.35},children:"spp"})]})]}),c.jsx("div",{style:{background:"rgba(255,255,255,0.1)",borderRadius:"3px",height:"3px"},children:c.jsx("div",{style:{width:`${Math.min(100,lt/256*100)}%`,height:"100%",background:"#4FC3F7",borderRadius:"3px",transition:"width 0.4s"}})}),c.jsx("div",{style:{fontSize:"11px",opacity:.4,marginTop:"-8px"},children:lt===0?"Building scene BVH…":lt>=256?"Converged":`${256-lt} samples to 256`}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsx("button",{onClick:()=>{var H;return(H=Yo.current)==null?void 0:H.call(Yo)},disabled:lt===0,style:{background:lt>0?"#4FC3F7":"rgba(255,255,255,0.08)",color:"#fff",border:"none",borderRadius:"8px",padding:"9px",fontSize:"12px",fontWeight:"600",cursor:lt>0?"pointer":"default",fontFamily:"inherit"},children:"Download PNG"}),c.jsx("button",{onClick:()=>Ls(!1),style:{background:"rgba(255,255,255,0.08)",color:"#fff",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"9px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit"},children:"Stop"})]})]})]}),c.jsxs("div",{style:{width:"260px",flexShrink:0,borderLeft:"1px solid #E5E5EA",background:"#FFFFFF",display:"flex",flexDirection:"column"},children:[c.jsx("div",{style:{flex:1,overflowY:"auto",minHeight:0},children:c.jsx(Ip,{activeElement:t,compositionLevel:o,layers:n,markConfig:s,onMarkChange:a,collection1Config:l,onCollection1Change:d,collection2Config:p,onCollection2Change:u,sceneConfig:f,onSceneChange:m,bindings:Js,onBind:Zo,markLabelConfig:D,onMarkLabelChange:w,colLabelConfig:K,onColLabelChange:I,activeDecorationId:te,decorations:V,onDecorationChange:Qs,colorMode:T,colorGradient:j,onColorGradientChange:E,colorTint:P,onColorTintChange:z,markOpenSection:L,onReseed:()=>J(H=>H+1),models:up(x)})}),c.jsxs("div",{style:{borderTop:"1px solid #E5E5EA",padding:"14px 14px 16px",flexShrink:0,maxHeight:"50%",overflowY:"auto"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[c.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600"},children:"Data"}),c.jsx("button",{onClick:()=>oe(!0),style:{background:"none",border:"1px solid #D1D1D6",borderRadius:"6px",padding:"3px 8px",fontSize:"11px",color:"#6C6C70",cursor:"pointer",fontFamily:"inherit"},children:"Open Data"})]}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:b.map(H=>{const G=Object.keys(C).filter(q=>C[q]===H.varName),W=l.arrangement==="scattering",ee=l.arrangement==="surface",Oe=q=>ee?"Above":W?q==="top"||q==="left"?"Top":"Below":q[0].toUpperCase()+q.slice(1),Re=[];return["top","bottom","left","right"].forEach(q=>{D.slots[q].includes(H.varName)&&Re.push({key:`mark-${q}`,label:`Label ${Oe(q)}`,onRemove:()=>w(ne=>({...ne,slots:{...ne.slots,[q]:ne.slots[q].filter(ae=>ae!==H.varName)}}))}),K.slots[q].includes(H.varName)&&Re.push({key:`col-${q}`,label:`Label ${q[0].toUpperCase()+q.slice(1)}`,onRemove:()=>I(ne=>({...ne,slots:{...ne.slots,[q]:ne.slots[q].filter(ae=>ae!==H.varName)}}))})}),c.jsxs("div",{children:[c.jsx(N0,{label:H.label,type:H.type,varName:H.varName}),(G.length>0||Re.length>0)&&c.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginTop:"8px"},children:[G.map(q=>{const ne=!!R[q];return c.jsxs("div",{onClick:()=>ef(q),title:ne?"Disabled — click to re-enable":"Click to disable (keeps the binding)",style:{display:"inline-flex",alignItems:"center",gap:"5px",cursor:"pointer",background:ne?"#F1F1F5":"#E8F1FF",border:`1px solid ${ne?"#DADAE0":"#BBD6FF"}`,borderRadius:"10px",padding:"4px 6px 4px 11px",fontSize:"12.5px",color:ne?"#A0A0A8":"#0A66DA",fontWeight:"600",lineHeight:1.2},children:[c.jsxs("span",{style:{textDecoration:ne?"line-through":"none",whiteSpace:"nowrap"},children:[Ca[q]&&c.jsx("span",{style:{color:ne?"#C7C7CC":"#8FB6EE",marginRight:"3px",fontWeight:"500"},children:Ca[q]}),V0[q]]}),X0.has(q)&&c.jsx(Y0,{value:S[q]??1,disabled:ne,onCommit:ae=>tf(q,ae)}),c.jsx("button",{onClick:ae=>{ae.stopPropagation(),Zo(q,null)},title:"Remove",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"17px",height:"17px",borderRadius:"50%",flexShrink:0,background:"none",border:"none",cursor:"pointer",color:ne?"#B4B4BC":"#7FAEF0",fontSize:"14px",lineHeight:1,fontFamily:"inherit",padding:0},onMouseEnter:ae=>{ae.currentTarget.style.background=ne?"#E4E4EA":"#D3E4FF"},onMouseLeave:ae=>{ae.currentTarget.style.background="none"},children:"×"})]},q)}),Re.map(q=>c.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"5px",background:"#EFEAFB",border:"1px solid #DCCFFA",borderRadius:"10px",padding:"4px 6px 4px 11px",fontSize:"12.5px",color:"#5E5CE6",fontWeight:"600",lineHeight:1.2},children:[c.jsx("span",{style:{whiteSpace:"nowrap"},children:q.label}),c.jsx("button",{onClick:q.onRemove,title:"Remove",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"17px",height:"17px",borderRadius:"50%",flexShrink:0,background:"none",border:"none",cursor:"pointer",color:"#9A98EE",fontSize:"14px",lineHeight:1,fontFamily:"inherit",padding:0},onMouseEnter:ne=>{ne.currentTarget.style.background="#E4DCFA"},onMouseLeave:ne=>{ne.currentTarget.style.background="none"},children:"×"})]},q.key))]})]},H.varName)})})]})]}),Gs==="save"&&c.jsx(T0,{initialName:et??"",onSave:Ws,onClose:()=>St("none")}),le&&c.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999},onClick:()=>oe(!1),children:c.jsxs("div",{style:{background:"#fff",borderRadius:"14px",width:"340px",maxWidth:"90vw",maxHeight:"80vh",display:"flex",flexDirection:"column",boxShadow:"0 16px 48px rgba(0,0,0,0.28)",overflow:"hidden",fontFamily:"inherit"},onClick:H=>H.stopPropagation(),children:[c.jsxs("div",{style:{padding:"14px 20px",borderBottom:"1px solid #E5E5EA",fontSize:"15px",fontWeight:"700",color:"#1D1D1F",flexShrink:0,display:"flex",justifyContent:"space-between",alignItems:"center"},children:["Data Panel",c.jsx("button",{onClick:()=>oe(!1),style:{background:"none",border:"none",fontSize:"18px",color:"#AEAEB2",cursor:"pointer",lineHeight:1,padding:"0 2px"},children:"×"})]}),c.jsx("div",{style:{overflowY:"auto",flex:1},children:c.jsx(Q0,{layers:n,onChange:r,onDatasetChange:h,selectedDataset:y,modelCollection:x,onModelCollectionChange:g})})]})}),Gs==="load"&&c.jsx(U0,{onLoad:uf,onClose:()=>St("none"),currentName:et??"scene",currentData:si()}),at&&c.jsx(W0,{x:at.x,y:at.y,varName:at.varName,varType:at.varType,level:o,col1Arrangement:l.arrangement,onBind:Zo,onColorBind:of,onBindLabel:nf,onClose:()=>Ao(null)})]})}const Xi="https://massager-unshaved-chasing.ngrok-free.dev";function _0(){const o=fp();return F.useEffect(()=>{o.refresh().fit()},[o]),null}function $0({url:o}){const e=No(Fs,o),t=F.useRef([]),i=F.useRef(0);return F.useEffect(()=>{const n=[];if(e.scene.updateWorldMatrix(!0,!0),e.scene.traverse(s=>{s.isMesh&&n.push(s)}),!n.length)return;const r=new U;n.forEach(s=>{const a=new U;s.getWorldPosition(a),r.add(a)}),r.divideScalar(n.length),t.current=n.map(s=>{const a=new U;s.getWorldPosition(a);const l=a.clone().sub(r);return l.length()<.001&&l.set(Math.random()-.5,Math.random()-.5,Math.random()-.5),l.normalize(),{mesh:s,origPos:a.clone(),direction:l}}),i.current=0},[e]),Pt((n,r)=>{i.current+=r;const s=(Math.sin(i.current*1-Math.PI/2)+1)/2;t.current.forEach(({mesh:a,origPos:l,direction:d})=>{a.position.copy(l).addScaledVector(d,s*1.5)})}),c.jsxs(dp,{fit:!0,clip:!0,observe:!0,margin:1.4,children:[c.jsx(_0,{}),c.jsx("primitive",{object:e.scene})]})}function ex({data:o,center:e,impulse:t}){const i=F.useRef(null);return F.useEffect(()=>{if(!i.current)return;const n=o.position.clone().sub(e);n.length()<.001&&n.set(Math.random()-.5,.5,Math.random()-.5),n.normalize().multiplyScalar(t),i.current.applyImpulse({x:n.x,y:n.y+t*.3,z:n.z},!0),i.current.applyTorqueImpulse({x:(Math.random()-.5)*t*.3,y:(Math.random()-.5)*t*.3,z:(Math.random()-.5)*t*.3},!0)},[]),c.jsx(zn,{ref:i,position:o.position.toArray(),quaternion:[o.quaternion.x,o.quaternion.y,o.quaternion.z,o.quaternion.w],colliders:"hull",restitution:.3,friction:.8,linearDamping:.1,angularDamping:.15,children:c.jsx("mesh",{geometry:o.geometry,material:o.material})})}function tx({url:o,impulse:e}){const t=No(Fs,o),{fragments:i,center:n}=F.useMemo(()=>{const r=[];t.scene.updateWorldMatrix(!0,!0),t.scene.traverse(a=>{if(!a.isMesh)return;const l=a,d=new U,p=new $e;l.getWorldPosition(d),l.getWorldQuaternion(p),r.push({geometry:l.geometry,material:l.material,position:d,quaternion:p})});const s=new U;return r.forEach(a=>s.add(a.position)),r.length&&s.divideScalar(r.length),{fragments:r,center:s}},[t]);return c.jsxs(c.Fragment,{children:[c.jsx(zn,{type:"fixed",position:[0,-3,0],children:c.jsx(za,{args:[15,.1,15]})}),c.jsxs("mesh",{position:[0,-3,0],rotation:[-Math.PI/2,0,0],children:[c.jsx("planeGeometry",{args:[30,30]}),c.jsx("meshStandardMaterial",{color:"#1a1a1a",roughness:.9})]}),i.map((r,s)=>c.jsx(ex,{data:r,center:n,impulse:e},s))]})}function tt({label:o,children:e}){return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[c.jsx("div",{style:{fontSize:11,color:"#888"},children:o}),e]})}function Ka({active:o,onClick:e,children:t}){return c.jsx("button",{onClick:e,style:{flex:1,padding:"8px 0",fontSize:12,fontWeight:600,background:o?"#5E5CE6":"#1a1a1a",color:o?"#fff":"#666",border:o?"none":"1px solid #333",borderRadius:6,cursor:"pointer"},children:t})}function ox(){const[o,e]=F.useState(null),[t,i]=F.useState("idle"),[n,r]=F.useState(""),[s,a]=F.useState("exploded"),[l,d]=F.useState(0),[p,u]=F.useState(""),[f,m]=F.useState(8),[y,h]=F.useState(.5),[x,g]=F.useState("random"),[A,b]=F.useState("bisect"),[C,B]=F.useState(30),[R,v]=F.useState(0),[S,M]=F.useState(1.5),D=F.useRef(null),w=F.useCallback(E=>{if(!E.name.endsWith(".glb")&&!E.name.endsWith(".gltf")){r("Please upload a .glb or .gltf file");return}D.current=E,u(E.name),e(null),i("idle"),r("")},[]),K=F.useCallback(E=>{E.preventDefault();const P=E.dataTransfer.files[0];P&&w(P)},[w]),I=F.useCallback(E=>{var z;const P=(z=E.target.files)==null?void 0:z[0];P&&w(P)},[w]),T=F.useCallback(async E=>{if(E==="model"&&!D.current){r("Drop a GLB first");return}i("loading"),r("Blender is running…"),o&&URL.revokeObjectURL(o),e(null);try{let P;const z=`pieces=${f}&cutSpread=${y}&cutStrategy=${x}&adaptivity=${R}&fractureMethod=${A}`;if(E==="sphere")P=await ui(`${Xi}/shatter/sphere?${z}`);else if(E==="cube")P=await ui(`${Xi}/shatter/cube?${z}`);else{const O=new FormData;O.append("model",D.current),O.append("pieces",f.toString()),O.append("cutSpread",y.toString()),O.append("cutStrategy",x),O.append("fractureMethod",A),O.append("voxelDiv",C.toString()),O.append("adaptivity",R.toString()),P=await ui(`${Xi}/shatter`,{method:"POST",body:O})}if(!P.ok){const O=await P.json().catch(()=>({error:P.statusText}));throw new Error(O.error??P.statusText)}const L=await P.blob();e(URL.createObjectURL(L)),i("done"),r("")}catch(P){i("error"),r(P instanceof Error?P.message:"Unknown error")}},[f,y,C,o]);F.useEffect(()=>()=>{o&&URL.revokeObjectURL(o)},[o]);const k={width:"100%",accentColor:"#5E5CE6"},j=t==="loading";return c.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0f0f0f",color:"#e0e0e0"},children:[c.jsxs("div",{style:{width:260,padding:20,display:"flex",flexDirection:"column",gap:16,borderRight:"1px solid #222",overflowY:"auto"},children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[c.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Shatter Lab"}),c.jsxs("div",{style:{display:"flex",gap:12},children:[c.jsx("a",{href:"/deform",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Deform"}),c.jsx("a",{href:"/particles",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Particles"}),c.jsx("a",{href:"/fluid",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Fluid"})]})]}),c.jsx(tt,{label:"View Mode",children:c.jsxs("div",{style:{display:"flex",gap:6},children:[c.jsx(Ka,{active:s==="exploded",onClick:()=>a("exploded"),children:"Exploded"}),c.jsx(Ka,{active:s==="physics",onClick:()=>a("physics"),children:"Physics"})]})}),c.jsxs(tt,{label:"Model (GLB)",children:[c.jsx("div",{onDrop:K,onDragOver:E=>E.preventDefault(),onClick:()=>document.getElementById("glb-input").click(),style:{border:"2px dashed #333",borderRadius:8,padding:"14px 10px",textAlign:"center",cursor:"pointer",fontSize:12,color:"#555"},children:p||"Drop GLB or click to browse"}),c.jsx("input",{id:"glb-input",type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:I})]}),c.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[c.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Fragment"}),c.jsxs(tt,{label:"Fracture Method",children:[c.jsx("div",{style:{display:"flex",gap:6},children:["bisect","voronoi"].map(E=>c.jsx("button",{onClick:()=>b(E),style:{flex:1,padding:"6px 0",fontSize:11,borderRadius:5,background:A===E?"#2a2a4a":"#1a1a1a",color:A===E?"#9999ff":"#555",border:A===E?"1px solid #5E5CE6":"1px solid #2a2a2a",cursor:"pointer",textTransform:"capitalize"},children:E},E))}),c.jsx("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:A==="voronoi"?"Natural crack patterns. Slower — best ≤ 50 pieces.":"Sequential plane cuts. Fast. Good for large counts."})]}),c.jsx(tt,{label:`Pieces: ${f}`,children:c.jsx("input",{type:"range",min:2,max:500,step:1,value:f,onChange:E=>m(Number(E.target.value)),style:k})}),c.jsxs(tt,{label:`Size Variation: ${y.toFixed(2)}`,children:[c.jsx("input",{type:"range",min:.05,max:1,step:.05,value:y,onChange:E=>h(Number(E.target.value)),style:k}),c.jsxs("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:["0 = equal-sized pieces (cuts through centre)",c.jsx("br",{}),"1 = uneven pieces (cuts placed randomly)"]})]}),c.jsxs(tt,{label:"Cut Strategy",children:[c.jsx("div",{style:{display:"flex",gap:6},children:["random","largest"].map(E=>c.jsx("button",{onClick:()=>g(E),style:{flex:1,padding:"6px 0",fontSize:11,borderRadius:5,background:x===E?"#2a2a4a":"#1a1a1a",color:x===E?"#9999ff":"#555",border:x===E?"1px solid #5E5CE6":"1px solid #2a2a2a",cursor:"pointer"},children:E==="random"?"Random":"Largest First"},E))}),c.jsx("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:"Largest First → more uniform sizes"})]})]}),c.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[c.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Remesh — file uploads only"}),c.jsxs(tt,{label:`Voxel Detail: ${C}`,children:[c.jsx("input",{type:"range",min:10,max:60,step:5,value:C,onChange:E=>B(Number(E.target.value)),style:k}),c.jsx("div",{style:{fontSize:10,color:"#444"},children:"Higher = sharper cuts, slower"})]}),c.jsxs(tt,{label:`Adaptivity: ${R.toFixed(2)}`,children:[c.jsx("input",{type:"range",min:0,max:1,step:.05,value:R,onChange:E=>v(Number(E.target.value)),style:k}),c.jsx("div",{style:{fontSize:10,color:"#444"},children:"Reduces polygons in flat areas"})]})]}),s==="physics"&&c.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[c.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Physics"}),c.jsxs(tt,{label:`Impulse: ${S.toFixed(1)}`,children:[c.jsx("input",{type:"range",min:0,max:5,step:.1,value:S,onChange:E=>M(Number(E.target.value)),style:k}),c.jsx("div",{style:{fontSize:10,color:"#444"},children:"How hard pieces fly apart on start"})]})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[c.jsx("button",{onClick:()=>T("model"),disabled:j,style:{background:j?"#222":"#5E5CE6",color:j?"#555":"#fff",border:"none",borderRadius:8,padding:"11px 0",fontSize:13,fontWeight:600,cursor:j?"wait":"pointer"},children:j?"Running…":"⚡ Shatter Model"}),c.jsxs("div",{style:{display:"flex",gap:8},children:[c.jsx("button",{onClick:()=>T("sphere"),disabled:j,style:{flex:1,background:"#1a1a1a",color:j?"#444":"#aaa",border:"1px solid #2a2a2a",borderRadius:8,padding:"9px 0",fontSize:12,cursor:j?"wait":"pointer"},children:"🔵 Sphere"}),c.jsx("button",{onClick:()=>T("cube"),disabled:j,style:{flex:1,background:"#1a1a1a",color:j?"#444":"#aaa",border:"1px solid #2a2a2a",borderRadius:8,padding:"9px 0",fontSize:12,cursor:j?"wait":"pointer"},children:"◻ Cube"})]}),s==="physics"&&o&&c.jsx("button",{onClick:()=>d(E=>E+1),style:{background:"#1a1a2e",color:"#5E5CE6",border:"1px solid #5E5CE6",borderRadius:8,padding:"9px 0",fontSize:12,cursor:"pointer"},children:"↺ Restart Simulation"})]}),(n||j)&&c.jsx("div",{style:{fontSize:12,padding:10,borderRadius:6,lineHeight:1.5,background:t==="error"?"#2a0f0f":"#111",color:t==="error"?"#ff6b6b":"#666"},children:j?"Blender is running… (10–30 s)":n})]}),c.jsx("div",{style:{flex:1},children:o?c.jsxs(Yn,{camera:{position:[0,1,5],fov:50},style:{background:"#111"},children:[c.jsx("ambientLight",{intensity:.5}),c.jsx("directionalLight",{position:[5,8,5],intensity:1.2,castShadow:!0}),c.jsx(Cs,{preset:"city"}),s==="exploded"&&c.jsx(F.Suspense,{fallback:null,children:c.jsx($0,{url:o})}),s==="physics"&&c.jsx(Ha,{gravity:[0,-9.81,0],timeStep:"vary",children:c.jsx(F.Suspense,{fallback:null,children:c.jsx(tx,{url:o,impulse:S})})},l),c.jsx(Zn,{})]}):c.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#2a2a2a",fontSize:13},children:j?c.jsxs("div",{style:{textAlign:"center",color:"#444"},children:[c.jsx("div",{style:{fontSize:28,marginBottom:10},children:"⏳"}),"Blender is fracturing…"]}):c.jsxs("div",{style:{textAlign:"center"},children:[c.jsx("div",{style:{fontSize:28,marginBottom:10},children:"💥"}),"Choose a shape and hit Shatter"]})})})]})}const Yi={Flag:{pinMode:"flag",gravity:2,windX:.5,windZ:5,windTurb:3,damping:.99,constraintIters:8},Curtain:{pinMode:"curtain",gravity:3,windX:0,windZ:2,windTurb:2,damping:.99,constraintIters:8},Sheet:{pinMode:"sheet",gravity:2.5,windX:.5,windZ:2.5,windTurb:2.5,damping:.99,constraintIters:8},Still:{pinMode:"curtain",gravity:4,windX:0,windZ:0,windTurb:0,damping:.995,constraintIters:12},Hammock:{pinMode:"hammock",gravity:6,windX:0,windZ:.5,windTurb:.5,damping:.995,constraintIters:12}};function nx(o,e,t,i,n){const r=n==="hammock",s=new Float32Array(o*e*3),a=new Float32Array(o*e*2);for(let p=0;p<e;p++)for(let u=0;u<o;u++){const f=p*o+u,m=u/(o-1),y=p/(e-1);r?(s[f*3]=(m-.5)*t,s[f*3+1]=0,s[f*3+2]=(y-.5)*i):(s[f*3]=(m-.5)*t,s[f*3+1]=(.5-y)*i,s[f*3+2]=0),a[f*2]=m,a[f*2+1]=1-y}const l=[];for(let p=0;p<e-1;p++)for(let u=0;u<o-1;u++){const f=p*o+u,m=f+1,y=f+o,h=y+1;l.push(f,y,m,m,y,h)}const d=new Qe;return d.setAttribute("position",new pe(s,3)),d.setAttribute("uv",new pe(a,2)),d.setIndex(l),d.computeVertexNormals(),d}function ix(o,e,t,i,n){const r=n==="hammock",s=o*e,a=new Float32Array(s*3),l=new Float32Array(s*3),d=new Uint8Array(s),p=new Float32Array(s*3);for(let h=0;h<e;h++)for(let x=0;x<o;x++){const g=h*o+x,A=x/(o-1),b=h/(e-1);r?(a[g*3]=(A-.5)*t,a[g*3+1]=0,a[g*3+2]=(b-.5)*i):(a[g*3]=(A-.5)*t,a[g*3+1]=(.5-b)*i,a[g*3+2]=0),l[g*3]=a[g*3],l[g*3+1]=a[g*3+1],l[g*3+2]=a[g*3+2]}switch(n){case"flag":for(let h=0;h<e;h++)d[h*o]=1;break;case"curtain":for(let h=0;h<o;h++)d[h]=1;break;case"sheet":d[0]=1,d[o-1]=1;break;case"hammock":d[0]=1,d[o-1]=1,d[(e-1)*o]=1,d[(e-1)*o+o-1]=1;break}for(let h=0;h<s;h++)p[h*3]=a[h*3],p[h*3+1]=a[h*3+1],p[h*3+2]=a[h*3+2];const u=t/(o-1),f=i/(e-1),m=Math.hypot(u,f),y=[];for(let h=0;h<e;h++)for(let x=0;x<o;x++){const g=h*o+x;x<o-1&&y.push({a:g,b:g+1,r:u}),h<e-1&&y.push({a:g,b:g+o,r:f}),x<o-1&&h<e-1&&(y.push({a:g,b:g+o+1,r:m}),y.push({a:g+1,b:g+o,r:m})),x<o-2&&y.push({a:g,b:g+2,r:u*2}),h<e-2&&y.push({a:g,b:g+o*2,r:f*2})}return{pos:a,prev:l,pinned:d,init:p,springs:y,N:o,M:e}}function sx({cols:o,rows:e,cW:t,cH:i,pinMode:n,paramsRef:r,color:s,wireframe:a}){const l=F.useMemo(()=>nx(o,e,t,i,n),[]),d=F.useMemo(()=>ix(o,e,t,i,n),[]),p=F.useRef(null);return Pt(({clock:u},f)=>{if(!p.current)return;const{gravity:m,windZ:y,windX:h,windTurb:x,damping:g,constraintIters:A}=r.current,{pos:b,prev:C,pinned:B,init:R,springs:v,N:S,M}=d,D=u.getElapsedTime(),w=5,K=Math.min(f,.033)/w;for(let T=0;T<w;T++){for(let k=0;k<S*M;k++){if(B[k])continue;const j=k*3,E=b[j],P=b[j+1],z=b[j+2];let L=(E-C[j])*g,O=(P-C[j+1])*g,Q=(z-C[j+2])*g;O-=m*K*K;const J=Math.sin(E*.8+D*.9)*Math.cos(z*.5+D*.6)*x,V=Math.sin(z*.7+D*.7)*Math.cos(P*.4+D*.5)*x;L+=(h+J)*K*K,Q+=(y+V)*K*K,C[j]=E,C[j+1]=P,C[j+2]=z,b[j]=E+L,b[j+1]=P+O,b[j+2]=z+Q,b[j+1]<-3.5&&(b[j+1]=-3.5,C[j+1]=-3.5)}for(let k=0;k<A;k++)for(const{a:j,b:E,r:P}of v){const z=j*3,L=E*3,O=b[L]-b[z],Q=b[L+1]-b[z+1],J=b[L+2]-b[z+2],V=Math.sqrt(O*O+Q*Q+J*J)||1e-6,N=(V-P)/V*.5;B[j]||(b[z]+=O*N,b[z+1]+=Q*N,b[z+2]+=J*N),B[E]||(b[L]-=O*N,b[L+1]-=Q*N,b[L+2]-=J*N)}for(let k=0;k<S*M;k++)B[k]&&(b[k*3]=R[k*3],b[k*3+1]=R[k*3+1],b[k*3+2]=R[k*3+2])}const I=l.attributes.position;for(let T=0;T<S*M;T++)I.array[T*3]=b[T*3],I.array[T*3+1]=b[T*3+1],I.array[T*3+2]=b[T*3+2];I.needsUpdate=!0,l.computeVertexNormals()}),c.jsx("mesh",{ref:p,geometry:l,castShadow:!0,receiveShadow:!0,children:c.jsx("meshStandardMaterial",{color:s,side:kt,roughness:.8,metalness:0,wireframe:a})})}function rx({cols:o,rows:e,cW:t,cH:i,pinMode:n}){const r=F.useMemo(()=>{const s=o,a=e,l=n==="hammock",d=(p,u)=>{const f=p/(s-1),m=u/(a-1);return l?[(f-.5)*t,0,(m-.5)*i]:[(f-.5)*t,(.5-m)*i,0]};switch(n){case"flag":return Array.from({length:a},(p,u)=>d(0,u));case"curtain":return Array.from({length:s},(p,u)=>d(u,0));case"sheet":return[d(0,0),d(s-1,0)];case"hammock":return[d(0,0),d(s-1,0),d(0,a-1),d(s-1,a-1)]}},[o,e,t,i,n]);return c.jsx(c.Fragment,{children:r.map((s,a)=>c.jsxs("mesh",{position:s,children:[c.jsx("sphereGeometry",{args:[.06,8,8]}),c.jsx("meshStandardMaterial",{color:"#ff4455",emissive:"#ff2233",emissiveIntensity:.6})]},a))})}function Mo({label:o,children:e}){return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[c.jsx("div",{style:{fontSize:10,color:"#555",letterSpacing:.4},children:o}),e]})}function ax({active:o,onClick:e,children:t,small:i}){return c.jsx("button",{onClick:e,style:{flex:1,padding:i?"5px 0":"7px 0",fontSize:i?10:11,borderRadius:5,cursor:"pointer",background:o?"#2a2a4a":"#151520",color:o?"#9999ff":"#555",border:o?"1px solid #5E5CE6":"1px solid #222"},children:t})}function wa({on:o,onClick:e,label:t}){return c.jsxs("div",{onClick:e,style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer",userSelect:"none"},children:[c.jsx("div",{style:{width:28,height:16,borderRadius:8,position:"relative",background:o?"#5E5CE6":"#1e1e2a",border:"1px solid #333",transition:"background .2s"},children:c.jsx("div",{style:{position:"absolute",top:2,left:o?11:2,width:10,height:10,borderRadius:"50%",background:o?"#fff":"#444",transition:"left .2s"}})}),c.jsx("span",{style:{fontSize:11,color:o?"#9999ff":"#555"},children:t})]})}const lx=[["Gravity","gravity",0,10,.1],["Wind forward","windZ",-3,10,.1],["Wind sideways","windX",-5,5,.1],["Turbulence","windTurb",0,8,.1],["Damping","damping",.95,1,.001],["Stiffness","constraintIters",1,20,1]];function cx(){const[o,e]=F.useState(22),[t,i]=F.useState(22),[n,r]=F.useState(3),[s,a]=F.useState(3),[l,d]=F.useState("curtain"),[p,u]=F.useState(0),[f,m]=F.useState("#5588cc"),[y,h]=F.useState(!1),[x,g]=F.useState(!0),[A,b]=F.useState(Yi.Curtain),C=F.useRef(A);F.useEffect(()=>{C.current=A},[A]);const B=w=>K=>b(I=>({...I,[w]:Number(K.target.value)})),R=w=>{const K=Yi[w];d(K.pinMode),b({gravity:K.gravity,windX:K.windX,windZ:K.windZ,windTurb:K.windTurb,damping:K.damping,constraintIters:K.constraintIters}),u(I=>I+1)},v={width:"100%",accentColor:"#5E5CE6"},S={borderTop:"1px solid #1a1a2a",paddingTop:12,display:"flex",flexDirection:"column",gap:8},M={fontSize:10,color:"#444",textTransform:"uppercase",letterSpacing:1},D=`${o}-${t}-${n}-${s}-${l}-${p}`;return c.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0a0a12",color:"#ddd"},children:[c.jsxs("div",{style:{width:268,padding:20,display:"flex",flexDirection:"column",gap:14,borderRight:"1px solid #1a1a2a",overflowY:"auto"},children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[c.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Soft Lab"}),c.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[c.jsx("a",{href:"/shatter",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Shatter"}),c.jsx("a",{href:"/deform",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Deform"}),c.jsx("a",{href:"/particles",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Particles"}),c.jsx("a",{href:"/ripple",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Ripple"}),c.jsx("a",{href:"/jelly",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Jelly"})]})]}),c.jsxs("div",{style:S,children:[c.jsx("div",{style:M,children:"Presets"}),c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:Object.keys(Yi).map(w=>c.jsx("button",{onClick:()=>R(w),style:{padding:"5px 10px",fontSize:10,borderRadius:5,cursor:"pointer",background:"#151520",color:"#777",border:"1px solid #222"},children:w},w))}),c.jsx("button",{onClick:()=>u(w=>w+1),style:{padding:"7px",fontSize:11,borderRadius:5,cursor:"pointer",background:"#151520",color:"#555",border:"1px solid #222"},children:"↺ Reset cloth"})]}),c.jsxs("div",{style:S,children:[c.jsx("div",{style:M,children:"Cloth"}),c.jsx(Mo,{label:`Resolution: ${o}×${t}`,children:c.jsx("input",{type:"range",min:8,max:40,step:1,value:o,onChange:w=>{const K=Number(w.target.value);e(K),i(K)},style:v})}),c.jsx(Mo,{label:`Width: ${n.toFixed(1)}`,children:c.jsx("input",{type:"range",min:1,max:6,step:.1,value:n,onChange:w=>r(Number(w.target.value)),style:v})}),c.jsx(Mo,{label:`Height: ${s.toFixed(1)}`,children:c.jsx("input",{type:"range",min:1,max:6,step:.1,value:s,onChange:w=>a(Number(w.target.value)),style:v})})]}),c.jsxs("div",{style:S,children:[c.jsx("div",{style:M,children:"Pin mode"}),c.jsx("div",{style:{display:"flex",gap:5},children:["flag","curtain","sheet","hammock"].map(w=>c.jsx(ax,{small:!0,active:l===w,onClick:()=>{d(w),u(K=>K+1)},children:w[0].toUpperCase()+w.slice(1)},w))})]}),c.jsxs("div",{style:S,children:[c.jsx("div",{style:M,children:"Simulation"}),lx.map(([w,K,I,T,k])=>c.jsx(Mo,{label:`${w}: ${K==="constraintIters"?A[K].toFixed(0):K==="damping"?A[K].toFixed(3):A[K].toFixed(2)}`,children:c.jsx("input",{type:"range",min:I,max:T,step:k,value:A[K],onChange:B(K),style:v})},K))]}),c.jsxs("div",{style:S,children:[c.jsx("div",{style:M,children:"Rendering"}),c.jsx(Mo,{label:"Color",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[c.jsx("input",{type:"color",value:f,onChange:w=>m(w.target.value),style:{width:32,height:22,border:"none",background:"none",cursor:"pointer",padding:0}}),c.jsx("span",{style:{fontSize:10,color:"#555"},children:f})]})}),c.jsx(wa,{on:y,onClick:()=>h(w=>!w),label:"Wireframe"}),c.jsx(wa,{on:x,onClick:()=>g(w=>!w),label:"Show pins"})]})]}),c.jsxs(Yn,{shadows:!0,camera:{position:[0,.5,5.5],fov:45},gl:{antialias:!0,toneMapping:bs,toneMappingExposure:1},style:{flex:1,background:"#04040c"},children:[c.jsx("ambientLight",{intensity:.35}),c.jsx("directionalLight",{position:[4,8,4],intensity:1.8,castShadow:!0,"shadow-mapSize":[1024,1024]}),c.jsx("pointLight",{position:[-4,1,-2],intensity:.6,color:"#4466ff"}),c.jsx("pointLight",{position:[3,-1,3],intensity:.3,color:"#ff8844"}),c.jsx(Zn,{makeDefault:!0,target:[0,0,0]}),c.jsx(sx,{cols:o,rows:t,cW:n,cH:s,pinMode:l,paramsRef:C,color:f,wireframe:y},D),x&&c.jsx(rx,{cols:o,rows:t,cW:n,cH:s,pinMode:l},`pins-${D}`),c.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-3,0],receiveShadow:!0,children:[c.jsx("planeGeometry",{args:[14,14]}),c.jsx("meshStandardMaterial",{color:"#09090f",roughness:.95})]})]})]})}const Z=90,mt=10;function ux({waveSpeed:o,damping:e,disturbAmp:t,modelUrl:i,resetKey:n}){const r=F.useRef(new Float32Array(Z*Z)),s=F.useRef(new Float32Array(Z*Z)),a=F.useRef(null),[l,d]=F.useState(null),p=F.useMemo(()=>{const f=new pp(mt,mt,Z-1,Z-1);return f.rotateX(-Math.PI/2),f},[]);F.useEffect(()=>{r.current.fill(0),s.current.fill(0)},[n]),F.useEffect(()=>{if(!i){d(null);return}new Fs().load(i,m=>{const y=m.scene,h=new de().setFromObject(y),x=h.getSize(new U);y.scale.setScalar(.9/Math.max(x.x,x.y,x.z)),h.setFromObject(y),y.position.sub(h.getCenter(new U)),y.position.y=.5;const g=Math.floor(Z/2),A=Math.floor(Z/2),b=8;for(let C=-b;C<=b;C++)for(let B=-b;B<=b;B++){const R=g+B,v=A+C;if(R>=0&&R<Z&&v>=0&&v<Z){const S=Math.sqrt(B*B+C*C);S<=b&&(r.current[v*Z+R]-=.4*(1-S/b))}}d(y)})},[i]);const u=F.useCallback((f,m,y)=>{const h=Math.round((f/mt+.5)*(Z-1)),x=Math.round((m/mt+.5)*(Z-1)),g=4;for(let A=-g;A<=g;A++)for(let b=-g;b<=g;b++){const C=h+b,B=x+A;if(C>=0&&C<Z&&B>=0&&B<Z){const R=Math.sqrt(b*b+A*A);R<=g&&(r.current[B*Z+C]-=y*(1-R/g))}}},[]);return Pt(()=>{const f=r.current,m=s.current,y=Math.min(o,.49),h=7;for(let A=1;A<Z-1;A++)for(let b=1;b<Z-1;b++){const C=A*Z+b,B=f[(A-1)*Z+b]+f[(A+1)*Z+b]+f[A*Z+b-1]+f[A*Z+b+1]-4*f[C];m[C]=(m[C]+y*B)*e}for(let A=0;A<Z*Z;A++)f[A]+=m[A];for(let A=0;A<Z;A++)for(let b=0;b<Z;b++){const C=Math.min(b,A,Z-1-b,Z-1-A);if(C<h){const B=(C/h)**2,R=bt.lerp(.75,1,B),v=A*Z+b;f[v]*=R,m[v]*=R}}const x=p.attributes.position;for(let A=0;A<Z;A++)for(let b=0;b<Z;b++)x.setY(A*Z+b,f[A*Z+b]);x.needsUpdate=!0,p.computeVertexNormals();const g=a.current;if(g){const A=Math.round((g.position.x/mt+.5)*(Z-1)),b=Math.round((g.position.z/mt+.5)*(Z-1));if(A>=0&&A<Z&&b>=0&&b<Z){const C=f[b*Z+A];g.position.y=C+.45,g.rotation.x=C*.25,g.rotation.z=C*.15}}}),c.jsxs(c.Fragment,{children:[c.jsx("mesh",{geometry:p,onPointerDown:f=>{f.stopPropagation(),u(f.point.x,f.point.z,t)},onPointerMove:f=>{f.buttons>0&&u(f.point.x,f.point.z,t*.35)},children:c.jsx("meshStandardMaterial",{color:"#0a3060",roughness:.03,metalness:.45,envMapIntensity:3})}),l&&c.jsx("primitive",{ref:a,object:l})]})}function Zi({label:o,children:e}){return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[c.jsx("div",{style:{fontSize:10,color:"#555",letterSpacing:.4},children:o}),e]})}function dx(){const[o,e]=F.useState(.32),[t,i]=F.useState(.995),[n,r]=F.useState(.4),[s,a]=F.useState(null),[l,d]=F.useState(""),[p,u]=F.useState(0),f=F.useCallback(x=>{!x.name.endsWith(".glb")&&!x.name.endsWith(".gltf")||(s&&URL.revokeObjectURL(s),a(URL.createObjectURL(x)),d(x.name))},[s]),m={width:"100%",accentColor:"#5E5CE6"},y={borderTop:"1px solid #1a1a2a",paddingTop:12,display:"flex",flexDirection:"column",gap:8},h={fontSize:10,color:"#444",textTransform:"uppercase",letterSpacing:1};return c.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0a0a12",color:"#ddd"},children:[c.jsxs("div",{style:{width:268,padding:20,display:"flex",flexDirection:"column",gap:14,borderRight:"1px solid #1a1a2a",overflowY:"auto"},children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[c.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Ripple Lab"}),c.jsx("div",{style:{fontSize:11,color:"#444",lineHeight:1.5},children:"Click or drag on the water to create waves."}),c.jsxs("div",{style:{display:"flex",gap:10,marginTop:4},children:[c.jsx("a",{href:"/soft",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Cloth"}),c.jsx("a",{href:"/jelly",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Jelly"}),c.jsx("a",{href:"/particles",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Particles"})]})]}),c.jsxs("div",{style:y,children:[c.jsx("div",{style:h,children:"Object on water"}),c.jsx("div",{onDrop:x=>{x.preventDefault();const g=x.dataTransfer.files[0];g&&f(g)},onDragOver:x=>x.preventDefault(),onClick:()=>document.getElementById("glb-ripple").click(),style:{border:`2px dashed ${s?"#5E5CE6":"#222"}`,borderRadius:8,padding:"10px 8px",textAlign:"center",cursor:"pointer",fontSize:11,color:s?"#9999ff":"#444"},children:l||"Drop a GLB — it will float"}),c.jsx("input",{id:"glb-ripple",type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:x=>{var A;const g=(A=x.target.files)==null?void 0:A[0];g&&f(g)}}),s&&c.jsx("button",{onClick:()=>{a(null),d("")},style:{padding:"5px",fontSize:10,borderRadius:5,cursor:"pointer",background:"#151520",color:"#666",border:"1px solid #222"},children:"Remove object"})]}),c.jsxs("div",{style:y,children:[c.jsx("div",{style:h,children:"Simulation"}),c.jsx(Zi,{label:`Wave speed: ${o.toFixed(2)}`,children:c.jsx("input",{type:"range",min:.05,max:.48,step:.01,value:o,onChange:x=>e(Number(x.target.value)),style:m})}),c.jsx(Zi,{label:`Damping: ${t.toFixed(3)}`,children:c.jsx("input",{type:"range",min:.96,max:.999,step:.001,value:t,onChange:x=>i(Number(x.target.value)),style:m})}),c.jsx(Zi,{label:`Disturbance: ${n.toFixed(2)}`,children:c.jsx("input",{type:"range",min:.05,max:1.5,step:.05,value:n,onChange:x=>r(Number(x.target.value)),style:m})})]}),c.jsx("div",{style:y,children:c.jsx("button",{onClick:()=>u(x=>x+1),style:{padding:"8px",fontSize:11,borderRadius:5,cursor:"pointer",background:"#151520",color:"#666",border:"1px solid #222"},children:"↺ Clear water"})})]}),c.jsxs(Yn,{camera:{position:[0,6,8],fov:45},gl:{antialias:!0,toneMapping:bs,toneMappingExposure:1.2},style:{flex:1,background:"#04040c"},children:[c.jsx("ambientLight",{intensity:.3}),c.jsx("directionalLight",{position:[5,8,3],intensity:1.5}),c.jsx(Cs,{preset:"sunset"}),c.jsx(Zn,{makeDefault:!0,target:[0,0,0],maxPolarAngle:Math.PI/2.1}),c.jsx(ux,{waveSpeed:o,damping:t,disturbAmp:n,modelUrl:s,resetKey:p}),c.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-.5,0],children:[c.jsx("planeGeometry",{args:[mt,mt]}),c.jsx("meshStandardMaterial",{color:"#071830",roughness:.9})]})]})]})}const fx="/phys_tool/".replace(/\/$/,""),ft=window.location.pathname.slice(fx.length)||"/",px=ft==="/lab"?c.jsx(hp,{}):ft==="/sim"?c.jsx(ox,{}):ft==="/shatter"?c.jsx(gp,{}):ft==="/deform"?c.jsx(xp,{}):ft==="/particles"?c.jsx(yp,{}):ft==="/soft"?c.jsx(cx,{}):ft==="/ripple"?c.jsx(dx,{}):ft==="/fluid"?c.jsx(bp,{}):c.jsx(q0,{});Ap.createRoot(document.getElementById("root")).render(c.jsx(mp.StrictMode,{children:px}));
