import React from 'react'

// putting html in your js - jsx

export default function Like(props) {
  return (
    <div>Like <span>{props.count}</span></div>
  )
}