import React from 'react'
import Like from './Like'
import Slider from './Slider'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <Like count="0" />
      <Slider startValue="5" />
      <h1>react intro</h1>
      <Slider />
    </div>
  }

}
