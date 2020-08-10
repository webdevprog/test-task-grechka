import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import NewsCardsContainer from './components/NewsCards/NewsCardsContainer';
import NewsPageContainer from './components/NewsPage/NewsPageContainer';
import { Home } from './components/Home/Home';
import Profile from './components/Profile/Profile';
import { Container } from 'react-bootstrap';
import { NotFoundPage } from './components/common/NotFoundPage/NotFoundPage';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app-content">
          <Container>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/news" component={() => <NewsCardsContainer />} exact />
              <Route path="/new/:newsId" component={() => <NewsPageContainer />} exact />
              <Route path="/profile/:profileId" component={() => <Profile />} exact />
              <Route component={NotFoundPage} />
            </Switch>
          </Container>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
