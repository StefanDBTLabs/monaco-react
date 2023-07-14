import _r from"@monaco-editor/loader";import{memo as Ot}from"react";import ht,{useState as ot,useRef as T,useCallback as nt,useEffect as it}from"react";import Tt from"@monaco-editor/loader";import{memo as xt}from"react";import Q from"react";var at={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},P=at;import Mt from"react";var mt={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Z=mt;function Et({children:t}){return Mt.createElement("div",{style:Z.container},t)}var $=Et;var tt=$;function yt({width:t,height:o,isEditorReady:i,loading:r,_ref:m,className:u,wrapperProps:M}){return Q.createElement("section",{style:{...P.wrapper,width:t,height:o},...M},!i&&Q.createElement(tt,null,r),Q.createElement("div",{ref:m,style:{...P.fullWidth,...!i&&P.hide},className:u}))}var rt=yt;var W=xt(rt);import{useEffect as gt}from"react";function Ct(t){gt(t,[])}var h=Ct;import{useEffect as Rt,useRef as Dt}from"react";function bt(t,o,i=!0){let r=Dt(!0);Rt(r.current||!i?()=>{r.current=!1}:t,o)}var a=bt;function b(){}function R(t,o,i,r){return _(t,r)||St(t,o,i,r)}function _(t,o){return t.editor.getModel(et(t,o))}function St(t,o,i,r){return t.editor.createModel(o,i,r?et(t,r):void 0)}function et(t,o){return t.Uri.parse(o)}function kt({original:t,modified:o,language:i,originalLanguage:r,modifiedLanguage:m,originalModelPath:u,modifiedModelPath:M,keepCurrentOriginalModel:D=!1,keepCurrentModifiedModel:k=!1,theme:x="light",loading:L="Loading...",options:y={},height:z="100%",width:F="100%",className:j,wrapperProps:A={},beforeMount:q=b,onMount:B=b}){let[E,O]=ot(!1),[w,f]=ot(!0),d=T(null),s=T(null),I=T(null),p=T(B),n=T(q),S=T(!1);h(()=>{let e=Tt.init();return e.then(c=>(s.current=c)&&f(!1)).catch(c=>c?.type!=="cancelation"&&console.error("Monaco initialization: error:",c)),()=>d.current?U():e.cancel()}),a(()=>{let e=d.current.getModifiedEditor();if(k&&M){let c=_(s.current,M);c!==e.getModel()&&e.setModel(c)}e.getOption(s.current.editor.EditorOption.readOnly)?e.setValue(o||""):o!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:o||"",forceMoveMarkers:!0}]),e.pushUndoStop())},[o,M,k],E),a(()=>{let e=d.current.getOriginalEditor();if(D&&u){let c=_(s.current,u);c!==d.current.getModel()&&e.setModel(c)}e.setValue(t||"")},[t,u,D],E),a(()=>{let{original:e,modified:c}=d.current.getModel();s.current.editor.setModelLanguage(e,r||i||"text"),s.current.editor.setModelLanguage(c,m||i||"text")},[i,r,m],E),a(()=>{s.current?.editor.setTheme(x)},[x],E),a(()=>{d.current?.updateOptions(y)},[y],E);let v=nt(()=>{if(!s.current)return;n.current(s.current);let e=R(s.current,t||"",r||i||"text",u||""),c=R(s.current,o||"",m||i||"text",M||"");d.current?.setModel({original:e,modified:c})},[i,o,m,t,r,u,M]),H=nt(()=>{!S.current&&I.current&&(d.current=s.current.editor.createDiffEditor(I.current,{automaticLayout:!0,...y}),v(),s.current?.editor.setTheme(x),O(!0),S.current=!0)},[y,x,v]);it(()=>{E&&p.current(d.current,s.current)},[E]),it(()=>{!w&&!E&&H()},[w,E,H]),a(()=>{if(d.current&&s.current){let e=d.current.getOriginalEditor(),c=R(s.current,t||"",r||i||"text",u||"");c!==e.getModel()&&e.setModel(c)}},[u],E),a(()=>{if(d.current&&s.current){let e=d.current.getModifiedEditor(),c=R(s.current,o||"",m||i||"text",M||"");c!==e.getModel()&&e.setModel(c)}},[M],E);function U(){let e=d.current?.getModel();D||e?.original?.dispose(),k||e?.modified?.dispose(),d.current?.dispose()}return ht.createElement(W,{width:F,height:z,isEditorReady:E,loading:L,_ref:I,className:j,wrapperProps:A})}var ct=kt;var wt=Ot(ct);import{useState as It}from"react";import st from"@monaco-editor/loader";function Ut(){let[t,o]=It(st.__getMonacoInstance());return h(()=>{let i;return t||(i=st.init(),i.then(r=>{o(r)})),()=>i?.cancel()}),t}var Lt=Ut;import{memo as zt}from"react";import Wt,{useState as ft,useEffect as N,useRef as g,useCallback as _t}from"react";import Nt from"@monaco-editor/loader";import{useEffect as vt,useRef as Ht}from"react";function Pt(t){let o=Ht();return vt(()=>{o.current=t},[t]),o.current}var ut=Pt;var V=new Map;function Vt({defaultValue:t,defaultLanguage:o,defaultPath:i,value:r,language:m,path:u,theme:M="light",line:D,loading:k="Loading...",options:x={},overrideServices:L={},saveViewState:y=!0,keepCurrentModel:z=!1,width:F="100%",height:j="100%",className:A,wrapperProps:q={},beforeMount:B=b,onMount:E=b,onChange:O,onValidate:w=b}){let[f,d]=ft(!1),[s,I]=ft(!0),p=g(null),n=g(null),S=g(null),v=g(E),H=g(B),U=g(),e=g(r),c=ut(u),X=g(!1),G=g(!1);h(()=>{let l=Nt.init();return l.then(C=>(p.current=C)&&I(!1)).catch(C=>C?.type!=="cancelation"&&console.error("Monaco initialization: error:",C)),()=>n.current?lt():l.cancel()}),a(()=>{let l=R(p.current,t||r||"",o||m||"",u||i||"");l!==n.current?.getModel()&&(y&&V.set(c,n.current?.saveViewState()),n.current?.setModel(l),y&&n.current?.restoreViewState(V.get(u)))},[u],f),a(()=>{n.current?.updateOptions(x)},[x],f),a(()=>{!n.current||r===void 0||(n.current.getOption(p.current.editor.EditorOption.readOnly)?n.current.setValue(r):r!==n.current.getValue()&&(G.current=!0,n.current.executeEdits("",[{range:n.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),n.current.pushUndoStop(),G.current=!1))},[r],f),a(()=>{let l=n.current?.getModel();l&&m&&p.current?.editor.setModelLanguage(l,m)},[m],f),a(()=>{D!==void 0&&n.current?.revealLine(D)},[D],f),a(()=>{p.current?.editor.setTheme(M)},[M],f);let Y=_t(()=>{if(!(!S.current||!p.current)&&!X.current){H.current(p.current);let l=u||i,C=R(p.current,r||t||"",o||m||"",l||"");n.current=p.current?.editor.create(S.current,{model:C,automaticLayout:!0,...x},L),y&&n.current.restoreViewState(V.get(l)),p.current.editor.setTheme(M),d(!0),X.current=!0}},[t,o,i,r,m,u,x,L,y,M]);N(()=>{f&&v.current(n.current,p.current)},[f]),N(()=>{!s&&!f&&Y()},[s,f,Y]),e.current=r,N(()=>{f&&O&&(U.current?.dispose(),U.current=n.current?.onDidChangeModelContent(l=>{G.current||O(n.current.getValue(),l)}))},[f,O]),N(()=>{if(f){let l=p.current.editor.onDidChangeMarkers(C=>{let J=n.current.getModel()?.uri;if(J&&C.find(K=>K.path===J.path)){let K=p.current.editor.getModelMarkers({resource:J});w?.(K)}});return()=>{l?.dispose()}}return()=>{}},[f,w]);function lt(){U.current?.dispose(),z?y&&V.set(u,n.current.saveViewState()):n.current.getModel()?.dispose(),n.current.dispose()}return Wt.createElement(W,{width:F,height:j,isEditorReady:f,loading:k,_ref:S,className:A,wrapperProps:q})}var dt=Vt;var pt=zt(dt);var Fr=pt;export{wt as DiffEditor,pt as Editor,Fr as default,_r as loader,Lt as useMonaco};
//# sourceMappingURL=index.mjs.map