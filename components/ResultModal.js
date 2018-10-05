import React from 'react';
import { StyleSheet, View, Modal, Text, Button} from 'react-native';

const ResultModal = props => (
    <View style={styles.container}>
        <Modal
            animationType="fade"
            transparent={false}
            visible={props.visible}
            onRequestClose={()=>alert("this modal has been closed")}
        >
            <Text>The Best Breed For You is the</Text>
            <Text>{props.bestBreed}</Text>
            <Button title="Close" onPress={ props.hideModal } />
        </Modal>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center"
    }
})

export default ResultModal;