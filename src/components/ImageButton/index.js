import React from 'react';
import { TouchableOpacity, Image } from "react-native";

import styles from './styles';


export default function Button( onPress, imagePath) {
    const { container, imgStyles } = styles;

    return (
        <TouchableOpacity style={container} onPress={onPress}>
            <Image
                style={imgStyles}
                source={imagePath}
            />
        </TouchableOpacity>
    )
}
