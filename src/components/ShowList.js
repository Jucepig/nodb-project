import {Component} from 'react'

class ShowList extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return(
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
    )
  }
}

export default ShowList