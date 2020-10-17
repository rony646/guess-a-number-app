import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const NumberContainer = props => {
    return(
        <View style={stlyes.container}>
            <Text style={stlyes.number}>{props.children}</Text>
        </View>
    );
};

const stlyes = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.primary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    number: {
        color: Colors.accent,
        fontSize: 22
    }
});

export default NumberContainer;