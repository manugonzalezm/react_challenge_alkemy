import Login from './components/Login';
import NavBar from './components/NavBar';
import HeroListContainer from './components/home_list/HeroListContainer';
import HeroDetailContainer from './components/detail/HeroDetailContainer';
import SearchListContainer from './components/search/SearchListContainer';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={ HeroListContainer }/>
          <Route exact path='/:id' component={ HeroDetailContainer }/>
          <Route exact path='/search-:name' component={ SearchListContainer }/>
        </Switch>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
