import {Component} from 'react'
import './index.css'

//    render() method will render the given JSX
//    state object is a Component built in
//    data that can be change over the time is "count value" storing in state object
class Counter extends Component {
  state = {count: 0}
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
