import React from 'react'
import Like from './Like'
import Slider from './Slider'
import Bar from './Bar'
import LikeButton from './LikeButton'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <h1>react intro</h1>
      <Like count="0" />
      <Slider startValue="5" />
      <Slider />
      <hr />
      <Slider />
      <LikeButton startCount={10000} />
    </div>
  }

}
