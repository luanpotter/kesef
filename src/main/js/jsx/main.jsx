import React from 'react';
import {render} from 'react-dom';
import yawp from 'yawp';
import Especie from './especie.jsx';

class App extends React.Component {
 constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    console.log('hue');
    yawp('/especies').where('currency', '=', 'BRL').list(especies => {
        this.setState({ especies });
    });
  }

  render () {
    if (this.state.especies) {
        return <div className="especies">{ this.state.especies.map(e => <Especie key={e.id} {...e} />) }</div>;
    } else {
        return <p>Loading!</p>;
    }
  }
}

render(<App/>, document.getElementById('app'));
