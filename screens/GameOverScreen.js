import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <BodyText>The game is over!</BodyText>
            <Image source={require('../assets/success.png')}/>
            <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <Button title="NEW GAME" onPress={props.onRestart}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
       flex: 1,
       alignItems: "center",
       justifyContent: "center"
    }
});

export default GameOverScreen;