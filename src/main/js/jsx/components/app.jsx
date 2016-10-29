import React from 'react';
import yawp from 'yawp';
import _ from 'lodash';
import Especie from './especie.jsx';
import Popup from './popup.jsx';
import store from '../store.jsx';

class App extends React.Component {
 constructor(props) {
    super(props);
    this.state = { especie : null };
  }

  componentDidMount() {
    this.id = store.on('especies', () => this.setState({ especies }));
    yawp('/especies').where('currency', '=', 'BRL').list(especies => store.emit('especies', especies));
  }

  componentWillUnmount() {
    store.clear(this.id);
  }

  render () {
    return <div>
      <Popup especie={this.state.especie} close={this.closePopup.bind(this)} />
      { this.especiesList() }
    </div>;
  }

  closePopup() {
    this.setState({ especie : null });
  }

  especiesList() {
    if (this.state.especies) {
        return <div className="especies">{ this.state.especies.map(e => <Especie key={e.id} onClick={() => this.setState({especie : e})} {...e} />) }</div>;
    } else {
        return <p>Loading!</p>;
    }
  }
}

module.exports = App;
