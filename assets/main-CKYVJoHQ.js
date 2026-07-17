import{j as u,r as D,V as I,S as Mn,B as wn,U as Or,v as Wi,M as et,a as Dn,L as En,b as jt,F as Nt,c as de,d as Be,C as te,e as kr,P as Nr,D as Ur,f as Y,I as zr,Q as Fs,g as Jr,O as Rn,T as Wr,h as Kr,i as X,k as Qr,l as Ki,N as Vr,m as Xr,n as Yr,o as ee,p as q,R as Ue,q as qr,s as Je,t as Zr,u as _s,w as $r,x as De,y as Ss,z as Oe,A as eo,E as Fe,G as to,H as Qn,J as so,K as no,W as io,X as ro,Y as Gs,Z as In,_ as Lt,$ as oo,a0 as ao,a1 as lo,a2 as co,a3 as uo,a4 as Qi,a5 as fo,a6 as Vn,a7 as Xn,a8 as Yn,a9 as qn,aa as As,ab as ho,ac as re,ad as Vi,ae as po,af as mo,ag as Ut,ah as Xi,ai as Ee,aj as It,ak as Ht,al as ye,am as js,an as ie,ao as fn,ap as go,aq as Zn,ar as xo,as as Z,at as hn,au as Yi,av as Ao,aw as qi,ax as At,ay as vo,az as vt,aA as yo,aB as Pn,aC as ms,aD as yt,aE as ae,aF as bo,aG as Bo,aH as Zi,aI as $i,aJ as He,aK as Co,aL as To,aM as Fo,aN as So,aO as Mo,aP as wo,aQ as xe,aR as vs,aS as er,aT as Ms,aU as _n,aV as tr,aW as ws,aX as sr,aY as Gn,aZ as Ls,a_ as jn,a$ as Do,b0 as Ln,b1 as Eo,b2 as Ro,b3 as Io,b4 as Po,b5 as _o,b6 as Go,b7 as jo,b8 as Lo,b9 as Ho}from"./index-C_JYJCPr.js";const Oo={mark:{label:"Mark",subtitle:"individual particle",color:"#F06951",badge:"L1"},collection1:{label:"Collection",subtitle:"group of marks",color:"#5E5CE6",badge:"L2"},collection2:{label:"Collection Lv2",subtitle:"group of collections",color:"#9D9BF4",badge:"L3"},scene:{label:"Scene",subtitle:"global framing",color:"#34C759",badge:"Env"}},ko={1:["mark","scene"],2:["mark","collection1","scene"],3:["mark","collection1","collection2","scene"]},Hs={padding:"8px 12px",borderRadius:"10px",fontSize:"12px",fontWeight:"500",cursor:"pointer",fontFamily:"inherit",transition:"border-color 0.15s, color 0.15s",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",width:"100%"};function No({level:n,activeElement:e,onSelectElement:t,onAdvanceLevel:s,onDowngradeLevel:i,decorations:a,activeDecorationId:r,onSelectDecoration:o,onAddDecoration:l,onRemoveDecoration:f}){const h=ko[n];return u.jsxs("div",{style:{padding:"14px 14px 14px",display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsxs("div",{style:{borderTop:"1px solid #E5E5EA",paddingTop:"12px"},children:[u.jsx("div",{style:{fontSize:"10px",letterSpacing:"0.1em",textTransform:"uppercase",color:"#AEAEB2",marginBottom:"3px",fontWeight:"500"},children:"Composition"}),u.jsxs("div",{style:{display:"flex",alignItems:"baseline",justifyContent:"space-between"},children:[u.jsx("div",{style:{fontSize:"16px",color:"#1D1D1F",fontWeight:"700"},children:"Hierarchy"}),u.jsxs("span",{style:{fontSize:"11px",color:"#8E8E93",background:"#F2F2F7",padding:"2px 8px",borderRadius:"6px",fontFamily:"inherit"},children:["Lv ",n]})]})]}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:h.map(c=>{const d=Oo[c],m=c===e&&r===null;return u.jsxs("button",{onClick:()=>t(c),style:{display:"flex",alignItems:"center",gap:"10px",padding:"9px 12px",width:"100%",textAlign:"left",background:m?`${d.color}14`:"#FAFAFA",border:`1.5px solid ${m?d.color:"#E5E5EA"}`,borderRadius:"10px",cursor:"pointer",transition:"border-color 0.15s, background 0.15s",fontFamily:"inherit"},children:[u.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:d.color,flexShrink:0,boxShadow:m?`0 0 0 3px ${d.color}28`:"none",transition:"box-shadow 0.15s"}}),u.jsxs("div",{style:{flex:1,minWidth:0},children:[u.jsx("div",{style:{fontSize:"12px",color:"#1D1D1F",fontWeight:m?"600":"500",lineHeight:1.2},children:d.label}),u.jsx("div",{style:{fontSize:"10px",color:"#8E8E93",marginTop:"1px"},children:d.subtitle})]}),u.jsx("span",{style:{fontSize:"9px",letterSpacing:"0.06em",fontWeight:"500",color:m?d.color:"#8E8E93",border:`1px solid ${m?d.color:"#D1D1D6"}`,borderRadius:"4px",padding:"1px 5px",flexShrink:0,transition:"color 0.15s, border-color 0.15s"},children:d.badge})]},c)})}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px",paddingTop:"2px"},children:[n<3&&u.jsx("button",{onClick:s,style:{...Hs,background:"transparent",border:"1.5px dashed #C7C7CC",color:"#8E8E93"},children:n===1?"+ Add Collection":"+ Add Collection Lv2"}),n>1&&u.jsx("button",{onClick:i,style:{...Hs,background:"transparent",border:"1.5px dashed #FFCCC7",color:"#FF6B60"},children:n===2?"− Remove Collection":"− Remove Collection Lv2"})]}),u.jsxs("div",{style:{borderTop:"1px solid #E5E5EA",paddingTop:"8px",display:"flex",flexDirection:"column",gap:"5px"},children:[u.jsx("div",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600",marginBottom:"2px"},children:"Decorations"}),a.map((c,d)=>{const m=c.id===r;return u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[u.jsxs("button",{onClick:()=>o(c.id),style:{flex:1,display:"flex",alignItems:"center",gap:"8px",padding:"7px 10px",textAlign:"left",background:m?"#FF950014":"#FAFAFA",border:`1.5px solid ${m?"#FF9500":"#E5E5EA"}`,borderRadius:"8px",cursor:"pointer",fontFamily:"inherit",transition:"border-color 0.15s, background 0.15s"},children:[u.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:c.color,flexShrink:0,boxShadow:m?"0 0 0 3px rgba(255,149,0,0.2)":"none"}}),u.jsxs("span",{style:{fontSize:"12px",color:"#1D1D1F",fontWeight:m?"600":"400",flex:1},children:["Decoration ",d+1]}),u.jsx("span",{style:{fontSize:"9px",color:m?"#FF9500":"#8E8E93",border:`1px solid ${m?"#FF9500":"#D1D1D6"}`,borderRadius:"4px",padding:"1px 5px"},children:"Dec"})]}),u.jsx("button",{onClick:()=>f(c.id),title:"Remove decoration",style:{background:"none",border:"none",cursor:"pointer",color:"#FF3B30",fontSize:"16px",lineHeight:1,padding:"4px 6px",flexShrink:0,fontFamily:"inherit"},children:"×"})]},c.id)}),u.jsx("button",{onClick:l,style:{...Hs,background:"transparent",border:"1.5px dashed #FF9500",color:"#FF9500"},children:"+ Add Decoration"})]}),u.jsx("div",{style:{fontSize:"10px",color:"#C7C7CC",lineHeight:1.5},children:"Click an element to edit its properties →"})]})}const Uo="/phys_tool/assets/alien_flower-zZ3bV18x.glb",zo="/phys_tool/assets/apple-eGn8NxlU.glb",Jo="/phys_tool/assets/apple1-DKIWFdlj.glb",Wo="/phys_tool/assets/building_05-Dd9WS5y6.glb",Ko="/phys_tool/assets/cigarette-DLVHKG5C.glb",Qo="/phys_tool/assets/earth%20(2)-C5XamLcy.glb",Vo="/phys_tool/assets/flowers-Cclll0mT.glb",Xo="/phys_tool/assets/game-ready_humpback_whale-CUy_iCmW.glb",Yo="/phys_tool/assets/glass_bowl-ORbZUikN.glb",qo="/phys_tool/assets/ikea_glass-BpPWnL-f.glb",Zo="/phys_tool/assets/lowpoly_pine_trunk-CHGVICL4.glb",$o="/phys_tool/assets/old_japanese_store__lowpoly-DJHefVd3.glb",ea="/phys_tool/assets/paper_wad-Dr6Z0joQ.glb",ta="/phys_tool/assets/plastic_water_bottle-Bu0jSrGO.glb",sa="/phys_tool/assets/simple_fish_bowl-DqOw7pGz.glb",na="/phys_tool/assets/slime_rancher_pink_slime--xF-xp-9.glb",ia="/phys_tool/assets/stradivari_violin-Bcp-R8OH.glb",ra="/phys_tool/assets/wild_cherry_tree_trunk_prunus_avium-kTaWeuzU.glb",oa=Object.assign({"./assets/models/alien_flower.glb":Uo,"./assets/models/apple.glb":zo,"./assets/models/apple1.glb":Jo,"./assets/models/building_05.glb":Wo,"./assets/models/cigarette.glb":Ko,"./assets/models/earth (2).glb":Qo,"./assets/models/flowers.glb":Vo,"./assets/models/game-ready_humpback_whale.glb":Xo,"./assets/models/glass_bowl.glb":Yo,"./assets/models/ikea_glass.glb":qo,"./assets/models/lowpoly_pine_trunk.glb":Zo,"./assets/models/old_japanese_store__lowpoly.glb":$o,"./assets/models/paper_wad.glb":ea,"./assets/models/plastic_water_bottle.glb":ta,"./assets/models/simple_fish_bowl.glb":sa,"./assets/models/slime_rancher_pink_slime.glb":na,"./assets/models/stradivari_violin.glb":ia,"./assets/models/wild_cherry_tree_trunk_prunus_avium.glb":ra}),Pt=Object.entries(oa).map(([n,e])=>({name:n.replace(/^.*\//,"").replace(/\.(glb|gltf)$/i,""),url:e})).sort((n,e)=>n.name.localeCompare(e.name));function $n(n){if(n.shape!=="custom")return n;const e=Pt.find(t=>t.name===n.customModelName);return e?{...n,customModelUrl:e.url}:!n.customModelUrl||n.customModelUrl.startsWith("blob:")?{...n,shape:"box",customModelUrl:void 0,customModelHasMat:void 0}:n}const ei=["#b0b0b0","#4466dd","#cccc44","#cc5533","#3344aa","#44aa66","#aa44cc","#44aaaa"];let aa=100;function la(){return String(aa++)}const Ke={padding:"4px 5px",verticalAlign:"middle"},ti={background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"6px",color:"#1D1D1F",fontSize:"12px",padding:"3px 6px",outline:"none",width:"100%",fontFamily:"inherit"},Os={background:"#F2F2F7",border:"1px solid #D1D1D6",color:"#6C6C70",cursor:"pointer",borderRadius:"5px",padding:"2px 6px",fontSize:"11px",lineHeight:"1.4",fontFamily:"inherit"};function ks({label:n,type:e,varName:t}){const s=e==="numerical",i=s?"#007AFF":"#5E5CE6",a=s?"#EBF3FF":"#F3EBFF",r=s?"#A8CAFF":"#C8A8FF",o=`phys-var/${e}`;return u.jsxs("div",{draggable:!0,onDragStart:l=>{l.dataTransfer.setData("phys-var/name",t),l.dataTransfer.setData(o,"1"),l.dataTransfer.effectAllowed="copy"},title:`Drag to bind ${n}`,style:{display:"inline-flex",alignItems:"center",gap:"5px",background:a,border:`1px solid ${r}`,borderRadius:"7px",padding:"6px 10px",fontSize:"11px",color:i,fontWeight:"600",cursor:"grab",userSelect:"none",whiteSpace:"nowrap"},children:[u.jsx("span",{style:{fontSize:"10px",opacity:.7},children:s?"#":"◈"}),n]})}function ca({layers:n,onChange:e}){const[t,s]=D.useState(!0),i=n.reduce((h,c)=>h+Math.max(0,c.percentage),0);function a(h,c,d){e(n.map(m=>m.id===h?{...m,[c]:d}:m))}function r(){e([...n,{id:la(),name:`Layer ${n.length+1}`,percentage:10,color:ei[n.length%ei.length]}])}function o(h){n.length<=1||e(n.filter(c=>c.id!==h))}function l(h){if(h===0)return;const c=[...n];[c[h-1],c[h]]=[c[h],c[h-1]],e(c)}function f(h){if(h===n.length-1)return;const c=[...n];[c[h],c[h+1]]=[c[h+1],c[h]],e(c)}return u.jsxs("div",{style:{padding:"14px 14px 10px",color:"#1D1D1F",fontSize:"13px",display:"flex",flexDirection:"column",gap:"10px"},children:[u.jsxs("button",{onClick:()=>s(!t),style:{display:"flex",alignItems:"center",gap:"6px",background:"none",border:"none",cursor:"pointer",padding:"4px 0",fontFamily:"inherit",borderTop:"1px solid #E5E5EA",paddingTop:"10px",width:"100%",textAlign:"left"},children:[u.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600",flex:1},children:"Data Table"}),u.jsx("span",{style:{fontSize:"11px",color:"#AEAEB2",transition:"transform 0.15s",transform:t?"rotate(0deg)":"rotate(-90deg)",display:"inline-block"},children:"▾"})]}),t&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:{fontSize:"11px",color:"#8E8E93",marginTop:"-4px"},children:["Total weight: ",u.jsx("span",{style:{color:"#1D1D1F",fontWeight:"600"},children:i.toFixed(1)})]}),u.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[u.jsx("thead",{children:u.jsxs("tr",{style:{borderBottom:"1px solid #E5E5EA"},children:[u.jsx("th",{style:{...Ke,textAlign:"left",color:"#8E8E93",fontWeight:"500",fontSize:"11px"},children:"Name"}),u.jsx("th",{style:{...Ke,textAlign:"left",color:"#8E8E93",fontWeight:"500",fontSize:"11px",width:"46px"},children:"Wt"}),u.jsx("th",{style:{...Ke,textAlign:"left",color:"#8E8E93",fontWeight:"500",fontSize:"11px",width:"30px"},children:"Col"}),u.jsx("th",{style:{width:"52px"}})]})}),u.jsx("tbody",{children:n.map((h,c)=>u.jsxs("tr",{style:{borderBottom:"1px solid #F2F2F7",background:c%2===0?"transparent":"#FAFAFA"},children:[u.jsx("td",{style:Ke,children:u.jsx("input",{type:"text",value:h.name,onChange:d=>a(h.id,"name",d.target.value),style:ti})}),u.jsx("td",{style:Ke,children:u.jsx("input",{type:"number",min:0,max:9999,step:1,value:h.percentage,onChange:d=>a(h.id,"percentage",Number(d.target.value)),style:{...ti,width:"40px"}})}),u.jsx("td",{style:Ke,children:u.jsx("input",{type:"color",value:h.color,onChange:d=>a(h.id,"color",d.target.value),style:{width:"26px",height:"24px",border:"1px solid #D1D1D6",borderRadius:"4px",background:"none",cursor:"pointer",padding:"1px"}})}),u.jsx("td",{style:{...Ke,textAlign:"right"},children:u.jsxs("div",{style:{display:"flex",gap:"2px",justifyContent:"flex-end"},children:[u.jsx("button",{onClick:()=>l(c),disabled:c===0,title:"Move up",style:Os,children:"↑"}),u.jsx("button",{onClick:()=>f(c),disabled:c===n.length-1,title:"Move down",style:Os,children:"↓"}),u.jsx("button",{onClick:()=>o(h.id),disabled:n.length<=1,title:"Remove",style:{...Os,color:"#FF3B30"},children:"×"})]})})]},h.id))})]}),u.jsx("button",{onClick:r,style:{background:"#F2F2F7",border:"1px solid #D1D1D6",color:"#6C6C70",cursor:"pointer",borderRadius:"8px",padding:"6px 12px",fontSize:"12px",fontWeight:"500",alignSelf:"flex-start",fontFamily:"inherit"},children:"+ Add Layer"})]})]})}function ua(n){return 2*Math.atan(12/n)*180/Math.PI}const Qe="/phys_tool/",me={spatial:`${Qe}assets/icons/spatial.png`,shape:`${Qe}assets/icons/shape.png`,material:`${Qe}assets/icons/material.png`,structural:`${Qe}assets/icons/structural.png`,populations:`${Qe}assets/icons/populations.png`,framing:`${Qe}assets/icons/framing.png`,labels:`${Qe}assets/icons/labels.png`};function da({children:n}){return u.jsx("span",{style:{fontSize:"10px",color:"#8E8E93",textTransform:"uppercase",letterSpacing:"0.07em",fontWeight:"600"},children:n})}function W({label:n,children:e,right:t}){return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx(da,{children:n}),t]}),e]})}function ys({options:n,value:e,onChange:t}){return u.jsx("div",{style:{display:"flex",background:"#EFEFEF",borderRadius:"8px",padding:"2px",gap:"2px"},children:n.map(s=>{const i=e===s.value;return u.jsx("button",{onClick:()=>t(s.value),style:{flex:1,padding:"5px 4px",background:i?"#FFFFFF":"transparent",border:"none",borderRadius:"6px",boxShadow:i?"0 1px 3px rgba(0,0,0,0.12)":"none",color:i?"#1D1D1F":"#6C6C70",cursor:"pointer",fontSize:"12px",fontWeight:i?"600":"400",transition:"all 0.15s",whiteSpace:"nowrap",fontFamily:"inherit"},children:s.label},s.value)})})}const nr={weight:{label:"Weight",type:"numerical"},garbageType:{label:"Garbage Type",type:"categorical"},count:{label:"Count",type:"numerical"}};function pn({children:n,accepts:e,onDrop:t}){const[s,i]=D.useState(!1),a=e==="any"?["phys-var/numerical","phys-var/categorical"]:[`phys-var/${e}`],r=l=>a.some(f=>l.includes(f)),o=e==="categorical"?"#5E5CE6":"#007AFF";return u.jsx("div",{onDragOver:l=>{r(l.dataTransfer.types)&&(l.preventDefault(),i(!0))},onDragLeave:()=>i(!1),onDrop:l=>{r(l.dataTransfer.types)&&(l.preventDefault(),i(!1),t(l.dataTransfer.getData("phys-var/name")))},style:{borderRadius:"8px",outline:s?`2px dashed ${o}`:"2px dashed transparent",outlineOffset:"2px",transition:"outline 0.1s"},children:n})}function bs({label:n,type:e,onClear:t}){const s=e==="numerical",i=s?"#007AFF":"#5E5CE6";return u.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:s?"#EBF3FF":"#F3EBFF",border:`1px solid ${s?"#A8CAFF":"#C8A8FF"}`,borderRadius:"7px",padding:"6px 10px",fontSize:"12px",color:i,fontWeight:"500"},children:[u.jsxs("span",{children:[s?"#":"◈"," ",n]}),u.jsx("button",{onClick:t,style:{background:"none",border:"none",cursor:"pointer",color:"#AEAEB2",padding:"0 0 0 2px",fontSize:"14px",lineHeight:1,fontFamily:"inherit"},children:"×"})]})}const fa={top:"↑",bottom:"↓",left:"←",right:"→"};function Wt({position:n,slot:e,onBind:t,onClear:s}){const[i,a]=D.useState(!1);if(e!==null){const r=nr[e];return u.jsx(bs,{label:r.label,type:r.type,onClear:s})}return u.jsxs("div",{onDragOver:r=>{r.dataTransfer.types.some(l=>l==="phys-var/numerical"||l==="phys-var/categorical")&&(r.preventDefault(),a(!0))},onDragLeave:()=>a(!1),onDrop:r=>{r.dataTransfer.types.some(l=>l==="phys-var/numerical"||l==="phys-var/categorical")&&(r.preventDefault(),a(!1),t(r.dataTransfer.getData("phys-var/name")))},title:`Drag a variable to the ${n} label`,style:{border:`1.5px dashed ${i?"#007AFF":"#D1D1D6"}`,borderRadius:"7px",padding:"4px 8px",fontSize:"10px",color:i?"#007AFF":"#AEAEB2",textAlign:"center",whiteSpace:"nowrap",background:i?"#EBF3FF":"transparent",transition:"all 0.1s",cursor:"default",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px"},children:[u.jsx("span",{children:fa[n]}),u.jsx("span",{style:{textTransform:"capitalize"},children:n})]})}function ir({config:n,onChange:e}){function t(s,i){e({...n,slots:{...n.slots,[s]:i}})}return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsx("button",{onClick:()=>e({...n,show:!n.show}),style:{alignSelf:"flex-start",background:n.show?"#EBF3FF":"#F2F2F7",border:`1px solid ${n.show?"#A8CAFF":"#D1D1D6"}`,color:n.show?"#007AFF":"#6C6C70",borderRadius:"6px",padding:"6px 14px",fontSize:"12px",fontWeight:n.show?"600":"400",cursor:"pointer",fontFamily:"inherit",transition:"all 0.15s"},children:n.show?"● Visible":"○ Hidden"}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto 1fr",gridTemplateRows:"auto auto auto",gap:"4px",alignItems:"center",justifyItems:"center"},children:[u.jsx("div",{}),u.jsx(Wt,{position:"top",slot:n.slots.top,onBind:s=>t("top",s),onClear:()=>t("top",null)}),u.jsx("div",{}),u.jsx(Wt,{position:"left",slot:n.slots.left,onBind:s=>t("left",s),onClear:()=>t("left",null)}),u.jsx("div",{style:{width:"18px",height:"18px",background:"#E5E5EA",borderRadius:"4px",flexShrink:0}}),u.jsx(Wt,{position:"right",slot:n.slots.right,onBind:s=>t("right",s),onClear:()=>t("right",null)}),u.jsx("div",{}),u.jsx(Wt,{position:"bottom",slot:n.slots.bottom,onBind:s=>t("bottom",s),onClear:()=>t("bottom",null)}),u.jsx("div",{})]})]})}function ge({icon:n,title:e,defaultOpen:t=!0,children:s,empty:i=!1}){const[a,r]=D.useState(t);return u.jsxs("div",{style:{border:"1px solid #E5E5EA",borderRadius:"10px",overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},children:[u.jsxs("button",{onClick:()=>r(!a),style:{display:"flex",alignItems:"center",gap:"9px",padding:"9px 12px",width:"100%",textAlign:"left",background:"#F8F8FA",border:"none",borderBottom:a&&!i?"1px solid #E5E5EA":"none",cursor:"pointer",fontFamily:"inherit",transition:"background 0.1s"},children:[u.jsx("img",{src:n,alt:e,style:{width:"24px",height:"24px",borderRadius:"6px",flexShrink:0,objectFit:"cover"}}),u.jsx("span",{style:{flex:1,fontSize:"12px",fontWeight:"600",color:"#1D1D1F",lineHeight:1},children:e}),u.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",transition:"transform 0.15s",display:"inline-block",transform:a?"rotate(0deg)":"rotate(-90deg)"},children:"▾"})]}),a&&u.jsx("div",{style:{padding:"12px",background:"#FFFFFF",display:"flex",flexDirection:"column",gap:"12px"},children:i?u.jsx("div",{style:{fontSize:"11px",color:"#C7C7CC",textAlign:"center",padding:"8px 0",fontStyle:"italic"},children:"Coming soon"}):s})]})}function $e({label:n,value:e,onChange:t,min:s,max:i,step:a=.1,lockable:r=!1,axisBindings:o,onAxisBind:l}){const[f,h]=D.useState(!1),[c,d]=D.useState(null),m=["x","y","z"];function v(g,A){if(f&&e[g]!==0){const p=A/e[g];t({x:g==="x"?A:parseFloat((e.x*p).toFixed(3)),y:g==="y"?A:parseFloat((e.y*p).toFixed(3)),z:g==="z"?A:parseFloat((e.z*p).toFixed(3))})}else t({...e,[g]:A})}const x=r?u.jsx("button",{onClick:g=>{g.stopPropagation(),h(!f)},title:f?"Unlock proportions":"Lock proportions (scale all axes together)",style:{background:f?"#007AFF":"transparent",border:`1px solid ${f?"#007AFF":"#D1D1D6"}`,borderRadius:"4px",padding:"1px 7px",lineHeight:"16px",cursor:"pointer",fontSize:"10px",color:f?"#fff":"#AEAEB2",fontFamily:"inherit",transition:"all 0.12s"},children:"⛓"}):void 0;return u.jsx(W,{label:n,right:x,children:u.jsx("div",{style:{display:"flex",gap:"5px"},children:m.map(g=>{const A=(o==null?void 0:o[g])??null,p=c===g;if(A!==null&&l){const y=nr[A];return u.jsx("div",{style:{flex:1},children:u.jsxs("div",{style:{display:"flex",alignItems:"stretch",border:`1px solid ${y.type==="numerical"?"#A8CAFF":"#C8A8FF"}`,borderRadius:"6px",overflow:"hidden",background:y.type==="numerical"?"#EBF3FF":"#F3EBFF"},children:[u.jsx("span",{style:{padding:"4px 5px",background:y.type==="numerical"?"#C5DFFF":"#DFC5FF",color:y.type==="numerical"?"#0055CC":"#5500CC",fontSize:"9px",fontWeight:"700",letterSpacing:"0.03em",display:"flex",alignItems:"center",flexShrink:0},children:g.toUpperCase()}),u.jsxs("span",{style:{flex:1,padding:"4px 4px",fontSize:"10px",color:y.type==="numerical"?"#007AFF":"#5E5CE6",fontWeight:"600",display:"flex",alignItems:"center",overflow:"hidden",whiteSpace:"nowrap"},children:[y.type==="numerical"?"#":"◈"," ",y.label]}),u.jsx("button",{onClick:()=>l(g,null),style:{background:"none",border:"none",cursor:"pointer",color:"#AEAEB2",padding:"0 4px",fontSize:"13px",lineHeight:1,fontFamily:"inherit"},children:"×"})]})},g)}return u.jsx("div",{style:{flex:1},onDragOver:y=>{o&&y.dataTransfer.types.includes("phys-var/numerical")&&(y.preventDefault(),d(g))},onDragLeave:()=>d(null),onDrop:y=>{!o||!y.dataTransfer.types.includes("phys-var/numerical")||(y.preventDefault(),d(null),l==null||l(g,y.dataTransfer.getData("phys-var/name")))},children:u.jsxs("div",{style:{display:"flex",alignItems:"stretch",border:`1px solid ${p?"#007AFF":"#D1D1D6"}`,borderRadius:"6px",overflow:"hidden",outline:p?"1px dashed #007AFF":"none",outlineOffset:"1px"},children:[u.jsx("span",{style:{padding:"4px 5px",background:"#E5E5EA",color:"#6C6C70",fontSize:"9px",fontWeight:"700",letterSpacing:"0.03em",display:"flex",alignItems:"center",flexShrink:0},children:g.toUpperCase()}),u.jsx("input",{type:"number",value:e[g],min:s,max:i,step:a,onChange:y=>v(g,Number(y.target.value)),style:{flex:1,minWidth:0,background:"#F2F2F7",border:"none",padding:"4px 5px",fontSize:"11px",color:"#1D1D1F",outline:"none",fontFamily:"monospace",width:"100%"}})]})},g)})})})}const rr={plastic:"Matte diffuse surface",fluid:"Glass-like, clearcoat + iridescence",metal:"Polished — mirrors the HDRI",emissive:"Self-illuminated, glows with color",original:"Use the model's built-in materials"},or=["plastic","fluid","metal","emissive"],ha=[{value:"alignment",label:"Alignment"},{value:"scattering",label:"Scattering"},{value:"stacking",label:"Stacking"},{value:"piling",label:"Piling"}],pa=[{value:"city",label:"City"},{value:"warehouse",label:"Warehouse"},{value:"sunset",label:"Sunset"},{value:"dawn",label:"Dawn"},{value:"forest",label:"Forest"},{value:"night",label:"Night"},{value:"studio",label:"Studio"},{value:"apartment",label:"Apartment"}];function Ds({title:n,subtitle:e,color:t}){return u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:"10px",letterSpacing:"0.1em",textTransform:"uppercase",color:"#AEAEB2",marginBottom:"3px",fontWeight:"500"},children:"Properties"}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("span",{style:{width:"10px",height:"10px",borderRadius:"50%",background:t,flexShrink:0}}),u.jsx("div",{style:{fontSize:"16px",color:"#1D1D1F",fontWeight:"700"},children:n})]}),u.jsx("div",{style:{fontSize:"11px",color:"#8E8E93",marginTop:"2px",paddingLeft:"18px"},children:e})]})}function ar({structural:n,onChange:e}){return u.jsxs(u.Fragment,{children:[u.jsx(W,{label:"Deformation",children:u.jsx(ys,{options:[{value:"none",label:"None"},{value:"fluid",label:"〜 Fluid"}],value:n.deformation,onChange:t=>e({...n,deformation:t})})}),n.deformation==="fluid"&&u.jsxs(u.Fragment,{children:[u.jsxs(W,{label:"Wave Intensity",children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("input",{type:"range",min:0,max:.8,step:.01,value:n.fluidDistort,onChange:t=>e({...n,fluidDistort:Number(t.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),u.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"32px",textAlign:"right"},children:n.fluidDistort.toFixed(2)})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#C7C7CC"},children:[u.jsx("span",{children:"Rigid"}),u.jsx("span",{children:"Fluid"})]})]}),u.jsxs(W,{label:"Wave Speed",children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("input",{type:"range",min:0,max:5,step:.1,value:n.fluidSpeed,onChange:t=>e({...n,fluidSpeed:Number(t.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),u.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"32px",textAlign:"right"},children:n.fluidSpeed.toFixed(1)})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#C7C7CC"},children:[u.jsx("span",{children:"Still"}),u.jsx("span",{children:"Fast"})]})]})]})]})}function lr({config:n,onChange:e}){const t=D.useRef(null),s=D.useRef(null),i=n.shape==="custom"&&Pt.some(h=>h.name===n.customModelName),a=n.shape==="custom"&&!i,r=n.shape!=="custom"?n.shape:i?`preset:${n.customModelName}`:n.customModelUrl?"__blob__":"box";function o(h){var m;const c=h.target.value;if(c==="__import__"){(m=t.current)==null||m.click();return}if(c==="__blob__")return;if(c.startsWith("preset:")){const v=c.slice(7),x=Pt.find(g=>g.name===v);x&&e({shape:"custom",customModelUrl:x.url,customModelHasMat:!0,customModelName:x.name,material:"original"});return}const d=n.material==="original"?"plastic":n.material;e({shape:c,customModelUrl:void 0,customModelHasMat:void 0,customModelName:void 0,material:d})}function l(h){var v;const c=(v=h.target.files)==null?void 0:v[0];if(!c)return;s.current&&URL.revokeObjectURL(s.current);const d=URL.createObjectURL(c);s.current=d;const m=c.name.replace(/\.(glb|gltf)$/i,"");e({shape:"custom",customModelUrl:d,customModelHasMat:!0,customModelName:m,material:"original"}),h.target.value=""}const f={width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"};return u.jsxs(u.Fragment,{children:[u.jsxs("select",{value:r,onChange:o,style:f,children:[u.jsxs("optgroup",{label:"Primitives",children:[u.jsx("option",{value:"box",children:"■  Box"}),u.jsx("option",{value:"sphere",children:"●  Sphere"}),u.jsx("option",{value:"star",children:"★  Star"})]}),Pt.length>0&&u.jsx("optgroup",{label:"3D Models",children:Pt.map(h=>u.jsx("option",{value:`preset:${h.name}`,children:h.name},h.name))}),u.jsxs("optgroup",{label:"Custom",children:[a&&u.jsxs("option",{value:"__blob__",children:["✎  ",n.customModelName??"Imported file"]}),u.jsx("option",{value:"__import__",children:"↑  Import .glb / .gltf…"})]})]}),u.jsx("input",{ref:t,type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:l})]})}function ma({config:n,onChange:e,bindings:t,onBind:s,labelConfig:i,onLabelChange:a}){const r=n.shape==="custom"&&n.customModelHasMat?["original","plastic","fluid","metal","emissive"]:or;return u.jsxs(u.Fragment,{children:[u.jsx(Ds,{title:"Mark",subtitle:"individual particle",color:"#F06951"}),u.jsxs(ge,{icon:me.spatial,title:"Spatial",children:[u.jsx($e,{label:"Position",value:n.position,onChange:o=>e({...n,position:o}),min:-10,max:10,step:.1}),u.jsx($e,{label:"Size",value:n.size,onChange:o=>e({...n,size:o}),min:.1,max:10,step:.1,lockable:!0,axisBindings:{x:t.markSizeX,y:t.markSizeY,z:t.markSizeZ},onAxisBind:(o,l)=>s(o==="x"?"markSizeX":o==="y"?"markSizeY":"markSizeZ",l)}),u.jsx($e,{label:"Orientation",value:n.orientation,onChange:o=>e({...n,orientation:o}),min:-180,max:180,step:1})]}),u.jsx(ge,{icon:me.shape,title:"Geometry",children:u.jsx(W,{label:"Shape",children:u.jsx(lr,{config:n,onChange:o=>e({...n,...o})})})}),u.jsxs(ge,{icon:me.material,title:"Material",children:[u.jsxs(W,{label:"Type",children:[u.jsx("select",{value:n.material,onChange:o=>e({...n,material:o.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:r.map(o=>u.jsx("option",{value:o,children:o.charAt(0).toUpperCase()+o.slice(1)},o))}),u.jsx("div",{style:{fontSize:"11px",color:"#AEAEB2",lineHeight:1.5},children:rr[n.material]})]}),u.jsx(W,{label:"Color",children:t.markColor==="garbageType"?u.jsx(bs,{label:"Garbage Type",type:"categorical",onClear:()=>s("markColor",null)}):u.jsx(pn,{accepts:"categorical",onDrop:()=>s("markColor","garbageType"),children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"2px"},children:[u.jsx("input",{type:"color",value:n.color,onChange:o=>e({...n,color:o.target.value}),style:{width:"36px",height:"32px",border:"1px solid #D1D1D6",borderRadius:"6px",background:"none",cursor:"pointer",padding:"2px"}}),u.jsx("span",{style:{fontSize:"12px",color:"#8E8E93",fontFamily:"monospace"},children:n.color})]})})})]}),u.jsx(ge,{icon:me.structural,title:"Structural",defaultOpen:!1,children:u.jsx(ar,{structural:n.structural,onChange:o=>e({...n,structural:o})})}),u.jsx(ge,{icon:me.labels,title:"Labels",defaultOpen:!1,children:u.jsx(ir,{config:i,onChange:a})})]})}function si({config:n,onChange:e,collectionLevel:t,bindings:s,onBind:i,labelConfig:a,onLabelChange:r}){const o=t===2;return u.jsxs(u.Fragment,{children:[u.jsx(Ds,{title:o?"Collection Lv2":"Collection",subtitle:o?"group of collections":"group of marks",color:o?"#9D9BF4":"#5E5CE6"}),u.jsxs(ge,{icon:me.populations,title:"Groups & Populations",children:[u.jsx(W,{label:"Arrangement",children:u.jsx("select",{value:n.arrangement,onChange:l=>e({...n,arrangement:l.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:ha.map(l=>u.jsxs("option",{value:l.value,disabled:l.value==="stacking",children:[l.label,l.value==="stacking"?" (coming soon)":""]},l.value))})}),n.arrangement==="alignment"&&u.jsxs(u.Fragment,{children:[u.jsx(W,{label:"Elements",children:(t===1?s.c1AlignCount:s.c2AlignCount)==="count"?u.jsx(bs,{label:"Count",type:"numerical",onClear:()=>i(t===1?"c1AlignCount":"c2AlignCount",null)}):u.jsx(pn,{accepts:"numerical",onDrop:()=>i(t===1?"c1AlignCount":"c2AlignCount","count"),children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("input",{type:"range",min:2,max:20,step:1,value:n.alignCount,onChange:l=>e({...n,alignCount:Number(l.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),u.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:n.alignCount})]})})}),u.jsx(W,{label:"Axis",children:u.jsx(ys,{options:[{value:"X",label:"→ X axis"},{value:"Y",label:"↑ Y axis"}],value:n.alignAxis,onChange:l=>e({...n,alignAxis:l})})}),u.jsx(W,{label:"Anchor",children:u.jsx(ys,{options:n.alignAxis==="X"?[{value:"start",label:"↑ Top"},{value:"center",label:"◆ Ctr"},{value:"end",label:"↓ Bottom"}]:[{value:"start",label:"← Left"},{value:"center",label:"◆ Ctr"},{value:"end",label:"→ Right"}],value:n.alignAnchor,onChange:l=>e({...n,alignAnchor:l})})}),u.jsxs(W,{label:"Spacing",children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("input",{type:"range",min:.5,max:o?12:6,step:.1,value:n.alignSpacing,onChange:l=>e({...n,alignSpacing:Number(l.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),u.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:n.alignSpacing.toFixed(1)})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#C7C7CC"},children:[u.jsx("span",{children:"Tight"}),u.jsx("span",{children:"Spread"})]})]})]}),n.arrangement==="scattering"&&u.jsxs(u.Fragment,{children:[u.jsx(W,{label:"Mark Count",children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("input",{type:"range",min:5,max:600,step:5,value:n.scatterCount,onChange:l=>e({...n,scatterCount:Number(l.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),u.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:n.scatterCount})]})}),s.scatterSize==="weight"?u.jsx(W,{label:"Box Dimensions",children:u.jsx(bs,{label:"Weight",type:"numerical",onClear:()=>i("scatterSize",null)})}):u.jsx(pn,{accepts:"numerical",onDrop:()=>i("scatterSize","weight"),children:u.jsx($e,{label:"Box Dimensions",value:n.scatterDimensions,onChange:l=>e({...n,scatterDimensions:l}),min:.5,max:20,step:.5})})]}),n.arrangement==="piling"&&u.jsx(W,{label:"Mark Count",children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("input",{type:"range",min:2,max:60,step:1,value:n.pilingCount,onChange:l=>e({...n,pilingCount:Number(l.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),u.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:n.pilingCount})]})}),u.jsx(W,{label:"Color",children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx("input",{type:"color",value:n.color,onChange:l=>e({...n,color:l.target.value}),style:{width:"36px",height:"32px",border:"1px solid #D1D1D6",borderRadius:"6px",background:"none",cursor:"pointer",padding:"2px"}}),u.jsx("span",{style:{fontSize:"12px",color:"#8E8E93",fontFamily:"monospace"},children:n.color})]})})]}),t===1&&a&&r&&u.jsx(ge,{icon:me.labels,title:"Labels",defaultOpen:!1,children:u.jsx(ir,{config:a,onChange:r})})]})}function ga({config:n,onChange:e}){const t=n.shape==="custom"&&n.customModelHasMat?["original","plastic","fluid","metal","emissive"]:or;return u.jsxs(u.Fragment,{children:[u.jsx(Ds,{title:"Decoration",subtitle:"decorative element",color:"#FF9500"}),u.jsxs(ge,{icon:me.spatial,title:"Spatial",children:[u.jsx($e,{label:"Position",value:n.position,onChange:s=>e({...n,position:s}),min:-20,max:20,step:.1}),u.jsx($e,{label:"Size",value:n.size,onChange:s=>e({...n,size:s}),min:.1,max:10,step:.1,lockable:!0}),u.jsx($e,{label:"Orientation",value:n.orientation,onChange:s=>e({...n,orientation:s}),min:-180,max:180,step:1})]}),u.jsx(ge,{icon:me.shape,title:"Geometry",children:u.jsx(W,{label:"Shape",children:u.jsx(lr,{config:n,onChange:s=>e({...n,...s})})})}),u.jsxs(ge,{icon:me.material,title:"Material",children:[u.jsxs(W,{label:"Type",children:[u.jsx("select",{value:n.material,onChange:s=>e({...n,material:s.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:t.map(s=>u.jsx("option",{value:s,children:s.charAt(0).toUpperCase()+s.slice(1)},s))}),u.jsx("div",{style:{fontSize:"11px",color:"#AEAEB2",lineHeight:1.5},children:rr[n.material]})]}),u.jsx(W,{label:"Color",children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"2px"},children:[u.jsx("input",{type:"color",value:n.color,onChange:s=>e({...n,color:s.target.value}),style:{width:"36px",height:"32px",border:"1px solid #D1D1D6",borderRadius:"6px",background:"none",cursor:"pointer",padding:"2px"}}),u.jsx("span",{style:{fontSize:"12px",color:"#8E8E93",fontFamily:"monospace"},children:n.color})]})})]}),u.jsx(ge,{icon:me.structural,title:"Structural",defaultOpen:!1,children:u.jsx(ar,{structural:n.structural,onChange:s=>e({...n,structural:s})})})]})}function xa({config:n,onChange:e}){return u.jsxs(u.Fragment,{children:[u.jsx(Ds,{title:"Scene",subtitle:"global framing",color:"#34C759"}),u.jsx("div",{style:{border:"1px solid #E5E5EA",borderRadius:"10px",overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},children:u.jsxs("div",{style:{padding:"12px",background:"#FFFFFF",display:"flex",flexDirection:"column",gap:"12px"},children:[u.jsx(W,{label:"Background",children:u.jsx(ys,{options:[{value:"dark",label:"■ Dark"},{value:"ocean",label:"~ Ocean"}],value:n.background,onChange:t=>e({...n,background:t})})}),u.jsx(W,{label:"Lighting (HDRI)",children:u.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px"},children:pa.map(t=>{const s=n.hdriPreset===t.value;return u.jsx("button",{onClick:()=>e({...n,hdriPreset:t.value}),style:{padding:"5px 6px",background:s?"#EBF3FF":"#F2F2F7",border:`1px solid ${s?"#A8CAFF":"#E5E5EA"}`,borderRadius:"7px",color:s?"#007AFF":"#6C6C70",cursor:"pointer",fontSize:"11px",fontFamily:"inherit",fontWeight:s?"600":"400",transition:"all 0.1s",textAlign:"center"},children:t.label},t.value)})})})]})}),u.jsx(ge,{icon:me.framing,title:"Framing",children:u.jsxs(W,{label:"Camera",children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"2px"},children:[u.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",fontWeight:"500"},children:[n.focalLength,"mm"]}),u.jsxs("span",{style:{fontSize:"11px",color:"#AEAEB2"},children:[ua(n.focalLength).toFixed(0),"° fov"]})]}),u.jsx("input",{type:"range",min:14,max:180,step:1,value:n.focalLength,onChange:t=>e({...n,focalLength:Number(t.target.value)}),style:{width:"100%",accentColor:"#34C759",cursor:"pointer"}}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#AEAEB2",marginTop:"2px"},children:[u.jsx("span",{children:"14mm wide"}),u.jsx("span",{children:"180mm tele"})]})]})})]})}function Aa({activeElement:n,markConfig:e,onMarkChange:t,collection1Config:s,onCollection1Change:i,collection2Config:a,onCollection2Change:r,sceneConfig:o,onSceneChange:l,bindings:f,onBind:h,markLabelConfig:c,onMarkLabelChange:d,colLabelConfig:m,onColLabelChange:v,activeDecorationId:x,decorations:g,onDecorationChange:A,layers:p,onOpenData:y}){const b=x!==null?g.find(B=>B.id===x)??null:null;return u.jsxs("div",{style:{padding:"18px 14px",color:"#1D1D1F",fontSize:"13px",display:"flex",flexDirection:"column",gap:"10px",height:"100%",boxSizing:"border-box",overflowY:"auto"},children:[b!==null?u.jsx(ga,{config:b,onChange:A}):n==="mark"?u.jsx(ma,{config:e,onChange:t,bindings:f,onBind:h,labelConfig:c,onLabelChange:d}):n==="collection1"?u.jsx(si,{config:s,onChange:i,collectionLevel:1,bindings:f,onBind:h,labelConfig:m,onLabelChange:v}):n==="collection2"?u.jsx(si,{config:a,onChange:r,collectionLevel:2,bindings:f,onBind:h}):n==="scene"?u.jsx(xa,{config:o,onChange:l}):null,u.jsxs("div",{style:{marginTop:"auto",borderTop:"1px solid #E5E5EA",paddingTop:"12px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[u.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600"},children:"Data Variables"}),u.jsx("button",{onClick:y,style:{background:"none",border:"1px solid #D1D1D6",borderRadius:"6px",padding:"3px 8px",fontSize:"11px",color:"#6C6C70",cursor:"pointer",fontFamily:"inherit"},children:"Open Data"})]}),u.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:[u.jsx(ks,{label:"Weight",type:"numerical",varName:"weight"}),u.jsx(ks,{label:"Garbage Type",type:"categorical",varName:"garbageType"}),u.jsx(ks,{label:"Count",type:"numerical",varName:"count"})]})]}),u.jsx("div",{style:{fontSize:"10px",color:"#C7C7CC",lineHeight:1.7,paddingBottom:"4px"},children:"Drag to orbit · Scroll to zoom · Right-drag to pan"})]})}var va=Object.defineProperty,ya=(n,e,t)=>e in n?va(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ni=(n,e,t)=>(ya(n,typeof e!="symbol"?e+"":e,t),t);const ba=(()=>{const n={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new I},up:{value:new I(0,1,0)}},vertexShader:`
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
      #include <${Wi>=154?"colorspace_fragment":"encodings_fragment"}>

      }
    `},e=new Mn({name:"SkyShader",fragmentShader:n.fragmentShader,vertexShader:n.vertexShader,uniforms:Or.clone(n.uniforms),side:wn,depthWrite:!1});class t extends et{constructor(){super(new Dn(1,1,1),e)}}return ni(t,"SkyShader",n),ni(t,"material",e),t})();function Bs(n){if(typeof TextDecoder<"u")return new TextDecoder().decode(n);let e="";for(let t=0,s=n.length;t<s;t++)e+=String.fromCharCode(n[t]);try{return decodeURIComponent(escape(e))}catch{return e}}const Ze="srgb",Re="srgb-linear",ii=3001,Ba=3e3;class Hn extends En{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ma(t)}),this.register(function(t){return new wa(t)}),this.register(function(t){return new La(t)}),this.register(function(t){return new Ha(t)}),this.register(function(t){return new Oa(t)}),this.register(function(t){return new Ea(t)}),this.register(function(t){return new Ra(t)}),this.register(function(t){return new Ia(t)}),this.register(function(t){return new Pa(t)}),this.register(function(t){return new Sa(t)}),this.register(function(t){return new _a(t)}),this.register(function(t){return new Da(t)}),this.register(function(t){return new ja(t)}),this.register(function(t){return new Ga(t)}),this.register(function(t){return new Ta(t)}),this.register(function(t){return new ka(t)}),this.register(function(t){return new Na(t)})}load(e,t,s,i){const a=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const f=jt.extractUrlBase(e);r=jt.resolveURL(f,this.path)}else r=jt.extractUrlBase(e);this.manager.itemStart(e);const o=function(f){i?i(f):console.error(f),a.manager.itemError(e),a.manager.itemEnd(e)},l=new Nt(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(f){try{a.parse(f,r,function(h){t(h),a.manager.itemEnd(e)},o)}catch(h){o(h)}},s,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,s,i){let a;const r={},o={};if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Bs(new Uint8Array(e.slice(0,4)))===cr){try{r[O.KHR_BINARY_GLTF]=new Ua(e)}catch(h){i&&i(h);return}a=JSON.parse(r[O.KHR_BINARY_GLTF].content)}else a=JSON.parse(Bs(new Uint8Array(e)));else a=e;if(a.asset===void 0||a.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new tl(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const h=this.pluginCallbacks[f](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,r[h.name]=!0}if(a.extensionsUsed)for(let f=0;f<a.extensionsUsed.length;++f){const h=a.extensionsUsed[f],c=a.extensionsRequired||[];switch(h){case O.KHR_MATERIALS_UNLIT:r[h]=new Fa;break;case O.KHR_DRACO_MESH_COMPRESSION:r[h]=new za(a,this.dracoLoader);break;case O.KHR_TEXTURE_TRANSFORM:r[h]=new Ja;break;case O.KHR_MESH_QUANTIZATION:r[h]=new Wa;break;default:c.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(s,i)}parseAsync(e,t){const s=this;return new Promise(function(i,a){s.parse(e,t,i,a)})}}function Ca(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const O={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ta{constructor(e){this.parser=e,this.name=O.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let s=0,i=t.length;s<i;s++){const a=t[s];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,s="light:"+e;let i=t.cache.get(s);if(i)return i;const a=t.json,l=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let f;const h=new te(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Re);const c=l.range!==void 0?l.range:0;switch(l.type){case"directional":f=new Ur(h),f.target.position.set(0,0,-1),f.add(f.target);break;case"point":f=new Nr(h),f.distance=c;break;case"spot":f=new kr(h),f.distance=c,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,f.angle=l.spot.outerConeAngle,f.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,f.target.position.set(0,0,-1),f.add(f.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return f.position.set(0,0,0),f.decay=2,we(f,l),l.intensity!==void 0&&(f.intensity=l.intensity),f.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(f),t.cache.add(s,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,s=this.parser,a=s.json.nodes[e],o=(a.extensions&&a.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return s._getNodeRef(t.cache,o,l)})}}class Fa{constructor(){this.name=O.KHR_MATERIALS_UNLIT}getMaterialType(){return Oe}extendParams(e,t,s){const i=[];e.color=new te(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const r=a.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Re),e.opacity=r[3]}a.baseColorTexture!==void 0&&i.push(s.assignTexture(e,"map",a.baseColorTexture,Ze))}return Promise.all(i)}}class Sa{constructor(e){this.parser=e,this.name=O.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class Ma{constructor(e){this.parser=e,this.name=O.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:de}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&a.push(s.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&a.push(s.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(a.push(s.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(o,o)}return Promise.all(a)}}class wa{constructor(e){this.parser=e,this.name=O.KHR_MATERIALS_DISPERSION}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:de}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class Da{constructor(e){this.parser=e,this.name=O.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:de}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&a.push(s.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&a.push(s.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(a)}}class Ea{constructor(e){this.parser=e,this.name=O.KHR_MATERIALS_SHEEN}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:de}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new te(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const o=r.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Re)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&a.push(s.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Ze)),r.sheenRoughnessTexture!==void 0&&a.push(s.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(a)}}class Ra{constructor(e){this.parser=e,this.name=O.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:de}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&a.push(s.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(a)}}class Ia{constructor(e){this.parser=e,this.name=O.KHR_MATERIALS_VOLUME}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:de}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&a.push(s.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new te().setRGB(o[0],o[1],o[2],Re),Promise.all(a)}}class Pa{constructor(e){this.parser=e,this.name=O.KHR_MATERIALS_IOR}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:de}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class _a{constructor(e){this.parser=e,this.name=O.KHR_MATERIALS_SPECULAR}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:de}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&a.push(s.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new te().setRGB(o[0],o[1],o[2],Re),r.specularColorTexture!==void 0&&a.push(s.assignTexture(t,"specularColorMap",r.specularColorTexture,Ze)),Promise.all(a)}}class Ga{constructor(e){this.parser=e,this.name=O.EXT_MATERIALS_BUMP}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:de}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&a.push(s.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(a)}}class ja{constructor(e){this.parser=e,this.name=O.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:de}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&a.push(s.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(a)}}class La{constructor(e){this.parser=e,this.name=O.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,s=t.json,i=s.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const a=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(s.extensionsRequired&&s.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,r)}}class Ha{constructor(e){this.parser=e,this.name=O.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,s=this.parser,i=s.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=i.images[r.source];let l=s.textureLoader;if(o.uri){const f=s.options.manager.getHandler(o.uri);f!==null&&(l=f)}return this.detectSupport().then(function(f){if(f)return s.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return s.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Oa{constructor(e){this.parser=e,this.name=O.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,s=this.parser,i=s.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=i.images[r.source];let l=s.textureLoader;if(o.uri){const f=s.options.manager.getHandler(o.uri);f!==null&&(l=f)}return this.detectSupport().then(function(f){if(f)return s.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return s.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ka{constructor(e){this.name=O.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,s=t.bufferViews[e];if(s.extensions&&s.extensions[this.name]){const i=s.extensions[this.name],a=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){const l=i.byteOffset||0,f=i.byteLength||0,h=i.count,c=i.byteStride,d=new Uint8Array(o,l,f);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,c,d,i.mode,i.filter).then(function(m){return m.buffer}):r.ready.then(function(){const m=new ArrayBuffer(h*c);return r.decodeGltfBuffer(new Uint8Array(m),h,c,d,i.mode,i.filter),m})})}else return null}}class Na{constructor(e){this.name=O.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,s=t.nodes[e];if(!s.extensions||!s.extensions[this.name]||s.mesh===void 0)return null;const i=t.meshes[s.mesh];for(const f of i.primitives)if(f.mode!==pe.TRIANGLES&&f.mode!==pe.TRIANGLE_STRIP&&f.mode!==pe.TRIANGLE_FAN&&f.mode!==void 0)return null;const r=s.extensions[this.name].attributes,o=[],l={};for(const f in r)o.push(this.parser.getDependency("accessor",r[f]).then(h=>(l[f]=h,l[f])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(f=>{const h=f.pop(),c=h.isGroup?h.children:[h],d=f[0].count,m=[];for(const v of c){const x=new Y,g=new I,A=new Fs,p=new I(1,1,1),y=new zr(v.geometry,v.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&A.fromBufferAttribute(l.ROTATION,b),l.SCALE&&p.fromBufferAttribute(l.SCALE,b),y.setMatrixAt(b,x.compose(g,A,p));for(const b in l)if(b==="_COLOR_0"){const B=l[b];y.instanceColor=new Jr(B.array,B.itemSize,B.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&v.geometry.setAttribute(b,l[b]);Rn.prototype.copy.call(y,v),this.parser.assignFinalMaterial(y),m.push(y)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}}const cr="glTF",Ct=12,ri={JSON:1313821514,BIN:5130562};class Ua{constructor(e){this.name=O.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ct);if(this.header={magic:Bs(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==cr)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ct,i=new DataView(e,Ct);let a=0;for(;a<s;){const r=i.getUint32(a,!0);a+=4;const o=i.getUint32(a,!0);if(a+=4,o===ri.JSON){const l=new Uint8Array(e,Ct+a,r);this.content=Bs(l)}else if(o===ri.BIN){const l=Ct+a;this.body=e.slice(l,l+r)}a+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class za{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=O.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const s=this.json,i=this.dracoLoader,a=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},f={};for(const h in r){const c=mn[h]||h.toLowerCase();o[c]=r[h]}for(const h in e.attributes){const c=mn[h]||h.toLowerCase();if(r[h]!==void 0){const d=s.accessors[e.attributes[h]],m=gt[d.componentType];f[c]=m.name,l[c]=d.normalized===!0}}return t.getDependency("bufferView",a).then(function(h){return new Promise(function(c,d){i.decodeDracoFile(h,function(m){for(const v in m.attributes){const x=m.attributes[v],g=l[v];g!==void 0&&(x.normalized=g)}c(m)},o,f,Re,d)})})}}class Ja{constructor(){this.name=O.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Wa{constructor(){this.name=O.KHR_MESH_QUANTIZATION}}class ur extends ho{constructor(e,t,s,i){super(e,t,s,i)}copySampleValue_(e){const t=this.resultBuffer,s=this.sampleValues,i=this.valueSize,a=e*i*3+i;for(let r=0;r!==i;r++)t[r]=s[a+r];return t}interpolate_(e,t,s,i){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,f=o*3,h=i-t,c=(s-t)/h,d=c*c,m=d*c,v=e*f,x=v-f,g=-2*m+3*d,A=m-d,p=1-g,y=A-d+c;for(let b=0;b!==o;b++){const B=r[x+b+o],C=r[x+b+l]*h,F=r[v+b+o],w=r[v+b]*h;a[b]=p*B+y*C+g*F+A*w}return a}}const Ka=new Fs;class Qa extends ur{interpolate_(e,t,s,i){const a=super.interpolate_(e,t,s,i);return Ka.fromArray(a).normalize().toArray(a),a}}const pe={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},gt={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},oi={9728:q,9729:ee,9984:Yr,9985:Xr,9986:Vr,9987:Ki},ai={33071:Je,33648:qr,10497:Ue},Ns={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},mn={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...Wi>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Pe={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Va={CUBICSPLINE:void 0,LINEAR:Qi,STEP:uo},Us={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Xa(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new De({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:As})),n.DefaultMaterial}function Ve(n,e,t){for(const s in t.extensions)n[s]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[s]=t.extensions[s])}function we(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ya(n,e,t){let s=!1,i=!1,a=!1;for(let f=0,h=e.length;f<h;f++){const c=e[f];if(c.POSITION!==void 0&&(s=!0),c.NORMAL!==void 0&&(i=!0),c.COLOR_0!==void 0&&(a=!0),s&&i&&a)break}if(!s&&!i&&!a)return Promise.resolve(n);const r=[],o=[],l=[];for(let f=0,h=e.length;f<h;f++){const c=e[f];if(s){const d=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):n.attributes.position;r.push(d)}if(i){const d=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):n.attributes.normal;o.push(d)}if(a){const d=c.COLOR_0!==void 0?t.getDependency("accessor",c.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(f){const h=f[0],c=f[1],d=f[2];return s&&(n.morphAttributes.position=h),i&&(n.morphAttributes.normal=c),a&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function qa(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,s=e.weights.length;t<s;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let s=0,i=t.length;s<i;s++)n.morphTargetDictionary[t[s]]=s}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Za(n){let e;const t=n.extensions&&n.extensions[O.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+zs(t.attributes):e=n.indices+":"+zs(n.attributes)+":"+n.mode,n.targets!==void 0)for(let s=0,i=n.targets.length;s<i;s++)e+=":"+zs(n.targets[s]);return e}function zs(n){let e="";const t=Object.keys(n).sort();for(let s=0,i=t.length;s<i;s++)e+=t[s]+":"+n[t[s]]+";";return e}function gn(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $a(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const el=new Y;class tl{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ca,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let s=!1,i=!1,a=-1;typeof navigator<"u"&&typeof navigator.userAgent<"u"&&(s=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,a=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||s||i&&a<98?this.textureLoader=new Wr(this.options.manager):this.textureLoader=new Kr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nt(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const s=this,i=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([s.getDependencies("scene"),s.getDependencies("animation"),s.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:s,userData:{}};return Ve(a,o,i),we(o,i),Promise.all(s._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],s=this.json.meshes||[];for(let i=0,a=t.length;i<a;i++){const r=t[i].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let i=0,a=e.length;i<a;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(s[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,s){if(e.refs[t]<=1)return s;const i=s.clone(),a=(r,o)=>{const l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(const[f,h]of r.children.entries())a(h,o.children[f])};return a(s,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let s=0;s<t.length;s++){const i=e(t[s]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const s=[];for(let i=0;i<t.length;i++){const a=e(t[i]);a&&s.push(a)}return s}getDependency(e,t){const s=e+":"+t;let i=this.cache.get(s);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":i=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(s,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const s=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(a,r){return s.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],s=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[O.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(a,r){s.load(jt.resolveURL(t.uri,i.path),a,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(s){const i=t.byteLength||0,a=t.byteOffset||0;return s.slice(a,a+i)})}loadAccessor(e){const t=this,s=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=Ns[i.type],o=gt[i.componentType],l=i.normalized===!0,f=new o(i.count*r);return Promise.resolve(new X(f,r,l))}const a=[];return i.bufferView!==void 0?a.push(this.getDependency("bufferView",i.bufferView)):a.push(null),i.sparse!==void 0&&(a.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(a).then(function(r){const o=r[0],l=Ns[i.type],f=gt[i.componentType],h=f.BYTES_PER_ELEMENT,c=h*l,d=i.byteOffset||0,m=i.bufferView!==void 0?s.bufferViews[i.bufferView].byteStride:void 0,v=i.normalized===!0;let x,g;if(m&&m!==c){const A=Math.floor(d/m),p="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+A+":"+i.count;let y=t.cache.get(p);y||(x=new f(o,A*m,i.count*m/h),y=new Qr(x,m/h),t.cache.add(p,y)),g=new fo(y,l,d%m/h,v)}else o===null?x=new f(i.count*l):x=new f(o,d,i.count*l),g=new X(x,l,v);if(i.sparse!==void 0){const A=Ns.SCALAR,p=gt[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,B=new p(r[1],y,i.sparse.count*A),C=new f(r[2],b,i.sparse.count*l);o!==null&&(g=new X(g.array.slice(),g.itemSize,g.normalized));for(let F=0,w=B.length;F<w;F++){const T=B[F];if(g.setX(T,C[F*l]),l>=2&&g.setY(T,C[F*l+1]),l>=3&&g.setZ(T,C[F*l+2]),l>=4&&g.setW(T,C[F*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,s=this.options,a=t.textures[e].source,r=t.images[a];let o=this.textureLoader;if(r.uri){const l=s.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,a,o)}loadTextureImage(e,t,s){const i=this,a=this.json,r=a.textures[e],o=a.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const f=this.loadImageSource(t,s).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(a.samplers||{})[r.sampler]||{};return h.magFilter=oi[d.magFilter]||ee,h.minFilter=oi[d.minFilter]||Ki,h.wrapS=ai[d.wrapS]||Ue,h.wrapT=ai[d.wrapT]||Ue,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=f,f}loadImageSource(e,t){const s=this,i=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(c=>c.clone());const r=i.images[e],o=self.URL||self.webkitURL;let l=r.uri||"",f=!1;if(r.bufferView!==void 0)l=s.getDependency("bufferView",r.bufferView).then(function(c){f=!0;const d=new Blob([c],{type:r.mimeType});return l=o.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(c){return new Promise(function(d,m){let v=d;t.isImageBitmapLoader===!0&&(v=function(x){const g=new Vn(x);g.needsUpdate=!0,d(g)}),t.load(jt.resolveURL(c,a.path),v,void 0,m)})}).then(function(c){return f===!0&&o.revokeObjectURL(l),we(c,r),c.userData.mimeType=r.mimeType||$a(r.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),c});return this.sourceCache[e]=h,h}assignTexture(e,t,s,i){const a=this;return this.getDependency("texture",s.index).then(function(r){if(!r)return null;if(s.texCoord!==void 0&&s.texCoord>0&&(r=r.clone(),r.channel=s.texCoord),a.extensions[O.KHR_TEXTURE_TRANSFORM]){const o=s.extensions!==void 0?s.extensions[O.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=a.associations.get(r);r=a.extensions[O.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),a.associations.set(r,l)}}return i!==void 0&&(typeof i=="number"&&(i=i===ii?Ze:Re),"colorSpace"in r?r.colorSpace=i:r.encoding=i===Ze?ii:Ba),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let s=e.material;const i=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+s.uuid;let l=this.cache.get(o);l||(l=new Zr,_s.prototype.copy.call(l,s),l.color.copy(s.color),l.map=s.map,l.sizeAttenuation=!1,this.cache.add(o,l)),s=l}else if(e.isLine){const o="LineBasicMaterial:"+s.uuid;let l=this.cache.get(o);l||(l=new $r,_s.prototype.copy.call(l,s),l.color.copy(s.color),l.map=s.map,this.cache.add(o,l)),s=l}if(i||a||r){let o="ClonedMaterial:"+s.uuid+":";i&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=s.clone(),a&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(s))),s=l}e.material=s}getMaterialType(){return De}loadMaterial(e){const t=this,s=this.json,i=this.extensions,a=s.materials[e];let r;const o={},l=a.extensions||{},f=[];if(l[O.KHR_MATERIALS_UNLIT]){const c=i[O.KHR_MATERIALS_UNLIT];r=c.getMaterialType(),f.push(c.extendParams(o,a,t))}else{const c=a.pbrMetallicRoughness||{};if(o.color=new te(1,1,1),o.opacity=1,Array.isArray(c.baseColorFactor)){const d=c.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Re),o.opacity=d[3]}c.baseColorTexture!==void 0&&f.push(t.assignTexture(o,"map",c.baseColorTexture,Ze)),o.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,o.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(f.push(t.assignTexture(o,"metalnessMap",c.metallicRoughnessTexture)),f.push(t.assignTexture(o,"roughnessMap",c.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),f.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=Ss);const h=a.alphaMode||Us.OPAQUE;if(h===Us.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Us.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&r!==Oe&&(f.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new Be(1,1),a.normalTexture.scale!==void 0)){const c=a.normalTexture.scale;o.normalScale.set(c,c)}if(a.occlusionTexture!==void 0&&r!==Oe&&(f.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&r!==Oe){const c=a.emissiveFactor;o.emissive=new te().setRGB(c[0],c[1],c[2],Re)}return a.emissiveTexture!==void 0&&r!==Oe&&f.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,Ze)),Promise.all(f).then(function(){const c=new r(o);return a.name&&(c.name=a.name),we(c,a),t.associations.set(c,{materials:e}),a.extensions&&Ve(i,c,a),c})}createUniqueName(e){const t=eo.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,s=this.extensions,i=this.primitiveCache;function a(o){return s[O.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return li(l,o,t)})}const r=[];for(let o=0,l=e.length;o<l;o++){const f=e[o],h=Za(f),c=i[h];if(c)r.push(c.promise);else{let d;f.extensions&&f.extensions[O.KHR_DRACO_MESH_COMPRESSION]?d=a(f):d=li(new Fe,f,t),i[h]={primitive:f,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,s=this.json,i=this.extensions,a=s.meshes[e],r=a.primitives,o=[];for(let l=0,f=r.length;l<f;l++){const h=r[l].material===void 0?Xa(this.cache):this.getDependency("material",r[l].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(l){const f=l.slice(0,l.length-1),h=l[l.length-1],c=[];for(let m=0,v=h.length;m<v;m++){const x=h[m],g=r[m];let A;const p=f[m];if(g.mode===pe.TRIANGLES||g.mode===pe.TRIANGLE_STRIP||g.mode===pe.TRIANGLE_FAN||g.mode===void 0)A=a.isSkinnedMesh===!0?new to(x,p):new et(x,p),A.isSkinnedMesh===!0&&A.normalizeSkinWeights(),g.mode===pe.TRIANGLE_STRIP?A.geometry=Qn(A.geometry,po):g.mode===pe.TRIANGLE_FAN&&(A.geometry=Qn(A.geometry,mo));else if(g.mode===pe.LINES)A=new so(x,p);else if(g.mode===pe.LINE_STRIP)A=new no(x,p);else if(g.mode===pe.LINE_LOOP)A=new io(x,p);else if(g.mode===pe.POINTS)A=new ro(x,p);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(A.geometry.morphAttributes).length>0&&qa(A,a),A.name=t.createUniqueName(a.name||"mesh_"+e),we(A,a),g.extensions&&Ve(i,A,g),t.assignFinalMaterial(A),c.push(A)}for(let m=0,v=c.length;m<v;m++)t.associations.set(c[m],{meshes:e,primitives:m});if(c.length===1)return a.extensions&&Ve(i,c[0],a),c[0];const d=new Gs;a.extensions&&Ve(i,d,a),t.associations.set(d,{meshes:e});for(let m=0,v=c.length;m<v;m++)d.add(c[m]);return d})}loadCamera(e){let t;const s=this.json.cameras[e],i=s[s.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return s.type==="perspective"?t=new In(Lt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):s.type==="orthographic"&&(t=new oo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),s.name&&(t.name=this.createUniqueName(s.name)),we(t,s),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],s=[];for(let i=0,a=t.joints.length;i<a;i++)s.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?s.push(this.getDependency("accessor",t.inverseBindMatrices)):s.push(null),Promise.all(s).then(function(i){const a=i.pop(),r=i,o=[],l=[];for(let f=0,h=r.length;f<h;f++){const c=r[f];if(c){o.push(c);const d=new Y;a!==null&&d.fromArray(a.array,f*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[f])}return new ao(o,l)})}loadAnimation(e){const t=this.json,s=this,i=t.animations[e],a=i.name?i.name:"animation_"+e,r=[],o=[],l=[],f=[],h=[];for(let c=0,d=i.channels.length;c<d;c++){const m=i.channels[c],v=i.samplers[m.sampler],x=m.target,g=x.node,A=i.parameters!==void 0?i.parameters[v.input]:v.input,p=i.parameters!==void 0?i.parameters[v.output]:v.output;x.node!==void 0&&(r.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",A)),l.push(this.getDependency("accessor",p)),f.push(v),h.push(x))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l),Promise.all(f),Promise.all(h)]).then(function(c){const d=c[0],m=c[1],v=c[2],x=c[3],g=c[4],A=[];for(let p=0,y=d.length;p<y;p++){const b=d[p],B=m[p],C=v[p],F=x[p],w=g[p];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const T=s._createAnimationTracks(b,B,C,F,w);if(T)for(let S=0;S<T.length;S++)A.push(T[S])}return new lo(a,void 0,A)})}createNodeMesh(e){const t=this.json,s=this,i=t.nodes[e];return i.mesh===void 0?null:s.getDependency("mesh",i.mesh).then(function(a){const r=s._getNodeRef(s.meshCache,i.mesh,a);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,f=i.weights.length;l<f;l++)o.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,s=this,i=t.nodes[e],a=s._loadNodeShallow(e),r=[],o=i.children||[];for(let f=0,h=o.length;f<h;f++)r.push(s.getDependency("node",o[f]));const l=i.skin===void 0?Promise.resolve(null):s.getDependency("skin",i.skin);return Promise.all([a,Promise.all(r),l]).then(function(f){const h=f[0],c=f[1],d=f[2];d!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(d,el)});for(let m=0,v=c.length;m<v;m++)h.add(c[m]);return h})}_loadNodeShallow(e){const t=this.json,s=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],r=a.name?i.createUniqueName(a.name):"",o=[],l=i._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});return l&&o.push(l),a.camera!==void 0&&o.push(i.getDependency("camera",a.camera).then(function(f){return i._getNodeRef(i.cameraCache,a.camera,f)})),i._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){o.push(f)}),this.nodeCache[e]=Promise.all(o).then(function(f){let h;if(a.isBone===!0?h=new co:f.length>1?h=new Gs:f.length===1?h=f[0]:h=new Rn,h!==f[0])for(let c=0,d=f.length;c<d;c++)h.add(f[c]);if(a.name&&(h.userData.name=a.name,h.name=r),we(h,a),a.extensions&&Ve(s,h,a),a.matrix!==void 0){const c=new Y;c.fromArray(a.matrix),h.applyMatrix4(c)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,s=this.json.scenes[e],i=this,a=new Gs;s.name&&(a.name=i.createUniqueName(s.name)),we(a,s),s.extensions&&Ve(t,a,s);const r=s.nodes||[],o=[];for(let l=0,f=r.length;l<f;l++)o.push(i.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let h=0,c=l.length;h<c;h++)a.add(l[h]);const f=h=>{const c=new Map;for(const[d,m]of i.associations)(d instanceof _s||d instanceof Vn)&&c.set(d,m);return h.traverse(d=>{const m=i.associations.get(d);m!=null&&c.set(d,m)}),c};return i.associations=f(a),a})}_createAnimationTracks(e,t,s,i,a){const r=[],o=e.name?e.name:e.uuid,l=[];Pe[a.path]===Pe.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let f;switch(Pe[a.path]){case Pe.weights:f=Yn;break;case Pe.rotation:f=qn;break;case Pe.position:case Pe.scale:f=Xn;break;default:switch(s.itemSize){case 1:f=Yn;break;case 2:case 3:default:f=Xn;break}break}const h=i.interpolation!==void 0?Va[i.interpolation]:Qi,c=this._getArrayFromAccessor(s);for(let d=0,m=l.length;d<m;d++){const v=new f(l[d]+"."+Pe[a.path],t.array,c,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),r.push(v)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const s=gn(t.constructor),i=new Float32Array(t.length);for(let a=0,r=t.length;a<r;a++)i[a]=t[a]*s;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(s){const i=this instanceof qn?Qa:ur;return new i(this.times,this.values,this.getValueSize()/3,s)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function sl(n,e,t){const s=e.attributes,i=new re;if(s.POSITION!==void 0){const o=t.json.accessors[s.POSITION],l=o.min,f=o.max;if(l!==void 0&&f!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(f[0],f[1],f[2])),o.normalized){const h=gn(gt[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const o=new I,l=new I;for(let f=0,h=a.length;f<h;f++){const c=a[f];if(c.POSITION!==void 0){const d=t.json.accessors[c.POSITION],m=d.min,v=d.max;if(m!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(v[2]))),d.normalized){const x=gn(gt[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}n.boundingBox=i;const r=new Vi;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,n.boundingSphere=r}function li(n,e,t){const s=e.attributes,i=[];function a(r,o){return t.getDependency("accessor",r).then(function(l){n.setAttribute(o,l)})}for(const r in s){const o=mn[r]||r.toLowerCase();o in n.attributes||i.push(a(s[r],o))}if(e.indices!==void 0&&!n.index){const r=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});i.push(r)}return we(n,e),sl(n,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ya(n,e.targets,t):n})}const Js=new WeakMap;class nl extends En{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,s,i){const a=new Nt(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,r=>{const o={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(r,o).then(t).catch(i)},s,i)}decodeDracoFile(e,t,s,i){const a={attributeIDs:s||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!s};this.decodeGeometry(e,a).then(t)}decodeGeometry(e,t){for(const l in t.attributeTypes){const f=t.attributeTypes[l];f.BYTES_PER_ELEMENT!==void 0&&(t.attributeTypes[l]=f.name)}const s=JSON.stringify(t);if(Js.has(e)){const l=Js.get(e);if(l.key===s)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const a=this.workerNextTaskID++,r=e.byteLength,o=this._getWorker(a,r).then(l=>(i=l,new Promise((f,h)=>{i._callbacks[a]={resolve:f,reject:h},i.postMessage({type:"decode",id:a,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&a&&this._releaseTask(i,a)}),Js.set(e,{key:s,promise:o}),o}_createGeometry(e){const t=new Fe;e.index&&t.setIndex(new X(e.index.array,1));for(let s=0;s<e.attributes.length;s++){const i=e.attributes[s],a=i.name,r=i.array,o=i.itemSize;t.setAttribute(a,new X(r,o))}return t}_loadLibrary(e,t){const s=new Nt(this.manager);return s.setPath(this.decoderPath),s.setResponseType(t),s.setWithCredentials(this.withCredentials),new Promise((i,a)=>{s.load(e,i,void 0,a)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(s=>{const i=s[0];e||(this.decoderConfig.wasmBinary=s[1]);const a=il.toString(),r=["/* draco decoder */",i,"","/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(a){const r=a.data;switch(r.type){case"decode":i._callbacks[r.id].resolve(r);break;case"error":i._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,a){return i._taskLoad>a._taskLoad?-1:1});const s=this.workerPool[this.workerPool.length-1];return s._taskCosts[e]=t,s._taskLoad+=t,s})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function il(){let n,e;onmessage=function(r){const o=r.data;switch(o.type){case"init":n=o.decoderConfig,e=new Promise(function(h){n.onModuleLoaded=function(c){h({draco:c})},DracoDecoderModule(n)});break;case"decode":const l=o.buffer,f=o.taskConfig;e.then(h=>{const c=h.draco,d=new c.Decoder,m=new c.DecoderBuffer;m.Init(new Int8Array(l),l.byteLength);try{const v=t(c,d,m,f),x=v.attributes.map(g=>g.array.buffer);v.index&&x.push(v.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:v},x)}catch(v){console.error(v),self.postMessage({type:"error",id:o.id,error:v.message})}finally{c.destroy(m),c.destroy(d)}});break}};function t(r,o,l,f){const h=f.attributeIDs,c=f.attributeTypes;let d,m;const v=o.GetEncodedGeometryType(l);if(v===r.TRIANGULAR_MESH)d=new r.Mesh,m=o.DecodeBufferToMesh(l,d);else if(v===r.POINT_CLOUD)d=new r.PointCloud,m=o.DecodeBufferToPointCloud(l,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!m.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+m.error_msg());const x={index:null,attributes:[]};for(const g in h){const A=self[c[g]];let p,y;if(f.useUniqueIDs)y=h[g],p=o.GetAttributeByUniqueId(d,y);else{if(y=o.GetAttributeId(d,r[h[g]]),y===-1)continue;p=o.GetAttribute(d,y)}x.attributes.push(i(r,o,d,g,A,p))}return v===r.TRIANGULAR_MESH&&(x.index=s(r,o,d)),r.destroy(d),x}function s(r,o,l){const h=l.num_faces()*3,c=h*4,d=r._malloc(c);o.GetTrianglesUInt32Array(l,c,d);const m=new Uint32Array(r.HEAPF32.buffer,d,h).slice();return r._free(d),{array:m,itemSize:1}}function i(r,o,l,f,h,c){const d=c.num_components(),v=l.num_points()*d,x=v*h.BYTES_PER_ELEMENT,g=a(r,h),A=r._malloc(x);o.GetAttributeDataArrayForAllPoints(l,c,g,x,A);const p=new h(r.HEAPF32.buffer,A,v).slice();return r._free(A),{name:f,array:p,itemSize:d}}function a(r,o){switch(o){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}let Kt;const Ws=()=>{if(Kt)return Kt;const n="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",e="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",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),s=new Uint8Array([32,0,65,253,3,1,2,34,4,106,6,5,11,8,7,20,13,33,12,16,128,9,116,64,19,113,127,15,10,21,22,14,255,66,24,54,136,107,18,23,192,26,114,118,132,17,77,101,130,144,27,87,131,44,45,74,156,154,70,167]);if(typeof WebAssembly!="object")return{supported:!1};let i=n;WebAssembly.validate(t)&&(i=e);let a;const r=WebAssembly.instantiate(o(i),{}).then(c=>{a=c.instance,a.exports.__wasm_call_ctors()});function o(c){const d=new Uint8Array(c.length);for(let v=0;v<c.length;++v){const x=c.charCodeAt(v);d[v]=x>96?x-71:x>64?x-65:x>47?x+4:x>46?63:62}let m=0;for(let v=0;v<c.length;++v)d[m++]=d[v]<60?s[d[v]]:(d[v]-60)*64+d[++v];return d.buffer.slice(0,m)}function l(c,d,m,v,x,g){const A=a.exports.sbrk,p=m+3&-4,y=A(p*v),b=A(x.length),B=new Uint8Array(a.exports.memory.buffer);B.set(x,b);const C=c(y,m,v,b,x.length);if(C===0&&g&&g(y,p,v),d.set(B.subarray(y,y+m*v)),A(y-A(0)),C!==0)throw new Error(`Malformed buffer data: ${C}`)}const f={0:"",1:"meshopt_decodeFilterOct",2:"meshopt_decodeFilterQuat",3:"meshopt_decodeFilterExp",NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={0:"meshopt_decodeVertexBuffer",1:"meshopt_decodeIndexBuffer",2:"meshopt_decodeIndexSequence",ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"};return Kt={ready:r,supported:!0,decodeVertexBuffer(c,d,m,v,x){l(a.exports.meshopt_decodeVertexBuffer,c,d,m,v,a.exports[f[x]])},decodeIndexBuffer(c,d,m,v){l(a.exports.meshopt_decodeIndexBuffer,c,d,m,v)},decodeIndexSequence(c,d,m,v){l(a.exports.meshopt_decodeIndexSequence,c,d,m,v)},decodeGltfBuffer(c,d,m,v,x,g){l(a.exports[h[x]],c,d,m,v,a.exports[f[g]])}},Kt};let Qt=null,dr="https://www.gstatic.com/draco/versioned/decoders/1.5.5/";function fr(n=!0,e=!0,t){return s=>{t&&t(s),n&&(Qt||(Qt=new nl),Qt.setDecoderPath(typeof n=="string"?n:dr),s.setDRACOLoader(Qt)),e&&s.setMeshoptDecoder(typeof Ws=="function"?Ws():Ws)}}const bt=(n,e,t,s)=>Ut(Hn,n,fr(e,t,s));bt.preload=(n,e,t,s)=>Ut.preload(Hn,n,fr(e,t,s));bt.clear=n=>Ut.clear(Hn,n);bt.setDecoderPath=n=>{dr=n};const hr=0,rl=1,pr=2,ci=2,Ks=1.25,ui=1,ze=6*4+4+4,Es=65535,ol=Math.pow(2,-24),Qs=Symbol("SKIP_GENERATION");function mr(n){return n.index?n.index.count:n.attributes.position.count}function Bt(n){return mr(n)/3}function gr(n,e=ArrayBuffer){return n>65535?new Uint32Array(new e(4*n)):new Uint16Array(new e(2*n))}function al(n,e){if(!n.index){const t=n.attributes.position.count,s=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=gr(t,s);n.setIndex(new X(i,1));for(let a=0;a<t;a++)i[a]=a}}function xr(n,e){const t=Bt(n),s=e||n.drawRange,i=s.start/3,a=(s.start+s.count)/3,r=Math.max(0,i),o=Math.min(t,a)-r;return[{offset:Math.floor(r),count:Math.floor(o)}]}function Ar(n,e){if(!n.groups||!n.groups.length)return xr(n,e);const t=[],s=new Set,i=e||n.drawRange,a=i.start/3,r=(i.start+i.count)/3;for(const l of n.groups){const f=l.start/3,h=(l.start+l.count)/3;s.add(Math.max(a,f)),s.add(Math.min(r,h))}const o=Array.from(s.values()).sort((l,f)=>l-f);for(let l=0;l<o.length-1;l++){const f=o[l],h=o[l+1];t.push({offset:Math.floor(f),count:Math.floor(h-f)})}return t}function ll(n,e){const t=Bt(n),s=Ar(n,e).sort((r,o)=>r.offset-o.offset),i=s[s.length-1];i.count=Math.min(t-i.offset,i.count);let a=0;return s.forEach(({count:r})=>a+=r),t!==a}function Vs(n,e,t,s,i){let a=1/0,r=1/0,o=1/0,l=-1/0,f=-1/0,h=-1/0,c=1/0,d=1/0,m=1/0,v=-1/0,x=-1/0,g=-1/0;for(let A=e*6,p=(e+t)*6;A<p;A+=6){const y=n[A+0],b=n[A+1],B=y-b,C=y+b;B<a&&(a=B),C>l&&(l=C),y<c&&(c=y),y>v&&(v=y);const F=n[A+2],w=n[A+3],T=F-w,S=F+w;T<r&&(r=T),S>f&&(f=S),F<d&&(d=F),F>x&&(x=F);const E=n[A+4],M=n[A+5],R=E-M,P=E+M;R<o&&(o=R),P>h&&(h=P),E<m&&(m=E),E>g&&(g=E)}s[0]=a,s[1]=r,s[2]=o,s[3]=l,s[4]=f,s[5]=h,i[0]=c,i[1]=d,i[2]=m,i[3]=v,i[4]=x,i[5]=g}function cl(n,e=null,t=null,s=null){const i=n.attributes.position,a=n.index?n.index.array:null,r=Bt(n),o=i.normalized;let l;e===null?(l=new Float32Array(r*6*4),t=0,s=r):(l=e,t=t||0,s=s||r);const f=i.array,h=i.offset||0;let c=3;i.isInterleavedBufferAttribute&&(c=i.data.stride);const d=["getX","getY","getZ"];for(let m=t;m<t+s;m++){const v=m*3,x=m*6;let g=v+0,A=v+1,p=v+2;a&&(g=a[g],A=a[A],p=a[p]),o||(g=g*c+h,A=A*c+h,p=p*c+h);for(let y=0;y<3;y++){let b,B,C;o?(b=i[d[y]](g),B=i[d[y]](A),C=i[d[y]](p)):(b=f[g+y],B=f[A+y],C=f[p+y]);let F=b;B<F&&(F=B),C<F&&(F=C);let w=b;B>w&&(w=B),C>w&&(w=C);const T=(w-F)/2,S=y*2;l[x+S+0]=F+T,l[x+S+1]=T+(Math.abs(F)+T)*ol}}return l}function K(n,e,t){return t.min.x=e[n],t.min.y=e[n+1],t.min.z=e[n+2],t.max.x=e[n+3],t.max.y=e[n+4],t.max.z=e[n+5],t}function di(n){let e=-1,t=-1/0;for(let s=0;s<3;s++){const i=n[s+3]-n[s];i>t&&(t=i,e=s)}return e}function fi(n,e){e.set(n)}function hi(n,e,t){let s,i;for(let a=0;a<3;a++){const r=a+3;s=n[a],i=e[a],t[a]=s<i?s:i,s=n[r],i=e[r],t[r]=s>i?s:i}}function Vt(n,e,t){for(let s=0;s<3;s++){const i=e[n+2*s],a=e[n+2*s+1],r=i-a,o=i+a;r<t[s]&&(t[s]=r),o>t[s+3]&&(t[s+3]=o)}}function Tt(n){const e=n[3]-n[0],t=n[4]-n[1],s=n[5]-n[2];return 2*(e*t+t*s+s*e)}const Me=32,ul=(n,e)=>n.candidate-e.candidate,_e=new Array(Me).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Xt=new Float32Array(6);function dl(n,e,t,s,i,a){let r=-1,o=0;if(a===hr)r=di(e),r!==-1&&(o=(e[r]+e[r+3])/2);else if(a===rl)r=di(n),r!==-1&&(o=fl(t,s,i,r));else if(a===pr){const l=Tt(n);let f=Ks*i;const h=s*6,c=(s+i)*6;for(let d=0;d<3;d++){const m=e[d],g=(e[d+3]-m)/Me;if(i<Me/4){const A=[..._e];A.length=i;let p=0;for(let b=h;b<c;b+=6,p++){const B=A[p];B.candidate=t[b+2*d],B.count=0;const{bounds:C,leftCacheBounds:F,rightCacheBounds:w}=B;for(let T=0;T<3;T++)w[T]=1/0,w[T+3]=-1/0,F[T]=1/0,F[T+3]=-1/0,C[T]=1/0,C[T+3]=-1/0;Vt(b,t,C)}A.sort(ul);let y=i;for(let b=0;b<y;b++){const B=A[b];for(;b+1<y&&A[b+1].candidate===B.candidate;)A.splice(b+1,1),y--}for(let b=h;b<c;b+=6){const B=t[b+2*d];for(let C=0;C<y;C++){const F=A[C];B>=F.candidate?Vt(b,t,F.rightCacheBounds):(Vt(b,t,F.leftCacheBounds),F.count++)}}for(let b=0;b<y;b++){const B=A[b],C=B.count,F=i-B.count,w=B.leftCacheBounds,T=B.rightCacheBounds;let S=0;C!==0&&(S=Tt(w)/l);let E=0;F!==0&&(E=Tt(T)/l);const M=ui+Ks*(S*C+E*F);M<f&&(r=d,f=M,o=B.candidate)}}else{for(let y=0;y<Me;y++){const b=_e[y];b.count=0,b.candidate=m+g+y*g;const B=b.bounds;for(let C=0;C<3;C++)B[C]=1/0,B[C+3]=-1/0}for(let y=h;y<c;y+=6){let C=~~((t[y+2*d]-m)/g);C>=Me&&(C=Me-1);const F=_e[C];F.count++,Vt(y,t,F.bounds)}const A=_e[Me-1];fi(A.bounds,A.rightCacheBounds);for(let y=Me-2;y>=0;y--){const b=_e[y],B=_e[y+1];hi(b.bounds,B.rightCacheBounds,b.rightCacheBounds)}let p=0;for(let y=0;y<Me-1;y++){const b=_e[y],B=b.count,C=b.bounds,w=_e[y+1].rightCacheBounds;B!==0&&(p===0?fi(C,Xt):hi(C,Xt,Xt)),p+=B;let T=0,S=0;p!==0&&(T=Tt(Xt)/l);const E=i-p;E!==0&&(S=Tt(w)/l);const M=ui+Ks*(T*p+S*E);M<f&&(r=d,f=M,o=b.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${a} used.`);return{axis:r,pos:o}}function fl(n,e,t,s){let i=0;for(let a=e,r=e+t;a<r;a++)i+=n[a*6+s*2];return i/t}class Xs{constructor(){this.boundingData=new Float32Array(6)}}function hl(n,e,t,s,i,a){let r=s,o=s+i-1;const l=a.pos,f=a.axis*2;for(;;){for(;r<=o&&t[r*6+f]<l;)r++;for(;r<=o&&t[o*6+f]>=l;)o--;if(r<o){for(let h=0;h<3;h++){let c=e[r*3+h];e[r*3+h]=e[o*3+h],e[o*3+h]=c}for(let h=0;h<6;h++){let c=t[r*6+h];t[r*6+h]=t[o*6+h],t[o*6+h]=c}r++,o--}else return r}}function pl(n,e,t,s,i,a){let r=s,o=s+i-1;const l=a.pos,f=a.axis*2;for(;;){for(;r<=o&&t[r*6+f]<l;)r++;for(;r<=o&&t[o*6+f]>=l;)o--;if(r<o){let h=n[r];n[r]=n[o],n[o]=h;for(let c=0;c<6;c++){let d=t[r*6+c];t[r*6+c]=t[o*6+c],t[o*6+c]=d}r++,o--}else return r}}function ne(n,e){return e[n+15]===65535}function le(n,e){return e[n+6]}function ce(n,e){return e[n+14]}function Ae(n){return n+8}function ue(n,e){return e[n+6]}function On(n,e){return e[n+7]}let vr,_t,gs,yr;const ml=Math.pow(2,32);function xn(n){return"count"in n?1:1+xn(n.left)+xn(n.right)}function gl(n,e,t){return vr=new Float32Array(t),_t=new Uint32Array(t),gs=new Uint16Array(t),yr=new Uint8Array(t),An(n,e)}function An(n,e){const t=n/4,s=n/2,i="count"in e,a=e.boundingData;for(let r=0;r<6;r++)vr[t+r]=a[r];if(i)if(e.buffer){const r=e.buffer;yr.set(new Uint8Array(r),n);for(let o=n,l=n+r.byteLength;o<l;o+=ze){const f=o/2;ne(f,gs)||(_t[o/4+6]+=t)}return n+r.byteLength}else{const r=e.offset,o=e.count;return _t[t+6]=r,gs[s+14]=o,gs[s+15]=Es,n+ze}else{const r=e.left,o=e.right,l=e.splitAxis;let f;if(f=An(n+ze,r),f/4>ml)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return _t[t+6]=f/4,f=An(f,o),_t[t+7]=l,f}}function xl(n,e){const t=(n.index?n.index.count:n.attributes.position.count)/3,s=t>2**16,i=s?4:2,a=e?new SharedArrayBuffer(t*i):new ArrayBuffer(t*i),r=s?new Uint32Array(a):new Uint16Array(a);for(let o=0,l=r.length;o<l;o++)r[o]=o;return r}function Al(n,e,t,s,i){const{maxDepth:a,verbose:r,maxLeafTris:o,strategy:l,onProgress:f,indirect:h}=i,c=n._indirectBuffer,d=n.geometry,m=d.index?d.index.array:null,v=h?pl:hl,x=Bt(d),g=new Float32Array(6);let A=!1;const p=new Xs;return Vs(e,t,s,p.boundingData,g),b(p,t,s,g),p;function y(B){f&&f(B/x)}function b(B,C,F,w=null,T=0){if(!A&&T>=a&&(A=!0,r&&(console.warn(`MeshBVH: Max depth of ${a} reached when generating BVH. Consider increasing maxDepth.`),console.warn(d))),F<=o||T>=a)return y(C+F),B.offset=C,B.count=F,B;const S=dl(B.boundingData,w,e,C,F,l);if(S.axis===-1)return y(C+F),B.offset=C,B.count=F,B;const E=v(c,m,e,C,F,S);if(E===C||E===C+F)y(C+F),B.offset=C,B.count=F;else{B.splitAxis=S.axis;const M=new Xs,R=C,P=E-C;B.left=M,Vs(e,R,P,M.boundingData,g),b(M,R,P,g,T+1);const _=new Xs,G=E,j=F-P;B.right=_,Vs(e,G,j,_.boundingData,g),b(_,G,j,g,T+1)}return B}}function vl(n,e){const t=n.geometry;e.indirect&&(n._indirectBuffer=xl(t,e.useSharedArrayBuffer),ll(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),n._indirectBuffer||al(t,e);const s=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=cl(t),a=e.indirect?xr(t,e.range):Ar(t,e.range);n._roots=a.map(r=>{const o=Al(n,i,r.offset,r.count,e),l=xn(o),f=new s(ze*l);return gl(0,o,f),f})}class Ie{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let s=1/0,i=-1/0;for(let a=0,r=e.length;a<r;a++){const l=e[a][t];s=l<s?l:s,i=l>i?l:i}this.min=s,this.max=i}setFromPoints(e,t){let s=1/0,i=-1/0;for(let a=0,r=t.length;a<r;a++){const o=t[a],l=e.dot(o);s=l<s?l:s,i=l>i?l:i}this.min=s,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}Ie.prototype.setFromBox=function(){const n=new I;return function(t,s){const i=s.min,a=s.max;let r=1/0,o=-1/0;for(let l=0;l<=1;l++)for(let f=0;f<=1;f++)for(let h=0;h<=1;h++){n.x=i.x*l+a.x*(1-l),n.y=i.y*f+a.y*(1-f),n.z=i.z*h+a.z*(1-h);const c=t.dot(n);r=Math.min(c,r),o=Math.max(c,o)}this.min=r,this.max=o}}();const yl=function(){const n=new I,e=new I,t=new I;return function(i,a,r){const o=i.start,l=n,f=a.start,h=e;t.subVectors(o,f),n.subVectors(i.end,i.start),e.subVectors(a.end,a.start);const c=t.dot(h),d=h.dot(l),m=h.dot(h),v=t.dot(l),g=l.dot(l)*m-d*d;let A,p;g!==0?A=(c*d-v*m)/g:A=0,p=(c+A*d)/m,r.x=A,r.y=p}}(),kn=function(){const n=new Be,e=new I,t=new I;return function(i,a,r,o){yl(i,a,n);let l=n.x,f=n.y;if(l>=0&&l<=1&&f>=0&&f<=1){i.at(l,r),a.at(f,o);return}else if(l>=0&&l<=1){f<0?a.at(0,o):a.at(1,o),i.closestPointToPoint(o,!0,r);return}else if(f>=0&&f<=1){l<0?i.at(0,r):i.at(1,r),a.closestPointToPoint(r,!0,o);return}else{let h;l<0?h=i.start:h=i.end;let c;f<0?c=a.start:c=a.end;const d=e,m=t;if(i.closestPointToPoint(c,!0,e),a.closestPointToPoint(h,!0,t),d.distanceToSquared(c)<=m.distanceToSquared(h)){r.copy(d),o.copy(c);return}else{r.copy(h),o.copy(m);return}}}}(),bl=function(){const n=new I,e=new I,t=new Xi,s=new Ee;return function(a,r){const{radius:o,center:l}=a,{a:f,b:h,c}=r;if(s.start=f,s.end=h,s.closestPointToPoint(l,!0,n).distanceTo(l)<=o||(s.start=f,s.end=c,s.closestPointToPoint(l,!0,n).distanceTo(l)<=o)||(s.start=h,s.end=c,s.closestPointToPoint(l,!0,n).distanceTo(l)<=o))return!0;const x=r.getPlane(t);if(Math.abs(x.distanceToPoint(l))<=o){const A=x.projectPoint(l,e);if(r.containsPoint(A))return!0}return!1}}(),Bl=1e-15;function Ys(n){return Math.abs(n)<Bl}class Ce extends It{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new I),this.satBounds=new Array(4).fill().map(()=>new Ie),this.points=[this.a,this.b,this.c],this.sphere=new Vi,this.plane=new Xi,this.needsUpdate=!0}intersectsSphere(e){return bl(e,this)}update(){const e=this.a,t=this.b,s=this.c,i=this.points,a=this.satAxes,r=this.satBounds,o=a[0],l=r[0];this.getNormal(o),l.setFromPoints(o,i);const f=a[1],h=r[1];f.subVectors(e,t),h.setFromPoints(f,i);const c=a[2],d=r[2];c.subVectors(t,s),d.setFromPoints(c,i);const m=a[3],v=r[3];m.subVectors(s,e),v.setFromPoints(m,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}}Ce.prototype.closestPointToSegment=function(){const n=new I,e=new I,t=new Ee;return function(i,a=null,r=null){const{start:o,end:l}=i,f=this.points;let h,c=1/0;for(let d=0;d<3;d++){const m=(d+1)%3;t.start.copy(f[d]),t.end.copy(f[m]),kn(t,i,n,e),h=n.distanceToSquared(e),h<c&&(c=h,a&&a.copy(n),r&&r.copy(e))}return this.closestPointToPoint(o,n),h=o.distanceToSquared(n),h<c&&(c=h,a&&a.copy(n),r&&r.copy(o)),this.closestPointToPoint(l,n),h=l.distanceToSquared(n),h<c&&(c=h,a&&a.copy(n),r&&r.copy(l)),Math.sqrt(c)}}();Ce.prototype.intersectsTriangle=function(){const n=new Ce,e=new Array(3),t=new Array(3),s=new Ie,i=new Ie,a=new I,r=new I,o=new I,l=new I,f=new I,h=new Ee,c=new Ee,d=new Ee,m=new I;function v(x,g,A){const p=x.points;let y=0,b=-1;for(let B=0;B<3;B++){const{start:C,end:F}=h;C.copy(p[B]),F.copy(p[(B+1)%3]),h.delta(r);const w=Ys(g.distanceToPoint(C));if(Ys(g.normal.dot(r))&&w){A.copy(h),y=2;break}const T=g.intersectLine(h,m);if(!T&&w&&m.copy(C),(T||w)&&!Ys(m.distanceTo(F))){if(y<=1)(y===1?A.start:A.end).copy(m),w&&(b=y);else if(y>=2){(b===1?A.start:A.end).copy(m),y=2;break}if(y++,y===2&&b===-1)break}}return y}return function(g,A=null,p=!1){this.needsUpdate&&this.update(),g.isExtendedTriangle?g.needsUpdate&&g.update():(n.copy(g),n.update(),g=n);const y=this.plane,b=g.plane;if(Math.abs(y.normal.dot(b.normal))>1-1e-10){const B=this.satBounds,C=this.satAxes;t[0]=g.a,t[1]=g.b,t[2]=g.c;for(let T=0;T<4;T++){const S=B[T],E=C[T];if(s.setFromPoints(E,t),S.isSeparated(s))return!1}const F=g.satBounds,w=g.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let T=0;T<4;T++){const S=F[T],E=w[T];if(s.setFromPoints(E,e),S.isSeparated(s))return!1}for(let T=0;T<4;T++){const S=C[T];for(let E=0;E<4;E++){const M=w[E];if(a.crossVectors(S,M),s.setFromPoints(a,e),i.setFromPoints(a,t),s.isSeparated(i))return!1}}return A&&(p||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),A.start.set(0,0,0),A.end.set(0,0,0)),!0}else{const B=v(this,b,c);if(B===1&&g.containsPoint(c.end))return A&&(A.start.copy(c.end),A.end.copy(c.end)),!0;if(B!==2)return!1;const C=v(g,y,d);if(C===1&&this.containsPoint(d.end))return A&&(A.start.copy(d.end),A.end.copy(d.end)),!0;if(C!==2)return!1;if(c.delta(o),d.delta(l),o.dot(l)<0){let R=d.start;d.start=d.end,d.end=R}const F=c.start.dot(o),w=c.end.dot(o),T=d.start.dot(o),S=d.end.dot(o),E=w<T,M=F<S;return F!==S&&T!==w&&E===M?!1:(A&&(f.subVectors(c.start,d.start),f.dot(o)>0?A.start.copy(c.start):A.start.copy(d.start),f.subVectors(c.end,d.end),f.dot(o)<0?A.end.copy(c.end):A.end.copy(d.end)),!0)}}}();Ce.prototype.distanceToPoint=function(){const n=new I;return function(t){return this.closestPointToPoint(t,n),t.distanceTo(n)}}();Ce.prototype.distanceToTriangle=function(){const n=new I,e=new I,t=["a","b","c"],s=new Ee,i=new Ee;return function(r,o=null,l=null){const f=o||l?s:null;if(this.intersectsTriangle(r,f))return(o||l)&&(o&&f.getCenter(o),l&&f.getCenter(l)),0;let h=1/0;for(let c=0;c<3;c++){let d;const m=t[c],v=r[m];this.closestPointToPoint(v,n),d=v.distanceToSquared(n),d<h&&(h=d,o&&o.copy(n),l&&l.copy(v));const x=this[m];r.closestPointToPoint(x,n),d=x.distanceToSquared(n),d<h&&(h=d,o&&o.copy(x),l&&l.copy(n))}for(let c=0;c<3;c++){const d=t[c],m=t[(c+1)%3];s.set(this[d],this[m]);for(let v=0;v<3;v++){const x=t[v],g=t[(v+1)%3];i.set(r[x],r[g]),kn(s,i,n,e);const A=n.distanceToSquared(e);A<h&&(h=A,o&&o.copy(n),l&&l.copy(e))}}return Math.sqrt(h)}}();class oe{constructor(e,t,s){this.isOrientedBox=!0,this.min=new I,this.max=new I,this.matrix=new Y,this.invMatrix=new Y,this.points=new Array(8).fill().map(()=>new I),this.satAxes=new Array(3).fill().map(()=>new I),this.satBounds=new Array(3).fill().map(()=>new Ie),this.alignedSatBounds=new Array(3).fill().map(()=>new Ie),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),s&&this.matrix.copy(s)}set(e,t,s){this.min.copy(e),this.max.copy(t),this.matrix.copy(s),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}oe.prototype.update=function(){return function(){const e=this.matrix,t=this.min,s=this.max,i=this.points;for(let f=0;f<=1;f++)for(let h=0;h<=1;h++)for(let c=0;c<=1;c++){const d=1*f|2*h|4*c,m=i[d];m.x=f?s.x:t.x,m.y=h?s.y:t.y,m.z=c?s.z:t.z,m.applyMatrix4(e)}const a=this.satBounds,r=this.satAxes,o=i[0];for(let f=0;f<3;f++){const h=r[f],c=a[f],d=1<<f,m=i[d];h.subVectors(o,m),c.setFromPoints(h,i)}const l=this.alignedSatBounds;l[0].setFromPointsField(i,"x"),l[1].setFromPointsField(i,"y"),l[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();oe.prototype.intersectsBox=function(){const n=new Ie;return function(t){this.needsUpdate&&this.update();const s=t.min,i=t.max,a=this.satBounds,r=this.satAxes,o=this.alignedSatBounds;if(n.min=s.x,n.max=i.x,o[0].isSeparated(n)||(n.min=s.y,n.max=i.y,o[1].isSeparated(n))||(n.min=s.z,n.max=i.z,o[2].isSeparated(n)))return!1;for(let l=0;l<3;l++){const f=r[l],h=a[l];if(n.setFromBox(f,t),h.isSeparated(n))return!1}return!0}}();oe.prototype.intersectsTriangle=function(){const n=new Ce,e=new Array(3),t=new Ie,s=new Ie,i=new I;return function(r){this.needsUpdate&&this.update(),r.isExtendedTriangle?r.needsUpdate&&r.update():(n.copy(r),n.update(),r=n);const o=this.satBounds,l=this.satAxes;e[0]=r.a,e[1]=r.b,e[2]=r.c;for(let d=0;d<3;d++){const m=o[d],v=l[d];if(t.setFromPoints(v,e),m.isSeparated(t))return!1}const f=r.satBounds,h=r.satAxes,c=this.points;for(let d=0;d<3;d++){const m=f[d],v=h[d];if(t.setFromPoints(v,c),m.isSeparated(t))return!1}for(let d=0;d<3;d++){const m=l[d];for(let v=0;v<4;v++){const x=h[v];if(i.crossVectors(m,x),t.setFromPoints(i,e),s.setFromPoints(i,c),t.isSeparated(s))return!1}}return!0}}();oe.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();oe.prototype.distanceToPoint=function(){const n=new I;return function(t){return this.closestPointToPoint(t,n),t.distanceTo(n)}}();oe.prototype.distanceToBox=function(){const n=["x","y","z"],e=new Array(12).fill().map(()=>new Ee),t=new Array(12).fill().map(()=>new Ee),s=new I,i=new I;return function(r,o=0,l=null,f=null){if(this.needsUpdate&&this.update(),this.intersectsBox(r))return(l||f)&&(r.getCenter(i),this.closestPointToPoint(i,s),r.closestPointToPoint(s,i),l&&l.copy(s),f&&f.copy(i)),0;const h=o*o,c=r.min,d=r.max,m=this.points;let v=1/0;for(let g=0;g<8;g++){const A=m[g];i.copy(A).clamp(c,d);const p=A.distanceToSquared(i);if(p<v&&(v=p,l&&l.copy(A),f&&f.copy(i),p<h))return Math.sqrt(p)}let x=0;for(let g=0;g<3;g++)for(let A=0;A<=1;A++)for(let p=0;p<=1;p++){const y=(g+1)%3,b=(g+2)%3,B=A<<y|p<<b,C=1<<g|A<<y|p<<b,F=m[B],w=m[C];e[x].set(F,w);const S=n[g],E=n[y],M=n[b],R=t[x],P=R.start,_=R.end;P[S]=c[S],P[E]=A?c[E]:d[E],P[M]=p?c[M]:d[E],_[S]=d[S],_[E]=A?c[E]:d[E],_[M]=p?c[M]:d[E],x++}for(let g=0;g<=1;g++)for(let A=0;A<=1;A++)for(let p=0;p<=1;p++){i.x=g?d.x:c.x,i.y=A?d.y:c.y,i.z=p?d.z:c.z,this.closestPointToPoint(i,s);const y=i.distanceToSquared(s);if(y<v&&(v=y,l&&l.copy(s),f&&f.copy(i),y<h))return Math.sqrt(y)}for(let g=0;g<12;g++){const A=e[g];for(let p=0;p<12;p++){const y=t[p];kn(A,y,s,i);const b=s.distanceToSquared(i);if(b<v&&(v=b,l&&l.copy(s),f&&f.copy(i),b<h))return Math.sqrt(b)}}return Math.sqrt(v)}}();class Nn{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class Cl extends Nn{constructor(){super(()=>new Ce)}}const ve=new Cl;class Tl{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=s=>{t&&e.push(t),t=s,this.float32Array=new Float32Array(s),this.uint16Array=new Uint16Array(s),this.uint32Array=new Uint32Array(s)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const z=new Tl;let ke,mt;const nt=[],Yt=new Nn(()=>new re);function Fl(n,e,t,s,i,a){ke=Yt.getPrimitive(),mt=Yt.getPrimitive(),nt.push(ke,mt),z.setBuffer(n._roots[e]);const r=vn(0,n.geometry,t,s,i,a);z.clearBuffer(),Yt.releasePrimitive(ke),Yt.releasePrimitive(mt),nt.pop(),nt.pop();const o=nt.length;return o>0&&(mt=nt[o-1],ke=nt[o-2]),r}function vn(n,e,t,s,i=null,a=0,r=0){const{float32Array:o,uint16Array:l,uint32Array:f}=z;let h=n*2;if(ne(h,l)){const d=le(n,f),m=ce(h,l);return K(n,o,ke),s(d,m,!1,r,a+n,ke)}else{let S=function(M){const{uint16Array:R,uint32Array:P}=z;let _=M*2;for(;!ne(_,R);)M=Ae(M),_=M*2;return le(M,P)},E=function(M){const{uint16Array:R,uint32Array:P}=z;let _=M*2;for(;!ne(_,R);)M=ue(M,P),_=M*2;return le(M,P)+ce(_,R)};const d=Ae(n),m=ue(n,f);let v=d,x=m,g,A,p,y;if(i&&(p=ke,y=mt,K(v,o,p),K(x,o,y),g=i(p),A=i(y),A<g)){v=m,x=d;const M=g;g=A,A=M,p=y}p||(p=ke,K(v,o,p));const b=ne(v*2,l),B=t(p,b,g,r+1,a+v);let C;if(B===ci){const M=S(v),P=E(v)-M;C=s(M,P,!0,r+1,a+v,p)}else C=B&&vn(v,e,t,s,i,a,r+1);if(C)return!0;y=mt,K(x,o,y);const F=ne(x*2,l),w=t(y,F,A,r+1,a+x);let T;if(w===ci){const M=S(x),P=E(x)-M;T=s(M,P,!0,r+1,a+x,y)}else T=w&&vn(x,e,t,s,i,a,r+1);return!!T}}const Ft=new I,qs=new I;function Sl(n,e,t={},s=0,i=1/0){const a=s*s,r=i*i;let o=1/0,l=null;if(n.shapecast({boundsTraverseOrder:h=>(Ft.copy(e).clamp(h.min,h.max),Ft.distanceToSquared(e)),intersectsBounds:(h,c,d)=>d<o&&d<r,intersectsTriangle:(h,c)=>{h.closestPointToPoint(e,Ft);const d=e.distanceToSquared(Ft);return d<o&&(qs.copy(Ft),o=d,l=c),d<a}}),o===1/0)return null;const f=Math.sqrt(o);return t.point?t.point.copy(qs):t.point=qs.clone(),t.distance=f,t.faceIndex=l,t}const it=new I,rt=new I,ot=new I,qt=new Be,Zt=new Be,$t=new Be,pi=new I,mi=new I,gi=new I,es=new I;function Ml(n,e,t,s,i,a,r,o){let l;if(a===wn?l=n.intersectTriangle(s,t,e,!0,i):l=n.intersectTriangle(e,t,s,a!==Ss,i),l===null)return null;const f=n.origin.distanceTo(i);return f<r||f>o?null:{distance:f,point:i.clone()}}function wl(n,e,t,s,i,a,r,o,l,f,h){it.fromBufferAttribute(e,a),rt.fromBufferAttribute(e,r),ot.fromBufferAttribute(e,o);const c=Ml(n,it,rt,ot,es,l,f,h);if(c){s&&(qt.fromBufferAttribute(s,a),Zt.fromBufferAttribute(s,r),$t.fromBufferAttribute(s,o),c.uv=It.getInterpolation(es,it,rt,ot,qt,Zt,$t,new Be)),i&&(qt.fromBufferAttribute(i,a),Zt.fromBufferAttribute(i,r),$t.fromBufferAttribute(i,o),c.uv1=It.getInterpolation(es,it,rt,ot,qt,Zt,$t,new Be)),t&&(pi.fromBufferAttribute(t,a),mi.fromBufferAttribute(t,r),gi.fromBufferAttribute(t,o),c.normal=It.getInterpolation(es,it,rt,ot,pi,mi,gi,new I),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:r,c:o,normal:new I,materialIndex:0};It.getNormal(it,rt,ot,d.normal),c.face=d,c.faceIndex=a}return c}function Rs(n,e,t,s,i,a,r){const o=s*3;let l=o+0,f=o+1,h=o+2;const c=n.index;n.index&&(l=c.getX(l),f=c.getX(f),h=c.getX(h));const{position:d,normal:m,uv:v,uv1:x}=n.attributes,g=wl(t,d,m,v,x,l,f,h,e,a,r);return g?(g.faceIndex=s,i&&i.push(g),g):null}function V(n,e,t,s){const i=n.a,a=n.b,r=n.c;let o=e,l=e+1,f=e+2;t&&(o=t.getX(o),l=t.getX(l),f=t.getX(f)),i.x=s.getX(o),i.y=s.getY(o),i.z=s.getZ(o),a.x=s.getX(l),a.y=s.getY(l),a.z=s.getZ(l),r.x=s.getX(f),r.y=s.getY(f),r.z=s.getZ(f)}function Dl(n,e,t,s,i,a,r,o){const{geometry:l,_indirectBuffer:f}=n;for(let h=s,c=s+i;h<c;h++)Rs(l,e,t,h,a,r,o)}function El(n,e,t,s,i,a,r){const{geometry:o,_indirectBuffer:l}=n;let f=1/0,h=null;for(let c=s,d=s+i;c<d;c++){let m;m=Rs(o,e,t,c,null,a,r),m&&m.distance<f&&(h=m,f=m.distance)}return h}function Rl(n,e,t,s,i,a,r){const{geometry:o}=t,{index:l}=o,f=o.attributes.position;for(let h=n,c=e+n;h<c;h++){let d;if(d=h,V(r,d*3,l,f),r.needsUpdate=!0,s(r,d,i,a))return!0}return!1}function Il(n,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=n.geometry,s=t.index?t.index.array:null,i=t.attributes.position;let a,r,o,l,f=0;const h=n._roots;for(let d=0,m=h.length;d<m;d++)a=h[d],r=new Uint32Array(a),o=new Uint16Array(a),l=new Float32Array(a),c(0,f),f+=a.byteLength;function c(d,m,v=!1){const x=d*2;if(o[x+15]===Es){const A=r[d+6],p=o[x+14];let y=1/0,b=1/0,B=1/0,C=-1/0,F=-1/0,w=-1/0;for(let T=3*A,S=3*(A+p);T<S;T++){let E=s[T];const M=i.getX(E),R=i.getY(E),P=i.getZ(E);M<y&&(y=M),M>C&&(C=M),R<b&&(b=R),R>F&&(F=R),P<B&&(B=P),P>w&&(w=P)}return l[d+0]!==y||l[d+1]!==b||l[d+2]!==B||l[d+3]!==C||l[d+4]!==F||l[d+5]!==w?(l[d+0]=y,l[d+1]=b,l[d+2]=B,l[d+3]=C,l[d+4]=F,l[d+5]=w,!0):!1}else{const A=d+8,p=r[d+6],y=A+m,b=p+m;let B=v,C=!1,F=!1;e?B||(C=e.has(y),F=e.has(b),B=!C&&!F):(C=!0,F=!0);const w=B||C,T=B||F;let S=!1;w&&(S=c(A,m,B));let E=!1;T&&(E=c(p,m,B));const M=S||E;if(M)for(let R=0;R<3;R++){const P=A+R,_=p+R,G=l[P],j=l[P+3],L=l[_],U=l[_+3];l[d+R]=G<L?G:L,l[d+R+3]=j>U?j:U}return M}}}function We(n,e,t,s,i){let a,r,o,l,f,h;const c=1/t.direction.x,d=1/t.direction.y,m=1/t.direction.z,v=t.origin.x,x=t.origin.y,g=t.origin.z;let A=e[n],p=e[n+3],y=e[n+1],b=e[n+3+1],B=e[n+2],C=e[n+3+2];return c>=0?(a=(A-v)*c,r=(p-v)*c):(a=(p-v)*c,r=(A-v)*c),d>=0?(o=(y-x)*d,l=(b-x)*d):(o=(b-x)*d,l=(y-x)*d),a>l||o>r||((o>a||isNaN(a))&&(a=o),(l<r||isNaN(r))&&(r=l),m>=0?(f=(B-g)*m,h=(C-g)*m):(f=(C-g)*m,h=(B-g)*m),a>h||f>r)?!1:((f>a||a!==a)&&(a=f),(h<r||r!==r)&&(r=h),a<=i&&r>=s)}function Pl(n,e,t,s,i,a,r,o){const{geometry:l,_indirectBuffer:f}=n;for(let h=s,c=s+i;h<c;h++){let d=f?f[h]:h;Rs(l,e,t,d,a,r,o)}}function _l(n,e,t,s,i,a,r){const{geometry:o,_indirectBuffer:l}=n;let f=1/0,h=null;for(let c=s,d=s+i;c<d;c++){let m;m=Rs(o,e,t,l?l[c]:c,null,a,r),m&&m.distance<f&&(h=m,f=m.distance)}return h}function Gl(n,e,t,s,i,a,r){const{geometry:o}=t,{index:l}=o,f=o.attributes.position;for(let h=n,c=e+n;h<c;h++){let d;if(d=t.resolveTriangleIndex(h),V(r,d*3,l,f),r.needsUpdate=!0,s(r,d,i,a))return!0}return!1}function jl(n,e,t,s,i,a,r){z.setBuffer(n._roots[e]),yn(0,n,t,s,i,a,r),z.clearBuffer()}function yn(n,e,t,s,i,a,r){const{float32Array:o,uint16Array:l,uint32Array:f}=z,h=n*2;if(ne(h,l)){const d=le(n,f),m=ce(h,l);Dl(e,t,s,d,m,i,a,r)}else{const d=Ae(n);We(d,o,s,a,r)&&yn(d,e,t,s,i,a,r);const m=ue(n,f);We(m,o,s,a,r)&&yn(m,e,t,s,i,a,r)}}const Ll=["x","y","z"];function Hl(n,e,t,s,i,a){z.setBuffer(n._roots[e]);const r=bn(0,n,t,s,i,a);return z.clearBuffer(),r}function bn(n,e,t,s,i,a){const{float32Array:r,uint16Array:o,uint32Array:l}=z;let f=n*2;if(ne(f,o)){const c=le(n,l),d=ce(f,o);return El(e,t,s,c,d,i,a)}else{const c=On(n,l),d=Ll[c],v=s.direction[d]>=0;let x,g;v?(x=Ae(n),g=ue(n,l)):(x=ue(n,l),g=Ae(n));const p=We(x,r,s,i,a)?bn(x,e,t,s,i,a):null;if(p){const B=p.point[d];if(v?B<=r[g+c]:B>=r[g+c+3])return p}const b=We(g,r,s,i,a)?bn(g,e,t,s,i,a):null;return p&&b?p.distance<=b.distance?p:b:p||b||null}}const ts=new re,at=new Ce,lt=new Ce,St=new Y,xi=new oe,ss=new oe;function Ol(n,e,t,s){z.setBuffer(n._roots[e]);const i=Bn(0,n,t,s);return z.clearBuffer(),i}function Bn(n,e,t,s,i=null){const{float32Array:a,uint16Array:r,uint32Array:o}=z;let l=n*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),xi.set(t.boundingBox.min,t.boundingBox.max,s),i=xi),ne(l,r)){const h=e.geometry,c=h.index,d=h.attributes.position,m=t.index,v=t.attributes.position,x=le(n,o),g=ce(l,r);if(St.copy(s).invert(),t.boundsTree)return K(n,a,ss),ss.matrix.copy(St),ss.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:p=>ss.intersectsBox(p),intersectsTriangle:p=>{p.a.applyMatrix4(s),p.b.applyMatrix4(s),p.c.applyMatrix4(s),p.needsUpdate=!0;for(let y=x*3,b=(g+x)*3;y<b;y+=3)if(V(lt,y,c,d),lt.needsUpdate=!0,p.intersectsTriangle(lt))return!0;return!1}});for(let A=x*3,p=(g+x)*3;A<p;A+=3){V(at,A,c,d),at.a.applyMatrix4(St),at.b.applyMatrix4(St),at.c.applyMatrix4(St),at.needsUpdate=!0;for(let y=0,b=m.count;y<b;y+=3)if(V(lt,y,m,v),lt.needsUpdate=!0,at.intersectsTriangle(lt))return!0}}else{const h=n+8,c=o[n+6];return K(h,a,ts),!!(i.intersectsBox(ts)&&Bn(h,e,t,s,i)||(K(c,a,ts),i.intersectsBox(ts)&&Bn(c,e,t,s,i)))}}const ns=new Y,Zs=new oe,Mt=new oe,kl=new I,Nl=new I,Ul=new I,zl=new I;function Jl(n,e,t,s={},i={},a=0,r=1/0){e.boundingBox||e.computeBoundingBox(),Zs.set(e.boundingBox.min,e.boundingBox.max,t),Zs.needsUpdate=!0;const o=n.geometry,l=o.attributes.position,f=o.index,h=e.attributes.position,c=e.index,d=ve.getPrimitive(),m=ve.getPrimitive();let v=kl,x=Nl,g=null,A=null;i&&(g=Ul,A=zl);let p=1/0,y=null,b=null;return ns.copy(t).invert(),Mt.matrix.copy(ns),n.shapecast({boundsTraverseOrder:B=>Zs.distanceToBox(B),intersectsBounds:(B,C,F)=>F<p&&F<r?(C&&(Mt.min.copy(B.min),Mt.max.copy(B.max),Mt.needsUpdate=!0),!0):!1,intersectsRange:(B,C)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:w=>Mt.distanceToBox(w),intersectsBounds:(w,T,S)=>S<p&&S<r,intersectsRange:(w,T)=>{for(let S=w,E=w+T;S<E;S++){V(m,3*S,c,h),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let M=B,R=B+C;M<R;M++){V(d,3*M,f,l),d.needsUpdate=!0;const P=d.distanceToTriangle(m,v,g);if(P<p&&(x.copy(v),A&&A.copy(g),p=P,y=M,b=S),P<a)return!0}}}});{const F=Bt(e);for(let w=0,T=F;w<T;w++){V(m,3*w,c,h),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let S=B,E=B+C;S<E;S++){V(d,3*S,f,l),d.needsUpdate=!0;const M=d.distanceToTriangle(m,v,g);if(M<p&&(x.copy(v),A&&A.copy(g),p=M,y=S,b=w),M<a)return!0}}}}}),ve.releasePrimitive(d),ve.releasePrimitive(m),p===1/0?null:(s.point?s.point.copy(x):s.point=x.clone(),s.distance=p,s.faceIndex=y,i&&(i.point?i.point.copy(A):i.point=A.clone(),i.point.applyMatrix4(ns),x.applyMatrix4(ns),i.distance=x.sub(i.point).length(),i.faceIndex=b),s)}function Wl(n,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=n.geometry,s=t.index?t.index.array:null,i=t.attributes.position;let a,r,o,l,f=0;const h=n._roots;for(let d=0,m=h.length;d<m;d++)a=h[d],r=new Uint32Array(a),o=new Uint16Array(a),l=new Float32Array(a),c(0,f),f+=a.byteLength;function c(d,m,v=!1){const x=d*2;if(o[x+15]===Es){const A=r[d+6],p=o[x+14];let y=1/0,b=1/0,B=1/0,C=-1/0,F=-1/0,w=-1/0;for(let T=A,S=A+p;T<S;T++){const E=3*n.resolveTriangleIndex(T);for(let M=0;M<3;M++){let R=E+M;R=s?s[R]:R;const P=i.getX(R),_=i.getY(R),G=i.getZ(R);P<y&&(y=P),P>C&&(C=P),_<b&&(b=_),_>F&&(F=_),G<B&&(B=G),G>w&&(w=G)}}return l[d+0]!==y||l[d+1]!==b||l[d+2]!==B||l[d+3]!==C||l[d+4]!==F||l[d+5]!==w?(l[d+0]=y,l[d+1]=b,l[d+2]=B,l[d+3]=C,l[d+4]=F,l[d+5]=w,!0):!1}else{const A=d+8,p=r[d+6],y=A+m,b=p+m;let B=v,C=!1,F=!1;e?B||(C=e.has(y),F=e.has(b),B=!C&&!F):(C=!0,F=!0);const w=B||C,T=B||F;let S=!1;w&&(S=c(A,m,B));let E=!1;T&&(E=c(p,m,B));const M=S||E;if(M)for(let R=0;R<3;R++){const P=A+R,_=p+R,G=l[P],j=l[P+3],L=l[_],U=l[_+3];l[d+R]=G<L?G:L,l[d+R+3]=j>U?j:U}return M}}}function Kl(n,e,t,s,i,a,r){z.setBuffer(n._roots[e]),Cn(0,n,t,s,i,a,r),z.clearBuffer()}function Cn(n,e,t,s,i,a,r){const{float32Array:o,uint16Array:l,uint32Array:f}=z,h=n*2;if(ne(h,l)){const d=le(n,f),m=ce(h,l);Pl(e,t,s,d,m,i,a,r)}else{const d=Ae(n);We(d,o,s,a,r)&&Cn(d,e,t,s,i,a,r);const m=ue(n,f);We(m,o,s,a,r)&&Cn(m,e,t,s,i,a,r)}}const Ql=["x","y","z"];function Vl(n,e,t,s,i,a){z.setBuffer(n._roots[e]);const r=Tn(0,n,t,s,i,a);return z.clearBuffer(),r}function Tn(n,e,t,s,i,a){const{float32Array:r,uint16Array:o,uint32Array:l}=z;let f=n*2;if(ne(f,o)){const c=le(n,l),d=ce(f,o);return _l(e,t,s,c,d,i,a)}else{const c=On(n,l),d=Ql[c],v=s.direction[d]>=0;let x,g;v?(x=Ae(n),g=ue(n,l)):(x=ue(n,l),g=Ae(n));const p=We(x,r,s,i,a)?Tn(x,e,t,s,i,a):null;if(p){const B=p.point[d];if(v?B<=r[g+c]:B>=r[g+c+3])return p}const b=We(g,r,s,i,a)?Tn(g,e,t,s,i,a):null;return p&&b?p.distance<=b.distance?p:b:p||b||null}}const is=new re,ct=new Ce,ut=new Ce,wt=new Y,Ai=new oe,rs=new oe;function Xl(n,e,t,s){z.setBuffer(n._roots[e]);const i=Fn(0,n,t,s);return z.clearBuffer(),i}function Fn(n,e,t,s,i=null){const{float32Array:a,uint16Array:r,uint32Array:o}=z;let l=n*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),Ai.set(t.boundingBox.min,t.boundingBox.max,s),i=Ai),ne(l,r)){const h=e.geometry,c=h.index,d=h.attributes.position,m=t.index,v=t.attributes.position,x=le(n,o),g=ce(l,r);if(wt.copy(s).invert(),t.boundsTree)return K(n,a,rs),rs.matrix.copy(wt),rs.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:p=>rs.intersectsBox(p),intersectsTriangle:p=>{p.a.applyMatrix4(s),p.b.applyMatrix4(s),p.c.applyMatrix4(s),p.needsUpdate=!0;for(let y=x,b=g+x;y<b;y++)if(V(ut,3*e.resolveTriangleIndex(y),c,d),ut.needsUpdate=!0,p.intersectsTriangle(ut))return!0;return!1}});for(let A=x,p=g+x;A<p;A++){const y=e.resolveTriangleIndex(A);V(ct,3*y,c,d),ct.a.applyMatrix4(wt),ct.b.applyMatrix4(wt),ct.c.applyMatrix4(wt),ct.needsUpdate=!0;for(let b=0,B=m.count;b<B;b+=3)if(V(ut,b,m,v),ut.needsUpdate=!0,ct.intersectsTriangle(ut))return!0}}else{const h=n+8,c=o[n+6];return K(h,a,is),!!(i.intersectsBox(is)&&Fn(h,e,t,s,i)||(K(c,a,is),i.intersectsBox(is)&&Fn(c,e,t,s,i)))}}const os=new Y,$s=new oe,Dt=new oe,Yl=new I,ql=new I,Zl=new I,$l=new I;function ec(n,e,t,s={},i={},a=0,r=1/0){e.boundingBox||e.computeBoundingBox(),$s.set(e.boundingBox.min,e.boundingBox.max,t),$s.needsUpdate=!0;const o=n.geometry,l=o.attributes.position,f=o.index,h=e.attributes.position,c=e.index,d=ve.getPrimitive(),m=ve.getPrimitive();let v=Yl,x=ql,g=null,A=null;i&&(g=Zl,A=$l);let p=1/0,y=null,b=null;return os.copy(t).invert(),Dt.matrix.copy(os),n.shapecast({boundsTraverseOrder:B=>$s.distanceToBox(B),intersectsBounds:(B,C,F)=>F<p&&F<r?(C&&(Dt.min.copy(B.min),Dt.max.copy(B.max),Dt.needsUpdate=!0),!0):!1,intersectsRange:(B,C)=>{if(e.boundsTree){const F=e.boundsTree;return F.shapecast({boundsTraverseOrder:w=>Dt.distanceToBox(w),intersectsBounds:(w,T,S)=>S<p&&S<r,intersectsRange:(w,T)=>{for(let S=w,E=w+T;S<E;S++){const M=F.resolveTriangleIndex(S);V(m,3*M,c,h),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let R=B,P=B+C;R<P;R++){const _=n.resolveTriangleIndex(R);V(d,3*_,f,l),d.needsUpdate=!0;const G=d.distanceToTriangle(m,v,g);if(G<p&&(x.copy(v),A&&A.copy(g),p=G,y=R,b=S),G<a)return!0}}}})}else{const F=Bt(e);for(let w=0,T=F;w<T;w++){V(m,3*w,c,h),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let S=B,E=B+C;S<E;S++){const M=n.resolveTriangleIndex(S);V(d,3*M,f,l),d.needsUpdate=!0;const R=d.distanceToTriangle(m,v,g);if(R<p&&(x.copy(v),A&&A.copy(g),p=R,y=S,b=w),R<a)return!0}}}}}),ve.releasePrimitive(d),ve.releasePrimitive(m),p===1/0?null:(s.point?s.point.copy(x):s.point=x.clone(),s.distance=p,s.faceIndex=y,i&&(i.point?i.point.copy(A):i.point=A.clone(),i.point.applyMatrix4(os),x.applyMatrix4(os),i.distance=x.sub(i.point).length(),i.faceIndex=b),s)}function tc(){return typeof SharedArrayBuffer<"u"}const Ot=new z.constructor,Cs=new z.constructor,je=new Nn(()=>new re),dt=new re,ft=new re,en=new re,tn=new re;let sn=!1;function sc(n,e,t,s){if(sn)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");sn=!0;const i=n._roots,a=e._roots;let r,o=0,l=0;const f=new Y().copy(t).invert();for(let h=0,c=i.length;h<c;h++){Ot.setBuffer(i[h]),l=0;const d=je.getPrimitive();K(0,Ot.float32Array,d),d.applyMatrix4(f);for(let m=0,v=a.length;m<v&&(Cs.setBuffer(a[m]),r=be(0,0,t,f,s,o,l,0,0,d),Cs.clearBuffer(),l+=a[m].length,!r);m++);if(je.releasePrimitive(d),Ot.clearBuffer(),o+=i[h].length,r)break}return sn=!1,r}function be(n,e,t,s,i,a=0,r=0,o=0,l=0,f=null,h=!1){let c,d;h?(c=Cs,d=Ot):(c=Ot,d=Cs);const m=c.float32Array,v=c.uint32Array,x=c.uint16Array,g=d.float32Array,A=d.uint32Array,p=d.uint16Array,y=n*2,b=e*2,B=ne(y,x),C=ne(b,p);let F=!1;if(C&&B)h?F=i(le(e,A),ce(e*2,p),le(n,v),ce(n*2,x),l,r+e,o,a+n):F=i(le(n,v),ce(n*2,x),le(e,A),ce(e*2,p),o,a+n,l,r+e);else if(C){const w=je.getPrimitive();K(e,g,w),w.applyMatrix4(t);const T=Ae(n),S=ue(n,v);K(T,m,dt),K(S,m,ft);const E=w.intersectsBox(dt),M=w.intersectsBox(ft);F=E&&be(e,T,s,t,i,r,a,l,o+1,w,!h)||M&&be(e,S,s,t,i,r,a,l,o+1,w,!h),je.releasePrimitive(w)}else{const w=Ae(e),T=ue(e,A);K(w,g,en),K(T,g,tn);const S=f.intersectsBox(en),E=f.intersectsBox(tn);if(S&&E)F=be(n,w,t,s,i,a,r,o,l+1,f,h)||be(n,T,t,s,i,a,r,o,l+1,f,h);else if(S)if(B)F=be(n,w,t,s,i,a,r,o,l+1,f,h);else{const M=je.getPrimitive();M.copy(en).applyMatrix4(t);const R=Ae(n),P=ue(n,v);K(R,m,dt),K(P,m,ft);const _=M.intersectsBox(dt),G=M.intersectsBox(ft);F=_&&be(w,R,s,t,i,r,a,l,o+1,M,!h)||G&&be(w,P,s,t,i,r,a,l,o+1,M,!h),je.releasePrimitive(M)}else if(E)if(B)F=be(n,T,t,s,i,a,r,o,l+1,f,h);else{const M=je.getPrimitive();M.copy(tn).applyMatrix4(t);const R=Ae(n),P=ue(n,v);K(R,m,dt),K(P,m,ft);const _=M.intersectsBox(dt),G=M.intersectsBox(ft);F=_&&be(T,R,s,t,i,r,a,l,o+1,M,!h)||G&&be(T,P,s,t,i,r,a,l,o+1,M,!h),je.releasePrimitive(M)}}return F}const as=new oe,vi=new re,nc={strategy:hr,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class Un{static serialize(e,t={}){t={cloneBuffers:!0,...t};const s=e.geometry,i=e._roots,a=e._indirectBuffer,r=s.getIndex();let o;return t.cloneBuffers?o={roots:i.map(l=>l.slice()),index:r?r.array.slice():null,indirectBuffer:a?a.slice():null}:o={roots:i,index:r?r.array:null,indirectBuffer:a},o}static deserialize(e,t,s={}){s={setIndex:!0,indirect:!!e.indirectBuffer,...s};const{index:i,roots:a,indirectBuffer:r}=e,o=new Un(t,{...s,[Qs]:!0});if(o._roots=a,o._indirectBuffer=r||null,s.setIndex){const l=t.getIndex();if(l===null){const f=new X(e.index,1,!1);t.setIndex(f)}else l.array!==i&&(l.array.set(i),l.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...nc,[Qs]:!1},t),t.useSharedArrayBuffer&&!tc())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[Qs]||(vl(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new re))),this.resolveTriangleIndex=t.indirect?s=>this._indirectBuffer[s]:s=>s}refit(e=null){return(this.indirect?Wl:Il)(this,e)}traverse(e,t=0){const s=this._roots[t],i=new Uint32Array(s),a=new Uint16Array(s);r(0);function r(o,l=0){const f=o*2,h=a[f+15]===Es;if(h){const c=i[o+6],d=a[f+14];e(l,h,new Float32Array(s,o*4,6),c,d)}else{const c=o+ze/4,d=i[o+6],m=i[o+7];e(l,h,new Float32Array(s,o*4,6),m)||(r(c,l+1),r(d,l+1))}}}raycast(e,t=As,s=0,i=1/0){const a=this._roots,r=this.geometry,o=[],l=t.isMaterial,f=Array.isArray(t),h=r.groups,c=l?t.side:t,d=this.indirect?Kl:jl;for(let m=0,v=a.length;m<v;m++){const x=f?t[h[m].materialIndex].side:c,g=o.length;if(d(this,m,x,e,o,s,i),f){const A=h[m].materialIndex;for(let p=g,y=o.length;p<y;p++)o[p].face.materialIndex=A}}return o}raycastFirst(e,t=As,s=0,i=1/0){const a=this._roots,r=this.geometry,o=t.isMaterial,l=Array.isArray(t);let f=null;const h=r.groups,c=o?t.side:t,d=this.indirect?Vl:Hl;for(let m=0,v=a.length;m<v;m++){const x=l?t[h[m].materialIndex].side:c,g=d(this,m,x,e,s,i);g!=null&&(f==null||g.distance<f.distance)&&(f=g,l&&(g.face.materialIndex=h[m].materialIndex))}return f}intersectsGeometry(e,t){let s=!1;const i=this._roots,a=this.indirect?Xl:Ol;for(let r=0,o=i.length;r<o&&(s=a(this,r,e,t),!s);r++);return s}shapecast(e){const t=ve.getPrimitive(),s=this.indirect?Gl:Rl;let{boundsTraverseOrder:i,intersectsBounds:a,intersectsRange:r,intersectsTriangle:o}=e;if(r&&o){const c=r;r=(d,m,v,x,g)=>c(d,m,v,x,g)?!0:s(d,m,this,o,v,x,t)}else r||(o?r=(c,d,m,v)=>s(c,d,this,o,m,v,t):r=(c,d,m)=>m);let l=!1,f=0;const h=this._roots;for(let c=0,d=h.length;c<d;c++){const m=h[c];if(l=Fl(this,c,a,r,i,f),l)break;f+=m.byteLength}return ve.releasePrimitive(t),l}bvhcast(e,t,s){let{intersectsRanges:i,intersectsTriangles:a}=s;const r=ve.getPrimitive(),o=this.geometry.index,l=this.geometry.attributes.position,f=this.indirect?v=>{const x=this.resolveTriangleIndex(v);V(r,x*3,o,l)}:v=>{V(r,v*3,o,l)},h=ve.getPrimitive(),c=e.geometry.index,d=e.geometry.attributes.position,m=e.indirect?v=>{const x=e.resolveTriangleIndex(v);V(h,x*3,c,d)}:v=>{V(h,v*3,c,d)};if(a){const v=(x,g,A,p,y,b,B,C)=>{for(let F=A,w=A+p;F<w;F++){m(F),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let T=x,S=x+g;T<S;T++)if(f(T),r.needsUpdate=!0,a(r,h,T,F,y,b,B,C))return!0}return!1};if(i){const x=i;i=function(g,A,p,y,b,B,C,F){return x(g,A,p,y,b,B,C,F)?!0:v(g,A,p,y,b,B,C,F)}}else i=v}return sc(this,e,t,i)}intersectsBox(e,t){return as.set(e.min,e.max,t),as.needsUpdate=!0,this.shapecast({intersectsBounds:s=>as.intersectsBox(s),intersectsTriangle:s=>as.intersectsTriangle(s)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,s={},i={},a=0,r=1/0){return(this.indirect?ec:Jl)(this,e,t,s,i,a,r)}closestPointToPoint(e,t={},s=0,i=1/0){return Sl(this,e,t,s,i)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(s=>{K(0,new Float32Array(s),vi),e.union(vi)}),e}}function ic(n){switch(n){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function rc(n){switch(n){case 1:return At;case 2:return qi;case 3:return Z;case 4:return Z}}function yi(n){switch(n){case 1:return Ao;case 2:return Yi;case 3:return hn;case 4:return hn}}class br extends ye{constructor(){super(),this.minFilter=q,this.magFilter=q,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){const t=this.overrideItemSize,s=e.itemSize,i=e.count;if(t!==null){if(s*i%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=i*s/t}const a=e.itemSize,r=e.count,o=e.normalized,l=e.array.constructor,f=l.BYTES_PER_ELEMENT;let h=this._forcedType,c=a;if(h===null)switch(l){case Float32Array:h=ie;break;case Uint8Array:case Uint16Array:case Uint32Array:h=Ht;break;case Int8Array:case Int16Array:case Int32Array:h=js;break}let d,m,v,x,g=ic(a);switch(h){case ie:v=1,m=rc(a),o&&f===1?(x=l,g+="8",l===Uint8Array?d=fn:(d=Zn,g+="_SNORM")):(x=Float32Array,g+="32F",d=ie);break;case js:g+=f*8+"I",v=o?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,m=yi(a),f===1?(x=Int8Array,d=Zn):f===2?(x=Int16Array,d=xo):(x=Int32Array,d=js);break;case Ht:g+=f*8+"UI",v=o?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,m=yi(a),f===1?(x=Uint8Array,d=fn):f===2?(x=Uint16Array,d=go):(x=Uint32Array,d=Ht);break}c===3&&(m===Z||m===hn)&&(c=4);const A=Math.ceil(Math.sqrt(r))||1,p=c*A*A,y=new x(p),b=e.normalized;e.normalized=!1;for(let B=0;B<r;B++){const C=c*B;y[C]=e.getX(B)/v,a>=2&&(y[C+1]=e.getY(B)/v),a>=3&&(y[C+2]=e.getZ(B)/v,c===4&&(y[C+3]=1)),a>=4&&(y[C+3]=e.getW(B)/v)}e.normalized=b,this.internalFormat=g,this.format=m,this.type=d,this.image.width=A,this.image.height=A,this.image.data=y,this.needsUpdate=!0,this.dispose(),e.itemSize=s,e.count=i}}class Br extends br{constructor(){super(),this._forcedType=Ht}}class Cr extends br{constructor(){super(),this._forcedType=ie}}class oc{constructor(){this.index=new Br,this.position=new Cr,this.bvhBounds=new ye,this.bvhContents=new ye,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){const{geometry:t}=e;if(lc(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){const s=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==s.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{const i=gr(mr(t));this._cachedIndexAttr=new X(i,1,!1)}ac(t,s,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){const{index:e,position:t,bvhBounds:s,bvhContents:i}=this;e&&e.dispose(),t&&t.dispose(),s&&s.dispose(),i&&i.dispose()}}function ac(n,e,t){const s=t.array,i=n.index?n.index.array:null;for(let a=0,r=e.length;a<r;a++){const o=3*a,l=3*e[a];for(let f=0;f<3;f++)s[o+f]=i?i[l+f]:l+f}}function lc(n,e,t){const s=n._roots;if(s.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const i=s[0],a=new Uint16Array(i),r=new Uint32Array(i),o=new Float32Array(i),l=i.byteLength/ze,f=2*Math.ceil(Math.sqrt(l/2)),h=new Float32Array(4*f*f),c=Math.ceil(Math.sqrt(l)),d=new Uint32Array(2*c*c);for(let m=0;m<l;m++){const v=m*ze/4,x=v*2,g=v;for(let A=0;A<3;A++)h[8*m+0+A]=o[g+0+A],h[8*m+4+A]=o[g+3+A];if(ne(x,a)){const A=ce(x,a),p=le(v,r),y=4294901760|A;d[m*2+0]=y,d[m*2+1]=p}else{const A=4*ue(v,r)/ze,p=On(v,r);d[m*2+0]=p,d[m*2+1]=A}}e.image.data=h,e.image.width=f,e.image.height=f,e.format=Z,e.type=ie,e.internalFormat="RGBA32F",e.minFilter=q,e.magFilter=q,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=d,t.image.width=c,t.image.height=c,t.format=Yi,t.type=Ht,t.internalFormat="RG32UI",t.minFilter=q,t.magFilter=q,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}const Xe=new I,Ye=new I,qe=new I,bi=new vt,ls=new I,nn=new I,Bi=new vt,Ci=new vt,cs=new Y,Ti=new Y;function Et(n,e){if(!n&&!e)return;const t=n.count===e.count,s=n.normalized===e.normalized,i=n.array.constructor===e.array.constructor,a=n.itemSize===e.itemSize;if(!t||!s||!i||!a)throw new Error}function Gt(n,e=null){const t=n.array.constructor,s=n.normalized,i=n.itemSize,a=e===null?n.count:e;return new X(new t(i*a),i,s)}function Tr(n,e,t=0){if(n.isInterleavedBufferAttribute){const s=n.itemSize;for(let i=0,a=n.count;i<a;i++){const r=i+t;e.setX(r,n.getX(i)),s>=2&&e.setY(r,n.getY(i)),s>=3&&e.setZ(r,n.getZ(i)),s>=4&&e.setW(r,n.getW(i))}}else{const s=e.array,i=s.constructor,a=s.BYTES_PER_ELEMENT*n.itemSize*t;new i(s.buffer,a,n.array.length).set(n.array)}}function cc(n,e,t){const s=n.elements,i=e.elements;for(let a=0,r=i.length;a<r;a++)s[a]+=i[a]*t}function Fi(n,e,t){const s=n.skeleton,i=n.geometry,a=s.bones,r=s.boneInverses;Bi.fromBufferAttribute(i.attributes.skinIndex,e),Ci.fromBufferAttribute(i.attributes.skinWeight,e),cs.elements.fill(0);for(let o=0;o<4;o++){const l=Ci.getComponent(o);if(l!==0){const f=Bi.getComponent(o);Ti.multiplyMatrices(a[f].matrixWorld,r[f]),cc(cs,Ti,l)}}return cs.multiply(n.bindMatrix).premultiply(n.bindMatrixInverse),t.transformDirection(cs),t}function rn(n,e,t,s,i){ls.set(0,0,0);for(let a=0,r=n.length;a<r;a++){const o=e[a],l=n[a];o!==0&&(nn.fromBufferAttribute(l,s),t?ls.addScaledVector(nn,o):ls.addScaledVector(nn.sub(i),o))}i.add(ls)}function uc(n,e={useGroups:!1,updateIndex:!1,skipAttributes:[]},t=new Fe){const s=n[0].index!==null,{useGroups:i=!1,updateIndex:a=!1,skipAttributes:r=[]}=e,o=new Set(Object.keys(n[0].attributes)),l={};let f=0;t.clearGroups();for(let h=0;h<n.length;++h){const c=n[h];let d=0;if(s!==(c.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const m in c.attributes){if(!o.has(m))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.');l[m]===void 0&&(l[m]=[]),l[m].push(c.attributes[m]),d++}if(d!==o.size)throw new Error("StaticGeometryGenerator: Make sure all geometries have the same number of attributes.");if(i){let m;if(s)m=c.index.count;else if(c.attributes.position!==void 0)m=c.attributes.position.count;else throw new Error("StaticGeometryGenerator: The geometry must have either an index or a position attribute");t.addGroup(f,m,h),f+=m}}if(s){let h=!1;if(!t.index){let c=0;for(let d=0;d<n.length;++d)c+=n[d].index.count;t.setIndex(new X(new Uint32Array(c),1,!1)),h=!0}if(a||h){const c=t.index;let d=0,m=0;for(let v=0;v<n.length;++v){const x=n[v],g=x.index;if(r[v]!==!0)for(let A=0;A<g.count;++A)c.setX(d,g.getX(A)+m),d++;m+=x.attributes.position.count}}}for(const h in l){const c=l[h];if(!(h in t.attributes)){let v=0;for(const x in c)v+=c[x].count;t.setAttribute(h,Gt(l[h][0],v))}const d=t.attributes[h];let m=0;for(let v=0,x=c.length;v<x;v++){const g=c[v];r[v]!==!0&&Tr(g,d,m),m+=g.count}}return t}function dc(n,e){if(n===null||e===null)return n===e;if(n.length!==e.length)return!1;for(let t=0,s=n.length;t<s;t++)if(n[t]!==e[t])return!1;return!0}function fc(n){const{index:e,attributes:t}=n;if(e)for(let s=0,i=e.count;s<i;s+=3){const a=e.getX(s),r=e.getX(s+2);e.setX(s,r),e.setX(s+2,a)}else for(const s in t){const i=t[s],a=i.itemSize;for(let r=0,o=i.count;r<o;r+=3)for(let l=0;l<a;l++){const f=i.getComponent(r,l),h=i.getComponent(r+2,l);i.setComponent(r,l,h),i.setComponent(r+2,l,f)}}return n}class hc{constructor(e){this.matrixWorld=new Y,this.geometryHash=null,this.boneMatrices=null,this.primitiveCount=-1,this.mesh=e,this.update()}update(){const e=this.mesh,t=e.geometry,s=e.skeleton,i=(t.index?t.index.count:t.attributes.position.count)/3;if(this.matrixWorld.copy(e.matrixWorld),this.geometryHash=t.attributes.position.version,this.primitiveCount=i,s){s.boneTexture||s.computeBoneTexture(),s.update();const a=s.boneMatrices;!this.boneMatrices||this.boneMatrices.length!==a.length?this.boneMatrices=a.slice():this.boneMatrices.set(a)}else this.boneMatrices=null}didChange(){const e=this.mesh,t=e.geometry,s=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===t.attributes.position.version&&dc(e.skeleton&&e.skeleton.boneMatrices||null,this.boneMatrices)&&this.primitiveCount===s)}}class Si{constructor(e){Array.isArray(e)||(e=[e]);const t=[];e.forEach(s=>{s.traverseVisible(i=>{i.isMesh&&t.push(i)})}),this.meshes=t,this.useGroups=!0,this.applyWorldTransforms=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Array(t.length).fill().map(()=>new Fe),this._diffMap=new WeakMap}getMaterials(){const e=[];return this.meshes.forEach(t=>{Array.isArray(t.material)?e.push(...t.material):e.push(t.material)}),e}generate(e=new Fe){let t=[];const{meshes:s,useGroups:i,_intermediateGeometry:a,_diffMap:r}=this;for(let o=0,l=s.length;o<l;o++){const f=s[o],h=a[o],c=r.get(f);!c||c.didChange(f)?(this._convertToStaticGeometry(f,h),t.push(!1),c?c.update():r.set(f,new hc(f))):t.push(!0)}if(a.length===0){e.setIndex(null);const o=e.attributes;for(const l in o)e.deleteAttribute(l);for(const l in this.attributes)e.setAttribute(this.attributes[l],new X(new Float32Array(0),4,!1))}else uc(a,{useGroups:i,skipAttributes:t},e);for(const o in e.attributes)e.attributes[o].needsUpdate=!0;return e}_convertToStaticGeometry(e,t=new Fe){const s=e.geometry,i=this.applyWorldTransforms,a=this.attributes.includes("normal"),r=this.attributes.includes("tangent"),o=s.attributes,l=t.attributes;!t.index&&s.index&&(t.index=s.index.clone()),l.position||t.setAttribute("position",Gt(o.position)),a&&!l.normal&&o.normal&&t.setAttribute("normal",Gt(o.normal)),r&&!l.tangent&&o.tangent&&t.setAttribute("tangent",Gt(o.tangent)),Et(s.index,t.index),Et(o.position,l.position),a&&Et(o.normal,l.normal),r&&Et(o.tangent,l.tangent);const f=o.position,h=a?o.normal:null,c=r?o.tangent:null,d=s.morphAttributes.position,m=s.morphAttributes.normal,v=s.morphAttributes.tangent,x=s.morphTargetsRelative,g=e.morphTargetInfluences,A=new vo;A.getNormalMatrix(e.matrixWorld),s.index&&t.index.array.set(s.index.array);for(let p=0,y=o.position.count;p<y;p++)Xe.fromBufferAttribute(f,p),h&&Ye.fromBufferAttribute(h,p),c&&(bi.fromBufferAttribute(c,p),qe.fromBufferAttribute(c,p)),g&&(d&&rn(d,g,x,p,Xe),m&&rn(m,g,x,p,Ye),v&&rn(v,g,x,p,qe)),e.isSkinnedMesh&&(e.applyBoneTransform(p,Xe),h&&Fi(e,p,Ye),c&&Fi(e,p,qe)),i&&Xe.applyMatrix4(e.matrixWorld),l.position.setXYZ(p,Xe.x,Xe.y,Xe.z),h&&(i&&Ye.applyNormalMatrix(A),l.normal.setXYZ(p,Ye.x,Ye.y,Ye.z)),c&&(i&&qe.transformDirection(e.matrixWorld),l.tangent.setXYZW(p,qe.x,qe.y,qe.z,bi.w));for(const p in this.attributes){const y=this.attributes[p];y==="position"||y==="tangent"||y==="normal"||!(y in o)||(l[y]||t.setAttribute(y,Gt(o[y])),Et(o[y],l[y]),Tr(o[y],l[y]))}return e.matrixWorld.determinant()<0&&fc(t),t}}const pc=`

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
`,mc=`

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
`,gc=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`;function xc(n,e,t=new I){const s=Math.PI*(n-.5),i=2*Math.PI*(e-.5);return t.x=Math.cos(i),t.y=Math.sin(s),t.z=Math.sin(i),t}const Ac=D.forwardRef(({inclination:n=.6,azimuth:e=.1,distance:t=1e3,mieCoefficient:s=.005,mieDirectionalG:i=.8,rayleigh:a=.5,turbidity:r=10,sunPosition:o=xc(n,e),...l},f)=>{const h=D.useMemo(()=>new I().setScalar(t),[t]),[c]=D.useState(()=>new ba);return D.createElement("primitive",yo({object:c,ref:f,"material-uniforms-mieCoefficient-value":s,"material-uniforms-mieDirectionalG-value":i,"material-uniforms-rayleigh-value":a,"material-uniforms-sunPosition-value":o,"material-uniforms-turbidity-value":r,scale:h},l))});class zn extends Mn{constructor(e){super(e);for(const t in this.uniforms)Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(s){this.uniforms[t].value=s}})}setDefine(e,t=void 0){t==null?e in this.defines&&(delete this.defines[e],this.needsUpdate=!0):this.defines[e]!==t&&(this.defines[e]=t,this.needsUpdate=!0)}}class vc extends zn{constructor(e){super({blending:Pn,uniforms:{target1:{value:null},target2:{value:null},opacity:{value:1}},vertexShader:`

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

				}`}),this.setValues(e)}}function us(n=1){let e="uint";return n>1&&(e="uvec"+n),`
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
	`}function ds(n=1){let e="uint",t="float",s="",i=".r",a="1u";return n>1&&(e="uvec"+n,t="vec"+n,s=n+"",n===2?(i=".rg",a="uvec2( 1u, 2u )"):n===3?(i=".rgb",a="uvec3( 1u, 2u, 3u )"):(i="",a="uvec4( 1u, 2u, 3u, 4u )")),`

		${t} sobol${s}( int effect ) {

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
	`}const Fr=`

	// Utils
	const float SOBOL_FACTOR = 1.0 / 16777216.0;
	const uint SOBOL_MAX_POINTS = 256u * 256u;

	${us(1)}
	${us(2)}
	${us(3)}
	${us(4)}

	uint sobolHash( uint x ) {

		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}

`,yc=`

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

`,bc=`

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

	${ds(1)}
	${ds(2)}
	${ds(3)}
	${ds(4)}

`;class Bc extends zn{constructor(){super({blending:Pn,uniforms:{resolution:{value:new Be}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`

				${Fr}
				${yc}

				varying vec2 vUv;
				uniform vec2 resolution;
				void main() {

					uint index = uint( gl_FragCoord.y ) * uint( resolution.x ) + uint( gl_FragCoord.x );
					gl_FragColor = generateSobolPoint( index );

				}
			`})}}class Cc{generate(e,t=256){const s=new ms(t,t,{type:ie,format:Z,minFilter:q,magFilter:q,generateMipmaps:!1}),i=e.getRenderTarget();e.setRenderTarget(s);const a=new yt(new Bc);return a.material.resolution.set(t,t),a.render(e),e.setRenderTarget(i),a.dispose(),s}}function*Tc(){const{_renderer:n,_fsQuad:e,_blendQuad:t,_primaryTarget:s,_blendTargets:i,_sobolTarget:a,_subframe:r,alpha:o,camera:l,material:f}=this,h=new vt,c=new vt,d=t.material;let[m,v]=i;for(;;){o?(d.opacity=this._opacityFactor/(this._samples+1),f.blending=Pn,f.opacity=1):(f.opacity=this._opacityFactor/(this._samples+1),f.blending=bo);const[x,g,A,p]=r,y=s.width,b=s.height;f.resolution.set(y*A,b*p),f.sobolTexture=a.texture,f.stratifiedTexture.init(20,f.bounces+f.transmissiveBounces+5),f.stratifiedTexture.next(),f.seed++;const B=this.tiles.x||1,C=this.tiles.y||1,F=B*C,w=Math.ceil(y*A),T=Math.ceil(b*p),S=Math.floor(x*y),E=Math.floor(g*b),M=Math.ceil(w/B),R=Math.ceil(T/C);for(let P=0;P<C;P++)for(let _=0;_<B;_++){f.cameraWorldMatrix.copy(l.matrixWorld),f.invProjectionMatrix.copy(l.projectionMatrixInverse);let G=0;l.projectionMatrix.elements[15]>0&&(G=1),l.isEquirectCamera&&(G=2),f.setDefine("CAMERA_TYPE",G);const j=n.getRenderTarget(),L=n.autoClear,U=n.getScissorTest();n.getScissor(h),n.getViewport(c);let Q=_,J=P;if(!this.stableTiles){const he=this._currentTile%(B*C);Q=he%B,J=~~(he/B),this._currentTile=he+1}const fe=C-J-1;s.scissor.set(S+Q*M,E+fe*R,Math.min(M,w-Q*M),Math.min(R,T-fe*R)),s.viewport.set(S,E,w,T),n.setRenderTarget(s),n.setScissorTest(!0),n.autoClear=!1,e.render(n),n.setViewport(c),n.setScissor(h),n.setScissorTest(U),n.setRenderTarget(j),n.autoClear=L,o&&(d.target1=m.texture,d.target2=s.texture,n.setRenderTarget(v),t.render(n),n.setRenderTarget(j)),this._samples+=1/F,_===B-1&&P===C-1&&(this._samples=Math.round(this._samples)),yield}[m,v]=[v,m]}}const Mi=new te;class Fc{get material(){return this._fsQuad.material}set material(e){this._fsQuad.material=e}get target(){return this._alpha?this._blendTargets[1]:this._primaryTarget}set alpha(e){this._alpha!==e&&(e||(this._blendTargets[0].dispose(),this._blendTargets[1].dispose()),this._alpha=e,this.reset())}get alpha(){return this._alpha}get samples(){return this._samples}constructor(e){this.camera=null,this.tiles=new Be(1,1),this.stableNoise=!1,this.stableTiles=!0,this._samples=0,this._subframe=new vt(0,0,1,1),this._opacityFactor=1,this._renderer=e,this._alpha=!1,this._fsQuad=new yt(null),this._blendQuad=new yt(new vc),this._task=null,this._currentTile=0,this._sobolTarget=new Cc().generate(e);const t=e.extensions.get("OES_texture_float_linear");this._primaryTarget=new ms(1,1,{format:Z,type:t?ie:ae}),this._blendTargets=[new ms(1,1,{format:Z,type:t?ie:ae}),new ms(1,1,{format:Z,type:t?ie:ae})]}setSize(e,t){e=Math.ceil(e),t=Math.ceil(t),!(this._primaryTarget.width===e&&this._primaryTarget.height===t)&&(this._primaryTarget.setSize(e,t),this._blendTargets[0].setSize(e,t),this._blendTargets[1].setSize(e,t),this.reset())}dispose(){this._primaryTarget.dispose(),this._blendTargets[0].dispose(),this._blendTargets[1].dispose(),this._sobolTarget.dispose(),this._fsQuad.dispose(),this._blendQuad.dispose(),this._task=null}reset(){const{_renderer:e,_primaryTarget:t,_blendTargets:s}=this,i=e.getRenderTarget(),a=e.getClearAlpha();e.getClearColor(Mi),e.setRenderTarget(t),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(s[0]),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(s[1]),e.setClearColor(0,0),e.clearColor(),e.setClearColor(Mi,a),e.setRenderTarget(i),this._samples=0,this._task=null,this.stableNoise&&(this.material.seed=0)}update(){this._task||(this._task=Tc.call(this)),this._task.next()}}function Sc(n,e,t){const s=n.index,a=n.attributes.position.count,r=s?s.count:a;let o=n.groups;o.length===0&&(o=[{count:r,start:0,materialIndex:0}]);let l;t.length<=255?l=new Uint8Array(a):l=new Uint16Array(a);for(let f=0;f<o.length;f++){const h=o[f],c=h.start,d=h.count,m=Math.min(d,r-c),v=Array.isArray(e)?e[h.materialIndex]:e,x=t.indexOf(v);for(let g=0;g<m;g++){let A=c+g;s&&(A=s.getX(A)),l[A]=x}}return new X(l,1,!1)}function Mc(n,e){const{attributes:t=[],normalMapRequired:s=!1}=e;if(!n.attributes.normal&&t&&t.includes("normal")&&n.computeVertexNormals(),!n.attributes.uv&&t&&t.includes("uv")){const i=n.attributes.position.count;n.setAttribute("uv",new X(new Float32Array(i*2),2,!1))}if(!n.attributes.uv2&&t&&t.includes("uv2")){const i=n.attributes.position.count;n.setAttribute("uv2",new X(new Float32Array(i*2),2,!1))}if(!n.attributes.tangent&&t&&t.includes("tangent"))if(s)n.index===null&&(n=Bo(n)),n.computeTangents();else{const i=n.attributes.position.count;n.setAttribute("tangent",new X(new Float32Array(i*4),4,!1))}if(!n.attributes.color&&t&&t.includes("color")){const i=n.attributes.position.count,a=new Float32Array(i*4);a.fill(1),n.setAttribute("color",new X(a,4))}if(!n.index){const i=n.attributes.position.count,a=new Array(i);for(let r=0;r<i;r++)a[r]=r;n.setIndex(a)}}const wc=new Oe;function Dc(){const n=new Fe;return n.setAttribute("position",new X(new Float32Array(9),3)),new et(n,wc)}class Ec{get initialized(){return!!this.bvh}constructor(e){Array.isArray(e)||(e=[e]);const t=[...e];t.length===0&&t.push(Dc()),this.bvhOptions={},this.attributes=["position","normal","tangent","color","uv","uv2"],this.objects=t,this.bvh=null,this.geometry=new Fe,this.materials=null,this.textures=null,this.lights=[],this.staticGeometryGenerator=new Si(this.objects)}reset(){this.bvh=null,this.geometry.dispose(),this.geometry=new Fe,this.materials=null,this.textures=null,this.lights=[],this.staticGeometryGenerator=new Si(this.objects)}dispose(){}prepScene(){if(this.bvh!==null)return;const{objects:e,staticGeometryGenerator:t,geometry:s,lights:i,attributes:a}=this;for(let f=0,h=e.length;f<h;f++)e[f].traverse(c=>{if(c.isMesh){const d=!!c.material.normalMap;Mc(c.geometry,{attributes:a,normalMapRequired:d})}else(c.isRectAreaLight||c.isSpotLight||c.isPointLight||c.isDirectionalLight)&&i.push(c)});const r=new Set,o=t.getMaterials();o.forEach(f=>{for(const h in f){const c=f[h];c&&c.isTexture&&r.add(c)}}),t.attributes=a,t.generate(s);const l=Sc(s,o,o);s.setAttribute("materialIndex",l),s.clearGroups(),this.materials=o,this.textures=Array.from(r)}generate(){const{objects:e,staticGeometryGenerator:t,geometry:s,bvhOptions:i}=this;if(this.bvh===null)return this.prepScene(),this.bvh=new Un(s,{strategy:pr,maxLeafTris:1,...i}),{lights:this.lights,bvh:this.bvh,materials:this.materials,textures:this.textures,objects:e};{const{bvh:a}=this;return t.generate(s),a.refit(),{lights:this.lights,bvh:this.bvh,materials:this.materials,textures:this.textures,objects:e}}}}class Rc extends In{set bokehSize(e){this.fStop=this.getFocalLength()/e}get bokehSize(){return this.getFocalLength()/this.fStop}constructor(...e){super(...e),this.fStop=1.4,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=25,this.anamorphicRatio=1}copy(e,t){return super.copy(e,t),this.fStop=e.fStop,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio,this}}function Sn(n){return`${n.source.uuid}:${n.colorSpace}`}function Sr(n){const e=new Set,t=[];for(let s=0,i=n.length;s<i;s++){const a=n[s],r=Sn(a);e.has(r)||(e.add(r),t.push(a))}return t}const Mr=45,ht=Mr*4,wi=14*4+0,Di=14*4+1;class Ic{constructor(){this._features={}}isUsed(e){return e in this._features}setUsed(e,t=!0){t===!1?delete this._features[e]:this._features[e]=!0}reset(){this._features={}}}class Pc extends ye{constructor(){super(new Float32Array(4),1,1),this.format=Z,this.type=ie,this.wrapS=Je,this.wrapT=Je,this.minFilter=q,this.magFilter=q,this.generateMipmaps=!1,this.threeCompatibilityTransforms=!1,this.features=new Ic}setCastShadow(e,t){const s=this.image.data,i=e*ht+Di;s[i]=t?0:1}getCastShadow(e){const t=this.image.data,s=e*ht+Di;return!t[s]}setMatte(e,t){const s=this.image.data,i=e*ht+wi;s[i]=t?1:0}getMatte(e){const t=this.image.data,s=e*ht+wi;return!!t[s]}updateFrom(e,t){function s(g,A,p=-1){if(A in g&&g[A]){const y=Sn(g[A]);return v[y]}else return p}function i(g,A,p){return A in g?g[A]:p}function a(g){return g.map||g.specularMap||g.displacementMap||g.normalMap||g.bumpMap||g.roughnessMap||g.metalnessMap||g.alphaMap||g.emissiveMap||g.clearcoatMap||g.clearcoatNormalMap||g.clearcoatRoughnessMap||g.iridescenceMap||g.iridescenceThicknessMap||g.specularIntensityMap||g.specularColorMap||g.transmissionMap||g.thicknessMap||g.sheenColorMap||g.sheenRoughnessMap||null}function r(g,A,p,y){let b;if(h?b=a(g):b=g[A]&&g[A].isTexture?g[A]:null,b){const B=b.matrix.elements;let C=0;p[y+C++]=B[0],p[y+C++]=B[3],p[y+C++]=B[6],C++,p[y+C++]=B[1],p[y+C++]=B[4],p[y+C++]=B[7],C++}return 8}let o=0;const l=e.length*Mr,f=Math.ceil(Math.sqrt(l))||1,{threeCompatibilityTransforms:h,image:c,features:d}=this,m=Sr(t),v={};for(let g=0,A=m.length;g<A;g++)v[Sn(m[g])]=g;c.width!==f&&(this.dispose(),c.data=new Float32Array(f*f*4),c.width=f,c.height=f);const x=c.data;d.reset();for(let g=0,A=e.length;g<A;g++){const p=e[g];if(p.isFogVolumeMaterial){d.setUsed("FOG");for(let B=0;B<ht;B++)x[o+B]=0;x[o+0*4+0]=p.color.r,x[o+0*4+1]=p.color.g,x[o+0*4+2]=p.color.b,x[o+2*4+3]=i(p,"emissiveIntensity",0),x[o+3*4+0]=p.emissive.r,x[o+3*4+1]=p.emissive.g,x[o+3*4+2]=p.emissive.b,x[o+13*4+1]=p.density,x[o+13*4+3]=0,x[o+14*4+2]=4,o+=ht;continue}x[o++]=p.color.r,x[o++]=p.color.g,x[o++]=p.color.b,x[o++]=s(p,"map"),x[o++]=i(p,"metalness",0),x[o++]=s(p,"metalnessMap"),x[o++]=i(p,"roughness",0),x[o++]=s(p,"roughnessMap"),x[o++]=i(p,"ior",1.5),x[o++]=i(p,"transmission",0),x[o++]=s(p,"transmissionMap"),x[o++]=i(p,"emissiveIntensity",0),"emissive"in p?(x[o++]=p.emissive.r,x[o++]=p.emissive.g,x[o++]=p.emissive.b):(x[o++]=0,x[o++]=0,x[o++]=0),x[o++]=s(p,"emissiveMap"),x[o++]=s(p,"normalMap"),"normalScale"in p?(x[o++]=p.normalScale.x,x[o++]=p.normalScale.y):(x[o++]=1,x[o++]=1),x[o++]=i(p,"clearcoat",0),x[o++]=s(p,"clearcoatMap"),x[o++]=i(p,"clearcoatRoughness",0),x[o++]=s(p,"clearcoatRoughnessMap"),x[o++]=s(p,"clearcoatNormalMap"),"clearcoatNormalScale"in p?(x[o++]=p.clearcoatNormalScale.x,x[o++]=p.clearcoatNormalScale.y):(x[o++]=1,x[o++]=1),o++,x[o++]=i(p,"sheen",0),"sheenColor"in p?(x[o++]=p.sheenColor.r,x[o++]=p.sheenColor.g,x[o++]=p.sheenColor.b):(x[o++]=0,x[o++]=0,x[o++]=0),x[o++]=s(p,"sheenColorMap"),x[o++]=i(p,"sheenRoughness",0),x[o++]=s(p,"sheenRoughnessMap"),x[o++]=s(p,"iridescenceMap"),x[o++]=s(p,"iridescenceThicknessMap"),x[o++]=i(p,"iridescence",0),x[o++]=i(p,"iridescenceIOR",1.3);const y=i(p,"iridescenceThicknessRange",[100,400]);x[o++]=y[0],x[o++]=y[1],"specularColor"in p?(x[o++]=p.specularColor.r,x[o++]=p.specularColor.g,x[o++]=p.specularColor.b):(x[o++]=1,x[o++]=1,x[o++]=1),x[o++]=s(p,"specularColorMap"),x[o++]=i(p,"specularIntensity",1),x[o++]=s(p,"specularIntensityMap");const b=i(p,"thickness",0)===0&&i(p,"attenuationDistance",1/0)===1/0;if(x[o++]=Number(b),o++,"attenuationColor"in p?(x[o++]=p.attenuationColor.r,x[o++]=p.attenuationColor.g,x[o++]=p.attenuationColor.b):(x[o++]=1,x[o++]=1,x[o++]=1),x[o++]=i(p,"attenuationDistance",1/0),x[o++]=s(p,"alphaMap"),x[o++]=p.opacity,x[o++]=p.alphaTest,!b&&p.transmission>0)x[o++]=0;else switch(p.side){case As:x[o++]=1;break;case wn:x[o++]=-1;break;case Ss:x[o++]=0;break}o++,o++,x[o++]=Number(p.vertexColors)|Number(p.flatShading)<<1,x[o++]=Number(p.transparent),o+=r(p,"map",x,o),o+=r(p,"metalnessMap",x,o),o+=r(p,"roughnessMap",x,o),o+=r(p,"transmissionMap",x,o),o+=r(p,"emissiveMap",x,o),o+=r(p,"normalMap",x,o),o+=r(p,"clearcoatMap",x,o),o+=r(p,"clearcoatNormalMap",x,o),o+=r(p,"clearcoatRoughnessMap",x,o),o+=r(p,"sheenColorMap",x,o),o+=r(p,"sheenRoughnessMap",x,o),o+=r(p,"iridescenceMap",x,o),o+=r(p,"iridescenceThicknessMap",x,o),o+=r(p,"specularColorMap",x,o),o+=r(p,"specularIntensityMap",x,o)}this.needsUpdate=!0}}const Ei=new te;class _c extends Zi{constructor(...e){super(...e);const t=this.texture;t.format=Z,t.type=fn,t.minFilter=ee,t.magFilter=ee,t.wrapS=Ue,t.wrapT=Ue,t.setTextures=(...i)=>{this.setTextures(...i)};const s=new yt(new Gc);this.fsQuad=s}setTextures(e,t,s,i){const a=Sr(i),r=e.getRenderTarget(),o=e.toneMapping,l=e.getClearAlpha();e.getClearColor(Ei);const f=a.length||1;this.setSize(t,s,f),e.setClearColor(0,0),e.toneMapping=$i;const h=this.fsQuad;for(let c=0,d=f;c<d;c++){const m=a[c];m&&(m.matrixAutoUpdate=!1,m.matrix.identity(),h.material.map=m,e.setRenderTarget(this,c),h.render(e),m.updateMatrix(),m.matrixAutoUpdate=!0)}h.material.map=null,e.setClearColor(Ei,l),e.setRenderTarget(r),e.toneMapping=o}dispose(){super.dispose(),this.fsQuad.dispose()}}class Gc extends Mn{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}constructor(){super({uniforms:{map:{value:null}},vertexShader:`
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
			`})}}function kt(n){const e=new Uint16Array(n.length);for(let t=0,s=n.length;t<s;++t)e[t]=He.toHalfFloat(n[t]);return e}function Ri(n,e,t=0,s=n.length){let i=t,a=t+s-1;for(;i<a;){const r=i+a>>1;n[r]<e?i=r+1:a=r}return i-t}function jc(n,e,t){return .2126*n+.7152*e+.0722*t}function Lc(n,e=ae){const t=n.clone();t.source=new Co({...t.image});const{width:s,height:i,data:a}=t.image;let r=a;if(t.type!==e){e===ae?r=new Uint16Array(a.length):r=new Float32Array(a.length);let o;a instanceof Int8Array||a instanceof Int16Array||a instanceof Int32Array?o=2**(8*a.BYTES_PER_ELEMENT-1)-1:o=2**(8*a.BYTES_PER_ELEMENT)-1;for(let l=0,f=a.length;l<f;l++){let h=a[l];t.type===ae&&(h=He.fromHalfFloat(a[l])),t.type!==ie&&t.type!==ae&&(h/=o),e===ae&&(r[l]=He.toHalfFloat(h))}t.image.data=r,t.type=e}if(t.flipY){const o=r;r=r.slice();for(let l=0;l<i;l++)for(let f=0;f<s;f++){const h=i-l-1,c=4*(l*s+f),d=4*(h*s+f);r[d+0]=o[c+0],r[d+1]=o[c+1],r[d+2]=o[c+2],r[d+3]=o[c+3]}t.flipY=!1,t.image.data=r}return t}class Hc{constructor(){const e=new ye(kt(new Float32Array([1,1,1,1])),1,1);e.type=ae,e.format=Z,e.minFilter=ee,e.magFilter=ee,e.wrapS=Ue,e.wrapT=Ue,e.generateMipmaps=!1,e.needsUpdate=!0;const t=new ye(kt(new Float32Array([0,1])),1,2);t.type=ae,t.format=At,t.minFilter=ee,t.magFilter=ee,t.generateMipmaps=!1,t.needsUpdate=!0;const s=new ye(kt(new Float32Array([0,0,1,1])),2,2);s.type=ae,s.format=At,s.minFilter=ee,s.magFilter=ee,s.generateMipmaps=!1,s.needsUpdate=!0,this.map=e,this.marginalWeights=t,this.conditionalWeights=s,this.totalSum=1}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(e){const t=Lc(e);t.wrapS=Ue,t.wrapT=Je;const{width:s,height:i,data:a}=t.image,r=new Float32Array(s*i),o=new Float32Array(s*i),l=new Float32Array(i),f=new Float32Array(i);let h=0,c=0;for(let g=0;g<i;g++){let A=0;for(let p=0;p<s;p++){const y=g*s+p,b=He.fromHalfFloat(a[4*y+0]),B=He.fromHalfFloat(a[4*y+1]),C=He.fromHalfFloat(a[4*y+2]),F=jc(b,B,C);A+=F,h+=F,r[y]=F,o[y]=A}if(A!==0)for(let p=g*s,y=g*s+s;p<y;p++)r[p]/=A,o[p]/=A;c+=A,l[g]=A,f[g]=c}if(c!==0)for(let g=0,A=l.length;g<A;g++)l[g]/=c,f[g]/=c;const d=new Uint16Array(i),m=new Uint16Array(s*i);for(let g=0;g<i;g++){const A=(g+1)/i,p=Ri(f,A);d[g]=He.toHalfFloat((p+.5)/i)}for(let g=0;g<i;g++)for(let A=0;A<s;A++){const p=g*s+A,y=(A+1)/s,b=Ri(o,y,g*s,s);m[p]=He.toHalfFloat((b+.5)/s)}this.dispose();const{marginalWeights:v,conditionalWeights:x}=this;v.image={width:i,height:1,data:d},v.needsUpdate=!0,x.image={width:s,height:i,data:m},x.needsUpdate=!0,this.totalSum=h,this.map=t}}class Oc{constructor(){this.bokehSize=0,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=10,this.anamorphicRatio=1}updateFrom(e){e instanceof Rc?(this.bokehSize=e.bokehSize,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio):(this.bokehSize=0,this.apertureRotation=0,this.apertureBlades=0,this.focusDistance=10,this.anamorphicRatio=1)}}const on=6,kc=0,Nc=1,Uc=2,zc=3,Jc=4;class Wc{constructor(){const e=new ye(new Float32Array(4),1,1);e.format=Z,e.type=ie,e.wrapS=Je,e.wrapT=Je,e.generateMipmaps=!1,e.minFilter=q,e.magFilter=q,this.tex=e,this.count=0}updateFrom(e,t=[]){const s=this.tex,i=Math.max(e.length*on,1),a=Math.ceil(Math.sqrt(i));s.image.width!==a&&(s.dispose(),s.image.data=new Float32Array(a*a*4),s.image.width=a,s.image.height=a);const r=s.image.data,o=new I,l=new I,f=new Y,h=new Fs,c=new I,d=new I,m=new I(0,1,0);for(let v=0,x=e.length;v<x;v++){const g=e[v],A=v*on*4;let p=0;for(let b=0;b<on*4;b++)r[A+b]=0;g.getWorldPosition(l),r[A+p++]=l.x,r[A+p++]=l.y,r[A+p++]=l.z;let y=kc;if(g.isRectAreaLight&&g.isCircular?y=Nc:g.isSpotLight?y=Uc:g.isDirectionalLight?y=zc:g.isPointLight&&(y=Jc),r[A+p++]=y,r[A+p++]=g.color.r,r[A+p++]=g.color.g,r[A+p++]=g.color.b,r[A+p++]=g.intensity,g.getWorldQuaternion(h),g.isRectAreaLight)o.set(g.width,0,0).applyQuaternion(h),r[A+p++]=o.x,r[A+p++]=o.y,r[A+p++]=o.z,p++,l.set(0,g.height,0).applyQuaternion(h),r[A+p++]=l.x,r[A+p++]=l.y,r[A+p++]=l.z,r[A+p++]=o.cross(l).length()*(g.isCircular?Math.PI/4:1);else if(g.isSpotLight){const b=g.radius||0;c.setFromMatrixPosition(g.matrixWorld),d.setFromMatrixPosition(g.target.matrixWorld),f.lookAt(c,d,m),h.setFromRotationMatrix(f),o.set(1,0,0).applyQuaternion(h),r[A+p++]=o.x,r[A+p++]=o.y,r[A+p++]=o.z,p++,l.set(0,1,0).applyQuaternion(h),r[A+p++]=l.x,r[A+p++]=l.y,r[A+p++]=l.z,r[A+p++]=Math.PI*b*b,r[A+p++]=b,r[A+p++]=g.decay,r[A+p++]=g.distance,r[A+p++]=Math.cos(g.angle),r[A+p++]=Math.cos(g.angle*(1-g.penumbra)),r[A+p++]=g.iesTexture?t.indexOf(g.iesTexture):-1}else if(g.isPointLight){const b=o.setFromMatrixPosition(g.matrixWorld);r[A+p++]=b.x,r[A+p++]=b.y,r[A+p++]=b.z,p++,p+=4,p+=1,r[A+p++]=g.decay,r[A+p++]=g.distance}else if(g.isDirectionalLight){const b=o.setFromMatrixPosition(g.matrixWorld),B=l.setFromMatrixPosition(g.target.matrixWorld);d.subVectors(b,B).normalize(),r[A+p++]=d.x,r[A+p++]=d.y,r[A+p++]=d.z}}s.needsUpdate=!0,this.count=e.length}}function Ii(n){const e=this,t=n.split(`
`);let s=0,i;e.verAngles=[],e.horAngles=[],e.candelaValues=[],e.tiltData={},e.tiltData.angles=[],e.tiltData.mulFactors=[];function a(c){return c=c.trim(),c=c.replace(/,/g," "),c=c.replace(/\s\s+/g," "),c.split(" ")}function r(c,d){for(;;){const m=t[s++],v=a(m);for(let x=0;x<v.length;++x)d.push(Number(v[x]));if(d.length===c)break}}function o(){let c=t[s++],d=a(c);e.tiltData.lampToLumGeometry=Number(d[0]),c=t[s++],d=a(c),e.tiltData.numAngles=Number(d[0]),r(e.tiltData.numAngles,e.tiltData.angles),r(e.tiltData.numAngles,e.tiltData.mulFactors)}function l(){const c=[];r(10,c),e.count=Number(c[0]),e.lumens=Number(c[1]),e.multiplier=Number(c[2]),e.numVerAngles=Number(c[3]),e.numHorAngles=Number(c[4]),e.gonioType=Number(c[5]),e.units=Number(c[6]),e.width=Number(c[7]),e.length=Number(c[8]),e.height=Number(c[9])}function f(){const c=[];r(3,c),e.ballFactor=Number(c[0]),e.blpFactor=Number(c[1]),e.inputWatts=Number(c[2])}for(;i=t[s++],!i.includes("TILT"););i.includes("NONE")||i.includes("INCLUDE")&&o(),l(),f();for(let c=0;c<e.numHorAngles;++c)e.candelaValues.push([]);r(e.numVerAngles,e.verAngles),r(e.numHorAngles,e.horAngles);for(let c=0;c<e.numHorAngles;++c)r(e.numVerAngles,e.candelaValues[c]);for(let c=0;c<e.numHorAngles;++c)for(let d=0;d<e.numVerAngles;++d)e.candelaValues[c][d]*=e.candelaValues[c][d]*e.multiplier*e.ballFactor*e.blpFactor;let h=-1;for(let c=0;c<e.numHorAngles;++c)for(let d=0;d<e.numVerAngles;++d){const m=e.candelaValues[c][d];h=h<m?m:h}if(h>0)for(let c=0;c<e.numHorAngles;++c)for(let d=0;d<e.numVerAngles;++d)e.candelaValues[c][d]/=h}class Kc extends En{_getIESValues(e){const a=new Float32Array(64800);function r(f,h){let c=0,d=0,m=0,v=0,x=0,g=0;for(let T=0;T<e.numHorAngles-1;++T)if(h<e.horAngles[T+1]||T==e.numHorAngles-2){d=T,m=e.horAngles[T],v=e.horAngles[T+1];break}for(let T=0;T<e.numVerAngles-1;++T)if(f<e.verAngles[T+1]||T==e.numVerAngles-2){c=T,x=e.verAngles[T],g=e.verAngles[T+1];break}const A=v-m,p=g-x;if(p===0)return 0;const y=A===0?0:(h-m)/A,b=(f-x)/p,B=A===0?d:d+1,C=Lt.lerp(e.candelaValues[d][c],e.candelaValues[B][c],y),F=Lt.lerp(e.candelaValues[d][c+1],e.candelaValues[B][c+1],y);return Lt.lerp(C,F,b)}const o=e.horAngles[0],l=e.horAngles[e.numHorAngles-1];for(let f=0;f<64800;++f){let h=f%360;const c=Math.floor(f/360);l-o!==0&&(h<o||h>=l)&&(h%=l*2,h>l&&(h=l*2-h)),a[f]=r(c,h)}return a}load(e,t,s,i){const a=new Nt(this.manager);a.setResponseType("text"),a.setCrossOrigin(this.crossOrigin),a.setWithCredentials(this.withCredentials),a.setPath(this.path),a.setRequestHeader(this.requestHeader);const r=new ye(null,360,180,At,ae);return r.minFilter=ee,r.magFilter=ee,a.load(e,o=>{const l=new Ii(o);r.image.data=kt(this._getIESValues(l)),r.needsUpdate=!0,t!==void 0&&t(r)},s,i),r}parse(e){const t=new Ii(e),s=new ye(null,360,180,At,ae);return s.minFilter=ee,s.magFilter=ee,s.image.data=kt(this._getIESValues(t)),s.needsUpdate=!0,s}}const Pi=new te;class Qc extends Zi{constructor(...e){super(...e);const t=this.texture;t.format=Z,t.type=ae,t.minFilter=ee,t.magFilter=ee,t.wrapS=Je,t.wrapT=Je,t.generateMipmaps=!1,t.updateFrom=(...i)=>{this.updateFrom(...i)};const s=new yt(new Oe);this.fsQuad=s,this.iesLoader=new Kc}async updateFrom(e,t){const s=e.getRenderTarget(),i=e.toneMapping,a=e.getClearAlpha();e.getClearColor(Pi);const r=t.length||1;this.setSize(360,180,r),e.setClearColor(0,0),e.toneMapping=$i;const o=this.fsQuad;for(let l=0,f=r;l<f;l++){const h=t[l];h&&(h.matrixAutoUpdate=!1,h.matrix.identity(),o.material.map=h,o.material.transparent=!0,e.setRenderTarget(this,l),o.render(e),h.updateMatrix(),h.matrixAutoUpdate=!0)}o.material.map=null,e.setClearColor(Pi,a),e.setRenderTarget(s),e.toneMapping=i,o.dispose()}dispose(){super.dispose(),this.fsQuad.dispose()}}const Vc=`

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
`;function _i(n,e,t,s,i){if(e>s)throw new Error;const a=n.length/e,r=n.constructor.BYTES_PER_ELEMENT*8;let o=1;switch(n.constructor){case Uint8Array:case Uint16Array:case Uint32Array:o=2**r-1;break;case Int8Array:case Int16Array:case Int32Array:o=2**(r-1)-1;break}for(let l=0;l<a;l++){const f=4*l,h=e*l;for(let c=0;c<s;c++)t[i+f+c]=e>=c+1?n[h+c]/o:0}}class Xc extends To{constructor(){super(),this._textures=[],this.type=ie,this.format=Z,this.internalFormat="RGBA32F"}updateAttribute(e,t){const s=this._textures[e];s.updateFrom(t);const i=s.image,a=this.image;if(i.width!==a.width||i.height!==a.height)throw new Error("FloatAttributeTextureArray: Attribute must be the same dimensions when updating single layer.");const{width:r,height:o,data:l}=a,h=r*o*4*e;let c=t.itemSize;c===3&&(c=4),_i(s.image.data,c,l,4,h),this.dispose(),this.needsUpdate=!0}setAttributes(e){const t=e[0].count,s=e.length;for(let c=0,d=s;c<d;c++)if(e[c].count!==t)throw new Error("FloatAttributeTextureArray: All attributes must have the same item count.");const i=this._textures;for(;i.length<s;){const c=new Cr;i.push(c)}for(;i.length>s;)i.pop();for(let c=0,d=s;c<d;c++)i[c].updateFrom(e[c]);const r=i[0].image,o=this.image;(r.width!==o.width||r.height!==o.height||r.depth!==s)&&(o.width=r.width,o.height=r.height,o.depth=s,o.data=new Float32Array(o.width*o.height*o.depth*4));const{data:l,width:f,height:h}=o;for(let c=0,d=s;c<d;c++){const m=i[c],x=f*h*4*c;let g=e[c].itemSize;g===3&&(g=4),_i(m.image.data,g,l,4,x)}this.dispose(),this.needsUpdate=!0}}class Yc extends Xc{updateNormalAttribute(e){this.updateAttribute(0,e)}updateTangentAttribute(e){this.updateAttribute(1,e)}updateUvAttribute(e){this.updateAttribute(2,e)}updateColorAttribute(e){this.updateAttribute(3,e)}updateFrom(e,t,s,i){this.setAttributes([e,t,s,i])}}const qc=`

	struct PhysicalCamera {

		float focusDistance;
		float anamorphicRatio;
		float bokehSize;
		int apertureBlades;
		float apertureRotation;

	};

`,Zc=`

	struct EquirectHdrInfo {

		sampler2D marginalWeights;
		sampler2D conditionalWeights;
		sampler2D map;

		float totalSum;

	};

`,$c=`

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

`,eu=`

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

`,tu=`

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

`,su=`

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

`,nu=`

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

`,iu=`

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

`,ru=`

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

	${su}
	${nu}
	${iu}

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

`,ou=`

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

`,au=`

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

`,lu=`

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

`,cu=`

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


`,uu=`

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

`,du=`

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

`,fu=`

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

`,hu=`

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

`,Gi=`

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
`,pu=`

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

`,mu=`

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

`,gu=`

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

`,xu=`

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

`,Au=`

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
`,vu=`

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

`,yu=`

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

`;function bu(n){for(let e=n.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1)),s=n[e];n[e]=n[t],n[t]=s}return n}class Bu{constructor(e,t){const s=e**t,i=new Uint16Array(s);let a=s;for(let r=0;r<s;r++)i[r]=r;this.samples=new Float32Array(t),this.strataCount=e,this.restart=function(){a=0},this.next=function(){const{samples:r}=this;a>=i.length&&(bu(i),this.restart());let o=i[a++];for(let l=0;l<t;l++)r[l]=(o%e+Math.random())/e,o=Math.floor(o/e);return r}}}class Cu{constructor(e,t){let s=0;for(const o of t)s+=o;const i=new Float32Array(s),a=[];let r=0;for(const o of t){const l=new Bu(e,o);l.samples=new Float32Array(i.buffer,r,l.samples.length),r+=l.samples.length*4,a.push(l)}this.samples=i,this.strataCount=e,this.next=function(){for(const o of a)o.next();return i},this.restart=function(){for(const o of a)o.restart()}}}class Tu extends ye{constructor(e=1,t=1,s=8){super(new Float32Array(1),1,1,Z,ie),this.minFilter=q,this.magFilter=q,this.strata=s,this.sampler=null,this.init(e,t,s)}init(e,t,s=this.strata){const{image:i}=this;if(i.width===t&&i.height===e)return;const a=new Array(e*t).fill(4),r=new Cu(s,a);i.width=t,i.height=e,i.data=r.samples,this.sampler=r,this.dispose(),this.next()}next(){this.sampler.next(),this.needsUpdate=!0}}function Fu(n,e=Math.random){for(let t=n.length-1;t>0;t--){const s=~~((e()-1e-6)*t),i=n[t];n[t]=n[s],n[s]=i}}function Su(n,e){n.fill(0);for(let t=0;t<e;t++)n[t]=1}class ji{constructor(e){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(e),this.setSigma(1.5)}findVoid(){const{score:e,binaryPattern:t}=this;let s=1/0,i=-1;for(let a=0,r=t.length;a<r;a++){if(t[a]!==0)continue;const o=e[a];o<s&&(s=o,i=a)}return i}findCluster(){const{score:e,binaryPattern:t}=this;let s=-1/0,i=-1;for(let a=0,r=t.length;a<r;a++){if(t[a]!==1)continue;const o=e[a];o>s&&(s=o,i=a)}return i}setSigma(e){if(e===this.sigma)return;const t=~~(Math.sqrt(10*2*e**2)+1),s=2*t+1,i=new Float32Array(s*s),a=e*e;for(let r=-t;r<=t;r++)for(let o=-t;o<=t;o++){const l=(t+o)*s+r+t,f=r*r+o*o;i[l]=Math.E**(-f/(2*a))}this.lookupTable=i,this.sigma=e,this.radius=t}resize(e){this.size!==e&&(this.size=e,this.score=new Float32Array(e*e),this.binaryPattern=new Uint8Array(e*e))}invert(){const{binaryPattern:e,score:t,size:s}=this;t.fill(0);for(let i=0,a=e.length;i<a;i++)if(e[i]===0){const r=~~(i/s),o=i-r*s;this.updateScore(o,r,1),e[i]=1}else e[i]=0}updateScore(e,t,s){const{size:i,score:a,lookupTable:r}=this,o=this.radius,l=2*o+1;for(let f=-o;f<=o;f++)for(let h=-o;h<=o;h++){const c=(o+h)*l+f+o,d=r[c];let m=e+f;m=m<0?i+m:m%i;let v=t+h;v=v<0?i+v:v%i;const x=v*i+m;a[x]+=s*d}}addPointIndex(e){this.binaryPattern[e]=1;const t=this.size,s=~~(e/t),i=e-s*t;this.updateScore(i,s,1),this.count++}removePointIndex(e){this.binaryPattern[e]=0;const t=this.size,s=~~(e/t),i=e-s*t;this.updateScore(i,s,-1),this.count--}copy(e){this.resize(e.size),this.score.set(e.score),this.binaryPattern.set(e.binaryPattern),this.setSigma(e.sigma),this.count=e.count}}class Mu{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new ji(1),this.savedSamples=new ji(1)}generate(){const{samples:e,savedSamples:t,sigma:s,majorityPointsRatio:i,size:a}=this;e.resize(a),e.setSigma(s);const r=Math.floor(a*a*i),o=e.binaryPattern;Su(o,r),Fu(o,this.random);for(let c=0,d=o.length;c<d;c++)o[c]===1&&e.addPointIndex(c);for(;;){const c=e.findCluster();e.removePointIndex(c);const d=e.findVoid();if(c===d){e.addPointIndex(c);break}e.addPointIndex(d)}const l=new Uint32Array(a*a);t.copy(e);let f;for(f=e.count-1;f>=0;){const c=e.findCluster();e.removePointIndex(c),l[c]=f,f--}const h=a*a;for(f=t.count;f<h/2;){const c=t.findVoid();t.addPointIndex(c),l[c]=f,f++}for(t.invert();f<h;){const c=t.findCluster();t.removePointIndex(c),l[c]=f,f++}return{data:l,maxValue:h}}}function wu(n){return n>=3?4:n}function Du(n){switch(n){case 1:return At;case 2:return qi;default:return Z}}class Eu extends ye{constructor(e=64,t=1){super(new Float32Array(4),1,1,Z,ie),this.minFilter=q,this.magFilter=q,this.size=e,this.channels=t,this.update()}update(){const e=this.channels,t=this.size,s=new Mu;s.channels=e,s.size=t;const i=wu(e),a=Du(i);(this.image.width!==t||a!==this.format)&&(this.image.width=t,this.image.height=t,this.image.data=new Float32Array(t**2*i),this.format=a,this.dispose());const r=this.image.data;for(let o=0,l=e;o<l;o++){const f=s.generate(),h=f.data,c=f.maxValue;for(let d=0,m=h.length;d<m;d++){const v=h[d]/c;r[d*i+o]=v}}this.needsUpdate=!0}}class Ru extends zn{onBeforeRender(){this.setDefine("FEATURE_DOF",this.physicalCamera.bokehSize===0?0:1),this.setDefine("FEATURE_BACKGROUND_MAP",this.backgroundMap?1:0),this.setDefine("FEATURE_FOG",this.materials.features.isUsed("FOG")?1:0)}constructor(e){super({transparent:!0,depthWrite:!1,defines:{FEATURE_MIS:1,FEATURE_RUSSIAN_ROULETTE:1,FEATURE_DOF:1,FEATURE_BACKGROUND_MAP:0,FEATURE_FOG:1,RANDOM_TYPE:2,CAMERA_TYPE:0,DEBUG_MODE:0,ATTR_NORMAL:0,ATTR_TANGENT:1,ATTR_UV:2,ATTR_COLOR:3},uniforms:{resolution:{value:new Be},bounces:{value:10},transmissiveBounces:{value:10},physicalCamera:{value:new Oc},bvh:{value:new oc},attributesArray:{value:new Yc},materialIndexAttribute:{value:new Br},materials:{value:new Pc},textures:{value:new _c().texture},lights:{value:new Wc},iesProfiles:{value:new Qc().texture},cameraWorldMatrix:{value:new Y},invProjectionMatrix:{value:new Y},backgroundBlur:{value:0},environmentIntensity:{value:1},environmentRotation:{value:new Y},envMapInfo:{value:new Hc},backgroundMap:{value:null},seed:{value:0},opacity:{value:1},filterGlossyFactor:{value:0},backgroundAlpha:{value:1},sobolTexture:{value:null},stratifiedTexture:{value:new Tu},stratifiedOffsetTexture:{value:new Eu(64,1)}},vertexShader:`

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
				${pc}
				${gc}
				${mc}

				// uniform structs
				${qc}
				${$c}
				${Zc}
				${eu}

				// random
				#if RANDOM_TYPE == 2 	// Stratified List

					${yu}

				#elif RANDOM_TYPE == 1 	// Sobol

					${Gi}
					${Fr}
					${bc}

					#define rand(v) sobol(v)
					#define rand2(v) sobol2(v)
					#define rand3(v) sobol3(v)
					#define rand4(v) sobol4(v)

				#else 					// PCG

					${Gi}

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
				${hu}
				${fu}
				${Vc}
				${du}
				${uu}

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
				${tu}
				${cu}
				${ru}
				${au}
				${lu}
				${ou}

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

				${pu}
				${mu}
				${xu}
				${gu}
				${vu}
				${Au}

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

			`}),this.setValues(e)}}const $=.072;function zt(n){switch(n){case"sphere":return new Mo($*.52,8,6);case"star":{const e=$*.64,t=$*.25,s=$*.42,i=new Fo;for(let r=0;r<10;r++){const o=r*Math.PI*2/10-Math.PI/2,l=r%2===0?e:t;r===0?i.moveTo(Math.cos(o)*l,Math.sin(o)*l):i.lineTo(Math.cos(o)*l,Math.sin(o)*l)}i.closePath();const a=new So(i,{depth:s,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelSegments:1});return a.translate(0,0,-s/2),a}default:return new Dn($,$,$)}}function Jt({material:n,color:e}){return n==="original"?u.jsx("meshStandardMaterial",{color:e,roughness:.65,metalness:.05}):n==="fluid"?u.jsx("meshPhysicalMaterial",{color:e,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5,envMapIntensity:1}):n==="metal"?u.jsx("meshStandardMaterial",{color:e,roughness:.06,metalness:.95,envMapIntensity:2}):n==="emissive"?u.jsx("meshStandardMaterial",{color:e,emissive:e,emissiveIntensity:2.2,roughness:.55,metalness:0}):u.jsx("meshStandardMaterial",{color:e,roughness:.65,metalness:.05})}const Iu={x:1,y:1,z:1},Pu={deformation:"none",fluidDistort:.35,fluidSpeed:1.5},fs="0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)";function _u(n,e){const t=new te(e);switch(n){case"fluid":return new de({color:t,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5,envMapIntensity:1});case"metal":return new De({color:t,roughness:.06,metalness:.95,envMapIntensity:2});case"emissive":return new De({color:t,emissive:t,emissiveIntensity:2.2,roughness:.55});default:return new De({color:t,roughness:.65,metalness:.05})}}function Gu(n,e,t,s,i,a){const r=new Rn,o=t*.47,l=s*.46,f=i*.47;for(let h=0;h<e;h++)r.position.set((Math.random()-.5)*2*o,(Math.random()-.5)*2*l,(Math.random()-.5)*2*f),r.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),r.scale.set(a.x,a.y,a.z),r.updateMatrix(),n.setMatrixAt(h,r.matrix);n.instanceMatrix.needsUpdate=!0}function ju({url:n,count:e,width:t,height:s,depth:i,markSize:a,markMaterial:r,color:o}){const{scene:l}=bt(n),{normScale:f,center:h}=D.useMemo(()=>{l.updateMatrixWorld(!0);const b=new re().setFromObject(l),B=new I,C=new I;b.getSize(B),b.getCenter(C);const F=Math.max(B.x,B.y,B.z,.001);return{normScale:$/F,center:C}},[l]),c=D.useMemo(()=>{const b=t*.47,B=s*.46,C=i*.47;return Array.from({length:e},()=>({position:[(Math.random()-.5)*2*b,(Math.random()-.5)*2*B,(Math.random()-.5)*2*C],rotation:[Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2]}))},[e,t,s,i]),d=D.useMemo(()=>c.map(()=>l.clone(!0)),[l,c]);D.useEffect(()=>()=>{d.forEach(b=>b.traverse(B=>{B instanceof et&&B.geometry.dispose()}))},[d]);const m=D.useMemo(()=>r!=="original"?_u(r,o):null,[r,o]);D.useEffect(()=>()=>{m==null||m.dispose()},[m]),D.useEffect(()=>{d.forEach(b=>{b.traverse(B=>{!(B instanceof et)||!m||(B.material=m)})})},[m,d]);const v=f*a.x,x=f*a.y,g=f*a.z,A=-h.x*v,p=-h.y*x,y=-h.z*g;return u.jsx(u.Fragment,{children:d.map((b,B)=>u.jsx("group",{position:c[B].position,rotation:c[B].rotation,children:u.jsx("primitive",{object:b,position:[A,p,y],scale:[v,x,g]})},B))})}function Lu({width:n,depth:e,height:t,color:s,position:i,particleCount:a,markShape:r,markMaterial:o,markSize:l=Iu,structural:f=Pu,customModelUrl:h,labelShow:c,labelData:d}){const m=D.useRef(null),v=D.useMemo(()=>zt(r),[r]),x=D.useMemo(()=>{const A=new Dn(n,t,e),p=new wo(A);return A.dispose(),p},[n,t,e]);D.useEffect(()=>{const A=m.current;A&&Gu(A,a,n,t,e,l)},[a,n,e,t,r,l.x,l.y,l.z]),D.useEffect(()=>()=>{v.dispose()},[v]),D.useEffect(()=>()=>{x.dispose()},[x]);const g=r==="custom"&&!!h;return u.jsxs("group",{position:i,children:[u.jsx("lineSegments",{geometry:x,children:u.jsx("lineBasicMaterial",{color:"#666666",transparent:!0,opacity:.7})}),g?u.jsx(D.Suspense,{fallback:null,children:u.jsx(ju,{url:h,count:Math.max(5,a),width:n,height:t,depth:e,markSize:l,markMaterial:o,color:s})}):u.jsx("instancedMesh",{ref:m,args:[v,void 0,a],children:u.jsx(Jt,{material:o,structural:f,color:s})},`${a}-${r}`),c&&u.jsxs(u.Fragment,{children:[d.top&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[0,t/2+.3,0],userData:{isLabel:!0,labelText:d.top,labelPos:"top"}}),u.jsx(xe,{position:[0,t/2+.3,0],center:!0,style:{pointerEvents:"none"},children:u.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:fs,whiteSpace:"nowrap",userSelect:"none"},children:d.top})})]}),d.bottom&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[0,-(t/2+.3),0],userData:{isLabel:!0,labelText:d.bottom,labelPos:"bottom"}}),u.jsx(xe,{position:[0,-(t/2+.3),0],center:!0,style:{pointerEvents:"none"},children:u.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:fs,whiteSpace:"nowrap",userSelect:"none"},children:d.bottom})})]}),d.left&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[-(n/2+.2),0,0],userData:{isLabel:!0,labelText:d.left,labelPos:"left"}}),u.jsx(xe,{position:[-(n/2+.2),0,0],style:{pointerEvents:"none"},children:u.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:fs,whiteSpace:"nowrap",userSelect:"none",display:"block",textAlign:"right",transform:"translate(-100%, -50%)"},children:d.left})})]}),d.right&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[n/2+.2,0,0],userData:{isLabel:!0,labelText:d.right,labelPos:"right"}}),u.jsx(xe,{position:[n/2+.2,0,0],style:{pointerEvents:"none"},children:u.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:fs,whiteSpace:"nowrap",userSelect:"none",display:"block",transform:"translateY(-50%)"},children:d.right})})]})]})]})}function Hu(n,e){const t=new te(e);switch(n){case"fluid":return new de({color:t,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5});case"metal":return new De({color:t,roughness:.06,metalness:.95});case"emissive":return new De({color:t,emissive:t,emissiveIntensity:2.2,roughness:.55});default:return new De({color:t,roughness:.65,metalness:.05})}}function Ou({url:n,markMaterial:e,markSize:t,color:s}){const{scene:i}=bt(n),{clone:a,sx:r,sy:o,sz:l,ox:f,oy:h,oz:c}=D.useMemo(()=>{i.updateMatrixWorld(!0);const m=new re().setFromObject(i),v=new I,x=new I;m.getSize(v),m.getCenter(x);const g=Math.max(v.x,v.y,v.z,.001),A=$/g,p=A*t.x,y=A*t.y,b=A*t.z;return{clone:i.clone(!0),sx:p,sy:y,sz:b,ox:-x.x*p,oy:-x.y*y,oz:-x.z*b}},[i,t.x,t.y,t.z]),d=D.useMemo(()=>e!=="original"?Hu(e,s):null,[e,s]);return D.useEffect(()=>()=>{d==null||d.dispose()},[d]),D.useEffect(()=>{d&&a.traverse(m=>{m instanceof et&&(m.material=d)})},[d,a]),u.jsx("primitive",{object:a,position:[f,h,c],scale:[r,o,l]})}function ku({position:n,count:e,markShape:t,markMaterial:s,markSize:i,color:a,structural:r,customModelUrl:o}){const l=D.useMemo(()=>zt(t),[t]);D.useEffect(()=>()=>{l.dispose()},[l]);const f=Math.sqrt(e)*$*Math.max(i.x,i.y,i.z)*2.2,h=D.useMemo(()=>Array.from({length:e},(d,m)=>({x:(Math.random()-.5)*f,y:$*2+m*$*1.2+Math.random()*$*.5,z:(Math.random()-.5)*f,rx:Math.random()*Math.PI*2,ry:Math.random()*Math.PI*2,rz:Math.random()*Math.PI*2})),[e,f]),c=-$*.7;return u.jsxs("group",{position:n,children:[u.jsx(vs,{type:"fixed",children:u.jsx(er,{args:[3,.05,3],position:[0,c,0]})}),h.map((d,m)=>u.jsx(vs,{position:[d.x,d.y,d.z],rotation:[d.rx,d.ry,d.rz],colliders:"hull",restitution:.1,friction:.8,linearDamping:.4,angularDamping:.5,children:t==="custom"&&o?u.jsx(D.Suspense,{fallback:null,children:u.jsx(Ou,{url:o,markMaterial:s,markSize:i,color:a})}):u.jsx("mesh",{geometry:l,scale:[i.x,i.y,i.z],children:u.jsx(Jt,{material:s,structural:r,color:a})})},m))]})}function Nu(n){return 2*Math.atan(12/n)*180/Math.PI}const wr={1:[0,.5,18],2:[0,2,26],3:[0,4,64]};function Uu({level:n,fov:e,focalLength:t}){const{camera:s,controls:i}=sr(),a=D.useRef(n),r=D.useRef(t);return D.useEffect(()=>{var o,l,f;if(s instanceof In){if(a.current!==n){const[h,c,d]=wr[n];s.position.set(h,c,d),s.lookAt(0,0,0);const m=i;(o=m==null?void 0:m.target)==null||o.set(0,0,0),(l=m==null?void 0:m.update)==null||l.call(m),a.current=n}if(r.current!==t&&r.current>0){const h=t/r.current,c=i;c!=null&&c.spherical?(c.spherical.radius*=h,(f=c.update)==null||f.call(c)):s.position.multiplyScalar(h)}r.current=t,s.fov=e,s.updateProjectionMatrix()}},[s,i,n,e,t]),null}const Is=14;function Jn({url:n,material:e,color:t,sz:s}){const{scene:i}=bt(n),a=D.useMemo(()=>{const r=i.clone(!0);r.position.set(0,0,0),r.rotation.set(0,0,0),r.scale.set(1,1,1),r.updateMatrixWorld(!0);const o=new re().setFromObject(r);if(!o.isEmpty()){const l=new I;o.getSize(l);const f=Math.max(l.x,l.y,l.z,.001),h=$/f,c=new I;o.getCenter(c),r.scale.setScalar(h),r.position.set(-c.x*h,-c.y*h,-c.z*h)}if(e!=="original"){const l=e==="fluid"?new de({color:new te(t),transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5}):new De({color:new te(t),roughness:e==="metal"?.06:e==="emissive"?.55:.65,metalness:e==="metal"?.95:0,emissive:e==="emissive"?new te(t):new te(0,0,0),emissiveIntensity:e==="emissive"?2.2:0});r.traverse(f=>{f instanceof et&&(f.material=l)})}return r},[i,e,t]);return u.jsx("group",{scale:s,children:u.jsx("primitive",{object:a})})}const pt=Is*$;function Wn(n,e,t){const s=e[t%Math.max(1,e.length)],i={},a=Object.entries(n);for(const[r,o]of a)o&&(o==="weight"&&(i[r]=`${(s==null?void 0:s.percentage.toFixed(1))??"?"}%`),o==="garbageType"&&(i[r]=(s==null?void 0:s.name)??"?"),o==="count"&&(i[r]=String(e.length)));return i}const zu="0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)";function Ne({pos:n,text:e}){const t=n==="top"?"translate(-50%, -100%)":n==="bottom"?"translate(-50%, 0)":n==="left"?"translate(-100%, -50%)":"translateY(-50%)";return u.jsx("span",{"data-phys-label":"",style:{display:"block",fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:zu,whiteSpace:"nowrap",userSelect:"none",transform:t},children:e})}function xt(n,e,t){var i;const s=Math.max(...t.map(a=>a.percentage),1);return n==="weight"?.2+1.8*((((i=t[e%Math.max(1,t.length)])==null?void 0:i.percentage)??s)/s):n==="count"?Math.min(2,t.length/5):1}function Dr(n,e,t){return n==="center"?[0,0,0]:e==="X"?[0,n==="start"?-t:t,0]:[n==="start"?t:-t,0,0]}function Ju({config:n,layers:e,bindings:t,markLabelConfig:s}){var m;const i=D.useMemo(()=>zt(n.shape),[n.shape]);D.useEffect(()=>()=>{i.dispose()},[i]);const a=Math.PI/180,r=Is,o=t.markColor==="garbageType"?((m=e[0])==null?void 0:m.color)??n.color:n.color,l={x:n.size.x*(t.markSizeX?xt(t.markSizeX,0,e):1),y:n.size.y*(t.markSizeY?xt(t.markSizeY,0,e):1),z:n.size.z*(t.markSizeZ?xt(t.markSizeZ,0,e):1)},f=r*l.y*.036+.5,h=r*l.x*.036+.5,c=Wn(s.slots,e,0),d=[n.orientation.x*a,n.orientation.y*a,n.orientation.z*a];return u.jsxs("group",{position:[n.position.x,n.position.y,n.position.z],rotation:d,children:[n.shape==="custom"&&n.customModelUrl?u.jsx(D.Suspense,{fallback:null,children:u.jsx(Jn,{url:n.customModelUrl,material:n.material,color:o,sz:[r*l.x,r*l.y,r*l.z]})}):u.jsx("mesh",{geometry:i,scale:[r*l.x,r*l.y,r*l.z],children:u.jsx(Jt,{material:n.material,structural:n.structural,color:o})}),s.show&&u.jsxs(u.Fragment,{children:[c.top&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[0,f,0],userData:{isLabel:!0,labelText:c.top,labelPos:"top"}}),u.jsx(xe,{position:[0,f,0],style:{pointerEvents:"none"},children:u.jsx(Ne,{pos:"top",text:c.top})})]}),c.bottom&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[0,-f,0],userData:{isLabel:!0,labelText:c.bottom,labelPos:"bottom"}}),u.jsx(xe,{position:[0,-f,0],style:{pointerEvents:"none"},children:u.jsx(Ne,{pos:"bottom",text:c.bottom})})]}),c.left&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[-h,0,0],userData:{isLabel:!0,labelText:c.left,labelPos:"left"}}),u.jsx(xe,{position:[-h,0,0],style:{pointerEvents:"none"},children:u.jsx(Ne,{pos:"left",text:c.left})})]}),c.right&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[h,0,0],userData:{isLabel:!0,labelText:c.right,labelPos:"right"}}),u.jsx(xe,{position:[h,0,0],style:{pointerEvents:"none"},children:u.jsx(Ne,{pos:"right",text:c.right})})]})]})]})}function Wu({markConfig:n,collection1Config:e,color:t,layers:s,bindings:i,markLabelConfig:a}){const r=i.c1AlignCount==="count"?s.length:e.alignCount,{alignAxis:o,alignSpacing:l,alignAnchor:f}=e,h=D.useMemo(()=>zt(n.shape),[n.shape]);D.useEffect(()=>()=>{h.dispose()},[h]);const c=Is,d=Math.PI/180,m=(r-1)/2,v=[n.orientation.x*d,n.orientation.y*d,n.orientation.z*d];function x(A){var p;return i.markColor==="garbageType"?((p=s[A%Math.max(1,s.length)])==null?void 0:p.color)??t:t}function g(A){const p={x:n.size.x*(i.markSizeX?xt(i.markSizeX,A,s):1),y:n.size.y*(i.markSizeY?xt(i.markSizeY,A,s):1),z:n.size.z*(i.markSizeZ?xt(i.markSizeZ,A,s):1)};return[c*p.x,c*p.y,c*p.z]}return u.jsx("group",{children:Array.from({length:r},(A,p)=>{const y=(p-m)*l,b=g(p),B=o==="X"?b[1]*.036:b[0]*.036,C=Dr(f,o,B),F=o==="X"?[y+C[0],C[1],C[2]]:[C[0],y+C[1],C[2]],w=b[1]*.036+.5,T=b[0]*.036+.5,S=Wn(a.slots,s,p);return u.jsxs("group",{position:F,rotation:v,children:[n.shape==="custom"&&n.customModelUrl?u.jsx(D.Suspense,{fallback:null,children:u.jsx(Jn,{url:n.customModelUrl,material:n.material,color:x(p),sz:b})}):u.jsx("mesh",{geometry:h,scale:b,children:u.jsx(Jt,{material:n.material,structural:n.structural,color:x(p)})}),a.show&&u.jsxs(u.Fragment,{children:[S.top&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[0,w,0],userData:{isLabel:!0,labelText:S.top,labelPos:"top"}}),u.jsx(xe,{position:[0,w,0],style:{pointerEvents:"none"},children:u.jsx(Ne,{pos:"top",text:S.top})})]}),S.bottom&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[0,-w,0],userData:{isLabel:!0,labelText:S.bottom,labelPos:"bottom"}}),u.jsx(xe,{position:[0,-w,0],style:{pointerEvents:"none"},children:u.jsx(Ne,{pos:"bottom",text:S.bottom})})]}),S.left&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[-T,0,0],userData:{isLabel:!0,labelText:S.left,labelPos:"left"}}),u.jsx(xe,{position:[-T,0,0],style:{pointerEvents:"none"},children:u.jsx(Ne,{pos:"left",text:S.left})})]}),S.right&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[T,0,0],userData:{isLabel:!0,labelText:S.right,labelPos:"right"}}),u.jsx(xe,{position:[T,0,0],style:{pointerEvents:"none"},children:u.jsx(Ne,{pos:"right",text:S.right})})]})]})]},p)})})}function Er({markConfig:n,collection1Config:e,color:t,position:s,layers:i,bindings:a,heightOverride:r,markLabelConfig:o,colLabelConfig:l,layerIndex:f}){if(e.arrangement==="alignment")return u.jsx("group",{position:s,children:u.jsx(Wu,{markConfig:n,collection1Config:e,color:t,layers:i,bindings:a,markLabelConfig:o})});if(e.arrangement==="piling")return u.jsx(ku,{position:s,count:e.pilingCount,markShape:n.shape,markMaterial:n.material,markSize:n.size,color:t,structural:n.structural,customModelUrl:n.shape==="custom"?n.customModelUrl:void 0},e.pilingCount);const{scatterDimensions:h,scatterCount:c}=e,d=r??h.y,m=Wn(l.slots,i,f);return u.jsx(Lu,{width:h.x,depth:h.z,height:d,color:t,position:s,particleCount:Math.max(5,c),markShape:n.shape,markMaterial:n.material,markSize:n.size,structural:n.structural,customModelUrl:n.shape==="custom"?n.customModelUrl:void 0,labelShow:l.show,labelData:m})}const xs=8;function Ku({markConfig:n,collection1Config:e,layers:t,bindings:s,markLabelConfig:i,colLabelConfig:a}){var f,h;const r=((f=t[0])==null?void 0:f.color)??e.color,o=Math.max(...t.map(c=>c.percentage),1),l=s.scatterSize==="weight"&&e.arrangement==="scattering"?Math.max(.5,(((h=t[0])==null?void 0:h.percentage)??50)/o*xs):void 0;return u.jsx(Er,{markConfig:n,collection1Config:e,color:r,position:[0,0,0],layers:t,bindings:s,heightOverride:l,markLabelConfig:i,colLabelConfig:a,layerIndex:0})}function Qu({markConfig:n,collection1Config:e,collection2Config:t,layers:s,bindings:i,markLabelConfig:a,colLabelConfig:r}){const{arrangement:o,alignCount:l,alignAxis:f,alignSpacing:h,alignAnchor:c,scatterCount:d,scatterDimensions:m,color:v}=t,x=i.c2AlignCount==="count"?s.length:l,g=D.useMemo(()=>{if(o==="alignment"){const p=Array.from({length:x},(w,T)=>{const S=s[T%Math.max(1,s.length)];return{color:(S==null?void 0:S.color)??v,name:(S==null?void 0:S.name)??`Group ${T+1}`,pct:(S==null?void 0:S.percentage)??0}}),y=Math.max(...s.map(w=>w.percentage),1),b=p.map(w=>{if(e.arrangement==="scattering"){const M=e.scatterDimensions;return f==="X"?M.x:i.scatterSize==="weight"?Math.max(.5,w.pct/y*xs):M.y}const T=e,S=n.size.x*pt,E=n.size.y*pt;return f==="X"?T.alignAxis==="X"?(T.alignCount-1)*T.alignSpacing+S:S:T.alignAxis==="Y"?(T.alignCount-1)*T.alignSpacing+E:E}),B=p.map(w=>{if(e.arrangement==="scattering"){const S=e.scatterDimensions;return f==="X"?i.scatterSize==="weight"?Math.max(.5,w.pct/y*xs):S.y:S.x}const T=e;return f==="X"?T.alignAxis==="Y"?(T.alignCount-1)*T.alignSpacing+n.size.y*pt:n.size.y*pt:T.alignAxis==="X"?(T.alignCount-1)*T.alignSpacing+n.size.x*pt:n.size.x*pt});let F=-(b.reduce((w,T)=>w+T,0)+(x-1)*h)/2;return p.map((w,T)=>{const S=b[T],E=B[T],M=F+S/2;F+=S+h;const R=Dr(c,f,E/2),P=f==="X"?[M+R[0],R[1],R[2]]:[R[0],M+R[1],R[2]];return{...w,position:P,perpExt:E}})}return Array.from({length:d},(p,y)=>{const b=s[y%Math.max(1,s.length)];return{position:[(Math.random()-.5)*m.x,(Math.random()-.5)*m.y,(Math.random()-.5)*m.z],color:(b==null?void 0:b.color)??v,name:(b==null?void 0:b.name)??`Group ${y+1}`,pct:(b==null?void 0:b.percentage)??0,perpExt:0}})},[o,x,f,h,c,d,m.x,m.y,m.z,s,v,i.scatterSize,e.arrangement,e.alignAxis,e.alignCount,e.alignSpacing,e.scatterDimensions.x,e.scatterDimensions.y,n.size.x,n.size.y]),A=Math.max(...s.map(p=>p.percentage),1);return u.jsx("group",{children:g.map(({position:p,color:y,name:b,pct:B},C)=>{const F=i.scatterSize==="weight"&&e.arrangement==="scattering"?Math.max(.5,B/A*xs):void 0;return u.jsx(Er,{markConfig:n,collection1Config:e,color:y,position:p,layers:s,bindings:i,heightOverride:F,markLabelConfig:a,colLabelConfig:r,layerIndex:C%Math.max(1,s.length)},C)})})}function Vu({config:n}){const e=D.useMemo(()=>zt(n.shape),[n.shape]);D.useEffect(()=>()=>{e.dispose()},[e]);const t=Math.PI/180,s=Is,i=[n.orientation.x*t,n.orientation.y*t,n.orientation.z*t];return u.jsx("group",{position:[n.position.x,n.position.y,n.position.z],rotation:i,children:n.shape==="custom"&&n.customModelUrl?u.jsx(D.Suspense,{fallback:null,children:u.jsx(Jn,{url:n.customModelUrl,material:n.material,color:n.color,sz:[s*n.size.x,s*n.size.y,s*n.size.z]})}):u.jsx("mesh",{geometry:e,scale:[s*n.size.x,s*n.size.y,s*n.size.z],children:u.jsx(Jt,{material:n.material,structural:n.structural,color:n.color})})})}function Xu({onSamplesUpdate:n,downloadRenderRef:e}){const{gl:t,scene:s,camera:i}=sr(),a=D.useRef(n);return a.current=n,D.useEffect(()=>{let r=!1,o=null,l=null,f=null;async function h(){if(await new Promise(y=>setTimeout(y,0)),r)return;const c=new Ru;l=new Fc(t),l.setSize(t.domElement.width,t.domElement.height),l.camera=i,l.material=c,s.updateMatrixWorld(!0);const d=new Ec(s),{bvh:m,textures:v,materials:x,lights:g}=d.generate();if(r){l.dispose();return}const{geometry:A}=d;if(c.bvh.updateFrom(m),c.attributesArray.updateFrom(A.attributes.normal,A.attributes.tangent,A.attributes.uv,A.attributes.color),c.materialIndexAttribute.updateFrom(A.attributes.materialIndex),c.textures.setTextures(t,2048,2048,v),c.materials.updateFrom(x,v),c.lights.updateFrom(g),s.environment)try{c.envMapInfo.updateFrom(s.environment)}catch{}c.uniforms.backgroundAlpha.value=0,f=new yt(new Oe({map:l.target.texture})),e.current=()=>{const y=l.samples;t.domElement.toBlob(async b=>{if(!b)return;const B=document.createElement("canvas");B.width=t.domElement.width,B.height=t.domElement.height;const C=B.getContext("2d"),F=await createImageBitmap(b);C.drawImage(F,0,0),s.updateMatrixWorld();const w=[];if(s.traverse(T=>{if(T.userData.isLabel){const S=new I;T.getWorldPosition(S),w.push({worldPos:S,text:T.userData.labelText,pos:T.userData.labelPos??"top"})}}),w.length>0){const T=window.devicePixelRatio||1,S=Math.round(12*T);C.save(),C.font=`${S}px 'Courier New', monospace`,C.shadowColor="rgba(0,0,0,1)",C.shadowBlur=6*T,C.shadowOffsetX=0,C.shadowOffsetY=T,C.fillStyle="#e0e0e0";for(const{worldPos:E,text:M,pos:R}of w){const P=E.clone().project(i);if(P.z>1)continue;const _=(P.x*.5+.5)*B.width,G=(P.y*-.5+.5)*B.height;R==="top"?(C.textAlign="center",C.textBaseline="bottom"):R==="bottom"?(C.textAlign="center",C.textBaseline="top"):R==="left"?(C.textAlign="right",C.textBaseline="middle"):(C.textAlign="left",C.textBaseline="middle"),C.fillText(M,_,G)}C.restore()}B.toBlob(T=>{if(!T)return;const S=URL.createObjectURL(T),E=document.createElement("a");E.download=`render_${y}spp.png`,E.href=S,E.click(),URL.revokeObjectURL(S)},"image/png")},"image/png")},i.updateMatrixWorld();function p(){r||!l||!f||(i.updateMatrixWorld(),l.update(),f.material.map=l.target.texture,t.setRenderTarget(null),f.render(t),a.current(l.samples),o=requestAnimationFrame(p))}o=requestAnimationFrame(p)}return h().catch(console.error),()=>{r=!0,o!==null&&cancelAnimationFrame(o),l==null||l.dispose(),f==null||f.dispose(),e.current=null}},[t,s,i,e]),null}function Yu({config:n}){const e=n.background==="ocean";return u.jsxs(u.Fragment,{children:[e?u.jsx("color",{attach:"background",args:["#7ab8d4"]}):u.jsx("color",{attach:"background",args:["#050505"]}),u.jsx(Gn,{preset:n.hdriPreset,background:!1}),e&&u.jsxs(u.Fragment,{children:[u.jsx(Ac,{distance:45e4,sunPosition:[5,1.2,8],turbidity:9,rayleigh:3,mieCoefficient:.005,mieDirectionalG:.7}),u.jsx("fog",{attach:"fog",args:["#a8d4ea",25,140]}),u.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-7.2,0],children:[u.jsx("planeGeometry",{args:[400,400,1,1]}),u.jsx("meshPhysicalMaterial",{color:"#0c3a58",roughness:.06,metalness:.65,reflectivity:.9})]})]}),u.jsx("ambientLight",{intensity:e?.5:.18}),u.jsx("directionalLight",{position:[8,18,6],intensity:e?1.4:1.8,color:e?"#fff8e0":"#fffaf0"}),u.jsx("directionalLight",{position:[-6,4,-8],intensity:e?.6:.4,color:e?"#c0e8ff":"#c0ccff"})]})}function qu({level:n,markConfig:e,collection1Config:t,collection2Config:s,sceneConfig:i,layers:a,bindings:r,markLabelConfig:o,colLabelConfig:l,decorations:f,pathTracingActive:h,onSamplesUpdate:c,downloadRenderRef:d}){const m=Nu(i.focalLength),v=wr[n],x=i.background==="ocean";return u.jsxs(Ms,{camera:{position:v,fov:m,near:.1,far:500},style:{width:"100%",height:"100%"},frameloop:h?"never":"always",gl:{antialias:!0,toneMapping:_n,toneMappingExposure:x?.95:1.35,preserveDrawingBuffer:!0},children:[u.jsx(Uu,{level:n,fov:m,focalLength:i.focalLength}),u.jsx(Yu,{config:i}),u.jsxs(tr,{gravity:[0,-9.81,0],timeStep:"vary",children:[n===1&&u.jsx(Ju,{config:e,layers:a,bindings:r,markLabelConfig:o}),n===2&&u.jsx(Ku,{markConfig:e,collection1Config:t,layers:a,bindings:r,markLabelConfig:o,colLabelConfig:l}),n===3&&u.jsx(Qu,{markConfig:e,collection1Config:t,collection2Config:s,layers:a,bindings:r,markLabelConfig:o,colLabelConfig:l}),f.map(g=>u.jsx(Vu,{config:g},g.id))]}),u.jsx(ws,{makeDefault:!0,dampingFactor:.08,minDistance:1,maxDistance:400,target:[0,0,0]}),h&&c&&d&&u.jsx(Xu,{onSamplesUpdate:c,downloadRenderRef:d})]})}const Zu=Object.assign({}),hs=Object.entries(Zu).map(([n,e])=>{const t=n.replace(/^.*\//,"").replace(/\.json$/,""),s=t.replace(/_/g," ").replace(/\b\w/g,i=>i.toUpperCase());return{id:`preset_${t}`,name:s,createdAt:"",data:e.default}});function $u(n,e){const t=JSON.stringify(e,null,2),s=new Blob([t],{type:"application/json"}),i=URL.createObjectURL(s),a=document.createElement("a");a.href=i,a.download=n.trim().replace(/\s+/g,"_")+".json",a.click(),URL.revokeObjectURL(i)}const Ts={padding:"8px 16px",borderRadius:"8px",fontSize:"13px",fontWeight:"500",cursor:"pointer",fontFamily:"inherit",border:"none",transition:"opacity 0.1s"};function Rr({onClose:n,children:e}){return u.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999},onClick:n,children:u.jsx("div",{style:{background:"#fff",borderRadius:"14px",width:"340px",maxWidth:"90vw",boxShadow:"0 16px 48px rgba(0,0,0,0.28)",overflow:"hidden",fontFamily:"inherit"},onClick:t=>t.stopPropagation(),children:e})})}function ed({initialName:n,onSave:e,onClose:t}){const[s,i]=D.useState(n);function a(){const r=s.trim();r&&e(r)}return u.jsx(Rr,{onClose:t,children:u.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"14px"},children:[u.jsx("div",{style:{fontSize:"15px",fontWeight:"700",color:"#1D1D1F"},children:"Save Scene"}),u.jsx("input",{type:"text",value:s,onChange:r=>i(r.target.value),onKeyDown:r=>{r.key==="Enter"&&a(),r.key==="Escape"&&t()},placeholder:"Scene name…",autoFocus:!0,style:{background:"#F2F2F7",border:"1.5px solid #D1D1D6",borderRadius:"8px",padding:"9px 12px",fontSize:"13px",color:"#1D1D1F",outline:"none",fontFamily:"inherit",width:"100%",boxSizing:"border-box"}}),u.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[u.jsx("button",{onClick:t,style:{...Ts,background:"#F2F2F7",color:"#6C6C70"},children:"Cancel"}),u.jsx("button",{onClick:a,disabled:!s.trim(),style:{...Ts,background:"#007AFF",color:"#fff",opacity:s.trim()?1:.4},children:"Save"})]})]})})}function Li({children:n}){return u.jsx("div",{style:{padding:"8px 20px 4px",fontSize:"10px",fontWeight:"700",letterSpacing:"0.08em",textTransform:"uppercase",color:"#AEAEB2"},children:n})}function td({saves:n,onLoad:e,onDelete:t,onClose:s,currentName:i,currentData:a}){const[r,o]=D.useState(null);function l(f,h,c){return u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"11px 20px",cursor:"pointer",background:r===f.id?"#F8F8FA":"transparent",borderBottom:c?"none":"1px solid #F2F2F7",transition:"background 0.08s"},onClick:()=>e(f),onMouseEnter:()=>o(f.id),onMouseLeave:()=>o(null),children:[u.jsxs("div",{style:{flex:1,minWidth:0},children:[u.jsx("div",{style:{fontSize:"13px",fontWeight:"600",color:"#1D1D1F"},children:f.name}),f.createdAt&&u.jsx("div",{style:{fontSize:"10px",color:"#8E8E93",marginTop:"2px"},children:new Date(f.createdAt).toLocaleString()})]}),h&&u.jsx("button",{onClick:d=>{d.stopPropagation(),t(f.id)},title:"Delete",style:{background:"none",border:"none",cursor:"pointer",color:"#FF3B30",fontSize:"17px",lineHeight:1,padding:"4px 6px",flexShrink:0},children:"×"})]},f.id)}return u.jsx(Rr,{onClose:s,children:u.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[u.jsx("div",{style:{padding:"16px 20px",borderBottom:"1px solid #E5E5EA",fontSize:"15px",fontWeight:"700",color:"#1D1D1F"},children:"Load Scene"}),u.jsxs("div",{style:{maxHeight:"380px",overflowY:"auto"},children:[hs.length>0&&u.jsxs(u.Fragment,{children:[u.jsx(Li,{children:"Presets"}),hs.map((f,h)=>l(f,!1,h===hs.length-1))]}),n.length>0&&u.jsxs(u.Fragment,{children:[u.jsx(Li,{children:"My Saves"}),n.map((f,h)=>l(f,!0,h===n.length-1))]}),hs.length===0&&n.length===0&&u.jsx("div",{style:{padding:"36px 20px",textAlign:"center",color:"#8E8E93",fontSize:"13px"},children:"No saved scenes yet"})]}),u.jsxs("div",{style:{padding:"12px 20px",borderTop:"1px solid #E5E5EA",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("button",{onClick:()=>$u(i,a),title:"Export current scene as JSON",style:{...Ts,background:"#F2F2F7",color:"#007AFF",padding:"7px 12px"},children:"Export scene"}),u.jsx("button",{onClick:s,style:{...Ts,background:"#F2F2F7",color:"#6C6C70"},children:"Close"})]})]})})}const Ir="phys_tool_saves";function an(){try{return JSON.parse(localStorage.getItem(Ir)??"[]")}catch{return[]}}function ln(n){localStorage.setItem(Ir,JSON.stringify(n))}const Hi=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],Oi={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},ki={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},Ni={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},Ui={background:"dark",hdriPreset:"city",focalLength:130},ps={show:!1,slots:{top:null,bottom:null,left:null,right:null}};function sd(){const[n,e]=D.useState(1),[t,s]=D.useState("mark"),[i,a]=D.useState(Hi),[r,o]=D.useState(Oi),[l,f]=D.useState(ki),[h,c]=D.useState(Ni),[d,m]=D.useState(Ui),[v,x]=D.useState({markColor:null,scatterSize:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null}),[g,A]=D.useState(ps),[p,y]=D.useState(ps),[b,B]=D.useState([]),[C,F]=D.useState(null),[w,T]=D.useState(!1),[S,E]=D.useState(null),[M,R]=D.useState(null),[P,_]=D.useState("none"),[G,j]=D.useState(!1),[L,U]=D.useState(0),Q=D.useRef(null);function J(k,N){x(se=>{const st={...se,[k]:N};return N!==null&&(k==="markSizeX"||k==="markSizeY"||k==="markSizeZ")&&(k!=="markSizeX"&&(st.markSizeX=null),k!=="markSizeY"&&(st.markSizeY=null),k!=="markSizeZ"&&(st.markSizeZ=null)),st})}function fe(){const k=`dec_${Date.now()}`,N={id:k,shape:"sphere",material:"plastic",color:"#888888",position:{x:0,y:-1.5,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}};B(se=>[...se,N]),F(k)}function he(k){B(N=>N.filter(se=>se.id!==k)),F(N=>N===k?null:N)}function tt(k){B(N=>N.map(se=>se.id===k.id?k:se))}function Te(){return{level:n,activeElement:t,markConfig:r,col1Config:l,col2Config:h,sceneConfig:d,bindings:v,markLabelConfig:g,colLabelConfig:p,decorations:b,layers:i}}function Kn(k){const N=an();if(S){const Ps=N.findIndex(Hr=>Hr.id===S);if(Ps>=0){N[Ps]={...N[Ps],name:k,data:Te()},ln(N),R(k),_("none");return}}const se=`save_${Date.now()}`,st={id:se,name:k,createdAt:new Date().toISOString(),data:Te()};ln([...N,st]),E(se),R(k),_("none")}function Pr(){S&&M?Kn(M):_("save")}function _r(k){const N=k.data;N.level!=null&&e(N.level),N.activeElement!=null&&s(N.activeElement),o($n(N.markConfig??Oi)),f(N.col1Config??ki),c(N.col2Config??Ni),m(N.sceneConfig??Ui),x(N.bindings??{markColor:null,scatterSize:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null}),A(N.markLabelConfig??ps),y(N.colLabelConfig??ps),B((N.decorations??[]).map(se=>$n(se))),a(N.layers??Hi),E(k.id),R(k.name),F(null),_("none")}function Gr(k){const N=an().filter(se=>se.id!==k);ln(N),S===k&&(E(null),R(null))}function jr(){n===1&&(e(2),s("collection1")),n===2&&(e(3),s("collection2"))}function Lr(){n===3&&(e(2),s("collection1")),n===2&&(e(1),s("mark"))}return u.jsxs("div",{style:{display:"flex",width:"100vw",height:"100vh",background:"#F2F2F7",overflow:"hidden"},children:[u.jsxs("div",{style:{width:"260px",flexShrink:0,borderRight:"1px solid #E5E5EA",background:"#FFFFFF",display:"flex",flexDirection:"column",overflow:"hidden"},children:[u.jsxs("div",{style:{display:"flex",gap:"6px",padding:"8px 10px",borderBottom:"1px solid #E5E5EA",flexShrink:0,flexDirection:"column"},children:[u.jsxs("div",{style:{display:"flex",gap:"6px"},children:[u.jsx("button",{onClick:Pr,title:M?`Save to "${M}"`:"Save scene",style:{flex:1,background:"#007AFF",color:"#fff",border:"none",borderRadius:"7px",padding:"6px 8px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:M||"Save"}),u.jsx("button",{onClick:()=>_("load"),style:{flex:1,background:"#F2F2F7",color:"#1D1D1F",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"6px 8px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit"},children:"Load"})]}),u.jsx("button",{onClick:()=>{j(!0),U(0)},disabled:G,style:{background:G?"#E5E5EA":"#1D1D1F",color:G?"#AEAEB2":"#FFFFFF",border:"none",borderRadius:"7px",padding:"7px 8px",fontSize:"12px",fontWeight:"600",cursor:G?"default":"pointer",fontFamily:"inherit",width:"100%"},children:G?"Rendering...":"Render"})]}),u.jsx("div",{style:{flex:1,overflowY:"auto",minHeight:0},children:u.jsx(No,{level:n,activeElement:t,onSelectElement:k=>{s(k),F(null)},onAdvanceLevel:jr,onDowngradeLevel:Lr,decorations:b,activeDecorationId:C,onSelectDecoration:F,onAddDecoration:fe,onRemoveDecoration:he})})]}),u.jsxs("div",{style:{flex:1,position:"relative"},children:[u.jsx(qu,{level:n,markConfig:r,collection1Config:l,collection2Config:h,sceneConfig:d,layers:i,bindings:v,markLabelConfig:g,colLabelConfig:p,decorations:b,pathTracingActive:G,onSamplesUpdate:U,downloadRenderRef:Q}),G&&u.jsxs("div",{style:{position:"absolute",top:"16px",right:"16px",background:"rgba(10,10,10,0.82)",backdropFilter:"blur(14px)",borderRadius:"14px",padding:"18px 20px",color:"#fff",display:"flex",flexDirection:"column",gap:"14px",width:"200px",fontFamily:"inherit",zIndex:10,boxShadow:"0 8px 32px rgba(0,0,0,0.4)"},children:[u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:"10px",fontWeight:"700",letterSpacing:"0.1em",textTransform:"uppercase",opacity:.45,marginBottom:"8px"},children:"Path Tracing"}),u.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"5px"},children:[u.jsx("span",{style:{fontSize:"32px",fontWeight:"700",letterSpacing:"-0.02em",lineHeight:1},children:L}),u.jsx("span",{style:{fontSize:"11px",opacity:.35},children:"spp"})]})]}),u.jsx("div",{style:{background:"rgba(255,255,255,0.1)",borderRadius:"3px",height:"3px"},children:u.jsx("div",{style:{width:`${Math.min(100,L/256*100)}%`,height:"100%",background:"#4FC3F7",borderRadius:"3px",transition:"width 0.4s"}})}),u.jsx("div",{style:{fontSize:"11px",opacity:.4,marginTop:"-8px"},children:L===0?"Building scene BVH…":L>=256?"Converged":`${256-L} samples to 256`}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsx("button",{onClick:()=>{var k;return(k=Q.current)==null?void 0:k.call(Q)},disabled:L===0,style:{background:L>0?"#4FC3F7":"rgba(255,255,255,0.08)",color:"#fff",border:"none",borderRadius:"8px",padding:"9px",fontSize:"12px",fontWeight:"600",cursor:L>0?"pointer":"default",fontFamily:"inherit"},children:"Download PNG"}),u.jsx("button",{onClick:()=>j(!1),style:{background:"rgba(255,255,255,0.08)",color:"#fff",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"9px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit"},children:"Stop"})]})]})]}),u.jsx("div",{style:{width:"260px",flexShrink:0,borderLeft:"1px solid #E5E5EA",background:"#FFFFFF",overflowY:"auto"},children:u.jsx(Aa,{activeElement:t,compositionLevel:n,markConfig:r,onMarkChange:o,collection1Config:l,onCollection1Change:f,collection2Config:h,onCollection2Change:c,sceneConfig:d,onSceneChange:m,bindings:v,onBind:J,markLabelConfig:g,onMarkLabelChange:A,colLabelConfig:p,onColLabelChange:y,activeDecorationId:C,decorations:b,onDecorationChange:tt,layers:i,onOpenData:()=>T(!0)})}),P==="save"&&u.jsx(ed,{initialName:M??"",onSave:Kn,onClose:()=>_("none")}),w&&u.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999},onClick:()=>T(!1),children:u.jsxs("div",{style:{background:"#fff",borderRadius:"14px",width:"340px",maxWidth:"90vw",maxHeight:"80vh",display:"flex",flexDirection:"column",boxShadow:"0 16px 48px rgba(0,0,0,0.28)",overflow:"hidden",fontFamily:"inherit"},onClick:k=>k.stopPropagation(),children:[u.jsxs("div",{style:{padding:"14px 20px",borderBottom:"1px solid #E5E5EA",fontSize:"15px",fontWeight:"700",color:"#1D1D1F",flexShrink:0,display:"flex",justifyContent:"space-between",alignItems:"center"},children:["Data Panel",u.jsx("button",{onClick:()=>T(!1),style:{background:"none",border:"none",fontSize:"18px",color:"#AEAEB2",cursor:"pointer",lineHeight:1,padding:"0 2px"},children:"×"})]}),u.jsx("div",{style:{overflowY:"auto",flex:1},children:u.jsx(ca,{layers:i,onChange:a})})]})}),P==="load"&&u.jsx(td,{saves:an(),onLoad:_r,onDelete:Gr,onClose:()=>_("none"),currentName:M??"scene",currentData:Te()})]})}const cn="https://massager-unshaved-chasing.ngrok-free.dev";function nd(){const n=Eo();return D.useEffect(()=>{n.refresh().fit()},[n]),null}function id({url:n}){const e=Ut(Ln,n),t=D.useRef([]),s=D.useRef(0);return D.useEffect(()=>{const i=[];if(e.scene.updateWorldMatrix(!0,!0),e.scene.traverse(r=>{r.isMesh&&i.push(r)}),!i.length)return;const a=new I;i.forEach(r=>{const o=new I;r.getWorldPosition(o),a.add(o)}),a.divideScalar(i.length),t.current=i.map(r=>{const o=new I;r.getWorldPosition(o);const l=o.clone().sub(a);return l.length()<.001&&l.set(Math.random()-.5,Math.random()-.5,Math.random()-.5),l.normalize(),{mesh:r,origPos:o.clone(),direction:l}}),s.current=0},[e]),jn((i,a)=>{s.current+=a;const r=(Math.sin(s.current*1-Math.PI/2)+1)/2;t.current.forEach(({mesh:o,origPos:l,direction:f})=>{o.position.copy(l).addScaledVector(f,r*1.5)})}),u.jsxs(Do,{fit:!0,clip:!0,observe:!0,margin:1.4,children:[u.jsx(nd,{}),u.jsx("primitive",{object:e.scene})]})}function rd({data:n,center:e,impulse:t}){const s=D.useRef(null);return D.useEffect(()=>{if(!s.current)return;const i=n.position.clone().sub(e);i.length()<.001&&i.set(Math.random()-.5,.5,Math.random()-.5),i.normalize().multiplyScalar(t),s.current.applyImpulse({x:i.x,y:i.y+t*.3,z:i.z},!0),s.current.applyTorqueImpulse({x:(Math.random()-.5)*t*.3,y:(Math.random()-.5)*t*.3,z:(Math.random()-.5)*t*.3},!0)},[]),u.jsx(vs,{ref:s,position:n.position.toArray(),quaternion:[n.quaternion.x,n.quaternion.y,n.quaternion.z,n.quaternion.w],colliders:"hull",restitution:.3,friction:.8,linearDamping:.1,angularDamping:.15,children:u.jsx("mesh",{geometry:n.geometry,material:n.material})})}function od({url:n,impulse:e}){const t=Ut(Ln,n),{fragments:s,center:i}=D.useMemo(()=>{const a=[];t.scene.updateWorldMatrix(!0,!0),t.scene.traverse(o=>{if(!o.isMesh)return;const l=o,f=new I,h=new Fs;l.getWorldPosition(f),l.getWorldQuaternion(h),a.push({geometry:l.geometry,material:l.material,position:f,quaternion:h})});const r=new I;return a.forEach(o=>r.add(o.position)),a.length&&r.divideScalar(a.length),{fragments:a,center:r}},[t]);return u.jsxs(u.Fragment,{children:[u.jsx(vs,{type:"fixed",position:[0,-3,0],children:u.jsx(er,{args:[15,.1,15]})}),u.jsxs("mesh",{position:[0,-3,0],rotation:[-Math.PI/2,0,0],children:[u.jsx("planeGeometry",{args:[30,30]}),u.jsx("meshStandardMaterial",{color:"#1a1a1a",roughness:.9})]}),s.map((a,r)=>u.jsx(rd,{data:a,center:i,impulse:e},r))]})}function Se({label:n,children:e}){return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[u.jsx("div",{style:{fontSize:11,color:"#888"},children:n}),e]})}function zi({active:n,onClick:e,children:t}){return u.jsx("button",{onClick:e,style:{flex:1,padding:"8px 0",fontSize:12,fontWeight:600,background:n?"#5E5CE6":"#1a1a1a",color:n?"#fff":"#666",border:n?"none":"1px solid #333",borderRadius:6,cursor:"pointer"},children:t})}function ad(){const[n,e]=D.useState(null),[t,s]=D.useState("idle"),[i,a]=D.useState(""),[r,o]=D.useState("exploded"),[l,f]=D.useState(0),[h,c]=D.useState(""),[d,m]=D.useState(8),[v,x]=D.useState(.5),[g,A]=D.useState("random"),[p,y]=D.useState("bisect"),[b,B]=D.useState(30),[C,F]=D.useState(0),[w,T]=D.useState(1.5),S=D.useRef(null),E=D.useCallback(j=>{if(!j.name.endsWith(".glb")&&!j.name.endsWith(".gltf")){a("Please upload a .glb or .gltf file");return}S.current=j,c(j.name),e(null),s("idle"),a("")},[]),M=D.useCallback(j=>{j.preventDefault();const L=j.dataTransfer.files[0];L&&E(L)},[E]),R=D.useCallback(j=>{var U;const L=(U=j.target.files)==null?void 0:U[0];L&&E(L)},[E]),P=D.useCallback(async j=>{if(j==="model"&&!S.current){a("Drop a GLB first");return}s("loading"),a("Blender is running…"),n&&URL.revokeObjectURL(n),e(null);try{let L;const U=`pieces=${d}&cutSpread=${v}&cutStrategy=${g}&adaptivity=${C}&fractureMethod=${p}`;if(j==="sphere")L=await Ls(`${cn}/shatter/sphere?${U}`);else if(j==="cube")L=await Ls(`${cn}/shatter/cube?${U}`);else{const J=new FormData;J.append("model",S.current),J.append("pieces",d.toString()),J.append("cutSpread",v.toString()),J.append("cutStrategy",g),J.append("fractureMethod",p),J.append("voxelDiv",b.toString()),J.append("adaptivity",C.toString()),L=await Ls(`${cn}/shatter`,{method:"POST",body:J})}if(!L.ok){const J=await L.json().catch(()=>({error:L.statusText}));throw new Error(J.error??L.statusText)}const Q=await L.blob();e(URL.createObjectURL(Q)),s("done"),a("")}catch(L){s("error"),a(L instanceof Error?L.message:"Unknown error")}},[d,v,b,n]);D.useEffect(()=>()=>{n&&URL.revokeObjectURL(n)},[n]);const _={width:"100%",accentColor:"#5E5CE6"},G=t==="loading";return u.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0f0f0f",color:"#e0e0e0"},children:[u.jsxs("div",{style:{width:260,padding:20,display:"flex",flexDirection:"column",gap:16,borderRight:"1px solid #222",overflowY:"auto"},children:[u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[u.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Shatter Lab"}),u.jsxs("div",{style:{display:"flex",gap:12},children:[u.jsx("a",{href:"/deform",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Deform"}),u.jsx("a",{href:"/particles",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Particles"}),u.jsx("a",{href:"/fluid",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Fluid"})]})]}),u.jsx(Se,{label:"View Mode",children:u.jsxs("div",{style:{display:"flex",gap:6},children:[u.jsx(zi,{active:r==="exploded",onClick:()=>o("exploded"),children:"Exploded"}),u.jsx(zi,{active:r==="physics",onClick:()=>o("physics"),children:"Physics"})]})}),u.jsxs(Se,{label:"Model (GLB)",children:[u.jsx("div",{onDrop:M,onDragOver:j=>j.preventDefault(),onClick:()=>document.getElementById("glb-input").click(),style:{border:"2px dashed #333",borderRadius:8,padding:"14px 10px",textAlign:"center",cursor:"pointer",fontSize:12,color:"#555"},children:h||"Drop GLB or click to browse"}),u.jsx("input",{id:"glb-input",type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:R})]}),u.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[u.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Fragment"}),u.jsxs(Se,{label:"Fracture Method",children:[u.jsx("div",{style:{display:"flex",gap:6},children:["bisect","voronoi"].map(j=>u.jsx("button",{onClick:()=>y(j),style:{flex:1,padding:"6px 0",fontSize:11,borderRadius:5,background:p===j?"#2a2a4a":"#1a1a1a",color:p===j?"#9999ff":"#555",border:p===j?"1px solid #5E5CE6":"1px solid #2a2a2a",cursor:"pointer",textTransform:"capitalize"},children:j},j))}),u.jsx("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:p==="voronoi"?"Natural crack patterns. Slower — best ≤ 50 pieces.":"Sequential plane cuts. Fast. Good for large counts."})]}),u.jsx(Se,{label:`Pieces: ${d}`,children:u.jsx("input",{type:"range",min:2,max:500,step:1,value:d,onChange:j=>m(Number(j.target.value)),style:_})}),u.jsxs(Se,{label:`Size Variation: ${v.toFixed(2)}`,children:[u.jsx("input",{type:"range",min:.05,max:1,step:.05,value:v,onChange:j=>x(Number(j.target.value)),style:_}),u.jsxs("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:["0 = equal-sized pieces (cuts through centre)",u.jsx("br",{}),"1 = uneven pieces (cuts placed randomly)"]})]}),u.jsxs(Se,{label:"Cut Strategy",children:[u.jsx("div",{style:{display:"flex",gap:6},children:["random","largest"].map(j=>u.jsx("button",{onClick:()=>A(j),style:{flex:1,padding:"6px 0",fontSize:11,borderRadius:5,background:g===j?"#2a2a4a":"#1a1a1a",color:g===j?"#9999ff":"#555",border:g===j?"1px solid #5E5CE6":"1px solid #2a2a2a",cursor:"pointer"},children:j==="random"?"Random":"Largest First"},j))}),u.jsx("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:"Largest First → more uniform sizes"})]})]}),u.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[u.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Remesh — file uploads only"}),u.jsxs(Se,{label:`Voxel Detail: ${b}`,children:[u.jsx("input",{type:"range",min:10,max:60,step:5,value:b,onChange:j=>B(Number(j.target.value)),style:_}),u.jsx("div",{style:{fontSize:10,color:"#444"},children:"Higher = sharper cuts, slower"})]}),u.jsxs(Se,{label:`Adaptivity: ${C.toFixed(2)}`,children:[u.jsx("input",{type:"range",min:0,max:1,step:.05,value:C,onChange:j=>F(Number(j.target.value)),style:_}),u.jsx("div",{style:{fontSize:10,color:"#444"},children:"Reduces polygons in flat areas"})]})]}),r==="physics"&&u.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[u.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Physics"}),u.jsxs(Se,{label:`Impulse: ${w.toFixed(1)}`,children:[u.jsx("input",{type:"range",min:0,max:5,step:.1,value:w,onChange:j=>T(Number(j.target.value)),style:_}),u.jsx("div",{style:{fontSize:10,color:"#444"},children:"How hard pieces fly apart on start"})]})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[u.jsx("button",{onClick:()=>P("model"),disabled:G,style:{background:G?"#222":"#5E5CE6",color:G?"#555":"#fff",border:"none",borderRadius:8,padding:"11px 0",fontSize:13,fontWeight:600,cursor:G?"wait":"pointer"},children:G?"Running…":"⚡ Shatter Model"}),u.jsxs("div",{style:{display:"flex",gap:8},children:[u.jsx("button",{onClick:()=>P("sphere"),disabled:G,style:{flex:1,background:"#1a1a1a",color:G?"#444":"#aaa",border:"1px solid #2a2a2a",borderRadius:8,padding:"9px 0",fontSize:12,cursor:G?"wait":"pointer"},children:"🔵 Sphere"}),u.jsx("button",{onClick:()=>P("cube"),disabled:G,style:{flex:1,background:"#1a1a1a",color:G?"#444":"#aaa",border:"1px solid #2a2a2a",borderRadius:8,padding:"9px 0",fontSize:12,cursor:G?"wait":"pointer"},children:"◻ Cube"})]}),r==="physics"&&n&&u.jsx("button",{onClick:()=>f(j=>j+1),style:{background:"#1a1a2e",color:"#5E5CE6",border:"1px solid #5E5CE6",borderRadius:8,padding:"9px 0",fontSize:12,cursor:"pointer"},children:"↺ Restart Simulation"})]}),(i||G)&&u.jsx("div",{style:{fontSize:12,padding:10,borderRadius:6,lineHeight:1.5,background:t==="error"?"#2a0f0f":"#111",color:t==="error"?"#ff6b6b":"#666"},children:G?"Blender is running… (10–30 s)":i})]}),u.jsx("div",{style:{flex:1},children:n?u.jsxs(Ms,{camera:{position:[0,1,5],fov:50},style:{background:"#111"},children:[u.jsx("ambientLight",{intensity:.5}),u.jsx("directionalLight",{position:[5,8,5],intensity:1.2,castShadow:!0}),u.jsx(Gn,{preset:"city"}),r==="exploded"&&u.jsx(D.Suspense,{fallback:null,children:u.jsx(id,{url:n})}),r==="physics"&&u.jsx(tr,{gravity:[0,-9.81,0],timeStep:"vary",children:u.jsx(D.Suspense,{fallback:null,children:u.jsx(od,{url:n,impulse:w})})},l),u.jsx(ws,{})]}):u.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#2a2a2a",fontSize:13},children:G?u.jsxs("div",{style:{textAlign:"center",color:"#444"},children:[u.jsx("div",{style:{fontSize:28,marginBottom:10},children:"⏳"}),"Blender is fracturing…"]}):u.jsxs("div",{style:{textAlign:"center"},children:[u.jsx("div",{style:{fontSize:28,marginBottom:10},children:"💥"}),"Choose a shape and hit Shatter"]})})})]})}const un={Flag:{pinMode:"flag",gravity:2,windX:.5,windZ:5,windTurb:3,damping:.99,constraintIters:8},Curtain:{pinMode:"curtain",gravity:3,windX:0,windZ:2,windTurb:2,damping:.99,constraintIters:8},Sheet:{pinMode:"sheet",gravity:2.5,windX:.5,windZ:2.5,windTurb:2.5,damping:.99,constraintIters:8},Still:{pinMode:"curtain",gravity:4,windX:0,windZ:0,windTurb:0,damping:.995,constraintIters:12},Hammock:{pinMode:"hammock",gravity:6,windX:0,windZ:.5,windTurb:.5,damping:.995,constraintIters:12}};function ld(n,e,t,s,i){const a=i==="hammock",r=new Float32Array(n*e*3),o=new Float32Array(n*e*2);for(let h=0;h<e;h++)for(let c=0;c<n;c++){const d=h*n+c,m=c/(n-1),v=h/(e-1);a?(r[d*3]=(m-.5)*t,r[d*3+1]=0,r[d*3+2]=(v-.5)*s):(r[d*3]=(m-.5)*t,r[d*3+1]=(.5-v)*s,r[d*3+2]=0),o[d*2]=m,o[d*2+1]=1-v}const l=[];for(let h=0;h<e-1;h++)for(let c=0;c<n-1;c++){const d=h*n+c,m=d+1,v=d+n,x=v+1;l.push(d,v,m,m,v,x)}const f=new Fe;return f.setAttribute("position",new X(r,3)),f.setAttribute("uv",new X(o,2)),f.setIndex(l),f.computeVertexNormals(),f}function cd(n,e,t,s,i){const a=i==="hammock",r=n*e,o=new Float32Array(r*3),l=new Float32Array(r*3),f=new Uint8Array(r),h=new Float32Array(r*3);for(let x=0;x<e;x++)for(let g=0;g<n;g++){const A=x*n+g,p=g/(n-1),y=x/(e-1);a?(o[A*3]=(p-.5)*t,o[A*3+1]=0,o[A*3+2]=(y-.5)*s):(o[A*3]=(p-.5)*t,o[A*3+1]=(.5-y)*s,o[A*3+2]=0),l[A*3]=o[A*3],l[A*3+1]=o[A*3+1],l[A*3+2]=o[A*3+2]}switch(i){case"flag":for(let x=0;x<e;x++)f[x*n]=1;break;case"curtain":for(let x=0;x<n;x++)f[x]=1;break;case"sheet":f[0]=1,f[n-1]=1;break;case"hammock":f[0]=1,f[n-1]=1,f[(e-1)*n]=1,f[(e-1)*n+n-1]=1;break}for(let x=0;x<r;x++)h[x*3]=o[x*3],h[x*3+1]=o[x*3+1],h[x*3+2]=o[x*3+2];const c=t/(n-1),d=s/(e-1),m=Math.hypot(c,d),v=[];for(let x=0;x<e;x++)for(let g=0;g<n;g++){const A=x*n+g;g<n-1&&v.push({a:A,b:A+1,r:c}),x<e-1&&v.push({a:A,b:A+n,r:d}),g<n-1&&x<e-1&&(v.push({a:A,b:A+n+1,r:m}),v.push({a:A+1,b:A+n,r:m})),g<n-2&&v.push({a:A,b:A+2,r:c*2}),x<e-2&&v.push({a:A,b:A+n*2,r:d*2})}return{pos:o,prev:l,pinned:f,init:h,springs:v,N:n,M:e}}function ud({cols:n,rows:e,cW:t,cH:s,pinMode:i,paramsRef:a,color:r,wireframe:o}){const l=D.useMemo(()=>ld(n,e,t,s,i),[]),f=D.useMemo(()=>cd(n,e,t,s,i),[]),h=D.useRef(null);return jn(({clock:c},d)=>{if(!h.current)return;const{gravity:m,windZ:v,windX:x,windTurb:g,damping:A,constraintIters:p}=a.current,{pos:y,prev:b,pinned:B,init:C,springs:F,N:w,M:T}=f,S=c.getElapsedTime(),E=5,M=Math.min(d,.033)/E;for(let P=0;P<E;P++){for(let _=0;_<w*T;_++){if(B[_])continue;const G=_*3,j=y[G],L=y[G+1],U=y[G+2];let Q=(j-b[G])*A,J=(L-b[G+1])*A,fe=(U-b[G+2])*A;J-=m*M*M;const he=Math.sin(j*.8+S*.9)*Math.cos(U*.5+S*.6)*g,tt=Math.sin(U*.7+S*.7)*Math.cos(L*.4+S*.5)*g;Q+=(x+he)*M*M,fe+=(v+tt)*M*M,b[G]=j,b[G+1]=L,b[G+2]=U,y[G]=j+Q,y[G+1]=L+J,y[G+2]=U+fe,y[G+1]<-3.5&&(y[G+1]=-3.5,b[G+1]=-3.5)}for(let _=0;_<p;_++)for(const{a:G,b:j,r:L}of F){const U=G*3,Q=j*3,J=y[Q]-y[U],fe=y[Q+1]-y[U+1],he=y[Q+2]-y[U+2],tt=Math.sqrt(J*J+fe*fe+he*he)||1e-6,Te=(tt-L)/tt*.5;B[G]||(y[U]+=J*Te,y[U+1]+=fe*Te,y[U+2]+=he*Te),B[j]||(y[Q]-=J*Te,y[Q+1]-=fe*Te,y[Q+2]-=he*Te)}for(let _=0;_<w*T;_++)B[_]&&(y[_*3]=C[_*3],y[_*3+1]=C[_*3+1],y[_*3+2]=C[_*3+2])}const R=l.attributes.position;for(let P=0;P<w*T;P++)R.array[P*3]=y[P*3],R.array[P*3+1]=y[P*3+1],R.array[P*3+2]=y[P*3+2];R.needsUpdate=!0,l.computeVertexNormals()}),u.jsx("mesh",{ref:h,geometry:l,castShadow:!0,receiveShadow:!0,children:u.jsx("meshStandardMaterial",{color:r,side:Ss,roughness:.8,metalness:0,wireframe:o})})}function dd({cols:n,rows:e,cW:t,cH:s,pinMode:i}){const a=D.useMemo(()=>{const r=n,o=e,l=i==="hammock",f=(h,c)=>{const d=h/(r-1),m=c/(o-1);return l?[(d-.5)*t,0,(m-.5)*s]:[(d-.5)*t,(.5-m)*s,0]};switch(i){case"flag":return Array.from({length:o},(h,c)=>f(0,c));case"curtain":return Array.from({length:r},(h,c)=>f(c,0));case"sheet":return[f(0,0),f(r-1,0)];case"hammock":return[f(0,0),f(r-1,0),f(0,o-1),f(r-1,o-1)]}},[n,e,t,s,i]);return u.jsx(u.Fragment,{children:a.map((r,o)=>u.jsxs("mesh",{position:r,children:[u.jsx("sphereGeometry",{args:[.06,8,8]}),u.jsx("meshStandardMaterial",{color:"#ff4455",emissive:"#ff2233",emissiveIntensity:.6})]},o))})}function Rt({label:n,children:e}){return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[u.jsx("div",{style:{fontSize:10,color:"#555",letterSpacing:.4},children:n}),e]})}function fd({active:n,onClick:e,children:t,small:s}){return u.jsx("button",{onClick:e,style:{flex:1,padding:s?"5px 0":"7px 0",fontSize:s?10:11,borderRadius:5,cursor:"pointer",background:n?"#2a2a4a":"#151520",color:n?"#9999ff":"#555",border:n?"1px solid #5E5CE6":"1px solid #222"},children:t})}function Ji({on:n,onClick:e,label:t}){return u.jsxs("div",{onClick:e,style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer",userSelect:"none"},children:[u.jsx("div",{style:{width:28,height:16,borderRadius:8,position:"relative",background:n?"#5E5CE6":"#1e1e2a",border:"1px solid #333",transition:"background .2s"},children:u.jsx("div",{style:{position:"absolute",top:2,left:n?11:2,width:10,height:10,borderRadius:"50%",background:n?"#fff":"#444",transition:"left .2s"}})}),u.jsx("span",{style:{fontSize:11,color:n?"#9999ff":"#555"},children:t})]})}const hd=[["Gravity","gravity",0,10,.1],["Wind forward","windZ",-3,10,.1],["Wind sideways","windX",-5,5,.1],["Turbulence","windTurb",0,8,.1],["Damping","damping",.95,1,.001],["Stiffness","constraintIters",1,20,1]];function pd(){const[n,e]=D.useState(22),[t,s]=D.useState(22),[i,a]=D.useState(3),[r,o]=D.useState(3),[l,f]=D.useState("curtain"),[h,c]=D.useState(0),[d,m]=D.useState("#5588cc"),[v,x]=D.useState(!1),[g,A]=D.useState(!0),[p,y]=D.useState(un.Curtain),b=D.useRef(p);D.useEffect(()=>{b.current=p},[p]);const B=E=>M=>y(R=>({...R,[E]:Number(M.target.value)})),C=E=>{const M=un[E];f(M.pinMode),y({gravity:M.gravity,windX:M.windX,windZ:M.windZ,windTurb:M.windTurb,damping:M.damping,constraintIters:M.constraintIters}),c(R=>R+1)},F={width:"100%",accentColor:"#5E5CE6"},w={borderTop:"1px solid #1a1a2a",paddingTop:12,display:"flex",flexDirection:"column",gap:8},T={fontSize:10,color:"#444",textTransform:"uppercase",letterSpacing:1},S=`${n}-${t}-${i}-${r}-${l}-${h}`;return u.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0a0a12",color:"#ddd"},children:[u.jsxs("div",{style:{width:268,padding:20,display:"flex",flexDirection:"column",gap:14,borderRight:"1px solid #1a1a2a",overflowY:"auto"},children:[u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[u.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Soft Lab"}),u.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[u.jsx("a",{href:"/shatter",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Shatter"}),u.jsx("a",{href:"/deform",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Deform"}),u.jsx("a",{href:"/particles",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Particles"}),u.jsx("a",{href:"/ripple",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Ripple"}),u.jsx("a",{href:"/jelly",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Jelly"})]})]}),u.jsxs("div",{style:w,children:[u.jsx("div",{style:T,children:"Presets"}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:Object.keys(un).map(E=>u.jsx("button",{onClick:()=>C(E),style:{padding:"5px 10px",fontSize:10,borderRadius:5,cursor:"pointer",background:"#151520",color:"#777",border:"1px solid #222"},children:E},E))}),u.jsx("button",{onClick:()=>c(E=>E+1),style:{padding:"7px",fontSize:11,borderRadius:5,cursor:"pointer",background:"#151520",color:"#555",border:"1px solid #222"},children:"↺ Reset cloth"})]}),u.jsxs("div",{style:w,children:[u.jsx("div",{style:T,children:"Cloth"}),u.jsx(Rt,{label:`Resolution: ${n}×${t}`,children:u.jsx("input",{type:"range",min:8,max:40,step:1,value:n,onChange:E=>{const M=Number(E.target.value);e(M),s(M)},style:F})}),u.jsx(Rt,{label:`Width: ${i.toFixed(1)}`,children:u.jsx("input",{type:"range",min:1,max:6,step:.1,value:i,onChange:E=>a(Number(E.target.value)),style:F})}),u.jsx(Rt,{label:`Height: ${r.toFixed(1)}`,children:u.jsx("input",{type:"range",min:1,max:6,step:.1,value:r,onChange:E=>o(Number(E.target.value)),style:F})})]}),u.jsxs("div",{style:w,children:[u.jsx("div",{style:T,children:"Pin mode"}),u.jsx("div",{style:{display:"flex",gap:5},children:["flag","curtain","sheet","hammock"].map(E=>u.jsx(fd,{small:!0,active:l===E,onClick:()=>{f(E),c(M=>M+1)},children:E[0].toUpperCase()+E.slice(1)},E))})]}),u.jsxs("div",{style:w,children:[u.jsx("div",{style:T,children:"Simulation"}),hd.map(([E,M,R,P,_])=>u.jsx(Rt,{label:`${E}: ${M==="constraintIters"?p[M].toFixed(0):M==="damping"?p[M].toFixed(3):p[M].toFixed(2)}`,children:u.jsx("input",{type:"range",min:R,max:P,step:_,value:p[M],onChange:B(M),style:F})},M))]}),u.jsxs("div",{style:w,children:[u.jsx("div",{style:T,children:"Rendering"}),u.jsx(Rt,{label:"Color",children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("input",{type:"color",value:d,onChange:E=>m(E.target.value),style:{width:32,height:22,border:"none",background:"none",cursor:"pointer",padding:0}}),u.jsx("span",{style:{fontSize:10,color:"#555"},children:d})]})}),u.jsx(Ji,{on:v,onClick:()=>x(E=>!E),label:"Wireframe"}),u.jsx(Ji,{on:g,onClick:()=>A(E=>!E),label:"Show pins"})]})]}),u.jsxs(Ms,{shadows:!0,camera:{position:[0,.5,5.5],fov:45},gl:{antialias:!0,toneMapping:_n,toneMappingExposure:1},style:{flex:1,background:"#04040c"},children:[u.jsx("ambientLight",{intensity:.35}),u.jsx("directionalLight",{position:[4,8,4],intensity:1.8,castShadow:!0,"shadow-mapSize":[1024,1024]}),u.jsx("pointLight",{position:[-4,1,-2],intensity:.6,color:"#4466ff"}),u.jsx("pointLight",{position:[3,-1,3],intensity:.3,color:"#ff8844"}),u.jsx(ws,{makeDefault:!0,target:[0,0,0]}),u.jsx(ud,{cols:n,rows:t,cW:i,cH:r,pinMode:l,paramsRef:b,color:d,wireframe:v},S),g&&u.jsx(dd,{cols:n,rows:t,cW:i,cH:r,pinMode:l},`pins-${S}`),u.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-3,0],receiveShadow:!0,children:[u.jsx("planeGeometry",{args:[14,14]}),u.jsx("meshStandardMaterial",{color:"#09090f",roughness:.95})]})]})]})}const H=90,Le=10;function md({waveSpeed:n,damping:e,disturbAmp:t,modelUrl:s,resetKey:i}){const a=D.useRef(new Float32Array(H*H)),r=D.useRef(new Float32Array(H*H)),o=D.useRef(null),[l,f]=D.useState(null),h=D.useMemo(()=>{const d=new Ro(Le,Le,H-1,H-1);return d.rotateX(-Math.PI/2),d},[]);D.useEffect(()=>{a.current.fill(0),r.current.fill(0)},[i]),D.useEffect(()=>{if(!s){f(null);return}new Ln().load(s,m=>{const v=m.scene,x=new re().setFromObject(v),g=x.getSize(new I);v.scale.setScalar(.9/Math.max(g.x,g.y,g.z)),x.setFromObject(v),v.position.sub(x.getCenter(new I)),v.position.y=.5;const A=Math.floor(H/2),p=Math.floor(H/2),y=8;for(let b=-y;b<=y;b++)for(let B=-y;B<=y;B++){const C=A+B,F=p+b;if(C>=0&&C<H&&F>=0&&F<H){const w=Math.sqrt(B*B+b*b);w<=y&&(a.current[F*H+C]-=.4*(1-w/y))}}f(v)})},[s]);const c=D.useCallback((d,m,v)=>{const x=Math.round((d/Le+.5)*(H-1)),g=Math.round((m/Le+.5)*(H-1)),A=4;for(let p=-A;p<=A;p++)for(let y=-A;y<=A;y++){const b=x+y,B=g+p;if(b>=0&&b<H&&B>=0&&B<H){const C=Math.sqrt(y*y+p*p);C<=A&&(a.current[B*H+b]-=v*(1-C/A))}}},[]);return jn(()=>{const d=a.current,m=r.current,v=Math.min(n,.49),x=7;for(let p=1;p<H-1;p++)for(let y=1;y<H-1;y++){const b=p*H+y,B=d[(p-1)*H+y]+d[(p+1)*H+y]+d[p*H+y-1]+d[p*H+y+1]-4*d[b];m[b]=(m[b]+v*B)*e}for(let p=0;p<H*H;p++)d[p]+=m[p];for(let p=0;p<H;p++)for(let y=0;y<H;y++){const b=Math.min(y,p,H-1-y,H-1-p);if(b<x){const B=(b/x)**2,C=Lt.lerp(.75,1,B),F=p*H+y;d[F]*=C,m[F]*=C}}const g=h.attributes.position;for(let p=0;p<H;p++)for(let y=0;y<H;y++)g.setY(p*H+y,d[p*H+y]);g.needsUpdate=!0,h.computeVertexNormals();const A=o.current;if(A){const p=Math.round((A.position.x/Le+.5)*(H-1)),y=Math.round((A.position.z/Le+.5)*(H-1));if(p>=0&&p<H&&y>=0&&y<H){const b=d[y*H+p];A.position.y=b+.45,A.rotation.x=b*.25,A.rotation.z=b*.15}}}),u.jsxs(u.Fragment,{children:[u.jsx("mesh",{geometry:h,onPointerDown:d=>{d.stopPropagation(),c(d.point.x,d.point.z,t)},onPointerMove:d=>{d.buttons>0&&c(d.point.x,d.point.z,t*.35)},children:u.jsx("meshStandardMaterial",{color:"#0a3060",roughness:.03,metalness:.45,envMapIntensity:3})}),l&&u.jsx("primitive",{ref:o,object:l})]})}function dn({label:n,children:e}){return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[u.jsx("div",{style:{fontSize:10,color:"#555",letterSpacing:.4},children:n}),e]})}function gd(){const[n,e]=D.useState(.32),[t,s]=D.useState(.995),[i,a]=D.useState(.4),[r,o]=D.useState(null),[l,f]=D.useState(""),[h,c]=D.useState(0),d=D.useCallback(g=>{!g.name.endsWith(".glb")&&!g.name.endsWith(".gltf")||(r&&URL.revokeObjectURL(r),o(URL.createObjectURL(g)),f(g.name))},[r]),m={width:"100%",accentColor:"#5E5CE6"},v={borderTop:"1px solid #1a1a2a",paddingTop:12,display:"flex",flexDirection:"column",gap:8},x={fontSize:10,color:"#444",textTransform:"uppercase",letterSpacing:1};return u.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0a0a12",color:"#ddd"},children:[u.jsxs("div",{style:{width:268,padding:20,display:"flex",flexDirection:"column",gap:14,borderRight:"1px solid #1a1a2a",overflowY:"auto"},children:[u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[u.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Ripple Lab"}),u.jsx("div",{style:{fontSize:11,color:"#444",lineHeight:1.5},children:"Click or drag on the water to create waves."}),u.jsxs("div",{style:{display:"flex",gap:10,marginTop:4},children:[u.jsx("a",{href:"/soft",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Cloth"}),u.jsx("a",{href:"/jelly",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Jelly"}),u.jsx("a",{href:"/particles",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Particles"})]})]}),u.jsxs("div",{style:v,children:[u.jsx("div",{style:x,children:"Object on water"}),u.jsx("div",{onDrop:g=>{g.preventDefault();const A=g.dataTransfer.files[0];A&&d(A)},onDragOver:g=>g.preventDefault(),onClick:()=>document.getElementById("glb-ripple").click(),style:{border:`2px dashed ${r?"#5E5CE6":"#222"}`,borderRadius:8,padding:"10px 8px",textAlign:"center",cursor:"pointer",fontSize:11,color:r?"#9999ff":"#444"},children:l||"Drop a GLB — it will float"}),u.jsx("input",{id:"glb-ripple",type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:g=>{var p;const A=(p=g.target.files)==null?void 0:p[0];A&&d(A)}}),r&&u.jsx("button",{onClick:()=>{o(null),f("")},style:{padding:"5px",fontSize:10,borderRadius:5,cursor:"pointer",background:"#151520",color:"#666",border:"1px solid #222"},children:"Remove object"})]}),u.jsxs("div",{style:v,children:[u.jsx("div",{style:x,children:"Simulation"}),u.jsx(dn,{label:`Wave speed: ${n.toFixed(2)}`,children:u.jsx("input",{type:"range",min:.05,max:.48,step:.01,value:n,onChange:g=>e(Number(g.target.value)),style:m})}),u.jsx(dn,{label:`Damping: ${t.toFixed(3)}`,children:u.jsx("input",{type:"range",min:.96,max:.999,step:.001,value:t,onChange:g=>s(Number(g.target.value)),style:m})}),u.jsx(dn,{label:`Disturbance: ${i.toFixed(2)}`,children:u.jsx("input",{type:"range",min:.05,max:1.5,step:.05,value:i,onChange:g=>a(Number(g.target.value)),style:m})})]}),u.jsx("div",{style:v,children:u.jsx("button",{onClick:()=>c(g=>g+1),style:{padding:"8px",fontSize:11,borderRadius:5,cursor:"pointer",background:"#151520",color:"#666",border:"1px solid #222"},children:"↺ Clear water"})})]}),u.jsxs(Ms,{camera:{position:[0,6,8],fov:45},gl:{antialias:!0,toneMapping:_n,toneMappingExposure:1.2},style:{flex:1,background:"#04040c"},children:[u.jsx("ambientLight",{intensity:.3}),u.jsx("directionalLight",{position:[5,8,3],intensity:1.5}),u.jsx(Gn,{preset:"sunset"}),u.jsx(ws,{makeDefault:!0,target:[0,0,0],maxPolarAngle:Math.PI/2.1}),u.jsx(md,{waveSpeed:n,damping:t,disturbAmp:i,modelUrl:r,resetKey:h}),u.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-.5,0],children:[u.jsx("planeGeometry",{args:[Le,Le]}),u.jsx("meshStandardMaterial",{color:"#071830",roughness:.9})]})]})]})}const xd="/phys_tool/".replace(/\/$/,""),Ge=window.location.pathname.slice(xd.length)||"/",Ad=Ge==="/lab"?u.jsx(_o,{}):Ge==="/sim"?u.jsx(ad,{}):Ge==="/shatter"?u.jsx(Go,{}):Ge==="/deform"?u.jsx(jo,{}):Ge==="/particles"?u.jsx(Lo,{}):Ge==="/soft"?u.jsx(pd,{}):Ge==="/ripple"?u.jsx(gd,{}):Ge==="/fluid"?u.jsx(Ho,{}):u.jsx(sd,{});Io.createRoot(document.getElementById("root")).render(u.jsx(Po.StrictMode,{children:Ad}));
