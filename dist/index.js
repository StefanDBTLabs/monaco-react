"use strict";var St=Object.create;var W=Object.defineProperty;var ht=Object.getOwnPropertyDescriptor;var Tt=Object.getOwnPropertyNames;var kt=Object.getPrototypeOf,Ot=Object.prototype.hasOwnProperty;var wt=(t,r)=>{for(var e in r)W(t,e,{get:r[e],enumerable:!0})},ot=(t,r,e,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let f of Tt(r))!Ot.call(t,f)&&f!==e&&W(t,f,{get:()=>r[f],enumerable:!(o=ht(r,f))||o.enumerable});return t};var D=(t,r,e)=>(e=t!=null?St(kt(t)):{},ot(r||!t||!t.__esModule?W(e,"default",{value:t,enumerable:!0}):e,t)),It=t=>ot(W({},"__esModule",{value:!0}),t);var At={};wt(At,{DiffEditor:()=>Mt,Editor:()=>tt,default:()=>jt,loader:()=>Dt.default,useMonaco:()=>yt});module.exports=It(At);var Dt=D(require("@monaco-editor/loader"));var mt=require("react");var d=D(require("react")),lt=D(require("@monaco-editor/loader"));var ft=require("react");var N=D(require("react"));var Ut={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},_=Ut;var it=D(require("react"));var Lt={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},nt=Lt;function vt({children:t}){return it.default.createElement("div",{style:nt.container},t)}var ct=vt;var st=ct;function Ht({width:t,height:r,isEditorReady:e,loading:o,_ref:f,className:p,wrapperProps:y}){return N.default.createElement("section",{style:{..._.wrapper,width:t,height:r},...y},!e&&N.default.createElement(st,null,o),N.default.createElement("div",{ref:f,style:{..._.fullWidth,...!e&&_.hide},className:p}))}var ut=Ht;var V=(0,ft.memo)(ut);var dt=require("react");function Pt(t){(0,dt.useEffect)(t,[])}var k=Pt;var z=require("react");function Wt(t,r,e=!0){let o=(0,z.useRef)(!0);(0,z.useEffect)(o.current||!e?()=>{o.current=!1}:t,r)}var E=Wt;function h(){}function b(t,r,e,o){return F(t,o)||_t(t,r,e,o)}function F(t,r){return t.editor.getModel(pt(t,r))}function _t(t,r,e,o){return t.editor.createModel(r,e,o?pt(t,o):void 0)}function pt(t,r){return t.Uri.parse(r)}function Nt({original:t,modified:r,language:e,originalLanguage:o,modifiedLanguage:f,originalModelPath:p,modifiedModelPath:y,keepCurrentOriginalModel:S=!1,keepCurrentModifiedModel:O=!1,theme:C="light",loading:v="Loading...",options:g={},height:q="100%",width:B="100%",className:G,wrapperProps:J={},beforeMount:K=h,onMount:Q=h}){let[x,w]=(0,d.useState)(!1),[I,l]=(0,d.useState)(!0),a=(0,d.useRef)(null),u=(0,d.useRef)(null),U=(0,d.useRef)(null),m=(0,d.useRef)(Q),i=(0,d.useRef)(K),T=(0,d.useRef)(!1);k(()=>{let n=lt.default.init();return n.then(c=>(u.current=c)&&l(!1)).catch(c=>c?.type!=="cancelation"&&console.error("Monaco initialization: error:",c)),()=>a.current?L():n.cancel()}),E(()=>{let n=a.current.getModifiedEditor();if(O&&y){let c=F(u.current,y);c!==n.getModel()&&n.setModel(c)}n.getOption(u.current.editor.EditorOption.readOnly)?n.setValue(r||""):r!==n.getValue()&&(n.executeEdits("",[{range:n.getModel().getFullModelRange(),text:r||"",forceMoveMarkers:!0}]),n.pushUndoStop())},[r,y,O],x),E(()=>{let n=a.current.getOriginalEditor();if(S&&p){let c=F(u.current,p);c!==a.current.getModel()&&n.setModel(c)}n.setValue(t||"")},[t,p,S],x),E(()=>{let{original:n,modified:c}=a.current.getModel();u.current.editor.setModelLanguage(n,o||e||"text"),u.current.editor.setModelLanguage(c,f||e||"text")},[e,o,f],x),E(()=>{u.current?.editor.setTheme(C)},[C],x),E(()=>{a.current?.updateOptions(g)},[g],x);let H=(0,d.useCallback)(()=>{if(!u.current)return;i.current(u.current);let n=b(u.current,t||"",o||e||"text",p||""),c=b(u.current,r||"",f||e||"text",y||"");a.current?.setModel({original:n,modified:c})},[e,r,f,t,o,p,y]),P=(0,d.useCallback)(()=>{!T.current&&U.current&&(a.current=u.current.editor.createDiffEditor(U.current,{automaticLayout:!0,...g}),H(),u.current?.editor.setTheme(C),w(!0),T.current=!0)},[g,C,H]);(0,d.useEffect)(()=>{x&&m.current(a.current,u.current)},[x]),(0,d.useEffect)(()=>{!I&&!x&&P()},[I,x,P]),E(()=>{if(a.current&&u.current){let n=a.current.getOriginalEditor(),c=b(u.current,t||"",o||e||"text",p||"");c!==n.getModel()&&n.setModel(c)}},[p],x),E(()=>{if(a.current&&u.current){let n=a.current.getModifiedEditor(),c=b(u.current,r||"",f||e||"text",y||"");c!==n.getModel()&&n.setModel(c)}},[y],x);function L(){let n=a.current?.getModel();S||n?.original?.dispose(),O||n?.modified?.dispose(),a.current?.dispose()}return d.default.createElement(V,{width:B,height:q,isEditorReady:x,loading:v,_ref:U,className:G,wrapperProps:J})}var at=Nt;var Mt=(0,mt.memo)(at);var Et=require("react"),$=D(require("@monaco-editor/loader"));function Vt(){let[t,r]=(0,Et.useState)($.default.__getMonacoInstance());return k(()=>{let e;return t||(e=$.default.init(),e.then(o=>{r(o)})),()=>e?.cancel()}),t}var yt=Vt;var Rt=require("react");var s=D(require("react")),gt=D(require("@monaco-editor/loader"));var j=require("react");function zt(t){let r=(0,j.useRef)();return(0,j.useEffect)(()=>{r.current=t},[t]),r.current}var xt=zt;var A=new Map;function Ft({defaultValue:t,defaultLanguage:r,defaultPath:e,value:o,language:f,path:p,theme:y="light",line:S,loading:O="Loading...",options:C={},overrideServices:v={},saveViewState:g=!0,keepCurrentModel:q=!1,width:B="100%",height:G="100%",className:J,wrapperProps:K={},beforeMount:Q=h,onMount:x=h,onChange:w,onValidate:I=h}){let[l,a]=(0,s.useState)(!1),[u,U]=(0,s.useState)(!0),m=(0,s.useRef)(null),i=(0,s.useRef)(null),T=(0,s.useRef)(null),H=(0,s.useRef)(x),P=(0,s.useRef)(Q),L=(0,s.useRef)(),n=(0,s.useRef)(o),c=xt(p),rt=(0,s.useRef)(!1),X=(0,s.useRef)(!1);k(()=>{let M=gt.default.init();return M.then(R=>(m.current=R)&&U(!1)).catch(R=>R?.type!=="cancelation"&&console.error("Monaco initialization: error:",R)),()=>i.current?bt():M.cancel()}),E(()=>{let M=b(m.current,t||o||"",r||f||"",p||e||"");M!==i.current?.getModel()&&(g&&A.set(c,i.current?.saveViewState()),i.current?.setModel(M),g&&i.current?.restoreViewState(A.get(p)))},[p],l),E(()=>{i.current?.updateOptions(C)},[C],l),E(()=>{!i.current||o===void 0||(i.current.getOption(m.current.editor.EditorOption.readOnly)?i.current.setValue(o):o!==i.current.getValue()&&(X.current=!0,i.current.executeEdits("",[{range:i.current.getModel().getFullModelRange(),text:o,forceMoveMarkers:!0}]),i.current.pushUndoStop(),X.current=!1))},[o],l),E(()=>{let M=i.current?.getModel();M&&f&&m.current?.editor.setModelLanguage(M,f)},[f],l),E(()=>{S!==void 0&&i.current?.revealLine(S)},[S],l),E(()=>{m.current?.editor.setTheme(y)},[y],l);let et=(0,s.useCallback)(()=>{if(!(!T.current||!m.current)&&!rt.current){P.current(m.current);let M=p||e,R=b(m.current,o||t||"",r||f||"",M||"");i.current=m.current?.editor.create(T.current,{model:R,automaticLayout:!0,...C},v),g&&i.current.restoreViewState(A.get(M)),m.current.editor.setTheme(y),a(!0),rt.current=!0}},[t,r,e,o,f,p,C,v,g,y]);(0,s.useEffect)(()=>{l&&H.current(i.current,m.current)},[l]),(0,s.useEffect)(()=>{!u&&!l&&et()},[u,l,et]),n.current=o,(0,s.useEffect)(()=>{l&&w&&(L.current?.dispose(),L.current=i.current?.onDidChangeModelContent(M=>{X.current||w(i.current.getValue(),M)}))},[l,w]),(0,s.useEffect)(()=>{if(l){let M=m.current.editor.onDidChangeMarkers(R=>{let Y=i.current.getModel()?.uri;if(Y&&R.find(Z=>Z.path===Y.path)){let Z=m.current.editor.getModelMarkers({resource:Y});I?.(Z)}});return()=>{M?.dispose()}}return()=>{}},[l,I]);function bt(){L.current?.dispose(),q?g&&A.set(p,i.current.saveViewState()):i.current.getModel()?.dispose(),i.current.dispose()}return s.default.createElement(V,{width:B,height:G,isEditorReady:l,loading:O,_ref:T,className:J,wrapperProps:K})}var Ct=Ft;var tt=(0,Rt.memo)(Ct);var jt=tt;0&&(module.exports={DiffEditor,Editor,loader,useMonaco});
//# sourceMappingURL=index.js.map