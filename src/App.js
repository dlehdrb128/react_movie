import React from 'react'
import PropTypes from 'prop-types'

class App extends React.Component {
  state = {
    count: 0
  }
 render() {
   return <div>
     <h1>The number is: {this.state.count}</h1>
     <button onClick={this.add}>add</button>
     <button onClick={this.minus}>minus</button>
     </div>
 }
 add = () => {
   console.log('aa')
 };
 minus = () => {
  console.log('minus')
 }
}


export default App;
