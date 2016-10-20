import React from 'react';
import {render} from 'react-dom';
import yawp from 'yawp';
import _ from 'lodash';
import Especie from './especie.jsx';
import Popup from './popup.jsx';

class App extends React.Component {
 constructor(props) {
    super(props);
    this.state = { especie : null };
  }

  componentWillMount() {
    console.log('hue');
    yawp('/especies').where('currency', '=', 'BRL').list(especies => {
        this.setState({ especies });
    });
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


render(<App/>, document.getElementById('app'));
