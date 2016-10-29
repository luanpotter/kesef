import {render} from 'react-dom';
import React from 'react';
import App from './components/app.jsx';
import Signup from './components/signup.jsx';
import store from './store.jsx';

const PAGES = {
  main : App,
  signup : Signup
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page : 'main' };
  }

  componentDidMount() {
    store.on('page', page => {
      this.setState({ page : page });
    });
  }

  render() {
    var Page = PAGES[this.state.page];
    return <Page />;
  }
}

render(<Main/>, document.getElementById('app'));
