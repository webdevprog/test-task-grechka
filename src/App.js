import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import NewsCardsContainer from './components/NewsCards/NewsCardsContainer';
import { Home } from './components/Home/Home';
import { Author } from './components/Author/Author';
import { Container } from 'react-bootstrap';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app-content">
          <Container>
            <Route path="/" component={Home} exact />
            <Route path="/news" component={() => <NewsCardsContainer />} />
            <Route path="/author" component={Author} />
          </Container>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
