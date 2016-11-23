import React from 'react'

export default function NewInventoryItem(props) {
  function addItem(event) {
    event.preventDefault()
    const description = event.target.children[0].children[0].value
    const quantity = event.target.children[1].children[0].value
    props.handleSubmit(quantity, description)
  }

  return (
    <form onSubmit={addItem}>
      <label>Description: <input type='text' /></label>
      <label>Quantity: <input type='text' /></label>
      <input type='submit' />
    </form>
  )
}
