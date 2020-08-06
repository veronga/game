import React from 'react';
import {  View, Text } from "react-native";
import PropTypes from 'prop-types';


import styles from './styles';


export default function Modal ({title}) { 
    const { firstContainer,lastContainer, container,stylesText} = styles;
  return (
    <View  >
       <View style={firstContainer}><Text style={stylesText} >{title}</Text></View>
       <View style={container}><Text style={stylesText}>{title}</Text></View>
       <View style={lastContainer}><Text style={stylesText}>{title}</Text></View>
    </View>
  )}

  Modal.propTypes = {
    title: PropTypes.string
};
