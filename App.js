import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native';
import Slider from "./components/CustomSlider";
import ResultModal from "./components/ResultModal";

export default class App extends React.Component {
  state = {
    answers: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    modalVisible: false,
    bestBreed: "",
    breedImage: "",
  }

  changeValue = (newValue, index) => {
    let answers = this.state.answers;
    answers[index] = newValue;
    this.setState({ answers });
    console.log(newValue);
  }

  showModal = () => {
    this.setState({modalVisible:true})
  }

  hideModal = () => {
    this.setState({modalVisible:false})
  }

  calcMatch = () => {

  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <ResultModal 
          hideModal={this.hideModal} 
          visible={this.state.modalVisible} 
          bestBreed={this.state.bestBreed}    
        />
        <Image style={styles.image} source={require('./assets/mabel.jpg')} />
        <Text style={styles.text}>Breed Questionnaire</Text>

        {this.state.answers.map((value, i) => (
          <Slider index={i} key={i} value={value} changeValue={this.changeValue} />
        ))}
        <Button title="View Results" onPress={() => { this.showModal() }} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 40,
    paddingBottom: 340
  },
  image: {
    height: "20%",
    width: "80%",
    marginBottom: 20

  },
  text: {
    fontSize: 30,
    marginBottom: 10
  }
});
