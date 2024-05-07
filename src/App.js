// `function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// class App extends Component {
//   render() {
//     return (
//       <div className='App'>
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';
import './App.css';

// importing the components
import Greet from './components/1_greet'
import Welcome from './components/2_welcome';
import Hello from './components/3_hello';
import Props from './components/4_props';
import Propsclass from './components/5_props_class';
import Message from './components/6_message';
import Counter from './components/7_counter';
import Destruct from './components/8_destruct_fn';
import Destruct_class from './components/9_destruct_class';
import Function_click from './components/10_function_click';
import Class_click from './components/11_class_click';
import Event_bind from './components/12_event_bind';
import Parentcomponent from './components/13_parent_component';
import Usergreeting from './components/14_user_greeting';
import Namelist from './components/15_namelist';
import Stylesheet from './components/16_stylesheet';
import Inline from './components/17_inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/18_form';
import Mounting from './components/20_mounting';
import Updating from './components/21_updating';
import FragmentDemo from './components/22_fragmentDemo';

// using the components
class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <Greet></Greet>
        <Welcome/>
        <Hello/>
        <Props name="Bruce" callname="Batman">
          <p>This is Children Component. It is accessed by props(.)children.</p>
        </Props>
        <Props name="Clark" callname="Superman">
          <button>We can pass any property as attribute.
          </button>
        </Props>
        <Propsclass name="Diana" callname="Wonder Woman"></Propsclass>
        <Message />
        <Counter></Counter>
        <Destruct name="Clark" callname="Superman"/>
        <Destruct_class name="Bruce" callname="Batman"/> 
        <Function_click />
        <Class_click/>
        <Event_bind></Event_bind>
        <Parentcomponent />
        <Usergreeting></Usergreeting>
        <Namelist></Namelist>
        <Stylesheet primary = {true}></Stylesheet>
        <Inline></Inline>
        <h1 className='error'>Error!</h1>
        <h1 className={styles.success}>Success!</h1>
        <Form></Form>
        <Mounting/>
        <Updating/>*/}
        <FragmentDemo/>

      </div>
    );
  }
}

export default App;