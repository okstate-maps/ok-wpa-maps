"use strict";(globalThis.webpackChunkok_wpa_maps||=[]).push([[55761],{68745(e,t,a){a.d(t,{b:()=>B});var o=a(62026),i=a(34981),r=a(48962),n=a(59395),l=a(35771),s=a(45937),c=a(85793),d=a(59046),u=a(22148),h=a(97808),m=a(54478),p=a(55386),f=a(25530),v=a(15710),g=a(72937),x=a(9365),b=a(5218),y=a(43557),w=a(27920),M=a(42953),S=a(26719),C=a(51740),T=a(55696),I=a(66763),_=a(37516),z=a(77904),D=a(3799),F=a(5517),H=a(58350),P=a(21390),j=a(86955),W=a(70367),R=a(85114),O=a(99362),N=a(24176),G=a(2687),E=a(75569);function B(e){const t=new G.N5,{attributes:a,vertex:B,fragment:L,varyings:V}=t,{output:A,normalType:U,offsetBackfaces:k,spherical:$,snowCover:q,pbrMode:Z,textureAlphaPremultiplied:Y,instancedDoublePrecision:J,hasVertexColors:K,hasVertexTangents:X,hasColorTexture:Q,hasNormalTexture:ee,hasNormalTextureTransform:te,hasColorTextureTransform:ae}=e;if((0,D.NB)(B,e),a.add("position","vec3"),B.inputs.add("position",()=>"position"),V.add("vpos","vec3",{invariant:!0}),t.include(I.A,e),t.include(s.B,e),t.include(f.Ge,e),t.include(T.q2,e),!(0,i._o)(A))return t.include(v.E,e),t;t.include(T.Sx,e),t.include(T.MU,e),t.include(T.O1,e),t.include(T.QM,e),(0,D.yu)(B,e),t.include(d.Y,e),t.include(n.d);const oe=0===U||1===U;return oe&&k&&t.include(o.M),t.include(g.J,e),t.include(p.Mh,e),t.include(l.v,e),V.add("vPositionLocal","vec3"),t.include(h.U,e),t.include(u.K,e),t.include(m.c,e),B.uniforms.add(new H.E("externalColor",e=>e.externalColor,{supportsNaN:!0})),V.add("vcolorExt","vec4"),B.include(c.WD),B.include(c.oF),t.include(J?C.QH:C.LA,e),B.main.add(j.H`
    forwardVertexColor();

    MaskedColor maskedColor =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColor.color;
    forwardColorMixMode(maskedColor.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${(0,j.If)(oe,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${(0,j.If)(X,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${(0,j.If)(oe&&k,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${j.H.int(O.Um.ignore)} && vcolorExt.a < ${j.H.float(E.Q)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadowMap();
  `),L.include(b.kA,e),L.include(x.n,e),t.include(_.S,e),L.include(r.HQ,e),t.include(N.D,e),(0,D.yu)(L,e),L.uniforms.add(B.uniforms.get("localOrigin"),new F.t("ambient",e=>e.ambient),new F.t("diffuse",e=>e.diffuse),new P.m("opacity",e=>e.opacity),new P.m("layerOpacity",e=>e.layerOpacity)),Q&&L.uniforms.add(new W.N("tex",e=>e.texture)),t.include(S._,e),L.include(M.c,e),L.include(z.N),t.include(w.r,e),L.include(R.b,e),(0,b.a8)(L),(0,b.eU)(L),(0,y.O4)(L),L.main.add(j.H`
    discardBySlice(vpos);
    ${Q?j.H`
            vec4 texColor = texture(tex, ${ae?"colorUV":"vuv0"});
            ${(0,j.If)(Y,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:j.H`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${2===U?j.H`vec3 normal = screenDerivativeNormal(vPositionLocal);`:j.H`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${(0,j.If)(K,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${(0,j.If)(K,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${ee?`mat3 tangentSpace = computeTangentSpace(${X?"normal":"normal, vpos, vuv0"});\n           vec3 shadingNormal = computeTextureNormal(tangentSpace, ${te?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${$?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${(0,j.If)(q,j.H`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${1===Z||2===Z?j.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${(0,j.If)(q,"mrr = applySnowToMRR(mrr, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:j.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${(0,j.If)(q,", snow")});
  `),t}const L=Object.freeze(Object.defineProperty({__proto__:null,build:B},Symbol.toStringTag,{value:"Module"}));a.d(t,["D",0,L])},36893(e,t,a){a.d(t,{G:()=>g,c:()=>x});var o=a(73398),i=a(32491),r=a(94759),n=a(43557),l=a(14515),s=a(27963),c=a(21390),d=a(86955),u=a(23687),h=a(4653),m=a(70367),p=a(1652),f=(a(93345),a(31432)),v=a(2687);class g extends f.Y{constructor(){super(...arguments),this.projScale=1,this.scaleGlobalIllumination=1,this.accumulatedFrames=0,this.temporalSampleFrame=0,this.rayMarchMinReach=.15,this.rayMarchMaxReach=.5,this.rayMarchWorldReach=25,this.rayMarchMinReachEmissionWeight=1,this.rayMarchMaxReachEmissionWeight=1,this.rayMarchMaxSteps=16,this.colorBleedWeight=.15}}function x(e){const t=new v.N5,a=t.fragment;return t.include(o.c),t.include(s.Ir),(0,n.Gc)(a),a.include(i.V),a.include(r.C),a.include(p.R),t.include(l.O,e),a.uniforms.add(new m.N("normalMap",e=>e.normalTexture),new m.N("depthMap",e=>e.depthTexture),new h.x("lastFrameColorTexture",e=>e.reprojection.lastFrameColor?.getTexture()),new h.x("lastFrameDepthTexture",e=>e.reprojection.lastFrameDepth?.attachment),new h.x("lastFrameGlobalIlluminationTexture",e=>e.globalIllumination?.getTexture()),new h.x("lastFrameGlobalIlluminationWeightTexture",e=>e.globalIllumination?.getTexture(36065)),new u.F("reprojectionViewMatrix",e=>e.reprojection.viewMatrix),new u.F("view",e=>e.camera.viewMatrix),new c.m("accumulatedFrames",e=>e.accumulatedFrames),new c.m("temporalSampleFrame",e=>e.temporalSampleFrame),new c.m("scaleGlobalIllumination",e=>e.scaleGlobalIllumination)),a.uniforms.add(new c.m("rayMarchMinReach",e=>e.rayMarchMinReach),new c.m("rayMarchMaxReach",e=>e.rayMarchMaxReach),new c.m("rayMarchWorldReach",e=>e.rayMarchWorldReach),new c.m("rayMarchMinReachEmissionWeight",e=>e.rayMarchMinReachEmissionWeight),new c.m("rayMarchMaxReachEmissionWeight",e=>e.rayMarchMaxReachEmissionWeight),new c.m("rayMarchMaxSteps",e=>e.rayMarchMaxSteps),new c.m("colorBleedWeight",e=>e.colorBleedWeight)),e.hasEmission&&a.uniforms.add(new h.x("lastFrameEmissionTexture",e=>e.reprojection.lastFrameEmission?.attachment)),a.code.add(d.H`
    float computeIdleColorBlendWeight(float accumulatedFrames) {
      float idleColorBlendProgress = clamp(
        accumulatedFrames / ${d.H.float(40)},
        0.0,
        1.0
      );
      return mix(
        ${d.H.float(.012)},
        ${d.H.float(.008)},
        idleColorBlendProgress
      );
    }

    float computeIdleOcclusionBlendWeight(float accumulatedFrames) {
      float idleOcclusionBlendProgress = clamp(
        accumulatedFrames / ${d.H.float(60)},
        0.0,
        1.0
      );
      return mix(
        ${d.H.float(.095)},
        ${d.H.float(.008)},
        pow(idleOcclusionBlendProgress, ${d.H.float(2)})
      );
    }

    bool isEdgeDepth(float centerDepth, vec2 sampleUv) {
      vec2 texelSize = 1.0 / vec2(textureSize(depthMap, 0));
      float depthLeft = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(-texelSize.x, 0.0)));
      float depthRight = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(texelSize.x, 0.0)));
      float depthUp = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(0.0, texelSize.y)));
      float depthDown = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(0.0, -texelSize.y)));

      float maxDifference = max(max(abs(centerDepth - depthLeft), abs(centerDepth - depthRight)), max(abs(centerDepth - depthUp), abs(centerDepth - depthDown)));

      return abs(maxDifference / centerDepth) > 0.01;
    }

    vec3 sampleCosineHemisphere(vec2 u) {
      float phi = 6.28318530718 * u.x;
      float radius = sqrt(u.y);
      float x = radius * cos(phi);
      float y = radius * sin(phi);
      float z = sqrt(max(0.0, 1.0 - u.y));

      return vec3(x, y, z);
    }

    mat3 basisFromNormal(vec3 n) {
      vec3 up = abs(n.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
      vec3 tangent = normalize(cross(up, n));
      vec3 bitangent = cross(n, tangent);

      return mat3(tangent, bitangent, n);
    }

    float blueNoiseDitherValue(vec2 pixel, float frame, vec2 axis, float phase) {
      float scroll = 5.588238 * mod(frame, 512.0);
      vec2 p = pixel + vec2(scroll);
      vec2 rotated = vec2(
        axis.x * p.x + axis.y * p.y,
        -axis.y * p.x + axis.x * p.y
      );

      return fract(52.9829189 * fract(0.06711056 * rotated.x + 0.00583715 * rotated.y + phase));
    }

    vec4 blueNoiseDither(vec2 pixel, float frame) {
      vec4 value = vec4(
        blueNoiseDitherValue(pixel, frame, vec2(0.9659258, 0.25881904), 0.0),
        blueNoiseDitherValue(pixel, frame, vec2(0.70710677, 0.70710677), 0.17),
        blueNoiseDitherValue(pixel, frame, vec2(0.25881904, 0.9659258), 0.37),
        blueNoiseDitherValue(pixel, frame, vec2(1.0, 0.0), 0.61)
      );

      return value * 2.0 - 1.0;
    }
  `),t.outputs.add("fragGlobalIllumination","vec4",0),t.outputs.add("fragWeight","float",1),a.main.add(d.H`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragGlobalIllumination = vec4(0.0, 0.0, 0.0, 1.0);
      fragWeight = 0.0;
      return;
    }

    // Get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 normal4 = texelFetch(normalMap, iuv, 0);
    if (normal4.a != 1.0) {
      fragGlobalIllumination = vec4(0.0, 0.0, 0.0, 1.0);
      fragWeight = 0.0;
      return;
    }
    vec3 normal = normalize(normal4.xyz * 2.0 - 1.0);

    // Reconstruct view space position of current fragment
    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(uv * vec2(textureSize(normalMap, 0)), currentPixelDepth);
    vec4 viewPos = vec4(currentPixelPos, 1.0);

    // Reproject current view position to last frame
    vec4 reprojectedViewPos = reprojectionViewMatrix * viewPos;
    vec4 reprojectedCoordinate = applyProjectionMat(proj, reprojectedViewPos.xyz);

    // Read last frame reprojected depth and GI history
    float lastFrameDepthViewPos = -linearDepthFromTextureLastFrame(lastFrameDepthTexture, reprojectedCoordinate.xy);
    vec4 lastFrameGlobalIllumination = texture(lastFrameGlobalIlluminationTexture, reprojectedCoordinate.xy);
    float historyOcclusionBlendWeight = texture(lastFrameGlobalIlluminationWeightTexture, reprojectedCoordinate.xy).r;

    int steps;
    float occlusionBlendWeight = 1.0;
    float colorBlendWeight = 1.0;
    float idleColorBlendWeight = computeIdleColorBlendWeight(accumulatedFrames);
    float idleOcclusionBlendWeight = computeIdleOcclusionBlendWeight(accumulatedFrames);
    float reprojectionDepthMismatch = abs((lastFrameDepthViewPos + reprojectedViewPos.z) / max(lastFrameDepthViewPos, reprojectedViewPos.z));
    bool hasReprojectionMismatch = reprojectionDepthMismatch > ${d.H.float(.01)};
    bool isScaledGlobalIllumination = scaleGlobalIllumination < 1.0;
    bool isLowQualityEdgePixel = isScaledGlobalIllumination && isEdgeDepth(currentPixelDepth, uv);
    bool resetColorHistory = false;

    // Heuristic to determine blending weights and number of steps for occlusion and color
    if (hasReprojectionMismatch) {
      if (isLowQualityEdgePixel) {
        steps = 1;
        occlusionBlendWeight = ${d.H.float(.008)};
        resetColorHistory = true;
      } else {
        steps = 6;
        occlusionBlendWeight = 1.0;
        resetColorHistory = true;
      }
    } else {
      steps = 1;
      if (historyOcclusionBlendWeight > ${d.H.float(.5)}) {
        occlusionBlendWeight = ${d.H.float(.1)};
        colorBlendWeight = ${d.H.float(.008)};
      } else if (historyOcclusionBlendWeight > ${d.H.float(.02)}) {
        occlusionBlendWeight = historyOcclusionBlendWeight - 0.05;
        colorBlendWeight = ${d.H.float(.008)};
      } else {
        occlusionBlendWeight = isScaledGlobalIllumination ? ${d.H.float(.008)} : idleOcclusionBlendWeight;
        colorBlendWeight = isScaledGlobalIllumination ? ${d.H.float(.002)} : idleColorBlendWeight;
      }
    }

    vec4 randomDirectionSample;
    mat3 normalBasis = basisFromNormal(normal);
    int temporalSampleStride = min(64 / steps, 6);
    float temporalFrameOffset = mod(temporalSampleFrame, float(64 / steps));

    // For each ray determine if it hits geometry and accumulate occlusion or color
    float stepSize = 1.0 / float(steps);
    for (int i = 0; i < steps; ++i) {
      float sampleIndex = float(i * temporalSampleStride + int(temporalFrameOffset));
      randomDirectionSample = blueNoiseDither(floor(gl_FragCoord.xy), sampleIndex);
      vec2 hemisphereSample = randomDirectionSample.rg * 0.5 + 0.5;
      float offsetSample = randomDirectionSample.a * 0.5 + 0.5;
      vec3 rayDirection = normalBasis * sampleCosineHemisphere(hemisphereSample);
      float rayMarchScreenReach = rayMarchScreenReachFromWorldReach(viewPos.xyz, rayDirection, rayMarchWorldReach);
      rayMarchScreenReach = clamp(rayMarchScreenReach, rayMarchMinReach, rayMarchMaxReach);
      vec3 hit = screenSpaceIntersectionWithLimits(
        rayDirection,
        viewPos.xyz,
        normalize(viewPos.xyz),
        normal,
        offsetSample,
        rayMarchScreenReach,
        rayMarchMaxSteps
      );

      if (hit.z > 0.0) {
        ${(0,d.If)(e.hasColor,d.H`
          // Emission and color bleed - Reproject the current receiver and sampled hit to estimate bounced color
          vec3 receiverColor = texture(lastFrameColorTexture, reprojectedCoordinate.xy).rgb;

          vec2 hitReprojectedCoordinate = reprojectionCoordinate(hit);
          vec3 sourceColor = texture(lastFrameColorTexture, hitReprojectedCoordinate).rgb;
          vec3 sourceColorLinear = linearizeGamma(sourceColor);
          vec3 sourceEmission = ${(0,d.If)(e.hasEmission,"texture(lastFrameEmissionTexture, hitReprojectedCoordinate).xyz","vec3(0.0)")};

          float emissionWeight = mix(
            rayMarchMinReachEmissionWeight,
            rayMarchMaxReachEmissionWeight,
            (rayMarchScreenReach - rayMarchMinReach) / max(rayMarchMaxReach - rayMarchMinReach, 0.00001)
          );
          fragGlobalIllumination.rgb += ((sourceColorLinear * colorBleedWeight) + sourceEmission * emissionWeight) * stepSize;
          `)}
      } else {
        // Occlusion - heuristic modulating sky intensity based on angle to main light
        vec4 viewMainLightDirection = view * vec4(mainLightDirection, 0.0);
        float skyModulation = pow(max(dot(rayDirection, viewMainLightDirection.xyz), 0.0), 3.0) * 5.5;
        float skyFacingWeight = clamp(3.5 * dot(viewMainLightDirection.xyz, normal), 0.0, 1.0);
        skyModulation = mix(1.0, skyModulation * 0.2 + 0.8, skyFacingWeight);
        fragGlobalIllumination.a += skyModulation * stepSize;
      }
    }

    // Rendering trick add noise to reduce accumulation artifacts
    float accumulationDither = occlusionBlendWeight < 1.0
      ? randomDirectionSample.b * ${d.H.float(.0039)}
      : 0.0;

    ${(0,d.If)(e.hasColor,d.H`
      // Accumulate color
      vec3 lastFrameColor = lastFrameGlobalIllumination.rgb;
      float colorDitherScale = isScaledGlobalIllumination ? ${d.H.float(.25)} : 1.0;
      fragGlobalIllumination.rgb = resetColorHistory
        ? vec3(0.0)
        : mix(lastFrameColor + accumulationDither * colorDitherScale, fragGlobalIllumination.rgb, colorBlendWeight);
      `,d.H`
      fragGlobalIllumination.rgb = vec3(0.0);
      `)}
    fragGlobalIllumination.rgb = quantizeGlobalIlluminationColor(fragGlobalIllumination.rgb);

    // Accumulate occlusion
    fragGlobalIllumination.a = mix(lastFrameGlobalIllumination.a + accumulationDither, fragGlobalIllumination.a, occlusionBlendWeight);

    fragWeight = occlusionBlendWeight;
  `),t}const b=Object.freeze(Object.defineProperty({__proto__:null,GlobalIlluminationPassParameters:g,build:x,defaultColorBleedWeight:.15,defaultRayMarchMaxReach:.5,defaultRayMarchMaxReachEmissionWeight:1,defaultRayMarchMaxSteps:16,defaultRayMarchMinReach:.15,defaultRayMarchMinReachEmissionWeight:1,defaultRayMarchWorldReach:25},Symbol.toStringTag,{value:"Module"}));a.d(t,["a",0,b])},42014(e,t,a){a.d(t,{G:()=>b,b:()=>y});var o=a(72745),i=a(73398),r=a(65058),n=a(29199),l=a(27963),s=a(67582),c=a(56289),d=a(21390),u=a(86955),h=a(27374),m=a(70367),p=a(1652),f=a(70125),v=a(17005),g=a(31432),x=a(2687);class b extends g.Y{constructor(){super(...arguments),this.blurSize=(0,o.vt)()}}function y(){const e=new x.N5,t=e.fragment;e.include(i.c),e.include(l.Ir),e.include(n.Q);const a=1/24.5;t.include(r.E),t.include(f.t,w),t.include(p.R);t.uniforms.add(new s.o("hasEmission",e=>e.hasEmission),new m.N("depthMap",e=>e.depthTexture),new m.N("normalMap",e=>e.normalTexture),new h.o("globalIlluminationTexture",e=>e.texture),new h.o("globalIlluminationWeightTexture",e=>e.weightTexture),new c.t("blurSize",e=>e.blurSize),new d.m("scaleGlobalIllumination",e=>e.scaleGlobalIllumination),new d.m("projScale",(e,t)=>{const a=t.camera.distance;return a>5e4?Math.max(0,e.projScale-(a-5e4)):e.projScale}));return t.code.add(u.H`
    void accumulateBlurSample(
      vec2 sampleUv,
      float sampleOffset,
      float centerDepth,
      vec3 centerNormal,
      float depthSharpness,
      bool skipOcclusionBlur,
      inout float emissionWeightSum,
      inout vec3 emissionSum,
      inout float occlusionWeightSum,
      inout float occlusionSum,
      float centerOcclusionBlendWeight
    ) {
      vec4 sampleGlobalIllumination = texture(globalIlluminationTexture, sampleUv);
      vec3 sampleNormal = texture(normalMap, sampleUv).rgb;
      float sampleDepth = linearDepthFromTexture(depthMap, sampleUv);

      float depthDelta = sampleDepth - centerDepth;
      bool isScaledGlobalIllumination = scaleGlobalIllumination < 1.0;
      float normalSimilarityWeight = globalIlluminationNormalSimilarityWeight(sampleNormal, centerNormal);
      float depthNormalCorrection = globalIlluminationDepthNormalCorrection(sampleNormal);
      vec3 emission = sampleGlobalIllumination.rgb;
      float emissionSpatialWeightMultiplier = isScaledGlobalIllumination ? ${u.H.float(400)} : 1.0;

      float emissionWeight = exp(
        -sampleOffset * sampleOffset * ${u.H.float(a)} * ${u.H.float(.1)} * emissionSpatialWeightMultiplier
        - depthDelta * depthDelta * depthSharpness * depthNormalCorrection
      );
      emissionWeight *= normalSimilarityWeight;
      emissionWeightSum += emissionWeight;
      emissionSum += emissionWeight * emission;

      if (skipOcclusionBlur) {
        return;
      }

      float occlusionSpatialKernelScale = centerOcclusionBlendWeight > ${u.H.float(.03)}
        ? ${u.H.float(.08)}
        : ${u.H.float(1.5)};
      float occlusionWeight = exp(-sampleOffset * sampleOffset * occlusionSpatialKernelScale - depthDelta * depthDelta * depthSharpness);
      occlusionWeight *= normalSimilarityWeight;
      occlusionWeightSum += occlusionWeight;
      occlusionSum += occlusionWeight * sampleGlobalIllumination.a;
    }
  `),t.main.add(u.H`
    vec3 emissionSum = vec3(0.0);
    float emissionWeightSum = 0.0;

    vec4 centerGlobalIllumination = texture(globalIlluminationTexture, uv);
    float centerOcclusionBlendWeight = texture(globalIlluminationWeightTexture, uv).r;
    bool isScaledGlobalIllumination = scaleGlobalIllumination < 1.0;
    bool shouldReuseCenterOcclusion = isScaledGlobalIllumination && centerOcclusionBlendWeight <= ${u.H.float(.03)};
    bool shouldSkipLowQualityBlur = !hasEmission && shouldReuseCenterOcclusion;
    if (shouldSkipLowQualityBlur) {
      fragColor = vec4(
        quantizeGlobalIlluminationColor(centerGlobalIllumination.rgb),
        centerGlobalIllumination.a
      );
      return;
    }

    float centerDepth = linearDepthFromTexture(depthMap, uv);
    vec3 centerNormal = texture(normalMap, uv).rgb;
    float occlusionSum = 0.0;
    float occlusionWeightSum = 0.0;

    float depthSharpness = globalIlluminationDepthSharpness(projScale, centerDepth);
    for (int sampleOffset = -${u.H.int(4)}; sampleOffset <= ${u.H.int(4)}; ++sampleOffset) {
      float sampleOffsetFloat = float(sampleOffset);
      vec2 sampleUv = uv + sampleOffsetFloat * blurSize;
      accumulateBlurSample(
        sampleUv,
        sampleOffsetFloat,
        centerDepth,
        centerNormal,
        depthSharpness,
        shouldReuseCenterOcclusion,
        emissionWeightSum,
        emissionSum,
        occlusionWeightSum,
        occlusionSum,
        centerOcclusionBlendWeight
      );
    }

    float occlusion = shouldReuseCenterOcclusion ? centerGlobalIllumination.a : occlusionSum / occlusionWeightSum;
    vec3 blurredEmission = (emissionSum / emissionWeightSum).rgb;

    // heuristic dithering of the colors to remove banding, color shifts and wrong color accumulation
    float dither = ditherNoise(vec4(blurredEmission, occlusion)) - 1./32768.0;
    blurredEmission += isScaledGlobalIllumination ? 0.85 * dither : dither;

    fragColor = vec4(quantizeGlobalIlluminationColor(blurredEmission), occlusion);
  `),e}const w=new v.Tt;w.useFloatBlend=!1;const M=Object.freeze(Object.defineProperty({__proto__:null,GlobalIlluminationBlurDrawParameters:b,build:y},Symbol.toStringTag,{value:"Module"}));a.d(t,["a",0,M])},71566(e,t,a){a.d(t,{G:()=>p,b:()=>f});var o=a(73398),i=a(65058),r=a(29199),n=a(27963),l=a(21390),s=a(86955),c=a(27374),d=a(70367),u=a(1652),h=a(31432),m=a(2687);class p extends h.Y{}function f(){const e=new m.N5,t=e.fragment;return e.include(o.c),e.include(n.Ir),e.include(r.Q),t.include(i.E),t.include(u.R),t.uniforms.add(new d.N("depthMap",e=>e.depthTexture),new d.N("normalMap",e=>e.normalTexture),new c.o("tex",e=>e.colorTexture),new c.o("globalIlluminationWeightTexture",e=>e.weightTexture),new l.m("projScale",(e,t)=>{const a=t.camera.distance;return a>5e4?Math.max(0,e.projScale-(a-5e4)):e.projScale})),t.code.add(s.H`
    float computeDepthWeight(float sampleDepth, float centerDepth, float depthSharpness) {
      float depthDelta = abs(sampleDepth - centerDepth);
      return exp(-0.08 - depthDelta * depthDelta * depthSharpness);
    }

    vec3 normalFromTexture(sampler2D normalTexture, vec2 uv) {
      ivec2 normalTextureSize = textureSize(normalTexture, 0);
      ivec2 normalTexel = clamp(ivec2(uv * vec2(normalTextureSize)), ivec2(0), normalTextureSize - ivec2(1));
      return texelFetch(normalTexture, normalTexel, 0).xyz;
    }

    void sampleJointBilateralUpscale(vec2 sampleUv, out vec4 upscaledColor, out float upscaledWeight) {
      float centerDepth = linearDepthFromTexture(depthMap, sampleUv);
      vec3 centerNormal = normalFromTexture(normalMap, sampleUv);
      float depthSharpness = ${s.H.float(100)} * globalIlluminationDepthSharpness(projScale, centerDepth, centerNormal);

      vec2 lowResTextureSize = vec2(textureSize(tex, 0));
      vec2 texelPosition = sampleUv * lowResTextureSize - 0.5;
      vec2 texelBase = floor(texelPosition);
      vec2 bilinearWeightsFraction = fract(texelPosition);

      vec2 uv00 = (texelBase + vec2(0.5, 0.5)) / lowResTextureSize;
      vec2 uv10 = (texelBase + vec2(1.5, 0.5)) / lowResTextureSize;
      vec2 uv01 = (texelBase + vec2(0.5, 1.5)) / lowResTextureSize;
      vec2 uv11 = (texelBase + vec2(1.5, 1.5)) / lowResTextureSize;

      vec4 color00 = texture(tex, uv00);
      vec4 color10 = texture(tex, uv10);
      vec4 color01 = texture(tex, uv01);
      vec4 color11 = texture(tex, uv11);
      float weight00 = texture(globalIlluminationWeightTexture, uv00).r;
      float weight10 = texture(globalIlluminationWeightTexture, uv10).r;
      float weight01 = texture(globalIlluminationWeightTexture, uv01).r;
      float weight11 = texture(globalIlluminationWeightTexture, uv11).r;

      float depth00 = linearDepthFromTexture(depthMap, uv00);
      float depth10 = linearDepthFromTexture(depthMap, uv10);
      float depth01 = linearDepthFromTexture(depthMap, uv01);
      float depth11 = linearDepthFromTexture(depthMap, uv11);

      vec3 normal00 = normalFromTexture(normalMap, uv00);
      vec3 normal10 = normalFromTexture(normalMap, uv10);
      vec3 normal01 = normalFromTexture(normalMap, uv01);
      vec3 normal11 = normalFromTexture(normalMap, uv11);

      float bilinearWeight00 = (1.0 - bilinearWeightsFraction.x) * (1.0 - bilinearWeightsFraction.y);
      float bilinearWeight10 = bilinearWeightsFraction.x * (1.0 - bilinearWeightsFraction.y);
      float bilinearWeight01 = (1.0 - bilinearWeightsFraction.x) * bilinearWeightsFraction.y;
      float bilinearWeight11 = bilinearWeightsFraction.x * bilinearWeightsFraction.y;

      float jointBilateralWeight00 = bilinearWeight00 * computeDepthWeight(depth00, centerDepth, depthSharpness) * globalIlluminationNormalSimilarityWeight(normal00, centerNormal);
      float jointBilateralWeight10 = bilinearWeight10 * computeDepthWeight(depth10, centerDepth, depthSharpness) * globalIlluminationNormalSimilarityWeight(normal10, centerNormal);
      float jointBilateralWeight01 = bilinearWeight01 * computeDepthWeight(depth01, centerDepth, depthSharpness) * globalIlluminationNormalSimilarityWeight(normal01, centerNormal);
      float jointBilateralWeight11 = bilinearWeight11 * computeDepthWeight(depth11, centerDepth, depthSharpness) * globalIlluminationNormalSimilarityWeight(normal11, centerNormal);
      float jointBilateralWeightSum = jointBilateralWeight00 + jointBilateralWeight10 + jointBilateralWeight01 + jointBilateralWeight11;

      if (jointBilateralWeightSum < 0.0001) {
        // Fall back to the nearest low-resolution texel when all bilateral weights collapse.
        vec2 nearestUv = (floor(texelPosition + 0.5) + vec2(0.5)) / lowResTextureSize;
        upscaledColor = texture(tex, nearestUv);
        upscaledWeight = texture(globalIlluminationWeightTexture, nearestUv).r;
        return;
      }

      upscaledColor = (
        color00 * jointBilateralWeight00 +
        color10 * jointBilateralWeight10 +
        color01 * jointBilateralWeight01 +
        color11 * jointBilateralWeight11
      ) / jointBilateralWeightSum;

      upscaledWeight = (
        weight00 * jointBilateralWeight00 +
        weight10 * jointBilateralWeight10 +
        weight01 * jointBilateralWeight01 +
        weight11 * jointBilateralWeight11
      ) / jointBilateralWeightSum;
    }
  `),e.outputs.add("fragColor","vec4",0),e.outputs.add("fragWeight","float",1),t.main.add(s.H`sampleJointBilateralUpscale(uv, fragColor, fragWeight);
fragColor.rgb = quantizeGlobalIlluminationColor(fragColor.rgb);`),e}const v=Object.freeze(Object.defineProperty({__proto__:null,GlobalIlluminationUpscaleDrawParameters:p,build:f},Symbol.toStringTag,{value:"Module"}));a.d(t,["a",0,v])},35249(e,t,a){a.d(t,{b:()=>N});var o=a(62026),i=a(34981),r=a(48962),n=a(59395),l=a(35771),s=a(45937),c=a(85793),d=a(59046),u=a(22148),h=a(97808),m=a(54478),p=a(25530),f=a(15710),v=a(9365),g=a(5218),x=a(43557),b=a(42953),y=a(26719),w=a(51740),M=a(55696),S=a(66763),C=a(37516),T=a(77904),I=a(3799),_=a(5517),z=a(58350),D=a(21390),F=a(86955),H=a(70367),P=a(85114),j=a(99362),W=a(49560),R=a(24176),O=a(2687);function N(e){const t=new O.N5,{attributes:a,vertex:N,fragment:G,varyings:E}=t,{output:B,offsetBackfaces:L,pbrMode:V,snowCover:A,spherical:U}=e,k=1===V||2===V;if((0,I.NB)(N,e),a.add("position","vec3"),N.inputs.add("position",()=>"position"),E.add("vpos","vec3",{invariant:!0}),t.include(S.A,e),t.include(s.B,e),t.include(p.Ge,e),t.include(M.q2,e),!(0,i._o)(B))return t.include(f.E,e),t;t.include(M.MU,e),(0,I.yu)(t.vertex,e),t.include(d.Y,e),t.include(n.d),L&&t.include(o.M),E.add("vNormalWorld","vec3"),E.add("localvpos","vec3",{invariant:!0}),t.include(h.U,e),t.include(u.K,e),t.include(l.v,e),t.include(m.c,e),N.include(c.WD),N.include(c.oF),N.uniforms.add(new z.E("externalColor",e=>e.externalColor,{supportsNaN:!0})),E.add("vcolorExt","vec4"),t.include(e.instancedDoublePrecision?w.QH:w.LA,e),N.include(W.Q),N.main.add(F.H`
    forwardVertexColor();

    MaskedColor maskedColorExt =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColorExt.color;
    forwardColorMixMode(maskedColorExt.mask);

    bool alphaCut = opacityMixMode != ${F.H.int(j.Um.ignore)} && vcolorExt.a < alphaCutoff;
    vpos = getVertexInLocalOriginSpace();

    localvpos = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
    vpos = addVerticalOffset(vpos, localOrigin);
    vec4 basePosition = transformPosition(proj, view, vpos);

    forwardTextureCoordinates();
    forwardColorUV();
    forwardEmissiveUV();
    forwardLinearDepthToReadShadowMap();
    gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
    ${(0,F.If)(L,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
  `);const{hasColorTexture:$,hasColorTextureTransform:q}=e;return G.include(g.kA,e),G.include(v.n,e),t.include(C.S,e),G.include(r.HQ,e),t.include(R.D,e),(0,I.yu)(G,e),(0,x.Gc)(G),(0,g.a8)(G),(0,g.eU)(G),G.uniforms.add(N.uniforms.get("localOrigin"),N.uniforms.get("view"),new _.t("ambient",e=>e.ambient),new _.t("diffuse",e=>e.diffuse),new D.m("opacity",e=>e.opacity),new D.m("layerOpacity",e=>e.layerOpacity)),$&&G.uniforms.add(new H.N("tex",e=>e.texture)),t.include(y._,e),G.include(b.c,e),G.include(T.N),G.include(P.b,e),(0,x.O4)(G),G.main.add(F.H`
      discardBySlice(vpos);
      vec4 texColor = ${$?`texture(tex, ${q?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${(0,F.If)($,`${(0,F.If)(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = readShadow(additionalAmbientScale, vpos);
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?F.H`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, opacityMixMode);`:F.H`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, opacityMixMode);`}

      vec3 shadingNormal = normalize(vNormalWorld);
      vec3 groundNormal = ${U?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};

      ${(0,F.If)(A,"vec3 faceNormal = screenDerivativeNormal(vpos);\n         float snow = getRealisticTreeSnow(faceNormal, shadingNormal, groundNormal);\n         albedo = mix(albedo, vec3(1), snow);")}

      ${F.H`albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}

      ${k?F.H`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${(0,F.If)(A,"mrr = applySnowToMRR(mrr, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, groundNormal, mrr, additionalAmbientIrradiance);`:F.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${(0,F.If)(A,", 1.0")});`),t}const G=Object.freeze(Object.defineProperty({__proto__:null,build:N},Symbol.toStringTag,{value:"Module"}));a.d(t,["R",0,G])},51331(e,t,a){a.d(t,{b:()=>v,g:()=>g});var o=a(19555),i=a(72745),r=a(73398),n=a(65058),l=a(94759),s=a(27963),c=a(28450),d=a(95756),u=a(23148),h=a(21390),m=a(86955),p=a(70367),f=a(2687);function v(){const e=new f.N5,t=e.fragment;return e.include(r.c),e.include(s.Ir),t.include(n.E),t.include(l.C),t.uniforms.add(new u.U("radius",e=>g(e.camera))).code.add(m.H`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(m.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.outputs.add("fragOcclusion","float"),t.uniforms.add(new p.N("normalMap",e=>e.normalTexture),new p.N("depthMap",e=>e.depthTexture),new h.m("projScale",e=>e.projScale),new p.N("rnm",e=>e.noiseTexture),new d.G("rnmScale",(e,t)=>(0,o.hZ)(x,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height)),new h.m("intensity",e=>e.intensity),new c.E("screenSize",e=>(0,o.hZ)(x,e.camera.fullWidth,e.camera.fullHeight))).main.add(m.H`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragOcclusion = 1.0;
      return;
    }

    // get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 norm4 = texelFetch(normalMap, iuv, 0);
    if(norm4.a != 1.0) {
      fragOcclusion = 1.0;
      return;
    }
    vec3 norm = normalize(norm4.xyz * 2.0 - 1.0);

    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

    float sum = 0.0;
    vec3 tapPixelPos;

    vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

    // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
    // bug or deviation from CE somewhere else?
    float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

    for(int i = 0; i < ${m.H.int(16)}; ++i) {
      vec2 unitOffset = reflect(sphere[i], fres).xy;
      vec2 offset = vec2(-unitOffset * radius * ps);

      // don't use current or very nearby samples
      if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
        continue;
      }

      vec2 tc = vec2(gl_FragCoord.xy + offset);
      if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
      vec2 tcTap = tc / screenSize;
      float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

      tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

      sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
    }

    // output the result
    float A = max(1.0 - sum * intensity / float(${m.H.int(16)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * pow(A, 4.0)) * INV_GAMMA;

    fragOcclusion = A;
  `),e}function g(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const x=(0,i.vt)(),b=Object.freeze(Object.defineProperty({__proto__:null,build:v,getRadius:g},Symbol.toStringTag,{value:"Module"}));a.d(t,["S",0,b])},29228(e,t,a){a.d(t,{b:()=>u});var o=a(73398),i=a(65058),r=a(56289),n=a(21390),l=a(86955),s=a(27374),c=a(70367),d=a(2687);function u(){const e=new d.N5,t=e.fragment;e.include(o.c);return t.include(i.E),t.uniforms.add(new c.N("depthMap",e=>e.depthTexture),new s.o("tex",e=>e.colorTexture),new r.t("blurSize",e=>e.blurSize),new n.m("projScale",(e,t)=>{const a=t.camera.distance;return a>5e4?Math.max(0,e.projScale-(a-5e4)):e.projScale})),t.code.add(l.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${l.H.float(.08)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.main.add(l.H`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${l.H.int(4)}; r <= ${l.H.int(4)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const h=Object.freeze(Object.defineProperty({__proto__:null,build:u},Symbol.toStringTag,{value:"Module"}));a.d(t,["S",0,h])},64232(e,t,a){a.d(t,{W:()=>l,g:()=>n});var o=a(9392),i=a(56611),r=a(45308);function n(e,t,a,o){if((0,i.canProjectWithoutEngine)(e.spatialReference,a))return s[0]=e.x,s[1]=e.y,s[2]=e.z??0,(0,r.projectBuffer)(s,e.spatialReference,0,t,a,0);const n=(0,i.tryProject)(e,a,o);return!!n&&(t[0]=n.x,t[1]=n.y,t[2]=n.z??0,!0)}async function l(e,t,a,o){return await(0,i.initializeProjection)(e.spatialReference,a,null,o),n(e,t,a)}const s=(0,o.vt)()},14487(e,t,a){a.d(t,{F:()=>l});var o=a(56611),i=a(13312),r=a(45308),n=a(64232);function l(e,t,a,i){return!(null==t||null==i||e.length<2)&&((0,o.canProjectWithoutEngine)(t,i)?(0,r.projectBuffer)(e,t,0,a,i,0,1):(s.x=e[0],s.y=e[1],s.z=e[2],s.spatialReference=t,(0,n.g)(s,a,i)))}const s=(0,a(18117).TH)(0,0,0,i.A.WGS84)},62026(e,t,a){a.d(t,{M:()=>i});var o=a(86955);function i(e){e.vertex.code.add(o.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},35771(e,t,a){a.d(t,{v:()=>r});var o=a(85793),i=a(86955);function r(e,t){t.instancedColor?(e.attributes.add("instanceColor","vec4"),e.vertex.include(o.WD),e.vertex.include(o.Y1),e.vertex.include(o.ML),e.vertex.code.add(i.H`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${"instanceColor"}));
      }
    `)):e.vertex.code.add(i.H`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}},45937(e,t,a){a.d(t,{B:()=>g});var o=a(86300),i=a(44680),r=a(13191),n=a(98268),l=a(9392),s=a(89299),c=a(3799),d=a(84115),u=a(86955),h=a(72106),m=a(43425),p=a(99643),f=a(31432);f.Y;const v=(0,i.vt)();function g(e,t){const{hasModelTransformation:a,instancedDoublePrecision:i,instanced:l,output:f,hasVertexTangents:g}=t;a&&(e.vertex.uniforms.add(new m.X("model",e=>e.modelTransformation??r.zK)),e.vertex.uniforms.add(new h.k("normalLocalOriginFromModel",e=>((0,o.Ge)(v,e.modelTransformation??r.zK),v)))),l&&i&&(e.attributes.add("instanceModelOriginHi","vec3"),e.attributes.add("instanceModelOriginLo","vec3"),e.attributes.add("instanceModel","mat3"),e.attributes.add("instanceModelNormal","mat3"));const b=e.vertex;i&&(b.include(s.u),b.uniforms.add(new d.d("viewOriginHi",e=>(0,p.Zo)((0,n.hZ)(x,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),x)),new d.d("viewOriginLo",e=>(0,p.jA)((0,n.hZ)(x,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),x)))),b.code.add(u.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${a?i?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":i?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i?u.H`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),b.code.add(u.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${a?i?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":i?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),4===f&&((0,c.S7)(b),b.code.add(u.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${a?i?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":i?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),g&&b.code.add(u.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${a?i?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":i?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const x=(0,l.vt)()},59046(e,t,a){a.d(t,{Y:()=>i});var o=a(86955);function i(e,t){switch(e.fragment.code.add(o.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`),t.normalType){case 1:e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(o.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case 0:e.attributes.add("normal","vec3"),e.vertex.code.add(o.H`vec3 normalModel() {
return normal;
}`);break;default:t.normalType;case 2:case 3:}}},22148(e,t,a){a.d(t,{K:()=>l});var o=a(85793),i=a(86955),r=a(72790),n=a(99362);function l(e,t){e.varyings.add("colorMixMode","int"),e.varyings.add("opacityMixMode","int"),e.vertex.uniforms.add(new r.c("symbolColorMixMode",e=>n.Um[e.colorMixMode])),t.hasSymbolColors?(e.vertex.include(o.WD),e.vertex.include(o.Y1),e.vertex.include(o.ML),e.attributes.add("symbolColor","vec4"),e.vertex.code.add(i.H`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${"symbolColor"}));
    }
  `)):e.vertex.code.add(i.H`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),e.vertex.code.add(i.H`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${i.H.int(n.Um.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${i.H.int(n.Um.ignore)} : symbolColorMixMode;
    }
  `)}},55386(e,t,a){a.d(t,{Mh:()=>c,Zo:()=>d,gy:()=>u});var o=a(44680),i=a(55855),r=a(59046),n=a(46738),l=a(86955),s=a(72106);function c(e,t){const{vertex:a,varyings:o}=e;switch(t.normalType){case 0:case 1:e.include(r.Y,t),o.add("vNormalWorld","vec3"),o.add("vNormalView","vec3"),a.uniforms.add(new s.k("transformNormalViewFromGlobal",e=>e.transformNormalViewFromGlobal)),a.code.add(l.H`void forwardNormal() {
vNormalWorld = normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case 2:e.vertex.code.add(l.H`void forwardNormal() {}`);break;default:t.normalType;case 3:}}class d extends n.dO{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,o.vt)()}}class u extends n.EM{constructor(){super(...arguments),this.toMapSpace=(0,i.vt)()}}},15710(e,t,a){a.d(t,{E:()=>g});var o=a(67078),i=a(48962),r=a(59395),n=a(59046),l=a(90080),s=a(97808),c=a(55386),d=a(49399),u=a(87236),h=a(66763),m=a(37516),p=a(3799),f=a(86955),v=a(70367);function g(e,t){const{vertex:a,fragment:g,varyings:x}=e,{hasColorTexture:b,alphaDiscardMode:y}=t,w=b&&1!==y,{output:M,normalType:S,hasColorTextureTransform:C}=t;switch(M){case 3:(0,p.NB)(a,t),e.include(r.d),g.include(i.HQ,t),e.include(s.U,t),w&&g.uniforms.add(new v.N("tex",e=>e.texture)),a.main.add(f.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(m.S,t),g.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(w,f.H`vec4 texColor = texture(tex, ${C?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case 5:case 6:case 7:case 8:case 11:(0,p.NB)(a,t),e.include(r.d),e.include(s.U,t),e.include(h.A,t),e.include(d.L,t),g.include(i.HQ,t),e.include(l.g,t),(0,o.xJ)(e),x.add("depth","float",{invariant:!0}),w&&g.uniforms.add(new v.N("tex",e=>e.texture)),a.main.add(f.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(m.S,t),g.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(w,f.H`vec4 texColor = texture(tex, ${C?"colorUV":"vuv0"});
               discardOrAdjustAlpha(texColor);`)}
        ${11===M?f.H`outputObjectAndLayerIdColor();`:f.H`outputDepth(depth);`}`);break;case 4:{(0,p.NB)(a,t),e.include(r.d),e.include(n.Y,t),e.include(c.Mh,t),e.include(s.U,t),e.include(h.A,t),w&&g.uniforms.add(new v.N("tex",e=>e.texture)),2===S&&x.add("vPositionView","vec3",{invariant:!0});const o=0===S||1===S;a.main.add(f.H`
        vpos = getVertexInLocalOriginSpace();
        ${o?f.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:f.H`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),g.include(i.HQ,t),e.include(m.S,t),g.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(w,f.H`vec4 texColor = texture(tex, ${C?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${2===S?f.H`vec3 normal = screenDerivativeNormal(vPositionView);`:f.H`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case 10:(0,p.NB)(a,t),e.include(r.d),e.include(s.U,t),e.include(h.A,t),w&&g.uniforms.add(new v.N("tex",e=>e.texture)),a.main.add(f.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),g.include(i.HQ,t),e.include(m.S,t),e.include(u.Q,t),g.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(w,f.H`vec4 texColor = texture(tex, ${C?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}},49399(e,t,a){a.d(t,{L:()=>i});var o=a(86955);function i(e,t){switch(t.output){case 5:case 6:case 7:case 8:e.fragment.code.add(o.H`float _calculateFragDepth(const in float depth) {
const float slope_scale = 2.0;
const float bias = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + slope_scale * m + bias;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`);break;case 9:e.fragment.code.add(o.H`void outputDepth(float _linearDepth){
gl_FragDepth = _linearDepth;
}`)}}},32491(e,t,a){a.d(t,{V:()=>n});var o=a(65058),i=a(28450),r=a(86955);function n(e){e.include(o.E),e.uniforms.add(new i.E("zProjectionMapLastFrame",e=>(0,o.l)(e.reprojection.lastFrameCamera))),e.code.add(r.H`float linearDepthFromTextureLastFrame(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv), zProjectionMapLastFrame);
}`)}},72937(e,t,a){a.d(t,{J:()=>h});var o=a(44680),i=a(72745),r=a(95352),n=a(56289),l=a(95756),s=a(86955),c=a(72106),d=a(27374),u=a(70367);function h(e,t){return m(e,t)}function m(e,t){const a=e.fragment,{hasVertexTangents:h,doubleSidedMode:m,hasNormalTexture:p,textureCoordinateType:f,bindType:v,hasNormalTextureTransform:g}=t;h?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===m?a.code.add(s.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):a.code.add(s.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):a.code.add(s.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),p&&0!==f&&(e.include(r.r,t),a.uniforms.add(1===v?new u.N("normalTexture",e=>e.textureNormal):new d.o("normalTexture",e=>e.textureNormal)),g&&(a.uniforms.add(1===v?new l.G("scale",e=>e.scale??i.Un):new n.t("scale",e=>e.scale??i.Un)),a.uniforms.add(new c.k("normalTextureTransformMatrix",e=>e.normalTextureTransformMatrix??o.zK))),a.code.add(s.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),g&&a.code.add(s.H`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),a.code.add(s.H`return tangentSpace * rawNormal;
}`))}},2302(e,t,a){a.d(t,{W:()=>n});var o=a(87003);class i extends o.n{constructor(e,t,a,o){super(e,"float",0,(t,i)=>t.setUniform1fv(e,a(i),o),t)}}var r=a(86955);function n(e,t){e.uniforms.add(new i("shR",9,e=>{let{lighting:t}=e;return t.sh.r}),new i("shG",9,e=>{let{lighting:t}=e;return t.sh.g}),new i("shB",9,e=>{let{lighting:t}=e;return t.sh.b})),e.code.add(r.H`vec3 calculateAmbientIrradiance(vec3 normal) {
vec3 ambientLight = 0.282095 * vec3(shR[0], shG[0], shB[0]);
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
vec4 lightingAmbientSH_R1 = vec4(shR[1], shR[2], shR[3], shR[4]);
vec4 lightingAmbientSH_G1 = vec4(shG[1], shG[2], shG[3], shG[4]);
vec4 lightingAmbientSH_B1 = vec4(shB[1], shB[2], shB[3], shB[4]);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
vec4 lightingAmbientSH_R2 = vec4(shR[5], shR[6], shR[7], shR[8]);
vec4 lightingAmbientSH_G2 = vec4(shG[5], shG[6], shG[7], shG[8]);
vec4 lightingAmbientSH_B2 = vec4(shB[5], shB[6], shB[7], shB[8]);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight;
}`),1!==t.pbrMode&&2!==t.pbrMode||e.code.add(r.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance()
{
vec3 ambientLight = 1.2 * (0.282095 * vec3(shR[0], shG[0], shB[0])) - 0.2;
return ambientLight *= skyTransmittance;
}`)}},9365(e,t,a){a.d(t,{n:()=>H});var o=a(86955),i=a(4653),r=a(6326),n=a(15941),l=a(30726),s=a(68134),c=a(91417),d=a(64385),u=a(19555),h=a(37127),m=a(36451),p=a(51331),f=a(12418),v=a(59246),g=a(29228),x=a(57162);let b=class extends v.w{constructor(){super(...arguments),this.shader=new f.r(g.S,()=>a.e(93511).then(a.bind(a,93511)))}initializePipeline(){return(0,x.Ey)({colorWrite:x.kn})}};b=(0,r.Cg)([(0,d.$K)("esri.views.3d.webgl-engine.effects.ssao.SSAOBlurTechnique")],b);var y=a(72745),w=a(31432);class M extends w.Y{constructor(){super(...arguments),this.projScale=1}}class S extends M{constructor(){super(...arguments),this.intensity=1}}class C extends w.Y{}class T extends C{constructor(){super(...arguments),this.blurSize=(0,y.vt)()}}let I=class extends v.w{constructor(){super(...arguments),this.shader=new f.r(p.S,()=>a.e(72420).then(a.bind(a,72420)))}initializePipeline(){return(0,x.Ey)({colorWrite:x.kn})}};I=(0,r.Cg)([(0,d.$K)("esri.views.3d.webgl-engine.effects.ssao.SSAOTechnique")],I);a(93345);var _=a(29492),z=a(96673);let D=class extends m.A{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=h.OG.AMBIENT_ILLUMINATION,this._enableTime=(0,c.l5)(0),this._passParameters=new S,this._drawParameters=new T}initialize(){const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),e=>e.charCodeAt(0)),t=new z.R(32);t.wrapMode=33071,t.pixelFormat=6407,t.wrapMode=10497,t.hasMipmap=!0,this._passParameters.noiseTexture=new _.A(this.renderingContext,t,e),this.addHandles((0,s.wB)(()=>this.view.stage.renderer.hasAmbientIllumination,()=>this._enableTime=(0,c.l5)(0)))}destroy(){this._passParameters.noiseTexture=(0,l.WD)(this._passParameters.noiseTexture)}render(e){const t=e.find(e=>{let{name:t}=e;return"normals"===t}),a=t?.getTexture(),o=t?.getTexture(33306);if(!a||!o)return;const i=this.techniques.getCompiled(I),r=this.techniques.getCompiled(b);if(!i||!r)return this._enableTime=(0,c.l5)(performance.now()),void this.requestRender(1);0===this._enableTime&&(this._enableTime=(0,c.l5)(performance.now()));const l=this.renderingContext,s=this.view.qualitySettings.fadeDuration,d=this.bindParameters,m=d.camera,f=m.relativeElevation,v=(0,n.qE)((5e5-f)/2e5,0,1),g=s>0?Math.min(s,performance.now()-this._enableTime)/s:1,x=g*v;this._passParameters.normalTexture=a,this._passParameters.depthTexture=o,this._passParameters.projScale=1/m.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*F/(0,p.g)(m)**6*x;const y=m.fullViewport[2],w=m.fullViewport[3],M=this.fboCache.acquire(y,w,"ssao input",2);l.bindFramebuffer(M.fbo),l.setViewport(0,0,y,w),l.bindTechnique(i,d,this._passParameters,this._drawParameters),l.screen.draw();const S=Math.round(y/2),C=Math.round(w/2),T=this.fboCache.acquire(S,C,"ssao blur",0);l.bindFramebuffer(T.fbo),this._drawParameters.colorTexture=M.getTexture(),(0,u.hZ)(this._drawParameters.blurSize,0,2/w),l.bindTechnique(r,d,this._passParameters,this._drawParameters),l.setViewport(0,0,S,C),l.screen.draw(),M.release();const _=this.fboCache.acquire(S,C,h.OG.AMBIENT_ILLUMINATION,0);return l.bindFramebuffer(_.fbo),l.setViewport(0,0,y,w),l.setClearColor(1,1,1,0),l.clear(16384),this._drawParameters.colorTexture=T.getTexture(),(0,u.hZ)(this._drawParameters.blurSize,2/y,0),l.bindTechnique(r,d,this._passParameters,this._drawParameters),l.setViewport(0,0,S,C),l.screen.draw(),l.setViewport4fv(m.fullViewport),T.release(),g<1&&this.requestRender(2),_}};(0,r.Cg)([(0,d.MZ)()],D.prototype,"consumes",void 0),(0,r.Cg)([(0,d.MZ)()],D.prototype,"produces",void 0),D=(0,r.Cg)([(0,d.$K)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],D);const F=.5;function H(e,t){t.receiveAmbientOcclusion?(e.uniforms.add(new i.x("ssaoTex",e=>e.ssao?.getTexture())),e.constants.add("blurSizePixelsInverse","float",.5),e.code.add(o.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(o.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},5218(e,t,a){a.d(t,{kA:()=>N,a8:()=>R,eU:()=>O});var o=a(2302),i=a(9365),r=a(94759),n=a(43557),l=a(42953),s=a(36324),c=a(67582),d=a(86955),u=a(4653),h=a(6326),m=a(30726),p=a(68134),f=a(64385),v=a(19555),g=a(37127),x=a(36451),b=a(36893),y=a(42014),w=a(12418),M=a(59246),S=a(57162);let C=class extends M.w{constructor(){super(...arguments),this.shader=new w.r(y.a,()=>a.e(58815).then(a.bind(a,58815)))}initializePipeline(){return(0,S.Ey)({colorWrite:S.kn})}};C=(0,h.Cg)([(0,f.$K)("esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationBlurTechnique")],C);let T=class extends M.w{constructor(){super(...arguments),this.shader=new w.r(b.a,()=>a.e(2028).then(a.bind(a,2028)))}initializePipeline(){return(0,S.Ey)({colorWrite:S.kn})}};T=(0,h.Cg)([(0,f.$K)("esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationTechnique")],T);var I=a(6485);class _ extends I.K{constructor(){super(...arguments),this.hasColor=!0,this.hasEmission=!1,this.rayMarchMaxReach=.5,this.rayMarchMaxSteps=16,this.useProjectedRayLength=!0,this.clampRayToScreen=!1}}(0,h.Cg)([(0,I.W)()],_.prototype,"hasColor",void 0),(0,h.Cg)([(0,I.W)()],_.prototype,"hasEmission",void 0);var z=a(71566);let D=class extends M.w{constructor(){super(...arguments),this.shader=new w.r(z.a,()=>a.e(98169).then(a.bind(a,98169)))}initializePipeline(){return(0,S.Ey)({colorWrite:S.kn})}};D=(0,h.Cg)([(0,f.$K)("esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationUpscaleTechnique")],D);a(93345);let F=class extends x.A{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=g.OG.AMBIENT_ILLUMINATION,this._passParameters=new b.G,this._drawParameters=new y.G,this._drawParametersUpscale=new z.G,this._maxFrames=256,this._lowQualityResolutionScale=.25,this._configuration=new _,this._globalIllumination=null,this._isGlobalIlluminationUpdate=!1,this._resetBuffer=!1}initialize(){this.addHandles((0,p.wB)(()=>this.view.stage.renderer.hasGlobalIllumination,()=>{this._resetAccumulatedFrames(),this._requestRender()},p.pc))}destroy(){this._globalIllumination=(0,m.Gz)(this._globalIllumination)}resetAccumulatedFrames(){this._isGlobalIlluminationUpdate||this._resetAccumulatedFrames()}render(e){if(this._passParameters.accumulatedFrames>=this._maxFrames)return this._globalIllumination?.retain(),this._globalIllumination;const t=e.find(e=>{let{name:t}=e;return"normals"===t}),a=t?.getTexture(),o=t?.getTexture(33306),i=this._mode;if(!a||!o)return this._emptyOutput;if(0===i)return this._resetBuffer=!1,this._emptyOutput;if(!this._canRender)return this._resetBuffer=!1,this._requestRender(),this._emptyOutput;const r=this.bindParameters;this._configuration.hasEmission=!!r.reprojection.lastFrameEmission;const n=this.techniques.getCompiled(T,this._configuration),l=this.techniques.getCompiled(C),s=1===i,c=s?this._lowQualityResolutionScale:1,d=s?this.techniques.getCompiled(D):null;if(!n||!l||s&&!d)return this._requestRender(),this._emptyOutput;const u=this.renderingContext,{camera:h}=r;this._passParameters.normalTexture=a,this._passParameters.depthTexture=o,this._passParameters.projScale=1/h.computeScreenPixelSizeAtDist(1),this._passParameters.scaleGlobalIllumination=c;const{fullWidth:m,fullHeight:p}=h,f=Math.max(1,Math.floor(m*c)),x=Math.max(1,Math.floor(p*c)),b=this.fboCache.acquire(f,x,"global illumination input").acquireColor(36065,0);u.bindFramebuffer(b.fbo),u.setViewport(0,0,f,x),u.bindTechnique(n,r,this._passParameters,this._drawParameters),u.screen.draw();const y=b.obtainAttachment(36065),w=Math.max(1,Math.round(f/1)),M=Math.max(1,Math.round(x/1)),S=this.fboCache.acquire(w,M,"global illumination blur horizontal");u.bindFramebuffer(S.fbo),this._drawParameters.texture=b.getTexture(),this._drawParameters.weightTexture=y.attachment,(0,v.hZ)(this._drawParameters.blurSize,0,1/x),u.bindTechnique(l,r,this._passParameters,this._drawParameters),u.setViewport(0,0,w,M),u.screen.draw(),b.release();const I=s?"global illumination blur vertical":g.OG.AMBIENT_ILLUMINATION,_=this.fboCache.acquire(w,M,I);u.bindFramebuffer(_.fbo),u.setViewport(0,0,w,M),u.setClearColor(1,1,1,0),u.clear(16384),this._drawParameters.texture=S.getTexture(),this._drawParameters.weightTexture=y.attachment,(0,v.hZ)(this._drawParameters.blurSize,1/w,0),u.bindTechnique(l,r,this._passParameters,this._drawParameters),u.setViewport(0,0,w,M),u.screen.draw(),S.release(),_.attachColor(y,36065),y.release();let z=_;return d&&(z=this.fboCache.acquire(m,p,g.OG.AMBIENT_ILLUMINATION).acquireColor(36065,0),u.bindFramebuffer(z.fbo),u.setViewport(0,0,m,p),u.setClearColor(1,1,1,0),u.clear(16384),this._drawParametersUpscale.colorTexture=_.getTexture(),this._drawParametersUpscale.weightTexture=_.getTexture(36065),u.bindTechnique(d,r,this._passParameters,this._drawParametersUpscale),u.screen.draw(),_.release()),u.setViewport4fv(h.fullViewport),this._passParameters.temporalSampleFrame=(this._passParameters.temporalSampleFrame+1)%64,++this._passParameters.accumulatedFrames,this._cacheGlobalIllumination(z),this._passParameters.accumulatedFrames<this._maxFrames&&this._requestRender(),z}_requestRender(){this._isGlobalIlluminationUpdate=!0,this.requestRender(1),this._isGlobalIlluminationUpdate=!1}_cacheGlobalIllumination(e){this._globalIllumination!==e&&(this._globalIllumination=(0,m.Gz)(this._globalIllumination),this._globalIllumination=e,this._globalIllumination.retain())}get _emptyOutput(){const e=this.renderingContext,{fullWidth:t,fullHeight:a}=this.bindParameters.camera,o=this.fboCache.acquire(t,a,g.OG.AMBIENT_ILLUMINATION).acquireColor(36065,0);return e.bindFramebuffer(o.fbo),e.setViewport(0,0,t,a),e.clearBuffer(0,[0,0,0,1]),e.clearBuffer(1,[0,0,0,0]),o}get _canRender(){const{reprojection:e,hasEmission:t,globalIllumination:a}=this.bindParameters;return!(!e.lastFrameColor||t&&!e.lastFrameEmission||!e.lastFrameDepth||!a||this._resetBuffer)}get _mode(){const{hasGlobalIlluminationHighQuality:e,hasGlobalIllumination:t}=this.view.stage.renderer;return e?2:t?1:0}_resetAccumulatedFrames(){this._passParameters.accumulatedFrames=0,this._globalIllumination=(0,m.Gz)(this._globalIllumination)}get test(){const e=this;return{passParameters:this._passParameters,configuration:this._configuration,get maxFrames(){return e._maxFrames},set maxFrames(t){e._maxFrames=t},get lowQualityResolutionScale(){return e._lowQualityResolutionScale},set lowQualityResolutionScale(t){e._lowQualityResolutionScale=t},get mode(){return e._mode},restartAccumulation:()=>{this._resetAccumulatedFrames(),this._passParameters.temporalSampleFrame=0,this._resetBuffer=!0,this._requestRender()}}}};function H(e,t){t.receiveGlobalIllumination?(e.uniforms.add(new c.o("hasGlobalIlluminationTexture",e=>null!=e.globalIllumination),new u.x("globalIlluminationTexture",e=>e.globalIllumination?.getTexture())),e.constants.add("blurSizePixelsInverse","float",1),e.code.add(d.H`vec3 readGlobalIlluminationOcclusionInverse() {
if (!hasGlobalIlluminationTexture) {
return vec3(1.0);
}
ivec2 texel = ivec2(gl_FragCoord.xy * blurSizePixelsInverse);
return vec3(texelFetch(globalIlluminationTexture, texel, 0).a);
}
vec3 readGlobalIlluminationOcclusion() {
return 1.0 - readGlobalIlluminationOcclusionInverse();
}
vec4 readGlobalIlluminationEmissionInverse() {
if (!hasGlobalIlluminationTexture) {
return vec4(1.0);
}
ivec2 texel = ivec2(gl_FragCoord.xy * blurSizePixelsInverse);
return 1.0 - vec4(texelFetch(globalIlluminationTexture, texel, 0).rgb, 0.0);
}
vec4 readGlobalIlluminationEmission() {
return max((1.0 - readGlobalIlluminationEmissionInverse() - 0.01) / 0.99, 0.0);
}`)):e.code.add(d.H`vec3 readGlobalIlluminationOcclusionInverse() { return vec3(1.0); }
vec3 readGlobalIlluminationOcclusion() { return vec3(0.0); }
vec4 readGlobalIlluminationEmissionInverse() { return vec4(1.0); }
vec4 readGlobalIlluminationEmission() { return vec4(0.0); }`)}(0,h.Cg)([(0,f.MZ)()],F.prototype,"consumes",void 0),(0,h.Cg)([(0,f.MZ)()],F.prototype,"produces",void 0),F=(0,h.Cg)([(0,f.$K)("esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIllumination")],F);var P=a(23148);a(4998);function j(e){e.code.add(d.H`float mapChannel(float x, vec2 p) {
if((x < p.x) && (p.x == 0.0) || !(x < p.x) && (p.x == 1.0)) {
return 0.0;
}
float result = (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
return max(result, 0.0);
}`),e.code.add(d.H`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}var W=a(61337);function R(e){e.constants.add("ambientBoostFactor","float",.4)}function O(e){e.uniforms.add(new P.U("lightingGlobalFactor",e=>e.lighting.globalFactor))}function N(e,t){const{pbrMode:a,spherical:u,hasColorTexture:h,receiveGlobalIllumination:m}=t;e.include(r.C),e.include(H,t),e.include(i.n,t),0!==a&&e.include(l.c,t),e.include(o.W,t),e.include(s.p),e.include(W.b,t);const p=!(2===a&&!h);p&&e.include(j),R(e),O(e),(0,n.Gc)(e),e.code.add(d.H`
    float additionalDirectedAmbientLight(float lightAlignment) {
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }

    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float lightAlignment = dot(${u?d.H`normalize(vPosWorld)`:d.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }
  `),(0,n.O4)(e),e.code.add(d.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`);const f=m?"globalIlluminationOcclusion":"ssao",v=m?.75:1,g=m?1.5:1;switch(a){case 0:case 4:case 3:e.include(n.Vt),e.code.add(d.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld) * (1.0 - ssao);
vec3 albedoLinear = linearizeGamma(albedo);
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return delinearizeGamma(outColor);
}`);break;case 1:case 2:{const a=m?.35:.2;e.code.add(d.H`
        const float fillLightIntensity = 0.25;
        const float horizonLightDiffusion = 0.4;
        const float additionalAmbientIrradianceFactor = 0.02;
        const float groundReflectance = ${d.H.float(a)};

        vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
                                      vec3 viewDirection, vec3 upDirection, vec3 mrr, float additionalAmbientIrradiance) {
          PBRShadingInfo inputs;
          calculatePBRInputs(inputs, normal, viewDirection, upDirection, albedo, mrr);

          ${(0,d.If)(m,d.H`vec3 globalIlluminationOcclusion = min(1.2 * readGlobalIlluminationOcclusion(), 1.0);`)}
      `),t.useFillLights?e.uniforms.add(new c.o("hasFillLights",e=>e.enableFillLights)):e.constants.add("hasFillLights","bool",!1),e.code.add(d.H`
        vec3 ambientDir = vec3(5.0 * upDirection[1] - upDirection[0] * upDirection[2], - 5.0 * upDirection[0] - upDirection[2] * upDirection[1], upDirection[1] * upDirection[1] + upDirection[0] * upDirection[0]);
        ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent = ${d.H.float(v)} * inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
        // calculate ambient irradiance for localView and additionalLight for globalView
        vec3 ambientLightIrradianceComponent = ${d.H.float(g)} * calculateAmbientIrradiance(normal) * (1.0 - ${f}) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = groundReflectance * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),e.uniforms.add(new P.U("lightingSpecularStrength",e=>e.lighting.mainLight.specularStrength),new P.U("lightingEnvironmentStrength",e=>e.lighting.mainLight.environmentStrength)).code.add(d.H`
        vec3 horizonRingDir = inputs.RdotUP * upDirection - inputs.reflectedView;
        vec3 horizonRingH = normalize(horizonRingDir - viewDirection);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;

        // calculateAmbientRadiance for localView and additionalLight for global view
        vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance() * (1.0 - ${f}) + additionalLight;
        float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotUP + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;

        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radiance by the groundReflectance
        inputs.groundRadianceToSurface = 0.5 * groundReflectance * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;

        // Calculate average ambient radiance - This is used in the gamut mapping process to determine the black level for compression
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + groundReflectance);
      `),e.code.add(d.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent;

        ${(0,d.If)(m,d.H`
        vec3 globalIlluminationEmission = 2.25 * (0.75 * inputs.albedoLinear + 0.25) * readGlobalIlluminationEmission().rgb;
        outColorLinear += globalIlluminationEmission;`)}

      ${p?d.H`vec3 adjustedOutColorLinear = blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance);`:d.H`vec3 adjustedOutColorLinear = max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance);`}

        return delinearizeGamma(adjustedOutColorLinear);
      }
    `);break}case 5:case 6:{const t=m?.35:.5,a=m?.75:1,o=m?1.5:1;(0,n.Gc)(e),(0,n.O4)(e),e.code.add(d.H`
      const float roughnessTerrain = 0.5;
      const float specularityTerrain = ${d.H.float(t)};

      vec3 evaluatePBRSimplifiedLighting(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDirection, vec3 upDirection) {
        PBRShadingInfo inputs;
        calculateSimplifiedInputs(inputs, normal, viewDirection, upDirection, albedo);

        ${(0,d.If)(m,d.H`vec3 globalIlluminationOcclusion = min(1.2 * readGlobalIlluminationOcclusion(), 1.0);`)}

        vec3 mainLightIrradianceComponent = ${d.H.float(a)} * (1.0 - shadow) * inputs.NdotL * mainLightIntensity;
        vec3 ambientLightIrradianceComponent = ${d.H.float(o)} * calculateAmbientIrradiance(normal) * (1.0 - ${f}) + additionalLight;
        vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;

        vec3 indirectDiffuse = ((1.0 - inputs.NdotUP) * mainLightIrradianceComponent + (1.0 + inputs.NdotUP ) * ambientSky) * 0.5;
        vec3 outDiffColor = inputs.albedoLinear * (1.0 - inputs.f0) * indirectDiffuse / PI;

        vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, roughnessTerrain) * mainLightIntensity;
        vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, inputs.NdotV);
        vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
        vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;

        vec3 outColorLinear = outDiffColor + specularComponent;

        ${(0,d.If)(m,d.H`
        vec3 globalIlluminationEmission = 2.25 * (0.75 * inputs.albedoLinear + 0.25) * readGlobalIlluminationEmission().rgb;
        outColorLinear += globalIlluminationEmission;`)}

        return delinearizeGamma(outColorLinear);
      }
      `);break}}}},29199(e,t,a){a.d(t,{Q:()=>i});var o=a(86955);function i(e){e.fragment.code.add(o.H`
    float globalIlluminationNormalSimilarityWeight(vec3 sampleNormal, vec3 centerNormal) {
      return clamp(1.0 - ${o.H.float(15.3)} * length(sampleNormal - centerNormal), 0.0, 1.0);
    }

    float globalIlluminationDepthNormalCorrection(vec3 encodedNormal) {
      vec3 decodedNormal = normalize(encodedNormal * 2.0 - 1.0);
      return pow(max((1.0 - abs(decodedNormal.x)) * (1.0 - abs(decodedNormal.y)), 0.01), ${o.H.float(5)});
    }

    float globalIlluminationDepthSharpness(float projScale, float depth) {
      return ${o.H.float(-.05)} * projScale / depth;
    }

    float globalIlluminationDepthSharpness(float projScale, float depth, vec3 encodedNormal) {
      return globalIlluminationDepthSharpness(projScale, depth) * globalIlluminationDepthNormalCorrection(encodedNormal);
    }
  `)}},43557(e,t,a){a.d(t,{Gc:()=>r,O4:()=>n,Vt:()=>l});var o=a(84115),i=a(86955);function r(e){e.uniforms.add(new o.d("mainLightDirection",e=>e.lighting.mainLight.direction))}function n(e){e.uniforms.add(new o.d("mainLightIntensity",e=>e.lighting.mainLight.intensity))}function l(e){r(e),n(e),e.code.add(i.H`vec3 applyShading(vec3 shadingNormal, float shadow) {
float dotVal = clamp(dot(shadingNormal, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}},27920(e,t,a){a.d(t,{r:()=>i});var o=a(86955);function i(e,t){const a=e.fragment;switch(a.code.add(o.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case 0:a.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case 1:a.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case 2:a.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:t.doubleSidedMode;case 3:}}},42953(e,t,a){a.d(t,{c:()=>l,f:()=>s});var o=a(86955);function i(e){e.code.add(o.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.code.add(o.H`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.code.add(o.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var r=a(94759),n=a(36324);function l(e,t){e.include(r.C),e.include(n.p),1!==t.pbrMode&&2!==t.pbrMode&&5!==t.pbrMode&&6!==t.pbrMode||(e.code.add(o.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),e.code.add(o.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),e.code.add(o.H`struct PBRShadingInfo
{
float NdotV;
float NdotL;
float LdotH;
float NdotUP;
float RdotUP;
float NdotAmbDir;
float NdotH_Horizon;
float NdotH;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
vec3 reflectedView;
float averageAmbientRadiance;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),e.code.add(o.H`void calculateCommonInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo) {
vec3 h = normalize(mainLightDirection - viewDirection);
inputs.NdotV = clamp(abs(dot(normal, -viewDirection)), 0.001, 1.0);
inputs.NdotUP = clamp(dot(normal, upDirection), -1.0, 1.0);
inputs.reflectedView = normalize(reflect(-viewDirection, normal));
inputs.RdotUP = clamp(dot(inputs.reflectedView, upDirection), -1.0, 1.0);
inputs.albedoLinear = linearizeGamma(albedo);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
}`)),1!==t.pbrMode&&2!==t.pbrMode||(e.include(i),e.code.add(o.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotUP);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotUP, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),e.code.add(o.H`void calculatePBRInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo, vec3 mrr) {
calculateCommonInputs(inputs, normal, viewDirection, upDirection, albedo);
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
}`)),5!==t.pbrMode&&6!==t.pbrMode||e.code.add(o.H`const vec3 fresnelReflectionSimplified = vec3(0.04);
void calculateSimplifiedInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo) {
calculateCommonInputs(inputs, normal, viewDirection, upDirection, albedo);
float lightness = 0.3 * inputs.albedoLinear[0] + 0.5 * inputs.albedoLinear[1] + 0.2 * inputs.albedoLinear[2];
inputs.f0 = (0.85 * lightness + 0.15) * fresnelReflectionSimplified;
inputs.f90 =  vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
}`)}function s(e,t){e.include(n.p),e.code.add(o.H`
    struct PBRShadingWater {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),e.code.add(o.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),e.code.add(o.H`float normalDistributionWater(float NdotH, float roughness) {
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),e.code.add(o.H`float geometricOcclusionKelemen(float LoH) {
return 0.25 / (LoH * LoH);
}`),e.code.add(o.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max) {
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}},26719(e,t,a){a.d(t,{_:()=>d});var o=a(95352),i=a(72468),r=a(5517),n=a(86955),l=a(27374),s=a(70367),c=(a(78992),a(31432));c.Y;function d(e,t){const a=t.pbrMode,c=e.fragment;if(2!==a&&0!==a&&1!==a)return void c.code.add(n.H`void applyPBRFactors() {}`);if(0===a)return void c.code.add(n.H`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(2===a)return void c.code.add(n.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:d,hasMetallicRoughnessTextureTransform:u,hasOcclusionTexture:h,hasOcclusionTextureTransform:m,bindType:p}=t;(d||h)&&e.include(o.r,t),c.code.add(n.H`vec3 mrr;
float occlusion;`),d&&c.uniforms.add(1===p?new s.N("texMetallicRoughness",e=>e.textureMetallicRoughness):new l.o("texMetallicRoughness",e=>e.textureMetallicRoughness)),h&&c.uniforms.add(1===p?new s.N("texOcclusion",e=>e.textureOcclusion):new l.o("texOcclusion",e=>e.textureOcclusion)),c.uniforms.add(1===p?new r.t("mrrFactors",e=>e.mrrFactors):new i.W("mrrFactors",e=>e.mrrFactors)),c.code.add(n.H`
    ${(0,n.If)(d,n.H`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${(0,n.If)(h,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${h?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${(0,n.If)(d,`applyMetallicRoughness(${u?"metallicRoughnessUV":"vuv0"});`)}
      ${(0,n.If)(h,`applyOcclusion(${m?"occlusionUV":"vuv0"});`)}
    }
  `)}},51740(e,t,a){a.d(t,{LA:()=>M,QH:()=>w});a(9392);var o=a(72412),i=a(34981),r=a(86955);function n(e,t){const a=(0,i._o)(t.output)&&t.receiveShadows;a&&(0,o.o)(e,!0),e.vertex.code.add(r.H`
    void forwardLinearDepthToReadShadowMap() { ${(0,r.If)(a,"forwardLinearDepth(gl_Position.w);")} }
  `)}var l=a(51596),s=a(53908),c=a(87003);class d extends c.n{constructor(e,t,a,o){super(e,"mat4",2,(a,i,r,n)=>a.setUniformMatrices4fv(e,t(i,r,n),o),a)}}class u extends c.n{constructor(e,t,a,o){super(e,"mat4",1,(a,i,r)=>a.setUniformMatrices4fv(e,t(i,r),o),a)}}var h=a(31432);h.Y;function m(e){e.uniforms.add(new u("shadowMapMatrix",(e,t)=>t.shadowMap.getShadowMapMatrices(e.origin),4)),e.include(f)}function p(e){e.uniforms.add(new d("shadowMapMatrix",(e,t)=>t.shadowMap.getShadowMapMatrices(e.origin),4)),e.include(f)}function f(e){e.uniforms.add(new l.I("cascadeDistances",e=>e.shadowMap.cascadeDistances),new s.W("numCascades",e=>e.shadowMap.numCascades)),e.code.add(v)}const v=r.H`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
vec3 calculateUVZShadow(in vec3 _worldPos, in float _linearDepth, in ivec2 shadowMapSize) {
int i = _linearDepth < cascadeDistances[1] ? 0 : _linearDepth < cascadeDistances[2] ? 1 : _linearDepth < cascadeDistances[3] ? 2 : 3;
if (i >= numCascades) {
return invalidShadowmapUVZ;
}
mat4 shadowMatrix = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
vec3 lvpos = lightSpacePosition(_worldPos, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
return invalidShadowmapUVZ;
}
vec2 uvShadow = cascadeCoordinates(i, shadowMapSize, lvpos);
return vec3(uvShadow, lvpos.z);
}`;function g(e){e.code.add(r.H`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}var x=a(23148),b=a(4653);class y extends c.n{constructor(e,t){super(e,"sampler2DShadow",0,(a,o)=>a.bindTexture(e,t(o)))}}h.Y;function w(e,t){t.receiveShadows&&e.fragment.include(m),S(e,t)}function M(e,t){t.receiveShadows&&e.fragment.include(p),S(e,t)}function S(e,t){e.fragment.uniforms.add(new x.U("lightingGlobalFactor",e=>e.lighting.globalFactor));const{hasShadowHighlights:a,receiveShadows:o,spherical:i}=t;e.include(n,t),o&&function(e,t){(function(e,t){e.include(g),e.uniforms.add(C()),t&&e.uniforms.add(new b.x("shadowHighlight",e=>{let{shadowHighlight:t}=e;return t?.getTexture()})),e.code.add(r.H`
    float readShadowMaps(const in vec3 uvzShadow) {
      if (uvzShadow.z < 0.0) {
        return 0.0;
      }

      float shadow1 = readShadowMapUVZ(uvzShadow, shadowMap);
      ${(0,r.If)(t,"float shadow2 = texelFetch(shadowHighlight, ivec2(gl_FragCoord.xy), 0).r;\n         return shadow1 > shadow2 ? shadow1 : shadow2;","return shadow1;")}
    }
  `)})(e,t),function(e){e.code.add(r.H`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap, 0));
return readShadowMaps(uvzShadow);
}`)}(e)}(e.fragment,a),e.fragment.code.add(r.H`
    float readShadow(float additionalAmbientScale, vec3 vpos) {
      return ${o?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":(0,r.If)(i,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};
    }
  `)}function C(){return new y("shadowMap",e=>{let{shadowMap:t}=e;return t.getOutput(5)??t.getOutput(7)})}},14515(e,t,a){a.d(t,{O:()=>c});var o=a(65058),i=a(28450),r=a(23148),n=a(86955),l=a(23687),s=a(4653);function c(e,t){const a=e.fragment;a.include(o.E),a.uniforms.add(new i.E("nearFar",e=>e.camera.nearFar),new s.x("depthMap",e=>e.depth?.attachment),new l.F("proj",e=>e.camera.projectionMatrix),new r.U("invResolutionHeight",e=>1/e.camera.height),new l.F("reprojectionMatrix",e=>e.reprojection.matrix)).code.add(n.H`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate) {
    vec4 clipDepthCoordinate = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoordinate = reprojectionMatrix * vec4(
      clipDepthCoordinate.w * (projectionCoordinate.xy * 2.0 - 1.0),
      clipDepthCoordinate.z,
      clipDepthCoordinate.w
    );
    reprojectedCoordinate.xy /= reprojectedCoordinate.w;
    return reprojectedCoordinate.xy * 0.5 + 0.5;
  }

  vec4 applyProjectionMat(mat4 projectionMat, vec3 viewPosition) {
    vec4 projectedCoordinate =  projectionMat * vec4(viewPosition, 1.0);
    projectedCoordinate.xy /= projectedCoordinate.w;
    projectedCoordinate.xy = projectedCoordinate.xy*0.5 + 0.5;
    return projectedCoordinate;
  }

  float rayMarchScreenReachFromWorldReach(vec3 startPosition, vec3 rayDirection, float rayMarchWorldReach) {
    float rayDistanceWorld = max(0.0, rayMarchWorldReach);

    // Stop rays towards camera at near plane
    if (rayDirection.z > 0.0) {
      float distanceToNearPlane = (-nearFar[0] - startPosition.z) / rayDirection.z;
      rayDistanceWorld = min(rayDistanceWorld, max(0.0, distanceToNearPlane));
    }

    vec2 projectedCoordStart = applyProjectionMat(proj, startPosition).xy;
    vec2 projectedCoordEnd = applyProjectionMat(proj, startPosition + rayDirection * rayDistanceWorld).xy;
    vec2 projectedCoordOffset = projectedCoordEnd - projectedCoordStart;

    return ${t.useProjectedRayLength?"length(projectedCoordOffset)":"abs(projectedCoordOffset.y)"};
  }

  vec3 screenSpaceIntersectionWithLimits(
    vec3 rayDirection,
    vec3 startPosition,
    vec3 viewDirection,
    vec3 normal,
    float rayStepOffset,
    float rayMarchMaxReach,
    float rayMarchMaxSteps
  ) {
    vec3 viewPosition = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPosition);
    vec3 homogeneousStart = viewPosition / projectedCoordStart.w;
    float inverseWStart = 1.0 / projectedCoordStart.w;

    // Advance the position in the ray direction
    viewPosition += rayDirection;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, rayDirection);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPosition);
    vec3  homogeneousEnd = viewPosition / projectedCoordEnd.w;
    float inverseWEnd = 1.0 / projectedCoordEnd.w;

    // Calculate the ray direction in screen space
    vec2 projectedCoordDirection = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 vanishingPointScreenOffset = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float rayMarchDistance = ${t.useProjectedRayLength?"length(vanishingPointScreenOffset.xy)":"abs(vanishingPointScreenOffset.y)"};
    float clampedRayMarchDistance = min(rayMarchDistance, rayMarchMaxReach);

    float projectedCoordDirectionLength = length(projectedCoordDirection);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the ray march looks
    vec2 projectedStep = clampedRayMarchDistance * projectedCoordDirection / (rayMarchMaxSteps * projectedCoordDirectionLength);

    // Normalize the homogeneous camera space coordinates
    vec3 homogeneousStep = clampedRayMarchDistance * (homogeneousEnd - homogeneousStart) / (rayMarchMaxSteps * projectedCoordDirectionLength);
    float inverseWStep = clampedRayMarchDistance * (inverseWEnd - inverseWStart) / (rayMarchMaxSteps * projectedCoordDirectionLength);

    // initialize the variables for ray marching
    vec2 projectedPosition = projectedCoordStart.xy;
    vec3 homogeneousPosition = homogeneousStart;
    float inverseW = inverseWStart;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float previousEstimatedZ = -startPosition.z;
    float rayDepthDelta = 0.0;
    float estimatedDepthDifference;
    float sampledDepth;

    if (dot(normal, rayDirection) < 0.0 || dot(-viewDirection, normal) < 0.0) {
      return vec3(projectedPosition, 0.0);
    }

    float previousEstimatedDepthDifference = 0.0;

    projectedPosition = clamp(
      projectedPosition + rayStepOffset * projectedStep,
      vec2(0.0),
      vec2(0.999)
    );
    homogeneousPosition.z += rayStepOffset * homogeneousStep.z;
    inverseW += rayStepOffset * inverseWStep;

    int rayMarchMaxStepsInt = int(rayMarchMaxSteps);
    for(int stepIndex = 0; stepIndex < rayMarchMaxStepsInt - 1; ++stepIndex) {
      sampledDepth = -linearDepthFromTexture(depthMap, projectedPosition); // get linear depth from the depth buffer

      // Estimate depth of the marching ray
      rayStartZ = previousEstimatedZ;
      estimatedDepthDifference = -rayStartZ - sampledDepth;
      rayEndZ = (homogeneousStep.z * 0.5 + homogeneousPosition.z) / (inverseWStep * 0.5 + inverseW);
      rayDepthDelta = rayEndZ - rayStartZ;
      previousEstimatedZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || projectedPosition.y < 0.0  || projectedPosition.y > 1.0 ) {
        return vec3(projectedPosition, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - estimatedDepthDifference > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between estimatedDepthDifference and rayDepthDelta is not too large
      //  - if difference between estimatedDepthDifference and 0.025/abs(inverseW) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if(estimatedDepthDifference < 0.025 / abs(inverseW) + abs(rayDepthDelta) &&
        estimatedDepthDifference > 0.0 &&
        sampledDepth > nearFar[0] &&
        sampledDepth < nearFar[1] &&
        abs(projectedPosition.y - projectedCoordStart.y) > invResolutionHeight) {
        float hitInterpolationWeight = estimatedDepthDifference / (estimatedDepthDifference - previousEstimatedDepthDifference);
        vec2 refinedProjectedPosition = mix(projectedPosition - projectedStep, projectedPosition, 1.0 - hitInterpolationWeight);
        if (abs(refinedProjectedPosition.y - projectedCoordStart.y) > invResolutionHeight) {
          return vec3(refinedProjectedPosition, sampledDepth);
        }
        else {
          return vec3(projectedPosition, sampledDepth);
        }
      }

      ${(0,n.If)(!t.clampRayToScreen,"if (projectedPosition.x <= 0.0  || projectedPosition.x >= 1.0) {\n        return vec3(projectedPosition, 0.0);\n      }")}

      // Continue with ray marching
      projectedPosition = projectedPosition + projectedStep;
      homogeneousPosition.z += homogeneousStep.z;
      inverseW += inverseWStep;
      previousEstimatedDepthDifference = estimatedDepthDifference;

      ${(0,n.If)(t.clampRayToScreen,"projectedPosition = clamp(projectedPosition, vec2(0.0), vec2(0.999));")}
    }
    return vec3(projectedPosition, 0.0);
  }

  vec3 screenSpaceIntersection(vec3 rayDirection, vec3 startPosition, vec3 viewDirection, vec3 normal, float rayStepOffset) {
    return screenSpaceIntersectionWithLimits(
      rayDirection,
      startPosition,
      viewDirection,
      normal,
      rayStepOffset,
      ${n.H.float(t.rayMarchMaxReach)},
      ${n.H.float(t.rayMarchMaxSteps)}
    );
  }
  `)}},55696(e,t,a){a.d(t,{MU:()=>s,O1:()=>c,QM:()=>d,Sx:()=>l,q2:()=>n});var o=a(44680),i=a(86955),r=a(72106);function n(e,t){t.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new r.k("colorTextureTransformMatrix",e=>e.colorTextureTransformMatrix??o.zK)).code.add(i.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardColorUV(){}`)}function l(e,t){t.hasNormalTextureTransform&&0!==t.textureCoordinateType?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new r.k("normalTextureTransformMatrix",e=>e.normalTextureTransformMatrix??o.zK)).code.add(i.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardNormalUV(){}`)}function s(e,t){t.hasEmissionTextureTransform&&0!==t.textureCoordinateType?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new r.k("emissiveTextureTransformMatrix",e=>e.emissiveTextureTransformMatrix??o.zK)).code.add(i.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardEmissiveUV(){}`)}function c(e,t){t.hasOcclusionTextureTransform&&0!==t.textureCoordinateType?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new r.k("occlusionTextureTransformMatrix",e=>e.occlusionTextureTransformMatrix??o.zK)).code.add(i.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardOcclusionUV(){}`)}function d(e,t){t.hasMetallicRoughnessTextureTransform&&0!==t.textureCoordinateType?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new r.k("metallicRoughnessTextureTransformMatrix",e=>e.metallicRoughnessTextureTransformMatrix??o.zK)).code.add(i.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardMetallicRoughnessUV(){}`)}},37516(e,t,a){a.d(t,{S:()=>r});a(19771);var o=a(21390),i=a(49560);function r(e,t){n(e,t,new o.m("textureAlphaCutoff",e=>e.textureAlphaCutoff))}function n(e,t,a){const o=e.fragment;switch(o.code.add("void discardOrAdjustAlpha(inout vec4 color) {"),t.alphaDiscardMode){case 1:o.code.add("color.a = 1.0;");break;case 0:o.include(i.Q),o.code.add("if (color.a < alphaCutoff) discard;");break;case 3:o.uniforms.add(a).code.add("if (color.a < textureAlphaCutoff) discard;");break;case 2:o.uniforms.add(a).code.add("\n        if (color.a < textureAlphaCutoff) discard;\n        color.a = 1.0;\n      ");break;case 4:break;default:t.alphaDiscardMode}o.code.add("}")}},1652(e,t,a){a.d(t,{R:()=>i});var o=a(86955);function i(e){e.code.add(o.H`
    vec3 quantizeGlobalIlluminationColor(vec3 color) {
      vec3 clampedColor = clamp(color, vec3(0.0), vec3(1.0));
      return floor(clampedColor * ${o.H.float(255)} + 0.5) * ${o.H.float(1/255)};
    }
  `)}},85114(e,t,a){a.d(t,{b:()=>r});var o=a(23148),i=a(86955);function r(e,t){t.snowCover&&(e.uniforms.add(new o.U("snowCover",e=>e.snowCover)).code.add(i.H`float getSnow(vec3 normal, vec3 groundNormal) {
return smoothstep(0.5, 0.55, dot(normal, groundNormal)) * snowCover;
}
float getRealisticTreeSnow(vec3 faceNormal, vec3 shadingNormal, vec3 groundNormal) {
float snow = min(1.0, smoothstep(0.5, 0.55, dot(faceNormal, groundNormal)) +
smoothstep(0.5, 0.55, dot(-faceNormal, groundNormal)) +
smoothstep(0.0, 0.1, dot(shadingNormal, groundNormal)));
return snow * snowCover;
}`),e.code.add(i.H`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}`))}},42589(e,t,a){a.d(t,{BH:()=>w,e7:()=>b});var o=a(6326),i=a(91967),r=(a(18690),a(54099)),n=a(64385),l=a(86300),s=a(44680),c=a(34761),d=a(13191),u=a(98268),h=a(9392),m=a(88105),p=a(94966),f=a(48549),v=a(61785),g=a(86994);class x{constructor(e){this.localTransform=e.localTransform,this.globalTransform=e.globalTransform,this.modelOrigin=e.modelOrigin,this.model=e.instanceModel,this.modelNormal=e.instanceModelNormal,this.modelScaleFactors=e.modelScaleFactors,this.boundingSphere=e.boundingSphere,this.featureAttribute=e.getField("instanceFeatureAttribute",m.Eq),this.color=e.getField("instanceColor",m.XP),this.olidColor=e.getField("instanceOlidColor",m.XP),this.state=e.getField("state",m.SL),this.lodLevel=e.getField("lodLevel",m.SL)}}let b=class extends i.A{constructor(e,t){super(e),this.events=new r.bk,this._capacity=0,this._size=0,this._next=0,this._highlightOptionsMap=new Map,this._highlightOptionsMapPrev=new Map,this._layout=function(e){return w(y.clone(),e).u8("state").u8("lodLevel")}(t),this._capacity=I,this._buffer=this._layout.createBuffer(this._capacity),this._view=new x(this._buffer)}get capacity(){return this._capacity}get size(){return this._size}get view(){return this._view}addInstance(){this._size+1>this._capacity&&this._grow();const e=this._findSlot();return this._view.state.set(e,1),this._size++,this.events.emit("instances-changed"),e}removeInstance(e){const t=this._view.state;(0,g.vA)(e>=0&&e<this._capacity&&!!(1&t.get(e)),"invalid instance handle"),this._getStateFlag(e,18)?this._setStateFlags(e,32):this.freeInstance(e),this.events.emit("instances-changed")}freeInstance(e){const t=this._view.state;(0,g.vA)(e>=0&&e<this._capacity&&!!(1&t.get(e)),"invalid instance handle"),t.set(e,0),this._size--}setLocalTransform(e,t){let a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this._view.localTransform.setMat(e,t),a&&this.updateModelTransform(e)}getLocalTransform(e,t){this._view.localTransform.getMat(e,t)}setGlobalTransform(e,t){let a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this._view.globalTransform.setMat(e,t),a&&this.updateModelTransform(e)}getGlobalTransform(e,t){this._view.globalTransform.getMat(e,t)}updateModelTransform(e){const t=this._view,a=M,o=S;t.localTransform.getMat(e,C),t.globalTransform.getMat(e,T);const i=(0,c.lw)(T,T,C);(0,u.hZ)(a,i[12],i[13],i[14]),t.modelOrigin.setVec(e,a),(0,l.z0)(o,i),t.model.setMat(e,o);const r=(0,p.wp)(M,i);r.sort(),t.modelScaleFactors.set(e,0,r[1]),t.modelScaleFactors.set(e,1,r[2]),(0,l.B8)(o,o),(0,l.mg)(o,o),t.modelNormal.setMat(e,o),this._setStateFlags(e,64),this.events.emit("instance-transform-changed",{index:e})}getModelTransform(e,t){const a=this._view;a.model.getMat(e,S),a.modelOrigin.getVec(e,M),t[0]=S[0],t[1]=S[1],t[2]=S[2],t[3]=0,t[4]=S[3],t[5]=S[4],t[6]=S[5],t[7]=0,t[8]=S[6],t[9]=S[7],t[10]=S[8],t[11]=0,t[12]=M[0],t[13]=M[1],t[14]=M[2],t[15]=1}applyShaderTransformation(e,t){null!=this.shaderTransformation&&this.shaderTransformation.applyTransform(this,e,t)}getCombinedModelTransform(e,t){return this.getModelTransform(e,t),null!=this.shaderTransformation&&this.shaderTransformation.applyTransform(this,e,t),t}getCombinedLocalTransform(e,t){this._view.localTransform.getMat(e,t),null!=this.shaderTransformation&&this.shaderTransformation.applyTransform(this,e,t)}getCombinedMaxScaleFactor(e){let t=this._view.modelScaleFactors.get(e,1);return null!=this.shaderTransformation&&(this.shaderTransformation.scaleFactor(M,this,e),t*=Math.max(M[0],M[1],M[2])),t}getCombinedMedianScaleFactor(e){let t=this._view.modelScaleFactors.get(e,0);return null!=this.shaderTransformation&&(this.shaderTransformation.scaleFactor(M,this,e),t*=function(e,t,a){return Math.max(Math.min(e,t),Math.min(Math.max(e,t),a))}(M[0],M[1],M[2])),t}getModel(e,t){this._view.model.getMat(e,t)}setFeatureAttribute(e,t){this._view.featureAttribute?.setVec(e,t)}getFeatureAttribute(e,t){this._view.featureAttribute?.getVec(e,t)}setColor(e,t){this._view.color?.setVec(e,t)}setObjectAndLayerIdColor(e,t){this._view.olidColor?.setVec(e,t)}setVisible(e,t){t!==this.getVisible(e)&&(this._setStateFlag(e,4,t),this.events.emit("instance-visibility-changed",{index:e}))}getVisible(e){return this._getStateFlag(e,4)}setHighlight(e,t){const{_highlightOptionsMap:a}=this,o=a.get(e);t?t!==o&&(a.set(e,t),this._setStateFlag(e,8,!0),this.events.emit("instance-highlight-changed")):o&&(a.delete(e),this._setStateFlag(e,8,!1),this.events.emit("instance-highlight-changed"))}get highlightOptionsMap(){return this._highlightOptionsMap}getHighlightStateFlag(e){return this._getStateFlag(e,8)}geHighlightOptionsPrev(e){const t=this._highlightOptionsMapPrev.get(e)??null;return this._highlightOptionsMapPrev.delete(e),t}getHighlightName(e){const t=this.highlightOptionsMap.get(e)??null;return t?this._highlightOptionsMapPrev.set(e,t):this._highlightOptionsMapPrev.delete(e),t}getState(e){return this._view.state.get(e)}getLodLevel(e){return this._view.lodLevel.get(e)}countFlags(e){let t=0;for(let a=0;a<this._capacity;++a)this.getState(a)&e&&++t;return t}_setStateFlags(e,t){const a=this._view.state;t=a.get(e)|t,a.set(e,t)}_clearStateFlags(e,t){const a=this._view.state;t=a.get(e)&~t,a.set(e,t)}_setStateFlag(e,t,a){a?this._setStateFlags(e,t):this._clearStateFlags(e,t)}_getStateFlag(e,t){return!!(this._view.state.get(e)&t)}_grow(){this._capacity=Math.max(I,Math.floor(1.5*this._capacity)),this._buffer=this._layout.createBuffer(this._capacity).copyFrom(this._buffer),this._view=new x(this._buffer)}_findSlot(){const e=this._view.state;let t=this._next;for(;1&e.get(t);)t=t+1===this._capacity?0:t+1;return this._next=t+1===this._capacity?0:t+1,t}};(0,o.Cg)([(0,n.MZ)({constructOnly:!0})],b.prototype,"shaderTransformation",void 0),(0,o.Cg)([(0,n.MZ)()],b.prototype,"_size",void 0),(0,o.Cg)([(0,n.MZ)({readOnly:!0})],b.prototype,"size",null),b=(0,o.Cg)([(0,n.$K)("esri.views.3d.webgl-engine.lib.lodRendering.InstanceData")],b);const y=(0,f.BP)().mat4f64("localTransform").mat4f64("globalTransform").vec4f64("boundingSphere").vec3f64("modelOrigin").mat3f("instanceModel").mat3f("instanceModelNormal").vec2f("modelScaleFactors");function w(e,t){return t.instancedFeatureAttribute&&e.vec4f("instanceFeatureAttribute"),t.instancedColor&&e.vec4u8("instanceColor"),(0,v.E)()&&e.vec4u8("instanceOlidColor"),e}const M=(0,h.vt)(),S=(0,s.vt)(),C=(0,d.vt)(),T=(0,d.vt)(),I=64},53760(e,t,a){a.d(t,{Ui:()=>h,Qm:()=>p});var o=a(18690),i=a(88105),r=a(48549),n=a(86994),l=a(57481),s=a(9243);class c{constructor(e,t,a){this.elementSize=t.stride,this._buffer=new s.R(e,(0,l.U)(t,1)),this.resize(a)}destroy(){this._buffer.dispose()}get capacity(){return this._capacity}get array(){return this._array}get buffer(){return this._buffer}get usedMemory(){return this._array.byteLength+this._buffer.usedMemory}copyRange(e,t,a){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const i=new Uint8Array(this.array,e*this.elementSize,(t-e)*this.elementSize);new Uint8Array(a.array,o*this.elementSize).set(i)}transferAll(){this._buffer.setData(this._array)}transferRange(e,t){const a=e*this.elementSize,o=t*this.elementSize;this._buffer.setSubData(new Uint8Array(this._array),a,a,o)}resize(e){const t=e*this.elementSize,a=new ArrayBuffer(t);this._array&&(e>=this._capacity?new Uint8Array(a).set(new Uint8Array(this._array)):new Uint8Array(a).set(new Uint8Array(this._array).subarray(0,e*this.elementSize))),this._array=a,this._buffer.setSize(t),this._capacity=e}}var d=a(42589);class u{constructor(e){this.model=e.instanceModel,this.modelNormal=e.instanceModelNormal,this.modelOriginHi=e.instanceModelOriginHi,this.modelOriginLo=e.instanceModelOriginLo,this.featureAttribute=e.getField("instanceFeatureAttribute",i.Eq),this.color=e.getField("instanceColor",i.XP),this.olidColor=e.getField("instanceOlidColor",i.XP)}}class h{constructor(e,t){this._rctx=e,this._layout=t,this._headIndex=0,this._tailIndex=0,this._firstIndex=null,this._captureFirstIndex=!0,this._updating=!1,this._prevHeadIndex=0,this._resized=!1,this._capacity=1}destroy(){this._buffer&&this._buffer.destroy()}get buffer(){return this._buffer.buffer}get view(){return this._view}get capacity(){return this._capacity}get size(){const e=this._headIndex,t=this._tailIndex;return e>=t?e-t:e+this._capacity-t}get isEmpty(){return this._headIndex===this._tailIndex}get isFull(){return this._tailIndex===(this._headIndex+1)%this._capacity}get headIndex(){return this._headIndex}get tailIndex(){return this._tailIndex}get firstIndex(){return this._firstIndex}get usedMemory(){return this._buffer?.usedMemory??0}reset(){this._headIndex=0,this._tailIndex=0,this._firstIndex=null}startUpdateCycle(){this._captureFirstIndex=!0}beginUpdate(){(0,n.vA)(!this._updating,"already updating"),this._updating=!0,this._prevHeadIndex=this._headIndex}endUpdate(){(0,n.vA)(this._updating,"not updating"),this.size<.5*this.capacity&&this._shrink(),this._resized?(this._buffer.transferAll(),this._resized=!1):this._transferRange(this._prevHeadIndex,this._headIndex),this._updating=!1}allocateHead(){(0,n.vA)(this._updating,"not updating"),this.isFull&&this._grow();const e=this.headIndex;return this._captureFirstIndex&&(this._firstIndex=e,this._captureFirstIndex=!1),this._incrementHead(),(0,n.vA)(this._headIndex!==this._tailIndex,"invalid pointers"),e}freeTail(){(0,n.vA)(this._updating,"not updating"),(0,n.vA)(this.size>0,"invalid size");const e=this._tailIndex===this._firstIndex;this._incrementTail(),e&&(this._firstIndex=this._tailIndex)}_grow(){const e=Math.max(64,Math.floor(1.5*this._capacity));this._resize(e)}_shrink(){const e=Math.max(64,Math.floor(this._capacity*o.He));this._resize(e)}_resize(e){if((0,n.vA)(this._updating,"not updating"),e===this._capacity)return;const t=new c(this._rctx,this._layout,e);if(this._buffer){this._firstIndex&&(this._firstIndex=(this._firstIndex+this._capacity-this._tailIndex)%this._capacity);const e=this.size,a=this._compactInstances(t);(0,n.vA)(a===e,"invalid compaction"),this._buffer.destroy(),this._tailIndex=0,this._headIndex=a,this._prevHeadIndex=0}this._resized=!0,this._capacity=e,this._buffer=t,this._view=new u(this._layout.createView(this._buffer.array))}_compactInstances(e){const t=this._headIndex,a=this._tailIndex;return a<t?(this._buffer.copyRange(a,t,e),t-a):a>t?(this._buffer.copyRange(a,this._capacity,e),t>0&&this._buffer.copyRange(0,t,e,this._capacity-a),t+(this._capacity-a)):0}_incrementHead(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this._headIndex=(this._headIndex+e)%this._capacity}_incrementTail(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this._tailIndex=(this._tailIndex+e)%this._capacity}_transferRange(e,t){e<t?this._buffer.transferRange(e,t):e>t&&(t>0&&this._buffer.transferRange(0,t),this._buffer.transferRange(e,this._capacity))}}const m=(0,r.BP)().vec3f("instanceModelOriginHi").vec3f("instanceModelOriginLo").mat3f("instanceModel").mat3f("instanceModelNormal");function p(e){return(0,d.BH)(m.clone(),e)}},65131(e,t,a){a.d(t,{$U:()=>C});var o=a(98268),i=a(9392),r=a(34981),n=a(75803),l=a(45463),s=a(48168),c=a(97974),d=a(82809),u=a(2555),h=a(99362),m=a(37267),p=a(6326),f=a(6485),v=a(50389);class g extends v.L{constructor(e){super(),this.spherical=e,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.pbrMode=0,this.cullFace=0,this.normalType=0,this.customDepthTest=0,this.emissionSource=0,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.instanced=!1,this.instancedDoublePrecision=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.receiveShadows=!1,this.hasShadowHighlights=!1,this.receiveAmbientOcclusion=!1,this.receiveGlobalIllumination=!1,this.textureAlphaPremultiplied=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.writeDepth=!0,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0,this.draped=!1}get textureCoordinateType(){return this.hasTextures?1:0}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||3===this.emissionSource||this.hasOcclusionTexture}get hasVVInstancing(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}(0,p.Cg)([(0,f.W)({count:4})],g.prototype,"alphaDiscardMode",void 0),(0,p.Cg)([(0,f.W)({count:3})],g.prototype,"doubleSidedMode",void 0),(0,p.Cg)([(0,f.W)({count:7})],g.prototype,"pbrMode",void 0),(0,p.Cg)([(0,f.W)({count:3})],g.prototype,"cullFace",void 0),(0,p.Cg)([(0,f.W)({count:3})],g.prototype,"normalType",void 0),(0,p.Cg)([(0,f.W)({count:3})],g.prototype,"customDepthTest",void 0),(0,p.Cg)([(0,f.W)({count:8})],g.prototype,"emissionSource",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"hasVertexColors",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"hasSymbolColors",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"hasVerticalOffset",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"hasColorTexture",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"hasMetallicRoughnessTexture",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"hasOcclusionTexture",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"hasNormalTexture",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"hasScreenSizePerspective",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"hasVertexTangents",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"hasOccludees",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"instanced",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"instancedDoublePrecision",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"hasModelTransformation",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"offsetBackfaces",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"hasVVSize",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"hasVVColor",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"receiveShadows",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"hasShadowHighlights",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"receiveAmbientOcclusion",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"receiveGlobalIllumination",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"textureAlphaPremultiplied",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"instancedFeatureAttribute",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"instancedColor",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"writeDepth",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"snowCover",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"hasColorTextureTransform",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"hasEmissionTextureTransform",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"hasNormalTextureTransform",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"hasOcclusionTextureTransform",void 0),(0,p.Cg)([(0,f.W)()],g.prototype,"hasMetallicRoughnessTextureTransform",void 0);var x=a(64385),b=a(12418),y=a(35249);let w=class extends m.R5{constructor(){super(...arguments),this.shader=new b.r(y.R,()=>a.e(77919).then(a.bind(a,77919)))}};w=(0,p.Cg)([(0,x.$K)("esri.views.3d.webgl-engine.shaders.RealisticTreeTechnique")],w);var M=a(94749),S=a(75569);class C extends l.i{constructor(e,t){super(e,I),this.materialType="default",this.supportsEdges=!0,this.intersectDraped=void 0,this.produces=new Map([[2,e=>(0,r.uw)(e)&&!this.transparent],[4,e=>(0,r.uw)(e)&&this.transparent&&this.parameters.writeDepth],[8,e=>(0,r.uw)(e)&&this.transparent&&!this.parameters.writeDepth]]),this._layout=(0,m.bP)(this.parameters),this._configuration=new g(t.spherical)}isVisibleForOutput(e){return 5!==e&&7!==e&&6!==e||this.parameters.castShadows}get visible(){const{layerOpacity:e,colorMixMode:t,opacity:a,externalColor:o}=this.parameters;return e*("replace"===t?1:a)*("ignore"===t||isNaN(o[3])?1:o[3])>=S.Q}get _hasEmissiveBase(){return!!this.parameters.emissiveTextureId||!(0,o.t2)(this.parameters.emissiveBaseColor,i.uY)}get emissions(){return this.parameters.emissiveStrength>0&&(0===this.parameters.emissiveSource&&this._hasEmissiveBase||1===this.parameters.emissiveSource)?this.transparent?2:1:0}updateConfiguration(e){super.updateConfiguration(e);const{parameters:t,_configuration:a}=this;a.hasNormalTexture=t.hasNormalTexture,a.hasColorTexture=t.hasColorTexture,a.hasMetallicRoughnessTexture=t.hasMetallicRoughnessTexture,a.hasOcclusionTexture=t.hasOcclusionTexture;const{treeRendering:o,doubleSided:i,doubleSidedType:n}=t;a.hasVertexTangents=!o&&t.hasVertexTangents,a.instanced=t.instanced,a.instancedDoublePrecision=t.instancedDoublePrecision,a.hasVVColor=!!t.vvColor,a.hasVVSize=!!t.vvSize,a.hasVerticalOffset=null!=t.verticalOffset,a.hasScreenSizePerspective=null!=t.screenSizePerspective,a.hasSlicePlane=t.hasSlicePlane,a.alphaDiscardMode=t.textureAlphaMode,a.normalType=o?0:t.normalType,a.transparent=this.transparent,a.enableOITOffset=e.enableOITOffset,a.writeDepth=t.writeDepth,a.customDepthTest=t.customDepthTest??0,a.hasOccludees=e.hasOccludees,a.cullFace=t.hasSlicePlane?0:t.cullFace,a.hasModelTransformation=!o&&null!=t.modelTransformation,a.hasVertexColors=t.hasVertexColors,a.hasSymbolColors=t.hasSymbolColors,a.doubleSidedMode=o?2:i&&"normal"===n?1:i&&"winding-order"===n?2:0,a.instancedFeatureAttribute=t.instancedFeatureAttribute,a.instancedColor=t.instancedColor,(0,r._o)(e.output)?(a.receiveShadows=t.receiveShadows,a.hasShadowHighlights=(0,M.w)(a,e),a.receiveAmbientOcclusion=t.receiveAmbientOcclusion&&null!=e.ssao,a.receiveGlobalIllumination=t.receiveAmbientOcclusion&&e.globalIlluminationEnabled):a.receiveShadows=a.hasShadowHighlights=a.receiveAmbientOcclusion=!1,a.textureAlphaPremultiplied=!!t.textureAlphaPremultiplied,a.pbrMode=t.usePBR?t.isSchematic?2:1:0,a.emissionSource=t.emissionSource,a.offsetBackfaces=!(!this.transparent||!t.offsetTransparentBackfaces),a.snowCover=e.snowCover>0,a.hasColorTextureTransform=!!t.colorTextureTransformMatrix,a.hasNormalTextureTransform=!!t.normalTextureTransformMatrix,a.hasEmissionTextureTransform=!!t.emissiveTextureTransformMatrix,a.hasOcclusionTextureTransform=!!t.occlusionTextureTransformMatrix,a.hasMetallicRoughnessTextureTransform=!!t.metallicRoughnessTextureTransformMatrix}intersect(e,t,a,i,r,n){if(null!=this.parameters.verticalOffset){const e=a.camera;(0,o.hZ)(P,t[12],t[13],t[14]);let n=null;switch(a.viewingMode){case 1:n=(0,o.S8)(F,P);break;case 2:n=(0,o.C)(F,D)}const l=(0,o.Re)(j,P,e.eye),s=(0,o.Bw)(l),c=(0,o.hs)(l,l,1/s);let d=null;this.parameters.screenSizePerspective&&(d=(0,o.Om)(n,c));const u=(0,h.kE)(e,s,this.parameters.verticalOffset,d??0,this.parameters.screenSizePerspective,null);(0,o.hs)(n,n,u),(0,o.ei)(H,n,a.transform.inverseRotation),i=(0,o.Re)(_,i,H),r=(0,o.Re)(z,r,H)}n=(0,u.b)(n,this._configuration,i,r),(0,s.Uy)(e,a,i,r,(0,c.ou)(a.verticalOffset),n)}createGLMaterial(e){return new T(e)}createBufferWriter(){return new d.Z(this._layout)}get transparent(){return function(e){const{drivenOpacity:t,opacity:a,externalColor:o,layerOpacity:i,texture:r,textureId:n,textureAlphaMode:l,colorMixMode:s}=e,c=o[3];return t||a<1&&"replace"!==s||c<1&&"ignore"!==s||i<1||(null!=r||null!=n)&&1!==l&&2!==l&&"replace"!==s}(this.parameters)}}class T extends n.m8{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const t=this._material.parameters;this.updateTexture(t.textureId);const a=e.camera.viewInverseTransposeMatrix;return(0,o.hZ)(t.origin,a[3],a[7],a[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(t.treeRendering?w:m.R5,e)}}class I extends m.uD{constructor(){super(...arguments),this.treeRendering=!1,this.useIndexing=!1,this.hasVertexTangents=!1}get hasNormalTexture(){return!this.treeRendering&&!!this.normalTextureId}get hasColorTexture(){return!!this.textureId}get hasMetallicRoughnessTexture(){return!this.treeRendering&&!!this.metallicRoughnessTextureId}get hasOcclusionTexture(){return!this.treeRendering&&!!this.occlusionTextureId}get emissiveStrength(){return this.emissiveStrengthFromSymbol*this.emissiveStrengthKHR}get emissionSource(){return null!=this.emissiveTextureId&&0===this.emissiveSource?3:0===this.emissiveSource?2:1}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||3===this.emissionSource||this.hasOcclusionTexture}}const _=(0,i.vt)(),z=(0,i.vt)(),D=(0,i.fA)(0,0,1),F=(0,i.vt)(),H=(0,i.vt)(),P=(0,i.vt)(),j=(0,i.vt)()},78992(e,t,a){a.d(t,{Jr:()=>r});var o=a(98268),i=a(9392);function r(e){let{normalTexture:t,metallicRoughnessTexture:a,metallicFactor:r,roughnessFactor:n,emissiveTexture:l,emissiveFactor:s,occlusionTexture:c}=e;return null==t&&null==a&&null==l&&(null==s||(0,o.t2)(s,i.uY))&&null==c&&(null==n||1===n)&&(null==r||1===r)}const n=(0,i.CN)(1,1,.5),l=(0,i.CN)(0,.6,.2),s=(0,i.CN)(0,1,.2);a.d(t,["Bt",0,l,"SY",0,s,"mb",0,n])},37267(e,t,a){a.d(t,{Au:()=>T,R5:()=>S,V:()=>M,bP:()=>I,uD:()=>w});var o=a(6326),i=a(64385),r=a(9392),n=a(55855),l=a(57481),s=a(48549),c=a(55386),d=a(12418),u=a(59246),h=a(61785),m=a(60322),p=a(96643),f=a(53760),v=a(78992),g=a(56840),x=a(68745),b=a(57162),y=a(75569);class w extends c.Zo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=v.mb,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=2,this.instanced=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.instanceColorEncodesAlphaIgnore=!1,this.emissiveStrengthFromSymbol=0,this.emissiveStrengthKHR=1,this.emissiveSource=1,this.emissiveBaseColor=r.uY,this.instancedDoublePrecision=!1,this.normalType=0,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=(0,r.CN)(.2,.2,.2),this.diffuse=(0,r.CN)(.8,.8,.8),this.externalColor=(0,n.fA)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,r.vt)(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.modelTransformation=null,this.drivenOpacity=!1,this.writeDepth=!0,this.customDepthTest=0,this.textureAlphaMode=0,this.textureAlphaCutoff=y.Q,this.textureAlphaPremultiplied=!1,this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}class M extends c.gy{constructor(){super(...arguments),this.origin=(0,r.vt)(),this.slicePlaneLocalOrigin=this.origin}}let S=class extends u.w{constructor(e,t){let o=(0,l.U)(I(t));t.instanced&&t.instancedDoublePrecision&&(o=o.concat((0,l.U)((0,f.Qm)(t)))),super(e,t,o),this.shader=new d.r(x.D,()=>a.e(23727).then(a.bind(a,23727))),this.ignoreUnused=!0}_makePipeline(e,t){const{output:a,transparent:o,cullFace:i,customDepthTest:r,hasOccludees:n}=e;return(0,b.Ey)({blending:o?(0,m.Yf)(a,!1,e.emissionDimmingPass):null,culling:T(e)?(0,b.Xt)(i):null,depthTest:(0,m.mt)(a,C(r)),depthWrite:(0,m.z5)(e),colorWrite:b.kn,stencilWrite:n?p.v0:null,stencilTest:n?t?p.Ax:p.cP:null,polygonOffset:(0,g.s)(e)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e,t,a){return a?this._occludeePipelineState:super.getPipeline(e,t,a)}};function C(e){switch(e){case 1:return 515;case 0:case 3:return 513;case 2:return 516}}function T(e){return 0!==e.cullFace||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}function I(e){const t=(0,s.BP)().vec3f("position");return 1===e.normalType?t.vec2i16("normalCompressed",{glNormalized:!0}):t.vec3f("normal"),e.hasVertexTangents&&t.vec4f("tangent"),e.hasTextures&&t.vec2f16("uv0"),e.hasVertexColors&&t.vec4u8("color",{glNormalized:!0}),e.hasSymbolColors&&t.vec4u8("symbolColor"),!e.instanced&&(0,h.E)()&&t.vec4u8("olidColor"),t}S=(0,o.Cg)([(0,i.$K)("esri.views.3d.webgl-engine.shaders.DefaultMaterialTechnique")],S)},94749(e,t,a){a.d(t,{w:()=>n});var o=a(6326),i=a(6485);class r extends i.K{constructor(){super(...arguments),this.receiveShadows=!0}}function n(e,t){return e.receiveShadows&&null!=t.shadowHighlight?.getTexture()}(0,o.Cg)([(0,i.W)()],r.prototype,"receiveShadows",void 0)},61337(e,t,a){a.d(t,{b:()=>i});var o=a(86955);function i(e){e.code.add(o.H`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`),e.code.add(o.H`vec3 tonemapKhronosNeutral(vec3 color) {
const float startCompression = 0.76;
const float desaturation = 0.15;
float peak = max(color.r, max(color.g, color.b));
if (peak < startCompression) {
return color;
}
float d = 1.0 - startCompression;
float newPeak = 1.0 - d * d / (peak + d - startCompression);
color *= newPeak / peak;
float g = 1.0 - 1.0 / (desaturation * (peak - newPeak) + 1.0 );
return mix(color, vec3(newPeak), g);
}`)}}}]);
//# sourceMappingURL=55761.51f74dc8.chunk.js.map