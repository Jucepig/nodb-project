import {Component} from 'react'
import axios from 'axios'
import AddShow from "./AddShow"

class ShowList extends Component {
  constructor() {
    super()

    this.state = {
      showsArr : []
    }
  }

  componentDidMount() {
    axios
      .get('/api/shows')
      .then((res) => {
        this.setState({showsArr : res.data})
      })
      .catch((err) => console.log(err))
  }

  addShow = (title, genre, numOfEps, minsPerEp) => {
    axios
      .post('/api/shows', {title, genre, numOfEps, minsPerEp})
      .then((res) => this.setState({showsArr : res.data}))
      .catch((err) => console.log(err))
  }

  editShow = (id, title, genre, numOfEps, minsPerEp) => {
    axios
      .put(`/api/shows/${id}`, {title, genre, numOfEps, minsPerEp})
      .then((res) => {this.setState({showsArr : res.data})})
      .catch((err) => console.log(err))
  }

  deleteShow = (id) => {
    axios
      .delete(`/api/shows/${id}`)
      .then((res) => {this.setState({showsArr: res.data})})
      .catch((err) => console.log(err))
  }

  render() {
    return(
      <div id="main" className="flex-row">
        
        <AddShow addShowFn={this.addShow} />

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
    )
  }
}

export default ShowList