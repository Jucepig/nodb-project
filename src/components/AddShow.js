import {Component} from 'react'

class AddShow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      genre: '',
      minsPerEp: '',
      numOfEps: ''
    }
  }

  handleTextChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleNumChange = (e) => {
    this.setState({
      [e.target.name] : e.target.valueAsNumber || e.target.value
    })
  }

  handleOnClick = () => {
    const {addShowFn} = this.props
    const {title, genre, minsPerEp, numOfEps } = this.state

    addShowFn(title, genre, +minsPerEp, +numOfEps)
    this.setState({
      title: '',
      genre: '',
      minsPerEp: '',
      numOfEps: ''
    })
  }

  render() {
    return(
      <aside id="show-form" className="flex-column">
        <h5>Add A Show!</h5>
        <div className="flex-column">
          <input 
            type="text"
            className="show-form-input" placeholder="Enter Title"
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleTextChange(e)}
          />
          <input 
            type="text"
            className="show-form-input" placeholder="Enter Genre"
            name="genre"
            value={this.state.genre}
            onChange={(e) => this.handleTextChange(e)}
          />
          <input 
            type="number"
            className="show-form-input" placeholder="Enter mins per episode"
            name="minsPerEp"
            value={this.state.minsPerEp}
            onChange={(e) => this.handleNumChange(e)}
          />
          <input 
            type="number"
            className="show-form-input" placeholder="Enter # of episodes"
            name="numOfEps"
            value={this.state.numOfEps}
            onChange={(e) => this.handleNumChange(e)}
          />
          <button 
            id="submit-btn"
            onClick={() => this.handleOnClick()}
            >Add to WatchList</button>
        </div>
      </aside>
    )
  }
}

export default AddShow