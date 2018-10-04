import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native';
import Slider from "./components/CustomSlider";

export default class App extends React.Component {
  state = {
    answers: [1,1,1,1,1,1,1,1,1,1,1,1],
  }

  changeValue = (newValue,index) => {
    let answers = this.state.answers;
    answers[index] = newValue;
    this.setState({answers});
    console.log(newValue);
  }

  render() {
    return (
      <ScrollView  contentContainerStyle={styles.container}>
        <Image style={styles.image} source={require('./assets/mabel.jpg')} />
        <Text style={styles.text}>Breed Questionnaire</Text>
        
        {this.state.answers.map((value,i)=>(
          <Slider index={i} key={i} value={value} changeValue={this.changeValue} />
        ))}
        <Button title="View Results" onPress={()=>{
          alert("i'm an alert");
          console.log("i'm alerted");
        }} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 40,
    paddingBottom:340
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
