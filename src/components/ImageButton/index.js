import React from 'react';
import {  TouchableOpacity, Text,Image } from "react-native";

import styles from './styles';


export default function Button(props) {
    const {onPress,source} = props;
    const { container,imgStyles} = styles;
    
  return (
    <TouchableOpacity style={container} onPress={onPress}>
        <Image
        style={imgStyles}
        source={{
            uri: `${source}`
          }}
      />
    </TouchableOpacity>
  )}
