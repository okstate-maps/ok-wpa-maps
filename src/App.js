import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { loadModules } from 'esri-loader';
import { IntroJoyride } from './IntroJoyride';
import { WebMapView } from './WebMapView';

//import { loadScript, loadModules } from 'esri-loader';
import "@esri/calcite-components";
import './App.css';

const config = {
  appId: 'l3OWRmRCGfkAN4Dh',
  redirect_uri: window.location.protocol + "//" + window.location.host + window.location.pathname
  };


function parseHashArgs(aURL) {

  aURL = aURL || window.location.href;
  
  var vars = {};
  var hashes = aURL.slice(aURL.indexOf('#') + 1).split('&');

    for(var i = 0; i < hashes.length; i++) {
       var hash = hashes[i].split('=');
      
       if(hash.length > 1) {
         vars[hash[0]] = hash[1];
       } else {
        vars[hash[0]] = null;
       }      
    }

    return vars;
}

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
  const [creatorCount, setCreatorCount] = useState(false);
  const [creds, setCreds] = useState(false);
  const [userName, setUserName] = useState(false);
  const [esriId, setEsriId] = useState(false);
  const [info, setInfo] = useState(false);

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

  let signUpUrl = "https://www.arcgis.com/sharing/rest/oauth2/signup?client_id=" + config.appId +"&redirect_uri="+config.redirect_uri+"&response_type=token";
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
          appId: 'l3OWRmRCGfkAN4Dh', //your app id goes here
          popup: false
      });

      setInfo(info);
      setEsriId(esriId);
      esriId.registerOAuthInfos([info]);


      let hash = parseHashArgs();
      if ("access_token" in hash) {
        let token = hash.access_token;
        let un = hash.username;
        let exp = hash.expires_in;
        esriId.registerToken({
          token: token,
          userId: un,
          expires: exp,
          server: "https://www.arcgis.com/sharing/rest"
        });
        esriId.getCredential(info.portalUrl + '/sharing');;
      }
      
      esriId
        .checkSignInStatus(info.portalUrl + '/sharing')
        .then((creds) => {
          setCreds(creds);
          var portal = new Portal(info.portalUrl).load().then((p) => {
            setUserName(p.user.fullName);
          });


          var layer =  new FeatureLayer({
            url: 'https://services1.arcgis.com/jWQlP64OuwDh6GGX/arcgis/rest/services/WPA_Maps_Land_Parcels_Public/FeatureServer/0'
          });
          var q = layer.createQuery();
          q.where = 'CREATOR_PUBLIC = \'' + creds.userId + '\'';
          q.outStatistics =[
            {
              onStatisticField: 'CREATOR_PUBLIC',
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
        .catch(() => {

          //esriId.getCredential(info.portalUrl + '/sharing')
        });

      
   });

  }, []);
    

    return (
      <div className="App">
        <IntroJoyride runIntro={runIntro}
                      toggleIntro={toggleIntro} 
                      oauthInfo={info}/>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Modal"
        >
          {modalContent}
        </Modal>

        {welcomeScreen === true &&
          <>

            <h1>Oklahoma 1936 Land Ownership Map Transcription</h1>
            
            <div className='flex-row'>
              <button className='drawShapes' onClick={() => {toggleWelcomeScreen(false); setWorkflow('create')}}>
                  <calcite-icon scale='l' class="big-icon" icon="addInNew"></calcite-icon> 
                  <br/>Draw some shapes
              </button>
              <button className='reviewShapes' onClick={() => {toggleWelcomeScreen(false); setWorkflow('update')}}>
                  <calcite-icon scale='l' class="big-icon" icon="editAttributes"></calcite-icon> 
                  <br/>Review existing shapes
              </button>
              <button onClick={() => {toggleIntro(!runIntro)}}>
                  <calcite-icon scale='l' class="big-icon" icon="question"></calcite-icon> 
                  <br/>View the intro
              </button>
            </div>

            {userName === false &&
            <div className="trackProgress">
              <h2>Track your progress:</h2>
              <div className='flex-row'>
                <br/><br/>
                <button className='signInOut' onClick={function(){esriId.getCredential(info.portalUrl + '/sharing')
                  .then((credential) => {setCreds(credential);})}}>
                  <calcite-icon scale='l' className="big-icon" icon="sign-in"></calcite-icon> 
                <br/> Sign in</button>

                <a href={signUpUrl}><button className='createAccount'>
                  <calcite-icon scale='l' className="big-icon" icon="user-plus"></calcite-icon> 
                <br/> Create an account</button></a>
              </div> 
            </div>
              //"https://www.arcgis.com/sharing/rest/oauth2/signup?client_id=l3OWRmRCGfkAN4Dh&redirect_uri=http://localhost:3000/ok-wpa-maps&response_type=code"
            }
            {userName !== false && creatorCount !== false &&
              <div class='flex-row'>
                <h3>Hi {userName}! So far you've added 
                  <span style={{fontSize:'2em'}}>&nbsp;{creatorCount}&nbsp;</span> 
                    {creatorCount === 1 ? 'shape' : 'shapes'}. {creatorCount > 0 ? randomPraise : ''}
                </h3>
                <br/><button className='signInOut' onClick={function(){creds.destroy(); window.location = window.location.pathname}}>
                   <calcite-icon scale='l' class="big-icon" icon="sign-out"></calcite-icon> <br/> Click to sign out
                  </button>
              </div>
            }
        
          </>
        }
        
        {welcomeScreen === false &&
          <WebMapView 
            workflow={workflow} 
            creds={creds}
            openModal={openModal}
            closeModal={closeModal}
            setModalContent={setModalContent}/>
        }
      </div>
    );
  }

export default App;