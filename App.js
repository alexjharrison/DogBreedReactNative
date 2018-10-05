import React from 'react';
import { ScrollView, StyleSheet, Text, Image, Button } from 'react-native';
import Slider from "./components/CustomSlider";
import ResultModal from "./components/ResultModal";
import breeds from "./assets/breeds";

export default class App extends React.Component {
  state = {
    answers: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    modalVisible: false,
    bestBreed: "",
    breedImage: "",
    percentMatch: 0
  }

  changeValue = (newValue, index) => {
    let answers = this.state.answers;
    answers[index] = newValue;
    this.setState({ answers });
    console.log(newValue);
  }

  calcMatch = () => {
    let scoreList = breeds.map(breed => {
      const breedTraits = [
        breed.size,
        breed.kidFriendly,
        breed.dogFriendly,
        breed.lowShedding,
        breed.easyToGroom,
        breed.highEnergy,
        breed.goodHealth,
        breed.lowBarking,
        breed.intelligence,
        breed.easyToTrain,
        breed.toleratesHot,
        breed.toleratesCold
      ];
      const possibleDiff = 12 * 4;
      let actualDiff = this.state.answers.reduce((total, amount, index) => {
        return total + Math.abs(amount - breedTraits[index]);
      }, 0)
      const percentMatch = (100 - (actualDiff / possibleDiff * 100)).toFixed(2);
      return percentMatch
    });

    let topIndex;
    scoreList.forEach((score,index)=>{
      if (score==Math.max(...scoreList)) topIndex = index;
    })
    const topScore = scoreList[topIndex];
    const topBreed = breeds[topIndex].name;
    const picture = `http://www.dogbreedchart.com/img/${breeds[topIndex].id}.jpg`;


    this.setState({
      modalVisible: true,
      bestBreed: topBreed,
      breedImage: picture,
      percentMatch: topScore
    })
  }

  hideModal = () => {
    this.setState({ modalVisible: false })
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <ResultModal
          hideModal={this.hideModal}
          visible={this.state.modalVisible}
          bestBreed={this.state.bestBreed}
          breedImage={this.state.breedImage}
          percentMatch={this.state.percentMatch}
        />
        <Image style={styles.image} source={require('./assets/mabel.jpg')} />
        <Text style={styles.text}>Breed Questionnaire</Text>

        {this.state.answers.map((value, i) => (
          <Slider index={i} key={i} value={value} changeValue={this.changeValue} />
        ))}
        <Button title="View Results" onPress={() => { this.calcMatch() }} />
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
