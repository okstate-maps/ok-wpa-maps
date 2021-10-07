import React, { useState, useEffect } from 'react';
import Joyride, { CallBackProps, STATUS, Step, StoreHelpers } from 'react-joyride';
export function IntroJoyride(props) {
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
        <h3>If you don't see any errors, click 
          <strong>
            <calcite-icon scale='s' icon="check"></calcite-icon>
            Looks Good!
          </strong>
        </h3>
        <div className='imgContainer'>
          <img alt='Reviewing parcels' 
               src={process.env.PUBLIC_URL + '/img/wpa7.gif'}/>
        </div>
      </div>,
      placement: 'auto',
      target: '.reviewShapes',
      disableBeacon: true
    
    },
    {
      content: 
      <div>
        <h1>Review existing entries</h1>
        <h3>If you see something incorrect or missing, click 
          <strong>
            <calcite-icon scale='s' icon="pencil"></calcite-icon>
            Edit feature
          </strong>
        </h3>
        <div className='imgContainer'>
          <img alt='Reviewing parcels' 
               src={process.env.PUBLIC_URL + '/img/wpa8.gif'}/>
        </div>
      </div>,
      placement: 'auto',
      target: '.reviewShapes',
      disableBeacon: true

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
      target: 'body',
      disableBeacon: true

    },
    {
      content: 
      <>
        <h3>Keep track of your progress.</h3>
        <div className='imgContainer'>
        </div>
        <p>Sign in with your ArcGIS Online account. Or, <a href={"https://www.arcgis.com/sharing/rest/oauth2/signup?client_id=l3OWRmRCGfkAN4Dh&redirect_uri=http://localhost:3000/ok-wpa-maps&response_type=code"}>
create one</a> for free.</p>

      </>,
      placement: 'center',
      target: '.trackProgress',
      disableBeacon: true

    },
    {
      content: 
          <div>
            <a href="https://info.library.okstate.edu/map-room/wpa-maps"><h1>Click to learn more about the collection</h1></a>
          </div>,
      placement: 'center',
      target: 'body',
      disableBeacon: true
    },      
    
  ]);

  function handleJoyrideCallback(data) {
    const { status, type } = data;
    const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];
    if (finishedStatuses.includes(status)) {
      props.toggleIntro(false);
    }
  }

  return (
   <Joyride
          callback={handleJoyrideCallback}
          continuous={true}
          floaterProps={{disableAnimation:true}}
          run={props.runIntro}
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
  )
}

export default IntroJoyride;