import 'react-native-gesture-handler';
import React from 'react';
import { Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useState, setState} from 'react';

function HomeScreen(props) {
  return (
  <View style={{ flex: 1, alignItems: 'center', 
  justifyContent: 'center'}}>
  <Text>Home Screen</Text>
  <Button 
    title="Curl Ups"
    onPress={() => props.navigation.navigate('Curl')}
  />
  <Button 
    title="Laps Swam"
    onPress={() => props.navigation.navigate('Laps')}
  />
  </View>
  );
}
function CurlScreen(props){
  const [curls, setCurls] = useState(0);
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Curl Ups: {curls}</Text>
            <Button title="Add Curl Up"
            onPress={() => setCurls(curls + 1)}/>
            <Button title="Reset Counter" 
            onPress={() => setCurls(0)}/>
            <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
        </View>
    );
}
class LapsScreen extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
            laps: 0
        };
    }

render() {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Laps Swam: {this.state.laps}</Text>
            <Button title="Increase Lap"
            onPress={() => this.setState({laps: this.state.laps + 1})}/>
            <Button title="Reset Laps" onPress={() => this.setState({laps: 0})}/>
            <Button
        title="Back to Home"
        onPress={() => this.props.navigation.navigate('Home')}
      />
        </View>
    );
}
}
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"component={HomeScreen}/>
        <Stack.Screen name="Curl" component={CurlScreen}/>
        <Stack.Screen name="Laps" component={LapsScreen}/>
      </Stack.Navigator>
   </NavigationContainer>
  );
}