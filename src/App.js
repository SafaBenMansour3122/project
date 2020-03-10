import React from 'react';
import './App.css';
import Nav from './component/Nav';
import {BrowserRouter , Route} from 'react-router-dom';
import Home from './component/Home';
import About  from './component/About';


 
class App extends React.Component {

   render(){

  return (
 <BrowserRouter>
    <div className="App">
      <Nav/>
        <Route path="/" exact component= {Home}/>
        <Route path="/about" component={About}/>
    </div>
 </BrowserRouter>
    
  );
}
 }
export default App;
