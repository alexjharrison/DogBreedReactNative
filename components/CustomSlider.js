import React from 'react';
import { StyleSheet, View, Text, Slider } from 'react-native'
import questions from '../assets/questions'
import ResultModal from './ResultModal';

const CustomSlider = props => (
    <View style={styles.container}> 
        <Text>{questions.question[props.index]}</Text>
        <Slider
            style={styles.slider}
            value = {props.value}
            step={1}
            minimumValue={1}
            maximumValue={5}
            onSlidingComplete={ newValue => props.changeValue(newValue,props.index) }
        />
        <View style={styles.bottom}>
            <Text>{questions.oneAnswer[props.index]}</Text>
            <Text>{props.value}</Text>
            <Text>{questions.fiveAnswer[props.index]}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
        marginBottom: 30
    },
    bottom: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    slider: {
        width: 350,
        margin:5
    }

})

export default CustomSlider;