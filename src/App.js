import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { loadModules } from 'esri-loader';
import { IntroJoyride } from './IntroJoyride';
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
  const [creds, setCreds] = useState(false);
  const [userName, setUserName] = useState('______');

  var listOfRandomPraise= [
    'Good job!',
    'Way to go!',
    'Wow!',
    'That\'s super!',
    'Awesome!',
    'Alright!'
  ];
  const [randomPraise, setRandomPraise] = useState(
    listOfRandomPraise[Math.floor(Math.random() * Math.floor(listOfRandomPraise.length))]
  );

  


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

  useEffect(() => {
    loadModules(['esri/identity/OAuthInfo','esri/identity/IdentityManager',
                 'esri/layers/FeatureLayer', 'esri/portal/Portal'], { css: true })
    .then(([OAuthInfo, esriId, FeatureLayer, Portal]) => {
    
      var info = new OAuthInfo({
          appId: 'l3OWRmRCGfkAN4Dh',
          portalUrl: 'https://osu-geog.maps.arcgis.com/',
          popup: false
      });

      esriId.registerOAuthInfos([info]);

      esriId
        .checkSignInStatus(info.portalUrl + '/sharing')
        .then((creds) => {
          setCreds(creds);
          var portal = new Portal(info.portalUrl).load().then((p) => {
            setUserName(p.user.fullName);
          });
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
        <IntroJoyride runIntro={runIntro}
                      toggleIntro={toggleIntro} />
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
        <h3>Hi {userName}! So far you've added <span style={{fontSize:'2em'}}>{creatorCount}</span> {creatorCount === 1 ? 'shape' : 'shapes'}. {randomPraise}</h3>
        <p>Not {userName}? <button onClick={function(){creds.destroy(); window.location.reload();}}>Click this button to logout</button></p>
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