import React from 'react';
import Modal from 'react-modal';

class Popup extends React.Component {
  render () {
    return <Modal isOpen={!!this.props.especie} onRequestClose={this.props.close}>
      <h1>{JSON.stringify(this.props.especie)}</h1>
      <p>Hey, i'm a popup</p>
    </Modal>
  }
}

module.exports = Popup;
