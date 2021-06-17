import React from 'react';
import {
  BrowserRouter as Router,
  withRouter,
  Route,
} from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import store from './redux/store';
import { compose } from 'redux';
import { SETTINGS } from './settings';
import Header from './components/Header';
import Reset from './components/Reset';
import BaseStyle from './components/BaseStyle';
import styled from 'styled-components';

import Movies from './pages/Movies';

const Wrapper = styled.div`
  width: 100%;
`;

const Main = styled.main`
  padding-top: 10rem;
`;

class App extends React.Component {

  render() {
    const { movies } = SETTINGS.paths;
    return (
        <Wrapper>
          <Header />
          <Main>
            <Route path={movies} render={() => <Movies />} />
          </Main>
        </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

let AppContainer = compose(
  withRouter, 
  connect(mapStateToProps, {  })
)(App);

const MainApp = () => {
  return (
    <Router>
      <Provider store={store}>
        <Reset />
        <BaseStyle />
        <AppContainer />
      </Provider>
    </Router>
  )
}

export default MainApp;
