"use strict";(self.webpackChunkok_wpa_maps=self.webpackChunkok_wpa_maps||[]).push([[3275],{15909:(e,t,a)=>{a.d(t,{D:()=>i});var r=a(80292);function i(e){(null===e||void 0===e?void 0:e.writtenProperties)&&e.writtenProperties.forEach((e=>{let{target:t,propName:a,newOrigin:i}=e;(0,r.l)(t)&&i&&t.originOf(a)!==i&&t.updateOrigin(a,i)}))}},80292:(e,t,a)=>{function r(e){return e&&"getAtOrigin"in e&&"originOf"in e}a.d(t,{l:()=>r})},63275:(e,t,a)=>{a.d(t,{save:()=>y,saveAs:()=>m});var r=a(65286),i=a(73117);const o="Image Service",n="imagery-layer-save",l="imagery-layer-save-as",s="imagery-tile-layer-save",c="imagery-tile-layer-save-as";function u(e){var t;if("imagery"===e.type)return{isValid:!0};const{raster:a}=e,r="Function"===(null===a||void 0===a?void 0:a.datasetFormat)?null===(t=a.primaryRasters)||void 0===t?void 0:t.rasters[0]:a;return{isValid:"RasterTileServer"===(null===r||void 0===r?void 0:r.datasetFormat)&&("Raster"===r.tileType||"Map"===r.tileType),errorMessage:"imagery tile layer should be created from a tiled image service."}}function d(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function p(e,t){const{parsedUrl:a,title:r,fullExtent:o}=e;t.url=a.path,t.title||(t.title=r),t.extent=await(0,i.$o)(o),"imagery-tile"===e.type&&(0,i.qj)(t,i.Kz.TILED_IMAGERY)}async function y(e,t){const a="imagery"===e.type?n:s;return(0,r.a1)({layer:e,itemType:o,validateLayer:u,createItemData:d,errorNamePrefix:a},t)}async function m(e,t,a){const i="imagery"===e.type?l:c;return(0,r.po)({layer:e,itemType:o,validateLayer:u,createItemData:d,errorNamePrefix:i,newItem:t,setItemProperties:p},a)}},65286:(e,t,a)=>{a.d(t,{a1:()=>w,po:()=>g});var r=a(10064),i=a(15909),o=a(7575),n=a(98995),l=a(32698),s=a(73117),c=a(81359);async function u(e){const{layer:t,errorNamePrefix:a,validateLayer:i}=e;await t.load(),function(e,t,a){const i=a(e);if(!i.isValid)throw new r.Z("".concat(t,":invalid-parameters"),i.errorMessage,{layer:e})}(t,a,i)}function d(e,t){return"Layer (title: ".concat(e.title,", id: ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(t)}function p(e){const{item:t,itemType:a,errorNamePrefix:i,layer:o,validateItem:n}=e;if((0,c.w)(t),t.type!==a)throw new r.Z("".concat(i,":portal-item-wrong-type"),'Portal item type should be "'.concat(a,'"'),{item:t,layer:o});if(n){const e=n(t);if(!e.isValid)throw new r.Z("".concat(i,":invalid-parameters"),e.errorMessage,{layer:o})}}function y(e){const{layer:t,errorNamePrefix:a}=e,{portalItem:i}=t;if(!i)throw new r.Z("".concat(a,":portal-item-not-set"),d(t,"requires the portalItem property to be set"));if(!i.loaded)throw new r.Z("".concat(a,":portal-item-not-loaded"),d(t,"cannot be saved to a portal item that does not exist or is inaccessible"));p({...e,item:i})}function m(e){var t,a,r,i;const{newItem:l,itemType:s}=e;let c=n.default.from(l);return c.id&&(c=c.clone(),c.id=null),null!==(a=(t=c).type)&&void 0!==a||(t.type=s),null!==(i=(r=c).portal)&&void 0!==i||(r.portal=o.Z.getDefault()),p({...e,item:c}),c}async function v(e,t,a){var i,o;"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const n=e.write({},t);return await Promise.all(null!==(i=null===(o=t.resources)||void 0===o?void 0:o.pendingOperations)&&void 0!==i?i:[]),function(e,t){var a;let i=(null!==(a=e.messages)&&void 0!==a?a:[]).filter((e=>{let{type:t}=e;return"error"===t})).map((e=>{let{name:t,message:a,details:i}=e;return new r.Z(t,a,i)}));if(e.blockedRelativeUrls&&(i=i.concat(e.blockedRelativeUrls.map((e=>new r.Z("url:unsupported","Relative url '".concat(e,"' is not supported")))))),null!==t&&void 0!==t&&t.ignoreUnsupported&&(i=i.filter((e=>{let{name:t}=e;return"layer:unsupported"!==t&&"symbol:unsupported"!==t&&"symbol-layer:unsupported"!==t&&"property:unsupported"!==t&&"url:unsupported"!==t}))),i.length>0)throw new r.Z("layer-write:unsupported","Failed to save layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:i})}(t,a),n}function f(e){(0,s.qj)(e,s.Kz.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,a)=>a.indexOf(e)===t)))}async function w(e,t){const{layer:a,createItemData:r,createJSONContext:o,saveResources:n}=e;await u(e),y(e);const s=a.portalItem,c=o?o(s):(0,l.Yv)(s),d=await v(a,c,t),p=await r({layer:a,layerJSON:d},s);return f(s),await s.update({data:p}),(0,i.D)(c),await(null===n||void 0===n?void 0:n(s,c)),s}async function g(e,t){const{layer:a,createItemData:r,createJSONContext:o,setItemProperties:n,saveResources:s}=e;await u(e);const c=m(e),d=o?o(c):(0,l.Yv)(c),p=await v(a,d,t),y=await r({layer:a,layerJSON:p},c);return await n(a,c),f(c),await async function(e,t,a){var r;const i=e.portal;await i.signIn(),await(null===(r=i.user)||void 0===r?void 0:r.addItem({item:e,data:t,folder:null===a||void 0===a?void 0:a.folder}))}(c,y,t),a.portalItem=c,(0,i.D)(d),await(null===s||void 0===s?void 0:s(c,d)),c}},81359:(e,t,a)=>{a.d(t,{w:()=>n});var r=a(42265),i=a(10064),o=a(66660);function n(e){if(r.default.apiKey&&(0,o.r)(e.portal.url))throw new i.Z("save-api-key-utils:api-key-not-supported","Saving is not supported on ".concat(e.portal.url," when using an api key"))}}}]);
//# sourceMappingURL=3275.015ebfe3.chunk.js.map