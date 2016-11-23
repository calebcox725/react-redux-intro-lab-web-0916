import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import InventoryList from './InventoryList'
import NewInventoryItem from './NewInventoryItem'
import { getInventoryListItems, addInventoryListItem } from './actions/inventoryItemsActions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
        </div>
        <NewInventoryItem handleSubmit={ this.props.addInventoryListItem }/>
        <InventoryList inventoryItems={ this.props.items }/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { items: state.inventoryItemsReducer }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addInventoryListItem }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
