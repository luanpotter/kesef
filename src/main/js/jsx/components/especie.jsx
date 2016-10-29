import React from 'react';
import numeral from 'numeral';
import yawp from 'yawp';

const IMGS = {};
IMGS.MOEDA = require('../../images/coins.png');
IMGS.PAPEL = require('../../images/notes.png');

import store from '../store.jsx';

var inlineBlock = {
  display: 'inline-block'
};

var especiesStyle = {
  borderRadius: '16px',
  border: '1px solid gray',
  backgroundColor: 'white',
  margin: '4px',
  padding: '1px',
  width: 'calc(33% - 2*4px)',
  color: 'black',
  display: 'inline-block',
  fontSize: '2em',
  cursor: 'pointer'
};

var smallText = {
  fontSize: '0.3em'
};

class Especie extends React.Component {
  componentDidMount() {
    store.get('user').then(function (me) {
      yawp('/products').where('especie', '=', this.props.id).where('owner', '=', me.id).list(function (r) {
        console.log(r); // sum all!
      });
    });
  }

  render () {
    return <div className="especie" style={ especiesStyle } onClick={this.props.onClick} >
      <div className="type" style={ inlineBlock }><img src={IMGS[this.props.type]} /></div>
      <div style={ inlineBlock }>
        <div>
          <span className="currency">{ this.props.currency } </span>
          <span className="value">{ numeral(this.props.centsValue/100).format('0.00') }</span>
        </div><div style={ smallText }>
          <span className="amount">Own: 100 | Buy: 20</span>
        </div>
      </div>
    </div>;
  }
}

module.exports = Especie;
