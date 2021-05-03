import {Component} from 'react'
import axios from 'axios'
import AddShow from "./AddShow"
import Show from './Show'
import RuntimeFooter from './RuntimeFooter'

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

  addShow = (title, genre, minsPerEp, numOfEps) => {
    axios
      .post('/api/shows', {title, genre, minsPerEp, numOfEps })
      .then((res) => this.setState({showsArr : res.data}))
      .catch((err) => console.log(err))
  }

  editShow = (id, title, genre, minsPerEp, numOfEps) => {
    axios
      .put(`/api/shows/${id}`, {title, genre, minsPerEp, numOfEps})
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
          <header id="wl-header" className="flex-row">
            <h2>YOUR WATCHL</h2> 
            <img id="wl-logo" src="https://www.flaticon.com/svg/vstatic/svg/599/599516.svg?token=exp=1620075062~hmac=ad3f82253a4d7ad540428effb68701a2" alt="watchlist-eye-logo"/> 
            <h2>ST</h2>
          </header>
          <div id="wl-list" className="flex-column">
            {this.state.showsArr.map((show) => {
              return (
                <Show 
                  show={show}
                  key={show.id}
                  deleteShowFn={this.deleteShow}
                  editShowFn={this.editShow}
                />
              )
            })}
          </div>
          <RuntimeFooter showsArr={this.state.showsArr} />
        </section>
      </div>
    )
  }
}

export default ShowList