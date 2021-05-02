import {Component} from 'react'

class AddShow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      genre: '',
      numOfEps: 0,
      minsPerEp: 0
    }
  }

  handleChange = (e) => {
    this.setState = ({
      [e.target.name] : e.target.value
    })
  }

  render() {
    return(
      <aside id="show-form" className="flex-column">
        <h5>Add A Show!</h5>
        <div className="flex-column">
          <input 
            className="show-form-input" placeholder="Enter Title"
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />
          <input 
            className="show-form-input" placeholder="Enter Genre"
            name="genre"
            value={this.state.genre}
            onChange={(e) => this.handleChange(e)}
          />
          <input 
            className="show-form-input" placeholder="Enter # of episodes"
            name="numOfEps"
            value={this.state.numOfEps}
            onChange={(e) => this.handleChange(e)}
          />
          <input 
            className="show-form-input" placeholder="Enter mins per episode"
          />
          <button 
            id="submit-btn"
            >Add to WatchList</button>
        </div>
      </aside>
    )
  }
}

export default AddShow