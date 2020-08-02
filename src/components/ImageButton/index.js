import React from 'react';
import { TouchableOpacity, Text, Image } from "react-native";

import styles from './styles';


export default function Button(props) {
    const { onPress, imagePath } = props;
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
