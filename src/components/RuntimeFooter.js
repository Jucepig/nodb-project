import {Component} from 'react'

class RuntimeFooter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      convertedRuntime: ''
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props !== prevProps) {
      this.findTotalRuntime(this.findTotalMins())
    }
  }


  componentDidMount() {
    this.findTotalRuntime(this.findTotalMins())
  }

  findTotalMins() {
    const {showsArr} = this.props
    const totalMinsObj = showsArr.map((show) => {
      return show.numOfEps * show.minsPerEp
    })
    const totalMinsArr = Object.values(totalMinsObj)
    const totalMins = totalMinsArr.reduce((acc, el) => {
      return acc += el
    },0)
    return totalMins
  }

  findTotalRuntime(totalMins) {
    const hours = (totalMins/60)
    const rHours = Math.floor(hours)
    const mins = (hours - rHours) * 60
    const rMins = Math.round(mins)
    this.setState({
      convertedRuntime: `${rHours} hour(s) and ${rMins} min(s)`
    })
  }

  render() {
    return(
      <footer id="wl-footer"className="flex-row">
        <div>
          <span>TOTAL RUNTIME: {this.state.convertedRuntime}</span>
        </div>   
      </footer>
    )
  }
}

export default RuntimeFooter