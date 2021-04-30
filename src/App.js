
import './App.css';

function App() {
  return (
    <div className="App">
      <header id="header" className="flex-row">
        <h3>WatchLst</h3>
      </header>

      <div id="main-container" className="flex-row">
        <div id="main" className="flex-row">
          
          <aside id="show-form" className="flex-column">
            <h5>Add A Show!</h5>
            <div className="flex-column">
              <input className="show-form-input" placeholder="Enter Title"/>
              <input className="show-form-input" placeholder="Enter Genre"/>
              <input className="show-form-input" placeholder="Enter # of episodes"/>
              <input className="show-form-input" placeholder="Enter mins per episode"/>
              <button id="submit-btn">Add to WatchList</button>
            </div>
          </aside>

          <section id="show-list">

          </section>

        </div>
      </div>
    </div>
  );
}

export default App;
