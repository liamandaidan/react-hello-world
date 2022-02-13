import "./App.css";
import Greet from "./components/Greet";
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Prop from './components/Prop';
// import Message from './components/Message';
// import Counter from './components/Counter'
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponet from "./components/ParentComponet";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Index from "./components/Index";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import './appStyles.css'
import styles from './appStyles.module.css'
function App() {
  return (
    <div className="App">
      {/* <Greet name="liam" heroName="ya boi" /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      <h1 className='error'>Error</h1>
      <h1 className ={styles.sucess}>Success</h1>
      <StyleSheet primary={true} />
      <Inline></Inline>
    </div>
  );
}

export default App;
