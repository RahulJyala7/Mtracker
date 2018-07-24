import React from 'react';
import Halogen from 'halogen'

var color = '#4DAF7C';

var style = {
  display: '-webkit-flex',
  display: 'flex',
  WebkitFlex: '0 1 auto',
  flex: '0 1 auto',
  WebkitFlexDirection: 'column',
  flexDirection: 'column',
  WebkitFlexGrow: 1,
  flexGrow: 1,
  WebkitFlexShrink: 0,
  flexShrink: 0,
  WebkitFlexBasis: '25%',
  flexBasis: '25%',
  maxWidth: '25%',
  height: '200px',
  WebkitAlignItems: 'center',
  alignItems: 'center',
  WebkitJustifyContent: 'center',
  justifyContent: 'center'
}


export class ShowLoader extends React.Component {
  render() {
    return (
      <Halogen.BeatLoader style={style} loading={true} color={color} />
    );
  }
};

