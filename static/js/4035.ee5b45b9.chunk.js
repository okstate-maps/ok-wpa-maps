"use strict";(self.webpackChunkok_wpa_maps=self.webpackChunkok_wpa_maps||[]).push([[4035],{4035:(e,o,t)=>{t.r(o),t.d(o,{getDrawMeshHelpMessage:()=>i});var n=t(68860),r=t(11186),s=t(71353),a=t(74509);function i(e,o){var t,s,i,h;const m=null===e||void 0===e?void 0:e.geometry;if(!e||"mesh"!==(null===m||void 0===m?void 0:m.type)||!o)return;const{renderCoordsHelper:p,elevationProvider:v}=o,{camera:f}=o.state,{extent:g}=m,{center:w,spatialReference:k}=g,x=(0,n.c9)(k),C=(0,n._R)(k),R=(0,n.c9)(p.spatialReference),_=g.width*x,z=g.height*C,b=(null!==(t=g.zmax)&&void 0!==t?t:0)*C,y=b-(null!==(s=g.zmin)&&void 0!==s?s:0)*C,M=Math.max(_,z,y)/R,{x:H,y:P}=w,S=null!==(i=w.z)&&void 0!==i?i:0;(0,r.s)(c,H,P,S),p.toRenderCoords(c,k,c);const T=M/f.computeScreenPixelSizeAt(c);if(T>f.width*d)return"meshTooClose";if(T<l)return"meshTooFar";const q=(0,a.RL)(e),{absoluteZ:A}=(0,a.tq)(H,P,b,k,o,q);return A<(null!==(h=v.getElevation(H,P,S,k,"ground"))&&void 0!==h?h:0)*C+y*u?"meshUnderground":"mesh"}const l=20,d=1,u=.1,c=(0,s.c)()}}]);
//# sourceMappingURL=4035.ee5b45b9.chunk.js.map