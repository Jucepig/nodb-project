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
    const days = Math.floor(totalMins/1440)
    const hours = Math.floor((totalMins - (days*1440))/60)
    const mins = Math.round(totalMins%60)
    if(days) {
      return this.setState({
        convertedRuntime: `${days} day(s), ${hours} hour(s) and ${mins} min(s)`
      })
    } else if (hours) {
      return this.setState({
        convertedRuntime: `${hours} hour(s) and ${mins} min(s)`
      })
    } else if(mins) {
      return this.setState({
        convertedRuntime: `${mins} min(s)`
      })
    } else {
      return this.setState({
        convertedRuntime: `Your schedule is free!`
      })
    }

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