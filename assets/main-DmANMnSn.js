import{j as u,r as E,V as _,S as js,B as Hs,U as da,v as ur,M as it,a as ks,L as Os,b as zt,F as Kt,c as me,d as Ce,C as Z,e as fa,P as ha,D as pa,f as $,I as ma,Q as Pn,g as ga,O as zs,T as xa,h as Aa,i as q,k as ya,l as dr,N as va,m as ba,n as Ca,o as ie,p as ee,R as Xe,q as Ba,s as Qe,t as Ta,u as Un,w as Sa,x as Ie,y as Ln,z as Je,A as Ma,E as Fe,G as Fa,H as li,J as wa,K as Da,W as Ea,X as Ra,Y as Jn,Z as Ns,_ as Nt,$ as Ia,a0 as _a,a1 as Pa,a2 as La,a3 as Ga,a4 as fr,a5 as ja,a6 as ci,a7 as ui,a8 as di,a9 as fi,aa as wn,ab as Ha,ac as ae,ad as hr,ae as ka,af as Oa,ag as Xt,ah as pr,ai as _e,aj as jt,ak as Ut,al as ve,am as Wn,an as oe,ao as vs,ap as za,aq as hi,ar as Na,as as te,at as bs,au as mr,av as Ua,aw as gr,ax as Bt,ay as Ja,az as Tt,aA as Wa,aB as Us,aC as Sn,aD as St,aE as ce,aF as Ka,aG as Xa,aH as xr,aI as Ar,aJ as Ue,aK as Va,aL as Qa,aM as Ya,aN as qa,aO as Za,aP as $a,aQ as fe,aR as Dn,aS as yr,aT as Gn,aU as Js,aV as vr,aW as jn,aX as br,aY as Ws,aZ as Kn,a_ as Ks,a$ as el,b0 as Xs,b1 as tl,b2 as nl,b3 as sl,b4 as il,b5 as rl,b6 as ol,b7 as al,b8 as ll,b9 as cl}from"./index-sfY9tjlY.js";const ul={mark:{label:"Mark",badge:"L1"},collection1:{label:"Collection",badge:"L2"},collection2:{label:"Collection",badge:"L3"},scene:{label:"Scene",badge:"Env"}},dl={1:["mark","scene"],2:["mark","collection1","scene"],3:["mark","collection1","collection2","scene"]},Xn={padding:"8px 12px",borderRadius:"10px",fontSize:"12px",fontWeight:"500",cursor:"pointer",fontFamily:"inherit",transition:"border-color 0.15s, color 0.15s",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",width:"100%"};function fl({level:n,activeElement:e,onSelectElement:t,onAdvanceLevel:s,onDowngradeLevel:i,decorations:a,activeDecorationId:r,onSelectDecoration:o,onAddDecoration:l,onRemoveDecoration:d}){const h=dl[n];return u.jsxs("div",{style:{padding:"14px 14px 14px",display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsx("div",{style:{paddingTop:"12px"},children:u.jsx("div",{style:{fontSize:"16px",color:"#1D1D1F",fontWeight:"700"},children:"Visualization Hierarchy"})}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:h.map(c=>{const f=ul[c],p=c===e&&r===null;return u.jsxs("button",{onClick:()=>t(c),style:{display:"flex",alignItems:"center",gap:"10px",padding:"9px 12px",width:"100%",textAlign:"left",background:p?"#F2F2F7":"#FAFAFA",border:`1.5px solid ${p?"#1D1D1F":"#E5E5EA"}`,borderRadius:"10px",cursor:"pointer",transition:"border-color 0.15s, background 0.15s",fontFamily:"inherit"},children:[u.jsx("div",{style:{flex:1,minWidth:0},children:u.jsx("div",{style:{fontSize:"12px",color:"#1D1D1F",fontWeight:p?"600":"500",lineHeight:1.2},children:f.label})}),u.jsx("span",{style:{fontSize:"9px",letterSpacing:"0.06em",fontWeight:"500",color:p?"#1D1D1F":"#8E8E93",border:`1px solid ${p?"#1D1D1F":"#D1D1D6"}`,borderRadius:"4px",padding:"1px 5px",flexShrink:0,transition:"color 0.15s, border-color 0.15s"},children:f.badge})]},c)})}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px",paddingTop:"2px"},children:[n<3&&u.jsx("button",{onClick:s,style:{...Xn,background:"transparent",border:"1.5px dashed #C7C7CC",color:"#8E8E93"},children:"+ Add Collection"}),n>1&&u.jsx("button",{onClick:i,style:{...Xn,background:"transparent",border:"1.5px dashed #C7C7CC",color:"#8E8E93"},children:"− Remove Collection"})]}),u.jsxs("div",{style:{borderTop:"1px solid #E5E5EA",paddingTop:"8px",display:"flex",flexDirection:"column",gap:"5px"},children:[u.jsx("div",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600",marginBottom:"2px"},children:"Decorations"}),a.map((c,f)=>{const p=c.id===r;return u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[u.jsxs("button",{onClick:()=>o(c.id),style:{flex:1,display:"flex",alignItems:"center",gap:"8px",padding:"7px 10px",textAlign:"left",background:p?"#F2F2F7":"#FAFAFA",border:`1.5px solid ${p?"#1D1D1F":"#E5E5EA"}`,borderRadius:"8px",cursor:"pointer",fontFamily:"inherit",transition:"border-color 0.15s, background 0.15s"},children:[u.jsxs("span",{style:{fontSize:"12px",color:"#1D1D1F",fontWeight:p?"600":"400",flex:1},children:["Decoration ",f+1]}),u.jsx("span",{style:{fontSize:"9px",color:p?"#1D1D1F":"#8E8E93",border:`1px solid ${p?"#1D1D1F":"#D1D1D6"}`,borderRadius:"4px",padding:"1px 5px"},children:"Dec"})]}),u.jsx("button",{onClick:()=>d(c.id),title:"Remove decoration",style:{background:"none",border:"none",cursor:"pointer",color:"#AEAEB2",fontSize:"16px",lineHeight:1,padding:"4px 6px",flexShrink:0,fontFamily:"inherit"},children:"×"})]},c.id)}),u.jsx("button",{onClick:l,style:{...Xn,background:"transparent",border:"1.5px dashed #C7C7CC",color:"#8E8E93"},children:"+ Add Decoration"})]})]})}const hl="/phys_tool/assets/alien_flower-zZ3bV18x.glb",pl="/phys_tool/assets/apple-eGn8NxlU.glb",ml="/phys_tool/assets/apple1-DKIWFdlj.glb",gl="/phys_tool/assets/building_05-Dd9WS5y6.glb",xl="/phys_tool/assets/cigarette-DLVHKG5C.glb",Al="/phys_tool/assets/clarinet_model_with_annotations-DEVclDem.glb",yl="/phys_tool/assets/drum-bttmtw-P.glb",vl="/phys_tool/assets/earth%20(2)-C5XamLcy.glb",bl="/phys_tool/assets/flowers-Cclll0mT.glb",Cl="/phys_tool/assets/game-ready_humpback_whale-CUy_iCmW.glb",Bl="/phys_tool/assets/glass_bowl-ORbZUikN.glb",Tl="/phys_tool/assets/harp-DcE4JwQ7.glb",Sl="/phys_tool/assets/ikea_glass-BpPWnL-f.glb",Ml="/phys_tool/assets/lowpoly_pine_trunk-CHGVICL4.glb",Fl="/phys_tool/assets/old_japanese_store__lowpoly-DJHefVd3.glb",wl="/phys_tool/assets/paper_wad-Dr6Z0joQ.glb",Dl="/phys_tool/assets/plastic_water_bottle-Bu0jSrGO.glb",El="/phys_tool/assets/simple_fish_bowl-DqOw7pGz.glb",Rl="/phys_tool/assets/slime_rancher_pink_slime--xF-xp-9.glb",Il="/phys_tool/assets/stradivari_violin-Bcp-R8OH.glb",_l="/phys_tool/assets/trumpet-Dl4BoE_z.glb",Pl="/phys_tool/assets/wild_cherry_tree_trunk_prunus_avium-kTaWeuzU.glb",Ll=Object.assign({"./assets/models/alien_flower.glb":hl,"./assets/models/apple.glb":pl,"./assets/models/apple1.glb":ml,"./assets/models/building_05.glb":gl,"./assets/models/cigarette.glb":xl,"./assets/models/clarinet_model_with_annotations.glb":Al,"./assets/models/drum.glb":yl,"./assets/models/earth (2).glb":vl,"./assets/models/flowers.glb":bl,"./assets/models/game-ready_humpback_whale.glb":Cl,"./assets/models/glass_bowl.glb":Bl,"./assets/models/harp.glb":Tl,"./assets/models/ikea_glass.glb":Sl,"./assets/models/lowpoly_pine_trunk.glb":Ml,"./assets/models/old_japanese_store__lowpoly.glb":Fl,"./assets/models/paper_wad.glb":wl,"./assets/models/plastic_water_bottle.glb":Dl,"./assets/models/simple_fish_bowl.glb":El,"./assets/models/slime_rancher_pink_slime.glb":Rl,"./assets/models/stradivari_violin.glb":Il,"./assets/models/trumpet.glb":_l,"./assets/models/wild_cherry_tree_trunk_prunus_avium.glb":Pl}),Ht=Object.entries(Ll).map(([n,e])=>({name:n.replace(/^.*\//,"").replace(/\.(glb|gltf)$/i,""),url:e})).sort((n,e)=>n.name.localeCompare(e.name));function pi(n){if(n.shape!=="custom")return n;const e=Ht.find(t=>t.name===n.customModelName);return e?{...n,customModelUrl:e.url}:!n.customModelUrl||n.customModelUrl.startsWith("blob:")?{...n,shape:"box",customModelUrl:void 0,customModelHasMat:void 0}:n}const mi={weight:{label:"Weight",type:"numerical"},garbageType:{label:"Garbage Type",type:"categorical"},count:{label:"Count",type:"numerical"}};function Gl(n){return 2*Math.atan(12/n)*180/Math.PI}const ot="/phys_tool/",Se={spatial:`${ot}assets/icons/spatial.png`,shape:`${ot}assets/icons/shape.png`,material:`${ot}assets/icons/material.png`,populations:`${ot}assets/icons/populations.png`,framing:`${ot}assets/icons/framing.png`,labels:`${ot}assets/icons/labels.png`};function jl({children:n}){return u.jsx("span",{style:{fontSize:"10px",color:"#8E8E93",textTransform:"uppercase",letterSpacing:"0.07em",fontWeight:"600"},children:n})}function X({label:n,children:e,right:t}){return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx(jl,{children:n}),t]}),e]})}function Cs({options:n,value:e,onChange:t}){return u.jsx("div",{style:{display:"flex",background:"#EFEFEF",borderRadius:"8px",padding:"2px",gap:"2px"},children:n.map(s=>{const i=e===s.value;return u.jsx("button",{onClick:()=>t(s.value),style:{flex:1,padding:"5px 4px",background:i?"#FFFFFF":"transparent",border:"none",borderRadius:"6px",boxShadow:i?"0 1px 3px rgba(0,0,0,0.12)":"none",color:i?"#1D1D1F":"#6C6C70",cursor:"pointer",fontSize:"12px",fontWeight:i?"600":"400",transition:"all 0.15s",whiteSpace:"nowrap",fontFamily:"inherit"},children:s.label},s.value)})})}const Cr={weight:{label:"Weight",type:"numerical"},garbageType:{label:"Garbage Type",type:"categorical"},count:{label:"Count",type:"numerical"}};function Bs({children:n,accepts:e,onDrop:t}){const[s,i]=E.useState(!1),a=e==="any"?["phys-var/numerical","phys-var/categorical"]:[`phys-var/${e}`],r=l=>a.some(d=>l.includes(d)),o=e==="categorical"?"#5E5CE6":"#007AFF";return u.jsx("div",{onDragOver:l=>{r(l.dataTransfer.types)&&(l.preventDefault(),i(!0))},onDragLeave:()=>i(!1),onDrop:l=>{r(l.dataTransfer.types)&&(l.preventDefault(),i(!1),t(l.dataTransfer.getData("phys-var/name")))},style:{borderRadius:"8px",outline:s?`2px dashed ${o}`:"2px dashed transparent",outlineOffset:"2px",transition:"outline 0.1s"},children:n})}function En({label:n,type:e,onClear:t}){return u.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"#EBF3FF",border:"1px solid #A8CAFF",borderRadius:"7px",padding:"6px 10px",fontSize:"12px",color:"#007AFF",fontWeight:"500"},children:[u.jsxs("span",{children:[e==="numerical"?"#":"◈"," ",n]}),u.jsx("button",{onClick:t,style:{background:"none",border:"none",cursor:"pointer",color:"#60A0EE",padding:"0 0 0 2px",fontSize:"14px",lineHeight:1,fontFamily:"inherit"},children:"×"})]})}const Hl={top:"↑",bottom:"↓",left:"←",right:"→"};function $t({position:n,slot:e,onBind:t,onClear:s}){const[i,a]=E.useState(!1);if(e!==null){const r=Cr[e];return u.jsx(En,{label:r.label,type:r.type,onClear:s})}return u.jsxs("div",{onDragOver:r=>{r.dataTransfer.types.some(l=>l==="phys-var/numerical"||l==="phys-var/categorical")&&(r.preventDefault(),a(!0))},onDragLeave:()=>a(!1),onDrop:r=>{r.dataTransfer.types.some(l=>l==="phys-var/numerical"||l==="phys-var/categorical")&&(r.preventDefault(),a(!1),t(r.dataTransfer.getData("phys-var/name")))},title:`Drag a variable to the ${n} label`,style:{border:`1.5px dashed ${i?"#007AFF":"#D1D1D6"}`,borderRadius:"7px",padding:"4px 8px",fontSize:"10px",color:i?"#007AFF":"#AEAEB2",textAlign:"center",whiteSpace:"nowrap",background:i?"#EBF3FF":"transparent",transition:"all 0.1s",cursor:"default",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px"},children:[u.jsx("span",{children:Hl[n]}),u.jsx("span",{style:{textTransform:"capitalize"},children:n})]})}function Br({config:n,onChange:e}){function t(s,i){e({...n,slots:{...n.slots,[s]:i}})}return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsx("button",{onClick:()=>e({...n,show:!n.show}),style:{alignSelf:"flex-start",background:n.show?"#EBF3FF":"#F2F2F7",border:`1px solid ${n.show?"#A8CAFF":"#D1D1D6"}`,color:n.show?"#007AFF":"#6C6C70",borderRadius:"6px",padding:"6px 14px",fontSize:"12px",fontWeight:n.show?"600":"400",cursor:"pointer",fontFamily:"inherit",transition:"all 0.15s"},children:n.show?"● Visible":"○ Hidden"}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto 1fr",gridTemplateRows:"auto auto auto",gap:"4px",alignItems:"center",justifyItems:"center"},children:[u.jsx("div",{}),u.jsx($t,{position:"top",slot:n.slots.top,onBind:s=>t("top",s),onClear:()=>t("top",null)}),u.jsx("div",{}),u.jsx($t,{position:"left",slot:n.slots.left,onBind:s=>t("left",s),onClear:()=>t("left",null)}),u.jsx("div",{style:{width:"18px",height:"18px",background:"#E5E5EA",borderRadius:"4px",flexShrink:0}}),u.jsx($t,{position:"right",slot:n.slots.right,onBind:s=>t("right",s),onClear:()=>t("right",null)}),u.jsx("div",{}),u.jsx($t,{position:"bottom",slot:n.slots.bottom,onBind:s=>t("bottom",s),onClear:()=>t("bottom",null)}),u.jsx("div",{})]})]})}function Me({icon:n,title:e,open:t=!1,onToggle:s,children:i,empty:a=!1}){return u.jsxs("div",{style:{border:"1px solid #E5E5EA",borderRadius:"10px",overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},children:[u.jsxs("button",{onClick:s,style:{display:"flex",alignItems:"center",gap:"9px",padding:"9px 12px",width:"100%",textAlign:"left",background:"#F8F8FA",border:"none",borderBottom:t&&!a?"1px solid #E5E5EA":"none",cursor:"pointer",fontFamily:"inherit",transition:"background 0.1s"},children:[u.jsx("img",{src:n,alt:e,style:{width:"24px",height:"24px",borderRadius:"6px",flexShrink:0,objectFit:"cover"}}),u.jsx("span",{style:{flex:1,fontSize:"12px",fontWeight:"600",color:"#1D1D1F",lineHeight:1},children:e}),u.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",transition:"transform 0.15s",display:"inline-block",transform:t?"rotate(0deg)":"rotate(-90deg)"},children:"▾"})]}),t&&u.jsx("div",{style:{padding:"12px",background:"#FFFFFF",display:"flex",flexDirection:"column",gap:"12px"},children:a?u.jsx("div",{style:{fontSize:"11px",color:"#C7C7CC",textAlign:"center",padding:"8px 0",fontStyle:"italic"},children:"Coming soon"}):i})]})}function Vs(n,e){const[t,s]=E.useState(n);return E.useEffect(()=>{e!==void 0&&s(e)},[e]),{isOpen:i=>t===i,toggle:i=>s(a=>a===i?"":i)}}function st({label:n,value:e,onChange:t,min:s,max:i,step:a=.1,lockable:r=!1,axisBindings:o,onAxisBind:l}){const[d,h]=E.useState(!1),[c,f]=E.useState(null),p=["x","y","z"];function y(g,x){if(d&&e[g]!==0){const m=x/e[g];t({x:g==="x"?x:parseFloat((e.x*m).toFixed(3)),y:g==="y"?x:parseFloat((e.y*m).toFixed(3)),z:g==="z"?x:parseFloat((e.z*m).toFixed(3))})}else t({...e,[g]:x})}const A=r?u.jsx("button",{onClick:g=>{g.stopPropagation(),h(!d)},title:d?"Unlock proportions":"Lock proportions (scale all axes together)",style:{background:d?"#007AFF":"transparent",border:`1px solid ${d?"#007AFF":"#D1D1D6"}`,borderRadius:"4px",padding:"1px 7px",lineHeight:"16px",cursor:"pointer",fontSize:"10px",color:d?"#fff":"#AEAEB2",fontFamily:"inherit",transition:"all 0.12s"},children:"⛓"}):void 0;return u.jsx(X,{label:n,right:A,children:u.jsx("div",{style:{display:"flex",gap:"5px"},children:p.map(g=>{const x=(o==null?void 0:o[g])??null,m=c===g;if(x!==null&&l){const v=Cr[x];return u.jsx("div",{style:{flex:1},children:u.jsxs("div",{style:{display:"flex",alignItems:"stretch",border:`1px solid ${v.type==="numerical"?"#A8CAFF":"#C8A8FF"}`,borderRadius:"6px",overflow:"hidden",background:v.type==="numerical"?"#EBF3FF":"#F3EBFF"},children:[u.jsx("span",{style:{padding:"4px 5px",background:v.type==="numerical"?"#C5DFFF":"#DFC5FF",color:v.type==="numerical"?"#0055CC":"#5500CC",fontSize:"9px",fontWeight:"700",letterSpacing:"0.03em",display:"flex",alignItems:"center",flexShrink:0},children:g.toUpperCase()}),u.jsxs("span",{style:{flex:1,padding:"4px 4px",fontSize:"10px",color:v.type==="numerical"?"#007AFF":"#5E5CE6",fontWeight:"600",display:"flex",alignItems:"center",overflow:"hidden",whiteSpace:"nowrap"},children:[v.type==="numerical"?"#":"◈"," ",v.label]}),u.jsx("button",{onClick:()=>l(g,null),style:{background:"none",border:"none",cursor:"pointer",color:"#AEAEB2",padding:"0 4px",fontSize:"13px",lineHeight:1,fontFamily:"inherit"},children:"×"})]})},g)}return u.jsx("div",{style:{flex:1},onDragOver:v=>{o&&v.dataTransfer.types.includes("phys-var/numerical")&&(v.preventDefault(),f(g))},onDragLeave:()=>f(null),onDrop:v=>{!o||!v.dataTransfer.types.includes("phys-var/numerical")||(v.preventDefault(),f(null),l==null||l(g,v.dataTransfer.getData("phys-var/name")))},children:u.jsxs("div",{style:{display:"flex",alignItems:"stretch",border:`1px solid ${m?"#007AFF":"#D1D1D6"}`,borderRadius:"6px",overflow:"hidden",outline:m?"1px dashed #007AFF":"none",outlineOffset:"1px"},children:[u.jsx("span",{style:{padding:"4px 5px",background:"#E5E5EA",color:"#6C6C70",fontSize:"9px",fontWeight:"700",letterSpacing:"0.03em",display:"flex",alignItems:"center",flexShrink:0},children:g.toUpperCase()}),u.jsx("input",{type:"number",value:e[g],min:s,max:i,step:a,onChange:v=>y(g,Number(v.target.value)),style:{flex:1,minWidth:0,background:"#F2F2F7",border:"none",padding:"4px 5px",fontSize:"11px",color:"#1D1D1F",outline:"none",fontFamily:"monospace",width:"100%"}})]})},g)})})})}const Tr={plastic:"Matte diffuse surface",fluid:"Glass-like, clearcoat + iridescence",metal:"Polished — mirrors the HDRI",emissive:"Self-illuminated, glows with color",original:"Use the model's built-in materials"},Sr=["plastic","fluid","metal","emissive"],kl=[{value:"alignment",label:"Alignment"},{value:"scattering",label:"Scattering"},{value:"stacking",label:"Stacking"},{value:"piling",label:"Piling"}],Ol=[{value:"city",label:"City"},{value:"warehouse",label:"Warehouse"},{value:"sunset",label:"Sunset"},{value:"dawn",label:"Dawn"},{value:"forest",label:"Forest"},{value:"night",label:"Night"},{value:"studio",label:"Studio"},{value:"apartment",label:"Apartment"}];function Hn({title:n}){return u.jsx("div",{style:{fontSize:"16px",color:"#1D1D1F",fontWeight:"700"},children:n})}function Ts({config:n,onChange:e}){const t=E.useRef(null),s=E.useRef(null),i=n.shape==="custom"&&Ht.some(h=>h.name===n.customModelName),a=n.shape==="custom"&&!i,r=n.shape!=="custom"?n.shape:i?`preset:${n.customModelName}`:n.customModelUrl?"__blob__":"box";function o(h){var p;const c=h.target.value;if(c==="__import__"){(p=t.current)==null||p.click();return}if(c==="__blob__")return;if(c.startsWith("preset:")){const y=c.slice(7),A=Ht.find(g=>g.name===y);A&&e({shape:"custom",customModelUrl:A.url,customModelHasMat:!0,customModelName:A.name,material:"original"});return}const f=n.material==="original"?"plastic":n.material;e({shape:c,customModelUrl:void 0,customModelHasMat:void 0,customModelName:void 0,material:f})}function l(h){var y;const c=(y=h.target.files)==null?void 0:y[0];if(!c)return;s.current&&URL.revokeObjectURL(s.current);const f=URL.createObjectURL(c);s.current=f;const p=c.name.replace(/\.(glb|gltf)$/i,"");e({shape:"custom",customModelUrl:f,customModelHasMat:!0,customModelName:p,material:"original"}),h.target.value=""}const d={width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"};return u.jsxs(u.Fragment,{children:[u.jsxs("select",{value:r,onChange:o,style:d,children:[u.jsxs("optgroup",{label:"Primitives",children:[u.jsx("option",{value:"box",children:"■  Box"}),u.jsx("option",{value:"sphere",children:"●  Sphere"}),u.jsx("option",{value:"star",children:"★  Star"})]}),Ht.length>0&&u.jsx("optgroup",{label:"3D Models",children:Ht.map(h=>u.jsx("option",{value:`preset:${h.name}`,children:h.name},h.name))}),u.jsxs("optgroup",{label:"Custom",children:[a&&u.jsxs("option",{value:"__blob__",children:["✎  ",n.customModelName??"Imported file"]}),u.jsx("option",{value:"__import__",children:"↑  Import .glb / .gltf…"})]})]}),u.jsx("input",{ref:t,type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:l})]})}function zl({config:n,onChange:e,bindings:t,onBind:s,labelConfig:i,onLabelChange:a,colorMode:r,colorGradient:o,onColorGradientChange:l,openSection:d,layers:h,compositionLevel:c}){var y,A;const f=n.shape==="custom"&&n.customModelHasMat?["original","plastic","fluid","metal","emissive"]:Sr,p=Vs("Spatial",d);return u.jsxs(u.Fragment,{children:[u.jsx(Hn,{title:"Mark"}),u.jsxs(Me,{icon:Se.spatial,title:"Spatial",open:p.isOpen("Spatial"),onToggle:()=>p.toggle("Spatial"),children:[u.jsx(st,{label:"Position",value:n.position,onChange:g=>e({...n,position:g}),min:-10,max:10,step:.1}),u.jsx(X,{label:"Scale",children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("input",{type:"range",min:.1,max:10,step:.1,value:n.scale??1,onChange:g=>e({...n,scale:Number(g.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),u.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:[(n.scale??1).toFixed(1),"×"]})]})}),u.jsx(st,{label:"Size",value:n.size,onChange:g=>e({...n,size:g}),min:.1,max:10,step:.1,lockable:!0,axisBindings:{x:t.markSizeX,y:t.markSizeY,z:t.markSizeZ},onAxisBind:(g,x)=>s(g==="x"?"markSizeX":g==="y"?"markSizeY":"markSizeZ",x)}),u.jsx(st,{label:"Orientation",value:n.orientation,onChange:g=>e({...n,orientation:g}),min:-180,max:180,step:1})]}),u.jsx(Me,{icon:Se.shape,title:"Geometry",open:p.isOpen("Geometry"),onToggle:()=>p.toggle("Geometry"),children:t.markGeometry!==null&&h.length>1?h.map(g=>{var v;const x=(v=n.categoryShapes)==null?void 0:v[g.name],m={shape:(x==null?void 0:x.shape)??n.shape,material:n.material,customModelUrl:x==null?void 0:x.customModelUrl,customModelHasMat:x==null?void 0:x.customModelHasMat,customModelName:x==null?void 0:x.customModelName};return u.jsx(X,{label:g.name,children:u.jsx(Ts,{config:m,onChange:b=>e({...n,categoryShapes:{...n.categoryShapes??{},[g.name]:{shape:b.shape??(x==null?void 0:x.shape)??n.shape,customModelUrl:b.customModelUrl,customModelHasMat:b.customModelHasMat,customModelName:b.customModelName}}})})},g.id)}):u.jsx(X,{label:"Shape",children:u.jsx(Ts,{config:n,onChange:g=>e({...n,...g})})})}),u.jsxs(Me,{icon:Se.material,title:"Material",open:p.isOpen("Material"),onToggle:()=>p.toggle("Material"),children:[u.jsxs(X,{label:"Type",children:[u.jsx("select",{value:n.material,onChange:g=>e({...n,material:g.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:f.map(g=>u.jsx("option",{value:g,children:g.charAt(0).toUpperCase()+g.slice(1)},g))}),u.jsx("div",{style:{fontSize:"11px",color:"#AEAEB2",lineHeight:1.5},children:Tr[n.material]})]}),u.jsx(X,{label:"Color",children:t.markColor!==null?u.jsxs(u.Fragment,{children:[u.jsx(En,{label:((y=mi[t.markColor])==null?void 0:y.label)??t.markColor,type:((A=mi[t.markColor])==null?void 0:A.type)??"categorical",onClear:()=>s("markColor",null)}),r==="continuous"&&o&&l&&u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginTop:"8px"},children:[u.jsx("input",{type:"color",value:o.from,onChange:g=>l({...o,from:g.target.value}),style:{width:"32px",height:"28px",border:"1px solid #D1D1D6",borderRadius:"5px",background:"none",cursor:"pointer",padding:"1px"}}),u.jsx("span",{style:{fontSize:"12px",color:"#AEAEB2",fontWeight:"500"},children:"→"}),u.jsx("input",{type:"color",value:o.to,onChange:g=>l({...o,to:g.target.value}),style:{width:"32px",height:"28px",border:"1px solid #D1D1D6",borderRadius:"5px",background:"none",cursor:"pointer",padding:"1px"}}),u.jsx("span",{style:{fontSize:"11px",color:"#8E8E93"},children:"Gradient"})]})]}):u.jsx(Bs,{accepts:"categorical",onDrop:()=>s("markColor","garbageType"),children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"2px"},children:[u.jsx("input",{type:"color",value:n.color,onChange:g=>e({...n,color:g.target.value}),style:{width:"36px",height:"32px",border:"1px solid #D1D1D6",borderRadius:"6px",background:"none",cursor:"pointer",padding:"2px"}}),u.jsx("span",{style:{fontSize:"12px",color:"#8E8E93",fontFamily:"monospace"},children:n.color})]})})})]}),u.jsx(Me,{icon:Se.labels,title:"Labels",open:p.isOpen("Labels"),onToggle:()=>p.toggle("Labels"),children:u.jsx(Br,{config:i,onChange:a})})]})}function gi({config:n,onChange:e,collectionLevel:t,bindings:s,onBind:i,labelConfig:a,onLabelChange:r,onReseed:o}){const l=t===2,d=Vs("Groups & Populations");return u.jsxs(u.Fragment,{children:[u.jsx(Hn,{title:"Collection"}),u.jsxs(Me,{icon:Se.populations,title:"Groups & Populations",open:d.isOpen("Groups & Populations"),onToggle:()=>d.toggle("Groups & Populations"),children:[u.jsx(X,{label:"Arrangement",children:u.jsx("select",{value:n.arrangement,onChange:h=>e({...n,arrangement:h.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:kl.map(h=>u.jsxs("option",{value:h.value,disabled:h.value==="stacking",children:[h.label,h.value==="stacking"?" (coming soon)":""]},h.value))})}),n.arrangement==="alignment"&&u.jsxs(u.Fragment,{children:[u.jsx(X,{label:"Elements",children:(()=>{const h=t===1?"c1AlignCount":"c2AlignCount",c=s[h],f=t===1?Object.values(s).some(y=>y!==null):s.scatterSize!==null,p={weight:{label:"Weight",type:"numerical"},garbageType:{label:"Garbage Type",type:"categorical"},count:{label:"Count",type:"numerical"}};if(c!==null){const y=p[c]??{label:c,type:"numerical"};return u.jsx(En,{label:y.label,type:y.type,onClear:()=>i(h,null)})}return f?u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",background:"#F2F2F7",border:"1px solid #E5E5EA",borderRadius:"7px",padding:"5px 10px"},children:[u.jsx("span",{style:{fontSize:"12px",color:"#1D1D1F",fontWeight:"600",flex:1},children:n.alignCount}),u.jsx("span",{style:{fontSize:"9px",color:"#AEAEB2",letterSpacing:"0.06em",fontWeight:"600"},children:"DATA"})]}):u.jsx(Bs,{accepts:"numerical",onDrop:()=>i(h,"count"),children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("input",{type:"range",min:2,max:20,step:1,value:n.alignCount,onChange:y=>e({...n,alignCount:Number(y.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),u.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:n.alignCount})]})})})()}),u.jsx(X,{label:"Axis",children:u.jsx(Cs,{options:[{value:"X",label:"→ X axis"},{value:"Y",label:"↑ Y axis"}],value:n.alignAxis,onChange:h=>e({...n,alignAxis:h})})}),u.jsx(X,{label:"Anchor",children:u.jsx(Cs,{options:n.alignAxis==="X"?[{value:"start",label:"↑ Top"},{value:"center",label:"◆ Ctr"},{value:"end",label:"↓ Bottom"}]:[{value:"start",label:"← Left"},{value:"center",label:"◆ Ctr"},{value:"end",label:"→ Right"}],value:n.alignAnchor,onChange:h=>e({...n,alignAnchor:h})})}),u.jsxs(X,{label:"Spacing",children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("input",{type:"range",min:.5,max:l?12:6,step:.1,value:n.alignSpacing,onChange:h=>e({...n,alignSpacing:Number(h.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),u.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:n.alignSpacing.toFixed(1)})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#C7C7CC"},children:[u.jsx("span",{children:"Tight"}),u.jsx("span",{children:"Spread"})]})]})]}),n.arrangement==="scattering"&&u.jsxs(u.Fragment,{children:[u.jsx(X,{label:"Quantity",children:u.jsx("div",{style:{display:"flex",gap:"4px"},children:["count","density"].map(h=>u.jsx("button",{onClick:()=>e({...n,scatterMode:h}),style:{flex:1,padding:"5px 0",background:(n.scatterMode??"count")===h?"#5E5CE6":"#F2F2F7",color:(n.scatterMode??"count")===h?"#fff":"#6C6C70",border:"1px solid",borderColor:(n.scatterMode??"count")===h?"#5E5CE6":"#E5E5EA",borderRadius:"6px",cursor:"pointer",fontSize:"11px",fontWeight:"600",fontFamily:"inherit"},children:h==="count"?"Count":"Density"},h))})}),(n.scatterMode??"count")==="count"?u.jsx(X,{label:"Mark Count",children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("input",{type:"range",min:5,max:600,step:5,value:n.scatterCount,onChange:h=>e({...n,scatterCount:Number(h.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),u.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:n.scatterCount})]})}):u.jsx(X,{label:"Density",children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("input",{type:"range",min:.05,max:5,step:.05,value:n.scatterDensity,onChange:h=>e({...n,scatterDensity:Number(h.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),u.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"36px",textAlign:"right"},children:[n.scatterDensity.toFixed(2),"/u³"]})]})}),s.scatterSize==="weight"?u.jsx(X,{label:"Box Dimensions",children:u.jsx(En,{label:"Weight",type:"numerical",onClear:()=>i("scatterSize",null)})}):u.jsx(Bs,{accepts:"numerical",onDrop:()=>i("scatterSize","weight"),children:u.jsx(st,{label:"Box Dimensions",value:n.scatterDimensions,onChange:h=>e({...n,scatterDimensions:h}),min:.5,max:20,step:.5})}),o&&u.jsx(X,{label:"Placement",children:u.jsx("button",{onClick:o,style:{width:"100%",padding:"6px 0",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:"#1D1D1F",fontFamily:"inherit"},onMouseEnter:h=>h.currentTarget.style.background="#E5E5EA",onMouseLeave:h=>h.currentTarget.style.background="#F2F2F7",children:"Randomise"})})]}),n.arrangement==="piling"&&u.jsx(X,{label:"Mark Count",children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("input",{type:"range",min:2,max:60,step:1,value:n.pilingCount,onChange:h=>e({...n,pilingCount:Number(h.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),u.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:n.pilingCount})]})})]}),t===1&&a&&r&&u.jsx(Me,{icon:Se.labels,title:"Labels",open:d.isOpen("Labels"),onToggle:()=>d.toggle("Labels"),children:u.jsx(Br,{config:a,onChange:r})})]})}function Nl({config:n,onChange:e}){const t=n.shape==="custom"&&n.customModelHasMat?["original","plastic","fluid","metal","emissive"]:Sr,s=Vs("Spatial");return u.jsxs(u.Fragment,{children:[u.jsx(Hn,{title:"Decoration"}),u.jsxs(Me,{icon:Se.spatial,title:"Spatial",open:s.isOpen("Spatial"),onToggle:()=>s.toggle("Spatial"),children:[u.jsx(st,{label:"Position",value:n.position,onChange:i=>e({...n,position:i}),min:-20,max:20,step:.1}),u.jsx(st,{label:"Size",value:n.size,onChange:i=>e({...n,size:i}),min:.1,max:10,step:.1,lockable:!0}),u.jsx(st,{label:"Orientation",value:n.orientation,onChange:i=>e({...n,orientation:i}),min:-180,max:180,step:1})]}),u.jsx(Me,{icon:Se.shape,title:"Geometry",open:s.isOpen("Geometry"),onToggle:()=>s.toggle("Geometry"),children:u.jsx(X,{label:"Shape",children:u.jsx(Ts,{config:n,onChange:i=>e({...n,...i})})})}),u.jsxs(Me,{icon:Se.material,title:"Material",open:s.isOpen("Material"),onToggle:()=>s.toggle("Material"),children:[u.jsxs(X,{label:"Type",children:[u.jsx("select",{value:n.material,onChange:i=>e({...n,material:i.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:t.map(i=>u.jsx("option",{value:i,children:i.charAt(0).toUpperCase()+i.slice(1)},i))}),u.jsx("div",{style:{fontSize:"11px",color:"#AEAEB2",lineHeight:1.5},children:Tr[n.material]})]}),u.jsx(X,{label:"Color",children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"2px"},children:[u.jsx("input",{type:"color",value:n.color,onChange:i=>e({...n,color:i.target.value}),style:{width:"36px",height:"32px",border:"1px solid #D1D1D6",borderRadius:"6px",background:"none",cursor:"pointer",padding:"2px"}}),u.jsx("span",{style:{fontSize:"12px",color:"#8E8E93",fontFamily:"monospace"},children:n.color})]})})]})]})}function Ul({config:n,onChange:e}){const[t,s]=E.useState(!0);return u.jsxs(u.Fragment,{children:[u.jsx(Hn,{title:"Scene"}),u.jsxs(Me,{icon:Se.framing,title:"Framing",open:t,onToggle:()=>s(i=>!i),children:[u.jsx(X,{label:"Background",children:u.jsx(Cs,{options:[{value:"dark",label:"■ Dark"},{value:"ocean",label:"~ Ocean"}],value:n.background,onChange:i=>e({...n,background:i})})}),u.jsx(X,{label:"Lighting (HDRI)",children:u.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px"},children:Ol.map(i=>{const a=n.hdriPreset===i.value;return u.jsx("button",{onClick:()=>e({...n,hdriPreset:i.value}),style:{padding:"5px 6px",background:a?"#EBF3FF":"#F2F2F7",border:`1px solid ${a?"#A8CAFF":"#E5E5EA"}`,borderRadius:"7px",color:a?"#007AFF":"#6C6C70",cursor:"pointer",fontSize:"11px",fontFamily:"inherit",fontWeight:a?"600":"400",transition:"all 0.1s",textAlign:"center"},children:i.label},i.value)})})}),u.jsxs(X,{label:"Camera",children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"2px"},children:[u.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",fontWeight:"500"},children:[n.focalLength,"mm"]}),u.jsxs("span",{style:{fontSize:"11px",color:"#AEAEB2"},children:[Gl(n.focalLength).toFixed(0),"° fov"]})]}),u.jsx("input",{type:"range",min:14,max:180,step:1,value:n.focalLength,onChange:i=>e({...n,focalLength:Number(i.target.value)}),style:{width:"100%",accentColor:"#34C759",cursor:"pointer"}}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#AEAEB2",marginTop:"2px"},children:[u.jsx("span",{children:"14mm wide"}),u.jsx("span",{children:"180mm tele"})]})]})]})]})}function Jl({activeElement:n,compositionLevel:e,layers:t,markConfig:s,onMarkChange:i,collection1Config:a,onCollection1Change:r,collection2Config:o,onCollection2Change:l,sceneConfig:d,onSceneChange:h,bindings:c,onBind:f,markLabelConfig:p,onMarkLabelChange:y,colLabelConfig:A,onColLabelChange:g,activeDecorationId:x,decorations:m,onDecorationChange:v,colorMode:b,colorGradient:C,onColorGradientChange:B,markOpenSection:T,onReseed:F}){const S=x!==null?m.find(D=>D.id===x)??null:null;return u.jsx("div",{style:{padding:"18px 14px",color:"#1D1D1F",fontSize:"13px",display:"flex",flexDirection:"column",gap:"10px",height:"100%",boxSizing:"border-box",overflowY:"auto"},children:S!==null?u.jsx(Nl,{config:S,onChange:v}):n==="mark"?u.jsx(zl,{config:s,onChange:i,bindings:c,onBind:f,labelConfig:p,onLabelChange:y,colorMode:b,colorGradient:C,onColorGradientChange:B,openSection:T,layers:t,compositionLevel:e}):n==="collection1"?u.jsx(gi,{config:a,onChange:r,collectionLevel:1,bindings:c,onBind:f,labelConfig:A,onLabelChange:g,onReseed:F}):n==="collection2"?u.jsx(gi,{config:o,onChange:l,collectionLevel:2,bindings:c,onBind:f,onReseed:F}):n==="scene"?u.jsx(Ul,{config:d,onChange:h}):null})}var Wl=Object.defineProperty,Kl=(n,e,t)=>e in n?Wl(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,xi=(n,e,t)=>(Kl(n,typeof e!="symbol"?e+"":e,t),t);const Xl=(()=>{const n={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new _},up:{value:new _(0,1,0)}},vertexShader:`
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
      #include <${ur>=154?"colorspace_fragment":"encodings_fragment"}>

      }
    `},e=new js({name:"SkyShader",fragmentShader:n.fragmentShader,vertexShader:n.vertexShader,uniforms:da.clone(n.uniforms),side:Hs,depthWrite:!1});class t extends it{constructor(){super(new ks(1,1,1),e)}}return xi(t,"SkyShader",n),xi(t,"material",e),t})();function Rn(n){if(typeof TextDecoder<"u")return new TextDecoder().decode(n);let e="";for(let t=0,s=n.length;t<s;t++)e+=String.fromCharCode(n[t]);try{return decodeURIComponent(escape(e))}catch{return e}}const nt="srgb",Pe="srgb-linear",Ai=3001,Vl=3e3;class Qs extends Os{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $l(t)}),this.register(function(t){return new ec(t)}),this.register(function(t){return new cc(t)}),this.register(function(t){return new uc(t)}),this.register(function(t){return new dc(t)}),this.register(function(t){return new nc(t)}),this.register(function(t){return new sc(t)}),this.register(function(t){return new ic(t)}),this.register(function(t){return new rc(t)}),this.register(function(t){return new Zl(t)}),this.register(function(t){return new oc(t)}),this.register(function(t){return new tc(t)}),this.register(function(t){return new lc(t)}),this.register(function(t){return new ac(t)}),this.register(function(t){return new Yl(t)}),this.register(function(t){return new fc(t)}),this.register(function(t){return new hc(t)})}load(e,t,s,i){const a=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const d=zt.extractUrlBase(e);r=zt.resolveURL(d,this.path)}else r=zt.extractUrlBase(e);this.manager.itemStart(e);const o=function(d){i?i(d):console.error(d),a.manager.itemError(e),a.manager.itemEnd(e)},l=new Kt(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(d){try{a.parse(d,r,function(h){t(h),a.manager.itemEnd(e)},o)}catch(h){o(h)}},s,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,s,i){let a;const r={},o={};if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Rn(new Uint8Array(e.slice(0,4)))===Mr){try{r[z.KHR_BINARY_GLTF]=new pc(e)}catch(h){i&&i(h);return}a=JSON.parse(r[z.KHR_BINARY_GLTF].content)}else a=JSON.parse(Rn(new Uint8Array(e)));else a=e;if(a.asset===void 0||a.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Fc(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,r[h.name]=!0}if(a.extensionsUsed)for(let d=0;d<a.extensionsUsed.length;++d){const h=a.extensionsUsed[d],c=a.extensionsRequired||[];switch(h){case z.KHR_MATERIALS_UNLIT:r[h]=new ql;break;case z.KHR_DRACO_MESH_COMPRESSION:r[h]=new mc(a,this.dracoLoader);break;case z.KHR_TEXTURE_TRANSFORM:r[h]=new gc;break;case z.KHR_MESH_QUANTIZATION:r[h]=new xc;break;default:c.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(s,i)}parseAsync(e,t){const s=this;return new Promise(function(i,a){s.parse(e,t,i,a)})}}function Ql(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const z={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Yl{constructor(e){this.parser=e,this.name=z.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let s=0,i=t.length;s<i;s++){const a=t[s];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,s="light:"+e;let i=t.cache.get(s);if(i)return i;const a=t.json,l=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let d;const h=new Z(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Pe);const c=l.range!==void 0?l.range:0;switch(l.type){case"directional":d=new pa(h),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new ha(h),d.distance=c;break;case"spot":d=new fa(h),d.distance=c,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,d.angle=l.spot.outerConeAngle,d.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return d.position.set(0,0,0),d.decay=2,Re(d,l),l.intensity!==void 0&&(d.intensity=l.intensity),d.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(d),t.cache.add(s,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,s=this.parser,a=s.json.nodes[e],o=(a.extensions&&a.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return s._getNodeRef(t.cache,o,l)})}}class ql{constructor(){this.name=z.KHR_MATERIALS_UNLIT}getMaterialType(){return Je}extendParams(e,t,s){const i=[];e.color=new Z(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const r=a.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Pe),e.opacity=r[3]}a.baseColorTexture!==void 0&&i.push(s.assignTexture(e,"map",a.baseColorTexture,nt))}return Promise.all(i)}}class Zl{constructor(e){this.parser=e,this.name=z.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class $l{constructor(e){this.parser=e,this.name=z.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:me}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&a.push(s.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&a.push(s.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(a.push(s.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(o,o)}return Promise.all(a)}}class ec{constructor(e){this.parser=e,this.name=z.KHR_MATERIALS_DISPERSION}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:me}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class tc{constructor(e){this.parser=e,this.name=z.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:me}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&a.push(s.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&a.push(s.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(a)}}class nc{constructor(e){this.parser=e,this.name=z.KHR_MATERIALS_SHEEN}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:me}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new Z(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const o=r.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Pe)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&a.push(s.assignTexture(t,"sheenColorMap",r.sheenColorTexture,nt)),r.sheenRoughnessTexture!==void 0&&a.push(s.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(a)}}class sc{constructor(e){this.parser=e,this.name=z.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:me}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&a.push(s.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(a)}}class ic{constructor(e){this.parser=e,this.name=z.KHR_MATERIALS_VOLUME}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:me}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&a.push(s.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new Z().setRGB(o[0],o[1],o[2],Pe),Promise.all(a)}}class rc{constructor(e){this.parser=e,this.name=z.KHR_MATERIALS_IOR}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:me}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class oc{constructor(e){this.parser=e,this.name=z.KHR_MATERIALS_SPECULAR}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:me}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&a.push(s.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new Z().setRGB(o[0],o[1],o[2],Pe),r.specularColorTexture!==void 0&&a.push(s.assignTexture(t,"specularColorMap",r.specularColorTexture,nt)),Promise.all(a)}}class ac{constructor(e){this.parser=e,this.name=z.EXT_MATERIALS_BUMP}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:me}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&a.push(s.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(a)}}class lc{constructor(e){this.parser=e,this.name=z.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:me}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&a.push(s.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(a)}}class cc{constructor(e){this.parser=e,this.name=z.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,s=t.json,i=s.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const a=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(s.extensionsRequired&&s.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,r)}}class uc{constructor(e){this.parser=e,this.name=z.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,s=this.parser,i=s.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=i.images[r.source];let l=s.textureLoader;if(o.uri){const d=s.options.manager.getHandler(o.uri);d!==null&&(l=d)}return this.detectSupport().then(function(d){if(d)return s.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return s.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class dc{constructor(e){this.parser=e,this.name=z.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,s=this.parser,i=s.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=i.images[r.source];let l=s.textureLoader;if(o.uri){const d=s.options.manager.getHandler(o.uri);d!==null&&(l=d)}return this.detectSupport().then(function(d){if(d)return s.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return s.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class fc{constructor(e){this.name=z.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,s=t.bufferViews[e];if(s.extensions&&s.extensions[this.name]){const i=s.extensions[this.name],a=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){const l=i.byteOffset||0,d=i.byteLength||0,h=i.count,c=i.byteStride,f=new Uint8Array(o,l,d);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,c,f,i.mode,i.filter).then(function(p){return p.buffer}):r.ready.then(function(){const p=new ArrayBuffer(h*c);return r.decodeGltfBuffer(new Uint8Array(p),h,c,f,i.mode,i.filter),p})})}else return null}}class hc{constructor(e){this.name=z.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,s=t.nodes[e];if(!s.extensions||!s.extensions[this.name]||s.mesh===void 0)return null;const i=t.meshes[s.mesh];for(const d of i.primitives)if(d.mode!==xe.TRIANGLES&&d.mode!==xe.TRIANGLE_STRIP&&d.mode!==xe.TRIANGLE_FAN&&d.mode!==void 0)return null;const r=s.extensions[this.name].attributes,o=[],l={};for(const d in r)o.push(this.parser.getDependency("accessor",r[d]).then(h=>(l[d]=h,l[d])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(d=>{const h=d.pop(),c=h.isGroup?h.children:[h],f=d[0].count,p=[];for(const y of c){const A=new $,g=new _,x=new Pn,m=new _(1,1,1),v=new ma(y.geometry,y.material,f);for(let b=0;b<f;b++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&x.fromBufferAttribute(l.ROTATION,b),l.SCALE&&m.fromBufferAttribute(l.SCALE,b),v.setMatrixAt(b,A.compose(g,x,m));for(const b in l)if(b==="_COLOR_0"){const C=l[b];v.instanceColor=new ga(C.array,C.itemSize,C.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&y.geometry.setAttribute(b,l[b]);zs.prototype.copy.call(v,y),this.parser.assignFinalMaterial(v),p.push(v)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Mr="glTF",wt=12,yi={JSON:1313821514,BIN:5130562};class pc{constructor(e){this.name=z.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,wt);if(this.header={magic:Rn(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Mr)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-wt,i=new DataView(e,wt);let a=0;for(;a<s;){const r=i.getUint32(a,!0);a+=4;const o=i.getUint32(a,!0);if(a+=4,o===yi.JSON){const l=new Uint8Array(e,wt+a,r);this.content=Rn(l)}else if(o===yi.BIN){const l=wt+a;this.body=e.slice(l,l+r)}a+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class mc{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=z.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const s=this.json,i=this.dracoLoader,a=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},d={};for(const h in r){const c=Ss[h]||h.toLowerCase();o[c]=r[h]}for(const h in e.attributes){const c=Ss[h]||h.toLowerCase();if(r[h]!==void 0){const f=s.accessors[e.attributes[h]],p=vt[f.componentType];d[c]=p.name,l[c]=f.normalized===!0}}return t.getDependency("bufferView",a).then(function(h){return new Promise(function(c,f){i.decodeDracoFile(h,function(p){for(const y in p.attributes){const A=p.attributes[y],g=l[y];g!==void 0&&(A.normalized=g)}c(p)},o,d,Pe,f)})})}}class gc{constructor(){this.name=z.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class xc{constructor(){this.name=z.KHR_MESH_QUANTIZATION}}class Fr extends Ha{constructor(e,t,s,i){super(e,t,s,i)}copySampleValue_(e){const t=this.resultBuffer,s=this.sampleValues,i=this.valueSize,a=e*i*3+i;for(let r=0;r!==i;r++)t[r]=s[a+r];return t}interpolate_(e,t,s,i){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,d=o*3,h=i-t,c=(s-t)/h,f=c*c,p=f*c,y=e*d,A=y-d,g=-2*p+3*f,x=p-f,m=1-g,v=x-f+c;for(let b=0;b!==o;b++){const C=r[A+b+o],B=r[A+b+l]*h,T=r[y+b+o],F=r[y+b]*h;a[b]=m*C+v*B+g*T+x*F}return a}}const Ac=new Pn;class yc extends Fr{interpolate_(e,t,s,i){const a=super.interpolate_(e,t,s,i);return Ac.fromArray(a).normalize().toArray(a),a}}const xe={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},vt={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},vi={9728:ee,9729:ie,9984:Ca,9985:ba,9986:va,9987:dr},bi={33071:Qe,33648:Ba,10497:Xe},Vn={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ss={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...ur>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},He={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vc={CUBICSPLINE:void 0,LINEAR:fr,STEP:Ga},Qn={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bc(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ie({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:wn})),n.DefaultMaterial}function Ze(n,e,t){for(const s in t.extensions)n[s]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[s]=t.extensions[s])}function Re(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Cc(n,e,t){let s=!1,i=!1,a=!1;for(let d=0,h=e.length;d<h;d++){const c=e[d];if(c.POSITION!==void 0&&(s=!0),c.NORMAL!==void 0&&(i=!0),c.COLOR_0!==void 0&&(a=!0),s&&i&&a)break}if(!s&&!i&&!a)return Promise.resolve(n);const r=[],o=[],l=[];for(let d=0,h=e.length;d<h;d++){const c=e[d];if(s){const f=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):n.attributes.position;r.push(f)}if(i){const f=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):n.attributes.normal;o.push(f)}if(a){const f=c.COLOR_0!==void 0?t.getDependency("accessor",c.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(d){const h=d[0],c=d[1],f=d[2];return s&&(n.morphAttributes.position=h),i&&(n.morphAttributes.normal=c),a&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function Bc(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,s=e.weights.length;t<s;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let s=0,i=t.length;s<i;s++)n.morphTargetDictionary[t[s]]=s}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Tc(n){let e;const t=n.extensions&&n.extensions[z.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Yn(t.attributes):e=n.indices+":"+Yn(n.attributes)+":"+n.mode,n.targets!==void 0)for(let s=0,i=n.targets.length;s<i;s++)e+=":"+Yn(n.targets[s]);return e}function Yn(n){let e="";const t=Object.keys(n).sort();for(let s=0,i=t.length;s<i;s++)e+=t[s]+":"+n[t[s]]+";";return e}function Ms(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Sc(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Mc=new $;class Fc{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ql,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let s=!1,i=!1,a=-1;typeof navigator<"u"&&typeof navigator.userAgent<"u"&&(s=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,a=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||s||i&&a<98?this.textureLoader=new xa(this.options.manager):this.textureLoader=new Aa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Kt(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const s=this,i=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([s.getDependencies("scene"),s.getDependencies("animation"),s.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:s,userData:{}};return Ze(a,o,i),Re(o,i),Promise.all(s._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],s=this.json.meshes||[];for(let i=0,a=t.length;i<a;i++){const r=t[i].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let i=0,a=e.length;i<a;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(s[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,s){if(e.refs[t]<=1)return s;const i=s.clone(),a=(r,o)=>{const l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(const[d,h]of r.children.entries())a(h,o.children[d])};return a(s,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let s=0;s<t.length;s++){const i=e(t[s]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const s=[];for(let i=0;i<t.length;i++){const a=e(t[i]);a&&s.push(a)}return s}getDependency(e,t){const s=e+":"+t;let i=this.cache.get(s);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":i=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(s,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const s=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(a,r){return s.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],s=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[z.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(a,r){s.load(zt.resolveURL(t.uri,i.path),a,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(s){const i=t.byteLength||0,a=t.byteOffset||0;return s.slice(a,a+i)})}loadAccessor(e){const t=this,s=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=Vn[i.type],o=vt[i.componentType],l=i.normalized===!0,d=new o(i.count*r);return Promise.resolve(new q(d,r,l))}const a=[];return i.bufferView!==void 0?a.push(this.getDependency("bufferView",i.bufferView)):a.push(null),i.sparse!==void 0&&(a.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(a).then(function(r){const o=r[0],l=Vn[i.type],d=vt[i.componentType],h=d.BYTES_PER_ELEMENT,c=h*l,f=i.byteOffset||0,p=i.bufferView!==void 0?s.bufferViews[i.bufferView].byteStride:void 0,y=i.normalized===!0;let A,g;if(p&&p!==c){const x=Math.floor(f/p),m="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+x+":"+i.count;let v=t.cache.get(m);v||(A=new d(o,x*p,i.count*p/h),v=new ya(A,p/h),t.cache.add(m,v)),g=new ja(v,l,f%p/h,y)}else o===null?A=new d(i.count*l):A=new d(o,f,i.count*l),g=new q(A,l,y);if(i.sparse!==void 0){const x=Vn.SCALAR,m=vt[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,C=new m(r[1],v,i.sparse.count*x),B=new d(r[2],b,i.sparse.count*l);o!==null&&(g=new q(g.array.slice(),g.itemSize,g.normalized));for(let T=0,F=C.length;T<F;T++){const S=C[T];if(g.setX(S,B[T*l]),l>=2&&g.setY(S,B[T*l+1]),l>=3&&g.setZ(S,B[T*l+2]),l>=4&&g.setW(S,B[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,s=this.options,a=t.textures[e].source,r=t.images[a];let o=this.textureLoader;if(r.uri){const l=s.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,a,o)}loadTextureImage(e,t,s){const i=this,a=this.json,r=a.textures[e],o=a.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const d=this.loadImageSource(t,s).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(a.samplers||{})[r.sampler]||{};return h.magFilter=vi[f.magFilter]||ie,h.minFilter=vi[f.minFilter]||dr,h.wrapS=bi[f.wrapS]||Xe,h.wrapT=bi[f.wrapT]||Xe,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=d,d}loadImageSource(e,t){const s=this,i=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(c=>c.clone());const r=i.images[e],o=self.URL||self.webkitURL;let l=r.uri||"",d=!1;if(r.bufferView!==void 0)l=s.getDependency("bufferView",r.bufferView).then(function(c){d=!0;const f=new Blob([c],{type:r.mimeType});return l=o.createObjectURL(f),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(c){return new Promise(function(f,p){let y=f;t.isImageBitmapLoader===!0&&(y=function(A){const g=new ci(A);g.needsUpdate=!0,f(g)}),t.load(zt.resolveURL(c,a.path),y,void 0,p)})}).then(function(c){return d===!0&&o.revokeObjectURL(l),Re(c,r),c.userData.mimeType=r.mimeType||Sc(r.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),c});return this.sourceCache[e]=h,h}assignTexture(e,t,s,i){const a=this;return this.getDependency("texture",s.index).then(function(r){if(!r)return null;if(s.texCoord!==void 0&&s.texCoord>0&&(r=r.clone(),r.channel=s.texCoord),a.extensions[z.KHR_TEXTURE_TRANSFORM]){const o=s.extensions!==void 0?s.extensions[z.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=a.associations.get(r);r=a.extensions[z.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),a.associations.set(r,l)}}return i!==void 0&&(typeof i=="number"&&(i=i===Ai?nt:Pe),"colorSpace"in r?r.colorSpace=i:r.encoding=i===nt?Ai:Vl),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let s=e.material;const i=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+s.uuid;let l=this.cache.get(o);l||(l=new Ta,Un.prototype.copy.call(l,s),l.color.copy(s.color),l.map=s.map,l.sizeAttenuation=!1,this.cache.add(o,l)),s=l}else if(e.isLine){const o="LineBasicMaterial:"+s.uuid;let l=this.cache.get(o);l||(l=new Sa,Un.prototype.copy.call(l,s),l.color.copy(s.color),l.map=s.map,this.cache.add(o,l)),s=l}if(i||a||r){let o="ClonedMaterial:"+s.uuid+":";i&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=s.clone(),a&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(s))),s=l}e.material=s}getMaterialType(){return Ie}loadMaterial(e){const t=this,s=this.json,i=this.extensions,a=s.materials[e];let r;const o={},l=a.extensions||{},d=[];if(l[z.KHR_MATERIALS_UNLIT]){const c=i[z.KHR_MATERIALS_UNLIT];r=c.getMaterialType(),d.push(c.extendParams(o,a,t))}else{const c=a.pbrMetallicRoughness||{};if(o.color=new Z(1,1,1),o.opacity=1,Array.isArray(c.baseColorFactor)){const f=c.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Pe),o.opacity=f[3]}c.baseColorTexture!==void 0&&d.push(t.assignTexture(o,"map",c.baseColorTexture,nt)),o.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,o.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(o,"metalnessMap",c.metallicRoughnessTexture)),d.push(t.assignTexture(o,"roughnessMap",c.metallicRoughnessTexture))),r=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=Ln);const h=a.alphaMode||Qn.OPAQUE;if(h===Qn.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Qn.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&r!==Je&&(d.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new Ce(1,1),a.normalTexture.scale!==void 0)){const c=a.normalTexture.scale;o.normalScale.set(c,c)}if(a.occlusionTexture!==void 0&&r!==Je&&(d.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&r!==Je){const c=a.emissiveFactor;o.emissive=new Z().setRGB(c[0],c[1],c[2],Pe)}return a.emissiveTexture!==void 0&&r!==Je&&d.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,nt)),Promise.all(d).then(function(){const c=new r(o);return a.name&&(c.name=a.name),Re(c,a),t.associations.set(c,{materials:e}),a.extensions&&Ze(i,c,a),c})}createUniqueName(e){const t=Ma.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,s=this.extensions,i=this.primitiveCache;function a(o){return s[z.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ci(l,o,t)})}const r=[];for(let o=0,l=e.length;o<l;o++){const d=e[o],h=Tc(d),c=i[h];if(c)r.push(c.promise);else{let f;d.extensions&&d.extensions[z.KHR_DRACO_MESH_COMPRESSION]?f=a(d):f=Ci(new Fe,d,t),i[h]={primitive:d,promise:f},r.push(f)}}return Promise.all(r)}loadMesh(e){const t=this,s=this.json,i=this.extensions,a=s.meshes[e],r=a.primitives,o=[];for(let l=0,d=r.length;l<d;l++){const h=r[l].material===void 0?bc(this.cache):this.getDependency("material",r[l].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(l){const d=l.slice(0,l.length-1),h=l[l.length-1],c=[];for(let p=0,y=h.length;p<y;p++){const A=h[p],g=r[p];let x;const m=d[p];if(g.mode===xe.TRIANGLES||g.mode===xe.TRIANGLE_STRIP||g.mode===xe.TRIANGLE_FAN||g.mode===void 0)x=a.isSkinnedMesh===!0?new Fa(A,m):new it(A,m),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),g.mode===xe.TRIANGLE_STRIP?x.geometry=li(x.geometry,ka):g.mode===xe.TRIANGLE_FAN&&(x.geometry=li(x.geometry,Oa));else if(g.mode===xe.LINES)x=new wa(A,m);else if(g.mode===xe.LINE_STRIP)x=new Da(A,m);else if(g.mode===xe.LINE_LOOP)x=new Ea(A,m);else if(g.mode===xe.POINTS)x=new Ra(A,m);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(x.geometry.morphAttributes).length>0&&Bc(x,a),x.name=t.createUniqueName(a.name||"mesh_"+e),Re(x,a),g.extensions&&Ze(i,x,g),t.assignFinalMaterial(x),c.push(x)}for(let p=0,y=c.length;p<y;p++)t.associations.set(c[p],{meshes:e,primitives:p});if(c.length===1)return a.extensions&&Ze(i,c[0],a),c[0];const f=new Jn;a.extensions&&Ze(i,f,a),t.associations.set(f,{meshes:e});for(let p=0,y=c.length;p<y;p++)f.add(c[p]);return f})}loadCamera(e){let t;const s=this.json.cameras[e],i=s[s.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return s.type==="perspective"?t=new Ns(Nt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):s.type==="orthographic"&&(t=new Ia(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),s.name&&(t.name=this.createUniqueName(s.name)),Re(t,s),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],s=[];for(let i=0,a=t.joints.length;i<a;i++)s.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?s.push(this.getDependency("accessor",t.inverseBindMatrices)):s.push(null),Promise.all(s).then(function(i){const a=i.pop(),r=i,o=[],l=[];for(let d=0,h=r.length;d<h;d++){const c=r[d];if(c){o.push(c);const f=new $;a!==null&&f.fromArray(a.array,d*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new _a(o,l)})}loadAnimation(e){const t=this.json,s=this,i=t.animations[e],a=i.name?i.name:"animation_"+e,r=[],o=[],l=[],d=[],h=[];for(let c=0,f=i.channels.length;c<f;c++){const p=i.channels[c],y=i.samplers[p.sampler],A=p.target,g=A.node,x=i.parameters!==void 0?i.parameters[y.input]:y.input,m=i.parameters!==void 0?i.parameters[y.output]:y.output;A.node!==void 0&&(r.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",x)),l.push(this.getDependency("accessor",m)),d.push(y),h.push(A))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l),Promise.all(d),Promise.all(h)]).then(function(c){const f=c[0],p=c[1],y=c[2],A=c[3],g=c[4],x=[];for(let m=0,v=f.length;m<v;m++){const b=f[m],C=p[m],B=y[m],T=A[m],F=g[m];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const S=s._createAnimationTracks(b,C,B,T,F);if(S)for(let D=0;D<S.length;D++)x.push(S[D])}return new Pa(a,void 0,x)})}createNodeMesh(e){const t=this.json,s=this,i=t.nodes[e];return i.mesh===void 0?null:s.getDependency("mesh",i.mesh).then(function(a){const r=s._getNodeRef(s.meshCache,i.mesh,a);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,d=i.weights.length;l<d;l++)o.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,s=this,i=t.nodes[e],a=s._loadNodeShallow(e),r=[],o=i.children||[];for(let d=0,h=o.length;d<h;d++)r.push(s.getDependency("node",o[d]));const l=i.skin===void 0?Promise.resolve(null):s.getDependency("skin",i.skin);return Promise.all([a,Promise.all(r),l]).then(function(d){const h=d[0],c=d[1],f=d[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,Mc)});for(let p=0,y=c.length;p<y;p++)h.add(c[p]);return h})}_loadNodeShallow(e){const t=this.json,s=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],r=a.name?i.createUniqueName(a.name):"",o=[],l=i._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return l&&o.push(l),a.camera!==void 0&&o.push(i.getDependency("camera",a.camera).then(function(d){return i._getNodeRef(i.cameraCache,a.camera,d)})),i._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){o.push(d)}),this.nodeCache[e]=Promise.all(o).then(function(d){let h;if(a.isBone===!0?h=new La:d.length>1?h=new Jn:d.length===1?h=d[0]:h=new zs,h!==d[0])for(let c=0,f=d.length;c<f;c++)h.add(d[c]);if(a.name&&(h.userData.name=a.name,h.name=r),Re(h,a),a.extensions&&Ze(s,h,a),a.matrix!==void 0){const c=new $;c.fromArray(a.matrix),h.applyMatrix4(c)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,s=this.json.scenes[e],i=this,a=new Jn;s.name&&(a.name=i.createUniqueName(s.name)),Re(a,s),s.extensions&&Ze(t,a,s);const r=s.nodes||[],o=[];for(let l=0,d=r.length;l<d;l++)o.push(i.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let h=0,c=l.length;h<c;h++)a.add(l[h]);const d=h=>{const c=new Map;for(const[f,p]of i.associations)(f instanceof Un||f instanceof ci)&&c.set(f,p);return h.traverse(f=>{const p=i.associations.get(f);p!=null&&c.set(f,p)}),c};return i.associations=d(a),a})}_createAnimationTracks(e,t,s,i,a){const r=[],o=e.name?e.name:e.uuid,l=[];He[a.path]===He.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let d;switch(He[a.path]){case He.weights:d=di;break;case He.rotation:d=fi;break;case He.position:case He.scale:d=ui;break;default:switch(s.itemSize){case 1:d=di;break;case 2:case 3:default:d=ui;break}break}const h=i.interpolation!==void 0?vc[i.interpolation]:fr,c=this._getArrayFromAccessor(s);for(let f=0,p=l.length;f<p;f++){const y=new d(l[f]+"."+He[a.path],t.array,c,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),r.push(y)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const s=Ms(t.constructor),i=new Float32Array(t.length);for(let a=0,r=t.length;a<r;a++)i[a]=t[a]*s;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(s){const i=this instanceof fi?yc:Fr;return new i(this.times,this.values,this.getValueSize()/3,s)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function wc(n,e,t){const s=e.attributes,i=new ae;if(s.POSITION!==void 0){const o=t.json.accessors[s.POSITION],l=o.min,d=o.max;if(l!==void 0&&d!==void 0){if(i.set(new _(l[0],l[1],l[2]),new _(d[0],d[1],d[2])),o.normalized){const h=Ms(vt[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const o=new _,l=new _;for(let d=0,h=a.length;d<h;d++){const c=a[d];if(c.POSITION!==void 0){const f=t.json.accessors[c.POSITION],p=f.min,y=f.max;if(p!==void 0&&y!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(y[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(y[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(y[2]))),f.normalized){const A=Ms(vt[f.componentType]);l.multiplyScalar(A)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}n.boundingBox=i;const r=new hr;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,n.boundingSphere=r}function Ci(n,e,t){const s=e.attributes,i=[];function a(r,o){return t.getDependency("accessor",r).then(function(l){n.setAttribute(o,l)})}for(const r in s){const o=Ss[r]||r.toLowerCase();o in n.attributes||i.push(a(s[r],o))}if(e.indices!==void 0&&!n.index){const r=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});i.push(r)}return Re(n,e),wc(n,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Cc(n,e.targets,t):n})}const qn=new WeakMap;class Dc extends Os{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,s,i){const a=new Kt(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,r=>{const o={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(r,o).then(t).catch(i)},s,i)}decodeDracoFile(e,t,s,i){const a={attributeIDs:s||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!s};this.decodeGeometry(e,a).then(t)}decodeGeometry(e,t){for(const l in t.attributeTypes){const d=t.attributeTypes[l];d.BYTES_PER_ELEMENT!==void 0&&(t.attributeTypes[l]=d.name)}const s=JSON.stringify(t);if(qn.has(e)){const l=qn.get(e);if(l.key===s)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const a=this.workerNextTaskID++,r=e.byteLength,o=this._getWorker(a,r).then(l=>(i=l,new Promise((d,h)=>{i._callbacks[a]={resolve:d,reject:h},i.postMessage({type:"decode",id:a,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&a&&this._releaseTask(i,a)}),qn.set(e,{key:s,promise:o}),o}_createGeometry(e){const t=new Fe;e.index&&t.setIndex(new q(e.index.array,1));for(let s=0;s<e.attributes.length;s++){const i=e.attributes[s],a=i.name,r=i.array,o=i.itemSize;t.setAttribute(a,new q(r,o))}return t}_loadLibrary(e,t){const s=new Kt(this.manager);return s.setPath(this.decoderPath),s.setResponseType(t),s.setWithCredentials(this.withCredentials),new Promise((i,a)=>{s.load(e,i,void 0,a)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(s=>{const i=s[0];e||(this.decoderConfig.wasmBinary=s[1]);const a=Ec.toString(),r=["/* draco decoder */",i,"","/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(a){const r=a.data;switch(r.type){case"decode":i._callbacks[r.id].resolve(r);break;case"error":i._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,a){return i._taskLoad>a._taskLoad?-1:1});const s=this.workerPool[this.workerPool.length-1];return s._taskCosts[e]=t,s._taskLoad+=t,s})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function Ec(){let n,e;onmessage=function(r){const o=r.data;switch(o.type){case"init":n=o.decoderConfig,e=new Promise(function(h){n.onModuleLoaded=function(c){h({draco:c})},DracoDecoderModule(n)});break;case"decode":const l=o.buffer,d=o.taskConfig;e.then(h=>{const c=h.draco,f=new c.Decoder,p=new c.DecoderBuffer;p.Init(new Int8Array(l),l.byteLength);try{const y=t(c,f,p,d),A=y.attributes.map(g=>g.array.buffer);y.index&&A.push(y.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:y},A)}catch(y){console.error(y),self.postMessage({type:"error",id:o.id,error:y.message})}finally{c.destroy(p),c.destroy(f)}});break}};function t(r,o,l,d){const h=d.attributeIDs,c=d.attributeTypes;let f,p;const y=o.GetEncodedGeometryType(l);if(y===r.TRIANGULAR_MESH)f=new r.Mesh,p=o.DecodeBufferToMesh(l,f);else if(y===r.POINT_CLOUD)f=new r.PointCloud,p=o.DecodeBufferToPointCloud(l,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const A={index:null,attributes:[]};for(const g in h){const x=self[c[g]];let m,v;if(d.useUniqueIDs)v=h[g],m=o.GetAttributeByUniqueId(f,v);else{if(v=o.GetAttributeId(f,r[h[g]]),v===-1)continue;m=o.GetAttribute(f,v)}A.attributes.push(i(r,o,f,g,x,m))}return y===r.TRIANGULAR_MESH&&(A.index=s(r,o,f)),r.destroy(f),A}function s(r,o,l){const h=l.num_faces()*3,c=h*4,f=r._malloc(c);o.GetTrianglesUInt32Array(l,c,f);const p=new Uint32Array(r.HEAPF32.buffer,f,h).slice();return r._free(f),{array:p,itemSize:1}}function i(r,o,l,d,h,c){const f=c.num_components(),y=l.num_points()*f,A=y*h.BYTES_PER_ELEMENT,g=a(r,h),x=r._malloc(A);o.GetAttributeDataArrayForAllPoints(l,c,g,A,x);const m=new h(r.HEAPF32.buffer,x,y).slice();return r._free(x),{name:d,array:m,itemSize:f}}function a(r,o){switch(o){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}let en;const Zn=()=>{if(en)return en;const n="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",e="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",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),s=new Uint8Array([32,0,65,253,3,1,2,34,4,106,6,5,11,8,7,20,13,33,12,16,128,9,116,64,19,113,127,15,10,21,22,14,255,66,24,54,136,107,18,23,192,26,114,118,132,17,77,101,130,144,27,87,131,44,45,74,156,154,70,167]);if(typeof WebAssembly!="object")return{supported:!1};let i=n;WebAssembly.validate(t)&&(i=e);let a;const r=WebAssembly.instantiate(o(i),{}).then(c=>{a=c.instance,a.exports.__wasm_call_ctors()});function o(c){const f=new Uint8Array(c.length);for(let y=0;y<c.length;++y){const A=c.charCodeAt(y);f[y]=A>96?A-71:A>64?A-65:A>47?A+4:A>46?63:62}let p=0;for(let y=0;y<c.length;++y)f[p++]=f[y]<60?s[f[y]]:(f[y]-60)*64+f[++y];return f.buffer.slice(0,p)}function l(c,f,p,y,A,g){const x=a.exports.sbrk,m=p+3&-4,v=x(m*y),b=x(A.length),C=new Uint8Array(a.exports.memory.buffer);C.set(A,b);const B=c(v,p,y,b,A.length);if(B===0&&g&&g(v,m,y),f.set(C.subarray(v,v+p*y)),x(v-x(0)),B!==0)throw new Error(`Malformed buffer data: ${B}`)}const d={0:"",1:"meshopt_decodeFilterOct",2:"meshopt_decodeFilterQuat",3:"meshopt_decodeFilterExp",NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={0:"meshopt_decodeVertexBuffer",1:"meshopt_decodeIndexBuffer",2:"meshopt_decodeIndexSequence",ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"};return en={ready:r,supported:!0,decodeVertexBuffer(c,f,p,y,A){l(a.exports.meshopt_decodeVertexBuffer,c,f,p,y,a.exports[d[A]])},decodeIndexBuffer(c,f,p,y){l(a.exports.meshopt_decodeIndexBuffer,c,f,p,y)},decodeIndexSequence(c,f,p,y){l(a.exports.meshopt_decodeIndexSequence,c,f,p,y)},decodeGltfBuffer(c,f,p,y,A,g){l(a.exports[h[A]],c,f,p,y,a.exports[d[g]])}},en};let tn=null,wr="https://www.gstatic.com/draco/versioned/decoders/1.5.5/";function Dr(n=!0,e=!0,t){return s=>{t&&t(s),n&&(tn||(tn=new Dc),tn.setDecoderPath(typeof n=="string"?n:wr),s.setDRACOLoader(tn)),e&&s.setMeshoptDecoder(typeof Zn=="function"?Zn():Zn)}}const Mt=(n,e,t,s)=>Xt(Qs,n,Dr(e,t,s));Mt.preload=(n,e,t,s)=>Xt.preload(Qs,n,Dr(e,t,s));Mt.clear=n=>Xt.clear(Qs,n);Mt.setDecoderPath=n=>{wr=n};const Er=0,Rc=1,Rr=2,Bi=2,$n=1.25,Ti=1,Ve=6*4+4+4,kn=65535,Ic=Math.pow(2,-24),es=Symbol("SKIP_GENERATION");function Ir(n){return n.index?n.index.count:n.attributes.position.count}function Ft(n){return Ir(n)/3}function _r(n,e=ArrayBuffer){return n>65535?new Uint32Array(new e(4*n)):new Uint16Array(new e(2*n))}function _c(n,e){if(!n.index){const t=n.attributes.position.count,s=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=_r(t,s);n.setIndex(new q(i,1));for(let a=0;a<t;a++)i[a]=a}}function Pr(n,e){const t=Ft(n),s=e||n.drawRange,i=s.start/3,a=(s.start+s.count)/3,r=Math.max(0,i),o=Math.min(t,a)-r;return[{offset:Math.floor(r),count:Math.floor(o)}]}function Lr(n,e){if(!n.groups||!n.groups.length)return Pr(n,e);const t=[],s=new Set,i=e||n.drawRange,a=i.start/3,r=(i.start+i.count)/3;for(const l of n.groups){const d=l.start/3,h=(l.start+l.count)/3;s.add(Math.max(a,d)),s.add(Math.min(r,h))}const o=Array.from(s.values()).sort((l,d)=>l-d);for(let l=0;l<o.length-1;l++){const d=o[l],h=o[l+1];t.push({offset:Math.floor(d),count:Math.floor(h-d)})}return t}function Pc(n,e){const t=Ft(n),s=Lr(n,e).sort((r,o)=>r.offset-o.offset),i=s[s.length-1];i.count=Math.min(t-i.offset,i.count);let a=0;return s.forEach(({count:r})=>a+=r),t!==a}function ts(n,e,t,s,i){let a=1/0,r=1/0,o=1/0,l=-1/0,d=-1/0,h=-1/0,c=1/0,f=1/0,p=1/0,y=-1/0,A=-1/0,g=-1/0;for(let x=e*6,m=(e+t)*6;x<m;x+=6){const v=n[x+0],b=n[x+1],C=v-b,B=v+b;C<a&&(a=C),B>l&&(l=B),v<c&&(c=v),v>y&&(y=v);const T=n[x+2],F=n[x+3],S=T-F,D=T+F;S<r&&(r=S),D>d&&(d=D),T<f&&(f=T),T>A&&(A=T);const w=n[x+4],M=n[x+5],R=w-M,I=w+M;R<o&&(o=R),I>h&&(h=I),w<p&&(p=w),w>g&&(g=w)}s[0]=a,s[1]=r,s[2]=o,s[3]=l,s[4]=d,s[5]=h,i[0]=c,i[1]=f,i[2]=p,i[3]=y,i[4]=A,i[5]=g}function Lc(n,e=null,t=null,s=null){const i=n.attributes.position,a=n.index?n.index.array:null,r=Ft(n),o=i.normalized;let l;e===null?(l=new Float32Array(r*6*4),t=0,s=r):(l=e,t=t||0,s=s||r);const d=i.array,h=i.offset||0;let c=3;i.isInterleavedBufferAttribute&&(c=i.data.stride);const f=["getX","getY","getZ"];for(let p=t;p<t+s;p++){const y=p*3,A=p*6;let g=y+0,x=y+1,m=y+2;a&&(g=a[g],x=a[x],m=a[m]),o||(g=g*c+h,x=x*c+h,m=m*c+h);for(let v=0;v<3;v++){let b,C,B;o?(b=i[f[v]](g),C=i[f[v]](x),B=i[f[v]](m)):(b=d[g+v],C=d[x+v],B=d[m+v]);let T=b;C<T&&(T=C),B<T&&(T=B);let F=b;C>F&&(F=C),B>F&&(F=B);const S=(F-T)/2,D=v*2;l[A+D+0]=T+S,l[A+D+1]=S+(Math.abs(T)+S)*Ic}}return l}function V(n,e,t){return t.min.x=e[n],t.min.y=e[n+1],t.min.z=e[n+2],t.max.x=e[n+3],t.max.y=e[n+4],t.max.z=e[n+5],t}function Si(n){let e=-1,t=-1/0;for(let s=0;s<3;s++){const i=n[s+3]-n[s];i>t&&(t=i,e=s)}return e}function Mi(n,e){e.set(n)}function Fi(n,e,t){let s,i;for(let a=0;a<3;a++){const r=a+3;s=n[a],i=e[a],t[a]=s<i?s:i,s=n[r],i=e[r],t[r]=s>i?s:i}}function nn(n,e,t){for(let s=0;s<3;s++){const i=e[n+2*s],a=e[n+2*s+1],r=i-a,o=i+a;r<t[s]&&(t[s]=r),o>t[s+3]&&(t[s+3]=o)}}function Dt(n){const e=n[3]-n[0],t=n[4]-n[1],s=n[5]-n[2];return 2*(e*t+t*s+s*e)}const Ee=32,Gc=(n,e)=>n.candidate-e.candidate,ke=new Array(Ee).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),sn=new Float32Array(6);function jc(n,e,t,s,i,a){let r=-1,o=0;if(a===Er)r=Si(e),r!==-1&&(o=(e[r]+e[r+3])/2);else if(a===Rc)r=Si(n),r!==-1&&(o=Hc(t,s,i,r));else if(a===Rr){const l=Dt(n);let d=$n*i;const h=s*6,c=(s+i)*6;for(let f=0;f<3;f++){const p=e[f],g=(e[f+3]-p)/Ee;if(i<Ee/4){const x=[...ke];x.length=i;let m=0;for(let b=h;b<c;b+=6,m++){const C=x[m];C.candidate=t[b+2*f],C.count=0;const{bounds:B,leftCacheBounds:T,rightCacheBounds:F}=C;for(let S=0;S<3;S++)F[S]=1/0,F[S+3]=-1/0,T[S]=1/0,T[S+3]=-1/0,B[S]=1/0,B[S+3]=-1/0;nn(b,t,B)}x.sort(Gc);let v=i;for(let b=0;b<v;b++){const C=x[b];for(;b+1<v&&x[b+1].candidate===C.candidate;)x.splice(b+1,1),v--}for(let b=h;b<c;b+=6){const C=t[b+2*f];for(let B=0;B<v;B++){const T=x[B];C>=T.candidate?nn(b,t,T.rightCacheBounds):(nn(b,t,T.leftCacheBounds),T.count++)}}for(let b=0;b<v;b++){const C=x[b],B=C.count,T=i-C.count,F=C.leftCacheBounds,S=C.rightCacheBounds;let D=0;B!==0&&(D=Dt(F)/l);let w=0;T!==0&&(w=Dt(S)/l);const M=Ti+$n*(D*B+w*T);M<d&&(r=f,d=M,o=C.candidate)}}else{for(let v=0;v<Ee;v++){const b=ke[v];b.count=0,b.candidate=p+g+v*g;const C=b.bounds;for(let B=0;B<3;B++)C[B]=1/0,C[B+3]=-1/0}for(let v=h;v<c;v+=6){let B=~~((t[v+2*f]-p)/g);B>=Ee&&(B=Ee-1);const T=ke[B];T.count++,nn(v,t,T.bounds)}const x=ke[Ee-1];Mi(x.bounds,x.rightCacheBounds);for(let v=Ee-2;v>=0;v--){const b=ke[v],C=ke[v+1];Fi(b.bounds,C.rightCacheBounds,b.rightCacheBounds)}let m=0;for(let v=0;v<Ee-1;v++){const b=ke[v],C=b.count,B=b.bounds,F=ke[v+1].rightCacheBounds;C!==0&&(m===0?Mi(B,sn):Fi(B,sn,sn)),m+=C;let S=0,D=0;m!==0&&(S=Dt(sn)/l);const w=i-m;w!==0&&(D=Dt(F)/l);const M=Ti+$n*(S*m+D*w);M<d&&(r=f,d=M,o=b.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${a} used.`);return{axis:r,pos:o}}function Hc(n,e,t,s){let i=0;for(let a=e,r=e+t;a<r;a++)i+=n[a*6+s*2];return i/t}class ns{constructor(){this.boundingData=new Float32Array(6)}}function kc(n,e,t,s,i,a){let r=s,o=s+i-1;const l=a.pos,d=a.axis*2;for(;;){for(;r<=o&&t[r*6+d]<l;)r++;for(;r<=o&&t[o*6+d]>=l;)o--;if(r<o){for(let h=0;h<3;h++){let c=e[r*3+h];e[r*3+h]=e[o*3+h],e[o*3+h]=c}for(let h=0;h<6;h++){let c=t[r*6+h];t[r*6+h]=t[o*6+h],t[o*6+h]=c}r++,o--}else return r}}function Oc(n,e,t,s,i,a){let r=s,o=s+i-1;const l=a.pos,d=a.axis*2;for(;;){for(;r<=o&&t[r*6+d]<l;)r++;for(;r<=o&&t[o*6+d]>=l;)o--;if(r<o){let h=n[r];n[r]=n[o],n[o]=h;for(let c=0;c<6;c++){let f=t[r*6+c];t[r*6+c]=t[o*6+c],t[o*6+c]=f}r++,o--}else return r}}function re(n,e){return e[n+15]===65535}function ue(n,e){return e[n+6]}function he(n,e){return e[n+14]}function Ae(n){return n+8}function pe(n,e){return e[n+6]}function Ys(n,e){return e[n+7]}let Gr,kt,Mn,jr;const zc=Math.pow(2,32);function Fs(n){return"count"in n?1:1+Fs(n.left)+Fs(n.right)}function Nc(n,e,t){return Gr=new Float32Array(t),kt=new Uint32Array(t),Mn=new Uint16Array(t),jr=new Uint8Array(t),ws(n,e)}function ws(n,e){const t=n/4,s=n/2,i="count"in e,a=e.boundingData;for(let r=0;r<6;r++)Gr[t+r]=a[r];if(i)if(e.buffer){const r=e.buffer;jr.set(new Uint8Array(r),n);for(let o=n,l=n+r.byteLength;o<l;o+=Ve){const d=o/2;re(d,Mn)||(kt[o/4+6]+=t)}return n+r.byteLength}else{const r=e.offset,o=e.count;return kt[t+6]=r,Mn[s+14]=o,Mn[s+15]=kn,n+Ve}else{const r=e.left,o=e.right,l=e.splitAxis;let d;if(d=ws(n+Ve,r),d/4>zc)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return kt[t+6]=d/4,d=ws(d,o),kt[t+7]=l,d}}function Uc(n,e){const t=(n.index?n.index.count:n.attributes.position.count)/3,s=t>2**16,i=s?4:2,a=e?new SharedArrayBuffer(t*i):new ArrayBuffer(t*i),r=s?new Uint32Array(a):new Uint16Array(a);for(let o=0,l=r.length;o<l;o++)r[o]=o;return r}function Jc(n,e,t,s,i){const{maxDepth:a,verbose:r,maxLeafTris:o,strategy:l,onProgress:d,indirect:h}=i,c=n._indirectBuffer,f=n.geometry,p=f.index?f.index.array:null,y=h?Oc:kc,A=Ft(f),g=new Float32Array(6);let x=!1;const m=new ns;return ts(e,t,s,m.boundingData,g),b(m,t,s,g),m;function v(C){d&&d(C/A)}function b(C,B,T,F=null,S=0){if(!x&&S>=a&&(x=!0,r&&(console.warn(`MeshBVH: Max depth of ${a} reached when generating BVH. Consider increasing maxDepth.`),console.warn(f))),T<=o||S>=a)return v(B+T),C.offset=B,C.count=T,C;const D=jc(C.boundingData,F,e,B,T,l);if(D.axis===-1)return v(B+T),C.offset=B,C.count=T,C;const w=y(c,p,e,B,T,D);if(w===B||w===B+T)v(B+T),C.offset=B,C.count=T;else{C.splitAxis=D.axis;const M=new ns,R=B,I=w-B;C.left=M,ts(e,R,I,M.boundingData,g),b(M,R,I,g,S+1);const P=new ns,L=w,G=T-I;C.right=P,ts(e,L,G,P.boundingData,g),b(P,L,G,g,S+1)}return C}}function Wc(n,e){const t=n.geometry;e.indirect&&(n._indirectBuffer=Uc(t,e.useSharedArrayBuffer),Pc(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),n._indirectBuffer||_c(t,e);const s=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Lc(t),a=e.indirect?Pr(t,e.range):Lr(t,e.range);n._roots=a.map(r=>{const o=Jc(n,i,r.offset,r.count,e),l=Fs(o),d=new s(Ve*l);return Nc(0,o,d),d})}class Le{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let s=1/0,i=-1/0;for(let a=0,r=e.length;a<r;a++){const l=e[a][t];s=l<s?l:s,i=l>i?l:i}this.min=s,this.max=i}setFromPoints(e,t){let s=1/0,i=-1/0;for(let a=0,r=t.length;a<r;a++){const o=t[a],l=e.dot(o);s=l<s?l:s,i=l>i?l:i}this.min=s,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}Le.prototype.setFromBox=function(){const n=new _;return function(t,s){const i=s.min,a=s.max;let r=1/0,o=-1/0;for(let l=0;l<=1;l++)for(let d=0;d<=1;d++)for(let h=0;h<=1;h++){n.x=i.x*l+a.x*(1-l),n.y=i.y*d+a.y*(1-d),n.z=i.z*h+a.z*(1-h);const c=t.dot(n);r=Math.min(c,r),o=Math.max(c,o)}this.min=r,this.max=o}}();const Kc=function(){const n=new _,e=new _,t=new _;return function(i,a,r){const o=i.start,l=n,d=a.start,h=e;t.subVectors(o,d),n.subVectors(i.end,i.start),e.subVectors(a.end,a.start);const c=t.dot(h),f=h.dot(l),p=h.dot(h),y=t.dot(l),g=l.dot(l)*p-f*f;let x,m;g!==0?x=(c*f-y*p)/g:x=0,m=(c+x*f)/p,r.x=x,r.y=m}}(),qs=function(){const n=new Ce,e=new _,t=new _;return function(i,a,r,o){Kc(i,a,n);let l=n.x,d=n.y;if(l>=0&&l<=1&&d>=0&&d<=1){i.at(l,r),a.at(d,o);return}else if(l>=0&&l<=1){d<0?a.at(0,o):a.at(1,o),i.closestPointToPoint(o,!0,r);return}else if(d>=0&&d<=1){l<0?i.at(0,r):i.at(1,r),a.closestPointToPoint(r,!0,o);return}else{let h;l<0?h=i.start:h=i.end;let c;d<0?c=a.start:c=a.end;const f=e,p=t;if(i.closestPointToPoint(c,!0,e),a.closestPointToPoint(h,!0,t),f.distanceToSquared(c)<=p.distanceToSquared(h)){r.copy(f),o.copy(c);return}else{r.copy(h),o.copy(p);return}}}}(),Xc=function(){const n=new _,e=new _,t=new pr,s=new _e;return function(a,r){const{radius:o,center:l}=a,{a:d,b:h,c}=r;if(s.start=d,s.end=h,s.closestPointToPoint(l,!0,n).distanceTo(l)<=o||(s.start=d,s.end=c,s.closestPointToPoint(l,!0,n).distanceTo(l)<=o)||(s.start=h,s.end=c,s.closestPointToPoint(l,!0,n).distanceTo(l)<=o))return!0;const A=r.getPlane(t);if(Math.abs(A.distanceToPoint(l))<=o){const x=A.projectPoint(l,e);if(r.containsPoint(x))return!0}return!1}}(),Vc=1e-15;function ss(n){return Math.abs(n)<Vc}class Be extends jt{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new _),this.satBounds=new Array(4).fill().map(()=>new Le),this.points=[this.a,this.b,this.c],this.sphere=new hr,this.plane=new pr,this.needsUpdate=!0}intersectsSphere(e){return Xc(e,this)}update(){const e=this.a,t=this.b,s=this.c,i=this.points,a=this.satAxes,r=this.satBounds,o=a[0],l=r[0];this.getNormal(o),l.setFromPoints(o,i);const d=a[1],h=r[1];d.subVectors(e,t),h.setFromPoints(d,i);const c=a[2],f=r[2];c.subVectors(t,s),f.setFromPoints(c,i);const p=a[3],y=r[3];p.subVectors(s,e),y.setFromPoints(p,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}}Be.prototype.closestPointToSegment=function(){const n=new _,e=new _,t=new _e;return function(i,a=null,r=null){const{start:o,end:l}=i,d=this.points;let h,c=1/0;for(let f=0;f<3;f++){const p=(f+1)%3;t.start.copy(d[f]),t.end.copy(d[p]),qs(t,i,n,e),h=n.distanceToSquared(e),h<c&&(c=h,a&&a.copy(n),r&&r.copy(e))}return this.closestPointToPoint(o,n),h=o.distanceToSquared(n),h<c&&(c=h,a&&a.copy(n),r&&r.copy(o)),this.closestPointToPoint(l,n),h=l.distanceToSquared(n),h<c&&(c=h,a&&a.copy(n),r&&r.copy(l)),Math.sqrt(c)}}();Be.prototype.intersectsTriangle=function(){const n=new Be,e=new Array(3),t=new Array(3),s=new Le,i=new Le,a=new _,r=new _,o=new _,l=new _,d=new _,h=new _e,c=new _e,f=new _e,p=new _;function y(A,g,x){const m=A.points;let v=0,b=-1;for(let C=0;C<3;C++){const{start:B,end:T}=h;B.copy(m[C]),T.copy(m[(C+1)%3]),h.delta(r);const F=ss(g.distanceToPoint(B));if(ss(g.normal.dot(r))&&F){x.copy(h),v=2;break}const S=g.intersectLine(h,p);if(!S&&F&&p.copy(B),(S||F)&&!ss(p.distanceTo(T))){if(v<=1)(v===1?x.start:x.end).copy(p),F&&(b=v);else if(v>=2){(b===1?x.start:x.end).copy(p),v=2;break}if(v++,v===2&&b===-1)break}}return v}return function(g,x=null,m=!1){this.needsUpdate&&this.update(),g.isExtendedTriangle?g.needsUpdate&&g.update():(n.copy(g),n.update(),g=n);const v=this.plane,b=g.plane;if(Math.abs(v.normal.dot(b.normal))>1-1e-10){const C=this.satBounds,B=this.satAxes;t[0]=g.a,t[1]=g.b,t[2]=g.c;for(let S=0;S<4;S++){const D=C[S],w=B[S];if(s.setFromPoints(w,t),D.isSeparated(s))return!1}const T=g.satBounds,F=g.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let S=0;S<4;S++){const D=T[S],w=F[S];if(s.setFromPoints(w,e),D.isSeparated(s))return!1}for(let S=0;S<4;S++){const D=B[S];for(let w=0;w<4;w++){const M=F[w];if(a.crossVectors(D,M),s.setFromPoints(a,e),i.setFromPoints(a,t),s.isSeparated(i))return!1}}return x&&(m||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),x.start.set(0,0,0),x.end.set(0,0,0)),!0}else{const C=y(this,b,c);if(C===1&&g.containsPoint(c.end))return x&&(x.start.copy(c.end),x.end.copy(c.end)),!0;if(C!==2)return!1;const B=y(g,v,f);if(B===1&&this.containsPoint(f.end))return x&&(x.start.copy(f.end),x.end.copy(f.end)),!0;if(B!==2)return!1;if(c.delta(o),f.delta(l),o.dot(l)<0){let R=f.start;f.start=f.end,f.end=R}const T=c.start.dot(o),F=c.end.dot(o),S=f.start.dot(o),D=f.end.dot(o),w=F<S,M=T<D;return T!==D&&S!==F&&w===M?!1:(x&&(d.subVectors(c.start,f.start),d.dot(o)>0?x.start.copy(c.start):x.start.copy(f.start),d.subVectors(c.end,f.end),d.dot(o)<0?x.end.copy(c.end):x.end.copy(f.end)),!0)}}}();Be.prototype.distanceToPoint=function(){const n=new _;return function(t){return this.closestPointToPoint(t,n),t.distanceTo(n)}}();Be.prototype.distanceToTriangle=function(){const n=new _,e=new _,t=["a","b","c"],s=new _e,i=new _e;return function(r,o=null,l=null){const d=o||l?s:null;if(this.intersectsTriangle(r,d))return(o||l)&&(o&&d.getCenter(o),l&&d.getCenter(l)),0;let h=1/0;for(let c=0;c<3;c++){let f;const p=t[c],y=r[p];this.closestPointToPoint(y,n),f=y.distanceToSquared(n),f<h&&(h=f,o&&o.copy(n),l&&l.copy(y));const A=this[p];r.closestPointToPoint(A,n),f=A.distanceToSquared(n),f<h&&(h=f,o&&o.copy(A),l&&l.copy(n))}for(let c=0;c<3;c++){const f=t[c],p=t[(c+1)%3];s.set(this[f],this[p]);for(let y=0;y<3;y++){const A=t[y],g=t[(y+1)%3];i.set(r[A],r[g]),qs(s,i,n,e);const x=n.distanceToSquared(e);x<h&&(h=x,o&&o.copy(n),l&&l.copy(e))}}return Math.sqrt(h)}}();class le{constructor(e,t,s){this.isOrientedBox=!0,this.min=new _,this.max=new _,this.matrix=new $,this.invMatrix=new $,this.points=new Array(8).fill().map(()=>new _),this.satAxes=new Array(3).fill().map(()=>new _),this.satBounds=new Array(3).fill().map(()=>new Le),this.alignedSatBounds=new Array(3).fill().map(()=>new Le),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),s&&this.matrix.copy(s)}set(e,t,s){this.min.copy(e),this.max.copy(t),this.matrix.copy(s),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}le.prototype.update=function(){return function(){const e=this.matrix,t=this.min,s=this.max,i=this.points;for(let d=0;d<=1;d++)for(let h=0;h<=1;h++)for(let c=0;c<=1;c++){const f=1*d|2*h|4*c,p=i[f];p.x=d?s.x:t.x,p.y=h?s.y:t.y,p.z=c?s.z:t.z,p.applyMatrix4(e)}const a=this.satBounds,r=this.satAxes,o=i[0];for(let d=0;d<3;d++){const h=r[d],c=a[d],f=1<<d,p=i[f];h.subVectors(o,p),c.setFromPoints(h,i)}const l=this.alignedSatBounds;l[0].setFromPointsField(i,"x"),l[1].setFromPointsField(i,"y"),l[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();le.prototype.intersectsBox=function(){const n=new Le;return function(t){this.needsUpdate&&this.update();const s=t.min,i=t.max,a=this.satBounds,r=this.satAxes,o=this.alignedSatBounds;if(n.min=s.x,n.max=i.x,o[0].isSeparated(n)||(n.min=s.y,n.max=i.y,o[1].isSeparated(n))||(n.min=s.z,n.max=i.z,o[2].isSeparated(n)))return!1;for(let l=0;l<3;l++){const d=r[l],h=a[l];if(n.setFromBox(d,t),h.isSeparated(n))return!1}return!0}}();le.prototype.intersectsTriangle=function(){const n=new Be,e=new Array(3),t=new Le,s=new Le,i=new _;return function(r){this.needsUpdate&&this.update(),r.isExtendedTriangle?r.needsUpdate&&r.update():(n.copy(r),n.update(),r=n);const o=this.satBounds,l=this.satAxes;e[0]=r.a,e[1]=r.b,e[2]=r.c;for(let f=0;f<3;f++){const p=o[f],y=l[f];if(t.setFromPoints(y,e),p.isSeparated(t))return!1}const d=r.satBounds,h=r.satAxes,c=this.points;for(let f=0;f<3;f++){const p=d[f],y=h[f];if(t.setFromPoints(y,c),p.isSeparated(t))return!1}for(let f=0;f<3;f++){const p=l[f];for(let y=0;y<4;y++){const A=h[y];if(i.crossVectors(p,A),t.setFromPoints(i,e),s.setFromPoints(i,c),t.isSeparated(s))return!1}}return!0}}();le.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();le.prototype.distanceToPoint=function(){const n=new _;return function(t){return this.closestPointToPoint(t,n),t.distanceTo(n)}}();le.prototype.distanceToBox=function(){const n=["x","y","z"],e=new Array(12).fill().map(()=>new _e),t=new Array(12).fill().map(()=>new _e),s=new _,i=new _;return function(r,o=0,l=null,d=null){if(this.needsUpdate&&this.update(),this.intersectsBox(r))return(l||d)&&(r.getCenter(i),this.closestPointToPoint(i,s),r.closestPointToPoint(s,i),l&&l.copy(s),d&&d.copy(i)),0;const h=o*o,c=r.min,f=r.max,p=this.points;let y=1/0;for(let g=0;g<8;g++){const x=p[g];i.copy(x).clamp(c,f);const m=x.distanceToSquared(i);if(m<y&&(y=m,l&&l.copy(x),d&&d.copy(i),m<h))return Math.sqrt(m)}let A=0;for(let g=0;g<3;g++)for(let x=0;x<=1;x++)for(let m=0;m<=1;m++){const v=(g+1)%3,b=(g+2)%3,C=x<<v|m<<b,B=1<<g|x<<v|m<<b,T=p[C],F=p[B];e[A].set(T,F);const D=n[g],w=n[v],M=n[b],R=t[A],I=R.start,P=R.end;I[D]=c[D],I[w]=x?c[w]:f[w],I[M]=m?c[M]:f[w],P[D]=f[D],P[w]=x?c[w]:f[w],P[M]=m?c[M]:f[w],A++}for(let g=0;g<=1;g++)for(let x=0;x<=1;x++)for(let m=0;m<=1;m++){i.x=g?f.x:c.x,i.y=x?f.y:c.y,i.z=m?f.z:c.z,this.closestPointToPoint(i,s);const v=i.distanceToSquared(s);if(v<y&&(y=v,l&&l.copy(s),d&&d.copy(i),v<h))return Math.sqrt(v)}for(let g=0;g<12;g++){const x=e[g];for(let m=0;m<12;m++){const v=t[m];qs(x,v,s,i);const b=s.distanceToSquared(i);if(b<y&&(y=b,l&&l.copy(s),d&&d.copy(i),b<h))return Math.sqrt(b)}}return Math.sqrt(y)}}();class Zs{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class Qc extends Zs{constructor(){super(()=>new Be)}}const ye=new Qc;class Yc{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=s=>{t&&e.push(t),t=s,this.float32Array=new Float32Array(s),this.uint16Array=new Uint16Array(s),this.uint32Array=new Uint32Array(s)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const K=new Yc;let We,yt;const at=[],rn=new Zs(()=>new ae);function qc(n,e,t,s,i,a){We=rn.getPrimitive(),yt=rn.getPrimitive(),at.push(We,yt),K.setBuffer(n._roots[e]);const r=Ds(0,n.geometry,t,s,i,a);K.clearBuffer(),rn.releasePrimitive(We),rn.releasePrimitive(yt),at.pop(),at.pop();const o=at.length;return o>0&&(yt=at[o-1],We=at[o-2]),r}function Ds(n,e,t,s,i=null,a=0,r=0){const{float32Array:o,uint16Array:l,uint32Array:d}=K;let h=n*2;if(re(h,l)){const f=ue(n,d),p=he(h,l);return V(n,o,We),s(f,p,!1,r,a+n,We)}else{let D=function(M){const{uint16Array:R,uint32Array:I}=K;let P=M*2;for(;!re(P,R);)M=Ae(M),P=M*2;return ue(M,I)},w=function(M){const{uint16Array:R,uint32Array:I}=K;let P=M*2;for(;!re(P,R);)M=pe(M,I),P=M*2;return ue(M,I)+he(P,R)};const f=Ae(n),p=pe(n,d);let y=f,A=p,g,x,m,v;if(i&&(m=We,v=yt,V(y,o,m),V(A,o,v),g=i(m),x=i(v),x<g)){y=p,A=f;const M=g;g=x,x=M,m=v}m||(m=We,V(y,o,m));const b=re(y*2,l),C=t(m,b,g,r+1,a+y);let B;if(C===Bi){const M=D(y),I=w(y)-M;B=s(M,I,!0,r+1,a+y,m)}else B=C&&Ds(y,e,t,s,i,a,r+1);if(B)return!0;v=yt,V(A,o,v);const T=re(A*2,l),F=t(v,T,x,r+1,a+A);let S;if(F===Bi){const M=D(A),I=w(A)-M;S=s(M,I,!0,r+1,a+A,v)}else S=F&&Ds(A,e,t,s,i,a,r+1);return!!S}}const Et=new _,is=new _;function Zc(n,e,t={},s=0,i=1/0){const a=s*s,r=i*i;let o=1/0,l=null;if(n.shapecast({boundsTraverseOrder:h=>(Et.copy(e).clamp(h.min,h.max),Et.distanceToSquared(e)),intersectsBounds:(h,c,f)=>f<o&&f<r,intersectsTriangle:(h,c)=>{h.closestPointToPoint(e,Et);const f=e.distanceToSquared(Et);return f<o&&(is.copy(Et),o=f,l=c),f<a}}),o===1/0)return null;const d=Math.sqrt(o);return t.point?t.point.copy(is):t.point=is.clone(),t.distance=d,t.faceIndex=l,t}const lt=new _,ct=new _,ut=new _,on=new Ce,an=new Ce,ln=new Ce,wi=new _,Di=new _,Ei=new _,cn=new _;function $c(n,e,t,s,i,a,r,o){let l;if(a===Hs?l=n.intersectTriangle(s,t,e,!0,i):l=n.intersectTriangle(e,t,s,a!==Ln,i),l===null)return null;const d=n.origin.distanceTo(i);return d<r||d>o?null:{distance:d,point:i.clone()}}function eu(n,e,t,s,i,a,r,o,l,d,h){lt.fromBufferAttribute(e,a),ct.fromBufferAttribute(e,r),ut.fromBufferAttribute(e,o);const c=$c(n,lt,ct,ut,cn,l,d,h);if(c){s&&(on.fromBufferAttribute(s,a),an.fromBufferAttribute(s,r),ln.fromBufferAttribute(s,o),c.uv=jt.getInterpolation(cn,lt,ct,ut,on,an,ln,new Ce)),i&&(on.fromBufferAttribute(i,a),an.fromBufferAttribute(i,r),ln.fromBufferAttribute(i,o),c.uv1=jt.getInterpolation(cn,lt,ct,ut,on,an,ln,new Ce)),t&&(wi.fromBufferAttribute(t,a),Di.fromBufferAttribute(t,r),Ei.fromBufferAttribute(t,o),c.normal=jt.getInterpolation(cn,lt,ct,ut,wi,Di,Ei,new _),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:r,c:o,normal:new _,materialIndex:0};jt.getNormal(lt,ct,ut,f.normal),c.face=f,c.faceIndex=a}return c}function On(n,e,t,s,i,a,r){const o=s*3;let l=o+0,d=o+1,h=o+2;const c=n.index;n.index&&(l=c.getX(l),d=c.getX(d),h=c.getX(h));const{position:f,normal:p,uv:y,uv1:A}=n.attributes,g=eu(t,f,p,y,A,l,d,h,e,a,r);return g?(g.faceIndex=s,i&&i.push(g),g):null}function Y(n,e,t,s){const i=n.a,a=n.b,r=n.c;let o=e,l=e+1,d=e+2;t&&(o=t.getX(o),l=t.getX(l),d=t.getX(d)),i.x=s.getX(o),i.y=s.getY(o),i.z=s.getZ(o),a.x=s.getX(l),a.y=s.getY(l),a.z=s.getZ(l),r.x=s.getX(d),r.y=s.getY(d),r.z=s.getZ(d)}function tu(n,e,t,s,i,a,r,o){const{geometry:l,_indirectBuffer:d}=n;for(let h=s,c=s+i;h<c;h++)On(l,e,t,h,a,r,o)}function nu(n,e,t,s,i,a,r){const{geometry:o,_indirectBuffer:l}=n;let d=1/0,h=null;for(let c=s,f=s+i;c<f;c++){let p;p=On(o,e,t,c,null,a,r),p&&p.distance<d&&(h=p,d=p.distance)}return h}function su(n,e,t,s,i,a,r){const{geometry:o}=t,{index:l}=o,d=o.attributes.position;for(let h=n,c=e+n;h<c;h++){let f;if(f=h,Y(r,f*3,l,d),r.needsUpdate=!0,s(r,f,i,a))return!0}return!1}function iu(n,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=n.geometry,s=t.index?t.index.array:null,i=t.attributes.position;let a,r,o,l,d=0;const h=n._roots;for(let f=0,p=h.length;f<p;f++)a=h[f],r=new Uint32Array(a),o=new Uint16Array(a),l=new Float32Array(a),c(0,d),d+=a.byteLength;function c(f,p,y=!1){const A=f*2;if(o[A+15]===kn){const x=r[f+6],m=o[A+14];let v=1/0,b=1/0,C=1/0,B=-1/0,T=-1/0,F=-1/0;for(let S=3*x,D=3*(x+m);S<D;S++){let w=s[S];const M=i.getX(w),R=i.getY(w),I=i.getZ(w);M<v&&(v=M),M>B&&(B=M),R<b&&(b=R),R>T&&(T=R),I<C&&(C=I),I>F&&(F=I)}return l[f+0]!==v||l[f+1]!==b||l[f+2]!==C||l[f+3]!==B||l[f+4]!==T||l[f+5]!==F?(l[f+0]=v,l[f+1]=b,l[f+2]=C,l[f+3]=B,l[f+4]=T,l[f+5]=F,!0):!1}else{const x=f+8,m=r[f+6],v=x+p,b=m+p;let C=y,B=!1,T=!1;e?C||(B=e.has(v),T=e.has(b),C=!B&&!T):(B=!0,T=!0);const F=C||B,S=C||T;let D=!1;F&&(D=c(x,p,C));let w=!1;S&&(w=c(m,p,C));const M=D||w;if(M)for(let R=0;R<3;R++){const I=x+R,P=m+R,L=l[I],G=l[I+3],O=l[P],N=l[P+3];l[f+R]=L<O?L:O,l[f+R+3]=G>N?G:N}return M}}}function Ye(n,e,t,s,i){let a,r,o,l,d,h;const c=1/t.direction.x,f=1/t.direction.y,p=1/t.direction.z,y=t.origin.x,A=t.origin.y,g=t.origin.z;let x=e[n],m=e[n+3],v=e[n+1],b=e[n+3+1],C=e[n+2],B=e[n+3+2];return c>=0?(a=(x-y)*c,r=(m-y)*c):(a=(m-y)*c,r=(x-y)*c),f>=0?(o=(v-A)*f,l=(b-A)*f):(o=(b-A)*f,l=(v-A)*f),a>l||o>r||((o>a||isNaN(a))&&(a=o),(l<r||isNaN(r))&&(r=l),p>=0?(d=(C-g)*p,h=(B-g)*p):(d=(B-g)*p,h=(C-g)*p),a>h||d>r)?!1:((d>a||a!==a)&&(a=d),(h<r||r!==r)&&(r=h),a<=i&&r>=s)}function ru(n,e,t,s,i,a,r,o){const{geometry:l,_indirectBuffer:d}=n;for(let h=s,c=s+i;h<c;h++){let f=d?d[h]:h;On(l,e,t,f,a,r,o)}}function ou(n,e,t,s,i,a,r){const{geometry:o,_indirectBuffer:l}=n;let d=1/0,h=null;for(let c=s,f=s+i;c<f;c++){let p;p=On(o,e,t,l?l[c]:c,null,a,r),p&&p.distance<d&&(h=p,d=p.distance)}return h}function au(n,e,t,s,i,a,r){const{geometry:o}=t,{index:l}=o,d=o.attributes.position;for(let h=n,c=e+n;h<c;h++){let f;if(f=t.resolveTriangleIndex(h),Y(r,f*3,l,d),r.needsUpdate=!0,s(r,f,i,a))return!0}return!1}function lu(n,e,t,s,i,a,r){K.setBuffer(n._roots[e]),Es(0,n,t,s,i,a,r),K.clearBuffer()}function Es(n,e,t,s,i,a,r){const{float32Array:o,uint16Array:l,uint32Array:d}=K,h=n*2;if(re(h,l)){const f=ue(n,d),p=he(h,l);tu(e,t,s,f,p,i,a,r)}else{const f=Ae(n);Ye(f,o,s,a,r)&&Es(f,e,t,s,i,a,r);const p=pe(n,d);Ye(p,o,s,a,r)&&Es(p,e,t,s,i,a,r)}}const cu=["x","y","z"];function uu(n,e,t,s,i,a){K.setBuffer(n._roots[e]);const r=Rs(0,n,t,s,i,a);return K.clearBuffer(),r}function Rs(n,e,t,s,i,a){const{float32Array:r,uint16Array:o,uint32Array:l}=K;let d=n*2;if(re(d,o)){const c=ue(n,l),f=he(d,o);return nu(e,t,s,c,f,i,a)}else{const c=Ys(n,l),f=cu[c],y=s.direction[f]>=0;let A,g;y?(A=Ae(n),g=pe(n,l)):(A=pe(n,l),g=Ae(n));const m=Ye(A,r,s,i,a)?Rs(A,e,t,s,i,a):null;if(m){const C=m.point[f];if(y?C<=r[g+c]:C>=r[g+c+3])return m}const b=Ye(g,r,s,i,a)?Rs(g,e,t,s,i,a):null;return m&&b?m.distance<=b.distance?m:b:m||b||null}}const un=new ae,dt=new Be,ft=new Be,Rt=new $,Ri=new le,dn=new le;function du(n,e,t,s){K.setBuffer(n._roots[e]);const i=Is(0,n,t,s);return K.clearBuffer(),i}function Is(n,e,t,s,i=null){const{float32Array:a,uint16Array:r,uint32Array:o}=K;let l=n*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),Ri.set(t.boundingBox.min,t.boundingBox.max,s),i=Ri),re(l,r)){const h=e.geometry,c=h.index,f=h.attributes.position,p=t.index,y=t.attributes.position,A=ue(n,o),g=he(l,r);if(Rt.copy(s).invert(),t.boundsTree)return V(n,a,dn),dn.matrix.copy(Rt),dn.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:m=>dn.intersectsBox(m),intersectsTriangle:m=>{m.a.applyMatrix4(s),m.b.applyMatrix4(s),m.c.applyMatrix4(s),m.needsUpdate=!0;for(let v=A*3,b=(g+A)*3;v<b;v+=3)if(Y(ft,v,c,f),ft.needsUpdate=!0,m.intersectsTriangle(ft))return!0;return!1}});for(let x=A*3,m=(g+A)*3;x<m;x+=3){Y(dt,x,c,f),dt.a.applyMatrix4(Rt),dt.b.applyMatrix4(Rt),dt.c.applyMatrix4(Rt),dt.needsUpdate=!0;for(let v=0,b=p.count;v<b;v+=3)if(Y(ft,v,p,y),ft.needsUpdate=!0,dt.intersectsTriangle(ft))return!0}}else{const h=n+8,c=o[n+6];return V(h,a,un),!!(i.intersectsBox(un)&&Is(h,e,t,s,i)||(V(c,a,un),i.intersectsBox(un)&&Is(c,e,t,s,i)))}}const fn=new $,rs=new le,It=new le,fu=new _,hu=new _,pu=new _,mu=new _;function gu(n,e,t,s={},i={},a=0,r=1/0){e.boundingBox||e.computeBoundingBox(),rs.set(e.boundingBox.min,e.boundingBox.max,t),rs.needsUpdate=!0;const o=n.geometry,l=o.attributes.position,d=o.index,h=e.attributes.position,c=e.index,f=ye.getPrimitive(),p=ye.getPrimitive();let y=fu,A=hu,g=null,x=null;i&&(g=pu,x=mu);let m=1/0,v=null,b=null;return fn.copy(t).invert(),It.matrix.copy(fn),n.shapecast({boundsTraverseOrder:C=>rs.distanceToBox(C),intersectsBounds:(C,B,T)=>T<m&&T<r?(B&&(It.min.copy(C.min),It.max.copy(C.max),It.needsUpdate=!0),!0):!1,intersectsRange:(C,B)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:F=>It.distanceToBox(F),intersectsBounds:(F,S,D)=>D<m&&D<r,intersectsRange:(F,S)=>{for(let D=F,w=F+S;D<w;D++){Y(p,3*D,c,h),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let M=C,R=C+B;M<R;M++){Y(f,3*M,d,l),f.needsUpdate=!0;const I=f.distanceToTriangle(p,y,g);if(I<m&&(A.copy(y),x&&x.copy(g),m=I,v=M,b=D),I<a)return!0}}}});{const T=Ft(e);for(let F=0,S=T;F<S;F++){Y(p,3*F,c,h),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let D=C,w=C+B;D<w;D++){Y(f,3*D,d,l),f.needsUpdate=!0;const M=f.distanceToTriangle(p,y,g);if(M<m&&(A.copy(y),x&&x.copy(g),m=M,v=D,b=F),M<a)return!0}}}}}),ye.releasePrimitive(f),ye.releasePrimitive(p),m===1/0?null:(s.point?s.point.copy(A):s.point=A.clone(),s.distance=m,s.faceIndex=v,i&&(i.point?i.point.copy(x):i.point=x.clone(),i.point.applyMatrix4(fn),A.applyMatrix4(fn),i.distance=A.sub(i.point).length(),i.faceIndex=b),s)}function xu(n,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=n.geometry,s=t.index?t.index.array:null,i=t.attributes.position;let a,r,o,l,d=0;const h=n._roots;for(let f=0,p=h.length;f<p;f++)a=h[f],r=new Uint32Array(a),o=new Uint16Array(a),l=new Float32Array(a),c(0,d),d+=a.byteLength;function c(f,p,y=!1){const A=f*2;if(o[A+15]===kn){const x=r[f+6],m=o[A+14];let v=1/0,b=1/0,C=1/0,B=-1/0,T=-1/0,F=-1/0;for(let S=x,D=x+m;S<D;S++){const w=3*n.resolveTriangleIndex(S);for(let M=0;M<3;M++){let R=w+M;R=s?s[R]:R;const I=i.getX(R),P=i.getY(R),L=i.getZ(R);I<v&&(v=I),I>B&&(B=I),P<b&&(b=P),P>T&&(T=P),L<C&&(C=L),L>F&&(F=L)}}return l[f+0]!==v||l[f+1]!==b||l[f+2]!==C||l[f+3]!==B||l[f+4]!==T||l[f+5]!==F?(l[f+0]=v,l[f+1]=b,l[f+2]=C,l[f+3]=B,l[f+4]=T,l[f+5]=F,!0):!1}else{const x=f+8,m=r[f+6],v=x+p,b=m+p;let C=y,B=!1,T=!1;e?C||(B=e.has(v),T=e.has(b),C=!B&&!T):(B=!0,T=!0);const F=C||B,S=C||T;let D=!1;F&&(D=c(x,p,C));let w=!1;S&&(w=c(m,p,C));const M=D||w;if(M)for(let R=0;R<3;R++){const I=x+R,P=m+R,L=l[I],G=l[I+3],O=l[P],N=l[P+3];l[f+R]=L<O?L:O,l[f+R+3]=G>N?G:N}return M}}}function Au(n,e,t,s,i,a,r){K.setBuffer(n._roots[e]),_s(0,n,t,s,i,a,r),K.clearBuffer()}function _s(n,e,t,s,i,a,r){const{float32Array:o,uint16Array:l,uint32Array:d}=K,h=n*2;if(re(h,l)){const f=ue(n,d),p=he(h,l);ru(e,t,s,f,p,i,a,r)}else{const f=Ae(n);Ye(f,o,s,a,r)&&_s(f,e,t,s,i,a,r);const p=pe(n,d);Ye(p,o,s,a,r)&&_s(p,e,t,s,i,a,r)}}const yu=["x","y","z"];function vu(n,e,t,s,i,a){K.setBuffer(n._roots[e]);const r=Ps(0,n,t,s,i,a);return K.clearBuffer(),r}function Ps(n,e,t,s,i,a){const{float32Array:r,uint16Array:o,uint32Array:l}=K;let d=n*2;if(re(d,o)){const c=ue(n,l),f=he(d,o);return ou(e,t,s,c,f,i,a)}else{const c=Ys(n,l),f=yu[c],y=s.direction[f]>=0;let A,g;y?(A=Ae(n),g=pe(n,l)):(A=pe(n,l),g=Ae(n));const m=Ye(A,r,s,i,a)?Ps(A,e,t,s,i,a):null;if(m){const C=m.point[f];if(y?C<=r[g+c]:C>=r[g+c+3])return m}const b=Ye(g,r,s,i,a)?Ps(g,e,t,s,i,a):null;return m&&b?m.distance<=b.distance?m:b:m||b||null}}const hn=new ae,ht=new Be,pt=new Be,_t=new $,Ii=new le,pn=new le;function bu(n,e,t,s){K.setBuffer(n._roots[e]);const i=Ls(0,n,t,s);return K.clearBuffer(),i}function Ls(n,e,t,s,i=null){const{float32Array:a,uint16Array:r,uint32Array:o}=K;let l=n*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),Ii.set(t.boundingBox.min,t.boundingBox.max,s),i=Ii),re(l,r)){const h=e.geometry,c=h.index,f=h.attributes.position,p=t.index,y=t.attributes.position,A=ue(n,o),g=he(l,r);if(_t.copy(s).invert(),t.boundsTree)return V(n,a,pn),pn.matrix.copy(_t),pn.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:m=>pn.intersectsBox(m),intersectsTriangle:m=>{m.a.applyMatrix4(s),m.b.applyMatrix4(s),m.c.applyMatrix4(s),m.needsUpdate=!0;for(let v=A,b=g+A;v<b;v++)if(Y(pt,3*e.resolveTriangleIndex(v),c,f),pt.needsUpdate=!0,m.intersectsTriangle(pt))return!0;return!1}});for(let x=A,m=g+A;x<m;x++){const v=e.resolveTriangleIndex(x);Y(ht,3*v,c,f),ht.a.applyMatrix4(_t),ht.b.applyMatrix4(_t),ht.c.applyMatrix4(_t),ht.needsUpdate=!0;for(let b=0,C=p.count;b<C;b+=3)if(Y(pt,b,p,y),pt.needsUpdate=!0,ht.intersectsTriangle(pt))return!0}}else{const h=n+8,c=o[n+6];return V(h,a,hn),!!(i.intersectsBox(hn)&&Ls(h,e,t,s,i)||(V(c,a,hn),i.intersectsBox(hn)&&Ls(c,e,t,s,i)))}}const mn=new $,os=new le,Pt=new le,Cu=new _,Bu=new _,Tu=new _,Su=new _;function Mu(n,e,t,s={},i={},a=0,r=1/0){e.boundingBox||e.computeBoundingBox(),os.set(e.boundingBox.min,e.boundingBox.max,t),os.needsUpdate=!0;const o=n.geometry,l=o.attributes.position,d=o.index,h=e.attributes.position,c=e.index,f=ye.getPrimitive(),p=ye.getPrimitive();let y=Cu,A=Bu,g=null,x=null;i&&(g=Tu,x=Su);let m=1/0,v=null,b=null;return mn.copy(t).invert(),Pt.matrix.copy(mn),n.shapecast({boundsTraverseOrder:C=>os.distanceToBox(C),intersectsBounds:(C,B,T)=>T<m&&T<r?(B&&(Pt.min.copy(C.min),Pt.max.copy(C.max),Pt.needsUpdate=!0),!0):!1,intersectsRange:(C,B)=>{if(e.boundsTree){const T=e.boundsTree;return T.shapecast({boundsTraverseOrder:F=>Pt.distanceToBox(F),intersectsBounds:(F,S,D)=>D<m&&D<r,intersectsRange:(F,S)=>{for(let D=F,w=F+S;D<w;D++){const M=T.resolveTriangleIndex(D);Y(p,3*M,c,h),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let R=C,I=C+B;R<I;R++){const P=n.resolveTriangleIndex(R);Y(f,3*P,d,l),f.needsUpdate=!0;const L=f.distanceToTriangle(p,y,g);if(L<m&&(A.copy(y),x&&x.copy(g),m=L,v=R,b=D),L<a)return!0}}}})}else{const T=Ft(e);for(let F=0,S=T;F<S;F++){Y(p,3*F,c,h),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let D=C,w=C+B;D<w;D++){const M=n.resolveTriangleIndex(D);Y(f,3*M,d,l),f.needsUpdate=!0;const R=f.distanceToTriangle(p,y,g);if(R<m&&(A.copy(y),x&&x.copy(g),m=R,v=D,b=F),R<a)return!0}}}}}),ye.releasePrimitive(f),ye.releasePrimitive(p),m===1/0?null:(s.point?s.point.copy(A):s.point=A.clone(),s.distance=m,s.faceIndex=v,i&&(i.point?i.point.copy(x):i.point=x.clone(),i.point.applyMatrix4(mn),A.applyMatrix4(mn),i.distance=A.sub(i.point).length(),i.faceIndex=b),s)}function Fu(){return typeof SharedArrayBuffer<"u"}const Jt=new K.constructor,In=new K.constructor,ze=new Zs(()=>new ae),mt=new ae,gt=new ae,as=new ae,ls=new ae;let cs=!1;function wu(n,e,t,s){if(cs)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");cs=!0;const i=n._roots,a=e._roots;let r,o=0,l=0;const d=new $().copy(t).invert();for(let h=0,c=i.length;h<c;h++){Jt.setBuffer(i[h]),l=0;const f=ze.getPrimitive();V(0,Jt.float32Array,f),f.applyMatrix4(d);for(let p=0,y=a.length;p<y&&(In.setBuffer(a[p]),r=be(0,0,t,d,s,o,l,0,0,f),In.clearBuffer(),l+=a[p].length,!r);p++);if(ze.releasePrimitive(f),Jt.clearBuffer(),o+=i[h].length,r)break}return cs=!1,r}function be(n,e,t,s,i,a=0,r=0,o=0,l=0,d=null,h=!1){let c,f;h?(c=In,f=Jt):(c=Jt,f=In);const p=c.float32Array,y=c.uint32Array,A=c.uint16Array,g=f.float32Array,x=f.uint32Array,m=f.uint16Array,v=n*2,b=e*2,C=re(v,A),B=re(b,m);let T=!1;if(B&&C)h?T=i(ue(e,x),he(e*2,m),ue(n,y),he(n*2,A),l,r+e,o,a+n):T=i(ue(n,y),he(n*2,A),ue(e,x),he(e*2,m),o,a+n,l,r+e);else if(B){const F=ze.getPrimitive();V(e,g,F),F.applyMatrix4(t);const S=Ae(n),D=pe(n,y);V(S,p,mt),V(D,p,gt);const w=F.intersectsBox(mt),M=F.intersectsBox(gt);T=w&&be(e,S,s,t,i,r,a,l,o+1,F,!h)||M&&be(e,D,s,t,i,r,a,l,o+1,F,!h),ze.releasePrimitive(F)}else{const F=Ae(e),S=pe(e,x);V(F,g,as),V(S,g,ls);const D=d.intersectsBox(as),w=d.intersectsBox(ls);if(D&&w)T=be(n,F,t,s,i,a,r,o,l+1,d,h)||be(n,S,t,s,i,a,r,o,l+1,d,h);else if(D)if(C)T=be(n,F,t,s,i,a,r,o,l+1,d,h);else{const M=ze.getPrimitive();M.copy(as).applyMatrix4(t);const R=Ae(n),I=pe(n,y);V(R,p,mt),V(I,p,gt);const P=M.intersectsBox(mt),L=M.intersectsBox(gt);T=P&&be(F,R,s,t,i,r,a,l,o+1,M,!h)||L&&be(F,I,s,t,i,r,a,l,o+1,M,!h),ze.releasePrimitive(M)}else if(w)if(C)T=be(n,S,t,s,i,a,r,o,l+1,d,h);else{const M=ze.getPrimitive();M.copy(ls).applyMatrix4(t);const R=Ae(n),I=pe(n,y);V(R,p,mt),V(I,p,gt);const P=M.intersectsBox(mt),L=M.intersectsBox(gt);T=P&&be(S,R,s,t,i,r,a,l,o+1,M,!h)||L&&be(S,I,s,t,i,r,a,l,o+1,M,!h),ze.releasePrimitive(M)}}return T}const gn=new le,_i=new ae,Du={strategy:Er,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class $s{static serialize(e,t={}){t={cloneBuffers:!0,...t};const s=e.geometry,i=e._roots,a=e._indirectBuffer,r=s.getIndex();let o;return t.cloneBuffers?o={roots:i.map(l=>l.slice()),index:r?r.array.slice():null,indirectBuffer:a?a.slice():null}:o={roots:i,index:r?r.array:null,indirectBuffer:a},o}static deserialize(e,t,s={}){s={setIndex:!0,indirect:!!e.indirectBuffer,...s};const{index:i,roots:a,indirectBuffer:r}=e,o=new $s(t,{...s,[es]:!0});if(o._roots=a,o._indirectBuffer=r||null,s.setIndex){const l=t.getIndex();if(l===null){const d=new q(e.index,1,!1);t.setIndex(d)}else l.array!==i&&(l.array.set(i),l.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...Du,[es]:!1},t),t.useSharedArrayBuffer&&!Fu())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[es]||(Wc(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new ae))),this.resolveTriangleIndex=t.indirect?s=>this._indirectBuffer[s]:s=>s}refit(e=null){return(this.indirect?xu:iu)(this,e)}traverse(e,t=0){const s=this._roots[t],i=new Uint32Array(s),a=new Uint16Array(s);r(0);function r(o,l=0){const d=o*2,h=a[d+15]===kn;if(h){const c=i[o+6],f=a[d+14];e(l,h,new Float32Array(s,o*4,6),c,f)}else{const c=o+Ve/4,f=i[o+6],p=i[o+7];e(l,h,new Float32Array(s,o*4,6),p)||(r(c,l+1),r(f,l+1))}}}raycast(e,t=wn,s=0,i=1/0){const a=this._roots,r=this.geometry,o=[],l=t.isMaterial,d=Array.isArray(t),h=r.groups,c=l?t.side:t,f=this.indirect?Au:lu;for(let p=0,y=a.length;p<y;p++){const A=d?t[h[p].materialIndex].side:c,g=o.length;if(f(this,p,A,e,o,s,i),d){const x=h[p].materialIndex;for(let m=g,v=o.length;m<v;m++)o[m].face.materialIndex=x}}return o}raycastFirst(e,t=wn,s=0,i=1/0){const a=this._roots,r=this.geometry,o=t.isMaterial,l=Array.isArray(t);let d=null;const h=r.groups,c=o?t.side:t,f=this.indirect?vu:uu;for(let p=0,y=a.length;p<y;p++){const A=l?t[h[p].materialIndex].side:c,g=f(this,p,A,e,s,i);g!=null&&(d==null||g.distance<d.distance)&&(d=g,l&&(g.face.materialIndex=h[p].materialIndex))}return d}intersectsGeometry(e,t){let s=!1;const i=this._roots,a=this.indirect?bu:du;for(let r=0,o=i.length;r<o&&(s=a(this,r,e,t),!s);r++);return s}shapecast(e){const t=ye.getPrimitive(),s=this.indirect?au:su;let{boundsTraverseOrder:i,intersectsBounds:a,intersectsRange:r,intersectsTriangle:o}=e;if(r&&o){const c=r;r=(f,p,y,A,g)=>c(f,p,y,A,g)?!0:s(f,p,this,o,y,A,t)}else r||(o?r=(c,f,p,y)=>s(c,f,this,o,p,y,t):r=(c,f,p)=>p);let l=!1,d=0;const h=this._roots;for(let c=0,f=h.length;c<f;c++){const p=h[c];if(l=qc(this,c,a,r,i,d),l)break;d+=p.byteLength}return ye.releasePrimitive(t),l}bvhcast(e,t,s){let{intersectsRanges:i,intersectsTriangles:a}=s;const r=ye.getPrimitive(),o=this.geometry.index,l=this.geometry.attributes.position,d=this.indirect?y=>{const A=this.resolveTriangleIndex(y);Y(r,A*3,o,l)}:y=>{Y(r,y*3,o,l)},h=ye.getPrimitive(),c=e.geometry.index,f=e.geometry.attributes.position,p=e.indirect?y=>{const A=e.resolveTriangleIndex(y);Y(h,A*3,c,f)}:y=>{Y(h,y*3,c,f)};if(a){const y=(A,g,x,m,v,b,C,B)=>{for(let T=x,F=x+m;T<F;T++){p(T),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let S=A,D=A+g;S<D;S++)if(d(S),r.needsUpdate=!0,a(r,h,S,T,v,b,C,B))return!0}return!1};if(i){const A=i;i=function(g,x,m,v,b,C,B,T){return A(g,x,m,v,b,C,B,T)?!0:y(g,x,m,v,b,C,B,T)}}else i=y}return wu(this,e,t,i)}intersectsBox(e,t){return gn.set(e.min,e.max,t),gn.needsUpdate=!0,this.shapecast({intersectsBounds:s=>gn.intersectsBox(s),intersectsTriangle:s=>gn.intersectsTriangle(s)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,s={},i={},a=0,r=1/0){return(this.indirect?Mu:gu)(this,e,t,s,i,a,r)}closestPointToPoint(e,t={},s=0,i=1/0){return Zc(this,e,t,s,i)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(s=>{V(0,new Float32Array(s),_i),e.union(_i)}),e}}function Eu(n){switch(n){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function Ru(n){switch(n){case 1:return Bt;case 2:return gr;case 3:return te;case 4:return te}}function Pi(n){switch(n){case 1:return Ua;case 2:return mr;case 3:return bs;case 4:return bs}}class Hr extends ve{constructor(){super(),this.minFilter=ee,this.magFilter=ee,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){const t=this.overrideItemSize,s=e.itemSize,i=e.count;if(t!==null){if(s*i%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=i*s/t}const a=e.itemSize,r=e.count,o=e.normalized,l=e.array.constructor,d=l.BYTES_PER_ELEMENT;let h=this._forcedType,c=a;if(h===null)switch(l){case Float32Array:h=oe;break;case Uint8Array:case Uint16Array:case Uint32Array:h=Ut;break;case Int8Array:case Int16Array:case Int32Array:h=Wn;break}let f,p,y,A,g=Eu(a);switch(h){case oe:y=1,p=Ru(a),o&&d===1?(A=l,g+="8",l===Uint8Array?f=vs:(f=hi,g+="_SNORM")):(A=Float32Array,g+="32F",f=oe);break;case Wn:g+=d*8+"I",y=o?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,p=Pi(a),d===1?(A=Int8Array,f=hi):d===2?(A=Int16Array,f=Na):(A=Int32Array,f=Wn);break;case Ut:g+=d*8+"UI",y=o?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,p=Pi(a),d===1?(A=Uint8Array,f=vs):d===2?(A=Uint16Array,f=za):(A=Uint32Array,f=Ut);break}c===3&&(p===te||p===bs)&&(c=4);const x=Math.ceil(Math.sqrt(r))||1,m=c*x*x,v=new A(m),b=e.normalized;e.normalized=!1;for(let C=0;C<r;C++){const B=c*C;v[B]=e.getX(C)/y,a>=2&&(v[B+1]=e.getY(C)/y),a>=3&&(v[B+2]=e.getZ(C)/y,c===4&&(v[B+3]=1)),a>=4&&(v[B+3]=e.getW(C)/y)}e.normalized=b,this.internalFormat=g,this.format=p,this.type=f,this.image.width=x,this.image.height=x,this.image.data=v,this.needsUpdate=!0,this.dispose(),e.itemSize=s,e.count=i}}class kr extends Hr{constructor(){super(),this._forcedType=Ut}}class Or extends Hr{constructor(){super(),this._forcedType=oe}}class Iu{constructor(){this.index=new kr,this.position=new Or,this.bvhBounds=new ve,this.bvhContents=new ve,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){const{geometry:t}=e;if(Pu(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){const s=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==s.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{const i=_r(Ir(t));this._cachedIndexAttr=new q(i,1,!1)}_u(t,s,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){const{index:e,position:t,bvhBounds:s,bvhContents:i}=this;e&&e.dispose(),t&&t.dispose(),s&&s.dispose(),i&&i.dispose()}}function _u(n,e,t){const s=t.array,i=n.index?n.index.array:null;for(let a=0,r=e.length;a<r;a++){const o=3*a,l=3*e[a];for(let d=0;d<3;d++)s[o+d]=i?i[l+d]:l+d}}function Pu(n,e,t){const s=n._roots;if(s.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const i=s[0],a=new Uint16Array(i),r=new Uint32Array(i),o=new Float32Array(i),l=i.byteLength/Ve,d=2*Math.ceil(Math.sqrt(l/2)),h=new Float32Array(4*d*d),c=Math.ceil(Math.sqrt(l)),f=new Uint32Array(2*c*c);for(let p=0;p<l;p++){const y=p*Ve/4,A=y*2,g=y;for(let x=0;x<3;x++)h[8*p+0+x]=o[g+0+x],h[8*p+4+x]=o[g+3+x];if(re(A,a)){const x=he(A,a),m=ue(y,r),v=4294901760|x;f[p*2+0]=v,f[p*2+1]=m}else{const x=4*pe(y,r)/Ve,m=Ys(y,r);f[p*2+0]=m,f[p*2+1]=x}}e.image.data=h,e.image.width=d,e.image.height=d,e.format=te,e.type=oe,e.internalFormat="RGBA32F",e.minFilter=ee,e.magFilter=ee,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=f,t.image.width=c,t.image.height=c,t.format=mr,t.type=Ut,t.internalFormat="RG32UI",t.minFilter=ee,t.magFilter=ee,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}const $e=new _,et=new _,tt=new _,Li=new Tt,xn=new _,us=new _,Gi=new Tt,ji=new Tt,An=new $,Hi=new $;function Lt(n,e){if(!n&&!e)return;const t=n.count===e.count,s=n.normalized===e.normalized,i=n.array.constructor===e.array.constructor,a=n.itemSize===e.itemSize;if(!t||!s||!i||!a)throw new Error}function Ot(n,e=null){const t=n.array.constructor,s=n.normalized,i=n.itemSize,a=e===null?n.count:e;return new q(new t(i*a),i,s)}function zr(n,e,t=0){if(n.isInterleavedBufferAttribute){const s=n.itemSize;for(let i=0,a=n.count;i<a;i++){const r=i+t;e.setX(r,n.getX(i)),s>=2&&e.setY(r,n.getY(i)),s>=3&&e.setZ(r,n.getZ(i)),s>=4&&e.setW(r,n.getW(i))}}else{const s=e.array,i=s.constructor,a=s.BYTES_PER_ELEMENT*n.itemSize*t;new i(s.buffer,a,n.array.length).set(n.array)}}function Lu(n,e,t){const s=n.elements,i=e.elements;for(let a=0,r=i.length;a<r;a++)s[a]+=i[a]*t}function ki(n,e,t){const s=n.skeleton,i=n.geometry,a=s.bones,r=s.boneInverses;Gi.fromBufferAttribute(i.attributes.skinIndex,e),ji.fromBufferAttribute(i.attributes.skinWeight,e),An.elements.fill(0);for(let o=0;o<4;o++){const l=ji.getComponent(o);if(l!==0){const d=Gi.getComponent(o);Hi.multiplyMatrices(a[d].matrixWorld,r[d]),Lu(An,Hi,l)}}return An.multiply(n.bindMatrix).premultiply(n.bindMatrixInverse),t.transformDirection(An),t}function ds(n,e,t,s,i){xn.set(0,0,0);for(let a=0,r=n.length;a<r;a++){const o=e[a],l=n[a];o!==0&&(us.fromBufferAttribute(l,s),t?xn.addScaledVector(us,o):xn.addScaledVector(us.sub(i),o))}i.add(xn)}function Gu(n,e={useGroups:!1,updateIndex:!1,skipAttributes:[]},t=new Fe){const s=n[0].index!==null,{useGroups:i=!1,updateIndex:a=!1,skipAttributes:r=[]}=e,o=new Set(Object.keys(n[0].attributes)),l={};let d=0;t.clearGroups();for(let h=0;h<n.length;++h){const c=n[h];let f=0;if(s!==(c.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const p in c.attributes){if(!o.has(p))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.');l[p]===void 0&&(l[p]=[]),l[p].push(c.attributes[p]),f++}if(f!==o.size)throw new Error("StaticGeometryGenerator: Make sure all geometries have the same number of attributes.");if(i){let p;if(s)p=c.index.count;else if(c.attributes.position!==void 0)p=c.attributes.position.count;else throw new Error("StaticGeometryGenerator: The geometry must have either an index or a position attribute");t.addGroup(d,p,h),d+=p}}if(s){let h=!1;if(!t.index){let c=0;for(let f=0;f<n.length;++f)c+=n[f].index.count;t.setIndex(new q(new Uint32Array(c),1,!1)),h=!0}if(a||h){const c=t.index;let f=0,p=0;for(let y=0;y<n.length;++y){const A=n[y],g=A.index;if(r[y]!==!0)for(let x=0;x<g.count;++x)c.setX(f,g.getX(x)+p),f++;p+=A.attributes.position.count}}}for(const h in l){const c=l[h];if(!(h in t.attributes)){let y=0;for(const A in c)y+=c[A].count;t.setAttribute(h,Ot(l[h][0],y))}const f=t.attributes[h];let p=0;for(let y=0,A=c.length;y<A;y++){const g=c[y];r[y]!==!0&&zr(g,f,p),p+=g.count}}return t}function ju(n,e){if(n===null||e===null)return n===e;if(n.length!==e.length)return!1;for(let t=0,s=n.length;t<s;t++)if(n[t]!==e[t])return!1;return!0}function Hu(n){const{index:e,attributes:t}=n;if(e)for(let s=0,i=e.count;s<i;s+=3){const a=e.getX(s),r=e.getX(s+2);e.setX(s,r),e.setX(s+2,a)}else for(const s in t){const i=t[s],a=i.itemSize;for(let r=0,o=i.count;r<o;r+=3)for(let l=0;l<a;l++){const d=i.getComponent(r,l),h=i.getComponent(r+2,l);i.setComponent(r,l,h),i.setComponent(r+2,l,d)}}return n}class ku{constructor(e){this.matrixWorld=new $,this.geometryHash=null,this.boneMatrices=null,this.primitiveCount=-1,this.mesh=e,this.update()}update(){const e=this.mesh,t=e.geometry,s=e.skeleton,i=(t.index?t.index.count:t.attributes.position.count)/3;if(this.matrixWorld.copy(e.matrixWorld),this.geometryHash=t.attributes.position.version,this.primitiveCount=i,s){s.boneTexture||s.computeBoneTexture(),s.update();const a=s.boneMatrices;!this.boneMatrices||this.boneMatrices.length!==a.length?this.boneMatrices=a.slice():this.boneMatrices.set(a)}else this.boneMatrices=null}didChange(){const e=this.mesh,t=e.geometry,s=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===t.attributes.position.version&&ju(e.skeleton&&e.skeleton.boneMatrices||null,this.boneMatrices)&&this.primitiveCount===s)}}class Oi{constructor(e){Array.isArray(e)||(e=[e]);const t=[];e.forEach(s=>{s.traverseVisible(i=>{i.isMesh&&t.push(i)})}),this.meshes=t,this.useGroups=!0,this.applyWorldTransforms=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Array(t.length).fill().map(()=>new Fe),this._diffMap=new WeakMap}getMaterials(){const e=[];return this.meshes.forEach(t=>{Array.isArray(t.material)?e.push(...t.material):e.push(t.material)}),e}generate(e=new Fe){let t=[];const{meshes:s,useGroups:i,_intermediateGeometry:a,_diffMap:r}=this;for(let o=0,l=s.length;o<l;o++){const d=s[o],h=a[o],c=r.get(d);!c||c.didChange(d)?(this._convertToStaticGeometry(d,h),t.push(!1),c?c.update():r.set(d,new ku(d))):t.push(!0)}if(a.length===0){e.setIndex(null);const o=e.attributes;for(const l in o)e.deleteAttribute(l);for(const l in this.attributes)e.setAttribute(this.attributes[l],new q(new Float32Array(0),4,!1))}else Gu(a,{useGroups:i,skipAttributes:t},e);for(const o in e.attributes)e.attributes[o].needsUpdate=!0;return e}_convertToStaticGeometry(e,t=new Fe){const s=e.geometry,i=this.applyWorldTransforms,a=this.attributes.includes("normal"),r=this.attributes.includes("tangent"),o=s.attributes,l=t.attributes;!t.index&&s.index&&(t.index=s.index.clone()),l.position||t.setAttribute("position",Ot(o.position)),a&&!l.normal&&o.normal&&t.setAttribute("normal",Ot(o.normal)),r&&!l.tangent&&o.tangent&&t.setAttribute("tangent",Ot(o.tangent)),Lt(s.index,t.index),Lt(o.position,l.position),a&&Lt(o.normal,l.normal),r&&Lt(o.tangent,l.tangent);const d=o.position,h=a?o.normal:null,c=r?o.tangent:null,f=s.morphAttributes.position,p=s.morphAttributes.normal,y=s.morphAttributes.tangent,A=s.morphTargetsRelative,g=e.morphTargetInfluences,x=new Ja;x.getNormalMatrix(e.matrixWorld),s.index&&t.index.array.set(s.index.array);for(let m=0,v=o.position.count;m<v;m++)$e.fromBufferAttribute(d,m),h&&et.fromBufferAttribute(h,m),c&&(Li.fromBufferAttribute(c,m),tt.fromBufferAttribute(c,m)),g&&(f&&ds(f,g,A,m,$e),p&&ds(p,g,A,m,et),y&&ds(y,g,A,m,tt)),e.isSkinnedMesh&&(e.applyBoneTransform(m,$e),h&&ki(e,m,et),c&&ki(e,m,tt)),i&&$e.applyMatrix4(e.matrixWorld),l.position.setXYZ(m,$e.x,$e.y,$e.z),h&&(i&&et.applyNormalMatrix(x),l.normal.setXYZ(m,et.x,et.y,et.z)),c&&(i&&tt.transformDirection(e.matrixWorld),l.tangent.setXYZW(m,tt.x,tt.y,tt.z,Li.w));for(const m in this.attributes){const v=this.attributes[m];v==="position"||v==="tangent"||v==="normal"||!(v in o)||(l[v]||t.setAttribute(v,Ot(o[v])),Lt(o[v],l[v]),zr(o[v],l[v]))}return e.matrixWorld.determinant()<0&&Hu(t),t}}const Ou=`

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
`,zu=`

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
`,Nu=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`;function Uu(n,e,t=new _){const s=Math.PI*(n-.5),i=2*Math.PI*(e-.5);return t.x=Math.cos(i),t.y=Math.sin(s),t.z=Math.sin(i),t}const Ju=E.forwardRef(({inclination:n=.6,azimuth:e=.1,distance:t=1e3,mieCoefficient:s=.005,mieDirectionalG:i=.8,rayleigh:a=.5,turbidity:r=10,sunPosition:o=Uu(n,e),...l},d)=>{const h=E.useMemo(()=>new _().setScalar(t),[t]),[c]=E.useState(()=>new Xl);return E.createElement("primitive",Wa({object:c,ref:d,"material-uniforms-mieCoefficient-value":s,"material-uniforms-mieDirectionalG-value":i,"material-uniforms-rayleigh-value":a,"material-uniforms-sunPosition-value":o,"material-uniforms-turbidity-value":r,scale:h},l))});class ei extends js{constructor(e){super(e);for(const t in this.uniforms)Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(s){this.uniforms[t].value=s}})}setDefine(e,t=void 0){t==null?e in this.defines&&(delete this.defines[e],this.needsUpdate=!0):this.defines[e]!==t&&(this.defines[e]=t,this.needsUpdate=!0)}}class Wu extends ei{constructor(e){super({blending:Us,uniforms:{target1:{value:null},target2:{value:null},opacity:{value:1}},vertexShader:`

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

				}`}),this.setValues(e)}}function yn(n=1){let e="uint";return n>1&&(e="uvec"+n),`
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
	`}function vn(n=1){let e="uint",t="float",s="",i=".r",a="1u";return n>1&&(e="uvec"+n,t="vec"+n,s=n+"",n===2?(i=".rg",a="uvec2( 1u, 2u )"):n===3?(i=".rgb",a="uvec3( 1u, 2u, 3u )"):(i="",a="uvec4( 1u, 2u, 3u, 4u )")),`

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
	`}const Nr=`

	// Utils
	const float SOBOL_FACTOR = 1.0 / 16777216.0;
	const uint SOBOL_MAX_POINTS = 256u * 256u;

	${yn(1)}
	${yn(2)}
	${yn(3)}
	${yn(4)}

	uint sobolHash( uint x ) {

		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}

`,Ku=`

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

`,Xu=`

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

	${vn(1)}
	${vn(2)}
	${vn(3)}
	${vn(4)}

`;class Vu extends ei{constructor(){super({blending:Us,uniforms:{resolution:{value:new Ce}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`

				${Nr}
				${Ku}

				varying vec2 vUv;
				uniform vec2 resolution;
				void main() {

					uint index = uint( gl_FragCoord.y ) * uint( resolution.x ) + uint( gl_FragCoord.x );
					gl_FragColor = generateSobolPoint( index );

				}
			`})}}class Qu{generate(e,t=256){const s=new Sn(t,t,{type:oe,format:te,minFilter:ee,magFilter:ee,generateMipmaps:!1}),i=e.getRenderTarget();e.setRenderTarget(s);const a=new St(new Vu);return a.material.resolution.set(t,t),a.render(e),e.setRenderTarget(i),a.dispose(),s}}function*Yu(){const{_renderer:n,_fsQuad:e,_blendQuad:t,_primaryTarget:s,_blendTargets:i,_sobolTarget:a,_subframe:r,alpha:o,camera:l,material:d}=this,h=new Tt,c=new Tt,f=t.material;let[p,y]=i;for(;;){o?(f.opacity=this._opacityFactor/(this._samples+1),d.blending=Us,d.opacity=1):(d.opacity=this._opacityFactor/(this._samples+1),d.blending=Ka);const[A,g,x,m]=r,v=s.width,b=s.height;d.resolution.set(v*x,b*m),d.sobolTexture=a.texture,d.stratifiedTexture.init(20,d.bounces+d.transmissiveBounces+5),d.stratifiedTexture.next(),d.seed++;const C=this.tiles.x||1,B=this.tiles.y||1,T=C*B,F=Math.ceil(v*x),S=Math.ceil(b*m),D=Math.floor(A*v),w=Math.floor(g*b),M=Math.ceil(F/C),R=Math.ceil(S/B);for(let I=0;I<B;I++)for(let P=0;P<C;P++){d.cameraWorldMatrix.copy(l.matrixWorld),d.invProjectionMatrix.copy(l.projectionMatrixInverse);let L=0;l.projectionMatrix.elements[15]>0&&(L=1),l.isEquirectCamera&&(L=2),d.setDefine("CAMERA_TYPE",L);const G=n.getRenderTarget(),O=n.autoClear,N=n.getScissorTest();n.getScissor(h),n.getViewport(c);let Q=P,W=I;if(!this.stableTiles){const de=this._currentTile%(C*B);Q=de%C,W=~~(de/C),this._currentTile=de+1}const ne=B-W-1;s.scissor.set(D+Q*M,w+ne*R,Math.min(M,F-Q*M),Math.min(R,S-ne*R)),s.viewport.set(D,w,F,S),n.setRenderTarget(s),n.setScissorTest(!0),n.autoClear=!1,e.render(n),n.setViewport(c),n.setScissor(h),n.setScissorTest(N),n.setRenderTarget(G),n.autoClear=O,o&&(f.target1=p.texture,f.target2=s.texture,n.setRenderTarget(y),t.render(n),n.setRenderTarget(G)),this._samples+=1/T,P===C-1&&I===B-1&&(this._samples=Math.round(this._samples)),yield}[p,y]=[y,p]}}const zi=new Z;class qu{get material(){return this._fsQuad.material}set material(e){this._fsQuad.material=e}get target(){return this._alpha?this._blendTargets[1]:this._primaryTarget}set alpha(e){this._alpha!==e&&(e||(this._blendTargets[0].dispose(),this._blendTargets[1].dispose()),this._alpha=e,this.reset())}get alpha(){return this._alpha}get samples(){return this._samples}constructor(e){this.camera=null,this.tiles=new Ce(1,1),this.stableNoise=!1,this.stableTiles=!0,this._samples=0,this._subframe=new Tt(0,0,1,1),this._opacityFactor=1,this._renderer=e,this._alpha=!1,this._fsQuad=new St(null),this._blendQuad=new St(new Wu),this._task=null,this._currentTile=0,this._sobolTarget=new Qu().generate(e);const t=e.extensions.get("OES_texture_float_linear");this._primaryTarget=new Sn(1,1,{format:te,type:t?oe:ce}),this._blendTargets=[new Sn(1,1,{format:te,type:t?oe:ce}),new Sn(1,1,{format:te,type:t?oe:ce})]}setSize(e,t){e=Math.ceil(e),t=Math.ceil(t),!(this._primaryTarget.width===e&&this._primaryTarget.height===t)&&(this._primaryTarget.setSize(e,t),this._blendTargets[0].setSize(e,t),this._blendTargets[1].setSize(e,t),this.reset())}dispose(){this._primaryTarget.dispose(),this._blendTargets[0].dispose(),this._blendTargets[1].dispose(),this._sobolTarget.dispose(),this._fsQuad.dispose(),this._blendQuad.dispose(),this._task=null}reset(){const{_renderer:e,_primaryTarget:t,_blendTargets:s}=this,i=e.getRenderTarget(),a=e.getClearAlpha();e.getClearColor(zi),e.setRenderTarget(t),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(s[0]),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(s[1]),e.setClearColor(0,0),e.clearColor(),e.setClearColor(zi,a),e.setRenderTarget(i),this._samples=0,this._task=null,this.stableNoise&&(this.material.seed=0)}update(){this._task||(this._task=Yu.call(this)),this._task.next()}}function Zu(n,e,t){const s=n.index,a=n.attributes.position.count,r=s?s.count:a;let o=n.groups;o.length===0&&(o=[{count:r,start:0,materialIndex:0}]);let l;t.length<=255?l=new Uint8Array(a):l=new Uint16Array(a);for(let d=0;d<o.length;d++){const h=o[d],c=h.start,f=h.count,p=Math.min(f,r-c),y=Array.isArray(e)?e[h.materialIndex]:e,A=t.indexOf(y);for(let g=0;g<p;g++){let x=c+g;s&&(x=s.getX(x)),l[x]=A}}return new q(l,1,!1)}function $u(n,e){const{attributes:t=[],normalMapRequired:s=!1}=e;if(!n.attributes.normal&&t&&t.includes("normal")&&n.computeVertexNormals(),!n.attributes.uv&&t&&t.includes("uv")){const i=n.attributes.position.count;n.setAttribute("uv",new q(new Float32Array(i*2),2,!1))}if(!n.attributes.uv2&&t&&t.includes("uv2")){const i=n.attributes.position.count;n.setAttribute("uv2",new q(new Float32Array(i*2),2,!1))}if(!n.attributes.tangent&&t&&t.includes("tangent"))if(s)n.index===null&&(n=Xa(n)),n.computeTangents();else{const i=n.attributes.position.count;n.setAttribute("tangent",new q(new Float32Array(i*4),4,!1))}if(!n.attributes.color&&t&&t.includes("color")){const i=n.attributes.position.count,a=new Float32Array(i*4);a.fill(1),n.setAttribute("color",new q(a,4))}if(!n.index){const i=n.attributes.position.count,a=new Array(i);for(let r=0;r<i;r++)a[r]=r;n.setIndex(a)}}const ed=new Je;function td(){const n=new Fe;return n.setAttribute("position",new q(new Float32Array(9),3)),new it(n,ed)}class nd{get initialized(){return!!this.bvh}constructor(e){Array.isArray(e)||(e=[e]);const t=[...e];t.length===0&&t.push(td()),this.bvhOptions={},this.attributes=["position","normal","tangent","color","uv","uv2"],this.objects=t,this.bvh=null,this.geometry=new Fe,this.materials=null,this.textures=null,this.lights=[],this.staticGeometryGenerator=new Oi(this.objects)}reset(){this.bvh=null,this.geometry.dispose(),this.geometry=new Fe,this.materials=null,this.textures=null,this.lights=[],this.staticGeometryGenerator=new Oi(this.objects)}dispose(){}prepScene(){if(this.bvh!==null)return;const{objects:e,staticGeometryGenerator:t,geometry:s,lights:i,attributes:a}=this;for(let d=0,h=e.length;d<h;d++)e[d].traverse(c=>{if(c.isMesh){const f=!!c.material.normalMap;$u(c.geometry,{attributes:a,normalMapRequired:f})}else(c.isRectAreaLight||c.isSpotLight||c.isPointLight||c.isDirectionalLight)&&i.push(c)});const r=new Set,o=t.getMaterials();o.forEach(d=>{for(const h in d){const c=d[h];c&&c.isTexture&&r.add(c)}}),t.attributes=a,t.generate(s);const l=Zu(s,o,o);s.setAttribute("materialIndex",l),s.clearGroups(),this.materials=o,this.textures=Array.from(r)}generate(){const{objects:e,staticGeometryGenerator:t,geometry:s,bvhOptions:i}=this;if(this.bvh===null)return this.prepScene(),this.bvh=new $s(s,{strategy:Rr,maxLeafTris:1,...i}),{lights:this.lights,bvh:this.bvh,materials:this.materials,textures:this.textures,objects:e};{const{bvh:a}=this;return t.generate(s),a.refit(),{lights:this.lights,bvh:this.bvh,materials:this.materials,textures:this.textures,objects:e}}}}class sd extends Ns{set bokehSize(e){this.fStop=this.getFocalLength()/e}get bokehSize(){return this.getFocalLength()/this.fStop}constructor(...e){super(...e),this.fStop=1.4,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=25,this.anamorphicRatio=1}copy(e,t){return super.copy(e,t),this.fStop=e.fStop,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio,this}}function Gs(n){return`${n.source.uuid}:${n.colorSpace}`}function Ur(n){const e=new Set,t=[];for(let s=0,i=n.length;s<i;s++){const a=n[s],r=Gs(a);e.has(r)||(e.add(r),t.push(a))}return t}const Jr=45,xt=Jr*4,Ni=14*4+0,Ui=14*4+1;class id{constructor(){this._features={}}isUsed(e){return e in this._features}setUsed(e,t=!0){t===!1?delete this._features[e]:this._features[e]=!0}reset(){this._features={}}}class rd extends ve{constructor(){super(new Float32Array(4),1,1),this.format=te,this.type=oe,this.wrapS=Qe,this.wrapT=Qe,this.minFilter=ee,this.magFilter=ee,this.generateMipmaps=!1,this.threeCompatibilityTransforms=!1,this.features=new id}setCastShadow(e,t){const s=this.image.data,i=e*xt+Ui;s[i]=t?0:1}getCastShadow(e){const t=this.image.data,s=e*xt+Ui;return!t[s]}setMatte(e,t){const s=this.image.data,i=e*xt+Ni;s[i]=t?1:0}getMatte(e){const t=this.image.data,s=e*xt+Ni;return!!t[s]}updateFrom(e,t){function s(g,x,m=-1){if(x in g&&g[x]){const v=Gs(g[x]);return y[v]}else return m}function i(g,x,m){return x in g?g[x]:m}function a(g){return g.map||g.specularMap||g.displacementMap||g.normalMap||g.bumpMap||g.roughnessMap||g.metalnessMap||g.alphaMap||g.emissiveMap||g.clearcoatMap||g.clearcoatNormalMap||g.clearcoatRoughnessMap||g.iridescenceMap||g.iridescenceThicknessMap||g.specularIntensityMap||g.specularColorMap||g.transmissionMap||g.thicknessMap||g.sheenColorMap||g.sheenRoughnessMap||null}function r(g,x,m,v){let b;if(h?b=a(g):b=g[x]&&g[x].isTexture?g[x]:null,b){const C=b.matrix.elements;let B=0;m[v+B++]=C[0],m[v+B++]=C[3],m[v+B++]=C[6],B++,m[v+B++]=C[1],m[v+B++]=C[4],m[v+B++]=C[7],B++}return 8}let o=0;const l=e.length*Jr,d=Math.ceil(Math.sqrt(l))||1,{threeCompatibilityTransforms:h,image:c,features:f}=this,p=Ur(t),y={};for(let g=0,x=p.length;g<x;g++)y[Gs(p[g])]=g;c.width!==d&&(this.dispose(),c.data=new Float32Array(d*d*4),c.width=d,c.height=d);const A=c.data;f.reset();for(let g=0,x=e.length;g<x;g++){const m=e[g];if(m.isFogVolumeMaterial){f.setUsed("FOG");for(let C=0;C<xt;C++)A[o+C]=0;A[o+0*4+0]=m.color.r,A[o+0*4+1]=m.color.g,A[o+0*4+2]=m.color.b,A[o+2*4+3]=i(m,"emissiveIntensity",0),A[o+3*4+0]=m.emissive.r,A[o+3*4+1]=m.emissive.g,A[o+3*4+2]=m.emissive.b,A[o+13*4+1]=m.density,A[o+13*4+3]=0,A[o+14*4+2]=4,o+=xt;continue}A[o++]=m.color.r,A[o++]=m.color.g,A[o++]=m.color.b,A[o++]=s(m,"map"),A[o++]=i(m,"metalness",0),A[o++]=s(m,"metalnessMap"),A[o++]=i(m,"roughness",0),A[o++]=s(m,"roughnessMap"),A[o++]=i(m,"ior",1.5),A[o++]=i(m,"transmission",0),A[o++]=s(m,"transmissionMap"),A[o++]=i(m,"emissiveIntensity",0),"emissive"in m?(A[o++]=m.emissive.r,A[o++]=m.emissive.g,A[o++]=m.emissive.b):(A[o++]=0,A[o++]=0,A[o++]=0),A[o++]=s(m,"emissiveMap"),A[o++]=s(m,"normalMap"),"normalScale"in m?(A[o++]=m.normalScale.x,A[o++]=m.normalScale.y):(A[o++]=1,A[o++]=1),A[o++]=i(m,"clearcoat",0),A[o++]=s(m,"clearcoatMap"),A[o++]=i(m,"clearcoatRoughness",0),A[o++]=s(m,"clearcoatRoughnessMap"),A[o++]=s(m,"clearcoatNormalMap"),"clearcoatNormalScale"in m?(A[o++]=m.clearcoatNormalScale.x,A[o++]=m.clearcoatNormalScale.y):(A[o++]=1,A[o++]=1),o++,A[o++]=i(m,"sheen",0),"sheenColor"in m?(A[o++]=m.sheenColor.r,A[o++]=m.sheenColor.g,A[o++]=m.sheenColor.b):(A[o++]=0,A[o++]=0,A[o++]=0),A[o++]=s(m,"sheenColorMap"),A[o++]=i(m,"sheenRoughness",0),A[o++]=s(m,"sheenRoughnessMap"),A[o++]=s(m,"iridescenceMap"),A[o++]=s(m,"iridescenceThicknessMap"),A[o++]=i(m,"iridescence",0),A[o++]=i(m,"iridescenceIOR",1.3);const v=i(m,"iridescenceThicknessRange",[100,400]);A[o++]=v[0],A[o++]=v[1],"specularColor"in m?(A[o++]=m.specularColor.r,A[o++]=m.specularColor.g,A[o++]=m.specularColor.b):(A[o++]=1,A[o++]=1,A[o++]=1),A[o++]=s(m,"specularColorMap"),A[o++]=i(m,"specularIntensity",1),A[o++]=s(m,"specularIntensityMap");const b=i(m,"thickness",0)===0&&i(m,"attenuationDistance",1/0)===1/0;if(A[o++]=Number(b),o++,"attenuationColor"in m?(A[o++]=m.attenuationColor.r,A[o++]=m.attenuationColor.g,A[o++]=m.attenuationColor.b):(A[o++]=1,A[o++]=1,A[o++]=1),A[o++]=i(m,"attenuationDistance",1/0),A[o++]=s(m,"alphaMap"),A[o++]=m.opacity,A[o++]=m.alphaTest,!b&&m.transmission>0)A[o++]=0;else switch(m.side){case wn:A[o++]=1;break;case Hs:A[o++]=-1;break;case Ln:A[o++]=0;break}o++,o++,A[o++]=Number(m.vertexColors)|Number(m.flatShading)<<1,A[o++]=Number(m.transparent),o+=r(m,"map",A,o),o+=r(m,"metalnessMap",A,o),o+=r(m,"roughnessMap",A,o),o+=r(m,"transmissionMap",A,o),o+=r(m,"emissiveMap",A,o),o+=r(m,"normalMap",A,o),o+=r(m,"clearcoatMap",A,o),o+=r(m,"clearcoatNormalMap",A,o),o+=r(m,"clearcoatRoughnessMap",A,o),o+=r(m,"sheenColorMap",A,o),o+=r(m,"sheenRoughnessMap",A,o),o+=r(m,"iridescenceMap",A,o),o+=r(m,"iridescenceThicknessMap",A,o),o+=r(m,"specularColorMap",A,o),o+=r(m,"specularIntensityMap",A,o)}this.needsUpdate=!0}}const Ji=new Z;class od extends xr{constructor(...e){super(...e);const t=this.texture;t.format=te,t.type=vs,t.minFilter=ie,t.magFilter=ie,t.wrapS=Xe,t.wrapT=Xe,t.setTextures=(...i)=>{this.setTextures(...i)};const s=new St(new ad);this.fsQuad=s}setTextures(e,t,s,i){const a=Ur(i),r=e.getRenderTarget(),o=e.toneMapping,l=e.getClearAlpha();e.getClearColor(Ji);const d=a.length||1;this.setSize(t,s,d),e.setClearColor(0,0),e.toneMapping=Ar;const h=this.fsQuad;for(let c=0,f=d;c<f;c++){const p=a[c];p&&(p.matrixAutoUpdate=!1,p.matrix.identity(),h.material.map=p,e.setRenderTarget(this,c),h.render(e),p.updateMatrix(),p.matrixAutoUpdate=!0)}h.material.map=null,e.setClearColor(Ji,l),e.setRenderTarget(r),e.toneMapping=o}dispose(){super.dispose(),this.fsQuad.dispose()}}class ad extends js{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}constructor(){super({uniforms:{map:{value:null}},vertexShader:`
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
			`})}}function Wt(n){const e=new Uint16Array(n.length);for(let t=0,s=n.length;t<s;++t)e[t]=Ue.toHalfFloat(n[t]);return e}function Wi(n,e,t=0,s=n.length){let i=t,a=t+s-1;for(;i<a;){const r=i+a>>1;n[r]<e?i=r+1:a=r}return i-t}function ld(n,e,t){return .2126*n+.7152*e+.0722*t}function cd(n,e=ce){const t=n.clone();t.source=new Va({...t.image});const{width:s,height:i,data:a}=t.image;let r=a;if(t.type!==e){e===ce?r=new Uint16Array(a.length):r=new Float32Array(a.length);let o;a instanceof Int8Array||a instanceof Int16Array||a instanceof Int32Array?o=2**(8*a.BYTES_PER_ELEMENT-1)-1:o=2**(8*a.BYTES_PER_ELEMENT)-1;for(let l=0,d=a.length;l<d;l++){let h=a[l];t.type===ce&&(h=Ue.fromHalfFloat(a[l])),t.type!==oe&&t.type!==ce&&(h/=o),e===ce&&(r[l]=Ue.toHalfFloat(h))}t.image.data=r,t.type=e}if(t.flipY){const o=r;r=r.slice();for(let l=0;l<i;l++)for(let d=0;d<s;d++){const h=i-l-1,c=4*(l*s+d),f=4*(h*s+d);r[f+0]=o[c+0],r[f+1]=o[c+1],r[f+2]=o[c+2],r[f+3]=o[c+3]}t.flipY=!1,t.image.data=r}return t}class ud{constructor(){const e=new ve(Wt(new Float32Array([1,1,1,1])),1,1);e.type=ce,e.format=te,e.minFilter=ie,e.magFilter=ie,e.wrapS=Xe,e.wrapT=Xe,e.generateMipmaps=!1,e.needsUpdate=!0;const t=new ve(Wt(new Float32Array([0,1])),1,2);t.type=ce,t.format=Bt,t.minFilter=ie,t.magFilter=ie,t.generateMipmaps=!1,t.needsUpdate=!0;const s=new ve(Wt(new Float32Array([0,0,1,1])),2,2);s.type=ce,s.format=Bt,s.minFilter=ie,s.magFilter=ie,s.generateMipmaps=!1,s.needsUpdate=!0,this.map=e,this.marginalWeights=t,this.conditionalWeights=s,this.totalSum=1}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(e){const t=cd(e);t.wrapS=Xe,t.wrapT=Qe;const{width:s,height:i,data:a}=t.image,r=new Float32Array(s*i),o=new Float32Array(s*i),l=new Float32Array(i),d=new Float32Array(i);let h=0,c=0;for(let g=0;g<i;g++){let x=0;for(let m=0;m<s;m++){const v=g*s+m,b=Ue.fromHalfFloat(a[4*v+0]),C=Ue.fromHalfFloat(a[4*v+1]),B=Ue.fromHalfFloat(a[4*v+2]),T=ld(b,C,B);x+=T,h+=T,r[v]=T,o[v]=x}if(x!==0)for(let m=g*s,v=g*s+s;m<v;m++)r[m]/=x,o[m]/=x;c+=x,l[g]=x,d[g]=c}if(c!==0)for(let g=0,x=l.length;g<x;g++)l[g]/=c,d[g]/=c;const f=new Uint16Array(i),p=new Uint16Array(s*i);for(let g=0;g<i;g++){const x=(g+1)/i,m=Wi(d,x);f[g]=Ue.toHalfFloat((m+.5)/i)}for(let g=0;g<i;g++)for(let x=0;x<s;x++){const m=g*s+x,v=(x+1)/s,b=Wi(o,v,g*s,s);p[m]=Ue.toHalfFloat((b+.5)/s)}this.dispose();const{marginalWeights:y,conditionalWeights:A}=this;y.image={width:i,height:1,data:f},y.needsUpdate=!0,A.image={width:s,height:i,data:p},A.needsUpdate=!0,this.totalSum=h,this.map=t}}class dd{constructor(){this.bokehSize=0,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=10,this.anamorphicRatio=1}updateFrom(e){e instanceof sd?(this.bokehSize=e.bokehSize,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio):(this.bokehSize=0,this.apertureRotation=0,this.apertureBlades=0,this.focusDistance=10,this.anamorphicRatio=1)}}const fs=6,fd=0,hd=1,pd=2,md=3,gd=4;class xd{constructor(){const e=new ve(new Float32Array(4),1,1);e.format=te,e.type=oe,e.wrapS=Qe,e.wrapT=Qe,e.generateMipmaps=!1,e.minFilter=ee,e.magFilter=ee,this.tex=e,this.count=0}updateFrom(e,t=[]){const s=this.tex,i=Math.max(e.length*fs,1),a=Math.ceil(Math.sqrt(i));s.image.width!==a&&(s.dispose(),s.image.data=new Float32Array(a*a*4),s.image.width=a,s.image.height=a);const r=s.image.data,o=new _,l=new _,d=new $,h=new Pn,c=new _,f=new _,p=new _(0,1,0);for(let y=0,A=e.length;y<A;y++){const g=e[y],x=y*fs*4;let m=0;for(let b=0;b<fs*4;b++)r[x+b]=0;g.getWorldPosition(l),r[x+m++]=l.x,r[x+m++]=l.y,r[x+m++]=l.z;let v=fd;if(g.isRectAreaLight&&g.isCircular?v=hd:g.isSpotLight?v=pd:g.isDirectionalLight?v=md:g.isPointLight&&(v=gd),r[x+m++]=v,r[x+m++]=g.color.r,r[x+m++]=g.color.g,r[x+m++]=g.color.b,r[x+m++]=g.intensity,g.getWorldQuaternion(h),g.isRectAreaLight)o.set(g.width,0,0).applyQuaternion(h),r[x+m++]=o.x,r[x+m++]=o.y,r[x+m++]=o.z,m++,l.set(0,g.height,0).applyQuaternion(h),r[x+m++]=l.x,r[x+m++]=l.y,r[x+m++]=l.z,r[x+m++]=o.cross(l).length()*(g.isCircular?Math.PI/4:1);else if(g.isSpotLight){const b=g.radius||0;c.setFromMatrixPosition(g.matrixWorld),f.setFromMatrixPosition(g.target.matrixWorld),d.lookAt(c,f,p),h.setFromRotationMatrix(d),o.set(1,0,0).applyQuaternion(h),r[x+m++]=o.x,r[x+m++]=o.y,r[x+m++]=o.z,m++,l.set(0,1,0).applyQuaternion(h),r[x+m++]=l.x,r[x+m++]=l.y,r[x+m++]=l.z,r[x+m++]=Math.PI*b*b,r[x+m++]=b,r[x+m++]=g.decay,r[x+m++]=g.distance,r[x+m++]=Math.cos(g.angle),r[x+m++]=Math.cos(g.angle*(1-g.penumbra)),r[x+m++]=g.iesTexture?t.indexOf(g.iesTexture):-1}else if(g.isPointLight){const b=o.setFromMatrixPosition(g.matrixWorld);r[x+m++]=b.x,r[x+m++]=b.y,r[x+m++]=b.z,m++,m+=4,m+=1,r[x+m++]=g.decay,r[x+m++]=g.distance}else if(g.isDirectionalLight){const b=o.setFromMatrixPosition(g.matrixWorld),C=l.setFromMatrixPosition(g.target.matrixWorld);f.subVectors(b,C).normalize(),r[x+m++]=f.x,r[x+m++]=f.y,r[x+m++]=f.z}}s.needsUpdate=!0,this.count=e.length}}function Ki(n){const e=this,t=n.split(`
`);let s=0,i;e.verAngles=[],e.horAngles=[],e.candelaValues=[],e.tiltData={},e.tiltData.angles=[],e.tiltData.mulFactors=[];function a(c){return c=c.trim(),c=c.replace(/,/g," "),c=c.replace(/\s\s+/g," "),c.split(" ")}function r(c,f){for(;;){const p=t[s++],y=a(p);for(let A=0;A<y.length;++A)f.push(Number(y[A]));if(f.length===c)break}}function o(){let c=t[s++],f=a(c);e.tiltData.lampToLumGeometry=Number(f[0]),c=t[s++],f=a(c),e.tiltData.numAngles=Number(f[0]),r(e.tiltData.numAngles,e.tiltData.angles),r(e.tiltData.numAngles,e.tiltData.mulFactors)}function l(){const c=[];r(10,c),e.count=Number(c[0]),e.lumens=Number(c[1]),e.multiplier=Number(c[2]),e.numVerAngles=Number(c[3]),e.numHorAngles=Number(c[4]),e.gonioType=Number(c[5]),e.units=Number(c[6]),e.width=Number(c[7]),e.length=Number(c[8]),e.height=Number(c[9])}function d(){const c=[];r(3,c),e.ballFactor=Number(c[0]),e.blpFactor=Number(c[1]),e.inputWatts=Number(c[2])}for(;i=t[s++],!i.includes("TILT"););i.includes("NONE")||i.includes("INCLUDE")&&o(),l(),d();for(let c=0;c<e.numHorAngles;++c)e.candelaValues.push([]);r(e.numVerAngles,e.verAngles),r(e.numHorAngles,e.horAngles);for(let c=0;c<e.numHorAngles;++c)r(e.numVerAngles,e.candelaValues[c]);for(let c=0;c<e.numHorAngles;++c)for(let f=0;f<e.numVerAngles;++f)e.candelaValues[c][f]*=e.candelaValues[c][f]*e.multiplier*e.ballFactor*e.blpFactor;let h=-1;for(let c=0;c<e.numHorAngles;++c)for(let f=0;f<e.numVerAngles;++f){const p=e.candelaValues[c][f];h=h<p?p:h}if(h>0)for(let c=0;c<e.numHorAngles;++c)for(let f=0;f<e.numVerAngles;++f)e.candelaValues[c][f]/=h}class Ad extends Os{_getIESValues(e){const a=new Float32Array(64800);function r(d,h){let c=0,f=0,p=0,y=0,A=0,g=0;for(let S=0;S<e.numHorAngles-1;++S)if(h<e.horAngles[S+1]||S==e.numHorAngles-2){f=S,p=e.horAngles[S],y=e.horAngles[S+1];break}for(let S=0;S<e.numVerAngles-1;++S)if(d<e.verAngles[S+1]||S==e.numVerAngles-2){c=S,A=e.verAngles[S],g=e.verAngles[S+1];break}const x=y-p,m=g-A;if(m===0)return 0;const v=x===0?0:(h-p)/x,b=(d-A)/m,C=x===0?f:f+1,B=Nt.lerp(e.candelaValues[f][c],e.candelaValues[C][c],v),T=Nt.lerp(e.candelaValues[f][c+1],e.candelaValues[C][c+1],v);return Nt.lerp(B,T,b)}const o=e.horAngles[0],l=e.horAngles[e.numHorAngles-1];for(let d=0;d<64800;++d){let h=d%360;const c=Math.floor(d/360);l-o!==0&&(h<o||h>=l)&&(h%=l*2,h>l&&(h=l*2-h)),a[d]=r(c,h)}return a}load(e,t,s,i){const a=new Kt(this.manager);a.setResponseType("text"),a.setCrossOrigin(this.crossOrigin),a.setWithCredentials(this.withCredentials),a.setPath(this.path),a.setRequestHeader(this.requestHeader);const r=new ve(null,360,180,Bt,ce);return r.minFilter=ie,r.magFilter=ie,a.load(e,o=>{const l=new Ki(o);r.image.data=Wt(this._getIESValues(l)),r.needsUpdate=!0,t!==void 0&&t(r)},s,i),r}parse(e){const t=new Ki(e),s=new ve(null,360,180,Bt,ce);return s.minFilter=ie,s.magFilter=ie,s.image.data=Wt(this._getIESValues(t)),s.needsUpdate=!0,s}}const Xi=new Z;class yd extends xr{constructor(...e){super(...e);const t=this.texture;t.format=te,t.type=ce,t.minFilter=ie,t.magFilter=ie,t.wrapS=Qe,t.wrapT=Qe,t.generateMipmaps=!1,t.updateFrom=(...i)=>{this.updateFrom(...i)};const s=new St(new Je);this.fsQuad=s,this.iesLoader=new Ad}async updateFrom(e,t){const s=e.getRenderTarget(),i=e.toneMapping,a=e.getClearAlpha();e.getClearColor(Xi);const r=t.length||1;this.setSize(360,180,r),e.setClearColor(0,0),e.toneMapping=Ar;const o=this.fsQuad;for(let l=0,d=r;l<d;l++){const h=t[l];h&&(h.matrixAutoUpdate=!1,h.matrix.identity(),o.material.map=h,o.material.transparent=!0,e.setRenderTarget(this,l),o.render(e),h.updateMatrix(),h.matrixAutoUpdate=!0)}o.material.map=null,e.setClearColor(Xi,a),e.setRenderTarget(s),e.toneMapping=i,o.dispose()}dispose(){super.dispose(),this.fsQuad.dispose()}}const vd=`

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
`;function Vi(n,e,t,s,i){if(e>s)throw new Error;const a=n.length/e,r=n.constructor.BYTES_PER_ELEMENT*8;let o=1;switch(n.constructor){case Uint8Array:case Uint16Array:case Uint32Array:o=2**r-1;break;case Int8Array:case Int16Array:case Int32Array:o=2**(r-1)-1;break}for(let l=0;l<a;l++){const d=4*l,h=e*l;for(let c=0;c<s;c++)t[i+d+c]=e>=c+1?n[h+c]/o:0}}class bd extends Qa{constructor(){super(),this._textures=[],this.type=oe,this.format=te,this.internalFormat="RGBA32F"}updateAttribute(e,t){const s=this._textures[e];s.updateFrom(t);const i=s.image,a=this.image;if(i.width!==a.width||i.height!==a.height)throw new Error("FloatAttributeTextureArray: Attribute must be the same dimensions when updating single layer.");const{width:r,height:o,data:l}=a,h=r*o*4*e;let c=t.itemSize;c===3&&(c=4),Vi(s.image.data,c,l,4,h),this.dispose(),this.needsUpdate=!0}setAttributes(e){const t=e[0].count,s=e.length;for(let c=0,f=s;c<f;c++)if(e[c].count!==t)throw new Error("FloatAttributeTextureArray: All attributes must have the same item count.");const i=this._textures;for(;i.length<s;){const c=new Or;i.push(c)}for(;i.length>s;)i.pop();for(let c=0,f=s;c<f;c++)i[c].updateFrom(e[c]);const r=i[0].image,o=this.image;(r.width!==o.width||r.height!==o.height||r.depth!==s)&&(o.width=r.width,o.height=r.height,o.depth=s,o.data=new Float32Array(o.width*o.height*o.depth*4));const{data:l,width:d,height:h}=o;for(let c=0,f=s;c<f;c++){const p=i[c],A=d*h*4*c;let g=e[c].itemSize;g===3&&(g=4),Vi(p.image.data,g,l,4,A)}this.dispose(),this.needsUpdate=!0}}class Cd extends bd{updateNormalAttribute(e){this.updateAttribute(0,e)}updateTangentAttribute(e){this.updateAttribute(1,e)}updateUvAttribute(e){this.updateAttribute(2,e)}updateColorAttribute(e){this.updateAttribute(3,e)}updateFrom(e,t,s,i){this.setAttributes([e,t,s,i])}}const Bd=`

	struct PhysicalCamera {

		float focusDistance;
		float anamorphicRatio;
		float bokehSize;
		int apertureBlades;
		float apertureRotation;

	};

`,Td=`

	struct EquirectHdrInfo {

		sampler2D marginalWeights;
		sampler2D conditionalWeights;
		sampler2D map;

		float totalSum;

	};

`,Sd=`

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

`,Md=`

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

`,Fd=`

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

`,wd=`

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

`,Dd=`

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

`,Ed=`

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

`,Rd=`

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

	${wd}
	${Dd}
	${Ed}

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

`,Id=`

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

`,_d=`

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

`,Pd=`

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

`,Ld=`

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


`,Gd=`

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

`,jd=`

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

`,Hd=`

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

`,kd=`

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

`,Qi=`

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
`,Od=`

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

`,zd=`

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

`,Nd=`

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

`,Ud=`

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

`,Jd=`

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
`,Wd=`

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

`,Kd=`

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

`;function Xd(n){for(let e=n.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1)),s=n[e];n[e]=n[t],n[t]=s}return n}class Vd{constructor(e,t){const s=e**t,i=new Uint16Array(s);let a=s;for(let r=0;r<s;r++)i[r]=r;this.samples=new Float32Array(t),this.strataCount=e,this.restart=function(){a=0},this.next=function(){const{samples:r}=this;a>=i.length&&(Xd(i),this.restart());let o=i[a++];for(let l=0;l<t;l++)r[l]=(o%e+Math.random())/e,o=Math.floor(o/e);return r}}}class Qd{constructor(e,t){let s=0;for(const o of t)s+=o;const i=new Float32Array(s),a=[];let r=0;for(const o of t){const l=new Vd(e,o);l.samples=new Float32Array(i.buffer,r,l.samples.length),r+=l.samples.length*4,a.push(l)}this.samples=i,this.strataCount=e,this.next=function(){for(const o of a)o.next();return i},this.restart=function(){for(const o of a)o.restart()}}}class Yd extends ve{constructor(e=1,t=1,s=8){super(new Float32Array(1),1,1,te,oe),this.minFilter=ee,this.magFilter=ee,this.strata=s,this.sampler=null,this.init(e,t,s)}init(e,t,s=this.strata){const{image:i}=this;if(i.width===t&&i.height===e)return;const a=new Array(e*t).fill(4),r=new Qd(s,a);i.width=t,i.height=e,i.data=r.samples,this.sampler=r,this.dispose(),this.next()}next(){this.sampler.next(),this.needsUpdate=!0}}function qd(n,e=Math.random){for(let t=n.length-1;t>0;t--){const s=~~((e()-1e-6)*t),i=n[t];n[t]=n[s],n[s]=i}}function Zd(n,e){n.fill(0);for(let t=0;t<e;t++)n[t]=1}class Yi{constructor(e){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(e),this.setSigma(1.5)}findVoid(){const{score:e,binaryPattern:t}=this;let s=1/0,i=-1;for(let a=0,r=t.length;a<r;a++){if(t[a]!==0)continue;const o=e[a];o<s&&(s=o,i=a)}return i}findCluster(){const{score:e,binaryPattern:t}=this;let s=-1/0,i=-1;for(let a=0,r=t.length;a<r;a++){if(t[a]!==1)continue;const o=e[a];o>s&&(s=o,i=a)}return i}setSigma(e){if(e===this.sigma)return;const t=~~(Math.sqrt(10*2*e**2)+1),s=2*t+1,i=new Float32Array(s*s),a=e*e;for(let r=-t;r<=t;r++)for(let o=-t;o<=t;o++){const l=(t+o)*s+r+t,d=r*r+o*o;i[l]=Math.E**(-d/(2*a))}this.lookupTable=i,this.sigma=e,this.radius=t}resize(e){this.size!==e&&(this.size=e,this.score=new Float32Array(e*e),this.binaryPattern=new Uint8Array(e*e))}invert(){const{binaryPattern:e,score:t,size:s}=this;t.fill(0);for(let i=0,a=e.length;i<a;i++)if(e[i]===0){const r=~~(i/s),o=i-r*s;this.updateScore(o,r,1),e[i]=1}else e[i]=0}updateScore(e,t,s){const{size:i,score:a,lookupTable:r}=this,o=this.radius,l=2*o+1;for(let d=-o;d<=o;d++)for(let h=-o;h<=o;h++){const c=(o+h)*l+d+o,f=r[c];let p=e+d;p=p<0?i+p:p%i;let y=t+h;y=y<0?i+y:y%i;const A=y*i+p;a[A]+=s*f}}addPointIndex(e){this.binaryPattern[e]=1;const t=this.size,s=~~(e/t),i=e-s*t;this.updateScore(i,s,1),this.count++}removePointIndex(e){this.binaryPattern[e]=0;const t=this.size,s=~~(e/t),i=e-s*t;this.updateScore(i,s,-1),this.count--}copy(e){this.resize(e.size),this.score.set(e.score),this.binaryPattern.set(e.binaryPattern),this.setSigma(e.sigma),this.count=e.count}}class $d{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new Yi(1),this.savedSamples=new Yi(1)}generate(){const{samples:e,savedSamples:t,sigma:s,majorityPointsRatio:i,size:a}=this;e.resize(a),e.setSigma(s);const r=Math.floor(a*a*i),o=e.binaryPattern;Zd(o,r),qd(o,this.random);for(let c=0,f=o.length;c<f;c++)o[c]===1&&e.addPointIndex(c);for(;;){const c=e.findCluster();e.removePointIndex(c);const f=e.findVoid();if(c===f){e.addPointIndex(c);break}e.addPointIndex(f)}const l=new Uint32Array(a*a);t.copy(e);let d;for(d=e.count-1;d>=0;){const c=e.findCluster();e.removePointIndex(c),l[c]=d,d--}const h=a*a;for(d=t.count;d<h/2;){const c=t.findVoid();t.addPointIndex(c),l[c]=d,d++}for(t.invert();d<h;){const c=t.findCluster();t.removePointIndex(c),l[c]=d,d++}return{data:l,maxValue:h}}}function ef(n){return n>=3?4:n}function tf(n){switch(n){case 1:return Bt;case 2:return gr;default:return te}}class nf extends ve{constructor(e=64,t=1){super(new Float32Array(4),1,1,te,oe),this.minFilter=ee,this.magFilter=ee,this.size=e,this.channels=t,this.update()}update(){const e=this.channels,t=this.size,s=new $d;s.channels=e,s.size=t;const i=ef(e),a=tf(i);(this.image.width!==t||a!==this.format)&&(this.image.width=t,this.image.height=t,this.image.data=new Float32Array(t**2*i),this.format=a,this.dispose());const r=this.image.data;for(let o=0,l=e;o<l;o++){const d=s.generate(),h=d.data,c=d.maxValue;for(let f=0,p=h.length;f<p;f++){const y=h[f]/c;r[f*i+o]=y}}this.needsUpdate=!0}}class sf extends ei{onBeforeRender(){this.setDefine("FEATURE_DOF",this.physicalCamera.bokehSize===0?0:1),this.setDefine("FEATURE_BACKGROUND_MAP",this.backgroundMap?1:0),this.setDefine("FEATURE_FOG",this.materials.features.isUsed("FOG")?1:0)}constructor(e){super({transparent:!0,depthWrite:!1,defines:{FEATURE_MIS:1,FEATURE_RUSSIAN_ROULETTE:1,FEATURE_DOF:1,FEATURE_BACKGROUND_MAP:0,FEATURE_FOG:1,RANDOM_TYPE:2,CAMERA_TYPE:0,DEBUG_MODE:0,ATTR_NORMAL:0,ATTR_TANGENT:1,ATTR_UV:2,ATTR_COLOR:3},uniforms:{resolution:{value:new Ce},bounces:{value:10},transmissiveBounces:{value:10},physicalCamera:{value:new dd},bvh:{value:new Iu},attributesArray:{value:new Cd},materialIndexAttribute:{value:new kr},materials:{value:new rd},textures:{value:new od().texture},lights:{value:new xd},iesProfiles:{value:new yd().texture},cameraWorldMatrix:{value:new $},invProjectionMatrix:{value:new $},backgroundBlur:{value:0},environmentIntensity:{value:1},environmentRotation:{value:new $},envMapInfo:{value:new ud},backgroundMap:{value:null},seed:{value:0},opacity:{value:1},filterGlossyFactor:{value:0},backgroundAlpha:{value:1},sobolTexture:{value:null},stratifiedTexture:{value:new Yd},stratifiedOffsetTexture:{value:new nf(64,1)}},vertexShader:`

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
				${Ou}
				${Nu}
				${zu}

				// uniform structs
				${Bd}
				${Sd}
				${Td}
				${Md}

				// random
				#if RANDOM_TYPE == 2 	// Stratified List

					${Kd}

				#elif RANDOM_TYPE == 1 	// Sobol

					${Qi}
					${Nr}
					${Xu}

					#define rand(v) sobol(v)
					#define rand2(v) sobol2(v)
					#define rand3(v) sobol3(v)
					#define rand4(v) sobol4(v)

				#else 					// PCG

					${Qi}

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
				${kd}
				${Hd}
				${vd}
				${jd}
				${Gd}

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
				${Fd}
				${Ld}
				${Rd}
				${_d}
				${Pd}
				${Id}

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

				${Od}
				${zd}
				${Ud}
				${Nd}
				${Wd}
				${Jd}

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

			`}),this.setValues(e)}}const se=.072;function Vt(n){switch(n){case"sphere":return new Za(se*.52,8,6);case"star":{const e=se*.64,t=se*.25,s=se*.42,i=new Ya;for(let r=0;r<10;r++){const o=r*Math.PI*2/10-Math.PI/2,l=r%2===0?e:t;r===0?i.moveTo(Math.cos(o)*l,Math.sin(o)*l):i.lineTo(Math.cos(o)*l,Math.sin(o)*l)}i.closePath();const a=new qa(i,{depth:s,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelSegments:1});return a.translate(0,0,-s/2),a}default:return new ks(se,se,se)}}function Qt({material:n,color:e}){return n==="original"?u.jsx("meshStandardMaterial",{color:e,roughness:.65,metalness:.05}):n==="fluid"?u.jsx("meshPhysicalMaterial",{color:e,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5,envMapIntensity:1}):n==="metal"?u.jsx("meshStandardMaterial",{color:e,roughness:.06,metalness:.95,envMapIntensity:2}):n==="emissive"?u.jsx("meshStandardMaterial",{color:e,emissive:e,emissiveIntensity:2.2,roughness:.55,metalness:0}):u.jsx("meshStandardMaterial",{color:e,roughness:.65,metalness:.05})}const rf={x:1,y:1,z:1},of={deformation:"none",fluidDistort:.35,fluidSpeed:1.5},bn="0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)";function af(n,e){const t=new Z(e);switch(n){case"fluid":return new me({color:t,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5,envMapIntensity:1});case"metal":return new Ie({color:t,roughness:.06,metalness:.95,envMapIntensity:2});case"emissive":return new Ie({color:t,emissive:t,emissiveIntensity:2.2,roughness:.55});default:return new Ie({color:t,roughness:.65,metalness:.05})}}const bt=5;function lf(n,e,t,s,i,a){const r=new zs,o=t*.4,l=s*.4,d=i*.4;for(let h=0;h<e;h++)r.position.set((Math.random()-.5)*2*o,(Math.random()-.5)*2*l,(Math.random()-.5)*2*d),r.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),r.scale.set(a.x*bt,a.y*bt,a.z*bt),r.updateMatrix(),n.setMatrixAt(h,r.matrix);n.instanceMatrix.needsUpdate=!0}function cf({url:n,count:e,width:t,height:s,depth:i,markSize:a,markMaterial:r,color:o,seed:l}){const{scene:d}=Mt(n),{normScale:h,center:c}=E.useMemo(()=>{d.updateMatrixWorld(!0);const C=new ae().setFromObject(d),B=new _,T=new _;C.getSize(B),C.getCenter(T);const F=Math.max(B.x,B.y,B.z,.001),S=n.includes("drum")?.63:n.includes("clarinet")?1.2:n.includes("harp")?.825:1;return{normScale:se/F*S,center:T}},[d,n]),f=E.useMemo(()=>{const C=t*.4,B=s*.4,T=i*.4;return Array.from({length:e},()=>({position:[(Math.random()-.5)*2*C,(Math.random()-.5)*2*B,(Math.random()-.5)*2*T],rotation:[Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2]}))},[e,t,s,i,l]),p=E.useMemo(()=>f.map(()=>d.clone(!0)),[d,f]);E.useEffect(()=>()=>{p.forEach(C=>C.traverse(B=>{B instanceof it&&B.geometry.dispose()}))},[p]);const y=E.useMemo(()=>r!=="original"?af(r,o):null,[r,o]);E.useEffect(()=>()=>{y==null||y.dispose()},[y]),E.useEffect(()=>{p.forEach(C=>{C.traverse(B=>{!(B instanceof it)||!y||(B.material=y)})})},[y,p]);const A=h*a.x*bt,g=h*a.y*bt,x=h*a.z*bt,m=-c.x*A,v=-c.y*g,b=-c.z*x;return u.jsx(u.Fragment,{children:p.map((C,B)=>u.jsx("group",{position:f[B].position,rotation:f[B].rotation,children:u.jsx("primitive",{object:C,position:[m,v,b],scale:[A,g,x]})},B))})}function uf({width:n,depth:e,height:t,color:s,position:i,particleCount:a,markShape:r,markMaterial:o,markSize:l=rf,structural:d=of,customModelUrl:h,labelShow:c,labelData:f,seed:p=0}){const y=E.useRef(null),A=E.useMemo(()=>Vt(r),[r]),g=E.useMemo(()=>{const m=new ks(n,t,e),v=new $a(m);return m.dispose(),v},[n,t,e]);E.useEffect(()=>{const m=y.current;m&&lf(m,a,n,t,e,l)},[a,n,e,t,r,l.x,l.y,l.z,p]),E.useEffect(()=>()=>{A.dispose()},[A]),E.useEffect(()=>()=>{g.dispose()},[g]);const x=r==="custom"&&!!h;return u.jsxs("group",{position:i,children:[u.jsx("lineSegments",{geometry:g,children:u.jsx("lineBasicMaterial",{color:"#666666",transparent:!0,opacity:.7})}),x?u.jsx(E.Suspense,{fallback:null,children:u.jsx(cf,{url:h,count:Math.max(5,a),width:n,height:t,depth:e,markSize:l,markMaterial:o,color:s,seed:p})}):u.jsx("instancedMesh",{ref:y,args:[A,void 0,a],children:u.jsx(Qt,{material:o,structural:d,color:s})},`${a}-${r}`),c&&u.jsxs(u.Fragment,{children:[f.top&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[0,t/2+.8,0],userData:{isLabel:!0,labelText:f.top,labelPos:"top"}}),u.jsx(fe,{position:[0,t/2+.8,0],center:!0,style:{pointerEvents:"none"},children:u.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:bn,whiteSpace:"nowrap",userSelect:"none"},children:f.top})})]}),f.bottom&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[0,-(t/2+.8),0],userData:{isLabel:!0,labelText:f.bottom,labelPos:"bottom"}}),u.jsx(fe,{position:[0,-(t/2+.8),0],center:!0,style:{pointerEvents:"none"},children:u.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:bn,whiteSpace:"nowrap",userSelect:"none"},children:f.bottom})})]}),f.left&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[-(n/2+.2),0,0],userData:{isLabel:!0,labelText:f.left,labelPos:"left"}}),u.jsx(fe,{position:[-(n/2+.2),0,0],style:{pointerEvents:"none"},children:u.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:bn,whiteSpace:"nowrap",userSelect:"none",display:"block",textAlign:"right",transform:"translate(-100%, -50%)"},children:f.left})})]}),f.right&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[n/2+.2,0,0],userData:{isLabel:!0,labelText:f.right,labelPos:"right"}}),u.jsx(fe,{position:[n/2+.2,0,0],style:{pointerEvents:"none"},children:u.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:bn,whiteSpace:"nowrap",userSelect:"none",display:"block",transform:"translateY(-50%)"},children:f.right})})]})]})]})}function df(n,e){const t=new Z(e);switch(n){case"fluid":return new me({color:t,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5});case"metal":return new Ie({color:t,roughness:.06,metalness:.95});case"emissive":return new Ie({color:t,emissive:t,emissiveIntensity:2.2,roughness:.55});default:return new Ie({color:t,roughness:.65,metalness:.05})}}function ff({url:n,markMaterial:e,markSize:t,color:s}){const{scene:i}=Mt(n),{clone:a,sx:r,sy:o,sz:l,ox:d,oy:h,oz:c}=E.useMemo(()=>{i.updateMatrixWorld(!0);const p=new ae().setFromObject(i),y=new _,A=new _;p.getSize(y),p.getCenter(A);const g=Math.max(y.x,y.y,y.z,.001),x=se/g,m=x*t.x,v=x*t.y,b=x*t.z;return{clone:i.clone(!0),sx:m,sy:v,sz:b,ox:-A.x*m,oy:-A.y*v,oz:-A.z*b}},[i,t.x,t.y,t.z]),f=E.useMemo(()=>e!=="original"?df(e,s):null,[e,s]);return E.useEffect(()=>()=>{f==null||f.dispose()},[f]),E.useEffect(()=>{f&&a.traverse(p=>{p instanceof it&&(p.material=f)})},[f,a]),u.jsx("primitive",{object:a,position:[d,h,c],scale:[r,o,l]})}function hf({position:n,count:e,markShape:t,markMaterial:s,markSize:i,color:a,structural:r,customModelUrl:o}){const l=E.useMemo(()=>Vt(t),[t]);E.useEffect(()=>()=>{l.dispose()},[l]);const d=Math.sqrt(e)*se*Math.max(i.x,i.y,i.z)*2.2,h=E.useMemo(()=>Array.from({length:e},(f,p)=>({x:(Math.random()-.5)*d,y:se*2+p*se*1.2+Math.random()*se*.5,z:(Math.random()-.5)*d,rx:Math.random()*Math.PI*2,ry:Math.random()*Math.PI*2,rz:Math.random()*Math.PI*2})),[e,d]),c=-se*.7;return u.jsxs("group",{position:n,children:[u.jsx(Dn,{type:"fixed",children:u.jsx(yr,{args:[3,.05,3],position:[0,c,0]})}),h.map((f,p)=>u.jsx(Dn,{position:[f.x,f.y,f.z],rotation:[f.rx,f.ry,f.rz],colliders:"hull",restitution:.1,friction:.8,linearDamping:.4,angularDamping:.5,children:t==="custom"&&o?u.jsx(E.Suspense,{fallback:null,children:u.jsx(ff,{url:o,markMaterial:s,markSize:i,color:a})}):u.jsx("mesh",{geometry:l,scale:[i.x,i.y,i.z],children:u.jsx(Qt,{material:s,structural:r,color:a})})},p))]})}const ti=E.createContext({colorMode:"distinct",colorGradient:{from:"#EE6655",to:"#4488EE"}});function pf(n,e,t){return"#"+new Z(n).lerp(new Z(e),Math.max(0,Math.min(1,t))).getHexString()}function Wr(n,e,t,s,i,a){var r,o;if(e.markColor===null)return s;if(i==="continuous"){const l=t.map(p=>p.percentage),d=Math.min(...l),h=Math.max(...l),c=((r=t[n%Math.max(1,t.length)])==null?void 0:r.percentage)??0,f=h>d?(c-d)/(h-d):.5;return pf(a.from,a.to,f)}return((o=t[n%Math.max(1,t.length)])==null?void 0:o.color)??s}function mf(n){return 2*Math.atan(12/n)*180/Math.PI}const Kr={1:[0,.5,18],2:[0,2,26],3:[0,4,64]};function gf({level:n,fov:e,focalLength:t}){const{camera:s,controls:i}=br(),a=E.useRef(n),r=E.useRef(t);return E.useEffect(()=>{var o,l,d;if(s instanceof Ns){if(a.current!==n){const[h,c,f]=Kr[n];s.position.set(h,c,f),s.lookAt(0,0,0);const p=i;(o=p==null?void 0:p.target)==null||o.set(0,0,0),(l=p==null?void 0:p.update)==null||l.call(p),a.current=n}if(r.current!==t&&r.current>0){const h=t/r.current,c=i;c!=null&&c.spherical?(c.spherical.radius*=h,(d=c.update)==null||d.call(c)):s.position.multiplyScalar(h)}r.current=t,s.fov=e,s.updateProjectionMatrix()}},[s,i,n,e,t]),null}const zn=14;function ni({url:n,material:e,color:t,sz:s}){const{scene:i}=Mt(n),a=E.useMemo(()=>{const r=i.clone(!0);r.position.set(0,0,0),r.rotation.set(0,0,0),r.scale.set(1,1,1),r.updateMatrixWorld(!0);const o=n.includes("drum")?.63:n.includes("clarinet")?1.2:n.includes("harp")?.825:1,l=new ae().setFromObject(r);if(!l.isEmpty()){const d=new _;l.getSize(d);const h=Math.max(d.x,d.y,d.z,.001),c=se/h*o,f=new _;l.getCenter(f),r.scale.setScalar(c),r.position.set(-f.x*c,-f.y*c,-f.z*c)}if(e!=="original"){const d=e==="fluid"?new me({color:new Z(t),transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5}):new Ie({color:new Z(t),roughness:e==="metal"?.06:e==="emissive"?.55:.65,metalness:e==="metal"?.95:0,emissive:e==="emissive"?new Z(t):new Z(0,0,0),emissiveIntensity:e==="emissive"?2.2:0});r.traverse(h=>{h instanceof it&&(h.material=d)})}return r},[i,n,e,t]);return u.jsx("group",{scale:s,children:u.jsx("primitive",{object:a})})}const At=zn*se;function si(n,e,t){const s=e[t%Math.max(1,e.length)],i={},a=Object.entries(n);for(const[r,o]of a)o&&(o==="weight"&&(i[r]=`${(s==null?void 0:s.percentage)??"?"}`),o==="garbageType"&&(i[r]=(s==null?void 0:s.name)??"?"),o==="count"&&(i[r]=String(e.length)));return i}const xf="0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)";function Ke({pos:n,text:e}){const t=n==="top"?"translate(-50%, -100%)":n==="bottom"?"translate(-50%, 0)":n==="left"?"translate(-100%, -50%)":"translateY(-50%)";return u.jsx("span",{"data-phys-label":"",style:{display:"block",fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:xf,whiteSpace:"nowrap",userSelect:"none",transform:t},children:e})}function Ct(n,e,t){var i;const s=Math.max(...t.map(a=>a.percentage),1);return n==="weight"?.2+1.8*((((i=t[e%Math.max(1,t.length)])==null?void 0:i.percentage)??s)/s):n==="count"?Math.min(2,t.length/5):1}function Xr(n,e,t){return n==="center"?[0,0,0]:e==="X"?[0,n==="start"?-t:t,0]:[n==="start"?t:-t,0,0]}function Af({config:n,layers:e,bindings:t,markLabelConfig:s}){const i=E.useMemo(()=>Vt(n.shape),[n.shape]);E.useEffect(()=>()=>{i.dispose()},[i]);const{colorMode:a,colorGradient:r}=E.useContext(ti),o=Math.PI/180,l=zn,d=Wr(0,t,e,n.color,a,r),h=n.scale??1,c={x:n.size.x*h*(t.markSizeX?Ct(t.markSizeX,0,e):1),y:n.size.y*h*(t.markSizeY?Ct(t.markSizeY,0,e):1),z:n.size.z*h*(t.markSizeZ?Ct(t.markSizeZ,0,e):1)},f=l*c.y*.036+.8,p=l*c.x*.036+.8,y=si(s.slots,e,0),A=[n.orientation.x*o,n.orientation.y*o,n.orientation.z*o];return u.jsxs("group",{position:[n.position.x,n.position.y,n.position.z],rotation:A,children:[n.shape==="custom"&&n.customModelUrl?u.jsx(E.Suspense,{fallback:null,children:u.jsx(ni,{url:n.customModelUrl,material:n.material,color:d,sz:[l*c.x,l*c.y,l*c.z]})}):u.jsx("mesh",{geometry:i,scale:[l*c.x,l*c.y,l*c.z],children:u.jsx(Qt,{material:n.material,structural:n.structural,color:d})}),s.show&&u.jsxs(u.Fragment,{children:[y.top&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[0,f,0],userData:{isLabel:!0,labelText:y.top,labelPos:"top"}}),u.jsx(fe,{zIndexRange:[1,0],position:[0,f,0],style:{pointerEvents:"none"},children:u.jsx(Ke,{pos:"top",text:y.top})})]}),y.bottom&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[0,-f,0],userData:{isLabel:!0,labelText:y.bottom,labelPos:"bottom"}}),u.jsx(fe,{zIndexRange:[1,0],position:[0,-f,0],style:{pointerEvents:"none"},children:u.jsx(Ke,{pos:"bottom",text:y.bottom})})]}),y.left&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[-p,0,0],userData:{isLabel:!0,labelText:y.left,labelPos:"left"}}),u.jsx(fe,{zIndexRange:[1,0],position:[-p,0,0],style:{pointerEvents:"none"},children:u.jsx(Ke,{pos:"left",text:y.left})})]}),y.right&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[p,0,0],userData:{isLabel:!0,labelText:y.right,labelPos:"right"}}),u.jsx(fe,{zIndexRange:[1,0],position:[p,0,0],style:{pointerEvents:"none"},children:u.jsx(Ke,{pos:"right",text:y.right})})]})]})]})}function yf({shape:n,customModelUrl:e,customModelHasMat:t,material:s,structural:i,color:a,scale:r}){const o=E.useMemo(()=>Vt(n),[n]);return E.useEffect(()=>()=>{o.dispose()},[o]),n==="custom"&&e?u.jsx(E.Suspense,{fallback:null,children:u.jsx(ni,{url:e,material:s,color:a,sz:r})}):u.jsx("mesh",{geometry:o,scale:r,children:u.jsx(Qt,{material:s,structural:i,color:a})})}function vf({markConfig:n,collection1Config:e,color:t,layers:s,bindings:i,markLabelConfig:a}){const r=s.length||e.alignCount,{alignAxis:o,alignSpacing:l,alignAnchor:d}=e,h=zn,c=Math.PI/180,f=(r-1)/2,p=[n.orientation.x*c,n.orientation.y*c,n.orientation.z*c],{colorMode:y,colorGradient:A}=E.useContext(ti);function g(v){return Wr(v,i,s,t,y,A)}const x=n.scale??1;function m(v){const b={x:n.size.x*x*(i.markSizeX?Ct(i.markSizeX,v,s):1),y:n.size.y*x*(i.markSizeY?Ct(i.markSizeY,v,s):1),z:n.size.z*x*(i.markSizeZ?Ct(i.markSizeZ,v,s):1)};return[h*b.x,h*b.y,h*b.z]}return u.jsx("group",{children:Array.from({length:r},(v,b)=>{var N,Q;const C=(b-f)*l,B=m(b),T=o==="X"?B[1]*.036:B[0]*.036,F=Xr(d,o,T),S=o==="X"?[C+F[0],F[1],F[2]]:[F[0],C+F[1],F[2]],D=B[1]*.036+.8,w=B[0]*.036+.8,M=si(a.slots,s,b),R=(N=s[b%Math.max(1,s.length)])==null?void 0:N.name,I=(Q=n.categoryShapes)==null?void 0:Q[R??""],P=(I==null?void 0:I.shape)??n.shape,L=I?I.customModelUrl:n.customModelUrl,G=I?I.customModelHasMat:n.customModelHasMat,O=I!=null&&I.customModelHasMat?"original":n.material;return u.jsxs("group",{position:S,rotation:p,children:[u.jsx(yf,{shape:P,customModelUrl:L,customModelHasMat:G,material:O,structural:n.structural,color:g(b),scale:B}),a.show&&u.jsxs(u.Fragment,{children:[M.top&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[0,D,0],userData:{isLabel:!0,labelText:M.top,labelPos:"top"}}),u.jsx(fe,{zIndexRange:[1,0],position:[0,D,0],style:{pointerEvents:"none"},children:u.jsx(Ke,{pos:"top",text:M.top})})]}),M.bottom&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[0,-D,0],userData:{isLabel:!0,labelText:M.bottom,labelPos:"bottom"}}),u.jsx(fe,{zIndexRange:[1,0],position:[0,-D,0],style:{pointerEvents:"none"},children:u.jsx(Ke,{pos:"bottom",text:M.bottom})})]}),M.left&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[-w,0,0],userData:{isLabel:!0,labelText:M.left,labelPos:"left"}}),u.jsx(fe,{zIndexRange:[1,0],position:[-w,0,0],style:{pointerEvents:"none"},children:u.jsx(Ke,{pos:"left",text:M.left})})]}),M.right&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[w,0,0],userData:{isLabel:!0,labelText:M.right,labelPos:"right"}}),u.jsx(fe,{zIndexRange:[1,0],position:[w,0,0],style:{pointerEvents:"none"},children:u.jsx(Ke,{pos:"right",text:M.right})})]})]})]},b)})})}function Vr({markConfig:n,collection1Config:e,color:t,position:s,layers:i,bindings:a,heightOverride:r,markLabelConfig:o,colLabelConfig:l,layerIndex:d,scatterSeed:h}){var C;const c=n.scale??1,f={x:n.size.x*c,y:n.size.y*c,z:n.size.z*c};if(e.arrangement==="alignment")return u.jsx("group",{position:s,children:u.jsx(vf,{markConfig:n,collection1Config:e,color:t,layers:i,bindings:a,markLabelConfig:o})});if(e.arrangement==="piling")return u.jsx(hf,{position:s,count:e.pilingCount,markShape:n.shape,markMaterial:n.material,markSize:f,color:t,structural:n.structural,customModelUrl:n.shape==="custom"?n.customModelUrl:void 0},e.pilingCount);const{scatterDimensions:p,scatterCount:y,scatterDensity:A,scatterMode:g}=e,x=a.scatterCount!==null?Math.max(1,Math.round(((C=i[d%Math.max(1,i.length)])==null?void 0:C.percentage)??y)):null,m=x!==null?x:(g??"count")==="density"?Math.max(5,Math.round(A*p.x*(r??p.y)*p.z)):y,v=r??p.y,b=si(l.slots,i,d);return u.jsx(uf,{width:p.x,depth:p.z,height:v,color:t,position:s,particleCount:m,markShape:n.shape,markMaterial:n.material,markSize:f,structural:n.structural,customModelUrl:n.shape==="custom"?n.customModelUrl:void 0,labelShow:l.show,labelData:b,seed:h})}const Fn=8;function bf({markConfig:n,collection1Config:e,layers:t,bindings:s,markLabelConfig:i,colLabelConfig:a,scatterSeed:r}){var h,c;const o=((h=t[0])==null?void 0:h.color)??e.color,l=Math.max(...t.map(f=>f.percentage),1),d=s.scatterSize==="weight"&&e.arrangement==="scattering"?Math.max(.5,(((c=t[0])==null?void 0:c.percentage)??50)/l*Fn):void 0;return u.jsx(Vr,{markConfig:n,collection1Config:e,color:o,position:[0,0,0],layers:t,bindings:s,heightOverride:d,markLabelConfig:i,colLabelConfig:a,layerIndex:0,scatterSeed:r})}function Cf({markConfig:n,collection1Config:e,collection2Config:t,layers:s,bindings:i,markLabelConfig:a,colLabelConfig:r,scatterSeed:o}){const{arrangement:l,alignCount:d,alignAxis:h,alignSpacing:c,alignAnchor:f,scatterCount:p,scatterDimensions:y,color:A}=t,g=s.length||d,x=E.useMemo(()=>{if(l==="alignment"){const v=Array.from({length:g},(S,D)=>{const w=s[D%Math.max(1,s.length)];return{color:(w==null?void 0:w.color)??A,name:(w==null?void 0:w.name)??`Group ${D+1}`,pct:(w==null?void 0:w.percentage)??0}}),b=Math.max(...s.map(S=>S.percentage),1),C=v.map(S=>{if(e.arrangement==="scattering"){const I=e.scatterDimensions;return h==="X"?I.x:i.scatterSize==="weight"?Math.max(.5,S.pct/b*Fn):I.y}const D=e,w=n.scale??1,M=n.size.x*w*At,R=n.size.y*w*At;return h==="X"?D.alignAxis==="X"?(D.alignCount-1)*D.alignSpacing+M:M:D.alignAxis==="Y"?(D.alignCount-1)*D.alignSpacing+R:R}),B=v.map(S=>{if(e.arrangement==="scattering"){const M=e.scatterDimensions;return h==="X"?i.scatterSize==="weight"?Math.max(.5,S.pct/b*Fn):M.y:M.x}const D=e,w=n.scale??1;return h==="X"?D.alignAxis==="Y"?(D.alignCount-1)*D.alignSpacing+n.size.y*w*At:n.size.y*w*At:D.alignAxis==="X"?(D.alignCount-1)*D.alignSpacing+n.size.x*w*At:n.size.x*w*At});let F=-(C.reduce((S,D)=>S+D,0)+(g-1)*c)/2;return v.map((S,D)=>{const w=C[D],M=B[D],R=F+w/2;F+=w+c;const I=Xr(f,h,M/2),P=h==="X"?[R+I[0],I[1],I[2]]:[I[0],R+I[1],I[2]];return{...S,position:P,perpExt:M}})}return Array.from({length:p},(v,b)=>{const C=s[b%Math.max(1,s.length)];return{position:[(Math.random()-.5)*y.x*.8,(Math.random()-.5)*y.y*.8,(Math.random()-.5)*y.z*.8],color:(C==null?void 0:C.color)??A,name:(C==null?void 0:C.name)??`Group ${b+1}`,pct:(C==null?void 0:C.percentage)??0,perpExt:0}})},[l,g,h,c,f,p,y.x,y.y,y.z,s,A,i.scatterSize,e.arrangement,e.alignAxis,e.alignCount,e.alignSpacing,e.scatterDimensions.x,e.scatterDimensions.y,n.size.x,n.size.y,o]),m=Math.max(...s.map(v=>v.percentage),1);return u.jsx("group",{children:x.map(({position:v,color:b,name:C,pct:B},T)=>{var w;const F=i.scatterSize==="weight"&&e.arrangement==="scattering"?Math.max(.5,B/m*Fn):void 0,S=(w=n.categoryShapes)==null?void 0:w[C],D=S?{...n,shape:S.shape,customModelUrl:S.customModelUrl,customModelHasMat:S.customModelHasMat,customModelName:S.customModelName,material:S.customModelHasMat?"original":n.material}:n;return u.jsx(Vr,{markConfig:D,collection1Config:e,color:b,position:v,layers:s,bindings:i,heightOverride:F,markLabelConfig:a,colLabelConfig:r,layerIndex:T%Math.max(1,s.length),scatterSeed:o},T)})})}function Bf({config:n}){const e=E.useMemo(()=>Vt(n.shape),[n.shape]);E.useEffect(()=>()=>{e.dispose()},[e]);const t=Math.PI/180,s=zn,i=[n.orientation.x*t,n.orientation.y*t,n.orientation.z*t];return u.jsx("group",{position:[n.position.x,n.position.y,n.position.z],rotation:i,children:n.shape==="custom"&&n.customModelUrl?u.jsx(E.Suspense,{fallback:null,children:u.jsx(ni,{url:n.customModelUrl,material:n.material,color:n.color,sz:[s*n.size.x,s*n.size.y,s*n.size.z]})}):u.jsx("mesh",{geometry:e,scale:[s*n.size.x,s*n.size.y,s*n.size.z],children:u.jsx(Qt,{material:n.material,structural:n.structural,color:n.color})})})}function Tf({onSamplesUpdate:n,downloadRenderRef:e}){const{gl:t,scene:s,camera:i}=br(),a=E.useRef(n);return a.current=n,E.useEffect(()=>{let r=!1,o=null,l=null,d=null;async function h(){if(await new Promise(v=>setTimeout(v,0)),r)return;const c=new sf;l=new qu(t),l.setSize(t.domElement.width,t.domElement.height),l.camera=i,l.material=c,s.updateMatrixWorld(!0);const f=new nd(s),{bvh:p,textures:y,materials:A,lights:g}=f.generate();if(r){l.dispose();return}const{geometry:x}=f;if(c.bvh.updateFrom(p),c.attributesArray.updateFrom(x.attributes.normal,x.attributes.tangent,x.attributes.uv,x.attributes.color),c.materialIndexAttribute.updateFrom(x.attributes.materialIndex),c.textures.setTextures(t,2048,2048,y),c.materials.updateFrom(A,y),c.lights.updateFrom(g),s.environment)try{c.envMapInfo.updateFrom(s.environment)}catch{}c.uniforms.backgroundAlpha.value=0,d=new St(new Je({map:l.target.texture})),e.current=()=>{const v=l.samples;t.domElement.toBlob(async b=>{if(!b)return;const C=document.createElement("canvas");C.width=t.domElement.width,C.height=t.domElement.height;const B=C.getContext("2d"),T=await createImageBitmap(b);B.drawImage(T,0,0),s.updateMatrixWorld();const F=[];if(s.traverse(S=>{if(S.userData.isLabel){const D=new _;S.getWorldPosition(D),F.push({worldPos:D,text:S.userData.labelText,pos:S.userData.labelPos??"top"})}}),F.length>0){const S=window.devicePixelRatio||1,D=Math.round(12*S);B.save(),B.font=`${D}px 'Courier New', monospace`,B.shadowColor="rgba(0,0,0,1)",B.shadowBlur=6*S,B.shadowOffsetX=0,B.shadowOffsetY=S,B.fillStyle="#e0e0e0";for(const{worldPos:w,text:M,pos:R}of F){const I=w.clone().project(i);if(I.z>1)continue;const P=(I.x*.5+.5)*C.width,L=(I.y*-.5+.5)*C.height;R==="top"?(B.textAlign="center",B.textBaseline="bottom"):R==="bottom"?(B.textAlign="center",B.textBaseline="top"):R==="left"?(B.textAlign="right",B.textBaseline="middle"):(B.textAlign="left",B.textBaseline="middle"),B.fillText(M,P,L)}B.restore()}C.toBlob(S=>{if(!S)return;const D=URL.createObjectURL(S),w=document.createElement("a");w.download=`render_${v}spp.png`,w.href=D,w.click(),URL.revokeObjectURL(D)},"image/png")},"image/png")},i.updateMatrixWorld();function m(){r||!l||!d||(i.updateMatrixWorld(),l.update(),d.material.map=l.target.texture,t.setRenderTarget(null),d.render(t),a.current(l.samples),o=requestAnimationFrame(m))}o=requestAnimationFrame(m)}return h().catch(console.error),()=>{r=!0,o!==null&&cancelAnimationFrame(o),l==null||l.dispose(),d==null||d.dispose(),e.current=null}},[t,s,i,e]),null}function Sf({config:n}){const e=n.background==="ocean";return u.jsxs(u.Fragment,{children:[e?u.jsx("color",{attach:"background",args:["#7ab8d4"]}):u.jsx("color",{attach:"background",args:["#050505"]}),u.jsx(Ws,{preset:n.hdriPreset,background:!1}),e&&u.jsxs(u.Fragment,{children:[u.jsx(Ju,{distance:45e4,sunPosition:[5,1.2,8],turbidity:9,rayleigh:3,mieCoefficient:.005,mieDirectionalG:.7}),u.jsx("fog",{attach:"fog",args:["#a8d4ea",25,140]}),u.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-7.2,0],children:[u.jsx("planeGeometry",{args:[400,400,1,1]}),u.jsx("meshPhysicalMaterial",{color:"#0c3a58",roughness:.06,metalness:.65,reflectivity:.9})]})]}),u.jsx("ambientLight",{intensity:e?.5:.18}),u.jsx("directionalLight",{position:[8,18,6],intensity:e?1.4:1.8,color:e?"#fff8e0":"#fffaf0"}),u.jsx("directionalLight",{position:[-6,4,-8],intensity:e?.6:.4,color:e?"#c0e8ff":"#c0ccff"})]})}function Mf({level:n,markConfig:e,collection1Config:t,collection2Config:s,sceneConfig:i,layers:a,bindings:r,markLabelConfig:o,colLabelConfig:l,decorations:d,colorMode:h,colorGradient:c,scatterSeed:f,datasetTitle:p,pathTracingActive:y,onSamplesUpdate:A,downloadRenderRef:g}){const x=mf(i.focalLength),m=Kr[n],v=i.background==="ocean";return u.jsxs(Gn,{camera:{position:m,fov:x,near:.1,far:500},style:{width:"100%",height:"100%"},frameloop:y?"never":"always",gl:{antialias:!0,toneMapping:Js,toneMappingExposure:v?.95:1.35,preserveDrawingBuffer:!0},children:[u.jsx(gf,{level:n,fov:x,focalLength:i.focalLength}),u.jsx(Sf,{config:i}),u.jsx(ti.Provider,{value:{colorMode:h,colorGradient:c},children:u.jsxs(vr,{gravity:[0,-9.81,0],timeStep:"vary",children:[n===1&&u.jsx(Af,{config:e,layers:a,bindings:r,markLabelConfig:o}),n===2&&u.jsx(bf,{markConfig:e,collection1Config:t,layers:a,bindings:r,markLabelConfig:o,colLabelConfig:l,scatterSeed:f}),n===3&&u.jsx(Cf,{markConfig:e,collection1Config:t,collection2Config:s,layers:a,bindings:r,markLabelConfig:o,colLabelConfig:l,scatterSeed:f}),d.map(b=>u.jsx(Bf,{config:b},b.id)),p&&u.jsx(fe,{zIndexRange:[1,0],position:[0,9,0],center:!0,style:{pointerEvents:"none",whiteSpace:"nowrap"},children:u.jsx("span",{style:{fontSize:"16px",fontWeight:"600",color:"#ffffff"},children:p})})]})}),u.jsx(jn,{makeDefault:!0,dampingFactor:.08,minDistance:1,maxDistance:400,target:[0,0,0]}),y&&A&&g&&u.jsx(Tf,{onSamplesUpdate:A,downloadRenderRef:g})]})}const Qr=3,Yr="mark",qr={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},scale:6,size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},categoryShapes:{Strings:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/stradivari_violin.glb",customModelHasMat:!0,customModelName:"stradivari_violin"},Brass:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/trumpet.glb",customModelHasMat:!0,customModelName:"trumpet"},Woodwinds:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/clarinet_model_with_annotations.glb",customModelHasMat:!0,customModelName:"clarinet_model_with_annotations"},Percussion:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/drum.glb",customModelHasMat:!0,customModelName:"drum"},"Piano & Harp":{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/harp.glb",customModelHasMat:!0,customModelName:"harp"}}},Zr={arrangement:"scattering",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},$r={arrangement:"alignment",color:"#9D9BF4",alignCount:5,alignAxis:"X",alignSpacing:.5,alignAnchor:"end",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},eo={background:"dark",hdriPreset:"city",focalLength:130},to={markColor:null,markGeometry:"garbageType",scatterSize:"weight",scatterCount:"weight",c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null},no={show:!1,slots:{top:null,bottom:null,left:null,right:null}},so={show:!0,slots:{top:"weight",bottom:"garbageType",left:null,right:null}},io=[],ro=[{id:"1",name:"Strings",percentage:80,color:"#C8A882"},{id:"2",name:"Brass",percentage:28,color:"#D4A017"},{id:"3",name:"Woodwinds",percentage:20,color:"#4A7C59"},{id:"4",name:"Percussion",percentage:10,color:"#5C6B7A"},{id:"5",name:"Piano & Harp",percentage:4,color:"#8B7BAB"}],oo="mahler",Ff={level:Qr,activeElement:Yr,markConfig:qr,col1Config:Zr,col2Config:$r,sceneConfig:eo,bindings:to,markLabelConfig:no,colLabelConfig:so,decorations:io,layers:ro,activeDataset:oo},wf=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:oo,activeElement:Yr,bindings:to,col1Config:Zr,col2Config:$r,colLabelConfig:so,decorations:io,default:Ff,layers:ro,level:Qr,markConfig:qr,markLabelConfig:no,sceneConfig:eo},Symbol.toStringTag,{value:"Module"})),ao=3,lo="collection2",co={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},size:{x:10,y:10,z:10},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/apple.glb",customModelHasMat:!0,customModelName:"apple"},uo={arrangement:"scattering",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},fo={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"end",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},ho={background:"dark",hdriPreset:"city",focalLength:130},po={markColor:"garbageType",scatterSize:"weight",c1AlignCount:"count",c2AlignCount:"count",markSizeX:null,markSizeY:null,markSizeZ:null},mo={show:!0,slots:{top:"garbageType",bottom:null,left:null,right:null}},go={show:!0,slots:{top:null,bottom:"garbageType",left:null,right:null}},xo=[],Ao=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],Df={level:ao,activeElement:lo,markConfig:co,col1Config:uo,col2Config:fo,sceneConfig:ho,bindings:po,markLabelConfig:mo,colLabelConfig:go,decorations:xo,layers:Ao},Ef=Object.freeze(Object.defineProperty({__proto__:null,activeElement:lo,bindings:po,col1Config:uo,col2Config:fo,colLabelConfig:go,decorations:xo,default:Df,layers:Ao,level:ao,markConfig:co,markLabelConfig:mo,sceneConfig:ho},Symbol.toStringTag,{value:"Module"})),yo=2,vo="scene",bo={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/flowers.glb",customModelHasMat:!0,customModelName:"flowers"},Co={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:.9,alignAnchor:"end",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1},Bo={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1},To={background:"dark",hdriPreset:"dawn",focalLength:130},So={markColor:null,scatterSize:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:"weight",markSizeZ:null},Mo={show:!0,slots:{top:"weight",bottom:"garbageType",left:null,right:null}},Fo={show:!1,slots:{top:null,bottom:null,left:null,right:null}},wo=[{id:"dec_1781047628256",shape:"box",material:"metal",color:"#24271d",position:{x:0,y:-.05,z:0},size:{x:8,y:.1,z:6.6},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}}],Do=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],Rf={level:yo,activeElement:vo,markConfig:bo,col1Config:Co,col2Config:Bo,sceneConfig:To,bindings:So,markLabelConfig:Mo,colLabelConfig:Fo,decorations:wo,layers:Do},If=Object.freeze(Object.defineProperty({__proto__:null,activeElement:vo,bindings:So,col1Config:Co,col2Config:Bo,colLabelConfig:Fo,decorations:wo,default:Rf,layers:Do,level:yo,markConfig:bo,markLabelConfig:Mo,sceneConfig:To},Symbol.toStringTag,{value:"Module"})),Eo=3,Ro="mark",Io={shape:"box",material:"metal",color:"#F06951",position:{x:0,y:0,z:0},size:{x:4.6,y:4.6,z:4.6},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},_o={arrangement:"scattering",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterCount:310,scatterDimensions:{x:13,y:4,z:8},scatterDensity:1},Po={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"Y",alignSpacing:.5,alignAnchor:"center",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1},Lo={background:"dark",hdriPreset:"sunset",focalLength:130},Go={markColor:"garbageType",scatterSize:"weight",c1AlignCount:null,c2AlignCount:"count",markSizeX:null,markSizeY:null,markSizeZ:null},jo={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Ho={show:!0,slots:{top:null,bottom:null,left:"garbageType",right:"weight"}},ko=[],Oo=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],_f={level:Eo,activeElement:Ro,markConfig:Io,col1Config:_o,col2Config:Po,sceneConfig:Lo,bindings:Go,markLabelConfig:jo,colLabelConfig:Ho,decorations:ko,layers:Oo},Pf=Object.freeze(Object.defineProperty({__proto__:null,activeElement:Ro,bindings:Go,col1Config:_o,col2Config:Po,colLabelConfig:Ho,decorations:ko,default:_f,layers:Oo,level:Eo,markConfig:Io,markLabelConfig:jo,sceneConfig:Lo},Symbol.toStringTag,{value:"Module"})),zo=2,No="mark",Uo={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/cigarette.glb",customModelHasMat:!0,customModelName:"cigarette"},Jo={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:.5,alignAnchor:"end",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1},Wo={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1},Ko={background:"dark",hdriPreset:"city",focalLength:130},Xo={markColor:null,scatterSize:null,c1AlignCount:"count",c2AlignCount:null,markSizeX:null,markSizeY:"weight",markSizeZ:null},Vo={show:!0,slots:{top:"weight",bottom:"garbageType",left:null,right:null}},Qo={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Yo=[],qo=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],Lf={level:zo,activeElement:No,markConfig:Uo,col1Config:Jo,col2Config:Wo,sceneConfig:Ko,bindings:Xo,markLabelConfig:Vo,colLabelConfig:Qo,decorations:Yo,layers:qo},Gf=Object.freeze(Object.defineProperty({__proto__:null,activeElement:No,bindings:Xo,col1Config:Jo,col2Config:Wo,colLabelConfig:Qo,decorations:Yo,default:Lf,layers:qo,level:zo,markConfig:Uo,markLabelConfig:Vo,sceneConfig:Ko},Symbol.toStringTag,{value:"Module"})),jf=Object.assign({"./presets/Orchestra.json":wf,"./presets/apple scene.json":Ef,"./presets/flowers.json":If,"./presets/garbage_in_the_ocean.json":Pf,"./presets/smoking.json":Gf}),Cn=Object.entries(jf).map(([n,e])=>{const t=n.replace(/^.*\//,"").replace(/\.json$/,""),s=t.replace(/_/g," ").replace(/\b\w/g,i=>i.toUpperCase());return{id:`preset_${t}`,name:s,createdAt:"",data:e.default}});function Hf(n,e){const t=JSON.stringify(e,null,2),s=new Blob([t],{type:"application/json"}),i=URL.createObjectURL(s),a=document.createElement("a");a.href=i,a.download=n.trim().replace(/\s+/g,"_")+".json",a.click(),URL.revokeObjectURL(i)}const _n={padding:"8px 16px",borderRadius:"8px",fontSize:"13px",fontWeight:"500",cursor:"pointer",fontFamily:"inherit",border:"none",transition:"opacity 0.1s"};function Zo({onClose:n,children:e}){return u.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999},onClick:n,children:u.jsx("div",{style:{background:"#fff",borderRadius:"14px",width:"340px",maxWidth:"90vw",boxShadow:"0 16px 48px rgba(0,0,0,0.28)",overflow:"hidden",fontFamily:"inherit"},onClick:t=>t.stopPropagation(),children:e})})}function kf({initialName:n,onSave:e,onClose:t}){const[s,i]=E.useState(n);function a(){const r=s.trim();r&&e(r)}return u.jsx(Zo,{onClose:t,children:u.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"14px"},children:[u.jsx("div",{style:{fontSize:"15px",fontWeight:"700",color:"#1D1D1F"},children:"Save Scene"}),u.jsx("input",{type:"text",value:s,onChange:r=>i(r.target.value),onKeyDown:r=>{r.key==="Enter"&&a(),r.key==="Escape"&&t()},placeholder:"Scene name…",autoFocus:!0,style:{background:"#F2F2F7",border:"1.5px solid #D1D1D6",borderRadius:"8px",padding:"9px 12px",fontSize:"13px",color:"#1D1D1F",outline:"none",fontFamily:"inherit",width:"100%",boxSizing:"border-box"}}),u.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[u.jsx("button",{onClick:t,style:{..._n,background:"#F2F2F7",color:"#6C6C70"},children:"Cancel"}),u.jsx("button",{onClick:a,disabled:!s.trim(),style:{..._n,background:"#007AFF",color:"#fff",opacity:s.trim()?1:.4},children:"Save"})]})]})})}function qi({children:n}){return u.jsx("div",{style:{padding:"8px 20px 4px",fontSize:"10px",fontWeight:"700",letterSpacing:"0.08em",textTransform:"uppercase",color:"#AEAEB2"},children:n})}function Of({saves:n,onLoad:e,onDelete:t,onClose:s,currentName:i,currentData:a}){const[r,o]=E.useState(null);function l(d,h,c){return u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"11px 20px",cursor:"pointer",background:r===d.id?"#F8F8FA":"transparent",borderBottom:c?"none":"1px solid #F2F2F7",transition:"background 0.08s"},onClick:()=>e(d),onMouseEnter:()=>o(d.id),onMouseLeave:()=>o(null),children:[u.jsxs("div",{style:{flex:1,minWidth:0},children:[u.jsx("div",{style:{fontSize:"13px",fontWeight:"600",color:"#1D1D1F"},children:d.name}),d.createdAt&&u.jsx("div",{style:{fontSize:"10px",color:"#8E8E93",marginTop:"2px"},children:new Date(d.createdAt).toLocaleString()})]}),h&&u.jsx("button",{onClick:f=>{f.stopPropagation(),t(d.id)},title:"Delete",style:{background:"none",border:"none",cursor:"pointer",color:"#FF3B30",fontSize:"17px",lineHeight:1,padding:"4px 6px",flexShrink:0},children:"×"})]},d.id)}return u.jsx(Zo,{onClose:s,children:u.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[u.jsx("div",{style:{padding:"16px 20px",borderBottom:"1px solid #E5E5EA",fontSize:"15px",fontWeight:"700",color:"#1D1D1F"},children:"Load Scene"}),u.jsxs("div",{style:{maxHeight:"380px",overflowY:"auto"},children:[Cn.length>0&&u.jsxs(u.Fragment,{children:[u.jsx(qi,{children:"Presets"}),Cn.map((d,h)=>l(d,!1,h===Cn.length-1))]}),n.length>0&&u.jsxs(u.Fragment,{children:[u.jsx(qi,{children:"My Saves"}),n.map((d,h)=>l(d,!0,h===n.length-1))]}),Cn.length===0&&n.length===0&&u.jsx("div",{style:{padding:"36px 20px",textAlign:"center",color:"#8E8E93",fontSize:"13px"},children:"No saved scenes yet"})]}),u.jsxs("div",{style:{padding:"12px 20px",borderTop:"1px solid #E5E5EA",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("button",{onClick:()=>Hf(i,a),title:"Export current scene as JSON",style:{..._n,background:"#F2F2F7",color:"#007AFF",padding:"7px 12px"},children:"Export scene"}),u.jsx("button",{onClick:s,style:{..._n,background:"#F2F2F7",color:"#6C6C70"},children:"Close"})]})]})})}const $o="phys_tool_saves";function hs(){try{return JSON.parse(localStorage.getItem($o)??"[]")}catch{return[]}}function ps(n){localStorage.setItem($o,JSON.stringify(n))}const Bn={garbageInOcean:{label:"Garbage in the Ocean",categoricalCol:"Garbage Type",numericalCol:"Weight",layers:[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}]},mahler:{label:"Mahler's Symphony No. 8 Orchestra",categoricalCol:"Section",numericalCol:"Count",layers:[{id:"1",name:"Strings",percentage:80,color:"#C8A882"},{id:"2",name:"Brass",percentage:28,color:"#D4A017"},{id:"3",name:"Woodwinds",percentage:20,color:"#4A7C59"},{id:"4",name:"Percussion",percentage:10,color:"#5C6B7A"},{id:"5",name:"Piano & Harp",percentage:4,color:"#8B7BAB"}]}};function zf({label:n,type:e,varName:t}){const s=`phys-var/${e}`;return u.jsxs("div",{draggable:!0,onDragStart:i=>{i.dataTransfer.setData("phys-var/name",t),i.dataTransfer.setData(s,"1"),i.dataTransfer.effectAllowed="copy"},title:`Drag to bind ${n}`,style:{display:"inline-flex",alignItems:"center",gap:"5px",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"6px 10px",fontSize:"11px",color:"#1D1D1F",fontWeight:"600",cursor:"grab",userSelect:"none",whiteSpace:"nowrap"},children:[u.jsx("span",{style:{fontSize:"10px",color:"#8E8E93"},children:e==="numerical"?"#":"◈"}),n]})}function Nf({layers:n,onChange:e,onDatasetChange:t,selectedDataset:s="garbageInOcean"}){function i(o){e(Bn[o].layers),t==null||t(o)}const a=Bn[s]??Bn.garbageInOcean,r={padding:"6px 8px",verticalAlign:"middle",fontSize:"12px",color:"#1D1D1F"};return u.jsxs("div",{style:{padding:"14px 14px 16px",display:"flex",flexDirection:"column",gap:"12px"},children:[u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[u.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600"},children:"Dataset"}),u.jsx("select",{value:s,onChange:o=>i(o.target.value),style:{background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",fontFamily:"inherit",cursor:"pointer",outline:"none",width:"100%"},children:Object.entries(Bn).map(([o,l])=>u.jsx("option",{value:o,children:l.label},o))})]}),u.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[u.jsx("thead",{children:u.jsxs("tr",{style:{borderBottom:"1px solid #E5E5EA"},children:[u.jsx("th",{style:{...r,textAlign:"left",color:"#8E8E93",fontWeight:"500",fontSize:"11px"},children:a.categoricalCol}),u.jsx("th",{style:{...r,textAlign:"right",color:"#8E8E93",fontWeight:"500",fontSize:"11px",width:"60px"},children:a.numericalCol})]})}),u.jsx("tbody",{children:n.map((o,l)=>u.jsxs("tr",{style:{borderBottom:"1px solid #F2F2F7",background:l%2===0?"transparent":"#FAFAFA"},children:[u.jsx("td",{style:r,children:o.name}),u.jsx("td",{style:{...r,textAlign:"right",color:"#6C6C70"},children:o.percentage})]},o.id))})]})]})}const ms=88,Zi=46;function $i(n,e,t,s){return Array.from({length:n},(i,a)=>{const o=(n===1?e:e-t/2+t/(n-1)*a)*Math.PI/180;return{x:Math.cos(o)*s,y:Math.sin(o)*s}})}const er={position:"fixed",background:"#fff",borderRadius:"14px",boxShadow:"0 6px 28px rgba(0,0,0,0.22)",padding:"12px 14px",zIndex:1002,pointerEvents:"all",minWidth:"150px"},gs={display:"flex",alignItems:"center",gap:"8px",width:"100%",textAlign:"left",background:"#F2F2F7",border:"1px solid #E5E5EA",borderRadius:"8px",padding:"8px 12px",fontSize:"12px",fontWeight:"500",color:"#1D1D1F",cursor:"pointer",fontFamily:"inherit",transition:"background 0.12s"};function tr({children:n}){return u.jsx("div",{style:{fontSize:"10px",color:"#AEAEB2",fontWeight:"700",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"8px"},children:n})}function Uf({x:n,y:e,varName:t,varType:s,level:i,col1Arrangement:a,onBind:r,onColorBind:o,onBindLabel:l,onClose:d}){const[h,c]=E.useState("radial"),[f,p]=E.useState("mark");E.useEffect(()=>{function T(F){F.key==="Escape"&&(h!=="radial"?c("radial"):d())}return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[h,d]);const y=[{action:"bind",bindKey:"markColor",label:"Color",icon:"●",section:"mark",varTypes:["numerical","categorical"]},{action:"bind",bindKey:"markGeometry",label:"Geometry",icon:"◆",section:"mark",varTypes:["categorical"]},{action:"bind",bindKey:"markSizeX",label:"X",icon:"↔",section:"mark",varTypes:["numerical"]},{action:"bind",bindKey:"markSizeY",label:"Y",icon:"↕",section:"mark",varTypes:["numerical"]},{action:"bind",bindKey:"markSizeZ",label:"Z",icon:"⊙",section:"mark",varTypes:["numerical"]},{action:"label",label:"Label",icon:"Aa",section:"mark",varTypes:["numerical","categorical"],excludeArrangements:["scattering"]},{action:"bind",bindKey:"scatterSize",label:"Scattering - Size",icon:"⊞",section:"collection",varTypes:["numerical"],arrangements:["scattering"],minLevel:2},{action:"bind",bindKey:"scatterCount",label:"Scattering - Count",icon:"#",section:"collection",varTypes:["numerical"],arrangements:["scattering"],minLevel:2},{action:"label",label:"Label",icon:"Aa",section:"collection",varTypes:["numerical","categorical"],minLevel:2}];function A(T){var F;return!(!T.varTypes.includes(s)||T.minLevel!==void 0&&i<T.minLevel||"arrangements"in T&&T.arrangements!==void 0&&!T.arrangements.includes(a)||"excludeArrangements"in T&&((F=T.excludeArrangements)!=null&&F.includes(a)))}const g=y.filter(T=>T.section==="mark"&&A(T)),x=y.filter(T=>T.section==="collection"&&A(T)),m=$i(g.length,180,100,ms),v=$i(x.length,0,70,ms),b=[...g.map((T,F)=>({opt:T,pos:m[F]})),...x.map((T,F)=>({opt:T,pos:v[F]}))];function C(T){if(T.action==="bind"&&T.bindKey==="markColor"){p("mark"),c("colorMode");return}if(T.action==="label"){p(T.section),c("labelPos");return}T.action==="bind"&&r(T.bindKey,t),d()}const B=x.length>0;if(h==="colorMode")return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3},onClick:()=>c("radial")}),u.jsxs("div",{style:{...er,left:n-75,top:e-70},children:[u.jsx(tr,{children:"Color mode"}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[u.jsxs("button",{style:gs,onClick:()=>{o(t,"distinct"),d()},onMouseEnter:T=>T.currentTarget.style.background="#E5E5EA",onMouseLeave:T=>T.currentTarget.style.background="#F2F2F7",children:[u.jsx("span",{style:{fontSize:"14px"},children:"◈"})," Distinct"]}),u.jsxs("button",{style:gs,onClick:()=>{o(t,"continuous"),d()},onMouseEnter:T=>T.currentTarget.style.background="#E5E5EA",onMouseLeave:T=>T.currentTarget.style.background="#F2F2F7",children:[u.jsx("span",{style:{fontSize:"14px"},children:"▬"})," Continuous"]})]})]})]});if(h==="labelPos"){const T={...gs,justifyContent:"center",width:"88px",height:"34px",padding:"0 8px",whiteSpace:"nowrap",flexShrink:0},F=(S,D,w)=>u.jsxs("button",{style:T,onClick:()=>{l(f,t,S),d()},onMouseEnter:M=>M.currentTarget.style.background="#E5E5EA",onMouseLeave:M=>M.currentTarget.style.background="#F2F2F7",children:[D," ",w]},S);return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3},onClick:()=>c("radial")}),u.jsxs("div",{style:{...er,left:n-100,top:e-110},children:[u.jsx(tr,{children:"Label position"}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[F("top","↑","Top"),u.jsxs("div",{style:{display:"flex",gap:"4px"},children:[F("left","←","Left"),F("right","→","Right")]}),F("bottom","↓","Bottom")]})]})]})}return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3},onClick:d}),u.jsxs("div",{style:{position:"fixed",left:n,top:e,transform:"translate(-50%, -50%)",width:0,height:0,zIndex:1001,pointerEvents:"none"},children:[B&&u.jsx("div",{style:{position:"absolute",left:0,top:-108,width:"1px",height:(ms+20)*2,background:"#E5E5EA",transform:"translateX(-50%)"}}),u.jsx("div",{style:{position:"absolute",left:-8,top:-10,fontSize:"9px",fontWeight:"700",letterSpacing:"0.12em",textTransform:"uppercase",color:"#007AFF",whiteSpace:"nowrap",textAlign:"right",transform:"translateX(-100%)"},children:"Mark"}),B&&u.jsx("div",{style:{position:"absolute",left:8,top:-10,fontSize:"9px",fontWeight:"700",letterSpacing:"0.12em",textTransform:"uppercase",color:"#5E5CE6",whiteSpace:"nowrap"},children:"Collection"}),u.jsx("div",{style:{position:"absolute",width:10,height:10,background:"#1D1D1F",borderRadius:"50%",transform:"translate(-50%, -50%)"}}),b.map(({opt:T,pos:F},S)=>{const D=T.section==="collection",w=D?"#5E5CE6":"#007AFF";return u.jsxs("button",{onClick:()=>C(T),style:{position:"absolute",left:F.x,top:F.y,transform:"translate(-50%, -50%)",width:Zi,height:Zi,background:"#fff",border:`2px solid ${w}`,borderRadius:"50%",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1px",boxShadow:"0 4px 16px rgba(0,0,0,0.16)",pointerEvents:"all",fontFamily:"inherit"},onMouseEnter:M=>{const R=M.currentTarget;R.style.transform="translate(-50%, -50%) scale(1.13)",R.style.boxShadow="0 6px 20px rgba(0,0,0,0.22)",R.style.background=D?"#F3EBFF":"#EBF3FF"},onMouseLeave:M=>{const R=M.currentTarget;R.style.transform="translate(-50%, -50%)",R.style.boxShadow="0 4px 16px rgba(0,0,0,0.16)",R.style.background="#fff"},children:[u.jsx("span",{style:{fontSize:"14px",color:w,lineHeight:1},children:T.icon}),u.jsx("span",{style:{fontSize:"8px",color:"#6C6C70",fontWeight:"600",lineHeight:1.2,textAlign:"center"},children:T.label})]},S)})]})]})}const Jf={markColor:"Color",markGeometry:"Geometry",scatterSize:"Scatter",scatterCount:"Count",c1AlignCount:"Count",c2AlignCount:"Count",markSizeX:"Size X",markSizeY:"Size Y",markSizeZ:"Size Z"},Wf={markColor:"Lv1",markGeometry:"Lv1",markSizeX:"Lv1",markSizeY:"Lv1",markSizeZ:"Lv1",scatterSize:"Lv2",scatterCount:"Lv2",c1AlignCount:"Lv2",c2AlignCount:"Lv3"},nr={garbageInOcean:{numerical:"Weight",categorical:"Garbage Type"},mahler:{numerical:"Count",categorical:"Section"}},Kf={garbageInOcean:"Garbage in the Ocean",mahler:"Mahler's Symphony No. 8 Orchestra"},sr=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],ir={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},rr={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},or={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},ar={background:"dark",hdriPreset:"city",focalLength:130},Tn={show:!1,slots:{top:null,bottom:null,left:null,right:null}};function Xf(){const[n,e]=E.useState(1),[t,s]=E.useState("mark"),[i,a]=E.useState(sr),[r,o]=E.useState(ir),[l,d]=E.useState(rr),[h,c]=E.useState(or),[f,p]=E.useState(ar),[y,A]=E.useState("garbageInOcean"),g=nr[y]??nr.garbageInOcean,x=[{label:g.numerical,type:"numerical",varName:"weight"},{label:g.categorical,type:"categorical",varName:"garbageType"}],[m,v]=E.useState({markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null}),[b,C]=E.useState(Tn),[B,T]=E.useState(Tn),[F,S]=E.useState("distinct"),[D,w]=E.useState({from:"#EE6655",to:"#4488EE"}),[M,R]=E.useState(void 0),[I,P]=E.useState(0),[L,G]=E.useState([]),[O,N]=E.useState(null),[Q,W]=E.useState(!1),[ne,de]=E.useState(null),[we,Te]=E.useState(null),[Ge,Yt]=E.useState(null),[ii,qe]=E.useState("none"),[rt,ri]=E.useState(!1),[je,oi]=E.useState(0),qt=E.useRef(null);function Zt(j,H){v(J=>{const U={...J,[j]:H};return H!==null&&(j==="markSizeX"||j==="markSizeY"||j==="markSizeZ")&&(j!=="markSizeX"&&(U.markSizeX=null),j!=="markSizeY"&&(U.markSizeY=null),j!=="markSizeZ"&&(U.markSizeZ=null)),U}),j==="markGeometry"&&H!==null&&(s("mark"),R("Geometry")),H!==null&&d(J=>({...J,alignCount:i.length})),j==="scatterSize"&&H!==null&&c(J=>({...J,alignCount:i.length}))}function ea(j,H){S(H),Zt("markColor",j),H==="continuous"&&(s("mark"),R("Material"))}function ta(j,H,J){const U=ge=>({...ge,show:!0,slots:{...ge.slots,[J]:H}});j==="mark"?C(U):T(U)}function na(){const j=`dec_${Date.now()}`,H={id:j,shape:"sphere",material:"plastic",color:"#888888",position:{x:0,y:-1.5,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}};G(J=>[...J,H]),N(j)}function sa(j){G(H=>H.filter(J=>J.id!==j)),N(H=>H===j?null:H)}function ia(j){G(H=>H.map(J=>J.id===j.id?j:J))}function Nn(){return{level:n,activeElement:t,markConfig:r,col1Config:l,col2Config:h,sceneConfig:f,bindings:m,markLabelConfig:b,colLabelConfig:B,decorations:L,layers:i,activeDataset:y}}function ai(j){const H=hs();if(we){const ge=H.findIndex(ua=>ua.id===we);if(ge>=0){H[ge]={...H[ge],name:j,data:Nn()},ps(H),Yt(j),qe("none");return}}const J=`save_${Date.now()}`,U={id:J,name:j,createdAt:new Date().toISOString(),data:Nn()};ps([...H,U]),Te(J),Yt(j),qe("none")}function ra(){we&&Ge?ai(Ge):qe("save")}function oa(j){const H=j.data;H.level!=null&&e(H.level),H.activeElement!=null&&s(H.activeElement),o(pi(H.markConfig??ir)),d(H.col1Config??rr),c(H.col2Config??or),p(H.sceneConfig??ar),v(H.bindings??{markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null}),C(H.markLabelConfig??Tn),T(H.colLabelConfig??Tn),G((H.decorations??[]).map(J=>pi(J))),a(H.layers??sr),H.activeDataset!=null&&A(H.activeDataset),Te(j.id),Yt(j.name),N(null),qe("none")}function aa(j){const H=hs().filter(J=>J.id!==j);ps(H),we===j&&(Te(null),Yt(null))}function la(){n===1&&(e(2),s("collection1")),n===2&&(e(3),s("collection2"))}function ca(){n===3&&(e(2),s("collection1")),n===2&&(e(1),s("mark"))}return u.jsxs("div",{style:{display:"flex",width:"100vw",height:"100vh",background:"#F2F2F7",overflow:"hidden"},children:[u.jsxs("div",{style:{width:"260px",flexShrink:0,borderRight:"1px solid #E5E5EA",background:"#FFFFFF",display:"flex",flexDirection:"column",overflow:"hidden"},children:[u.jsxs("div",{style:{display:"flex",gap:"6px",padding:"8px 10px",borderBottom:"1px solid #E5E5EA",flexShrink:0,flexDirection:"column"},children:[u.jsxs("div",{style:{display:"flex",gap:"6px"},children:[u.jsx("button",{onClick:ra,title:Ge?`Save to "${Ge}"`:"Save scene",style:{flex:1,background:"#F2F2F7",color:"#1D1D1F",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"6px 8px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Ge||"Save"}),u.jsx("button",{onClick:()=>qe("load"),style:{flex:1,background:"#F2F2F7",color:"#1D1D1F",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"6px 8px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit"},children:"Load"})]}),u.jsx("button",{onClick:()=>{ri(!0),oi(0)},disabled:rt,style:{background:"#F2F2F7",color:rt?"#AEAEB2":"#1D1D1F",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"7px 8px",fontSize:"12px",fontWeight:"600",cursor:rt?"default":"pointer",fontFamily:"inherit",width:"100%"},children:rt?"Rendering...":"Render"})]}),u.jsx("div",{style:{flex:1,overflowY:"auto",minHeight:0},children:u.jsx(fl,{level:n,activeElement:t,onSelectElement:j=>{s(j),N(null)},onAdvanceLevel:la,onDowngradeLevel:ca,decorations:L,activeDecorationId:O,onSelectDecoration:N,onAddDecoration:na,onRemoveDecoration:sa})})]}),u.jsxs("div",{style:{flex:1,position:"relative",zIndex:0},onDragOver:j=>j.preventDefault(),onDrop:j=>{j.preventDefault();const H=j.dataTransfer.getData("phys-var/name");if(!H)return;const J=j.dataTransfer.types.includes("phys-var/numerical")?"numerical":"categorical";de({x:j.clientX,y:j.clientY,varName:H,varType:J})},children:[u.jsx(Mf,{level:n,markConfig:r,collection1Config:l,collection2Config:h,sceneConfig:f,layers:i,bindings:m,markLabelConfig:b,colLabelConfig:B,decorations:L,colorMode:F,colorGradient:D,scatterSeed:I,datasetTitle:Kf[y],pathTracingActive:rt,onSamplesUpdate:oi,downloadRenderRef:qt}),rt&&u.jsxs("div",{style:{position:"absolute",top:"16px",right:"16px",background:"rgba(10,10,10,0.82)",backdropFilter:"blur(14px)",borderRadius:"14px",padding:"18px 20px",color:"#fff",display:"flex",flexDirection:"column",gap:"14px",width:"200px",fontFamily:"inherit",zIndex:10,boxShadow:"0 8px 32px rgba(0,0,0,0.4)"},children:[u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:"10px",fontWeight:"700",letterSpacing:"0.1em",textTransform:"uppercase",opacity:.45,marginBottom:"8px"},children:"Path Tracing"}),u.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"5px"},children:[u.jsx("span",{style:{fontSize:"32px",fontWeight:"700",letterSpacing:"-0.02em",lineHeight:1},children:je}),u.jsx("span",{style:{fontSize:"11px",opacity:.35},children:"spp"})]})]}),u.jsx("div",{style:{background:"rgba(255,255,255,0.1)",borderRadius:"3px",height:"3px"},children:u.jsx("div",{style:{width:`${Math.min(100,je/256*100)}%`,height:"100%",background:"#4FC3F7",borderRadius:"3px",transition:"width 0.4s"}})}),u.jsx("div",{style:{fontSize:"11px",opacity:.4,marginTop:"-8px"},children:je===0?"Building scene BVH…":je>=256?"Converged":`${256-je} samples to 256`}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsx("button",{onClick:()=>{var j;return(j=qt.current)==null?void 0:j.call(qt)},disabled:je===0,style:{background:je>0?"#4FC3F7":"rgba(255,255,255,0.08)",color:"#fff",border:"none",borderRadius:"8px",padding:"9px",fontSize:"12px",fontWeight:"600",cursor:je>0?"pointer":"default",fontFamily:"inherit"},children:"Download PNG"}),u.jsx("button",{onClick:()=>ri(!1),style:{background:"rgba(255,255,255,0.08)",color:"#fff",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"9px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit"},children:"Stop"})]})]})]}),u.jsxs("div",{style:{width:"260px",flexShrink:0,borderLeft:"1px solid #E5E5EA",background:"#FFFFFF",display:"flex",flexDirection:"column"},children:[u.jsx("div",{style:{flex:1,overflowY:"auto",minHeight:0},children:u.jsx(Jl,{activeElement:t,compositionLevel:n,layers:i,markConfig:r,onMarkChange:o,collection1Config:l,onCollection1Change:d,collection2Config:h,onCollection2Change:c,sceneConfig:f,onSceneChange:p,bindings:m,onBind:Zt,markLabelConfig:b,onMarkLabelChange:C,colLabelConfig:B,onColLabelChange:T,activeDecorationId:O,decorations:L,onDecorationChange:ia,colorMode:F,colorGradient:D,onColorGradientChange:w,markOpenSection:M,onReseed:()=>P(j=>j+1)})}),u.jsxs("div",{style:{borderTop:"1px solid #E5E5EA",padding:"14px 14px 16px",flexShrink:0},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[u.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600"},children:"Data Variables"}),u.jsx("button",{onClick:()=>W(!0),style:{background:"none",border:"1px solid #D1D1D6",borderRadius:"6px",padding:"3px 8px",fontSize:"11px",color:"#6C6C70",cursor:"pointer",fontFamily:"inherit"},children:"Open Data"})]}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:x.map(j=>{const H=Object.keys(m).filter(U=>m[U]===j.varName),J=[];return["top","bottom","left","right"].forEach(U=>{b.slots[U]===j.varName&&J.push({key:`mark-${U}`,label:`Label ${U[0].toUpperCase()+U.slice(1)}`,onRemove:()=>C(ge=>({...ge,slots:{...ge.slots,[U]:null}}))}),B.slots[U]===j.varName&&J.push({key:`col-${U}`,label:`Label ${U[0].toUpperCase()+U.slice(1)}`,onRemove:()=>T(ge=>({...ge,slots:{...ge.slots,[U]:null}}))})}),u.jsxs("div",{children:[u.jsx(zf,{label:j.label,type:j.type,varName:j.varName}),(H.length>0||J.length>0)&&u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"6px"},children:[H.map(U=>u.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"3px",background:"#EBF3FF",border:"1px solid #A8CAFF",borderRadius:"5px",padding:"3px 5px 3px 8px",fontSize:"10px",color:"#007AFF",fontWeight:"600"},children:[u.jsx("span",{style:{color:"#60A0EE",marginRight:"2px",fontWeight:"500"},children:Wf[U]}),Jf[U],u.jsx("button",{onClick:()=>Zt(U,null),style:{background:"none",border:"none",cursor:"pointer",color:"#60A0EE",padding:"0 1px",fontSize:"13px",lineHeight:1,fontFamily:"inherit"},children:"×"})]},U)),J.map(U=>u.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"3px",background:"#EBF3FF",border:"1px solid #A8CAFF",borderRadius:"5px",padding:"3px 5px 3px 8px",fontSize:"10px",color:"#007AFF",fontWeight:"600"},children:[U.label,u.jsx("button",{onClick:U.onRemove,style:{background:"none",border:"none",cursor:"pointer",color:"#60A0EE",padding:"0 1px",fontSize:"13px",lineHeight:1,fontFamily:"inherit"},children:"×"})]},U.key))]})]},j.varName)})})]})]}),ii==="save"&&u.jsx(kf,{initialName:Ge??"",onSave:ai,onClose:()=>qe("none")}),Q&&u.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999},onClick:()=>W(!1),children:u.jsxs("div",{style:{background:"#fff",borderRadius:"14px",width:"340px",maxWidth:"90vw",maxHeight:"80vh",display:"flex",flexDirection:"column",boxShadow:"0 16px 48px rgba(0,0,0,0.28)",overflow:"hidden",fontFamily:"inherit"},onClick:j=>j.stopPropagation(),children:[u.jsxs("div",{style:{padding:"14px 20px",borderBottom:"1px solid #E5E5EA",fontSize:"15px",fontWeight:"700",color:"#1D1D1F",flexShrink:0,display:"flex",justifyContent:"space-between",alignItems:"center"},children:["Data Panel",u.jsx("button",{onClick:()=>W(!1),style:{background:"none",border:"none",fontSize:"18px",color:"#AEAEB2",cursor:"pointer",lineHeight:1,padding:"0 2px"},children:"×"})]}),u.jsx("div",{style:{overflowY:"auto",flex:1},children:u.jsx(Nf,{layers:i,onChange:a,onDatasetChange:A,selectedDataset:y})})]})}),ii==="load"&&u.jsx(Of,{saves:hs(),onLoad:oa,onDelete:aa,onClose:()=>qe("none"),currentName:Ge??"scene",currentData:Nn()}),ne&&u.jsx(Uf,{x:ne.x,y:ne.y,varName:ne.varName,varType:ne.varType,level:n,col1Arrangement:l.arrangement,onBind:Zt,onColorBind:ea,onBindLabel:ta,onClose:()=>de(null)})]})}const xs="https://massager-unshaved-chasing.ngrok-free.dev";function Vf(){const n=tl();return E.useEffect(()=>{n.refresh().fit()},[n]),null}function Qf({url:n}){const e=Xt(Xs,n),t=E.useRef([]),s=E.useRef(0);return E.useEffect(()=>{const i=[];if(e.scene.updateWorldMatrix(!0,!0),e.scene.traverse(r=>{r.isMesh&&i.push(r)}),!i.length)return;const a=new _;i.forEach(r=>{const o=new _;r.getWorldPosition(o),a.add(o)}),a.divideScalar(i.length),t.current=i.map(r=>{const o=new _;r.getWorldPosition(o);const l=o.clone().sub(a);return l.length()<.001&&l.set(Math.random()-.5,Math.random()-.5,Math.random()-.5),l.normalize(),{mesh:r,origPos:o.clone(),direction:l}}),s.current=0},[e]),Ks((i,a)=>{s.current+=a;const r=(Math.sin(s.current*1-Math.PI/2)+1)/2;t.current.forEach(({mesh:o,origPos:l,direction:d})=>{o.position.copy(l).addScaledVector(d,r*1.5)})}),u.jsxs(el,{fit:!0,clip:!0,observe:!0,margin:1.4,children:[u.jsx(Vf,{}),u.jsx("primitive",{object:e.scene})]})}function Yf({data:n,center:e,impulse:t}){const s=E.useRef(null);return E.useEffect(()=>{if(!s.current)return;const i=n.position.clone().sub(e);i.length()<.001&&i.set(Math.random()-.5,.5,Math.random()-.5),i.normalize().multiplyScalar(t),s.current.applyImpulse({x:i.x,y:i.y+t*.3,z:i.z},!0),s.current.applyTorqueImpulse({x:(Math.random()-.5)*t*.3,y:(Math.random()-.5)*t*.3,z:(Math.random()-.5)*t*.3},!0)},[]),u.jsx(Dn,{ref:s,position:n.position.toArray(),quaternion:[n.quaternion.x,n.quaternion.y,n.quaternion.z,n.quaternion.w],colliders:"hull",restitution:.3,friction:.8,linearDamping:.1,angularDamping:.15,children:u.jsx("mesh",{geometry:n.geometry,material:n.material})})}function qf({url:n,impulse:e}){const t=Xt(Xs,n),{fragments:s,center:i}=E.useMemo(()=>{const a=[];t.scene.updateWorldMatrix(!0,!0),t.scene.traverse(o=>{if(!o.isMesh)return;const l=o,d=new _,h=new Pn;l.getWorldPosition(d),l.getWorldQuaternion(h),a.push({geometry:l.geometry,material:l.material,position:d,quaternion:h})});const r=new _;return a.forEach(o=>r.add(o.position)),a.length&&r.divideScalar(a.length),{fragments:a,center:r}},[t]);return u.jsxs(u.Fragment,{children:[u.jsx(Dn,{type:"fixed",position:[0,-3,0],children:u.jsx(yr,{args:[15,.1,15]})}),u.jsxs("mesh",{position:[0,-3,0],rotation:[-Math.PI/2,0,0],children:[u.jsx("planeGeometry",{args:[30,30]}),u.jsx("meshStandardMaterial",{color:"#1a1a1a",roughness:.9})]}),s.map((a,r)=>u.jsx(Yf,{data:a,center:i,impulse:e},r))]})}function De({label:n,children:e}){return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[u.jsx("div",{style:{fontSize:11,color:"#888"},children:n}),e]})}function lr({active:n,onClick:e,children:t}){return u.jsx("button",{onClick:e,style:{flex:1,padding:"8px 0",fontSize:12,fontWeight:600,background:n?"#5E5CE6":"#1a1a1a",color:n?"#fff":"#666",border:n?"none":"1px solid #333",borderRadius:6,cursor:"pointer"},children:t})}function Zf(){const[n,e]=E.useState(null),[t,s]=E.useState("idle"),[i,a]=E.useState(""),[r,o]=E.useState("exploded"),[l,d]=E.useState(0),[h,c]=E.useState(""),[f,p]=E.useState(8),[y,A]=E.useState(.5),[g,x]=E.useState("random"),[m,v]=E.useState("bisect"),[b,C]=E.useState(30),[B,T]=E.useState(0),[F,S]=E.useState(1.5),D=E.useRef(null),w=E.useCallback(G=>{if(!G.name.endsWith(".glb")&&!G.name.endsWith(".gltf")){a("Please upload a .glb or .gltf file");return}D.current=G,c(G.name),e(null),s("idle"),a("")},[]),M=E.useCallback(G=>{G.preventDefault();const O=G.dataTransfer.files[0];O&&w(O)},[w]),R=E.useCallback(G=>{var N;const O=(N=G.target.files)==null?void 0:N[0];O&&w(O)},[w]),I=E.useCallback(async G=>{if(G==="model"&&!D.current){a("Drop a GLB first");return}s("loading"),a("Blender is running…"),n&&URL.revokeObjectURL(n),e(null);try{let O;const N=`pieces=${f}&cutSpread=${y}&cutStrategy=${g}&adaptivity=${B}&fractureMethod=${m}`;if(G==="sphere")O=await Kn(`${xs}/shatter/sphere?${N}`);else if(G==="cube")O=await Kn(`${xs}/shatter/cube?${N}`);else{const W=new FormData;W.append("model",D.current),W.append("pieces",f.toString()),W.append("cutSpread",y.toString()),W.append("cutStrategy",g),W.append("fractureMethod",m),W.append("voxelDiv",b.toString()),W.append("adaptivity",B.toString()),O=await Kn(`${xs}/shatter`,{method:"POST",body:W})}if(!O.ok){const W=await O.json().catch(()=>({error:O.statusText}));throw new Error(W.error??O.statusText)}const Q=await O.blob();e(URL.createObjectURL(Q)),s("done"),a("")}catch(O){s("error"),a(O instanceof Error?O.message:"Unknown error")}},[f,y,b,n]);E.useEffect(()=>()=>{n&&URL.revokeObjectURL(n)},[n]);const P={width:"100%",accentColor:"#5E5CE6"},L=t==="loading";return u.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0f0f0f",color:"#e0e0e0"},children:[u.jsxs("div",{style:{width:260,padding:20,display:"flex",flexDirection:"column",gap:16,borderRight:"1px solid #222",overflowY:"auto"},children:[u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[u.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Shatter Lab"}),u.jsxs("div",{style:{display:"flex",gap:12},children:[u.jsx("a",{href:"/deform",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Deform"}),u.jsx("a",{href:"/particles",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Particles"}),u.jsx("a",{href:"/fluid",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Fluid"})]})]}),u.jsx(De,{label:"View Mode",children:u.jsxs("div",{style:{display:"flex",gap:6},children:[u.jsx(lr,{active:r==="exploded",onClick:()=>o("exploded"),children:"Exploded"}),u.jsx(lr,{active:r==="physics",onClick:()=>o("physics"),children:"Physics"})]})}),u.jsxs(De,{label:"Model (GLB)",children:[u.jsx("div",{onDrop:M,onDragOver:G=>G.preventDefault(),onClick:()=>document.getElementById("glb-input").click(),style:{border:"2px dashed #333",borderRadius:8,padding:"14px 10px",textAlign:"center",cursor:"pointer",fontSize:12,color:"#555"},children:h||"Drop GLB or click to browse"}),u.jsx("input",{id:"glb-input",type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:R})]}),u.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[u.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Fragment"}),u.jsxs(De,{label:"Fracture Method",children:[u.jsx("div",{style:{display:"flex",gap:6},children:["bisect","voronoi"].map(G=>u.jsx("button",{onClick:()=>v(G),style:{flex:1,padding:"6px 0",fontSize:11,borderRadius:5,background:m===G?"#2a2a4a":"#1a1a1a",color:m===G?"#9999ff":"#555",border:m===G?"1px solid #5E5CE6":"1px solid #2a2a2a",cursor:"pointer",textTransform:"capitalize"},children:G},G))}),u.jsx("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:m==="voronoi"?"Natural crack patterns. Slower — best ≤ 50 pieces.":"Sequential plane cuts. Fast. Good for large counts."})]}),u.jsx(De,{label:`Pieces: ${f}`,children:u.jsx("input",{type:"range",min:2,max:500,step:1,value:f,onChange:G=>p(Number(G.target.value)),style:P})}),u.jsxs(De,{label:`Size Variation: ${y.toFixed(2)}`,children:[u.jsx("input",{type:"range",min:.05,max:1,step:.05,value:y,onChange:G=>A(Number(G.target.value)),style:P}),u.jsxs("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:["0 = equal-sized pieces (cuts through centre)",u.jsx("br",{}),"1 = uneven pieces (cuts placed randomly)"]})]}),u.jsxs(De,{label:"Cut Strategy",children:[u.jsx("div",{style:{display:"flex",gap:6},children:["random","largest"].map(G=>u.jsx("button",{onClick:()=>x(G),style:{flex:1,padding:"6px 0",fontSize:11,borderRadius:5,background:g===G?"#2a2a4a":"#1a1a1a",color:g===G?"#9999ff":"#555",border:g===G?"1px solid #5E5CE6":"1px solid #2a2a2a",cursor:"pointer"},children:G==="random"?"Random":"Largest First"},G))}),u.jsx("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:"Largest First → more uniform sizes"})]})]}),u.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[u.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Remesh — file uploads only"}),u.jsxs(De,{label:`Voxel Detail: ${b}`,children:[u.jsx("input",{type:"range",min:10,max:60,step:5,value:b,onChange:G=>C(Number(G.target.value)),style:P}),u.jsx("div",{style:{fontSize:10,color:"#444"},children:"Higher = sharper cuts, slower"})]}),u.jsxs(De,{label:`Adaptivity: ${B.toFixed(2)}`,children:[u.jsx("input",{type:"range",min:0,max:1,step:.05,value:B,onChange:G=>T(Number(G.target.value)),style:P}),u.jsx("div",{style:{fontSize:10,color:"#444"},children:"Reduces polygons in flat areas"})]})]}),r==="physics"&&u.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[u.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Physics"}),u.jsxs(De,{label:`Impulse: ${F.toFixed(1)}`,children:[u.jsx("input",{type:"range",min:0,max:5,step:.1,value:F,onChange:G=>S(Number(G.target.value)),style:P}),u.jsx("div",{style:{fontSize:10,color:"#444"},children:"How hard pieces fly apart on start"})]})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[u.jsx("button",{onClick:()=>I("model"),disabled:L,style:{background:L?"#222":"#5E5CE6",color:L?"#555":"#fff",border:"none",borderRadius:8,padding:"11px 0",fontSize:13,fontWeight:600,cursor:L?"wait":"pointer"},children:L?"Running…":"⚡ Shatter Model"}),u.jsxs("div",{style:{display:"flex",gap:8},children:[u.jsx("button",{onClick:()=>I("sphere"),disabled:L,style:{flex:1,background:"#1a1a1a",color:L?"#444":"#aaa",border:"1px solid #2a2a2a",borderRadius:8,padding:"9px 0",fontSize:12,cursor:L?"wait":"pointer"},children:"🔵 Sphere"}),u.jsx("button",{onClick:()=>I("cube"),disabled:L,style:{flex:1,background:"#1a1a1a",color:L?"#444":"#aaa",border:"1px solid #2a2a2a",borderRadius:8,padding:"9px 0",fontSize:12,cursor:L?"wait":"pointer"},children:"◻ Cube"})]}),r==="physics"&&n&&u.jsx("button",{onClick:()=>d(G=>G+1),style:{background:"#1a1a2e",color:"#5E5CE6",border:"1px solid #5E5CE6",borderRadius:8,padding:"9px 0",fontSize:12,cursor:"pointer"},children:"↺ Restart Simulation"})]}),(i||L)&&u.jsx("div",{style:{fontSize:12,padding:10,borderRadius:6,lineHeight:1.5,background:t==="error"?"#2a0f0f":"#111",color:t==="error"?"#ff6b6b":"#666"},children:L?"Blender is running… (10–30 s)":i})]}),u.jsx("div",{style:{flex:1},children:n?u.jsxs(Gn,{camera:{position:[0,1,5],fov:50},style:{background:"#111"},children:[u.jsx("ambientLight",{intensity:.5}),u.jsx("directionalLight",{position:[5,8,5],intensity:1.2,castShadow:!0}),u.jsx(Ws,{preset:"city"}),r==="exploded"&&u.jsx(E.Suspense,{fallback:null,children:u.jsx(Qf,{url:n})}),r==="physics"&&u.jsx(vr,{gravity:[0,-9.81,0],timeStep:"vary",children:u.jsx(E.Suspense,{fallback:null,children:u.jsx(qf,{url:n,impulse:F})})},l),u.jsx(jn,{})]}):u.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#2a2a2a",fontSize:13},children:L?u.jsxs("div",{style:{textAlign:"center",color:"#444"},children:[u.jsx("div",{style:{fontSize:28,marginBottom:10},children:"⏳"}),"Blender is fracturing…"]}):u.jsxs("div",{style:{textAlign:"center"},children:[u.jsx("div",{style:{fontSize:28,marginBottom:10},children:"💥"}),"Choose a shape and hit Shatter"]})})})]})}const As={Flag:{pinMode:"flag",gravity:2,windX:.5,windZ:5,windTurb:3,damping:.99,constraintIters:8},Curtain:{pinMode:"curtain",gravity:3,windX:0,windZ:2,windTurb:2,damping:.99,constraintIters:8},Sheet:{pinMode:"sheet",gravity:2.5,windX:.5,windZ:2.5,windTurb:2.5,damping:.99,constraintIters:8},Still:{pinMode:"curtain",gravity:4,windX:0,windZ:0,windTurb:0,damping:.995,constraintIters:12},Hammock:{pinMode:"hammock",gravity:6,windX:0,windZ:.5,windTurb:.5,damping:.995,constraintIters:12}};function $f(n,e,t,s,i){const a=i==="hammock",r=new Float32Array(n*e*3),o=new Float32Array(n*e*2);for(let h=0;h<e;h++)for(let c=0;c<n;c++){const f=h*n+c,p=c/(n-1),y=h/(e-1);a?(r[f*3]=(p-.5)*t,r[f*3+1]=0,r[f*3+2]=(y-.5)*s):(r[f*3]=(p-.5)*t,r[f*3+1]=(.5-y)*s,r[f*3+2]=0),o[f*2]=p,o[f*2+1]=1-y}const l=[];for(let h=0;h<e-1;h++)for(let c=0;c<n-1;c++){const f=h*n+c,p=f+1,y=f+n,A=y+1;l.push(f,y,p,p,y,A)}const d=new Fe;return d.setAttribute("position",new q(r,3)),d.setAttribute("uv",new q(o,2)),d.setIndex(l),d.computeVertexNormals(),d}function eh(n,e,t,s,i){const a=i==="hammock",r=n*e,o=new Float32Array(r*3),l=new Float32Array(r*3),d=new Uint8Array(r),h=new Float32Array(r*3);for(let A=0;A<e;A++)for(let g=0;g<n;g++){const x=A*n+g,m=g/(n-1),v=A/(e-1);a?(o[x*3]=(m-.5)*t,o[x*3+1]=0,o[x*3+2]=(v-.5)*s):(o[x*3]=(m-.5)*t,o[x*3+1]=(.5-v)*s,o[x*3+2]=0),l[x*3]=o[x*3],l[x*3+1]=o[x*3+1],l[x*3+2]=o[x*3+2]}switch(i){case"flag":for(let A=0;A<e;A++)d[A*n]=1;break;case"curtain":for(let A=0;A<n;A++)d[A]=1;break;case"sheet":d[0]=1,d[n-1]=1;break;case"hammock":d[0]=1,d[n-1]=1,d[(e-1)*n]=1,d[(e-1)*n+n-1]=1;break}for(let A=0;A<r;A++)h[A*3]=o[A*3],h[A*3+1]=o[A*3+1],h[A*3+2]=o[A*3+2];const c=t/(n-1),f=s/(e-1),p=Math.hypot(c,f),y=[];for(let A=0;A<e;A++)for(let g=0;g<n;g++){const x=A*n+g;g<n-1&&y.push({a:x,b:x+1,r:c}),A<e-1&&y.push({a:x,b:x+n,r:f}),g<n-1&&A<e-1&&(y.push({a:x,b:x+n+1,r:p}),y.push({a:x+1,b:x+n,r:p})),g<n-2&&y.push({a:x,b:x+2,r:c*2}),A<e-2&&y.push({a:x,b:x+n*2,r:f*2})}return{pos:o,prev:l,pinned:d,init:h,springs:y,N:n,M:e}}function th({cols:n,rows:e,cW:t,cH:s,pinMode:i,paramsRef:a,color:r,wireframe:o}){const l=E.useMemo(()=>$f(n,e,t,s,i),[]),d=E.useMemo(()=>eh(n,e,t,s,i),[]),h=E.useRef(null);return Ks(({clock:c},f)=>{if(!h.current)return;const{gravity:p,windZ:y,windX:A,windTurb:g,damping:x,constraintIters:m}=a.current,{pos:v,prev:b,pinned:C,init:B,springs:T,N:F,M:S}=d,D=c.getElapsedTime(),w=5,M=Math.min(f,.033)/w;for(let I=0;I<w;I++){for(let P=0;P<F*S;P++){if(C[P])continue;const L=P*3,G=v[L],O=v[L+1],N=v[L+2];let Q=(G-b[L])*x,W=(O-b[L+1])*x,ne=(N-b[L+2])*x;W-=p*M*M;const de=Math.sin(G*.8+D*.9)*Math.cos(N*.5+D*.6)*g,we=Math.sin(N*.7+D*.7)*Math.cos(O*.4+D*.5)*g;Q+=(A+de)*M*M,ne+=(y+we)*M*M,b[L]=G,b[L+1]=O,b[L+2]=N,v[L]=G+Q,v[L+1]=O+W,v[L+2]=N+ne,v[L+1]<-3.5&&(v[L+1]=-3.5,b[L+1]=-3.5)}for(let P=0;P<m;P++)for(const{a:L,b:G,r:O}of T){const N=L*3,Q=G*3,W=v[Q]-v[N],ne=v[Q+1]-v[N+1],de=v[Q+2]-v[N+2],we=Math.sqrt(W*W+ne*ne+de*de)||1e-6,Te=(we-O)/we*.5;C[L]||(v[N]+=W*Te,v[N+1]+=ne*Te,v[N+2]+=de*Te),C[G]||(v[Q]-=W*Te,v[Q+1]-=ne*Te,v[Q+2]-=de*Te)}for(let P=0;P<F*S;P++)C[P]&&(v[P*3]=B[P*3],v[P*3+1]=B[P*3+1],v[P*3+2]=B[P*3+2])}const R=l.attributes.position;for(let I=0;I<F*S;I++)R.array[I*3]=v[I*3],R.array[I*3+1]=v[I*3+1],R.array[I*3+2]=v[I*3+2];R.needsUpdate=!0,l.computeVertexNormals()}),u.jsx("mesh",{ref:h,geometry:l,castShadow:!0,receiveShadow:!0,children:u.jsx("meshStandardMaterial",{color:r,side:Ln,roughness:.8,metalness:0,wireframe:o})})}function nh({cols:n,rows:e,cW:t,cH:s,pinMode:i}){const a=E.useMemo(()=>{const r=n,o=e,l=i==="hammock",d=(h,c)=>{const f=h/(r-1),p=c/(o-1);return l?[(f-.5)*t,0,(p-.5)*s]:[(f-.5)*t,(.5-p)*s,0]};switch(i){case"flag":return Array.from({length:o},(h,c)=>d(0,c));case"curtain":return Array.from({length:r},(h,c)=>d(c,0));case"sheet":return[d(0,0),d(r-1,0)];case"hammock":return[d(0,0),d(r-1,0),d(0,o-1),d(r-1,o-1)]}},[n,e,t,s,i]);return u.jsx(u.Fragment,{children:a.map((r,o)=>u.jsxs("mesh",{position:r,children:[u.jsx("sphereGeometry",{args:[.06,8,8]}),u.jsx("meshStandardMaterial",{color:"#ff4455",emissive:"#ff2233",emissiveIntensity:.6})]},o))})}function Gt({label:n,children:e}){return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[u.jsx("div",{style:{fontSize:10,color:"#555",letterSpacing:.4},children:n}),e]})}function sh({active:n,onClick:e,children:t,small:s}){return u.jsx("button",{onClick:e,style:{flex:1,padding:s?"5px 0":"7px 0",fontSize:s?10:11,borderRadius:5,cursor:"pointer",background:n?"#2a2a4a":"#151520",color:n?"#9999ff":"#555",border:n?"1px solid #5E5CE6":"1px solid #222"},children:t})}function cr({on:n,onClick:e,label:t}){return u.jsxs("div",{onClick:e,style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer",userSelect:"none"},children:[u.jsx("div",{style:{width:28,height:16,borderRadius:8,position:"relative",background:n?"#5E5CE6":"#1e1e2a",border:"1px solid #333",transition:"background .2s"},children:u.jsx("div",{style:{position:"absolute",top:2,left:n?11:2,width:10,height:10,borderRadius:"50%",background:n?"#fff":"#444",transition:"left .2s"}})}),u.jsx("span",{style:{fontSize:11,color:n?"#9999ff":"#555"},children:t})]})}const ih=[["Gravity","gravity",0,10,.1],["Wind forward","windZ",-3,10,.1],["Wind sideways","windX",-5,5,.1],["Turbulence","windTurb",0,8,.1],["Damping","damping",.95,1,.001],["Stiffness","constraintIters",1,20,1]];function rh(){const[n,e]=E.useState(22),[t,s]=E.useState(22),[i,a]=E.useState(3),[r,o]=E.useState(3),[l,d]=E.useState("curtain"),[h,c]=E.useState(0),[f,p]=E.useState("#5588cc"),[y,A]=E.useState(!1),[g,x]=E.useState(!0),[m,v]=E.useState(As.Curtain),b=E.useRef(m);E.useEffect(()=>{b.current=m},[m]);const C=w=>M=>v(R=>({...R,[w]:Number(M.target.value)})),B=w=>{const M=As[w];d(M.pinMode),v({gravity:M.gravity,windX:M.windX,windZ:M.windZ,windTurb:M.windTurb,damping:M.damping,constraintIters:M.constraintIters}),c(R=>R+1)},T={width:"100%",accentColor:"#5E5CE6"},F={borderTop:"1px solid #1a1a2a",paddingTop:12,display:"flex",flexDirection:"column",gap:8},S={fontSize:10,color:"#444",textTransform:"uppercase",letterSpacing:1},D=`${n}-${t}-${i}-${r}-${l}-${h}`;return u.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0a0a12",color:"#ddd"},children:[u.jsxs("div",{style:{width:268,padding:20,display:"flex",flexDirection:"column",gap:14,borderRight:"1px solid #1a1a2a",overflowY:"auto"},children:[u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[u.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Soft Lab"}),u.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[u.jsx("a",{href:"/shatter",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Shatter"}),u.jsx("a",{href:"/deform",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Deform"}),u.jsx("a",{href:"/particles",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Particles"}),u.jsx("a",{href:"/ripple",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Ripple"}),u.jsx("a",{href:"/jelly",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Jelly"})]})]}),u.jsxs("div",{style:F,children:[u.jsx("div",{style:S,children:"Presets"}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:Object.keys(As).map(w=>u.jsx("button",{onClick:()=>B(w),style:{padding:"5px 10px",fontSize:10,borderRadius:5,cursor:"pointer",background:"#151520",color:"#777",border:"1px solid #222"},children:w},w))}),u.jsx("button",{onClick:()=>c(w=>w+1),style:{padding:"7px",fontSize:11,borderRadius:5,cursor:"pointer",background:"#151520",color:"#555",border:"1px solid #222"},children:"↺ Reset cloth"})]}),u.jsxs("div",{style:F,children:[u.jsx("div",{style:S,children:"Cloth"}),u.jsx(Gt,{label:`Resolution: ${n}×${t}`,children:u.jsx("input",{type:"range",min:8,max:40,step:1,value:n,onChange:w=>{const M=Number(w.target.value);e(M),s(M)},style:T})}),u.jsx(Gt,{label:`Width: ${i.toFixed(1)}`,children:u.jsx("input",{type:"range",min:1,max:6,step:.1,value:i,onChange:w=>a(Number(w.target.value)),style:T})}),u.jsx(Gt,{label:`Height: ${r.toFixed(1)}`,children:u.jsx("input",{type:"range",min:1,max:6,step:.1,value:r,onChange:w=>o(Number(w.target.value)),style:T})})]}),u.jsxs("div",{style:F,children:[u.jsx("div",{style:S,children:"Pin mode"}),u.jsx("div",{style:{display:"flex",gap:5},children:["flag","curtain","sheet","hammock"].map(w=>u.jsx(sh,{small:!0,active:l===w,onClick:()=>{d(w),c(M=>M+1)},children:w[0].toUpperCase()+w.slice(1)},w))})]}),u.jsxs("div",{style:F,children:[u.jsx("div",{style:S,children:"Simulation"}),ih.map(([w,M,R,I,P])=>u.jsx(Gt,{label:`${w}: ${M==="constraintIters"?m[M].toFixed(0):M==="damping"?m[M].toFixed(3):m[M].toFixed(2)}`,children:u.jsx("input",{type:"range",min:R,max:I,step:P,value:m[M],onChange:C(M),style:T})},M))]}),u.jsxs("div",{style:F,children:[u.jsx("div",{style:S,children:"Rendering"}),u.jsx(Gt,{label:"Color",children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("input",{type:"color",value:f,onChange:w=>p(w.target.value),style:{width:32,height:22,border:"none",background:"none",cursor:"pointer",padding:0}}),u.jsx("span",{style:{fontSize:10,color:"#555"},children:f})]})}),u.jsx(cr,{on:y,onClick:()=>A(w=>!w),label:"Wireframe"}),u.jsx(cr,{on:g,onClick:()=>x(w=>!w),label:"Show pins"})]})]}),u.jsxs(Gn,{shadows:!0,camera:{position:[0,.5,5.5],fov:45},gl:{antialias:!0,toneMapping:Js,toneMappingExposure:1},style:{flex:1,background:"#04040c"},children:[u.jsx("ambientLight",{intensity:.35}),u.jsx("directionalLight",{position:[4,8,4],intensity:1.8,castShadow:!0,"shadow-mapSize":[1024,1024]}),u.jsx("pointLight",{position:[-4,1,-2],intensity:.6,color:"#4466ff"}),u.jsx("pointLight",{position:[3,-1,3],intensity:.3,color:"#ff8844"}),u.jsx(jn,{makeDefault:!0,target:[0,0,0]}),u.jsx(th,{cols:n,rows:t,cW:i,cH:r,pinMode:l,paramsRef:b,color:f,wireframe:y},D),g&&u.jsx(nh,{cols:n,rows:t,cW:i,cH:r,pinMode:l},`pins-${D}`),u.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-3,0],receiveShadow:!0,children:[u.jsx("planeGeometry",{args:[14,14]}),u.jsx("meshStandardMaterial",{color:"#09090f",roughness:.95})]})]})]})}const k=90,Ne=10;function oh({waveSpeed:n,damping:e,disturbAmp:t,modelUrl:s,resetKey:i}){const a=E.useRef(new Float32Array(k*k)),r=E.useRef(new Float32Array(k*k)),o=E.useRef(null),[l,d]=E.useState(null),h=E.useMemo(()=>{const f=new nl(Ne,Ne,k-1,k-1);return f.rotateX(-Math.PI/2),f},[]);E.useEffect(()=>{a.current.fill(0),r.current.fill(0)},[i]),E.useEffect(()=>{if(!s){d(null);return}new Xs().load(s,p=>{const y=p.scene,A=new ae().setFromObject(y),g=A.getSize(new _);y.scale.setScalar(.9/Math.max(g.x,g.y,g.z)),A.setFromObject(y),y.position.sub(A.getCenter(new _)),y.position.y=.5;const x=Math.floor(k/2),m=Math.floor(k/2),v=8;for(let b=-v;b<=v;b++)for(let C=-v;C<=v;C++){const B=x+C,T=m+b;if(B>=0&&B<k&&T>=0&&T<k){const F=Math.sqrt(C*C+b*b);F<=v&&(a.current[T*k+B]-=.4*(1-F/v))}}d(y)})},[s]);const c=E.useCallback((f,p,y)=>{const A=Math.round((f/Ne+.5)*(k-1)),g=Math.round((p/Ne+.5)*(k-1)),x=4;for(let m=-x;m<=x;m++)for(let v=-x;v<=x;v++){const b=A+v,C=g+m;if(b>=0&&b<k&&C>=0&&C<k){const B=Math.sqrt(v*v+m*m);B<=x&&(a.current[C*k+b]-=y*(1-B/x))}}},[]);return Ks(()=>{const f=a.current,p=r.current,y=Math.min(n,.49),A=7;for(let m=1;m<k-1;m++)for(let v=1;v<k-1;v++){const b=m*k+v,C=f[(m-1)*k+v]+f[(m+1)*k+v]+f[m*k+v-1]+f[m*k+v+1]-4*f[b];p[b]=(p[b]+y*C)*e}for(let m=0;m<k*k;m++)f[m]+=p[m];for(let m=0;m<k;m++)for(let v=0;v<k;v++){const b=Math.min(v,m,k-1-v,k-1-m);if(b<A){const C=(b/A)**2,B=Nt.lerp(.75,1,C),T=m*k+v;f[T]*=B,p[T]*=B}}const g=h.attributes.position;for(let m=0;m<k;m++)for(let v=0;v<k;v++)g.setY(m*k+v,f[m*k+v]);g.needsUpdate=!0,h.computeVertexNormals();const x=o.current;if(x){const m=Math.round((x.position.x/Ne+.5)*(k-1)),v=Math.round((x.position.z/Ne+.5)*(k-1));if(m>=0&&m<k&&v>=0&&v<k){const b=f[v*k+m];x.position.y=b+.45,x.rotation.x=b*.25,x.rotation.z=b*.15}}}),u.jsxs(u.Fragment,{children:[u.jsx("mesh",{geometry:h,onPointerDown:f=>{f.stopPropagation(),c(f.point.x,f.point.z,t)},onPointerMove:f=>{f.buttons>0&&c(f.point.x,f.point.z,t*.35)},children:u.jsx("meshStandardMaterial",{color:"#0a3060",roughness:.03,metalness:.45,envMapIntensity:3})}),l&&u.jsx("primitive",{ref:o,object:l})]})}function ys({label:n,children:e}){return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[u.jsx("div",{style:{fontSize:10,color:"#555",letterSpacing:.4},children:n}),e]})}function ah(){const[n,e]=E.useState(.32),[t,s]=E.useState(.995),[i,a]=E.useState(.4),[r,o]=E.useState(null),[l,d]=E.useState(""),[h,c]=E.useState(0),f=E.useCallback(g=>{!g.name.endsWith(".glb")&&!g.name.endsWith(".gltf")||(r&&URL.revokeObjectURL(r),o(URL.createObjectURL(g)),d(g.name))},[r]),p={width:"100%",accentColor:"#5E5CE6"},y={borderTop:"1px solid #1a1a2a",paddingTop:12,display:"flex",flexDirection:"column",gap:8},A={fontSize:10,color:"#444",textTransform:"uppercase",letterSpacing:1};return u.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0a0a12",color:"#ddd"},children:[u.jsxs("div",{style:{width:268,padding:20,display:"flex",flexDirection:"column",gap:14,borderRight:"1px solid #1a1a2a",overflowY:"auto"},children:[u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[u.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Ripple Lab"}),u.jsx("div",{style:{fontSize:11,color:"#444",lineHeight:1.5},children:"Click or drag on the water to create waves."}),u.jsxs("div",{style:{display:"flex",gap:10,marginTop:4},children:[u.jsx("a",{href:"/soft",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Cloth"}),u.jsx("a",{href:"/jelly",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Jelly"}),u.jsx("a",{href:"/particles",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Particles"})]})]}),u.jsxs("div",{style:y,children:[u.jsx("div",{style:A,children:"Object on water"}),u.jsx("div",{onDrop:g=>{g.preventDefault();const x=g.dataTransfer.files[0];x&&f(x)},onDragOver:g=>g.preventDefault(),onClick:()=>document.getElementById("glb-ripple").click(),style:{border:`2px dashed ${r?"#5E5CE6":"#222"}`,borderRadius:8,padding:"10px 8px",textAlign:"center",cursor:"pointer",fontSize:11,color:r?"#9999ff":"#444"},children:l||"Drop a GLB — it will float"}),u.jsx("input",{id:"glb-ripple",type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:g=>{var m;const x=(m=g.target.files)==null?void 0:m[0];x&&f(x)}}),r&&u.jsx("button",{onClick:()=>{o(null),d("")},style:{padding:"5px",fontSize:10,borderRadius:5,cursor:"pointer",background:"#151520",color:"#666",border:"1px solid #222"},children:"Remove object"})]}),u.jsxs("div",{style:y,children:[u.jsx("div",{style:A,children:"Simulation"}),u.jsx(ys,{label:`Wave speed: ${n.toFixed(2)}`,children:u.jsx("input",{type:"range",min:.05,max:.48,step:.01,value:n,onChange:g=>e(Number(g.target.value)),style:p})}),u.jsx(ys,{label:`Damping: ${t.toFixed(3)}`,children:u.jsx("input",{type:"range",min:.96,max:.999,step:.001,value:t,onChange:g=>s(Number(g.target.value)),style:p})}),u.jsx(ys,{label:`Disturbance: ${i.toFixed(2)}`,children:u.jsx("input",{type:"range",min:.05,max:1.5,step:.05,value:i,onChange:g=>a(Number(g.target.value)),style:p})})]}),u.jsx("div",{style:y,children:u.jsx("button",{onClick:()=>c(g=>g+1),style:{padding:"8px",fontSize:11,borderRadius:5,cursor:"pointer",background:"#151520",color:"#666",border:"1px solid #222"},children:"↺ Clear water"})})]}),u.jsxs(Gn,{camera:{position:[0,6,8],fov:45},gl:{antialias:!0,toneMapping:Js,toneMappingExposure:1.2},style:{flex:1,background:"#04040c"},children:[u.jsx("ambientLight",{intensity:.3}),u.jsx("directionalLight",{position:[5,8,3],intensity:1.5}),u.jsx(Ws,{preset:"sunset"}),u.jsx(jn,{makeDefault:!0,target:[0,0,0],maxPolarAngle:Math.PI/2.1}),u.jsx(oh,{waveSpeed:n,damping:t,disturbAmp:i,modelUrl:r,resetKey:h}),u.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-.5,0],children:[u.jsx("planeGeometry",{args:[Ne,Ne]}),u.jsx("meshStandardMaterial",{color:"#071830",roughness:.9})]})]})]})}const lh="/phys_tool/".replace(/\/$/,""),Oe=window.location.pathname.slice(lh.length)||"/",ch=Oe==="/lab"?u.jsx(rl,{}):Oe==="/sim"?u.jsx(Zf,{}):Oe==="/shatter"?u.jsx(ol,{}):Oe==="/deform"?u.jsx(al,{}):Oe==="/particles"?u.jsx(ll,{}):Oe==="/soft"?u.jsx(rh,{}):Oe==="/ripple"?u.jsx(ah,{}):Oe==="/fluid"?u.jsx(cl,{}):u.jsx(Xf,{});sl.createRoot(document.getElementById("root")).render(u.jsx(il.StrictMode,{children:ch}));
