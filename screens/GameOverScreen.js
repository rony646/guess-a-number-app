import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import Colors from '../constants/colors'

import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import MainButton from '../components/MainButton'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The game is over!</TitleText>
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../assets/success.png')} 
                    style={styles.image}
                />
            </View>

            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
            </View>
            
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
       flex: 1,
       alignItems: "center",
       justifyContent: "center"
    },
    image: {
        height: "100%",
        width: "100%"
    },
    imageContainer: {
        marginVertical: 30 ,
        overflow: 'hidden',
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        width: 300,
        height: 300
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color:  Colors.primary,
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }
});

export default GameOverScreen;