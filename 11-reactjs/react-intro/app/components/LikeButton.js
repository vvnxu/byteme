import React from 'react'

export default class LikeButton extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      count: this.props.startCount || 0
    }
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const { count } = this.state 
    return (
      <div><button onClick={this.handleClick}>Like</button> <span>{count}</span></div>
    )
  }

}