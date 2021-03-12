import Chinups from './components/Chinups'
import Swim from './components/Swim'
import Header from './components/HeaderText'
import Basic from './components/BasicText'
import './components/App.css'
 //function pulls all my other functions together and returns them all in a single file basically including all the seperate fucntions
function App() {
  return (
    <div>
      <Header/>
      <br></br>
      <Basic/>
      <br></br>
      <h1>Exercise Tracking</h1>
      <Chinups/>
      <br></br>
      <Swim/>
    </div>
  );
}

export default App;
