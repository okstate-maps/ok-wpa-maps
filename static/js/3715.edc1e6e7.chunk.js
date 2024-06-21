"use strict";(self.webpackChunkok_wpa_maps=self.webpackChunkok_wpa_maps||[]).push([[3715],{39406:(t,e,n)=>{n.d(e,{$z:()=>o,KF:()=>u,LE:()=>d,X9:()=>s,mi:()=>i});var r=n(18722);function i(t){if((0,r.kJ)(t)){if(t.length<r.c8)return t}else if(t.length<r.c8)return Array.from(t);let e=!0,n=!0;return t.some(((t,r)=>(e=e&&0===t,n=n&&t===r,!e&&!n))),e?d(t.length):n?u(t.length):(0,r.kJ)(t)||t.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?function(t){let e=!0;for(const n of t){if(n>=65536)return(0,r.kJ)(t)?new Uint32Array(t):t;n>=256&&(e=!1)}return e?new Uint8Array(t):new Uint16Array(t)}(t):t}function o(t){return t<=r.c8?new Array(t):t<=65536?new Uint16Array(t):new Uint32Array(t)}function s(t){return t<=r.c8?new Array(t):new Uint32Array(t)}let c=(()=>{const t=new Uint32Array(131072);for(let e=0;e<t.length;++e)t[e]=e;return t})();const a=[0],l=(()=>{const t=new Uint16Array(65536);for(let e=0;e<t.length;++e)t[e]=e;return t})();function u(t){if(1===t)return a;if(t<r.c8)return Array.from(new Uint16Array(l.buffer,0,t));if(t<l.length)return new Uint16Array(l.buffer,0,t);if(t>c.length){const e=Math.max(2*c.length,t);c=new Uint32Array(e);for(let t=0;t<c.length;t++)c[t]=t}return new Uint32Array(c.buffer,0,t)}let f=new Uint8Array(65536);function d(t){if(1===t)return a;if(t<r.c8)return new Array(t).fill(0);if(t>f.length){const e=Math.max(2*f.length,t);f=new Uint8Array(e)}return new Uint8Array(f.buffer,0,t)}},48734:(t,e,n)=>{function r(t){switch(t){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}n.d(e,{n1:()=>r})},35888:(t,e,n)=>{n.d(e,{d:()=>o});var r=n(16889),i=n(39406);function o(t,e,n){var o;const u=Array.isArray(t),f=u?t.length/e:t.byteLength/(4*e),d=u?t:new Uint32Array(t,0,f*e),h=null!==(o=null===n||void 0===n?void 0:n.minReduction)&&void 0!==o?o:0,A=(null===n||void 0===n?void 0:n.originalIndices)||null,T=A?A.length:0,E=(null===n||void 0===n?void 0:n.componentOffsets)||null;let g=0;if(E)for(let r=0;r<E.length-1;r++){const t=E[r+1]-E[r];t>g&&(g=t)}else g=f;const p=Math.floor(1.1*g)+1;(null==l||l.length<2*p)&&(l=new Uint32Array((0,r.Sf)(2*p)));for(let r=0;r<2*p;r++)l[r]=0;let N=0;const O=!!E&&!!A,I=O?T:f;let m=(0,i.$z)(f);const S=new Uint32Array(T),y=1.96;let w=0!==h?Math.ceil(4*y*y/(h*h)*h*(1-h)):I,v=1,R=E?E[1]:I;for(let r=0;r<I;r++){if(r===w){const t=1-N/r;if(t+y*Math.sqrt(t*(1-t)/r)<h)return null;w*=2}if(r===R){for(let t=0;t<2*p;t++)l[t]=0;if(A)for(let t=E[v-1];t<E[v];t++)S[t]=m[A[t]];R=E[++v]}const t=O?A[r]:r,n=t*e,i=a(d,n,e);let o=i%p,c=N;for(;0!==l[2*o+1];){if(l[2*o]===i){const t=l[2*o+1]-1;if(s(d,n,t*e,e)){c=m[t];break}}o++,o>=p&&(o-=p)}c===N&&(l[2*o]=i,l[2*o+1]=t+1,N++),m[t]=c}if(0!==h&&1-N/f<h)return null;if(O){for(let t=E[v-1];t<S.length;t++)S[t]=m[A[t]];m=(0,i.mi)(S)}const _=u?new Array(N):new Uint32Array(N*e);N=0;for(let r=0;r<I;r++)m[r]===N&&(c(d,(O?A[r]:r)*e,_,N*e,e),N++);if(A&&!O){const t=new Uint32Array(T);for(let e=0;e<t.length;e++)t[e]=m[A[e]];m=(0,i.mi)(t)}return{buffer:Array.isArray(_)?_:_.buffer,indices:m,uniqueCount:N}}function s(t,e,n,r){for(let i=0;i<r;i++)if(t[e+i]!==t[n+i])return!1;return!0}function c(t,e,n,r,i){for(let o=0;o<i;o++)n[r+o]=t[e+o]}function a(t,e,n){let r=0;for(let i=0;i<n;i++)r=t[e+i]+r|0,r=r+(r<<11)+(r>>>2)|0;return r>>>0}let l=null},55158:(t,e,n)=>{n.d(e,{Gw:()=>l,U$:()=>a,pV:()=>c});var r=n(25158),i=n(48734),o=n(97731);class s{constructor(t,e){this.layout=t,this.buffer="number"==typeof e?new ArrayBuffer(e*t.stride):e;for(const n of t.fields.keys()){const e=t.fields.get(n);this[n]=new e.constructor(this.buffer,e.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(t,e){const n=this[t];return n&&n.elementCount===e.ElementCount&&n.elementType===e.ElementType?n:null}slice(t,e){return new s(this.layout,this.buffer.slice(t*this.stride,e*this.stride))}copyFrom(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.count;const i=this.stride;if(i%4==0){const o=new Uint32Array(t.buffer,e*i,r*i/4);new Uint32Array(this.buffer,n*i,r*i/4).set(o)}else{const o=new Uint8Array(t.buffer,e*i,r*i);new Uint8Array(this.buffer,n*i,r*i).set(o)}return this}get usedMemory(){return this.byteLength}dispose(){}}class c{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this._stride=0,this._lastAligned=0,this._fields=new Map,t&&(this._stride=t.stride,t.fields.forEach((t=>this._fields.set(t[0],{...t[1],constructor:d(t[1].constructor)}))))}vec2f(t,e){return this._appendField(t,r.Eu,e),this}vec2f64(t,e){return this._appendField(t,r.q6,e),this}vec3f(t,e){return this._appendField(t,r.ct,e),this}vec3f64(t,e){return this._appendField(t,r.fP,e),this}vec4f(t,e){return this._appendField(t,r.ek,e),this}vec4f64(t,e){return this._appendField(t,r.Cd,e),this}mat3f(t,e){return this._appendField(t,r.gK,e),this}mat3f64(t,e){return this._appendField(t,r.ey,e),this}mat4f(t,e){return this._appendField(t,r.bj,e),this}mat4f64(t,e){return this._appendField(t,r.O1,e),this}vec4u8(t,e){return this._appendField(t,r.mc,e),this}f32(t,e){return this._appendField(t,r.ly,e),this}f64(t,e){return this._appendField(t,r.oS,e),this}u8(t,e){return this._appendField(t,r.D_,e),this}u16(t,e){return this._appendField(t,r.av,e),this}i8(t,e){return this._appendField(t,r.Hz,e),this}vec2i8(t,e){return this._appendField(t,r.Vs,e),this}vec2i16(t,e){return this._appendField(t,r.or,e),this}vec2u8(t,e){return this._appendField(t,r.xA,e),this}vec4u16(t,e){return this._appendField(t,r.v6,e),this}u32(t,e){return this._appendField(t,r.Nu,e),this}_appendField(t,e,n){if(this._fields.has(t))return void(0,o.hu)(!1,"".concat(t," already added to vertex buffer layout"));const r=e.ElementCount*(0,i.n1)(e.ElementType),s=this._stride;this._stride+=r,this._fields.set(t,{size:r,constructor:e,offset:s,optional:n})}createBuffer(t){return new s(this,t)}createView(t){return new s(this,t)}clone(){const t=new c;return t._stride=this._stride,t._fields=new Map,this._fields.forEach(((e,n)=>t._fields.set(n,e))),t.BufferType=this.BufferType,t}get stride(){if(this._lastAligned!==this._fields.size){let t=1;this._fields.forEach((e=>t=Math.max(t,(0,i.n1)(e.constructor.ElementType)))),this._stride=Math.floor((this._stride+t-1)/t)*t,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function a(){return new c}class l{constructor(t){this.fields=new Array,t.fields.forEach(((t,e)=>{const n={...t,constructor:f(t.constructor)};this.fields.push([e,n])})),this.stride=t.stride}}const u=[r.ly,r.Eu,r.ct,r.ek,r.gK,r.bj,r.oS,r.q6,r.fP,r.Cd,r.ey,r.O1,r.D_,r.xA,r.ne,r.mc,r.av,r.TS,r.mw,r.v6,r.Nu,r.qt,r.G5,r.hu,r.Hz,r.Vs,r.P_,r.ir,r.o7,r.or,r.n1,r.zO,r.Jj,r.wA,r.PP,r.TN];function f(t){return"".concat(t.ElementType,"_").concat(t.ElementCount)}function d(t){return h.get(t)}const h=new Map;u.forEach((t=>h.set(f(t),t)))},50256:(t,e,n)=>{n.d(e,{K:()=>o});var r=n(8548),i=n(61109);function o(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const n=t.stride;return Array.from(t.fields.keys()).map((r=>{const o=t.fields.get(r),c=o.constructor.ElementCount,a=s(o.constructor.ElementType),l=o.offset,u=!(!o.optional||!o.optional.glNormalized);return new i.G(r,c,a,l,n,u,e)}))}function s(t){const e=c[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const c={u8:r.g.UNSIGNED_BYTE,u16:r.g.UNSIGNED_SHORT,u32:r.g.UNSIGNED_INT,i8:r.g.BYTE,i16:r.g.SHORT,i32:r.g.INT,f32:r.g.FLOAT}},97731:(t,e,n)=>{n.d(e,{E6:()=>l,T:()=>s,ep:()=>a,hu:()=>o,kG:()=>f,u_:()=>u,yK:()=>c});var r=n(6394);n(90045);(0,n(67077).c)();class i{constructor(t){this.message=t}toString(){return"AssertException: ".concat(this.message)}}function o(t,e){if(!t){e=e||"Assertion";const t=new Error(e).stack;throw new i("".concat(e," at ").concat(t))}}function s(t,e){t||(e=e||"",console.warn("Verify failed: "+e+"\n"+new Error("verify").stack))}function c(t,e,n,r){let i,o=(n[0]-t[0])/e[0],s=(r[0]-t[0])/e[0];o>s&&(i=o,o=s,s=i);let c=(n[1]-t[1])/e[1],a=(r[1]-t[1])/e[1];if(c>a&&(i=c,c=a,a=i),o>a||c>s)return!1;c>o&&(o=c),a<s&&(s=a);let l=(n[2]-t[2])/e[2],u=(r[2]-t[2])/e[2];return l>u&&(i=l,l=u,u=i),!(o>u||l>s)&&(u<s&&(s=u),!(s<0))}function a(t,e,n,i,o){let s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:(0,r.a)();const c=(i[o]-n[o])*(e[0]-t[0])-(i[0]-n[0])*(e[o]-t[o]),a=(i[0]-n[0])*(t[o]-n[o])-(i[o]-n[o])*(t[0]-n[0]);if(0===c)return!1;const l=a/c;return s[0]=t[0]+l*(e[0]-t[0]),s[1]=t[o]+l*(e[o]-t[o]),!0}function l(t,e){return Math.log(t)/Math.log(e)}function u(t,e,n,r){t[12]=e,t[13]=n,t[14]=r}function f(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}},4760:(t,e,n)=>{var r;function i(t){return t===r.POSITION}n.d(e,{T:()=>r,j:()=>i}),function(t){t.POSITION="position",t.NORMAL="normal",t.NORMALCOMPRESSED="normalCompressed",t.UV0="uv0",t.AUXPOS1="auxpos1",t.AUXPOS2="auxpos2",t.COLOR="color",t.SYMBOLCOLOR="symbolColor",t.SIZE="size",t.TANGENT="tangent",t.OFFSET="offset",t.PERSPECTIVEDIVIDE="perspectiveDivide",t.SUBDIVISIONFACTOR="subdivisionFactor",t.COLORFEATUREATTRIBUTE="colorFeatureAttribute",t.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",t.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",t.DISTANCETOSTART="distanceToStart",t.UVMAPSPACE="uvMapSpace",t.BOUNDINGRECT="boundingRect",t.UVREGION="uvRegion",t.PROFILERIGHT="profileRight",t.PROFILEUP="profileUp",t.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",t.FEATUREVALUE="featureValue",t.INSTANCEMODELORIGINHI="instanceModelOriginHi",t.INSTANCEMODELORIGINLO="instanceModelOriginLo",t.INSTANCEMODEL="instanceModel",t.INSTANCEMODELNORMAL="instanceModelNormal",t.INSTANCECOLOR="instanceColor",t.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",t.LOCALTRANSFORM="localTransform",t.GLOBALTRANSFORM="globalTransform",t.BOUNDINGSPHERE="boundingSphere",t.MODELORIGIN="modelOrigin",t.MODELSCALEFACTORS="modelScaleFactors",t.FEATUREATTRIBUTE="featureAttribute",t.STATE="state",t.LODLEVEL="lodLevel",t.POSITION0="position0",t.POSITION1="position1",t.NORMALA="normalA",t.NORMALB="normalB",t.COMPONENTINDEX="componentIndex",t.VARIANTOFFSET="variantOffset",t.VARIANTSTROKE="variantStroke",t.VARIANTEXTENSION="variantExtension",t.SIDENESS="sideness",t.START="start",t.END="end",t.UP="up",t.EXTRUDE="extrude",t.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",t.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(r||(r={}))},67009:(t,e,n)=>{n.d(e,{Hr:()=>l,dG:()=>a,tf:()=>s});var r=n(50256),i=n(55158),o=n(4760);const s=(0,i.U$)().vec3f(o.T.POSITION).u16(o.T.COMPONENTINDEX),c=(0,i.U$)().vec2u8(o.T.SIDENESS),a=((0,r.K)(c),(0,i.U$)().vec3f(o.T.POSITION0).vec3f(o.T.POSITION1).vec3f(o.T.NORMAL).u16(o.T.COMPONENTINDEX).u8(o.T.VARIANTOFFSET,{glNormalized:!0}).u8(o.T.VARIANTSTROKE).u8(o.T.VARIANTEXTENSION,{glNormalized:!0})),l=(0,i.U$)().vec3f(o.T.POSITION0).vec3f(o.T.POSITION1).vec3f(o.T.NORMALA).vec3f(o.T.NORMALB).u16(o.T.COMPONENTINDEX).u8(o.T.VARIANTOFFSET,{glNormalized:!0}).u8(o.T.VARIANTSTROKE).u8(o.T.VARIANTEXTENSION,{glNormalized:!0});new Map([[o.T.POSITION0,0],[o.T.POSITION1,1],[o.T.COMPONENTINDEX,2],[o.T.VARIANTOFFSET,3],[o.T.VARIANTSTROKE,4],[o.T.VARIANTEXTENSION,5],[o.T.NORMAL,6],[o.T.NORMALA,6],[o.T.NORMALB,7],[o.T.SIDENESS,8]])},10662:(t,e,n)=>{n.d(e,{n:()=>u});var r=n(63780),i=n(16889),o=n(11186),s=n(71353);const c=-1;var a,l;function u(t,e,n){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:g;const a=t.vertices.position,l=t.vertices.componentIndex,u=(0,i.Vl)(s.anglePlanar),E=(0,i.Vl)(s.angleSignificantEdge),p=Math.cos(E),N=Math.cos(u),O=T.edge,I=O.position0,m=O.position1,S=O.faceNormal0,y=O.faceNormal1,w=A(t),v=function(t){const e=t.faces.length/3,n=t.faces,r=t.neighbors;let i=0;for(let a=0;a<e;a++){const t=r[3*a],e=r[3*a+1],o=r[3*a+2],s=n[3*a],l=n[3*a+1],u=n[3*a+2];i+=t===c||s<l?1:0,i+=e===c||l<u?1:0,i+=o===c||u<s?1:0}const o=new Int32Array(4*i);let s=0;for(let a=0;a<e;a++){const t=r[3*a],e=r[3*a+1],i=r[3*a+2],l=n[3*a],u=n[3*a+1],f=n[3*a+2];(t===c||l<u)&&(o[s++]=l,o[s++]=u,o[s++]=a,o[s++]=t),(e===c||u<f)&&(o[s++]=u,o[s++]=f,o[s++]=a,o[s++]=e),(i===c||f<l)&&(o[s++]=f,o[s++]=l,o[s++]=a,o[s++]=i)}return o}(t),R=v.length/4,_=e.allocate(R);let L=0;const F=R,U=n.allocate(F);let M=0,C=0,b=0;const P=(0,r.wR)(0,R),V=new Float32Array(R);V.forEach(((t,e,n)=>{a.getVec(v[4*e],I),a.getVec(v[4*e+1],m),n[e]=(0,o.o)(I,m)})),P.sort(((t,e)=>V[e]-V[t]));const D=new Array,B=new Array;for(let r=0;r<R;r++){const t=P[r],i=V[t],s=v[4*t],A=v[4*t+1],T=v[4*t+2],E=v[4*t+3],g=E===c;if(a.getVec(s,I),a.getVec(A,m),g)(0,o.s)(S,w[3*T],w[3*T+1],w[3*T+2]),(0,o.c)(y,S),O.componentIndex=l.get(s),O.cosAngle=(0,o.j)(S,y);else{if((0,o.s)(S,w[3*T],w[3*T+1],w[3*T+2]),(0,o.s)(y,w[3*E],w[3*E+1],w[3*E+2]),O.componentIndex=l.get(s),O.cosAngle=(0,o.j)(S,y),d(O,N))continue;O.cosAngle<-.9999&&(0,o.c)(y,S)}C+=i,b++,g||f(O,p)?(e.write(_,L++,O),D.push(i)):h(O,u)&&(n.write(U,M++,O),B.push(i))}const k=new Float32Array(D.reverse()),x=new Float32Array(B.reverse());return{regular:{instancesData:e.trim(_,L),lodInfo:{lengths:k}},silhouette:{instancesData:n.trim(U,M),lodInfo:{lengths:x}},averageEdgeLength:C/b}}function f(t,e){return t.cosAngle<e}function d(t,e){return t.cosAngle>e}function h(t,e){const n=(0,i.ZF)(t.cosAngle),r=T.fwd,s=T.ortho;return(0,o.C)(r,t.position1,t.position0),n*((0,o.j)((0,o.b)(s,t.faceNormal0,t.faceNormal1),r)>0?-1:1)>e}function A(t){const e=t.faces.length/3,n=t.vertices.position,r=t.faces,i=E.v0,s=E.v1,c=E.v2,a=new Float32Array(3*e);for(let l=0;l<e;l++){const t=r[3*l],e=r[3*l+1],u=r[3*l+2];n.getVec(t,i),n.getVec(e,s),n.getVec(u,c),(0,o.f)(s,s,i),(0,o.f)(c,c,i),(0,o.b)(i,s,c),(0,o.n)(i,i),a[3*l]=i[0],a[3*l+1]=i[1],a[3*l+2]=i[2]}return a}(l=a||(a={}))[l.SOLID=0]="SOLID",l[l.SKETCH=1]="SKETCH";const T={edge:{position0:(0,s.c)(),position1:(0,s.c)(),faceNormal0:(0,s.c)(),faceNormal1:(0,s.c)(),componentIndex:0,cosAngle:0},ortho:(0,s.c)(),fwd:(0,s.c)()},E={v0:(0,s.c)(),v1:(0,s.c)(),v2:(0,s.c)()},g={anglePlanar:4,angleSignificantEdge:35}},83715:(t,e,n)=>{n.d(e,{Kl:()=>w,n_:()=>U,kY:()=>v,Yr:()=>F});var r=n(35888);function i(t,e,n){const r=e/3,i=new Uint32Array(n+1),o=new Uint32Array(n+1),s=(t,e)=>{t<e?i[t+1]++:o[e+1]++};for(let g=0;g<r;g++){const e=t[3*g],n=t[3*g+1],r=t[3*g+2];s(e,n),s(n,r),s(r,e)}let c=0,a=0;for(let g=0;g<n;g++){const t=i[g+1],e=o[g+1];i[g+1]=c,o[g+1]=a,c+=t,a+=e}const l=new Uint32Array(6*r),u=i[n],f=(t,e,n)=>{if(t<e){const r=i[t+1]++;l[2*r]=e,l[2*r+1]=n}else{const r=o[e+1]++;l[2*u+2*r]=t,l[2*u+2*r+1]=n}};for(let g=0;g<r;g++){const e=t[3*g],n=t[3*g+1],r=t[3*g+2];f(e,n,g),f(n,r,g),f(r,e,g)}const d=(t,e)=>{const n=2*t,r=e-t;for(let i=1;i<r;i++){const t=l[n+2*i],e=l[n+2*i+1];let r=i-1;for(;r>=0&&l[n+2*r]>t;r--)l[n+2*r+2]=l[n+2*r],l[n+2*r+3]=l[n+2*r+1];l[n+2*r+2]=t,l[n+2*r+3]=e}};for(let g=0;g<n;g++)d(i[g],i[g+1]),d(u+o[g],u+o[g+1]);const h=new Int32Array(3*r),A=(e,n)=>e===t[3*n]?0:e===t[3*n+1]?1:e===t[3*n+2]?2:-1,T=(t,e)=>{const n=A(t,e);h[3*e+n]=-1},E=(t,e,n,r)=>{const i=A(t,e);h[3*e+i]=r;const o=A(n,r);h[3*r+o]=e};for(let g=0;g<n;g++){let t=i[g];const e=i[g+1];let n=o[g];const r=o[g+1];for(;t<e&&n<r;){const e=l[2*t],r=l[2*u+2*n];e===r?(E(g,l[2*t+1],r,l[2*u+2*n+1]),t++,n++):e<r?(T(g,l[2*t+1]),t++):(T(r,l[2*u+2*n+1]),n++)}for(;t<e;)T(g,l[2*t+1]),t++;for(;n<r;)T(l[2*u+2*n],l[2*u+2*n+1]),n++}return h}var o=n(55158),s=n(4760),c=n(67009),a=n(84936),l=n(11186),u=n(71353),f=n(50256);class d{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?g:E}write(t,e,n){const r=this._edgeHashFunction(n);S.seed=r;const i=S.getIntRange(0,255),o=S.getIntRange(0,this.settings.variants-1),s=S.getFloat(),c=255*(.5*function(t,e){const n=t<0?-1:1;return Math.abs(t)**e*n}(-(1-Math.min(s/.7,1))+Math.max(0,s-.7)/(1-.7),1.2)+.5);t.position0.setVec(e,n.position0),t.position1.setVec(e,n.position1),t.componentIndex.set(e,n.componentIndex),t.variantOffset.set(e,i),t.variantStroke.set(e,o),t.variantExtension.set(e,c)}trim(t,e){return t.slice(0,e)}}const h=new Float32Array(6),A=new Uint32Array(h.buffer),T=new Uint32Array(1);function E(t){const e=h;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],T[0]=5381;for(let n=0;n<A.length;n++)T[0]=31*T[0]+A[n];return T[0]}function g(t){const e=h;e[0]=N(t.position0[0]),e[1]=N(t.position0[1]),e[2]=N(t.position0[2]),e[3]=N(t.position1[0]),e[4]=N(t.position1[1]),e[5]=N(t.position1[2]),T[0]=5381;for(let n=0;n<A.length;n++)T[0]=31*T[0]+A[n];return T[0]}const p=1e4;function N(t){return Math.round(t*p)/p}class O{constructor(){this._commonWriter=new d}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return c.dG.createBuffer(t)}write(t,e,n){this._commonWriter.write(t,e,n),(0,l.g)(m,n.faceNormal0,n.faceNormal1),(0,l.n)(m,m),t.normal.setVec(e,m)}trim(t,e){return this._commonWriter.trim(t,e)}}O.Layout=c.dG,O.glLayout=(0,f.K)(c.dG,1);class I{constructor(){this._commonWriter=new d}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return c.Hr.createBuffer(t)}write(t,e,n){this._commonWriter.write(t,e,n),t.normalA.setVec(e,n.faceNormal0),t.normalB.setVec(e,n.faceNormal1)}trim(t,e){return this._commonWriter.trim(t,e)}}I.Layout=c.Hr,I.glLayout=(0,f.K)(c.Hr,1);const m=(0,u.c)(),S=new a.Z;var y=n(10662);function w(t){const e=v(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return _.updateSettings(t.writerSettings),L.updateSettings(t.writerSettings),(0,y.n)(e,_,L)}function v(t,e,n,o){if(e){const e=i(n,o,t.count);return new R(n,o,e,t)}const s=(0,r.d)(t.buffer,t.stride/4,{originalIndices:n,originalIndicesLength:o}),a=i(s.indices,o,s.uniqueCount);return{faces:s.indices,facesLength:s.indices.length,neighbors:a,vertices:c.tf.createView(s.buffer)}}class R{constructor(t,e,n,r){this.faces=t,this.facesLength=e,this.neighbors=n,this.vertices=r}}const _=new O,L=new I,F=(0,o.U$)().vec3f(s.T.POSITION0).vec3f(s.T.POSITION1),U=(0,o.U$)().vec3f(s.T.POSITION0).vec3f(s.T.POSITION1).u16(s.T.COMPONENTINDEX)}}]);
//# sourceMappingURL=3715.edc1e6e7.chunk.js.map