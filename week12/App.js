import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Card} from 'react-native-elements';

export default function App() {
  //Binding the function with class
    const [food, setFood] = useState();

    const [votes, setVotes] = useState(false);

    function increaseIceCreamVote(value){
      setFood('ice cream');
      setVotes(true);
    }

    function increaseBurgerVote(value){
      setFood('burgers');
      setVotes(true);
    }

    function increaseRamenVote(value){
      setFood('ramen');
      setVotes(true);
    }
    
    return (
        <View style={styles.container}>
        { votes ? (
          <View style={styles.container}>
            <Text>You voted for {food}!</Text>
          </View>
        ) : (
            <View>
            <Text style={styles.headerText}>Vote for your favorite!</Text>
            <Card>
              <Button title="Ice Cream" onPress={(value) => (increaseIceCreamVote('icecream'))}/>
            </Card>
            <Card.Divider/>
            <Card>
              <Button title="Burgers" onPress={(value) => (increaseBurgerVote('burgers'))}/>
            </Card>
            <Card.Divider/>
            <Card>
              <Button title="Ramen" onPress={(value) => (increaseRamenVote('ramen'))}/>
            </Card>
            </View>
        )
        }
         </View>
        
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }})



