// https://www.youtube.com/watch?v=Pf7g32CwX_s&t=932s  教学视频

import React from "react";
import {GoogleMap,withScriptjs,withGoogleMap,Marker} from 'react-google-maps';
import mapStyles from '../visit/mapStyles';
  
function Map(){
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -42.882680, lng: 147.325310 }}
      defaultOptions={{styles:mapStyles}}  //改变地图styles
      >
        <Marker
      position={{ lat: -42.882680, lng: 147.325310 }}
      // icon={{url:"./images/logo1.png",
      // scaledSize: new window.google.maps.Size(25,25)}}  //改变图标
        />
    </GoogleMap>
    
  );
}

  const WrappedMap = withScriptjs(withGoogleMap(Map));
  export default function MyGoogleMap(){

    return(

<div style={{width:'60vw', height:'53vh'}}>
  <WrappedMap 
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
    libraries=geometry,drawing,places&key=${
      process.env.REACT_APP_GOOGLE_KEY
    }`}
// https://tomchentw.github.io/react-google-maps/   需要的url

        loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%`,left:`30%`}} />}
    />
</div>

    );

  }
  