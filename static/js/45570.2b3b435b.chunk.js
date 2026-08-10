"use strict";(globalThis.webpackChunkok_wpa_maps||=[]).push([[45570],{80069(e,t,r){r.d(t,{F:()=>u,b:()=>f});var i=r(75540),o=r(73398),a=r(21390),s=r(86955),n=r(72790),l=r(70367),c=r(31432),d=r(2687);class u extends c.Y{constructor(){super(...arguments),this.effect=0,this.fadeFactor=(0,i.v)(1)}}function f(){const e=new d.N5;return e.include(o.c),e.outputs.add("fragColor","vec4",0),e.fragment.uniforms.add(new l.N("colorTexture",e=>e.color),new l.N("focusArea",e=>e.focusArea),new n.c("focusAreaEffectMode",e=>e.effect),new a.m("fadeFactor",e=>e.fadeFactor.value)).main.add(s.H`
      float mask = texture( focusArea, uv, 0.0 ).r;
      vec4 color = texture( colorTexture, uv, 0.0 );
      vec4 colorDeSaturate = vec4(color.r * 0.25 + color.g * 0.5 + color.b * 0.25);
      if (focusAreaEffectMode == ${s.H.int(0)}) {
        fragColor = mask > 0.0 ? color : mix(color, 0.55 * colorDeSaturate + 0.45, fadeFactor);
      } else {
        fragColor = mask > 0.0 ? color : mix(color, 0.33 * color, fadeFactor);
      }
  `),e}const p=Object.freeze(Object.defineProperty({__proto__:null,FocusAreaColorPassParameters:u,build:f},Symbol.toStringTag,{value:"Module"}));r.d(t,["a",0,p])},19061(e,t,r){r.d(t,{a:()=>D,b:()=>F});var i=r(19555),o=r(72745),a=r(55855),s=r(34981),n=r(48962),l=r(90080),c=r(98720),d=r(40318),u=r(87236),f=r(65058),p=r(3012),h=r(66763),v=r(80883),x=r(69817),g=r(3799),m=r(95756),C=r(51596),O=r(58350),S=r(21390),w=r(86955),z=r(72790),b=r(4653),y=r(70367),P=r(71799),A=r(49560),V=r(24176),_=r(2687);function F(e){const t=new _.N5;t.include(d.Q,e),t.vertex.include(n.N,e);const{output:r,hasOcclusionTexture:o,signedDistanceFieldEnabled:F,pixelSnappingEnabled:U,hasEmission:T,hasScreenSizePerspective:I,debugDrawLabelBorder:M,hasVVSize:j,hasVVColor:L,hasRotation:B,occludedFragmentFade:W,sampleSignedDistanceFieldTexelCenter:N,hasVertexColor:G,hasVertexSize:$,hasVertexRotation:q,hasVertexUVi:Z}=e;t.include(x.Y6),t.include(h.A,e),t.include(l.g,e),t.include(V.D,e);const{vertex:k,fragment:Y}=t;Y.include(v.a),Y.code.add(w.H`
    vec4 applyFocusAreaStyle(vec4 color, int style) {
      const float factor = 0.46;
      const float factorBright = 0.32;

      if (style == ${w.H.int(0)}) {
        float luma = (color.r + color.g + color.b) / 3.0;
        float bright = luma * (1.0 - 0.6 * factorBright) + 0.6 * factorBright * color.a;
        float brightScaled = bright * factorBright;
        return vec4(brightScaled, brightScaled, brightScaled, color.a * factorBright);
      }

      float darkScaled = factor * factor;
      return vec4(color.rgb * darkScaled, color.a * factor);
    }
  `),t.varyings.add("vcolor","vec4"),t.varyings.add("vtc","vec2"),t.varyings.add("vsize","vec2");const Q=10===r;k.uniforms.add(new C.I("viewport",e=>e.camera.fullViewport),new m.G("screenOffset",(e,t)=>(0,i.hZ)(H,2*e.screenOffset[0]*t.camera.pixelRatio,2*e.screenOffset[1]*t.camera.pixelRatio)),new m.G("anchorPosition",e=>D(e)),new O.E("materialColor",e=>{let{color:t}=e;return t}),new S.m("materialRotation",e=>e.rotation),new m.G("materialSize",e=>e.size),new y.N("tex",e=>e.texture)),(0,g.Nz)(k),F&&(k.uniforms.add(new O.E("outlineColor",e=>e.outlineColor)),Y.uniforms.add(new O.E("outlineColor",e=>E(e)?e.outlineColor:a.uY),new S.m("outlineSize",e=>E(e)?e.outlineSize:0))),U&&k.include(c.K),I&&((0,x.pM)(k),(0,x.OH)(k)),M&&t.varyings.add("debugBorderCoords","vec4"),t.attributes.add("uv0","vec2"),Z&&t.attributes.add("uvi","vec4"),G&&t.attributes.add("color","vec4"),$&&t.attributes.add("size","vec2"),q&&t.attributes.add("rotation","float"),(j||L)&&t.attributes.add("featureAttribute","vec4"),k.main.add(w.H`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${p.Z};
      return;
    }

    vec2 vertexSize = materialSize${(0,w.If)($," * size")};
    vec2 inputSize;
    ${(0,w.If)(I,w.H`
        inputSize = screenSizePerspectiveScaleVec2(vertexSize, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,w.H`
        inputSize = vertexSize;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${(0,w.If)(j,w.H`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);
  `);const X=w.H`
  ${(0,w.If)(Z,w.H`
    vec2 texSize = vec2(textureSize(tex, 0));
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0)) / texSize;
    `,w.H`
    vec2 uv = mix(vec2(0.), vec2(1.), bvec2(uv0));
    `)}

    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${(0,w.If)(B,w.H`
        float angle = radians(materialRotation${(0,w.If)(q," + rotation")});
        float cosAngle = cos(angle);
        float sinAngle = sin(angle);
        mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

        quadOffset.xy = rotate * quadOffset.xy;
      `)}

    quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,K=U?F?w.H`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:w.H`posProj += quadOffset;
if (inputSize.x == vertexSize.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:w.H`posProj += quadOffset;`;k.include(A.Q),k.main.add(w.H`
    ${X}
    ${L?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":G?"vcolor = color * materialColor;":"vcolor = materialColor;"}

    ${(0,w.If)(11===r,w.H`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < alphaCutoff;
    ${(0,w.If)(F,"alphaDiscard = alphaDiscard && outlineColor.a < alphaCutoff;")}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${K}
      gl_Position = posProj;
    }

    vtc = uv;

    ${(0,w.If)(M,w.H`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `);const J=(0,s._o)(r)&&e.hasFocusAreaStyle&&!e.draped;switch(Y.uniforms.add(new y.N("tex",e=>e.texture)),J&&Y.uniforms.add(new z.c("focusAreaStyle",e=>(e=>e?P.i[e]:0)(e.focusAreaStyle))),W&&!Q&&(Y.include(f.E),Y.uniforms.add(new b.x("depthMap",e=>e.mainDepth),new S.m("occludedOpacity",e=>e.occludedFragmentOpacity?.value??1))),o&&Y.uniforms.add(new b.x("texOcclusion",e=>e.hudOcclusion?.attachment)),M?Y.main.add("\n        float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));\n        // don't discard fragments on debug border\n        float textureAlphaCutoff = isBorder > 0.0 ? 0.0 : alphaCutoff;\n      "):Y.main.add("float textureAlphaCutoff = alphaCutoff;"),Y.main.add("vec2 samplePos = vtc;"),N&&Y.main.add(w.H`float txSize = float(textureSize(tex, 0).x);
float texelSize = 1.0 / txSize;
vec2 scaleFactor = (vsize - txSize) * texelSize;
samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`),F?Y.main.add(w.H`
      vec4 fillPixelColor = vcolor;

      // Get distance in output units (i.e. pixels)

      float sdf = texture(tex, samplePos).r;
      float pixelDistance = sdf * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - pixelDistance, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(pixelDistance) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < textureAlphaCutoff ||
          fillPixelColor.a + outlinePixelColor.a < alphaCutoff
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
                              vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${(0,w.If)(!Q,w.H`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < textureAlphaCutoff) {
          discard;
        }

        ${(0,w.If)(!Q,w.H`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `):Y.main.add(w.H`
        vec4 texColor = texture(tex, samplePos, -0.5);
        if (texColor.a < textureAlphaCutoff) {
          discard;
        }
        ${(0,w.If)(!Q,w.H`fragColor = texColor * premultiplyAlpha(vcolor);`)}
      `),W&&!Q&&Y.main.add(w.H`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${w.H.float(1-R)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `),o&&Y.main.add("fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;"),!Q&&M&&Y.main.add("fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);"),2===r&&Y.main.add(w.H`if (fragColor.a < alphaCutoff) {
discard;
}`),J&&Y.main.add(w.H`fragColor = applyFocusAreaStyle(fragColor, focusAreaStyle);`),(0,s._o)(r)&&T&&Y.main.add("fragEmission = vec4(0.0);"),r){case 1:Y.main.add("\n        fragColor = vec4(fragColor.rgb * floatBlendOutputScale, fragColor.a);\n        fragAlpha = fragColor.a * floatBlendOutputScale;\n      ");break;case 2:Y.main.add("fragColor.rgb /= fragColor.a;");break;case 11:Y.main.add("outputObjectAndLayerIdColor();");break;case 10:t.include(u.Q,e),Y.main.add("outputHighlight(false);")}return t}function E(e){return e.outlineColor[3]>0&&e.outlineSize>0}function D(e){return e.textureIsSignedDistanceField?(t=e.anchorPosition,r=e.distanceFieldBoundingBox,o=H,(0,i.hZ)(o,t[0]*(r[2]-r[0])+r[0],t[1]*(r[3]-r[1])+r[1])):(0,i.C)(H,e.anchorPosition),H;var t,r,o}const H=(0,o.vt)();const R=.08,U=Object.freeze(Object.defineProperty({__proto__:null,anchorPosition:D,build:F},Symbol.toStringTag,{value:"Module"}));r.d(t,["H",0,U])},23079(e,t,r){r.d(t,{i:()=>o});var i=r(79053);function o(e,t){return new Promise((r,o)=>{e.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA?r():(t((0,i.Oo)(e,"canplay",r)),t((0,i.Oo)(e,"error",o)))})}},49296(e,t,r){r.d(t,{F:()=>a});var i=r(59097),o=r(41595);class a{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.mode=null,this.centerInElevationSR=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=(0,i.Ao)(e)}get requiresSampledElevationInfo(){return"absolute-height"!==this.mode}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){const r=this.calculateOffsetRenderUnits(t);return null!=this.featureExpressionInfoContext?r:e+r}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset;const r=this.featureExpressionInfoContext;return null!=r&&(t+=(0,o.g7)(r)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=(0,i.Tg)(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}setFeatureExpressionInfoContext(e){this._featureExpressionInfoContext=e}updateFeatureExpressionInfoContextForGraphic(e,t,r){e.arcade?(this._featureExpressionInfoContext=(0,o.o8)(e),this.updateFeatureExpressionFeature(t,r)):this._featureExpressionInfoContext=e}updateFeatureExpressionFeature(e,t){const r=this.featureExpressionInfoContext;r?.arcade&&(r.cachedResult=void 0,(0,o.gf)(this._featureExpressionInfoContext,e.geometry?(0,o.VG)(r.arcade.modules,e,t):null))}static fromElevationInfo(e){const t=new a;return null!=e&&t.setFromElevationInfo(e),t}}},41595(e,t,r){r.d(t,{MF:()=>f,VG:()=>c,g7:()=>u,gf:()=>d,o8:()=>n,q6:()=>l});var i=r(76460),o=r(50346),a=r(32535),s=r(76386);function n(e){return{cachedResult:e.cachedResult,arcade:e.arcade?{func:e.arcade.func,context:e.arcade.modules.arcadeUtils.createExecContext(null,{sr:e.arcade.context.spatialReference}),modules:e.arcade.modules}:null}}async function l(e,t,r,i){const a=e?.expression;if("string"!=typeof a)return null;const n=h(a);if(null!=n)return{cachedResult:n};const l=await(0,s.l)();(0,o.Te)(r);const c=l.arcadeUtils,d=c.createSyntaxTree(a);if(!d)return null;if(c.dependsOnView(d))return null!=i&&i.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0};const u=c.createFunction(d);return u?{arcade:{modules:l,func:u,context:c.createExecContext(null,{sr:t})}}:null}function c(e,t,r){return e.arcadeUtils.createFeature(t.attributes,t.geometry,r)}function d(e,t){if(null!=e&&!p(e)){if(!t||!e.arcade)return void i.A.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils").errorOncePerTick("Arcade support required but not provided");const r=t;r._geometry&&(r._geometry=(0,a.wZ)(r._geometry)),e.arcade.modules.arcadeUtils.updateExecContext(e.arcade.context,t)}}function u(e){if(null!=e){if(p(e))return e.cachedResult;const t=e.arcade;let r=t?.modules.arcadeUtils.executeFunction(t.func,t.context);return"number"!=typeof r&&(e.cachedResult=0,r=0),r}return 0}function f(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e?.featureExpressionInfo;const i=r?.expression;return t||"0"===i||(r=null),r??null}function p(e){return null!=e.cachedResult}function h(e){return"0"===e?0:null}r.d(t,["KF",0,{cachedResult:0}])},25530(e,t,r){r.d(t,{Ge:()=>u,VQ:()=>p,yc:()=>d});var i=r(76931),o=r(46729),a=r(55855),s=r(69817),n=r(3799),l=r(58350),c=r(86955);class d{constructor(e){this.screenLength=(0,i.Lz)(e.screenLength),this.minWorldLength=e.minWorldLength??0,this.maxWorldLength=e.maxWorldLength??1/0}}function u(e,t){const r=e.vertex;t.hasVerticalOffset?(p(r),t.hasScreenSizePerspective&&(e.include(s.Y6),(0,s.OH)(r),(0,n.yu)(e.vertex,t)),r.code.add(c.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?c.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:c.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?c.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:c.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(c.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const f=(0,a.vt)();function p(e){e.uniforms.add(new l.E("verticalOffset",(e,t)=>{const{minWorldLength:r,maxWorldLength:i,screenLength:a}=e.verticalOffset,s=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),n=t.camera.pixelRatio||1;return(0,o.hZ)(f,a*n,s,r,i)}))}},98720(e,t,r){r.d(t,{K:()=>a});var i=r(67582),o=r(86955);function a(e){e.uniforms.add(new i.o("alignPixelEnabled",e=>e.alignPixelEnabled)),e.code.add(o.H`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),e.code.add(o.H`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}},40318(e,t,r){r.d(t,{Q:()=>d});var i=r(25530),o=r(69817),a=r(3799),s=r(51596),n=r(23148),l=r(21390),c=r(86955);function d(e,t){const r=e.vertex;e.include(o.Y6),e.attributes.add("position","vec3"),e.vertex.inputs.add("position",()=>"position"),e.attributes.add("normal","vec3"),t.hasVertexCenterOffset?e.attributes.add("centerOffset","vec3"):r.constants.add("centerOffset","vec3",[0,0,0]),e.attributes.add("groundDistance","float"),(0,a.NB)(r,t),(0,a.yu)(r,t),r.uniforms.add(new s.I("viewport",e=>e.camera.fullViewport),new l.m("polygonOffset",e=>e.shaderPolygonOffset),new n.U("aboveGround",e=>e.camera.aboveGround?1:-1)),t.hasVerticalOffset&&(0,i.VQ)(r),r.code.add(c.H`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),r.code.add(c.H`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = aboveGround;
}
float groundRelative = aboveGround * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),t.draped&&!t.hasVerticalOffset||(0,a.S7)(r),t.draped||(r.uniforms.add(new n.U("perDistancePixelRatio",e=>Math.tan(e.camera.fovY/2)/(e.camera.fullViewport[2]/2))),r.code.add(c.H`
      void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
        float distanceToCamera = length(posView);

        // Compute offset in world units for a half pixel shift
        float pixelOffset = distanceToCamera * perDistancePixelRatio * ${c.H.float(.5)};

        // Apply offset along normal in the direction away from the ground surface
        vec3 modelOffset = normalModel * aboveGround * pixelOffset;

        // Apply the same offset also on the view space position
        vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

        posModel += modelOffset;
        posView += viewOffset;
      }
    `)),t.screenCenterOffsetUnitsEnabled&&(0,a.Nz)(r),t.hasScreenSizePerspective&&(0,o.OH)(r),r.code.add(c.H`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      float pointGroundDistance = groundDistance;
      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${t.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${t.hasScreenSizePerspective&&(t.hasVerticalOffset||t.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${t.hasVerticalOffset?t.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${t.hasVerticalOffset?c.H`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${t.screenCenterOffsetUnitsEnabled?"":c.H`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${t.screenCenterOffsetUnitsEnabled?t.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${t.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}},65058(e,t,r){r.d(t,{E:()=>n,l:()=>l});var i=r(19555),o=r(72745),a=r(28450),s=r(86955);function n(e){e.uniforms.add(new a.E("zProjectionMap",e=>l(e.camera))),e.code.add(s.H`float linearizeDepth(float depth, vec2 zProjectionConstants) {
float depthNdc = depth * 2.0 - 1.0;
return -(zProjectionConstants[0] / (depthNdc + zProjectionConstants[1] + 1e-7));
}
float linearizeDepth(float depth) {
return linearizeDepth(depth, zProjectionMap);
}`),e.code.add(s.H`float delinearizeDepth(float linearDepth) {
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
float depthNdc = (-c1/linearDepth) - c2 - 1e-7;
float depthNonlinear01 = (depthNdc + 1.0 ) / 2.0;
return depthNonlinear01;
}`),e.code.add(s.H`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
return texelFetch(depthTexture, iuv, 0).r;
}`),e.code.add(s.H`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function l(e){const t=e.projectionMatrix;return(0,i.hZ)(c,t[14],t[10])}const c=(0,o.vt)()},27963(e,t,r){r.d(t,{Ir:()=>d});var i=r(19555),o=r(72745),a=r(46729),s=r(55855),n=r(28450),l=r(51596),c=r(86955);function d(e){e.fragment.uniforms.add(new l.I("projInfo",e=>function(e){const t=e.projectionMatrix;return 0===t[11]?(0,a.hZ)(u,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,a.hZ)(u,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(e.camera))),e.fragment.uniforms.add(new n.E("zScale",e=>0===e.camera.projectionMatrix[11]?(0,i.hZ)(f,0,1):(0,i.hZ)(f,1,0))),e.fragment.code.add(c.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const u=(0,s.vt)();const f=(0,o.vt)()},67582(e,t,r){r.d(t,{o:()=>o});var i=r(87003);class o extends i.n{constructor(e,t){super(e,"bool",0,(r,i)=>r.setUniform1b(e,t(i)))}}},43425(e,t,r){r.d(t,{X:()=>o});var i=r(87003);class o extends i.n{constructor(e,t,r){super(e,"mat4",1,(i,o,a)=>i.setUniformMatrix4fv(e,t(o,a),r))}}},71799(e,t,r){r.d(t,{i:()=>h});var i=r(6326),o=r(68134),a=r(64385),s=r(37127),n=r(36451),l=r(80069),c=r(12418),d=r(59246),u=r(57162);let f=class extends d.w{constructor(){super(...arguments),this.shader=new c.r(l.a,()=>r.e(81345).then(r.bind(r,81345))),this.ignoreUnused=!0}initializePipeline(){return(0,u.Ey)({colorWrite:u.kn})}};f=(0,i.Cg)([(0,a.$K)("esri.views.3d.webgl-engine.effects.focusArea.FocusAreaColorTechnique")],f);r(93345);let p=class extends n.A{constructor(e){super({...e,view:e.focusAreasView.view}),this.consumes={required:[s.OG.FOCUSAREA_COLOR,s.OG.FOCUSAREA]},this.produces=s.OG.FOCUSAREA_COLOR,this._fadeDirection=0,this._passParameters=new l.F}fadeOut(e){this.removeAllHandles(),this._startTime=null,this._fadeDirection=1,this.addHandles((0,o.wB)(()=>this._passParameters.fadeFactor.value,t=>{0===t&&(this.removeAllHandles(),e())})),this.requestRender(2)}render(e){const t=e.find(e=>{let{name:t}=e;return t===this.produces}),r=this.techniques.getCompiled(f);if(!r)return this.requestRender(1),t;const i=this.focusAreasView.style,o=this.bindParameters,a=o.camera,n=a.fullViewport[2],l=a.fullViewport[3];this._startTime??=this.view.stage?.renderer.renderContext.time;const c=this.view.qualitySettings.fadeDuration,d=c>0?Math.min(c,this.view.stage?.renderer.renderContext.time-this._startTime)/c:1,u=e.find(e=>{let{name:t}=e;return t===s.OG.FOCUSAREA}),p=this.fboCache.acquire(n,l,this.produces),v=this.renderingContext;return v.bindFramebuffer(p.fbo),this._passParameters.color=t.getTexture(),this._passParameters.focusArea=u.getTexture(),this._passParameters.effect=h[i],this._passParameters.fadeFactor.value=0===this._fadeDirection?d:1-d,v.bindTechnique(r,o,this._passParameters),v.screen.draw(),p.attachDepth(t.getAttachment(33306)),d<1&&this.requestRender(2),p}};(0,i.Cg)([(0,a.MZ)()],p.prototype,"consumes",void 0),(0,i.Cg)([(0,a.MZ)()],p.prototype,"produces",void 0),(0,i.Cg)([(0,a.MZ)({constructOnly:!0})],p.prototype,"focusAreasView",void 0),p=(0,i.Cg)([(0,a.$K)("esri.views.3d.webgl-engine.effects.focusArea.FocusAreaColorNode")],p);const h={bright:0,dark:1}},75803(e,t,r){r.d(t,{NV:()=>c,m8:()=>n});var i=r(30726),o=r(50346),a=r(59696),s=r(31432);class n extends a.A{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this.updateTexture(e.textureId),this._acquire(e.normalTextureId,e=>this._textureNormal=e),this._acquire(e.emissiveTextureId,e=>this._textureEmissive=e),this._acquire(e.occlusionTextureId,e=>this._textureOcclusion=e),this._acquire(e.metallicRoughnessTextureId,e=>this._textureMetallicRoughness=e)}dispose(){super.dispose(),this._texture=(0,i.Gz)(this._texture),this._textureNormal=(0,i.Gz)(this._textureNormal),this._textureEmissive=(0,i.Gz)(this._textureEmissive),this._textureOcclusion=(0,i.Gz)(this._textureOcclusion),this._textureMetallicRoughness=(0,i.Gz)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?2:1}get textureBindParameters(){return new c(this._texture?.texture??null,this._textureNormal?.texture??null,this._textureEmissive?.texture??null,this._textureOcclusion?.texture??null,this._textureMetallicRoughness?.texture??null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,i.Gz)(this._texture),this._acquire(e,e=>this._texture=e))}_acquire(e,t){if(null==e)return void t(null);const r=this._textures.acquire(e);if((0,o.$X)(r))return++this._numLoading,void r.then(e=>{if(this._disposed)return(0,i.Gz)(e),void t(null);t(e)}).finally(()=>--this._numLoading);t(r)}}class l extends s.Y{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;super(),this.textureEmissive=e}}class c extends l{constructor(e,t,r,i,o,a,s){super(r),this.texture=e,this.textureNormal=t,this.textureOcclusion=i,this.textureMetallicRoughness=o,this.scale=a,this.normalTextureTransformMatrix=s}}},25275(e,t,r){r.d(t,{R:()=>N});var i=r(15941),o=r(86300),a=r(44680),s=r(34761),n=r(13191),l=r(19555),c=r(72745),d=r(98268),u=r(9392),f=r(55855),p=r(2413),h=r(88105),v=r(63048),x=r(22955),g=r(34981),m=(r(40318),r(75803)),C=r(45463),O=r(12028),S=r(86994),w=r(52757),z=r(99362),b=r(19061),y=r(6326),P=r(64385),A=r(57481),V=r(48549),_=r(12418),F=r(59246),E=r(61785),D=r(60322),H=r(56840),R=r(93345),U=r(57162);let T=class extends F.w{constructor(e,t){super(e,t,(0,A.U)(I).concat((0,A.U)(M(t)))),this.shader=new _.r(b.H,()=>r.e(60271).then(r.bind(r,60271))),this.ignoreUnused=!0,this.primitiveType=R.WR.TRIANGLE_STRIP}initializePipeline(e){const{draped:t,output:r,depthTestEnabled:i}=e,o=(0,g._$)(r),a=i&&!t&&!o&&!(10===r);return(0,U.Ey)({blending:(0,D.Yf)(r,!0),depthTest:i&&!t?{func:515}:null,depthWrite:a?U.Uy:null,colorWrite:U.kn,polygonOffset:(0,H.s)(e)})}};T=(0,y.Cg)([(0,P.$K)("esri.views.3d.webgl-engine.shaders.HUDMaterialTechnique")],T);const I=(0,V.BP)().vec2u8("uv0",{glNormalized:!0});function M(e){let t=(0,V.BP)().vec3f("position").vec3f("normal").f32("groundDistance");return e.hasVertexCenterOffset&&(t=t.vec3f("centerOffset")),e.hasVertexColor&&(t=t.vec4u8("color",{glNormalized:!0})),e.hasVertexSize&&(t=t.vec2f("size")),e.hasVertexRotation&&(t=t.f32("rotation")),(e.hasVVColor||e.hasVVSize)&&(t=t.vec4f("featureAttribute")),e.hasVertexUVi&&(t=t.vec4i16("uvi")),(0,E.E)()?t.vec4u8("olidColor"):t}var j=r(6485),L=r(92656);class B extends L.E{constructor(e,t){super(),this.spherical=e,this.polygonOffset=0,this.enableOITOffset=!1,this.screenCenterOffsetUnitsEnabled=!1,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.occludedFragmentFade=!1,this.hasOcclusionTexture=!1,this.hasFocusAreaStyle=!1,this.hasVertexColor=!0,this.hasVertexSize=!0,this.hasVertexRotation=!0,this.hasVertexUVi=!0,this.hasVertexCenterOffset=!0,this.olidColorInstanced=!1,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=!0,this.hasVVInstancing=!1,this.snowCover=!1,this.transparentOccluded=t}}(0,y.Cg)([(0,j.W)()],B.prototype,"transparentOccluded",void 0),(0,y.Cg)([(0,j.W)({count:5})],B.prototype,"polygonOffset",void 0),(0,y.Cg)([(0,j.W)()],B.prototype,"enableOITOffset",void 0),(0,y.Cg)([(0,j.W)()],B.prototype,"screenCenterOffsetUnitsEnabled",void 0),(0,y.Cg)([(0,j.W)()],B.prototype,"signedDistanceFieldEnabled",void 0),(0,y.Cg)([(0,j.W)()],B.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),(0,y.Cg)([(0,j.W)()],B.prototype,"hasVVSize",void 0),(0,y.Cg)([(0,j.W)()],B.prototype,"hasVVColor",void 0),(0,y.Cg)([(0,j.W)()],B.prototype,"hasVerticalOffset",void 0),(0,y.Cg)([(0,j.W)()],B.prototype,"hasScreenSizePerspective",void 0),(0,y.Cg)([(0,j.W)()],B.prototype,"hasRotation",void 0),(0,y.Cg)([(0,j.W)()],B.prototype,"debugDrawLabelBorder",void 0),(0,y.Cg)([(0,j.W)()],B.prototype,"depthTestEnabled",void 0),(0,y.Cg)([(0,j.W)()],B.prototype,"pixelSnappingEnabled",void 0),(0,y.Cg)([(0,j.W)()],B.prototype,"draped",void 0),(0,y.Cg)([(0,j.W)()],B.prototype,"occludedFragmentFade",void 0),(0,y.Cg)([(0,j.W)()],B.prototype,"hasOcclusionTexture",void 0),(0,y.Cg)([(0,j.W)()],B.prototype,"hasFocusAreaStyle",void 0),(0,y.Cg)([(0,j.W)()],B.prototype,"hasVertexColor",void 0),(0,y.Cg)([(0,j.W)()],B.prototype,"hasVertexSize",void 0),(0,y.Cg)([(0,j.W)()],B.prototype,"hasVertexRotation",void 0),(0,y.Cg)([(0,j.W)()],B.prototype,"hasVertexUVi",void 0),(0,y.Cg)([(0,j.W)()],B.prototype,"hasVertexCenterOffset",void 0);var W=r(75569);class N extends C.i{constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];super(e,ue),this.produces=new Map([[12,e=>(0,g.Lc)(e)&&!this.parameters.drawAsLabel&&!this._configuration.transparentOccluded],[13,e=>(0,g.Lc)(e)&&!this.parameters.drawAsLabel&&this._configuration.transparentOccluded],[14,e=>(0,g.Lc)(e)&&this.parameters.drawAsLabel],[18,e=>this.parameters.draped&&(0,g.Lc)(e)]]),this._visible=!0,this._configuration=new B(t,r)}updateConfiguration(e){super.updateConfiguration(e);const{parameters:t,_configuration:r}=this,i=t.draped;r.enableOITOffset=e.enableOITOffset,r.hasSlicePlane=this.parameters.hasSlicePlane,r.hasVerticalOffset=!!this.parameters.verticalOffset,r.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,r.screenCenterOffsetUnitsEnabled="screen"===this.parameters.centerOffsetUnits,r.polygonOffset=this.parameters.polygonOffset,r.draped=i,r.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,r.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,r.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,r.hasRotation=this.parameters.hasRotation,r.hasVVSize=!!this.parameters.vvSize,r.hasVVColor=!!this.parameters.vvColor,r.occludedFragmentFade=!i&&!!this.parameters.occludedFragmentOpacity,r.hasFocusAreaStyle=null!=this.parameters.focusAreaStyle,r.depthTestEnabled=this.parameters.depthEnabled,r.hasVertexColor=this.parameters.hasVertexColor,r.hasVertexSize=this.parameters.hasVertexSize,r.hasVertexRotation=this.parameters.hasVertexRotation,r.hasVertexUVi=this.parameters.hasVertexUVi,r.hasVertexCenterOffset=this.parameters.hasVertexCenterOffset,(0,g._o)(e.output)&&(r.debugDrawLabelBorder=!!x.b.LABELS_SHOW_BORDER),r.hasOcclusionTexture=!t.drawAsLabel&&r.transparentOccluded&&(0,g.ZH)(e.output)}intersect(e,t,r,i,a,n){const{options:{selectionMode:l,hud:c,excludeLabels:p},point:h,camera:v}=r,{parameters:x}=this;if(!l||!c||p&&x.isLabel||!e.visible||!h||!v)return;const g=e.attributes.get("featureAttribute"),m=null==g?null:(0,f.ci)(g.data,ae),{scaleX:C,scaleY:O}=pe(m,x,v.pixelRatio),w=e.attributes.get("position"),z=e.attributes.get("size"),y=e.attributes.get("normal"),P=e.attributes.get("rotation"),A=e.attributes.get("centerOffset"),V=this.parameters.size;(0,S.vA)(w.size>=3);const _="screen"===this.parameters.centerOffsetUnits;for(let f=0;f<w.data.length/w.size;f++){const e=f*w.size;if((0,d.hZ)(k,w.data[e],w.data[e+1],w.data[e+2]),(0,d.Z0)(k,k,t),(0,d.Z0)(k,k,v.viewMatrix),A){const e=f*A.size;(0,d.hZ)(ie,A.data[e],A.data[e+1],A.data[e+2])}else(0,d.hZ)(ie,0,0,0);if(!_&&(k[0]+=ie[0],k[1]+=ie[1],0!==ie[2])){const e=ie[2];(0,d.S8)(ie,k),(0,d.Re)(k,k,(0,d.hs)(ie,ie,e))}const i=f*y.size;(0,d.hZ)(Y,y.data[i],y.data[i+1],y.data[i+2]),(0,d.ei)(Y,Y,(0,o.z0)(te,t));const{normal:a,cosAngle:l}=$(Y,v,se),c=he(this.parameters,k,l,v,Z);if((0,d.Ln)(k,k,a,c),v.applyProjection(k,Q),Q[0]>-1){if(_&&(ie[0]||ie[1])&&(Q[0]+=ie[0]*v.pixelRatio,0!==ie[1]&&(Q[1]+=Z.alignmentEvaluator.apply(ie[1])*v.pixelRatio),v.unapplyProjection(Q,k)),Q[0]+=this.parameters.screenOffset[0]*v.pixelRatio,Q[1]+=this.parameters.screenOffset[1]*v.pixelRatio,Q[0]=Math.floor(Q[0]),Q[1]=Math.floor(Q[1]),ce[0]=V[0],ce[1]=V[1],null!=z){const e=f*z.size;ce[0]*=z.data[e],ce[1]*=z.data[e+1]}Z.evaluator.applyVec2(ce,ce);const e=ne*v.pixelRatio;let t=0;x.textureIsSignedDistanceField&&(t=Math.min(x.outlineSize,.5*ce[0])*v.pixelRatio/2),ce[0]*=C,ce[1]*=O;const i=x.rotation+(null!=P?P.data[f*P.size]:0),o=(0,b.a)(x);if(q(h,Q[0],Q[1],ce,e,t,i,x,o)){const e=r.ray;if((0,d.Z0)(K,k,(0,s.B8)(re,v.viewMatrix)),Q[0]=h[0],Q[1]=h[1],v.unprojectFromRenderScreen(Q,k)){const t=(0,u.vt)();(0,d.C)(t,e.direction);const r=1/(0,d.Bw)(t);(0,d.hs)(t,t,r);const i=(0,d.Io)(e.origin,k)*r;n(i,i,t,-1,K)}}}}}intersectDraped(e,t,r,i,o){const a=e.attributes.get("position"),s=e.attributes.get("size"),n=e.attributes.get("rotation"),l=this.parameters,c=l.size,d=e.attributes.get("featureAttribute"),u=null==d?null:(0,f.ci)(d.data,ae),{scaleX:p,scaleY:h}=pe(u,l,e.screenToWorldRatio),v=le*e.screenToWorldRatio;for(let f=0;f<a.data.length/a.size;f++){const t=f*a.size,d=a.data[t],u=a.data[t+1];if(ce[0]=c[0],ce[1]=c[1],null!=s){const e=f*s.size;ce[0]*=s.data[e],ce[1]*=s.data[e+1]}let x=0;l.textureIsSignedDistanceField&&(x=Math.min(l.outlineSize,.5*ce[0])*e.screenToWorldRatio/2),ce[0]*=p,ce[1]*=h;const g=l.rotation+(null!=n?n.data[f*n.size]:0),m=(0,b.a)(l);q(r,d,u,ce,v,x,g,l,m)&&i(o.distance,o.renderDistance,o.normal,-1)}}createBufferWriter(){return new fe(this.parameters)}applyShaderOffsets(e,t,r,i,a,s,n,l){(0,d.ei)(X,r,(0,o.z0)(te,i));const c=$(X,n,se),u=function(e,t){const r=.5*t.computeRenderPixelSizeAtDist(e);return(t.aboveGround?1:-1)*r}((0,d.Bw)(t),n),f=he(this.parameters,t,c.cosAngle,n,l);(0,d.Ln)(t,t,c.normal,f+u),(0,d.Ln)(e,e,X,f+u);const p=s+f;this._applyPolygonOffsetView(t,c,p,n,t),this._applyCenterOffsetView(t,a,t)}applyShaderOffsetsNDC(e,t,r,i,o,a){return this._applyCenterOffsetNDC(e,t,i,o),null!=a&&(0,d.C)(a,o),this._applyPolygonOffsetNDC(o,r,i,o),o}_applyPolygonOffsetView(e,t,r,o,a){const s=o.aboveGround?1:-1;let n=Math.sign(r);0===n&&(n=s);const l=s*n;if(this.parameters.shaderPolygonOffset<=0)return(0,d.C)(a,e);const c=(0,i.qE)(Math.abs(t.cosAngle),.01,1),u=1-Math.sqrt(1-c*c)/c/o.viewport[2];return(0,d.hs)(a,e,l>0?u:1/u),a}_applyCenterOffsetView(e,t,r){const i="screen"!==this.parameters.centerOffsetUnits;return r!==e&&(0,d.C)(r,e),i&&(r[0]+=t[0],r[1]+=t[1],t[2]&&((0,d.S8)(Y,r),(0,d.jb)(r,r,(0,d.hs)(Y,Y,t[2])))),r}_applyCenterOffsetNDC(e,t,r,i){const o="screen"!==this.parameters.centerOffsetUnits;return i!==e&&(0,d.C)(i,e),o||(i[0]+=t[0]/r.fullWidth*2,i[1]+=t[1]/r.fullHeight*2),i}_applyPolygonOffsetNDC(e,t,r,i){const o=this.parameters.shaderPolygonOffset;if(e!==i&&(0,d.C)(i,e),o){const e=r.aboveGround?1:-1,a=e*Math.sign(t);i[2]-=(a||e)*o}return i}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:t,outlineColor:r}=this.parameters,i=e[3]>=W.Q||t>=W.Q&&r[3]>=W.Q;return this._visible&&i}createGLMaterial(e){return new G(e)}calculateRelativeScreenBounds(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,p.vt)();return function(e,t,r,i){i[0]=e.anchorPosition[0]*-t[0]+e.screenOffset[0]*r,i[1]=e.anchorPosition[1]*-t[1]+e.screenOffset[1]*r}(this.parameters,e,t,r),r[2]=r[0]+e[0],r[3]=r[1]+e[1],r}}class G extends m.m8{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(T,e)}}function $(e,t,r){return(0,d.Z0)(r.normal,e,t.viewInverseTransposeMatrix),r.cosAngle=(0,d.Om)(r.normal,de),r}function q(e,t,r,o,a,s,n,c,d){let u=t-a-o[0]*d[0],f=u+o[0]+2*a,p=r-a-o[1]*d[1],h=p+o[1]+2*a;const v=c.distanceFieldBoundingBox;return c.textureIsSignedDistanceField&&null!=v&&(u+=o[0]*v[0],p+=o[1]*v[1],f-=o[0]*(1-v[2]),h-=o[1]*(1-v[3]),u-=s,f+=s,p-=s,h+=s),(0,l.hZ)(ee,t,r),(0,l.e$)(J,e,ee,(0,i.kU)(n)),J[0]>u&&J[0]<f&&J[1]>p&&J[1]<h}const Z=new O.fc,k=(0,u.vt)(),Y=(0,u.vt)(),Q=(0,f.vt)(),X=(0,u.vt)(),K=(0,u.vt)(),J=(0,c.vt)(),ee=(0,c.vt)(),te=(0,a.vt)(),re=(0,n.vt)(),ie=(0,u.vt)(),oe=(0,u.vt)(),ae=(0,f.vt)(),se={normal:(0,u.vt)(),cosAngle:0},ne=1,le=2,ce=(0,c.fA)(0,0),de=(0,u.fA)(0,0,1);class ue extends m.NV{constructor(){super(...arguments),this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1,this.color=f.Un,this.size=c.Un,this.polygonOffset=0,this.anchorPosition=(0,c.fA)(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=f.Un,this.outlineSize=0,this.distanceFieldBoundingBox=(0,f.vt)(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.hasVertexColor=!1,this.hasVertexSize=!1,this.hasVertexRotation=!1,this.hasVertexUVi=!1,this.hasVertexCenterOffset=!1,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.focusAreaStyle=null,this.draped=!1,this.isLabel=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}class fe{constructor(e){this.baseInstanceLayout=I,this.layout=M(e)}elementCount(e){return e.get("position").indices.length}elementCountBaseInstance(e){return e.get("uv0").indices.length}write(e,t,r,i,o){if(null==o)return;const{buffer:a,offset:s}=o,{position:n,normal:l,color:c,size:d,rotation:u,centerOffset:f,groundDistance:p,featureAttribute:v,uvi:x}=a;(0,w.Hk)(r.get("position"),e,n,s),(0,w.p1)(r.get("normal"),t,l,s);const g=r.get("position").indices.length;if(x){const e=r.get("uvi")?.data;if(e&&e.length>=4){const[t,r,i,o]=e;for(let e=0;e<g;++e){const a=s+e;x.setValues(a,t,r,i,o)}}}if(c&&(0,w.tb)(r.get("color"),4,c,s),d&&(0,w.Ue)(r.get("size"),d,s),u&&(0,w.uO)(r.get("rotation"),u,s),f&&(r.get("centerOffset")?(0,w.NC)(r.get("centerOffset"),f,s):(0,w.Hv)(f,s,g)),r.get("groundDistance")?(0,w.uO)(r.get("groundDistance"),p,s):(0,w.Hv)(p,s,g),v&&(r.get("featureAttribute")?(0,w.Ut)(r.get("featureAttribute"),v,s):(0,w.Hv)(v,s,g)),null!=i){const e=r.get("position")?.indices;if(e){const t=e.length,r=a.getField("olidColor",h.XP);(0,w.vx)(i,r,t,s)}}}writeBaseInstance(e,t){const{uv0:r}=t;(0,w.Ue)(e.get("uv0"),r,0)}}function pe(e,t,r){return null==e||null==t.vvSize?{scaleX:r,scaleY:r}:((0,v.VC)(oe,t,e),{scaleX:oe[0]*r,scaleY:oe[1]*r})}function he(e,t,r,i,o){if(!e.verticalOffset?.screenLength){const i=(0,d.Bw)(t);return o.update(r,i,e.screenSizePerspective,e.screenSizePerspectiveMinPixelReferenceSize,e.screenSizePerspectiveAlignment,null),0}const a=(0,d.Bw)(t),s=e.screenSizePerspectiveAlignment??e.screenSizePerspective,n=(0,z.kE)(i,a,e.verticalOffset,r,s,e.screenSizePerspectiveMinPixelReferenceSize);return o.update(r,a,e.screenSizePerspective,e.screenSizePerspectiveMinPixelReferenceSize,e.screenSizePerspectiveAlignment,null),n}}}]);
//# sourceMappingURL=45570.2b3b435b.chunk.js.map