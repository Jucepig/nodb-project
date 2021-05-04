import {Component} from 'react'

class Show extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editMode: false,
      title: '',
      genre: '',
      minsPerEp: 0,
      numOfEps: 0,
      convertedRuntime: ''
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.show.minsPerEp !== prevProps.show.minsPerEp || this.props.show.numOfEps !== prevProps.show.numOfEps) {
      this.findShowRuntime(this.props.show.minsPerEp, this.props.show.numOfEps)
    }
  }

  componentDidMount() {
   const{show} = this.props
   this.findShowRuntime(show.minsPerEp, show.numOfEps)
  }

  findShowRuntime(minsPerEp, numOfEps) {
    const totalMins = +minsPerEp * +numOfEps
    const hours = (totalMins/60)
    const rHours = Math.floor(hours)
    const mins = (hours - rHours) * 60
    const rMins = Math.round(mins)
    this.setState({
      convertedRuntime: `${rHours} hour(s) and ${rMins} min(s)`
    })
  }

  handleTextChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleNumChange = (e) => {
    this.setState({
      [e.target.name] : e.target.valueAsNumber || e.target.value
    })
  }

  toggleEdit = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  handleSave = () => {
    const {title, genre, minsPerEp, numOfEps} = this.state
    const {show, editShowFn} = this.props
    editShowFn(show.id, title, genre, +minsPerEp,+numOfEps)
    this.toggleEdit()
    this.setState({
      title : '',
      genre : '',
      minsPerEp : '',
      numOfEps : ''
    })
  }

  handleDelete = (id) => {
    const {deleteShowFn} = this.props
    deleteShowFn(id)
    this.toggleEdit()
  }



  render() {
    const {show} = this.props
    const {convertedRuntime} = this.state
    return this.state.editMode ? (
      <div key={show.id} className="show-item flex-row">
        <div className="si-btns flex-column">
          <button onClick={this.handleSave}>Save
          </button>
          <button onClick={()=> this.handleDelete(show.id)}>Delete
          </button>
        </div>
        <div className="show-details flex-row">
          <div className="edit-mode flex-column">
            <span className="detail-name">Title</span>
            <input
              type="text"
              value={this.state.title}
              placeholder={show.title}
              name="title"
              onChange={(e) => this.handleTextChange(e)}
            />
          </div>
          <div className="edit-mode flex-column">
            <span className="detail-name">Genre</span>
            <input
              type="text"
              value={this.state.genre}
              placeholder={show.genre}
              name="genre"
              onChange={(e) => this.handleTextChange(e)}
            />
          </div>
          <div className="edit-mode flex-column">
            <span className="detail-name">Mins Per Episode</span>
            <input
              type="number"
              value={this.state.minsPerEp || ''}
              placeholder={`${show.minsPerEp} min(s)`}
              name="minsPerEp"
              onChange={(e) => this.handleNumChange(e)}
            />
          </div>
          <div className="edit-mode flex-column">
            <span className="detail-name">Number of Episodes</span>
            <input 
              type="number"
              value={this.state.numOfEps || ''}
              placeholder={`${show.numOfEps} episode(s)`}
              name="numOfEps"
              onChange={(e) => this.handleNumChange(e)}
            />
          </div>
        </div>
      </div>
    ):(
      <div key={show.id} className="show-item flex-row">
        <section className="si-btns flex-row">
          <button id="edit-btn" onClick={this.toggleEdit}>Edit</button>
        </section>
        <section className="show-details flex-row">
          <div className="show-details-text flex-column">
            <span className="detail-name">Title</span>
            <span>{show.title}</span>
          </div>
          <div className="show-details-text flex-column">
            <span className="detail-name">Genre</span>
            <span>{show.genre}</span>
          </div>
          <div className="flex-column">
            <span className="detail-name">Episode Info</span>
            <span>{show.minsPerEp} mins / {show.numOfEps} episodes</span>
          </div>
          <div className="flex-column">
            <span className="detail-name">Runtime</span>
            <span>{convertedRuntime}</span>
          </div>
        </section>
      </div>
    )
  }
}

export default Show