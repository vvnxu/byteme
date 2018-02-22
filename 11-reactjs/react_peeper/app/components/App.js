import React from 'react'
import Peeper from './Peeper'

// localhost:5000/api/peeps
// ['trump sux', 'hello world', 'cucumber'] 

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      peeps: ['loadding...'] 
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/peeps')
      .then(res => res.json())
      .then(res => this.setState({ peeps: res }))
  }

  render() {
    const peeps = this.state.peeps

    return <div>
      <Peeper />
      {peeps.map(function(peep, index){
        return <p key={index}>{peep}</p>
      })}
    </div>
  }

}
