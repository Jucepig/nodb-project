import './App.css';
import ShowList from './components/ShowList'

function App() {
  return (
    <div className="App">
      <header id="header" className="flex-row">
        <h3>WATCHLiiST</h3>
      </header>

      <div id="main-container" className="flex-row">
       <ShowList/>
      </div>
    </div>
  );
}

export default App;
