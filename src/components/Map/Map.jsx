import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div >{text}</div>;

export default function Map(){

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 6
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '300px', width: '100%' }}>
      <GoogleMapReact defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
        
        <AnyReactComponent
          lat={40.448327498097356}
          lng={116.55367006513669}
          text='holaaa'
        />
      </GoogleMapReact>
    </div>
  );
}