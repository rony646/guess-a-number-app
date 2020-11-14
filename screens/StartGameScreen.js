import React, { useState } from 'react';

import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card'
import TitleText from '../components/TitleText'
import BodyText from '../components/BodyText'; // Text component with custom Font
import NumberContainer from '../components/NumberContainer'
import Input from '../components/Input'
import Colors from '../constants/colors'

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState()

    const numberInputHandler = InputText => {
        setEnteredValue(InputText.replace(/[^0-9]/g, ''))
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const choseNumber = parseInt(enteredValue);
        if( isNaN(choseNumber)|| choseNumber <= 0 || choseNumber > 99) {
            Alert.alert('Invalid Number', 'Number has to be between 1 and 99', [{text: 'Ok', style: 'destructive', onPress: resetInputHandler}])
            return;
        }
        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(parseInt(enteredValue));
        Keyboard.dismiss()
    };

    let confirmedOutPut;

    if(confirmed) {
        confirmedOutPut = <Card style={styles.summaryContainer}>
                            <Text>You selected</Text>
                            <NumberContainer>{selectedNumber}</NumberContainer>
                            <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)}/>
                          </Card>
    };

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={styles.screen}>
                <TitleText style={styles.title}>Start a New Game!</TitleText>
                <Card style={styles.inputContainer}>
                    <BodyText>Select a Number</BodyText>
                    <Input 
                        style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        keyboardType="number-pad" 
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button 
                                title="Reset" 
                                onPress={resetInputHandler} 
                                color={Colors.accent}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button 
                                title="Confirm" 
                                onPress={confirmInputHandler}
                            />
                        </View>
                    </View>
                </Card>
                {confirmedOutPut}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,  
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        marginVertical: 15,
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        paddingHorizontal: 15
    },
    button: {
        width: 90
    },
    input: {
       width: 50,
       textAlign: "center" 
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: "center"
    },
    text: {
        fontFamily: 'open-sans'
    }
})

export default StartGameScreen;