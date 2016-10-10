import React from 'react';
import {render} from 'react-dom';
import yawp from 'yawp';

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
        return <p>{JSON.stringify(this.state.especies)}</p>;
    } else {
        return <p>Loading!</p>;
    }
  }
}

render(<App/>, document.getElementById('app'));
