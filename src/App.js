import './App.css';
import ShowList from './components/ShowList'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <div id="main-container" className="flex-row">
       <ShowList/>
      </div>
    </div>
  );
}

export default App;
