"use strict";(self.webpackChunkok_wpa_maps=self.webpackChunkok_wpa_maps||[]).push([[345],{59447:(e,t,o)=>{o.d(t,{r:()=>r});class r{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){var o;return null===(o=this._outer.get(e))||void 0===o?void 0:o.get(t)}set(e,t,o){const r=this._outer.get(e);r?r.set(t,o):this._outer.set(e,new Map([[t,o]]))}delete(e,t){const o=this._outer.get(e);o&&(o.delete(t),0===o.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,o)=>e(t,o)))}}},60345:(e,t,o)=>{o.r(t),o.d(t,{BufferObject:()=>r.f,FramebufferObject:()=>c.X,Program:()=>n.$,ProgramCache:()=>s.G,Renderbuffer:()=>a.r,ShaderCompiler:()=>i.B,Texture:()=>f.x,VertexArrayObject:()=>u.U,createContext:()=>d.kr,createProgram:()=>l.H,glslifyDefineMap:()=>h.K});var r=o(44070),c=o(53634),n=o(47428),s=o(68267),a=o(15880),i=o(56648),f=o(57808),u=o(45412),h=o(65706),l=o(96721),d=o(83826)},68267:(e,t,o)=>{o.d(t,{G:()=>n});var r=o(59447),c=o(47428);class n{constructor(e){this._rctx=e,this._store=new r.r}dispose(){this._store.forEach((e=>e.forEach((e=>e.dispose())))),this._store.clear()}acquire(e,t,o,r){const n=this._store.get(e,t);if(null!=n)return n.ref(),n;const s=new c.$(this._rctx,e,t,o,r);return s.ref(),this._store.set(e,t,s),s}get test(){let e=0;return this._store.forEach((t=>t.forEach((t=>e+=t.hasGLName?2:1)))),{cachedWebGLProgramObjects:e}}}},65706:(e,t,o)=>{function r(e){const{options:t,value:o}=e;return"number"==typeof t[o]}function c(e){let t="";for(const o in e){const c=e[o];if("boolean"==typeof c)c&&(t+="#define ".concat(o,"\n"));else if("number"==typeof c)t+="#define ".concat(o," ").concat(c.toFixed(),"\n");else if("object"==typeof c)if(r(c)){const{value:e,options:r,namespace:n}=c,s=n?"".concat(n,"_"):"";for(const o in r)t+="#define ".concat(s).concat(o," ").concat(r[o].toFixed(),"\n");t+="#define ".concat(o," ").concat(s).concat(e,"\n")}else{const e=c.options;let r=0;for(const o in e)t+="#define ".concat(e[o]," ").concat((r++).toFixed(),"\n");t+="#define ".concat(o," ").concat(e[c.value],"\n")}}return t}o.d(t,{K:()=>c})}}]);
//# sourceMappingURL=345.cafd3571.chunk.js.map