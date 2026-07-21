import{j as u,r as E,V as _,S as zs,B as Ns,U as ya,v as mr,M as rt,a as Us,L as Js,b as Nt,F as Xt,c as xe,d as Be,C as $,e as ba,P as va,D as Ca,f as ee,I as Ba,Q as jn,g as Ta,O as Ws,T as Sa,h as Ma,i as Z,k as Fa,l as gr,N as wa,m as Da,n as Ea,o as oe,p as te,R as Ve,q as Ra,s as Ye,t as Ia,u as Kn,w as _a,x as _e,y as Hn,z as We,A as Pa,E as we,G as Ga,H as fi,J as La,K as ja,W as Ha,X as ka,Y as Xn,Z as Ks,_ as Ut,$ as Oa,a0 as za,a1 as Na,a2 as Ua,a3 as Ja,a4 as xr,a5 as Wa,a6 as pi,a7 as hi,a8 as mi,a9 as gi,aa as Rn,ab as Ka,ac as ce,ad as Ar,ae as Xa,af as Va,ag as Vt,ah as yr,ai as Pe,aj as Ht,ak as Jt,al as ve,am as Vn,an as le,ao as Ts,ap as Qa,aq as xi,ar as Ya,as as ne,at as Ss,au as br,av as qa,aw as vr,ax as Tt,ay as Za,az as St,aA as $a,aB as Xs,aC as Fn,aD as Mt,aE as de,aF as el,aG as tl,aH as Cr,aI as Br,aJ as Je,aK as nl,aL as sl,aM as il,aN as rl,aO as Tr,aP as Ai,aQ as he,aR as In,aS as Sr,aT as kn,aU as Vs,aV as Mr,aW as On,aX as Fr,aY as Qs,aZ as Qn,a_ as Ys,a$ as ol,b0 as qs,b1 as al,b2 as ll,b3 as cl,b4 as ul,b5 as dl,b6 as fl,b7 as pl,b8 as hl,b9 as ml}from"./index-sfY9tjlY.js";const gl={mark:{label:"Mark",badge:"L1"},collection1:{label:"Collection",badge:"L2"},collection2:{label:"Collection",badge:"L3"},scene:{label:"Scene",badge:"Env"}},xl={1:["mark","scene"],2:["mark","collection1","scene"],3:["mark","collection1","collection2","scene"]},Yn={padding:"8px 12px",borderRadius:"10px",fontSize:"12px",fontWeight:"500",cursor:"pointer",fontFamily:"inherit",transition:"border-color 0.15s, color 0.15s",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",width:"100%"};function Al({level:n,activeElement:e,onSelectElement:t,onAdvanceLevel:s,onDowngradeLevel:i,decorations:a,activeDecorationId:r,onSelectDecoration:o,onAddDecoration:l,onRemoveDecoration:d}){const f=xl[n];return u.jsxs("div",{style:{padding:"14px 14px 14px",display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsx("div",{style:{paddingTop:"12px"},children:u.jsx("div",{style:{fontSize:"16px",color:"#1D1D1F",fontWeight:"700"},children:"Visualization Hierarchy"})}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:f.map(c=>{const p=gl[c],h=c===e&&r===null;return u.jsxs("button",{onClick:()=>t(c),style:{display:"flex",alignItems:"center",gap:"10px",padding:"9px 12px",width:"100%",textAlign:"left",background:h?"#F2F2F7":"#FAFAFA",border:`1.5px solid ${h?"#1D1D1F":"#E5E5EA"}`,borderRadius:"10px",cursor:"pointer",transition:"border-color 0.15s, background 0.15s",fontFamily:"inherit"},children:[u.jsx("div",{style:{flex:1,minWidth:0},children:u.jsx("div",{style:{fontSize:"12px",color:"#1D1D1F",fontWeight:h?"600":"500",lineHeight:1.2},children:p.label})}),u.jsx("span",{style:{fontSize:"9px",letterSpacing:"0.06em",fontWeight:"500",color:h?"#1D1D1F":"#8E8E93",border:`1px solid ${h?"#1D1D1F":"#D1D1D6"}`,borderRadius:"4px",padding:"1px 5px",flexShrink:0,transition:"color 0.15s, border-color 0.15s"},children:p.badge})]},c)})}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px",paddingTop:"2px"},children:[n<3&&u.jsx("button",{onClick:s,style:{...Yn,background:"transparent",border:"1.5px dashed #C7C7CC",color:"#8E8E93"},children:"+ Add Collection"}),n>1&&u.jsx("button",{onClick:i,style:{...Yn,background:"transparent",border:"1.5px dashed #C7C7CC",color:"#8E8E93"},children:"− Remove Collection"})]}),u.jsxs("div",{style:{borderTop:"1px solid #E5E5EA",paddingTop:"8px",display:"flex",flexDirection:"column",gap:"5px"},children:[u.jsx("div",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600",marginBottom:"2px"},children:"Decorations"}),a.map((c,p)=>{const h=c.id===r;return u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[u.jsxs("button",{onClick:()=>o(c.id),style:{flex:1,display:"flex",alignItems:"center",gap:"8px",padding:"7px 10px",textAlign:"left",background:h?"#F2F2F7":"#FAFAFA",border:`1.5px solid ${h?"#1D1D1F":"#E5E5EA"}`,borderRadius:"8px",cursor:"pointer",fontFamily:"inherit",transition:"border-color 0.15s, background 0.15s"},children:[u.jsxs("span",{style:{fontSize:"12px",color:"#1D1D1F",fontWeight:h?"600":"400",flex:1},children:["Decoration ",p+1]}),u.jsx("span",{style:{fontSize:"9px",color:h?"#1D1D1F":"#8E8E93",border:`1px solid ${h?"#1D1D1F":"#D1D1D6"}`,borderRadius:"4px",padding:"1px 5px"},children:"Dec"})]}),u.jsx("button",{onClick:()=>d(c.id),title:"Remove decoration",style:{background:"none",border:"none",cursor:"pointer",color:"#AEAEB2",fontSize:"16px",lineHeight:1,padding:"4px 6px",flexShrink:0,fontFamily:"inherit"},children:"×"})]},c.id)}),u.jsx("button",{onClick:l,style:{...Yn,background:"transparent",border:"1.5px dashed #C7C7CC",color:"#8E8E93"},children:"+ Add Decoration"})]})]})}const yl="/phys_tool/assets/alien_flower-zZ3bV18x.glb",bl="/phys_tool/assets/apple-eGn8NxlU.glb",vl="/phys_tool/assets/apple1-DKIWFdlj.glb",Cl="/phys_tool/assets/building_05-Dd9WS5y6.glb",Bl="/phys_tool/assets/cigarette-DLVHKG5C.glb",Tl="/phys_tool/assets/clarinet_model_with_annotations-DEVclDem.glb",Sl="/phys_tool/assets/drum-bttmtw-P.glb",Ml="/phys_tool/assets/earth%20(2)-C5XamLcy.glb",Fl="/phys_tool/assets/flowers-Cclll0mT.glb",wl="/phys_tool/assets/game-ready_humpback_whale-CUy_iCmW.glb",Dl="/phys_tool/assets/glass_bowl-ORbZUikN.glb",El="/phys_tool/assets/harp-DcE4JwQ7.glb",Rl="/phys_tool/assets/ikea_glass-BpPWnL-f.glb",Il="/phys_tool/assets/lowpoly_pine_trunk-CHGVICL4.glb",_l="/phys_tool/assets/old_japanese_store__lowpoly-DJHefVd3.glb",Pl="/phys_tool/assets/paper_wad-Dr6Z0joQ.glb",Gl="/phys_tool/assets/plastic_water_bottle-Bu0jSrGO.glb",Ll="/phys_tool/assets/simple_fish_bowl-DqOw7pGz.glb",jl="/phys_tool/assets/slime_rancher_pink_slime--xF-xp-9.glb",Hl="/phys_tool/assets/stradivari_violin-Bcp-R8OH.glb",kl="/phys_tool/assets/trumpet-Dl4BoE_z.glb",Ol="/phys_tool/assets/wild_cherry_tree_trunk_prunus_avium-kTaWeuzU.glb",zl=Object.assign({"./assets/models/alien_flower.glb":yl,"./assets/models/apple.glb":bl,"./assets/models/apple1.glb":vl,"./assets/models/building_05.glb":Cl,"./assets/models/cigarette.glb":Bl,"./assets/models/clarinet_model_with_annotations.glb":Tl,"./assets/models/drum.glb":Sl,"./assets/models/earth (2).glb":Ml,"./assets/models/flowers.glb":Fl,"./assets/models/game-ready_humpback_whale.glb":wl,"./assets/models/glass_bowl.glb":Dl,"./assets/models/harp.glb":El,"./assets/models/ikea_glass.glb":Rl,"./assets/models/lowpoly_pine_trunk.glb":Il,"./assets/models/old_japanese_store__lowpoly.glb":_l,"./assets/models/paper_wad.glb":Pl,"./assets/models/plastic_water_bottle.glb":Gl,"./assets/models/simple_fish_bowl.glb":Ll,"./assets/models/slime_rancher_pink_slime.glb":jl,"./assets/models/stradivari_violin.glb":Hl,"./assets/models/trumpet.glb":kl,"./assets/models/wild_cherry_tree_trunk_prunus_avium.glb":Ol}),kt=Object.entries(zl).map(([n,e])=>({name:n.replace(/^.*\//,"").replace(/\.(glb|gltf)$/i,""),url:e})).sort((n,e)=>n.name.localeCompare(e.name));function qn(n){if(n.shape!=="custom")return n;const e=kt.find(t=>t.name===n.customModelName);return e?{...n,customModelUrl:e.url}:!n.customModelUrl||n.customModelUrl.startsWith("blob:")?{...n,shape:"box",customModelUrl:void 0,customModelHasMat:void 0}:n}const yi={weight:{label:"Weight",type:"numerical"},garbageType:{label:"Garbage Type",type:"categorical"},count:{label:"Count",type:"numerical"}};function Nl(n){return 2*Math.atan(12/n)*180/Math.PI}const at="/phys_tool/",Me={spatial:`${at}assets/icons/spatial.png`,shape:`${at}assets/icons/shape.png`,material:`${at}assets/icons/material.png`,populations:`${at}assets/icons/populations.png`,framing:`${at}assets/icons/framing.png`,labels:`${at}assets/icons/labels.png`};function Ul({children:n}){return u.jsx("span",{style:{fontSize:"10px",color:"#8E8E93",textTransform:"uppercase",letterSpacing:"0.07em",fontWeight:"600"},children:n})}function W({label:n,children:e,right:t}){return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx(Ul,{children:n}),t]}),e]})}function Ms({options:n,value:e,onChange:t}){return u.jsx("div",{style:{display:"flex",background:"#EFEFEF",borderRadius:"8px",padding:"2px",gap:"2px"},children:n.map(s=>{const i=e===s.value;return u.jsx("button",{onClick:()=>t(s.value),style:{flex:1,padding:"5px 4px",background:i?"#FFFFFF":"transparent",border:"none",borderRadius:"6px",boxShadow:i?"0 1px 3px rgba(0,0,0,0.12)":"none",color:i?"#1D1D1F":"#6C6C70",cursor:"pointer",fontSize:"12px",fontWeight:i?"600":"400",transition:"all 0.15s",whiteSpace:"nowrap",fontFamily:"inherit"},children:s.label},s.value)})})}const wr={numerical:{label:"Numerical",type:"numerical"},categorical:{label:"Categorical",type:"categorical"},weight:{label:"Weight",type:"numerical"},garbageType:{label:"Garbage Type",type:"categorical"},count:{label:"Count",type:"numerical"},section:{label:"Section",type:"categorical"}};function Fs({children:n,accepts:e,onDrop:t}){const[s,i]=E.useState(!1),a=e==="any"?["phys-var/numerical","phys-var/categorical"]:[`phys-var/${e}`],r=l=>a.some(d=>l.includes(d)),o=e==="categorical"?"#5E5CE6":"#007AFF";return u.jsx("div",{onDragOver:l=>{r(l.dataTransfer.types)&&(l.preventDefault(),i(!0))},onDragLeave:()=>i(!1),onDrop:l=>{r(l.dataTransfer.types)&&(l.preventDefault(),i(!1),t(l.dataTransfer.getData("phys-var/name")))},style:{borderRadius:"8px",outline:s?`2px dashed ${o}`:"2px dashed transparent",outlineOffset:"2px",transition:"outline 0.1s"},children:n})}function _n({label:n,type:e,onClear:t}){return u.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"#EBF3FF",border:"1px solid #A8CAFF",borderRadius:"7px",padding:"6px 10px",fontSize:"12px",color:"#007AFF",fontWeight:"500"},children:[u.jsxs("span",{children:[e==="numerical"?"#":"◈"," ",n]}),u.jsx("button",{onClick:t,style:{background:"none",border:"none",cursor:"pointer",color:"#60A0EE",padding:"0 0 0 2px",fontSize:"14px",lineHeight:1,fontFamily:"inherit"},children:"×"})]})}const Jl={top:"↑",bottom:"↓",left:"←",right:"→"};function tn({position:n,slot:e,onBind:t,onClear:s}){const[i,a]=E.useState(!1);if(e!==null){const r=wr[e];return u.jsx(_n,{label:r.label,type:r.type,onClear:s})}return u.jsxs("div",{onDragOver:r=>{r.dataTransfer.types.some(l=>l==="phys-var/numerical"||l==="phys-var/categorical")&&(r.preventDefault(),a(!0))},onDragLeave:()=>a(!1),onDrop:r=>{r.dataTransfer.types.some(l=>l==="phys-var/numerical"||l==="phys-var/categorical")&&(r.preventDefault(),a(!1),t(r.dataTransfer.getData("phys-var/name")))},title:`Drag a variable to the ${n} label`,style:{border:`1.5px dashed ${i?"#007AFF":"#D1D1D6"}`,borderRadius:"7px",padding:"4px 8px",fontSize:"10px",color:i?"#007AFF":"#AEAEB2",textAlign:"center",whiteSpace:"nowrap",background:i?"#EBF3FF":"transparent",transition:"all 0.1s",cursor:"default",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px"},children:[u.jsx("span",{children:Jl[n]}),u.jsx("span",{style:{textTransform:"capitalize"},children:n})]})}function Dr({config:n,onChange:e}){function t(s,i){e({...n,slots:{...n.slots,[s]:i}})}return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsx("button",{onClick:()=>e({...n,show:!n.show}),style:{alignSelf:"flex-start",background:n.show?"#EBF3FF":"#F2F2F7",border:`1px solid ${n.show?"#A8CAFF":"#D1D1D6"}`,color:n.show?"#007AFF":"#6C6C70",borderRadius:"6px",padding:"6px 14px",fontSize:"12px",fontWeight:n.show?"600":"400",cursor:"pointer",fontFamily:"inherit",transition:"all 0.15s"},children:n.show?"● Visible":"○ Hidden"}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto 1fr",gridTemplateRows:"auto auto auto",gap:"4px",alignItems:"center",justifyItems:"center"},children:[u.jsx("div",{}),u.jsx(tn,{position:"top",slot:n.slots.top,onBind:s=>t("top",s),onClear:()=>t("top",null)}),u.jsx("div",{}),u.jsx(tn,{position:"left",slot:n.slots.left,onBind:s=>t("left",s),onClear:()=>t("left",null)}),u.jsx("div",{style:{width:"18px",height:"18px",background:"#E5E5EA",borderRadius:"4px",flexShrink:0}}),u.jsx(tn,{position:"right",slot:n.slots.right,onBind:s=>t("right",s),onClear:()=>t("right",null)}),u.jsx("div",{}),u.jsx(tn,{position:"bottom",slot:n.slots.bottom,onBind:s=>t("bottom",s),onClear:()=>t("bottom",null)}),u.jsx("div",{})]})]})}function Fe({icon:n,title:e,open:t=!1,onToggle:s,children:i,empty:a=!1}){return u.jsxs("div",{style:{border:"1px solid #E5E5EA",borderRadius:"10px",overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},children:[u.jsxs("button",{onClick:s,style:{display:"flex",alignItems:"center",gap:"9px",padding:"9px 12px",width:"100%",textAlign:"left",background:"#F8F8FA",border:"none",borderBottom:t&&!a?"1px solid #E5E5EA":"none",cursor:"pointer",fontFamily:"inherit",transition:"background 0.1s"},children:[u.jsx("img",{src:n,alt:e,style:{width:"24px",height:"24px",borderRadius:"6px",flexShrink:0,objectFit:"cover"}}),u.jsx("span",{style:{flex:1,fontSize:"12px",fontWeight:"600",color:"#1D1D1F",lineHeight:1},children:e}),u.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",transition:"transform 0.15s",display:"inline-block",transform:t?"rotate(0deg)":"rotate(-90deg)"},children:"▾"})]}),t&&u.jsx("div",{style:{padding:"12px",background:"#FFFFFF",display:"flex",flexDirection:"column",gap:"12px"},children:a?u.jsx("div",{style:{fontSize:"11px",color:"#C7C7CC",textAlign:"center",padding:"8px 0",fontStyle:"italic"},children:"Coming soon"}):i})]})}function Zs(n,e){const[t,s]=E.useState(n);return E.useEffect(()=>{e!==void 0&&s(e)},[e]),{isOpen:i=>t===i,toggle:i=>s(a=>a===i?"":i)}}function it({label:n,value:e,onChange:t,min:s,max:i,step:a=.1,lockable:r=!1,axisBindings:o,onAxisBind:l}){const[d,f]=E.useState(!1),[c,p]=E.useState(null),h=["x","y","z"];function y(m,x){if(d&&e[m]!==0){const g=x/e[m];t({x:m==="x"?x:parseFloat((e.x*g).toFixed(3)),y:m==="y"?x:parseFloat((e.y*g).toFixed(3)),z:m==="z"?x:parseFloat((e.z*g).toFixed(3))})}else t({...e,[m]:x})}const A=r?u.jsx("button",{onClick:m=>{m.stopPropagation(),f(!d)},title:d?"Unlock proportions":"Lock proportions (scale all axes together)",style:{background:d?"#007AFF":"transparent",border:`1px solid ${d?"#007AFF":"#D1D1D6"}`,borderRadius:"4px",padding:"1px 7px",lineHeight:"16px",cursor:"pointer",fontSize:"10px",color:d?"#fff":"#AEAEB2",fontFamily:"inherit",transition:"all 0.12s"},children:"⛓"}):void 0;return u.jsx(W,{label:n,right:A,children:u.jsx("div",{style:{display:"flex",gap:"5px"},children:h.map(m=>{const x=(o==null?void 0:o[m])??null,g=c===m;if(x!==null&&l){const b=wr[x];return u.jsx("div",{style:{flex:1},children:u.jsxs("div",{style:{display:"flex",alignItems:"stretch",border:`1px solid ${b.type==="numerical"?"#A8CAFF":"#C8A8FF"}`,borderRadius:"6px",overflow:"hidden",background:b.type==="numerical"?"#EBF3FF":"#F3EBFF"},children:[u.jsx("span",{style:{padding:"4px 5px",background:b.type==="numerical"?"#C5DFFF":"#DFC5FF",color:b.type==="numerical"?"#0055CC":"#5500CC",fontSize:"9px",fontWeight:"700",letterSpacing:"0.03em",display:"flex",alignItems:"center",flexShrink:0},children:m.toUpperCase()}),u.jsxs("span",{style:{flex:1,padding:"4px 4px",fontSize:"10px",color:b.type==="numerical"?"#007AFF":"#5E5CE6",fontWeight:"600",display:"flex",alignItems:"center",overflow:"hidden",whiteSpace:"nowrap"},children:[b.type==="numerical"?"#":"◈"," ",b.label]}),u.jsx("button",{onClick:()=>l(m,null),style:{background:"none",border:"none",cursor:"pointer",color:"#AEAEB2",padding:"0 4px",fontSize:"13px",lineHeight:1,fontFamily:"inherit"},children:"×"})]})},m)}return u.jsx("div",{style:{flex:1},onDragOver:b=>{o&&b.dataTransfer.types.includes("phys-var/numerical")&&(b.preventDefault(),p(m))},onDragLeave:()=>p(null),onDrop:b=>{!o||!b.dataTransfer.types.includes("phys-var/numerical")||(b.preventDefault(),p(null),l==null||l(m,b.dataTransfer.getData("phys-var/name")))},children:u.jsxs("div",{style:{display:"flex",alignItems:"stretch",border:`1px solid ${g?"#007AFF":"#D1D1D6"}`,borderRadius:"6px",overflow:"hidden",outline:g?"1px dashed #007AFF":"none",outlineOffset:"1px"},children:[u.jsx("span",{style:{padding:"4px 5px",background:"#E5E5EA",color:"#6C6C70",fontSize:"9px",fontWeight:"700",letterSpacing:"0.03em",display:"flex",alignItems:"center",flexShrink:0},children:m.toUpperCase()}),u.jsx("input",{type:"number",value:e[m],min:s,max:i,step:a,onChange:b=>y(m,Number(b.target.value)),style:{flex:1,minWidth:0,background:"#F2F2F7",border:"none",padding:"4px 5px",fontSize:"11px",color:"#1D1D1F",outline:"none",fontFamily:"monospace",width:"100%"}})]})},m)})})})}const Er={plastic:"Matte diffuse surface",fluid:"Glass-like, clearcoat + iridescence",metal:"Polished — mirrors the HDRI",emissive:"Self-illuminated, glows with color",original:"Use the model's built-in materials"},Rr=["plastic","fluid","metal","emissive"],Wl=[{value:"alignment",label:"Alignment"},{value:"scattering",label:"Scattering"},{value:"stacking",label:"Stacking"},{value:"piling",label:"Piling"}],Kl=[{value:"city",label:"City"},{value:"warehouse",label:"Warehouse"},{value:"sunset",label:"Sunset"},{value:"dawn",label:"Dawn"},{value:"forest",label:"Forest"},{value:"night",label:"Night"},{value:"studio",label:"Studio"},{value:"apartment",label:"Apartment"}];function zn({title:n}){return u.jsx("div",{style:{fontSize:"16px",color:"#1D1D1F",fontWeight:"700"},children:n})}function ws({config:n,onChange:e}){const t=E.useRef(null),s=E.useRef(null),i=n.shape==="custom"&&kt.some(f=>f.name===n.customModelName),a=n.shape==="custom"&&!i,r=n.shape!=="custom"?n.shape:i?`preset:${n.customModelName}`:n.customModelUrl?"__blob__":"box";function o(f){var h;const c=f.target.value;if(c==="__import__"){(h=t.current)==null||h.click();return}if(c==="__blob__")return;if(c.startsWith("preset:")){const y=c.slice(7),A=kt.find(m=>m.name===y);A&&e({shape:"custom",customModelUrl:A.url,customModelHasMat:!0,customModelName:A.name,material:"original"});return}const p=n.material==="original"?"plastic":n.material;e({shape:c,customModelUrl:void 0,customModelHasMat:void 0,customModelName:void 0,material:p})}function l(f){var y;const c=(y=f.target.files)==null?void 0:y[0];if(!c)return;s.current&&URL.revokeObjectURL(s.current);const p=URL.createObjectURL(c);s.current=p;const h=c.name.replace(/\.(glb|gltf)$/i,"");e({shape:"custom",customModelUrl:p,customModelHasMat:!0,customModelName:h,material:"original"}),f.target.value=""}const d={width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"};return u.jsxs(u.Fragment,{children:[u.jsxs("select",{value:r,onChange:o,style:d,children:[u.jsxs("optgroup",{label:"Primitives",children:[u.jsx("option",{value:"box",children:"■  Box"}),u.jsx("option",{value:"sphere",children:"●  Sphere"}),u.jsx("option",{value:"star",children:"★  Star"})]}),kt.length>0&&u.jsx("optgroup",{label:"3D Models",children:kt.map(f=>u.jsx("option",{value:`preset:${f.name}`,children:f.name},f.name))}),u.jsxs("optgroup",{label:"Custom",children:[a&&u.jsxs("option",{value:"__blob__",children:["✎  ",n.customModelName??"Imported file"]}),u.jsx("option",{value:"__import__",children:"↑  Import .glb / .gltf…"})]})]}),u.jsx("input",{ref:t,type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:l})]})}function Xl({config:n,onChange:e,bindings:t,onBind:s,labelConfig:i,onLabelChange:a,colorMode:r,colorGradient:o,onColorGradientChange:l,openSection:d,layers:f,compositionLevel:c}){var y,A;const p=n.shape==="custom"&&n.customModelHasMat?["original","plastic","fluid","metal","emissive"]:Rr,h=Zs("Spatial",d);return u.jsxs(u.Fragment,{children:[u.jsx(zn,{title:"Mark"}),u.jsxs(Fe,{icon:Me.spatial,title:"Spatial",open:h.isOpen("Spatial"),onToggle:()=>h.toggle("Spatial"),children:[u.jsx(it,{label:"Position",value:n.position,onChange:m=>e({...n,position:m}),min:-10,max:10,step:.1}),u.jsx(W,{label:"Scale",children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("input",{type:"range",min:.1,max:10,step:.1,value:n.scale??1,onChange:m=>e({...n,scale:Number(m.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),u.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:[(n.scale??1).toFixed(1),"×"]})]})}),u.jsx(it,{label:"Size",value:n.size,onChange:m=>e({...n,size:m}),min:.1,max:10,step:.1,lockable:!0,axisBindings:{x:t.markSizeX,y:t.markSizeY,z:t.markSizeZ},onAxisBind:(m,x)=>s(m==="x"?"markSizeX":m==="y"?"markSizeY":"markSizeZ",x)}),u.jsx(it,{label:"Orientation",value:n.orientation,onChange:m=>e({...n,orientation:m}),min:-180,max:180,step:1})]}),u.jsx(Fe,{icon:Me.shape,title:"Geometry",open:h.isOpen("Geometry"),onToggle:()=>h.toggle("Geometry"),children:t.markGeometry!==null&&f.length>1?f.map(m=>{var b;const x=(b=n.categoryShapes)==null?void 0:b[m.name],g={shape:(x==null?void 0:x.shape)??n.shape,material:n.material,customModelUrl:x==null?void 0:x.customModelUrl,customModelHasMat:x==null?void 0:x.customModelHasMat,customModelName:x==null?void 0:x.customModelName};return u.jsx(W,{label:m.name,children:u.jsx(ws,{config:g,onChange:v=>e({...n,categoryShapes:{...n.categoryShapes??{},[m.name]:{shape:v.shape??(x==null?void 0:x.shape)??n.shape,customModelUrl:v.customModelUrl,customModelHasMat:v.customModelHasMat,customModelName:v.customModelName}}})})},m.id)}):u.jsx(W,{label:"Shape",children:u.jsx(ws,{config:n,onChange:m=>e({...n,...m})})})}),u.jsxs(Fe,{icon:Me.material,title:"Material",open:h.isOpen("Material"),onToggle:()=>h.toggle("Material"),children:[u.jsxs(W,{label:"Type",children:[u.jsx("select",{value:n.material,onChange:m=>e({...n,material:m.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:p.map(m=>u.jsx("option",{value:m,children:m.charAt(0).toUpperCase()+m.slice(1)},m))}),u.jsx("div",{style:{fontSize:"11px",color:"#AEAEB2",lineHeight:1.5},children:Er[n.material]})]}),u.jsx(W,{label:"Color",children:t.markColor!==null?u.jsxs(u.Fragment,{children:[u.jsx(_n,{label:((y=yi[t.markColor])==null?void 0:y.label)??t.markColor,type:((A=yi[t.markColor])==null?void 0:A.type)??"categorical",onClear:()=>s("markColor",null)}),r==="continuous"&&o&&l&&u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginTop:"8px"},children:[u.jsx("input",{type:"color",value:o.from,onChange:m=>l({...o,from:m.target.value}),style:{width:"32px",height:"28px",border:"1px solid #D1D1D6",borderRadius:"5px",background:"none",cursor:"pointer",padding:"1px"}}),u.jsx("span",{style:{fontSize:"12px",color:"#AEAEB2",fontWeight:"500"},children:"→"}),u.jsx("input",{type:"color",value:o.to,onChange:m=>l({...o,to:m.target.value}),style:{width:"32px",height:"28px",border:"1px solid #D1D1D6",borderRadius:"5px",background:"none",cursor:"pointer",padding:"1px"}}),u.jsx("span",{style:{fontSize:"11px",color:"#8E8E93"},children:"Gradient"})]})]}):u.jsx(Fs,{accepts:"categorical",onDrop:()=>s("markColor","garbageType"),children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"2px"},children:[u.jsx("input",{type:"color",value:n.color,onChange:m=>e({...n,color:m.target.value}),style:{width:"36px",height:"32px",border:"1px solid #D1D1D6",borderRadius:"6px",background:"none",cursor:"pointer",padding:"2px"}}),u.jsx("span",{style:{fontSize:"12px",color:"#8E8E93",fontFamily:"monospace"},children:n.color})]})})})]}),u.jsx(Fe,{icon:Me.labels,title:"Labels",open:h.isOpen("Labels"),onToggle:()=>h.toggle("Labels"),children:u.jsx(Dr,{config:i,onChange:a})})]})}function bi({config:n,onChange:e,collectionLevel:t,bindings:s,onBind:i,labelConfig:a,onLabelChange:r,onReseed:o}){const l=t===2,d=Zs("Groups & Populations");return u.jsxs(u.Fragment,{children:[u.jsx(zn,{title:"Collection"}),u.jsxs(Fe,{icon:Me.populations,title:"Groups & Populations",open:d.isOpen("Groups & Populations"),onToggle:()=>d.toggle("Groups & Populations"),children:[u.jsx(W,{label:"Arrangement",children:u.jsx("select",{value:n.arrangement,onChange:f=>e({...n,arrangement:f.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:Wl.map(f=>u.jsxs("option",{value:f.value,disabled:f.value==="stacking",children:[f.label,f.value==="stacking"?" (coming soon)":""]},f.value))})}),n.arrangement==="alignment"&&u.jsxs(u.Fragment,{children:[u.jsx(W,{label:"Elements",children:(()=>{const f=t===1?"c1AlignCount":"c2AlignCount",c=s[f],p=t===1?Object.values(s).some(y=>y!==null):s.scatterSize!==null,h={weight:{label:"Weight",type:"numerical"},garbageType:{label:"Garbage Type",type:"categorical"},count:{label:"Count",type:"numerical"}};if(c!==null){const y=h[c]??{label:c,type:"numerical"};return u.jsx(_n,{label:y.label,type:y.type,onClear:()=>i(f,null)})}return p?u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",background:"#F2F2F7",border:"1px solid #E5E5EA",borderRadius:"7px",padding:"5px 10px"},children:[u.jsx("span",{style:{fontSize:"12px",color:"#1D1D1F",fontWeight:"600",flex:1},children:n.alignCount}),u.jsx("span",{style:{fontSize:"9px",color:"#AEAEB2",letterSpacing:"0.06em",fontWeight:"600"},children:"DATA"})]}):u.jsx(Fs,{accepts:"numerical",onDrop:()=>i(f,"count"),children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("input",{type:"range",min:2,max:20,step:1,value:n.alignCount,onChange:y=>e({...n,alignCount:Number(y.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),u.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:n.alignCount})]})})})()}),u.jsx(W,{label:"Axis",children:u.jsx(Ms,{options:[{value:"X",label:"→ X axis"},{value:"Y",label:"↑ Y axis"}],value:n.alignAxis,onChange:f=>e({...n,alignAxis:f})})}),u.jsx(W,{label:"Anchor",children:u.jsx(Ms,{options:n.alignAxis==="X"?[{value:"start",label:"↑ Top"},{value:"center",label:"◆ Ctr"},{value:"end",label:"↓ Bottom"}]:[{value:"start",label:"← Left"},{value:"center",label:"◆ Ctr"},{value:"end",label:"→ Right"}],value:n.alignAnchor,onChange:f=>e({...n,alignAnchor:f})})}),u.jsxs(W,{label:"Spacing",children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("input",{type:"range",min:.5,max:l?12:6,step:.1,value:n.alignSpacing,onChange:f=>e({...n,alignSpacing:Number(f.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),u.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:n.alignSpacing.toFixed(1)})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#C7C7CC"},children:[u.jsx("span",{children:"Tight"}),u.jsx("span",{children:"Spread"})]})]})]}),n.arrangement==="scattering"&&u.jsxs(u.Fragment,{children:[u.jsx(W,{label:"Quantity",children:u.jsx("div",{style:{display:"flex",gap:"4px"},children:["count","density"].map(f=>u.jsx("button",{onClick:()=>e({...n,scatterMode:f}),style:{flex:1,padding:"5px 0",background:(n.scatterMode??"count")===f?"#5E5CE6":"#F2F2F7",color:(n.scatterMode??"count")===f?"#fff":"#6C6C70",border:"1px solid",borderColor:(n.scatterMode??"count")===f?"#5E5CE6":"#E5E5EA",borderRadius:"6px",cursor:"pointer",fontSize:"11px",fontWeight:"600",fontFamily:"inherit"},children:f==="count"?"Population":"Density"},f))})}),(n.scatterMode??"count")==="count"?u.jsx(W,{label:"Mark Count",children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("input",{type:"range",min:5,max:600,step:5,value:n.scatterCount,onChange:f=>e({...n,scatterCount:Number(f.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),u.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:n.scatterCount})]})}):u.jsx(W,{label:"Density",children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("input",{type:"range",min:.05,max:5,step:.05,value:n.scatterDensity,onChange:f=>e({...n,scatterDensity:Number(f.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),u.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"36px",textAlign:"right"},children:[n.scatterDensity.toFixed(2),"/u³"]})]})}),u.jsx(W,{label:"Volume",children:u.jsx("div",{style:{display:"flex",width:"100%"},children:["box","sphere"].map((f,c)=>u.jsx("button",{onClick:()=>e({...n,scatterBoundingVolume:f}),style:{flex:1,padding:"5px 0",background:(n.scatterBoundingVolume??"box")===f?"#5E5CE6":"#F2F2F7",color:(n.scatterBoundingVolume??"box")===f?"#fff":"#6C6C70",border:"1px solid",borderColor:(n.scatterBoundingVolume??"box")===f?"#5E5CE6":"#E5E5EA",borderRadius:c===0?"6px 0 0 6px":"0 6px 6px 0",cursor:"pointer",fontFamily:"inherit",fontSize:"11px",fontWeight:"600"},children:f==="box"?"□ Box":"○ Sphere"},f))})}),s.scatterSize!==null?u.jsx(W,{label:"Dimensions",children:u.jsx(_n,{label:"Number of Instruments",type:"numerical",onClear:()=>i("scatterSize",null)})}):u.jsx(Fs,{accepts:"numerical",onDrop:()=>i("scatterSize","numerical"),children:u.jsx(it,{label:"Dimensions",value:n.scatterDimensions,onChange:f=>e({...n,scatterDimensions:f}),min:.5,max:20,step:.5})}),u.jsx(W,{label:"Orientation",children:u.jsx("div",{style:{display:"flex",width:"100%"},children:["random","static"].map((f,c)=>u.jsx("button",{onClick:()=>e({...n,scatterOrientation:f}),style:{flex:1,padding:"5px 0",background:(n.scatterOrientation??"random")===f?"#5E5CE6":"#F2F2F7",color:(n.scatterOrientation??"random")===f?"#fff":"#6C6C70",border:"1px solid",borderColor:(n.scatterOrientation??"random")===f?"#5E5CE6":"#E5E5EA",borderRadius:c===0?"6px 0 0 6px":"0 6px 6px 0",cursor:"pointer",fontFamily:"inherit",fontSize:"11px",fontWeight:"600"},children:f==="random"?"Random":"Static"},f))})}),u.jsx(W,{label:"Show Bounds",children:u.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"7px",cursor:"pointer"},children:[u.jsx("input",{type:"checkbox",checked:n.scatterShowBounds??!0,onChange:f=>e({...n,scatterShowBounds:f.target.checked}),style:{accentColor:"#5E5CE6",width:"14px",height:"14px",cursor:"pointer"}}),u.jsx("span",{style:{fontSize:"11px",color:"#6C6C70"},children:"Visible"})]})}),o&&u.jsx(W,{label:"Placement",children:u.jsx("button",{onClick:o,style:{width:"100%",padding:"6px 0",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:"#1D1D1F",fontFamily:"inherit"},onMouseEnter:f=>f.currentTarget.style.background="#E5E5EA",onMouseLeave:f=>f.currentTarget.style.background="#F2F2F7",children:"Randomise"})})]}),n.arrangement==="piling"&&u.jsx(W,{label:"Mark Count",children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("input",{type:"range",min:2,max:60,step:1,value:n.pilingCount,onChange:f=>e({...n,pilingCount:Number(f.target.value)}),style:{flex:1,accentColor:"#5E5CE6",cursor:"pointer"}}),u.jsx("span",{style:{fontSize:"11px",color:"#6C6C70",minWidth:"28px",textAlign:"right"},children:n.pilingCount})]})})]}),t===1&&a&&r&&u.jsx(Fe,{icon:Me.labels,title:"Labels",open:d.isOpen("Labels"),onToggle:()=>d.toggle("Labels"),children:u.jsx(Dr,{config:a,onChange:r})})]})}function Vl({config:n,onChange:e}){const t=n.shape==="custom"&&n.customModelHasMat?["original","plastic","fluid","metal","emissive"]:Rr,s=Zs("Spatial");return u.jsxs(u.Fragment,{children:[u.jsx(zn,{title:"Decoration"}),u.jsxs(Fe,{icon:Me.spatial,title:"Spatial",open:s.isOpen("Spatial"),onToggle:()=>s.toggle("Spatial"),children:[u.jsx(it,{label:"Position",value:n.position,onChange:i=>e({...n,position:i}),min:-20,max:20,step:.1}),u.jsx(it,{label:"Size",value:n.size,onChange:i=>e({...n,size:i}),min:.1,max:10,step:.1,lockable:!0}),u.jsx(it,{label:"Orientation",value:n.orientation,onChange:i=>e({...n,orientation:i}),min:-180,max:180,step:1})]}),u.jsx(Fe,{icon:Me.shape,title:"Geometry",open:s.isOpen("Geometry"),onToggle:()=>s.toggle("Geometry"),children:u.jsx(W,{label:"Shape",children:u.jsx(ws,{config:n,onChange:i=>e({...n,...i})})})}),u.jsxs(Fe,{icon:Me.material,title:"Material",open:s.isOpen("Material"),onToggle:()=>s.toggle("Material"),children:[u.jsxs(W,{label:"Type",children:[u.jsx("select",{value:n.material,onChange:i=>e({...n,material:i.target.value}),style:{width:"100%",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",outline:"none",cursor:"pointer",fontFamily:"inherit",appearance:"auto"},children:t.map(i=>u.jsx("option",{value:i,children:i.charAt(0).toUpperCase()+i.slice(1)},i))}),u.jsx("div",{style:{fontSize:"11px",color:"#AEAEB2",lineHeight:1.5},children:Er[n.material]})]}),u.jsx(W,{label:"Color",children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"2px"},children:[u.jsx("input",{type:"color",value:n.color,onChange:i=>e({...n,color:i.target.value}),style:{width:"36px",height:"32px",border:"1px solid #D1D1D6",borderRadius:"6px",background:"none",cursor:"pointer",padding:"2px"}}),u.jsx("span",{style:{fontSize:"12px",color:"#8E8E93",fontFamily:"monospace"},children:n.color})]})})]})]})}function Ql({config:n,onChange:e}){const[t,s]=E.useState(!0);return u.jsxs(u.Fragment,{children:[u.jsx(zn,{title:"Scene"}),u.jsxs(Fe,{icon:Me.framing,title:"Framing",open:t,onToggle:()=>s(i=>!i),children:[u.jsx(W,{label:"Background",children:u.jsx(Ms,{options:[{value:"dark",label:"■ Dark"},{value:"ocean",label:"~ Ocean"}],value:n.background,onChange:i=>e({...n,background:i})})}),u.jsx(W,{label:"Lighting (HDRI)",children:u.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px"},children:Kl.map(i=>{const a=n.hdriPreset===i.value;return u.jsx("button",{onClick:()=>e({...n,hdriPreset:i.value}),style:{padding:"5px 6px",background:a?"#EBF3FF":"#F2F2F7",border:`1px solid ${a?"#A8CAFF":"#E5E5EA"}`,borderRadius:"7px",color:a?"#007AFF":"#6C6C70",cursor:"pointer",fontSize:"11px",fontFamily:"inherit",fontWeight:a?"600":"400",transition:"all 0.1s",textAlign:"center"},children:i.label},i.value)})})}),u.jsxs(W,{label:"Camera",children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"2px"},children:[u.jsxs("span",{style:{fontSize:"11px",color:"#6C6C70",fontWeight:"500"},children:[n.focalLength,"mm"]}),u.jsxs("span",{style:{fontSize:"11px",color:"#AEAEB2"},children:[Nl(n.focalLength).toFixed(0),"° fov"]})]}),u.jsx("input",{type:"range",min:14,max:180,step:1,value:n.focalLength,onChange:i=>e({...n,focalLength:Number(i.target.value)}),style:{width:"100%",accentColor:"#34C759",cursor:"pointer"}}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#AEAEB2",marginTop:"2px"},children:[u.jsx("span",{children:"14mm wide"}),u.jsx("span",{children:"180mm tele"})]})]})]})]})}function Yl({activeElement:n,compositionLevel:e,layers:t,markConfig:s,onMarkChange:i,collection1Config:a,onCollection1Change:r,collection2Config:o,onCollection2Change:l,sceneConfig:d,onSceneChange:f,bindings:c,onBind:p,markLabelConfig:h,onMarkLabelChange:y,colLabelConfig:A,onColLabelChange:m,activeDecorationId:x,decorations:g,onDecorationChange:b,colorMode:v,colorGradient:C,onColorGradientChange:T,markOpenSection:B,onReseed:M}){const S=x!==null?g.find(D=>D.id===x)??null:null;return u.jsx("div",{style:{padding:"18px 14px",color:"#1D1D1F",fontSize:"13px",display:"flex",flexDirection:"column",gap:"10px",height:"100%",boxSizing:"border-box",overflowY:"auto"},children:S!==null?u.jsx(Vl,{config:S,onChange:b}):n==="mark"?u.jsx(Xl,{config:s,onChange:i,bindings:c,onBind:p,labelConfig:h,onLabelChange:y,colorMode:v,colorGradient:C,onColorGradientChange:T,openSection:B,layers:t,compositionLevel:e}):n==="collection1"?u.jsx(bi,{config:a,onChange:r,collectionLevel:1,bindings:c,onBind:p,labelConfig:A,onLabelChange:m,onReseed:M}):n==="collection2"?u.jsx(bi,{config:o,onChange:l,collectionLevel:2,bindings:c,onBind:p,onReseed:M}):n==="scene"?u.jsx(Ql,{config:d,onChange:f}):null})}var ql=Object.defineProperty,Zl=(n,e,t)=>e in n?ql(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,vi=(n,e,t)=>(Zl(n,typeof e!="symbol"?e+"":e,t),t);const $l=(()=>{const n={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new _},up:{value:new _(0,1,0)}},vertexShader:`
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
      #include <${mr>=154?"colorspace_fragment":"encodings_fragment"}>

      }
    `},e=new zs({name:"SkyShader",fragmentShader:n.fragmentShader,vertexShader:n.vertexShader,uniforms:ya.clone(n.uniforms),side:Ns,depthWrite:!1});class t extends rt{constructor(){super(new Us(1,1,1),e)}}return vi(t,"SkyShader",n),vi(t,"material",e),t})();function Pn(n){if(typeof TextDecoder<"u")return new TextDecoder().decode(n);let e="";for(let t=0,s=n.length;t<s;t++)e+=String.fromCharCode(n[t]);try{return decodeURIComponent(escape(e))}catch{return e}}const st="srgb",Ge="srgb-linear",Ci=3001,ec=3e3;class $s extends Js{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new rc(t)}),this.register(function(t){return new oc(t)}),this.register(function(t){return new mc(t)}),this.register(function(t){return new gc(t)}),this.register(function(t){return new xc(t)}),this.register(function(t){return new lc(t)}),this.register(function(t){return new cc(t)}),this.register(function(t){return new uc(t)}),this.register(function(t){return new dc(t)}),this.register(function(t){return new ic(t)}),this.register(function(t){return new fc(t)}),this.register(function(t){return new ac(t)}),this.register(function(t){return new hc(t)}),this.register(function(t){return new pc(t)}),this.register(function(t){return new nc(t)}),this.register(function(t){return new Ac(t)}),this.register(function(t){return new yc(t)})}load(e,t,s,i){const a=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const d=Nt.extractUrlBase(e);r=Nt.resolveURL(d,this.path)}else r=Nt.extractUrlBase(e);this.manager.itemStart(e);const o=function(d){i?i(d):console.error(d),a.manager.itemError(e),a.manager.itemEnd(e)},l=new Xt(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(d){try{a.parse(d,r,function(f){t(f),a.manager.itemEnd(e)},o)}catch(f){o(f)}},s,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,s,i){let a;const r={},o={};if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Pn(new Uint8Array(e.slice(0,4)))===Ir){try{r[N.KHR_BINARY_GLTF]=new bc(e)}catch(f){i&&i(f);return}a=JSON.parse(r[N.KHR_BINARY_GLTF].content)}else a=JSON.parse(Pn(new Uint8Array(e)));else a=e;if(a.asset===void 0||a.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new _c(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const f=this.pluginCallbacks[d](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,r[f.name]=!0}if(a.extensionsUsed)for(let d=0;d<a.extensionsUsed.length;++d){const f=a.extensionsUsed[d],c=a.extensionsRequired||[];switch(f){case N.KHR_MATERIALS_UNLIT:r[f]=new sc;break;case N.KHR_DRACO_MESH_COMPRESSION:r[f]=new vc(a,this.dracoLoader);break;case N.KHR_TEXTURE_TRANSFORM:r[f]=new Cc;break;case N.KHR_MESH_QUANTIZATION:r[f]=new Bc;break;default:c.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(s,i)}parseAsync(e,t){const s=this;return new Promise(function(i,a){s.parse(e,t,i,a)})}}function tc(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const N={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class nc{constructor(e){this.parser=e,this.name=N.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let s=0,i=t.length;s<i;s++){const a=t[s];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,s="light:"+e;let i=t.cache.get(s);if(i)return i;const a=t.json,l=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let d;const f=new $(16777215);l.color!==void 0&&f.setRGB(l.color[0],l.color[1],l.color[2],Ge);const c=l.range!==void 0?l.range:0;switch(l.type){case"directional":d=new Ca(f),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new va(f),d.distance=c;break;case"spot":d=new ba(f),d.distance=c,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,d.angle=l.spot.outerConeAngle,d.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return d.position.set(0,0,0),d.decay=2,Ie(d,l),l.intensity!==void 0&&(d.intensity=l.intensity),d.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(d),t.cache.add(s,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,s=this.parser,a=s.json.nodes[e],o=(a.extensions&&a.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return s._getNodeRef(t.cache,o,l)})}}class sc{constructor(){this.name=N.KHR_MATERIALS_UNLIT}getMaterialType(){return We}extendParams(e,t,s){const i=[];e.color=new $(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const r=a.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Ge),e.opacity=r[3]}a.baseColorTexture!==void 0&&i.push(s.assignTexture(e,"map",a.baseColorTexture,st))}return Promise.all(i)}}class ic{constructor(e){this.parser=e,this.name=N.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class rc{constructor(e){this.parser=e,this.name=N.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:xe}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&a.push(s.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&a.push(s.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(a.push(s.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(o,o)}return Promise.all(a)}}class oc{constructor(e){this.parser=e,this.name=N.KHR_MATERIALS_DISPERSION}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:xe}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class ac{constructor(e){this.parser=e,this.name=N.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:xe}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&a.push(s.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&a.push(s.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(a)}}class lc{constructor(e){this.parser=e,this.name=N.KHR_MATERIALS_SHEEN}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:xe}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new $(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const o=r.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ge)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&a.push(s.assignTexture(t,"sheenColorMap",r.sheenColorTexture,st)),r.sheenRoughnessTexture!==void 0&&a.push(s.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(a)}}class cc{constructor(e){this.parser=e,this.name=N.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:xe}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&a.push(s.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(a)}}class uc{constructor(e){this.parser=e,this.name=N.KHR_MATERIALS_VOLUME}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:xe}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&a.push(s.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new $().setRGB(o[0],o[1],o[2],Ge),Promise.all(a)}}class dc{constructor(e){this.parser=e,this.name=N.KHR_MATERIALS_IOR}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:xe}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class fc{constructor(e){this.parser=e,this.name=N.KHR_MATERIALS_SPECULAR}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:xe}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&a.push(s.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new $().setRGB(o[0],o[1],o[2],Ge),r.specularColorTexture!==void 0&&a.push(s.assignTexture(t,"specularColorMap",r.specularColorTexture,st)),Promise.all(a)}}class pc{constructor(e){this.parser=e,this.name=N.EXT_MATERIALS_BUMP}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:xe}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&a.push(s.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(a)}}class hc{constructor(e){this.parser=e,this.name=N.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:xe}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&a.push(s.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(a)}}class mc{constructor(e){this.parser=e,this.name=N.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,s=t.json,i=s.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const a=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(s.extensionsRequired&&s.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,r)}}class gc{constructor(e){this.parser=e,this.name=N.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,s=this.parser,i=s.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=i.images[r.source];let l=s.textureLoader;if(o.uri){const d=s.options.manager.getHandler(o.uri);d!==null&&(l=d)}return this.detectSupport().then(function(d){if(d)return s.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return s.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class xc{constructor(e){this.parser=e,this.name=N.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,s=this.parser,i=s.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=i.images[r.source];let l=s.textureLoader;if(o.uri){const d=s.options.manager.getHandler(o.uri);d!==null&&(l=d)}return this.detectSupport().then(function(d){if(d)return s.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return s.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ac{constructor(e){this.name=N.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,s=t.bufferViews[e];if(s.extensions&&s.extensions[this.name]){const i=s.extensions[this.name],a=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){const l=i.byteOffset||0,d=i.byteLength||0,f=i.count,c=i.byteStride,p=new Uint8Array(o,l,d);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(f,c,p,i.mode,i.filter).then(function(h){return h.buffer}):r.ready.then(function(){const h=new ArrayBuffer(f*c);return r.decodeGltfBuffer(new Uint8Array(h),f,c,p,i.mode,i.filter),h})})}else return null}}class yc{constructor(e){this.name=N.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,s=t.nodes[e];if(!s.extensions||!s.extensions[this.name]||s.mesh===void 0)return null;const i=t.meshes[s.mesh];for(const d of i.primitives)if(d.mode!==Ae.TRIANGLES&&d.mode!==Ae.TRIANGLE_STRIP&&d.mode!==Ae.TRIANGLE_FAN&&d.mode!==void 0)return null;const r=s.extensions[this.name].attributes,o=[],l={};for(const d in r)o.push(this.parser.getDependency("accessor",r[d]).then(f=>(l[d]=f,l[d])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(d=>{const f=d.pop(),c=f.isGroup?f.children:[f],p=d[0].count,h=[];for(const y of c){const A=new ee,m=new _,x=new jn,g=new _(1,1,1),b=new Ba(y.geometry,y.material,p);for(let v=0;v<p;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&x.fromBufferAttribute(l.ROTATION,v),l.SCALE&&g.fromBufferAttribute(l.SCALE,v),b.setMatrixAt(v,A.compose(m,x,g));for(const v in l)if(v==="_COLOR_0"){const C=l[v];b.instanceColor=new Ta(C.array,C.itemSize,C.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&y.geometry.setAttribute(v,l[v]);Ws.prototype.copy.call(b,y),this.parser.assignFinalMaterial(b),h.push(b)}return f.isGroup?(f.clear(),f.add(...h),f):h[0]}))}}const Ir="glTF",Dt=12,Bi={JSON:1313821514,BIN:5130562};class bc{constructor(e){this.name=N.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Dt);if(this.header={magic:Pn(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ir)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Dt,i=new DataView(e,Dt);let a=0;for(;a<s;){const r=i.getUint32(a,!0);a+=4;const o=i.getUint32(a,!0);if(a+=4,o===Bi.JSON){const l=new Uint8Array(e,Dt+a,r);this.content=Pn(l)}else if(o===Bi.BIN){const l=Dt+a;this.body=e.slice(l,l+r)}a+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class vc{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=N.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const s=this.json,i=this.dracoLoader,a=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},d={};for(const f in r){const c=Ds[f]||f.toLowerCase();o[c]=r[f]}for(const f in e.attributes){const c=Ds[f]||f.toLowerCase();if(r[f]!==void 0){const p=s.accessors[e.attributes[f]],h=vt[p.componentType];d[c]=h.name,l[c]=p.normalized===!0}}return t.getDependency("bufferView",a).then(function(f){return new Promise(function(c,p){i.decodeDracoFile(f,function(h){for(const y in h.attributes){const A=h.attributes[y],m=l[y];m!==void 0&&(A.normalized=m)}c(h)},o,d,Ge,p)})})}}class Cc{constructor(){this.name=N.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Bc{constructor(){this.name=N.KHR_MESH_QUANTIZATION}}class _r extends Ka{constructor(e,t,s,i){super(e,t,s,i)}copySampleValue_(e){const t=this.resultBuffer,s=this.sampleValues,i=this.valueSize,a=e*i*3+i;for(let r=0;r!==i;r++)t[r]=s[a+r];return t}interpolate_(e,t,s,i){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,d=o*3,f=i-t,c=(s-t)/f,p=c*c,h=p*c,y=e*d,A=y-d,m=-2*h+3*p,x=h-p,g=1-m,b=x-p+c;for(let v=0;v!==o;v++){const C=r[A+v+o],T=r[A+v+l]*f,B=r[y+v+o],M=r[y+v]*f;a[v]=g*C+b*T+m*B+x*M}return a}}const Tc=new jn;class Sc extends _r{interpolate_(e,t,s,i){const a=super.interpolate_(e,t,s,i);return Tc.fromArray(a).normalize().toArray(a),a}}const Ae={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},vt={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ti={9728:te,9729:oe,9984:Ea,9985:Da,9986:wa,9987:gr},Si={33071:Ye,33648:Ra,10497:Ve},Zn={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ds={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...mr>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ke={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Mc={CUBICSPLINE:void 0,LINEAR:xr,STEP:Ja},$n={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Fc(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new _e({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Rn})),n.DefaultMaterial}function $e(n,e,t){for(const s in t.extensions)n[s]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[s]=t.extensions[s])}function Ie(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wc(n,e,t){let s=!1,i=!1,a=!1;for(let d=0,f=e.length;d<f;d++){const c=e[d];if(c.POSITION!==void 0&&(s=!0),c.NORMAL!==void 0&&(i=!0),c.COLOR_0!==void 0&&(a=!0),s&&i&&a)break}if(!s&&!i&&!a)return Promise.resolve(n);const r=[],o=[],l=[];for(let d=0,f=e.length;d<f;d++){const c=e[d];if(s){const p=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):n.attributes.position;r.push(p)}if(i){const p=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):n.attributes.normal;o.push(p)}if(a){const p=c.COLOR_0!==void 0?t.getDependency("accessor",c.COLOR_0):n.attributes.color;l.push(p)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(d){const f=d[0],c=d[1],p=d[2];return s&&(n.morphAttributes.position=f),i&&(n.morphAttributes.normal=c),a&&(n.morphAttributes.color=p),n.morphTargetsRelative=!0,n})}function Dc(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,s=e.weights.length;t<s;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let s=0,i=t.length;s<i;s++)n.morphTargetDictionary[t[s]]=s}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ec(n){let e;const t=n.extensions&&n.extensions[N.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+es(t.attributes):e=n.indices+":"+es(n.attributes)+":"+n.mode,n.targets!==void 0)for(let s=0,i=n.targets.length;s<i;s++)e+=":"+es(n.targets[s]);return e}function es(n){let e="";const t=Object.keys(n).sort();for(let s=0,i=t.length;s<i;s++)e+=t[s]+":"+n[t[s]]+";";return e}function Es(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Rc(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Ic=new ee;class _c{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new tc,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let s=!1,i=!1,a=-1;typeof navigator<"u"&&typeof navigator.userAgent<"u"&&(s=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,a=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||s||i&&a<98?this.textureLoader=new Sa(this.options.manager):this.textureLoader=new Ma(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Xt(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const s=this,i=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([s.getDependencies("scene"),s.getDependencies("animation"),s.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:s,userData:{}};return $e(a,o,i),Ie(o,i),Promise.all(s._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],s=this.json.meshes||[];for(let i=0,a=t.length;i<a;i++){const r=t[i].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let i=0,a=e.length;i<a;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(s[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,s){if(e.refs[t]<=1)return s;const i=s.clone(),a=(r,o)=>{const l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(const[d,f]of r.children.entries())a(f,o.children[d])};return a(s,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let s=0;s<t.length;s++){const i=e(t[s]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const s=[];for(let i=0;i<t.length;i++){const a=e(t[i]);a&&s.push(a)}return s}getDependency(e,t){const s=e+":"+t;let i=this.cache.get(s);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":i=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(s,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const s=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(a,r){return s.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],s=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[N.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(a,r){s.load(Nt.resolveURL(t.uri,i.path),a,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(s){const i=t.byteLength||0,a=t.byteOffset||0;return s.slice(a,a+i)})}loadAccessor(e){const t=this,s=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=Zn[i.type],o=vt[i.componentType],l=i.normalized===!0,d=new o(i.count*r);return Promise.resolve(new Z(d,r,l))}const a=[];return i.bufferView!==void 0?a.push(this.getDependency("bufferView",i.bufferView)):a.push(null),i.sparse!==void 0&&(a.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(a).then(function(r){const o=r[0],l=Zn[i.type],d=vt[i.componentType],f=d.BYTES_PER_ELEMENT,c=f*l,p=i.byteOffset||0,h=i.bufferView!==void 0?s.bufferViews[i.bufferView].byteStride:void 0,y=i.normalized===!0;let A,m;if(h&&h!==c){const x=Math.floor(p/h),g="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+x+":"+i.count;let b=t.cache.get(g);b||(A=new d(o,x*h,i.count*h/f),b=new Fa(A,h/f),t.cache.add(g,b)),m=new Wa(b,l,p%h/f,y)}else o===null?A=new d(i.count*l):A=new d(o,p,i.count*l),m=new Z(A,l,y);if(i.sparse!==void 0){const x=Zn.SCALAR,g=vt[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,C=new g(r[1],b,i.sparse.count*x),T=new d(r[2],v,i.sparse.count*l);o!==null&&(m=new Z(m.array.slice(),m.itemSize,m.normalized));for(let B=0,M=C.length;B<M;B++){const S=C[B];if(m.setX(S,T[B*l]),l>=2&&m.setY(S,T[B*l+1]),l>=3&&m.setZ(S,T[B*l+2]),l>=4&&m.setW(S,T[B*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,s=this.options,a=t.textures[e].source,r=t.images[a];let o=this.textureLoader;if(r.uri){const l=s.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,a,o)}loadTextureImage(e,t,s){const i=this,a=this.json,r=a.textures[e],o=a.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const d=this.loadImageSource(t,s).then(function(f){f.flipY=!1,f.name=r.name||o.name||"",f.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(f.name=o.uri);const p=(a.samplers||{})[r.sampler]||{};return f.magFilter=Ti[p.magFilter]||oe,f.minFilter=Ti[p.minFilter]||gr,f.wrapS=Si[p.wrapS]||Ve,f.wrapT=Si[p.wrapT]||Ve,i.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[l]=d,d}loadImageSource(e,t){const s=this,i=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(c=>c.clone());const r=i.images[e],o=self.URL||self.webkitURL;let l=r.uri||"",d=!1;if(r.bufferView!==void 0)l=s.getDependency("bufferView",r.bufferView).then(function(c){d=!0;const p=new Blob([c],{type:r.mimeType});return l=o.createObjectURL(p),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(l).then(function(c){return new Promise(function(p,h){let y=p;t.isImageBitmapLoader===!0&&(y=function(A){const m=new pi(A);m.needsUpdate=!0,p(m)}),t.load(Nt.resolveURL(c,a.path),y,void 0,h)})}).then(function(c){return d===!0&&o.revokeObjectURL(l),Ie(c,r),c.userData.mimeType=r.mimeType||Rc(r.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),c});return this.sourceCache[e]=f,f}assignTexture(e,t,s,i){const a=this;return this.getDependency("texture",s.index).then(function(r){if(!r)return null;if(s.texCoord!==void 0&&s.texCoord>0&&(r=r.clone(),r.channel=s.texCoord),a.extensions[N.KHR_TEXTURE_TRANSFORM]){const o=s.extensions!==void 0?s.extensions[N.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=a.associations.get(r);r=a.extensions[N.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),a.associations.set(r,l)}}return i!==void 0&&(typeof i=="number"&&(i=i===Ci?st:Ge),"colorSpace"in r?r.colorSpace=i:r.encoding=i===st?Ci:ec),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let s=e.material;const i=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+s.uuid;let l=this.cache.get(o);l||(l=new Ia,Kn.prototype.copy.call(l,s),l.color.copy(s.color),l.map=s.map,l.sizeAttenuation=!1,this.cache.add(o,l)),s=l}else if(e.isLine){const o="LineBasicMaterial:"+s.uuid;let l=this.cache.get(o);l||(l=new _a,Kn.prototype.copy.call(l,s),l.color.copy(s.color),l.map=s.map,this.cache.add(o,l)),s=l}if(i||a||r){let o="ClonedMaterial:"+s.uuid+":";i&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=s.clone(),a&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(s))),s=l}e.material=s}getMaterialType(){return _e}loadMaterial(e){const t=this,s=this.json,i=this.extensions,a=s.materials[e];let r;const o={},l=a.extensions||{},d=[];if(l[N.KHR_MATERIALS_UNLIT]){const c=i[N.KHR_MATERIALS_UNLIT];r=c.getMaterialType(),d.push(c.extendParams(o,a,t))}else{const c=a.pbrMetallicRoughness||{};if(o.color=new $(1,1,1),o.opacity=1,Array.isArray(c.baseColorFactor)){const p=c.baseColorFactor;o.color.setRGB(p[0],p[1],p[2],Ge),o.opacity=p[3]}c.baseColorTexture!==void 0&&d.push(t.assignTexture(o,"map",c.baseColorTexture,st)),o.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,o.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(o,"metalnessMap",c.metallicRoughnessTexture)),d.push(t.assignTexture(o,"roughnessMap",c.metallicRoughnessTexture))),r=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=Hn);const f=a.alphaMode||$n.OPAQUE;if(f===$n.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,f===$n.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&r!==We&&(d.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new Be(1,1),a.normalTexture.scale!==void 0)){const c=a.normalTexture.scale;o.normalScale.set(c,c)}if(a.occlusionTexture!==void 0&&r!==We&&(d.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&r!==We){const c=a.emissiveFactor;o.emissive=new $().setRGB(c[0],c[1],c[2],Ge)}return a.emissiveTexture!==void 0&&r!==We&&d.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,st)),Promise.all(d).then(function(){const c=new r(o);return a.name&&(c.name=a.name),Ie(c,a),t.associations.set(c,{materials:e}),a.extensions&&$e(i,c,a),c})}createUniqueName(e){const t=Pa.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,s=this.extensions,i=this.primitiveCache;function a(o){return s[N.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Mi(l,o,t)})}const r=[];for(let o=0,l=e.length;o<l;o++){const d=e[o],f=Ec(d),c=i[f];if(c)r.push(c.promise);else{let p;d.extensions&&d.extensions[N.KHR_DRACO_MESH_COMPRESSION]?p=a(d):p=Mi(new we,d,t),i[f]={primitive:d,promise:p},r.push(p)}}return Promise.all(r)}loadMesh(e){const t=this,s=this.json,i=this.extensions,a=s.meshes[e],r=a.primitives,o=[];for(let l=0,d=r.length;l<d;l++){const f=r[l].material===void 0?Fc(this.cache):this.getDependency("material",r[l].material);o.push(f)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(l){const d=l.slice(0,l.length-1),f=l[l.length-1],c=[];for(let h=0,y=f.length;h<y;h++){const A=f[h],m=r[h];let x;const g=d[h];if(m.mode===Ae.TRIANGLES||m.mode===Ae.TRIANGLE_STRIP||m.mode===Ae.TRIANGLE_FAN||m.mode===void 0)x=a.isSkinnedMesh===!0?new Ga(A,g):new rt(A,g),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),m.mode===Ae.TRIANGLE_STRIP?x.geometry=fi(x.geometry,Xa):m.mode===Ae.TRIANGLE_FAN&&(x.geometry=fi(x.geometry,Va));else if(m.mode===Ae.LINES)x=new La(A,g);else if(m.mode===Ae.LINE_STRIP)x=new ja(A,g);else if(m.mode===Ae.LINE_LOOP)x=new Ha(A,g);else if(m.mode===Ae.POINTS)x=new ka(A,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(x.geometry.morphAttributes).length>0&&Dc(x,a),x.name=t.createUniqueName(a.name||"mesh_"+e),Ie(x,a),m.extensions&&$e(i,x,m),t.assignFinalMaterial(x),c.push(x)}for(let h=0,y=c.length;h<y;h++)t.associations.set(c[h],{meshes:e,primitives:h});if(c.length===1)return a.extensions&&$e(i,c[0],a),c[0];const p=new Xn;a.extensions&&$e(i,p,a),t.associations.set(p,{meshes:e});for(let h=0,y=c.length;h<y;h++)p.add(c[h]);return p})}loadCamera(e){let t;const s=this.json.cameras[e],i=s[s.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return s.type==="perspective"?t=new Ks(Ut.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):s.type==="orthographic"&&(t=new Oa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),s.name&&(t.name=this.createUniqueName(s.name)),Ie(t,s),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],s=[];for(let i=0,a=t.joints.length;i<a;i++)s.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?s.push(this.getDependency("accessor",t.inverseBindMatrices)):s.push(null),Promise.all(s).then(function(i){const a=i.pop(),r=i,o=[],l=[];for(let d=0,f=r.length;d<f;d++){const c=r[d];if(c){o.push(c);const p=new ee;a!==null&&p.fromArray(a.array,d*16),l.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new za(o,l)})}loadAnimation(e){const t=this.json,s=this,i=t.animations[e],a=i.name?i.name:"animation_"+e,r=[],o=[],l=[],d=[],f=[];for(let c=0,p=i.channels.length;c<p;c++){const h=i.channels[c],y=i.samplers[h.sampler],A=h.target,m=A.node,x=i.parameters!==void 0?i.parameters[y.input]:y.input,g=i.parameters!==void 0?i.parameters[y.output]:y.output;A.node!==void 0&&(r.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",x)),l.push(this.getDependency("accessor",g)),d.push(y),f.push(A))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l),Promise.all(d),Promise.all(f)]).then(function(c){const p=c[0],h=c[1],y=c[2],A=c[3],m=c[4],x=[];for(let g=0,b=p.length;g<b;g++){const v=p[g],C=h[g],T=y[g],B=A[g],M=m[g];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const S=s._createAnimationTracks(v,C,T,B,M);if(S)for(let D=0;D<S.length;D++)x.push(S[D])}return new Na(a,void 0,x)})}createNodeMesh(e){const t=this.json,s=this,i=t.nodes[e];return i.mesh===void 0?null:s.getDependency("mesh",i.mesh).then(function(a){const r=s._getNodeRef(s.meshCache,i.mesh,a);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,d=i.weights.length;l<d;l++)o.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,s=this,i=t.nodes[e],a=s._loadNodeShallow(e),r=[],o=i.children||[];for(let d=0,f=o.length;d<f;d++)r.push(s.getDependency("node",o[d]));const l=i.skin===void 0?Promise.resolve(null):s.getDependency("skin",i.skin);return Promise.all([a,Promise.all(r),l]).then(function(d){const f=d[0],c=d[1],p=d[2];p!==null&&f.traverse(function(h){h.isSkinnedMesh&&h.bind(p,Ic)});for(let h=0,y=c.length;h<y;h++)f.add(c[h]);return f})}_loadNodeShallow(e){const t=this.json,s=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],r=a.name?i.createUniqueName(a.name):"",o=[],l=i._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return l&&o.push(l),a.camera!==void 0&&o.push(i.getDependency("camera",a.camera).then(function(d){return i._getNodeRef(i.cameraCache,a.camera,d)})),i._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){o.push(d)}),this.nodeCache[e]=Promise.all(o).then(function(d){let f;if(a.isBone===!0?f=new Ua:d.length>1?f=new Xn:d.length===1?f=d[0]:f=new Ws,f!==d[0])for(let c=0,p=d.length;c<p;c++)f.add(d[c]);if(a.name&&(f.userData.name=a.name,f.name=r),Ie(f,a),a.extensions&&$e(s,f,a),a.matrix!==void 0){const c=new ee;c.fromArray(a.matrix),f.applyMatrix4(c)}else a.translation!==void 0&&f.position.fromArray(a.translation),a.rotation!==void 0&&f.quaternion.fromArray(a.rotation),a.scale!==void 0&&f.scale.fromArray(a.scale);return i.associations.has(f)||i.associations.set(f,{}),i.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){const t=this.extensions,s=this.json.scenes[e],i=this,a=new Xn;s.name&&(a.name=i.createUniqueName(s.name)),Ie(a,s),s.extensions&&$e(t,a,s);const r=s.nodes||[],o=[];for(let l=0,d=r.length;l<d;l++)o.push(i.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let f=0,c=l.length;f<c;f++)a.add(l[f]);const d=f=>{const c=new Map;for(const[p,h]of i.associations)(p instanceof Kn||p instanceof pi)&&c.set(p,h);return f.traverse(p=>{const h=i.associations.get(p);h!=null&&c.set(p,h)}),c};return i.associations=d(a),a})}_createAnimationTracks(e,t,s,i,a){const r=[],o=e.name?e.name:e.uuid,l=[];ke[a.path]===ke.weights?e.traverse(function(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}):l.push(o);let d;switch(ke[a.path]){case ke.weights:d=mi;break;case ke.rotation:d=gi;break;case ke.position:case ke.scale:d=hi;break;default:switch(s.itemSize){case 1:d=mi;break;case 2:case 3:default:d=hi;break}break}const f=i.interpolation!==void 0?Mc[i.interpolation]:xr,c=this._getArrayFromAccessor(s);for(let p=0,h=l.length;p<h;p++){const y=new d(l[p]+"."+ke[a.path],t.array,c,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),r.push(y)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const s=Es(t.constructor),i=new Float32Array(t.length);for(let a=0,r=t.length;a<r;a++)i[a]=t[a]*s;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(s){const i=this instanceof gi?Sc:_r;return new i(this.times,this.values,this.getValueSize()/3,s)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Pc(n,e,t){const s=e.attributes,i=new ce;if(s.POSITION!==void 0){const o=t.json.accessors[s.POSITION],l=o.min,d=o.max;if(l!==void 0&&d!==void 0){if(i.set(new _(l[0],l[1],l[2]),new _(d[0],d[1],d[2])),o.normalized){const f=Es(vt[o.componentType]);i.min.multiplyScalar(f),i.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const o=new _,l=new _;for(let d=0,f=a.length;d<f;d++){const c=a[d];if(c.POSITION!==void 0){const p=t.json.accessors[c.POSITION],h=p.min,y=p.max;if(h!==void 0&&y!==void 0){if(l.setX(Math.max(Math.abs(h[0]),Math.abs(y[0]))),l.setY(Math.max(Math.abs(h[1]),Math.abs(y[1]))),l.setZ(Math.max(Math.abs(h[2]),Math.abs(y[2]))),p.normalized){const A=Es(vt[p.componentType]);l.multiplyScalar(A)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}n.boundingBox=i;const r=new Ar;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,n.boundingSphere=r}function Mi(n,e,t){const s=e.attributes,i=[];function a(r,o){return t.getDependency("accessor",r).then(function(l){n.setAttribute(o,l)})}for(const r in s){const o=Ds[r]||r.toLowerCase();o in n.attributes||i.push(a(s[r],o))}if(e.indices!==void 0&&!n.index){const r=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});i.push(r)}return Ie(n,e),Pc(n,e,t),Promise.all(i).then(function(){return e.targets!==void 0?wc(n,e.targets,t):n})}const ts=new WeakMap;class Gc extends Js{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,s,i){const a=new Xt(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,r=>{const o={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(r,o).then(t).catch(i)},s,i)}decodeDracoFile(e,t,s,i){const a={attributeIDs:s||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!s};this.decodeGeometry(e,a).then(t)}decodeGeometry(e,t){for(const l in t.attributeTypes){const d=t.attributeTypes[l];d.BYTES_PER_ELEMENT!==void 0&&(t.attributeTypes[l]=d.name)}const s=JSON.stringify(t);if(ts.has(e)){const l=ts.get(e);if(l.key===s)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const a=this.workerNextTaskID++,r=e.byteLength,o=this._getWorker(a,r).then(l=>(i=l,new Promise((d,f)=>{i._callbacks[a]={resolve:d,reject:f},i.postMessage({type:"decode",id:a,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&a&&this._releaseTask(i,a)}),ts.set(e,{key:s,promise:o}),o}_createGeometry(e){const t=new we;e.index&&t.setIndex(new Z(e.index.array,1));for(let s=0;s<e.attributes.length;s++){const i=e.attributes[s],a=i.name,r=i.array,o=i.itemSize;t.setAttribute(a,new Z(r,o))}return t}_loadLibrary(e,t){const s=new Xt(this.manager);return s.setPath(this.decoderPath),s.setResponseType(t),s.setWithCredentials(this.withCredentials),new Promise((i,a)=>{s.load(e,i,void 0,a)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(s=>{const i=s[0];e||(this.decoderConfig.wasmBinary=s[1]);const a=Lc.toString(),r=["/* draco decoder */",i,"","/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(a){const r=a.data;switch(r.type){case"decode":i._callbacks[r.id].resolve(r);break;case"error":i._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,a){return i._taskLoad>a._taskLoad?-1:1});const s=this.workerPool[this.workerPool.length-1];return s._taskCosts[e]=t,s._taskLoad+=t,s})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function Lc(){let n,e;onmessage=function(r){const o=r.data;switch(o.type){case"init":n=o.decoderConfig,e=new Promise(function(f){n.onModuleLoaded=function(c){f({draco:c})},DracoDecoderModule(n)});break;case"decode":const l=o.buffer,d=o.taskConfig;e.then(f=>{const c=f.draco,p=new c.Decoder,h=new c.DecoderBuffer;h.Init(new Int8Array(l),l.byteLength);try{const y=t(c,p,h,d),A=y.attributes.map(m=>m.array.buffer);y.index&&A.push(y.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:y},A)}catch(y){console.error(y),self.postMessage({type:"error",id:o.id,error:y.message})}finally{c.destroy(h),c.destroy(p)}});break}};function t(r,o,l,d){const f=d.attributeIDs,c=d.attributeTypes;let p,h;const y=o.GetEncodedGeometryType(l);if(y===r.TRIANGULAR_MESH)p=new r.Mesh,h=o.DecodeBufferToMesh(l,p);else if(y===r.POINT_CLOUD)p=new r.PointCloud,h=o.DecodeBufferToPointCloud(l,p);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!h.ok()||p.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+h.error_msg());const A={index:null,attributes:[]};for(const m in f){const x=self[c[m]];let g,b;if(d.useUniqueIDs)b=f[m],g=o.GetAttributeByUniqueId(p,b);else{if(b=o.GetAttributeId(p,r[f[m]]),b===-1)continue;g=o.GetAttribute(p,b)}A.attributes.push(i(r,o,p,m,x,g))}return y===r.TRIANGULAR_MESH&&(A.index=s(r,o,p)),r.destroy(p),A}function s(r,o,l){const f=l.num_faces()*3,c=f*4,p=r._malloc(c);o.GetTrianglesUInt32Array(l,c,p);const h=new Uint32Array(r.HEAPF32.buffer,p,f).slice();return r._free(p),{array:h,itemSize:1}}function i(r,o,l,d,f,c){const p=c.num_components(),y=l.num_points()*p,A=y*f.BYTES_PER_ELEMENT,m=a(r,f),x=r._malloc(A);o.GetAttributeDataArrayForAllPoints(l,c,m,A,x);const g=new f(r.HEAPF32.buffer,x,y).slice();return r._free(x),{name:d,array:g,itemSize:p}}function a(r,o){switch(o){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}let nn;const ns=()=>{if(nn)return nn;const n="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",e="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",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),s=new Uint8Array([32,0,65,253,3,1,2,34,4,106,6,5,11,8,7,20,13,33,12,16,128,9,116,64,19,113,127,15,10,21,22,14,255,66,24,54,136,107,18,23,192,26,114,118,132,17,77,101,130,144,27,87,131,44,45,74,156,154,70,167]);if(typeof WebAssembly!="object")return{supported:!1};let i=n;WebAssembly.validate(t)&&(i=e);let a;const r=WebAssembly.instantiate(o(i),{}).then(c=>{a=c.instance,a.exports.__wasm_call_ctors()});function o(c){const p=new Uint8Array(c.length);for(let y=0;y<c.length;++y){const A=c.charCodeAt(y);p[y]=A>96?A-71:A>64?A-65:A>47?A+4:A>46?63:62}let h=0;for(let y=0;y<c.length;++y)p[h++]=p[y]<60?s[p[y]]:(p[y]-60)*64+p[++y];return p.buffer.slice(0,h)}function l(c,p,h,y,A,m){const x=a.exports.sbrk,g=h+3&-4,b=x(g*y),v=x(A.length),C=new Uint8Array(a.exports.memory.buffer);C.set(A,v);const T=c(b,h,y,v,A.length);if(T===0&&m&&m(b,g,y),p.set(C.subarray(b,b+h*y)),x(b-x(0)),T!==0)throw new Error(`Malformed buffer data: ${T}`)}const d={0:"",1:"meshopt_decodeFilterOct",2:"meshopt_decodeFilterQuat",3:"meshopt_decodeFilterExp",NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},f={0:"meshopt_decodeVertexBuffer",1:"meshopt_decodeIndexBuffer",2:"meshopt_decodeIndexSequence",ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"};return nn={ready:r,supported:!0,decodeVertexBuffer(c,p,h,y,A){l(a.exports.meshopt_decodeVertexBuffer,c,p,h,y,a.exports[d[A]])},decodeIndexBuffer(c,p,h,y){l(a.exports.meshopt_decodeIndexBuffer,c,p,h,y)},decodeIndexSequence(c,p,h,y){l(a.exports.meshopt_decodeIndexSequence,c,p,h,y)},decodeGltfBuffer(c,p,h,y,A,m){l(a.exports[f[A]],c,p,h,y,a.exports[d[m]])}},nn};let sn=null,Pr="https://www.gstatic.com/draco/versioned/decoders/1.5.5/";function Gr(n=!0,e=!0,t){return s=>{t&&t(s),n&&(sn||(sn=new Gc),sn.setDecoderPath(typeof n=="string"?n:Pr),s.setDRACOLoader(sn)),e&&s.setMeshoptDecoder(typeof ns=="function"?ns():ns)}}const Ft=(n,e,t,s)=>Vt($s,n,Gr(e,t,s));Ft.preload=(n,e,t,s)=>Vt.preload($s,n,Gr(e,t,s));Ft.clear=n=>Vt.clear($s,n);Ft.setDecoderPath=n=>{Pr=n};const Lr=0,jc=1,jr=2,Fi=2,ss=1.25,wi=1,Qe=6*4+4+4,Nn=65535,Hc=Math.pow(2,-24),is=Symbol("SKIP_GENERATION");function Hr(n){return n.index?n.index.count:n.attributes.position.count}function wt(n){return Hr(n)/3}function kr(n,e=ArrayBuffer){return n>65535?new Uint32Array(new e(4*n)):new Uint16Array(new e(2*n))}function kc(n,e){if(!n.index){const t=n.attributes.position.count,s=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=kr(t,s);n.setIndex(new Z(i,1));for(let a=0;a<t;a++)i[a]=a}}function Or(n,e){const t=wt(n),s=e||n.drawRange,i=s.start/3,a=(s.start+s.count)/3,r=Math.max(0,i),o=Math.min(t,a)-r;return[{offset:Math.floor(r),count:Math.floor(o)}]}function zr(n,e){if(!n.groups||!n.groups.length)return Or(n,e);const t=[],s=new Set,i=e||n.drawRange,a=i.start/3,r=(i.start+i.count)/3;for(const l of n.groups){const d=l.start/3,f=(l.start+l.count)/3;s.add(Math.max(a,d)),s.add(Math.min(r,f))}const o=Array.from(s.values()).sort((l,d)=>l-d);for(let l=0;l<o.length-1;l++){const d=o[l],f=o[l+1];t.push({offset:Math.floor(d),count:Math.floor(f-d)})}return t}function Oc(n,e){const t=wt(n),s=zr(n,e).sort((r,o)=>r.offset-o.offset),i=s[s.length-1];i.count=Math.min(t-i.offset,i.count);let a=0;return s.forEach(({count:r})=>a+=r),t!==a}function rs(n,e,t,s,i){let a=1/0,r=1/0,o=1/0,l=-1/0,d=-1/0,f=-1/0,c=1/0,p=1/0,h=1/0,y=-1/0,A=-1/0,m=-1/0;for(let x=e*6,g=(e+t)*6;x<g;x+=6){const b=n[x+0],v=n[x+1],C=b-v,T=b+v;C<a&&(a=C),T>l&&(l=T),b<c&&(c=b),b>y&&(y=b);const B=n[x+2],M=n[x+3],S=B-M,D=B+M;S<r&&(r=S),D>d&&(d=D),B<p&&(p=B),B>A&&(A=B);const w=n[x+4],F=n[x+5],R=w-F,I=w+F;R<o&&(o=R),I>f&&(f=I),w<h&&(h=w),w>m&&(m=w)}s[0]=a,s[1]=r,s[2]=o,s[3]=l,s[4]=d,s[5]=f,i[0]=c,i[1]=p,i[2]=h,i[3]=y,i[4]=A,i[5]=m}function zc(n,e=null,t=null,s=null){const i=n.attributes.position,a=n.index?n.index.array:null,r=wt(n),o=i.normalized;let l;e===null?(l=new Float32Array(r*6*4),t=0,s=r):(l=e,t=t||0,s=s||r);const d=i.array,f=i.offset||0;let c=3;i.isInterleavedBufferAttribute&&(c=i.data.stride);const p=["getX","getY","getZ"];for(let h=t;h<t+s;h++){const y=h*3,A=h*6;let m=y+0,x=y+1,g=y+2;a&&(m=a[m],x=a[x],g=a[g]),o||(m=m*c+f,x=x*c+f,g=g*c+f);for(let b=0;b<3;b++){let v,C,T;o?(v=i[p[b]](m),C=i[p[b]](x),T=i[p[b]](g)):(v=d[m+b],C=d[x+b],T=d[g+b]);let B=v;C<B&&(B=C),T<B&&(B=T);let M=v;C>M&&(M=C),T>M&&(M=T);const S=(M-B)/2,D=b*2;l[A+D+0]=B+S,l[A+D+1]=S+(Math.abs(B)+S)*Hc}}return l}function Q(n,e,t){return t.min.x=e[n],t.min.y=e[n+1],t.min.z=e[n+2],t.max.x=e[n+3],t.max.y=e[n+4],t.max.z=e[n+5],t}function Di(n){let e=-1,t=-1/0;for(let s=0;s<3;s++){const i=n[s+3]-n[s];i>t&&(t=i,e=s)}return e}function Ei(n,e){e.set(n)}function Ri(n,e,t){let s,i;for(let a=0;a<3;a++){const r=a+3;s=n[a],i=e[a],t[a]=s<i?s:i,s=n[r],i=e[r],t[r]=s>i?s:i}}function rn(n,e,t){for(let s=0;s<3;s++){const i=e[n+2*s],a=e[n+2*s+1],r=i-a,o=i+a;r<t[s]&&(t[s]=r),o>t[s+3]&&(t[s+3]=o)}}function Et(n){const e=n[3]-n[0],t=n[4]-n[1],s=n[5]-n[2];return 2*(e*t+t*s+s*e)}const Re=32,Nc=(n,e)=>n.candidate-e.candidate,Oe=new Array(Re).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),on=new Float32Array(6);function Uc(n,e,t,s,i,a){let r=-1,o=0;if(a===Lr)r=Di(e),r!==-1&&(o=(e[r]+e[r+3])/2);else if(a===jc)r=Di(n),r!==-1&&(o=Jc(t,s,i,r));else if(a===jr){const l=Et(n);let d=ss*i;const f=s*6,c=(s+i)*6;for(let p=0;p<3;p++){const h=e[p],m=(e[p+3]-h)/Re;if(i<Re/4){const x=[...Oe];x.length=i;let g=0;for(let v=f;v<c;v+=6,g++){const C=x[g];C.candidate=t[v+2*p],C.count=0;const{bounds:T,leftCacheBounds:B,rightCacheBounds:M}=C;for(let S=0;S<3;S++)M[S]=1/0,M[S+3]=-1/0,B[S]=1/0,B[S+3]=-1/0,T[S]=1/0,T[S+3]=-1/0;rn(v,t,T)}x.sort(Nc);let b=i;for(let v=0;v<b;v++){const C=x[v];for(;v+1<b&&x[v+1].candidate===C.candidate;)x.splice(v+1,1),b--}for(let v=f;v<c;v+=6){const C=t[v+2*p];for(let T=0;T<b;T++){const B=x[T];C>=B.candidate?rn(v,t,B.rightCacheBounds):(rn(v,t,B.leftCacheBounds),B.count++)}}for(let v=0;v<b;v++){const C=x[v],T=C.count,B=i-C.count,M=C.leftCacheBounds,S=C.rightCacheBounds;let D=0;T!==0&&(D=Et(M)/l);let w=0;B!==0&&(w=Et(S)/l);const F=wi+ss*(D*T+w*B);F<d&&(r=p,d=F,o=C.candidate)}}else{for(let b=0;b<Re;b++){const v=Oe[b];v.count=0,v.candidate=h+m+b*m;const C=v.bounds;for(let T=0;T<3;T++)C[T]=1/0,C[T+3]=-1/0}for(let b=f;b<c;b+=6){let T=~~((t[b+2*p]-h)/m);T>=Re&&(T=Re-1);const B=Oe[T];B.count++,rn(b,t,B.bounds)}const x=Oe[Re-1];Ei(x.bounds,x.rightCacheBounds);for(let b=Re-2;b>=0;b--){const v=Oe[b],C=Oe[b+1];Ri(v.bounds,C.rightCacheBounds,v.rightCacheBounds)}let g=0;for(let b=0;b<Re-1;b++){const v=Oe[b],C=v.count,T=v.bounds,M=Oe[b+1].rightCacheBounds;C!==0&&(g===0?Ei(T,on):Ri(T,on,on)),g+=C;let S=0,D=0;g!==0&&(S=Et(on)/l);const w=i-g;w!==0&&(D=Et(M)/l);const F=wi+ss*(S*g+D*w);F<d&&(r=p,d=F,o=v.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${a} used.`);return{axis:r,pos:o}}function Jc(n,e,t,s){let i=0;for(let a=e,r=e+t;a<r;a++)i+=n[a*6+s*2];return i/t}class os{constructor(){this.boundingData=new Float32Array(6)}}function Wc(n,e,t,s,i,a){let r=s,o=s+i-1;const l=a.pos,d=a.axis*2;for(;;){for(;r<=o&&t[r*6+d]<l;)r++;for(;r<=o&&t[o*6+d]>=l;)o--;if(r<o){for(let f=0;f<3;f++){let c=e[r*3+f];e[r*3+f]=e[o*3+f],e[o*3+f]=c}for(let f=0;f<6;f++){let c=t[r*6+f];t[r*6+f]=t[o*6+f],t[o*6+f]=c}r++,o--}else return r}}function Kc(n,e,t,s,i,a){let r=s,o=s+i-1;const l=a.pos,d=a.axis*2;for(;;){for(;r<=o&&t[r*6+d]<l;)r++;for(;r<=o&&t[o*6+d]>=l;)o--;if(r<o){let f=n[r];n[r]=n[o],n[o]=f;for(let c=0;c<6;c++){let p=t[r*6+c];t[r*6+c]=t[o*6+c],t[o*6+c]=p}r++,o--}else return r}}function ae(n,e){return e[n+15]===65535}function fe(n,e){return e[n+6]}function me(n,e){return e[n+14]}function ye(n){return n+8}function ge(n,e){return e[n+6]}function ei(n,e){return e[n+7]}let Nr,Ot,wn,Ur;const Xc=Math.pow(2,32);function Rs(n){return"count"in n?1:1+Rs(n.left)+Rs(n.right)}function Vc(n,e,t){return Nr=new Float32Array(t),Ot=new Uint32Array(t),wn=new Uint16Array(t),Ur=new Uint8Array(t),Is(n,e)}function Is(n,e){const t=n/4,s=n/2,i="count"in e,a=e.boundingData;for(let r=0;r<6;r++)Nr[t+r]=a[r];if(i)if(e.buffer){const r=e.buffer;Ur.set(new Uint8Array(r),n);for(let o=n,l=n+r.byteLength;o<l;o+=Qe){const d=o/2;ae(d,wn)||(Ot[o/4+6]+=t)}return n+r.byteLength}else{const r=e.offset,o=e.count;return Ot[t+6]=r,wn[s+14]=o,wn[s+15]=Nn,n+Qe}else{const r=e.left,o=e.right,l=e.splitAxis;let d;if(d=Is(n+Qe,r),d/4>Xc)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Ot[t+6]=d/4,d=Is(d,o),Ot[t+7]=l,d}}function Qc(n,e){const t=(n.index?n.index.count:n.attributes.position.count)/3,s=t>2**16,i=s?4:2,a=e?new SharedArrayBuffer(t*i):new ArrayBuffer(t*i),r=s?new Uint32Array(a):new Uint16Array(a);for(let o=0,l=r.length;o<l;o++)r[o]=o;return r}function Yc(n,e,t,s,i){const{maxDepth:a,verbose:r,maxLeafTris:o,strategy:l,onProgress:d,indirect:f}=i,c=n._indirectBuffer,p=n.geometry,h=p.index?p.index.array:null,y=f?Kc:Wc,A=wt(p),m=new Float32Array(6);let x=!1;const g=new os;return rs(e,t,s,g.boundingData,m),v(g,t,s,m),g;function b(C){d&&d(C/A)}function v(C,T,B,M=null,S=0){if(!x&&S>=a&&(x=!0,r&&(console.warn(`MeshBVH: Max depth of ${a} reached when generating BVH. Consider increasing maxDepth.`),console.warn(p))),B<=o||S>=a)return b(T+B),C.offset=T,C.count=B,C;const D=Uc(C.boundingData,M,e,T,B,l);if(D.axis===-1)return b(T+B),C.offset=T,C.count=B,C;const w=y(c,h,e,T,B,D);if(w===T||w===T+B)b(T+B),C.offset=T,C.count=B;else{C.splitAxis=D.axis;const F=new os,R=T,I=w-T;C.left=F,rs(e,R,I,F.boundingData,m),v(F,R,I,m,S+1);const P=new os,G=w,L=B-I;C.right=P,rs(e,G,L,P.boundingData,m),v(P,G,L,m,S+1)}return C}}function qc(n,e){const t=n.geometry;e.indirect&&(n._indirectBuffer=Qc(t,e.useSharedArrayBuffer),Oc(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),n._indirectBuffer||kc(t,e);const s=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=zc(t),a=e.indirect?Or(t,e.range):zr(t,e.range);n._roots=a.map(r=>{const o=Yc(n,i,r.offset,r.count,e),l=Rs(o),d=new s(Qe*l);return Vc(0,o,d),d})}class Le{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let s=1/0,i=-1/0;for(let a=0,r=e.length;a<r;a++){const l=e[a][t];s=l<s?l:s,i=l>i?l:i}this.min=s,this.max=i}setFromPoints(e,t){let s=1/0,i=-1/0;for(let a=0,r=t.length;a<r;a++){const o=t[a],l=e.dot(o);s=l<s?l:s,i=l>i?l:i}this.min=s,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}Le.prototype.setFromBox=function(){const n=new _;return function(t,s){const i=s.min,a=s.max;let r=1/0,o=-1/0;for(let l=0;l<=1;l++)for(let d=0;d<=1;d++)for(let f=0;f<=1;f++){n.x=i.x*l+a.x*(1-l),n.y=i.y*d+a.y*(1-d),n.z=i.z*f+a.z*(1-f);const c=t.dot(n);r=Math.min(c,r),o=Math.max(c,o)}this.min=r,this.max=o}}();const Zc=function(){const n=new _,e=new _,t=new _;return function(i,a,r){const o=i.start,l=n,d=a.start,f=e;t.subVectors(o,d),n.subVectors(i.end,i.start),e.subVectors(a.end,a.start);const c=t.dot(f),p=f.dot(l),h=f.dot(f),y=t.dot(l),m=l.dot(l)*h-p*p;let x,g;m!==0?x=(c*p-y*h)/m:x=0,g=(c+x*p)/h,r.x=x,r.y=g}}(),ti=function(){const n=new Be,e=new _,t=new _;return function(i,a,r,o){Zc(i,a,n);let l=n.x,d=n.y;if(l>=0&&l<=1&&d>=0&&d<=1){i.at(l,r),a.at(d,o);return}else if(l>=0&&l<=1){d<0?a.at(0,o):a.at(1,o),i.closestPointToPoint(o,!0,r);return}else if(d>=0&&d<=1){l<0?i.at(0,r):i.at(1,r),a.closestPointToPoint(r,!0,o);return}else{let f;l<0?f=i.start:f=i.end;let c;d<0?c=a.start:c=a.end;const p=e,h=t;if(i.closestPointToPoint(c,!0,e),a.closestPointToPoint(f,!0,t),p.distanceToSquared(c)<=h.distanceToSquared(f)){r.copy(p),o.copy(c);return}else{r.copy(f),o.copy(h);return}}}}(),$c=function(){const n=new _,e=new _,t=new yr,s=new Pe;return function(a,r){const{radius:o,center:l}=a,{a:d,b:f,c}=r;if(s.start=d,s.end=f,s.closestPointToPoint(l,!0,n).distanceTo(l)<=o||(s.start=d,s.end=c,s.closestPointToPoint(l,!0,n).distanceTo(l)<=o)||(s.start=f,s.end=c,s.closestPointToPoint(l,!0,n).distanceTo(l)<=o))return!0;const A=r.getPlane(t);if(Math.abs(A.distanceToPoint(l))<=o){const x=A.projectPoint(l,e);if(r.containsPoint(x))return!0}return!1}}(),eu=1e-15;function as(n){return Math.abs(n)<eu}class Te extends Ht{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new _),this.satBounds=new Array(4).fill().map(()=>new Le),this.points=[this.a,this.b,this.c],this.sphere=new Ar,this.plane=new yr,this.needsUpdate=!0}intersectsSphere(e){return $c(e,this)}update(){const e=this.a,t=this.b,s=this.c,i=this.points,a=this.satAxes,r=this.satBounds,o=a[0],l=r[0];this.getNormal(o),l.setFromPoints(o,i);const d=a[1],f=r[1];d.subVectors(e,t),f.setFromPoints(d,i);const c=a[2],p=r[2];c.subVectors(t,s),p.setFromPoints(c,i);const h=a[3],y=r[3];h.subVectors(s,e),y.setFromPoints(h,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}}Te.prototype.closestPointToSegment=function(){const n=new _,e=new _,t=new Pe;return function(i,a=null,r=null){const{start:o,end:l}=i,d=this.points;let f,c=1/0;for(let p=0;p<3;p++){const h=(p+1)%3;t.start.copy(d[p]),t.end.copy(d[h]),ti(t,i,n,e),f=n.distanceToSquared(e),f<c&&(c=f,a&&a.copy(n),r&&r.copy(e))}return this.closestPointToPoint(o,n),f=o.distanceToSquared(n),f<c&&(c=f,a&&a.copy(n),r&&r.copy(o)),this.closestPointToPoint(l,n),f=l.distanceToSquared(n),f<c&&(c=f,a&&a.copy(n),r&&r.copy(l)),Math.sqrt(c)}}();Te.prototype.intersectsTriangle=function(){const n=new Te,e=new Array(3),t=new Array(3),s=new Le,i=new Le,a=new _,r=new _,o=new _,l=new _,d=new _,f=new Pe,c=new Pe,p=new Pe,h=new _;function y(A,m,x){const g=A.points;let b=0,v=-1;for(let C=0;C<3;C++){const{start:T,end:B}=f;T.copy(g[C]),B.copy(g[(C+1)%3]),f.delta(r);const M=as(m.distanceToPoint(T));if(as(m.normal.dot(r))&&M){x.copy(f),b=2;break}const S=m.intersectLine(f,h);if(!S&&M&&h.copy(T),(S||M)&&!as(h.distanceTo(B))){if(b<=1)(b===1?x.start:x.end).copy(h),M&&(v=b);else if(b>=2){(v===1?x.start:x.end).copy(h),b=2;break}if(b++,b===2&&v===-1)break}}return b}return function(m,x=null,g=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(n.copy(m),n.update(),m=n);const b=this.plane,v=m.plane;if(Math.abs(b.normal.dot(v.normal))>1-1e-10){const C=this.satBounds,T=this.satAxes;t[0]=m.a,t[1]=m.b,t[2]=m.c;for(let S=0;S<4;S++){const D=C[S],w=T[S];if(s.setFromPoints(w,t),D.isSeparated(s))return!1}const B=m.satBounds,M=m.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let S=0;S<4;S++){const D=B[S],w=M[S];if(s.setFromPoints(w,e),D.isSeparated(s))return!1}for(let S=0;S<4;S++){const D=T[S];for(let w=0;w<4;w++){const F=M[w];if(a.crossVectors(D,F),s.setFromPoints(a,e),i.setFromPoints(a,t),s.isSeparated(i))return!1}}return x&&(g||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),x.start.set(0,0,0),x.end.set(0,0,0)),!0}else{const C=y(this,v,c);if(C===1&&m.containsPoint(c.end))return x&&(x.start.copy(c.end),x.end.copy(c.end)),!0;if(C!==2)return!1;const T=y(m,b,p);if(T===1&&this.containsPoint(p.end))return x&&(x.start.copy(p.end),x.end.copy(p.end)),!0;if(T!==2)return!1;if(c.delta(o),p.delta(l),o.dot(l)<0){let R=p.start;p.start=p.end,p.end=R}const B=c.start.dot(o),M=c.end.dot(o),S=p.start.dot(o),D=p.end.dot(o),w=M<S,F=B<D;return B!==D&&S!==M&&w===F?!1:(x&&(d.subVectors(c.start,p.start),d.dot(o)>0?x.start.copy(c.start):x.start.copy(p.start),d.subVectors(c.end,p.end),d.dot(o)<0?x.end.copy(c.end):x.end.copy(p.end)),!0)}}}();Te.prototype.distanceToPoint=function(){const n=new _;return function(t){return this.closestPointToPoint(t,n),t.distanceTo(n)}}();Te.prototype.distanceToTriangle=function(){const n=new _,e=new _,t=["a","b","c"],s=new Pe,i=new Pe;return function(r,o=null,l=null){const d=o||l?s:null;if(this.intersectsTriangle(r,d))return(o||l)&&(o&&d.getCenter(o),l&&d.getCenter(l)),0;let f=1/0;for(let c=0;c<3;c++){let p;const h=t[c],y=r[h];this.closestPointToPoint(y,n),p=y.distanceToSquared(n),p<f&&(f=p,o&&o.copy(n),l&&l.copy(y));const A=this[h];r.closestPointToPoint(A,n),p=A.distanceToSquared(n),p<f&&(f=p,o&&o.copy(A),l&&l.copy(n))}for(let c=0;c<3;c++){const p=t[c],h=t[(c+1)%3];s.set(this[p],this[h]);for(let y=0;y<3;y++){const A=t[y],m=t[(y+1)%3];i.set(r[A],r[m]),ti(s,i,n,e);const x=n.distanceToSquared(e);x<f&&(f=x,o&&o.copy(n),l&&l.copy(e))}}return Math.sqrt(f)}}();class ue{constructor(e,t,s){this.isOrientedBox=!0,this.min=new _,this.max=new _,this.matrix=new ee,this.invMatrix=new ee,this.points=new Array(8).fill().map(()=>new _),this.satAxes=new Array(3).fill().map(()=>new _),this.satBounds=new Array(3).fill().map(()=>new Le),this.alignedSatBounds=new Array(3).fill().map(()=>new Le),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),s&&this.matrix.copy(s)}set(e,t,s){this.min.copy(e),this.max.copy(t),this.matrix.copy(s),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}ue.prototype.update=function(){return function(){const e=this.matrix,t=this.min,s=this.max,i=this.points;for(let d=0;d<=1;d++)for(let f=0;f<=1;f++)for(let c=0;c<=1;c++){const p=1*d|2*f|4*c,h=i[p];h.x=d?s.x:t.x,h.y=f?s.y:t.y,h.z=c?s.z:t.z,h.applyMatrix4(e)}const a=this.satBounds,r=this.satAxes,o=i[0];for(let d=0;d<3;d++){const f=r[d],c=a[d],p=1<<d,h=i[p];f.subVectors(o,h),c.setFromPoints(f,i)}const l=this.alignedSatBounds;l[0].setFromPointsField(i,"x"),l[1].setFromPointsField(i,"y"),l[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();ue.prototype.intersectsBox=function(){const n=new Le;return function(t){this.needsUpdate&&this.update();const s=t.min,i=t.max,a=this.satBounds,r=this.satAxes,o=this.alignedSatBounds;if(n.min=s.x,n.max=i.x,o[0].isSeparated(n)||(n.min=s.y,n.max=i.y,o[1].isSeparated(n))||(n.min=s.z,n.max=i.z,o[2].isSeparated(n)))return!1;for(let l=0;l<3;l++){const d=r[l],f=a[l];if(n.setFromBox(d,t),f.isSeparated(n))return!1}return!0}}();ue.prototype.intersectsTriangle=function(){const n=new Te,e=new Array(3),t=new Le,s=new Le,i=new _;return function(r){this.needsUpdate&&this.update(),r.isExtendedTriangle?r.needsUpdate&&r.update():(n.copy(r),n.update(),r=n);const o=this.satBounds,l=this.satAxes;e[0]=r.a,e[1]=r.b,e[2]=r.c;for(let p=0;p<3;p++){const h=o[p],y=l[p];if(t.setFromPoints(y,e),h.isSeparated(t))return!1}const d=r.satBounds,f=r.satAxes,c=this.points;for(let p=0;p<3;p++){const h=d[p],y=f[p];if(t.setFromPoints(y,c),h.isSeparated(t))return!1}for(let p=0;p<3;p++){const h=l[p];for(let y=0;y<4;y++){const A=f[y];if(i.crossVectors(h,A),t.setFromPoints(i,e),s.setFromPoints(i,c),t.isSeparated(s))return!1}}return!0}}();ue.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();ue.prototype.distanceToPoint=function(){const n=new _;return function(t){return this.closestPointToPoint(t,n),t.distanceTo(n)}}();ue.prototype.distanceToBox=function(){const n=["x","y","z"],e=new Array(12).fill().map(()=>new Pe),t=new Array(12).fill().map(()=>new Pe),s=new _,i=new _;return function(r,o=0,l=null,d=null){if(this.needsUpdate&&this.update(),this.intersectsBox(r))return(l||d)&&(r.getCenter(i),this.closestPointToPoint(i,s),r.closestPointToPoint(s,i),l&&l.copy(s),d&&d.copy(i)),0;const f=o*o,c=r.min,p=r.max,h=this.points;let y=1/0;for(let m=0;m<8;m++){const x=h[m];i.copy(x).clamp(c,p);const g=x.distanceToSquared(i);if(g<y&&(y=g,l&&l.copy(x),d&&d.copy(i),g<f))return Math.sqrt(g)}let A=0;for(let m=0;m<3;m++)for(let x=0;x<=1;x++)for(let g=0;g<=1;g++){const b=(m+1)%3,v=(m+2)%3,C=x<<b|g<<v,T=1<<m|x<<b|g<<v,B=h[C],M=h[T];e[A].set(B,M);const D=n[m],w=n[b],F=n[v],R=t[A],I=R.start,P=R.end;I[D]=c[D],I[w]=x?c[w]:p[w],I[F]=g?c[F]:p[w],P[D]=p[D],P[w]=x?c[w]:p[w],P[F]=g?c[F]:p[w],A++}for(let m=0;m<=1;m++)for(let x=0;x<=1;x++)for(let g=0;g<=1;g++){i.x=m?p.x:c.x,i.y=x?p.y:c.y,i.z=g?p.z:c.z,this.closestPointToPoint(i,s);const b=i.distanceToSquared(s);if(b<y&&(y=b,l&&l.copy(s),d&&d.copy(i),b<f))return Math.sqrt(b)}for(let m=0;m<12;m++){const x=e[m];for(let g=0;g<12;g++){const b=t[g];ti(x,b,s,i);const v=s.distanceToSquared(i);if(v<y&&(y=v,l&&l.copy(s),d&&d.copy(i),v<f))return Math.sqrt(v)}}return Math.sqrt(y)}}();class ni{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class tu extends ni{constructor(){super(()=>new Te)}}const be=new tu;class nu{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=s=>{t&&e.push(t),t=s,this.float32Array=new Float32Array(s),this.uint16Array=new Uint16Array(s),this.uint32Array=new Uint32Array(s)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const X=new nu;let Ke,bt;const lt=[],an=new ni(()=>new ce);function su(n,e,t,s,i,a){Ke=an.getPrimitive(),bt=an.getPrimitive(),lt.push(Ke,bt),X.setBuffer(n._roots[e]);const r=_s(0,n.geometry,t,s,i,a);X.clearBuffer(),an.releasePrimitive(Ke),an.releasePrimitive(bt),lt.pop(),lt.pop();const o=lt.length;return o>0&&(bt=lt[o-1],Ke=lt[o-2]),r}function _s(n,e,t,s,i=null,a=0,r=0){const{float32Array:o,uint16Array:l,uint32Array:d}=X;let f=n*2;if(ae(f,l)){const p=fe(n,d),h=me(f,l);return Q(n,o,Ke),s(p,h,!1,r,a+n,Ke)}else{let D=function(F){const{uint16Array:R,uint32Array:I}=X;let P=F*2;for(;!ae(P,R);)F=ye(F),P=F*2;return fe(F,I)},w=function(F){const{uint16Array:R,uint32Array:I}=X;let P=F*2;for(;!ae(P,R);)F=ge(F,I),P=F*2;return fe(F,I)+me(P,R)};const p=ye(n),h=ge(n,d);let y=p,A=h,m,x,g,b;if(i&&(g=Ke,b=bt,Q(y,o,g),Q(A,o,b),m=i(g),x=i(b),x<m)){y=h,A=p;const F=m;m=x,x=F,g=b}g||(g=Ke,Q(y,o,g));const v=ae(y*2,l),C=t(g,v,m,r+1,a+y);let T;if(C===Fi){const F=D(y),I=w(y)-F;T=s(F,I,!0,r+1,a+y,g)}else T=C&&_s(y,e,t,s,i,a,r+1);if(T)return!0;b=bt,Q(A,o,b);const B=ae(A*2,l),M=t(b,B,x,r+1,a+A);let S;if(M===Fi){const F=D(A),I=w(A)-F;S=s(F,I,!0,r+1,a+A,b)}else S=M&&_s(A,e,t,s,i,a,r+1);return!!S}}const Rt=new _,ls=new _;function iu(n,e,t={},s=0,i=1/0){const a=s*s,r=i*i;let o=1/0,l=null;if(n.shapecast({boundsTraverseOrder:f=>(Rt.copy(e).clamp(f.min,f.max),Rt.distanceToSquared(e)),intersectsBounds:(f,c,p)=>p<o&&p<r,intersectsTriangle:(f,c)=>{f.closestPointToPoint(e,Rt);const p=e.distanceToSquared(Rt);return p<o&&(ls.copy(Rt),o=p,l=c),p<a}}),o===1/0)return null;const d=Math.sqrt(o);return t.point?t.point.copy(ls):t.point=ls.clone(),t.distance=d,t.faceIndex=l,t}const ct=new _,ut=new _,dt=new _,ln=new Be,cn=new Be,un=new Be,Ii=new _,_i=new _,Pi=new _,dn=new _;function ru(n,e,t,s,i,a,r,o){let l;if(a===Ns?l=n.intersectTriangle(s,t,e,!0,i):l=n.intersectTriangle(e,t,s,a!==Hn,i),l===null)return null;const d=n.origin.distanceTo(i);return d<r||d>o?null:{distance:d,point:i.clone()}}function ou(n,e,t,s,i,a,r,o,l,d,f){ct.fromBufferAttribute(e,a),ut.fromBufferAttribute(e,r),dt.fromBufferAttribute(e,o);const c=ru(n,ct,ut,dt,dn,l,d,f);if(c){s&&(ln.fromBufferAttribute(s,a),cn.fromBufferAttribute(s,r),un.fromBufferAttribute(s,o),c.uv=Ht.getInterpolation(dn,ct,ut,dt,ln,cn,un,new Be)),i&&(ln.fromBufferAttribute(i,a),cn.fromBufferAttribute(i,r),un.fromBufferAttribute(i,o),c.uv1=Ht.getInterpolation(dn,ct,ut,dt,ln,cn,un,new Be)),t&&(Ii.fromBufferAttribute(t,a),_i.fromBufferAttribute(t,r),Pi.fromBufferAttribute(t,o),c.normal=Ht.getInterpolation(dn,ct,ut,dt,Ii,_i,Pi,new _),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const p={a,b:r,c:o,normal:new _,materialIndex:0};Ht.getNormal(ct,ut,dt,p.normal),c.face=p,c.faceIndex=a}return c}function Un(n,e,t,s,i,a,r){const o=s*3;let l=o+0,d=o+1,f=o+2;const c=n.index;n.index&&(l=c.getX(l),d=c.getX(d),f=c.getX(f));const{position:p,normal:h,uv:y,uv1:A}=n.attributes,m=ou(t,p,h,y,A,l,d,f,e,a,r);return m?(m.faceIndex=s,i&&i.push(m),m):null}function q(n,e,t,s){const i=n.a,a=n.b,r=n.c;let o=e,l=e+1,d=e+2;t&&(o=t.getX(o),l=t.getX(l),d=t.getX(d)),i.x=s.getX(o),i.y=s.getY(o),i.z=s.getZ(o),a.x=s.getX(l),a.y=s.getY(l),a.z=s.getZ(l),r.x=s.getX(d),r.y=s.getY(d),r.z=s.getZ(d)}function au(n,e,t,s,i,a,r,o){const{geometry:l,_indirectBuffer:d}=n;for(let f=s,c=s+i;f<c;f++)Un(l,e,t,f,a,r,o)}function lu(n,e,t,s,i,a,r){const{geometry:o,_indirectBuffer:l}=n;let d=1/0,f=null;for(let c=s,p=s+i;c<p;c++){let h;h=Un(o,e,t,c,null,a,r),h&&h.distance<d&&(f=h,d=h.distance)}return f}function cu(n,e,t,s,i,a,r){const{geometry:o}=t,{index:l}=o,d=o.attributes.position;for(let f=n,c=e+n;f<c;f++){let p;if(p=f,q(r,p*3,l,d),r.needsUpdate=!0,s(r,p,i,a))return!0}return!1}function uu(n,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=n.geometry,s=t.index?t.index.array:null,i=t.attributes.position;let a,r,o,l,d=0;const f=n._roots;for(let p=0,h=f.length;p<h;p++)a=f[p],r=new Uint32Array(a),o=new Uint16Array(a),l=new Float32Array(a),c(0,d),d+=a.byteLength;function c(p,h,y=!1){const A=p*2;if(o[A+15]===Nn){const x=r[p+6],g=o[A+14];let b=1/0,v=1/0,C=1/0,T=-1/0,B=-1/0,M=-1/0;for(let S=3*x,D=3*(x+g);S<D;S++){let w=s[S];const F=i.getX(w),R=i.getY(w),I=i.getZ(w);F<b&&(b=F),F>T&&(T=F),R<v&&(v=R),R>B&&(B=R),I<C&&(C=I),I>M&&(M=I)}return l[p+0]!==b||l[p+1]!==v||l[p+2]!==C||l[p+3]!==T||l[p+4]!==B||l[p+5]!==M?(l[p+0]=b,l[p+1]=v,l[p+2]=C,l[p+3]=T,l[p+4]=B,l[p+5]=M,!0):!1}else{const x=p+8,g=r[p+6],b=x+h,v=g+h;let C=y,T=!1,B=!1;e?C||(T=e.has(b),B=e.has(v),C=!T&&!B):(T=!0,B=!0);const M=C||T,S=C||B;let D=!1;M&&(D=c(x,h,C));let w=!1;S&&(w=c(g,h,C));const F=D||w;if(F)for(let R=0;R<3;R++){const I=x+R,P=g+R,G=l[I],L=l[I+3],z=l[P],U=l[P+3];l[p+R]=G<z?G:z,l[p+R+3]=L>U?L:U}return F}}}function qe(n,e,t,s,i){let a,r,o,l,d,f;const c=1/t.direction.x,p=1/t.direction.y,h=1/t.direction.z,y=t.origin.x,A=t.origin.y,m=t.origin.z;let x=e[n],g=e[n+3],b=e[n+1],v=e[n+3+1],C=e[n+2],T=e[n+3+2];return c>=0?(a=(x-y)*c,r=(g-y)*c):(a=(g-y)*c,r=(x-y)*c),p>=0?(o=(b-A)*p,l=(v-A)*p):(o=(v-A)*p,l=(b-A)*p),a>l||o>r||((o>a||isNaN(a))&&(a=o),(l<r||isNaN(r))&&(r=l),h>=0?(d=(C-m)*h,f=(T-m)*h):(d=(T-m)*h,f=(C-m)*h),a>f||d>r)?!1:((d>a||a!==a)&&(a=d),(f<r||r!==r)&&(r=f),a<=i&&r>=s)}function du(n,e,t,s,i,a,r,o){const{geometry:l,_indirectBuffer:d}=n;for(let f=s,c=s+i;f<c;f++){let p=d?d[f]:f;Un(l,e,t,p,a,r,o)}}function fu(n,e,t,s,i,a,r){const{geometry:o,_indirectBuffer:l}=n;let d=1/0,f=null;for(let c=s,p=s+i;c<p;c++){let h;h=Un(o,e,t,l?l[c]:c,null,a,r),h&&h.distance<d&&(f=h,d=h.distance)}return f}function pu(n,e,t,s,i,a,r){const{geometry:o}=t,{index:l}=o,d=o.attributes.position;for(let f=n,c=e+n;f<c;f++){let p;if(p=t.resolveTriangleIndex(f),q(r,p*3,l,d),r.needsUpdate=!0,s(r,p,i,a))return!0}return!1}function hu(n,e,t,s,i,a,r){X.setBuffer(n._roots[e]),Ps(0,n,t,s,i,a,r),X.clearBuffer()}function Ps(n,e,t,s,i,a,r){const{float32Array:o,uint16Array:l,uint32Array:d}=X,f=n*2;if(ae(f,l)){const p=fe(n,d),h=me(f,l);au(e,t,s,p,h,i,a,r)}else{const p=ye(n);qe(p,o,s,a,r)&&Ps(p,e,t,s,i,a,r);const h=ge(n,d);qe(h,o,s,a,r)&&Ps(h,e,t,s,i,a,r)}}const mu=["x","y","z"];function gu(n,e,t,s,i,a){X.setBuffer(n._roots[e]);const r=Gs(0,n,t,s,i,a);return X.clearBuffer(),r}function Gs(n,e,t,s,i,a){const{float32Array:r,uint16Array:o,uint32Array:l}=X;let d=n*2;if(ae(d,o)){const c=fe(n,l),p=me(d,o);return lu(e,t,s,c,p,i,a)}else{const c=ei(n,l),p=mu[c],y=s.direction[p]>=0;let A,m;y?(A=ye(n),m=ge(n,l)):(A=ge(n,l),m=ye(n));const g=qe(A,r,s,i,a)?Gs(A,e,t,s,i,a):null;if(g){const C=g.point[p];if(y?C<=r[m+c]:C>=r[m+c+3])return g}const v=qe(m,r,s,i,a)?Gs(m,e,t,s,i,a):null;return g&&v?g.distance<=v.distance?g:v:g||v||null}}const fn=new ce,ft=new Te,pt=new Te,It=new ee,Gi=new ue,pn=new ue;function xu(n,e,t,s){X.setBuffer(n._roots[e]);const i=Ls(0,n,t,s);return X.clearBuffer(),i}function Ls(n,e,t,s,i=null){const{float32Array:a,uint16Array:r,uint32Array:o}=X;let l=n*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),Gi.set(t.boundingBox.min,t.boundingBox.max,s),i=Gi),ae(l,r)){const f=e.geometry,c=f.index,p=f.attributes.position,h=t.index,y=t.attributes.position,A=fe(n,o),m=me(l,r);if(It.copy(s).invert(),t.boundsTree)return Q(n,a,pn),pn.matrix.copy(It),pn.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:g=>pn.intersectsBox(g),intersectsTriangle:g=>{g.a.applyMatrix4(s),g.b.applyMatrix4(s),g.c.applyMatrix4(s),g.needsUpdate=!0;for(let b=A*3,v=(m+A)*3;b<v;b+=3)if(q(pt,b,c,p),pt.needsUpdate=!0,g.intersectsTriangle(pt))return!0;return!1}});for(let x=A*3,g=(m+A)*3;x<g;x+=3){q(ft,x,c,p),ft.a.applyMatrix4(It),ft.b.applyMatrix4(It),ft.c.applyMatrix4(It),ft.needsUpdate=!0;for(let b=0,v=h.count;b<v;b+=3)if(q(pt,b,h,y),pt.needsUpdate=!0,ft.intersectsTriangle(pt))return!0}}else{const f=n+8,c=o[n+6];return Q(f,a,fn),!!(i.intersectsBox(fn)&&Ls(f,e,t,s,i)||(Q(c,a,fn),i.intersectsBox(fn)&&Ls(c,e,t,s,i)))}}const hn=new ee,cs=new ue,_t=new ue,Au=new _,yu=new _,bu=new _,vu=new _;function Cu(n,e,t,s={},i={},a=0,r=1/0){e.boundingBox||e.computeBoundingBox(),cs.set(e.boundingBox.min,e.boundingBox.max,t),cs.needsUpdate=!0;const o=n.geometry,l=o.attributes.position,d=o.index,f=e.attributes.position,c=e.index,p=be.getPrimitive(),h=be.getPrimitive();let y=Au,A=yu,m=null,x=null;i&&(m=bu,x=vu);let g=1/0,b=null,v=null;return hn.copy(t).invert(),_t.matrix.copy(hn),n.shapecast({boundsTraverseOrder:C=>cs.distanceToBox(C),intersectsBounds:(C,T,B)=>B<g&&B<r?(T&&(_t.min.copy(C.min),_t.max.copy(C.max),_t.needsUpdate=!0),!0):!1,intersectsRange:(C,T)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:M=>_t.distanceToBox(M),intersectsBounds:(M,S,D)=>D<g&&D<r,intersectsRange:(M,S)=>{for(let D=M,w=M+S;D<w;D++){q(h,3*D,c,f),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let F=C,R=C+T;F<R;F++){q(p,3*F,d,l),p.needsUpdate=!0;const I=p.distanceToTriangle(h,y,m);if(I<g&&(A.copy(y),x&&x.copy(m),g=I,b=F,v=D),I<a)return!0}}}});{const B=wt(e);for(let M=0,S=B;M<S;M++){q(h,3*M,c,f),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let D=C,w=C+T;D<w;D++){q(p,3*D,d,l),p.needsUpdate=!0;const F=p.distanceToTriangle(h,y,m);if(F<g&&(A.copy(y),x&&x.copy(m),g=F,b=D,v=M),F<a)return!0}}}}}),be.releasePrimitive(p),be.releasePrimitive(h),g===1/0?null:(s.point?s.point.copy(A):s.point=A.clone(),s.distance=g,s.faceIndex=b,i&&(i.point?i.point.copy(x):i.point=x.clone(),i.point.applyMatrix4(hn),A.applyMatrix4(hn),i.distance=A.sub(i.point).length(),i.faceIndex=v),s)}function Bu(n,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=n.geometry,s=t.index?t.index.array:null,i=t.attributes.position;let a,r,o,l,d=0;const f=n._roots;for(let p=0,h=f.length;p<h;p++)a=f[p],r=new Uint32Array(a),o=new Uint16Array(a),l=new Float32Array(a),c(0,d),d+=a.byteLength;function c(p,h,y=!1){const A=p*2;if(o[A+15]===Nn){const x=r[p+6],g=o[A+14];let b=1/0,v=1/0,C=1/0,T=-1/0,B=-1/0,M=-1/0;for(let S=x,D=x+g;S<D;S++){const w=3*n.resolveTriangleIndex(S);for(let F=0;F<3;F++){let R=w+F;R=s?s[R]:R;const I=i.getX(R),P=i.getY(R),G=i.getZ(R);I<b&&(b=I),I>T&&(T=I),P<v&&(v=P),P>B&&(B=P),G<C&&(C=G),G>M&&(M=G)}}return l[p+0]!==b||l[p+1]!==v||l[p+2]!==C||l[p+3]!==T||l[p+4]!==B||l[p+5]!==M?(l[p+0]=b,l[p+1]=v,l[p+2]=C,l[p+3]=T,l[p+4]=B,l[p+5]=M,!0):!1}else{const x=p+8,g=r[p+6],b=x+h,v=g+h;let C=y,T=!1,B=!1;e?C||(T=e.has(b),B=e.has(v),C=!T&&!B):(T=!0,B=!0);const M=C||T,S=C||B;let D=!1;M&&(D=c(x,h,C));let w=!1;S&&(w=c(g,h,C));const F=D||w;if(F)for(let R=0;R<3;R++){const I=x+R,P=g+R,G=l[I],L=l[I+3],z=l[P],U=l[P+3];l[p+R]=G<z?G:z,l[p+R+3]=L>U?L:U}return F}}}function Tu(n,e,t,s,i,a,r){X.setBuffer(n._roots[e]),js(0,n,t,s,i,a,r),X.clearBuffer()}function js(n,e,t,s,i,a,r){const{float32Array:o,uint16Array:l,uint32Array:d}=X,f=n*2;if(ae(f,l)){const p=fe(n,d),h=me(f,l);du(e,t,s,p,h,i,a,r)}else{const p=ye(n);qe(p,o,s,a,r)&&js(p,e,t,s,i,a,r);const h=ge(n,d);qe(h,o,s,a,r)&&js(h,e,t,s,i,a,r)}}const Su=["x","y","z"];function Mu(n,e,t,s,i,a){X.setBuffer(n._roots[e]);const r=Hs(0,n,t,s,i,a);return X.clearBuffer(),r}function Hs(n,e,t,s,i,a){const{float32Array:r,uint16Array:o,uint32Array:l}=X;let d=n*2;if(ae(d,o)){const c=fe(n,l),p=me(d,o);return fu(e,t,s,c,p,i,a)}else{const c=ei(n,l),p=Su[c],y=s.direction[p]>=0;let A,m;y?(A=ye(n),m=ge(n,l)):(A=ge(n,l),m=ye(n));const g=qe(A,r,s,i,a)?Hs(A,e,t,s,i,a):null;if(g){const C=g.point[p];if(y?C<=r[m+c]:C>=r[m+c+3])return g}const v=qe(m,r,s,i,a)?Hs(m,e,t,s,i,a):null;return g&&v?g.distance<=v.distance?g:v:g||v||null}}const mn=new ce,ht=new Te,mt=new Te,Pt=new ee,Li=new ue,gn=new ue;function Fu(n,e,t,s){X.setBuffer(n._roots[e]);const i=ks(0,n,t,s);return X.clearBuffer(),i}function ks(n,e,t,s,i=null){const{float32Array:a,uint16Array:r,uint32Array:o}=X;let l=n*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),Li.set(t.boundingBox.min,t.boundingBox.max,s),i=Li),ae(l,r)){const f=e.geometry,c=f.index,p=f.attributes.position,h=t.index,y=t.attributes.position,A=fe(n,o),m=me(l,r);if(Pt.copy(s).invert(),t.boundsTree)return Q(n,a,gn),gn.matrix.copy(Pt),gn.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:g=>gn.intersectsBox(g),intersectsTriangle:g=>{g.a.applyMatrix4(s),g.b.applyMatrix4(s),g.c.applyMatrix4(s),g.needsUpdate=!0;for(let b=A,v=m+A;b<v;b++)if(q(mt,3*e.resolveTriangleIndex(b),c,p),mt.needsUpdate=!0,g.intersectsTriangle(mt))return!0;return!1}});for(let x=A,g=m+A;x<g;x++){const b=e.resolveTriangleIndex(x);q(ht,3*b,c,p),ht.a.applyMatrix4(Pt),ht.b.applyMatrix4(Pt),ht.c.applyMatrix4(Pt),ht.needsUpdate=!0;for(let v=0,C=h.count;v<C;v+=3)if(q(mt,v,h,y),mt.needsUpdate=!0,ht.intersectsTriangle(mt))return!0}}else{const f=n+8,c=o[n+6];return Q(f,a,mn),!!(i.intersectsBox(mn)&&ks(f,e,t,s,i)||(Q(c,a,mn),i.intersectsBox(mn)&&ks(c,e,t,s,i)))}}const xn=new ee,us=new ue,Gt=new ue,wu=new _,Du=new _,Eu=new _,Ru=new _;function Iu(n,e,t,s={},i={},a=0,r=1/0){e.boundingBox||e.computeBoundingBox(),us.set(e.boundingBox.min,e.boundingBox.max,t),us.needsUpdate=!0;const o=n.geometry,l=o.attributes.position,d=o.index,f=e.attributes.position,c=e.index,p=be.getPrimitive(),h=be.getPrimitive();let y=wu,A=Du,m=null,x=null;i&&(m=Eu,x=Ru);let g=1/0,b=null,v=null;return xn.copy(t).invert(),Gt.matrix.copy(xn),n.shapecast({boundsTraverseOrder:C=>us.distanceToBox(C),intersectsBounds:(C,T,B)=>B<g&&B<r?(T&&(Gt.min.copy(C.min),Gt.max.copy(C.max),Gt.needsUpdate=!0),!0):!1,intersectsRange:(C,T)=>{if(e.boundsTree){const B=e.boundsTree;return B.shapecast({boundsTraverseOrder:M=>Gt.distanceToBox(M),intersectsBounds:(M,S,D)=>D<g&&D<r,intersectsRange:(M,S)=>{for(let D=M,w=M+S;D<w;D++){const F=B.resolveTriangleIndex(D);q(h,3*F,c,f),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let R=C,I=C+T;R<I;R++){const P=n.resolveTriangleIndex(R);q(p,3*P,d,l),p.needsUpdate=!0;const G=p.distanceToTriangle(h,y,m);if(G<g&&(A.copy(y),x&&x.copy(m),g=G,b=R,v=D),G<a)return!0}}}})}else{const B=wt(e);for(let M=0,S=B;M<S;M++){q(h,3*M,c,f),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let D=C,w=C+T;D<w;D++){const F=n.resolveTriangleIndex(D);q(p,3*F,d,l),p.needsUpdate=!0;const R=p.distanceToTriangle(h,y,m);if(R<g&&(A.copy(y),x&&x.copy(m),g=R,b=D,v=M),R<a)return!0}}}}}),be.releasePrimitive(p),be.releasePrimitive(h),g===1/0?null:(s.point?s.point.copy(A):s.point=A.clone(),s.distance=g,s.faceIndex=b,i&&(i.point?i.point.copy(x):i.point=x.clone(),i.point.applyMatrix4(xn),A.applyMatrix4(xn),i.distance=A.sub(i.point).length(),i.faceIndex=v),s)}function _u(){return typeof SharedArrayBuffer<"u"}const Wt=new X.constructor,Gn=new X.constructor,Ne=new ni(()=>new ce),gt=new ce,xt=new ce,ds=new ce,fs=new ce;let ps=!1;function Pu(n,e,t,s){if(ps)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");ps=!0;const i=n._roots,a=e._roots;let r,o=0,l=0;const d=new ee().copy(t).invert();for(let f=0,c=i.length;f<c;f++){Wt.setBuffer(i[f]),l=0;const p=Ne.getPrimitive();Q(0,Wt.float32Array,p),p.applyMatrix4(d);for(let h=0,y=a.length;h<y&&(Gn.setBuffer(a[h]),r=Ce(0,0,t,d,s,o,l,0,0,p),Gn.clearBuffer(),l+=a[h].length,!r);h++);if(Ne.releasePrimitive(p),Wt.clearBuffer(),o+=i[f].length,r)break}return ps=!1,r}function Ce(n,e,t,s,i,a=0,r=0,o=0,l=0,d=null,f=!1){let c,p;f?(c=Gn,p=Wt):(c=Wt,p=Gn);const h=c.float32Array,y=c.uint32Array,A=c.uint16Array,m=p.float32Array,x=p.uint32Array,g=p.uint16Array,b=n*2,v=e*2,C=ae(b,A),T=ae(v,g);let B=!1;if(T&&C)f?B=i(fe(e,x),me(e*2,g),fe(n,y),me(n*2,A),l,r+e,o,a+n):B=i(fe(n,y),me(n*2,A),fe(e,x),me(e*2,g),o,a+n,l,r+e);else if(T){const M=Ne.getPrimitive();Q(e,m,M),M.applyMatrix4(t);const S=ye(n),D=ge(n,y);Q(S,h,gt),Q(D,h,xt);const w=M.intersectsBox(gt),F=M.intersectsBox(xt);B=w&&Ce(e,S,s,t,i,r,a,l,o+1,M,!f)||F&&Ce(e,D,s,t,i,r,a,l,o+1,M,!f),Ne.releasePrimitive(M)}else{const M=ye(e),S=ge(e,x);Q(M,m,ds),Q(S,m,fs);const D=d.intersectsBox(ds),w=d.intersectsBox(fs);if(D&&w)B=Ce(n,M,t,s,i,a,r,o,l+1,d,f)||Ce(n,S,t,s,i,a,r,o,l+1,d,f);else if(D)if(C)B=Ce(n,M,t,s,i,a,r,o,l+1,d,f);else{const F=Ne.getPrimitive();F.copy(ds).applyMatrix4(t);const R=ye(n),I=ge(n,y);Q(R,h,gt),Q(I,h,xt);const P=F.intersectsBox(gt),G=F.intersectsBox(xt);B=P&&Ce(M,R,s,t,i,r,a,l,o+1,F,!f)||G&&Ce(M,I,s,t,i,r,a,l,o+1,F,!f),Ne.releasePrimitive(F)}else if(w)if(C)B=Ce(n,S,t,s,i,a,r,o,l+1,d,f);else{const F=Ne.getPrimitive();F.copy(fs).applyMatrix4(t);const R=ye(n),I=ge(n,y);Q(R,h,gt),Q(I,h,xt);const P=F.intersectsBox(gt),G=F.intersectsBox(xt);B=P&&Ce(S,R,s,t,i,r,a,l,o+1,F,!f)||G&&Ce(S,I,s,t,i,r,a,l,o+1,F,!f),Ne.releasePrimitive(F)}}return B}const An=new ue,ji=new ce,Gu={strategy:Lr,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class si{static serialize(e,t={}){t={cloneBuffers:!0,...t};const s=e.geometry,i=e._roots,a=e._indirectBuffer,r=s.getIndex();let o;return t.cloneBuffers?o={roots:i.map(l=>l.slice()),index:r?r.array.slice():null,indirectBuffer:a?a.slice():null}:o={roots:i,index:r?r.array:null,indirectBuffer:a},o}static deserialize(e,t,s={}){s={setIndex:!0,indirect:!!e.indirectBuffer,...s};const{index:i,roots:a,indirectBuffer:r}=e,o=new si(t,{...s,[is]:!0});if(o._roots=a,o._indirectBuffer=r||null,s.setIndex){const l=t.getIndex();if(l===null){const d=new Z(e.index,1,!1);t.setIndex(d)}else l.array!==i&&(l.array.set(i),l.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...Gu,[is]:!1},t),t.useSharedArrayBuffer&&!_u())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[is]||(qc(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new ce))),this.resolveTriangleIndex=t.indirect?s=>this._indirectBuffer[s]:s=>s}refit(e=null){return(this.indirect?Bu:uu)(this,e)}traverse(e,t=0){const s=this._roots[t],i=new Uint32Array(s),a=new Uint16Array(s);r(0);function r(o,l=0){const d=o*2,f=a[d+15]===Nn;if(f){const c=i[o+6],p=a[d+14];e(l,f,new Float32Array(s,o*4,6),c,p)}else{const c=o+Qe/4,p=i[o+6],h=i[o+7];e(l,f,new Float32Array(s,o*4,6),h)||(r(c,l+1),r(p,l+1))}}}raycast(e,t=Rn,s=0,i=1/0){const a=this._roots,r=this.geometry,o=[],l=t.isMaterial,d=Array.isArray(t),f=r.groups,c=l?t.side:t,p=this.indirect?Tu:hu;for(let h=0,y=a.length;h<y;h++){const A=d?t[f[h].materialIndex].side:c,m=o.length;if(p(this,h,A,e,o,s,i),d){const x=f[h].materialIndex;for(let g=m,b=o.length;g<b;g++)o[g].face.materialIndex=x}}return o}raycastFirst(e,t=Rn,s=0,i=1/0){const a=this._roots,r=this.geometry,o=t.isMaterial,l=Array.isArray(t);let d=null;const f=r.groups,c=o?t.side:t,p=this.indirect?Mu:gu;for(let h=0,y=a.length;h<y;h++){const A=l?t[f[h].materialIndex].side:c,m=p(this,h,A,e,s,i);m!=null&&(d==null||m.distance<d.distance)&&(d=m,l&&(m.face.materialIndex=f[h].materialIndex))}return d}intersectsGeometry(e,t){let s=!1;const i=this._roots,a=this.indirect?Fu:xu;for(let r=0,o=i.length;r<o&&(s=a(this,r,e,t),!s);r++);return s}shapecast(e){const t=be.getPrimitive(),s=this.indirect?pu:cu;let{boundsTraverseOrder:i,intersectsBounds:a,intersectsRange:r,intersectsTriangle:o}=e;if(r&&o){const c=r;r=(p,h,y,A,m)=>c(p,h,y,A,m)?!0:s(p,h,this,o,y,A,t)}else r||(o?r=(c,p,h,y)=>s(c,p,this,o,h,y,t):r=(c,p,h)=>h);let l=!1,d=0;const f=this._roots;for(let c=0,p=f.length;c<p;c++){const h=f[c];if(l=su(this,c,a,r,i,d),l)break;d+=h.byteLength}return be.releasePrimitive(t),l}bvhcast(e,t,s){let{intersectsRanges:i,intersectsTriangles:a}=s;const r=be.getPrimitive(),o=this.geometry.index,l=this.geometry.attributes.position,d=this.indirect?y=>{const A=this.resolveTriangleIndex(y);q(r,A*3,o,l)}:y=>{q(r,y*3,o,l)},f=be.getPrimitive(),c=e.geometry.index,p=e.geometry.attributes.position,h=e.indirect?y=>{const A=e.resolveTriangleIndex(y);q(f,A*3,c,p)}:y=>{q(f,y*3,c,p)};if(a){const y=(A,m,x,g,b,v,C,T)=>{for(let B=x,M=x+g;B<M;B++){h(B),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let S=A,D=A+m;S<D;S++)if(d(S),r.needsUpdate=!0,a(r,f,S,B,b,v,C,T))return!0}return!1};if(i){const A=i;i=function(m,x,g,b,v,C,T,B){return A(m,x,g,b,v,C,T,B)?!0:y(m,x,g,b,v,C,T,B)}}else i=y}return Pu(this,e,t,i)}intersectsBox(e,t){return An.set(e.min,e.max,t),An.needsUpdate=!0,this.shapecast({intersectsBounds:s=>An.intersectsBox(s),intersectsTriangle:s=>An.intersectsTriangle(s)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,s={},i={},a=0,r=1/0){return(this.indirect?Iu:Cu)(this,e,t,s,i,a,r)}closestPointToPoint(e,t={},s=0,i=1/0){return iu(this,e,t,s,i)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(s=>{Q(0,new Float32Array(s),ji),e.union(ji)}),e}}function Lu(n){switch(n){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function ju(n){switch(n){case 1:return Tt;case 2:return vr;case 3:return ne;case 4:return ne}}function Hi(n){switch(n){case 1:return qa;case 2:return br;case 3:return Ss;case 4:return Ss}}class Jr extends ve{constructor(){super(),this.minFilter=te,this.magFilter=te,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){const t=this.overrideItemSize,s=e.itemSize,i=e.count;if(t!==null){if(s*i%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=i*s/t}const a=e.itemSize,r=e.count,o=e.normalized,l=e.array.constructor,d=l.BYTES_PER_ELEMENT;let f=this._forcedType,c=a;if(f===null)switch(l){case Float32Array:f=le;break;case Uint8Array:case Uint16Array:case Uint32Array:f=Jt;break;case Int8Array:case Int16Array:case Int32Array:f=Vn;break}let p,h,y,A,m=Lu(a);switch(f){case le:y=1,h=ju(a),o&&d===1?(A=l,m+="8",l===Uint8Array?p=Ts:(p=xi,m+="_SNORM")):(A=Float32Array,m+="32F",p=le);break;case Vn:m+=d*8+"I",y=o?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,h=Hi(a),d===1?(A=Int8Array,p=xi):d===2?(A=Int16Array,p=Ya):(A=Int32Array,p=Vn);break;case Jt:m+=d*8+"UI",y=o?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,h=Hi(a),d===1?(A=Uint8Array,p=Ts):d===2?(A=Uint16Array,p=Qa):(A=Uint32Array,p=Jt);break}c===3&&(h===ne||h===Ss)&&(c=4);const x=Math.ceil(Math.sqrt(r))||1,g=c*x*x,b=new A(g),v=e.normalized;e.normalized=!1;for(let C=0;C<r;C++){const T=c*C;b[T]=e.getX(C)/y,a>=2&&(b[T+1]=e.getY(C)/y),a>=3&&(b[T+2]=e.getZ(C)/y,c===4&&(b[T+3]=1)),a>=4&&(b[T+3]=e.getW(C)/y)}e.normalized=v,this.internalFormat=m,this.format=h,this.type=p,this.image.width=x,this.image.height=x,this.image.data=b,this.needsUpdate=!0,this.dispose(),e.itemSize=s,e.count=i}}class Wr extends Jr{constructor(){super(),this._forcedType=Jt}}class Kr extends Jr{constructor(){super(),this._forcedType=le}}class Hu{constructor(){this.index=new Wr,this.position=new Kr,this.bvhBounds=new ve,this.bvhContents=new ve,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){const{geometry:t}=e;if(Ou(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){const s=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==s.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{const i=kr(Hr(t));this._cachedIndexAttr=new Z(i,1,!1)}ku(t,s,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){const{index:e,position:t,bvhBounds:s,bvhContents:i}=this;e&&e.dispose(),t&&t.dispose(),s&&s.dispose(),i&&i.dispose()}}function ku(n,e,t){const s=t.array,i=n.index?n.index.array:null;for(let a=0,r=e.length;a<r;a++){const o=3*a,l=3*e[a];for(let d=0;d<3;d++)s[o+d]=i?i[l+d]:l+d}}function Ou(n,e,t){const s=n._roots;if(s.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const i=s[0],a=new Uint16Array(i),r=new Uint32Array(i),o=new Float32Array(i),l=i.byteLength/Qe,d=2*Math.ceil(Math.sqrt(l/2)),f=new Float32Array(4*d*d),c=Math.ceil(Math.sqrt(l)),p=new Uint32Array(2*c*c);for(let h=0;h<l;h++){const y=h*Qe/4,A=y*2,m=y;for(let x=0;x<3;x++)f[8*h+0+x]=o[m+0+x],f[8*h+4+x]=o[m+3+x];if(ae(A,a)){const x=me(A,a),g=fe(y,r),b=4294901760|x;p[h*2+0]=b,p[h*2+1]=g}else{const x=4*ge(y,r)/Qe,g=ei(y,r);p[h*2+0]=g,p[h*2+1]=x}}e.image.data=f,e.image.width=d,e.image.height=d,e.format=ne,e.type=le,e.internalFormat="RGBA32F",e.minFilter=te,e.magFilter=te,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=p,t.image.width=c,t.image.height=c,t.format=br,t.type=Jt,t.internalFormat="RG32UI",t.minFilter=te,t.magFilter=te,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}const et=new _,tt=new _,nt=new _,ki=new St,yn=new _,hs=new _,Oi=new St,zi=new St,bn=new ee,Ni=new ee;function Lt(n,e){if(!n&&!e)return;const t=n.count===e.count,s=n.normalized===e.normalized,i=n.array.constructor===e.array.constructor,a=n.itemSize===e.itemSize;if(!t||!s||!i||!a)throw new Error}function zt(n,e=null){const t=n.array.constructor,s=n.normalized,i=n.itemSize,a=e===null?n.count:e;return new Z(new t(i*a),i,s)}function Xr(n,e,t=0){if(n.isInterleavedBufferAttribute){const s=n.itemSize;for(let i=0,a=n.count;i<a;i++){const r=i+t;e.setX(r,n.getX(i)),s>=2&&e.setY(r,n.getY(i)),s>=3&&e.setZ(r,n.getZ(i)),s>=4&&e.setW(r,n.getW(i))}}else{const s=e.array,i=s.constructor,a=s.BYTES_PER_ELEMENT*n.itemSize*t;new i(s.buffer,a,n.array.length).set(n.array)}}function zu(n,e,t){const s=n.elements,i=e.elements;for(let a=0,r=i.length;a<r;a++)s[a]+=i[a]*t}function Ui(n,e,t){const s=n.skeleton,i=n.geometry,a=s.bones,r=s.boneInverses;Oi.fromBufferAttribute(i.attributes.skinIndex,e),zi.fromBufferAttribute(i.attributes.skinWeight,e),bn.elements.fill(0);for(let o=0;o<4;o++){const l=zi.getComponent(o);if(l!==0){const d=Oi.getComponent(o);Ni.multiplyMatrices(a[d].matrixWorld,r[d]),zu(bn,Ni,l)}}return bn.multiply(n.bindMatrix).premultiply(n.bindMatrixInverse),t.transformDirection(bn),t}function ms(n,e,t,s,i){yn.set(0,0,0);for(let a=0,r=n.length;a<r;a++){const o=e[a],l=n[a];o!==0&&(hs.fromBufferAttribute(l,s),t?yn.addScaledVector(hs,o):yn.addScaledVector(hs.sub(i),o))}i.add(yn)}function Nu(n,e={useGroups:!1,updateIndex:!1,skipAttributes:[]},t=new we){const s=n[0].index!==null,{useGroups:i=!1,updateIndex:a=!1,skipAttributes:r=[]}=e,o=new Set(Object.keys(n[0].attributes)),l={};let d=0;t.clearGroups();for(let f=0;f<n.length;++f){const c=n[f];let p=0;if(s!==(c.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const h in c.attributes){if(!o.has(h))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.');l[h]===void 0&&(l[h]=[]),l[h].push(c.attributes[h]),p++}if(p!==o.size)throw new Error("StaticGeometryGenerator: Make sure all geometries have the same number of attributes.");if(i){let h;if(s)h=c.index.count;else if(c.attributes.position!==void 0)h=c.attributes.position.count;else throw new Error("StaticGeometryGenerator: The geometry must have either an index or a position attribute");t.addGroup(d,h,f),d+=h}}if(s){let f=!1;if(!t.index){let c=0;for(let p=0;p<n.length;++p)c+=n[p].index.count;t.setIndex(new Z(new Uint32Array(c),1,!1)),f=!0}if(a||f){const c=t.index;let p=0,h=0;for(let y=0;y<n.length;++y){const A=n[y],m=A.index;if(r[y]!==!0)for(let x=0;x<m.count;++x)c.setX(p,m.getX(x)+h),p++;h+=A.attributes.position.count}}}for(const f in l){const c=l[f];if(!(f in t.attributes)){let y=0;for(const A in c)y+=c[A].count;t.setAttribute(f,zt(l[f][0],y))}const p=t.attributes[f];let h=0;for(let y=0,A=c.length;y<A;y++){const m=c[y];r[y]!==!0&&Xr(m,p,h),h+=m.count}}return t}function Uu(n,e){if(n===null||e===null)return n===e;if(n.length!==e.length)return!1;for(let t=0,s=n.length;t<s;t++)if(n[t]!==e[t])return!1;return!0}function Ju(n){const{index:e,attributes:t}=n;if(e)for(let s=0,i=e.count;s<i;s+=3){const a=e.getX(s),r=e.getX(s+2);e.setX(s,r),e.setX(s+2,a)}else for(const s in t){const i=t[s],a=i.itemSize;for(let r=0,o=i.count;r<o;r+=3)for(let l=0;l<a;l++){const d=i.getComponent(r,l),f=i.getComponent(r+2,l);i.setComponent(r,l,f),i.setComponent(r+2,l,d)}}return n}class Wu{constructor(e){this.matrixWorld=new ee,this.geometryHash=null,this.boneMatrices=null,this.primitiveCount=-1,this.mesh=e,this.update()}update(){const e=this.mesh,t=e.geometry,s=e.skeleton,i=(t.index?t.index.count:t.attributes.position.count)/3;if(this.matrixWorld.copy(e.matrixWorld),this.geometryHash=t.attributes.position.version,this.primitiveCount=i,s){s.boneTexture||s.computeBoneTexture(),s.update();const a=s.boneMatrices;!this.boneMatrices||this.boneMatrices.length!==a.length?this.boneMatrices=a.slice():this.boneMatrices.set(a)}else this.boneMatrices=null}didChange(){const e=this.mesh,t=e.geometry,s=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===t.attributes.position.version&&Uu(e.skeleton&&e.skeleton.boneMatrices||null,this.boneMatrices)&&this.primitiveCount===s)}}class Ji{constructor(e){Array.isArray(e)||(e=[e]);const t=[];e.forEach(s=>{s.traverseVisible(i=>{i.isMesh&&t.push(i)})}),this.meshes=t,this.useGroups=!0,this.applyWorldTransforms=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Array(t.length).fill().map(()=>new we),this._diffMap=new WeakMap}getMaterials(){const e=[];return this.meshes.forEach(t=>{Array.isArray(t.material)?e.push(...t.material):e.push(t.material)}),e}generate(e=new we){let t=[];const{meshes:s,useGroups:i,_intermediateGeometry:a,_diffMap:r}=this;for(let o=0,l=s.length;o<l;o++){const d=s[o],f=a[o],c=r.get(d);!c||c.didChange(d)?(this._convertToStaticGeometry(d,f),t.push(!1),c?c.update():r.set(d,new Wu(d))):t.push(!0)}if(a.length===0){e.setIndex(null);const o=e.attributes;for(const l in o)e.deleteAttribute(l);for(const l in this.attributes)e.setAttribute(this.attributes[l],new Z(new Float32Array(0),4,!1))}else Nu(a,{useGroups:i,skipAttributes:t},e);for(const o in e.attributes)e.attributes[o].needsUpdate=!0;return e}_convertToStaticGeometry(e,t=new we){const s=e.geometry,i=this.applyWorldTransforms,a=this.attributes.includes("normal"),r=this.attributes.includes("tangent"),o=s.attributes,l=t.attributes;!t.index&&s.index&&(t.index=s.index.clone()),l.position||t.setAttribute("position",zt(o.position)),a&&!l.normal&&o.normal&&t.setAttribute("normal",zt(o.normal)),r&&!l.tangent&&o.tangent&&t.setAttribute("tangent",zt(o.tangent)),Lt(s.index,t.index),Lt(o.position,l.position),a&&Lt(o.normal,l.normal),r&&Lt(o.tangent,l.tangent);const d=o.position,f=a?o.normal:null,c=r?o.tangent:null,p=s.morphAttributes.position,h=s.morphAttributes.normal,y=s.morphAttributes.tangent,A=s.morphTargetsRelative,m=e.morphTargetInfluences,x=new Za;x.getNormalMatrix(e.matrixWorld),s.index&&t.index.array.set(s.index.array);for(let g=0,b=o.position.count;g<b;g++)et.fromBufferAttribute(d,g),f&&tt.fromBufferAttribute(f,g),c&&(ki.fromBufferAttribute(c,g),nt.fromBufferAttribute(c,g)),m&&(p&&ms(p,m,A,g,et),h&&ms(h,m,A,g,tt),y&&ms(y,m,A,g,nt)),e.isSkinnedMesh&&(e.applyBoneTransform(g,et),f&&Ui(e,g,tt),c&&Ui(e,g,nt)),i&&et.applyMatrix4(e.matrixWorld),l.position.setXYZ(g,et.x,et.y,et.z),f&&(i&&tt.applyNormalMatrix(x),l.normal.setXYZ(g,tt.x,tt.y,tt.z)),c&&(i&&nt.transformDirection(e.matrixWorld),l.tangent.setXYZW(g,nt.x,nt.y,nt.z,ki.w));for(const g in this.attributes){const b=this.attributes[g];b==="position"||b==="tangent"||b==="normal"||!(b in o)||(l[b]||t.setAttribute(b,zt(o[b])),Lt(o[b],l[b]),Xr(o[b],l[b]))}return e.matrixWorld.determinant()<0&&Ju(t),t}}const Ku=`

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
`,Xu=`

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
`,Vu=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`;function Qu(n,e,t=new _){const s=Math.PI*(n-.5),i=2*Math.PI*(e-.5);return t.x=Math.cos(i),t.y=Math.sin(s),t.z=Math.sin(i),t}const Yu=E.forwardRef(({inclination:n=.6,azimuth:e=.1,distance:t=1e3,mieCoefficient:s=.005,mieDirectionalG:i=.8,rayleigh:a=.5,turbidity:r=10,sunPosition:o=Qu(n,e),...l},d)=>{const f=E.useMemo(()=>new _().setScalar(t),[t]),[c]=E.useState(()=>new $l);return E.createElement("primitive",$a({object:c,ref:d,"material-uniforms-mieCoefficient-value":s,"material-uniforms-mieDirectionalG-value":i,"material-uniforms-rayleigh-value":a,"material-uniforms-sunPosition-value":o,"material-uniforms-turbidity-value":r,scale:f},l))});class ii extends zs{constructor(e){super(e);for(const t in this.uniforms)Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(s){this.uniforms[t].value=s}})}setDefine(e,t=void 0){t==null?e in this.defines&&(delete this.defines[e],this.needsUpdate=!0):this.defines[e]!==t&&(this.defines[e]=t,this.needsUpdate=!0)}}class qu extends ii{constructor(e){super({blending:Xs,uniforms:{target1:{value:null},target2:{value:null},opacity:{value:1}},vertexShader:`

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

				}`}),this.setValues(e)}}function vn(n=1){let e="uint";return n>1&&(e="uvec"+n),`
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
	`}function Cn(n=1){let e="uint",t="float",s="",i=".r",a="1u";return n>1&&(e="uvec"+n,t="vec"+n,s=n+"",n===2?(i=".rg",a="uvec2( 1u, 2u )"):n===3?(i=".rgb",a="uvec3( 1u, 2u, 3u )"):(i="",a="uvec4( 1u, 2u, 3u, 4u )")),`

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
	`}const Vr=`

	// Utils
	const float SOBOL_FACTOR = 1.0 / 16777216.0;
	const uint SOBOL_MAX_POINTS = 256u * 256u;

	${vn(1)}
	${vn(2)}
	${vn(3)}
	${vn(4)}

	uint sobolHash( uint x ) {

		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}

`,Zu=`

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

`,$u=`

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

	${Cn(1)}
	${Cn(2)}
	${Cn(3)}
	${Cn(4)}

`;class ed extends ii{constructor(){super({blending:Xs,uniforms:{resolution:{value:new Be}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`

				${Vr}
				${Zu}

				varying vec2 vUv;
				uniform vec2 resolution;
				void main() {

					uint index = uint( gl_FragCoord.y ) * uint( resolution.x ) + uint( gl_FragCoord.x );
					gl_FragColor = generateSobolPoint( index );

				}
			`})}}class td{generate(e,t=256){const s=new Fn(t,t,{type:le,format:ne,minFilter:te,magFilter:te,generateMipmaps:!1}),i=e.getRenderTarget();e.setRenderTarget(s);const a=new Mt(new ed);return a.material.resolution.set(t,t),a.render(e),e.setRenderTarget(i),a.dispose(),s}}function*nd(){const{_renderer:n,_fsQuad:e,_blendQuad:t,_primaryTarget:s,_blendTargets:i,_sobolTarget:a,_subframe:r,alpha:o,camera:l,material:d}=this,f=new St,c=new St,p=t.material;let[h,y]=i;for(;;){o?(p.opacity=this._opacityFactor/(this._samples+1),d.blending=Xs,d.opacity=1):(d.opacity=this._opacityFactor/(this._samples+1),d.blending=el);const[A,m,x,g]=r,b=s.width,v=s.height;d.resolution.set(b*x,v*g),d.sobolTexture=a.texture,d.stratifiedTexture.init(20,d.bounces+d.transmissiveBounces+5),d.stratifiedTexture.next(),d.seed++;const C=this.tiles.x||1,T=this.tiles.y||1,B=C*T,M=Math.ceil(b*x),S=Math.ceil(v*g),D=Math.floor(A*b),w=Math.floor(m*v),F=Math.ceil(M/C),R=Math.ceil(S/T);for(let I=0;I<T;I++)for(let P=0;P<C;P++){d.cameraWorldMatrix.copy(l.matrixWorld),d.invProjectionMatrix.copy(l.projectionMatrixInverse);let G=0;l.projectionMatrix.elements[15]>0&&(G=1),l.isEquirectCamera&&(G=2),d.setDefine("CAMERA_TYPE",G);const L=n.getRenderTarget(),z=n.autoClear,U=n.getScissorTest();n.getScissor(f),n.getViewport(c);let Y=P,K=I;if(!this.stableTiles){const pe=this._currentTile%(C*T);Y=pe%C,K=~~(pe/C),this._currentTile=pe+1}const se=T-K-1;s.scissor.set(D+Y*F,w+se*R,Math.min(F,M-Y*F),Math.min(R,S-se*R)),s.viewport.set(D,w,M,S),n.setRenderTarget(s),n.setScissorTest(!0),n.autoClear=!1,e.render(n),n.setViewport(c),n.setScissor(f),n.setScissorTest(U),n.setRenderTarget(L),n.autoClear=z,o&&(p.target1=h.texture,p.target2=s.texture,n.setRenderTarget(y),t.render(n),n.setRenderTarget(L)),this._samples+=1/B,P===C-1&&I===T-1&&(this._samples=Math.round(this._samples)),yield}[h,y]=[y,h]}}const Wi=new $;class sd{get material(){return this._fsQuad.material}set material(e){this._fsQuad.material=e}get target(){return this._alpha?this._blendTargets[1]:this._primaryTarget}set alpha(e){this._alpha!==e&&(e||(this._blendTargets[0].dispose(),this._blendTargets[1].dispose()),this._alpha=e,this.reset())}get alpha(){return this._alpha}get samples(){return this._samples}constructor(e){this.camera=null,this.tiles=new Be(1,1),this.stableNoise=!1,this.stableTiles=!0,this._samples=0,this._subframe=new St(0,0,1,1),this._opacityFactor=1,this._renderer=e,this._alpha=!1,this._fsQuad=new Mt(null),this._blendQuad=new Mt(new qu),this._task=null,this._currentTile=0,this._sobolTarget=new td().generate(e);const t=e.extensions.get("OES_texture_float_linear");this._primaryTarget=new Fn(1,1,{format:ne,type:t?le:de}),this._blendTargets=[new Fn(1,1,{format:ne,type:t?le:de}),new Fn(1,1,{format:ne,type:t?le:de})]}setSize(e,t){e=Math.ceil(e),t=Math.ceil(t),!(this._primaryTarget.width===e&&this._primaryTarget.height===t)&&(this._primaryTarget.setSize(e,t),this._blendTargets[0].setSize(e,t),this._blendTargets[1].setSize(e,t),this.reset())}dispose(){this._primaryTarget.dispose(),this._blendTargets[0].dispose(),this._blendTargets[1].dispose(),this._sobolTarget.dispose(),this._fsQuad.dispose(),this._blendQuad.dispose(),this._task=null}reset(){const{_renderer:e,_primaryTarget:t,_blendTargets:s}=this,i=e.getRenderTarget(),a=e.getClearAlpha();e.getClearColor(Wi),e.setRenderTarget(t),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(s[0]),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(s[1]),e.setClearColor(0,0),e.clearColor(),e.setClearColor(Wi,a),e.setRenderTarget(i),this._samples=0,this._task=null,this.stableNoise&&(this.material.seed=0)}update(){this._task||(this._task=nd.call(this)),this._task.next()}}function id(n,e,t){const s=n.index,a=n.attributes.position.count,r=s?s.count:a;let o=n.groups;o.length===0&&(o=[{count:r,start:0,materialIndex:0}]);let l;t.length<=255?l=new Uint8Array(a):l=new Uint16Array(a);for(let d=0;d<o.length;d++){const f=o[d],c=f.start,p=f.count,h=Math.min(p,r-c),y=Array.isArray(e)?e[f.materialIndex]:e,A=t.indexOf(y);for(let m=0;m<h;m++){let x=c+m;s&&(x=s.getX(x)),l[x]=A}}return new Z(l,1,!1)}function rd(n,e){const{attributes:t=[],normalMapRequired:s=!1}=e;if(!n.attributes.normal&&t&&t.includes("normal")&&n.computeVertexNormals(),!n.attributes.uv&&t&&t.includes("uv")){const i=n.attributes.position.count;n.setAttribute("uv",new Z(new Float32Array(i*2),2,!1))}if(!n.attributes.uv2&&t&&t.includes("uv2")){const i=n.attributes.position.count;n.setAttribute("uv2",new Z(new Float32Array(i*2),2,!1))}if(!n.attributes.tangent&&t&&t.includes("tangent"))if(s)n.index===null&&(n=tl(n)),n.computeTangents();else{const i=n.attributes.position.count;n.setAttribute("tangent",new Z(new Float32Array(i*4),4,!1))}if(!n.attributes.color&&t&&t.includes("color")){const i=n.attributes.position.count,a=new Float32Array(i*4);a.fill(1),n.setAttribute("color",new Z(a,4))}if(!n.index){const i=n.attributes.position.count,a=new Array(i);for(let r=0;r<i;r++)a[r]=r;n.setIndex(a)}}const od=new We;function ad(){const n=new we;return n.setAttribute("position",new Z(new Float32Array(9),3)),new rt(n,od)}class ld{get initialized(){return!!this.bvh}constructor(e){Array.isArray(e)||(e=[e]);const t=[...e];t.length===0&&t.push(ad()),this.bvhOptions={},this.attributes=["position","normal","tangent","color","uv","uv2"],this.objects=t,this.bvh=null,this.geometry=new we,this.materials=null,this.textures=null,this.lights=[],this.staticGeometryGenerator=new Ji(this.objects)}reset(){this.bvh=null,this.geometry.dispose(),this.geometry=new we,this.materials=null,this.textures=null,this.lights=[],this.staticGeometryGenerator=new Ji(this.objects)}dispose(){}prepScene(){if(this.bvh!==null)return;const{objects:e,staticGeometryGenerator:t,geometry:s,lights:i,attributes:a}=this;for(let d=0,f=e.length;d<f;d++)e[d].traverse(c=>{if(c.isMesh){const p=!!c.material.normalMap;rd(c.geometry,{attributes:a,normalMapRequired:p})}else(c.isRectAreaLight||c.isSpotLight||c.isPointLight||c.isDirectionalLight)&&i.push(c)});const r=new Set,o=t.getMaterials();o.forEach(d=>{for(const f in d){const c=d[f];c&&c.isTexture&&r.add(c)}}),t.attributes=a,t.generate(s);const l=id(s,o,o);s.setAttribute("materialIndex",l),s.clearGroups(),this.materials=o,this.textures=Array.from(r)}generate(){const{objects:e,staticGeometryGenerator:t,geometry:s,bvhOptions:i}=this;if(this.bvh===null)return this.prepScene(),this.bvh=new si(s,{strategy:jr,maxLeafTris:1,...i}),{lights:this.lights,bvh:this.bvh,materials:this.materials,textures:this.textures,objects:e};{const{bvh:a}=this;return t.generate(s),a.refit(),{lights:this.lights,bvh:this.bvh,materials:this.materials,textures:this.textures,objects:e}}}}class cd extends Ks{set bokehSize(e){this.fStop=this.getFocalLength()/e}get bokehSize(){return this.getFocalLength()/this.fStop}constructor(...e){super(...e),this.fStop=1.4,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=25,this.anamorphicRatio=1}copy(e,t){return super.copy(e,t),this.fStop=e.fStop,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio,this}}function Os(n){return`${n.source.uuid}:${n.colorSpace}`}function Qr(n){const e=new Set,t=[];for(let s=0,i=n.length;s<i;s++){const a=n[s],r=Os(a);e.has(r)||(e.add(r),t.push(a))}return t}const Yr=45,At=Yr*4,Ki=14*4+0,Xi=14*4+1;class ud{constructor(){this._features={}}isUsed(e){return e in this._features}setUsed(e,t=!0){t===!1?delete this._features[e]:this._features[e]=!0}reset(){this._features={}}}class dd extends ve{constructor(){super(new Float32Array(4),1,1),this.format=ne,this.type=le,this.wrapS=Ye,this.wrapT=Ye,this.minFilter=te,this.magFilter=te,this.generateMipmaps=!1,this.threeCompatibilityTransforms=!1,this.features=new ud}setCastShadow(e,t){const s=this.image.data,i=e*At+Xi;s[i]=t?0:1}getCastShadow(e){const t=this.image.data,s=e*At+Xi;return!t[s]}setMatte(e,t){const s=this.image.data,i=e*At+Ki;s[i]=t?1:0}getMatte(e){const t=this.image.data,s=e*At+Ki;return!!t[s]}updateFrom(e,t){function s(m,x,g=-1){if(x in m&&m[x]){const b=Os(m[x]);return y[b]}else return g}function i(m,x,g){return x in m?m[x]:g}function a(m){return m.map||m.specularMap||m.displacementMap||m.normalMap||m.bumpMap||m.roughnessMap||m.metalnessMap||m.alphaMap||m.emissiveMap||m.clearcoatMap||m.clearcoatNormalMap||m.clearcoatRoughnessMap||m.iridescenceMap||m.iridescenceThicknessMap||m.specularIntensityMap||m.specularColorMap||m.transmissionMap||m.thicknessMap||m.sheenColorMap||m.sheenRoughnessMap||null}function r(m,x,g,b){let v;if(f?v=a(m):v=m[x]&&m[x].isTexture?m[x]:null,v){const C=v.matrix.elements;let T=0;g[b+T++]=C[0],g[b+T++]=C[3],g[b+T++]=C[6],T++,g[b+T++]=C[1],g[b+T++]=C[4],g[b+T++]=C[7],T++}return 8}let o=0;const l=e.length*Yr,d=Math.ceil(Math.sqrt(l))||1,{threeCompatibilityTransforms:f,image:c,features:p}=this,h=Qr(t),y={};for(let m=0,x=h.length;m<x;m++)y[Os(h[m])]=m;c.width!==d&&(this.dispose(),c.data=new Float32Array(d*d*4),c.width=d,c.height=d);const A=c.data;p.reset();for(let m=0,x=e.length;m<x;m++){const g=e[m];if(g.isFogVolumeMaterial){p.setUsed("FOG");for(let C=0;C<At;C++)A[o+C]=0;A[o+0*4+0]=g.color.r,A[o+0*4+1]=g.color.g,A[o+0*4+2]=g.color.b,A[o+2*4+3]=i(g,"emissiveIntensity",0),A[o+3*4+0]=g.emissive.r,A[o+3*4+1]=g.emissive.g,A[o+3*4+2]=g.emissive.b,A[o+13*4+1]=g.density,A[o+13*4+3]=0,A[o+14*4+2]=4,o+=At;continue}A[o++]=g.color.r,A[o++]=g.color.g,A[o++]=g.color.b,A[o++]=s(g,"map"),A[o++]=i(g,"metalness",0),A[o++]=s(g,"metalnessMap"),A[o++]=i(g,"roughness",0),A[o++]=s(g,"roughnessMap"),A[o++]=i(g,"ior",1.5),A[o++]=i(g,"transmission",0),A[o++]=s(g,"transmissionMap"),A[o++]=i(g,"emissiveIntensity",0),"emissive"in g?(A[o++]=g.emissive.r,A[o++]=g.emissive.g,A[o++]=g.emissive.b):(A[o++]=0,A[o++]=0,A[o++]=0),A[o++]=s(g,"emissiveMap"),A[o++]=s(g,"normalMap"),"normalScale"in g?(A[o++]=g.normalScale.x,A[o++]=g.normalScale.y):(A[o++]=1,A[o++]=1),A[o++]=i(g,"clearcoat",0),A[o++]=s(g,"clearcoatMap"),A[o++]=i(g,"clearcoatRoughness",0),A[o++]=s(g,"clearcoatRoughnessMap"),A[o++]=s(g,"clearcoatNormalMap"),"clearcoatNormalScale"in g?(A[o++]=g.clearcoatNormalScale.x,A[o++]=g.clearcoatNormalScale.y):(A[o++]=1,A[o++]=1),o++,A[o++]=i(g,"sheen",0),"sheenColor"in g?(A[o++]=g.sheenColor.r,A[o++]=g.sheenColor.g,A[o++]=g.sheenColor.b):(A[o++]=0,A[o++]=0,A[o++]=0),A[o++]=s(g,"sheenColorMap"),A[o++]=i(g,"sheenRoughness",0),A[o++]=s(g,"sheenRoughnessMap"),A[o++]=s(g,"iridescenceMap"),A[o++]=s(g,"iridescenceThicknessMap"),A[o++]=i(g,"iridescence",0),A[o++]=i(g,"iridescenceIOR",1.3);const b=i(g,"iridescenceThicknessRange",[100,400]);A[o++]=b[0],A[o++]=b[1],"specularColor"in g?(A[o++]=g.specularColor.r,A[o++]=g.specularColor.g,A[o++]=g.specularColor.b):(A[o++]=1,A[o++]=1,A[o++]=1),A[o++]=s(g,"specularColorMap"),A[o++]=i(g,"specularIntensity",1),A[o++]=s(g,"specularIntensityMap");const v=i(g,"thickness",0)===0&&i(g,"attenuationDistance",1/0)===1/0;if(A[o++]=Number(v),o++,"attenuationColor"in g?(A[o++]=g.attenuationColor.r,A[o++]=g.attenuationColor.g,A[o++]=g.attenuationColor.b):(A[o++]=1,A[o++]=1,A[o++]=1),A[o++]=i(g,"attenuationDistance",1/0),A[o++]=s(g,"alphaMap"),A[o++]=g.opacity,A[o++]=g.alphaTest,!v&&g.transmission>0)A[o++]=0;else switch(g.side){case Rn:A[o++]=1;break;case Ns:A[o++]=-1;break;case Hn:A[o++]=0;break}o++,o++,A[o++]=Number(g.vertexColors)|Number(g.flatShading)<<1,A[o++]=Number(g.transparent),o+=r(g,"map",A,o),o+=r(g,"metalnessMap",A,o),o+=r(g,"roughnessMap",A,o),o+=r(g,"transmissionMap",A,o),o+=r(g,"emissiveMap",A,o),o+=r(g,"normalMap",A,o),o+=r(g,"clearcoatMap",A,o),o+=r(g,"clearcoatNormalMap",A,o),o+=r(g,"clearcoatRoughnessMap",A,o),o+=r(g,"sheenColorMap",A,o),o+=r(g,"sheenRoughnessMap",A,o),o+=r(g,"iridescenceMap",A,o),o+=r(g,"iridescenceThicknessMap",A,o),o+=r(g,"specularColorMap",A,o),o+=r(g,"specularIntensityMap",A,o)}this.needsUpdate=!0}}const Vi=new $;class fd extends Cr{constructor(...e){super(...e);const t=this.texture;t.format=ne,t.type=Ts,t.minFilter=oe,t.magFilter=oe,t.wrapS=Ve,t.wrapT=Ve,t.setTextures=(...i)=>{this.setTextures(...i)};const s=new Mt(new pd);this.fsQuad=s}setTextures(e,t,s,i){const a=Qr(i),r=e.getRenderTarget(),o=e.toneMapping,l=e.getClearAlpha();e.getClearColor(Vi);const d=a.length||1;this.setSize(t,s,d),e.setClearColor(0,0),e.toneMapping=Br;const f=this.fsQuad;for(let c=0,p=d;c<p;c++){const h=a[c];h&&(h.matrixAutoUpdate=!1,h.matrix.identity(),f.material.map=h,e.setRenderTarget(this,c),f.render(e),h.updateMatrix(),h.matrixAutoUpdate=!0)}f.material.map=null,e.setClearColor(Vi,l),e.setRenderTarget(r),e.toneMapping=o}dispose(){super.dispose(),this.fsQuad.dispose()}}class pd extends zs{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}constructor(){super({uniforms:{map:{value:null}},vertexShader:`
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
			`})}}function Kt(n){const e=new Uint16Array(n.length);for(let t=0,s=n.length;t<s;++t)e[t]=Je.toHalfFloat(n[t]);return e}function Qi(n,e,t=0,s=n.length){let i=t,a=t+s-1;for(;i<a;){const r=i+a>>1;n[r]<e?i=r+1:a=r}return i-t}function hd(n,e,t){return .2126*n+.7152*e+.0722*t}function md(n,e=de){const t=n.clone();t.source=new nl({...t.image});const{width:s,height:i,data:a}=t.image;let r=a;if(t.type!==e){e===de?r=new Uint16Array(a.length):r=new Float32Array(a.length);let o;a instanceof Int8Array||a instanceof Int16Array||a instanceof Int32Array?o=2**(8*a.BYTES_PER_ELEMENT-1)-1:o=2**(8*a.BYTES_PER_ELEMENT)-1;for(let l=0,d=a.length;l<d;l++){let f=a[l];t.type===de&&(f=Je.fromHalfFloat(a[l])),t.type!==le&&t.type!==de&&(f/=o),e===de&&(r[l]=Je.toHalfFloat(f))}t.image.data=r,t.type=e}if(t.flipY){const o=r;r=r.slice();for(let l=0;l<i;l++)for(let d=0;d<s;d++){const f=i-l-1,c=4*(l*s+d),p=4*(f*s+d);r[p+0]=o[c+0],r[p+1]=o[c+1],r[p+2]=o[c+2],r[p+3]=o[c+3]}t.flipY=!1,t.image.data=r}return t}class gd{constructor(){const e=new ve(Kt(new Float32Array([1,1,1,1])),1,1);e.type=de,e.format=ne,e.minFilter=oe,e.magFilter=oe,e.wrapS=Ve,e.wrapT=Ve,e.generateMipmaps=!1,e.needsUpdate=!0;const t=new ve(Kt(new Float32Array([0,1])),1,2);t.type=de,t.format=Tt,t.minFilter=oe,t.magFilter=oe,t.generateMipmaps=!1,t.needsUpdate=!0;const s=new ve(Kt(new Float32Array([0,0,1,1])),2,2);s.type=de,s.format=Tt,s.minFilter=oe,s.magFilter=oe,s.generateMipmaps=!1,s.needsUpdate=!0,this.map=e,this.marginalWeights=t,this.conditionalWeights=s,this.totalSum=1}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(e){const t=md(e);t.wrapS=Ve,t.wrapT=Ye;const{width:s,height:i,data:a}=t.image,r=new Float32Array(s*i),o=new Float32Array(s*i),l=new Float32Array(i),d=new Float32Array(i);let f=0,c=0;for(let m=0;m<i;m++){let x=0;for(let g=0;g<s;g++){const b=m*s+g,v=Je.fromHalfFloat(a[4*b+0]),C=Je.fromHalfFloat(a[4*b+1]),T=Je.fromHalfFloat(a[4*b+2]),B=hd(v,C,T);x+=B,f+=B,r[b]=B,o[b]=x}if(x!==0)for(let g=m*s,b=m*s+s;g<b;g++)r[g]/=x,o[g]/=x;c+=x,l[m]=x,d[m]=c}if(c!==0)for(let m=0,x=l.length;m<x;m++)l[m]/=c,d[m]/=c;const p=new Uint16Array(i),h=new Uint16Array(s*i);for(let m=0;m<i;m++){const x=(m+1)/i,g=Qi(d,x);p[m]=Je.toHalfFloat((g+.5)/i)}for(let m=0;m<i;m++)for(let x=0;x<s;x++){const g=m*s+x,b=(x+1)/s,v=Qi(o,b,m*s,s);h[g]=Je.toHalfFloat((v+.5)/s)}this.dispose();const{marginalWeights:y,conditionalWeights:A}=this;y.image={width:i,height:1,data:p},y.needsUpdate=!0,A.image={width:s,height:i,data:h},A.needsUpdate=!0,this.totalSum=f,this.map=t}}class xd{constructor(){this.bokehSize=0,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=10,this.anamorphicRatio=1}updateFrom(e){e instanceof cd?(this.bokehSize=e.bokehSize,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio):(this.bokehSize=0,this.apertureRotation=0,this.apertureBlades=0,this.focusDistance=10,this.anamorphicRatio=1)}}const gs=6,Ad=0,yd=1,bd=2,vd=3,Cd=4;class Bd{constructor(){const e=new ve(new Float32Array(4),1,1);e.format=ne,e.type=le,e.wrapS=Ye,e.wrapT=Ye,e.generateMipmaps=!1,e.minFilter=te,e.magFilter=te,this.tex=e,this.count=0}updateFrom(e,t=[]){const s=this.tex,i=Math.max(e.length*gs,1),a=Math.ceil(Math.sqrt(i));s.image.width!==a&&(s.dispose(),s.image.data=new Float32Array(a*a*4),s.image.width=a,s.image.height=a);const r=s.image.data,o=new _,l=new _,d=new ee,f=new jn,c=new _,p=new _,h=new _(0,1,0);for(let y=0,A=e.length;y<A;y++){const m=e[y],x=y*gs*4;let g=0;for(let v=0;v<gs*4;v++)r[x+v]=0;m.getWorldPosition(l),r[x+g++]=l.x,r[x+g++]=l.y,r[x+g++]=l.z;let b=Ad;if(m.isRectAreaLight&&m.isCircular?b=yd:m.isSpotLight?b=bd:m.isDirectionalLight?b=vd:m.isPointLight&&(b=Cd),r[x+g++]=b,r[x+g++]=m.color.r,r[x+g++]=m.color.g,r[x+g++]=m.color.b,r[x+g++]=m.intensity,m.getWorldQuaternion(f),m.isRectAreaLight)o.set(m.width,0,0).applyQuaternion(f),r[x+g++]=o.x,r[x+g++]=o.y,r[x+g++]=o.z,g++,l.set(0,m.height,0).applyQuaternion(f),r[x+g++]=l.x,r[x+g++]=l.y,r[x+g++]=l.z,r[x+g++]=o.cross(l).length()*(m.isCircular?Math.PI/4:1);else if(m.isSpotLight){const v=m.radius||0;c.setFromMatrixPosition(m.matrixWorld),p.setFromMatrixPosition(m.target.matrixWorld),d.lookAt(c,p,h),f.setFromRotationMatrix(d),o.set(1,0,0).applyQuaternion(f),r[x+g++]=o.x,r[x+g++]=o.y,r[x+g++]=o.z,g++,l.set(0,1,0).applyQuaternion(f),r[x+g++]=l.x,r[x+g++]=l.y,r[x+g++]=l.z,r[x+g++]=Math.PI*v*v,r[x+g++]=v,r[x+g++]=m.decay,r[x+g++]=m.distance,r[x+g++]=Math.cos(m.angle),r[x+g++]=Math.cos(m.angle*(1-m.penumbra)),r[x+g++]=m.iesTexture?t.indexOf(m.iesTexture):-1}else if(m.isPointLight){const v=o.setFromMatrixPosition(m.matrixWorld);r[x+g++]=v.x,r[x+g++]=v.y,r[x+g++]=v.z,g++,g+=4,g+=1,r[x+g++]=m.decay,r[x+g++]=m.distance}else if(m.isDirectionalLight){const v=o.setFromMatrixPosition(m.matrixWorld),C=l.setFromMatrixPosition(m.target.matrixWorld);p.subVectors(v,C).normalize(),r[x+g++]=p.x,r[x+g++]=p.y,r[x+g++]=p.z}}s.needsUpdate=!0,this.count=e.length}}function Yi(n){const e=this,t=n.split(`
`);let s=0,i;e.verAngles=[],e.horAngles=[],e.candelaValues=[],e.tiltData={},e.tiltData.angles=[],e.tiltData.mulFactors=[];function a(c){return c=c.trim(),c=c.replace(/,/g," "),c=c.replace(/\s\s+/g," "),c.split(" ")}function r(c,p){for(;;){const h=t[s++],y=a(h);for(let A=0;A<y.length;++A)p.push(Number(y[A]));if(p.length===c)break}}function o(){let c=t[s++],p=a(c);e.tiltData.lampToLumGeometry=Number(p[0]),c=t[s++],p=a(c),e.tiltData.numAngles=Number(p[0]),r(e.tiltData.numAngles,e.tiltData.angles),r(e.tiltData.numAngles,e.tiltData.mulFactors)}function l(){const c=[];r(10,c),e.count=Number(c[0]),e.lumens=Number(c[1]),e.multiplier=Number(c[2]),e.numVerAngles=Number(c[3]),e.numHorAngles=Number(c[4]),e.gonioType=Number(c[5]),e.units=Number(c[6]),e.width=Number(c[7]),e.length=Number(c[8]),e.height=Number(c[9])}function d(){const c=[];r(3,c),e.ballFactor=Number(c[0]),e.blpFactor=Number(c[1]),e.inputWatts=Number(c[2])}for(;i=t[s++],!i.includes("TILT"););i.includes("NONE")||i.includes("INCLUDE")&&o(),l(),d();for(let c=0;c<e.numHorAngles;++c)e.candelaValues.push([]);r(e.numVerAngles,e.verAngles),r(e.numHorAngles,e.horAngles);for(let c=0;c<e.numHorAngles;++c)r(e.numVerAngles,e.candelaValues[c]);for(let c=0;c<e.numHorAngles;++c)for(let p=0;p<e.numVerAngles;++p)e.candelaValues[c][p]*=e.candelaValues[c][p]*e.multiplier*e.ballFactor*e.blpFactor;let f=-1;for(let c=0;c<e.numHorAngles;++c)for(let p=0;p<e.numVerAngles;++p){const h=e.candelaValues[c][p];f=f<h?h:f}if(f>0)for(let c=0;c<e.numHorAngles;++c)for(let p=0;p<e.numVerAngles;++p)e.candelaValues[c][p]/=f}class Td extends Js{_getIESValues(e){const a=new Float32Array(64800);function r(d,f){let c=0,p=0,h=0,y=0,A=0,m=0;for(let S=0;S<e.numHorAngles-1;++S)if(f<e.horAngles[S+1]||S==e.numHorAngles-2){p=S,h=e.horAngles[S],y=e.horAngles[S+1];break}for(let S=0;S<e.numVerAngles-1;++S)if(d<e.verAngles[S+1]||S==e.numVerAngles-2){c=S,A=e.verAngles[S],m=e.verAngles[S+1];break}const x=y-h,g=m-A;if(g===0)return 0;const b=x===0?0:(f-h)/x,v=(d-A)/g,C=x===0?p:p+1,T=Ut.lerp(e.candelaValues[p][c],e.candelaValues[C][c],b),B=Ut.lerp(e.candelaValues[p][c+1],e.candelaValues[C][c+1],b);return Ut.lerp(T,B,v)}const o=e.horAngles[0],l=e.horAngles[e.numHorAngles-1];for(let d=0;d<64800;++d){let f=d%360;const c=Math.floor(d/360);l-o!==0&&(f<o||f>=l)&&(f%=l*2,f>l&&(f=l*2-f)),a[d]=r(c,f)}return a}load(e,t,s,i){const a=new Xt(this.manager);a.setResponseType("text"),a.setCrossOrigin(this.crossOrigin),a.setWithCredentials(this.withCredentials),a.setPath(this.path),a.setRequestHeader(this.requestHeader);const r=new ve(null,360,180,Tt,de);return r.minFilter=oe,r.magFilter=oe,a.load(e,o=>{const l=new Yi(o);r.image.data=Kt(this._getIESValues(l)),r.needsUpdate=!0,t!==void 0&&t(r)},s,i),r}parse(e){const t=new Yi(e),s=new ve(null,360,180,Tt,de);return s.minFilter=oe,s.magFilter=oe,s.image.data=Kt(this._getIESValues(t)),s.needsUpdate=!0,s}}const qi=new $;class Sd extends Cr{constructor(...e){super(...e);const t=this.texture;t.format=ne,t.type=de,t.minFilter=oe,t.magFilter=oe,t.wrapS=Ye,t.wrapT=Ye,t.generateMipmaps=!1,t.updateFrom=(...i)=>{this.updateFrom(...i)};const s=new Mt(new We);this.fsQuad=s,this.iesLoader=new Td}async updateFrom(e,t){const s=e.getRenderTarget(),i=e.toneMapping,a=e.getClearAlpha();e.getClearColor(qi);const r=t.length||1;this.setSize(360,180,r),e.setClearColor(0,0),e.toneMapping=Br;const o=this.fsQuad;for(let l=0,d=r;l<d;l++){const f=t[l];f&&(f.matrixAutoUpdate=!1,f.matrix.identity(),o.material.map=f,o.material.transparent=!0,e.setRenderTarget(this,l),o.render(e),f.updateMatrix(),f.matrixAutoUpdate=!0)}o.material.map=null,e.setClearColor(qi,a),e.setRenderTarget(s),e.toneMapping=i,o.dispose()}dispose(){super.dispose(),this.fsQuad.dispose()}}const Md=`

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
`;function Zi(n,e,t,s,i){if(e>s)throw new Error;const a=n.length/e,r=n.constructor.BYTES_PER_ELEMENT*8;let o=1;switch(n.constructor){case Uint8Array:case Uint16Array:case Uint32Array:o=2**r-1;break;case Int8Array:case Int16Array:case Int32Array:o=2**(r-1)-1;break}for(let l=0;l<a;l++){const d=4*l,f=e*l;for(let c=0;c<s;c++)t[i+d+c]=e>=c+1?n[f+c]/o:0}}class Fd extends sl{constructor(){super(),this._textures=[],this.type=le,this.format=ne,this.internalFormat="RGBA32F"}updateAttribute(e,t){const s=this._textures[e];s.updateFrom(t);const i=s.image,a=this.image;if(i.width!==a.width||i.height!==a.height)throw new Error("FloatAttributeTextureArray: Attribute must be the same dimensions when updating single layer.");const{width:r,height:o,data:l}=a,f=r*o*4*e;let c=t.itemSize;c===3&&(c=4),Zi(s.image.data,c,l,4,f),this.dispose(),this.needsUpdate=!0}setAttributes(e){const t=e[0].count,s=e.length;for(let c=0,p=s;c<p;c++)if(e[c].count!==t)throw new Error("FloatAttributeTextureArray: All attributes must have the same item count.");const i=this._textures;for(;i.length<s;){const c=new Kr;i.push(c)}for(;i.length>s;)i.pop();for(let c=0,p=s;c<p;c++)i[c].updateFrom(e[c]);const r=i[0].image,o=this.image;(r.width!==o.width||r.height!==o.height||r.depth!==s)&&(o.width=r.width,o.height=r.height,o.depth=s,o.data=new Float32Array(o.width*o.height*o.depth*4));const{data:l,width:d,height:f}=o;for(let c=0,p=s;c<p;c++){const h=i[c],A=d*f*4*c;let m=e[c].itemSize;m===3&&(m=4),Zi(h.image.data,m,l,4,A)}this.dispose(),this.needsUpdate=!0}}class wd extends Fd{updateNormalAttribute(e){this.updateAttribute(0,e)}updateTangentAttribute(e){this.updateAttribute(1,e)}updateUvAttribute(e){this.updateAttribute(2,e)}updateColorAttribute(e){this.updateAttribute(3,e)}updateFrom(e,t,s,i){this.setAttributes([e,t,s,i])}}const Dd=`

	struct PhysicalCamera {

		float focusDistance;
		float anamorphicRatio;
		float bokehSize;
		int apertureBlades;
		float apertureRotation;

	};

`,Ed=`

	struct EquirectHdrInfo {

		sampler2D marginalWeights;
		sampler2D conditionalWeights;
		sampler2D map;

		float totalSum;

	};

`,Rd=`

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

`,Id=`

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

`,_d=`

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

`,Pd=`

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

`,Gd=`

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

`,Ld=`

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

`,jd=`

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

	${Pd}
	${Gd}
	${Ld}

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

`,Hd=`

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

`,kd=`

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

`,Od=`

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

`,zd=`

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


`,Nd=`

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

`,Ud=`

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

`,Jd=`

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

`,Wd=`

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

`,$i=`

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
`,Kd=`

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

`,Xd=`

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

`,Vd=`

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

`,Qd=`

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

`,Yd=`

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
`,qd=`

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

`,Zd=`

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

`;function $d(n){for(let e=n.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1)),s=n[e];n[e]=n[t],n[t]=s}return n}class ef{constructor(e,t){const s=e**t,i=new Uint16Array(s);let a=s;for(let r=0;r<s;r++)i[r]=r;this.samples=new Float32Array(t),this.strataCount=e,this.restart=function(){a=0},this.next=function(){const{samples:r}=this;a>=i.length&&($d(i),this.restart());let o=i[a++];for(let l=0;l<t;l++)r[l]=(o%e+Math.random())/e,o=Math.floor(o/e);return r}}}class tf{constructor(e,t){let s=0;for(const o of t)s+=o;const i=new Float32Array(s),a=[];let r=0;for(const o of t){const l=new ef(e,o);l.samples=new Float32Array(i.buffer,r,l.samples.length),r+=l.samples.length*4,a.push(l)}this.samples=i,this.strataCount=e,this.next=function(){for(const o of a)o.next();return i},this.restart=function(){for(const o of a)o.restart()}}}class nf extends ve{constructor(e=1,t=1,s=8){super(new Float32Array(1),1,1,ne,le),this.minFilter=te,this.magFilter=te,this.strata=s,this.sampler=null,this.init(e,t,s)}init(e,t,s=this.strata){const{image:i}=this;if(i.width===t&&i.height===e)return;const a=new Array(e*t).fill(4),r=new tf(s,a);i.width=t,i.height=e,i.data=r.samples,this.sampler=r,this.dispose(),this.next()}next(){this.sampler.next(),this.needsUpdate=!0}}function sf(n,e=Math.random){for(let t=n.length-1;t>0;t--){const s=~~((e()-1e-6)*t),i=n[t];n[t]=n[s],n[s]=i}}function rf(n,e){n.fill(0);for(let t=0;t<e;t++)n[t]=1}class er{constructor(e){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(e),this.setSigma(1.5)}findVoid(){const{score:e,binaryPattern:t}=this;let s=1/0,i=-1;for(let a=0,r=t.length;a<r;a++){if(t[a]!==0)continue;const o=e[a];o<s&&(s=o,i=a)}return i}findCluster(){const{score:e,binaryPattern:t}=this;let s=-1/0,i=-1;for(let a=0,r=t.length;a<r;a++){if(t[a]!==1)continue;const o=e[a];o>s&&(s=o,i=a)}return i}setSigma(e){if(e===this.sigma)return;const t=~~(Math.sqrt(10*2*e**2)+1),s=2*t+1,i=new Float32Array(s*s),a=e*e;for(let r=-t;r<=t;r++)for(let o=-t;o<=t;o++){const l=(t+o)*s+r+t,d=r*r+o*o;i[l]=Math.E**(-d/(2*a))}this.lookupTable=i,this.sigma=e,this.radius=t}resize(e){this.size!==e&&(this.size=e,this.score=new Float32Array(e*e),this.binaryPattern=new Uint8Array(e*e))}invert(){const{binaryPattern:e,score:t,size:s}=this;t.fill(0);for(let i=0,a=e.length;i<a;i++)if(e[i]===0){const r=~~(i/s),o=i-r*s;this.updateScore(o,r,1),e[i]=1}else e[i]=0}updateScore(e,t,s){const{size:i,score:a,lookupTable:r}=this,o=this.radius,l=2*o+1;for(let d=-o;d<=o;d++)for(let f=-o;f<=o;f++){const c=(o+f)*l+d+o,p=r[c];let h=e+d;h=h<0?i+h:h%i;let y=t+f;y=y<0?i+y:y%i;const A=y*i+h;a[A]+=s*p}}addPointIndex(e){this.binaryPattern[e]=1;const t=this.size,s=~~(e/t),i=e-s*t;this.updateScore(i,s,1),this.count++}removePointIndex(e){this.binaryPattern[e]=0;const t=this.size,s=~~(e/t),i=e-s*t;this.updateScore(i,s,-1),this.count--}copy(e){this.resize(e.size),this.score.set(e.score),this.binaryPattern.set(e.binaryPattern),this.setSigma(e.sigma),this.count=e.count}}class of{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new er(1),this.savedSamples=new er(1)}generate(){const{samples:e,savedSamples:t,sigma:s,majorityPointsRatio:i,size:a}=this;e.resize(a),e.setSigma(s);const r=Math.floor(a*a*i),o=e.binaryPattern;rf(o,r),sf(o,this.random);for(let c=0,p=o.length;c<p;c++)o[c]===1&&e.addPointIndex(c);for(;;){const c=e.findCluster();e.removePointIndex(c);const p=e.findVoid();if(c===p){e.addPointIndex(c);break}e.addPointIndex(p)}const l=new Uint32Array(a*a);t.copy(e);let d;for(d=e.count-1;d>=0;){const c=e.findCluster();e.removePointIndex(c),l[c]=d,d--}const f=a*a;for(d=t.count;d<f/2;){const c=t.findVoid();t.addPointIndex(c),l[c]=d,d++}for(t.invert();d<f;){const c=t.findCluster();t.removePointIndex(c),l[c]=d,d++}return{data:l,maxValue:f}}}function af(n){return n>=3?4:n}function lf(n){switch(n){case 1:return Tt;case 2:return vr;default:return ne}}class cf extends ve{constructor(e=64,t=1){super(new Float32Array(4),1,1,ne,le),this.minFilter=te,this.magFilter=te,this.size=e,this.channels=t,this.update()}update(){const e=this.channels,t=this.size,s=new of;s.channels=e,s.size=t;const i=af(e),a=lf(i);(this.image.width!==t||a!==this.format)&&(this.image.width=t,this.image.height=t,this.image.data=new Float32Array(t**2*i),this.format=a,this.dispose());const r=this.image.data;for(let o=0,l=e;o<l;o++){const d=s.generate(),f=d.data,c=d.maxValue;for(let p=0,h=f.length;p<h;p++){const y=f[p]/c;r[p*i+o]=y}}this.needsUpdate=!0}}class uf extends ii{onBeforeRender(){this.setDefine("FEATURE_DOF",this.physicalCamera.bokehSize===0?0:1),this.setDefine("FEATURE_BACKGROUND_MAP",this.backgroundMap?1:0),this.setDefine("FEATURE_FOG",this.materials.features.isUsed("FOG")?1:0)}constructor(e){super({transparent:!0,depthWrite:!1,defines:{FEATURE_MIS:1,FEATURE_RUSSIAN_ROULETTE:1,FEATURE_DOF:1,FEATURE_BACKGROUND_MAP:0,FEATURE_FOG:1,RANDOM_TYPE:2,CAMERA_TYPE:0,DEBUG_MODE:0,ATTR_NORMAL:0,ATTR_TANGENT:1,ATTR_UV:2,ATTR_COLOR:3},uniforms:{resolution:{value:new Be},bounces:{value:10},transmissiveBounces:{value:10},physicalCamera:{value:new xd},bvh:{value:new Hu},attributesArray:{value:new wd},materialIndexAttribute:{value:new Wr},materials:{value:new dd},textures:{value:new fd().texture},lights:{value:new Bd},iesProfiles:{value:new Sd().texture},cameraWorldMatrix:{value:new ee},invProjectionMatrix:{value:new ee},backgroundBlur:{value:0},environmentIntensity:{value:1},environmentRotation:{value:new ee},envMapInfo:{value:new gd},backgroundMap:{value:null},seed:{value:0},opacity:{value:1},filterGlossyFactor:{value:0},backgroundAlpha:{value:1},sobolTexture:{value:null},stratifiedTexture:{value:new nf},stratifiedOffsetTexture:{value:new cf(64,1)}},vertexShader:`

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
				${Ku}
				${Vu}
				${Xu}

				// uniform structs
				${Dd}
				${Rd}
				${Ed}
				${Id}

				// random
				#if RANDOM_TYPE == 2 	// Stratified List

					${Zd}

				#elif RANDOM_TYPE == 1 	// Sobol

					${$i}
					${Vr}
					${$u}

					#define rand(v) sobol(v)
					#define rand2(v) sobol2(v)
					#define rand3(v) sobol3(v)
					#define rand4(v) sobol4(v)

				#else 					// PCG

					${$i}

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
				${Wd}
				${Jd}
				${Md}
				${Ud}
				${Nd}

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
				${_d}
				${zd}
				${jd}
				${kd}
				${Od}
				${Hd}

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

				${Kd}
				${Xd}
				${Qd}
				${Vd}
				${qd}
				${Yd}

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

			`}),this.setValues(e)}}const re=.072;function Qt(n){switch(n){case"sphere":return new Tr(re*.52,8,6);case"star":{const e=re*.64,t=re*.25,s=re*.42,i=new il;for(let r=0;r<10;r++){const o=r*Math.PI*2/10-Math.PI/2,l=r%2===0?e:t;r===0?i.moveTo(Math.cos(o)*l,Math.sin(o)*l):i.lineTo(Math.cos(o)*l,Math.sin(o)*l)}i.closePath();const a=new rl(i,{depth:s,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelSegments:1});return a.translate(0,0,-s/2),a}default:return new Us(re,re,re)}}function Yt({material:n,color:e}){return n==="original"?u.jsx("meshStandardMaterial",{color:e,roughness:.65,metalness:.05}):n==="fluid"?u.jsx("meshPhysicalMaterial",{color:e,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5,envMapIntensity:1}):n==="metal"?u.jsx("meshStandardMaterial",{color:e,roughness:.06,metalness:.95,envMapIntensity:2}):n==="emissive"?u.jsx("meshStandardMaterial",{color:e,emissive:e,emissiveIntensity:2.2,roughness:.55,metalness:0}):u.jsx("meshStandardMaterial",{color:e,roughness:.65,metalness:.05})}const df={x:1,y:1,z:1},ff={deformation:"none",fluidDistort:.35,fluidSpeed:1.5},Bn="0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)";function pf(n,e){const t=new $(e);switch(n){case"fluid":return new xe({color:t,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5,envMapIntensity:1});case"metal":return new _e({color:t,roughness:.06,metalness:.95,envMapIntensity:2});case"emissive":return new _e({color:t,emissive:t,emissiveIntensity:2.2,roughness:.55});default:return new _e({color:t,roughness:.65,metalness:.05})}}const Ct=5;function qr(n,e,t,s){if(s==="sphere"){const i=(n+e+t)/3,a=Math.acos(2*Math.random()-1),r=2*Math.PI*Math.random(),o=i*Math.cbrt(Math.random());return[o*Math.sin(a)*Math.cos(r),o*Math.sin(a)*Math.sin(r),o*Math.cos(a)]}return[(Math.random()-.5)*2*n,(Math.random()-.5)*2*e,(Math.random()-.5)*2*t]}function hf(n,e,t,s,i,a,r="box",o="random"){const l=new Ws,d=t*.4,f=s*.4,c=i*.4;for(let p=0;p<e;p++)l.position.set(...qr(d,f,c,r)),o==="random"?l.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2):l.rotation.set(0,0,0),l.scale.set(a.x*Ct,a.y*Ct,a.z*Ct),l.updateMatrix(),n.setMatrixAt(p,l.matrix);n.instanceMatrix.needsUpdate=!0}function mf({url:n,count:e,width:t,height:s,depth:i,markSize:a,markMaterial:r,color:o,seed:l,boundingVolume:d,orientation:f}){const{scene:c}=Ft(n),{normScale:p,center:h}=E.useMemo(()=>{c.updateMatrixWorld(!0);const B=new ce().setFromObject(c),M=new _,S=new _;B.getSize(M),B.getCenter(S);const D=Math.max(M.x,M.y,M.z,.001),w=n.includes("drum")?.63:n.includes("clarinet")?1.2:n.includes("harp")?.825:1;return{normScale:re/D*w,center:S}},[c,n]),y=E.useMemo(()=>{const B=t*.4,M=s*.4,S=i*.4;return Array.from({length:e},()=>({position:qr(B,M,S,d),rotation:f==="random"?[Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2]:[0,0,0]}))},[e,t,s,i,l,d,f]),A=E.useMemo(()=>y.map(()=>c.clone(!0)),[c,y]);E.useEffect(()=>()=>{A.forEach(B=>B.traverse(M=>{M instanceof rt&&M.geometry.dispose()}))},[A]);const m=E.useMemo(()=>r!=="original"?pf(r,o):null,[r,o]);E.useEffect(()=>()=>{m==null||m.dispose()},[m]),E.useEffect(()=>{A.forEach(B=>{B.traverse(M=>{!(M instanceof rt)||!m||(M.material=m)})})},[m,A]);const x=p*a.x*Ct,g=p*a.y*Ct,b=p*a.z*Ct,v=-h.x*x,C=-h.y*g,T=-h.z*b;return u.jsx(u.Fragment,{children:A.map((B,M)=>u.jsx("group",{position:y[M].position,rotation:y[M].rotation,children:u.jsx("primitive",{object:B,position:[v,C,T],scale:[x,g,b]})},M))})}function gf({width:n,depth:e,height:t,color:s,position:i,particleCount:a,markShape:r,markMaterial:o,markSize:l=df,structural:d=ff,customModelUrl:f,labelShow:c,labelData:p,seed:h=0,boundingVolume:y="box",showBounds:A=!0,orientation:m="random"}){const x=E.useRef(null),g=E.useMemo(()=>Qt(r),[r]),b=E.useMemo(()=>{if(y==="sphere"){const B=(n*.4+t*.4+e*.4)/3,M=new Tr(B,12,8),S=new Ai(M);return M.dispose(),S}const C=new Us(n,t,e),T=new Ai(C);return C.dispose(),T},[n,t,e,y]);E.useEffect(()=>{const C=x.current;C&&hf(C,a,n,t,e,l,y,m)},[a,n,e,t,r,l.x,l.y,l.z,h,y,m]),E.useEffect(()=>()=>{g.dispose()},[g]),E.useEffect(()=>()=>{b.dispose()},[b]);const v=r==="custom"&&!!f;return u.jsxs("group",{position:i,children:[A&&u.jsx("lineSegments",{geometry:b,children:u.jsx("lineBasicMaterial",{color:"#666666",transparent:!0,opacity:.7})}),v?u.jsx(E.Suspense,{fallback:null,children:u.jsx(mf,{url:f,count:Math.max(5,a),width:n,height:t,depth:e,markSize:l,markMaterial:o,color:s,seed:h,boundingVolume:y,orientation:m})}):u.jsx("instancedMesh",{ref:x,args:[g,void 0,a],children:u.jsx(Yt,{material:o,structural:d,color:s})},`${a}-${r}`),c&&u.jsxs(u.Fragment,{children:[p.top&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[0,t/2+.8,0],userData:{isLabel:!0,labelText:p.top,labelPos:"top"}}),u.jsx(he,{position:[0,t/2+.8,0],center:!0,style:{pointerEvents:"none"},children:u.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:Bn,whiteSpace:"nowrap",userSelect:"none"},children:p.top})})]}),p.bottom&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[0,-(t/2+.8),0],userData:{isLabel:!0,labelText:p.bottom,labelPos:"bottom"}}),u.jsx(he,{position:[0,-(t/2+.8),0],center:!0,style:{pointerEvents:"none"},children:u.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:Bn,whiteSpace:"nowrap",userSelect:"none"},children:p.bottom})})]}),p.left&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[-(n/2+.2),0,0],userData:{isLabel:!0,labelText:p.left,labelPos:"left"}}),u.jsx(he,{position:[-(n/2+.2),0,0],style:{pointerEvents:"none"},children:u.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:Bn,whiteSpace:"nowrap",userSelect:"none",display:"block",textAlign:"right",transform:"translate(-100%, -50%)"},children:p.left})})]}),p.right&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[n/2+.2,0,0],userData:{isLabel:!0,labelText:p.right,labelPos:"right"}}),u.jsx(he,{position:[n/2+.2,0,0],style:{pointerEvents:"none"},children:u.jsx("span",{style:{fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:Bn,whiteSpace:"nowrap",userSelect:"none",display:"block",transform:"translateY(-50%)"},children:p.right})})]})]})]})}function xf(n,e){const t=new $(e);switch(n){case"fluid":return new xe({color:t,transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5});case"metal":return new _e({color:t,roughness:.06,metalness:.95});case"emissive":return new _e({color:t,emissive:t,emissiveIntensity:2.2,roughness:.55});default:return new _e({color:t,roughness:.65,metalness:.05})}}function Af({url:n,markMaterial:e,markSize:t,color:s}){const{scene:i}=Ft(n),{clone:a,sx:r,sy:o,sz:l,ox:d,oy:f,oz:c}=E.useMemo(()=>{i.updateMatrixWorld(!0);const h=new ce().setFromObject(i),y=new _,A=new _;h.getSize(y),h.getCenter(A);const m=Math.max(y.x,y.y,y.z,.001),x=re/m,g=x*t.x,b=x*t.y,v=x*t.z;return{clone:i.clone(!0),sx:g,sy:b,sz:v,ox:-A.x*g,oy:-A.y*b,oz:-A.z*v}},[i,t.x,t.y,t.z]),p=E.useMemo(()=>e!=="original"?xf(e,s):null,[e,s]);return E.useEffect(()=>()=>{p==null||p.dispose()},[p]),E.useEffect(()=>{p&&a.traverse(h=>{h instanceof rt&&(h.material=p)})},[p,a]),u.jsx("primitive",{object:a,position:[d,f,c],scale:[r,o,l]})}function yf({position:n,count:e,markShape:t,markMaterial:s,markSize:i,color:a,structural:r,customModelUrl:o}){const l=E.useMemo(()=>Qt(t),[t]);E.useEffect(()=>()=>{l.dispose()},[l]);const d=Math.sqrt(e)*re*Math.max(i.x,i.y,i.z)*2.2,f=E.useMemo(()=>Array.from({length:e},(p,h)=>({x:(Math.random()-.5)*d,y:re*2+h*re*1.2+Math.random()*re*.5,z:(Math.random()-.5)*d,rx:Math.random()*Math.PI*2,ry:Math.random()*Math.PI*2,rz:Math.random()*Math.PI*2})),[e,d]),c=-re*.7;return u.jsxs("group",{position:n,children:[u.jsx(In,{type:"fixed",children:u.jsx(Sr,{args:[3,.05,3],position:[0,c,0]})}),f.map((p,h)=>u.jsx(In,{position:[p.x,p.y,p.z],rotation:[p.rx,p.ry,p.rz],colliders:"hull",restitution:.1,friction:.8,linearDamping:.4,angularDamping:.5,children:t==="custom"&&o?u.jsx(E.Suspense,{fallback:null,children:u.jsx(Af,{url:o,markMaterial:s,markSize:i,color:a})}):u.jsx("mesh",{geometry:l,scale:[i.x,i.y,i.z],children:u.jsx(Yt,{material:s,structural:r,color:a})})},h))]})}const ri=E.createContext({colorMode:"distinct",colorGradient:{from:"#EE6655",to:"#4488EE"}});function bf(n,e,t){return"#"+new $(n).lerp(new $(e),Math.max(0,Math.min(1,t))).getHexString()}function Zr(n,e,t,s,i,a){var r,o;if(e.markColor===null)return s;if(i==="continuous"){const l=t.map(h=>h.percentage),d=Math.min(...l),f=Math.max(...l),c=((r=t[n%Math.max(1,t.length)])==null?void 0:r.percentage)??0,p=f>d?(c-d)/(f-d):.5;return bf(a.from,a.to,p)}return((o=t[n%Math.max(1,t.length)])==null?void 0:o.color)??s}function vf(n){return 2*Math.atan(12/n)*180/Math.PI}const $r={1:[0,.5,18],2:[0,2,26],3:[0,4,64]};function Cf({level:n,fov:e,focalLength:t}){const{camera:s,controls:i}=Fr(),a=E.useRef(n),r=E.useRef(t);return E.useEffect(()=>{var o,l,d;if(s instanceof Ks){if(a.current!==n){const[f,c,p]=$r[n];s.position.set(f,c,p),s.lookAt(0,0,0);const h=i;(o=h==null?void 0:h.target)==null||o.set(0,0,0),(l=h==null?void 0:h.update)==null||l.call(h),a.current=n}if(r.current!==t&&r.current>0){const f=t/r.current,c=i;c!=null&&c.spherical?(c.spherical.radius*=f,(d=c.update)==null||d.call(c)):s.position.multiplyScalar(f)}r.current=t,s.fov=e,s.updateProjectionMatrix()}},[s,i,n,e,t]),null}const Jn=14;function oi({url:n,material:e,color:t,sz:s}){const{scene:i}=Ft(n),a=E.useMemo(()=>{const r=i.clone(!0);r.position.set(0,0,0),r.rotation.set(0,0,0),r.scale.set(1,1,1),r.updateMatrixWorld(!0);const o=n.includes("drum")?.63:n.includes("clarinet")?1.2:n.includes("harp")?.825:1,l=new ce().setFromObject(r);if(!l.isEmpty()){const d=new _;l.getSize(d);const f=Math.max(d.x,d.y,d.z,.001),c=re/f*o,p=new _;l.getCenter(p),r.scale.setScalar(c),r.position.set(-p.x*c,-p.y*c,-p.z*c)}if(e!=="original"){const d=e==="fluid"?new xe({color:new $(t),transmission:.92,roughness:.04,metalness:0,ior:1.5,thickness:.5}):new _e({color:new $(t),roughness:e==="metal"?.06:e==="emissive"?.55:.65,metalness:e==="metal"?.95:0,emissive:e==="emissive"?new $(t):new $(0,0,0),emissiveIntensity:e==="emissive"?2.2:0});r.traverse(f=>{f instanceof rt&&(f.material=d)})}return r},[i,n,e,t]);return u.jsx("group",{scale:s,children:u.jsx("primitive",{object:a})})}const yt=Jn*re;function ai(n,e,t){const s=e[t%Math.max(1,e.length)],i={},a=Object.entries(n);for(const[r,o]of a)o&&((o==="numerical"||o==="weight"||o==="count")&&(i[r]=`${(s==null?void 0:s.percentage)??"?"}`),(o==="categorical"||o==="garbageType"||o==="section")&&(i[r]=(s==null?void 0:s.name)??"?"));return i}const Bf="0 0 6px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,1)";function Xe({pos:n,text:e}){const t=n==="top"?"translate(-50%, -100%)":n==="bottom"?"translate(-50%, 0)":n==="left"?"translate(-100%, -50%)":"translateY(-50%)";return u.jsx("span",{"data-phys-label":"",style:{display:"block",fontSize:"12px",color:"#e0e0e0",fontFamily:"Courier New, monospace",textShadow:Bf,whiteSpace:"nowrap",userSelect:"none",transform:t},children:e})}function Dn(n){return n==="numerical"||n==="weight"||n==="count"}function Bt(n,e,t){var a;const s=Math.max(...t.map(r=>r.percentage),1);return .2+1.8*((((a=t[e%Math.max(1,t.length)])==null?void 0:a.percentage)??s)/s)}function eo(n,e,t){return n==="center"?[0,0,0]:e==="X"?[0,n==="start"?-t:t,0]:[n==="start"?t:-t,0,0]}function Tf({config:n,layers:e,bindings:t,markLabelConfig:s}){const i=E.useMemo(()=>Qt(n.shape),[n.shape]);E.useEffect(()=>()=>{i.dispose()},[i]);const{colorMode:a,colorGradient:r}=E.useContext(ri),o=Math.PI/180,l=Jn,d=Zr(0,t,e,n.color,a,r),f=n.scale??1,c={x:n.size.x*f*(t.markSizeX?Bt(t.markSizeX,0,e):1),y:n.size.y*f*(t.markSizeY?Bt(t.markSizeY,0,e):1),z:n.size.z*f*(t.markSizeZ?Bt(t.markSizeZ,0,e):1)},p=l*c.y*.036+.8,h=l*c.x*.036+.8,y=ai(s.slots,e,0),A=[n.orientation.x*o,n.orientation.y*o,n.orientation.z*o];return u.jsxs("group",{position:[n.position.x,n.position.y,n.position.z],rotation:A,children:[n.shape==="custom"&&n.customModelUrl?u.jsx(E.Suspense,{fallback:null,children:u.jsx(oi,{url:n.customModelUrl,material:n.material,color:d,sz:[l*c.x,l*c.y,l*c.z]})}):u.jsx("mesh",{geometry:i,scale:[l*c.x,l*c.y,l*c.z],children:u.jsx(Yt,{material:n.material,structural:n.structural,color:d})}),s.show&&u.jsxs(u.Fragment,{children:[y.top&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[0,p,0],userData:{isLabel:!0,labelText:y.top,labelPos:"top"}}),u.jsx(he,{zIndexRange:[1,0],position:[0,p,0],style:{pointerEvents:"none"},children:u.jsx(Xe,{pos:"top",text:y.top})})]}),y.bottom&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[0,-p,0],userData:{isLabel:!0,labelText:y.bottom,labelPos:"bottom"}}),u.jsx(he,{zIndexRange:[1,0],position:[0,-p,0],style:{pointerEvents:"none"},children:u.jsx(Xe,{pos:"bottom",text:y.bottom})})]}),y.left&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[-h,0,0],userData:{isLabel:!0,labelText:y.left,labelPos:"left"}}),u.jsx(he,{zIndexRange:[1,0],position:[-h,0,0],style:{pointerEvents:"none"},children:u.jsx(Xe,{pos:"left",text:y.left})})]}),y.right&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[h,0,0],userData:{isLabel:!0,labelText:y.right,labelPos:"right"}}),u.jsx(he,{zIndexRange:[1,0],position:[h,0,0],style:{pointerEvents:"none"},children:u.jsx(Xe,{pos:"right",text:y.right})})]})]})]})}function Sf({shape:n,customModelUrl:e,customModelHasMat:t,material:s,structural:i,color:a,scale:r}){const o=E.useMemo(()=>Qt(n),[n]);return E.useEffect(()=>()=>{o.dispose()},[o]),n==="custom"&&e?u.jsx(E.Suspense,{fallback:null,children:u.jsx(oi,{url:e,material:s,color:a,sz:r})}):u.jsx("mesh",{geometry:o,scale:r,children:u.jsx(Yt,{material:s,structural:i,color:a})})}function Mf({markConfig:n,collection1Config:e,color:t,layers:s,bindings:i,markLabelConfig:a}){const r=s.length||e.alignCount,{alignAxis:o,alignSpacing:l,alignAnchor:d}=e,f=Jn,c=Math.PI/180,p=(r-1)/2,h=[n.orientation.x*c,n.orientation.y*c,n.orientation.z*c],{colorMode:y,colorGradient:A}=E.useContext(ri);function m(b){return Zr(b,i,s,t,y,A)}const x=n.scale??1;function g(b){const v={x:n.size.x*x*(i.markSizeX?Bt(i.markSizeX,b,s):1),y:n.size.y*x*(i.markSizeY?Bt(i.markSizeY,b,s):1),z:n.size.z*x*(i.markSizeZ?Bt(i.markSizeZ,b,s):1)};return[f*v.x,f*v.y,f*v.z]}return u.jsx("group",{children:Array.from({length:r},(b,v)=>{var U,Y;const C=(v-p)*l,T=g(v),B=o==="X"?T[1]*.036:T[0]*.036,M=eo(d,o,B),S=o==="X"?[C+M[0],M[1],M[2]]:[M[0],C+M[1],M[2]],D=T[1]*.036+.8,w=T[0]*.036+.8,F=ai(a.slots,s,v),R=(U=s[v%Math.max(1,s.length)])==null?void 0:U.name,I=(Y=n.categoryShapes)==null?void 0:Y[R??""],P=(I==null?void 0:I.shape)??n.shape,G=I?I.customModelUrl:n.customModelUrl,L=I?I.customModelHasMat:n.customModelHasMat,z=I!=null&&I.customModelHasMat?"original":n.material;return u.jsxs("group",{position:S,rotation:h,children:[u.jsx(Sf,{shape:P,customModelUrl:G,customModelHasMat:L,material:z,structural:n.structural,color:m(v),scale:T}),a.show&&u.jsxs(u.Fragment,{children:[F.top&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[0,D,0],userData:{isLabel:!0,labelText:F.top,labelPos:"top"}}),u.jsx(he,{zIndexRange:[1,0],position:[0,D,0],style:{pointerEvents:"none"},children:u.jsx(Xe,{pos:"top",text:F.top})})]}),F.bottom&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[0,-D,0],userData:{isLabel:!0,labelText:F.bottom,labelPos:"bottom"}}),u.jsx(he,{zIndexRange:[1,0],position:[0,-D,0],style:{pointerEvents:"none"},children:u.jsx(Xe,{pos:"bottom",text:F.bottom})})]}),F.left&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[-w,0,0],userData:{isLabel:!0,labelText:F.left,labelPos:"left"}}),u.jsx(he,{zIndexRange:[1,0],position:[-w,0,0],style:{pointerEvents:"none"},children:u.jsx(Xe,{pos:"left",text:F.left})})]}),F.right&&u.jsxs(u.Fragment,{children:[u.jsx("group",{position:[w,0,0],userData:{isLabel:!0,labelText:F.right,labelPos:"right"}}),u.jsx(he,{zIndexRange:[1,0],position:[w,0,0],style:{pointerEvents:"none"},children:u.jsx(Xe,{pos:"right",text:F.right})})]})]})]},v)})})}function to({markConfig:n,collection1Config:e,color:t,position:s,layers:i,bindings:a,heightOverride:r,markLabelConfig:o,colLabelConfig:l,layerIndex:d,scatterSeed:f}){var C;const c=n.scale??1,p={x:n.size.x*c,y:n.size.y*c,z:n.size.z*c};if(e.arrangement==="alignment")return u.jsx("group",{position:s,children:u.jsx(Mf,{markConfig:n,collection1Config:e,color:t,layers:i,bindings:a,markLabelConfig:o})});if(e.arrangement==="piling")return u.jsx(yf,{position:s,count:e.pilingCount,markShape:n.shape,markMaterial:n.material,markSize:p,color:t,structural:n.structural,customModelUrl:n.shape==="custom"?n.customModelUrl:void 0},e.pilingCount);const{scatterDimensions:h,scatterCount:y,scatterDensity:A,scatterMode:m}=e,x=a.scatterCount!==null?Math.max(1,Math.round(((C=i[d%Math.max(1,i.length)])==null?void 0:C.percentage)??y)):null,g=x!==null?x:(m??"count")==="density"?Math.max(5,Math.round(A*h.x*(r??h.y)*h.z)):y,b=r??h.y,v=ai(l.slots,i,d);return u.jsx(gf,{width:h.x,depth:h.z,height:b,color:t,position:s,particleCount:g,markShape:n.shape,markMaterial:n.material,markSize:p,structural:n.structural,customModelUrl:n.shape==="custom"?n.customModelUrl:void 0,labelShow:l.show,labelData:v,seed:f,boundingVolume:e.scatterBoundingVolume??"box",showBounds:e.scatterShowBounds??!0,orientation:e.scatterOrientation??"random"})}const En=8;function Ff({markConfig:n,collection1Config:e,layers:t,bindings:s,markLabelConfig:i,colLabelConfig:a,scatterSeed:r}){var f,c;const o=((f=t[0])==null?void 0:f.color)??e.color,l=Math.max(...t.map(p=>p.percentage),1),d=Dn(s.scatterSize)&&e.arrangement==="scattering"?Math.max(.5,(((c=t[0])==null?void 0:c.percentage)??50)/l*En):void 0;return u.jsx(to,{markConfig:n,collection1Config:e,color:o,position:[0,0,0],layers:t,bindings:s,heightOverride:d,markLabelConfig:i,colLabelConfig:a,layerIndex:0,scatterSeed:r})}function wf({markConfig:n,collection1Config:e,collection2Config:t,layers:s,bindings:i,markLabelConfig:a,colLabelConfig:r,scatterSeed:o}){const{arrangement:l,alignCount:d,alignAxis:f,alignSpacing:c,alignAnchor:p,scatterCount:h,scatterDimensions:y,color:A}=t,m=s.length||d,x=E.useMemo(()=>{if(l==="alignment"){const b=Array.from({length:m},(S,D)=>{const w=s[D%Math.max(1,s.length)];return{color:(w==null?void 0:w.color)??A,name:(w==null?void 0:w.name)??`Group ${D+1}`,pct:(w==null?void 0:w.percentage)??0}}),v=Math.max(...s.map(S=>S.percentage),1),C=b.map(S=>{if(e.arrangement==="scattering"){const I=e.scatterDimensions;return f==="X"?I.x:Dn(i.scatterSize)?Math.max(.5,S.pct/v*En):I.y}const D=e,w=n.scale??1,F=n.size.x*w*yt,R=n.size.y*w*yt;return f==="X"?D.alignAxis==="X"?(D.alignCount-1)*D.alignSpacing+F:F:D.alignAxis==="Y"?(D.alignCount-1)*D.alignSpacing+R:R}),T=b.map(S=>{if(e.arrangement==="scattering"){const F=e.scatterDimensions;return f==="X"?Dn(i.scatterSize)?Math.max(.5,S.pct/v*En):F.y:F.x}const D=e,w=n.scale??1;return f==="X"?D.alignAxis==="Y"?(D.alignCount-1)*D.alignSpacing+n.size.y*w*yt:n.size.y*w*yt:D.alignAxis==="X"?(D.alignCount-1)*D.alignSpacing+n.size.x*w*yt:n.size.x*w*yt});let M=-(C.reduce((S,D)=>S+D,0)+(m-1)*c)/2;return b.map((S,D)=>{const w=C[D],F=T[D],R=M+w/2;M+=w+c;const I=eo(p,f,F/2),P=f==="X"?[R+I[0],I[1],I[2]]:[I[0],R+I[1],I[2]];return{...S,position:P,perpExt:F}})}return Array.from({length:h},(b,v)=>{const C=s[v%Math.max(1,s.length)];return{position:[(Math.random()-.5)*y.x*.8,(Math.random()-.5)*y.y*.8,(Math.random()-.5)*y.z*.8],color:(C==null?void 0:C.color)??A,name:(C==null?void 0:C.name)??`Group ${v+1}`,pct:(C==null?void 0:C.percentage)??0,perpExt:0}})},[l,m,f,c,p,h,y.x,y.y,y.z,s,A,i.scatterSize,e.arrangement,e.alignAxis,e.alignCount,e.alignSpacing,e.scatterDimensions.x,e.scatterDimensions.y,n.size.x,n.size.y,o]),g=Math.max(...s.map(b=>b.percentage),1);return u.jsx("group",{children:x.map(({position:b,color:v,name:C,pct:T},B)=>{var w;const M=Dn(i.scatterSize)&&e.arrangement==="scattering"?Math.max(.5,T/g*En):void 0,S=(w=n.categoryShapes)==null?void 0:w[C],D=S?{...n,shape:S.shape,customModelUrl:S.customModelUrl,customModelHasMat:S.customModelHasMat,customModelName:S.customModelName,material:S.customModelHasMat?"original":n.material}:n;return u.jsx(to,{markConfig:D,collection1Config:e,color:v,position:b,layers:s,bindings:i,heightOverride:M,markLabelConfig:a,colLabelConfig:r,layerIndex:B%Math.max(1,s.length),scatterSeed:o},B)})})}function Df({config:n}){const e=E.useMemo(()=>Qt(n.shape),[n.shape]);E.useEffect(()=>()=>{e.dispose()},[e]);const t=Math.PI/180,s=Jn,i=[n.orientation.x*t,n.orientation.y*t,n.orientation.z*t];return u.jsx("group",{position:[n.position.x,n.position.y,n.position.z],rotation:i,children:n.shape==="custom"&&n.customModelUrl?u.jsx(E.Suspense,{fallback:null,children:u.jsx(oi,{url:n.customModelUrl,material:n.material,color:n.color,sz:[s*n.size.x,s*n.size.y,s*n.size.z]})}):u.jsx("mesh",{geometry:e,scale:[s*n.size.x,s*n.size.y,s*n.size.z],children:u.jsx(Yt,{material:n.material,structural:n.structural,color:n.color})})})}function Ef({onSamplesUpdate:n,downloadRenderRef:e}){const{gl:t,scene:s,camera:i}=Fr(),a=E.useRef(n);return a.current=n,E.useEffect(()=>{let r=!1,o=null,l=null,d=null;async function f(){if(await new Promise(b=>setTimeout(b,0)),r)return;const c=new uf;l=new sd(t),l.setSize(t.domElement.width,t.domElement.height),l.camera=i,l.material=c,s.updateMatrixWorld(!0);const p=new ld(s),{bvh:h,textures:y,materials:A,lights:m}=p.generate();if(r){l.dispose();return}const{geometry:x}=p;if(c.bvh.updateFrom(h),c.attributesArray.updateFrom(x.attributes.normal,x.attributes.tangent,x.attributes.uv,x.attributes.color),c.materialIndexAttribute.updateFrom(x.attributes.materialIndex),c.textures.setTextures(t,2048,2048,y),c.materials.updateFrom(A,y),c.lights.updateFrom(m),s.environment)try{c.envMapInfo.updateFrom(s.environment)}catch{}c.uniforms.backgroundAlpha.value=0,d=new Mt(new We({map:l.target.texture})),e.current=()=>{const b=l.samples;t.domElement.toBlob(async v=>{if(!v)return;const C=document.createElement("canvas");C.width=t.domElement.width,C.height=t.domElement.height;const T=C.getContext("2d"),B=await createImageBitmap(v);T.drawImage(B,0,0),s.updateMatrixWorld();const M=[];if(s.traverse(S=>{if(S.userData.isLabel){const D=new _;S.getWorldPosition(D),M.push({worldPos:D,text:S.userData.labelText,pos:S.userData.labelPos??"top"})}}),M.length>0){const S=window.devicePixelRatio||1,D=Math.round(12*S);T.save(),T.font=`${D}px 'Courier New', monospace`,T.shadowColor="rgba(0,0,0,1)",T.shadowBlur=6*S,T.shadowOffsetX=0,T.shadowOffsetY=S,T.fillStyle="#e0e0e0";for(const{worldPos:w,text:F,pos:R}of M){const I=w.clone().project(i);if(I.z>1)continue;const P=(I.x*.5+.5)*C.width,G=(I.y*-.5+.5)*C.height;R==="top"?(T.textAlign="center",T.textBaseline="bottom"):R==="bottom"?(T.textAlign="center",T.textBaseline="top"):R==="left"?(T.textAlign="right",T.textBaseline="middle"):(T.textAlign="left",T.textBaseline="middle"),T.fillText(F,P,G)}T.restore()}C.toBlob(S=>{if(!S)return;const D=URL.createObjectURL(S),w=document.createElement("a");w.download=`render_${b}spp.png`,w.href=D,w.click(),URL.revokeObjectURL(D)},"image/png")},"image/png")},i.updateMatrixWorld();function g(){r||!l||!d||(i.updateMatrixWorld(),l.update(),d.material.map=l.target.texture,t.setRenderTarget(null),d.render(t),a.current(l.samples),o=requestAnimationFrame(g))}o=requestAnimationFrame(g)}return f().catch(console.error),()=>{r=!0,o!==null&&cancelAnimationFrame(o),l==null||l.dispose(),d==null||d.dispose(),e.current=null}},[t,s,i,e]),null}function Rf({config:n}){const e=n.background==="ocean";return u.jsxs(u.Fragment,{children:[e?u.jsx("color",{attach:"background",args:["#7ab8d4"]}):u.jsx("color",{attach:"background",args:["#050505"]}),u.jsx(Qs,{preset:n.hdriPreset,background:!1}),e&&u.jsxs(u.Fragment,{children:[u.jsx(Yu,{distance:45e4,sunPosition:[5,1.2,8],turbidity:9,rayleigh:3,mieCoefficient:.005,mieDirectionalG:.7}),u.jsx("fog",{attach:"fog",args:["#a8d4ea",25,140]}),u.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-7.2,0],children:[u.jsx("planeGeometry",{args:[400,400,1,1]}),u.jsx("meshPhysicalMaterial",{color:"#0c3a58",roughness:.06,metalness:.65,reflectivity:.9})]})]}),u.jsx("ambientLight",{intensity:e?.5:.18}),u.jsx("directionalLight",{position:[8,18,6],intensity:e?1.4:1.8,color:e?"#fff8e0":"#fffaf0"}),u.jsx("directionalLight",{position:[-6,4,-8],intensity:e?.6:.4,color:e?"#c0e8ff":"#c0ccff"})]})}function If({level:n,markConfig:e,collection1Config:t,collection2Config:s,sceneConfig:i,layers:a,bindings:r,markLabelConfig:o,colLabelConfig:l,decorations:d,colorMode:f,colorGradient:c,scatterSeed:p,datasetTitle:h,pathTracingActive:y,onSamplesUpdate:A,downloadRenderRef:m}){const x=vf(i.focalLength),g=$r[n],b=i.background==="ocean";return u.jsxs(kn,{camera:{position:g,fov:x,near:.1,far:500},style:{width:"100%",height:"100%"},frameloop:y?"never":"always",gl:{antialias:!0,toneMapping:Vs,toneMappingExposure:b?.95:1.35,preserveDrawingBuffer:!0},children:[u.jsx(Cf,{level:n,fov:x,focalLength:i.focalLength}),u.jsx(Rf,{config:i}),u.jsx(ri.Provider,{value:{colorMode:f,colorGradient:c},children:u.jsxs(Mr,{gravity:[0,-9.81,0],timeStep:"vary",children:[n===1&&u.jsx(Tf,{config:e,layers:a,bindings:r,markLabelConfig:o}),n===2&&u.jsx(Ff,{markConfig:e,collection1Config:t,layers:a,bindings:r,markLabelConfig:o,colLabelConfig:l,scatterSeed:p}),n===3&&u.jsx(wf,{markConfig:e,collection1Config:t,collection2Config:s,layers:a,bindings:r,markLabelConfig:o,colLabelConfig:l,scatterSeed:p}),d.map(v=>u.jsx(Df,{config:v},v.id)),h&&u.jsx(he,{zIndexRange:[1,0],position:[0,9,0],center:!0,style:{pointerEvents:"none",whiteSpace:"nowrap"},children:u.jsx("span",{style:{fontSize:"16px",fontWeight:"600",color:"#ffffff"},children:h})})]})}),u.jsx(On,{makeDefault:!0,dampingFactor:.08,minDistance:1,maxDistance:400,target:[0,0,0]}),y&&A&&m&&u.jsx(Ef,{onSamplesUpdate:A,downloadRenderRef:m})]})}const no=3,so="mark",io={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},scale:6,size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},categoryShapes:{Strings:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/stradivari_violin.glb",customModelHasMat:!0,customModelName:"stradivari_violin"},Brass:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/trumpet.glb",customModelHasMat:!0,customModelName:"trumpet"},Woodwinds:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/clarinet_model_with_annotations.glb",customModelHasMat:!0,customModelName:"clarinet_model_with_annotations"},Percussion:{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/drum.glb",customModelHasMat:!0,customModelName:"drum"},"Piano & Harp":{shape:"custom",customModelUrl:"/phys_tool/src/assets/models/harp.glb",customModelHasMat:!0,customModelName:"harp"}}},ro={arrangement:"scattering",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},oo={arrangement:"alignment",color:"#9D9BF4",alignCount:5,alignAxis:"X",alignSpacing:.5,alignAnchor:"end",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},ao={background:"dark",hdriPreset:"city",focalLength:130},lo={markColor:null,markGeometry:"garbageType",scatterSize:"weight",scatterCount:"weight",c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null},co={show:!1,slots:{top:null,bottom:null,left:null,right:null}},uo={show:!0,slots:{top:"weight",bottom:"garbageType",left:null,right:null}},fo=[],po=[{id:"1",name:"Strings",percentage:80,color:"#C8A882"},{id:"2",name:"Brass",percentage:28,color:"#D4A017"},{id:"3",name:"Woodwinds",percentage:20,color:"#4A7C59"},{id:"4",name:"Percussion",percentage:10,color:"#5C6B7A"},{id:"5",name:"Piano & Harp",percentage:4,color:"#8B7BAB"}],ho="mahler",_f={level:no,activeElement:so,markConfig:io,col1Config:ro,col2Config:oo,sceneConfig:ao,bindings:lo,markLabelConfig:co,colLabelConfig:uo,decorations:fo,layers:po,activeDataset:ho},Pf=Object.freeze(Object.defineProperty({__proto__:null,activeDataset:ho,activeElement:so,bindings:lo,col1Config:ro,col2Config:oo,colLabelConfig:uo,decorations:fo,default:_f,layers:po,level:no,markConfig:io,markLabelConfig:co,sceneConfig:ao},Symbol.toStringTag,{value:"Module"})),mo=3,go="collection2",xo={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},size:{x:10,y:10,z:10},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/apple.glb",customModelHasMat:!0,customModelName:"apple"},Ao={arrangement:"scattering",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},yo={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"end",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},bo={background:"dark",hdriPreset:"city",focalLength:130},vo={markColor:"garbageType",scatterSize:"weight",c1AlignCount:"count",c2AlignCount:"count",markSizeX:null,markSizeY:null,markSizeZ:null},Co={show:!0,slots:{top:"garbageType",bottom:null,left:null,right:null}},Bo={show:!0,slots:{top:null,bottom:"garbageType",left:null,right:null}},To=[],So=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],Gf={level:mo,activeElement:go,markConfig:xo,col1Config:Ao,col2Config:yo,sceneConfig:bo,bindings:vo,markLabelConfig:Co,colLabelConfig:Bo,decorations:To,layers:So},Lf=Object.freeze(Object.defineProperty({__proto__:null,activeElement:go,bindings:vo,col1Config:Ao,col2Config:yo,colLabelConfig:Bo,decorations:To,default:Gf,layers:So,level:mo,markConfig:xo,markLabelConfig:Co,sceneConfig:bo},Symbol.toStringTag,{value:"Module"})),Mo=2,Fo="scene",wo={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/flowers.glb",customModelHasMat:!0,customModelName:"flowers"},Do={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:.9,alignAnchor:"end",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1},Eo={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1},Ro={background:"dark",hdriPreset:"dawn",focalLength:130},Io={markColor:null,scatterSize:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:"weight",markSizeZ:null},_o={show:!0,slots:{top:"weight",bottom:"garbageType",left:null,right:null}},Po={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Go=[{id:"dec_1781047628256",shape:"box",material:"metal",color:"#24271d",position:{x:0,y:-.05,z:0},size:{x:8,y:.1,z:6.6},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}}],Lo=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],jf={level:Mo,activeElement:Fo,markConfig:wo,col1Config:Do,col2Config:Eo,sceneConfig:Ro,bindings:Io,markLabelConfig:_o,colLabelConfig:Po,decorations:Go,layers:Lo},Hf=Object.freeze(Object.defineProperty({__proto__:null,activeElement:Fo,bindings:Io,col1Config:Do,col2Config:Eo,colLabelConfig:Po,decorations:Go,default:jf,layers:Lo,level:Mo,markConfig:wo,markLabelConfig:_o,sceneConfig:Ro},Symbol.toStringTag,{value:"Module"})),jo=3,Ho="mark",ko={shape:"box",material:"metal",color:"#F06951",position:{x:0,y:0,z:0},size:{x:4.6,y:4.6,z:4.6},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},Oo={arrangement:"scattering",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterCount:310,scatterDimensions:{x:13,y:4,z:8},scatterDensity:1},zo={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"Y",alignSpacing:.5,alignAnchor:"center",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1},No={background:"dark",hdriPreset:"sunset",focalLength:130},Uo={markColor:"garbageType",scatterSize:"weight",c1AlignCount:null,c2AlignCount:"count",markSizeX:null,markSizeY:null,markSizeZ:null},Jo={show:!1,slots:{top:null,bottom:null,left:null,right:null}},Wo={show:!0,slots:{top:null,bottom:null,left:"garbageType",right:"weight"}},Ko=[],Xo=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],kf={level:jo,activeElement:Ho,markConfig:ko,col1Config:Oo,col2Config:zo,sceneConfig:No,bindings:Uo,markLabelConfig:Jo,colLabelConfig:Wo,decorations:Ko,layers:Xo},Of=Object.freeze(Object.defineProperty({__proto__:null,activeElement:Ho,bindings:Uo,col1Config:Oo,col2Config:zo,colLabelConfig:Wo,decorations:Ko,default:kf,layers:Xo,level:jo,markConfig:ko,markLabelConfig:Jo,sceneConfig:No},Symbol.toStringTag,{value:"Module"})),Vo=2,Qo="mark",Yo={shape:"custom",material:"original",color:"#F06951",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5},customModelUrl:"/phys_tool/src/assets/models/cigarette.glb",customModelHasMat:!0,customModelName:"cigarette"},qo={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:.5,alignAnchor:"end",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1},Zo={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1},$o={background:"dark",hdriPreset:"city",focalLength:130},ea={markColor:null,scatterSize:null,c1AlignCount:"count",c2AlignCount:null,markSizeX:null,markSizeY:"weight",markSizeZ:null},ta={show:!0,slots:{top:"weight",bottom:"garbageType",left:null,right:null}},na={show:!1,slots:{top:null,bottom:null,left:null,right:null}},sa=[],ia=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],zf={level:Vo,activeElement:Qo,markConfig:Yo,col1Config:qo,col2Config:Zo,sceneConfig:$o,bindings:ea,markLabelConfig:ta,colLabelConfig:na,decorations:sa,layers:ia},Nf=Object.freeze(Object.defineProperty({__proto__:null,activeElement:Qo,bindings:ea,col1Config:qo,col2Config:Zo,colLabelConfig:na,decorations:sa,default:zf,layers:ia,level:Vo,markConfig:Yo,markLabelConfig:ta,sceneConfig:$o},Symbol.toStringTag,{value:"Module"})),Uf=Object.assign({"./presets/Orchestra.json":Pf,"./presets/apple scene.json":Lf,"./presets/flowers.json":Hf,"./presets/garbage_in_the_ocean.json":Of,"./presets/smoking.json":Nf}),Tn=Object.entries(Uf).map(([n,e])=>{const t=n.replace(/^.*\//,"").replace(/\.json$/,""),s=t.replace(/_/g," ").replace(/\b\w/g,i=>i.toUpperCase());return{id:`preset_${t}`,name:s,createdAt:"",data:e.default}});function Jf(n,e){const t=JSON.stringify(e,null,2),s=new Blob([t],{type:"application/json"}),i=URL.createObjectURL(s),a=document.createElement("a");a.href=i,a.download=n.trim().replace(/\s+/g,"_")+".json",a.click(),URL.revokeObjectURL(i)}const Ln={padding:"8px 16px",borderRadius:"8px",fontSize:"13px",fontWeight:"500",cursor:"pointer",fontFamily:"inherit",border:"none",transition:"opacity 0.1s"};function ra({onClose:n,children:e}){return u.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999},onClick:n,children:u.jsx("div",{style:{background:"#fff",borderRadius:"14px",width:"340px",maxWidth:"90vw",boxShadow:"0 16px 48px rgba(0,0,0,0.28)",overflow:"hidden",fontFamily:"inherit"},onClick:t=>t.stopPropagation(),children:e})})}function Wf({initialName:n,onSave:e,onClose:t}){const[s,i]=E.useState(n);function a(){const r=s.trim();r&&e(r)}return u.jsx(ra,{onClose:t,children:u.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"14px"},children:[u.jsx("div",{style:{fontSize:"15px",fontWeight:"700",color:"#1D1D1F"},children:"Save Scene"}),u.jsx("input",{type:"text",value:s,onChange:r=>i(r.target.value),onKeyDown:r=>{r.key==="Enter"&&a(),r.key==="Escape"&&t()},placeholder:"Scene name…",autoFocus:!0,style:{background:"#F2F2F7",border:"1.5px solid #D1D1D6",borderRadius:"8px",padding:"9px 12px",fontSize:"13px",color:"#1D1D1F",outline:"none",fontFamily:"inherit",width:"100%",boxSizing:"border-box"}}),u.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[u.jsx("button",{onClick:t,style:{...Ln,background:"#F2F2F7",color:"#6C6C70"},children:"Cancel"}),u.jsx("button",{onClick:a,disabled:!s.trim(),style:{...Ln,background:"#007AFF",color:"#fff",opacity:s.trim()?1:.4},children:"Save"})]})]})})}function tr({children:n}){return u.jsx("div",{style:{padding:"8px 20px 4px",fontSize:"10px",fontWeight:"700",letterSpacing:"0.08em",textTransform:"uppercase",color:"#AEAEB2"},children:n})}function Kf({saves:n,onLoad:e,onDelete:t,onClose:s,currentName:i,currentData:a}){const[r,o]=E.useState(null);function l(d,f,c){return u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"11px 20px",cursor:"pointer",background:r===d.id?"#F8F8FA":"transparent",borderBottom:c?"none":"1px solid #F2F2F7",transition:"background 0.08s"},onClick:()=>e(d),onMouseEnter:()=>o(d.id),onMouseLeave:()=>o(null),children:[u.jsxs("div",{style:{flex:1,minWidth:0},children:[u.jsx("div",{style:{fontSize:"13px",fontWeight:"600",color:"#1D1D1F"},children:d.name}),d.createdAt&&u.jsx("div",{style:{fontSize:"10px",color:"#8E8E93",marginTop:"2px"},children:new Date(d.createdAt).toLocaleString()})]}),f&&u.jsx("button",{onClick:p=>{p.stopPropagation(),t(d.id)},title:"Delete",style:{background:"none",border:"none",cursor:"pointer",color:"#FF3B30",fontSize:"17px",lineHeight:1,padding:"4px 6px",flexShrink:0},children:"×"})]},d.id)}return u.jsx(ra,{onClose:s,children:u.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[u.jsx("div",{style:{padding:"16px 20px",borderBottom:"1px solid #E5E5EA",fontSize:"15px",fontWeight:"700",color:"#1D1D1F"},children:"Load Scene"}),u.jsxs("div",{style:{maxHeight:"380px",overflowY:"auto"},children:[Tn.length>0&&u.jsxs(u.Fragment,{children:[u.jsx(tr,{children:"Presets"}),Tn.map((d,f)=>l(d,!1,f===Tn.length-1))]}),n.length>0&&u.jsxs(u.Fragment,{children:[u.jsx(tr,{children:"My Saves"}),n.map((d,f)=>l(d,!0,f===n.length-1))]}),Tn.length===0&&n.length===0&&u.jsx("div",{style:{padding:"36px 20px",textAlign:"center",color:"#8E8E93",fontSize:"13px"},children:"No saved scenes yet"})]}),u.jsxs("div",{style:{padding:"12px 20px",borderTop:"1px solid #E5E5EA",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("button",{onClick:()=>Jf(i,a),title:"Export current scene as JSON",style:{...Ln,background:"#F2F2F7",color:"#007AFF",padding:"7px 12px"},children:"Export scene"}),u.jsx("button",{onClick:s,style:{...Ln,background:"#F2F2F7",color:"#6C6C70"},children:"Close"})]})]})})}const oa="phys_tool_saves";function xs(){try{return JSON.parse(localStorage.getItem(oa)??"[]")}catch{return[]}}function As(n){localStorage.setItem(oa,JSON.stringify(n))}const Sn={garbageInOcean:{label:"Garbage in the Ocean",categoricalCol:"Garbage Type",numericalCol:"Weight",layers:[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}]},mahler:{label:"Mahler's Symphony No. 8 Orchestra",categoricalCol:"Orchestra Section",numericalCol:"Number of Instruments",layers:[{id:"1",name:"Strings",percentage:80,color:"#C8A882"},{id:"2",name:"Brass",percentage:28,color:"#D4A017"},{id:"3",name:"Woodwinds",percentage:20,color:"#4A7C59"},{id:"4",name:"Percussion",percentage:10,color:"#5C6B7A"},{id:"5",name:"Piano & Harp",percentage:4,color:"#8B7BAB"}]}};function Xf({label:n,type:e,varName:t}){const s=`phys-var/${e}`;return u.jsxs("div",{draggable:!0,onDragStart:i=>{i.dataTransfer.setData("phys-var/name",t),i.dataTransfer.setData(s,"1"),i.dataTransfer.effectAllowed="copy"},title:`Drag to bind ${n}`,style:{display:"inline-flex",alignItems:"center",gap:"5px",background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"6px 10px",fontSize:"11px",color:"#1D1D1F",fontWeight:"600",cursor:"grab",userSelect:"none",whiteSpace:"nowrap"},children:[u.jsx("span",{style:{fontSize:"10px",color:"#8E8E93"},children:e==="numerical"?"#":"◈"}),n]})}function Vf({layers:n,onChange:e,onDatasetChange:t,selectedDataset:s="garbageInOcean"}){function i(o){e(Sn[o].layers),t==null||t(o)}const a=Sn[s]??Sn.garbageInOcean,r={padding:"6px 8px",verticalAlign:"middle",fontSize:"12px",color:"#1D1D1F"};return u.jsxs("div",{style:{padding:"14px 14px 16px",display:"flex",flexDirection:"column",gap:"12px"},children:[u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[u.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600"},children:"Dataset"}),u.jsx("select",{value:s,onChange:o=>i(o.target.value),style:{background:"#F2F2F7",border:"1px solid #D1D1D6",borderRadius:"8px",color:"#1D1D1F",fontSize:"13px",padding:"7px 10px",fontFamily:"inherit",cursor:"pointer",outline:"none",width:"100%"},children:Object.entries(Sn).map(([o,l])=>u.jsx("option",{value:o,children:l.label},o))})]}),u.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[u.jsx("thead",{children:u.jsxs("tr",{style:{borderBottom:"1px solid #E5E5EA"},children:[u.jsx("th",{style:{...r,textAlign:"left",color:"#8E8E93",fontWeight:"500",fontSize:"11px"},children:a.categoricalCol}),u.jsx("th",{style:{...r,textAlign:"right",color:"#8E8E93",fontWeight:"500",fontSize:"11px",width:"60px"},children:a.numericalCol})]})}),u.jsx("tbody",{children:n.map((o,l)=>u.jsxs("tr",{style:{borderBottom:"1px solid #F2F2F7",background:l%2===0?"transparent":"#FAFAFA"},children:[u.jsx("td",{style:r,children:o.name}),u.jsx("td",{style:{...r,textAlign:"right",color:"#6C6C70"},children:o.percentage})]},o.id))})]})]})}const ys=88,nr=46;function sr(n,e,t,s){return Array.from({length:n},(i,a)=>{const o=(n===1?e:e-t/2+t/(n-1)*a)*Math.PI/180;return{x:Math.cos(o)*s,y:Math.sin(o)*s}})}const ir={position:"fixed",background:"#fff",borderRadius:"14px",boxShadow:"0 6px 28px rgba(0,0,0,0.22)",padding:"12px 14px",zIndex:1002,pointerEvents:"all",minWidth:"150px"},bs={display:"flex",alignItems:"center",gap:"8px",width:"100%",textAlign:"left",background:"#F2F2F7",border:"1px solid #E5E5EA",borderRadius:"8px",padding:"8px 12px",fontSize:"12px",fontWeight:"500",color:"#1D1D1F",cursor:"pointer",fontFamily:"inherit",transition:"background 0.12s"};function rr({children:n}){return u.jsx("div",{style:{fontSize:"10px",color:"#AEAEB2",fontWeight:"700",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"8px"},children:n})}function Qf({x:n,y:e,varName:t,varType:s,level:i,col1Arrangement:a,onBind:r,onColorBind:o,onBindLabel:l,onClose:d}){const[f,c]=E.useState("radial"),[p,h]=E.useState("mark");E.useEffect(()=>{function B(M){M.key==="Escape"&&(f!=="radial"?c("radial"):d())}return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[f,d]);const y=[{action:"bind",bindKey:"markColor",label:"Color",icon:"●",section:"mark",varTypes:["numerical","categorical"]},{action:"bind",bindKey:"markGeometry",label:"Geometry",icon:"◆",section:"mark",varTypes:["categorical"]},{action:"bind",bindKey:"markSizeX",label:"Width",icon:"↔",section:"mark",varTypes:["numerical"]},{action:"bind",bindKey:"markSizeY",label:"Height",icon:"↕",section:"mark",varTypes:["numerical"]},{action:"bind",bindKey:"markSizeZ",label:"Depth",icon:"⊙",section:"mark",varTypes:["numerical"]},{action:"label",label:"Label",icon:"Aa",section:"mark",varTypes:["numerical","categorical"],excludeArrangements:["scattering"]},{action:"bind",bindKey:"scatterSize",label:"Scatter - Size",icon:"⊞",section:"collection",varTypes:["numerical"],arrangements:["scattering"],minLevel:2},{action:"bind",bindKey:"scatterCount",label:"Scatter - Population",icon:"#",section:"collection",varTypes:["numerical"],arrangements:["scattering"],minLevel:2},{action:"label",label:"Label",icon:"Aa",section:"collection",varTypes:["numerical","categorical"],minLevel:2}];function A(B){var M;return!(!B.varTypes.includes(s)||B.minLevel!==void 0&&i<B.minLevel||"arrangements"in B&&B.arrangements!==void 0&&!B.arrangements.includes(a)||"excludeArrangements"in B&&((M=B.excludeArrangements)!=null&&M.includes(a)))}const m=y.filter(B=>B.section==="mark"&&A(B)),x=y.filter(B=>B.section==="collection"&&A(B)),g=sr(m.length,180,100,ys),b=sr(x.length,0,70,ys),v=[...m.map((B,M)=>({opt:B,pos:g[M]})),...x.map((B,M)=>({opt:B,pos:b[M]}))];function C(B){if(B.action==="bind"&&B.bindKey==="markColor"){h("mark"),c("colorMode");return}if(B.action==="label"){h(B.section),c("labelPos");return}B.action==="bind"&&r(B.bindKey,t),d()}const T=x.length>0;if(f==="colorMode")return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3},onClick:()=>c("radial")}),u.jsxs("div",{style:{...ir,left:n-75,top:e-70},children:[u.jsx(rr,{children:"Color mode"}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[u.jsxs("button",{style:bs,onClick:()=>{o(t,"distinct"),d()},onMouseEnter:B=>B.currentTarget.style.background="#E5E5EA",onMouseLeave:B=>B.currentTarget.style.background="#F2F2F7",children:[u.jsx("span",{style:{fontSize:"14px"},children:"◈"})," Distinct"]}),u.jsxs("button",{style:bs,onClick:()=>{o(t,"continuous"),d()},onMouseEnter:B=>B.currentTarget.style.background="#E5E5EA",onMouseLeave:B=>B.currentTarget.style.background="#F2F2F7",children:[u.jsx("span",{style:{fontSize:"14px"},children:"▬"})," Continuous"]})]})]})]});if(f==="labelPos"){const B={...bs,justifyContent:"center",width:"88px",height:"34px",padding:"0 8px",whiteSpace:"nowrap",flexShrink:0},M=(S,D,w)=>u.jsxs("button",{style:B,onClick:()=>{l(p,t,S),d()},onMouseEnter:F=>F.currentTarget.style.background="#E5E5EA",onMouseLeave:F=>F.currentTarget.style.background="#F2F2F7",children:[D," ",w]},S);return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3},onClick:()=>c("radial")}),u.jsxs("div",{style:{...ir,left:n-100,top:e-110},children:[u.jsx(rr,{children:"Label position"}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[M("top","↑","Top"),u.jsxs("div",{style:{display:"flex",gap:"4px"},children:[M("left","←","Left"),M("right","→","Right")]}),M("bottom","↓","Bottom")]})]})]})}return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3},onClick:d}),u.jsxs("div",{style:{position:"fixed",left:n,top:e,transform:"translate(-50%, -50%)",width:0,height:0,zIndex:1001,pointerEvents:"none"},children:[T&&u.jsx("div",{style:{position:"absolute",left:0,top:-108,width:"1px",height:(ys+20)*2,background:"#E5E5EA",transform:"translateX(-50%)"}}),u.jsx("div",{style:{position:"absolute",left:-8,top:-10,fontSize:"9px",fontWeight:"700",letterSpacing:"0.12em",textTransform:"uppercase",color:"#007AFF",whiteSpace:"nowrap",textAlign:"right",transform:"translateX(-100%)"},children:"Mark"}),T&&u.jsx("div",{style:{position:"absolute",left:8,top:-10,fontSize:"9px",fontWeight:"700",letterSpacing:"0.12em",textTransform:"uppercase",color:"#5E5CE6",whiteSpace:"nowrap"},children:"Collection"}),u.jsx("div",{style:{position:"absolute",width:10,height:10,background:"#1D1D1F",borderRadius:"50%",transform:"translate(-50%, -50%)"}}),v.map(({opt:B,pos:M},S)=>{const D=B.section==="collection",w=D?"#5E5CE6":"#007AFF";return u.jsxs("button",{onClick:()=>C(B),style:{position:"absolute",left:M.x,top:M.y,transform:"translate(-50%, -50%)",width:nr,height:nr,background:"#fff",border:`2px solid ${w}`,borderRadius:"50%",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1px",boxShadow:"0 4px 16px rgba(0,0,0,0.16)",pointerEvents:"all",fontFamily:"inherit"},onMouseEnter:F=>{const R=F.currentTarget;R.style.transform="translate(-50%, -50%) scale(1.13)",R.style.boxShadow="0 6px 20px rgba(0,0,0,0.22)",R.style.background=D?"#F3EBFF":"#EBF3FF"},onMouseLeave:F=>{const R=F.currentTarget;R.style.transform="translate(-50%, -50%)",R.style.boxShadow="0 4px 16px rgba(0,0,0,0.16)",R.style.background="#fff"},children:[u.jsx("span",{style:{fontSize:"14px",color:w,lineHeight:1},children:B.icon}),u.jsx("span",{style:{fontSize:"8px",color:"#6C6C70",fontWeight:"600",lineHeight:1.2,textAlign:"center"},children:B.label})]},S)})]})]})}const Yf={markColor:"Color",markGeometry:"Geometry",scatterSize:"Scatter - Size",scatterCount:"Scatter - Population",c1AlignCount:"Count",c2AlignCount:"Count",markSizeX:"Width",markSizeY:"Height",markSizeZ:"Depth"},or={markColor:"",markGeometry:"",markSizeX:"",markSizeY:"",markSizeZ:"",scatterSize:"",scatterCount:"",c1AlignCount:"Lv2",c2AlignCount:"Lv3"},ar={garbageInOcean:{numerical:"Weight",categorical:"Garbage Type"},mahler:{numerical:"Number of Instruments",categorical:"Orchestra Section"}},qf={garbageInOcean:"Garbage in the Ocean",mahler:"Mahler's Symphony No. 8 Orchestra"},lr=[{id:"1",name:"Microplastics",percentage:40,color:"#aaaaaa"},{id:"2",name:"Synthetic Fibres",percentage:35,color:"#3355cc"},{id:"3",name:"Tyre Abrasion",percentage:28,color:"#bbbb33"},{id:"4",name:"City Dust",percentage:24,color:"#cc4422"},{id:"5",name:"Road Markings",percentage:7,color:"#2233aa"}],cr={shape:"sphere",material:"plastic",color:"#F06951",position:{x:0,y:0,z:0},scale:1,size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}},ur={arrangement:"alignment",color:"#5E5CE6",alignCount:5,alignAxis:"X",alignSpacing:1.5,alignAnchor:"center",scatterMode:"count",scatterCount:50,scatterDimensions:{x:4.5,y:4,z:3},scatterDensity:1,pilingCount:10},dr={arrangement:"alignment",color:"#9D9BF4",alignCount:3,alignAxis:"X",alignSpacing:.5,alignAnchor:"center",scatterMode:"count",scatterCount:30,scatterDimensions:{x:20,y:6,z:8},scatterDensity:1,pilingCount:10},fr={background:"dark",hdriPreset:"city",focalLength:130},Mn={show:!1,slots:{top:null,bottom:null,left:null,right:null}};function Zf(){const[n,e]=E.useState(1),[t,s]=E.useState("mark"),[i,a]=E.useState(lr),[r,o]=E.useState(cr),[l,d]=E.useState(ur),[f,c]=E.useState(dr),[p,h]=E.useState(fr),[y,A]=E.useState("garbageInOcean"),m=ar[y]??ar.garbageInOcean,x=[{label:m.numerical,type:"numerical",varName:"numerical"},{label:m.categorical,type:"categorical",varName:"categorical"}],[g,b]=E.useState({markColor:null,markGeometry:null,scatterSize:null,scatterCount:null,c1AlignCount:null,c2AlignCount:null,markSizeX:null,markSizeY:null,markSizeZ:null}),[v,C]=E.useState(Mn),[T,B]=E.useState(Mn),[M,S]=E.useState("distinct"),[D,w]=E.useState({from:"#EE6655",to:"#4488EE"}),[F,R]=E.useState(void 0),[I,P]=E.useState(0),[G,L]=E.useState([]),[z,U]=E.useState(null),[Y,K]=E.useState(!1),[se,pe]=E.useState(null),[De,Se]=E.useState(null),[je,qt]=E.useState(null),[li,Ze]=E.useState("none"),[ot,ci]=E.useState(!1),[He,ui]=E.useState(0),Zt=E.useRef(null);function $t(j,H){b(J=>{const k={...J,[j]:H};return H!==null&&(j==="markSizeX"||j==="markSizeY"||j==="markSizeZ")&&(j!=="markSizeX"&&(k.markSizeX=null),j!=="markSizeY"&&(k.markSizeY=null),j!=="markSizeZ"&&(k.markSizeZ=null)),k}),j==="markGeometry"&&H!==null&&(s("mark"),R("Geometry")),j==="markGeometry"&&H===null&&o(J=>({...J,categoryShapes:void 0})),H!==null&&d(J=>({...J,alignCount:i.length})),j==="scatterSize"&&H!==null&&c(J=>({...J,alignCount:i.length}))}function aa(j,H){S(H),$t("markColor",j),H==="continuous"&&(s("mark"),R("Material"))}function la(j,H,J){const k=V=>({...V,show:!0,slots:{...V.slots,[J]:H}});j==="mark"?C(k):B(k)}function ca(){const j=`dec_${Date.now()}`,H={id:j,shape:"sphere",material:"plastic",color:"#888888",position:{x:0,y:-1.5,z:0},size:{x:1,y:1,z:1},orientation:{x:0,y:0,z:0},structural:{deformation:"none",fluidDistort:.35,fluidSpeed:1.5}};L(J=>[...J,H]),U(j)}function ua(j){L(H=>H.filter(J=>J.id!==j)),U(H=>H===j?null:H)}function da(j){L(H=>H.map(J=>J.id===j.id?j:J))}function Wn(){return{level:n,activeElement:t,markConfig:r,col1Config:l,col2Config:f,sceneConfig:p,bindings:g,markLabelConfig:v,colLabelConfig:T,decorations:G,layers:i,activeDataset:y}}function di(j){const H=xs();if(De){const V=H.findIndex(en=>en.id===De);if(V>=0){H[V]={...H[V],name:j,data:Wn()},As(H),qt(j),Ze("none");return}}const J=`save_${Date.now()}`,k={id:J,name:j,createdAt:new Date().toISOString(),data:Wn()};As([...H,k]),Se(J),qt(j),Ze("none")}function fa(){De&&je?di(je):Ze("save")}function pa(j){const H=j.data;H.level!=null&&e(H.level),H.activeElement!=null&&s(H.activeElement);const J=qn(H.markConfig??cr);if(J.categoryShapes){const ie={};for(const[xa,Aa]of Object.entries(J.categoryShapes))ie[xa]=qn(Aa);o({...J,categoryShapes:ie})}else o(J);d(H.col1Config??ur),c(H.col2Config??dr),h(H.sceneConfig??fr);const k=ie=>ie==="garbageType"||ie==="section"?"categorical":ie==="weight"||ie==="count"?"numerical":ie,V=H.bindings??{};b({markColor:k(V.markColor??null),markGeometry:k(V.markGeometry??null),scatterSize:k(V.scatterSize??null),scatterCount:k(V.scatterCount??null),c1AlignCount:k(V.c1AlignCount??null),c2AlignCount:k(V.c2AlignCount??null),markSizeX:k(V.markSizeX??null),markSizeY:k(V.markSizeY??null),markSizeZ:k(V.markSizeZ??null)});const en=ie=>({...ie,slots:{top:k(ie.slots.top),bottom:k(ie.slots.bottom),left:k(ie.slots.left),right:k(ie.slots.right)}});C(H.markLabelConfig?en(H.markLabelConfig):Mn),B(H.colLabelConfig?en(H.colLabelConfig):Mn),L((H.decorations??[]).map(ie=>qn(ie))),a(H.layers??lr),H.activeDataset!=null&&A(H.activeDataset),Se(j.id),qt(j.name),U(null),Ze("none")}function ha(j){const H=xs().filter(J=>J.id!==j);As(H),De===j&&(Se(null),qt(null))}function ma(){n===1&&(e(2),s("collection1")),n===2&&(e(3),s("collection2"))}function ga(){n===3&&(e(2),s("collection1")),n===2&&(e(1),s("mark"))}return u.jsxs("div",{style:{display:"flex",width:"100vw",height:"100vh",background:"#F2F2F7",overflow:"hidden"},children:[u.jsxs("div",{style:{width:"260px",flexShrink:0,borderRight:"1px solid #E5E5EA",background:"#FFFFFF",display:"flex",flexDirection:"column",overflow:"hidden"},children:[u.jsxs("div",{style:{display:"flex",gap:"6px",padding:"8px 10px",borderBottom:"1px solid #E5E5EA",flexShrink:0,flexDirection:"column"},children:[u.jsxs("div",{style:{display:"flex",gap:"6px"},children:[u.jsx("button",{onClick:fa,title:je?`Save to "${je}"`:"Save scene",style:{flex:1,background:"#F2F2F7",color:"#1D1D1F",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"6px 8px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:je||"Save"}),u.jsx("button",{onClick:()=>Ze("load"),style:{flex:1,background:"#F2F2F7",color:"#1D1D1F",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"6px 8px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit"},children:"Load"})]}),u.jsx("button",{onClick:()=>{ci(!0),ui(0)},disabled:ot,style:{background:"#F2F2F7",color:ot?"#AEAEB2":"#1D1D1F",border:"1px solid #D1D1D6",borderRadius:"7px",padding:"7px 8px",fontSize:"12px",fontWeight:"600",cursor:ot?"default":"pointer",fontFamily:"inherit",width:"100%"},children:ot?"Rendering...":"Render"})]}),u.jsx("div",{style:{flex:1,overflowY:"auto",minHeight:0},children:u.jsx(Al,{level:n,activeElement:t,onSelectElement:j=>{s(j),U(null)},onAdvanceLevel:ma,onDowngradeLevel:ga,decorations:G,activeDecorationId:z,onSelectDecoration:U,onAddDecoration:ca,onRemoveDecoration:ua})})]}),u.jsxs("div",{style:{flex:1,position:"relative",zIndex:0},onDragOver:j=>j.preventDefault(),onDrop:j=>{j.preventDefault();const H=j.dataTransfer.getData("phys-var/name");if(!H)return;const J=j.dataTransfer.types.includes("phys-var/numerical")?"numerical":"categorical";pe({x:j.clientX,y:j.clientY,varName:H,varType:J})},children:[u.jsx(If,{level:n,markConfig:r,collection1Config:l,collection2Config:f,sceneConfig:p,layers:i,bindings:g,markLabelConfig:v,colLabelConfig:T,decorations:G,colorMode:M,colorGradient:D,scatterSeed:I,datasetTitle:qf[y],pathTracingActive:ot,onSamplesUpdate:ui,downloadRenderRef:Zt}),ot&&u.jsxs("div",{style:{position:"absolute",top:"16px",right:"16px",background:"rgba(10,10,10,0.82)",backdropFilter:"blur(14px)",borderRadius:"14px",padding:"18px 20px",color:"#fff",display:"flex",flexDirection:"column",gap:"14px",width:"200px",fontFamily:"inherit",zIndex:10,boxShadow:"0 8px 32px rgba(0,0,0,0.4)"},children:[u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:"10px",fontWeight:"700",letterSpacing:"0.1em",textTransform:"uppercase",opacity:.45,marginBottom:"8px"},children:"Path Tracing"}),u.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"5px"},children:[u.jsx("span",{style:{fontSize:"32px",fontWeight:"700",letterSpacing:"-0.02em",lineHeight:1},children:He}),u.jsx("span",{style:{fontSize:"11px",opacity:.35},children:"spp"})]})]}),u.jsx("div",{style:{background:"rgba(255,255,255,0.1)",borderRadius:"3px",height:"3px"},children:u.jsx("div",{style:{width:`${Math.min(100,He/256*100)}%`,height:"100%",background:"#4FC3F7",borderRadius:"3px",transition:"width 0.4s"}})}),u.jsx("div",{style:{fontSize:"11px",opacity:.4,marginTop:"-8px"},children:He===0?"Building scene BVH…":He>=256?"Converged":`${256-He} samples to 256`}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsx("button",{onClick:()=>{var j;return(j=Zt.current)==null?void 0:j.call(Zt)},disabled:He===0,style:{background:He>0?"#4FC3F7":"rgba(255,255,255,0.08)",color:"#fff",border:"none",borderRadius:"8px",padding:"9px",fontSize:"12px",fontWeight:"600",cursor:He>0?"pointer":"default",fontFamily:"inherit"},children:"Download PNG"}),u.jsx("button",{onClick:()=>ci(!1),style:{background:"rgba(255,255,255,0.08)",color:"#fff",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"9px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit"},children:"Stop"})]})]})]}),u.jsxs("div",{style:{width:"260px",flexShrink:0,borderLeft:"1px solid #E5E5EA",background:"#FFFFFF",display:"flex",flexDirection:"column"},children:[u.jsx("div",{style:{flex:1,overflowY:"auto",minHeight:0},children:u.jsx(Yl,{activeElement:t,compositionLevel:n,layers:i,markConfig:r,onMarkChange:o,collection1Config:l,onCollection1Change:d,collection2Config:f,onCollection2Change:c,sceneConfig:p,onSceneChange:h,bindings:g,onBind:$t,markLabelConfig:v,onMarkLabelChange:C,colLabelConfig:T,onColLabelChange:B,activeDecorationId:z,decorations:G,onDecorationChange:da,colorMode:M,colorGradient:D,onColorGradientChange:w,markOpenSection:F,onReseed:()=>P(j=>j+1)})}),u.jsxs("div",{style:{borderTop:"1px solid #E5E5EA",padding:"14px 14px 16px",flexShrink:0},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[u.jsx("span",{style:{fontSize:"10px",color:"#AEAEB2",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"600"},children:"Data"}),u.jsx("button",{onClick:()=>K(!0),style:{background:"none",border:"1px solid #D1D1D6",borderRadius:"6px",padding:"3px 8px",fontSize:"11px",color:"#6C6C70",cursor:"pointer",fontFamily:"inherit"},children:"Open Data"})]}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:x.map(j=>{const H=Object.keys(g).filter(k=>g[k]===j.varName),J=[];return["top","bottom","left","right"].forEach(k=>{v.slots[k]===j.varName&&J.push({key:`mark-${k}`,label:`Label ${k[0].toUpperCase()+k.slice(1)}`,onRemove:()=>C(V=>({...V,slots:{...V.slots,[k]:null}}))}),T.slots[k]===j.varName&&J.push({key:`col-${k}`,label:`Label ${k[0].toUpperCase()+k.slice(1)}`,onRemove:()=>B(V=>({...V,slots:{...V.slots,[k]:null}}))})}),u.jsxs("div",{children:[u.jsx(Xf,{label:j.label,type:j.type,varName:j.varName}),(H.length>0||J.length>0)&&u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"6px"},children:[H.map(k=>u.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"3px",background:"#EBF3FF",border:"1px solid #A8CAFF",borderRadius:"5px",padding:"3px 5px 3px 8px",fontSize:"10px",color:"#007AFF",fontWeight:"600"},children:[or[k]&&u.jsx("span",{style:{color:"#60A0EE",marginRight:"2px",fontWeight:"500"},children:or[k]}),Yf[k],u.jsx("button",{onClick:()=>$t(k,null),style:{background:"none",border:"none",cursor:"pointer",color:"#60A0EE",padding:"0 1px",fontSize:"13px",lineHeight:1,fontFamily:"inherit"},children:"×"})]},k)),J.map(k=>u.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"3px",background:"#EBF3FF",border:"1px solid #A8CAFF",borderRadius:"5px",padding:"3px 5px 3px 8px",fontSize:"10px",color:"#007AFF",fontWeight:"600"},children:[k.label,u.jsx("button",{onClick:k.onRemove,style:{background:"none",border:"none",cursor:"pointer",color:"#60A0EE",padding:"0 1px",fontSize:"13px",lineHeight:1,fontFamily:"inherit"},children:"×"})]},k.key))]})]},j.varName)})})]})]}),li==="save"&&u.jsx(Wf,{initialName:je??"",onSave:di,onClose:()=>Ze("none")}),Y&&u.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999},onClick:()=>K(!1),children:u.jsxs("div",{style:{background:"#fff",borderRadius:"14px",width:"340px",maxWidth:"90vw",maxHeight:"80vh",display:"flex",flexDirection:"column",boxShadow:"0 16px 48px rgba(0,0,0,0.28)",overflow:"hidden",fontFamily:"inherit"},onClick:j=>j.stopPropagation(),children:[u.jsxs("div",{style:{padding:"14px 20px",borderBottom:"1px solid #E5E5EA",fontSize:"15px",fontWeight:"700",color:"#1D1D1F",flexShrink:0,display:"flex",justifyContent:"space-between",alignItems:"center"},children:["Data Panel",u.jsx("button",{onClick:()=>K(!1),style:{background:"none",border:"none",fontSize:"18px",color:"#AEAEB2",cursor:"pointer",lineHeight:1,padding:"0 2px"},children:"×"})]}),u.jsx("div",{style:{overflowY:"auto",flex:1},children:u.jsx(Vf,{layers:i,onChange:a,onDatasetChange:A,selectedDataset:y})})]})}),li==="load"&&u.jsx(Kf,{saves:xs(),onLoad:pa,onDelete:ha,onClose:()=>Ze("none"),currentName:je??"scene",currentData:Wn()}),se&&u.jsx(Qf,{x:se.x,y:se.y,varName:se.varName,varType:se.varType,level:n,col1Arrangement:l.arrangement,onBind:$t,onColorBind:aa,onBindLabel:la,onClose:()=>pe(null)})]})}const vs="https://massager-unshaved-chasing.ngrok-free.dev";function $f(){const n=al();return E.useEffect(()=>{n.refresh().fit()},[n]),null}function ep({url:n}){const e=Vt(qs,n),t=E.useRef([]),s=E.useRef(0);return E.useEffect(()=>{const i=[];if(e.scene.updateWorldMatrix(!0,!0),e.scene.traverse(r=>{r.isMesh&&i.push(r)}),!i.length)return;const a=new _;i.forEach(r=>{const o=new _;r.getWorldPosition(o),a.add(o)}),a.divideScalar(i.length),t.current=i.map(r=>{const o=new _;r.getWorldPosition(o);const l=o.clone().sub(a);return l.length()<.001&&l.set(Math.random()-.5,Math.random()-.5,Math.random()-.5),l.normalize(),{mesh:r,origPos:o.clone(),direction:l}}),s.current=0},[e]),Ys((i,a)=>{s.current+=a;const r=(Math.sin(s.current*1-Math.PI/2)+1)/2;t.current.forEach(({mesh:o,origPos:l,direction:d})=>{o.position.copy(l).addScaledVector(d,r*1.5)})}),u.jsxs(ol,{fit:!0,clip:!0,observe:!0,margin:1.4,children:[u.jsx($f,{}),u.jsx("primitive",{object:e.scene})]})}function tp({data:n,center:e,impulse:t}){const s=E.useRef(null);return E.useEffect(()=>{if(!s.current)return;const i=n.position.clone().sub(e);i.length()<.001&&i.set(Math.random()-.5,.5,Math.random()-.5),i.normalize().multiplyScalar(t),s.current.applyImpulse({x:i.x,y:i.y+t*.3,z:i.z},!0),s.current.applyTorqueImpulse({x:(Math.random()-.5)*t*.3,y:(Math.random()-.5)*t*.3,z:(Math.random()-.5)*t*.3},!0)},[]),u.jsx(In,{ref:s,position:n.position.toArray(),quaternion:[n.quaternion.x,n.quaternion.y,n.quaternion.z,n.quaternion.w],colliders:"hull",restitution:.3,friction:.8,linearDamping:.1,angularDamping:.15,children:u.jsx("mesh",{geometry:n.geometry,material:n.material})})}function np({url:n,impulse:e}){const t=Vt(qs,n),{fragments:s,center:i}=E.useMemo(()=>{const a=[];t.scene.updateWorldMatrix(!0,!0),t.scene.traverse(o=>{if(!o.isMesh)return;const l=o,d=new _,f=new jn;l.getWorldPosition(d),l.getWorldQuaternion(f),a.push({geometry:l.geometry,material:l.material,position:d,quaternion:f})});const r=new _;return a.forEach(o=>r.add(o.position)),a.length&&r.divideScalar(a.length),{fragments:a,center:r}},[t]);return u.jsxs(u.Fragment,{children:[u.jsx(In,{type:"fixed",position:[0,-3,0],children:u.jsx(Sr,{args:[15,.1,15]})}),u.jsxs("mesh",{position:[0,-3,0],rotation:[-Math.PI/2,0,0],children:[u.jsx("planeGeometry",{args:[30,30]}),u.jsx("meshStandardMaterial",{color:"#1a1a1a",roughness:.9})]}),s.map((a,r)=>u.jsx(tp,{data:a,center:i,impulse:e},r))]})}function Ee({label:n,children:e}){return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[u.jsx("div",{style:{fontSize:11,color:"#888"},children:n}),e]})}function pr({active:n,onClick:e,children:t}){return u.jsx("button",{onClick:e,style:{flex:1,padding:"8px 0",fontSize:12,fontWeight:600,background:n?"#5E5CE6":"#1a1a1a",color:n?"#fff":"#666",border:n?"none":"1px solid #333",borderRadius:6,cursor:"pointer"},children:t})}function sp(){const[n,e]=E.useState(null),[t,s]=E.useState("idle"),[i,a]=E.useState(""),[r,o]=E.useState("exploded"),[l,d]=E.useState(0),[f,c]=E.useState(""),[p,h]=E.useState(8),[y,A]=E.useState(.5),[m,x]=E.useState("random"),[g,b]=E.useState("bisect"),[v,C]=E.useState(30),[T,B]=E.useState(0),[M,S]=E.useState(1.5),D=E.useRef(null),w=E.useCallback(L=>{if(!L.name.endsWith(".glb")&&!L.name.endsWith(".gltf")){a("Please upload a .glb or .gltf file");return}D.current=L,c(L.name),e(null),s("idle"),a("")},[]),F=E.useCallback(L=>{L.preventDefault();const z=L.dataTransfer.files[0];z&&w(z)},[w]),R=E.useCallback(L=>{var U;const z=(U=L.target.files)==null?void 0:U[0];z&&w(z)},[w]),I=E.useCallback(async L=>{if(L==="model"&&!D.current){a("Drop a GLB first");return}s("loading"),a("Blender is running…"),n&&URL.revokeObjectURL(n),e(null);try{let z;const U=`pieces=${p}&cutSpread=${y}&cutStrategy=${m}&adaptivity=${T}&fractureMethod=${g}`;if(L==="sphere")z=await Qn(`${vs}/shatter/sphere?${U}`);else if(L==="cube")z=await Qn(`${vs}/shatter/cube?${U}`);else{const K=new FormData;K.append("model",D.current),K.append("pieces",p.toString()),K.append("cutSpread",y.toString()),K.append("cutStrategy",m),K.append("fractureMethod",g),K.append("voxelDiv",v.toString()),K.append("adaptivity",T.toString()),z=await Qn(`${vs}/shatter`,{method:"POST",body:K})}if(!z.ok){const K=await z.json().catch(()=>({error:z.statusText}));throw new Error(K.error??z.statusText)}const Y=await z.blob();e(URL.createObjectURL(Y)),s("done"),a("")}catch(z){s("error"),a(z instanceof Error?z.message:"Unknown error")}},[p,y,v,n]);E.useEffect(()=>()=>{n&&URL.revokeObjectURL(n)},[n]);const P={width:"100%",accentColor:"#5E5CE6"},G=t==="loading";return u.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0f0f0f",color:"#e0e0e0"},children:[u.jsxs("div",{style:{width:260,padding:20,display:"flex",flexDirection:"column",gap:16,borderRight:"1px solid #222",overflowY:"auto"},children:[u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[u.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Shatter Lab"}),u.jsxs("div",{style:{display:"flex",gap:12},children:[u.jsx("a",{href:"/deform",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Deform"}),u.jsx("a",{href:"/particles",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Particles"}),u.jsx("a",{href:"/fluid",style:{fontSize:10,color:"#555",textDecoration:"none"},children:"→ Fluid"})]})]}),u.jsx(Ee,{label:"View Mode",children:u.jsxs("div",{style:{display:"flex",gap:6},children:[u.jsx(pr,{active:r==="exploded",onClick:()=>o("exploded"),children:"Exploded"}),u.jsx(pr,{active:r==="physics",onClick:()=>o("physics"),children:"Physics"})]})}),u.jsxs(Ee,{label:"Model (GLB)",children:[u.jsx("div",{onDrop:F,onDragOver:L=>L.preventDefault(),onClick:()=>document.getElementById("glb-input").click(),style:{border:"2px dashed #333",borderRadius:8,padding:"14px 10px",textAlign:"center",cursor:"pointer",fontSize:12,color:"#555"},children:f||"Drop GLB or click to browse"}),u.jsx("input",{id:"glb-input",type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:R})]}),u.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[u.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Fragment"}),u.jsxs(Ee,{label:"Fracture Method",children:[u.jsx("div",{style:{display:"flex",gap:6},children:["bisect","voronoi"].map(L=>u.jsx("button",{onClick:()=>b(L),style:{flex:1,padding:"6px 0",fontSize:11,borderRadius:5,background:g===L?"#2a2a4a":"#1a1a1a",color:g===L?"#9999ff":"#555",border:g===L?"1px solid #5E5CE6":"1px solid #2a2a2a",cursor:"pointer",textTransform:"capitalize"},children:L},L))}),u.jsx("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:g==="voronoi"?"Natural crack patterns. Slower — best ≤ 50 pieces.":"Sequential plane cuts. Fast. Good for large counts."})]}),u.jsx(Ee,{label:`Pieces: ${p}`,children:u.jsx("input",{type:"range",min:2,max:500,step:1,value:p,onChange:L=>h(Number(L.target.value)),style:P})}),u.jsxs(Ee,{label:`Size Variation: ${y.toFixed(2)}`,children:[u.jsx("input",{type:"range",min:.05,max:1,step:.05,value:y,onChange:L=>A(Number(L.target.value)),style:P}),u.jsxs("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:["0 = equal-sized pieces (cuts through centre)",u.jsx("br",{}),"1 = uneven pieces (cuts placed randomly)"]})]}),u.jsxs(Ee,{label:"Cut Strategy",children:[u.jsx("div",{style:{display:"flex",gap:6},children:["random","largest"].map(L=>u.jsx("button",{onClick:()=>x(L),style:{flex:1,padding:"6px 0",fontSize:11,borderRadius:5,background:m===L?"#2a2a4a":"#1a1a1a",color:m===L?"#9999ff":"#555",border:m===L?"1px solid #5E5CE6":"1px solid #2a2a2a",cursor:"pointer"},children:L==="random"?"Random":"Largest First"},L))}),u.jsx("div",{style:{fontSize:10,color:"#444",lineHeight:1.4},children:"Largest First → more uniform sizes"})]})]}),u.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[u.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Remesh — file uploads only"}),u.jsxs(Ee,{label:`Voxel Detail: ${v}`,children:[u.jsx("input",{type:"range",min:10,max:60,step:5,value:v,onChange:L=>C(Number(L.target.value)),style:P}),u.jsx("div",{style:{fontSize:10,color:"#444"},children:"Higher = sharper cuts, slower"})]}),u.jsxs(Ee,{label:`Adaptivity: ${T.toFixed(2)}`,children:[u.jsx("input",{type:"range",min:0,max:1,step:.05,value:T,onChange:L=>B(Number(L.target.value)),style:P}),u.jsx("div",{style:{fontSize:10,color:"#444"},children:"Reduces polygons in flat areas"})]})]}),r==="physics"&&u.jsxs("div",{style:{borderTop:"1px solid #1e1e1e",paddingTop:12,display:"flex",flexDirection:"column",gap:12},children:[u.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:1},children:"Physics"}),u.jsxs(Ee,{label:`Impulse: ${M.toFixed(1)}`,children:[u.jsx("input",{type:"range",min:0,max:5,step:.1,value:M,onChange:L=>S(Number(L.target.value)),style:P}),u.jsx("div",{style:{fontSize:10,color:"#444"},children:"How hard pieces fly apart on start"})]})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[u.jsx("button",{onClick:()=>I("model"),disabled:G,style:{background:G?"#222":"#5E5CE6",color:G?"#555":"#fff",border:"none",borderRadius:8,padding:"11px 0",fontSize:13,fontWeight:600,cursor:G?"wait":"pointer"},children:G?"Running…":"⚡ Shatter Model"}),u.jsxs("div",{style:{display:"flex",gap:8},children:[u.jsx("button",{onClick:()=>I("sphere"),disabled:G,style:{flex:1,background:"#1a1a1a",color:G?"#444":"#aaa",border:"1px solid #2a2a2a",borderRadius:8,padding:"9px 0",fontSize:12,cursor:G?"wait":"pointer"},children:"🔵 Sphere"}),u.jsx("button",{onClick:()=>I("cube"),disabled:G,style:{flex:1,background:"#1a1a1a",color:G?"#444":"#aaa",border:"1px solid #2a2a2a",borderRadius:8,padding:"9px 0",fontSize:12,cursor:G?"wait":"pointer"},children:"◻ Cube"})]}),r==="physics"&&n&&u.jsx("button",{onClick:()=>d(L=>L+1),style:{background:"#1a1a2e",color:"#5E5CE6",border:"1px solid #5E5CE6",borderRadius:8,padding:"9px 0",fontSize:12,cursor:"pointer"},children:"↺ Restart Simulation"})]}),(i||G)&&u.jsx("div",{style:{fontSize:12,padding:10,borderRadius:6,lineHeight:1.5,background:t==="error"?"#2a0f0f":"#111",color:t==="error"?"#ff6b6b":"#666"},children:G?"Blender is running… (10–30 s)":i})]}),u.jsx("div",{style:{flex:1},children:n?u.jsxs(kn,{camera:{position:[0,1,5],fov:50},style:{background:"#111"},children:[u.jsx("ambientLight",{intensity:.5}),u.jsx("directionalLight",{position:[5,8,5],intensity:1.2,castShadow:!0}),u.jsx(Qs,{preset:"city"}),r==="exploded"&&u.jsx(E.Suspense,{fallback:null,children:u.jsx(ep,{url:n})}),r==="physics"&&u.jsx(Mr,{gravity:[0,-9.81,0],timeStep:"vary",children:u.jsx(E.Suspense,{fallback:null,children:u.jsx(np,{url:n,impulse:M})})},l),u.jsx(On,{})]}):u.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#2a2a2a",fontSize:13},children:G?u.jsxs("div",{style:{textAlign:"center",color:"#444"},children:[u.jsx("div",{style:{fontSize:28,marginBottom:10},children:"⏳"}),"Blender is fracturing…"]}):u.jsxs("div",{style:{textAlign:"center"},children:[u.jsx("div",{style:{fontSize:28,marginBottom:10},children:"💥"}),"Choose a shape and hit Shatter"]})})})]})}const Cs={Flag:{pinMode:"flag",gravity:2,windX:.5,windZ:5,windTurb:3,damping:.99,constraintIters:8},Curtain:{pinMode:"curtain",gravity:3,windX:0,windZ:2,windTurb:2,damping:.99,constraintIters:8},Sheet:{pinMode:"sheet",gravity:2.5,windX:.5,windZ:2.5,windTurb:2.5,damping:.99,constraintIters:8},Still:{pinMode:"curtain",gravity:4,windX:0,windZ:0,windTurb:0,damping:.995,constraintIters:12},Hammock:{pinMode:"hammock",gravity:6,windX:0,windZ:.5,windTurb:.5,damping:.995,constraintIters:12}};function ip(n,e,t,s,i){const a=i==="hammock",r=new Float32Array(n*e*3),o=new Float32Array(n*e*2);for(let f=0;f<e;f++)for(let c=0;c<n;c++){const p=f*n+c,h=c/(n-1),y=f/(e-1);a?(r[p*3]=(h-.5)*t,r[p*3+1]=0,r[p*3+2]=(y-.5)*s):(r[p*3]=(h-.5)*t,r[p*3+1]=(.5-y)*s,r[p*3+2]=0),o[p*2]=h,o[p*2+1]=1-y}const l=[];for(let f=0;f<e-1;f++)for(let c=0;c<n-1;c++){const p=f*n+c,h=p+1,y=p+n,A=y+1;l.push(p,y,h,h,y,A)}const d=new we;return d.setAttribute("position",new Z(r,3)),d.setAttribute("uv",new Z(o,2)),d.setIndex(l),d.computeVertexNormals(),d}function rp(n,e,t,s,i){const a=i==="hammock",r=n*e,o=new Float32Array(r*3),l=new Float32Array(r*3),d=new Uint8Array(r),f=new Float32Array(r*3);for(let A=0;A<e;A++)for(let m=0;m<n;m++){const x=A*n+m,g=m/(n-1),b=A/(e-1);a?(o[x*3]=(g-.5)*t,o[x*3+1]=0,o[x*3+2]=(b-.5)*s):(o[x*3]=(g-.5)*t,o[x*3+1]=(.5-b)*s,o[x*3+2]=0),l[x*3]=o[x*3],l[x*3+1]=o[x*3+1],l[x*3+2]=o[x*3+2]}switch(i){case"flag":for(let A=0;A<e;A++)d[A*n]=1;break;case"curtain":for(let A=0;A<n;A++)d[A]=1;break;case"sheet":d[0]=1,d[n-1]=1;break;case"hammock":d[0]=1,d[n-1]=1,d[(e-1)*n]=1,d[(e-1)*n+n-1]=1;break}for(let A=0;A<r;A++)f[A*3]=o[A*3],f[A*3+1]=o[A*3+1],f[A*3+2]=o[A*3+2];const c=t/(n-1),p=s/(e-1),h=Math.hypot(c,p),y=[];for(let A=0;A<e;A++)for(let m=0;m<n;m++){const x=A*n+m;m<n-1&&y.push({a:x,b:x+1,r:c}),A<e-1&&y.push({a:x,b:x+n,r:p}),m<n-1&&A<e-1&&(y.push({a:x,b:x+n+1,r:h}),y.push({a:x+1,b:x+n,r:h})),m<n-2&&y.push({a:x,b:x+2,r:c*2}),A<e-2&&y.push({a:x,b:x+n*2,r:p*2})}return{pos:o,prev:l,pinned:d,init:f,springs:y,N:n,M:e}}function op({cols:n,rows:e,cW:t,cH:s,pinMode:i,paramsRef:a,color:r,wireframe:o}){const l=E.useMemo(()=>ip(n,e,t,s,i),[]),d=E.useMemo(()=>rp(n,e,t,s,i),[]),f=E.useRef(null);return Ys(({clock:c},p)=>{if(!f.current)return;const{gravity:h,windZ:y,windX:A,windTurb:m,damping:x,constraintIters:g}=a.current,{pos:b,prev:v,pinned:C,init:T,springs:B,N:M,M:S}=d,D=c.getElapsedTime(),w=5,F=Math.min(p,.033)/w;for(let I=0;I<w;I++){for(let P=0;P<M*S;P++){if(C[P])continue;const G=P*3,L=b[G],z=b[G+1],U=b[G+2];let Y=(L-v[G])*x,K=(z-v[G+1])*x,se=(U-v[G+2])*x;K-=h*F*F;const pe=Math.sin(L*.8+D*.9)*Math.cos(U*.5+D*.6)*m,De=Math.sin(U*.7+D*.7)*Math.cos(z*.4+D*.5)*m;Y+=(A+pe)*F*F,se+=(y+De)*F*F,v[G]=L,v[G+1]=z,v[G+2]=U,b[G]=L+Y,b[G+1]=z+K,b[G+2]=U+se,b[G+1]<-3.5&&(b[G+1]=-3.5,v[G+1]=-3.5)}for(let P=0;P<g;P++)for(const{a:G,b:L,r:z}of B){const U=G*3,Y=L*3,K=b[Y]-b[U],se=b[Y+1]-b[U+1],pe=b[Y+2]-b[U+2],De=Math.sqrt(K*K+se*se+pe*pe)||1e-6,Se=(De-z)/De*.5;C[G]||(b[U]+=K*Se,b[U+1]+=se*Se,b[U+2]+=pe*Se),C[L]||(b[Y]-=K*Se,b[Y+1]-=se*Se,b[Y+2]-=pe*Se)}for(let P=0;P<M*S;P++)C[P]&&(b[P*3]=T[P*3],b[P*3+1]=T[P*3+1],b[P*3+2]=T[P*3+2])}const R=l.attributes.position;for(let I=0;I<M*S;I++)R.array[I*3]=b[I*3],R.array[I*3+1]=b[I*3+1],R.array[I*3+2]=b[I*3+2];R.needsUpdate=!0,l.computeVertexNormals()}),u.jsx("mesh",{ref:f,geometry:l,castShadow:!0,receiveShadow:!0,children:u.jsx("meshStandardMaterial",{color:r,side:Hn,roughness:.8,metalness:0,wireframe:o})})}function ap({cols:n,rows:e,cW:t,cH:s,pinMode:i}){const a=E.useMemo(()=>{const r=n,o=e,l=i==="hammock",d=(f,c)=>{const p=f/(r-1),h=c/(o-1);return l?[(p-.5)*t,0,(h-.5)*s]:[(p-.5)*t,(.5-h)*s,0]};switch(i){case"flag":return Array.from({length:o},(f,c)=>d(0,c));case"curtain":return Array.from({length:r},(f,c)=>d(c,0));case"sheet":return[d(0,0),d(r-1,0)];case"hammock":return[d(0,0),d(r-1,0),d(0,o-1),d(r-1,o-1)]}},[n,e,t,s,i]);return u.jsx(u.Fragment,{children:a.map((r,o)=>u.jsxs("mesh",{position:r,children:[u.jsx("sphereGeometry",{args:[.06,8,8]}),u.jsx("meshStandardMaterial",{color:"#ff4455",emissive:"#ff2233",emissiveIntensity:.6})]},o))})}function jt({label:n,children:e}){return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[u.jsx("div",{style:{fontSize:10,color:"#555",letterSpacing:.4},children:n}),e]})}function lp({active:n,onClick:e,children:t,small:s}){return u.jsx("button",{onClick:e,style:{flex:1,padding:s?"5px 0":"7px 0",fontSize:s?10:11,borderRadius:5,cursor:"pointer",background:n?"#2a2a4a":"#151520",color:n?"#9999ff":"#555",border:n?"1px solid #5E5CE6":"1px solid #222"},children:t})}function hr({on:n,onClick:e,label:t}){return u.jsxs("div",{onClick:e,style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer",userSelect:"none"},children:[u.jsx("div",{style:{width:28,height:16,borderRadius:8,position:"relative",background:n?"#5E5CE6":"#1e1e2a",border:"1px solid #333",transition:"background .2s"},children:u.jsx("div",{style:{position:"absolute",top:2,left:n?11:2,width:10,height:10,borderRadius:"50%",background:n?"#fff":"#444",transition:"left .2s"}})}),u.jsx("span",{style:{fontSize:11,color:n?"#9999ff":"#555"},children:t})]})}const cp=[["Gravity","gravity",0,10,.1],["Wind forward","windZ",-3,10,.1],["Wind sideways","windX",-5,5,.1],["Turbulence","windTurb",0,8,.1],["Damping","damping",.95,1,.001],["Stiffness","constraintIters",1,20,1]];function up(){const[n,e]=E.useState(22),[t,s]=E.useState(22),[i,a]=E.useState(3),[r,o]=E.useState(3),[l,d]=E.useState("curtain"),[f,c]=E.useState(0),[p,h]=E.useState("#5588cc"),[y,A]=E.useState(!1),[m,x]=E.useState(!0),[g,b]=E.useState(Cs.Curtain),v=E.useRef(g);E.useEffect(()=>{v.current=g},[g]);const C=w=>F=>b(R=>({...R,[w]:Number(F.target.value)})),T=w=>{const F=Cs[w];d(F.pinMode),b({gravity:F.gravity,windX:F.windX,windZ:F.windZ,windTurb:F.windTurb,damping:F.damping,constraintIters:F.constraintIters}),c(R=>R+1)},B={width:"100%",accentColor:"#5E5CE6"},M={borderTop:"1px solid #1a1a2a",paddingTop:12,display:"flex",flexDirection:"column",gap:8},S={fontSize:10,color:"#444",textTransform:"uppercase",letterSpacing:1},D=`${n}-${t}-${i}-${r}-${l}-${f}`;return u.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0a0a12",color:"#ddd"},children:[u.jsxs("div",{style:{width:268,padding:20,display:"flex",flexDirection:"column",gap:14,borderRight:"1px solid #1a1a2a",overflowY:"auto"},children:[u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[u.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Soft Lab"}),u.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[u.jsx("a",{href:"/shatter",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Shatter"}),u.jsx("a",{href:"/deform",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Deform"}),u.jsx("a",{href:"/particles",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Particles"}),u.jsx("a",{href:"/ripple",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Ripple"}),u.jsx("a",{href:"/jelly",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Jelly"})]})]}),u.jsxs("div",{style:M,children:[u.jsx("div",{style:S,children:"Presets"}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:Object.keys(Cs).map(w=>u.jsx("button",{onClick:()=>T(w),style:{padding:"5px 10px",fontSize:10,borderRadius:5,cursor:"pointer",background:"#151520",color:"#777",border:"1px solid #222"},children:w},w))}),u.jsx("button",{onClick:()=>c(w=>w+1),style:{padding:"7px",fontSize:11,borderRadius:5,cursor:"pointer",background:"#151520",color:"#555",border:"1px solid #222"},children:"↺ Reset cloth"})]}),u.jsxs("div",{style:M,children:[u.jsx("div",{style:S,children:"Cloth"}),u.jsx(jt,{label:`Resolution: ${n}×${t}`,children:u.jsx("input",{type:"range",min:8,max:40,step:1,value:n,onChange:w=>{const F=Number(w.target.value);e(F),s(F)},style:B})}),u.jsx(jt,{label:`Width: ${i.toFixed(1)}`,children:u.jsx("input",{type:"range",min:1,max:6,step:.1,value:i,onChange:w=>a(Number(w.target.value)),style:B})}),u.jsx(jt,{label:`Height: ${r.toFixed(1)}`,children:u.jsx("input",{type:"range",min:1,max:6,step:.1,value:r,onChange:w=>o(Number(w.target.value)),style:B})})]}),u.jsxs("div",{style:M,children:[u.jsx("div",{style:S,children:"Pin mode"}),u.jsx("div",{style:{display:"flex",gap:5},children:["flag","curtain","sheet","hammock"].map(w=>u.jsx(lp,{small:!0,active:l===w,onClick:()=>{d(w),c(F=>F+1)},children:w[0].toUpperCase()+w.slice(1)},w))})]}),u.jsxs("div",{style:M,children:[u.jsx("div",{style:S,children:"Simulation"}),cp.map(([w,F,R,I,P])=>u.jsx(jt,{label:`${w}: ${F==="constraintIters"?g[F].toFixed(0):F==="damping"?g[F].toFixed(3):g[F].toFixed(2)}`,children:u.jsx("input",{type:"range",min:R,max:I,step:P,value:g[F],onChange:C(F),style:B})},F))]}),u.jsxs("div",{style:M,children:[u.jsx("div",{style:S,children:"Rendering"}),u.jsx(jt,{label:"Color",children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("input",{type:"color",value:p,onChange:w=>h(w.target.value),style:{width:32,height:22,border:"none",background:"none",cursor:"pointer",padding:0}}),u.jsx("span",{style:{fontSize:10,color:"#555"},children:p})]})}),u.jsx(hr,{on:y,onClick:()=>A(w=>!w),label:"Wireframe"}),u.jsx(hr,{on:m,onClick:()=>x(w=>!w),label:"Show pins"})]})]}),u.jsxs(kn,{shadows:!0,camera:{position:[0,.5,5.5],fov:45},gl:{antialias:!0,toneMapping:Vs,toneMappingExposure:1},style:{flex:1,background:"#04040c"},children:[u.jsx("ambientLight",{intensity:.35}),u.jsx("directionalLight",{position:[4,8,4],intensity:1.8,castShadow:!0,"shadow-mapSize":[1024,1024]}),u.jsx("pointLight",{position:[-4,1,-2],intensity:.6,color:"#4466ff"}),u.jsx("pointLight",{position:[3,-1,3],intensity:.3,color:"#ff8844"}),u.jsx(On,{makeDefault:!0,target:[0,0,0]}),u.jsx(op,{cols:n,rows:t,cW:i,cH:r,pinMode:l,paramsRef:v,color:p,wireframe:y},D),m&&u.jsx(ap,{cols:n,rows:t,cW:i,cH:r,pinMode:l},`pins-${D}`),u.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-3,0],receiveShadow:!0,children:[u.jsx("planeGeometry",{args:[14,14]}),u.jsx("meshStandardMaterial",{color:"#09090f",roughness:.95})]})]})]})}const O=90,Ue=10;function dp({waveSpeed:n,damping:e,disturbAmp:t,modelUrl:s,resetKey:i}){const a=E.useRef(new Float32Array(O*O)),r=E.useRef(new Float32Array(O*O)),o=E.useRef(null),[l,d]=E.useState(null),f=E.useMemo(()=>{const p=new ll(Ue,Ue,O-1,O-1);return p.rotateX(-Math.PI/2),p},[]);E.useEffect(()=>{a.current.fill(0),r.current.fill(0)},[i]),E.useEffect(()=>{if(!s){d(null);return}new qs().load(s,h=>{const y=h.scene,A=new ce().setFromObject(y),m=A.getSize(new _);y.scale.setScalar(.9/Math.max(m.x,m.y,m.z)),A.setFromObject(y),y.position.sub(A.getCenter(new _)),y.position.y=.5;const x=Math.floor(O/2),g=Math.floor(O/2),b=8;for(let v=-b;v<=b;v++)for(let C=-b;C<=b;C++){const T=x+C,B=g+v;if(T>=0&&T<O&&B>=0&&B<O){const M=Math.sqrt(C*C+v*v);M<=b&&(a.current[B*O+T]-=.4*(1-M/b))}}d(y)})},[s]);const c=E.useCallback((p,h,y)=>{const A=Math.round((p/Ue+.5)*(O-1)),m=Math.round((h/Ue+.5)*(O-1)),x=4;for(let g=-x;g<=x;g++)for(let b=-x;b<=x;b++){const v=A+b,C=m+g;if(v>=0&&v<O&&C>=0&&C<O){const T=Math.sqrt(b*b+g*g);T<=x&&(a.current[C*O+v]-=y*(1-T/x))}}},[]);return Ys(()=>{const p=a.current,h=r.current,y=Math.min(n,.49),A=7;for(let g=1;g<O-1;g++)for(let b=1;b<O-1;b++){const v=g*O+b,C=p[(g-1)*O+b]+p[(g+1)*O+b]+p[g*O+b-1]+p[g*O+b+1]-4*p[v];h[v]=(h[v]+y*C)*e}for(let g=0;g<O*O;g++)p[g]+=h[g];for(let g=0;g<O;g++)for(let b=0;b<O;b++){const v=Math.min(b,g,O-1-b,O-1-g);if(v<A){const C=(v/A)**2,T=Ut.lerp(.75,1,C),B=g*O+b;p[B]*=T,h[B]*=T}}const m=f.attributes.position;for(let g=0;g<O;g++)for(let b=0;b<O;b++)m.setY(g*O+b,p[g*O+b]);m.needsUpdate=!0,f.computeVertexNormals();const x=o.current;if(x){const g=Math.round((x.position.x/Ue+.5)*(O-1)),b=Math.round((x.position.z/Ue+.5)*(O-1));if(g>=0&&g<O&&b>=0&&b<O){const v=p[b*O+g];x.position.y=v+.45,x.rotation.x=v*.25,x.rotation.z=v*.15}}}),u.jsxs(u.Fragment,{children:[u.jsx("mesh",{geometry:f,onPointerDown:p=>{p.stopPropagation(),c(p.point.x,p.point.z,t)},onPointerMove:p=>{p.buttons>0&&c(p.point.x,p.point.z,t*.35)},children:u.jsx("meshStandardMaterial",{color:"#0a3060",roughness:.03,metalness:.45,envMapIntensity:3})}),l&&u.jsx("primitive",{ref:o,object:l})]})}function Bs({label:n,children:e}){return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[u.jsx("div",{style:{fontSize:10,color:"#555",letterSpacing:.4},children:n}),e]})}function fp(){const[n,e]=E.useState(.32),[t,s]=E.useState(.995),[i,a]=E.useState(.4),[r,o]=E.useState(null),[l,d]=E.useState(""),[f,c]=E.useState(0),p=E.useCallback(m=>{!m.name.endsWith(".glb")&&!m.name.endsWith(".gltf")||(r&&URL.revokeObjectURL(r),o(URL.createObjectURL(m)),d(m.name))},[r]),h={width:"100%",accentColor:"#5E5CE6"},y={borderTop:"1px solid #1a1a2a",paddingTop:12,display:"flex",flexDirection:"column",gap:8},A={fontSize:10,color:"#444",textTransform:"uppercase",letterSpacing:1};return u.jsxs("div",{style:{display:"flex",height:"100vh",fontFamily:"system-ui, sans-serif",background:"#0a0a12",color:"#ddd"},children:[u.jsxs("div",{style:{width:268,padding:20,display:"flex",flexDirection:"column",gap:14,borderRight:"1px solid #1a1a2a",overflowY:"auto"},children:[u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[u.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Ripple Lab"}),u.jsx("div",{style:{fontSize:11,color:"#444",lineHeight:1.5},children:"Click or drag on the water to create waves."}),u.jsxs("div",{style:{display:"flex",gap:10,marginTop:4},children:[u.jsx("a",{href:"/soft",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Cloth"}),u.jsx("a",{href:"/jelly",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Jelly"}),u.jsx("a",{href:"/particles",style:{fontSize:10,color:"#444",textDecoration:"none"},children:"→ Particles"})]})]}),u.jsxs("div",{style:y,children:[u.jsx("div",{style:A,children:"Object on water"}),u.jsx("div",{onDrop:m=>{m.preventDefault();const x=m.dataTransfer.files[0];x&&p(x)},onDragOver:m=>m.preventDefault(),onClick:()=>document.getElementById("glb-ripple").click(),style:{border:`2px dashed ${r?"#5E5CE6":"#222"}`,borderRadius:8,padding:"10px 8px",textAlign:"center",cursor:"pointer",fontSize:11,color:r?"#9999ff":"#444"},children:l||"Drop a GLB — it will float"}),u.jsx("input",{id:"glb-ripple",type:"file",accept:".glb,.gltf",style:{display:"none"},onChange:m=>{var g;const x=(g=m.target.files)==null?void 0:g[0];x&&p(x)}}),r&&u.jsx("button",{onClick:()=>{o(null),d("")},style:{padding:"5px",fontSize:10,borderRadius:5,cursor:"pointer",background:"#151520",color:"#666",border:"1px solid #222"},children:"Remove object"})]}),u.jsxs("div",{style:y,children:[u.jsx("div",{style:A,children:"Simulation"}),u.jsx(Bs,{label:`Wave speed: ${n.toFixed(2)}`,children:u.jsx("input",{type:"range",min:.05,max:.48,step:.01,value:n,onChange:m=>e(Number(m.target.value)),style:h})}),u.jsx(Bs,{label:`Damping: ${t.toFixed(3)}`,children:u.jsx("input",{type:"range",min:.96,max:.999,step:.001,value:t,onChange:m=>s(Number(m.target.value)),style:h})}),u.jsx(Bs,{label:`Disturbance: ${i.toFixed(2)}`,children:u.jsx("input",{type:"range",min:.05,max:1.5,step:.05,value:i,onChange:m=>a(Number(m.target.value)),style:h})})]}),u.jsx("div",{style:y,children:u.jsx("button",{onClick:()=>c(m=>m+1),style:{padding:"8px",fontSize:11,borderRadius:5,cursor:"pointer",background:"#151520",color:"#666",border:"1px solid #222"},children:"↺ Clear water"})})]}),u.jsxs(kn,{camera:{position:[0,6,8],fov:45},gl:{antialias:!0,toneMapping:Vs,toneMappingExposure:1.2},style:{flex:1,background:"#04040c"},children:[u.jsx("ambientLight",{intensity:.3}),u.jsx("directionalLight",{position:[5,8,3],intensity:1.5}),u.jsx(Qs,{preset:"sunset"}),u.jsx(On,{makeDefault:!0,target:[0,0,0],maxPolarAngle:Math.PI/2.1}),u.jsx(dp,{waveSpeed:n,damping:t,disturbAmp:i,modelUrl:r,resetKey:f}),u.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-.5,0],children:[u.jsx("planeGeometry",{args:[Ue,Ue]}),u.jsx("meshStandardMaterial",{color:"#071830",roughness:.9})]})]})]})}const pp="/phys_tool/".replace(/\/$/,""),ze=window.location.pathname.slice(pp.length)||"/",hp=ze==="/lab"?u.jsx(dl,{}):ze==="/sim"?u.jsx(sp,{}):ze==="/shatter"?u.jsx(fl,{}):ze==="/deform"?u.jsx(pl,{}):ze==="/particles"?u.jsx(hl,{}):ze==="/soft"?u.jsx(up,{}):ze==="/ripple"?u.jsx(fp,{}):ze==="/fluid"?u.jsx(ml,{}):u.jsx(Zf,{});cl.createRoot(document.getElementById("root")).render(u.jsx(ul.StrictMode,{children:hp}));
