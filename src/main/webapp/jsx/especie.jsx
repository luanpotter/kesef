import React from 'react';

const IMGS = {};
IMGS.MOEDA = require('../images/coins.png');
IMGS.PAPEL = require('../images/notes.png');

class Especie extends React.Component {
  render () {
    return <div className="especie">
      <span className="currency">{ this.props.currency }</span>
      <span className="type"><img src={IMGS[this.props.type]} /></span>
      <span className="value">{ this.props.centsValue }</span>
    </div>;
  }
}

module.exports = Especie;
