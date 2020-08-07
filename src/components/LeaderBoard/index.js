import React from 'react';
import {  View, Text } from "react-native";
import PropTypes from 'prop-types';


import styles from './styles';


export default function LeaderBoard ({name,point}) { 
    const { firstContainer,lastContainer, container,stylesText,containerPoint,stylesPoint} = styles;
  return (
    <View  >
       <View style={[firstContainer,container]}><Text style={stylesText} >{name}</Text><View style={containerPoint}><Text style={stylesPoint} >{point}</Text></View></View>
       <View style={container}><Text style={stylesText}>{name}</Text><View style={containerPoint}><Text style={stylesPoint} >{point}</Text></View></View>
       <View style={[lastContainer,container]}><Text style={stylesText}>{name}</Text><View style={containerPoint}><Text style={stylesPoint} >{point}</Text></View></View>
    </View>
  )}

  LeaderBoard.propTypes = {
    name: PropTypes.string.isRequired,
    point: PropTypes.number.isRequired
};