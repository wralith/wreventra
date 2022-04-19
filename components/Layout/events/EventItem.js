import React from 'react'

function EventItem(props) {
  return (
    <li>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <img src={props.image} alt={`${props.title}-img`}/>
    </li>
  )
}

export default EventItem