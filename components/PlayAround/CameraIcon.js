import React from 'react';
// import Svg, { Path, G } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

function CameraIcon({ dim }) {
  return (
    <Svg
      height={`${dim}px`}
      width={`${dim}px`}
      id='Layer_1'
      style='enable-background:new 0 0 512 512;'
      version='1.1'
      viewBox='0 0 512 512'
      space='preserve'
      xmlns='http://www.w3.org/2000/svg'
      xlink='http://www.w3.org/1999/xlink'
    >
      <Path
        fill='#000'
        d='M430.4,147h-67.5l-40.4-40.8c0,0-0.2-0.2-0.3-0.2l-0.2-0.2v0c-6-6-14.1-9.8-23.3-9.8h-84c-9.8,0-18.5,4.2-24.6,10.9l0,0.1   l-39.5,40H81.6C63,147,48,161.6,48,180.2v202.1c0,18.6,15,33.7,33.6,33.7h348.8c18.5,0,33.6-15.1,33.6-33.7V180.2   C464,161.6,448.9,147,430.4,147z M256,365.5c-50.9,0-92.4-41.6-92.4-92.6c0-51.1,41.5-92.6,92.4-92.6c51,0,92.4,41.5,92.4,92.6   C348.4,323.9,307,365.5,256,365.5z M424.1,200.5c-7.7,0-14-6.3-14-14.1s6.3-14.1,14-14.1c7.7,0,14,6.3,14,14.1   S431.8,200.5,424.1,200.5z'
      />
      <Path
        fill='#000'
        d='M256,202.9c-38.6,0-69.8,31.3-69.8,70c0,38.6,31.2,70,69.8,70c38.5,0,69.8-31.3,69.8-70C325.8,234.2,294.5,202.9,256,202.9   z'
      />
    </Svg>
  );
}

export default CameraIcon;
