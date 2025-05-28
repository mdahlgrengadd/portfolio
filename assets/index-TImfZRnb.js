import{c as We,K as fn,r as N,j as c,X as ut,R as hn,n as mn,s as pn,w as gn,o as kt,l as vn,v as Be,x as yn,G as bn,L as wn,M as xn,f as jn,i as En,N as kn,O as Tn}from"./index-viK6OPoB.js";import{u as Ve,F as Cn,S as Sn}from"./fileSystem-wkprgMbA.js";import{V as Yr,v as Xr}from"./fileSystem-wkprgMbA.js";import{_ as Je,m as _n,l as Me}from"./monaco-editor-7E23JaOL.js";import{S as Pn,a as $n}from"./square-DOitrIOv.js";import{P as Rn}from"./play-DG2q-ZRP.js";import{b as Nn,C as Dn,m as wt,c as Tt,R as An,d as On,e as In,f as Fn}from"./MacroContext-fPQEzlrA.js";import{F as Bn}from"./file-text-D3ANH_-x.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=We("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=We("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=We("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=We("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=We("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=We("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Wn={activeView:"explorer",sidebarVisible:!0,panelVisible:!1,previewPanelVisible:!1,activeTab:null,tabs:[],theme:"light",commandPaletteOpen:!1,buildOutput:"",buildError:null,isBuilding:!1,buildCode:"",panelVisibilityBeforePreview:!1},ve=fn((l,t)=>({...Wn,toggleSidebar:()=>l(e=>({sidebarVisible:!e.sidebarVisible})),togglePanel:()=>l(e=>({panelVisible:!e.panelVisible})),togglePreviewPanel:()=>l(e=>{const s=!e.previewPanelVisible;return Je(async()=>{const{ideSettings:f}=await import("./esbuild-settings-Bzyyd_qg.js");return{ideSettings:f}},[]).then(({ideSettings:f})=>{f.hideTerminalDuringPreview&&l(s?p=>({panelVisibilityBeforePreview:p.panelVisible,panelVisible:!1}):p=>({panelVisible:p.panelVisibilityBeforePreview}))}),{previewPanelVisible:s}}),toggleCommandPalette:()=>l(e=>({commandPaletteOpen:!e.commandPaletteOpen})),setActiveView:e=>l({activeView:e}),setActiveTab:e=>l({activeTab:e}),openTab:e=>{const s=t().getFileById(e);!s||s.type!=="file"||l(f=>{const p=f.tabs.find(d=>d.fileId===e);if(p)return{activeTab:p.id};const m={id:`tab-${Date.now()}`,fileId:e,title:s.name,language:s.language||"javascript",isDirty:!1};return{tabs:[...f.tabs,m],activeTab:m.id}})},closeTab:e=>{l(s=>{const f=s.tabs.findIndex(d=>d.id===e);if(f===-1)return s;const p=s.tabs.filter(d=>d.id!==e);let m=s.activeTab;return s.activeTab===e&&(p.length===0?m=null:f<p.length?m=p[f].id:m=p[p.length-1].id),{tabs:p,activeTab:m}})},toggleTheme:()=>l(e=>({theme:e.theme==="dark"?"light":"dark"})),getFileById:e=>{const s=p=>{if(p.id===e)return p;if(p.children)for(const m of p.children){const d=s(m);if(d)return d}},f=Ve.getState().fs;return s(f)},getTabById:e=>t().tabs.find(s=>s.id===e),setTabDirty:(e,s)=>{l(f=>({tabs:f.tabs.map(p=>p.id===e?{...p,isDirty:s}:p)}))},saveFile:(e,s)=>{const f=(d,u=["root"])=>{if(d.id===e)return u;if(!d.children)return null;for(const S of d.children){const T=f(S,[...u,S.id]);if(T)return T}return null},p=Ve.getState().fs,m=f(p);if(m){const d=m.slice(0,-1);Ve.getState().updateFileContent(d,e,s),l(u=>({tabs:u.tabs.map(S=>S.fileId===e?{...S,isDirty:!1}:S)}))}},setBuildOutput:e=>l({buildOutput:e}),setBuildError:e=>l({buildError:e}),setBuildCode:e=>l({buildCode:e}),setIsBuilding:e=>l({isBuilding:e}),runBuild:async e=>{const s=t(),{ideSettings:f}=await Je(async()=>{const{ideSettings:A}=await import("./esbuild-settings-Bzyyd_qg.js");return{ideSettings:A}},[]);f.showTerminalOnBuild&&!s.previewPanelVisible&&!s.panelVisible&&s.togglePanel();const{buildCode:p,parseEsbuildCommand:m,addToVirtualFs:d}=await Je(async()=>{const{buildCode:A,parseEsbuildCommand:V,addToVirtualFs:re}=await Promise.resolve().then(()=>Or);return{buildCode:A,parseEsbuildCommand:V,addToVirtualFs:re}},void 0);s.setIsBuilding(!0),s.setBuildError(null),s.setBuildOutput(""),s.setBuildCode("");const S=(()=>{if(!s.activeTab)return null;const A=s.getTabById(s.activeTab);if(!A)return null;const V=s.getFileById(A.fileId);return!V||V.type!=="file"?null:{filePath:V.id,content:V.content||""}})();if(!S){s.setBuildError("No active file to build"),s.setIsBuilding(!1);return}const T=(A,V="")=>{const re=A.id;A.type==="file"&&A.content!==void 0&&d(re,A.content),A.type==="folder"&&A.children&&A.children.forEach(oe=>{T(oe,re)})},E=Ve.getState().fs;T(E);let U;if(e){if(U=m(e),!U){s.setBuildError("Invalid esbuild command"),s.setIsBuilding(!1);return}U.content=S.content}else U={entryPoint:S.filePath,content:S.content,options:{bundle:!0,minify:!0,format:"esm"}};try{const A=await p(U);A.error?s.setBuildError(A.error):(s.setBuildCode(A.code),s.setBuildOutput(`Build successful!
Output: ${A.code.slice(0,1e3)}${A.code.length>1e3?"...":""}`),f.autoFocusPreview&&s.previewPanelVisible&&s.activeTab!=="preview"&&s.setActiveTab("preview"))}catch(A){const V=A instanceof Error?A.message:String(A);s.setBuildError(`Build failed: ${V}`)}finally{s.setIsBuilding(!1)}}})),at=[{id:"toggle-sidebar",title:"View: Toggle Side Bar",category:"View",shortcut:"Ctrl+B",handler:()=>ve.getState().toggleSidebar()},{id:"toggle-terminal",title:"View: Toggle Terminal",category:"View",shortcut:"Ctrl+`",handler:()=>ve.getState().togglePanel()},{id:"toggle-preview",title:"View: Toggle Preview",category:"View",shortcut:"Ctrl+Shift+V",handler:()=>ve.getState().togglePreviewPanel()},{id:"toggle-theme",title:"Preferences: Toggle Theme",category:"Preferences",handler:()=>ve.getState().toggleTheme()},{id:"build-active-file",title:"Build: Bundle Active File",category:"Build",handler:()=>{ve.getState().togglePreviewPanel()}},{id:"build-bundle-app",title:"Build: Bundle App (app.jsx)",category:"Build",handler:()=>{ve.getState().togglePreviewPanel()}}],zn=()=>{const{commandPaletteOpen:l,toggleCommandPalette:t}=ve(),[e,s]=N.useState(""),[f,p]=N.useState(at),[m,d]=N.useState(0),u=N.useRef(null);N.useEffect(()=>{if(!e){p(at);return}const E=e.toLowerCase(),U=at.filter(A=>A.title.toLowerCase().includes(E)||A.category&&A.category.toLowerCase().includes(E));p(U),d(0)},[e]),N.useEffect(()=>{l&&u.current&&u.current.focus()},[l]);const S=E=>{switch(E.key){case"ArrowDown":E.preventDefault(),d(U=>U<f.length-1?U+1:U);break;case"ArrowUp":E.preventDefault(),d(U=>U>0?U-1:U);break;case"Enter":E.preventDefault(),T(f[m]);break;case"Escape":E.preventDefault(),t();break}},T=E=>{t(),E.handler()};return l?c.jsx("div",{className:"command-palette",onClick:()=>t(),children:c.jsxs("div",{className:"command-palette-content animate-fade-in",onClick:E=>E.stopPropagation(),children:[c.jsxs("div",{className:"flex items-center px-3 py-2 bg-input border-b border-border",children:[c.jsx(St,{size:16,className:"mr-2 text-muted-foreground"}),c.jsx("input",{ref:u,type:"text",className:"w-full bg-transparent outline-none placeholder:text-muted-foreground",placeholder:"Type a command or search...",value:e,onChange:E=>s(E.target.value),onKeyDown:S})]}),c.jsx("div",{className:"command-palette-results",children:f.length>0?f.map((E,U)=>c.jsxs("div",{className:`command-palette-item ${U===m?"selected":""}`,onClick:()=>T(E),onMouseEnter:()=>d(U),children:[c.jsx("span",{className:"flex-1",children:E.title}),E.category&&c.jsx("span",{className:"text-xs text-muted-foreground mr-2",children:E.category}),E.shortcut&&c.jsx("kbd",{className:"bg-muted text-muted-foreground px-2 py-0.5 text-xs rounded",children:E.shortcut})]},E.id)):c.jsx("div",{className:"p-3 text-muted-foreground",children:"No commands found"})})]})}):null};function Gn(l){return new Worker("/portfolio/assets/editor.worker-CozO_UIV.js",{type:"module",name:l==null?void 0:l.name})}function qn(l){return new Worker("/portfolio/assets/css.worker-BhDbEE1e.js",{type:"module",name:l==null?void 0:l.name})}function Hn(l){return new Worker("/portfolio/assets/html.worker-CUt5J86U.js",{type:"module",name:l==null?void 0:l.name})}function Jn(l){return new Worker("/portfolio/assets/json.worker-CnsrqLYN.js",{type:"module",name:l==null?void 0:l.name})}function Kn(l){return new Worker("/portfolio/assets/ts.worker-Ddk2u2yN.js",{type:"module",name:l==null?void 0:l.name})}window.MonacoEnvironment={getWorker(l,t){return t==="json"?new Jn:t==="css"||t==="scss"||t==="less"?new qn:t==="html"||t==="handlebars"||t==="razor"?new Hn:t==="typescript"||t==="javascript"?new Kn:new Gn}};Me.typescript.typescriptDefaults.setCompilerOptions({target:Me.typescript.ScriptTarget.ES2020,allowNonTsExtensions:!0,moduleResolution:Me.typescript.ModuleResolutionKind.NodeJs,module:Me.typescript.ModuleKind.ESNext,noEmit:!0,esModuleInterop:!0,jsx:Me.typescript.JsxEmit.React,reactNamespace:"React",allowJs:!0,typeRoots:["node_modules/@types"]});Me.typescript.typescriptDefaults.addExtraLib('declare module "*.css" { const content: string; export default content; }',"global.d.ts");const Yn=Object.freeze(Object.defineProperty({__proto__:null,default:_n},Symbol.toStringTag,{value:"Module"})),Xn=({previewTabId:l})=>{const{buildCode:t,buildError:e}=ve(),s=N.useRef(null);return N.useEffect(()=>{if(!t||e)return;const f=t||"console.log('No build output available');";if(!s.current)return;const p=s.current.contentDocument;p&&(p.open(),p.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preview</title>
        <style>
          body { font-family: sans-serif; margin: 0; padding: 16px; }
        </style>
      </head>
      <body>
        <div id="app"></div>
        <script type="text/javascript">
          try {
            ${f}
          } catch (err) {
            document.body.innerHTML = '<div style="color: red; padding: 20px;"><h3>Runtime Error:</h3><pre>' + err.message + '</pre></div>';
          }        <\/script>
      </body>
      </html>
    `),p.close())},[t,e]),c.jsx("div",{className:"panel-area flex flex-col",style:{height:"100%",minHeight:0,maxHeight:"none"},children:c.jsx("div",{className:"flex flex-col flex-1 relative",children:c.jsxs("div",{className:"relative h-full",children:[c.jsx("iframe",{ref:s,title:"Preview",className:"w-full h-full border-none bg-white"}),e&&c.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-red-50",children:c.jsxs("div",{className:"text-red-600 p-4 text-center",children:[c.jsx("h3",{children:"Build Error"}),c.jsx("pre",{className:"text-sm mt-2 whitespace-pre-wrap",children:e})]})})," ",!t&&!e&&c.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-50",children:c.jsxs("div",{className:"text-gray-500 text-center",children:[c.jsx("h3",{className:"text-lg mb-2",children:"Preview Panel"}),c.jsx("p",{children:'Click "Run Preview" to see your code in action'})]})})]})})})},Qn=()=>{const{tabs:l,activeTab:t,closeTab:e,setActiveTab:s,panelVisible:f,previewPanelVisible:p,theme:m,setTabDirty:d,saveFile:u,togglePreviewPanel:S,getTabById:T,runBuild:E}=ve(),[U,A]=N.useState({}),[V,re]=N.useState(!1),oe=N.useRef({}),ge=N.useRef({}),[pe,ae]=N.useState(null);N.useEffect(()=>{let ee;const fe=[],ne=[],O=ge.current;return t&&(async de=>{const{getFileById:De,getTabById:me}=ve.getState(),xe=me(de);if(!xe)return;const ze=De(xe.fileId);if(!ze||!ze.content)return;ee||(ee=(await Je(()=>Promise.resolve().then(()=>Yn),void 0)).default);const Ye=oe.current[de];if(!Ye)return;const Ee=ee.editor.create(Ye,{value:ze.content,language:xe.language,theme:m==="dark"?"vs-dark":"vs",automaticLayout:!0,minimap:{enabled:!0},scrollBeyondLastLine:!1,fontSize:14,fontFamily:"JetBrains Mono, monospace"});ge.current[de]=Ee,Ee.layout(),document.fonts&&document.fonts.ready?document.fonts.ready.then(()=>Ee.layout()):setTimeout(()=>Ee.layout(),100);const Ge=()=>Ee.layout();return window.addEventListener("resize",Ge),ne.push(()=>window.removeEventListener("resize",Ge)),fe.push(Ee.onDidFocusEditorText(()=>Ee.layout())),fe.push(Ee.onDidChangeModelContent(()=>{const Xe=Ee.getValue();A(lt=>({...lt,[de]:Xe})),d(de,!0)})),Ee})(t),ee&&ee.editor&&(ee.editor.setTheme(m==="dark"?"vs-dark":"vs"),Object.values(ge.current).forEach(de=>de.layout())),()=>{ne.forEach(de=>de()),fe.forEach(de=>de.dispose()),ee&&ee.editor&&(Object.keys(O).forEach(de=>{const De=O[de];De&&De.dispose()}),ee.editor.getModels().forEach(de=>de.dispose()))}},[t,m,d]),N.useEffect(()=>{if(t&&ge.current[t]){const ee=ge.current[t];setTimeout(()=>{ee.layout(),ee.focus()},10)}},[t]),N.useEffect(()=>{p?(t&&t!=="preview"&&ae(t),s("preview")):(t==="preview"&&pe&&s(pe),ae(null))},[p,t,pe,s]);const Se=ee=>{const fe=ge.current[ee];if(!fe)return;const ne=ve.getState().tabs.find(O=>O.id===ee);ne&&u(ne.fileId,fe.getValue())},_e=async()=>{if(V){re(!1),p&&S();return}await E(),re(!0),p||S()};return N.useEffect(()=>{!p&&V&&re(!1)},[p,V]),N.useEffect(()=>{(async()=>{const{ideSettings:fe}=await Je(async()=>{const{ideSettings:de}=await import("./esbuild-settings-Bzyyd_qg.js");return{ideSettings:de}},[]);if(!fe.hideTerminalDuringPreview)return;const{panelVisible:ne,panelVisibilityBeforePreview:O,togglePanel:Re}=ve.getState();t==="preview"?ne&&(ve.setState({panelVisibilityBeforePreview:!0}),ne&&Re()):t&&t!=="preview"&&O&&!ne&&(Re(),ve.setState({panelVisibilityBeforePreview:!1}))})()},[t]),c.jsxs("div",{className:"editor-area",children:[l.length>0||p?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"editor-tabs",children:c.jsxs("div",{className:"flex items-center justify-between w-full",children:[c.jsxs("div",{className:"flex",children:[l.map(ee=>c.jsxs("div",{className:`editor-tab ${t===ee.id?"active":""}`,onClick:()=>s(ee.id),children:[c.jsx("span",{className:"truncate flex-1",children:ee.title}),ee.isDirty&&c.jsx("span",{className:"ml-1 text-amber-400",children:"•"}),c.jsx("button",{className:"ml-2 text-blue-500 hover:text-blue-400",onClick:fe=>{fe.stopPropagation(),Se(ee.id)},title:"Save",children:c.jsx(Pn,{size:14})}),c.jsx("button",{className:"ml-2 hover:text-foreground",onClick:fe=>{fe.stopPropagation(),e(ee.id)},children:c.jsx(ut,{size:16})})]},ee.id)),p&&pe&&(()=>{const ee=T(pe),fe=ee?`Preview - ${ee.title}`:"Preview";return c.jsxs("div",{className:`editor-tab ${t==="preview"?"active":""}`,onClick:()=>s("preview"),children:[c.jsx("span",{className:"truncate flex-1",children:fe}),c.jsx("button",{className:"ml-2 hover:text-foreground",onClick:ne=>{ne.stopPropagation(),S()},children:c.jsx(ut,{size:16})})]},"preview")})()]}),t&&t!=="preview"&&c.jsx("button",{className:`px-3 py-1 rounded text-sm flex items-center gap-1 mr-2 ${V?"bg-red-600 hover:bg-red-700 text-white":"bg-green-600 hover:bg-green-700 text-white"}`,onClick:_e,title:V?"Stop":"Run",children:V?c.jsxs(c.Fragment,{children:[c.jsx($n,{size:14}),"Stop Preview"]}):c.jsxs(c.Fragment,{children:[c.jsx(Rn,{size:14}),"Run"]})})]})}),c.jsxs("div",{className:"editor-content",children:[l.map(ee=>c.jsx("div",{ref:fe=>oe.current[ee.id]=fe,className:"h-full w-full",style:{display:t===ee.id?"block":"none"},"data-tab-id":ee.id},ee.id)),p&&pe&&c.jsx("div",{className:"h-full w-full",style:{display:t==="preview"?"block":"none"},children:c.jsx(Xn,{previewTabId:pe})},"preview")]})]}):c.jsx("div",{className:"flex items-center justify-center h-full text-muted-foreground",children:c.jsxs("div",{className:"text-center",children:[c.jsx("h3",{className:"text-xl mb-2",children:"Welcome to Code Builder"}),c.jsx("p",{children:"Open a file to start editing"})]})}),f&&c.jsx(Zn,{})]})},Zn=()=>{const{togglePanel:l,buildOutput:t,buildError:e,isBuilding:s,runBuild:f,togglePreviewPanel:p}=ve(),[m,d]=N.useState("terminal"),[u,S]=N.useState("");N.useEffect(()=>{(t||e||s)&&d("output")},[t,e,s]);const T=async U=>{U.startsWith("esbuild ")&&(await f(U),S(""))},E=()=>{const{activeTab:U,getTabById:A,getFileById:V}=ve.getState();if(!U)return"esbuild app.js --bundle --minify --format=esm";const re=A(U);if(!re)return"esbuild app.js --bundle --minify --format=esm";const oe=V(re.fileId);return!oe||oe.type!=="file"?"esbuild app.js --bundle --minify --format=esm":`esbuild ${oe.id} --bundle --minify --format=esm`};return c.jsxs("div",{className:"panel-area flex flex-col h-1/3 border-t border-sidebar-border",children:[c.jsxs("div",{className:"flex items-center border-b border-sidebar-border p-1",children:[c.jsxs("div",{className:"flex space-x-2",children:[c.jsx("button",{className:`px-2 ${m==="terminal"?"border-b-2 border-foreground":""}`,onClick:()=>d("terminal"),children:"Terminal"}),c.jsx("button",{className:`px-2 ${m==="output"?"border-b-2 border-foreground":""}`,onClick:()=>d("output"),children:"Output"})]}),c.jsx("button",{className:"ml-auto text-sidebar-foreground hover:text-foreground p-1",onClick:l,children:c.jsx(ut,{size:16})})]}),c.jsxs("div",{className:"flex-1 p-2 font-mono text-sm overflow-auto",children:[m==="terminal"&&c.jsx("div",{className:"text-muted-foreground",children:"~ $"})," ",m==="output"&&c.jsxs("div",{children:[c.jsx("div",{className:"mb-2",children:c.jsx("input",{type:"text",placeholder:E(),value:u,className:"w-full bg-input text-foreground px-2 py-1 rounded text-sm font-mono",onChange:U=>S(U.target.value),onKeyDown:U=>{U.key==="Enter"&&T(U.currentTarget.value)}})}),s&&c.jsx("div",{className:"text-blue-500 mb-2",children:"Building..."}),e&&c.jsx("div",{className:"bg-destructive/10 text-destructive p-2 rounded whitespace-pre-wrap overflow-auto mb-2",children:e}),!e&&t&&c.jsx("div",{className:"text-xs font-mono bg-sidebar-accent p-2 rounded overflow-auto",children:c.jsx("pre",{className:"whitespace-pre-wrap",children:t})}),!s&&!e&&!t&&c.jsx("div",{className:"text-muted-foreground",children:"Enter an esbuild command above or run preview to see build output here"})]})]})]})},er=()=>{const{sidebarVisible:l,previewPanelVisible:t,activeView:e}=ve(),s=N.useRef(null),[f,p]=N.useState(!1),[m,d]=N.useState(0),[u,S]=N.useState(0),[T,E]=N.useState(240);N.useEffect(()=>{const A=re=>{if(!f)return;const oe=re.clientX-m,ge=Math.max(200,Math.min(500,u+oe));E(ge),s.current&&(s.current.style.width=`${ge}px`)},V=()=>{p(!1),document.body.style.cursor="",document.body.style.userSelect=""};return f&&(document.addEventListener("mousemove",A),document.addEventListener("mouseup",V),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",V)}},[f,m,u]);const U=A=>{var V;p(!0),d(A.clientX),S(((V=s.current)==null?void 0:V.offsetWidth)||240),A.preventDefault()};return!l||t?null:c.jsxs("div",{ref:s,className:"side-bar relative flex flex-col",style:{width:`${T}px`},children:[c.jsx("div",{className:"p-2 font-medium flex items-center justify-between border-b border-sidebar-border",children:c.jsxs("div",{className:"uppercase text-xs tracking-wider",children:[e==="explorer"&&"Explorer",e==="search"&&"Search",e==="git"&&"Source Control",e==="extensions"&&"Extensions"]})}),c.jsxs("div",{className:"px-2 py-1 flex-1 overflow-auto",children:[e==="explorer"&&c.jsx(tr,{}),e==="search"&&c.jsx(nr,{}),e==="git"&&c.jsx(rr,{}),e==="extensions"&&c.jsx(sr,{})]}),c.jsx("div",{className:"resize-handle",onMouseDown:U})]})},tr=()=>{var m,d;const l=Ve(u=>u.fs),t=(m=l.children)==null?void 0:m.find(u=>u.name===".vfsignore"&&u.type==="file"),e=N.useMemo(()=>!t||!t.content?[]:t.content.split(/\r?\n/).map(u=>u.trim()).filter(u=>u&&!u.startsWith("#")),[t]),s=N.useMemo(()=>e.map(u=>{const S=u.endsWith("/");let E=(S?u.slice(0,-1):u).replace(/\*\*/g,".*").replace(/\*/g,"[^/]*").replace(/\?/g,".");return S&&(E=`${E}(/.*)?`),new RegExp(`^${E}$`)}),[e]),p=[...((d=l.children)==null?void 0:d.filter(u=>u.name!==".vfsignore"&&!s.some(S=>S.test(u.id))))||[]].sort((u,S)=>u.type!==S.type?u.type==="folder"?-1:1:u.name.localeCompare(S.name));return c.jsx("div",{className:"explorer-tree",children:p.map(u=>c.jsx(_t,{item:u,level:0,ignoreMatchers:s},u.id))})},_t=({item:l,level:t,ignoreMatchers:e})=>{const[s,f]=hn.useState(!0),{openTab:p}=ve(),m=u=>{u.stopPropagation(),l.type==="folder"&&f(!s)},d=()=>{l.type==="file"?p(l.id):f(!s)};return c.jsxs("div",{children:[c.jsx("div",{className:"tree-item",onClick:d,style:{paddingLeft:`${t*20+4}px`},children:c.jsxs("span",{className:"flex items-center",children:[l.type==="folder"&&c.jsx("span",{className:"mr-1 text-sidebar-foreground",onClick:m,children:s?c.jsx(Nn,{size:16}):c.jsx(Dn,{size:16})}),l.type==="folder"?c.jsx(Cn,{size:16,className:"mr-1 text-sidebar-foreground"}):c.jsx(Bn,{size:16,className:"mr-1 text-sidebar-foreground"}),c.jsx("span",{className:"truncate",children:l.name})]})}),s&&l.type==="folder"&&l.children&&c.jsx("div",{children:[...l.children.filter(T=>T.name!==".vfsignore"&&!e.some(E=>E.test(T.id)))].sort((T,E)=>T.type!==E.type?T.type==="folder"?-1:1:T.name.localeCompare(E.name)).map(T=>c.jsx(_t,{item:T,level:t+1,ignoreMatchers:e},T.id))})]})},nr=()=>c.jsxs("div",{className:"p-2",children:[c.jsx("input",{type:"text",className:"w-full p-1 bg-input rounded text-sm mb-2",placeholder:"Search in files..."}),c.jsx("div",{className:"text-sm text-muted-foreground mt-2",children:"No results found. Try searching for something."})]}),rr=()=>c.jsxs("div",{className:"p-2",children:[c.jsx("div",{className:"text-sm font-medium mb-2",children:"Changes"}),c.jsx("div",{className:"text-sm text-muted-foreground",children:"No changes detected in your workspace."})]}),sr=()=>c.jsxs("div",{className:"p-2",children:[c.jsx("input",{type:"text",className:"w-full p-1 bg-input rounded text-sm mb-2",placeholder:"Search Extensions..."}),c.jsx("div",{className:"text-sm text-muted-foreground mt-2",children:"No extensions installed. Search for extensions in the marketplace."})]}),ir=()=>{const{theme:l,toggleTheme:t,toggleCommandPalette:e}=ve();return c.jsxs("div",{className:"status-bar flex items-center px-2 text-xs",children:[c.jsx("div",{className:"flex items-center",children:c.jsxs("button",{className:"flex items-center px-2 py-1 hover:bg-sidebar-accent rounded",onClick:e,children:[c.jsx(Un,{size:14,className:"mr-1"}),c.jsx("span",{children:"Command Palette"})]})}),c.jsx("div",{className:"flex-1"}),c.jsxs("div",{className:"flex items-center space-x-4",children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx(Ct,{size:14,className:"mr-1"}),c.jsx("span",{children:"main"})]}),c.jsx("div",{className:"flex items-center",children:c.jsx("span",{children:"Ln 1, Col 1"})}),c.jsx("div",{className:"flex items-center",children:c.jsx("span",{children:"Spaces: 2"})}),c.jsx("div",{className:"flex items-center",children:c.jsx("span",{children:"UTF-8"})}),c.jsx("button",{className:"flex items-center hover:bg-sidebar-accent px-2 py-0.5 rounded",onClick:t,children:l==="dark"?"☀️":"🌙"}),c.jsx("button",{className:"flex items-center hover:bg-sidebar-accent px-2 py-0.5 rounded",children:c.jsx(Mn,{size:14})})]})]})},lr=()=>{const{theme:l,toggleCommandPalette:t,toggleSidebar:e,togglePanel:s,togglePreviewPanel:f,sidebarVisible:p}=ve(),m=Ve(d=>d.init);return N.useEffect(()=>{m()},[m]),N.useEffect(()=>{const d=document.querySelector(".ide-builder-app");d&&(d.classList.toggle("light",l==="light"),d.classList.toggle("dark",l==="dark"))},[l]),N.useEffect(()=>{const d=u=>{u.ctrlKey&&u.shiftKey&&u.key==="P"&&(u.preventDefault(),t()),u.ctrlKey&&u.key==="b"&&(u.preventDefault(),e()),u.ctrlKey&&u.key==="`"&&(u.preventDefault(),s()),u.ctrlKey&&u.shiftKey&&u.key==="V"&&(u.preventDefault(),f())};return window.addEventListener("keydown",d),()=>{window.removeEventListener("keydown",d)}},[t,e,s,f]),c.jsxs("div",{className:"ide-container",children:[p&&c.jsx(er,{}),c.jsx(Qn,{}),c.jsx(ir,{}),c.jsx(zn,{})]})},or=()=>c.jsx("div",{className:"ide-builder-app h-full w-full overflow-hidden",style:{height:"100%",width:"100%"},children:c.jsx(lr,{})}),Wr={id:wt.id,manifest:wt,init:async()=>{console.log("Builder IDE plugin initialized")},render:()=>c.jsx(or,{}),onOpen:()=>{console.log("Builder IDE opened")},onClose:()=>{console.log("Builder IDE closed")}};var[rt,zr]=mn("Tooltip",[Tt]),st=Tt(),Pt="TooltipProvider",ar=700,dt="tooltip.open",[cr,ht]=rt(Pt),$t=l=>{const{__scopeTooltip:t,delayDuration:e=ar,skipDelayDuration:s=300,disableHoverableContent:f=!1,children:p}=l,m=N.useRef(!0),d=N.useRef(!1),u=N.useRef(0);return N.useEffect(()=>{const S=u.current;return()=>window.clearTimeout(S)},[]),c.jsx(cr,{scope:t,isOpenDelayedRef:m,delayDuration:e,onOpen:N.useCallback(()=>{window.clearTimeout(u.current),m.current=!1},[]),onClose:N.useCallback(()=>{window.clearTimeout(u.current),u.current=window.setTimeout(()=>m.current=!0,s)},[s]),isPointerInTransitRef:d,onPointerInTransitChange:N.useCallback(S=>{d.current=S},[]),disableHoverableContent:f,children:p})};$t.displayName=Pt;var Ke="Tooltip",[ur,it]=rt(Ke),Rt=l=>{const{__scopeTooltip:t,children:e,open:s,defaultOpen:f,onOpenChange:p,disableHoverableContent:m,delayDuration:d}=l,u=ht(Ke,l.__scopeTooltip),S=st(t),[T,E]=N.useState(null),U=pn(),A=N.useRef(0),V=m??u.disableHoverableContent,re=d??u.delayDuration,oe=N.useRef(!1),[ge,pe]=gn({prop:s,defaultProp:f??!1,onChange:fe=>{fe?(u.onOpen(),document.dispatchEvent(new CustomEvent(dt))):u.onClose(),p==null||p(fe)},caller:Ke}),ae=N.useMemo(()=>ge?oe.current?"delayed-open":"instant-open":"closed",[ge]),Se=N.useCallback(()=>{window.clearTimeout(A.current),A.current=0,oe.current=!1,pe(!0)},[pe]),_e=N.useCallback(()=>{window.clearTimeout(A.current),A.current=0,pe(!1)},[pe]),ee=N.useCallback(()=>{window.clearTimeout(A.current),A.current=window.setTimeout(()=>{oe.current=!0,pe(!0),A.current=0},re)},[re,pe]);return N.useEffect(()=>()=>{A.current&&(window.clearTimeout(A.current),A.current=0)},[]),c.jsx(An,{...S,children:c.jsx(ur,{scope:t,contentId:U,open:ge,stateAttribute:ae,trigger:T,onTriggerChange:E,onTriggerEnter:N.useCallback(()=>{u.isOpenDelayedRef.current?ee():Se()},[u.isOpenDelayedRef,ee,Se]),onTriggerLeave:N.useCallback(()=>{V?_e():(window.clearTimeout(A.current),A.current=0)},[_e,V]),onOpen:Se,onClose:_e,disableHoverableContent:V,children:e})})};Rt.displayName=Ke;var ft="TooltipTrigger",Nt=N.forwardRef((l,t)=>{const{__scopeTooltip:e,...s}=l,f=it(ft,e),p=ht(ft,e),m=st(e),d=N.useRef(null),u=kt(t,d,f.onTriggerChange),S=N.useRef(!1),T=N.useRef(!1),E=N.useCallback(()=>S.current=!1,[]);return N.useEffect(()=>()=>document.removeEventListener("pointerup",E),[E]),c.jsx(On,{asChild:!0,...m,children:c.jsx(vn.button,{"aria-describedby":f.open?f.contentId:void 0,"data-state":f.stateAttribute,...s,ref:u,onPointerMove:Be(l.onPointerMove,U=>{U.pointerType!=="touch"&&!T.current&&!p.isPointerInTransitRef.current&&(f.onTriggerEnter(),T.current=!0)}),onPointerLeave:Be(l.onPointerLeave,()=>{f.onTriggerLeave(),T.current=!1}),onPointerDown:Be(l.onPointerDown,()=>{f.open&&f.onClose(),S.current=!0,document.addEventListener("pointerup",E,{once:!0})}),onFocus:Be(l.onFocus,()=>{S.current||f.onOpen()}),onBlur:Be(l.onBlur,f.onClose),onClick:Be(l.onClick,f.onClose)})})});Nt.displayName=ft;var dr="TooltipPortal",[Gr,fr]=rt(dr,{forceMount:void 0}),Ue="TooltipContent",Dt=N.forwardRef((l,t)=>{const e=fr(Ue,l.__scopeTooltip),{forceMount:s=e.forceMount,side:f="top",...p}=l,m=it(Ue,l.__scopeTooltip);return c.jsx(yn,{present:s||m.open,children:m.disableHoverableContent?c.jsx(At,{side:f,...p,ref:t}):c.jsx(hr,{side:f,...p,ref:t})})}),hr=N.forwardRef((l,t)=>{const e=it(Ue,l.__scopeTooltip),s=ht(Ue,l.__scopeTooltip),f=N.useRef(null),p=kt(t,f),[m,d]=N.useState(null),{trigger:u,onClose:S}=e,T=f.current,{onPointerInTransitChange:E}=s,U=N.useCallback(()=>{d(null),E(!1)},[E]),A=N.useCallback((V,re)=>{const oe=V.currentTarget,ge={x:V.clientX,y:V.clientY},pe=yr(ge,oe.getBoundingClientRect()),ae=br(ge,pe),Se=wr(re.getBoundingClientRect()),_e=jr([...ae,...Se]);d(_e),E(!0)},[E]);return N.useEffect(()=>()=>U(),[U]),N.useEffect(()=>{if(u&&T){const V=oe=>A(oe,T),re=oe=>A(oe,u);return u.addEventListener("pointerleave",V),T.addEventListener("pointerleave",re),()=>{u.removeEventListener("pointerleave",V),T.removeEventListener("pointerleave",re)}}},[u,T,A,U]),N.useEffect(()=>{if(m){const V=re=>{const oe=re.target,ge={x:re.clientX,y:re.clientY},pe=(u==null?void 0:u.contains(oe))||(T==null?void 0:T.contains(oe)),ae=!xr(ge,m);pe?U():ae&&(U(),S())};return document.addEventListener("pointermove",V),()=>document.removeEventListener("pointermove",V)}},[u,T,m,S,U]),c.jsx(At,{...l,ref:p})}),[mr,pr]=rt(Ke,{isInside:!1}),gr=wn("TooltipContent"),At=N.forwardRef((l,t)=>{const{__scopeTooltip:e,children:s,"aria-label":f,onEscapeKeyDown:p,onPointerDownOutside:m,...d}=l,u=it(Ue,e),S=st(e),{onClose:T}=u;return N.useEffect(()=>(document.addEventListener(dt,T),()=>document.removeEventListener(dt,T)),[T]),N.useEffect(()=>{if(u.trigger){const E=U=>{const A=U.target;A!=null&&A.contains(u.trigger)&&T()};return window.addEventListener("scroll",E,{capture:!0}),()=>window.removeEventListener("scroll",E,{capture:!0})}},[u.trigger,T]),c.jsx(bn,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:p,onPointerDownOutside:m,onFocusOutside:E=>E.preventDefault(),onDismiss:T,children:c.jsxs(In,{"data-state":u.stateAttribute,...S,...d,ref:t,style:{...d.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[c.jsx(gr,{children:s}),c.jsx(mr,{scope:e,isInside:!0,children:c.jsx(xn,{id:u.contentId,role:"tooltip",children:f||s})})]})})});Dt.displayName=Ue;var Ot="TooltipArrow",vr=N.forwardRef((l,t)=>{const{__scopeTooltip:e,...s}=l,f=st(e);return pr(Ot,e).isInside?null:c.jsx(Fn,{...f,...s,ref:t})});vr.displayName=Ot;function yr(l,t){const e=Math.abs(t.top-l.y),s=Math.abs(t.bottom-l.y),f=Math.abs(t.right-l.x),p=Math.abs(t.left-l.x);switch(Math.min(e,s,f,p)){case p:return"left";case f:return"right";case e:return"top";case s:return"bottom";default:throw new Error("unreachable")}}function br(l,t,e=5){const s=[];switch(t){case"top":s.push({x:l.x-e,y:l.y+e},{x:l.x+e,y:l.y+e});break;case"bottom":s.push({x:l.x-e,y:l.y-e},{x:l.x+e,y:l.y-e});break;case"left":s.push({x:l.x+e,y:l.y-e},{x:l.x+e,y:l.y+e});break;case"right":s.push({x:l.x-e,y:l.y-e},{x:l.x-e,y:l.y+e});break}return s}function wr(l){const{top:t,right:e,bottom:s,left:f}=l;return[{x:f,y:t},{x:e,y:t},{x:e,y:s},{x:f,y:s}]}function xr(l,t){const{x:e,y:s}=l;let f=!1;for(let p=0,m=t.length-1;p<t.length;m=p++){const d=t[p],u=t[m],S=d.x,T=d.y,E=u.x,U=u.y;T>s!=U>s&&e<(E-S)*(s-T)/(U-T)+S&&(f=!f)}return f}function jr(l){const t=l.slice();return t.sort((e,s)=>e.x<s.x?-1:e.x>s.x?1:e.y<s.y?-1:e.y>s.y?1:0),Er(t)}function Er(l){if(l.length<=1)return l.slice();const t=[];for(let s=0;s<l.length;s++){const f=l[s];for(;t.length>=2;){const p=t[t.length-1],m=t[t.length-2];if((p.x-m.x)*(f.y-m.y)>=(p.y-m.y)*(f.x-m.x))t.pop();else break}t.push(f)}t.pop();const e=[];for(let s=l.length-1;s>=0;s--){const f=l[s];for(;e.length>=2;){const p=e[e.length-1],m=e[e.length-2];if((p.x-m.x)*(f.y-m.y)>=(p.y-m.y)*(f.x-m.x))e.pop();else break}e.push(f)}return e.pop(),t.length===1&&e.length===1&&t[0].x===e[0].x&&t[0].y===e[0].y?t:t.concat(e)}var kr=$t,Tr=Rt,Cr=Nt,It=Dt;const Sr=kr,_r=Tr,Pr=Cr,Ft=N.forwardRef(({className:l,sideOffset:t=4,...e},s)=>c.jsx(It,{ref:s,sideOffset:t,className:jn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",l),...e}));Ft.displayName=It.displayName;const qr=()=>{const{activeView:l,setActiveView:t}=ve(),e=[{id:"explorer",icon:Vn,label:"Explorer"},{id:"search",icon:St,label:"Search"},{id:"git",icon:Ct,label:"Source Control"},{id:"extensions",icon:Ln,label:"Extensions"}];return c.jsxs("div",{className:"activity-bar flex flex-col items-center py-2",children:[c.jsx("div",{className:"flex flex-col items-center space-y-4",children:e.map(s=>c.jsx(xt,{icon:s.icon,label:s.label,isActive:l===s.id,onClick:()=>t(s.id)},s.id))}),c.jsx("div",{className:"flex-1"}),c.jsx(xt,{icon:Sn,label:"Settings",isActive:!1,onClick:()=>{}})]})},xt=({icon:l,label:t,isActive:e,onClick:s})=>c.jsx(Sr,{children:c.jsxs(_r,{delayDuration:300,children:[c.jsx(Pr,{asChild:!0,children:c.jsxs("button",{className:`p-2 rounded transition-colors relative ${e?"text-primary bg-sidebar-accent":"text-sidebar-foreground hover:text-primary hover:bg-sidebar-accent"}`,onClick:s,"aria-label":t,children:[e&&c.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-0.5 bg-primary"}),c.jsx(l,{size:24})]})}),c.jsx(Ft,{side:"right",className:"bg-popover text-popover-foreground",children:t})]})});var Bt={exports:{}};(function(l){(t=>{var e=Object.defineProperty,s=Object.getOwnPropertyDescriptor,f=Object.getOwnPropertyNames,p=Object.prototype.hasOwnProperty,m=(n,i)=>{for(var o in i)e(n,o,{get:i[o],enumerable:!0})},d=(n,i,o,k)=>{if(i&&typeof i=="object"||typeof i=="function")for(let _ of f(i))!p.call(n,_)&&_!==o&&e(n,_,{get:()=>i[_],enumerable:!(k=s(i,_))||k.enumerable});return n},u=n=>d(e({},"__esModule",{value:!0}),n),S=(n,i,o)=>new Promise((k,_)=>{var $=j=>{try{F(o.next(j))}catch(L){_(L)}},x=j=>{try{F(o.throw(j))}catch(L){_(L)}},F=j=>j.done?k(j.value):Promise.resolve(j.value).then($,x);F((o=o.apply(n,i)).next())}),T={};m(T,{analyzeMetafile:()=>tn,analyzeMetafileSync:()=>ln,build:()=>Xt,buildSync:()=>nn,context:()=>Qt,default:()=>cn,formatMessages:()=>en,formatMessagesSync:()=>sn,initialize:()=>on,transform:()=>Zt,transformSync:()=>rn,version:()=>Yt}),t.exports=u(T);function E(n){let i=k=>{if(k===null)o.write8(0);else if(typeof k=="boolean")o.write8(1),o.write8(+k);else if(typeof k=="number")o.write8(2),o.write32(k|0);else if(typeof k=="string")o.write8(3),o.write(V(k));else if(k instanceof Uint8Array)o.write8(4),o.write(k);else if(k instanceof Array){o.write8(5),o.write32(k.length);for(let _ of k)i(_)}else{let _=Object.keys(k);o.write8(6),o.write32(_.length);for(let $ of _)o.write(V($)),i(k[$])}},o=new A;return o.write32(0),o.write32(n.id<<1|+!n.isRequest),i(n.value),pe(o.buf,o.len-4,0),o.buf.subarray(0,o.len)}function U(n){let i=()=>{switch(o.read8()){case 0:return null;case 1:return!!o.read8();case 2:return o.read32();case 3:return re(o.read());case 4:return o.read();case 5:{let x=o.read32(),F=[];for(let j=0;j<x;j++)F.push(i());return F}case 6:{let x=o.read32(),F={};for(let j=0;j<x;j++)F[re(o.read())]=i();return F}default:throw new Error("Invalid packet")}},o=new A(n),k=o.read32(),_=(k&1)===0;k>>>=1;let $=i();if(o.ptr!==n.length)throw new Error("Invalid packet");return{id:k,isRequest:_,value:$}}var A=class{constructor(n=new Uint8Array(1024)){this.buf=n,this.len=0,this.ptr=0}_write(n){if(this.len+n>this.buf.length){let i=new Uint8Array((this.len+n)*2);i.set(this.buf),this.buf=i}return this.len+=n,this.len-n}write8(n){let i=this._write(1);this.buf[i]=n}write32(n){let i=this._write(4);pe(this.buf,n,i)}write(n){let i=this._write(4+n.length);pe(this.buf,n.length,i),this.buf.set(n,i+4)}_read(n){if(this.ptr+n>this.buf.length)throw new Error("Invalid packet");return this.ptr+=n,this.ptr-n}read8(){return this.buf[this._read(1)]}read32(){return ge(this.buf,this._read(4))}read(){let n=this.read32(),i=new Uint8Array(n),o=this._read(i.length);return i.set(this.buf.subarray(o,o+n)),i}},V,re,oe;if(typeof TextEncoder<"u"&&typeof TextDecoder<"u"){let n=new TextEncoder,i=new TextDecoder;V=o=>n.encode(o),re=o=>i.decode(o),oe='new TextEncoder().encode("")'}else if(typeof Buffer<"u")V=n=>Buffer.from(n),re=n=>{let{buffer:i,byteOffset:o,byteLength:k}=n;return Buffer.from(i,o,k).toString()},oe='Buffer.from("")';else throw new Error("No UTF-8 codec found");if(!(V("")instanceof Uint8Array))throw new Error(`Invariant violation: "${oe} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);function ge(n,i){return n[i++]|n[i++]<<8|n[i++]<<16|n[i++]<<24}function pe(n,i,o){n[o++]=i,n[o++]=i>>8,n[o++]=i>>16,n[o++]=i>>24}var ae=JSON.stringify,Se="warning",_e="silent";function ee(n){if(we(n,"target"),n.indexOf(",")>=0)throw new Error(`Invalid target: ${n}`);return n}var fe=()=>null,ne=n=>typeof n=="boolean"?null:"a boolean",O=n=>typeof n=="string"?null:"a string",Re=n=>n instanceof RegExp?null:"a RegExp object",de=n=>typeof n=="number"&&n===(n|0)?null:"an integer",De=n=>typeof n=="function"?null:"a function",me=n=>Array.isArray(n)?null:"an array",xe=n=>typeof n=="object"&&n!==null&&!Array.isArray(n)?null:"an object",ze=n=>typeof n=="object"&&n!==null?null:"an array or an object",Ye=n=>n instanceof WebAssembly.Module?null:"a WebAssembly.Module",Ee=n=>typeof n=="object"&&!Array.isArray(n)?null:"an object or null",Ge=n=>typeof n=="string"||typeof n=="boolean"?null:"a string or a boolean",Xe=n=>typeof n=="string"||typeof n=="object"&&n!==null&&!Array.isArray(n)?null:"a string or an object",lt=n=>typeof n=="string"||Array.isArray(n)?null:"a string or an array",mt=n=>typeof n=="string"||n instanceof Uint8Array?null:"a string or a Uint8Array",Ut=n=>typeof n=="string"||n instanceof URL?null:"a string or a URL";function h(n,i,o,k){let _=n[o];if(i[o+""]=!0,_===void 0)return;let $=k(_);if($!==null)throw new Error(`${ae(o)} must be ${$}`);return _}function ye(n,i,o){for(let k in n)if(!(k in i))throw new Error(`Invalid option ${o}: ${ae(k)}`)}function Wt(n){let i=Object.create(null),o=h(n,i,"wasmURL",Ut),k=h(n,i,"wasmModule",Ye),_=h(n,i,"worker",ne);return ye(n,i,"in initialize() call"),{wasmURL:o,wasmModule:k,worker:_}}function pt(n){let i;if(n!==void 0){i=Object.create(null);for(let o in n){let k=n[o];if(typeof k=="string"||k===!1)i[o]=k;else throw new Error(`Expected ${ae(o)} in mangle cache to map to either a string or false`)}}return i}function Qe(n,i,o,k,_){let $=h(i,o,"color",ne),x=h(i,o,"logLevel",O),F=h(i,o,"logLimit",de);$!==void 0?n.push(`--color=${$}`):k&&n.push("--color=true"),n.push(`--log-level=${x||_}`),n.push(`--log-limit=${F||0}`)}function we(n,i,o){if(typeof n!="string")throw new Error(`Expected value for ${i}${o!==void 0?" "+ae(o):""} to be a string, got ${typeof n} instead`);return n}function gt(n,i,o){let k=h(i,o,"legalComments",O),_=h(i,o,"sourceRoot",O),$=h(i,o,"sourcesContent",ne),x=h(i,o,"target",lt),F=h(i,o,"format",O),j=h(i,o,"globalName",O),L=h(i,o,"mangleProps",Re),W=h(i,o,"reserveProps",Re),Q=h(i,o,"mangleQuoted",ne),se=h(i,o,"minify",ne),G=h(i,o,"minifySyntax",ne),le=h(i,o,"minifyWhitespace",ne),B=h(i,o,"minifyIdentifiers",ne),q=h(i,o,"lineLimit",de),te=h(i,o,"drop",me),J=h(i,o,"charset",O),b=h(i,o,"treeShaking",ne),g=h(i,o,"ignoreAnnotations",ne),v=h(i,o,"jsx",O),y=h(i,o,"jsxFactory",O),P=h(i,o,"jsxFragment",O),R=h(i,o,"jsxImportSource",O),z=h(i,o,"jsxDev",ne),r=h(i,o,"jsxSideEffects",ne),a=h(i,o,"define",xe),w=h(i,o,"logOverride",xe),C=h(i,o,"supported",xe),I=h(i,o,"pure",me),Z=h(i,o,"keepNames",ne),K=h(i,o,"platform",O),H=h(i,o,"tsconfigRaw",Xe);if(k&&n.push(`--legal-comments=${k}`),_!==void 0&&n.push(`--source-root=${_}`),$!==void 0&&n.push(`--sources-content=${$}`),x&&(Array.isArray(x)?n.push(`--target=${Array.from(x).map(ee).join(",")}`):n.push(`--target=${ee(x)}`)),F&&n.push(`--format=${F}`),j&&n.push(`--global-name=${j}`),K&&n.push(`--platform=${K}`),H&&n.push(`--tsconfig-raw=${typeof H=="string"?H:JSON.stringify(H)}`),se&&n.push("--minify"),G&&n.push("--minify-syntax"),le&&n.push("--minify-whitespace"),B&&n.push("--minify-identifiers"),q&&n.push(`--line-limit=${q}`),J&&n.push(`--charset=${J}`),b!==void 0&&n.push(`--tree-shaking=${b}`),g&&n.push("--ignore-annotations"),te)for(let M of te)n.push(`--drop:${we(M,"drop")}`);if(L&&n.push(`--mangle-props=${L.source}`),W&&n.push(`--reserve-props=${W.source}`),Q!==void 0&&n.push(`--mangle-quoted=${Q}`),v&&n.push(`--jsx=${v}`),y&&n.push(`--jsx-factory=${y}`),P&&n.push(`--jsx-fragment=${P}`),R&&n.push(`--jsx-import-source=${R}`),z&&n.push("--jsx-dev"),r&&n.push("--jsx-side-effects"),a)for(let M in a){if(M.indexOf("=")>=0)throw new Error(`Invalid define: ${M}`);n.push(`--define:${M}=${we(a[M],"define",M)}`)}if(w)for(let M in w){if(M.indexOf("=")>=0)throw new Error(`Invalid log override: ${M}`);n.push(`--log-override:${M}=${we(w[M],"log override",M)}`)}if(C)for(let M in C){if(M.indexOf("=")>=0)throw new Error(`Invalid supported: ${M}`);const ue=C[M];if(typeof ue!="boolean")throw new Error(`Expected value for supported ${ae(M)} to be a boolean, got ${typeof ue} instead`);n.push(`--supported:${M}=${ue}`)}if(I)for(let M of I)n.push(`--pure:${we(M,"pure")}`);Z&&n.push("--keep-names")}function zt(n,i,o,k,_){var $;let x=[],F=[],j=Object.create(null),L=null,W=null;Qe(x,i,j,o,k),gt(x,i,j);let Q=h(i,j,"sourcemap",Ge),se=h(i,j,"bundle",ne),G=h(i,j,"splitting",ne),le=h(i,j,"preserveSymlinks",ne),B=h(i,j,"metafile",ne),q=h(i,j,"outfile",O),te=h(i,j,"outdir",O),J=h(i,j,"outbase",O),b=h(i,j,"tsconfig",O),g=h(i,j,"resolveExtensions",me),v=h(i,j,"nodePaths",me),y=h(i,j,"mainFields",me),P=h(i,j,"conditions",me),R=h(i,j,"external",me),z=h(i,j,"packages",O),r=h(i,j,"alias",xe),a=h(i,j,"loader",xe),w=h(i,j,"outExtension",xe),C=h(i,j,"publicPath",O),I=h(i,j,"entryNames",O),Z=h(i,j,"chunkNames",O),K=h(i,j,"assetNames",O),H=h(i,j,"inject",me),M=h(i,j,"banner",xe),ue=h(i,j,"footer",xe),Y=h(i,j,"entryPoints",ze),ie=h(i,j,"absWorkingDir",O),X=h(i,j,"stdin",xe),ce=($=h(i,j,"write",ne))!=null?$:_,be=h(i,j,"allowOverwrite",ne),Ce=h(i,j,"mangleCache",xe);if(j.plugins=!0,ye(i,j,`in ${n}() call`),Q&&x.push(`--sourcemap${Q===!0?"":`=${Q}`}`),se&&x.push("--bundle"),be&&x.push("--allow-overwrite"),G&&x.push("--splitting"),le&&x.push("--preserve-symlinks"),B&&x.push("--metafile"),q&&x.push(`--outfile=${q}`),te&&x.push(`--outdir=${te}`),J&&x.push(`--outbase=${J}`),b&&x.push(`--tsconfig=${b}`),z&&x.push(`--packages=${z}`),g){let D=[];for(let he of g){if(we(he,"resolve extension"),he.indexOf(",")>=0)throw new Error(`Invalid resolve extension: ${he}`);D.push(he)}x.push(`--resolve-extensions=${D.join(",")}`)}if(C&&x.push(`--public-path=${C}`),I&&x.push(`--entry-names=${I}`),Z&&x.push(`--chunk-names=${Z}`),K&&x.push(`--asset-names=${K}`),y){let D=[];for(let he of y){if(we(he,"main field"),he.indexOf(",")>=0)throw new Error(`Invalid main field: ${he}`);D.push(he)}x.push(`--main-fields=${D.join(",")}`)}if(P){let D=[];for(let he of P){if(we(he,"condition"),he.indexOf(",")>=0)throw new Error(`Invalid condition: ${he}`);D.push(he)}x.push(`--conditions=${D.join(",")}`)}if(R)for(let D of R)x.push(`--external:${we(D,"external")}`);if(r)for(let D in r){if(D.indexOf("=")>=0)throw new Error(`Invalid package name in alias: ${D}`);x.push(`--alias:${D}=${we(r[D],"alias",D)}`)}if(M)for(let D in M){if(D.indexOf("=")>=0)throw new Error(`Invalid banner file type: ${D}`);x.push(`--banner:${D}=${we(M[D],"banner",D)}`)}if(ue)for(let D in ue){if(D.indexOf("=")>=0)throw new Error(`Invalid footer file type: ${D}`);x.push(`--footer:${D}=${we(ue[D],"footer",D)}`)}if(H)for(let D of H)x.push(`--inject:${we(D,"inject")}`);if(a)for(let D in a){if(D.indexOf("=")>=0)throw new Error(`Invalid loader extension: ${D}`);x.push(`--loader:${D}=${we(a[D],"loader",D)}`)}if(w)for(let D in w){if(D.indexOf("=")>=0)throw new Error(`Invalid out extension: ${D}`);x.push(`--out-extension:${D}=${we(w[D],"out extension",D)}`)}if(Y)if(Array.isArray(Y))for(let D=0,he=Y.length;D<he;D++){let ke=Y[D];if(typeof ke=="object"&&ke!==null){let Te=Object.create(null),Ne=h(ke,Te,"in",O),tt=h(ke,Te,"out",O);if(ye(ke,Te,"in entry point at index "+D),Ne===void 0)throw new Error('Missing property "in" for entry point at index '+D);if(tt===void 0)throw new Error('Missing property "out" for entry point at index '+D);F.push([tt,Ne])}else F.push(["",we(ke,"entry point at index "+D)])}else for(let D in Y)F.push([D,we(Y[D],"entry point",D)]);if(X){let D=Object.create(null),he=h(X,D,"contents",mt),ke=h(X,D,"resolveDir",O),Te=h(X,D,"sourcefile",O),Ne=h(X,D,"loader",O);ye(X,D,'in "stdin" object'),Te&&x.push(`--sourcefile=${Te}`),Ne&&x.push(`--loader=${Ne}`),ke&&(W=ke),typeof he=="string"?L=V(he):he instanceof Uint8Array&&(L=he)}let Fe=[];if(v)for(let D of v)D+="",Fe.push(D);return{entries:F,flags:x,write:ce,stdinContents:L,stdinResolveDir:W,absWorkingDir:ie,nodePaths:Fe,mangleCache:pt(Ce)}}function Gt(n,i,o,k){let _=[],$=Object.create(null);Qe(_,i,$,o,k),gt(_,i,$);let x=h(i,$,"sourcemap",Ge),F=h(i,$,"sourcefile",O),j=h(i,$,"loader",O),L=h(i,$,"banner",O),W=h(i,$,"footer",O),Q=h(i,$,"mangleCache",xe);return ye(i,$,`in ${n}() call`),x&&_.push(`--sourcemap=${x===!0?"external":x}`),F&&_.push(`--sourcefile=${F}`),j&&_.push(`--loader=${j}`),L&&_.push(`--banner=${L}`),W&&_.push(`--footer=${W}`),{flags:_,mangleCache:pt(Q)}}function qt(n){const i={},o={didClose:!1,reason:""};let k={},_=0,$=0,x=new Uint8Array(16*1024),F=0,j=b=>{let g=F+b.length;if(g>x.length){let y=new Uint8Array(g*2);y.set(x),x=y}x.set(b,F),F+=b.length;let v=0;for(;v+4<=F;){let y=ge(x,v);if(v+4+y>F)break;v+=4,le(x.subarray(v,v+y)),v+=y}v>0&&(x.copyWithin(0,v,F),F-=v)},L=b=>{o.didClose=!0,b&&(o.reason=": "+(b.message||b));const g="The service was stopped"+o.reason;for(let v in k)k[v](g,null);k={}},W=(b,g,v)=>{if(o.didClose)return v("The service is no longer running"+o.reason,null);let y=_++;k[y]=(P,R)=>{try{v(P,R)}finally{b&&b.unref()}},b&&b.ref(),n.writeToStdin(E({id:y,isRequest:!0,value:g}))},Q=(b,g)=>{if(o.didClose)throw new Error("The service is no longer running"+o.reason);n.writeToStdin(E({id:b,isRequest:!1,value:g}))},se=(b,g)=>S(this,null,function*(){try{if(g.command==="ping"){Q(b,{});return}if(typeof g.key=="number"){const v=i[g.key];if(v){const y=v[g.command];if(y){yield y(b,g);return}}}throw new Error("Invalid command: "+g.command)}catch(v){Q(b,{errors:[Ae(v,n,null,void 0,"")]})}}),G=!0,le=b=>{if(G){G=!1;let v=String.fromCharCode(...b);if(v!=="0.18.7")throw new Error(`Cannot start service: Host version "0.18.7" does not match binary version ${ae(v)}`);return}let g=U(b);if(g.isRequest)se(g.id,g.value);else{let v=k[g.id];delete k[g.id],g.value.error?v(g.value.error,{}):v(null,g.value)}};return{readFromStdout:j,afterClose:L,service:{buildOrContext:({callName:b,refs:g,options:v,isTTY:y,defaultWD:P,callback:R})=>{let z=0;const r=$++,a={},w={ref(){++z===1&&g&&g.ref()},unref(){--z===0&&(delete i[r],g&&g.unref())}};i[r]=a,w.ref(),Ht(b,r,W,Q,w,n,a,v,y,P,(C,I)=>{try{R(C,I)}finally{w.unref()}})},transform:({callName:b,refs:g,input:v,options:y,isTTY:P,fs:R,callback:z})=>{const r=vt();let a=w=>{try{if(typeof v!="string"&&!(v instanceof Uint8Array))throw new Error('The input to "transform" must be a string or a Uint8Array');let{flags:C,mangleCache:I}=Gt(b,y,P,_e),Z={command:"transform",flags:C,inputFS:w!==null,input:w!==null?V(w):typeof v=="string"?V(v):v};I&&(Z.mangleCache=I),W(g,Z,(K,H)=>{if(K)return z(new Error(K),null);let M=Oe(H.errors,r),ue=Oe(H.warnings,r),Y=1,ie=()=>{if(--Y===0){let X={warnings:ue,code:H.code,map:H.map,mangleCache:void 0,legalComments:void 0};"legalComments"in H&&(X.legalComments=H==null?void 0:H.legalComments),H.mangleCache&&(X.mangleCache=H==null?void 0:H.mangleCache),z(null,X)}};if(M.length>0)return z(qe("Transform failed",M,ue),null);H.codeFS&&(Y++,R.readFile(H.code,(X,ce)=>{X!==null?z(X,null):(H.code=ce,ie())})),H.mapFS&&(Y++,R.readFile(H.map,(X,ce)=>{X!==null?z(X,null):(H.map=ce,ie())})),ie()})}catch(C){let I=[];try{Qe(I,y,{},P,_e)}catch{}const Z=Ae(C,n,r,void 0,"");W(g,{command:"error",flags:I,error:Z},()=>{Z.detail=r.load(Z.detail),z(qe("Transform failed",[Z],[]),null)})}};if((typeof v=="string"||v instanceof Uint8Array)&&v.length>1024*1024){let w=a;a=()=>R.writeFile(v,w)}a(null)},formatMessages:({callName:b,refs:g,messages:v,options:y,callback:P})=>{let R=$e(v,"messages",null,"");if(!y)throw new Error(`Missing second argument in ${b}() call`);let z={},r=h(y,z,"kind",O),a=h(y,z,"color",ne),w=h(y,z,"terminalWidth",de);if(ye(y,z,`in ${b}() call`),r===void 0)throw new Error(`Missing "kind" in ${b}() call`);if(r!=="error"&&r!=="warning")throw new Error(`Expected "kind" to be "error" or "warning" in ${b}() call`);let C={command:"format-msgs",messages:R,isWarning:r==="warning"};a!==void 0&&(C.color=a),w!==void 0&&(C.terminalWidth=w),W(g,C,(I,Z)=>{if(I)return P(new Error(I),null);P(null,Z.messages)})},analyzeMetafile:({callName:b,refs:g,metafile:v,options:y,callback:P})=>{y===void 0&&(y={});let R={},z=h(y,R,"color",ne),r=h(y,R,"verbose",ne);ye(y,R,`in ${b}() call`);let a={command:"analyze-metafile",metafile:v};z!==void 0&&(a.color=z),r!==void 0&&(a.verbose=r),W(g,a,(w,C)=>{if(w)return P(new Error(w),null);P(null,C.result)})}}}}function Ht(n,i,o,k,_,$,x,F,j,L,W){const Q=vt(),se=n==="context",G=(q,te)=>{const J=[];try{Qe(J,F,{},j,Se)}catch{}const b=Ae(q,$,Q,void 0,te);o(_,{command:"error",flags:J,error:b},()=>{b.detail=Q.load(b.detail),W(qe(se?"Context failed":"Build failed",[b],[]),null)})};let le;if(typeof F=="object"){const q=F.plugins;if(q!==void 0){if(!Array.isArray(q))return G(new Error('"plugins" must be an array'),"");le=q}}if(le&&le.length>0){if($.isSync)return G(new Error("Cannot use plugins in synchronous API calls"),"");Jt(i,o,k,_,$,x,F,le,Q).then(q=>{if(!q.ok)return G(q.error,q.pluginName);try{B(q.requestPlugins,q.runOnEndCallbacks,q.scheduleOnDisposeCallbacks)}catch(te){G(te,"")}},q=>G(q,""));return}try{B(null,(q,te)=>te([],[]),()=>{})}catch(q){G(q,"")}function B(q,te,J){const b=$.hasFS,{entries:g,flags:v,write:y,stdinContents:P,stdinResolveDir:R,absWorkingDir:z,nodePaths:r,mangleCache:a}=zt(n,F,j,Se,b);if(y&&!$.hasFS)throw new Error('The "write" option is unavailable in this environment');const w={command:"build",key:i,entries:g,flags:v,write:y,stdinContents:P,stdinResolveDir:R,absWorkingDir:z||L,nodePaths:r,context:se};q&&(w.plugins=q),a&&(w.mangleCache=a);const C=(K,H)=>{const M={errors:Oe(K.errors,Q),warnings:Oe(K.warnings,Q),outputFiles:void 0,metafile:void 0,mangleCache:void 0},ue=M.errors.slice(),Y=M.warnings.slice();K.outputFiles&&(M.outputFiles=K.outputFiles.map(Kt)),K.metafile&&(M.metafile=JSON.parse(K.metafile)),K.mangleCache&&(M.mangleCache=K.mangleCache),K.writeToStdout!==void 0&&console.log(re(K.writeToStdout).replace(/\n$/,"")),te(M,(ie,X)=>{if(ue.length>0||ie.length>0){const ce=qe("Build failed",ue.concat(ie),Y.concat(X));return H(ce,null,ie,X)}H(null,M,ie,X)})};let I,Z;se&&(x["on-end"]=(K,H)=>new Promise(M=>{C(H,(ue,Y,ie,X)=>{const ce={errors:ie,warnings:X};Z&&Z(ue,Y),I=void 0,Z=void 0,k(K,ce),M()})})),o(_,w,(K,H)=>{if(K)return W(new Error(K),null);if(!se)return C(H,(Y,ie)=>(J(),W(Y,ie)));if(H.errors.length>0)return W(qe("Context failed",H.errors,H.warnings),null);let M=!1;const ue={rebuild:()=>(I||(I=new Promise((Y,ie)=>{let X;Z=(be,Ce)=>{X||(X=()=>be?ie(be):Y(Ce))};const ce=()=>{o(_,{command:"rebuild",key:i},(Ce,Fe)=>{Ce?ie(new Error(Ce)):X?X():ce()})};ce()})),I),watch:(Y={})=>new Promise((ie,X)=>{if(!$.hasFS)throw new Error('Cannot use the "watch" API in this environment');ye(Y,{},"in watch() call"),o(_,{command:"watch",key:i},Ce=>{Ce?X(new Error(Ce)):ie(void 0)})}),serve:(Y={})=>new Promise((ie,X)=>{if(!$.hasFS)throw new Error('Cannot use the "serve" API in this environment');const ce={},be=h(Y,ce,"port",de),Ce=h(Y,ce,"host",O),Fe=h(Y,ce,"servedir",O),D=h(Y,ce,"keyfile",O),he=h(Y,ce,"certfile",O),ke=h(Y,ce,"onRequest",De);ye(Y,ce,"in serve() call");const Te={command:"serve",key:i,onRequest:!!ke};be!==void 0&&(Te.port=be),Ce!==void 0&&(Te.host=Ce),Fe!==void 0&&(Te.servedir=Fe),D!==void 0&&(Te.keyfile=D),he!==void 0&&(Te.certfile=he),o(_,Te,(Ne,tt)=>{if(Ne)return X(new Error(Ne));ke&&(x["serve-request"]=(un,dn)=>{ke(dn.args),k(un,{})}),ie(tt)})}),cancel:()=>new Promise(Y=>{if(M)return Y();o(_,{command:"cancel",key:i},()=>{Y()})}),dispose:()=>new Promise(Y=>{if(M)return Y();M=!0,o(_,{command:"dispose",key:i},()=>{Y(),J(),_.unref()})})};_.ref(),W(null,ue)})}}var Jt=(n,i,o,k,_,$,x,F,j)=>S(void 0,null,function*(){let L=[],W=[],Q={},se={},G=[],le=0,B=0,q=[],te=!1;F=[...F];for(let g of F){let v={};if(typeof g!="object")throw new Error(`Plugin at index ${B} must be an object`);const y=h(g,v,"name",O);if(typeof y!="string"||y==="")throw new Error(`Plugin at index ${B} is missing a name`);try{let P=h(g,v,"setup",De);if(typeof P!="function")throw new Error("Plugin is missing a setup function");ye(g,v,`on plugin ${ae(y)}`);let R={name:y,onStart:!1,onEnd:!1,onResolve:[],onLoad:[]};B++;let r=P({initialOptions:x,resolve:(a,w={})=>{if(!te)throw new Error('Cannot call "resolve" before plugin setup has completed');if(typeof a!="string")throw new Error("The path to resolve must be a string");let C=Object.create(null),I=h(w,C,"pluginName",O),Z=h(w,C,"importer",O),K=h(w,C,"namespace",O),H=h(w,C,"resolveDir",O),M=h(w,C,"kind",O),ue=h(w,C,"pluginData",fe);return ye(w,C,"in resolve() call"),new Promise((Y,ie)=>{const X={command:"resolve",path:a,key:n,pluginName:y};if(I!=null&&(X.pluginName=I),Z!=null&&(X.importer=Z),K!=null&&(X.namespace=K),H!=null&&(X.resolveDir=H),M!=null)X.kind=M;else throw new Error('Must specify "kind" when calling "resolve"');ue!=null&&(X.pluginData=j.store(ue)),i(k,X,(ce,be)=>{ce!==null?ie(new Error(ce)):Y({errors:Oe(be.errors,j),warnings:Oe(be.warnings,j),path:be.path,external:be.external,sideEffects:be.sideEffects,namespace:be.namespace,suffix:be.suffix,pluginData:j.load(be.pluginData)})})})},onStart(a){let w='This error came from the "onStart" callback registered here:',C=Ze(new Error(w),_,"onStart");L.push({name:y,callback:a,note:C}),R.onStart=!0},onEnd(a){let w='This error came from the "onEnd" callback registered here:',C=Ze(new Error(w),_,"onEnd");W.push({name:y,callback:a,note:C}),R.onEnd=!0},onResolve(a,w){let C='This error came from the "onResolve" callback registered here:',I=Ze(new Error(C),_,"onResolve"),Z={},K=h(a,Z,"filter",Re),H=h(a,Z,"namespace",O);if(ye(a,Z,`in onResolve() call for plugin ${ae(y)}`),K==null)throw new Error("onResolve() call is missing a filter");let M=le++;Q[M]={name:y,callback:w,note:I},R.onResolve.push({id:M,filter:K.source,namespace:H||""})},onLoad(a,w){let C='This error came from the "onLoad" callback registered here:',I=Ze(new Error(C),_,"onLoad"),Z={},K=h(a,Z,"filter",Re),H=h(a,Z,"namespace",O);if(ye(a,Z,`in onLoad() call for plugin ${ae(y)}`),K==null)throw new Error("onLoad() call is missing a filter");let M=le++;se[M]={name:y,callback:w,note:I},R.onLoad.push({id:M,filter:K.source,namespace:H||""})},onDispose(a){G.push(a)},esbuild:_.esbuild});r&&(yield r),q.push(R)}catch(P){return{ok:!1,error:P,pluginName:y}}}$["on-start"]=(g,v)=>S(void 0,null,function*(){let y={errors:[],warnings:[]};yield Promise.all(L.map(P=>S(void 0,[P],function*({name:R,callback:z,note:r}){try{let a=yield z();if(a!=null){if(typeof a!="object")throw new Error(`Expected onStart() callback in plugin ${ae(R)} to return an object`);let w={},C=h(a,w,"errors",me),I=h(a,w,"warnings",me);ye(a,w,`from onStart() callback in plugin ${ae(R)}`),C!=null&&y.errors.push(...$e(C,"errors",j,R)),I!=null&&y.warnings.push(...$e(I,"warnings",j,R))}}catch(a){y.errors.push(Ae(a,_,j,r&&r(),R))}}))),o(g,y)}),$["on-resolve"]=(g,v)=>S(void 0,null,function*(){let y={},P="",R,z;for(let r of v.ids)try{({name:P,callback:R,note:z}=Q[r]);let a=yield R({path:v.path,importer:v.importer,namespace:v.namespace,resolveDir:v.resolveDir,kind:v.kind,pluginData:j.load(v.pluginData)});if(a!=null){if(typeof a!="object")throw new Error(`Expected onResolve() callback in plugin ${ae(P)} to return an object`);let w={},C=h(a,w,"pluginName",O),I=h(a,w,"path",O),Z=h(a,w,"namespace",O),K=h(a,w,"suffix",O),H=h(a,w,"external",ne),M=h(a,w,"sideEffects",ne),ue=h(a,w,"pluginData",fe),Y=h(a,w,"errors",me),ie=h(a,w,"warnings",me),X=h(a,w,"watchFiles",me),ce=h(a,w,"watchDirs",me);ye(a,w,`from onResolve() callback in plugin ${ae(P)}`),y.id=r,C!=null&&(y.pluginName=C),I!=null&&(y.path=I),Z!=null&&(y.namespace=Z),K!=null&&(y.suffix=K),H!=null&&(y.external=H),M!=null&&(y.sideEffects=M),ue!=null&&(y.pluginData=j.store(ue)),Y!=null&&(y.errors=$e(Y,"errors",j,P)),ie!=null&&(y.warnings=$e(ie,"warnings",j,P)),X!=null&&(y.watchFiles=et(X,"watchFiles")),ce!=null&&(y.watchDirs=et(ce,"watchDirs"));break}}catch(a){y={id:r,errors:[Ae(a,_,j,z&&z(),P)]};break}o(g,y)}),$["on-load"]=(g,v)=>S(void 0,null,function*(){let y={},P="",R,z;for(let r of v.ids)try{({name:P,callback:R,note:z}=se[r]);let a=yield R({path:v.path,namespace:v.namespace,suffix:v.suffix,pluginData:j.load(v.pluginData)});if(a!=null){if(typeof a!="object")throw new Error(`Expected onLoad() callback in plugin ${ae(P)} to return an object`);let w={},C=h(a,w,"pluginName",O),I=h(a,w,"contents",mt),Z=h(a,w,"resolveDir",O),K=h(a,w,"pluginData",fe),H=h(a,w,"loader",O),M=h(a,w,"errors",me),ue=h(a,w,"warnings",me),Y=h(a,w,"watchFiles",me),ie=h(a,w,"watchDirs",me);ye(a,w,`from onLoad() callback in plugin ${ae(P)}`),y.id=r,C!=null&&(y.pluginName=C),I instanceof Uint8Array?y.contents=I:I!=null&&(y.contents=V(I)),Z!=null&&(y.resolveDir=Z),K!=null&&(y.pluginData=j.store(K)),H!=null&&(y.loader=H),M!=null&&(y.errors=$e(M,"errors",j,P)),ue!=null&&(y.warnings=$e(ue,"warnings",j,P)),Y!=null&&(y.watchFiles=et(Y,"watchFiles")),ie!=null&&(y.watchDirs=et(ie,"watchDirs"));break}}catch(a){y={id:r,errors:[Ae(a,_,j,z&&z(),P)]};break}o(g,y)});let J=(g,v)=>v([],[]);W.length>0&&(J=(g,v)=>{S(void 0,null,function*(){const y=[],P=[];for(const{name:R,callback:z,note:r}of W){let a,w;try{const C=yield z(g);if(C!=null){if(typeof C!="object")throw new Error(`Expected onEnd() callback in plugin ${ae(R)} to return an object`);let I={},Z=h(C,I,"errors",me),K=h(C,I,"warnings",me);ye(C,I,`from onEnd() callback in plugin ${ae(R)}`),Z!=null&&(a=$e(Z,"errors",j,R)),K!=null&&(w=$e(K,"warnings",j,R))}}catch(C){a=[Ae(C,_,j,r&&r(),R)]}if(a){y.push(...a);try{g.errors.push(...a)}catch{}}if(w){P.push(...w);try{g.warnings.push(...w)}catch{}}}v(y,P)})});let b=()=>{for(const g of G)setTimeout(()=>g(),0)};return te=!0,{ok:!0,requestPlugins:q,runOnEndCallbacks:J,scheduleOnDisposeCallbacks:b}});function vt(){const n=new Map;let i=0;return{load(o){return n.get(o)},store(o){if(o===void 0)return-1;const k=i++;return n.set(k,o),k}}}function Ze(n,i,o){let k,_=!1;return()=>{if(_)return k;_=!0;try{let $=(n.stack+"").split(`
`);$.splice(1,1);let x=yt(i,$,o);if(x)return k={text:n.message,location:x},k}catch{}}}function Ae(n,i,o,k,_){let $="Internal error",x=null;try{$=(n&&n.message||n)+""}catch{}try{x=yt(i,(n.stack+"").split(`
`),"")}catch{}return{id:"",pluginName:_,text:$,location:x,notes:k?[k]:[],detail:o?o.store(n):-1}}function yt(n,i,o){let k="    at ";if(n.readFileSync&&!i[0].startsWith(k)&&i[1].startsWith(k))for(let _=1;_<i.length;_++){let $=i[_];if($.startsWith(k))for($=$.slice(k.length);;){let x=/^(?:new |async )?\S+ \((.*)\)$/.exec($);if(x){$=x[1];continue}if(x=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec($),x){$=x[1];continue}if(x=/^(\S+):(\d+):(\d+)$/.exec($),x){let F;try{F=n.readFileSync(x[1],"utf8")}catch{break}let j=F.split(/\r\n|\r|\n|\u2028|\u2029/)[+x[2]-1]||"",L=+x[3]-1,W=j.slice(L,L+o.length)===o?o.length:0;return{file:x[1],namespace:"file",line:+x[2],column:V(j.slice(0,L)).length,length:V(j.slice(L,L+W)).length,lineText:j+`
`+i.slice(1).join(`
`),suggestion:""}}break}}return null}function qe(n,i,o){let k=5,_=i.length<1?"":` with ${i.length} error${i.length<2?"":"s"}:`+i.slice(0,k+1).map((x,F)=>{if(F===k)return`
...`;if(!x.location)return`
error: ${x.text}`;let{file:j,line:L,column:W}=x.location,Q=x.pluginName?`[plugin: ${x.pluginName}] `:"";return`
${j}:${L}:${W}: ERROR: ${Q}${x.text}`}).join(""),$=new Error(`${n}${_}`);return $.errors=i,$.warnings=o,$}function Oe(n,i){for(const o of n)o.detail=i.load(o.detail);return n}function bt(n,i){if(n==null)return null;let o={},k=h(n,o,"file",O),_=h(n,o,"namespace",O),$=h(n,o,"line",de),x=h(n,o,"column",de),F=h(n,o,"length",de),j=h(n,o,"lineText",O),L=h(n,o,"suggestion",O);return ye(n,o,i),{file:k||"",namespace:_||"",line:$||0,column:x||0,length:F||0,lineText:j||"",suggestion:L||""}}function $e(n,i,o,k){let _=[],$=0;for(const x of n){let F={},j=h(x,F,"id",O),L=h(x,F,"pluginName",O),W=h(x,F,"text",O),Q=h(x,F,"location",Ee),se=h(x,F,"notes",me),G=h(x,F,"detail",fe),le=`in element ${$} of "${i}"`;ye(x,F,le);let B=[];if(se)for(const q of se){let te={},J=h(q,te,"text",O),b=h(q,te,"location",Ee);ye(q,te,le),B.push({text:J||"",location:bt(b,le)})}_.push({id:j||"",pluginName:L||k,text:W||"",location:bt(Q,le),notes:B,detail:o?o.store(G):-1}),$++}return _}function et(n,i){const o=[];for(const k of n){if(typeof k!="string")throw new Error(`${ae(i)} must be an array of strings`);o.push(k)}return o}function Kt({path:n,contents:i}){let o=null;return{path:n,contents:i,get text(){const k=this.contents;return(o===null||k!==i)&&(i=k,o=re(k)),o}}}var Yt="0.18.7",Xt=n=>He().build(n),Qt=n=>He().context(n),Zt=(n,i)=>He().transform(n,i),en=(n,i)=>He().formatMessages(n,i),tn=(n,i)=>He().analyzeMetafile(n,i),nn=()=>{throw new Error('The "buildSync" API only works in node')},rn=()=>{throw new Error('The "transformSync" API only works in node')},sn=()=>{throw new Error('The "formatMessagesSync" API only works in node')},ln=()=>{throw new Error('The "analyzeMetafileSync" API only works in node')},Ie,ot,He=()=>{if(ot)return ot;throw Ie?new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this'):new Error('You need to call "initialize" before calling this')},on=n=>{n=Wt(n||{});let i=n.wasmURL,o=n.wasmModule,k=n.worker!==!1;if(!i&&!o)throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');if(Ie)throw new Error('Cannot call "initialize" more than once');return Ie=an(i||"",o,k),Ie.catch(()=>{Ie=void 0}),Ie},an=(n,i,o)=>S(void 0,null,function*(){let k;if(o){let L=new Blob([`onmessage=((postMessage) => {
      // Copyright 2018 The Go Authors. All rights reserved.
      // Use of this source code is governed by a BSD-style
      // license that can be found in the LICENSE file.
      var __async = (__this, __arguments, generator) => {
        return new Promise((resolve, reject) => {
          var fulfilled = (value) => {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          };
          var rejected = (value) => {
            try {
              step(generator.throw(value));
            } catch (e) {
              reject(e);
            }
          };
          var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
          step((generator = generator.apply(__this, __arguments)).next());
        });
      };
      let onmessage;
      let globalThis = {};
      for (let o = self; o; o = Object.getPrototypeOf(o))
        for (let k of Object.getOwnPropertyNames(o))
          if (!(k in globalThis))
            Object.defineProperty(globalThis, k, { get: () => self[k] });
      "use strict";
      (() => {
        const enosys = () => {
          const err = new Error("not implemented");
          err.code = "ENOSYS";
          return err;
        };
        if (!globalThis.fs) {
          let outputBuf = "";
          globalThis.fs = {
            constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },
            // unused
            writeSync(fd, buf) {
              outputBuf += decoder.decode(buf);
              const nl = outputBuf.lastIndexOf("\\n");
              if (nl != -1) {
                console.log(outputBuf.substring(0, nl));
                outputBuf = outputBuf.substring(nl + 1);
              }
              return buf.length;
            },
            write(fd, buf, offset, length, position, callback) {
              if (offset !== 0 || length !== buf.length || position !== null) {
                callback(enosys());
                return;
              }
              const n = this.writeSync(fd, buf);
              callback(null, n);
            },
            chmod(path, mode, callback) {
              callback(enosys());
            },
            chown(path, uid, gid, callback) {
              callback(enosys());
            },
            close(fd, callback) {
              callback(enosys());
            },
            fchmod(fd, mode, callback) {
              callback(enosys());
            },
            fchown(fd, uid, gid, callback) {
              callback(enosys());
            },
            fstat(fd, callback) {
              callback(enosys());
            },
            fsync(fd, callback) {
              callback(null);
            },
            ftruncate(fd, length, callback) {
              callback(enosys());
            },
            lchown(path, uid, gid, callback) {
              callback(enosys());
            },
            link(path, link, callback) {
              callback(enosys());
            },
            lstat(path, callback) {
              callback(enosys());
            },
            mkdir(path, perm, callback) {
              callback(enosys());
            },
            open(path, flags, mode, callback) {
              callback(enosys());
            },
            read(fd, buffer, offset, length, position, callback) {
              callback(enosys());
            },
            readdir(path, callback) {
              callback(enosys());
            },
            readlink(path, callback) {
              callback(enosys());
            },
            rename(from, to, callback) {
              callback(enosys());
            },
            rmdir(path, callback) {
              callback(enosys());
            },
            stat(path, callback) {
              callback(enosys());
            },
            symlink(path, link, callback) {
              callback(enosys());
            },
            truncate(path, length, callback) {
              callback(enosys());
            },
            unlink(path, callback) {
              callback(enosys());
            },
            utimes(path, atime, mtime, callback) {
              callback(enosys());
            }
          };
        }
        if (!globalThis.process) {
          globalThis.process = {
            getuid() {
              return -1;
            },
            getgid() {
              return -1;
            },
            geteuid() {
              return -1;
            },
            getegid() {
              return -1;
            },
            getgroups() {
              throw enosys();
            },
            pid: -1,
            ppid: -1,
            umask() {
              throw enosys();
            },
            cwd() {
              throw enosys();
            },
            chdir() {
              throw enosys();
            }
          };
        }
        if (!globalThis.crypto) {
          throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
        }
        if (!globalThis.performance) {
          throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
        }
        if (!globalThis.TextEncoder) {
          throw new Error("globalThis.TextEncoder is not available, polyfill required");
        }
        if (!globalThis.TextDecoder) {
          throw new Error("globalThis.TextDecoder is not available, polyfill required");
        }
        const encoder = new TextEncoder("utf-8");
        const decoder = new TextDecoder("utf-8");
        globalThis.Go = class {
          constructor() {
            this.argv = ["js"];
            this.env = {};
            this.exit = (code) => {
              if (code !== 0) {
                console.warn("exit code:", code);
              }
            };
            this._exitPromise = new Promise((resolve) => {
              this._resolveExitPromise = resolve;
            });
            this._pendingEvent = null;
            this._scheduledTimeouts = /* @__PURE__ */ new Map();
            this._nextCallbackTimeoutID = 1;
            const setInt64 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
              this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
            };
            const getInt64 = (addr) => {
              const low = this.mem.getUint32(addr + 0, true);
              const high = this.mem.getInt32(addr + 4, true);
              return low + high * 4294967296;
            };
            const loadValue = (addr) => {
              const f = this.mem.getFloat64(addr, true);
              if (f === 0) {
                return void 0;
              }
              if (!isNaN(f)) {
                return f;
              }
              const id = this.mem.getUint32(addr, true);
              return this._values[id];
            };
            const storeValue = (addr, v) => {
              const nanHead = 2146959360;
              if (typeof v === "number" && v !== 0) {
                if (isNaN(v)) {
                  this.mem.setUint32(addr + 4, nanHead, true);
                  this.mem.setUint32(addr, 0, true);
                  return;
                }
                this.mem.setFloat64(addr, v, true);
                return;
              }
              if (v === void 0) {
                this.mem.setFloat64(addr, 0, true);
                return;
              }
              let id = this._ids.get(v);
              if (id === void 0) {
                id = this._idPool.pop();
                if (id === void 0) {
                  id = this._values.length;
                }
                this._values[id] = v;
                this._goRefCounts[id] = 0;
                this._ids.set(v, id);
              }
              this._goRefCounts[id]++;
              let typeFlag = 0;
              switch (typeof v) {
                case "object":
                  if (v !== null) {
                    typeFlag = 1;
                  }
                  break;
                case "string":
                  typeFlag = 2;
                  break;
                case "symbol":
                  typeFlag = 3;
                  break;
                case "function":
                  typeFlag = 4;
                  break;
              }
              this.mem.setUint32(addr + 4, nanHead | typeFlag, true);
              this.mem.setUint32(addr, id, true);
            };
            const loadSlice = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return new Uint8Array(this._inst.exports.mem.buffer, array, len);
            };
            const loadSliceOfValues = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              const a = new Array(len);
              for (let i = 0; i < len; i++) {
                a[i] = loadValue(array + i * 8);
              }
              return a;
            };
            const loadString = (addr) => {
              const saddr = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));
            };
            const timeOrigin = Date.now() - performance.now();
            this.importObject = {
              go: {
                // Go's SP does not change as long as no Go code is running. Some operations (e.g. calls, getters and setters)
                // may synchronously trigger a Go event handler. This makes Go code get executed in the middle of the imported
                // function. A goroutine can switch to a new stack if the current stack is too small (see morestack function).
                // This changes the SP, thus we have to update the SP used by the imported function.
                // func wasmExit(code int32)
                "runtime.wasmExit": (sp) => {
                  sp >>>= 0;
                  const code = this.mem.getInt32(sp + 8, true);
                  this.exited = true;
                  delete this._inst;
                  delete this._values;
                  delete this._goRefCounts;
                  delete this._ids;
                  delete this._idPool;
                  this.exit(code);
                },
                // func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)
                "runtime.wasmWrite": (sp) => {
                  sp >>>= 0;
                  const fd = getInt64(sp + 8);
                  const p = getInt64(sp + 16);
                  const n = this.mem.getInt32(sp + 24, true);
                  globalThis.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));
                },
                // func resetMemoryDataView()
                "runtime.resetMemoryDataView": (sp) => {
                  sp >>>= 0;
                  this.mem = new DataView(this._inst.exports.mem.buffer);
                },
                // func nanotime1() int64
                "runtime.nanotime1": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);
                },
                // func walltime() (sec int64, nsec int32)
                "runtime.walltime": (sp) => {
                  sp >>>= 0;
                  const msec = (/* @__PURE__ */ new Date()).getTime();
                  setInt64(sp + 8, msec / 1e3);
                  this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);
                },
                // func scheduleTimeoutEvent(delay int64) int32
                "runtime.scheduleTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this._nextCallbackTimeoutID;
                  this._nextCallbackTimeoutID++;
                  this._scheduledTimeouts.set(id, setTimeout(
                    () => {
                      this._resume();
                      while (this._scheduledTimeouts.has(id)) {
                        console.warn("scheduleTimeoutEvent: missed timeout event");
                        this._resume();
                      }
                    },
                    getInt64(sp + 8) + 1
                    // setTimeout has been seen to fire up to 1 millisecond early
                  ));
                  this.mem.setInt32(sp + 16, id, true);
                },
                // func clearTimeoutEvent(id int32)
                "runtime.clearTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getInt32(sp + 8, true);
                  clearTimeout(this._scheduledTimeouts.get(id));
                  this._scheduledTimeouts.delete(id);
                },
                // func getRandomData(r []byte)
                "runtime.getRandomData": (sp) => {
                  sp >>>= 0;
                  crypto.getRandomValues(loadSlice(sp + 8));
                },
                // func finalizeRef(v ref)
                "syscall/js.finalizeRef": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getUint32(sp + 8, true);
                  this._goRefCounts[id]--;
                  if (this._goRefCounts[id] === 0) {
                    const v = this._values[id];
                    this._values[id] = null;
                    this._ids.delete(v);
                    this._idPool.push(id);
                  }
                },
                // func stringVal(value string) ref
                "syscall/js.stringVal": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, loadString(sp + 8));
                },
                // func valueGet(v ref, p string) ref
                "syscall/js.valueGet": (sp) => {
                  sp >>>= 0;
                  const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));
                  sp = this._inst.exports.getsp() >>> 0;
                  storeValue(sp + 32, result);
                },
                // func valueSet(v ref, p string, x ref)
                "syscall/js.valueSet": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));
                },
                // func valueDelete(v ref, p string)
                "syscall/js.valueDelete": (sp) => {
                  sp >>>= 0;
                  Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));
                },
                // func valueIndex(v ref, i int) ref
                "syscall/js.valueIndex": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));
                },
                // valueSetIndex(v ref, i int, x ref)
                "syscall/js.valueSetIndex": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));
                },
                // func valueCall(v ref, m string, args []ref) (ref, bool)
                "syscall/js.valueCall": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const m = Reflect.get(v, loadString(sp + 16));
                    const args = loadSliceOfValues(sp + 32);
                    const result = Reflect.apply(m, v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, result);
                    this.mem.setUint8(sp + 64, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, err);
                    this.mem.setUint8(sp + 64, 0);
                  }
                },
                // func valueInvoke(v ref, args []ref) (ref, bool)
                "syscall/js.valueInvoke": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.apply(v, void 0, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueNew(v ref, args []ref) (ref, bool)
                "syscall/js.valueNew": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.construct(v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueLength(v ref) int
                "syscall/js.valueLength": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 16, parseInt(loadValue(sp + 8).length));
                },
                // valuePrepareString(v ref) (ref, int)
                "syscall/js.valuePrepareString": (sp) => {
                  sp >>>= 0;
                  const str = encoder.encode(String(loadValue(sp + 8)));
                  storeValue(sp + 16, str);
                  setInt64(sp + 24, str.length);
                },
                // valueLoadString(v ref, b []byte)
                "syscall/js.valueLoadString": (sp) => {
                  sp >>>= 0;
                  const str = loadValue(sp + 8);
                  loadSlice(sp + 16).set(str);
                },
                // func valueInstanceOf(v ref, t ref) bool
                "syscall/js.valueInstanceOf": (sp) => {
                  sp >>>= 0;
                  this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);
                },
                // func copyBytesToGo(dst []byte, src ref) (int, bool)
                "syscall/js.copyBytesToGo": (sp) => {
                  sp >>>= 0;
                  const dst = loadSlice(sp + 8);
                  const src = loadValue(sp + 32);
                  if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                // func copyBytesToJS(dst ref, src []byte) (int, bool)
                "syscall/js.copyBytesToJS": (sp) => {
                  sp >>>= 0;
                  const dst = loadValue(sp + 8);
                  const src = loadSlice(sp + 16);
                  if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                "debug": (value) => {
                  console.log(value);
                }
              }
            };
          }
          run(instance) {
            return __async(this, null, function* () {
              if (!(instance instanceof WebAssembly.Instance)) {
                throw new Error("Go.run: WebAssembly.Instance expected");
              }
              this._inst = instance;
              this.mem = new DataView(this._inst.exports.mem.buffer);
              this._values = [
                // JS values that Go currently has references to, indexed by reference id
                NaN,
                0,
                null,
                true,
                false,
                globalThis,
                this
              ];
              this._goRefCounts = new Array(this._values.length).fill(Infinity);
              this._ids = /* @__PURE__ */ new Map([
                // mapping from JS values to reference ids
                [0, 1],
                [null, 2],
                [true, 3],
                [false, 4],
                [globalThis, 5],
                [this, 6]
              ]);
              this._idPool = [];
              this.exited = false;
              let offset = 4096;
              const strPtr = (str) => {
                const ptr = offset;
                const bytes = encoder.encode(str + "\\0");
                new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);
                offset += bytes.length;
                if (offset % 8 !== 0) {
                  offset += 8 - offset % 8;
                }
                return ptr;
              };
              const argc = this.argv.length;
              const argvPtrs = [];
              this.argv.forEach((arg) => {
                argvPtrs.push(strPtr(arg));
              });
              argvPtrs.push(0);
              const keys = Object.keys(this.env).sort();
              keys.forEach((key) => {
                argvPtrs.push(strPtr(\`\${key}=\${this.env[key]}\`));
              });
              argvPtrs.push(0);
              const argv = offset;
              argvPtrs.forEach((ptr) => {
                this.mem.setUint32(offset, ptr, true);
                this.mem.setUint32(offset + 4, 0, true);
                offset += 8;
              });
              const wasmMinDataAddr = 4096 + 8192;
              if (offset >= wasmMinDataAddr) {
                throw new Error("total length of command line and environment variables exceeds limit");
              }
              this._inst.exports.run(argc, argv);
              if (this.exited) {
                this._resolveExitPromise();
              }
              yield this._exitPromise;
            });
          }
          _resume() {
            if (this.exited) {
              throw new Error("Go program has already exited");
            }
            this._inst.exports.resume();
            if (this.exited) {
              this._resolveExitPromise();
            }
          }
          _makeFuncWrapper(id) {
            const go = this;
            return function() {
              const event = { id, this: this, args: arguments };
              go._pendingEvent = event;
              go._resume();
              return event.result;
            };
          }
        };
      })();
      onmessage = ({ data: wasm }) => {
        let decoder = new TextDecoder();
        let fs = globalThis.fs;
        let stderr = "";
        fs.writeSync = (fd, buffer) => {
          if (fd === 1) {
            postMessage(buffer);
          } else if (fd === 2) {
            stderr += decoder.decode(buffer);
            let parts = stderr.split("\\n");
            if (parts.length > 1)
              console.log(parts.slice(0, -1).join("\\n"));
            stderr = parts[parts.length - 1];
          } else {
            throw new Error("Bad write");
          }
          return buffer.length;
        };
        let stdin = [];
        let resumeStdin;
        let stdinPos = 0;
        onmessage = ({ data }) => {
          if (data.length > 0) {
            stdin.push(data);
            if (resumeStdin)
              resumeStdin();
          }
        };
        fs.read = (fd, buffer, offset, length, position, callback) => {
          if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {
            throw new Error("Bad read");
          }
          if (stdin.length === 0) {
            resumeStdin = () => fs.read(fd, buffer, offset, length, position, callback);
            return;
          }
          let first = stdin[0];
          let count = Math.max(0, Math.min(length, first.length - stdinPos));
          buffer.set(first.subarray(stdinPos, stdinPos + count), offset);
          stdinPos += count;
          if (stdinPos === first.length) {
            stdin.shift();
            stdinPos = 0;
          }
          callback(null, count);
        };
        let go = new globalThis.Go();
        go.argv = ["", \`--service=\${"0.18.7"}\`];
        tryToInstantiateModule(wasm, go).then(
          (instance) => {
            postMessage(null);
            go.run(instance);
          },
          (error) => {
            postMessage(error);
          }
        );
      };
      function tryToInstantiateModule(wasm, go) {
        return __async(this, null, function* () {
          if (wasm instanceof WebAssembly.Module) {
            return WebAssembly.instantiate(wasm, go.importObject);
          }
          const res = yield fetch(wasm);
          if (!res.ok)
            throw new Error(\`Failed to download \${JSON.stringify(wasm)}\`);
          if ("instantiateStreaming" in WebAssembly && /^application\\/wasm($|;)/i.test(res.headers.get("Content-Type") || "")) {
            const result2 = yield WebAssembly.instantiateStreaming(res, go.importObject);
            return result2.instance;
          }
          const bytes = yield res.arrayBuffer();
          const result = yield WebAssembly.instantiate(bytes, go.importObject);
          return result.instance;
        });
      }
      return (m) => onmessage(m);
    })(postMessage)`],{type:"text/javascript"});k=new Worker(URL.createObjectURL(L))}else{let L=(W=>{var Q=(B,q,te)=>new Promise((J,b)=>{var g=P=>{try{y(te.next(P))}catch(R){b(R)}},v=P=>{try{y(te.throw(P))}catch(R){b(R)}},y=P=>P.done?J(P.value):Promise.resolve(P.value).then(g,v);y((te=te.apply(B,q)).next())});let se,G={};for(let B=self;B;B=Object.getPrototypeOf(B))for(let q of Object.getOwnPropertyNames(B))q in G||Object.defineProperty(G,q,{get:()=>self[q]});(()=>{const B=()=>{const J=new Error("not implemented");return J.code="ENOSYS",J};if(!G.fs){let J="";G.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(b,g){J+=te.decode(g);const v=J.lastIndexOf(`
`);return v!=-1&&(console.log(J.substring(0,v)),J=J.substring(v+1)),g.length},write(b,g,v,y,P,R){if(v!==0||y!==g.length||P!==null){R(B());return}const z=this.writeSync(b,g);R(null,z)},chmod(b,g,v){v(B())},chown(b,g,v,y){y(B())},close(b,g){g(B())},fchmod(b,g,v){v(B())},fchown(b,g,v,y){y(B())},fstat(b,g){g(B())},fsync(b,g){g(null)},ftruncate(b,g,v){v(B())},lchown(b,g,v,y){y(B())},link(b,g,v){v(B())},lstat(b,g){g(B())},mkdir(b,g,v){v(B())},open(b,g,v,y){y(B())},read(b,g,v,y,P,R){R(B())},readdir(b,g){g(B())},readlink(b,g){g(B())},rename(b,g,v){v(B())},rmdir(b,g){g(B())},stat(b,g){g(B())},symlink(b,g,v){v(B())},truncate(b,g,v){v(B())},unlink(b,g){g(B())},utimes(b,g,v,y){y(B())}}}if(G.process||(G.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw B()},pid:-1,ppid:-1,umask(){throw B()},cwd(){throw B()},chdir(){throw B()}}),!G.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!G.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!G.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!G.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const q=new TextEncoder("utf-8"),te=new TextDecoder("utf-8");G.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=r=>{r!==0&&console.warn("exit code:",r)},this._exitPromise=new Promise(r=>{this._resolveExitPromise=r}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const J=(r,a)=>{this.mem.setUint32(r+0,a,!0),this.mem.setUint32(r+4,Math.floor(a/4294967296),!0)},b=r=>{const a=this.mem.getUint32(r+0,!0),w=this.mem.getInt32(r+4,!0);return a+w*4294967296},g=r=>{const a=this.mem.getFloat64(r,!0);if(a===0)return;if(!isNaN(a))return a;const w=this.mem.getUint32(r,!0);return this._values[w]},v=(r,a)=>{if(typeof a=="number"&&a!==0){if(isNaN(a)){this.mem.setUint32(r+4,2146959360,!0),this.mem.setUint32(r,0,!0);return}this.mem.setFloat64(r,a,!0);return}if(a===void 0){this.mem.setFloat64(r,0,!0);return}let C=this._ids.get(a);C===void 0&&(C=this._idPool.pop(),C===void 0&&(C=this._values.length),this._values[C]=a,this._goRefCounts[C]=0,this._ids.set(a,C)),this._goRefCounts[C]++;let I=0;switch(typeof a){case"object":a!==null&&(I=1);break;case"string":I=2;break;case"symbol":I=3;break;case"function":I=4;break}this.mem.setUint32(r+4,2146959360|I,!0),this.mem.setUint32(r,C,!0)},y=r=>{const a=b(r+0),w=b(r+8);return new Uint8Array(this._inst.exports.mem.buffer,a,w)},P=r=>{const a=b(r+0),w=b(r+8),C=new Array(w);for(let I=0;I<w;I++)C[I]=g(a+I*8);return C},R=r=>{const a=b(r+0),w=b(r+8);return te.decode(new DataView(this._inst.exports.mem.buffer,a,w))},z=Date.now()-performance.now();this.importObject={go:{"runtime.wasmExit":r=>{r>>>=0;const a=this.mem.getInt32(r+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(a)},"runtime.wasmWrite":r=>{r>>>=0;const a=b(r+8),w=b(r+16),C=this.mem.getInt32(r+24,!0);G.fs.writeSync(a,new Uint8Array(this._inst.exports.mem.buffer,w,C))},"runtime.resetMemoryDataView":r=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":r=>{r>>>=0,J(r+8,(z+performance.now())*1e6)},"runtime.walltime":r=>{r>>>=0;const a=new Date().getTime();J(r+8,a/1e3),this.mem.setInt32(r+16,a%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":r=>{r>>>=0;const a=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(a,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(a);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},b(r+8)+1)),this.mem.setInt32(r+16,a,!0)},"runtime.clearTimeoutEvent":r=>{r>>>=0;const a=this.mem.getInt32(r+8,!0);clearTimeout(this._scheduledTimeouts.get(a)),this._scheduledTimeouts.delete(a)},"runtime.getRandomData":r=>{r>>>=0,crypto.getRandomValues(y(r+8))},"syscall/js.finalizeRef":r=>{r>>>=0;const a=this.mem.getUint32(r+8,!0);if(this._goRefCounts[a]--,this._goRefCounts[a]===0){const w=this._values[a];this._values[a]=null,this._ids.delete(w),this._idPool.push(a)}},"syscall/js.stringVal":r=>{r>>>=0,v(r+24,R(r+8))},"syscall/js.valueGet":r=>{r>>>=0;const a=Reflect.get(g(r+8),R(r+16));r=this._inst.exports.getsp()>>>0,v(r+32,a)},"syscall/js.valueSet":r=>{r>>>=0,Reflect.set(g(r+8),R(r+16),g(r+32))},"syscall/js.valueDelete":r=>{r>>>=0,Reflect.deleteProperty(g(r+8),R(r+16))},"syscall/js.valueIndex":r=>{r>>>=0,v(r+24,Reflect.get(g(r+8),b(r+16)))},"syscall/js.valueSetIndex":r=>{r>>>=0,Reflect.set(g(r+8),b(r+16),g(r+24))},"syscall/js.valueCall":r=>{r>>>=0;try{const a=g(r+8),w=Reflect.get(a,R(r+16)),C=P(r+32),I=Reflect.apply(w,a,C);r=this._inst.exports.getsp()>>>0,v(r+56,I),this.mem.setUint8(r+64,1)}catch(a){r=this._inst.exports.getsp()>>>0,v(r+56,a),this.mem.setUint8(r+64,0)}},"syscall/js.valueInvoke":r=>{r>>>=0;try{const a=g(r+8),w=P(r+16),C=Reflect.apply(a,void 0,w);r=this._inst.exports.getsp()>>>0,v(r+40,C),this.mem.setUint8(r+48,1)}catch(a){r=this._inst.exports.getsp()>>>0,v(r+40,a),this.mem.setUint8(r+48,0)}},"syscall/js.valueNew":r=>{r>>>=0;try{const a=g(r+8),w=P(r+16),C=Reflect.construct(a,w);r=this._inst.exports.getsp()>>>0,v(r+40,C),this.mem.setUint8(r+48,1)}catch(a){r=this._inst.exports.getsp()>>>0,v(r+40,a),this.mem.setUint8(r+48,0)}},"syscall/js.valueLength":r=>{r>>>=0,J(r+16,parseInt(g(r+8).length))},"syscall/js.valuePrepareString":r=>{r>>>=0;const a=q.encode(String(g(r+8)));v(r+16,a),J(r+24,a.length)},"syscall/js.valueLoadString":r=>{r>>>=0;const a=g(r+8);y(r+16).set(a)},"syscall/js.valueInstanceOf":r=>{r>>>=0,this.mem.setUint8(r+24,g(r+8)instanceof g(r+16)?1:0)},"syscall/js.copyBytesToGo":r=>{r>>>=0;const a=y(r+8),w=g(r+32);if(!(w instanceof Uint8Array||w instanceof Uint8ClampedArray)){this.mem.setUint8(r+48,0);return}const C=w.subarray(0,a.length);a.set(C),J(r+40,C.length),this.mem.setUint8(r+48,1)},"syscall/js.copyBytesToJS":r=>{r>>>=0;const a=g(r+8),w=y(r+16);if(!(a instanceof Uint8Array||a instanceof Uint8ClampedArray)){this.mem.setUint8(r+48,0);return}const C=w.subarray(0,a.length);a.set(C),J(r+40,C.length),this.mem.setUint8(r+48,1)},debug:r=>{console.log(r)}}}}run(J){return Q(this,null,function*(){if(!(J instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=J,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,G,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[G,5],[this,6]]),this._idPool=[],this.exited=!1;let b=4096;const g=r=>{const a=b,w=q.encode(r+"\0");return new Uint8Array(this.mem.buffer,b,w.length).set(w),b+=w.length,b%8!==0&&(b+=8-b%8),a},v=this.argv.length,y=[];this.argv.forEach(r=>{y.push(g(r))}),y.push(0),Object.keys(this.env).sort().forEach(r=>{y.push(g(`${r}=${this.env[r]}`))}),y.push(0);const R=b;if(y.forEach(r=>{this.mem.setUint32(b,r,!0),this.mem.setUint32(b+4,0,!0),b+=8}),b>=12288)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(v,R),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(J){const b=this;return function(){const g={id:J,this:this,args:arguments};return b._pendingEvent=g,b._resume(),g.result}}}})(),se=({data:B})=>{let q=new TextDecoder,te=G.fs,J="";te.writeSync=(P,R)=>{if(P===1)W(R);else if(P===2){J+=q.decode(R);let z=J.split(`
`);z.length>1&&console.log(z.slice(0,-1).join(`
`)),J=z[z.length-1]}else throw new Error("Bad write");return R.length};let b=[],g,v=0;se=({data:P})=>{P.length>0&&(b.push(P),g&&g())},te.read=(P,R,z,r,a,w)=>{if(P!==0||z!==0||r!==R.length||a!==null)throw new Error("Bad read");if(b.length===0){g=()=>te.read(P,R,z,r,a,w);return}let C=b[0],I=Math.max(0,Math.min(r,C.length-v));R.set(C.subarray(v,v+I),z),v+=I,v===C.length&&(b.shift(),v=0),w(null,I)};let y=new G.Go;y.argv=["","--service=0.18.7"],le(B,y).then(P=>{W(null),y.run(P)},P=>{W(P)})};function le(B,q){return Q(this,null,function*(){if(B instanceof WebAssembly.Module)return WebAssembly.instantiate(B,q.importObject);const te=yield fetch(B);if(!te.ok)throw new Error(`Failed to download ${JSON.stringify(B)}`);if("instantiateStreaming"in WebAssembly&&/^application\/wasm($|;)/i.test(te.headers.get("Content-Type")||""))return(yield WebAssembly.instantiateStreaming(te,q.importObject)).instance;const J=yield te.arrayBuffer();return(yield WebAssembly.instantiate(J,q.importObject)).instance})}return B=>se(B)})(W=>k.onmessage({data:W}));k={onmessage:null,postMessage:W=>setTimeout(()=>L({data:W})),terminate(){}}}let _,$;const x=new Promise((L,W)=>{_=L,$=W});k.onmessage=({data:L})=>{k.onmessage=({data:W})=>F(W),L?$(L):_()},k.postMessage(i||new URL(n,location.href).toString());let{readFromStdout:F,service:j}=qt({writeToStdin(L){k.postMessage(L)},isSync:!1,hasFS:!1,esbuild:T});yield x,ot={build:L=>new Promise((W,Q)=>j.buildOrContext({callName:"build",refs:null,options:L,isTTY:!1,defaultWD:"/",callback:(se,G)=>se?Q(se):W(G)})),context:L=>new Promise((W,Q)=>j.buildOrContext({callName:"context",refs:null,options:L,isTTY:!1,defaultWD:"/",callback:(se,G)=>se?Q(se):W(G)})),transform:(L,W)=>new Promise((Q,se)=>j.transform({callName:"transform",refs:null,input:L,options:W||{},isTTY:!1,fs:{readFile(G,le){le(new Error("Internal error"),null)},writeFile(G,le){le(null)}},callback:(G,le)=>G?se(G):Q(le)})),formatMessages:(L,W)=>new Promise((Q,se)=>j.formatMessages({callName:"formatMessages",refs:null,messages:L,options:W,callback:(G,le)=>G?se(G):Q(le)})),analyzeMetafile:(L,W)=>new Promise((Q,se)=>j.analyzeMetafile({callName:"analyzeMetafile",refs:null,metafile:typeof L=="string"?L:JSON.stringify(L),options:W,callback:(G,le)=>G?se(G):Q(le)}))}}),cn=T})(l)})(Bt);var Mt=Bt.exports;function Pe(l){if(typeof l!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(l))}function jt(l,t){for(var e="",s=0,f=-1,p=0,m,d=0;d<=l.length;++d){if(d<l.length)m=l.charCodeAt(d);else{if(m===47)break;m=47}if(m===47){if(!(f===d-1||p===1))if(f!==d-1&&p===2){if(e.length<2||s!==2||e.charCodeAt(e.length-1)!==46||e.charCodeAt(e.length-2)!==46){if(e.length>2){var u=e.lastIndexOf("/");if(u!==e.length-1){u===-1?(e="",s=0):(e=e.slice(0,u),s=e.length-1-e.lastIndexOf("/")),f=d,p=0;continue}}else if(e.length===2||e.length===1){e="",s=0,f=d,p=0;continue}}t&&(e.length>0?e+="/..":e="..",s=2)}else e.length>0?e+="/"+l.slice(f+1,d):e=l.slice(f+1,d),s=d-f-1;f=d,p=0}else m===46&&p!==-1?++p:p=-1}return e}function $r(l,t){var e=t.dir||t.root,s=t.base||(t.name||"")+(t.ext||"");return e?e===t.root?e+s:e+l+s:s}var Le={resolve:function(){for(var t="",e=!1,s,f=arguments.length-1;f>=-1&&!e;f--){var p;f>=0?p=arguments[f]:(s===void 0&&(s=process.cwd()),p=s),Pe(p),p.length!==0&&(t=p+"/"+t,e=p.charCodeAt(0)===47)}return t=jt(t,!e),e?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(t){if(Pe(t),t.length===0)return".";var e=t.charCodeAt(0)===47,s=t.charCodeAt(t.length-1)===47;return t=jt(t,!e),t.length===0&&!e&&(t="."),t.length>0&&s&&(t+="/"),e?"/"+t:t},isAbsolute:function(t){return Pe(t),t.length>0&&t.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var t,e=0;e<arguments.length;++e){var s=arguments[e];Pe(s),s.length>0&&(t===void 0?t=s:t+="/"+s)}return t===void 0?".":Le.normalize(t)},relative:function(t,e){if(Pe(t),Pe(e),t===e||(t=Le.resolve(t),e=Le.resolve(e),t===e))return"";for(var s=1;s<t.length&&t.charCodeAt(s)===47;++s);for(var f=t.length,p=f-s,m=1;m<e.length&&e.charCodeAt(m)===47;++m);for(var d=e.length,u=d-m,S=p<u?p:u,T=-1,E=0;E<=S;++E){if(E===S){if(u>S){if(e.charCodeAt(m+E)===47)return e.slice(m+E+1);if(E===0)return e.slice(m+E)}else p>S&&(t.charCodeAt(s+E)===47?T=E:E===0&&(T=0));break}var U=t.charCodeAt(s+E),A=e.charCodeAt(m+E);if(U!==A)break;U===47&&(T=E)}var V="";for(E=s+T+1;E<=f;++E)(E===f||t.charCodeAt(E)===47)&&(V.length===0?V+="..":V+="/..");return V.length>0?V+e.slice(m+T):(m+=T,e.charCodeAt(m)===47&&++m,e.slice(m))},_makeLong:function(t){return t},dirname:function(t){if(Pe(t),t.length===0)return".";for(var e=t.charCodeAt(0),s=e===47,f=-1,p=!0,m=t.length-1;m>=1;--m)if(e=t.charCodeAt(m),e===47){if(!p){f=m;break}}else p=!1;return f===-1?s?"/":".":s&&f===1?"//":t.slice(0,f)},basename:function(t,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');Pe(t);var s=0,f=-1,p=!0,m;if(e!==void 0&&e.length>0&&e.length<=t.length){if(e.length===t.length&&e===t)return"";var d=e.length-1,u=-1;for(m=t.length-1;m>=0;--m){var S=t.charCodeAt(m);if(S===47){if(!p){s=m+1;break}}else u===-1&&(p=!1,u=m+1),d>=0&&(S===e.charCodeAt(d)?--d===-1&&(f=m):(d=-1,f=u))}return s===f?f=u:f===-1&&(f=t.length),t.slice(s,f)}else{for(m=t.length-1;m>=0;--m)if(t.charCodeAt(m)===47){if(!p){s=m+1;break}}else f===-1&&(p=!1,f=m+1);return f===-1?"":t.slice(s,f)}},extname:function(t){Pe(t);for(var e=-1,s=0,f=-1,p=!0,m=0,d=t.length-1;d>=0;--d){var u=t.charCodeAt(d);if(u===47){if(!p){s=d+1;break}continue}f===-1&&(p=!1,f=d+1),u===46?e===-1?e=d:m!==1&&(m=1):e!==-1&&(m=-1)}return e===-1||f===-1||m===0||m===1&&e===f-1&&e===s+1?"":t.slice(e,f)},format:function(t){if(t===null||typeof t!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return $r("/",t)},parse:function(t){Pe(t);var e={root:"",dir:"",base:"",ext:"",name:""};if(t.length===0)return e;var s=t.charCodeAt(0),f=s===47,p;f?(e.root="/",p=1):p=0;for(var m=-1,d=0,u=-1,S=!0,T=t.length-1,E=0;T>=p;--T){if(s=t.charCodeAt(T),s===47){if(!S){d=T+1;break}continue}u===-1&&(S=!1,u=T+1),s===46?m===-1?m=T:E!==1&&(E=1):m!==-1&&(E=-1)}return m===-1||u===-1||E===0||E===1&&m===u-1&&m===d+1?u!==-1&&(d===0&&f?e.base=e.name=t.slice(1,u):e.base=e.name=t.slice(d,u)):(d===0&&f?(e.name=t.slice(1,m),e.base=t.slice(1,u)):(e.name=t.slice(d,m),e.base=t.slice(d,u)),e.ext=t.slice(m,u)),d>0?e.dir=t.slice(0,d-1):f&&(e.dir="/"),e},sep:"/",delimiter:":",win32:null,posix:null};Le.posix=Le;var Rr=Le;const Et=En(Rr);let nt=!1,ct=null;const je={},Vt=async()=>(ct||(ct=Mt.initialize({wasmURL:"https://unpkg.com/esbuild-wasm@0.18.7/esbuild.wasm"}).then(()=>(nt=!0,console.log("ESBuild initialized successfully"),nt)).catch(l=>{if(l instanceof Error&&l.message.includes("initialize")&&l.message.includes("once"))return console.warn("ESBuild initialize called multiple times; suppressing error"),nt=!0,nt;throw console.error("Failed to initialize ESBuild:",l),l})),ct),Nr=async({entryPoint:l,content:t,options:e})=>{await Vt(),console.warn("We should remove loadReactModules() from here");try{je[l]={contents:t,loader:l.endsWith(".jsx")||l.endsWith(".tsx")?"jsx":l.endsWith(".css")?"css":"js"};const s={name:"css-inject",setup(m){m.onLoad({filter:/\.css$/,namespace:"virtual-fs"},async d=>{console.log("[css-inject] Handling",d.path,"in namespace",d.namespace);const u=je[d.path];if(!u)throw new Error(`CSS file not found in virtual filesystem: ${d.path}`);const S=u.contents,T=`injected-style-${d.path.replace(/[^a-zA-Z0-9]/g,"-")}`;return{contents:`
              // CSS module: ${d.path}
              (function() {
                if (typeof document !== 'undefined') {
                  const existingStyle = document.getElementById('${T}');
                  if (existingStyle) existingStyle.remove();
                  const style = document.createElement('style');
                  style.id = '${T}';
                  style.textContent = ${JSON.stringify(S)};
                  document.head.appendChild(style);
                }
              })();
              export default {};
            `,loader:"js"}})}},f={name:"virtual-file-system",setup(m){m.onResolve({filter:new RegExp(`^${l}$`)},d=>({path:d.path,namespace:"virtual-fs"})),m.onResolve({filter:/^\.+\//,namespace:"virtual-fs"},d=>{const u=Et.posix.join(Et.posix.dirname(d.importer),d.path);return console.log(`Resolved ${d.path} from ${d.importer} to ${u}`),u.endsWith(".css")||je[u]?{path:u,namespace:"virtual-fs"}:{path:`https://unpkg.com/${u}`,namespace:"http-url"}}),m.onResolve({filter:/^[^./].*/,namespace:"virtual-fs"},d=>{const u=d.path;if(console.log(`Resolving bare import: ${u}`),u==="react"){const E="node_modules/react/index.js";if(je[E])return console.log(`Resolved ${u} to ${E}`),{path:E,namespace:"virtual-fs"}}if(u==="react-dom/client"){const E="node_modules/react-dom/client.js";if(je[E])return console.log(`Resolved ${u} to ${E}`),{path:E,namespace:"virtual-fs"}}if(u==="react-dom"){const E="node_modules/react-dom/index.js";if(je[E])return console.log(`Resolved ${u} to ${E}`),{path:E,namespace:"virtual-fs"}}const S=`node_modules/${u}.js`;if(je[S])return console.log(`Resolved ${u} to ${S}`),{path:S,namespace:"virtual-fs"};const T=`node_modules/${u}/index.js`;return je[T]?(console.log(`Resolved ${u} to ${T}`),{path:T,namespace:"virtual-fs"}):(console.log(`Falling back to CDN for ${u}`),{path:`https://unpkg.com/${u}`,namespace:"http-url"})}),m.onResolve({filter:/.*/,namespace:"virtual-fs"},d=>{if(d.path.startsWith(".")||d.namespace!=="virtual-fs")return;const u=d.path;if(console.log(`Resolving internal module: ${u} from ${d.importer}`),u==="react"||u==="react-dom"||u==="scheduler"){const S=`node_modules/${u}/index.js`;if(je[S])return console.log(`Resolved internal ${u} to ${S}`),{path:S,namespace:"virtual-fs"}}if(d.path.startsWith("./")&&d.importer.includes("node_modules")){const T=`${d.importer.replace(/\/[^/]+$/,"")}/${d.path.substring(2)}`;if(je[T])return console.log(`Resolved relative ${d.path} to ${T}`),{path:T,namespace:"virtual-fs"}}}),m.onResolve({filter:/.*/,namespace:"http-url"},d=>{if(!d.path.startsWith(".")&&!d.path.startsWith("/"))return{path:`https://unpkg.com/${d.path}`,namespace:"http-url"};const u=d.importer.endsWith("/")?d.importer:`${d.importer}/`;return{path:new URL(d.path,u).href,namespace:"http-url"}}),m.onLoad({filter:/.*/,namespace:"virtual-fs"},async d=>{if(je[d.path])return{contents:je[d.path].contents,loader:je[d.path].loader};if(d.path===l)return{contents:t,loader:l.endsWith(".jsx")||l.endsWith(".tsx")?"jsx":l.endsWith(".css")?"css":"js"};throw d.path.endsWith(".css")?new Error(`CSS file not found: ${d.path}. Make sure to add it to the virtual filesystem.`):new Error(`File not found in virtual filesystem: ${d.path}`)}),m.onLoad({filter:/.*/,namespace:"http-url"},async d=>{const S=await(await fetch(d.path)).text();let T="js";return d.path.match(/\.(jsx|tsx)$/)?T="jsx":d.path.endsWith(".css")?T="css":d.path.endsWith(".json")?T="json":d.path.endsWith(".txt")&&(T="text"),{contents:S,loader:T,resolveDir:d.path.replace(/\/[^/]+$/,"/")}})}},p=await Mt.build({entryPoints:[l],bundle:e.bundle!==void 0?e.bundle:!0,minify:e.minify!==void 0?e.minify:!1,format:e.format||"iife",target:e.target||"es2015",jsxFactory:e.jsxFactory||"React.createElement",jsxFragment:e.jsxFragment||"React.Fragment",external:e.external||[],write:!1,plugins:[s,f],define:{"process.env.NODE_ENV":'"development"'}});return{code:p.outputFiles?p.outputFiles[0].text:"",error:null}}catch(s){return console.error("Build failed:",s),{code:"",error:s instanceof Error?s.message:String(s)}}},Lt=(l,t)=>{let e="js";l.match(/\.(jsx|tsx)$/)?e="jsx":l.endsWith(".css")?e="css":l.endsWith(".json")?e="json":l.endsWith(".txt")&&(e="text"),je[l]={contents:t,loader:e}},Dr=async()=>{try{const l="/portfolio/shadow/node_modules/",t=["react/index.js","react/cjs/react.development.js","react/cjs/react.production.min.js","react-dom/index.js","react-dom/client.js","react-dom/cjs/react-dom.development.js","react-dom/cjs/react-dom.production.min.js","react-dom/cjs/react-dom-client.development.js","react-dom/cjs/react-dom-client.production.min.js","scheduler/index.js","scheduler/cjs/scheduler.development.js","scheduler/cjs/scheduler.production.min.js"];for(const e of t)try{const s=await fetch(`${l}${e}`);if(s.ok){const f=await s.text();Lt(`node_modules/${e}`,f),console.log(`Loaded ${e} into virtual filesystem`)}}catch(s){console.warn(`Failed to load ${e}:`,s)}}catch(l){console.error("Failed to load React modules:",l)}},Ar=l=>{try{const t=l.split(" ");if(t[0]!=="esbuild")return null;const e=t[1],s={bundle:!1,minify:!1,format:"iife",jsxFactory:"React.createElement",jsxFragment:"React.Fragment"};for(let f=2;f<t.length;f++){const p=t[f];if(p==="--bundle")s.bundle=!0;else if(p==="--minify")s.minify=!0;else if(p.startsWith("--format=")){const m=p.split("=")[1];s.format=m}else if(p.startsWith("--target="))s.target=p.split("=")[1];else if(p.startsWith("--jsx-factory="))s.jsxFactory=p.split("=")[1];else if(p.startsWith("--jsx-fragment="))s.jsxFragment=p.split("=")[1];else if(p.startsWith("--external:")){const m=p.split(":")[1].split(",");s.external||(s.external=[]),s.external.push(...m)}}return{entryPoint:e,content:"",options:s}}catch(t){return console.error("Failed to parse esbuild command:",t),null}},Or=Object.freeze(Object.defineProperty({__proto__:null,addToVirtualFs:Lt,buildCode:Nr,initializeEsbuild:Vt,loadReactModules:Dr,parseEsbuildCommand:Ar},Symbol.toStringTag,{value:"Module"}));function Hr(...l){return kn(Tn(l))}export{qr as ActivityBar,zn as CommandPalette,Qn as EditorArea,lr as IdeLayout,Xn as PreviewPanel,er as SideBar,ir as StatusBar,Yr as VirtualFS,Lt as addToVirtualFs,Nr as buildCode,Hr as cn,Wr as default,Vt as initializeEsbuild,Dr as loadReactModules,Ar as parseEsbuildCommand,ve as useIdeStore,Xr as virtualFs};
