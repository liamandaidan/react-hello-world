import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Prop from './components/Prop';
function App() {
  return (
    <div className="App">
      <Prop name="BET" heroName="Batman">
        <p>I'm so cool.</p>
      </Prop>
      <Prop name="Hello" heroName="Cool"/>
      <Prop name="World" heroName="Wow"/>
      {/* <Greet/>
      <Welcome/> */}
    </div>
  );
}

export default App;
