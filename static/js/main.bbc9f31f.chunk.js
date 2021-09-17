(this["webpackJsonpok-wpa-maps"]=this["webpackJsonpok-wpa-maps"]||[]).push([[0],{29:function(e,t,a){e.exports=a(50)},34:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(4),o=a.n(i),l=(a(34),a(3)),s=a(13),c=a.n(s),u=a(10),d=a(11);function m(e){var t=Object(r.useState)([{content:n.a.createElement("div",null,n.a.createElement("h1",null,"Draw and transcribe map data"),n.a.createElement("div",{className:"imgContainer"},n.a.createElement("img",{alt:"Draw a shape representing a \r parcel of land and transcribe the ",src:"/ok-wpa-maps/img/wpa3.gif"}))),placement:"auto",target:".drawShapes",disableBeacon:!0},{content:n.a.createElement("div",null,n.a.createElement("h1",null,"Review existing entries"),n.a.createElement("h3",null,"If you don't see any errors, click",n.a.createElement("strong",null,n.a.createElement("calcite-icon",{scale:"s",icon:"check"}),"Looks Good!")),n.a.createElement("div",{className:"imgContainer"},n.a.createElement("img",{alt:"Reviewing parcels",src:"/ok-wpa-maps/img/wpa7.gif"}))),placement:"auto",target:".reviewShapes",disableBeacon:!0},{content:n.a.createElement("div",null,n.a.createElement("h1",null,"Review existing entries"),n.a.createElement("h3",null,"If you see something incorrect or missing, click",n.a.createElement("strong",null,n.a.createElement("calcite-icon",{scale:"s",icon:"pencil"}),"Edit feature")),n.a.createElement("div",{className:"imgContainer"},n.a.createElement("img",{alt:"Reviewing parcels",src:"/ok-wpa-maps/img/wpa8.gif"}))),placement:"auto",target:".reviewShapes",disableBeacon:!0},{content:n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",null,"Right click and drag to change the rotation of the map."),n.a.createElement("div",{className:"imgContainer"},n.a.createElement("img",{alt:"Demonstration of rotating the map",src:"/ok-wpa-maps/img/wpa4.gif"})),n.a.createElement("p",null," Press the compass button to reset")),placement:"center",target:"body",disableBeacon:!0},{content:n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",null,"Keep track of your progress."),n.a.createElement("div",{className:"imgContainer"}),n.a.createElement("p",null,"Sign in with your ArcGIS Online account. Or, ",n.a.createElement("a",{href:"https://www.arcgis.com/sharing/rest/oauth2/signup?client_id=l3OWRmRCGfkAN4Dh&redirect_uri=http://localhost:3000/ok-wpa-maps&response_type=code"},"create one")," for free.")),placement:"center",target:".trackProgress",disableBeacon:!0},{content:n.a.createElement("div",null,n.a.createElement("a",{href:"https://info.library.okstate.edu/map-room/wpa-maps"},n.a.createElement("h1",null,"Click to learn more about the collection"))),placement:"center",target:"body",disableBeacon:!0}]),a=Object(l.a)(t,2),i=a[0];a[1];return n.a.createElement(d.b,{callback:function(t){var a=t.status;t.type,[d.a.FINISHED,d.a.SKIPPED].includes(a)&&e.toggleIntro(!1)},continuous:!0,floaterProps:{disableAnimation:!0},run:e.runIntro,scrollToFirstStep:!0,showProgress:!0,showSkipButton:!0,steps:i,styles:{options:{zIndex:1e4,width:800}}})}var p=a(25),h=a(26),f=a(6),g=a(28),w=a(27),b={title:"Land Info",elements:[{type:"group",label:"Owner Information",elements:[{type:"field",fieldName:"OwnerLastName",id:"HITHEREIMTHEID",label:"Owner's Last Name (if an individual)"},{type:"field",fieldName:"OwnerFirstNameAndMI",label:"Owner's First Name or initials (if an individual)"},{type:"field",fieldName:"OwnerOrgName",label:"Owner (if an entity or organization)"}]},{type:"group",label:"Land and Improvement Valuation",elements:[{type:"field",fieldName:"LandValue",label:"Land Value"},{type:"field",fieldName:"ImprovementsValue2",label:"Improvements Value"}]},{type:"field",fieldName:"TaxExempt",label:"Marked with an X?"}]},v={title:"Please doublecheck the info below.",content:[{type:"fields",fieldInfos:[{fieldName:"OwnerLastName",label:"Owner's Last Name (if an individual)"},{fieldName:"OwnerFirstNameAndMI",label:"Owner's First Name or initials (if an individual)"},{fieldName:"OwnerOrgName",label:"Owner (if an entity or organization)"},{fieldName:"LandValue",label:"Land Value"},{fieldName:"ImprovementsValue2",label:"Improvements Value"},{fieldName:"TaxExempt",label:"Marked with an X?"}]}],actions:[{title:"Looks good!",id:"this-looks-ok",className:"esri-icon-check-mark"},{title:"Edit feature",id:"edit-this",className:"esri-icon-edit"}]};function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var E=n.a.createElement("path",{id:"spinner",fill:"#Fe5c00",d:"M40,72C22.4,72,8,57.6,8,40C8,22.4,   22.4,8,40,8c17.6,0,32,14.4,32,32c0,1.1-0.9,2-2,2   s-2-0.9-2-2c0-15.4-12.6-28-28-28S12,24.6,12,40s12.6,   28,28,28c1.1,0,2,0.9,2,2S41.1,72,40,72z"}),O=function(e){var t=e.svgRef,a=e.title,r=k(e,["svgRef","title"]);return n.a.createElement("svg",y({className:"svg-loader",x:"0px",y:"0px",viewBox:"0 0 80 80",ref:t},r),a?n.a.createElement("title",null,a):null,E)},F=n.a.forwardRef((function(e,t){return n.a.createElement(O,y({svgRef:t},e))}));a.p;function I(e){return Math.floor(Math.random()*Math.floor(e))}var j=function(e){Object(g.a)(a,e);var t=Object(w.a)(a);function a(e){var r;return Object(p.a)(this,a),(r=t.call(this,e)).featureTileUrl="https://tiles.arcgis.com/tiles/jWQlP64OuwDh6GGX/arcgis/rest/services/_wpa_all_6Aug2020/MapServer",r.featureVectorUrl="https://services1.arcgis.com/jWQlP64OuwDh6GGX/arcgis/rest/services/WPA_Maps_Land_Parcels_Public/FeatureServer/0",r.backgroundFeatureUrl="https://services1.arcgis.com/jWQlP64OuwDh6GGX/ArcGIS/rest/services/Oklahoma_Public_Land_Survey_Sections/FeatureServer/0",r.reviewerTableUrl="https://services1.arcgis.com/jWQlP64OuwDh6GGX/arcgis/rest/services/WPA_Reviewers/FeatureServer/0",r.mapRef=n.a.createRef(),r.workflow=e.workflow,r.editThis=r.editThis.bind(Object(f.a)(r)),r.incrementReviewerCount=r.incrementReviewerCount.bind(Object(f.a)(r)),r.sayThanks=r.sayThanks.bind(Object(f.a)(r)),r.reviewWorkflow=r.reviewWorkflow.bind(Object(f.a)(r)),r.getRandomFeatureForReview=r.getRandomFeatureForReview.bind(Object(f.a)(r)),r.getRandomBackgroundFeature=r.getRandomBackgroundFeature.bind(Object(f.a)(r)),r.toggleLoadIndicator=r.toggleLoadIndicator.bind(Object(f.a)(r)),r.rotationChange=r.rotationChange.bind(Object(f.a)(r)),r.updateTimesChecked=r.updateTimesChecked.bind(Object(f.a)(r)),r.state={updateFeature:null,mapRotation:0,backgroundFeatureObjectIds:null,loadIndicator:!0},r}return Object(h.a)(a,[{key:"getRandomFeatureForReview",value:function(){var e=this,t=this,a=I(this.objectIds.length-1),r=this.featureVectorLayer.createQuery();r.where="OBJECTID = "+this.objectIds[a],this.featureVectorLayer.queryFeatures(r).then((function(a){t.view.goTo(a.features[0].geometry.extent),t.view.popup.features=a.features,t.view.popup.visible=!0,t.setState({updateFeature:a.features[0]}),e.view.whenLayerView(e.featureVectorLayer).then((function(e){t.highlightedFeature=e.highlight(a.features[0])}))}))}},{key:"getRandomBackgroundFeature",value:function(){var e,t=this,a=this.state.backgroundFeatureObjectIds,r=a[I(a.length)];this.backgroundFeatureLayer.definitionExpression="OBJECTID = "+r,this.backgroundFeatureLayer.when((function(){return t.backgroundFeatureLayer.queryExtent()})).then((function(a){e=a.extent;var r=t.featureVectorLayer.createQuery();return r.spatialRelationship="contains",r.distance=250,r.units="feet",r.returnCentroid=!0,r.returnGeometry=!1,r.geometry=a.extent,t.featureVectorLayer.queryFeatures(r)})).then((function(a){0===a.features.length?t.view.goTo(e):t.getRandomBackgroundFeature()}))}},{key:"reviewWorkflow",value:function(){var e=this;this.featureVectorLayer.queryObjectIds().then((function(t){e.objectIds=t,e.getRandomFeatureForReview()}))}},{key:"toggleLoadIndicator",value:function(e,t){this.setState({loadIndicator:e}),this.loadIndicatorWatch.remove()}},{key:"rotationChange",value:function(e,t,a){0===t&&0!==e&&this.view.ui.add(this.compass,"top-left"),0!==t&&0===e&&this.view.ui.remove(this.compass)}},{key:"componentDidUpdate",value:function(e,t,a){null===t.backgroundFeatureObjectIds&&null!==this.state.backgroundFeatureObjectIds&&this.getRandomBackgroundFeature()}},{key:"componentDidMount",value:function(){var e=this;Object(u.loadModules)(["esri/Map","esri/Basemap","esri/views/MapView","esri/layers/FeatureLayer","esri/views/layers/FeatureLayerView","esri/layers/TileLayer","esri/widgets/Compass","esri/widgets/Editor","esri/widgets/Sketch","esri/Graphic","esri/core/watchUtils"],{css:!0}).then((function(t){var a=Object(l.a)(t,11),r=a[0],n=a[1],i=a[2],o=a[3],s=(a[4],a[5]),c=a[6],u=a[7],d=(a[8],a[9]),m=a[10];e.graphic=d;var p=new s({url:e.featureTileUrl});e.map=new r({basemap:new n({baseLayers:[p]})}),e.backgroundFeatureLayer=new o({url:e.backgroundFeatureUrl}),e.view=new i({container:e.mapRef.current,map:e.map,highlightOptions:{color:"#fe5c00",fillOpacity:.1},popup:{dockEnabled:!0,dockOptions:{buttonEnabled:!1,breakpoint:!1}}}),e.compass=new c({view:e.view}),e.loadIndicatorWatch=e.view.watch("updating",e.toggleLoadIndicator),e.view.watch("rotation",e.rotationChange);var h=document.createElement("div");h.className="esri-icon-refresh esri-widget--button esri-widget esri-interactive ",h.title="create"===e.workflow?"Go to another random location.":"Get another entry to review.",h.addEventListener("click",(function(){switch(e.workflow){case"create":e.getRandomBackgroundFeature();break;case"update":e.getRandomFeatureForReview();break;default:alert("moo")}})),e.view.ui.add(h,"bottom-left"),e.featureVectorLayer=new o({url:e.featureVectorUrl,popupTemplate:v,formTemplate:b,groupDisplay:"sequential"}),e.featureVectorLayer.on("edits",(function(t){if(t.updatedFeatures.length>0&&e.highlightedFeature&&(e.incrementReviewerCount(),e.sayThanks(),e.view.ui.remove(e.editor)),t.addedFeatures.length>0){var a=t.addedFeatures[0].objectId;e.featureVectorLayer.queryFeatures({objectIds:[a],outFields:["OBJECTID","CREATOR_PUBLIC"]}).then((function(t){t.features[0].setAttribute("CREATOR_PUBLIC",e.props.creds.userId);var a={updateFeatures:[t.features[0]]};e.featureVectorLayer.applyEdits(a)}))}}));var f=e;e.editor=new u({view:e.view,allowedWorkflows:[e.workflow],snappingOptions:{enabled:!0,featureSources:[{layer:e.featureVectorLayer},{layer:e.backgroundFeatureLayer}]},layerInfos:[{view:e.view,layer:e.featureVectorLayer,allowAttachments:!1,deleteEnabled:!1}],supportingWidgetDefaults:{featureForm:{id:"featureFormKD"}}}),e.editor.postInitialize=function(){m.init(this,"messages",(function(e){e.widgetLabel="WPA Maps",e.addFeature="Draw a new shape",e.editFeature="Review an existing record"}))},e.editor.viewModel.sketchViewModel.on("create",(function(e){"complete"===e.state&&(e.graphic.attributes={TaxExempt:"No"})})),e.editor.viewModel.watch("syncing",(function(e,t,a,r){var n=document.getElementsByClassName("esri-editor__control-button");0!==n.length&&(f.toggleLoadIndicator(e,t),!0===e&&(n[0].disabled="disabled",n[0].classList.add("esri-button--disabled")),!1===e&&(n[0].removeAttribute("disabled"),n[0].classList.remove("esri-button--disabled")))})),e.view.popup.on("trigger-action",(function(e){"edit-this"===e.action.id&&f.editThis(),"this-looks-ok"===e.action.id&&f.updateTimesChecked()})),"create"===e.workflow&&(e.backgroundFeatureLayer.queryObjectIds().then((function(t){f.setState({backgroundFeatureObjectIds:t}),f.map.add(e.backgroundFeatureLayer)})),e.featureVectorLayer.popupEnabled=!1,e.view.ui.add(e.editor,"bottom-right")),"update"===e.workflow&&(e.reviewerTable=new o({url:e.reviewerTableUrl}),e.reviewWorkflow()),e.map.add(e.featureVectorLayer)}))}},{key:"updateTimesChecked",value:function(){var e=this.state.updateFeature,t=e.getAttribute("timesChecked");e.setAttribute("timesChecked",t+1);var a={updateFeatures:[e]};this.featureVectorLayer.applyEdits(a),this.highlightedFeature.remove()}},{key:"incrementReviewerCount",value:function(){var e=this;this.props.creds&&this.reviewerTable.queryFeatures({where:"userId = '"+this.props.creds.userId+"'",outFields:["OBJECTID","reviewCount"]}).then((function(t){t.features.length>0?(t.features[0].setAttribute("reviewCount",t.features[0].attributes.reviewCount+1),e.reviewerTable.applyEdits({updateFeatures:[t.features[0]]})):e.reviewerTable.applyEdits({addFeatures:[new e.graphic({attributes:{userId:e.props.creds.userId,reviewCount:1}})]})}))}},{key:"sayThanks",value:function(){var e=this;this.props.setModalContent(n.a.createElement("div",null,n.a.createElement("h1",null,"Thank you!"),n.a.createElement("p",null,"Here's another entry to check."))),this.props.openModal(),setTimeout((function(){e.props.closeModal()}),2e3),this.toggleLoadIndicator(!1),this.highlightedFeature.remove(),this.getRandomFeatureForReview(),this.view.popup.close()}},{key:"editThis",value:function(){var e=this.view,t=this.editor;e.when((function(){t.viewModel.activeWorkFlow||(e.popup.visible=!1,t.startUpdateWorkflowAtFeatureEdit(e.popup.selectedFeature),e.ui.add(t,"bottom-right"),e.popup.spinnerEnabled=!1),setTimeout((function(){var a=t.domNode.getElementsByClassName("esri-editor__back-button esri-interactive");1===a.length&&(a[0].setAttribute("title","Cancel edits, return to popup"),a[0].addEventListener("click",(function(a){a.preventDefault(),e.ui.remove(t)})))}),150)}))}},{key:"componentWillUnmount",value:function(){this.view&&(this.view.container=null)}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,this.state.loadIndicator&&n.a.createElement("div",{className:"loadIndicator"},n.a.createElement(F,null)),n.a.createElement("div",{className:"webmap",ref:this.mapRef}))}}]),a}(n.a.Component),C=(a(48),a(49),"l3OWRmRCGfkAN4Dh"),R=window.location.protocol+"//"+window.location.host+window.location.pathname;var L={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};var N=function(){var e=Object(r.useState)(!0),t=Object(l.a)(e,2),a=t[0],i=t[1],o=Object(r.useState)(!1),s=Object(l.a)(o,2),d=s[0],p=s[1],h=Object(r.useState)(0),f=Object(l.a)(h,2),g=f[0],w=f[1],b=Object(r.useState)(""),v=Object(l.a)(b,2),y=v[0],k=v[1],E=Object(r.useState)(!1),O=Object(l.a)(E,2),F=O[0],I=O[1],N=Object(r.useState)(!1),T=Object(l.a)(N,2),S=T[0],A=T[1],M=Object(r.useState)(!1),_=Object(l.a)(M,2),x=_[0],V=_[1],P=Object(r.useState)(!1),B=Object(l.a)(P,2),W=B[0],D=B[1],U=Object(r.useState)(!1),G=Object(l.a)(U,2),q=G[0],Q=G[1],X=Object(r.useState)(!1),z=Object(l.a)(X,2),H=z[0],J=z[1],K=["Good job!","Way to go!","Wow!","That's super!","Awesome!","Alright!"],$=Object(r.useState)(K[Math.floor(Math.random()*Math.floor(K.length))]),Y=Object(l.a)($,2),Z=Y[0],ee=(Y[1],"https://www.arcgis.com/sharing/rest/oauth2/signup?client_id="+C+"&redirect_uri="+R+"&response_type=token");function te(){p(!1)}return c.a.setAppElement("#root"),Object(r.useEffect)((function(){Object(u.loadModules)(["esri/identity/OAuthInfo","esri/identity/IdentityManager","esri/layers/FeatureLayer","esri/portal/Portal"],{css:!0}).then((function(e){var t=Object(l.a)(e,4),a=t[0],r=t[1],n=t[2],i=t[3],o=new a({appId:"l3OWRmRCGfkAN4Dh",popup:!1});J(o),Q(r),r.registerOAuthInfos([o]);var s=function(e){for(var t={},a=(e=e||window.location.href).slice(e.indexOf("#")+1).split("&"),r=0;r<a.length;r++){var n=a[r].split("=");n.length>1?t[n[0]]=n[1]:t[n[0]]=null}return t}();if("access_token"in s){var c=s.access_token,u=s.username,d=s.expires_in;r.registerToken({token:c,userId:u,expires:d,server:"https://www.arcgis.com/sharing/rest"}),r.getCredential(o.portalUrl+"/sharing")}r.checkSignInStatus(o.portalUrl+"/sharing").then((function(e){V(e);new i(o.portalUrl).load().then((function(e){D(e.user.fullName)}));var t=new n({url:"https://services1.arcgis.com/jWQlP64OuwDh6GGX/arcgis/rest/services/WPA_Maps_Land_Parcels_Public/FeatureServer/0"}),a=t.createQuery();a.where="CREATOR_PUBLIC = '"+e.userId+"'",a.outStatistics=[{onStatisticField:"CREATOR_PUBLIC",outStatisticFieldName:"CREATOR_COUNT",statisticType:"count"}],t.queryFeatures(a).then((function(e){e.features.length>0&&A(e.features[0].getAttribute("CREATOR_COUNT"))}))})).catch((function(){}))}))}),[]),n.a.createElement("div",{className:"App"},n.a.createElement(m,{runIntro:F,toggleIntro:I,oauthInfo:H}),n.a.createElement(c.a,{isOpen:d,onAfterOpen:function(){},onRequestClose:te,style:L,contentLabel:"Modal"},y),!0===a&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Oklahoma 1936 Land Ownership Map Transcription"),n.a.createElement("div",{className:"flex-row"},n.a.createElement("button",{tabindex:"0",className:"drawShapes",onClick:function(){i(!1),w("create")}},n.a.createElement("calcite-icon",{scale:"l",class:"big-icon",icon:"addInNew"}),n.a.createElement("br",null),"Draw some shapes"),n.a.createElement("button",{tabindex:"0",className:"reviewShapes",onClick:function(){i(!1),w("update")}},n.a.createElement("calcite-icon",{scale:"l",class:"big-icon",icon:"editAttributes"}),n.a.createElement("br",null),"Review existing shapes"),n.a.createElement("button",{tabindex:"0",onClick:function(){I(!F)}},n.a.createElement("calcite-icon",{scale:"l",class:"big-icon",icon:"question"}),n.a.createElement("br",null),"View the intro")),!1===W&&n.a.createElement("div",{className:"trackProgress"},n.a.createElement("h2",null,"Track your progress:"),n.a.createElement("div",{className:"flex-row"},n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("button",{tabindex:"0",className:"signInOut",onClick:function(){q.getCredential(H.portalUrl+"/sharing").then((function(e){V(e)}))}},n.a.createElement("calcite-icon",{scale:"l",className:"big-icon",icon:"sign-in"}),n.a.createElement("br",null)," Sign in"),n.a.createElement("a",{tabindex:"0",href:ee},n.a.createElement("button",{className:"createAccount"},n.a.createElement("calcite-icon",{scale:"l",className:"big-icon",icon:"user-plus"}),n.a.createElement("br",null)," Create an account")))),!1!==W&&!1!==S&&n.a.createElement("div",{className:"flex-row"},n.a.createElement("h3",null,"Hi ",W,"! So far you've added",n.a.createElement("span",{style:{fontSize:"2em"}},"\xa0",S,"\xa0"),1===S?"shape":"shapes",". ",S>0?Z:""),n.a.createElement("br",null),n.a.createElement("button",{className:"signInOut",onClick:function(){x.destroy(),window.location=window.location.pathname}},n.a.createElement("calcite-icon",{scale:"l",class:"big-icon",icon:"sign-out"})," ",n.a.createElement("br",null)," Click to sign out"))),!1===a&&n.a.createElement(j,{workflow:g,creds:x,openModal:function(){p(!0)},closeModal:te,setModalContent:k}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.bbc9f31f.chunk.js.map