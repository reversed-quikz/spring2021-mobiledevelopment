import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { View, Text} from 'react-native';
import { Button } from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';


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
  <Button 
    title="Push Ups"
    onPress={() => props.navigation.navigate('PushUp')}
  />
  <Button 
    title="Sit Ups"
    onPress={() => props.navigation.navigate('SitUp')}
  />
  <Button 
    title="Jumping Jacks"
    onPress={() => props.navigation.navigate('JumpingJack')}
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

function PushUpScreen(props){
  const [pushup, setPushups] = useState(0);
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Push Ups: {pushup}</Text>
            <Button title="Add Push Up"
            onPress={() => setPushups(pushup + 1)}/>
            <Button title="Reset Counter" 
            onPress={() => setPushups(0)}/>
            <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
        </View>
    );
}

function SitUpScreen(props){
  const [situp, setSitups] = useState(0);
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Sit Ups: {situp}</Text>
            <Button title="Add Sit Up"
            onPress={() => setSitups(situp + 1)}/>
            <Button title="Reset Counter" 
            onPress={() => setSitups(0)}/>
            <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
        </View>
    );
}

function JumpingJackScreen(props){
  const [jj, setJJs] = useState(0);
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Jumping Jacks: {jj}</Text>
            <Button title="Add Rep"
            onPress={() => setJJs(jj + 1)}/>
            <Button title="Reset Counter" 
            onPress={() => setJJs(0)}/>
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

const Drawer = createDrawerNavigator();
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home"component={HomeScreen}/>
        <Drawer.Screen name="Curl" component={CurlScreen}/>
        <Drawer.Screen name="Laps" component={LapsScreen}/>
        <Drawer.Screen name="PushUp"component={PushUpScreen}/>
        <Drawer.Screen name="SitUp" component={SitUpScreen}/>
        <Drawer.Screen name="JumpingJack" component={JumpingJackScreen}/>
      </Drawer.Navigator>
   </NavigationContainer>
  );
}

export default App;