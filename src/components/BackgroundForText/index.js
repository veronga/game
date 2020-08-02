import React from 'react';
import {  View, Text } from "react-native";

import styles from './styles';


export default function BackgroundForText (props) {
    const {title} = props;
    const { container,titleStyle} = styles;
    
  return (
    <View style={container} >
       <Text style={titleStyle}>{title}</Text>
    </View>
  )}
