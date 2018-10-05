import React from 'react';
import { StyleSheet, View, Modal, Text, Button, Image} from 'react-native';

const ResultModal = props => (
    <Modal
        animationType="fade"
        transparent={false}
        visible={props.visible}
        onRequestClose={()=>alert("this modal has been closed")}
    >
        <View style={styles.container}>
            <Text style={styles.text}>The best breed for you is the</Text>
            <Text style={styles.text}>{props.bestBreed}</Text>
            <Text style={styles.text}>{props.percentMatch + "% Match"}</Text>
            <Image 
                style={{width:400,height:300}}
                source={{uri: props.breedImage}}
            />
            <Button title="Close" onPress={ props.hideModal } />
        </View>
    </Modal>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
    },
    text: {
        fontSize: 40,
        textAlign: "center"
    }
})

export default ResultModal;