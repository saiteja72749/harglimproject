// import logo from './logo.svg';
import './App.css';
import Hello from './Components/Funcprops';
import Bye from './Components/CLassprops';
import Hey from './Components/Hey';
import Message from './Components/Message';
import Count from './Components/Count';
import Sai from './Components/Sai';
import FunctionCLick from './Components/FunctionCLick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import Parent from './Components/Parent';
import Me from './Components/Me';
import ConditionalRend from './Components/ConditionalRend';
import NameList from './Components/NameList';
import StyleSheet from './Components/StyleSheet';
import InLine from './Components/InLine';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './Components/Form';
import LifeCycleMount from './LifeCycleMount';
import LifeCycleUpdate from './LifeCycleUpdate';
import Fragments from './Components/Fragments';
import Table from './Components/Table';
import ParentComp from './Components/ParentComp';
function App() {
  return (
    <div className="sst" id="we">
      {/* <ParentComp/> */}
      {/* <LifeCycleUpdate/> */}
      {/* <LifeCycleMount/> */}
      {/* <Table/> */}
      {/* <Fragments/> */}
      <Form/>
      {/* <h1 className='error'>that's me</h1>
      <h1 className={styles.me}>mahi</h1>
      <StyleSheet primary={true}/> */}
      {/* <InLine/> */}
      {/* <NameList/> */}
      {/* <ConditionalRend/> */}
      {/* <Me/> */}
      {/* <Parent/> */}
      {/* <Sai/><Hello name= 'sai'/>
      <p>children props</p>
      <Hello name= 'teja'/>
      <button>click</button>
      <Hey/>
      <Message/>
      <Count/> */}
      {/* <Sai/> */}
      {/* <Project/>
      <Hello name= 'sai teja' myName= 'mahi'/>
      <Bye name='akshay'/>
      <p>children props</p>
      <Bye name='teja'/>
      <button>don't click</button>
      <Bye name='akshay teja' myName='hima'/>
      <FunctionCLick/>
      <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <Sai/>
      <ClassClick/>
      <FunctionCLick/> */}
    </div>
  );
}

export default App;
   