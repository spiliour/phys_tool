import{j as d,r as D,V as _,S as Ds,B as Es,U as Fo,v as Yi,M as et,a as Rs,L as Is,b as Lt,F as zt,c as he,d as ye,C as ne,e as So,P as Mo,D as wo,f as q,I as Do,Q as Fn,g as Eo,O as _s,T as Ro,h as Io,i as Y,k as _o,l as qi,N as Po,m as Go,n as Lo,o as te,p as Z,R as Ue,q as jo,s as Ke,t as Ho,u as Gn,w as ko,x as De,y as Sn,z as Oe,A as Oo,E as Te,G as zo,H as Ys,J as No,K as Uo,W as Jo,X as Ko,Y as Ln,Z as Ps,_ as jt,$ as Wo,a0 as Xo,a1 as Qo,a2 as Vo,a3 as Yo,a4 as Zi,a5 as qo,a6 as qs,a7 as Zs,a8 as $s,a9 as ei,aa as vn,ab as Zo,ac as oe,ad as $i,ae as $o,af as ea,ag as Nt,ah as er,ai as Ee,aj as It,ak as Ht,al as Ae,am as jn,an as re,ao as hs,ap as ta,aq as ti,ar as na,as as $,at as ps,au as tr,av as sa,aw as nr,ax as At,ay as ia,az as vt,aA as ra,aB as Gs,aC as gn,aD as yt,aE as le,aF as oa,aG as aa,aH as sr,aI as ir,aJ as ke,aK as la,aL as ca,aM as ua,aN as da,aO as fa,aP as ha,aQ as me,aR as yn,aS as rr,aT as Mn,aU as Ls,aV as or,aW as wn,aX as ar,aY as js,aZ as Hn,a_ as Hs,a$ as pa,b0 as ks,b1 as ma,b2 as ga,b3 as xa,b4 as Aa,b5 as va,b6 as ya,b7 as ba,b8 as Ba,b9 as Ca}from"./index-C_JYJCPr.js";const Ta={mark:{label:"Mark",badge:"L1"},collection1:{label:"Collection",badge:"L2"},collection2:{label:"Collection Lv2",badge:"L3"},scene:{label:"Scene",badge:"Env"}},Fa={1:["mark","scene"],2:["mark","collection1","scene"],3:["mark","collection1","collection2","scene"]},kn={padding:"8px 12px",borderRadius:"10px",fontSize:"12px",fontWeight:"500",cursor:"pointer",fontFamily:"inherit",transition:"border-color 0.15s, color 0.15s",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",width:"100%"};function Sa({level:s,activeElement:e,onSelectElement:t,onAdvanceLevel:n,onDowngradeLevel:i,decorations:a,activeDecorationId:r,onSelectDecoration:o,onAddDecoration:l,onRemoveDecoration:u}){const h=Fa[s];return d.jsxs("div",{style:{padding:"14px 14px 14px",display:"flex",flexDirection:"column",gap:"8px"},children:[d.jsx("div",{style:{borderTop:"1px solid #E5E5EA",paddingTop:"12px"},children:d.jsxs("div",{style:{display:"flex",alignItems:"baseline",justifyContent:"space-between"},children:[d.jsx("div",{style:{fontSize:"16px",color:"#1D1D1F",fontWeight:"700"},children:"Visualization Hierarchy"}),d.jsxs("span",{style:{fontSize:"11px",color:"#8E8E93",background:"#F2F2F7",padding:"2px 8px",borderRadius:"6px",fontFamily:"inherit"},children:["Lv ",s]})]})}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:h.map(c=>{const f=Ta[c],m=c===e&&r===null;return d.jsxs("button",{onClick:()=>t(c),style:{display:"flex",alignItems:"center",gap:"10px",padding:"9px 12px",width:"100%",textAlign:"left",background:m?"#F2F2F7":"#FAFAFA",border:`1.5px solid ${m?"#1D1D1F":"#E5E5EA"}`,borderRadius:"10px",cursor:"pointer",transition:"border-color 0.15s, background 0.15s",fontFamily:"inherit"},children:[d.jsx("div",{style:{flex:1,minWidth:0},children:d.jsx("div",{style:{fontSize:"12px",color:"#1D1D1F",fontWeight:m?"600":"500",lineHeight:1.2},children:f.label})}),d.jsx("span",{style:{fontSize:"9px",letterSpacing:"0.06em",fontWeight:"500",color:m?"#1D1D1F":"#8E8E93",border:`1px solid ${m?"#1D1D1F":"#D1D1D6"}`,borderRadius:"4px",padding:"1px 5px",flexShrink:0,transition:"color 0.15s, border-color 0.15s"},children:f.badge})]},c)})}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px",paddingTop:"2px"},children:[s<3&&d.jsx("button",{onClick:n,style:{...kn,background:"transparent",border:"1.5px dashed #C7C7CC",color:"#8E8E93"},children:s===1?"+ Add Collection":"+ Add Collection Lv2"}),s>1&&d.jsx("button",{onClick:i,style:{...kn,background:"transparent",border:"1.5px dashed #FFCCC7",color:"#FF6B60"},children:s===2?"− Remove Collection":"− Remove Collection Lv2"})]}),d.jsxs("div",{style:{borderTop:"1px solid #E5E5EA",paddingTop:"8px",display:"flex",flexDirection:"column",gap:"5px"},children:[d.jsx("div",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600",marginBottom:"2px"},children:"Decorations"}),a.map((c,f)=>{const m=c.id===r;return d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[d.jsxs("button",{onClick:()=>o(c.id),style:{flex:1,display:"flex",alignItems:"center",gap:"8px",padding:"7px 10px",textAlign:"left",background:m?"#F2F2F7":"#FAFAFA",border:`1.5px solid ${m?"#1D1D1F":"#E5E5EA"}`,borderRadius:"8px",cursor:"pointer",fontFamily:"inherit",transition:"border-color 0.15s, background 0.15s"},children:[d.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:c.color,flexShrink:0}}),d.jsxs("span",{style:{fontSize:"12px",color:"#1D1D1F",fontWeight:m?"600":"400",flex:1},children:["Decoration ",f+1]}),d.jsx("span",{style:{fontSize:"9px",color:m?"#1D1D1F":"#8E8E93",border:`1px solid ${m?"#1D1D1F":"#D1D1D6"}`,borderRadius:"4px",padding:"1px 5px"},children:"Dec"})]}),d.jsx("button",{onClick:()=>u(c.id),title:"Remove decoration",style:{background:"none",border:"none",cursor:"pointer",color:"#FF3B30",fontSize:"16px",lineHeight:1,padding:"4px 6px",flexShrink:0,fontFamily:"inherit"},children:"×"})]},c.id)}),d.jsx("button",{onClick:l,style:{...kn,background:"transparent",border:"1.5px dashed #C7C7CC",color:"#8E8E93"},children:"+ Add Decoration"})]})]})}const Ma="/phys_tool/assets/alien_flower-zZ3bV18x.glb",wa="/phys_tool/assets/apple-eGn8NxlU.glb",Da="/phys_tool/assets/apple1-DKIWFdlj.glb",Ea="/phys_tool/assets/building_05-Dd9WS5y6.glb",Ra="/phys_tool/assets/cigarette-DLVHKG5C.glb",Ia="/phys_tool/assets/earth%20(2)-C5XamLcy.glb",_a="/phys_tool/assets/flowers-Cclll0mT.glb",Pa="/phys_tool/assets/game-ready_humpback_whale-CUy_iCmW.glb",Ga="/phys_tool/assets/glass_bowl-ORbZUikN.glb",La="/phys_tool/assets/ikea_glass-BpPWnL-f.glb",ja="/phys_tool/assets/lowpoly_pine_trunk-CHGVICL4.glb",Ha="/phys_tool/assets/old_japanese_store__lowpoly-DJHefVd3.glb",ka="/phys_tool/assets/paper_wad-Dr6Z0joQ.glb",Oa="/phys_tool/assets/plastic_water_bottle-Bu0jSrGO.glb",za="/phys_tool/assets/simple_fish_bowl-DqOw7pGz.glb",Na="/phys_tool/assets/slime_rancher_pink_slime--xF-xp-9.glb",Ua="/phys_tool/assets/stradivari_violin-Bcp-R8OH.glb",Ja="/phys_tool/assets/wild_cherry_tree_trunk_prunus_avium-kTaWeuzU.glb",Ka=Object.assign({"./assets/models/alien_flower.glb":Ma,"./assets/models/apple.glb":wa,"./assets/models/apple1.glb":Da,"./assets/models/building_05.glb":Ea,"./assets/models/cigarette.glb":Ra,"./assets/models/earth (2).glb":Ia,"./assets/models/flowers.glb":_a,"./assets/models/game-ready_humpback_whale.glb":Pa,"./assets/models/glass_bowl.glb":Ga,"./assets/models/ikea_glass.glb":La,"./assets/models/lowpoly_pine_trunk.glb":ja,"./assets/models/old_japanese_store__lowpoly.glb":Ha,"./assets/models/paper_wad.glb":ka,"./assets/models/plastic_water_bottle.glb":Oa,"./assets/models/simple_fish_bowl.glb":za,"./assets/models/slime_rancher_pink_slime.glb":Na,"./assets/models/stradivari_violin.glb":Ua,"./assets/models/wild_cherry_tree_trunk_prunus_avium.glb":Ja}),_t=Object.entries(Ka).map(([s,e])=>({name:s.replace(/^.*\//,"").replace(/\.(glb|gltf)$/i,""),url:e})).sort((s,e)=>s.name.localeCompare(e.name));function ni(s){if(s.shape!=="custom")return s;const e=_t.find(t=>t.name===s.customModelName);return e?{...s,customModelUrl:e.url}:!s.customModelUrl||s.customModelUrl.startsWith("blob:")?{...s,shape:"box",customModelUrl:void 0,customModelHasMat:void 0}:s}const si=["#b0b0b0","#4466dd","#cccc44","#cc5533","#3344aa","#44aa66","#aa44cc","#44aaaa"];let Wa=100;function Xa(){return String(Wa++)}const Xe={padding:"4px 5px",verticalAlign:"middle"},ii={background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"6px",color:"#1D1D1F",fontSize:"12px",padding:"3px 6px",outline:"none",width:"100%",fontFamily:"inherit"},On={background:"#F2F2F7",border:"1px solid #D1D1D6",color:"#6C6C70",cursor:"pointer",borderRadius:"5px",padding:"2px 6px",fontSize:"11px",lineHeight:"1.4",fontFamily:"inherit"};function zn({label:s,type:e,varName:t}){const n=e==="numerical",i=n?"#007AFF":"#5E5CE6",a=n?"#EBF3FF":"#F3EBFF",r=n?"#A8CAFF":"#C8A8FF",o=`phys-var/${e}`;return d.jsxs("div",{draggable:!0,onDragStart:l=>{l.dataTransfer.setData("phys-var/name",t),l.dataTransfer.setData(o,"1"),l.dataTransfer.effectAllowed="copy"},title:`Drag to bind ${s}`,style:{display:"inline-flex",alignItems:"center",gap:"5px",background:a,border:`1px solid ${r}`,borderRadius:"7px",padding:"6px 10px",fontSize:"11px",color:i,fontWeight:"600",cursor:"grab",userSelect:"none",whiteSpace:"nowrap"},children:[d.jsx("span",{style:{fontSize:"10px",opacity:.7},children:n?"#":"◈"}),s]})}function Qa({layers:s,onChange:e}){function t(o,l,u){e(s.map(h=>h.id===o?{...h,[l]:u}:h))}function n(){e([...s,{id:Xa(),name:`Layer ${s.length+1}`,percentage:10,color:si[s.length%si.length]}])}function i(o){s.length<=1||e(s.filter(l=>l.id!==o))}function a(o){if(o===0)return;const l=[...s];[l[o-1],l[o]]=[l[o],l[o-1]],e(l)}function r(o){if(o===s.length-1)return;const l=[...s];[l[o],l[o+1]]=[l[o+1],l[o]],e(l)}return d.jsxs("div",{style:{padding:"14px 14px 10px",color:"#1D1D1F",fontSize:"13px",display:"flex",flexDirection:"column",gap:"10px"},children:[d.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[d.jsx("thead",{children:d.jsxs("tr",{style:{borderBottom:"1px solid #E5E5EA"},children:[d.jsx("th",{style:{...Xe,textAlign:"left",color:"#8E8E93",fontWeight:"500",fontSize:"11px"},children:"Name"}),d.jsx("th",{style:{...Xe,textAlign:"left",color:"#8E8E93",fontWeight:"500",fontSize:"11px",width:"46px"},children:"Wt"}),d.jsx("th",{style:{...Xe,textAlign:"left",color:"#8E8E93",fontWeight:"500",fontSize:"11px",width:"30px"},children:"Col"}),d.jsx("th",{style:{width:"52px"}})]})}),d.jsx("tbody",{children:s.map((o,l)=>d.jsxs("tr",{style:{borderBottom:"1px solid #F2F2F7",background:l%2===0?"transparent":"#FAFAFA"},children:[d.jsx("td",{style:Xe,children:d.jsx("input",{type:"text",value:o.name,onChange:u=>t(o.id,"name",u.target.value),style:ii})}),d.jsx("td",{style:Xe,children:d.jsx("input",{type:"number",min:0,max:9999,step:1,value:o.percentage,onChange:u=>t(o.id,"percentage",Number(u.target.value)),style:{...ii,width:"40px"}})}),d.jsx("td",{style:Xe,children:d.jsx("input",{type:"color",value:o.color,onChange:u=>t(o.id,"color",u.target.value),style:{width:"26px",height:"24px",border:"1px solid #D1D1D6",borderRadius:"4px",background:"none",cursor:"pointer",padding:"1px"}})}),d.jsx("td",{style:{...Xe,textAlign:"right"},children:d.jsxs("div",{style:{display:"flex",gap:"2px",justifyContent:"flex-end"},children:[d.jsx("button",{onClick:()=>a(l),disabled:l===0,title:"Move up",style:On,children:"↑"}),d.jsx("button",{onClick:()=>r(l),disabled:l===s.length-1,title:"Move down",style:On,children:"↓"}),d.jsx("button",{onClick:()=>i(o.id),disabled:s.length<=1,title:"Remove",style:{...On,color:"#FF3B30"},children:"×"})]})})]},o.id))})]}),d.jsx("button",{onClick:n,style:{background:"#F2F2F7",border:"1px solid #D1D1D6",color:"#6C6C70",cursor:"pointer",borderRadius:"8px",padding:"6px 12px",fontSize:"12px",fontWeight:"500",alignSelf:"flex-start",fontFamily:"inherit"},children:"+ Add Layer"})]})}function Va(s){return 2*Math.atan(12/s)*180/Math.PI}const nt="/phys_tool/",Be={spatial:`${nt}assets/icons/spatial.png`,shape:`${nt}assets/icons/shape.png`,material:`${nt}assets/icons/material.png`,populations:`${nt}assets/icons/populations.png`,framing:`${nt}assets/icons/framing.png`,labels:`${nt}assets/icons/labels.png`};function Ya({children:s}){return d.jsx("span",{style:{fontSize:"10px",color:"#8E8E93",textTransform:"uppercase",letterSpacing:"0.07em",fontWeight:"600"},children:s})}function V({label:s,children:e,right:t}){return d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsx(Ya,{children:s}),t]}),e]})}function ms({options:s,value:e,onChange:t}){return d.jsx("div",{style:{display:"flex",background:"#EFEFEF",borderRadius:"8px",padding:"2px",gap:"2px"},children:s.map(n=>{const i=e===n.value;return d.jsx("button",{onClick:()=>t(n.value),style:{flex:1,padding:"5px 4px",background:i?"#FFFFFF":"transparent",border:"none",borderRadius:"6px",boxShadow:i?"0 1px 3px rgba(0,0,0,0.12)":"none",color:i?"#1D1D1F":"#6C6C70",cursor:"pointer",fontSize:"12px",fontWeight:i?"600":"400",transition:"all 0.15s",whiteSpace:"nowrap",fontFamily:"inherit"},children:n.label},n.value)})})}const lr={weight:{label:"Weight",type:"numerical"},garbageType:{label:"Garbage Type",type:"categorical"},count:{label:"Count",type:"numerical"}};function gs({children:s,accepts:e,onDrop:t}){const[n,i]=D.useState(!1),a=e==="any"?["phys-var/numerical","phys-var/categorical"]:[`phys-var/${e}`],r=l=>a.some(u=>l.includes(u)),o=e==="categorical"?"#5E5CE6":"#007AFF";return d.jsx("div",{onDragOver:l=>{r(l.dataTransfer.types)&&(l.preventDefault(),i(!0))},onDragLeave:()=>i(!1),onDrop:l=>{r(l.dataTransfer.types)&&(l.preventDefault(),i(!1),t(l.dataTransfer.getData("phys-var/name")))},style:{borderRadius:"8px",outline:n?`2px dashed ${o}`:"2px dashed transparent",outlineOffset:"2px",transition:"outline 0.1s"},children:s})}function bn({label:s,type:e,onClear:t}){const n=e==="numerical",i=n?"#007AFF":"#5E5CE6";return d.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:n?"#EBF3FF":"#F3EBFF",border:`1px solid ${n?"#A8CAFF":"#C8A8FF"}`,borderRadius:"7px",padding:"6px 10px",fontSize:"12px",color:i,fontWeight:"500"},children:[d.jsxs("span",{children:[n?"#":"◈"," ",s]}),d.jsx("button",{onClick:t,style:{background:"none",border:"none",cursor:"pointer",color:"#AEAEB2",padding:"0 0 0 2px",fontSize:"14px",lineHeight:1,fontFamily:"inherit"},children:"×"})]})}const qa={top:"↑",bottom:"↓",left:"←",right:"→"};function Kt({position:s,slot:e,onBind:t,onClear:n}){const[i,a]=D.useState(!1);if(e!==null){const r=lr[e];return d.jsx(bn,{label:r.label,type:r.type,onClear:n})}return d.jsxs("div",{onDragOver:r=>{r.dataTransfer.types.some(l=>l==="phys-var/numerical"||l==="phys-var/categorical")&&(r.preventDefault(),a(!0))},onDragLeave:()=>a(!1),onDrop:r=>{r.dataTransfer.types.some(l=>l==="phys-var/numerical"||l==="phys-var/categorical")&&(r.preventDefault(),a(!1),t(r.dataTransfer.getData("phys-var/name")))},title:`Drag a variable to the ${s} label`,style:{border:`1.5px dashed ${i?"#007AFF":"#D1D1D6"}`,borderRadius:"7px",padding:"4px 8px",fontSize:"10px",color:i?"#007AFF":"#AEAEB2",textAlign:"center",whiteSpace:"nowrap",background:i?"#EBF3FF":"transparent",transition:"all 0.1s",cursor:"default",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px"},children:[d.jsx("span",{children:qa[s]}),d.jsx("span",{style:{textTransform:"capitalize"},children:s})]})}function cr({config:s,onChange:e}){function t(n,i){e({...s,slots:{...s.slots,[n]:i}})}return d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[d.jsx("button",{onClick:()=>e({...s,show:!s.show}),style:{alignSelf:"flex-start",background:s.show?"#EBF3FF":"#F2F2F7",border:`1px solid ${s.show?"#A8CAFF":"#D1D1D6"}`,color:s.show?"#007AFF":"#6C6C70",borderRadius:"6px",padding:"6px 14px",fontSize:"12px",fontWeight:s.show?"600":"400",cursor:"pointer",fontFamily:"inherit",transition:"all 0.15s"},children:s.show?"● Visible":"○ Hidden"}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto 1fr",gridTemplateRows:"auto auto auto",gap:"4px",alignItems:"center",justifyItems:"center"},children:[d.jsx("div",{}),d.jsx(Kt,{position:"top",slot:s.slots.top,onBind:n=>t("top",n),onClear:()=>t("top",null)}),d.jsx("div",{}),d.jsx(Kt,{position:"left",slot:s.slots.left,onBind:n=>t("left",n),onClear:()=>t("left",null)}),d.jsx("div",{style:{width:"18px",height:"18px",background:"#E5E5EA",borderRadius:"4px",flexShrink:0}}),d.jsx(Kt,{position:"right",slot:s.slots.right,onBind:n=>t("right",n),onClear:()=>t("right",null)}),d.jsx("div",{}),d.jsx(Kt,{position:"bottom",slot:s.slots.bottom,onBind:n=>t("bottom",n),onClear:()=>t("bottom",null)}),d.jsx("div",{})]})]})}function Ce({icon:s,title:e,open:t=!1,onToggle:n,children:i,empty:a=!1}){return d.jsxs("div",{style:{border:"1px solid #E5E5EA",borderRadius:"10px",overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},children:[d.jsxs("button",{onClick:n,style:{display:"flex",alignItems:"center",gap:"9px",padding:"9px 12px",width:"100%",textAlign:"left",background:"#F8F8FA",border:"none",borderBottom:t&&!a?"1px solid #E5E5EA":"none",cursor:"pointer",fontFamily:"inherit",transition:"background 0.1s"},children:[d.jsx("img",{src:s,alt:e,style:{width:"24px",height:"24px",borderRadius:"6px",flexShrink:0,objectFit:"cover"}}),d.jsx("span",{style:{flex:1,fontSize:"12px",fontWeight:"600",color:"#1D1D1F",lineHeight:1},children:e}),d.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",transition:"transform 0.15s",display:"inline-block",transform:t?"rotate(0deg)":"rotate(-90deg)"},children:"▾"})]}),t&&d.jsx("div",{style:{padding:"12px",background:"#FFFFFF",display:"flex",flexDirection:"column",gap:"12px"},children:a?d.jsx("div",{style:{fontSize:"11px",color:"#C7C7CC",textAlign:"center",padding:"8px 0",fontStyle:"italic"},children:"Coming soon"}):i})]})}function Os(s){const[e,t]=D.useState(s);return{isOpen:n=>e===n,toggle:n=>t(i=>i===n?"":n)}}function $e({label:s,value:e,onChange:t,min:n,max:i,step:a=.1,lockable:r=!1,axisBindings:o,onAxisBind:l}){const[u,h]=D.useState(!1),[c,f]=D.useState(null),m=["x","y","z"];function v(g,A){if(u&&e[g]!==0){const p=A/e[g];t({x:g==="x"?A:parseFloat((e.x*p).toFixed(3)),y:g==="y"?A:parseFloat((e.y*p).toFixed(3)),z:g==="z"?A:parseFloat((e.z*p).toFixed(3))})}else t({...e,[g]:A})}const x=r?d.jsx("button",{onClick:g=>{g.stopPropagation(),h(!u)},title:u?"Unlock proportions":"Lock proportions (scale all axes together)",style:{background:u?"#007AFF":"transparent",border:`1px solid ${u?"#007AFF":"#D1D1D6"}`,borderRadius:"4px",padding:"1px 7px",lineHeight:"16px",cursor:"pointer",fontSize:"10px",color:u?"#fff":"#AEAEB2",fontFamily:"inherit",transition:"all 0.12s"},children:"⛓"}):void 0;return d.jsx(V,{label:s,right:x,children:d.jsx("div",{style:{display:"flex",gap:"5px"},children:m.map(g=>{const A=(o==null?void 0:o[g])??null,p=c===g;if(A!==null&&l){const y=lr[A];return d.jsx("div",{style:{flex:1},children:d.jsxs("div",{style:{display:"flex",alignItems:"stretch",border:`1px solid ${y.type==="numerical"?"#A8CAFF":"#C8A8FF"}`,borderRadius:"6px",overflow:"hidden",background:y.type==="numerical"?"#EBF3FF":"#F3EBFF"},children:[d.jsx("span",{style:{padding:"4px 5px",background:y.type==="numerical"?"#C5DFFF":"#DFC5FF",color:y.type==="numerical"?"#0055CC":"#5500CC",fontSize:"9px",fontWeight:"700",letterSpacing:"0.03em",display:"flex",alignItems:"center",flexShrink:0},children:g.toUpperCase()}),d.jsxs("span",{style:{flex:1,padding:"4px 4px",fontSize:"10px",color:y.type==="numerical"?"#007AFF":"#5E5CE6",fontWeight:"600",display:"flex",alignItems:"center",overflow:"hidden",whiteSpace:"nowrap"},children:[y.type==="numerical"?"#":"◈"," ",y.label]}),d.jsx("button",{onClick:()=>l(g,null),style:{background:"none",border:"none",cursor:"pointer",color:"#AEAEB2",padding:"0 4px",fontSize:"13px",lineHeight:1,fontFamily:"inherit"},children:"×"})]})},g)}return d.jsx("div",{style:{flex:1},onDragOver:y=>{o&&y.dataTransfer.types.includes("phys-var/numerical")&&(y.preventDefault(),f(g))},onDragLeave:()=>f(null),onDrop:y=>{!o||!y.dataTransfer.types.includes("phys-var/numerical")||(y.preventDefault(),f(null),l==null||l(g,y.dataTransfer.getData("phys-var/name")))},children:d.jsxs("div",{style:{display:"flex",alignItems:"stretch",border:`1px solid ${p?"#007AFF":"#D1D1D6"}`,borderRadius:"6px",overflow:"hidden",outline:p?"1px dashed #007AFF":"none",outlineOffset:"1px"},children:[d.jsx("span",{style:{padding:"4px 5px",background:"#E5E5EA",color:"#6C6C70",fontSize:"9px",fontWeight:"700",letterSpacing:"0.03em",display:"flex",alignItems:"center",flexShrink:0},children:g.toUpperCase()}),d.jsx("input",{type:"number",value:e[g],min:n,max:i,step:a,onChange:y=>v(g,Number(y.target.value)),style:{flex:1,minWidth:0,background:"#F2F2F7",border:"none",padding:"4px 5px",fontSize:"11px",color:"#1D1D1F",outline:"none",fontFamily:"monospace",width:"100%"}})]})},g)})})})}const ur={plastic:"Matte diffuse surface",fluid:"Glass-like, clearcoat + iridescence",metal:"Polished — mirrors the HDRI",emissive:"Self-illuminated, glows with color",original:"Use the model's built-in materials"},dr=["plastic","fluid","metal","emissive"],Za=[{value:"alignment",label:"Alignment"},{value:"scattering",label:"Scattering"},{value:"stacking",label:"Stacking"},{value:"piling",label:"Piling"}],$a=[{value:"city",label:"City"},{value:"warehouse",label:"Warehouse"},{value:"sunset",label:"Sunset"},{value:"dawn",label:"Dawn"},{value:"forest",label:"Forest"},{value:"night",label:"Night"},{value:"studio",label:"Studio"},{value:"apartment",label:"Apartment"}];function Dn({title:s,subtitle:e,color:t}){return d.jsxs("div",{children:[d.jsx("div",{style:{fontSize:"10px",letterSpacing:"0.1em",textTransform:"uppercase",color:"#AEAEB2",marginBottom:"3px",fontWeight:"500"},children:"Properties"}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx("span",{style:{width:"10px",height:"10px",borderRadius:"50%",background:t,flexShrink:0}}),d.jsx("div",{style:{fontSize:"16px",color:"#1D1D1F",fontWeight:"700"},children:s})]}),d.jsx("div",{style:{fontSize:"11px",color:"#8E8E93",marginTop:"2px",paddingLeft:"18px"},children:e})]})}function fr({config:s,onChange:e}){const t=D.useRef(null),n=D.useRef(null),i=s.shape==="custom"&&_t.some(h=>h.name===s.customModelName),a=s.shape==="custom"&&!i,r=s.shape!=="custom"?s.shape:i?`preset:${s.customModelName}`:s.customModelUrl?"__blob__":"box";function o(h){var m;const c=h.target.value;if(c==="__import__"){(m=t.current)==null||m.click();return}if(c==="__blob__")return;if(c.startsWith("preset:")){const v=c.slice(7),x=_t.find(g=>g.name===v);x&&e({shape:"custom",customModelUrl:x.url,customModelHasMat:!0,customModelName:x.name,material:"original"});return}const f=s.material==="original"?"plastic":s.material;e({shape:c,customModelUrl:void 0,customModelHasMat:void 0,customModelName:void 0,material:f})}function l(h){var v;const c=(v=h.target.files)==null?void 0:v[0];if(!c)return;n.current&&URL.revokeObjectURL(n.current);const f=URL.createObjectURL(c);n.current=f;const m=c.name.replace(/\.(glb|gltf)$/i,"");e({shape:"custom",customModelUrl:f,customModelHasMat:!0,customModelName:m,material:"original"}),h.target.value=""}const u={width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"};return d.jsxs(d.Fragment,{children:[d.jsxs("select",{value:r,onChange:o,style:u,children:[d.jsxs("optgroup",{label:"Primitives",children:[d.jsx("option",{value:"box",children:"■  Box"}),d.jsx("option",{value:"sphere",children:"●  Sphere"}),d.jsx("option",{value:"star",children:"★  Star"})]}),_t.length>0&&d.jsx("optgroup",{label:"3D Models",children:_t.map(h=>d.jsx("option",{value:`preset:${h.name}`,children:h.name},h.name))}),d.jsxs("optgroup",{label:"Custom",children:[a&&d.jsxs("option",{value:"__blob__",children:["✎  ",s.customModelName??"Imported file"]}),d.jsx("option",{value:"__import__",children:"↑  Import .glb / .gltf…"})]})]}),d.jsx("input",{ref:t,type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:l})]})}function el({config:s,onChange:e,bindings:t,onBind:n,labelConfig:i,onLabelChange:a}){const r=s.shape==="custom"&&s.customModelHasMat?["original","plastic","fluid","metal","emissive"]:dr,o=Os("Spatial");return d.jsxs(d.Fragment,{children:[d.jsx(Dn,{title:"Mark",subtitle:"individual particle",color:"#F06951"}),d.jsxs(Ce,{icon:Be.spatial,title:"Spatial",open:o.isOpen("Spatial"),onToggle:()=>o.toggle("Spatial"),children:[d.jsx($e,{label:"Position",value:s.position,onChange:l=>e({...s,position:l}),min:-10,max:10,step:.1}),d.jsx($e,{label:"Size",value:s.size,onChange:l=>e({...s,size:l}),min:.1,max:10,step:.1,lockable:!0,axisBindings:{x:t.markSizeX,y:t.markSizeY,z:t.markSizeZ},onAxisBind:(l,u)=>n(l==="x"?"markSizeX":l==="y"?"markSizeY":"markSizeZ",u)}),d.jsx($e,{label:"Orientation",value:s.orientation,onChange:l=>e({...s,orientation:l}),min:-180,max:180,step:1})]}),d.jsx(Ce,{icon:Be.shape,title:"Geometry",open:o.isOpen("Geometry"),onToggle:()=>o.toggle("Geometry"),children:d.jsx(V,{label:"Shape",children:d.jsx(fr,{config:s,onChange:l=>e({...s,...l})})})}),d.jsxs(Ce,{icon:Be.material,title:"Material",open:o.isOpen("Material"),onToggle:()=>o.toggle("Material"),children:[d.jsxs(V,{label:"Type",children:[d.jsx("select",{value:s.material,onChange:l=>e({...s,material:l.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:r.map(l=>d.jsx("option",{value:l,children:l.charAt(0).toUpperCase()+l.slice(1)},l))}),d.jsx("div",{style:{fontSize:"11px",color:"#AEAEB2",lineHeight:1.5},children:ur[s.material]})]}),d.jsx(V,{label:"Color",children:t.markColor==="garbageType"?d.jsx(bn,{label:"Garbage Type",type:"categorical",onClear:()=>n("markColor",null)}):d.jsx(gs,{accepts:"categorical",onDrop:()=>n("markColor","garbageType"),children:d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"2px"},children:[d.jsx("input",{type:"color",value:s.color,onChange:l=>e({...s,color:l.target.value}),style:{width:"36px",height:"32px",border:"1px solid #D1D1D6",borderRadius:"6px",background:"none",cursor:"pointer",padding:"2px"}}),d.jsx("span",{style:{fontSize:"12px",color:"#8E8E93",fontFamily:"monospace"},children:s.color})]})})})]}),d.jsx(Ce,{icon:Be.labels,title:"Labels",open:o.isOpen("Labels"),onToggle:()=>o.toggle("Labels"),children:d.jsx(cr,{config:i,onChange:a})})]})}function ri({config:s,onChange:e,collectionLevel:t,bindings:n,onBind:i,labelConfig:a,onLabelChange:r}){const o=t===2,l=Os("Groups & Populations");return d.jsxs(d.Fragment,{children:[d.jsx(Dn,{title:o?"Collection Lv2":"Collection",subtitle:o?"group of collections":"group of marks",color:o?"#9D9BF4":"#5E5CE6"}),d.jsxs(Ce,{icon:Be.populations,title:"Groups & Populations",open:l.isOpen("Groups & Populations"),onToggle:()=>l.toggle("Groups & Populations"),children:[d.jsx(V,{label:"Arrangement",children:d.jsx("select",{value:s.arrangement,onChange:u=>e({...s,arrangement:u.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:Za.map(u=>d.jsxs("option",{value:u.value,disabled:u.value==="stacking",children:[u.label,u.value==="stacking"?" (coming soon)":""]},u.value))})}),s.arrangement==="alignment"&&d.jsxs(d.Fragment,{children:[d.jsx(V,{label:"Elements",children:(t===1?n.c1AlignCount:n.c2AlignCount)==="count"?d.jsx(bn,{label:"Count",type:"numerical",onClear:()=>i(t===1?"c1AlignCount":"c2AlignCount",null)}):d.jsx(gs,{accepts:"numerical",onDrop:()=>i(t===1?"c1AlignCount":"c2AlignCount","count"),children:d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx("input",{type:"range",min:2,max:20,step:1,value:s.alignCount,onChange:u=>e({...s,alignCount:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),d.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:s.alignCount})]})})}),d.jsx(V,{label:"Axis",children:d.jsx(ms,{options:[{value:"X",label:"→ X axis"},{value:"Y",label:"↑ Y axis"}],value:s.alignAxis,onChange:u=>e({...s,alignAxis:u})})}),d.jsx(V,{label:"Anchor",children:d.jsx(ms,{options:s.alignAxis==="X"?[{value:"start",label:"↑ Top"},{value:"center",label:"◆ Ctr"},{value:"end",label:"↓ Bottom"}]:[{value:"start",label:"← Left"},{value:"center",label:"◆ Ctr"},{value:"end",label:"→ Right"}],value:s.alignAnchor,onChange:u=>e({...s,alignAnchor:u})})}),d.jsxs(V,{label:"Spacing",children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx("input",{type:"range",min:.5,max:o?12:6,step:.1,value:s.alignSpacing,onChange:u=>e({...s,alignSpacing:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),d.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:s.alignSpacing.toFixed(1)})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#C7C7CC"},children:[d.jsx("span",{children:"Tight"}),d.jsx("span",{children:"Spread"})]})]})]}),s.arrangement==="scattering"&&d.jsxs(d.Fragment,{children:[d.jsx(V,{label:"Mark Count",children:d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx("input",{type:"range",min:5,max:600,step:5,value:s.scatterCount,onChange:u=>e({...s,scatterCount:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),d.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:s.scatterCount})]})}),n.scatterSize==="weight"?d.jsx(V,{label:"Box Dimensions",children:d.jsx(bn,{label:"Weight",type:"numerical",onClear:()=>i("scatterSize",null)})}):d.jsx(gs,{accepts:"numerical",onDrop:()=>i("scatterSize","weight"),children:d.jsx($e,{label:"Box Dimensions",value:s.scatterDimensions,onChange:u=>e({...s,scatterDimensions:u}),min:.5,max:20,step:.5})})]}),s.arrangement==="piling"&&d.jsx(V,{label:"Mark Count",children:d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx("input",{type:"range",min:2,max:60,step:1,value:s.pilingCount,onChange:u=>e({...s,pilingCount:Number(u.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),d.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:s.pilingCount})]})}),d.jsx(V,{label:"Color",children:d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[d.jsx("input",{type:"color",value:s.color,onChange:u=>e({...s,color:u.target.value}),style:{width:"36px",height:"32px",border:"1px solid #D1D1D6",borderRadius:"6px",background:"none",cursor:"pointer",padding:"2px"}}),d.jsx("span",{style:{fontSize:"12px",color:"#8E8E93",fontFamily:"monospace"},children:s.color})]})})]}),t===1&&a&&r&&d.jsx(Ce,{icon:Be.labels,title:"Labels",open:l.isOpen("Labels"),onToggle:()=>l.toggle("Labels"),children:d.jsx(cr,{config:a,onChange:r})})]})}function tl({config:s,onChange:e}){const t=s.shape==="custom"&&s.customModelHasMat?["original","plastic","fluid","metal","emissive"]:dr,n=Os("Spatial");return d.jsxs(d.Fragment,{children:[d.jsx(Dn,{title:"Decoration",subtitle:"decorative element",color:"#FF9500"}),d.jsxs(Ce,{icon:Be.spatial,title:"Spatial",open:n.isOpen("Spatial"),onToggle:()=>n.toggle("Spatial"),children:[d.jsx($e,{label:"Position",value:s.position,onChange:i=>e({...s,position:i}),min:-20,max:20,step:.1}),d.jsx($e,{label:"Size",value:s.size,onChange:i=>e({...s,size:i}),min:.1,max:10,step:.1,lockable:!0}),d.jsx($e,{label:"Orientation",value:s.orientation,onChange:i=>e({...s,orientation:i}),min:-180,max:180,step:1})]}),d.jsx(Ce,{icon:Be.shape,title:"Geometry",open:n.isOpen("Geometry"),onToggle:()=>n.toggle("Geometry"),children:d.jsx(V,{label:"Shape",children:d.jsx(fr,{config:s,onChange:i=>e({...s,...i})})})}),d.jsxs(Ce,{icon:Be.material,title:"Material",open:n.isOpen("Material"),onToggle:()=>n.toggle("Material"),children:[d.jsxs(V,{label:"Type",children:[d.jsx("select",{value:s.material,onChange:i=>e({...s,material:i.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:t.map(i=>d.jsx("option",{value:i,children:i.charAt(0).toUpperCase()+i.slice(1)},i))}),d.jsx("div",{style:{fontSize:"11px",color:"#AEAEB2",lineHeight:1.5},children:ur[s.material]})]}),d.jsx(V,{label:"Color",children:d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"2px"},children:[d.jsx("input",{type:"color",value:s.color,onChange:i=>e({...s,color:i.target.value}),style:{width:"36px",height:"32px",border:"1px solid #D1D1D6",borderRadius:"6px",background:"none",cursor:"pointer",padding:"2px"}}),d.jsx("span",{style:{fontSize:"12px",color:"#8E8E93",fontFamily:"monospace"},children:s.color})]})})]})]})}function nl({config:s,onChange:e}){return d.jsxs(d.Fragment,{children:[d.jsx(Dn,{title:"Scene",subtitle:"global framing",color:"#34C759"}),d.jsx("div",{style:{border:"1px solid #E5E5EA",borderRadius:"10px",overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},children:d.jsxs("div",{style:{padding:"12px",background:"#FFFFFF",display:"flex",flexDirection:"column",gap:"12px"},children:[d.jsx(V,{label:"Background",children:d.jsx(ms,{options:[{value:"dark",label:"■ Dark"},{value:"ocean",label:"~ Ocean"}],value:s.background,onChange:t=>e({...s,background:t})})}),d.jsx(V,{label:"Lighting (HDRI)",children:d.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px"},children:$a.map(t=>{const n=s.hdriPreset===t.value;return d.jsx("button",{onClick:()=>e({...s,hdriPreset:t.value}),style:{padding:"5px 6px",background:n?"#EBF3FF":"#F2F2F7",border:`1px solid ${n?"#A8CAFF":"#E5E5EA"}`,borderRadius:"7px",color:n?"#007AFF":"#6C6C70",cursor:"pointer",fontSize:"11px",fontFamily:"inherit",fontWeight:n?"600":"400",transition:"all 0.1s",textAlign:"center"},children:t.label},t.value)})})})]})}),d.jsx(Ce,{icon:Be.framing,title:"Framing",children:d.jsxs(V,{label:"Camera",children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"2px"},children:[d.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",fontWeight:"500"},children:[s.focalLength,"mm"]}),d.jsxs("span",{style:{fontSize:"11px",color:"#AEAEB2"},children:[Va(s.focalLength).toFixed(0),"° fov"]})]}),d.jsx("input",{type:"range",min:14,max:180,step:1,value:s.focalLength,onChange:t=>e({...s,focalLength:Number(t.target.value)}),style:{width:"100%",accentColor:"#34C759",cursor:"pointer"}}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#AEAEB2",marginTop:"2px"},children:[d.jsx("span",{children:"14mm wide"}),d.jsx("span",{children:"180mm tele"})]})]})})]})}function sl({activeElement:s,markConfig:e,onMarkChange:t,collection1Config:n,onCollection1Change:i,collection2Config:a,onCollection2Change:r,sceneConfig:o,onSceneChange:l,bindings:u,onBind:h,markLabelConfig:c,onMarkLabelChange:f,colLabelConfig:m,onColLabelChange:v,activeDecorationId:x,decorations:g,onDecorationChange:A,layers:p,onOpenData:y}){const b=x!==null?g.find(B=>B.id===x)??null:null;return d.jsxs("div",{style:{padding:"18px 14px",color:"#1D1D1F",fontSize:"13px",display:"flex",flexDirection:"column",gap:"10px",height:"100%",boxSizing:"border-box",overflowY:"auto"},children:[b!==null?d.jsx(tl,{config:b,onChange:A}):s==="mark"?d.jsx(el,{config:e,onChange:t,bindings:u,onBind:h,labelConfig:c,onLabelChange:f}):s==="collection1"?d.jsx(ri,{config:n,onChange:i,collectionLevel:1,bindings:u,onBind:h,labelConfig:m,onLabelChange:v}):s==="collection2"?d.jsx(ri,{config:a,onChange:r,collectionLevel:2,bindings:u,onBind:h}):s==="scene"?d.jsx(nl,{config:o,onChange:l}):null,d.jsxs("div",{style:{marginTop:"auto",borderTop:"1px solid #E5E5EA",paddingTop:"12px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[d.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600"},children:"Data Variables"}),d.jsx("button",{onClick:y,style:{background:"none",border:"1px solid #D1D1D6",borderRadius:"6px",padding:"3px 8px",fontSize:"11px",color:"#6C6C70",cursor:"pointer",fontFamily:"inherit"},children:"Open Data"})]}),d.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:[d.jsx(zn,{label:"Weight",type:"numerical",varName:"weight"}),d.jsx(zn,{label:"Garbage Type",type:"categorical",varName:"garbageType"}),d.jsx(zn,{label:"Count",type:"numerical",varName:"count"})]})]}),d.jsx("div",{style:{fontSize:"10px",color:"#C7C7CC",lineHeight:1.7,paddingBottom:"4px"},children:"Drag to orbit · Scroll to zoom · Right-drag to pan"})]})}var il=Object.defineProperty,rl=(s,e,t)=>e in s?il(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,oi=(s,e,t)=>(rl(s,typeof e!="symbol"?e+"":e,t),t);const ol=(()=>{const s={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new _},up:{value:new _(0,1,0)}},vertexShader:`
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
      #include <${Yi>=154?"colorspace_fragment":"encodings_fragment"}>

      }
    `},e=new Ds({name:"SkyShader",fragmentShader:s.fragmentShader,vertexShader:s.vertexShader,uniforms:Fo.clone(s.uniforms),side:Es,depthWrite:!1});class t extends et{constructor(){super(new Rs(1,1,1),e)}}return oi(t,"SkyShader",s),oi(t,"material",e),t})();function Bn(s){if(typeof TextDecoder<"u")return new TextDecoder().decode(s);let e="";for(let t=0,n=s.length;t<n;t++)e+=String.fromCharCode(s[t]);try{return decodeURIComponent(escape(e))}catch{return e}}const Ze="srgb",Re="srgb-linear",ai=3001,al=3e3;class zs extends Is{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new fl(t)}),this.register(function(t){return new hl(t)}),this.register(function(t){return new Bl(t)}),this.register(function(t){return new Cl(t)}),this.register(function(t){return new Tl(t)}),this.register(function(t){return new ml(t)}),this.register(function(t){return new gl(t)}),this.register(function(t){return new xl(t)}),this.register(function(t){return new Al(t)}),this.register(function(t){return new dl(t)}),this.register(function(t){return new vl(t)}),this.register(function(t){return new pl(t)}),this.register(function(t){return new bl(t)}),this.register(function(t){return new yl(t)}),this.register(function(t){return new cl(t)}),this.register(function(t){return new Fl(t)}),this.register(function(t){return new Sl(t)})}load(e,t,n,i){const a=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const u=Lt.extractUrlBase(e);r=Lt.resolveURL(u,this.path)}else r=Lt.extractUrlBase(e);this.manager.itemStart(e);const o=function(u){i?i(u):console.error(u),a.manager.itemError(e),a.manager.itemEnd(e)},l=new zt(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{a.parse(u,r,function(h){t(h),a.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let a;const r={},o={};if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Bn(new Uint8Array(e.slice(0,4)))===hr){try{r[z.KHR_BINARY_GLTF]=new Ml(e)}catch(h){i&&i(h);return}a=JSON.parse(r[z.KHR_BINARY_GLTF].content)}else a=JSON.parse(Bn(new Uint8Array(e)));else a=e;if(a.asset===void 0||a.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Ol(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,r[h.name]=!0}if(a.extensionsUsed)for(let u=0;u<a.extensionsUsed.length;++u){const h=a.extensionsUsed[u],c=a.extensionsRequired||[];switch(h){case z.KHR_MATERIALS_UNLIT:r[h]=new ul;break;case z.KHR_DRACO_MESH_COMPRESSION:r[h]=new wl(a,this.dracoLoader);break;case z.KHR_TEXTURE_TRANSFORM:r[h]=new Dl;break;case z.KHR_MESH_QUANTIZATION:r[h]=new El;break;default:c.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,a){n.parse(e,t,i,a)})}}function ll(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const z={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class cl{constructor(e){this.parser=e,this.name=z.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const a=t.json,l=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let u;const h=new ne(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Re);const c=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new wo(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Mo(h),u.distance=c;break;case"spot":u=new So(h),u.distance=c,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),u.decay=2,we(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(u),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,a=n.json.nodes[e],o=(a.extensions&&a.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class ul{constructor(){this.name=z.KHR_MATERIALS_UNLIT}getMaterialType(){return Oe}extendParams(e,t,n){const i=[];e.color=new ne(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const r=a.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Re),e.opacity=r[3]}a.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",a.baseColorTexture,Ze))}return Promise.all(i)}}class dl{constructor(e){this.parser=e,this.name=z.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class fl{constructor(e){this.parser=e,this.name=z.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:he}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ye(o,o)}return Promise.all(a)}}class hl{constructor(e){this.parser=e,this.name=z.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:he}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class pl{constructor(e){this.parser=e,this.name=z.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:he}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(a)}}class ml{constructor(e){this.parser=e,this.name=z.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:he}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const o=r.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Re)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&a.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Ze)),r.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(a)}}class gl{constructor(e){this.parser=e,this.name=z.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:he}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&a.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(a)}}class xl{constructor(e){this.parser=e,this.name=z.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:he}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&a.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new ne().setRGB(o[0],o[1],o[2],Re),Promise.all(a)}}class Al{constructor(e){this.parser=e,this.name=z.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:he}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class vl{constructor(e){this.parser=e,this.name=z.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:he}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&a.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new ne().setRGB(o[0],o[1],o[2],Re),r.specularColorTexture!==void 0&&a.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Ze)),Promise.all(a)}}class yl{constructor(e){this.parser=e,this.name=z.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:he}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&a.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(a)}}class bl{constructor(e){this.parser=e,this.name=z.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:he}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&a.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(a)}}class Bl{constructor(e){this.parser=e,this.name=z.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const a=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,r)}}class Cl{constructor(e){this.parser=e,this.name=z.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=i.images[r.source];let l=n.textureLoader;if(o.uri){const u=n.options.manager.getHandler(o.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Tl{constructor(e){this.parser=e,this.name=z.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=i.images[r.source];let l=n.textureLoader;if(o.uri){const u=n.options.manager.getHandler(o.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Fl{constructor(e){this.name=z.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],a=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){const l=i.byteOffset||0,u=i.byteLength||0,h=i.count,c=i.byteStride,f=new Uint8Array(o,l,u);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,c,f,i.mode,i.filter).then(function(m){return m.buffer}):r.ready.then(function(){const m=new ArrayBuffer(h*c);return r.decodeGltfBuffer(new Uint8Array(m),h,c,f,i.mode,i.filter),m})})}else return null}}class Sl{constructor(e){this.name=z.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const u of i.primitives)if(u.mode!==pe.TRIANGLES&&u.mode!==pe.TRIANGLE_STRIP&&u.mode!==pe.TRIANGLE_FAN&&u.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],l={};for(const u in r)o.push(this.parser.getDependency("accessor",r[u]).then(h=>(l[u]=h,l[u])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(u=>{const h=u.pop(),c=h.isGroup?h.children:[h],f=u[0].count,m=[];for(const v of c){const x=new q,g=new _,A=new Fn,p=new _(1,1,1),y=new Do(v.geometry,v.material,f);for(let b=0;b<f;b++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&A.fromBufferAttribute(l.ROTATION,b),l.SCALE&&p.fromBufferAttribute(l.SCALE,b),y.setMatrixAt(b,x.compose(g,A,p));for(const b in l)if(b==="_COLOR_0"){const B=l[b];y.instanceColor=new Eo(B.array,B.itemSize,B.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&v.geometry.setAttribute(b,l[b]);_s.prototype.copy.call(y,v),this.parser.assignFinalMaterial(y),m.push(y)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}}const hr="glTF",Ct=12,li={JSON:1313821514,BIN:5130562};class Ml{constructor(e){this.name=z.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ct);if(this.header={magic:Bn(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hr)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Ct,i=new DataView(e,Ct);let a=0;for(;a<n;){const r=i.getUint32(a,!0);a+=4;const o=i.getUint32(a,!0);if(a+=4,o===li.JSON){const l=new Uint8Array(e,Ct+a,r);this.content=Bn(l)}else if(o===li.BIN){const l=Ct+a;this.body=e.slice(l,l+r)}a+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class wl{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=z.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,a=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},u={};for(const h in r){const c=xs[h]||h.toLowerCase();o[c]=r[h]}for(const h in e.attributes){const c=xs[h]||h.toLowerCase();if(r[h]!==void 0){const f=n.accessors[e.attributes[h]],m=gt[f.componentType];u[c]=m.name,l[c]=f.normalized===!0}}return t.getDependency("bufferView",a).then(function(h){return new Promise(function(c,f){i.decodeDracoFile(h,function(m){for(const v in m.attributes){const x=m.attributes[v],g=l[v];g!==void 0&&(x.normalized=g)}c(m)},o,u,Re,f)})})}}class Dl{constructor(){this.name=z.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class El{constructor(){this.name=z.KHR_MESH_QUANTIZATION}}class pr extends Zo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,a=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[a+r];return t}interpolate_(e,t,n,i){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,u=o*3,h=i-t,c=(n-t)/h,f=c*c,m=f*c,v=e*u,x=v-u,g=-2*m+3*f,A=m-f,p=1-g,y=A-f+c;for(let b=0;b!==o;b++){const B=r[x+b+o],C=r[x+b+l]*h,F=r[v+b+o],M=r[v+b]*h;a[b]=p*B+y*C+g*F+A*M}return a}}const Rl=new Fn;class Il extends pr{interpolate_(e,t,n,i){const a=super.interpolate_(e,t,n,i);return Rl.fromArray(a).normalize().toArray(a),a}}const pe={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},gt={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ci={9728:Z,9729:te,9984:Lo,9985:Go,9986:Po,9987:qi},ui={33071:Ke,33648:jo,10497:Ue},Nn={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xs={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...Yi>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Pe={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_l={CUBICSPLINE:void 0,LINEAR:Zi,STEP:Yo},Un={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Pl(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new De({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vn})),s.DefaultMaterial}function Qe(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function we(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Gl(s,e,t){let n=!1,i=!1,a=!1;for(let u=0,h=e.length;u<h;u++){const c=e[u];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(i=!0),c.COLOR_0!==void 0&&(a=!0),n&&i&&a)break}if(!n&&!i&&!a)return Promise.resolve(s);const r=[],o=[],l=[];for(let u=0,h=e.length;u<h;u++){const c=e[u];if(n){const f=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):s.attributes.position;r.push(f)}if(i){const f=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):s.attributes.normal;o.push(f)}if(a){const f=c.COLOR_0!==void 0?t.getDependency("accessor",c.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(u){const h=u[0],c=u[1],f=u[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=c),a&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Ll(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jl(s){let e;const t=s.extensions&&s.extensions[z.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jn(t.attributes):e=s.indices+":"+Jn(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Jn(s.targets[n]);return e}function Jn(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function As(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Hl(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const kl=new q;class Ol{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ll,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,a=-1;typeof navigator<"u"&&typeof navigator.userAgent<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,a=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&a<98?this.textureLoader=new Ro(this.options.manager):this.textureLoader=new Io(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zt(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return Qe(a,o,i),we(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,a=t.length;i<a;i++){const r=t[i].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let i=0,a=e.length;i<a;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),a=(r,o)=>{const l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(const[u,h]of r.children.entries())a(h,o.children[u])};return a(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const a=e(t[i]);a&&n.push(a)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":i=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(a,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[z.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(a,r){n.load(Lt.resolveURL(t.uri,i.path),a,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=Nn[i.type],o=gt[i.componentType],l=i.normalized===!0,u=new o(i.count*r);return Promise.resolve(new Y(u,r,l))}const a=[];return i.bufferView!==void 0?a.push(this.getDependency("bufferView",i.bufferView)):a.push(null),i.sparse!==void 0&&(a.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(a).then(function(r){const o=r[0],l=Nn[i.type],u=gt[i.componentType],h=u.BYTES_PER_ELEMENT,c=h*l,f=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,v=i.normalized===!0;let x,g;if(m&&m!==c){const A=Math.floor(f/m),p="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+A+":"+i.count;let y=t.cache.get(p);y||(x=new u(o,A*m,i.count*m/h),y=new _o(x,m/h),t.cache.add(p,y)),g=new qo(y,l,f%m/h,v)}else o===null?x=new u(i.count*l):x=new u(o,f,i.count*l),g=new Y(x,l,v);if(i.sparse!==void 0){const A=Nn.SCALAR,p=gt[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,B=new p(r[1],y,i.sparse.count*A),C=new u(r[2],b,i.sparse.count*l);o!==null&&(g=new Y(g.array.slice(),g.itemSize,g.normalized));for(let F=0,M=B.length;F<M;F++){const T=B[F];if(g.setX(T,C[F*l]),l>=2&&g.setY(T,C[F*l+1]),l>=3&&g.setZ(T,C[F*l+2]),l>=4&&g.setW(T,C[F*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,a=t.textures[e].source,r=t.images[a];let o=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,a,o)}loadTextureImage(e,t,n){const i=this,a=this.json,r=a.textures[e],o=a.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(a.samplers||{})[r.sampler]||{};return h.magFilter=ci[f.magFilter]||te,h.minFilter=ci[f.minFilter]||qi,h.wrapS=ui[f.wrapS]||Ue,h.wrapT=ui[f.wrapT]||Ue,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const n=this,i=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(c=>c.clone());const r=i.images[e],o=self.URL||self.webkitURL;let l=r.uri||"",u=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(c){u=!0;const f=new Blob([c],{type:r.mimeType});return l=o.createObjectURL(f),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(c){return new Promise(function(f,m){let v=f;t.isImageBitmapLoader===!0&&(v=function(x){const g=new qs(x);g.needsUpdate=!0,f(g)}),t.load(Lt.resolveURL(c,a.path),v,void 0,m)})}).then(function(c){return u===!0&&o.revokeObjectURL(l),we(c,r),c.userData.mimeType=r.mimeType||Hl(r.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),c});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const a=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),a.extensions[z.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[z.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=a.associations.get(r);r=a.extensions[z.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),a.associations.set(r,l)}}return i!==void 0&&(typeof i=="number"&&(i=i===ai?Ze:Re),"colorSpace"in r?r.colorSpace=i:r.encoding=i===Ze?ai:al),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Ho,Gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new ko,Gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||a||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),a&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return De}loadMaterial(e){const t=this,n=this.json,i=this.extensions,a=n.materials[e];let r;const o={},l=a.extensions||{},u=[];if(l[z.KHR_MATERIALS_UNLIT]){const c=i[z.KHR_MATERIALS_UNLIT];r=c.getMaterialType(),u.push(c.extendParams(o,a,t))}else{const c=a.pbrMetallicRoughness||{};if(o.color=new ne(1,1,1),o.opacity=1,Array.isArray(c.baseColorFactor)){const f=c.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Re),o.opacity=f[3]}c.baseColorTexture!==void 0&&u.push(t.assignTexture(o,"map",c.baseColorTexture,Ze)),o.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,o.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(o,"metalnessMap",c.metallicRoughnessTexture)),u.push(t.assignTexture(o,"roughnessMap",c.metallicRoughnessTexture))),r=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=Sn);const h=a.alphaMode||Un.OPAQUE;if(h===Un.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Un.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&r!==Oe&&(u.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new ye(1,1),a.normalTexture.scale!==void 0)){const c=a.normalTexture.scale;o.normalScale.set(c,c)}if(a.occlusionTexture!==void 0&&r!==Oe&&(u.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&r!==Oe){const c=a.emissiveFactor;o.emissive=new ne().setRGB(c[0],c[1],c[2],Re)}return a.emissiveTexture!==void 0&&r!==Oe&&u.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,Ze)),Promise.all(u).then(function(){const c=new r(o);return a.name&&(c.name=a.name),we(c,a),t.associations.set(c,{materials:e}),a.extensions&&Qe(i,c,a),c})}createUniqueName(e){const t=Oo.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function a(o){return n[z.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return di(l,o,t)})}const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o],h=jl(u),c=i[h];if(c)r.push(c.promise);else{let f;u.extensions&&u.extensions[z.KHR_DRACO_MESH_COMPRESSION]?f=a(u):f=di(new Te,u,t),i[h]={primitive:u,promise:f},r.push(f)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,a=n.meshes[e],r=a.primitives,o=[];for(let l=0,u=r.length;l<u;l++){const h=r[l].material===void 0?Pl(this.cache):this.getDependency("material",r[l].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(l){const u=l.slice(0,l.length-1),h=l[l.length-1],c=[];for(let m=0,v=h.length;m<v;m++){const x=h[m],g=r[m];let A;const p=u[m];if(g.mode===pe.TRIANGLES||g.mode===pe.TRIANGLE_STRIP||g.mode===pe.TRIANGLE_FAN||g.mode===void 0)A=a.isSkinnedMesh===!0?new zo(x,p):new et(x,p),A.isSkinnedMesh===!0&&A.normalizeSkinWeights(),g.mode===pe.TRIANGLE_STRIP?A.geometry=Ys(A.geometry,$o):g.mode===pe.TRIANGLE_FAN&&(A.geometry=Ys(A.geometry,ea));else if(g.mode===pe.LINES)A=new No(x,p);else if(g.mode===pe.LINE_STRIP)A=new Uo(x,p);else if(g.mode===pe.LINE_LOOP)A=new Jo(x,p);else if(g.mode===pe.POINTS)A=new Ko(x,p);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(A.geometry.morphAttributes).length>0&&Ll(A,a),A.name=t.createUniqueName(a.name||"mesh_"+e),we(A,a),g.extensions&&Qe(i,A,g),t.assignFinalMaterial(A),c.push(A)}for(let m=0,v=c.length;m<v;m++)t.associations.set(c[m],{meshes:e,primitives:m});if(c.length===1)return a.extensions&&Qe(i,c[0],a),c[0];const f=new Ln;a.extensions&&Qe(i,f,a),t.associations.set(f,{meshes:e});for(let m=0,v=c.length;m<v;m++)f.add(c[m]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ps(jt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Wo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),we(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,a=t.joints.length;i<a;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const a=i.pop(),r=i,o=[],l=[];for(let u=0,h=r.length;u<h;u++){const c=r[u];if(c){o.push(c);const f=new q;a!==null&&f.fromArray(a.array,u*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Xo(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],a=i.name?i.name:"animation_"+e,r=[],o=[],l=[],u=[],h=[];for(let c=0,f=i.channels.length;c<f;c++){const m=i.channels[c],v=i.samplers[m.sampler],x=m.target,g=x.node,A=i.parameters!==void 0?i.parameters[v.input]:v.input,p=i.parameters!==void 0?i.parameters[v.output]:v.output;x.node!==void 0&&(r.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",A)),l.push(this.getDependency("accessor",p)),u.push(v),h.push(x))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l),Promise.all(u),Promise.all(h)]).then(function(c){const f=c[0],m=c[1],v=c[2],x=c[3],g=c[4],A=[];for(let p=0,y=f.length;p<y;p++){const b=f[p],B=m[p],C=v[p],F=x[p],M=g[p];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const T=n._createAnimationTracks(b,B,C,F,M);if(T)for(let S=0;S<T.length;S++)A.push(T[S])}return new Qo(a,void 0,A)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(a){const r=n._getNodeRef(n.meshCache,i.mesh,a);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,u=i.weights.length;l<u;l++)o.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],a=n._loadNodeShallow(e),r=[],o=i.children||[];for(let u=0,h=o.length;u<h;u++)r.push(n.getDependency("node",o[u]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([a,Promise.all(r),l]).then(function(u){const h=u[0],c=u[1],f=u[2];f!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(f,kl)});for(let m=0,v=c.length;m<v;m++)h.add(c[m]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],r=a.name?i.createUniqueName(a.name):"",o=[],l=i._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&o.push(l),a.camera!==void 0&&o.push(i.getDependency("camera",a.camera).then(function(u){return i._getNodeRef(i.cameraCache,a.camera,u)})),i._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){o.push(u)}),this.nodeCache[e]=Promise.all(o).then(function(u){let h;if(a.isBone===!0?h=new Vo:u.length>1?h=new Ln:u.length===1?h=u[0]:h=new _s,h!==u[0])for(let c=0,f=u.length;c<f;c++)h.add(u[c]);if(a.name&&(h.userData.name=a.name,h.name=r),we(h,a),a.extensions&&Qe(n,h,a),a.matrix!==void 0){const c=new q;c.fromArray(a.matrix),h.applyMatrix4(c)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,a=new Ln;n.name&&(a.name=i.createUniqueName(n.name)),we(a,n),n.extensions&&Qe(t,a,n);const r=n.nodes||[],o=[];for(let l=0,u=r.length;l<u;l++)o.push(i.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let h=0,c=l.length;h<c;h++)a.add(l[h]);const u=h=>{const c=new Map;for(const[f,m]of i.associations)(f instanceof Gn||f instanceof qs)&&c.set(f,m);return h.traverse(f=>{const m=i.associations.get(f);m!=null&&c.set(f,m)}),c};return i.associations=u(a),a})}_createAnimationTracks(e,t,n,i,a){const r=[],o=e.name?e.name:e.uuid,l=[];Pe[a.path]===Pe.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let u;switch(Pe[a.path]){case Pe.weights:u=$s;break;case Pe.rotation:u=ei;break;case Pe.position:case Pe.scale:u=Zs;break;default:switch(n.itemSize){case 1:u=$s;break;case 2:case 3:default:u=Zs;break}break}const h=i.interpolation!==void 0?_l[i.interpolation]:Zi,c=this._getArrayFromAccessor(n);for(let f=0,m=l.length;f<m;f++){const v=new u(l[f]+"."+Pe[a.path],t.array,c,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),r.push(v)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=As(t.constructor),i=new Float32Array(t.length);for(let a=0,r=t.length;a<r;a++)i[a]=t[a]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ei?Il:pr;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function zl(s,e,t){const n=e.attributes,i=new oe;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,u=o.max;if(l!==void 0&&u!==void 0){if(i.set(new _(l[0],l[1],l[2]),new _(u[0],u[1],u[2])),o.normalized){const h=As(gt[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const o=new _,l=new _;for(let u=0,h=a.length;u<h;u++){const c=a[u];if(c.POSITION!==void 0){const f=t.json.accessors[c.POSITION],m=f.min,v=f.max;if(m!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(v[2]))),f.normalized){const x=As(gt[f.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const r=new $i;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=r}function di(s,e,t){const n=e.attributes,i=[];function a(r,o){return t.getDependency("accessor",r).then(function(l){s.setAttribute(o,l)})}for(const r in n){const o=xs[r]||r.toLowerCase();o in s.attributes||i.push(a(n[r],o))}if(e.indices!==void 0&&!s.index){const r=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(r)}return we(s,e),zl(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Gl(s,e.targets,t):s})}const Kn=new WeakMap;class Nl extends Is{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const a=new zt(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,r=>{const o={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(r,o).then(t).catch(i)},n,i)}decodeDracoFile(e,t,n,i){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n};this.decodeGeometry(e,a).then(t)}decodeGeometry(e,t){for(const l in t.attributeTypes){const u=t.attributeTypes[l];u.BYTES_PER_ELEMENT!==void 0&&(t.attributeTypes[l]=u.name)}const n=JSON.stringify(t);if(Kn.has(e)){const l=Kn.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const a=this.workerNextTaskID++,r=e.byteLength,o=this._getWorker(a,r).then(l=>(i=l,new Promise((u,h)=>{i._callbacks[a]={resolve:u,reject:h},i.postMessage({type:"decode",id:a,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&a&&this._releaseTask(i,a)}),Kn.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new Te;e.index&&t.setIndex(new Y(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],a=i.name,r=i.array,o=i.itemSize;t.setAttribute(a,new Y(r,o))}return t}_loadLibrary(e,t){const n=new zt(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,a)=>{n.load(e,i,void 0,a)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const a=Ul.toString(),r=["/* draco decoder */",i,"","/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(a){const r=a.data;switch(r.type){case"decode":i._callbacks[r.id].resolve(r);break;case"error":i._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,a){return i._taskLoad>a._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function Ul(){let s,e;onmessage=function(r){const o=r.data;switch(o.type){case"init":s=o.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(c){h({draco:c})},DracoDecoderModule(s)});break;case"decode":const l=o.buffer,u=o.taskConfig;e.then(h=>{const c=h.draco,f=new c.Decoder,m=new c.DecoderBuffer;m.Init(new Int8Array(l),l.byteLength);try{const v=t(c,f,m,u),x=v.attributes.map(g=>g.array.buffer);v.index&&x.push(v.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:v},x)}catch(v){console.error(v),self.postMessage({type:"error",id:o.id,error:v.message})}finally{c.destroy(m),c.destroy(f)}});break}};function t(r,o,l,u){const h=u.attributeIDs,c=u.attributeTypes;let f,m;const v=o.GetEncodedGeometryType(l);if(v===r.TRIANGULAR_MESH)f=new r.Mesh,m=o.DecodeBufferToMesh(l,f);else if(v===r.POINT_CLOUD)f=new r.PointCloud,m=o.DecodeBufferToPointCloud(l,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!m.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+m.error_msg());const x={index:null,attributes:[]};for(const g in h){const A=self[c[g]];let p,y;if(u.useUniqueIDs)y=h[g],p=o.GetAttributeByUniqueId(f,y);else{if(y=o.GetAttributeId(f,r[h[g]]),y===-1)continue;p=o.GetAttribute(f,y)}x.attributes.push(i(r,o,f,g,A,p))}return v===r.TRIANGULAR_MESH&&(x.index=n(r,o,f)),r.destroy(f),x}function n(r,o,l){const h=l.num_faces()*3,c=h*4,f=r._malloc(c);o.GetTrianglesUInt32Array(l,c,f);const m=new Uint32Array(r.HEAPF32.buffer,f,h).slice();return r._free(f),{array:m,itemSize:1}}function i(r,o,l,u,h,c){const f=c.num_components(),v=l.num_points()*f,x=v*h.BYTES_PER_ELEMENT,g=a(r,h),A=r._malloc(x);o.GetAttributeDataArrayForAllPoints(l,c,g,x,A);const p=new h(r.HEAPF32.buffer,A,v).slice();return r._free(A),{name:u,array:p,itemSize:f}}function a(r,o){switch(o){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}let Wt;const Wn=()=>{if(Wt)return Wt;const s="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",e="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",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,253,3,1,2,34,4,106,6,5,11,8,7,20,13,33,12,16,128,9,116,64,19,113,127,15,10,21,22,14,255,66,24,54,136,107,18,23,192,26,114,118,132,17,77,101,130,144,27,87,131,44,45,74,156,154,70,167]);if(typeof WebAssembly!="object")return{supported:!1};let i=s;WebAssembly.validate(t)&&(i=e);let a;const r=WebAssembly.instantiate(o(i),{}).then(c=>{a=c.instance,a.exports.__wasm_call_ctors()});function o(c){const f=new Uint8Array(c.length);for(let v=0;v<c.length;++v){const x=c.charCodeAt(v);f[v]=x>96?x-71:x>64?x-65:x>47?x+4:x>46?63:62}let m=0;for(let v=0;v<c.length;++v)f[m++]=f[v]<60?n[f[v]]:(f[v]-60)*64+f[++v];return f.buffer.slice(0,m)}function l(c,f,m,v,x,g){const A=a.exports.sbrk,p=m+3&-4,y=A(p*v),b=A(x.length),B=new Uint8Array(a.exports.memory.buffer);B.set(x,b);const C=c(y,m,v,b,x.length);if(C===0&&g&&g(y,p,v),f.set(B.subarray(y,y+m*v)),A(y-A(0)),C!==0)throw new Error(`Malformed buffer data: ${C}`)}const u={0:"",1:"meshopt_decodeFilterOct",2:"meshopt_decodeFilterQuat",3:"meshopt_decodeFilterExp",NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={0:"meshopt_decodeVertexBuffer",1:"meshopt_decodeIndexBuffer",2:"meshopt_decodeIndexSequence",ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"};return Wt={ready:r,supported:!0,decodeVertexBuffer(c,f,m,v,x){l(a.exports.meshopt_decodeVertexBuffer,c,f,m,v,a.exports[u[x]])},decodeIndexBuffer(c,f,m,v){l(a.exports.meshopt_decodeIndexBuffer,c,f,m,v)},decodeIndexSequence(c,f,m,v){l(a.exports.meshopt_decodeIndexSequence,c,f,m,v)},decodeGltfBuffer(c,f,m,v,x,g){l(a.exports[h[x]],c,f,m,v,a.exports[u[g]])}},Wt};let Xt=null,mr="https://www.gstatic.com/draco/versioned/decoders/1.5.5/";function gr(s=!0,e=!0,t){return n=>{t&&t(n),s&&(Xt||(Xt=new Nl),Xt.setDecoderPath(typeof s=="string"?s:mr),n.setDRACOLoader(Xt)),e&&n.setMeshoptDecoder(typeof Wn=="function"?Wn():Wn)}}const bt=(s,e,t,n)=>Nt(zs,s,gr(e,t,n));bt.preload=(s,e,t,n)=>Nt.preload(zs,s,gr(e,t,n));bt.clear=s=>Nt.clear(zs,s);bt.setDecoderPath=s=>{mr=s};const xr=0,Jl=1,Ar=2,fi=2,Xn=1.25,hi=1,Je=6*4+4+4,En=65535,Kl=Math.pow(2,-24),Qn=Symbol("SKIP_GENERATION");function vr(s){return s.index?s.index.count:s.attributes.position.count}function Bt(s){return vr(s)/3}function yr(s,e=ArrayBuffer){return s>65535?new Uint32Array(new e(4*s)):new Uint16Array(new e(2*s))}function Wl(s,e){if(!s.index){const t=s.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=yr(t,n);s.setIndex(new Y(i,1));for(let a=0;a<t;a++)i[a]=a}}function br(s,e){const t=Bt(s),n=e||s.drawRange,i=n.start/3,a=(n.start+n.count)/3,r=Math.max(0,i),o=Math.min(t,a)-r;return[{offset:Math.floor(r),count:Math.floor(o)}]}function Br(s,e){if(!s.groups||!s.groups.length)return br(s,e);const t=[],n=new Set,i=e||s.drawRange,a=i.start/3,r=(i.start+i.count)/3;for(const l of s.groups){const u=l.start/3,h=(l.start+l.count)/3;n.add(Math.max(a,u)),n.add(Math.min(r,h))}const o=Array.from(n.values()).sort((l,u)=>l-u);for(let l=0;l<o.length-1;l++){const u=o[l],h=o[l+1];t.push({offset:Math.floor(u),count:Math.floor(h-u)})}return t}function Xl(s,e){const t=Bt(s),n=Br(s,e).sort((r,o)=>r.offset-o.offset),i=n[n.length-1];i.count=Math.min(t-i.offset,i.count);let a=0;return n.forEach(({count:r})=>a+=r),t!==a}function Vn(s,e,t,n,i){let a=1/0,r=1/0,o=1/0,l=-1/0,u=-1/0,h=-1/0,c=1/0,f=1/0,m=1/0,v=-1/0,x=-1/0,g=-1/0;for(let A=e*6,p=(e+t)*6;A<p;A+=6){const y=s[A+0],b=s[A+1],B=y-b,C=y+b;B<a&&(a=B),C>l&&(l=C),y<c&&(c=y),y>v&&(v=y);const F=s[A+2],M=s[A+3],T=F-M,S=F+M;T<r&&(r=T),S>u&&(u=S),F<f&&(f=F),F>x&&(x=F);const E=s[A+4],w=s[A+5],R=E-w,I=E+w;R<o&&(o=R),I>h&&(h=I),E<m&&(m=E),E>g&&(g=E)}n[0]=a,n[1]=r,n[2]=o,n[3]=l,n[4]=u,n[5]=h,i[0]=c,i[1]=f,i[2]=m,i[3]=v,i[4]=x,i[5]=g}function Ql(s,e=null,t=null,n=null){const i=s.attributes.position,a=s.index?s.index.array:null,r=Bt(s),o=i.normalized;let l;e===null?(l=new Float32Array(r*6*4),t=0,n=r):(l=e,t=t||0,n=n||r);const u=i.array,h=i.offset||0;let c=3;i.isInterleavedBufferAttribute&&(c=i.data.stride);const f=["getX","getY","getZ"];for(let m=t;m<t+n;m++){const v=m*3,x=m*6;let g=v+0,A=v+1,p=v+2;a&&(g=a[g],A=a[A],p=a[p]),o||(g=g*c+h,A=A*c+h,p=p*c+h);for(let y=0;y<3;y++){let b,B,C;o?(b=i[f[y]](g),B=i[f[y]](A),C=i[f[y]](p)):(b=u[g+y],B=u[A+y],C=u[p+y]);let F=b;B<F&&(F=B),C<F&&(F=C);let M=b;B>M&&(M=B),C>M&&(M=C);const T=(M-F)/2,S=y*2;l[x+S+0]=F+T,l[x+S+1]=T+(Math.abs(F)+T)*Kl}}return l}function W(s,e,t){return t.min.x=e[s],t.min.y=e[s+1],t.min.z=e[s+2],t.max.x=e[s+3],t.max.y=e[s+4],t.max.z=e[s+5],t}function pi(s){let e=-1,t=-1/0;for(let n=0;n<3;n++){const i=s[n+3]-s[n];i>t&&(t=i,e=n)}return e}function mi(s,e){e.set(s)}function gi(s,e,t){let n,i;for(let a=0;a<3;a++){const r=a+3;n=s[a],i=e[a],t[a]=n<i?n:i,n=s[r],i=e[r],t[r]=n>i?n:i}}function Qt(s,e,t){for(let n=0;n<3;n++){const i=e[s+2*n],a=e[s+2*n+1],r=i-a,o=i+a;r<t[n]&&(t[n]=r),o>t[n+3]&&(t[n+3]=o)}}function Tt(s){const e=s[3]-s[0],t=s[4]-s[1],n=s[5]-s[2];return 2*(e*t+t*n+n*e)}const Me=32,Vl=(s,e)=>s.candidate-e.candidate,Ge=new Array(Me).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Vt=new Float32Array(6);function Yl(s,e,t,n,i,a){let r=-1,o=0;if(a===xr)r=pi(e),r!==-1&&(o=(e[r]+e[r+3])/2);else if(a===Jl)r=pi(s),r!==-1&&(o=ql(t,n,i,r));else if(a===Ar){const l=Tt(s);let u=Xn*i;const h=n*6,c=(n+i)*6;for(let f=0;f<3;f++){const m=e[f],g=(e[f+3]-m)/Me;if(i<Me/4){const A=[...Ge];A.length=i;let p=0;for(let b=h;b<c;b+=6,p++){const B=A[p];B.candidate=t[b+2*f],B.count=0;const{bounds:C,leftCacheBounds:F,rightCacheBounds:M}=B;for(let T=0;T<3;T++)M[T]=1/0,M[T+3]=-1/0,F[T]=1/0,F[T+3]=-1/0,C[T]=1/0,C[T+3]=-1/0;Qt(b,t,C)}A.sort(Vl);let y=i;for(let b=0;b<y;b++){const B=A[b];for(;b+1<y&&A[b+1].candidate===B.candidate;)A.splice(b+1,1),y--}for(let b=h;b<c;b+=6){const B=t[b+2*f];for(let C=0;C<y;C++){const F=A[C];B>=F.candidate?Qt(b,t,F.rightCacheBounds):(Qt(b,t,F.leftCacheBounds),F.count++)}}for(let b=0;b<y;b++){const B=A[b],C=B.count,F=i-B.count,M=B.leftCacheBounds,T=B.rightCacheBounds;let S=0;C!==0&&(S=Tt(M)/l);let E=0;F!==0&&(E=Tt(T)/l);const w=hi+Xn*(S*C+E*F);w<u&&(r=f,u=w,o=B.candidate)}}else{for(let y=0;y<Me;y++){const b=Ge[y];b.count=0,b.candidate=m+g+y*g;const B=b.bounds;for(let C=0;C<3;C++)B[C]=1/0,B[C+3]=-1/0}for(let y=h;y<c;y+=6){let C=~~((t[y+2*f]-m)/g);C>=Me&&(C=Me-1);const F=Ge[C];F.count++,Qt(y,t,F.bounds)}const A=Ge[Me-1];mi(A.bounds,A.rightCacheBounds);for(let y=Me-2;y>=0;y--){const b=Ge[y],B=Ge[y+1];gi(b.bounds,B.rightCacheBounds,b.rightCacheBounds)}let p=0;for(let y=0;y<Me-1;y++){const b=Ge[y],B=b.count,C=b.bounds,M=Ge[y+1].rightCacheBounds;B!==0&&(p===0?mi(C,Vt):gi(C,Vt,Vt)),p+=B;let T=0,S=0;p!==0&&(T=Tt(Vt)/l);const E=i-p;E!==0&&(S=Tt(M)/l);const w=hi+Xn*(T*p+S*E);w<u&&(r=f,u=w,o=b.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${a} used.`);return{axis:r,pos:o}}function ql(s,e,t,n){let i=0;for(let a=e,r=e+t;a<r;a++)i+=s[a*6+n*2];return i/t}class Yn{constructor(){this.boundingData=new Float32Array(6)}}function Zl(s,e,t,n,i,a){let r=n,o=n+i-1;const l=a.pos,u=a.axis*2;for(;;){for(;r<=o&&t[r*6+u]<l;)r++;for(;r<=o&&t[o*6+u]>=l;)o--;if(r<o){for(let h=0;h<3;h++){let c=e[r*3+h];e[r*3+h]=e[o*3+h],e[o*3+h]=c}for(let h=0;h<6;h++){let c=t[r*6+h];t[r*6+h]=t[o*6+h],t[o*6+h]=c}r++,o--}else return r}}function $l(s,e,t,n,i,a){let r=n,o=n+i-1;const l=a.pos,u=a.axis*2;for(;;){for(;r<=o&&t[r*6+u]<l;)r++;for(;r<=o&&t[o*6+u]>=l;)o--;if(r<o){let h=s[r];s[r]=s[o],s[o]=h;for(let c=0;c<6;c++){let f=t[r*6+c];t[r*6+c]=t[o*6+c],t[o*6+c]=f}r++,o--}else return r}}function ie(s,e){return e[s+15]===65535}function ce(s,e){return e[s+6]}function de(s,e){return e[s+14]}function ge(s){return s+8}function fe(s,e){return e[s+6]}function Ns(s,e){return e[s+7]}let Cr,Pt,xn,Tr;const ec=Math.pow(2,32);function vs(s){return"count"in s?1:1+vs(s.left)+vs(s.right)}function tc(s,e,t){return Cr=new Float32Array(t),Pt=new Uint32Array(t),xn=new Uint16Array(t),Tr=new Uint8Array(t),ys(s,e)}function ys(s,e){const t=s/4,n=s/2,i="count"in e,a=e.boundingData;for(let r=0;r<6;r++)Cr[t+r]=a[r];if(i)if(e.buffer){const r=e.buffer;Tr.set(new Uint8Array(r),s);for(let o=s,l=s+r.byteLength;o<l;o+=Je){const u=o/2;ie(u,xn)||(Pt[o/4+6]+=t)}return s+r.byteLength}else{const r=e.offset,o=e.count;return Pt[t+6]=r,xn[n+14]=o,xn[n+15]=En,s+Je}else{const r=e.left,o=e.right,l=e.splitAxis;let u;if(u=ys(s+Je,r),u/4>ec)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Pt[t+6]=u/4,u=ys(u,o),Pt[t+7]=l,u}}function nc(s,e){const t=(s.index?s.index.count:s.attributes.position.count)/3,n=t>2**16,i=n?4:2,a=e?new SharedArrayBuffer(t*i):new ArrayBuffer(t*i),r=n?new Uint32Array(a):new Uint16Array(a);for(let o=0,l=r.length;o<l;o++)r[o]=o;return r}function sc(s,e,t,n,i){const{maxDepth:a,verbose:r,maxLeafTris:o,strategy:l,onProgress:u,indirect:h}=i,c=s._indirectBuffer,f=s.geometry,m=f.index?f.index.array:null,v=h?$l:Zl,x=Bt(f),g=new Float32Array(6);let A=!1;const p=new Yn;return Vn(e,t,n,p.boundingData,g),b(p,t,n,g),p;function y(B){u&&u(B/x)}function b(B,C,F,M=null,T=0){if(!A&&T>=a&&(A=!0,r&&(console.warn(`MeshBVH: Max depth of ${a} reached when generating BVH. Consider increasing maxDepth.`),console.warn(f))),F<=o||T>=a)return y(C+F),B.offset=C,B.count=F,B;const S=Yl(B.boundingData,M,e,C,F,l);if(S.axis===-1)return y(C+F),B.offset=C,B.count=F,B;const E=v(c,m,e,C,F,S);if(E===C||E===C+F)y(C+F),B.offset=C,B.count=F;else{B.splitAxis=S.axis;const w=new Yn,R=C,I=E-C;B.left=w,Vn(e,R,I,w.boundingData,g),b(w,R,I,g,T+1);const P=new Yn,L=E,G=F-I;B.right=P,Vn(e,L,G,P.boundingData,g),b(P,L,G,g,T+1)}return B}}function ic(s,e){const t=s.geometry;e.indirect&&(s._indirectBuffer=nc(t,e.useSharedArrayBuffer),Xl(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),s._indirectBuffer||Wl(t,e);const n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Ql(t),a=e.indirect?br(t,e.range):Br(t,e.range);s._roots=a.map(r=>{const o=sc(s,i,r.offset,r.count,e),l=vs(o),u=new n(Je*l);return tc(0,o,u),u})}class Ie{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let a=0,r=e.length;a<r;a++){const l=e[a][t];n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let a=0,r=t.length;a<r;a++){const o=t[a],l=e.dot(o);n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}Ie.prototype.setFromBox=function(){const s=new _;return function(t,n){const i=n.min,a=n.max;let r=1/0,o=-1/0;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){s.x=i.x*l+a.x*(1-l),s.y=i.y*u+a.y*(1-u),s.z=i.z*h+a.z*(1-h);const c=t.dot(s);r=Math.min(c,r),o=Math.max(c,o)}this.min=r,this.max=o}}();const rc=function(){const s=new _,e=new _,t=new _;return function(i,a,r){const o=i.start,l=s,u=a.start,h=e;t.subVectors(o,u),s.subVectors(i.end,i.start),e.subVectors(a.end,a.start);const c=t.dot(h),f=h.dot(l),m=h.dot(h),v=t.dot(l),g=l.dot(l)*m-f*f;let A,p;g!==0?A=(c*f-v*m)/g:A=0,p=(c+A*f)/m,r.x=A,r.y=p}}(),Us=function(){const s=new ye,e=new _,t=new _;return function(i,a,r,o){rc(i,a,s);let l=s.x,u=s.y;if(l>=0&&l<=1&&u>=0&&u<=1){i.at(l,r),a.at(u,o);return}else if(l>=0&&l<=1){u<0?a.at(0,o):a.at(1,o),i.closestPointToPoint(o,!0,r);return}else if(u>=0&&u<=1){l<0?i.at(0,r):i.at(1,r),a.closestPointToPoint(r,!0,o);return}else{let h;l<0?h=i.start:h=i.end;let c;u<0?c=a.start:c=a.end;const f=e,m=t;if(i.closestPointToPoint(c,!0,e),a.closestPointToPoint(h,!0,t),f.distanceToSquared(c)<=m.distanceToSquared(h)){r.copy(f),o.copy(c);return}else{r.copy(h),o.copy(m);return}}}}(),oc=function(){const s=new _,e=new _,t=new er,n=new Ee;return function(a,r){const{radius:o,center:l}=a,{a:u,b:h,c}=r;if(n.start=u,n.end=h,n.closestPointToPoint(l,!0,s).distanceTo(l)<=o||(n.start=u,n.end=c,n.closestPointToPoint(l,!0,s).distanceTo(l)<=o)||(n.start=h,n.end=c,n.closestPointToPoint(l,!0,s).distanceTo(l)<=o))return!0;const x=r.getPlane(t);if(Math.abs(x.distanceToPoint(l))<=o){const A=x.projectPoint(l,e);if(r.containsPoint(A))return!0}return!1}}(),ac=1e-15;function qn(s){return Math.abs(s)<ac}class be extends It{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new _),this.satBounds=new Array(4).fill().map(()=>new Ie),this.points=[this.a,this.b,this.c],this.sphere=new $i,this.plane=new er,this.needsUpdate=!0}intersectsSphere(e){return oc(e,this)}update(){const e=this.a,t=this.b,n=this.c,i=this.points,a=this.satAxes,r=this.satBounds,o=a[0],l=r[0];this.getNormal(o),l.setFromPoints(o,i);const u=a[1],h=r[1];u.subVectors(e,t),h.setFromPoints(u,i);const c=a[2],f=r[2];c.subVectors(t,n),f.setFromPoints(c,i);const m=a[3],v=r[3];m.subVectors(n,e),v.setFromPoints(m,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}}be.prototype.closestPointToSegment=function(){const s=new _,e=new _,t=new Ee;return function(i,a=null,r=null){const{start:o,end:l}=i,u=this.points;let h,c=1/0;for(let f=0;f<3;f++){const m=(f+1)%3;t.start.copy(u[f]),t.end.copy(u[m]),Us(t,i,s,e),h=s.distanceToSquared(e),h<c&&(c=h,a&&a.copy(s),r&&r.copy(e))}return this.closestPointToPoint(o,s),h=o.distanceToSquared(s),h<c&&(c=h,a&&a.copy(s),r&&r.copy(o)),this.closestPointToPoint(l,s),h=l.distanceToSquared(s),h<c&&(c=h,a&&a.copy(s),r&&r.copy(l)),Math.sqrt(c)}}();be.prototype.intersectsTriangle=function(){const s=new be,e=new Array(3),t=new Array(3),n=new Ie,i=new Ie,a=new _,r=new _,o=new _,l=new _,u=new _,h=new Ee,c=new Ee,f=new Ee,m=new _;function v(x,g,A){const p=x.points;let y=0,b=-1;for(let B=0;B<3;B++){const{start:C,end:F}=h;C.copy(p[B]),F.copy(p[(B+1)%3]),h.delta(r);const M=qn(g.distanceToPoint(C));if(qn(g.normal.dot(r))&&M){A.copy(h),y=2;break}const T=g.intersectLine(h,m);if(!T&&M&&m.copy(C),(T||M)&&!qn(m.distanceTo(F))){if(y<=1)(y===1?A.start:A.end).copy(m),M&&(b=y);else if(y>=2){(b===1?A.start:A.end).copy(m),y=2;break}if(y++,y===2&&b===-1)break}}return y}return function(g,A=null,p=!1){this.needsUpdate&&this.update(),g.isExtendedTriangle?g.needsUpdate&&g.update():(s.copy(g),s.update(),g=s);const y=this.plane,b=g.plane;if(Math.abs(y.normal.dot(b.normal))>1-1e-10){const B=this.satBounds,C=this.satAxes;t[0]=g.a,t[1]=g.b,t[2]=g.c;for(let T=0;T<4;T++){const S=B[T],E=C[T];if(n.setFromPoints(E,t),S.isSeparated(n))return!1}const F=g.satBounds,M=g.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let T=0;T<4;T++){const S=F[T],E=M[T];if(n.setFromPoints(E,e),S.isSeparated(n))return!1}for(let T=0;T<4;T++){const S=C[T];for(let E=0;E<4;E++){const w=M[E];if(a.crossVectors(S,w),n.setFromPoints(a,e),i.setFromPoints(a,t),n.isSeparated(i))return!1}}return A&&(p||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),A.start.set(0,0,0),A.end.set(0,0,0)),!0}else{const B=v(this,b,c);if(B===1&&g.containsPoint(c.end))return A&&(A.start.copy(c.end),A.end.copy(c.end)),!0;if(B!==2)return!1;const C=v(g,y,f);if(C===1&&this.containsPoint(f.end))return A&&(A.start.copy(f.end),A.end.copy(f.end)),!0;if(C!==2)return!1;if(c.delta(o),f.delta(l),o.dot(l)<0){let R=f.start;f.start=f.end,f.end=R}const F=c.start.dot(o),M=c.end.dot(o),T=f.start.dot(o),S=f.end.dot(o),E=M<T,w=F<S;return F!==S&&T!==M&&E===w?!1:(A&&(u.subVectors(c.start,f.start),u.dot(o)>0?A.start.copy(c.start):A.start.copy(f.start),u.subVectors(c.end,f.end),u.dot(o)<0?A.end.copy(c.end):A.end.copy(f.end)),!0)}}}();be.prototype.distanceToPoint=function(){const s=new _;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}}();be.prototype.distanceToTriangle=function(){const s=new _,e=new _,t=["a","b","c"],n=new Ee,i=new Ee;return function(r,o=null,l=null){const u=o||l?n:null;if(this.intersectsTriangle(r,u))return(o||l)&&(o&&u.getCenter(o),l&&u.getCenter(l)),0;let h=1/0;for(let c=0;c<3;c++){let f;const m=t[c],v=r[m];this.closestPointToPoint(v,s),f=v.distanceToSquared(s),f<h&&(h=f,o&&o.copy(s),l&&l.copy(v));const x=this[m];r.closestPointToPoint(x,s),f=x.distanceToSquared(s),f<h&&(h=f,o&&o.copy(x),l&&l.copy(s))}for(let c=0;c<3;c++){const f=t[c],m=t[(c+1)%3];n.set(this[f],this[m]);for(let v=0;v<3;v++){const x=t[v],g=t[(v+1)%3];i.set(r[x],r[g]),Us(n,i,s,e);const A=s.distanceToSquared(e);A<h&&(h=A,o&&o.copy(s),l&&l.copy(e))}}return Math.sqrt(h)}}();class ae{constructor(e,t,n){this.isOrientedBox=!0,this.min=new _,this.max=new _,this.matrix=new q,this.invMatrix=new q,this.points=new Array(8).fill().map(()=>new _),this.satAxes=new Array(3).fill().map(()=>new _),this.satBounds=new Array(3).fill().map(()=>new Ie),this.alignedSatBounds=new Array(3).fill().map(()=>new Ie),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}ae.prototype.update=function(){return function(){const e=this.matrix,t=this.min,n=this.max,i=this.points;for(let u=0;u<=1;u++)for(let h=0;h<=1;h++)for(let c=0;c<=1;c++){const f=1*u|2*h|4*c,m=i[f];m.x=u?n.x:t.x,m.y=h?n.y:t.y,m.z=c?n.z:t.z,m.applyMatrix4(e)}const a=this.satBounds,r=this.satAxes,o=i[0];for(let u=0;u<3;u++){const h=r[u],c=a[u],f=1<<u,m=i[f];h.subVectors(o,m),c.setFromPoints(h,i)}const l=this.alignedSatBounds;l[0].setFromPointsField(i,"x"),l[1].setFromPointsField(i,"y"),l[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();ae.prototype.intersectsBox=function(){const s=new Ie;return function(t){this.needsUpdate&&this.update();const n=t.min,i=t.max,a=this.satBounds,r=this.satAxes,o=this.alignedSatBounds;if(s.min=n.x,s.max=i.x,o[0].isSeparated(s)||(s.min=n.y,s.max=i.y,o[1].isSeparated(s))||(s.min=n.z,s.max=i.z,o[2].isSeparated(s)))return!1;for(let l=0;l<3;l++){const u=r[l],h=a[l];if(s.setFromBox(u,t),h.isSeparated(s))return!1}return!0}}();ae.prototype.intersectsTriangle=function(){const s=new be,e=new Array(3),t=new Ie,n=new Ie,i=new _;return function(r){this.needsUpdate&&this.update(),r.isExtendedTriangle?r.needsUpdate&&r.update():(s.copy(r),s.update(),r=s);const o=this.satBounds,l=this.satAxes;e[0]=r.a,e[1]=r.b,e[2]=r.c;for(let f=0;f<3;f++){const m=o[f],v=l[f];if(t.setFromPoints(v,e),m.isSeparated(t))return!1}const u=r.satBounds,h=r.satAxes,c=this.points;for(let f=0;f<3;f++){const m=u[f],v=h[f];if(t.setFromPoints(v,c),m.isSeparated(t))return!1}for(let f=0;f<3;f++){const m=l[f];for(let v=0;v<4;v++){const x=h[v];if(i.crossVectors(m,x),t.setFromPoints(i,e),n.setFromPoints(i,c),t.isSeparated(n))return!1}}return!0}}();ae.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();ae.prototype.distanceToPoint=function(){const s=new _;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}}();ae.prototype.distanceToBox=function(){const s=["x","y","z"],e=new Array(12).fill().map(()=>new Ee),t=new Array(12).fill().map(()=>new Ee),n=new _,i=new _;return function(r,o=0,l=null,u=null){if(this.needsUpdate&&this.update(),this.intersectsBox(r))return(l||u)&&(r.getCenter(i),this.closestPointToPoint(i,n),r.closestPointToPoint(n,i),l&&l.copy(n),u&&u.copy(i)),0;const h=o*o,c=r.min,f=r.max,m=this.points;let v=1/0;for(let g=0;g<8;g++){const A=m[g];i.copy(A).clamp(c,f);const p=A.distanceToSquared(i);if(p<v&&(v=p,l&&l.copy(A),u&&u.copy(i),p<h))return Math.sqrt(p)}let x=0;for(let g=0;g<3;g++)for(let A=0;A<=1;A++)for(let p=0;p<=1;p++){const y=(g+1)%3,b=(g+2)%3,B=A<<y|p<<b,C=1<<g|A<<y|p<<b,F=m[B],M=m[C];e[x].set(F,M);const S=s[g],E=s[y],w=s[b],R=t[x],I=R.start,P=R.end;I[S]=c[S],I[E]=A?c[E]:f[E],I[w]=p?c[w]:f[E],P[S]=f[S],P[E]=A?c[E]:f[E],P[w]=p?c[w]:f[E],x++}for(let g=0;g<=1;g++)for(let A=0;A<=1;A++)for(let p=0;p<=1;p++){i.x=g?f.x:c.x,i.y=A?f.y:c.y,i.z=p?f.z:c.z,this.closestPointToPoint(i,n);const y=i.distanceToSquared(n);if(y<v&&(v=y,l&&l.copy(n),u&&u.copy(i),y<h))return Math.sqrt(y)}for(let g=0;g<12;g++){const A=e[g];for(let p=0;p<12;p++){const y=t[p];Us(A,y,n,i);const b=n.distanceToSquared(i);if(b<v&&(v=b,l&&l.copy(n),u&&u.copy(i),b<h))return Math.sqrt(b)}}return Math.sqrt(v)}}();class Js{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class lc extends Js{constructor(){super(()=>new be)}}const xe=new lc;class cc{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const U=new cc;let ze,mt;const st=[],Yt=new Js(()=>new oe);function uc(s,e,t,n,i,a){ze=Yt.getPrimitive(),mt=Yt.getPrimitive(),st.push(ze,mt),U.setBuffer(s._roots[e]);const r=bs(0,s.geometry,t,n,i,a);U.clearBuffer(),Yt.releasePrimitive(ze),Yt.releasePrimitive(mt),st.pop(),st.pop();const o=st.length;return o>0&&(mt=st[o-1],ze=st[o-2]),r}function bs(s,e,t,n,i=null,a=0,r=0){const{float32Array:o,uint16Array:l,uint32Array:u}=U;let h=s*2;if(ie(h,l)){const f=ce(s,u),m=de(h,l);return W(s,o,ze),n(f,m,!1,r,a+s,ze)}else{let S=function(w){const{uint16Array:R,uint32Array:I}=U;let P=w*2;for(;!ie(P,R);)w=ge(w),P=w*2;return ce(w,I)},E=function(w){const{uint16Array:R,uint32Array:I}=U;let P=w*2;for(;!ie(P,R);)w=fe(w,I),P=w*2;return ce(w,I)+de(P,R)};const f=ge(s),m=fe(s,u);let v=f,x=m,g,A,p,y;if(i&&(p=ze,y=mt,W(v,o,p),W(x,o,y),g=i(p),A=i(y),A<g)){v=m,x=f;const w=g;g=A,A=w,p=y}p||(p=ze,W(v,o,p));const b=ie(v*2,l),B=t(p,b,g,r+1,a+v);let C;if(B===fi){const w=S(v),I=E(v)-w;C=n(w,I,!0,r+1,a+v,p)}else C=B&&bs(v,e,t,n,i,a,r+1);if(C)return!0;y=mt,W(x,o,y);const F=ie(x*2,l),M=t(y,F,A,r+1,a+x);let T;if(M===fi){const w=S(x),I=E(x)-w;T=n(w,I,!0,r+1,a+x,y)}else T=M&&bs(x,e,t,n,i,a,r+1);return!!T}}const Ft=new _,Zn=new _;function dc(s,e,t={},n=0,i=1/0){const a=n*n,r=i*i;let o=1/0,l=null;if(s.shapecast({boundsTraverseOrder:h=>(Ft.copy(e).clamp(h.min,h.max),Ft.distanceToSquared(e)),intersectsBounds:(h,c,f)=>f<o&&f<r,intersectsTriangle:(h,c)=>{h.closestPointToPoint(e,Ft);const f=e.distanceToSquared(Ft);return f<o&&(Zn.copy(Ft),o=f,l=c),f<a}}),o===1/0)return null;const u=Math.sqrt(o);return t.point?t.point.copy(Zn):t.point=Zn.clone(),t.distance=u,t.faceIndex=l,t}const it=new _,rt=new _,ot=new _,qt=new ye,Zt=new ye,$t=new ye,xi=new _,Ai=new _,vi=new _,en=new _;function fc(s,e,t,n,i,a,r,o){let l;if(a===Es?l=s.intersectTriangle(n,t,e,!0,i):l=s.intersectTriangle(e,t,n,a!==Sn,i),l===null)return null;const u=s.origin.distanceTo(i);return u<r||u>o?null:{distance:u,point:i.clone()}}function hc(s,e,t,n,i,a,r,o,l,u,h){it.fromBufferAttribute(e,a),rt.fromBufferAttribute(e,r),ot.fromBufferAttribute(e,o);const c=fc(s,it,rt,ot,en,l,u,h);if(c){n&&(qt.fromBufferAttribute(n,a),Zt.fromBufferAttribute(n,r),$t.fromBufferAttribute(n,o),c.uv=It.getInterpolation(en,it,rt,ot,qt,Zt,$t,new ye)),i&&(qt.fromBufferAttribute(i,a),Zt.fromBufferAttribute(i,r),$t.fromBufferAttribute(i,o),c.uv1=It.getInterpolation(en,it,rt,ot,qt,Zt,$t,new ye)),t&&(xi.fromBufferAttribute(t,a),Ai.fromBufferAttribute(t,r),vi.fromBufferAttribute(t,o),c.normal=It.getInterpolation(en,it,rt,ot,xi,Ai,vi,new _),c.normal.dot(s.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:r,c:o,normal:new _,materialIndex:0};It.getNormal(it,rt,ot,f.normal),c.face=f,c.faceIndex=a}return c}function Rn(s,e,t,n,i,a,r){const o=n*3;let l=o+0,u=o+1,h=o+2;const c=s.index;s.index&&(l=c.getX(l),u=c.getX(u),h=c.getX(h));const{position:f,normal:m,uv:v,uv1:x}=s.attributes,g=hc(t,f,m,v,x,l,u,h,e,a,r);return g?(g.faceIndex=n,i&&i.push(g),g):null}function Q(s,e,t,n){const i=s.a,a=s.b,r=s.c;let o=e,l=e+1,u=e+2;t&&(o=t.getX(o),l=t.getX(l),u=t.getX(u)),i.x=n.getX(o),i.y=n.getY(o),i.z=n.getZ(o),a.x=n.getX(l),a.y=n.getY(l),a.z=n.getZ(l),r.x=n.getX(u),r.y=n.getY(u),r.z=n.getZ(u)}function pc(s,e,t,n,i,a,r,o){const{geometry:l,_indirectBuffer:u}=s;for(let h=n,c=n+i;h<c;h++)Rn(l,e,t,h,a,r,o)}function mc(s,e,t,n,i,a,r){const{geometry:o,_indirectBuffer:l}=s;let u=1/0,h=null;for(let c=n,f=n+i;c<f;c++){let m;m=Rn(o,e,t,c,null,a,r),m&&m.distance<u&&(h=m,u=m.distance)}return h}function gc(s,e,t,n,i,a,r){const{geometry:o}=t,{index:l}=o,u=o.attributes.position;for(let h=s,c=e+s;h<c;h++){let f;if(f=h,Q(r,f*3,l,u),r.needsUpdate=!0,n(r,f,i,a))return!0}return!1}function xc(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let a,r,o,l,u=0;const h=s._roots;for(let f=0,m=h.length;f<m;f++)a=h[f],r=new Uint32Array(a),o=new Uint16Array(a),l=new Float32Array(a),c(0,u),u+=a.byteLength;function c(f,m,v=!1){const x=f*2;if(o[x+15]===En){const A=r[f+6],p=o[x+14];let y=1/0,b=1/0,B=1/0,C=-1/0,F=-1/0,M=-1/0;for(let T=3*A,S=3*(A+p);T<S;T++){let E=n[T];const w=i.getX(E),R=i.getY(E),I=i.getZ(E);w<y&&(y=w),w>C&&(C=w),R<b&&(b=R),R>F&&(F=R),I<B&&(B=I),I>M&&(M=I)}return l[f+0]!==y||l[f+1]!==b||l[f+2]!==B||l[f+3]!==C||l[f+4]!==F||l[f+5]!==M?(l[f+0]=y,l[f+1]=b,l[f+2]=B,l[f+3]=C,l[f+4]=F,l[f+5]=M,!0):!1}else{const A=f+8,p=r[f+6],y=A+m,b=p+m;let B=v,C=!1,F=!1;e?B||(C=e.has(y),F=e.has(b),B=!C&&!F):(C=!0,F=!0);const M=B||C,T=B||F;let S=!1;M&&(S=c(A,m,B));let E=!1;T&&(E=c(p,m,B));const w=S||E;if(w)for(let R=0;R<3;R++){const I=A+R,P=p+R,L=l[I],G=l[I+3],H=l[P],N=l[P+3];l[f+R]=L<H?L:H,l[f+R+3]=G>N?G:N}return w}}}function We(s,e,t,n,i){let a,r,o,l,u,h;const c=1/t.direction.x,f=1/t.direction.y,m=1/t.direction.z,v=t.origin.x,x=t.origin.y,g=t.origin.z;let A=e[s],p=e[s+3],y=e[s+1],b=e[s+3+1],B=e[s+2],C=e[s+3+2];return c>=0?(a=(A-v)*c,r=(p-v)*c):(a=(p-v)*c,r=(A-v)*c),f>=0?(o=(y-x)*f,l=(b-x)*f):(o=(b-x)*f,l=(y-x)*f),a>l||o>r||((o>a||isNaN(a))&&(a=o),(l<r||isNaN(r))&&(r=l),m>=0?(u=(B-g)*m,h=(C-g)*m):(u=(C-g)*m,h=(B-g)*m),a>h||u>r)?!1:((u>a||a!==a)&&(a=u),(h<r||r!==r)&&(r=h),a<=i&&r>=n)}function Ac(s,e,t,n,i,a,r,o){const{geometry:l,_indirectBuffer:u}=s;for(let h=n,c=n+i;h<c;h++){let f=u?u[h]:h;Rn(l,e,t,f,a,r,o)}}function vc(s,e,t,n,i,a,r){const{geometry:o,_indirectBuffer:l}=s;let u=1/0,h=null;for(let c=n,f=n+i;c<f;c++){let m;m=Rn(o,e,t,l?l[c]:c,null,a,r),m&&m.distance<u&&(h=m,u=m.distance)}return h}function yc(s,e,t,n,i,a,r){const{geometry:o}=t,{index:l}=o,u=o.attributes.position;for(let h=s,c=e+s;h<c;h++){let f;if(f=t.resolveTriangleIndex(h),Q(r,f*3,l,u),r.needsUpdate=!0,n(r,f,i,a))return!0}return!1}function bc(s,e,t,n,i,a,r){U.setBuffer(s._roots[e]),Bs(0,s,t,n,i,a,r),U.clearBuffer()}function Bs(s,e,t,n,i,a,r){const{float32Array:o,uint16Array:l,uint32Array:u}=U,h=s*2;if(ie(h,l)){const f=ce(s,u),m=de(h,l);pc(e,t,n,f,m,i,a,r)}else{const f=ge(s);We(f,o,n,a,r)&&Bs(f,e,t,n,i,a,r);const m=fe(s,u);We(m,o,n,a,r)&&Bs(m,e,t,n,i,a,r)}}const Bc=["x","y","z"];function Cc(s,e,t,n,i,a){U.setBuffer(s._roots[e]);const r=Cs(0,s,t,n,i,a);return U.clearBuffer(),r}function Cs(s,e,t,n,i,a){const{float32Array:r,uint16Array:o,uint32Array:l}=U;let u=s*2;if(ie(u,o)){const c=ce(s,l),f=de(u,o);return mc(e,t,n,c,f,i,a)}else{const c=Ns(s,l),f=Bc[c],v=n.direction[f]>=0;let x,g;v?(x=ge(s),g=fe(s,l)):(x=fe(s,l),g=ge(s));const p=We(x,r,n,i,a)?Cs(x,e,t,n,i,a):null;if(p){const B=p.point[f];if(v?B<=r[g+c]:B>=r[g+c+3])return p}const b=We(g,r,n,i,a)?Cs(g,e,t,n,i,a):null;return p&&b?p.distance<=b.distance?p:b:p||b||null}}const tn=new oe,at=new be,lt=new be,St=new q,yi=new ae,nn=new ae;function Tc(s,e,t,n){U.setBuffer(s._roots[e]);const i=Ts(0,s,t,n);return U.clearBuffer(),i}function Ts(s,e,t,n,i=null){const{float32Array:a,uint16Array:r,uint32Array:o}=U;let l=s*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),yi.set(t.boundingBox.min,t.boundingBox.max,n),i=yi),ie(l,r)){const h=e.geometry,c=h.index,f=h.attributes.position,m=t.index,v=t.attributes.position,x=ce(s,o),g=de(l,r);if(St.copy(n).invert(),t.boundsTree)return W(s,a,nn),nn.matrix.copy(St),nn.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:p=>nn.intersectsBox(p),intersectsTriangle:p=>{p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let y=x*3,b=(g+x)*3;y<b;y+=3)if(Q(lt,y,c,f),lt.needsUpdate=!0,p.intersectsTriangle(lt))return!0;return!1}});for(let A=x*3,p=(g+x)*3;A<p;A+=3){Q(at,A,c,f),at.a.applyMatrix4(St),at.b.applyMatrix4(St),at.c.applyMatrix4(St),at.needsUpdate=!0;for(let y=0,b=m.count;y<b;y+=3)if(Q(lt,y,m,v),lt.needsUpdate=!0,at.intersectsTriangle(lt))return!0}}else{const h=s+8,c=o[s+6];return W(h,a,tn),!!(i.intersectsBox(tn)&&Ts(h,e,t,n,i)||(W(c,a,tn),i.intersectsBox(tn)&&Ts(c,e,t,n,i)))}}const sn=new q,$n=new ae,Mt=new ae,Fc=new _,Sc=new _,Mc=new _,wc=new _;function Dc(s,e,t,n={},i={},a=0,r=1/0){e.boundingBox||e.computeBoundingBox(),$n.set(e.boundingBox.min,e.boundingBox.max,t),$n.needsUpdate=!0;const o=s.geometry,l=o.attributes.position,u=o.index,h=e.attributes.position,c=e.index,f=xe.getPrimitive(),m=xe.getPrimitive();let v=Fc,x=Sc,g=null,A=null;i&&(g=Mc,A=wc);let p=1/0,y=null,b=null;return sn.copy(t).invert(),Mt.matrix.copy(sn),s.shapecast({boundsTraverseOrder:B=>$n.distanceToBox(B),intersectsBounds:(B,C,F)=>F<p&&F<r?(C&&(Mt.min.copy(B.min),Mt.max.copy(B.max),Mt.needsUpdate=!0),!0):!1,intersectsRange:(B,C)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:M=>Mt.distanceToBox(M),intersectsBounds:(M,T,S)=>S<p&&S<r,intersectsRange:(M,T)=>{for(let S=M,E=M+T;S<E;S++){Q(m,3*S,c,h),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let w=B,R=B+C;w<R;w++){Q(f,3*w,u,l),f.needsUpdate=!0;const I=f.distanceToTriangle(m,v,g);if(I<p&&(x.copy(v),A&&A.copy(g),p=I,y=w,b=S),I<a)return!0}}}});{const F=Bt(e);for(let M=0,T=F;M<T;M++){Q(m,3*M,c,h),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let S=B,E=B+C;S<E;S++){Q(f,3*S,u,l),f.needsUpdate=!0;const w=f.distanceToTriangle(m,v,g);if(w<p&&(x.copy(v),A&&A.copy(g),p=w,y=S,b=M),w<a)return!0}}}}}),xe.releasePrimitive(f),xe.releasePrimitive(m),p===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=p,n.faceIndex=y,i&&(i.point?i.point.copy(A):i.point=A.clone(),i.point.applyMatrix4(sn),x.applyMatrix4(sn),i.distance=x.sub(i.point).length(),i.faceIndex=b),n)}function Ec(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let a,r,o,l,u=0;const h=s._roots;for(let f=0,m=h.length;f<m;f++)a=h[f],r=new Uint32Array(a),o=new Uint16Array(a),l=new Float32Array(a),c(0,u),u+=a.byteLength;function c(f,m,v=!1){const x=f*2;if(o[x+15]===En){const A=r[f+6],p=o[x+14];let y=1/0,b=1/0,B=1/0,C=-1/0,F=-1/0,M=-1/0;for(let T=A,S=A+p;T<S;T++){const E=3*s.resolveTriangleIndex(T);for(let w=0;w<3;w++){let R=E+w;R=n?n[R]:R;const I=i.getX(R),P=i.getY(R),L=i.getZ(R);I<y&&(y=I),I>C&&(C=I),P<b&&(b=P),P>F&&(F=P),L<B&&(B=L),L>M&&(M=L)}}return l[f+0]!==y||l[f+1]!==b||l[f+2]!==B||l[f+3]!==C||l[f+4]!==F||l[f+5]!==M?(l[f+0]=y,l[f+1]=b,l[f+2]=B,l[f+3]=C,l[f+4]=F,l[f+5]=M,!0):!1}else{const A=f+8,p=r[f+6],y=A+m,b=p+m;let B=v,C=!1,F=!1;e?B||(C=e.has(y),F=e.has(b),B=!C&&!F):(C=!0,F=!0);const M=B||C,T=B||F;let S=!1;M&&(S=c(A,m,B));let E=!1;T&&(E=c(p,m,B));const w=S||E;if(w)for(let R=0;R<3;R++){const I=A+R,P=p+R,L=l[I],G=l[I+3],H=l[P],N=l[P+3];l[f+R]=L<H?L:H,l[f+R+3]=G>N?G:N}return w}}}function Rc(s,e,t,n,i,a,r){U.setBuffer(s._roots[e]),Fs(0,s,t,n,i,a,r),U.clearBuffer()}function Fs(s,e,t,n,i,a,r){const{float32Array:o,uint16Array:l,uint32Array:u}=U,h=s*2;if(ie(h,l)){const f=ce(s,u),m=de(h,l);Ac(e,t,n,f,m,i,a,r)}else{const f=ge(s);We(f,o,n,a,r)&&Fs(f,e,t,n,i,a,r);const m=fe(s,u);We(m,o,n,a,r)&&Fs(m,e,t,n,i,a,r)}}const Ic=["x","y","z"];function _c(s,e,t,n,i,a){U.setBuffer(s._roots[e]);const r=Ss(0,s,t,n,i,a);return U.clearBuffer(),r}function Ss(s,e,t,n,i,a){const{float32Array:r,uint16Array:o,uint32Array:l}=U;let u=s*2;if(ie(u,o)){const c=ce(s,l),f=de(u,o);return vc(e,t,n,c,f,i,a)}else{const c=Ns(s,l),f=Ic[c],v=n.direction[f]>=0;let x,g;v?(x=ge(s),g=fe(s,l)):(x=fe(s,l),g=ge(s));const p=We(x,r,n,i,a)?Ss(x,e,t,n,i,a):null;if(p){const B=p.point[f];if(v?B<=r[g+c]:B>=r[g+c+3])return p}const b=We(g,r,n,i,a)?Ss(g,e,t,n,i,a):null;return p&&b?p.distance<=b.distance?p:b:p||b||null}}const rn=new oe,ct=new be,ut=new be,wt=new q,bi=new ae,on=new ae;function Pc(s,e,t,n){U.setBuffer(s._roots[e]);const i=Ms(0,s,t,n);return U.clearBuffer(),i}function Ms(s,e,t,n,i=null){const{float32Array:a,uint16Array:r,uint32Array:o}=U;let l=s*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),bi.set(t.boundingBox.min,t.boundingBox.max,n),i=bi),ie(l,r)){const h=e.geometry,c=h.index,f=h.attributes.position,m=t.index,v=t.attributes.position,x=ce(s,o),g=de(l,r);if(wt.copy(n).invert(),t.boundsTree)return W(s,a,on),on.matrix.copy(wt),on.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:p=>on.intersectsBox(p),intersectsTriangle:p=>{p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let y=x,b=g+x;y<b;y++)if(Q(ut,3*e.resolveTriangleIndex(y),c,f),ut.needsUpdate=!0,p.intersectsTriangle(ut))return!0;return!1}});for(let A=x,p=g+x;A<p;A++){const y=e.resolveTriangleIndex(A);Q(ct,3*y,c,f),ct.a.applyMatrix4(wt),ct.b.applyMatrix4(wt),ct.c.applyMatrix4(wt),ct.needsUpdate=!0;for(let b=0,B=m.count;b<B;b+=3)if(Q(ut,b,m,v),ut.needsUpdate=!0,ct.intersectsTriangle(ut))return!0}}else{const h=s+8,c=o[s+6];return W(h,a,rn),!!(i.intersectsBox(rn)&&Ms(h,e,t,n,i)||(W(c,a,rn),i.intersectsBox(rn)&&Ms(c,e,t,n,i)))}}const an=new q,es=new ae,Dt=new ae,Gc=new _,Lc=new _,jc=new _,Hc=new _;function kc(s,e,t,n={},i={},a=0,r=1/0){e.boundingBox||e.computeBoundingBox(),es.set(e.boundingBox.min,e.boundingBox.max,t),es.needsUpdate=!0;const o=s.geometry,l=o.attributes.position,u=o.index,h=e.attributes.position,c=e.index,f=xe.getPrimitive(),m=xe.getPrimitive();let v=Gc,x=Lc,g=null,A=null;i&&(g=jc,A=Hc);let p=1/0,y=null,b=null;return an.copy(t).invert(),Dt.matrix.copy(an),s.shapecast({boundsTraverseOrder:B=>es.distanceToBox(B),intersectsBounds:(B,C,F)=>F<p&&F<r?(C&&(Dt.min.copy(B.min),Dt.max.copy(B.max),Dt.needsUpdate=!0),!0):!1,intersectsRange:(B,C)=>{if(e.boundsTree){const F=e.boundsTree;return F.shapecast({boundsTraverseOrder:M=>Dt.distanceToBox(M),intersectsBounds:(M,T,S)=>S<p&&S<r,intersectsRange:(M,T)=>{for(let S=M,E=M+T;S<E;S++){const w=F.resolveTriangleIndex(S);Q(m,3*w,c,h),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let R=B,I=B+C;R<I;R++){const P=s.resolveTriangleIndex(R);Q(f,3*P,u,l),f.needsUpdate=!0;const L=f.distanceToTriangle(m,v,g);if(L<p&&(x.copy(v),A&&A.copy(g),p=L,y=R,b=S),L<a)return!0}}}})}else{const F=Bt(e);for(let M=0,T=F;M<T;M++){Q(m,3*M,c,h),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let S=B,E=B+C;S<E;S++){const w=s.resolveTriangleIndex(S);Q(f,3*w,u,l),f.needsUpdate=!0;const R=f.distanceToTriangle(m,v,g);if(R<p&&(x.copy(v),A&&A.copy(g),p=R,y=S,b=M),R<a)return!0}}}}}),xe.releasePrimitive(f),xe.releasePrimitive(m),p===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=p,n.faceIndex=y,i&&(i.point?i.point.copy(A):i.point=A.clone(),i.point.applyMatrix4(an),x.applyMatrix4(an),i.distance=x.sub(i.point).length(),i.faceIndex=b),n)}function Oc(){return typeof SharedArrayBuffer<"u"}const kt=new U.constructor,Cn=new U.constructor,je=new Js(()=>new oe),dt=new oe,ft=new oe,ts=new oe,ns=new oe;let ss=!1;function zc(s,e,t,n){if(ss)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");ss=!0;const i=s._roots,a=e._roots;let r,o=0,l=0;const u=new q().copy(t).invert();for(let h=0,c=i.length;h<c;h++){kt.setBuffer(i[h]),l=0;const f=je.getPrimitive();W(0,kt.float32Array,f),f.applyMatrix4(u);for(let m=0,v=a.length;m<v&&(Cn.setBuffer(a[m]),r=ve(0,0,t,u,n,o,l,0,0,f),Cn.clearBuffer(),l+=a[m].length,!r);m++);if(je.releasePrimitive(f),kt.clearBuffer(),o+=i[h].length,r)break}return ss=!1,r}function ve(s,e,t,n,i,a=0,r=0,o=0,l=0,u=null,h=!1){let c,f;h?(c=Cn,f=kt):(c=kt,f=Cn);const m=c.float32Array,v=c.uint32Array,x=c.uint16Array,g=f.float32Array,A=f.uint32Array,p=f.uint16Array,y=s*2,b=e*2,B=ie(y,x),C=ie(b,p);let F=!1;if(C&&B)h?F=i(ce(e,A),de(e*2,p),ce(s,v),de(s*2,x),l,r+e,o,a+s):F=i(ce(s,v),de(s*2,x),ce(e,A),de(e*2,p),o,a+s,l,r+e);else if(C){const M=je.getPrimitive();W(e,g,M),M.applyMatrix4(t);const T=ge(s),S=fe(s,v);W(T,m,dt),W(S,m,ft);const E=M.intersectsBox(dt),w=M.intersectsBox(ft);F=E&&ve(e,T,n,t,i,r,a,l,o+1,M,!h)||w&&ve(e,S,n,t,i,r,a,l,o+1,M,!h),je.releasePrimitive(M)}else{const M=ge(e),T=fe(e,A);W(M,g,ts),W(T,g,ns);const S=u.intersectsBox(ts),E=u.intersectsBox(ns);if(S&&E)F=ve(s,M,t,n,i,a,r,o,l+1,u,h)||ve(s,T,t,n,i,a,r,o,l+1,u,h);else if(S)if(B)F=ve(s,M,t,n,i,a,r,o,l+1,u,h);else{const w=je.getPrimitive();w.copy(ts).applyMatrix4(t);const R=ge(s),I=fe(s,v);W(R,m,dt),W(I,m,ft);const P=w.intersectsBox(dt),L=w.intersectsBox(ft);F=P&&ve(M,R,n,t,i,r,a,l,o+1,w,!h)||L&&ve(M,I,n,t,i,r,a,l,o+1,w,!h),je.releasePrimitive(w)}else if(E)if(B)F=ve(s,T,t,n,i,a,r,o,l+1,u,h);else{const w=je.getPrimitive();w.copy(ns).applyMatrix4(t);const R=ge(s),I=fe(s,v);W(R,m,dt),W(I,m,ft);const P=w.intersectsBox(dt),L=w.intersectsBox(ft);F=P&&ve(T,R,n,t,i,r,a,l,o+1,w,!h)||L&&ve(T,I,n,t,i,r,a,l,o+1,w,!h),je.releasePrimitive(w)}}return F}const ln=new ae,Bi=new oe,Nc={strategy:xr,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class Ks{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,i=e._roots,a=e._indirectBuffer,r=n.getIndex();let o;return t.cloneBuffers?o={roots:i.map(l=>l.slice()),index:r?r.array.slice():null,indirectBuffer:a?a.slice():null}:o={roots:i,index:r?r.array:null,indirectBuffer:a},o}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:i,roots:a,indirectBuffer:r}=e,o=new Ks(t,{...n,[Qn]:!0});if(o._roots=a,o._indirectBuffer=r||null,n.setIndex){const l=t.getIndex();if(l===null){const u=new Y(e.index,1,!1);t.setIndex(u)}else l.array!==i&&(l.array.set(i),l.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...Nc,[Qn]:!1},t),t.useSharedArrayBuffer&&!Oc())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[Qn]||(ic(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new oe))),this.resolveTriangleIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n}refit(e=null){return(this.indirect?Ec:xc)(this,e)}traverse(e,t=0){const n=this._roots[t],i=new Uint32Array(n),a=new Uint16Array(n);r(0);function r(o,l=0){const u=o*2,h=a[u+15]===En;if(h){const c=i[o+6],f=a[u+14];e(l,h,new Float32Array(n,o*4,6),c,f)}else{const c=o+Je/4,f=i[o+6],m=i[o+7];e(l,h,new Float32Array(n,o*4,6),m)||(r(c,l+1),r(f,l+1))}}}raycast(e,t=vn,n=0,i=1/0){const a=this._roots,r=this.geometry,o=[],l=t.isMaterial,u=Array.isArray(t),h=r.groups,c=l?t.side:t,f=this.indirect?Rc:bc;for(let m=0,v=a.length;m<v;m++){const x=u?t[h[m].materialIndex].side:c,g=o.length;if(f(this,m,x,e,o,n,i),u){const A=h[m].materialIndex;for(let p=g,y=o.length;p<y;p++)o[p].face.materialIndex=A}}return o}raycastFirst(e,t=vn,n=0,i=1/0){const a=this._roots,r=this.geometry,o=t.isMaterial,l=Array.isArray(t);let u=null;const h=r.groups,c=o?t.side:t,f=this.indirect?_c:Cc;for(let m=0,v=a.length;m<v;m++){const x=l?t[h[m].materialIndex].side:c,g=f(this,m,x,e,n,i);g!=null&&(u==null||g.distance<u.distance)&&(u=g,l&&(g.face.materialIndex=h[m].materialIndex))}return u}intersectsGeometry(e,t){let n=!1;const i=this._roots,a=this.indirect?Pc:Tc;for(let r=0,o=i.length;r<o&&(n=a(this,r,e,t),!n);r++);return n}shapecast(e){const t=xe.getPrimitive(),n=this.indirect?yc:gc;let{boundsTraverseOrder:i,intersectsBounds:a,intersectsRange:r,intersectsTriangle:o}=e;if(r&&o){const c=r;r=(f,m,v,x,g)=>c(f,m,v,x,g)?!0:n(f,m,this,o,v,x,t)}else r||(o?r=(c,f,m,v)=>n(c,f,this,o,m,v,t):r=(c,f,m)=>m);let l=!1,u=0;const h=this._roots;for(let c=0,f=h.length;c<f;c++){const m=h[c];if(l=uc(this,c,a,r,i,u),l)break;u+=m.byteLength}return xe.releasePrimitive(t),l}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:a}=n;const r=xe.getPrimitive(),o=this.geometry.index,l=this.geometry.attributes.position,u=this.indirect?v=>{const x=this.resolveTriangleIndex(v);Q(r,x*3,o,l)}:v=>{Q(r,v*3,o,l)},h=xe.getPrimitive(),c=e.geometry.index,f=e.geometry.attributes.position,m=e.indirect?v=>{const x=e.resolveTriangleIndex(v);Q(h,x*3,c,f)}:v=>{Q(h,v*3,c,f)};if(a){const v=(x,g,A,p,y,b,B,C)=>{for(let F=A,M=A+p;F<M;F++){m(F),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let T=x,S=x+g;T<S;T++)if(u(T),r.needsUpdate=!0,a(r,h,T,F,y,b,B,C))return!0}return!1};if(i){const x=i;i=function(g,A,p,y,b,B,C,F){return x(g,A,p,y,b,B,C,F)?!0:v(g,A,p,y,b,B,C,F)}}else i=v}return zc(this,e,t,i)}intersectsBox(e,t){return ln.set(e.min,e.max,t),ln.needsUpdate=!0,this.shapecast({intersectsBounds:n=>ln.intersectsBox(n),intersectsTriangle:n=>ln.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},a=0,r=1/0){return(this.indirect?kc:Dc)(this,e,t,n,i,a,r)}closestPointToPoint(e,t={},n=0,i=1/0){return dc(this,e,t,n,i)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{W(0,new Float32Array(n),Bi),e.union(Bi)}),e}}function Uc(s){switch(s){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function Jc(s){switch(s){case 1:return At;case 2:return nr;case 3:return $;case 4:return $}}function Ci(s){switch(s){case 1:return sa;case 2:return tr;case 3:return ps;case 4:return ps}}class Fr extends Ae{constructor(){super(),this.minFilter=Z,this.magFilter=Z,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){const t=this.overrideItemSize,n=e.itemSize,i=e.count;if(t!==null){if(n*i%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=i*n/t}const a=e.itemSize,r=e.count,o=e.normalized,l=e.array.constructor,u=l.BYTES_PER_ELEMENT;let h=this._forcedType,c=a;if(h===null)switch(l){case Float32Array:h=re;break;case Uint8Array:case Uint16Array:case Uint32Array:h=Ht;break;case Int8Array:case Int16Array:case Int32Array:h=jn;break}let f,m,v,x,g=Uc(a);switch(h){case re:v=1,m=Jc(a),o&&u===1?(x=l,g+="8",l===Uint8Array?f=hs:(f=ti,g+="_SNORM")):(x=Float32Array,g+="32F",f=re);break;case jn:g+=u*8+"I",v=o?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,m=Ci(a),u===1?(x=Int8Array,f=ti):u===2?(x=Int16Array,f=na):(x=Int32Array,f=jn);break;case Ht:g+=u*8+"UI",v=o?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,m=Ci(a),u===1?(x=Uint8Array,f=hs):u===2?(x=Uint16Array,f=ta):(x=Uint32Array,f=Ht);break}c===3&&(m===$||m===ps)&&(c=4);const A=Math.ceil(Math.sqrt(r))||1,p=c*A*A,y=new x(p),b=e.normalized;e.normalized=!1;for(let B=0;B<r;B++){const C=c*B;y[C]=e.getX(B)/v,a>=2&&(y[C+1]=e.getY(B)/v),a>=3&&(y[C+2]=e.getZ(B)/v,c===4&&(y[C+3]=1)),a>=4&&(y[C+3]=e.getW(B)/v)}e.normalized=b,this.internalFormat=g,this.format=m,this.type=f,this.image.width=A,this.image.height=A,this.image.data=y,this.needsUpdate=!0,this.dispose(),e.itemSize=n,e.count=i}}class Sr extends Fr{constructor(){super(),this._forcedType=Ht}}class Mr extends Fr{constructor(){super(),this._forcedType=re}}class Kc{constructor(){this.index=new Sr,this.position=new Mr,this.bvhBounds=new Ae,this.bvhContents=new Ae,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){const{geometry:t}=e;if(Xc(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){const n=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{const i=yr(vr(t));this._cachedIndexAttr=new Y(i,1,!1)}Wc(t,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){const{index:e,position:t,bvhBounds:n,bvhContents:i}=this;e&&e.dispose(),t&&t.dispose(),n&&n.dispose(),i&&i.dispose()}}function Wc(s,e,t){const n=t.array,i=s.index?s.index.array:null;for(let a=0,r=e.length;a<r;a++){const o=3*a,l=3*e[a];for(let u=0;u<3;u++)n[o+u]=i?i[l+u]:l+u}}function Xc(s,e,t){const n=s._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const i=n[0],a=new Uint16Array(i),r=new Uint32Array(i),o=new Float32Array(i),l=i.byteLength/Je,u=2*Math.ceil(Math.sqrt(l/2)),h=new Float32Array(4*u*u),c=Math.ceil(Math.sqrt(l)),f=new Uint32Array(2*c*c);for(let m=0;m<l;m++){const v=m*Je/4,x=v*2,g=v;for(let A=0;A<3;A++)h[8*m+0+A]=o[g+0+A],h[8*m+4+A]=o[g+3+A];if(ie(x,a)){const A=de(x,a),p=ce(v,r),y=4294901760|A;f[m*2+0]=y,f[m*2+1]=p}else{const A=4*fe(v,r)/Je,p=Ns(v,r);f[m*2+0]=p,f[m*2+1]=A}}e.image.data=h,e.image.width=u,e.image.height=u,e.format=$,e.type=re,e.internalFormat="RGBA32F",e.minFilter=Z,e.magFilter=Z,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=f,t.image.width=c,t.image.height=c,t.format=tr,t.type=Ht,t.internalFormat="RG32UI",t.minFilter=Z,t.magFilter=Z,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}const Ve=new _,Ye=new _,qe=new _,Ti=new vt,cn=new _,is=new _,Fi=new vt,Si=new vt,un=new q,Mi=new q;function Et(s,e){if(!s&&!e)return;const t=s.count===e.count,n=s.normalized===e.normalized,i=s.array.constructor===e.array.constructor,a=s.itemSize===e.itemSize;if(!t||!n||!i||!a)throw new Error}function Gt(s,e=null){const t=s.array.constructor,n=s.normalized,i=s.itemSize,a=e===null?s.count:e;return new Y(new t(i*a),i,n)}function wr(s,e,t=0){if(s.isInterleavedBufferAttribute){const n=s.itemSize;for(let i=0,a=s.count;i<a;i++){const r=i+t;e.setX(r,s.getX(i)),n>=2&&e.setY(r,s.getY(i)),n>=3&&e.setZ(r,s.getZ(i)),n>=4&&e.setW(r,s.getW(i))}}else{const n=e.array,i=n.constructor,a=n.BYTES_PER_ELEMENT*s.itemSize*t;new i(n.buffer,a,s.array.length).set(s.array)}}function Qc(s,e,t){const n=s.elements,i=e.elements;for(let a=0,r=i.length;a<r;a++)n[a]+=i[a]*t}function wi(s,e,t){const n=s.skeleton,i=s.geometry,a=n.bones,r=n.boneInverses;Fi.fromBufferAttribute(i.attributes.skinIndex,e),Si.fromBufferAttribute(i.attributes.skinWeight,e),un.elements.fill(0);for(let o=0;o<4;o++){const l=Si.getComponent(o);if(l!==0){const u=Fi.getComponent(o);Mi.multiplyMatrices(a[u].matrixWorld,r[u]),Qc(un,Mi,l)}}return un.multiply(s.bindMatrix).premultiply(s.bindMatrixInverse),t.transformDirection(un),t}function rs(s,e,t,n,i){cn.set(0,0,0);for(let a=0,r=s.length;a<r;a++){const o=e[a],l=s[a];o!==0&&(is.fromBufferAttribute(l,n),t?cn.addScaledVector(is,o):cn.addScaledVector(is.sub(i),o))}i.add(cn)}function Vc(s,e={useGroups:!1,updateIndex:!1,skipAttributes:[]},t=new Te){const n=s[0].index!==null,{useGroups:i=!1,updateIndex:a=!1,skipAttributes:r=[]}=e,o=new Set(Object.keys(s[0].attributes)),l={};let u=0;t.clearGroups();for(let h=0;h<s.length;++h){const c=s[h];let f=0;if(n!==(c.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const m in c.attributes){if(!o.has(m))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.');l[m]===void 0&&(l[m]=[]),l[m].push(c.attributes[m]),f++}if(f!==o.size)throw new Error("StaticGeometryGenerator: Make sure all geometries have the same number of attributes.");if(i){let m;if(n)m=c.index.count;else if(c.attributes.position!==void 0)m=c.attributes.position.count;else throw new Error("StaticGeometryGenerator: The geometry must have either an index or a position attribute");t.addGroup(u,m,h),u+=m}}if(n){let h=!1;if(!t.index){let c=0;for(let f=0;f<s.length;++f)c+=s[f].index.count;t.setIndex(new Y(new Uint32Array(c),1,!1)),h=!0}if(a||h){const c=t.index;let f=0,m=0;for(let v=0;v<s.length;++v){const x=s[v],g=x.index;if(r[v]!==!0)for(let A=0;A<g.count;++A)c.setX(f,g.getX(A)+m),f++;m+=x.attributes.position.count}}}for(const h in l){const c=l[h];if(!(h in t.attributes)){let v=0;for(const x in c)v+=c[x].count;t.setAttribute(h,Gt(l[h][0],v))}const f=t.attributes[h];let m=0;for(let v=0,x=c.length;v<x;v++){const g=c[v];r[v]!==!0&&wr(g,f,m),m+=g.count}}return t}function Yc(s,e){if(s===null||e===null)return s===e;if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function qc(s){const{index:e,attributes:t}=s;if(e)for(let n=0,i=e.count;n<i;n+=3){const a=e.getX(n),r=e.getX(n+2);e.setX(n,r),e.setX(n+2,a)}else for(const n in t){const i=t[n],a=i.itemSize;for(let r=0,o=i.count;r<o;r+=3)for(let l=0;l<a;l++){const u=i.getComponent(r,l),h=i.getComponent(r+2,l);i.setComponent(r,l,h),i.setComponent(r+2,l,u)}}return s}class Zc{constructor(e){this.matrixWorld=new q,this.geometryHash=null,this.boneMatrices=null,this.primitiveCount=-1,this.mesh=e,this.update()}update(){const e=this.mesh,t=e.geometry,n=e.skeleton,i=(t.index?t.index.count:t.attributes.position.count)/3;if(this.matrixWorld.copy(e.matrixWorld),this.geometryHash=t.attributes.position.version,this.primitiveCount=i,n){n.boneTexture||n.computeBoneTexture(),n.update();const a=n.boneMatrices;!this.boneMatrices||this.boneMatrices.length!==a.length?this.boneMatrices=a.slice():this.boneMatrices.set(a)}else this.boneMatrices=null}didChange(){const e=this.mesh,t=e.geometry,n=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===t.attributes.position.version&&Yc(e.skeleton&&e.skeleton.boneMatrices||null,this.boneMatrices)&&this.primitiveCount===n)}}class Di{constructor(e){Array.isArray(e)||(e=[e]);const t=[];e.forEach(n=>{n.traverseVisible(i=>{i.isMesh&&t.push(i)})}),this.meshes=t,this.useGroups=!0,this.applyWorldTransforms=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Array(t.length).fill().map(()=>new Te),this._diffMap=new WeakMap}getMaterials(){const e=[];return this.meshes.forEach(t=>{Array.isArray(t.material)?e.push(...t.material):e.push(t.material)}),e}generate(e=new Te){let t=[];const{meshes:n,useGroups:i,_intermediateGeometry:a,_diffMap:r}=this;for(let o=0,l=n.length;o<l;o++){const u=n[o],h=a[o],c=r.get(u);!c||c.didChange(u)?(this._convertToStaticGeometry(u,h),t.push(!1),c?c.update():r.set(u,new Zc(u))):t.push(!0)}if(a.length===0){e.setIndex(null);const o=e.attributes;for(const l in o)e.deleteAttribute(l);for(const l in this.attributes)e.setAttribute(this.attributes[l],new Y(new Float32Array(0),4,!1))}else Vc(a,{useGroups:i,skipAttributes:t},e);for(const o in e.attributes)e.attributes[o].needsUpdate=!0;return e}_convertToStaticGeometry(e,t=new Te){const n=e.geometry,i=this.applyWorldTransforms,a=this.attributes.includes("normal"),r=this.attributes.includes("tangent"),o=n.attributes,l=t.attributes;!t.index&&n.index&&(t.index=n.index.clone()),l.position||t.setAttribute("position",Gt(o.position)),a&&!l.normal&&o.normal&&t.setAttribute("normal",Gt(o.normal)),r&&!l.tangent&&o.tangent&&t.setAttribute("tangent",Gt(o.tangent)),Et(n.index,t.index),Et(o.position,l.position),a&&Et(o.normal,l.normal),r&&Et(o.tangent,l.tangent);const u=o.position,h=a?o.normal:null,c=r?o.tangent:null,f=n.morphAttributes.position,m=n.morphAttributes.normal,v=n.morphAttributes.tangent,x=n.morphTargetsRelative,g=e.morphTargetInfluences,A=new ia;A.getNormalMatrix(e.matrixWorld),n.index&&t.index.array.set(n.index.array);for(let p=0,y=o.position.count;p<y;p++)Ve.fromBufferAttribute(u,p),h&&Ye.fromBufferAttribute(h,p),c&&(Ti.fromBufferAttribute(c,p),qe.fromBufferAttribute(c,p)),g&&(f&&rs(f,g,x,p,Ve),m&&rs(m,g,x,p,Ye),v&&rs(v,g,x,p,qe)),e.isSkinnedMesh&&(e.applyBoneTransform(p,Ve),h&&wi(e,p,Ye),c&&wi(e,p,qe)),i&&Ve.applyMatrix4(e.matrixWorld),l.position.setXYZ(p,Ve.x,Ve.y,Ve.z),h&&(i&&Ye.applyNormalMatrix(A),l.normal.setXYZ(p,Ye.x,Ye.y,Ye.z)),c&&(i&&qe.transformDirection(e.matrixWorld),l.tangent.setXYZW(p,qe.x,qe.y,qe.z,Ti.w));for(const p in this.attributes){const y=this.attributes[p];y==="position"||y==="tangent"||y==="normal"||!(y in o)||(l[y]||t.setAttribute(y,Gt(o[y])),Et(o[y],l[y]),wr(o[y],l[y]))}return e.matrixWorld.determinant()<0&&qc(t),t}}const $c=`

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
`,eu=`

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
`,tu=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`;function nu(s,e,t=new _){const n=Math.PI*(s-.5),i=2*Math.PI*(e-.5);return t.x=Math.cos(i),t.y=Math.sin(n),t.z=Math.sin(i),t}const su=D.forwardRef(({inclination:s=.6,azimuth:e=.1,distance:t=1e3,mieCoefficient:n=.005,mieDirectionalG:i=.8,rayleigh:a=.5,turbidity:r=10,sunPosition:o=nu(s,e),...l},u)=>{const h=D.useMemo(()=>new _().setScalar(t),[t]),[c]=D.useState(()=>new ol);return D.createElement("primitive",ra({object:c,ref:u,"material-uniforms-mieCoefficient-value":n,"material-uniforms-mieDirectionalG-value":i,"material-uniforms-rayleigh-value":a,"material-uniforms-sunPosition-value":o,"material-uniforms-turbidity-value":r,scale:h},l))});class Ws extends Ds{constructor(e){super(e);for(const t in this.uniforms)Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(n){this.uniforms[t].value=n}})}setDefine(e,t=void 0){t==null?e in this.defines&&(delete this.defines[e],this.needsUpdate=!0):this.defines[e]!==t&&(this.defines[e]=t,this.needsUpdate=!0)}}class iu extends Ws{constructor(e){super({blending:Gs,uniforms:{target1:{value:null},target2:{value:null},opacity:{value:1}},vertexShader:`

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

				}`}),this.setValues(e)}}function dn(s=1){let e="uint";return s>1&&(e="uvec"+s),`
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
	`}function fn(s=1){let e="uint",t="float",n="",i=".r",a="1u";return s>1&&(e="uvec"+s,t="vec"+s,n=s+"",s===2?(i=".rg",a="uvec2( 1u, 2u )"):s===3?(i=".rgb",a="uvec3( 1u, 2u, 3u )"):(i="",a="uvec4( 1u, 2u, 3u, 4u )")),`

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
	`}const Dr=`

	// Utils
	const float SOBOL_FACTOR = 1.0 / 16777216.0;
	const uint SOBOL_MAX_POINTS = 256u * 256u;

	${dn(1)}
	${dn(2)}
	${dn(3)}
	${dn(4)}

	uint sobolHash( uint x ) {

		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}

`,ru=`

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

`,ou=`

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

	${fn(1)}
	${fn(2)}
	${fn(3)}
	${fn(4)}

`;class au extends Ws{constructor(){super({blending:Gs,uniforms:{resolution:{value:new ye}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`

				${Dr}
				${ru}

				varying vec2 vUv;
				uniform vec2 resolution;
				void main() {

					uint index = uint( gl_FragCoord.y ) * uint( resolution.x ) + uint( gl_FragCoord.x );
					gl_FragColor = generateSobolPoint( index );

				}
			`})}}class lu{generate(e,t=256){const n=new gn(t,t,{type:re,format:$,minFilter:Z,magFilter:Z,generateMipmaps:!1}),i=e.getRenderTarget();e.setRenderTarget(n);const a=new yt(new au);return a.material.resolution.set(t,t),a.render(e),e.setRenderTarget(i),a.dispose(),n}}function*cu(){const{_renderer:s,_fsQuad:e,_blendQuad:t,_primaryTarget:n,_blendTargets:i,_sobolTarget:a,_subframe:r,alpha:o,camera:l,material:u}=this,h=new vt,c=new vt,f=t.material;let[m,v]=i;for(;;){o?(f.opacity=this._opacityFactor/(this._samples+1),u.blending=Gs,u.opacity=1):(u.opacity=this._opacityFactor/(this._samples+1),u.blending=oa);const[x,g,A,p]=r,y=n.width,b=n.height;u.resolution.set(y*A,b*p),u.sobolTexture=a.texture,u.stratifiedTexture.init(20,u.bounces+u.transmissiveBounces+5),u.stratifiedTexture.next(),u.seed++;const B=this.tiles.x||1,C=this.tiles.y||1,F=B*C,M=Math.ceil(y*A),T=Math.ceil(b*p),S=Math.floor(x*y),E=Math.floor(g*b),w=Math.ceil(M/B),R=Math.ceil(T/C);for(let I=0;I<C;I++)for(let P=0;P<B;P++){u.cameraWorldMatrix.copy(l.matrixWorld),u.invProjectionMatrix.copy(l.projectionMatrixInverse);let L=0;l.projectionMatrix.elements[15]>0&&(L=1),l.isEquirectCamera&&(L=2),u.setDefine("CAMERA_TYPE",L);const G=s.getRenderTarget(),H=s.autoClear,N=s.getScissorTest();s.getScissor(h),s.getViewport(c);let J=P,K=I;if(!this.stableTiles){const ue=this._currentTile%(B*C);J=ue%B,K=~~(ue/B),this._currentTile=ue+1}const se=C-K-1;n.scissor.set(S+J*w,E+se*R,Math.min(w,M-J*w),Math.min(R,T-se*R)),n.viewport.set(S,E,M,T),s.setRenderTarget(n),s.setScissorTest(!0),s.autoClear=!1,e.render(s),s.setViewport(c),s.setScissor(h),s.setScissorTest(N),s.setRenderTarget(G),s.autoClear=H,o&&(f.target1=m.texture,f.target2=n.texture,s.setRenderTarget(v),t.render(s),s.setRenderTarget(G)),this._samples+=1/F,P===B-1&&I===C-1&&(this._samples=Math.round(this._samples)),yield}[m,v]=[v,m]}}const Ei=new ne;class uu{get material(){return this._fsQuad.material}set material(e){this._fsQuad.material=e}get target(){return this._alpha?this._blendTargets[1]:this._primaryTarget}set alpha(e){this._alpha!==e&&(e||(this._blendTargets[0].dispose(),this._blendTargets[1].dispose()),this._alpha=e,this.reset())}get alpha(){return this._alpha}get samples(){return this._samples}constructor(e){this.camera=null,this.tiles=new ye(1,1),this.stableNoise=!1,this.stableTiles=!0,this._samples=0,this._subframe=new vt(0,0,1,1),this._opacityFactor=1,this._renderer=e,this._alpha=!1,this._fsQuad=new yt(null),this._blendQuad=new yt(new iu),this._task=null,this._currentTile=0,this._sobolTarget=new lu().generate(e);const t=e.extensions.get("OES_texture_float_linear");this._primaryTarget=new gn(1,1,{format:$,type:t?re:le}),this._blendTargets=[new gn(1,1,{format:$,type:t?re:le}),new gn(1,1,{format:$,type:t?re:le})]}setSize(e,t){e=Math.ceil(e),t=Math.ceil(t),!(this._primaryTarget.width===e&&this._primaryTarget.height===t)&&(this._primaryTarget.setSize(e,t),this._blendTargets[0].setSize(e,t),this._blendTargets[1].setSize(e,t),this.reset())}dispose(){this._primaryTarget.dispose(),this._blendTargets[0].dispose(),this._blendTargets[1].dispose(),this._sobolTarget.dispose(),this._fsQuad.dispose(),this._blendQuad.dispose(),this._task=null}reset(){const{_renderer:e,_primaryTarget:t,_blendTargets:n}=this,i=e.getRenderTarget(),a=e.getClearAlpha();e.getClearColor(Ei),e.setRenderTarget(t),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(n[0]),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(n[1]),e.setClearColor(0,0),e.clearColor(),e.setClearColor(Ei,a),e.setRenderTarget(i),this._samples=0,this._task=null,this.stableNoise&&(this.material.seed=0)}update(){this._task||(this._task=cu.call(this)),this._task.next()}}function du(s,e,t){const n=s.index,a=s.attributes.position.count,r=n?n.count:a;let o=s.groups;o.length===0&&(o=[{count:r,start:0,materialIndex:0}]);let l;t.length<=255?l=new Uint8Array(a):l=new Uint16Array(a);for(let u=0;u<o.length;u++){const h=o[u],c=h.start,f=h.count,m=Math.min(f,r-c),v=Array.isArray(e)?e[h.materialIndex]:e,x=t.indexOf(v);for(let g=0;g<m;g++){let A=c+g;n&&(A=n.getX(A)),l[A]=x}}return new Y(l,1,!1)}function fu(s,e){const{attributes:t=[],normalMapRequired:n=!1}=e;if(!s.attributes.normal&&t&&t.includes("normal")&&s.computeVertexNormals(),!s.attributes.uv&&t&&t.includes("uv")){const i=s.attributes.position.count;s.setAttribute("uv",new Y(new Float32Array(i*2),2,!1))}if(!s.attributes.uv2&&t&&t.includes("uv2")){const i=s.attributes.position.count;s.setAttribute("uv2",new Y(new Float32Array(i*2),2,!1))}if(!s.attributes.tangent&&t&&t.includes("tangent"))if(n)s.index===null&&(s=aa(s)),s.computeTangents();else{const i=s.attributes.position.count;s.setAttribute("tangent",new Y(new Float32Array(i*4),4,!1))}if(!s.attributes.color&&t&&t.includes("color")){const i=s.attributes.position.count,a=new Float32Array(i*4);a.fill(1),s.setAttribute("color",new Y(a,4))}if(!s.index){const i=s.attributes.position.count,a=new Array(i);for(let r=0;r<i;r++)a[r]=r;s.setIndex(a)}}const hu=new Oe;function pu(){const s=new Te;return s.setAttribute("position",new Y(new Float32Array(9),3)),new et(s,hu)}class mu{get initialized(){return!!this.bvh}constructor(e){Array.isArray(e)||(e=[e]);const t=[...e];t.length===0&&t.push(pu()),this.bvhOptions={},this.attributes=["position","normal","tangent","color","uv","uv2"],this.objects=t,this.bvh=null,this.geometry=new Te,this.materials=null,this.textures=null,this.lights=[],this.staticGeometryGenerator=new Di(this.objects)}reset(){this.bvh=null,this.geometry.dispose(),this.geometry=new Te,this.materials=null,this.textures=null,this.lights=[],this.staticGeometryGenerator=new Di(this.objects)}dispose(){}prepScene(){if(this.bvh!==null)return;const{objects:e,staticGeometryGenerator:t,geometry:n,lights:i,attributes:a}=this;for(let u=0,h=e.length;u<h;u++)e[u].traverse(c=>{if(c.isMesh){const f=!!c.material.normalMap;fu(c.geometry,{attributes:a,normalMapRequired:f})}else(c.isRectAreaLight||c.isSpotLight||c.isPointLight||c.isDirectionalLight)&&i.push(c)});const r=new Set,o=t.getMaterials();o.forEach(u=>{for(const h in u){const c=u[h];c&&c.isTexture&&r.add(c)}}),t.attributes=a,t.generate(n);const l=du(n,o,o);n.setAttribute("materialIndex",l),n.clearGroups(),this.materials=o,this.textures=Array.from(r)}generate(){const{objects:e,staticGeometryGenerator:t,geometry:n,bvhOptions:i}=this;if(this.bvh===null)return this.prepScene(),this.bvh=new Ks(n,{strategy:Ar,maxLeafTris:1,...i}),{lights:this.lights,bvh:this.bvh,materials:this.materials,textures:this.textures,objects:e};{const{bvh:a}=this;return t.generate(n),a.refit(),{lights:this.lights,bvh:this.bvh,materials:this.materials,textures:this.textures,objects:e}}}}class gu extends Ps{set bokehSize(e){this.fStop=this.getFocalLength()/e}get bokehSize(){return this.getFocalLength()/this.fStop}constructor(...e){super(...e),this.fStop=1.4,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=25,this.anamorphicRatio=1}copy(e,t){return super.copy(e,t),this.fStop=e.fStop,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio,this}}function ws(s){return`${s.source.uuid}:${s.colorSpace}`}function Er(s){const e=new Set,t=[];for(let n=0,i=s.length;n<i;n++){const a=s[n],r=ws(a);e.has(r)||(e.add(r),t.push(a))}return t}const Rr=45,ht=Rr*4,Ri=14*4+0,Ii=14*4+1;class xu{constructor(){this._features={}}isUsed(e){return e in this._features}setUsed(e,t=!0){t===!1?delete this._features[e]:this._features[e]=!0}reset(){this._features={}}}class Au extends Ae{constructor(){super(new Float32Array(4),1,1),this.format=$,this.type=re,this.wrapS=Ke,this.wrapT=Ke,this.minFilter=Z,this.magFilter=Z,this.generateMipmaps=!1,this.threeCompatibilityTransforms=!1,this.features=new xu}setCastShadow(e,t){const n=this.image.data,i=e*ht+Ii;n[i]=t?0:1}getCastShadow(e){const t=this.image.data,n=e*ht+Ii;return!t[n]}setMatte(e,t){const n=this.image.data,i=e*ht+Ri;n[i]=t?1:0}getMatte(e){const t=this.image.data,n=e*ht+Ri;return!!t[n]}updateFrom(e,t){function n(g,A,p=-1){if(A in g&&g[A]){const y=ws(g[A]);return v[y]}else return p}function i(g,A,p){return A in g?g[A]:p}function a(g){return g.map||g.specularMap||g.displacementMap||g.normalMap||g.bumpMap||g.roughnessMap||g.metalnessMap||g.alphaMap||g.emissiveMap||g.clearcoatMap||g.clearcoatNormalMap||g.clearcoatRoughnessMap||g.iridescenceMap||g.iridescenceThicknessMap||g.specularIntensityMap||g.specularColorMap||g.transmissionMap||g.thicknessMap||g.sheenColorMap||g.sheenRoughnessMap||null}function r(g,A,p,y){let b;if(h?b=a(g):b=g[A]&&g[A].isTexture?g[A]:null,b){const B=b.matrix.elements;let C=0;p[y+C++]=B[0],p[y+C++]=B[3],p[y+C++]=B[6],C++,p[y+C++]=B[1],p[y+C++]=B[4],p[y+C++]=B[7],C++}return 8}let o=0;const l=e.length*Rr,u=Math.ceil(Math.sqrt(l))||1,{threeCompatibilityTransforms:h,image:c,features:f}=this,m=Er(t),v={};for(let g=0,A=m.length;g<A;g++)v[ws(m[g])]=g;c.width!==u&&(this.dispose(),c.data=new Float32Array(u*u*4),c.width=u,c.height=u);const x=c.data;f.reset();for(let g=0,A=e.length;g<A;g++){const p=e[g];if(p.isFogVolumeMaterial){f.setUsed("FOG");for(let B=0;B<ht;B++)x[o+B]=0;x[o+0*4+0]=p.color.r,x[o+0*4+1]=p.color.g,x[o+0*4+2]=p.color.b,x[o+2*4+3]=i(p,"emissiveIntensity",0),x[o+3*4+0]=p.emissive.r,x[o+3*4+1]=p.emissive.g,x[o+3*4+2]=p.emissive.b,x[o+13*4+1]=p.density,x[o+13*4+3]=0,x[o+14*4+2]=4,o+=ht;continue}x[o++]=p.color.r,x[o++]=p.color.g,x[o++]=p.color.b,x[o++]=n(p,"map"),x[o++]=i(p,"metalness",0),x[o++]=n(p,"metalnessMap"),x[o++]=i(p,"roughness",0),x[o++]=n(p,"roughnessMap"),x[o++]=i(p,"ior",1.5),x[o++]=i(p,"transmission",0),x[o++]=n(p,"transmissionMap"),x[o++]=i(p,"emissiveIntensity",0),"emissive"in p?(x[o++]=p.emissive.r,x[o++]=p.emissive.g,x[o++]=p.emissive.b):(x[o++]=0,x[o++]=0,x[o++]=0),x[o++]=n(p,"emissiveMap"),x[o++]=n(p,"normalMap"),"normalScale"in p?(x[o++]=p.normalScale.x,x[o++]=p.normalScale.y):(x[o++]=1,x[o++]=1),x[o++]=i(p,"clearcoat",0),x[o++]=n(p,"clearcoatMap"),x[o++]=i(p,"clearcoatRoughness",0),x[o++]=n(p,"clearcoatRoughnessMap"),x[o++]=n(p,"clearcoatNormalMap"),"clearcoatNormalScale"in p?(x[o++]=p.clearcoatNormalScale.x,x[o++]=p.clearcoatNormalScale.y):(x[o++]=1,x[o++]=1),o++,x[o++]=i(p,"sheen",0),"sheenColor"in p?(x[o++]=p.sheenColor.r,x[o++]=p.sheenColor.g,x[o++]=p.sheenColor.b):(x[o++]=0,x[o++]=0,x[o++]=0),x[o++]=n(p,"sheenColorMap"),x[o++]=i(p,"sheenRoughness",0),x[o++]=n(p,"sheenRoughnessMap"),x[o++]=n(p,"iridescenceMap"),x[o++]=n(p,"iridescenceThicknessMap"),x[o++]=i(p,"iridescence",0),x[o++]=i(p,"iridescenceIOR",1.3);const y=i(p,"iridescenceThicknessRange",[100,400]);x[o++]=y[0],x[o++]=y[1],"specularColor"in p?(x[o++]=p.specularColor.r,x[o++]=p.specularColor.g,x[o++]=p.specularColor.b):(x[o++]=1,x[o++]=1,x[o++]=1),x[o++]=n(p,"specularColorMap"),x[o++]=i(p,"specularIntensity",1),x[o++]=n(p,"specularIntensityMap");const b=i(p,"thickness",0)===0&&i(p,"attenuationDistance",1/0)===1/0;if(x[o++]=Number(b),o++,"attenuationColor"in p?(x[o++]=p.attenuationColor.r,x[o++]=p.attenuationColor.g,x[o++]=p.attenuationColor.b):(x[o++]=1,x[o++]=1,x[o++]=1),x[o++]=i(p,"attenuationDistance",1/0),x[o++]=n(p,"alphaMap"),x[o++]=p.opacity,x[o++]=p.alphaTest,!b&&p.transmission>0)x[o++]=0;else switch(p.side){case vn:x[o++]=1;break;case Es:x[o++]=-1;break;case Sn:x[o++]=0;break}o++,o++,x[o++]=Number(p.vertexColors)|Number(p.flatShading)<<1,x[o++]=Number(p.transparent),o+=r(p,"map",x,o),o+=r(p,"metalnessMap",x,o),o+=r(p,"roughnessMap",x,o),o+=r(p,"transmissionMap",x,o),o+=r(p,"emissiveMap",x,o),o+=r(p,"normalMap",x,o),o+=r(p,"clearcoatMap",x,o),o+=r(p,"clearcoatNormalMap",x,o),o+=r(p,"clearcoatRoughnessMap",x,o),o+=r(p,"sheenColorMap",x,o),o+=r(p,"sheenRoughnessMap",x,o),o+=r(p,"iridescenceMap",x,o),o+=r(p,"iridescenceThicknessMap",x,o),o+=r(p,"specularColorMap",x,o),o+=r(p,"specularIntensityMap",x,o)}this.needsUpdate=!0}}const _i=new ne;class vu extends sr{constructor(...e){super(...e);const t=this.texture;t.format=$,t.type=hs,t.minFilter=te,t.magFilter=te,t.wrapS=Ue,t.wrapT=Ue,t.setTextures=(...i)=>{this.setTextures(...i)};const n=new yt(new yu);this.fsQuad=n}setTextures(e,t,n,i){const a=Er(i),r=e.getRenderTarget(),o=e.toneMapping,l=e.getClearAlpha();e.getClearColor(_i);const u=a.length||1;this.setSize(t,n,u),e.setClearColor(0,0),e.toneMapping=ir;const h=this.fsQuad;for(let c=0,f=u;c<f;c++){const m=a[c];m&&(m.matrixAutoUpdate=!1,m.matrix.identity(),h.material.map=m,e.setRenderTarget(this,c),h.render(e),m.updateMatrix(),m.matrixAutoUpdate=!0)}h.material.map=null,e.setClearColor(_i,l),e.setRenderTarget(r),e.toneMapping=o}dispose(){super.dispose(),this.fsQuad.dispose()}}class yu extends Ds{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}constructor(){super({uniforms:{map:{value:null}},vertexShader:`
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
			`})}}function Ot(s){const e=new Uint16Array(s.length);for(let t=0,n=s.length;t<n;++t)e[t]=ke.toHalfFloat(s[t]);return e}function Pi(s,e,t=0,n=s.length){let i=t,a=t+n-1;for(;i<a;){const r=i+a>>1;s[r]<e?i=r+1:a=r}return i-t}function bu(s,e,t){return .2126*s+.7152*e+.0722*t}function Bu(s,e=le){const t=s.clone();t.source=new la({...t.image});const{width:n,height:i,data:a}=t.image;let r=a;if(t.type!==e){e===le?r=new Uint16Array(a.length):r=new Float32Array(a.length);let o;a instanceof Int8Array||a instanceof Int16Array||a instanceof Int32Array?o=2**(8*a.BYTES_PER_ELEMENT-1)-1:o=2**(8*a.BYTES_PER_ELEMENT)-1;for(let l=0,u=a.length;l<u;l++){let h=a[l];t.type===le&&(h=ke.fromHalfFloat(a[l])),t.type!==re&&t.type!==le&&(h/=o),e===le&&(r[l]=ke.toHalfFloat(h))}t.image.data=r,t.type=e}if(t.flipY){const o=r;r=r.slice();for(let l=0;l<i;l++)for(let u=0;u<n;u++){const h=i-l-1,c=4*(l*n+u),f=4*(h*n+u);r[f+0]=o[c+0],r[f+1]=o[c+1],r[f+2]=o[c+2],r[f+3]=o[c+3]}t.flipY=!1,t.image.data=r}return t}class Cu{constructor(){const e=new Ae(Ot(new Float32Array([1,1,1,1])),1,1);e.type=le,e.format=$,e.minFilter=te,e.magFilter=te,e.wrapS=Ue,e.wrapT=Ue,e.generateMipmaps=!1,e.needsUpdate=!0;const t=new Ae(Ot(new Float32Array([0,1])),1,2);t.type=le,t.format=At,t.minFilter=te,t.magFilter=te,t.generateMipmaps=!1,t.needsUpdate=!0;const n=new Ae(Ot(new Float32Array([0,0,1,1])),2,2);n.type=le,n.format=At,n.minFilter=te,n.magFilter=te,n.generateMipmaps=!1,n.needsUpdate=!0,this.map=e,this.marginalWeights=t,this.conditionalWeights=n,this.totalSum=1}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(e){const t=Bu(e);t.wrapS=Ue,t.wrapT=Ke;const{width:n,height:i,data:a}=t.image,r=new Float32Array(n*i),o=new Float32Array(n*i),l=new Float32Array(i),u=new Float32Array(i);let h=0,c=0;for(let g=0;g<i;g++){let A=0;for(let p=0;p<n;p++){const y=g*n+p,b=ke.fromHalfFloat(a[4*y+0]),B=ke.fromHalfFloat(a[4*y+1]),C=ke.fromHalfFloat(a[4*y+2]),F=bu(b,B,C);A+=F,h+=F,r[y]=F,o[y]=A}if(A!==0)for(let p=g*n,y=g*n+n;p<y;p++)r[p]/=A,o[p]/=A;c+=A,l[g]=A,u[g]=c}if(c!==0)for(let g=0,A=l.length;g<A;g++)l[g]/=c,u[g]/=c;const f=new Uint16Array(i),m=new Uint16Array(n*i);for(let g=0;g<i;g++){const A=(g+1)/i,p=Pi(u,A);f[g]=ke.toHalfFloat((p+.5)/i)}for(let g=0;g<i;g++)for(let A=0;A<n;A++){const p=g*n+A,y=(A+1)/n,b=Pi(o,y,g*n,n);m[p]=ke.toHalfFloat((b+.5)/n)}this.dispose();const{marginalWeights:v,conditionalWeights:x}=this;v.image={width:i,height:1,data:f},v.needsUpdate=!0,x.image={width:n,height:i,data:m},x.needsUpdate=!0,this.totalSum=h,this.map=t}}class Tu{constructor(){this.bokehSize=0,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=10,this.anamorphicRatio=1}updateFrom(e){e instanceof gu?(this.bokehSize=e.bokehSize,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio):(this.bokehSize=0,this.apertureRotation=0,this.apertureBlades=0,this.focusDistance=10,this.anamorphicRatio=1)}}const os=6,Fu=0,Su=1,Mu=2,wu=3,Du=4;class Eu{constructor(){const e=new Ae(new Float32Array(4),1,1);e.format=$,e.type=re,e.wrapS=Ke,e.wrapT=Ke,e.generateMipmaps=!1,e.minFilter=Z,e.magFilter=Z,this.tex=e,this.count=0}updateFrom(e,t=[]){const n=this.tex,i=Math.max(e.length*os,1),a=Math.ceil(Math.sqrt(i));n.image.width!==a&&(n.dispose(),n.image.data=new Float32Array(a*a*4),n.image.width=a,n.image.height=a);const r=n.image.data,o=new _,l=new _,u=new q,h=new Fn,c=new _,f=new _,m=new _(0,1,0);for(let v=0,x=e.length;v<x;v++){const g=e[v],A=v*os*4;let p=0;for(let b=0;b<os*4;b++)r[A+b]=0;g.getWorldPosition(l),r[A+p++]=l.x,r[A+p++]=l.y,r[A+p++]=l.z;let y=Fu;if(g.isRectAreaLight&&g.isCircular?y=Su:g.isSpotLight?y=Mu:g.isDirectionalLight?y=wu:g.isPointLight&&(y=Du),r[A+p++]=y,r[A+p++]=g.color.r,r[A+p++]=g.color.g,r[A+p++]=g.color.b,r[A+p++]=g.intensity,g.getWorldQuaternion(h),g.isRectAreaLight)o.set(g.width,0,0).applyQuaternion(h),r[A+p++]=o.x,r[A+p++]=o.y,r[A+p++]=o.z,p++,l.set(0,g.height,0).applyQuaternion(h),r[A+p++]=l.x,r[A+p++]=l.y,r[A+p++]=l.z,r[A+p++]=o.cross(l).length()*(g.isCircular?Math.PI/4:1);else if(g.isSpotLight){const b=g.radius||0;c.setFromMatrixPosition(g.matrixWorld),f.setFromMatrixPosition(g.target.matrixWorld),u.lookAt(c,f,m),h.setFromRotationMatrix(u),o.set(1,0,0).applyQuaternion(h),r[A+p++]=o.x,r[A+p++]=o.y,r[A+p++]=o.z,p++,l.set(0,1,0).applyQuaternion(h),r[A+p++]=l.x,r[A+p++]=l.y,r[A+p++]=l.z,r[A+p++]=Math.PI*b*b,r[A+p++]=b,r[A+p++]=g.decay,r[A+p++]=g.distance,r[A+p++]=Math.cos(g.angle),r[A+p++]=Math.cos(g.angle*(1-g.penumbra)),r[A+p++]=g.iesTexture?t.indexOf(g.iesTexture):-1}else if(g.isPointLight){const b=o.setFromMatrixPosition(g.matrixWorld);r[A+p++]=b.x,r[A+p++]=b.y,r[A+p++]=b.z,p++,p+=4,p+=1,r[A+p++]=g.decay,r[A+p++]=g.distance}else if(g.isDirectionalLight){const b=o.setFromMatrixPosition(g.matrixWorld),B=l.setFromMatrixPosition(g.target.matrixWorld);f.subVectors(b,B).normalize(),r[A+p++]=f.x,r[A+p++]=f.y,r[A+p++]=f.z}}n.needsUpdate=!0,this.count=e.length}}function Gi(s){const e=this,t=s.split(`
`);let n=0,i;e.verAngles=[],e.horAngles=[],e.candelaValues=[],e.tiltData={},e.tiltData.angles=[],e.tiltData.mulFactors=[];function a(c){return c=c.trim(),c=c.replace(/,/g," "),c=c.replace(/\s\s+/g," "),c.split(" ")}function r(c,f){for(;;){const m=t[n++],v=a(m);for(let x=0;x<v.length;++x)f.push(Number(v[x]));if(f.length===c)break}}function o(){let c=t[n++],f=a(c);e.tiltData.lampToLumGeometry=Number(f[0]),c=t[n++],f=a(c),e.tiltData.numAngles=Number(f[0]),r(e.tiltData.numAngles,e.tiltData.angles),r(e.tiltData.numAngles,e.tiltData.mulFactors)}function l(){const c=[];r(10,c),e.count=Number(c[0]),e.lumens=Number(c[1]),e.multiplier=Number(c[2]),e.numVerAngles=Number(c[3]),e.numHorAngles=Number(c[4]),e.gonioType=Number(c[5]),e.units=Number(c[6]),e.width=Number(c[7]),e.length=Number(c[8]),e.height=Number(c[9])}function u(){const c=[];r(3,c),e.ballFactor=Number(c[0]),e.blpFactor=Number(c[1]),e.inputWatts=Number(c[2])}for(;i=t[n++],!i.includes("TILT"););i.includes("NONE")||i.includes("INCLUDE")&&o(),l(),u();for(let c=0;c<e.numHorAngles;++c)e.candelaValues.push([]);r(e.numVerAngles,e.verAngles),r(e.numHorAngles,e.horAngles);for(let c=0;c<e.numHorAngles;++c)r(e.numVerAngles,e.candelaValues[c]);for(let c=0;c<e.numHorAngles;++c)for(let f=0;f<e.numVerAngles;++f)e.candelaValues[c][f]*=e.candelaValues[c][f]*e.multiplier*e.ballFactor*e.blpFactor;let h=-1;for(let c=0;c<e.numHorAngles;++c)for(let f=0;f<e.numVerAngles;++f){const m=e.candelaValues[c][f];h=h<m?m:h}if(h>0)for(let c=0;c<e.numHorAngles;++c)for(let f=0;f<e.numVerAngles;++f)e.candelaValues[c][f]/=h}class Ru extends Is{_getIESValues(e){const a=new Float32Array(64800);function r(u,h){let c=0,f=0,m=0,v=0,x=0,g=0;for(let T=0;T<e.numHorAngles-1;++T)if(h<e.horAngles[T+1]||T==e.numHorAngles-2){f=T,m=e.horAngles[T],v=e.horAngles[T+1];break}for(let T=0;T<e.numVerAngles-1;++T)if(u<e.verAngles[T+1]||T==e.numVerAngles-2){c=T,x=e.verAngles[T],g=e.verAngles[T+1];break}const A=v-m,p=g-x;if(p===0)return 0;const y=A===0?0:(h-m)/A,b=(u-x)/p,B=A===0?f:f+1,C=jt.lerp(e.candelaValues[f][c],e.candelaValues[B][c],y),F=jt.lerp(e.candelaValues[f][c+1],e.candelaValues[B][c+1],y);return jt.lerp(C,F,b)}const o=e.horAngles[0],l=e.horAngles[e.numHorAngles-1];for(let u=0;u<64800;++u){let h=u%360;const c=Math.floor(u/360);l-o!==0&&(h<o||h>=l)&&(h%=l*2,h>l&&(h=l*2-h)),a[u]=r(c,h)}return a}load(e,t,n,i){const a=new zt(this.manager);a.setResponseType("text"),a.setCrossOrigin(this.crossOrigin),a.setWithCredentials(this.withCredentials),a.setPath(this.path),a.setRequestHeader(this.requestHeader);const r=new Ae(null,360,180,At,le);return r.minFilter=te,r.magFilter=te,a.load(e,o=>{const l=new Gi(o);r.image.data=Ot(this._getIESValues(l)),r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}parse(e){const t=new Gi(e),n=new Ae(null,360,180,At,le);return n.minFilter=te,n.magFilter=te,n.image.data=Ot(this._getIESValues(t)),n.needsUpdate=!0,n}}const Li=new ne;class Iu extends sr{constructor(...e){super(...e);const t=this.texture;t.format=$,t.type=le,t.minFilter=te,t.magFilter=te,t.wrapS=Ke,t.wrapT=Ke,t.generateMipmaps=!1,t.updateFrom=(...i)=>{this.updateFrom(...i)};const n=new yt(new Oe);this.fsQuad=n,this.iesLoader=new Ru}async updateFrom(e,t){const n=e.getRenderTarget(),i=e.toneMapping,a=e.getClearAlpha();e.getClearColor(Li);const r=t.length||1;this.setSize(360,180,r),e.setClearColor(0,0),e.toneMapping=ir;const o=this.fsQuad;for(let l=0,u=r;l<u;l++){const h=t[l];h&&(h.matrixAutoUpdate=!1,h.matrix.identity(),o.material.map=h,o.material.transparent=!0,e.setRenderTarget(this,l),o.render(e),h.updateMatrix(),h.matrixAutoUpdate=!0)}o.material.map=null,e.setClearColor(Li,a),e.setRenderTarget(n),e.toneMapping=i,o.dispose()}dispose(){super.dispose(),this.fsQuad.dispose()}}const _u=`

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
`;function ji(s,e,t,n,i){if(e>n)throw new Error;const a=s.length/e,r=s.constructor.BYTES_PER_ELEMENT*8;let o=1;switch(s.constructor){case Uint8Array:case Uint16Array:case Uint32Array:o=2**r-1;break;case Int8Array:case Int16Array:case Int32Array:o=2**(r-1)-1;break}for(let l=0;l<a;l++){const u=4*l,h=e*l;for(let c=0;c<n;c++)t[i+u+c]=e>=c+1?s[h+c]/o:0}}class Pu extends ca{constructor(){super(),this._textures=[],this.type=re,this.format=$,this.internalFormat="RGBA32F"}updateAttribute(e,t){const n=this._textures[e];n.updateFrom(t);const i=n.image,a=this.image;if(i.width!==a.width||i.height!==a.height)throw new Error("FloatAttributeTextureArray: Attribute must be the same dimensions when updating single layer.");const{width:r,height:o,data:l}=a,h=r*o*4*e;let c=t.itemSize;c===3&&(c=4),ji(n.image.data,c,l,4,h),this.dispose(),this.needsUpdate=!0}setAttributes(e){const t=e[0].count,n=e.length;for(let c=0,f=n;c<f;c++)if(e[c].count!==t)throw new Error("FloatAttributeTextureArray: All attributes must have the same item count.");const i=this._textures;for(;i.length<n;){const c=new Mr;i.push(c)}for(;i.length>n;)i.pop();for(let c=0,f=n;c<f;c++)i[c].updateFrom(e[c]);const r=i[0].image,o=this.image;(r.width!==o.width||r.height!==o.height||r.depth!==n)&&(o.width=r.width,o.height=r.height,o.depth=n,o.data=new Float32Array(o.width*o.height*o.depth*4));const{data:l,width:u,height:h}=o;for(let c=0,f=n;c<f;c++){const m=i[c],x=u*h*4*c;let g=e[c].itemSize;g===3&&(g=4),ji(m.image.data,g,l,4,x)}this.dispose(),this.needsUpdate=!0}}class Gu extends Pu{updateNormalAttribute(e){this.updateAttribute(0,e)}updateTangentAttribute(e){this.updateAttribute(1,e)}updateUvAttribute(e){this.updateAttribute(2,e)}updateColorAttribute(e){this.updateAttribute(3,e)}updateFrom(e,t,n,i){this.setAttributes([e,t,n,i])}}const Lu=`

	struct PhysicalCamera {

		float focusDistance;
		float anamorphicRatio;
		float bokehSize;
		int apertureBlades;
		float apertureRotation;

	};

`,ju=`

	struct EquirectHdrInfo {

		sampler2D marginalWeights;
		sampler2D conditionalWeights;
		sampler2D map;

		float totalSum;

	};

`,Hu=`

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

`,ku=`

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

`,Ou=`

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

`,zu=`

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

`,Nu=`

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

`,Uu=`

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

`,Ju=`

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

	${zu}
	${Nu}
	${Uu}

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

`,Ku=`

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

`,Wu=`

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

`,Xu=`

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

`,Qu=`

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


`,Vu=`

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

`,Yu=`

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

`,qu=`

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

`,Zu=`

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

`,Hi=`

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
`,$u=`

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

`,ed=`

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

`,td=`

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

`,nd=`

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

`,sd=`

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
`,id=`

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

`,rd=`

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

`;function od(s){for(let e=s.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1)),n=s[e];s[e]=s[t],s[t]=n}return s}class ad{constructor(e,t){const n=e**t,i=new Uint16Array(n);let a=n;for(let r=0;r<n;r++)i[r]=r;this.samples=new Float32Array(t),this.strataCount=e,this.restart=function(){a=0},this.next=function(){const{samples:r}=this;a>=i.length&&(od(i),this.restart());let o=i[a++];for(let l=0;l<t;l++)r[l]=(o%e+Math.random())/e,o=Math.floor(o/e);return r}}}class ld{constructor(e,t){let n=0;for(const o of t)n+=o;const i=new Float32Array(n),a=[];let r=0;for(const o of t){const l=new ad(e,o);l.samples=new Float32Array(i.buffer,r,l.samples.length),r+=l.samples.length*4,a.push(l)}this.samples=i,this.strataCount=e,this.next=function(){for(const o of a)o.next();return i},this.restart=function(){for(const o of a)o.restart()}}}class cd extends Ae{constructor(e=1,t=1,n=8){super(new Float32Array(1),1,1,$,re),this.minFilter=Z,this.magFilter=Z,this.strata=n,this.sampler=null,this.init(e,t,n)}init(e,t,n=this.strata){const{image:i}=this;if(i.width===t&&i.height===e)return;const a=new Array(e*t).fill(4),r=new ld(n,a);i.width=t,i.height=e,i.data=r.samples,this.sampler=r,this.dispose(),this.next()}next(){this.sampler.next(),this.needsUpdate=!0}}function ud(s,e=Math.random){for(let t=s.length-1;t>0;t--){const n=~~((e()-1e-6)*t),i=s[t];s[t]=s[n],s[n]=i}}function dd(s,e){s.fill(0);for(let t=0;t<e;t++)s[t]=1}class ki{constructor(e){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(e),this.setSigma(1.5)}findVoid(){const{score:e,binaryPattern:t}=this;let n=1/0,i=-1;for(let a=0,r=t.length;a<r;a++){if(t[a]!==0)continue;const o=e[a];o<n&&(n=o,i=a)}return i}findCluster(){const{score:e,binaryPattern:t}=this;let n=-1/0,i=-1;for(let a=0,r=t.length;a<r;a++){if(t[a]!==1)continue;const o=e[a];o>n&&(n=o,i=a)}return i}setSigma(e){if(e===this.sigma)return;const t=~~(Math.sqrt(10*2*e**2)+1),n=2*t+1,i=new Float32Array(n*n),a=e*e;for(let r=-t;r<=t;r++)for(let o=-t;o<=t;o++){const l=(t+o)*n+r+t,u=r*r+o*o;i[l]=Math.E**(-u/(2*a))}this.lookupTable=i,this.sigma=e,this.radius=t}resize(e){this.size!==e&&(this.size=e,this.score=new Float32Array(e*e),this.binaryPattern=new Uint8Array(e*e))}invert(){const{binaryPattern:e,score:t,size:n}=this;t.fill(0);for(let i=0,a=e.length;i<a;i++)if(e[i]===0){const r=~~(i/n),o=i-r*n;this.updateScore(o,r,1),e[i]=1}else e[i]=0}updateScore(e,t,n){const{size:i,score:a,lookupTable:r}=this,o=this.radius,l=2*o+1;for(let u=-o;u<=o;u++)for(let h=-o;h<=o;h++){const c=(o+h)*l+u+o,f=r[c];let m=e+u;m=m<0?i+m:m%i;let v=t+h;v=v<0?i+v:v%i;const x=v*i+m;a[x]+=n*f}}addPointIndex(e){this.binaryPattern[e]=1;const t=this.size,n=~~(e/t),i=e-n*t;this.updateScore(i,n,1),this.count++}removePointIndex(e){this.binaryPattern[e]=0;const t=this.size,n=~~(e/t),i=e-n*t;this.updateScore(i,n,-1),this.count--}copy(e){this.resize(e.size),this.score.set(e.score),this.binaryPattern.set(e.binaryPattern),this.setSigma(e.sigma),this.count=e.count}}class fd{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new ki(1),this.savedSamples=new ki(1)}generate(){const{samples:e,savedSamples:t,sigma:n,majorityPointsRatio:i,size:a}=this;e.resize(a),e.setSigma(n);const r=Math.floor(a*a*i),o=e.binaryPattern;dd(o,r),ud(o,this.random);for(let c=0,f=o.length;c<f;c++)o[c]===1&&e.addPointIndex(c);for(;;){const c=e.findCluster();e.removePointIndex(c);const f=e.findVoid();if(c===f){e.addPointIndex(c);break}e.addPointIndex(f)}const l=new Uint32Array(a*a);t.copy(e);let u;for(u=e.count-1;u>=0;){const c=e.findCluster();e.removePointIndex(c),l[c]=u,u--}const h=a*a;for(u=t.count;u<h/2;){const c=t.findVoid();t.addPointIndex(c),l[c]=u,u++}for(t.invert();u<h;){const c=t.findCluster();t.removePointIndex(c),l[c]=u,u++}return{data:l,maxValue:h}}}function hd(s){return s>=3?4:s}function pd(s){switch(s){case 1:return At;case 2:return nr;default:return $}}class md extends Ae{constructor(e=64,t=1){super(new Float32Array(4),1,1,$,re),this.minFilter=Z,this.magFilter=Z,this.size=e,this.channels=t,this.update()}update(){const e=this.channels,t=this.size,n=new fd;n.channels=e,n.size=t;const i=hd(e),a=pd(i);(this.image.width!==t||a!==this.format)&&(this.image.width=t,this.image.height=t,this.image.data=new Float32Array(t**2*i),this.format=a,this.dispose());const r=this.image.data;for(let o=0,l=e;o<l;o++){const u=n.generate(),h=u.data,c=u.maxValue;for(let f=0,m=h.length;f<m;f++){const v=h[f]/c;r[f*i+o]=v}}this.needsUpdate=!0}}class gd extends Ws{onBeforeRender(){this.setDefine("FEATURE_DOF",this.physicalCamera.bokehSize===0?0:1),this.setDefine("FEATURE_BACKGROUND_MAP",this.backgroundMap?1:0),this.setDefine("FEATURE_FOG",this.materials.features.isUsed("FOG")?1:0)}constructor(e){super({transparent:!0,depthWrite:!1,defines:{FEATURE_MIS:1,FEATURE_RUSSIAN_ROULETTE:1,FEATURE_DOF:1,FEATURE_BACKGROUND_MAP:0,FEATURE_FOG:1,RANDOM_TYPE:2,CAMERA_TYPE:0,DEBUG_MODE:0,ATTR_NORMAL:0,ATTR_TANGENT:1,ATTR_UV:2,ATTR_COLOR:3},uniforms:{resolution:{value:new ye},bounces:{value:10},transmissiveBounces:{value:10},physicalCamera:{value:new Tu},bvh:{value:new Kc},attributesArray:{value:new Gu},materialIndexAttribute:{value:new Sr},materials:{value:new Au},textures:{value:new vu().texture},lights:{value:new Eu},iesProfiles:{value:new Iu().texture},cameraWorldMatrix:{value:new q},invProjectionMatrix:{value:new q},backgroundBlur:{value:0},environmentIntensity:{value:1},environmentRotation:{value:new q},envMapInfo:{value:new Cu},backgroundMap:{value:null},seed:{value:0},opacity:{value:1},filterGlossyFactor:{value:0},backgroundAlpha:{value:1},sobolTexture:{value:null},stratifiedTexture:{value:new cd},stratifiedOffsetTexture:{value:new md(64,1)}},vertexShader:`

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
				${$c}
				${tu}
				${eu}

				// uniform structs
				${Lu}
				${Hu}
				${ju}
				${ku}

				// random
				#if RANDOM_TYPE == 2 	// Stratified List

					${rd}

				#elif RANDOM_TYPE == 1 	// Sobol

					${Hi}
					${Dr}
					${ou}

					#define rand(v) sobol(v)
					#define rand2(v) sobol2(v)
					#define rand3(v) sobol3(v)
					#define rand4(v) sobol4(v)

				#else 					// PCG

					${Hi}

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
				${Zu}
				${qu}
				${_u}
				${Yu}
				${Vu}

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
				${Ou}
				${Qu}
				${Ju}
				${Wu}
				${Xu}
				${Ku}

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

				${$u}
				${ed}
				${nd}
				${td}
				${id}
				${sd}

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

			`}),this.setValues(e)}}const ee=.072;function Ut(s){switch(s){case"sphere":return new fa(ee*.52,8,6);case"star":{const e=ee*.64,t=ee*.25,n=ee*.42,i=new ua;for(let r=0;r<10;r++){const o=r*Math.PI*2/10-Math.PI/2,l=r%2===0?e:t;r===0?i.moveTo(Math.cos(o)*l,Math.sin(o)*l):i.lineTo(Math.cos(o)*l,Math.sin(o)*l)}i.closePath();const a=new da(i,{depth:n,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelSegments:1});return a.translate(0,0,-n/2),a}default:return new Rs(ee,ee,ee)}}function Jt({material:s,color:e}){return s==="original"?d.jsx("meshStandardMaterial",{color:e,roughness:.65,metalness:.05}):s==="fluid"?d.jsx("meshPhysicalMaterial",{color:e,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5,envMapIntensity:1}):s==="metal"?d.jsx("meshStandardMaterial",{color:e,roughness:.06,metalness:.95,envMapIntensity:2}):s==="emissive"?d.jsx("meshStandardMaterial",{color:e,emissive:e,emissiveIntensity:2.2,roughness:.55,metalness:0}):d.jsx("meshStandardMaterial",{color:e,roughness:.65,metalness:.05})}const xd={x:1,y:1,z:1},Ad={deformation:"none",fluidDistort:.35,fluidSpeed:1.5},hn="0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)";function vd(s,e){const t=new ne(e);switch(s){case"fluid":return new he({color:t,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5,envMapIntensity:1});case"metal":return new De({color:t,roughness:.06,metalness:.95,envMapIntensity:2});case"emissive":return new De({color:t,emissive:t,emissiveIntensity:2.2,roughness:.55});default:return new De({color:t,roughness:.65,metalness:.05})}}function yd(s,e,t,n,i,a){const r=new _s,o=t*.47,l=n*.46,u=i*.47;for(let h=0;h<e;h++)r.position.set((Math.random()-.5)*2*o,(Math.random()-.5)*2*l,(Math.random()-.5)*2*u),r.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),r.scale.set(a.x,a.y,a.z),r.updateMatrix(),s.setMatrixAt(h,r.matrix);s.instanceMatrix.needsUpdate=!0}function bd({url:s,count:e,width:t,height:n,depth:i,markSize:a,markMaterial:r,color:o}){const{scene:l}=bt(s),{normScale:u,center:h}=D.useMemo(()=>{l.updateMatrixWorld(!0);const b=new oe().setFromObject(l),B=new _,C=new _;b.getSize(B),b.getCenter(C);const F=Math.max(B.x,B.y,B.z,.001);return{normScale:ee/F,center:C}},[l]),c=D.useMemo(()=>{const b=t*.47,B=n*.46,C=i*.47;return Array.from({length:e},()=>({position:[(Math.random()-.5)*2*b,(Math.random()-.5)*2*B,(Math.random()-.5)*2*C],rotation:[Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2]}))},[e,t,n,i]),f=D.useMemo(()=>c.map(()=>l.clone(!0)),[l,c]);D.useEffect(()=>()=>{f.forEach(b=>b.traverse(B=>{B instanceof et&&B.geometry.dispose()}))},[f]);const m=D.useMemo(()=>r!=="original"?vd(r,o):null,[r,o]);D.useEffect(()=>()=>{m==null||m.dispose()},[m]),D.useEffect(()=>{f.forEach(b=>{b.traverse(B=>{!(B instanceof et)||!m||(B.material=m)})})},[m,f]);const v=u*a.x,x=u*a.y,g=u*a.z,A=-h.x*v,p=-h.y*x,y=-h.z*g;return d.jsx(d.Fragment,{children:f.map((b,B)=>d.jsx("group",{position:c[B].position,rotation:c[B].rotation,children:d.jsx("primitive",{object:b,position:[A,p,y],scale:[v,x,g]})},B))})}function Bd({width:s,depth:e,height:t,color:n,position:i,particleCount:a,markShape:r,markMaterial:o,markSize:l=xd,structural:u=Ad,customModelUrl:h,labelShow:c,labelData:f}){const m=D.useRef(null),v=D.useMemo(()=>Ut(r),[r]),x=D.useMemo(()=>{const A=new Rs(s,t,e),p=new ha(A);return A.dispose(),p},[s,t,e]);D.useEffect(()=>{const A=m.current;A&&yd(A,a,s,t,e,l)},[a,s,e,t,r,l.x,l.y,l.z]),D.useEffect(()=>()=>{v.dispose()},[v]),D.useEffect(()=>()=>{x.dispose()},[x]);const g=r==="custom"&&!!h;return d.jsxs("group",{position:i,children:[d.jsx("lineSegments",{geometry:x,children:d.jsx("lineBasicMaterial",{color:"#666666",transparent:!0,opacity:.7})}),g?d.jsx(D.Suspense,{fallback:null,children:d.jsx(bd,{url:h,count:Math.max(5,a),width:s,height:t,depth:e,markSize:l,markMaterial:o,color:n})}):d.jsx("instancedMesh",{ref:m,args:[v,void 0,a],children:d.jsx(Jt,{material:o,structural:u,color:n})},`${a}-${r}`),c&&d.jsxs(d.Fragment,{children:[f.top&&d.jsxs(d.Fragment,{children:[d.jsx("group",{position:[0,t/2+.3,0],userData:{isLabel:!0,labelText:f.top,labelPos:"top"}}),d.jsx(me,{position:[0,t/2+.3,0],center:!0,style:{pointerEvents:"none"},children:d.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:hn,whiteSpace:"nowrap",userSelect:"none"},children:f.top})})]}),f.bottom&&d.jsxs(d.Fragment,{children:[d.jsx("group",{position:[0,-(t/2+.3),0],userData:{isLabel:!0,labelText:f.bottom,labelPos:"bottom"}}),d.jsx(me,{position:[0,-(t/2+.3),0],center:!0,style:{pointerEvents:"none"},children:d.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:hn,whiteSpace:"nowrap",userSelect:"none"},children:f.bottom})})]}),f.left&&d.jsxs(d.Fragment,{children:[d.jsx("group",{position:[-(s/2+.2),0,0],userData:{isLabel:!0,labelText:f.left,labelPos:"left"}}),d.jsx(me,{position:[-(s/2+.2),0,0],style:{pointerEvents:"none"},children:d.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:hn,whiteSpace:"nowrap",userSelect:"none",display:"block",textAlign:"right",transform:"translate(-100%, -50%)"},children:f.left})})]}),f.right&&d.jsxs(d.Fragment,{children:[d.jsx("group",{position:[s/2+.2,0,0],userData:{isLabel:!0,labelText:f.right,labelPos:"right"}}),d.jsx(me,{position:[s/2+.2,0,0],style:{pointerEvents:"none"},children:d.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:hn,whiteSpace:"nowrap",userSelect:"none",display:"block",transform:"translateY(-50%)"},children:f.right})})]})]})]})}function Cd(s,e){const t=new ne(e);switch(s){case"fluid":return new he({color:t,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5});case"metal":return new De({color:t,roughness:.06,metalness:.95});case"emissive":return new De({color:t,emissive:t,emissiveIntensity:2.2,roughness:.55});default:return new De({color:t,roughness:.65,metalness:.05})}}function Td({url:s,markMaterial:e,markSize:t,color:n}){const{scene:i}=bt(s),{clone:a,sx:r,sy:o,sz:l,ox:u,oy:h,oz:c}=D.useMemo(()=>{i.updateMatrixWorld(!0);const m=new oe().setFromObject(i),v=new _,x=new _;m.getSize(v),m.getCenter(x);const g=Math.max(v.x,v.y,v.z,.001),A=ee/g,p=A*t.x,y=A*t.y,b=A*t.z;return{clone:i.clone(!0),sx:p,sy:y,sz:b,ox:-x.x*p,oy:-x.y*y,oz:-x.z*b}},[i,t.x,t.y,t.z]),f=D.useMemo(()=>e!=="original"?Cd(e,n):null,[e,n]);return D.useEffect(()=>()=>{f==null||f.dispose()},[f]),D.useEffect(()=>{f&&a.traverse(m=>{m instanceof et&&(m.material=f)})},[f,a]),d.jsx("primitive",{object:a,position:[u,h,c],scale:[r,o,l]})}function Fd({position:s,count:e,markShape:t,markMaterial:n,markSize:i,color:a,structural:r,customModelUrl:o}){const l=D.useMemo(()=>Ut(t),[t]);D.useEffect(()=>()=>{l.dispose()},[l]);const u=Math.sqrt(e)*ee*Math.max(i.x,i.y,i.z)*2.2,h=D.useMemo(()=>Array.from({length:e},(f,m)=>({x:(Math.random()-.5)*u,y:ee*2+m*ee*1.2+Math.random()*ee*.5,z:(Math.random()-.5)*u,rx:Math.random()*Math.PI*2,ry:Math.random()*Math.PI*2,rz:Math.random()*Math.PI*2})),[e,u]),c=-ee*.7;return d.jsxs("group",{position:s,children:[d.jsx(yn,{type:"fixed",children:d.jsx(rr,{args:[3,.05,3],position:[0,c,0]})}),h.map((f,m)=>d.jsx(yn,{position:[f.x,f.y,f.z],rotation:[f.rx,f.ry,f.rz],colliders:"hull",restitution:.1,friction:.8,linearDamping:.4,angularDamping:.5,children:t==="custom"&&o?d.jsx(D.Suspense,{fallback:null,children:d.jsx(Td,{url:o,markMaterial:n,markSize:i,color:a})}):d.jsx("mesh",{geometry:l,scale:[i.x,i.y,i.z],children:d.jsx(Jt,{material:n,structural:r,color:a})})},m))]})}function Sd(s){return 2*Math.atan(12/s)*180/Math.PI}const Ir={1:[0,.5,18],2:[0,2,26],3:[0,4,64]};function Md({level:s,fov:e,focalLength:t}){const{camera:n,controls:i}=ar(),a=D.useRef(s),r=D.useRef(t);return D.useEffect(()=>{var o,l,u;if(n instanceof Ps){if(a.current!==s){const[h,c,f]=Ir[s];n.position.set(h,c,f),n.lookAt(0,0,0);const m=i;(o=m==null?void 0:m.target)==null||o.set(0,0,0),(l=m==null?void 0:m.update)==null||l.call(m),a.current=s}if(r.current!==t&&r.current>0){const h=t/r.current,c=i;c!=null&&c.spherical?(c.spherical.radius*=h,(u=c.update)==null||u.call(c)):n.position.multiplyScalar(h)}r.current=t,n.fov=e,n.updateProjectionMatrix()}},[n,i,s,e,t]),null}const In=14;function Xs({url:s,material:e,color:t,sz:n}){const{scene:i}=bt(s),a=D.useMemo(()=>{const r=i.clone(!0);r.position.set(0,0,0),r.rotation.set(0,0,0),r.scale.set(1,1,1),r.updateMatrixWorld(!0);const o=new oe().setFromObject(r);if(!o.isEmpty()){const l=new _;o.getSize(l);const u=Math.max(l.x,l.y,l.z,.001),h=ee/u,c=new _;o.getCenter(c),r.scale.setScalar(h),r.position.set(-c.x*h,-c.y*h,-c.z*h)}if(e!=="original"){const l=e==="fluid"?new he({color:new ne(t),transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5}):new De({color:new ne(t),roughness:e==="metal"?.06:e==="emissive"?.55:.65,metalness:e==="metal"?.95:0,emissive:e==="emissive"?new ne(t):new ne(0,0,0),emissiveIntensity:e==="emissive"?2.2:0});r.traverse(u=>{u instanceof et&&(u.material=l)})}return r},[i,e,t]);return d.jsx("group",{scale:n,children:d.jsx("primitive",{object:a})})}const pt=In*ee;function Qs(s,e,t){const n=e[t%Math.max(1,e.length)],i={},a=Object.entries(s);for(const[r,o]of a)o&&(o==="weight"&&(i[r]=`${(n==null?void 0:n.percentage.toFixed(1))??"?"}%`),o==="garbageType"&&(i[r]=(n==null?void 0:n.name)??"?"),o==="count"&&(i[r]=String(e.length)));return i}const wd="0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)";function Ne({pos:s,text:e}){const t=s==="top"?"translate(-50%, -100%)":s==="bottom"?"translate(-50%, 0)":s==="left"?"translate(-100%, -50%)":"translateY(-50%)";return d.jsx("span",{"data-phys-label":"",style:{display:"block",fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:wd,whiteSpace:"nowrap",userSelect:"none",transform:t},children:e})}function xt(s,e,t){var i;const n=Math.max(...t.map(a=>a.percentage),1);return s==="weight"?.2+1.8*((((i=t[e%Math.max(1,t.length)])==null?void 0:i.percentage)??n)/n):s==="count"?Math.min(2,t.length/5):1}function _r(s,e,t){return s==="center"?[0,0,0]:e==="X"?[0,s==="start"?-t:t,0]:[s==="start"?t:-t,0,0]}function Dd({config:s,layers:e,bindings:t,markLabelConfig:n}){var m;const i=D.useMemo(()=>Ut(s.shape),[s.shape]);D.useEffect(()=>()=>{i.dispose()},[i]);const a=Math.PI/180,r=In,o=t.markColor==="garbageType"?((m=e[0])==null?void 0:m.color)??s.color:s.color,l={x:s.size.x*(t.markSizeX?xt(t.markSizeX,0,e):1),y:s.size.y*(t.markSizeY?xt(t.markSizeY,0,e):1),z:s.size.z*(t.markSizeZ?xt(t.markSizeZ,0,e):1)},u=r*l.y*.036+.5,h=r*l.x*.036+.5,c=Qs(n.slots,e,0),f=[s.orientation.x*a,s.orientation.y*a,s.orientation.z*a];return d.jsxs("group",{position:[s.position.x,s.position.y,s.position.z],rotation:f,children:[s.shape==="custom"&&s.customModelUrl?d.jsx(D.Suspense,{fallback:null,children:d.jsx(Xs,{url:s.customModelUrl,material:s.material,color:o,sz:[r*l.x,r*l.y,r*l.z]})}):d.jsx("mesh",{geometry:i,scale:[r*l.x,r*l.y,r*l.z],children:d.jsx(Jt,{material:s.material,structural:s.structural,color:o})}),n.show&&d.jsxs(d.Fragment,{children:[c.top&&d.jsxs(d.Fragment,{children:[d.jsx("group",{position:[0,u,0],userData:{isLabel:!0,labelText:c.top,labelPos:"top"}}),d.jsx(me,{zIndexRange:[50,0],position:[0,u,0],style:{pointerEvents:"none"},children:d.jsx(Ne,{pos:"top",text:c.top})})]}),c.bottom&&d.jsxs(d.Fragment,{children:[d.jsx("group",{position:[0,-u,0],userData:{isLabel:!0,labelText:c.bottom,labelPos:"bottom"}}),d.jsx(me,{zIndexRange:[50,0],position:[0,-u,0],style:{pointerEvents:"none"},children:d.jsx(Ne,{pos:"bottom",text:c.bottom})})]}),c.left&&d.jsxs(d.Fragment,{children:[d.jsx("group",{position:[-h,0,0],userData:{isLabel:!0,labelText:c.left,labelPos:"left"}}),d.jsx(me,{zIndexRange:[50,0],position:[-h,0,0],style:{pointerEvents:"none"},children:d.jsx(Ne,{pos:"left",text:c.left})})]}),c.right&&d.jsxs(d.Fragment,{children:[d.jsx("group",{position:[h,0,0],userData:{isLabel:!0,labelText:c.right,labelPos:"right"}}),d.jsx(me,{zIndexRange:[50,0],position:[h,0,0],style:{pointerEvents:"none"},children:d.jsx(Ne,{pos:"right",text:c.right})})]})]})]})}function Ed({markConfig:s,collection1Config:e,color:t,layers:n,bindings:i,markLabelConfig:a}){const r=i.c1AlignCount==="count"?n.length:e.alignCount,{alignAxis:o,alignSpacing:l,alignAnchor:u}=e,h=D.useMemo(()=>Ut(s.shape),[s.shape]);D.useEffect(()=>()=>{h.dispose()},[h]);const c=In,f=Math.PI/180,m=(r-1)/2,v=[s.orientation.x*f,s.orientation.y*f,s.orientation.z*f];function x(A){var p;return i.markColor==="garbageType"?((p=n[A%Math.max(1,n.length)])==null?void 0:p.color)??t:t}function g(A){const p={x:s.size.x*(i.markSizeX?xt(i.markSizeX,A,n):1),y:s.size.y*(i.markSizeY?xt(i.markSizeY,A,n):1),z:s.size.z*(i.markSizeZ?xt(i.markSizeZ,A,n):1)};return[c*p.x,c*p.y,c*p.z]}return d.jsx("group",{children:Array.from({length:r},(A,p)=>{const y=(p-m)*l,b=g(p),B=o==="X"?b[1]*.036:b[0]*.036,C=_r(u,o,B),F=o==="X"?[y+C[0],C[1],C[2]]:[C[0],y+C[1],C[2]],M=b[1]*.036+.5,T=b[0]*.036+.5,S=Qs(a.slots,n,p);return d.jsxs("group",{position:F,rotation:v,children:[s.shape==="custom"&&s.customModelUrl?d.jsx(D.Suspense,{fallback:null,children:d.jsx(Xs,{url:s.customModelUrl,material:s.material,color:x(p),sz:b})}):d.jsx("mesh",{geometry:h,scale:b,children:d.jsx(Jt,{material:s.material,structural:s.structural,color:x(p)})}),a.show&&d.jsxs(d.Fragment,{children:[S.top&&d.jsxs(d.Fragment,{children:[d.jsx("group",{position:[0,M,0],userData:{isLabel:!0,labelText:S.top,labelPos:"top"}}),d.jsx(me,{zIndexRange:[50,0],position:[0,M,0],style:{pointerEvents:"none"},children:d.jsx(Ne,{pos:"top",text:S.top})})]}),S.bottom&&d.jsxs(d.Fragment,{children:[d.jsx("group",{position:[0,-M,0],userData:{isLabel:!0,labelText:S.bottom,labelPos:"bottom"}}),d.jsx(me,{zIndexRange:[50,0],position:[0,-M,0],style:{pointerEvents:"none"},children:d.jsx(Ne,{pos:"bottom",text:S.bottom})})]}),S.left&&d.jsxs(d.Fragment,{children:[d.jsx("group",{position:[-T,0,0],userData:{isLabel:!0,labelText:S.left,labelPos:"left"}}),d.jsx(me,{zIndexRange:[50,0],position:[-T,0,0],style:{pointerEvents:"none"},children:d.jsx(Ne,{pos:"left",text:S.left})})]}),S.right&&d.jsxs(d.Fragment,{children:[d.jsx("group",{position:[T,0,0],userData:{isLabel:!0,labelText:S.right,labelPos:"right"}}),d.jsx(me,{zIndexRange:[50,0],position:[T,0,0],style:{pointerEvents:"none"},children:d.jsx(Ne,{pos:"right",text:S.right})})]})]})]},p)})})}function Pr({markConfig:s,collection1Config:e,color:t,position:n,layers:i,bindings:a,heightOverride:r,markLabelConfig:o,colLabelConfig:l,layerIndex:u}){if(e.arrangement==="alignment")return d.jsx("group",{position:n,children:d.jsx(Ed,{markConfig:s,collection1Config:e,color:t,layers:i,bindings:a,markLabelConfig:o})});if(e.arrangement==="piling")return d.jsx(Fd,{position:n,count:e.pilingCount,markShape:s.shape,markMaterial:s.material,markSize:s.size,color:t,structural:s.structural,customModelUrl:s.shape==="custom"?s.customModelUrl:void 0},e.pilingCount);const{scatterDimensions:h,scatterCount:c}=e,f=r??h.y,m=Qs(l.slots,i,u);return d.jsx(Bd,{width:h.x,depth:h.z,height:f,color:t,position:n,particleCount:Math.max(5,c),markShape:s.shape,markMaterial:s.material,markSize:s.size,structural:s.structural,customModelUrl:s.shape==="custom"?s.customModelUrl:void 0,labelShow:l.show,labelData:m})}const An=8;function Rd({markConfig:s,collection1Config:e,layers:t,bindings:n,markLabelConfig:i,colLabelConfig:a}){var u,h;const r=((u=t[0])==null?void 0:u.color)??e.color,o=Math.max(...t.map(c=>c.percentage),1),l=n.scatterSize==="weight"&&e.arrangement==="scattering"?Math.max(.5,(((h=t[0])==null?void 0:h.percentage)??50)/o*An):void 0;return d.jsx(Pr,{markConfig:s,collection1Config:e,color:r,position:[0,0,0],layers:t,bindings:n,heightOverride:l,markLabelConfig:i,colLabelConfig:a,layerIndex:0})}function Id({markConfig:s,collection1Config:e,collection2Config:t,layers:n,bindings:i,markLabelConfig:a,colLabelConfig:r}){const{arrangement:o,alignCount:l,alignAxis:u,alignSpacing:h,alignAnchor:c,scatterCount:f,scatterDimensions:m,color:v}=t,x=i.c2AlignCount==="count"?n.length:l,g=D.useMemo(()=>{if(o==="alignment"){const p=Array.from({length:x},(M,T)=>{const S=n[T%Math.max(1,n.length)];return{color:(S==null?void 0:S.color)??v,name:(S==null?void 0:S.name)??`Group ${T+1}`,pct:(S==null?void 0:S.percentage)??0}}),y=Math.max(...n.map(M=>M.percentage),1),b=p.map(M=>{if(e.arrangement==="scattering"){const w=e.scatterDimensions;return u==="X"?w.x:i.scatterSize==="weight"?Math.max(.5,M.pct/y*An):w.y}const T=e,S=s.size.x*pt,E=s.size.y*pt;return u==="X"?T.alignAxis==="X"?(T.alignCount-1)*T.alignSpacing+S:S:T.alignAxis==="Y"?(T.alignCount-1)*T.alignSpacing+E:E}),B=p.map(M=>{if(e.arrangement==="scattering"){const S=e.scatterDimensions;return u==="X"?i.scatterSize==="weight"?Math.max(.5,M.pct/y*An):S.y:S.x}const T=e;return u==="X"?T.alignAxis==="Y"?(T.alignCount-1)*T.alignSpacing+s.size.y*pt:s.size.y*pt:T.alignAxis==="X"?(T.alignCount-1)*T.alignSpacing+s.size.x*pt:s.size.x*pt});let F=-(b.reduce((M,T)=>M+T,0)+(x-1)*h)/2;return p.map((M,T)=>{const S=b[T],E=B[T],w=F+S/2;F+=S+h;const R=_r(c,u,E/2),I=u==="X"?[w+R[0],R[1],R[2]]:[R[0],w+R[1],R[2]];return{...M,position:I,perpExt:E}})}return Array.from({length:f},(p,y)=>{const b=n[y%Math.max(1,n.length)];return{position:[(Math.random()-.5)*m.x,(Math.random()-.5)*m.y,(Math.random()-.5)*m.z],color:(b==null?void 0:b.color)??v,name:(b==null?void 0:b.name)??`Group ${y+1}`,pct:(b==null?void 0:b.percentage)??0,perpExt:0}})},[o,x,u,h,c,f,m.x,m.y,m.z,n,v,i.scatterSize,e.arrangement,e.alignAxis,e.alignCount,e.alignSpacing,e.scatterDimensions.x,e.scatterDimensions.y,s.size.x,s.size.y]),A=Math.max(...n.map(p=>p.percentage),1);return d.jsx("group",{children:g.map(({position:p,color:y,name:b,pct:B},C)=>{const F=i.scatterSize==="weight"&&e.arrangement==="scattering"?Math.max(.5,B/A*An):void 0;return d.jsx(Pr,{markConfig:s,collection1Config:e,color:y,position:p,layers:n,bindings:i,heightOverride:F,markLabelConfig:a,colLabelConfig:r,layerIndex:C%Math.max(1,n.length)},C)})})}function _d({config:s}){const e=D.useMemo(()=>Ut(s.shape),[s.shape]);D.useEffect(()=>()=>{e.dispose()},[e]);const t=Math.PI/180,n=In,i=[s.orientation.x*t,s.orientation.y*t,s.orientation.z*t];return d.jsx("group",{position:[s.position.x,s.position.y,s.position.z],rotation:i,children:s.shape==="custom"&&s.customModelUrl?d.jsx(D.Suspense,{fallback:null,children:d.jsx(Xs,{url:s.customModelUrl,material:s.material,color:s.color,sz:[n*s.size.x,n*s.size.y,n*s.size.z]})}):d.jsx("mesh",{geometry:e,scale:[n*s.size.x,n*s.size.y,n*s.size.z],children:d.jsx(Jt,{material:s.material,structural:s.structural,color:s.color})})})}function Pd({onSamplesUpdate:s,downloadRenderRef:e}){const{gl:t,scene:n,camera:i}=ar(),a=D.useRef(s);return a.current=s,D.useEffect(()=>{let r=!1,o=null,l=null,u=null;async function h(){if(await new Promise(y=>setTimeout(y,0)),r)return;const c=new gd;l=new uu(t),l.setSize(t.domElement.width,t.domElement.height),l.camera=i,l.material=c,n.updateMatrixWorld(!0);const f=new mu(n),{bvh:m,textures:v,materials:x,lights:g}=f.generate();if(r){l.dispose();return}const{geometry:A}=f;if(c.bvh.updateFrom(m),c.attributesArray.updateFrom(A.attributes.normal,A.attributes.tangent,A.attributes.uv,A.attributes.color),c.materialIndexAttribute.updateFrom(A.attributes.materialIndex),c.textures.setTextures(t,2048,2048,v),c.materials.updateFrom(x,v),c.lights.updateFrom(g),n.environment)try{c.envMapInfo.updateFrom(n.environment)}catch{}c.uniforms.backgroundAlpha.value=0,u=new yt(new Oe({map:l.target.texture})),e.current=()=>{const y=l.samples;t.domElement.toBlob(async b=>{if(!b)return;const B=document.createElement("canvas");B.width=t.domElement.width,B.height=t.domElement.height;const C=B.getContext("2d"),F=await createImageBitmap(b);C.drawImage(F,0,0),n.updateMatrixWorld();const M=[];if(n.traverse(T=>{if(T.userData.isLabel){const S=new _;T.getWorldPosition(S),M.push({worldPos:S,text:T.userData.labelText,pos:T.userData.labelPos??"top"})}}),M.length>0){const T=window.devicePixelRatio||1,S=Math.round(12*T);C.save(),C.font=`${S}px 'Courier New', monospace`,C.shadowColor="rgba(0,0,0,1)",C.shadowBlur=6*T,C.shadowOffsetX=0,C.shadowOffsetY=T,C.fillStyle="#e0e0e0";for(const{worldPos:E,text:w,pos:R}of M){const I=E.clone().project(i);if(I.z>1)continue;const P=(I.x*.5+.5)*B.width,L=(I.y*-.5+.5)*B.height;R==="top"?(C.textAlign="center",C.textBaseline="bottom"):R==="bottom"?(C.textAlign="center",C.textBaseline="top"):R==="left"?(C.textAlign="right",C.textBaseline="middle"):(C.textAlign="left",C.textBaseline="middle"),C.fillText(w,P,L)}C.restore()}B.toBlob(T=>{if(!T)return;const S=URL.createObjectURL(T),E=document.createElement("a");E.download=`render_${y}spp.png`,E.href=S,E.click(),URL.revokeObjectURL(S)},"image/png")},"image/png")},i.updateMatrixWorld();function p(){r||!l||!u||(i.updateMatrixWorld(),l.update(),u.material.map=l.target.texture,t.setRenderTarget(null),u.render(t),a.current(l.samples),o=requestAnimationFrame(p))}o=requestAnimationFrame(p)}return h().catch(console.error),()=>{r=!0,o!==null&&cancelAnimationFrame(o),l==null||l.dispose(),u==null||u.dispose(),e.current=null}},[t,n,i,e]),null}function Gd({config:s}){const e=s.background==="ocean";return d.jsxs(d.Fragment,{children:[e?d.jsx("color",{attach:"background",args:["#7ab8d4"]}):d.jsx("color",{attach:"background",args:["#050505"]}),d.jsx(js,{preset:s.hdriPreset,background:!1}),e&&d.jsxs(d.Fragment,{children:[d.jsx(su,{distance:45e4,sunPosition:[5,1.2,8],turbidity:9,rayleigh:3,mieCoefficient:.005,mieDirectionalG:.7}),d.jsx("fog",{attach:"fog",args:["#a8d4ea",25,140]}),d.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-7.2,0],children:[d.jsx("planeGeometry",{args:[400,400,1,1]}),d.jsx("meshPhysicalMaterial",{color:"#0c3a58",roughness:.06,metalness:.65,reflectivity:.9})]})]}),d.jsx("ambientLight",{intensity:e?.5:.18}),d.jsx("directionalLight",{position:[8,18,6],intensity:e?1.4:1.8,color:e?"#fff8e0":"#fffaf0"}),d.jsx("directionalLight",{position:[-6,4,-8],intensity:e?.6:.4,color:e?"#c0e8ff":"#c0ccff"})]})}function Ld({level:s,markConfig:e,collection1Config:t,collection2Config:n,sceneConfig:i,layers:a,bindings:r,markLabelConfig:o,colLabelConfig:l,decorations:u,pathTracingActive:h,onSamplesUpdate:c,downloadRenderRef:f}){const m=Sd(i.focalLength),v=Ir[s],x=i.background==="ocean";return d.jsxs(Mn,{camera:{position:v,fov:m,near:.1,far:500},style:{width:"100%",height:"100%"},frameloop:h?"never":"always",gl:{antialias:!0,toneMapping:Ls,toneMappingExposure:x?.95:1.35,preserveDrawingBuffer:!0},children:[d.jsx(Md,{level:s,fov:m,focalLength:i.focalLength}),d.jsx(Gd,{config:i}),d.jsxs(or,{gravity:[0,-9.81,0],timeStep:"vary",children:[s===1&&d.jsx(Dd,{config:e,layers:a,bindings:r,markLabelConfig:o}),s===2&&d.jsx(Rd,{markConfig:e,collection1Config:t,layers:a,bindings:r,markLabelConfig:o,colLabelConfig:l}),s===3&&d.jsx(Id,{markConfig:e,collection1Config:t,collection2Config:n,layers:a,bindings:r,markLabelConfig:o,colLabelConfig:l}),u.map(g=>d.jsx(_d,{config:g},g.id))]}),d.jsx(wn,{makeDefault:!0,dampingFactor:.08,minDistance:1,maxDistance:400,target:[0,0,0]}),h&&c&&f&&d.jsx(Pd,{onSamplesUpdate:c,downloadRenderRef:f})]})}const Gr=2,Lr="scene",jr={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/flowers.glb",customModelHasMat:!0,customModelName:"flowers"},Hr={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:.9,alignAnchor:"end",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1},kr={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1},Or={background:"dark",hdriPreset:"dawn",focalLength:130},zr={markColor:null,scatterSize:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:"weight",markSizeZ:null},Nr={show:!0,slots:{top:"weight",bottom:"garbageType",left:null,right:null}},Ur={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Jr=[{id:"dec_1781047628256",shape:"box",material:"metal",color:"#24271d",position:{x:0,y:-.05,z:0},size:{x:8,y:.1,z:6.6},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}}],Kr=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],jd={level:Gr,activeElement:Lr,markConfig:jr,col1Config:Hr,col2Config:kr,sceneConfig:Or,bindings:zr,markLabelConfig:Nr,colLabelConfig:Ur,decorations:Jr,layers:Kr},Hd=Object.freeze(Object.defineProperty({__proto__:null,activeElement:Lr,bindings:zr,col1Config:Hr,col2Config:kr,colLabelConfig:Ur,decorations:Jr,default:jd,layers:Kr,level:Gr,markConfig:jr,markLabelConfig:Nr,sceneConfig:Or},Symbol.toStringTag,{value:"Module"})),Wr=3,Xr="mark",Qr={shape:"box",material:"metal",color:"#F06951",position:{x:0,y:0,z:0},size:{x:4.6,y:4.6,z:4.6},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},Vr={arrangement:"scattering",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterCount:310,scatterDimensions:{x:13,y:4,z:8},scatterDensity:1},Yr={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"Y",alignSpacing:.5,alignAnchor:"center",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1},qr={background:"dark",hdriPreset:"sunset",focalLength:130},Zr={markColor:"garbageType",scatterSize:"weight",c1AlignCount:null,c2AlignCount:"count",markSizeX:null,markSizeY:null,markSizeZ:null},$r={show:!1,slots:{top:null,bottom:null,left:null,right:null}},eo={show:!0,slots:{top:null,bottom:null,left:"garbageType",right:"weight"}},to=[],no=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],kd={level:Wr,activeElement:Xr,markConfig:Qr,col1Config:Vr,col2Config:Yr,sceneConfig:qr,bindings:Zr,markLabelConfig:$r,colLabelConfig:eo,decorations:to,layers:no},Od=Object.freeze(Object.defineProperty({__proto__:null,activeElement:Xr,bindings:Zr,col1Config:Vr,col2Config:Yr,colLabelConfig:eo,decorations:to,default:kd,layers:no,level:Wr,markConfig:Qr,markLabelConfig:$r,sceneConfig:qr},Symbol.toStringTag,{value:"Module"})),so=2,io="mark",ro={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/cigarette.glb",customModelHasMat:!0,customModelName:"cigarette"},oo={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:.5,alignAnchor:"end",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1},ao={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1},lo={background:"dark",hdriPreset:"city",focalLength:130},co={markColor:null,scatterSize:null,c1AlignCount:"count",c2AlignCount:null,markSizeX:null,markSizeY:"weight",markSizeZ:null},uo={show:!0,slots:{top:"weight",bottom:"garbageType",left:null,right:null}},fo={show:!1,slots:{top:null,bottom:null,left:null,right:null}},ho=[],po=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],zd={level:so,activeElement:io,markConfig:ro,col1Config:oo,col2Config:ao,sceneConfig:lo,bindings:co,markLabelConfig:uo,colLabelConfig:fo,decorations:ho,layers:po},Nd=Object.freeze(Object.defineProperty({__proto__:null,activeElement:io,bindings:co,col1Config:oo,col2Config:ao,colLabelConfig:fo,decorations:ho,default:zd,layers:po,level:so,markConfig:ro,markLabelConfig:uo,sceneConfig:lo},Symbol.toStringTag,{value:"Module"})),Ud=Object.assign({"./presets/flowers.json":Hd,"./presets/garbage_in_the_ocean.json":Od,"./presets/smoking.json":Nd}),pn=Object.entries(Ud).map(([s,e])=>{const t=s.replace(/^.*\//,"").replace(/\.json$/,""),n=t.replace(/_/g," ").replace(/\b\w/g,i=>i.toUpperCase());return{id:`preset_${t}`,name:n,createdAt:"",data:e.default}});function Jd(s,e){const t=JSON.stringify(e,null,2),n=new Blob([t],{type:"application/json"}),i=URL.createObjectURL(n),a=document.createElement("a");a.href=i,a.download=s.trim().replace(/\s+/g,"_")+".json",a.click(),URL.revokeObjectURL(i)}const Tn={padding:"8px 16px",borderRadius:"8px",fontSize:"13px",fontWeight:"500",cursor:"pointer",fontFamily:"inherit",border:"none",transition:"opacity 0.1s"};function mo({onClose:s,children:e}){return d.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999},onClick:s,children:d.jsx("div",{style:{background:"#fff",borderRadius:"14px",width:"340px",maxWidth:"90vw",boxShadow:"0 16px 48px rgba(0,0,0,0.28)",overflow:"hidden",fontFamily:"inherit"},onClick:t=>t.stopPropagation(),children:e})})}function Kd({initialName:s,onSave:e,onClose:t}){const[n,i]=D.useState(s);function a(){const r=n.trim();r&&e(r)}return d.jsx(mo,{onClose:t,children:d.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"14px"},children:[d.jsx("div",{style:{fontSize:"15px",fontWeight:"700",color:"#1D1D1F"},children:"Save Scene"}),d.jsx("input",{type:"text",value:n,onChange:r=>i(r.target.value),onKeyDown:r=>{r.key==="Enter"&&a(),r.key==="Escape"&&t()},placeholder:"Scene name…",autoFocus:!0,style:{background:"#F2F2F7",border:"1.5px solid #D1D1D6",borderRadius:"8px",padding:"9px 12px",fontSize:"13px",color:"#1D1D1F",outline:"none",fontFamily:"inherit",width:"100%",boxSizing:"border-box"}}),d.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[d.jsx("button",{onClick:t,style:{...Tn,background:"#F2F2F7",color:"#6C6C70"},children:"Cancel"}),d.jsx("button",{onClick:a,disabled:!n.trim(),style:{...Tn,background:"#007AFF",color:"#fff",opacity:n.trim()?1:.4},children:"Save"})]})]})})}function Oi({children:s}){return d.jsx("div",{style:{padding:"8px 20px 4px",fontSize:"10px",fontWeight:"700",letterSpacing:"0.08em",textTransform:"uppercase",color:"#AEAEB2"},children:s})}function Wd({saves:s,onLoad:e,onDelete:t,onClose:n,currentName:i,currentData:a}){const[r,o]=D.useState(null);function l(u,h,c){return d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"11px 20px",cursor:"pointer",background:r===u.id?"#F8F8FA":"transparent",borderBottom:c?"none":"1px solid #F2F2F7",transition:"background 0.08s"},onClick:()=>e(u),onMouseEnter:()=>o(u.id),onMouseLeave:()=>o(null),children:[d.jsxs("div",{style:{flex:1,minWidth:0},children:[d.jsx("div",{style:{fontSize:"13px",fontWeight:"600",color:"#1D1D1F"},children:u.name}),u.createdAt&&d.jsx("div",{style:{fontSize:"10px",color:"#8E8E93",marginTop:"2px"},children:new Date(u.createdAt).toLocaleString()})]}),h&&d.jsx("button",{onClick:f=>{f.stopPropagation(),t(u.id)},title:"Delete",style:{background:"none",border:"none",cursor:"pointer",color:"#FF3B30",fontSize:"17px",lineHeight:1,padding:"4px 6px",flexShrink:0},children:"×"})]},u.id)}return d.jsx(mo,{onClose:n,children:d.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[d.jsx("div",{style:{padding:"16px 20px",borderBottom:"1px solid #E5E5EA",fontSize:"15px",fontWeight:"700",color:"#1D1D1F"},children:"Load Scene"}),d.jsxs("div",{style:{maxHeight:"380px",overflowY:"auto"},children:[pn.length>0&&d.jsxs(d.Fragment,{children:[d.jsx(Oi,{children:"Presets"}),pn.map((u,h)=>l(u,!1,h===pn.length-1))]}),s.length>0&&d.jsxs(d.Fragment,{children:[d.jsx(Oi,{children:"My Saves"}),s.map((u,h)=>l(u,!0,h===s.length-1))]}),pn.length===0&&s.length===0&&d.jsx("div",{style:{padding:"36px 20px",textAlign:"center",color:"#8E8E93",fontSize:"13px"},children:"No saved scenes yet"})]}),d.jsxs("div",{style:{padding:"12px 20px",borderTop:"1px solid #E5E5EA",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d.jsx("button",{onClick:()=>Jd(i,a),title:"Export current scene as JSON",style:{...Tn,background:"#F2F2F7",color:"#007AFF",padding:"7px 12px"},children:"Export scene"}),d.jsx("button",{onClick:n,style:{...Tn,background:"#F2F2F7",color:"#6C6C70"},children:"Close"})]})]})})}const go="phys_tool_saves";function as(){try{return JSON.parse(localStorage.getItem(go)??"[]")}catch{return[]}}function ls(s){localStorage.setItem(go,JSON.stringify(s))}const cs=88,zi=46;function Ni(s,e,t,n){return Array.from({length:s},(i,a)=>{const o=(s===1?e:e-t/2+t/(s-1)*a)*Math.PI/180;return{x:Math.cos(o)*n,y:Math.sin(o)*n}})}function Xd({x:s,y:e,varName:t,varType:n,level:i,onBind:a,onBindLabel:r,onClose:o}){D.useEffect(()=>{function x(g){g.key==="Escape"&&o()}return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[o]);const l=[],u=[];n==="categorical"?l.push({action:"bind",bindKey:"markColor",label:"Color",icon:"●",section:"mark"},{action:"label",label:"Label",icon:"Aa",section:"mark"}):(l.push({action:"label",label:"Label",icon:"Aa",section:"mark"},{action:"bind",bindKey:"markSizeZ",label:"Z",icon:"⊙",section:"mark"},{action:"bind",bindKey:"markSizeY",label:"Y",icon:"↕",section:"mark"},{action:"bind",bindKey:"markSizeX",label:"X",icon:"↔",section:"mark"}),i>=2&&(u.push({action:"bind",bindKey:"scatterSize",label:"Scatter",icon:"⊞",section:"collection"},{action:"bind",bindKey:"c1AlignCount",label:"Count L1",icon:"#",section:"collection"}),i>=3&&u.push({action:"bind",bindKey:"c2AlignCount",label:"Count L2",icon:"#",section:"collection"})));const h=Ni(l.length,180,100,cs),c=Ni(u.length,0,90,cs),f=[...l.map((x,g)=>({opt:x,pos:h[g]})),...u.map((x,g)=>({opt:x,pos:c[g]}))];function m(x){x.action==="bind"?a(x.bindKey,t):r(x.section,t),o()}const v=u.length>0;return d.jsxs(d.Fragment,{children:[d.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3},onClick:o}),d.jsxs("div",{style:{position:"fixed",left:s,top:e,transform:"translate(-50%, -50%)",width:0,height:0,zIndex:1001,pointerEvents:"none"},children:[v&&d.jsx("div",{style:{position:"absolute",left:0,top:-104,width:"1px",height:(cs+16)*2,background:"#E5E5EA",transform:"translateX(-50%)"}}),d.jsx("div",{style:{position:"absolute",left:-6,top:-22,fontSize:"9px",fontWeight:"700",letterSpacing:"0.12em",textTransform:"uppercase",color:"#007AFF",whiteSpace:"nowrap",textAlign:"right",transform:"translateX(-100%)"},children:"Mark"}),v&&d.jsx("div",{style:{position:"absolute",left:6,top:-22,fontSize:"9px",fontWeight:"700",letterSpacing:"0.12em",textTransform:"uppercase",color:"#5E5CE6",whiteSpace:"nowrap"},children:"Collection"}),d.jsx("div",{style:{position:"absolute",width:10,height:10,background:"#1D1D1F",borderRadius:"50%",transform:"translate(-50%, -50%)"}}),f.map(({opt:x,pos:g},A)=>{const p=x.section==="collection",y=p?"#5E5CE6":"#007AFF";return d.jsxs("button",{onClick:()=>m(x),style:{position:"absolute",left:g.x,top:g.y,transform:"translate(-50%, -50%)",width:zi,height:zi,background:"#fff",border:`2px solid ${y}`,borderRadius:"50%",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1px",boxShadow:"0 4px 16px rgba(0,0,0,0.16)",pointerEvents:"all",fontFamily:"inherit"},onMouseEnter:b=>{const B=b.currentTarget;B.style.transform="translate(-50%, -50%) scale(1.13)",B.style.boxShadow="0 6px 20px rgba(0,0,0,0.22)",B.style.background=p?"#F3EBFF":"#EBF3FF"},onMouseLeave:b=>{const B=b.currentTarget;B.style.transform="translate(-50%, -50%)",B.style.boxShadow="0 4px 16px rgba(0,0,0,0.16)",B.style.background="#fff"},children:[d.jsx("span",{style:{fontSize:"14px",color:y,lineHeight:1},children:x.icon}),d.jsx("span",{style:{fontSize:"8px",color:"#6C6C70",fontWeight:"600",lineHeight:1.2,textAlign:"center"},children:x.label})]},A)})]})]})}const Ui=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],Ji={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},Ki={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},Wi={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Xi={background:"dark",hdriPreset:"city",focalLength:130},mn={show:!1,slots:{top:null,bottom:null,left:null,right:null}};function Qd(){const[s,e]=D.useState(1),[t,n]=D.useState("mark"),[i,a]=D.useState(Ui),[r,o]=D.useState(Ji),[l,u]=D.useState(Ki),[h,c]=D.useState(Wi),[f,m]=D.useState(Xi),[v,x]=D.useState({markColor:null,scatterSize:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null}),[g,A]=D.useState(mn),[p,y]=D.useState(mn),[b,B]=D.useState([]),[C,F]=D.useState(null),[M,T]=D.useState(!1),[S,E]=D.useState(null),[w,R]=D.useState(null),[I,P]=D.useState(null),[L,G]=D.useState("none"),[H,N]=D.useState(!1),[J,K]=D.useState(0),se=D.useRef(null);function ue(j,O){x(X=>{const Fe={...X,[j]:O};return O!==null&&(j==="markSizeX"||j==="markSizeY"||j==="markSizeZ")&&(j!=="markSizeX"&&(Fe.markSizeX=null),j!=="markSizeY"&&(Fe.markSizeY=null),j!=="markSizeZ"&&(Fe.markSizeZ=null)),Fe})}function tt(j,O){const X=Fe=>({...Fe,show:!0,slots:{...Fe.slots,top:O}});j==="mark"?A(X):y(X)}function _e(){const j=`dec_${Date.now()}`,O={id:j,shape:"sphere",material:"plastic",color:"#888888",position:{x:0,y:-1.5,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}};B(X=>[...X,O]),F(j)}function xo(j){B(O=>O.filter(X=>X.id!==j)),F(O=>O===j?null:O)}function Ao(j){B(O=>O.map(X=>X.id===j.id?j:X))}function _n(){return{level:s,activeElement:t,markConfig:r,col1Config:l,col2Config:h,sceneConfig:f,bindings:v,markLabelConfig:g,colLabelConfig:p,decorations:b,layers:i}}function Vs(j){const O=as();if(w){const Pn=O.findIndex(To=>To.id===w);if(Pn>=0){O[Pn]={...O[Pn],name:j,data:_n()},ls(O),P(j),G("none");return}}const X=`save_${Date.now()}`,Fe={id:X,name:j,createdAt:new Date().toISOString(),data:_n()};ls([...O,Fe]),R(X),P(j),G("none")}function vo(){w&&I?Vs(I):G("save")}function yo(j){const O=j.data;O.level!=null&&e(O.level),O.activeElement!=null&&n(O.activeElement),o(ni(O.markConfig??Ji)),u(O.col1Config??Ki),c(O.col2Config??Wi),m(O.sceneConfig??Xi),x(O.bindings??{markColor:null,scatterSize:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null}),A(O.markLabelConfig??mn),y(O.colLabelConfig??mn),B((O.decorations??[]).map(X=>ni(X))),a(O.layers??Ui),R(j.id),P(j.name),F(null),G("none")}function bo(j){const O=as().filter(X=>X.id!==j);ls(O),w===j&&(R(null),P(null))}function Bo(){s===1&&(e(2),n("collection1")),s===2&&(e(3),n("collection2"))}function Co(){s===3&&(e(2),n("collection1")),s===2&&(e(1),n("mark"))}return d.jsxs("div",{style:{display:"flex",width:"100vw",height:"100vh",background:"#F2F2F7",overflow:"hidden"},children:[d.jsxs("div",{style:{width:"260px",flexShrink:0,borderRight:"1px solid #E5E5EA",background:"#FFFFFF",display:"flex",flexDirection:"column",overflow:"hidden"},children:[d.jsxs("div",{style:{display:"flex",gap:"6px",padding:"8px 10px",borderBottom:"1px solid #E5E5EA",flexShrink:0,flexDirection:"column"},children:[d.jsxs("div",{style:{display:"flex",gap:"6px"},children:[d.jsx("button",{onClick:vo,title:I?`Save to "${I}"`:"Save scene",style:{flex:1,background:"#007AFF",color:"#fff",border:"none",borderRadius:"7px",padding:"6px 8px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:I||"Save"}),d.jsx("button",{onClick:()=>G("load"),style:{flex:1,background:"#F2F2F7",color:"#1D1D1F",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"6px 8px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit"},children:"Load"})]}),d.jsx("button",{onClick:()=>{N(!0),K(0)},disabled:H,style:{background:H?"#E5E5EA":"#1D1D1F",color:H?"#AEAEB2":"#FFFFFF",border:"none",borderRadius:"7px",padding:"7px 8px",fontSize:"12px",fontWeight:"600",cursor:H?"default":"pointer",fontFamily:"inherit",width:"100%"},children:H?"Rendering...":"Render"})]}),d.jsx("div",{style:{flex:1,overflowY:"auto",minHeight:0},children:d.jsx(Sa,{level:s,activeElement:t,onSelectElement:j=>{n(j),F(null)},onAdvanceLevel:Bo,onDowngradeLevel:Co,decorations:b,activeDecorationId:C,onSelectDecoration:F,onAddDecoration:_e,onRemoveDecoration:xo})})]}),d.jsxs("div",{style:{flex:1,position:"relative"},onDragOver:j=>j.preventDefault(),onDrop:j=>{j.preventDefault();const O=j.dataTransfer.getData("phys-var/name");if(!O)return;const X=j.dataTransfer.types.includes("phys-var/numerical")?"numerical":"categorical";E({x:j.clientX,y:j.clientY,varName:O,varType:X})},children:[d.jsx(Ld,{level:s,markConfig:r,collection1Config:l,collection2Config:h,sceneConfig:f,layers:i,bindings:v,markLabelConfig:g,colLabelConfig:p,decorations:b,pathTracingActive:H,onSamplesUpdate:K,downloadRenderRef:se}),H&&d.jsxs("div",{style:{position:"absolute",top:"16px",right:"16px",background:"rgba(10,10,10,0.82)",backdropFilter:"blur(14px)",borderRadius:"14px",padding:"18px 20px",color:"#fff",display:"flex",flexDirection:"column",gap:"14px",width:"200px",fontFamily:"inherit",zIndex:10,boxShadow:"0 8px 32px rgba(0,0,0,0.4)"},children:[d.jsxs("div",{children:[d.jsx("div",{style:{fontSize:"10px",fontWeight:"700",letterSpacing:"0.1em",textTransform:"uppercase",opacity:.45,marginBottom:"8px"},children:"Path Tracing"}),d.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"5px"},children:[d.jsx("span",{style:{fontSize:"32px",fontWeight:"700",letterSpacing:"-0.02em",lineHeight:1},children:J}),d.jsx("span",{style:{fontSize:"11px",opacity:.35},children:"spp"})]})]}),d.jsx("div",{style:{background:"rgba(255,255,255,0.1)",borderRadius:"3px",height:"3px"},children:d.jsx("div",{style:{width:`${Math.min(100,J/256*100)}%`,height:"100%",background:"#4FC3F7",borderRadius:"3px",transition:"width 0.4s"}})}),d.jsx("div",{style:{fontSize:"11px",opacity:.4,marginTop:"-8px"},children:J===0?"Building scene BVH…":J>=256?"Converged":`${256-J} samples to 256`}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[d.jsx("button",{onClick:()=>{var j;return(j=se.current)==null?void 0:j.call(se)},disabled:J===0,style:{background:J>0?"#4FC3F7":"rgba(255,255,255,0.08)",color:"#fff",border:"none",borderRadius:"8px",padding:"9px",fontSize:"12px",fontWeight:"600",cursor:J>0?"pointer":"default",fontFamily:"inherit"},children:"Download PNG"}),d.jsx("button",{onClick:()=>N(!1),style:{background:"rgba(255,255,255,0.08)",color:"#fff",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"9px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit"},children:"Stop"})]})]})]}),d.jsx("div",{style:{width:"260px",flexShrink:0,borderLeft:"1px solid #E5E5EA",background:"#FFFFFF",overflowY:"auto"},children:d.jsx(sl,{activeElement:t,compositionLevel:s,markConfig:r,onMarkChange:o,collection1Config:l,onCollection1Change:u,collection2Config:h,onCollection2Change:c,sceneConfig:f,onSceneChange:m,bindings:v,onBind:ue,markLabelConfig:g,onMarkLabelChange:A,colLabelConfig:p,onColLabelChange:y,activeDecorationId:C,decorations:b,onDecorationChange:Ao,layers:i,onOpenData:()=>T(!0)})}),L==="save"&&d.jsx(Kd,{initialName:I??"",onSave:Vs,onClose:()=>G("none")}),M&&d.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999},onClick:()=>T(!1),children:d.jsxs("div",{style:{background:"#fff",borderRadius:"14px",width:"340px",maxWidth:"90vw",maxHeight:"80vh",display:"flex",flexDirection:"column",boxShadow:"0 16px 48px rgba(0,0,0,0.28)",overflow:"hidden",fontFamily:"inherit"},onClick:j=>j.stopPropagation(),children:[d.jsxs("div",{style:{padding:"14px 20px",borderBottom:"1px solid #E5E5EA",fontSize:"15px",fontWeight:"700",color:"#1D1D1F",flexShrink:0,display:"flex",justifyContent:"space-between",alignItems:"center"},children:["Data Panel",d.jsx("button",{onClick:()=>T(!1),style:{background:"none",border:"none",fontSize:"18px",color:"#AEAEB2",cursor:"pointer",lineHeight:1,padding:"0 2px"},children:"×"})]}),d.jsx("div",{style:{overflowY:"auto",flex:1},children:d.jsx(Qa,{layers:i,onChange:a})})]})}),L==="load"&&d.jsx(Wd,{saves:as(),onLoad:yo,onDelete:bo,onClose:()=>G("none"),currentName:I??"scene",currentData:_n()}),S&&d.jsx(Xd,{x:S.x,y:S.y,varName:S.varName,varType:S.varType,level:s,onBind:ue,onBindLabel:tt,onClose:()=>E(null)})]})}const us="https://massager-unshaved-chasing.ngrok-free.dev";function Vd(){const s=ma();return D.useEffect(()=>{s.refresh().fit()},[s]),null}function Yd({url:s}){const e=Nt(ks,s),t=D.useRef([]),n=D.useRef(0);return D.useEffect(()=>{const i=[];if(e.scene.updateWorldMatrix(!0,!0),e.scene.traverse(r=>{r.isMesh&&i.push(r)}),!i.length)return;const a=new _;i.forEach(r=>{const o=new _;r.getWorldPosition(o),a.add(o)}),a.divideScalar(i.length),t.current=i.map(r=>{const o=new _;r.getWorldPosition(o);const l=o.clone().sub(a);return l.length()<.001&&l.set(Math.random()-.5,Math.random()-.5,Math.random()-.5),l.normalize(),{mesh:r,origPos:o.clone(),direction:l}}),n.current=0},[e]),Hs((i,a)=>{n.current+=a;const r=(Math.sin(n.current*1-Math.PI/2)+1)/2;t.current.forEach(({mesh:o,origPos:l,direction:u})=>{o.position.copy(l).addScaledVector(u,r*1.5)})}),d.jsxs(pa,{fit:!0,clip:!0,observe:!0,margin:1.4,children:[d.jsx(Vd,{}),d.jsx("primitive",{object:e.scene})]})}function qd({data:s,center:e,impulse:t}){const n=D.useRef(null);return D.useEffect(()=>{if(!n.current)return;const i=s.position.clone().sub(e);i.length()<.001&&i.set(Math.random()-.5,.5,Math.random()-.5),i.normalize().multiplyScalar(t),n.current.applyImpulse({x:i.x,y:i.y+t*.3,z:i.z},!0),n.current.applyTorqueImpulse({x:(Math.random()-.5)*t*.3,y:(Math.random()-.5)*t*.3,z:(Math.random()-.5)*t*.3},!0)},[]),d.jsx(yn,{ref:n,position:s.position.toArray(),quaternion:[s.quaternion.x,s.quaternion.y,s.quaternion.z,s.quaternion.w],colliders:"hull",restitution:.3,friction:.8,linearDamping:.1,angularDamping:.15,children:d.jsx("mesh",{geometry:s.geometry,material:s.material})})}function Zd({url:s,impulse:e}){const t=Nt(ks,s),{fragments:n,center:i}=D.useMemo(()=>{const a=[];t.scene.updateWorldMatrix(!0,!0),t.scene.traverse(o=>{if(!o.isMesh)return;const l=o,u=new _,h=new Fn;l.getWorldPosition(u),l.getWorldQuaternion(h),a.push({geometry:l.geometry,material:l.material,position:u,quaternion:h})});const r=new _;return a.forEach(o=>r.add(o.position)),a.length&&r.divideScalar(a.length),{fragments:a,center:r}},[t]);return d.jsxs(d.Fragment,{children:[d.jsx(yn,{type:"fixed",position:[0,-3,0],children:d.jsx(rr,{args:[15,.1,15]})}),d.jsxs("mesh",{position:[0,-3,0],rotation:[-Math.PI/2,0,0],children:[d.jsx("planeGeometry",{args:[30,30]}),d.jsx("meshStandardMaterial",{color:"#1a1a1a",roughness:.9})]}),n.map((a,r)=>d.jsx(qd,{data:a,center:i,impulse:e},r))]})}function Se({label:s,children:e}){return d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[d.jsx("div",{style:{fontSize:11,color:"#888"},children:s}),e]})}function Qi({active:s,onClick:e,children:t}){return d.jsx("button",{onClick:e,style:{flex:1,padding:"8px 0",fontSize:12,fontWeight:600,background:s?"#5E5CE6":"#1a1a1a",color:s?"#fff":"#666",border:s?"none":"1px solid #333",borderRadius:6,cursor:"pointer"},children:t})}function $d(){const[s,e]=D.useState(null),[t,n]=D.useState("idle"),[i,a]=D.useState(""),[r,o]=D.useState("exploded"),[l,u]=D.useState(0),[h,c]=D.useState(""),[f,m]=D.useState(8),[v,x]=D.useState(.5),[g,A]=D.useState("random"),[p,y]=D.useState("bisect"),[b,B]=D.useState(30),[C,F]=D.useState(0),[M,T]=D.useState(1.5),S=D.useRef(null),E=D.useCallback(G=>{if(!G.name.endsWith(".glb")&&!G.name.endsWith(".gltf")){a("Please upload a .glb or .gltf file");return}S.current=G,c(G.name),e(null),n("idle"),a("")},[]),w=D.useCallback(G=>{G.preventDefault();const H=G.dataTransfer.files[0];H&&E(H)},[E]),R=D.useCallback(G=>{var N;const H=(N=G.target.files)==null?void 0:N[0];H&&E(H)},[E]),I=D.useCallback(async G=>{if(G==="model"&&!S.current){a("Drop a GLB first");return}n("loading"),a("Blender is running…"),s&&URL.revokeObjectURL(s),e(null);try{let H;const N=`pieces=${f}&cutSpread=${v}&cutStrategy=${g}&adaptivity=${C}&fractureMethod=${p}`;if(G==="sphere")H=await Hn(`${us}/shatter/sphere?${N}`);else if(G==="cube")H=await Hn(`${us}/shatter/cube?${N}`);else{const K=new FormData;K.append("model",S.current),K.append("pieces",f.toString()),K.append("cutSpread",v.toString()),K.append("cutStrategy",g),K.append("fractureMethod",p),K.append("voxelDiv",b.toString()),K.append("adaptivity",C.toString()),H=await Hn(`${us}/shatter`,{method:"POST",body:K})}if(!H.ok){const K=await H.json().catch(()=>({error:H.statusText}));throw new Error(K.error??H.statusText)}const J=await H.blob();e(URL.createObjectURL(J)),n("done"),a("")}catch(H){n("error"),a(H instanceof Error?H.message:"Unknown error")}},[f,v,b,s]);D.useEffect(()=>()=>{s&&URL.revokeObjectURL(s)},[s]);const P={width:"100%",accentColor:"#5E5CE6"},L=t==="loading";return d.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0f0f0f",color:"#e0e0e0"},children:[d.jsxs("div",{style:{width:260,padding:20,display:"flex",flexDirection:"column",gap:16,borderRight:"1px solid #222",overflowY:"auto"},children:[d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[d.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Shatter Lab"}),d.jsxs("div",{style:{display:"flex",gap:12},children:[d.jsx("a",{href:"/deform",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Deform"}),d.jsx("a",{href:"/particles",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Particles"}),d.jsx("a",{href:"/fluid",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Fluid"})]})]}),d.jsx(Se,{label:"View Mode",children:d.jsxs("div",{style:{display:"flex",gap:6},children:[d.jsx(Qi,{active:r==="exploded",onClick:()=>o("exploded"),children:"Exploded"}),d.jsx(Qi,{active:r==="physics",onClick:()=>o("physics"),children:"Physics"})]})}),d.jsxs(Se,{label:"Model (GLB)",children:[d.jsx("div",{onDrop:w,onDragOver:G=>G.preventDefault(),onClick:()=>document.getElementById("glb-input").click(),style:{border:"2px dashed #333",borderRadius:8,padding:"14px 10px",textAlign:"center",cursor:"pointer",fontSize:12,color:"#555"},children:h||"Drop GLB or click to browse"}),d.jsx("input",{id:"glb-input",type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:R})]}),d.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[d.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Fragment"}),d.jsxs(Se,{label:"Fracture Method",children:[d.jsx("div",{style:{display:"flex",gap:6},children:["bisect","voronoi"].map(G=>d.jsx("button",{onClick:()=>y(G),style:{flex:1,padding:"6px 0",fontSize:11,borderRadius:5,background:p===G?"#2a2a4a":"#1a1a1a",color:p===G?"#9999ff":"#555",border:p===G?"1px solid #5E5CE6":"1px solid #2a2a2a",cursor:"pointer",textTransform:"capitalize"},children:G},G))}),d.jsx("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:p==="voronoi"?"Natural crack patterns. Slower — best ≤ 50 pieces.":"Sequential plane cuts. Fast. Good for large counts."})]}),d.jsx(Se,{label:`Pieces: ${f}`,children:d.jsx("input",{type:"range",min:2,max:500,step:1,value:f,onChange:G=>m(Number(G.target.value)),style:P})}),d.jsxs(Se,{label:`Size Variation: ${v.toFixed(2)}`,children:[d.jsx("input",{type:"range",min:.05,max:1,step:.05,value:v,onChange:G=>x(Number(G.target.value)),style:P}),d.jsxs("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:["0 = equal-sized pieces (cuts through centre)",d.jsx("br",{}),"1 = uneven pieces (cuts placed randomly)"]})]}),d.jsxs(Se,{label:"Cut Strategy",children:[d.jsx("div",{style:{display:"flex",gap:6},children:["random","largest"].map(G=>d.jsx("button",{onClick:()=>A(G),style:{flex:1,padding:"6px 0",fontSize:11,borderRadius:5,background:g===G?"#2a2a4a":"#1a1a1a",color:g===G?"#9999ff":"#555",border:g===G?"1px solid #5E5CE6":"1px solid #2a2a2a",cursor:"pointer"},children:G==="random"?"Random":"Largest First"},G))}),d.jsx("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:"Largest First → more uniform sizes"})]})]}),d.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[d.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Remesh — file uploads only"}),d.jsxs(Se,{label:`Voxel Detail: ${b}`,children:[d.jsx("input",{type:"range",min:10,max:60,step:5,value:b,onChange:G=>B(Number(G.target.value)),style:P}),d.jsx("div",{style:{fontSize:10,color:"#444"},children:"Higher = sharper cuts, slower"})]}),d.jsxs(Se,{label:`Adaptivity: ${C.toFixed(2)}`,children:[d.jsx("input",{type:"range",min:0,max:1,step:.05,value:C,onChange:G=>F(Number(G.target.value)),style:P}),d.jsx("div",{style:{fontSize:10,color:"#444"},children:"Reduces polygons in flat areas"})]})]}),r==="physics"&&d.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[d.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Physics"}),d.jsxs(Se,{label:`Impulse: ${M.toFixed(1)}`,children:[d.jsx("input",{type:"range",min:0,max:5,step:.1,value:M,onChange:G=>T(Number(G.target.value)),style:P}),d.jsx("div",{style:{fontSize:10,color:"#444"},children:"How hard pieces fly apart on start"})]})]}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[d.jsx("button",{onClick:()=>I("model"),disabled:L,style:{background:L?"#222":"#5E5CE6",color:L?"#555":"#fff",border:"none",borderRadius:8,padding:"11px 0",fontSize:13,fontWeight:600,cursor:L?"wait":"pointer"},children:L?"Running…":"⚡ Shatter Model"}),d.jsxs("div",{style:{display:"flex",gap:8},children:[d.jsx("button",{onClick:()=>I("sphere"),disabled:L,style:{flex:1,background:"#1a1a1a",color:L?"#444":"#aaa",border:"1px solid #2a2a2a",borderRadius:8,padding:"9px 0",fontSize:12,cursor:L?"wait":"pointer"},children:"🔵 Sphere"}),d.jsx("button",{onClick:()=>I("cube"),disabled:L,style:{flex:1,background:"#1a1a1a",color:L?"#444":"#aaa",border:"1px solid #2a2a2a",borderRadius:8,padding:"9px 0",fontSize:12,cursor:L?"wait":"pointer"},children:"◻ Cube"})]}),r==="physics"&&s&&d.jsx("button",{onClick:()=>u(G=>G+1),style:{background:"#1a1a2e",color:"#5E5CE6",border:"1px solid #5E5CE6",borderRadius:8,padding:"9px 0",fontSize:12,cursor:"pointer"},children:"↺ Restart Simulation"})]}),(i||L)&&d.jsx("div",{style:{fontSize:12,padding:10,borderRadius:6,lineHeight:1.5,background:t==="error"?"#2a0f0f":"#111",color:t==="error"?"#ff6b6b":"#666"},children:L?"Blender is running… (10–30 s)":i})]}),d.jsx("div",{style:{flex:1},children:s?d.jsxs(Mn,{camera:{position:[0,1,5],fov:50},style:{background:"#111"},children:[d.jsx("ambientLight",{intensity:.5}),d.jsx("directionalLight",{position:[5,8,5],intensity:1.2,castShadow:!0}),d.jsx(js,{preset:"city"}),r==="exploded"&&d.jsx(D.Suspense,{fallback:null,children:d.jsx(Yd,{url:s})}),r==="physics"&&d.jsx(or,{gravity:[0,-9.81,0],timeStep:"vary",children:d.jsx(D.Suspense,{fallback:null,children:d.jsx(Zd,{url:s,impulse:M})})},l),d.jsx(wn,{})]}):d.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#2a2a2a",fontSize:13},children:L?d.jsxs("div",{style:{textAlign:"center",color:"#444"},children:[d.jsx("div",{style:{fontSize:28,marginBottom:10},children:"⏳"}),"Blender is fracturing…"]}):d.jsxs("div",{style:{textAlign:"center"},children:[d.jsx("div",{style:{fontSize:28,marginBottom:10},children:"💥"}),"Choose a shape and hit Shatter"]})})})]})}const ds={Flag:{pinMode:"flag",gravity:2,windX:.5,windZ:5,windTurb:3,damping:.99,constraintIters:8},Curtain:{pinMode:"curtain",gravity:3,windX:0,windZ:2,windTurb:2,damping:.99,constraintIters:8},Sheet:{pinMode:"sheet",gravity:2.5,windX:.5,windZ:2.5,windTurb:2.5,damping:.99,constraintIters:8},Still:{pinMode:"curtain",gravity:4,windX:0,windZ:0,windTurb:0,damping:.995,constraintIters:12},Hammock:{pinMode:"hammock",gravity:6,windX:0,windZ:.5,windTurb:.5,damping:.995,constraintIters:12}};function ef(s,e,t,n,i){const a=i==="hammock",r=new Float32Array(s*e*3),o=new Float32Array(s*e*2);for(let h=0;h<e;h++)for(let c=0;c<s;c++){const f=h*s+c,m=c/(s-1),v=h/(e-1);a?(r[f*3]=(m-.5)*t,r[f*3+1]=0,r[f*3+2]=(v-.5)*n):(r[f*3]=(m-.5)*t,r[f*3+1]=(.5-v)*n,r[f*3+2]=0),o[f*2]=m,o[f*2+1]=1-v}const l=[];for(let h=0;h<e-1;h++)for(let c=0;c<s-1;c++){const f=h*s+c,m=f+1,v=f+s,x=v+1;l.push(f,v,m,m,v,x)}const u=new Te;return u.setAttribute("position",new Y(r,3)),u.setAttribute("uv",new Y(o,2)),u.setIndex(l),u.computeVertexNormals(),u}function tf(s,e,t,n,i){const a=i==="hammock",r=s*e,o=new Float32Array(r*3),l=new Float32Array(r*3),u=new Uint8Array(r),h=new Float32Array(r*3);for(let x=0;x<e;x++)for(let g=0;g<s;g++){const A=x*s+g,p=g/(s-1),y=x/(e-1);a?(o[A*3]=(p-.5)*t,o[A*3+1]=0,o[A*3+2]=(y-.5)*n):(o[A*3]=(p-.5)*t,o[A*3+1]=(.5-y)*n,o[A*3+2]=0),l[A*3]=o[A*3],l[A*3+1]=o[A*3+1],l[A*3+2]=o[A*3+2]}switch(i){case"flag":for(let x=0;x<e;x++)u[x*s]=1;break;case"curtain":for(let x=0;x<s;x++)u[x]=1;break;case"sheet":u[0]=1,u[s-1]=1;break;case"hammock":u[0]=1,u[s-1]=1,u[(e-1)*s]=1,u[(e-1)*s+s-1]=1;break}for(let x=0;x<r;x++)h[x*3]=o[x*3],h[x*3+1]=o[x*3+1],h[x*3+2]=o[x*3+2];const c=t/(s-1),f=n/(e-1),m=Math.hypot(c,f),v=[];for(let x=0;x<e;x++)for(let g=0;g<s;g++){const A=x*s+g;g<s-1&&v.push({a:A,b:A+1,r:c}),x<e-1&&v.push({a:A,b:A+s,r:f}),g<s-1&&x<e-1&&(v.push({a:A,b:A+s+1,r:m}),v.push({a:A+1,b:A+s,r:m})),g<s-2&&v.push({a:A,b:A+2,r:c*2}),x<e-2&&v.push({a:A,b:A+s*2,r:f*2})}return{pos:o,prev:l,pinned:u,init:h,springs:v,N:s,M:e}}function nf({cols:s,rows:e,cW:t,cH:n,pinMode:i,paramsRef:a,color:r,wireframe:o}){const l=D.useMemo(()=>ef(s,e,t,n,i),[]),u=D.useMemo(()=>tf(s,e,t,n,i),[]),h=D.useRef(null);return Hs(({clock:c},f)=>{if(!h.current)return;const{gravity:m,windZ:v,windX:x,windTurb:g,damping:A,constraintIters:p}=a.current,{pos:y,prev:b,pinned:B,init:C,springs:F,N:M,M:T}=u,S=c.getElapsedTime(),E=5,w=Math.min(f,.033)/E;for(let I=0;I<E;I++){for(let P=0;P<M*T;P++){if(B[P])continue;const L=P*3,G=y[L],H=y[L+1],N=y[L+2];let J=(G-b[L])*A,K=(H-b[L+1])*A,se=(N-b[L+2])*A;K-=m*w*w;const ue=Math.sin(G*.8+S*.9)*Math.cos(N*.5+S*.6)*g,tt=Math.sin(N*.7+S*.7)*Math.cos(H*.4+S*.5)*g;J+=(x+ue)*w*w,se+=(v+tt)*w*w,b[L]=G,b[L+1]=H,b[L+2]=N,y[L]=G+J,y[L+1]=H+K,y[L+2]=N+se,y[L+1]<-3.5&&(y[L+1]=-3.5,b[L+1]=-3.5)}for(let P=0;P<p;P++)for(const{a:L,b:G,r:H}of F){const N=L*3,J=G*3,K=y[J]-y[N],se=y[J+1]-y[N+1],ue=y[J+2]-y[N+2],tt=Math.sqrt(K*K+se*se+ue*ue)||1e-6,_e=(tt-H)/tt*.5;B[L]||(y[N]+=K*_e,y[N+1]+=se*_e,y[N+2]+=ue*_e),B[G]||(y[J]-=K*_e,y[J+1]-=se*_e,y[J+2]-=ue*_e)}for(let P=0;P<M*T;P++)B[P]&&(y[P*3]=C[P*3],y[P*3+1]=C[P*3+1],y[P*3+2]=C[P*3+2])}const R=l.attributes.position;for(let I=0;I<M*T;I++)R.array[I*3]=y[I*3],R.array[I*3+1]=y[I*3+1],R.array[I*3+2]=y[I*3+2];R.needsUpdate=!0,l.computeVertexNormals()}),d.jsx("mesh",{ref:h,geometry:l,castShadow:!0,receiveShadow:!0,children:d.jsx("meshStandardMaterial",{color:r,side:Sn,roughness:.8,metalness:0,wireframe:o})})}function sf({cols:s,rows:e,cW:t,cH:n,pinMode:i}){const a=D.useMemo(()=>{const r=s,o=e,l=i==="hammock",u=(h,c)=>{const f=h/(r-1),m=c/(o-1);return l?[(f-.5)*t,0,(m-.5)*n]:[(f-.5)*t,(.5-m)*n,0]};switch(i){case"flag":return Array.from({length:o},(h,c)=>u(0,c));case"curtain":return Array.from({length:r},(h,c)=>u(c,0));case"sheet":return[u(0,0),u(r-1,0)];case"hammock":return[u(0,0),u(r-1,0),u(0,o-1),u(r-1,o-1)]}},[s,e,t,n,i]);return d.jsx(d.Fragment,{children:a.map((r,o)=>d.jsxs("mesh",{position:r,children:[d.jsx("sphereGeometry",{args:[.06,8,8]}),d.jsx("meshStandardMaterial",{color:"#ff4455",emissive:"#ff2233",emissiveIntensity:.6})]},o))})}function Rt({label:s,children:e}){return d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[d.jsx("div",{style:{fontSize:10,color:"#555",letterSpacing:.4},children:s}),e]})}function rf({active:s,onClick:e,children:t,small:n}){return d.jsx("button",{onClick:e,style:{flex:1,padding:n?"5px 0":"7px 0",fontSize:n?10:11,borderRadius:5,cursor:"pointer",background:s?"#2a2a4a":"#151520",color:s?"#9999ff":"#555",border:s?"1px solid #5E5CE6":"1px solid #222"},children:t})}function Vi({on:s,onClick:e,label:t}){return d.jsxs("div",{onClick:e,style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer",userSelect:"none"},children:[d.jsx("div",{style:{width:28,height:16,borderRadius:8,position:"relative",background:s?"#5E5CE6":"#1e1e2a",border:"1px solid #333",transition:"background .2s"},children:d.jsx("div",{style:{position:"absolute",top:2,left:s?11:2,width:10,height:10,borderRadius:"50%",background:s?"#fff":"#444",transition:"left .2s"}})}),d.jsx("span",{style:{fontSize:11,color:s?"#9999ff":"#555"},children:t})]})}const of=[["Gravity","gravity",0,10,.1],["Wind forward","windZ",-3,10,.1],["Wind sideways","windX",-5,5,.1],["Turbulence","windTurb",0,8,.1],["Damping","damping",.95,1,.001],["Stiffness","constraintIters",1,20,1]];function af(){const[s,e]=D.useState(22),[t,n]=D.useState(22),[i,a]=D.useState(3),[r,o]=D.useState(3),[l,u]=D.useState("curtain"),[h,c]=D.useState(0),[f,m]=D.useState("#5588cc"),[v,x]=D.useState(!1),[g,A]=D.useState(!0),[p,y]=D.useState(ds.Curtain),b=D.useRef(p);D.useEffect(()=>{b.current=p},[p]);const B=E=>w=>y(R=>({...R,[E]:Number(w.target.value)})),C=E=>{const w=ds[E];u(w.pinMode),y({gravity:w.gravity,windX:w.windX,windZ:w.windZ,windTurb:w.windTurb,damping:w.damping,constraintIters:w.constraintIters}),c(R=>R+1)},F={width:"100%",accentColor:"#5E5CE6"},M={borderTop:"1px solid #1a1a2a",paddingTop:12,display:"flex",flexDirection:"column",gap:8},T={fontSize:10,color:"#444",textTransform:"uppercase",letterSpacing:1},S=`${s}-${t}-${i}-${r}-${l}-${h}`;return d.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0a0a12",color:"#ddd"},children:[d.jsxs("div",{style:{width:268,padding:20,display:"flex",flexDirection:"column",gap:14,borderRight:"1px solid #1a1a2a",overflowY:"auto"},children:[d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[d.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Soft Lab"}),d.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[d.jsx("a",{href:"/shatter",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Shatter"}),d.jsx("a",{href:"/deform",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Deform"}),d.jsx("a",{href:"/particles",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Particles"}),d.jsx("a",{href:"/ripple",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Ripple"}),d.jsx("a",{href:"/jelly",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Jelly"})]})]}),d.jsxs("div",{style:M,children:[d.jsx("div",{style:T,children:"Presets"}),d.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:Object.keys(ds).map(E=>d.jsx("button",{onClick:()=>C(E),style:{padding:"5px 10px",fontSize:10,borderRadius:5,cursor:"pointer",background:"#151520",color:"#777",border:"1px solid #222"},children:E},E))}),d.jsx("button",{onClick:()=>c(E=>E+1),style:{padding:"7px",fontSize:11,borderRadius:5,cursor:"pointer",background:"#151520",color:"#555",border:"1px solid #222"},children:"↺ Reset cloth"})]}),d.jsxs("div",{style:M,children:[d.jsx("div",{style:T,children:"Cloth"}),d.jsx(Rt,{label:`Resolution: ${s}×${t}`,children:d.jsx("input",{type:"range",min:8,max:40,step:1,value:s,onChange:E=>{const w=Number(E.target.value);e(w),n(w)},style:F})}),d.jsx(Rt,{label:`Width: ${i.toFixed(1)}`,children:d.jsx("input",{type:"range",min:1,max:6,step:.1,value:i,onChange:E=>a(Number(E.target.value)),style:F})}),d.jsx(Rt,{label:`Height: ${r.toFixed(1)}`,children:d.jsx("input",{type:"range",min:1,max:6,step:.1,value:r,onChange:E=>o(Number(E.target.value)),style:F})})]}),d.jsxs("div",{style:M,children:[d.jsx("div",{style:T,children:"Pin mode"}),d.jsx("div",{style:{display:"flex",gap:5},children:["flag","curtain","sheet","hammock"].map(E=>d.jsx(rf,{small:!0,active:l===E,onClick:()=>{u(E),c(w=>w+1)},children:E[0].toUpperCase()+E.slice(1)},E))})]}),d.jsxs("div",{style:M,children:[d.jsx("div",{style:T,children:"Simulation"}),of.map(([E,w,R,I,P])=>d.jsx(Rt,{label:`${E}: ${w==="constraintIters"?p[w].toFixed(0):w==="damping"?p[w].toFixed(3):p[w].toFixed(2)}`,children:d.jsx("input",{type:"range",min:R,max:I,step:P,value:p[w],onChange:B(w),style:F})},w))]}),d.jsxs("div",{style:M,children:[d.jsx("div",{style:T,children:"Rendering"}),d.jsx(Rt,{label:"Color",children:d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[d.jsx("input",{type:"color",value:f,onChange:E=>m(E.target.value),style:{width:32,height:22,border:"none",background:"none",cursor:"pointer",padding:0}}),d.jsx("span",{style:{fontSize:10,color:"#555"},children:f})]})}),d.jsx(Vi,{on:v,onClick:()=>x(E=>!E),label:"Wireframe"}),d.jsx(Vi,{on:g,onClick:()=>A(E=>!E),label:"Show pins"})]})]}),d.jsxs(Mn,{shadows:!0,camera:{position:[0,.5,5.5],fov:45},gl:{antialias:!0,toneMapping:Ls,toneMappingExposure:1},style:{flex:1,background:"#04040c"},children:[d.jsx("ambientLight",{intensity:.35}),d.jsx("directionalLight",{position:[4,8,4],intensity:1.8,castShadow:!0,"shadow-mapSize":[1024,1024]}),d.jsx("pointLight",{position:[-4,1,-2],intensity:.6,color:"#4466ff"}),d.jsx("pointLight",{position:[3,-1,3],intensity:.3,color:"#ff8844"}),d.jsx(wn,{makeDefault:!0,target:[0,0,0]}),d.jsx(nf,{cols:s,rows:t,cW:i,cH:r,pinMode:l,paramsRef:b,color:f,wireframe:v},S),g&&d.jsx(sf,{cols:s,rows:t,cW:i,cH:r,pinMode:l},`pins-${S}`),d.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-3,0],receiveShadow:!0,children:[d.jsx("planeGeometry",{args:[14,14]}),d.jsx("meshStandardMaterial",{color:"#09090f",roughness:.95})]})]})]})}const k=90,He=10;function lf({waveSpeed:s,damping:e,disturbAmp:t,modelUrl:n,resetKey:i}){const a=D.useRef(new Float32Array(k*k)),r=D.useRef(new Float32Array(k*k)),o=D.useRef(null),[l,u]=D.useState(null),h=D.useMemo(()=>{const f=new ga(He,He,k-1,k-1);return f.rotateX(-Math.PI/2),f},[]);D.useEffect(()=>{a.current.fill(0),r.current.fill(0)},[i]),D.useEffect(()=>{if(!n){u(null);return}new ks().load(n,m=>{const v=m.scene,x=new oe().setFromObject(v),g=x.getSize(new _);v.scale.setScalar(.9/Math.max(g.x,g.y,g.z)),x.setFromObject(v),v.position.sub(x.getCenter(new _)),v.position.y=.5;const A=Math.floor(k/2),p=Math.floor(k/2),y=8;for(let b=-y;b<=y;b++)for(let B=-y;B<=y;B++){const C=A+B,F=p+b;if(C>=0&&C<k&&F>=0&&F<k){const M=Math.sqrt(B*B+b*b);M<=y&&(a.current[F*k+C]-=.4*(1-M/y))}}u(v)})},[n]);const c=D.useCallback((f,m,v)=>{const x=Math.round((f/He+.5)*(k-1)),g=Math.round((m/He+.5)*(k-1)),A=4;for(let p=-A;p<=A;p++)for(let y=-A;y<=A;y++){const b=x+y,B=g+p;if(b>=0&&b<k&&B>=0&&B<k){const C=Math.sqrt(y*y+p*p);C<=A&&(a.current[B*k+b]-=v*(1-C/A))}}},[]);return Hs(()=>{const f=a.current,m=r.current,v=Math.min(s,.49),x=7;for(let p=1;p<k-1;p++)for(let y=1;y<k-1;y++){const b=p*k+y,B=f[(p-1)*k+y]+f[(p+1)*k+y]+f[p*k+y-1]+f[p*k+y+1]-4*f[b];m[b]=(m[b]+v*B)*e}for(let p=0;p<k*k;p++)f[p]+=m[p];for(let p=0;p<k;p++)for(let y=0;y<k;y++){const b=Math.min(y,p,k-1-y,k-1-p);if(b<x){const B=(b/x)**2,C=jt.lerp(.75,1,B),F=p*k+y;f[F]*=C,m[F]*=C}}const g=h.attributes.position;for(let p=0;p<k;p++)for(let y=0;y<k;y++)g.setY(p*k+y,f[p*k+y]);g.needsUpdate=!0,h.computeVertexNormals();const A=o.current;if(A){const p=Math.round((A.position.x/He+.5)*(k-1)),y=Math.round((A.position.z/He+.5)*(k-1));if(p>=0&&p<k&&y>=0&&y<k){const b=f[y*k+p];A.position.y=b+.45,A.rotation.x=b*.25,A.rotation.z=b*.15}}}),d.jsxs(d.Fragment,{children:[d.jsx("mesh",{geometry:h,onPointerDown:f=>{f.stopPropagation(),c(f.point.x,f.point.z,t)},onPointerMove:f=>{f.buttons>0&&c(f.point.x,f.point.z,t*.35)},children:d.jsx("meshStandardMaterial",{color:"#0a3060",roughness:.03,metalness:.45,envMapIntensity:3})}),l&&d.jsx("primitive",{ref:o,object:l})]})}function fs({label:s,children:e}){return d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[d.jsx("div",{style:{fontSize:10,color:"#555",letterSpacing:.4},children:s}),e]})}function cf(){const[s,e]=D.useState(.32),[t,n]=D.useState(.995),[i,a]=D.useState(.4),[r,o]=D.useState(null),[l,u]=D.useState(""),[h,c]=D.useState(0),f=D.useCallback(g=>{!g.name.endsWith(".glb")&&!g.name.endsWith(".gltf")||(r&&URL.revokeObjectURL(r),o(URL.createObjectURL(g)),u(g.name))},[r]),m={width:"100%",accentColor:"#5E5CE6"},v={borderTop:"1px solid #1a1a2a",paddingTop:12,display:"flex",flexDirection:"column",gap:8},x={fontSize:10,color:"#444",textTransform:"uppercase",letterSpacing:1};return d.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0a0a12",color:"#ddd"},children:[d.jsxs("div",{style:{width:268,padding:20,display:"flex",flexDirection:"column",gap:14,borderRight:"1px solid #1a1a2a",overflowY:"auto"},children:[d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[d.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Ripple Lab"}),d.jsx("div",{style:{fontSize:11,color:"#444",lineHeight:1.5},children:"Click or drag on the water to create waves."}),d.jsxs("div",{style:{display:"flex",gap:10,marginTop:4},children:[d.jsx("a",{href:"/soft",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Cloth"}),d.jsx("a",{href:"/jelly",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Jelly"}),d.jsx("a",{href:"/particles",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Particles"})]})]}),d.jsxs("div",{style:v,children:[d.jsx("div",{style:x,children:"Object on water"}),d.jsx("div",{onDrop:g=>{g.preventDefault();const A=g.dataTransfer.files[0];A&&f(A)},onDragOver:g=>g.preventDefault(),onClick:()=>document.getElementById("glb-ripple").click(),style:{border:`2px dashed ${r?"#5E5CE6":"#222"}`,borderRadius:8,padding:"10px 8px",textAlign:"center",cursor:"pointer",fontSize:11,color:r?"#9999ff":"#444"},children:l||"Drop a GLB — it will float"}),d.jsx("input",{id:"glb-ripple",type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:g=>{var p;const A=(p=g.target.files)==null?void 0:p[0];A&&f(A)}}),r&&d.jsx("button",{onClick:()=>{o(null),u("")},style:{padding:"5px",fontSize:10,borderRadius:5,cursor:"pointer",background:"#151520",color:"#666",border:"1px solid #222"},children:"Remove object"})]}),d.jsxs("div",{style:v,children:[d.jsx("div",{style:x,children:"Simulation"}),d.jsx(fs,{label:`Wave speed: ${s.toFixed(2)}`,children:d.jsx("input",{type:"range",min:.05,max:.48,step:.01,value:s,onChange:g=>e(Number(g.target.value)),style:m})}),d.jsx(fs,{label:`Damping: ${t.toFixed(3)}`,children:d.jsx("input",{type:"range",min:.96,max:.999,step:.001,value:t,onChange:g=>n(Number(g.target.value)),style:m})}),d.jsx(fs,{label:`Disturbance: ${i.toFixed(2)}`,children:d.jsx("input",{type:"range",min:.05,max:1.5,step:.05,value:i,onChange:g=>a(Number(g.target.value)),style:m})})]}),d.jsx("div",{style:v,children:d.jsx("button",{onClick:()=>c(g=>g+1),style:{padding:"8px",fontSize:11,borderRadius:5,cursor:"pointer",background:"#151520",color:"#666",border:"1px solid #222"},children:"↺ Clear water"})})]}),d.jsxs(Mn,{camera:{position:[0,6,8],fov:45},gl:{antialias:!0,toneMapping:Ls,toneMappingExposure:1.2},style:{flex:1,background:"#04040c"},children:[d.jsx("ambientLight",{intensity:.3}),d.jsx("directionalLight",{position:[5,8,3],intensity:1.5}),d.jsx(js,{preset:"sunset"}),d.jsx(wn,{makeDefault:!0,target:[0,0,0],maxPolarAngle:Math.PI/2.1}),d.jsx(lf,{waveSpeed:s,damping:t,disturbAmp:i,modelUrl:r,resetKey:h}),d.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-.5,0],children:[d.jsx("planeGeometry",{args:[He,He]}),d.jsx("meshStandardMaterial",{color:"#071830",roughness:.9})]})]})]})}const uf="/phys_tool/".replace(/\/$/,""),Le=window.location.pathname.slice(uf.length)||"/",df=Le==="/lab"?d.jsx(va,{}):Le==="/sim"?d.jsx($d,{}):Le==="/shatter"?d.jsx(ya,{}):Le==="/deform"?d.jsx(ba,{}):Le==="/particles"?d.jsx(Ba,{}):Le==="/soft"?d.jsx(af,{}):Le==="/ripple"?d.jsx(cf,{}):Le==="/fluid"?d.jsx(Ca,{}):d.jsx(Qd,{});xa.createRoot(document.getElementById("root")).render(d.jsx(Aa.StrictMode,{children:df}));
