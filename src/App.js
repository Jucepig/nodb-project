import './App.css';
import ShowList from './components/ShowList'

function App() {
  return (
    <div className="App">
      <header id="header" className="flex-row">
        <h1>WATCHL </h1> 
        <img id="logo" src="https://www.flaticon.com/svg/vstatic/svg/599/599516.svg?token=exp=1620075062~hmac=ad3f82253a4d7ad540428effb68701a2" alt="eye-logo"/> 
        <h1>ST</h1>
      </header>

      <div id="main-container" className="flex-row">
       <ShowList/>
      </div>
    </div>
  );
}

export default App;
