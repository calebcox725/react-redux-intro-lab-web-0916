import React from 'react'

export default function InventoryList(props) {
  const inventoryListItems = props.inventoryItems.map(item => {
    return <li>item: {item.description}, quantity: {item.quantity}</li>
  })

  return (
    <ul>
      {inventoryListItems}
    </ul>
  )
}
