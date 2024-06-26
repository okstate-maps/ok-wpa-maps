import React from 'react';
import ReactGA from "react-ga4";
import ArcGISMap from '@arcgis/core/Map';
import Basemap from '@arcgis/core/Basemap';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
//import FeatureLayerView from '@arcgis/core/views/layers/FeatureLayerView';
import TileLayer from '@arcgis/core/layers/TileLayer';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import Compass from '@arcgis/core/widgets/Compass';
import Editor from '@arcgis/core/widgets/Editor';
import Popup from "@arcgis/core/widgets/Popup.js";
//import Sketch from '@arcgis/core/widgets/Sketch';
import Graphic from '@arcgis/core/Graphic';
//import DistanceMeasurement2D from '@arcgis/core/widgets/DistanceMeasurement2D';
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import * as geodesicUtils from "@arcgis/core/geometry/support/geodesicUtils";
import {CreateFormTemplate, ReviewFormTemplate, ThankYouTemplate} from './FormTemplates';
import {ReactComponent as LoadIndicator} from './loader.svg';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export class WebMapView extends React.Component {
  constructor(props) {
    super(props);

    //TODO move these URLs into a separate file
    this.featureTileUrl = 'https://tiles.arcgis.com/tiles/jWQlP64OuwDh6GGX/arcgis/rest/services/_wpa_all_6Aug2020/MapServer';
    //this.featureTileUrl = 'https://tiles.arcgis.com/tiles/jWQlP64OuwDh6GGX/arcgis/rest/services/osage_cache3/MapServer';
    this.featureVectorUrl = 'https://services1.arcgis.com/jWQlP64OuwDh6GGX/arcgis/rest/services/WPA_Maps_Land_Parcels_Public/FeatureServer/0';
    //this.featureVectorUrl = 'https://services1.arcgis.com/jWQlP64OuwDh6GGX/arcgis/rest/services/WPA_Maps_Land_Parcels_Osage/FeatureServer/0';
    this.featureVectorTileUrl = 'https://vectortileservices1.arcgis.com/jWQlP64OuwDh6GGX/arcgis/rest/services/WPA_Maps_Land_Parcels_Vector_Tile/VectorTileServer';
    this.backgroundFeatureUrl = 'https://services1.arcgis.com/jWQlP64OuwDh6GGX/ArcGIS/rest/services/Oklahoma_Public_Land_Survey_Sections/FeatureServer/0';
    //this.backgroundFeatureUrl = 'https://services1.arcgis.com/jWQlP64OuwDh6GGX/arcgis/rest/services/PLSSFirstDivis_Osage/FeatureServer/0';
    this.reviewerTableUrl = 'https://services1.arcgis.com/jWQlP64OuwDh6GGX/arcgis/rest/services/WPA_Reviewers/FeatureServer/0';
    


    this.mapRef = React.createRef();
    this.workflow = props.workflow;
    this.editThis = this.editThis.bind(this);
    this.incrementReviewerCount = this.incrementReviewerCount.bind(this);
    this.sayThanks = this.sayThanks.bind(this);
    this.reviewWorkflow = this.reviewWorkflow.bind(this);
    this.getRandomFeatureForReview = this.getRandomFeatureForReview.bind(this);
    this.getRandomBackgroundFeature = this.getRandomBackgroundFeature.bind(this);
    this.toggleLoadIndicator = this.toggleLoadIndicator.bind(this);
    this.rotationChange = this.rotationChange.bind(this);
    this.updateTimesChecked = this.updateTimesChecked.bind(this);
    this.state = {
      updateFeature: null,
      mapRotation: 0,
      backgroundFeatureObjectIds: null,
      loadIndicator: true
    };
  }

  getRandomFeatureForReview() {
    var that = this;
    var randomId = getRandomInt(this.objectIds.length - 1);     
    var q = this.featureVectorLayer.createQuery();
    q.where = 'OBJECTID = ' + this.objectIds[randomId];
    this.featureVectorLayer.queryFeatures(q).then((response) => {
      that.view.goTo(response.features[0].geometry.extent);
      that.view.popup.features = response.features;
      that.view.popup.visible = true;
      that.setState({updateFeature: response.features[0]});
      this.view.whenLayerView(this.featureVectorLayer).then(function(layerView){
        that.highlightedFeature = layerView.highlight(response.features[0]);
      });
    });

  }

  getRandomBackgroundFeature() {
    var backgroundFeatureExtent;
    var oids = this.state.backgroundFeatureObjectIds;
    var featId = oids[getRandomInt(oids.length)];

    this.backgroundFeatureLayer.definitionExpression = 'OBJECTID = ' + featId;
    
    this.backgroundFeatureLayer
    .when(() =>{
      return this.backgroundFeatureLayer.queryExtent();
    })
    .then((response) => {
      backgroundFeatureExtent = response.extent;
      let query = this.featureVectorLayer.createQuery();
      query.spatialRelationship = 'contains';
      query.distance = 250;
      query.units = 'feet';
      query.returnCentroid = true;
      query.returnGeometry = false;
      query.geometry = response.extent; 
      return this.featureVectorLayer.queryFeatures(query)
    }).then((resp) => {
      if (resp.features.length === 0){
        this.view.goTo(backgroundFeatureExtent);
      }
      else {
        this.getRandomBackgroundFeature();
      }
    });
  }

  reviewWorkflow() {
    var that = this;    
    this.featureVectorLayer.queryObjectIds().then((objectIds) => {
      that.objectIds = objectIds;
      that.getRandomFeatureForReview();
    });
  }

  toggleLoadIndicator(newLoadVal, oldLoadVal) {
    this.setState({"loadIndicator": newLoadVal});
    this.loadIndicatorWatch.remove(); //remove after initial load. It gets too messy IMO 
  }

  rotationChange(newRot, oldRot, propName) {
    if (oldRot === 0 && newRot !== 0) {
      this.view.ui.add(this.compass, 'top-left');
    }

    if (oldRot !== 0 && newRot === 0) {
      this.view.ui.remove(this.compass);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (prevState.backgroundFeatureObjectIds === null &&
  //     this.state.backgroundFeatureObjectIds !== null) {
  //     this.getRandomBackgroundFeature();
   //}
  }

componentDidMount() {
      this.graphic = Graphic;

      let featureTileLayer = new TileLayer({
        url: this.featureTileUrl
      });
      
      let featureVectorTileLayer = new VectorTileLayer(this.featureVectorTileUrl, {maxScale:40000});

      this.map = new ArcGISMap({
        basemap: new Basemap({baseLayers:[featureTileLayer]})
      });
      
      this.backgroundFeatureLayer = new FeatureLayer({
        url: this.backgroundFeatureUrl
      });

      
      this.view = new MapView({
        container: this.mapRef.current,
        map: this.map,
        highlightOptions: {
          color: [255, 255,255, 1],
          haloOpacity:1,
          fillOpacity: 0.3
        },
        popup: new Popup({
          dockEnabled: true,
          dockOptions: {
            // Disables the dock button from the popup
            buttonEnabled: false,
            // Ignore the default sizes that trigger responsive docking
            breakpoint: false
          }
        })
      });

      this.compass = new Compass({
        view: this.view
      });
      
      this.loadIndicatorWatch = this.view.watch('updating', this.toggleLoadIndicator);
      this.view.watch('rotation', this.rotationChange);

      var refreshButton = document.createElement('div');
      refreshButton.className = 'esri-icon-refresh esri-widget--button esri-widget esri-interactive ';
      refreshButton.title = this.workflow === 'create-features' ? 
        'Go to another random location.' : 
        'Get another entry to review.';
      
      refreshButton.addEventListener('click', () => {
        switch (this.workflow) {
          case 'create-features': 
          this.getRandomBackgroundFeature();
          break;
          case 'update':
          this.getRandomFeatureForReview();
          break;
          default:
          alert('moo');
        }
      });

      //this.view.ui.add(refreshButton, 'bottom-left');

      //measurement widget, but let's not use it for now
      
      // this.measurement = new DistanceMeasurement2D({
      //   view: this.view,
      //   activeTool: 'distance',
      //   unit: 'feet'
      // });
      //this.view.ui.add(this.measurement, 'bottom-left');
         
      this.featureVectorLayer = new FeatureLayer({
        url: this.featureVectorUrl,
        minScale: 40000,
        renderer:  {
          type: "simple",  // autocasts as new SimpleRenderer()
          symbol: {
            type: "simple-fill",  // autocasts as new SimpleMarkerSymbol()
            color: [255,0,0,0.2],
            outline: {  // autocasts as new SimpleLineSymbol()
              width: 1,
              color: "red"
            }
          }
        },
        //definitionExpression
        popupTemplate: ReviewFormTemplate,
        formTemplate: CreateFormTemplate,
        groupDisplay: 'sequential'
      });

      this.featureVectorLayer.on('edits', (e) => {
        if (e.updatedFeatures.length > 0 && this.highlightedFeature) {
          this.incrementReviewerCount(e.updatedFeatures.length);
          this.sayThanks();
          this.view.ui.remove(this.editor);
        }
        if (e.addedFeatures.length > 0) {

          let addedFeatureIds = e.addedFeatures.map(x => x.objectId);
          //console.log(addedFeatureIds);
          this.featureVectorLayer.queryFeatures({
              objectIds: addedFeatureIds,
              returnGeometry: true,
              outSpatialReference: {wkid:4326},
              outFields: ['OBJECTID',
                          'CREATOR_PUBLIC',
                          'acreage',
                          'OwnerFirstNameAndMI',
                          'OwnerLastName',
                           'OwnerOrgName',
                          'LandValue',
                          'ImprovementsValue2']
            }).then(
              (fs) => {
                let feats = fs.features;

                feats.forEach((x) => {
                  x.setAttribute(
                  'CREATOR_PUBLIC', 
                  this.props.creds.userId
                  );
                  let acres = geodesicUtils.geodesicAreas([x.geometry], "acres");
                  x.setAttribute('acreage', acres[0]);
                }
                );
            
                let edits = {updateFeatures: feats};
                this.featureVectorLayer.applyEdits(edits);
              }
            );
            ReactGA.event('wpa_transcript_create',
              {
                category: "TRANSCRIPTION",
                action: "SUBMIT_NEW_RECORD"
              //   label: "your label", // optional
              //   value: 99, // optional, must be a number
              //   nonInteraction: true, // optional, true/false
              //   transport: "xhr", // optional, beacon/xhr/image
              }
            );

          }
        } );
      var that = this;
      this.editor = new Editor({
        view: this.view,
        visibleElements: {editFeaturesSection: false},
        allowedWorkflows: [this.workflow],
        snappingOptions: {
           enabled: true,
           featureSources: [
             { layer: this.featureVectorLayer },
              {layer: this.backgroundFeatureLayer}
            ]
           },
        layerInfos: [{
          view: this.view,
          layer: this.featureVectorLayer,
          attachmentsOnCreateEnabled: false,
          attachmentsOnUpdateEnabled: false,
          deleteEnabled: false
        }],
        supportingWidgetDefaults: {
          featureForm: {
            id: 'featureForm'
          }
        }
        
      });
     
      
      // I can't believe this is the only way to override widget labelling, but here we are
      this.editor.postInitialize = function(){
        //reactiveUtils.watch(()=>this.messages, (messages) => {
          console.log(this);
          window.editor_widget = this;
          this.messages.widgetLabel = 'WPA Maps';
          this.messages.createFeatures = 'Draw new shapes';
          this.messages.editFeature = 'Review an existing record';
        //});
      };

      //prepopulate fields after done sketching shape
      this.editor.viewModel.sketchViewModel.on('create', 
        function(e){        
          if (e.state === "complete"){
            console.log(e.graphic.attributes);
            e.graphic.attributes["TaxExempt"]= "No";
            console.log(e.graphic.attributes);
            
          }

        }
      );

      //an attempt to prevent identical features from being created due to lack of feedback
      //from the editor widget
      this.editor.viewModel.watch('syncing', 
        function(newVal,oldVal, propName, target){
          
          let editButton = document.getElementsByClassName('esri-editor__control-button');
          if (editButton.length === 0){
            return;
          }
        
          that.toggleLoadIndicator(newVal,oldVal); 
            
          if (newVal === true) {
            editButton[0].disabled = 'disabled';
            editButton[0].classList.add('esri-button--disabled');
          }

          if (newVal === false) {

            editButton[0].removeAttribute('disabled');
            editButton[0].classList.remove('esri-button--disabled');
          }
        }
      );

      
      //this.editor.viewModel.featureFormViewModel.on("value-change", function(e){console.log("value-change")});
      

      // Event handler that fires each time an action is clicked
      this.view.popup.on('trigger-action', function (event) {
        if (event.action.id === 'edit-this') {
          that.editThis();
        }

        if (event.action.id === 'this-looks-ok'){
          that.updateTimesChecked();
        }

      });       

      // for creation, pick a random background feature and zoom to it
      // if (this.workflow === 'create') {
    
      //   this.backgroundFeatureLayer.queryObjectIds()
      //     .then((oids) => {
      //       that.setState({"backgroundFeatureObjectIds": oids});
      //       that.map.add(this.backgroundFeatureLayer);
      //     });

      //   this.featureVectorLayer.popupEnabled = false;
      //   this.view.ui.add(this.editor, 'bottom-right');
      // }

      // for creation, pick a random background feature and zoom to it
      if (this.workflow === 'create-features') {
    
        // this.backgroundFeatureLayer.queryObjectIds()
        //   .then((oids) => {
        //     that.setState({"backgroundFeatureObjectIds": oids});
        //     that.map.add(this.backgroundFeatureLayer);
        //   });

        this.featureVectorLayer.popupEnabled = false;
        this.view.ui.add(this.editor, 'bottom-right');
      }

      

      // for reviewing, pick a random polygon and zoom to it
      if (this.workflow === 'update') {
        this.reviewerTable = new FeatureLayer({
          url: this.reviewerTableUrl
        });

        this.reviewWorkflow();
      }

        this.map.add(this.featureVectorLayer);
        this.map.add(featureVectorTileLayer);
    
}

updateTimesChecked() {
  var upFeat = this.state.updateFeature;
  var currentTimesChecked = upFeat.getAttribute('timesChecked');
  upFeat.setAttribute('timesChecked', currentTimesChecked + 1);
  var edits = {updateFeatures: [upFeat]};
  this.featureVectorLayer.applyEdits(edits);
  this.highlightedFeature.remove();
}


incrementReviewerCount() {
  if (this.props.creds) {
    this.reviewerTable.queryFeatures(
      {
        where: "userId = '" + this.props.creds.userId + "'",
        outFields: ['OBJECTID','reviewCount']
      }).then(
    (feats) => {
      if (feats.features.length > 0) {
        
        feats.features[0].setAttribute(
          'reviewCount', 
          feats.features[0].attributes.reviewCount + 1
        );

        this.reviewerTable.applyEdits(
          {
            updateFeatures:[feats.features[0]]
          }
        );
      }
      else {
        this.reviewerTable.applyEdits(
          {
            addFeatures: [new this.graphic({
              attributes: {
                "userId": this.props.creds.userId,
                "reviewCount": 1
              }
            })]
          }
        ); 
      }
    }
       );    //this.reviewerTable
  }

}

sayThanks() {
  var that = this;
  this.props.setModalContent(ThankYouTemplate);
  this.props.openModal();
  setTimeout(function(){
    that.props.closeModal(); 
  }, 1500);
  this.toggleLoadIndicator(false);
  this.highlightedFeature.remove();
  this.getRandomFeatureForReview();
  this.view.popup.close();
}

editThis() {
  var view = this.view;
  var editor = this.editor; 
  view.when(function () {

            // If the EditorViewModel's activeWorkflow is null, make the popup not visible
            if (!editor.viewModel.activeWorkFlow) {
              view.popup.visible = false;
              // Call the Editor update feature edit workflow
              editor.startUpdateWorkflowAtFeatureEdit(
                view.popup.selectedFeature
                );
              view.ui.add(editor, 'bottom-right');
              view.popup.spinnerEnabled = false;
            }

            // We need to set a timeout to ensure the editor widget is fully rendered. We
            // then grab it from the DOM stack
            setTimeout(function () {
              // Use the editor's back button as a way to cancel out of editing
              let arrComp = editor.domNode.getElementsByClassName(
                'esri-editor__back-button esri-interactive'
                );
              if (arrComp.length === 1) {
                // Add a tooltip for the back button
                arrComp[0].setAttribute(
                  'title',
                  'Cancel edits, return to popup'
                  );
                // Add a listerner to listen for when the editor's back button is clicked
                arrComp[0].addEventListener('click', function (evt) {
                  // Prevent the default behavior for the back button and instead remove the editor and reopen the popup
                  evt.preventDefault();
                  view.ui.remove(editor);
                  // view.popup.open({
                  //   features: features
                  // });
                });
              }
            }, 150);


          });
}

componentWillUnmount() {
  if (this.view) {
      // destroy the map view
      this.view.container = null;
    }
  }

  render() {
    return (
      <>
      {this.state.loadIndicator && 
        <div className='loadIndicator'>
          <LoadIndicator/>
        </div>
      }
      <div className='webmap' ref={this.mapRef} />
      </>
      );
  }
}