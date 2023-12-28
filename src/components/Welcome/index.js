import {Component} from 'react'

//   Welcome component inherits  the methods in the "Component" the react module using "extends" method
//   For Accessing props we use "this.props" method.
class Welcome extends Component {
  render() {
    const {name} = this.props
    return <h1>Hello, {name}</h1>
  }
}

export default Welcome
