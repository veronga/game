import React from 'react';
import {  TouchableOpacity, Text } from "react-native";

import styles from './styles';


export default function Button(title,onPress) {
    const { container,titleStyle} = styles;
    
  return (
    <TouchableOpacity style={container} onPress={onPress}>
       <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  )}

 