
import './App.css';

function App() {
  return (
    <div className="App">
      <header id="header" className="flex-row">
        <h3>WATCHLiiST</h3>
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

          <section id="show-list" className="flex-column">
            <header id="wl-header">WATCHLiiST</header>
            <div id="wl-list" className="flex-column">
              <div className="show-item flex-row">
                <div className="si-btns flex-column">
                  <button>Edit</button>
                  <button>Del</button>
                </div>
                <div className="show-details flex-row">
                  <span>Title</span>
                  <span>Genre</span>
                  <span>Mins/Episode</span>
                  <span>Runtime</span>
                </div>
              </div>
            </div>
            <footer id="wl-footer">TOTAL RUNTIME:</footer>
          </section>

        </div>
      </div>
    </div>
  );
}

export default App;
