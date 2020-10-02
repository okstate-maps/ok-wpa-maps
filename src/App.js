import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Joyride, { CallBackProps, STATUS, Step, StoreHelpers } from 'react-joyride';
import { loadModules } from 'esri-loader';
import { WebMapView } from './WebMapView';

//import { loadScript, loadModules } from 'esri-loader';
import "@esri/calcite-components";
import './App.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

function App() {
  const [welcomeScreen, toggleWelcomeScreen] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [workflow, setWorkflow] = useState(0);
  const [modalContent, setModalContent] = useState('');
  const [runIntro, toggleIntro] = useState(false);
  const [creatorCount, setCreatorCount] = useState('___');
  var listOfRandomPraise= [
    'Good job!',
    'Way to go!',
    'Wow!',
    'That\'s super!',
    'Awesome!'
  ];
  const [randomPraise, setRandomPraise] = useState(
    listOfRandomPraise[Math.floor(Math.random() * Math.floor(listOfRandomPraise.length))]
  );

  const [steps, setSteps] = useState([
    {
      content: 
          <div>
            <h1>Draw and transcribe map data</h1>
            <div className='imgContainer'>
              <img alt='Draw a shape representing a 
                    parcel of land and transcribe the ' 
                  src={process.env.PUBLIC_URL + '/img/wpa3.gif'}/>
            </div>
          </div>,
      placement: 'auto',
      target: '.drawShapes',
      disableBeacon: true
    },    
    // {
    //   content: 
    //       <div>
    //         <h1>Draw and transcribe map data</h1>
    //         <div>
              
    //         </div>
    //       </div>,
    //   placement: 'auto',
    //   target: '.drawShapes',
    //   disableBeacon: false
    // },

    {
      content: 
      <div>
        <h1>Review existing entries</h1>
        <h3>If you don't see any errors, click <strong><calcite-icon scale='s' icon="check"></calcite-icon>Looks Good!</strong></h3>
        <div className='imgContainer'>
          <img alt='Reviewing parcels' 
               src={process.env.PUBLIC_URL + '/img/wpa7.gif'}/>
        </div>
      </div>,
      placement: 'auto',
      target: '.reviewShapes'    
    },
    {
      content: 
      <div>
        <h1>Review existing entries</h1>
        <h3>If you see something incorrect or missing, click <strong><calcite-icon scale='s' icon="pencil"></calcite-icon>Edit feature</strong></h3>
        <div className='imgContainer'>
          <img alt='Reviewing parcels' 
               src={process.env.PUBLIC_URL + '/img/wpa8.gif'}/>
        </div>
      </div>,
      placement: 'auto',
      target: '.reviewShapes'    
    },
    {
      content: 
      <>
        <h3>Right click and drag to change the rotation of the map.</h3>
        <div className='imgContainer'>
          <img alt='Demonstration of rotating the map' 
               src={process.env.PUBLIC_URL + '/img/wpa4.gif'}/>
        </div>
        <p> Press the compass button to reset</p>
      </>,
      placement: 'center',
      target: 'body'
    }
    
  ]);



  Modal.setAppElement('#root');

    function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
  }

  function handleJoyrideCallback(data) {
    const { status, type } = data;
    const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];
    if (finishedStatuses.includes(status)) {
      toggleIntro(false);
    }
  }

  useEffect(() => {
    loadModules(['esri/identity/OAuthInfo','esri/identity/IdentityManager',
                 'esri/layers/FeatureLayer',], { css: true })
    .then(([OAuthInfo, esriId, FeatureLayer]) => {
    
      var info = new OAuthInfo({
          appId: 'l3OWRmRCGfkAN4Dh',
          portalUrl: 'https://osu-geog.maps.arcgis.com/',
          popup: false
      });

      esriId.registerOAuthInfos([info]);

      esriId
        .checkSignInStatus(info.portalUrl + '/sharing')
        .then((creds) => {
          var layer =  new FeatureLayer({
            url: 'https://services1.arcgis.com/jWQlP64OuwDh6GGX/arcgis/rest/services/WPA_Maps_Land_Parcels/FeatureServer/0'
          });
          var q = layer.createQuery();
          q.where = 'CREATOR = \'' + creds.userId + '\'';
          q.outStatistics =[
            {
              onStatisticField: 'CREATOR',
              outStatisticFieldName: 'CREATOR_COUNT',
              statisticType: 'count'
            }
          ];
    
          layer.queryFeatures(q).then(resp => {
            if (resp.features.length > 0){
              setCreatorCount(resp.features[0].getAttribute('CREATOR_COUNT'));
            }

          })
        })
        .catch(esriId.getCredential(info.portalUrl + '/sharing'));

      
   });

  }, []);
    

    return (
      <div className="App">
        <Joyride
          callback={handleJoyrideCallback}
          continuous={true}
          run={runIntro}
          scrollToFirstStep={true}
          showProgress={true}
          showSkipButton={true}
          steps={steps}
          styles={{
            options: {
              zIndex: 10000,
              width: 800
            },
          }}
        />
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {modalContent}
        </Modal>

        {welcomeScreen === true &&
          <>
            <h1>Choose your path:</h1>
            
            
            <button className='drawShapes' onClick={() => {toggleWelcomeScreen(false); setWorkflow('create')}}>
                <calcite-icon scale='l' class="big-icon" icon="addInNew"></calcite-icon> 
                <br/>Draw some shapes
            </button>
            <h2>or</h2>
            <button className='reviewShapes' onClick={() => {toggleWelcomeScreen(false); setWorkflow('update')}}>
                <calcite-icon scale='l' class="big-icon" icon="editAttributes"></calcite-icon> 
                <br/>Review existing shapes
            </button>
            <h2>or</h2>
            <button onClick={() => {toggleIntro(!runIntro)}}>
                <calcite-icon scale='l' class="big-icon" icon="question"></calcite-icon> 
                <br/>View the intro
            </button>
        <h3>So far you've added <span style={{fontSize:'2em'}}>{creatorCount}</span> {creatorCount === 1 ? 'shape' : 'shapes'}. {randomPraise}</h3>
          </>
        }
        
        {welcomeScreen === false &&
          <WebMapView 
            workflow={workflow} 
            openModal={openModal}
            closeModal={closeModal}
            setModalContent={setModalContent}/>
        }
      </div>
    );
  }

export default App;