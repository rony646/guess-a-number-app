import React, { useState } from 'react';

import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card'
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
    };

    let confirmedOutPut;

    if(confirmed) {
        confirmedOutPut = <Text>Chosen Number: {selectedNumber}</Text>
    };

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
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
    }
})

export default StartGameScreen;