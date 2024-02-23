import logo from './logo.svg';
import './App.css';

import Router from './Router';
import Sidebar from './componant/sidebar';
function App() {
  return (
    <>
    <div className="App">
      <Sidebar></Sidebar>
      <Router></Router>
    </div>
    </>
  );
}

export default App;
